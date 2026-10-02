import type { Article } from "@/content/types";

/**
 * Explainer with a worked example and a table, rewritten on the URL first
 * published 2026-09-12 (old text deleted 2026-09-29, not restored). Palak's own
 * facts (chat, 2026-10-02): he starts with a plain search to find who said a
 * thing first, the failure he catches most is a claimed feature the
 * documentation never states, 3 vendor pages were blocked to him so their
 * figures could not be used, checking costs him about an hour per article, and
 * the check goes stale almost immediately. The three blocked pages are not
 * named because he did not name them. The Pocket example is the farewell page
 * as read on 2026-10-02, which states no shutdown date.
 */
export const checkingAClaimBeforeYouPublish: Article = {
  slug: "checking-a-claim-before-you-publish",
  title: "The Claims That Get Through Are About Features, Not Prices",
  excerpt:
    "Nobody repeats a wrong price for long, because someone gets overcharged and complains. A wrong capability spreads for years. Here is the order I check things in, and what it costs me.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Fact-checking", "Sources", "Research", "Publishing", "Accuracy"],
  publishedAt: "2026-09-12",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "How I Check a Claim Before Publishing It",
  seoDescription:
    "Wrong prices get corrected. Wrong capability claims spread. The order I check a claim in, the 3 pages that would not load, and why a check goes stale.",
  content: `
<p>A wrong price does not survive. Somebody pays it, notices, and complains loudly enough that the number gets fixed. A wrong capability survives for years, because nobody is out of pocket when an article says a tool can do something it cannot.</p>

<p>So that is what I look for first. The thing I catch most often is a claimed feature that the documentation never states, repeated from one article to the next until it reads as settled. I start with a plain search to find who said it first, rather than going straight to the vendor, because the origin tells me whether I am looking at one source or ten copies of one source. On recent work, 3 vendor pages would not load for me at all, so whatever figures those pages hold could not be used and I left them out. The checking costs me about an hour an article, and the worst part is that it goes out of date almost immediately: a figure confirmed today is wrong next month, and the article still states it with the same confidence.</p>

<h2>Why the search comes before the vendor page</h2>
<p>Going straight to the vendor feels more rigorous and it hides the useful information. If ten articles say a tool does something, the question is not whether the vendor agrees, it is whether those ten are ten sources or one source copied nine times. A plain search shows you that in about a minute, because the same sentence turns up in the same shape everywhere.</p>
<p>Once I know where it started, checking the primary page is quick, and I know what I am looking for rather than reading hopefully.</p>

<h2>A worked example</h2>
<p>Take a claim that circulates about Pocket shutting down: various write-ups give a specific shutdown date. Mozilla's farewell page, read on 2 October 2026, says it is phasing out the Pocket web, Android, iOS and macOS apps and the browser extensions, and points people towards Firefox tab groups and bookmarks. It gives no date.</p>
<p>That is the pattern exactly. The date is not a lie invented by anyone in particular. It got stated once, repeated, and now sits in a dozen articles with no primary page behind it. The honest thing is to say the page gives no date, which is less satisfying to read and is what the source supports.</p>

<h2>What each failure looks like</h2>
<table>
<thead><tr><th>Failure</th><th>How it shows up</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>Source does not say it</td><td>You follow the link and the claim is not on the page</td><td>Drop the claim, or state only what the page says</td></tr>
<tr><td>Page will not load</td><td>A block, a login wall or a region restriction</td><td>Leave the figure out rather than taking it second hand</td></tr>
<tr><td>Everyone copied one origin</td><td>The same sentence, word for word, across sites</td><td>Find the origin and check that instead</td></tr>
<tr><td>It was true once</td><td>Nothing on the page admits it changed</td><td>Date the fact, so a reader knows when it was true</td></tr>
</tbody>
</table>

<h2>The part that does not work</h2>
<p>None of this stays true. A price verified this morning can change this afternoon, and the sentence in the article does not get any less confident when it does. Dating every fact is the only honest answer I have, and it is a label rather than a fix. It tells a reader when to stop trusting the number; it does not keep the number right.</p>
<p>The other cost is that this is invisible. An hour of checking produces nothing a reader can see, except the occasional sentence that says a figure could not be confirmed. That is also why I will leave a fact out rather than soften it, which is the same instinct that turned up when <a href="/articles/ai-research-tools-and-your-sources">two of five cited links did not support what they were cited for</a>.</p>

<h2>The short version</h2>
<p>Search before you trust a vendor page, because the origin matters more than the agreement. Treat capability claims with more suspicion than prices. If a page will not load, drop the number instead of borrowing it. And put the date next to anything that can change, because it will.</p>
`,
  sources: [
    {
      title: "Farewell to Pocket",
      publisher: "Mozilla",
      url: "https://getpocket.com/farewell",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "The thing I catch most often is a claimed feature that the documentation never states, repeated from one article to the next until it reads as settled. I start with a plain search to find who said it first, rather than going straight to the vendor, because the origin tells me whether I am looking at one source or ten copies of one source. On recent work, 3 vendor pages would not load for me at all, so whatever figures those pages hold could not be used and I left them out. The checking costs me about an hour an article, and the worst part is that it goes out of date almost immediately: a figure confirmed today is wrong next month, and the article still states it with the same confidence.",
  },
};
