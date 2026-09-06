import type { Article } from "@/content/types";

export const weeklyPublishingWorkflow: Article = {
  slug: "weekly-publishing-workflow",
  title: "How to Run a Weekly Publishing Workflow Without Burning Out",
  excerpt:
    "Publishing weekly is a queueing problem, not a writing problem. Five stages, two checkpoints, one buffer — and the reason a three-week pipeline ships more than a one-week sprint.",
  category: "productivity",
  author: "toolnest-editorial",
  tags: ["Workflows", "Productivity", "Remote Work"],
  publishedAt: "2026-05-12",
  image: "/images/articles/weekly-publishing-workflow.webp",
  imageAlt: "Printed blank pages laid out in a row across a large table",
  seoTitle: "A Weekly Publishing Workflow",
  seoDescription:
    "A weekly publishing workflow: the five stages, the two checkpoints that catch most problems cheaply, and why a two-article buffer makes it survivable.",
  quickAnswer:
    "Run five stages — idea, research, structure, draft, edit — with one rule: nothing advances to the next stage on the day it entered the current one. Add two checkpoints: a structure review before any prose is written, and a claims review before publishing that asks where each factual statement came from. Keep two finished pieces in reserve. The buffer is what makes it possible to say 'this is not ready' without missing a slot, and that sentence is what keeps quality from drifting.",
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
  sources: [
    {
      title: "Creating helpful, reliable, people-first content",
      publisher: "Google (Search Central)",
      url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      checkedAt: "2026-09-03",
    },
    {
      title: "Quotation accuracy in medical journal articles—a systematic review and meta-analysis",
      publisher: "PeerJ (via PubMed Central, NIH/NLM)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4627914/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Wikipedia:Verifiability",
      publisher: "Wikimedia Foundation / English Wikipedia",
      url: "https://en.wikipedia.org/wiki/Wikipedia:Verifiability",
      checkedAt: "2026-09-03",
    },
    {
      title: "Understanding Trust Indicators",
      publisher: "The Trust Project",
      url: "https://thetrustproject.org/trust-indicators/",
      checkedAt: "2026-09-03",
    },
    {
      title: "The Kanban Guide",
      publisher: "Orderly Disruption Limited and Daniel S. Vacanti, Inc. (kanbanguides.org)",
      url: "https://kanbanguides.org/the-kanban-guide/2025.5/",
      checkedAt: "2026-09-03",
    },
    {
      title: "What are Chrome release channels?",
      publisher: "Google (Chrome for Developers)",
      url: "https://developer.chrome.com/docs/web-platform/chrome-release-channels",
      checkedAt: "2026-09-03",
    },
    {
      title: "Low value content",
      publisher: "Google (AdSense Help)",
      url: "https://support.google.com/adsense/answer/9261307",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Publishing weekly is not a writing problem. It is a queueing problem, and it is usually solved badly — by writing harder in the days before the deadline, which works until the first week something goes wrong.</p>

<p>What follows is the workflow we would build for that cadence: a pipeline rather than a sprint. It is deliberately unglamorous, it adds latency, and it is the reason a schedule survives a bad week.</p>

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

<p>Before anyone writes a sentence of prose, a second reader goes through the heading structure and the one-line claim sitting under each heading. Not the prose — there is no prose yet, and that is the point.</p>

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
<li><strong>First-hand: someone here did this and recorded what happened.</strong> Fine — and note the date, because software changes underneath published claims faster than anyone expects.</li>
<li><strong>Sourced: a document, changelog or report says it.</strong> Fine, provided the source is linked and actually says the thing being claimed. Check the second half; a surprising share of citation failures are a real source that does not support the sentence attached to it.</li>
<li><strong>Neither: it sounds right.</strong> Cut it, verify it, or attribute it as a vendor claim. This is where nearly everything that would later have needed a correction gets caught, and it is worth being ruthless — fluent prose disguises unsupported claims extremely well.</li>
</ol>

<h2>The buffer</h2>

<p>Keep two finished pieces in reserve at all times. This single practice is the difference between a weekly cadence and a weekly panic, and it is the first thing to build before committing to a schedule publicly.</p>

<p>Without a buffer, every deadline creates pressure to publish whatever is closest to done. With one, "this is not ready" costs nothing — which is the only condition under which anyone actually says it. A schedule with no buffer does not fail loudly; it degrades quietly, one slightly-thin piece at a time, until the cadence is being met and nothing being published is any good.</p>

<p>Building the buffer is the hard part, because it means writing three pieces before publishing the first. Do it during the period before anyone is watching, not after you have announced a schedule.</p>

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

<p>Anything time-sensitive. A three-week pipeline cannot respond to something that happened yesterday, and no amount of tuning changes that — the latency is the mechanism, not a defect in it.</p>

<p>The workable response is not to compete there. A publication built around breaking news needs a much shorter pipeline and correspondingly lighter checkpoints; trying to run both cadences through one workflow produces something too slow for news and too rushed for everything else. Decide which one you are, and let the other go.</p>

<h2>Adapting it for one person</h2>

<p>The workflow survives being run solo with a single substitution: wherever it says "a second reader", substitute a day of distance. Reading your own heading structure the next morning catches a surprising share of what a colleague would catch, because the failure being hunted — a topic pretending to be an argument — is invisible while the idea is still in your head and obvious once it is not.</p>

<p>What does not survive being solo is quietly dropping the checkpoints. They are the entire value of the process. The five stages are just scaffolding to hang them on. Protecting the time for them is a separate problem, and <a href="/articles/time-blocking-that-survives-a-real-week">two blocks a day</a> is usually enough.</p>`,
};
