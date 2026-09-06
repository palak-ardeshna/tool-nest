import type { Article } from "@/content/types";

export const weekWithAnAiCodingAgent: Article = {
  slug: "which-tickets-to-give-an-ai-coding-agent",
  title: "Which Tickets Should You Give an AI Coding Agent?",
  excerpt:
    "Agent demos use fresh repositories and well-behaved tasks. Real backlogs contain vague tickets, undocumented decisions and untested code paths — and the difference between where agents succeed and where they fail is sharper than the marketing suggests.",
  category: "ai-tools",
  author: "toolnest-editorial",
  tags: ["AI Coding", "Developer Tools", "AI Tools"],
  publishedAt: "2026-08-13",
  contentUpdatedAt: "2026-08-19",
  featured: true,
  image: "/images/articles/week-with-an-ai-coding-agent.webp",
  imageAlt: "A desk at dusk with a dark monitor and a single warm lamp",
  seoTitle: "What to Give an AI Coding Agent",
  seoDescription:
    "Which backlog tickets AI coding agents handle well, the failure modes to expect, and why review time is the real cost of putting one on your team.",
  quickAnswer:
    "Give an agent work you could hand to a competent contractor with no context: clear acceptance criteria, existing test coverage, changes confined to a few files, and no product decisions embedded in the ticket. Keep away from it anything where the correct behaviour has not been decided — an agent treats ambiguity as permission to choose rather than a reason to ask. The practical limit is review cost: once a change touches more than two files you have not read recently, reconstructing intent from a diff is usually slower than writing it yourself.",
  pros: [
    "Strong on mechanical changes with clear acceptance criteria",
    "Writes consistently thorough commit messages and pull request descriptions",
    "Never gets bored by tedious, repetitive migrations",
    "Works in parallel with you rather than instead of you",
  ],
  cons: [
    "Interprets ambiguity as permission rather than as a question to ask",
    "Treats a green test suite as proof of correctness rather than as evidence",
    "Review time can exceed the time to write the change yourself",
    "Confidence in the pull request description is unrelated to correctness",
  ],
  faqs: [
    {
      question: "Do coding agents actually save time?",
      answer:
        "On the right tickets, yes — but the honest figure is much smaller than the merged-pull-request count suggests, because review and rework are part of the cost and rarely appear in vendor claims. The only way to know for your team is to track review minutes alongside merges for a couple of weeks. If nobody is measuring review time, any productivity claim is unfalsifiable.",
    },
    {
      question: "What is the best kind of ticket to give one?",
      answer:
        "Something you could hand to a competent contractor with no context about your company: clear acceptance criteria, existing tests around the area being changed, changes confined to a few files, and no unmade product decisions hidden inside it. If writing the ticket clearly takes longer than making the change, that is a signal to do it yourself.",
    },
    {
      question: "Should an agent's pull requests skip normal review?",
      answer:
        "No, and the reason is specific: agents produce fluent, confident descriptions regardless of whether the change is correct. That fluency makes the diff feel reviewed when it has only been explained. Review the diff, not the description.",
    },
    {
      question: "How do I stop an agent guessing on a vague ticket?",
      answer:
        "Ask it explicitly. Adding a line such as 'if the expected behaviour is unclear, stop and ask rather than choosing' works, but it has to be stated — agents generally do not volunteer uncertainty. Better still, treat a ticket that needs that line as a ticket that is not ready for an agent.",
    },
  ],
  sources: [
    {
      title: "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity",
      publisher: "METR",
      url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Balancing AI tensions: Moving from AI adoption to effective SDLC use",
      publisher: "DORA (Google Cloud)",
      url: "https://dora.dev/insights/balancing-ai-tensions/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Best practices for using GitHub Copilot to work on tasks",
      publisher: "GitHub",
      url: "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
      checkedAt: "2026-09-03",
    },
    {
      title: "Best practices for Claude Code",
      publisher: "Anthropic",
      url: "https://code.claude.com/docs/en/best-practices",
      checkedAt: "2026-09-03",
    },
    {
      title: "Small CLs",
      publisher: "Google (eng-practices)",
      url: "https://google.github.io/eng-practices/review/developer/small-cls.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "Code Coverage Best Practices",
      publisher: "Google Testing Blog",
      url: "https://testing.googleblog.com/2020/08/code-coverage-best-practices.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "About GitHub Copilot cloud agent",
      publisher: "GitHub",
      url: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Every agent demo uses a fresh repository and a well-behaved task. Real backlogs are not that. They contain tickets written by different people at different times, some of them vague, against a codebase with years of accumulated decisions that were never written down.</p>

<p>This article is about triage: which of those tickets an agent handles well, which it handles badly, and how to tell them apart before you find out the expensive way. We are describing the failure modes these tools consistently exhibit and how to design around them — not publishing measurements from a controlled trial.</p>

<h2>The triage rule</h2>

<p>The single most useful filter is this: <strong>could you hand this ticket to a competent contractor who knows nothing about your company, and expect a correct result?</strong></p>

<p>That question captures almost everything that matters. A contractor with no context needs the acceptance criteria written down, needs the affected area to be verifiable, and cannot make decisions about what your product should do. Those are exactly the three conditions under which an agent performs well.</p>

<table>
<thead>
<tr><th>Ticket shape</th><th>Give it to an agent?</th><th>Why</th></tr>
</thead>
<tbody>
<tr><td>Add a field end to end — migration, type, form, test</td><td>Yes</td><td>Mechanical, verifiable, clear finish line</td></tr>
<tr><td>Rename a concept across many files</td><td>Yes</td><td>Tedious, well-defined, easy to review as a pattern</td></tr>
<tr><td>Convert a module from callbacks to promises</td><td>Yes</td><td>Local, mechanical, existing tests constrain it</td></tr>
<tr><td>Fix a validation rule with a stated expected behaviour</td><td>Yes</td><td>Acceptance criteria are unambiguous</td></tr>
<tr><td>Change behaviour that spans two or more subsystems</td><td>Usually not</td><td>Review cost exceeds the writing cost</td></tr>
<tr><td>"Improve the onboarding flow"</td><td>No</td><td>An unmade product decision wearing a ticket's clothes</td></tr>
<tr><td>Anything touching auth, billing or data deletion</td><td>No</td><td>Failure is expensive and tests rarely cover the edges</td></tr>
</tbody>
</table>

<h2>What agents are genuinely good at</h2>

<p>Mechanical work with a clear finish line. The value is not that an agent does it better than you — it is that it does it without getting bored, which is where humans introduce errors on the fortieth file of a rename.</p>

<p>They are also consistently thorough at pull request descriptions and commit messages, which is a small thing that makes review meaningfully faster. Every changed file gets mentioned; the reasoning is spelled out. Most human pull requests are not written that carefully.</p>

<p>That same fluency is a trap, which is the next section.</p>

<h2>The failure mode that matters most: ambiguity becomes a decision</h2>

<p>Give a human developer a ticket where the intended behaviour is genuinely unclear and they will usually reply asking which behaviour you want. Give the same ticket to an agent and it will pick an interpretation, implement it confidently, and write a description that presents its choice as though it had been specified.</p>

<blockquote>
<p>A junior developer who is unsure asks. An agent that is unsure commits. That difference is the entire risk profile.</p>
</blockquote>

<p>This is manageable once you know it happens. Adding an explicit instruction to ambiguous tickets — "if the expected behaviour is unclear, stop and ask rather than choosing" — generally works. But agents do not do it unprompted, and the tickets where it matters most are the ones nobody realised were ambiguous. The more durable fix is upstream: a ticket that would need that instruction is a ticket that is not ready.</p>

<h2>The second failure mode: green tests read as proof</h2>

<p>An agent that changes behaviour, runs the suite, and sees green will report that nothing behavioural changed. The suite is green because the behaviour it changed had no test.</p>

<pre><code>// a change of exactly this shape is easy to make and easy to miss
- if (user.plan === "trial" &amp;&amp; daysLeft &lt;= 0) return blocked();
+ if (user.plan === "trial" &amp;&amp; daysLeft &lt; 0) return blocked();
// tests: all passing. also: trials no longer expire on their final day.</code></pre>

<p>A human might make the same edit. But a human who touched an expiry condition would usually feel a flicker of doubt and go looking for the test. An agent feels nothing, finds green, and writes "no behavioural change expected" — a sentence that is simultaneously honest and wrong.</p>

<p>The practical defence is to treat coverage as a gate rather than a nice-to-have: if the area a ticket touches has no meaningful tests, either write them first or do the work yourself.</p>

<h2>Where the time actually goes</h2>

<p>Review, and this is the number most productivity claims quietly omit.</p>

<p>On simple tickets, reviewing an agent's pull request is faster than writing the code. On complex ones it is slower, because you are reconstructing intent from a diff rather than holding it in your head as you write. Reading unfamiliar code is a different and harder task than writing familiar code, and a large diff you did not author is unfamiliar code by definition.</p>

<p>A workable heuristic for the crossover: <strong>more than two files you have not read recently</strong>. Above that line, doing it yourself is usually faster, and the gap widens with the complexity of the change rather than its size.</p>

<h2>How to measure it honestly on your own team</h2>

<p>If you want to know whether an agent is helping rather than whether it feels like it is helping, track four things for two weeks:</p>

<ul>
<li><strong>Tickets assigned</strong>, and their shape against the triage table above.</li>
<li><strong>Outcome per ticket</strong>: merged with minor changes, needed substantial rework, or abandoned.</li>
<li><strong>Review minutes</strong>, timed rather than estimated. This is the number everyone skips and the one that decides the answer.</li>
<li><strong>Rework minutes</strong>, counted against the agent rather than against whoever fixed it.</li>
</ul>

<p>Then compare the total against your honest estimate of writing the same tickets yourself. Two patterns are worth watching for. First, the merge rate will look better than the time saving, because merges are visible and review time is not. Second, the abandoned tickets are usually the most informative: an agent that abandons three tickets in a fortnight has typically identified three places where your team had not actually decided what the product should do.</p>

<h2>A working policy</h2>

<ul>
<li>Give it well-specified, well-tested, locally-scoped tickets, and nothing else.</li>
<li>Add an explicit instruction to stop and ask when a specification is ambiguous — and treat needing that instruction as a signal the ticket is not ready.</li>
<li>Require existing test coverage around the area being changed, or write it first.</li>
<li>Review the diff, not the description. The description reflects intent; only the diff reflects behaviour.</li>
<li>Keep anything with an unmade product decision inside it out of the queue entirely.</li>
<li>Keep auth, billing and data deletion off the list regardless of how well specified the ticket looks.</li>
</ul>

<p>Used that way, a coding agent is a genuine help — roughly equivalent to a fast contractor with no context and no judgement, available at any hour and never bored. That is a real and useful thing to have on a team. It is also a considerably narrower thing than the demos are selling, and the gap between the two is where most disappointment with these tools comes from. Choosing which assistant to point at those tickets is a separate question — <a href="/articles/chatgpt-vs-claude-for-coding">we compared two of them here</a>.</p>`,
};
