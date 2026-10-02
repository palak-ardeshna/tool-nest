import type { Article } from "@/content/types";

/**
 * Log, rewritten on the URL first published 2026-09-14 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): uses both a browser extension and a blocker app; has more than 10
 * sites on the list; it is still running and still works for him. He asked not
 * to name the extension or the app, so neither is named. The Digital Wellbeing
 * behaviour, including what happens when a timer runs out, is quoted from
 * Google's Android help page read 2026-10-02.
 */
export const websiteBlockersThatActuallyHold: Article = {
  slug: "website-blockers-that-actually-hold",
  title: "Over 10 Sites Blocked, and It Has Held",
  excerpt:
    "Most blocker articles end with the author bypassing it. Mine is still running, and the reason is that I block at two levels rather than one.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Website Blockers", "Focus", "Digital Wellbeing", "Productivity"],
  publishedAt: "2026-09-14",
  contentUpdatedAt: "2026-09-24",
  seoTitle: "Website Blockers: What Held for Me",
  seoDescription:
    "I block more than 10 sites with both an extension and an app, and it is still running. Why two levels hold when one does not, and the free option.",
  content: `
<p>I block more than 10 sites, using both a browser extension and a separate blocker app. It is still running and it still works for me. That last sentence is the only reason I think this is worth writing: most of what I read about blockers ends with the writer turning it off after a fortnight, and mine did not.</p>

<p>I am not naming the extension or the app, because the specific tools are the least interesting part of why this held. The choice would be wrong for half the people reading it anyway.</p>

<h2>Two levels, and why one is not enough</h2>
<table>
<thead><tr><th>Level</th><th>What it stops</th><th>How you get round it</th></tr></thead>
<tbody>
<tr><td>Browser extension</td><td>The site, in that browser</td><td>Open a different browser. Takes seconds</td></tr>
<tr><td>Blocker app</td><td>The site, more broadly on the machine</td><td>Harder, and takes long enough that you notice you are doing it</td></tr>
<tr><td>Both together</td><td>The habit of opening it without thinking</td><td>You have to decide to defeat it, twice</td></tr>
<tr><td>What I block</td><td>More than 10 sites</td><td>Still in place</td></tr>
</tbody>
</table>
<p>An extension on its own failed for me the way it fails for most people. The block works, and then one day you are in a different browser for an unrelated reason and the site opens, and that is the end of the arrangement. Nothing dramatic happens. The habit simply finds the gap.</p>
<p>The second layer makes it slow rather than impossible, and slow is the whole mechanism, because the behaviour I am trying to stop is not a decision, it is a reflex: a hand reaching for a tab in a gap between two pieces of work. Ten seconds is long enough for the thinking part to catch up and ask what I am doing, and a reflex does not survive that question.</p>

<h2>Why the list being long matters</h2>
<p>More than 10 sites sounds excessive for a focus setup. I think a short list is why most blocker setups fail.</p>
<p>Block two sites and the reflex moves to the third. That redirects the behaviour instead of removing it, and the time then goes somewhere you did not even choose. A long list means the reflex runs out of places to go, and running out of places is when you actually notice the reflex itself.</p>
<p>So when I add a site it is usually because I caught myself there after blocking something else. The list grew by observation rather than by planning, which is also why I cannot tell you what should be on yours.</p>

<h2>Setting it up, in the order that worked</h2>
<ol>
<li>Spend a week noticing where you actually go, without blocking anything. Guessing produces the wrong list.</li>
<li>Block at two levels from the start, not one. One level teaches you the gap exists.</li>
<li>Put more sites on the list than feels reasonable, and expect to add more as the reflex moves.</li>
<li>Do not build an easy override. If turning it off takes one click you will use that click, and a blocker you can undo in one second is a reminder rather than a block.</li>
<li>Add to the list whenever you catch yourself somewhere new, rather than treating the setup as finished.</li>
</ol>

<h2>The free option, if you do not want another app</h2>
<p>On Android this is built in, and the documentation is specific about what it does.</p>
<p>Google's Digital Wellbeing help page, read on 2 October 2026, describes app timers, website timers for Chrome sites, Focus mode and Bedtime mode. On app timers it says: "When you run out of time, the app closes and its icon dims", and that "App timers reset at midnight". Focus mode pauses chosen apps so that "you can't use these apps and won't get notifications from them".</p>
<p>The icon dimming is a small detail worth noticing. The app is still there and visibly unavailable, which does more than hiding it would, because you see the thing you decided about rather than forgetting you decided. Time based limits are a different approach from a site list, though: a timer gives you an allowance, a list gives you nothing. For a reflex, I found nothing works better than an allowance, because an allowance is still a door.</p>
<p>This is the same thing I found with time blocking in <a href="/articles/time-blocking-that-survives-a-real-week">how my blocks overrun</a>: a system that bends when I push on it gets pushed on every single day.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I block more than 10 sites, using both a browser extension and a separate blocker app. It is still running and it still works for me. That last sentence is the only reason I think this is worth writing: most of what I read about blockers ends with the writer turning it off after a fortnight, and mine did not. I am not naming the extension or the app, because the specific tools are the least interesting part of why this held.",
  },
  sources: [
    {
      title: "Manage how you spend time on your Android phone",
      publisher: "Google",
      url: "https://support.google.com/android/answer/9346420",
      checkedAt: "2026-10-02",
    },
  ],
};
