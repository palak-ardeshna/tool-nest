import type { Article } from "@/content/types";

export const passwordManagersAfterThePriceRises: Article = {
  slug: "password-managers-after-the-price-rises",
  title: "Password Managers After the 2026 Price Rises: What Changed and What to Do",
  excerpt:
    "1Password put its individual plan up, Bitwarden roughly doubled Premium, and Proton Pass cut its price in half. The ranking people memorised two years ago no longer matches the invoices. Here is what actually moved, and how to decide without migrating twice.",
  category: "software",
  author: "parth-patel",
  tags: ["Security", "Software", "Comparisons", "Privacy"],
  publishedAt: "2026-09-02",
  image: "/images/articles/password-managers-after-the-price-rises.webp",
  imageAlt: "An opened silver combination padlock resting on the keys of a white computer keyboard",
  seoTitle: "Password Managers in 2026: Prices Compared",
  seoDescription:
    "1Password, Bitwarden and Proton Pass after the 2026 price rises: what each plan costs, whether the free tiers are enough, and what Vaultwarden costs.",
  quickAnswer:
    "Bitwarden's free tier still covers unlimited passwords across unlimited devices and remains the right answer for most individuals — the paid upgrade buys emergency access, integrated authenticator codes and file attachments rather than core password storage. Proton Pass Plus is now the cheapest paid personal plan after a substantial cut, and it is the pick if you already pay Proton for anything else. 1Password costs the most and earns it only if you need its sharing and recovery model for a family or a small team. If you are already on one of these and it works, the price change is not on its own a reason to move: migration costs you an evening and a small risk of losing something, and that is worth more than the difference.",
  pros: [
    "Every option here is enormously better than reusing one password across accounts",
    "Free tiers now cover unlimited passwords on unlimited devices",
    "Export is standard, so no vault is a genuine one-way door",
    "Competition on price has been real, and it moved in the customer's favour more than once",
  ],
  cons: [
    "Prices moved in both directions in 2026, so old comparison articles now mislead",
    "Family plans are priced per household, which punishes the one-person household",
    "Free tiers withhold emergency access, the feature you notice only when it is too late",
    "Self-hosting removes the subscription and hands you the backup problem instead",
  ],
  alternatives: [
    { name: "Bitwarden", url: "https://bitwarden.com", note: "Open source, the strongest free tier, and the cheapest family plan per seat." },
    { name: "Proton Pass", url: "https://proton.me/pass", note: "Cheapest paid personal plan after a 2026 cut; bundles with the rest of Proton." },
    { name: "1Password", url: "https://1password.com", note: "The most polished sharing and recovery model; no free tier, only a trial." },
    { name: "Vaultwarden", url: "https://github.com/dani-garcia/vaultwarden", note: "Self-hosted server that speaks the Bitwarden protocol. No subscription, your backups." },
  ],
  faqs: [
    {
      question: "Is the free tier genuinely enough?",
      answer:
        "For one person storing passwords and passkeys, yes. Bitwarden's free plan covers unlimited items on unlimited devices, which was the paid feature a few years ago. What you give up is emergency access, integrated authenticator codes, encrypted file storage and priority support. Emergency access is the one worth thinking about: it is the mechanism that lets a trusted person reach your vault if you cannot, and you will not miss it until the day it matters.",
    },
    {
      question: "Should I keep my two-factor codes in the same app as my passwords?",
      answer:
        "It is a trade, not a rule. Putting both in one vault means a single compromise gives an attacker both factors, which is not really two factors any more. Keeping them apart is safer and slightly more annoying, so some people abandon two-factor entirely rather than deal with it. Convenience that you actually stick to beats a stricter arrangement you drop after a month. If the account matters — email, banking, your domain registrar — keep that second factor somewhere else.",
    },
    {
      question: "What happens to my passwords if the company shuts down?",
      answer:
        "You export them. Every manager here supports an unencrypted export you can import elsewhere, which is also why an export file is one of the most dangerous documents you can leave on a desktop. The practical risk is not the vendor disappearing overnight; it is you losing access to the account that holds the vault. Keep your master password and recovery kit somewhere physical and offline.",
    },
    {
      question: "Are browser-built-in managers good enough now?",
      answer:
        "They have improved a great deal and they are far better than nothing. The limits are portability and sharing: your passwords live inside one browser's account, and sharing one with a partner or a colleague is awkward or impossible. If you use one browser on every device and never share credentials, a built-in manager is a defensible choice. Most people fail one of those two conditions.",
    },
  ],
  sources: [
    {
      title: "Bitwarden Password Manager Pricing & Plans | Bitwarden",
      publisher: "Bitwarden",
      url: "https://bitwarden.com/pricing/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Password Manager Pricing for Individuals & Families | 1Password",
      publisher: "1Password",
      url: "https://1password.com/pricing/personal",
      checkedAt: "2026-09-03",
    },
    {
      title: "Proton Pass pricing and plans",
      publisher: "Proton",
      url: "https://proton.me/pass/pricing",
      checkedAt: "2026-09-03",
    },
    {
      title: "About Emergency Access",
      publisher: "Bitwarden",
      url: "https://bitwarden.com/help/emergency-access/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Export Vault Data",
      publisher: "Bitwarden",
      url: "https://bitwarden.com/help/export-your-data/",
      checkedAt: "2026-09-03",
    },
    {
      title: "Backing up your vault",
      publisher: "Vaultwarden project (dani-garcia/vaultwarden wiki)",
      url: "https://github.com/dani-garcia/vaultwarden/wiki/Backing-up-your-vault",
      checkedAt: "2026-09-03",
    },
    {
      title: "Web Authentication: An API for accessing Public Key Credentials - Level 3",
      publisher: "W3C",
      url: "https://www.w3.org/TR/webauthn-3/",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Password manager comparisons age badly, and 2026 was an unusually bad year for them. Three of the main options changed price within months of each other, in different directions. Articles written in 2024 now recommend the wrong thing for the right reasons.</p>

<p>I have not audited anyone's cryptography, and neither has any article that says it has. What I can do is set out what the plans now cost, what the money buys that the free tier does not, and where the decision is genuinely close enough that you should stop researching and pick one.</p>

<h2>What actually moved</h2>

<table>
<thead>
<tr><th>Product</th><th>Free tier</th><th>Personal paid</th><th>Family</th><th>2026 change</th></tr>
</thead>
<tbody>
<tr><td>Bitwarden</td><td>Unlimited passwords, unlimited devices</td><td>Around $19.80 a year</td><td>Around $47.88 a year, up to six people</td><td>Premium roughly doubled</td></tr>
<tr><td>Proton Pass</td><td>Yes, with limits on aliases and sharing</td><td>Around $1.99 a month</td><td>Bundled with Proton family plans</td><td>Plus cut by roughly half</td></tr>
<tr><td>1Password</td><td>None — a two-week trial</td><td>Around $2.99 a month, billed annually</td><td>Around $4.49 a month, up to five people</td><td>Individual plan increased</td></tr>
</tbody>
</table>

<p>Two things fall out of that table immediately. Bitwarden's family plan is still the best value per seat in the category, because six seats at roughly forty-eight dollars is a price nobody else approaches. And Proton Pass is now the cheapest paid personal plan, which it was not a year ago.</p>

<p>Prices in this market have moved twice in eighteen months. Treat every figure above as a starting point for checking the vendor's own page, not as a fact with a long shelf life.</p>

<h2>What the paid tier actually buys</h2>

<p>This is where most comparisons go vague. The upgrade is not "more passwords" — every free tier stopped limiting those. It is four specific things:</p>

<ul>
<li><strong>Emergency access.</strong> A nominated person can request your vault, and gets it after a waiting period unless you decline. This is the feature that matters most and gets discussed least, because it only ever pays out on the worst day of someone's life.</li>
<li><strong>Integrated authenticator codes.</strong> Convenient, and a deliberate weakening of two-factor authentication if you keep both factors in one vault. Useful for low-stakes accounts, questionable for your email.</li>
<li><strong>Encrypted file storage.</strong> A gigabyte or so for passport scans and recovery kits. Small, but it is the right place for exactly the documents people otherwise email to themselves.</li>
<li><strong>Sharing that is not a copy-paste.</strong> Shared vaults with real permissions. For a household this is a nicety; for a two-person business it is the whole reason to pay.</li>
</ul>

<blockquote>
<p>If none of those four describes a problem you have, the free tier is not a compromise. It is the correct product and the paid one is an upsell.</p>
</blockquote>

<h2>The family plan arithmetic</h2>

<p>Family plans look expensive next to an individual plan and usually are not. Bitwarden's is roughly four dollars a month for six people; buying six individual plans would cost more than twice that. 1Password's covers five for less than the price of two individuals.</p>

<p>The catch is that "family" means people who share a household and, in practice, a payment method. If you want to cover a parent in another city and a friend, you are buying a plan whose sharing model assumes you live together. That works, but the shared-vault features you paid for will mostly go unused.</p>

<p>The genuinely useful part of a family plan is not the discount. It is that one person can recover another's account. When a relative forgets a master password, the family organiser can reset it. Without that, a forgotten master password means the vault is gone — the vendor cannot help, by design.</p>

<h2>Self-hosting: what it costs you instead</h2>

<p>Vaultwarden is a lightweight server that speaks the Bitwarden protocol, so the official clients work against it. It runs comfortably on the smallest virtual machine you can rent, and it turns a subscription into a small monthly hosting bill.</p>

<p>What you take on in exchange is not trivial, and it is worth being blunt about:</p>

<ul>
<li><strong>Backups are now your job.</strong> A vault with no tested restore is not a backup. If the server disk fails and your only copy was on it, every account you own is locked.</li>
<li><strong>Updates are now your job.</strong> This is an internet-facing service holding every credential you have. An unpatched box is a worse outcome than any subscription.</li>
<li><strong>Availability is now your job.</strong> Clients cache your vault locally, so a server outage is survivable — but adding a password from a new device while it is down is not.</li>
</ul>

<p>The people for whom this is the right answer usually already run other services and have a backup routine that works. If setting this up would be your first server, the twenty dollars a year is a bargain and you should pay it. My notes on <a href="/articles/deploying-a-nextjs-app-four-routes">what running your own infrastructure actually involves</a> apply to this decision more or less unchanged.</p>

<h2>Migration is the part people underestimate</h2>

<p>Moving between managers is a solved problem technically and an unsolved one procedurally. The export and import work. What goes wrong is everything around them.</p>

<ol>
<li><strong>Export from the old manager, and set a timer.</strong> That file is plain text containing every credential you own. It should exist for minutes, not days, and never in a synced folder.</li>
<li><strong>Import, then verify a sample.</strong> Check twenty entries by hand, weighted towards the ones with unusual fields. Custom fields, notes and attachments are where imports quietly drop data.</li>
<li><strong>Check your passkeys separately.</strong> Passkeys do not always move with a standard export. Some will need to be recreated on each site, and finding that out later is unpleasant.</li>
<li><strong>Leave the old vault in place for a month.</strong> Do not cancel and delete on the same day. The missing entry always surfaces in week three.</li>
<li><strong>Then delete properly.</strong> Old vault, export file, and any copy your file manager helpfully backed up.</li>
</ol>

<h2>Passkeys change the shape of the question</h2>

<p>Passkeys are steadily becoming a real option rather than a demo, and they change what a password manager is for. A passkey has no shared secret to steal and cannot be phished in the usual way, which removes the single largest category of account compromise.</p>

<p>What matters for this decision is that passkeys are stored in a vault, and the vault you pick is where they will live. All three products here support them. The question to ask is portability: if you decide to leave in two years, do the passkeys come with you, or do you re-enrol on forty sites?</p>

<p>Nobody has a fully satisfying answer to that yet. It is a reason to prefer a vendor with a credible export story over one betting on lock-in.</p>

<h2>What I would tell someone choosing today</h2>

<ul>
<li><strong>One person, no sharing, watching the cost:</strong> Bitwarden free. It is not a lesser product for this use; it is the product.</li>
<li><strong>You already pay Proton for mail or VPN:</strong> Proton Pass Plus, which is now cheap enough that the bundle argument mostly wins on its own.</li>
<li><strong>A household or a small team where recovery matters:</strong> Bitwarden Families on price, 1Password Families if the people involved will not tolerate rough edges. That second consideration is not a joke — a password manager the family refuses to use protects nothing.</li>
<li><strong>You already run servers and have working backups:</strong> Vaultwarden, and put the restore test in your calendar rather than your intentions.</li>
<li><strong>You are already on one of these and content:</strong> stay. A few pounds a year is not worth an evening of migration and the risk of losing an entry.</li>
</ul>

<p>The thing worth keeping in view is that the differences between these products are small and the difference between using one and not using one is enormous. If this article talks you out of a decision and into six more months of a reused password, it has made your security worse. Pick the one that fits the list above, spend the evening moving, and stop reading comparisons — including mine.</p>`,
};
