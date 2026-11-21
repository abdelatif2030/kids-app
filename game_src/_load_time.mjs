// node _load_time.mjs out.json game1,game2 -> time until the first button (menu) is on screen, and the bytes the page loaded.
import { spawn } from 'node:child_process'; import fs from 'node:fs';
const [out, list] = process.argv.slice(2);
const port = 9600 + Math.floor(Math.random() * 300);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_lt_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=844,390', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); let bytes = 0;
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else if (d.method === 'Network.loadingFinished') bytes += d.params.encodedDataLength || 0; };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const res = [];
for (const g of list.split(',')) {
  const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
  const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable'); await S('Network.enable'); await S('Network.setCacheDisabled', { cacheDisabled: true }); await S('Runtime.enable');
  await S('Emulation.setDeviceMetricsOverride', { width: 844, height: 390, deviceScaleFactor: 1, mobile: false });
  bytes = 0;
  const t0 = Date.now();
  await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html` });
  let ready = null;
  for (let k = 0; k < 150; k++) {
    await sleep(100);
    const r = await S('Runtime.evaluate', { expression: `document.querySelectorAll('button').length`, returnByValue: true });
    if (r.result && r.result.result && r.result.result.value > 0) { ready = Date.now() - t0; break; }
  }
  res.push({ g, ms: ready, kb: Math.round(bytes / 1024) });
  console.log(g.padEnd(18), String(ready).padStart(6), 'ms', String(Math.round(bytes / 1024)).padStart(6), 'KB');
  await send('Target.closeTarget', { targetId });
}
fs.writeFileSync(out, JSON.stringify(res, null, 1));
chrome.kill(); process.exit(0);
