import type { Article } from "@/content/types";

/**
 * Roundup, rewritten on the URL first published 2026-08-19 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): used CapCut and Canva, which runs on Veo; made 10 to 25 clips
 * between them; paid once in CapCut, under 500 rupees, no subscription; cutting
 * a long video into clips in CapCut took over 30 minutes a video, so he left it
 * running; today he would keep the generator and drop CapCut. Vendor pricing is
 * not cited: CapCut's and Canva's pricing pages could not be read (HTTP 451 and
 * 403 on 2026-10-02), so no price claim is made for either. Clip lengths and
 * availability are from Google's Gemini and Flow help pages.
 */
export const aiVideoToolsWorthTheSubscription: Article = {
  slug: "ai-video-tools-worth-the-subscription",
  title: "CapCut Took Over 30 Minutes a Video. I Kept Canva",
  excerpt:
    "I made 10 to 25 clips with CapCut and Canva, and paid once, under 500 rupees. The editor was the one I dropped, not the generator.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["CapCut", "Canva", "Veo", "AI Video", "Video Editing"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-21",
  seoTitle: "CapCut vs Canva: What I Paid and Dropped",
  seoDescription:
    "I made 10 to 25 clips in CapCut and Canva. Cutting one long video took over 30 minutes in CapCut, so I kept the generator instead.",
  pros: [
    "The generator side gave me usable clips without me opening an editor",
    "I never needed a subscription to either one to get work out of them",
    "Canva's generator runs on Veo, so the clip length limits are documented",
  ],
  cons: [
    "Cutting one long video into clips in CapCut took me over 30 minutes",
    "A generated clip is 8 seconds at most, so anything longer is stitching",
    "In Gemini, generating video on a personal account needs a paid Google AI plan",
    "Video to video editing is not available in the UK, the EEA, Switzerland and some US states",
  ],
  alternatives: [
    {
      name: "Google Flow",
      url: "https://labs.google/flow",
      note: "Google's own front end for Veo, where the 4, 6 and 8 second lengths are selectable",
    },
    {
      name: "Gemini apps",
      note: "Generates video directly, but a personal account needs a Google AI plan",
    },
    {
      name: "Your existing editor",
      note: "If the job is cutting footage you already have, a plain editor has no queue to wait on",
    },
  ],
  content: `
<p>I used two AI video tools on my own work: CapCut and Canva, which runs on Google's Veo. I made somewhere between 10 and 25 clips across them. I paid once in CapCut, under 500 rupees, and never took a subscription. Turning a long video into short clips in CapCut took me over 30 minutes a video, so I started it and went to do other work. Today I would keep the generator and drop CapCut.</p>

<p>That is the opposite of what I expected when I started. The editor is the tool that should feel fast, because it is working on footage that already exists. The generator is the one making something out of nothing. In my use the generator was the one worth keeping.</p>

<h2>Where my time actually went</h2>
<table>
<thead><tr><th>The job</th><th>Tool</th><th>What it cost me</th></tr></thead>
<tbody>
<tr><td>Long video into short clips</td><td>CapCut</td><td>Over 30 minutes a video. I left it and did something else</td></tr>
<tr><td>Text prompt into a new clip</td><td>Canva, on Veo</td><td>Short enough that I stayed at the screen</td></tr>
<tr><td>Total output</td><td>Both</td><td>10 to 25 clips</td></tr>
<tr><td>Total paid</td><td>CapCut, once</td><td>Under 500 rupees. No subscription</td></tr>
</tbody>
</table>

<p>Over 30 minutes for one video is the number that decided this for me, and it is worth being precise about why. Half an hour of machine time is cheap enough. The trouble is that half an hour breaks the loop. Cutting clips out of a long video is a job you do by judgement: you watch it, you pick a moment, you see whether the cut lands, you move the edge two seconds. That loop needs to run in seconds. At 30 minutes a pass, I was not editing. I was submitting a job and coming back to whatever it had decided.</p>

<p>So I stopped using it for that and went back to doing the cutting myself, which is the same conclusion I reached about recording in <a href="/articles/screen-recording-for-async-teams">the how-to nobody watched</a>: the slow part of video was never the part a tool was offering to take.</p>

<h2>What a generated clip actually is</h2>
<p>If you have not used the generator side, the length is the thing to understand before you plan anything around it.</p>
<p>Google's Flow help lists Veo 3.1 at 4, 6 or 8 second clips for text to video and frames to video, and 8 seconds only when you generate from reference images. Gemini Omni Flash 1.1 goes to 10 seconds. These were checked on 2 October 2026.</p>
<p>Eight seconds gives you one shot. Anything longer is several clips stitched together, and the stitching is yours to do. That reframes what the generator is for. It will not hand you a finished two minute piece. It fills a gap: a background, a transition, a visual for something you have no footage of.</p>
<p>Two other limits are worth reading before you commit. Google's Gemini help says a personal account needs a Google AI plan to generate video, and that video to video editing is not available in the EEA, Switzerland, the United Kingdom and some US states. Both checked 2 October 2026. If you are in one of those places, part of this is simply not available to you, whatever you pay.</p>

<h2>What I would tell someone starting now</h2>
<p>Separate the two jobs before you pay anything, because they are not the same product and the free tiers will tell you different things.</p>
<p>If your job is cutting footage you already have, test the turnaround on one real video before you commit. Not a 30 second sample. A long one, the length you actually work with. My number was over 30 minutes, and I only found that out on real footage. If the queue is longer than your patience, a plain editor with no queue beats a smart one with a wait.</p>
<p>If your job is producing short visuals you do not have footage for, the generator is the one to try. Expect clips of 8 seconds or so, expect to assemble them yourself, and check whether the feature works at all from where you are.</p>
<p>On money: I spent under 500 rupees, once, and got 10 to 25 clips out of these tools. I never found the thing that made a monthly subscription obvious, and I would start the same way again. Pay the smallest amount that unlocks a real test, do the real test, and let the result decide whether there is a subscription in it.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I used two AI video tools on my own work: CapCut and Canva, which runs on Google's Veo. I made somewhere between 10 and 25 clips across them. I paid once in CapCut, under 500 rupees, and never took a subscription. Turning a long video into short clips in CapCut took me over 30 minutes a video, so I started it and went to do other work. Today I would keep the generator and drop CapCut.",
  },
  sources: [
    {
      title: "Learn about Google Flow models and supported features",
      publisher: "Google",
      url: "https://support.google.com/flow/answer/16352836",
      checkedAt: "2026-10-02",
    },
    {
      title: "Generate videos with Gemini Apps",
      publisher: "Google",
      url: "https://support.google.com/gemini/answer/16126339",
      checkedAt: "2026-10-02",
    },
  ],
};
