// node _fit_check.mjs out.json "667x375,844x390,932x430" game1,game2 -> landscape-phone fit check for each game and size:
// starts the game (everything unlocked), then looks at the menu and, after pressing the first play-like button, at the game screen.
// Reports: page scrolls, buttons/panels outside the screen, tiny tap targets (< 36 px), canvas not filling the screen, console errors.
import { spawn } from 'node:child_process'; import fs from 'node:fs';
const [outFile, sizes, list] = process.argv.slice(2);
const port = 9100 + Math.floor(Math.random() * 300);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_fit_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--autoplay-policy=no-user-gesture-required', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); const events = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else events.push(d); };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const out = [];
const probe = `(() => { const W = innerWidth, H = innerHeight; const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent);
  const outside = bs.filter((b) => { const r = b.getBoundingClientRect(); return r.width > 0 && (r.left < -2 || r.top < -2 || r.right > W + 2 || r.bottom > H + 2); }).map((b) => (b.textContent || '').trim().slice(0, 16));
  const tiny = bs.filter((b) => { const r = b.getBoundingClientRect(); return r.width > 0 && Math.min(r.width, r.height) < 30; }).length;
  const c = document.querySelector('canvas'); const cr = c ? c.getBoundingClientRect() : null;
  const panels = [...document.querySelectorAll('[class*="-panel"]')].filter((p) => p.offsetParent).map((p) => { const r = p.getBoundingClientRect(); return { over: r.bottom > H + 2 || r.right > W + 2 || r.top < -2 || r.left < -2, scroll: p.scrollHeight > p.clientHeight + 4 }; });
  return { sw: document.documentElement.scrollWidth > W + 2 || document.documentElement.scrollHeight > H + 2, outside, tiny, canvas: cr ? [Math.round(cr.width), Math.round(cr.height)] : null, panelOver: panels.some((p) => p.over), panelScroll: panels.some((p) => p.scroll), buttons: bs.length }; })()`;
for (const g of list.split(',')) {
  for (const sz of sizes.split(',')) {
    const [W, H] = sz.split('x').map(Number);
    try {
      const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
      const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
      const S = (m, p) => send(m, p, sessionId);
      await S('Page.enable'); await S('Runtime.enable'); await S('Log.enable');
      await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: true, screenWidth: W, screenHeight: H });
      const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : null; };
      events.length = 0;
      await S('Page.navigate', { url: `http://localhost:8099/${g}/index.html` }); await sleep(3200);
      await ev(`(() => { try { window.crStart({ lang: 'ar', age: 5, gender: 'boy', save: { unlocked: 99, level: 99, stage: 99, stars: {}, best: {}, drops: 9999, coins: 9999, tickets: 9999 }, base: './' }); } catch (e) {} return 1; })()`);
      await sleep(1600);
      const menu = await ev(probe);
      await ev(`(() => { const bs = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && !b.disabled); const b = bs.find((x) => /(العب|نلعب|نسوق|نسابق|نبدأ|نخبز|نطير|نغوص|ندافع|نجري|نهرب|نقفز|نرقص|ابدأ|يلا|كمل|▶)/.test(x.textContent)) || bs[0]; if (b) b.click(); return 1; })()`);
      await sleep(2500);
      const second = await ev(probe);
      const errs = events.filter((x) => x.method === 'Runtime.exceptionThrown').length;
      out.push({ g, sz, menu, second, errs });
      await send('Target.closeTarget', { targetId });
    } catch (e) { out.push({ g, sz, err: String(e).slice(0, 60) }); }
  }
}
fs.writeFileSync(outFile, JSON.stringify(out));
chrome.kill(); process.exit(0);
