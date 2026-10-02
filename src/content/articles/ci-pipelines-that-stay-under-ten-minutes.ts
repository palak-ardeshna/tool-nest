import type { Article } from "@/content/types";

/**
 * Numbered log with a table, rewritten on the URL first published 2026-09-04
 * (old text deleted 2026-09-29, not restored). Palak's own facts (chat,
 * 2026-10-02): his pipeline runs lint and type-check, tests, build and deploy;
 * it used to take over 10 minutes and now finishes in about 4; what fixed it
 * was running jobs in parallel and caching dependencies; the runner itself
 * costs a minute or two of waiting before anything starts. No provider's
 * pricing or minute allowance is quoted, because he did not give one.
 */
export const ciPipelinesThatStayUnderTenMinutes: Article = {
  slug: "ci-pipelines-that-stay-under-ten-minutes",
  title: "Over 10 Minutes to About 4, Without Removing a Single Check",
  excerpt:
    "My pipeline runs lint, type-check, tests, build and deploy. It used to take over 10 minutes. Two changes brought it to about 4, and neither of them was dropping a step.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["CI", "GitHub Actions", "Build", "Deployment", "Caching"],
  publishedAt: "2026-09-04",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Getting a CI Pipeline Under Ten Minutes",
  seoDescription:
    "A pipeline running lint, type-check, tests, build and deploy went from over 10 minutes to about 4, by running jobs in parallel and caching dependencies.",
  content: `
<p>Ten minutes is the line where a pipeline stops being a check and starts being an interruption. Under it, you wait. Over it, you go and do something else and lose the thread of what you were doing.</p>

<p>My pipeline runs lint and type-check, tests, a build and a deploy, and it used to take over 10 minutes end to end. It finishes in about 4 now. The two things that did it were running jobs at the same time instead of one after another, and caching dependencies so they are not installed from scratch on every run. I did not remove a single check to get there. On top of that there is a minute or two of waiting for a runner to pick the job up before any of my own work starts, and that part is not mine to optimise.</p>

<h2>What changed, in order of how much it helped</h2>
<ol>
<li>Caching dependencies. Installing from scratch on every run is the single most repeated piece of work in any pipeline, and it is identical almost every time.</li>
<li>Running jobs in parallel. Lint, type-check and tests do not need each other's results, so queueing them was just a habit of writing the file top to bottom.</li>
<li>Accepting the runner wait. A minute or two passes before the job starts, and no amount of tuning my own steps touches it.</li>
</ol>

<h2>Where the time actually goes</h2>
<table>
<thead><tr><th>Stage</th><th>Can it overlap?</th><th>Can it be cached?</th></tr></thead>
<tbody>
<tr><td>Waiting for a runner</td><td>No, it is before your work</td><td>No</td></tr>
<tr><td>Installing dependencies</td><td>Yes, per job</td><td>Yes, and this is the big one</td></tr>
<tr><td>Lint and type-check</td><td>Yes, needs nothing else</td><td>Partly</td></tr>
<tr><td>Tests</td><td>Yes, needs nothing else</td><td>No</td></tr>
<tr><td>Build</td><td>Only after the code is known good</td><td>Partly</td></tr>
<tr><td>Deploy</td><td>No, it is last by definition</td><td>No</td></tr>
</tbody>
</table>

<h2>Why removing checks is the wrong first move</h2>
<p>The fastest pipeline is one that does nothing, and the temptation when a run drags is to cut the step that feels least essential. That is usually the type-check or the slowest test file, which is to say the two things most likely to catch something.</p>
<p>Every minute I removed came from the same work being done more efficiently, not from less work being done. The checks that ran before still run. If you have cached and parallelised and it is still slow, then it is worth asking what a step is for, but not before.</p>

<h2>The part you cannot fix</h2>
<p>A minute or two of queueing sits in front of every run, and it is the one number I have no control over. It matters more than it sounds, because it applies to every push, including the one-line fix you are certain about. Four minutes of real work plus two of waiting is still a six-minute round trip for a typo.</p>
<p>That is the same reason a deploy is a bad place to put anything you need to happen quickly, which I found out the hard way when <a href="/articles/feature-flags-config-file-or-platform">a flag I needed off was sitting behind one</a>.</p>

<h2>What to try first</h2>
<p>Cache dependencies before anything else, because it is one block of configuration and it affects every job you have. Then look at your file and ask which steps are waiting on results they never use. Those two moves took me from over 10 minutes to about 4 with nothing removed, and anything after that is tuning.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "My pipeline runs lint and type-check, tests, a build and a deploy, and it used to take over 10 minutes end to end. It finishes in about 4 now. The two things that did it were running jobs at the same time instead of one after another, and caching dependencies so they are not installed from scratch on every run. I did not remove a single check to get there. On top of that there is a minute or two of waiting for a runner to pick the job up before any of my own work starts, and that part is not mine to optimise.",
  },
};
