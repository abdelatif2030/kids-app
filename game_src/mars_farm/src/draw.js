// Mars Farm isometric renderer: everything is drawn in code on a 2D canvas.
import { GRID, REGIONS, CROPS, regionOf, HQ, GOODS } from './sim.js';
import { EMOJI } from './i18n.js';

export const sp = (G, gx, gy, z = 0) => [G.cw / 2 + ((gx - gy) * 32 - G.cam.x) * G.cam.s, G.vy + ((gx + gy) * 16 - z - G.cam.y) * G.cam.s];
const hash = (x, y) => (((x * 374761393 + y * 668265263) ^ (x * y * 2147483647 + 99)) >>> 0);
const TALL = { home: 1, bakery: 1, dairy: 1, juicer: 1, hq: 1, spaceport: 1 };
export const isTall = (k) => !!TALL[k];

function poly(G, pts, fill, stroke) {
  const g = G.g;
  g.beginPath();
  pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
  g.closePath();
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (stroke) { g.strokeStyle = stroke; g.lineWidth = Math.max(1, G.cam.s); g.stroke(); }
}
const diamond = (G, x, y, w, h, z, fill, stroke) => poly(G, [sp(G, x, y, z), sp(G, x + w, y, z), sp(G, x + w, y + h, z), sp(G, x, y + h, z)], fill, stroke);
const EDGE = 'rgba(50,10,30,.35)';
function cube(G, x, y, w, h, z0, z1, top, l, r) {
  poly(G, [sp(G, x, y + h, z0), sp(G, x + w, y + h, z0), sp(G, x + w, y + h, z1), sp(G, x, y + h, z1)], l, EDGE);
  poly(G, [sp(G, x + w, y + h, z0), sp(G, x + w, y, z0), sp(G, x + w, y, z1), sp(G, x + w, y + h, z1)], r, EDGE);
  poly(G, [sp(G, x, y, z1), sp(G, x + w, y, z1), sp(G, x + w, y + h, z1), sp(G, x, y + h, z1)], top, EDGE);
}
const faceL = (G, x, y, h, u0, u1, z0, z1, fill) => poly(G, [sp(G, x + u0, y + h, z0), sp(G, x + u1, y + h, z0), sp(G, x + u1, y + h, z1), sp(G, x + u0, y + h, z1)], fill);
const faceR = (G, x, y, w, v0, v1, z0, z1, fill) => poly(G, [sp(G, x + w, y + v0, z0), sp(G, x + w, y + v1, z0), sp(G, x + w, y + v1, z1), sp(G, x + w, y + v0, z1)], fill);
function ell(G, cx, cy, rx, ry, fill, stroke, a0 = 0, a1 = 6.2832) {
  const g = G.g; g.beginPath(); g.ellipse(cx, cy, Math.max(0.1, rx), Math.max(0.1, ry), 0, a0, a1);
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (stroke) { g.strokeStyle = stroke; g.lineWidth = Math.max(1, G.cam.s); g.stroke(); }
}
const shadow = (G, x, y, w, h) => diamond(G, x + 0.1, y + 0.12, w, h, 0, 'rgba(50,10,40,.28)');

// ---------- sky and island ----------
function drawSky(G) {
  const g = G.g; const W = G.cw; const H = G.ch;
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, '#1d1450'); gr.addColorStop(0.5, '#7b3a90'); gr.addColorStop(0.85, '#ff8f6e'); gr.addColorStop(1, '#ffc27a');
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 70; i++) {
    const x = (hash(i, 3) % 1000) / 1000 * W; const y = (hash(i, 9) % 1000) / 1000 * H * 0.55;
    g.globalAlpha = 0.4 + 0.5 * Math.abs(Math.sin(G.clock * 1.3 + i));
    g.fillStyle = '#fff'; g.fillRect(x, y, 1.5 + (i % 3) * 0.6, 1.5 + (i % 3) * 0.6);
  }
  g.globalAlpha = 1;
  const u = G.u;
  // a blue planet with a ring and a small moon
  const px = W * 0.82 - G.cam.x * 0.02; const py = H * 0.13;
  ell(G, px, py, u * 7, u * 7, '#4fa8ff'); ell(G, px - u * 2, py - u * 2, u * 3, u * 2, 'rgba(255,255,255,.35)');
  ell(G, px + u * 2.5, py + u * 2.5, u * 3.5, u * 3, 'rgba(20,50,140,.35)');
  ell(G, W * 0.15, H * 0.2, u * 2.2, u * 2.2, '#d9c7b8'); ell(G, W * 0.15 + u * 0.6, H * 0.2 - u * 0.4, u * 0.7, u * 0.7, '#b8a898');
  // far dunes
  for (let k = 0; k < 2; k++) {
    g.fillStyle = k ? '#c9505a' : '#a8405e';
    g.beginPath(); g.moveTo(0, H);
    for (let x = 0; x <= W + 20; x += 20) g.lineTo(x, H * (0.88 - k * 0.04) - Math.sin(x * 0.01 + k * 2 - G.cam.x * 0.002) * u * 3 - Math.sin(x * 0.027 + k) * u * 1.5);
    g.lineTo(W, H); g.closePath(); g.fill();
  }
  // drifting dust
  g.fillStyle = 'rgba(255,220,190,.10)';
  for (let i = 0; i < 6; i++) { const x = ((i * 233 + G.clock * (6 + i * 2)) % (W + 200)) - 100; ell(G, x, H * (0.62 + (i % 3) * 0.1), u * 18, u * 2.5, 'rgba(255,215,190,.10)'); }
}

function drawSlab(G) {
  const P = (x, y, z) => sp(G, x, y, z);
  const n = GRID;
  poly(G, [P(0, n, 0), P(n, n, 0), P(n, 0, 0), P(n / 2, n / 2, -150)], '#4a1c34');
  poly(G, [P(0, n, 0), P(n, n, 0), P(n / 2, n / 2, -150)], '#6e2a3c');
  poly(G, [P(n, n, 0), P(n, 0, 0), P(n / 2, n / 2, -150)], '#852f3c');
  poly(G, [P(0, n, 0), P(n, n, 0), P(n, n, 22), P(0, n, 22)], '#8a3322');
  poly(G, [P(n, n, 0), P(n, 0, 0), P(n, 0, 22), P(n, n, 22)], '#a64229');
}

function drawGround(G) {
  const c = G.c; const s = G.cam.s;
  for (let d = 0; d < GRID * 2 - 1; d++) {
    for (let y = 0; y < GRID; y++) {
      const x = d - y; if (x < 0 || x >= GRID) continue;
      const open = c.regions[regionOf(x, y)];
      const h = hash(x, y);
      let col;
      if (open) col = (x + y) % 2 ? '#e2794b' : '#da7045';
      else col = (x + y) % 2 ? '#b5897e' : '#ad8176';
      if (open && h % 5 === 0) col = '#e8845a';
      diamond(G, x, y, 1, 1, 0, col, open ? 'rgba(120,40,20,.22)' : 'rgba(70,40,50,.25)');
      if (!open) {
        diamond(G, x, y, 1, 1, 0, 'rgba(50,25,60,.22)');
        if (h % 3 === 0) { const [cx, cy] = sp(G, x + 0.5, y + 0.5, 0); ell(G, cx, cy - 3 * s, 10 * s, 6 * s, '#8c6a68'); ell(G, cx - 2 * s, cy - 6 * s, 7 * s, 4 * s, '#a58583'); }
        else if (h % 7 === 1) { const [cx, cy] = sp(G, x + 0.5, y + 0.5, 0); ell(G, cx, cy, 14 * s, 7 * s, 'rgba(60,30,40,.35)'); ell(G, cx, cy - s, 11 * s, 5 * s, 'rgba(0,0,0,.12)'); }
      } else if (h % 11 === 0 && !c.bldAt(x, y)) {
        const [cx, cy] = sp(G, x + 0.5, y + 0.5, 0); ell(G, cx, cy, 3 * s, 1.5 * s, '#b85a38');
      }
    }
  }
}

// ---------- plants ----------
function wheat(G, x, y, gr, sway) {
  const g = G.g; const s = G.cam.s;
  if (gr < 0.3) { g.strokeStyle = '#6dc84a'; g.lineWidth = 1.6 * s; g.beginPath(); g.moveTo(x, y); g.lineTo(x - 2 * s, y - 5 * s); g.moveTo(x, y); g.lineTo(x + 2 * s, y - 5 * s); g.stroke(); return; }
  const hh = (6 + 16 * gr) * s; const ripe = gr >= 1;
  g.strokeStyle = ripe ? '#d8b43a' : '#8ad04a'; g.lineWidth = 1.6 * s;
  g.beginPath(); g.moveTo(x, y); g.lineTo(x + sway, y - hh); g.stroke();
  ell(G, x + sway, y - hh, 2.4 * s, 4.6 * s, ripe ? '#ffd84a' : '#b8e060', '#a8841e');
  if (gr > 0.6) { g.strokeStyle = ripe ? '#e8b830' : '#8ad04a'; g.beginPath(); g.moveTo(x, y - hh * 0.4); g.lineTo(x - 4 * s, y - hh * 0.8); g.stroke(); }
}
function carrot(G, x, y, gr) {
  const g = G.g; const s = G.cam.s; const ripe = gr >= 1;
  g.strokeStyle = '#4cc060'; g.lineWidth = 1.7 * s;
  const hh = (4 + 8 * gr) * s;
  g.beginPath(); g.moveTo(x, y); g.lineTo(x - 4 * s, y - hh); g.moveTo(x, y); g.lineTo(x, y - hh * 1.2); g.moveTo(x, y); g.lineTo(x + 4 * s, y - hh); g.stroke();
  if (gr > 0.5) ell(G, x, y + s, (2 + 2 * gr) * s, (1.5 + 1.2 * gr) * s, ripe ? '#ff8a1e' : '#e8a050');
}
function corn(G, x, y, gr, sway) {
  const g = G.g; const s = G.cam.s; const ripe = gr >= 1; const hh = (8 + 24 * gr) * s;
  g.strokeStyle = '#4faa3a'; g.lineWidth = 2.6 * s; g.beginPath(); g.moveTo(x, y); g.lineTo(x + sway * 0.6, y - hh); g.stroke();
  g.strokeStyle = '#6cc84a'; g.lineWidth = 1.8 * s;
  g.beginPath(); g.moveTo(x, y - hh * 0.4); g.lineTo(x - 7 * s, y - hh * 0.65); g.moveTo(x, y - hh * 0.55); g.lineTo(x + 7 * s, y - hh * 0.8); g.stroke();
  if (gr > 0.7) { ell(G, x + 2 * s, y - hh * 0.55, 2.6 * s, 5 * s, ripe ? '#ffd23a' : '#d8e070', '#8a7a1a'); }
}
const SPOT = [[0.3, 0.3], [0.7, 0.3], [0.3, 0.7], [0.7, 0.7]];
function drawField(G, b) {
  diamond(G, b.x + 0.05, b.y + 0.05, 0.9, 0.9, 0, '#7e3d28', '#5a2a1c');
  const g = G.g;
  g.strokeStyle = 'rgba(70,25,15,.55)'; g.lineWidth = G.cam.s;
  for (const v of [0.3, 0.7]) { const a = sp(G, b.x + 0.1, b.y + v, 0); const z = sp(G, b.x + 0.9, b.y + v, 0); g.beginPath(); g.moveTo(...a); g.lineTo(...z); g.stroke(); }
  if (!b.crop) return;
  const gr = Math.min(1, b.t / CROPS[b.crop].time);
  SPOT.forEach(([u, v], i) => {
    const [px, py] = sp(G, b.x + u, b.y + v, 0);
    const sway = Math.sin(G.clock * 2 + i + b.x) * 1.5 * G.cam.s * (gr >= 1 ? 1.6 : 0.6);
    if (b.crop === 'wheat') wheat(G, px, py, gr, sway); else if (b.crop === 'carrot') carrot(G, px, py, gr); else corn(G, px, py, gr, sway);
  });
  if (gr >= 1) bubble(G, b.x + 0.5, b.y + 0.5, 30, EMOJI[b.crop]);
}

function bubble(G, gx, gy, z, emoji) {
  const g = G.g; const s = G.cam.s;
  const [x, y0] = sp(G, gx, gy, z); const y = y0 - Math.abs(Math.sin(G.clock * 3 + gx)) * 4 * s;
  ell(G, x, y, 11 * s, 11 * s, 'rgba(255,255,255,.95)', '#a0527a');
  poly(G, [[x - 3 * s, y + 9 * s], [x + 3 * s, y + 9 * s], [x, y + 14 * s]], 'rgba(255,255,255,.95)');
  g.font = `${13 * s}px system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#000';
  g.fillText(emoji, x, y + s);
}

// ---------- pen and goats ----------
function goat(G, x, y, face, st, bob) {
  const s = G.cam.s; const g = G.g;
  g.save(); g.translate(x, y - bob); g.scale(face, 1);
  ell(G, 0, 1 * s, 7 * s, 2.4 * s, 'rgba(50,10,40,.25)');
  g.strokeStyle = '#6a5040'; g.lineWidth = 1.5 * s;
  for (const lx of [-4, -1.5, 2, 4.5]) { g.beginPath(); g.moveTo(lx * s, -3 * s); g.lineTo(lx * s, 0); g.stroke(); }
  ell(G, 0, -6 * s, 7 * s, 4.6 * s, '#f6efe4', '#a89888');
  ell(G, 6.4 * s, -10 * s, 3.2 * s, 3 * s, '#f6efe4', '#a89888');
  g.strokeStyle = '#8a6a50'; g.lineWidth = 1.2 * s; g.beginPath(); g.moveTo(5.6 * s, -12.4 * s); g.quadraticCurveTo(4 * s, -16 * s, 6 * s, -16 * s); g.moveTo(7.2 * s, -12.4 * s); g.quadraticCurveTo(8.4 * s, -16 * s, 10 * s, -15 * s); g.stroke();
  ell(G, 7.8 * s, -9.6 * s, 1.1 * s, 0.9 * s, '#e8a0a0');
  ell(G, 6.6 * s, -10.8 * s, 0.6 * s, 0.6 * s, '#222');
  g.strokeStyle = '#f6efe4'; g.lineWidth = 2 * s; g.beginPath(); g.moveTo(-6.5 * s, -7 * s); g.lineTo(-9 * s, -9 * s); g.stroke();
  if (st === 'milk') ell(G, 0, -7 * s, 2 * s, 1.4 * s, '#bfe8ff');
  g.restore();
}
function drawPen(G, b) {
  const s = G.cam.s;
  diamond(G, b.x + 0.02, b.y + 0.02, 0.96, 0.96, 0, '#cfa95a', '#9a7a3a');
  const post = (gx, gy) => { const a = sp(G, gx, gy, 0); const t = sp(G, gx, gy, 9); G.g.strokeStyle = '#8a5a30'; G.g.lineWidth = 2.4 * s; G.g.beginPath(); G.g.moveTo(...a); G.g.lineTo(...t); G.g.stroke(); };
  const rail = (x1, y1, x2, y2) => { for (const z of [4, 8]) { const a = sp(G, x1, y1, z); const t = sp(G, x2, y2, z); G.g.strokeStyle = '#b07a46'; G.g.lineWidth = 1.6 * s; G.g.beginPath(); G.g.moveTo(...a); G.g.lineTo(...t); G.g.stroke(); } };
  const x0 = b.x + 0.04; const y0 = b.y + 0.04; const x1 = b.x + 0.96; const y1 = b.y + 0.96;
  post(x0, y0); post(x1, y0); rail(x0, y0, x1, y0); rail(x0, y0, x0, y1);
  cube(G, b.x + 0.1, b.y + 0.1, 0.34, 0.34, 0, 11, '#e8884a', '#d8d8e8', '#aab0c8');
  b.goats.forEach((gt, i) => {
    const ang = G.clock * 0.6 + i * 2.1;
    const gx = b.x + 0.55 + Math.cos(ang) * 0.18 + (i - 1) * 0.12; const gy = b.y + 0.62 + Math.sin(ang * 1.3) * 0.14;
    const [px, py] = sp(G, gx, gy, 0);
    goat(G, px, py, Math.cos(ang) > 0 ? 1 : -1, gt.s, gt.s === 'eat' ? Math.abs(Math.sin(G.clock * 8)) * 1.2 * s : 0);
  });
  post(x0, y1); post(x1, y1); rail(x0, y1, x1, y1); rail(x1, y0, x1, y1);
  const milk = b.goats.some((x) => x.s === 'milk'); const hungry = b.goats.some((x) => x.s === 'hungry');
  if (milk) bubble(G, b.x + 0.5, b.y + 0.5, 30, '🥛'); else if (hungry && G.c.inv.wheat + G.c.inv.corn > 0) bubble(G, b.x + 0.5, b.y + 0.5, 30, EMOJI.wheat);
}

// ---------- factories, homes, HQ, spaceport ----------
function steam(G, x, y, working) {
  if (!working) return;
  const s = G.cam.s;
  for (let k = 0; k < 3; k++) { const t = (G.clock * 0.7 + k / 3) % 1; ell(G, x + Math.sin(t * 6 + k) * 3 * s, y - t * 22 * s, (3 + t * 5) * s, (3 + t * 5) * s, `rgba(255,255,255,${0.55 * (1 - t)})`); }
}
function progress(G, b, z, good) {
  if (!b.q) return;
  const [x, y] = sp(G, b.x + 0.5, b.y + 0.5, z); const s = G.cam.s; const w = 22 * s;
  G.g.fillStyle = 'rgba(0,0,0,.45)'; G.g.fillRect(x - w / 2, y, w, 4 * s);
  G.g.fillStyle = '#7af0b0'; G.g.fillRect(x - w / 2, y, w * Math.min(1, b.t / GOODS[good].time), 4 * s);
}
function drawFactory(G, b) {
  const s = G.cam.s; const g = G.g; const x = b.x; const y = b.y;
  shadow(G, x + 0.05, y + 0.05, 0.9, 0.9);
  const good = G.c.goodOf(b); const working = b.q > 0;
  const [cx, cy] = sp(G, x + 0.5, y + 0.5, 0);
  if (b.k === 'bakery') {
    cube(G, x + 0.1, y + 0.1, 0.8, 0.8, 0, 18, '#f0b070', '#d8844a', '#b8683a');
    cube(G, x + 0.04, y + 0.04, 0.92, 0.92, 18, 22, '#a04a30', '#8a3a28', '#70301f');
    faceL(G, x + 0.1, y + 0.1, 0.8, 0.12, 0.45, 2, 12, '#5a2a1a'); faceL(G, x + 0.1, y + 0.1, 0.8, 0.55, 0.78, 6, 14, working ? '#ffe28a' : '#9acbe8');
    cube(G, x + 0.65, y + 0.15, 0.16, 0.16, 22, 36, '#8a8a98', '#6a6a7a', '#555566');
    const [sx, sy] = sp(G, x + 0.73, y + 0.23, 36); steam(G, sx, sy, working);
    ell(G, cx - 6 * s, cy - 22 * s, 6 * s, 4 * s, '#f6d8a0', '#a06a30');
  } else if (b.k === 'dairy') {
    cube(G, x + 0.08, y + 0.08, 0.84, 0.84, 0, 6, '#9aa0b8', '#7a8098', '#666c84');
    ell(G, cx, cy - 8 * s, 16 * s, 7.5 * s, '#9eaac8');
    g.fillStyle = '#d8e2f4'; g.fillRect(cx - 16 * s, cy - 28 * s, 32 * s, 20 * s);
    g.fillStyle = '#b4c2e0'; g.fillRect(cx + 4 * s, cy - 28 * s, 12 * s, 20 * s);
    g.fillStyle = working ? '#ffe070' : '#7ab8e8'; g.fillRect(cx - 16 * s, cy - 20 * s, 32 * s, 5 * s);
    ell(G, cx, cy - 28 * s, 16 * s, 7.5 * s, '#eef4ff', '#9aa8c8');
    ell(G, cx - 4 * s, cy - 29 * s, 6 * s, 2.6 * s, '#ffd24a'); // a cheese wheel on top
    g.strokeStyle = '#8a98b8'; g.lineWidth = 2.6 * s; g.beginPath(); g.moveTo(cx + 15 * s, cy - 14 * s); g.lineTo(cx + 24 * s, cy - 6 * s); g.stroke();
    steam(G, cx, cy - 30 * s, working);
  } else {
    cube(G, x + 0.1, y + 0.1, 0.8, 0.8, 0, 6, '#f0a050', '#d88030', '#b86a28');
    for (const dx of [-12, 12]) { g.strokeStyle = '#8a5a20'; g.lineWidth = 2.4 * s; g.beginPath(); g.moveTo(cx + dx * s, cy - 4 * s); g.lineTo(cx + dx * 0.6 * s, cy - 14 * s); g.stroke(); }
    ell(G, cx, cy - 26 * s, 16 * s, 16 * s, '#ff9a2a', '#b8601a');
    ell(G, cx - 5 * s, cy - 31 * s, 5 * s, 4 * s, 'rgba(255,255,255,.5)');
    g.fillStyle = working ? '#ffe9a0' : '#ffd070'; g.fillRect(cx - 10 * s, cy - 28 * s, 20 * s, 6 * s);
    ell(G, cx, cy - 42 * s, 5 * s, 2.4 * s, '#8a5a20');
    g.strokeStyle = '#8a5a20'; g.lineWidth = 2.4 * s; g.beginPath(); g.moveTo(cx + 15 * s, cy - 20 * s); g.lineTo(cx + 26 * s, cy - 10 * s); g.stroke();
    steam(G, cx, cy - 44 * s, working);
  }
  progress(G, b, 4, good);
  if (b.out > 0) bubble(G, x + 0.5, y + 0.5, 46, EMOJI[good]);
}
function drawHome(G, b) {
  const s = G.cam.s; const g = G.g; const [cx, cy] = sp(G, b.x + 0.5, b.y + 0.5, 0);
  shadow(G, b.x + 0.05, b.y + 0.05, 0.9, 0.9);
  ell(G, cx, cy - 4 * s, 18 * s, 9 * s, '#c4cee8');
  g.fillStyle = '#e8eefc'; g.fillRect(cx - 18 * s, cy - 14 * s, 36 * s, 10 * s);
  ell(G, cx, cy - 14 * s, 18 * s, 9 * s, '#c4cee8');
  const gr = g.createLinearGradient(0, cy - 38 * s, 0, cy - 14 * s); gr.addColorStop(0, '#f2f8ff'); gr.addColorStop(1, '#8fc4ff');
  g.beginPath(); g.ellipse(cx, cy - 14 * s, 17 * s, 22 * s, 0, Math.PI, 0); g.closePath(); g.fillStyle = gr; g.fill(); g.strokeStyle = '#7a9ac8'; g.lineWidth = s; g.stroke();
  g.fillStyle = 'rgba(255,255,255,.55)'; g.beginPath(); g.ellipse(cx - 6 * s, cy - 26 * s, 3 * s, 7 * s, 0.5, 0, 6.3); g.fill();
  g.fillStyle = '#ffd86a'; g.fillRect(cx - 4 * s, cy - 22 * s, 8 * s, 8 * s); g.fillStyle = '#d88a2a'; g.fillRect(cx - 4 * s, cy - 22 * s, 8 * s, 2 * s);
  g.strokeStyle = '#8a8aa0'; g.lineWidth = 1.4 * s; g.beginPath(); g.moveTo(cx + 8 * s, cy - 34 * s); g.lineTo(cx + 8 * s, cy - 46 * s); g.stroke();
  ell(G, cx + 8 * s, cy - 47 * s, 2 * s, 2 * s, Math.sin(G.clock * 4 + b.x) > 0 ? '#ff5a5a' : '#8a2a2a');
}
function drawHQ(G, b) {
  const s = G.cam.s; const g = G.g;
  shadow(G, b.x, b.y, 2, 2);
  cube(G, b.x + 0.15, b.y + 0.15, 1.7, 1.7, 0, 16, '#e0d8f0', '#b8aed0', '#9a90b8');
  cube(G, b.x + 0.5, b.y + 0.5, 1.0, 1.0, 16, 26, '#f4f0fc', '#c8c0e0', '#aca2c8');
  faceL(G, b.x + 0.15, b.y + 0.15, 1.7, 0.3, 1.4, 4, 12, '#4a7ac0'); faceL(G, b.x + 0.5, b.y + 0.5, 1.0, 0.2, 0.8, 18, 24, '#ffe28a');
  // solar panels
  poly(G, [sp(G, b.x + 1.9, b.y + 0.2, 8), sp(G, b.x + 2.6, b.y + 0.2, 12), sp(G, b.x + 2.6, b.y + 1.2, 12), sp(G, b.x + 1.9, b.y + 1.2, 8)], '#3a6ad0', '#c8d8ff');
  // radar dish
  const [cx, cy] = sp(G, b.x + 1, b.y + 1, 30);
  g.strokeStyle = '#8a8aa0'; g.lineWidth = 2 * s; g.beginPath(); g.moveTo(cx, cy + 4 * s); g.lineTo(cx, cy - 8 * s); g.stroke();
  g.save(); g.translate(cx, cy - 10 * s); g.rotate(-0.5 + Math.sin(G.clock) * 0.3); ell(G, 0, 0, 10 * s, 4 * s, '#f0f0fa', '#8a8aa0'); g.restore();
  // drone pad
  const [px, py] = sp(G, b.x + 1, b.y + 2.35, 0);
  ell(G, px, py, 18 * s, 9 * s, '#585872', '#fff');
  G.g.fillStyle = '#ffd23a'; G.g.font = `900 ${10 * s}px sans-serif`; G.g.textAlign = 'center'; G.g.textBaseline = 'middle'; G.g.fillText('H', px, py);
  // flag
  g.strokeStyle = '#ccc'; g.lineWidth = 1.5 * s; g.beginPath(); g.moveTo(cx - 20 * s, cy + 20 * s); g.lineTo(cx - 20 * s, cy - 20 * s); g.stroke();
  poly(G, [[cx - 20 * s, cy - 20 * s], [cx - 8 * s, cy - 16 * s], [cx - 20 * s, cy - 12 * s]], '#ff4a5a');
  if (G.c.orders.some((o) => G.c.canSend(o))) bubble(G, b.x + 1, b.y + 1, 56, '📦');
}
export function drawShuttle(G, cx, cy, scale, flame) {
  const g = G.g; const k = scale * G.cam.s;
  if (flame) { for (let i = 0; i < 3; i++) { const l = (26 + Math.sin(G.clock * 30 + i) * 8 - i * 6) * k; poly(G, [[cx - (10 - i * 3) * k, cy], [cx + (10 - i * 3) * k, cy], [cx, cy + l]], ['#ff7a1a', '#ffc83a', '#fff6c0'][i]); } }
  poly(G, [[cx - 12 * k, cy - 14 * k], [cx - 26 * k, cy + 2 * k], [cx - 12 * k, cy - 2 * k]], '#e8404a');
  poly(G, [[cx + 12 * k, cy - 14 * k], [cx + 26 * k, cy + 2 * k], [cx + 12 * k, cy - 2 * k]], '#e8404a');
  g.beginPath(); g.moveTo(cx - 12 * k, cy); g.lineTo(cx - 12 * k, cy - 46 * k); g.quadraticCurveTo(cx, cy - 76 * k, cx + 12 * k, cy - 46 * k); g.lineTo(cx + 12 * k, cy); g.closePath();
  g.fillStyle = '#f4f6fc'; g.fill(); g.strokeStyle = '#8a90b0'; g.lineWidth = k; g.stroke();
  g.beginPath(); g.moveTo(cx - 9 * k, cy - 54 * k); g.quadraticCurveTo(cx, cy - 74 * k, cx + 9 * k, cy - 54 * k); g.closePath(); g.fillStyle = '#e8404a'; g.fill();
  ell(G, cx, cy - 36 * k, 5 * k, 5 * k, '#6ab8ff', '#4a6a98'); ell(G, cx, cy - 22 * k, 4 * k, 4 * k, '#6ab8ff', '#4a6a98');
  g.fillStyle = '#d0d4e4'; g.fillRect(cx - 12 * k, cy - 8 * k, 24 * k, 8 * k);
}
function drawSpaceport(G, b) {
  const s = G.cam.s; const g = G.g;
  shadow(G, b.x, b.y, 2, 2);
  cube(G, b.x + 0.05, b.y + 0.05, 1.9, 1.9, 0, 4, '#8a86a6', '#605c80', '#4c4870');
  const [cx, cy] = sp(G, b.x + 1, b.y + 1, 4);
  ell(G, cx, cy, 26 * s, 13 * s, '#6e6a8c', '#ffe08a');
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; ell(G, cx + Math.cos(a) * 26 * s, cy + Math.sin(a) * 13 * s, 1.6 * s, 1.6 * s, Math.sin(G.clock * 5 + i) > 0 ? '#ffd23a' : '#8a6a1a'); }
  cube(G, b.x + 0.1, b.y + 0.1, 0.34, 0.34, 4, 44, '#f4f2fa', '#c8c4dc', '#aaa6c4');
  const [tx, ty] = sp(G, b.x + 0.27, b.y + 0.27, 48);
  ell(G, tx, ty, 3 * s, 3 * s, Math.sin(G.clock * 4) > 0 ? '#ff4a4a' : '#7a2020');
  if (G.c.won && (!G.cel || G.cel.t > 5.4)) drawShuttle(G, cx, cy - 2 * s, 0.9, false);
}

// ---------- walkers, drones, effects ----------
function drawWalker(G, w) {
  const s = G.cam.s; const g = G.g; const [x, y] = sp(G, w.gx, w.gy, 0); const bob = Math.abs(Math.sin(w.ph)) * 1.5 * s;
  ell(G, x, y, 4 * s, 1.6 * s, 'rgba(50,10,40,.3)');
  g.fillStyle = w.col; g.fillRect(x - 2.6 * s, y - 9 * s - bob, 5.2 * s, 7 * s);
  g.fillStyle = '#4a4a62'; g.fillRect(x - 2.6 * s, y - 3 * s - bob * 0.5, 2 * s, 3 * s); g.fillRect(x + 0.6 * s, y - 3 * s - bob * 0.5, 2 * s, 3 * s);
  ell(G, x, y - 12 * s - bob, 3.6 * s, 3.6 * s, '#f4f6fc', '#8a90b0'); ell(G, x + 0.6 * s, y - 12 * s - bob, 2.2 * s, 1.8 * s, '#5ab0ff');
}
function drawDrone(G, d) {
  const s = G.cam.s; const g = G.g; const u = Math.min(1, d.t / d.dur); const e = u * u * (3 - 2 * u);
  const [x0, y0] = sp(G, HQ.x + 1, HQ.y + 1, 40);
  const x = x0 + (G.cw + 80 - x0) * e; const y = y0 + (-80 - y0) * e - Math.sin(u * 3.1416) * 30 * s;
  g.strokeStyle = '#555'; g.lineWidth = 1.2 * s; g.beginPath(); g.moveTo(x - 8 * s, y); g.lineTo(x + 8 * s, y); g.stroke();
  for (const dx of [-8, 8]) ell(G, x + dx * s, y - 2 * s, 6 * s, 1.4 * s, `rgba(220,230,255,${0.4 + 0.3 * Math.sin(G.clock * 60)})`);
  ell(G, x, y + 1 * s, 5 * s, 3 * s, '#f0f4ff', '#6a70a0'); ell(G, x, y + 2 * s, 1.6 * s, 1.2 * s, '#ff5a6a');
  g.strokeStyle = '#555'; g.beginPath(); g.moveTo(x, y + 3 * s); g.lineTo(x, y + 8 * s); g.stroke();
  g.fillStyle = '#d8a050'; g.fillRect(x - 4 * s, y + 8 * s, 8 * s, 6 * s); g.strokeStyle = '#7a4a10'; g.strokeRect(x - 4 * s, y + 8 * s, 8 * s, 6 * s);
}
function drawPod(G, p) {
  const s = G.cam.s; const g = G.g; const u = Math.min(1, p.t / 0.9); const [x, y1] = sp(G, p.gx, p.gy, 0); const y = y1 - (1 - u * u) * 220 * s;
  ell(G, x, y + 14 * s * u, 5 * s, 2 * s, 'rgba(50,10,40,.3)');
  ell(G, x, y - 6 * s, 5 * s, 8 * s, '#f4f4fc', '#8a90b0'); ell(G, x, y - 8 * s, 2.4 * s, 2.4 * s, '#5ab0ff');
  if (u < 1) poly(G, [[x - 4 * s, y], [x + 4 * s, y], [x, y + 14 * s]], '#ffb030');
}
function drawLocks(G) {
  const g = G.g; const s = G.cam.s; const c = G.c;
  for (const r of REGIONS) {
    if (c.regions[r.id]) continue;
    const [x, y] = sp(G, r.x + r.w / 2, r.y + r.h / 2, 0);
    const ok = c.level >= r.level; const afford = ok && c.coins >= r.cost;
    const pulse = afford ? 1 + Math.sin(G.clock * 4) * 0.06 : 1;
    const label = ok ? `🔒 ${G.num(r.cost)}🪙` : `🔒⭐${G.num(r.level)}`;
    g.font = `900 ${10 * s * pulse}px Tajawal, system-ui, sans-serif`;
    const w = g.measureText(label).width + 12 * s; const h = 20 * s * pulse;
    g.fillStyle = afford ? '#3fbf6a' : ok ? '#7a5aa8' : '#5a4a68';
    g.strokeStyle = '#fff'; g.lineWidth = 2 * s;
    g.beginPath(); g.roundRect(x - w / 2, y - h / 2 - 6 * s, w, h, 7 * s); g.fill(); g.stroke();
    g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(label, x, y - 6 * s);
  }
}

export function drawWorld(G) {
  const g = G.g; const c = G.c; const s = G.cam.s;
  g.setTransform(G.dpr, 0, 0, G.dpr, 0, 0);
  drawSky(G);
  drawSlab(G);
  drawGround(G);
  if (G.placing) {
    for (const p of G.spotsCache || []) diamond(G, p.x, p.y, G.placeW, G.placeW, 0, `rgba(80,255,140,${0.28 + 0.15 * Math.sin(G.clock * 5)})`, 'rgba(255,255,255,.6)');
  }
  const things = [];
  for (const b of c.blds) things.push({ d: b.x + b.w + b.y + b.h, f: () => ({ field: drawField, pen: drawPen, home: drawHome, hq: drawHQ, spaceport: drawSpaceport }[b.k] || drawFactory)(G, b) });
  for (const w of G.walkers) things.push({ d: w.gx + w.gy + 0.6, f: () => drawWalker(G, w) });
  things.sort((a, b) => a.d - b.d);
  for (const t of things) t.f();
  drawLocks(G);
  for (const p of G.pods) drawPod(G, p);
  for (const d of G.drones) drawDrone(G, d);
  if (G.cel) {
    const sp0 = c.blds.find((b) => b.k === 'spaceport');
    if (sp0) {
      const [cx, cy] = sp(G, sp0.x + 1, sp0.y + 1, 4); const t = G.cel.t;
      if (t < 5.4) { const u = Math.min(1, t / 5); const e = 1 - (1 - u) * (1 - u); drawShuttle(G, cx, cy - 2 * s - (1 - e) * G.ch * 0.9, 0.9, true); }
    }
  }
  for (const p of G.parts) { g.globalAlpha = Math.max(0, 1 - p.t / p.life); g.fillStyle = p.col; g.beginPath(); g.arc(p.x, p.y, p.r * G.u * 0.5, 0, 6.3); g.fill(); }
  g.globalAlpha = 1;
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `900 ${4.2 * G.u}px Tajawal, system-ui, sans-serif`;
  for (const f of G.fx) {
    const [x, y] = sp(G, f.gx, f.gy, 24 + f.t * 30);
    g.globalAlpha = Math.max(0, 1 - f.t); g.lineWidth = G.u * 0.9; g.strokeStyle = 'rgba(60,10,50,.9)'; g.fillStyle = '#fff';
    g.strokeText(f.text, x, y); g.fillText(f.text, x, y);
  }
  g.globalAlpha = 1;
}
