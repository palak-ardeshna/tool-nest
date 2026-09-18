import type { Article } from "@/content/types";

export const whichBrowserAfterArc: Article = {
  slug: "which-browser-after-arc",
  title: "Which Browser After Arc? Zen, Vivaldi, Dia and the Boring Options Compared",
  excerpt:
    "Arc stopped getting new features in 2025 and its maker now belongs to Atlassian. If you built your working day around Spaces and a sidebar, here is what each replacement actually gives you, what it costs, and why the right answer for most people is duller than they hoped.",
  category: "software",
  author: "parth-patel",
  tags: ["Software", "Browsers", "Productivity", "Comparisons"],
  publishedAt: "2026-09-11",
  image: "/images/articles/which-browser-after-arc.webp",
  imageAlt:
    "A laptop on a stand on a wooden desk with a keyboard, mouse, glasses and a small potted plant arranged around it",
  seoTitle: "Best Browser After Arc: Zen, Vivaldi, Dia (2026)",
  seoDescription:
    "Arc is in maintenance mode. I compare Zen, Vivaldi, Dia, Edge and Chrome on vertical tabs, workspaces, extensions and price for anyone who has to move.",
  quickAnswer:
    "Arc still runs and still gets security updates through Chromium, so you do not have to move today — but its sync and its team are gone, so plan to. If Spaces and the sidebar were the point, Zen is the closest free replacement: Firefox-based, open source, workspaces and split view built in, on Windows, macOS and Linux, with the trade-off that Chrome extensions do not work. If you need Chrome extensions, Vivaldi is free, has workspaces, tab stacks and a vertical tab bar, and has been shipping for a decade. Dia is the official successor and is a different product: an AI assistant with a browser attached, macOS on Apple Silicon only, free for the browser and $20 a month for the AI. For most people, Chrome or Edge with vertical tabs switched on — both have it natively now — is the answer they will still be using in five years.",
  pros: [
    "Every serious replacement is free; the only thing that costs money is Dia's AI tier",
    "Vertical tabs are now native in Chrome and Edge, so the biggest reason to leave them has gone",
    "Zen and Vivaldi are actively developed by teams that are not for sale",
  ],
  cons: [
    "Nothing reproduces Arc's Command Bar, Little Arc and Spaces all at once; you pick two",
    "Zen means Firefox extensions and the occasional DRM streaming problem",
    "Dia is Mac-only, Apple Silicon only, and its useful features sit behind a $20 a month plan",
  ],
  alternatives: [
    {
      name: "Zen",
      url: "https://zen-browser.app/",
      note: "Firefox-based, MPL-licensed, free. Vertical sidebar with compact mode, workspaces, split view, tab folders and Glance previews. Windows, macOS and Linux. Firefox extensions only.",
    },
    {
      name: "Vivaldi",
      url: "https://vivaldi.com/features/",
      note: "Chromium-based and free. Workspaces, two-level tab stacks, tab tiling, tab hibernation, a tab bar you can put on the left, and a built-in mail client and RSS reader if you want them. Chrome extensions work.",
    },
    {
      name: "Dia",
      url: "https://www.diabrowser.com/plans",
      note: "The Browser Company's successor to Arc, now owned by Atlassian. macOS 14+ on Apple Silicon only. Free plan covers profiles, tab groups, split view, ad blocking and sync; Better Answers is $20 a month and Better Days $100 a month for the AI features.",
    },
    {
      name: "Chrome or Edge with vertical tabs",
      note: "Right-click the tab strip in Chrome and choose Show Tabs Vertically. Edge has had vertical tabs, sleeping tabs and Workspaces for years. Free, boring, and everything works.",
    },
  ],
  faqs: [
    {
      question: "Do I have to leave Arc right now?",
      answer:
        "No. Arc still installs and runs on macOS and Windows, and it picks up Chromium security fixes. What it does not get is new features, bug fixes or a promise about how long the sync servers stay on. Treat it as a browser with an unknown end date: keep using it if you like, but export your Spaces and know where you would go.",
    },
    {
      question: "Is Dia just Arc with AI?",
      answer:
        "No, and the company has been open about that. Dia is an assistant that reads your tabs, drafts and summarises, wrapped in a plain browser; Arc's sidebar, Spaces and Command Bar are not the focus. It is also Mac-only on Apple Silicon and its main features are on the $20 a month plan. If you loved Arc for its layout, Dia is not the successor you want.",
    },
    {
      question: "What do I lose by moving to Zen?",
      answer:
        "Chrome extensions, first. Zen runs Firefox add-ons, which covers the popular ones but not everything, and any internal tool your company shipped as a Chrome extension will not load. Some DRM-protected streaming can also be awkward on a Firefox fork. In return you get an open-source browser with no Google code and an interface closer to Arc's than anything else.",
    },
    {
      question: "Is Vivaldi really free?",
      answer:
        "Yes, on desktop, Android and iOS, with no paid tier. It is funded through search and bookmark partnerships. The cost is a heavier, busier interface than Arc's, which you can trim back in settings but which does take an afternoon to make your own.",
    },
  ],
  sources: [
    {
      title: "Atlassian enters into definitive agreement to acquire The Browser Company of New York",
      publisher: "Business Wire",
      url: "https://www.businesswire.com/news/home/20250904645125/en/Atlassian-Enters-Into-Definitive-Agreement-to-Acquire-The-Browser-Company-of-New-York",
      checkedAt: "2026-09-11",
    },
    {
      title: "Dia plans",
      publisher: "The Browser Company",
      url: "https://www.diabrowser.com/plans",
      checkedAt: "2026-09-11",
    },
    {
      title: "Zen Browser",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Zen_Browser",
      checkedAt: "2026-09-11",
    },
    {
      title: "Vivaldi features",
      publisher: "Vivaldi Technologies",
      url: "https://vivaldi.com/features/",
      checkedAt: "2026-09-11",
    },
    {
      title: "Google Chrome vertical tabs finally available",
      publisher: "gHacks",
      url: "https://www.ghacks.net/2026/01/17/google-chrome-is-finally-embracing-vertical-tabs/",
      checkedAt: "2026-09-11",
    },
  ],
  content: `<p>Arc was the first browser in a long time that people were evangelical about. Spaces gave each project its own set of tabs, the sidebar made tabs readable, Little Arc kept links from other apps from cluttering the main window, and the Command Bar meant you rarely touched the mouse. It was also, it turned out, a product looking for a business model.</p>

<p>In May 2025 The Browser Company said it would stop building new features for Arc and put its effort into Dia, an AI-first browser. In September 2025 Atlassian agreed to buy the company for $610 million in cash. Arc still installs, still runs and still picks up Chromium security fixes, but its team has moved on and nobody has committed to keeping its sync servers alive. If it was your daily browser, the sensible thing is to decide where you are going before you are forced to.</p>

<p>I moved a mix of Mac, Windows and Linux machines off Arc over the past year. This is what each option is actually like to live in.</p>

<h2>First, what you actually used</h2>

<p>Arc had five things people miss, and no replacement has all five. Before you pick, be honest about which ones you leaned on.</p>

<ul>
<li><strong>Vertical tabs in a sidebar.</strong> Now native in almost everything, including Chrome and Edge.</li>
<li><strong>Spaces.</strong> Separate tab sets per project, with their own colour. Zen, Vivaldi and Edge all have a version.</li>
<li><strong>Split view.</strong> Zen, Vivaldi and Dia have it; Chrome does not.</li>
<li><strong>Little Arc.</strong> Links from other apps opening in a small throwaway window. Nothing else does this well. Zen's Glance is the nearest.</li>
<li><strong>The Command Bar.</strong> Keyboard-first tab switching and commands. Vivaldi's Quick Commands is the closest match; Zen and Firefox rely on the address bar.</li>
</ul>

<p>Most people, pressed, name two of those. That makes the choice easier than it looks.</p>

<h2>Zen: the closest free replacement</h2>

<p>Zen is a fork of Firefox, open source under the Mozilla Public Licence, built by a small community and released on Windows, macOS and Linux. It is the browser that looks most like Arc: a vertical sidebar that collapses to icons in compact mode, workspaces that separate tabs by project, split view for two pages side by side, nested tab folders, and Glance, which opens a link in a modal preview over the current page rather than in a new tab.</p>

<p>It is also the browser that asks the most of you. It runs Firefox add-ons rather than Chrome extensions, which covers the popular ones — uBlock Origin, the <a href="/articles/password-managers-after-the-price-rises">password managers I compared</a>, Obsidian's clipper — but not the long tail, and not an internal tool your employer built for Chrome. Some DRM-protected streaming can be awkward on Firefox forks. And it is a community project on a fast release cadence, which means the odd rough edge and a settings screen that changes between versions.</p>

<blockquote>
<p>Zen is the right answer if Arc's layout was the point and you can live without Chrome extensions. That is a real trade, and worth making deliberately.</p>
</blockquote>

<h2>Vivaldi: the one that has been here all along</h2>

<p>Vivaldi has been shipping since 2015, is built on Chromium, runs every Chrome extension, and is free on desktop, Android and iOS. It has workspaces, two-level tab stacks, tab tiling for split views, tab hibernation for the two hundred tabs you have not looked at since March, and a tab bar that can sit on the left to give you vertical tabs. There is a mail client, a calendar and a feed reader inside it if you want them and an option to hide them if you do not.</p>

<p>The cost is density. Out of the box, Vivaldi looks like a browser designed by people who love settings, because it is. It takes an afternoon of turning things off to get something as calm as Arc, and the result never quite has Arc's polish. In exchange you get a company with a decade of releases behind it, no venture capital and no acquirer, which after the last eighteen months is worth a great deal.</p>

<h2>Dia: the official successor that is not one</h2>

<p>Dia is what The Browser Company built instead of Arc, and it is a different product. The browser itself is deliberately plain — profiles, tab groups, split view, a built-in ad blocker and sync are on the free plan — and the point is the assistant: chat with your open tabs, draft from what you are reading, and on the paid tiers generate briefs and recaps from your documents. Better Answers is $20 a month; Better Days is $100 a month and pitched at people who live in meetings.</p>

<p>It runs only on macOS 14 or later on Apple Silicon. There is no Windows or Linux version and no date for one. If you loved Arc for the sidebar and Spaces, Dia will feel like a step backwards with a chatbot attached. If what you actually wanted was an assistant that can see your tabs — a use I found genuinely handy when <a href="/articles/which-ai-assistant-is-worth-paying-for">comparing paid AI assistants</a> — then the free plan is a reasonable place to try it, and the $20 tier is priced against the assistants, not the browsers.</p>

<h2>The boring answer: Chrome or Edge</h2>

<p>Here is the thing the browser enthusiasts skip over. Chrome added native vertical tabs to its stable release in early 2026: right-click the tab strip and choose Show Tabs Vertically. Edge has had vertical tabs, sleeping tabs and Workspaces for years, and its Workspaces are now a solid local project-per-window feature even after Microsoft removed the ability to share one with a colleague. Both are free, both run every extension, both are on every platform, and both will exist in five years.</p>

<p>What you give up is the feel. Neither has split view, neither has anything like Little Arc, and Chrome's tab groups are a poor substitute for Spaces. But if the two things you named at the top were vertical tabs and extensions, this is where you should go, and a couple of the <a href="/articles/browser-extensions-that-save-time">extensions I rate</a> will cover most of the rest.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th>Browser</th><th>Engine</th><th>Platforms</th><th>Workspaces</th><th>Split view</th><th>Extensions</th><th>Price</th></tr>
</thead>
<tbody>
<tr><td>Zen</td><td>Firefox</td><td>Windows, macOS, Linux</td><td>Yes</td><td>Yes</td><td>Firefox add-ons</td><td>Free, open source</td></tr>
<tr><td>Vivaldi</td><td>Chromium</td><td>Windows, macOS, Linux, Android, iOS</td><td>Yes</td><td>Yes (tiling)</td><td>Chrome</td><td>Free</td></tr>
<tr><td>Dia</td><td>Chromium</td><td>macOS 14+, Apple Silicon</td><td>Profiles and tab groups</td><td>Yes</td><td>Chrome</td><td>Free; $20 or $100 a month for AI</td></tr>
<tr><td>Chrome</td><td>Chromium</td><td>Everywhere</td><td>Tab groups</td><td>No</td><td>Chrome</td><td>Free</td></tr>
<tr><td>Edge</td><td>Chromium</td><td>Everywhere</td><td>Yes</td><td>Yes</td><td>Chrome</td><td>Free</td></tr>
<tr><td>Arc</td><td>Chromium</td><td>macOS, Windows</td><td>Yes</td><td>Yes</td><td>Chrome</td><td>Free, maintenance only</td></tr>
</tbody>
</table>

<h2>What I did</h2>

<p>On the Mac, where the sidebar mattered most to me, I went to Zen and have stayed. On the Linux machine I use Vivaldi, and Edge with vertical tabs is the fallback where a Chrome-only internal tool is involved. I did not keep Dia past the trial, though I pay for an assistant separately and could see the appeal.</p>

<p>The lesson I took from Arc is the one I keep taking from software this decade: a lovely product from a venture-funded company is a lease, not a purchase. Pick the replacement you can live with if its maker is bought tomorrow. For most people, that is the boring one.</p>`,
};
