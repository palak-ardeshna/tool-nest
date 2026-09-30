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
  contentUpdatedAt: "2026-09-30",
  seoTitle: "Should an AI Agent Use Your Browser? Comet Test",
  seoDescription:
    "I used Perplexity Comet for prices, forms, Gmail and a booking. It was slow, asked to confirm constantly, and I stopped it before it paid.",
  content: `
<p>Should an AI agent drive your browser? After using Perplexity Comet for real jobs, my answer is yes for research, no for anything behind a login.</p>

<p>I used Perplexity Comet for four kinds of jobs: researching and comparing prices, filling in online forms, working in my Gmail, and booking. One task took Comet somewhere between 5 and 15 minutes, which was slower than doing it by hand. It kept stopping to ask me to confirm, and it got a task wrong, so I had to redo it. I was never easy about letting it into my Gmail or near a login. On bookings I stopped before the payment step and did not let it pay.</p>

<h2>What slowed it down</h2>
<p>The confirmation prompts meant I could not hand Comet a job and leave it alone for long. It also got a task wrong, so I did that task twice, once through Comet and once myself.</p>
<p>Confirmations are a sensible default for an agent that can click buttons in your accounts. Plan for them if you expect to walk away while it works.</p>

<h2>What a web page can make it do</h2>
<p>An agent in your browser reads web pages and may follow instructions it finds there. Brave's security team showed this against Comet in a report dated 20 August 2025. A hidden instruction in a Reddit comment made Comet pull the user's email address and a one-time code from Gmail and post them back to the attacker, after the user had only asked it to summarise the page. Brave added after publishing that Perplexity had still not fully fixed that kind of attack.</p>

<h2>How I would set it up now</h2>
<p>Give the agent a browser profile that is not signed in to your bank, your main email or your password manager. Use it for research and drafts, where a wrong answer costs you a few minutes. If you need an assistant inside your mail, a connector with approval before every send is a calmer setup; my <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">Claude Pro Gmail setup</a> uses one.</p>
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
