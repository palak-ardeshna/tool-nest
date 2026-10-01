import type { Article } from "@/content/types";

/**
 * Setup log with pros and cons, rewritten on the URL first published 2026-08-11
 * (old text deleted 2026-09-29, not restored). Not a roundup: Palak used only
 * Claude Pro in the browser on React work, and the article says so. His own
 * facts (chat, 2026-10-01): Tailwind layout work plus one state bug that took
 * roughly 1 hour; he kept nearly all the code and rewrote a few lines; it broke
 * components that already worked and put hooks or browser code in server
 * components. The server and client component rules are from the installed Next
 * 16.3.1 docs (node_modules/next/dist/docs), read 2026-10-01.
 */
export const bestAiCodingToolsForReactDevelopers: Article = {
  slug: "best-ai-coding-tools-for-react-developers",
  title: "One AI Tool, My React Code: What It Got Wrong Twice",
  excerpt:
    "A state bug on this site took roughly 1 hour with Claude Pro, and I rewrote only a few of its lines. Both of its real mistakes were the same kind of mistake.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["React", "Next.js", "Claude", "Tailwind", "Server Components"],
  publishedAt: "2026-08-11",
  contentUpdatedAt: "2026-10-01",
  seoTitle: "AI on React Code: Where It Goes Wrong",
  seoDescription:
    "Claude Pro on this site's React code: a state bug closed in roughly 1 hour, a few lines rewritten, and two structural mistakes worth knowing about.",
  pros: [
    "Usable code on the first pass for Tailwind layout work, with only a few lines of mine on top",
    "Reads a pasted error and a pasted component together, which is most of what fixing a state bug needs",
    "No install, no editor setup, nothing to configure before the first question",
  ],
  cons: [
    "Changes components that already work while fixing a different one",
    "Puts hooks and browser code in components that run on the server, which the framework rejects",
    "Has no view of the rest of the project, so it cannot see what a change breaks two files away",
  ],
  content: `
<p>I used Claude Pro in the browser on this site's React code, for Tailwind layout work and for one state bug that took me roughly 1 hour to close. I kept nearly all of what it wrote; a few lines were mine. The two things it got wrong were both structural. It changed components that already worked while fixing something else, and it put hooks and browser code inside components that run on the server, which Next.js will not allow.</p>
<p>This is one tool on one codebase, so treat it as a log rather than a roundup. I have not run the editor extensions people compare in these articles.</p>

<h2>The server and client rule it keeps forgetting</h2>
<p>In the App Router, which this site uses on Next 16.3.1, layouts and pages are Server Components by default. The documentation that ships with the package is specific about what belongs on the client: state and event handlers such as <code>onClick</code> and <code>onChange</code>, lifecycle logic such as <code>useEffect</code>, browser-only APIs such as <code>localStorage</code> and <code>window</code>, and custom hooks. Anything in that list needs a Client Component.</p>
<p>That is the line the model walks over. The code it hands back looks like ordinary React, because it is ordinary React, and in a server file it fails. The same docs note that importing a third-party component that uses client-only features straight into a Server Component produces an error, because the framework cannot tell from the import that the component needs the browser.</p>
<p>Once you know the rule, the fix is mechanical and takes seconds. The cost is that you have to know the rule, which means the tool is fastest for people who could have written the code anyway.</p>

<h2>Layout work went better than logic</h2>
<p>For Tailwind classes and layout, the first answer was usually close enough to keep. Styling is self-contained: a wrong class shows up in the browser immediately, and nothing two files away depends on it. That is why a few lines of mine were enough on top.</p>
<p>State was slower, and the hour went mostly on narrowing down which render was the problem rather than on typing. The useful part was pasting the component and the error into the same message. The part I had to supply was which behaviour was correct in the first place.</p>

<h2>When a fix brings changes I did not ask for</h2>
<p>The habit that costs me most is the one where a fix arrives with unrequested changes to code that worked. A model in a browser tab sees the file you pasted and nothing else, so it rewrites freely and cannot know that a prop it renamed is read somewhere else. On a small site I catch it, because the tests fail or the page looks wrong. On a large codebase I would not want to find out that way.</p>
<p>So I paste narrowly now, one component at a time, and I read the diff before I save it. The same habit applies to the free account I open more often for code, and <a href="/articles/chatgpt-vs-claude-for-coding">this comparison of the two</a> explains why I open that one.</p>
`,
  humanReview: {
    experience:
      "I used Claude Pro in the browser on this site's React code, for Tailwind layout work and for one state bug that took me roughly 1 hour to close. I kept nearly all of what it wrote; a few lines were mine. The two things it got wrong were both structural. It changed components that already worked while fixing something else, and it put hooks and browser code inside components that run on the server, which Next.js will not allow.",
    reviewedAt: "2026-10-01",
  },
  sources: [
    {
      title: "Server and Client Components (Next 16.3.1 documentation, shipped in the package)",
      publisher: "Vercel",
      url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
      checkedAt: "2026-10-01",
    },
  ],
};
