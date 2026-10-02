import type { Article } from "@/content/types";

/**
 * Explainer with an FAQ, rewritten on the URL first published 2026-09-17 (old
 * text deleted 2026-09-29, not restored). Palak's own facts (chat, 2026-10-02):
 * he bought one desktop app outright and asked for it not to be named, pays 2
 * recurring software subscriptions plus hosting and a domain, and the catch he
 * hit was that the app stayed bought while its useful features moved to a paid
 * cloud tier. He has not tested a range of buy-once products, so none is
 * recommended and no prices are quoted for any of them.
 */
export const softwareYouCanStillBuyOnce: Article = {
  slug: "software-you-can-still-buy-once",
  title: "Software You Can Still Buy Once",
  excerpt:
    "The warning about buying software outright is that updates stop. That is not what happened to me. The licence held, the program still runs, and the features worth having moved to a paid cloud tier.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Subscriptions", "Licensing", "Software", "Costs", "Ownership"],
  publishedAt: "2026-09-17",
  contentUpdatedAt: "2026-09-27",
  seoTitle: "Buying Software Once: What Still Goes Wrong",
  seoDescription:
    "A one-time licence does not stop a vendor moving the valuable features to a paid cloud tier. What ownership actually protects, and what it does not.",
  content: `
<p>I have not worked my way through a shelf of buy-once software, so this is not a list of recommendations. It is one purchase and what it taught me, next to the 2 subscriptions I still pay every month.</p>

<p>I bought a desktop app outright and I still have it. The licence was honoured and the program runs. What happened instead is that the features worth having moved to a paid cloud tier, so the thing I owned kept working while the part I wanted stopped being included. Alongside that I pay 2 recurring software subscriptions, plus hosting and a domain, and the one-time purchase did nothing to reduce that number.</p>

<h2>What ownership actually protects</h2>
<p>A perpetual licence protects one thing well: the program you installed keeps running on the machine you installed it on. Nobody can switch it off remotely because you stopped paying, and that is a real guarantee worth something.</p>
<p>It does not protect the capability. If the useful work happens on the vendor's servers, you own a client, and a client without its service is a window onto nothing. The moment any meaningful feature needs a connection, the ownership question has quietly moved somewhere you did not agree to.</p>

<h2>The warning everyone gives is the wrong one</h2>
<p>You will read that buy-once software stops getting updates and slowly falls behind the operating system. That does happen. It was not my problem, and I think it is no longer the common one.</p>
<p>The common one is a product that stays installed and gets hollowed out. Syncing, storage, collaboration, anything with a model behind it: these are the parts vendors move to a tier, because they cost the vendor money every month and a one-time payment does not. From the vendor's side that is not even cynical. It is just where the recurring costs are.</p>

<h2>How to tell before you pay</h2>
<p>Ask one question about anything sold as a one-time purchase: if this company's servers went off tomorrow, what would I still be able to do? If the answer is everything, the purchase is genuine. If the answer is open my files and look at them, you are buying a subscription with a deposit.</p>
<p>Then look at where the feature list splits. Most pages that sell a lifetime licence also have a comparison table, and the row that sits on the paid tier today is the row that defines the product tomorrow.</p>

<table>
<thead><tr><th>What you bought</th><th>Works with the company gone?</th><th>What you really own</th></tr></thead>
<tbody>
<tr><td>A program that does its work on your machine</td><td>Yes</td><td>The capability</td></tr>
<tr><td>A program that syncs between your devices</td><td>Partly, on one device</td><td>The files, not the convenience</td></tr>
<tr><td>A client for a service</td><td>No</td><td>A window onto nothing</td></tr>
<tr><td>Anything with a model behind it</td><td>No</td><td>The installer</td></tr>
</tbody>
</table>

<h2>Where I actually landed</h2>
<p>I did not get rid of my subscriptions. I pay 2 of them and they are the tools I use every working day, which is the case where paying monthly is honest: the vendor has ongoing costs and I get ongoing value. I keep the bought app for what it does offline, and I stopped expecting the purchase to have replaced anything.</p>
<p>The question is never buy versus subscribe in the abstract. It is whether the thing you need runs without the company, and I work that out tool by tool, the same way I did when <a href="/articles/which-ai-assistant-is-worth-paying-for">deciding which assistant plan earned its monthly payment</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I bought a desktop app outright and I still have it. The licence was honoured and the program runs. What happened instead is that the features worth having moved to a paid cloud tier, so the thing I owned kept working while the part I wanted stopped being included. Alongside that I pay 2 recurring software subscriptions, plus hosting and a domain, and the one-time purchase did nothing to reduce that number.",
  },
};
