// node _tour.mjs outDir WxH game1,game2 -> for every game: a screenshot of the start screen and of what EVERY visible button opens (depth 1 and 2 for the first menu buttons).
import { spawn } from 'node:child_process'; import fs from 'node:fs'; import path from 'node:path';
const [outDir, size, list] = process.argv.slice(2); const [W, H] = size.split('x').map(Number);
fs.mkdirSync(outDir, { recursive: true });
const port = 9800 + Math.floor(Math.random() * 150);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_tour_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const bad = /(خروج|exit|رجوع|back|صوت|sound|🔊|🔇|←|→)/i;
for (const g of list.split(',')) {
  const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
  const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable'); await S('Runtime.enable');
  await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
  const shot = async (name) => { const r = await S('Page.captureScreenshot', { format: 'png' }); if (r.result) fs.writeFileSync(path.join(outDir, `${g}__${name}.png`), Buffer.from(r.result.data, 'base64')); };
  const load = async () => { await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html` }); await sleep(3500); };
  const btns = () => ev(`[...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled).map((b) => (b.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 20))`);
  const click = (i) => ev(`(() => { const b = [...document.querySelectorAll('button')].filter((x) => x.offsetParent && !x.disabled)[${i}]; if (b) b.click(); return !!b; })()`);
  await load(); await shot('00_start');
  const first = (await btns()) || [];
  let n = 0;
  for (let i = 0; i < Math.min(first.length, 8); i++) {
    if (bad.test(first[i])) continue;
    await load(); await click(i); await sleep(2600); n++; await shot(`1${String(i).padStart(2, '0')}_${first[i].replace(/[^\p{L}\p{N}]/gu, '').slice(0, 8) || 'btn'}`);
    const sub = (await btns()) || [];
    for (let j = 0; j < Math.min(sub.length, 3); j++) {
      if (bad.test(sub[j]) || sub[j] === first[i]) continue;
      await load(); await click(i); await sleep(1500); await click(j); await sleep(2600); await shot(`2${i}${j}_${sub[j].replace(/[^\p{L}\p{N}]/gu, '').slice(0, 8) || 'btn'}`);
    }
  }
  console.log(g, 'buttons:', first.length);
  await send('Target.closeTarget', { targetId });
}
chrome.kill(); process.exit(0);
