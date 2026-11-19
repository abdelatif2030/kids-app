// All art of «تنظيف السجاد» is drawn in code: hand-knotted rug patterns, the courtyard, fringe and the five tools.
import { mulberry } from './logic.js';

export const PALETTES = [
  { field: '#a63a2d', border: '#2f3f6b', a: '#e8c27a', b: '#f4e8d0', dark: '#5a1a14' },
  { field: '#1f6f78', border: '#d9a441', a: '#f2e3c0', b: '#c2553a', dark: '#0f3b42' },
  { field: '#b84a62', border: '#3b6b4a', a: '#f6dca0', b: '#fff3e0', dark: '#6a1f33' },
  { field: '#2c3f7a', border: '#c98a3a', a: '#e9d6a8', b: '#b8433a', dark: '#16204a' },
  { field: '#d9883a', border: '#6b3a2a', a: '#f7e6b8', b: '#2d6a6a', dark: '#7a3a10' },
  { field: '#3e7a4a', border: '#a8402f', a: '#f0dfae', b: '#e3b04a', dark: '#1d4026' },
  { field: '#6b3f86', border: '#e0a94a', a: '#f3e2c6', b: '#2f7f7a', dark: '#33174a' },
  { field: '#e0b04a', border: '#2a2a3a', a: '#a8442e', b: '#fff2d2', dark: '#7a5a14' },
];

function diamond(g, cx, cy, rx, ry, fill) { g.fillStyle = fill; g.beginPath(); g.moveTo(cx, cy - ry); g.lineTo(cx + rx, cy); g.lineTo(cx, cy + ry); g.lineTo(cx - rx, cy); g.closePath(); g.fill(); }
function star(g, cx, cy, r, n, fill, inner = 0.45) { g.fillStyle = fill; g.beginPath(); for (let i = 0; i < n * 2; i++) { const a = (i / (n * 2)) * 6.2832 - 1.5708; const rr = i % 2 ? r * inner : r; g[i ? 'lineTo' : 'moveTo'](cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath(); g.fill(); }
function flower(g, cx, cy, r, c1, c2) { g.fillStyle = c1; for (let i = 0; i < 6; i++) { const a = (i / 6) * 6.2832; g.beginPath(); g.ellipse(cx + Math.cos(a) * r * 0.55, cy + Math.sin(a) * r * 0.55, r * 0.42, r * 0.28, a, 0, 6.3); g.fill(); } g.fillStyle = c2; g.beginPath(); g.arc(cx, cy, r * 0.3, 0, 6.3); g.fill(); }
function octagon(g, cx, cy, r, fill) { g.fillStyle = fill; g.beginPath(); for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.2832 + 0.3927; g[i ? 'lineTo' : 'moveTo'](cx + Math.cos(a) * r, cy + Math.sin(a) * r); } g.closePath(); g.fill(); }

/** Draws the rug into a W x H canvas context (rotated automatically when it is portrait). */
export function drawRug(g, W, H, def) {
  const pal = PALETTES[def.palette % PALETTES.length];
  const rnd = mulberry(def.seed * 7 + 3);
  g.save();
  let w = W; let h = H;
  if (H > W) { g.translate(W, 0); g.rotate(Math.PI / 2); w = H; h = W; }
  // field
  g.fillStyle = pal.field; g.fillRect(0, 0, w, h);
  // border
  const bw = h * 0.15;
  g.fillStyle = pal.border; g.fillRect(0, 0, w, h);
  g.fillStyle = pal.dark; g.fillRect(bw * 0.12, bw * 0.12, w - bw * 0.24, h - bw * 0.24);
  g.fillStyle = pal.border; g.fillRect(bw * 0.22, bw * 0.22, w - bw * 0.44, h - bw * 0.44);
  const motifs = (x0, y0, x1, y1, n, k) => { for (let i = 0; i < n; i++) { const t = (i + 0.5) / n; const x = x0 + (x1 - x0) * t; const y = y0 + (y1 - y0) * t; if ((i + k) % 2) diamond(g, x, y, bw * 0.22, bw * 0.22, pal.a); else flower(g, x, y, bw * 0.2, pal.b, pal.dark); } };
  const nH = Math.round(w / (bw * 0.7)); const nV = Math.round(h / (bw * 0.7));
  motifs(bw * 0.2 + bw * 0.5, bw * 0.5, w - bw * 0.7, bw * 0.5, nH, 0); motifs(bw * 0.7, h - bw * 0.5, w - bw * 0.7, h - bw * 0.5, nH, 0);
  motifs(bw * 0.5, bw * 1.1, bw * 0.5, h - bw * 1.1, nV - 2, 1); motifs(w - bw * 0.5, bw * 1.1, w - bw * 0.5, h - bw * 1.1, nV - 2, 1);
  g.fillStyle = pal.dark; g.fillRect(bw, bw, w - 2 * bw, h - 2 * bw);
  g.fillStyle = pal.a; g.fillRect(bw + 3, bw + 3, w - 2 * bw - 6, h - 2 * bw - 6);
  const fx = bw + h * 0.02; const fy = bw + h * 0.02; const fw = w - 2 * fx; const fh = h - 2 * fy;
  g.fillStyle = pal.field; g.fillRect(fx, fy, fw, fh);
  g.save(); g.beginPath(); g.rect(fx, fy, fw, fh); g.clip();
  const cx = w / 2; const cy = h / 2;
  const P = def.pattern;
  if (P === 'stripes') {
    const n = 9;
    for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? pal.a : pal.field; g.fillRect(fx + (fw / n) * i, fy, fw / n, fh); }
    for (let i = 0; i < n; i++) { const x = fx + (fw / n) * (i + 0.5); for (let j = 0; j < 6; j++) diamond(g, x, fy + (fh / 6) * (j + 0.5), fw / n * 0.22, fh / 6 * 0.28, i % 2 ? pal.b : pal.a); }
  } else if (P === 'kilim') {
    const rows = 7;
    for (let r = 0; r < rows; r++) {
      const y0 = fy + (fh / rows) * r; const rh = fh / rows;
      g.fillStyle = r % 2 ? pal.dark : pal.b; g.fillRect(fx, y0, fw, rh * 0.18);
      const nz = 12; g.fillStyle = r % 2 ? pal.a : pal.border;
      for (let i = 0; i < nz; i++) { const x = fx + (fw / nz) * i; g.beginPath(); g.moveTo(x, y0 + rh); g.lineTo(x + fw / nz / 2, y0 + rh * 0.25); g.lineTo(x + fw / nz, y0 + rh); g.fill(); }
      g.fillStyle = pal.b; for (let i = 0; i < nz; i++) diamond(g, fx + (fw / nz) * (i + 0.5), y0 + rh * 0.7, fw / nz * 0.1, rh * 0.1, pal.b);
    }
  } else if (P === 'medallion' || P === 'rings') {
    for (let i = 0; i < 6; i++) { const x = fx + rnd() * fw; const y = fy + rnd() * fh; diamond(g, x, y, fh * 0.03, fh * 0.03, pal.a); }
    for (const [sx, sy] of [[fx, fy], [fx + fw, fy], [fx, fy + fh], [fx + fw, fy + fh]]) { g.fillStyle = pal.border; g.beginPath(); g.arc(sx, sy, fh * 0.34, 0, 6.3); g.fill(); g.fillStyle = pal.a; g.beginPath(); g.arc(sx, sy, fh * 0.24, 0, 6.3); g.fill(); g.fillStyle = pal.dark; g.beginPath(); g.arc(sx, sy, fh * 0.1, 0, 6.3); g.fill(); }
    if (P === 'rings') { for (let i = 6; i >= 1; i--) { g.fillStyle = i % 2 ? pal.b : pal.dark; g.beginPath(); g.ellipse(cx, cy, fw * 0.075 * i, fh * 0.08 * i, 0, 0, 6.3); g.fill(); } star(g, cx, cy, fh * 0.2, 8, pal.a); }
    else { for (let i = 4; i >= 1; i--) diamond(g, cx, cy, fw * 0.12 * i, fh * 0.12 * i, i % 2 ? pal.dark : (i === 2 ? pal.a : pal.border)); star(g, cx, cy, fh * 0.16, 8, pal.b); g.fillStyle = pal.dark; g.beginPath(); g.arc(cx, cy, fh * 0.05, 0, 6.3); g.fill(); for (const s of [-1, 1]) { diamond(g, cx + s * fw * 0.5 * 0.8, cy, fh * 0.07, fh * 0.07, pal.a); } }
  } else if (P === 'gul') {
    const cols = 4; const rows = 2;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = fx + (fw / cols) * (c + 0.5); const y = fy + (fh / rows) * (r + 0.5); const R = Math.min(fw / cols, fh / rows) * 0.46;
      octagon(g, x, y, R, pal.dark); octagon(g, x, y, R * 0.8, (r + c) % 2 ? pal.b : pal.a); octagon(g, x, y, R * 0.55, pal.border); star(g, x, y, R * 0.4, 6, pal.a); diamond(g, x + fw / cols / 2, y + fh / rows / 2, R * 0.2, R * 0.2, pal.b);
    }
  } else if (P === 'lattice') {
    const nx = 7; const ny = 4;
    for (let r = -1; r <= ny; r++) for (let c = -1; c <= nx; c++) {
      const x = fx + (fw / nx) * (c + 0.5 + (r % 2 ? 0.5 : 0)); const y = fy + (fh / ny) * (r + 0.5);
      diamond(g, x, y, fw / nx * 0.48, fh / ny * 0.5, (r + c) % 2 ? pal.border : pal.dark); diamond(g, x, y, fw / nx * 0.32, fh / ny * 0.34, (r + c) % 2 ? pal.a : pal.b); diamond(g, x, y, fw / nx * 0.12, fh / ny * 0.13, pal.dark);
    }
  } else { // floral: sine vines with flowers and leaves
    g.lineWidth = fh * 0.025; g.strokeStyle = pal.b;
    for (let v = 0; v < 3; v++) { g.beginPath(); for (let x = 0; x <= fw; x += 4) { const y = fy + fh * (0.2 + 0.3 * v) + Math.sin(x / fw * 6.28 * 2 + v) * fh * 0.1; g[x ? 'lineTo' : 'moveTo'](fx + x, y); } g.stroke(); }
    for (let v = 0; v < 3; v++) for (let k = 0; k < 7; k++) { const x = fx + fw * (k + 0.5) / 7; const y = fy + fh * (0.2 + 0.3 * v) + Math.sin((x - fx) / fw * 6.28 * 2 + v) * fh * 0.1; flower(g, x, y, fh * 0.07, (k + v) % 2 ? pal.a : pal.b, pal.dark); g.fillStyle = pal.border; g.beginPath(); g.ellipse(x + fh * 0.07, y + fh * 0.07, fh * 0.04, fh * 0.02, 0.7, 0, 6.3); g.fill(); }
    flower(g, cx, cy, fh * 0.22, pal.a, pal.dark); flower(g, cx, cy, fh * 0.12, pal.b, pal.border);
  }
  g.restore();
  // abrash: slightly different dye lots in horizontal bands, like real hand-knotted rugs
  for (let i = 0; i < 6; i++) { g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'; g.fillRect(0, rnd() * h, w, h * (0.04 + rnd() * 0.12)); }
  g.restore();
  // woven texture: fine ridges and knot noise
  g.save(); g.globalAlpha = 0.16; g.fillStyle = '#000';
  for (let y = 0; y < H; y += 3) g.fillRect(0, y, W, 1);
  g.restore();
  g.save(); g.globalAlpha = 0.07;
  for (let i = 0; i < 2600; i++) { g.fillStyle = rnd() < 0.5 ? '#000' : '#fff'; g.fillRect(rnd() * W, rnd() * H, 2 + rnd() * 3, 2); }
  g.restore();
}

/** limestone courtyard with a whitewashed wall, geranium pots, dappled sun and a drain; pre-rendered once per size */
export function drawCourtyard(g, W, H, u, drainY) {
  const rnd = mulberry(77);
  const grad = g.createLinearGradient(0, 0, W, H); grad.addColorStop(0, '#efe3c8'); grad.addColorStop(1, '#dac7a0');
  g.fillStyle = grad; g.fillRect(0, 0, W, H);
  const ts = Math.max(30, u * 13);
  for (let y = 0, r = 0; y < H; y += ts * 0.62, r++) for (let x = -(r % 2) * ts * 0.5; x < W; x += ts) {
    g.fillStyle = `rgba(${rnd() < 0.5 ? '255,250,235' : '120,90,50'},${0.03 + rnd() * 0.06})`; g.fillRect(x + 1, y + 1, ts - 2, ts * 0.62 - 2);
    g.strokeStyle = 'rgba(150,120,70,0.35)'; g.lineWidth = 1.5; g.strokeRect(x, y, ts, ts * 0.62);
  }
  for (let i = 0; i < 120; i++) { g.fillStyle = 'rgba(120,90,50,0.12)'; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
  // wall
  const wh = u * 20;
  const wg = g.createLinearGradient(0, 0, 0, wh); wg.addColorStop(0, '#fffaf0'); wg.addColorStop(1, '#f1e8d4');
  g.fillStyle = wg; g.fillRect(0, 0, W, wh);
  g.fillStyle = '#2d6db5'; g.fillRect(0, wh - u * 2.2, W, u * 2.2); g.fillStyle = '#1e4f8a'; g.fillRect(0, wh - u * 0.5, W, u * 0.6);
  for (const wx of [0.14, 0.86]) { g.fillStyle = '#d8ccb0'; g.fillRect(W * wx - u * 5.4, u * 3.4, u * 10.8, u * 11.8); g.fillStyle = '#9fd4ea'; g.fillRect(W * wx - u * 4.6, u * 4.2, u * 9.2, u * 10.2); g.fillStyle = '#2d6db5'; g.fillRect(W * wx - u * 7.2, u * 3.4, u * 2.4, u * 11.8); g.fillRect(W * wx + u * 4.8, u * 3.4, u * 2.4, u * 11.8); g.fillStyle = '#fff'; g.fillRect(W * wx - 1, u * 4.2, 2, u * 10.2); }
  g.fillStyle = '#3d7fc4'; g.beginPath(); g.moveTo(W / 2 - u * 6, wh - u * 2.2); g.lineTo(W / 2 - u * 6, u * 8); g.arc(W / 2, u * 8, u * 6, Math.PI, 0); g.lineTo(W / 2 + u * 6, wh - u * 2.2); g.fill();
  g.fillStyle = '#e9b44c'; g.beginPath(); g.arc(W / 2 + u * 3.6, u * 13, u * 0.6, 0, 6.3); g.fill();
  // geranium pots
  const pot = (x, y, s) => {
    g.fillStyle = 'rgba(0,0,0,.14)'; g.beginPath(); g.ellipse(x, y + s * 0.15, s * 0.9, s * 0.3, 0, 0, 6.3); g.fill();
    g.fillStyle = '#c9683a'; g.beginPath(); g.moveTo(x - s * 0.7, y - s * 0.7); g.lineTo(x + s * 0.7, y - s * 0.7); g.lineTo(x + s * 0.5, y + s * 0.1); g.lineTo(x - s * 0.5, y + s * 0.1); g.fill();
    g.fillStyle = '#a8502a'; g.fillRect(x - s * 0.78, y - s * 0.82, s * 1.56, s * 0.2);
    g.fillStyle = '#3f8a4a'; g.beginPath(); g.arc(x, y - s * 1.05, s * 0.8, 0, 6.3); g.fill();
    for (let i = 0; i < 7; i++) { g.fillStyle = i % 2 ? '#e2394f' : '#f26a7a'; g.beginPath(); g.arc(x + (rnd() - 0.5) * s * 1.3, y - s * (0.9 + rnd() * 0.7), s * 0.2, 0, 6.3); g.fill(); }
  };
  for (const px of [0.05, 0.3, 0.7, 0.95]) pot(W * px, wh + u * 2.6, u * 2.4);
  pot(W * 0.04, H * 0.62, u * 3); pot(W * 0.96, H * 0.66, u * 3);
  // drain
  g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(W * 0.06, drainY - u * 0.4, W * 0.88, u * 3.4);
  g.fillStyle = '#6b6f78'; g.fillRect(W * 0.06, drainY, W * 0.88, u * 2.6);
  g.fillStyle = '#2b2e36'; for (let x = W * 0.07; x < W * 0.93; x += u * 2) g.fillRect(x, drainY + u * 0.5, u * 1.2, u * 1.6);
  // dappled sunlight and leaf shadows
  for (let i = 0; i < 9; i++) { const x = rnd() * W; const y = H * 0.25 + rnd() * H * 0.7; const r = u * (5 + rnd() * 9); const rg = g.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, 'rgba(60,70,30,0.10)'); rg.addColorStop(1, 'rgba(60,70,30,0)'); g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2); }
  const sun = g.createLinearGradient(0, 0, W, H); sun.addColorStop(0, 'rgba(255,230,160,0.22)'); sun.addColorStop(0.6, 'rgba(255,230,160,0)'); g.fillStyle = sun; g.fillRect(0, 0, W, H);
}

/** shadow + fringe under the rug. x,y,w,h = rug rect in the canvas; fringe sits on the two short ends */
export function drawFrame(g, x, y, w, h, u) {
  const rnd = mulberry(5);
  g.save(); g.shadowColor = 'rgba(60,40,10,.35)'; g.shadowBlur = u * 3; g.shadowOffsetY = u * 0.8; g.fillStyle = '#000'; g.fillRect(x, y, w, h); g.restore();
  const horiz = w >= h; const fl = Math.min(w, h) * 0.07;
  g.lineCap = 'round';
  const n = Math.round((horiz ? h : w) / (u * 0.9));
  for (let i = 0; i <= n; i++) {
    const t = (i + 0.5) / (n + 1); const j = (rnd() - 0.5) * fl * 0.5;
    for (const s of [0, 1]) {
      g.strokeStyle = i % 2 ? '#f5ecd8' : '#e2d3b0'; g.lineWidth = Math.max(1.4, u * 0.5);
      g.beginPath();
      if (horiz) { const px = s ? x + w : x; const py = y + h * t; g.moveTo(px, py); g.quadraticCurveTo(px + (s ? 1 : -1) * fl * 0.6, py + j, px + (s ? 1 : -1) * fl * (0.9 + rnd() * 0.3), py + j * 1.6); }
      else { const py = s ? y + h : y; const px = x + w * t; g.moveTo(px, py); g.quadraticCurveTo(px + j, py + (s ? 1 : -1) * fl * 0.6, px + j * 1.6, py + (s ? 1 : -1) * fl * (0.9 + rnd() * 0.3)); }
      g.stroke();
    }
  }
}

/** The tool held at pointer (x, y). r = working radius in px, a = animation clock, k = {active, hit 0..1, dirx, diry, spin} */
export function drawTool(g, kind, x, y, r, a, k) {
  g.save(); g.translate(x, y);
  g.lineJoin = 'round'; g.lineCap = 'round';
  if (kind !== 'squeegee') { g.strokeStyle = k.active ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.55)'; g.lineWidth = 2; g.setLineDash([6, 5]); g.beginPath(); g.arc(0, 0, r, 0, 6.3); g.stroke(); g.setLineDash([]); }
  if (kind === 'beat') {
    const s = 1 + k.hit * 0.3; g.translate(r * 0.9, -r * 1.1); g.rotate(0.6 - k.hit * 0.5);
    g.fillStyle = '#9a6a38'; g.strokeStyle = '#5a3a18'; g.lineWidth = 3; g.beginPath(); g.roundRect(-r * 0.09, 0, r * 0.18, r * 1.7, r * 0.08); g.fill(); g.stroke();
    g.translate(0, -r * 0.05); g.scale(s, s);
    g.fillStyle = '#e0bf72'; g.beginPath(); g.arc(0, -r * 0.05, r * 0.62, 0, 6.3); g.fill(); g.stroke();
    g.strokeStyle = '#a8803a'; g.lineWidth = 1.5; g.save(); g.clip(); for (let i = -4; i <= 4; i++) { g.beginPath(); g.moveTo(-r, i * r * 0.15 - r * 0.7); g.lineTo(r, i * r * 0.15 + r * 0.7); g.moveTo(-r, i * r * 0.15 + r * 0.7); g.lineTo(r, i * r * 0.15 - r * 0.7); g.stroke(); } g.restore();
  } else if (kind === 'foam') {
    g.translate(r * 0.7, -r * 1.2); g.rotate(0.25);
    g.fillStyle = '#e8f1f8'; g.strokeStyle = '#5a7a98'; g.lineWidth = 3; g.beginPath(); g.roundRect(-r * 0.3, 0, r * 0.6, r * 1.1, r * 0.15); g.fill(); g.stroke();
    g.fillStyle = '#3d9be0'; g.beginPath(); g.roundRect(-r * 0.22, -r * 0.2, r * 0.44, r * 0.26, r * 0.08); g.fill(); g.stroke();
    g.fillStyle = '#ff8a4a'; g.fillRect(-r * 0.2, r * 0.35, r * 0.4, r * 0.3);
    g.fillStyle = '#5a7a98'; g.fillRect(-r * 0.08, -r * 0.4, r * 0.16, r * 0.22);
  } else if (kind === 'scrub') {
    g.rotate(k.spin);
    g.fillStyle = '#3d86c8'; g.strokeStyle = '#1e4f8a'; g.lineWidth = 3; g.beginPath(); g.arc(0, 0, r * 0.82, 0, 6.3); g.fill(); g.stroke();
    g.strokeStyle = '#f2e4b0'; g.lineWidth = Math.max(2, r * 0.07);
    for (let i = 0; i < 28; i++) { const t = (i / 28) * 6.28; g.beginPath(); g.moveTo(Math.cos(t) * r * 0.25, Math.sin(t) * r * 0.25); g.lineTo(Math.cos(t + 0.35) * r * 0.78, Math.sin(t + 0.35) * r * 0.78); g.stroke(); }
    g.fillStyle = '#e8564a'; g.beginPath(); g.arc(0, 0, r * 0.2, 0, 6.3); g.fill(); g.rotate(-k.spin);
    g.fillStyle = '#4a4e58'; g.beginPath(); g.roundRect(r * 0.5, -r * 1.7, r * 0.22, r * 1.3, r * 0.1); g.fill();
  } else if (kind === 'jet') {
    g.translate(r * 0.4, -r * 1.3); g.rotate(0.35);
    g.fillStyle = '#7a8494'; g.strokeStyle = '#3a4252'; g.lineWidth = 3; g.beginPath(); g.roundRect(-r * 0.18, -r * 0.5, r * 0.36, r * 1.5, r * 0.1); g.fill(); g.stroke();
    g.fillStyle = '#e8564a'; g.fillRect(-r * 0.2, r * 0.7, r * 0.4, r * 0.18);
    if (k.active) { g.rotate(-0.35); g.fillStyle = 'rgba(120,200,255,.35)'; g.beginPath(); g.moveTo(-r * 0.2, r * 0.95); g.lineTo(-r * 0.1 - r * 0.3, r * 1.25); g.lineTo(r * 0.1 + r * 0.3, r * 1.25); g.lineTo(r * 0.2, r * 0.95); g.fill(); }
  } else {
    const ang = Math.atan2(k.diry, k.dirx);
    g.rotate(ang); // blade lies across the stroke
    const hw = r;
    g.fillStyle = '#2f3440'; g.beginPath(); g.roundRect(-r * 0.09, -hw, r * 0.18, hw * 2, r * 0.06); g.fill();
    g.fillStyle = '#7ad0e8'; g.strokeStyle = '#1e5a78'; g.lineWidth = 2; g.beginPath(); g.roundRect(-r * 0.16, -hw - 2, r * 0.18, hw * 2 + 4, r * 0.06); g.fill(); g.stroke();
    g.fillStyle = '#9a6a38'; g.fillRect(-r * 1.6, -r * 0.07, r * 1.5, r * 0.14);
  }
  g.restore();
}

export const ICONS = {
  beat: '<svg viewBox="0 0 48 48"><circle cx="19" cy="19" r="12" fill="#e0bf72" stroke="#5a3a18" stroke-width="2.5"/><path d="M10 10l18 18M28 10L10 28" stroke="#a8803a" stroke-width="1.5"/><rect x="25" y="26" width="5" height="19" rx="2" transform="rotate(-40 27 35)" fill="#9a6a38" stroke="#5a3a18" stroke-width="2"/></svg>',
  foam: '<svg viewBox="0 0 48 48"><rect x="14" y="16" width="18" height="28" rx="5" fill="#e8f1f8" stroke="#5a7a98" stroke-width="2.5"/><rect x="17" y="10" width="12" height="8" rx="3" fill="#3d9be0" stroke="#5a7a98" stroke-width="2"/><circle cx="10" cy="10" r="4" fill="#fff" stroke="#9ec4e0" stroke-width="1.5"/><circle cx="17" cy="5" r="3" fill="#fff" stroke="#9ec4e0" stroke-width="1.5"/><circle cx="6" cy="18" r="3" fill="#fff" stroke="#9ec4e0" stroke-width="1.5"/></svg>',
  scrub: '<svg viewBox="0 0 48 48"><circle cx="24" cy="28" r="15" fill="#3d86c8" stroke="#1e4f8a" stroke-width="2.5"/><g stroke="#f2e4b0" stroke-width="2.4"><path d="M24 28l10-8M24 28l-3-12M24 28l-12 2M24 28l5 12M24 28l-8 9"/></g><circle cx="24" cy="28" r="4" fill="#e8564a"/><rect x="31" y="3" width="5" height="15" rx="2" fill="#4a4e58"/></svg>',
  jet: '<svg viewBox="0 0 48 48"><rect x="8" y="8" width="13" height="26" rx="4" transform="rotate(-25 14 21)" fill="#7a8494" stroke="#3a4252" stroke-width="2.5"/><path d="M26 28q8 4 12 14M30 24q10 2 15 10M24 33q4 6 5 12" stroke="#4aa8e8" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',
  squeegee: '<svg viewBox="0 0 48 48"><rect x="6" y="24" width="36" height="9" rx="3" fill="#7ad0e8" stroke="#1e5a78" stroke-width="2.5"/><rect x="6" y="31" width="36" height="4" fill="#2f3440"/><rect x="21" y="3" width="6" height="22" rx="2" fill="#9a6a38" stroke="#5a3a18" stroke-width="2"/></svg>',
};
