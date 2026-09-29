import type { Article } from "@/content/types";

/**
 * DRAFT — not published until Palak confirms the facts in chat.
 * Facts from Palak (2026-09-29): Claude Code built small parts of ToolNest
 * only; he pays per token through the API; he hit usage limits, got broken
 * code and lost context in long sessions; ToolNest is his only project with it.
 * Repo numbers from git on 2026-09-29. Docs facts from the costs page, read
 * the same day.
 */

export const claudeCodeForASimpleWebsite: Article = {
  slug: "claude-code-for-a-simple-website",
  title: "Is Claude Code Worth It for a Simple Website? What I Used It For",
  excerpt:
    "I used Claude Code for small parts of this site, paid per token through the API, and wrote most of the code myself. Here is where it helped, where it cost me time, and who it suits.",
  category: "developer-tools",
  author: "palak-patel",
  tags: ["Developer Tools", "Claude Code", "AI Coding", "Next.js"],
  publishedAt: "2026-09-30",
  seoTitle: "Is Claude Code Worth It for a Simple Website?",
  seoDescription:
    "I used Claude Code for small parts of a Next.js site on pay-per-token API billing. Where it helped, where it broke things, and who it suits.",
  quickAnswer:
    "Yes, for small parts of a simple website, as long as you can read and check the code it writes. I used it on this site for fixes and single pieces of code, paid per token through the API, and wrote most of the site myself. It also broke things, lost track of earlier decisions in long sessions and hit usage limits, so it did not replace doing the work. If you want it to build a whole site you will never read, pick something else.",
  pros: [
    "Handles small, clearly described jobs well on a codebase you already understand",
    "Pay-per-token billing means a quiet month costs little",
    "/usage shows an estimated cost for the current session, so you can watch spend as you go",
    "/clear starts a fresh session and costs nothing",
  ],
  cons: [
    "It wrote code that broke things, and I had to find and fix them myself",
    "In long sessions it lost track of decisions made earlier",
    "I hit usage limits",
    "On an API key the prompt cache lasts five minutes by default, so after a break the next message re-reads the whole session",
  ],
  sources: [
    {
      title: "Manage costs effectively",
      publisher: "Anthropic",
      url: "https://code.claude.com/docs/en/costs",
      checkedAt: "2026-09-29",
    },
  ],
  content: `<p>I started this site on 19 August 2026. By 29 September it had 59 commits made on 22 different days, about 4,900 lines of TypeScript and 30 tests. I wrote most of that code myself. I used Claude Code, paid per token through the API, for small parts: fixes and single pieces of code where I knew exactly what I wanted. On those it saved me typing. It also wrote code that broke things, and I fixed those by hand.</p>

<h2>What I used it for</h2>
<p>Fixes and single pieces of code: a bug with a known cause, one component, one change I could describe in a sentence. The rest of the site, a Next.js 16 app with no database, I wrote myself.</p>
<p>ToolNest is the only project I have used it on. I have not tried it on a large app or at work, so I cannot tell you how it handles a codebase ten times this size.</p>

<h2>Where it cost me time</h2>
<p>Some of the code it wrote did not work, and some of it broke parts of the site that had worked before. I found those and fixed them by hand. In long sessions it also lost track of decisions made earlier in the same session. And I hit usage limits.</p>

<h2>What paying per token means on a small site</h2>
<p>On the API, Claude Code bills by tokens. The <code>/usage</code> command shows an estimated dollar cost for the current session, and Anthropic says the Usage page in the Claude Console is the real bill. Anthropic's own figure for enterprise teams is about $13 per developer per active day. That is an average across companies, not a figure for one person on one small site. Your own number is in <code>/usage</code>.</p>
<p>Two habits keep the bill down. <code>/clear</code> starts a fresh session and costs nothing, while a long session sends its whole history with every request. And on an API key the prompt cache lasts five minutes by default, so the first message after a break re-reads everything in the session at full price.</p>
<p>If you are deciding between a subscription and the API, <a href="/articles/claude-code-vs-cursor-what-a-solo-developer-pays">my Claude Code vs Cursor cost comparison</a> sets the plans next to each other.</p>

<h2>Who it suits</h2>
<p>It suits you if you already know how to build the site and want help with the small, boring parts, and you will read every change before it goes live. On a simple website that describes most of the work.</p>
<p>It does not suit you if you want it to build the whole site while you watch. The broken code and the lost context are manageable when the jobs are small and you check them. On a site you do not understand, you would not see them until a visitor did.</p>`,
};
