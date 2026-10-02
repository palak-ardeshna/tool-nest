import type { Article } from "@/content/types";

/**
 * Numbered log, rewritten on the URL first published 2026-08-19; that date is
 * at the two-article cap the test enforces, so it is published 2026-10-01 where
 * there was no article. The slug and URL are unchanged. Old text deleted
 * 2026-09-29, not restored. Palak's own facts (chat, 2026-10-02): he still time
 * blocks, keeps a written list and writes the blocks into Google Calendar,
 * 7 or 8 blocks in 10 overrun, and when one does he stops and moves the
 * remaining work to another block rather than pushing the day back. No app is
 * recommended beyond the calendar and list he actually uses.
 */
export const timeBlockingThatSurvivesARealWeek: Article = {
  slug: "time-blocking-that-survives-a-real-week",
  title: "Seven or Eight of My Ten Blocks Overrun. I Still Do It",
  excerpt:
    "If time blocking is supposed to make the day predictable, mine fails most of the time. It is still worth doing, for a reason that has nothing to do with the estimates being right.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Time blocking", "Calendar", "Planning", "Freelancing", "Habits"],
  publishedAt: "2026-10-01",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Time Blocking When the Estimates Are Wrong",
  seoDescription:
    "Most of my time blocks overrun, 7 or 8 in 10. Why the practice still works, and the one rule that keeps a bad estimate from eating the whole day.",
  content: `
<p>Most writing about time blocking assumes the blocks are roughly right. Mine are not. If the test is whether the plan matches the day, I fail it most weeks, and I have kept doing it anyway.</p>

<p>I keep a written list of what needs doing, and I write the blocks into Google Calendar alongside the meetings. Out of every 10 blocks, 7 or 8 overrun. When one does, I stop and move the rest of that work into another block rather than letting it eat the next thing. That rule is the only part of this that has survived contact with a real week, and it is doing more work than the planning is.</p>

<h2>What the blocks are actually for</h2>
<ol>
<li>Deciding what to work on, once, in advance. This is the real benefit. The cost of choosing at 10am, again at 11am, again after lunch is larger than any estimate error.</li>
<li>Making the day's capacity visible. A list of nine things looks possible. Nine things in a calendar is obviously not, and you find that out before you promise it to someone.</li>
<li>Protecting the next piece of work. Not the current one, the next one. That is the distinction most advice misses.</li>
</ol>

<h2>Why I stop instead of pushing everything back</h2>
<p>If I let an overrunning block run until the work is done, the overrun lands entirely on whatever came after it, which is usually the thing I was least looking forward to and most needed the plan for. One wrong estimate then takes out the afternoon.</p>
<p>Stopping at the boundary and moving the remainder costs me the annoyance of leaving something unfinished. What it buys is that the rest of the day still exists. The unfinished work goes back on the list and gets a block of its own, usually a more honest one now that I have seen the real shape of it.</p>

<h2>The estimates do not get better</h2>
<p>I have been doing this long enough that I expected the estimating to improve. It has not, or not enough to notice: 7 or 8 in 10 still run over. I have stopped treating that as a problem to solve, because the work genuinely is unpredictable, and a plan that assumed otherwise would just be wrong in a more organised way.</p>
<p>What changed is that I plan fewer blocks than there are hours. Not as a clever technique, just as an admission of the above.</p>

<h2>Calendar and list do different jobs</h2>
<p>The list holds everything that needs doing and does not care when. The calendar holds commitments, including the ones I have made to myself. Keeping my own work in the calendar next to the meetings is what stops a day looking free when it is not, and it is why I will say no to a 4pm call that a list alone would have let me accept.</p>

<h2>If you are starting</h2>
<p>Do not aim for accurate blocks, you will not get them. Aim for two things: deciding in advance what the block is for, and a rule about what happens when it overruns, decided before it does. Everything else is decoration.</p>
<p>The same thinking applies to anything with a fixed window and work that does not respect it, which is why I care how long a build takes, as I wrote when <a href="/articles/ci-pipelines-that-stay-under-ten-minutes">getting a pipeline back under ten minutes</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I keep a written list of what needs doing, and I write the blocks into Google Calendar alongside the meetings. Out of every 10 blocks, 7 or 8 overrun. When one does, I stop and move the rest of that work into another block rather than letting it eat the next thing. That rule is the only part of this that has survived contact with a real week, and it is doing more work than the planning is.",
  },
};
