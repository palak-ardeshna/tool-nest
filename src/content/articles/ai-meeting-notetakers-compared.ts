import type { Article } from "@/content/types";

export const aiMeetingNotetakersCompared: Article = {
  slug: "ai-meeting-notetakers-compared",
  title: "AI Meeting Notetakers Compared: What You Are Actually Choosing Between",
  excerpt:
    "Fathom, Otter and Granola are sold as the same product and are not. The real decision is whether a bot joins your call, who is allowed to record it, and what happens to the transcript afterwards. Here is how the options differ and how to test one in a fortnight.",
  category: "ai-tools",
  author: "toolnest-editorial",
  tags: ["AI Tools", "Meetings", "Comparisons", "Productivity"],
  publishedAt: "2026-08-20",
  contentUpdatedAt: "2026-09-01",
  featured: true,
  image: "/images/articles/ai-meeting-notetakers-compared.webp",
  imageAlt: "Illustration: a grid of video-call tiles with one speaker active, beside a notes panel of transcript lines and ticked action items",
  seoTitle: "AI Meeting Notetakers Compared (2026)",
  seoDescription:
    "Fathom vs Otter vs Granola: how the bot-in-the-call model differs from local capture, what the free tiers include, and the consent rules you cannot skip.",
  quickAnswer:
    "The category splits on one thing: whether a bot joins the call as a visible participant or the app records locally on your machine. Fathom and Otter send a bot and build a searchable archive; Granola records on-device and produces notes that read like the ones you would have written. Free tiers differ far more than paid ones — Fathom's free tier gives unlimited recording but only a handful of AI summaries a month, Otter's caps each conversation at 30 minutes, and Granola's is a lifetime allowance rather than a monthly one. Before any of that matters, check what your jurisdiction and your clients require for consent, because that constraint eliminates options faster than any feature comparison.",
  pros: [
    "All three remove the worst part of a meeting: writing up what was agreed",
    "Transcripts make a decision searchable months later, which memory does not",
    "Free tiers are substantial enough to evaluate properly before paying",
    "Action-item extraction is now reliable enough to be worth reviewing rather than rewriting",
  ],
  cons: [
    "A bot in the call changes how people speak, and nobody measures that in a review",
    "Summaries are confident about things that were said tentatively",
    "Recording rules vary by country and by client contract, and the tool will not warn you",
    "Every one of these creates a permanent archive of unguarded conversation",
  ],
  alternatives: [
    { name: "Fireflies", url: "https://fireflies.ai", note: "Bot-based, heavy on CRM integrations; aimed at sales teams rather than individuals." },
    { name: "Fathom", url: "https://fathom.video", note: "The most generous free tier in the category for recording and storage." },
    { name: "Granola", url: "https://granola.ai", note: "Records on-device with no bot in the call; notes read as an edited version of yours." },
    { name: "Otter", url: "https://otter.ai", note: "Live transcript during the call and the strongest searchable archive." },
  ],
  faqs: [
    {
      question: "Do I have to tell people I am recording?",
      answer:
        "In many places, yes, and in some the rule is that every participant must agree rather than just one. The UK and the EU treat a meeting recording as personal data, which brings its own obligations about storage and deletion. Several US states require all-party consent. None of these tools checks where your participants are sitting, so the compliance question is yours. The practical version: say it out loud at the top of the call, and put it in the calendar invitation so nobody is surprised.",
    },
    {
      question: "Is a bot-free tool always better?",
      answer:
        "It is quieter and it sidesteps the awkwardness of an extra participant, but it only captures what your own microphone and system audio can hear. If you need a recording when you are not in the meeting, or a transcript of a call you joined by phone, a bot-based tool is the one that does that job. The bot is a constraint, not a defect.",
    },
    {
      question: "How accurate are the transcripts?",
      answer:
        "Good on clear audio in a common accent, and noticeably worse on crosstalk, strong regional accents, technical vocabulary and anything said over a bad connection. Product names and people's names are where errors cluster, which matters because those are the words you will later search for. Assume you will correct names in the first week and add them to a custom vocabulary list if the tool has one.",
    },
    {
      question: "Can I use one of these for one-to-ones?",
      answer:
        "You can, and we would think carefully first. A one-to-one is the meeting where someone tells you something difficult. A permanent transcript changes what people are willing to say, and the cost of that is invisible until it has already happened. Notes you write yourself are a reasonable answer here even if they are worse notes.",
    },
  ],
  sources: [
    {
      title: "Fathom Pricing: Free AI Notetaker + Team Plans",
      publisher: "Fathom",
      url: "https://www.fathom.ai/pricing",
      checkedAt: "2026-09-03",
    },
    {
      title: "Free vs. Premium for Individuals: What's the Difference?",
      publisher: "Fathom",
      url: "https://help.fathom.video/en/articles/5290881",
      checkedAt: "2026-09-03",
    },
    {
      title: "Pricing | Otter.ai",
      publisher: "Otter.ai",
      url: "https://otter.ai/pricing",
      checkedAt: "2026-09-03",
    },
    {
      title: "Pricing plans | Granola",
      publisher: "Granola",
      url: "https://www.granola.ai/pricing",
      checkedAt: "2026-09-03",
    },
    {
      title: "How transcription works",
      publisher: "Granola",
      url: "https://docs.granola.ai/help-center/taking-notes/transcription",
      checkedAt: "2026-09-03",
    },
    {
      title: "What is personal data? | ICO",
      publisher: "Information Commissioner's Office (UK)",
      url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/what-is-personal-data/what-is-personal-data/",
      checkedAt: "2026-09-03",
    },
    {
      title: "California Code, PEN 632",
      publisher: "California Legislative Information (State of California)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=632",
      checkedAt: "2026-09-03",
    },
  ],
  content: `<p>Every review of this category compares transcription accuracy. Accuracy is table stakes now, and it is not what you will regret choosing badly on. What you will regret is a bot with your company's name on it sitting in a client call nobody warned the client about, or a year of one-to-ones sitting in a vendor's archive you never audited.</p>

<p>We have not run these tools across a controlled set of two hundred meetings, and we would be sceptical of anyone claiming they have — meeting audio is not reproducible, so nobody is really testing the same thing twice. What follows is what the vendors document, what the pricing pages say as of publication, and the parts of the decision that reviews consistently leave out.</p>

<h2>The split that matters: a bot in the call, or not</h2>

<p>Everything else in this category is a preference. This one is structural.</p>

<p><strong>Bot-based tools</strong> — Fathom, Otter, Fireflies — join your call as a participant. They appear in the attendee list. They can record a meeting you are not in. They capture every speaker cleanly because they are pulling from the conference platform rather than from a room.</p>

<p><strong>Local-capture tools</strong> — Granola is the well-known one — record on your own machine from your microphone and system audio. Nobody sees an extra participant. Nothing joins anything. The trade is that the recording only exists if you are there with the app running.</p>

<blockquote>
<p>Ask which meeting you most want covered. If the answer involves a call you will not personally attend, the bot is not optional and the rest of the comparison is between bot-based tools.</p>
</blockquote>

<p>There is a social cost to the bot that no feature table carries. People speak differently when a named participant is recording. In a sales call that is fine. In a retrospective where you want someone to admit a mistake, it is not.</p>

<h2>What each one is actually built around</h2>

<table>
<thead>
<tr><th>Tool</th><th>Capture</th><th>Built for</th><th>Weak spot</th></tr>
</thead>
<tbody>
<tr><td>Fathom</td><td>Bot joins the call</td><td>Recording and storing everything, cheaply</td><td>AI summaries are rationed on the free tier</td></tr>
<tr><td>Otter</td><td>Bot joins the call</td><td>A live transcript you read during the call, and a searchable archive after</td><td>Free tier cuts each conversation short</td></tr>
<tr><td>Granola</td><td>Records on your device</td><td>Notes that read like the ones you would have written</td><td>Only captures meetings you attend</td></tr>
</tbody>
</table>

<p>Granola's design idea is worth understanding even if you pick something else. It expects you to type rough notes during the call, and it merges those with the transcript afterwards. The output keeps your emphasis instead of the model's. That is a genuinely different product from a summary generated with no idea which five minutes of the hour you cared about.</p>

<h2>Pricing, and why the free tiers differ more than the paid ones</h2>

<p>Paid plans across the category sit between roughly £14 and £26 a month per person, and they buy broadly similar things. The free tiers are where the products diverge, and since the free tier is what you will evaluate on, the differences shape your impression of tools that are closer than they look.</p>

<ul>
<li><strong>Fathom's free tier</strong> gives unlimited recording and unlimited transcript storage, with AI summaries limited to a handful each month. You get the archive free and pay for the intelligence on top.</li>
<li><strong>Otter's free tier</strong> allows a few hundred minutes a month but cuts each individual conversation off at thirty minutes. That limit is the one people hit, because most meetings that need notes run longer than half an hour.</li>
<li><strong>Granola's free tier</strong> is a lifetime allowance of meetings rather than a monthly one — a trial with no clock on it rather than an ongoing free plan.</li>
</ul>

<p>Paid tiers were around $20 a month for Fathom Premium, $16.99 for Otter Pro and $18 for Granola at the time of writing, with team plans priced per seat above that. Every one of those numbers has moved in the last year. Check the current pricing page before you commit a team; do not trust a figure in any article, including this one.</p>

<h2>The consent problem, which is not a feature question</h2>

<p>This is the part that gets skipped, and it is the part with legal consequences.</p>

<p>Recording a conversation is regulated, and the rule is not the same everywhere. Some jurisdictions require every participant to consent, not just the person pressing record. In the UK and across the EU, a recording that identifies people is personal data, which brings obligations about why you hold it, how long you keep it and what happens when someone asks you to delete it. Client contracts frequently add their own restrictions on top.</p>

<p>None of these tools evaluates any of that for you. A bot joining a call is not consent, and a line in your privacy policy is not consent either. The workable habit is dull and takes ten seconds:</p>

<ul>
<li>Put it in the calendar invitation, so it is visible before anyone joins.</li>
<li>Say it out loud in the first minute, and stop if someone objects.</li>
<li>Decide up front which meeting types are never recorded — one-to-ones, anything involving HR, anything under an NDA that says so.</li>
<li>Set a retention period and actually apply it. An archive nobody prunes becomes a liability the moment it is subpoenaed or breached.</li>
</ul>

<h2>The failure modes reviews leave out</h2>

<ul>
<li><strong>Confident summaries of tentative statements.</strong> Someone says "we could maybe look at moving the deadline" and the action list says "move the deadline". The summary is not wrong about the words; it is wrong about the certainty. Anything that becomes a commitment needs a human to check it against what was actually agreed.</li>
<li><strong>Names are where the errors cluster.</strong> Transcription is strong on ordinary prose and weak on proper nouns — exactly the words you will search for later. Correct them early and use the custom vocabulary feature if the tool has one.</li>
<li><strong>The quiet person disappears.</strong> Summaries are weighted by how much was said. The person who made one decisive point in an hour is often the person who was right, and the summary treats them as noise.</li>
<li><strong>Storage becomes the product.</strong> After six months you have an archive nobody curated, containing everything anyone said unguardedly. That is either an asset or an exposure depending entirely on whether you set a retention policy in week one.</li>
</ul>

<h2>A two-week evaluation you can actually run</h2>

<p>Long enough to hit real meetings, short enough that you have not built a habit around a tool you might drop.</p>

<h3>1. Pick five meetings, not five minutes</h3>

<p>One long call with crosstalk. One with a participant on a bad connection. One technical discussion full of product names. One where a decision genuinely gets made. One recurring meeting that is mostly status. That spread exposes far more than a fortnight of clean one-to-ones would.</p>

<h3>2. Write your own three bullets first</h3>

<p>Immediately after each meeting, before you open the tool, write the three things that mattered. This is the whole test. Compare the tool's summary against your bullets, not against the transcript.</p>

<h3>3. Score two things</h3>

<ul>
<li><strong>Did it catch all three of your bullets?</strong> Missing the decision is a failure regardless of how polished the rest reads.</li>
<li><strong>How much did you have to edit before sending it to someone else?</strong> If you rewrite it every time, you have bought a transcript, not a notetaker — and a transcript is a much cheaper product.</li>
</ul>

<h3>4. Check the search after two weeks, not on day one</h3>

<p>Search for a decision you half-remember. This is the feature you will use for years and it is the one nobody tests during a trial, because on day one the archive is empty and everything is easy to find.</p>

<h2>What we would pick</h2>

<ul>
<li><strong>You want an archive of everything and you are watching cost:</strong> Fathom's free tier does the recording and storage job outright, and you can add paid summaries later if you find you want them.</li>
<li><strong>You read along during calls and search the archive constantly:</strong> Otter, on a paid plan — the free tier's per-conversation limit will annoy you within a week.</li>
<li><strong>You take notes anyway and want them tidied rather than replaced:</strong> Granola, provided every meeting you care about is one you attend.</li>
<li><strong>Your calls are covered by client confidentiality terms:</strong> read those terms before you shortlist anything. That constraint decides this for you, and it decides it faster than any trial will.</li>
</ul>

<p>The honest summary is that the transcription is a solved problem and the judgement is not. These tools are very good at recording what was said and consistently overconfident about what it meant. Treat the output as a draft written by an attentive person who did not know which parts mattered — because that is precisely what it is. If you are assembling a wider set of AI tools around your working week, our notes on <a href="/articles/ai-voice-tools-what-works">where speech tools hold up and where they fall over</a> cover the same trade in a different setting.</p>`,
};
