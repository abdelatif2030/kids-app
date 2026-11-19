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

export function drawBackground(g, W, H, plate, layout) {
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
