import type { Article } from "@/content/types";

/**
 * Setup log. First-person facts are Palak's own (chat, 2026-09-29): Claude Pro
 * at $20/month, connected Gmail, Calendar and Drive, setup 5 to 15 minutes,
 * slowed by Google's permission checkboxes, uses it daily for email summaries
 * and schedule checks. Everything else is from Anthropic's help page.
 */
export const connectGmailCalendarDriveToClaudePro: Article = {
  slug: "connect-gmail-calendar-drive-to-claude-pro",
  title: "How I Connected Gmail and Calendar to Claude Pro",
  excerpt:
    "The steps to connect Gmail, Google Calendar and Google Drive to Claude, what each one can reach, and the Google permission screen that slowed me down.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Connectors", "Gmail", "Google Calendar", "Google Drive"],
  publishedAt: "2026-09-29",
  pros: [
    "All three Google connectors took me 5 to 15 minutes in total",
    "Email summaries and schedule checks are the two jobs I now give it every day",
    "By default Claude asks for your approval before it sends, replies to or forwards an email",
    "Anthropic lists the Google connectors as available to all Claude users",
  ],
  cons: [
    "Google's permission screen shows a lot of checkboxes and does not say which ones Claude needs",
    "Gmail gives Claude the details of an attachment, not what is inside it",
    "Drive cannot read images placed inside a document",
    "On a Team or Enterprise plan you wait for an Owner to switch the connectors on",
  ],
  content: `
<p>The Google permission screen was the only part of this setup that slowed me down. The rest is a few clicks inside Claude.</p>

<p>I pay $20 a month for Claude Pro, and I connected Gmail, Google Calendar and Google Drive to it on my own account. The whole setup took me somewhere between 5 and 15 minutes. Most of that time went on Google's permission screen, which showed too many checkboxes and did not make it clear which ones I needed to tick. Now I use it every day to summarise my emails and check my schedule.</p>

<h2>Before you start</h2>
<p>You need a Claude account and the Google account you want Claude to read. Anthropic's help page says the Gmail, Calendar and Drive connectors are available to all Claude users (checked 29 September 2026). I did it on Pro, which is $20 billed monthly or $17 a month if you pay $200 for the year.</p>
<p>If your Claude seat belongs to a Team or Enterprise plan, you cannot switch these on yourself. An Owner has to enable them first.</p>

<h2>The setup, in order</h2>
<ol>
<li>Open claude.ai or the Claude desktop app. Go to <code>Customize</code>, then <strong>Connectors</strong>.</li>
<li>Find Gmail and click <strong>Connect</strong>. Claude sends you to Google to sign in.</li>
<li>Choose the Google account. If your browser is signed in to more than one, check the address on screen before you carry on.</li>
<li>Google's consent screen appears. This is where I lost most of my time. It lists several permissions with checkboxes, and nothing on the page explains which Claude task needs which one. Anthropic's help page says the screen mentions sending email. Claude can send, reply and forward, but by default it asks for your approval each time.</li>
<li>Back in Claude, do the same for Google Calendar and Google Drive.</li>
<li>Start a new chat, click the plus sign, hover over <strong>Connectors</strong> and check the ones you want are switched on.</li>
</ol>

<h2>What each connector can reach</h2>
<p>Gmail can search and read your mail, write drafts, and manage labels. It sees an attachment's name and details but not its contents, so for a PDF someone emailed you, upload it to the chat or save it to Drive first.</p>
<p>Google Calendar can create, change and delete events, see shared calendars and find a time when several people are free.</p>
<p>Google Drive can search your files and read Docs, Sheets, Slides, PDFs and Office files. It cannot read images placed inside a document.</p>
<p>I only use the first two. I ask for a summary of my emails, and I ask what is on my calendar.</p>

<h2>If your inbox holds client or patient details</h2>
<p>If you are a doctor, a CA or anyone whose day runs on email and appointments, this setup is the first step before Claude can help with that work. Check your professional rules on patient or client data before you let any AI tool read your mail.</p>

<h2>Taking the access back</h2>
<p>In Claude, go to <code>Customize</code>, then <code>Connectors</code>, find the Google connector and click <strong>Disconnect</strong>. You can also remove Claude from the connections page in your Google account settings.</p>
`,
  humanReview: {
    reviewedAt: "2026-09-29",
    experience:
      "I pay $20 a month for Claude Pro, and I connected Gmail, Google Calendar and Google Drive to it on my own account. The whole setup took me somewhere between 5 and 15 minutes. Most of that time went on Google's permission screen, which showed too many checkboxes and did not make it clear which ones I needed to tick. Now I use it every day to summarise my emails and check my schedule.",
  },
  sources: [
    {
      title: "Use Google Workspace connectors",
      publisher: "Anthropic",
      url: "https://support.claude.com/en/articles/10166901-use-google-workspace-connectors",
      checkedAt: "2026-09-29",
    },
    {
      title: "Claude pricing",
      publisher: "Anthropic",
      url: "https://claude.com/pricing",
      checkedAt: "2026-09-29",
    },
  ],
};
