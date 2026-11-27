/* book_capture.mjs — automated review harness for the Story Book pilot.
   Serves the repo's assets/, drives the real page in headless Chrome,
   captures frames (cover / every page at start-mid-end of writing / the
   page-turn moment / end screen) at several sizes, and asserts behaviour:
   word-sync vs story.json timings, pause freeze, flip leaf, silent fallback,
   reduced-motion. Prints a JSON summary; frames land in OUT/<size>/.
   Run from ~/tools/recorder (puppeteer lives there). */
import puppeteer from 'puppeteer';
import http from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const ROOT = process.env.HOME + '/workspace/projects/rehlaty-moss/assets';
const OUT = process.env.HOME + '/workspace/projects/book_review_frames';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.mp3': 'audio/mpeg', '.ttf': 'font/ttf', '.css': 'text/css' };
const server = http.createServer(async (req, res) => {
  try {
    const path = normalize(join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname)));
    if (!path.startsWith(ROOT) || !existsSync(path)) { res.writeHead(404); return res.end('nope'); }
    const data = await readFile(path);
    const range = req.headers.range; // media seeking needs Range support (real hosting has it; python http.server does not)
    if (range) {
      const m = /bytes=(\d+)-(\d*)/.exec(range);
      if (m) {
        const start = +m[1], end = m[2] ? Math.min(+m[2], data.length - 1) : data.length - 1;
        res.writeHead(206, { 'content-type': MIME[extname(path)] || 'application/octet-stream', 'content-range': `bytes ${start}-${end}/${data.length}`, 'accept-ranges': 'bytes', 'content-length': end - start + 1 });
        return res.end(data.subarray(start, end + 1));
      }
    }
    res.writeHead(200, { 'content-type': MIME[extname(path)] || 'application/octet-stream', 'accept-ranges': 'bytes' });
    res.end(data);
  } catch { res.writeHead(500); res.end(); }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const PORT = server.address().port;
const story = JSON.parse(await readFile(join(ROOT, 'book_stories/s01_thirsty_dog/story.json'), 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = { errors: [], checks: [], sizes: {} };
const check = (name, ok, detail = '') => { results.checks.push({ name, ok, detail }); if (!ok) console.log('FAIL', name, detail); };

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--autoplay-policy=no-user-gesture-required', '--enable-unsafe-swiftshader'] });

async function newPage(w, h, opts = {}) {
  const page = await browser.newPage();
  page.on('pageerror', (e) => results.errors.push(`pageerror ${w}x${h}: ${String(e).slice(0, 160)}`));
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) results.errors.push(`console ${w}x${h}: ${m.text().slice(0, 160)}`); });
  page.on('requestfailed', (r) => { const t = r.failure()?.errorText || ''; if (!opts.blockAudio && !t.includes('ERR_ABORTED')) results.errors.push(`reqfail ${w}x${h}: ${r.url().split('/').pop()} ${t}`); });
  page.on('response', (r) => { if (r.status() >= 400 && !r.url().includes('favicon')) results.errors.push(`http${r.status()} ${w}x${h}: ${r.url().split('/').slice(-2).join('/')}`); });
  await page.setViewport({ width: w, height: h });
  if (opts.reducedMotion) await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  if (opts.blockAudio) {
    await page.setRequestInterception(true);
    page.on('request', (r) => { if (r.url().endsWith('.mp3')) r.abort(); else r.continue(); });
  }
  await page.goto(`http://127.0.0.1:${PORT}/book_stories/index.html`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => window.__book && document.getElementById('coverTitle').textContent.length > 3, { timeout: 20000 });
  return page;
}
const shot = async (page, dir, name) => { await page.screenshot({ path: join(dir, name + '.png') }); };
const state = (page) => page.evaluate(() => window.__book.state());
const expectedCur = (pageIdx, t) => { const ws = story.pages[pageIdx].words; let c = -1; for (let i = 0; i < ws.length; i++) { if (t >= ws[i].start) c = i; else break; } return c; };

async function runSize(w, h, full) {
  const label = `${w}x${h}`;
  const dir = join(OUT, label); await mkdir(dir, { recursive: true });
  const page = await newPage(w, h);
  await sleep(700);
  await shot(page, dir, '00_cover');
  const fontOk = await page.evaluate(() => document.fonts.check('700 24px Tajawal'));
  check(`font Tajawal loaded ${label}`, fontOk);
  await page.click('#startBtn');
  await sleep(900);
  let st = await state(page);
  check(`start enters book ${label}`, st.screen === 'book' && st.page === 0, JSON.stringify(st));
  check(`audio active ${label}`, st.audioOk === true, JSON.stringify(st));
  const fracs = full ? [0.08, 0.5, 0.88] : [0.5];
  // Deterministic sync pass: pause the book, then seek — updateWords applies
  // the seek synchronously, so the highlighted word must match story.json.
  await page.evaluate(() => window.__book.setPlaying(false));
  for (let i = 0; i < story.pages.length; i++) {
    await page.evaluate(async (idx) => { await window.__book.enterPage(idx); }, i);
    await sleep(250);
    for (const f of fracs) {
      const t = Math.floor(story.pages[i].durationMs * f);
      await page.evaluate((ms) => window.__book.seekTo(ms), t);
      await sleep(120);
      st = await state(page);
      const exp = expectedCur(i, t);
      check(`sync ${label} p${i} @${f}`, Math.abs(st.curWord - exp) <= 1, `cur=${st.curWord} expected=${exp} shown=${st.shown}/${st.total}`);
      if (full || f === 0.5) await shot(page, dir, `p${i}_${Math.round(f * 100)}`);
    }
  }
  // Real-time playback pass: words must track the live audio clock.
  await page.evaluate(async () => { await window.__book.enterPage(1); window.__book.setPlaying(true); });
  await sleep(1300);
  const rt1 = await page.evaluate(() => { const n = document.getElementById('narrator'); return { ct: n.currentTime * 1000, cur: window.__book.state().curWord }; });
  await sleep(2000);
  const rt2 = await page.evaluate(() => { const n = document.getElementById('narrator'); return { ct: n.currentTime * 1000, cur: window.__book.state().curWord }; });
  check(`realtime sync ${label} a`, Math.abs(rt1.cur - expectedCur(1, rt1.ct)) <= 1, `ct=${Math.round(rt1.ct)} cur=${rt1.cur} exp=${expectedCur(1, rt1.ct)}`);
  check(`realtime sync ${label} b`, Math.abs(rt2.cur - expectedCur(1, rt2.ct)) <= 1 && rt2.cur > rt1.cur, `ct=${Math.round(rt2.ct)} cur=${rt2.cur} exp=${expectedCur(1, rt2.ct)}`);
  await page.evaluate(() => window.__book.setPlaying(false));
  if (full || label === '844x390') {
    // flip capture, held mid-turn
    await page.evaluate(async () => { await window.__book.enterPage(2); });
    await sleep(400);
    await page.evaluate(() => { window.__book.holdFlip(true); window.__book.flipTo(3, 1); });
    await sleep(650);
    const leaf = await page.evaluate(() => !!document.querySelector('.leaf'));
    check(`flip leaf present mid-turn ${label}`, leaf);
    await shot(page, dir, 'flip_mid');
    await page.evaluate(() => window.__book.holdFlip(false));
    await page.waitForFunction(() => window.__book.state().page === 3, { timeout: 5000 }).catch(() => {});
    st = await state(page);
    check(`flip lands on next page ${label}`, st.page === 3, `page=${st.page}`);
    await page.evaluate(() => window.__book.flipTo(2, -1));
    await page.waitForFunction(() => window.__book.state().page === 2, { timeout: 5000 }).catch(() => {});
    st = await state(page);
    check(`prev flip returns ${label}`, st.page === 2, `page=${st.page}`);
    // pause freeze
    await page.evaluate(async () => { await window.__book.enterPage(4); window.__book.seekTo(2000); window.__book.setPlaying(false); });
    await sleep(300);
    const a = (await state(page)).curWord;
    await sleep(700);
    const b = (await state(page)).curWord;
    check(`pause freezes words ${label}`, a === b, `curWord ${a} -> ${b}`);
    await page.evaluate(() => window.__book.setPlaying(true));
    // replay
    await page.evaluate(() => window.__book.seekTo(0));
    await sleep(200);
    st = await state(page);
    check(`replay resets words ${label}`, st.shown === 0 || st.curWord <= 0, JSON.stringify(st));
  }
  // end screen: play the last page out from near the end
  await page.evaluate(async () => { const n = window.__book.S.story.pages.length; await window.__book.enterPage(n - 1); window.__book.setPlaying(true); window.__book.seekTo(window.__book.S.story.pages[n - 1].durationMs - 600); });
  await page.waitForFunction(() => window.__book.state().screen === 'end', { timeout: 9000 }).catch(() => {});
  st = await state(page);
  check(`end screen reached ${label}`, st.screen === 'end', JSON.stringify(st));
  await shot(page, dir, '99_end');
  await page.close();
  results.sizes[label] = 'done';
}

/* silent fallback (mp3s blocked) */
{
  const page = await newPage(1024, 768, { blockAudio: true });
  await page.click('#startBtn');
  await sleep(600);
  await page.evaluate(async () => { await window.__book.enterPage(3); });
  await sleep(400);
  const s1 = await state(page);
  await sleep(2600);
  const s2 = await state(page);
  check('silent mode: audioOk=false', s1.audioOk === false, JSON.stringify(s1));
  check('silent mode: words advance on the estimated clock', s2.curWord > s1.curWord, `curWord ${s1.curWord} -> ${s2.curWord}`);
  const dir = join(OUT, 'silent'); await mkdir(dir, { recursive: true });
  await shot(page, dir, 'silent_p3');
  await page.close();
}
/* reduced motion */
{
  const page = await newPage(1024, 768, { reducedMotion: true });
  const hasClass = await page.evaluate(() => document.body.classList.contains('reduced'));
  check('reduced-motion: body.reduced set', hasClass);
  await page.click('#startBtn');
  await sleep(700);
  await page.evaluate(() => window.__book.flipTo(1, 1));
  await sleep(150);
  const leaf = await page.evaluate(() => !!document.querySelector('.leaf'));
  check('reduced-motion: no curl leaf (fade instead)', leaf === false);
  await sleep(500);
  const st = await state(page);
  check('reduced-motion: page still advances', st.page === 1, `page=${st.page}`);
  await page.close();
}

await runSize(1366, 1024, true);
await runSize(844, 390, false);
await runSize(1024, 768, false);
await runSize(390, 844, false);

await browser.close();
server.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(`\n==== ${results.checks.length - failed.length}/${results.checks.length} checks passed; ${results.errors.length} page errors ====`);
for (const e of results.errors.slice(0, 12)) console.log('ERR:', e);
await writeFile(join(OUT, 'results.json'), JSON.stringify(results, null, 1));
process.exit(failed.length || results.errors.length ? 1 : 0);
