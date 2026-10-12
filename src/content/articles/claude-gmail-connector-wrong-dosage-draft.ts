import type { Article } from "@/content/types";

/**
 * New article, not a queue rewrite. Palak's own facts (chat, 2026-10-12):
 * same doctor he set up Gmail/Calendar/Drive connectors for in
 * claude-pro-for-a-doctor-busy-day-limit; the doctor used Claude's Gmail
 * connector to draft reply emails; setup for that connector took 30 to 40
 * minutes; a drafted reply came back with the wrong medication dose, and the
 * doctor caught it while reviewing the draft before sending, never sent it
 * wrong. Explainer/gotcha layout (plain sections, no quickAnswer, no
 * pros/cons, no FAQ), to differ from the short-take Grammarly piece
 * published earlier the same day. No real patient detail is used; the dose
 * itself is never stated, only that it was wrong. Anthropic's usage policy
 * wording verified via WebFetch of anthropic.com/legal/aup, 2026-10-12.
 */
export const claudeGmailConnectorWrongDosageDraft: Article = {
  slug: "claude-gmail-connector-wrong-dosage-draft",
  title: "Claude Drafted a Patient Reply With the Wrong Dose",
  excerpt:
    "The Gmail connector I set up for a doctor drafted a reply with an incorrect medication dose. He caught it on review, before it went out.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Connectors", "Doctors", "Gmail", "Safety"],
  publishedAt: "2026-10-12",
  seoTitle: "Claude's Gmail Connector Got a Dose Wrong",
  seoDescription:
    "Claude's Gmail connector drafted a patient reply with the wrong medication dose. The doctor caught it on review, before it was sent.",
  content: `<p>I set up Claude's Gmail connector for the doctor, which took 30 to 40 minutes, so he could draft replies without opening a separate inbox tab. One of those drafts came back with the wrong dose. He reads every draft before sending, which is how he caught it. The connector had written a reply referencing a medication, and the amount it gave was not the amount in the patient's file. He fixed the number and sent the corrected version. Nothing wrong went to the patient, but the draft he almost sent had the dose wrong.</p>

<h2>Why a review step is not optional here</h2>
<p>Anthropic's own usage policy treats this exact case as high risk. It lists "recommending, starting, stopping, or adjusting a treatment or medication, including dose" as a high-risk area, and requires that "a qualified person must meaningfully review" any such output, with the authority to change it, before it reaches anyone who might act on it. A drafted reply that mentions a dose falls inside that rule, whether it came from a connector or from typing the reply directly.</p>
<p>The Gmail connector does not know a dose is a dose. It reads the thread for context and writes a plausible-sounding reply, and a dosage figure is just another number in the text to it. Nothing in the setup flags that field as one to double-check, so the catching has to happen on the human side every time, not some of the time.</p>

<h2>What changed, step by step</h2>
<p>He still drafts replies with the connector. He has not stopped, because it is faster than starting from a blank message for the routine ones. What changed is which replies get a closer read before he sends them:</p>
<ol>
<li>He still lets the connector draft the reply from the thread, same as before.</li>
<li>Before approving it, he now checks whether the draft mentions a dose, a date to stop or start something, or any other number tied to the patient's treatment.</li>
<li>If it does, he checks that number against the patient's file directly, rather than reading the draft for tone the way he does the rest of his mail.</li>
</ol>
<p>If you are reading patient or client mail through a connector like this, treat any number tied to someone's treatment as one to verify against the record, not one to skim past because the sentence around it reads fine. I covered the setup for these connectors in <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">how to connect Gmail, Calendar and Drive to Claude Pro</a>, and the usage limit this doctor also ran into is in <a href="/articles/claude-pro-for-a-doctor-busy-day-limit">Claude Pro for a doctor: the busy-day limit</a>. Neither piece covers this, because the dose error happened after both were written.</p>`,
  sources: [
    {
      title: "Usage Policy",
      publisher: "Anthropic",
      url: "https://www.anthropic.com/legal/aup",
      checkedAt: "2026-10-12",
    },
    {
      title: "Use Google Workspace connectors",
      publisher: "Anthropic",
      url: "https://support.claude.com/en/articles/10166901-use-google-workspace-connectors",
      checkedAt: "2026-10-12",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-12",
    experience:
      "I set up Claude's Gmail connector for the doctor, which took 30 to 40 minutes, so he could draft replies without opening a separate inbox tab. One of those drafts came back with the wrong dose. He reads every draft before sending, which is how he caught it. The connector had written a reply referencing a medication, and the amount it gave was not the amount in the patient's file. He fixed the number and sent the corrected version. Nothing wrong went to the patient, but the draft he almost sent had the dose wrong.",
  },
};
