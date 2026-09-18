import type { Article } from "@/content/types";

export const authenticationBuildOrBuy: Article = {
  slug: "authentication-build-or-buy",
  title: "Authentication: Build It or Buy It?",
  excerpt:
    "Login looks like a week of work and a form with two fields. The week is real; the form is not the part that costs you. Here is what the hosted providers charge, what the libraries give away, and which decision you are actually making.",
  image: "/images/articles/authentication-build-or-buy.webp",
  imageAlt:
    "Photograph: a laptop screen at an angle showing a browser page reading Authentication Failed, with a Login Retry link beneath it",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Developer Tools", "Authentication", "SaaS", "Security", "Pricing"],
  publishedAt: "2026-09-07",
  seoTitle: "Auth: Clerk vs Auth0 vs Supabase vs WorkOS",
  seoDescription:
    "What hosted auth actually costs per active user, what a library gives you free, and the enterprise request that decides the question for you.",
  quickAnswer:
    "The decision is not really build versus buy, because nobody sensible writes password hashing from scratch any more. It is library versus service. A library such as Better Auth puts the auth in your codebase and your database, costs nothing, and leaves you owning sessions, resets and the emails that carry them. A service owns all of that for a per-user fee, and the fees differ by more than an order of magnitude: Supabase includes 100,000 monthly active users on its $25 Pro plan and charges $0.00325 per user beyond it, Clerk is free to 50,000 monthly retained users then $0.02 each, Auth0 is free to 25,000 monthly active users with paid plans from $35 a month, and WorkOS AuthKit is free to one million. Choose on the enterprise features you will be asked for, not on the first bill.",
  pros: [
    "A hosted provider removes an entire class of security work from your roadmap",
    "SAML and SCIM arrive as configuration rather than a quarter of engineering",
    "Modern libraries ship passkeys, two-factor and organisations without a subscription",
    "Keeping users in your own database means joins, exports and no migration later",
  ],
  cons: [
    "Per-user pricing punishes exactly the growth you were hoping for",
    "Metering differs between vendors, so quoted prices are not directly comparable",
    "Moving off a provider means migrating password hashes, which not all of them export",
    "A library leaves you owning session handling, resets and deliverability",
  ],
  alternatives: [
    { name: "Clerk", url: "https://clerk.com/pricing", note: "Free to 50,000 monthly retained users. Pro $25 a month, $20 annually; overage $0.02 per user, falling to $0.018 above 100,000." },
    { name: "Supabase Auth", url: "https://supabase.com/pricing", note: "Free plan includes 50,000 monthly active users; Pro is $25 a month with 100,000 included and $0.00325 per user after." },
    { name: "Auth0", url: "https://auth0.com/pricing", note: "Free to 25,000 monthly active users. Essentials from $35 a month for consumer apps, $150 for B2B, both quoted at 500 users." },
    { name: "WorkOS", url: "https://workos.com/pricing", note: "AuthKit is free to one million monthly active users. The money is in enterprise connections: $125 each for the first fifteen." },
  ],
  faqs: [
    {
      question: "Is writing my own authentication irresponsible?",
      answer:
        "Writing the cryptography yourself would be. Assembling authentication from a maintained library is not, and it is what most teams shipping today actually do. The distinction matters because the phrase build your own has quietly changed meaning. It used to imply choosing a hashing algorithm and getting it wrong. Now it means installing something like Better Auth, which handles password storage, sessions, two-factor and passkeys, and keeps the user table in your own database. What you still own is the boring, error-prone part: reset flows, session expiry, and email that arrives.",
    },
    {
      question: "Why do the quoted prices differ so wildly?",
      answer:
        "Partly because the products differ, and partly because the unit does. Clerk bills monthly retained users, a deliberately narrower measure than the monthly active users that Auth0, Supabase and most others meter, so a signup who never returns may not count. Beyond that, the products are aimed at different buyers: Supabase prices auth as one feature of a database platform you are already paying for, WorkOS gives away consumer-scale authentication and charges for the enterprise connections, and Auth0 prices for organisations with a compliance department. Compare by modelling your own numbers against each pricing page, not by reading a per-user figure out of a table.",
    },
    {
      question: "When does the decision get made for me?",
      answer:
        "The first time a customer's procurement team asks for SAML single sign-on and SCIM user provisioning. That request is not really a feature request; it is a requirement with a contract behind it, and it arrives with a deadline. Building SAML properly is weeks of work against a specification most people only meet once. This is what the providers are actually selling, and it is why WorkOS structures its pricing the way it does — free to a million users, then $125 per enterprise connection. If that request is plausible within a year, weigh it now rather than in the quarter it lands.",
    },
    {
      question: "How hard is it to move off a provider later?",
      answer:
        "Harder than moving most other dependencies, because the data is deliberately sensitive. You need the user records, and you need the password hashes in a form another system can verify — if a provider will not export hashes, every one of your users has to reset their password during the migration, which is a support event and a churn event at once. Ask about hash export before you sign up, not when you leave. Social and passkey logins move more cleanly, since the credential lives with the identity provider rather than with you.",
    },
  ],
  sources: [
    {
      title: "Clerk pricing",
      publisher: "Clerk",
      url: "https://clerk.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Supabase pricing",
      publisher: "Supabase",
      url: "https://supabase.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Auth0 pricing",
      publisher: "Okta",
      url: "https://auth0.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "WorkOS pricing",
      publisher: "WorkOS",
      url: "https://workos.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Better Auth documentation",
      publisher: "Better Auth",
      url: "https://www.better-auth.com/docs/introduction",
      checkedAt: "2026-09-07",
    },
  ],
  content: `<p>Every estimate for a login screen is wrong in the same direction. The form takes an afternoon. Then comes the password reset, and the email that carries it, and the session that has to expire, and the second factor, and the invitation flow, and the day somebody asks whether a user can belong to two organisations.</p>

<p>None of that is hard exactly. All of it is fiddly, security-adjacent, and completely invisible to the people paying for the product. Which is why the question keeps getting asked, and why the framing is usually wrong.</p>

<h2>The question is library or service, not build or buy</h2>

<p>Nobody credible is proposing you write password hashing. That argument was settled a decade ago and the phrase build your own has moved on without updating its reputation.</p>

<p>Building today means adding something like Better Auth: a framework-agnostic TypeScript library that keeps the auth in your codebase and the users in your database, with two-factor, passkeys, multi-tenancy and single sign-on available through its plugins. You are not implementing the primitives. You are wiring up a maintained implementation of them and taking responsibility for the flows around it.</p>

<p>Buying means a service that owns the user records, hosts the screens, and hands your application a session. What you are really buying is not the login form — it is never the login form — but the ten years of edge cases behind it, and a support contract when one of them bites.</p>

<h2>What the services actually charge</h2>

<p>Published rates at the time of writing. Read the metering column carefully, because it is where the comparison usually goes wrong.</p>

<table>
<thead>
<tr><th>Provider</th><th>Free tier</th><th>Then</th><th>Meters</th></tr>
</thead>
<tbody>
<tr><td>Supabase Auth</td><td>50,000 MAU</td><td>$25/month with 100,000 included, $0.00325 per MAU after</td><td>Monthly active users</td></tr>
<tr><td>Clerk</td><td>50,000 MRU</td><td>Pro $25/month ($20 annually), $0.02 per user over</td><td>Monthly retained users</td></tr>
<tr><td>Auth0</td><td>25,000 MAU</td><td>Essentials from $35/month, B2B from $150</td><td>Monthly active users</td></tr>
<tr><td>WorkOS</td><td>1,000,000 MAU</td><td>$2,500/month per additional million</td><td>Monthly active users</td></tr>
</tbody>
</table>

<p>The spread is not a rounding difference. At a hundred thousand active users, Supabase's overage arithmetic lands in the low hundreds of dollars a year while Clerk's per-user rate puts you an order of magnitude higher — and both are defensible, because they are selling different things to different buyers.</p>

<p>Clerk's metering deserves a note of its own. It bills monthly retained users rather than monthly active users, a narrower unit that excludes people who sign up and never come back. That works in your favour on a consumer product with a leaky funnel, and it means a headline per-user price from one vendor cannot be compared with another's without modelling your own traffic.</p>

<h2>Where the real cost sits if you build</h2>

<p>Not in the login form. In four places that never appear in the estimate:</p>

<ul>
<li><strong>Email deliverability.</strong> A password reset that lands in spam is an outage with a support ticket attached. Reset and verification messages are the highest-stakes email your application sends, and getting them delivered is its own piece of work — I went through it in detail in my guide to <a href="/articles/sending-email-from-your-app">sending email from your app</a>.</li>
<li><strong>Session handling.</strong> Expiry, refresh, revocation on password change, and logging someone out of every device. Each one is a small decision with a security consequence.</li>
<li><strong>Account recovery.</strong> The path for someone who has lost the phone with their second factor on it. This flow is where most real-world account takeovers actually happen, because it is the one everybody rushes.</li>
<li><strong>Enterprise features later.</strong> SAML, SCIM, audit logs. Cheap to add if you chose a library that has them; a quarter of work if you did not.</li>
</ul>

<p>Add those up honestly and the free library is not free. It is perhaps two to four weeks of engineering spread over a year, plus a permanent seat in your on-call rotation.</p>

<h2>The request that settles it</h2>

<p>One day a customer's procurement team sends a list, and on it are SAML single sign-on and SCIM provisioning. They are not negotiable, they have a deadline, and they are attached to the largest contract you have been offered.</p>

<p>This is what the hosted providers are really selling. It is why WorkOS gives away authentication for a million users and charges $125 per enterprise connection for the first fifteen — the consumer part is the free sample, the SSO connection is the product. It is why Auth0 quotes B2B plans at four times its consumer rate, and why Clerk sells B2B features as a $100 add-on with extra SAML connections at $75 each.</p>

<blockquote>
<p>If a signed enterprise contract is plausible inside a year, price that outcome now. Retrofitting SAML under a deadline is the most expensive version of this decision, and it is the one most teams end up choosing by accident.</p>
</blockquote>

<h2>Choosing, in three questions</h2>

<ol>
<li><strong>Do you already run a database platform that includes auth?</strong> If you are on Supabase, its auth is included on the plan you are paying for and the argument is largely over. Use it.</li>
<li><strong>Will you be asked for SAML or SCIM within a year?</strong> If yes, buy — and price WorkOS against Auth0 on connections rather than on users. If no, a library keeps your users in your own database with no per-user fee at all.</li>
<li><strong>Is your funnel leaky?</strong> Large numbers of signups who never return are cheap under retained-user metering and expensive under active-user metering. That difference alone can move the annual bill by a factor of ten.</li>
</ol>

<p>Whichever way it goes, ask one question before signing: will you export password hashes if I leave? A provider who will not is quietly making every future migration a forced password reset for your entire user base.</p>

<h2>What I would do</h2>

<p>For a product that has not found its shape yet, use the library and keep the users in your own database, because that decision stays reversible. For anything selling to businesses with a procurement process, buy from the start and treat the bill as the price of not writing SAML.</p>

<p>Then instrument the thing. Failed logins, reset requests and sudden spikes in either are the earliest signal you get that something is wrong, and they belong wherever the rest of your alerts already live — my notes on <a href="/articles/error-tracking-for-small-teams">error tracking for small teams</a> cover setting that up without drowning in noise.</p>`,
};
