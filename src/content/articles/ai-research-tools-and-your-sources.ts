import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-08-19 (old text deleted
 * 2026-09-29, not restored). Palak's own facts (chat, 2026-10-01): he uses
 * ChatGPT on the free account and Claude Pro with web search for client
 * questions; on one Claude answer he opened all 5 cited links and 2 did not
 * hold up, one page not containing the claim and one quoting a price the vendor
 * had changed. The citation mechanics are from Anthropic's web search tool doc,
 * read 2026-10-01 (cited_text up to 150 characters, page_age field).
 */
export const aiResearchToolsAndYourSources: Article = {
  slug: "ai-research-tools-and-your-sources",
  title: "Checking the Sources an AI Research Tool Cites",
  excerpt:
    "A research answer for a client came back with 5 citations. One page did not contain the claim, another quoted a price the vendor had already changed. Here is what a citation actually proves.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "ChatGPT", "Research", "Citations", "Client work"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-10-01",
  seoTitle: "What an AI Citation Actually Proves",
  seoDescription:
    "Of 5 links cited in one research answer, 2 did not hold up. What a citation is made of, and the two ways it goes wrong on client work.",
  content: `
<p>Five cited links, two of them wrong. That was one research answer on a client question, and it is the reason I stopped treating a list of sources as a finished job.</p>

<h2>What I found when I checked</h2>
<p>I use both for client questions: ChatGPT on the free account, and Claude Pro with web search on. On one client answer from Claude I opened all 5 of the links it cited, and 2 of them did not hold up. One page did not contain the claim at all. Another quoted a price the vendor had already changed. Nothing in the answer looked wrong, the sentences were calm and the links were real links, which is why I now open every one before I put anything in front of a client.</p>

<h2>What a citation actually carries</h2>
<p>Anthropic's documentation for its web search tool explains what gets attached to an answer. Each citation carries the source URL, its title, and up to 150 characters of the cited content. Search results also carry a <code>page_age</code> field, described as when the site was last updated.</p>
<p>So the link is the address of a page that was in the search results. The quoted fragment is short, and it is the part the model saw when it wrote the sentence. Reading that fragment tells you the sentence had a basis. It does not tell you the page still says that today, or that the fragment meant what it appears to mean in the middle of the page it came from.</p>

<h2>The two ways it goes wrong on real work</h2>
<p>The first is a link that points at the right site and the wrong fact. A vendor's documentation covers twenty features on one long page, the model attaches the page, and the specific claim it made is nowhere on it. That one is easy to catch if you open the link and search the page for the number.</p>
<p>The second is worse for the kind of articles I write, because the page is correct and old. A price from last year sits on a URL that has not changed. The answer repeats it in the present tense, and unless you know the vendor moved its prices, nothing in the answer looks stale. A date on the source is the only defence I have found, and the date has to be the day I actually read it.</p>

<h2>What I do now</h2>
<p>For anything a client will see, I open every cited link and search the page for the exact number or phrase. If the claim is a price or a limit, I take it from the vendor's own page and write down the date I read it. If a link does not load, the claim goes out of the draft rather than in with a hedge.</p>
<p>That sounds slow for 5 links. It is faster than explaining to a client why a number in my document is a year out of date. I keep the two assistants for different jobs, which I wrote about in <a href="/articles/chatgpt-vs-claude-for-coding">ChatGPT vs Claude for coding</a>, and I treat both the same way on anything checkable.</p>
`,
  faqs: [
    {
      question: "Does a citation mean the answer is correct?",
      answer:
        "It means the model had a source in front of it when it wrote that sentence. Of the 5 links in the answer I checked, 2 did not support what the answer said.",
    },
    {
      question: "How much of the source does the tool quote?",
      answer:
        "Anthropic's web search documentation says a citation carries up to 150 characters of the cited content, along with the URL and the page title.",
    },
    {
      question: "How do you spot an out-of-date price?",
      answer:
        "Open the vendor's own pricing page and read it yourself, then record the date you read it. A cited page can be correct and a year old at the same time.",
    },
  ],
  humanReview: {
    experience:
      "I use both for client questions: ChatGPT on the free account, and Claude Pro with web search on. On one client answer from Claude I opened all 5 of the links it cited, and 2 of them did not hold up. One page did not contain the claim at all. Another quoted a price the vendor had already changed. Nothing in the answer looked wrong, the sentences were calm and the links were real links, which is why I now open every one before I put anything in front of a client.",
    reviewedAt: "2026-10-01",
  },
  sources: [
    {
      title: "Web search tool",
      publisher: "Anthropic",
      url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool",
      checkedAt: "2026-10-01",
    },
  ],
};
