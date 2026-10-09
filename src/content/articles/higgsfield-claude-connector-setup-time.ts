import type { Article } from "@/content/types";

/**
 * Explainer with FAQ. Palak's facts (chat, 2026-10-09): he connected Higgsfield
 * to the Claude app (claude.ai) as a connector; first setup took 30 to 40
 * minutes; he then made a video straight from Claude, it came out perfect,
 * and the video was 5 minutes long. His one downside was the setup time.
 * He did not say how the 5-minute video was assembled, so the article does not.
 * Vendor claims are from Higgsfield's blog post dated 2026-05-08, read 2026-10-09.
 */
export const higgsfieldClaudeConnectorSetupTime: Article = {
  slug: "higgsfield-claude-connector-setup-time",
  title: "Higgsfield as a Claude Connector: 30 to 40 Minutes to Set Up",
  excerpt:
    "Higgsfield says connecting it to Claude takes about a minute. Mine took 30 to 40 minutes. After that I made a 5-minute video straight from the Claude app.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Higgsfield", "Claude", "Connectors", "AI Video"],
  publishedAt: "2026-10-09",
  seoTitle: "Higgsfield as a Claude Connector: Real Setup Time",
  seoDescription:
    "Higgsfield says the Claude connector takes about a minute. Mine took 30 to 40 minutes, then I made a 5-minute video from the Claude app.",
  sources: [
    {
      title: "Generate AI Videos From Claude with Higgsfield MCP",
      publisher: "Higgsfield",
      url: "https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP",
      checkedAt: "2026-10-09",
    },
  ],
  content: `<p>Higgsfield's own post says the Claude connector takes about a minute to set up. Mine took 30 to 40 minutes.</p>

<p>I connected Higgsfield to the Claude app on claude.ai. The first setup took me 30 to 40 minutes. After that I made a video straight from Claude, and it came out perfect. The finished video was 5 minutes long. The setup time is the only real downside I found. Once it was connected, I did not need to leave Claude to get the video.</p>

<h2>What the vendor says</h2>
<p>Higgsfield's post (dated 8 May 2026, read on 9 October 2026) gives five steps. Open Settings, then Connectors in Claude. Add a custom connector named Higgsfield. Click Connect and sign in to your Higgsfield account. Set the read and write permissions to Always Allow. Then describe the video you want in a new chat.</p>
<p>The same post says new accounts get free credits, and that clips run up to 15 seconds. My finished video was 5 minutes long, so the 15-second figure is a limit on single clips, not on what you end up with.</p>

<h2>Before you start</h2>
<p>Keep your Higgsfield login to hand, because step three asks you to sign in. The post suggests Always Allow on read and write permissions so Claude does not ask for approval on every request. Its example first prompt is a 5-second shot, so start with something short and check the result before you ask for more.</p>

<h2>Where my 30 to 40 minutes went</h2>
<p>I can give you the total, not a breakdown. Five steps that take a minute on paper took me 30 to 40 minutes, so plan for half an hour the first time and treat anything faster as a bonus.</p>

<h2>What you get after that</h2>
<p>You ask Claude for the video from the Claude app, and you do not need to open Higgsfield to get it.</p>
<p>Credits are the other thing to watch. On Higgsfield's free plan, <a href="/articles/higgsfield-free-credits-one-video">10 credits went on a single video generation</a>, so check your balance before you plan a long video.</p>`,
  faqs: [
    {
      question: "Where do I add the Higgsfield connector in Claude?",
      answer:
        "Open Settings, then Connectors, then Add custom connector. Higgsfield's post gives https://mcp.higgsfield.ai as the address.",
    },
    {
      question: "How long does the setup take?",
      answer:
        "Higgsfield's post says about a minute. My first setup took 30 to 40 minutes.",
    },
  ],
  humanReview: {
    experience:
      "I connected Higgsfield to the Claude app on claude.ai. The first setup took me 30 to 40 minutes. After that I made a video straight from Claude, and it came out perfect. The finished video was 5 minutes long. The setup time is the only real downside I found. Once it was connected, I did not need to leave Claude to get the video.",
    reviewedAt: "2026-10-09",
  },
};
