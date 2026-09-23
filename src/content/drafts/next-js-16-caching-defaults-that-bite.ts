import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * Scaffolded from the official Next.js 16 upgrade guide read 2026-09-23. The
 * sections marked PARTH are the article — and this site's own next.config.mjs
 * already documents the s-maxage failure, so the material exists.
 * Cover: WordPress Photo Directory, CC0 1.0 — illustrative, not a product interface.
 */
export const nextJs16CachingDefaultsThatBite: Article = {
  slug: "next-js-16-caching-defaults-that-bite",
  title: "The Next.js 16 Caching Defaults That Bite After You Deploy",
  excerpt:
    "The upgrade codemod handles the renames. What it cannot handle is a set of caching defaults that are all reasonable on Vercel and all capable of serving a broken page anywhere else. These are the four that cost me time.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Next.js", "Caching", "Deployment", "Developer Tools", "React"],
  publishedAt: "2026-09-23",
  image: "/images/articles/next-js-16-caching-defaults-that-bite.webp",
  imageAlt:
    "A wall-mounted network rack holding a sixteen-port switch, a router and a tangle of Ethernet cables",
  seoTitle: "Next.js 16: Caching Defaults That Bite",
  seoDescription:
    "Next.js 16 changed image cache TTL, revalidateTag's signature and PPR. Plus the year-long s-maxage default that serves unstyled pages off a stale edge.",
  quickAnswer:
    "Four changes matter after the codemod runs. Images now cache for four hours by default instead of sixty seconds. revalidateTag requires a second argument naming a cacheLife profile, and the one-argument form is a TypeScript error. The experimental dynamicIO and useCache flags are gone, replaced by a top-level cacheComponents option that is not a rename and will surface build errors for uncached data outside Suspense. And the one that is not in the upgrade guide at all: prerendered HTML still defaults to a year of shared-cache lifetime, which on any host that does not purge its edge on deploy will eventually serve a page whose stylesheet no longer exists.",
  pros: [
    "The upgrade codemod genuinely handles the mechanical renames, including middleware to proxy",
    "Async params and searchParams are now the only form, which removes a whole class of ambiguity",
    "cacheLife and cacheTag lost their unstable_ prefix, so the imports stop churning",
    "updateTag gives read-your-writes semantics without the revalidate-then-hope dance",
  ],
  cons: [
    "The year-long s-maxage on prerendered HTML is a footgun on any host that is not Vercel",
    "cacheComponents is presented near the old flags but is a migration, not a rename",
    "The image defaults changed in four separate ways, and only one of them is obvious",
    "Removing size and First Load JS from build output takes away the number people used to watch",
  ],
  alternatives: [
    { name: "Stay on Next.js 15", url: "https://nextjs.org/docs/app/guides/upgrading/version-16", note: "Still supported. The right call if you use PPR today, since the guide says to stay on your current 15 canary." },
    { name: "Run the codemod", url: "https://nextjs.org/docs/app/guides/upgrading/codemods", note: "npx @next/codemod@canary upgrade latest. Handles config, lint migration and the proxy rename." },
    { name: "Opt out of Turbopack", url: "https://nextjs.org/docs/app/guides/upgrading/version-16", note: "next build --webpack. Needed if a plugin injects a webpack config, which now fails the build outright." },
    { name: "Cache Components migration guide", url: "https://nextjs.org/docs/app/guides/upgrading/version-16", note: "The separate path for anyone who was on experimental PPR, dynamicIO or useCache." },
  ],
  faqs: [
    {
      question: "Does the upgrade codemod cover the breaking changes?",
      answer:
        "The mechanical ones. It updates the config for Turbopack, migrates next lint to the ESLint CLI, renames middleware to proxy, and strips unstable_ prefixes. It does not run every migration — if you still have synchronous params, cookies or headers from the version 15 compatibility window, the guide tells you to run the async request API codemod separately.",
    },
    {
      question: "Why did my build start failing with a webpack error I did not write?",
      answer:
        "Turbopack is the default for next build in 16, and a project with a custom webpack configuration fails the build deliberately rather than silently ignoring it. If you did not write one, a plugin added it. Either migrate the config, run next build --turbopack to ignore it, or opt out with next build --webpack.",
    },
    {
      question: "Is cacheComponents just the new name for dynamicIO?",
      answer:
        "No, and the guide is explicit about it: enabling cacheComponents is not a rename-only change. It can surface build errors for uncached data outside Suspense boundaries and requires adopting the Cache Components model. If you were not deliberately using the experimental flags, remove them rather than swapping in the new one.",
    },
  ],
  sources: [
    { title: "How to upgrade to version 16", publisher: "Vercel", url: "https://nextjs.org/docs/app/guides/upgrading/version-16", checkedAt: "2026-09-23" },
  ],
  content: `<p>The Next.js 16 upgrade guide is unusually good. It tells you to point your agent at version-matched docs, it ships codemods for the mechanical work, and it is honest about which changes are migrations rather than renames. Run the codemod and most of the diff writes itself.</p>

<p>What the guide cannot tell you is which defaults will be fine in development, fine in the build, and wrong in production three deploys later. Those are caching defaults, and they are tuned for a host that purges its edge on every deploy.</p>

<!-- PARTH: this section is the article. You have already hit one of these — the comment in next.config.mjs on this site describes it. Expand it, do not invent a second one. -->
<h2>The one that took the site down</h2>

<p><!-- PARTH: the s-maxage incident, in full. What the page looked like (unstyled, not blank?), how you first heard about it, why it appeared intermittent, how long it took to work out that the edge was holding HTML pointing at a deleted CSS hash, and what you set it to in the end. Dates and the actual header value. --></p>

<p><!-- PARTH: the detail that made it hard to diagnose — most likely that it only affected visitors routed to one edge node, so it looked fine from your machine. If you have a screenshot of the unstyled page, this is where it goes. --></p>

<h2>Prerendered HTML still defaults to a year</h2>

<p>This one is not in the upgrade guide, because it is not new in 16. It is simply the default that most people never look at: Next.js serves prerendered pages with a shared-cache lifetime of <code>s-maxage=31536000</code>.</p>

<p>On Vercel that is safe, because the platform invalidates its own edge when you deploy. Everywhere else it is the bug that serves a broken page. Every build gives your CSS and JavaScript new content-hashed filenames and deletes the previous ones. HTML held at an edge node from an older build asks for a stylesheet that no longer exists, gets a 404, and renders as unstyled text. Only the visitors routed to that stale node see it, which is why it reads as intermittent rather than broken — and why you will not reproduce it from your own machine.</p>

<p>The fix is to bound the window rather than trust the purge:</p>

<pre><code>public, max-age=0, s-maxage=300, stale-while-revalidate=3600</code></pre>

<p><code>max-age=0</code> keeps browsers revalidating, which is cheap because ETags are already served, and a short <code>s-maxage</code> limits how long a deploy can strand anyone. If you deploy anywhere other than Vercel, set this before you need it. The <a href="/articles/deploying-a-nextjs-app-four-routes">four deployment routes</a> differ mostly in whether they purge for you.</p>

<h2>Images now cache for four hours, not sixty seconds</h2>

<p>The default for <code>images.minimumCacheTTL</code> moved from 60 seconds to 14400 — four hours. The reasoning is sound: upstream images that arrive without a cache-control header were being revalidated every minute, burning CPU for no benefit.</p>

<p>It is still a change in behaviour you can see. Replace an image at the same URL and it may take four hours to appear. Three other image defaults moved at the same time and are easier to miss: <code>images.qualities</code> now allows only 75, so a quality prop of 80 is coerced down; the value 16 is gone from <code>imageSizes</code>; and redirects are capped at 3 instead of unlimited. Local images with query strings now need an explicit <code>localPatterns.search</code> entry or they stop resolving.</p>

<h2>revalidateTag changed shape</h2>

<p>It takes a second argument now, naming a cacheLife profile. The single-argument call is deprecated and produces a TypeScript error, so this one at least fails loudly:</p>

<pre><code>revalidateTag('posts', 'max')</code></pre>

<p>There is also a new <code>updateTag</code>, for Server Actions only, which expires and refreshes within the same request so a user sees their own write immediately instead of stale data. That is the one to reach for on forms and settings; <code>revalidateTag</code> is for content where a delay is acceptable.</p>

<h2>What to check before you call the upgrade done</h2>

<p>Run the codemod, then look at four things by hand: your HTML cache-control header if you are not on Vercel, whether anything depended on images updating quickly, every <code>revalidateTag</code> call, and whether a plugin is injecting a webpack config that will now fail the build. The build output no longer prints size or First Load JS, so if that number was part of your <a href="/articles/ci-pipelines-that-stay-under-ten-minutes">CI checks</a>, it needs replacing with a Lighthouse run.</p>

<p>Details above are from the official Next.js 16 upgrade guide as read on 23 September 2026, against Next.js 16.3.1.</p>`,
};
