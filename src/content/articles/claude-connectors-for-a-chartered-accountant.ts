import type { Article } from "@/content/types";

/**
 * New article, not a queue rewrite. Palak's own facts (chat, 2026-10-02): he
 * set up Gmail, Google Drive and Google Calendar connectors for a chartered
 * accountant; the mailbox held about 5 years of correspondence; the work was
 * finding old email quickly, drafting replies and pulling figures out of
 * documents; and the retrieval was incomplete, returning some of a related set
 * of emails but not all of it. The permission and setup steps are deliberately
 * left to the existing connector article so the two do not overlap. The
 * confidentiality section is framed as advice, not as a worry Palak reported.
 */
export const claudeConnectorsForACharteredAccountant: Article = {
  slug: "claude-connectors-for-a-chartered-accountant",
  title: "Claude Connectors for a Chartered Accountant",
  excerpt:
    "I connected Gmail, Drive and Calendar for a chartered accountant with about 5 years of mail. The searching is the point, and incomplete searching is the thing nobody warns you about.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Connectors", "Chartered accountants", "Gmail", "Search"],
  publishedAt: "2026-10-02",
  seoTitle: "Claude Connectors for a CA: What I Found",
  seoDescription:
    "Gmail, Drive and Calendar connected for a chartered accountant with about 5 years of email. Retrieval returned part of a set, not all of it.",
  content: `
<p>A chartered accountant's working day is mostly lookup. Which client said what, in which month, against which document. That is the job I was trying to make faster, and it is a better test of a connector than any demo.</p>

<p>I set up the Gmail, Google Drive and Google Calendar connectors for a chartered accountant, on a mailbox holding about 5 years of correspondence. What he needed was to find old email quickly, get help drafting routine replies, and pull figures out of documents. The part that worked least well is the part the whole thing rests on: when I asked for a set of related emails, it came back with some of them and not all of them. Not an error, not a refusal, just a shorter answer than the truth.</p>

<h2>Why a partial answer is worse than no answer</h2>
<p>If a search returns nothing, you keep looking. If it returns three things when five exist, you stop. The answer looks complete because nothing about it says otherwise, and a professional acting on it is now missing two documents without knowing there were two.</p>
<p>For a lot of work that is a minor annoyance. For somebody whose output is a filing with a deadline, it is the difference between a complete record and an incomplete one, and the tool cannot tell you which you have.</p>

<h2>How to use it anyway</h2>
<p>Treat retrieval as a first pass, not an authority. It is genuinely quick at surfacing the thread you half remember from two years ago, and quick is the entire value when the alternative is scrolling. What it cannot do is assure you that what it showed you is everything.</p>
<p>So the workflow that survives contact with real work is: ask it to find, then verify the count yourself in the mailbox before anything leaves the office. That sounds like it undoes the time saved. It does not, because finding the thread is the slow part and counting a known set is fast.</p>

<h2>Five years is a lot of mail</h2>
<p>About 5 years of a working mailbox is the condition this has to succeed in, and it is not the condition anybody demonstrates. A fresh inbox with a few hundred messages will behave perfectly. The question is what happens across years of threads, forwards, re-sent attachments and the same client name appearing in a hundred unrelated contexts, and the honest answer from this setup is: well enough to be useful, not well enough to be trusted on completeness.</p>

<h2>Before you connect a professional's mailbox</h2>
<p>One thing worth saying plainly, separate from anything I measured. A chartered accountant's mailbox is not their own data. It holds other people's financial affairs, and connecting it is a decision about somebody else's confidentiality, not a convenience setting. That should be a deliberate conversation with the person whose practice it is, not something arranged because it saves an afternoon.</p>
<p>The mechanics of connecting the three, and the permission screen that slows the process down, are in <a href="/articles/connect-gmail-calendar-drive-to-claude-pro">the setup walkthrough I wrote earlier</a>. This piece is about what happened afterwards, which is the part the setup guides do not cover.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I set up the Gmail, Google Drive and Google Calendar connectors for a chartered accountant, on a mailbox holding about 5 years of correspondence. What he needed was to find old email quickly, get help drafting routine replies, and pull figures out of documents. The part that worked least well is the part the whole thing rests on: when I asked for a set of related emails, it came back with some of them and not all of them. Not an error, not a refusal, just a shorter answer than the truth.",
  },
};
