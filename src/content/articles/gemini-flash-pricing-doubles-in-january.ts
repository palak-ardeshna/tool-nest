import type { Article } from "@/content/types";

/**
 * A pricing comparison, stated as such in the first paragraph: no usage of
 * ours behind it. Prices from the Gemini API pricing page read 2026-09-24.
 * Cover: StockSnap/Wikimedia, CC0 1.0 — illustrative, not a product interface.
 */
export const geminiFlashPricingDoublesInJanuary: Article = {
  slug: "gemini-flash-pricing-doubles-in-january",
  title: "Gemini Flash Is Half Price Until 31 December. Then It Is Not",
  excerpt:
    "Three of the current Flash models carry a promotional rate that expires at the end of the year, and the pricing page says so in the same row as the price. If you are costing a project on today's number, you are costing it on a number with a deadline.",
  category: "ai-tools",
  author: "parth-patel",
  tags: ["Gemini", "AI Tools", "Pricing", "APIs", "Google"],
  publishedAt: "2026-09-24",
  image: "/images/articles/gemini-flash-pricing-doubles-in-january.webp",
  imageAlt:
    "A Hewlett-Packard HP-12C financial calculator photographed head-on, with figures on its display",
  seoTitle: "Gemini Flash Pricing Doubles in January",
  seoDescription:
    "Gemini 3.8, 3.7 and 3.6 Flash bill at $0.75 in and $3.75 out per million until 31 December 2026, then double. What that does to a real budget.",
  quickAnswer:
    "Gemini 3.8 Flash, 3.7 Flash and 3.6 Flash all bill at $0.75 per million input tokens and $3.75 per million output through 31 December 2026, and $1.50 / $7.50 after that — a straight doubling on a fixed date. The odd part is that Gemini 3.5 Flash, the older model, already costs $1.50 / $9.00, so the newest Flash is currently the cheapest and will still be no worse than the one it replaced. If you want a rate with no expiry attached, 3.5 Flash-Lite is $0.30 / $2.50. Budget on the post-January number and treat the discount as a windfall, not a baseline.",
  pros: [
    "The three newest Flash models are all at the same promotional rate, so moving between them costs nothing",
    "The expiry date is published rather than buried in a footnote you find later",
    "Gemini 3.8 Flash is cheaper today than the 3.5 Flash it supersedes, and still cheaper after the rise",
    "The free tier on AI Studio has no token charge at all, which makes testing genuinely free",
  ],
  cons: [
    "A doubling on a fixed date is a budget cliff, and nothing in the API warns you when you cross it",
    "Output tokens rise from $3.75 to $7.50, and output is where agent workloads spend most of their money",
    "Four Flash variants at three different prices is more choice than most projects need",
    "Promotional pricing sets an expectation that the post-January rate then reads as an increase",
  ],
  alternatives: [
    { name: "Gemini 3.5 Flash-Lite", url: "https://ai.google.dev/gemini-api/docs/pricing", note: "$0.30 in / $2.50 out per million, with no promotional expiry attached. The cheapest Gemini that is not on a countdown." },
    { name: "Gemini 2.5 Flash", url: "https://ai.google.dev/gemini-api/docs/pricing", note: "$0.30 in / $2.50 out for text, image and video; $1.00 for audio input. Older, and priced like it." },
    { name: "Gemini 2.5 Pro", url: "https://ai.google.dev/gemini-api/docs/pricing", note: "$1.25 in / $10.00 out up to 200k tokens, rising to $2.50 / $15.00 above that. The tiering by context length catches people out." },
    { name: "Google AI Studio free tier", url: "https://ai.google.dev/gemini-api/docs/pricing", note: "No token charge. The honest way to find out whether a cheaper model is good enough before you pay for the expensive one." },
  ],
  faqs: [
    {
      question: "What exactly happens on 1 January 2027?",
      answer:
        "When I read the pricing page on 24 September 2026, Gemini 3.8, 3.7 and 3.6 Flash were listed at $0.75 per million input and $3.75 per million output \"through Dec 31, 2026\", with $1.50 and $7.50 shown as the rate afterwards. Google publishes both numbers in the same row, so there is no ambiguity about the direction.",
    },
    {
      question: "Is the newest Flash model the cheapest one?",
      answer:
        "Right now, yes, and that is the counter-intuitive bit. Gemini 3.8 Flash at $0.75 / $3.75 undercuts Gemini 3.5 Flash at $1.50 / $9.00. Even after the promotional rate ends, 3.8 Flash at $1.50 / $7.50 is still cheaper on output than the older model. There is no version of this where staying on 3.5 Flash saves you money.",
    },
    {
      question: "Should I switch away from Gemini before January?",
      answer:
        "Only if your own numbers say so. A doubling sounds alarming and may be a rounding error on your bill, or it may be the largest line on it — that depends entirely on your output token volume, which is why the worked example above is an example and not a recommendation. Work out what your last full month would have cost at the new rate before you move anything.",
    },
  ],
  sources: [
    { title: "Gemini API pricing", publisher: "Google", url: "https://ai.google.dev/gemini-api/docs/pricing", checkedAt: "2026-09-24" },
  ],
  content: `<p>Model pricing pages are written to be read once, at the moment you are choosing, and never again. That is how a promotional rate becomes a budget: you check a number in September, build against it, and find out in January that the number had a date attached and you did not read it.</p>

<p>Gemini's Flash tier has exactly that shape right now. Three models share one promotional rate, and the rate expires at the end of the year.</p>

<p>To be clear about what this is: a pricing comparison, not a usage report. I have not run a production workload on Gemini Flash, so there is no bill of mine in here. Everything below comes from Google's pricing page as read on 24 September 2026, plus arithmetic you can check.</p>

<h2>What the change does to a monthly bill</h2>

<p>Take an example month of 50 million input tokens and 10 million output tokens on Gemini 3.8 Flash. That is an illustration, not a measurement. At today's rate it costs $37.50 for input and $37.50 for output: $75 in total. From 1 January 2027 the same month costs $75 for input and $75 for output: $150. Same work, same model, twice the bill.</p>

<p>Change the mix and the story changes. Swap the ratio to 10 million in and 50 million out, which is closer to an agent that writes more than it reads, and the month goes from $195 to $390. The doubling is the same percentage either way, but the output price is five times the input price, so output-heavy work is where the dollar amount grows fastest.</p>

<h2>The rates, and which ones have a deadline</h2>

<table>
<thead>
<tr><th>Model</th><th>Input / 1M</th><th>Output / 1M</th><th>Expires</th></tr>
</thead>
<tbody>
<tr><td>Gemini 3.8 Flash</td><td>$0.75</td><td>$3.75</td><td>31 Dec 2026, then $1.50 / $7.50</td></tr>
<tr><td>Gemini 3.7 Flash</td><td>$0.75</td><td>$3.75</td><td>31 Dec 2026, then $1.50 / $7.50</td></tr>
<tr><td>Gemini 3.6 Flash</td><td>$0.75</td><td>$3.75</td><td>31 Dec 2026, then $1.50 / $7.50</td></tr>
<tr><td>Gemini 3.5 Flash</td><td>$1.50</td><td>$9.00</td><td>No expiry listed</td></tr>
<tr><td>Gemini 3.5 Flash-Lite</td><td>$0.30</td><td>$2.50</td><td>No expiry listed</td></tr>
</tbody>
</table>

<p>Read the last column before the first. Three models are on a countdown and two are not, and the two that are not include the cheapest option on the page.</p>

<h2>Why the newest model is the cheap one</h2>

<p>The usual assumption is that a newer model costs more, so you stay on the old one to save money. Here that is backwards. Gemini 3.8 Flash is less than half the output price of Gemini 3.5 Flash today, and after January it is still a fifth cheaper. Whatever reason you might have for staying on 3.5 Flash, cost is not it.</p>

<p>What this tells you about the pricing is that the promotional rate is not a discount on 3.8 Flash so much as a repricing of the whole Flash tier, with the old model left at its old number. The older 2.5 Flash sits lower again, at $0.30 / $2.50 for text, so a newer model at a higher price than its predecessor is not a rule here in either direction.</p>

<h2>Where a doubling actually hurts</h2>

<p>Input and output do not rise by the same amount in practice, because most workloads are lopsided. A summarising job reads a lot and writes a little, so it lives on the input price. An agent that plans, calls tools and explains itself writes far more than it reads, and it lives on the output price — which is the one going from $3.75 to $7.50.</p>

<p>That is the number to check against your own billing page. If your output volume is small, January is a non-event. If you are running something that talks to itself a lot, it is the whole cost of the project changing on a date you did not choose. The same asymmetry shows up when <a href="/articles/running-ai-models-on-your-own-hardware">running models on your own hardware</a> starts to look reasonable: the break-even is set by output tokens, not by how clever the model is.</p>

<h2>What to do before January</h2>

<p>Take your last full month of usage and multiply it by the post-expiry rate. That is the only calculation that matters, and it takes five minutes. If the answer is small, do nothing and enjoy the discount until it ends. If the answer is large, you have three months to test 3.5 Flash-Lite at $0.30 / $2.50 on the same work and find out whether the cheap model was good enough all along — which, for the routine half of most pipelines, it usually is.</p>

<p>What you should not do is budget the project at $0.75 and put the date out of your mind. The page tells you what happens next. Prices above are from Google's Gemini API pricing page as read on 24 September 2026.</p>`,
};
