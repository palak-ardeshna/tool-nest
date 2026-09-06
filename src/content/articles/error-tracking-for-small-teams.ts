import type { Article } from "@/content/types";

export const errorTrackingForSmallTeams: Article = {
  slug: "error-tracking-for-small-teams",
  title: "Error Tracking and Uptime Monitoring for Small Teams, Without the Enterprise Bill",
  excerpt:
    "Sentry is priced by event volume, and event volume is not something you control on a bad day. Here is how the alternatives differ, what self-hosting really costs, and the four things to set up before you need any of them.",
  category: "developer-tools",
  author: "toolnest-editorial",
  tags: ["Developer Tools", "Monitoring", "Self-hosting", "Comparisons"],
  publishedAt: "2026-08-28",
  contentUpdatedAt: "2026-09-01",
  featured: true,
  image: "/images/articles/error-tracking-for-small-teams.webp",
  imageAlt: "A laptop screen showing a web performance monitoring dashboard: load time and start render histograms with a bounce rate curve over them, above session and page-view figures",
  seoTitle: "Error Tracking for Small Teams (2026)",
  seoDescription:
    "Sentry, GlitchTip, Better Stack and Honeybadger compared for small teams: how event-based pricing bites, and the four alerts worth setting up on day one.",
  quickAnswer:
    "Error tracking and uptime monitoring are two different problems sold as one product, and small teams routinely overbuy on the first while neglecting the second. Sentry has the best SDKs and a bill that scales with your worst day rather than your traffic. GlitchTip speaks the same SDK protocol at a fraction of the cost and self-hosts in four containers instead of forty. Better Stack bundles errors, uptime and incident alerting at one price, which for a team of five is usually the right shape. Whichever you pick, sampling and a grouping rule matter more than the vendor: an unsampled error loop can turn a five-pound month into a four-hundred-pound one before anyone reads the email.",
  pros: [
    "A stack trace with the actual request state attached ends most debugging in minutes",
    "Sentry's SDK protocol is now a de facto standard, so switching vendors is cheap",
    "Free tiers cover a genuine small production workload, not just a demo",
    "Self-hosted options exist that are realistic to run, which was not true a few years ago",
  ],
  cons: [
    "Event-based pricing means an incident and an invoice arrive together",
    "Default alerting is noisy enough that teams mute it, which defeats the purpose",
    "Error trackers capture request data, and request data contains personal data",
    "Uptime monitoring is frequently an afterthought bolted onto an error product",
  ],
  alternatives: [
    { name: "Sentry", url: "https://sentry.io", note: "The reference implementation. Best SDK coverage, priced by event volume." },
    { name: "GlitchTip", url: "https://glitchtip.com", note: "Open source, Sentry-SDK compatible, hosted or self-hosted in a handful of containers." },
    { name: "Better Stack", url: "https://betterstack.com", note: "Errors, uptime, logs and incident alerting bundled at one price." },
    { name: "Honeybadger", url: "https://honeybadger.io", note: "Errors, uptime, cron checks and status pages from one vendor, aimed at small teams." },
  ],
  faqs: [
    {
      question: "Do we need error tracking if we already have logs?",
      answer:
        "Logs tell you what happened if you already know where to look. An error tracker tells you that something new started happening and how often, then groups every instance of it together so you see one issue rather than nine thousand lines. The two solve different problems. If you can only afford attention for one, the error tracker is the one that finds problems you did not know about.",
    },
    {
      question: "How much sampling is too much?",
      answer:
        "For errors, sample as little as you can afford — the rare one is often the interesting one. For performance traces, sampling at a few per cent is normal and nobody notices the difference, because you are looking at distributions rather than individual requests. The pattern that gets teams in trouble is no sampling at all on a high-traffic endpoint that starts failing in a loop.",
    },
    {
      question: "Is self-hosting worth it to save the subscription?",
      answer:
        "Only if you already run infrastructure and have a working backup routine. GlitchTip is genuinely light to run, but you are adding a service that has to stay up precisely when everything else is falling over, and one that holds request data you now have to secure. At a small team's volume the hosted plan is often cheaper than the hours. Self-host because you want the data on your own hardware, not to save fifteen dollars a month.",
    },
    {
      question: "What is the difference between uptime monitoring and error tracking?",
      answer:
        "An error tracker sees what your application reports about itself, so it is blind to the failure where the application is not running at all. Uptime monitoring checks from outside, so it catches the expired certificate, the DNS change and the crashed process. The outage that embarrasses you is almost always the one only an outside check would have caught.",
    },
  ],
  sources: [
    {
      title: "Pricing | GlitchTip",
      publisher: "GlitchTip",
      url: "https://glitchtip.com/pricing",
      checkedAt: "2026-09-03",
    },
    {
      title: "Open Source Error Tracking | GlitchTip",
      publisher: "GlitchTip",
      url: "https://glitchtip.com/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Install — Documentation | GlitchTip",
      publisher: "GlitchTip",
      url: "https://glitchtip.com/documentation/install",
      checkedAt: "2026-09-03",
    },
    {
      title: "Pricing | Better Stack",
      publisher: "Better Stack",
      url: "https://betterstack.com/pricing",
      checkedAt: "2026-09-03",
    },
    {
      title: "Plans & Pricing - Honeybadger",
      publisher: "Honeybadger",
      url: "https://www.honeybadger.io/plans/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Pricing & Billing",
      publisher: "Sentry",
      url: "https://docs.sentry.io/pricing/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Scrubbing Sensitive Data | Sentry for Python",
      publisher: "Sentry",
      url: "https://docs.sentry.io/platforms/python/data-management/sensitive-data/",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Most small teams buy error tracking twice. The first time is at launch, when someone signs up for the free tier and wires in the SDK. The second time is eight months later, when an unbounded retry loop generates two million events over a weekend and the invoice explains what event-based pricing means.</p>

<p>We have not load-tested these platforms against each other, and any article that claims to has usually tested the free tiers for an afternoon. What follows is how the pricing models differ, which decisions actually protect you, and where the cheap option is genuinely the right one.</p>

<h2>Two problems sold as one product</h2>

<p>Error tracking is your application reporting on itself. It catches the exception, attaches the stack trace and the request context, groups it with the other instances of the same fault, and tells you it is new or newly frequent. It is superb at this and structurally blind to one thing: it cannot report an error when the process is not running.</p>

<p>Uptime monitoring checks from outside. It has no idea what your code is doing and does not need to. It catches the expired certificate, the DNS record someone changed, the container that will not start, the deploy that took the site down entirely.</p>

<blockquote>
<p>The outage that costs you a customer is nearly always the one only an external check would have seen. Teams that buy elaborate error tracking and skip a two-minute uptime check have optimised the wrong half.</p>
</blockquote>

<p>Most vendors now sell both. The question is whether the second one is a real product or a checkbox, and the way to tell is whether it can alert you through a channel you will notice at three in the morning.</p>

<h2>The bill scales with your worst day</h2>

<p>This is the structural thing to understand about the category. You are billed by events, and events are not proportional to traffic. They are proportional to breakage.</p>

<p>A service handling steady traffic might generate a few thousand events a month. The same service with one endpoint failing in a retry loop can generate that in an hour. Pricing that looks generous at your normal volume is not the pricing that applies during the incident, and the incident is when you least want to be reading a billing page.</p>

<table>
<thead>
<tr><th>Option</th><th>Free tier</th><th>Roughly</th><th>Best fit</th></tr>
</thead>
<tbody>
<tr><td>Sentry</td><td>Modest monthly event allowance</td><td>Scales steeply with volume</td><td>Teams that need the deepest SDK and tracing support</td></tr>
<tr><td>GlitchTip</td><td>Around 1,000 events a month hosted</td><td>About $15 at 100k, $50 at 500k</td><td>Cost-sensitive teams already using Sentry SDKs</td></tr>
<tr><td>Better Stack</td><td>Around 100k exceptions a month</td><td>From roughly $29 a month</td><td>Teams wanting errors, uptime and on-call in one bill</td></tr>
<tr><td>Honeybadger</td><td>Trial rather than a standing free tier</td><td>Flat per-project pricing</td><td>Small teams that want one vendor and a predictable invoice</td></tr>
</tbody>
</table>

<p>The detail that makes this market unusually easy to move around in: GlitchTip and several others implement the Sentry SDK protocol. Switching is a configuration change rather than a rewrite. You do not have to get this right first time, which is a good reason not to spend a week on the decision.</p>

<h2>What the alternatives actually change</h2>

<p><strong>GlitchTip</strong> is the lean option. It does error tracking, basic performance data and uptime checks, and it self-hosts in a handful of containers rather than the sprawling deployment a full Sentry installation requires. Its 2026 release improved stack trace handling noticeably. What you give up is the depth of Sentry's tracing and session replay features — which most teams of five were not using anyway.</p>

<p><strong>Better Stack</strong> bundles errors with uptime monitoring and incident management, including on-call rotation and escalation. For a small team this shape is often right: the alternative is three subscriptions and three places to configure who gets woken up. It has also leaned into letting coding agents query exception data directly, which is either useful or a distraction depending on how your team works.</p>

<p><strong>Honeybadger</strong> sells the same integrated idea with flat per-project pricing rather than per-event, which removes the incident-and-invoice problem entirely. If predictability is worth more to you than a low floor, that pricing model is the argument.</p>

<h2>Self-hosting: the honest cost</h2>

<p>Running GlitchTip yourself is realistic in a way that running Sentry yourself is not. It is a small application with a database and a queue, and it will sit happily on a modest virtual machine.</p>

<p>The costs are the ones you would expect and one you might not:</p>

<ul>
<li><strong>It has to be up when everything else is down.</strong> An error tracker on the same host as the application it monitors is decoration. Put it somewhere else, or accept that it will be silent during exactly the failure you bought it for.</li>
<li><strong>Event volume becomes a disk problem.</strong> The retry loop that would have cost money on a hosted plan fills a disk instead. Set retention before you need it.</li>
<li><strong>It holds request data.</strong> Headers, parameters, sometimes bodies. That is personal data with obligations attached, and self-hosting moves those obligations onto you rather than away.</li>
</ul>

<p>At small volumes the hosted plan usually costs less than the hours. The good reasons to self-host are wanting the data on your own hardware and having a contract that requires it — not the fifteen dollars.</p>

<h2>Four things to set up on day one</h2>

<p>These matter more than the vendor, and every one of them is skipped by teams that later describe their monitoring as useless.</p>

<h3>1. A rate limit, before you need one</h3>

<p>Cap events per hour at the SDK, not at the dashboard. A client-side cap is the difference between an incident and an incident plus a bill. Every major SDK supports this and almost nobody configures it.</p>

<h3>2. Scrub the data going out</h3>

<p>Default configurations capture more of the request than you would put in a log deliberately. Authorisation headers, session cookies, form fields, occasionally a whole request body. Set the denylist on the first day, because the entry you did not scrub is already stored by the time you notice it.</p>

<h3>3. Two alert rules, not twelve</h3>

<p>A new issue type in production, and an existing issue whose rate suddenly climbs. That is the whole useful set at a small scale. Every additional rule increases the odds the team mutes the channel, and a muted channel is worth less than no channel at all — it looks like coverage.</p>

<h3>4. One external check that pages a human</h3>

<p>A single request to a URL that exercises your database, every minute, from outside your infrastructure. If it fails twice in a row, someone's phone rings. This is the cheapest monitoring you will ever configure and it catches the failures the other three cannot see. If you set up nothing else on this list, set up this.</p>

<h2>What we would pick at each size</h2>

<ul>
<li><strong>One person, a side project with real users:</strong> GlitchTip's hosted free tier plus a free external uptime check. Total cost nothing, and it covers the two failures that matter.</li>
<li><strong>Two to five people, a product people pay for:</strong> Better Stack, for the single bill covering errors, uptime and who gets woken up. The integration is worth more than the feature depth you are giving up.</li>
<li><strong>Five to twenty, with a real on-call rota:</strong> Sentry, honestly. The SDK depth and tracing start to earn the price once several people are debugging things they did not write — but set the spend cap and the sampling rate on the day you sign up.</li>
<li><strong>Regulated data or a contract that names where data lives:</strong> self-hosted GlitchTip, on infrastructure separate from the application, with retention configured before the first event arrives.</li>
</ul>

<p>The pattern worth remembering is that this category punishes defaults. The default sampling rate, the default scrubbing rules and the default alert configuration are all tuned for a demo, and every one of them costs you something in production — money, privacy, or the team's willingness to look at the alerts. Half an hour of configuration on day one is worth more than any comparison table, ours included. If your stack is Postgres-backed, <a href="/articles/postgres-tools-worth-using">the query-level tooling we reach for</a> covers the layer underneath this one.</p>`,
};
