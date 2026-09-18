import type { Article } from "@/content/types";

export const windows10SupportHasEndedWhatEachOptionCosts: Article = {
  slug: "windows-10-support-has-ended-what-each-option-costs",
  title: "Windows 10 Support Has Ended: What Each Option Actually Costs in the UK",
  excerpt:
    "Your Windows 10 PC still works, but it stopped getting free security fixes in October 2025. Here is what Microsoft's extended updates cost for households and businesses, what Windows 11 requires, and what it takes to put ChromeOS Flex or Linux Mint on the machine you already own.",
  category: "software",
  author: "parth-patel",
  tags: ["Windows", "Security", "Buying Advice", "Linux"],
  publishedAt: "2026-09-17",
  image: "/images/articles/windows-10-support-has-ended-what-each-option-costs.webp",
  imageAlt: "A busy wooden desk with an older laptop, a tablet, two phones, speakers and a coffee cup",
  seoTitle: "Windows 10 Support Ended: Your Options Costed",
  seoDescription:
    "Windows 10 lost free fixes in Oct 2025. What extended updates cost in the UK, what Windows 11 needs, and what ChromeOS Flex or Linux Mint require.",
  quickAnswer:
    "If your PC passes the Windows 11 check, upgrade; it is free and the decision is over. If it does not, enrol in Microsoft's consumer Extended Security Updates first — it is free if you sign in with a Microsoft account and let Windows Backup sync your settings, or a one-off $30 (about £25 plus VAT) if you would rather not, and it now runs to 12 October 2027. That buys a year to decide properly. Businesses pay $61 per device for the first year and the price doubles each year for up to three. Use the breathing room to try ChromeOS Flex or Linux Mint from a USB stick on the actual machine, because whether either works for you depends entirely on which programs you cannot live without.",
  pros: [
    "Consumer extended updates can be had at no cost, and one enrolment covers up to ten PCs on the same Microsoft account",
    "The Windows 11 upgrade is free on any PC that meets the hardware bar",
    "ChromeOS Flex and Linux Mint are free and both run from a USB stick before you commit to anything",
    "Business ESU is available for a single device — there is no minimum order",
  ],
  cons: [
    "The free consumer route requires a Microsoft account signed in as administrator and settings sync turned on",
    "Extended updates are security fixes only — no new features, no general support",
    "Business ESU prices double every year, and skipping year one is not allowed if you join later",
    "Linux and ChromeOS Flex will not run every Windows program, and you only find out which by trying",
  ],
  alternatives: [
    { name: "Windows 11", url: "https://www.microsoft.com/en-gb/windows/windows-11-specifications", note: "Free upgrade if the PC has TPM 2.0, a supported CPU, 4 GB of RAM and 64 GB of storage." },
    { name: "Consumer ESU", url: "https://www.microsoft.com/en-gb/windows/extended-security-updates", note: "Free with settings sync, 1,000 Rewards points, or a one-off $30. Runs to 12 October 2027." },
    { name: "ChromeOS Flex", url: "https://support.google.com/chromeosflex/answer/11552529", note: "Free. Turns an old PC into a Chromebook. Needs a 64-bit Intel or AMD chip from 2013 or later and 4 GB of RAM." },
    { name: "Linux Mint", url: "https://www.linuxmint.com/download.php", note: "Free. The most Windows-like of the mainstream Linux desktops. Version 22.3 at the time of writing." },
  ],
  faqs: [
    {
      question: "Will my Windows 10 PC stop working?",
      answer:
        "No. It boots, runs your programs and connects to the internet exactly as before. What stops is the monthly stream of security fixes. Every vulnerability found from now on stays open on an unenrolled machine, and because the fixes for Windows 11 are public, attackers can read them to work out what is broken in Windows 10. The risk is gradual rather than sudden, which is why people ignore it and why I would not.",
    },
    {
      question: "Is the consumer ESU really free?",
      answer:
        "One of the three routes is. Sign in to the PC with a Microsoft account that is an administrator, turn on Windows Backup so your settings sync, and enrolment costs nothing. If you use a local account and want to keep it that way, the alternatives are 1,000 Microsoft Rewards points or a one-time purchase of $30 or the local equivalent plus tax. Microsoft's UK page lists the price as a one-off and the end date as 12 October 2027; reporting on the extension says home users pay per year, so read the enrolment screen on your own device before assuming.",
    },
    {
      question: "I run a small business with a few Windows 10 machines. What is the cheapest legal option?",
      answer:
        "For a handful of PCs that cannot take Windows 11, business ESU at $61 per device for year one is the cheapest way to stay patched while you replace them. Do not plan on three years: year two is $122 and year three $244, so by year two a refurbished Windows 11 laptop is usually the cheaper purchase. If the machines only exist to reach a Windows 365 Cloud PC or an Azure virtual desktop, the ESU is included at no extra charge.",
    },
    {
      question: "Can I just install Linux and carry on?",
      answer:
        "Often, and it is the choice I would make for a machine used for browsing, email, documents and video calls. The honest answer depends on the programs you rely on. Microsoft 365 and Adobe applications do not run natively; the web versions do. Most printers work; some do not. Games with anti-cheat frequently refuse. Write the list of programs you cannot lose, boot Mint from a USB stick, and check each one before you wipe anything.",
    },
  ],
  sources: [
    {
      title: "Windows 10 support has ended on October 14, 2025",
      publisher: "Microsoft",
      url: "https://support.microsoft.com/en-us/windows/windows-10-support-has-ended-on-october-14-2025-2ca8b313-1946-43d3-b55c-2b95b107f281",
      checkedAt: "2026-09-16",
    },
    {
      title: "Windows 10 Consumer Extended Security Updates (ESU)",
      publisher: "Microsoft",
      url: "https://www.microsoft.com/en-gb/windows/extended-security-updates",
      checkedAt: "2026-09-16",
    },
    {
      title: "Extended Security Updates (ESU) program for Windows 10",
      publisher: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates",
      checkedAt: "2026-09-16",
    },
    {
      title: "Microsoft quietly extends free Windows 10 ESU support to October 2027",
      publisher: "BleepingComputer",
      url: "https://www.bleepingcomputer.com/news/microsoft/microsoft-quietly-extends-free-windows-10-esu-support-to-october-2027/",
      checkedAt: "2026-09-16",
    },
    {
      title: "Windows 11 specifications and system requirements",
      publisher: "Microsoft",
      url: "https://www.microsoft.com/en-gb/windows/windows-11-specifications",
      checkedAt: "2026-09-16",
    },
    {
      title: "ChromeOS Flex minimum device requirements",
      publisher: "Google",
      url: "https://support.google.com/chromeosflex/answer/11552529",
      checkedAt: "2026-09-16",
    },
    {
      title: "Download Linux Mint 22.3",
      publisher: "Linux Mint",
      url: "https://www.linuxmint.com/download.php",
      checkedAt: "2026-09-16",
    },
  ],
  content: `<p>Windows 10 reached the end of its support life on 14 October 2025. Nearly a year on, a great many PCs are still running it, most of them because they failed the Windows 11 hardware check and their owners quite reasonably did not want to buy a new computer to replace one that works. If that is you, the good news is that the deadline everyone worried about has moved: Microsoft has quietly extended its consumer security-update programme to October 2027. The less good news is that "extended" does not mean "free forever", and the options have enough small print that people are paying for things they could have had at no cost.</p>

<p>I have put the numbers in one place. Every price below comes from a Microsoft, Google or Linux Mint page I read on the date shown in the sources list, because these figures have already changed once this year and may change again.</p>

<h2>First, the check that settles most cases</h2>

<p>Before pricing anything, find out whether the PC can run Windows 11 at all. Microsoft's minimum bar is a 1 GHz processor with two or more cores from its supported list, 4 GB of RAM, 64 GB of storage, UEFI firmware with Secure Boot, and a TPM 2.0 chip. The PC Health Check app, free from Microsoft, tells you in a minute which of those your machine fails.</p>

<p>In practice the two things that fail are the processor and the TPM. Intel's supported list begins around the 8th-generation Core chips from late 2017; AMD's around the Ryzen 2000 series from 2018. A machine older than that is usually out regardless of how well it runs. A machine newer than that with a "no TPM" result often just has the TPM switched off in the firmware settings, which is worth a look before you spend anything.</p>

<p>If the PC passes, upgrade. It costs nothing, your files stay where they are, and the rest of this article does not apply to you.</p>

<h2>What each option costs</h2>

<table>
<thead>
<tr><th>Option</th><th>Cost</th><th>Security fixes until</th><th>What you give up</th></tr>
</thead>
<tbody>
<tr><td>Upgrade to Windows 11</td><td>Free</td><td>Ongoing</td><td>Nothing, if the hardware passes</td></tr>
<tr><td>Consumer ESU — settings sync</td><td>Free</td><td>12 October 2027</td><td>Requires a Microsoft account as administrator and Windows Backup on</td></tr>
<tr><td>Consumer ESU — Rewards</td><td>1,000 Microsoft Rewards points</td><td>12 October 2027</td><td>Need an existing Rewards balance</td></tr>
<tr><td>Consumer ESU — purchase</td><td>$30 one-off, or local equivalent plus VAT</td><td>12 October 2027</td><td>See note on the second year below</td></tr>
<tr><td>Business ESU, year one</td><td>$61 per device</td><td>October 2026</td><td>Volume licensing purchase; no technical support included</td></tr>
<tr><td>Business ESU, year two</td><td>$122 per device (plus year one if you skipped it)</td><td>October 2027</td><td>Cumulative — you cannot start at year two</td></tr>
<tr><td>Business ESU, year three</td><td>$244 per device</td><td>October 2028</td><td>Final year; nothing after</td></tr>
<tr><td>ChromeOS Flex</td><td>Free</td><td>Ongoing, on supported hardware</td><td>Windows programs; needs a 2013-or-later 64-bit CPU</td></tr>
<tr><td>Linux Mint</td><td>Free</td><td>Ongoing</td><td>Windows programs; some printers and games</td></tr>
<tr><td>Windows 365 Cloud PC</td><td>Monthly subscription</td><td>ESU for the local PC included</td><td>Needs a good connection; you are renting a computer</td></tr>
</tbody>
</table>

<p>UK resellers quote the business licence in sterling — I have seen year one listed at just under £50 excluding VAT — but Microsoft's own documentation prices it in dollars, so treat any pound figure as a snapshot of that reseller on that day.</p>

<h2>Consumer ESU: the free route and its condition</h2>

<p>Microsoft's page for households lists three ways to enrol, and the order matters. The first is at no additional cost if you are syncing your PC settings, which in practice means signing in with a Microsoft account that is an administrator on the machine and turning on Windows Backup. The second is redeeming 1,000 Microsoft Rewards points. The third is a one-time purchase of $30 or the local equivalent plus tax. Whichever you pick, the licence covers up to ten devices signed in to the same account, and the device must be on Windows 10 version 22H2 with the latest update installed.</p>

<p>The condition on the free route is the part that upset consumer groups in Europe. Inside the European Economic Area Microsoft agreed to drop the sync requirement; the United Kingdom is outside the EEA, so the three routes above are what apply here. If you use a local account and have avoided Microsoft accounts on principle, that is a real cost, just not a monetary one. My view is that a Microsoft account you use for nothing else is a smaller concession than an unpatched machine, but it is a fair thing to object to.</p>

<p>On the end date: Microsoft's UK page now says enrolled devices receive updates through 12 October 2027, a year later than originally announced. The page still describes the paid route as a one-time purchase. Reporting on the extension says home users who paid will be charged again for the second year. I could not reconcile the two from Microsoft's published text, so if you paid rather than synced, expect the possibility of a second $30 and check what Settings shows on your own PC in October.</p>

<h2>Business ESU: cheap for one year, expensive for three</h2>

<p>Organisations buy through volume licensing at $61 per device for year one. The price doubles every consecutive year to a maximum of three years, which puts year two at $122 and year three at $244. The minimum purchase is one licence, so a sole trader with a single stubborn machine can buy in. Licences are cumulative: if you decide in year two that you need it, you pay for year one as well.</p>

<p>Two exceptions are worth knowing. Windows 10 running as a virtual machine in Windows 365, Azure Virtual Desktop or a range of other Azure services gets ESU at no additional cost. And a physical Windows 10 PC used to connect to a Windows 365 Cloud PC is entitled to ESU for up to three years while the subscription is active. If the old machines in your office are really just thin clients for a cloud desktop, that changes the sum.</p>

<p>Note what ESU does not include: new features, non-security fixes you request, or general support. Microsoft will help with activating and installing the ESU itself, and nothing else. Add that to the doubling price and the business case is clear: year one is a sensible bridge while you replace hardware; year three is a sign that the replacement never happened.</p>

<h2>ChromeOS Flex: the option for machines that mostly run a browser</h2>

<p>Google's ChromeOS Flex is a free operating system that turns an old PC or Mac into something very close to a Chromebook. The requirements are modest: a 64-bit Intel or AMD processor, 4 GB of RAM and 16 GB of storage. Google lists processors from 2012 and earlier as unsupported, along with Nvidia graphics from 2014 and earlier, so the target is roughly a 2013 to 2018 machine — which is exactly the range that fails the Windows 11 check.</p>

<p>What you get is a fast, low-maintenance machine that does everything a browser can do and nothing else. There is no Windows software, no Android app store, no Photoshop. For a PC that lives in a kitchen, a spare room, a school or a reception desk, that is frequently all that was ever needed. It installs from a USB stick and you can run it live from the stick before touching the hard drive, so the cost of finding out is an afternoon.</p>

<h2>Linux Mint: the option for people who still need a desktop</h2>

<p>Of the Linux desktops aimed at people leaving Windows, Mint is the one I would hand to a relative. Version 22.3, called Zena, is current at the time of writing and comes in three editions; the default Cinnamon edition has a taskbar, a start menu and a file manager where you expect them. Mint's installation guide asks for 2 GB of RAM and 20 GB of disk, and recommends 4 GB, which is less than Windows 10 itself needs.</p>

<p>The question is never whether Mint will run — it will — but which of your programs will not. Native Microsoft Office and Adobe applications do not; the web versions of both work in Firefox or Chrome. Most printers, cameras and USB devices work without a driver hunt, and some models do not. Games that use kernel-level anti-cheat frequently refuse to start. Accounting software written for Windows is the most common deal-breaker I hear about. Write down the six programs you would miss, boot from the USB stick, and test each one before you install anything. If you have been putting off moving from a desktop office suite to the browser versions, my piece on <a href="/articles/office-suites-after-the-2026-price-rises">office suites after this year's price rises</a> covers what the free options actually lack.</p>

<h2>What I would do</h2>

<ul>
<li><strong>The PC passes the Windows 11 check:</strong> upgrade this week. There is no version of the decision where waiting helps.</li>
<li><strong>It fails, and it is a household machine:</strong> enrol in consumer ESU by the free route today, then spend a weekend trying ChromeOS Flex or Mint from a USB stick. You have until October 2027 to decide, which is plenty.</li>
<li><strong>It fails, and it is a business machine:</strong> buy year one of ESU and put the replacement in next year's budget. Do not plan on year two; the doubling price is Microsoft telling you not to.</li>
<li><strong>It only ever runs a browser:</strong> ChromeOS Flex, and stop paying attention to Windows news.</li>
<li><strong>Whatever you pick:</strong> back up first. An operating system change is the moment a decade of photographs goes missing, and the <a href="/articles/backups-for-a-small-team">backup routine I recommend</a> works just as well for one machine as for ten.</li>
</ul>

<p>The one thing I would not do is nothing. A Windows 10 PC without ESU is not going to fail dramatically; it is going to accumulate known, published, unpatched holes one month at a time, while continuing to hold your email, your <a href="/articles/password-managers-after-the-price-rises">password manager</a> and your bank login. The free enrolment takes ten minutes. Start there.</p>`,
};
