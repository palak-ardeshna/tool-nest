import type { Article } from "@/content/types";

/**
 * Explainer with alternatives, rewritten on the URL first published 2026-09-11
 * (old text deleted 2026-09-29, not restored). Palak's own facts (chat,
 * 2026-10-02): he never replaced Pocket, keeps roughly 30 to 50 tabs open
 * instead, goes back to a link only when a job needs it, had a tab sitting for
 * about 3 months, and the pricing page he had kept had changed by the time he
 * opened it. He has not used Instapaper, Raindrop, Wallabag or Omnivore, so the
 * alternatives carry no first-person judgement and no prices. Pocket facts are
 * only what the farewell page states, read 2026-10-02; it gives no shutdown
 * dates, so none are quoted.
 */
export const readItLaterAppsAfterPocket: Article = {
  slug: "read-it-later-apps-after-pocket",
  title: "Read-It-Later Apps After Pocket Shut Down",
  excerpt:
    "The honest answer to what replaced Pocket, for me, is nothing. One of those tabs had been open about 3 months, and the pricing page in it was already wrong.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Pocket", "Bookmarks", "Reading", "Browser", "Habits"],
  publishedAt: "2026-09-11",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "After Pocket: What I Actually Use Instead",
  seoDescription:
    "I did not move to another read-it-later app. I keep 30 to 50 tabs open, and the one I returned to after 3 months had stale pricing in it.",
  alternatives: [
    {
      name: "Instapaper",
      url: "https://www.instapaper.com/",
      note: "The long-running alternative. I have not used it, so there is no judgement from me here.",
    },
    {
      name: "Raindrop.io",
      url: "https://raindrop.io/",
      note: "Bookmark manager with tags and search. Not tested by me.",
    },
    {
      name: "Wallabag",
      url: "https://wallabag.org/",
      note: "Open source and self-hosted, so the archive is on hardware you control. Not tested by me.",
    },
    {
      name: "Firefox tab groups and bookmarks",
      url: "https://getpocket.com/farewell",
      note: "What Mozilla's own farewell page points people towards, read 2026-10-02.",
    },
  ],
  sources: [
    {
      title: "Farewell to Pocket",
      publisher: "Mozilla",
      url: "https://getpocket.com/farewell",
      checkedAt: "2026-10-02",
    },
  ],
  content: `
<p>Mozilla is phasing out Pocket, including the web, Android, iOS and macOS apps and the browser extensions. Its farewell page points people towards Firefox tab groups and bookmarks instead. Plenty of articles will tell you which app to move to. This is what I did, which is less tidy.</p>

<p>I did not replace Pocket with anything. I keep somewhere between 30 and 50 tabs open in my browser and that is my reading list. I only go back to one of them when a job actually needs that page, not because I set time aside to read. One tab had been sitting there about 3 months, and when I finally opened it the pricing page in it had changed, so what I had kept was out of date and I had no way of knowing that from looking at the tab.</p>

<h2>Saving is not reading, and it feels like it is</h2>
<p>Clicking save ends the small discomfort of having an unread thing in front of you. The discomfort is the useful part. Once it is filed, the item stops asking anything of you, and a list of 200 saved articles asks less than one open tab does.</p>
<p>My tabs are worse in every obvious way. They eat memory, they lose their titles once there are enough of them, and they vanish if the browser restarts badly. They have one accidental virtue: they stay in my face, so I either use the thing or I shut it.</p>

<h2>Anything with a number in it goes stale</h2>
<p>This is the part I would tell someone before they pick an app. A saved recipe is fine in a year. A saved pricing page is a liability, because it looks exactly as authoritative in 3 months as it did on the day you saved it, and the number on it has quietly stopped being true.</p>
<p>That happened to me with the page I had kept. Nothing warned me. If you save vendor pages for a decision you will make later, note the date you saved it and check the live page before you rely on the figure. It is the same reason every article here carries the day its sources were read, including <a href="/articles/which-ai-assistant-is-worth-paying-for">the comparison of the assistant plans I pay for</a>.</p>

<h2>What the apps are for, honestly</h2>
<p>A read-it-later app earns its place if you genuinely read long things on a schedule, on a phone or an e-reader, away from the machine where you found them. That is a real habit and the apps serve it well. I do not have that habit, so an app would have been a tidier version of a list I was never going to work through.</p>
<p>The alternatives below are the common ones. I have not used them, so nothing here ranks them; they are listed so you can look rather than so you can be told.</p>

<h2>Before you install anything</h2>
<p>Count what is already open or bookmarked, and look at how many of those you have returned to in the last month. If the answer is almost none, the problem is not the tool and a new app will not fix it. Shut the tabs you were never going to read. Keep the few you will, and check the date on anything that quotes a price.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I did not replace Pocket with anything. I keep somewhere between 30 and 50 tabs open in my browser and that is my reading list. I only go back to one of them when a job actually needs that page, not because I set time aside to read. One tab had been sitting there about 3 months, and when I finally opened it the pricing page in it had changed, so what I had kept was out of date and I had no way of knowing that from looking at the tab.",
  },
};
