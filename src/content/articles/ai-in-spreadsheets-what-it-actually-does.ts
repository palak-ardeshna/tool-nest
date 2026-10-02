import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-09-14 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): used Gemini inside Google Sheets and also pasted sheet data into
 * Claude and ChatGPT; it did not understand the structure of his data, and it
 * was useful for small jobs but not larger ones, breaking down around 100 to 200
 * rows. He has not used Copilot in Excel, so it is not reviewed. The quoted
 * caveats, including the chart linking and conversation history behaviour, are
 * from Google's "Collaborate with Gemini in Google Sheets" help page, read
 * 2026-10-02.
 */
export const aiInSpreadsheetsWhatItActuallyDoes: Article = {
  slug: "ai-in-spreadsheets-what-it-actually-does",
  title: "Gemini in Sheets Lost My Data at 200 Rows",
  excerpt:
    "It wrote formulas fine and misread the shape of my sheet. Past 100 to 200 rows I stopped trusting what came back, and the charts do not update.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Google Sheets", "Gemini", "Spreadsheets", "Claude"],
  publishedAt: "2026-09-14",
  contentUpdatedAt: "2026-09-22",
  seoTitle: "Gemini in Sheets: Where It Stopped for Me",
  seoDescription:
    "Gemini in Sheets misread my data structure and stopped being useful past 100 to 200 rows. What Google's own page admits, including static charts.",
  faqs: [
    {
      question: "Is Gemini in Sheets accurate?",
      answer:
        "Google's own page says plainly that \"Gemini features may suggest inaccurate or inappropriate information\", and tells you not to rely on it as professional advice. Checked 2 October 2026. In my use the formulas were usually fine and the reading of my data was not.",
    },
    {
      question: "Why does it misread my columns?",
      answer:
        "In my sheets it treated the structure as simpler than it was: merged headers, a column that means something different after a certain row, a blank that means zero rather than missing. A person looking at the sheet sees those. The model gets a grid.",
    },
    {
      question: "Do the charts it builds stay up to date?",
      answer:
        "No. Google's page states that \"The generated chart doesn't link or respond to changes in the original data set\". So a generated chart is a picture of one moment, not a live view, and that is easy to miss.",
    },
    {
      question: "Why did my conversation disappear?",
      answer:
        "By design. The same page says \"You lose your conversation history when: You reload your browser. You close and reopen the spreadsheet.\" Anything you want to keep has to come out of the chat and into the sheet.",
    },
  ],
  content: `
<p>I have used Gemini inside Google Sheets, and I have also pasted sheet data into Claude and ChatGPT to get an answer out of it. The formulas it writes are mostly fine. What it got wrong was my data: it did not understand the structure of my sheets, and it stopped being useful once there was any real amount of data in them. For me the line was somewhere around 100 to 200 rows. Below that it helped, above that I stopped trusting what came back.</p>

<p>I have not used Copilot in Excel, so this is about Google's side and about pasting data into a chat window, which are the two things I have actually done.</p>

<h2>Structure is the thing it does not see</h2>
<p>A spreadsheet looks like a grid and carries far more than one. That gap is where my problems came from.</p>
<table>
<thead><tr><th>What is in my sheet</th><th>What a person sees</th><th>What came back</th></tr></thead>
<tbody>
<tr><td>A header that spans two columns</td><td>One label covering both</td><td>Treated as a label on one, blank on the other</td></tr>
<tr><td>A blank cell</td><td>Not recorded yet</td><td>Treated as zero in a sum</td></tr>
<tr><td>A column that changes meaning partway down</td><td>Obvious, because you remember why</td><td>One consistent column</td></tr>
<tr><td>More than 100 to 200 rows</td><td>Scroll and check</td><td>Answers I could not verify at a glance</td></tr>
</tbody>
</table>
<p>None of those are hard problems in a tidy sheet. Real sheets are not tidy, because they grow over months and carry decisions that were never written down anywhere. I know that a blank in one column means "not yet" and in another means "no". The model has no way to know that, and it does not ask.</p>
<p>Which makes the formula side the safe part and the analysis side the risky part. A formula I can read and test on three rows. An answer about my whole sheet I would have to redo by hand to check, and if I am redoing it by hand then the help was not help.</p>

<h2>Where the 100 to 200 rows comes from</h2>
<p>That number is not a documented limit. It is where checking the answer stopped being possible for me.</p>
<p>Under about a hundred rows I can look at the sheet and see whether an answer is plausible. A total that is obviously too big, a count that cannot be right, a category that should not appear. That glance is what makes the help usable, because it is a cheap check.</p>
<p>Past that, the glance stops working. I cannot eyeball whether a number derived from 400 rows is correct, so I either trust it or verify it properly, and verifying properly costs more than doing the work did. So it helps most on the sheets I could have handled anyway, and least on the ones big enough to be worth asking about.</p>

<h2>Two things in the documentation worth knowing before you rely on it</h2>
<p>Google's own page on Gemini in Sheets, read on 2 October 2026, is more candid than I expected, and two of its notes change how you should use the thing.</p>
<p>First, on charts: "The generated chart doesn't link or respond to changes in the original data set." So a chart it builds is a snapshot. If your data updates, the chart does not, and nothing on the chart tells you that. Anyone who assumes a Sheets chart is live, which is the normal assumption, can be looking at last week.</p>
<p>Second, on history: "You lose your conversation history when: You reload your browser. You close and reopen the spreadsheet." That makes it a scratchpad rather than a record. If the reasoning behind a number matters, it has to be written into the sheet, because the chat is not going to be there.</p>
<p>The page also states the general caveat: "Gemini features may suggest inaccurate or inappropriate information", and warns against relying on it as medical, legal or financial advice. On a sheet that is a bill or a tax number, that line is the whole decision.</p>

<h2>How I use it now</h2>
<p>For formulas, freely. Describing what I want in words and getting a formula back is faster than remembering the argument order, and I can test it on a few rows immediately.</p>
<p>For anything about the data itself, only on sheets small enough that I can check the answer by looking. And for anything where the number goes into something real, I do it myself, which is the same conclusion I reached about letting a model near my accounts in <a href="/articles/should-you-let-an-ai-agent-use-your-browser">what Comet did in my Gmail</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I have used Gemini inside Google Sheets, and I have also pasted sheet data into Claude and ChatGPT to get an answer out of it. The formulas it writes are mostly fine. What it got wrong was my data: it did not understand the structure of my sheets, and it stopped being useful once there was any real amount of data in them. For me the line was somewhere around 100 to 200 rows. Below that it helped, above that I stopped trusting what came back.",
  },
  sources: [
    {
      title: "Collaborate with Gemini in Google Sheets",
      publisher: "Google",
      url: "https://support.google.com/docs/answer/14356410",
      checkedAt: "2026-10-02",
    },
  ],
};
