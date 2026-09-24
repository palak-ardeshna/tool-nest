import type { Article } from "@/content/types";

/**
 * The workflow this describes is .github/workflows/deploy-hostinger.yml in
 * this repository; run times are from its GitHub Actions history.
 */
export const deployingNextjsToHostingerFromGithubActions: Article = {
  slug: "deploying-nextjs-to-hostinger-from-github-actions",
  title: "Deploying Next.js to Hostinger from GitHub Actions: The API Route Nobody Documents",
  excerpt:
    "Hostinger's Node.js hosting has no GitHub integration, but it has an API. This is the workflow that deploys this site on every push, what the second version checks that the first did not, and how long a deploy takes.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Next.js", "Deployment", "Hostinger", "GitHub Actions", "Developer Tools"],
  publishedAt: "2026-09-24",
  image: "/images/articles/deploying-nextjs-to-hostinger-from-github-actions.webp",
  imageAlt: "Blue network cables plugged into rows of ports on a rack switch with yellow link lights",
  seoTitle: "Deploy Next.js to Hostinger from GitHub Actions",
  seoDescription:
    "How I deploy a Next.js site to Hostinger Node.js hosting on every push using its public API: zip, upload, start build. Real run times, failures and fixes.",
  quickAnswer:
    "Hostinger's Node.js hosting does not link to GitHub, but everything hPanel's \"Upload your website files\" button does is available through the API at developers.hostinger.com. A workflow that runs tests and a build on the runner, packs tracked files with git archive, uploads the zip to the site's file storage and calls the start-build endpoint is enough. Authentication is a bearer token from hPanel; the limit is 90 requests a minute. The step people miss is building on the runner first, because a build that fails on Hostinger replaces the site that was working.",
  pros: [
    "No third-party deploy service; the whole pipeline is one workflow file and one secret",
    "Tests, typecheck and build run on the runner, so a broken commit never reaches the host",
    "git archive uploads tracked files only — no node_modules, no .next, small zip",
    "A concurrency group queues fast successive pushes instead of racing them",
  ],
  cons: [
    "Hostinger builds from source on its side, so every deploy pays for npm install twice",
    "The API's error bodies are the only diagnostics; a bare 500 tells you nothing unless you print it",
    "The build runs asynchronously, so the workflow has to poll for its result",
    "One account username and one domain are hard-coded; a second site means a second workflow",
  ],
  alternatives: [
    { name: "Vercel", url: "https://vercel.com/pricing", note: "Push-to-deploy with previews. The default for Next.js if you are not already paying for shared hosting." },
    { name: "Cloudflare Pages", url: "https://pages.cloudflare.com/", note: "Free tier with a generous build allowance; Next.js support through the OpenNext adapter." },
    { name: "hPanel manual upload", url: "https://hpanel.hostinger.com/", note: "Same result as the workflow, done by hand. Fine for a site that changes once a month." },
    { name: "A VPS with a git hook", url: "https://www.hostinger.com/vps-hosting", note: "Full control, your own Node process, your own outages." },
  ],
  faqs: [
    {
      question: "Does Hostinger's Node.js hosting connect to GitHub?",
      answer:
        "Not when this workflow was written in September 2026. The shared Node.js hosting deploys from files in the site's storage, which you put there by hand in hPanel or, as here, through the API. The API route also keeps FTP credentials out of the workflow: one bearer token is the only secret.",
    },
    {
      question: "What are the API limits?",
      answer:
        "The API reference, read on 18 September 2026, states 90 requests a minute per token, with a 429 response above that and a warning that repeatedly hitting the limit can get your IP temporarily blocked. A deploy uses a handful of requests, so the limit only matters if you poll the build status too eagerly.",
    },
    {
      question: "Why build on the runner and again on Hostinger?",
      answer:
        "Because the runner build is a test and the Hostinger build is the deploy. If the runner build fails, the workflow stops and the live site is untouched. If you skip it and the Hostinger build fails, the failed build is what replaces the running app. Paying for the second npm install is cheaper than a site that is down until you notice.",
    },
  ],
  sources: [
    { title: "API reference overview", publisher: "Hostinger", url: "https://docs.hostinger.com/api-reference/overview", checkedAt: "2026-09-18" },
    { title: "Start Node.js build", publisher: "Hostinger", url: "https://docs.hostinger.com/api-reference/endpoints/hosting/nodejs/start-node-js-build", checkedAt: "2026-09-18" },
  ],
  content: `<p>This site runs on Hostinger's Node.js hosting, and that hosting has no GitHub integration. What it has is a public API that does everything hPanel's upload button does. A workflow file that calls it has deployed every commit to this site since 14 September 2026, and every number below comes from that workflow's own run history, not from a test setup. I covered the hosted options in <a href="/articles/deploying-a-nextjs-app-four-routes">Deploying a Next.js app: four routes</a>; this is the fifth, for when the hosting is already paid for.</p>

<h2>What a deploy costs in minutes</h2>

<p>The Actions history for this site, read on 24 September 2026: 13 runs since the workflow went in, 11 green and 2 red. The green runs took between 2 minutes 32 seconds and 3 minutes 7 seconds, with a median of 2 minutes 41 seconds. That is the whole trip: install, tests, typecheck and build on the runner, upload, Hostinger's own build, and a cache clear at the end. There is no second wait after the run turns green.</p>

<p>The two failures were short. The very first run failed after 69 seconds. The run on 18 September failed after 29 seconds, far too early to have reached the upload, so the live site never saw that commit. That is the point of checking on the runner first. The logs for both runs have expired, so I can't tell you which step broke.</p>

<h2>What changed after the first run</h2>

<p>The first version went in on 14 September and failed. The second version was committed the same day, seven minutes after that failed run started, and it is still the one running. Comparing the two files shows what the first one trusted and the second one checks:</p>

<ul>
<li><strong>The upload.</strong> The first version sent the zip and moved on. The second lists the site's document root through the API and compares the file size on the server with the size it sent. If they differ, the run stops and prints what is actually there.</li>
<li><strong>API errors.</strong> The first version used <code>curl --fail-with-body</code>. The second wraps every call in a small shell function that captures the HTTP status separately from the body and prints both on any status of 400 or above, so a red run says <code>HTTP 500: {"message": ...}</code> instead of just failing.</li>
<li><strong>Build settings.</strong> The first version asked Hostinger to detect the framework from the zip every time. The second uses the settings Hostinger stored from earlier deploys, falls back to detection, and falls back again to plain Next.js defaults. Each miss is reported and none of them is fatal.</li>
</ul>

<h2>The workflow, step by step</h2>

<p>The whole thing is one file, <code>.github/workflows/deploy-hostinger.yml</code>, 234 lines long, and one repository secret, <code>HOSTINGER_API_TOKEN</code>, generated in hPanel under API in the Dev tools section. The API wants it as a bearer header on every request.</p>

<p>On every push to <code>main</code> the runner installs dependencies, then runs <code>npm test</code>, <code>npm run typecheck</code> and <code>npm run build</code>. Hostinger builds from source on its own side, so building on the runner looks redundant. It is not: a build that fails on the runner stops the workflow and leaves the live site alone, while a build that fails on Hostinger replaces the site that was working.</p>

<p>Packing is <code>git archive --format=zip HEAD</code>, which ships tracked files only. No <code>node_modules</code>, no <code>.next</code>, nothing you forgot to gitignore. Hostinger reinstalls from <code>package-lock.json</code> on its side.</p>

<p>Then five API steps, each printed as its own group in the log:</p>

<ol>
<li>Request upload credentials from <code>/api/hosting/v1/files/upload-urls</code>.</li>
<li>Upload the zip to the document root with the resumable (TUS) protocol those credentials are for.</li>
<li>List the document root and check the zip arrived at the right size.</li>
<li>Start a build with a POST to <code>/websites/{domain}/nodejs/builds</code>, which the documentation describes as building "using files already present on the website's file storage".</li>
<li>Poll the build every 15 seconds, for up to 20 minutes, until it reports <code>completed</code> or <code>failed</code>, then print the last 80 lines of Hostinger's build log.</li>
</ol>

<p>After a completed build the workflow clears Hostinger's edge cache, so the new version shows up straight away rather than after the cache expires.</p>

<h2>Two guards that are easy to leave out</h2>

<p>The first is a concurrency group. Two pushes in quick succession queue rather than race, so the second deploy cannot upload its zip while the first build is reading the storage.</p>

<p>The second is a nightly run. Articles here carry a publish date, and a future date keeps an article out of the build without ever releasing it: the pages are prerendered, so a dated article stays a 404 until something rebuilds the site. A scheduled run at 01:30 UTC is that something. It compares how many articles the repository would publish today with how many the live sitemap lists, and skips the deploy when they match, so the nightly job costs a few seconds on most days. One catch: GitHub turns scheduled workflows off in a repository with no activity for 60 days.</p>

<h2>Should you do this?</h2>

<p>If you are choosing hosting from scratch for a Next.js site, no. Vercel or Cloudflare Pages give you push-to-deploy and preview URLs without a workflow file, and the <a href="/articles/deploying-a-nextjs-app-four-routes">four-routes article</a> compares them. If you already have a Hostinger plan with Node.js hosting and want the site to deploy itself, yes. The working version was in place the same day the first one failed, and since then a deploy has been a push and about two and a half minutes. Just don't poll the build status in a tight loop: the API allows 90 requests a minute, and a 15-second interval stays far below that.</p>

<p>Endpoint paths and limits above are from Hostinger's API reference as read on 18 September 2026. Run times are from this site's GitHub Actions history as read on 24 September 2026.</p>`,
};
