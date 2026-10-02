import type { Article } from "@/content/types";

/**
 * Short explainer, rewritten on the URL first published 2026-09-14 (old text
 * deleted 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): has used draw.io and made 2 or 3 diagrams with it; the trouble was
 * export and sharing. He has not used Excalidraw, tldraw, Whimsical, FigJam or
 * Miro, so none is reviewed, and the old title's list of six tools is not what
 * this covers. Export formats and their stated trade-offs are from draw.io's own
 * export documentation, read 2026-10-02. Plain sections, no blocks: one finding
 * and one number.
 */
export const whiteboardAndDiagramToolsWorthOpening: Article = {
  slug: "whiteboard-and-diagram-tools-worth-opening",
  title: "Three Diagrams in draw.io, and Export Was the Hard Part",
  excerpt:
    "I made 2 or 3 diagrams and the drawing was never the problem. Getting them out of the tool in a form someone else could use was.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["draw.io", "Diagrams", "Export", "Documentation"],
  publishedAt: "2026-09-14",
  contentUpdatedAt: "2026-09-23",
  seoTitle: "draw.io: Export Is the Part That Bites",
  seoDescription:
    "I made 2 or 3 diagrams in draw.io. Drawing was easy, export and sharing was not. Which format to pick, and the one that stays editable.",
  content: `
<p>I have used draw.io and made 2 or 3 diagrams with it. Drawing them was straightforward. The part that gave me trouble was getting them out: export and sharing. That is the whole of my experience with it, and it is a small amount, so treat this as one finding rather than a review.</p>

<p>I have not used Excalidraw, tldraw, Whimsical, FigJam or Miro. The old version of this page named all six. One tool and three diagrams is what I actually have, so that is what is here.</p>

<h2>Why export is harder than it looks</h2>
<p>A diagram has to be two things at once: a picture someone needs to read, and a document somebody later needs to change. Those two wants pull in opposite directions.</p>
<p>If you export a picture, it is easy to share and nobody can edit it, including you in six months when the architecture has moved on. If you keep the editable file, the person you are sending it to needs the tool to open it. Most of my difficulty was moving between those two positions without noticing I had moved.</p>
<p>And the formats are not interchangeable. draw.io's export documentation, read on 2 October 2026, is blunt about the trade-offs. On PNG it says "Raster: blurry when scaled up; large files at high zoom". On JPEG it says "Lossy compression; no transparency; never use for sharp text/lines", which is exactly what a diagram is made of. On GIF: "Limited to 256 colours; large file size at high resolution". For printing it notes that using PNG means "quality at print resolution requires uncomfortably large files".</p>
<p>So the default thing people do, screenshot or export a PNG and paste it somewhere, is the option the documentation warns about for text and lines. I did that, and the result looked fine on my screen and soft everywhere else.</p>

<h2>The feature I should have used from the start</h2>
<p>draw.io can embed the diagram data inside the exported file, so the file is both the picture and the source.</p>
<p>Its documentation lists PNG, SVG and PDF as formats that can carry the diagram data for reopening in the editor, so the file will "drop back into draw.io". That solves the problem I described above: the recipient sees an image, and anyone who needs to change it opens the same file in the tool and edits it. No separate source file to keep track of, and no diagram that becomes read-only the moment you export it.</p>
<p>For sharp text and lines, SVG is the format that does not blur, and it can carry the data too. PNG is the safe choice when something will not accept SVG, and worth exporting at a higher zoom than you think you need, given the documentation's warning about scaling.</p>

<h2>What the format list is actually telling you</h2>
<p>The export list is longer than most people use: draw.io documents PNG, JPEG, WebP, SVG, PDF, HTML, XML, JSON and a URL-encoded version of the diagram.</p>
<p>Those are not nine ways to do the same thing. XML and JSON are the diagram as data, which is what you want if something else is going to read or generate it. HTML and the URL version are for putting a diagram somewhere without a file at all. PDF is the one to use when it will be printed, and the documentation notes a crop option for PDF export, which matters because a diagram on a page is usually surrounded by empty space you did not intend to print.</p>
<p>For transparency, the documentation lists PNG, SVG and GIF as supporting a transparent background and says JPEG does not. If you are putting a diagram on a coloured slide or a dark page, that single line decides your format.</p>

<h2>What I would tell someone starting</h2>
<p>Decide before you draw whether this diagram is a picture or a document. If anyone will ever need to change it, including you, export in a format that carries the source and keep only that one file. Two diagrams in, I had a PNG in a document and an editable file somewhere else, and they had already drifted apart. It is the same split I ran into with design files in <a href="/articles/figma-alternatives-worth-considering">Figma and Canva</a>, where the useful output was the numbers rather than the thing the tool wanted to hand me.</p>
<p>And with 2 or 3 diagrams behind me I am not the person to tell you which whiteboard tool to choose. What I can tell you is that the comparison I needed was about what happens to the file afterwards, and none of the comparisons I read were about that.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I have used draw.io and made 2 or 3 diagrams with it. Drawing them was straightforward. The part that gave me trouble was getting them out: export and sharing. That is the whole of my experience with it, and it is a small amount, so treat this as one finding rather than a review. I have not used Excalidraw, tldraw, Whimsical, FigJam or Miro.",
  },
  sources: [
    {
      title: "Export your diagram from draw.io",
      publisher: "draw.io",
      url: "https://www.drawio.com/doc/faq/export-diagram",
      checkedAt: "2026-10-02",
    },
  ],
};
