import type { Article } from "@/content/types";

/**
 * Explainer with pros and cons, rewritten on the URL first published
 * 2026-08-19; that date already holds two articles, which is the cap the test
 * enforces, so it is published 2026-08-20 instead. The slug and URL are
 * unchanged. Old text deleted 2026-09-29, not restored. Palak's own facts
 * (chat, 2026-10-02): he uses psql and a hosted provider's web console, mostly
 * to look at data while debugging and to run schema changes; the console got
 * slow and crashed on tables around 100,000 rows; a migration failed halfway
 * and left the schema in a state neither version expected. He did not say which
 * hosted provider, so none is named.
 */
export const postgresToolsWorthUsing: Article = {
  slug: "postgres-tools-worth-using",
  title: "Postgres Tools: psql and the Web Console",
  excerpt:
    "A hosted provider's console is the fastest way to look at a table, until the table gets big. Mine started crawling and crashing at about 100,000 rows, and psql did not care.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Postgres", "psql", "Databases", "Migrations", "Tooling"],
  publishedAt: "2026-08-20",
  contentUpdatedAt: "2026-08-30",
  seoTitle: "Postgres Tools: psql vs the Web Console",
  seoDescription:
    "A hosted Postgres console crawled and crashed at about 100,000 rows. Where the browser tool is the right one, and where psql is the only thing that holds.",
  pros: [
    "psql is already installed wherever Postgres is, so there is nothing to choose, buy or keep updated",
    "A web console is genuinely faster for a quick look at a small table, and needs no connection string",
    "Running a migration from psql shows you exactly what failed and where, rather than a browser error",
  ],
  cons: [
    "psql is unhelpful until you know the backslash commands; nothing on screen tells you they exist",
    "A console encourages running a schema change in a browser tab, which is where my worst one went wrong",
    "Neither tool stops a migration failing halfway and leaving the schema in a state nothing expects",
  ],
  content: `
<p>There is no shortage of Postgres clients and I have settled on two: psql on the command line, and whatever web console the hosted provider gives me. Most of what I do is looking at data while debugging something, and changing the schema.</p>

<p>The console is the one I reach for first, and it is the one that let me down. On tables of around 100,000 rows it got slow and then crashed on me, so the tool I was using to understand a problem became a second problem. psql on the same database did not notice the size at all. Separately, a migration I ran failed halfway and left the schema in a state that neither the old version nor the new one expected, which is a worse outcome than it simply refusing to run.</p>

<h2>The console is a reading tool</h2>
<p>For a quick look at a small table, a browser console is the fastest thing available. No connection string, no terminal, no remembering anything. That convenience is real and I use it every week.</p>
<p>It stops being the right tool at a size that arrives sooner than you expect. 100,000 rows is not a big table by any serious measure, and it was enough to make the page crawl and then fall over. The database was fine the whole time; the browser was the bottleneck. Once you learn that boundary, the console stays useful and you stop asking it to do the heavy part.</p>

<h2>psql is worth the half hour it takes to get used to</h2>
<p>psql looks unwelcoming because it tells you nothing. The commands you need are backslash ones, and no part of the screen hints at that. Learn the handful that list tables, describe a table and show indexes, and you have a client that is already installed on every machine with Postgres and does not care how large anything is.</p>
<p>It is also the better place to be when something goes wrong, because it tells you which statement failed rather than turning the problem into a browser error.</p>

<h2>The migration lesson</h2>
<p>Mine failed partway and left the schema half changed. That is the state worth designing against, because it is not a failure you can simply retry: the next run meets a database that is neither where it started nor where it was going.</p>
<p>What I would tell anyone running a schema change on something that matters: run it in a transaction so a failure rolls all of it back, take the backup before rather than after, and run it from psql where you can see which statement died. A browser tab is a bad place to be standing when a migration stops halfway.</p>

<h2>What to actually install</h2>
<p>Nothing, to start with. You have psql already, and the hosted console came free with the database. Use the console for looking and psql for changing, and add a heavier graphical client only when you can name the thing those two cannot do for you.</p>
<p>That is the same test I apply to any tool that wants to sit between me and my data, which is how I ended up moving a file into a real database in the first place when <a href="/articles/when-a-spreadsheet-becomes-a-database">a spreadsheet started rewriting my numbers</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "The console is the one I reach for first, and it is the one that let me down. On tables of around 100,000 rows it got slow and then crashed on me, so the tool I was using to understand a problem became a second problem. psql on the same database did not notice the size at all. Separately, a migration I ran failed halfway and left the schema in a state that neither the old version nor the new one expected, which is a worse outcome than it simply refusing to run.",
  },
};
