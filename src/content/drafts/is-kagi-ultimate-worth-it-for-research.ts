import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Scaffolded from the Kagi pricing page read 2026-09-23. The sections marked
 * PARTH are the article; without them this is Kagi's plan table with opinions
 * attached.
 * Cover: StockSnap “Books Oldbooks”, CC0 1.0 — illustrative, not a product interface.
 */
export const isKagiUltimateWorthItForResearch: Article = {
  slug: "is-kagi-ultimate-worth-it-for-research",
  title: "Is Kagi Ultimate Worth $25 a Month for Research?",
  excerpt:
    "Professional at $10 already gives you unlimited searches. Ultimate costs $25 and adds Research mode and the flagship models. Whether that is worth $15 more depends on one thing, and it is not the search results.",
  category: "research",
  author: "parth-patel",
  tags: ["Kagi", "Research", "Search Engines", "Pricing", "AI Tools"],
  publishedAt: "2026-09-23",
  image: "/images/articles/is-kagi-ultimate-worth-it-for-research.webp",
  imageAlt:
    "A stack of worn cloth-bound books on a table in front of a full bookshelf",
  seoTitle: "Is Kagi Ultimate Worth $25 for Research?",
  seoDescription:
    "Kagi Professional is $10 with unlimited searches. Ultimate is $25 and adds Research mode and flagship models. When the extra $15 pays for itself.",
  quickAnswer:
    "Unlimited search arrives at Professional, $10 a month — Ultimate does not buy you more searches, because Professional already has no cap. The $25 tier buys Research mode and access to flagship models including Claude, GPT and Gemini inside the Kagi Assistant. So the honest test is whether you would otherwise pay for one of those models separately. If you already hold a $20 subscription to any of them, Ultimate replaces it and is cheaper than both together. If you do not, $10 Professional is the right plan and the assistant's Quick mode is included anyway.",
  pros: [
    "Professional at $10 removes the search cap entirely, so heavy searching does not require the top tier",
    "Ultimate bundles flagship models that cost roughly $20 a month each on their own",
    "Every paid plan includes the assistant in Quick mode, so no tier leaves you without one",
    "A paid search engine has no advertiser to answer to, which is the whole reason to be here",
  ],
  cons: [
    "$25 a month is real money for something Google gives away, and you must actually use it to justify it",
    "The 100-search trial is small enough that it barely settles whether the results are better",
    "Starter's 300 searches a month sounds generous and runs out faster than you expect",
    "Model access inside an assistant is not the same as using those models directly, and the ceiling shows on long tasks",
  ],
  alternatives: [
    { name: "Kagi Professional", url: "https://kagi.com/pricing", note: "$10 a month, unlimited searches, assistant in Quick mode. The plan most people should be on." },
    { name: "Kagi Starter", url: "https://kagi.com/pricing", note: "$5 a month for 300 searches. Fine for a second-opinion engine, tight as a daily driver." },
    { name: "Kagi Trial", url: "https://kagi.com/pricing", note: "Free, 100 searches. Enough to see the interface, not enough to change a habit." },
    { name: "Kagi Ultimate", url: "https://kagi.com/pricing", note: "$25 a month. Unlimited search plus Research mode and flagship models in the assistant." },
  ],
  faqs: [
    {
      question: "Does Ultimate give me more searches than Professional?",
      answer:
        "No. When I read the pricing page on 23 September 2026, both Professional and Ultimate showed unlimited searches. The difference is entirely in the assistant: Ultimate adds Research mode and the flagship models. If your reason for upgrading is search volume, you are on the wrong tier already.",
    },
    {
      question: "Is paying for search worth it when Google is free?",
      answer:
        "The argument has never been that the results are dramatically better on every query. It is that nobody paid to be at the top of them. Whether that is worth $10 a month is a judgement about how much of your day is spent searching and how much of that is spent scrolling past things placed there commercially.",
    },
    {
      question: "How many searches do I actually do in a month?",
      answer:
        "More than you think, and that is the number to check before picking Starter. Kagi shows it on your own account page. The 300-search Starter limit is about ten a day, which sounds ample until a single afternoon of research eats forty of them.",
    },
  ],
  sources: [
    { title: "Kagi pricing", publisher: "Kagi", url: "https://kagi.com/pricing", checkedAt: "2026-09-23" },
  ],
  content: `<p>Most write-ups of paid search stop at whether paying for search is reasonable at all. That argument is a decade old and goes nowhere. The more useful question, once you have decided to pay, is which tier — and Kagi's tiers are not arranged the way people assume.</p>

<p>The assumption is that more money buys more searches. It does not. Unlimited arrives at Professional, $10 a month. Everything above that is about the assistant.</p>

<!-- PARTH: this section is the article. Real usage only. Delete the draft rather than invent it. -->
<h2>What my own search count actually was</h2>

<p><!-- PARTH: the number from your Kagi account page for a real month, and which plan you are on. Then the judgement: did you ever hit a limit, and on which plan would you have? --></p>

<p><!-- PARTH: one research task where the result differed from Google in a way you can describe — a source you found that Google buried, or a query where Kagi was worse. A worse result is more persuasive than a better one and you should include it if you have it. --></p>

<h2>The four tiers</h2>

<table>
<thead>
<tr><th>Plan</th><th>Price</th><th>Searches</th><th>Assistant</th></tr>
</thead>
<tbody>
<tr><td>Trial</td><td>Free</td><td>100 total</td><td>100 interactions</td></tr>
<tr><td>Starter</td><td>$5/mo</td><td>300/mo</td><td>Quick mode</td></tr>
<tr><td>Professional</td><td>$10/mo</td><td>Unlimited</td><td>Quick mode</td></tr>
<tr><td>Ultimate</td><td>$25/mo</td><td>Unlimited</td><td>Research mode, flagship models</td></tr>
</tbody>
</table>

<p>Read the third and fourth columns together. Between Professional and Ultimate, only the last column changes, and it changes by $15 a month.</p>

<h2>The only calculation that decides this</h2>

<p>Ultimate's pitch is access to flagship models — Claude, GPT, Gemini and others — inside the Kagi Assistant. Those models cost around $20 a month each if you subscribe to them directly. So the sum is straightforward.</p>

<p>If you already pay $20 for one of them and $10 for Kagi Professional, that is $30 a month for two products. Ultimate is $25 for both in one place. You are saving money and losing the native app, the longer context and whatever that vendor ships next month. If you do not pay for any model subscription today, Ultimate is a $15 upsell for something you have not yet established you need, and Professional plus the included Quick mode is the sane place to start.</p>

<h2>Where a bundled model falls short</h2>

<p>An assistant with access to a flagship model is not the same thing as that model's own product. The interface is someone else's, the context window is whatever the host allows, and features arrive late or not at all. For short research questions — check this claim, find the primary source, summarise these three pages — none of that matters and the bundle is excellent value. For long, stateful work, it does, and you will feel the ceiling before you can articulate it.</p>

<p>This is the same trade covered in <a href="/articles/ai-research-tools-and-your-sources">AI research tools and your sources</a>: the convenience of one interface against the depth of the dedicated one. Neither answer is wrong, but choosing on price alone gets it wrong reliably.</p>

<h2>What to do</h2>

<p>Start on Professional. It is the plan whose limits you will not meet, and it includes an assistant. Run it for a month, look at your search count, and notice whether you are opening a separate model subscription alongside it. If you are, Ultimate is cheaper than what you are already doing. If you are not, you have saved $15 a month by not guessing.</p>

<p>And before any of this, run the free trial against the searches you actually make, not against test queries — the habit you are trying to change is a daily one, and 100 searches is barely a week of it. If the results do not feel different on your own work, no tier is worth paying for, and <a href="/articles/search-engines-beyond-google">the other engines beyond Google</a> are free to try too.</p>

<p>Plans and prices above are from Kagi's pricing page as read on 23 September 2026.</p>`,
};
