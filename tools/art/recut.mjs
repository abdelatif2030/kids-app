// Re-cuts every picture listed in cut_art.sh, and makes each cut COMPLETE: if the picture touches the edge of its crop box (so a piece
// of it is cut off), the box is grown on that side and the cut is repeated. Neighbours caught by the box are dropped by matte.mjs.
//   node tools/art/recut.mjs <folder with 19.webp 20.webp 22.webp> [name ...]      (no names = all)
// Writes assets/games/art/<name>.webp (lossless, 2x) and the sizes in game_src/learn_games/src/kit/art_dims.json.
// Prints one line per picture: "ok", "grown (...)" or "STILL CUT (...)": a picture that is still cut off should not be used.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '../..');
const I = process.argv[2];
const only = new Set(process.argv.slice(3));
const script = fs.readFileSync(path.join(HERE, 'cut_art.sh'), 'utf8');
const specs = [];
for (const m of script.matchAll(/\b(cutw|cut)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+([a-z0-9_]+)(?:\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+))?/g)) {
  specs.push({ white: m[1] === 'cutw', sheet: m[2], w: +m[3], h: +m[4], x: +m[5], y: +m[6], name: m[7], erase: m[8] ? m.slice(8, 12).map(Number) : null });
}
const size = {};
for (const s of new Set(specs.map((q) => q.sheet))) {
  const r = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', path.join(I, `${s}.webp`)]);
  size[s] = String(r.stdout).trim().split('x').map(Number);
}
const OUT = path.join(ROOT, 'assets/games/art');
const DIMS = path.join(ROOT, 'game_src/learn_games/src/kit/art_dims.json');
const dims = JSON.parse(fs.readFileSync(DIMS, 'utf8'));
const GROW = 10;
// pictures that touch a neighbour on the sheet: growing the box would swallow the neighbour, so they keep their box (the neighbour's
// pieces are dropped by matte.mjs) - checked by eye
const FIXED = new Set(['elephant', 'lion', 'boy_idle', 'pump_f', 'scarecrow_f', 'crate_apple', 'crate_carrot', 'crate_corn']);

function once(q, box) {
  const filt = `format=rgba,crop=${box.w}:${box.h}:${box.x}:${box.y}` + (q.erase ? `,drawbox=x=${q.erase[0] + q.x - box.x}:y=${q.erase[1] + q.y - box.y}:w=${q.erase[2]}:h=${q.erase[3]}:color=white:t=fill` : '');
  const raw = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', path.join(I, `${q.sheet}.webp`), '-vf', filt, '-f', 'rawvideo', '-pix_fmt', 'rgba', '-'], { maxBuffer: 1 << 28 });
  const args = [path.join(HERE, 'matte.mjs'), String(box.w), String(box.h)].concat(q.white ? ['246', '10'] : []);
  const m = spawnSync('node', args, { input: raw.stdout, maxBuffer: 1 << 28, env: { ...process.env, MATTE_REPORT: '1' } });
  let rep = {};
  try { rep = JSON.parse(String(m.stderr).trim().split('\n').pop()); } catch { /* no report */ }
  return { rgba: m.stdout, rep };
}

for (const q of specs) {
  if (only.size && !only.has(q.name)) continue;
  const [SW, SH] = size[q.sheet];
  let box = { x: q.x, y: q.y, w: q.w, h: q.h };
  let res, grown = [];
  for (let k = 0; k < 8; k++) {
    res = once(q, box);
    const r = res.rep;
    if (FIXED.has(q.name) || /^[a-z]_/.test(q.name) || !(r.left || r.top || r.right || r.bottom)) break;
    let moved = false;
    if (r.left && box.x > 0) { const d = Math.min(GROW, box.x); box.x -= d; box.w += d; moved = true; grown.push('L'); }
    if (r.top && box.y > 0) { const d = Math.min(GROW, box.y); box.y -= d; box.h += d; moved = true; grown.push('T'); }
    if (r.right && box.x + box.w < SW) { box.w += Math.min(GROW, SW - box.x - box.w); moved = true; grown.push('R'); }
    if (r.bottom && box.y + box.h < SH) { box.h += Math.min(GROW, SH - box.y - box.h); moved = true; grown.push('B'); }
    if (!moved) break;
  }
  const r = res.rep;
  const still = ['left', 'top', 'right', 'bottom'].filter((s) => r[s]);
  const tmp = path.join(os.tmpdir(), `recut_${process.pid}.rgba`);
  fs.writeFileSync(tmp, res.rgba);
  const png = path.join(os.tmpdir(), `recut_${process.pid}.png`);
  spawnSync('ffmpeg', ['-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${box.w}x${box.h}`, '-i', tmp, '-vf', 'scale=iw*2:ih*2:flags=lanczos', png]);
  const dest = path.join(OUT, `${q.name}.webp`);
  spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', png, '-c:v', 'libwebp', '-lossless', '1', '-compression_level', '6', dest]);
  dims[q.name] = [box.w * 2, box.h * 2];
  console.log(`${q.name.padEnd(16)} ${still.length ? 'STILL CUT (' + still.join(',') + ')' : grown.length ? 'grown ' + grown.join('') : 'ok'}`);
}
fs.writeFileSync(DIMS, JSON.stringify(dims));
