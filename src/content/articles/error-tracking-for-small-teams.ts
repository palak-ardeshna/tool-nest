import type { Article } from "@/content/types";

/**
 * Setup log, rewritten on the URL first published 2026-09-02 (old text deleted
 * 2026-09-29, not restored). First-person facts are Palak's own (chat,
 * 2026-10-02): his site went down and he found out the next day; he then set up
 * Sentry and an uptime monitor, which took a full day; it caught a build problem
 * after a deploy; the alerts reached him after the problem had already passed.
 * He did not name which uptime monitor he uses, so none is named as his. Free
 * plan limits, including the 5 minute check interval, are from UptimeRobot's
 * pricing page read 2026-10-02.
 */
export const errorTrackingForSmallTeams: Article = {
  slug: "error-tracking-for-small-teams",
  title: "A Day of Setup, and the Alert Still Came Late",
  excerpt:
    "My site was down and I found out the next day. A full day of setting up monitoring did not fix that, because the slow link in the chain was me.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Sentry", "Uptime Monitoring", "Alerts", "Deploys"],
  publishedAt: "2026-09-02",
  contentUpdatedAt: "2026-09-12",
  seoTitle: "Error Tracking: A Day of Setup, Late Alerts",
  seoDescription:
    "I set up Sentry and an uptime monitor after my site was down for a day unnoticed. The alerts still arrived late. Where the delay actually sits.",
  quickAnswer:
    "Set up an uptime monitor first, because it takes minutes and tells you the one thing you cannot find out any other way: that the site is down. Then decide, before you set up anything else, which alert channel you will actually look at within minutes. A free uptime monitor checks every 5 minutes, so the tool can tell you quickly, and if the alert lands in an email inbox you read twice a day then your own latency is hours and the 5 minutes was never the problem.",
  content: `
<p>My site went down once and I did not find out until the next day. That is what made me set up monitoring: Sentry for errors and an uptime monitor for the site itself. Setting both up took me 1 full day. It did catch a build problem after a deploy, which was worth having. But the alerts themselves kept reaching me after the thing had already passed, which is not what I had been hoping to buy with that day.</p>

<h2>What I set up, and what each part was worth</h2>
<ol>
<li>An uptime monitor on the site. This was the quick part and the part that solved the original problem. It answers one question, is the site responding, and that was the question I had failed to answer for a whole day.</li>
<li>Sentry for application errors. This took much longer: adding it to the project, getting the build to ship source maps so the stack traces meant anything, then working out which errors were mine. It earned its place once, by catching something that broke after a deploy, which is exactly where I had been blind before.</li>
<li>Alerting on both. This is the step I did last and thought least about, and it is the one that decided whether the other two were any use.</li>
</ol>
<p>If you only do one of those three, do the first. It took a fraction of the day and it covers the failure that actually happened to me.</p>

<h2>Where the delay really was</h2>
<p>I assumed a late alert meant a slow tool. The numbers say otherwise.</p>
<p>UptimeRobot's pricing page, read on 2 October 2026, lists the free plan with 50 monitors and a 5 minute monitoring interval. Paid plans check faster, 60 seconds on Solo and 30 seconds on Team. So on a free plan the tool can know within about 5 minutes that the site is down.</p>
<p>Those five minutes were never the delay. What happened after them was: the alert went to email, and I read email when I next happened to look at it. Detection took minutes and my reaction took hours, so the chain ran at my speed. Upgrading to 30 second checks would have improved the fast part of a chain whose slow part is a person.</p>
<p>The same page notes that free includes email, SMS, voice call and Email2SMS as channels, but SMS and voice credits are not included and have to be added. That pricing detail is the real decision in this whole exercise. The channel that reaches you in minutes is usually the one that costs money, and the channel that is free is the one you check when you feel like it.</p>

<h2>Why Sentry took most of the day</h2>
<p>An uptime monitor watches your site from outside and needs nothing from your code. Error tracking has to live inside the application, and that is where the hours went.</p>
<p>Installing it takes minutes. Making it useful took me the rest of the day. Without source maps uploaded from the build, the stack traces point at minified code and tell you almost nothing, so that has to be wired into the deploy. Then there is the noise: errors from browser extensions, from bots, from people on old browsers. Until you have filtered those, every alert is a maybe, and a maybe does not get you out of your chair.</p>
<p>It did pay for itself on one deploy. Something broke after a release and Sentry told me what, which is the failure mode I most want to catch, and the one I had previously found out about from a page that looked wrong. I ran into the other half of that problem in <a href="/articles/deploying-nextjs-to-hostinger-from-github-actions">deploying to Hostinger</a>, where a half finished upload left the site serving two builds at once.</p>

<h2>What I would do in this order now</h2>
<p>Put an uptime monitor on the site today. It is the cheapest insurance against the thing that actually happened to me, and it takes minutes.</p>
<p>Then pick the alert channel before you pick any more tools. Decide honestly where a message reaches you inside five minutes, and if the honest answer is nowhere free, that is the thing to spend money on rather than a shorter check interval.</p>
<p>Add error tracking after that, and budget most of a day for it rather than an hour. Count the source maps and the noise filtering as part of the job, because an unfiltered error tracker becomes a second inbox you learn to ignore.</p>
`,
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "My site went down once and I did not find out until the next day. That is what made me set up monitoring: Sentry for errors and an uptime monitor for the site itself. Setting both up took me 1 full day. It did catch a build problem after a deploy, which was worth having. But the alerts themselves kept reaching me after the thing had already passed, which is not what I had been hoping to buy with that day.",
  },
  sources: [
    {
      title: "UptimeRobot pricing",
      publisher: "UptimeRobot",
      url: "https://uptimerobot.com/pricing/",
      checkedAt: "2026-10-02",
    },
  ],
};
