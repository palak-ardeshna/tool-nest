import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Topic Palak confirmed he hit (chat, 2026-10-05): an AI coding tool generated
 * code against an OUT-OF-DATE Supabase schema, and it failed at runtime. He has
 * done this; the specifics are still needed. Every <!-- PARTH --> block is a
 * fact only Palak can supply — fill them from what actually happened or delete
 * the draft. Do not invent a build, an error string, a number or a fix.
 * Type: explainer / gotcha — plain sections, FAQ optional, no quickAnswer, no
 * pros/cons (keeps it a different shape from the setup-log draft).
 * Supabase docs below are placeholders: verify and set checkedAt before publish.
 */
export const aiWritesCodeAgainstYourOldSupabaseSchema: Article = {
  slug: "ai-writes-code-against-your-old-supabase-schema",
  title: "When the AI Writes Code Against Your Old Supabase Schema",
  excerpt:
    "The agent generated code that matched a Supabase schema that no longer existed, and it only broke at runtime. Here is how the stale schema gets in, what it looked like for me, and how I stopped it.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Supabase", "AI coding", "Databases", "Schema", "Developer tools"],
  publishedAt: "2026-10-03", // PARTH: re-check git log cadence (2/week) when moving to articles/
  seoTitle: "AI Code vs Your Old Supabase Schema",
  seoDescription:
    "An AI tool wrote code for a Supabase schema that had already changed, so it failed at runtime. Why the stale schema slips in, and the fix that held.",
  content: `
<p>An AI coding tool only knows the database it was shown. Change a Supabase table after that, and the agent keeps writing code for the old shape, so the mismatch does not surface until the query actually runs. This is the gotcha, and the fix is less about the tool than about what you hand it.</p>

<!-- PARTH: the experience paragraph goes here, word for word, and is copied into humanReview.experience below.
     At least 60 words, first person, with one number from your own use. Build it from:
     - what you were building when it happened
     - what was out of date (renamed column? dropped table? a new table the AI never saw?)
     - the runtime error you got (roughly, e.g. "column X does not exist")
     - one number (how many times it happened / time lost / how many re-runs before it worked)
     - how you fixed it (pasted the schema in? generated types? pointed the tool at it?)
     Do not write this from anything Palak did not say. -->

<h2>Why the stale schema gets in</h2>
<p>The agent builds its idea of your tables once, from whatever it read at the start of a session. A migration you run afterwards does not reach it, so the generated code is correct for a database that is a version behind. Supabase makes this easy to miss because the change in the dashboard succeeds instantly while the code that assumes the old shape keeps compiling.</p>

<!-- PARTH: one concrete example of the mismatch you hit, from your own case. Name the table/column if you can. -->

<h2>What actually fixed it</h2>
<!-- PARTH: your real fix, step by not-numbered prose (keep this one out of the <ol> shape; that belongs to the other draft).
     If the fix was generating Supabase types, say which command and how often you re-ran it. -->

<h2>What I would do from the start</h2>
<p>Give the tool the current schema before it writes anything, and refresh it after every migration rather than once per session. The cost is a habit, not a setting, which is why it is easy to drop and easy to get bitten by again.</p>

<!-- Link to a sibling article in this cluster before publish, e.g.
     <a href="/articles/cursor-custom-api-key-what-stops-working">...</a> -->
`,
  faqs: [
    {
      question: "Why does the AI not just read my live Supabase schema?",
      answer:
        "It reads what it is given at the start of a session. Unless you feed it the current schema or generated types, a later migration never reaches it.",
    },
    // PARTH: a second FAQ from your own experience, optional.
  ],
  sources: [
    {
      title: "Supabase Docs", // PARTH: exact page you relied on
      publisher: "Supabase",
      url: "https://supabase.com/docs",
      checkedAt: "2026-10-05", // PARTH: verify and set to the day you actually read it
    },
  ],
  // humanReview added at publish, only after Palak confirms the facts in chat.
  // experience must equal the PARTH paragraph placed in content above, word for word.
};
