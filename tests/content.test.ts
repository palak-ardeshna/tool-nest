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
    assert.match(article.content, /\b(we|our)\b/i, `${article.slug}: no editorial voice`);
  }
});

test("every article links out to another article that exists", () => {
  const slugs = new Set(articles.map((a) => a.slug));
  for (const article of articles) {
    const links = [...article.content.matchAll(/href="\/articles\/([^"#?]+)"/g)].map((m) => m[1]);
    assert.ok(links.length > 0, `${article.slug}: no in-body link to another article`);
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
 * /articles is the only page linking the whole back catalogue, and the helper
 * it reads through defaults to nine. Listing a slice there silently drops the
 * older half of the site out of its own index.
 */
test("the archive page lists every published article", async () => {
  const { allArticles } = await import("../src/content");
  assert.equal(
    allArticles.length,
    articles.filter((a) => Date.parse(a.publishedAt) <= Date.now()).length,
    "allArticles should expose every published article",
  );
  const source = await import("node:fs").then((fs) =>
    fs.readFileSync("src/app/(site)/articles/page.tsx", "utf8"),
  );
  assert.match(
    source,
    /const articles = allArticles;/,
    "/articles must render allArticles, not a getLatestArticles() slice",
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
