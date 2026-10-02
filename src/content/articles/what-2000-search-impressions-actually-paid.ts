import type { Article } from "@/content/types";

/**
 * New article, not a queue rewrite. Every figure is from Palak's own Search
 * Console for this site, 3-month window, read 2026-10-02: 25 clicks, 2.07K
 * impressions, 1.2% CTR, average position 13.9; India 23 clicks from 149
 * impressions; United States 1 click from 963 impressions at position 11.1 with
 * 22 query rows, the largest of them 13 impressions; Bangladesh 156 and Brazil
 * 97 impressions with no clicks. Palak's own facts (chat, 2026-10-02): the
 * property dates from around August 2026, he shares a link occasionally and
 * does nothing else for traffic, what surprised him was how few clicks 2,000
 * impressions produce, and impressions rose recently. The cause of that rise is
 * not known, so the article does not claim one.
 */
export const what2000SearchImpressionsActuallyPaid: Article = {
  slug: "what-2000-search-impressions-actually-paid",
  title: "2,070 Impressions Bought Me 25 Clicks",
  excerpt:
    "Three months of Search Console for a small site, with the real numbers: 1.2% of the people shown a link clicked it, and 23 of the 25 who did were in one country.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Search Console", "SEO", "Analytics", "Blogging", "Traffic"],
  publishedAt: "2026-10-02",
  seoTitle: "2,070 Impressions, 25 Clicks: Real Numbers",
  seoDescription:
    "Three months of Search Console on a small site: 2.07K impressions, 25 clicks, 1.2% CTR, position 13.9, and 23 of 25 clicks from a single country.",
  content: `
<p>People publish traffic reports when the numbers are good. Here are mine while they are not, because the small-site version of this data is the one nobody shows and the one most people actually need.</p>

<p>Over three months this site was shown in search 2,070 times and clicked 25 times. That is a click-through rate of 1.2%, at an average position of 13.9, which is the bottom of page one or the top of page two. The number that surprised me was that one: I had not understood how little 2,000 impressions actually buys. I started the property around August 2026, I share a link occasionally and do nothing else to get traffic, and impressions have risen in the last stretch although I cannot tell you why.</p>

<h2>Where the clicks came from</h2>
<table>
<thead><tr><th>Country</th><th>Impressions</th><th>Clicks</th><th>Click-through</th></tr></thead>
<tbody>
<tr><td>India</td><td>149</td><td>23</td><td>15.4%</td></tr>
<tr><td>United States</td><td>963</td><td>1</td><td>0.1%</td></tr>
<tr><td>Bangladesh</td><td>156</td><td>0</td><td>0%</td></tr>
<tr><td>Brazil</td><td>97</td><td>0</td><td>0%</td></tr>
</tbody>
</table>

<p>That table is the whole report. Seven per cent of the impressions produced ninety-two per cent of the clicks. The largest audience by a distance, the United States, was shown this site 963 times and clicked once.</p>

<h2>Impressions are not an audience</h2>
<p>An impression means a link appeared somewhere on a results page a person looked at. It does not mean they read the title, and at position 13.9 it often means the link was below where they stopped scrolling. Counting impressions as reach is how a site with 25 readers convinces itself it has 2,000.</p>
<p>The useful figure is the one that separates the two. 15.4% in one country and 0.1% in another, from the same site and the same articles, says the problem is not the writing. It is that the writing is being shown to people it was not written for.</p>

<h2>The queries do not explain the impressions</h2>
<p>Filtering to the United States gives 22 query rows, and the largest of them is 13 impressions. The visible queries do not add up to a tenth of the 963. The rest sit below the threshold where Search Console will name them, so there is nothing there to act on even if I wanted to.</p>
<p>Some of the queries that are visible point at articles this site no longer has. Those pages were deleted and the impressions continue for a while, which is worth knowing before you read a report like this as a description of what you currently publish.</p>

<h2>What I take from it</h2>
<p>The audience that clicks is in one country and the site is written in English for a global search index, which is a mismatch I did not choose and can only answer by writing for the people who actually arrive. That is the reasoning behind pieces like <a href="/articles/claude-connectors-for-a-chartered-accountant">setting up connectors for a chartered accountant</a> rather than another general tools roundup.</p>
<p>The other lesson is about the headline number. If you are about to judge your own site, open the countries tab before the totals. A single 1.2% hides two completely different results, and only one of them is a problem you can fix.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "Over three months this site was shown in search 2,070 times and clicked 25 times. That is a click-through rate of 1.2%, at an average position of 13.9, which is the bottom of page one or the top of page two. The number that surprised me was that one: I had not understood how little 2,000 impressions actually buys. I started the property around August 2026, I share a link occasionally and do nothing else to get traffic, and impressions have risen in the last stretch although I cannot tell you why.",
  },
};
