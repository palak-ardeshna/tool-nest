import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Scaffolded from the Affinity and Adobe pricing pages read 2026-09-23. The
 * sections marked PARTH are the article; without them this is two price lists
 * side by side.
 * Cover: StockSnap “Paint Supplies”, CC0 1.0 — illustrative, not a product interface.
 */
export const affinityIsFreeNowWhatThatCostsAdobe: Article = {
  slug: "affinity-is-free-now-what-that-costs-adobe",
  title: "Affinity Is Free Now. Here Is What You Give Up by Switching",
  excerpt:
    "Canva made the whole Affinity suite free for individuals. Adobe's full suite is $69.99 a month after the introductory period. That gap is large enough to be worth an afternoon of your time finding out what does not come across.",
  category: "software",
  author: "parth-patel",
  tags: ["Design", "Affinity", "Adobe", "Software", "Pricing"],
  publishedAt: "2026-09-23",
  image: "/images/articles/affinity-is-free-now-what-that-costs-adobe.webp",
  imageAlt:
    "A paint palette holding mixed blue, red and yellow paint, with two brushes and open paint tubes beside it",
  seoTitle: "Affinity Is Free Now. Adobe Costs $69.99",
  seoDescription:
    "Affinity is free for individuals under Canva. Creative Cloud Pro is $69.99 a month after the intro. What actually transfers, and what does not.",
  quickAnswer:
    "Affinity's design, photo and publishing apps are free for individuals, with no licence to buy — Canva, which now owns Affinity, states it plainly on the pricing page. Adobe's Creative Cloud Pro is $69.99 a month after a three-month introductory rate of $34.99, or $419.88 a year; a single app such as Photoshop or Illustrator is $22.99 a month. So the price comparison is not close and is not the decision. The decision is file compatibility, plug-ins and whoever you hand work to. If nobody else opens your files, switch. If a client expects a layered PSD or an INDD package, the free suite can cost you more in rework than the subscription costs in money.",
  pros: [
    "Free for individuals with no licence purchase and no trial clock",
    "One-off learning cost rather than a recurring bill you re-justify every year",
    "Files live on your own disk in the apps' own formats, not behind an active subscription",
    "Adobe's own single-app tier is $22.99 a month, so even a partial switch is real money",
  ],
  cons: [
    "The AI features are gated behind a paid Canva plan, so \"free\" stops at the interesting part",
    "Round-tripping layered files with anyone still on Adobe is where the time goes",
    "A free product owned by a larger company is a pricing decision that can be revisited",
    "Plug-in and script ecosystems do not transfer, and for some workflows that is the whole job",
  ],
  alternatives: [
    { name: "Affinity", url: "https://www.affinity.studio/", note: "Free for individuals. Enterprise and education licensing is a conversation with Canva rather than a listed price." },
    { name: "Adobe Creative Cloud Pro", url: "https://www.adobe.com/creativecloud/plans.html", note: "$34.99 a month for three months, then $69.99. Annual is $419.88. The plan most people mean by \"Adobe\"." },
    { name: "Adobe single app", url: "https://www.adobe.com/creativecloud/plans.html", note: "$22.99 a month for Photoshop, Illustrator, InDesign, Premiere or After Effects. Lightroom is $11.99." },
    { name: "Adobe Photography bundle", url: "https://www.adobe.com/creativecloud/plans.html", note: "$19.99 a month. The one Adobe plan that is hard to beat on price if Lightroom is the thing you actually use." },
  ],
  faqs: [
    {
      question: "Is Affinity really free, or is it a trial?",
      answer:
        "Free. The pricing page reads \"Affinity is free for individuals (seriously)\" and asks you to pick a platform rather than a plan. When I read it on 23 September 2026 there was no individual paid tier at all. Enterprise and education go through Canva directly.",
    },
    {
      question: "What is the catch?",
      answer:
        "The AI features. The page notes those are available if you are on a Canva premium plan, which is the commercial logic of the whole move — the suite is free, and the generative tools are the upsell. If AI tooling is central to how you work, price that plan in before calling this a saving.",
    },
    {
      question: "Can Affinity open my Photoshop and Illustrator files?",
      answer:
        "It imports them, which is not the same as working with them. Text, effects and anything relying on an Adobe-specific feature are where imports drift. The honest test is to take your most complicated real file, open it, and look — which takes ten minutes and tells you more than any comparison article, this one included.",
    },
  ],
  sources: [
    { title: "Affinity pricing", publisher: "Canva", url: "https://www.affinity.studio/", checkedAt: "2026-09-23" },
    { title: "Creative Cloud plans and pricing", publisher: "Adobe", url: "https://www.adobe.com/creativecloud/plans.html", checkedAt: "2026-09-23" },
  ],
  content: `<p>A product going from paid to free is usually a sign that it is being wound down. This one is the opposite: Canva bought Affinity and dropped the price to nothing, and the pricing page now says "Affinity is free for individuals (seriously)" — the parenthesis is theirs, and it tells you they expect disbelief.</p>

<p>Adobe, meanwhile, lists Creative Cloud Pro at $69.99 a month once the three-month introductory rate runs out. So the money question is settled before it is asked. The question that is left is what you lose.</p>

<!-- PARTH: this section is the article. Real experience only. Delete the draft rather than invent it. -->
<h2>What happened when I opened my own files</h2>

<p><!-- PARTH: take one real file you care about — a layered PSD, an AI logo, an INDD layout — open it in the Affinity app, and write what survived and what did not. Name the file type and the specific thing that broke (text reflowed? effect flattened? a font substituted?). If everything opened cleanly, say that; it is a stronger claim than a hedge. --></p>

<p><!-- PARTH: the time cost. How long from download to doing something useful, and the one habit from the other app you kept reaching for and could not find. --></p>

<h2>What each one costs</h2>

<table>
<thead>
<tr><th></th><th>Affinity</th><th>Adobe</th></tr>
</thead>
<tbody>
<tr><td>Full suite</td><td>Free for individuals</td><td>Creative Cloud Pro, $69.99/mo after intro</td></tr>
<tr><td>Annual</td><td>—</td><td>$419.88/yr</td></tr>
<tr><td>Single app</td><td>—</td><td>$22.99/mo (Photoshop, Illustrator, InDesign, Premiere, After Effects)</td></tr>
<tr><td>Photo-only</td><td>Free</td><td>Photography bundle, $19.99/mo; Lightroom alone, $11.99/mo</td></tr>
<tr><td>AI features</td><td>Requires a paid Canva plan</td><td>Included, with generative credits</td></tr>
</tbody>
</table>

<p>The row that matters most is the last one. Free covers the tools; it does not cover the generative features, and that is where the business model lives.</p>

<h2>The compatibility problem is a people problem</h2>

<p>Whether Affinity opens an Adobe file cleanly is a technical question with a boring answer: mostly, with drift around text, effects and anything proprietary. The question underneath is who else touches your files.</p>

<p>If you work alone and hand over flattened output — a PDF, a PNG, a finished video — nothing about the switch is risky. If you hand editable files to a client, a printer or a colleague who is still on Adobe, every round trip is a place where something shifts, and you are the one who finds out. That cost does not appear on either pricing page and it is the only one that has ever made me stay on a subscription I resented.</p>

<h2>Who should switch today</h2>

<p>If you pay $22.99 a month for a single Adobe app you open a few times a month, the arithmetic is not subtle: that is $275 a year for occasional use, against free. Try the equivalent Affinity app on a real job this week. The same logic applies to the <a href="/articles/software-you-can-still-buy-once">software you can still buy once</a> — the recurring bill is the thing to attack first, because it is the one that charges you whether you open the app or not.</p>

<p>If your work depends on a specific plug-in, a shared team library, or handing layered files to people who are not switching with you, stay where you are and stop rechecking. That is a real dependency, not inertia.</p>

<h2>The part worth being sceptical about</h2>

<p>A free product with a paid parent is a pricing decision, and pricing decisions get revisited. Canva has committed publicly to keeping the suite free, and that commitment is worth exactly what every such commitment has been worth in this industry — which is to say, treat your files as the thing you own and the application as the thing you borrow. Keep your work in formats you can get out. That is good practice whichever of these you pay for, and it is the reason the <a href="/articles/figma-alternatives-worth-considering">Figma alternatives worth considering</a> question keeps coming back around.</p>

<p>Prices above are from the Affinity and Adobe pricing pages as read on 23 September 2026. Adobe's introductory rates in particular change often; the sources list has both links.</p>`,
};
