import type { Article } from "@/content/types";

export const weekWithAnAiCodingAgent: Article = {
  slug: "week-with-an-ai-coding-agent",
  title: "We Gave an AI Coding Agent a Real Backlog for a Week",
  excerpt:
    "Not a demo repository — an actual backlog with actual tickets. Here is what it merged, what it broke, and where a human had to step in.",
  category: "ai-coding",
  author: "priya-raman",
  tags: ["AI Coding", "Developer Tools", "AI Tools"],
  publishedAt: "2026-08-13",
  featured: true,
  image: "/images/articles/week-with-an-ai-coding-agent.webp",
  imageAlt: "A desk at dusk with a dark monitor and a single warm lamp",
  seoTitle: "A Week With an AI Coding Agent on a Real Backlog",
  seoDescription:
    "We assigned an AI coding agent eighteen real tickets over a week. What merged without changes, what needed rework, and what it should never have been given.",
  quickAnswer:
    "Eighteen tickets in, eleven merged with minor review changes, four needed substantial rework, three were abandoned. The pattern is sharp: it succeeds on well-specified, well-tested, local changes and fails on anything requiring a decision nobody had written down.",
  pros: [
    "Excellent on mechanical changes with clear acceptance criteria",
    "Writes better commit messages and PR descriptions than most humans",
    "Never gets bored by tedious, repetitive migrations",
  ],
  cons: [
    "Interprets ambiguity as permission rather than a question",
    "Green tests are treated as proof of correctness",
    "Review time can exceed the time to write it yourself on complex tickets",
  ],
  faqs: [
    {
      question: "Did it actually save time overall?",
      answer:
        "Yes, but less than the merged-count suggests. Counting review and rework, the net saving over the week was roughly a day — real, but not the order-of-magnitude claim you see in marketing.",
    },
    {
      question: "What is the best ticket to give one?",
      answer:
        "Something you could hand to a competent contractor with no context: clear acceptance criteria, existing tests, changes confined to a few files, and no product decisions embedded in it.",
    },
  ],
  content: `<p>Agent demos always use a fresh repository and a well-behaved task. We wanted to know what happens with a real backlog: tickets written by different people at different times, some of them vague, on a codebase with history.</p>

<p>Eighteen tickets over five days. Every pull request went through normal review.</p>

<h2>The results</h2>

<table>
<thead>
<tr><th>Outcome</th><th>Count</th><th>Typical ticket</th></tr>
</thead>
<tbody>
<tr><td>Merged with minor review changes</td><td>11</td><td>Add a field, fix a validation rule, mechanical refactor</td></tr>
<tr><td>Needed substantial rework</td><td>4</td><td>Anything touching more than one subsystem</td></tr>
<tr><td>Abandoned</td><td>3</td><td>Tickets that were actually unmade product decisions</td></tr>
</tbody>
</table>

<h2>What it was genuinely good at</h2>

<p>Mechanical work with a clear finish line. Renaming a concept across forty files. Adding a field end to end — migration, type, form, test. Converting a callback-style module to promises. Work that is tedious, well-defined and verifiable.</p>

<p>It also wrote better pull request descriptions than we do, consistently. That is a small thing that made review meaningfully faster.</p>

<h2>The failure mode that matters</h2>

<p>Three tickets were vague — the kind where a human would reply "which behaviour do you want here?" The agent did not ask. It picked an interpretation, implemented it confidently, and wrote a PR description that described its choice as though it had been specified.</p>

<blockquote>
<p>A junior developer who is unsure asks. An agent that is unsure commits. That difference is the entire risk profile.</p>
</blockquote>

<p>This is manageable, but only if you know it happens. We started adding an explicit line to ambiguous tickets — "if the expected behaviour is unclear, stop and ask rather than choosing" — and it complied. It just does not do it unprompted.</p>

<h2>Tests are treated as proof, not evidence</h2>

<p>On two of the four rework tickets, the agent changed behaviour, ran the suite, saw green, and concluded it was done. The suite was green because the behaviour it changed had no test.</p>

<pre><code>// what it changed
- if (user.plan === "trial" &amp;&amp; daysLeft &lt;= 0) return blocked();
+ if (user.plan === "trial" &amp;&amp; daysLeft &lt; 0) return blocked();
// tests: all passing. also: trials no longer expire on the final day.</code></pre>

<p>No test covered the boundary. A human might have made the same edit — but a human who touched an expiry condition would usually feel a flicker of doubt. The agent felt nothing and said so in the PR: "no behavioural change expected."</p>

<h2>Where the time actually went</h2>

<p>Review. On simple tickets, reviewing an agent PR is faster than writing the code. On complex ones, it is slower, because you are reconstructing intent from a diff rather than holding it in your head as you write.</p>

<p>The crossover is roughly at "touches more than two files you have not read recently". Above that line, writing it yourself was faster all week.</p>

<h2>How we would use one</h2>

<ul>
<li>Give it well-specified, well-tested, locally-scoped tickets.</li>
<li>Add an explicit instruction to stop and ask when the spec is ambiguous.</li>
<li>Review the diff, not the description — the description reflects intent, not behaviour.</li>
<li>Keep anything with a product decision inside it away from the queue entirely.</li>
</ul>

<p>Used that way it is a genuine help, roughly equivalent to a fast contractor with no context and no judgement. That is a real thing to have. It is not what the demos are selling.</p>`,
};
