import type { Article } from "@/content/types";

/**
 * New article, not a queue rewrite. Palak's own facts (chat, 2026-10-06): he
 * set up the Gmail, Google Calendar and Google Drive connectors in Claude Pro
 * for a doctor (anonymous, Palak's choice); the doctor used it for reading
 * email, appointments, finding Drive documents and drafting replies and notes;
 * it saved about 30 minutes a day; on busy clinic days the Pro usage limit ran
 * out and they had to wait for the reset. Explainer + FAQ layout, so it differs
 * from the Higgsfield short take before it and the CA explainer in the same
 * cluster. The "ways to stretch it" section is advice from Anthropic's docs,
 * not something the doctor was reported to have done.
 */
export const claudeProForADoctorBusyDayLimit: Article = {
  slug: "claude-pro-for-a-doctor-busy-day-limit",
  title: "Claude Pro for a Doctor: The Busy-Day Limit",
  excerpt:
    "I connected Gmail, Calendar and Drive to Claude Pro for a doctor. It saved about 30 minutes a day, and the usage limit ran out on busy clinic days.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Connectors", "Doctors", "Usage limits", "Gmail"],
  publishedAt: "2026-10-06",
  seoTitle: "Claude Pro for a Doctor: The Busy-Day Limit",
  seoDescription:
    "Gmail, Calendar and Drive connected to Claude Pro for a doctor saved about 30 minutes a day. On busy clinic days the usage limit ran out first.",
  content: `
<p>The busiest clinic day is when a doctor has the least time to wait for software. It is also when Claude Pro stopped for the doctor I set it up for.</p>

<p>I set up the Gmail, Google Calendar and Google Drive connectors in Claude Pro for a doctor. They used it for four jobs: reading and sorting email, checking appointments, finding documents in Drive, and drafting replies and notes. It saved them about 30 minutes a day. The problem showed up on busy clinic days. On those days the Pro usage limit ran out, and they had to wait for the reset before they could carry on with any of the four jobs.</p>

<h2>Why the limit goes first on the heavy days</h2>
<p>Claude Pro does not give you a fixed number of messages. Anthropic describes the limit as a usage budget that refreshes after a set period, and its help page says connected tools are "token-intensive". Longer conversations cost more as well.</p>
<p>Put those together with a clinic. A quiet day means a few short questions about the calendar. A busy day means more email to sort, more appointments to move, more files to dig out of Drive, and more replies to draft. Every one of those calls a connector. So the budget drains fastest on the days with the most work, and the wait for the reset lands in the middle of a full waiting room.</p>

<h2>What I would set up differently next time</h2>
<p>These are my suggestions, based on Anthropic's notes about what uses the budget. The doctor has not tried them yet.</p>
<ul>
<li>Start a fresh chat for each job. One long thread that covers the morning inbox, the afternoon calendar and three letters costs more than three short ones.</li>
<li>Run the big inbox sort early, before the clinic fills up, so the heavy connector work is done while there is budget to spare.</li>
<li>Keep plain drafting away from the connectors. A reply that only needs a few lines of context can be written without Claude searching Gmail first.</li>
<li>Know the fallback before the day it is needed. Pro subscribers can buy extra usage credits, and that is a decision better made calmly than at 4 pm with the limit hit.</li>
</ul>

<h2>Patient mail needs a separate decision</h2>
<p>A doctor's inbox holds other people's health information. Connecting it to any assistant is a choice about patients' privacy, and it is worth talking through with the doctor before the first sign-in.</p>
<p>Two details from Anthropic's connector page are worth knowing here. Gmail access covers the message and its metadata, but Claude cannot read attachment content through it, so a lab report sent as a PDF attachment stays out of reach unless it is also in Drive. And sending or forwarding mail needs your approval by default, which I would leave switched on.</p>
<p>The same three connectors behaved differently for <a href="/articles/claude-connectors-for-a-chartered-accountant">an accountant with 5 years of mail</a>, where the weak spot was incomplete search results. If you are still at the sign-in and permissions stage, <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">the connection steps are in a separate piece</a>.</p>
`,
  faqs: [
    {
      question: "Do Claude connectors use up the Pro limit faster?",
      answer:
        "Yes. Anthropic's help page lists connected tools as token-intensive, so a chat that searches Gmail or Drive costs more of the budget than a plain question.",
    },
    {
      question: "What happens when a doctor hits the Claude Pro limit mid-clinic?",
      answer:
        "Claude stops answering until the usage budget refreshes. On Pro you can also buy extra usage credits if waiting is not an option.",
    },
    {
      question: "Can Claude read lab reports attached to emails?",
      answer:
        "Not through the Gmail connector. Anthropic says it reads message metadata but not attachment content, so the file has to be in Google Drive for Claude to open it.",
    },
  ],
  sources: [
    {
      title: "How do usage and length limits work?",
      publisher: "Anthropic",
      url: "https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits",
      checkedAt: "2026-10-06",
    },
    {
      title: "Use Google Workspace connectors",
      publisher: "Anthropic",
      url: "https://support.claude.com/en/articles/10166901-use-google-workspace-connectors",
      checkedAt: "2026-10-06",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-06",
    experience:
      "I set up the Gmail, Google Calendar and Google Drive connectors in Claude Pro for a doctor. They used it for four jobs: reading and sorting email, checking appointments, finding documents in Drive, and drafting replies and notes. It saved them about 30 minutes a day. The problem showed up on busy clinic days. On those days the Pro usage limit ran out, and they had to wait for the reset before they could carry on with any of the four jobs.",
  },
};
