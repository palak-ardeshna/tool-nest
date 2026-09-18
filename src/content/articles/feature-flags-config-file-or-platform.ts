import type { Article } from "@/content/types";

export const featureFlagsConfigFileOrPlatform: Article = {
  slug: "feature-flags-config-file-or-platform",
  title: "Feature Flags: When a Config File Is Enough, and When to Buy a Platform",
  excerpt:
    "Most teams under ten engineers do not need a feature flag service. Here is the point at which they do, what LaunchDarkly, PostHog, Flagsmith and Unleash actually cost when you get there, and the one habit that keeps flags from becoming a wall of switches nobody understands.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Developer Tools", "Feature Flags", "Deployment", "Comparisons"],
  publishedAt: "2026-09-11",
  image: "/images/articles/feature-flags-config-file-or-platform.webp",
  imageAlt:
    "A wall of old light switches and junction boxes wired together with tangled cables on a tiled exterior wall",
  seoTitle: "Feature Flags: Config File or Platform? (2026)",
  seoDescription:
    "When a JSON file beats a feature flag service, and what LaunchDarkly, PostHog, Flagsmith and Unleash cost once you outgrow it. Prices checked Sept 2026.",
  quickAnswer:
    "Start with a flags object in your own config and an environment variable override; that covers dark launches and kill switches for a small team with no new service, no SDK and no bill. Buy a platform when a non-engineer needs to flip a flag without a deploy, when you need to target a percentage of users or a named account, or when more than one service has to agree on the same flag. At that point PostHog's free tier (one million flag requests a month) is the cheapest way in if you already use it for analytics, LaunchDarkly's Developer plan is free but capped at 1,000 client-side monthly users, Flagsmith is free to 50,000 requests and $40 a month after, and Unleash is free and open source to self-host at one project and two environments.",
  pros: [
    "A config-file flag ships today, costs nothing and has no third-party SDK in the request path",
    "Platforms let product and support toggle features without an engineer and without a deploy",
    "Percentage rollouts and per-account targeting are genuinely hard to do well by hand",
  ],
  cons: [
    "A flag service is one more dependency that can fail during the exact incident you added it for",
    "Every flag is a code path you now have to test twice, and the platform will not remove them for you",
    "Per-seat and per-monthly-user pricing punishes the small apps that were fine with a JSON file",
  ],
  alternatives: [
    {
      name: "A flags object in your own config",
      note: "A typed object in the repository, overridable by environment variable. Changing a flag is a deploy. Zero cost, zero dependencies, and the right answer for most teams under ten engineers.",
    },
    {
      name: "PostHog",
      url: "https://posthog.com/pricing",
      note: "Flags bundled with product analytics; the first one million flag requests a month are free, and usage-based after that. Percentage rollouts, targeting on any person property and experiments in the same tool.",
    },
    {
      name: "LaunchDarkly",
      url: "https://launchdarkly.com/pricing/",
      note: "The incumbent. Developer plan is $0 with unlimited seats, one project, three environments, five service connections and 1,000 client-side monthly active users. Foundation is pay as you go at $10 per service connection and $8.33 per 1,000 client-side MAU billed yearly.",
    },
    {
      name: "Flagsmith",
      url: "https://www.flagsmith.com/pricing",
      note: "Open source with a hosted free tier of 50,000 requests a month and one team member. Start-Up is $40 a month billed yearly for one million requests and three seats.",
    },
    {
      name: "Unleash",
      url: "https://www.getunleash.io/pricing",
      note: "Open source and self-hosted for free at one project, two environments and unlimited seats. Paid plans start at $75 per seat per month with a five-seat minimum, priced on your team, not your traffic.",
    },
  ],
  faqs: [
    {
      question: "Is a config file really a feature flag?",
      answer:
        "Yes, in the sense that matters: the code checks a boolean and takes one of two paths, and you can turn the new path off without reverting the commit. What it lacks is the ability to change without a deploy and to vary per user. If your deploys take five minutes and your flags are on-or-off for everyone, you are not missing much.",
    },
    {
      question: "What is the first sign we need a platform?",
      answer:
        "Somebody who is not an engineer asks to turn something on for one customer. That request has three parts a config file cannot do — no deploy, per-account targeting, and an audit trail of who flipped it — and it tends to arrive from sales or support rather than from engineering.",
    },
    {
      question: "Should we self-host Unleash or Flagsmith?",
      answer:
        "Only if you would already be comfortable running a Postgres-backed service with an uptime expectation, because a flag server that is down is a production incident. The open-source tiers are genuinely complete for a single project. If nobody on the team wants to own that box, the hosted free tiers exist for exactly this reason.",
    },
    {
      question: "How do we stop flags piling up?",
      answer:
        "Give every flag an owner and a removal date when it is created, and add a lint rule or a scheduled reminder that lists flags older than ninety days. A flag that has been fully on for a quarter is dead code with a runtime cost. Platforms show you stale flags; none of them delete the code behind them.",
    },
  ],
  sources: [
    {
      title: "LaunchDarkly pricing",
      publisher: "LaunchDarkly",
      url: "https://launchdarkly.com/pricing/",
      checkedAt: "2026-09-11",
    },
    {
      title: "PostHog pricing",
      publisher: "PostHog",
      url: "https://posthog.com/pricing",
      checkedAt: "2026-09-11",
    },
    {
      title: "Flagsmith pricing",
      publisher: "Flagsmith",
      url: "https://www.flagsmith.com/pricing",
      checkedAt: "2026-09-11",
    },
    {
      title: "Unleash plans and pricing",
      publisher: "Unleash",
      url: "https://www.getunleash.io/pricing",
      checkedAt: "2026-09-11",
    },
  ],
  content: `<p>Feature flags are one of the few engineering practices that almost everyone agrees on and almost everyone over-buys. The idea is small: put the new thing behind a switch, ship the switch off, turn it on when you are ready. The market built on that idea sells seats, environments, monthly active users and service connections, and it is easy to end up paying for a rollout system when what you needed was a boolean.</p>

<p>We have run flags three ways at different sizes: a hand-rolled object in config, a self-hosted open-source server, and a paid platform. Each was right at the time. This is how we tell which one you are at.</p>

<h2>The config-file version, and what it covers</h2>

<p>The simplest flag is a typed object checked into the repository, with an environment variable that can override each key at boot. That gives you three things immediately: dark launches, where the code ships but the path stays off; kill switches, where a misbehaving feature comes out of the next deploy instead of a revert; and per-environment differences, so staging can run ahead of production.</p>

<p>Changing a flag is a deploy. People treat that as a disadvantage, and for a team whose <a href="/articles/ci-pipelines-that-stay-under-ten-minutes">pipeline stays under ten minutes</a> it mostly is not. A deploy is reviewed, logged and reversible. A dashboard toggle is one click by whoever has the login.</p>

<p>What the file cannot do is vary by user. Every flag is on or off for everybody, and nobody outside the engineering team can touch it. Those two limits are the whole decision.</p>

<h2>The three requests that mean you have outgrown it</h2>

<p>A platform becomes worth its cost when one of these lands, and in our experience they arrive in this order.</p>

<ul>
<li><strong>"Can you turn it on just for this customer?"</strong> Usually from sales or support, usually about a feature that is nearly ready. Per-account targeting in a config file means hard-coding account ids and redeploying for each one, and that gets old by the third request.</li>
<li><strong>"Can we roll it out to ten percent first?"</strong> Percentage rollouts need a stable hash of the user and a way to move the dial without a deploy. You can write that in an afternoon, and then you own it forever.</li>
<li><strong>"Two services need to agree."</strong> Once the web app and a worker both need to see the same flag at the same moment, a shared source of truth stops being optional. This is the same shape of problem as <a href="/articles/choosing-a-background-job-queue">picking a job queue</a>: the moment more than one process is involved, ad hoc stops working.</li>
</ul>

<blockquote>
<p>Buy a flag platform when a person who cannot deploy needs to change a flag, or when a flag needs to mean different things to different users. Not before.</p>
</blockquote>

<h2>What the platforms cost once you are there</h2>

<p>The pricing models are not equivalent, and the difference is which number grows. Some charge for your team, some for your traffic, and some for your users. Which one hurts depends on the shape of your product.</p>

<table>
<thead>
<tr><th>Tool</th><th>Free tier</th><th>First paid step</th><th>What scales the bill</th></tr>
</thead>
<tbody>
<tr><td>PostHog</td><td>1M flag requests a month, bundled with analytics</td><td>Usage-based beyond the allowance</td><td>Requests</td></tr>
<tr><td>LaunchDarkly</td><td>Developer: unlimited seats, 1 project, 3 environments, 5 service connections, 1K client-side MAU</td><td>Foundation: $10 per service connection, $8.33 per 1K client-side MAU billed yearly</td><td>Monthly users and connected services</td></tr>
<tr><td>Flagsmith</td><td>50K requests a month, 1 team member, 1 project</td><td>Start-Up: $40 a month billed yearly, 1M requests, 3 seats</td><td>Requests, then seats</td></tr>
<tr><td>Unleash</td><td>Open source, self-hosted: unlimited seats, 1 project, 2 environments</td><td>$75 per seat per month, five-seat minimum</td><td>Seats on your team, not your traffic</td></tr>
</tbody>
</table>

<p>If you already send product analytics to PostHog, its flags are the obvious first stop: the same person properties you use for funnels become targeting rules, and one million requests a month is a long way for a small product. The catch is the same one as with any bundle — if you leave the analytics, you leave the flags.</p>

<p>LaunchDarkly's free plan is more generous on seats than people expect and more restrictive on users. One thousand client-side monthly actives is a beta, not a launch, and once you are on Foundation the MAU line is what grows. It is the right choice when you need approvals, scheduled changes and a very mature SDK in an unusual language, and it is overkill for a two-service app.</p>

<p>Flagsmith and Unleash are both open source, which matters if your policy is that anything in the request path has to be something you could run yourself. Flagsmith's hosted tier prices on requests; Unleash prices on people, with a five-seat floor. For a small team with a lot of traffic, that floor is the cheaper deal; for a large team with a small product, it is the expensive one.</p>

<h2>The cost nobody quotes</h2>

<p>Every platform puts an SDK in your request path and a network call in your startup. All of them cache aggressively and degrade to defaults if the service is unreachable, but you should know what those defaults are before the day the service is unreachable, because the flag you most want to flip during an incident is the one whose provider is also having one.</p>

<p>The other cost is the flags themselves. A flag is two code paths, both of which need tests, one of which is usually forgotten. Platforms will show you a list of stale flags; none of them will remove the dead branch from your codebase. Our rule is that a flag gets an owner and a removal date on the day it is created, and a scheduled job lists anything over ninety days old. Without that, the dashboard ends up looking like the wall in the photograph — dozens of switches, wired by people who have left, and nobody willing to touch any of them.</p>

<h2>Where we landed</h2>

<p>A config object with environment overrides until a non-engineer asks to flip something, or a flag needs to differ per user. Then PostHog if the analytics are already there, Flagsmith's hosted tier if not, and Unleash self-hosted only where somebody actively wants to own the server. LaunchDarkly when a procurement team is involved and the feature list has to match a spreadsheet. The same build-or-buy reasoning we used for <a href="/articles/authentication-build-or-buy">authentication</a> applies here, with a lower bar: flags are easy to build and easy to leave, so buy late and stay flexible.</p>`,
};
