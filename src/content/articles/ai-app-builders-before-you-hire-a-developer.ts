import type { Article } from "@/content/types";

export const aiAppBuildersBeforeYouHireADeveloper: Article = {
  slug: "ai-app-builders-before-you-hire-a-developer",
  title: "AI App Builders: What Lovable, Bolt and v0 Give You Before You Hire a Developer",
  excerpt:
    "Lovable, Bolt and v0 will turn a paragraph into a working web app in an afternoon. Whether that app survives its first real user is a different question. Here is what each tool is for, what the credit-based pricing really costs, and the point at which you need a person.",
  category: "ai-tools",
  author: "toolnest-editorial",
  tags: ["AI Tools", "No-Code", "Lovable", "Bolt", "Prototyping"],
  publishedAt: "2026-09-12",
  image: "/images/articles/ai-app-builders-before-you-hire-a-developer.webp",
  imageAlt: "A laptop on a desk by a window showing lines of code on a dark editor, out-of-focus city buildings behind",
  seoTitle: "AI App Builders: Lovable, Bolt and v0 Compared",
  seoDescription:
    "Lovable vs Bolt vs v0: what each builds well, how credit and token pricing really adds up, and the signs that a prototype needs a developer.",
  quickAnswer:
    "All three build a real, deployable web app from a text description, and all three are best understood as prototyping tools that occasionally become products. Lovable is the friendliest for a non-developer and the most opinionated about the stack it uses; Bolt gives you more control and exposes more of what is going on; v0 is Vercel's tool and is strongest at the front-end, particularly if you already deploy there. Pricing is by credits or tokens rather than seats — Bolt Pro is $25 a month, Lovable Pro is around $25, v0 Plus is $30 — and the real cost is how many attempts a change takes, because every failed attempt is billed. Use them to find out whether an idea is worth building. The moment the app holds other people's data or money, get a developer to read what was generated.",
  pros: [
    "A working prototype in an afternoon instead of a specification nobody reads",
    "The output is ordinary code you can export, so you are not locked into the tool",
    "Non-developers can make real changes to a real app without asking anyone",
    "Free tiers are enough to build something and find out if you care",
  ],
  cons: [
    "Credits are consumed by attempts, not results — a stubborn bug can eat a month's allowance",
    "Generated apps tend towards security and data-handling mistakes that are invisible to the person who asked for them",
    "Each tool has a preferred stack, and moving off it means starting again",
    "'It works' and 'it works for a hundred users at once' are very different claims",
  ],
  alternatives: [
    { name: "Lovable", url: "https://lovable.dev", note: "Full-stack apps with Supabase behind them. Credit-based; workspaces allow unlimited members." },
    { name: "Bolt", url: "https://bolt.new", note: "Token-based. Free tier has a daily cap; Pro is $25 a month with tokens that roll over for a month." },
    { name: "v0", url: "https://v0.app", note: "Vercel's builder. Free tier, Plus at $30 per user per month. Best for front-ends deployed on Vercel." },
    { name: "A developer for a day", note: "Not a tool, but the right next step once the prototype has users. A day of review costs less than a breach." },
  ],
  faqs: [
    {
      question: "Can I ship what these tools build to real customers?",
      answer:
        "People do, and some of it is fine. The issue is not the code quality in general, it is the specific classes of mistake generated apps make: permissions that let one user read another's data, secrets committed into the front-end, forms that trust whatever they are sent. None of those show up in testing by the person who built it, because that person is logged in as themselves. Before the app holds anyone else's information, pay a developer for a day to read it. That is the cheapest security review you will ever buy.",
    },
    {
      question: "Why did a small change cost so many credits?",
      answer:
        "Because the tool charges per attempt, and a change that touches several files or trips over an earlier decision can take five or six attempts to land. The pattern that burns credits fastest is asking for a fix, getting a slightly different bug, and asking again. When that starts, stop, describe the problem from scratch in one message with everything you know, and if the third attempt fails, that is the point to export the code and ask a person.",
    },
    {
      question: "Which one should a non-developer start with?",
      answer:
        "Lovable, on the free tier. It makes the most decisions for you, which is what you want when you do not yet know which decisions matter. Bolt is better once you want to see and change what it is doing. v0 is the right choice if the thing you are building is mostly a front-end and you already know you will deploy on Vercel.",
    },
  ],
  sources: [
    {
      title: "Lovable pricing",
      publisher: "Lovable",
      url: "https://lovable.dev/pricing",
      checkedAt: "2026-09-12",
    },
    {
      title: "Bolt pricing",
      publisher: "StackBlitz",
      url: "https://bolt.new/pricing",
      checkedAt: "2026-09-12",
    },
    {
      title: "v0 pricing",
      publisher: "Vercel",
      url: "https://v0.app/pricing",
      checkedAt: "2026-09-12",
    },
  ],
  content: `<p>The pitch for these tools is that anyone can build software now. The reality is narrower and still useful: anyone can build the first version of software now, and the first version is where most ideas should have stopped anyway. Used that way — as a fast, cheap way to find out whether something is worth building properly — Lovable, Bolt and v0 are genuinely good. Used as a replacement for ever talking to a developer, they are how a small company ends up with a customer database anyone on the internet can read.</p>

<p>We have built throwaway tools with all three for this site, and we have not shipped any of them to readers. That is a deliberate choice, and the reasons are most of this article.</p>

<h2>What each one is actually for</h2>

<table>
<thead>
<tr><th>Tool</th><th>Builds</th><th>Pricing model</th><th>Paid entry point</th><th>Best at</th></tr>
</thead>
<tbody>
<tr><td>Lovable</td><td>Full-stack web apps, database included</td><td>Credits per message; unlimited members</td><td>Pro, around $25/mo</td><td>A non-developer getting to a working app fastest</td></tr>
<tr><td>Bolt</td><td>Full-stack web apps in a browser IDE</td><td>Tokens; daily cap on free</td><td>Pro, $25/mo</td><td>Seeing and editing what the AI is doing</td></tr>
<tr><td>v0</td><td>Front-ends and UI, deployable to Vercel</td><td>Credits per user</td><td>Plus, $30/user/mo</td><td>Interfaces, especially if you already use Vercel</td></tr>
</tbody>
</table>

<p><strong>Lovable</strong> makes the most decisions for you. Describe the app, and it picks the stack, wires up a database, adds sign-in and gives you a URL. It is the one we hand to people who have never seen a terminal, because they can get something working before they have time to be discouraged. The trade is that its choices are its choices; if you later want a different database or a different hosting arrangement, you are exporting the code and continuing somewhere else.</p>

<p><strong>Bolt</strong> shows its working. The editor, the file tree and the terminal are all visible, and you can edit the code directly between AI turns. That makes it slower for a complete beginner and much better for anyone who wants to learn what the tool is doing, which is the group most likely to end up with something maintainable. Tokens on paid plans roll over for a month, which matters more than it sounds when you have a quiet fortnight.</p>

<p><strong>v0</strong> is Vercel's, and it is honest about what it is good at: the front-end. Ask for a dashboard, a settings page, a pricing table and it produces clean React that drops into a Next.js project. Ask for a full application with accounts and billing and it will try, but the other two are built for that and it is not. If you already deploy on Vercel, the path from v0 to production is the shortest of the three.</p>

<h2>What the pricing actually means</h2>

<p>None of these charge per seat in the traditional sense. They charge per attempt. Lovable counts credits per message; Bolt counts tokens, which is roughly the amount of text the model reads and writes; v0 sells credits per user. The listed prices are close — $25, $25, $30 — and they tell you very little about what a month will cost, because the variable is how many attempts your changes take.</p>

<p>A clear request that lands first time costs one unit. A vague request costs one unit plus every clarification. A bug the tool cannot see costs a unit every time you say "still broken". The people who complain about these tools being expensive are usually in a loop of the third kind, and the fix is not a bigger plan; it is stopping, and either rewriting the request from scratch with everything you know, or exporting the code and reading it.</p>

<p>The free tiers are real. Bolt's has a daily token cap that makes it a "build a bit each day" tool; Lovable's gives a small daily grant of credits; v0's is enough to produce a few components. All three are enough to find out whether the idea survives contact with a screen, which is the only thing you should be using the free tier to learn.</p>

<h2>Where generated apps go wrong</h2>

<p>The code is usually fine. It is the assumptions that are not. A person who asks for "a form where customers submit their details" gets a form that works perfectly when they test it, because they are logged in as the administrator and are entering sensible data. The classes of mistake below are invisible from that seat, and we have seen every one of them in something a builder produced.</p>

<ul>
<li><strong>One user can read another's rows.</strong> The app has accounts, the database has a user column, and nothing checks that the two match on every query. Lovable's Supabase setup makes this less likely than it was, but "less likely" is not a security policy.</li>
<li><strong>Keys in the front-end.</strong> An API key for a paid service ends up in code the browser downloads, because that was the shortest way to make the feature work. Anyone who views source has your key and your bill.</li>
<li><strong>Trusting the form.</strong> The interface only lets a user pick from three options, so the server never checks the value. Anyone with the browser's developer tools open can send a fourth.</li>
<li><strong>No thought about ten users at once.</strong> Everything works for one person clicking slowly. A hundred people on launch day is a different program.</li>
</ul>

<p>None of these are exotic. They are the mistakes junior developers make, produced at speed, with nobody in the loop who would recognise them. That is why our threshold is simple: the day the app holds anyone else's data or takes anyone's money, a developer reads it. A day of review is cheap. We went through the equivalent decision for sign-in specifically in <a href="/articles/authentication-build-or-buy">authentication: build or buy</a>, and the answer there is even more firmly "buy".</p>

<h2>A way to use them that works</h2>

<ol>
<li><strong>Build the ugliest version that answers the question.</strong> The question is "would anyone use this", not "is this good". Two screens, no styling, fake data if you must.</li>
<li><strong>Put it in front of five people this week.</strong> Real people, real task, watch them. This is what the tools are for, and it is the step that would have cost a month and a developer two years ago.</li>
<li><strong>Decide, honestly.</strong> Most prototypes should stop here. If it stops, you have spent a free tier and an afternoon.</li>
<li><strong>If it continues, export the code before you add anything else.</strong> Put it in a repository. From here, every change either goes through someone who can read it or gets reviewed by one.</li>
<li><strong>Keep using the builder for the front-end.</strong> This is where they stay useful long after the prototype stage. Interfaces are cheap to regenerate and low-risk to get wrong.</li>
</ol>

<h2>What we would pick</h2>

<ul>
<li><strong>You have never built anything and want to see an idea on a screen:</strong> Lovable, free tier, this afternoon.</li>
<li><strong>You know a little code and want to learn as you go:</strong> Bolt. Watch what it does, edit between turns, and you will come out able to maintain the result.</li>
<li><strong>You need interfaces for an app that already exists:</strong> v0, especially on Vercel.</li>
<li><strong>The prototype has users:</strong> whichever tool you used, plus a developer for a day. We compared what the agent-style coding tools are like to work alongside in <a href="/articles/which-tickets-to-give-an-ai-coding-agent">a week with an AI coding agent</a>; the difference is that those assume a developer is present, and these assume one is not.</li>
</ul>`,
};
