import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-09-17 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-09-30): used Perplexity Comet for price research, forms, Gmail and
 * bookings; one task took 5 to 15 minutes; slower than by hand, too many
 * confirm prompts, got a task wrong, uneasy about logins; stopped before paying.
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
  contentUpdatedAt: "2026-09-18",
  content: `
<p>Should an AI agent drive your browser? After using Perplexity Comet for real jobs, my answer is yes for research, no for anything behind a login.</p>

<p>I used Perplexity Comet for four kinds of jobs: researching and comparing prices, filling in online forms, working in my Gmail, and booking. One task took Comet somewhere between 5 and 15 minutes, which was slower than doing it by hand. It kept stopping to ask me to confirm, and it got a task wrong, so I had to redo it. I was never easy about letting it into my Gmail or near a login. On bookings I stopped before the payment step and did not let it pay.</p>

<h2>What slowed it down</h2>
<p>Three things, in my use. It was slower than my own hands. It kept stopping to ask me to confirm the next step, so I could not leave it alone for long. And it got a task wrong, which meant doing that task twice: once by Comet, once by me.</p>
<p>The confirmations are a sensible default for an agent that can click buttons in your accounts. They still cost you time, and you should expect them if you plan to hand it a job and walk away.</p>

<h2>Why I stopped before paying</h2>
<p>An agent in your browser reads web pages as instructions it might follow. Brave's security team showed this against Comet in a report dated 20 August 2025: a hidden instruction inside a Reddit comment made Comet pull the user's email address and a one-time code from Gmail and post them back to the attacker, after the user only asked it to summarise the page. Brave added after publishing that Perplexity had still not fully fixed that kind of attack.</p>
<p>That is why I kept payments to myself. The agent can get you to the checkout page. Your card details stay with you.</p>

<h2>How I would set it up now</h2>
<p>Give the agent a browser profile that is not signed in to your bank, your main email or your password manager. Use it for research and drafts, where a wrong answer costs you a few minutes. If you need an assistant inside your mail, a connector with approval before every send is a calmer setup; I wrote up <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">how I connected Gmail and Calendar to Claude Pro</a>.</p>
`,
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
