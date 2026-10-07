/**
 * Pulls Search Console performance and AdSense site status for toolnest.quest
 * and writes an HTML report.
 *
 *   npx tsx scripts/check-google.ts --login   # one time: sign in by hand
 *   npx tsx scripts/check-google.ts           # every run after that
 *   npx tsx scripts/check-google.ts --days 28 # 7 | 28 | 90 (default 90)
 *
 * Google blocks scripted password typing, so the sign-in is manual, once. The
 * Chrome profile in .google-profile/ keeps the session after that.
 */
import { chromium, type BrowserContext, type Page } from 'playwright'
import path from 'node:path'
import fs from 'node:fs'

const SITE = 'toolnest.quest'
const PUB = process.env.ADSENSE_PUB_ID || 'pub-3720190862522195'
const PROFILE = path.join(process.cwd(), '.google-profile')
const OUT = path.join(process.cwd(), '.google-shots')
const LOGIN = process.argv.includes('--login')
const DAYS = Number(process.argv[process.argv.indexOf('--days') + 1]) || 90
if (![7, 28, 90].includes(DAYS)) {
  console.error('--days must be 7, 28 or 90')
  process.exit(1)
}

const gsc = (breakdown: string) =>
  'https://search.google.com/search-console/performance/search-analytics' +
  `?resource_id=https%3A%2F%2F${SITE}%2F&breakdown=${breakdown}&num_of_days=${DAYS}`

type Row = { name: string; clicks: number; impressions: number; ctr: string; position: string }
type Report = {
  ranAt: string
  days: number
  totals: Record<string, string>
  queries: Row[]
  pages: Row[]
  adsense: { account: string; status: string; adsTxt: string; note?: string }
}

const TILES = ['Total clicks', 'Total impressions', 'Average CTR', 'Average position']

async function open(): Promise<BrowserContext> {
  fs.mkdirSync(OUT, { recursive: true })
  return chromium.launchPersistentContext(PROFILE, {
    headless: false,
    viewport: { width: 1440, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  })
}

async function login() {
  const ctx = await open()
  const page = ctx.pages()[0] ?? (await ctx.newPage())
  await page.goto('https://myaccount.google.com/')
  console.log('\nSign in to Google in the window that opened.')
  console.log('Waiting... the window closes on its own once you are in.')
  // Poll instead of waiting on stdin: under tsx stdin is not flowing, so an
  // Enter key press never arrives and the script hangs.
  const deadline = Date.now() + 10 * 60 * 1000
  let who = ''
  while (Date.now() < deadline && !who) {
    await page.waitForTimeout(3000)
    const url = page.url()
    if (!/myaccount\.google\.com/.test(url) || /signin|ServiceLogin/.test(url)) continue
    who = await page
      .getByText(/@(gmail|googlemail)\.com/)
      .first()
      .innerText()
      .catch(() => '')
  }
  await ctx.close()
  if (!who) {
    console.error('Timed out. Run --login again and finish the sign-in.')
    process.exitCode = 1
    return
  }
  console.log(`Signed in as ${who.trim()}`)
  console.log(`Session saved to ${PROFILE}. Run the script without --login from now on.`)
}

function signedOut(page: Page) {
  return /accounts\.google\.com|ServiceLogin/.test(page.url())
}

const num = (s: string) => Number(s.replace(/[^\d.]/g, '')) || 0

/** The four tiles above the chart: label on one line, value on the next. */
async function totals(page: Page): Promise<Record<string, string>> {
  const text = await page.locator('body').innerText()
  const out: Record<string, string> = {}
  for (const label of TILES) {
    const after = text.split(label)[1] ?? ''
    out[label] = after.match(/[\d][\d.,]*\s*[KM]?%?/)?.[0].replace(/\s+/g, '') ?? '?'
  }
  return out
}

async function table(page: Page): Promise<Row[]> {
  // The breakdown table lazy-renders, so scroll to it before reading.
  await page.mouse.wheel(0, 1200)
  await page.waitForTimeout(3000)
  const raw = await page
    .locator('table tbody tr')
    .evaluateAll((rows) =>
      rows.map((r) =>
        Array.from(r.querySelectorAll('td'))
          .map((c) => (c.textContent ?? '').trim())
          .filter(Boolean),
      ),
    )
    .catch(() => [] as string[][])
  return raw
    .filter((c) => c.length >= 3 && /^[\d.,]+$/.test(c[1] ?? ''))
    .map((c) => ({
      // Page cells carry the hover buttons' labels after the URL.
      name: (c[0] ?? '').replace(/\s*(Copy URL to clipboard|Open in new tab|Inspect URL)/g, '').trim(),
      clicks: num(c[1]),
      impressions: num(c[2]),
      ctr: c[3] ?? '',
      position: c[4] ?? '',
    }))
}

async function searchConsole(page: Page): Promise<Pick<Report, 'totals' | 'queries' | 'pages'>> {
  await page.goto(gsc('query'), { waitUntil: 'domcontentloaded' })
  if (signedOut(page)) throw new Error('signed out')
  await page.waitForTimeout(9000)
  await page.screenshot({ path: path.join(OUT, 'search-console.png'), fullPage: true })
  const t = await totals(page)
  const queries = await table(page)
  await page.goto(gsc('page'), { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(9000)
  const pages = await table(page)
  return { totals: t, queries, pages }
}

/**
 * The publisher id has to be in the URL. Without it AdSense bounces to the
 * login page and reports "Access denied" even for an account that has access.
 */
async function adsense(page: Page): Promise<Report['adsense']> {
  for (let u = 0; u < 4; u++) {
    await page.goto(`https://adsense.google.com/adsense/u/${u}/${PUB}/sites/list`, {
      waitUntil: 'domcontentloaded',
    })
    if (signedOut(page)) throw new Error('signed out')
    await page.waitForTimeout(8000)
    const text = (await page.locator('body').innerText()).replace(/\s+/g, ' ')
    if (/Access denied|have access to this AdSense/.test(text)) continue
    await page.screenshot({ path: path.join(OUT, 'adsense.png'), fullPage: true })
    const account =
      (await page
        .getByText(/@(gmail|googlemail)\.com/)
        .first()
        .innerText()
        .catch(() => '')) || PUB
    if (!text.includes(SITE)) {
      return { account: account.trim(), status: 'site not listed', adsTxt: '-' }
    }
    const row = text.slice(text.indexOf(SITE), text.indexOf(SITE) + 160)
    return {
      account: account.trim(),
      status: row.match(/Ready|Getting ready|Requires review|Needs attention/)?.[0] ?? 'unknown',
      adsTxt: row.match(/Authorized|Unauthorized|Not found/)?.[0] ?? 'unknown',
    }
  }
  return {
    account: '-',
    status: 'no access',
    adsTxt: '-',
    note:
      `No signed-in account on this profile can open ${PUB}. ` +
      'Run --login again and add the account that owns it.',
  }
}

const esc = (s: string) =>
  s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string)

function html(r: Report) {
  const rows = (list: Row[]) =>
    list.length
      ? list
          .map(
            (x) =>
              `<tr><td>${esc(x.name)}</td><td class=n>${x.clicks}</td>` +
              `<td class=n>${x.impressions}</td><td class=n>${esc(x.ctr)}</td>` +
              `<td class=n>${esc(x.position)}</td></tr>`,
          )
          .join('')
      : '<tr><td colspan=5 class=muted>nothing in this range</td></tr>'
  const tile = (k: string) =>
    `<div class=tile><span>${k}</span><strong>${esc(r.totals[k] ?? '?')}</strong></div>`
  const stuck = r.queries.filter((q) => q.clicks === 0 && q.impressions >= 20)
  return `<!doctype html><html lang=en><head><meta charset=utf-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>${SITE} report</title><style>
:root{--bg:#fff;--fg:#1a1a1a;--muted:#666;--line:#e4e4e4;--card:#fafafa}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#15161a;--fg:#eceef2;--muted:#9aa0ab;--line:#2c2e35;--card:#1d1f25}}
:root[data-theme=dark]{--bg:#15161a;--fg:#eceef2;--muted:#9aa0ab;--line:#2c2e35;--card:#1d1f25}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.55 system-ui,sans-serif;padding:32px 16px}
.wrap{max-width:860px;margin:0 auto}
h1{font-size:24px;margin:0 0 4px}h2{font-size:17px;margin:34px 0 10px}
.muted{color:var(--muted)}
.tiles{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.tile{flex:1 1 150px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 14px}
.tile span{display:block;font-size:12px;color:var(--muted)}
.tile strong{font-size:26px;font-weight:600}
table{width:100%;border-collapse:collapse;font-size:14px}
th,td{text-align:left;padding:8px 10px;border-bottom:1px solid var(--line)}
th{font-size:12px;color:var(--muted);font-weight:600}
td.n,th.n{text-align:right;font-variant-numeric:tabular-nums}
.badge{display:inline-block;padding:2px 9px;border-radius:999px;font-size:13px;background:var(--card);border:1px solid var(--line)}
li{margin-bottom:4px}
</style></head><body><div class=wrap>
<h1>${SITE}</h1>
<p class=muted>Last ${r.days} days &middot; pulled ${esc(r.ranAt)}</p>
<div class=tiles>${TILES.map(tile).join('')}</div>
<h2>AdSense</h2>
<p>Approval: <span class=badge>${esc(r.adsense.status)}</span>
&nbsp; ads.txt: <span class=badge>${esc(r.adsense.adsTxt)}</span>
&nbsp; <span class=muted>${esc(r.adsense.account)}</span></p>
${r.adsense.note ? `<p class=muted>${esc(r.adsense.note)}</p>` : ''}
<h2>Queries</h2>
<table><tr><th>Query</th><th class=n>Clicks</th><th class=n>Impr.</th><th class=n>CTR</th><th class=n>Pos.</th></tr>${rows(r.queries)}</table>
${
  stuck.length
    ? `<h2>Impressions, no clicks</h2>
<p class=muted>These rank but nobody clicks. Title and first paragraph are what to change.</p>
<ul>${stuck
        .map(
          (q) => `<li>${esc(q.name)} &mdash; ${q.impressions} impr., position ${esc(q.position)}</li>`,
        )
        .join('')}</ul>`
    : ''
}
<h2>Pages</h2>
<table><tr><th>Page</th><th class=n>Clicks</th><th class=n>Impr.</th><th class=n>CTR</th><th class=n>Pos.</th></tr>${rows(r.pages)}</table>
</div></body></html>`
}

async function main() {
  if (LOGIN) return login()
  if (!fs.existsSync(PROFILE)) {
    console.error('No saved session. Run: npx tsx scripts/check-google.ts --login')
    process.exit(1)
  }
  const ctx = await open()
  const page = ctx.pages()[0] ?? (await ctx.newPage())
  try {
    const sc = await searchConsole(page)
    const ads = await adsense(page)
    const report: Report = {
      ranAt: new Date().toLocaleString('en-IN'),
      days: DAYS,
      ...sc,
      adsense: ads,
    }
    const file = path.join(OUT, 'report.html')
    fs.writeFileSync(file, html(report))
    fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2))

    const t = report.totals
    console.log(`\n${SITE} - last ${DAYS} days`)
    console.log(
      `  clicks ${t['Total clicks']} | impressions ${t['Total impressions']}` +
        ` | CTR ${t['Average CTR']} | position ${t['Average position']}`,
    )
    console.log(`  AdSense: ${ads.status} | ads.txt: ${ads.adsTxt} | ${ads.account}`)
    if (ads.note) console.log(`  ${ads.note}`)
    console.log(`  ${report.queries.length} queries, ${report.pages.length} pages`)
    console.log(`\nReport: ${file}`)
  } catch (err) {
    if (err instanceof Error && err.message === 'signed out') {
      console.error('Session expired. Run: npx tsx scripts/check-google.ts --login')
      process.exitCode = 1
    } else throw err
  } finally {
    await ctx.close()
  }
}

main()
