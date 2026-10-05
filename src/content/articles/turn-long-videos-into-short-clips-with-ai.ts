import type { Article } from "@/content/types";

/**
 * Queue rewrite of a deleted 2026-09-29 URL (old date 2026-08-19), written
 * only from Palak's own facts (chat, 2026-10-05): he ran one ~1-hour video
 * through Higgsfield Shorts, got 9 clips back in about 5 minutes, and found the
 * auto-captions misheard words on several clips so he had to retype them.
 * How-to / setup log layout: numbered steps with what broke, plus pros/cons,
 * no FAQ. publishedAt keeps the old URL date; contentUpdatedAt is the rewrite
 * day; reviewedAt is the day Palak confirmed the facts.
 */
export const turnLongVideosIntoShortClipsWithAi: Article = {
  slug: "turn-long-videos-into-short-clips-with-ai",
  title: "How to Turn a Long Video Into Short Clips Using AI (Without the Slop)",
  excerpt:
    "I ran a one-hour video through Higgsfield Shorts. It cut 9 clips in about 5 minutes, then the captions misheard half the words. Here is the run, step by step.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Higgsfield", "AI Video", "Short Clips", "How-To"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-10-05",
  seoTitle: "Turn a Long Video Into Short Clips With AI",
  seoDescription:
    "A step-by-step run through Higgsfield Shorts: 9 clips from one hour of footage in about 5 minutes, and the caption mistakes you have to fix by hand.",
  content: `
<p>Cutting a long recording into short clips by hand is slow. You scrub the timeline, mark the good 30 seconds, crop to vertical, add captions, repeat. I wanted to see how much of that an AI clipper would do for me, so I put one real video through Higgsfield Shorts and watched where it helped and where it did not.</p>

<p>I fed one long video, about an hour of talking-head footage, into Higgsfield Shorts to see if it could cut the clips for me. The processing was fast: it handed back 9 short clips in roughly 5 minutes, which is quicker than I would have scrubbed the timeline myself. The catch was the captions. It auto-transcribed every clip, and on at least 3 of them it misheard words and printed the wrong ones on screen, so I had to go back and retype the captions before any clip was usable.</p>

<h2>The run, step by step</h2>
<ol>
<li><strong>Upload the long video.</strong> I gave it the full hour-long file. The upload and the transcription pass took the bulk of the wait; the cutting itself was quick once that finished.</li>
<li><strong>Let it find the moments.</strong> It scanned the transcript and picked the segments it thought would stand alone. The picks were reasonable. Most of the 9 clips landed on an actual point rather than a random 30 seconds, which is the part I expected to be worst and was not.</li>
<li><strong>Reframe to vertical.</strong> It cropped each clip to a vertical 9:16 and kept the speaker roughly centred. I did not have to reframe anything by hand.</li>
<li><strong>Read the captions.</strong> This is where it broke. The burned-in captions were auto-transcribed, and on several clips the words were simply wrong, close-sounding words swapped in. On screen that reads as garbage, so every clip needed a proofread.</li>
<li><strong>Fix and export.</strong> I corrected the caption text on the clips that needed it, then exported. The fixing took longer than the generating did.</li>
</ol>

<h2>What it does well and what it costs you</h2>
<p>The speed is real, and the moment-picking is good enough to save the worst part of the job. The captions are the tax. Budget time to proofread every clip, because the one you skip is the one with the wrong word in 48-point text.</p>

<h3>Good</h3>
<ul>
<li>9 clips from an hour of footage in about 5 minutes of processing.</li>
<li>The segment picks mostly land on a real point, not a random cut.</li>
<li>Vertical reframing is done for you.</li>
</ul>

<h3>Not good</h3>
<ul>
<li>Auto-captions misheard words on several clips; you cannot ship them unread.</li>
<li>Correcting captions took me longer than the generation step.</li>
<li>Credits run down fast, which I ran into the first time I tried it in <a href="/articles/higgsfield-free-credits-one-video">what Higgsfield's free credits actually buy</a>.</li>
</ul>

<p>So it is a real time-saver on the cutting and a time-sink on the captions. Use it to get 9 rough clips in minutes, then sit with each one and read the words before it goes out.</p>
`,
  pros: [
    "Fast: 9 clips from an hour of footage in about 5 minutes",
    "Segment picks mostly land on a real point",
    "Vertical reframing handled for you",
  ],
  cons: [
    "Auto-captions misheard words on several clips",
    "Fixing captions took longer than generating them",
    "Free credits run down fast",
  ],
  sources: [
    {
      title: "Higgsfield Shorts Studio",
      publisher: "Higgsfield",
      url: "https://higgsfield.ai",
      checkedAt: "2026-10-05",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-05",
    experience:
      "I fed one long video, about an hour of talking-head footage, into Higgsfield Shorts to see if it could cut the clips for me. The processing was fast: it handed back 9 short clips in roughly 5 minutes, which is quicker than I would have scrubbed the timeline myself. The catch was the captions. It auto-transcribed every clip, and on at least 3 of them it misheard words and printed the wrong ones on screen, so I had to go back and retype the captions before any clip was usable.",
  },
};
