import type { Article } from "@/content/types";

/**
 * Short take, to differ from the previous article's layout
 * (deepseek-vs: answer+alternatives+table) and the one before it
 * (replit: steps+pros-cons). Palak's facts (chat, 2026-10-21): used
 * Claude in school to make a full unit test paper with answers for
 * classes 6, 7 and 8 (separate chapters); gave it the chapter PDFs and
 * some of his own questions; it made 50 questions with answers, split
 * into easy, medium and hard; the problem was that it asked the same question again, worded
 * a different way. PDF limits verified via WebFetch of the Claude Help
 * Center "Upload files to Claude" page, 2026-10-21.
 */
export const claudeUnitTestPaperRepeatedQuestions: Article = {
  slug: "claude-unit-test-paper-repeated-questions",
  title: "Claude Can Write a Whole Unit Test Paper. Read It for Repeats First",
  excerpt:
    "I gave Claude chapter PDFs for classes 6, 7 and 8 plus a few of my own questions. It wrote 50 with answers, easy to hard. Some repeated, reworded.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Claude", "Teachers", "School", "Test Paper"],
  publishedAt: "2026-10-21",
  seoTitle: "Claude Unit Test Paper: 50 Questions, Repeats",
  seoDescription:
    "I made 50 unit test questions with answers in Claude from chapter PDFs. Easy, medium and hard worked. The catch: some questions came twice, reworded.",
  content: `<p>I used Claude to make full unit test papers for classes 6, 7 and 8. I gave it the chapter PDF for each class and a few questions of my own, and it came back with 50 questions, each with its answer, sorted into easy, medium and hard levels. One problem kept showing up: Claude asked the same question more than once, just turned around and worded differently.</p>

<h2>Why the repeats are easy to miss</h2>
<p>A reworded question does not look like a copy. One asks "what is X", the next asks "which of these describes X", and a third gives the answer and asks for the term. Skim 50 of them and each one reads fine on its own. Put them on one paper and a student gets marks three times for knowing one fact, while another part of the chapter gets no question at all.</p>
<p>A single chapter only holds so many facts. Ask for 50 questions from it and the model has to fill the count somehow, and asking the same thing again in new words is an easy way to reach it.</p>

<h2>What to check before you print</h2>
<p>Read the whole list once with only this in mind: does any question test the same fact as one above it? Mark those and ask Claude to replace them with questions on parts of the chapter the paper does not cover yet. If the chapter is short, ask for fewer questions instead of 50.</p>
<p>The PDF side is not the limit. Claude's help page says a chat upload can be up to 1,000 pages, and for the first 100 it reads the images and diagrams as well as the text, which covers a textbook chapter with room to spare.</p>
<p>I also used AI on the parent side of school work, building an app on Replit that tells parents whether their child finished the lesson. That one is written up in <a href="/articles/replit-agent-parent-student-app">what Replit Agent got right building a parent-student app</a>.</p>`,
  sources: [
    {
      title: "Upload files to Claude",
      publisher: "Anthropic (Claude Help Center)",
      url: "https://support.claude.com/en/articles/8241126-uploading-files-to-claude",
      checkedAt: "2026-10-21",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-21",
    experience:
      "I used Claude to make full unit test papers for classes 6, 7 and 8. I gave it the chapter PDF for each class and a few questions of my own, and it came back with 50 questions, each with its answer, sorted into easy, medium and hard levels. One problem kept showing up: Claude asked the same question more than once, just turned around and worded differently.",
  },
};
