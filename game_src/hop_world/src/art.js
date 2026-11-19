// Hop World art, all drawn in code: four worlds (sunny hills, crystal cave, desert, snowy castle), tile sprites, the hero,
// the walking bugs, coins, the power-up, the flag and the castle. Nothing here comes from a file or from another game.
const TAU = Math.PI * 2;
const hash = (n) => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };

export const PAL = {
  hills: { sky: ['#5cc8ff', '#d4f4ff'], top: '#58c84a', topD: '#3a9a34', dirt: '#c07a3c', dirtD: '#9a5c2a', brick: '#e07a3a', brickD: '#a8501e', pipe: '#3ac858', pipeD: '#1e8a38', castle: '#e8d8c0' },
  cave: { sky: ['#1c1438', '#3a2a66'], top: '#9a8ae0', topD: '#6a58b8', dirt: '#5a4a8a', dirtD: '#40336a', brick: '#6a8ae0', brickD: '#3e56a8', pipe: '#26c8b8', pipeD: '#16887c', castle: '#8a7ac8' },
  desert: { sky: ['#ffb468', '#ffeabc'], top: '#f8dc8a', topD: '#e0b860', dirt: '#dca454', dirtD: '#b87c30', brick: '#f0b848', brickD: '#b87c18', pipe: '#d86a4a', pipeD: '#a03e24', castle: '#f0d090' },
  snow: { sky: ['#a8d0f0', '#f4faff'], top: '#ffffff', topD: '#c8e0f4', dirt: '#9cc4e8', dirtD: '#7aa4d0', brick: '#78d0f0', brickD: '#3a98c8', pipe: '#8ad8ff', pipeD: '#4a9ac8', castle: '#dcecfa' },
};

function sprite(px, fn) { const c = document.createElement('canvas'); c.width = c.height = px; fn(c.getContext('2d'), px); return c; }

/** Tile sprites for one world at a pixel size. */
export function makeSprites(px, world) {
  const P = PAL[world] || PAL.hills;
  const body = (g, s) => {
    g.fillStyle = P.dirt; g.fillRect(0, 0, s, s);
    g.fillStyle = P.dirtD;
    for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(hash(i + 1) * s, hash(i + 9) * s, s * (0.04 + hash(i + 3) * 0.05), 0, TAU); g.fill(); }
    if (world === 'desert') { g.fillRect(0, s * 0.48, s, s * 0.04); g.fillRect(s * 0.5, 0, s * 0.04, s * 0.48); g.fillRect(s * 0.25, s * 0.52, s * 0.04, s * 0.48); }
    if (world === 'snow') { g.strokeStyle = '#d8ecff'; g.lineWidth = s * 0.04; g.beginPath(); g.moveTo(s * 0.2, s * 0.1); g.lineTo(s * 0.45, s * 0.5); g.lineTo(s * 0.35, s * 0.9); g.stroke(); }
    if (world === 'cave') { g.fillStyle = '#7ae8f0'; g.fillRect(s * 0.62, s * 0.3, s * 0.06, s * 0.1); g.fillRect(s * 0.2, s * 0.7, s * 0.05, s * 0.08); }
  };
  const top = sprite(px, (g, s) => {
    body(g, s);
    g.fillStyle = P.top; g.fillRect(0, 0, s, s * 0.26);
    for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(s * (0.125 + i * 0.25), s * 0.26, s * 0.125, 0, Math.PI); g.fill(); }
    g.fillStyle = P.topD; g.fillRect(0, s * 0.2, s, s * 0.03);
    g.fillStyle = 'rgba(255,255,255,.45)'; g.fillRect(0, 0, s, s * 0.05);
    if (world === 'snow') { g.fillStyle = '#fff'; g.fillRect(0, 0, s, s * 0.34); for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(s * (0.125 + i * 0.25), s * 0.34, s * 0.13, 0, Math.PI); g.fill(); } g.fillStyle = P.topD; g.fillRect(0, s * 0.28, s, s * 0.025); }
    if (world === 'cave') { g.fillStyle = '#c8f8ff'; g.fillRect(s * 0.3, s * 0.06, s * 0.05, s * 0.08); }
  });
  const dirt = sprite(px, body);
  const brick = sprite(px, (g, s) => {
    g.fillStyle = P.brick; g.fillRect(0, 0, s, s);
    g.strokeStyle = P.brickD; g.lineWidth = s * 0.06;
    g.strokeRect(s * 0.03, s * 0.03, s * 0.94, s * 0.94);
    g.beginPath(); g.moveTo(0, s * 0.5); g.lineTo(s, s * 0.5); g.moveTo(s * 0.5, 0); g.lineTo(s * 0.5, s * 0.5); g.moveTo(s * 0.25, s * 0.5); g.lineTo(s * 0.25, s); g.moveTo(s * 0.75, s * 0.5); g.lineTo(s * 0.75, s); g.stroke();
    g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(s * 0.06, s * 0.06, s * 0.38, s * 0.05);
  });
  const q = sprite(px, (g, s) => {
    const gr = g.createLinearGradient(0, 0, 0, s); gr.addColorStop(0, '#ffe45a'); gr.addColorStop(1, '#ffa81a');
    g.fillStyle = gr; g.beginPath(); g.roundRect(s * 0.02, s * 0.02, s * 0.96, s * 0.96, s * 0.1); g.fill();
    g.strokeStyle = '#a85a08'; g.lineWidth = s * 0.07; g.stroke();
    g.fillStyle = '#a85a08'; for (const [x, y] of [[0.14, 0.14], [0.86, 0.14], [0.14, 0.86], [0.86, 0.86]]) { g.beginPath(); g.arc(s * x, s * y, s * 0.05, 0, TAU); g.fill(); }
    g.font = `900 ${s * 0.68}px system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = s * 0.1; g.strokeStyle = '#a85a08'; g.strokeText('?', s * 0.5, s * 0.55); g.fillStyle = '#fff'; g.fillText('?', s * 0.5, s * 0.55);
  });
  const used = sprite(px, (g, s) => {
    g.fillStyle = '#b09a78'; g.beginPath(); g.roundRect(s * 0.02, s * 0.02, s * 0.96, s * 0.96, s * 0.1); g.fill();
    g.strokeStyle = '#6e5a3c'; g.lineWidth = s * 0.07; g.stroke();
    g.fillStyle = '#6e5a3c'; for (const [x, y] of [[0.14, 0.14], [0.86, 0.14], [0.14, 0.86], [0.86, 0.86]]) { g.beginPath(); g.arc(s * x, s * y, s * 0.05, 0, TAU); g.fill(); }
  });
  return { top, dirt, brick, q, used };
}

// ---------- backgrounds ----------
function ridge(g, W, H, off, base, amp, per, col, k) {
  g.fillStyle = col; g.beginPath(); g.moveTo(0, H);
  for (let x = 0; x <= W + 14; x += 14) { const u = ((x + off) / per) * TAU; g.lineTo(x, base - amp * (0.55 + 0.3 * Math.sin(u + k) + 0.15 * Math.sin(u * 2.3 + k * 2))); }
  g.lineTo(W + 14, H); g.closePath(); g.fill();
}
function cloud(g, x, y, s, col) { g.fillStyle = col; g.beginPath(); g.arc(x, y, s * 0.5, 0, TAU); g.arc(x + s * 0.55, y + s * 0.08, s * 0.42, 0, TAU); g.arc(x - s * 0.55, y + s * 0.1, s * 0.38, 0, TAU); g.arc(x + s * 0.1, y - s * 0.28, s * 0.4, 0, TAU); g.fill(); }
/** A repeating object every `per` px, shifted by `off`; calls fn(x, n) with the absolute repeat index n. */
function repeat(W, per, off, fn) { const n0 = Math.floor(off / per); const x0 = -(off - n0 * per); for (let k = 0; x0 + k * per < W + per; k++) fn(x0 + k * per, n0 + k); }

export function drawBackground(g, world, W, H, camX, ts, gy, t) {
  const P = PAL[world] || PAL.hills;
  const gr = g.createLinearGradient(0, 0, 0, Math.max(gy, H * 0.6)); gr.addColorStop(0, P.sky[0]); gr.addColorStop(1, P.sky[1]);
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  const cx = camX * ts;
  if (world === 'hills') {
    g.fillStyle = '#fff6a8'; g.beginPath(); g.arc(W * 0.82, gy * 0.26, ts * 1.1, 0, TAU); g.fill();
    g.fillStyle = 'rgba(255,246,168,.35)'; g.beginPath(); g.arc(W * 0.82, gy * 0.26, ts * 1.7, 0, TAU); g.fill();
    for (let i = 0; i < 6; i++) { const span = W + ts * 8; const x = ((i * ts * 6.7 - cx * 0.1 - t * ts * 0.25) % span + span) % span - ts * 4; cloud(g, x, gy * (0.12 + hash(i) * 0.3), ts * (1.4 + hash(i + 4)), 'rgba(255,255,255,.92)'); }
    ridge(g, W, H, cx * 0.15, gy - ts * 1.5, ts * 2.4, ts * 18, '#a4e0a0', 1);
    ridge(g, W, H, cx * 0.3, gy - ts * 0.4, ts * 1.6, ts * 12, '#76cc72', 3);
    repeat(W, ts * 6.5, cx * 0.5, (x, n) => { const s = ts * (0.9 + hash(n) * 0.5); g.fillStyle = '#4eb04a'; g.beginPath(); g.arc(x, gy, s, Math.PI, 0); g.arc(x + s * 0.9, gy, s * 0.7, Math.PI, 0); g.fill(); g.fillStyle = '#5cc858'; g.beginPath(); g.arc(x - s * 0.1, gy - s * 0.3, s * 0.35, 0, TAU); g.fill(); if (hash(n + 7) > 0.5) { g.fillStyle = '#ff7aa8'; g.beginPath(); g.arc(x + s * 0.5, gy - s * 0.5, ts * 0.12, 0, TAU); g.fill(); } });
  } else if (world === 'cave') {
    ridge(g, W, H, cx * 0.15, gy - ts * 1.2, ts * 3, ts * 14, '#2a2052', 2);
    repeat(W, ts * 5, cx * 0.3, (x, n) => { const hu = 170 + hash(n) * 120; const hh = ts * (0.8 + hash(n + 2) * 1.2); const tw = 0.6 + 0.4 * Math.sin(t * 2 + n); g.fillStyle = `hsla(${hu},80%,65%,${0.55 * tw + 0.3})`; const by = gy - ts * (0.3 + hash(n + 5) * 1.5); g.beginPath(); g.moveTo(x, by); g.lineTo(x + hh * 0.3, by - hh * 0.5); g.lineTo(x, by - hh); g.lineTo(x - hh * 0.3, by - hh * 0.5); g.closePath(); g.fill(); });
    ridge(g, W, H, cx * 0.4, gy - ts * 0.2, ts * 1.2, ts * 9, '#3a2c6a', 5);
    g.fillStyle = '#241a48'; repeat(W, ts * 1.7, cx * 0.5, (x, n) => { const hh = ts * (0.8 + hash(n) * 2.2); g.beginPath(); g.moveTo(x - ts * 0.6, 0); g.lineTo(x + ts * 0.6, 0); g.lineTo(x, hh); g.closePath(); g.fill(); });
    for (let i = 0; i < 24; i++) { const x = ((hash(i) * W - cx * 0.35 * (0.4 + hash(i + 3)) + Math.sin(t + i) * 8) % W + W) % W; const y = ((hash(i + 9) * H + t * 6 * (0.3 + hash(i + 5))) % H); g.fillStyle = `rgba(190,240,255,${0.25 + hash(i + 1) * 0.4})`; g.fillRect(x, y, 2, 2); }
  } else if (world === 'desert') {
    g.fillStyle = '#fff2c0'; g.beginPath(); g.arc(W * 0.78, gy * 0.34, ts * 1.6, 0, TAU); g.fill();
    g.fillStyle = 'rgba(255,240,180,.35)'; g.beginPath(); g.arc(W * 0.78, gy * 0.34, ts * 2.4, 0, TAU); g.fill();
    repeat(W, ts * 15, cx * 0.12, (x, n) => { const b = ts * (5 + hash(n) * 2); const hh = b * 0.78; const by = gy - ts * 0.8; g.fillStyle = '#e8b878'; g.beginPath(); g.moveTo(x - b / 2, by); g.lineTo(x, by - hh); g.lineTo(x + b / 2, by); g.closePath(); g.fill(); g.fillStyle = '#c8935a'; g.beginPath(); g.moveTo(x, by - hh); g.lineTo(x + b / 2, by); g.lineTo(x + b * 0.1, by); g.closePath(); g.fill(); g.fillStyle = '#e8b878'; g.beginPath(); g.moveTo(x + b * 0.85, by); g.lineTo(x + b * 1.15, by - hh * 0.55); g.lineTo(x + b * 1.45, by); g.closePath(); g.fill(); });
    ridge(g, W, H, cx * 0.3, gy - ts * 0.8, ts * 1.4, ts * 16, '#f2c680', 1);
    ridge(g, W, H, cx * 0.5, gy - ts * 0.1, ts * 1.0, ts * 10, '#eab468', 4);
    repeat(W, ts * 9, cx * 0.5, (x, n) => { if (hash(n) < 0.4) return; g.fillStyle = '#6ab04a'; const s = ts * 0.35; g.fillRect(x - s * 0.3, gy - s * 3, s * 0.6, s * 3); g.fillRect(x - s * 1.1, gy - s * 2.2, s * 0.5, s * 1.1); g.fillRect(x - s * 1.1, gy - s * 1.2, s * 0.9, s * 0.4); g.fillRect(x + s * 0.6, gy - s * 2.6, s * 0.5, s * 1.3); g.fillRect(x + s * 0.2, gy - s * 1.5, s * 0.9, s * 0.4); });
  } else {
    repeat(W, ts * 11, cx * 0.1, (x, n) => { const b = ts * (7 + hash(n) * 3); const hh = b * 0.75; const by = gy - ts * 0.4; g.fillStyle = '#b4c8e6'; g.beginPath(); g.moveTo(x - b / 2, by); g.lineTo(x, by - hh); g.lineTo(x + b / 2, by); g.closePath(); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x - b * 0.14, by - hh * 0.72); g.lineTo(x, by - hh); g.lineTo(x + b * 0.14, by - hh * 0.72); g.lineTo(x + b * 0.05, by - hh * 0.66); g.lineTo(x - b * 0.04, by - hh * 0.74); g.closePath(); g.fill(); });
    repeat(W, ts * 34, cx * 0.2, (x) => { const c = '#9ab4d8'; g.fillStyle = c; const b = gy - ts * 0.6; g.fillRect(x, b - ts * 3, ts * 4, ts * 3); g.fillRect(x - ts * 0.6, b - ts * 4.5, ts * 1.4, ts * 4.5); g.fillRect(x + ts * 3.2, b - ts * 4.5, ts * 1.4, ts * 4.5); g.beginPath(); g.moveTo(x - ts * 0.8, b - ts * 4.5); g.lineTo(x + ts * 0.1, b - ts * 6); g.lineTo(x + ts, b - ts * 4.5); g.fill(); g.beginPath(); g.moveTo(x + ts * 3, b - ts * 4.5); g.lineTo(x + ts * 3.9, b - ts * 6); g.lineTo(x + ts * 4.8, b - ts * 4.5); g.fill(); g.fillStyle = '#fff'; g.fillRect(x, b - ts * 3.1, ts * 4, ts * 0.2); });
    repeat(W, ts * 3.2, cx * 0.4, (x, n) => { const s = ts * (0.7 + hash(n) * 0.5); for (let l = 0; l < 3; l++) { g.fillStyle = '#4a8c78'; g.beginPath(); g.moveTo(x, gy - s * (1.1 + l * 0.8) - ts * 0.2); g.lineTo(x + s * (0.65 - l * 0.12), gy - s * (0.1 + l * 0.8)); g.lineTo(x - s * (0.65 - l * 0.12), gy - s * (0.1 + l * 0.8)); g.closePath(); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x, gy - s * (1.1 + l * 0.8) - ts * 0.2); g.lineTo(x + s * 0.22, gy - s * (0.75 + l * 0.8)); g.lineTo(x - s * 0.22, gy - s * (0.75 + l * 0.8)); g.closePath(); g.fill(); } });
    g.fillStyle = 'rgba(255,255,255,.9)';
    for (let i = 0; i < 46; i++) { const sp = 0.4 + hash(i + 3) * 0.9; const x = ((hash(i) * W - cx * 0.3 * sp + Math.sin(t * 0.8 + i) * 12) % W + W) % W; const y = (hash(i + 9) * H + t * 36 * sp) % H; g.beginPath(); g.arc(x, y, 1.4 + hash(i + 5) * 1.6, 0, TAU); g.fill(); }
  }
}

// ---------- things ----------
function ell(g, x, y, rx, ry, fill, stroke, rot = 0) { g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, TAU); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) g.stroke(); }

/** The hero, a round fox kid. o: { x, y (screen px, bottom centre), s, face, vx, vy, ground, t, h, girl, inv } */
export function drawHero(g, o) {
  const { s, t } = o;
  const speed = Math.min(1, Math.abs(o.vx) / 6.2);
  const air = !o.ground;
  const ph = t * 16;
  g.save();
  if (o.inv > 0 && Math.floor(t * 14) % 2 === 0) g.globalAlpha = 0.4;
  g.translate(o.x, o.y); g.scale(s * o.face, s);
  const k = Math.min(1, Math.abs(o.vy) / 16);
  if (air) g.scale(1 - 0.12 * k, 1 + 0.16 * k);
  const bob = !air && speed > 0.1 ? Math.abs(Math.sin(ph)) * 0.07 : !air ? Math.sin(t * 3) * 0.012 : 0;
  g.translate(0, -bob);
  g.lineWidth = 0.055; g.lineJoin = 'round'; g.strokeStyle = '#4a2a12';
  const big = o.h > 1.2;
  const hy = -(o.h - 0.43);
  const orange = '#ff9a3c'; const cream = '#ffeccc';
  // tail
  const wag = Math.sin(t * (air ? 12 : 7)) * 0.12 - speed * 0.2;
  g.save(); g.translate(-0.3, hy + (big ? 0.7 : 0.5)); g.rotate(-0.6 + wag);
  ell(g, -0.16, 0, 0.26, 0.13, orange, true); ell(g, -0.36, 0, 0.1, 0.09, '#fff', false);
  g.restore();
  // feet
  for (let i = 0; i < 2; i++) {
    const sgn = i ? 1 : -1;
    let fx = sgn * 0.17; let fy = -0.08;
    if (air) { fx = sgn * 0.2 + 0.05; fy = -0.2; } else if (speed > 0.1) { fx += Math.sin(ph + i * Math.PI) * 0.15 * speed; fy -= Math.max(0, Math.cos(ph + i * Math.PI)) * 0.12 * speed; }
    ell(g, fx, fy, 0.14, 0.09, '#3a78d8', true);
  }
  // torso
  if (big) { ell(g, 0, -0.52, 0.33, 0.46, orange, true); ell(g, 0.05, -0.5, 0.2, 0.3, cream, false); g.fillStyle = '#ffd23a'; g.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 0.05 : 0.11; const a = -Math.PI / 2 + (i * Math.PI) / 5; g.lineTo(0.05 + Math.cos(a) * r, -0.5 + Math.sin(a) * r); } g.closePath(); g.fill(); }
  else { ell(g, 0, -0.28, 0.29, 0.25, orange, true); ell(g, 0.05, -0.26, 0.17, 0.16, cream, false); }
  // ears
  for (const sg of [-1, 1]) {
    g.fillStyle = orange; g.beginPath(); g.moveTo(sg * 0.38, hy - 0.12); g.lineTo(sg * 0.34, hy - 0.62); g.lineTo(sg * 0.08, hy - 0.34); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#ff9ec0'; g.beginPath(); g.moveTo(sg * 0.31, hy - 0.2); g.lineTo(sg * 0.31, hy - 0.5); g.lineTo(sg * 0.14, hy - 0.32); g.closePath(); g.fill();
  }
  // head
  ell(g, 0, hy, 0.43, 0.4, orange, true);
  ell(g, 0.13, hy + 0.1, 0.24, 0.17, cream, false);
  // eyes
  const blink = (t % 3.4) < 0.13;
  for (const ex of [0.04, 0.27]) {
    ell(g, ex, hy - 0.05, 0.1, blink ? 0.015 : 0.13, '#fff', true);
    if (!blink) { ell(g, ex + 0.03, hy - 0.04, 0.055, 0.075, '#2a1a0a', false); ell(g, ex + 0.05, hy - 0.08, 0.02, 0.025, '#fff', false); }
  }
  ell(g, 0.36, hy + 0.04, 0.05, 0.04, '#3a2210', false);
  ell(g, 0.17, hy + 0.2, 0.08, 0.05, 'rgba(255,110,130,.55)', false);
  g.beginPath(); g.strokeStyle = '#3a2210'; g.lineWidth = 0.035;
  if (air) { g.ellipse(0.28, hy + 0.17, 0.05, 0.06, 0, 0, TAU); g.fillStyle = '#7a2a2a'; g.fill(); } else { g.arc(0.27, hy + 0.1, 0.07, 0.15, 2.6); }
  g.stroke(); g.lineWidth = 0.055; g.strokeStyle = '#4a2a12';
  // scarf
  const sc = o.girl ? '#ff6aa8' : '#ffd23a';
  ell(g, 0.02, hy + 0.36, 0.3, 0.08, sc, true);
  g.fillStyle = sc; g.beginPath(); g.moveTo(-0.2, hy + 0.34); g.quadraticCurveTo(-0.5 - speed * 0.3, hy + 0.3 + Math.sin(t * 11) * 0.07, -0.55 - speed * 0.35, hy + 0.5 + Math.sin(t * 9) * 0.07); g.quadraticCurveTo(-0.35, hy + 0.5, -0.12, hy + 0.42); g.closePath(); g.fill(); g.stroke();
  if (o.girl) { g.fillStyle = '#ff6aa8'; g.beginPath(); g.moveTo(-0.1, hy - 0.4); g.lineTo(-0.34, hy - 0.52); g.lineTo(-0.34, hy - 0.28); g.closePath(); g.moveTo(-0.1, hy - 0.4); g.lineTo(0.12, hy - 0.52); g.lineTo(0.12, hy - 0.28); g.closePath(); g.fill(); g.stroke(); ell(g, -0.1, hy - 0.4, 0.06, 0.06, '#ffd23a', true); }
  g.restore();
}

/** A walking bug. o: { x, y (screen, bottom centre), s, t, dir, squash (0..1) } */
export function drawBug(g, o) {
  const { s, t } = o;
  g.save(); g.translate(o.x, o.y); g.scale(s, s);
  g.lineWidth = 0.05; g.strokeStyle = '#2a1040'; g.lineJoin = 'round';
  if (o.squash > 0) g.scale(1 + 0.35 * o.squash, 1 - 0.78 * o.squash);
  const step = Math.sin(t * 12);
  ell(g, -0.2, -0.06 - Math.max(0, step) * 0.05, 0.14, 0.08, '#4a2a6a', true);
  ell(g, 0.2, -0.06 - Math.max(0, -step) * 0.05, 0.14, 0.08, '#4a2a6a', true);
  g.fillStyle = '#9a4ad8'; g.beginPath(); g.ellipse(0, -0.12, 0.46, 0.5, 0, Math.PI, 0); g.lineTo(0.46, -0.12); g.lineTo(-0.46, -0.12); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = '#d8a0f4'; for (const [x, y, r] of [[-0.25, -0.4, 0.07], [0.28, -0.32, 0.06], [0.0, -0.55, 0.05]]) { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
  for (const ex of [-0.15, 0.15]) { ell(g, ex, -0.24, 0.1, 0.12, '#fff', true); ell(g, ex + o.dir * 0.03, -0.23, 0.05, 0.065, '#2a1040', false); }
  g.beginPath(); g.moveTo(-0.28, -0.4); g.lineTo(-0.06, -0.34); g.moveTo(0.28, -0.4); g.lineTo(0.06, -0.34); g.stroke();
  g.restore();
}

export function drawMushroom(g, x, y, s, t) {
  g.save(); g.translate(x, y); g.scale(s, s); g.lineWidth = 0.05; g.strokeStyle = '#3a1a5a'; g.lineJoin = 'round';
  const b = 1 + Math.sin(t * 8) * 0.04; g.scale(1, b);
  g.fillStyle = '#fff0d0'; g.beginPath(); g.roundRect(-0.2, -0.38, 0.4, 0.4, 0.1); g.fill(); g.stroke();
  g.fillStyle = '#a05ae8'; g.beginPath(); g.ellipse(0, -0.34, 0.5, 0.42, 0, Math.PI, 0); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = '#ffe45a'; for (const [dx, dy, r] of [[-0.25, -0.5, 0.09], [0.2, -0.55, 0.08], [0, -0.7, 0.07], [0.33, -0.4, 0.06]]) { g.beginPath(); g.arc(dx, dy, r, 0, TAU); g.fill(); }
  ell(g, -0.07, -0.22, 0.04, 0.05, '#2a1a0a', false); ell(g, 0.07, -0.22, 0.04, 0.05, '#2a1a0a', false);
  g.restore();
}

export function drawCoin(g, x, y, s, t, ph) {
  const w = Math.abs(Math.cos(t * 4 + ph)) * 0.34 + 0.06;
  g.save(); g.translate(x, y); g.scale(s, s);
  ell(g, 0, 0, w, 0.34, '#ffcf1a', false); g.lineWidth = 0.05; g.strokeStyle = '#b87808'; g.beginPath(); g.ellipse(0, 0, w, 0.34, 0, 0, TAU); g.stroke();
  if (w > 0.18) { ell(g, 0, 0, w * 0.55, 0.2, '#ffe86a', false); }
  g.restore();
}

export function drawPipe(g, P, x, y, s, cap, tall) {
  // x,y: screen top-left of the 2-wide, 1-high piece
  const w = s * 2; const body = (cx, cw) => { const gr = g.createLinearGradient(cx, 0, cx + cw, 0); gr.addColorStop(0, P.pipeD); gr.addColorStop(0.3, P.pipe); gr.addColorStop(0.55, '#ffffff55'); gr.addColorStop(0.62, P.pipe); gr.addColorStop(1, P.pipeD); return gr; };
  g.lineWidth = s * 0.06; g.strokeStyle = 'rgba(0,0,0,.55)';
  if (cap) {
    g.fillStyle = body(x - s * 0.05, w + s * 0.1); g.beginPath(); g.roundRect(x - s * 0.06, y, w + s * 0.12, s * 0.5, s * 0.1); g.fill(); g.stroke();
    g.fillStyle = body(x + s * 0.1, w - s * 0.2); g.fillRect(x + s * 0.1, y + s * 0.5, w - s * 0.2, s * 0.5 + 1); g.strokeRect(x + s * 0.1, y + s * 0.5, w - s * 0.2, s * 0.5 + 1);
  } else { g.fillStyle = body(x + s * 0.1, w - s * 0.2); g.fillRect(x + s * 0.1, y, w - s * 0.2, s + 1); g.strokeRect(x + s * 0.1, y, w - s * 0.2, s + 1); }
  void tall;
}

export function drawFlag(g, s, x, topY, groundY, t, hue) {
  // pole at screen x, from topY to groundY
  g.save(); g.strokeStyle = '#e8e8f0'; g.lineWidth = s * 0.12; g.beginPath(); g.moveTo(x, topY); g.lineTo(x, groundY); g.stroke();
  g.strokeStyle = '#8a8aa0'; g.lineWidth = s * 0.03; g.beginPath(); g.moveTo(x + s * 0.04, topY); g.lineTo(x + s * 0.04, groundY); g.stroke();
  g.fillStyle = '#ffd23a'; g.beginPath(); g.arc(x, topY - s * 0.12, s * 0.2, 0, TAU); g.fill(); g.strokeStyle = '#a87808'; g.lineWidth = s * 0.04; g.stroke();
  const w = Math.sin(t * 5) * s * 0.08;
  g.fillStyle = hue; g.beginPath(); g.moveTo(x + s * 0.06, topY + s * 0.1); g.quadraticCurveTo(x + s * 0.8, topY + s * 0.1 + w, x + s * 1.5, topY + s * 0.55 + w); g.quadraticCurveTo(x + s * 0.8, topY + s * 0.7 - w, x + s * 0.06, topY + s * 1.0); g.closePath(); g.fill(); g.strokeStyle = 'rgba(0,0,0,.4)'; g.stroke();
  g.fillStyle = '#fff'; g.beginPath(); g.arc(x + s * 0.55, topY + s * 0.55, s * 0.17, 0, TAU); g.fill();
  g.restore();
}

export function drawCastle(g, P, s, x, groundY, t) {
  const c = P.castle; const d = 'rgba(0,0,0,.18)'; const bw = s * 3.6; const bh = s * 2.7;
  g.save(); g.lineWidth = s * 0.06; g.strokeStyle = 'rgba(60,40,30,.6)';
  g.fillStyle = c; g.fillRect(x, groundY - bh, bw, bh); g.strokeRect(x, groundY - bh, bw, bh);
  for (const tx of [x - s * 0.35, x + bw - s * 0.65]) { g.fillStyle = c; g.fillRect(tx, groundY - bh - s * 1.1, s, bh + s * 1.1); g.strokeRect(tx, groundY - bh - s * 1.1, s, bh + s * 1.1); g.fillStyle = '#e8564a'; g.beginPath(); g.moveTo(tx - s * 0.12, groundY - bh - s * 1.1); g.lineTo(tx + s * 0.5, groundY - bh - s * 1.9); g.lineTo(tx + s * 1.12, groundY - bh - s * 1.1); g.closePath(); g.fill(); g.stroke(); }
  g.fillStyle = c; for (let i = 0; i < 5; i++) g.fillRect(x + i * s * 0.74, groundY - bh - s * 0.3, s * 0.5, s * 0.3);
  g.fillStyle = '#3a2a4a'; g.beginPath(); g.moveTo(x + bw / 2 - s * 0.55, groundY); g.lineTo(x + bw / 2 - s * 0.55, groundY - s * 1.0); g.arc(x + bw / 2, groundY - s * 1.0, s * 0.55, Math.PI, 0); g.lineTo(x + bw / 2 + s * 0.55, groundY); g.closePath(); g.fill();
  g.fillStyle = '#ffe9a0'; for (const wx of [x + s * 0.45, x + bw - s * 0.85]) { g.beginPath(); g.arc(wx + s * 0.2, groundY - bh + s * 0.85, s * 0.2, Math.PI, 0); g.fillRect(wx, groundY - bh + s * 0.85, s * 0.4, s * 0.35); g.fill(); }
  g.fillStyle = d; g.fillRect(x, groundY - s * 0.2, bw, s * 0.2);
  const fx = x + bw / 2; g.strokeStyle = '#6a5a4a'; g.beginPath(); g.moveTo(fx, groundY - bh - s * 0.3); g.lineTo(fx, groundY - bh - s * 1.5); g.stroke();
  g.fillStyle = '#ff6a8a'; const w = Math.sin(t * 5) * s * 0.07; g.beginPath(); g.moveTo(fx, groundY - bh - s * 1.5); g.quadraticCurveTo(fx + s * 0.4, groundY - bh - s * 1.5 + w, fx + s * 0.8, groundY - bh - s * 1.3 + w); g.lineTo(fx, groundY - bh - s * 1.0); g.fill();
  g.restore();
}
