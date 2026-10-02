import type { Article } from "@/content/types";

/**
 * Explainer with a table and numbered steps, rewritten on the URL first
 * published 2026-09-26 (old text deleted 2026-09-29, not restored). Palak's own
 * facts (chat, 2026-10-02): a fetch to something on the same site came back
 * cached when he wanted it fresh, he noticed because a deploy appeared to do
 * nothing, an explicit cache option on the fetch fixed it, and it cost him
 * about an hour to work out. Framework behaviour is from the Next.js docs
 * shipped in node_modules for the exact version this site runs, 16.3.1, read
 * 2026-10-02: fetch caching is opt-in, the default is "auto no cache", and a
 * statically prerendered route still fetches only once during the build.
 */
export const nextJs16CachingDefaultsThatBite: Article = {
  slug: "next-js-16-caching-defaults-that-bite",
  title: "Next.js Does Not Cache Your Fetch. The Build Does",
  excerpt:
    "Every article says Next.js caches fetch by default. On 16.3.1 it does not, caching is opt-in. You still get stale data, for a different reason, and that is why the usual fix does not work.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Next.js", "Caching", "Rendering", "Deployment", "Debugging"],
  publishedAt: "2026-09-26",
  contentUpdatedAt: "2026-10-02",
  seoTitle: "Next.js 16 Caching: Why a Deploy Did Nothing",
  seoDescription:
    "On Next.js 16.3.1 fetch caching is opt-in, yet data still goes stale because prerendered routes fetch once at build. How to tell the two apart.",
  content: `
<p>A deploy went out and nothing on the page changed. Not an error, not a failure, just the same content as before, which is the kind of problem that makes you doubt the deploy rather than the framework.</p>

<p>What had happened was that a fetch to something on the same site was giving me data that was not fresh, on Next.js 16.3.1. Adding an explicit cache option to that fetch is what fixed it. Working out why cost me about an hour, and most of that hour went on advice that no longer applies to this version, because almost everything written about this says Next.js caches fetch by default and that is not what the docs in my own node_modules say.</p>

<h2>What the installed docs actually say</h2>
<p>The fetch reference shipped with 16.3.1, read on 2 October 2026, is explicit: "Caching is opt-in. Set <code>cache: 'force-cache'</code> to cache any request." The default is called auto no cache, and it behaves like this:</p>

<table>
<thead><tr><th>Setting</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><code>auto no cache</code> (default)</td><td>Fetches on every request in development. Fetches once during <code>next build</code>, because the route is statically prerendered. Fetches per request if request-time APIs are used on the route.</td></tr>
<tr><td><code>no-store</code></td><td>Fetches on every request, even without request-time APIs.</td></tr>
<tr><td><code>force-cache</code></td><td>Looks in the server cache first, matching on URL, method, headers and body. Only 200 responses are stored.</td></tr>
</tbody>
</table>

<h2>So why was my data stale?</h2>
<p>Not because of a data cache. Because of prerendering. The route was static, so the fetch ran once while the site was being built, and the result became part of the HTML. Every visitor after that was reading a build artefact, not making a request.</p>
<p>This distinction matters because it changes the fix. If you believe a cache is holding your data, you go looking for something to clear or revalidate. There was nothing to clear. The request had already happened, hours earlier, on a machine running a build.</p>

<h2>How to tell which one is biting you</h2>
<ol>
<li>Does it go stale only in production and behave correctly in development? That points at prerendering, because development fetches every time.</li>
<li>Does a redeploy fix it until the data changes again? That is a build-time fetch, not a cache.</li>
<li>Did you ever write <code>force-cache</code>, or a <code>revalidate</code> value? If not, nothing opted you into the data cache on this version.</li>
<li>Does the route use request-time APIs? If it does, the default already fetches per request and your problem is somewhere else.</li>
</ol>

<h2>Two things that caught me out</h2>
<p>The first is that the advice online is version-specific and almost none of it says which version it is for. The behaviour here changed; the articles did not. An hour went into reading guidance written for an older model of this exact API.</p>
<p>The second is from the docs rather than from me: conflicting options such as <code>{ revalidate: 3600, cache: 'no-store' }</code> are not allowed, and rather than erroring, both are ignored, with a warning printed only in development. A production build quietly does neither of the things you asked for.</p>

<h2>What to do about it</h2>
<p>Be explicit on anything that must be fresh, rather than relying on a default whose name you would have to look up. If a page must reflect data at request time, say so on the fetch and check the build output to confirm the route did not stay static.</p>
<p>And when a deploy appears to have done nothing, separate the two possible stories before you start changing code: either the new build never reached the server, or it reached it and is serving data captured during the build. I have had the first kind too, when <a href="/articles/deploying-nextjs-to-hostinger-from-github-actions">an upload finished and left the site half updated</a>.</p>
`,
  sources: [
    {
      title: "fetch API reference, Next.js 16.3.1 (docs shipped in node_modules)",
      publisher: "Vercel",
      url: "https://nextjs.org/docs/app/api-reference/functions/fetch",
      checkedAt: "2026-10-02",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-02",
    experience:
      "What had happened was that a fetch to something on the same site was giving me data that was not fresh, on Next.js 16.3.1. Adding an explicit cache option to that fetch is what fixed it. Working out why cost me about an hour, and most of that hour went on advice that no longer applies to this version, because almost everything written about this says Next.js caches fetch by default and that is not what the docs in my own node_modules say.",
  },
};
