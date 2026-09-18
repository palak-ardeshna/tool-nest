import type { Article } from "@/content/types";

export const leavingCursorWhatMovesAndWhatDoesnt: Article = {
  slug: "leaving-cursor-what-moves-and-what-doesnt",
  title: "Leaving Cursor After the SpaceX Deal: What Moves to Windsurf, Claude Code or OpenCode, and What Does Not",
  excerpt:
    "SpaceX closed its $60 billion purchase of Cursor in August, and a lot of developers are quietly working out their exit. This is the migration checklist: which rules files each tool reads, where the MCP configuration lives, what happens to keybindings and extensions, and which questions about your code's privacy to answer before you cancel.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["AI Coding", "Developer Tools", "Migration", "Privacy"],
  publishedAt: "2026-09-17",
  image: "/images/articles/leaving-cursor-what-moves-and-what-doesnt.webp",
  imageAlt: "Two open cardboard boxes on a pale surface against a plain white wall",
  seoTitle: "Leaving Cursor: What Moves and What Doesn't",
  seoDescription:
    "Cursor to Windsurf, Claude Code or OpenCode after the SpaceX deal: what carries over in rules, MCP config and keybindings, and what to check on privacy.",
  quickAnswer:
    "Less moves than you fear and more than the vendors advertise. Your project rules are the easy part: every one of the four tools now reads a plain AGENTS.md file, so convert your .cursor/rules once and you are portable for good. MCP server definitions copy across with a rename — .cursor/mcp.json becomes .mcp.json for Claude Code or a block in opencode.json — because the underlying format is the same JSON. Keybindings and extensions move to Windsurf, which is another VS Code fork, and do not exist to move for the two terminal tools. What does not move is anything Cursor has already seen: read its privacy policy for what it retains and for how long, and remember that cancelling the subscription does not cancel the data.",
  pros: [
    "AGENTS.md is now read by Cursor, Windsurf, Claude Code and OpenCode, so one rules file works everywhere",
    "MCP configuration is the same JSON shape in every tool; only the filename and location change",
    "Windsurf is a VS Code fork like Cursor, so settings, keybindings and most extensions carry over",
    "Claude Code and OpenCode sit alongside any editor, including Cursor itself, so you can migrate gradually",
  ],
  cons: [
    "Cursor's four rule modes do not map exactly onto anyone else's; some rules need rewriting",
    "Windsurf itself was rebranded as Devin Desktop this summer, so its file paths are mid-transition",
    "The terminal tools have no equivalent of Cursor's inline Tab completion",
    "Nothing you do on your machine changes what Cursor already stored on its side",
  ],
  alternatives: [
    { name: "Windsurf (Devin Desktop)", url: "https://docs.devin.ai/desktop/cascade/memories", note: "The closest like-for-like: a VS Code fork with an agent panel. Rules in .devin/rules or .windsurf/rules; reads AGENTS.md." },
    { name: "Claude Code", url: "https://code.claude.com/docs/en/security", note: "Terminal agent from Anthropic. Rules in CLAUDE.md, MCP in .mcp.json. Works inside any editor's terminal." },
    { name: "OpenCode", url: "https://opencode.ai/docs/rules/", note: "Open-source terminal agent, bring your own model. Reads AGENTS.md and falls back to CLAUDE.md." },
    { name: "Stay on Cursor", url: "https://cursor.com/pricing", note: "Individual $20, Teams $40 per user. Team-wide privacy mode is a Teams feature; check what the current policy says it covers." },
  ],
  faqs: [
    {
      question: "Do I actually need to leave?",
      answer:
        "That is a judgement about the owner, not the editor, and I am not going to make it for you. What I would say is that the product has changed hands and the pricing page already reflects it — Grok models and a Grok Bot now feature in the plan descriptions — so the terms you originally agreed to are worth re-reading whether or not you move. The migration steps below are useful either way: a portable AGENTS.md and a portable MCP file mean the next acquisition, whoever it is, costs you an afternoon rather than a month.",
    },
    {
      question: "What happens to code Cursor has already processed?",
      answer:
        "Read the privacy policy rather than a forum thread. When I checked, Cursor's policy — last updated 6 October 2025 — said inputs and suggestions are not used to train its models or shared with third parties for training unless flagged for security review, and that data is retained only as long as needed to operate the service; it did not mention SpaceX or xAI. Reporting since the deal has raised questions about whether the training terms have changed. I could not verify those claims against Cursor's own published documentation, so my advice is procedural: read the policy on the day you leave, use the account deletion route if you want retention to end, and keep a dated copy of what the policy said.",
    },
    {
      question: "Which tool is most like Cursor?",
      answer:
        "Windsurf, without much competition. It is a VS Code fork with an agent panel, so your muscle memory, keybindings and extensions survive. It was bought by Cognition in 2025 and rebranded as Devin Desktop this June, which is why its documentation now lives under devin.ai and its preferred rules folder is .devin/rules, with .windsurf/rules kept as a fallback. Claude Code and OpenCode are terminal programs and feel different, but many people run them inside the Cursor terminal for a month before deciding, which is the least disruptive way to find out.",
    },
  ],
  sources: [
    {
      title: "SpaceX to acquire the AI coding startup Cursor for $60 billion",
      publisher: "CNBC",
      url: "https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html",
      checkedAt: "2026-09-16",
    },
    {
      title: "Cursor pricing",
      publisher: "Cursor",
      url: "https://cursor.com/pricing",
      checkedAt: "2026-09-16",
    },
    {
      title: "Cursor privacy policy",
      publisher: "Cursor",
      url: "https://cursor.com/privacy",
      checkedAt: "2026-09-16",
    },
    {
      title: "Rules — Cursor documentation",
      publisher: "Cursor",
      url: "https://cursor.com/docs/context/rules",
      checkedAt: "2026-09-16",
    },
    {
      title: "Memories and rules — Devin Desktop documentation",
      publisher: "Cognition",
      url: "https://docs.devin.ai/desktop/cascade/memories",
      checkedAt: "2026-09-16",
    },
    {
      title: "Rules — OpenCode documentation",
      publisher: "OpenCode",
      url: "https://opencode.ai/docs/rules/",
      checkedAt: "2026-09-16",
    },
    {
      title: "Security — Claude Code documentation",
      publisher: "Anthropic",
      url: "https://code.claude.com/docs/en/security",
      checkedAt: "2026-09-16",
    },
  ],
  content: `<p>SpaceX announced its all-stock, $60 billion agreement to buy Anysphere, the company behind Cursor, on 16 June 2026, four days after its own flotation. The deal closed on 14 August. Since then the question in my inbox has not been "is Cursor still good" — it is — but "how much of my setup is stuck there if I want to go". So this is not a review of the alternatives. I covered <a href="/articles/best-ai-coding-tools-for-react-developers">the coding tools themselves</a> earlier this year. This is the checklist of what actually has to move, drawn from each tool's current documentation.</p>

<h2>What is in a Cursor setup</h2>

<p>Strip it down and a Cursor installation has six things that are yours: project rules, MCP server definitions, editor settings and keybindings, extensions, a billing relationship, and a history of what the tool has seen. The first four are files on your disk and move with varying degrees of friction. The fifth is a cancellation. The sixth is the one people forget, and I will come to it last.</p>

<table>
<thead>
<tr><th>What</th><th>Cursor</th><th>Windsurf / Devin Desktop</th><th>Claude Code</th><th>OpenCode</th></tr>
</thead>
<tbody>
<tr><td>Project rules</td><td><code>.cursor/rules/*.mdc</code> or <code>AGENTS.md</code></td><td><code>.devin/rules/*.md</code>, <code>.windsurf/rules/*.md</code>, or <code>AGENTS.md</code></td><td><code>CLAUDE.md</code></td><td><code>AGENTS.md</code>, falls back to <code>CLAUDE.md</code></td></tr>
<tr><td>Global rules</td><td>User rules in settings</td><td><code>global_rules.md</code>, 6,000-character limit</td><td><code>~/.claude/CLAUDE.md</code></td><td><code>~/.config/opencode/AGENTS.md</code>, falls back to <code>~/.claude/CLAUDE.md</code></td></tr>
<tr><td>MCP servers</td><td><code>.cursor/mcp.json</code></td><td>MCP config file in the app's settings folder</td><td><code>.mcp.json</code> in the project; user scope in <code>~/.claude.json</code></td><td><code>opencode.json</code></td></tr>
<tr><td>Keybindings, settings, extensions</td><td>VS Code format</td><td>VS Code format — imports</td><td>None; runs in your terminal</td><td>None; runs in your terminal</td></tr>
<tr><td>Inline Tab completion</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
</tbody>
</table>

<h2>Step one: rules — convert once to AGENTS.md</h2>

<p>Cursor's project rules live in <code>.cursor/rules</code> as <code>.mdc</code> files, each with frontmatter that sets one of four modes: always apply, apply when the agent judges it relevant, apply to files matching a pattern, or apply only when mentioned by name. That is a richer model than most, and it is the part that does not translate cleanly.</p>

<p>The way out is the file every tool now agrees on. Cursor's own documentation describes <code>AGENTS.md</code> as a supported alternative to structured rules. Devin Desktop's documentation lists it too, with a useful convention: an <code>AGENTS.md</code> at the workspace root behaves as always-on and one in a subdirectory behaves as a glob rule for that directory. OpenCode reads <code>AGENTS.md</code> first and falls back to <code>CLAUDE.md</code> if there is none. Claude Code reads <code>CLAUDE.md</code>, and a one-line <code>CLAUDE.md</code> that says "read AGENTS.md" is a common bridge.</p>

<p>So the migration is: take every always-on rule and put its content in a root <code>AGENTS.md</code>; take every path-scoped rule and put it in an <code>AGENTS.md</code> in that path; and turn the "agent decides" and "manual" rules into short sections with a heading that says when they apply. You lose a little precision. You gain a rules file that survives the next three acquisitions. Mind the size limits if you go via Devin Desktop's own rules folder: 12,000 characters per workspace file and 6,000 for global rules.</p>

<h2>Step two: MCP servers — same JSON, new address</h2>

<p>If you have connected Cursor to a database, an issue tracker or a documentation server through the Model Context Protocol, the definitions are in <code>.cursor/mcp.json</code> at the repository root. The good news is that MCP is a standard and every tool consumes essentially the same object: a server name, a command or URL, arguments and environment variables.</p>

<p>For Claude Code, the project-level file is <code>.mcp.json</code> in the repository root, with a user-level scope in <code>~/.claude.json</code> for servers you want everywhere. For OpenCode, servers go in a block inside <code>opencode.json</code>. Devin Desktop keeps an MCP configuration file in its own settings folder — the location has moved with the rebrand, so check the current documentation rather than a six-month-old blog post. In each case you are copying the same entries and adjusting the wrapper, which takes minutes. The one thing to redo rather than copy is any API key you had pasted into the file in plain text; a migration is a good moment to move those into environment variables.</p>

<h2>Step three: keybindings, settings and extensions</h2>

<p>Cursor is a fork of VS Code. So is Windsurf, whatever its name is this month. That means your <code>settings.json</code>, <code>keybindings.json</code> and snippets are in the same format and Windsurf offers to import them on first launch; where it does not, copying the files across works. Extensions mostly carry over too, with one wrinkle that applies to both forks: they cannot legally use Microsoft's extension marketplace and rely on Open VSX instead, so an extension that was missing in Cursor will be missing in Windsurf as well.</p>

<p>For Claude Code and OpenCode there is nothing to migrate, because they are not editors. They run in a terminal — including the terminal inside Cursor or VS Code — and your editor stays whatever it was. This is the least disruptive path if you are unsure: install one, run it in a split pane for a fortnight, and notice which one you reach for. I did roughly that <a href="/articles/which-tickets-to-give-an-ai-coding-agent">for a week with a coding agent</a> and the findings still hold. What you will not get from either is inline Tab completion in the editor; if that is the Cursor feature you would miss most, Windsurf is your answer, not a terminal tool.</p>

<h2>Step four: billing</h2>

<p>Cursor's pricing page at the time of writing lists Hobby (free), Individual at $20 a month, Teams at $40 per user, and Enterprise on request. Cancel from the account dashboard, and check whether you are on an annual plan, in which case you are paying for the remainder anyway and can migrate at leisure. If you are on Teams, note that "team-wide privacy mode" is listed as a Teams feature: the administrator who set it up is the person who should confirm what it covers before the account closes.</p>

<h2>Step five: the part that does not move</h2>

<p>Everything above concerns files on your machine. None of it touches what Cursor has already processed on its side, and that is where the acquisition actually matters.</p>

<p>Here is what I can verify. Cursor's privacy policy, last updated on 6 October 2025 when I read it, says the company does not use inputs or suggestions to train its models or allow third parties to use them for training, unless they are flagged for security review, and that personal data is kept only as long as necessary to operate the service. It does not mention SpaceX or xAI. Cursor's pricing page, meanwhile, now advertises "generous limits for Grok" and "Grok Bot access" on its plans, which tells you the xAI relationship is a product fact even if the policy has not caught up.</p>

<p>Here is what I cannot verify. Several outlets have reported that the terms around privacy mode and training data changed around the time the deal closed. I could not confirm those reports against Cursor's published policy text, so I am not going to repeat them as fact. What I would do instead is procedural:</p>

<ol>
<li>Read the privacy policy and the security page on the day you leave, and save a dated copy.</li>
<li>Check the privacy mode setting on every machine and note what the current documentation says it guarantees.</li>
<li>If you want retention to end rather than lapse, use the account deletion route rather than just cancelling the subscription.</li>
<li>If you are on Teams or Enterprise, ask your account contact in writing what happens to stored data and get the answer in writing.</li>
</ol>

<p>That is the same advice I would give for any tool that has changed hands, and I would have given it about Cursor's competitors too; Windsurf's own change of owner is why its file paths are in flux. The habit is worth more than the specific answer.</p>

<h2>What I would do</h2>

<ul>
<li><strong>You want the least change:</strong> Windsurf. Import settings, convert rules to <code>AGENTS.md</code>, copy MCP entries, done in an afternoon.</li>
<li><strong>You want out of the editor-fork business altogether:</strong> Claude Code or OpenCode inside plain VS Code, and pick between them by model preference; my <a href="/articles/chatgpt-vs-claude-for-coding">comparison of the assistants for coding</a> is the place to start on that.</li>
<li><strong>You are not sure:</strong> run a terminal agent in Cursor's own terminal for two weeks and make the decision on evidence.</li>
<li><strong>Whatever you decide:</strong> write the <code>AGENTS.md</code> anyway. It is the one piece of this that makes the next migration free.</li>
</ul>`,
};
