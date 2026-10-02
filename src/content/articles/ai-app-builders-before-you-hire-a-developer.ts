import type { Article } from "@/content/types";

/**
 * Spec and free-tier comparison, rewritten on the URL first published
 * 2026-09-12 (old text deleted 2026-09-29, not restored). Palak has NOT used
 * Lovable, Bolt or v0; the article says so in its first paragraph and makes no
 * first-person claim about them. His own facts (chat, 2026-10-01): he built a
 * landing page by asking a chat assistant for it, 1 to 2 hours to a usable
 * page, and each new change broke screens that already worked. Free-tier
 * numbers are from each vendor's pricing page, read 2026-10-01; Lovable's paid
 * prices were not on the page it served, so they are not quoted.
 */
export const aiAppBuildersBeforeYouHireADeveloper: Article = {
  slug: "ai-app-builders-before-you-hire-a-developer",
  title: "Lovable, Bolt and v0: What the Free Tiers Actually Give You",
  excerpt:
    "Bolt gives you 300K tokens a day, v0 gives you 7 messages a day, Lovable gives you 5 build credits a day. I have not used the three, so this is their published limits plus what my own cheaper route cost me.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Lovable", "Bolt", "v0", "App builders", "Pricing"],
  publishedAt: "2026-09-12",
  contentUpdatedAt: "2026-09-20",
  seoTitle: "Lovable vs Bolt vs v0: Free Tier Limits Compared",
  seoDescription:
    "Published free-tier limits and paid prices for Lovable, Bolt and v0, read on 1 October 2026, and the cheaper route I used for a landing page instead.",
  content: `
<p>Bolt gives a free account 300K tokens a day. v0 gives 7 messages. Lovable gives 5 builds. I have never built anything in any of the three and never paid for one, so what follows is their own published limits, read on 1 October 2026, and then what my cheaper route cost me on a real page.</p>

<table>
<thead><tr><th></th><th>Free tier</th><th>First paid tier</th></tr></thead>
<tbody>
<tr><td>Bolt</td><td>300K tokens a day, 1M a month</td><td>Pro, $25 a month, from 10M tokens</td></tr>
<tr><td>v0</td><td>7 messages a day</td><td>Plus, $30 per user a month</td></tr>
<tr><td>Lovable</td><td>5 build credits a day, up to 30 a month, plus 20 Cloud credits a month</td><td>Pro and Business exist; the page served me no price for them</td></tr>
</tbody>
</table>

<h2>The three count different things</h2>
<p>The three do not measure the same thing, which makes the free tiers hard to line up. Bolt counts tokens, so a long file or a big paste eats the day's allowance faster than a short instruction does. v0 counts messages, so the size of the request does not matter and the number of times you ask does. Lovable counts builds, and refills 5 of them a day up to 30 in a month, so a month of free use has a ceiling even if you spread it out.</p>
<p>What that means in practice depends on how you work. If you change your mind often and in small steps, a message or build count runs out on you early. If you paste in long existing code, a token budget goes first.</p>

<h2>What my own landing page cost me instead</h2>
<p>I have not used Lovable, Bolt or v0, so you will not find a verdict on them from me. What I did was ask a chat assistant to build a landing page for me, screen by screen, and it took between one and two hours before the page was usable. The first draft arrived fast. Most of that time went on repairs, because every time I asked for one change, something that already worked came back broken, and I kept re-checking sections I had already finished.</p>
<p>That repair tax is the part I would ask about before paying any of these three. A daily allowance looks generous until a third of it goes on putting back what the last prompt removed. None of the pricing pages measure that, and I cannot tell you whether the dedicated builders are better at it than the chat window I used, because I have not tried them.</p>

<h2>Before you hire a developer</h2>
<p>A free tier is enough to answer one question: does the thing you want look and behave the way you imagined? That is worth doing before you pay anyone, because changing your mind costs nothing at that stage and a lot later.</p>
<p>What a free tier will not tell you is how the code holds up once real data, sign-in and a deploy are involved. My landing page had none of those and still took me an afternoon. If you plan to hand the result to a developer, keep the version that worked before each change, because you will want to go back to it.</p>
<p>For the chat side of this, I wrote about the two assistants I use for code in <a href="/articles/chatgpt-vs-claude-for-coding">ChatGPT vs Claude for coding</a>.</p>
`,
  alternatives: [
    {
      name: "A chat assistant with an artifact or canvas",
      note: "What I used for the landing page. No build or token counter in the way, but it broke working sections as I asked for changes.",
    },
    {
      name: "Firebase Studio",
      url: "https://firebase.studio",
      note: "Google's app builder. I have not used it.",
    },
    {
      name: "Replit",
      url: "https://replit.com/pricing",
      note: "Agent plus hosting in one place. Untested by me.",
    },
  ],
  humanReview: {
    experience:
      "I have not used Lovable, Bolt or v0, so you will not find a verdict on them from me. What I did was ask a chat assistant to build a landing page for me, screen by screen, and it took between one and two hours before the page was usable. The first draft arrived fast. Most of that time went on repairs, because every time I asked for one change, something that already worked came back broken, and I kept re-checking sections I had already finished.",
    reviewedAt: "2026-10-01",
  },
  sources: [
    {
      title: "Bolt pricing",
      publisher: "StackBlitz",
      url: "https://bolt.new/pricing",
      checkedAt: "2026-10-01",
    },
    {
      title: "v0 pricing",
      publisher: "Vercel",
      url: "https://v0.app/pricing",
      checkedAt: "2026-10-01",
    },
    {
      title: "Lovable pricing",
      publisher: "Lovable",
      url: "https://lovable.dev/pricing",
      checkedAt: "2026-10-01",
    },
  ],
};
