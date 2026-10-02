import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import { articles } from "../src/content/articles";
import { authors } from "../src/content/authors";
import { categories } from "../src/content/categories";

/**
 * Content lives in files, so a typo in a slug is the failure mode that would
 * previously have been a foreign key. These checks are the replacement.
 */

const authorSlugs = new Set(authors.map((a) => a.slug));
const categorySlugs = new Set(categories.map((c) => c.slug));

test("every slug is unique", () => {
  for (const [label, slugs] of [
    ["article", articles.map((a) => a.slug)],
    ["author", [...authorSlugs]],
    ["category", [...categorySlugs]],
  ] as const) {
    assert.equal(new Set(slugs).size, slugs.length, `duplicate ${label} slug`);
  }
});

test("every article references a category and an author that exist", () => {
  for (const article of articles) {
    assert.ok(categorySlugs.has(article.category), `${article.slug}: bad category "${article.category}"`);
    assert.ok(authorSlugs.has(article.author), `${article.slug}: bad author "${article.author}"`);
  }
});

test("every sub-category points at a real top-level section", () => {
  for (const category of categories) {
    if (!category.parent) continue;
    const parent = categories.find((c) => c.slug === category.parent);
    assert.ok(parent, `${category.slug}: unknown parent "${category.parent}"`);
    assert.ok(!parent.parent, `${category.slug}: nesting is only one level deep`);
  }
});

test("every referenced image file is actually in the repo", () => {
  for (const article of articles) {
    if (!article.image) continue;
    const file = path.join(process.cwd(), "public", article.image);
    assert.ok(existsSync(file), `${article.slug}: missing image ${article.image}`);
    assert.ok(article.imageAlt, `${article.slug}: image without alt text`);
  }
});

test("slugs are url-safe and dates parse", () => {
  for (const article of articles) {
    assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${article.slug}: not url-safe`);
    assert.ok(!Number.isNaN(Date.parse(article.publishedAt)), `${article.slug}: bad publishedAt`);
    if (article.contentUpdatedAt) {
      assert.ok(
        Date.parse(article.contentUpdatedAt) >= Date.parse(article.publishedAt),
        `${article.slug}: updated before it was published`,
      );
    }
  }
});

test("no article is thin, and each has the metadata a listing needs", () => {
  for (const article of articles) {
    const words = article.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
    assert.ok(words >= 300, `${article.slug}: only ${words} words`);
    assert.ok(article.excerpt.length >= 40, `${article.slug}: excerpt too short`);
    assert.ok(article.tags.length > 0, `${article.slug}: no tags`);
  }
});

test("every navigable section has at least one article", () => {
  for (const category of categories) {
    const children = categories.filter((c) => c.parent === category.slug).map((c) => c.slug);
    const scope = new Set([category.slug, ...children]);
    const count = articles.filter((a) => scope.has(a.category)).length;
    assert.ok(count > 0, `category "${category.slug}" has no articles`);
  }
});

/**
 * Editorial rules that keep drafts from reading as unedited model output —
 * the "low value content" bar AdSense and Search both apply. Vocabulary an
 * LLM reaches for and a person does not, plus the two voice markers that
 * separate a written article from a generated one: it addresses the reader,
 * and the publication is willing to say what it thinks.
 */
const aiTells =
  /\b(furthermore|moreover|delve|delving|in conclusion|in summary|tapestry|testament to|revolutioniz|beacon|realm of|landscape of|navigating the|unlock the|game.?chang|seamlessly|ever.?evolving|it's worth noting|dive into|embark|myriad|plethora|holistic|synergy)\b/i;

/** Every field that reaches the page, not just the body. */
function renderedText(article: (typeof articles)[number]) {
  return [
    article.title,
    article.excerpt,
    article.seoTitle,
    article.seoDescription,
    article.quickAnswer,
    ...(article.pros ?? []),
    ...(article.cons ?? []),
    ...(article.faqs ?? []).flatMap((f) => [f.question, f.answer]),
    ...(article.alternatives ?? []).map((a) => a.note ?? ""),
    article.content,
  ].join(" ");
}

test("no article reads like unedited model output", () => {
  for (const article of articles) {
    const prose = renderedText(article);
    const tell = prose.match(aiTells);
    assert.equal(tell, null, `${article.slug}: AI-tell phrase "${tell?.[0]}"`);
    assert.match(article.content, /\byou(r|rs)?\b/i, `${article.slug}: never addresses the reader`);
    assert.doesNotMatch(article.content.replace(/"[^"]*"/g, ""), /\b(we|our|ourselves)\b/i, `${article.slug}: plural voice on a one-person site`);
  }
});

test("every article links out to another article that exists", () => {
  const slugs = new Set(articles.map((a) => a.slug));
  for (const article of articles) {
    const links = [...article.content.matchAll(/href="\/articles\/([^"#?]+)"/g)].map((m) => m[1]);
    // A lone article in its section has no cluster to link into yet. Published
    // articles are frozen, so only new ones are held to linking out.
    const hasSibling = articles.some((a) => a !== article && a.category === article.category);
    if (hasSibling && newArticles.includes(article)) assert.ok(links.length > 0, `${article.slug}: no in-body link to another article`);
    for (const target of links) {
      assert.ok(slugs.has(target), `${article.slug}: dead internal link /articles/${target}`);
      assert.notEqual(target, article.slug, `${article.slug}: links to itself`);
    }
  }
});

/** The publication writes in British English. A mixed dialect reads as stitched-together drafts. */
test("spelling stays in one dialect", () => {
  const american =
    /\b\w*(organiz|summariz|recogniz|analyz|behavior|optimiz|prioritiz|customiz|minimiz|maximiz|utiliz|labeled|traveling)\w*\b/i;
  for (const article of articles) {
    // Code samples are not prose — ANALYZE is SQL, not a spelling choice.
    const prose = renderedText(article).replace(/<(pre|code)\b[^>]*>[\s\S]*?<\/\1>/g, " ");
    const hit = prose.match(american);
    assert.equal(hit, null, `${article.slug}: American spelling "${hit?.[0]}" in a British-English publication`);
  }
});

test("cited sources are absolute https urls, unique per article, and dated", () => {
  for (const article of articles) {
    if (!article.sources) continue;
    const urls = article.sources.map((source) => source.url);
    assert.equal(new Set(urls).size, urls.length, `${article.slug}: duplicate source url`);
    for (const source of article.sources) {
      assert.match(source.url, /^https:\/\//, `${article.slug}: source not https — ${source.url}`);
      assert.ok(source.title.trim(), `${article.slug}: source without a title`);
      assert.ok(source.publisher.trim(), `${article.slug}: source without a publisher`);
      assert.ok(
        !Number.isNaN(Date.parse(source.checkedAt)),
        `${article.slug}: bad checkedAt on ${source.url}`,
      );
    }
  }
});

/**
 * SERP presentation. Google truncates a title around 60 characters and the
 * template appends " | ToolNest" to every one of them, so the budget an article
 * actually gets is shorter than the string in the file.
 */
test("rendered page titles fit in a search result", () => {
  const suffix = " | ToolNest";
  for (const article of articles) {
    const rendered = (article.seoTitle ?? article.title) + suffix;
    assert.ok(
      rendered.length <= 60,
      `${article.slug}: title renders as ${rendered.length} chars — "${rendered}"`,
    );
  }
});

/**
 * /articles is the entry to the whole back catalogue. It is paginated, so the
 * guarantee is no longer "page 1 shows everything" but "the pages together show
 * everything, and nothing is stranded on a page that is never built". A
 * getLatestArticles() slice would silently drop the older half of the site.
 */
test("the archive pages together list every published article", async () => {
  const { allArticles } = await import("../src/content");
  const published = articles.filter((a) => Date.parse(a.publishedAt) <= Date.now()).length;
  assert.equal(allArticles.length, published, "allArticles should expose every published article");

  const { PER_PAGE, pageCount, pageSlice } = await import("../src/lib/pagination");
  const seen = new Set<string>();
  for (let n = 1; n <= pageCount(); n++) {
    const slice = pageSlice(n);
    assert.ok(slice.length > 0, `page ${n} is built but empty`);
    assert.ok(slice.length <= PER_PAGE, `page ${n} shows more than ${PER_PAGE} articles`);
    for (const a of slice) seen.add(a.slug);
  }
  assert.equal(seen.size, allArticles.length, "some articles are not reachable from any archive page");

  const source = await import("node:fs").then((fs) =>
    fs.readFileSync("src/app/(site)/articles/page.tsx", "utf8"),
  );
  assert.match(
    source,
    /pageSlice\(1\)/,
    "/articles must render page 1 of the paginated archive, not a getLatestArticles() slice",
  );
});

/**
 * Meta descriptions. Google truncates the snippet around 155-160 characters,
 * and a description that ends mid-clause reads as carelessness on the one
 * surface a reader sees before deciding whether to click.
 */
test("meta descriptions fit in a search snippet", () => {
  for (const article of articles) {
    const description = article.seoDescription ?? article.excerpt;
    assert.ok(
      description.length <= 155,
      `${article.slug}: description is ${description.length} chars — "${description}"`,
    );
  }
});

/**
 * Publishing is "add a file, add an import line". A file without its line
 * typechecks, builds and is never published — the one content mistake nothing
 * else here catches.
 */
test("every article file is wired into the index", async () => {
  const { readdirSync } = await import("node:fs");
  const files = readdirSync("src/content/articles").filter((f) => f.endsWith(".ts") && f !== "index.ts");
  assert.equal(articles.length, files.length, "an article file is missing from src/content/articles/index.ts");
});

/**
 * Cadence. CLAUDE.md caps publishing at two articles a day: batches are the
 * fingerprint AdSense rejects, and a 22-file launch dump is what got this site
 * flagged. The 61 articles that predate the rule stay as they are; anything
 * dated after it is held to it.
 *
 * This was a two-a-week window until 2026-09-26, when Parth chose to publish a
 * second pair two days after the first. The weekly cap is still the better
 * habit — the daily cap is only the floor that the test enforces.
 */
test("no more than two articles publish on any single day", () => {
  const RULE_DATE = Date.parse("2026-09-18");
  const perDay = new Map();
  for (const a of articles) {
    if (Date.parse(a.publishedAt) <= RULE_DATE) continue;
    perDay.set(a.publishedAt, (perDay.get(a.publishedAt) ?? 0) + 1);
  }
  for (const [day, count] of perDay) {
    assert.ok(count <= 2, `${count} articles published on ${day}; the cap is two`);
  }
});

/**
 * The human-review rule (CLAUDE.md). Articles after this date must carry
 * Palak's own sign-off, his own words inside the body, his own cover image,
 * and no text lifted from another article on the site.
 */
const HUMAN_RULE_DATE = Date.parse("2026-09-29");
const plain = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
/** A rewrite on an older URL counts as new: publishedAt keeps the URL's first date. */
const newArticles = articles.filter((a) => Date.parse(a.contentUpdatedAt ?? a.publishedAt) > HUMAN_RULE_DATE);

test("new articles carry Palak's sign-off and his own paragraph", () => {
  for (const a of newArticles) {
    const r = a.humanReview;
    assert.ok(r, `${a.slug}: no humanReview — Palak has not signed this off`);
    assert.ok(Date.parse(r.reviewedAt) <= Date.parse(a.contentUpdatedAt ?? a.publishedAt), `${a.slug}: reviewed after it was published`);
    const words = r.experience.trim().split(/\s+/).length;
    assert.ok(words >= 60, `${a.slug}: experience paragraph is ${words} words; write at least 60`);
    assert.match(r.experience, /\b(I|my|me)\b/, `${a.slug}: experience paragraph is not first-person`);
    assert.match(r.experience, /\d/, `${a.slug}: experience paragraph has no number from your own use`);
    assert.ok(plain(a.content).includes(plain(r.experience)), `${a.slug}: experience paragraph is not in the article body word for word`);
  }
});

test("new articles copy no passage from another article", () => {
  const SHINGLE = 10; // ponytail: catches copying inside the site only; check against the web by hand before publishing
  const shingles = (html: string) => {
    const w = plain(html).toLowerCase().split(" ");
    return new Set(w.slice(0, -SHINGLE + 1).map((_, i) => w.slice(i, i + SHINGLE).join(" ")));
  };
  const all = articles.map((a) => ({ slug: a.slug, s: shingles(a.content) }));
  for (const a of newArticles) {
    const mine = shingles(a.content);
    for (const other of all) {
      if (other.slug === a.slug) continue;
      const hit = [...mine].find((s) => other.s.has(s));
      assert.equal(hit, undefined, `${a.slug}: "${hit}…" also appears in ${other.slug}`);
    }
  }
});

/**
 * The AdSense report (2026-09-28): reviewers judged the site AI-generated from
 * its wording and from the About page advertising AI drafting. New articles
 * get a stricter word list than the frozen ones, and no page may describe how
 * AI was used to write the site.
 */
const aiTellsStrict =
  /\b(crucial|robust|leverag\w*|elevate|streamlin\w*|comprehensive guide|in today's|fast-paced|digital age|whether you're|look no further|unleash|harness(ing)? the power|cutting-edge|pivotal|foster(ing)?|meticulous\w*|intricate|bustling|vibrant|nestled|treasure trove|paradigm|boasts|underscor\w*|showcas\w*|it's important to note|key takeaways?|let's dive|buckle up|a must-have|stands out as|in the world of|when it comes to|at the end of the day|as an ai|i hope this helps|great question|certainly!)\b/i;
/** The strongest humanizer (blader/humanizer) patterns: §1 not-X-but-Y, §2 closers, §4 staged openers, §22 residue. */
const humanizerTells =
  /\b(it'?s not (just |only |merely )?[^.;]{1,60}[,;] it'?s|not (just|only|merely) [^.;]{1,60}, but|that is the real win|that distinction matters|read that again|let that sink in|here'?s the thing|here'?s what you need to know|let'?s (dive|explore|break this down)|without further ado|the real question is|at its core|i hope this helps|let me know if)\b/i;
const aiAdmission = /\b(AI[- ]assist(ed|ance)|(drafted|written|generated|created) (with|by|using) (an? )?(AI|LLM|ChatGPT|Claude|model))\b/i;

test("new articles avoid the wording AdSense reviewers read as AI", () => {
  for (const a of newArticles) {
    const prose = renderedText(a);
    const tell = prose.match(aiTellsStrict);
    assert.equal(tell, null, `${a.slug}: AI-sounding phrase "${tell?.[0]}"`);
    const staged = plain(prose).match(humanizerTells);
    assert.equal(staged, null, `${a.slug}: humanizer pattern "${staged?.[0]}"; run /humanizer on it`);
    const words = plain(a.content).split(" ").length;
    const dashes = (a.content.match(/—/g) ?? []).length;
    assert.ok(dashes <= Math.ceil(words / 400), `${a.slug}: ${dashes} em dashes in ${words} words; use commas or full stops`);
  }
});

test("no page tells readers the site is drafted with AI", async () => {
  const { readFileSync, readdirSync } = await import("node:fs");
  const pagesDir = path.join(process.cwd(), "src/app/(site)");
  const pages = readdirSync(pagesDir, { recursive: true, encoding: "utf8" })
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => ({ name: f, text: readFileSync(path.join(pagesDir, f), "utf8") }));
  const texts = [
    ...pages,
    ...authors.map((a) => ({ name: `author ${a.slug}`, text: a.bio ?? "" })),
    ...articles.map((a) => ({ name: a.slug, text: renderedText(a) })),
  ];
  for (const { name, text } of texts) {
    const hit = text.match(aiAdmission);
    assert.equal(hit, null, `${name}: "${hit?.[0]}" — describe what you did, not which tool drafted it`);
  }
});

/**
 * One template repeated on every page is a scaled-content fingerprint. A new
 * article may not use the same set of blocks as the article published before it.
 */
test("a new article does not copy the previous article's layout", () => {
  const layout = (a: (typeof articles)[number]) =>
    [
      a.quickAnswer && "answer",
      (a.pros?.length || a.cons?.length) && "pros-cons",
      a.alternatives?.length && "alternatives",
      a.faqs?.length && "faq",
      /<table/.test(a.content) && "table",
      /<ol/.test(a.content) && "steps",
    ].filter(Boolean).join("+");
  const byDate = [...articles].sort((x, y) => Date.parse(x.publishedAt) - Date.parse(y.publishedAt) || x.slug.localeCompare(y.slug));
  byDate.forEach((a, i) => {
    if (i === 0 || !newArticles.includes(a)) return;
    const prev = byDate[i - 1];
    assert.notEqual(layout(a), layout(prev), `${a.slug}: same layout as ${prev.slug} (${layout(a)}); change which blocks it uses`);
  });
});

/** Articles never carry an image; the generated cover art is the only cover (Palak, 2026-09-29). */
test("no article has an image", () => {
  for (const a of articles) assert.equal(a.image, undefined, `${a.slug}: articles never have an image; remove it`);
});
