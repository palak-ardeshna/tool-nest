import type { Article } from "@/content/types";

export const writingForSearchWhenMostSearchesNeverClick: Article = {
  slug: "writing-for-search-when-most-searches-never-click",
  title: "Writing for Search When Two-Thirds of Searches Never Click",
  excerpt:
    "SparkToro's 2026 study puts zero-click Google searches at 68%, up from 60% two years earlier, with AI Overviews doing most of the pushing. For a small site that lives on search traffic this is the number that matters. Here is what it does and does not mean, and what we changed.",
  category: "research",
  author: "toolnest-editorial",
  tags: ["Research", "SEO", "AI Overviews", "Publishing"],
  publishedAt: "2026-09-12",
  image: "/images/articles/writing-for-search-when-most-searches-never-click.webp",
  imageAlt: "A hand holding a phone open on a news article, resting on a laptop keyboard beside a mug of coffee",
  seoTitle: "Writing for Search When Most Searches Never Click",
  seoDescription:
    "68% of US Google searches ended without a click in early 2026. What that figure measures, what it misses, and how a small site should write in response.",
  quickAnswer:
    "The figure is real and the panic is mostly misdirected. SparkToro's analysis of Similarweb panel data for January to April 2026 found 68% of US Google searches ended without a click, against 60% in 2024, and that only about 276 of every 1,000 searches reached the open web. AI Overviews are the main reason. But the searches that never clicked were overwhelmingly ones that never needed to — a fact, a definition, a conversion — and a comparison or a buying decision still sends the reader somewhere. Our response was not to write more; it was to stop writing the kind of page an Overview replaces, and to make the pages that survive worth the click they still get.",
  pros: [
    "The study is large, panel-based and repeated on the same method since 2019, so the trend is trustworthy",
    "Pages that answer a decision rather than a fact are the ones still earning clicks",
    "Search Console shows exactly which of your queries are losing clicks to Overviews, for free",
    "Being cited inside an Overview is measurable and worth something even without the click",
  ],
  cons: [
    "The data is US desktop and mobile web; other markets and in-app searches are not measured",
    "'Zero-click' lumps together searches answered by Google with searches simply abandoned",
    "Impressions without clicks look like success in a dashboard and pay nothing",
    "A trend this steep does not reverse because you rewrote your titles",
  ],
  faqs: [
    {
      question: "Does 68% mean two-thirds of my traffic is gone?",
      answer:
        "No. It means two-thirds of searches — across all of Google, in the US — ended without a click anywhere. Your traffic depends on which searches you appear for. A site that ranks for 'what time zone is London' has lost most of those clicks to a box at the top of the page. A site that ranks for 'which password manager should a small team pick after the price rises' has lost far fewer, because the reader still needs to read something before deciding. Check your own Search Console before assuming either.",
    },
    {
      question: "Should I block AI Overviews from using my content?",
      answer:
        "You can only do that by blocking Google from indexing the page, which removes it from search entirely. There is no separate switch for Overviews. So the choice is between appearing in Overviews and search, or in neither. For a small publication the second option is not a serious one, which is why the useful question is what to write, not whether to opt out.",
    },
    {
      question: "What about traffic from ChatGPT and Perplexity?",
      answer:
        "It exists, it is growing, and it is still a small fraction of what Google sends. Those tools cite sources and a minority of readers click them. The pages they cite are the same pages that do well in Overviews: specific, sourced, and clearly written. There is no separate optimisation for AI search that we have found; there is just writing something worth citing.",
    },
  ],
  sources: [
    {
      title: "In 2026, Less than One Third of Google Searches Still Send a Click",
      publisher: "SparkToro",
      url: "https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/",
      checkedAt: "2026-09-12",
    },
    {
      title: "Google zero-click searches reach 68% in early 2026: Study",
      publisher: "Search Engine Land",
      url: "https://searchengineland.com/google-zero-click-searches-2026-study-479717",
      checkedAt: "2026-09-12",
    },
    {
      title: "Performance report (Search results)",
      publisher: "Google Search Central",
      url: "https://support.google.com/webmasters/answer/7576553",
      checkedAt: "2026-09-12",
    },
  ],
  content: `<p>Every few years SparkToro runs the same analysis: take a large panel of US browsing data, count Google searches, and count how many of them ended in a click to somewhere that is not Google. In 2024 the answer was that 60% ended with no click at all. The 2026 run, covering January to April, puts it at 68%. Only about 276 of every thousand searches reached the open web. The rest were answered on the results page, sent to another Google property, or abandoned.</p>

<p>That is the steepest two-year move since the series began, and the study attributes most of it to AI Overviews, which now appear on a substantial share of searches and cut the clicks below them by well over half. If you publish on the web and Google sends you readers, this is the most important number of the year, and it deserves a more careful reading than the headline gets.</p>

<h2>What the number measures, and what it does not</h2>

<p>Three things worth being precise about before drawing conclusions.</p>

<p><strong>It is all searches, not your searches.</strong> The 68% includes people checking the weather, converting currencies, looking up a celebrity's age and spelling "necessary". Those were never going to click and now they do not need to. The searches a small publication lives on — comparisons, decisions, "which one should I pick" — are a different population, and the study does not break them out.</p>

<p><strong>"Zero-click" is two things.</strong> Some of those searches were answered on the page. Some were simply abandoned, refined, or typed by someone who changed their mind. The study is honest about this; the headlines are not. A search that was abandoned in 2024 and abandoned in 2026 has not been "taken" by an Overview.</p>

<p><strong>It is the US, on the web.</strong> Similarweb's panel covers US desktop and mobile web browsing. Searches inside apps, and every other country, are outside the data. The UK trend is almost certainly similar and almost certainly not identical, and nobody has measured it with the same rigour.</p>

<p>None of that makes the finding wrong. It makes it a trend rather than a verdict, and the correct response to a trend is to look at your own data.</p>

<h2>What your own numbers will show</h2>

<p>Search Console is the tool here, and it is free. Open the Performance report, compare the last three months to the same three months a year ago, and sort queries by the change in click-through rate rather than by clicks. What you are looking for is queries where impressions held up or grew and clicks fell. That is the signature of an Overview arriving above you: Google still shows your page, and fewer people need it.</p>

<p>When we ran this on ToolNest, the pattern was clean enough to be uncomfortable. Queries of the form "what is X" and "does X do Y" had lost a third to a half of their click-through rate. Queries of the form "X vs Y", "best X for Z" and "should I switch from X" had barely moved. The definitional pages were being answered above us; the decision pages were not, because a decision is not something a paragraph at the top of a results page can make for you.</p>

<p>That split is the whole strategy, and it cost nothing to find. We wrote up the free research stack, including the Search Console part, in <a href="/articles/keyword-research-without-a-subscription">keyword research without a subscription</a>.</p>

<h2>What we changed</h2>

<p>Not the volume. Publishing more pages into a shrinking click pool is the response everyone reaches for, and it produces more pages that get read by an Overview and nobody else. What changed was what a page is for.</p>

<ol>
<li><strong>We stopped writing the fact page.</strong> "What is a password manager" is a query Google now answers itself, well enough. A page targeting it is a donation. The pages we write answer a question with a "because" in it — which one, for whom, after what changed.</li>
<li><strong>The answer moved to the top.</strong> Every article on the site now opens with a quick answer of a paragraph. If that is all the reader needed, they have it, and they had to click to get it. If it is not, the rest of the page earns the time. This is also the section an Overview is most likely to cite, which brings a different kind of reader.</li>
<li><strong>Every claim got a source with a date.</strong> Overviews and answer engines cite pages they can verify against. A pricing table that says when it was checked is more citable than one that does not, and it is more useful to a human for the same reason. The sourcing rules we follow are in <a href="/articles/checking-a-claim-before-you-publish">checking a claim before you publish</a>.</li>
<li><strong>Titles say what the page decides, not what it is about.</strong> "Password managers after the price rises" tells a reader there is a judgement inside. "Password managers compared" tells them there is a table, and Google has one of those now.</li>
<li><strong>We measured citations, not just clicks.</strong> Being named in an Overview shows up as impressions with a low click-through rate. That used to look like failure. It is now a separate line, because a reader who sees the name three times before clicking is a reader who arrives already trusting it.</li>
</ol>

<h2>What did not work</h2>

<p>Two things we tried and stopped.</p>

<p><strong>Writing "for AI".</strong> There was a period of advice about structuring pages so that language models would prefer them — particular heading patterns, question-and-answer blocks in a particular order, schema for everything. We tried it on a handful of pages. It made them worse to read and changed nothing measurable. The pages that get cited are the ones that were already clear and sourced. There is no trick; there is just the work.</p>

<p><strong>Chasing volume with thinner pieces.</strong> For a month we published shorter, faster articles on more queries to see if breadth compensated for the falling rate. Impressions went up. Clicks did not, because the short pieces were exactly the kind an Overview replaces. We took most of them down.</p>

<h2>The honest outlook</h2>

<p>The trend is not going to reverse. Google has said clearly that it intends search to answer more questions in place, and a study showing that this is working will not change its mind. Clicks from search to the open web will keep falling as a share, and a small publication that treats search traffic as a stable input is planning on a number that will be smaller next year.</p>

<p>What is left is the part that was always the point: pages that help someone decide, that show their sources, and that are worth the click they still get. That is a narrower target than "rank for everything" and a better one. It is also, not coincidentally, the only kind of page that AdSense's own quality guidance ever wanted from us in the first place. Our publishing rhythm changed to fit it, and <a href="/articles/weekly-publishing-workflow">the weekly workflow</a> now has a research day that used to be a writing day.</p>`,
};
