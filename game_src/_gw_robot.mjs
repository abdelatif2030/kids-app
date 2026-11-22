// A UI robot for Princess World: plays EVERY level to its star through the real DOM in headless Chrome and reports what happened.
//   node _gw_robot.mjs 844x390|390x844 [level,level]   (levels: dress salon pet cupcake garden party)
import { spawn } from 'node:child_process';
const [size = '844x390', only = ''] = process.argv.slice(2);
const [W, H] = size.split('x').map(Number);
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=C:/dev/rehlaty/build/chrome_rb_${port}`, '--no-first-run', '--enable-unsafe-swiftshader', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws; for (let i = 0; i < 40; i++) { try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); ws = new WebSocket((await r.json()).webSocketDebuggerUrl); break; } catch { await sleep(500); } }
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); const errors = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text || '').slice(0, 160)); };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); setTimeout(() => { pend.delete(i); res({}); }, 20000); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);
await S('Page.enable'); await S('Runtime.enable');
await S('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: W < 700 });
const ev = async (e) => { const r = await S('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result && r.result.result && r.result.result.value; };
const click = (sel, i = 0) => ev(`(() => { const e = [...document.querySelectorAll(${JSON.stringify(sel)})].filter((x) => x.offsetParent !== null)[${i}]; if (!e) return false; e.click(); return true; })()`);
const count = (sel) => ev(`[...document.querySelectorAll(${JSON.stringify(sel)})].filter((x) => x.offsetParent !== null).length`);
const text = (sel) => ev(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); return e ? e.textContent.replace(/\\s+/g, ' ').trim() : null; })()`);
const exists = (sel) => ev(`!!document.querySelector(${JSON.stringify(sel)})`);
const hit = async (sel, i = 0, wait = 350) => { const ok = await click(sel, i); await sleep(wait); return ok; };
const report = [];
const door = { dress: 0, salon: 1, pet: 2, cupcake: 3, garden: 4, party: 5 };
async function open(level) {
  await S('Page.navigate', { url: 'http://localhost:8099/girls_world/index.html' }); await sleep(3200);
  await click('.gw-door', door[level]); await sleep(2500);
}
async function star() { for (let i = 0; i < 12; i++) { if (await exists('.gk-stars')) return true; await sleep(500); } return false; }
const levels = {
  async dress() {
    for (let look = 0; look < 3; look++) {
      for (const cat of [0, 1, 2]) { await hit('.dr-cat', cat); await hit('.dr-item', look + cat); }
      if (!(await exists('.dr-party'))) return `look ${look + 1}: the Party button did not appear`;
      await hit('.dr-party', 0, 3400);
      if (look < 2 && !(await exists('.dr-cat'))) return `look ${look + 1}: tray gone after the party`;
    }
    return (await star()) ? 'ok' : 'no star after 3 looks';
  },
  async salon() {
    for (let g = 0; g < 3; g++) {
      await hit('.sl-tool', 0); await hit('.sl-opt', 0); await hit('.sl-tool', 1); await hit('.sl-opt', 2); await hit('.sl-tool', 2); await hit('.sl-opt', 3); await hit('.sl-tool', 4); await hit('.sl-opt', 1);
      if (!(await exists('.sl-mirror'))) return `girl ${g + 1}: the Mirror button did not appear`;
      await hit('.sl-mirror', 0, 3000);
    }
    return (await star()) ? 'ok' : 'no star after 3 girls';
  },
  async pet() {
    await hit('.pt-card', 1, 600);
    for (let f = 0; f < 4; f++) {
      for (const st of ['feed', 'bath', 'brush', 'sleep']) { if (!(await click(`.pt-step[data-step="${st}"]`))) return `friend ${f + 1}: step ${st} not found`; await sleep(2300); }
      await sleep(2800);
    }
    return (await star()) ? 'ok' : 'no star after 4 friends';
  },
  async cupcake() {
    for (let o = 0; o < 3; o++) {
      await hit('.cu-opt', 0); await hit('.cu-opt', 0); await hit('.cu-opt', 0); await hit('.cu-opt', 0); await hit('.cu-opt', 0);
      const guests = await count('.cu-guest');
      if (!guests) return `order ${o + 1}: no guests`;
      for (let g = 0; g < guests; g++) await hit('.cu-guest', g, 500);
      await sleep(2300);
    }
    return (await star()) ? 'ok' : 'no star after 3 orders';
  },
  async garden() {
    for (let p = 0; p < 6; p++) { await hit('.ga-pot', p, 300); for (let k = 0; k < 3; k++) await hit('.ga-pot', p, 300); }
    const bfs = await count('.ga-bf');
    if (bfs < 6) return `only ${bfs} butterflies for 6 flowers`;
    for (let i = 0; i < 8; i++) { const n = await count('.ga-bf'); if (!n) break; await ev(`(() => { const e = document.querySelector('.ga-bf'); if (e) e.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); })()`); await sleep(400); }
    return (await star()) ? 'ok' : 'no star after planting 6 and catching all';
  },
  async party() {
    // fill the bag by playing a flower + cupcake first is covered by the other robots: here the party is checked with an EMPTY bag (it must explain and offer the way)
    const go = await count('.pa-go');
    if (go < 1) return 'empty bag: no "go make it" button';
    await hit('.pa-go', 0, 2000);
    return (await text('.gk-top .gk-title')) ? 'ok (empty bag shows the way to a level)' : 'go button did nothing';
  },
  async partyfull() {
    await S('Page.navigate', { url: 'http://localhost:8099/girls_world/index.html' }); await sleep(3200);
    await ev(`window.crStart({ lang: 'ar', age: 3, gender: 'girl', save: { stars: {}, bag: { flowers: [4, 4, 4, 4, 4, 4], cupcakes: 9, looks: 3, hairdos: 3, friends: { baby: 2, kitten: 2, bunny: 2, puppy: 2 }, parties: 0 } } }); 1`); await sleep(2500);
    await click('.gw-door', 5); await sleep(2500);
    const t0 = await text('.pa-bag h4');
    for (let r = 0; r < 3; r++) {
      for (let i = 0; i < 8; i++) { await hit('.pa-vases .pa-slot', 0, 200); await hit('.pa-table .pa-slot', 0, 200); }
      for (let i = 0; i < 6; i++) await hit('.pa-guests .pa-slot', 0, 200);
      await hit('.pa-item', 11, 250); await hit('.pa-item', 12, 250);
      if (!(await exists('.pa-start button'))) return `party ${r + 1}: the Start button did not appear (${await text('.pa-bag h4')})`;
      await hit('.pa-start button', 0, 3200);
      if (!(await star())) return `party ${r + 1}: no star`;
      await hit('.gk-btn.go', 0, 800);
    }
    return `ok, three parties thrown (bag at start: ${t0})`;
  },
};
for (const lv of Object.keys(levels)) {
  if (only && !only.split(',').includes(lv)) continue;
  errors.length = 0;
  await open(lv);
  const t0 = Date.now();
  let res; try { res = await levels[lv](); } catch (e) { res = 'robot error ' + e.message; }
  report.push(`${lv.padEnd(8)} ${size}  ${res}  (${Math.round((Date.now() - t0) / 1000)}s)${errors.length ? '  JS ERRORS: ' + errors.slice(0, 2).join(' | ') : ''}`);
  console.log(report.at(-1));
}
chrome.kill(); process.exit(0);
