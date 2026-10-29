@AGENTS.md

# Article rule (applies to every new article in `src/content/articles/`)

**Published articles are frozen.** The site is live and indexed; once an article ships, its content, slug, title and image do not change. Everything below must be right in the first commit — there is no "fix it later". Only touch an existing article when Palak explicitly asks (typo, wrong price, dead link).

The one test: **an article must contain something that did not exist until Palak did something** — used the tool, measured it, hit a limit, chose against the vendor's claim. Everything below serves that.

## Before drafting — do not start without
1. **Demand signal.** Name the exact query this targets and one proof people search it (autocomplete, People-also-ask, Google Trends, a competing article). Prefer the trending, practical search shapes people type (Palak, 2026-10-24): `where to get X` / `which site has X`, `is X on [platform]`, `how much does [trip/setup] cost`, `which income skill to learn`, plus `X vs Y`, `is X worth it (year)`, `X after [product change]`. Reject generic top-10 topics. A cost or `where to get` article still needs Palak's own number (what he paid, where he found it).
2. **A real data point Palak can supply.** One of: a number from his own run (time, cost, count, error), a limit he hit, or a judgement that narrows/contradicts the vendor's claim. **If he has not used the tool and cannot get one: do not write the article yet, or write it honestly as a spec/pricing comparison and say so in the first paragraph.** Never fabricate first-person experience.

## Draft
- AI may scaffold `quickAnswer`, `faqs`, `sources` from vendor docs. `content` must include at least one paragraph that could only come from using the tool, plus at least one real downside (not a softened positive).
- `quickAnswer` answers the literal query. `vs`/comparison articles put the decision table first in `content`.
- Every fact that can go stale carries a date or version. `sources[].checkedAt` is the day it was actually read; re-verify on any update.
- Voice: `I`/`my`, address the reader as `you`, short paragraphs, no AI-tell phrases (tests enforce these).
- Link to the strongest existing article in the same cluster.

## Titles and the reader's hook — enforced for every new article (Palak, 2026-10-29)

The reader arrives with a question and a worry: *"this happened to me too — did it get solved?"* Every new article earns the click and the read by answering that, not by being clever. This was missed before: `seoTitle` was skipped on some articles, and a few titles were intriguing but matched no search, so they got impressions and almost no clicks. The rule:

1. **`seoTitle` is mandatory.** Never ship an article without it — the test now fails if it is missing. It is what Google shows, so it is tuned for the searcher, not for the page.
2. **`seoTitle` leads with the thing searched, then the hook.** Tool name or the exact query shape first (`Claude Code vs Cursor`, `Free PDF Tools`, `Connect Gmail to Claude Pro`), then the specific result (`: What I Actually Pay`, `: Where iLovePDF Stops You`). A searcher must see their own words in the first half. The clever, editorial line can live in `title` (the on-page H1); `seoTitle` is the working one.
3. **The hook = the reader's own problem, then that it resolved.** `quickAnswer` and the first paragraph name the exact pain the reader came with (the limit they hit, the cost that surprised them, the step that broke) in Palak's own first-person facts, then say plainly what happened — solved, not solved, or the trade-off. No suspense padding; the answer is up front.
4. **Keep titles varied.** Do not turn this into one formula down the whole site (the "titles are not all the same shape" test guards this). The constant is substance: searcher's words + real result. The phrasing changes every time.

Weak title smell (fix before publishing): a `seoTitle` a reader would never type into search, no tool or query word in the first half, or a hook that teases without the article's own number or result behind it.

## Image
- **One image per article = the generated cover art** (Palak, 2026-10-24, keeping the 2026-09-29 no-upload decision). Leave `image` and `imageAlt` out; the site shows the cover. The test fails on any article with an `image`.

## Layout — one fixed template for articles published from 2026-10-25
Modelled on optionstradingwisdom.com (AdSense-approved by Sep 2024): long, India-focused, table-heavy posts with the same shape every time (Palak, 2026-10-24). Articles before 2026-10-25 are frozen and keep their old shapes. Every new article has exactly these blocks, in this order:
1. `quickAnswer`: answers the literal query in 2–4 sentences, with the key number and its date.
2. `content`, **at least 2,000 words**: one `<h2>` per question the reader has, **at least one `<table>`** (Palak's numbers, or dated prices in ₹), Indian context (₹ amounts, an Indian user such as a doctor, CA or teacher, GST/ITR where it applies), and the `humanReview.experience` paragraph.
3. `faqs`: at least 3, only questions the body has not already answered.
4. `sources`.
No `pros`/`cons` box and no `alternatives` box. Length comes from Palak's facts, dated sources and worked ₹ examples, never padding: if the facts do not fill 2,000 words, collect more facts before drafting. `npm test` enforces the blocks, the word floor, the table and the ₹/India check.

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
- **Run the humanizer skill on every draft** (`.claude/skills/humanizer`, blader/humanizer v3.1.0, MIT) in file mode before publishing: prose only, never code, numbers, links or Palak's facts. It must not add any fact Palak did not give. The test enforces its strongest patterns (§1 "not X but Y", §2 one-line closers, §4 staged openers, §22 chatbot residue).
- Anything Palak posts publicly (forum replies, emails to Google) follows the same rules: short, plain, specific.

## Publish
- **Cadence: aim for 2 articles per week; the test enforces max 2 per day.** Check `git log` before adding one. Batches are the fingerprint AdSense rejects — the 22-file launch dump is what got this site flagged. The weekly target is the habit; the daily cap is only the floor `npm test` will catch.
- The experience paragraph is built only from facts Palak gave, and `humanReview` is filled in only after he confirms them; a publish commit without both is not done.
- `npm test` must pass.

## Existing corpus
On 2026-09-29, 59 of the 60 pre-rule articles were deleted because Palak had not used those tools himself (see `article-audit.csv`). On the same day Palak removed the remaining 5 and moved the site to one section, `ai-for-professionals` (AI tools set up for real work, e.g. Claude connectors for a doctor or CA). Do not bring the deleted articles back from git history. If one of those topics is worth covering, write a new article under this rule.
