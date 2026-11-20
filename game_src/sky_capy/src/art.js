// «سكاي كابي» art, all drawn in code (2D canvas): a bright cel-shaded toy look with ink outlines. The sky with floating islands (a cloud
// village, a laundry-line ambush, the giant nest tree), the teal seaplane with the capybara pilot, the sky-pirate rats in balloons,
// gyrocopters and gliders, the captain's airship, songbird wings, cages, capsules, pearls, feathers and bubbles.
const INK = '#1d2a4a';
const TAU = Math.PI * 2;

export const PAINT_COLORS = {
  lagoon: ['#2fb8a8', '#1a8a88', '#ff7a4a'], royal: ['#3a6ae8', '#2a4ab8', '#ffd23a'], grape: ['#9a5ad8', '#6a3ab0', '#ff9ad8'],
  clover: ['#4ac84a', '#2a9a3a', '#fff06a'], cherry: ['#e83a4a', '#b0243a', '#ffd8a0'], snowbird: ['#f4f8ff', '#b8c8e8', '#4a8aff'],
  midnight: ['#2a3258', '#161c38', '#6ad0ff'], sunny: ['#ffd23a', '#e8a010', '#ff6a4a'],
};

function ell(g, x, y, rx, ry, fill, lw = 0, rot = 0) {
  g.beginPath(); g.ellipse(x, y, Math.max(0.01, rx), Math.max(0.01, ry), rot, 0, TAU);
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (lw) { g.lineWidth = lw; g.strokeStyle = INK; g.stroke(); }
}
function rr(g, x, y, w, h, r, fill, lw = 0) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (lw) { g.lineWidth = lw; g.strokeStyle = INK; g.stroke(); }
}
function poly(g, pts, fill, lw = 0) {
  g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath();
  if (fill) { g.fillStyle = fill; g.fill(); }
  if (lw) { g.lineWidth = lw; g.strokeStyle = INK; g.lineJoin = 'round'; g.stroke(); }
}

// ---- the sky ---------------------------------------------------------------------------------------------------------

/** One fluffy cloud (shaded blue underneath, ink-free for softness). */
export function drawCloud(g, x, y, s, a = 1) {
  g.save(); g.globalAlpha = a;
  for (const [dx, dy, r, c] of [[0, 0.12, 0.55, '#cfe0f8'], [0.55, 0.05, 0.7, '#cfe0f8'], [1.1, 0.14, 0.5, '#cfe0f8'], [0, 0, 0.55, '#fff'], [0.55, -0.12, 0.7, '#fff'], [1.1, 0, 0.5, '#fff']]) { g.fillStyle = c; g.beginPath(); g.arc(x + dx * s, y + dy * s, r * s * 0.55, 0, TAU); g.fill(); }
  g.restore();
}

/** Optional generated pictures (set by main.js; any missing one is null and the code-drawn version is used). */
export const ART = {};
function pic(g, im, x, y, w, rot = 0) {
  const h = w * im.naturalHeight / im.naturalWidth;
  g.save(); g.translate(x, y); if (rot) g.rotate(rot); g.drawImage(im, -w / 2, -h / 2, w, h); g.restore();
}

export function paintSky(w, h, stage) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, h);
  const T = [['#6ab8ff', '#bfe4ff', '#eaf6ff'], ['#7ac0f0', '#cfe8ff', '#fff2e0'], ['#5aa8e8', '#a8d8f8', '#e0f4e8']][(stage - 1) % 3];
  gr.addColorStop(0, T[0]); gr.addColorStop(0.55, T[1]); gr.addColorStop(1, T[2]);
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  return c;
}

/** A floating island seen from above: grass top with a rocky rim, and a little scene on it. */
export function drawIsland(g, x, y, s, kind, time) {
  const im = ART['island_' + ['village', 'laundry', 'tree'][kind]];
  if (im) { g.fillStyle = 'rgba(60,90,140,0.18)'; g.beginPath(); g.ellipse(x + s * 0.1, y + s * 0.3, s * 1.0, s * 0.5, 0, 0, TAU); g.fill(); pic(g, im, x, y, s * 2.1); return; }
  g.save(); g.translate(x, y);
  g.fillStyle = 'rgba(60,90,140,0.18)'; g.beginPath(); g.ellipse(s * 0.1, s * 0.22, s * 1.05, s * 0.55, 0, 0, TAU); g.fill(); // shadow on the clouds
  ell(g, 0, 0, s, s * 0.62, '#7a6a5a', s * 0.04);
  ell(g, 0, -s * 0.04, s * 0.94, s * 0.54, '#6ad05a', s * 0.04);
  ell(g, -s * 0.2, -s * 0.12, s * 0.5, s * 0.26, '#8ae070');
  if (kind === 0) { // a cloud village: little houses and a windmill
    for (const [hx, hy, hc] of [[-0.35, -0.1, '#ff9a8a'], [0.25, -0.05, '#ffd86a'], [0.05, 0.18, '#8ac8ff']]) { rr(g, s * hx - s * 0.13, s * hy - s * 0.1, s * 0.26, s * 0.2, s * 0.03, '#fff0d8', s * 0.025); poly(g, [[s * hx - s * 0.16, s * hy - s * 0.1], [s * hx, s * hy - s * 0.26], [s * hx + s * 0.16, s * hy - s * 0.1]], hc, s * 0.025); }
    g.save(); g.translate(s * 0.55, -s * 0.2); rr(g, -s * 0.05, -s * 0.05, s * 0.1, s * 0.26, s * 0.02, '#fff', s * 0.02);
    g.rotate(time * 0.8); for (let i = 0; i < 4; i++) { g.rotate(Math.PI / 2); rr(g, -s * 0.02, -s * 0.3, s * 0.04, s * 0.28, s * 0.01, '#ff7a6a', s * 0.015); } g.restore();
  } else if (kind === 1) { // laundry-line poles and colorful cloths
    for (const px of [-0.6, 0.6]) rr(g, s * px - s * 0.03, -s * 0.5, s * 0.06, s * 0.6, s * 0.02, '#8a5a34', s * 0.02);
    g.strokeStyle = INK; g.lineWidth = s * 0.02; g.beginPath(); g.moveTo(-s * 0.6, -s * 0.45); g.quadraticCurveTo(0, -s * 0.25, s * 0.6, -s * 0.45); g.stroke();
    ['#ff6a8a', '#ffd23a', '#6ad0ff', '#9a7aff', '#6ae08a'].forEach((c, i) => { const f = (i + 0.7) / 5.4; const cx = -s * 0.6 + f * s * 1.2; const cy = -s * 0.45 + Math.sin(f * Math.PI) * s * 0.2; rr(g, cx - s * 0.06, cy, s * 0.12, s * 0.2 + Math.sin(time * 3 + i) * s * 0.01, s * 0.02, c, s * 0.02); });
  } else { // the giant nest tree: a trunk with a round crown and a nest
    rr(g, -s * 0.1, -s * 0.1, s * 0.2, s * 0.36, s * 0.04, '#9a6a3a', s * 0.03);
    ell(g, 0, -s * 0.3, s * 0.62, s * 0.4, '#3ab04a', s * 0.04); ell(g, -s * 0.15, -s * 0.4, s * 0.3, s * 0.2, '#5ad06a');
    ell(g, 0, -s * 0.22, s * 0.26, s * 0.12, '#c8905a', s * 0.03); ell(g, 0, -s * 0.24, s * 0.16, s * 0.07, '#e8c890');
    for (const ex of [-0.05, 0.05]) ell(g, s * ex, -s * 0.27, s * 0.04, s * 0.05, '#fff', s * 0.015);
  }
  g.restore();
}

// ---- the plane ---------------------------------------------------------------------------------------------------------

/** The teal seaplane with the capybara pilot, seen from above. (x, y) = centre; s = wingspan/2. */
export function drawPlane(g, x, y, s, time, paint = 'lagoon', tilt = 0, hurt = false) {
  const [c1, c2, c3] = PAINT_COLORS[paint] || PAINT_COLORS.lagoon;
  if (ART.plane && (paint === 'lagoon' || !paint)) {
    g.save(); if (hurt) g.globalAlpha = 0.6 + 0.4 * Math.sin(time * 40);
    g.fillStyle = 'rgba(40,70,120,0.2)'; g.beginPath(); g.ellipse(x + s * 0.25, y + s * 0.55, s * 1.1, s * 0.35, 0, 0, TAU); g.fill();
    pic(g, ART.plane, x, y, s * 2.3, tilt * 0.25);
    g.translate(x, y - s * 0.62); g.rotate(time * 30); ell(g, 0, 0, s * 0.5, s * 0.06, 'rgba(255,255,255,0.45)'); g.restore(); return;
  }
  g.save(); g.translate(x, y); g.rotate(tilt * 0.25);
  if (hurt) g.globalAlpha = 0.6 + 0.4 * Math.sin(time * 40);
  const lw = Math.max(1.5, s * 0.07);
  g.fillStyle = 'rgba(40,70,120,0.2)'; g.beginPath(); g.ellipse(s * 0.25, s * 0.55, s * 1.1, s * 0.35, 0, 0, TAU); g.fill();
  // floats
  for (const sx of [-0.28, 0.28]) rr(g, s * sx - s * 0.07, -s * 0.1, s * 0.14, s * 0.8, s * 0.07, c3, lw);
  // wings
  rr(g, -s * 1.0, -s * 0.22, s * 2.0, s * 0.42, s * 0.18, c1, lw);
  rr(g, -s * 1.0, -s * 0.05, s * 2.0, s * 0.1, s * 0.05, c2);
  // tail
  rr(g, -s * 0.42, s * 0.55, s * 0.84, s * 0.2, s * 0.08, c1, lw);
  poly(g, [[-s * 0.05, s * 0.5], [s * 0.05, s * 0.5], [s * 0.04, s * 0.78], [-s * 0.04, s * 0.78]], c2, lw);
  // fuselage
  ell(g, 0, s * 0.15, s * 0.22, s * 0.7, c1, lw);
  ell(g, 0, s * 0.35, s * 0.1, s * 0.4, c2);
  // cockpit with the capybara pilot
  ell(g, 0, s * 0.05, s * 0.2, s * 0.26, '#cfe8ff', lw * 0.8);
  ell(g, 0, s * 0.08, s * 0.14, s * 0.16, '#a8714a', lw * 0.6);
  ell(g, 0, s * 0.0, s * 0.12, s * 0.09, '#8a5a38');
  for (const sx of [-1, 1]) { ell(g, sx * s * 0.1, -s * 0.03, s * 0.045, s * 0.04, '#fff', lw * 0.4); ell(g, sx * s * 0.1, -s * 0.03, s * 0.02, s * 0.02, INK); ell(g, sx * s * 0.1, s * 0.14, s * 0.035, s * 0.03, '#6a4028'); }
  rr(g, -s * 0.14, s * 0.06, s * 0.28, s * 0.05, s * 0.025, '#ffd23a'); // goggles strap
  // propeller
  g.save(); g.translate(0, -s * 0.62); g.rotate(time * 30);
  ell(g, 0, 0, s * 0.5, s * 0.06, 'rgba(255,255,255,0.45)'); ell(g, 0, 0, s * 0.06, s * 0.06, c3, lw * 0.6); g.restore();
  g.restore();
}

// ---- the sky pirates ---------------------------------------------------------------------------------------------------

function rat(g, x, y, s, hat = true, patch = false) {
  ell(g, x, y, s * 0.17, s * 0.15, '#9a8a8a', s * 0.03);
  for (const sx of [-1, 1]) ell(g, x + sx * s * 0.13, y - s * 0.1, s * 0.07, s * 0.07, '#e8a8b0', s * 0.025);
  for (const sx of [-1, 1]) { ell(g, x + sx * s * 0.07, y - s * 0.02, s * 0.035, s * 0.04, '#fff'); ell(g, x + sx * s * 0.07, y - s * 0.015, s * 0.016, s * 0.02, INK); }
  ell(g, x, y + s * 0.06, s * 0.035, s * 0.025, '#ff7a8a');
  if (patch) ell(g, x - s * 0.07, y - s * 0.02, s * 0.045, s * 0.045, INK);
  if (hat) { poly(g, [[x - s * 0.17, y - s * 0.07], [x, y - s * 0.24], [x + s * 0.17, y - s * 0.07]], '#2a2a5a', s * 0.025); ell(g, x, y - s * 0.12, s * 0.03, s * 0.03, '#fff'); }
}

/** An enemy at (x, y) with size s (about its radius * 2). [hpRatio] 0..1 for a cracked look when hurt. */
export function drawEnemy(g, type, x, y, s, time, hpRatio = 1, pop = 0) {
  g.save(); g.translate(x, y);
  if (pop) { g.scale(1 - pop * 0.6, 1 - pop * 0.6); g.rotate(pop * 0.8); g.globalAlpha = 1 - pop; }
  const lw = Math.max(1.5, s * 0.05);
  if (type === 'balloon' && ART.balloon) { pic(g, ART.balloon, 0, 0, s * 0.95); rat(g, 0, s * 0.56, s * 0.85, true, false); g.restore(); return; }
  if (type === 'balloon' || type === 'umbrella' || type === 'cage') {
    const col = type === 'cage' ? '#ffd23a' : type === 'umbrella' ? '#e8504a' : '#ff8a6a';
    g.save(); g.translate(0, -s * 0.15);
    ell(g, 0, 0, s * 0.5, s * 0.58, col, lw);
    for (const k of [-0.28, 0, 0.28]) { g.save(); g.beginPath(); g.ellipse(0, 0, s * 0.5, s * 0.58, 0, 0, TAU); g.clip(); ell(g, s * k, 0, s * 0.1, s * 0.6, 'rgba(255,255,255,0.78)'); g.restore(); }
    ell(g, 0, 0, s * 0.5, s * 0.58, null, lw);
    ell(g, -s * 0.18, -s * 0.2, s * 0.08, s * 0.14, 'rgba(255,255,255,0.55)');
    g.restore();
    g.strokeStyle = INK; g.lineWidth = lw * 0.6; g.beginPath(); g.moveTo(-s * 0.3, s * 0.2); g.lineTo(-s * 0.16, s * 0.5); g.moveTo(s * 0.3, s * 0.2); g.lineTo(s * 0.16, s * 0.5); g.stroke();
    rr(g, -s * 0.2, s * 0.46, s * 0.4, s * 0.26, s * 0.05, '#c8904a', lw);
    if (type === 'cage') { // a cage of a songbird hangs under the basket
      g.strokeStyle = INK; g.lineWidth = lw * 0.6; rr(g, -s * 0.14, s * 0.72, s * 0.28, s * 0.3, s * 0.05, 'rgba(255,255,255,0.3)', lw * 0.7); for (const k of [-0.07, 0, 0.07]) { g.beginPath(); g.moveTo(s * k, s * 0.72); g.lineTo(s * k, s * 1.02); g.stroke(); }
      ell(g, 0, s * 0.88, s * 0.07, s * 0.06, '#ff5a5a');
    }
    rat(g, 0, s * 0.52, s * 1.0, true, false);
    if (type === 'umbrella') { // an umbrella soaks up bubbles
      g.save(); g.translate(0, -s * 0.28); g.beginPath(); g.arc(0, s * 0.1, s * 0.62, Math.PI, 0); g.closePath(); g.fillStyle = '#4a8ae8'; g.fill(); g.lineWidth = lw; g.strokeStyle = INK; g.stroke();
      for (const k of [-0.3, 0, 0.3]) { g.beginPath(); g.moveTo(s * k, s * 0.1); g.lineTo(s * k * 0.9, s * 0.1 - s * 0.5); g.strokeStyle = '#fff'; g.lineWidth = lw * 0.8; g.stroke(); } g.restore();
    }
  } else if (type === 'gyro') {
    rr(g, -s * 0.2, -s * 0.05, s * 0.4, s * 0.6, s * 0.15, '#5a5a8a', lw);
    ell(g, 0, s * 0.02, s * 0.16, s * 0.18, '#cfe8ff', lw * 0.7);
    rat(g, 0, s * 0.03, s * 0.8, true, true);
    poly(g, [[-s * 0.12, s * 0.55], [s * 0.12, s * 0.55], [s * 0.05, s * 0.85], [-s * 0.05, s * 0.85]], '#3a3a6a', lw);
    g.save(); g.translate(0, -s * 0.08); g.rotate(time * 28); rr(g, -s * 0.6, -s * 0.04, s * 1.2, s * 0.08, s * 0.04, 'rgba(60,60,100,0.6)'); g.restore();
    ell(g, 0, -s * 0.08, s * 0.05, s * 0.05, '#ffd23a', lw * 0.6);
  } else if (type === 'glider') {
    poly(g, [[0, -s * 0.55], [s * 0.6, s * 0.25], [s * 0.12, s * 0.15], [0, s * 0.5], [-s * 0.12, s * 0.15], [-s * 0.6, s * 0.25]], '#ffe0a0', lw);
    poly(g, [[0, -s * 0.55], [s * 0.12, s * 0.15], [0, s * 0.5], [-s * 0.12, s * 0.15]], '#e8b060', lw * 0.7);
    rat(g, 0, s * 0.02, s * 0.7, false, true);
  } else if (type === 'thief') {
    ell(g, 0, s * 0.05, s * 0.35, s * 0.4, '#3a3a5a', lw);
    for (const sx of [-1, 1]) poly(g, [[sx * s * 0.3, 0], [sx * s * 0.8, -s * 0.15 + Math.sin(time * 14) * s * 0.1], [sx * s * 0.35, s * 0.2]], '#5a5a8a', lw);
    rat(g, 0, -s * 0.05, s * 0.9, false, false);
    rr(g, -s * 0.2, -s * 0.12, s * 0.4, s * 0.08, s * 0.03, INK); // a bandit mask
  }
  g.restore();
}

/** The captain's airship (the boss): big, dark blue, with a skull flag and the rat captain at the helm. */
export function drawBoss(g, x, y, s, time, hpRatio = 1, pop = 0) {
  g.save(); g.translate(x, y);
  if (pop) { g.scale(1 - pop * 0.4, 1 - pop * 0.4); g.rotate(pop * 0.3); g.globalAlpha = 1 - pop; }
  const lw = Math.max(2, s * 0.03);
  if (ART.boss) { pic(g, ART.boss, 0, -s * 0.05, s * 2.2); for (const sx of [-1, 1]) { g.save(); g.translate(sx * s * 0.82, s * 0.2); g.rotate(time * 26); rr(g, -s * 0.2, -s * 0.03, s * 0.4, s * 0.06, s * 0.03, 'rgba(255,255,255,0.35)'); g.restore(); } g.restore(); return; }
  // the balloon envelope
  ell(g, 0, -s * 0.3, s * 0.95, s * 0.5, '#3a5ab8', lw);
  for (const k of [-0.6, -0.3, 0, 0.3, 0.6]) { g.save(); g.beginPath(); g.ellipse(0, -s * 0.3, s * 0.95, s * 0.5, 0, 0, TAU); g.clip(); ell(g, s * k, -s * 0.3, s * 0.1, s * 0.52, 'rgba(255,255,255,0.35)'); g.restore(); }
  ell(g, -s * 0.3, -s * 0.5, s * 0.25, s * 0.12, 'rgba(255,255,255,0.4)');
  // the hull
  poly(g, [[-s * 0.7, s * 0.05], [s * 0.7, s * 0.05], [s * 0.5, s * 0.5], [-s * 0.5, s * 0.5]], '#8a5a34', lw);
  for (let i = -2; i <= 2; i++) ell(g, i * s * 0.22, s * 0.25, s * 0.06, s * 0.06, '#ffd23a', lw * 0.6);
  // the skull flag
  rr(g, -s * 0.03, -s * 0.95, s * 0.06, s * 0.5, s * 0.02, '#6a4a2a', lw * 0.7);
  poly(g, [[s * 0.03, -s * 0.95], [s * 0.45, -s * 0.85 + Math.sin(time * 5) * s * 0.03], [s * 0.03, -s * 0.72]], '#1d1d2a', lw * 0.7);
  ell(g, s * 0.16, -s * 0.84, s * 0.05, s * 0.05, '#fff');
  // the rat captain
  rat(g, 0, s * 0.05, s * 0.7, true, true);
  poly(g, [[-s * 0.22, -s * 0.06], [0, -s * 0.34], [s * 0.22, -s * 0.06]], '#1d1d2a', lw * 0.7); // a big captain hat
  ell(g, 0, -s * 0.15, s * 0.05, s * 0.05, '#fff');
  // propellers
  for (const sx of [-1, 1]) { g.save(); g.translate(sx * s * 0.82, s * 0.2); g.rotate(time * 26); rr(g, -s * 0.2, -s * 0.03, s * 0.4, s * 0.06, s * 0.03, 'rgba(255,255,255,0.6)'); g.restore(); }
  g.restore();
}

// ---- songbirds, pickups, bullets ---------------------------------------------------------------------------------------

export function drawBird(g, type, x, y, s, time) {
  const col = type === 'robin' ? ['#e83a3a', '#ff8a6a'] : type === 'jay' ? ['#3a78e8', '#9ad0ff'] : ['#ffd23a', '#fff29a'];
  const lw = Math.max(1.2, s * 0.07);
  g.save(); g.translate(x, y);
  const fl = Math.sin(time * 18) * 0.5;
  for (const sx of [-1, 1]) poly(g, [[sx * s * 0.1, -s * 0.05], [sx * s * (0.7 + fl * 0.2), -s * 0.2 + fl * s * 0.15], [sx * s * 0.5, s * 0.15]], col[0], lw);
  ell(g, 0, 0, s * 0.22, s * 0.32, col[0], lw);
  ell(g, 0, s * 0.08, s * 0.13, s * 0.2, col[1]);
  ell(g, 0, -s * 0.34, s * 0.17, s * 0.17, col[0], lw);
  poly(g, [[-s * 0.04, -s * 0.5], [0, -s * 0.62], [s * 0.04, -s * 0.5]], '#ffb830', lw * 0.7);
  for (const sx of [-1, 1]) ell(g, sx * s * 0.06, -s * 0.36, s * 0.03, s * 0.03, INK);
  g.restore();
}

export function drawCageItem(g, bird, x, y, s, time) {
  g.save(); g.translate(x, y + Math.sin(time * 3) * s * 0.06);
  g.fillStyle = 'rgba(255,240,150,0.3)'; g.beginPath(); g.arc(0, 0, s * 0.9, 0, TAU); g.fill();
  const lw = Math.max(1.5, s * 0.06);
  rr(g, -s * 0.4, -s * 0.4, s * 0.8, s * 0.8, s * 0.15, 'rgba(255,255,255,0.25)', lw);
  g.strokeStyle = INK; g.lineWidth = lw * 0.7; for (const k of [-0.25, 0, 0.25]) { g.beginPath(); g.moveTo(s * k, -s * 0.4); g.lineTo(s * k, s * 0.4); g.stroke(); }
  drawBird(g, bird, 0, s * 0.05, s * 0.7, time);
  g.restore();
}

export function drawPickup(g, kind, x, y, s, time, cap = '') {
  const lw = Math.max(1.2, s * 0.06);
  g.save(); g.translate(x, y);
  if (kind === 'pearl') { ell(g, 0, 0, s * 0.32, s * 0.32, '#fff', lw); ell(g, -s * 0.08, -s * 0.08, s * 0.1, s * 0.1, '#ffd8f0'); ell(g, s * 0.05, s * 0.05, s * 0.2, s * 0.2, 'rgba(255,200,235,0.55)'); }
  else if (kind === 'feather') { g.rotate(Math.sin(time * 3 + x) * 0.5 + 0.6); poly(g, [[0, -s * 0.5], [s * 0.2, -s * 0.1], [s * 0.12, s * 0.4], [-s * 0.12, s * 0.4], [-s * 0.2, -s * 0.1]], '#5ad0a8', lw); g.strokeStyle = '#1a8a68'; g.lineWidth = lw * 0.7; g.beginPath(); g.moveTo(0, -s * 0.45); g.lineTo(0, s * 0.5); g.stroke(); }
  else if (kind === 'capsule') {
    const col = cap === 'spread' ? '#ff9a3a' : cap === 'pierce' ? '#9a5aff' : '#3ad0ff';
    const pulse = 1 + Math.sin(time * 6) * 0.06; g.scale(pulse, pulse);
    ell(g, 0, 0, s * 0.62, s * 0.62, 'rgba(255,255,255,0.5)', lw); ell(g, 0, 0, s * 0.5, s * 0.5, col, lw);
    ell(g, -s * 0.15, -s * 0.18, s * 0.12, s * 0.08, 'rgba(255,255,255,0.7)');
    g.fillStyle = '#fff'; g.strokeStyle = INK; g.lineWidth = lw * 0.6;
    if (cap === 'spread') { for (const a of [-0.6, 0, 0.6]) { ell(g, Math.sin(a) * s * 0.26, -Math.cos(a) * s * 0.2 + s * 0.1, s * 0.07, s * 0.07, '#fff'); } }
    else if (cap === 'pierce') { poly(g, [[0, -s * 0.28], [s * 0.1, s * 0.1], [-s * 0.1, s * 0.1]], '#fff'); }
    else { for (const k of [-0.15, 0.15]) ell(g, s * k, 0, s * 0.07, s * 0.2, '#fff'); }
  }
  g.restore();
}

export function drawBubble(g, x, y, r, kind = 'bubble') {
  const col = kind === 'homing' ? 'rgba(255,120,120,0.85)' : kind === 'dart' ? 'rgba(80,170,255,0.9)' : 'rgba(110,200,255,0.8)';
  ell(g, x, y, r, r, col, Math.max(1, r * 0.2));
  ell(g, x - r * 0.3, y - r * 0.3, r * 0.3, r * 0.22, 'rgba(255,255,255,0.85)');
}
export function drawEnemyBullet(g, x, y, r) {
  g.fillStyle = '#fff'; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill();
  g.strokeStyle = '#e83a4a'; g.lineWidth = r * 0.7; g.beginPath(); g.arc(x, y, r * 0.75, 0, TAU); g.stroke();
}

/** A burst of confetti-like bits (a popped pirate). [k] 0..1 */
export function drawPopBurst(g, x, y, s, k, kind) {
  const cols = kind === 'boss' ? ['#ffd23a', '#ff8a3a', '#fff'] : ['#ff8a6a', '#ffd23a', '#6ad0ff', '#fff'];
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU + k; const d = s * (0.2 + 0.9 * k); g.fillStyle = cols[i % cols.length]; g.globalAlpha = 1 - k; g.beginPath(); g.arc(x + Math.cos(a) * d, y + Math.sin(a) * d, s * 0.12 * (1 - k * 0.5), 0, TAU); g.fill(); }
  g.globalAlpha = 1;
}

