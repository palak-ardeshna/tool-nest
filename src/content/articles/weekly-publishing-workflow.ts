import type { Article } from "@/content/types";

export const weeklyPublishingWorkflow: Article = {
  slug: "weekly-publishing-workflow",
  title: "How We Run a Weekly Publishing Workflow",
  excerpt:
    "The unglamorous machinery behind shipping an article a week: how work moves from idea to published, and the two checkpoints that catch nearly everything.",
  category: "workflows",
  author: "maya-oduya",
  tags: ["Workflows", "Productivity", "Remote Work"],
  publishedAt: "2026-05-12",
  image: "/images/articles/weekly-publishing-workflow.webp",
  imageAlt: "Printed blank pages laid out in a row across a large table",
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
};
