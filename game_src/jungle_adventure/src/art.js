// Cel-shaded cartoon art drawn in code: flat colours, one shade tone, bold dark outlines. Units are tiles
// (the caller scales the canvas so 1 = one tile). Everything here is original.
export const INK = '#2a1a10';

export const THEMES = {
  jungle: { body: '#8a5530', shade: '#6b3f22', speck: '#5a341b', top: '#5cb43a', topLight: '#8fd94f', topShade: '#3f8a28', edge: '#4a2c16', ledge: '#a8743f', ledgeShade: '#80542a' },
  ruins: { body: '#7f8f7c', shade: '#61715f', speck: '#566554', top: '#5f9a3a', topLight: '#86c04f', topShade: '#43772a', edge: '#3d4a3b', ledge: '#9aa894', ledgeShade: '#73826f', brick: true },
  temple: { body: '#c4a067', shade: '#a07f4b', speck: '#8d6e3f', top: '#7aa64a', topLight: '#a3cc63', topShade: '#58802f', edge: '#6e5530', ledge: '#d8b77a', ledgeShade: '#ad8c55', brick: true, sun: true },
};

function line(ctx, w = 0.06) {
  ctx.lineWidth = w;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = INK;
}

function ell(ctx, x, y, rx, ry, fill, stroke = true, rot = 0) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) ctx.stroke();
}

function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// a small seeded random so the same tile always looks the same
function hash(x, y, k = 0) {
  let h = (x * 374761393 + y * 668265263 + k * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// ---- tiles ------------------------------------------------------------------------------------------------------

/** Draws the solid tile at (x, y). `solid(x, y)` tells which neighbours are solid (for edges, grass and outlines). */
export function drawSolid(ctx, x, y, th, solid, hx = x, hy = y) {
  const up = solid(x, y - 1);
  const dn = solid(x, y + 1);
  const lf = solid(x - 1, y);
  const rt = solid(x + 1, y);
  ctx.fillStyle = th.body;
  ctx.fillRect(x, y, 1.002, 1.002);
  if (th.brick) {
    // mossy stone blocks: two bricks per row, offset every other row
    const off = hy % 2 ? 0.5 : 0;
    ctx.strokeStyle = th.shade;
    ctx.lineWidth = 0.045;
    ctx.beginPath();
    ctx.moveTo(x, y + 0.5);
    ctx.lineTo(x + 1, y + 0.5);
    for (const bx of [off, off + 0.5]) {
      const xx = x + (bx % 1);
      ctx.moveTo(xx, y);
      ctx.lineTo(xx, y + 0.5);
    }
    for (const bx of [off + 0.25, off + 0.75]) {
      const xx = x + (bx % 1);
      ctx.moveTo(xx, y + 0.5);
      ctx.lineTo(xx, y + 1);
    }
    ctx.stroke();
    // a lighter top-left on each block = cel shading
    ctx.fillStyle = 'rgba(255,255,255,0.09)';
    ctx.fillRect(x, y, 1, 0.08);
    if (hash(hx, hy) < 0.25) {
      ctx.fillStyle = th.top;
      ctx.globalAlpha = 0.55;
      ell(ctx, x + 0.2 + hash(hx, hy, 1) * 0.6, y + 0.3 + hash(hx, hy, 2) * 0.5, 0.22, 0.12, th.top, false);
      ctx.globalAlpha = 1;
    }
    if (th.sun && hash(hx, hy, 7) < 0.05 && up) {
      // a carved sun on some temple blocks
      ctx.strokeStyle = th.shade;
      ctx.lineWidth = 0.05;
      ctx.beginPath();
      ctx.arc(x + 0.5, y + 0.5, 0.18, 0, Math.PI * 2);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        ctx.moveTo(x + 0.5 + Math.cos(a) * 0.25, y + 0.5 + Math.sin(a) * 0.25);
        ctx.lineTo(x + 0.5 + Math.cos(a) * 0.36, y + 0.5 + Math.sin(a) * 0.36);
      }
      ctx.stroke();
    }
  } else {
    // dirt with pebbles and roots
    for (let i = 0; i < 3; i++) {
      if (hash(hx, hy, i) < 0.6) ell(ctx, x + 0.15 + hash(hx, hy, i + 3) * 0.7, y + 0.2 + hash(hx, hy, i + 6) * 0.65, 0.07, 0.05, th.speck, false);
    }
  }
  // shade the lower part of deep tiles
  if (up) {
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.fillRect(x, y, 1.002, 1.002);
  }
  // grass / moss cap on top surfaces
  if (!up) {
    ctx.fillStyle = th.topShade;
    ctx.fillRect(x, y, 1.002, 0.34);
    ctx.fillStyle = th.top;
    ctx.fillRect(x, y, 1.002, 0.24);
    ctx.fillStyle = th.topLight;
    ctx.fillRect(x, y, 1.002, 0.07);
    // soft round tufts of grass (no outline, so they never look like spikes)
    for (let i = 0; i < 2; i++) {
      if (hash(hx, hy, i + 20) < 0.55) {
        const bx = x + 0.2 + i * 0.5 + (hash(hx, hy, i) - 0.5) * 0.2;
        const r = 0.09 + hash(hx, hy, i + 9) * 0.05;
        ell(ctx, bx, y + 0.02, r * 1.4, r, th.topShade, false);
        ell(ctx, bx, y - 0.01, r * 1.2, r * 0.85, th.topLight, false);
      }
    }
    ctx.fillStyle = th.top;
    if (hash(hx, hy, 4) < 0.5) {
      ctx.beginPath();
      ctx.ellipse(x + 0.3 + hash(hx, hy, 5) * 0.4, y + 0.3, 0.09, 0.14, 0, 0, Math.PI);
      ctx.fill();
    }
  }
  // bold outline only on the outside edges
  line(ctx, 0.07);
  ctx.beginPath();
  if (!up) { ctx.moveTo(x, y); ctx.lineTo(x + 1, y); }
  if (!dn) { ctx.moveTo(x, y + 1); ctx.lineTo(x + 1, y + 1); }
  if (!lf) { ctx.moveTo(x, y); ctx.lineTo(x, y + 1); }
  if (!rt) { ctx.moveTo(x + 1, y); ctx.lineTo(x + 1, y + 1); }
  ctx.stroke();
}

export function drawLedge(ctx, x, y, th) {
  line(ctx, 0.06);
  rrect(ctx, x + 0.02, y + 0.02, 0.96, 0.32, 0.08);
  ctx.fillStyle = th.ledge;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = th.ledgeShade;
  ctx.fillRect(x + 0.08, y + 0.22, 0.84, 0.08);
  ctx.fillStyle = th.top;
  ctx.fillRect(x + 0.05, y + 0.02, 0.9, 0.07);
}

export function drawSpikes(ctx, x, y) {
  line(ctx, 0.05);
  for (let i = 0; i < 3; i++) {
    const bx = x + i / 3;
    ctx.beginPath();
    ctx.moveTo(bx + 0.02, y + 1);
    ctx.lineTo(bx + 1 / 6, y + 0.45);
    ctx.lineTo(bx + 1 / 3 - 0.02, y + 1);
    ctx.closePath();
    ctx.fillStyle = '#c9ced6';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(bx + 1 / 6, y + 0.5);
    ctx.lineTo(bx + 0.11, y + 0.9);
    ctx.lineTo(bx + 0.14, y + 0.9);
    ctx.fill();
  }
}

// ---- the explorer -----------------------------------------------------------------------------------------------
// A young explorer drawn side-on: long brown hair flowing back, a tan pith helmet with a blue band, a blue collared
// shirt, khaki shorts with a belt, grey socks, brown boots and a backpack. Limbs have knees and elbows, so the run
// cycle swings and bends like a real stride. Colours have one shade tone each and every shape has a dark outline.

const G = {
  skin: '#eaa47a', skinSh: '#c9805a',
  hair: '#7b4424', hairSh: '#5a2f16', hairHi: '#a0623a',
  shirt: '#2f6fd8', shirtSh: '#2153a6', shirtHi: '#4f8ef0',
  shorts: '#d9c08a', shortsSh: '#b79c63', belt: '#6b3f1d',
  sock: '#b9b6ae', boot: '#8a4b22', bootSh: '#64341a', sole: '#3b2412',
  helmet: '#d9b97c', helmetSh: '#b8955a', helmetHi: '#ecd3a0', band: '#2f5fc4',
  pack: '#8f5428', packSh: '#6d3e1c',
};

/** A smooth limb through several points: the outline first, then the colour, so knees and elbows show no seams. */
function limb(ctx, pts, w, color) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const [col, lw] of [[INK, w + 0.07], [color, w]]) {
    ctx.strokeStyle = col;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
  }
}

/** A thick rounded limb segment with an outline: ink first, colour on top. */
function seg(ctx, x0, y0, x1, y1, w, color) {
  ctx.lineCap = 'round';
  ctx.strokeStyle = INK;
  ctx.lineWidth = w + 0.07;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

function leg(ctx, hx, hy, thigh, knee, near) {
  // thigh angle from straight down (+ = forward), knee bend (+ = shin folds back)
  const L1 = 0.29;
  const L2 = 0.28;
  const kx = hx + Math.sin(thigh) * L1;
  const ky = hy + Math.cos(thigh) * L1;
  const sa = thigh - knee;
  const fx = kx + Math.sin(sa) * L2;
  const fy = ky + Math.cos(sa) * L2;
  const skin = near ? G.skin : G.skinSh;
  limb(ctx, [[hx, hy], [kx, ky], [fx - Math.sin(sa) * 0.08, fy - Math.cos(sa) * 0.08]], 0.13, skin);
  // sock and boot, the toe pointing forward along the ground
  seg(ctx, fx - Math.sin(sa) * 0.12, fy - Math.cos(sa) * 0.12, fx - Math.sin(sa) * 0.03, fy - Math.cos(sa) * 0.03, 0.125, near ? G.sock : '#9a978f');
  ctx.save();
  ctx.translate(fx, fy);
  ctx.rotate(-sa * 0.6);
  line(ctx, 0.05);
  rrect(ctx, -0.08, -0.09, 0.25, 0.14, 0.05);
  ctx.fillStyle = near ? G.boot : G.bootSh;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = G.sole;
  ctx.fillRect(-0.07, 0.025, 0.23, 0.025);
  ctx.restore();
}

function arm(ctx, sx, sy, upper, elbow, near) {
  const L1 = 0.22;
  const L2 = 0.21;
  const ex = sx + Math.sin(upper) * L1;
  const ey = sy + Math.cos(upper) * L1;
  const fa = upper + elbow;
  const hx = ex + Math.sin(fa) * L2;
  const hy = ey + Math.cos(fa) * L2;
  // short blue sleeve over the upper arm
  seg(ctx, sx, sy, sx + Math.sin(upper) * 0.11, sy + Math.cos(upper) * 0.11, 0.15, near ? G.shirt : G.shirtSh);
  limb(ctx, [[sx + Math.sin(upper) * 0.1, sy + Math.cos(upper) * 0.1], [ex, ey], [hx, hy]], 0.1, near ? G.skin : G.skinSh);
  line(ctx, 0.045);
  ell(ctx, hx, hy, 0.065, 0.065, near ? G.skin : G.skinSh);
}

/**
 * The explorer girl with her feet at (x, y). s: { phase, air, vy, wall, dir, blink }
 */
export function drawGirl(ctx, x, y, s) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s.dir < 0 ? -1 : 1, 1);
  const ph = s.phase * 2.1;
  const run = !s.air;
  const sw = Math.sin(ph);
  const bob = run ? Math.abs(Math.cos(ph)) * 0.045 : 0;
  ctx.translate(0, -bob);
  const lean = run ? 0.1 : s.wall ? -0.05 : 0.05;
  ctx.rotate(lean);

  // pose: thigh/knee per leg, upper arm/elbow per arm
  let legF, legB, armF, armB;
  if (s.wall) {
    legF = [0.5, 1.2]; legB = [-0.2, 0.6]; armF = [2.4, 0.2]; armB = [2.0, 0.3];
  } else if (s.air) {
    const up = s.vy < 0;
    legF = up ? [0.9, 1.5] : [0.35, 0.5];
    legB = up ? [-0.25, 1.1] : [-0.3, 0.4];
    armF = up ? [2.6, 0.2] : [1.6, 0.3];
    armB = up ? [-0.6, 0.8] : [-1.2, 0.5];
  } else {
    legF = [sw * 0.75, Math.max(0, -Math.cos(ph)) * 1.25 + 0.15];
    legB = [-sw * 0.75, Math.max(0, Math.cos(ph)) * 1.25 + 0.15];
    armF = [-sw * 0.9, 1.1];
    armB = [sw * 0.9, 1.1];
  }
  const hipX = 0;
  const hipY = -0.6;
  const shX = 0.03;
  const shY = -1.0;
  const hairSway = run ? Math.sin(ph + 1) * 0.06 : s.vy < 0 ? 0.12 : -0.08;

  // long hair flowing behind (drawn first, behind everything)
  line(ctx, 0.055);
  ctx.beginPath();
  ctx.moveTo(-0.05, -1.48);
  ctx.bezierCurveTo(-0.32, -1.5, -0.42, -1.25, -0.44 - hairSway, -1.02);
  ctx.bezierCurveTo(-0.46 - hairSway, -0.86, -0.36 - hairSway, -0.78, -0.3 - hairSway * 0.5, -0.86);
  ctx.bezierCurveTo(-0.25, -0.95, -0.12, -1.0, -0.06, -1.12);
  ctx.closePath();
  ctx.fillStyle = G.hair;
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = G.hairSh;
  ctx.lineWidth = 0.03;
  ctx.beginPath();
  ctx.moveTo(-0.2, -1.38);
  ctx.quadraticCurveTo(-0.34, -1.15, -0.36 - hairSway, -0.95);
  ctx.moveTo(-0.12, -1.3);
  ctx.quadraticCurveTo(-0.22, -1.12, -0.24 - hairSway * 0.7, -0.98);
  ctx.stroke();

  arm(ctx, shX - 0.02, shY + 0.02, armB[0], armB[1], false);
  leg(ctx, hipX - 0.02, hipY, legB[0], legB[1], false);

  // backpack
  line(ctx, 0.055);
  rrect(ctx, -0.33, -1.0, 0.2, 0.36, 0.07);
  ctx.fillStyle = G.pack;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = G.packSh;
  ctx.fillRect(-0.31, -0.78, 0.16, 0.05);

  leg(ctx, hipX + 0.03, hipY, legF[0], legF[1], true);
  // shorts over the tops of both legs
  line(ctx, 0.055);
  ctx.beginPath();
  ctx.moveTo(-0.17, -0.7);
  ctx.lineTo(0.17, -0.7);
  ctx.lineTo(0.2, -0.5);
  ctx.lineTo(0.02, -0.48);
  ctx.lineTo(-0.02, -0.55);
  ctx.lineTo(-0.2, -0.5);
  ctx.closePath();
  ctx.fillStyle = G.shorts;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = G.shortsSh;
  ctx.fillRect(-0.15, -0.6, 0.12, 0.05);


  // blue shirt with a collar and a pocket
  line(ctx, 0.055);
  ctx.beginPath();
  ctx.moveTo(-0.17, -1.03);
  ctx.quadraticCurveTo(0.02, -1.08, 0.18, -1.02);
  ctx.lineTo(0.2, -0.72);
  ctx.quadraticCurveTo(0.02, -0.66, -0.19, -0.72);
  ctx.closePath();
  ctx.fillStyle = G.shirt;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = G.shirtSh;
  ctx.fillRect(-0.17, -0.82, 0.36, 0.08);
  ctx.fillStyle = G.shirtHi;
  ctx.fillRect(0.06, -1.0, 0.1, 0.03);
  rrect(ctx, 0.04, -0.94, 0.1, 0.09, 0.02);
  ctx.fillStyle = G.shirtSh;
  ctx.fill();
  ctx.lineWidth = 0.03;
  ctx.stroke();
  // collar
  line(ctx, 0.04);
  ctx.fillStyle = G.shirtHi;
  ctx.beginPath();
  ctx.moveTo(-0.05, -1.06);
  ctx.lineTo(0.08, -1.05);
  ctx.lineTo(0.02, -0.97);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // belt with a buckle and the backpack strap
  ctx.fillStyle = G.belt;
  ctx.fillRect(-0.18, -0.73, 0.38, 0.05);
  ctx.fillStyle = '#e0b84d';
  ctx.fillRect(0.08, -0.735, 0.05, 0.06);
  ctx.strokeStyle = G.packSh;
  ctx.lineWidth = 0.05;
  ctx.beginPath();
  ctx.moveTo(-0.12, -1.04);
  ctx.lineTo(0.1, -0.78);
  ctx.stroke();

  // neck and head (side view)
  seg(ctx, 0.04, -1.04, 0.05, -1.12, 0.1, G.skinSh);
  line(ctx, 0.055);
  ctx.beginPath();
  ctx.ellipse(0.06, -1.27, 0.22, 0.2, 0, 0, Math.PI * 2);
  ctx.fillStyle = G.skin;
  ctx.fill();
  ctx.stroke();
  // nose and chin
  ctx.beginPath();
  ctx.moveTo(0.26, -1.3);
  ctx.quadraticCurveTo(0.33, -1.25, 0.27, -1.22);
  ctx.fillStyle = G.skin;
  ctx.fill();
  ctx.stroke();
  // hair on the head: fringe and the side, a lighter streak
  ctx.beginPath();
  ctx.moveTo(-0.15, -1.18);
  ctx.quadraticCurveTo(-0.2, -1.42, 0.04, -1.47);
  ctx.quadraticCurveTo(0.24, -1.47, 0.27, -1.37);
  ctx.quadraticCurveTo(0.12, -1.38, 0.05, -1.33);
  ctx.quadraticCurveTo(0.0, -1.24, -0.04, -1.16);
  ctx.closePath();
  ctx.fillStyle = G.hair;
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = G.hairHi;
  ctx.lineWidth = 0.025;
  ctx.beginPath();
  ctx.moveTo(-0.08, -1.4);
  ctx.quadraticCurveTo(0.05, -1.45, 0.18, -1.42);
  ctx.stroke();
  // ear
  line(ctx, 0.04);
  ell(ctx, -0.01, -1.25, 0.04, 0.055, G.skinSh);
  // eye, brow, cheek, smile
  if (s.blink) {
    ctx.strokeStyle = INK;
    ctx.lineWidth = 0.03;
    ctx.beginPath();
    ctx.moveTo(0.14, -1.29);
    ctx.lineTo(0.21, -1.29);
    ctx.stroke();
  } else {
    ell(ctx, 0.175, -1.295, 0.04, 0.045, '#ffffff', false);
    ell(ctx, 0.19, -1.29, 0.026, 0.034, '#3b2412', false);
    ell(ctx, 0.196, -1.302, 0.009, 0.011, '#ffffff', false);
  }
  ctx.strokeStyle = G.hairSh;
  ctx.lineWidth = 0.025;
  ctx.beginPath();
  ctx.moveTo(0.13, -1.355);
  ctx.quadraticCurveTo(0.18, -1.37, 0.23, -1.35);
  ctx.stroke();
  ell(ctx, 0.17, -1.2, 0.04, 0.022, 'rgba(230,110,90,0.55)', false);
  ctx.strokeStyle = '#7a3b22';
  ctx.lineWidth = 0.022;
  ctx.beginPath();
  ctx.moveTo(0.2, -1.18);
  ctx.quadraticCurveTo(0.235, -1.165, 0.255, -1.185);
  ctx.stroke();

  // pith helmet with a blue band
  line(ctx, 0.05);
  ctx.beginPath();
  ctx.ellipse(0.06, -1.42, 0.4, 0.075, -0.06, 0, Math.PI * 2);
  ctx.fillStyle = G.helmetSh;
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0.04, -1.45, 0.26, 0.21, 0, Math.PI, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = G.helmet;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = G.band;
  ctx.beginPath();
  ctx.ellipse(0.04, -1.47, 0.255, 0.05, 0, Math.PI, Math.PI * 2);
  ctx.lineTo(0.295, -1.45);
  ctx.lineTo(-0.215, -1.45);
  ctx.closePath();
  ctx.fill();
  ctx.lineWidth = 0.03;
  ctx.stroke();
  ctx.fillStyle = G.helmetHi;
  ell(ctx, -0.02, -1.58, 0.1, 0.04, G.helmetHi, false);

  arm(ctx, shX + 0.04, shY + 0.03, armF[0], armF[1], true);
  ctx.restore();
}

// ---- creatures --------------------------------------------------------------------------------------------------

export function drawBeetle(ctx, b, t) {
  ctx.save();
  ctx.translate(b.x, b.y);
  if (!b.alive) {
    ctx.scale(1.3, Math.max(0.15, 0.35 - b.squash));
    ctx.globalAlpha = Math.max(0, 1 - b.squash * 1.5);
  }
  ctx.scale(b.vx > 0 ? -1 : 1, 1);
  line(ctx, 0.055);
  // legs
  const w = Math.sin(t * 16 + b.x) * 0.06;
  ctx.beginPath();
  for (const lx of [-0.25, 0, 0.25]) {
    ctx.moveTo(lx, -0.18);
    ctx.lineTo(lx - 0.08 + w, 0);
  }
  ctx.stroke();
  // shell
  ctx.beginPath();
  ctx.ellipse(0.05, -0.25, 0.42, 0.3, 0, Math.PI, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = '#e0457b';
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#b52d5e';
  ctx.beginPath();
  ctx.ellipse(0.05, -0.25, 0.42, 0.12, 0, Math.PI, Math.PI * 2);
  ctx.fill();
  ell(ctx, 0.15, -0.38, 0.06, 0.05, '#ffd166', false);
  ell(ctx, -0.12, -0.33, 0.05, 0.04, '#ffd166', false);
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ell(ctx, -0.08, -0.45, 0.12, 0.04, 'rgba(255,255,255,0.45)', false);
  // head with grumpy eyes
  ell(ctx, -0.4, -0.18, 0.15, 0.13, '#5b2a6e');
  ell(ctx, -0.45, -0.21, 0.05, 0.05, '#ffffff', false);
  ell(ctx, -0.47, -0.2, 0.025, 0.03, '#2a1a10', false);
  ctx.beginPath();
  ctx.moveTo(-0.52, -0.29);
  ctx.lineTo(-0.4, -0.26);
  ctx.lineWidth = 0.035;
  ctx.stroke();
  ctx.restore();
}

export function drawBat(ctx, bat, t) {
  ctx.save();
  ctx.translate(bat.x, bat.y);
  line(ctx, 0.05);
  const f = Math.sin(t * 18 + bat.phase);
  for (const sx of [-1, 1]) {
    ctx.save();
    ctx.scale(sx, 1);
    ctx.rotate(-0.3 + f * 0.5);
    ctx.beginPath();
    ctx.moveTo(0.1, 0);
    ctx.quadraticCurveTo(0.35, -0.35, 0.62, -0.1);
    ctx.quadraticCurveTo(0.5, 0, 0.55, 0.08);
    ctx.quadraticCurveTo(0.4, 0.02, 0.35, 0.12);
    ctx.quadraticCurveTo(0.25, 0.05, 0.1, 0.12);
    ctx.closePath();
    ctx.fillStyle = '#6a4bb3';
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  ell(ctx, 0, 0, 0.17, 0.19, '#7d5cc7');
  for (const sx of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(sx * 0.06, -0.15);
    ctx.lineTo(sx * 0.14, -0.3);
    ctx.lineTo(sx * 0.15, -0.12);
    ctx.fillStyle = '#7d5cc7';
    ctx.fill();
    ctx.stroke();
    ell(ctx, sx * 0.065, -0.03, 0.045, 0.05, '#ffe066', false);
    ell(ctx, sx * 0.065, -0.02, 0.02, 0.025, '#2a1a10', false);
  }
  ctx.restore();
}

// ---- pickups ----------------------------------------------------------------------------------------------------

export function drawCoin(ctx, x, y, t) {
  const sx = Math.abs(Math.cos(t * 3 + x * 0.7));
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(Math.max(0.15, sx), 1);
  line(ctx, 0.05);
  ell(ctx, 0, 0, 0.3, 0.3, '#f5b72c');
  ell(ctx, 0, 0, 0.21, 0.21, '#ffd85a', false);
  ctx.strokeStyle = '#c98a14';
  ctx.lineWidth = 0.04;
  ctx.beginPath();
  ctx.arc(0, 0, 0.1, 0, Math.PI * 2);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.moveTo(Math.cos(a) * 0.13, Math.sin(a) * 0.13);
    ctx.lineTo(Math.cos(a) * 0.18, Math.sin(a) * 0.18);
  }
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillRect(-0.16, -0.18, 0.06, 0.12);
  ctx.restore();
}

export function drawRelic(ctx, x, y, t) {
  ctx.save();
  ctx.translate(x, y + Math.sin(t * 2.5 + x) * 0.08);
  const g = ctx.createRadialGradient(0, 0, 0.05, 0, 0, 0.9);
  g.addColorStop(0, 'rgba(120,255,170,0.75)');
  g.addColorStop(1, 'rgba(120,255,170,0)');
  ctx.fillStyle = g;
  ctx.fillRect(-0.9, -0.9, 1.8, 1.8);
  line(ctx, 0.055);
  ctx.beginPath();
  ctx.moveTo(0, -0.42);
  ctx.lineTo(0.3, -0.12);
  ctx.lineTo(0.22, 0.34);
  ctx.lineTo(-0.22, 0.34);
  ctx.lineTo(-0.3, -0.12);
  ctx.closePath();
  ctx.fillStyle = '#2fbf71';
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#1e8f53';
  ctx.beginPath();
  ctx.moveTo(0, -0.42);
  ctx.lineTo(0.3, -0.12);
  ctx.lineTo(0.22, 0.34);
  ctx.lineTo(0, 0.1);
  ctx.closePath();
  ctx.fill();
  // carved face
  ctx.strokeStyle = '#145c36';
  ctx.lineWidth = 0.04;
  ctx.beginPath();
  ctx.moveTo(-0.12, -0.05);
  ctx.lineTo(-0.04, -0.05);
  ctx.moveTo(0.04, -0.05);
  ctx.lineTo(0.12, -0.05);
  ctx.moveTo(-0.08, 0.15);
  ctx.lineTo(0.08, 0.15);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillRect(-0.14, -0.25, 0.06, 0.14);
  ctx.restore();
}

const POWER = {
  shield: { c: '#74c0fc', d: '#1c7ed6' },
  magnet: { c: '#ff6b6b', d: '#c92a2a' },
  boots: { c: '#ffa94d', d: '#d9480f' },
  hourglass: { c: '#ffd43b', d: '#e67700' },
};

export function drawPower(ctx, kind, x, y, t) {
  const c = POWER[kind];
  ctx.save();
  ctx.translate(x, y + Math.sin(t * 3 + x) * 0.08);
  // bubble
  const g = ctx.createRadialGradient(-0.12, -0.12, 0.05, 0, 0, 0.45);
  g.addColorStop(0, 'rgba(255,255,255,0.9)');
  g.addColorStop(1, c.c + '55');
  line(ctx, 0.05);
  ell(ctx, 0, 0, 0.42, 0.42, g);
  line(ctx, 0.05);
  if (kind === 'shield') {
    ctx.beginPath();
    ctx.moveTo(0, -0.25);
    ctx.lineTo(0.2, -0.17);
    ctx.lineTo(0.17, 0.08);
    ctx.lineTo(0, 0.25);
    ctx.lineTo(-0.17, 0.08);
    ctx.lineTo(-0.2, -0.17);
    ctx.closePath();
    ctx.fillStyle = c.d;
    ctx.fill();
    ctx.stroke();
  } else if (kind === 'magnet') {
    ctx.lineWidth = 0.13;
    ctx.strokeStyle = INK;
    ctx.beginPath();
    ctx.arc(0, 0, 0.16, Math.PI, 0, true);
    ctx.stroke();
    ctx.lineWidth = 0.08;
    ctx.strokeStyle = c.d;
    ctx.beginPath();
    ctx.arc(0, 0, 0.16, Math.PI, 0, true);
    ctx.stroke();
    ctx.fillStyle = '#dee2e6';
    ctx.fillRect(-0.22, -0.08, 0.12, 0.1);
    ctx.fillRect(0.1, -0.08, 0.12, 0.1);
  } else if (kind === 'boots') {
    ctx.beginPath();
    ctx.moveTo(-0.12, -0.22);
    ctx.lineTo(0.06, -0.22);
    ctx.lineTo(0.06, 0.04);
    ctx.lineTo(0.24, 0.1);
    ctx.lineTo(0.24, 0.2);
    ctx.lineTo(-0.14, 0.2);
    ctx.closePath();
    ctx.fillStyle = c.d;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-0.26, -0.1);
    ctx.lineTo(-0.16, -0.04);
    ctx.lineTo(-0.26, 0.02);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(-0.16, -0.24);
    ctx.lineTo(0.16, -0.24);
    ctx.lineTo(0, 0);
    ctx.lineTo(0.16, 0.24);
    ctx.lineTo(-0.16, 0.24);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = '#fff3bf';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = c.d;
    ctx.beginPath();
    ctx.moveTo(-0.09, 0.2);
    ctx.lineTo(0.09, 0.2);
    ctx.lineTo(0, 0.08);
    ctx.fill();
  }
  ctx.restore();
}

// ---- flags and goals --------------------------------------------------------------------------------------------

export function drawFlag(ctx, f, t) {
  ctx.save();
  ctx.translate(f.x, f.y);
  line(ctx, 0.055);
  ctx.fillStyle = '#8d9b8a';
  rrect(ctx, -0.18, -0.4, 0.36, 0.4, 0.05);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#6f4a28';
  ctx.fillRect(-0.04, -1.9, 0.08, 1.5);
  ctx.strokeRect(-0.04, -1.9, 0.08, 1.5);
  const h = f.up ? -1.85 : -0.95;
  const wave = Math.sin(t * 6) * 0.05;
  ctx.beginPath();
  ctx.moveTo(0.04, h);
  ctx.quadraticCurveTo(0.35, h + 0.1 + wave, 0.6, h + wave);
  ctx.lineTo(0.55, h + 0.5);
  ctx.quadraticCurveTo(0.3, h + 0.6 - wave, 0.04, h + 0.5);
  ctx.closePath();
  ctx.fillStyle = f.up ? '#e8483f' : '#a8a8a8';
  ctx.fill();
  ctx.stroke();
  if (f.up) {
    ctx.fillStyle = '#ffd43b';
    ell(ctx, 0.3, h + 0.27, 0.08, 0.08, '#ffd43b', false);
  }
  ctx.restore();
}

function face(ctx, y, colors, beak) {
  line(ctx, 0.06);
  rrect(ctx, -0.42, y, 0.84, 0.66, 0.1);
  ctx.fillStyle = colors[0];
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = colors[1];
  ctx.fillRect(-0.38, y + 0.5, 0.76, 0.12);
  for (const sx of [-1, 1]) {
    ell(ctx, sx * 0.17, y + 0.24, 0.1, 0.1, '#ffffff');
    ell(ctx, sx * 0.17, y + 0.25, 0.05, 0.05, INK, false);
  }
  if (beak) {
    ctx.beginPath();
    ctx.moveTo(-0.08, y + 0.36);
    ctx.lineTo(0.08, y + 0.36);
    ctx.lineTo(0, y + 0.55);
    ctx.closePath();
    ctx.fillStyle = '#ffa94d';
    ctx.fill();
    ctx.stroke();
  } else {
    rrect(ctx, -0.16, y + 0.38, 0.32, 0.1, 0.04);
    ctx.fillStyle = INK;
    ctx.fill();
  }
}

/** The totem at the end of a level (or the sun altar at the end of the last one). `glow` 0..1 after reaching it. */
export function drawGoal(ctx, goal, t, glow = 0) {
  ctx.save();
  ctx.translate(goal.x, goal.y);
  if (glow > 0) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6 + t * 0.02);
      ctx.fillStyle = `rgba(255,220,120,${0.12 * glow})`;
      ctx.beginPath();
      ctx.moveTo(0, -2);
      ctx.lineTo(-0.5, -9);
      ctx.lineTo(0.5, -9);
      ctx.fill();
    }
    ctx.restore();
  }
  if (goal.kind === 'altar') {
    line(ctx, 0.07);
    for (let i = 0; i < 3; i++) {
      rrect(ctx, -1.6 + i * 0.4, -0.45 - i * 0.45, 3.2 - i * 0.8, 0.45, 0.06);
      ctx.fillStyle = ['#c4a067', '#d3b077', '#e3c48c'][i];
      ctx.fill();
      ctx.stroke();
    }
    // the golden sun disk
    const r = 0.75 + Math.sin(t * 2) * 0.03;
    ctx.save();
    ctx.translate(0, -2.6);
    ctx.rotate(t * 0.4);
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6);
      ctx.beginPath();
      ctx.moveTo(-0.12, -r);
      ctx.lineTo(0, -r - 0.35);
      ctx.lineTo(0.12, -r);
      ctx.fillStyle = '#ffc94d';
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
    ell(ctx, 0, -2.6, r, r, '#ffd43b');
    ell(ctx, 0, -2.6, r * 0.6, r * 0.6, '#ffe58a', false);
    for (const sx of [-1, 1]) ell(ctx, sx * 0.25, -2.7, 0.07, 0.09, INK, false);
    ctx.beginPath();
    ctx.arc(0, -2.55, 0.25, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.lineWidth = 0.06;
    ctx.stroke();
  } else {
    face(ctx, -0.7, ['#a0663a', '#7a4a26'], false);
    face(ctx, -1.4, ['#c9873f', '#9c6326'], false);
    face(ctx, -2.1, ['#5f8f4e', '#43703a'], true);
    // wings
    line(ctx, 0.06);
    for (const sx of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(sx * 0.42, -1.95);
      ctx.lineTo(sx * 1.0, -2.25);
      ctx.lineTo(sx * 0.9, -1.75);
      ctx.lineTo(sx * 0.42, -1.6);
      ctx.closePath();
      ctx.fillStyle = '#e8483f';
      ctx.fill();
      ctx.stroke();
    }
    // banner
    ctx.fillStyle = '#c92a2a';
    ctx.beginPath();
    ctx.moveTo(0.5, -1.3);
    ctx.lineTo(0.95, -1.3 + Math.sin(t * 4) * 0.04);
    ctx.lineTo(0.9, -0.2);
    ctx.lineTo(0.72, -0.35);
    ctx.lineTo(0.55, -0.2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

// ---- effects ----------------------------------------------------------------------------------------------------

export function drawShield(ctx, x, y, t) {
  ctx.save();
  ctx.translate(x, y - 0.7);
  const r = 0.95 + Math.sin(t * 6) * 0.03;
  const g = ctx.createRadialGradient(0, 0, r * 0.6, 0, 0, r);
  g.addColorStop(0, 'rgba(116,192,252,0.05)');
  g.addColorStop(1, 'rgba(116,192,252,0.55)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(208,235,255,0.9)';
  ctx.lineWidth = 0.05;
  ctx.stroke();
  ctx.restore();
}
