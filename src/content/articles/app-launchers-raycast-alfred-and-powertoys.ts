import type { Article } from "@/content/types";

export const appLaunchersRaycastAlfredAndPowertoys: Article = {
  slug: "app-launchers-raycast-alfred-and-powertoys",
  title: "App Launchers: Raycast, Alfred and PowerToys Command Palette",
  excerpt:
    "A launcher is the keystroke between thinking of something and doing it. We compared Raycast, Alfred and Microsoft's PowerToys Command Palette on what the free versions do, what the paid tiers actually add, and whether the built-in Spotlight and Start menu have caught up enough to skip the category.",
  category: "productivity",
  author: "toolnest-editorial",
  tags: ["Productivity", "Launchers", "macOS", "Windows", "Comparisons"],
  publishedAt: "2026-09-14",
  image: "/images/articles/app-launchers-raycast-alfred-and-powertoys.webp",
  imageAlt: "Overhead view of a laptop, phone, headphones and magazines on a yellow desk",
  seoTitle: "Raycast vs Alfred vs PowerToys Command Palette",
  seoDescription:
    "Raycast, Alfred and PowerToys Command Palette compared: what the free tiers do, what Raycast Pro and the Powerpack add, and when the built-ins are enough.",
  quickAnswer:
    "On a Mac, install Raycast and stay on the free tier. Clipboard history, snippets, window management, a calculator and thousands of extensions cost nothing; the $10 a month Pro tier is mostly AI credits and cloud sync, which you can decide about later. Alfred's £34 Powerpack is the better buy if you would rather pay once and build your own workflows than rent features. On Windows, PowerToys Command Palette is free, open source, and now does most of what the paid Mac launchers do — app launch, file search, calculator, clipboard history, WinGet installs and a growing extension gallery — so there is no reason to pay for a launcher on Windows at all.",
  pros: [
    "All three are free for the core job of launching apps and finding files from the keyboard",
    "Raycast's extension store is the largest and the easiest to write for",
    "Command Palette is bundled with PowerToys, which most Windows power users already have",
  ],
  cons: [
    "Raycast's paid tiers are priced around AI credits, which is not why most people install a launcher",
    "Alfred's free version is thin; the features people actually want are all in the Powerpack",
    "Command Palette needs PowerToys running in the background and is still visibly younger than the Mac tools",
  ],
  alternatives: [
    {
      name: "Raycast",
      url: "https://www.raycast.com/pricing",
      note: "Free: clipboard history (three months), quicklinks, calculator, snippets, window management, extensions, up to five Raycast Notes. Pro is $10 a month or $96 a year and adds Raycast AI with 500 monthly credits, unlimited clipboard history, cloud sync, custom themes and unlimited Notes; Plus ($20) and Max ($50) add AI credits and the top-tier models.",
    },
    {
      name: "Alfred",
      url: "https://www.alfredapp.com/powerpack/buy/",
      note: "Free launcher; the Powerpack is a one-off £34 for a single licence or £59 for the Mega Supporter licence with lifetime upgrades. Workflows, clipboard history and snippets sit behind the Powerpack. Alfred 5 is current, with a free upgrade to Alfred 6 included at purchase.",
    },
    {
      name: "PowerToys Command Palette",
      url: "https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview",
      note: "Free and open source, part of Microsoft PowerToys. Win+Alt+Space by default. Launches apps, runs commands, searches files and the web, calculates, opens Settings pages, installs apps via WinGet, switches windows, browses clipboard history, and installs community extensions from a built-in gallery.",
    },
  ],
  faqs: [
    {
      question: "Is Spotlight good enough now?",
      answer:
        "Closer than it was. Recent macOS releases added actions and a clipboard history to Spotlight, which were the two features that used to justify a third-party launcher on their own. If you launch apps, open files and do sums, Spotlight is fine. The moment you want a snippet expander, a window-tiling shortcut or an extension that talks to a specific service, you are back to Raycast or Alfred.",
    },
    {
      question: "Raycast Pro or the Alfred Powerpack?",
      answer:
        "Different questions. Raycast Pro is $96 a year and most of what it adds is AI usage and cloud sync; the launcher itself is free. The Alfred Powerpack is £34 once and unlocks the launcher's real features, workflows above all. If you want the largest extension library and do not mind a subscription for the extras, Raycast free plus Pro if the AI earns it. If you want to pay once and build your own automations, Alfred.",
    },
    {
      question: "Does Raycast work on Windows?",
      answer:
        "Raycast lists a Windows product alongside the Mac app, and it has been rolling out through 2025 and 2026. It is newer and thinner than the Mac version. On Windows we would start with Command Palette, which is free and already installed if you use PowerToys, and try Raycast if you are switching from a Mac and miss a specific extension.",
    },
    {
      question: "What replaced PowerToys Run?",
      answer:
        "Command Palette. It is the successor to PowerToys Run, with the same calculator behaviour and plugin ideas, rebuilt with a home page of pinned commands, a dock, bookmarks with placeholders, and an extension gallery inside its settings. Run still exists for now, but new development is going into Command Palette.",
    },
  ],
  sources: [
    {
      title: "Raycast pricing",
      publisher: "Raycast",
      url: "https://www.raycast.com/pricing",
      checkedAt: "2026-09-14",
    },
    {
      title: "Buy the Powerpack",
      publisher: "Alfred (Running with Crayons)",
      url: "https://www.alfredapp.com/powerpack/buy/",
      checkedAt: "2026-09-14",
    },
    {
      title: "PowerToys Command Palette utility for Windows",
      publisher: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview",
      checkedAt: "2026-09-14",
    },
  ],
  content: `<p>A launcher is a small thing that changes how a computer feels. You press a key, type three letters, and the app opens, the file appears, the sum is done, the window snaps to the left half — without touching the mouse or looking at a dock. Once you have one, the built-in way of doing things starts to feel like walking to the shop for something you could have shouted for.</p>

<p>We have run all three of the current serious options for months each. The question is no longer whether they are good, because they are. It is what the free versions leave out, whether the paid tiers are worth it, and whether you need any of them now that the operating systems have copied the idea.</p>

<h2>What a launcher does, and what it is not</h2>

<p>The core job — open an app, find a file, do a calculation — is table stakes and all three do it well. What separates them is the second layer: clipboard history, text snippets, window management, and extensions that reach into other services so you can search your calendar or post to a channel without opening a browser. That second layer is where the money is, and where the built-ins still fall short.</p>

<p>It is not an automation tool. If you want to move data between services on a schedule, that is a different category; <a href="/articles/automate-repetitive-work-without-code">we compared those separately</a>. A launcher is for the thing you are doing right now, by hand, faster.</p>

<h2>Raycast: the biggest ecosystem, priced around AI</h2>

<p>Raycast is what most Mac users install first now, and the free tier is the reason. Clipboard history, quicklinks, a calculator, snippets, window management and the whole extension store are free, along with the ability to write your own extensions. The limits on the free plan are three months of clipboard history and five Raycast Notes, neither of which most people hit.</p>

<p>The paid tiers are where it gets interesting, because they are not really launcher tiers. Pro is $10 a month, or $96 a year, and the headline is Raycast AI: quick AI, chat, agents and 500 monthly AI credits, plus unlimited clipboard history, cloud sync of your settings, custom themes and unlimited Notes. Plus at $20 and Max at $50 buy more credits and the top-tier models. If you want an AI assistant a keystroke away and you are already paying for one elsewhere, that overlaps with <a href="/articles/which-ai-assistant-is-worth-paying-for">the subscription you may already have</a>; if you do not, the launcher is still free.</p>

<blockquote>
<p>The free tier of Raycast is the product. Pro is an AI subscription with a launcher attached, and it is fair to judge it as one.</p>
</blockquote>

<p>Where Raycast wins outright is extensions. The store is large, the ones for common services are maintained, and building your own is a React project with good documentation. If there is a tool you use daily, there is probably an extension, and it probably works.</p>

<h2>Alfred: pay once, build your own</h2>

<p>Alfred is older, and its model is the old one: a free launcher with the good parts behind a one-off purchase. The Powerpack is £34 for a single licence or £59 for the Mega Supporter version with free lifetime upgrades. Alfred 5 is current, and a purchase now includes the upgrade to 6.</p>

<p>The free version is, honestly, thin — app launching, file search, web search and a calculator. Clipboard history, snippets and workflows all need the Powerpack. But once you have it, workflows are the feature Raycast's extensions are a friendlier version of: a visual editor where you chain triggers, scripts and actions, with no app store between you and the thing you want to build. People who have used Alfred for a decade have workflows they wrote in 2015 that still run.</p>

<p>Alfred's case is stability and ownership. It does not have an AI tier, it does not need a login, and your workflows are files on your disk. If that sounds better to you than a subscription and a store, it is the one.</p>

<h2>Command Palette: Windows finally has one</h2>

<p>Windows spent years without a proper answer. PowerToys Run was a decent one, and Command Palette is its replacement: open it with Win+Alt+Space and start typing. Microsoft's own list of what it does covers most of the Mac launchers' free tiers — launch apps, run commands with a leading &gt;, search files, search the web with ??, calculate with the same functions Run had, jump to Settings pages with $, switch windows, browse clipboard history, install apps from WinGet, and manage services or Terminal profiles.</p>

<p>Two things in the new version matter more than the list. The first is the extension gallery, built into its settings, which gives it the community extensibility that made Raycast worth installing. The second is a dock — a persistent strip of pinned commands and system metrics on a screen edge — which is not something the Mac tools do. It is free, open source, and if you use PowerToys for anything else it is already on your machine, waiting to be enabled.</p>

<p>It is also younger, and that shows: it must be running in the background, the extension library is smaller, and the polish is a version or two behind. But on Windows the comparison is not with Raycast; it is with the Start menu, and against that it is not close.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th></th><th>Raycast</th><th>Alfred</th><th>Command Palette</th></tr>
</thead>
<tbody>
<tr><td>Platform</td><td>macOS (Windows newer)</td><td>macOS</td><td>Windows</td></tr>
<tr><td>Free tier</td><td>Launcher, clipboard (3 months), snippets, windows, extensions</td><td>Launcher, file and web search, calculator</td><td>Everything</td></tr>
<tr><td>Paid</td><td>Pro $10/month or $96/year; Plus $20; Max $50</td><td>Powerpack £34 once, £59 lifetime upgrades</td><td>None</td></tr>
<tr><td>What paid adds</td><td>AI, sync, themes, unlimited history</td><td>Workflows, clipboard, snippets</td><td>—</td></tr>
<tr><td>Extensions</td><td>Store, largest</td><td>Workflows, community</td><td>Gallery, growing</td></tr>
</tbody>
</table>

<h2>Do you need one at all?</h2>

<p>Less than you used to. Spotlight has picked up actions and a clipboard history in recent macOS releases, and Windows Search has improved. If your use is launching apps and finding files, the built-ins are fine now and there is nothing to install.</p>

<p>The launcher earns its place at the second layer. A clipboard history you can search back through, snippets that expand on a trigger, a window that goes to the left half on one shortcut, and an extension for the service you open forty times a day. If two of those four sound useful, install Raycast or enable Command Palette this afternoon. The snippet part in particular has a whole category of dedicated tools behind it — <a href="/articles/text-expanders-and-clipboard-managers">text expanders and clipboard managers</a> — and a launcher does enough of that job that many people stop there.</p>

<p>Our setup, for what it is worth: Raycast free on the Macs, Command Palette on the Windows machine, and no AI tier on either. The keystroke is the feature. The rest we can decide about later.</p>`,
};
