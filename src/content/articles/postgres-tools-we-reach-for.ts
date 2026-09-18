import type { Article } from "@/content/types";

export const postgresToolsWeReachFor: Article = {
  slug: "postgres-tools-worth-using",
  title: "The Postgres Tools Worth Setting Up Before You Need Them",
  excerpt:
    "Six pieces of Postgres tooling that earn their place, what each one is actually for, the order to reach for them when something is slow, and the three common problems where none of them will help you.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Database Tools", "Developer Tools", "Software"],
  publishedAt: "2026-08-19",
  image: "/images/articles/postgres-tools-we-reach-for.webp",
  imageAlt: "Frosted acrylic sheets stacked with gaps, edges catching indigo light",
  seoTitle: "Postgres Tools Worth Setting Up",
  seoDescription:
    "A practical set of Postgres tools — query analysis, migrations, clients and backups — with what each one is for and when it will not help.",
  quickAnswer:
    "Most Postgres problems are one of three things: a missing index, an unbounded query, or a connection pool sized wrong. Tools help you find which, but the fix is nearly always in your own code, not in your database configuration.",
  pros: [
    "Built-in Postgres tooling covers more than most people realise",
    "Query statistics extensions find real problems in minutes",
    "Migration tooling has become genuinely reliable",
  ],
  cons: [
    "Managed hosting often restricts the extensions you can install",
    "Query plan output takes real practice to read",
    "GUI clients encourage changes that never reach version control",
  ],
  faqs: [
    {
      question: "Where should I start when something is slow?",
      answer:
        "Find the slow query before touching anything else. Nearly every performance change made without that step is guesswork, and half of it makes things worse.",
    },
    {
      question: "Is a GUI client a bad idea?",
      answer:
        "For reading, no — they are excellent. For changing schema, yes: a change made in a GUI exists in your database and nowhere in your repository, and that divergence is discovered at the worst possible moment.",
    },
  ],
  sources: [
    {
      title: "PostgreSQL: Documentation: 18: F.32. pg_stat_statements — track statistics of SQL planning and execution",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/pgstatstatements.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "PostgreSQL: Documentation: 18: 14.1. Using EXPLAIN",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/using-explain.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "PostgreSQL: Documentation: 18: 24.1. Routine Vacuuming",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/routine-vacuuming.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "PostgreSQL: Documentation: 18: 27.2. The Cumulative Statistics System",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/monitoring-stats.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "PostgreSQL: Documentation: 18: 51.2. How Connections Are Established",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/connect-estab.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "PostgreSQL: Documentation: 18: 19.3. Connections and Authentication",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/runtime-config-connection.html",
      checkedAt: "2026-09-03",
    },
    {
      title: "PostgreSQL: Documentation: 18: 19.11. Client Connection Defaults",
      publisher: "The PostgreSQL Global Development Group",
      url: "https://www.postgresql.org/docs/current/runtime-config-client.html",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Postgres tooling advice usually turns into a list of GUI clients. The useful set is broader and mostly less visual.</p>

<h2>1. Query statistics, before anything else</h2>

<p>The extension that records execution statistics per query is the first thing to enable on any database you care about. It answers the only question that matters when something is slow: which query, and how often.</p>

<pre><code>SELECT calls, mean_exec_time, total_exec_time, query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;</code></pre>

<p>Sort by total time, not mean. A query taking 8ms and running two million times a day is a much bigger problem than one taking 900ms a few times an hour, and it is the one nobody notices.</p>

<h2>2. Query plans, once you know where to look</h2>

<p><code>EXPLAIN (ANALYZE, BUFFERS)</code> on the specific slow query. Reading plans takes practice, but you get most of the value from three things:</p>

<ul>
<li>A sequential scan on a large table that should have used an index</li>
<li>A row estimate that is wildly different from the actual count — usually stale statistics</li>
<li>A nested loop over far more rows than expected</li>
</ul>

<blockquote>
<p>The overwhelming majority of slow queries turn out to be a missing index or a query that forgot to bound its result set. Exotic explanations exist, but they are rare and expensive to chase — exhaust the boring ones first.</p>
</blockquote>

<h2>3. Migrations in version control</h2>

<p>Whatever tool your stack provides, use it, and never change production schema by hand. The specific tool matters far less than the discipline: schema changes must be reviewable, replayable and present in the repository.</p>

<p>The failure this prevents is not dramatic. It is a column someone added directly in a client, six months ago, that exists in production and in nobody's local database.</p>

<h2>4. A GUI client, for reading</h2>

<p>Exploring an unfamiliar schema, eyeballing data shape, checking a foreign key — a good client is much faster than the command line for all of it.</p>

<p>Use it read-only where you can. The convenience of making a quick change is exactly the convenience that produces the divergence above.</p>

<h2>5. Connection pooling, once you have more than a handful of clients</h2>

<p>Postgres connections are relatively expensive. Serverless environments and containerised applications that open connections freely will exhaust the limit surprisingly quickly.</p>

<p>The symptom is distinctive: everything is fine, then everything fails at once, then it recovers. If that pattern sounds familiar, look at connections before you look at query performance.</p>

<h2>6. Backups you have restored</h2>

<p>An untested backup is a belief, not a backup. Restore one into a scratch database on a schedule you actually keep — quarterly is enough — and time it. Knowing that a restore takes forty minutes is information you want before you need it, not during.</p>

<h2>7. Statistics and autovacuum, which you will otherwise blame the query for</h2>

<p>The failure that looks most like a query problem and is not: planner statistics drifting out of date, so the planner chooses a bad plan for a query that was fine last month.</p>

<p>The symptom is distinctive — a query that was fast becomes slow with no code change and no obvious growth in data. The tell is in the plan: a row estimate wildly different from the actual count. Before rewriting anything, refresh the statistics and re-check.</p>

<p>The related one is autovacuum falling behind on a heavily updated table, leaving dead rows the planner still has to step over. Watching dead tuple counts on your busiest tables costs nothing and explains a whole category of mystery slowdown that otherwise burns days.</p>

<h2>The order to work in when something is slow</h2>

<p>Most wasted debugging time comes from starting in the wrong place. This order is boring, and it is faster:</p>

<ol>
<li><strong>Which query?</strong> Statistics extension, sorted by total time. Do not proceed without an answer.</li>
<li><strong>Is it slow now, or was it always slow?</strong> Newly slow points at statistics, data growth or a plan change. Always slow points at a missing index or the query itself.</li>
<li><strong>What does the plan say?</strong> Look for the sequential scan, the bad row estimate, the nested loop over far too many rows.</li>
<li><strong>Is it the query or the connections?</strong> If everything is slow simultaneously and then recovers, it is connections — and no amount of indexing will help.</li>
<li><strong>Only then change something,</strong> one thing, and measure again.</li>
</ol>

<blockquote>
<p>An index added without step one is a guess that costs write performance forever. Half of them do not help, and nobody ever removes the ones that did not.</p>
</blockquote>

<h2>Two things worth doing before you need them</h2>

<ul>
<li><strong>Enable the statistics extension on day one.</strong> It records nothing about the past, so enabling it during an incident means waiting for data while the incident continues.</li>
<li><strong>Set a statement timeout.</strong> A default that kills any query running absurdly long turns "the database is down" into "one endpoint returns an error", which is a considerably better Tuesday.</li>
</ul>

<h2>Where none of this helps</h2>

<table>
<thead>
<tr><th>Problem</th><th>Where the fix is</th></tr>
</thead>
<tbody>
<tr><td>N+1 queries from an ORM</td><td>Your application code</td></tr>
<tr><td>Unbounded result sets</td><td>Your application code</td></tr>
<tr><td>Data model that fights every query</td><td>Your schema design</td></tr>
</tbody>
</table>

<p>These are the three most common causes of "the database is slow", and none of them are database problems. Tools will show you the symptom quickly and accurately. The fix is upstream — which is why we keep the tool list short and spend the time on the queries instead. Where the database lives matters too — see <a href="/articles/deploying-a-nextjs-app-four-routes">four deployment routes compared</a>.</p>`,
};
