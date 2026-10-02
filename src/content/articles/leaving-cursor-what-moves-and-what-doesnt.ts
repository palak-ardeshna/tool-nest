import type { Article } from "@/content/types";

/**
 * Comparison, rewritten on the URL first published 2026-09-17 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): used Cursor for 2 to 3 months, then moved to Claude Code; what did
 * not come with him was the AI inside the editor (inline edit and tab completion)
 * and his chat history and context. He has not used Windsurf or OpenCode, so
 * neither is reviewed. Claude Code's surfaces, and the VS Code extension's
 * inline diffs and in-editor conversation history, are from Claude Code's own
 * documentation read 2026-10-02, which means part of what he missed may be
 * recoverable; the article says so rather than leaving the gap uncorrected.
 */
export const leavingCursorWhatMovesAndWhatDoesnt: Article = {
  slug: "leaving-cursor-what-moves-and-what-doesnt",
  title: "2 to 3 Months on Cursor. Two Things Did Not Move",
  excerpt:
    "The files and the project came across without trouble. The in-editor AI and my chat history did not, and only one of those is unavoidable.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Cursor", "Claude Code", "Editors", "Migration"],
  publishedAt: "2026-09-17",
  contentUpdatedAt: "2026-09-25",
  seoTitle: "Cursor to Claude Code: What Did Not Move",
  seoDescription:
    "I used Cursor for 2 to 3 months then moved to Claude Code. The in-editor AI and chat history did not come with me. One of those has an answer.",
  quickAnswer:
    "Your code, your repo and your project settings move without effort, because none of them belonged to the editor. What does not move is the AI living inside your editor and your past conversations. On the second one there is nothing to do: history does not transfer between tools. On the first, Claude Code has a VS Code extension that puts inline diffs and conversation history in the editor, so if that is what you are missing, check it before concluding the workflow is gone. Tab-style autocomplete is a different thing and not what Claude Code does.",
  content: `
<p>I used Cursor for 2 to 3 months and then moved to Claude Code. Two things did not come with me. The AI inside the editor, the inline edit and the tab completion, which is where I had been doing most of the work. And the chat history and context from my old sessions, which did not transfer at all. Everything else about the move was fine.</p>

<p>I have not used Windsurf or OpenCode, so this is one move and not a survey of the alternatives.</p>

<h2>What moved and what did not</h2>
<table>
<thead><tr><th>Thing</th><th>Moved?</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Code, repo, branches</td><td>Yes</td><td>None of it ever belonged to the editor</td></tr>
<tr><td>Project config and instructions</td><td>Mostly, after rewriting</td><td>The files are yours; the format differs</td></tr>
<tr><td>Inline edit and tab completion</td><td>No</td><td>A different kind of tool, see below</td></tr>
<tr><td>Chat history and context</td><td>No</td><td>Conversations do not transfer between products</td></tr>
<tr><td>Time on Cursor before leaving</td><td>2 to 3 months</td><td></td></tr>
</tbody>
</table>

<h2>The in-editor part, which I had half wrong</h2>
<p>I had assumed moving to Claude Code meant leaving the editor and working in a terminal. Reading the documentation properly says otherwise, and this is worth correcting because it was the main thing I thought I had given up.</p>
<p>Claude Code's own overview, read on 2 October 2026, describes it as "Available in your terminal, IDE, desktop app, and browser", and says the VS Code extension "provides inline diffs, @-mentions, plan review, and conversation history directly in your editor". So inline diffs and conversation history inside the editor are not something you have to do without.</p>
<p>What is genuinely different is tab completion. The grey text that appears ahead of your cursor as you type is a separate kind of feature from an agent that reads a codebase, plans and edits files. The documentation describes Claude Code as a tool that "reads your codebase, edits files, runs commands", which is a different kind of interaction rather than a smaller version of the same one. If you have built your typing rhythm around tab completion, that rhythm is the thing to expect to lose, and it is a real loss rather than a preference.</p>
<p>Of the two things I missed, one had an answer I had not gone looking for. The other does not have one.</p>

<h2>Chat history does not move, and that is worth planning for</h2>
<p>Nothing carries your old conversations across. Every explanation of why the code is the way it is stays in the tool you are leaving.</p>
<p>Which means the decisions discussed in chat and never written down anywhere else are gone, and in my experience that is a surprising amount: why a library was chosen, what was tried and rejected, what a confusing function is actually for. None of that was in the repo, because the chat felt like somewhere it lived.</p>
<p>The lesson I took is to stop treating a chat window as a record. If an explanation matters, it belongs in the repo, in a comment or a project instructions file, where it survives any tool change. That is the same reason a project-level instructions file is worth keeping current: it is the part of your context that is yours rather than the vendor's.</p>

<p>There is a detail in the documentation that helps with exactly this. It describes <code>CLAUDE.md</code> as a file you add to your project root that is read at the start of every session, for coding standards, architecture decisions and preferred libraries, and says that a repository which already has an <code>AGENTS.md</code> for other coding agents can be read instead or alongside it. So the context that matters is a file in your repo, which means it survives the next move as well as this one.</p>

<h2>What I would do before switching</h2>
<p>Write down what you actually use the current tool for, specifically, before you move. I would have said "the AI in the editor", and that turned out to be two separate things with two separate answers, one of which was solved by an extension I had not installed.</p>
<p>Then get anything that matters out of the chat and into files, while you can still read it. Allow an evening for rewriting instruction and config files, since the content transfers and the format does not.</p>
<p>And be honest about cost separately from features. I went from Cursor's free tier to something I pay for, and I wrote about what that actually costs in <a href="/articles/claude-code-vs-cursor-what-a-solo-developer-pays">Claude Code vs Cursor</a>. Switching for the workflow and switching for the bill are different decisions, and mixing them makes both harder to think about.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I used Cursor for 2 to 3 months and then moved to Claude Code. Two things did not come with me. The AI inside the editor, the inline edit and the tab completion, which is where I had been doing most of the work. And the chat history and context from my old sessions, which did not transfer at all. Everything else about the move was fine.",
  },
  sources: [
    {
      title: "Claude Code overview",
      publisher: "Anthropic",
      url: "https://code.claude.com/docs/en/overview",
      checkedAt: "2026-10-02",
    },
  ],
};
