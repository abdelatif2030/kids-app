// Turns a video of a character on a plain GREEN background into a transparent sprite-sheet animation for the games.
//   node tools/clips/make_clip.mjs <video.mp4> <boy|girl|owl> <jump|laugh|clap|wave|walk|idle> [--key 00ff00] [--sim 0.30] [--fps 12] [--secs 4]
// Output: assets/games/clips/<character>_<name>.webp (lossless, all frames in one picture) and an entry in assets/games/clips/clips.json.
// Everything runs on this computer (ffmpeg + node); nothing is uploaded.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, '../../assets/games/clips');
const [, , input, who, name, ...rest] = process.argv;
if (!input || !who || !name) { console.error('usage: node make_clip.mjs <video> <boy|girl|owl> <jump|laugh|clap|wave|walk|idle> [--key 00ff00] [--sim 0.30] [--fps 12] [--secs 4]'); process.exit(1); }
const opt = (k, d) => { const i = rest.indexOf('--' + k); return i >= 0 ? rest[i + 1] : d; };
const KEY = opt('key', '00ff00'), SIM = opt('sim', '0.30'), FPS = +opt('fps', 12), SECS = +opt('secs', 4);

function frames(height) {
  // key out the green, remove the green glow left on the edges, raw RGBA frames
  const vf = `fps=${FPS},scale=-2:${height},format=rgba,chromakey=0x${KEY}:${SIM}:0.12,despill=type=green:mix=0.6:expand=0.2,format=rgba`;
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', '-t', String(SECS), '-i', input, '-vf', vf, '-f', 'rawvideo', '-pix_fmt', 'rgba', '-'], { maxBuffer: 1 << 30 });
  if (r.status !== 0) { console.error(String(r.stderr)); process.exit(1); }
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', input]);
  const [sw, sh] = String(probe.stdout).trim().split('x').map(Number);
  const w = Math.round((sw * height) / sh / 2) * 2;
  const buf = r.stdout; const size = w * height * 4;
  return { w, h: height, n: Math.floor(buf.length / size), buf };
}

let height = 480, fr;
for (;;) {
  fr = frames(height);
  // bounding box of everything visible in any frame
  let x0 = fr.w, y0 = fr.h, x1 = 0, y1 = 0;
  for (let f = 0; f < fr.n; f++) {
    const base = f * fr.w * fr.h * 4;
    for (let y = 0; y < fr.h; y++) for (let x = 0; x < fr.w; x++) {
      if (fr.buf[base + (y * fr.w + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    }
  }
  if (x1 <= x0) { console.error('nothing left after removing the green: check the background colour (--key) or similarity (--sim)'); process.exit(1); }
  const m = 4;
  x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m); x1 = Math.min(fr.w - 1, x1 + m); y1 = Math.min(fr.h - 1, y1 + m);
  let cw = x1 - x0 + 1, ch = y1 - y0 + 1; cw += cw % 2; ch += ch % 2;
  const cols = Math.max(1, Math.floor(4096 / cw)), rows = Math.ceil(fr.n / cols);
  if (rows * ch > 4096 && height > 160) { height = Math.round(height * 0.85); continue; }
  const AW = cols * cw, AH = rows * ch;
  const atlas = Buffer.alloc(AW * AH * 4);
  for (let f = 0; f < fr.n; f++) {
    const ox = (f % cols) * cw, oy = Math.floor(f / cols) * ch, base = f * fr.w * fr.h * 4;
    for (let y = 0; y < ch; y++) {
      const sy = y0 + y; if (sy >= fr.h) break;
      const srcStart = base + (sy * fr.w + x0) * 4;
      fr.buf.copy(atlas, ((oy + y) * AW + ox) * 4, srcStart, srcStart + Math.min(cw, fr.w - x0) * 4);
    }
  }
  fs.mkdirSync(OUT, { recursive: true });
  const tmp = path.join(os.tmpdir(), `atlas_${process.pid}.rgba`);
  fs.writeFileSync(tmp, atlas);
  const file = path.join(OUT, `${who}_${name}.webp`);
  const e = spawnSync('ffmpeg', ['-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${AW}x${AH}`, '-i', tmp, '-c:v', 'libwebp', '-lossless', '1', '-compression_level', '6', file]);
  fs.rmSync(tmp, { force: true });
  if (e.status !== 0) { console.error(String(e.stderr)); process.exit(1); }
  const jsonFile = path.join(OUT, 'clips.json');
  const all = fs.existsSync(jsonFile) ? JSON.parse(fs.readFileSync(jsonFile, 'utf8')) : {};
  all[`${who}_${name}`] = { file: `${who}_${name}.webp`, frames: fr.n, cols, rows, w: cw, h: ch, fps: FPS, loop: name === 'walk' || name === 'idle', feetY: y1 / fr.h };
  fs.writeFileSync(jsonFile, JSON.stringify(all, null, 1));
  console.log(`${who}_${name}: ${fr.n} frames, ${cw}x${ch} each, atlas ${AW}x${AH}, ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
  break;
}
