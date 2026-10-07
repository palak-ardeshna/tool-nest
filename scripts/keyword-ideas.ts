/**
 * Reads the Search Console report and the published articles, then ranks what
 * to work on next. Run check-google.ts first.
 *
 *   npx tsx scripts/keyword-ideas.ts
 *
 * It only picks topics. The article still needs Palak's own facts (CLAUDE.md),
 * so a suggestion here is a question to answer, not a draft to generate.
 */
import fs from 'node:fs'
import path from 'node:path'

const OUT = path.join(process.cwd(), '.google-shots')
const REPORT = path.join(OUT, 'report.json')
const ARTICLES = path.join(process.cwd(), 'src', 'content', 'articles')
const SITE = 'toolnest.quest'

type Row = { name: string; clicks: number; impressions: number; ctr: string; position: string }
type Report = { ranAt: string; days: number; totals: Record<string, string>; queries: Row[]; pages: Row[] }

if (!fs.existsSync(REPORT)) {
  console.error('No report yet. Run: npx tsx scripts/check-google.ts')
  process.exit(1)
}
const report: Report = JSON.parse(fs.readFileSync(REPORT, 'utf8'))

const STOP = new Set([
  'the', 'a', 'an', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'is', 'it', 'at', 'as', 'by',
  'with', 'from', 'vs', 'best', 'how', 'do', 'does', 'what', 'which', 'you', 'your', 'my', 'me',
  'can', 'are', 'that', 'this', 'tool', 'tools', 'app', 'apps', 'ai', 'free', 'new',
])
const words = (s: string) =>
  new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  )

/** Slug plus title and tags, so a query can be matched against real coverage. */
const articles = fs
  .readdirSync(ARTICLES)
  .filter((f) => f.endsWith('.ts'))
  .map((f) => {
    const src = fs.readFileSync(path.join(ARTICLES, f), 'utf8')
    const slug = f.replace(/\.ts$/, '')
    const title = src.match(/\n\s*title:\s*\n?\s*"([^"]+)"/)?.[1] ?? ''
    const tags = (src.match(/tags:\s*\[([^\]]*)\]/)?.[1] ?? '')
      .split(',')
      .map((t) => t.replace(/["\s]/g, ' ').trim())
      .filter(Boolean)
    return { slug, title, terms: words(`${slug.replace(/-/g, ' ')} ${title} ${tags.join(' ')}`) }
  })

/** How much of the query is already covered by the closest article. */
function closest(query: string) {
  const q = words(query)
  if (!q.size) return { slug: '', overlap: 0 }
  let best = { slug: '', overlap: 0 }
  for (const a of articles) {
    let hit = 0
    for (const w of q) if (a.terms.has(w)) hit++
    const overlap = hit / q.size
    if (overlap > best.overlap) best = { slug: a.slug, overlap }
  }
  return best
}

const pos = (r: Row) => Number(r.position) || 999
const ctrNum = (r: Row) => Number(r.ctr.replace('%', '')) || 0

/** Roughly what CTR a position earns. Below this and the title is the problem. */
const expectedCtr = (p: number) =>
  p <= 1 ? 27 : p <= 2 ? 15 : p <= 3 ? 11 : p <= 5 ? 7 : p <= 8 ? 3.5 : p <= 10 ? 2.5 : 1.2

const brand = (s: string) => /toolnest|tool nest/i.test(s)
const real = report.queries.filter((q) => !brand(q.name) && q.impressions >= 2)

// 1. Already ranking well, nobody clicks. Cheapest win: rewrite the title.
const titleFix = report.pages
  .filter((p) => p.impressions >= 30 && pos(p) <= 15 && ctrNum(p) < expectedCtr(pos(p)) * 0.6)
  .sort((a, b) => b.impressions - a.impressions)

// 2. Page 2 and 3. A real update to the existing article can move these.
const striking = real
  .filter((q) => pos(q) >= 8 && pos(q) <= 30)
  .map((q) => ({ ...q, ...closest(q.name) }))
  .sort((a, b) => b.impressions - a.impressions)

// 3. Google shows the site for this, but no article is really about it.
const gaps = real
  .filter((q) => pos(q) > 30)
  .map((q) => ({ ...q, ...closest(q.name) }))
  .filter((q) => q.overlap < 0.5)
  .sort((a, b) => b.impressions - a.impressions)

const line = (q: Row) => `${q.impressions} impr., position ${q.position}`
const show = (s: string) => `  ${s}`

console.log(`\n${SITE} - what to work on (last ${report.days} days, pulled ${report.ranAt})`)
console.log(
  `Totals: ${report.totals['Total clicks']} clicks, ${report.totals['Total impressions']} impressions,` +
    ` CTR ${report.totals['Average CTR']}, position ${report.totals['Average position']}\n`,
)

console.log('1. Ranking but not clicked - rewrite the title and first paragraph')
if (!titleFix.length) console.log(show('nothing stands out'))
for (const p of titleFix.slice(0, 8)) {
  console.log(
    show(
      `${p.name.replace(`https://${SITE}`, '')} - ${p.impressions} impr., position ${p.position},` +
        ` CTR ${p.ctr} (expected about ${expectedCtr(pos(p))}%)`,
    ),
  )
}

console.log('\n2. Page 2 to 3 - update the article that already covers it')
if (!striking.length) console.log(show('nothing in range'))
for (const q of striking.slice(0, 10)) {
  console.log(show(`"${q.name}" - ${line(q)}`))
  console.log(show(`   ${q.overlap >= 0.3 ? `closest: ${q.slug}` : 'no article really covers this'}`))
}

console.log('\n3. Nothing covers these - possible new articles')
if (!gaps.length) console.log(show('nothing worth a new article'))
for (const q of gaps.slice(0, 12)) {
  console.log(show(`"${q.name}" - ${line(q)}`))
}

console.log(
  '\nBefore writing any of these: have you used the tool, and do you have one number' +
    '\nfrom your own run plus one real downside? If not, it is not an article yet.',
)

fs.writeFileSync(
  path.join(OUT, 'ideas.json'),
  JSON.stringify({ ranAt: report.ranAt, days: report.days, titleFix, striking, gaps }, null, 2),
)
console.log(`\nSaved: ${path.join(OUT, 'ideas.json')}`)
