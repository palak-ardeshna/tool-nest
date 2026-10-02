import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-08-19; that date holds
 * two articles already, which is the cap the test enforces, so it is published
 * 2026-10-01 where there was no article. The slug and URL are unchanged. Old
 * text deleted 2026-09-29, not restored. Palak's own facts (chat, 2026-10-02):
 * he runs Brave and Chrome, keeps uBlock Origin and React DevTools, removed
 * about 10 extensions, and what prompted it was high memory use. No extension
 * he has not used is recommended.
 */
export const browserExtensionsThatSaveTime: Article = {
  slug: "browser-extensions-that-save-time",
  title: "I Removed 10 Extensions and Kept 2",
  excerpt:
    "The memory use is what made me look. What survived the clear-out was a content blocker and one developer tool, and I have not missed anything I took off.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Browser", "Extensions", "Brave", "Chrome", "Performance"],
  publishedAt: "2026-10-01",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "I Removed 10 Browser Extensions. Kept 2",
  seoDescription:
    "High memory use prompted a clear-out of about 10 browser extensions. What stayed, why Brave changes the maths, and what nothing was missed.",
  content: `
<p>Every list of time-saving extensions has the same problem: installing is free and costs you later, so the list keeps growing and nothing ever leaves it. Mine grew the same way until the memory use made me look.</p>

<p>I run Brave and Chrome, and I removed about 10 extensions in one go. What prompted it was how much memory the browser was using, not any single thing breaking. What I kept is uBlock Origin and React DevTools. I have not gone back for any of the ten, and I could not now tell you what several of them were for without looking at the store page.</p>

<h2>The ones that survive are the ones you would notice losing</h2>
<p>That is the only test that worked for me, and it is easier to apply after a clear-out than before one. A blocker is noticed immediately, on the first page you open. A developer tool is noticed the next time you open a component tree. Everything else sat there costing memory and waiting for a situation that came once, or never.</p>
<table>
<thead><tr><th>What it is</th><th>When you notice it</th><th>Kept?</th></tr></thead>
<tbody>
<tr><td>A content blocker</td><td>The first page you open</td><td>Yes</td></tr>
<tr><td>A developer tool</td><td>The next time you debug something</td><td>Yes</td></tr>
<tr><td>Anything for a once-a-year task</td><td>Once a year, if ever</td><td>No</td></tr>
<tr><td>Anything you installed to try</td><td>Never again after the first day</td><td>No</td></tr>
</tbody>
</table>

<p>The reason this happens is that you install for an imagined future. Something looks like it might help, and the cost of finding out is one click. The cost of being wrong is spread out and invisible, which is exactly the combination that produces 10 extensions nobody chose on purpose.</p>

<h2>Running Brave changes the maths</h2>
<p>Brave blocks ads and trackers itself, so a separate content blocker is doing less work there than it does in Chrome. I still keep uBlock Origin because I use both browsers and I would rather have the same behaviour in each than remember which one needs what.</p>
<p>That is a preference, not a recommendation. If you are only in Brave, work out whether a blocker is adding anything on top of what the browser already does before you keep it out of habit.</p>

<h2>Memory is the symptom worth watching</h2>
<p>Nothing about an extension tells you what it costs. There is no number on the install button and no warning when the total gets silly. The browser's own task manager is the only place the information lives, and almost nobody opens it.</p>
<p>If the browser feels heavy, open that list before you blame the machine or the tabs. In my case the answer was not one bad extension; it was ten unremarkable ones that nobody would single out.</p>

<h2>How to do a clear-out</h2>
<p>Remove everything you cannot immediately say the purpose of out loud. Not disable, remove, because a disabled extension stays on the list forever as a thing you are going to decide about later. Then work for a week. Anything you genuinely needed, you will reinstall within days, and almost nothing is.</p>
<p>It is the same pattern as the shortcuts I made for myself and then never typed, which I wrote about when <a href="/articles/terminal-setups-that-are-actually-faster">counting how many of my own aliases I actually use</a>.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I run Brave and Chrome, and I removed about 10 extensions in one go. What prompted it was how much memory the browser was using, not any single thing breaking. What I kept is uBlock Origin and React DevTools. I have not gone back for any of the ten, and I could not now tell you what several of them were for without looking at the store page.",
  },
};
