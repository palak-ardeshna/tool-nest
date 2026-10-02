import type { Article } from "@/content/types";

/**
 * Numbered log with a decision table, rewritten on the URL first published
 * 2026-09-11 (old text deleted 2026-09-29, not restored). Palak's own facts
 * (chat, 2026-10-02): he keeps flags as constants in a config file in the repo,
 * used one as a kill switch when a feature was hitting the database too hard,
 * found that flipping it needed a deploy of about 10 to 15 minutes, and has a
 * dead flag that sat in the code about 6 months. No client or system is named.
 * He has not used a flag platform, so none is reviewed and no platform prices
 * are quoted.
 */
export const featureFlagsConfigFileOrPlatform: Article = {
  slug: "feature-flags-config-file-or-platform",
  title: "My Kill Switch Needed a 15-Minute Deploy. That Is Not a Kill Switch",
  excerpt:
    "A flag in a config file is fine for hiding unfinished work. Mine had to turn off a feature that was hammering the database, and getting to it meant waiting for a deploy.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Feature flags", "Deployment", "Config", "Databases", "Engineering"],
  publishedAt: "2026-09-11",
  contentUpdatedAt: "2026-09-18",
  seoTitle: "Feature Flags: Config File or a Platform?",
  seoDescription:
    "A config-file flag took a 10 to 15 minute deploy to flip while the database was struggling. Where a file is enough, and where it stops being enough.",
  content: `
<p>I keep feature flags as constants in a config file in the repository. For most of what I use them for that is the right amount of machinery. Then I needed one to act as a kill switch, and the gap showed up immediately.</p>

<p>A feature I had shipped was hitting the database too hard and had to come off. The flag that controlled it was a constant in a config file, so turning it off meant editing the file and deploying, and a deploy takes me about 10 to 15 minutes. The site was under load for all of it. I also have a flag in that same file that stopped doing anything about 6 months ago and is still sitting there, because nothing ever forces you to go back and remove one.</p>

<h2>What happened, in order</h2>
<ol>
<li>The feature went out behind a flag, which was the part that worked. Shipping it dark was never the problem.</li>
<li>Load went up and the database started struggling. I knew exactly which feature to blame, because it was the one behind the new flag.</li>
<li>I edited the constant in the config file, committed, and started a deploy.</li>
<li>I waited roughly 10 to 15 minutes while the deploy ran and the database stayed under load. There was nothing else to do in that window.</li>
<li>The feature went off and the load dropped. The fix worked. The time it took to reach the fix is the whole complaint.</li>
</ol>

<h2>Two jobs that look the same and are not</h2>
<table>
<thead><tr><th>What the flag is for</th><th>How fast it must flip</th><th>Config file good enough?</th></tr></thead>
<tbody>
<tr><td>Hiding unfinished work in production</td><td>Whenever the next deploy happens</td><td>Yes, this is what it is for</td></tr>
<tr><td>Showing something to one client</td><td>Rarely, and planned in advance</td><td>Yes, if the list is short</td></tr>
<tr><td>Turning a feature off when it breaks</td><td>Now, with the system already degraded</td><td>No, a deploy sits in the way</td></tr>
</tbody>
</table>

<h2>The case for buying one is narrower than the sales pitch</h2>
<p>Flag platforms are usually sold on experiments, targeting and staged rollouts. None of that is why my config file fell short. It fell short on one job: changing a value while production is unhappy, without shipping code to do it. That job has a name in the literature, the ops toggle, and it is the one category where changing the value at runtime is the point rather than a convenience.</p>
<p>If that is the only job you need, you do not necessarily need a platform. A single row in a database that the application reads per request gives you the instant flip, costs nothing extra, and keeps the switch inside the system you already run. That is the step most articles skip, because a config file and a paid platform make a cleaner comparison than a config file and one table.</p>

<h2>The dead flag is nobody's fault but mine</h2>
<p>I have a flag that has done nothing for about 6 months. Buying a platform would not have removed it. Dead flags accumulate because removing one is work with no visible reward, and that is true wherever the flag lives.</p>
<p>Pete Hodgson's write-up of feature toggles, read on 2 October 2026, treats toggles as inventory with a carrying cost and suggests adding the removal task when you add the toggle, giving it an expiry date, or writing a test that fails once the date passes. Mine had none of those, which is why it is still there.</p>
<p>A flag with no end date is permanent, and permanent flags are just configuration with extra steps.</p>

<h2>What I would tell someone starting out</h2>
<p>Put the flag in a config file and carry on. Reach for something that flips at runtime when you first want one off while the system is struggling, because that is the moment a 15-minute deploy stops being acceptable. Before adding a platform to the bill, check whether a database row covers it, the same way I would check whether the free thing already in front of me is enough, as I did when <a href="/articles/when-a-spreadsheet-becomes-a-database">a spreadsheet stopped being the right place for real data</a>.</p>
`,
  sources: [
    {
      title: "Feature Toggles (aka Feature Flags), by Pete Hodgson",
      publisher: "martinfowler.com",
      url: "https://martinfowler.com/articles/feature-toggles.html",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "A feature I had shipped was hitting the database too hard and had to come off. The flag that controlled it was a constant in a config file, so turning it off meant editing the file and deploying, and a deploy takes me about 10 to 15 minutes. The site was under load for all of it. I also have a flag in that same file that stopped doing anything about 6 months ago and is still sitting there, because nothing ever forces you to go back and remove one.",
  },
};
