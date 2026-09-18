import type { Article } from "@/content/types";

/**
 * DRAFT — not published. See src/content/drafts/README.md.
 * The workflow this describes is .github/workflows/deploy-hostinger.yml in
 * this repository. The sections marked PARTH need the numbers from the
 * Actions log and the failures that shaped the workflow.
 */
export const deployingNextjsToHostingerFromGithubActions: Article = {
  slug: "deploying-nextjs-to-hostinger-from-github-actions",
  title: "Deploying Next.js to Hostinger from GitHub Actions: The API Route Nobody Documents",
  excerpt:
    "Hostinger's Node.js hosting has no GitHub integration, but it has an API. This is the workflow I run on every push to this site, what broke while I built it, and how long a deploy takes.",
  category: "developer-tools",
  author: "parth-patel",
  tags: ["Next.js", "Deployment", "Hostinger", "GitHub Actions", "Developer Tools"],
  publishedAt: "2026-09-28",
  image: "/images/articles/deploying-nextjs-to-hostinger-from-github-actions.webp",
  imageAlt: "Blue network cables plugged into rows of ports on a rack switch with yellow link lights",
  seoTitle: "Deploy Next.js to Hostinger from GitHub Actions",
  seoDescription:
    "How I deploy a Next.js site to Hostinger Node.js hosting on every push using its public API: zip, upload, start build. Timings, failures and the fix for each.",
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
    "The build endpoint's completion state needs polling; the docs do not spell this out",
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
        "Not when I set this up. The shared Node.js hosting deploys from files in the site's storage, which you put there by hand in hPanel or, as here, through the API. The API is the only automation route I found that does not involve FTP credentials in a workflow.",
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
  content: `<p>This site runs on Hostinger's Node.js hosting, which I chose because I was already paying for it. It has no GitHub integration. What it has is a public API that does everything hPanel's upload button does, and a workflow file that calls it has deployed every commit to this site since 14 September 2026. I covered the hosted options in <a href="/articles/deploying-a-nextjs-app-four-routes">Deploying a Next.js app: four routes</a>; this is the fifth, for when the hosting is already paid for.</p>

<!-- PARTH: real numbers from the Actions log. Delete the draft rather than invent them. -->
<h2>What a deploy costs in minutes</h2>

<p><!-- PARTH: wall-clock time of a typical run, split: npm ci / test / typecheck / build on the runner, upload, Hostinger build until the site answers. How many deploys so far (git log --since=2026-09-14 on main). --></p>

<h2>What broke while I built it</h2>

<p><!-- PARTH: the two commits after the first version were "verify upload" and "surface API errors". What actually happened — a silent failed upload? a 500 with an empty message? — and what the site looked like while it was broken. --></p>

<h2>The workflow, step by step</h2>

<p>The whole thing is one file, <code>.github/workflows/deploy-hostinger.yml</code>, and one repository secret, <code>HOSTINGER_API_TOKEN</code>, generated from hPanel under API in the Dev tools section. The API wants it as a bearer header on every request.</p>

<p>On every push to <code>main</code> the runner installs dependencies, then runs <code>npm test</code>, <code>npm run typecheck</code> and <code>npm run build</code>. This is the part I would tell you not to skip. Hostinger builds from source on its own side, so building on the runner looks redundant. It is not: a build that fails on the runner stops the workflow and leaves the live site alone, while a build that fails on Hostinger replaces the site that was working. The editorial tests are cheap; the build is the one that catches a broken page.</p>

<p>Packing is <code>git archive --format=zip HEAD</code>, which ships tracked files only. No <code>node_modules</code>, no <code>.next</code>, nothing you forgot to gitignore. The zip is small and Hostinger reinstalls from <code>package-lock.json</code> on its side.</p>

<p>The upload goes to the site's file storage endpoint under <code>/api/hosting/v1/accounts/{username}/domains/{domain}/files</code>, and the deploy is a POST to <code>/websites/{domain}/nodejs/builds</code>, which the documentation describes as starting a build "using files already present on the website's file storage". Two calls. Everything else in the file is error handling.</p>

<h2>The error handling is the workflow</h2>

<p>The first version of this workflow had no error handling and a failed upload looked identical to a successful one until the site did not change. The current version wraps <code>curl</code> in a small shell function that captures the HTTP status separately from the body, prints the body on any status of 400 or above, and fails the step. That sounds trivial. It is the difference between a red run that says <code>HTTP 500: {"message": "..."}</code> and a green run that deployed nothing.</p>

<p>The other guard is a concurrency group. Two pushes in quick succession queue rather than race, so the second deploy cannot upload its zip while the first build is reading the storage.</p>

<h2>Should you do this?</h2>

<p>If you are choosing hosting from scratch for a Next.js site, no. Vercel or Cloudflare Pages give you push-to-deploy and preview URLs without a workflow file, and the <a href="/articles/deploying-a-nextjs-app-four-routes">four-routes article</a> compares them. If you already have a Hostinger plan with Node.js hosting and want the site to deploy itself, yes: it took one evening, the file is under a hundred lines, and every push since has been hands-off. The API limit of 90 requests a minute is not something a deploy will ever approach unless you poll the build status in a tight loop, which the documentation does not warn you about and I am warning you about now.</p>

<p>Endpoint paths and limits above are from Hostinger's API reference as read on 18 September 2026.</p>`,
};
