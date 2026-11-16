// Takes raw RGBA pixels of a crop from a reference sheet (white paper background) on stdin and writes raw RGBA with a clean
// transparent background on stdout:  node matte.mjs <width> <height>
// Only the paper that is CONNECTED to the edge of the crop becomes transparent (a flood fill), so white fur, white eyes and
// white clothes inside the picture stay solid. The soft edge gets a partial alpha, and the white of the paper is removed
// from the colour of those edge pixels (no white or green halo).
import { readFileSync } from 'node:fs';

const W = Number(process.argv[2]);
const H = Number(process.argv[3]);
const buf = Buffer.from(readFileSync(0));
if (buf.length !== W * H * 4) { console.error(`expected ${W * H * 4} bytes, got ${buf.length}`); process.exit(1); }

// optional 3rd and 4th arguments: how bright (default 226) and how colourless (default 26) paper must be; use e.g. 247 and 9 for a white animal
// (cow, sheep) so white fur next to the paper is not eaten away.
const PAPER_MIN = Number(process.argv[4] || 226), PAPER_CHROMA = Number(process.argv[5] || 26);
// "paper": bright and almost colourless (the sheets also have a faint grey shadow under the feet)
const isPaper = (i) => {
  const r = buf[i], g = buf[i + 1], b = buf[i + 2];
  const mn = Math.min(r, g, b), mx = Math.max(r, g, b);
  return mn >= PAPER_MIN && mx - mn <= PAPER_CHROMA;
};
const bg = new Uint8Array(W * H);
const stack = [];
const push = (x, y) => { if (x < 0 || y < 0 || x >= W || y >= H) return; const p = y * W + x; if (bg[p] || !isPaper(p * 4)) return; bg[p] = 1; stack.push(p); };
for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
while (stack.length) {
  const p = stack.pop(), x = p % W, y = (p / W) | 0;
  push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
}
// keep the picture itself: the largest piece (plus detached bits that lie inside its box, like a floating star); the
// edges of NEIGHBOURING pictures that the crop box caught are dropped
const comp = new Int32Array(W * H).fill(-1);
const comps = [];
for (let p0 = 0; p0 < W * H; p0++) {
  if (bg[p0] || comp[p0] >= 0) continue;
  const id = comps.length;
  const c = { area: 0, x0: W, y0: H, x1: 0, y1: 0 };
  const st = [p0];
  comp[p0] = id;
  while (st.length) {
    const p = st.pop(), x = p % W, y = (p / W) | 0;
    c.area++; c.x0 = Math.min(c.x0, x); c.x1 = Math.max(c.x1, x); c.y0 = Math.min(c.y0, y); c.y1 = Math.max(c.y1, y);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy; if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue; const q = ny * W + nx; if (!bg[q] && comp[q] < 0) { comp[q] = id; st.push(q); } }
  }
  comps.push(c);
}
let main = 0;
comps.forEach((c, i) => { if (c.area > comps[main].area) main = i; });
const M = comps[main];
// a piece that touches the border of the crop and is not the picture itself is a NEIGHBOUR cut off by the crop box: dropped
const touches = (c) => c.x0 === 0 || c.y0 === 0 || c.x1 === W - 1 || c.y1 === H - 1;
const keep = comps.map((c, i) => i === main || (!touches(c) && c.area > M.area * 0.02 && c.x0 >= M.x0 - 4 && c.x1 <= M.x1 + 4 && c.y0 >= M.y0 - 4 && c.y1 <= M.y1 + 4));
for (let p0 = 0; p0 < W * H; p0++) if (!bg[p0] && comp[p0] >= 0 && !keep[comp[p0]]) bg[p0] = 1;
const out = Buffer.alloc(W * H * 4);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = y * W + x, i = p * 4;
    if (bg[p]) continue; // transparent black
    // is this pixel next to the removed paper? then it is an edge: soft alpha and no white in its colour
    let edge = false;
    for (let dy = -1; dy <= 1 && !edge; dy++) for (let dx = -1; dx <= 1; dx++) { const nx = x + dx, ny = y + dy; if (nx >= 0 && ny >= 0 && nx < W && ny < H && bg[ny * W + nx]) { edge = true; break; } }
    let r = buf[i], g = buf[i + 1], b = buf[i + 2], a = 255;
    if (edge) {
      const mn = Math.min(r, g, b);
      a = Math.max(60, Math.min(255, Math.round(((255 - mn) / (255 - 200)) * 255)));
      const k = a / 255;
      r = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - k)) / k)));
      g = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - k)) / k)));
      b = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - k)) / k)));
    }
    out[i] = r; out[i + 1] = g; out[i + 2] = b; out[i + 3] = a;
  }
}
if (process.env.MATTE_REPORT) console.error(JSON.stringify({ left: M.x0 === 0, top: M.y0 === 0, right: M.x1 === W - 1, bottom: M.y1 === H - 1 }));
process.stdout.write(out);
