import type { Article } from "@/content/types";

/**
 * Price-change article with an old/new table, a worked bill and an FAQ,
 * rewritten on the URL first published 2026-09-24 (old text deleted 2026-09-29,
 * not restored). Palak does NOT call the Flash API and gets no token bill; he
 * pays for a Gemini plan at $5 to $20 a month and uses it in chat, and says he
 * would move to another model if the price he pays rose. The article says that
 * in the first paragraph and makes no first-person claim about API billing.
 * All price figures are from Google's Gemini API pricing page, read 2026-10-02:
 * Flash standard input $0.75 and output $3.75 per million tokens through
 * 31 December 2026, becoming $1.50 and $7.50 on 1 January 2027.
 */
export const geminiFlashPricingDoublesInJanuary: Article = {
  slug: "gemini-flash-pricing-doubles-in-january",
  title: "Gemini Flash Doubles on 1 January. Your Chat Plan Is Not Affected",
  excerpt:
    "Flash input goes from $0.75 to $1.50 and output from $3.75 to $7.50 per million tokens on 1 January 2027. That is the API price. If you pay for Gemini in a browser, it is not the price you pay.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Gemini", "Pricing", "API", "Google", "Costs"],
  publishedAt: "2026-09-24",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Gemini Flash Price Doubles on 1 January 2027",
  seoDescription:
    "Flash API input goes $0.75 to $1.50 and output $3.75 to $7.50 per million tokens on 1 January 2027. A worked bill, and who it does not affect.",
  content: `
<p>I should say at the top that this bill is not mine. I do not call the Flash API and I get no token invoice. I pay for a Gemini plan, between $5 and $20 a month, and I use it in a browser like most people do. So the numbers here are Google's published figures, read on 2 October 2026, and the one opinion I will give is what I would do if the price I actually pay ever doubled, which is move to another model rather than pay more.</p>

<h2>What changes, exactly</h2>
<table>
<thead><tr><th>Gemini Flash, standard tier</th><th>Through 31 Dec 2026</th><th>From 1 Jan 2027</th></tr></thead>
<tbody>
<tr><td>Input, per million tokens</td><td>$0.75</td><td>$1.50</td></tr>
<tr><td>Output, per million tokens</td><td>$3.75</td><td>$7.50</td></tr>
<tr><td>Batch and Flex variants</td><td>50% off standard</td><td>50% off standard</td></tr>
<tr><td>Free tier</td><td>Free</td><td>Free</td></tr>
</tbody>
</table>
<p>Both numbers double. The discount on the Batch and Flex variants stays at 50% on either side of the date, so those double too, from a lower base.</p>

<h2>A worked bill</h2>
<p>Take a small job that sends a million input tokens a month and gets 200,000 tokens back. That is a modest amount of automated work: classifying or summarising a few thousand items.</p>
<p>Today that costs $0.75 for the input and $0.75 for the output, so $1.50 a month. From 1 January 2027 the same job costs $1.50 for the input and $1.50 for the output, so $3.00 a month. A job at ten times that volume moves from $15 to $30.</p>
<p>The percentage is alarming and the rupee amount usually is not. That is worth saying plainly, because a headline about a price doubling does not tell you whether the bill was $2 or $2,000.</p>

<h2>Who this does not touch</h2>
<p>If you use Gemini by typing into it in a browser or an app, this change is not yours. Chat plans are a separate product with a separate price, and nothing on the API pricing page changes what a subscriber pays. The free API tier also stays free.</p>
<p>I am in the first group. My plan costs what it costs and the January date does not move it. If it ever did move far, I would go to another model rather than pay more, which is the same calculation I made when <a href="/articles/which-ai-assistant-is-worth-paying-for">deciding which assistant plan was worth paying for at all</a>.</p>

<h2>If the API bill is yours</h2>
<p>Work out your current monthly token volume before January and multiply it, rather than reacting to the word doubles. If the answer is a few dollars, do nothing. If it is a few hundred, the Batch variant is half price for work that does not need an answer immediately, and that discount survives the increase.</p>
`,
  faqs: [
    {
      question: "When exactly does the price change?",
      answer:
        "1 January 2027. Google's pricing page lists the current rates as running through 31 December 2026 and the higher rates as starting the next day, read on 2 October 2026.",
    },
    {
      question: "Does my Gemini subscription go up?",
      answer:
        "Nothing on the API pricing page says so. The doubling applies to per-token API billing. A chat plan is priced separately, and I pay for one myself, so I have the same interest in this as you do.",
    },
    {
      question: "Is the free tier going away?",
      answer:
        "The pricing page still shows free-tier access for Flash variants at no charge, alongside the paid rates. It is the paid tier that changes on 1 January 2027.",
    },
    {
      question: "Is there a cheaper way to keep using Flash?",
      answer:
        "The Batch and Flex variants are listed at 50% off the standard rate, both now and after the increase. They suit work that can wait for its answer rather than anything a user is sitting in front of.",
    },
  ],
  sources: [
    {
      title: "Gemini API pricing",
      publisher: "Google",
      url: "https://ai.google.dev/gemini-api/docs/pricing",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I should say at the top that this bill is not mine. I do not call the Flash API and I get no token invoice. I pay for a Gemini plan, between $5 and $20 a month, and I use it in a browser like most people do. So the numbers here are Google's published figures, read on 2 October 2026, and the one opinion I will give is what I would do if the price I actually pay ever doubled, which is move to another model rather than pay more.",
  },
};
