import type { Article } from "@/content/types";

/**
 * Explainer with alternatives, rewritten on the URL first published 2026-09-14
 * (old text deleted 2026-09-29, not restored). Palak has NOT used Raycast,
 * Alfred or PowerToys; he runs Linux with Ulauncher, and the article says so in
 * its first paragraph. His own facts (chat, 2026-10-01): installed Ulauncher,
 * uses it to find files, it finds nothing outside his home folder, and he gave
 * up after about 5 tries and went back to the file manager. Ulauncher's own
 * docs say they cover only extensions and themes, so no mechanics are claimed
 * from them.
 */
export const appLaunchersRaycastAlfredAndPowertoys: Article = {
  slug: "app-launchers-raycast-alfred-and-powertoys",
  title: "My Launcher Finds Apps and Loses Files",
  excerpt:
    "Ulauncher opens anything I have installed in one keystroke. Ask it for a file outside my home folder and it finds nothing. I gave up after about 5 tries.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Ulauncher", "Linux", "Launchers", "File search"],
  publishedAt: "2026-09-14",
  contentUpdatedAt: "2026-10-01",
  seoTitle: "Launcher File Search: Where Ulauncher Stops",
  seoDescription:
    "Ulauncher on Linux opens apps in one keystroke and found none of my files outside the home folder. What a launcher is actually good at.",
  content: `
<p>I run Linux and use Ulauncher, so I have not touched Raycast, Alfred or PowerToys. I installed Ulauncher to stop digging through folders, and for opening apps it does that. For finding files it has not worked out for me. It finds things inside my home folder and nothing outside it, and after about 5 tries on a path that sits on another part of the disk I stopped asking it and went back to the file manager.</p>

<h2>Two jobs, one keystroke</h2>
<p>A launcher does two things that feel like one thing. It opens programs, which it can do from a list the system already keeps. It finds files, which needs an index of your disk, or a live search every time you type. Those are different problems, and the second one is the expensive one.</p>
<p>That is why the app half is instant and reliable while the file half depends entirely on what has been indexed, and on which directories the index was told about. Mine stops at the boundary of my home folder. Everything I keep outside it might as well not exist as far as the launcher is concerned.</p>

<h2>What I changed instead of fixing it</h2>
<p>I stopped using the launcher for files. Apps and windows go through the keyboard, files go through the file manager or the terminal, and I no longer type a filename into a box that will shrug at me. That sounds like giving up, and it is, but it took 5 attempts to learn and about a second to apply.</p>
<p>If you want the file half to work, check what is indexing your disk underneath the launcher, and whether the folders you care about are in that index. The settings screen will not tell you. A launcher sits on top of that; it cannot find what the index never saw.</p>

<h2>What I cannot tell you</h2>
<p>Whether Raycast, Alfred or the PowerToys command palette handle this better, I have no idea. They run on operating systems I do not use. The pattern is worth carrying across anyway: before you judge a launcher, work out whether the complaint is about the launcher or about the index it reads.</p>
<p>What I have is what it did on my machine, on folders I keep outside home. It is the same lesson I got from Chrome's password autofill, which I wrote about in <a href="/articles/password-managers-after-the-price-rises">four years on a free password manager</a>: the convenient tool is confident in exactly the places it has no information.</p>
`,
  alternatives: [
    {
      name: "The file manager's own search",
      note: "Where I ended up for files. Slower to open, and it looks where I tell it to look.",
    },
    {
      name: "A terminal search",
      note: "What I use when I know part of the name. No index involved, so no surprises about which folders count.",
    },
    {
      name: "Rofi",
      url: "https://github.com/davatorium/rofi",
      note: "The other Linux launcher people recommend to me. I have not installed it.",
    },
  ],
  humanReview: {
    experience:
      "I run Linux and use Ulauncher, so I have not touched Raycast, Alfred or PowerToys. I installed Ulauncher to stop digging through folders, and for opening apps it does that. For finding files it has not worked out for me. It finds things inside my home folder and nothing outside it, and after about 5 tries on a path that sits on another part of the disk I stopped asking it and went back to the file manager.",
    reviewedAt: "2026-10-01",
  },
  sources: [
    {
      title: "Ulauncher documentation",
      publisher: "Ulauncher",
      url: "https://docs.ulauncher.io/en/stable/",
      checkedAt: "2026-10-01",
    },
  ],
};
