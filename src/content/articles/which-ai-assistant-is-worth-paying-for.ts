import type { Article } from "@/content/types";

export const whichAiAssistantIsWorthPayingFor: Article = {
  slug: "which-ai-assistant-is-worth-paying-for",
  title: "Which AI Assistant Is Worth Paying For?",
  excerpt:
    "ChatGPT, Claude and Gemini have converged on roughly twenty dollars a month, which makes price the least useful thing to compare them on. The question that actually decides it is what you already have, and what you would stop doing if the subscription lapsed.",
  image: "/images/articles/which-ai-assistant-is-worth-paying-for.webp",
  imageAlt:
    "Photograph: a laptop on a speckled worktop showing OpenAI's ChatGPT announcement page, the screen the only lit thing in a dark room",
  category: "ai-tools",
  author: "parth-patel",
  tags: ["AI Tools", "ChatGPT", "Claude", "Gemini", "Subscriptions"],
  publishedAt: "2026-09-07",
  seoTitle: "ChatGPT vs Claude vs Gemini: What to Pay For",
  seoDescription:
    "The three main AI subscriptions cost about the same. What separates them is context, integrations and how you work — here is how to pick one.",
  quickAnswer:
    "All three headline plans land within a pound or two of each other: ChatGPT Plus is $20 a month, Claude Pro is $20 monthly or $17 a month paid annually, and Google AI Pro is $19.99 with 5TB of storage attached. Because the prices match, pick on fit instead. Take Claude if most of your work is long documents or code. Take ChatGPT if you want the widest set of extras — images, voice, agents — under one bill. Take Google AI Pro if you live in Gmail and Docs, or if you were about to buy cloud storage anyway, in which case the storage alone changes the sum. The tiers above are where the money goes: ChatGPT Pro at $100 or $200, Claude Max from $100, Google AI Ultra at $99.99 or $199.99. Nobody needs those on day one.",
  pros: [
    "One subscription at this price replaces several single-purpose tools",
    "The free tiers are good enough to test with before you commit anything",
    "Google's plan bundles storage you may already be paying for elsewhere",
    "Monthly billing means a bad month costs you one month",
  ],
  cons: [
    "Usage limits are stated as multipliers rather than numbers, so you cannot forecast them",
    "Model names and allowances change often enough that any comparison ages fast",
    "Paying for two assistants is easy to drift into and hard to justify",
    "The $100 and $200 tiers are priced for heavy daily use, not for occasional deep work",
  ],
  alternatives: [
    { name: "ChatGPT", url: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus", note: "Plus at $20 a month. The broadest feature set of the three, and the one most third-party guides assume you are using." },
    { name: "Claude", url: "https://claude.com/pricing", note: "Pro at $20 monthly, or $17 a month billed annually. Strongest on long documents, writing and code; Claude Code is included in Pro." },
    { name: "Google AI Pro", url: "https://gemini.google/me/subscriptions/", note: "$19.99 a month with 5TB of storage across Gmail, Drive and Photos. Worth more than it looks if you already pay Google for space." },
    { name: "Free tiers", note: "All three publish a usable free plan. If you open an assistant twice a week, that is the correct plan and the honest answer." },
  ],
  faqs: [
    {
      question: "What do the usage limits actually mean?",
      answer:
        "Less than you would like. None of the three publishes a firm message count you can plan against, because the allowance moves with the model and with demand. What they publish is relative: OpenAI describes its $100 Pro tier as 5x the usage of Plus and the $200 tier as 20x, and Claude sells Max as 5x and 20x Pro. Google's AI Plus, Pro and Ultra tiers are described the same way, as multipliers over the free plan. The practical approach is to live on the $20 tier and notice whether you hit a wall. If you never do, the tier above is not for you. If you hit it twice a week, the maths changes on its own.",
    },
    {
      question: "Is it worth paying for two of them?",
      answer:
        "Occasionally, and less often than people who pay for two will tell you. The case for it is real when two jobs are genuinely different — say, long-document work in one and image or voice generation in the other. The case against is that a second subscription mostly buys you a second habit, and the assistant you use less is the one you stop checking for accuracy. If you do run two, set a date to cancel one and see whether you notice. I wrote about that discipline in more detail in my account of the <a href=\"/articles/auditing-small-team-software-spend\">software I pay for and what I cancelled</a>.",
    },
    {
      question: "Does the storage in Google's plan really count?",
      answer:
        "It does, and it is the one part of this comparison that is not a matter of taste. Google AI Pro includes 5TB across Gmail, Drive and Photos. If you already pay for a storage plan, the assistant is effectively costing you the difference rather than the full monthly price, and that difference is often close to zero. Nobody buys an AI subscription for the disk space, but it is the only concrete, countable thing any of the three throws in, so it belongs in the sum.",
    },
    {
      question: "Which one is best for writing code?",
      answer:
        "I have a whole piece on that, because the answer has more moving parts than a pricing table can hold. The short version is that Claude Pro includes Claude Code, which changes what the subscription is for — it stops being a chat window and becomes something that edits files in your project. If coding is the main reason you are paying, read <a href=\"/articles/chatgpt-vs-claude-for-coding\">my comparison of the two for coding</a> before you pick, and treat the general-purpose comparison here as secondary.",
    },
  ],
  sources: [
    {
      title: "What is ChatGPT Plus?",
      publisher: "OpenAI",
      url: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus",
      checkedAt: "2026-09-07",
    },
    {
      title: "About ChatGPT Pro tiers",
      publisher: "OpenAI",
      url: "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
      checkedAt: "2026-09-07",
    },
    {
      title: "Claude pricing",
      publisher: "Anthropic",
      url: "https://claude.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Google AI Pro and Ultra subscriptions",
      publisher: "Google",
      url: "https://gemini.google/us/subscriptions/",
      checkedAt: "2026-09-07",
    },
    {
      title: "Everything new in my Google AI subscriptions",
      publisher: "Google",
      url: "https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/",
      checkedAt: "2026-09-07",
    },
  ],
  content: `<p>Three companies arrived at the same price. ChatGPT Plus is $20 a month. Claude Pro is $20 a month, or $17 if you pay for the year up front. Google AI Pro is $19.99. That is not a coincidence and it is not a coordination scandal either — it is what happens when everyone works out what a consumer will pay for one subscription and stops there.</p>

<p>Which is convenient for them and awkward for you, because it removes the one comparison people are good at making. You cannot pick the cheap one. There isn't a cheap one.</p>

<h2>What the money actually buys at each tier</h2>

<p>Published rates at the time of writing, in the currency each vendor quotes.</p>

<table>
<thead>
<tr><th>Plan</th><th>Monthly</th><th>Annual equivalent</th><th>What it adds</th></tr>
</thead>
<tbody>
<tr><td>ChatGPT Plus</td><td>$20</td><td>—</td><td>Higher limits than free, the full feature set</td></tr>
<tr><td>ChatGPT Pro</td><td>$100 / $200</td><td>—</td><td>5x and 20x the usage of Plus respectively</td></tr>
<tr><td>Claude Pro</td><td>$20</td><td>$17/mo, $200 up front</td><td>Claude Code, unlimited projects, more usage</td></tr>
<tr><td>Claude Max</td><td>From $100</td><td>—</td><td>5x or 20x Pro usage, priority at busy times</td></tr>
<tr><td>Google AI Plus</td><td>$4.99</td><td>—</td><td>400GB storage, modest usage lift</td></tr>
<tr><td>Google AI Pro</td><td>$19.99</td><td>—</td><td>5TB storage, higher limits, Deep Research</td></tr>
<tr><td>Google AI Ultra</td><td>$99.99 / $199.99</td><td>—</td><td>20TB storage, 5x and 20x limits</td></tr>
</tbody>
</table>

<p>Two things stand out. Google's $4.99 tier has no equivalent anywhere else, and it is the only genuinely cheap way into any of this. And every step above $20 is sold as a multiplier rather than a number, which tells you the vendors themselves cannot promise a fixed allowance.</p>

<h2>Pick on the work, not the model</h2>

<p>Model rankings turn over every few months. What you do all day does not. So sort yourself into one of these before you look at a benchmark.</p>

<ul>
<li><strong>You work in long documents.</strong> Contracts, reports, research papers, a codebase. Claude has been the steadier choice here for a while, and Pro includes Claude Code, which means it can work on files rather than talk about them.</li>
<li><strong>You want one bill for everything.</strong> Text, images, voice, browsing, agents. ChatGPT has the broadest surface area, and it is the one every tutorial and template assumes.</li>
<li><strong>You live in Google's apps.</strong> If your day is Gmail, Docs and Drive, the assistant that is already inside them wins on friction alone, and the 5TB removes a separate line from your bill.</li>
</ul>

<p>Notice that none of those three sentences mentions which model scores highest on anything. That is deliberate. At this price point the differences that survive a month of real use are about where the tool sits in your day, not about a leaderboard.</p>

<h2>The tiers above $20 are a different product</h2>

<p>It is easy to read $100 as "the good one" and $20 as "the trial". That is not what is happening. The $100 and $200 tiers exist for people who hit limits on the $20 plan repeatedly, and the honest test is whether you have.</p>

<p>Both OpenAI and Anthropic describe their upper tiers in multiples: 5x and 20x. Google does the same with Ultra. Nobody publishes the base number those multiply, so you cannot work out in advance whether 5x is enough — you can only find out by running out at 1x first. Which is the correct order to do it in anyway.</p>

<blockquote>
<p>If you have never seen a usage limit message, you are on the right plan. If you see one most days, the upgrade will pay for itself in the time you currently spend waiting for a reset.</p>
</blockquote>

<h2>What the free tiers are actually for</h2>

<p>All three publish a free plan, and they are not demos. For someone who opens an assistant a few times a week to draft an email or check a fact, the free plan is genuinely the right answer, and a subscription would be money spent on capability you never reach.</p>

<p>The useful thing about the free tiers is that they let you run the comparison properly. Take one real task from your week — not a puzzle, not a benchmark question, the actual thing — and give it to all three. The differences show up immediately on real work and almost never on test prompts. Where the answers matter enough to check, the same habits apply as with any tool that produces confident text: my piece on <a href="/articles/ai-research-tools-and-your-sources">AI research tools and your sources</a> covers what to verify and how.</p>

<h2>The cost nobody puts in the comparison</h2>

<p>The subscription is $20. The real cost is that you now have a habit, and habits attract other subscriptions. I have watched teams end up paying for two assistants, a writing tool built on one of them, and a meeting notetaker built on another — four bills, three of which are wrappers around the model in the first bill.</p>

<p>Before you add the second AI subscription, check whether the one you have already does the job. It usually does, slightly worse, for free.</p>

<h2>What I would do</h2>

<p>Start free for two weeks with a real task, not a trial task. Then pay for one, monthly rather than annually, so that a change of mind costs you one month rather than a year. Put a reminder in the calendar for ninety days out asking one question: what did this replace? If the answer is nothing, cancel it.</p>

<p>And if you already pay Google for storage, run that sum first. It is the only part of this comparison where the answer is arithmetic rather than judgement, and arithmetic is easier to be right about.</p>`,
};
