import type { Article } from "@/content/types";

/**
 * Short take. Palak's facts (chat, 2026-10-09): DeepSeek Coder through Ollama,
 * terminal only, for coding; setup took about 2 to 3 hours; each reply took
 * 30 to 120 seconds; it made up a function or library that does not exist.
 * He gave no model size, hardware or function name, so none is claimed.
 * Model sizes are from the Ollama library page, read 2026-10-09.
 */
export const deepseekCoderOllamaSetupTime: Article = {
  slug: "deepseek-coder-ollama-setup-time",
  title: "DeepSeek Coder on Ollama: 3 Hours of Setup, Then a Made-Up Function",
  excerpt:
    "I set up DeepSeek Coder in Ollama for coding. It took 2 to 3 hours, each reply took 30 to 120 seconds, and one answer used a function that does not exist.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Ollama", "DeepSeek Coder", "Local models", "AI Coding"],
  publishedAt: "2026-10-09",
  seoTitle: "DeepSeek Coder on Ollama: Setup Time and Results",
  seoDescription:
    "DeepSeek Coder through Ollama in the terminal: 2 to 3 hours to set up, 30 to 120 seconds per reply, and an answer that invented a function.",
  sources: [
    {
      title: "deepseek-coder",
      publisher: "Ollama",
      url: "https://ollama.com/library/deepseek-coder",
      checkedAt: "2026-10-09",
    },
  ],
  content: `<p>I tried DeepSeek Coder through Ollama, in the terminal only, for coding. Setup took me about 2 to 3 hours, and I had no usable answer before that. Each reply then took 30 to 120 seconds. The answers were also not proper for coding: one of them used a function that does not exist. I got slow replies and a wrong answer for 2 to 3 hours of setup.</p>

<h2>The time</h2>
<p>Two to three hours is long for a tool that starts with one command.</p>
<p>Ollama lists DeepSeek Coder in three sizes on its library page (read 9 October 2026): 1.3 billion parameters at 776 MB, 6.7 billion at 3.8 GB and 33 billion at 19 GB. The size you pick decides how much memory you need, so choose it before you start.</p>

<h2>The wait</h2>
<p>A reply that takes 30 to 120 seconds makes a quick question slow. A hosted assistant gives you the answer while you are still reading the question back.</p>

<h2>The made-up function</h2>
<p>This is the real downside. The code called a function that does not exist.</p>
<p>A wrong answer after a 2-minute wait costs you the wait and the check.</p>

<h2>If you try it anyway</h2>
<p>Ollama describes the model as trained on two trillion tokens of code and natural language, and the default tag is <code>deepseek-coder:latest</code>. Name the size in the tag yourself, such as <code>deepseek-coder:6.7b</code>, so you know which one you are running.</p>
<p>Treat every function name in an answer as unchecked. Look it up in the library's own documentation before you run the code. That check is quick.</p>
<p>Time one reply on your own machine before you plan a workday around it. My 30 to 120 seconds is one person's number, from one setup.</p>

<h2>Who should try it</h2>
<p>Try it if you want to learn how local models work, or if your code cannot leave your machine. If you want working code today, a hosted tool is quicker to start. I wrote about the hardware side in <a href="/articles/running-ai-models-on-your-own-hardware">my notes on running models on a small laptop GPU</a>.</p>`,
  humanReview: {
    experience:
      "I tried DeepSeek Coder through Ollama, in the terminal only, for coding. Setup took me about 2 to 3 hours, and I had no usable answer before that. Each reply then took 30 to 120 seconds. The answers were also not proper for coding: one of them used a function that does not exist. I got slow replies and a wrong answer for 2 to 3 hours of setup.",
    reviewedAt: "2026-10-09",
  },
};
