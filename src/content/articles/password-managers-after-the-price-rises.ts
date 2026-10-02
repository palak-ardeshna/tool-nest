import type { Article } from "@/content/types";

/**
 * Pricing comparison, rewritten on the URL first published 2026-09-02 (old text
 * deleted 2026-09-29, not restored). Palak's own facts (chat, 2026-10-01): more
 * than 4 years on Chrome's built-in manager, plus a yearly NordPass
 * subscription whose amount he did not give, so no NordPass price is quoted;
 * autofill drops credentials into boxes that are not login fields. Prices are
 * from Bitwarden's pricing page and Google's password manager page, read
 * 2026-10-01. NordPass's plans page returned 403 that day.
 */
export const passwordManagersAfterThePriceRises: Article = {
  slug: "password-managers-after-the-price-rises",
  title: "Free and Paid Password Managers: What You Get",
  excerpt:
    "Chrome's manager has held my logins for more than four years and costs nothing. Bitwarden Premium is $19.80 a year. Here is what the money buys, and the one thing the free one keeps getting wrong.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Password managers", "Bitwarden", "NordPass", "Chrome", "Pricing"],
  publishedAt: "2026-09-02",
  contentUpdatedAt: "2026-10-01",
  seoTitle: "Free vs Paid Password Managers: What You Get",
  seoDescription:
    "Bitwarden Premium is $19.80 a year, Families $47.88. Chrome's manager is free and has held my logins for four years. What the paid tier actually adds.",
  content: `
<p>More than four years on a password manager I have never paid a rupee for. That is the part of this that surprises people, so here are the numbers next to it.</p>

<table>
<thead><tr><th>Option</th><th>Price</th><th>What you get</th></tr></thead>
<tbody>
<tr><td>Google Password Manager</td><td>Free</td><td>Built into Chrome on every platform and into every Android app, with sync, password checkup and breach alerts</td></tr>
<tr><td>Bitwarden Free</td><td>Free</td><td>Unlimited devices and unlimited items, apps for browser, mobile and desktop, passkeys, sharing with one other person</td></tr>
<tr><td>Bitwarden Premium</td><td>$1.65 a month, billed $19.80 a year</td><td>The paid personal tier</td></tr>
<tr><td>Bitwarden Families</td><td>$3.99 a month, billed $47.88 a year</td><td>Up to 6 users</td></tr>
</tbody>
</table>
<p>Prices are from Bitwarden's pricing page and the Google Password Manager page, both read on 1 October 2026. I pay for NordPass once a year as well. I am not putting its price in the table, because its plans page would not load for me that day and I am not going to quote a figure from memory.</p>

<h2>Run the bill for a family of four</h2>
<p>Say four people in one house want a paid manager. Four Bitwarden Premium subscriptions come to $79.20 a year. One Families plan, which covers up to 6, comes to $47.88. The family plan saves $31.32 a year and has room for two more people. That is the whole calculation, and it is the same shape at most vendors: the second seat is where paying starts to make sense.</p>
<p>For one person the sum is different. $19.80 a year against a free tier that already stores unlimited items on unlimited devices. The extras on top are what the money buys.</p>

<h2>What four years on the free one has been like</h2>
<p>I have used Chrome's built-in password manager for more than 4 years, and I also pay once a year for NordPass. The free one holds everything and syncs to my phone without me arranging it. What it does badly is autofill in the wrong place: it drops my email or password into a box that is not a login field, usually a search box on a page that has a login somewhere else. I notice when the search results come back as my own email address.</p>
<p>That is not a security hole by itself, but it is the kind of mistake that puts a password into a form that gets submitted and logged somewhere. On any page where I am not sure, I now type the login myself rather than click the suggestion.</p>

<h2>What would make me switch</h2>
<p>The cost of the free Google option is being locked to one browser. Everything lives behind a Google sign-in, and the Android side works because Android is Google's. If I moved to a browser outside that family tomorrow, I would be exporting a file and starting again.</p>
<p>That is also why I have not cancelled the paid one. I keep logins I would hate to lose out of the browser's store, and a $20-a-year class of product is cheap next to one locked account. I wrote about the other subscriptions I weigh this way in <a href="/articles/which-ai-assistant-is-worth-paying-for">which AI assistant is worth paying for</a>.</p>
`,
  faqs: [
    {
      question: "Is a free password manager enough?",
      answer:
        "It has been for me for over four years. Bitwarden's free tier stores unlimited items on unlimited devices, so the storage itself is not what the paid tiers sell.",
    },
    {
      question: "When does the family plan pay off?",
      answer:
        "At two people and up. Four Bitwarden Premium seats are $79.20 a year; one Families plan covering up to 6 is $47.88.",
    },
    {
      question: "What is the catch with Chrome's manager?",
      answer:
        "Two things for me. It is tied to a Google sign-in, and its autofill sometimes puts my email or password into a box that is not a login field.",
    },
  ],
  humanReview: {
    experience:
      "I have used Chrome's built-in password manager for more than 4 years, and I also pay once a year for NordPass. The free one holds everything and syncs to my phone without me arranging it. What it does badly is autofill in the wrong place: it drops my email or password into a box that is not a login field, usually a search box on a page that has a login somewhere else. I notice when the search results come back as my own email address.",
    reviewedAt: "2026-10-01",
  },
  sources: [
    {
      title: "Bitwarden pricing",
      publisher: "Bitwarden",
      url: "https://bitwarden.com/pricing/",
      checkedAt: "2026-10-01",
    },
    {
      title: "Google Password Manager",
      publisher: "Google",
      url: "https://passwords.google/",
      checkedAt: "2026-10-01",
    },
  ],
};
