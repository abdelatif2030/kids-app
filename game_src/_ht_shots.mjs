import { spawn } from 'node:child_process';
import fs from 'node:fs';
const port = 9800 + Math.floor(Math.random() * 100);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_ht_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--window-size=420,780', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);
await S('Page.enable'); await S('Runtime.enable');
await S('Emulation.setDeviceMetricsOverride', { width: 420, height: 780, deviceScaleFactor: 1, mobile: true });
await S('Page.navigate', { url: 'http://localhost:8099/hero_tower/index.html' });
await sleep(3500);
const ev = async (e) => (await S('Runtime.evaluate', { expression: e, returnByValue: true })).result?.result?.value;
await ev(`[...document.querySelectorAll('button')].find(b=>/نلعب/.test(b.textContent)).click()`);
await sleep(3000);
const shot = async (n) => { const r = await S('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(`C:/dev/rehlaty/build/${n}.png`, Buffer.from(r.result.data, 'base64')); };
await shot('ht_0');
// tap a thing: try several spots on the lower half until the hero strikes
const tap = async (x, y) => { await S('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 }); await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 }); };
for (const [x, y] of [[136, 575]]) {
  await tap(x, y);
  for (let k = 0; k < 12; k++) { await sleep(45); await shot(`ht_${x}_${y}_${k}`); }
}
chrome.kill(); process.exit(0);
