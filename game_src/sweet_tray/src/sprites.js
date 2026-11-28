// Sweet Tray art: twelve glossy, cute sweets drawn in code onto small cached canvases (bright + dimmed), and the
// bakery background (wall, bunting, wooden table, lace doily, porcelain plate). No image files.
const TAU = Math.PI * 2;
const OUT = 'rgba(120,52,78,0.9)';
export const SP = 160; // sprite canvas size
const R = 54; // body radius inside it
export const KIND_NAMES = ['donut', 'cupcake', 'macaron', 'cookie', 'cake', 'candy', 'lollipop', 'icecream', 'choco', 'strawberry', 'pudding', 'heart'];

function seeded(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; }

function fillStroke(g, fill, lw = 3.2) {
  g.fillStyle = fill; g.fill();
  g.lineWidth = lw; g.strokeStyle = OUT; g.lineJoin = 'round'; g.stroke();
}
function lin(g, x0, y0, x1, y1, a, b) { const gr = g.createLinearGradient(x0, y0, x1, y1); gr.addColorStop(0, a); gr.addColorStop(1, b); return gr; }
function gloss(g, x, y, rx, ry, rot = -0.6, a = 0.6) { g.save(); g.fillStyle = `rgba(255,255,255,${a})`; g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, TAU); g.fill(); g.restore(); }
function ell(g, x, y, rx, ry, rot = 0) { g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, TAU); }
function face(g, x, y, s, mouth = 'smile') {
  g.save();
  g.fillStyle = 'rgba(255,120,150,0.55)';
  ell(g, x - s * 0.5, y + s * 0.2, s * 0.15, s * 0.09); g.fill();
  ell(g, x + s * 0.5, y + s * 0.2, s * 0.15, s * 0.09); g.fill();
  g.fillStyle = '#3a2030';
  for (const dx of [-1, 1]) {
    ell(g, x + dx * s * 0.3, y, s * 0.1, s * 0.13); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(x + dx * s * 0.3 - s * 0.03, y - s * 0.05, s * 0.04, 0, TAU); g.fill(); g.fillStyle = '#3a2030';
  }
  g.strokeStyle = '#3a2030'; g.lineWidth = Math.max(2, s * 0.06); g.lineCap = 'round';
  g.beginPath();
  if (mouth === 'o') g.arc(x, y + s * 0.3, s * 0.08, 0, TAU); else g.arc(x, y + s * 0.2, s * 0.17, 0.2, Math.PI - 0.2);
  g.stroke();
  g.restore();
}
function sparkle(g, x, y, r, col = '#fff') { g.fillStyle = col; g.beginPath(); for (let i = 0; i < 8; i++) { const a = (i * TAU) / 8; const rr = i % 2 ? r * 0.3 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); }

const DRAW = [
  // 0 donut
  (g) => {
    g.beginPath(); g.arc(0, 0, R, 0, TAU); fillStroke(g, lin(g, 0, -R, 0, R, '#f6c27c', '#e0a050'));
    g.beginPath(); for (let i = 0; i <= 64; i++) { const a = (i / 64) * TAU; const r = R * 0.86 + Math.sin(a * 9) * R * 0.055; g[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); } g.closePath();
    fillStroke(g, lin(g, 0, -R, 0, R, '#ffa9cc', '#ff7fb0'), 2.6);
    const r = seeded(11); const cols = ['#fff', '#ffe04a', '#7ae0ff', '#8affb0', '#c89aff'];
    for (let i = 0; i < 16; i++) { const a = r() * TAU; const d = R * (0.4 + r() * 0.4); g.save(); g.translate(Math.cos(a) * d, Math.sin(a) * d); g.rotate(r() * 3); g.strokeStyle = cols[i % 5]; g.lineWidth = 4.5; g.lineCap = 'round'; g.beginPath(); g.moveTo(-4, 0); g.lineTo(4, 0); g.stroke(); g.restore(); }
    g.save(); g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(0, 0, R * 0.27, 0, TAU); g.fill(); g.restore();
    g.beginPath(); g.arc(0, 0, R * 0.27, 0, TAU); g.lineWidth = 3; g.strokeStyle = OUT; g.stroke();
    gloss(g, -R * 0.42, -R * 0.5, R * 0.22, R * 0.09, -0.7);
  },
  // 1 cupcake
  (g) => {
    g.beginPath(); g.moveTo(-R * 0.66, -R * 0.02); g.lineTo(R * 0.66, -R * 0.02); g.lineTo(R * 0.46, R * 0.92); g.quadraticCurveTo(0, R * 1.0, -R * 0.46, R * 0.92); g.closePath();
    fillStroke(g, lin(g, 0, 0, 0, R, '#9fe9d2', '#5fcaae'));
    g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 3; for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(i * R * 0.24, R * 0.1); g.lineTo(i * R * 0.17, R * 0.88); g.stroke(); }
    for (const [y, w, h] of [[-R * 0.04, 0.8, 0.36], [-R * 0.38, 0.62, 0.32], [-R * 0.66, 0.4, 0.28]]) { ell(g, 0, y, R * w, R * h); fillStroke(g, lin(g, 0, y - R * h, 0, y + R * h, '#ffc0d8', '#ff8fbc')); }
    g.fillStyle = '#e8304e'; g.beginPath(); g.arc(R * 0.02, -R * 0.98, R * 0.17, 0, TAU); fillStroke(g, '#ff4c68', 2.6);
    g.strokeStyle = '#3a8a3a'; g.lineWidth = 3; g.beginPath(); g.moveTo(R * 0.02, -R * 1.12); g.quadraticCurveTo(R * 0.12, -R * 1.3, R * 0.28, -R * 1.28); g.stroke();
    gloss(g, -R * 0.06, -R * 1.02, R * 0.06, R * 0.04, -0.5, 0.8);
    face(g, 0, -R * 0.04, R * 0.62);
    gloss(g, -R * 0.4, -R * 0.4, R * 0.14, R * 0.06, -0.7);
  },
  // 2 macaron
  (g) => {
    const shell = (cy, up) => { g.beginPath(); g.ellipse(0, cy, R * 0.92, R * 0.42, 0, up ? Math.PI : 0, up ? 0 : Math.PI); g.closePath(); fillStroke(g, lin(g, 0, cy - R * 0.4, 0, cy + R * 0.4, '#a8f0d8', '#6fd6b4')); };
    shell(R * 0.28, false);
    g.beginPath(); g.roundRect(-R * 0.86, -R * 0.1, R * 1.72, R * 0.34, R * 0.17); fillStroke(g, lin(g, 0, -R * 0.1, 0, R * 0.24, '#fff', '#ffd6e6'));
    shell(-R * 0.12, true);
    face(g, 0, -R * 0.3, R * 0.62);
    gloss(g, -R * 0.45, -R * 0.55, R * 0.2, R * 0.07, -0.4);
  },
  // 3 cookie
  (g) => {
    g.beginPath(); for (let i = 0; i <= 56; i++) { const a = (i / 56) * TAU; const r = R * 0.95 + Math.sin(a * 7) * R * 0.03; g[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); } g.closePath();
    fillStroke(g, lin(g, -R, -R, R, R, '#f2bd78', '#d9964e'));
    for (const [x, y, s] of [[-0.55, -0.45, 1], [0.5, -0.5, 0.9], [0.62, 0.15, 1], [-0.62, 0.1, 0.85], [-0.25, 0.65, 0.9], [0.3, 0.68, 1], [0.05, -0.72, 0.8]]) { g.save(); g.translate(R * x, R * y); g.rotate(x * 3); g.beginPath(); g.roundRect(-R * 0.1 * s, -R * 0.08 * s, R * 0.22 * s, R * 0.17 * s, 4); g.fillStyle = '#6a3a22'; g.fill(); g.restore(); }
    face(g, 0, R * 0.05, R * 0.78);
    gloss(g, -R * 0.4, -R * 0.55, R * 0.2, R * 0.08, -0.6, 0.4);
  },
  // 4 cake slice
  (g) => {
    g.beginPath(); g.roundRect(-R * 0.8, -R * 0.3, R * 1.5, R * 1.05, 8); fillStroke(g, lin(g, 0, -R * 0.3, 0, R * 0.75, '#ffe2b0', '#f7c680'));
    g.beginPath(); g.rect(-R * 0.8, R * 0.12, R * 1.5, R * 0.16); g.fillStyle = '#fff'; g.fill(); g.lineWidth = 2; g.strokeStyle = OUT; g.stroke();
    g.beginPath(); g.moveTo(-R * 0.8, -R * 0.3); g.lineTo(-R * 0.4, -R * 0.62); g.lineTo(R * 1.05, -R * 0.62); g.lineTo(R * 0.7, -R * 0.3); g.closePath(); fillStroke(g, '#ffc4dc');
    g.beginPath(); g.moveTo(R * 0.7, -R * 0.3); g.lineTo(R * 1.05, -R * 0.62); g.lineTo(R * 1.05, R * 0.4); g.lineTo(R * 0.7, R * 0.75); g.closePath(); fillStroke(g, '#e8b070');
    g.fillStyle = '#ff4c68'; g.beginPath(); g.moveTo(0.1 * R, -R * 0.62); g.bezierCurveTo(-R * 0.3, -R * 0.78, -R * 0.35, -R * 1.2, R * 0.1, -R * 1.05); g.bezierCurveTo(R * 0.5, -R * 1.2, R * 0.45, -R * 0.78, R * 0.1, -R * 0.62); fillStroke(g, '#ff4c68', 2.6);
    g.fillStyle = '#ffe97a'; for (const [x, y] of [[0, -0.95], [0.18, -0.85], [0.05, -0.8], [0.28, -1.0]]) { g.beginPath(); g.arc(R * x, R * y, 1.8, 0, TAU); g.fill(); }
    g.fillStyle = '#4ab04a'; g.beginPath(); g.moveTo(R * 0.1, -R * 1.0); g.lineTo(R * -0.05, -R * 1.18); g.lineTo(R * 0.12, -R * 1.1); g.lineTo(R * 0.26, -R * 1.2); g.closePath(); g.fill();
    face(g, -R * 0.05, R * 0.34, R * 0.55);
    gloss(g, -R * 0.55, -R * 0.1, R * 0.1, R * 0.05, -0.6, 0.5);
  },
  // 5 wrapped candy
  (g) => {
    g.fillStyle = '#ff9ec7';
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * R * 0.5, 0); g.lineTo(s * R * 1.0, -R * 0.5); g.lineTo(s * R * 0.9, 0); g.lineTo(s * R * 1.0, R * 0.5); g.closePath(); fillStroke(g, lin(g, s * R * 0.5, 0, s * R, 0, '#ffb6d4', '#ff7fb2'), 2.8); }
    ell(g, 0, 0, R * 0.62, R * 0.55); fillStroke(g, '#ffe3f0');
    g.save(); ell(g, 0, 0, R * 0.62, R * 0.55); g.clip(); g.strokeStyle = '#ff6fa8'; g.lineWidth = 9; for (let i = -4; i < 5; i++) { g.beginPath(); g.moveTo(i * 17 - 30, -R); g.lineTo(i * 17 + 30, R); g.stroke(); } g.restore();
    ell(g, 0, 0, R * 0.62, R * 0.55); g.lineWidth = 3.2; g.strokeStyle = OUT; g.stroke();
    face(g, 0, R * 0.02, R * 0.6);
    gloss(g, -R * 0.3, -R * 0.35, R * 0.16, R * 0.07, -0.6, 0.7);
  },
  // 6 lollipop
  (g) => {
    g.beginPath(); g.roundRect(-R * 0.06, R * 0.35, R * 0.12, R * 0.68, 4); fillStroke(g, '#fff6e8', 2.6);
    g.beginPath(); g.arc(0, -R * 0.22, R * 0.74, 0, TAU); fillStroke(g, '#fff0b0');
    g.save(); g.beginPath(); g.arc(0, -R * 0.22, R * 0.74, 0, TAU); g.clip();
    g.strokeStyle = '#ff6fa5'; g.lineWidth = R * 0.17; g.lineCap = 'round'; g.beginPath();
    for (let i = 0; i <= 90; i++) { const a = i * 0.2; const r = (i / 90) * R * 0.72; g[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, -R * 0.22 + Math.sin(a) * r); } g.stroke(); g.restore();
    g.beginPath(); g.arc(0, -R * 0.22, R * 0.74, 0, TAU); g.lineWidth = 3.2; g.strokeStyle = OUT; g.stroke();
    g.beginPath(); g.arc(0, -R * 0.22, R * 0.28, 0, TAU); g.fillStyle = '#fff6f9'; g.fill();
    face(g, 0, -R * 0.22, R * 0.34);
    gloss(g, -R * 0.4, -R * 0.65, R * 0.2, R * 0.08, -0.7, 0.7);
  },
  // 7 ice cream
  (g) => {
    g.beginPath(); g.moveTo(-R * 0.46, R * 0.02); g.lineTo(R * 0.46, R * 0.02); g.lineTo(0, R * 1.05); g.closePath(); fillStroke(g, lin(g, 0, 0, 0, R, '#f2c27a', '#d89a50'));
    g.save(); g.clip(); g.strokeStyle = 'rgba(150,90,40,.5)'; g.lineWidth = 2.4; for (let i = -4; i < 5; i++) { g.beginPath(); g.moveTo(i * 14 - 30, 0); g.lineTo(i * 14 + 30, R * 1.1); g.moveTo(i * 14 + 30, 0); g.lineTo(i * 14 - 30, R * 1.1); g.stroke(); } g.restore();
    g.beginPath(); g.moveTo(-R * 0.46, R * 0.02); g.lineTo(R * 0.46, R * 0.02); g.lineTo(0, R * 1.05); g.closePath(); g.lineWidth = 3.2; g.strokeStyle = OUT; g.stroke();
    g.beginPath(); g.arc(0, -R * 0.52, R * 0.42, 0, TAU); fillStroke(g, lin(g, 0, -R * 0.9, 0, -R * 0.1, '#b6f4de', '#7fdcc0'));
    g.beginPath(); g.arc(0, -R * 0.06, R * 0.58, Math.PI * 0.95, Math.PI * 0.05, true); g.lineTo(R * 0.52, R * 0.12); g.quadraticCurveTo(R * 0.4, R * 0.28, R * 0.3, R * 0.14); g.quadraticCurveTo(R * 0.15, R * 0.3, 0, R * 0.12); g.quadraticCurveTo(-R * 0.18, R * 0.3, -R * 0.3, R * 0.12); g.quadraticCurveTo(-R * 0.42, R * 0.26, -R * 0.55, R * 0.1); g.closePath();
    fillStroke(g, lin(g, 0, -R * 0.6, 0, R * 0.3, '#ffb4d2', '#ff86b6'));
    g.beginPath(); g.arc(R * 0.04, -R * 0.98, R * 0.14, 0, TAU); fillStroke(g, '#ff4c68', 2.4);
    face(g, 0, -R * 0.1, R * 0.62);
    gloss(g, -R * 0.35, -R * 0.62, R * 0.15, R * 0.06, -0.6, 0.7);
  },
  // 8 chocolate bar
  (g) => {
    g.save(); g.rotate(-0.2);
    g.beginPath(); g.roundRect(-R * 0.62, -R * 0.92, R * 1.24, R * 1.84, 9); fillStroke(g, lin(g, 0, -R, 0, R, '#a4623e', '#7a4028'));
    g.strokeStyle = 'rgba(40,15,5,.5)'; g.lineWidth = 2.6; for (const y of [-0.46, 0.0]) { g.beginPath(); g.moveTo(-R * 0.62, R * y); g.lineTo(R * 0.62, R * y); g.stroke(); } g.beginPath(); g.moveTo(0, -R * 0.92); g.lineTo(0, R * 0.2); g.stroke();
    g.fillStyle = 'rgba(255,255,255,.2)'; for (const [x, y] of [[-0.62, -0.92], [0, -0.92], [-0.62, -0.46], [0, -0.46]]) { g.beginPath(); g.roundRect(R * x + 4, R * y + 4, R * 0.55, R * 0.12, 3); g.fill(); }
    g.beginPath(); g.moveTo(-R * 0.66, R * 0.22); for (let i = 0; i <= 6; i++) g.lineTo(-R * 0.66 + i * R * 0.22, R * 0.22 + (i % 2 ? R * 0.1 : 0)); g.lineTo(R * 0.66, R * 0.96); g.lineTo(-R * 0.66, R * 0.96); g.closePath(); fillStroke(g, lin(g, 0, R * 0.2, 0, R, '#ffc0da', '#ff8cb8'));
    g.fillStyle = '#fff'; g.font = '900 20px Tajawal, system-ui'; g.textAlign = 'center'; g.fillText('♥', 0, R * 0.78);
    face(g, 0, -R * 0.2, R * 0.55);
    g.restore();
  },
  // 9 strawberry
  (g) => {
    g.beginPath(); g.moveTo(0, R * 1.02); g.bezierCurveTo(-R * 1.1, R * 0.4, -R * 0.95, -R * 0.75, 0, -R * 0.6); g.bezierCurveTo(R * 0.95, -R * 0.75, R * 1.1, R * 0.4, 0, R * 1.02); g.closePath();
    fillStroke(g, lin(g, -R, -R * 0.6, R, R, '#ff7a8a', '#f0405a'));
    g.fillStyle = '#ffe97a'; for (const [x, y] of [[-0.55, -0.1], [0.55, -0.1], [-0.35, 0.5], [0.35, 0.5], [0, 0.85], [-0.62, 0.3], [0.62, 0.3], [0, -0.38]]) { ell(g, R * x, R * y, 2.4, 3.6); g.fill(); }
    g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * TAU) / 10 + 0.15; const r = i % 2 ? R * 0.22 : R * 0.62; g.lineTo(Math.cos(a) * r, -R * 0.62 + Math.sin(a) * r * 0.6); } g.closePath(); fillStroke(g, '#58c05a', 2.6);
    face(g, 0, R * 0.2, R * 0.6);
    gloss(g, -R * 0.55, -R * 0.2, R * 0.12, R * 0.22, 0.4, 0.5);
  },
  // 10 pudding
  (g) => {
    g.beginPath(); g.moveTo(-R * 0.8, R * 0.95); g.lineTo(-R * 0.62, -R * 0.4); g.lineTo(R * 0.62, -R * 0.4); g.lineTo(R * 0.8, R * 0.95); g.closePath(); fillStroke(g, lin(g, 0, -R * 0.4, 0, R, '#ffe488', '#f6c850'));
    g.beginPath(); g.moveTo(-R * 0.66, -R * 0.38); g.bezierCurveTo(-R * 0.7, -R * 0.78, R * 0.7, -R * 0.78, R * 0.66, -R * 0.38); g.lineTo(R * 0.6, -R * 0.2); g.quadraticCurveTo(R * 0.52, -R * 0.02, R * 0.42, -R * 0.24); g.quadraticCurveTo(R * 0.2, -R * 0.1, 0, -R * 0.26); g.quadraticCurveTo(-R * 0.25, -R * 0.02, -R * 0.4, -R * 0.24); g.lineTo(-R * 0.6, -R * 0.2); g.closePath(); fillStroke(g, lin(g, 0, -R * 0.8, 0, -R * 0.2, '#c8742c', '#9a5018'), 2.8);
    g.beginPath(); g.arc(0, -R * 0.86, R * 0.15, 0, TAU); fillStroke(g, '#ff4c68', 2.4);
    face(g, 0, R * 0.3, R * 0.62);
    gloss(g, -R * 0.4, -R * 0.55, R * 0.18, R * 0.06, -0.3, 0.7);
  },
  // 11 heart cookie
  (g) => {
    const heart = (k) => { g.beginPath(); g.moveTo(0, R * 0.95 * k); g.bezierCurveTo(-R * 1.25 * k, R * 0.2 * k, -R * 0.95 * k, -R * 0.95 * k, 0, -R * 0.4 * k); g.bezierCurveTo(R * 0.95 * k, -R * 0.95 * k, R * 1.25 * k, R * 0.2 * k, 0, R * 0.95 * k); g.closePath(); };
    heart(1); fillStroke(g, lin(g, 0, -R, 0, R, '#f4c080', '#dc9a58'));
    heart(0.82); fillStroke(g, lin(g, 0, -R, 0, R, '#ffb6d2', '#ff86b4'), 2.4);
    g.save(); heart(0.82); g.clip(); g.strokeStyle = '#fff'; g.lineWidth = 3.4; g.setLineDash([7, 6]); heart(0.64); g.stroke(); g.restore();
    g.fillStyle = '#fff'; for (const [x, y] of [[-0.5, -0.3], [0.5, -0.3]]) { sparkle(g, R * x, R * y, 5); }
    face(g, 0, R * 0.12, R * 0.58);
    gloss(g, -R * 0.5, -R * 0.45, R * 0.15, R * 0.07, -0.7, 0.7);
  },
];

/** Returns { bright: [canvas], dim: [canvas] } for every kind. */
export function buildSprites() {
  const bright = []; const dim = [];
  for (let k = 0; k < DRAW.length; k++) {
    const raw = document.createElement('canvas'); raw.width = raw.height = SP;
    const g = raw.getContext('2d'); g.translate(SP / 2, SP / 2 - 2); DRAW[k](g);
    const b = document.createElement('canvas'); b.width = b.height = SP;
    const bg = b.getContext('2d');
    bg.shadowColor = 'rgba(110,50,80,.38)'; bg.shadowBlur = 7; bg.shadowOffsetY = 5; bg.drawImage(raw, 0, 0);
    bright.push(b);
    const d = document.createElement('canvas'); d.width = d.height = SP;
    const dg = d.getContext('2d'); dg.drawImage(b, 0, 0);
    dg.globalCompositeOperation = 'source-atop'; dg.fillStyle = 'rgba(96,60,110,.46)'; dg.fillRect(0, 0, SP, SP);
    dim.push(d);
  }
  return { bright, dim };
}

/** One small sweet icon for the tray / effects: same as bright. */
export const SPRITE_FILL = 0.74; // body diameter / canvas size

// ---------- the bakery background ----------
function scallop(g, cx, cy, r, n, bump) { g.beginPath(); for (let i = 0; i < n; i++) { const a0 = (i / n) * TAU; const a1 = ((i + 1) / n) * TAU; const am = (a0 + a1) / 2; g.arc(cx + Math.cos(am) * r, cy + Math.sin(am) * r, bump, a0 + Math.PI * 0.5 + Math.PI * 0.0 - 0.001, a1 + Math.PI * 1.5, false); } g.closePath(); }

export function drawBackground(g, W, H, plate, layout, board = 'shop') {
  // Phase 2E Batch F: the board itself changes per chapter. 'shop' is the
  // original bakery look below; the other three boards have their own scenes.
  if (board === 'ramadan') return drawRamadan(g, W, H, plate, layout);
  if (board === 'mawled') return drawMawled(g, W, H, plate, layout);
  if (board === 'picnic') return drawPicnic(g, W, H, plate, layout);
  // wall
  const wallH = Math.max(plate.cy - plate.r * 0.55, H * 0.2);
  g.fillStyle = lin(g, 0, 0, 0, wallH, '#fff4e6', '#ffe0ec'); g.fillRect(0, 0, W, wallH + 40);
  g.fillStyle = 'rgba(255,255,255,.55)';
  for (let y = 0, row = 0; y < wallH + 40; y += 30, row++) for (let x = (row % 2) * 20; x < W + 20; x += 40) { g.beginPath(); g.arc(x, y, 5, 0, TAU); g.fill(); }
  // mint wainscot
  g.fillStyle = lin(g, 0, wallH - 30, 0, wallH + 30, '#c4f1de', '#a2e2c8'); g.fillRect(0, wallH - 8, W, 48);
  g.fillStyle = 'rgba(255,255,255,.5)'; for (let x = 0; x < W; x += 36) g.fillRect(x, wallH - 8, 3, 48);
  // wooden table
  const ty = wallH + 30;
  g.fillStyle = lin(g, 0, ty, 0, H, '#f3cf9c', '#d9a56a'); g.fillRect(0, ty, W, H - ty);
  g.strokeStyle = 'rgba(140,90,40,.22)'; g.lineWidth = 2;
  for (let y = ty + 38; y < H; y += 44) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  const r = seeded(5); for (let i = 0; i < 40; i++) { const x = r() * W; const y = ty + 20 + r() * (H - ty - 20); g.beginPath(); g.moveTo(x, y); g.lineTo(x + 20 + r() * 40, y + (r() - 0.5) * 4); g.stroke(); }
  g.fillStyle = '#fff4d8'; g.fillRect(0, ty - 4, W, 6);
  g.fillStyle = 'rgba(120,70,30,.35)'; g.fillRect(0, ty + 2, W, 4);
  // bunting
  const cols = ['#ff8fb8', '#8fe3c8', '#ffe08a', '#b7a0ff'];
  const n = Math.max(6, Math.round(W / 56));
  g.strokeStyle = '#c47a9a'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(0, layout.buntY); g.quadraticCurveTo(W / 2, layout.buntY + 26, W, layout.buntY); g.stroke();
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n; const x = t * W; const y = layout.buntY + 26 * 2 * t * (1 - t);
    g.beginPath(); g.moveTo(x - 15, y); g.lineTo(x + 15, y); g.lineTo(x, y + 28); g.closePath(); fillStroke(g, cols[i % 4], 2);
  }
  // doily under the plate
  const { cx, cy, r: pr } = plate;
  g.save(); g.shadowColor = 'rgba(90,50,30,.3)'; g.shadowBlur = 14; g.shadowOffsetY = 6;
  scallop(g, cx, cy, pr * 1.13, 28, pr * 0.08); g.fillStyle = '#fffaf2'; g.fill(); g.restore();
  g.strokeStyle = 'rgba(214,150,170,.65)'; g.lineWidth = 2;
  for (let i = 0; i < 28; i++) { const a = (i / 28) * TAU; g.beginPath(); g.arc(cx + Math.cos(a) * pr * 1.07, cy + Math.sin(a) * pr * 1.07, pr * 0.04, 0, TAU); g.stroke(); }
  g.beginPath(); g.arc(cx, cy, pr * 1.02, 0, TAU); g.setLineDash([6, 5]); g.stroke(); g.setLineDash([]);
  // plate
  g.save(); g.shadowColor = 'rgba(90,40,50,.35)'; g.shadowBlur = 16; g.shadowOffsetY = 8;
  g.beginPath(); g.arc(cx, cy, pr, 0, TAU); g.fillStyle = lin(g, 0, cy - pr, 0, cy + pr, '#ffc2da', '#ff9cc2'); g.fill(); g.restore();
  g.beginPath(); g.arc(cx, cy, pr, 0, TAU); g.lineWidth = 3; g.strokeStyle = 'rgba(160,70,110,.6)'; g.stroke();
  g.beginPath(); g.arc(cx, cy, pr * 0.9, 0, TAU); g.fillStyle = lin(g, 0, cy - pr, 0, cy + pr, '#fffdfb', '#f6eaf0'); g.fill();
  g.lineWidth = 2; g.strokeStyle = 'rgba(214,150,180,.7)'; g.stroke();
  g.beginPath(); g.arc(cx, cy, pr * 0.8, 0, TAU); g.strokeStyle = 'rgba(214,150,180,.35)'; g.stroke();
  g.fillStyle = 'rgba(255,170,200,.35)'; for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; sparkle(g, cx + Math.cos(a) * pr * 0.95, cy + Math.sin(a) * pr * 0.95, 0.5 * 0 + 5, 'rgba(255,255,255,.8)'); }
}

// ---------- chapter boards (Phase 2E Batch F) ----------
// Each scene is drawn once into the cached background (level start / resize) —
// never per frame. The sweets and their positions do not change; only the
// board, frame and dressing around them do.

// Chapter 2: Ramadan nights — a copper tray on a red Ramadan table, lanterns above.
function drawRamadan(g, W, H, plate, layout) {
  const { cx, cy, r: pr } = plate;
  // night wall
  const wallH = Math.max(cy - pr * 0.55, H * 0.2);
  g.fillStyle = lin(g, 0, 0, 0, wallH + 40, '#241d4e', '#4a2a6e'); g.fillRect(0, 0, W, wallH + 40);
  const rs = seeded(9);
  g.fillStyle = 'rgba(255,244,190,.85)';
  for (let i = 0; i < 46; i++) { const x = rs() * W; const y = rs() * (wallH + 20); g.beginPath(); g.arc(x, y, 1 + rs() * 1.6, 0, TAU); g.fill(); }
  for (let i = 0; i < 7; i++) sparkle(g, rs() * W, rs() * wallH, 4 + rs() * 3, 'rgba(255,240,170,.9)');
  // crescent moon, top corner
  const mx = W * 0.88; const my = wallH * 0.34; const mr = Math.min(W, H) * 0.055;
  g.save(); g.shadowColor = 'rgba(255,220,120,.8)'; g.shadowBlur = 18;
  g.fillStyle = '#ffd968'; g.beginPath(); g.arc(mx, my, mr, 0, TAU); g.fill();
  g.shadowBlur = 0; g.fillStyle = '#33255e'; g.beginPath(); g.arc(mx + mr * 0.45, my - mr * 0.25, mr * 0.85, 0, TAU); g.fill(); g.restore();
  sparkle(g, mx - mr * 1.5, my + mr * 0.9, mr * 0.32, '#ffe9a0');
  // Ramadan tablecloth
  const ty = wallH + 30;
  g.fillStyle = lin(g, 0, ty, 0, H, '#8c2434', '#5e1424'); g.fillRect(0, ty, W, H - ty);
  g.fillStyle = 'rgba(255,196,86,.16)';
  const step = 46;
  for (let y = ty + 24, row = 0; y < H + step; y += step, row++) for (let x = (row % 2) * (step / 2); x < W + step; x += step) { g.save(); g.translate(x, y); g.rotate(Math.PI / 4); g.fillRect(-6, -6, 12, 12); g.restore(); }
  g.fillStyle = '#f4b942'; g.fillRect(0, ty - 4, W, 5);
  g.fillStyle = 'rgba(0,0,0,.3)'; g.fillRect(0, ty + 1, W, 4);
  // lantern string instead of bunting
  const cols = ['#ffb84d', '#ff8a5c', '#ffd968', '#7ae0c8'];
  const n = 5;
  g.strokeStyle = '#1c1440'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(0, layout.buntY); g.quadraticCurveTo(W / 2, layout.buntY + 26, W, layout.buntY); g.stroke();
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n; const x = t * W; const y = layout.buntY + 26 * 2 * t * (1 - t);
    const s = Math.min(W, H) * 0.028; const col = cols[i % cols.length];
    g.strokeStyle = '#1c1440'; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + s * 0.7); g.stroke();
    g.save(); g.shadowColor = col; g.shadowBlur = 16;
    g.beginPath(); g.moveTo(x - s * 0.34, y + s * 0.7); g.lineTo(x + s * 0.34, y + s * 0.7); g.lineTo(x + s * 0.55, y + s * 1.5); g.lineTo(x + s * 0.3, y + s * 2.3); g.lineTo(x - s * 0.3, y + s * 2.3); g.lineTo(x - s * 0.55, y + s * 1.5); g.closePath();
    g.fillStyle = col; g.fill(); g.restore();
    g.lineWidth = 2; g.strokeStyle = 'rgba(60,30,10,.75)'; g.stroke();
    g.fillStyle = 'rgba(255,255,230,.85)'; g.beginPath(); g.ellipse(x, y + s * 1.5, s * 0.2, s * 0.42, 0, 0, TAU); g.fill();
    g.strokeStyle = '#1c1440'; g.beginPath(); g.moveTo(x, y + s * 2.3); g.lineTo(x, y + s * 2.75); g.stroke();
  }
  // patterned under-cloth, then the copper tray
  g.save(); g.shadowColor = 'rgba(0,0,0,.45)'; g.shadowBlur = 14; g.shadowOffsetY = 6;
  g.beginPath(); g.arc(cx, cy, pr * 1.14, 0, TAU); g.fillStyle = '#3d2a6e'; g.fill(); g.restore();
  g.fillStyle = 'rgba(244,185,66,.5)';
  for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; g.beginPath(); g.arc(cx + Math.cos(a) * pr * 1.08, cy + Math.sin(a) * pr * 1.08, pr * 0.016, 0, TAU); g.fill(); }
  g.save(); g.shadowColor = 'rgba(0,0,0,.4)'; g.shadowBlur = 16; g.shadowOffsetY = 8;
  g.beginPath(); g.arc(cx, cy, pr, 0, TAU); g.fillStyle = lin(g, 0, cy - pr, 0, cy + pr, '#f2b25c', '#b26a24'); g.fill(); g.restore();
  g.beginPath(); g.arc(cx, cy, pr, 0, TAU); g.lineWidth = 3; g.strokeStyle = 'rgba(120,60,10,.65)'; g.stroke();
  g.beginPath(); g.arc(cx, cy, pr * 0.965, 0, TAU); g.lineWidth = 2; g.strokeStyle = 'rgba(255,230,170,.75)'; g.stroke();
  g.beginPath(); g.arc(cx, cy, pr * 0.9, 0, TAU); g.fillStyle = lin(g, 0, cy - pr, 0, cy + pr, '#ffe9bd', '#f3cd8d'); g.fill();
  g.lineWidth = 2; g.strokeStyle = 'rgba(160,95,30,.55)'; g.stroke();
  g.beginPath(); g.arc(cx, cy, pr * 0.8, 0, TAU); g.strokeStyle = 'rgba(160,95,30,.3)'; g.stroke();
  // a small crescent engraved on the rim
  g.fillStyle = 'rgba(150,85,25,.55)';
  g.beginPath(); g.arc(cx, cy - pr * 0.945, pr * 0.045, 0, TAU); g.fill();
  g.fillStyle = '#f6c877'; g.beginPath(); g.arc(cx + pr * 0.02, cy - pr * 0.955, pr * 0.038, 0, TAU); g.fill();
}

// Chapter 3: a Mawled festival stall — sweets on a wooden stall shelf, striped awning above.
function drawMawled(g, W, H, plate, layout) {
  const { cx, cy, r: pr } = plate;
  // warm wall + stall counter
  const wallH = Math.max(cy - pr * 0.55, H * 0.2);
  g.fillStyle = lin(g, 0, 0, 0, wallH + 40, '#fff0d4', '#ffd9ae'); g.fillRect(0, 0, W, wallH + 40);
  const ty = wallH + 30;
  g.fillStyle = lin(g, 0, ty, 0, H, '#c98d54', '#a06a34'); g.fillRect(0, ty, W, H - ty);
  g.strokeStyle = 'rgba(110,64,20,.25)'; g.lineWidth = 2;
  for (let y = ty + 40; y < H; y += 46) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  g.fillStyle = '#8a5426'; g.fillRect(0, ty - 4, W, 7);
  // back shelves with sweet jars (behind / above the board)
  const jarCols = ['#ff8fb8', '#8fe3c8', '#ffe08a', '#b7a0ff', '#8fd0ff', '#ffb38a'];
  const jr = seeded(21);
  for (const sy of [wallH * 0.52, wallH * 0.86]) {
    g.fillStyle = '#a06a34'; g.fillRect(W * 0.04, sy + 16, W * 0.92, 7);
    g.fillStyle = 'rgba(90,50,15,.35)'; g.fillRect(W * 0.04, sy + 23, W * 0.92, 4);
    for (let x = W * 0.07; x < W * 0.9; x += W * 0.085) {
      const jw = W * 0.045; const jh = 26 + jr() * 8; const col = jarCols[Math.floor(jr() * jarCols.length)];
      g.beginPath(); g.roundRect(x, sy + 16 - jh, jw, jh, 5); g.fillStyle = 'rgba(255,252,244,.92)'; g.fill(); g.lineWidth = 1.6; g.strokeStyle = 'rgba(120,70,30,.5)'; g.stroke();
      g.beginPath(); g.roundRect(x + 3, sy + 16 - jh * 0.62, jw - 6, jh * 0.5, 4); g.fillStyle = col; g.fill();
      g.beginPath(); g.roundRect(x + jw * 0.18, sy + 16 - jh - 5, jw * 0.64, 6, 3); g.fillStyle = '#c0392b'; g.fill();
    }
  }
  // striped festival awning across the top
  const ah = layout.buntY + 40;
  const stripeW = Math.max(26, W / 18);
  g.save(); g.beginPath(); g.rect(0, 0, W, ah); g.clip();
  for (let x = 0, i = 0; x < W + stripeW; x += stripeW, i++) { g.fillStyle = i % 2 ? '#fff6ea' : '#e2483d'; g.fillRect(x, 0, stripeW, ah); }
  g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(0, ah - 10, W, 10);
  g.restore();
  for (let x = 0, i = 0; x < W + stripeW; x += stripeW, i++) { g.beginPath(); g.arc(x + stripeW / 2, ah, stripeW / 2, 0, Math.PI); g.fillStyle = i % 2 ? '#fff6ea' : '#e2483d'; g.fill(); g.lineWidth = 1.6; g.strokeStyle = 'rgba(120,40,30,.4)'; g.stroke(); }
  // the wooden stall shelf (the board)
  const bw = pr * 1.14; const bh = pr * 1.05; const bx = cx - bw; const by = cy - bh;
  g.save(); g.shadowColor = 'rgba(70,35,5,.45)'; g.shadowBlur = 16; g.shadowOffsetY = 9;
  g.beginPath(); g.roundRect(bx, by, bw * 2, bh * 2, 14); g.fillStyle = lin(g, 0, by, 0, by + bh * 2, '#d89a58', '#b57a3c'); g.fill(); g.restore();
  g.save(); g.beginPath(); g.roundRect(bx, by, bw * 2, bh * 2, 14); g.clip();
  g.strokeStyle = 'rgba(110,64,20,.4)'; g.lineWidth = 2.4;
  const planks = 5;
  for (let i = 1; i < planks; i++) { const y = by + (bh * 2 * i) / planks; g.beginPath(); g.moveTo(bx, y); g.lineTo(bx + bw * 2, y); g.stroke(); }
  const wr = seeded(4);
  g.strokeStyle = 'rgba(110,64,20,.18)';
  for (let i = 0; i < 26; i++) { const x = bx + wr() * bw * 2; const y = by + wr() * bh * 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 24 + wr() * 42, y + (wr() - 0.5) * 4); g.stroke(); }
  // worn lighter patch where the sweets sit
  g.beginPath(); g.ellipse(cx, cy, pr * 0.94, pr * 0.9, 0, 0, TAU); g.fillStyle = 'rgba(255,236,200,.5)'; g.fill();
  g.restore();
  g.beginPath(); g.roundRect(bx, by, bw * 2, bh * 2, 14); g.lineWidth = 5; g.strokeStyle = '#8a5426'; g.stroke();
  // front lip of the shelf
  g.beginPath(); g.roundRect(bx - 4, by + bh * 2 - 4, bw * 2 + 8, 15, 7); g.fillStyle = lin(g, 0, by + bh * 2, 0, by + bh * 2 + 15, '#b57a3c', '#8a5426'); g.fill(); g.lineWidth = 2; g.strokeStyle = 'rgba(80,45,10,.6)'; g.stroke();
  // corner nails
  g.fillStyle = '#5e3a14';
  for (const [nx, ny] of [[bx + 13, by + 13], [bx + bw * 2 - 13, by + 13], [bx + 13, by + bh * 2 - 13], [bx + bw * 2 - 13, by + bh * 2 - 13]]) { g.beginPath(); g.arc(nx, ny, 3.4, 0, TAU); g.fill(); g.fillStyle = '#caa06a'; g.beginPath(); g.arc(nx - 1, ny - 1, 1.3, 0, TAU); g.fill(); g.fillStyle = '#5e3a14'; }
}

// Chapter 4: a family picnic — sweets on a red gingham cloth over the grass.
function drawPicnic(g, W, H, plate, layout) {
  const { cx, cy, r: pr } = plate;
  // sky strip
  const skyH = Math.max(cy - pr * 1.02, H * 0.14);
  g.fillStyle = lin(g, 0, 0, 0, skyH, '#aee3ff', '#d8f4ff'); g.fillRect(0, 0, W, skyH);
  // sun + clouds
  const sx = W * 0.1; const sy = skyH * 0.42; const sr = Math.min(W, H) * 0.045;
  g.save(); g.shadowColor = 'rgba(255,200,60,.85)'; g.shadowBlur = 20; g.fillStyle = '#ffd23e'; g.beginPath(); g.arc(sx, sy, sr, 0, TAU); g.fill(); g.restore();
  g.fillStyle = 'rgba(255,255,255,.92)';
  for (const [clx, cly, cls] of [[W * 0.42, skyH * 0.4, 1], [W * 0.74, skyH * 0.55, 0.75], [W * 0.9, skyH * 0.3, 0.6]]) {
    g.beginPath(); g.ellipse(clx, cly, sr * 1.25 * cls, sr * 0.52 * cls, 0, 0, TAU); g.ellipse(clx + sr * 0.8 * cls, cly + sr * 0.12 * cls, sr * 0.8 * cls, sr * 0.4 * cls, 0, 0, TAU); g.ellipse(clx - sr * 0.8 * cls, cly + sr * 0.14 * cls, sr * 0.7 * cls, sr * 0.36 * cls, 0, 0, TAU); g.fill();
  }
  // grass
  g.fillStyle = lin(g, 0, skyH, 0, H, '#8ed07a', '#5da244'); g.fillRect(0, skyH, W, H - skyH);
  const gr = seeded(13);
  g.strokeStyle = 'rgba(46,110,32,.5)'; g.lineWidth = 2; g.lineCap = 'round';
  for (let i = 0; i < 130; i++) { const x = gr() * W; const y = skyH + 8 + gr() * (H - skyH - 8); const hgt = 6 + gr() * 8; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + (gr() - 0.5) * 5, y - hgt * 0.6, x + (gr() - 0.5) * 8, y - hgt); g.stroke(); }
  // tiny flowers away from the cloth
  for (let i = 0; i < 22; i++) {
    const x = gr() * W; const y = skyH + 14 + gr() * (H - skyH - 14);
    if (Math.hypot(x - cx, y - cy) < pr * 1.3) continue;
    g.fillStyle = i % 2 ? '#fff' : '#ffd968';
    for (let p = 0; p < 5; p++) { const a = (p / 5) * TAU; g.beginPath(); g.arc(x + Math.cos(a) * 3.4, y + Math.sin(a) * 3.4, 2.2, 0, TAU); g.fill(); }
    g.fillStyle = '#ff9e3e'; g.beginPath(); g.arc(x, y, 1.9, 0, TAU); g.fill();
  }
  // the gingham picnic cloth (the board): scalloped round cloth with red checks
  g.save(); g.shadowColor = 'rgba(30,70,20,.4)'; g.shadowBlur = 15; g.shadowOffsetY = 7;
  scallop(g, cx, cy, pr * 1.12, 26, pr * 0.075); g.fillStyle = '#fffaf2'; g.fill(); g.restore();
  g.save(); scallop(g, cx, cy, pr * 1.12, 26, pr * 0.075); g.clip();
  const band = pr / 3.4;
  g.fillStyle = 'rgba(232,72,61,.34)';
  for (let x = cx - pr * 1.2; x < cx + pr * 1.2; x += band * 2) g.fillRect(x, cy - pr * 1.25, band, pr * 2.5);
  for (let y = cy - pr * 1.2; y < cy + pr * 1.2; y += band * 2) g.fillRect(cx - pr * 1.25, y, pr * 2.5, band);
  g.beginPath(); g.arc(cx, cy, pr * 0.92, 0, TAU); g.fillStyle = 'rgba(255,255,255,.28)'; g.fill();
  g.restore();
  scallop(g, cx, cy, pr * 1.12, 26, pr * 0.075); g.lineWidth = 2.4; g.strokeStyle = 'rgba(200,50,45,.65)'; g.stroke();
  g.beginPath(); g.arc(cx, cy, pr * 0.98, 0, TAU); g.setLineDash([7, 6]); g.lineWidth = 2; g.strokeStyle = 'rgba(200,50,45,.5)'; g.stroke(); g.setLineDash([]);
}
