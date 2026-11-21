// Per-level UI walker: starts each game with everything unlocked, then clicks each menu button (levels, courses, rounds) in turn,
// waits, and records console errors + whether a canvas is alive. Run: node game_src/_walk_levels.mjs [outFile] [WxH] [g1,g2]
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'C:/dev/rehlaty';
const OUTF = path.resolve(process.argv[2] || 'build/walk.json');
const [W, H] = (process.argv[3] || '844x390').split('x').map(Number);
const dirs = fs.readdirSync(path.join(ROOT, 'assets', 'games'), { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'assets', 'games', d.name, 'boot.js')) && !d.name.startsWith('learn_')).map((d) => d.name);
const only = process.argv[4] ? process.argv[4].split(',') : dirs;
const port = 9700 + Math.floor(Math.random() * 200);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${path.join(ROOT, 'build', 'chrome_walk_' + port)}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function wsUrl() { for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); return (await r.json()).webSocketDebuggerUrl; } catch { await sleep(500); } } throw new Error('no chrome'); }
const ws = new WebSocket(await wsUrl());
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); const events = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else events.push(d); };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); const t = setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); const o = res; pend.set(i, (d) => { clearTimeout(t); o(d); }); });
const results = [];
const bad = /(خروج|exit|رجوع|back|صوت|sound|mute|🔊|🔇|←|→)/i;
for (const g of only) {
  const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
  const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable'); await S('Runtime.enable'); await S('Log.enable');
  await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  const ev = async (expr) => { const r = await S('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.result ? r.result.result.value : null; };
  events.length = 0;
  await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html` });
  await sleep(3000);
  const start = () => ev(`(() => { const s = { unlocked: 99, level: 99, stage: 99, stars: {}, best: {}, drops: 9999, coins: 9999, tickets: 9999 }; window.crStart({ lang: 'ar', age: 5, gender: 'boy', save: s, base: './' }); return 1; })()`);
  const list = () => ev(`(() => [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled).map((b) => (b.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 24))) ()`);
  let ok = true; const tried = []; const errs = new Set();
  await start(); await sleep(1800);
  const first = (await list()) || [];
  const n = Math.min(first.length, 16);
  for (let i = 0; i < n; i++) {
    if (bad.test(first[i])) continue;
    await start(); await sleep(1400);
    events.length = 0;
    const clicked = await ev(`(() => { const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled); const b = bs[${i}]; if (!b) return null; b.click(); return (b.textContent || '').trim().slice(0, 24); })()`);
    await sleep(1600);
    const subEarly = ((await list()) || []).filter((x) => x);
    const txt0 = await ev(`(() => { const t = document.body.innerText || ''; const m = /undefined|NaN|\[object/.exec(t); return m ? t.slice(Math.max(0, m.index - 20), m.index + 25).replace(/\s+/g, ' ') : ''; })()`);
    if (txt0) errs.add('TEXT: ' + txt0);
    // poke the game a bit
    await S('Input.dispatchMouseEvent', { type: 'mousePressed', x: W * 0.5, y: H * 0.6, button: 'left', clickCount: 1 });
    await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x: W * 0.5, y: H * 0.6, button: 'left', clickCount: 1 });
    await sleep(900);
    const alive = await ev(`(() => { const c = document.querySelector('canvas'); return !!c && c.clientWidth > 50; })()`);
    const e = events.filter((x) => x.method === 'Runtime.exceptionThrown' || (x.method === 'Log.entryAdded' && x.params.entry.level === 'error' && !/404|Failed to load resource|WebGL|GPU stall/.test(x.params.entry.text))).map((x) => (x.params.exceptionDetails ? x.params.exceptionDetails.exception?.description || x.params.exceptionDetails.text : x.params.entry.text).slice(0, 140));
    e.forEach((x) => errs.add(x));
    tried.push({ i, clicked, alive, errs: e.length });
    if (e.length) ok = false;
    // a second menu (levels / courses / rounds) opened? test each of its buttons too
    const sub = subEarly;
    if (sub.length >= 3 && JSON.stringify(sub) !== JSON.stringify(first)) {
      const m = Math.min(sub.length, 14);
      for (let j = 0; j < m; j++) {
        if (bad.test(sub[j])) continue;
        await start(); await sleep(1200);
        await ev(`(() => { const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled); if (bs[${i}]) bs[${i}].click(); return 1; })()`);
        await sleep(1200);
        events.length = 0;
        const c2 = await ev(`(() => { const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled); const b = bs[${j}]; if (!b) return null; b.click(); return (b.textContent || '').trim().slice(0, 24); })()`);
        await sleep(1500);
        const txt1 = await ev(`(() => { const t = document.body.innerText || ''; const m = /undefined|NaN|\[object/.exec(t); return m ? t.slice(Math.max(0, m.index - 20), m.index + 25).replace(/\s+/g, ' ') : ''; })()`);
        if (txt1) errs.add('TEXT: ' + txt1);
        await S('Input.dispatchMouseEvent', { type: 'mousePressed', x: W * 0.5, y: H * 0.6, button: 'left', clickCount: 1 });
        await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x: W * 0.5, y: H * 0.6, button: 'left', clickCount: 1 });
        await sleep(800);
        const al2 = await ev(`(() => { const c = document.querySelector('canvas'); return !!c && c.clientWidth > 50; })()`);
        const e2 = events.filter((x) => x.method === 'Runtime.exceptionThrown' || (x.method === 'Log.entryAdded' && x.params.entry.level === 'error' && !/404|Failed to load resource|WebGL|GPU stall/.test(x.params.entry.text))).map((x) => (x.params.exceptionDetails ? x.params.exceptionDetails.exception?.description || x.params.exceptionDetails.text : x.params.entry.text).slice(0, 140));
        e2.forEach((x) => errs.add(x));
        tried.push({ i, j, clicked: c2, alive: al2, errs: e2.length });
      }
    }
  }
  results.push({ g, buttons: first.length, tried: tried.length, deadCanvas: tried.filter((t) => t.clicked && !t.alive).length, errors: [...errs].slice(0, 3) });
  console.log(g, JSON.stringify(results.at(-1)));
  await send('Target.closeTarget', { targetId });
  fs.writeFileSync(OUTF, JSON.stringify(results, null, 1));
}
chrome.kill(); process.exit(0);
