// node _record.mjs outDir game "round buttons selector index list e.g. 0,1,2" secondsPerLevel fps -> frames of each level (menu -> click node i -> play), then ffmpeg makes <outDir>/<game>.mp4
import { spawn, execSync } from 'node:child_process'; import fs from 'node:fs'; import path from 'node:path';
const [outDir, game, levels, secs = '6', fps = '8', nodeSel = '.mr-node'] = process.argv.slice(2);
fs.rmSync(path.join(outDir, 'frames'), { recursive: true, force: true }); fs.mkdirSync(path.join(outDir, 'frames'), { recursive: true });
const port = 9300 + Math.floor(Math.random() * 300);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_rec_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', '--window-size=844,390', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);
await S('Page.enable'); await S('Runtime.enable');
await S('Emulation.setDeviceMetricsOverride', { width: 844, height: 390, deviceScaleFactor: 1, mobile: false });
const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
let n = 0;
const frame = async () => { const r = await S('Page.captureScreenshot', { format: 'jpeg', quality: 70 }); if (r.result) fs.writeFileSync(path.join(outDir, 'frames', `f${String(n++).padStart(5, '0')}.jpg`), Buffer.from(r.result.data, 'base64')); };
for (const L of levels.split(',')) {
  await S('Page.navigate', { url: `http://localhost:8099/${game}/index.html` }); await sleep(3500);
  await ev(`(() => { window.crStart({ lang: 'ar', age: 5, gender: 'boy', save: { unlocked: 99, level: 99, stage: 99, stars: {}, best: {}, color: 0 }, base: './' }); return 1; })()`);
  await sleep(1800); for (let k = 0; k < 3; k++) { await frame(); await sleep(100); }
  await ev(`(() => { const n = [...document.querySelectorAll('${nodeSel}')][${L}]; if (n) n.click(); return !!n; })()`); await sleep(400);
  await ev(`(() => { const b = [...document.querySelectorAll('button')].find((x) => x.offsetParent && /▶/.test(x.textContent)); if (b) b.click(); return !!b; })()`);
  for (let q = 0; q < Number(secs); q++) { await frame(); if (q === 6) await S('Input.dispatchMouseEvent', { type: 'mousePressed', x: 760, y: 330, button: 'left', clickCount: 1 }); }
  await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 760, y: 330, button: 'left', clickCount: 1 });
}
chrome.kill();
execSync(`ffmpeg -y -loglevel error -framerate ${fps} -i "${path.join(outDir, 'frames', 'f%05d.jpg')}" -c:v libx264 -pix_fmt yuv420p -vf "scale=844:390" "${path.join(outDir, game + '.mp4')}"`);
console.log('frames', n); process.exit(0);
