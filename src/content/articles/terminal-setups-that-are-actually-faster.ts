import type { Article } from "@/content/types";

export const terminalSetupsThatAreActuallyFaster: Article = {
  slug: "terminal-setups-that-are-actually-faster",
  title: "Terminal Setups That Are Actually Faster",
  excerpt:
    "Most terminal customisation makes your prompt prettier and your shell slower. These are the changes that measurably saved time over three months.",
  category: "developer-software",
  author: "priya-raman",
  tags: ["Developer Software", "Developer Tools", "Productivity"],
  publishedAt: "2026-06-16",
  image: "/images/articles/terminal-setups-that-are-actually-faster.webp",
  imageAlt: "A dark desk setup lit by a single warm rim light",
  seoTitle: "Terminal Setups That Are Actually Faster",
  seoDescription:
    "Which terminal and shell changes measurably save time, which just add startup latency, and how to tell the difference on your own machine.",
  quickAnswer:
    "Four changes account for nearly all the benefit: fuzzy history search, directory jumping, a fast file finder, and a prompt that costs nothing. Everything else is aesthetics — enjoyable, but do not confuse it with speed.",
  pros: [
    "Fuzzy history search pays for itself within a day",
    "Directory jumping removes a constant small friction",
    "All of these work in any shell",
  ],
  cons: [
    "Plugin frameworks routinely add hundreds of milliseconds to startup",
    "Git-aware prompts are slow in large repositories",
    "A heavily customised shell is painful on someone else's machine",
  ],
  faqs: [
    {
      question: "Does shell startup time really matter?",
      answer:
        "If you open a shell fifty times a day, 400ms is twenty seconds daily and a perceptible lag every single time. It is not about the total; it is that the delay lands exactly when you are trying to start something.",
    },
    {
      question: "Which shell should I use?",
      answer:
        "The one you already use. Every improvement here works in bash, zsh and fish. Switching shells is a much larger change than any of these and buys much less.",
    },
  ],
  content: `<p>Terminal customisation has a measurement problem: it feels productive, so nobody checks whether it is. We timed ours.</p>

<h2>Measure first</h2>

<p>Before changing anything, find out what your shell currently costs:</p>

<pre><code>for i in $(seq 1 10); do
  /usr/bin/time -f "%e" $SHELL -i -c exit
done 2&gt;&amp;1 | sort -n | tail -1</code></pre>

<p>Under 100ms is fine. Over 300ms is a lag you can feel. Ours was 780ms, almost entirely one plugin framework and a git-aware prompt.</p>

<h2>The four that earned their place</h2>

<h3>1. Fuzzy history search</h3>

<p>Binding reverse history search to a fuzzy finder is the single highest-value change available. Most commands you run, you have run before — usually with a slight variation. Typing three characters from the middle of a command you ran last Tuesday and getting it back is transformative, and it takes one line of configuration.</p>

<h3>2. Directory jumping</h3>

<p>A tool that learns your frequent directories and lets you jump by fragment removes dozens of small navigations a day. <code>cd</code> with a full path is a thing you should almost never type again.</p>

<h3>3. A fast file finder</h3>

<p>A modern recursive finder that respects <code>.gitignore</code> is both faster than <code>find</code> and, more importantly, returns results you actually want. The default of "everything, including node_modules" is what makes <code>find</code> feel slow.</p>

<h3>4. A prompt that costs nothing</h3>

<p>Here is the trap. A git-aware prompt runs git commands on every single prompt render. In a small repository that is a few milliseconds. In a large one with a cold cache it can be hundreds — every time you press enter.</p>

<blockquote>
<p>If your prompt shows git status, measure it inside your largest repository, not your dotfiles repository. That is where you will actually feel it.</p>
</blockquote>

<p>Either use a prompt that computes git state asynchronously, or show less. We show branch name only, and stopped noticing the difference within a week.</p>

<h2>What we removed</h2>

<table>
<thead>
<tr><th>Removed</th><th>Startup saved</th><th>Missed?</th></tr>
</thead>
<tbody>
<tr><td>Plugin framework</td><td>~410ms</td><td>No — kept four plugins directly</td></tr>
<tr><td>Synchronous git prompt</td><td>~180ms</td><td>No</td></tr>
<tr><td>Version-manager auto-init</td><td>~150ms</td><td>Slightly — now lazy-loaded</td></tr>
<tr><td>Aliases nobody used</td><td>0ms</td><td>No — but the config got readable</td></tr>
</tbody>
</table>

<p>Final startup: 94ms, from 780ms. The subjective difference is larger than the number suggests, because the lag used to land at the exact moment of starting work.</p>

<h2>The portability rule</h2>

<p>One habit worth keeping: everything above should be a convenience, never a requirement. If your muscle memory only works on your own machine, every server you SSH into becomes slower than it was before you started customising. Keep the aliases; do not build a workflow that cannot survive a plain shell.</p>`,
};
