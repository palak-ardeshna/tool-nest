import type { Article } from "@/content/types";

/**
 * Comparison, rewritten on the URL first published 2026-09-02 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-09-30): Fireflies and Google Meet "Take notes", 2 meetings of about 30
 * minutes each, wrong names/speakers, missed Hindi/Gujarati; Fireflies did a
 * little better than Meet on the Hindi and Gujarati stretches (chat,
 * 2026-10-02). Language support is from each vendor's page.
 */
export const aiMeetingNotetakersCompared: Article = {
  slug: "ai-meeting-notetakers-compared",
  title: "AI Meeting Notetakers Compared: Fireflies and Google Meet in Hindi and Gujarati",
  excerpt:
    "I ran Fireflies and Google Meet's Take notes on two real calls. They mixed up who said what, and they lost the Hindi and Gujarati parts.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Fireflies", "Google Meet", "Meeting Notes", "Hindi", "Gujarati"],
  publishedAt: "2026-09-02",
  contentUpdatedAt: "2026-09-11",
  seoTitle: "AI Notetakers in Hindi: Fireflies vs Meet",
  seoDescription:
    "Fireflies and Google Meet's Take notes on two 30 minute calls: wrong speakers, and Hindi and Gujarati lost. What each vendor says it supports.",
  pros: [
    "Meet's Take notes is built into Meet, so no extra bot joins the call",
    "Fireflies lists Spanish, French, Portuguese, Italian and 100+ more languages in beta",
    "Both gave me written notes without anyone typing during the call",
  ],
  cons: [
    "Names and speakers came out wrong in my notes",
    "The Hindi and Gujarati parts of my calls were missed",
    "Meet's Take notes lists 8 languages, and Hindi and Gujarati are not among them",
    "Fireflies calls every language except English beta",
    "Neither tool marks the stretches it could not follow, so the notes look complete",
  ],
  content: `
<p>If your calls switch between English and Hindi or Gujarati, check the language list before you trust an AI notetaker. Mine did not handle it.</p>

<p>I tried two AI notetakers on my own calls: Fireflies and the Take notes feature in Google Meet. I used them on 2 meetings, each about 30 minutes long. Across those calls I hit two problems. The notes mixed up names and who was speaking. And they missed the parts of the conversation that were in Hindi or Gujarati rather than English.</p>

<h2>What each tool says it supports</h2>
<table>
<thead><tr><th></th><th>Google Meet, Take notes</th><th>Fireflies</th></tr></thead>
<tbody>
<tr><td>How it joins</td><td>Built into Meet</td><td>Joins your call as a notetaker</td></tr>
<tr><td>Languages listed</td><td>8: English, French, German, Italian, Japanese, Korean, Portuguese, Spanish</td><td>English first; Spanish, French, Portuguese, Italian and 100+ others "in beta"</td></tr>
<tr><td>Hindi / Gujarati</td><td>Not listed</td><td>Not named; would fall under beta</td></tr>
<tr><td>Who can use it</td><td>An eligible Workspace edition or Google AI plan, held by the meeting organiser</td><td>Free plan, with more transcription credits on Pro and Business</td></tr>
</tbody>
</table>
<p>Both lists were checked on 30 September 2026.</p>

<h2>Why the Hindi and Gujarati parts went missing</h2>
<p>Google's list matches what I saw from Meet: Hindi and Gujarati are not on it. Fireflies does not name them either, and it describes everything outside English as beta.</p>
<p>The two were not equally bad, though. Fireflies did a little better on those stretches. It picked up something from the Hindi and Gujarati parts. Meet gave me nothing from them at all, as if those minutes of the call had not happened. Neither produced notes I would send to anyone, so this is a difference of degree. I am not recommending either one. If your calls are bilingual and you have to pick one of these two today, Fireflies is the one that at least tries.</p>
<p>It also explains the shape of what came back. A notetaker that drops the sections it cannot follow leaves a transcript that looks complete. There is no gap, no marker, no note saying it stopped understanding here. The English sentence before the Gujarati stretch sits next to the English sentence after it. Read the notes without having been on the call and you would never know a decision had been discussed in between. That is worse than an obvious blank, because a blank tells you to go and check.</p>
<p>Wrong speaker names are a separate problem, and in my notes it was the more dangerous one. The words were roughly there; they were attached to the wrong person. A line saying the wrong colleague committed to a date is a claim about who agreed to what, which makes it more than a transcription slip. If the notes say the wrong person agreed to something, fix that before you send them on.</p>

<h2>Before you rely on one</h2>
<p>On Meet, the organiser's Workspace edition decides whether Take notes is there at all, so on someone else's call the choice may not be yours.</p>
<p>Run it on one low-stakes call in the languages you actually speak, then read the notes against your memory of the call. Two calls was enough for me to see both faults, so you do not need a long trial. You need one call you were paying attention to, because the test is not whether the notes read well. It is whether they match what you remember happening.</p>
<p>Three things I would check on that call. Did it get the names right, and did it put the right words against the right name. Did anything said in a language other than English make it into the notes at all. And are there any decisions in the notes that you do not remember being made, which is the failure that comes from a tool stitching two halves of a conversation together across a gap it did not report.</p>
<p>If the answer to any of those is no, the notes are a draft that still needs checking before anyone treats them as the record. I still had to read them against my own memory of a 30 minute call, which is most of the work I wanted to avoid. For a call where it matters who said what, write your own three lines at the end instead.</p>
<p>If you already connect your Google Calendar to an AI assistant, as in <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">my Claude Pro connector setup</a>, the notes are one more thing it can read, so they need to be right. A wrong name in a transcript stops being a typo once something else starts quoting it back to you.</p>
`,
  humanReview: {
    reviewedAt: "2026-09-30",
    experience:
      "I tried two AI notetakers on my own calls: Fireflies and the Take notes feature in Google Meet. I used them on 2 meetings, each about 30 minutes long. Across those calls I hit two problems. The notes mixed up names and who was speaking. And they missed the parts of the conversation that were in Hindi or Gujarati rather than English.",
  },
  sources: [
    {
      title: "Take notes for me in Google Meet",
      publisher: "Google",
      url: "https://support.google.com/meet/answer/14754931",
      checkedAt: "2026-09-30",
    },
    {
      title: "Fireflies pricing",
      publisher: "Fireflies.ai",
      url: "https://fireflies.ai/pricing",
      checkedAt: "2026-09-30",
    },
  ],
};
