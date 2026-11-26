// node _shot_seq.mjs out.png game WxH "text1|text2|text3" [waitMs] -> opens the game, presses buttons whose text contains each item in order, waits, screenshots.
import { spawn } from 'node:child_process'; import fs from 'node:fs'; import path from 'node:path';
const [out, game, size, seq = '', wait = '6000'] = process.argv.slice(2);
const [W, H] = size.split('x').map(Number);
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_seq_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);
await S('Page.enable'); await S('Runtime.enable');
await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: W < 700 });
await S('Page.navigate', { url: process.env.URL || `http://localhost:8099/${game}/index.html` });
await sleep(4000);
for (const t of seq.split('|').filter(Boolean)) {
  await S('Runtime.evaluate', { expression: `(() => { const b = [...document.querySelectorAll('button')].filter((x) => x.offsetParent && !x.disabled).find((x) => (x.textContent + (x.getAttribute('aria-label') || '')).includes(${JSON.stringify(t)})); if (b) b.click(); return !!b; })()` });
  await sleep(1800);
}
await sleep(Number(wait));
const rr = await S('Runtime.evaluate', { expression: `JSON.stringify([...document.querySelectorAll('.sl-girl,.sl-girl img.base')].map(e=>{const r=e.getBoundingClientRect();return [e.className,Math.round(r.left),Math.round(r.top),Math.round(r.width),Math.round(r.height)]}))`, returnByValue: true }); if (process.env.DBG) console.log(rr.result && rr.result.result && rr.result.result.value);
if (process.env.NET) { const nn = await S('Runtime.evaluate', { expression: `JSON.stringify(performance.getEntriesByType('resource').map(e=>e.name).filter(n=>/(learn_voice|snd)/.test(n)).map(n=>n.split('/').slice(-2).join('/')))`, returnByValue: true }); console.log('voice files:', nn.result && nn.result.result && nn.result.result.value); }
if (process.env.BACK) { const out = []; for (let i = 0; i < 4; i++) { const b = await S('Runtime.evaluate', { expression: `String(window.crBack && window.crBack())`, returnByValue: true }); out.push(b.result && b.result.result && b.result.result.value); await sleep(1200); } console.log('crBack x4:', out.join(',')); }
if (process.env.INJECT) { const iv = await S('Runtime.evaluate', { expression: process.env.INJECT, returnByValue: true }); if (process.env.PRINT) console.log(JSON.stringify(iv.result && iv.result.result && iv.result.result.value)); await sleep(1500); } // optional JS run before the screenshot (e.g. to show a screen that needs a finished game)
const r = await S('Page.captureScreenshot', { format: 'png' });
if (r.result) fs.writeFileSync(out, Buffer.from(r.result.data, 'base64'));
chrome.kill(); process.exit(0);
