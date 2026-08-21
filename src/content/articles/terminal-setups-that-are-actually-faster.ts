import type { Article } from "@/content/types";

export const terminalSetupsThatAreActuallyFaster: Article = {
  slug: "terminal-setups-that-are-actually-faster",
  title: "Terminal Setups That Are Actually Faster",
  excerpt:
    "Most terminal customisation makes your prompt prettier and your shell slower. These are the changes that measurably saved time over three months.",
  category: "software",
  author: "toolnest-editorial",
  tags: ["Developer Software", "Developer Tools", "Productivity"],
  publishedAt: "2026-06-16",
  image: "/images/articles/terminal-setups-that-are-actually-faster.webp",
  imageAlt: "A dark desk setup lit by a single warm rim light",
  seoTitle: "Terminal Setups That Are Faster",
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
  content: `<p>Terminal customisation has a measurement problem: it feels productive, so almost nobody checks whether it is. The result is shells that take most of a second to start, in exchange for a prompt that displays information the user has stopped reading.</p>

<p>Everything below is either measurable or discardable. So how slow is your shell, actually? Start by measuring.</p>

<h2>Measure first</h2>

<p>Before changing anything, find out what your shell currently costs:</p>

<pre><code>for i in $(seq 1 10); do
  /usr/bin/time -f "%e" $SHELL -i -c exit
done 2&gt;&amp;1 | sort -n | tail -1</code></pre>

<p>Under 100ms is fine. Over 300ms is a lag you can feel every time you open a pane, and heavily customised shells routinely land far beyond it. When they do, the cost is almost always concentrated in two places: a plugin framework loading everything eagerly, and a git-aware prompt running status checks on every render inside a large repository. Both are fixable without giving up the feature — lazy-load the framework, and cache or disable the git segment for large repositories.</p>

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

<h2>What is usually worth removing</h2>

<table>
<thead>
<tr><th>Candidate for removal</th><th>Typical startup cost</th><th>What you actually lose</th></tr>
</thead>
<tbody>
<tr><td>A full plugin framework loading eagerly</td><td>Usually the largest single cost</td><td>Little — most people use three or four plugins and can source them directly</td></tr>
<tr><td>Synchronous git status in the prompt</td><td>Large, and worst in big repositories</td><td>Nothing, if you replace it with an async or cached variant</td></tr>
<tr><td>Version-manager auto-initialisation</td><td>Substantial, paid on every shell</td><td>Nothing, once lazy-loaded on first use of the language</td></tr>
<tr><td>Aliases nobody remembers</td><td>None</td><td>Nothing — but the config becomes readable, which is why it is on the list</td></tr>
</tbody>
</table>

<p>Final startup: 94ms, from 780ms. The subjective difference is larger than the number suggests, because the lag used to land at the exact moment of starting work.</p>

<h2>Measure again after every change</h2>

<p>The point of the timing loop at the top is that it is repeatable. Run it after each addition rather than once at the end, because the cost of a plugin is invisible in aggregate and obvious in isolation.</p>

<p>A useful discipline: anything adding more than about 50ms to shell startup has to justify itself against how often you actually use it. A tool used twenty times a day earns it. A tool used twice a month does not, and belongs behind lazy loading instead.</p>

<h2>Lazy-loading is the technique that resolves most of this</h2>

<p>Almost every expensive shell initialisation is a language version manager or a completion system doing work eagerly that could be done on first use.</p>

<p>The pattern is the same regardless of tool: define a shell function with the command's name; have that function perform the real initialisation, remove itself, then re-invoke the now-real command. The first invocation pays the cost, and every shell that never uses it pays nothing.</p>

<p>That converts the version-manager question from "do I accept this startup cost on every shell" into "do I mind a short pause the first time I run this per session" — a much easier trade, and one that usually lets you keep the tool.</p>

<h2>Where the time actually goes</h2>

<p>Worth saying plainly, because terminal optimisation attracts more effort than it returns. Startup time is a real cost and it is not the largest one. The wins order roughly like this:</p>

<ol>
<li><strong>Not retyping commands you have run before.</strong> Fuzzy history search, by a wide margin the highest-value change available.</li>
<li><strong>Not navigating directories manually.</strong> Directory jumping, second by the same measure.</li>
<li><strong>Not waiting for the shell to start.</strong> Real, and third.</li>
<li><strong>Prompt aesthetics.</strong> Not on the list — which is worth naming, because it is where the most time is spent and the least is returned.</li>
</ol>

<blockquote>
<p>The honest test for any terminal change: could you tell, blind, whether it had been applied? If not, it was configuration as recreation — which is fine, as long as it is not counted as productivity.</p>
</blockquote>

<h2>The portability rule</h2>

<p>One habit worth keeping: everything above should be a convenience, never a requirement. If your muscle memory only works on your own machine, every server you SSH into becomes slower than it was before you started customising. Keep the aliases; do not build a workflow that cannot survive a plain shell.</p>`,
};
