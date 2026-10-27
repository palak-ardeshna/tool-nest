import type { Article } from "@/content/types";

/**
 * Targets the GSC query "how much does it cost to fix a bolt or lovable app"
 * (9 impressions, 3 months to 2026-10-27; no page covered fix cost).
 * Palak's facts (chat, 2026-10-27): around 2 Oct 2026 built a landing page on
 * Bolt and on Lovable, free plans; Bolt had no problem; Lovable hit a fix loop
 * (each fix broke something else); daily credits ran out after 5 to 10
 * prompts; fixed next day after the reset, in hours; spent nothing, never
 * considered paying. He had not used either when the free-tier article was
 * reviewed (2026-10-01). Prices read 2026-10-27 from lovable.dev/pricing,
 * docs.lovable.dev and bolt.new/pricing; rate from open.er-api.com.
 */
export const costToFixALovableOrBoltApp: Article = {
  slug: "cost-to-fix-a-lovable-or-bolt-app",
  title: "How Much It Costs to Fix a Lovable or Bolt App, in Rupees",
  excerpt:
    "My Lovable landing page got stuck in a fix loop and the free credits ran out after 5 to 10 prompts. Here is what that day would cost on each paid plan.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Lovable", "Bolt", "App Builders", "Pricing"],
  publishedAt: "2026-10-27",
  seoTitle: "Cost to Fix a Lovable or Bolt App (₹, Oct 2026)",
  seoDescription:
    "Lovable's free credits ran out after 5 to 10 fix prompts on my landing page. What a fix costs on Lovable and Bolt plans in ₹ with 18% GST, Oct 2026.",
  quickAnswer:
    "On the free plans a fix costs nothing but time: Lovable gives 5 build credits a day, and my landing page used them up in 5 to 10 fix prompts on about 2 October 2026. If you pay, Lovable Pro and Bolt Pro are both $25 a month, about ₹2,382, or about ₹2,810 with 18% GST at the 27 October 2026 rate. On Lovable Pro one credit works out to about ₹24, so a stuck day like mine is roughly ₹119 before tax.",
  content: `<p>Around 2 October 2026 I built a landing page on both Bolt and Lovable, on the free plans. Bolt gave me no trouble. Lovable got stuck in a fix loop: each fix I asked for broke something that already worked. After 5 to 10 prompts, the day's free credits were gone. I finished the fix the next day, after the credits reset, and it took hours, not days. I spent ₹0 and never thought about paying.</p>

<p>So my own answer to "how much does it cost to fix" is ₹0 and one lost day, on the free plan. Below I work out what the same fix would cost if you did pay, on each plan, in rupees, with GST. All prices were read on 27 October 2026.</p>

<h2>What each plan costs in rupees</h2>
<p>Both tools price in US dollars. Neither pricing page shows a rupee price. I converted at ₹95.27 to the dollar, the open.er-api.com rate for 27 October 2026, and added 18% GST in the last column (more on GST below).</p>
<table>
<thead><tr><th>Plan</th><th>USD</th><th>₹ before GST</th><th>₹ with 18% GST</th><th>What you get to build with</th></tr></thead>
<tbody>
<tr><td>Lovable Free</td><td>$0</td><td>₹0</td><td>₹0</td><td>5 build credits a day, capped at 30 a month</td></tr>
<tr><td>Lovable Pro, monthly</td><td>$25/month</td><td>₹2,382</td><td>₹2,810</td><td>100 credits a month plus 5 a day</td></tr>
<tr><td>Lovable Pro, yearly</td><td>$250/year</td><td>₹23,817</td><td>₹28,104</td><td>Same credits, works out to $21 a month</td></tr>
<tr><td>Lovable Business, monthly</td><td>$50/month</td><td>₹4,763</td><td>₹5,621</td><td>100 credits a month plus 5 a day</td></tr>
<tr><td>Bolt Free</td><td>$0</td><td>₹0</td><td>₹0</td><td>1M tokens a month, at most 300K a day</td></tr>
<tr><td>Bolt Pro</td><td>$25/month</td><td>₹2,382</td><td>₹2,810</td><td>10M tokens a month, no daily limit</td></tr>
<tr><td>Bolt Teams</td><td>$30/member/month</td><td>₹2,858</td><td>₹3,373</td><td>From 10M tokens per member</td></tr>
</tbody>
</table>
<p>The rupee figures will move with the exchange rate. When the rupee weakens, the same $25 plan costs more, even though nothing on the pricing page changed. If you are reading this months later, multiply the dollar price by that day's rate and add 18%.</p>
<p>Bolt has a yearly toggle that says "save up to 28%", but the page did not show the yearly figure when I read it, so I have left it out.</p>

<h2>What did my stuck day use up?</h2>
<p>My Lovable fix loop went through the free plan's 5 daily credits in 5 to 10 prompts. Lovable's own examples explain why the count is a range. In its default build mode, the cost of a message depends on how much work it does. The pricing page lists "make the button gray" at 0.50 credits, "remove the footer" at 0.90, and adding login at 1.20. A landing page with three generated images is listed at 1.70 on the pricing page and at about 2.00 in the help docs.</p>
<p>A fix prompt sits at the small end of that list. At 0.50 to 1 credit each, 5 credits buy 5 to 10 of them, which is what happened to me. All of my prompts that day went on small repairs, one after another, each one undoing something the last one had fixed. None of the day's credits went on new features.</p>

<h2>What would that same day cost on a paid plan?</h2>
<p>Lovable Pro is $25 for 100 monthly credits. That is $0.25 a credit, or about ₹23.82 at 27 October's rate, and about ₹28.10 with GST. Paid plans also get the same 5 free build credits each day, so the first 5 credits of any day cost nothing extra.</p>
<table>
<thead><tr><th>Scenario</th><th>Credits</th><th>₹ before GST</th><th>₹ with GST</th></tr></thead>
<tbody>
<tr><td>My stuck day, on the free plan</td><td>5 (daily grant)</td><td>₹0</td><td>₹0</td></tr>
<tr><td>My stuck day, if it had come out of Pro's monthly credits</td><td>5</td><td>₹119</td><td>₹140</td></tr>
<tr><td>A day twice as long as mine</td><td>10</td><td>₹238</td><td>₹281</td></tr>
<tr><td>A full month of Pro credits spent on fixes</td><td>100</td><td>₹2,382</td><td>₹2,810</td></tr>
</tbody>
</table>
<p>The second row is the price on paper. On Pro, those 5 credits would have come from the free daily grant first, so my actual stuck day would still have cost ₹0. Paying only helps on the day you need more than 5 credits. For me that would have meant carrying on past prompt 10 instead of waiting for the next morning.</p>
<p>On Business the monthly credit count is the same 100, but the plan costs $50. Lovable's pricing page says Business charges the same for running apps and AI features as Pro, but its credits are priced higher. For a one-page site, I cannot see a reason to pay double.</p>

<h2>Why did Bolt not get stuck?</h2>
<p>Bolt built my landing page and I did not hit a loop or a limit. That is one landing page, so it says nothing about how Bolt handles a bigger app.</p>
<p>What I can say is that the two free plans count differently. Bolt meters tokens, the chunks of text the model reads and writes. The free plan allows 300K a day and 1M a month. Lovable meters credits per message, and the free plan allows 5 a day and 30 a month. A token budget does not map to a fixed number of prompts, because a short request on a small project uses far fewer tokens than a long one on a big project. So I cannot turn Bolt's 300K into a prompt count the way I did for Lovable.</p>
<p>The practical difference shows up at the monthly cap. Lovable's 30-credit monthly cap on the free plan is six days like my stuck day. After that you wait for the next month or you pay.</p>

<h2>Should you pay or wait for the reset?</h2>
<p>Wait, if the app is for you and nobody is waiting on it. I did that and lost one day. The next day's fix took hours, and it cost nothing.</p>
<p>Pay, if a client or your own practice needs the page live by a date. Work it out per day of delay. If one extra day costs you more than about ₹2,810, the Pro month is cheaper than waiting.</p>
<p>Paying to escape a loop is a poor buy. On Pro I would have gone past prompt 10 the same day, and I expect each extra prompt would have been one more small repair that broke something else. More credits would only have let me loop for longer.</p>
<p>A caution on the monthly plan: Lovable's docs say monthly credits expire two months after they are issued. Pay for one month to finish a page, forget to cancel, and the second month's ₹2,810 buys credits you may never use.</p>

<h2>A worked example: a CA's practice page</h2>
<p>Say you are a chartered accountant in Surat and you want a one-page site for your practice: your name, your services, office hours and a contact form. This is an example, not a client of mine. Here is how I would budget it from my own numbers.</p>
<table>
<thead><tr><th>Step</th><th>Lovable credits (from Lovable's examples)</th><th>Cost on Free</th><th>Cost on Pro (₹ with GST)</th></tr></thead>
<tbody>
<tr><td>First build of the page with images</td><td>about 1.70 to 2.00</td><td>₹0, inside the day's 5</td><td>₹0, inside the day's 5</td></tr>
<tr><td>Small edits: colours, text, footer</td><td>0.50 to 0.90 each</td><td>₹0 until the day's 5 run out</td><td>about ₹14 to ₹25 each after the first 5 credits</td></tr>
<tr><td>A fix loop like mine</td><td>5 in a day</td><td>₹0, but the day is gone</td><td>about ₹140 if paid from monthly credits</td></tr>
<tr><td>Adding a login for clients</td><td>about 1.20</td><td>₹0 if credits are left</td><td>about ₹34</td></tr>
</tbody>
</table>
<p>On the free plan this page can be done for ₹0 if you are willing to spread it over a few days. On Pro it fits easily inside one month's ₹2,810, with most of the 100 credits left over. Expect to spend less than the month's price.</p>
<p>Hosting is separate. Lovable gives 20 Cloud credits a month on every plan for running the app, counted apart from the build credits. A simple practice page will not come close to my fix loop in cost, but if you add a database or many visitors, check the Cloud line.</p>

<h2>Does GST apply when you pay in dollars?</h2>
<p>For an individual in India, yes in principle. On 1 October 2023 India ended the GST exemption for foreign online services bought for personal use, so the seller is expected to charge IGST. India Briefing puts the rate at up to 18%, and I used the full 18% in my tables as the worst case. Bolt's pricing page marks Pro and Teams with "plus applicable taxes". Lovable's pages do not mention tax. I did not pay either of them, so I have not seen an invoice and cannot tell you what each one actually adds at checkout.</p>
<p>If your practice is GST-registered and the plan is billed to the business, India Briefing's summary says the GST falls on you, the buyer, under reverse charge. A CA reading this will know how that flows into the return. For everyone else, ask whoever files your GST return before you assume either way.</p>
<p>Your card can add one more cost. Many Indian cards charge a foreign-currency markup on dollar payments. Check your card's charges page; I have not included it because it differs by bank.</p>

<h2>How I would avoid the loop next time</h2>
<p>Looking back at those 5 to 10 prompts, every one was a small fix that undid an earlier one. These are the habits I would follow now. I have not tested them on Lovable yet, so they are a plan.</p>
<ul>
<li>Check the page after every prompt, not after a batch. The moment something that worked is broken, stop and describe both problems in one prompt instead of fixing them one at a time.</li>
<li>Keep a list of what already works. When the next fix breaks one of them, you will notice at once instead of three prompts later.</li>
<li>Stop at three. If three fixes in a row each break something, the fourth probably will too. That was my day. Stop, and come back with the reset and a clearer request.</li>
</ul>
<p>Lovable also has a plan mode that costs 1 credit per message and talks through a change before making it. That is more than the 0.50 a small fix costs, and I did not try it, so I cannot say whether it would have saved credits on my page.</p>
<p>The same thing happened to me before I ever opened Lovable. When I asked a chat assistant to build a landing page section by section, the repairs took most of the one to two hours, because each change broke something that worked. I wrote that up in <a href="/articles/ai-app-builders-before-you-hire-a-developer">what the free tiers of Lovable, Bolt and v0 give you</a>, back when I had not used either builder. Two tools, the same loop, so I do not think it is special to Lovable.</p>

<h2>What about hiring someone to fix it?</h2>
<p>I did not, so I have no rupee figure from my own use, and I will not guess one. The ceiling on the tool side is ₹2,810 for a month of Pro with GST. Any quote you get for fixing a one-page site should be measured against that number and against one day of waiting for the free reset.</p>
<p>A landing page is the easy case. If your app has login, a database and payments, the loop has more parts to break, and both the credits and any developer's time will go up. I have not built that on either tool.</p>

<h2>What the free plans will not do</h2>
<p>The real downside of my run was time. The free plan stopped me in the middle of a fix, and the page stayed unfinished until the next day's reset. If a client had been waiting on it, that would have been a lost day for them too.</p>
<p>The second downside is the monthly cap. Lovable Free allows 30 credits a month in total. My kind of stuck day uses 5. Six of those and the free plan is done for the month.</p>
<p>Bolt's free plan did not stop me, but its daily cap of 300K tokens means the same thing could happen there on a bigger project. I did not reach it, so I cannot tell you how many prompts it takes.</p>
<p>For working out what a model costs per request through the API instead of a builder, the <a href="/tools/token-cost">token cost calculator</a> does the same dollar-to-rupee conversion for Claude's models.</p>`,
  faqs: [
    {
      question: "Do unused Lovable credits carry over to the next day?",
      answer:
        "The 5 daily build credits do not. Lovable's pricing page says daily grants expire at the end of each day. Top-up credits you buy last twelve months from purchase.",
    },
    {
      question: "Does Bolt's free plan reset every day?",
      answer:
        "It has two limits. You can use up to 300K tokens a day and 1M tokens a month. The daily limit resets each day, but once the monthly 1M is used, the daily reset does not help until the next month.",
    },
    {
      question: "Is there a rupee price for Lovable or Bolt?",
      answer:
        "Not on their pricing pages as of 27 October 2026. Both list US dollars only, so the rupee amount depends on that day's exchange rate, GST and your card's foreign-currency charges.",
    },
    {
      question: "Does Lovable's yearly plan cost less?",
      answer:
        "Yes. Pro is $250 a year, which is about $21 a month against $25 on monthly billing. Business is $500 a year against $50 a month.",
    },
  ],
  humanReview: {
    experience:
      "Around 2 October 2026 I built a landing page on both Bolt and Lovable, on the free plans. Bolt gave me no trouble. Lovable got stuck in a fix loop: each fix I asked for broke something that already worked. After 5 to 10 prompts, the day's free credits were gone. I finished the fix the next day, after the credits reset, and it took hours, not days. I spent ₹0 and never thought about paying.",
    reviewedAt: "2026-10-27",
  },
  sources: [
    {
      title: "Lovable pricing",
      publisher: "Lovable",
      url: "https://lovable.dev/pricing",
      checkedAt: "2026-10-27",
    },
    {
      title: "Plans and credits",
      publisher: "Lovable docs",
      url: "https://docs.lovable.dev/introduction/plans-and-credits",
      checkedAt: "2026-10-27",
    },
    {
      title: "Subscription plans",
      publisher: "Lovable docs",
      url: "https://docs.lovable.dev/introduction/subscription-plans",
      checkedAt: "2026-10-27",
    },
    {
      title: "Bolt pricing",
      publisher: "StackBlitz",
      url: "https://bolt.new/pricing",
      checkedAt: "2026-10-27",
    },
    {
      title: "USD exchange rates",
      publisher: "ExchangeRate-API (open.er-api.com)",
      url: "https://open.er-api.com/v6/latest/USD",
      checkedAt: "2026-10-27",
    },
    {
      title: "Digital Services in India: Tax Applicability and Compliance",
      publisher: "India Briefing",
      url: "https://www.india-briefing.com/news/tax-digital-services-oidar-in-india-gst-applicability-and-compliance-22465.html",
      checkedAt: "2026-10-27",
    },
  ],
};
