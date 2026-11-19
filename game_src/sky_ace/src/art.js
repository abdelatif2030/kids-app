// Sky Ace art: everything is drawn in code (canvas 2D, world units). Glossy cartoon planes, UFOs, bosses, clouds, islands.
const TAU = Math.PI * 2;
export const SKIN_COLORS = {
  sunny: { body: ['#ffe27a', '#f59a1f'], wing: ['#ffd23a', '#e07a10'], acc: '#e8402a' },
  berry: { body: ['#ff9ac8', '#d83a8a'], wing: ['#ff7ab8', '#b82a78'], acc: '#fff' },
  mint: { body: ['#8af0cc', '#2aa888'], wing: ['#6ae8b8', '#1a8868'], acc: '#fff3a0' },
  sky: { body: ['#9ad4ff', '#3a88e0'], wing: ['#7ac0ff', '#2a68c0'], acc: '#ffd23a' },
  gold: { body: ['#fff4b0', '#e0a020'], wing: ['#ffe070', '#c88010'], acc: '#fff' },
};
export const THEMES = [
  { top: '#5fb8ff', bot: '#d8f2ff', cloud: '#ffffff', isle: '#8ad860', rock: '#a88868' },
  { top: '#7ac8ff', bot: '#ffeef8', cloud: '#ffffff', isle: '#7ae0a8', rock: '#b09080' },
  { top: '#ff9a6a', bot: '#ffe8a8', cloud: '#fff4e8', isle: '#b8d860', rock: '#a88060' },
  { top: '#1a2a6a', bot: '#6a5ab0', cloud: '#c8c0f0', isle: '#5ab8a0', rock: '#6a6088' },
  { top: '#e86ab8', bot: '#ffd0e8', cloud: '#fff0f8', isle: '#ffb0d0', rock: '#c88aa8' },
  { top: '#8ac8f0', bot: '#f0fbff', cloud: '#ffffff', isle: '#e8f4ff', rock: '#9ab0c8' },
  { top: '#f0a838', bot: '#fff0b8', cloud: '#fff8e0', isle: '#d8c060', rock: '#b08850' },
  { top: '#3a2a8a', bot: '#e86ab0', cloud: '#ffd0f0', isle: '#8a6ad0', rock: '#5a4a88' },
];

function grad(g, x0, y0, x1, y1, a, b) { const q = g.createLinearGradient(x0, y0, x1, y1); q.addColorStop(0, a); q.addColorStop(1, b); return q; }
function rr(g, x, y, w, h, r, fill, stroke = true) { g.beginPath(); g.roundRect(x, y, w, h, r); g.fillStyle = fill; g.fill(); if (stroke) g.stroke(); }
export function star4(g, x, y, r) { g.beginPath(); for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; const q = i % 2 ? r * 0.35 : r; g.lineTo(x + Math.sin(a) * q, y - Math.cos(a) * q); } g.closePath(); g.fill(); }

export function makeScenery(seed) {
  let s = seed >>> 0 || 1; const r = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  const clouds = [];
  for (let l = 0; l < 3; l++) for (let i = 0; i < 7; i++) clouds.push({ l, x: -20 + r() * 140, y: r() * 260, sc: 0.7 + r() * 0.9 + l * 0.3, k: r() });
  const isles = [];
  for (let i = 0; i < 4; i++) isles.push({ x: 8 + r() * 84, y: i * 70 + r() * 30, sc: 0.8 + r() * 0.8, tree: r() < 0.7, fall: r() < 0.4 });
  return { clouds, isles };
}

export function drawBackground(g, sc, theme, scroll, x0, x1, H) {
  const T = THEMES[theme % THEMES.length];
  g.fillStyle = grad(g, 0, 0, 0, H, T.top, T.bot); g.fillRect(x0, 0, x1 - x0, H);
  if (theme % 8 === 3 || theme % 8 === 7) { g.fillStyle = 'rgba(255,255,255,.8)'; for (let i = 0; i < 30; i++) { g.fillRect(x0 + ((i * 53.7) % (x1 - x0)), (i * 37.3 + scroll * 0.5 * (0.3 + (i % 3) * 0.2)) % H, 0.5, 0.5); } }
  const span = H + 60;
  // islands (mid layer)
  for (const f of sc.isles) {
    const y = ((f.y + scroll * 0.45) % (span + 40)) - 40; const x = f.x; const k = f.sc;
    g.save(); g.translate(x, y); g.scale(k, k);
    g.fillStyle = T.rock; g.beginPath(); g.moveTo(-13, 0); g.quadraticCurveTo(-8, 16, 0, 22); g.quadraticCurveTo(8, 16, 13, 0); g.closePath(); g.fill();
    if (f.fall) { g.fillStyle = 'rgba(200,240,255,.75)'; g.fillRect(-1.5, 8, 3, 30); }
    g.fillStyle = T.isle; g.beginPath(); g.ellipse(0, 0, 14, 4.5, 0, 0, TAU); g.fill();
    g.fillStyle = 'rgba(255,255,255,.25)'; g.beginPath(); g.ellipse(-3, -1, 7, 1.6, 0, 0, TAU); g.fill();
    if (f.tree) { g.fillStyle = '#7a4a2a'; g.fillRect(3, -7, 1.6, 6); g.fillStyle = '#3aa850'; g.beginPath(); g.arc(3.8, -9, 3.6, 0, TAU); g.arc(1.6, -7.5, 2.6, 0, TAU); g.arc(6, -7.5, 2.6, 0, TAU); g.fill(); }
    g.restore();
  }
  // clouds (3 parallax layers)
  for (const c of sc.clouds) {
    const sp = [0.25, 0.7, 1.3][c.l]; const y = ((c.y + scroll * sp) % (span + 40)) - 40;
    const a = [0.5, 0.75, 0.95][c.l]; g.globalAlpha = a; g.fillStyle = T.cloud;
    const k = c.sc * 3.4;
    g.beginPath(); g.ellipse(c.x, y, k * 2.4, k * 0.8, 0, 0, TAU); g.ellipse(c.x - k * 0.9, y - k * 0.5, k, k * 0.8, 0, 0, TAU); g.ellipse(c.x + k * 0.5, y - k * 0.8, k * 1.2, k * 0.95, 0, 0, TAU); g.fill();
  }
  g.globalAlpha = 1;
}

/** A glossy propeller plane. Nose points up; `rot` Math.PI turns it to face down. */
export function drawPlane(g, o) {
  g.save(); g.translate(o.x, o.y); g.rotate((o.rot || 0) + (o.tilt || 0)); g.scale(o.s, o.s);
  if (o.alpha != null) g.globalAlpha = o.alpha;
  g.lineJoin = 'round'; g.strokeStyle = 'rgba(40,20,60,.8)'; g.lineWidth = 0.45;
  const [b0, b1] = o.body; const [w0, w1] = o.wing; const t = o.t || 0;
  rr(g, -5.2, 5.2, 10.4, 2.8, 1.3, grad(g, -5, 0, 5, 0, w0, w1));
  if (o.bigWing) rr(g, -13, -3.4, 26, 5.6, 2.6, grad(g, 0, -3, 0, 3, w0, w1)); else rr(g, -11, -3.2, 22, 5.2, 2.4, grad(g, 0, -3, 0, 3, w0, w1));
  g.fillStyle = o.acc; for (const sx of [-1, 1]) { g.beginPath(); g.arc(sx * (o.bigWing ? 10 : 8), -0.6, 1.5, 0, TAU); g.fill(); g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(sx * (o.bigWing ? 10 : 8), -0.6, 0.6, 0, TAU); g.fill(); g.fillStyle = o.acc; }
  g.beginPath(); g.ellipse(0, 0, 3.8, 8.8, 0, 0, TAU); g.fillStyle = grad(g, -3.8, 0, 3.8, 0, b0, b1); g.fill(); g.stroke();
  if (o.stripe) { g.fillStyle = o.stripe; g.fillRect(-3.6, 3.6, 7.2, 1.2); g.fillRect(-3.4, 5.4, 6.8, 0.9); }
  g.fillStyle = 'rgba(255,255,255,.4)'; g.beginPath(); g.ellipse(-1.5, -2.5, 0.8, 4, 0, 0, TAU); g.fill();
  // cockpit and pilot
  g.fillStyle = '#3a2a4a'; g.beginPath(); g.ellipse(0, -0.6, 2.7, 3.2, 0, 0, TAU); g.fill();
  g.fillStyle = o.enemy ? '#c8d0d8' : '#ffd2a8'; g.beginPath(); g.arc(0, -0.8, 1.95, 0, TAU); g.fill(); g.stroke();
  g.fillStyle = o.enemy ? '#2a2a34' : '#6a3a1a'; g.beginPath(); g.arc(0, -1.1, 2, Math.PI, TAU); g.fill();
  g.fillStyle = '#222'; g.fillRect(-2.2, -1.6, 4.4, 0.9);
  for (const sx of [-1, 1]) { g.fillStyle = o.enemy ? '#ffcf3a' : '#aee8ff'; g.beginPath(); g.arc(sx * 1, -1.2, 0.85, 0, TAU); g.fill(); g.stroke(); g.fillStyle = '#fff'; g.beginPath(); g.arc(sx * 1 - 0.25, -1.45, 0.25, 0, TAU); g.fill(); }
  if (o.girl && !o.enemy) { g.fillStyle = '#ff6aa8'; g.beginPath(); g.arc(1.9, -2.5, 0.8, 0, TAU); g.arc(2.9, -2.1, 0.8, 0, TAU); g.fill(); }
  if (o.enemy) { g.strokeStyle = '#222'; g.lineWidth = 0.35; g.beginPath(); g.moveTo(-2, -2.1); g.lineTo(-0.3, -1.6); g.moveTo(2, -2.1); g.lineTo(0.3, -1.6); g.stroke(); g.lineWidth = 0.45; g.strokeStyle = 'rgba(40,20,60,.8)'; }
  else { g.fillStyle = '#e8402a'; g.beginPath(); g.moveTo(-1.2, 1); g.lineTo(1.2, 1); g.lineTo(1.2 + Math.sin(t * 9) * 0.9, 4.2); g.lineTo(-0.2 + Math.sin(t * 9 + 1) * 0.9, 3.6); g.closePath(); g.fill(); }
  // nose + propeller
  g.fillStyle = o.acc; g.beginPath(); g.arc(0, -8.8, 1.5, 0, TAU); g.fill(); g.stroke();
  const props = o.twin ? [-6, 6] : [0];
  for (const px of props) {
    const py = o.twin ? -4.2 : -9.8;
    g.fillStyle = 'rgba(255,255,255,.28)'; g.beginPath(); g.ellipse(px, py, 7, 1.3, 0, 0, TAU); g.fill();
    g.fillStyle = 'rgba(40,30,50,.55)'; g.beginPath(); g.ellipse(px, py, Math.max(0.6, 7 * Math.abs(Math.cos(t * 28 + px))), 0.55, 0, 0, TAU); g.fill();
  }
  g.restore();
}

export function drawUfo(g, x, y, s, t, charging, flash) {
  g.save(); g.translate(x, y); g.scale(s, s);
  g.lineJoin = 'round'; g.strokeStyle = 'rgba(30,20,60,.8)'; g.lineWidth = 0.45;
  if (charging) { g.fillStyle = 'rgba(255,90,90,.35)'; g.beginPath(); g.moveTo(-3, 2); g.lineTo(3, 2); g.lineTo(6, 14); g.lineTo(-6, 14); g.fill(); }
  g.fillStyle = grad(g, 0, -3, 0, 4, '#e8e8f8', '#7a7a9a'); g.beginPath(); g.ellipse(0, 0.5, 9, 3.4, 0, 0, TAU); g.fill(); g.stroke();
  g.fillStyle = 'rgba(120,230,255,.9)'; g.beginPath(); g.ellipse(0, -1.2, 4.6, 4, 0, Math.PI, TAU); g.fill(); g.stroke();
  g.fillStyle = '#7a3ad8'; g.beginPath(); g.arc(0, -2, 1.7, 0, TAU); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(-0.5, -2.4, 0.55, 0, TAU); g.fill();
  for (let i = 0; i < 5; i++) { g.fillStyle = (Math.floor(t * 6) + i) % 2 ? '#ff5a8a' : '#ffe14a'; g.beginPath(); g.arc(-6 + i * 3, 1.4 + Math.abs(i - 2) * -0.3, 0.7, 0, TAU); g.fill(); }
  if (flash > 0) { g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.ellipse(0, 0, 9, 4, 0, 0, TAU); g.fill(); }
  g.restore();
}

export function drawBoss(g, b, t, tint) {
  g.save(); g.translate(b.x, b.y); const r = b.r;
  g.lineJoin = 'round'; g.strokeStyle = 'rgba(30,15,50,.85)'; g.lineWidth = 0.7;
  const hurt = b.phase;
  if (b.kind === 'fortress') {
    g.fillStyle = grad(g, 0, r * 0.4, 0, r * 1.6, '#8a6a58', '#4a3a48'); g.beginPath(); g.moveTo(-r, r * 0.3); g.lineTo(r, r * 0.3); g.lineTo(r * 0.5, r * 1.5); g.lineTo(0, r * 1.7); g.lineTo(-r * 0.5, r * 1.5); g.closePath(); g.fill(); g.stroke();
    rr(g, -r * 1.2, -r * 0.35, r * 2.4, r * 0.8, 2, grad(g, 0, -r * 0.35, 0, r * 0.45, tint[0], tint[1]));
    for (const sx of [-1, 1]) { rr(g, sx * r * 1.05 - 3, -r * 0.8, 6, r * 0.6, 2, '#6a5a78'); g.fillStyle = '#ffd23a'; g.beginPath(); g.moveTo(sx * r * 1.05, -r * 0.8); g.lineTo(sx * r * 1.05 + 6, -r * 0.95); g.lineTo(sx * r * 1.05, -r * 1.1); g.fill(); rr(g, sx * r * 0.85 - 2, r * 0.35, 4, r * 0.55, 1.5, '#3a3a4a'); }
    rr(g, -r * 0.45, -r * 0.8, r * 0.9, r * 0.6, 3, grad(g, 0, -r * 0.8, 0, -r * 0.2, '#e8e0f0', '#9a90b0'));
    for (let i = -1; i <= 1; i++) { g.fillStyle = Math.sin(t * 4 + i) > 0 ? '#ffe880' : '#8a7a50'; g.fillRect(i * r * 0.28 - 1.2, -r * 0.1, 2.4, 3); }
    rr(g, -2.2, r * 0.3, 4.4, r * 0.75, 2, '#3a3a4a');
    for (const sx of [-1, 1]) { g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(sx * (r * 1.28), -r * 0.05, 1.2, Math.max(1, 7 * Math.abs(Math.cos(t * 26))), 0, 0, TAU); g.fill(); }
  } else if (b.kind === 'blimp') {
    g.save(); g.beginPath(); g.ellipse(0, 0, r * 1.35, r * 0.75, 0, 0, TAU); g.clip();
    g.fillStyle = tint[0]; g.fillRect(-r * 1.5, -r, r * 3, r * 2);
    g.fillStyle = tint[1]; for (let i = -4; i <= 4; i += 2) g.fillRect(i * r * 0.3, -r, r * 0.3, r * 2);
    g.fillStyle = 'rgba(255,255,255,.3)'; g.beginPath(); g.ellipse(-r * 0.3, -r * 0.35, r * 0.9, r * 0.2, 0, 0, TAU); g.fill();
    g.restore(); g.beginPath(); g.ellipse(0, 0, r * 1.35, r * 0.75, 0, 0, TAU); g.stroke();
    g.fillStyle = tint[1]; for (const sx of [-1, 1]) { g.beginPath(); g.moveTo(sx * r * 1.1, -r * 0.2); g.lineTo(sx * r * 1.6, -r * 0.8); g.lineTo(sx * r * 1.45, r * 0.1); g.closePath(); g.fill(); g.stroke(); }
    rr(g, -r * 0.55, r * 0.7, r * 1.1, r * 0.5, 3, '#6a4a3a'); g.fillStyle = '#9ad8ff'; for (let i = -1; i <= 1; i++) g.fillRect(i * r * 0.3 - 1.5, r * 0.82, 3, 3);
    rr(g, -2, r * 1.15, 4, r * 0.6, 2, '#3a3a4a');
    g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(0, r * 0.95, 1.1, Math.max(1, 6 * Math.abs(Math.cos(t * 26))), 0, 0, TAU); g.fill();
  } else {
    g.fillStyle = grad(g, 0, -r * 0.3, 0, r * 0.5, '#f0f0ff', '#7a7a9a'); g.beginPath(); g.ellipse(0, 0, r * 1.45, r * 0.5, 0, 0, TAU); g.fill(); g.stroke();
    g.fillStyle = 'rgba(120,230,255,.92)'; g.beginPath(); g.ellipse(0, -r * 0.1, r * 0.75, r * 0.7, 0, Math.PI, TAU); g.fill(); g.stroke();
    g.fillStyle = tint[0]; g.beginPath(); g.arc(0, -r * 0.35, r * 0.28, 0, TAU); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(-r * 0.08, -r * 0.45, r * 0.09, 0, TAU); g.arc(r * 0.1, -r * 0.45, r * 0.09, 0, TAU); g.fill();
    g.fillStyle = '#222'; g.beginPath(); g.arc(-r * 0.07, -r * 0.44, r * 0.04, 0, TAU); g.arc(r * 0.11, -r * 0.44, r * 0.04, 0, TAU); g.fill();
    for (let i = 0; i < 9; i++) { g.fillStyle = (Math.floor(t * 5) + i) % 2 ? tint[1] : '#ffe14a'; g.beginPath(); g.arc(-r * 1.1 + i * r * 0.275, r * 0.12 + Math.sin(i / 8 * Math.PI) * -r * 0.05, 1.1, 0, TAU); g.fill(); }
    rr(g, -2.5, r * 0.35, 5, r * 0.5, 2, '#3a3a5a');
  }
  if (hurt > 0) { g.fillStyle = 'rgba(80,80,80,.35)'; for (let i = 0; i < hurt * 2; i++) { g.beginPath(); g.arc(Math.sin(t * 2 + i * 2) * r * 0.5 + (i - 1) * 3, -r * 0.6 - ((t * 10 + i * 5) % 8), 1.6, 0, TAU); g.fill(); } }
  if (b.flash > 0) { g.fillStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.ellipse(0, 0, r * 1.3, r * 0.7, 0, 0, TAU); g.fill(); }
  if (b.inv > 0) { g.strokeStyle = 'rgba(160,255,255,.9)'; g.lineWidth = 1.2; g.beginPath(); g.ellipse(0, 0, r * 1.5, r * 1.0, 0, 0, TAU); g.stroke(); }
  g.restore();
}
