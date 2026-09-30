import type { Article } from "@/content/types";

/**
 * Short take, rewritten on the URL first published 2026-09-14 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-09-30): Gemini in Chrome side panel only, no auto browse; a page summary
 * took 20 to 30 seconds; it could not act on the page, so he did forms and price
 * comparison himself; he is in India; he has not used Atlas. Auto browse
 * availability is from Google's plans page.
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
  contentUpdatedAt: "2026-09-30",
  seoTitle: "AI Browsers After Atlas: Gemini in Chrome",
  seoDescription:
    "Gemini's side panel in Chrome summarised pages in 20 to 30 seconds but could not act on them. Where auto browse fits, and who can get it.",
  content: `
<p>I have not used ChatGPT Atlas. The AI I have used inside a browser is Gemini in Chrome, and here is what it did.</p>

<p>I used Gemini in Chrome only through its side panel, not auto browse. It summarised the page I was on in about 20 to 30 seconds. It could not act on the page, so when I needed to fill in a form or compare prices across shops, I did that part myself. I am in India, and in my use the side panel only read pages for me.</p>

<h2>The part I did not switch on</h2>
<p>Google's plans page lists Chrome auto browse for Google AI Pro and Ultra subscribers, available in the US and India (checked 30 September 2026). That is the feature that clicks and types for you. Google says it pauses to ask before purchases, social media posts and sign-ins.</p>
<p>Google's announcement calls auto browse a preview and names the chores it is meant for: planning travel, filling in forms and shopping. Two of those are the jobs I did by hand while the side panel was open. It gave me the summary, and then I went through the forms and the shop pages myself.</p>
<p>I have not tried auto browse. If you want Gemini to fill the form for you, that is the feature to look at. If you only want to read pages faster, the side panel did that for me.</p>

<h2>What an agent that clicks is like</h2>
<p>I have used one: Perplexity Comet. It was slow, it asked for confirmation often, and I stopped it before every payment. I wrote that up in <a href="/articles/should-you-let-an-ai-agent-use-your-browser">should you let an AI agent use your browser</a>. Read it before you turn on auto browse on a profile that is signed in to your email.</p>
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
