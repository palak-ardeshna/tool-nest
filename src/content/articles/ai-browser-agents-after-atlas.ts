import type { Article } from "@/content/types";

/**
 * Short take, rewritten on the URL first published 2026-09-14 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-09-30): Gemini in Chrome side panel only, no auto browse; a page summary
 * took 20 to 30 seconds; it could not act on the page, so he did forms and price
 * comparison himself; he is in India; he has not used Atlas. He used the side
 * panel on technical documentation and on product and price pages (chat,
 * 2026-10-02). Auto browse availability is from Google's plans page.
 */
export const aiBrowserAgentsAfterAtlas: Article = {
  slug: "ai-browser-agents-after-atlas",
  title: "AI Browsers After Atlas: What Gemini in Chrome's Side Panel Did for Me",
  excerpt:
    "I have not used ChatGPT Atlas. I used Gemini's side panel in Chrome: page summaries in 20 to 30 seconds, and no help with the clicking.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Gemini", "Chrome", "AI Browsers", "Atlas"],
  publishedAt: "2026-09-14",
  contentUpdatedAt: "2026-09-22",
  seoTitle: "AI Browsers After Atlas: Gemini in Chrome",
  seoDescription:
    "Gemini's side panel in Chrome summarised pages in 20 to 30 seconds but could not act on them. Where auto browse fits, and who can get it.",
  content: `
<p>I have not used ChatGPT Atlas. The AI I have used inside a browser is Gemini in Chrome, and here is what it did.</p>

<p>I used Gemini in Chrome only through its side panel, not auto browse. It summarised the page I was on in about 20 to 30 seconds. It could not act on the page, so when I needed to fill in a form or compare prices across shops, I did that part myself. I am in India, and in my use the side panel only read pages for me.</p>

<h2>The two kinds of page I kept it open on</h2>
<p>I did not use it everywhere. It earned its place on two kinds of page, and only one of those worked out.</p>
<p>The first was technical documentation. Vendor docs, API pages, changelogs. These are long, they bury the one limit or default I came for, and the page is written to be complete rather than quick. A summary in 20 to 30 seconds is faster than my own scroll. I still opened the section it pointed at and read the exact wording, because a summary of a pricing table is not a pricing table. On docs the side panel saved me the hunt. I still did the reading.</p>
<p>The second was product and price pages, and there it did much less for me. I can read a shop page perfectly well. The trouble is that the answer lives across four tabs: this shop, that shop, the one with the delivery charge buried at checkout, the one whose stated price is for a different variant. A summary of the page I am already looking at does not help with that. To compare, something has to visit the other pages, hold the numbers side by side and tell me which total is lower. The side panel cannot visit anything. So I kept doing the comparison myself, in tabs, the way I did before I had it.</p>
<p>On a long document it is a time saver. On a buying decision it reads one page out of the four that matter, and the work that was slow stays slow.</p>

<h2>The part I did not switch on</h2>
<p>Google's plans page lists Chrome auto browse for Google AI Pro and Ultra subscribers, available in the US and India (checked 30 September 2026). That is the feature that clicks and types for you. Google says it pauses to ask before purchases, social media posts and sign-ins.</p>
<p>Google's announcement calls auto browse a preview and names the chores it is meant for: planning travel, filling in forms and shopping. Two of those are the jobs I did by hand while the side panel was open. It gave me the summary, and then I went through the forms and the shop pages myself.</p>
<p>I have not tried auto browse. If you want Gemini to fill the form for you, that is the feature to look at. If you only want to read pages faster, the side panel did that for me.</p>

<h2>What an agent that clicks is like</h2>
<p>I have used one: Perplexity Comet. I gave it around ten jobs. Three or four of them it finished without me stepping in. The rest I had to confirm, correct or redo. It was slow, it asked for confirmation often, and I stopped it before every payment. I wrote that up in <a href="/articles/should-you-let-an-ai-agent-use-your-browser">should you let an AI agent use your browser</a>. Read it before you turn on auto browse on a profile that is signed in to your email.</p>
<p>Those numbers are worth holding next to the side panel. A tool that reads the page and hands me a summary either helps or it does not, and when it fails I have lost 30 seconds. A tool that clicks can finish the job, and when it fails it has done something to a form, an inbox or a cart that I now have to go and check. Six of ten needing my hand is fine for reading. For acting, it means I am supervising anyway, which was most of the work.</p>

<h2>Who this is actually for</h2>
<p>If your day has long documents in it, turn the side panel on. It is the cheapest version of this to try, it is already in Chrome, and 20 to 30 seconds per page is a real saving when the page is 4,000 words of vendor documentation.</p>
<p>If what you want is for the browser to do the clicking, the side panel is not that and will disappoint you. Auto browse is the feature to look at, it needs a paid Google AI plan, and going by my Comet run you should expect to watch it work rather than walk away from it. I have not tried auto browse, so I cannot tell you where it lands. I can tell you that the version of this I have used reads well and acts not at all, and that knowing which half you need decides whether any of it is worth switching on.</p>
`,
  humanReview: {
    reviewedAt: "2026-09-30",
    experience:
      "I used Gemini in Chrome only through its side panel, not auto browse. It summarised the page I was on in about 20 to 30 seconds. It could not act on the page, so when I needed to fill in a form or compare prices across shops, I did that part myself. I am in India, and in my use the side panel only read pages for me.",
  },
  sources: [
    {
      title: "Google AI plans",
      publisher: "Google",
      url: "https://one.google.com/about/google-ai-plans/",
      checkedAt: "2026-09-30",
    },
    {
      title: "Chrome auto browse announcement",
      publisher: "Google",
      url: "https://blog.google/products-and-platforms/products/chrome/gemini-3-auto-browse/",
      checkedAt: "2026-09-30",
    },
  ],
};
