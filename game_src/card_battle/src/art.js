// Everything is drawn in code: glossy neon robots, aliens, the base and the UFO. (x, y) is the point on the floor, s = pixels per unit.
const TAU = Math.PI * 2;

function rg(g, x, y, rx, ry, c1, c2) {
  const gr = g.createRadialGradient(x - rx * 0.35, y - ry * 0.4, Math.min(rx, ry) * 0.1, x, y, Math.max(rx, ry) * 1.15);
  gr.addColorStop(0, c1); gr.addColorStop(1, c2);
  return gr;
}
export function blob(g, x, y, rx, ry, c1, c2, line) {
  g.beginPath(); g.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), 0, 0, TAU);
  g.fillStyle = rg(g, x, y, rx, ry, c1, c2); g.fill();
  if (line) { g.lineWidth = Math.max(1, rx * 0.12); g.strokeStyle = line; g.stroke(); }
}
function rrect(g, x, y, w, h, r, c1, c2, line) {
  g.beginPath(); g.roundRect(x, y, w, h, r);
  const gr = g.createLinearGradient(x, y, x, y + h); gr.addColorStop(0, c1); gr.addColorStop(1, c2);
  g.fillStyle = gr; g.fill();
  if (line) { g.lineWidth = Math.max(1, w * 0.06); g.strokeStyle = line; g.stroke(); }
}
function gloss(g, x, y, rx, ry) { g.fillStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.ellipse(x - rx * 0.3, y - ry * 0.5, rx * 0.35, ry * 0.18, -0.4, 0, TAU); g.fill(); }
export function glow(g, x, y, r, col, a = 1) {
  g.save(); g.globalCompositeOperation = 'lighter'; g.globalAlpha = a;
  const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); g.restore();
}
function eye(g, x, y, r, dx = 0, dy = 0, col = '#fff') {
  g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill();
  g.fillStyle = '#16102e'; g.beginPath(); g.arc(x + dx * r * 0.4, y + dy * r * 0.4, r * 0.55, 0, TAU); g.fill();
  g.fillStyle = '#fff'; g.beginPath(); g.arc(x + dx * r * 0.4 - r * 0.2, y + dy * r * 0.4 - r * 0.2, r * 0.18, 0, TAU); g.fill();
}
export function bar(g, x, y, w, h, frac, col) {
  g.fillStyle = 'rgba(0,0,0,.6)'; g.fillRect(x - w / 2 - 1, y - 1, w + 2, h + 2);
  g.fillStyle = col; g.fillRect(x - w / 2, y, w * Math.max(0, Math.min(1, frac)), h);
}

const ROBOT = ['#c4f6ff', '#2a8cff', '#0a3a8a'];
const SIDE = { 0: '#35e0ff', 1: '#ff3fd0' };

/** Floor shadow + team ring. */
export function ground(g, x, y, R, side, pulse = 1) {
  g.fillStyle = 'rgba(0,0,0,.35)'; g.beginPath(); g.ellipse(x, y + R * 0.1, R * 1.05, R * 0.42, 0, 0, TAU); g.fill();
  g.save(); g.globalAlpha = 0.55 * pulse; g.strokeStyle = SIDE[side]; g.lineWidth = Math.max(1.5, R * 0.12);
  g.beginPath(); g.ellipse(x, y + R * 0.1, R * 1.15, R * 0.5, 0, 0, TAU); g.stroke(); g.restore();
}

/** o: { t, side, moving, atk (0..0.22), flash, ang, spawn (0..1 done) } */
export function drawUnit(g, kind, x, y, s, r, o) {
  const R = r * s;
  const t = o.t || 0;
  const sp = o.spawn === undefined ? 1 : o.spawn;
  g.save();
  if (sp < 1) { g.globalAlpha = 0.3 + 0.7 * sp; y -= (1 - sp) * R * 5; }
  const bob = o.moving ? Math.abs(Math.sin(t * 13)) * R * 0.28 : Math.sin(t * 3) * R * 0.05;
  const lunge = o.atk > 0 ? Math.sin((o.atk / 0.22) * Math.PI) : 0;
  switch (kind) {
    case 'spark': {
      const cy = y - R * 1.1 - bob;
      blob(g, x, cy, R * 1.05, R * 1.05 * (1 - lunge * 0.12), ROBOT[0], ROBOT[1], ROBOT[2]);
      rrect(g, x - R * 0.8, cy - R * 0.3, R * 1.6, R * 0.6, R * 0.3, '#12204a', '#05102a');
      glow(g, x - R * 0.32, cy, R * 0.45, '#35f0ff'); glow(g, x + R * 0.32, cy, R * 0.45, '#35f0ff');
      g.fillStyle = '#d8ffff'; g.beginPath(); g.arc(x - R * 0.32, cy, R * 0.14, 0, TAU); g.arc(x + R * 0.32, cy, R * 0.14, 0, TAU); g.fill();
      g.strokeStyle = ROBOT[2]; g.lineWidth = R * 0.1; g.beginPath(); g.moveTo(x, cy - R); g.lineTo(x, cy - R * 1.45); g.stroke();
      glow(g, x, cy - R * 1.5, R * 0.5, '#ffb030'); g.fillStyle = '#ffd36a'; g.beginPath(); g.arc(x, cy - R * 1.5, R * 0.17, 0, TAU); g.fill();
      gloss(g, x, cy, R, R);
      break;
    }
    case 'blaster': {
      const cy = y - R * 1.2 - bob;
      rrect(g, x - R * 0.75, cy - R * 0.3, R * 1.5, R * 1.35, R * 0.35, '#8de8ff', '#1f78d8', ROBOT[2]);
      blob(g, x, cy - R * 0.55, R * 0.7, R * 0.62, '#d8faff', '#3a98ff', ROBOT[2]);
      rrect(g, x - R * 0.5, cy - R * 0.72, R * 1.0, R * 0.38, R * 0.18, '#12204a', '#05102a');
      glow(g, x, cy - R * 0.53, R * 0.5, '#35f0ff'); g.fillStyle = '#d8ffff'; g.fillRect(x - R * 0.28, cy - R * 0.58, R * 0.56, R * 0.1);
      const kx = x + R * 0.95; const ky = cy + R * 0.2;
      rrect(g, kx - R * 0.2, ky - R * 0.9 + lunge * R * 0.15, R * 0.4, R * 1.1, R * 0.15, '#4a5a8a', '#1a2450', ROBOT[2]);
      if (lunge) glow(g, kx, ky - R * 1.0, R * 0.9, '#ffb030', lunge);
      g.fillStyle = '#ff9a2a'; g.beginPath(); g.arc(kx, ky - R * 0.9, R * 0.14, 0, TAU); g.fill();
      gloss(g, x, cy, R * 0.8, R);
      break;
    }
    case 'smash': {
      const cy = y - R * 1.15 - bob * 0.5;
      const fy = lunge * R * 0.9;
      for (const sx of [-1, 1]) blob(g, x + sx * R * 1.15, cy + R * 0.35 - fy, R * 0.5, R * 0.5, '#ffd28a', '#d86a1a', '#6a2a08');
      rrect(g, x - R * 0.95, cy - R * 0.7, R * 1.9, R * 1.75, R * 0.45, '#9ad4ff', '#2563c8', ROBOT[2]);
      blob(g, x, cy - R * 0.95, R * 0.5, R * 0.45, '#d8faff', '#4a9cff', ROBOT[2]);
      g.fillStyle = '#12204a'; g.fillRect(x - R * 0.35, cy - R * 1.06, R * 0.7, R * 0.22);
      glow(g, x, cy - R * 0.95, R * 0.45, '#ff5a3a'); g.fillStyle = '#ff7a4a'; g.fillRect(x - R * 0.28, cy - R * 1.02, R * 0.56, R * 0.09);
      glow(g, x, cy + R * 0.2, R * 0.65, '#ffb030', 0.9); g.fillStyle = '#ffe08a'; g.beginPath(); g.arc(x, cy + R * 0.2, R * 0.22, 0, TAU); g.fill();
      gloss(g, x, cy, R * 1.2, R * 1.2);
      break;
    }
    case 'swarm': {
      const cy = y - R * 2.1 - bob * 0.6 + Math.sin(t * 6 + x) * R * 0.2;
      blob(g, x, cy, R * 0.95, R * 0.95, '#d4fff0', '#26b8ff', ROBOT[2]);
      glow(g, x, cy, R * 0.55, '#35f0ff'); g.fillStyle = '#12204a'; g.beginPath(); g.arc(x, cy, R * 0.34, 0, TAU); g.fill();
      g.fillStyle = '#35f0ff'; g.beginPath(); g.arc(x, cy, R * 0.17, 0, TAU); g.fill();
      g.fillStyle = 'rgba(200,250,255,.5)';
      const w = Math.sin(t * 40) * 0.3;
      g.beginPath(); g.ellipse(x - R * 1.1, cy - R * 0.4, R * (0.8 + w), R * 0.16, -0.2, 0, TAU); g.ellipse(x + R * 1.1, cy - R * 0.4, R * (0.8 - w), R * 0.16, 0.2, 0, TAU); g.fill();
      break;
    }
    case 'turret': {
      blob(g, x, y - R * 0.2, R * 1.1, R * 0.5, '#8aa0d8', '#243064', ROBOT[2]);
      rrect(g, x - R * 0.8, y - R * 1.3, R * 1.6, R * 1.0, R * 0.3, '#7ad4ff', '#1f68c8', ROBOT[2]);
      blob(g, x, y - R * 1.35, R * 0.7, R * 0.6, '#d8faff', '#3a98ff', ROBOT[2]);
      const a = o.ang === undefined ? -Math.PI / 2 : o.ang;
      const bx = Math.cos(a) * R * 1.2; const by = Math.sin(a) * R * 0.7;
      g.strokeStyle = '#243064'; g.lineWidth = R * 0.38; g.lineCap = 'round';
      g.beginPath(); g.moveTo(x, y - R * 1.35); g.lineTo(x + bx, y - R * 1.35 + by); g.stroke();
      g.strokeStyle = '#35f0ff'; g.lineWidth = R * 0.12; g.beginPath(); g.moveTo(x, y - R * 1.35); g.lineTo(x + bx, y - R * 1.35 + by); g.stroke();
      if (lunge) glow(g, x + bx, y - R * 1.35 + by, R * 0.8, '#35f0ff', lunge);
      break;
    }
    case 'slime': {
      const q = 1 + Math.sin(t * (o.moving ? 11 : 4)) * 0.1 + lunge * 0.12;
      const ry = R * 0.95 * q; const rx = R * 1.15 / Math.sqrt(q);
      blob(g, x, y - ry - bob * 0.4, rx, ry, '#e2ff8a', '#25c85a', '#0c6a2a');
      eye(g, x - rx * 0.38, y - ry * 1.2, R * 0.3, 0, 0.3); eye(g, x + rx * 0.38, y - ry * 1.2, R * 0.3, 0, 0.3);
      g.strokeStyle = '#0c4a22'; g.lineWidth = R * 0.1; g.beginPath(); g.arc(x, y - ry * 0.95, R * 0.28, 0.15, Math.PI - 0.15); g.stroke();
      gloss(g, x, y - ry, rx, ry);
      break;
    }
    case 'bug': {
      const cy = y - R * 0.9 - bob * 0.5;
      g.strokeStyle = '#3a0a3a'; g.lineWidth = Math.max(1, R * 0.12);
      for (let i = -1; i <= 1; i++) for (const sx of [-1, 1]) { const l = Math.sin(t * 22 + i * 2 + sx) * R * 0.2; g.beginPath(); g.moveTo(x + sx * R * 0.6, cy + i * R * 0.35); g.lineTo(x + sx * R * 1.3, cy + i * R * 0.5 + l); g.stroke(); }
      g.fillStyle = 'rgba(255,200,255,.45)'; const fl = Math.sin(t * 45) * R * 0.25;
      g.beginPath(); g.ellipse(x - R * 0.8, cy - R * 0.9, R * 0.7, R * (0.3 + Math.abs(fl) * 0.6), -0.5, 0, TAU); g.ellipse(x + R * 0.8, cy - R * 0.9, R * 0.7, R * (0.3 + Math.abs(fl) * 0.6), 0.5, 0, TAU); g.fill();
      blob(g, x, cy, R * 1.0, R * 0.9, '#ffa0f0', '#c0209a', '#5a0a50');
      g.strokeStyle = '#5a0a50'; g.lineWidth = R * 0.1; g.beginPath(); g.moveTo(x, cy - R * 0.85); g.lineTo(x, cy + R * 0.85); g.stroke();
      eye(g, x - R * 0.35, cy - R * 0.2, R * 0.28, 0, 0.3, '#ffffa0'); eye(g, x + R * 0.35, cy - R * 0.2, R * 0.28, 0, 0.3, '#ffffa0');
      g.strokeStyle = '#5a0a50'; g.beginPath(); g.moveTo(x - R * 0.3, cy - R * 0.8); g.lineTo(x - R * 0.6, cy - R * 1.3); g.moveTo(x + R * 0.3, cy - R * 0.8); g.lineTo(x + R * 0.6, cy - R * 1.3); g.stroke();
      break;
    }
    case 'brute': {
      const cy = y - R * 1.05 - bob * 0.4;
      const fy = lunge * R * 0.9;
      for (const sx of [-1, 1]) blob(g, x + sx * R * 1.15, cy + R * 0.3 - fy, R * 0.52, R * 0.52, '#e0a0ff', '#7a24c8', '#3a0a6a');
      blob(g, x, cy, R * 1.05, R * 1.0, '#d8a0ff', '#6a20c0', '#2e0a60');
      g.fillStyle = '#f2e0ff'; g.beginPath(); g.moveTo(x - R * 0.75, cy - R * 0.7); g.lineTo(x - R * 0.45, cy - R * 1.4); g.lineTo(x - R * 0.25, cy - R * 0.8); g.moveTo(x + R * 0.75, cy - R * 0.7); g.lineTo(x + R * 0.45, cy - R * 1.4); g.lineTo(x + R * 0.25, cy - R * 0.8); g.fill();
      eye(g, x - R * 0.38, cy - R * 0.25, R * 0.25, 0, 0.3, '#ffee88'); eye(g, x + R * 0.38, cy - R * 0.25, R * 0.25, 0, 0.3, '#ffee88');
      g.strokeStyle = '#2e0a60'; g.lineWidth = R * 0.14; g.beginPath(); g.moveTo(x - R * 0.7, cy - R * 0.62); g.lineTo(x - R * 0.1, cy - R * 0.4); g.moveTo(x + R * 0.7, cy - R * 0.62); g.lineTo(x + R * 0.1, cy - R * 0.4); g.stroke();
      g.fillStyle = '#1a0838'; g.beginPath(); g.ellipse(x, cy + R * 0.38, R * 0.5, R * 0.22 + lunge * R * 0.15, 0, 0, TAU); g.fill();
      g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x - R * 0.35, cy + R * 0.26); g.lineTo(x - R * 0.2, cy + R * 0.5); g.lineTo(x - R * 0.1, cy + R * 0.26); g.moveTo(x + R * 0.35, cy + R * 0.26); g.lineTo(x + R * 0.2, cy + R * 0.5); g.lineTo(x + R * 0.1, cy + R * 0.26); g.fill();
      gloss(g, x, cy, R, R);
      break;
    }
    case 'spitter': {
      const q = 1 + Math.sin(t * 5) * 0.07;
      const ry = R * 1.15 * q;
      blob(g, x, y - ry - bob * 0.4, R * 0.95, ry, '#f4ff8a', '#2ac8a0', '#0a6a58');
      eye(g, x, y - ry * 1.55, R * 0.34, 0, 0.5);
      g.fillStyle = '#12403a'; g.beginPath(); g.ellipse(x, y - ry * 0.85, R * 0.42, R * (0.2 + lunge * 0.3), 0, 0, TAU); g.fill();
      if (lunge) glow(g, x, y - ry * 0.85, R * 0.7, '#b0ff60', lunge);
      g.fillStyle = '#7aff6a'; g.beginPath(); g.arc(x + R * 0.6, y - ry * 0.2 + ((t * 20) % 1) * R * 0.5, R * 0.1, 0, TAU); g.fill();
      gloss(g, x, y - ry, R * 0.95, ry);
      break;
    }
    default: break;
  }
  if (o.flash > 0) { g.globalCompositeOperation = 'lighter'; g.globalAlpha = Math.min(1, o.flash * 5) * 0.6; g.fillStyle = '#fff'; g.beginPath(); g.ellipse(x, y - R * 1.1, R * 1.1, R * 1.2, 0, 0, TAU); g.fill(); }
  g.restore();
}

/** The robot base: glowing dome on a round platform. */
export function drawPlayerBase(g, x, y, s, o) {
  const R = 1.25 * s; const t = o.t || 0;
  blob(g, x, y + R * 0.05, R * 1.35, R * 0.62, '#4a6ab8', '#141c4a', '#35e0ff');
  g.save(); g.globalAlpha = 0.5 + 0.3 * Math.sin(t * 3); g.strokeStyle = '#35e0ff'; g.lineWidth = R * 0.07; g.beginPath(); g.ellipse(x, y + R * 0.05, R * 1.1, R * 0.5, 0, 0, TAU); g.stroke(); g.restore();
  rrect(g, x - R * 0.85, y - R * 1.15, R * 1.7, R * 1.1, R * 0.3, '#9ad8ff', '#2a68c8', '#0a3a8a');
  g.beginPath(); g.ellipse(x, y - R * 1.15, R * 0.85, R * 0.75, 0, Math.PI, 0); g.fillStyle = rg(g, x, y - R * 1.3, R * 0.8, R * 0.8, '#e8fcff', '#3a98ff'); g.fill(); g.strokeStyle = '#0a3a8a'; g.lineWidth = R * 0.06; g.stroke();
  glow(g, x, y - R * 0.95, R * 0.9 + Math.sin(t * 4) * R * 0.08, '#35e0ff', 0.9);
  g.fillStyle = '#d8ffff'; g.beginPath(); g.arc(x, y - R * 0.95, R * 0.24, 0, TAU); g.fill();
  const a = o.ang === undefined ? -Math.PI / 2 : o.ang;
  g.strokeStyle = '#243064'; g.lineWidth = R * 0.26; g.lineCap = 'round'; g.beginPath(); g.moveTo(x, y - R * 1.75); g.lineTo(x + Math.cos(a) * R * 0.9, y - R * 1.75 + Math.sin(a) * R * 0.5); g.stroke();
  glow(g, x, y - R * 1.78, R * 0.4, '#ff3a7a');
  for (const sx of [-1, 1]) { glow(g, x + sx * R * 1.1, y - R * 0.1, R * 0.35, '#35e0ff'); }
  if (o.flash > 0) { g.save(); g.globalCompositeOperation = 'lighter'; g.globalAlpha = Math.min(1, o.flash * 6) * 0.6; g.fillStyle = '#fff'; g.beginPath(); g.ellipse(x, y - R * 0.9, R * 1.1, R * 1.1, 0, 0, TAU); g.fill(); g.restore(); }
}

/** The Alien Overlord's UFO, hovering. */
export function drawUFO(g, x, y, s, o) {
  const R = 1.25 * s; const t = o.t || 0;
  const hy = y - R * 1.5 + Math.sin(t * 2) * R * 0.08;
  g.fillStyle = 'rgba(0,0,0,.3)'; g.beginPath(); g.ellipse(x, y + R * 0.1, R * 1.2, R * 0.45, 0, 0, TAU); g.fill();
  g.save(); g.globalAlpha = 0.5 + 0.2 * Math.sin(t * 5); g.strokeStyle = '#ff3fd0'; g.lineWidth = R * 0.08; g.beginPath(); g.ellipse(x, y + R * 0.1, R * 1.25, R * 0.5, 0, 0, TAU); g.stroke(); g.restore();
  glow(g, x, hy + R * 0.5, R * 1.4, '#ff3fd0', 0.45);
  // dome with the Overlord inside
  g.beginPath(); g.ellipse(x, hy - R * 0.1, R * 0.62, R * 0.7, 0, Math.PI, 0); g.fillStyle = 'rgba(160,255,200,.55)'; g.fill(); g.strokeStyle = '#d8fff0'; g.lineWidth = R * 0.05; g.stroke();
  blob(g, x, hy - R * 0.38, R * 0.3, R * 0.36, '#d8ff8a', '#38c850', '#0a5a28');
  eye(g, x - R * 0.12, hy - R * 0.42, R * 0.1, 0, 0.3, '#fff'); eye(g, x + R * 0.12, hy - R * 0.42, R * 0.1, 0, 0.3, '#fff');
  blob(g, x, hy, R * 1.35, R * 0.46, '#c8a0ff', '#4a1a8a', '#2a0a5a');
  for (let i = 0; i < 7; i++) { const a = t * 1.6 + (i / 7) * TAU; const lx = x + Math.cos(a) * R * 1.05; const ly = hy + Math.sin(a) * R * 0.3 + R * 0.04; if (Math.sin(a) > -0.2) { glow(g, lx, ly, R * 0.22, i % 2 ? '#ff6ae0' : '#6af0ff'); g.fillStyle = '#fff'; g.beginPath(); g.arc(lx, ly, R * 0.06, 0, TAU); g.fill(); } }
  blob(g, x, hy + R * 0.3, R * 0.55, R * 0.18, '#7a4ac8', '#2a0a5a');
  if (o.flash > 0) { g.save(); g.globalCompositeOperation = 'lighter'; g.globalAlpha = Math.min(1, o.flash * 6) * 0.6; g.fillStyle = '#fff'; g.beginPath(); g.ellipse(x, hy, R * 1.4, R * 0.7, 0, 0, TAU); g.fill(); g.restore(); }
  return hy;
}

/** A card icon (square canvas context, size px). */
export function drawCardIcon(g, id, size) {
  const cx = size / 2; const cy = size * 0.74;
  const o = { t: 1, side: 0, moving: false, atk: 0, flash: 0, spawn: 1, ang: -Math.PI / 2 };
  const units = { spark: [0.36, 'spark', 0.95], blaster: [0.4, 'blaster', 0.9], smash: [0.62, 'smash', 0.72], turret: [0.6, 'turret', 0.78] };
  g.clearRect(0, 0, size, size);
  if (units[id]) { const [r, k, f] = units[id]; const s = (size * 0.3 * f) / r; drawUnit(g, k, cx, cy, s, r, o); return; }
  if (id === 'swarm') { const s = size * 0.3 / 0.27; for (const [dx, dy] of [[-0.24, 0.12], [0.24, 0.12], [0, -0.12]]) drawUnit(g, 'swarm', cx + dx * size, cy + dy * size + size * 0.12, s, 0.27, o); return; }
  if (id === 'plasma') {
    glow(g, cx, size * 0.5, size * 0.5, '#35f0ff', 0.7);
    g.strokeStyle = '#8af8ff'; g.lineWidth = size * 0.06; for (const k of [0.34, 0.2]) { g.beginPath(); g.ellipse(cx, size * 0.55, size * k, size * k * 0.55, 0, 0, TAU); g.stroke(); }
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(cx + size * 0.08, size * 0.12); g.lineTo(cx - size * 0.16, size * 0.52); g.lineTo(cx - size * 0.01, size * 0.52); g.lineTo(cx - size * 0.1, size * 0.88); g.lineTo(cx + size * 0.2, size * 0.42); g.lineTo(cx + size * 0.05, size * 0.42); g.closePath(); g.fill();
    return;
  }
  if (id === 'blackhole') {
    glow(g, cx, size * 0.52, size * 0.5, '#a24aff', 0.8);
    blob(g, cx, size * 0.52, size * 0.34, size * 0.34, '#05010f', '#12042a', '#c07aff');
    g.strokeStyle = '#d8a8ff'; g.lineWidth = size * 0.04; for (let a = 0; a < 3; a++) { g.beginPath(); for (let i = 0; i < 24; i++) { const k = i / 24; const an = a * 2.09 + k * 4.4; const rr = size * (0.06 + 0.34 * k); const px = cx + Math.cos(an) * rr; const py = size * 0.52 + Math.sin(an) * rr; if (i) g.lineTo(px, py); else g.moveTo(px, py); } g.stroke(); }
    return;
  }
  if (id === 'repair') {
    glow(g, cx, size * 0.5, size * 0.5, '#4aff8a', 0.6);
    g.strokeStyle = '#8affb0'; g.lineWidth = size * 0.05; g.beginPath(); g.ellipse(cx, size * 0.62, size * 0.38, size * 0.2, 0, 0, TAU); g.stroke();
    g.fillStyle = '#eafff0'; g.beginPath(); g.roundRect(cx - size * 0.07, size * 0.2, size * 0.14, size * 0.46, size * 0.04); g.roundRect(cx - size * 0.23, size * 0.36, size * 0.46, size * 0.14, size * 0.04); g.fill();
    g.strokeStyle = '#1aa850'; g.lineWidth = size * 0.02; g.stroke();
  }
}
