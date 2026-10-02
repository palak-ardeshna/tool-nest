import type { Article } from "@/content/types";

/**
 * Explainer / gotcha, rewritten on the URL first published 2026-08-19 (old text
 * deleted 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): wired the GitHub API into a site of his with a personal access
 * token already set, and was still rate limited; the block took 15 to 30 minutes
 * to clear each time; he fixed it by fetching at build time instead of at
 * runtime. He does not know which secondary limit he hit, and the article says
 * so rather than guessing. The documented limits, and the "wait at least one
 * minute" guidance, are from GitHub's REST rate limit docs read on 2026-10-02.
 */
export const freeApisWorthBuildingOn: Article = {
  slug: "free-apis-worth-building-on",
  title: "GitHub Rate Limited Me With a Token Set",
  excerpt:
    "A personal access token raises your limit to 5,000 an hour. It did not stop GitHub blocking my site, and the block took 15 to 30 minutes to clear.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["GitHub API", "Rate Limits", "APIs", "Next.js"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-24",
  seoTitle: "GitHub API Rate Limits: A Token Is Not Enough",
  seoDescription:
    "I had a token set and GitHub still rate limited my site. The block took 15 to 30 minutes. Moving the call to build time is what ended it.",
  faqs: [
    {
      question: "How many GitHub API requests do you get an hour?",
      answer:
        "Per GitHub's docs on 2 October 2026: 60 an hour unauthenticated, 5,000 an hour with a personal access token, 15,000 for GitHub Enterprise Cloud organisations. Those are the primary limits, and they are not the only limits.",
    },
    {
      question: "Why am I rate limited when I am under 5,000 requests?",
      answer:
        "Because of the secondary limits, which are separate. GitHub documents no more than 100 concurrent requests, 900 points a minute on REST, 90 seconds of CPU time per 60 seconds of real time, and 80 content-generating requests a minute. You can be far below 5,000 an hour and still trip one of these.",
    },
    {
      question: "How long does a secondary rate limit last?",
      answer:
        "GitHub's docs do not state it. For secondary limits they say to wait at least one minute before retrying. In my case it took 15 to 30 minutes before the calls worked again, so plan for longer than a minute.",
    },
  ],
  content: `
<p>I wired the GitHub API into a site of mine, with a personal access token set, and GitHub still rate limited me. That surprised me, because the token is meant to be the answer. Waiting it out took 15 to 30 minutes each time, which is long enough to stop work. What fixed it was moving the call out of runtime and fetching the data at build time instead, so the site stopped asking GitHub anything while people were using it.</p>

<p>If you are picking a free API to build on, this is the thing I would check before anything else: whether you can still be stopped after you have done the paperwork.</p>

<h2>Two sets of limits, and the token only helps with one</h2>
<p>I had assumed the rate limit was one number and the token raised it. There are two sets of numbers, and the token raises the first set only.</p>
<table>
<thead><tr><th>Limit</th><th>What GitHub documents</th></tr></thead>
<tbody>
<tr><td>Primary, no token</td><td>60 requests an hour</td></tr>
<tr><td>Primary, personal access token</td><td>5,000 requests an hour</td></tr>
<tr><td>Secondary, concurrency</td><td>No more than 100 concurrent requests</td></tr>
<tr><td>Secondary, throughput</td><td>No more than 900 points a minute on REST, 2,000 on GraphQL</td></tr>
<tr><td>Secondary, CPU</td><td>No more than 90 seconds of CPU time per 60 seconds of real time</td></tr>
<tr><td>Secondary, writes</td><td>No more than 80 content-generating requests a minute, 500 an hour</td></tr>
</tbody>
</table>
<p>All from GitHub's REST rate limit documentation, read on 2 October 2026.</p>
<p>I cannot tell you which of those secondary limits I hit. I did not instrument it, and I am not going to pretend otherwise. What I can tell you is that I was nowhere near 5,000 requests an hour when it happened, which is enough to know the primary number was never the one that mattered.</p>

<h2>The wait is the part that hurt</h2>
<p>GitHub's guidance for a secondary limit is to wait at least one minute before retrying. Mine took 15 to 30 minutes.</p>
<p>"At least one minute" is accurate and also not very useful, because the floor tells you nothing about the ceiling. A one minute block is something you retry through; a 20 minute block is an outage, and I had built as though the first was what I had.</p>
<p>And this is a limit you discover in production, not in development. On my own machine I reload a page a few times and nothing complains. The limit arrives when a real number of requests land in a real window, which is after the thing is live and in front of people.</p>

<h2>Moving it to build time</h2>
<p>The fix was to stop asking GitHub anything while the site was serving.</p>
<p>The data I wanted does not change between one visitor and the next, which means fetching it per request was work I was choosing to do. Pulling it once at build time means GitHub sees a handful of requests per deploy rather than one per page view, and no visitor is ever waiting on an API that might be refusing me. If GitHub blocks a build, I find out in the build log, which is a far better place to learn it than a page that half renders.</p>
<p>This is the same trade I ran into with caching in <a href="/articles/next-js-16-caching-defaults-that-bite">Next.js 16</a>: something has to pay for the data, and paying at build time is usually cheaper than making the request path cleverer.</p>
<p>The cost is freshness. Build-time data is as old as your last deploy. For what I was showing, a deploy old is fine. If your data has to be current to the minute, you are back to runtime calls and you need to handle the block properly, which means reading the retry headers and having something sensible to render when the answer is no.</p>

<h2>What to check before you build on a free API</h2>
<p>Find the secondary limits, not just the headline number. If the docs only advertise requests per hour, look for a concurrency or throughput limit underneath. Then find out what a block looks like: the status code, the headers, and how long it actually lasts rather than the minimum the docs promise. And decide early whether the data can be fetched once per deploy, because if it can, most of this stops being your problem.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I wired the GitHub API into a site of mine, with a personal access token set, and GitHub still rate limited me. That surprised me, because the token is meant to be the answer. Waiting it out took 15 to 30 minutes each time, which is long enough to stop work. What fixed it was moving the call out of runtime and fetching the data at build time instead, so the site stopped asking GitHub anything while people were using it.",
  },
  sources: [
    {
      title: "Rate limits for the REST API",
      publisher: "GitHub",
      url: "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api",
      checkedAt: "2026-10-02",
    },
  ],
};
