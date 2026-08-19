import assert from "node:assert/strict";
import test from "node:test";

import { groupSections } from "../src/lib/content";
import { coverStyle, MOTIF_COUNT } from "../src/lib/cover-art";
import { readingMinutes, slugify } from "../src/lib/format";
import { checkPassword, hashPassword, createSessionToken, verifySessionToken } from "../src/lib/auth";

// The auth helpers read these at call time, so setting them here is enough.
process.env.AUTH_SECRET = "test-secret-at-least-16-chars";
process.env.ADMIN_PASSWORD_HASH = hashPassword("correct-horse");

const section = (n: number) => `<h2>Section ${n}</h2><p>Body ${n}</p>`;

test("short articles are never split, so they carry no in-content ad", () => {
  assert.equal(groupSections("<p>Just a paragraph</p>").length, 1);
  assert.equal(groupSections(section(1) + section(2)).length, 1);
});

test("medium articles get one break, long articles get two", () => {
  const medium = [1, 2, 3].map(section).join("");
  assert.equal(groupSections(medium).length, 2);

  const long = [1, 2, 3, 4, 5, 6].map(section).join("");
  assert.equal(groupSections(long).length, 3);
});

test("splitting preserves every byte of the original content", () => {
  const html = "<p>Intro</p>" + [1, 2, 3, 4, 5].map(section).join("");
  assert.equal(groupSections(html).join(""), html);
});

test("a break never lands mid-section", () => {
  const html = [1, 2, 3, 4, 5, 6].map(section).join("");
  for (const group of groupSections(html).slice(1)) {
    assert.ok(group.startsWith("<h2"), `group started mid-section: ${group.slice(0, 30)}`);
  }
});

test("slugify produces clean, url-safe slugs", () => {
  assert.equal(slugify("ChatGPT vs Claude for Coding!"), "chatgpt-vs-claude-for-coding");
  assert.equal(slugify("  Héllo — Wörld  "), "hello-world");
  assert.equal(slugify("a".repeat(200)).length, 96);
});

test("reading time ignores markup", () => {
  const words = Array.from({ length: 440 }, () => "word").join(" ");
  assert.equal(readingMinutes(`<p>${words}</p>`), 2);
  assert.equal(readingMinutes("<p>short</p>"), 1);
});

test("session tokens verify, and tampered or expired ones do not", () => {
  const token = createSessionToken();
  assert.equal(verifySessionToken(token), true);
  assert.equal(verifySessionToken(undefined), false);
  assert.equal(verifySessionToken("garbage"), false);
  assert.equal(verifySessionToken(`${token.split(".")[0]}.deadbeef`), false);
  assert.equal(verifySessionToken(`1.${token.split(".")[1]}`), false);
});

test("password check rejects wrong and near-miss passwords", () => {
  assert.equal(checkPassword("correct-horse"), true);
  assert.equal(checkPassword("correct-horse "), false);
  assert.equal(checkPassword("Correct-horse"), false);
  assert.equal(checkPassword(""), false);
});

test("hashing is salted, so the same password never produces the same hash", () => {
  assert.notEqual(hashPassword("correct-horse"), hashPassword("correct-horse"));
  assert.match(hashPassword("correct-horse"), /^[0-9a-f]{32}:[0-9a-f]{128}$/);
});

test("a malformed hash is a configuration error, not a silent pass", () => {
  const previous = process.env.ADMIN_PASSWORD_HASH;
  process.env.ADMIN_PASSWORD_HASH = "no-colon-here";
  assert.throws(() => checkPassword("anything"));
  delete process.env.ADMIN_PASSWORD_HASH;
  assert.throws(() => checkPassword("anything"));
  process.env.ADMIN_PASSWORD_HASH = previous;
});

test("cover art is stable for a slug and stays in range", () => {
  const first = coverStyle("chatgpt-vs-claude-for-coding");
  const second = coverStyle("chatgpt-vs-claude-for-coding");
  assert.deepEqual(first, second);
  assert.ok(first.motif >= 0 && first.motif < MOTIF_COUNT);
});

test("cover art spreads motifs and palettes across a realistic slug set", () => {
  // Deriving palette and motif from one hash correlates them and leaves some
  // motifs unused, which shows up as a grid of near-identical cards.
  const slugs = Array.from({ length: 60 }, (_, i) => `article-number-${i}-some-title`);
  const styles = slugs.map(coverStyle);

  assert.equal(new Set(styles.map((style) => style.motif)).size, MOTIF_COUNT);
  assert.ok(new Set(styles.map((style) => style.palette.mark)).size >= 6);

  const counts = new Map<number, number>();
  for (const { motif } of styles) counts.set(motif, (counts.get(motif) ?? 0) + 1);
  // No motif should take more than a third of the grid.
  assert.ok(Math.max(...counts.values()) <= slugs.length / 3);
});
