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
let OUT = path.join(HERE, '../../assets/games/clips');
const [, , input, who, name, ...rest] = process.argv;
if (!input || !who || !name) { console.error('usage: node make_clip.mjs <video> <boy|girl|owl> <jump|laugh|clap|wave|walk|idle> [--key 00ff00] [--sim 0.30] [--fps 12] [--secs 4] [--start 0] [--height 720]'); process.exit(1); }
const opt = (k, d) => { const i = rest.indexOf('--' + k); return i >= 0 ? rest[i + 1] : d; };
const KEY = opt('key', '00ff00'), SIM = opt('sim', '0.30'), FPS = +opt('fps', 12), SECS = +opt('secs', 4), START = +opt('start', 0), HEIGHT = +opt('height', 720), STAND = +opt('stand', 0.70); // STAND = how tall the standing character is, as a fraction of the video height (same for every clip of a character)

// Green removal by 'how much greener than red and blue' (not by colour distance), so yellow clothes and skin stay solid.
// Soft edge between LO and HI, and the green glow left on edge pixels is removed (green is capped at the red/blue level).
const LO = +opt('lo', 22), HI = +opt('hi', 70);
// --roi x,y,w,h (fractions of the frame): only this part of the frame is used (the rest is cut away before processing).
// Use it when the character stands in the middle of a big green frame and you only want the character.
const ROI = opt('roi', '').split(',').map(Number);
if (opt('out', '')) OUT = path.resolve(opt('out', ''));
function keyGreen(buf) {
  for (let i = 0; i < buf.length; i += 4) {
    const r = buf[i], g = buf[i + 1], b = buf[i + 2];
    const m = r > b ? r : b;
    const d = g - m;
    if (d <= LO) { if (d > 0) buf[i + 1] = m; continue; }
    const t = d >= HI ? 1 : (d - LO) / (HI - LO);
    buf[i + 3] = Math.round(255 * (1 - t * t * (3 - 2 * t)));
    buf[i + 1] = m;
  }
}

function frames(height) {
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', input]);
  const [sw, sh] = String(probe.stdout).trim().split('x').map(Number);
  const w0 = Math.round((sw * height) / sh / 2) * 2;
  // --roi: cut the wanted part of the frame out first (also keeps memory small)
  let w = w0, h = height, cropF = '';
  if (ROI.length === 4 && ROI.every(Number.isFinite)) {
    w = Math.floor((w0 * ROI[2]) / 2) * 2; h = Math.floor((height * ROI[3]) / 2) * 2;
    cropF = `,crop=${w}:${h}:${Math.floor(w0 * ROI[0])}:${Math.floor(height * ROI[1])}`;
  }
  const vf = `fps=${FPS},scale=${w0}:${height}${cropF},format=rgba`;
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', '-ss', String(START), '-t', String(SECS), '-i', input, '-vf', vf, '-f', 'rawvideo', '-pix_fmt', 'rgba', '-'], { maxBuffer: 1 << 30 });
  if (r.status !== 0) { console.error(String(r.stderr)); process.exit(1); }
  const buf = r.stdout; const size = w * h * 4;
  keyGreen(buf);
  return { w, h, n: Math.floor(buf.length / size), buf };
}

let height = HEIGHT, fr;
for (;;) {
  fr = frames(height);
  if (name === 'idle') fr.n = Math.min(fr.n, 1); // a standing pose is one picture
  // bounding box of everything visible in any frame
  let x0 = fr.w, y0 = fr.h, x1 = 0, y1 = 0;
  const tops = [], bottoms = [];
  for (let f = 0; f < fr.n; f++) {
    const base = f * fr.w * fr.h * 4;
    let ft = fr.h, fb = 0;
    for (let y = 0; y < fr.h; y++) for (let x = 0; x < fr.w; x++) {
      if (fr.buf[base + (y * fr.w + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; if (y < ft) ft = y; if (y > fb) fb = y; }
    }
    tops.push(ft); bottoms.push(fb);
  }
  const med = (a) => [...a].sort((p, q) => p - q)[Math.floor(a.length / 2)];
  const medH = med(bottoms.map((b, i) => b - tops[i])), medBottom = med(bottoms);
  if (x1 <= x0) { console.error('nothing left after removing the green: check the background colour (--key) or similarity (--sim)'); process.exit(1); }
  const m = 4;
  x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m); x1 = Math.min(fr.w - 1, x1 + m); y1 = Math.min(fr.h - 1, y1 + m);
  let cw = x1 - x0 + 1, ch = y1 - y0 + 1; cw += cw % 2; ch += ch % 2;
  const cols = Math.max(1, Math.min(fr.n, Math.floor(4096 / cw))), rows = Math.ceil(fr.n / cols);
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
  const e = spawnSync('ffmpeg', ['-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${AW}x${AH}`, '-i', tmp, ...(rest.includes('--lossy') ? ['-c:v', 'libwebp', '-lossless', '0', '-quality', '82', '-compression_level', '2'] : ['-c:v', 'libwebp', '-lossless', '1', '-compression_level', '2']), file]);
  fs.rmSync(tmp, { force: true });
  if (e.status !== 0) { console.error(String(e.stderr)); process.exit(1); }
  const jsonFile = path.join(OUT, 'clips.json');
  const all = fs.existsSync(jsonFile) ? JSON.parse(fs.readFileSync(jsonFile, 'utf8')) : {};
  all[`${who}_${name}`] = { file: `${who}_${name}.webp`, frames: fr.n, cols, rows, w: cw, h: ch, fps: FPS, loop: name === 'walk' || name === 'idle', px: Math.round(height * STAND), ground: medBottom - y0 + 4 };
  fs.writeFileSync(jsonFile, JSON.stringify(all, null, 1));
  console.log(`(measured standing height: ${(medH / height).toFixed(3)} of the video height)`);
  console.log(`${who}_${name}: ${fr.n} frames, ${cw}x${ch} each, atlas ${AW}x${AH}, ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
  break;
}
