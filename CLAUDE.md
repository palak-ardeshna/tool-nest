@AGENTS.md

# Article rule (applies to every new article in `src/content/articles/`)

**Published articles are frozen.** The site is live and indexed; once an article ships, its content, slug, title and image do not change. Everything below must be right in the first commit — there is no "fix it later". Only touch an existing article when Parth explicitly asks (typo, wrong price, dead link).

The one test: **an article must contain something that did not exist until Parth did something** — used the tool, measured it, hit a limit, chose against the vendor's claim. Everything below serves that.

## Before drafting — do not start without
1. **Demand signal.** Name the exact query this targets and one proof people search it (autocomplete, People-also-ask, a competing article). Prefer `X vs Y`, `best X for [use case]`, `is X worth it (year)`, `X after [product change]`. Reject generic top-10 topics.
2. **A real data point Parth can supply.** One of: a number from his own run (time, cost, count, error), his own screenshot, a limit he hit, or a judgement that narrows/contradicts the vendor's claim. **If he has not used the tool and cannot get one: do not write the article yet, or write it honestly as a spec/pricing comparison and say so in the first paragraph.** Never fabricate first-person experience.

## Draft
- AI may scaffold `quickAnswer`, `pros`/`cons`, `alternatives`, `faqs`, `sources` from vendor docs. `content` must include at least one paragraph that could only come from using the tool, plus at least one real downside (not a softened positive).
- `quickAnswer` answers the literal query. `vs`/comparison articles put the decision table above the fold.
- Every fact that can go stale carries a date or version. `sources[].checkedAt` is the day it was actually read; re-verify on any update.
- Voice: `I`/`my`, address the reader as `you`, short paragraphs, no AI-tell phrases (tests enforce these).
- Link to the strongest existing article in the same cluster.

## Image
- `image` should be Parth's own screenshot of the tool's UI (`public/images/articles/<slug>.webp`, `imageAlt` describes what's on screen). Stock photos only when no UI exists to show. **Manual — no test enforces this.**

## Publish
- **Cadence: aim for 2 articles per week; the test enforces max 2 per day.** Check `git log` before adding one. Batches are the fingerprint AdSense rejects — the 22-file launch dump is what got this site flagged. The weekly target is the habit; the daily cap is only the floor `npm test` will catch.
- Parth edits the experience paragraph himself; a publish commit that only adds a file untouched by him is not done.
- `npm test` must pass.

## Existing corpus
The 61 pre-rule articles stay as they are (frozen, see top). Do not rewrite them to fit this rule unless Parth asks for a specific one.
