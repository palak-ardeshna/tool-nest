import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Scaffolded from the Notion pricing page read 2026-09-23. The sections marked
 * PARTH are the article; without them this is Notion's own plan table restated.
 * Cover: StockSnap “Writing Drawing”, CC0 1.0 — illustrative, not a product interface.
 */
export const notionAiIsABusinessPlanFeatureNow: Article = {
  slug: "notion-ai-is-a-business-plan-feature-now",
  title: "Notion AI Is a Business Plan Feature Now: What a Small Team Pays",
  excerpt:
    "On Plus you get a trial of Notion AI. The agent that actually does multi-step work sits on Business, at $20 per user per month, and custom agents bill separately in credits. For a team of four that is a different bill than it was.",
  category: "productivity",
  author: "parth-patel",
  tags: ["Notion", "Productivity", "Pricing", "AI Tools", "Small Teams"],
  publishedAt: "2026-09-23",
  image: "/images/articles/notion-ai-is-a-business-plan-feature-now.webp",
  imageAlt:
    "A person in a knitted jumper sketching page layouts in pencil on paper, beside a mug and a closed notebook",
  seoTitle: "Notion AI Is a Business Plan Feature Now",
  seoDescription:
    "Notion Plus is $10 a user and gets an AI trial. The full agent needs Business at $20 a user, plus credits for custom agents. The real cost.",
  quickAnswer:
    "Notion's plans are Free at $0, Plus at $10 per user per month, Business at $20 per user per month and Enterprise on request, with up to 20% off for annual billing. Notion AI is bundled into paid plans rather than sold as an add-on, but Free and Plus get a trial of it, and the agent that completes multi-step work is a Business feature. Custom agents are metered on top: free to try, then $10 per 1,000 monthly Notion credits, on every plan. So a four-person team that wants the agent is looking at $80 a month before credits, not the $40 that Plus suggests.",
  pros: [
    "AI is bundled into the plan rather than sold as a separate per-seat add-on, which is simpler than it was",
    "The trial on Free and Plus lets you find out whether the agent is useful before paying for it",
    "Annual billing takes up to 20% off, which is a real discount on a per-seat product",
    "Credits are only consumed by custom agents, so ordinary AI use does not meter",
  ],
  cons: [
    "The feature most people mean by \"Notion AI\" now requires the $20 tier, doubling the per-seat cost",
    "Custom agents bill in credits, which is a second, variable line on top of a per-seat price",
    "\"Trial of Notion AI\" on Plus is not quantified on the pricing page",
    "Per-user pricing punishes the occasional collaborator who opens the workspace twice a month",
  ],
  alternatives: [
    { name: "Notion Plus", url: "https://www.notion.com/pricing", note: "$10 per user per month. Unlimited blocks for teams, and a trial of Notion AI rather than the full agent." },
    { name: "Notion Business", url: "https://www.notion.com/pricing", note: "$20 per user per month. Full Notion AI including the agent that completes multi-step tasks. Marked as the recommended plan." },
    { name: "Notion Free", url: "https://www.notion.com/pricing", note: "$0. Genuinely usable for one person. The limits bite when you add collaborators, not when you add pages." },
    { name: "Obsidian", url: "https://obsidian.md/", note: "Local Markdown files, no per-seat cost, no AI agent. The opposite trade: you own the files and do the thinking." },
  ],
  faqs: [
    {
      question: "Is Notion AI still a paid add-on?",
      answer:
        "No, and that is the change. When I read the pricing page on 23 September 2026, AI was bundled into the plans rather than priced separately. The catch is which plan: Free and Plus show a trial of Notion AI, while Business is where the agent that \"completes complex, multi-step tasks\" appears. Bundled does not mean included at every tier.",
    },
    {
      question: "What are Notion credits and when do they charge me?",
      answer:
        "They meter custom agents, separately from your seat price, on every plan. The page lists them as free to try and then $10 per 1,000 monthly credits. Ordinary AI use inside the plan does not draw them down; building your own agent does.",
    },
    {
      question: "Is Business worth double Plus for a small team?",
      answer:
        "It depends entirely on whether the agent does work you would otherwise do by hand, which is why the section above is my own usage rather than a recommendation. The test that settles it: run the trial on Plus, give the agent one task you genuinely dislike doing, and see whether the output needed fixing. If it did, you are paying $10 a seat extra for a draft.",
    },
  ],
  sources: [
    { title: "Notion pricing", publisher: "Notion", url: "https://www.notion.com/pricing", checkedAt: "2026-09-23" },
  ],
  content: `<p>The useful question about a per-seat tool is never the sticker price. It is which tier holds the feature you actually came for, because that is the number you will really pay, multiplied by everyone on the team.</p>

<p>For Notion right now, the answer has moved. AI is no longer a separate add-on — it is bundled into the paid plans — but the agent that does multi-step work sits on Business at $20 per user per month, and Plus at $10 gets a trial.</p>

<!-- PARTH: this section is the article. Real numbers and real tasks only. Delete the draft rather than invent them. -->
<h2>What I asked the agent to do</h2>

<p><!-- PARTH: one specific task you handed it, and what came back. Did you keep the output, edit it, or throw it away? If you edited it, roughly what proportion. Name the task — "turn a week of meeting notes into a project page", not "content generation". --></p>

<p><!-- PARTH: your actual bill. Seats, plan, annual or monthly, and whether any credits were consumed. If you are on Free or Plus and only used the trial, say so plainly — that is the honest version and it is more useful than pretending to a Business subscription. --></p>

<h2>The plans, and where the AI line falls</h2>

<table>
<thead>
<tr><th>Plan</th><th>Price per user</th><th>AI</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>$0</td><td>Trial of Notion AI</td></tr>
<tr><td>Plus</td><td>$10/mo</td><td>Trial of Notion AI</td></tr>
<tr><td>Business</td><td>$20/mo</td><td>Full Notion AI, including the multi-step agent</td></tr>
<tr><td>Enterprise</td><td>On request</td><td>As Business, plus zero data retention with LLM providers</td></tr>
<tr><td>Custom agents</td><td>Any plan</td><td>Free to try, then $10 per 1,000 monthly credits</td></tr>
</tbody>
</table>

<p>Annual billing takes up to 20% off the per-seat prices. Credits sit outside that discount, because they are usage rather than seats.</p>

<h2>Why the tier matters more than the price</h2>

<p>Ten dollars against twenty reads like a small difference until you multiply it. A team of four on Plus is $40 a month; the same team on Business is $80. Over a year, that is the gap between $480 and $960, and the thing you are buying with the second $480 is one feature.</p>

<p>The awkward part is that the trial on Free and Plus is not quantified anywhere on the page. You are told there is a trial, not how much of one. That makes it hard to plan around and easy to run out of at the moment you are trying to decide, which is not an accident.</p>

<h2>The second bill nobody budgets for</h2>

<p>Custom agents meter in credits — $10 per 1,000 a month — on top of whatever your seats cost. Most teams will never touch this, because most teams use the built-in AI and stop there. But if the reason you are moving to Business is that you want to build something bespoke, the seat price is the floor and not the total, and variable costs on a tool everyone in the company can trigger are worth a spending cap before they are worth an experiment.</p>

<h2>What this changes about choosing Notion at all</h2>

<p>Notion has always been priced as a team product with a generous single-player tier, and that has not changed. What has changed is that the AI conversation now pushes teams towards the $20 tier by design, which narrows the gap between Notion and the tools it used to undercut.</p>

<p>If the agent does work you would otherwise do, $20 a seat is straightforward value and the decision is easy. If you mainly want a place to think and write, the AI tier is beside the point, and the comparison you actually want is the one in <a href="/articles/note-taking-apps-for-thinking">note-taking apps for thinking</a> — where the relevant question is whether the tool gets out of the way, not what its agent can draft. The same applies if the real job is structured records rather than documents; that is <a href="/articles/when-a-spreadsheet-becomes-a-database">when a spreadsheet becomes a database</a>, and no agent fixes it.</p>

<p>Plan names and prices above are from Notion's pricing page as read on 23 September 2026.</p>`,
};
