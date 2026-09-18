import type { Article } from "@/content/types";

export const checkingAClaimBeforeYouPublish: Article = {
  slug: "checking-a-claim-before-you-publish",
  title: "Checking a Claim Before You Publish: The Free Tools and the Order to Use Them In",
  excerpt:
    "A pricing figure, a statistic, a quote, a screenshot. Each one can be checked in under five minutes with tools that cost nothing, if you know which tool answers which question. This is the sequence I run on every article, and where it still fails.",
  category: "research",
  author: "parth-patel",
  tags: ["Research", "Fact-Checking", "Sources", "How-To"],
  publishedAt: "2026-09-12",
  image: "/images/articles/checking-a-claim-before-you-publish.webp",
  imageAlt: "A folded newspaper on a wooden table with a cup of coffee and a pair of red shoes resting on it",
  seoTitle: "Checking a Claim Before You Publish",
  seoDescription:
    "Wayback Machine, Fact Check Explorer, reverse image search and primary sources: which free tool answers which claim, and the order to run them in.",
  quickAnswer:
    "Every claim has a type, and each type has a tool. A price or a feature is checked against the vendor's own page, with the Wayback Machine to prove what it said on the day you looked. A statistic is traced to the report that produced it, not the article that quoted it. A quote is found in its original context. A screenshot or photo goes through reverse image search to find where it first appeared. A viral claim goes through Google's Fact Check Explorer to see if someone has already done the work. The order matters less than the habit: find the primary source, record when you read it, and write down what you could not confirm rather than smoothing it over.",
  pros: [
    "Every tool here is free and needs no account",
    "The Wayback Machine turns 'the page said this' into a dated, linkable record",
    "Reverse image search settles most screenshot disputes in one query",
    "Fact Check Explorer stops you redoing work a newsroom has already published",
  ],
  cons: [
    "The Wayback Machine has gaps, and many modern pages archive as a blank shell",
    "Reverse image search is weak on cropped, filtered or freshly generated images",
    "Fact-checker coverage is heavy on politics and thin on software and pricing",
    "None of this catches a primary source that is itself wrong",
  ],
  alternatives: [
    { name: "Wayback Machine", url: "https://web.archive.org", note: "Archived copies of pages by date. Save Page Now records what a page said when you cited it." },
    { name: "Google Fact Check Explorer", url: "https://toolbox.google.com/factcheck/explorer", note: "Searches published fact-checks from organisations using the ClaimReview markup." },
    { name: "TinEye", url: "https://tineye.com", note: "Reverse image search that sorts by oldest appearance, which is what you want for provenance." },
    { name: "Google Lens", url: "https://lens.google.com", note: "Broader image index than TinEye; better at finding the object, worse at finding the first copy." },
  ],
  faqs: [
    {
      question: "The vendor's page has changed since I wrote the article. Was I wrong?",
      answer:
        "Not if you recorded the date. Prices and feature lists change under a stable URL, which is exactly why I attach a 'checked on' date to every source on this site. Save the page to the Wayback Machine when you cite it and you have a copy that shows what it said. The article is then correct as of a date rather than wrong as of today, and a reader can see which.",
    },
    {
      question: "A statistic appears in twenty articles. Is that enough?",
      answer:
        "No. Twenty articles quoting each other is one source repeated, and it is often a source nobody in the chain has read. Search the figure with quotation marks, follow the earliest link you can find, and keep going until you reach a report, a dataset or a study. If the chain ends at a blog post with no citation, the statistic has no known origin and you should say so or drop it.",
    },
    {
      question: "What if I cannot confirm something?",
      answer:
        "Write that you could not. 'The vendor did not respond' and 'I could not find a primary source for this figure' are ordinary sentences in a serious publication and unusual ones in a bad one. The alternative is to publish the claim with the uncertainty removed, which is how a figure nobody can trace ends up in twenty articles.",
    },
  ],
  sources: [
    {
      title: "Using the Wayback Machine",
      publisher: "Internet Archive",
      url: "https://help.archive.org/help/using-the-wayback-machine/",
      checkedAt: "2026-09-12",
    },
    {
      title: "Fact Check Tools",
      publisher: "Google",
      url: "https://toolbox.google.com/factcheck/about",
      checkedAt: "2026-09-12",
    },
    {
      title: "Fact Check (ClaimReview) structured data",
      publisher: "Google Search Central",
      url: "https://developers.google.com/search/docs/appearance/structured-data/factcheck",
      checkedAt: "2026-09-12",
    },
    {
      title: "TinEye FAQ",
      publisher: "TinEye",
      url: "https://tineye.com/faq",
      checkedAt: "2026-09-12",
    },
  ],
  content: `<p>Most errors in published articles are not lies. They are claims that were true somewhere, once, and were copied without anyone going back to check. A price from last year. A statistic from a report that measured something slightly different. A screenshot that was real but of a different product. None of these takes long to catch if you check the right thing, and all of them survive indefinitely if you check the wrong one.</p>

<p>What follows is the sequence I run on every ToolNest article before it goes out. It uses nothing you need to pay for. It does not catch everything, and the last section is about what it misses.</p>

<h2>First, name the type of claim</h2>

<p>The mistake that makes fact-checking feel slow is treating every claim the same way. They are not the same. A sentence like "Otter's free tier caps conversations at 30 minutes" is a vendor fact; "40% of meetings could have been an email" is a statistic; "the CEO said the product was finished" is a quote; and a screenshot of a pricing page is an image. Each of those has one tool that answers it and several that waste your time.</p>

<table>
<thead>
<tr><th>Claim type</th><th>What settles it</th><th>Tool</th></tr>
</thead>
<tbody>
<tr><td>Price, limit, feature</td><td>The vendor's own page, today</td><td>Their site, then Wayback Machine to record it</td></tr>
<tr><td>Statistic</td><td>The report or dataset that produced it</td><td>Quoted search, then the earliest link that cites a source</td></tr>
<tr><td>Quote</td><td>The original transcript, post or interview</td><td>Quoted search; the publication's own archive</td></tr>
<tr><td>Image or screenshot</td><td>Where it first appeared</td><td>TinEye, Google Lens</td></tr>
<tr><td>Viral or political claim</td><td>Whether a fact-checker has already ruled</td><td>Fact Check Explorer</td></tr>
<tr><td>Historical "the page used to say"</td><td>An archived copy</td><td>Wayback Machine</td></tr>
</tbody>
</table>

<h2>Vendor facts: the page, then the archive</h2>

<p>Go to the pricing or documentation page and read it. Not a review of it, not a comparison table, the page. This sounds too obvious to write down and it is the step most often skipped, because a comparison site already has the number in a tidy table. That table was accurate on the day someone built it, and pricing pages change under a stable URL without any notice.</p>

<p>Then record what you saw. Open the Wayback Machine, paste the URL into Save Page Now, and you have a dated copy you can link to. Every source on this site carries a "checked on" date for the same reason: when Fathom or Granola change a plan next quarter, the article is correct as of a date rather than silently wrong. If the archive already has a capture from the last few days you can use that; the calendar view shows every capture with a blue dot for a clean save.</p>

<p>The limitation is real. Many modern pages load their content with JavaScript after the page arrives, and the archived copy is a blank frame with a spinner. When that happens, take a screenshot with the date visible in your system clock, and keep it. It is a worse record than an archive link, and it is far better than nothing.</p>

<h2>Statistics: follow the chain to the end</h2>

<p>A number in an article was almost always copied from another article. Your job is to find the end of the chain. Search the exact figure and its subject in quotation marks. Sort mentally by date and open the earliest one that names a source. Follow that. Repeat until you are reading the report, the survey methodology or the dataset — or until the trail ends at a post with no citation.</p>

<p>When you reach the origin, check three things: what was actually measured, when, and of whom. "Users spend 40% of their time in meetings" turns out to be a survey of 300 managers at large American firms in 2019, which is not nothing but is not "users" either. Write the qualified version. It is less quotable and it is true.</p>

<p>When the trail ends without a source, the number has no known origin. That is a finding. Either drop it or publish it with that stated, and I would drop it. This is also the check that AI research tools fail most reliably; <a href="/articles/ai-research-tools-and-your-sources">they will hand you the number with a citation to an article that quotes it</a>, which looks like a source and is not.</p>

<h2>Images: find the first copy</h2>

<p>A screenshot proves that a page looked like that on someone's screen at some point. It does not prove when, whose, or whether it was edited. Reverse image search answers the first two questions often enough to be worth the thirty seconds.</p>

<p>TinEye is the tool for provenance because it can sort results by oldest, which tells you where the image first appeared on the indexed web. Google Lens has a much larger index and is better at identifying what is in the picture, but ranks by relevance rather than age, so it is the second tool rather than the first. Run both. If the oldest copy is on a satire account or attached to a different product, you have your answer.</p>

<p>Both are weak on the same things: heavy crops, filters, and images that were generated last week and have never been posted before. A negative result means "not found", not "original". For a screenshot that matters — a pricing page, a message from a vendor — the stronger check is to reproduce it yourself, which is faster than any search.</p>

<h2>Viral claims: see if the work is already done</h2>

<p>Google's Fact Check Explorer searches the published fact-checks of organisations that mark their work up with ClaimReview structured data — the same markup that puts a "Fact check" label under a search result. Paste the claim or a person's name and you get a list of verdicts with links to the full pieces.</p>

<p>Its coverage is what you would expect from who does fact-checking: strong on politics, health and viral news, thin on software, pricing and anything technical. For my subject matter it rarely has a direct hit. It is still worth the query, because when it does, someone has done in a day what would take you an afternoon, and their working is shown.</p>

<h2>Quotes: context is the check</h2>

<p>Search the quote in quotation marks and find the original — the interview, the post, the transcript, the earnings call. Then read the paragraph either side. The quote is usually real; what is missing is the qualifier before it or the reversal after it. If the original is behind a paywall, the Wayback Machine sometimes has it, and a library card often does. If you cannot find the original at all, attribute it to where you found it — "quoted in" — rather than to the person, because you do not actually know they said it.</p>

<h2>The five-minute order</h2>

<ol>
<li><strong>Read your draft for claims,</strong> not for prose. Mark every number, price, quote and "always" or "never". Most paragraphs contain one or two.</li>
<li><strong>Sort them by type</strong> using the table above. This takes a minute and saves ten.</li>
<li><strong>Vendor facts first.</strong> They are quickest, they are the ones readers act on, and they are where this site's own corrections have come from.</li>
<li><strong>Statistics next.</strong> Budget the most time here. A chain of five articles takes five minutes to walk.</li>
<li><strong>Images and quotes last,</strong> because they are usually fewer.</li>
<li><strong>Write down what you could not confirm</strong> and either cut it or say so in the text. Never smooth it over.</li>
</ol>

<h2>What this does not catch</h2>

<p>A primary source can be wrong. A vendor's pricing page can be out of date on the vendor's own site, a report's methodology can be bad, a transcript can be mis-transcribed. Everything above gets you to the origin of a claim; none of it evaluates the origin. That takes domain knowledge, and it is the part that cannot be reduced to a tool.</p>

<p>It also does not catch what you did not think to check. The claims that survive to publication are the ones that sounded obviously true, and those are exactly the ones nobody marks in step one. The only defence I have found is a second reader who has not seen the draft, which is why <a href="/articles/weekly-publishing-workflow">my publishing week</a> has a review day that is not the writing day. It is slower. It is also the reason this article has a source list rather than a corrections list.</p>`,
};
