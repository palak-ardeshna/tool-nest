import assert from "node:assert/strict";
import test from "node:test";

import { groupSections } from "../src/lib/content";
import { coverStyle, MOTIF_COUNT } from "../src/lib/cover-art";
import { readingMinutes } from "../src/lib/format";
import { extractPrices, newPrices, pricingUrls } from "../scripts/watch-pricing";

const section = (n: number) => `<h2>Section ${n}</h2><p>Body ${n}</p>`;

test("short articles are never split, so they carry no in-content ad", () => {
  assert.equal(groupSections("<p>Just a paragraph</p>").length, 1);
  assert.equal(groupSections(section(1) + section(2)).length, 1);
});

test("medium articles get one break, long articles get two", () => {
  assert.equal(groupSections([1, 2, 3].map(section).join("")).length, 2);
  assert.equal(groupSections([1, 2, 3, 4, 5, 6].map(section).join("")).length, 3);
});

test("splitting preserves every byte of the original content", () => {
  const html = "<p>Intro</p>" + [1, 2, 3, 4, 5].map(section).join("");
  assert.equal(groupSections(html).join(""), html);
});

test("a break never lands mid-section", () => {
  for (const group of groupSections([1, 2, 3, 4, 5, 6].map(section).join("")).slice(1)) {
    assert.ok(group.startsWith("<h2"), `group started mid-section: ${group.slice(0, 30)}`);
  }
});

test("reading time ignores markup", () => {
  const words = Array.from({ length: 440 }, () => "word").join(" ");
  assert.equal(readingMinutes(`<p>${words}</p>`), 2);
  assert.equal(readingMinutes("<p>short</p>"), 1);
});

test("cover art is stable for a slug and stays in range", () => {
  assert.deepEqual(coverStyle("some-article"), coverStyle("some-article"));
  assert.ok(coverStyle("some-article").motif < MOTIF_COUNT);
});

test("cover art spreads motifs and palettes across a realistic slug set", () => {
  const styles = Array.from({ length: 60 }, (_, i) => coverStyle(`article-number-${i}-title`));
  assert.equal(new Set(styles.map((s) => s.motif)).size, MOTIF_COUNT);
  assert.ok(new Set(styles.map((s) => s.palette.mark)).size >= 6);

  const counts = new Map<number, number>();
  for (const { motif } of styles) counts.set(motif, (counts.get(motif) ?? 0) + 1);
  assert.ok(Math.max(...counts.values()) <= 20, "one motif dominates the grid");
});

test("pricing watcher reads price tokens, not page noise", () => {
  const html = `<script>var t="$99"</script><p>Pro <b>$20</b>/mo, Team&nbsp;$ 40, €18, again $20</p>`;
  assert.deepEqual(extractPrices(html), ["$20", "$40", "€18"]);
  assert.deepEqual(newPrices(["$20", "$40"], ["$25", "$40"]), ["$25"]);
  assert.deepEqual(
    pricingUrls([
      `url: "https://a.com/pricing", url: "https://a.com/docs", url: "https://b.com/plans.html", url: "https://c.org/simple-plans"`,
    ]),
    ["https://a.com/pricing", "https://b.com/plans.html"],
  );
});
