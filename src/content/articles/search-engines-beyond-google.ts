import type { Article } from "@/content/types";

export const searchEnginesBeyondGoogle: Article = {
  slug: "search-engines-beyond-google",
  title: "Search Engines Beyond Google: Which Ones Have Their Own Index, and Why It Matters",
  excerpt:
    "Kagi, Brave, DuckDuckGo and Perplexity are sold as alternatives to Google, but only some of them are alternatives to Google's index. Here is where each one's results come from, what they cost, and how to tell in a week whether switching is worth the friction.",
  category: "research",
  author: "parth-patel",
  tags: ["Research", "Search", "Privacy", "Comparisons"],
  publishedAt: "2026-09-12",
  image: "/images/articles/search-engines-beyond-google.webp",
  imageAlt: "Hands typing on a laptop open at the Google search page, a mug and a potted plant on the desk",
  seoTitle: "Search Engines Beyond Google Compared",
  seoDescription:
    "Kagi vs Brave vs DuckDuckGo vs Perplexity: which have their own index, what they cost, and a one-week test for whether switching is worth the friction.",
  quickAnswer:
    "The question to ask is not 'is it private' but 'whose index is it'. Brave and Kagi run their own indexes, which means their results can genuinely differ from Google's. DuckDuckGo's traditional web results come largely from Bing behind a privacy proxy, so you are getting Bing's view of the web with your identity removed — a fine trade, but a different one. Perplexity is not a search engine in the same sense: it reads results and writes an answer, which is faster when it is right and harder to check when it is not. Kagi costs $5 or $10 a month and has no ads, which is the whole point; the rest are free or freemium. For research, we would run Kagi or Brave as the default and keep Google one keystroke away.",
  pros: [
    "An independent index surfaces pages Google's ranking buries, which is the point of a second opinion",
    "Kagi lets you raise, lower or block domains permanently — the feature Google removed years ago",
    "DuckDuckGo's bang shortcuts route a query to any site's own search with two characters",
    "None of the four show the ad-heavy top of page that has made Google slower to read",
  ],
  cons: [
    "Smaller indexes are thinner on obscure, local and very recent pages",
    "Kagi is a subscription with a hard search cap on the cheaper plan",
    "Perplexity's answers cite sources but are wrong often enough that you must click them",
    "Switching your browser's default is easy; switching your habits takes a fortnight",
  ],
  alternatives: [
    { name: "Kagi", url: "https://kagi.com", note: "Paid, no ads, own index plus partners. Personal domain ranking is the feature that keeps people on it." },
    { name: "Brave Search", url: "https://search.brave.com", note: "Free, ad-supported, independent index. Goggles let you apply community ranking filters." },
    { name: "DuckDuckGo", url: "https://duckduckgo.com", note: "Free; web results largely from Bing via a privacy proxy, plus its own crawler for instant answers." },
    { name: "Perplexity", url: "https://www.perplexity.ai", note: "Answer engine rather than a results page. Good for a first pass, not for anything you will cite." },
  ],
  faqs: [
    {
      question: "Does 'private' mean the same thing as 'independent'?",
      answer:
        "No, and the two get conflated constantly. Private means the engine does not tie your queries to you. Independent means it crawled and ranked the web itself rather than buying results from Bing or Google. DuckDuckGo is private but its web results are not independent. Brave and Kagi are both. You can want either property; just know which one you are paying for.",
    },
    {
      question: "Is Kagi worth $10 a month?",
      answer:
        "If you search a lot for work, we think yes, and the reason is not results quality. It is the domain controls: block the content farm that keeps appearing, boost the documentation site you always want first, and never see either decision undone. That compounds. If you search a few times a day, the $5 Starter plan with its 300-search cap will probably cover you, and the free trial of 100 searches tells you quickly which side you fall on.",
    },
    {
      question: "Can I just use Perplexity instead of a search engine?",
      answer:
        "For questions with a settled answer, it is faster. For anything you will publish, rely on, or spend money because of, it is a starting point that needs its citations opened. It composes an answer from pages it found, and the composition can be confidently wrong while every footnote is real. We cover the failure modes in our piece on AI research tools; the short version is that the answer is not the source.",
    },
  ],
  sources: [
    {
      title: "Kagi Search Plans",
      publisher: "Kagi",
      url: "https://kagi.com/pricing",
      checkedAt: "2026-09-12",
    },
    {
      title: "Brave Search help",
      publisher: "Brave",
      url: "https://search.brave.com/help/index",
      checkedAt: "2026-09-12",
    },
    {
      title: "Sources of DuckDuckGo search results",
      publisher: "DuckDuckGo",
      url: "https://duckduckgo.com/duckduckgo-help-pages/results/sources/",
      checkedAt: "2026-09-12",
    },
    {
      title: "Perplexity pricing",
      publisher: "Perplexity",
      url: "https://www.perplexity.ai/pricing",
      checkedAt: "2026-09-12",
    },
  ],
  content: `<p>Google is still the best general search engine most of the time, and the moments it is not have become frequent enough that a second engine is worth having. The reasons people give for switching — privacy, ads, AI overviews eating the results — are all real, but they are not the reason we would give. Ours is simpler: two indexes see more of the web than one, and if you do research for a living you want a second opinion that is not just Google's opinion with the tracking removed.</p>

<p>That is why the first thing to establish about any alternative is where its results actually come from. It changes what you are buying.</p>

<h2>Whose index is it?</h2>

<table>
<thead>
<tr><th>Engine</th><th>Web results come from</th><th>Cost</th><th>Ads</th></tr>
</thead>
<tbody>
<tr><td>Kagi</td><td>Own index, blended with partner results</td><td>$5/mo (300 searches) or $10/mo unlimited; 100-search free trial</td><td>None</td></tr>
<tr><td>Brave Search</td><td>Own independent index</td><td>Free; paid ad-free tier available</td><td>Yes, privacy-preserving, on the free tier</td></tr>
<tr><td>DuckDuckGo</td><td>Largely Bing, via a proxy; own crawler for instant answers</td><td>Free</td><td>Yes, non-tracking</td></tr>
<tr><td>Perplexity</td><td>Reads search results and writes an answer</td><td>Free tier; Pro around $20/mo</td><td>Limited</td></tr>
</tbody>
</table>

<p>Brave says outright that it does not rely on Bing or Google to power its engine. DuckDuckGo's own help pages are equally direct that its traditional links and images "come largely from Bing", with the request proxied so Bing sees DuckDuckGo rather than you. Both statements are honest; they just describe different products. If a page is missing from Bing it is missing from DuckDuckGo, and no amount of privacy changes that.</p>

<h2>Kagi: the one you pay for, and why that is the feature</h2>

<p>Kagi's pitch is that a search engine you pay for works for you, and the product mostly delivers on that. There are no ads, no sponsored results, and — the part that keeps people subscribed — you can adjust the ranking of any domain permanently. Block a site and it never appears again. Raise a site and it floats to the top whenever it is relevant. After a month of doing this your results are noticeably cleaner than anyone else's, because the content farms and the SEO-bait listicles are simply gone.</p>

<p>The pricing is $5 a month for 300 searches or $10 for unlimited, with a $25 tier that adds their premium AI features. The trial gives you 100 searches, which is not many; count them as a week of light use. The 300-search cap on the Starter plan sounds generous until you check how often you search when working, which for us was several hundred a week. Most people who stay end up on the $10 plan.</p>

<p>Where it is weaker: very recent news, local businesses, and the long tail of tiny sites that Google has crawled and nobody else has. Kagi blends in partner results to cover the gaps, and it mostly works, but you will occasionally fall back to Google, and the honest test is how often.</p>

<h2>Brave Search: independent and free</h2>

<p>Brave is the closest thing to a free, independent Google. It has its own index, it shows ads unless you pay for Search Premium, and it works without a Brave browser or an account. Results are good for mainstream queries and thinner at the edges, in the same places Kagi is thin, because both are working from a smaller crawl than Google's.</p>

<p>Its distinctive feature is Goggles: community-written ranking filters you can apply to a query. There is one that removes the top thousand sites, one that boosts small blogs, one for technical documentation. It is the same idea as Kagi's domain controls, less personal and less permanent, but free. For a research session where you specifically want what the big sites are not saying, "no big tech" or "small web" Goggles are worth trying once to see what changes.</p>

<h2>DuckDuckGo: Bing, anonymised, with the best shortcuts</h2>

<p>DuckDuckGo has been the default "not Google" for over a decade, and it is worth being clear about what it is: Bing's web results with your identity stripped, plus DuckDuckGo's own crawler feeding instant answers, plus Wikipedia and a set of specialised data sources. That is a good product. It is not a second index.</p>

<p>What it has that nothing else matches is the bang syntax. Type <code>!w</code> before a query and it goes straight to Wikipedia's search; <code>!gh</code> to GitHub, <code>!mdn</code> to the web docs, <code>!g</code> to Google when you need it. There are thousands of these. Once the habit forms, DuckDuckGo becomes less a search engine than a command line for every site's own search, and that alone is a reason to keep it as the default in one browser even if you research elsewhere. It pairs well with <a href="/articles/browser-extensions-that-save-time">a small set of browser extensions</a> that do the same for tabs.</p>

<h2>Perplexity: not a search engine, and that matters</h2>

<p>Perplexity takes your query, runs searches, reads the results and writes an answer with footnotes. For a question with a stable answer — how a library's function works, when a policy changed — this is faster than a results page. For anything contested, recent or nuanced, you have to open the citations anyway, at which point you have done a search with an extra step.</p>

<p>The failure mode is specific and worth naming. The footnotes are real pages. The sentence they are attached to is the model's summary of those pages, and the summary can drop a qualifier, merge two sources or state a probability as a fact. Every citation checks out, and the claim is still wrong. We went into this at length in <a href="/articles/ai-research-tools-and-your-sources">what AI research tools do to your sources</a>, and nothing about it has changed. Use Perplexity to orient yourself, then search properly for anything you will cite.</p>

<p>Pro is around $20 a month at the time of writing and buys more searches on the stronger models. Whether that is worth it depends on whether you use it as a search engine, in which case probably not, or as a reading assistant, in which case it can be.</p>

<h2>A one-week test that gives you an answer</h2>

<p>Do not read comparisons, including this one, for longer than it takes to run the test. It is short.</p>

<ol>
<li><strong>Change your browser default</strong> to the engine you are trialling. Not a bookmark — the default. If it is not the default you will not use it under pressure, and pressure is where the differences show.</li>
<li><strong>Keep a tally of fallbacks.</strong> Every time you re-run a query on Google because the first engine failed, mark it. Note what kind of query it was. After a week you will have a pattern: for us it was local businesses and things that happened yesterday, and nothing else.</li>
<li><strong>Do the reverse once a day.</strong> Take a query you searched on Google and run it on the new engine. Count how often a useful page appears that Google did not show on page one. That number is the value of the second index, and it is the number the privacy argument never mentions.</li>
<li><strong>Decide on the fallback rate.</strong> Under one in ten, the switch is free. One in four, keep both. Over half, the engine is not there yet for your work and it is fine to say so.</li>
</ol>

<h2>What we would pick</h2>

<ul>
<li><strong>You research for a living and search hundreds of times a week:</strong> Kagi at $10. The domain ranking pays for itself in noise removed.</li>
<li><strong>You want an independent index and will not pay for search:</strong> Brave. Try the Goggles once.</li>
<li><strong>You mostly want the tracking gone and search lightly:</strong> DuckDuckGo, and learn ten bangs.</li>
<li><strong>You want an answer rather than a list:</strong> Perplexity for the first pass, then one of the above for anything you will act on.</li>
</ul>

<p>In every case keep Google reachable. A second index is a second opinion, and the point of a second opinion is that you still have the first.</p>`,
};
