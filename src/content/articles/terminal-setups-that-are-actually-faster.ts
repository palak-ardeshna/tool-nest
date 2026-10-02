import type { Article } from "@/content/types";

/**
 * Explainer with a table, rewritten on the URL first published 2026-08-19; that
 * date already holds two articles, which is the cap the test enforces, so it is
 * published 2026-08-21. The slug and URL are unchanged. Old text deleted
 * 2026-09-29, not restored. Palak's own facts (chat, 2026-10-02): he is on bash
 * and the terminal that shipped with his desktop, wrote his own PS1 rather than
 * installing a prompt tool, has about 20 aliases and reaches for about 5, found
 * shell startup gained a noticeable pause under a second, and his setup did not
 * carry over to another machine. His desktop's terminal is not named because he
 * did not name it. No prompt framework is reviewed; he has not used one.
 */
export const terminalSetupsThatAreActuallyFaster: Article = {
  slug: "terminal-setups-that-are-actually-faster",
  title: "I Have 20 Aliases. I Use 5",
  excerpt:
    "The terminal advice online is a list of things to install. I am on plain bash with the terminal my desktop came with, and the part that actually saved me time was 5 aliases.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Terminal", "bash", "Linux", "Aliases", "Dotfiles"],
  publishedAt: "2026-08-21",
  contentUpdatedAt: "2026-08-31",
  seoTitle: "A Faster Terminal Without Installing Anything",
  seoDescription:
    "Plain bash, the terminal that came with the desktop, a hand-written prompt and about 20 aliases of which 5 get used. What actually saved time.",
  content: `
<p>Search for a faster terminal and you get a shopping list: a new shell, a new emulator, a framework, a prompt tool, a dozen plugins. I have none of it. I am on bash, in the terminal that came with my desktop, with a prompt I wrote myself.</p>

<p>What I added was aliases, and I have about 20 of them. I reach for about 5. The other fifteen are things I thought I would need and then never typed again, and I could not tell you what half of them do without opening the file. The prompt I wrote myself did add a noticeable pause when a terminal opens, under a second but there every single time. And when I moved to another machine the setup did not come with me, so I was back to a plain shell with none of it.</p>

<h2>The 15 aliases I do not use</h2>
<p>This is the part worth being honest about, because every article on this subject ends with a list of aliases to copy. Three quarters of mine are dead. Not wrong, not broken: just commands I decided in advance that I would want, which turned out not to match what I actually type.</p>
<p>The 5 that survived all have the same shape. They are things I run many times a day, they are tedious to type in full, and I arrived at them by noticing myself typing the same thing repeatedly. None of them came from a list.</p>

<h2>What a terminal setup costs you</h2>
<table>
<thead><tr><th>What you add</th><th>What it costs</th><th>Worth it when</th></tr></thead>
<tbody>
<tr><td>An alias you invented in advance</td><td>Nothing, except it is never used</td><td>You already type that command daily</td></tr>
<tr><td>A prompt with information in it</td><td>A pause on every new terminal</td><td>You read the information it shows</td></tr>
<tr><td>A framework or plugin set</td><td>Startup time, plus a thing to maintain</td><td>You can name what it does for you</td></tr>
<tr><td>Any of it, on a second machine</td><td>Doing the whole setup again</td><td>Your config lives somewhere portable</td></tr>
</tbody>
</table>

<h2>The pause is small and it is every time</h2>
<p>My prompt costs a fraction of a second when a terminal opens. On its own that is nothing. The reason I mention it is that it is charged on every window, every day, forever, in exchange for information I glance at perhaps a tenth of the time. That is a bad trade and I have not fixed it, which is the honest state of most people's dotfiles.</p>
<p>If you are going to add something to a shell startup, the question is not whether it is fast. It is whether you look at what it gives you.</p>

<h2>The other machine problem</h2>
<p>None of this moved when I did. Everything I had built lived on one machine, so the second one started from nothing and I worked in a plain shell until I could be bothered. That is the real argument for keeping a setup small: a small one is easy to carry and easy to rebuild, and a big one quietly becomes a thing you only have in one place.</p>
<p>It is the same reason I lean on the client that is already installed when I work with a database, rather than the one I would have to set up again, as I found when <a href="/articles/postgres-tools-worth-using">a browser console gave out on a table that psql handled fine</a>.</p>

<h2>What I would actually do</h2>
<p>Do not copy an alias list, including mine. Work in the terminal for a week and notice what you type twice a day, and alias only that. Keep the prompt plain unless you genuinely read what is in it. If you want any of it on more than one machine, put the file somewhere you can fetch it before you add the twentieth line to it.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "What I added was aliases, and I have about 20 of them. I reach for about 5. The other fifteen are things I thought I would need and then never typed again, and I could not tell you what half of them do without opening the file. The prompt I wrote myself did add a noticeable pause when a terminal opens, under a second but there every single time. And when I moved to another machine the setup did not come with me, so I was back to a plain shell with none of it.",
  },
};
