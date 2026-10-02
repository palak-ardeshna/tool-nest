import type { Article } from "@/content/types";

/**
 * Explainer with an FAQ, rewritten on the URL first published 2026-09-09 (old
 * text deleted 2026-09-29, not restored). Palak's own facts (chat, 2026-10-02):
 * he used iLovePDF on the web, merged and split a job of 20 or more files in
 * about 5 minutes, pulled text and tables out of a PDF and the output came out
 * fine, and the free tier stopped him on a size or count limit partway through.
 * He has used it lightly, not set it up for a client, and the article says so.
 * The published free limits (100 MB and 25 documents per merge task, 5 pages
 * for reordering) are from iLovePDF's pricing page, read 2026-10-02; Palak
 * did not record which number stopped him, so none is attributed to his run.
 */
export const pdfToolsBeyondTheBrowser: Article = {
  slug: "pdf-tools-beyond-the-browser",
  title: "Free PDF Tools and Where They Stop You",
  excerpt:
    "iLovePDF handled a merge of more than 20 files in about 5 minutes and pulled tables out cleanly. Then the free tier hit its limit mid-job, which is worth knowing before you put a client's file in it.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["PDF", "iLovePDF", "Free tools", "Documents", "Privacy"],
  publishedAt: "2026-09-09",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Free PDF Tools: Where iLovePDF Stops You",
  seoDescription:
    "A merge of 20-plus files in about 5 minutes, clean table extraction, and the free-tier limit that stopped the job partway.",
  faqs: [
    {
      question: "Is the browser enough on its own?",
      answer:
        "For reading, filling a form and printing to PDF, yes. Chrome does all three with nothing installed. It will not merge two files into one or pull a table into a spreadsheet, which is the point where people go looking for a tool.",
    },
    {
      question: "What does iLovePDF allow on the free plan?",
      answer:
        "Its pricing page lists 100 MB for Merge PDF against 4 GB on Premium, and 25 documents per merge task against 500. Reordering pages is capped at 5 on free and 20 on Premium. Compress PDF allows 200 MB free. Those are the numbers as published on 2 October 2026.",
    },
    {
      question: "Does a free web tool work on a scanned document?",
      answer:
        "Only if the scan has a text layer. A photographed or scanned page without one is an image, and text extraction returns nothing useful until it has been through OCR. My own file had a text layer, so this did not come up.",
    },
    {
      question: "What should a doctor or an accountant watch for?",
      answer:
        "Where the file goes. A web tool works by receiving your document on someone else's server. For a patient record or a client's return that is a decision to make on purpose, not a default, and a desktop program keeps the file on your own disk instead.",
    },
  ],
  sources: [
    {
      title: "iLovePDF Pricing",
      publisher: "iLovePDF",
      url: "https://www.ilovepdf.com/pricing",
      checkedAt: "2026-10-02",
    },
  ],
  content: `
<p>I have used iLovePDF on and off, not set it up for anyone, so take this as a light test rather than a full one. What I can report is what it did on my own files, and where it stopped.</p>

<p>I used iLovePDF in the browser to merge and split a job of more than 20 files, and it was done in about 5 minutes. I also pulled text and tables out of a PDF with it, and that output came out fine, which is the part I expected to go wrong. Partway through the work the free tier stopped me on its limit. That is the thing I would want to know in advance, because the job was already half done when it happened.</p>

<h2>Where the browser runs out</h2>
<p>Chrome reads a PDF, fills a form and prints anything to PDF. That covers most of what people think they need a tool for. It stops at two jobs: putting several files into one, and getting the contents back out as text. Both of those are the reason anyone opens a web tool in the first place.</p>

<h2>The free limits iLovePDF publishes</h2>
<p>iLovePDF publishes its free caps rather than hiding them. On 2 October 2026 its pricing page lists Merge PDF at 100 MB and 25 documents per task on the free plan, against 4 GB and 500 on Premium. Reordering pages allows 5 on free and 20 on Premium. Compress PDF allows 200 MB.</p>
<p>A merge of 20-odd files sits right at the edge of that 25-document figure. The caps themselves are fair enough for a free plan. The trouble is that you meet them in the middle of a task rather than before you start one, so count the files first.</p>

<h2>Where the file goes</h2>
<p>A web tool works by taking your document onto its server. For a holiday itinerary that is nothing. For a patient list, a client's accounts or anything covered by a professional duty, it is a decision, and most people make it without noticing they have. A desktop program does the same merge with the file never leaving your machine, and on Linux that is already installed in most cases. The same reasoning sent me to <a href="/articles/running-ai-models-on-your-own-hardware">a model running on my own laptop</a> for documents I would rather not hand over.</p>
<p>I use the web tool when the file is mine and boring. I would not put a client's document through it to save a download.</p>

<h2>What to try first</h2>
<p>Open the file in your browser. If reading, filling or printing is all you need, stop there. If you need to merge or extract, count the files and check them against the published free limits before you upload anything, and if the document belongs to someone else, do the job on your own machine instead.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I used iLovePDF in the browser to merge and split a job of more than 20 files, and it was done in about 5 minutes. I also pulled text and tables out of a PDF with it, and that output came out fine, which is the part I expected to go wrong. Partway through the work the free tier stopped me on its limit. That is the thing I would want to know in advance, because the job was already half done when it happened.",
  },
};
