import type { Article } from "@/content/types";

export const whiteboardAndDiagramToolsWorthOpening: Article = {
  slug: "whiteboard-and-diagram-tools-worth-opening",
  title: "Whiteboard and Diagram Tools Worth Opening: Excalidraw, tldraw, draw.io, Whimsical, FigJam and Miro",
  excerpt:
    "Most diagrams are drawn once, pasted into a document and never edited again, which changes what a diagram tool needs to be. I compared the six I actually open — two free canvases, one free diagram editor and three paid whiteboards — on what the free tiers allow, what a seat costs, and which one to use for a sketch versus a system.",
  category: "software",
  author: "parth-patel",
  tags: ["Diagrams", "Whiteboards", "Design", "Software", "Comparisons"],
  publishedAt: "2026-09-14",
  image: "/images/articles/whiteboard-and-diagram-tools-worth-opening.webp",
  imageAlt: "A desk seen from above with a keyboard, books, logo sketches, pencils and a phone",
  seoTitle: "Best Whiteboard and Diagram Tools (2026)",
  seoDescription:
    "Excalidraw, tldraw, draw.io, Whimsical, FigJam and Miro compared: free-tier limits, seat prices, and which to open for a sketch versus a system diagram.",
  quickAnswer:
    "For a quick sketch to paste into a doc or a pull request, open Excalidraw: it is free, needs no account, exports clean SVG and PNG, and the hand-drawn style signals 'this is a sketch' in a way that stops people arguing about alignment. For a diagram that has to be precise and kept — architecture, a database schema, a network — use draw.io, which is free, open source, and saves to your own Drive, OneDrive, GitHub or disk. Pay for a whiteboard only when a group needs to work on the same board live: FigJam is the cheapest way in at $3 a seat a month on Figma Professional, Miro is the most complete at $8 a member a month billed yearly, and Whimsical's $10 Pro seat is the nicest for flowcharts specifically.",
  pros: [
    "Excalidraw, tldraw and draw.io are free without an account, so a diagram never has to wait for procurement",
    "Every tool here exports SVG or PNG, so the output outlives the subscription",
    "FigJam's Collab seat means a whole team can whiteboard for a few dollars each on top of the designers' Figma plan",
  ],
  cons: [
    "Miro's free plan allows only three editable boards, which a small team fills in a week",
    "Whimsical's free tier counts objects — 50 board objects a month — so a single real flowchart uses it up",
    "Paid whiteboards are priced per editor, and the people who edit least still need a seat to move a sticky note",
  ],
  alternatives: [
    {
      name: "Excalidraw",
      url: "https://plus.excalidraw.com/pricing",
      note: "Free forever at excalidraw.com: the full editor, one scene, unlimited collaborators, export. Excalidraw+ is $6 a user a month (14% less billed annually) with a 14-day trial, adding unlimited cloud-saved scenes and folders, teams, presentations, comments, read-only links and extended AI.",
    },
    {
      name: "tldraw",
      url: "https://tldraw.com/",
      note: "A free infinite canvas in the browser with a cleaner, less sketchy look than Excalidraw, and an SDK if you want to embed a canvas in your own product.",
    },
    {
      name: "draw.io",
      url: "https://www.drawio.com/",
      note: "Free, open source under Apache 2.0, no sign-up. Saves to Google Drive, OneDrive, GitHub, Confluence or your device; desktop app available. The tool for precise, long-lived diagrams.",
    },
    {
      name: "Whimsical",
      url: "https://whimsical.com/pricing",
      note: "Free: 50 board objects and 50 doc blocks a month, watermarked exports, 7-day history. Pro $10 an editor a month billed annually removes the limits and the watermark; Business $20 adds private teams and SSO. Viewers and guests are free.",
    },
    {
      name: "FigJam",
      url: "https://www.figma.com/pricing/",
      note: "Included on Figma's free Starter plan with basic features. On paid plans it comes with the Collab seat: $3 a month on Professional, $5 on the org-level and Enterprise plans, which also covers Figma Slides and viewing design files.",
    },
    {
      name: "Miro",
      url: "https://miro.com/pricing/",
      note: "Free: three editable boards. Starter $8 a member a month billed yearly for unlimited private boards; Business $20 adds guests, unlimited workspaces and deeper integrations. AI credits are metered on every plan.",
    },
  ],
  faqs: [
    {
      question: "Excalidraw or tldraw?",
      answer:
        "Same job, different handwriting. Excalidraw's wobbly lines say 'rough draft' and its library of shapes and arrows is bigger; tldraw is cleaner and feels more like a proper canvas. Both are free without an account and export to SVG and PNG. I reach for Excalidraw for anything going into a document and tldraw when the look matters. If you are building a product that needs a canvas inside it, tldraw's SDK is the reason it exists.",
    },
    {
      question: "Is draw.io really free, with no catch?",
      answer:
        "Yes. It is open source under the Apache 2.0 licence, there is no sign-up, and the diagram file is XML you keep wherever you like — Drive, OneDrive, GitHub, or a folder. The company makes its money from the Confluence and Jira integrations sold to enterprises. Files made in 2005 still open, which is the promise you want from a tool your architecture diagram lives in.",
    },
    {
      question: "Why is Miro's free plan so limited?",
      answer:
        "Three editable boards is a trial, not a tier, and Miro is open that the product is aimed at teams who will pay. If you want one free board for a workshop it is fine. If you want a whiteboard you keep coming back to, budget $8 a member a month from the start or use FigJam's Starter plan, which does not count boards the same way.",
    },
    {
      question: "Do I need a whiteboard tool for a remote team at all?",
      answer:
        "For live workshops, yes, and FigJam or Miro are the two that hold up with fifteen cursors on one board. For everything else — a diagram in a design doc, a flow in a pull request, a sketch of an idea — a free canvas and a screenshot do the job, and the diagram is where people will actually read it. I wrote about the wider shift in how I work remotely in my piece on going async by default.",
    },
  ],
  sources: [
    {
      title: "Excalidraw+ pricing",
      publisher: "Excalidraw",
      url: "https://plus.excalidraw.com/pricing",
      checkedAt: "2026-09-14",
    },
    {
      title: "tldraw",
      publisher: "tldraw",
      url: "https://tldraw.com/",
      checkedAt: "2026-09-14",
    },
    {
      title: "draw.io",
      publisher: "JGraph",
      url: "https://www.drawio.com/",
      checkedAt: "2026-09-14",
    },
    {
      title: "Whimsical pricing",
      publisher: "Whimsical",
      url: "https://whimsical.com/pricing",
      checkedAt: "2026-09-14",
    },
    {
      title: "Figma pricing",
      publisher: "Figma",
      url: "https://www.figma.com/pricing/",
      checkedAt: "2026-09-14",
    },
    {
      title: "Miro pricing",
      publisher: "Miro",
      url: "https://miro.com/pricing/",
      checkedAt: "2026-09-14",
    },
  ],
  content: `<p>Most diagrams have a short life. You draw the boxes, you paste the picture into a document or a pull request, someone says "ah, right", and nobody ever opens the source again. A smaller number are the opposite: the architecture diagram, the schema, the network map, edited every quarter for years. And a third kind is not really a diagram at all but a room — a board that a group of people move things around on together.</p>

<p>Those are three different jobs, and the reason people end up paying for a whiteboard they use twice a year is that they chose one tool for all three. I open six of them. Here is which one for which job, and what each actually costs.</p>

<h2>Sketches: Excalidraw and tldraw</h2>

<p>For the first kind of diagram — drawn once, pasted, forgotten — the right tool is free and needs no account, because any friction at all means you describe the thing in words instead and the reader loses the picture.</p>

<p>Excalidraw is my default. Open excalidraw.com, draw boxes and arrows, export SVG or PNG, done. The hand-drawn style is a feature: a wobbly diagram reads as a sketch, and people respond to it with "what about this case" rather than "that box is not aligned". The free version at excalidraw.com is the full editor with one scene, unlimited collaborators on a shared link, and export. Excalidraw+ at $6 a user a month, with 14% off billed annually and a 14-day trial, adds cloud-saved scenes and folders, teams, comments, presentations and read-only links — worth it only if you want the sketches to live somewhere rather than in the documents they were pasted into.</p>

<p>tldraw is the same idea with neater handwriting. It is a free infinite canvas in the browser, cleaner-looking than Excalidraw, and it exists mainly as an SDK for people building a canvas into their own product. If the sketch is going in front of a client and the wobble feels wrong, this is the one.</p>

<blockquote>
<p>A diagram that takes thirty seconds to start gets drawn. One that needs a login and a workspace gets described in a paragraph instead, and the paragraph is worse.</p>
</blockquote>

<h2>Systems: draw.io</h2>

<p>The second kind of diagram needs precision, connectors that stay attached when you move a box, shape libraries for AWS and network gear and UML, and above all a file you will still be able to open in ten years. That is draw.io, which has been doing exactly this since 2005.</p>

<p>It is free, open source under Apache 2.0, and has no sign-up. The diagram is an XML file you save to Google Drive, OneDrive, GitHub, Confluence or your own disk, and there is a desktop app if you would rather not use the browser at all. The company earns from its Confluence and Jira apps sold to enterprises, which is why the standalone editor can stay free; there is no enterprise tier with single sign-on because there is nothing to sign in to. The interface is plainer than everything else here and it is the tool I trust with the diagram that matters. If the diagram is a database schema, I said more about the tooling around that in <a href="/articles/postgres-tools-worth-using">the Postgres tools I reach for</a>.</p>

<h2>Rooms: FigJam, Miro and Whimsical</h2>

<p>The third job is a group working on one board at the same time — a retrospective, a workshop, a planning session with sticky notes. This is where you pay, and the free tiers are designed to make you.</p>

<p><strong>Miro</strong> is the most complete whiteboard, with templates for every ceremony a team runs, integrations into Jira and Asana, and AI features metered in credits. Its free plan allows three editable boards, which a small team uses up in a week; Starter is $8 a member a month billed yearly for unlimited private boards, and Business is $20 with guest access and unlimited workspaces. It is the safe corporate choice and it is priced like one.</p>

<p><strong>FigJam</strong> is the cheapest way into a proper shared whiteboard, provided someone in the company already pays for Figma. It comes with the Collab seat — $3 a month on Figma Professional, $5 on the org-level and Enterprise plans — which also covers Figma Slides and viewing design files. On Figma's free Starter plan it is included with basic features. For a product team where the designers are on Figma anyway, it is the obvious board, and the whole team can be on it for less than one Miro seat each. If you are choosing the design tool itself, <a href="/articles/figma-alternatives-worth-considering">my Figma alternatives piece</a> is where that decision lives.</p>

<p><strong>Whimsical</strong> is the nicest of the three for flowcharts and wireframes specifically: the shapes snap, the connectors behave, and the result looks finished without effort. The free tier is measured in objects — 50 board objects and 50 doc blocks a month, with a watermark on exports — which one real flowchart consumes. Pro is $10 an editor a month billed annually and removes all of that; Business is $20 with private teams and SSO. Viewers and guests are free on every plan, which matters for a board that many people read and few edit.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th></th><th>Best for</th><th>Free tier</th><th>Paid</th><th>Files live</th></tr>
</thead>
<tbody>
<tr><td>Excalidraw</td><td>Sketches</td><td>Full editor, one scene</td><td>Plus $6/user/month</td><td>Browser, or Plus cloud</td></tr>
<tr><td>tldraw</td><td>Cleaner sketches, embedding</td><td>Full canvas</td><td>SDK licensing</td><td>Browser</td></tr>
<tr><td>draw.io</td><td>System diagrams</td><td>Everything</td><td>None</td><td>Your Drive, GitHub or disk</td></tr>
<tr><td>Whimsical</td><td>Flowcharts, wireframes</td><td>50 objects a month, watermark</td><td>Pro $10/editor/month yearly</td><td>Whimsical</td></tr>
<tr><td>FigJam</td><td>Product team workshops</td><td>Starter plan, basic</td><td>Collab seat $3–5/month</td><td>Figma</td></tr>
<tr><td>Miro</td><td>Company-wide whiteboarding</td><td>3 editable boards</td><td>Starter $8/member/month yearly</td><td>Miro</td></tr>
</tbody>
</table>

<h2>What I actually do</h2>

<p>Excalidraw for anything going into a document, which is nine diagrams in ten. draw.io for the three or four diagrams that have to stay correct, saved in the repository next to the code they describe so they get reviewed with it. FigJam for workshops, because the designers were on Figma already and the seats cost almost nothing. I let a Miro subscription lapse two years ago and have not missed it; I let a Whimsical one lapse and occasionally do, because nothing else makes a flowchart look that tidy that fast.</p>

<p>The principle underneath: match the tool to how long the diagram will live. A free canvas for the ones that die in a day, a file you own for the ones that last years, and a paid board only for the hour when everyone is in the room. Buying the room for all three is how a company ends up with twelve Miro seats and one board.</p>`,
};
