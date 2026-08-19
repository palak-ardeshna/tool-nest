import type { Article } from "@/content/types";

export const freeApisWorthBuildingOn: Article = {
  slug: "free-apis-worth-building-on",
  title: "Free APIs Worth Building On (And How to Tell Before You Commit)",
  excerpt:
    "Free tiers disappear, rate limits change and terms get rewritten. Here is how to judge whether an API is safe to build on, and a few that pass.",
  category: "apis",
  author: "priya-raman",
  tags: ["APIs", "Developer Tools", "Software"],
  publishedAt: "2026-06-25",
  image: "/images/articles/free-apis-worth-building-on.webp",
  imageAlt: "Small pale cubes joined by fine indigo threads forming a network",
  seoTitle: "Free APIs Worth Building On in 2026",
  seoDescription:
    "How to judge whether a free API is safe to depend on — pricing history, rate-limit clarity, deprecation policy — plus categories where the free options are genuinely solid.",
  quickAnswer:
    "Judge an API on its history, not its current free tier. Three signals predict stability: a published deprecation policy, versioned endpoints that are actually still running, and a paid tier that makes obvious commercial sense. An API with no visible business model is a future migration.",
  pros: [
    "Several categories have genuinely stable free options",
    "Open data APIs from public institutions rarely disappear",
    "Good free tiers let you validate before committing to cost",
  ],
  cons: [
    "Free tiers are the first thing cut when funding changes",
    "Rate limits often tighten without much notice",
    "Terms of use can change in ways that break your use case",
  ],
  faqs: [
    {
      question: "How do I reduce the cost of an API disappearing?",
      answer:
        "Wrap it. One module in your codebase that knows the API's shape, and your own types everywhere else. Then a replacement is one file, not a search across the project.",
    },
    {
      question: "Are public-sector APIs a safe bet?",
      answer:
        "Generally the safest available — they are funded to exist rather than to grow. The trade is that they are often slower, less documented and less pleasant to work with.",
    },
  ],
  content: `<p>Every "top free APIs" list ages badly, because half the entries stop being free. The useful thing is not the list — it is the judgement.</p>

<h2>Three signals worth more than the free tier</h2>

<h3>1. A published deprecation policy that has been honoured</h3>

<p>Anyone can write "we will give twelve months' notice". The question is whether they have. Check whether previous versions were actually retired on the stated timeline, or whether v1 quietly stopped responding one Tuesday.</p>

<p>An API with several versions still running, years later, is telling you something real about how it treats dependants.</p>

<h3>2. A paid tier that makes commercial sense</h3>

<p>Counter-intuitive, but: a free API attached to a business that clearly makes money from the paid tier is safer than one with no visible revenue at all.</p>

<blockquote>
<p>If you cannot work out how the API makes money, you are looking at either a loss leader that will be cut, or a data-collection product where you are the input.</p>
</blockquote>

<h3>3. Rate limits stated in numbers</h3>

<p>"Reasonable use" is not a limit; it is a reservation of the right to cut you off without warning. A documented number — requests per minute, per day, per key — means someone thought about capacity, and it means you can plan.</p>

<h2>Categories where free is genuinely reliable</h2>

<ul>
<li><strong>Public-sector and open data.</strong> Weather, geography, transport, statistics. Funded to exist rather than to grow. Often unglamorous to work with, and rarely withdrawn.</li>
<li><strong>Standards and reference data.</strong> Currency codes, country data, time zones. Slow-moving and frequently mirrorable, which removes the dependency entirely.</li>
<li><strong>Developer infrastructure with strong paid tiers.</strong> The free tier is marketing for the paid one, which is a stable arrangement as long as the paid one sells.</li>
</ul>

<h2>Categories where free is a trap</h2>

<p>Anything where the data is the product. Company information, contact data, social graphs, aggregated pricing. The free tier exists to demonstrate value before the sales conversation, and it will be narrowed the moment your usage suggests you could pay.</p>

<h2>Build so that leaving is cheap</h2>

<p>The practical defence is one module and your own types:</p>

<pre><code>// One file knows the vendor. Nothing else does.
export type Forecast = { tempC: number; summary: string; at: Date };

export async function getForecast(lat: number, lon: number): Promise&lt;Forecast&gt; {
  const res = await fetch(\`\${BASE}/v2/point?lat=\${lat}&amp;lon=\${lon}\`, {
    headers: { authorization: \`Bearer \${process.env.WEATHER_KEY}\` },
  });
  if (!res.ok) throw new Error(\`Weather API \${res.status}\`);
  const data = await res.json();
  return { tempC: data.temp_c, summary: data.text, at: new Date(data.ts) };
}</code></pre>

<p>Everything downstream depends on <code>Forecast</code>, not on the vendor's field names. Swapping providers becomes a morning rather than a project. This is a small amount of work up front and it is the entire difference between an inconvenience and a migration.</p>

<h2>The check before you commit</h2>

<ol>
<li>Find the changelog. Is it maintained?</li>
<li>Find the deprecation policy. Has it been honoured?</li>
<li>Find the pricing page. Does the business make sense?</li>
<li>Search for people complaining about limit changes. There will be some; the question is how they were handled.</li>
</ol>

<p>Twenty minutes, and it is a better predictor than any list of recommendations, including this one.</p>`,
};
