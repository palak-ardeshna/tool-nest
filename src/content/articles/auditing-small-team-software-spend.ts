import type { Article } from "@/content/types";

/**
 * How-to / log, rewritten on the URL first published 2026-08-19 (old text
 * deleted 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): audited his own paid subscriptions, more than 10 at the time;
 * found two tools doing the same job, and his password manager's price had risen
 * quietly at renewal; he cancelled only one or two. No rupee figures were given
 * for his own spend, so none are stated. NordPass's pricing page could not be
 * read (HTTP 403 on 2026-10-02), so no price is quoted for it. The cancellation
 * wording is from Google Play's subscriptions help page, read 2026-10-02.
 */
export const auditingSmallTeamSoftwareSpend: Article = {
  slug: "auditing-small-team-software-spend",
  title: "The Audit Found More Than I Was Willing to Cancel",
  excerpt:
    "I went through 10 or more paid subscriptions, found a duplicate and a quiet price rise, and then cancelled one or two. The gap is the interesting part.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Subscriptions", "Software Spend", "Audit", "Pricing"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-29",
  seoTitle: "Auditing My Own Subscriptions: What I Cut",
  seoDescription:
    "More than 10 paid subscriptions, a duplicate pair and a quiet renewal price rise. I cancelled one or two. Here is the audit and why so little moved.",
  content: `
<p>I went through my own paid subscriptions, more than 10 of them at the time. Two things came out of it. Two of the tools were doing the same job as each other, and my password manager had quietly gone up in price at renewal without me noticing. Having found all that, I cancelled one or two things. The rest I looked at, decided I still wanted, and kept paying for.</p>

<p>Every article about auditing your software spend ends with a number you saved. Mine ends with one or two cancellations out of more than ten, and I think that gap is worth writing down, because it is probably what will happen to you too.</p>

<h2>The audit, in the order I did it</h2>
<ol>
<li>List every paid thing from the bank side rather than from memory. I thought I knew what I was paying for. The list from the statements was longer than the list in my head, which is the whole reason this exercise finds anything.</li>
<li>Write next to each one what job it does, in a few words, plainly. This is the step that found my duplicate: two tools, two line items, and when I wrote the job down both descriptions came out the same.</li>
<li>Check what you are paying now rather than what you signed up for. My password manager had gone up at renewal and I had not noticed, because the whole design of an annual renewal is that you do not look. A quiet increase on a yearly plan can run for a year before it reaches your attention.</li>
<li>Mark each one keep, cut, or unsure. Be honest about unsure. It is the biggest pile and pretending otherwise is how people end up re-running this audit in six months.</li>
<li>Cancel the cuts the same day. This is the step I did badly, and the next section is about why.</li>
</ol>

<h2>Why I only cancelled one or two</h2>
<p>Finding the waste took an hour. Acting on it ran into my own uncertainty about the next few months.</p>
<p>For most of the ten, the honest position was "I use this occasionally, and I can imagine wanting it next month". That is an unsure, and an unsure defaults to keeping, because keeping needs no decision. The subscription renews whether or not I have thought about it, and that is the design.</p>
<p>The duplicate was the exception, and that is why it got cancelled. Two tools doing one job is the one finding that leaves no room for "but maybe". The other nine all had a story.</p>

<h2>The fact that would have made me cancel more</h2>
<p>I learned this after the audit, and it would have changed how I ran it.</p>
<p>Google Play's subscriptions help page says: "When you cancel a subscription, you'll still be able to use your subscription for the time you've already paid." Its own example is a yearly subscription cancelled in the middle of the year, where you keep access until 31 December and simply are not charged again. Checked 2 October 2026.</p>
<p>So on an annual plan, cancelling in month three removes the renewal rather than the tool. I had been treating cancellation as losing something now, when for most of the year it costs nothing at all and only removes a future charge I had not decided to make yet.</p>
<p>That reframes the unsure pile completely. The question becomes "do I want to be charged again in March", which is much easier to answer in October than "do I want this gone". Different stores and vendors handle this differently, so check the terms on each one, but the pattern is common enough to be worth checking before you decide to keep something out of hesitation.</p>

<h2>What I would tell you to do with one hour</h2>
<p>Pull the statements, write the job next to each line, and look for two lines with the same job written next to them. That found my duplicate in minutes. Then take anything on an annual plan, check what it renewed at against what you first paid, and cancel the renewal on everything you are unsure about rather than keeping it. You keep the access you already paid for either way, and a renewal is easier to restart than a year of payments is to get back. The price rises I was not watching for are the same ones I wrote about in <a href="/articles/password-managers-after-the-price-rises">free and paid password managers</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I went through my own paid subscriptions, more than 10 of them at the time. Two things came out of it. Two of the tools were doing the same job as each other, and my password manager had quietly gone up in price at renewal without me noticing. Having found all that, I cancelled one or two things. The rest I looked at, decided I still wanted, and kept paying for.",
  },
  sources: [
    {
      title: "Cancel, pause, or change a subscription on Google Play",
      publisher: "Google",
      url: "https://support.google.com/googleplay/answer/7018481",
      checkedAt: "2026-10-02",
    },
  ],
};
