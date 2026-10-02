import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-09-17 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-09-30): used Perplexity Comet for price research, forms, Gmail and
 * bookings; one task took 5 to 15 minutes; slower than by hand, too many
 * confirm prompts, got a task wrong, uneasy about logins; stopped before paying.
 * Around ten jobs in total, three or four finished without him stepping in
 * (chat, 2026-10-02).
 * The prompt-injection facts are from Brave's report.
 */
export const shouldYouLetAnAiAgentUseYourBrowser: Article = {
  slug: "should-you-let-an-ai-agent-use-your-browser",
  title: "Should You Let an AI Agent Use Your Browser? What I Found With Comet",
  excerpt:
    "I gave Perplexity Comet real jobs: price research, forms, Gmail and a booking. It was slow, it asked for confirmation constantly, and I stopped it before it could pay.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Perplexity Comet", "AI Agents", "Browsers", "Security"],
  publishedAt: "2026-09-17",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Should an AI Agent Use Your Browser? Comet Test",
  seoDescription:
    "I used Perplexity Comet for prices, forms, Gmail and a booking. It was slow, asked to confirm constantly, and I stopped it before it paid.",
  content: `
<p>Should an AI agent drive your browser? After using Perplexity Comet for real jobs, my answer is yes for research, no for anything behind a login.</p>

<p>I used Perplexity Comet for four kinds of jobs: researching and comparing prices, filling in online forms, working in my Gmail, and booking. One task took Comet somewhere between 5 and 15 minutes, which was slower than doing it by hand. It kept stopping to ask me to confirm, and it got a task wrong, so I had to redo it. I was never easy about letting it into my Gmail or near a login. On bookings I stopped before the payment step and did not let it pay.</p>

<h2>Three or four out of ten</h2>
<p>I gave Comet around ten jobs in total. Three or four it finished on its own. The other six or seven needed me: a confirmation, a correction, or doing the whole thing again myself.</p>
<p>A hit rate like that has its uses, but it is the wrong shape for what the tool promises. The reason to give a browser agent a task is to stop thinking about it. At six in ten needing my hand, I could not stop thinking about any of them. I had to stay near the screen for all ten to find out which were the four. The supervision cost is the same whether the agent turns out to need me or not, so it attaches to every task, while the saving only attaches to the ones that work.</p>
<p>That is also why the per-task timing mattered less than I expected. One job took it somewhere between 5 and 15 minutes, slower than my own hands. But a slow tool you can walk away from is still a good trade. A slow tool you have to watch is just a slow version of doing it yourself.</p>

<h2>What slowed it down</h2>
<p>The confirmation prompts meant I could not hand Comet a job and leave it alone for long. It also got a task wrong, so I did that task twice, once through Comet and once myself.</p>
<p>Confirmations are a sensible default for an agent that can click buttons in your accounts. Plan for them if you expect to walk away while it works.</p>
<p>The four kinds of job did not fail evenly. Research and price comparison was where it did best, because the worst case is a page I did not need and the cost of a mistake is a minute of reading. Forms were slower than typing, since I read every field before confirming it anyway. Gmail I never got comfortable with, which is a judgement rather than a measurement: I did not like watching something else move around in my mail. Booking I stopped at the payment step every single time, so it was never doing the part that would have saved me anything.</p>

<h2>What a web page can make it do</h2>
<p>An agent in your browser reads web pages and may follow instructions it finds there. Brave's security team showed this against Comet in a report dated 20 August 2025. A hidden instruction in a Reddit comment made Comet pull the user's email address and a one-time code from Gmail and post them back to the attacker, after the user had only asked it to summarise the page. Brave added after publishing that Perplexity had still not fully fixed that kind of attack.</p>

<h2>How I would set it up now</h2>
<p>Give the agent a browser profile that is not signed in to your bank, your main email or your password manager. This is the one setting that changes what a bad outcome costs. Brave's report describes an agent that was only asked to summarise a page and ended up reading a one-time code out of the user's mail. What protects you is an agent that has nothing valuable within reach. No wording of your request does that job. In a profile that has no mail and no saved cards, the worst a hidden instruction achieves is wasting a few minutes of your time.</p>
<p>Use it for research and drafts, where a wrong answer costs you a few minutes. That is the category where three or four in ten is a fair deal: the six that fail cost almost nothing, and the four that work save real reading. Keep it away from the jobs where a wrong click has to be undone somewhere else. If you need an assistant inside your mail, a connector with approval before every send is a calmer setup; my <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">Claude Pro Gmail setup</a> uses one.</p>
`,
  humanReview: {
    reviewedAt: "2026-09-30",
    experience:
      "I used Perplexity Comet for four kinds of jobs: researching and comparing prices, filling in online forms, working in my Gmail, and booking. One task took Comet somewhere between 5 and 15 minutes, which was slower than doing it by hand. It kept stopping to ask me to confirm, and it got a task wrong, so I had to redo it. I was never easy about letting it into my Gmail or near a login. On bookings I stopped before the payment step and did not let it pay.",
  },
  faqs: [
    {
      question: "Is Comet faster than doing the task yourself?",
      answer:
        "Not in my use. One task took it 5 to 15 minutes, and doing it by hand was faster.",
    },
    {
      question: "Can a web page give the agent orders?",
      answer:
        "Yes. Brave showed a hidden comment on a page steering Comet into reading Gmail and leaking a one-time code. Keep the agent away from logged-in accounts you cannot afford to lose.",
    },
  ],
  sources: [
    {
      title: "Agentic Browser Security: Indirect Prompt Injection in Perplexity Comet",
      publisher: "Brave",
      url: "https://brave.com/blog/comet-prompt-injection/",
      checkedAt: "2026-09-30",
    },
  ],
};
