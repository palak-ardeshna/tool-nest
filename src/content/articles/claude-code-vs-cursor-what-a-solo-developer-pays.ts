import type { Article } from "@/content/types";

/**
 * Comparison with a decision table and alternatives, rewritten on the URL first
 * published 2026-09-26 (old text deleted 2026-09-29, not restored). Palak's own
 * facts (chat, 2026-10-02): he started on Cursor's free tier, moved to Claude
 * Code through a Claude Pro plan he pays for, uses it for multi-file changes,
 * did the same task in about 5 minutes with Claude Code against about 15 with
 * Cursor, and hits both the Pro usage limit and context or file-size limits.
 * He has never paid for Cursor, so the comparison is a paid plan against a free
 * tier and the article states that plainly rather than implying like for like.
 * Cursor's published prices are from its pricing page, read 2026-10-02.
 */
export const claudeCodeVsCursorWhatASoloDeveloperPays: Article = {
  slug: "claude-code-vs-cursor-what-a-solo-developer-pays",
  title: "Claude Code vs Cursor: What a Solo Developer Pays",
  excerpt:
    "The same change took about 5 minutes with Claude Code and about 15 with Cursor. That is not a fair fight: I was on Cursor's free tier and a Claude plan I pay for, and the comparison has to say so.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude Code", "Cursor", "Pricing", "Developer tools", "AI coding"],
  publishedAt: "2026-09-26",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Claude Code vs Cursor: What I Actually Pay",
  seoDescription:
    "A paid Claude plan against Cursor's free tier: the same task in about 5 minutes versus 15, the limits I hit, and why that comparison is not like for like.",
  quickAnswer:
    "I pay for one of them. On a multi-file change Claude Code took me about 5 minutes against about 15 in Cursor, but I was comparing a plan I pay for with Cursor's free Hobby tier, which has limited Agent requests. Cursor's Individual plan is $20 a month, read 2 October 2026, and I have not tried it.",
  alternatives: [
    {
      name: "Cursor Individual",
      url: "https://cursor.com/pricing",
      note: "$20 a month, with extended agent capability over the free tier. I have not paid for it, so no verdict from me.",
    },
    {
      name: "Cursor Hobby (free)",
      url: "https://cursor.com/pricing",
      note: "Free, no card, limited Agent requests, access to Composer. This is the one I actually used.",
    },
    {
      name: "An editor and a chat window",
      note: "Paste in what you need. Slower per change, no subscription, and nothing can touch files you did not open.",
    },
  ],
  content: `
<table>
<thead><tr><th></th><th>What I used</th><th>Same multi-file change</th><th>What stopped me</th></tr></thead>
<tbody>
<tr><td>Claude Code</td><td>Through a Claude plan I pay for</td><td>About 5 minutes</td><td>The plan's usage limit, and how much code fits at once</td></tr>
<tr><td>Cursor</td><td>Free Hobby tier, never paid</td><td>About 15 minutes</td><td>Limited agent requests on the free tier</td></tr>
</tbody>
</table>

<p>I started on Cursor and moved to Claude Code, and I use it for changes that touch several files at once. On the same real task Claude Code took me about 5 minutes where Cursor took about 15. The honest caveat is that I was on Cursor's free tier the whole time and Claude Code came through a plan I pay for every month, so this is not a like-for-like comparison and I am not going to pretend it is. What stops me now is the usage limit on my plan, and how much code I can hand over in one go before it stops being useful.</p>

<h2>Why the time difference is not the whole story</h2>
<p>A free tier is deliberately slower at exactly the thing I was measuring. Cursor's Hobby plan is described on its own pricing page as having limited Agent requests, and an agent making a multi-file change is the entire job I gave it. Its Individual plan is $20 a month and lifts that, read on 2 October 2026. I have not paid for it, so I cannot tell you whether that closes the 10 minutes.</p>
<p>What I can say is what a solo developer actually faces: one subscription you will pay for, and everything else you try on a free tier first. That is the real comparison most people make, whatever the review sites do.</p>

<h2>Where the terminal one suits me</h2>
<p>Claude Code runs where my project already is, so a change across several files is one instruction rather than a series of visits to each file. That matches how I work more than inline completion does, and it is most of the time difference.</p>
<p>The cost is that I am not watching every edit as it happens. That is fine on code I can review in a diff and uncomfortable anywhere else, which is a judgement each person has to make rather than a feature either tool advertises.</p>

<h2>The two walls</h2>
<p>The usage limit on the plan is the one that interrupts actual work, and it arrives without warning in the middle of something. The other is how much code fits in one request: past a certain size the answer stops being worth having, and splitting the job up is on me, not on the tool.</p>
<p>Neither of these appears on a pricing page. They are what the subscription actually buys you, which is why I think a month on a free tier tells you more than any comparison table, including this one. I apply the same test to every plan I pay for, as I did when <a href="/articles/which-ai-assistant-is-worth-paying-for">working out which assistant was worth the monthly payment</a>.</p>

<h2>What I would tell someone choosing</h2>
<p>Do not read the time I quoted as a verdict. Run the same real task in both, on whatever tier you are actually willing to pay for, and watch where each one stops you rather than where it impresses you. The limit you meet on a Wednesday afternoon matters more than the benchmark.</p>
`,
  sources: [
    {
      title: "Cursor Pricing",
      publisher: "Cursor",
      url: "https://cursor.com/pricing",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I started on Cursor and moved to Claude Code, and I use it for changes that touch several files at once. On the same real task Claude Code took me about 5 minutes where Cursor took about 15. The honest caveat is that I was on Cursor's free tier the whole time and Claude Code came through a plan I pay for every month, so this is not a like-for-like comparison and I am not going to pretend it is. What stops me now is the usage limit on my plan, and how much code I can hand over in one go before it stops being useful.",
  },
};
