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

test("no article reads like unedited model output", () => {
  for (const article of articles) {
    const prose = `${article.title} ${article.excerpt} ${article.content}`;
    const tell = prose.match(aiTells);
    assert.equal(tell, null, `${article.slug}: AI-tell phrase "${tell?.[0]}"`);
    assert.match(article.content, /\byou(r|rs)?\b/i, `${article.slug}: never addresses the reader`);
    assert.match(article.content, /\b(we|our)\b/i, `${article.slug}: no editorial voice`);
  }
});
