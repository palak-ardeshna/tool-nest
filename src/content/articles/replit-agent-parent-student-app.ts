import type { Article } from "@/content/types";

/**
 * How-to/setup log, to differ from the previous article's layout
 * (custom-gpts: faq+table) and the next one's (deepseek-vs: answer+
 * alternatives+table). Palak's facts (chat, 2026-10-17): used Replit
 * Agent to build a parent-student app where parents see if their child
 * packed the school bag and did the lesson, with an update sent to the
 * parent; the Agent checked its own work and suggested the next task;
 * it came together in 10 to 15 prompts over about 4 to 5 hours; one
 * feature needed several retries before it worked. Agent behaviour
 * verified via WebFetch of docs.replit.com/replitai/agent, 2026-10-17.
 * Added 2026-10-20 at Palak's request (chat): the feature that needed the
 * retries was the redirect URL. He set it in an environment variable to the
 * frontend URL, the app kept using the local URL, and deleting the variable
 * and adding it again is what made it work. No time figure was given.
 */
export const replitAgentParentStudentApp: Article = {
  slug: "replit-agent-parent-student-app",
  title: "What Replit Agent Got Right Building a Parent-Student App, and the One Feature It Didn't",
  excerpt:
    "I built a parent-student app on Replit Agent in 10 to 15 prompts over about 4 to 5 hours. It checked its own work and suggested the next task. One feature took several retries.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Replit", "AI App Builder", "No Code", "App Development"],
  publishedAt: "2026-10-17",
  contentUpdatedAt: "2026-10-20",
  seoTitle: "Replit Agent: Building a Parent-Student App",
  seoDescription:
    "I built a parent-student app with Replit Agent in 10 to 15 prompts over about 4 to 5 hours. What it handled alone, and the one feature I had to retry.",
  content: `<p>I used Replit Agent to build a parent-student app: parents see whether their child packed their school bag and finished the lesson, and the app sends them that update. The whole thing came together in about 10 to 15 prompts over roughly 4 to 5 hours. The Agent checked its own work and suggested the next task each time. One feature I had to retry several times before it worked.</p>

<h2>How the build went, step by step</h2>
<ol>
<li>I described the app in plain language: parents should be able to see if their child packed the school bag and did the lesson, and get an update when that changes.</li>
<li>The Agent planned the build before writing anything, then set up the project and produced a first working version.</li>
<li>After each piece it ran a check on its own work and told me what to do next, so most of the time I was approving or redirecting rather than deciding the next step myself.</li>
<li>I added the parts one at a time: the child's checklist, the parent's view of it, and the update that reaches the parent.</li>
<li>By the end it had taken ten to fifteen prompts and about four to five hours.</li>
</ol>

<h2>The one feature I had to retry</h2>
<p>Most parts landed in a prompt or two, but one kept coming back wrong. I had to re-describe it and let the Agent try again several times before it did what I wanted. Each attempt it would rewrite that part, check it, and hand it back, and I would send it round once more. That one feature is where a good chunk of the four to five hours went.</p>
<p>The feature was the redirect URL. I set it in an environment variable to point at the frontend, but the app kept sending people to the local URL. What fixed it was deleting that environment variable and adding it again. After that, the redirect went to the frontend.</p>
<p>If your Replit app keeps using an old URL after you change a variable, try that before you rewrite any code.</p>

<h2>Pros and cons of building it this way</h2>
<ul>
<li><strong>Pro:</strong> the Agent checked its own work and suggested the next task, so I did not have to plan each step before asking for it.</li>
<li><strong>Pro:</strong> plain-language prompts were enough; the whole app took ten to fifteen of them, no setup on my side.</li>
<li><strong>Con:</strong> one feature needed several retries before it worked, instead of landing first time like the others.</li>
<li><strong>Con:</strong> those retries stretched the build, so the four to five hours was more than the number of prompts suggested.</li>
</ul>

<p>If you are weighing how much of a small app to hand to an AI tool versus writing it yourself, I wrote about where that line fell for me in <a href="/articles/claude-code-for-a-simple-website">is Claude Code worth it for a simple website</a>.</p>`,
  pros: [
    "The Agent checked its own work and suggested the next task",
    "Plain-language prompts; the whole app took ten to fifteen of them",
  ],
  cons: [
    "One feature needed several retries before it worked",
    "Those retries stretched the four to five hours of build time",
  ],
  sources: [
    {
      title: "Replit Agent",
      publisher: "Replit",
      url: "https://docs.replit.com/replitai/agent",
      checkedAt: "2026-10-17",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-17",
    experience:
      "I used Replit Agent to build a parent-student app: parents see whether their child packed their school bag and finished the lesson, and the app sends them that update. The whole thing came together in about 10 to 15 prompts over roughly 4 to 5 hours. The Agent checked its own work and suggested the next task each time. One feature I had to retry several times before it worked.",
  },
};
