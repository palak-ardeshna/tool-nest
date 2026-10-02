import type { Article } from "@/content/types";

/**
 * Numbered setup log with pros and cons, rewritten on the URL first published
 * 2026-09-06 (old text deleted 2026-09-29, not restored). Palak's own facts
 * (chat, 2026-10-02): mail sent from a site through Google Workspace SMTP and
 * the server's own PHP mail reached some recipients and was junked by Gmail;
 * the From address was a no-reply mailbox that did not exist; making it a real
 * address on the domain fixed it; DNS changes took about 4 hours before he
 * could test again. Google's published sender requirements (read 2026-10-02)
 * cover authentication alignment and do not state that the From mailbox must
 * exist, so his finding is reported as his own result and not as a Google rule.
 */
export const sendingEmailFromYourApp: Article = {
  slug: "sending-email-from-your-app",
  title: "Why Gmail Junks Email Sent From Your App",
  excerpt:
    "Other providers delivered it. Gmail sent it to spam. The cause was not SPF or DKIM, it was a no-reply address that did not exist as a mailbox, and the DNS wait to prove it was about 4 hours.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Email", "Deliverability", "Gmail", "DNS", "SMTP"],
  publishedAt: "2026-09-06",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Why Gmail Junked My App's Email",
  seoDescription:
    "Mail from my site reached some inboxes but not Gmail. The cause was a no-reply From address that did not exist as a mailbox.",
  faqs: [
    {
      question: "Why would mail arrive for some people and not others?",
      answer:
        "Each receiver decides for itself. Gmail junked mine while other providers delivered the same message, so a split like that points at one receiver's judgement rather than a broken server.",
    },
    {
      question: "Does the From address have to be a real mailbox?",
      answer:
        "Google's published sender guidelines do not say so. They cover SPF, DKIM, DMARC, valid forward and reverse DNS, and From alignment for bulk senders. On my own domain a no-reply address that did not exist was junked and a real one was not, which is my result rather than a documented rule.",
    },
    {
      question: "How long should I wait between attempts?",
      answer:
        "Longer than feels reasonable. My DNS changes took about 4 hours to take effect, so testing sooner than that told me nothing and only made it harder to know which change had done the work.",
    },
    {
      question: "Do I need a paid sending service?",
      answer:
        "Often yes for volume, but check the cheap things first. A real From address on a domain you control, with SPF and DKIM in place, fixed my case without one.",
    },
  ],
  content: `
<p>Mail from a site I built was arriving for some people and going to junk at Gmail. That split is the difficult version of this problem, because nothing is broken enough to show up as an error.</p>

<p>I was sending through Google Workspace SMTP and the server's own PHP mail, and the messages reached some recipients while Gmail put them in spam. The From address was a no-reply address that did not exist as a mailbox. Changing it to a real address on the domain is what fixed the delivery. Every test cost me about 4 hours, because that is how long the DNS changes took to take effect before I could send again and see what happened.</p>

<h2>What I did, in order</h2>
<ol>
<li>Confirmed the mail was being sent at all. It was, which ruled out the application and pointed at the receiver.</li>
<li>Checked who was rejecting it. Gmail was junking the messages while other providers delivered them, so this was one receiver's judgement rather than a broken setup.</li>
<li>Looked at the From address and found it was a no-reply mailbox that had never existed. Mail was arriving from an address that could not have received a reply.</li>
<li>Changed the From to a real address on the domain, then waited about 4 hours for DNS before testing anything.</li>
<li>Sent again. Gmail accepted it, and delivery stayed in the inbox afterwards.</li>
</ol>

<h2>Why a fake From address is a problem</h2>
<p>Google publishes its requirements for people sending mail to Gmail. They cover authentication: set up SPF or DKIM for your sending domain, add DMARC if you send in volume, keep valid forward and reverse DNS, and for bulk senders align the From domain with the SPF or DKIM domain. Those were read on 2 October 2026.</p>
<p>What those published requirements do not say is that the From mailbox has to exist. So I am not going to claim Gmail has a written rule about it. What I can report is the result on my own domain: an address that went nowhere was junked, and a real one on the same domain was not.</p>

<h2>Partial delivery hides for a long time</h2>
<p>A total failure gets reported within a day. Someone says they never got the confirmation, you check, you fix it. Mail that lands everywhere except Gmail does not get reported, because the people who did receive it have nothing to report and the people who did not never knew it was sent.</p>
<p>If the mail is a contact form or an enquiry, that silence is costing you work. Send a test to an address at each of the big providers, including one Gmail address, and look in the junk folder rather than trusting an empty inbox.</p>

<h2>What to check before you buy a sending service</h2>
<p>The usual advice is to move to a dedicated sending service, and that is often right. It was not what my case needed. Before paying for one, check that the From address is a real mailbox you could reply to, that it is on the domain you actually control, and that SPF and DKIM exist for that domain.</p>
<p>Then plan for the wait. Every change I made took about 4 hours to become testable, which turns a morning's job into a day's. That slowness is the same reason I check a thing by hand before trusting the system that reports on it, which is how I ended up <a href="/articles/when-a-spreadsheet-becomes-a-database">checking totals in a spreadsheet that had been quietly rewriting them</a>.</p>
`,
  sources: [
    {
      title: "Email sender guidelines",
      publisher: "Google",
      url: "https://support.google.com/a/answer/81126",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I was sending through Google Workspace SMTP and the server's own PHP mail, and the messages reached some recipients while Gmail put them in spam. The From address was a no-reply address that did not exist as a mailbox. Changing it to a real address on the domain is what fixed the delivery. Every test cost me about 4 hours, because that is how long the DNS changes took to take effect before I could send again and see what happened.",
  },
};
