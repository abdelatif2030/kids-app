// node _play_tour.mjs outDir WxH game1,game2 -> plays like a child: everything unlocked, opens the menu, starts the first levels (up to 6, spread
// over the list) and takes a screenshot a few seconds into each, plus one after some finger movement. Files: <game>__<k>_<label>.png
import { spawn } from 'node:child_process'; import fs from 'node:fs'; import path from 'node:path';
const [outDir, size, list] = process.argv.slice(2); const [W, H] = size.split('x').map(Number);
fs.mkdirSync(outDir, { recursive: true });
const port = 9500 + Math.floor(Math.random() * 300);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_play_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const bad = /(خروج|exit|رجوع|back|صوت|sound|🔊|🔇|←|→|الإعدادات|التلوينات|المتجر|المحل|الورشة|الخريطة|الأحياء|الشوارع)/i;
for (const g of list.split(',')) {
  try {
    const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
    const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
    const S = (m, p) => send(m, p, sessionId);
    await S('Page.enable'); await S('Runtime.enable');
    await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
    const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
    let k = 0;
    const shot = async (label) => { const r = await S('Page.captureScreenshot', { format: 'png' }); if (r.result) fs.writeFileSync(path.join(outDir, `${g}__${String(k++).padStart(2, '0')}_${label}.png`), Buffer.from(r.result.data, 'base64')); };
    const load = async () => { await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html` }); await sleep(3200); await ev(`(() => { try { window.crStart({ lang: 'ar', age: 5, gender: 'boy', save: { unlocked: 99, level: 99, stage: 99, stars: {}, best: {}, drops: 9999, coins: 9999, tickets: 9999 }, base: './' }); } catch (e) {} return 1; })()`); await sleep(1600); };
    const btns = () => ev(`[...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled).map((b) => (b.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 24))`);
    const click = (i) => ev(`(() => { const b = [...document.querySelectorAll('button')].filter((x) => x.offsetParent && !x.disabled)[${i}]; if (b) b.click(); return !!b; })()`);
    const poke = async () => { const x0 = W * 0.5, y = H * 0.7; await S('Input.dispatchMouseEvent', { type: 'mousePressed', x: x0, y, button: 'left', clickCount: 1 }); for (let s = 1; s <= 8; s++) { await S('Input.dispatchMouseEvent', { type: 'mouseMoved', x: x0 + (s % 2 ? 1 : -1) * s * 14, y: y - s * 6, button: 'left' }); await sleep(120); } await S('Input.dispatchMouseEvent', { type: 'mouseReleased', x: x0 + 60, y: y - 40, button: 'left', clickCount: 1 }); };
    await load();
    const first = (await btns()) || [];
    const cand = first.map((t, i) => [t, i]).filter(([t]) => t && !bad.test(t));
    let started = 0;
    for (const [t0, i] of cand.slice(0, 3)) {
      if (k >= 9) break;
      await load(); await click(i); await sleep(1500);
      const sub = (await btns()) || [];
      const subC = sub.map((t, j) => [t, j]).filter(([t]) => t && !bad.test(t));
      const isMenu = subC.length >= 3 && JSON.stringify(sub) !== JSON.stringify(first);
      if (isMenu) {
        // a level list: start up to 5 of them, spread over the list
        const pick = []; const nL = subC.length; const want = Math.min(5, nL);
        for (let q = 0; q < want; q++) pick.push(subC[Math.round((q * (nL - 1)) / Math.max(1, want - 1))]);
        for (const [tl, j] of pick) {
          if (k >= 9) break;
          await load(); await click(i); await sleep(1500); await click(j); await sleep(3800);
          await shot(`lv${j}`); started++;
          await poke(); await sleep(2500);
          if (k < 9 && started <= 2) await shot(`lv${j}_moved`);
        }
        break;
      } else {
        await sleep(2300); await shot(`go${i}`); started++;
        await poke(); await sleep(2500); await shot(`go${i}_moved`);
      }
    }
    console.log(g, 'buttons', first.length, 'shots', k);
    await send('Target.closeTarget', { targetId });
  } catch (e) { console.log(g, 'ERR', String(e).slice(0, 80)); }
}
chrome.kill(); process.exit(0);
