import type { Article } from "@/content/types";

/**
 * Comparison, rewritten on the URL first published 2026-08-19 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): has used Figma and Canva; Figma took a full day before he could
 * produce anything useful; he hit both the file and the editor limit on the free
 * plan; reading designs for code, the spacing and colour values are usable and
 * the generated code is not. He has not used Penpot or any other Figma
 * alternative, so none is reviewed here and the alternatives list says so.
 * Plan contents and seat prices are from Figma's pricing page, read 2026-10-02.
 */
export const figmaAlternativesWorthConsidering: Article = {
  slug: "figma-alternatives-worth-considering",
  title: "I Use Figma for Numbers and Canva for the Rest",
  excerpt:
    "Figma cost me a day to learn and I hit its free file and editor limits. As a developer I read spacing and colours off it, and ignore the code.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Figma", "Canva", "Design Tools", "Developer Handoff"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-08-27",
  seoTitle: "Figma or Canva: What I Use Each One For",
  seoDescription:
    "Figma took me a day to learn and I hit its free file and editor limits. What a developer actually gets from it, and where Canva is the easier tool.",
  quickAnswer:
    "If you are a developer reading someone else's design, Figma is worth the day it takes to learn, because the spacing and colour values are exactly what you need and you can read them straight off the canvas. If you are making a graphic, a banner or a social post, Canva gets you there without the learning day. I have not used Penpot or the other open source alternatives, so I cannot tell you where they land.",
  alternatives: [
    {
      name: "Canva",
      url: "https://www.canva.com",
      note: "What I use for graphics and posts. No learning day, and far less tool to understand",
    },
    {
      name: "Penpot",
      url: "https://penpot.app",
      note: "The open source alternative people recommend. I have not used it, so this is a pointer and not a review",
    },
    {
      name: "Browser dev tools",
      note: "For reading spacing and colours off something already built, this is free and already open",
    },
  ],
  content: `
<p>I have used Figma and Canva. Figma took me a full day before I could produce anything useful in it, and on the free plan I hit 2 limits, one on files and one on editors. What I actually get out of it as a developer is the spacing and the colour values, which I can read off and use. The code it generates I cannot use; when I have copied it, I have rewritten it anyway.</p>

<p>Most comparisons of design tools are written for designers. I am on the other side of the handoff, so this one is written from there.</p>

<h2>The day it takes before you get anything</h2>
<p>A full day is a real cost, and it never appears in the comparison tables.</p>
<p>Figma is not hard so much as large. Frames, auto layout, constraints, components, variants, and a right hand panel that changes depending on what you clicked. None of it is unreasonable, and all of it has to go into your head before the tool stops fighting you. I spent a day on that before I made anything I would show anyone.</p>
<p>If you are opening it once a month to check a screen, you will pay that day and then forget most of it between visits. That was the thing that sent me to Canva for everything that was not a UI screen. Canva asked me for no day at all, and for a banner or a post it does not need to.</p>

<h2>What a developer takes off a design</h2>
<p>This is the part I would have liked someone to tell me before I started treating Figma as a code source.</p>
<p>The spacing and the colour values are the useful output. A gap of 24, a colour of #1E40AF, a font size, a border radius. I click the element, read the number, and put it in my stylesheet. That exchange works perfectly and it is most of what I need from a design file.</p>
<p>The code it hands you is a different matter. Every time I have copied generated markup or styles out of a design tool, I have rewritten it before it shipped: class names that mean nothing in my codebase, absolute positioning where I want flow, nested wrappers that exist because of how the file was drawn rather than how the page should work. It describes the picture accurately and says nothing about the structure I actually want. I ran into the same pattern with AI generated React in <a href="/articles/best-ai-coding-tools-for-react-developers">where AI coding tools go wrong</a>: plausible output, wrong shape, faster to write myself.</p>
<p>So I stopped asking for code and started treating the file as a specification: read the numbers, write the markup myself. It takes less time than it sounds and it comes out right.</p>

<h2>Where the free plan stops</h2>
<p>I hit both the file limit and the editor limit on Figma's free Starter plan, which is what made me look at alternatives in the first place.</p>
<p>Figma's pricing page, read on 2 October 2026, lists Starter as including unlimited drafts, UI kits and templates, and 150 AI credits a day up to 500 a month. Paid seats are priced by type: on Professional, $16 a month for a full seat, $12 for a dev seat and $3 for a collab seat. The two tiers above Professional are billed annually and cost more per seat.</p>
<p>The dev seat is worth knowing about if your use is mine. It is cheaper than a full seat and it is aimed at exactly the job I described above, reading a file rather than drawing in it. Check what it includes against what you do before you pay for a full seat you will use to copy numbers out of.</p>

<h2>What I would suggest</h2>
<p>Decide which side of the handoff you are on first, because it changes the answer completely. Drawing UI screens, and doing it often enough to keep the tool in your head: Figma, and accept the day. Reading someone else's screens to build them: Figma again, but look at the dev seat rather than the full one. Making a graphic, a banner or a post: Canva, and skip the day entirely.</p>
<p>And if the free limits are what brought you here, the honest answer from me is that I moved the non-UI work to Canva rather than finding a true Figma replacement. People recommend Penpot. I have not used it, and I am not going to tell you about a tool I have not opened.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I have used Figma and Canva. Figma took me a full day before I could produce anything useful in it, and on the free plan I hit 2 limits, one on files and one on editors. What I actually get out of it as a developer is the spacing and the colour values, which I can read off and use. The code it generates I cannot use; when I have copied it, I have rewritten it anyway.",
  },
  sources: [
    {
      title: "Figma plans and pricing",
      publisher: "Figma",
      url: "https://www.figma.com/pricing/",
      checkedAt: "2026-10-02",
    },
  ],
};
