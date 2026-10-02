import type { Article } from "@/content/types";

/**
 * Explainer with alternatives, rewritten on the URL first published 2026-09-07
 * (old text deleted 2026-09-29, not restored). Palak's own facts (chat,
 * 2026-10-02): a sheet holding invoices, payments and product data silently
 * changed the format of numbers and dates, so totals and sorting went wrong;
 * the file took about 30 seconds to open; he moved it to Firebase and queries
 * now return immediately. This is a job he did properly, so the article speaks
 * in the first person throughout. Firestore Spark limits are from Firebase's
 * pricing page, read 2026-10-02.
 */
export const whenASpreadsheetBecomesADatabase: Article = {
  slug: "when-a-spreadsheet-becomes-a-database",
  title: "The Spreadsheet Changed My Numbers Without Telling Me",
  excerpt:
    "A sheet holding invoices and stock quietly reformatted amounts and dates, so the totals stopped being true. It also took about 30 seconds to open. That is the point a database stops being overkill.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Spreadsheets", "Firebase", "Firestore", "Accounts", "Data"],
  publishedAt: "2026-09-07",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "When a Spreadsheet Should Become a Database",
  seoDescription:
    "A sheet of invoices and stock reformatted its own numbers and dates and took 30 seconds to open. What moving it to Firebase fixed, and what it cost.",
  alternatives: [
    {
      name: "Firebase (Firestore)",
      url: "https://firebase.google.com/pricing",
      note: "What I moved to. The free Spark plan allows 1 GiB stored, 50K document reads and 20K writes a day, read 2026-10-02.",
    },
    {
      name: "Supabase",
      url: "https://supabase.com/pricing",
      note: "Postgres underneath, so SQL and proper column types. I did not use it for this job.",
    },
    {
      name: "Airtable",
      url: "https://airtable.com/pricing",
      note: "Still looks like a grid, with real field types behind it. Closest thing to staying put.",
    },
    {
      name: "MySQL on your existing hosting",
      note: "Already paid for on most shared hosting plans, and nothing leaves the server you control.",
    },
  ],
  sources: [
    {
      title: "Firebase Pricing",
      publisher: "Google",
      url: "https://firebase.google.com/pricing",
      checkedAt: "2026-10-02",
    },
  ],
  content: `
<p>Most advice about spreadsheets and databases argues about row counts. Mine never got that far. The sheet broke in a quieter way, and it broke the data rather than the file.</p>

<p>I had a sheet holding invoices, payments and product data, and it started changing the format of my numbers and dates on its own. Amounts and dates stopped being stored the way I entered them, so totals came out wrong and sorting put rows in an order that meant nothing. The file also took about 30 seconds just to open. I moved the whole thing into Firebase, and queries that used to mean waiting for the sheet now come back immediately.</p>

<h2>Slowness is annoying, silent edits are dangerous</h2>
<p>A slow file is a thing you can see. You wait, you complain, you carry on. A reformatted amount is invisible. The row still looks like a row. The total at the bottom is simply wrong, and there is no error anywhere to tell you so.</p>
<p>For invoices and stock that is the whole problem. If you cannot trust the sum, the sheet has stopped doing the one job it was there for, and no amount of tidying fixes the reason it happened.</p>

<h2>Why a sheet does this at all</h2>
<p>A spreadsheet guesses. Every cell can hold anything, so the program decides what you probably meant: this looks like a date, that looks like a number, this long digit string is probably scientific notation. The guess is usually right, which is why people trust it, and when it is wrong it changes your data without asking.</p>
<p>A database does not guess. A column is a date column or it is not, and a value that does not fit is refused at the door instead of being silently converted. That single difference is the reason to move, and it matters more than speed.</p>

<h2>What the move actually cost</h2>
<p>Firebase's free Spark plan allows 1 GiB of stored data, 50,000 document reads and 20,000 writes a day, as published on 2 October 2026. For a business's invoices and product list, that is a long way from the ceiling, so the running cost for a file like mine was nothing.</p>
<p>The real cost is that you now have an application rather than a file. Nobody opens a database and types in it over chai. Someone has to build the screen for adding an invoice, and that someone is usually a developer. A sheet gives you an interface for free, which is exactly why it spreads before anyone decides it should.</p>

<h2>How to tell it is your turn</h2>
<p>Row counts are the wrong signal. Move when the data has started lying to you, when two people have edited two copies, or when something other than a human needs to read the file. If none of those is true, the sheet is fine and leaving it alone is the right call.</p>
<p>If the numbers in the file matter to someone's accounts, check a handful of totals by hand today. Mine looked fine from across the room. The same habit applies to anything you hand a professional, which is also how I think about <a href="/articles/pdf-tools-beyond-the-browser">where a client's documents get processed</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I had a sheet holding invoices, payments and product data, and it started changing the format of my numbers and dates on its own. Amounts and dates stopped being stored the way I entered them, so totals came out wrong and sorting put rows in an order that meant nothing. The file also took about 30 seconds just to open. I moved the whole thing into Firebase, and queries that used to mean waiting for the sheet now come back immediately.",
  },
};
