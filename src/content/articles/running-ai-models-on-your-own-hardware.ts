import type { Article } from "@/content/types";

/**
 * Setup log with pros and cons, rewritten on the URL first published 2026-09-04
 * (old text deleted 2026-09-29, not restored). Palak's own facts (chat,
 * 2026-10-01): Ollama on his Linux laptop, NVIDIA GPU in the 4 GB VRAM class,
 * small models of about 3B to 4B parameters, used for writing, summarising,
 * code questions and simply checking it runs; answers clearly worse than the
 * hosted assistants, and the laptop heats up and fills its memory. GPU support
 * facts are from Ollama's GPU documentation, read 2026-10-01; that page carries
 * no VRAM table, so none is quoted.
 */
export const runningAiModelsOnYourOwnHardware: Article = {
  slug: "running-ai-models-on-your-own-hardware",
  title: "A 4 GB Laptop GPU Runs a Local Model. It Does Not Replace One",
  excerpt:
    "Ollama runs on my laptop's entry-level NVIDIA card and answers from a 3B model. The answers are worse than the hosted plans, and the machine heats up while I sit there doing nothing else.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Ollama", "Local models", "Linux", "NVIDIA", "Hardware"],
  publishedAt: "2026-09-04",
  contentUpdatedAt: "2026-10-01",
  seoTitle: "Local Models on a 4 GB Laptop GPU: What You Get",
  seoDescription:
    "Ollama on an entry NVIDIA laptop GPU with 4 GB of VRAM: small 3B models run, answers fall behind hosted plans, and the machine gets hot.",
  pros: [
    "Nothing leaves the laptop, so a file I would not upload can still go into a prompt",
    "No usage cap and no monthly bill, which is the opposite of every hosted plan I use",
    "Works with no connection, and a small model starts answering in seconds",
  ],
  cons: [
    "Answers are clearly behind the hosted assistants on the same questions",
    "4 GB of VRAM keeps me on small models, so the better weights are not an option",
    "The laptop heats up and fills its memory while I am doing nothing else on it",
  ],
  content: `
<p>I ran models on my own laptop with Ollama. It has an NVIDIA GPU with 4 GB of VRAM, which is the entry class, so I stayed on small models of about 3B to 4B parameters. They load and they answer. The answers were clearly worse than the hosted assistants I use, and the laptop got hot and filled its memory while I was doing nothing else on it. I use it to see whether a thing runs, not to get work done.</p>

<table>
<thead><tr><th>What I gave it</th><th>What happened</th></tr></thead>
<tbody>
<tr><td>Writing and summarising</td><td>Readable, noticeably weaker than the hosted plans on the same text</td></tr>
<tr><td>Code questions</td><td>Not where I would spend the hour; I go back to the browser for these</td></tr>
<tr><td>Checking that it runs at all</td><td>This is the part it is genuinely good for</td></tr>
<tr><td>The machine, while any of the above runs</td><td>Hot, with memory filling up</td></tr>
</tbody>
</table>

<h2>The card decides the menu</h2>
<p>Ollama's documentation says it supports Nvidia GPUs with compute capability 5.0 or newer, on driver 550 and newer. That covers a lot of older hardware, including the class of card in my laptop, so "will it run" is usually yes.</p>
<p>What the card decides is which weights you can hold. With 4 GB, the models that fit comfortably are the small ones, and small is where the quality gap with a hosted model is widest. Ollama's page publishes no VRAM figure per model size, so the way to find out is to pull one and watch your memory.</p>

<h2>What it is actually for</h2>
<p>I keep it installed for privacy and independence. A document I would not paste into a browser can go into a local prompt without leaving the disk. Nothing counts against a quota, which matters to me because the plan I pay for stops me on several days a week, as I set out in <a href="/articles/which-ai-assistant-is-worth-paying-for">the comparison of the two plans I use</a>.</p>
<p>On my machine the output does not match a hosted model, and the independence is still worth the disk space.</p>

<h2>Before you buy hardware for this</h2>
<p>If the plan is to spend money on a GPU so you can stop paying a subscription, work out the sum first. A plan at $20 a month is $240 a year. A card with enough VRAM to run the bigger weights costs several times that, and it draws power, and it sits in a laptop that will throttle. My 4 GB card was already in the machine, so trying Ollama cost me an evening and nothing else, which is the right way to find out whether local models suit your work.</p>
<p>Test it on the exact job you want to move off a hosted plan, with the real file.</p>
`,
  humanReview: {
    experience:
      "I ran models on my own laptop with Ollama. It has an NVIDIA GPU with 4 GB of VRAM, which is the entry class, so I stayed on small models of about 3B to 4B parameters. They load and they answer. The answers were clearly worse than the hosted assistants I use, and the laptop got hot and filled its memory while I was doing nothing else on it. I use it to see whether a thing runs, not to get work done.",
    reviewedAt: "2026-10-01",
  },
  sources: [
    {
      title: "GPU support",
      publisher: "Ollama",
      url: "https://docs.ollama.com/gpu",
      checkedAt: "2026-10-01",
    },
  ],
};
