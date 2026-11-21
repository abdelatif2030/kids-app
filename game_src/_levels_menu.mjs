// Starts every web game in headless Chrome (CDP), presses its way past the menus, plays a few seconds with taps/drag/keys,
// and saves screenshots + console errors. Run: node game_src/_play_all.mjs [outDir] [WxH] [game1,game2]   (needs python -m http.server 8099 in assets/games)
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'C:/dev/rehlaty';
const OUT = path.resolve(process.argv[2] || 'build/play');
const [W, H] = (process.argv[3] || '844x390').split('x').map(Number);
fs.mkdirSync(OUT, { recursive: true });
const dirs = fs.readdirSync(path.join(ROOT, 'assets', 'games'), { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'assets', 'games', d.name, 'index.html')) && !d.name.startsWith('learn_')).map((d) => d.name);
const only = process.argv[4] ? process.argv[4].split(',') : dirs;
const port = 9333 + Math.floor(Math.random() * 300);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${path.join(ROOT, 'build', 'chrome_play_' + port)}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function wsUrl() { for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); return (await r.json()).webSocketDebuggerUrl; } catch { await sleep(500); } } throw new Error('no chrome'); }
const ws = new WebSocket(await wsUrl());
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); const events = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else events.push(d); };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const results = [];
for (const g of only) {
  const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
  const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable'); await S('Runtime.enable'); await S('Log.enable');
  await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: W < 700 });
  events.length = 0;
  await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html` });
  await sleep(3500);
  const shot = async (tag) => { const r = await S('Page.captureScreenshot', { format: 'png' }); if (r.result) fs.writeFileSync(path.join(OUT, `${g}_${tag}.png`), Buffer.from(r.result.data, 'base64')); };
  const ev = async (expr) => { const r = await S('Runtime.evaluate', { expression: expr, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
  await shot('0menu');
  const click = () => ev(`(() => { const bad = /(خروج|exit|رجوع|back|الجراج|garage|صوت|sound|المراحل)/i; const good = /(يلا|ابدأ|العب|سباق|ابدا|play|start|race|fight|go|نبدأ|نقاتل|نسوق|نلعب|نغوص)/i; const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled && !bad.test(b.textContent + b.getAttribute('aria-label'))); const b = bs.find((x) => good.test(x.textContent)) || bs[0]; if (!b) return null; b.click(); return b.textContent.trim().slice(0, 30); })()`);
  const clicks = [];
  clicks.push(await ev(`(() => { const b = [...document.querySelectorAll('button')].filter((x) => x.offsetParent && /(المراحل|الخريطة|مراحل|الجولات|المسارات|الفصل|map|levels|courses)/i.test(x.textContent + x.getAttribute('aria-label'))); if (!b[0]) return null; b[0].click(); return b[0].textContent.trim().slice(0, 20); })()`)); await sleep(2000); await shot('1after1'); await shot('2play'); await shot('3later');
  if (true) { const errs0 = []; results.push({ g, clicks, errs: [], canvas: null }); console.log(g, JSON.stringify(clicks)); await send('Target.closeTarget', { targetId }); continue; }
  // play: taps, drags and keys in the middle of the screen
  for (let k = 0; k < 6; k++) {
    const x = W * (0.3 + 0.4 * ((k % 3) / 2)), y = H * 0.6;
    await S('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
    await S('Input.dispatchMouseEvent', { type: 'mouseMoved', x: x + 60, y: y - 30, button: 'left' });
    await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x: x + 60, y: y - 30, button: 'left', clickCount: 1 });
    for (const key of ['ArrowLeft', 'ArrowRight', 'Space']) { await S('Input.dispatchKeyEvent', { type: 'keyDown', key, code: key === 'Space' ? 'Space' : key }); await S('Input.dispatchKeyEvent', { type: 'keyUp', key, code: key === 'Space' ? 'Space' : key }); }
    await sleep(700);
  }
  await shot('2play');
  await sleep(4000);
  await shot('3later');
  const errs = events.filter((e) => e.method === 'Runtime.exceptionThrown' || (e.method === 'Log.entryAdded' && e.params.entry.level === 'error' && !/404|Failed to load resource/.test(e.params.entry.text))).map((e) => (e.params.exceptionDetails ? e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text : e.params.entry.text).slice(0, 160));
  const canvas = await ev(`(() => { const c = document.querySelector('canvas'); return c ? [c.clientWidth, c.clientHeight, innerWidth, innerHeight] : null; })()`);
  results.push({ g, clicks, errs, canvas });
  console.log(g, JSON.stringify({ clicks, errs: errs.slice(0, 2), canvas }));
  await send('Target.closeTarget', { targetId });
}
fs.writeFileSync(path.join(OUT, 'result.json'), JSON.stringify(results, null, 1));
chrome.kill();
process.exit(0);
