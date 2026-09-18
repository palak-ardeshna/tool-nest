import type { Article } from "@/content/types";

export const keywordResearchWithoutASubscription: Article = {
  slug: "keyword-research-without-a-subscription",
  title: "Keyword Research Without a Subscription: What the Free Tools Actually Tell You",
  excerpt:
    "Google Trends, Search Console, Keyword Planner and Ahrefs Webmaster Tools cover most of what a small publication needs before it pays for anything. Here is what each one measures, what the numbers mean, and where the free tier stops.",
  category: "research",
  author: "parth-patel",
  tags: ["Research", "SEO", "Google Trends", "How-To"],
  publishedAt: "2026-09-12",
  image: "/images/articles/keyword-research-without-a-subscription.webp",
  imageAlt: "A laptop on a desk showing a web analytics dashboard with a line graph and a pie chart",
  seoTitle: "Keyword Research Without a Subscription",
  seoDescription:
    "Google Trends, Search Console, Keyword Planner and Ahrefs Webmaster Tools: what each free tool measures, how to read it, and when a paid tool earns it.",
  quickAnswer:
    "You do not need a £100-a-month SEO suite to find out what to write. Google Trends tells you whether interest in a topic is rising or falling, Search Console tells you what your own site already ranks for, Keyword Planner gives you a rough search volume band if you have an Ads account, and Ahrefs Webmaster Tools shows the keywords and backlinks for any site you can verify. Between them they answer the question that matters — is there demand, and is it under-served — well enough to decide what to write next. Paid tools earn their money on competitor data and scale, not on better numbers.",
  pros: [
    "Every tool here is free, and three of them come from the same company that runs the search engine",
    "Search Console is the only source of real click data for your own site — no paid tool can beat it",
    "Trends is the quickest way to tell a growing topic from one that peaked two years ago",
    "Ahrefs Webmaster Tools gives a verified site most of what a paid Site Explorer subscription gives",
  ],
  cons: [
    "Trends numbers are relative, not absolute — a 100 can mean a thousand searches or a million",
    "Keyword Planner shows volume bands unless you are spending on Ads",
    "None of the free tools show you a competitor's keywords",
    "Search Console only covers what you already rank for, which is no help on a new site",
  ],
  alternatives: [
    { name: "Google Trends", url: "https://trends.google.com", note: "Relative interest over time and by region. The right tool for 'is this growing', the wrong one for 'how many'." },
    { name: "Google Search Console", url: "https://search.google.com/search-console", note: "Real queries, impressions and clicks for a site you own. Free and irreplaceable." },
    { name: "Ahrefs Webmaster Tools", url: "https://ahrefs.com/webmaster-tools", note: "Free Site Explorer and Site Audit for verified sites; competitor data needs a paid plan." },
    { name: "AnswerThePublic", url: "https://answerthepublic.com", note: "Question and preposition clusters around a seed term; useful for FAQ sections, paid after a small daily allowance." },
  ],
  faqs: [
    {
      question: "What does a Google Trends score of 50 mean?",
      answer:
        "Half as popular as the peak in the time window and region you selected. Google divides each data point by the total searches in that region and period, then scales the result so the highest point is 100. It says nothing about the absolute number of searches, and two regions showing the same score can have wildly different search volumes. Use it to compare terms against each other and to see direction, not to estimate traffic.",
    },
    {
      question: "Is Keyword Planner useless without spending on Ads?",
      answer:
        "Not useless, but blunt. Without an active campaign it shows ranges such as 1K–10K rather than a number, which is fine for sorting topics into 'nobody searches this', 'some people do' and 'a lot of people do'. That is honestly most of what you need at the decision stage. If you want a figure, third-party tools estimate one, but their figure is a model too.",
    },
    {
      question: "Do I need a paid tool at all?",
      answer:
        "For a site under a few hundred pages, run by one or two people, usually not. The free tools cover demand and your own performance. What they do not cover is what a competitor ranks for, historical rank tracking, and keyword lists at scale. If your day involves those things, pay. If you are deciding what to write this week, you already have enough.",
    },
  ],
  sources: [
    {
      title: "FAQ about Google Trends data",
      publisher: "Google",
      url: "https://support.google.com/trends/answer/4365533",
      checkedAt: "2026-09-12",
    },
    {
      title: "Performance report (Search results)",
      publisher: "Google Search Central",
      url: "https://support.google.com/webmasters/answer/7576553",
      checkedAt: "2026-09-12",
    },
    {
      title: "Ahrefs Webmaster Tools",
      publisher: "Ahrefs",
      url: "https://ahrefs.com/webmaster-tools",
      checkedAt: "2026-09-12",
    },
    {
      title: "AnswerThePublic pricing",
      publisher: "AnswerThePublic",
      url: "https://answerthepublic.com/pricing",
      checkedAt: "2026-09-12",
    },
    {
      title: "About Keyword Planner",
      publisher: "Google Ads Help",
      url: "https://support.google.com/google-ads/answer/7337243",
      checkedAt: "2026-09-12",
    },
  ],
  content: `<p>Most keyword research advice is written by people selling keyword research tools. That is not a conspiracy, it is just where the budget is, and it means the free options get described as a stepping stone to the real thing. For a small publication they are usually the real thing. This is what we use before writing anything on ToolNest, and it costs nothing.</p>

<p>The question you are trying to answer is not "what is the search volume". It is two questions: does anyone want this, and is what already exists any good? The first is a demand question and the free tools answer it. The second is a judgement you make by reading the top ten results, and no tool answers it for you.</p>

<h2>Google Trends: direction, not size</h2>

<p>Trends is the most misread tool in the set. The graph runs from 0 to 100 and people read it as a count. It is not. Google divides each point by the total searches in the region and period you picked, then scales the series so the highest point is 100. A score of 100 for "static site generator" and a score of 100 for "weather" describe two entirely different amounts of traffic.</p>

<p>What it is good for:</p>

<ul>
<li><strong>Direction.</strong> Set the window to five years. A term climbing steadily is worth more than one that spiked in 2023 and has fallen every quarter since, even if the second one still has more searches today.</li>
<li><strong>Comparison.</strong> Put up to five terms on the same chart. Because the scale is shared, you can see which phrasing people actually use — "AI notetaker" against "meeting transcription app", for instance.</li>
<li><strong>Region.</strong> The country breakdown tells you whether your readers are where you think they are. We write in British English and check UK interest specifically; a topic that is large in the US and flat in the UK is a different piece.</li>
<li><strong>Related queries.</strong> The "rising" list at the bottom is the cheapest source of sub-topics you will find. Those are questions people started asking recently, which is exactly what has fewest good answers.</li>
</ul>

<p>The trap is the small-number problem. A niche term will show a jagged line full of zeros, not because interest is zero but because the sample is thin. If the chart looks like static, widen the window or the region before you draw a conclusion.</p>

<h2>Search Console: the only real numbers you will get</h2>

<p>Every paid tool estimates. Search Console reports. For a site you own it shows the actual queries that produced impressions, the clicks those impressions earned, the click-through rate and your average position, filterable by page, country, device and date. Nothing you can buy is more accurate about your own site, because everything you can buy is guessing at what this report knows.</p>

<p>The use that pays off fastest is the one nobody bothers with: sort your queries by impressions, then look for ones with a poor click-through rate and a position between roughly 5 and 15. Those are pages Google already thinks are relevant that are losing the click to someone above you. A better title, a clearer opening paragraph or a section that answers the query directly moves those far more cheaply than a new article does.</p>

<p>The second use is finding articles you have not written. Queries that bring impressions to a page that only half-answers them are a content list, ranked by demand, sitting in your own account. When we looked at ours, <a href="/articles/ai-meeting-notetakers-compared">the meeting notetaker comparison</a> was picking up consent-law queries it only touched on, which is how the consent section in that piece got longer.</p>

<p>The limitation is obvious once said: Search Console only covers what you already rank for. On a new site it is empty, and on an established one it cannot tell you about topics you have never written about. That is where the next two tools come in.</p>

<h2>Keyword Planner: volume bands, and that is fine</h2>

<p>Keyword Planner lives inside Google Ads and exists to sell advertising, so you need an Ads account to open it. Without an active campaign it shows monthly search volume as a range — 100 to 1K, 1K to 10K — rather than a figure. People complain about this. We think it is honest. Every exact number any tool gives you is a model output with error bars it does not show; a range at least admits what it is.</p>

<p>For deciding what to write, three buckets are all you need. A topic in the 10–100 band is a page you write because it matters to you, not for traffic. One in the 1K–10K band is a sensible article. Above that, look hard at what already ranks, because the competition will be established sites with budgets. The exact figure inside the band rarely changes the decision.</p>

<h2>Ahrefs Webmaster Tools: a paid tool's core, free for your own site</h2>

<p>Ahrefs gives away a version of its Site Explorer and Site Audit for any site you can verify ownership of. As of our check that means keyword and backlink data for your own pages, a technical crawl that flags broken links, missing metadata and slow pages, and a privacy-first analytics option, with limits that a small site will not hit — 5,000 crawl credits a month and a thousand rows at a time in the explorer.</p>

<p>What you do not get is the reason people pay: competitor data. You cannot point it at another site. If the question is "what does the site that outranks me rank for", the free tier does not answer it, and that is deliberate.</p>

<p>Still, for a site under a few hundred pages, the Site Audit alone is worth the sign-up. It found redirect chains on ToolNest that none of us had noticed, and it will find the same on yours.</p>

<h2>Question tools, and when they are worth £20</h2>

<p>AnswerThePublic and its imitators take a seed term and pull the auto-complete suggestions for every question word and preposition Google offers — "why is", "can I", "versus", "for". The output is a large radial diagram that is much less useful than the plain list view underneath it.</p>

<p>The free allowance is a few searches a day, and the Starter plan is around $20 a month at the time of writing. It is worth that if you write FAQ sections and want the questions people actually type rather than the ones you imagine. It is not worth it as a demand tool, because auto-complete tells you a phrase exists, not how often anyone searches it. Every FAQ block on this site started as one of these lists, then had the questions we could not honestly answer removed.</p>

<h2>Putting it in an order that works</h2>

<ol>
<li><strong>Start with the idea, not the tool.</strong> Tools are good at ranking ideas you already have and bad at producing them. Write down five topics you could write well before opening anything.</li>
<li><strong>Trends for direction.</strong> Five-year window, your target region. Drop anything in steady decline unless you have a specific reason.</li>
<li><strong>Keyword Planner for the band.</strong> Sort the survivors into small, medium and large. Most of what you write should be medium.</li>
<li><strong>Read the top ten.</strong> This is the step everyone skips. If the first page is thorough, current and well-sourced, you need a genuinely different angle or you will be page two forever. If it is thin, out of date or all affiliate lists, that gap is your article.</li>
<li><strong>Search Console afterwards.</strong> Six weeks after publishing, look at what the page is getting impressions for. That list is the next article.</li>
</ol>

<h2>When to pay</h2>

<p>Pay when you spend more time working around the free limits than the subscription costs in hours, or when you genuinely need to see a competitor's data. That is typically an agency, a large content team or a site whose revenue depends on ranking for a few specific terms. If you are a small publication deciding what to write this week, the tools above answer the question, and the £100 a month is better spent on the writing. We went through the same calculation for our own stack in <a href="/articles/auditing-small-team-software-spend">what we pay for and what we cancelled</a>, and the SEO suite is on the cancelled side.</p>`,
};
