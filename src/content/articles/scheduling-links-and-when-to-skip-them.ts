import type { Article } from "@/content/types";

export const schedulingLinksAndWhenToSkipThem: Article = {
  slug: "scheduling-links-and-when-to-skip-them",
  title: "Scheduling Links: When to Send One, and When to Just Offer Three Times",
  excerpt:
    "A booking link saves you three emails and quietly tells the other person whose time is worth more. Here is the rule I use for which conversations get a link, and what the free tiers of Cal.com, Calendly and Google Calendar actually cover.",
  category: "productivity",
  author: "parth-patel",
  tags: ["Productivity", "Meetings", "Calendars", "Comparisons"],
  publishedAt: "2026-09-09",
  image: "/images/articles/scheduling-links-and-when-to-skip-them.webp",
  imageAlt:
    "Close-up of a person at a wooden desk writing in a small notebook beside an open laptop, a wristwatch on their arm",
  seoTitle: "Scheduling Links: When to Skip Them (2026)",
  seoDescription:
    "Cal.com, Calendly and Google Calendar booking pages compared, plus the rule for when sending a scheduling link costs you more than it saves.",
  quickAnswer:
    "Send a link when the other person is asking for your time, and offer specific times when you are asking for theirs. That one rule covers almost every case. On tooling: Google Calendar appointment schedules are already included with your account and cover a single person taking bookings, so start there. Cal.com's free tier gives one user unlimited event types and calendars, which is the most generous of the three and can be self-hosted. Calendly's free tier is capped at one event type and one calendar connection, so you hit its edges quickly. Team features — round-robin, shared availability, routing — are the only thing genuinely worth paying for.",
  pros: [
    "One message instead of three, and the meeting lands days earlier",
    "Buffers, daily caps and lead times enforce boundaries your future self will not",
    "The free tiers cover a single person taking bookings without paying anything",
  ],
  cons: [
    "Sending a link to someone doing you a favour hands them your admin",
    "A link makes saying yes frictionless, which is fine until your week is gone",
    "Free tiers are built around one person; the moment two people share bookings you are on a paid seat",
  ],
  alternatives: [
    {
      name: "Google Calendar appointment schedules",
      url: "https://support.google.com/calendar/answer/10729749",
      note: "Built into the calendar you already use, on personal and Workspace accounts. Booking page with Meet, phone or in-person options, buffers, a maximum bookings per day cap, scheduling windows and Stripe payments.",
    },
    {
      name: "Cal.com",
      url: "https://cal.com/pricing",
      note: "Free tier is one user with unlimited event types and calendars, 100+ integrations and Stripe or PayPal payments. Teams is $12 per user per month billed yearly, which is where round-robin and shared team availability start.",
    },
    {
      name: "Calendly",
      url: "https://calendly.com/pricing",
      note: "The name everyone recognises. The free plan allows one event type and one calendar connection; Standard is $10 per seat per month and Teams $16.",
    },
    {
      name: "Three times in an email",
      note: "Free, works with everyone, and reads as courtesy rather than process. Still the right answer for anyone senior to you or doing you a favour.",
    },
  ],
  faqs: [
    {
      question: "Is it rude to send a scheduling link?",
      answer:
        "Not on its own — it depends who is asking whom. If someone approached you and wants your time, a link is helpful and nobody minds. If you approached them, a link asks them to do the work of fitting into your calendar, and a proportion of people read that as presumptuous even though they will never say so. When in doubt, offer three specific times and add the link underneath as a fallback.",
    },
    {
      question: "Do I need to pay for a scheduling tool?",
      answer:
        "Almost certainly not, if you are one person taking bookings. Google Calendar appointment schedules come with the account you already have, and Cal.com's free tier gives a single user unlimited event types and calendars. Paying starts to make sense when several people share a booking pool and you need round-robin allocation, shared availability or routing rules.",
    },
    {
      question: "What settings matter more than the tool I pick?",
      answer:
        "Three of them. A buffer between appointments, so a run of calls does not become one unbroken block. A cap on bookings per day, which is the only setting that protects a working morning. And a minimum lead time, so nobody books you for forty minutes from now. Every tool here has all three; most people leave all three at the default.",
    },
    {
      question: "Should the whole team have booking links?",
      answer:
        "Only the people whose time strangers legitimately need — sales, support, recruitment. A public link on someone doing focused work converts their calendar into a queue that anyone can join. That is a policy decision, not a tooling one, and it is worth making deliberately before you buy seats for everybody.",
    },
  ],
  sources: [
    {
      title: "Create an appointment schedule in Google Calendar",
      publisher: "Google",
      url: "https://support.google.com/calendar/answer/10729749",
      checkedAt: "2026-09-09",
    },
    {
      title: "Cal.com pricing",
      publisher: "Cal.com",
      url: "https://cal.com/pricing",
      checkedAt: "2026-09-09",
    },
    {
      title: "Calendly pricing",
      publisher: "Calendly",
      url: "https://calendly.com/pricing",
      checkedAt: "2026-09-09",
    },
  ],
  content: `<p>A booking link is one of those tools that quietly changes the shape of your week, and not always in the direction you expected. It removes the back-and-forth. It also removes something else, and that is the part people notice about six months in.</p>

<p>I have run it both ways here: a link in the signature for a year, then no link at all for a stretch, then a link again but only on a narrow set of conversations. This is where I landed and why.</p>

<h2>What a booking link actually removes</h2>

<p>The pitch is that it saves you three emails. True, and it undersells the thing, because the emails are not the expensive part. The expensive part is that each one costs a context switch and a day of latency, so a call that could have happened on Tuesday happens on Friday.</p>

<p>A link collapses that to a single message. The other person picks, the invitation appears, the conferencing details attach themselves. For anything where the meeting is going to happen regardless — a support call, a candidate interview, a check-in with a client who already pays you — that is a clean win and you should stop thinking about it.</p>

<h2>The part the pitch leaves out</h2>

<p>Sending a link says something about whose time is scarcer. When you send one to somebody senior to you, or to a stranger doing you a favour, you have handed them the job of finding a slot in your calendar. Most people will never mention it. Some of them will think slightly less of the request, and you will never find out which ones.</p>

<blockquote>
<p>If you are the one asking for the favour, offer times. If they are asking you, send the link.</p>
</blockquote>

<p>That rule is short enough to apply without deliberating, and it covers nearly every case I have run into. The awkward middle — a peer, a warm introduction, a supplier you might buy from — is handled by doing both: name three specific slots, then add the link underneath for anyone who would rather browse.</p>

<p>There is a second cost, and it is the one that bites teams rather than individuals. A link makes saying yes frictionless. Every meeting that used to require somebody to compose an email now requires a click, and a calendar that anyone can write to stops being yours. If your team has moved towards written updates — I wrote about what that actually changes in <a href="/articles/async-by-default-what-changes">async by default</a> — a public booking page quietly pushes in the opposite direction.</p>

<h2>What the free tiers cover</h2>

<p>The good news is that a single person taking bookings does not need to pay anybody. All three of the obvious options have a free tier, and they are not equivalent.</p>

<table>
<thead>
<tr><th>Tool</th><th>Free tier</th><th>First paid step</th></tr>
</thead>
<tbody>
<tr><td>Google Calendar appointment schedules</td><td>Included with personal and Workspace accounts</td><td>Premium booking features sit behind Workspace and Google One tiers</td></tr>
<tr><td>Cal.com</td><td>One user, unlimited event types and calendars, 100+ integrations, Stripe and PayPal payments</td><td>Teams at $12 per user per month billed yearly</td></tr>
<tr><td>Calendly</td><td>One event type, one calendar connection</td><td>Standard at $10 per seat per month</td></tr>
</tbody>
</table>

<p>Start with the calendar you already have. Google's appointment schedules give you a booking page, a choice of Meet, phone or in-person meetings, buffer time between appointments, a maximum bookings per day limit, scheduling windows for lead time and how far ahead people can book, and Stripe payments if you charge for the slot. For one person that is the whole feature list, at no extra cost and with nothing new to log into.</p>

<p>Move to Cal.com when you want several distinct kinds of meeting — a fifteen-minute triage call and a ninety-minute workshop are not the same product — because unlimited event types on the free tier is the most generous offer of the three, and you can self-host the whole thing from its repository if you would rather your availability did not live on somebody else's server. Calendly's free plan caps you at one event type and one connected calendar, which is enough to try it and not much more.</p>

<h2>The settings that matter more than the tool</h2>

<p>Whichever you pick, three settings do most of the work, and almost everybody leaves all three at their defaults.</p>

<ul>
<li><strong>Buffers.</strong> Fifteen minutes between appointments. Without it a busy day becomes one unbroken block with no time to write up what was just agreed, and the notes never get written.</li>
<li><strong>A daily cap.</strong> Three bookable slots a day, not eight. This is the only setting that reliably protects a working morning, and it is the one people are most reluctant to set because it feels like turning work away.</li>
<li><strong>Minimum lead time.</strong> Twenty-four hours, so nobody books you for forty minutes from now while you are mid-task.</li>
</ul>

<p>Set the availability window narrower than your actual working hours, too. If you publish nine to six, you will be booked nine to six. I publish four hours a day and have never had anyone complain about the choice.</p>

<h2>When to pay</h2>

<p>One person taking bookings should not be paying for scheduling software. The moment that changes is when bookings have to be shared: round-robin across a support rota, collective events where three people need to be free at once, or routing that sends an enterprise enquiry to a different queue than a support question. Those are real problems that a free tier does not solve, and they are what the team plans are actually selling.</p>

<p>Branding removal, custom domains and SSO show up on the same tiers. They are worth what they are worth to you, but do not let a page of ticked boxes convince you that you have a team problem when you have a one-person calendar.</p>

<h2>What I do now</h2>

<p>Two event types on a free tier, fifteen-minute buffers, three slots a day, a day of lead time, and a link that goes out only when somebody has asked for my time rather than the other way round. For anything I initiated, I still write out three options in a sentence. It takes twenty seconds and it has never once been the wrong call.</p>`,
};
