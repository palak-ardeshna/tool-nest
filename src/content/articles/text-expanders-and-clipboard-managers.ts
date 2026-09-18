import type { Article } from "@/content/types";

export const textExpandersAndClipboardManagers: Article = {
  slug: "text-expanders-and-clipboard-managers",
  title: "Text Expanders and Clipboard Managers",
  excerpt:
    "Two of the smallest tools you can install, and two of the few that pay back on the first day. One stops you typing the same paragraph again; the other stops you losing the thing you copied thirty seconds ago.",
  image: "/images/articles/text-expanders-and-clipboard-managers.webp",
  imageAlt:
    "Photograph: a close-up of one hand resting on a laptop keyboard mid-sentence, the rest of the desk out of focus",
  category: "productivity",
  author: "parth-patel",
  tags: ["Productivity", "Automation", "Espanso", "Raycast", "Shortcuts"],
  publishedAt: "2026-09-07",
  seoTitle: "Text Expanders and Clipboard Managers Compared",
  seoDescription:
    "Espanso, TextExpander, Raycast, Alfred and PowerToys compared — what each costs, what is free, and the twenty snippets worth setting up first.",
  quickAnswer:
    "Start free and only pay if you hit a wall. Espanso is free and open source under the GPL, runs on Windows, macOS and Linux, and stores its snippets as YAML files you can keep in version control. On a Mac, Raycast's free plan already includes clipboard history and snippets; Pro is $10 a month, or $8 billed annually. On Windows, Microsoft's PowerToys is free and includes Advanced Paste and a launcher. TextExpander is the polished commercial option at $6 per user a month billed annually, with a free tier limited to five snippets, and it earns its keep mainly for teams sharing a library. Alfred's Powerpack is a one-off £34 licence. Set up ten snippets, not a hundred — the ones you retype weekly.",
  pros: [
    "Both tools pay back the setup cost within a week of ordinary work",
    "The free options are genuinely complete, not crippled trials",
    "Snippets stored as plain files can live in version control with everything else",
    "A clipboard history removes an entire category of small, annoying mistakes",
  ],
  cons: [
    "Clipboard history keeps whatever you copied, including passwords",
    "Triggers that are too short fire inside ordinary words and are maddening",
    "Team snippet libraries drift out of date faster than anyone maintains them",
    "The tools are per-machine, so a new laptop means setting it all up again",
  ],
  alternatives: [
    { name: "Espanso", url: "https://github.com/espanso/espanso", note: "Free and GPL-3.0. Windows, macOS and Linux. Snippets are YAML files, with forms, shell commands and a package hub." },
    { name: "Raycast", url: "https://www.raycast.com/pricing", note: "Free plan includes clipboard history and snippets. Pro is $10 a month, $8 annually. macOS first, with Windows and iOS versions." },
    { name: "TextExpander", url: "https://textexpander.com/pricing", note: "Free tier holds five snippets. Pro is $6 per user a month billed annually; Business is $12 for shared team libraries." },
    { name: "PowerToys", url: "https://learn.microsoft.com/en-me/windows/powertoys/", note: "Free and open source from Microsoft. Advanced Paste, a command palette, a launcher and screen text extraction." },
  ],
  faqs: [
    {
      question: "Where should I start if I have never used either?",
      answer:
        "With the clipboard manager, because it needs no setup and starts helping immediately. Install it, forget about it, and the first time you copy something over the thing you actually needed you will find the old one still in the history. Text expansion asks more of you — you have to decide what to store and what to call it — so it is the second thing to do, once you have noticed yourself retyping something for the third time that week.",
    },
    {
      question: "What should my first snippets be?",
      answer:
        "The boring ones. Your email address and postal address. Your bank details, if you invoice. The three sentences you write in every reply that declines something politely. A meeting-notes skeleton. The date in the format your team uses. Ten of those will cover most of what you retype. Resist the urge to build a library of fifty on the first afternoon, because the ones you invented rather than noticed are the ones you will never remember the trigger for.",
    },
    {
      question: "How do I stop triggers firing by accident?",
      answer:
        "Give every trigger a prefix that never appears in ordinary writing. A leading colon is the common convention — :addr, :sig, :inv — and it is why Espanso's own examples use it. Two-letter abbreviations without a prefix will fire inside real words and you will spend a fortnight quietly cursing. If a tool supports it, requiring a word boundary or an explicit key to confirm the expansion is worth turning on for anything you paste into customer-facing text.",
    },
    {
      question: "Is clipboard history a security problem?",
      answer:
        "It is a real consideration, and the answer is configuration rather than avoidance. Anything you copy is retained, which includes passwords copied out of a password manager, one-time codes and API keys. Most tools can be told to ignore your password manager, to exclude specific applications, or to expire entries after a set period, and every one of those settings is worth finding on the day you install it. Keeping the history local rather than synced is the other sensible default — and if you are already thinking about credentials, my piece on <a href=\"/articles/password-managers-after-the-price-rises\">password managers after the price rises</a> is the companion to this one.",
    },
  ],
  sources: [
    {
      title: "Espanso",
      publisher: "Espanso",
      url: "https://github.com/espanso/espanso",
      checkedAt: "2026-09-07",
    },
    {
      title: "Espanso: getting started",
      publisher: "Espanso",
      url: "https://espanso.org/docs/get-started/",
      checkedAt: "2026-09-07",
    },
    {
      title: "TextExpander pricing",
      publisher: "TextExpander",
      url: "https://textexpander.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Raycast pricing",
      publisher: "Raycast",
      url: "https://www.raycast.com/pricing",
      checkedAt: "2026-09-07",
    },
    {
      title: "Alfred Powerpack",
      publisher: "Running with Crayons",
      url: "https://www.alfredapp.com/powerpack/buy/",
      checkedAt: "2026-09-07",
    },
    {
      title: "Microsoft PowerToys",
      publisher: "Microsoft",
      url: "https://learn.microsoft.com/en-us/windows/powertoys/",
      checkedAt: "2026-09-07",
    },
  ],
  content: `<p>Most productivity software asks you to change how you work. These two ask you to change nothing, and then quietly remove a few hundred keystrokes a week from your day.</p>

<p>A text expander watches for a short trigger and replaces it with something longer. A clipboard manager remembers what you copied before the thing you just copied. Neither is clever. Both are the sort of tool you notice only when you sit at a machine that does not have them, at which point you notice constantly.</p>

<h2>What each one actually does</h2>

<p>The expander is the one with a learning curve, and it is short. You define a trigger — say <code>:sig</code> — and the text it becomes. Type the trigger anywhere, in any application, and the text appears. Better tools go further: fill-in-the-blank forms, the current date computed at expansion time, the output of a shell command dropped into place.</p>

<p>The clipboard manager has no learning curve at all. It keeps a list of the last few hundred things you copied and gives you a keyboard shortcut to search it. That is the whole product, and it fixes the specific, daily annoyance of copying something over the thing you were about to paste.</p>

<h2>The options, and what they cost</h2>

<p>Published rates at the time of writing.</p>

<table>
<thead>
<tr><th>Tool</th><th>Platforms</th><th>Cost</th><th>Best when</th></tr>
</thead>
<tbody>
<tr><td>Espanso</td><td>Windows, macOS, Linux</td><td>Free, GPL-3.0</td><td>You want snippets as files you control</td></tr>
<tr><td>Raycast</td><td>macOS, Windows, iOS</td><td>Free; Pro $10/month, $8 annually</td><td>You want launcher, clipboard and snippets in one</td></tr>
<tr><td>TextExpander</td><td>macOS, Windows, iOS</td><td>Free for five snippets; $6/user/month annually</td><td>A team needs one shared, maintained library</td></tr>
<tr><td>Alfred</td><td>macOS</td><td>Powerpack, £34 one-off</td><td>You prefer buying a licence once</td></tr>
<tr><td>PowerToys</td><td>Windows</td><td>Free, open source</td><td>You are on Windows and want the basics covered</td></tr>
</tbody>
</table>

<p>Two things are worth pulling out of that table. Raycast's free plan already includes clipboard history — three months of it — and snippets, so on a Mac you can have both tools working before lunch without paying anything. And Alfred is one of the last pieces of desktop software still sold as a one-off licence rather than a subscription, which for some people settles it on principle alone.</p>

<h2>Why I keep coming back to Espanso</h2>

<p>Espanso is free, runs on all three desktop platforms, and stores its configuration as YAML files in a folder. That last detail is the one that matters more than it sounds.</p>

<p>Snippets in a text file can go in a git repository. They can be reviewed, copied to a new machine in one command, and diffed when something changes. Every commercial expander stores its library in a proprietary sync service, which is fine until you leave, and a nuisance the day you want your snippets somewhere else. Plain files sidestep the whole question.</p>

<p>It also does the advanced things: forms that prompt for values before expanding, shell command output, regex triggers, and a package hub for shared sets. If you already keep a set of dotfiles, this belongs beside them — the same instinct I described in my piece on <a href="/articles/terminal-setups-that-are-actually-faster">terminal setups that are actually faster</a>.</p>

<blockquote>
<p>Give every trigger a prefix that never occurs in normal writing. A leading colon costs one keystroke and saves you from an expansion firing in the middle of a word for the rest of your life.</p>
</blockquote>

<h2>The twenty minutes that pays for itself</h2>

<p>Do not build a library. Notice one instead. For one week, every time you catch yourself retyping something, write it down. At the end of the week you will have between eight and fifteen items, and that list is your snippet set.</p>

<p>Mine, for what it is worth, has settled on roughly this shape:</p>

<ul>
<li><strong>Identity.</strong> Email address, postal address, phone number, company registration details.</li>
<li><strong>Replies.</strong> The polite decline, the "can we move this to email" line, the availability paragraph.</li>
<li><strong>Structure.</strong> A meeting-notes skeleton, a bug report template, a pull request description with the headings already in place.</li>
<li><strong>Fiddly strings.</strong> The date format your team uses, a currency symbol your keyboard hides, the em dash.</li>
</ul>

<p>Fifteen entries, expanded a few times each per week, is a few thousand keystrokes a year that you no longer type or mistype. The mistyping is the real gain. A snippet is correct every time, and an address typed from memory is not.</p>

<h2>The two mistakes worth avoiding</h2>

<p>The first is the enormous library. Someone builds a hundred snippets in an afternoon, remembers eleven of them, and abandons the tool a month later because it felt like homework. Add snippets when you notice the need, never in advance.</p>

<p>The second is forgetting what the clipboard history contains. It holds whatever you copied, and what you copied includes passwords, one-time codes and API keys. Every serious tool can exclude specific applications, or expire entries after an hour — turn that on when you install it, not after an incident. Keep the history local rather than synced unless you have a specific reason not to.</p>

<h2>What I would do</h2>

<p>On a Mac, install Raycast, use the free clipboard history immediately, and add Espanso for expansion if you want your snippets as files. On Windows, PowerToys plus Espanso covers everything without spending anything. On Linux, Espanso and whatever clipboard manager your desktop environment already ships.</p>

<p>Pay for TextExpander only when the snippets need to be shared and maintained by a team, because that is the problem it solves that the free tools do not. For one person, the free options are not a compromise. They are the answer.</p>`,
};
