import type { Article } from "@/content/types";

export const aiInSpreadsheetsWhatItActuallyDoes: Article = {
  slug: "ai-in-spreadsheets-what-it-actually-does",
  title: "AI in Spreadsheets: What Copilot, Gemini and Claude Actually Do in Your Cells",
  excerpt:
    "Excel's COPILOT function is withdrawn from today, Google Sheets has an AI function that reads the web, and Claude now sits in a side pane and edits your formulas. Here is what each one is for according to its own documentation, where each vendor tells you not to use it, and the one rule that keeps AI out of the cells that matter.",
  category: "ai-tools",
  author: "parth-patel",
  tags: ["AI Tools", "Spreadsheets", "Excel", "Google Sheets", "Comparisons"],
  publishedAt: "2026-09-14",
  image: "/images/articles/ai-in-spreadsheets-what-it-actually-does.webp",
  imageAlt: "A printed sheet of typographic ornaments and symbols arranged in rows",
  seoTitle: "AI in Excel and Google Sheets: What Works (2026)",
  seoDescription:
    "Excel Copilot, the Sheets AI function and Claude for Excel compared: what each does in a cell, what the vendors say not to use them for, and where to stop.",
  quickAnswer:
    "Use AI in a spreadsheet for text, not numbers. All three vendors say so in their own documentation: Microsoft lists numerical calculations among the things to avoid with its Copilot function, Google warns that Gemini output may be inaccurate, and Anthropic tells you not to ship audit-critical calculations from Claude for Excel without checking them. Where they earn their place is the work around the numbers — categorising a column of free-text survey answers, summarising comments, explaining what a formula somebody else wrote is doing, tracing a #REF! error to its source. Google's AI function is the most useful in-cell tool because it can use Google Search; Claude for Excel is the strongest at understanding a model you inherited; and Excel's own COPILOT function is withdrawn from 14 September 2026, with the Copilot side pane taking its place.",
  pros: [
    "Categorising, summarising and extracting from text columns is genuinely faster than writing the formula",
    "Claude for Excel answers questions about a workbook with clickable cell references, which makes its answers checkable",
    "Google's AI function can pull current information from Search into a cell, which no formula could",
  ],
  cons: [
    "In-cell AI is rate-limited and non-deterministic — the same prompt can give a different answer on refresh",
    "Every one of these needs a paid tier: a Copilot add-on or Microsoft 365 Premium, an eligible Workspace or Google AI plan, or a Claude Pro plan and up",
    "A spreadsheet from outside your organisation can carry hidden instructions to the assistant, and Anthropic warns about exactly that",
  ],
  alternatives: [
    {
      name: "Copilot in Excel",
      url: "https://support.microsoft.com/en-us/excel/functions/copilot-function",
      note: "The side-pane assistant for formulas, analysis and charts, on a Microsoft 365 Copilot add-on licence for work accounts or Microsoft 365 Premium for individuals. The in-cell COPILOT function, limited to 100 calls every ten minutes, is no longer available from 14 September 2026.",
    },
    {
      name: "Gemini in Google Sheets and the AI function",
      url: "https://support.google.com/docs/answer/15877199?hl=en",
      note: "AI(\"prompt\", [range]) generates, summarises, categorises and analyses sentiment in a cell, with access to real-time information from Google Search. Generates up to 350 selected cells at a time; needs an eligible Google Workspace or Google AI plan.",
    },
    {
      name: "Claude for Excel",
      url: "https://claude.com/docs/office-agents/excel",
      note: "An add-in from Microsoft AppSource for Excel on the web, Windows and Mac, on Claude Pro, Max, Team and Enterprise plans. Answers with cell-level citations, changes assumptions while keeping formulas intact, debugs errors, builds models, and edits pivot tables and conditional formatting. No data tables, macros or VBA.",
    },
  ],
  faqs: [
    {
      question: "What happens to spreadsheets that used Excel's COPILOT function?",
      answer:
        "Microsoft's support page says the function is no longer available from 14 September 2026 and points to Copilot in Excel — the side pane — as the replacement. If you have workbooks with COPILOT formulas in them, the outputs those cells last produced are the thing to keep: paste them as values now, because a formula that no longer resolves will not recalculate into anything useful.",
    },
    {
      question: "Can I trust the AI function in Sheets for facts?",
      answer:
        "Trust it the way you would trust a search result: useful, checkable, not final. Google's help page says the function can access real-time information from Google Search, which makes it good at filling a column of company headquarters or product launch years, and the same page says Gemini features may suggest inaccurate information and should not be relied on for professional advice. Spot-check ten rows before you use the column.",
    },
    {
      question: "Is Claude for Excel safe to point at a file a client sent me?",
      answer:
        "Anthropic's own documentation says to only use it with trusted spreadsheets, because files from outside can contain hidden instructions that try to make the add-in extract data or change records. It asks you to confirm risky operations, but the advice is clear: open external files in a copy, read the confirmations, and do not let the assistant act on a workbook you have not looked at.",
    },
    {
      question: "Which one for someone who lives in Excel all day?",
      answer:
        "Claude for Excel, if your work is models rather than lists. Its distinctive feature is that it treats the workbook as a structure: ask how a number in C42 is derived and you get an explanation with clickable references, change an assumption and the dependent formulas stay intact. Copilot in Excel is closer to a chart-and-formula helper. If your Excel work is mostly text columns, either will do and the Copilot licence you may already have is enough.",
    },
  ],
  sources: [
    {
      title: "COPILOT function",
      publisher: "Microsoft Support",
      url: "https://support.microsoft.com/en-us/excel/functions/copilot-function",
      checkedAt: "2026-09-14",
    },
    {
      title: "Use the AI function in Google Sheets",
      publisher: "Google Docs Editors Help",
      url: "https://support.google.com/docs/answer/15877199?hl=en",
      checkedAt: "2026-09-14",
    },
    {
      title: "Use Claude for Excel",
      publisher: "Anthropic",
      url: "https://claude.com/docs/office-agents/excel",
      checkedAt: "2026-09-14",
    },
  ],
  content: `<p>There is a version of "AI in spreadsheets" that the demos show — type a question, get a chart — and a version that survives contact with a real workbook. I have not run a controlled test of the second version; what I have done is read each vendor's documentation closely, and the most useful thing in it is where each vendor draws its own line. All three publish a list of things not to use their tool for, and the lists are more honest than the marketing.</p>

<p>The other thing I learnt is that the category is moving under my feet. Excel's in-cell COPILOT function, the feature that made the biggest splash a year ago, is withdrawn from today.</p>

<h2>Excel: the function goes, the side pane stays</h2>

<p>Microsoft's COPILOT function let you write <code>=COPILOT("classify this feedback", A2)</code> and get a model's answer in the cell. It was rate-limited to 100 calls every ten minutes, needed a Copilot add-on licence on a work account or Microsoft 365 Premium on a personal one, and its own support page listed what to avoid: numerical calculations, and anything with legal, regulatory or compliance implications. It also only saw the prompt and the cells you passed it, nothing else in the workbook.</p>

<p>That same page now carries the notice: starting 14 September 2026, the COPILOT function will no longer be available, and Copilot in Excel — the side pane — is where the same tasks live. If you built anything on the function, paste its outputs as values this week. The pane does the useful things the function did: generate a formula from a description, summarise a range, suggest a chart, and it can see the sheet, which the function could not. What it does not do is sit in a cell and recalculate, and honestly that was the part people misused.</p>

<blockquote>
<p>Every vendor's documentation says the same thing in different words: use the assistant for text and explanation, not for the number that goes on the invoice.</p>
</blockquote>

<h2>Google Sheets: the AI function that can read the web</h2>

<p>Google's equivalent is still in the cell and, for the tasks it suits, is, on paper, the most useful in-cell tool of the three. The syntax is <code>=AI("prompt", [range])</code> — you can also type <code>=Gemini()</code> — and the help page lists what it does: generate text, summarise, categorise, and analyse sentiment across the range you point it at. The feature that separates it from Excel's withdrawn function is that it can access real-time information from Google Search, so a column of company names can become a column of headquarters cities without leaving the sheet.</p>

<p>The limits are practical. You select cells and click Generate; only the first 350 selected cells run at a time, there are short-term and long-term generation limits, and the output is text you can refresh rather than a live formula. You need an eligible Google Workspace or Google AI plan. And the help page is plain that Gemini features may suggest inaccurate or inappropriate information and are not a substitute for professional advice. That is the right frame: it is a fast first draft of a column, to be spot-checked, not a lookup.</p>

<p>Where it shines is the messy middle of a spreadsheet — the column of free-text survey answers that needs sorting into five themes, the list of job titles that needs a seniority level, the product descriptions that need a one-line summary. Those are the tasks nobody wanted to write a formula for, and they are exactly what a language model is good at.</p>

<h2>Claude for Excel: for the model you inherited</h2>

<p>Claude for Excel is a different kind of tool. It is an add-in from Microsoft AppSource, available on Claude Pro, Max, Team and Enterprise plans, and it runs on Excel for the web, Windows and Mac. Rather than living in a cell, it reads the workbook and talks about it, and the feature that makes it worth the licence is that its answers come with cell-level citations you can click. Ask how the revenue figure in C42 is derived and you get the chain of assumptions with references, not a paragraph.</p>

<p>It edits, too, and this is where it is most careful: change a discount rate and it updates the value while keeping formula relationships intact so downstream cells recompute; ask it to find the source of a #REF! error and it traces it; it can populate a template, build a three-statement model from a trial balance, and do native Excel operations like sorting, pivot tables and conditional formatting. It does not touch data tables, macros or VBA, and it will not run on the perpetual-licence Excel 2016 and 2019, on iPad or on Android.</p>

<p>Anthropic's list of what not to do is the most explicit of the three. It is not recommended for final client deliverables without human review, audit-critical calculations without verification, or highly sensitive data without proper controls. And there is a warning that the other two do not spell out as clearly: a spreadsheet from outside your organisation can contain hidden instructions — a prompt injection — that tries to make the add-in extract data or change records, so only use it on trusted files and read the confirmation prompts. I wrote about the same risk in browsers in <a href="/articles/ai-browser-agents-after-atlas">my piece on browser agents</a>; it applies to any assistant that can act on a document you did not write.</p>

<h2>Side by side</h2>

<table>
<thead>
<tr><th></th><th>Where it lives</th><th>What it needs</th><th>Best at</th><th>Vendor says not for</th></tr>
</thead>
<tbody>
<tr><td>Copilot in Excel</td><td>Side pane (in-cell function withdrawn 14 Sept 2026)</td><td>Copilot add-on or Microsoft 365 Premium</td><td>Formulas from a description, charts, summaries</td><td>Numerical calculations; legal, regulatory or compliance work</td></tr>
<tr><td>AI function in Sheets</td><td>In the cell</td><td>Eligible Workspace or Google AI plan</td><td>Categorising and summarising text columns, filling facts from Search</td><td>Anything relied on as professional advice</td></tr>
<tr><td>Claude for Excel</td><td>Add-in side pane</td><td>Claude Pro, Max, Team or Enterprise</td><td>Explaining and safely editing models, debugging errors</td><td>Final deliverables and audit-critical figures without review</td></tr>
</tbody>
</table>

<h2>The rule I ended up with</h2>

<p>AI goes in the text columns and stays out of the number columns. Let it categorise, summarise, extract, explain and find the broken reference. Do not let it produce the figure that the decision rests on, because a model that is non-deterministic by design should not be the thing that calculates a margin, and every vendor here says the same in its own documentation.</p>

<p>That rule also answers the licence question. If your spreadsheet work is lists — contacts, feedback, inventory descriptions — Google's AI function or whichever Copilot licence you already hold is enough, and the question is mostly which suite you are in. If it is models, Claude for Excel is the one that understands the workbook as a structure rather than a grid, and that is worth a Pro plan on its own. And if the spreadsheet has quietly become something else, <a href="/articles/when-a-spreadsheet-becomes-a-database">the point at which it should be a database</a> is a separate question that AI in the cells does not answer — it just makes the spreadsheet last longer than it should.</p>`,
};
