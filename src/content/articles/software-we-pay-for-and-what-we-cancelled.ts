import type { Article } from "@/content/types";

export const softwareWePayForAndWhatWeCancelled: Article = {
  slug: "software-we-pay-for-and-what-we-cancelled",
  title: "The Software We Pay For in 2026 — and What We Cancelled",
  excerpt:
    "An honest audit of a small team's software spend: what survived a year, what quietly became shelfware, and the questions that predicted which was which.",
  category: "software",
  author: "daniel-reyes",
  tags: ["Software", "Productivity", "Business Tools"],
  publishedAt: "2026-08-01",
  featured: true,
  image: "/images/articles/software-we-pay-for-and-what-we-cancelled.webp",
  imageAlt: "A grid of blank ceramic tiles with a few lifted and stacked aside",
  seoTitle: "The Software We Pay For in 2026 (And What We Cancelled)",
  seoDescription:
    "A real audit of a small team's subscription spend — what earned its renewal, what became shelfware, and how to tell the difference before you commit.",
  quickAnswer:
    "We cancelled 40% of our subscriptions and noticed the absence of two. The tools that survived shared one property: someone opened them without being reminded to. Everything that needed a process to keep it alive was already dead.",
  pros: [
    "An annual audit reliably finds spend nobody defends",
    "Consolidating on fewer tools reduced context switching more than any single tool helped",
    "Most categories have a good enough free tier at small-team scale",
  ],
  cons: [
    "Migration costs are real and usually underestimated",
    "Annual plans hide the moment a tool stopped being used",
    "Cancelling a tool one person loves is a people problem, not a spreadsheet problem",
  ],
  faqs: [
    {
      question: "How often should a team audit its software spend?",
      answer:
        "Once a year is enough. More often and you spend more time auditing than the savings are worth; less often and you accumulate a year of subscriptions nobody remembers approving.",
    },
    {
      question: "What is the most common wasted subscription?",
      answer:
        "The second tool in a category you already have a tool for, bought during a busy month because the first one was slightly annoying that week.",
    },
  ],
  content: `<p>We went through a year of invoices line by line. Thirty-one paid tools. Here is what happened.</p>

<h2>The test that predicted everything</h2>

<p>One question sorted the list almost perfectly: <strong>does anyone open this without being reminded to?</strong></p>

<p>Every tool that survived the audit was opened voluntarily, often daily. Every tool we cancelled required a ritual to stay alive — a weekly reminder, a manager asking whether people had updated it, a process document explaining when to use it.</p>

<blockquote>
<p>A tool that needs a process to keep it in use is not a tool. It is a process, with a subscription attached.</p>
</blockquote>

<h2>What we kept</h2>

<ul>
<li><strong>The editor and the terminal.</strong> Obvious, but worth saying: the tools people spend hours in daily deserve the most money and the least deliberation.</li>
<li><strong>One document tool.</strong> Not two. The second one was where documents went to be lost.</li>
<li><strong>One task tracker.</strong> Same reasoning.</li>
<li><strong>Design software.</strong> Expensive, used constantly, no realistic substitute for the way we work.</li>
<li><strong>Transcription.</strong> Small cost, weekly use, removes a job nobody wanted.</li>
<li><strong>Password management and backup.</strong> Never audit these on cost. They are insurance.</li>
</ul>

<h2>What we cancelled</h2>

<table>
<thead>
<tr><th>Category</th><th>Why it went</th><th>Missed it?</th></tr>
</thead>
<tbody>
<tr><td>Second document tool</td><td>Duplicated the first, split our knowledge in half</td><td>No</td></tr>
<tr><td>Analytics add-on</td><td>Produced dashboards nobody opened</td><td>No</td></tr>
<tr><td>Team wiki</td><td>Last meaningful edit was eight months earlier</td><td>No</td></tr>
<tr><td>Design handoff tool</td><td>The design tool absorbed the feature</td><td>No</td></tr>
<tr><td>Scheduling tool</td><td>Calendar did it adequately</td><td>Slightly</td></tr>
<tr><td>Feedback widget</td><td>Volume never justified the tier</td><td>Yes — we brought it back</td></tr>
</tbody>
</table>

<p>Twelve cancellations, two regrets, one reversal. That ratio is worth internalising: most software you stop paying for, you do not notice.</p>

<h2>The traps</h2>

<h3>Annual plans hide death</h3>

<p>A monthly subscription that stops being used generates twelve reminders that you are paying for it. An annual one generates one, eleven months after the tool went cold.</p>

<h3>Migration cost is always higher than the estimate</h3>

<p>We moved documentation between tools and it took three times the estimate — not because the export failed, but because half the content turned out to be worth rewriting, and the other half turned out to be worth deleting. That is a good outcome; it just is not a two-hour job.</p>

<h3>Someone loves the tool you are cancelling</h3>

<p>This is the genuinely hard one, and it is not a spreadsheet problem. Our rule: the person who wants to keep it explains what they would do instead. If the answer is concrete and worse, keep the tool. If the answer is a shrug, the subscription was habit.</p>

<h2>What we would do differently</h2>

<p>Set a review date at purchase. Not a reminder to cancel — a date to ask "is anyone opening this without being told to". Ninety days is enough to know. It would have caught four of our twelve within the trial window.</p>`,
};
