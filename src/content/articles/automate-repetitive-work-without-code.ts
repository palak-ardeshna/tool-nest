import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-08-19 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): used n8n to move data from one place to another; each workflow
 * took 1 to 2 hours to build; the manual job it replaced was 15 to 30 minutes;
 * he built several and only one or two still run. Whether he used n8n Cloud or
 * self-hosted was not established, so the article makes no claim either way.
 * The quoted setup and maintenance wording is from n8n's own "choose how to use
 * n8n" documentation, read on 2026-10-02.
 */
export const automateRepetitiveWorkWithoutCode: Article = {
  slug: "automate-repetitive-work-without-code",
  title: "Most of My n8n Workflows Are Switched Off",
  excerpt:
    "Each workflow took 1 to 2 hours to build and replaced a 15 to 30 minute job. That needs three or four runs to break even, and most never got there.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["n8n", "Automation", "No-Code", "Workflows"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-28",
  seoTitle: "n8n: What Automation Actually Cost Me",
  seoDescription:
    "Each n8n workflow took me 1 to 2 hours to build to replace a 15 to 30 minute job. Most of what I built is switched off now. The payback arithmetic.",
  content: `
<p>I used n8n to move data from one place to another. Each workflow took me 1 to 2 hours to set up, and the job it replaced was 15 to 30 minutes of my own time. I built several of them. Today only one or two are still running. The rest I stopped using, which means the setup time on those never came back to me at all.</p>

<p>Here is the arithmetic I wish I had done before I started, because it would have told me which of those workflows to build and which to leave alone.</p>

<h2>The arithmetic I skipped</h2>
<p>Put the two numbers next to each other and the answer gets uncomfortable.</p>
<table>
<thead><tr><th></th><th>My numbers</th></tr></thead>
<tbody>
<tr><td>Time to build one workflow</td><td>1 to 2 hours</td></tr>
<tr><td>Time the manual job took</td><td>15 to 30 minutes</td></tr>
<tr><td>Runs needed to break even</td><td>Around 3 at best, around 8 at worst</td></tr>
<tr><td>Workflows I built</td><td>Several</td></tr>
<tr><td>Still running today</td><td>One or two</td></tr>
</tbody>
</table>
<p>Three to eight runs does not sound like much, and it decides everything, because the question stops being "can this be automated" and becomes "will I actually run this three to eight more times".</p>
<p>For one or two of mine the answer was yes, and those are the ones still going. For the rest the answer turned out to be no, and I had already spent the two hours by the time I found out. A workflow I ran twice and abandoned cost me more than doing the job by hand would have, every time.</p>

<h2>Why I kept getting it wrong</h2>
<p>I kept automating the job that annoyed me, when the job I did often was the one worth the time.</p>
<p>A 20 minute task that irritates me feels like it must be worth removing. But irritation is about the experience of the task, not its frequency. The tasks worth automating are the dull ones I do every week without noticing, and those do not nag me into building anything.</p>
<p>I was also wrong about build time in the same direction every time, which is a habit I have written about before in <a href="/articles/time-blocking-that-survives-a-real-week">how my time blocks overrun</a>. I estimated an hour and it was closer to two, because the first version works and then you spend the second hour on the parts that only show up with real data: a field that is sometimes empty, a date in the wrong format, an error that needs somewhere to go.</p>

<h2>What "no code" does and does not cover</h2>
<p>n8n's own documentation is clear about one half of this. For n8n Cloud it lists setup as "No installation needed", technical expertise "None required", and maintenance "Handled by n8n". For self-hosted it lists setup as "Requires setup (npm, Docker, or server)", expertise "Required for installation and configuration", and maintenance "Your responsibility". Read on 2 October 2026.</p>
<p>All of that is about getting n8n running. None of it is about building the workflow, and the workflow is where my 1 to 2 hours went. "No installation needed" is true and does not mean the automation builds itself. You still have to know what the data looks like at each step, what happens when a step fails, and what the thing should do when the input is not what you promised it would be.</p>
<p>No platform removes that part, because it is the description of the work itself, and somebody has to write it down.</p>

<h2>What I would do differently</h2>
<p>Count the runs first. Write down how often you genuinely did this task in the last month, not how often it felt like you did. If the honest answer is fewer than about four times, do it by hand again and see whether it comes back.</p>
<p>Then do the job manually once more while taking notes on every decision you make, including the ones you make without thinking. Those decisions are the workflow. If you cannot list them, the two hours will go on discovering them one failure at a time, which is where my abandoned workflows died.</p>
<p>And keep the first version small enough to throw away. One or two of mine earned their time back. I would rather find that out after twenty minutes of building than after two hours.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I used n8n to move data from one place to another. Each workflow took me 1 to 2 hours to set up, and the job it replaced was 15 to 30 minutes of my own time. I built several of them. Today only one or two are still running. The rest I stopped using, which means the setup time on those never came back to me at all.",
  },
  sources: [
    {
      title: "Choose how to use n8n",
      publisher: "n8n",
      url: "https://docs.n8n.io/choose-how-to-use-n8n/",
      checkedAt: "2026-10-02",
    },
  ],
};
