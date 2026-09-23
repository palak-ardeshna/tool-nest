/**
 * Watches the vendor pricing pages the articles already cite and reports when
 * the prices on one change. Run weekly by .github/workflows/watch-pricing.yml.
 *
 * The watch list is every `url:` in articles/ and drafts/ that looks like a
 * pricing page, so citing a new pricing page adds it here with no extra step.
 *
 * A change is a lead, not a data point: the article rule still needs Parth to
 * use or measure the tool before anything is written about it.
 *
 *   tsx scripts/watch-pricing.ts <state.json> <report.md>
 *
 * Writes <report.md> only when a price appears that was never seen on that
 * page before. The first run records a baseline and reports nothing.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const CONTENT_DIRS = ["src/content/articles", "src/content/drafts"];

/** Every price token ever seen per URL. */
type State = Record<string, string[]>;

/**
 * Pricing pages serve different variants (A/B tests, edge caches) from one
 * request to the next, so a single fetch diffed against last week is mostly
 * noise. Instead each run reads a page a few times and only reports prices
 * that were never seen on it before; the known set grows until every variant
 * has been seen once and the page goes quiet.
 */
// ponytail: removals are not reported, and a price that returns to an old value is missed; a real change almost always adds a new number.
const READS = 3;
/** The baseline reads more, so most variants are known before the first report. */
const BASELINE_READS = 10;

export function pricingUrls(files: string[]): string[] {
  const urls = new Set<string>();
  for (const text of files) {
    for (const [, url] of text.matchAll(/url:\s*"(https?:\/\/[^"]+)"/g)) {
      if (/pric|\/plans?(\.html|\/|$)/i.test(url)) urls.add(url);
    }
  }
  return [...urls].sort();
}

/**
 * The set of price tokens on a page. Comparing only these ignores the copy,
 * nonces and timestamps that change on every load.
 */
// ponytail: prices rendered client-side are invisible to a plain fetch; those pages stay silent, use a headless browser if one matters.
export function extractPrices(html: string): string[] {
  const text = html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ");
  const found = text.match(/[$€£₹]\s?\d+(?:,\d{3})*(?:\.\d+)?/g) ?? [];
  return [...new Set(found.map((p) => p.replace(/\s/g, "")))].sort();
}

export function newPrices(known: string[], seen: string[]): string[] {
  return seen.filter((p) => !known.includes(p));
}

async function main([statePath, reportPath]: string[]) {
  if (!statePath || !reportPath) throw new Error("usage: watch-pricing.ts <state.json> <report.md>");

  const files = CONTENT_DIRS.flatMap((dir) =>
    readdirSync(dir)
      .filter((f) => f.endsWith(".ts"))
      .map((f) => readFileSync(`${dir}/${f}`, "utf8")),
  );
  const urls = pricingUrls(files);
  const firstRun = !existsSync(statePath);
  const state: State = firstRun ? {} : JSON.parse(readFileSync(statePath, "utf8"));
  const changes: string[] = [];
  const unreadable: string[] = [];

  for (const url of urls) {
    const seen = new Set<string>();
    try {
      for (let i = 0; i < (state[url] ? READS : BASELINE_READS); i++) {
        const res = await fetch(url, {
          headers: {
            "user-agent": "Mozilla/5.0 (compatible; ToolNest pricing check)",
            // Without it some pages localise to "$0,125" and every token looks new.
            "accept-language": "en-US,en;q=0.9",
          },
          signal: AbortSignal.timeout(20_000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        for (const p of extractPrices(await res.text())) seen.add(p);
      }
    } catch (error) {
      unreadable.push(`${url} (${(error as Error).message})`);
      continue; // keep the last good reading
    }
    const prices = [...seen].sort();
    if (!prices.length) {
      unreadable.push(`${url} (no prices in the HTML)`);
      continue;
    }

    const known = state[url];
    if (known) {
      const added = newPrices(known, prices);
      if (added.length) changes.push(`- ${url}\n  - new: ${added.join(", ")}`);
    }
    state[url] = [...new Set([...(known ?? []), ...prices])].sort();
  }

  writeFileSync(statePath, JSON.stringify(state, null, 2));
  console.log(`${urls.length} pricing pages, ${changes.length} changed, ${unreadable.length} unreadable`);
  for (const line of unreadable) console.log(`  unreadable: ${line}`);
  if (firstRun) console.log("first run: baseline recorded");

  if (changes.length) {
    writeFileSync(
      reportPath,
      [
        "These pages show prices the weekly check has never seen on them before.",
        "",
        ...changes,
        "",
        "Re-read each page before trusting this: this compares price tokens only, so a promo banner, a new currency or a page variant not seen before shows up too.",
        "",
        "A change is a lead, not a data point. Per the article rule, write about it only after using or measuring the tool yourself. Published articles are frozen, so fix one only if the price in it is now wrong.",
      ].join("\n"),
    );
  }
}

if (process.argv[1]?.endsWith("watch-pricing.ts")) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
