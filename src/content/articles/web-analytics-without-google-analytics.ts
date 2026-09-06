import type { Article } from "@/content/types";

export const webAnalyticsWithoutGoogleAnalytics: Article = {
  slug: "web-analytics-without-google-analytics",
  title: "Web Analytics Without Google Analytics: What You Gain and What You Give Up",
  excerpt:
    "Most teams open their analytics twice a month and leave with the same three numbers. That is a small enough job that the tool doing it should be simple, cheap and honest about retention — and the honest part is where GA4 falls down for small sites.",
  image: "/images/articles/web-analytics-without-google-analytics.webp",
  imageAlt:
    "Photograph: a laptop screen at an angle showing a web analytics report, with a visitors-over-time line chart above a new-versus-returning pie chart",
  category: "software",
  author: "toolnest-editorial",
  tags: ["Software", "Analytics", "Privacy", "Small Teams"],
  publishedAt: "2026-09-05",
  contentUpdatedAt: "2026-09-06",
  seoTitle: "GA4 Alternatives: Plausible, Umami, Matomo (2026)",
  seoDescription:
    "What GA4 costs you in retention and complexity, how Plausible, Umami and Matomo compare, and how to switch without losing your history.",
  quickAnswer:
    "Decide what you use analytics for before you choose a tool. If the answer is which pages people find, where they came from and which ones convert, almost anything does that, and the deciding factors become retention, consent and cost. GA4 keeps event-level data for two months by default on a standard property, with fourteen months the longest option — after that it is deleted and only aggregated reports remain. The lighter alternatives keep data indefinitely and are simpler to read, but you give up the Google Ads and Search Console integrations and, on self-hosted setups, take on running the thing. Matomo is free on your own server and starts around €29 a month hosted; Plausible starts at $9 a month and publishes a self-hostable community edition under the AGPL. Run the new tool alongside the old one for a month before switching anything off.",
  pros: [
    "The simple tools fit on one screen, so people actually look at them",
    "No sampling and no fourteen-month cliff — your history stays your history",
    "Self-hosting is genuinely cheap once you already run a database",
    "A tool that stores nothing on the visitor's device is a much shorter conversation with a lawyer",
  ],
  cons: [
    "You lose the Google Ads and Search Console integrations, which matter if you buy traffic",
    "Historical GA4 data does not import, so a switch means a gap or two tools for a while",
    "Self-hosting means you now own an uptime problem and a database that grows",
    "Simple tools stay simple, so genuinely complex funnel questions may need the heavy option",
  ],
  alternatives: [
    { name: "Plausible", url: "https://plausible.io/privacy-focused-web-analytics", note: "One screen, no cookies by default, hosted in the EU. Community edition self-hostable under the AGPL with some features held back." },
    { name: "Umami", url: "https://umami.is/docs", note: "Open source and light enough to run beside an existing Postgres instance. The cheapest credible option if you already have a server." },
    { name: "Matomo", url: "https://matomo.org/pricing/", note: "The full-featured one. Free on your own hardware with unlimited hits, or hosted from around €29 a month for 50,000 hits." },
    { name: "Google Analytics 4", url: "https://support.google.com/analytics/answer/7667196", note: "Free, deeply integrated with Ads and Search Console, and the only one that answers questions about paid campaigns properly." },
  ],
  faqs: [
    {
      question: "How long does GA4 actually keep my data?",
      answer:
        "Shorter than most people assume. On a standard property, user-level and event-level data can be retained for two months or fourteen months, and two months is the default. The longer windows of 26, 38 and 50 months are reserved for Analytics 360. When data reaches the end of its window it is deleted automatically on a monthly basis, and reports covering that period fall back to aggregated tables. So a year-on-year comparison built from event-level detail is not a query you can reliably run on a standard property — which is worth knowing before you plan a strategy meeting around it.",
    },
    {
      question: "Does a cookieless analytics tool mean I can drop my consent banner?",
      answer:
        "It removes one of the two reasons you might need one, not both. In the UK, PECR governs storing or accessing information on someone's device, and analytics storage has never counted as strictly necessary, so it needs consent. A tool that stores nothing on the device sits outside that rule. Data protection law still applies separately to whatever personal data you process, so the question becomes what the tool records and under what basis. This is not legal advice, but the practical version is simple: ask a vendor precisely what they write to the device and what they keep, and get the answer in writing.",
    },
    {
      question: "Can I move my old Google Analytics data across?",
      answer:
        "Not in any way that produces a single continuous history. The data models are different, and the alternatives are not built to accept a GA4 export. The realistic approach is to run both in parallel for a month or two, export what you actually care about from GA4 as a spreadsheet — usually monthly sessions and top pages, not the raw events — and treat that as the archive. Almost nobody looks at analytics older than a year, so the gap costs less than the migration effort would.",
    },
    {
      question: "Is self-hosting worth it?",
      answer:
        "It is, if you already run a server and a database, and it is not if you do not. Matomo's on-premise edition is free with unlimited hits, and Umami is light enough to sit next to an existing Postgres instance. What you take on is upgrades, backups and an uptime problem for something that is invisible when it works. Plausible is explicit that its community edition ships long-term releases twice a year and holds back funnels, revenue goals and single sign-on. Compare the annual subscription against a few hours a year of your own maintenance and pick honestly.",
    },
  ],
  sources: [
    {
      title: "Data retention",
      publisher: "Google",
      url: "https://support.google.com/analytics/answer/7667196",
      checkedAt: "2026-09-06",
    },
    {
      title: "Plausible Analytics: privacy-friendly analytics",
      publisher: "Plausible",
      url: "https://plausible.io/privacy-focused-web-analytics",
      checkedAt: "2026-09-06",
    },
    {
      title: "Plausible Community Edition self-hosting",
      publisher: "Plausible",
      url: "https://plausible.io/docs/self-hosting",
      checkedAt: "2026-09-06",
    },
    {
      title: "Matomo pricing",
      publisher: "Matomo",
      url: "https://matomo.org/pricing/",
      checkedAt: "2026-09-06",
    },
    {
      title: "Umami documentation",
      publisher: "Umami",
      url: "https://umami.is/docs",
      checkedAt: "2026-09-06",
    },
    {
      title: "Cookies and similar technologies",
      publisher: "Information Commissioner's Office",
      url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/",
      checkedAt: "2026-09-06",
    },
  ],
  content: `<p>Ask a small team what they use analytics for and the answer, once you strip out the aspiration, is nearly always the same three things. Which pages are people finding. Where did they come from. Did anyone do the thing we wanted them to do.</p>

<p>That is a modest job. It does not need a product built for enterprises buying media at scale, and it certainly does not need a tool you have to relearn every time you open it. The interesting question is not whether the alternatives can answer those three questions — they all can — but what you give up by leaving, and whether you were using any of it.</p>

<h2>What GA4 actually costs you</h2>

<p>It is free, so the cost shows up elsewhere. Two places, mainly.</p>

<p>The first is retention, and it surprises people. On a standard property, user-level and event-level data can be kept for two months or fourteen, and two months is the default. The longer windows — 26, 38 and 50 months — are available only on Analytics 360. Once data passes the end of its window it is deleted automatically on a monthly basis and what remains is aggregated reporting. If you have ever opened GA4 to compare this quarter against the same quarter last year and found the detail missing, that is why, and it is a setting rather than a bug. Check yours; if nobody ever changed it, you are keeping two months.</p>

<p>The second cost is comprehension. GA4's model of events and parameters is genuinely more flexible than what came before, and that flexibility is the point for a team with an analyst. For a team of four, the flexibility means every simple question requires a custom exploration, and the number you read on Tuesday does not match the one somebody else read on Wednesday. Analytics only helps if people look at it, and people do not look at things that make them feel stupid.</p>

<h2>The options, honestly compared</h2>

<p>Prices below are published rates at the time of writing and change more often than the products do.</p>

<table>
<thead>
<tr><th>Tool</th><th>Cost</th><th>Data retention</th><th>Best when</th></tr>
</thead>
<tbody>
<tr><td>Google Analytics 4</td><td>Free</td><td>Two or fourteen months on a standard property</td><td>You buy ads and need the Google integrations</td></tr>
<tr><td>Plausible</td><td>From $9/month hosted; community edition self-hostable</td><td>Kept for as long as you subscribe</td><td>You want one screen everybody can read</td></tr>
<tr><td>Umami</td><td>Free self-hosted; hosted tier available</td><td>Yours, in your own database</td><td>You already run Postgres and a server</td></tr>
<tr><td>Matomo</td><td>Free on-premise; hosted from about €29/month for 50,000 hits</td><td>Yours, indefinitely</td><td>You need the depth without the Google account</td></tr>
</tbody>
</table>

<p>The split is cleaner than the table makes it look. Matomo is the full replacement, with the feature list and the corresponding complexity. Plausible and Umami are deliberately narrow: a page of numbers, no configuration, nothing to learn. Which side you belong on depends on whether the last five things you wanted from analytics were on one screen or in an exploration you had to build.</p>

<h2>Where consent actually bites</h2>

<p>This is the part most comparison articles get slightly wrong, so it is worth being precise about which rule does what.</p>

<p>In the UK, PECR governs storing information on a visitor's device or reading what is already there. Only storage that is strictly necessary to deliver the service the person asked for is exempt, and analytics has never qualified — the ICO's own website classes its analytics cookies as optional rather than essential. That is the rule your banner exists to satisfy. A tool that writes nothing to the device is not caught by it.</p>

<p>Data protection law is a separate matter, and it does not disappear because you dropped the cookie. If a tool processes something that identifies a person, you need a basis for that regardless of where it is stored. What this means in practice is that "cookieless" is a meaningful reduction in the paperwork rather than an exemption from all of it.</p>

<blockquote>
<p>Ask a prospective vendor two questions and get the answers in writing: exactly what do you write to the visitor's device, and exactly what do you retain about them. A vendor who cannot answer both in a paragraph is telling you something useful.</p>
</blockquote>

<p>There is a practical benefit here that gets overlooked. A consent banner suppresses a meaningful share of your traffic from ever being counted, because a large proportion of visitors decline. Removing the banner does not only simplify the legal position, it makes the numbers more complete — which is a strange argument for the privacy-preserving option, and a true one.</p>

<h2>What you actually give up</h2>

<p>Three things, and only one of them matters to most small sites.</p>

<ul>
<li><strong>Google Ads and Search Console integration.</strong> This is the real loss. If you spend money on Google traffic, GA4's attribution is not something the alternatives replicate, and you should keep it. Nothing stops you running both.</li>
<li><strong>The free export to a data warehouse.</strong> Relevant if somebody on your team writes SQL against event data. If nobody does, it is a feature you were describing rather than using.</li>
<li><strong>Continuity of history.</strong> Nothing imports GA4 data cleanly. Accept the gap, export a monthly summary before you leave, and move on.</li>
</ul>

<p>What you gain is subtler and easier to underrate: a tool people voluntarily open. We have watched teams go from checking analytics when somebody asks a question to checking it in the Monday meeting, purely because the answer is now on the first screen. That change is worth more than any feature on the list above. It is the same pattern behind a <a href="/articles/weekly-publishing-workflow">weekly publishing workflow</a> that survives contact with a busy week — the tool that gets used is the one with the least friction, not the one with the most capability.</p>

<h2>Switching without losing anything</h2>

<p>The failure mode is switching on a Friday, deleting the old property, and discovering in March that the only record of last year is gone. A month of overlap prevents it:</p>

<ol>
<li><strong>Install the new tool alongside GA4</strong> and leave both running. Two scripts will not measurably slow your site, and the lighter tools are typically a fraction of the size of the Google tag.</li>
<li><strong>Compare a full month.</strong> The totals will not match, and that is expected — different bot filtering, different session definitions, and a consent banner suppressing one of them. What matters is that the trends and the top pages agree.</li>
<li><strong>Export what you want to keep</strong> from GA4 as a spreadsheet: monthly sessions, top pages, top referrers. Not the raw events, which nobody will ever read.</li>
<li><strong>Remove the old tag</strong> and take the banner down if the new tool genuinely stores nothing.</li>
</ol>

<p>If you self-host, add one more step: check where the database lives and whether it is included in the backups you already run. An analytics database quietly growing on a server nobody backs up is a small tragedy waiting for a disk failure, and it is exactly the sort of thing a <a href="/articles/deploying-a-nextjs-app-four-routes">deployment setup you chose for other reasons</a> tends to leave out.</p>

<h2>What we would do</h2>

<p>If you do not buy traffic, move to a light tool and stop paying attention to numbers you were not using. If you do buy traffic, keep GA4 for the campaign attribution and add a simple tool beside it for everyone else, because the people who need to know which article did well should not have to build an exploration to find out.</p>

<p>Either way, set a calendar reminder to check your GA4 retention setting today. It takes thirty seconds, and two months is a shorter memory than most teams believe they have.</p>`,
};
