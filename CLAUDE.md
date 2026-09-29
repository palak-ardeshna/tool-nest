@AGENTS.md

# Article rule (applies to every new article in `src/content/articles/`)

**Published articles are frozen.** The site is live and indexed; once an article ships, its content, slug, title and image do not change. Everything below must be right in the first commit — there is no "fix it later". Only touch an existing article when Palak explicitly asks (typo, wrong price, dead link).

The one test: **an article must contain something that did not exist until Palak did something** — used the tool, measured it, hit a limit, chose against the vendor's claim. Everything below serves that.

## Before drafting — do not start without
1. **Demand signal.** Name the exact query this targets and one proof people search it (autocomplete, People-also-ask, a competing article). Prefer `X vs Y`, `best X for [use case]`, `is X worth it (year)`, `X after [product change]`. Reject generic top-10 topics.
2. **A real data point Palak can supply.** One of: a number from his own run (time, cost, count, error), a limit he hit, or a judgement that narrows/contradicts the vendor's claim. **If he has not used the tool and cannot get one: do not write the article yet, or write it honestly as a spec/pricing comparison and say so in the first paragraph.** Never fabricate first-person experience.

## Draft
- AI may scaffold `quickAnswer`, `pros`/`cons`, `alternatives`, `faqs`, `sources` from vendor docs. `content` must include at least one paragraph that could only come from using the tool, plus at least one real downside (not a softened positive).
- `quickAnswer` answers the literal query. `vs`/comparison articles put the decision table above the fold.
- Every fact that can go stale carries a date or version. `sources[].checkedAt` is the day it was actually read; re-verify on any update.
- Voice: `I`/`my`, address the reader as `you`, short paragraphs, no AI-tell phrases (tests enforce these).
- Link to the strongest existing article in the same cluster.

## Image
- **Articles never have an image**, not even Palak's screenshots (Palak's decision, 2026-09-29). Leave `image` and `imageAlt` out; the site shows its generated cover art. The test fails on any article with an image. Drafts that still carry one must drop it before publishing.

## Layout — every article is built differently
One template repeated on every page is a scaled-content fingerprint. Pick the shape from the article type, and never reuse the previous article's block set (the test fails if you do):
- **X vs Y:** decision table first, then `quickAnswer`, then `alternatives`. No pros/cons.
- **How-to / setup log:** numbered steps (`<ol>`) with what broke, plus pros/cons of the approach. No FAQ.
- **Price or policy change:** the old/new numbers table and one worked example of the bill, plus FAQ. No alternatives.
- **Explainer / gotcha:** plain sections with no quick answer and no pros/cons; FAQ optional.
- **Roundup:** comparison table, pros/cons, alternatives. No FAQ.
- **Short take (300–500 words):** one finding and one number, `sources` only.
Also vary the headings, the opening (a number, a problem, a question, or what happened) and the length. `sources` stays on every article.

## Human review — enforced for articles published after 2026-09-29
Every new article needs a `humanReview` block, and `npm test` fails without it:
- `experience`: a paragraph of at least 60 words built only from Palak's facts, first person, with at least one number from his own use. It must appear word for word in `content`.
- `reviewedAt`: the day Palak confirmed the facts in chat and said to publish. It must be on or before `publishedAt`.

**Palak does not write prose; Claude writes the whole article, but only from Palak's real facts.** Before drafting, Claude asks Palak for his facts: what he used the tool for, one number from his own use, and one real downside. Palak may answer in Gujarati or in short notes. Claude turns those facts into the `experience` paragraph and the article. **Claude never invents a fact, number, date or experience Palak did not give.** If Palak has not used the tool, the article is an honest spec/pricing comparison that says so in its first paragraph, with no first-person experience claims. Claude fills in `humanReview` only after Palak confirms in chat that the facts are true and says to publish; `reviewedAt` is the date of that confirmation.

**No copied content.** Nothing is pasted from vendor pages, other sites or other articles. A short quote goes in quotation marks with its source in `sources`. The test blocks any 10-word run shared with another article on this site. Checking against the web is manual: before publishing, Palak runs the body through a plagiarism checker (for example Quetext or Grammarly's free check).

## Wording — what the AdSense report flagged (enforced for articles after 2026-09-29)
The 2026-09-28 reviewers rejected the site because it *read* AI-written: long-winded, generic, and with an About page that advertised AI drafting (`report-adsence.md`). So:
- **No AI-sounding words.** `aiTellsStrict` in `tests/content.test.ts` bans phrases like "crucial", "robust", "leverage", "in today's", "whether you're", "comprehensive guide", "key takeaways". Add a phrase there when you spot a new one; don't just reword around it.
- **Few em dashes:** at most 1 per 400 words. Use commas and full stops.
- **Never describe how the site uses AI**, on any page, bio or article ("AI-assisted", "drafted with AI"…); the test blocks it. **Never claim the opposite either** ("written without AI", "100% human"), because that would be false. Describe what Palak did: used, measured, checked.
- Short sentences, short paragraphs, specific numbers and dates. Cut any sentence that would fit in any other article.
- Anything Palak posts publicly (forum replies, emails to Google) follows the same rules: short, plain, specific.

## Publish
- **Cadence: aim for 2 articles per week; the test enforces max 2 per day.** Check `git log` before adding one. Batches are the fingerprint AdSense rejects — the 22-file launch dump is what got this site flagged. The weekly target is the habit; the daily cap is only the floor `npm test` will catch.
- The experience paragraph is built only from facts Palak gave, and `humanReview` is filled in only after he confirms them; a publish commit without both is not done.
- `npm test` must pass.

## Existing corpus
On 2026-09-29, 59 of the 60 pre-rule articles were deleted because Palak had not used those tools himself (see `article-audit.csv`). The one survivor, `website-blockers-that-actually-hold`, is frozen like everything else. Do not bring the deleted articles back from git history. If one of those topics is worth covering, write a new article under this rule.
