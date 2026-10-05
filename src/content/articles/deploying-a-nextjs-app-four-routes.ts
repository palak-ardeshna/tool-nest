import type { Article } from "@/content/types";

/**
 * Queue rewrite of a deleted 2026-09-29 URL (old date 2026-08-19), written only
 * from Palak's own facts (chat, 2026-10-05): he pushed a 4-route Next.js app
 * through GitHub Actions, the build+deploy ran in about 2 minutes, one route
 * 404'd live though it worked locally, and it took 2-3 redeploys to trace it to
 * a trailing-slash / export-path mismatch. Setup-log layout: numbered steps
 * with what broke, no pros/cons, no FAQ. publishedAt keeps the old URL date;
 * contentUpdatedAt is the rewrite day; reviewedAt is the day Palak confirmed.
 */
export const deployingANextjsAppFourRoutes: Article = {
  slug: "deploying-a-nextjs-app-four-routes",
  title: "Deploying a Four-Route Next.js App: a Setup Log",
  excerpt:
    "The build and deploy ran in about 2 minutes. Then one of the four routes came back 404 live while it worked fine locally. Here is the run and the fix.",
  category: "ai-for-professionals",
  author: "palak-patel",
  tags: ["Next.js", "Deployment", "GitHub Actions", "How-To"],
  publishedAt: "2026-08-19",
  contentUpdatedAt: "2026-10-05",
  seoTitle: "Deploying a Four-Route Next.js App: a Log",
  seoDescription:
    "A short setup log: pushing a 4-route Next.js app through GitHub Actions in about 2 minutes, and fixing the one route that 404'd live but worked locally.",
  content: `
<p>A small app should be a boring deploy. Mine was not, quite. I had four routes, a working dev server, and a pipeline that looked done. The first live load proved otherwise.</p>

<p>I deployed a small Next.js app, just 4 routes, through a GitHub Actions pipeline to see how clean the handoff was. The build and deploy finished in about 2 minutes, which surprised me. What did not go clean was the routing: one of the 4 pages worked fine on my laptop but came back as a 404 once it was live. It took me 2 to 3 redeploys to track it down to a trailing-slash and export-path mismatch, and only then did every route load.</p>

<h2>The run</h2>
<ol>
<li><strong>Push to the branch.</strong> The commit triggered the GitHub Actions workflow. Install, build and upload ran back to back and the whole thing was green in about 2 minutes. No caching tricks, just the default steps.</li>
<li><strong>Open the live site.</strong> The home route and two others loaded. The fourth returned a 404. Same page had loaded on my dev server seconds earlier, so the code was not the problem.</li>
<li><strong>Check the build output, not the code.</strong> The route that failed did not have a matching file in the exported output the way the working ones did. Locally the dev server resolves the route on the fly; the static deploy only serves what the export actually wrote to disk.</li>
<li><strong>Fix the trailing slash.</strong> The mismatch was how the export named that route's folder versus how the live URL asked for it. Lining up the trailing-slash behaviour so the export path matched the requested path made the 404 go away.</li>
<li><strong>Redeploy and recheck every route.</strong> It took 2 to 3 pushes before all four loaded. The lesson I took: after any export deploy, open each route by its live URL, not just the home page.</li>
</ol>

<p>The build speed was never the issue. The gap between what runs on a dev server and what a static export actually ships is. If you are setting the pipeline up from scratch, I wrote the GitHub Actions side of this in <a href="/articles/deploying-nextjs-to-hostinger-from-github-actions">my notes on shipping Next.js to Hostinger</a>.</p>
`,
  sources: [
    {
      title: "Next.js Deploying: Static Exports",
      publisher: "Next.js",
      url: "https://nextjs.org/docs/app/building-your-application/deploying/static-exports",
      checkedAt: "2026-10-05",
    },
  ],
  humanReview: {
    reviewedAt: "2026-10-05",
    experience:
      "I deployed a small Next.js app, just 4 routes, through a GitHub Actions pipeline to see how clean the handoff was. The build and deploy finished in about 2 minutes, which surprised me. What did not go clean was the routing: one of the 4 pages worked fine on my laptop but came back as a 404 once it was live. It took me 2 to 3 redeploys to track it down to a trailing-slash and export-path mismatch, and only then did every route load.",
  },
};
