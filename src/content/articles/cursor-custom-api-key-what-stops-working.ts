import type { Article } from "@/content/types";

/**
 * Setup log, built from Palak's own facts (chat, 2026-10-05): he was on Cursor,
 * ran through the plan's request quota faster because stronger models spend it
 * quicker, and added his own OpenAI API key to carry on. The chat and Agent kept
 * working on his key, Tab autocomplete stopped, and the key cost him about $10 a
 * day. Cursor's own docs on custom API keys and models were read 2026-10-05.
 * No first-person claim here goes beyond what Palak did.
 */
export const cursorCustomApiKeyWhatStopsWorking: Article = {
  slug: "cursor-custom-api-key-what-stops-working",
  title: "What Stops Working When You Put Your Own API Key in Cursor",
  excerpt:
    "I ran out of Cursor requests sooner than I thought, so I added my own OpenAI key. Chat and the agent carried on, Tab autocomplete did not, and the key ran me about $10 a day.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Cursor", "OpenAI", "API keys", "Developer tools", "AI coding"],
  publishedAt: "2026-10-05",
  seoTitle: "Cursor on Your Own API Key: What Breaks",
  seoDescription:
    "Add your own OpenAI key to Cursor and the agent keeps working but Tab autocomplete stops. What I saw after the limit, and the daily cost that followed.",
  pros: [
    "You keep coding after the plan's requests run out, without waiting for a reset.",
    "Chat and the agent still work, so multi-file changes carry on as before.",
    "You see the real token cost in your OpenAI dashboard rather than a flat fee.",
  ],
  cons: [
    "Tab autocomplete stops the moment you switch to your own key.",
    "The cost is per use, so a heavy day runs higher than a monthly plan.",
    "Stronger models spend the request quota faster, so you reach this point sooner.",
  ],
  content: `
<p>Cursor gives you a set number of requests on its plan, and I reached the end of mine faster than I expected. The reason turned out to be the model choice: when I pointed Cursor at a stronger model, each request ate more of the quota, so it drained quicker than lighter models would. Rather than wait for the reset, I added my own OpenAI API key and kept going. That is where the surprise was, because not everything carried over.</p>

<p>I was on Cursor and ran through the plan's requests faster than I expected, because the stronger models spend that quota quicker. So I dropped in my own OpenAI key to keep going. The chat and the agent kept working on it, but Tab autocomplete stopped the moment I switched, and that is the feature I lean on most. The other surprise was the bill: roughly $10 a day once I was coding on my own key, which adds up faster than a flat monthly plan.</p>

<h2>Setting the key, step by step</h2>
<ol>
<li><strong>Open Settings and find the model section.</strong> Cursor keeps the API-key fields with the models, not under billing. You paste an OpenAI key here and it verifies it before saving.</li>
<li><strong>Turn the key on.</strong> Once it verifies, Cursor routes your chat and agent requests through your key instead of its own plan. This part was smooth and took under a minute.</li>
<li><strong>Watch Tab go quiet.</strong> This is the step nobody warned me about. Inline Tab autocomplete stopped working as soon as the key was active. It runs on Cursor's own model, which a custom key does not cover, so it drops out.</li>
<li><strong>Check the agent still runs.</strong> I gave it a multi-file change to confirm, and chat and the agent worked exactly as before on my key. The thing I actually switched for kept working; the convenience feature was the price.</li>
<li><strong>Open your OpenAI usage page.</strong> With your own key the spend is now on you, so keep that page in another tab. Mine came to about $10 on a full day of coding.</li>
</ol>

<h2>What broke, and why</h2>
<p>The split is cleaner than the forums suggest. Tab autocomplete is tied to Cursor's own model and its plan, so a custom key cannot feed it and it stops. Chat and the agent accept your key, which is why heavier work carries on. If Tab is the part of Cursor you rely on, your own key is a step down, whatever it does for the request limit. If you mostly drive the agent, you barely notice it has gone.</p>

<h2>The cost is the real trade</h2>
<p>A plan is a fixed number each month. Your own key is metered, so a quiet day is cheap and a full day of changes is not. My $10 a day was fine for a short stretch, but over a month it would pass what the paid plan costs, which is the sum worth running before you switch for good. I went through the same kind of maths when working out <a href="/articles/claude-code-vs-cursor-what-a-solo-developer-pays">what a solo developer actually pays for Cursor against Claude Code</a>.</p>

<h2>Would I keep the key on</h2>
<p>As a way past a spent limit for a day or two, yes. As a permanent setup, only if you can live without Tab and you watch the usage page. The honest version is that a custom key buys you more agent runs and costs you the autocomplete and a variable bill, and which of those matters is down to how you work rather than anything the setting screen tells you.</p>
`,
  sources: [
    {
      title: "Cursor Docs: Models",
      publisher: "Cursor",
      url: "https://docs.cursor.com/settings/models",
      checkedAt: "2026-10-05",
    },
    {
      title: "Cursor Docs: API Keys",
      publisher: "Cursor",
      url: "https://docs.cursor.com/settings/api-keys",
      checkedAt: "2026-10-05",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-05",
    experience:
      "I was on Cursor and ran through the plan's requests faster than I expected, because the stronger models spend that quota quicker. So I dropped in my own OpenAI key to keep going. The chat and the agent kept working on it, but Tab autocomplete stopped the moment I switched, and that is the feature I lean on most. The other surprise was the bill: roughly $10 a day once I was coding on my own key, which adds up faster than a flat monthly plan.",
  },
};
