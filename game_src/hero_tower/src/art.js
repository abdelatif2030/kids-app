// «برج الأبطال» art, all drawn in code (2D canvas): the sky, the tower rooms, the little knight, the foes, the bosses and the treasures.
// Cartoon style: round shapes, a dark outline, big friendly eyes. No blood: a defeated foe pops into stars.
const OL = '#2b1b3d';
const TAU = Math.PI * 2;

function ell(g, x, y, rx, ry, fill, lw = 0, rot = 0) {
  g.beginPath(); g.ellipse(x, y, Math.max(0.01, rx), Math.max(0.01, ry), rot, 0, TAU);
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (lw) { g.lineWidth = lw; g.strokeStyle = OL; g.stroke(); }
}
function rr(g, x, y, w, h, r, fill, lw = 0) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (lw) { g.lineWidth = lw; g.strokeStyle = OL; g.stroke(); }
}
export function poly(g, pts, fill, lw = 0) {
  g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath();
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (lw) { g.lineWidth = lw; g.strokeStyle = OL; g.lineJoin = 'round'; g.stroke(); }
}
function eyes(g, x, y, d, r, look = 0) {
  for (const sx of [-1, 1]) {
    ell(g, x + sx * d, y, r, r * 1.15, '#fff', r * 0.28);
    ell(g, x + sx * d + look * r * 0.35, y + r * 0.1, r * 0.5, r * 0.6, OL);
    ell(g, x + sx * d + look * r * 0.35 - r * 0.15, y - r * 0.1, r * 0.17, r * 0.17, '#fff');
  }
}

export const THEMES = {
  castle: { sky: ['#3a2a78', '#b05a9a', '#ffb878'], brick: '#c08a64', brick2: '#a87050', wood: '#8a5a34', glow: '#ffd27a', far: '#5a3a8a' },
  ice: { sky: ['#4a78c8', '#9ad0f0', '#eaf8ff'], brick: '#a8c0d8', brick2: '#8aa8c4', wood: '#6a7a98', glow: '#bff0ff', far: '#7a98c8' },
  fire: { sky: ['#2a1030', '#a02838', '#ff9a40'], brick: '#8a4a48', brick2: '#6e3a3a', wood: '#5a3028', glow: '#ff9a3a', far: '#5a1a30' },
};

/** The sky behind the tower (painted once per size and theme). [h] is the height of the world the camera has risen (0 = the ground). */
export function paintSky(w, h, theme) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const T = THEMES[theme] || THEMES.castle;
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, T.sky[0]); gr.addColorStop(0.55, T.sky[1]); gr.addColorStop(1, T.sky[2]);
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  // a big soft sun / moon and far hills
  g.fillStyle = 'rgba(255,255,255,0.18)'; g.beginPath(); g.arc(w * 0.78, h * 0.3, h * 0.13, 0, TAU); g.fill();
  g.fillStyle = T.far;
  g.beginPath(); g.moveTo(0, h);
  for (let x = 0; x <= w; x += w / 14) g.lineTo(x, h * (0.78 + 0.05 * Math.sin(x * 0.011) + 0.03 * Math.sin(x * 0.027)));
  g.lineTo(w, h); g.closePath(); g.fill();
  return c;
}

export function drawCloud(g, x, y, s) {
  g.fillStyle = 'rgba(255,255,255,0.8)';
  for (const [dx, dy, r] of [[0, 0, 0.5], [0.5, -0.15, 0.62], [1.05, 0, 0.5], [0.55, 0.12, 0.55]]) { g.beginPath(); g.arc(x + dx * s, y + dy * s, r * s * 0.6, 0, TAU); g.fill(); }
}

// ---- the tower -------------------------------------------------------------------------------------------------------

/** One room: x,y = top-left, w,h. [exitSide] 'L' | 'R' | null = where the ladder up to the next floor stands; [entrySide] = where the hatch
 *  the hero climbs through is (the ladders zig-zag from floor to floor, like the owner's video); [n] the floor number (for variety). */
export function drawRoom(g, x, y, w, h, theme, n, time, exitSide, entrySide) {
  const T = THEMES[theme] || THEMES.castle;
  // wall
  g.fillStyle = T.brick; g.fillRect(x, y, w, h);
  g.strokeStyle = T.brick2; g.lineWidth = Math.max(1, h * 0.012);
  const bh = h / 7;
  for (let r = 0; r < 7; r++) {
    g.beginPath(); g.moveTo(x, y + r * bh); g.lineTo(x + w, y + r * bh); g.stroke();
    const off = (r % 2) * (bh * 1.4);
    for (let bx = x + off; bx < x + w; bx += bh * 2.8) { g.beginPath(); g.moveTo(bx, y + r * bh); g.lineTo(bx, y + (r + 1) * bh); g.stroke(); }
  }
  // arched window with the sky colours
  const wx = x + w * 0.5, wy = y + h * 0.42;
  g.fillStyle = T.glow; g.beginPath(); g.moveTo(wx - h * 0.2, wy + h * 0.28); g.lineTo(wx - h * 0.2, wy); g.arc(wx, wy, h * 0.2, Math.PI, 0); g.lineTo(wx + h * 0.2, wy + h * 0.28); g.closePath(); g.fill();
  g.lineWidth = h * 0.03; g.strokeStyle = T.wood; g.stroke();
  // torches
  for (const fx of [0.22, 0.78]) {
    const tx = x + w * fx, ty = y + h * 0.4;
    rr(g, tx - h * 0.02, ty, h * 0.04, h * 0.14, h * 0.01, T.wood);
    const f = 1 + 0.12 * Math.sin(time * 9 + fx * 20);
    ell(g, tx, ty - h * 0.03, h * 0.045 * f, h * 0.07 * f, '#ffb830'); ell(g, tx, ty - h * 0.02, h * 0.025 * f, h * 0.045 * f, '#fff2a0');
    g.fillStyle = 'rgba(255,210,120,0.12)'; g.beginPath(); g.arc(tx, ty - h * 0.03, h * 0.3, 0, TAU); g.fill();
  }
  // bunting on the festive floors
  if (n % 2 === 0) {
    g.strokeStyle = '#5a3a20'; g.lineWidth = h * 0.012; g.beginPath(); g.moveTo(x + w * 0.1, y + h * 0.1); g.quadraticCurveTo(x + w * 0.5, y + h * 0.3, x + w * 0.9, y + h * 0.1); g.stroke();
    const cols = ['#e84a4a', '#ffd23a', '#4ab8e8', '#6ad84a'];
    for (let i = 1; i < 9; i++) { const f = i / 9; const bx = x + w * (0.1 + 0.8 * f); const by = y + h * (0.1 + 0.4 * f * (1 - f) * 2 * 0.5 + 0.0) + h * 0.02; poly(g, [[bx - h * 0.03, by], [bx + h * 0.03, by], [bx, by + h * 0.07]], cols[i % 4]); }
  }
  // the floor boards
  g.fillStyle = T.wood; g.fillRect(x, y + h * 0.9, w, h * 0.1);
  g.fillStyle = 'rgba(255,220,170,0.25)'; g.fillRect(x, y + h * 0.9, w, h * 0.02);
  g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 1;
  for (let bx = x; bx < x + w; bx += h * 0.5) { g.beginPath(); g.moveTo(bx, y + h * 0.9); g.lineTo(bx, y + h); g.stroke(); }
  // the stone sides of the tower
  g.fillStyle = T.brick2; g.fillRect(x - h * 0.06, y, h * 0.06, h); g.fillRect(x + w, y, h * 0.06, h);
  const ladder = (lx, top, bottom) => {
    g.strokeStyle = '#d8a060'; g.lineWidth = h * 0.025;
    g.beginPath(); g.moveTo(lx - h * 0.06, top); g.lineTo(lx - h * 0.06, bottom); g.moveTo(lx + h * 0.06, top); g.lineTo(lx + h * 0.06, bottom); g.stroke();
    for (let yy = bottom - h * 0.05; yy > top; yy -= h * 0.13) { g.beginPath(); g.moveTo(lx - h * 0.06, yy); g.lineTo(lx + h * 0.06, yy); g.stroke(); }
  };
  // the hatch in the floor (where the hero came up) and the ladder to the floor above
  if (entrySide) {
    const hx = x + w * (entrySide === 'R' ? 0.93 : 0.07);
    g.fillStyle = '#2a1a22'; g.fillRect(hx - h * 0.1, y + h * 0.9, h * 0.2, h * 0.1);
    ladder(hx, y + h * 0.9, y + h);
  }
  if (exitSide) ladder(x + w * (exitSide === 'R' ? 0.93 : 0.07), y + h * 0.02, y + h * 0.9);
}

/** The stone base of the tower under floor 1: the castle gate, then the grass. [y] top of the base, [h] its height. */
export function drawBase(g, x, y, w, h, theme) {
  const T = THEMES[theme] || THEMES.castle;
  g.fillStyle = T.brick2; g.fillRect(x - h * 0.2, y, w + h * 0.4, h);
  g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(x - h * 0.2, y, w + h * 0.4, h * 0.08);
  g.strokeStyle = 'rgba(0,0,0,0.22)'; g.lineWidth = 1;
  for (let bx = x - h * 0.2; bx < x + w + h * 0.2; bx += h * 0.7) { g.beginPath(); g.moveTo(bx, y); g.lineTo(bx, y + h); g.stroke(); }
  const dx = x + w * 0.5, dw = h * 0.55;
  g.fillStyle = '#6a3a22'; g.beginPath(); g.moveTo(dx - dw / 2, y + h); g.lineTo(dx - dw / 2, y + h * 0.4); g.arc(dx, y + h * 0.4, dw / 2, Math.PI, 0); g.lineTo(dx + dw / 2, y + h); g.closePath(); g.fill();
  g.lineWidth = h * 0.06; g.strokeStyle = '#3a2418'; g.stroke();
  g.strokeStyle = '#3a2418'; g.lineWidth = h * 0.04; g.beginPath(); g.moveTo(dx, y + h * 0.1); g.lineTo(dx, y + h); g.stroke();
}

// ---- the little knight -----------------------------------------------------------------------------------------------

/** Feet at (x, y); s = height. pose: { swing 0..1, sad 0..1, flip }. */
export function drawHero(g, x, y, s, time, pose = {}) {
  const bob = Math.sin(time * 3.2) * s * 0.015;
  const fl = pose.flip ? -1 : 1;
  g.save(); g.translate(x, y + bob); g.scale(fl, 1);
  const lw = Math.max(1.5, s * 0.03);
  // legs
  rr(g, -s * 0.15, -s * 0.2, s * 0.13, s * 0.2, s * 0.04, '#3a5ab8', lw); rr(g, s * 0.02, -s * 0.2, s * 0.13, s * 0.2, s * 0.04, '#3a5ab8', lw);
  // cape
  poly(g, [[-s * 0.1, -s * 0.55], [-s * 0.3, -s * 0.2 + Math.sin(time * 4) * s * 0.02], [s * 0.0, -s * 0.2]], '#c83a4a', lw);
  // body
  rr(g, -s * 0.2, -s * 0.58, s * 0.4, s * 0.4, s * 0.1, '#4a8ae8', lw);
  rr(g, -s * 0.06, -s * 0.52, s * 0.12, s * 0.28, s * 0.03, '#ffd23a');
  // shield on the back arm
  ell(g, -s * 0.2, -s * 0.38, s * 0.12, s * 0.15, '#e8e8f0', lw);
  ell(g, -s * 0.2, -s * 0.38, s * 0.05, s * 0.07, '#e84a4a');
  // head with a helmet
  ell(g, 0, -s * 0.78, s * 0.23, s * 0.21, '#ffd8b0', lw);
  g.beginPath(); g.arc(0, -s * 0.82, s * 0.245, Math.PI * 1.02, Math.PI * 1.98); g.closePath(); g.fillStyle = '#6aa0f0'; g.fill(); g.lineWidth = lw; g.strokeStyle = OL; g.stroke();
  rr(g, -s * 0.03, -s * 1.12, s * 0.06, s * 0.12, s * 0.03, '#fff', lw); // plume
  ell(g, 0, -s * 1.1, s * 0.07, s * 0.05, '#fff', lw);
  eyes(g, s * 0.02, -s * 0.77, s * 0.085, s * 0.045, 1);
  // mouth
  g.beginPath(); if (pose.sad) g.arc(s * 0.03, -s * 0.64, s * 0.04, Math.PI * 1.1, Math.PI * 1.9); else g.arc(s * 0.03, -s * 0.68, s * 0.045, 0.1, Math.PI - 0.1);
  g.lineWidth = lw * 0.8; g.strokeStyle = OL; g.stroke();
  // sword arm
  const a = -0.9 + (pose.swing ?? 0) * 2.2;
  g.save(); g.translate(s * 0.18, -s * 0.42); g.rotate(a);
  rr(g, -s * 0.03, -s * 0.02, s * 0.06, s * 0.2, s * 0.03, '#ffd8b0', lw * 0.8);
  rr(g, -s * 0.02, -s * 0.52, s * 0.045, s * 0.5, s * 0.015, '#e8f0ff', lw * 0.8);
  rr(g, -s * 0.09, -s * 0.03, s * 0.18, s * 0.04, s * 0.02, '#ffd23a', lw * 0.8);
  g.restore();
  g.restore();
}

// ---- the foes --------------------------------------------------------------------------------------------------------

/** Feet at (x, y); s = height. [hit] 0..1 shrinks and spins the foe as it pops. */
export function drawFoe(g, kind, x, y, s, time, face = 1, hit = 0) {
  if (hit >= 1) return;
  const bob = Math.sin(time * 3 + x * 0.05) * s * 0.02;
  g.save(); g.translate(x, y + bob); g.scale(face * (1 - hit * 0.5), 1 - hit * 0.5); g.rotate(hit * 0.6);
  const lw = Math.max(1.5, s * 0.03);
  if (kind === 'slime') {
    const sq = 1 + Math.sin(time * 4 + x) * 0.06;
    g.beginPath(); g.moveTo(-s * 0.4, 0); g.bezierCurveTo(-s * 0.45, -s * 0.5 * sq, s * 0.45, -s * 0.5 * sq, s * 0.4, 0); g.closePath();
    g.fillStyle = '#5ad86a'; g.fill(); g.lineWidth = lw; g.strokeStyle = OL; g.stroke();
    ell(g, -s * 0.12, -s * 0.32, s * 0.06, s * 0.04, 'rgba(255,255,255,0.6)');
    eyes(g, 0, -s * 0.2, s * 0.1, s * 0.055, -1);
  } else if (kind === 'goblin') {
    rr(g, -s * 0.12, -s * 0.2, s * 0.1, s * 0.2, s * 0.03, '#4aa83a', lw); rr(g, s * 0.02, -s * 0.2, s * 0.1, s * 0.2, s * 0.03, '#4aa83a', lw);
    rr(g, -s * 0.18, -s * 0.5, s * 0.36, s * 0.34, s * 0.1, '#8a5a34', lw);
    poly(g, [[-s * 0.3, -s * 0.66], [-s * 0.14, -s * 0.62], [-s * 0.18, -s * 0.74]], '#5ac84a', lw); poly(g, [[s * 0.3, -s * 0.66], [s * 0.14, -s * 0.62], [s * 0.18, -s * 0.74]], '#5ac84a', lw);
    ell(g, 0, -s * 0.66, s * 0.2, s * 0.18, '#5ac84a', lw);
    eyes(g, 0, -s * 0.68, s * 0.08, s * 0.05, -1);
    g.beginPath(); g.arc(0, -s * 0.6, s * 0.05, 0.1, Math.PI - 0.1); g.lineWidth = lw * 0.8; g.strokeStyle = OL; g.stroke();
    rr(g, -s * 0.34, -s * 0.52, s * 0.06, s * 0.34, s * 0.02, '#c8903a', lw); ell(g, -s * 0.31, -s * 0.56, s * 0.08, s * 0.08, '#c8903a', lw);
  } else if (kind === 'skeleton') {
    rr(g, -s * 0.1, -s * 0.22, s * 0.06, s * 0.22, s * 0.02, '#f4f0e8', lw); rr(g, s * 0.04, -s * 0.22, s * 0.06, s * 0.22, s * 0.02, '#f4f0e8', lw);
    rr(g, -s * 0.16, -s * 0.52, s * 0.32, s * 0.3, s * 0.08, '#f4f0e8', lw);
    g.strokeStyle = OL; g.lineWidth = lw * 0.7; for (let k = 0; k < 3; k++) { g.beginPath(); g.moveTo(-s * 0.12, -s * (0.46 - k * 0.07)); g.lineTo(s * 0.12, -s * (0.46 - k * 0.07)); g.stroke(); }
    ell(g, 0, -s * 0.72, s * 0.2, s * 0.19, '#f4f0e8', lw);
    g.beginPath(); g.arc(0, -s * 0.78, s * 0.215, Math.PI * 1.05, Math.PI * 1.95); g.closePath(); g.fillStyle = '#e84a4a'; g.fill(); g.lineWidth = lw; g.strokeStyle = OL; g.stroke();
    eyes(g, 0, -s * 0.7, s * 0.08, s * 0.055, -1);
    rr(g, -s * 0.3, -s * 0.5, s * 0.04, s * 0.34, s * 0.015, '#9aa8b8', lw);
  } else if (kind === 'imp') {
    ell(g, 0, -s * 0.32, s * 0.2, s * 0.26, '#e8504a', lw);
    poly(g, [[-s * 0.14, -s * 0.52], [-s * 0.08, -s * 0.76], [-s * 0.02, -s * 0.54]], '#ffd23a', lw); poly(g, [[s * 0.14, -s * 0.52], [s * 0.08, -s * 0.76], [s * 0.02, -s * 0.54]], '#ffd23a', lw);
    ell(g, -s * 0.28 + Math.sin(time * 6) * s * 0.03, -s * 0.4, s * 0.12, s * 0.07, 'rgba(120,30,60,0.9)', lw); ell(g, s * 0.28 - Math.sin(time * 6) * s * 0.03, -s * 0.4, s * 0.12, s * 0.07, 'rgba(120,30,60,0.9)', lw);
    eyes(g, 0, -s * 0.4, s * 0.075, s * 0.05, -1);
    g.beginPath(); g.arc(0, -s * 0.28, s * 0.07, 0.1, Math.PI - 0.1); g.fillStyle = '#7a1a2a'; g.fill(); g.lineWidth = lw * 0.8; g.strokeStyle = OL; g.stroke();
  } else { // orc
    rr(g, -s * 0.16, -s * 0.22, s * 0.13, s * 0.22, s * 0.04, '#3a8a4a', lw); rr(g, s * 0.03, -s * 0.22, s * 0.13, s * 0.22, s * 0.04, '#3a8a4a', lw);
    rr(g, -s * 0.26, -s * 0.62, s * 0.52, s * 0.44, s * 0.12, '#5a3a44', lw);
    ell(g, -s * 0.28, -s * 0.58, s * 0.11, s * 0.09, '#9aa0b0', lw); ell(g, s * 0.28, -s * 0.58, s * 0.11, s * 0.09, '#9aa0b0', lw);
    ell(g, 0, -s * 0.8, s * 0.22, s * 0.2, '#4aa85a', lw);
    poly(g, [[-s * 0.2, -s * 0.9], [-s * 0.3, -s * 1.02], [-s * 0.1, -s * 0.96]], '#f4f0e8', lw); poly(g, [[s * 0.2, -s * 0.9], [s * 0.3, -s * 1.02], [s * 0.1, -s * 0.96]], '#f4f0e8', lw);
    eyes(g, 0, -s * 0.82, s * 0.085, s * 0.05, -1);
    poly(g, [[-s * 0.1, -s * 0.7], [-s * 0.07, -s * 0.64], [-s * 0.04, -s * 0.7]], '#fff'); poly(g, [[s * 0.1, -s * 0.7], [s * 0.07, -s * 0.64], [s * 0.04, -s * 0.7]], '#fff');
    rr(g, -s * 0.42, -s * 0.72, s * 0.06, s * 0.5, s * 0.02, '#8a5a34', lw); poly(g, [[-s * 0.45, -s * 0.8], [-s * 0.3, -s * 0.76], [-s * 0.3, -s * 0.62], [-s * 0.45, -s * 0.58]], '#b8c0d0', lw);
  }
  g.restore();
}

// ---- the bosses ------------------------------------------------------------------------------------------------------

export function drawBoss(g, kind, x, y, s, time, hit = 0) {
  if (hit >= 1) return;
  const lw = Math.max(2, s * 0.025);
  g.save(); g.translate(x, y + Math.sin(time * 2) * s * 0.012); g.scale(1 - hit * 0.4, 1 - hit * 0.4); g.rotate(hit * 0.4);
  if (kind === 'troll') {
    rr(g, -s * 0.3, -s * 0.3, s * 0.22, s * 0.3, s * 0.06, '#5a6a5a', lw); rr(g, s * 0.08, -s * 0.3, s * 0.22, s * 0.3, s * 0.06, '#5a6a5a', lw);
    ell(g, 0, -s * 0.52, s * 0.42, s * 0.34, '#7a8a78', lw);
    ell(g, 0, -s * 0.46, s * 0.26, s * 0.2, '#98a898');
    ell(g, -s * 0.46, -s * 0.5, s * 0.15, s * 0.14, '#6a7a68', lw); ell(g, s * 0.46, -s * 0.5, s * 0.15, s * 0.14, '#6a7a68', lw);
    ell(g, 0, -s * 0.9, s * 0.28, s * 0.25, '#86a086', lw);
    poly(g, [[-s * 0.22, -s * 1.05], [-s * 0.3, -s * 1.28], [-s * 0.1, -s * 1.1]], '#f4f0e8', lw); poly(g, [[s * 0.22, -s * 1.05], [s * 0.3, -s * 1.28], [s * 0.1, -s * 1.1]], '#f4f0e8', lw);
    eyes(g, 0, -s * 0.93, s * 0.11, s * 0.065, -1);
    rr(g, -s * 0.13, -s * 0.78, s * 0.26, s * 0.09, s * 0.04, '#5a3a3a', lw);
    for (const sx of [-1, 1]) poly(g, [[sx * s * 0.07, -s * 0.78], [sx * s * 0.05, -s * 0.84], [sx * s * 0.03, -s * 0.78]], '#fff');
    rr(g, -s * 0.66, -s * 0.95, s * 0.09, s * 0.7, s * 0.03, '#8a5a34', lw); ell(g, -s * 0.62, -s * 1.0, s * 0.18, s * 0.16, '#9a6a3c', lw);
  } else if (kind === 'sorcerer') {
    poly(g, [[-s * 0.32, 0], [-s * 0.2, -s * 0.8], [s * 0.2, -s * 0.8], [s * 0.32, 0]], '#6a3a9a', lw);
    poly(g, [[-s * 0.12, 0], [-s * 0.07, -s * 0.78], [s * 0.07, -s * 0.78], [s * 0.12, 0]], '#8a58c0');
    ell(g, 0, -s * 0.88, s * 0.18, s * 0.17, '#ffd8b0', lw);
    poly(g, [[-s * 0.3, -s * 0.95], [0, -s * 1.55], [s * 0.3, -s * 0.95]], '#4a2a7a', lw);
    rr(g, -s * 0.34, -s * 0.99, s * 0.68, s * 0.07, s * 0.03, '#4a2a7a', lw);
    eyes(g, 0, -s * 0.9, s * 0.07, s * 0.04, -1);
    poly(g, [[-s * 0.1, -s * 0.8], [0, -s * 0.6], [s * 0.1, -s * 0.8]], '#e8e8f0'); // beard
    rr(g, s * 0.34, -s * 1.1, s * 0.05, s * 1.1, s * 0.02, '#8a5a34', lw);
    const gl = 0.7 + 0.3 * Math.sin(time * 5);
    ell(g, s * 0.365, -s * 1.15, s * 0.12 * gl, s * 0.12 * gl, '#e86aff', lw); ell(g, s * 0.365, -s * 1.15, s * 0.05, s * 0.05, '#fff');
  } else { // dragon
    const flap = Math.sin(time * 4) * 0.2;
    poly(g, [[-s * 0.1, -s * 0.9], [-s * 0.8, -s * (1.3 + flap)], [-s * 0.6, -s * 0.6]], '#c8403a', lw); poly(g, [[s * 0.1, -s * 0.9], [s * 0.8, -s * (1.3 + flap)], [s * 0.6, -s * 0.6]], '#c8403a', lw);
    ell(g, 0, -s * 0.55, s * 0.45, s * 0.4, '#e8503a', lw); ell(g, 0, -s * 0.45, s * 0.28, s * 0.28, '#ffd27a');
    ell(g, 0, -s * 1.05, s * 0.3, s * 0.26, '#e8503a', lw);
    poly(g, [[-s * 0.2, -s * 1.2], [-s * 0.26, -s * 1.42], [-s * 0.08, -s * 1.28]], '#f4f0e8', lw); poly(g, [[s * 0.2, -s * 1.2], [s * 0.26, -s * 1.42], [s * 0.08, -s * 1.28]], '#f4f0e8', lw);
    ell(g, -s * 0.05, -s * 0.97, s * 0.07, s * 0.05, '#7a1a1a'); ell(g, s * 0.05, -s * 0.97, s * 0.07, s * 0.05, '#7a1a1a');
    eyes(g, 0, -s * 1.1, s * 0.1, s * 0.055, -1);
    rr(g, -s * 0.55, -s * 0.15, s * 0.2, s * 0.15, s * 0.05, '#c8403a', lw); rr(g, s * 0.35, -s * 0.15, s * 0.2, s * 0.15, s * 0.05, '#c8403a', lw);
    const f = 0.5 + 0.5 * Math.sin(time * 9);
    ell(g, -s * 0.34, -s * 0.9, s * 0.12 * (0.7 + f * 0.5), s * 0.08, 'rgba(255,170,40,0.85)');
  }
  g.restore();
}

// ---- the treasures ---------------------------------------------------------------------------------------------------

export function drawItem(g, type, x, y, s, time, open = false, label = '') {
  const lw = Math.max(1.5, s * 0.035);
  const bob = Math.sin(time * 3 + x) * s * 0.04;
  g.save(); g.translate(x, y + bob);
  g.fillStyle = 'rgba(255,240,150,0.18)'; g.beginPath(); g.arc(0, -s * 0.4, s * 0.55 + Math.sin(time * 4) * s * 0.03, 0, TAU); g.fill();
  if (type === 'sword') {
    g.save(); g.translate(0, -s * 0.4); g.rotate(-0.5);
    rr(g, -s * 0.06, -s * 0.42, s * 0.12, s * 0.62, s * 0.04, '#e8f0ff', lw); poly(g, [[-s * 0.06, -s * 0.42], [0, -s * 0.55], [s * 0.06, -s * 0.42]], '#e8f0ff', lw);
    rr(g, -s * 0.18, s * 0.17, s * 0.36, s * 0.07, s * 0.03, '#ffd23a', lw); rr(g, -s * 0.04, s * 0.24, s * 0.08, s * 0.16, s * 0.03, '#a8683a', lw);
    g.restore();
  } else if (type === 'crystal') {
    poly(g, [[0, -s * 0.85], [s * 0.3, -s * 0.55], [s * 0.22, -s * 0.12], [0, 0], [-s * 0.22, -s * 0.12], [-s * 0.3, -s * 0.55]], '#b86aff', lw);
    poly(g, [[0, -s * 0.85], [s * 0.1, -s * 0.5], [0, 0], [-s * 0.1, -s * 0.5]], '#e0b0ff');
    ell(g, -s * 0.12, -s * 0.55, s * 0.04, s * 0.08, 'rgba(255,255,255,0.7)');
  } else if (type === 'mult') { // a gold coin with ×N inside
    const sq = Math.abs(Math.cos(time * 2.2 + x * 0.1));
    g.save(); g.translate(0, -s * 0.38); g.scale(0.55 + 0.45 * sq, 1);
    ell(g, 0, 0, s * 0.3, s * 0.3, '#ffc83a', lw); ell(g, 0, 0, s * 0.22, s * 0.22, '#ffe27a', lw * 0.6);
    g.restore();
    g.fillStyle = '#7a4a00'; g.font = `900 ${s * 0.26}px Tajawal, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    if (sq > 0.5) g.fillText(label, 0, -s * 0.36);
  } else if (type === 'potion') {
    rr(g, -s * 0.07, -s * 0.78, s * 0.14, s * 0.18, s * 0.03, '#d8d8e8', lw); rr(g, -s * 0.09, -s * 0.84, s * 0.18, s * 0.08, s * 0.03, '#a8683a', lw);
    ell(g, 0, -s * 0.33, s * 0.28, s * 0.3, '#e8506a', lw); ell(g, 0, -s * 0.3, s * 0.2, s * 0.2, '#ff98a8');
    ell(g, -s * 0.08, -s * 0.4, s * 0.04, s * 0.06, 'rgba(255,255,255,0.8)');
    for (let k = 0; k < 3; k++) ell(g, Math.sin(time * 3 + k) * s * 0.08, -s * (0.25 + ((time * 0.6 + k * 0.33) % 1) * 0.3), s * 0.025, s * 0.025, 'rgba(255,255,255,0.8)');
  } else if (type === 'key') {
    ell(g, 0, -s * 0.62, s * 0.18, s * 0.18, '#ffd23a', lw); ell(g, 0, -s * 0.62, s * 0.07, s * 0.07, '#7a5a2a');
    rr(g, -s * 0.04, -s * 0.46, s * 0.08, s * 0.42, s * 0.02, '#ffd23a', lw); rr(g, s * 0.04, -s * 0.2, s * 0.14, s * 0.06, s * 0.02, '#ffd23a', lw); rr(g, s * 0.04, -s * 0.1, s * 0.1, s * 0.06, s * 0.02, '#ffd23a', lw);
  } else if (type === 'chest') {
    rr(g, -s * 0.34, -s * 0.34, s * 0.68, s * 0.34, s * 0.05, '#a8683a', lw);
    if (open) { rr(g, -s * 0.34, -s * 0.74, s * 0.68, s * 0.22, s * 0.05, '#c88848', lw); ell(g, 0, -s * 0.42, s * 0.26, s * 0.12, '#ffd23a'); } else { rr(g, -s * 0.34, -s * 0.55, s * 0.68, s * 0.25, s * 0.1, '#c88848', lw); }
    rr(g, -s * 0.04, -s * 0.4, s * 0.08, s * 0.14, s * 0.02, '#ffd23a', lw);
    g.strokeStyle = '#ffd23a'; g.lineWidth = s * 0.03; g.beginPath(); g.moveTo(-s * 0.2, -s * 0.34); g.lineTo(-s * 0.2, 0); g.moveTo(s * 0.2, -s * 0.34); g.lineTo(s * 0.2, 0); g.stroke();
  }
  g.restore();
}

/** A power label: a rounded pill with a sword icon for foes, or a plain label for treasure. [tone] 'green' | 'red' | 'gold' | 'blue'. */
export function drawBubble(g, text, x, y, s, tone, icon = true) {
  const fill = tone === 'green' ? '#2fa84a' : tone === 'red' ? '#d83a3a' : tone === 'gold' ? '#e8a020' : tone === 'purple' ? '#6a3ac8' : '#3a78d8';
  g.font = `900 ${s * 0.3}px Tajawal, system-ui, sans-serif`;
  const tw = g.measureText(text).width;
  const w = tw + s * (icon ? 0.62 : 0.4);
  const h = s * 0.38;
  rr(g, x - w / 2, y - h / 2, w, h, h / 2, fill, Math.max(1.5, s * 0.03));
  g.fillStyle = 'rgba(255,255,255,0.28)'; g.beginPath(); g.ellipse(x, y - h * 0.22, w * 0.42, h * 0.16, 0, 0, TAU); g.fill();
  g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = s * 0.05; g.strokeStyle = 'rgba(0,0,0,0.45)';
  const tx = x + (icon ? s * 0.13 : 0);
  g.strokeText(text, tx, y + s * 0.02); g.fillText(text, tx, y + s * 0.02);
  if (icon) {
    g.save(); g.translate(x - w / 2 + s * 0.22, y); g.rotate(0.7);
    rr(g, -s * 0.025, -s * 0.13, s * 0.05, s * 0.2, s * 0.015, '#f4f8ff'); rr(g, -s * 0.07, s * 0.05, s * 0.14, s * 0.035, s * 0.01, '#ffd23a');
    g.restore();
  }
}

/** A burst of little stars (a foe popping). [k] 0..1. */
export function drawPoof(g, x, y, s, k) {
  g.save(); g.translate(x, y);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + k * 2;
    const d = s * (0.1 + 0.55 * k);
    g.fillStyle = i % 2 ? `rgba(255,224,90,${1 - k})` : `rgba(255,255,255,${1 - k})`;
    g.beginPath(); g.arc(Math.cos(a) * d, Math.sin(a) * d, s * 0.07 * (1 - k * 0.5), 0, TAU); g.fill();
  }
  g.restore();
}

export function drawFire(g, x, y, s, k, dir = -1) {
  for (let i = 0; i < 8; i++) {
    const f = (i + k * 3) / 9;
    ell(g, x + dir * s * f * 1.6, y + Math.sin(i * 2 + k * 6) * s * 0.05, s * (0.12 + f * 0.2), s * (0.1 + f * 0.14), `rgba(255,${180 - i * 14},40,${0.85 - f * 0.4})`);
  }
}
