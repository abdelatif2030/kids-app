// Learning games smoke: each learn_* game x ages 3,4,5,6 (and levels where there are menus): start, poke buttons and the canvas for a while,
// record console errors, posted messages (round/complete/speak) and a screenshot. Run: node game_src/_walk_learn.mjs [outDir] [WxH] [g1,g2]
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'C:/dev/rehlaty';
const OUT = path.resolve(process.argv[2] || 'build/learn');
fs.mkdirSync(OUT, { recursive: true });
const [W, H] = (process.argv[3] || '844x390').split('x').map(Number);
const dirs = fs.readdirSync(path.join(ROOT, 'assets', 'games'), { withFileTypes: true }).filter((d) => d.isDirectory() && d.name.startsWith('learn_') && fs.existsSync(path.join(ROOT, 'assets', 'games', d.name, 'boot.js'))).map((d) => d.name);
const only = process.argv[4] ? process.argv[4].split(',') : dirs;
const port = 9950 + Math.floor(Math.random() * 40);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${path.join(ROOT, 'build', 'chrome_learn_' + port)}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function wsUrl() { for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); return (await r.json()).webSocketDebuggerUrl; } catch { await sleep(500); } } throw new Error('no chrome'); }
const ws = new WebSocket(await wsUrl());
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); const events = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else events.push(d); };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const results = [];
const bad = /(خروج|exit|رجوع|back|صوت|sound|mute|🔊|🔇)/i;
for (const g of only) for (const age of [3, 4, 5, 6]) {
  const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
  const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable'); await S('Runtime.enable'); await S('Log.enable');
  await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  const ev = async (expr) => { const r = await S('Runtime.evaluate', { expression: expr, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
  events.length = 0;
  await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html?age=${age}` });
  await sleep(3500);
  if (age === 5) { const r = await S('Page.captureScreenshot', { format: 'png' }); if (r.result) fs.writeFileSync(path.join(OUT, `${g}_menu.png`), Buffer.from(r.result.data, 'base64')); }
  const msgs = {};
  let clicks = 0;
  for (let k = 0; k < 14; k++) {
    // press a plausible button (play / next / an answer), else poke the canvas on a grid
    const t = await ev(`(() => { const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled && !${bad}.test((b.textContent||'') + (b.getAttribute('aria-label')||''))); if (!bs.length) return null; const b = bs[Math.floor(Math.random()*bs.length)]; b.click(); return 1; })()`);
    if (t) clicks++;
    const gx = W * (0.2 + 0.6 * ((k * 7 % 5) / 4)), gy = H * (0.3 + 0.5 * ((k * 3 % 4) / 3));
    await S('Input.dispatchMouseEvent', { type: 'mousePressed', x: gx, y: gy, button: 'left', clickCount: 1 });
    await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x: gx, y: gy, button: 'left', clickCount: 1 });
    await sleep(900);
  }
  for (const e of events) if (e.method === 'Runtime.consoleAPICalled') { const a = (e.params.args[1] && e.params.args[1].value) || ''; const m = /"type":"(\w+)"/.exec(a); if (m) msgs[m[1]] = (msgs[m[1]] || 0) + 1; }
  const errs = events.filter((e) => e.method === 'Runtime.exceptionThrown' || (e.method === 'Log.entryAdded' && e.params.entry.level === 'error' && !/404|Failed to load resource|WebGL|GPU stall/.test(e.params.entry.text))).map((e) => (e.params.exceptionDetails ? e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text : e.params.entry.text).slice(0, 140));
  const alive = await ev(`(() => { const c = document.querySelector('canvas'); return !!c && c.clientWidth > 50; })()`);
  if (age === 5) { const r = await S('Page.captureScreenshot', { format: 'png' }); if (r.result) fs.writeFileSync(path.join(OUT, `${g}_play.png`), Buffer.from(r.result.data, 'base64')); }
  results.push({ g, age, alive, clicks, msgs, errs: [...new Set(errs)].slice(0, 3) });
  console.log(JSON.stringify(results.at(-1)));
  await send('Target.closeTarget', { targetId });
  fs.writeFileSync(path.join(OUT, 'result.json'), JSON.stringify(results, null, 1));
}
chrome.kill(); process.exit(0);
