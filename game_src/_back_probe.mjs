// node _back_probe.mjs game "btn1|btn2" -> after the button sequence, calls crBack 4 times and prints what each call clicked (the visible buttons before)
import { spawn } from 'node:child_process'; import fs from 'node:fs';
const [game, seq = ''] = process.argv.slice(2);
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_bp_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=844,390', 'about:blank'], { stdio: 'ignore' });
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
await S('Emulation.setDeviceMetricsOverride', { width: 844, height: 390, deviceScaleFactor: 1, mobile: false });
await S('Page.navigate', { url: `http://localhost:8099/${game}/index.html` });
await sleep(4000);
const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result && r.result.result.value; };
const list = () => ev(`JSON.stringify([...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled).map((b) => (b.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 14) || (b.getAttribute('aria-label') || '?')))`);
for (const t of seq.split('|').filter(Boolean)) { await ev(`(() => { const b = [...document.querySelectorAll('button')].filter((x) => x.offsetParent && !x.disabled).find((x) => (x.textContent + (x.getAttribute('aria-label') || '')).includes(${JSON.stringify(t)})); if (b) b.click(); })()`); await sleep(1500); }
for (let i = 0; i < 4; i++) { console.log('buttons:', await list()); const r = await ev('String(window.crBack())'); console.log('  crBack ->', r); await sleep(1300); }
chrome.kill(); process.exit(0);
