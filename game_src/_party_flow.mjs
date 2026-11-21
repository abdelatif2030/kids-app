// Plays the whole merged loop in a real browser: a flower in the garden, a cupcake, a hairdo..., then checks the party bag counts.
import { spawn } from 'node:child_process';
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_pf_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--window-size=844,390', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); const logs = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else if (d.method === 'Runtime.exceptionThrown') logs.push('EXC ' + JSON.stringify(d.params.exceptionDetails).slice(0, 200)); };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);
await S('Page.enable'); await S('Runtime.enable');
await S('Page.navigate', { url: 'http://localhost:8099/girls_world/index.html' });
await sleep(3500);
const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result && r.result.result.value; };
const click = (sel, i = 0) => ev(`(() => { const e = [...document.querySelectorAll(${JSON.stringify(sel)})].filter((x) => x.offsetParent)[${i}]; if (e) { e.click(); return true; } return false; })()`);
// garden: plant + water x3 in pot 0 and 1 (a bloom gives a flower)
await click('.gw-door', 4); await sleep(2500);
for (const p of [0, 1]) { await click(`.ga-pot`, p); await sleep(300); for (let k = 0; k < 3; k++) { await click('.ga-pot', p); await sleep(300); } }
await sleep(800);
await click('.gk-top .gk-rb', 0); await sleep(1000);   // back to the map
const note = await ev(`document.querySelector('.gw-bagnote') ? document.querySelector('.gw-bagnote').textContent : 'no bag note'`);
console.log('after the garden, the map says:', note);
await click('.gw-door', 5); await sleep(2500);
const bag = await ev(`[...document.querySelectorAll('.pa-item')].map((e) => e.textContent.replace(/\s+/g, ' ').trim()).slice(0, 8).join(' | ')`);
console.log('party bag:', bag);
await click('.pa-vases .pa-slot', 0); await sleep(500);
console.log('after tapping a vase:', await ev(`document.querySelector('.pa-bag h4').textContent`));
console.log('go-buttons:', await ev(`[...document.querySelectorAll('.pa-go')].map((e) => e.textContent).join(' / ')`));
await click('.pa-go', 0); await sleep(2000);
console.log('go button opened:', await ev(`document.querySelector('.gk-top .gk-title') ? document.querySelector('.gk-top .gk-title').textContent : '?'`));
console.log('errors:', logs.length ? logs.join('\n') : 'none');
chrome.kill(); process.exit(0);
