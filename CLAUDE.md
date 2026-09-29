@AGENTS.md

# Article rule (applies to every new article in `src/content/articles/`)

**Published articles are frozen.** The site is live and indexed; once an article ships, its content, slug, title and image do not change. Everything below must be right in the first commit — there is no "fix it later". Only touch an existing article when Palak explicitly asks (typo, wrong price, dead link).

The one test: **an article must contain something that did not exist until Palak did something** — used the tool, measured it, hit a limit, chose against the vendor's claim. Everything below serves that.

## Before drafting — do not start without
1. **Demand signal.** Name the exact query this targets and one proof people search it (autocomplete, People-also-ask, a competing article). Prefer `X vs Y`, `best X for [use case]`, `is X worth it (year)`, `X after [product change]`. Reject generic top-10 topics.
2. **A real data point Palak can supply.** One of: a number from his own run (time, cost, count, error), his own screenshot, a limit he hit, or a judgement that narrows/contradicts the vendor's claim. **If he has not used the tool and cannot get one: do not write the article yet, or write it honestly as a spec/pricing comparison and say so in the first paragraph.** Never fabricate first-person experience.

## Draft
- AI may scaffold `quickAnswer`, `pros`/`cons`, `alternatives`, `faqs`, `sources` from vendor docs. `content` must include at least one paragraph that could only come from using the tool, plus at least one real downside (not a softened positive).
- `quickAnswer` answers the literal query. `vs`/comparison articles put the decision table above the fold.
- Every fact that can go stale carries a date or version. `sources[].checkedAt` is the day it was actually read; re-verify on any update.
- Voice: `I`/`my`, address the reader as `you`, short paragraphs, no AI-tell phrases (tests enforce these).
- Link to the strongest existing article in the same cluster.

## Image
- `image` is Palak's own screenshot of the tool's UI, or his own photo (`public/images/articles/<slug>.webp`, `imageAlt` describes what's on screen). **No stock photos, no AI-generated images.** The test checks the path and `humanReview.imageSource`, but only Palak can make that declaration true.

## Human review — enforced for articles published after 2026-09-29
Every new article needs a `humanReview` block, and `npm test` fails without it:
- `experience`: Palak's own paragraph of at least 60 words, first person, with at least one number from his own use. It must appear word for word in `content`.
- `reviewedAt`: the day Palak read the final text end to end. It must be on or before `publishedAt`.
- `imageSource`: `"own-screenshot"` or `"own-photo"`.

**Claude never writes, fills in or suggests text for `humanReview`, and never writes the experience paragraph.** Claude leaves `humanReview` out, leaves a visible `<!-- PALAK: your experience paragraph -->` gap in `content`, and hands over a failing test. Filling it in is how Palak's review happens; if AI fills it, the check is worthless.

**No copied content.** Nothing is pasted from vendor pages, other sites or other articles. A short quote goes in quotation marks with its source in `sources`. The test blocks any 10-word run shared with another article on this site. Checking against the web is manual: before publishing, Palak runs the body through a plagiarism checker (for example Quetext or Grammarly's free check).

## Publish
- **Cadence: aim for 2 articles per week; the test enforces max 2 per day.** Check `git log` before adding one. Batches are the fingerprint AdSense rejects — the 22-file launch dump is what got this site flagged. The weekly target is the habit; the daily cap is only the floor `npm test` will catch.
- Palak writes the experience paragraph and signs `humanReview` himself; a publish commit without both is not done.
- `npm test` must pass.

## Existing corpus
On 2026-09-29, 59 of the 60 pre-rule articles were deleted because Palak had not used those tools himself (see `article-audit.csv`). The one survivor, `website-blockers-that-actually-hold`, is frozen like everything else. Do not bring the deleted articles back from git history. If one of those topics is worth covering, write a new article under this rule.
