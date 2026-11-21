// node _profile_start.mjs game -> CPU profile of the start-up until the first button; prints the heaviest functions (self time).
import { spawn } from 'node:child_process';
const game = process.argv[2];
const port = 9500 + Math.floor(Math.random() * 300);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_pf_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=844,390', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 30000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);
await S('Page.enable'); await S('Profiler.enable'); await S('Network.enable'); await S('Network.setCacheDisabled', { cacheDisabled: true });
await S('Emulation.setDeviceMetricsOverride', { width: 844, height: 390, deviceScaleFactor: 1, mobile: false });
await S('Profiler.setSamplingInterval', { interval: 500 });
await S('Profiler.start');
const t0 = Date.now();
await S('Page.navigate', { url: `http://localhost:8099/${game}/index.html` });
for (let k = 0; k < 150; k++) { await sleep(100); const r = await S('Runtime.evaluate', { expression: `document.querySelectorAll('button').length`, returnByValue: true }); if (r.result && r.result.result && r.result.result.value > 0) break; }
const total = Date.now() - t0;
const { result: { profile } } = await S('Profiler.stop');
const self = new Map(); const byId = new Map(profile.nodes.map((n) => [n.id, n]));
const dt = profile.timeDeltas; let tot = 0;
profile.samples.forEach((sid, i) => { const n = byId.get(sid); const key = `${n.callFrame.functionName || '(anon)'} ${n.callFrame.url.split('/').pop()}:${n.callFrame.lineNumber}`; self.set(key, (self.get(key) || 0) + dt[i]); tot += dt[i]; });
console.log(game, 'to first button', total, 'ms; sampled CPU', Math.round(tot / 1000), 'ms');
[...self.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([k, v]) => console.log(String(Math.round(v / 1000)).padStart(6), 'ms', k.slice(0, 100)));
chrome.kill(); process.exit(0);
