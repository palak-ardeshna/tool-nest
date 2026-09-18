import type { Article } from "@/content/types";

export const officeSuitesAfterThe2026PriceRises: Article = {
  slug: "office-suites-after-the-2026-price-rises",
  title: "Office Suites After the 2026 Price Rises: Stay, Downgrade or Leave",
  excerpt:
    "Microsoft 365 Business plans went up in July, Google Workspace went up the year before, and Office 2021 leaves support in October. For a small team that is three bills arriving at once. Here is what actually changed, what the alternatives cost, and the one exercise that settles the decision.",
  category: "software",
  author: "parth-patel",
  tags: ["Software", "Microsoft 365", "Google Workspace", "Pricing", "Small Teams"],
  publishedAt: "2026-09-12",
  image: "/images/articles/office-suites-after-the-2026-price-rises.webp",
  imageAlt: "A man working at a laptop on a wooden desk beside a bright window, a small potted plant to one side",
  seoTitle: "Office Suites After the 2026 Price Rises",
  seoDescription:
    "Microsoft 365 Basic and Standard rose in July 2026 and Office 2021 loses support in October. What changed, what the alternatives cost, and how to decide.",
  quickAnswer:
    "For most small teams the answer is 'stay, but on the right tier'. Microsoft raised Business Basic to $7 and Business Standard to $14 per user per month from 1 July 2026, with Business Premium unchanged at $22; existing subscriptions keep the old price until renewal. Google Workspace rose in 2025 and now bundles Gemini into every plan. The rises are real but small in absolute terms — about a pound a seat a month — and the cost of migrating email, files and habits for a ten-person team dwarfs them. Where the sums change is a team paying for Standard seats that only ever open a browser, or one still on Office 2021, which leaves support on 14 October 2026 and has to move somewhere anyway.",
  pros: [
    "Existing Microsoft subscriptions keep the old price until their next renewal, so nobody is surprised mid-term",
    "Both Microsoft and Google added storage and AI features alongside the rises, whether or not you wanted them",
    "Zoho Workplace and LibreOffice are credible for teams whose needs are documents, mail and a shared drive",
    "Auditing who actually uses a desktop app usually saves more than any switch would",
  ],
  cons: [
    "Every 'alternative' costs migration time, and a ten-person mailbox move is a week nobody has",
    "Perpetual-licence Office is a shrinking option: 2021 support ends in October 2026",
    "Google's rises came with AI bundled in, so you cannot opt out of paying for Gemini",
    "Mixed-suite teams end up with two sets of file formats and two admin consoles",
  ],
  alternatives: [
    { name: "Microsoft 365 Business", url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing", note: "Basic $7, Standard $14, Premium $22 per user per month on annual terms after July 2026." },
    { name: "Google Workspace", url: "https://workspace.google.com/pricing", note: "Starter, Standard and Plus tiers; prices vary by region and now include Gemini." },
    { name: "Zoho Workplace", url: "https://www.zoho.com/workplace/pricing.html", note: "Mail, docs and drive at a lower per-seat price; strongest if you already use other Zoho products." },
    { name: "LibreOffice", url: "https://www.libreoffice.org/download/", note: "Free desktop suite; no mail or shared drive, so it replaces the apps rather than the subscription." },
  ],
  faqs: [
    {
      question: "Did my Microsoft 365 bill go up on 1 July?",
      answer:
        "Only if you renewed on or after that date. Microsoft's licensing FAQ says customers on existing agreements continue at their current price until renewal, and the new pricing applies at the first renewal after 1 July 2026. Check your renewal date in the admin centre; that is the day the change lands, and it is also the day you have the most leverage to change tier.",
    },
    {
      question: "Can I keep using Office 2021 after October?",
      answer:
        "It will keep opening. It will stop receiving security updates on 14 October 2026, which for a business machine that handles email attachments is not a risk we would carry. The realistic options are a Microsoft 365 subscription, a newer perpetual licence if Microsoft still sells one in your region when you check, or LibreOffice on the machines that only need to open and edit documents.",
    },
    {
      question: "Is it worth mixing suites — Google for mail, Microsoft for Excel?",
      answer:
        "It works, and plenty of teams do it, but you pay twice for overlapping storage and you run two admin consoles and two sets of sharing permissions. It makes sense when one specific app — usually Excel or Outlook — is genuinely irreplaceable for a few people. It makes less sense as a way to save a pound a seat, because the second console costs more than that in someone's time.",
    },
  ],
  sources: [
    {
      title: "Microsoft 365 Packaging and Pricing Updates Public FAQ",
      publisher: "Microsoft Licensing Resources",
      url: "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates-faq",
      checkedAt: "2026-09-12",
    },
    {
      title: "Microsoft 365 Pricing for Business: Plans & Features",
      publisher: "Microsoft",
      url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing",
      checkedAt: "2026-09-12",
    },
    {
      title: "Office 2021 – Microsoft Lifecycle",
      publisher: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/office-2021",
      checkedAt: "2026-09-12",
    },
    {
      title: "Google Workspace pricing",
      publisher: "Google",
      url: "https://workspace.google.com/pricing",
      checkedAt: "2026-09-12",
    },
    {
      title: "Zoho Workplace pricing",
      publisher: "Zoho",
      url: "https://www.zoho.com/workplace/pricing.html",
      checkedAt: "2026-09-12",
    },
  ],
  content: `<p>Office software is the bill nobody reviews. It was set up when the company was three people, it renews automatically, and it has just gone up for the second time in eighteen months. Microsoft's commercial price changes took effect on 1 July 2026. Google's came in 2025 and brought Gemini with them whether you asked or not. And Office 2021, the last "just buy it once" option a lot of small firms were quietly relying on, leaves support on 14 October.</p>

<p>That is three reasons to look at the bill in one year, so we did, for our own small team and for the plans a reader is likely to be on. The conclusion is duller than the headlines: the rises are small, the migrations are not, and the money is almost always in the tier rather than the vendor.</p>

<h2>What actually changed</h2>

<table>
<thead>
<tr><th>Plan</th><th>Before</th><th>From 1 July 2026</th><th>Change</th></tr>
</thead>
<tbody>
<tr><td>Microsoft 365 Business Basic</td><td>$6.00</td><td>$7.00</td><td>+17%</td></tr>
<tr><td>Microsoft 365 Business Standard</td><td>$12.50</td><td>$14.00</td><td>+12%</td></tr>
<tr><td>Microsoft 365 Business Premium</td><td>$22.00</td><td>$22.00</td><td>none</td></tr>
</tbody>
</table>

<p>Prices are per user per month on an annual commitment, in US dollars because that is how Microsoft publishes them; your local price will differ and your reseller may add a margin. The licensing FAQ is clear on timing: the new price applies at your next renewal after 1 July, not on the day itself. Microsoft also added storage and some security features to Basic and Standard alongside the rise, which is the standard way to make an increase sound like an upgrade.</p>

<p>Google's pricing page is now regional, which makes a single figure impossible to quote honestly — the page we checked showed rupees, and your page will show whatever your billing country uses. What is consistent is that Gemini is included in every Business tier and priced into it. You cannot buy Workspace without paying for the AI.</p>

<p>And Office 2021 retires on 14 October 2026. Machines running it will keep working and stop receiving security patches. For a laptop that opens attachments from strangers, that is the end of its usable life as a business tool.</p>

<h2>The exercise that settles it</h2>

<p>Before comparing vendors, list every seat you pay for and answer one question about each: <strong>does this person open a desktop app?</strong> Not "might", not "used to". Did they, this month.</p>

<p>When we did this, the answer surprised us. Business Standard exists to give people installed Word, Excel and Outlook. Most of our seats never launched any of them; they worked in the browser and in the mobile apps, which Basic includes. The difference between Basic and Standard is now $7 a seat a month — $84 a year, per person, for desktop apps nobody opened. On a ten-person team that is more than the entire price rise several times over.</p>

<p>Three tiers, three kinds of person:</p>

<ul>
<li><strong>Basic</strong> for anyone who lives in a browser. Mail, Teams, web and mobile Office, a terabyte of storage.</li>
<li><strong>Standard</strong> for the two or three people who genuinely need installed Excel or Outlook — usually finance, and anyone who works offline on a train.</li>
<li><strong>Premium</strong> only if you need the device management and security tooling, which is a decision about compliance, not about Word.</li>
</ul>

<p>You can mix tiers in one tenant. Almost nobody does, because the default when adding a user is whatever the last one had. We covered the same audit for the rest of the stack in <a href="/articles/auditing-small-team-software-spend">what we pay for and what we cancelled</a>; the office suite is where it pays off fastest.</p>

<h2>If you are still going to leave</h2>

<p>Sometimes the audit is not the answer. A team that has just been priced out of a tier it needs, or that is on Office 2021 and has to move regardless, has a real choice to make. The honest comparison is on what the suite does beyond the documents, because documents are a solved problem everywhere.</p>

<table>
<thead>
<tr><th>Suite</th><th>Mail and calendar</th><th>Shared drive</th><th>Desktop apps</th><th>Where it is strongest</th></tr>
</thead>
<tbody>
<tr><td>Microsoft 365</td><td>Exchange, Outlook</td><td>OneDrive, SharePoint</td><td>Standard and above</td><td>Excel, and anyone who has to exchange files with other businesses</td></tr>
<tr><td>Google Workspace</td><td>Gmail, Calendar</td><td>Drive</td><td>None (browser and mobile)</td><td>Real-time collaboration and a team that has never used a desktop app</td></tr>
<tr><td>Zoho Workplace</td><td>Zoho Mail</td><td>WorkDrive</td><td>None</td><td>Price, and teams already on Zoho CRM or Books</td></tr>
<tr><td>LibreOffice</td><td>None</td><td>None</td><td>Free, all platforms</td><td>Replacing the apps on machines that only edit documents</td></tr>
</tbody>
</table>

<p><strong>Zoho Workplace</strong> is the credible cheap option. The pricing page is regional too, so we will not quote a number, but it has consistently sat well under both Microsoft and Google per seat. The compromise is ecosystem: fewer third-party integrations, and formatting that is fine for internal documents and occasionally not fine for a contract someone else drafted in Word. If your business already runs on Zoho for CRM or invoicing — we looked at that side in <a href="/articles/invoicing-and-bookkeeping-for-small-teams">invoicing and bookkeeping for small teams</a> — the case gets much stronger.</p>

<p><strong>LibreOffice</strong> is not a suite in the subscription sense. It is the applications, free, with no mail, no shared drive and no admin console. That makes it the wrong answer to "what replaces Microsoft 365" and the right answer to "what goes on the three laptops that only open spreadsheets". Pair it with whatever mail you already have. Compatibility with modern Word files is good for prose and adequate for anything with heavy layout; test the documents you actually exchange before committing.</p>

<h2>What migration really costs</h2>

<p>The number that never appears on a pricing page is the week. Moving mail between providers means exporting every mailbox, re-pointing DNS, re-creating shared calendars and distribution groups, telling every client the addresses have not changed even though something obviously has, and then a fortnight of "where did that file go". For a ten-person team this is one person's full week plus everyone else's half-day, and it goes wrong at least once.</p>

<p>Put that against the saving. Basic to a cheaper competitor might save $2 or $3 a seat a month — a few hundred dollars a year for ten people. The migration week costs more than that in salary before you count the risk. This is why the tier audit almost always wins: it saves more, it costs an afternoon, and nothing breaks.</p>

<p>Leave when the reason is not the price rise. Leave because you need collaboration that Microsoft does badly, or because your CRM lives in Zoho, or because you are on Office 2021 and have to go somewhere anyway. Those are good reasons. "It went up by a dollar" is not, and we say that as people who were annoyed when it did.</p>

<h2>What we would do</h2>

<ul>
<li><strong>On Microsoft 365, renewing soon:</strong> run the desktop-app audit, move browser-only seats to Basic at the renewal, and pocket the difference. This offsets the rise for almost every team.</li>
<li><strong>On Google Workspace:</strong> same audit on Starter versus Standard; the storage difference is what most teams are actually paying for.</li>
<li><strong>On Office 2021:</strong> you are moving by October. Basic plus LibreOffice on the machines that need offline editing is the cheapest route; Standard is the least disruptive.</li>
<li><strong>Already on Zoho for anything else:</strong> price Workplace properly. It is the one switch where the migration cost has a real chance of paying back.</li>
</ul>

<p>Whatever you choose, put the renewal date in the calendar with a month's notice. The price rise was announced seven months before it landed. Most of the teams paying it found out from the invoice.</p>`,
};
