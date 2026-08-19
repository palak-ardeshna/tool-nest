/**
 * Seed articles, part two.
 *
 * Split from seed-content.ts purely for file size. These cover the categories
 * the first batch left empty, so every section in the navigation lands on a
 * page with something to read.
 */
import type { SeedArticle } from "./seed-content";

export const moreArticles: SeedArticle[] = [
  {
    slug: "ai-video-tools-worth-the-subscription",
    title: "AI Video Tools Worth the Subscription (And Three That Are Not)",
    excerpt:
      "We ran the same three-minute edit through nine video tools. Most of the market is one feature repackaged; a few genuinely change what a small team can produce.",
    category: "ai-video",
    author: "daniel-reyes",
    tags: ["AI Video", "Reviews", "Software"],
    publishedAt: "2026-08-06",
    seoTitle: "AI Video Tools Worth Paying For in 2026",
    seoDescription:
      "Nine AI video tools tested on the same edit. What actually saves time, what is one feature with a subscription attached, and where the quality ceiling still is.",
    quickAnswer:
      "Three categories are worth paying for: transcript-based editing, automatic reframing with captions, and background/noise cleanup. Text-to-video generation is impressive in demos and still rarely usable in a real edit without heavy reshooting.",
    pros: [
      "Transcript-based editing genuinely halves rough-cut time",
      "Caption and reframe quality is now good enough to accept with a review",
      "Noise and background cleanup outperforms most manual attempts",
    ],
    cons: [
      "Text-to-video output is hard to direct and harder to revise",
      "Per-minute pricing punishes long-form work",
      "Exports frequently need a second pass in a real editor",
    ],
    alternatives: [
      { name: "DaVinci Resolve", note: "Free tier covers more than most people need, with no per-minute billing." },
      { name: "A transcription tool plus a normal editor", note: "Cheaper, and you keep control of the cut." },
    ],
    faqs: [
      {
        question: "Is text-to-video usable for real client work yet?",
        answer:
          "For abstract b-roll and background texture, yes. For anything where a specific thing has to happen on screen, not reliably — the cost of the twelfth attempt is what kills it.",
      },
      {
        question: "What is the single biggest time saver?",
        answer:
          "Editing from a transcript. Everything else on this list saves minutes; that one saves hours on long-form source material.",
      },
    ],
    content: `<p>The AI video category has a marketing problem: nine products describe themselves the same way, and three of them are the same underlying model with a different subscription page. We tested nine of them on one job — turning a 42-minute recorded interview into a three-minute cut with captions and a vertical version.</p>

<h2>The three things worth paying for</h2>

<h3>Transcript-based editing</h3>

<p>Deleting a sentence from a transcript and having the timeline follow is the single largest change to video editing in a decade for talking-head content. It is not AI in any interesting sense — it is good alignment — but it turns "scrub for the bit where they said the thing" into a find-and-delete.</p>

<p>On our 42-minute source, this took the rough cut from about 90 minutes of work to roughly 25.</p>

<h3>Reframe and captions</h3>

<p>Speaker-tracked cropping from landscape to vertical, plus generated captions, is now reliable enough that we accept it after one review pass. Two checks catch nearly everything: does the crop ever cut off the speaker's head, and are proper nouns spelled correctly.</p>

<h3>Audio cleanup</h3>

<p>Background noise removal and room-tone smoothing beat what most people achieve by hand, and it is the difference between a clip sounding amateur and sounding fine. This is the cheapest quality win available.</p>

<blockquote>
<p>If a tool does those three things well and costs less than an hour of your time per month, it has already paid for itself. Everything beyond that is where the marketing lives.</p>
</blockquote>

<h2>The three we would not renew</h2>

<table>
<thead>
<tr><th>Category</th><th>The pitch</th><th>What happened</th></tr>
</thead>
<tbody>
<tr><td>Text-to-video generation</td><td>Describe a scene, get footage</td><td>Great abstract b-roll; unusable when a specific action was required</td></tr>
<tr><td>Automatic highlight detection</td><td>Upload an hour, get ten clips</td><td>Found loud moments, not interesting ones</td></tr>
<tr><td>AI avatar presenters</td><td>A presenter without filming</td><td>Fine for internal training, wrong for anything with a byline</td></tr>
</tbody>
</table>

<p>The avatar one deserves a note. The output quality is genuinely better than a year ago. The problem is not technical. If your publication puts a synthetic presenter in front of an audience without saying so, you have spent trust you cannot easily earn back, and the saving was one afternoon of filming.</p>

<h2>Pricing is where this gets expensive</h2>

<p>Most of these tools bill per minute of processed video. That model is fine for short-form and brutal for anything long. Three hours of weekly podcast is 180 minutes of billing, every week, and the tiers are sized for people producing far less.</p>

<p>Check the overage rate before you commit, not the headline price. Two of the nine had overage rates high enough that a single busy month cost more than the annual plan.</p>

<h2>What we ended up with</h2>

<p>One transcript-based editor, one caption and reframe tool, and audio cleanup that came bundled with the editor. Total cost under thirty a month, and it removed the part of video work that we actively disliked. The generative tools are back on the shelf until directing them costs less than filming.</p>`,
  },

  {
    slug: "ai-voice-tools-tested",
    title: "AI Voice Tools in 2026: Transcription, Cloning and Dubbing, Tested",
    excerpt:
      "Transcription is solved. Cloning is convincing and legally fraught. Dubbing is somewhere in between. We tested all three on real material.",
    category: "ai-voice",
    author: "priya-raman",
    tags: ["AI Voice", "Reviews", "AI Tools"],
    publishedAt: "2026-07-21",
    seoTitle: "AI Voice Tools Tested: Transcription, Cloning and Dubbing",
    seoDescription:
      "Where AI voice tools are genuinely reliable in 2026, where they are not, and the consent and licensing questions worth settling before you use one.",
    quickAnswer:
      "Transcription is production-ready and cheap, including running locally. Voice cloning is convincing enough that consent and disclosure matter more than quality. Dubbing works well for informational content and poorly where delivery carries meaning.",
    pros: [
      "Open transcription models run locally, free and privately",
      "Cloning quality is no longer the limiting factor",
      "Dubbing opens up content that was previously single-language",
    ],
    cons: [
      "Speaker separation still fails on overlapping speech",
      "Cloned voices raise consent questions most teams have not answered",
      "Emotional delivery in dubbing flattens comedy and emphasis",
    ],
    faqs: [
      {
        question: "Do I need to disclose a synthetic voice?",
        answer:
          "Legally it depends on where you are. Editorially, yes. If a listener would feel misled on finding out, disclose it — that is the whole test, and it costs one sentence.",
      },
      {
        question: "Is local transcription good enough?",
        answer:
          "For clean single-speaker audio, it matches the paid services. Paid services pull ahead on messy multi-speaker recordings and on turnaround for very long files.",
      },
    ],
    content: `<p>Voice is three separate markets wearing one label. They are at completely different levels of maturity, and treating them as one category is how people end up disappointed.</p>

<h2>Transcription: solved, and cheaper than you think</h2>

<p>We ran six hours of material — interviews, a noisy conference talk, a two-person podcast — through open local models and three paid services.</p>

<p>On clean single-speaker audio, everything was within a percentage point of everything else. Word error rates were low enough that the editing time was spent on formatting, not correction.</p>

<p>Differences appeared exactly where you would expect:</p>

<ul>
<li><strong>Overlapping speech.</strong> Every tool degraded. The paid services degraded less.</li>
<li><strong>Proper nouns and jargon.</strong> All tools guessed. Tools that accept a custom vocabulary list guessed far better.</li>
<li><strong>Long files.</strong> Local processing on a laptop is slow enough that a two-hour file is a coffee break, not a wait.</li>
</ul>

<p>If your audio is clean and privacy matters, run it locally and pay nothing. If you process messy multi-speaker recordings weekly, the paid tier is worth it for the diarisation alone.</p>

<h2>Cloning: the quality question is over, the consent question is not</h2>

<p>Thirty seconds of clean audio now produces a clone that most listeners will not identify as synthetic in short passages. In longer passages the tells are still there — breath patterns that do not vary, an evenness that real speech does not have — but they are subtle.</p>

<blockquote>
<p>The interesting question stopped being "does it sound real" some time ago. It is now "who agreed to this, in writing, and for what uses".</p>
</blockquote>

<p>Before using a cloned voice for anything published, settle three things:</p>

<ol>
<li><strong>Consent, in writing, that names the uses.</strong> "You can use my voice" is not a scope.</li>
<li><strong>Expiry.</strong> A clone does not stop existing when someone leaves.</li>
<li><strong>Disclosure.</strong> Decide the rule once, in advance, rather than per-piece under deadline.</li>
</ol>

<p>Several tools now require a verification recording before cloning a voice. That is a genuine improvement and worth preferring, even though it takes an extra five minutes.</p>

<h2>Dubbing: good for information, poor for delivery</h2>

<p>We dubbed a ten-minute explainer into three languages and had native speakers review them.</p>

<table>
<thead>
<tr><th>Content type</th><th>Verdict</th></tr>
</thead>
<tbody>
<tr><td>Informational narration</td><td>Genuinely good — reviewers called it "fine, slightly flat"</td></tr>
<tr><td>Interview with two speakers</td><td>Usable, occasional speaker confusion</td></tr>
<tr><td>Anything with humour or emphasis</td><td>Reviewers described it as "the words without the joke"</td></tr>
</tbody>
</table>

<p>The failure is consistent: timing and emphasis are what make delivery work, and they are exactly what gets normalised away. For a tutorial, that does not matter. For anything where tone carries meaning, it does.</p>

<h2>Where we landed</h2>

<p>Local transcription for everything, a paid service for messy multi-speaker recordings, no cloning without written scoped consent, and dubbing only for straight informational content. That is a narrower use than the marketing suggests and considerably more use than the category had two years ago.</p>`,
  },

  {
    slug: "week-with-an-ai-coding-agent",
    title: "We Gave an AI Coding Agent a Real Backlog for a Week",
    excerpt:
      "Not a demo repository — an actual backlog with actual tickets. Here is what it merged, what it broke, and where a human had to step in.",
    category: "ai-coding",
    author: "priya-raman",
    tags: ["AI Coding", "Developer Tools", "AI Tools"],
    publishedAt: "2026-08-13",
    featured: true,
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
  },

  {
    slug: "ai-research-tools-and-your-sources",
    title: "AI Research Tools: What They Actually Do to Your Sources",
    excerpt:
      "Every research assistant promises to read the literature for you. We checked what happens to the citations — and how often the summary survives contact with the paper.",
    category: "ai-research",
    author: "maya-oduya",
    tags: ["AI Research", "AI Tools", "How-To"],
    publishedAt: "2026-06-30",
    seoTitle: "AI Research Tools: How Reliable Are the Citations?",
    seoDescription:
      "We checked AI research assistants against the papers they cited. Where summaries hold up, where they drift, and a workflow that keeps you honest.",
    quickAnswer:
      "Use them to find sources, never to represent them. In our checks, roughly one summary in six materially misstated the paper — usually by dropping a limitation the authors were explicit about. Every claim you publish needs to come from the source, not the summary.",
    pros: [
      "Genuinely good at surfacing papers keyword search misses",
      "Fast at mapping an unfamiliar field's main positions",
      "Linked citations make verification quick when they are real",
    ],
    cons: [
      "Limitations and caveats are the first thing summaries drop",
      "Confidence in the summary does not track accuracy",
      "Some tools still surface citations that do not support the claim",
    ],
    faqs: [
      {
        question: "Do these tools still invent citations?",
        answer:
          "Outright fabricated references are much rarer than in 2023. The current failure is subtler and harder to catch: a real paper cited for a claim it does not actually make.",
      },
      {
        question: "What is a reasonable workflow?",
        answer:
          "Use the tool to build a reading list and a rough map of the field. Then read the sources you intend to cite. The tool replaces searching, not reading.",
      },
    ],
    content: `<p>We took twelve summaries produced by three research assistants and did the boring thing: read the papers they were summarising.</p>

<h2>What we checked</h2>

<p>For each summary, three questions:</p>

<ol>
<li>Does the cited paper exist and say something on this topic?</li>
<li>Does it support the specific claim attributed to it?</li>
<li>Does the summary preserve the limitations the authors stated?</li>
</ol>

<h2>What we found</h2>

<p>Question one is essentially solved. Every citation pointed at a real paper on a relevant topic. That is a real improvement.</p>

<p>Question two failed twice in twelve. In both cases the paper was about the right subject and reported something adjacent to, but not the same as, the claim attributed to it. Both would have survived a casual check — the abstract looked supportive.</p>

<p>Question three is where it gets uncomfortable. Six of twelve summaries dropped a limitation the authors had stated prominently. Small sample. Single population. Effect only present in one condition. The summaries were not wrong so much as confident about something the authors were careful not to be confident about.</p>

<blockquote>
<p>Summarisation is compression, and caveats are the most compressible part of a paper. They are also the part that determines whether a finding means what you think it means.</p>
</blockquote>

<h2>Where these tools genuinely help</h2>

<p>Discovery. Asked to find work on a topic phrased conceptually rather than by keyword, they consistently surfaced papers that keyword search did not. For entering an unfamiliar field, that is worth a lot — you get a map, a sense of the main positions, and a reading list in twenty minutes instead of a day.</p>

<p>They are also good at "what are the counter-arguments to this", which is a question keyword search is structurally bad at.</p>

<h2>A workflow that holds up</h2>

<ol>
<li><strong>Ask broadly.</strong> Use the tool to build a reading list and a rough map.</li>
<li><strong>Read what you intend to cite.</strong> Not the abstract — the methods and the limitations section.</li>
<li><strong>Write the claim from the paper.</strong> Never paste a summary sentence into your own work.</li>
<li><strong>Record what you checked.</strong> A one-line note per source about what it actually supports saves an hour when someone questions it later.</li>
</ol>

<h2>The honest framing</h2>

<p>These tools are a very good search engine with a summarising layer on top. The search part is a genuine advance. The summarising part is a convenience that must never become the basis of anything you publish, because it is confidently lossy in exactly the direction that makes findings sound stronger than they are.</p>`,
  },

  {
    slug: "software-we-pay-for-and-what-we-cancelled",
    title: "The Software We Pay For in 2026 — and What We Cancelled",
    excerpt:
      "An honest audit of a small team's software spend: what survived a year, what quietly became shelfware, and the questions that predicted which was which.",
    category: "software",
    author: "daniel-reyes",
    tags: ["Software", "Productivity", "Business Tools"],
    publishedAt: "2026-08-01",
    featured: true,
    seoTitle: "The Software We Pay For in 2026 (And What We Cancelled)",
    seoDescription:
      "A real audit of a small team's subscription spend — what earned its renewal, what became shelfware, and how to tell the difference before you commit.",
    quickAnswer:
      "We cancelled 40% of our subscriptions and noticed the absence of two. The tools that survived shared one property: someone opened them without being reminded to. Everything that needed a process to keep it alive was already dead.",
    pros: [
      "An annual audit reliably finds spend nobody defends",
      "Consolidating on fewer tools reduced context switching more than any single tool helped",
      "Most categories have a good enough free tier at small-team scale",
    ],
    cons: [
      "Migration costs are real and usually underestimated",
      "Annual plans hide the moment a tool stopped being used",
      "Cancelling a tool one person loves is a people problem, not a spreadsheet problem",
    ],
    faqs: [
      {
        question: "How often should a team audit its software spend?",
        answer:
          "Once a year is enough. More often and you spend more time auditing than the savings are worth; less often and you accumulate a year of subscriptions nobody remembers approving.",
      },
      {
        question: "What is the most common wasted subscription?",
        answer:
          "The second tool in a category you already have a tool for, bought during a busy month because the first one was slightly annoying that week.",
      },
    ],
    content: `<p>We went through a year of invoices line by line. Thirty-one paid tools. Here is what happened.</p>

<h2>The test that predicted everything</h2>

<p>One question sorted the list almost perfectly: <strong>does anyone open this without being reminded to?</strong></p>

<p>Every tool that survived the audit was opened voluntarily, often daily. Every tool we cancelled required a ritual to stay alive — a weekly reminder, a manager asking whether people had updated it, a process document explaining when to use it.</p>

<blockquote>
<p>A tool that needs a process to keep it in use is not a tool. It is a process, with a subscription attached.</p>
</blockquote>

<h2>What we kept</h2>

<ul>
<li><strong>The editor and the terminal.</strong> Obvious, but worth saying: the tools people spend hours in daily deserve the most money and the least deliberation.</li>
<li><strong>One document tool.</strong> Not two. The second one was where documents went to be lost.</li>
<li><strong>One task tracker.</strong> Same reasoning.</li>
<li><strong>Design software.</strong> Expensive, used constantly, no realistic substitute for the way we work.</li>
<li><strong>Transcription.</strong> Small cost, weekly use, removes a job nobody wanted.</li>
<li><strong>Password management and backup.</strong> Never audit these on cost. They are insurance.</li>
</ul>

<h2>What we cancelled</h2>

<table>
<thead>
<tr><th>Category</th><th>Why it went</th><th>Missed it?</th></tr>
</thead>
<tbody>
<tr><td>Second document tool</td><td>Duplicated the first, split our knowledge in half</td><td>No</td></tr>
<tr><td>Analytics add-on</td><td>Produced dashboards nobody opened</td><td>No</td></tr>
<tr><td>Team wiki</td><td>Last meaningful edit was eight months earlier</td><td>No</td></tr>
<tr><td>Design handoff tool</td><td>The design tool absorbed the feature</td><td>No</td></tr>
<tr><td>Scheduling tool</td><td>Calendar did it adequately</td><td>Slightly</td></tr>
<tr><td>Feedback widget</td><td>Volume never justified the tier</td><td>Yes — we brought it back</td></tr>
</tbody>
</table>

<p>Twelve cancellations, two regrets, one reversal. That ratio is worth internalising: most software you stop paying for, you do not notice.</p>

<h2>The traps</h2>

<h3>Annual plans hide death</h3>

<p>A monthly subscription that stops being used generates twelve reminders that you are paying for it. An annual one generates one, eleven months after the tool went cold.</p>

<h3>Migration cost is always higher than the estimate</h3>

<p>We moved documentation between tools and it took three times the estimate — not because the export failed, but because half the content turned out to be worth rewriting, and the other half turned out to be worth deleting. That is a good outcome; it just is not a two-hour job.</p>

<h3>Someone loves the tool you are cancelling</h3>

<p>This is the genuinely hard one, and it is not a spreadsheet problem. Our rule: the person who wants to keep it explains what they would do instead. If the answer is concrete and worse, keep the tool. If the answer is a shrug, the subscription was habit.</p>

<h2>What we would do differently</h2>

<p>Set a review date at purchase. Not a reminder to cancel — a date to ask "is anyone opening this without being told to". Ninety days is enough to know. It would have caught four of our twelve within the trial window.</p>`,
  },

  {
    slug: "task-managers-compared",
    title: "Task Managers Compared: What Survives a Busy Month",
    excerpt:
      "Every task manager works in a calm week. We used four of them through a genuinely bad month and watched which systems held and which quietly got abandoned.",
    category: "productivity-apps",
    author: "daniel-reyes",
    tags: ["Productivity Apps", "Productivity", "Comparisons"],
    publishedAt: "2026-07-08",
    seoTitle: "Task Managers Compared: What Survives a Busy Month",
    seoDescription:
      "Four task managers used through a genuinely busy month. Which held up, which got abandoned, and the two features that actually predicted survival.",
    quickAnswer:
      "Capture speed and a forgiving overdue view decided it. Tools that made adding a task take more than three seconds got bypassed under pressure, and tools that showed forty red overdue items on a bad Monday got closed and not reopened.",
    pros: [
      "All four handle the basic mechanics competently",
      "Natural-language date entry is now standard and genuinely useful",
      "Free tiers cover individual use in every case",
    ],
    cons: [
      "Feature depth actively hurts under pressure",
      "Cross-platform sync quality still varies more than it should",
      "Collaboration features push you toward paid tiers quickly",
    ],
    alternatives: [
      { name: "A plain text file", note: "Genuinely competitive for individual use, and it will never be discontinued." },
      { name: "Your calendar", note: "If a task needs a time, it is an appointment, not a task." },
    ],
    faqs: [
      {
        question: "Does the specific app matter much?",
        answer:
          "Less than the habit does. But capture speed genuinely matters, because a system you bypass when busy is a system that is wrong exactly when you need it.",
      },
      {
        question: "Is a paid tier worth it for one person?",
        answer:
          "Usually not. The paid features are mostly collaboration and reporting. Alone, the free tiers of all four covered everything we did.",
      },
    ],
    content: `<p>Task manager comparisons are usually written during a calm week by someone enjoying setting up a system. That is the least informative possible moment to evaluate one.</p>

<p>We ran four of them through a month with two overlapping deadlines and a week of travel — the conditions under which productivity systems actually get abandoned.</p>

<h2>What decided it</h2>

<h3>1. Capture speed</h3>

<p>Time from "I have a thought" to "it is recorded and I am back to what I was doing". Under three seconds, the system survives. Over five, you start holding things in your head instead, and the system silently stops reflecting reality.</p>

<p>Two of the four failed this on mobile specifically — a cold app launch plus a project picker plus a date picker is well past five seconds.</p>

<h3>2. What a bad Monday looks like</h3>

<p>Open your task manager after a week where things slipped. One tool showed forty overdue items in red. Another showed today's three things, with the rest quietly rolled forward.</p>

<blockquote>
<p>A tool that punishes you for a hard week is a tool you will avoid during the next one. That is not a preference; it is the single most reliable predictor of abandonment we saw.</p>
</blockquote>

<h3>3. Whether it survived being ignored for four days</h3>

<p>Travel week meant nobody touched anything. The tools that recovered gracefully were the ones without elaborate structure to re-establish — no dependencies to re-sequence, no sprint to close. The most sophisticated of the four took forty minutes to become trustworthy again, which is forty minutes nobody has on the Monday after travel.</p>

<h2>The comparison</h2>

<table>
<thead>
<tr><th></th><th>Capture</th><th>Overdue handling</th><th>Recovery after neglect</th><th>Free tier</th></tr>
</thead>
<tbody>
<tr><td>Tool A</td><td>Fast</td><td>Forgiving</td><td>Immediate</td><td>Generous</td></tr>
<tr><td>Tool B</td><td>Fast</td><td>Aggressive</td><td>Good</td><td>Generous</td></tr>
<tr><td>Tool C</td><td>Slow on mobile</td><td>Forgiving</td><td>Good</td><td>Limited</td></tr>
<tr><td>Tool D</td><td>Slow</td><td>Aggressive</td><td>Poor</td><td>Limited</td></tr>
</tbody>
</table>

<p>Tool D is the most capable product of the four by any feature comparison. It was the first one abandoned. That is the whole finding.</p>

<h2>What we would tell someone choosing</h2>

<ol>
<li>Install two. Use each for a fortnight, including at least one bad week.</li>
<li>Time your own capture, on your phone, from a locked screen.</li>
<li>Deliberately ignore it for three days, then open it. How you feel in that moment is the answer.</li>
<li>Ignore every feature you would have to remember to use.</li>
</ol>

<p>And the unglamorous truth: for one person, a plain text file with a date at the top competes with all of them. It has perfect capture speed, no overdue view to feel bad about, zero recovery cost, and it will still open in twenty years.</p>`,
  },

  {
    slug: "figma-alternatives-worth-considering",
    title: "Figma Alternatives Worth Considering in 2026",
    excerpt:
      "Not because Figma is bad — it is not — but because pricing, offline work and file ownership are real constraints, and three alternatives now clear the bar.",
    category: "design-software",
    author: "maya-oduya",
    tags: ["Design Software", "Software", "Comparisons"],
    publishedAt: "2026-07-11",
    seoTitle: "Figma Alternatives Worth Considering in 2026",
    seoDescription:
      "Three credible Figma alternatives compared on the things that actually push teams to switch: price at scale, offline work, file ownership and handoff.",
    quickAnswer:
      "Switch for a specific constraint, not for features. If per-seat pricing at scale, offline work, or owning your files locally is the problem, there are now good answers. If none of those apply, the migration cost is not worth it.",
    pros: [
      "Alternatives have closed most of the everyday feature gap",
      "Local-file tools remove the outage and lock-in question entirely",
      "Several offer one-time pricing instead of per-seat subscriptions",
    ],
    cons: [
      "Real-time multiplayer editing is still where Figma leads",
      "Plugin ecosystems are far smaller",
      "Handoff to developers is less polished nearly everywhere else",
    ],
    alternatives: [
      { name: "Penpot", url: "https://penpot.app", note: "Open source, self-hostable, standards-based file format." },
      { name: "Sketch", url: "https://sketch.com", note: "Local files, mature, macOS only." },
      { name: "Affinity Designer", url: "https://affinity.serif.com", note: "One-time purchase, stronger on illustration than on UI systems." },
    ],
    faqs: [
      {
        question: "Is it realistic to migrate an existing design system?",
        answer:
          "Budget weeks, not days, and expect components to need rebuilding rather than importing. The honest question is whether the constraint you are solving is worth that.",
      },
      {
        question: "What is still clearly better in Figma?",
        answer:
          "Live multiplayer editing, the plugin ecosystem, and developer handoff. Those three are the reason most teams that evaluate alternatives stay.",
      },
    ],
    content: `<p>Nobody switches design tools because of a feature comparison. They switch because something specific broke: the bill at forty seats, a week of offline work, or a policy that files cannot live somewhere else.</p>

<p>So this is organised by constraint, not by feature.</p>

<h2>"The per-seat bill has become absurd"</h2>

<p>This is the most common trigger, and it usually arrives when occasional viewers and stakeholders start needing seats.</p>

<p>Two directions worth considering. Open source and self-hosted removes per-seat cost entirely, at the price of running the thing — realistic if you already run infrastructure, a distraction if you do not. One-time-purchase desktop software eliminates the recurring cost but also the browser-based review flow that made stakeholders self-serve in the first place.</p>

<blockquote>
<p>Before switching, price the alternative including the hours someone spends administering it. That comparison is much closer than the sticker prices suggest.</p>
</blockquote>

<h2>"We need to work offline"</h2>

<p>Field work, secure environments, bad connectivity, long flights. Browser-first tools have improved here but still assume connectivity for anything collaborative.</p>

<p>Local-file desktop tools are unambiguously better for this and always will be. The trade you make is real-time collaboration: you go back to file handoff, branches and merge conflicts as a social process rather than a technical one.</p>

<h2>"We need to own the files"</h2>

<p>Client contracts, regulated industries, or a simple unwillingness to have five years of work inside one vendor.</p>

<p>Look for two properties: files on your own disk, and a documented, readable file format. The second matters more than people expect — a proprietary local file is only marginally more portable than a hosted one.</p>

<h2>What you will actually miss</h2>

<ul>
<li><strong>Multiplayer editing.</strong> Two people in the same file, live, is genuinely better elsewhere and it is not close.</li>
<li><strong>Plugins.</strong> The long tail of small plugins that fix your specific annoyance is a real advantage of the biggest ecosystem.</li>
<li><strong>Handoff.</strong> Developers opening a link and reading specs without an account is a workflow you will have to reconstruct.</li>
</ul>

<h2>An honest recommendation</h2>

<p>If none of the three constraints above apply to you, do not switch. The everyday drawing experience is close enough across all of these that the migration cost dominates the decision.</p>

<p>If one of them applies sharply, the alternatives are now good enough that the answer has changed since the last time you looked — which was probably long enough ago that it is worth an afternoon of re-checking.</p>`,
  },

  {
    slug: "terminal-setups-that-are-actually-faster",
    title: "Terminal Setups That Are Actually Faster",
    excerpt:
      "Most terminal customisation makes your prompt prettier and your shell slower. These are the changes that measurably saved time over three months.",
    category: "developer-software",
    author: "priya-raman",
    tags: ["Developer Software", "Developer Tools", "Productivity"],
    publishedAt: "2026-06-16",
    seoTitle: "Terminal Setups That Are Actually Faster",
    seoDescription:
      "Which terminal and shell changes measurably save time, which just add startup latency, and how to tell the difference on your own machine.",
    quickAnswer:
      "Four changes account for nearly all the benefit: fuzzy history search, directory jumping, a fast file finder, and a prompt that costs nothing. Everything else is aesthetics — enjoyable, but do not confuse it with speed.",
    pros: [
      "Fuzzy history search pays for itself within a day",
      "Directory jumping removes a constant small friction",
      "All of these work in any shell",
    ],
    cons: [
      "Plugin frameworks routinely add hundreds of milliseconds to startup",
      "Git-aware prompts are slow in large repositories",
      "A heavily customised shell is painful on someone else's machine",
    ],
    faqs: [
      {
        question: "Does shell startup time really matter?",
        answer:
          "If you open a shell fifty times a day, 400ms is twenty seconds daily and a perceptible lag every single time. It is not about the total; it is that the delay lands exactly when you are trying to start something.",
      },
      {
        question: "Which shell should I use?",
        answer:
          "The one you already use. Every improvement here works in bash, zsh and fish. Switching shells is a much larger change than any of these and buys much less.",
      },
    ],
    content: `<p>Terminal customisation has a measurement problem: it feels productive, so nobody checks whether it is. We timed ours.</p>

<h2>Measure first</h2>

<p>Before changing anything, find out what your shell currently costs:</p>

<pre><code>for i in $(seq 1 10); do
  /usr/bin/time -f "%e" $SHELL -i -c exit
done 2&gt;&amp;1 | sort -n | tail -1</code></pre>

<p>Under 100ms is fine. Over 300ms is a lag you can feel. Ours was 780ms, almost entirely one plugin framework and a git-aware prompt.</p>

<h2>The four that earned their place</h2>

<h3>1. Fuzzy history search</h3>

<p>Binding reverse history search to a fuzzy finder is the single highest-value change available. Most commands you run, you have run before — usually with a slight variation. Typing three characters from the middle of a command you ran last Tuesday and getting it back is transformative, and it takes one line of configuration.</p>

<h3>2. Directory jumping</h3>

<p>A tool that learns your frequent directories and lets you jump by fragment removes dozens of small navigations a day. <code>cd</code> with a full path is a thing you should almost never type again.</p>

<h3>3. A fast file finder</h3>

<p>A modern recursive finder that respects <code>.gitignore</code> is both faster than <code>find</code> and, more importantly, returns results you actually want. The default of "everything, including node_modules" is what makes <code>find</code> feel slow.</p>

<h3>4. A prompt that costs nothing</h3>

<p>Here is the trap. A git-aware prompt runs git commands on every single prompt render. In a small repository that is a few milliseconds. In a large one with a cold cache it can be hundreds — every time you press enter.</p>

<blockquote>
<p>If your prompt shows git status, measure it inside your largest repository, not your dotfiles repository. That is where you will actually feel it.</p>
</blockquote>

<p>Either use a prompt that computes git state asynchronously, or show less. We show branch name only, and stopped noticing the difference within a week.</p>

<h2>What we removed</h2>

<table>
<thead>
<tr><th>Removed</th><th>Startup saved</th><th>Missed?</th></tr>
</thead>
<tbody>
<tr><td>Plugin framework</td><td>~410ms</td><td>No — kept four plugins directly</td></tr>
<tr><td>Synchronous git prompt</td><td>~180ms</td><td>No</td></tr>
<tr><td>Version-manager auto-init</td><td>~150ms</td><td>Slightly — now lazy-loaded</td></tr>
<tr><td>Aliases nobody used</td><td>0ms</td><td>No — but the config got readable</td></tr>
</tbody>
</table>

<p>Final startup: 94ms, from 780ms. The subjective difference is larger than the number suggests, because the lag used to land at the exact moment of starting work.</p>

<h2>The portability rule</h2>

<p>One habit worth keeping: everything above should be a convenience, never a requirement. If your muscle memory only works on your own machine, every server you SSH into becomes slower than it was before you started customising. Keep the aliases; do not build a workflow that cannot survive a plain shell.</p>`,
  },

  {
    slug: "invoicing-and-bookkeeping-for-small-teams",
    title: "Invoicing and Bookkeeping Tools for Small Teams",
    excerpt:
      "The category nobody enjoys evaluating. Here is what actually matters when you are three people, and what only matters when you are thirty.",
    category: "business-tools",
    author: "maya-oduya",
    tags: ["Business Tools", "Software", "Remote Work"],
    publishedAt: "2026-06-04",
    seoTitle: "Invoicing and Bookkeeping Tools for Small Teams",
    seoDescription:
      "What actually matters when choosing invoicing and bookkeeping software at small scale — and which heavily marketed features you can safely ignore.",
    quickAnswer:
      "Pick on three things: does it produce invoices your clients' finance teams accept without questions, does it export cleanly for your accountant, and can you leave. Everything else — dashboards, forecasting, automation — is worth nothing at three people.",
    pros: [
      "Small-team tiers are genuinely inexpensive across the category",
      "Bank feeds have become reliable enough to trust",
      "Most tools export to formats accountants accept",
    ],
    cons: [
      "Multi-currency handling varies wildly in quality",
      "Some tools make historical data hard to extract",
      "Tax features are jurisdiction-specific and age badly",
    ],
    faqs: [
      {
        question: "Do I need bookkeeping software at all as a freelancer?",
        answer:
          "If you invoice a handful of clients in one currency, a spreadsheet and a good invoice template genuinely work. The tools start earning their cost around the point where you have expenses to categorise or more than one currency.",
      },
      {
        question: "What should I ask my accountant before choosing?",
        answer:
          "Which tools they already work in. The efficiency gain of matching them is worth more than any feature difference, because it removes a translation step from every conversation.",
      },
    ],
    content: `<p>This is the least enjoyable software category to evaluate and one of the more expensive ones to get wrong, because switching means moving years of financial records.</p>

<p>At small scale, three things decide it. Everything else is noise.</p>

<h2>1. Will your clients' finance teams accept the invoice?</h2>

<p>An invoice that gets queried costs you two weeks of payment delay and an email thread. What causes queries is boring and specific:</p>

<ul>
<li>A visible, sequential invoice number</li>
<li>Your registered business details and tax identifiers in the expected places</li>
<li>Clear payment terms and a due date, not just an issue date</li>
<li>A purchase order field, if your clients use them — many enterprise finance teams will not process an invoice without one</li>
</ul>

<p>Test this before committing: send a real invoice to your largest client and see whether it goes through untouched.</p>

<h2>2. Can your accountant work with it?</h2>

<p>Ask them first. This is the single highest-leverage question in the whole decision, and most people ask it last.</p>

<blockquote>
<p>An accountant working in a tool they know saves hours every quarter. Whatever feature difference you found is not worth more than that.</p>
</blockquote>

<p>If they have no preference, then the requirement is a clean export — a full transaction history in a standard format, not a PDF report.</p>

<h2>3. Can you leave?</h2>

<p>Financial records need to outlive your software. Before you put a year of data into anything, do the export. Not read about it — do it, on the trial, and open the file.</p>

<p>What you want back is every transaction, with dates, categories, attachments and references intact. What you often get is a summary report that would be useless in an audit.</p>

<h2>What genuinely does not matter yet</h2>

<table>
<thead>
<tr><th>Feature</th><th>Matters at</th></tr>
</thead>
<tbody>
<tr><td>Cash-flow forecasting</td><td>When you have enough history to forecast from</td></tr>
<tr><td>Approval workflows</td><td>When more than one person spends money</td></tr>
<tr><td>Inventory</td><td>When you hold stock</td></tr>
<tr><td>Payroll integration</td><td>When you have employees rather than contractors</td></tr>
<tr><td>Custom dashboards</td><td>Genuinely never, at three people</td></tr>
</tbody>
</table>

<h2>The multi-currency warning</h2>

<p>If you invoice in more than one currency, test this specifically and early. Quality varies more here than anywhere else in the category — some tools handle exchange-rate gains and losses correctly and automatically, others produce numbers your accountant will have to unpick by hand every quarter.</p>

<p>The test: issue an invoice in a foreign currency, receive payment at a different rate, and see whether the difference is recorded correctly without you telling it what to do.</p>

<h2>A reasonable default</h2>

<p>For a small team: whatever your accountant uses, on the cheapest tier that supports your currencies, with a verified export. That is an unglamorous answer, and it is right far more often than the comparison tables suggest.</p>`,
  },

  {
    slug: "time-blocking-after-six-months",
    title: "Time Blocking: What Actually Worked After Six Months",
    excerpt:
      "We tried the version from the productivity books, failed, and ended up with something much looser that survived. Here is the honest account.",
    category: "time-management",
    author: "daniel-reyes",
    tags: ["Time Management", "Productivity", "Workflows"],
    publishedAt: "2026-05-19",
    seoTitle: "Time Blocking: What Actually Worked After Six Months",
    seoDescription:
      "A six-month account of time blocking — what failed immediately, what survived, and the three rules that made the difference.",
    quickAnswer:
      "Blocking every hour failed within a fortnight. What survived was blocking two or three things a day, leaving the rest open, and treating a missed block as information rather than failure. The looser version is the one that lasted.",
    pros: [
      "Protects focused work from being nibbled away by meetings",
      "Makes over-commitment visible before it becomes a problem",
      "Reduces the daily decision cost of what to do next",
    ],
    cons: [
      "Rigid schedules break on the first unexpected thing",
      "Estimating how long work takes stays hard indefinitely",
      "Easy to turn into a second job of maintaining the schedule",
    ],
    faqs: [
      {
        question: "How long should a block be?",
        answer:
          "Long enough to finish something. For us, 90 minutes was the floor — shorter blocks turned into setup time plus interruption, with little work in between.",
      },
      {
        question: "What do you do when a block gets missed?",
        answer:
          "Nothing. Do not reschedule it into an already-full day. If a block gets missed three times, that is not a scheduling problem — it is the task telling you it is not actually a priority.",
      },
    ],
    content: `<p>The version of time blocking in most productivity books — every hour of the day assigned, reviewed nightly, adjusted continuously — lasted nine working days here before quietly collapsing.</p>

<p>What replaced it has now survived six months. It is much less impressive and considerably more useful.</p>

<h2>Why the strict version failed</h2>

<p>Three reasons, in order of how quickly they showed up:</p>

<ol>
<li><strong>One unexpected thing invalidates the whole day.</strong> A 40-minute problem at 10am does not cost 40 minutes; it costs every block after it, and rebuilding the day costs another fifteen.</li>
<li><strong>Estimates were wrong, consistently and in one direction.</strong> Everything took longer. Six months later they are still wrong, just less so.</li>
<li><strong>Maintaining the schedule became work.</strong> Twenty minutes a day of rescheduling is not a productivity system, it is a hobby.</li>
</ol>

<h2>What survived</h2>

<h3>Rule 1: block two or three things, not the whole day</h3>

<p>Pick the two or three things that would make the day worthwhile and give each a real block. Leave everything else unstructured. The unstructured time absorbs the unexpected, which is what the strict version had nowhere to put.</p>

<blockquote>
<p>A schedule with slack in it survives contact with reality. A schedule without slack fails the first time anything happens.</p>
</blockquote>

<h3>Rule 2: block by finishing, not by duration</h3>

<p>"Write the comparison section" beats "90 minutes on the article". A block with a finish line ends with something done. A block with only a duration ends when the timer does, often mid-thought.</p>

<p>Ninety minutes turned out to be our floor. Below that, setup and re-orientation ate most of it.</p>

<h3>Rule 3: a missed block is information</h3>

<p>The strict version treats a missed block as failure to be corrected by rescheduling. That is how days become impossible.</p>

<p>Instead: if a block gets missed once, it was a busy day. Three times, and the task is not actually a priority — you have simply not admitted it yet. Delete it. This has been the most useful rule of the three, and the least comfortable.</p>

<h2>What it looks like now</h2>

<table>
<thead>
<tr><th>Time</th><th>What is there</th></tr>
</thead>
<tbody>
<tr><td>09:00–10:30</td><td>One blocked deep-work item, with a finish line</td></tr>
<tr><td>10:30–13:00</td><td>Open — meetings, review, whatever arrived</td></tr>
<tr><td>13:00–14:30</td><td>Second blocked item</td></tr>
<tr><td>14:30–17:00</td><td>Open</td></tr>
</tbody>
</table>

<p>Two blocks, three and a half hours protected, the rest of the day free to be a day. On a good week that is fifteen hours of focused work, which is considerably more than we were getting before and considerably less than the books promise.</p>

<h2>The measurable difference</h2>

<p>The clearest change was not output. It was that over-commitment became visible. When someone asks for something and the two blocks are already spoken for, the answer is obvious and does not require a negotiation with yourself at 11pm. That alone has been worth the practice.</p>`,
  },

  {
    slug: "weekly-publishing-workflow",
    title: "How We Run a Weekly Publishing Workflow",
    excerpt:
      "The unglamorous machinery behind shipping an article a week: how work moves from idea to published, and the two checkpoints that catch nearly everything.",
    category: "workflows",
    author: "maya-oduya",
    tags: ["Workflows", "Productivity", "Remote Work"],
    publishedAt: "2026-05-12",
    seoTitle: "How We Run a Weekly Publishing Workflow",
    seoDescription:
      "The complete workflow behind publishing weekly — stages, checkpoints, and the two reviews that catch most problems before anything goes live.",
    quickAnswer:
      "Five stages, two mandatory checkpoints, and a rule that nothing moves forward on the same day it moves in. The checkpoints — a structure review before drafting and a claims review before publishing — catch nearly every problem we used to find after publication.",
    pros: [
      "Predictable cadence removes weekly negotiation about what ships",
      "Two checkpoints catch most issues cheaply, before the expensive work",
      "Everyone can see what stage everything is at",
    ],
    cons: [
      "Adds latency — an idea takes about three weeks to reach publication",
      "Needs someone to own the checkpoints or they get skipped",
      "Rigid cadence can be the wrong shape for breaking news",
    ],
    faqs: [
      {
        question: "Does this work for one person?",
        answer:
          "Yes, with one change: the checkpoints become a day of distance instead of a second person. Reading your own structure the next morning catches a surprising amount.",
      },
      {
        question: "What happens when something is not ready?",
        answer:
          "It does not ship, and the buffer covers the slot. The buffer existing is what makes it possible to say no — without one, every deadline becomes a reason to publish something thin.",
      },
    ],
    content: `<p>Publishing weekly is not a writing problem. It is a queueing problem. Here is the machinery.</p>

<h2>The five stages</h2>

<ol>
<li><strong>Idea.</strong> A one-line claim and who it is for. Nothing else.</li>
<li><strong>Research and testing.</strong> Actually using the tools, recording what happened.</li>
<li><strong>Structure.</strong> Headings and the claim under each one. No prose yet.</li>
<li><strong>Draft.</strong> The writing.</li>
<li><strong>Edit and publish.</strong> Claims check, links, metadata, images.</li>
</ol>

<p>One rule governs the whole thing: <strong>nothing moves to the next stage on the day it arrived in the current one.</strong> A day of distance is the cheapest quality control available.</p>

<h2>Checkpoint one: structure review</h2>

<p>Before anyone writes a sentence of prose, someone else reads the heading structure and the claim under each heading.</p>

<p>This catches, in order of frequency:</p>

<ul>
<li>An article with no actual claim — a topic pretending to be an argument</li>
<li>Sections in an order that requires the reader to hold something in mind for three headings</li>
<li>A claim nobody actually tested, which nobody notices once it is wrapped in fluent prose</li>
</ul>

<blockquote>
<p>Fixing structure costs twenty minutes before drafting and half a day after. This checkpoint pays for the whole process on its own.</p>
</blockquote>

<h2>Checkpoint two: claims review</h2>

<p>Before publishing, someone goes through the draft and marks every factual claim. For each one: where did this come from?</p>

<p>Three outcomes:</p>

<ol>
<li><strong>We tested it.</strong> Fine — and note when, because software changes.</li>
<li><strong>A source says it.</strong> Fine, if the source is linked and actually says it.</li>
<li><strong>It sounds right.</strong> Cut it or test it. This is where nearly everything that would have needed a correction gets caught.</li>
</ol>

<h2>The buffer</h2>

<p>We keep two finished articles in reserve at all times. This is the difference between a weekly cadence and a weekly panic.</p>

<p>Without a buffer, every deadline creates pressure to publish whatever is closest to done. With one, "this is not ready" costs nothing, which means it actually gets said.</p>

<h2>What the week looks like</h2>

<table>
<thead>
<tr><th>Day</th><th>What happens</th></tr>
</thead>
<tbody>
<tr><td>Monday</td><td>Publish. Structure review for next week's piece.</td></tr>
<tr><td>Tuesday–Wednesday</td><td>Drafting. Testing for the piece after.</td></tr>
<tr><td>Thursday</td><td>Claims review on the draft.</td></tr>
<tr><td>Friday</td><td>Edit, images, metadata. Into the buffer.</td></tr>
</tbody>
</table>

<p>Note that the piece being published on Monday was finished the previous Friday, and the piece being drafted this week publishes the week after. The pipeline is roughly three weeks deep from idea to publication — that latency is the cost of the cadence, and it is worth it.</p>

<h2>Where it does not work</h2>

<p>Anything time-sensitive. A three-week pipeline cannot respond to something that happened yesterday. We handle that by not competing on it: if a piece only matters this week, it is probably not the kind of thing we publish anyway.</p>`,
  },

  {
    slug: "async-by-default-what-changes",
    title: "Async by Default: What Actually Changes",
    excerpt:
      "Going async is usually described as fewer meetings. In practice it is a writing problem, a decision-making problem, and only incidentally a calendar problem.",
    category: "remote-work",
    author: "priya-raman",
    tags: ["Remote Work", "Workflows", "Productivity"],
    publishedAt: "2026-05-05",
    seoTitle: "Async by Default: What Actually Changes",
    seoDescription:
      "What working asynchronously really requires — written decisions, explicit deadlines and a much higher standard of writing — and what it costs.",
    quickAnswer:
      "Async work is not fewer meetings; it is the same decisions made in writing. That trade is worth it when your team spans time zones and actively harmful when it does not, because writing a decision costs more than saying it out loud.",
    pros: [
      "Decisions become searchable, which compounds over years",
      "People in unfavourable time zones stop being second-class participants",
      "Reduces the tax of context switching for focused work",
    ],
    cons: [
      "Ambiguous questions take days instead of minutes",
      "Requires a genuinely higher standard of writing from everyone",
      "Disagreement is much harder to resolve in a thread",
    ],
    faqs: [
      {
        question: "When is a meeting still the right call?",
        answer:
          "Disagreement, ambiguity, and anything emotionally loaded. A thread makes disagreement worse — people restate positions rather than converge. Twenty minutes on a call ends it.",
      },
      {
        question: "What is the first thing to change?",
        answer:
          "Write decisions down, with the reasoning. Not minutes — the decision, who made it, and why. Everything else in async work depends on that existing.",
      },
    ],
    content: `<p>"Async by default" gets sold as a calendar reform. It is not. The meetings were where decisions happened; removing them without replacing that function just moves the confusion somewhere less visible.</p>

<h2>What actually has to change</h2>

<h3>Decisions get written down, with reasoning</h3>

<p>Not meeting minutes. A short record: what was decided, by whom, and why — including what was considered and rejected.</p>

<p>The reasoning is the part people skip and the part that matters. Six months later, "we chose X" invites someone to re-open it. "We chose X because Y, and rejected Z because W" either settles it or gives the person a specific thing to argue with.</p>

<blockquote>
<p>A decision log is the single artefact that makes async work possible. Everything else is logistics.</p>
</blockquote>

<h3>Questions get a deadline</h3>

<p>Synchronously, a question gets an answer in the meeting. Asynchronously, a question with no deadline can sit for four days while everyone assumes someone else is handling it.</p>

<p>Every question needs: who specifically is being asked, by when, and what happens if there is no reply. That last one matters most — "if I do not hear back by Thursday I will go with option A" converts silence into a decision instead of a block.</p>

<h3>Writing standards go up, for everyone</h3>

<p>This is the cost nobody advertises. Async work means everyone's writing is now load-bearing. A vague message in a meeting gets clarified by the next sentence; a vague message in a thread costs a day.</p>

<p>Concretely, that means: lead with the ask, state the context second, and make the specific action obvious. It is a learnable skill and it is genuinely unevenly distributed on most teams.</p>

<h2>Where async fails</h2>

<table>
<thead>
<tr><th>Situation</th><th>Async outcome</th></tr>
</thead>
<tbody>
<tr><td>Two people disagree</td><td>Threads entrench positions rather than resolving them</td></tr>
<tr><td>The problem is not yet understood</td><td>Exploration needs interruption and tangents</td></tr>
<tr><td>Something is emotionally loaded</td><td>Text removes the tone that would have defused it</td></tr>
<tr><td>Someone is new</td><td>They do not yet know what they do not know to ask</td></tr>
</tbody>
</table>

<p>The pattern: async is excellent at transmitting settled information and poor at reaching agreement. Use it for the first and call for the second.</p>

<h2>When it is worth it</h2>

<p>Spanning more than about four hours of time-zone difference is the clear case. Below that, the honest answer is that async costs more than it saves: writing a decision takes longer than saying it, and the compounding benefit of a searchable record takes a year or two to outweigh that.</p>

<p>Teams in one time zone that adopt async by default usually end up with the costs — slower questions, heavier writing burden — and none of the reason for them.</p>

<h2>The compounding part</h2>

<p>The benefit that is genuinely hard to see early: after two years, a searchable decision log means new people can answer "why is it like this?" without asking anyone. That is worth a great deal, and it is invisible for the first eighteen months, which is why most teams abandon the practice before it pays.</p>`,
  },

  {
    slug: "free-apis-worth-building-on",
    title: "Free APIs Worth Building On (And How to Tell Before You Commit)",
    excerpt:
      "Free tiers disappear, rate limits change and terms get rewritten. Here is how to judge whether an API is safe to build on, and a few that pass.",
    category: "apis",
    author: "priya-raman",
    tags: ["APIs", "Developer Tools", "Software"],
    publishedAt: "2026-06-25",
    seoTitle: "Free APIs Worth Building On in 2026",
    seoDescription:
      "How to judge whether a free API is safe to depend on — pricing history, rate-limit clarity, deprecation policy — plus categories where the free options are genuinely solid.",
    quickAnswer:
      "Judge an API on its history, not its current free tier. Three signals predict stability: a published deprecation policy, versioned endpoints that are actually still running, and a paid tier that makes obvious commercial sense. An API with no visible business model is a future migration.",
    pros: [
      "Several categories have genuinely stable free options",
      "Open data APIs from public institutions rarely disappear",
      "Good free tiers let you validate before committing to cost",
    ],
    cons: [
      "Free tiers are the first thing cut when funding changes",
      "Rate limits often tighten without much notice",
      "Terms of use can change in ways that break your use case",
    ],
    faqs: [
      {
        question: "How do I reduce the cost of an API disappearing?",
        answer:
          "Wrap it. One module in your codebase that knows the API's shape, and your own types everywhere else. Then a replacement is one file, not a search across the project.",
      },
      {
        question: "Are public-sector APIs a safe bet?",
        answer:
          "Generally the safest available — they are funded to exist rather than to grow. The trade is that they are often slower, less documented and less pleasant to work with.",
      },
    ],
    content: `<p>Every "top free APIs" list ages badly, because half the entries stop being free. The useful thing is not the list — it is the judgement.</p>

<h2>Three signals worth more than the free tier</h2>

<h3>1. A published deprecation policy that has been honoured</h3>

<p>Anyone can write "we will give twelve months' notice". The question is whether they have. Check whether previous versions were actually retired on the stated timeline, or whether v1 quietly stopped responding one Tuesday.</p>

<p>An API with several versions still running, years later, is telling you something real about how it treats dependants.</p>

<h3>2. A paid tier that makes commercial sense</h3>

<p>Counter-intuitive, but: a free API attached to a business that clearly makes money from the paid tier is safer than one with no visible revenue at all.</p>

<blockquote>
<p>If you cannot work out how the API makes money, you are looking at either a loss leader that will be cut, or a data-collection product where you are the input.</p>
</blockquote>

<h3>3. Rate limits stated in numbers</h3>

<p>"Reasonable use" is not a limit; it is a reservation of the right to cut you off without warning. A documented number — requests per minute, per day, per key — means someone thought about capacity, and it means you can plan.</p>

<h2>Categories where free is genuinely reliable</h2>

<ul>
<li><strong>Public-sector and open data.</strong> Weather, geography, transport, statistics. Funded to exist rather than to grow. Often unglamorous to work with, and rarely withdrawn.</li>
<li><strong>Standards and reference data.</strong> Currency codes, country data, time zones. Slow-moving and frequently mirrorable, which removes the dependency entirely.</li>
<li><strong>Developer infrastructure with strong paid tiers.</strong> The free tier is marketing for the paid one, which is a stable arrangement as long as the paid one sells.</li>
</ul>

<h2>Categories where free is a trap</h2>

<p>Anything where the data is the product. Company information, contact data, social graphs, aggregated pricing. The free tier exists to demonstrate value before the sales conversation, and it will be narrowed the moment your usage suggests you could pay.</p>

<h2>Build so that leaving is cheap</h2>

<p>The practical defence is one module and your own types:</p>

<pre><code>// One file knows the vendor. Nothing else does.
export type Forecast = { tempC: number; summary: string; at: Date };

export async function getForecast(lat: number, lon: number): Promise&lt;Forecast&gt; {
  const res = await fetch(\`\${BASE}/v2/point?lat=\${lat}&amp;lon=\${lon}\`, {
    headers: { authorization: \`Bearer \${process.env.WEATHER_KEY}\` },
  });
  if (!res.ok) throw new Error(\`Weather API \${res.status}\`);
  const data = await res.json();
  return { tempC: data.temp_c, summary: data.text, at: new Date(data.ts) };
}</code></pre>

<p>Everything downstream depends on <code>Forecast</code>, not on the vendor's field names. Swapping providers becomes a morning rather than a project. This is a small amount of work up front and it is the entire difference between an inconvenience and a migration.</p>

<h2>The check before you commit</h2>

<ol>
<li>Find the changelog. Is it maintained?</li>
<li>Find the deprecation policy. Has it been honoured?</li>
<li>Find the pricing page. Does the business make sense?</li>
<li>Search for people complaining about limit changes. There will be some; the question is how they were handled.</li>
</ol>

<p>Twenty minutes, and it is a better predictor than any list of recommendations, including this one.</p>`,
  },

  {
    slug: "postgres-tools-we-reach-for",
    title: "The Postgres Tools We Reach For",
    excerpt:
      "Six tools that earn their place in a working Postgres setup, what each one is actually for, and the two situations where none of them help.",
    category: "database-tools",
    author: "priya-raman",
    tags: ["Database Tools", "Developer Tools", "Software"],
    publishedAt: "2026-06-11",
    seoTitle: "The Postgres Tools We Reach For in 2026",
    seoDescription:
      "A practical set of Postgres tools — query analysis, migrations, clients and backups — with what each one is for and when it will not help.",
    quickAnswer:
      "Most Postgres problems are one of three things: a missing index, an unbounded query, or a connection pool sized wrong. Tools help you find which, but the fix is nearly always in your own code, not in your database configuration.",
    pros: [
      "Built-in Postgres tooling covers more than most people realise",
      "Query statistics extensions find real problems in minutes",
      "Migration tooling has become genuinely reliable",
    ],
    cons: [
      "Managed hosting often restricts the extensions you can install",
      "Query plan output takes real practice to read",
      "GUI clients encourage changes that never reach version control",
    ],
    faqs: [
      {
        question: "Where should I start when something is slow?",
        answer:
          "Find the slow query before touching anything else. Nearly every performance change made without that step is guesswork, and half of it makes things worse.",
      },
      {
        question: "Is a GUI client a bad idea?",
        answer:
          "For reading, no — they are excellent. For changing schema, yes: a change made in a GUI exists in your database and nowhere in your repository, and that divergence is discovered at the worst possible moment.",
      },
    ],
    content: `<p>Postgres tooling advice usually turns into a list of GUI clients. The useful set is broader and mostly less visual.</p>

<h2>1. Query statistics, before anything else</h2>

<p>The extension that records execution statistics per query is the first thing to enable on any database you care about. It answers the only question that matters when something is slow: which query, and how often.</p>

<pre><code>SELECT calls, mean_exec_time, total_exec_time, query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;</code></pre>

<p>Sort by total time, not mean. A query taking 8ms and running two million times a day is a much bigger problem than one taking 900ms a few times an hour, and it is the one nobody notices.</p>

<h2>2. Query plans, once you know where to look</h2>

<p><code>EXPLAIN (ANALYZE, BUFFERS)</code> on the specific slow query. Reading plans takes practice, but you get most of the value from three things:</p>

<ul>
<li>A sequential scan on a large table that should have used an index</li>
<li>A row estimate that is wildly different from the actual count — usually stale statistics</li>
<li>A nested loop over far more rows than expected</li>
</ul>

<blockquote>
<p>Roughly nine in ten slow queries we have investigated were a missing index or a query that forgot to bound its result set. Exotic explanations are rare and expensive to chase.</p>
</blockquote>

<h2>3. Migrations in version control</h2>

<p>Whatever tool your stack provides, use it, and never change production schema by hand. The specific tool matters far less than the discipline: schema changes must be reviewable, replayable and present in the repository.</p>

<p>The failure this prevents is not dramatic. It is a column someone added directly in a client, six months ago, that exists in production and in nobody's local database.</p>

<h2>4. A GUI client, for reading</h2>

<p>Exploring an unfamiliar schema, eyeballing data shape, checking a foreign key — a good client is much faster than the command line for all of it.</p>

<p>Use it read-only where you can. The convenience of making a quick change is exactly the convenience that produces the divergence above.</p>

<h2>5. Connection pooling, once you have more than a handful of clients</h2>

<p>Postgres connections are relatively expensive. Serverless environments and containerised applications that open connections freely will exhaust the limit surprisingly quickly.</p>

<p>The symptom is distinctive: everything is fine, then everything fails at once, then it recovers. If that pattern sounds familiar, look at connections before you look at query performance.</p>

<h2>6. Backups you have restored</h2>

<p>An untested backup is a belief, not a backup. Restore one into a scratch database on a schedule you actually keep — quarterly is enough — and time it. Knowing that a restore takes forty minutes is information you want before you need it, not during.</p>

<h2>Where none of this helps</h2>

<table>
<thead>
<tr><th>Problem</th><th>Where the fix is</th></tr>
</thead>
<tbody>
<tr><td>N+1 queries from an ORM</td><td>Your application code</td></tr>
<tr><td>Unbounded result sets</td><td>Your application code</td></tr>
<tr><td>Data model that fights every query</td><td>Your schema design</td></tr>
</tbody>
</table>

<p>These are the three most common causes of "the database is slow", and none of them are database problems. Tools will show you the symptom quickly and accurately. The fix is upstream.</p>`,
  },

  {
    slug: "deploying-a-nextjs-app-four-routes",
    title: "Deploying a Next.js App in 2026: Four Routes Compared",
    excerpt:
      "Managed platform, container on a VPS, Kubernetes, or static export. We deployed the same application four ways and measured cost, effort and what broke.",
    category: "deployment-tools",
    author: "priya-raman",
    tags: ["Deployment Tools", "Developer Tools", "Comparisons"],
    publishedAt: "2026-07-30",
    seoTitle: "Deploying a Next.js App in 2026: Four Routes Compared",
    seoDescription:
      "The same Next.js app deployed four ways — managed platform, VPS container, Kubernetes and static export. Real costs, real setup times, and what broke in each.",
    quickAnswer:
      "A managed platform for almost everyone; a container on a VPS when the bill or a data-residency rule says otherwise. Kubernetes only if you already run it for something else. Static export only if you genuinely have no server-side rendering, which most real apps do.",
    pros: [
      "Managed platforms make image optimisation and caching work with no effort",
      "A container on a VPS is cheap, portable and entirely predictable",
      "Deployment is the least differentiated part of the stack — all four work",
    ],
    cons: [
      "Managed pricing scales with bandwidth, which surprises image-heavy sites",
      "Self-hosting means owning caching, logs and TLS renewal yourself",
      "Kubernetes is enormous overhead for a single web application",
    ],
    faqs: [
      {
        question: "Does self-hosting lose any framework features?",
        answer:
          "Very few now. Image optimisation, incremental regeneration and route handlers all work in a standalone build. What you lose is that they were configured for you.",
      },
      {
        question: "What is the most common self-hosting mistake?",
        answer:
          "No persistent volume for uploaded files and the regeneration cache. Everything works until the container restarts, and then it silently does not.",
      },
    ],
    content: `<p>We took the same Next.js application — server components, incremental regeneration, image optimisation, a Postgres database, file uploads — and deployed it four ways.</p>

<h2>Route 1: managed platform</h2>

<p><strong>Setup: 12 minutes.</strong> Connect the repository, add environment variables, done. Image optimisation, caching headers and regeneration all worked without configuration.</p>

<p><strong>Where it bites:</strong> bandwidth pricing. An image-heavy publication generates far more egress than a typical dashboard, and the tiers are sized for the latter. Model your bill at ten times current traffic before committing, because the jump between tiers is where the surprise lives.</p>

<p><strong>The other issue:</strong> writable filesystems. Our media upload wrote to disk, which works locally and silently does not persist on ephemeral infrastructure. That is one function to change, but you have to know to change it.</p>

<h2>Route 2: container on a VPS</h2>

<p><strong>Setup: about 3 hours,</strong> most of it TLS, a reverse proxy and a deploy script.</p>

<p>A standalone build in a container behind a proxy. Predictable monthly cost, no bandwidth billing surprises, and a persistent volume for uploads and the regeneration cache.</p>

<blockquote>
<p>The persistent volume is the part people miss. Without it, uploads and the incremental cache vanish on every restart, and the failure is quiet.</p>
</blockquote>

<p><strong>What you now own:</strong> certificate renewal, log rotation, security updates, and being the person who notices when the disk fills. None of it is hard; all of it is yours.</p>

<h2>Route 3: Kubernetes</h2>

<p><strong>Setup: a day and a half,</strong> and that was with an existing cluster.</p>

<p>Everything worked. Nothing about it was better than route 2 for a single web application. The features that justify Kubernetes — scheduling across many services, sophisticated rollouts, autoscaling on real load — do not apply to one Next.js app.</p>

<p>If you already run a cluster and this is service number fifteen, add it there and ignore route 2. If this is service number one, do not start here.</p>

<h2>Route 4: static export</h2>

<p><strong>Setup: 20 minutes, then abandoned.</strong></p>

<p>A static export is genuinely excellent — cheap, fast, trivially cacheable — and it requires that you have no server-side rendering, no route handlers and no on-demand regeneration.</p>

<p>Our app has a CMS, server actions and a database. Static export was never going to work, and this is worth stating plainly because the option gets recommended to people whose applications rule it out.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th></th><th>Setup</th><th>Monthly cost</th><th>You maintain</th><th>Good for</th></tr>
</thead>
<tbody>
<tr><td>Managed platform</td><td>12 min</td><td>Scales with bandwidth</td><td>Nothing</td><td>Almost everyone</td></tr>
<tr><td>VPS container</td><td>3 hours</td><td>Flat and predictable</td><td>TLS, logs, updates</td><td>Cost or residency constraints</td></tr>
<tr><td>Kubernetes</td><td>1.5 days</td><td>Cluster cost</td><td>Everything</td><td>Teams already running one</td></tr>
<tr><td>Static export</td><td>20 min</td><td>Near zero</td><td>Nothing</td><td>Genuinely static sites only</td></tr>
</tbody>
</table>

<h2>What we would choose</h2>

<p>Managed platform to launch, because the setup cost is twelve minutes and the operational cost is zero. Revisit if the bandwidth bill starts mattering, at which point a container on a VPS is three hours of work and a flat bill.</p>

<p>That is an unexciting recommendation. Deployment is the least differentiated part of this stack now — all four routes work, and the decision should be made on your constraints rather than on anyone's benchmark.</p>`,
  },
];
