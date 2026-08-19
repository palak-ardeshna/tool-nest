import type { Article } from "@/content/types";

export const turnLongVideosIntoShortClipsWithAi: Article = {
  slug: "turn-long-videos-into-short-clips-with-ai",
  title: "How to Turn Long Videos Into Short Clips Using AI (Without the Slop)",
  excerpt:
    "A repeatable workflow for cutting webinars, podcasts and talks into clips people actually watch — and the steps where automation makes it worse.",
  category: "how-to",
  author: "daniel-reyes",
  tags: ["AI Video", "How-To", "Content"],
  publishedAt: "2026-07-15",
  image: "/images/articles/turn-long-videos-into-short-clips-with-ai.webp",
  imageAlt: "A strip of 35mm film beside a closed clapperboard",
  seoTitle: "How to Turn Long Videos Into Short Clips With AI: A Practical Workflow",
  seoDescription:
    "A step-by-step workflow for turning long-form video into short clips using AI transcription and clip detection — including the manual steps worth keeping.",
  quickAnswer:
    "Transcribe first, choose moments from the transcript rather than from the auto-highlight score, then let AI handle reframing and captions. Automatic clip selection is the weakest link — it finds loud moments, not interesting ones.",
  pros: [
    "Cuts editing time for a one-hour source from hours to under 45 minutes",
    "Captioning and vertical reframing are genuinely solved problems",
    "Transcript-driven editing is faster than scrubbing a timeline",
  ],
  cons: [
    "Automatic highlight detection favours volume and gesture over substance",
    "Speaker-change detection still fails on overlapping conversation",
    "Auto-generated captions need a proofread for names and jargon",
  ],
  faqs: [
    {
      question: "Do I need a paid tool for this?",
      answer:
        "Not for transcription — open models running locally are accurate enough. Paid tools mostly buy you reframing, caption styling and a review UI, which is real time saved if you do this weekly.",
    },
    {
      question: "How long should a clip be?",
      answer:
        "Long enough to contain one complete idea. In our experience that is usually 30–70 seconds. Cutting to a target length rather than to the idea is the most common reason clips feel truncated.",
    },
  ],
  content: `<p>The pitch for automatic clipping tools is that you upload an hour and get ten shareable clips. What you actually get is ten moments where someone laughed or raised their voice. Some of them are good. Most are not.</p>

<p>Here is the workflow we settled on after clipping about forty hours of talks and podcasts. It keeps the automation where it is genuinely better than a person, and keeps a human where it is not.</p>

<h2>Step 1: Transcribe before you do anything else</h2>

<p>A timestamped transcript is the working document for everything that follows. It is much faster to skim 9,000 words than to scrub an hour of video, and it makes the source searchable.</p>

<p>Accuracy matters here in one specific way: proper nouns. Run a find-and-replace pass for names, product names and jargon before you go further, or every downstream caption inherits the error.</p>

<h2>Step 2: Choose moments from the transcript, not the highlight score</h2>

<p>This is the step people skip, and it is the one that determines whether the output is worth publishing.</p>

<p>Read the transcript looking for one thing: a complete idea that stands alone. It typically has three parts — a claim, a reason, and something concrete. If a passage has all three within about 60 seconds of speech, it is a clip. If it needs the previous ten minutes to make sense, it is not, no matter how animated the speaker was.</p>

<blockquote>
<p>Automatic detection optimises for energy. Audiences reward completeness. Those are not the same signal.</p>
</blockquote>

<h2>Step 3: Cut to the idea, then trim</h2>

<p>Set your in and out points from the transcript, then watch the cut once. Two things to fix:</p>

<ul>
<li><strong>Start on the substance.</strong> Drop "so, um, I think the thing is" — start on the claim.</li>
<li><strong>End on the point, not the pause.</strong> Cut the trailing breath and the "…yeah". It reads as confidence.</li>
</ul>

<h2>Step 4: Let the tool do reframing and captions</h2>

<p>Now automation earns its keep. Speaker-tracking reframes from landscape to vertical, and caption generation, are both reliable enough to accept with a quick review.</p>

<p>Two review checks that catch almost everything:</p>

<ol>
<li>Does the crop ever cut off the speaker's head or a whiteboard they are pointing at?</li>
<li>Are the captions correct on every proper noun? (You already fixed these in the transcript — check they carried through.)</li>
</ol>

<h2>Step 5: Write the caption text yourself</h2>

<p>The post text is the thing that decides whether anyone presses play, and it is currently the weakest AI output of the lot. Generated captions read like generated captions. Write one sentence describing the specific claim in the clip, in plain language. It takes twenty seconds.</p>

<h2>Roughly what this costs in time</h2>

<table>
<thead>
<tr><th>Step</th><th>One-hour source</th><th>Automated?</th></tr>
</thead>
<tbody>
<tr><td>Transcription</td><td>3–8 min</td><td>Yes</td></tr>
<tr><td>Reading and selecting</td><td>15–20 min</td><td>No</td></tr>
<tr><td>Cutting and trimming</td><td>10 min</td><td>Partly</td></tr>
<tr><td>Reframe and captions</td><td>5 min</td><td>Yes</td></tr>
<tr><td>Post text</td><td>5 min</td><td>No</td></tr>
</tbody>
</table>

<h2>Where this fails</h2>

<p>Panel discussions with heavy interruption defeat speaker detection. Screen-share-heavy content does not survive vertical reframing — clip those as landscape or not at all. And if the source genuinely has no self-contained ideas in it, no tool will find them.</p>`,
};
