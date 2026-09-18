import type { Article } from "@/content/types";

export const sendingEmailFromYourApp: Article = {
  slug: "sending-email-from-your-app",
  title: "Sending Email From Your App Without Landing in Spam",
  excerpt:
    "Password resets that never arrive are not a mystery. They are three DNS records and one architectural decision. Here is what SPF, DKIM and DMARC each prove, what Gmail and Yahoo now require in writing, and what sending actually costs once you price it.",
  image: "/images/articles/sending-email-from-your-app.webp",
  imageAlt:
    "Photograph: an open laptop in a darkened room, its screen the only light, showing a long list of messages in an email client",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Developer Tools", "Email", "DNS", "Deliverability"],
  publishedAt: "2026-09-06",
  contentUpdatedAt: "2026-09-06",
  seoTitle: "Email Deliverability: SPF, DKIM and DMARC (2026)",
  seoDescription:
    "Why transactional email lands in spam, what SPF, DKIM and DMARC each prove, the Gmail sender rules, and what Resend, Postmark and SES cost per message.",
  quickAnswer:
    "Publish all three records and align them. SPF says which servers may send for your domain, DKIM signs the message with a key published in your DNS, and DMARC tells receivers what to do when either fails — and requires the domain in the From header to match the SPF or DKIM domain. Gmail requires all three from anyone sending more than 5,000 messages a day to Gmail accounts, along with TLS, valid forward and reverse DNS, one-click unsubscribe on marketing mail, and a reported spam rate below 0.30%. Yahoo asks for the same and wants unsubscribes honoured within two days. The architectural decision most teams get wrong is sending password resets and newsletters from one domain, which lets a bad campaign take your login emails down with it. Split them across subdomains, and instrument bounces and complaints so you hear about failures before your customers do.",
  pros: [
    "The three records are a one-off afternoon of work and then largely look after themselves",
    "DMARC reports tell you who else is sending as your domain, which is usually a surprise",
    "Separate subdomains stop a marketing mistake from taking password resets with it",
    "At small volumes the whole thing costs a few pounds a month, or nothing at all",
  ],
  cons: [
    "DNS changes propagate slowly, so a misconfiguration can take hours to fully undo",
    "SPF has a hard limit of ten DNS lookups and fails silently once you exceed it",
    "Moving to a strict DMARC policy too early will block mail you did not know you were sending",
    "Reputation attaches to a sending domain, so switching providers means building it again",
  ],
  alternatives: [
    { name: "Resend", url: "https://resend.com/pricing", note: "Developer-first API with a usable free tier. Good defaults, little to configure, fewer controls when you eventually want them." },
    { name: "Postmark", url: "https://postmarkapp.com/pricing", note: "Built around transactional mail and separate message streams. Strong reputation, priced per message rather than per contact." },
    { name: "Amazon SES", url: "https://aws.amazon.com/ses/pricing/", note: "The cheapest per message by a wide margin, and the most work. You bring your own templates, suppression handling and dashboards." },
    { name: "Your own mail server", note: "Free of per-message charges and free of goodwill from mailbox providers. A fresh IP address starts with no reputation and takes weeks to earn one." },
  ],
  faqs: [
    {
      question: "Do I really need all three of SPF, DKIM and DMARC?",
      answer:
        "Yes, and they are not interchangeable. SPF authorises servers, DKIM authenticates the message itself, and DMARC ties either result back to the domain a person actually sees in the From line. Without DMARC a message can pass SPF for a domain nobody reads while displaying yours, which is the gap phishing walks through. Google requires all three from anyone sending more than 5,000 messages a day to Gmail accounts, and Yahoo requires both SPF and DKIM plus a published DMARC policy of at least p=none from bulk senders.",
    },
    {
      question: "What spam rate is acceptable?",
      answer:
        "Google asks senders to keep the reported spam rate below 0.30%, recommends staying under 0.10%, and says plainly that you should avoid ever reaching 0.30%. Yahoo applies the same 0.30% figure, calculated on mail delivered to the inbox. Those numbers are lower than they sound. Three complaints per thousand messages is the ceiling, which on a list of two thousand people is six irritated recipients. That is precisely why a campaign and a password reset should not share a sending domain: the campaign earns the complaints and the reset pays for them.",
    },
    {
      question: "Should my DMARC policy be p=none or p=reject?",
      answer:
        "Start at p=none with a reporting address and leave it there for a few weeks. The policy does nothing on its own, but the aggregate reports show you every source sending as your domain, and there is almost always one you had forgotten — an invoicing tool, a form handler, a monitoring service. Move to p=quarantine once those are authenticated, and to p=reject when a fortnight of reports shows nothing failing. Jumping straight to reject is how teams find out their accounting software was sending as them, by way of it no longer arriving.",
    },
    {
      question: "Is a dedicated IP address worth it?",
      answer:
        "For most small products, no. A dedicated address starts with no reputation at all, and building one needs a steady volume of engaged mail warmed up over several weeks. Below roughly a few hundred thousand messages a month you are better off in a provider's shared pool, where the reputation already exists and is maintained by a company whose business depends on it. The case for going dedicated is volume high enough that you would rather not be exposed to anyone else's mistakes.",
    },
  ],
  sources: [
    {
      title: "Email sender guidelines",
      publisher: "Google",
      url: "https://support.google.com/a/answer/81126",
      checkedAt: "2026-09-06",
    },
    {
      title: "Sender best practices",
      publisher: "Yahoo",
      url: "https://senders.yahooinc.com/best-practices/",
      checkedAt: "2026-09-06",
    },
    {
      title: "RFC 7208: Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1",
      publisher: "IETF",
      url: "https://www.rfc-editor.org/rfc/rfc7208",
      checkedAt: "2026-09-06",
    },
    {
      title: "RFC 6376: DomainKeys Identified Mail (DKIM) Signatures",
      publisher: "IETF",
      url: "https://www.rfc-editor.org/rfc/rfc6376",
      checkedAt: "2026-09-06",
    },
    {
      title: "RFC 7489: Domain-based Message Authentication, Reporting, and Conformance (DMARC)",
      publisher: "IETF",
      url: "https://www.rfc-editor.org/rfc/rfc7489",
      checkedAt: "2026-09-06",
    },
    {
      title: "Service quotas in Amazon SES",
      publisher: "Amazon Web Services",
      url: "https://docs.aws.amazon.com/ses/latest/dg/quotas.html",
      checkedAt: "2026-09-06",
    },
  ],
  content: `<p>The first time it happens it looks like a mystery. Password resets reach your own inbox in seconds. A customer says they never got one. You check the logs and the message was accepted, queued and delivered. It was delivered — into a spam folder, or into wherever Gmail files the things it has decided not to show anybody.</p>

<p>Deliverability has a reputation for being unknowable. It is not. There are three DNS records, a short list of requirements the large mailbox providers have now written down explicitly, and one architectural decision that nearly every team gets wrong on the first attempt. Those three things account for most of the cases I have seen.</p>

<h2>The three records, and what each one proves</h2>

<p>They are often described as though they were three versions of the same security measure. They are not. Each answers a different question, and a receiving server needs all three answers.</p>

<table>
<thead>
<tr><th>Record</th><th>What it proves</th><th>Where it lives</th></tr>
</thead>
<tbody>
<tr><td>SPF</td><td>This server is permitted to send for this domain</td><td>A TXT record on the domain itself</td></tr>
<tr><td>DKIM</td><td>This message was signed with a key you published, and was not altered in transit</td><td>A TXT record at selector._domainkey</td></tr>
<tr><td>DMARC</td><td>What to do when the first two fail, and where to send the reports</td><td>A TXT record at _dmarc</td></tr>
</tbody>
</table>

<p>In practice they look like this, and whichever provider you send through will hand you the exact values:</p>

<pre><code>example.com.                TXT  "v=spf1 include:amazonses.com -all"
pm._domainkey.example.com.  TXT  "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3..."
_dmarc.example.com.         TXT  "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
</code></pre>

<p>The part carrying the most weight is not any single record but the relationship between them, called alignment. A message can pass SPF for one domain while displaying an entirely different domain in the From line, which is the gap phishing walks straight through. DMARC closes it by requiring the domain a person actually sees to match either the SPF domain or the DKIM domain. Google and Yahoo both state that requirement in those words.</p>

<blockquote>
<p>SPF has a limit that catches people out: a maximum of ten DNS lookups when the record is evaluated. Every include: costs at least one, and some providers' includes contain includes of their own. Add a fourth or fifth tool and the record quietly stops evaluating, which to a receiver looks the same as not having one.</p>
</blockquote>

<h2>What Gmail and Yahoo now require in writing</h2>

<p>These used to be informal expectations passed around in forum threads. They are published requirements now, which makes them checkable rather than folklore. For anyone sending more than 5,000 messages a day to Gmail accounts, Google requires SPF and DKIM, a DMARC policy on the sending domain, alignment between the From domain and one of the two, a TLS connection for transmission, and valid forward and reverse DNS for the sending address. Marketing and subscribed messages must support one-click unsubscribe and carry a clearly visible unsubscribe link.</p>

<p>Then there is the number that governs everything else. Google asks senders to keep their reported spam rate below 0.30%, recommends staying under 0.10%, and says you should avoid ever reaching 0.30%. Yahoo applies the same threshold, calculated on mail delivered to the inbox, and asks that unsubscribes are honoured within two days.</p>

<p>Read those thresholds as a ratio rather than a percentage and the effect becomes obvious. Three complaints per thousand messages is the ceiling. On a modest list, that is a handful of people having a bad morning.</p>

<h2>The decision most teams get wrong</h2>

<p>Here is the mistake, and it is close to universal in a first implementation: password resets, receipts and the monthly newsletter all go out from the same domain.</p>

<p>Reputation attaches to the sending domain. The newsletter is the mail people mark as spam, because a newsletter is a thing you can grow tired of. A password reset is mail somebody asked for thirty seconds ago, and it is worthless if it arrives an hour late in a junk folder. Sharing a domain means the newsletter's complaint rate decides whether your users can log in.</p>

<p>So split them. The usual arrangement is transactional mail from a subdomain such as mail.example.com and marketing from news.example.com, each with its own DKIM key and its own reputation. Postmark's message streams exist for this reason and every serious provider has some version of it. If you take one thing from this article, take this: it costs nothing and it prevents the worst failure.</p>

<h2>What sending actually costs</h2>

<p>The figures below are published prices at the time of writing, and they move far more often than the technical requirements do. Treat them as the shape of the market rather than a quotation.</p>

<table>
<thead>
<tr><th>Provider</th><th>Free allowance</th><th>Entry paid tier</th><th>Suits</th></tr>
</thead>
<tbody>
<tr><td>Resend</td><td>3,000 a month, capped at 100 a day</td><td>$20/month for 50,000</td><td>Products that want to be sending within the hour</td></tr>
<tr><td>Postmark</td><td>100 a month, with no overage</td><td>$15/month for 10,000, then $1.80 per 1,000</td><td>Transactional mail where arrival time matters</td></tr>
<tr><td>Amazon SES</td><td>Credits for new AWS accounts rather than a standing allowance</td><td>$0.16 per 1,000 messages, plus $0.12 per GB of attachments</td><td>High volume, and a team content to build the rest</td></tr>
</tbody>
</table>

<p>The gap between the managed services and SES is roughly an order of magnitude, and what the difference buys is everything around the send: templates, suppression lists, bounce handling, dashboards, and somebody to talk to when a domain gets blocked. At a few thousand messages a month that gap is a couple of pounds and not worth a minute's thought. At several million it is a salary.</p>

<p>One SES detail to know before you plan around it: new accounts sit in a sandbox permitting 200 messages per 24 hours at one message per second, and only to verified addresses. Leaving the sandbox is a support request, and it is not instant. Do not find this out on launch day. The same forward planning applies to any outside dependency you build on — the questions I ask about <a href="/articles/free-apis-worth-building-on">whether a free API is worth building on</a> apply just as well to the service that sends your mail.</p>

<h2>The part nobody instruments</h2>

<p>Most teams ship email as fire-and-forget: call the API, check for a success response, move on. That response means the provider accepted the message, not that a human received it. Everything interesting happens afterwards, asynchronously, and only reaches you if you asked to be told.</p>

<p>Three things are worth wiring up on day one:</p>

<ul>
<li><strong>Bounce webhooks.</strong> A hard bounce means that address will never work. Continuing to send to it is the behaviour that damages a sending reputation fastest, so record it and stop.</li>
<li><strong>Complaint webhooks.</strong> Somebody pressed the spam button. That event should suppress future marketing to the address permanently, and if it lands on transactional mail you have a product problem rather than an email one.</li>
<li><strong>A suppression list you own.</strong> Providers keep their own, but if you ever change provider that list is the asset. Losing it means starting again and reintroducing every bad address on the first send.</li>
</ul>

<p>These are the same class of signal as an application exception: something failed after the request finished and nobody will mention it unless you asked. If you already run <a href="/articles/error-tracking-for-small-teams">error tracking in production</a>, route delivery failures into it rather than building a second dashboard nobody opens.</p>

<h2>What I would do first</h2>

<p>Roughly in order of return on the time spent:</p>

<ol>
<li><strong>Publish SPF, DKIM and DMARC</strong> with the policy at p=none and a reporting address that reaches a person. Nothing changes for senders yet, and the reports start arriving.</li>
<li><strong>Read a fortnight of DMARC reports.</strong> You will find a sender you had forgotten about. Everyone does.</li>
<li><strong>Split transactional from marketing</strong> onto separate subdomains before either has meaningful volume. Doing it later means warming a new domain from nothing.</li>
<li><strong>Wire bounce and complaint webhooks</strong> into the alerting you already have, and keep your own suppression list.</li>
<li><strong>Tighten DMARC to quarantine, then reject</strong> once the reports are clean. This is the step that actually stops other people spoofing you, and the one most teams never get round to.</li>
</ol>

<p>None of it is more than an afternoon's work. What makes it feel harder than it is, is that email failures are invisible by default: the send succeeds, the log is green, and the only person who knows is the customer who gave up and went somewhere else.</p>`,
};
