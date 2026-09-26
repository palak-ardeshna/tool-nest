import type { Article } from "@/content/types";

/**
 * Built from vendor pricing pages read 2026-09-18. Published under the
 * spec/pricing-comparison fallback in CLAUDE.md: there is no invoice of
 * Parth's behind this, and the first paragraph says so.
 */
export const claudeCodeVsCursorWhatASoloDeveloperPays: Article = {
  slug: "claude-code-vs-cursor-what-a-solo-developer-pays",
  title: "Claude Code vs Cursor: What a Solo Developer Actually Pays in 2026",
  excerpt:
    "Both list at $20 a month. That number tells you almost nothing, because the cost that matters is what happens after the included usage runs out — and the two products handle that very differently. A comparison of the published terms, including what neither vendor will tell you.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["AI Coding", "Developer Tools", "Pricing", "Claude Code", "Cursor"],
  publishedAt: "2026-09-26",
  image: "/images/articles/claude-code-vs-cursor-what-a-solo-developer-pays.webp",
  imageAlt: "A pocket calculator resting on printed charts in front of a laptop on a desk",
  seoTitle: "Claude Code vs Cursor: What a Solo Dev Pays",
  seoDescription:
    "Cursor Individual and Claude Pro both cost $20 a month. How their overage models differ, what neither vendor publishes, and which one bites for you.",
  quickAnswer:
    "The sticker prices are the same and the overage models are not. Cursor Individual is $20 a month with an included allowance, then on-demand usage billed in arrears. Claude Pro is $20 a month (or $17 annually) with a per-five-hour session cap; when you hit it you either wait or turn on usage credits at API rates, and Max starts at $100 for 5x or 20x the Pro allowance. If you code in short bursts through the day, Pro's session cap is the one you will feel. If you run long agent sessions, Cursor's in-arrears billing is the one that surprises you at month end.",
  pros: [
    "Both entry plans are $20 a month, so the decision is about the usage model, not the headline price",
    "Claude Pro's cap resets every five hours, which makes the worst case predictable",
    "Cursor's on-demand usage means an agent run never stops mid-task",
    "Neither needs a card to try: Cursor Hobby and Claude Free both exist, with limited agent use",
  ],
  cons: [
    "Cursor's pricing page does not publish on-demand rates; you find out on the invoice",
    "Claude Pro's session cap is stated as a multiple of Free, not as a number of requests",
    "Cursor's plans now bundle Grok and a Grok Bot whether you want them or not",
    "Claude Max's $100 floor is a big jump from Pro if you only need a little more",
  ],
  alternatives: [
    { name: "Cursor Individual", url: "https://cursor.com/pricing", note: "$20 a month. Included agent usage, then on-demand billed in arrears. Teams is $40 per user." },
    { name: "Claude Pro", url: "https://claude.com/pricing", note: "$20 a month or $17 annually. Includes Claude Code. Usage cap per five-hour session; usage credits at API rates when you exceed it." },
    { name: "Claude Max", url: "https://claude.com/pricing", note: "From $100 a month for 5x Pro usage; a higher tier gives 20x." },
    { name: "OpenCode with your own API key", url: "https://opencode.ai/", note: "No subscription; you pay the model provider directly per token. Cheapest if you use it lightly, unbounded if you do not." },
  ],
  faqs: [
    {
      question: "Is Claude Code included in Claude Pro?",
      answer:
        "Yes. When I read the pricing page on 18 September 2026, Pro listed Claude Code as included, with at least five times the usage of the Free plan per five-hour session. Free does not include it.",
    },
    {
      question: "What does Cursor charge when the included usage runs out?",
      answer:
        "The pricing page says on-demand usage lets you keep using models after the included amount is consumed, billed in arrears. It does not publish a rate. The only way to see the number is your own usage page after the fact, which is the single biggest gap in this comparison and the reason I will not put a monthly figure on Cursor.",
    },
    {
      question: "Does the SpaceX acquisition change Cursor's price?",
      answer:
        "Not the sticker. Individual is still $20 and Teams $40 as of 18 September 2026. What changed is the bundle: Grok models and a Grok Bot now appear in every paid plan's feature list. If you left Cursor over the deal, the migration checklist is in <a href=\"/articles/leaving-cursor-what-moves-and-what-doesnt\">Leaving Cursor: what moves and what does not</a>.",
    },
  ],
  sources: [
    { title: "Cursor pricing", publisher: "Cursor", url: "https://cursor.com/pricing", checkedAt: "2026-09-18" },
    { title: "Claude pricing", publisher: "Anthropic", url: "https://claude.com/pricing", checkedAt: "2026-09-18" },
  ],
  content: `<p>Every comparison of these two tools I have read stops at the pricing page. Both cost $20 a month; pick the one whose editor you prefer. That is not how the bill works. The $20 buys an allowance, and the cost of a month depends entirely on what each product does when you use it up.</p>

<p>One thing to be straight about before you read on: this is a comparison of the two pricing models as published, not a report on my own invoices. I have not run both plans side by side for a full billing cycle, so there is no bill of mine in here. What follows is what each vendor commits to in writing, what they pointedly leave unpublished, and which of the two models is likelier to hurt given how you work.</p>

<h2>The two pricing models, side by side</h2>

<table>
<thead>
<tr><th></th><th>Cursor Individual</th><th>Claude Pro</th></tr>
</thead>
<tbody>
<tr><td>Monthly price</td><td>$20</td><td>$20, or $17 on an annual plan</td></tr>
<tr><td>Included usage</td><td>"Extended limits on Agent"; no number published</td><td>"At least 5x more usage per 5-hour session than Free"; no number published</td></tr>
<tr><td>When it runs out</td><td>On-demand usage continues, billed in arrears</td><td>Wait for the session to reset, or enable usage credits at standard API rates</td></tr>
<tr><td>Next tier</td><td>Teams, $40 per user</td><td>Max, from $100, 5x or 20x Pro</td></tr>
<tr><td>Free tier</td><td>Hobby: limited agent requests, no card</td><td>Free: no Claude Code</td></tr>
</tbody>
</table>

<p>Read that table for what is missing. Neither vendor publishes the size of the allowance in requests or tokens, and Cursor does not publish its on-demand rate at all. You are buying a subscription whose most important number is on your own usage page and nowhere else.</p>

<h2>Where the money goes on Cursor</h2>

<p>Cursor's model is the familiar one: a bundled amount, then metered. The pricing page describes on-demand usage as continuing "after your included amount is consumed, billed in arrears". The practical effect is that nothing ever stops. An agent task that would have hit a wall on Claude carries on, and you find out what it cost when the invoice arrives. Bugbot, the code-review agent, is on usage-based billing even inside the Individual plan.</p>

<p>The other change since the SpaceX deal closed in August is the bundle. "Generous limits for Grok" and "Grok Bot access" now sit in the Individual feature list alongside the frontier models. You are not charged extra for them, but you are not offered the plan without them either.</p>

<h2>Where the money goes on Claude Code</h2>

<p>Claude's model is a cap, not a meter. Pro gives you a usage allowance per five-hour session. When you reach it, the tool stops until the window rolls over. That sounds worse than Cursor's approach and in one way it is: a session cap can land in the middle of a task. In another way it is better: the worst case for a month is exactly $20, unless you choose otherwise.</p>

<p>The "otherwise" is usage credits. Paid plans can enable pay-as-you-go continuation at standard API rates once the cap is hit, which turns Claude into a metered product too, but only after you have opted in. Above that is Max, from $100 a month, for five or twenty times the Pro allowance. The gap between $20 and $100 is the awkward part; there is nothing in between.</p>

<h2>Which one to pay for</h2>

<p>If you work in short bursts across the day, Claude Pro's session cap will interrupt you and Cursor's meter will not, so Cursor is the calmer month even if it costs a few dollars more. If you run long autonomous sessions, the opposite: Claude's cap is a ceiling you can see, and Cursor's in-arrears billing is the one that produces the surprising invoice. If you want neither a cap nor a surprise, <a href="/articles/leaving-cursor-what-moves-and-what-doesnt">OpenCode with your own API key</a> is the honest metered option, and the <a href="/articles/best-ai-coding-tools-for-react-developers">wider comparison</a> covers what else is in this category.</p>

<p>Prices and plan descriptions above are from the vendors' pricing pages as read on 18 September 2026. Both have changed this year and will again; the sources list has the links.</p>`,
};
