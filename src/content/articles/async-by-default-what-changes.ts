import type { Article } from "@/content/types";

export const asyncByDefaultWhatChanges: Article = {
  slug: "async-by-default-what-changes",
  title: "Async by Default: What Actually Changes",
  excerpt:
    "Going async is usually described as fewer meetings. In practice it is a writing problem, a decision-making problem, and only incidentally a calendar problem.",
  category: "productivity",
  author: "toolnest-editorial",
  tags: ["Remote Work", "Workflows", "Productivity"],
  publishedAt: "2026-05-05",
  image: "/images/articles/async-by-default-what-changes.webp",
  imageAlt: "A quiet home desk beside a large window in bright daylight",
  seoTitle: "Async by Default: What Changes",
  seoDescription:
    "What working asynchronously really requires — written decisions, explicit deadlines and a much higher standard of writing — and what it costs.",
  quickAnswer:
    "Async work is not fewer meetings; it is the same decisions made in writing. That trade is worth it when your team spans time zones and actively harmful when it does not, because writing a decision costs more than saying it out loud.",
  pros: [
    "Decisions become searchable, which compounds over years",
    "People in unfavourable time zones stop being second-class participants",
    "Reduces the tax of context switching for focused work",
  ],
  cons: [
    "Ambiguous questions take days instead of minutes",
    "Requires a genuinely higher standard of writing from everyone",
    "Disagreement is much harder to resolve in a thread",
  ],
  faqs: [
    {
      question: "When is a meeting still the right call?",
      answer:
        "Disagreement, ambiguity, and anything emotionally loaded. A thread makes disagreement worse — people restate positions rather than converge. Twenty minutes on a call ends it.",
    },
    {
      question: "What is the first thing to change?",
      answer:
        "Write decisions down, with the reasoning. Not minutes — the decision, who made it, and why. Everything else in async work depends on that existing.",
    },
  ],
  content: `<p>"Async by default" gets sold as a calendar reform. It is not. The meetings were where decisions happened; removing them without replacing that function just moves the confusion somewhere less visible.</p>

<h2>What actually has to change</h2>

<h3>Decisions get written down, with reasoning</h3>

<p>Not meeting minutes. A short record: what was decided, by whom, and why — including what was considered and rejected.</p>

<p>The reasoning is the part people skip and the part that matters. Six months later, "we chose X" invites someone to re-open it. "We chose X because Y, and rejected Z because W" either settles it or gives the person a specific thing to argue with.</p>

<blockquote>
<p>A decision log is the single artefact that makes async work possible. Everything else is logistics. If someone asked today why your team chose its current stack, could anyone answer without calling a meeting?</p>
</blockquote>

<h3>Questions get a deadline</h3>

<p>Synchronously, a question gets an answer in the meeting. Asynchronously, a question with no deadline can sit for four days while everyone assumes someone else is handling it.</p>

<p>Every question needs: who specifically is being asked, by when, and what happens if there is no reply. That last one matters most — "if I do not hear back by Thursday I will go with option A" converts silence into a decision instead of a block.</p>

<h3>Writing standards go up, for everyone</h3>

<p>This is the cost nobody advertises. Async work means everyone's writing is now load-bearing. A vague message in a meeting gets clarified by the next sentence; a vague message in a thread costs a day.</p>

<p>Concretely, that means: lead with the ask, state the context second, and make the specific action obvious. It is a learnable skill and it is genuinely unevenly distributed on most teams.</p>

<h2>Where async fails</h2>

<table>
<thead>
<tr><th>Situation</th><th>Async outcome</th></tr>
</thead>
<tbody>
<tr><td>Two people disagree</td><td>Threads entrench positions rather than resolving them</td></tr>
<tr><td>The problem is not yet understood</td><td>Exploration needs interruption and tangents</td></tr>
<tr><td>Something is emotionally loaded</td><td>Text removes the tone that would have defused it</td></tr>
<tr><td>Someone is new</td><td>They do not yet know what they do not know to ask</td></tr>
</tbody>
</table>

<p>The pattern: async is excellent at transmitting settled information and poor at reaching agreement. Use it for the first and call for the second.</p>

<h2>When it is worth it</h2>

<p>Spanning more than about four hours of time-zone difference is the clear case. Below that, the honest answer is that async costs more than it saves: writing a decision takes longer than saying it, and the compounding benefit of a searchable record takes a year or two to outweigh that.</p>

<p>Teams in one time zone that adopt async by default usually end up with the costs — slower questions, heavier writing burden — and none of the reason for them.</p>

<h2>The meeting that should not be removed</h2>

<p>Teams adopting async tend to cut meetings by category — all standups, all one-to-ones — when the useful cut is by function. Some meetings were transmitting information, and those convert cleanly to writing. Others were doing something writing cannot do.</p>

<table>
<thead>
<tr><th>Meeting</th><th>Was actually doing</th><th>Convert to async?</th></tr>
</thead>
<tbody>
<tr><td>Status standup</td><td>Transmitting information</td><td>Yes — a written update is strictly better, and searchable</td></tr>
<tr><td>Design or architecture review</td><td>Reaching agreement under disagreement</td><td>No — threads entrench positions</td></tr>
<tr><td>One-to-one</td><td>Detecting things nobody would write down</td><td>No, and this is the one most often wrongly cut</td></tr>
<tr><td>Sprint planning</td><td>Both — estimation is written, sequencing is negotiated</td><td>Split it</td></tr>
<tr><td>Incident response</td><td>Fast iteration under uncertainty</td><td>No, obviously</td></tr>
</tbody>
</table>

<p>The one-to-one row matters most. Its real function is surfacing things people would not put in writing — that they are stuck, bored, or about to leave. Removing it does not move that conversation into a document; it removes the conversation.</p>

<h2>The tooling matters less than people expect</h2>

<p>Async-by-default gets discussed as a tooling decision, and it mostly is not. A team with a decision log in a plain repository and clear norms about deadlines outperforms a team with an expensive knowledge platform and no norms, every time.</p>

<p>What the tool does need to do is narrow: make the decision log searchable by someone who was not there, keep it in a format that outlives the vendor, and make it obvious where a decision is <em>recorded</em> versus where it is being <em>discussed</em>. Conflating those last two is the most common tooling failure — a decision buried in a chat thread is not written down in any useful sense, because nobody will find it.</p>

<h2>How to tell whether it is working</h2>

<p>Two signals, both cheap to check after a couple of months. If you are two months into this, run them now:</p>

<ul>
<li><strong>Ask someone who joined recently to find out why a specific decision was made.</strong> If they can do it without asking a person, the log is working. If they end up in a chat channel asking "does anyone remember why", it is not.</li>
<li><strong>Count how many questions are still open after three days.</strong> A growing number means the deadline norm has not landed — and that, rather than too many meetings, is what quietly kills async teams.</li>
</ul>

<h2>The compounding part</h2>

<p>The benefit that is genuinely hard to see early: after two years, a searchable decision log means new people can answer "why is it like this?" without asking anyone. That is worth a great deal, and it is invisible for the first eighteen months, which is why most teams abandon the practice before it pays. If you want a concrete pipeline with the checkpoints baked in, <a href="/articles/weekly-publishing-workflow">our weekly publishing workflow</a> is one worked example.</p>`,
};
