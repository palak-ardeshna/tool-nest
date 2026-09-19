import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Every number below is OpenAI's own published estimate, read on 19 September
 * 2026. The sections marked PARTH need the count from his Plus account: how
 * many Astra messages in Codex before the five-hour banner, the Settings →
 * Usage screenshot, and what the reset offer costs in GBP if it appears.
 */
export const chatgptPlusAfterGpt6Astra: Article = {
  slug: "chatgpt-plus-after-gpt-6-astra",
  title: "ChatGPT Plus After GPT-6 Astra: Which Plan Do You Actually Need?",
  excerpt:
    "Astra arrived on Plus on 3 September, but only in Work and Codex, with an allowance OpenAI puts at five to forty-five messages per five hours. Before you pay for Pro, here is what each option gets you and what the $200 tier's pause changes.",
  category: "ai-tools",
  author: "parth-patel",
  tags: ["AI Tools", "ChatGPT", "GPT-6 Astra", "Codex", "Subscriptions"],
  publishedAt: "2026-09-19",
  image: "/images/articles/chatgpt-plus-after-gpt-6-astra.webp",
  imageAlt:
    "Photograph: an Android phone on a grey desk showing the ChatGPT listing in the Play Store, the OpenAI logo beside an Update button",
  seoTitle: "ChatGPT Plus After GPT-6 Astra: Which Plan?",
  seoDescription:
    "Plus gets Astra only in Work and Codex, at 5–45 messages per five hours. What the $100 and paused $200 Pro tiers, paid resets and rivals give you instead.",
  quickAnswer:
    "If you are on ChatGPT Plus, you already have GPT-6 Astra — in Work and Codex, not in Chat. OpenAI's own estimate for Plus is 5 to 45 Astra messages per five-hour window, with a weekly cap on top, and the reasoning level you pick moves you around inside that range. If you hit the wall, the only upgrade you can buy today is Pro at $100 a month, which OpenAI describes as five times the Plus allowance; new sign-ups to the $200 tier have been paused since 10 September 2026. Plus and Pro accounts can also buy an instant reset, priced at checkout, that restores both windows but pulls your weekly allowance forward rather than adding to it. Most people should stay on Plus, run Astra at Low or Medium effort in Codex, and measure how often they actually hit the limit before spending another $80.",
  pros: [
    "Astra is included in Plus at no extra cost, in Work and Codex",
    "OpenAI now publishes an estimated message range per model and plan, which it did not before",
    "A paid instant reset exists for the week you genuinely need more, without committing to Pro",
    "Pro $100 can be bought today and takes effect immediately, with no annual lock-in",
  ],
  cons: [
    "Plus does not get Astra in Chat; the GPT-6 Pro model in Chat is Pro, Business and Enterprise only",
    "The Plus allowance is a range of 5 to 45 messages, so you cannot budget a task in advance",
    "The $200 tier is closed to new subscribers and upgrades, with no date for reopening",
    "A purchased reset is not extra usage — it restarts your weekly clock, and OpenAI does not refund it",
  ],
  alternatives: [
    { name: "ChatGPT Pro $100", url: "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers", note: "Five times the Plus allowance and GPT-6 Pro in Chat. The one upgrade path that is open." },
    { name: "Claude Pro", url: "https://claude.com/pricing", note: "$20 monthly or $17 a month paid annually. Claude Code is included, which is the closest thing to Codex on the other side." },
    { name: "Google AI Pro", url: "https://gemini.google/gb/subscriptions/?hl=en-GB", note: "£18.99 a month in the UK, four times the free usage, 5TB of storage. Ultra is £79.99 or £189.99." },
    { name: "Stay on Plus, lower the effort", note: "OpenAI's guidance says Astra at Low can beat Sol at High. Costs nothing to try." },
  ],
  faqs: [
    {
      question: "Does ChatGPT Plus include GPT-6 Astra?",
      answer:
        "Yes, in Work and Codex, and no, in Chat. OpenAI's help page, read on 19 September 2026, states that Plus includes Astra in Work and Codex but not GPT-6 Pro in Chat, and that GPT-6 Pro — which is Astra under another name — is available in Chat on eligible Pro, Business and Enterprise plans. The launch announcement said Astra was coming to all Plus users, which is why the community thread asking where it is has run since 7 September; OpenAI Support's reply there was that there is no confirmed roadmap for Astra in Chat on Plus.",
    },
    {
      question: "How many Astra messages does Plus get?",
      answer:
        "OpenAI publishes an estimate rather than a limit: 5 to 45 local messages per five-hour window on Plus, 25 to 225 on Pro $100 and 100 to 900 on Pro $200, with a separate weekly limit that also has to have room in it. The range is wide because a message on Astra at High effort with a large file attached uses far more of your allowance than a short question at Low. Work and Codex share one pool, and switching models does not refill it.",
    },
    {
      question: "Can I still upgrade to ChatGPT Pro $200?",
      answer:
        "Not as of 19 September 2026. OpenAI paused new sign-ups and upgrades to the $200 tier on 10 September, citing demand for Astra, and the pause covers moves from Free, Go, Plus and Pro $100. Existing $200 subscribers keep the plan, and anyone who had it on 10 September gets one chance to return within 30 days of it lapsing. Pro $100 is unaffected and can be bought from Settings → My Plan.",
    },
    {
      question: "What does a paid reset cost?",
      answer:
        "OpenAI does not publish a price; it appears at checkout and varies by account and billing country. What the help page does say is how it works: the reset restores both the five-hour and weekly Work and Codex allowance immediately, even if you had usage left, and your next automatic weekly reset moves to seven days after your first request following the purchase. It is a way to bring next week's allowance forward, not a top-up, and purchases are generally not refunded.",
    },
  ],
  sources: [
    { title: "Managing usage with GPT-6 Astra in Work and Codex", publisher: "OpenAI", url: "https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex", checkedAt: "2026-09-19" },
    { title: "About ChatGPT Pro tiers", publisher: "OpenAI", url: "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers", checkedAt: "2026-09-19" },
    { title: "Paid weekly Work and Codex rate limit resets", publisher: "OpenAI", url: "https://help.openai.com/en/articles/20001507-paid-weekly-work-and-codex-rate-limit-resets", checkedAt: "2026-09-19" },
    { title: "What is ChatGPT Plus?", publisher: "OpenAI", url: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus", checkedAt: "2026-09-19" },
    { title: "OpenAI has paused its $200 ChatGPT sign-ups as 'unprecedented' demand for new model Astra strains its system", publisher: "Fortune", url: "https://fortune.com/2026/09/11/openai-astra-chatgpt-pro-pause/", checkedAt: "2026-09-19" },
    { title: "GPT-6 Astra access on Plus shouldn't be limited to metered Work and Codex", publisher: "OpenAI Developer Community", url: "https://community.openai.com/t/gpt-6-astra-access-on-plus-shouldn-t-be-limited-to-metered-work-and-codex/1395582", checkedAt: "2026-09-19" },
    { title: "Pricing", publisher: "Anthropic", url: "https://claude.com/pricing", checkedAt: "2026-09-19" },
    { title: "Google AI Plus, Pro and Ultra subscriptions (United Kingdom)", publisher: "Google", url: "https://gemini.google/gb/subscriptions/?hl=en-GB", checkedAt: "2026-09-19" },
  ],
  content: `<p>GPT-6 Astra reached ChatGPT on 3 September 2026 and the question in my inbox since has been the same one: is Plus still the right plan, or is it time to pay for Pro? Two weeks in I can answer it, partly from OpenAI's own numbers, which it now publishes in more detail than it used to, and partly from my own Plus account. When I wrote about <a href="/articles/which-ai-assistant-is-worth-paying-for">which assistant is worth paying for</a> on 7 September, Astra had been out for four days and nobody had a usage figure. Now there is one, and it is smaller than the launch suggested.</p>

<h2>The decision, in one table</h2>

<table>
<thead>
<tr><th>If you…</th><th>Do this</th><th>Cost</th><th>What you get</th></tr>
</thead>
<tbody>
<tr><td>Use Astra a few times a day</td><td>Stay on Plus, run Astra at Low or Medium in Codex</td><td>$20 a month</td><td>OpenAI's estimate: 5–45 Astra messages per five hours in Work and Codex, plus a weekly cap</td></tr>
<tr><td>Hit the weekly wall one week in four</td><td>Buy an instant reset that week</td><td>$20 plus a price shown at checkout</td><td>Both windows restored now; your weekly clock restarts from your next request</td></tr>
<tr><td>Hit the five-hour wall most days</td><td>Upgrade to Pro $100</td><td>$100 a month</td><td>5x the Plus allowance, and GPT-6 Pro in Chat</td></tr>
<tr><td>Want the 20x tier</td><td>You cannot, today</td><td>$200 a month</td><td>New sign-ups and upgrades paused since 10 September</td></tr>
<tr><td>Mostly want an agent on your code</td><td>Consider Claude Pro instead</td><td>$20 monthly, $17 annual</td><td>Claude Code is included; see <a href="/articles/chatgpt-vs-claude-for-coding">my coding comparison</a></td></tr>
</tbody>
</table>

<h2>What changed on 3 September</h2>

<p>Astra is OpenAI's most capable model and it is expensive to run, which is the whole story of the fortnight since launch. The rollout stalled badly enough that OpenAI handed every existing Plus, Pro and Business subscriber a banked reset on 3 September and again on 4 September, then pushed an automatic reset to everyone on 7 September. On 10 September it stopped taking new subscriptions to the $200 Pro tier altogether. Fortune's report the next day quoted Thibault Sottiaux calling demand "unprecedented" and describing the pause as "the smallest step that allows us to continue giving the broadest access possible". That is the context for everything below: the allowances are what they are because the model is capacity-constrained, not because OpenAI has decided Plus subscribers deserve less.</p>

<h2>What Plus gets, and where</h2>

<p>This is the part the launch announcement blurred. Plus includes Astra in Work and Codex — the agent surfaces, the ones that edit files and run tasks — but not in Chat. In Chat, the model called GPT-6 Pro is Astra, and it is available on Pro, Business and Enterprise only. On Plus, Chat still offers you the GPT-5.6 family: Sol, Terra and Luna. A community thread has been asking since 7 September why "all ChatGPT Plus users" turned out to mean this, and OpenAI Support's answer in that thread was that there is no confirmed roadmap or timeline for Astra in normal Chat on Plus. I would not plan around it arriving.</p>

<p>Work and Codex share one allowance, measured over a five-hour window and a weekly window, and you need room in both. OpenAI's table of estimated local messages per five-hour period, read on 19 September, gives Plus 5 to 45 on Astra, 10 to 100 on Sol, 25 to 200 on Terra and 250 to 2,000 on Luna. Pro $100 is five times each of those; Pro $200 is twenty. The spread inside each range is the reasoning level and the size of what you attach: a short question at Low sits near the top of the range, a long agent task at High with Fast mode on sits near the bottom. OpenAI's own guidance, which I found more useful than the table, is that Astra at Low can outperform Sol at High, so the cheap way to have Astra is to stop asking it to think hard.</p>

<h2>What I measured on my own Plus account</h2>

<!-- PARTH: the article is this section. Open Settings → Usage in the desktop app and screenshot it — that replaces the stock image. Then run Astra in Codex at Medium on one real tool-nest task and count messages until the five-hour banner. -->
<p><!-- PARTH: the task, the number of Astra messages before the five-hour limit, how many minutes that took, and what the weekly meter showed afterwards. Did the "Buy an instant reset" option appear in Usage settings, and at what price in GBP? --></p>

<p><!-- PARTH: one sentence on whether that number changes your answer — i.e. did you hit the wall on a normal evening's work, or did you have to try? --></p>

<h2>The $200 tier is closed, so the upgrade is $100</h2>

<p>OpenAI describes Pro $100 as five times the Plus allowance and Pro $200 as twenty times, and the two tiers otherwise share the same features. Since 10 September the $200 tier is closed to new subscriptions and to upgrades from Free, Go, Plus or Pro $100. Existing $200 subscribers keep it, and anyone who had it on 10 September gets a single chance to come back within 30 days of it lapsing. Pro $100 is unaffected: you can upgrade from Settings → My Plan, the new limits apply immediately, and there is no annual plan on any tier, so the worst case is one month at $100. If you were reading comparisons that list the $200 tier as your next step, they were written before the pause.</p>

<h2>Buying a reset instead of a plan</h2>

<p>The option I expect most Plus subscribers to miss is the instant reset. Plus and Pro personal accounts can buy one from Usage settings in the ChatGPT desktop app once some allowance has been used, or from the banner that appears when the weekly limit is reached. Reaching only the five-hour limit does not trigger the banner, which is easy to misread as the option not existing; the settings route still works. The price is shown at checkout and OpenAI does not publish it, and availability varies by billing country, so what you see may differ from what I see.</p>

<p>Read the mechanics before you buy, because it is not what the button implies. A purchased reset restores both the five-hour and the weekly Work and Codex allowance immediately — even if you had usage left — and your next automatic weekly reset moves to seven days after your first request following the purchase. In other words you are pulling next week's allowance forward, not adding to this week's, and the help page says refunds are generally not offered. There is a separate pay-as-you-go credits balance that kicks in after your included usage runs out, with its own terms. A reset makes sense for the one week a month a deadline lands on; if you are buying one every week, that money is most of the way to Pro $100 already.</p>

<h2>Or move the twenty dollars</h2>

<p>The honest alternative to paying OpenAI more is paying someone else the same. Claude Pro is $20 monthly or $17 a month on the annual plan, includes Claude Code, and Anthropic sells Max at $100 for five or twenty times the Pro usage — a tier structure that now mirrors OpenAI's almost exactly, minus the pause. Google AI Pro is £18.99 a month on the UK subscriptions page, described as four times the free usage, with AI Ultra at £79.99 or £189.99 for five or twenty times Pro. None of the three tells you a message count you can plan on; OpenAI is, as of this month, the only one publishing even a range. If the reason you want Astra is an agent working on your code, the comparison that matters is Codex on Plus against Claude Code on Pro, and I have written that up separately.</p>

<h2>What I would do</h2>

<p>Stay on Plus. Set Astra to Low or Medium in Codex, keep Sol for Chat, and open Settings → Usage before any large task so you know which window you are about to spend. If you hit the weekly limit in a week that matters, buy the reset once and note the date, because it moves your clock. If you hit the five-hour limit on most working days, that is the signal to pay $100, and it is a signal you can only get by counting. The mistake is upgrading on launch-week frustration, when the allowance was being reset by hand and nobody's numbers meant anything.</p>

<p>Prices, allowances and the Pro $200 pause above are as published on OpenAI's help pages, Anthropic's pricing page and Google's UK subscriptions page on 19 September 2026. All three change without notice.</p>`,
};
