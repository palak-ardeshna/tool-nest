import type { Article } from "@/content/types";

/**
 * X vs Y. First-person facts are Palak's own (chat, 2026-09-30): Claude Pro,
 * uses Opus 5.5 for coding and Fable 5.1 for writing/email, research/docs and
 * client work; hit the Pro usage limit after 1 to 2 hours on Opus and 2 to 4
 * hours on Fable; when he ran out he waited for the reset; paid usage
 * credits for Fable on Pro (no amount given). Has not used
 * Sonnet 5.5 or Max. Everything else is from Anthropic's models and pricing pages.
 */
export const claudeOpus55VsFable51: Article = {
  slug: "claude-opus-5-5-vs-fable-5-1",
  title: "Claude Opus 5.5 vs Fable 5.1: How I Split Them",
  excerpt:
    "Opus 5.5 costs 60% less than Fable 5.1 on the API. On my Pro plan I code with Opus and write with Fable, and Opus hit the usage limit first.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Claude Opus 5.5", "Claude Fable 5.1", "Claude Pro", "Usage limits"],
  publishedAt: "2026-09-30",
  quickAnswer:
    "Start with Opus 5.5. It costs $4 per million input tokens and $20 per million output tokens on the API, against $10 and $50 for Fable 5.1. On my Pro plan I use Opus for coding and Fable for writing, research and client work. My Opus sessions ran into the usage limit after 1 to 2 hours; Fable lasted 2 to 4.",
  alternatives: [
    {
      name: "Claude Sonnet 5.5",
      url: "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      note: "Anthropic's faster model at $2 and $10 per million tokens. I have not used it, so I can't tell you how long it lasts on Pro.",
    },
    {
      name: "Claude Max",
      url: "https://claude.com/pricing",
      note: "The pricing page lists Fable at 50% of weekly limits on both Max tiers. I haven't tried Max.",
    },
  ],
  content: `
<table>
<thead>
<tr><th></th><th>Opus 5.5</th><th>Fable 5.1</th></tr>
</thead>
<tbody>
<tr><td>Anthropic's own label</td><td>Long-running agentic coding and knowledge work</td><td>Demanding reasoning and long-horizon agentic work</td></tr>
<tr><td>What I use it for</td><td>Coding</td><td>Emails, writing, research, reading documents, client work</td></tr>
<tr><td>API price per million tokens (input / output)</td><td>$4 / $20</td><td>$10 / $50</td></tr>
<tr><td>Speed, per Anthropic</td><td>Moderate</td><td>Slower</td></tr>
<tr><td>Default effort on the API</td><td>Medium</td><td>High</td></tr>
<tr><td>Context window</td><td>1M tokens</td><td>1M tokens</td></tr>
<tr><td>On the Pro pricing table</td><td>Included</td><td>Usage credits</td></tr>
<tr><td>When I hit the Pro limit</td><td>After 1 to 2 hours</td><td>After 2 to 4 hours</td></tr>
</tbody>
</table>
<p>Prices and labels are from Anthropic's models overview and pricing page, read on 30 September 2026.</p>

<h2>My numbers on Pro</h2>
<p>I'm on Claude Pro and use both models on it. Opus 5.5 does my coding. Fable 5.1 does everything else: writing emails, research, reading documents and client work. On Opus I hit the Pro usage limit after 1 to 2 hours of work. On Fable it took 2 to 4 hours. When I ran out, I stopped work and waited for the limit to reset before I could carry on.</p>
<p>Those two numbers are not a clean race. My Opus hours were coding and my Fable hours were writing and reading, so the jobs were different. I can only tell you what happened on my account with the work I gave each one.</p>
<p>The price list points the other way, since Fable is the dearer model on the API.</p>

<h2>The API gap is 2.5 times</h2>
<p>If you pay per token, the choice is simpler. Fable 5.1 costs 2.5 times as much as Opus 5.5 for both input and output. Anthropic's own advice on its models page is to start with Opus 5.5 for most work, and to move to Fable only when Opus at a higher effort still falls short.</p>
<p>The Pro plan is $20 billed monthly or $17 a month on the $200 annual plan. On the pricing table, the Pro column for Fable reads "Usage credits", while the two Max columns read "50% of weekly limits". I paid usage credits for Fable on top of my plan, so check that row before you plan a full working day around it on Pro.</p>

<h2>How I decide which one gets a job</h2>
<p>Code goes to Opus. That matches Anthropic's label for it, and it is also the cheaper of the two on the API.</p>
<p>Writing, emails, research, documents and client work go to Fable. My inbox is already connected to Claude, which I set up the way I describe in <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">how I connected Gmail and Calendar to Claude Pro</a>.</p>

<h2>The downside is the waiting</h2>
<p>On the $20 plan, the usage limit is what slows me down. When it hits, the work stops, and I waited for the reset.</p>
<p>Anthropic's pricing page says limits run on a rolling five-hour window, and paid plans have a weekly limit on top of that. So a long coding session on Opus can end in the middle of the task, and your fix is to wait or to pay more. If you code for most of the day, plan for that before you pick Pro.</p>
`,
  humanReview: {
    reviewedAt: "2026-09-30",
    experience:
      "I'm on Claude Pro and use both models on it. Opus 5.5 does my coding. Fable 5.1 does everything else: writing emails, research, reading documents and client work. On Opus I hit the Pro usage limit after 1 to 2 hours of work. On Fable it took 2 to 4 hours. When I ran out, I stopped work and waited for the limit to reset before I could carry on.",
  },
  sources: [
    {
      title: "Models overview",
      publisher: "Anthropic",
      url: "https://platform.claude.com/docs/en/about-claude/models/overview",
      checkedAt: "2026-09-30",
    },
    {
      title: "Claude pricing",
      publisher: "Anthropic",
      url: "https://claude.com/pricing",
      checkedAt: "2026-09-30",
    },
  ],
};
