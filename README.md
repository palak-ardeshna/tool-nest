# ToolNest

> Discover better tools. Work smarter.

An independent technology publication covering AI tools, software, productivity,
automation, how-to guides, comparisons and developer tooling.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Prisma and
PostgreSQL. Server-rendered by default; client components only where
interaction requires them.

## Getting started

```bash
npm install
cp .env.example .env        # then fill in DATABASE_URL and AUTH_SECRET
npm run admin:hash          # generates ADMIN_PASSWORD_HASH for your .env
npm run db:push             # create the schema
npm run db:seed             # 3 authors, 24 categories, 23 articles
npm run dev
```

The CMS lives at `/admin` and is unlocked with the password you hashed above.

## Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm test` | Content-splitting, slug, reading-time and session tests |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run db:migrate` | Create a migration (development) |
| `npm run db:deploy` | Apply pending migrations (production) |
| `npm run db:push` | Push the schema without a migration (local only) |
| `npm run db:seed` | Seed authors, categories and articles |
| `npm run db:studio` | Prisma Studio |
| `npm run admin:hash` | Generate `ADMIN_PASSWORD_HASH` for `.env` |

## Environment

Everything optional stays completely inert while unset — no placeholder ad
boxes, no analytics calls, no verification tags.

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | yes | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URLs, sitemap, Open Graph |
| `ADMIN_PASSWORD_HASH` | yes | CMS login, `salt:hash` from `npm run admin:hash` |
| `AUTH_SECRET` | yes | Signs the CMS session cookie (16+ chars) |
| `NEXT_PUBLIC_GA_ID` | no | Google Analytics; without it `track()` is a no-op |
| `NEXT_PUBLIC_GSC_VERIFICATION` | no | Search Console meta tag |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | no | AdSense publisher id |
| `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE` | no | Slot id for the in-article unit |
| `NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR` | no | Slot id for the sidebar unit |
| `NEXT_PUBLIC_ADSENSE_SLOT_MOBILE` | no | Slot id for the mobile unit |

## Structure

```
src/
├── app/
│   ├── (site)/          public pages — home, articles, categories, search, legal
│   ├── (admin)/admin/   protected CMS
│   ├── actions/         server actions (admin mutations, newsletter)
│   ├── api/             read-only JSON endpoints
│   ├── sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx
├── components/          layout · article · home · search · ads · analytics · admin · ui
├── lib/                 db, articles, categories, search, seo, auth, content, format
├── config/site.ts       brand, navigation, integration ids
├── types/               Prisma-derived shared types
└── proxy.ts             gates /admin
prisma/                  schema, seed script, seed content
tests/                   node:test unit tests
```

`(site)` and `(admin)` are route groups: the public chrome (header, footer,
analytics, structured data) is applied by the site layout only, so the CMS does
not inherit it.

## Content model

`Article` carries the editorial structure directly — `quickAnswer`, `pros`,
`cons`, plus `Faq` and `Alternative` relations — rather than burying it in the
HTML body, so the article template and the FAQ structured data stay in sync.

`Category` is self-referencing, so sub-topics (AI Writing, AI Video, …) need no
extra model and new sections can be added from the CMS without a code change.
`contentUpdatedAt` is the editorially meaningful "last reviewed" date, kept
separate from the row's `updatedAt`.

## SEO

Per-page metadata, canonicals, Open Graph and Twitter cards are produced by a
single helper (`lib/seo.ts`). Structured data covers Organization, WebSite,
Article, BreadcrumbList, FAQPage and Person. `/sitemap.xml` and `/robots.txt`
are generated from the database. Search result pages are `noindex` by design.

## Images

Every seeded article ships with a cover photograph in
`public/images/articles/<slug>.webp` (1600×900, ~40 KB each), served through
`next/image` as AVIF or WebP at the size the layout asks for. Alt text lives in
`prisma/seed-images.ts`.

The photographs are illustrative — desks, objects, materials. None of them show
a product interface, because a generated screenshot of a tool we are reviewing
would be a fabricated record. Replace them with your own screenshots as you
publish: upload in `/admin/media`, copy the path, paste it into the article's
**Featured image** field.

An article with no image falls back to generated cover art (`lib/cover-art.ts`)
— inline SVG, deterministic from the slug, same aspect box, so adding an image
later shifts nothing.

Share cards are generated at request time from the same palette:
`/share-card.png` site-wide and `/articles/<slug>/share-card.png` per article,
both 1200×630 PNGs rendered with `next/og`.

## Ads

`components/ads/` is the only place that knows an ad network exists. Slots
render nothing without a publisher id and a slot id, reserve their height so
they never shift layout, are labelled, and sit on `<h2>` section boundaries so
they never interrupt a thought. Articles are never paginated to create
impressions.

## Analytics

`lib/analytics.ts` is the only module that talks to a tracking sink. Session
attribution (source, medium, campaign, landing page) is captured once per
session and attached to every event, so the
source → campaign → landing article → session → engagement chain can be
reconstructed downstream. Revenue and traffic cost are joined outside the app
by campaign id; nothing here fabricates revenue figures.

## Admin auth

One operator, one password. `.env` holds only a scrypt hash
(`ADMIN_PASSWORD_HASH`), so reading the file does not hand anyone a login. A
successful check issues an HMAC-signed session cookie signed with `AUTH_SECRET`;
`proxy.ts` verifies it before any admin route renders, and every server action
re-checks with `requireAdmin()`. Replace `lib/auth.ts` if the team ever needs
individual accounts.

## Deploying

**The build queries the database.** `generateStaticParams` prerenders every
article, category and author page, so `DATABASE_URL` must point at a reachable
database *at build time*, not just at runtime. A build against an unreachable
host fails with `Can't reach database server` — that is the schema being read,
not a runtime error.

### Vercel

1. **Provision Postgres** — Vercel Postgres, Neon, Supabase, anything managed.
   A local or private-network host will not work: Vercel's builders cannot see it.
2. **Set the environment variables** on the project, for every environment you
   build (Production, Preview):

   | Variable | Value |
   | --- | --- |
   | `DATABASE_URL` | The pooled connection string from your provider |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain` — canonicals and sitemap use it |
   | `AUTH_SECRET` | A fresh random string, **not** the one from local dev |
   | `ADMIN_PASSWORD_HASH` | Output of `npm run admin:hash` |

3. **Deploy.** `vercel-build` runs `prisma migrate deploy` before `next build`,
   so the schema is created on the first deploy. `postinstall` runs
   `prisma generate`, which Vercel needs because it caches `node_modules`.
4. **Seed once**, from your machine, pointed at the production database:

   ```bash
   DATABASE_URL="<production url>" npm run db:seed
   ```

   The seed upserts by slug, so it is safe to re-run — but it will overwrite
   edits you made in the CMS to seeded articles. Run it once, then manage
   content through `/admin`.

### One thing that will not work on Vercel

Media upload writes to `public/uploads` on the local filesystem. Serverless
filesystems are ephemeral and read-only, so uploads will fail or vanish.
`uploadMediaAction` in `src/app/actions/admin.ts` is the only function that
touches the disk — swap it for an object-store upload (S3, R2, Vercel Blob)
before relying on the media library in production.

A container on a VPS with a persistent volume has neither problem.
