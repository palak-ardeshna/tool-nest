import type { Article } from "@/content/types";

export const aiResearchToolsAndYourSources: Article = {
  slug: "ai-research-tools-and-your-sources",
  title: "AI Research Tools: What They Actually Do to Your Sources",
  excerpt:
    "Every research assistant promises to read the literature for you. The question worth asking is what happens to a citation on the way into a summary — and whether the paper still says what the summary claims it says.",
  category: "ai-tools",
  author: "toolnest-editorial",
  tags: ["AI Research", "AI Tools", "How-To"],
  publishedAt: "2026-06-30",
  image: "/images/articles/ai-research-tools-and-your-sources.webp",
  imageAlt: "A stack of blank books beside a closed laptop and a magnifying glass",
  seoTitle: "AI Research Tools: Are Citations Safe?",
  seoDescription:
    "Fabricated citations have largely been fixed. The failure that replaced them is quieter and more dangerous: a real paper, correctly cited, summarised without the limitations its authors were careful to state.",
  quickAnswer:
    "Use AI research tools to find sources, never to represent them. Outright invented citations have become rare in dedicated research products, which retrieve from real indexes. The failure that remains is compression: summaries drop the limitations authors stated prominently — small sample, single population, correlation not causation — and present a hedged finding as a settled one. Read anything you intend to cite, specifically the methods and limitations, and write the claim from the paper rather than pasting the summary.",
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
  content: `<p>AI research assistants have improved in exactly the way that makes them more dangerous. The obvious failure — a confidently cited paper that does not exist — has largely been engineered out. What replaced it is quieter, survives a casual check, and lands in your work rather than theirs.</p>

<p>The way to find it is unglamorous: take a summary the tool produced, open the paper it cites, and read it. Below is what to check for, where each check tends to fail, and a workflow that keeps you out of trouble.</p>

<h2>The three checks</h2>

<p>For any summary you are relying on, ask three questions in order. Each is cheaper than the one after it, and each catches a different class of problem:</p>

<ol>
<li>Does the cited paper exist and say something on this topic?</li>
<li>Does it support the specific claim attributed to it?</li>
<li>Does the summary preserve the limitations the authors stated?</li>
</ol>

<h2>Where each question tends to fail</h2>

<p><strong>Question one is largely solved.</strong> Outright fabricated citations — the failure that defined these tools two years ago — have become rare in dedicated research products, which retrieve from real indexes rather than generating references from memory. This is a genuine improvement and worth acknowledging.</p>

<p><strong>Question two fails occasionally, and quietly.</strong> The characteristic failure is not a fake paper but a real one, on the right subject, reporting something adjacent to rather than identical to the claim attached to it. These survive a casual check precisely because the abstract looks supportive. Catching them requires reading the result, not the abstract.</p>

<p><strong>Question three is where the real problem lives.</strong> Summaries routinely drop the limitations the authors stated prominently: small sample, single population, effect present only in one condition, correlational rather than causal. The summary is not wrong, exactly. It is confident about something the authors were careful not to be confident about — which, if you are citing it, becomes your error rather than the tool's.</p>

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

<h2>The specific drops to look for when checking a summary</h2>

<p>Knowing the general shape of the problem is less useful than knowing what to look for. These are the omissions that change meaning, roughly in order of how often they matter:</p>

<ul>
<li><strong>Hedging removed.</strong> "May be associated with" becomes "is linked to". The paper is unchanged; the claim you would now publish is not supported by it.</li>
<li><strong>Population dropped.</strong> A result found in one narrow group, presented as general. The most consequential drop and one of the easiest to miss, because the summary is not wrong about anything it actually says.</li>
<li><strong>Conditions dropped.</strong> An effect present only under one condition, reported without it.</li>
<li><strong>Correlation stated as causation.</strong> Rarely explicit — usually a verb choice.</li>
<li><strong>Sample size and study type omitted.</strong> A pilot study and a large trial read identically once summarised.</li>
<li><strong>Age and supersession.</strong> A finding presented as current when the literature has moved on. Retrieval ranks by relevance, not by whether a result still stands.</li>
</ul>

<h2>Two failure modes of the tools themselves</h2>

<p>Beyond summarisation, retrieval introduces distortions that careful reading of any single paper will not catch:</p>

<ul>
<li><strong>Convergence.</strong> Ask the same question twice, phrased differently, and you will often get the same handful of papers. That looks like consensus and is an artefact of ranking. Genuine consensus has to be established from the literature, not from a tool agreeing with itself.</li>
<li><strong>Availability bias.</strong> Open-access papers are over-represented because they are easier to retrieve and process. In fields where the significant work sits behind paywalls, the map you get back is systematically skewed toward whatever was reachable.</li>
</ul>

<p>The practical defence for both is to ask what contradicts the finding, explicitly, as a separate query. These tools are unusually good at that question — it is one of the things they genuinely do better than keyword search — and it is the fastest way to find out whether the picture you have been handed is the whole one.</p>

<h2>What this means if you publish</h2>

<p>The liability transfers completely. A misrepresented finding in your article is your error, regardless of which tool produced the summary, and "the assistant said so" is not a position anyone will accept.</p>

<p>Two habits make this manageable rather than paralysing. Cite only what you have opened — if you have not read at least the abstract, the methods and the limitations, do not cite it. And record where each claim came from as you draft rather than afterwards; reconstructing sources at the end of a piece is exactly where attributions get attached to the wrong papers.</p>

<h2>The honest framing</h2>

<p>We hold ourselves to that rule when we research these articles: nothing gets cited here that we have not opened.</p>

<p>These tools are a very good search engine with a summarising layer on top. The search part is a genuine advance. The summarising part is a convenience that must never become the basis of anything you publish, because it is confidently lossy in exactly the direction that makes findings sound stronger than they are.</p>`,
};
