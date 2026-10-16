import type { Article } from "@/content/types";

/**
 * Policy-change article (old/new table, worked example, FAQ), to differ from
 * the setup-log layout of the Canva article before it. Palak's facts (chat,
 * 2026-10-16): he has never built or used a custom GPT; he set up a Claude
 * Project on the free plan for the chartered accountant from the connectors
 * article; the CA used it for GST and income-tax questions, client email
 * drafts and questions about his documents; Palak tried to upload 10 to 15
 * files (client notices, GST circulars and notifications, scanned PDFs,
 * spreadsheets) and the project knowledge bar was full after 4 to 6; he kept
 * fewer files. No accuracy comparison: the GPT was never tested.
 * OpenAI's FAQ returns 403 to fetches, so retirement details come from the
 * two reports cited, read 2026-10-16. Claude limits from Anthropic's help
 * centre, read 2026-10-16.
 */
export const customGptsRetireClaudeProjectForACa: Article = {
  slug: "custom-gpts-retire-claude-project-for-a-ca",
  title: "Custom GPTs End on 11 December. Is a Claude Project the Swap for a CA?",
  excerpt:
    "OpenAI retires custom GPTs on 11 December 2026. I set up a free Claude Project for a chartered accountant instead, and its knowledge filled after 4 to 6 of his files.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "ChatGPT", "Custom GPTs", "Projects", "Accountants"],
  publishedAt: "2026-10-16",
  seoTitle: "Custom GPTs Retire: Claude Project for a CA?",
  seoDescription:
    "Custom GPTs stop running on 11 December 2026. What moves to OpenAI's plugins, and what a free Claude Project held for a CA: 4 to 6 files.",
  content: `
<p>I have not built a custom GPT, so everything on that side here comes from OpenAI's announcement as reported in September 2026. The Claude side I did myself. I set up a Claude Project on the free plan for a chartered accountant and tried to upload 10 to 15 of his files: client notices, GST circulars and notifications, some scanned PDFs and a few spreadsheets. The project knowledge bar was full after 4 to 6 of them, so I cut the list down and uploaded fewer files.</p>

<h2>What OpenAI is changing</h2>
<p>OpenAI announced on 11 September 2026 that custom GPTs will stop running on 11 December 2026. They are being replaced by plugins. Some Enterprise workspaces with an approved deferral get until 11 February 2027. Reports give different dates for when you can no longer create a new GPT, and they vary by plan, so check the notice in your own account.</p>
<table>
<thead><tr><th>Part of your GPT</th><th>Until 11 Dec 2026</th><th>After migrating to a plugin</th></tr></thead>
<tbody>
<tr><td>Instructions</td><td>Live in the GPT</td><td>Become a skill inside the plugin</td></tr>
<tr><td>Knowledge files</td><td>Attached to the GPT</td><td>Copied into the plugin's reference files</td></tr>
<tr><td>Connected apps</td><td>Work as before</td><td>Can be carried over</td></tr>
<tr><td>Custom Actions</td><td>Work as before</td><td>Do not transfer</td></tr>
<tr><td>Old conversations</td><td>In the GPT</td><td>Do not move into the plugin</td></tr>
<tr><td>Sharing</td><td>As you set it</td><td>Plugin starts private</td></tr>
</tbody>
</table>
<p>OpenAI also warns that "A migrated plugin may respond differently", so test the plugin on your usual questions before you rely on it.</p>

<h2>The Claude Project I set up instead</h2>
<p>The accountant is the same one I connected Gmail and Drive for in <a href="/articles/claude-connectors-for-a-chartered-accountant">my earlier piece on his connectors</a>. This time I put his reference documents in one Project. He used the Project for GST and income-tax questions, for drafting routine client emails, and for asking about the documents he had uploaded.</p>
<table>
<thead><tr><th>Claude Projects, read 16 Oct 2026</th><th>Free plan</th><th>Paid plans</th></tr></thead>
<tbody>
<tr><td>Number of Projects</td><td>Up to 5</td><td>No cap listed</td></tr>
<tr><td>When knowledge fills up</td><td>It stops there</td><td>Switches to retrieval, up to 10x more capacity</td></tr>
<tr><td>What held in my test</td><td>4 to 6 of 10 to 15 files</td><td>Not tested</td></tr>
</tbody>
</table>

<h2>A worked example: one CA's folder</h2>
<p>His folder was 10 to 15 files across four kinds: client notices, GST circulars, scanned PDFs and spreadsheets. On the free plan, the bar reached 100% after 4 to 6. Only part of the folder fits, and you pick which part.</p>
<p>Whatever you leave out, Claude cannot see when he asks a question about it.</p>
<p>Anthropic says paid plans switch to retrieval when knowledge nears the limit, which it describes as up to 10 times the capacity. I have not tested a paid plan, so I cannot tell you whether all 15 of his files would fit. If you pay for Claude, test with your own folder before moving everything over.</p>

<h2>What I would tell a CA with a GPT today</h2>
<p>If your GPT holds a handful of reference files, the free Claude Project is enough to try the move before 11 December. If it holds a full folder, budget for a paid plan or accept that you will be picking files. Do the move early: a migrated GPT and a new Claude Project both need retesting, and you want that done before the old one stops.</p>
`,
  faqs: [
    {
      question: "When do custom GPTs stop working?",
      answer:
        "On 11 December 2026, according to the reports I read on 16 October 2026. Some Enterprise workspaces with an approved deferral can keep them until 11 February 2027.",
    },
    {
      question: "Can I still create a new custom GPT?",
      answer:
        "The reports disagree on the cut-off date and say it varies by plan and workspace. Check the notice in your own ChatGPT account.",
    },
    {
      question: "Will my GPT's files survive the move?",
      answer:
        "Knowledge files are copied into the plugin's reference files when you migrate. Custom Actions and old conversations do not come across.",
    },
    {
      question: "How many files fit in a free Claude Project?",
      answer:
        "The Anthropic help page I read gives no file count. In my case the bar was full after 4 to 6 of a CA's 10 to 15 files, which included scanned PDFs and spreadsheets.",
    },
  ],
  sources: [
    {
      title: "What are projects?",
      publisher: "Anthropic",
      url: "https://support.claude.com/en/articles/9517075",
      checkedAt: "2026-10-16",
    },
    {
      title: "OpenAI to Retire Custom GPTs, Replace Them with Plugins",
      publisher: "Virtualization Review",
      url: "https://virtualizationreview.com/articles/2026/09/28/openai-to-retire-custom-gpts-replace-them-with-plugins.aspx",
      checkedAt: "2026-10-16",
    },
    {
      title: "OpenAI Is Retiring Custom GPTs: What Happens to Yours",
      publisher: "Sherise Adkins",
      url: "https://www.sheriseadkins.com.au/blog/openai-retiring-custom-gpts",
      checkedAt: "2026-10-16",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-16",
    experience:
      "I have not built a custom GPT, so everything on that side here comes from OpenAI's announcement as reported in September 2026. The Claude side I did myself. I set up a Claude Project on the free plan for a chartered accountant and tried to upload 10 to 15 of his files: client notices, GST circulars and notifications, some scanned PDFs and a few spreadsheets. The project knowledge bar was full after 4 to 6 of them, so I cut the list down and uploaded fewer files.",
  },
};
