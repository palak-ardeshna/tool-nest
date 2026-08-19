# ToolNest

> Discover better tools. Work smarter.

An independent technology publication covering AI tools, software, productivity,
automation, how-to guides, comparisons and developer tooling.

Next.js (App Router), React, TypeScript and Tailwind CSS. **No database.**
Content lives in the repository as typed TypeScript modules, so the whole site
builds to static HTML and deploys anywhere with no configuration.

## Getting started

```bash
npm install
npm run dev
```

That is the whole setup. There is no database to provision, no environment
variables to fill in, and no seed step.

## Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm test` | Content integrity, ad placement, cover art, formatting |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Publishing an article

1. Add a file to `src/content/articles/<slug>.ts`. Copy the nearest existing
   one — the `Article` type in `src/content/types.ts` documents every field.
2. Add one import line to `src/content/articles/index.ts`.
3. Drop a cover image at `public/images/articles/<slug>.webp` (1600×900) and
   set `image` and `imageAlt`.
4. Commit. `npm test` will tell you before you push if the category or author
   slug does not exist, the image is missing, or the piece is too thin.

An article dated in the future is excluded from the build, so `publishedAt` is
also a scheduling mechanism.

Adding a **section** is one entry in `src/content/categories.ts`; navigation,
the sitemap and the homepage topic grid all follow from it. A new **author** is
one entry in `src/content/authors.ts`.

## Structure

```
src/
├── app/
│   ├── (site)/          home, articles, categories, search, authors, legal
│   ├── api/             read-only JSON endpoints
│   ├── sitemap.ts  robots.ts  not-found.tsx
├── content/
│   ├── articles/        one file per article, plus an explicit index
│   ├── authors.ts  categories.ts  types.ts
│   └── index.ts         resolves content into what the app renders
├── components/          layout · article · home · search · ads · analytics · ui
├── lib/                 articles, categories, search, seo, content, cover-art, format
└── config/site.ts       brand, navigation, integration ids
tests/                   node:test, no framework
```

`src/content/index.ts` resolves the files once at module load and **throws on a
bad reference** — an article pointing at a category that does not exist fails
the build rather than rendering a broken page. That is the job a foreign key
used to do.

## Content model

`Article` carries the editorial structure directly — `quickAnswer`, `pros`,
`cons`, `alternatives`, `faqs` — rather than burying it in the HTML body, so
the article template and the FAQ structured data stay in sync.

Categories are one level deep: sections (`AI Tools`) with sub-topics
(`AI Writing`, `AI Video`). A section page shows its own articles plus
everything in its sub-topics.

## Images

Every article ships with a cover in `public/images/articles/<slug>.webp`
(1600×900, ~40 KB), served through `next/image` as AVIF or WebP at the size the
layout asks for.

The photographs are illustrative — desks, objects, materials. None show a
product interface, because a fabricated screenshot of a tool under review would
be a fabricated record. An article with no `image` falls back to generated cover
art (`lib/cover-art.ts`): inline SVG, deterministic from the slug, same aspect
box, so adding a photo later shifts nothing.

## SEO

Per-page metadata, canonicals, Open Graph and Twitter cards come from one helper
(`lib/seo.ts`). Structured data covers Organization, WebSite, Article,
BreadcrumbList, FAQPage and Person. `/sitemap.xml` and `/robots.txt` are
generated from the content files. Search results are `noindex` by design.

Share cards are rendered at request time with `next/og`: `/share-card.png`
site-wide, `/articles/<slug>/share-card.png` per article.

## Ads

`components/ads/` is the only code that knows an ad network exists. Slots render
nothing without a publisher id and a slot id, reserve their height so they never
shift layout, are labelled, and sit only on `<h2>` section boundaries. Articles
are never paginated to create impressions.

## Analytics

`lib/analytics.ts` is the only module that talks to a tracking sink. Session
attribution (source, medium, campaign, landing page) is captured once per
session and attached to every event, so the
source → campaign → landing article → session → engagement chain can be
reconstructed downstream. Revenue and traffic cost are joined outside the app by
campaign id; nothing here fabricates revenue figures.

Without `NEXT_PUBLIC_GA_ID`, `track()` is a no-op.

## Deploying

`npm run build` produces a fully static site. Vercel, Netlify, Cloudflare Pages,
GitHub Pages behind a Node server, or a container — all work with no
configuration. Set `NEXT_PUBLIC_SITE_URL` so canonicals and the sitemap use your
real domain.

Publishing is a git push: the content is compiled into the build, so a new
article means a new deployment.

## What this deliberately does not have

- **A CMS.** Articles are code. Editing from a phone means editing on GitHub.
- **A newsletter signup.** There is nowhere to store an address, and a form that
  silently discards one is worse than no form. The homepage points at the
  archive instead. Wire up a provider and the CTA becomes a real signup.
- **Comments, accounts, or anything else needing a write path.**

Each of those needs a database. If you add one, `src/lib/articles.ts` is the
seam — every page reads through it and nothing above it knows where content
comes from.
