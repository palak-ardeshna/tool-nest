import type { Article } from "@/content/types";

export const timeBlockingAfterSixMonths: Article = {
  slug: "time-blocking-after-six-months",
  title: "Time Blocking: What Actually Worked After Six Months",
  excerpt:
    "We tried the version from the productivity books, failed, and ended up with something much looser that survived. Here is the honest account.",
  category: "time-management",
  author: "daniel-reyes",
  tags: ["Time Management", "Productivity", "Workflows"],
  publishedAt: "2026-05-19",
  image: "/images/articles/time-blocking-after-six-months.webp",
  imageAlt: "A blank paper weekly planner with coloured blocks laid across it",
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
};
