import type { Article } from "@/content/types";

/**
 * Comparison, rewritten on the URL first published 2026-09-02 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-09-30): Fireflies and Google Meet "Take notes", 2 meetings of about 30
 * minutes each, wrong names/speakers, missed Hindi/Gujarati. Language support
 * is from each vendor's page.
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
  contentUpdatedAt: "2026-09-30",
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
<p>Wrong speaker names are a separate problem. If the notes say the wrong person agreed to something, fix that before you send them on.</p>

<h2>Before you rely on one</h2>
<p>On Meet, the organiser's Workspace edition decides whether Take notes is there at all, so on someone else's call the choice may not be yours.</p>
<p>Run it on one low-stakes call in the languages you actually speak, then read the notes against your memory of the call. If you already connect your Google Calendar to an AI assistant, as in <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">my Claude Pro connector setup</a>, the notes are one more thing it can read, so they need to be right.</p>
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
