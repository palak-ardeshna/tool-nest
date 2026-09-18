import type { Article } from "@/content/types";

export const pdfToolsBeyondTheBrowser: Article = {
  slug: "pdf-tools-beyond-the-browser",
  title: "PDF Tools: What You Actually Need Beyond the Browser",
  excerpt:
    "Most of what people install PDF software for is already sitting on the machine: the browser reads and fills them, and one free command-line tool merges, splits and repairs them. Here is where that stops working and paying starts to make sense.",
  category: "software",
  author: "parth-patel",
  tags: ["Software", "PDF", "Documents", "Free Tools"],
  publishedAt: "2026-09-09",
  image: "/images/articles/pdf-tools-beyond-the-browser.webp",
  imageAlt:
    "An old hardback book lying open on a polished wooden table, its printed pages softly out of focus",
  seoTitle: "PDF Tools Beyond the Browser (2026)",
  seoDescription:
    "Your browser and qpdf cover most PDF work for nothing. Where the free route stops, and what Adobe Acrobat costs in the UK if you need to cross that line.",
  quickAnswer:
    "Read, fill and sign in your browser — Firefox ships Mozilla's pdf.js, and every other browser has an equivalent. Merge, split, rotate, repair, strip a password you know and shrink a file with qpdf, which is free and does all of it in one command. That covers most of what people buy software for. Pay only when you need something the free route genuinely cannot do: optical character recognition on scans, real redaction that removes the underlying text, editing text in place, or producing tagged, accessible documents. Acrobat Standard is £14.99 a month on an annual plan in the UK; Pro is £19.97.",
  pros: [
    "The reader, form filler and signer are already installed and cost nothing",
    "qpdf handles merging, splitting, repair and password removal from one command",
    "Nothing leaves your machine, which matters more for PDFs than most file types",
  ],
  cons: [
    "The command line is a real barrier if you do a page shuffle once a year",
    "Optical character recognition, redaction and in-place text editing all need paid software or a separate stack",
    "Free web converters are the wrong answer for anything confidential, whatever their privacy page says",
  ],
  alternatives: [
    {
      name: "qpdf",
      url: "https://qpdf.readthedocs.io/en/stable/cli.html",
      note: "Command-line tool and library for structural work: page selection and merging, splitting into groups of pages, removing encryption, linearising for the web, dumping the file structure as JSON and checking it for damage.",
    },
    {
      name: "pdf.js",
      url: "https://mozilla.github.io/pdf.js/",
      note: "Mozilla's Apache-2.0 renderer, built into Firefox since version 19. Also the thing to reach for if you need to display or parse PDFs inside your own web app.",
    },
    {
      name: "Adobe Acrobat",
      url: "https://www.adobe.com/uk/acrobat/pricing.html",
      note: "The paid baseline. UK individual pricing on an annual plan billed monthly: Standard £14.99, Pro £19.97, Studio £24.98, all including VAT. Month-to-month costs meaningfully more.",
    },
    {
      name: "Your browser's print dialogue",
      note: "Print to PDF is the most underrated tool of the lot. It flattens forms, drops interactive elements and gives you a clean, portable copy of almost anything.",
    },
  ],
  faqs: [
    {
      question: "Can I merge and split PDFs without installing anything?",
      answer:
        "Not reliably in a browser alone, which is why the free online converters get so much traffic. qpdf is the smallest thing to install: one command selects pages from several files into a new one, and another splits a file into groups of pages. It is a single binary, available through every mainstream package manager, and it never sends your document anywhere.",
    },
    {
      question: "Is it safe to use a free online PDF converter?",
      answer:
        "For a menu or a public leaflet, it makes no difference. For a contract, an invoice, a payslip or anything with a client's name on it, you are uploading the document to a third party you have not assessed in order to avoid a two-minute install. I do not do it, and I would not want a supplier of mine doing it with my paperwork.",
    },
    {
      question: "Does blacking out text in a PDF actually remove it?",
      answer:
        "No, and this is the single most common way confidential material leaks. Drawing a black rectangle over a name adds a shape on top of the page; the text underneath is still in the file and comes straight back out with any text extraction. Real redaction removes the underlying content, and it is one of the few genuine reasons to pay for PDF software.",
    },
    {
      question: "Why is my PDF so large, and can I shrink it without paying?",
      answer:
        "Almost always because it contains full-resolution images, often a scan at 600 dots per inch of something that only needs 150. Re-exporting from the original document at a lower image quality fixes it properly. Failing that, qpdf can rewrite the file with its object streams recompressed, which reclaims some of the structural overhead even though it will not touch the images themselves.",
    },
  ],
  sources: [
    {
      title: "qpdf: running qpdf from the command line",
      publisher: "qpdf project",
      url: "https://qpdf.readthedocs.io/en/stable/cli.html",
      checkedAt: "2026-09-09",
    },
    {
      title: "pdf.js — a general-purpose, web standards-based PDF platform",
      publisher: "Mozilla",
      url: "https://mozilla.github.io/pdf.js/",
      checkedAt: "2026-09-09",
    },
    {
      title: "pdf.js repository README",
      publisher: "Mozilla",
      url: "https://github.com/mozilla/pdf.js",
      checkedAt: "2026-09-09",
    },
    {
      title: "Adobe Acrobat plans and pricing (UK)",
      publisher: "Adobe",
      url: "https://www.adobe.com/uk/acrobat/pricing.html",
      checkedAt: "2026-09-09",
    },
  ],
  content: `<p>PDF software is bought in a moment of mild panic. Somebody needs two files combined, or a page removed, or a scan that is somehow forty megabytes brought down to something an email server will accept, and the search that follows ends at either a subscription or an advertisement-covered upload form.</p>

<p>Neither is usually the right answer. Most of what people reach for PDF software to do is already possible with what is on the machine, and the small remainder that genuinely is not is a much better guide to whether you should be paying.</p>

<h2>The reader is already installed</h2>

<p>Every current browser renders PDFs, fills in form fields, adds a drawn signature and saves the result. Firefox does it with pdf.js, Mozilla's Apache-2.0 renderer, which has been built into the browser since version 19 and is also the library to reach for if you ever need to show a PDF inside your own web application.</p>

<p>This is worth stating plainly because a surprising number of people still install a separate reader out of habit, and the separate readers are where the upsell prompts live. If your PDF work is reading, filling and signing, you are finished. There is nothing to buy.</p>

<p>The print dialogue deserves a mention in the same breath. Print to PDF flattens a completed form, drops interactive elements and produces a clean copy of anything the browser can display. It solves more problems than its dull name suggests.</p>

<h2>One command-line tool covers the structural work</h2>

<p>The next tier of jobs — merge, split, rotate, reorder, repair, strip a password you already know — are structural. They rearrange the file without touching what is drawn on the page, and qpdf does all of them.</p>

<ul>
<li><strong>Page selection</strong> pulls pages from one or more input files and writes them into a new one, which is both merging and extracting depending on what you ask for.</li>
<li><strong>Splitting</strong> writes each group of pages to its own output file, with a naming pattern you control.</li>
<li><strong>Decryption</strong> produces an unencrypted copy of a file you have the password for — useful when a bank statement arrives locked and you need it in an archive that cannot prompt for a password.</li>
<li><strong>Linearising</strong> rewrites the file so a reader can display the first page before the whole thing has downloaded.</li>
<li><strong>Checking</strong> inspects the structure, encryption and stream encoding and reports what is wrong, which is how you find out whether a file is genuinely damaged or just disliked by one viewer.</li>
<li><strong>JSON output</strong> dumps the structure in a form you can read with ordinary tooling, which turns "why is this file strange" from guesswork into something you can look at.</li>
</ul>

<p>It installs from every mainstream package manager, runs offline, and is the reason I have not opened an online PDF converter in years. If you are already comfortable in a terminal — and if you are not, my piece on <a href="/articles/terminal-setups-that-are-actually-faster">terminal setups that are actually faster</a> is the place to start — this replaces a subscription outright.</p>

<h2>Where the free route genuinely stops</h2>

<p>Four things sit outside it, and they are worth knowing precisely, because they are the only honest arguments for spending money.</p>

<p><strong>Optical character recognition.</strong> A scan is a picture of text. Searching it, copying from it or feeding it to anything else requires recognising the characters first, and that is a different class of software.</p>

<p><strong>Redaction.</strong> Drawing a black rectangle over a name does not remove the name. The text stays in the file and comes back out of any extraction tool, and this is how confidential material leaks from documents that somebody believed they had cleaned. Removing the underlying content properly is a specific feature, and if you handle other people's personal data you should be paying for it rather than improvising.</p>

<p><strong>Editing text in place.</strong> Changing a sentence inside a finished PDF means reflowing a page that was never designed to reflow. Tools that do it are working against the format. Where you can, fix the original document and export again — the same rule I apply to <a href="/articles/backups-for-a-small-team">the files I keep copies of</a>, where the source always outranks the derived artefact.</p>

<p><strong>Tagged, accessible output.</strong> If a document has to be usable with a screen reader, it needs a proper structure tree, and adding one after the fact is real work with real tooling behind it.</p>

<h2>What the paid option costs</h2>

<p>If you cross that line, Acrobat is still the default. UK individual pricing on an annual plan billed monthly runs at £14.99 a month for Standard, £19.97 for Pro and £24.98 for Studio, all including VAT. The month-to-month equivalents are £24.98, £29.96 and £34.98, which is the usual arrangement: the flexible option costs roughly two-thirds more, and most people take it and then keep it for three years.</p>

<p>My advice on that is the same as it was when I went through <a href="/articles/auditing-small-team-software-spend">what I pay for and what I cancelled</a>: name the specific job before you subscribe. "PDFs" is not a job. "Redacting client names from twenty documents a month" is, and it justifies the licence on its own.</p>

<h2>What I would do</h2>

<p>Read and sign in the browser. Install qpdf and learn two of its commands. Keep the original document, because every hard PDF problem is easier upstream of the PDF. And pay for exactly one seat of something serious if — and only if — you have a recurring job on that list of four, rather than because a file needed splitting on a Tuesday afternoon.</p>`,
};
