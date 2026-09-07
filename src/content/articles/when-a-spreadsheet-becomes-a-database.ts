import type { Article } from "@/content/types";

export const whenASpreadsheetBecomesADatabase: Article = {
  slug: "when-a-spreadsheet-becomes-a-database",
  title: "When a Spreadsheet Should Become a Database",
  excerpt:
    "Every team has one sheet that quietly turned into software. It has colour rules nobody remembers writing, a tab called Do Not Touch, and one person who understands it. Here is how to tell when it has outgrown itself, and what to move it to.",
  image: "/images/articles/when-a-spreadsheet-becomes-a-database.webp",
  imageAlt:
    "Photograph: over the shoulder of someone typing at a laptop, the screen filled with a grid of small charts and figures",
  category: "software",
  author: "toolnest-editorial",
  tags: ["Software", "Airtable", "Notion", "No-Code", "Small Teams"],
  publishedAt: "2026-09-07",
  seoTitle: "Airtable vs Notion vs Baserow vs NocoDB",
  seoDescription:
    "Four ways to move a spreadsheet that has outgrown itself, with the row limits and per-seat prices that decide it — and when to stay in the sheet.",
  quickAnswer:
    "Move when the sheet has relationships in it — when one row needs to point at another row somewhere else — or when more than two people edit it and you have started keeping a copy. Until then a spreadsheet is the right tool and switching costs you more than it returns. When you do move: Airtable is the polished option at $20 per user a month billed annually, with 1,000 records per base on the free plan and 50,000 on Team. Notion is cheaper at $10 a seat monthly, or $8 annually, and better if the data belongs next to documents. Baserow is open source, from $10 a user a month hosted, and free to run yourself. NocoDB puts a grid on top of a Postgres or SQLite database you already own. Price the free tiers by row limits, not by features — that is what you hit first.",
  pros: [
    "Relationships between records stop the copy-and-paste errors a sheet invites",
    "Per-field types mean a date is a date, not a string that sorts wrongly",
    "Forms and views give other people a way in that is not the raw grid",
    "Two of the four options can be self-hosted, so the data stays yours",
  ],
  cons: [
    "Per-seat pricing gets expensive quickly for a team that mostly reads",
    "Free tiers are capped on rows, and rows are what you run out of",
    "You lose the one thing spreadsheets are unbeatable at: ad-hoc arithmetic",
    "Migrating half a system is worse than leaving all of it where it was",
  ],
  alternatives: [
    { name: "Airtable", url: "https://www.airtable.com/pricing", note: "Team is $20 per user a month billed annually, Business $45. Free plan caps at 1,000 records and 1GB of attachments per base." },
    { name: "Notion", url: "https://www.notion.com/pricing", note: "Plus is $10 a seat monthly or $8 annually. Best when the table needs to sit beside the notes and documents that explain it." },
    { name: "Baserow", url: "https://baserow.io/pricing", note: "Open source. Free tier holds 3,000 rows per workspace; Premium is $12 monthly or $10 annually per user, with 50,000 rows." },
    { name: "NocoDB", url: "https://github.com/nocodb/nocodb", note: "A grid interface over a database you already run, including Postgres and SQLite. Self-hosted with Docker." },
  ],
  faqs: [
    {
      question: "How do I know it is time to move?",
      answer:
        "Three signals, and one of them is enough. The first is relationships: a column holds an identifier that means something in another sheet, and keeping the two in step is now a job. The second is concurrent editing, where two people work in it on the same day and somebody has started keeping their own copy to be safe. The third is that a formula has become a program — nested conditionals several layers deep that nobody wants to touch. Any one of those means the sheet is doing a database's job without a database's guarantees.",
    },
    {
      question: "What do the free tiers actually limit?",
      answer:
        "Rows, mostly, and that is the ceiling you meet first. Airtable's free plan allows 1,000 records per base with 1GB of attachments and two weeks of revision history. Baserow's free plan holds 3,000 rows per workspace. Notion counts seats and file sizes rather than rows, with a 5MB upload limit and seven days of page history on free. So the sensible test before you commit is to count your rows today, double the number, and check that figure against the plan you were planning to stay on.",
    },
    {
      question: "Is self-hosting worth it for this?",
      answer:
        "It is if you already run a server and a database, and it is a trap if you do not. Baserow and NocoDB both self-host with Docker, and NocoDB is designed to sit on top of an existing Postgres or SQLite database rather than owning its own. That last part is genuinely useful: the data stays in a database your application can query directly, and the grid becomes a view of it rather than a silo. What you take on is upgrades, backups and an uptime problem for a tool that is invisible when it works.",
    },
    {
      question: "Can I just keep using the spreadsheet?",
      answer:
        "Often, yes, and we would rather say so than sell you a migration. A spreadsheet that one person maintains, that nobody else depends on, and that answers a question once a month is not a problem waiting to happen. It is a spreadsheet. The move is worth making when other people depend on the thing being correct, because that is the point at which the informal rules in someone's head need to become constraints the tool enforces.",
    },
  ],
  sources: [
    {
      title: "Airtable pricing",
      publisher: "Airtable",
      url: "https://www.airtable.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Airtable plans and limits",
      publisher: "Airtable",
      url: "https://support.airtable.com/docs/airtable-plans",
      checkedAt: "2026-09-07",
    },
    {
      title: "Notion pricing",
      publisher: "Notion",
      url: "https://www.notion.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Baserow pricing",
      publisher: "Baserow",
      url: "https://baserow.io/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "NocoDB",
      publisher: "NocoDB",
      url: "https://github.com/nocodb/nocodb",
      checkedAt: "2026-09-07",
    },
  ],
  content: `<p>There is a spreadsheet in your organisation that stopped being a spreadsheet some time ago. It has conditional formatting nobody remembers setting up, a hidden tab that everything else depends on, and a column of identifiers that is really a foreign key pretending not to be one.</p>

<p>It works. That is the awkward part. Nobody replaces a thing that works, right up until the morning two people edit it at once and a week of numbers goes missing.</p>

<h2>The three signals that it has outgrown the grid</h2>

<p>You do not need a framework for this. You need to check whether any of these is true.</p>

<ul>
<li><strong>There are relationships in it.</strong> A cell holds a customer ID, a project code, an order number — something that means a row in another sheet. Keeping those two in step is now manual work, and manual work drifts.</li>
<li><strong>More than one person edits it.</strong> Not opens it. Edits it. The moment somebody keeps a private copy "just in case", you have lost the single version of the truth that made the sheet worth having.</li>
<li><strong>A formula has become a program.</strong> Four levels of nested conditionals, a lookup inside a lookup, and a comment that says do not change this. That logic belongs somewhere it can be named and tested.</li>
</ul>

<p>One signal is enough. All three and you are not deciding whether to move, you are deciding how much longer to put it off.</p>

<h2>What the four options actually cost</h2>

<p>Published rates at the time of writing. Per-seat prices are the ones that surprise people, because everyone counts editors and forgets the six colleagues who only need to look.</p>

<table>
<thead>
<tr><th>Tool</th><th>Free tier</th><th>Paid from</th><th>Suits</th></tr>
</thead>
<tbody>
<tr><td>Airtable</td><td>1,000 records per base, 1GB attachments</td><td>$20/user/month billed annually</td><td>Teams who want it to look finished</td></tr>
<tr><td>Notion</td><td>Unlimited pages, 5MB uploads, 7-day history</td><td>$10/seat monthly, $8 annually</td><td>Data that lives beside documents</td></tr>
<tr><td>Baserow</td><td>3,000 rows per workspace</td><td>$12/user monthly, $10 annually</td><td>Anyone who wants the option to self-host</td></tr>
<tr><td>NocoDB</td><td>Self-hosted, no row cap of its own</td><td>Free on your own hardware</td><td>Teams who already run Postgres</td></tr>
</tbody>
</table>

<p>Airtable's Team plan lifts you to 50,000 records per base and 20GB of attachments, with a year of revision history; Business is $45 a user annually with 125,000 records. Baserow's paid tiers step through 50,000 and 250,000 rows per workspace. Notion counts differently — seats, file size and history depth rather than rows — which is a hint about what it is really for.</p>

<h2>The distinction that decides it</h2>

<p>Two of these tools are databases with a friendly grid on top. Two are something else.</p>

<p>Airtable and Baserow are the databases. Records, typed fields, links between tables, views that filter and group. If your problem is structure — the same shape of thing, many times, with relationships — this is the shape of the answer.</p>

<p>Notion is a documents product that grew tables. That sounds like faint praise and is not meant as it: when the table needs context around it, when each row wants a page of notes behind it, Notion is the only one of the four that does not feel like two tools stapled together. It is a poor choice for ten thousand rows of structured data and an excellent one for forty projects that each need a brief.</p>

<p>NocoDB is the odd one out and the most interesting for anyone technical. It does not want to own your data; it puts a grid over a database you already run, Postgres or SQLite included. The table stays queryable by your own application, which means the no-code layer is a view rather than a silo. If you already have a database and a person who is comfortable with it, that changes the calculation — as does knowing what your database can already do on its own, which we covered in our notes on the <a href="/articles/postgres-tools-worth-using">Postgres tools we reach for</a>.</p>

<h2>What you lose by leaving the sheet</h2>

<p>Comparison articles skip this part, so here it is plainly.</p>

<p>You lose fast, unstructured arithmetic. In a spreadsheet you can put a number in an empty cell, sum a range beside it, and delete the lot ten minutes later. In a database tool that is a schema change, and schema changes have ceremony. For genuine modelling — a forecast, a scenario, a one-off calculation — a spreadsheet remains the better instrument, and moving that work into a records tool makes it slower for no benefit.</p>

<p>So the honest recommendation is often both: the structured data moves, the modelling stays in the sheet and reads from an export.</p>

<h2>How to move without breaking the week</h2>

<ol>
<li><strong>Count your rows and double it.</strong> That number, not the feature list, decides which free tier survives contact with next year.</li>
<li><strong>Clean the sheet before you import.</strong> One header row, no merged cells, one type per column. Every minute here saves five later.</li>
<li><strong>Move one table, not the system.</strong> Pick the table other things depend on, get it right, and leave the rest where it is for a fortnight.</li>
<li><strong>Give people a view, not the grid.</strong> A filtered view or a form is what most colleagues need, and it prevents the accidental edits that made you leave the spreadsheet in the first place.</li>
<li><strong>Point the automations at the new home.</strong> If a script or a scheduled job reads the old sheet, it is now reading a stale copy — and that failure is silent. Our guide to <a href="/articles/automate-repetitive-work-without-code">automating repetitive work without code</a> covers where those jobs usually hide.</li>
</ol>

<h2>What we would do</h2>

<p>For most small teams, Airtable if the budget allows and the team is small enough that per-seat pricing stays sane, Notion if the rows need paragraphs attached, and Baserow or NocoDB if you already run infrastructure and would rather own the data than rent it.</p>

<p>And if none of the three signals is true for your sheet, do nothing. A working spreadsheet that one person maintains is not technical debt. It is a spreadsheet, and it is allowed to stay one.</p>`,
};
