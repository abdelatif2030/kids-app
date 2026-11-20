// Loads every web game in headless Chrome (844x390), waits ~9 s of virtual time, takes a screenshot.
// Run: node game_src/_smoke_all.mjs [outDir] [game1,game2]   (needs python -m http.server 8099 in assets/games)
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'C:\\dev\\rehlaty';
const OUT = path.resolve(process.argv[2] || 'build/smoke');
fs.mkdirSync(OUT, { recursive: true });
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const dirs = fs.readdirSync(path.join(ROOT, 'assets', 'games'), { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'assets', 'games', d.name, 'index.html'))).map((d) => d.name);
const only = process.argv[3] ? process.argv[3].split(',') : dirs;
const res = [];
for (const d of only) {
  const png = path.join(OUT, `${d}.png`);
  if (fs.existsSync(png)) fs.unlinkSync(png);
  const r = spawnSync(chrome, ['--headless=new', `--user-data-dir=${path.join(ROOT, 'build', 'chrome_profile')}`, '--no-first-run', '--disable-gpu', '--window-size=844,390', '--virtual-time-budget=9000', `--screenshot=${png}`, `http://localhost:8099/${d}/index.html`], { encoding: 'utf8', timeout: 90000 });
  const ok = fs.existsSync(png) && fs.statSync(png).size > 4000;
  res.push({ d, ok, size: ok ? fs.statSync(png).size : 0 });
  console.log(ok ? 'ok  ' : 'FAIL', d, ok ? fs.statSync(png).size : ((r.stderr || '').split('\n').filter((l) => !/external_registry/.test(l))[0] || 'timeout').slice(0, 120));
}
fs.writeFileSync(path.join(OUT, 'result.json'), JSON.stringify(res, null, 1));
