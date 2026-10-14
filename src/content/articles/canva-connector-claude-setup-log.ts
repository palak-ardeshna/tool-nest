import type { Article } from "@/content/types";

/**
 * How-to/setup log, to differ from the explainer/gotcha layout of the last
 * article. Palak's facts (chat, 2026-10-14): connected the Canva connector
 * to Claude on claude.ai; setup took under 10 minutes; used it to make a
 * social media graphic/post design; the connector could not pull up the
 * specific Canva template he wanted, so he had to fall back to a generic
 * one. Setup steps verified via WebFetch of claude.com/docs/connectors/
 * getting-started, 2026-10-14.
 */
export const canvaConnectorClaudeSetupLog: Article = {
  slug: "canva-connector-claude-setup-log",
  title: "Connecting Canva to Claude: My Setup Log",
  excerpt:
    "Setup took under 10 minutes. The graphic it made was fine, but it couldn't pull up the specific template I wanted, so I used a generic one instead.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Canva", "Connectors", "Design"],
  publishedAt: "2026-10-14",
  seoTitle: "Connecting Canva to Claude: Setup Log",
  seoDescription:
    "I connected the Canva connector to Claude in under 10 minutes and made a social media graphic. It couldn't find the specific template I wanted.",
  content: `<p>I connected the Canva connector to Claude on claude.ai to make a social media graphic. Setup took under 10 minutes. The part that didn't work: Claude couldn't pull up the specific Canva template I had in mind, so I ended up with a generic one instead. The design it produced was usable, just not built on the template I wanted.</p>

<h2>What I did, step by step</h2>
<ol>
<li>Went to Customise, then Connectors, on claude.ai.</li>
<li>Selected Discover and searched for Canva, then opened its listing.</li>
<li>Selected Connect to Claude.</li>
<li>Signed in to my Canva account in the same tab, reviewed what Claude was asking to access, and approved it.</li>
<li>Canva showed up under Your connectors as Connected. This whole part took under 10 minutes.</li>
<li>In a new chat, I selected the + in the message box, opened Connectors, and made sure Canva's toggle was on.</li>
<li>I asked Claude to make a social media post design using a specific template I had in mind from my Canva account.</li>
</ol>

<h2>Where it broke</h2>
<p>Claude couldn't find or use that specific template. It generated the graphic with a generic layout instead of the one I'd asked for. I didn't dig further into why the specific one couldn't be found, I just worked with what it gave me.</p>

<h2>Pros and cons of this approach</h2>
<ul>
<li><strong>Pro:</strong> connecting took under 10 minutes, with no manual server setup needed on claude.ai.</li>
<li><strong>Pro:</strong> I could ask for the graphic directly in a Claude chat, without opening Canva first.</li>
<li><strong>Con:</strong> it couldn't use the specific template I wanted, so the result came from a generic one.</li>
<li><strong>Con:</strong> Claude asks to allow each Canva action individually unless you set it to always allow, which adds a click per request.</li>
</ul>

<p>If you're picking between AI design tools generally rather than just this connector, I compared a wider set in <a href="/articles/how-to-choose-an-ai-image-generator">how to choose an AI image generator</a>.</p>`,
  pros: [
    "Setup took under 10 minutes on claude.ai, no manual server config",
    "Can ask for a design directly from a Claude chat",
  ],
  cons: [
    "Couldn't pull up the specific Canva template I wanted",
    "Each Canva action needs an allow click unless set to always allow",
  ],
  sources: [
    {
      title: "Connectors: Getting Started",
      publisher: "Anthropic",
      url: "https://www.claude.com/docs/connectors/getting-started",
      checkedAt: "2026-10-14",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-14",
    experience:
      "I connected the Canva connector to Claude on claude.ai to make a social media graphic. Setup took under 10 minutes. The part that didn't work: Claude couldn't pull up the specific Canva template I had in mind, so I ended up with a generic one instead. The design it produced was usable, just not built on the template I wanted.",
  },
};
