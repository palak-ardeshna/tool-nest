import type { Article } from "@/content/types";

export const readItLaterAppsAfterPocket: Article = {
  slug: "read-it-later-apps-after-pocket",
  title: "Read-It-Later Apps After Pocket: What to Use, and Whether You Need One at All",
  excerpt:
    "Pocket closed in July 2025 and took a lot of people's reading habit with it. I compared the survivors — Instapaper, Readwise Reader, Raindrop, Wallabag and your browser's own reading list — on what the free tiers cover, what you actually pay for, and how to stop the queue becoming a graveyard.",
  category: "productivity",
  author: "parth-patel",
  tags: ["Productivity", "Reading", "Bookmarks", "Comparisons"],
  publishedAt: "2026-09-11",
  image: "/images/articles/read-it-later-apps-after-pocket.webp",
  imageAlt:
    "Hands holding an e-reader in a sunlit meadow of wildflowers, a straw hat visible at the edge of the frame",
  seoTitle: "Best Read-It-Later Apps After Pocket (2026)",
  seoDescription:
    "Instapaper, Readwise Reader, Raindrop and Wallabag compared for ex-Pocket users: free-tier limits, what premium buys, and when a browser list is enough.",
  quickAnswer:
    "If you saved fewer than ten things a week to Pocket, your browser's built-in reading list replaces it for free and syncs across your devices already. If you want a proper app, Instapaper's free tier saves unlimited articles with folders and sync, and its $59.99 a year premium adds full-text search, a permanent archive and Kindle delivery. Readwise Reader is the most capable — RSS, newsletters, PDFs, highlights that flow into Obsidian or Notion — but only exists inside the full Readwise plan at $9.99 a month billed yearly. Raindrop is a bookmark manager first and a reader second, with a generous free tier. Wallabag is open source, self-hostable, and €11 a year hosted if you would rather the archive were yours.",
  pros: [
    "Every option here has a free tier or a free self-hosted version, so nobody has to pay to replace Pocket",
    "Instapaper and Wallabag import Pocket's export format directly, including the archive",
    "Readwise Reader turns highlights into notes you will actually see again",
  ],
  cons: [
    "Reader is bundled with a $9.99 a month subscription whether or not you want the rest of Readwise",
    "Free tiers cap search, notes or archive size — the features you miss most after a year of saving",
    "A read-it-later queue with no clearing habit is just a second, guiltier inbox",
  ],
  alternatives: [
    {
      name: "Your browser's reading list",
      note: "Safari, Chrome and Edge each have one, synced through the account you already use. No tags, no highlights, no search — and for a light saver that is fine.",
    },
    {
      name: "Instapaper",
      url: "https://www.instapaper.com/premium",
      note: "Free: unlimited saves, folders, sync across web, iOS and Android, five notes a month. Premium at $5.99 a month or $59.99 a year adds full-text search, a permanent archive, unlimited notes, Kindle delivery and text-to-speech playlists.",
    },
    {
      name: "Readwise Reader",
      url: "https://readwise.io/pricing",
      note: "Included only in the full Readwise plan: $9.99 a month billed yearly or $12.99 monthly, 30-day trial. Articles, RSS, newsletters, PDFs, EPUBs and YouTube transcripts in one queue, with highlights exported to Obsidian, Notion and others.",
    },
    {
      name: "Raindrop.io",
      url: "https://raindrop.io/pro",
      note: "Free: unlimited bookmarks and collections on unlimited devices. Pro adds full-text search, permanent copies of saved pages, cloud backup and more upload space; yearly billing is about 20% cheaper than monthly.",
    },
    {
      name: "Wallabag",
      url: "https://wallabag.it/en/pricing",
      note: "Open source. Self-host for nothing, or use the hosted service at €11 a year after a 14-day trial. Exports to EPUB and PDF, and a Pocket import.",
    },
  ],
  faqs: [
    {
      question: "Can I still get my Pocket data?",
      answer:
        "Not from Mozilla. Exports closed on 8 October 2025 and the data was deleted afterwards. If you exported before then you have a CSV, and Instapaper, Wallabag and Readwise Reader all import it. If you did not, the saved pages are gone, though your browser history may still have the URLs.",
    },
    {
      question: "Is Readwise Reader worth $9.99 a month?",
      answer:
        "Only if you highlight. Reader's real product is the loop from reading to highlight to daily review to your notes app. If you read articles and forget them, that loop is what you are paying for and not using, and Instapaper's free tier does the reading part just as well.",
    },
    {
      question: "What about Matter, Omnivore and the others?",
      answer:
        "Omnivore shut down in 2024 after its team was acquired, which is the reason I now weigh a company's stability as heavily as its feature list. Matter is still going with a free tier and a $79.99 a year premium; I have not used it enough to recommend it over the options here. If a service matters to you, keep an export.",
    },
    {
      question: "How do I stop the queue piling up?",
      answer:
        "Two rules. Anything unread after thirty days gets archived without guilt — you were not going to read it. And save with a reason: one line in a note or tag about why you saved it, which makes the item findable later and stops reflexive saving of things you would never open.",
    },
  ],
  sources: [
    {
      title: "Read-it-later app Pocket shut down — here are the best alternatives",
      publisher: "TechCrunch",
      url: "https://techcrunch.com/2026/08/14/read-it-later-app-pocket-is-shutting-down-here-are-the-best-alternatives/",
      checkedAt: "2026-09-11",
    },
    {
      title: "Instapaper Premium",
      publisher: "Instapaper",
      url: "https://www.instapaper.com/premium",
      checkedAt: "2026-09-11",
    },
    {
      title: "Readwise pricing",
      publisher: "Readwise",
      url: "https://readwise.io/pricing",
      checkedAt: "2026-09-11",
    },
    {
      title: "Raindrop.io Pro",
      publisher: "Raindrop.io",
      url: "https://raindrop.io/pro",
      checkedAt: "2026-09-11",
    },
    {
      title: "wallabag.it pricing",
      publisher: "wallabag",
      url: "https://wallabag.it/en/pricing",
      checkedAt: "2026-09-11",
    },
  ],
  content: `<p>Pocket was the default. It came bundled in Firefox, it was free, and for a decade "save it for later" meant the same thing to most people. Mozilla announced its closure in May 2025, switched it off on 8 July, and closed the export window on 8 October. If you had a reading habit built on it, you have spent the last year improvising.</p>

<p>I had a few thousand items in Pocket. Here is what I moved to, what I tried and dropped, and the question I should have asked first.</p>

<h2>Do you need an app at all?</h2>

<p>Before comparing apps, count how much you actually saved. For a lot of people the honest answer is a handful of links a week, most of them read within a day or two. That workload does not need a product. Safari, Chrome and Edge each have a reading list built in, synced through the account you are already signed into, with offline copies on mobile.</p>

<p>What the built-in lists lack is everything after saving: tags, search, highlights, an archive you can trust to still be there in five years. If you never used those in Pocket, you will not miss them now. If your saved list was a research pile — sources for something you were writing, in the way I described in <a href="/articles/ai-research-tools-and-your-sources">my piece on research tools</a> — you need a real app, and the rest of this article is for you.</p>

<h2>Instapaper: the closest thing to Pocket</h2>

<p>Instapaper predates Pocket and has outlived it, and it is the least surprising replacement. The free tier saves unlimited articles and videos, syncs across web, iOS and Android, and lets you file things into folders. The reading view is plain in the best sense: text, a few fonts, no feed of recommended content.</p>

<p>The free tier caps you at five notes a month, and search and the permanent archive sit behind Premium at $5.99 a month or $59.99 a year. That second limit is the one that matters. On the free plan, older items can drop out of full-text search, so if you want to find the thing you saved in 2023 by a phrase you remember, you are paying. Premium also adds Kindle delivery, a PDF reader and text-to-speech playlists.</p>

<p>It imports Pocket's CSV export directly, archive and all. If you exported in time, this is a twenty-minute migration.</p>

<h2>Readwise Reader: the most capable, and the most expensive way to get it</h2>

<p>Reader is a different kind of product. It takes articles, RSS feeds, email newsletters, PDFs, EPUBs and YouTube transcripts into a single queue, and everything you highlight flows into Readwise's daily review and out to Obsidian, Notion, Logseq or Roam. If you have a notes system — I compared the main ones in <a href="/articles/note-taking-apps-for-thinking">note-taking apps for thinking</a> — Reader is the piece that connects reading to it.</p>

<blockquote>
<p>Reader is worth the money if you highlight and review. If you read and forget, you are paying for a loop you never close.</p>
</blockquote>

<p>The cost is the catch. Reader is not sold on its own: it comes only with the full Readwise plan at $9.99 a month billed yearly, or $12.99 monthly, after a 30-day trial. The cheaper Lite plan does not include it. That is roughly double Instapaper Premium for a product that does a great deal more, and whether that more is worth it depends entirely on whether you use the highlight-to-notes half.</p>

<h2>Raindrop: a bookmark manager that can also read</h2>

<p>Raindrop is where a lot of Pocket refugees ended up, and it is a good product that is solving a slightly different problem. It is a bookmark manager first: collections, nested folders, tags, a visual grid, and it saves anything with a URL rather than just articles. The free tier has no limit on bookmarks, collections or devices.</p>

<p>Pro adds the reading features that make it a Pocket replacement — full-text search of the pages you saved, permanent copies so a dead link still opens, cloud backup and more upload space — and yearly billing is about a fifth cheaper than monthly. If you want to keep a library of links and occasionally read one in a clean view, start here. If you want a queue you clear, it is more structure than you need.</p>

<h2>Wallabag: for people who have just been burnt</h2>

<p>The lesson of Pocket, and of Omnivore before it, is that a reading archive on somebody else's server lasts as long as their business does. Wallabag is the answer to that worry: open source, self-hostable on anything that runs PHP and a database, with a hosted version at €11 a year after a 14-day trial if you want the ownership without the ops.</p>

<p>It is plainer than the others and the mobile apps are functional rather than lovely. It exports to EPUB and PDF, imports from Pocket and Instapaper, and it will not be acquired and shut down. For an archive you expect to keep for a decade, that is worth more than a nicer font.</p>

<h2>Free tiers side by side</h2>

<table>
<thead>
<tr><th>App</th><th>Free tier</th><th>First paid step</th><th>Imports Pocket</th></tr>
</thead>
<tbody>
<tr><td>Browser reading list</td><td>Everything it does, synced with your account</td><td>None</td><td>No</td></tr>
<tr><td>Instapaper</td><td>Unlimited saves, folders, sync, 5 notes a month</td><td>$5.99 a month or $59.99 a year</td><td>Yes</td></tr>
<tr><td>Readwise Reader</td><td>30-day trial only</td><td>$9.99 a month billed yearly, $12.99 monthly</td><td>Yes</td></tr>
<tr><td>Raindrop.io</td><td>Unlimited bookmarks, collections and devices</td><td>Pro, yearly about 20% cheaper than monthly</td><td>Yes</td></tr>
<tr><td>Wallabag</td><td>Self-hosted, all features</td><td>€11 a year hosted</td><td>Yes</td></tr>
</tbody>
</table>

<h2>The habit matters more than the app</h2>

<p>My Pocket archive had hundreds of unread items in it, and the shutdown was the first time I looked at them. Almost none were worth reading a year on. The app was never the problem; the missing habit was.</p>

<p>Two rules fixed it. Anything unread after thirty days is archived, no exceptions and no guilt, because if you did not want it in a month you did not want it. And every save gets a reason — one tag or one line about why — which makes the item findable later and cuts reflexive saving by more than half. Pick whichever app above suits you, then set those two rules on day one. The queue is only useful if it empties.</p>`,
};
