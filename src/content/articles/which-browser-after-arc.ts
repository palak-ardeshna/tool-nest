import type { Article } from "@/content/types";

/**
 * Comparison, rewritten on the URL first published 2026-09-11 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): tried Brave because of Chrome's RAM and battery use, ads and
 * tracking, and tab sprawl; stayed fully on Brave about a week; a payment or
 * bank site did not work properly; extension and password sync was awkward;
 * today he runs both, Brave for reading and browsing, Chrome for work and
 * logins. He has not used Arc, Zen, Vivaldi or Dia, so none is reviewed here and
 * the article says so. The Shields troubleshooting order is quoted from Brave's
 * own Shields Debugging Guide, read 2026-10-02.
 */
export const whichBrowserAfterArc: Article = {
  slug: "which-browser-after-arc",
  title: "A Week on Brave, and Now I Run Two Browsers",
  excerpt:
    "I moved to Brave for a week, then a payment site broke and the logins got awkward. Now Brave reads and Chrome works, which was not the plan.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Brave", "Chrome", "Browsers", "Privacy"],
  publishedAt: "2026-09-11",
  contentUpdatedAt: "2026-09-20",
  seoTitle: "Chrome and Brave: Why I Ended Up With Both",
  seoDescription:
    "A week fully on Brave, then a payment site broke and password sync got awkward. How I split reading from logins across two browsers instead.",
  faqs: [
    {
      question: "Did Brave actually use less RAM and battery?",
      answer:
        "I did not measure it, so I will not claim a figure. And the question stopped mattering once I was running both browsers at once, because then nothing had been removed.",
    },
    {
      question: "Why not just move the passwords to Brave?",
      answer:
        "Then you have two password stores that drift apart, which seemed worse than two browsers. Keeping them in one place is what split the work the way it is split now.",
    },
    {
      question: "What should I check before a payment in Brave?",
      answer:
        "Brave's Shields Debugging Guide gives an order: Aggressive to Standard, Standard to Disabled, allow third-party cookies, then disable Shields for that site. Work through it before you need it, not during a transaction.",
    },
  ],
  alternatives: [
    {
      name: "Arc, Zen, Vivaldi, Dia",
      note: "The browsers usually named in this comparison. I have not installed any of them, so there is nothing from me on how they behave",
    },
    {
      name: "Chrome profiles",
      note: "If your reason for a second browser is separating work from personal, a second Chrome profile does that without a second password store",
    },
    {
      name: "An extension in Chrome",
      note: "If ad and tracker blocking is the whole reason, that is a blocker, not a browser change. It leaves your logins where they are",
    },
  ],
  content: `
<p>I tried Brave for 3 reasons: Chrome was eating RAM and battery on my laptop, I wanted ads and tracking blocked, and my tabs had got out of hand. I stayed fully on Brave for about a week. Then a payment site did not work properly, moving extensions and passwords across was more awkward than I expected, and I started opening Chrome again for the things that mattered. Today I use both: Brave for reading and general browsing, Chrome for work and anything with a login.</p>

<p>Before the comparison: I have not used Arc, Zen, Vivaldi or Dia. Those are the browsers this question usually comes with, and I cannot tell you anything about them.</p>

<h2>Where each one ended up</h2>
<table>
<thead><tr><th>The job</th><th>Where it lives now</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Reading, searching, general browsing</td><td>Brave</td><td>Blocking is on by default and nothing here needs a login</td></tr>
<tr><td>Work, client sites, anything I sign in to</td><td>Chrome</td><td>The passwords are there and I stopped moving them</td></tr>
<tr><td>Payments and banking</td><td>Chrome</td><td>One site did not work properly in Brave and I did not want to debug that mid-payment</td></tr>
<tr><td>Full-time single browser</td><td>Lasted about a week</td><td>The logins brought me back</td></tr>
</tbody>
</table>

<h2>The payment site is the part worth understanding</h2>
<p>A site breaking in Brave is usually Shields, and Brave documents this rather than hiding it.</p>
<p>Brave's own Shields Debugging Guide acknowledges that "when blocking certain functionality for privacy purposes, there are legitimate features of a website that get affected". It gives an order to work through when that happens: switch ad blocking from Aggressive to Standard and see whether the problem persists, then from Standard to Disabled, then allow third-party cookies, and only then "Disable Shields for the site from within the Shields panel". Read on 2 October 2026.</p>
<p>That order is better than what I did, which was close the tab and open Chrome. Four steps would have told me which protection the site needed turned off, and that is worth knowing rather than guessing. The reason I did not work through them is the reason most people will not: it was a payment, I wanted it to go through, and a half-finished transaction is not where you want to start changing privacy settings.</p>
<p>Shields was doing its job and I was not willing to debug it mid-payment. The second half of that sentence is what decided where my banking lives now.</p>

<h2>What moving a browser actually costs</h2>
<p>I had thought of switching as installing something. The cost sat in the things I had not counted.</p>
<p>Extensions have to be found again, and the ones that carry settings have to be set up again from nothing. Passwords are worse, because you either move them and now have two stores that will drift apart, or you do not move them and the new browser cannot do the thing you most often need a browser for. I chose not to move them, and that choice is what turned a switch into a split. Once my passwords were only in Chrome, every logged-in task was a Chrome task, and that is most of my working day.</p>
<p>Which means the RAM and battery problem I started with is only half fixed. Chrome is still open. It has fewer tabs in it than before, which is a real improvement, and it has not gone away.</p>

<h2>What I would tell you to decide first</h2>
<p>Work out which of the three reasons is actually yours, because they have different answers. If it is ads and tracking, you may want a blocker rather than a browser, and a blocker leaves your passwords alone. If it is RAM and battery, measure it before and after rather than trusting the feeling, because a second browser open at the same time wins you nothing.</p>
<p>If it is tab sprawl, no browser fixes a habit. Mine followed me across and I ended up with the same number of tabs in a different window.</p>
<p>And decide where your passwords live before you start, not after. That single decision made this choice for me, and I made it by accident. I had the same experience with read-it-later apps in <a href="/articles/read-it-later-apps-after-pocket">never replacing Pocket</a>: the tool I ended up using was the one that already had my things in it.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I tried Brave for 3 reasons: Chrome was eating RAM and battery on my laptop, I wanted ads and tracking blocked, and my tabs had got out of hand. I stayed fully on Brave for about a week. Then a payment site did not work properly, moving extensions and passwords across was more awkward than I expected, and I started opening Chrome again for the things that mattered. Today I use both: Brave for reading and general browsing, Chrome for work and anything with a login.",
  },
  sources: [
    {
      title: "Shields Debugging Guide",
      publisher: "Brave",
      url: "https://github.com/brave/brave-browser/wiki/Shields-Debugging-Guide",
      checkedAt: "2026-10-02",
    },
  ],
};
