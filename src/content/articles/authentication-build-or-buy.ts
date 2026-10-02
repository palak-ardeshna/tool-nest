import type { Article } from "@/content/types";

/**
 * Explainer, rewritten on the URL first published 2026-09-07 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): has never written authentication himself; used Firebase Auth and
 * Auth.js on client work and his own side projects; basic login working in 1 to
 * 2 hours; password reset and email took about as long again and was the fiddly
 * part; hit a bug where a page refresh logged the user out. He did not establish
 * which cause produced that bug, so the article presents both documented routes
 * to the symptom and says it cannot say which applied. Persistence types, the
 * default and the storage caveat are from Firebase's auth state persistence
 * documentation, read 2026-10-02.
 */
export const authenticationBuildOrBuy: Article = {
  slug: "authentication-build-or-buy",
  title: "Login in 2 Hours. Then a Refresh Lost It",
  excerpt:
    "Basic login took me 1 to 2 hours with Firebase Auth and Auth.js. The bug that cost me more was a page refresh signing the user out.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Firebase Auth", "Auth.js", "Sessions", "Authentication"],
  publishedAt: "2026-09-07",
  contentUpdatedAt: "2026-09-16",
  seoTitle: "Auth: Login in 2 Hours, Lost on Refresh",
  seoDescription:
    "Firebase Auth and Auth.js got me login in 1 to 2 hours. Then a page refresh signed users out. What the persistence settings actually control.",
  pros: [
    "Basic login working in 1 to 2 hours, on both Firebase Auth and Auth.js",
    "Password reset and email verification exist already, so you are configuring rather than designing",
    "Firebase documents three persistence modes, so the behaviour is knowable rather than guesswork",
  ],
  cons: [
    "A page refresh signed users straight out, and the cause is not obvious from the symptom",
    "The password reset and email side took about as long again as login did",
    "Firebase's default persistence depends on browser storage being available, which you do not control",
    "Fast setup means the parts you did not configure are the parts you do not know about",
  ],
  faqs: [
    {
      question: "Should I write authentication myself?",
      answer:
        "I have not, so I cannot compare from experience. What I can say is that buying got me a working login in 1 to 2 hours, and the hours I did lose went on behaviour I had not configured rather than on code I had to write.",
    },
    {
      question: "Why does my user get signed out when the page reloads?",
      answer:
        "On Firebase, that is what the NONE persistence mode does by design: the state is held in memory and goes when the page refreshes. The same symptom can also come from the default LOCAL mode failing, because Firebase's docs note the default applies provided browser storage mechanisms such as third-party cookies are enabled. Checked 2 October 2026.",
    },
    {
      question: "Which did you prefer, Firebase Auth or Auth.js?",
      answer:
        "I have used both and reach for whichever suits the project rather than having a favourite. Both got me to a working login inside the same couple of hours, which is the part that matters when you are deciding whether to build instead.",
    },
  ],
  content: `
<p>I have not written authentication myself. On client work and my own side projects I have used Firebase Auth and Auth.js. Getting basic login working took 1 to 2 hours, which is the whole argument for not building it. The password reset and email side took about as long again and was the fiddly part. And I hit a bug where a page refresh logged the user straight out.</p>

<p>So this is a report from the buy side only. If you want to know what hand-rolling auth costs, somebody else has to tell you.</p>

<h2>Two hours is the argument, and it is a strong one</h2>
<p>Email and password sign-in, in an afternoon, on either of these. That is sign-up, sign-in, sign-out, a user record and a session, none of which I wrote.</p>
<p>Set that against what building it means. Password hashing chosen correctly, session tokens that are long enough and random enough, expiry, rotation, a reset flow that cannot be used to enumerate accounts, rate limiting on the login endpoint, and the ongoing job of keeping all of that current. Two hours against that list is not a close decision.</p>
<p>The reset and email side took about as long again, which surprised me. Login is one screen and one call. Reset is a token with a lifetime, an email that has to arrive, a landing page that has to validate the token, and a set of failure cases that all look the same to the user. Nothing about it is hard. There is simply more of it than you expect, and most of it is configuration rather than code. The email arriving at all is its own problem, which I wrote about in <a href="/articles/sending-email-from-your-app">why Gmail junks email sent from your app</a>.</p>

<h2>The refresh bug, and what the documentation says about it</h2>
<p>A page refresh signing the user out looks like a broken library. It is a setting, and Firebase documents it clearly enough that I should have read it first instead of debugging it.</p>
<p>Firebase Auth has three persistence modes for the web. LOCAL keeps the session indefinitely, surviving the browser being closed, until an explicit sign-out. SESSION keeps it in the current tab or window only, and clears when that tab closes. NONE keeps it in memory, and the documentation says the state disappears when the page refreshes. Read on 2 October 2026.</p>
<p>That third description is my symptom, word for word. There is a second route to the same place, though, and it is the one worth knowing: the docs say the default for web is LOCAL, provided browser storage mechanisms such as third-party cookies are enabled. So the default can also produce this if storage is blocked, which happens in private windows and with some privacy settings.</p>
<p>I cannot tell you which of those two caused mine. I did not instrument it, and both fit. What I took from it is more useful than the answer would have been: the same user-visible bug has one cause you control and one you do not, so the fix is to set persistence explicitly rather than to rely on a default that has a condition attached.</p>

<h2>What buying actually costs you</h2>
<p>The hours I lost went on behaviour I had not configured, rather than on anything I had to write.</p>
<p>When you build a thing, you know where every decision was made, because you made it. When you buy one, the decisions already exist, which is the point, and you find out about them one surprise at a time. A session that vanishes on refresh comes from a default you never read, and from the user's side that looks exactly like a bug you wrote.</p>
<p>So the trade is real and it is still worth taking. You exchange a large amount of security-critical work you would do badly for a smaller amount of configuration you will do incompletely. Just budget for the second half. Login in 2 hours was true for me. Auth finished in 2 hours was not.</p>

<h2>What I would check on day one now</h2>
<p>Set the persistence mode explicitly, whichever one you want, rather than taking the default. Then test the thing I did not: sign in, refresh the page, and sign in again in a private window. Those three actions would have found my bug in under a minute. Send yourself a real password reset to a real Gmail address as well, and look in the spam folder before you decide it works.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "I have not written authentication myself. On client work and my own side projects I have used Firebase Auth and Auth.js. Getting basic login working took 1 to 2 hours, which is the whole argument for not building it. The password reset and email side took about as long again and was the fiddly part. And I hit a bug where a page refresh logged the user straight out.",
  },
  sources: [
    {
      title: "Authentication state persistence",
      publisher: "Google (Firebase)",
      url: "https://firebase.google.com/docs/auth/web/auth-state-persistence",
      checkedAt: "2026-10-02",
    },
  ],
};
