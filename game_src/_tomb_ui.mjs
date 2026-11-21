import { spawn } from 'node:child_process';
import fs from 'node:fs';
import { LEVELS } from './tomb_puzzle/src/levels.js';
import { parseLevel, solve } from './tomb_puzzle/src/sim.js';
const port = 9700 + Math.floor(Math.random() * 100);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_tomb_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=430,900', 'about:blank'], { stdio: 'ignore' });
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
await S('Emulation.setDeviceMetricsOverride', { width: 430, height: 900, deviceScaleFactor: 1, mobile: true });
await S('Page.navigate', { url: 'http://localhost:8099/tomb_puzzle/index.html' });
await sleep(3500);
const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result?.result?.value; };
const shot = async (n) => { const r = await S('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(`C:/dev/rehlaty/build/${n}.png`, Buffer.from(r.result.data, 'base64')); };
const key = async (k) => { const m = { U: 'ArrowUp', D: 'ArrowDown', L: 'ArrowLeft', R: 'ArrowRight' }[k]; await S('Input.dispatchKeyEvent', { type: 'keyDown', key: m }); await S('Input.dispatchKeyEvent', { type: 'keyUp', key: m }); await sleep(520); };
const btns = () => ev(`[...document.querySelectorAll('button')].filter(b=>b.offsetParent).map(b=>b.textContent.trim().slice(0,24))`);
console.log('menu', await btns());
const click = (re) => ev(`(()=>{const b=[...document.querySelectorAll('button')].filter(b=>b.offsetParent&&new RegExp(${JSON.stringify(re)}).test(b.textContent));if(!b[0])return null;b[0].click();return b[0].textContent.trim()})()`);
console.log('click', await click('يلا|ابدأ|العب|كمّل|play'));
await sleep(2500); await shot('tomb_a');
console.log('after', await btns());
for (let li = 0; li < 4; li++) {
  const L = parseLevel(LEVELS[li]); const sol = Array.from(solve(L, undefined, { allKeys: true, maxStates: 400000 }).path);
  for (const k of sol) await key(k);
  await sleep(1500); await shot(`tomb_win${li + 1}`);
  const b = await btns(); const txt = await ev('document.body.innerText.slice(0,90)'); console.log('level', li + 1, b.some((x) => /التالية/.test(x)) ? 'WIN PANEL' : 'NO WIN', JSON.stringify(txt));
  const c = await click('الجاية|التالي|next|كمّل|المرحلة|غرفة'); console.log('  clicked', c);
  await sleep(2500);
}
chrome.kill(); process.exit(0);
