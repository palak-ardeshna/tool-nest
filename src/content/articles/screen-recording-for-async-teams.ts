import type { Article } from "@/content/types";

/**
 * Numbered setup log with pros and cons, rewritten on the URL first published
 * 2026-09-06 (old text deleted 2026-09-29, not restored). Palak's own facts
 * (chat, 2026-10-02): he recorded a how-to for a teammate with
 * SimpleScreenRecorder on Linux, the finished clip ran about 10 minutes, the
 * recording cost him more time than typing the steps would have, and the
 * teammate never replied. He has used it lightly, not as a habit, and the
 * article says so. SimpleScreenRecorder's maintainer, licence and platform are
 * from the project's own site, read 2026-10-02. The old headline argued a video
 * beats a message; his result went the other way, so the article follows the
 * result.
 */
export const screenRecordingForAsyncTeams: Article = {
  slug: "screen-recording-for-async-teams",
  title: "Screen Recording for an Async Team",
  excerpt:
    "A screen recording was supposed to save me writing out the steps. It took longer than typing them, the clip ran about 10 minutes, and the reply never came.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Screen recording", "SimpleScreenRecorder", "Linux", "Async work", "Documentation"],
  publishedAt: "2026-09-06",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Screen Recording: Why My How-To Went Unwatched",
  seoDescription:
    "A 10-minute screen recording took longer to make than writing the steps, and the teammate never replied. What a video costs the person receiving it.",
  pros: [
    "Shows the actual screen, so there is no gap between what you describe and what the other person sees",
    "SimpleScreenRecorder is free, GPL v3, and installs from the repositories on most Linux distributions",
    "Good for a thing that is hard to put in words, like a visual glitch or an exact sequence of clicks",
  ],
  cons: [
    "A video is slower to make than the equivalent message, and that cost is invisible until you have paid it",
    "Nobody can skim 10 minutes of video, so a busy reader puts it off and then forgets",
    "You cannot copy a command out of a recording, search it, or correct one line of it afterwards",
  ],
  content: `
<p>I do not record my screen often, so this is one job rather than a practice. It is worth writing up because it went the opposite way to what the tool promised.</p>

<p>I recorded a how-to for a teammate with SimpleScreenRecorder on my Linux machine, and the finished clip ran about 10 minutes. Making it took me longer than typing the same steps out would have, between setting up the recording and getting through it. Then nothing happened. No reply at all. I do not know whether it was ever opened, and the question I had answered stayed open.</p>

<h2>What the job actually looked like</h2>
<ol>
<li>I decided a video would be quicker than writing the steps. This was the wrong call and it was the only decision that mattered.</li>
<li>I installed and set up the recorder, picked the capture area and checked the audio before starting.</li>
<li>I walked through the steps on screen in one pass, at the speed a person talks, which is far slower than the speed a person reads.</li>
<li>I ended up with a file of about 10 minutes, sent it, and waited.</li>
<li>No reply came. The steps were never confirmed as followed, so the handover did not happen.</li>
</ol>

<h2>The cost sits with the person receiving it</h2>
<p>A written set of steps can be skimmed in 20 seconds, searched for the one command you forgot, and pasted from. A 10-minute video asks for 10 uninterrupted minutes before it gives up anything at all, and it gives nothing back in a search. Someone busy will put that aside for later, and later does not reliably arrive.</p>
<p>I was weighing my own effort when I made the clip. The recording moved the work onto the other person instead, and neither of us had agreed to that.</p>

<h2>About the tool itself</h2>
<p>SimpleScreenRecorder is a free program by Maarten Baert, GPL v3, packaged for Arch, Debian, Fedora, Gentoo and Ubuntu among others. It recorded exactly what I asked it to. The tool worked; the decision to use it was mine, and that is the part that failed.</p>

<h2>When a recording is still the right call</h2>
<p>Record when the thing is genuinely visual and short: a glitch you cannot put in words, or a sequence of clicks where the order matters. Keep it under about two minutes, and write the steps underneath it anyway so the video is the illustration and not the only copy.</p>
<p>For anything that is really a list of instructions, type the list. I would have been finished sooner, and I would have had a reply. The same instinct applies to sending anyone a file at all: I think about what the person on the other end has to do with it, which is also how I ended up <a href="/articles/pdf-tools-beyond-the-browser">choosing where to merge a PDF</a>.</p>
`,
  sources: [
    {
      title: "SimpleScreenRecorder",
      publisher: "Maarten Baert",
      url: "https://www.maartenbaert.be/simplescreenrecorder/",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I recorded a how-to for a teammate with SimpleScreenRecorder on my Linux machine, and the finished clip ran about 10 minutes. Making it took me longer than typing the same steps out would have, between setting up the recording and getting through it. Then nothing happened. No reply at all. I do not know whether it was ever opened, and the question I had answered stayed open.",
  },
};
