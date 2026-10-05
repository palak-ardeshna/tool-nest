import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Companion to ai-writes-code-against-your-old-supabase-schema.ts, from the same
 * confirmed experience (Palak hit the stale-schema bug on Supabase, chat
 * 2026-10-05). This one is the HOW-TO: the routine that keeps the agent's view
 * of the schema current. Different type (setup log: <ol> steps + pros/cons) so
 * it is not the same shape as the explainer draft.
 *
 * ONLY publish this if Palak actually ran a sync routine himself. If his real
 * story is just "I pasted the schema in once", that is the explainer draft, not
 * this one — delete this rather than invent a workflow he did not use.
 * Every <!-- PARTH --> block is his to fill; invent nothing.
 */
export const keepingSupabaseInSyncSoAiStopsGuessing: Article = {
  slug: "keeping-supabase-in-sync-so-ai-stops-guessing",
  title: "Keeping Supabase in Sync So the AI Stops Guessing Your Tables",
  excerpt:
    "After the agent kept writing code for a schema that had moved on, I set up a routine to hand it the current Supabase schema every time. Here are the steps, and where the routine still breaks down.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Supabase", "AI coding", "Databases", "Schema", "Workflow"],
  publishedAt: "2026-10-03", // PARTH: re-check git log cadence (2/week) when moving to articles/
  seoTitle: "Keep Supabase in Sync With Your AI Tool",
  seoDescription:
    "A short routine to keep an AI coding agent working against your current Supabase schema instead of a stale one, with the steps and the catch.",
  content: `
<p>Once the agent has written code against an out-of-date Supabase schema, the fix is not a cleverer prompt. It is making sure the schema it reads is the one that exists right now. This is the routine I settled on, and the places it still lets me down.</p>

<!-- PARTH: the experience paragraph goes here, word for word, and is copied into humanReview.experience below.
     At least 60 words, first person, one number from your own use. Build it ONLY from:
     - how you keep the schema in front of the tool (generated types? a pasted dump? an MCP?)
     - how often you refresh it
     - one number (how many fewer schema errors after, time saved, how many migrations in)
     - one real downside of doing it this way
     If you never set up a routine, delete this draft. -->

<h2>The routine, step by step</h2>
<ol>
<li><strong>Get the current schema out of Supabase.</strong> <!-- PARTH: how you pulled it — CLI type generation, SQL dump, dashboard export. Name the exact command if there was one. --></li>
<li><strong>Hand it to the tool before it writes.</strong> <!-- PARTH: where it went — into the prompt, a file in the repo the agent reads, project context. --></li>
<li><strong>Refresh after every migration, not every session.</strong> <!-- PARTH: what you actually do here, and whether you forget. --></li>
<li><strong>Re-run the thing that broke before.</strong> <!-- PARTH: how you confirmed it stopped happening. --></li>
</ol>

<h2>Where it still breaks down</h2>
<!-- PARTH: the honest downside — the step you skip under pressure, the token cost of a big schema in context, the case where it still guessed wrong. One real thing, from your own use. -->

<!-- Link to the explainer sibling before publish:
     <a href="/articles/ai-writes-code-against-your-old-supabase-schema">why the stale schema gets in</a> -->
`,
  pros: [
    "The agent writes against the tables that exist, not the ones from an hour ago.",
    // PARTH: a second pro from your own use.
  ],
  cons: [
    "It is a habit, not a setting, so it is easy to skip and get bitten again.",
    // PARTH: a second con from your own use (e.g. a large schema eats context/tokens).
  ],
  sources: [
    {
      title: "Supabase Docs", // PARTH: the exact page (e.g. generating types) you relied on
      publisher: "Supabase",
      url: "https://supabase.com/docs",
      checkedAt: "2026-10-05", // PARTH: verify and set to the day you actually read it
    },
  ],
  // humanReview added at publish, only after Palak confirms the facts in chat.
};
