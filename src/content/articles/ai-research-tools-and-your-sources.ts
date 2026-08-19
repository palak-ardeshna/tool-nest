import type { Article } from "@/content/types";

export const aiResearchToolsAndYourSources: Article = {
  slug: "ai-research-tools-and-your-sources",
  title: "AI Research Tools: What They Actually Do to Your Sources",
  excerpt:
    "Every research assistant promises to read the literature for you. We checked what happens to the citations — and how often the summary survives contact with the paper.",
  category: "ai-research",
  author: "maya-oduya",
  tags: ["AI Research", "AI Tools", "How-To"],
  publishedAt: "2026-06-30",
  image: "/images/articles/ai-research-tools-and-your-sources.webp",
  imageAlt: "A stack of blank books beside a closed laptop and a magnifying glass",
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
};
