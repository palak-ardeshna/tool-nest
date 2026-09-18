import type { Article } from "@/content/types";

export const softwareWePayForAndWhatWeCancelled: Article = {
  slug: "auditing-small-team-software-spend",
  title: "How to Audit a Small Team's Software Spend (Without Starting a Fight)",
  excerpt:
    "Most subscription waste is not extravagance — it is tools that quietly stopped being used while the invoice kept arriving. Here is a repeatable audit, the single question that sorts the list fastest, and how to handle the tool somebody loves.",
  category: "software",
  author: "parth-patel",
  tags: ["Software", "Productivity", "Business Tools"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-19",
  featured: true,
  image: "/images/articles/software-we-pay-for-and-what-we-cancelled.webp",
  imageAlt: "A grid of blank ceramic tiles with a few lifted and stacked aside",
  seoTitle: "How to Audit Your Software Spend",
  seoDescription:
    "How to audit SaaS subscriptions at a small company: building the list, the one question that predicts which tools survive, and cancelling without a fight.",
  quickAnswer:
    "Export twelve months of invoices, list every recurring charge, then ask one question per tool: does anyone open this without being reminded to? Tools opened voluntarily survive; tools that need a weekly nudge, a process document or a manager chasing updates are already dead and you are paying for the funeral. Cancel monthly plans first, set a ninety-day review date on everything you buy from now on, and never audit security tooling on cost.",
  pros: [
    "An annual audit reliably surfaces spend nobody is willing to defend",
    "Consolidating a category onto one tool cuts context switching more than any single tool adds",
    "Most categories have a free tier that is genuinely sufficient at small-team scale",
    "The exercise documents what your team actually uses, which is useful on its own",
  ],
  cons: [
    "Migration costs are real and routinely underestimated",
    "Annual plans hide the moment a tool went cold",
    "Cancelling a tool one person depends on is a people problem, not a spreadsheet problem",
    "Some savings are false — a cancelled tool whose job moves into someone's evenings",
  ],
  faqs: [
    {
      question: "How often should a team audit its software spend?",
      answer:
        "Once a year for the full sweep. More often and you spend more time auditing than the savings justify; less often and you accumulate a year of subscriptions nobody remembers approving. Pair the annual sweep with a ninety-day review date attached to each individual purchase, which catches the expensive mistakes inside the window where cancelling is still easy.",
    },
    {
      question: "What is the most commonly wasted subscription?",
      answer:
        "The second tool in a category you already have a tool for, bought during a busy month because the first one was annoying that particular week. It rarely replaces the first — it splits your data across both, which costs more than the subscription.",
    },
    {
      question: "Should I consolidate onto one all-in-one suite?",
      answer:
        "Only if the suite is genuinely adequate at the two or three jobs you do most. Suites win on billing and lose on depth. The failure mode is consolidating, discovering the suite is weak at your most important job, and re-buying the specialist tool while still paying for the suite.",
    },
    {
      question: "What should never be cancelled on cost grounds?",
      answer:
        "Password management, backups, and anything else whose value only becomes visible on the day it is needed. These are insurance. Judging them on monthly usage is the same error as cancelling home insurance because the house has not burned down.",
    },
  ],
  sources: [
    {
      title: "Slack's fair billing policy",
      publisher: "Slack",
      url: "https://slack.com/help/articles/218915077-Slacks-fair-billing-policy",
      checkedAt: "2026-09-03",
    },
    {
      title: "Microsoft 365 Admin Center Usage Reports Overview",
      publisher: "Microsoft",
      url: "https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide",
      checkedAt: "2026-09-03",
    },
    {
      title: "User log events",
      publisher: "Google (Google Workspace Help)",
      url: "https://knowledge.workspace.google.com/admin/reports/user-log-events",
      checkedAt: "2026-09-03",
    },
    {
      title: "Understand the data in your Slack analytics dashboard",
      publisher: "Slack",
      url: "https://slack.com/help/articles/360057638533-Understand-the-data-in-your-Slack-analytics-dashboard",
      checkedAt: "2026-09-03",
    },
    {
      title: "Usage limits for free workspaces",
      publisher: "Slack",
      url: "https://slack.com/help/articles/115002422943-Usage-limits-for-free-workspaces",
      checkedAt: "2026-09-03",
    },
    {
      title: "Guide to Slack import and export tools",
      publisher: "Slack",
      url: "https://slack.com/help/articles/204897248-Guide-to-Slack-import-and-export-tools",
      checkedAt: "2026-09-03",
    },
    {
      title: "Notion Pricing Plans: Free, Plus, Business, & Enterprise",
      publisher: "Notion Labs",
      url: "https://www.notion.com/pricing",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Software spend at a small company rarely goes wrong through extravagance. It goes wrong through accumulation: a trial that converted, a tool bought for one project, a second app in a category that already had one. Nobody decided to waste the money. It just stopped being noticed.</p>

<p>What follows is a method for finding it. It is not a productivity philosophy and it does not require a procurement process — it is an afternoon with a list of invoices and one good question.</p>

<h2>Step 1: build the list from invoices, not memory</h2>

<p>Start from the payment side, not from what people say they use. Pull twelve months of charges from the company card statement, the bank feed and any app-store receipts, then reconcile them into a single sheet. Four columns is enough:</p>

<ul>
<li>Tool name and category</li>
<li>Annual cost, normalised — multiply monthly charges by twelve so everything is comparable</li>
<li>Billing cadence and renewal date</li>
<li>Who bought it, and for what</li>
</ul>

<p>Two things reliably surface at this stage before any judgement is applied: charges nobody in the room recognises, and two tools in the same category that were bought eight months apart by two different people.</p>

<blockquote>
<p>If the person who bought a tool cannot be identified from the invoice alone, that is already a finding. Unowned software is unmaintained software.</p>
</blockquote>

<h2>Step 2: ask the one question that sorts the list</h2>

<p>For each tool, ask: <strong>does anyone open this without being reminded to?</strong></p>

<p>This question does most of the work of a full usage audit at a fraction of the effort. Tools people open voluntarily have found a real place in someone's day. Tools that need a ritual to stay alive — a weekly reminder, a manager asking whether people have updated it, a process document explaining when to use it — are being kept alive artificially.</p>

<blockquote>
<p>A tool that needs a process to keep it in use is not a tool. It is a process, with a subscription attached.</p>
</blockquote>

<p>Where a tool has real admin access, verify the answer rather than taking it: most business plans expose last-login or seat-activity data, and the gap between what people believe they use and what the logs show is frequently large.</p>

<h2>Step 3: apply the categories that should not be judged on usage</h2>

<p>Before cutting, ring-fence the exceptions. Some software earns its cost on the day you need it and looks idle every other day:</p>

<ul>
<li><strong>Password management.</strong> Cancelling this does not remove the cost, it moves it into a spreadsheet of shared logins.</li>
<li><strong>Backups and disaster recovery.</strong> Usage is zero right up until it is the only thing that matters.</li>
<li><strong>Anything with a compliance or contractual obligation attached.</strong> Check before cutting, not after.</li>
<li><strong>The tools people spend hours in daily.</strong> An editor, a terminal, the primary design application. These deserve the most money and the least deliberation — a 20% productivity difference in a tool used six hours a day dwarfs the entire rest of the sheet.</li>
</ul>

<h2>Step 4: work through the predictable categories of waste</h2>

<p>Across small teams the same patterns recur. Check the list against each:</p>

<table>
<thead>
<tr><th>Pattern</th><th>What it looks like</th><th>Usual outcome</th></tr>
</thead>
<tbody>
<tr><td>The duplicate</td><td>Two document tools, two task trackers</td><td>Consolidate — split knowledge costs more than the licence</td></tr>
<tr><td>The absorbed feature</td><td>A point tool whose job the main platform now does natively</td><td>Cancel after confirming parity on the part you use</td></tr>
<tr><td>The dashboard nobody opens</td><td>Analytics or reporting add-on with no recurring viewer</td><td>Cancel; reinstate only with a named owner</td></tr>
<tr><td>The cold wiki</td><td>Knowledge base whose last meaningful edit is months old</td><td>Export first, then cancel</td></tr>
<tr><td>The over-tiered plan</td><td>Enterprise tier bought for one feature</td><td>Downgrade rather than cancel</td></tr>
<tr><td>The ghost seat</td><td>Licences for people who left</td><td>Immediate, uncontroversial saving</td></tr>
</tbody>
</table>

<p>Ghost seats and over-tiering usually account for more of the total than dramatic cancellations do, and neither requires anyone to change how they work. Do those first — they buy goodwill for the harder conversations.</p>

<h2>Step 5: cancel in the right order</h2>

<ul>
<li><strong>Ghost seats and tier downgrades</strong> — no behaviour change, immediate saving.</li>
<li><strong>Monthly plans</strong> — reversible next month if you were wrong. This is the cheapest place to be wrong.</li>
<li><strong>Annual plans approaching renewal</strong> — decide before the auto-renew date, not after.</li>
<li><strong>Annual plans mid-term</strong> — leave them. You have already paid; the decision belongs at the renewal date, and cancelling early buys nothing but disruption.</li>
</ul>

<p>Export your data before cancelling, not during the cancellation flow. Several tools restrict export once a plan lapses, and a few restrict it the moment you initiate cancellation.</p>

<h2>The traps</h2>

<h3>Annual plans hide death</h3>

<p>A monthly subscription that stops being used generates twelve reminders that you are paying for it. An annual one generates one reminder, eleven months after the tool went cold. This is not an argument against annual billing — the discount is usually real — but it is an argument for a calendar entry ninety days before every annual renewal.</p>

<h3>Migration cost is always higher than the estimate</h3>

<p>Moving documentation or tickets between tools consistently takes longer than planned, and rarely because the export fails. It takes longer because a good chunk of the content turns out to be worth rewriting, and another chunk turns out to be worth deleting. Both are good outcomes. Neither is a two-hour job, and if the saving is small the migration may cost more than the subscription.</p>

<h3>Some savings just move the work</h3>

<p>Cancelling a transcription tool saves a small monthly fee and adds an hour a week of someone typing. Cancelling a scheduling tool saves a licence and adds a back-and-forth email thread to every meeting. Before recording a saving, ask where the work went. If the answer is "into somebody's evening", it is not a saving.</p>

<h3>Someone loves the tool you are cancelling</h3>

<p>This is the genuinely hard one, and it is not a spreadsheet problem. A workable rule: the person who wants to keep it explains what they would do instead. If the answer is concrete and clearly worse, keep the tool — they have just told you it is doing real work. If the answer is a shrug, the subscription was habit, and they will usually say so themselves once asked directly.</p>

<h3>Expect to be wrong about one or two</h3>

<p>Any honest audit produces a reversal — a tool cancelled, missed, and brought back within a couple of months. That is not a failed audit. It is the cost of finding out, and it is far cheaper than the alternative of never testing whether a subscription is load-bearing. Plan for it rather than treating a reinstatement as an embarrassment; teams that treat reversals as failures stop cancelling anything.</p>

<h2>Step 6: make the next audit smaller</h2>

<p>The habit that prevents the problem recurring is a review date set <em>at purchase</em>. Not a reminder to cancel — a date to ask the sorting question: is anyone opening this without being told to?</p>

<p>Ninety days is enough to know, and for most tools it falls inside the window where cancelling is still trivial. A team that does this consistently finds its annual audit shrinks to ghost seats and tier adjustments, which takes an hour rather than an afternoon.</p>

<h2>The point of the exercise</h2>

<p>The saving is worth having, but it is not really the payoff. The payoff is that at the end you have a documented, agreed list of what your team actually uses and who owns each piece of it. That list makes onboarding faster, makes the next purchase decision easier, and means the next time someone asks "do we already have something for this?", the answer takes ten seconds instead of a week. The finance side of that list has its own trade-offs — see <a href="/articles/invoicing-and-bookkeeping-for-small-teams">invoicing and bookkeeping for small teams</a>.</p>`,
};
