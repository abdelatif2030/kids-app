// «معركة حلبة الجليد» — pure deterministic rules + physics for the Ice Rink Brawl. No DOM, no Math.random.
// One state object `s` (plain data, structuredClone-able). Fixed time step DT. Events go to s.ev for the renderer/audio.
export const W = 60;
export const H = 96;
export const DT = 1 / 120;
const MU = 1.05; // ice friction (1/s)
const WALL_E = 0.86;
const BODY_E = 0.93;
const STOP = 1.3;

export const HEROES = {
  penguin: { hp: 80, atk: 11, m: 1.0, r: 3.0, vmax: 72, def: 0.7, aggro: 1.0, special: 'spin', passive: 'shield' }, // Shield Wall: takes 30% less damage
  fox: { hp: 64, atk: 12, m: 0.8, r: 2.8, vmax: 80, def: 1.15, aggro: 0.85, special: 'flame', passive: 'ricochet' }, // Ricochet: every wall bounce before a hit adds +40% damage
  bear: { hp: 120, atk: 13, m: 1.9, r: 3.7, vmax: 62, def: 0.8, aggro: 1.6, special: 'slam', passive: 'mend' }, // Mending Glow: heals every ally she touches
};
export const RICOCHET = 0.4;
export const RICOCHET_MAX = 4;
export const MEND = 10;
export const HERO_ORDER = ['penguin', 'fox', 'bear'];
const START = { penguin: [14, 84], fox: [30, 87], bear: [46, 84] };

export const FOES = {
  grunt: { hp: 20, r: 2.8, m: 1.0, atk: 9, speed: 42, armor: 0, ai: 'charge', err: 0.2, coins: 2 },
  imp: { hp: 11, r: 2.2, m: 0.6, atk: 6, speed: 54, armor: 0, ai: 'charge', err: 0.32, coins: 1 },
  thrower: { hp: 16, r: 2.6, m: 0.9, atk: 7, speed: 24, armor: 0, ai: 'throw', err: 0.07, coins: 3 },
  brute: { hp: 48, r: 3.9, m: 2.6, atk: 13, speed: 36, armor: 0.15, ai: 'charge', err: 0.12, coins: 5 },
  shaman: { hp: 18, r: 2.6, m: 0.9, atk: 0, speed: 16, armor: 0, ai: 'heal', err: 0, coins: 4 },
  chief: { hp: 90, r: 5, m: 4.2, atk: 14, speed: 38, armor: 0.1, ai: 'boss', err: 0.1, coins: 20 },
  king: { hp: 140, r: 5.6, m: 5, atk: 16, speed: 40, armor: 0.12, ai: 'boss', err: 0.1, coins: 40 },
};

const L = (name, foes, o = {}, boss = false) => ({ name, foes, crystals: o.c || [], blocks: o.b || [], pools: o.p || [], boss });
export const LEVELS = [
  L('Snow Start', [['grunt', 20, 28], ['grunt', 40, 28]]),
  L('Two Friends', [['grunt', 14, 22], ['grunt', 30, 30], ['grunt', 46, 22]], { c: [[30, 54, 3]] }),
  L('Snowball Fight', [['grunt', 18, 26], ['grunt', 42, 26], ['thrower', 30, 14]], { c: [[18, 50, 3], [42, 50, 3]] }),
  L('Slush Pool', [['grunt', 16, 24], ['grunt', 44, 24], ['imp', 24, 36], ['imp', 36, 36]], { p: [[30, 48, 10]], c: [[12, 42, 2.8], [48, 42, 2.8]] }),
  L('Ice Walls', [['grunt', 30, 16], ['grunt', 12, 22], ['thrower', 48, 22], ['imp', 30, 32]], { b: [[18, 40, 12, 2.4], [42, 40, 12, 2.4]], c: [[30, 56, 3]] }),
  L('Chief Grumbo', [['chief', 30, 20], ['grunt', 14, 34], ['grunt', 46, 34]], { c: [[22, 50, 3], [38, 50, 3]] }, true),
  L('Big Trouble', [['brute', 30, 24], ['imp', 14, 32], ['imp', 46, 32], ['thrower', 30, 12]], { c: [[20, 46, 3], [40, 46, 3], [30, 60, 2.6]] }),
  L('Healer Hideout', [['shaman', 30, 12], ['grunt', 18, 24], ['grunt', 42, 24], ['brute', 30, 32]], { b: [[20, 16, 2.4, 14], [40, 16, 2.4, 14]], c: [[30, 52, 3]] }),
  L('Double Brutes', [['brute', 16, 26], ['brute', 44, 26], ['thrower', 30, 14], ['shaman', 30, 22]], { c: [[30, 40, 3.2], [14, 52, 2.8], [46, 52, 2.8]] }),
  L('Imp Swarm', [['imp', 10, 20], ['imp', 22, 26], ['imp', 38, 26], ['imp', 50, 20], ['imp', 30, 34], ['imp', 30, 18], ['thrower', 16, 12], ['thrower', 44, 12]], { p: [[30, 52, 9]], c: [[18, 44, 2.6], [42, 44, 2.6]] }),
  L('Goblin Camp', [['brute', 18, 24], ['brute', 42, 24], ['shaman', 14, 12], ['shaman', 46, 12], ['thrower', 30, 14], ['thrower', 30, 30], ['grunt', 30, 22]], { b: [[30, 44, 16, 2.4]], c: [[12, 50, 2.8], [48, 50, 2.8]], p: [[30, 62, 8]] }),
  L('Goblin King', [['king', 30, 18], ['brute', 14, 32], ['brute', 46, 32], ['thrower', 18, 10], ['thrower', 42, 10]], { c: [[22, 46, 3], [38, 46, 3], [30, 58, 2.8]] }, true),
];

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
function rnd(s) {
  s.seed = (s.seed + 0x6D2B79F5) | 0;
  let t = Math.imul(s.seed ^ (s.seed >>> 15), 1 | s.seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const dmgScale = (vn) => clamp(vn / 30, 0.3, 1.8);
const hyp = Math.hypot;

export function createState(level = 1, { seed = 1, up = {} } = {}) {
  const lv = LEVELS[level - 1];
  const s = {
    level, seed: (seed * 2654435761) >>> 0 || 1, t: 0, pt: 0, phase: 'aim', turn: 1, bodies: [], proj: [], pools: [], blocks: [],
    nextId: 1, cd: {}, ev: [], shot: null, eq: [], eTimer: 0, kills: 0, dealt: 0, taken: 0, coins: 0, boss: lv.boss, stars: 0, gala: 20,
  };
  for (const id of HERO_ORDER) {
    const d = HEROES[id]; const u = up[id] || {};
    const hp = Math.round(d.hp * (1 + 0.12 * (u.hp || 0)));
    s.bodies.push({
      id: s.nextId++, kind: 'hero', type: id, x: START[id][0], y: START[id][1], vx: 0, vy: 0, r: d.r, m: d.m, im: 1 / d.m,
      hp, maxHp: hp, atk: d.atk * (1 + 0.1 * (u.atk || 0)), def: d.def, aggro: d.aggro, vmax: d.vmax, bn: 0, alive: true, pierce: false, muMul: 1, sp: null,
    });
  }
  const sc = level - 1;
  for (const [type, x, y] of lv.foes) addFoe(s, type, x, y, 1 + 0.05 * sc, 1 + 0.03 * sc);
  for (const [x, y, r] of lv.crystals) s.bodies.push({ id: s.nextId++, kind: 'crystal', type: 'crystal', x, y, vx: 0, vy: 0, r, m: 1e9, im: 0, alive: true });
  for (const [x, y, w, h] of lv.blocks) s.blocks.push({ x, y, hw: w / 2, hh: h / 2 });
  for (const [x, y, r] of lv.pools) s.pools.push({ x, y, r });
  s.ev.push({ t: 'phase', phase: 'aim' });
  return s;
}

function addFoe(s, type, x, y, hpMul = 1, atkMul = 1) {
  const d = FOES[type];
  const hp = Math.round(d.hp * hpMul);
  const f = {
    id: s.nextId++, kind: 'foe', type, x, y, vx: 0, vy: 0, r: d.r, m: d.m, im: 1 / d.m, hp, maxHp: hp, atk: d.atk * atkMul, armor: d.armor,
    speed: d.speed, ai: d.ai, err: d.err, coins: d.coins, alive: true, burn: 0, stun: 0, attacking: false, attackUntil: 0, cnt: 0, stompAt: 0, muMul: 1, pierce: false,
  };
  s.bodies.push(f);
  return f;
}

export const heroes = (s) => s.bodies.filter((b) => b.kind === 'hero' && b.alive);
export const foes = (s) => s.bodies.filter((b) => b.kind === 'foe' && b.alive);
const byId = (s, id) => s.bodies.find((b) => b.id === id);
export const cloneState = (s) => { const e = s.ev; s.ev = []; const c = structuredClone(s); s.ev = e; return c; };
export function drain(s) { const e = s.ev; s.ev = []; return e; }
export const teamHp = (s) => heroes(s).reduce((a, h) => a + h.hp, 0);
export const teamMax = (s) => s.bodies.filter((b) => b.kind === 'hero').reduce((a, h) => a + h.maxHp, 0);

export function fire(s, type, ang, power, useSpecial = true) {
  if (s.phase !== 'aim') return false;
  const h = s.bodies.find((b) => b.kind === 'hero' && b.type === type && b.alive);
  if (!h) return false;
  power = clamp(power, 0.1, 1);
  const sp = h.vmax * power;
  h.vx = Math.cos(ang) * sp; h.vy = Math.sin(ang) * sp;
  let special = null;
  h.bn = 0;
  if (useSpecial && s.gala >= 100) { special = HEROES[type].special; s.gala = 0; s.ev.push({ t: 'special', x: h.x, y: h.y, id: h.id, kind: special }); }
  if (special === 'flame') { h.pierce = true; h.muMul = 0.6; }
  if (special === 'spin') h.muMul = 0.85;
  h.sp = special;
  s.shot = { id: h.id, special, done: false, hit: new Set() };
  s.phase = 'shot'; s.pt = 0;
  s.ev.push({ t: 'launch', id: h.id, power, x: h.x, y: h.y, special });
  return true;
}

// ---------------------------------------------------------------- damage
function hurtFoe(s, f, dmg, src) {
  if (!f.alive) return 0;
  dmg = Math.max(1, Math.round(dmg * (1 - f.armor)));
  f.hp -= dmg;
  s.dealt += dmg;
  s.ev.push({ t: 'dmg', x: f.x, y: f.y - f.r, v: dmg, side: 'foe', id: f.id });
  if (src && src.kind === 'hero') s.gala = Math.min(100, s.gala + dmg * 0.7);
  if (f.hp <= 0) {
    f.alive = false; f.vx = f.vy = 0; s.kills++; s.coins += f.coins;
    s.ev.push({ t: 'puff', x: f.x, y: f.y, r: f.r, type: f.type, boss: f.ai === 'boss' });
  }
  return dmg;
}
function hurtHero(s, h, dmg) {
  if (!h.alive) return;
  dmg = Math.max(1, Math.round(dmg * h.def));
  h.hp -= dmg; s.taken += dmg;
  s.gala = Math.min(100, s.gala + dmg * 0.25);
  s.ev.push({ t: 'dmg', x: h.x, y: h.y - h.r, v: dmg, side: 'hero', id: h.id });
  if (h.hp <= 0) { h.hp = 0; h.alive = false; h.vx = h.vy = 0; s.ev.push({ t: 'heroKO', x: h.x, y: h.y, id: h.id }); }
}

function aoe(s, cx, cy, rad, dmg, knock, stun, src) {
  s.ev.push({ t: 'wave', x: cx, y: cy, rad, kind: src ? src.sp : 'stomp' });
  for (const f of foes(s)) {
    const d = hyp(f.x - cx, f.y - cy); const R = rad + f.r;
    if (d >= R) continue;
    const fall = 1 - (d / R) * 0.5;
    if (dmg) hurtFoe(s, f, dmg * fall, src);
    if (f.alive) {
      const nx = d > 0.01 ? (f.x - cx) / d : 1; const ny = d > 0.01 ? (f.y - cy) / d : 0;
      f.vx += nx * knock * fall * f.im; f.vy += ny * knock * fall * f.im;
      if (stun) f.stun = Math.max(f.stun, 1);
    }
  }
}

// ---------------------------------------------------------------- collisions
function impact(s, a, b, vn, sa, sb, pierce) {
  const key = a.id < b.id ? a.id * 4096 + b.id : b.id * 4096 + a.id;
  if ((s.cd[key] || 0) > s.t) return;
  s.cd[key] = s.t + (pierce ? 0.6 : 0.18);
  const mx = (a.x + b.x) / 2; const my = (a.y + b.y) / 2;
  if (a.kind === 'crystal' || b.kind === 'crystal') {
    s.ev.push({ t: 'crystal', x: mx, y: my, id: a.kind === 'crystal' ? a.id : b.id, v: vn });
    return;
  }
  if (a.kind === 'hero' && b.kind === 'hero') {
    s.ev.push({ t: 'chain', x: mx, y: my, v: vn });
    s.gala = Math.min(100, s.gala + 3);
    for (const [m, o] of [[a, b], [b, a]]) if (HEROES[m.type].passive === 'mend' && o.alive && o.hp < o.maxHp) { o.hp = Math.min(o.maxHp, o.hp + MEND); s.ev.push({ t: 'heal', x: o.x, y: o.y }); }
    return;
  }
  if (a.kind === 'foe' && b.kind === 'foe') {
    s.ev.push({ t: 'bump', x: mx, y: my, v: vn });
    if (s.phase !== 'enemy') {
      const slow = sa < sb ? a : b;
      hurtFoe(s, slow, 4 * dmgScale(vn), null);
    }
    return;
  }
  const hero = a.kind === 'hero' ? a : b; const foe = a.kind === 'foe' ? a : b;
  const hs = a.kind === 'hero' ? sa : sb;
  s.ev.push({ t: 'hit', x: mx, y: my, v: vn, id: hero.id });
  if (s.phase !== 'enemy' || hs > 12) {
    let d = hero.atk * dmgScale(vn);
    if (hero.sp === 'spin') d *= 1.3;
    if (HEROES[hero.type].passive === 'ricochet') d *= 1 + RICOCHET * Math.min(RICOCHET_MAX, hero.bn || 0);
    hurtFoe(s, foe, d, hero);
    if (hero.sp === 'flame' && foe.alive) foe.burn = 2;
    if (hero.sp === 'spin' && s.shot && !s.shot.done) { s.shot.done = true; aoe(s, hero.x, hero.y, 18, 8, 34, false, hero); }
  }
  if (foe.alive && foe.attacking && !pierce) {
    hurtHero(s, hero, foe.atk * dmgScale(vn));
    foe.attacking = false;
  }
}

function collidePair(s, a, b) {
  const dx = b.x - a.x; const dy = b.y - a.y; const rr = a.r + b.r;
  const d2 = dx * dx + dy * dy;
  if (d2 >= rr * rr) return;
  const d = Math.sqrt(d2) || 0.0001; const nx = dx / d; const ny = dy / d;
  const pierce = (a.pierce && b.kind === 'foe') || (b.pierce && a.kind === 'foe');
  const vrel = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
  const sa = hyp(a.vx, a.vy); const sb = hyp(b.vx, b.vy);
  if (!pierce) {
    const imS = a.im + b.im;
    if (imS === 0) return;
    const pen = rr - d;
    a.x -= nx * pen * a.im / imS; a.y -= ny * pen * a.im / imS;
    b.x += nx * pen * b.im / imS; b.y += ny * pen * b.im / imS;
    if (vrel > 0) {
      const j = (1 + BODY_E) * vrel / imS;
      a.vx -= j * a.im * nx; a.vy -= j * a.im * ny;
      b.vx += j * b.im * nx; b.vy += j * b.im * ny;
    }
    if (vrel > 3) impact(s, a, b, vrel, sa, sb, false);
  } else {
    const pv = a.pierce ? sa : sb;
    if (pv > 6) impact(s, a, b, pv, sa, sb, true);
  }
}

function collideBlock(s, b, blk) {
  const cx = clamp(b.x, blk.x - blk.hw, blk.x + blk.hw); const cy = clamp(b.y, blk.y - blk.hh, blk.y + blk.hh);
  let dx = b.x - cx; let dy = b.y - cy; let d2 = dx * dx + dy * dy;
  if (d2 >= b.r * b.r) return;
  let nx; let ny; let pen;
  if (d2 < 1e-9) { // centre inside the block: push out along the shallowest side
    const px = blk.hw + b.r - Math.abs(b.x - blk.x); const py = blk.hh + b.r - Math.abs(b.y - blk.y);
    if (px < py) { nx = b.x < blk.x ? -1 : 1; ny = 0; pen = px; } else { nx = 0; ny = b.y < blk.y ? -1 : 1; pen = py; }
  } else { const d = Math.sqrt(d2); nx = dx / d; ny = dy / d; pen = b.r - d; }
  b.x += nx * pen; b.y += ny * pen;
  const vn = b.vx * nx + b.vy * ny;
  if (vn < 0) {
    b.vx -= (1 + WALL_E) * vn * nx; b.vy -= (1 + WALL_E) * vn * ny;
    if (-vn > 6) { s.ev.push({ t: 'wall', x: b.x - nx * b.r, y: b.y - ny * b.r, v: -vn, block: true }); if (b.kind === 'hero') b.bn++; }
  }
}

// ---------------------------------------------------------------- physics step
function physics(s) {
  const bodies = s.bodies;
  for (const b of bodies) {
    if (!b.alive || b.kind === 'crystal') continue;
    let mu = MU * (b.muMul || 1);
    for (const p of s.pools) if (hyp(b.x - p.x, b.y - p.y) < p.r) { mu *= 3.5; break; }
    const f = Math.exp(-mu * DT);
    b.vx *= f; b.vy *= f;
    if (b.vx * b.vx + b.vy * b.vy < STOP * STOP) { b.vx = 0; b.vy = 0; }
    b.x += b.vx * DT; b.y += b.vy * DT;
    // walls
    if (b.x < b.r) { b.x = b.r; if (b.vx < 0) { if (-b.vx > 6) { s.ev.push({ t: 'wall', x: 0, y: b.y, v: -b.vx }); if (b.kind === 'hero') b.bn++; } b.vx = -b.vx * WALL_E; } }
    if (b.x > W - b.r) { b.x = W - b.r; if (b.vx > 0) { if (b.vx > 6) { s.ev.push({ t: 'wall', x: W, y: b.y, v: b.vx }); if (b.kind === 'hero') b.bn++; } b.vx = -b.vx * WALL_E; } }
    if (b.y < b.r) { b.y = b.r; if (b.vy < 0) { if (-b.vy > 6) { s.ev.push({ t: 'wall', x: b.x, y: 0, v: -b.vy }); if (b.kind === 'hero') b.bn++; } b.vy = -b.vy * WALL_E; } }
    if (b.y > H - b.r) { b.y = H - b.r; if (b.vy > 0) { if (b.vy > 6) { s.ev.push({ t: 'wall', x: b.x, y: H, v: b.vy }); if (b.kind === 'hero') b.bn++; } b.vy = -b.vy * WALL_E; } }
    for (const blk of s.blocks) collideBlock(s, b, blk);
    if (b.attacking && s.t > b.attackUntil) b.attacking = false;
  }
  const n = bodies.length;
  for (let i = 0; i < n; i++) {
    const a = bodies[i]; if (!a.alive) continue;
    for (let j = i + 1; j < n; j++) {
      const b = bodies[j]; if (!b.alive) continue;
      if (a.im === 0 && b.im === 0) continue;
      collidePair(s, a, b);
    }
  }
  // projectiles
  for (const p of s.proj) {
    p.x += p.vx * DT; p.y += p.vy * DT; p.life -= DT;
    if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) p.life = 0;
    for (const b of bodies) {
      if (!b.alive || p.life <= 0) continue;
      if (b.kind === 'crystal' && hyp(p.x - b.x, p.y - b.y) < b.r + 0.8) { p.life = 0; s.ev.push({ t: 'splat', x: p.x, y: p.y }); }
      else if (b.kind === 'hero' && hyp(p.x - b.x, p.y - b.y) < b.r + 0.8) { p.life = 0; hurtHero(s, b, p.dmg); s.ev.push({ t: 'splat', x: p.x, y: p.y, hero: true }); }
    }
    for (const blk of s.blocks) if (p.life > 0 && Math.abs(p.x - blk.x) < blk.hw + 0.6 && Math.abs(p.y - blk.y) < blk.hh + 0.6) { p.life = 0; s.ev.push({ t: 'splat', x: p.x, y: p.y }); }
  }
  s.proj = s.proj.filter((p) => p.life > 0);
  // boss stomp
  for (const f of bodies) {
    if (f.kind === 'foe' && f.alive && f.stompAt && (s.t >= f.stompAt)) {
      f.stompAt = 0;
      s.ev.push({ t: 'wave', x: f.x, y: f.y, rad: 17, kind: 'stomp' });
      for (const h of heroes(s)) {
        const d = hyp(h.x - f.x, h.y - f.y);
        if (d < 17 + h.r) {
          hurtHero(s, h, f.atk * 0.7 * (1 - d / (17 + h.r) * 0.5));
          const nx = (h.x - f.x) / (d || 1); const ny = (h.y - f.y) / (d || 1);
          h.vx += nx * 30 * h.im; h.vy += ny * 30 * h.im;
        }
      }
    }
  }
}

const moving = (s) => s.bodies.some((b) => b.alive && b.kind !== 'crystal' && (b.vx !== 0 || b.vy !== 0)) || s.proj.length > 0 || s.bodies.some((b) => b.alive && b.stompAt);

function winNow(s) {
  s.phase = 'won';
  const f = teamHp(s) / teamMax(s);
  s.stars = f >= 0.65 ? 3 : f >= 0.35 ? 2 : 1;
  s.coins += 10 + s.stars * 4;
  s.ev.push({ t: 'won', stars: s.stars });
}

function endShot(s) {
  for (const h of s.bodies) if (h.kind === 'hero') { h.pierce = false; h.muMul = 1; h.sp = null; }
  s.shot = null;
  if (foes(s).length === 0) { winNow(s); return; }
  // burn ticks
  for (const f of foes(s)) if (f.burn > 0) { f.burn--; hurtFoe(s, f, 5, null); s.ev.push({ t: 'burn', x: f.x, y: f.y }); }
  if (foes(s).length === 0) { winNow(s); return; }
  s.eq = [];
  const hs = heroes(s);
  const list = foes(s).map((f) => ({ f, d: Math.min(...hs.map((h) => hyp(h.x - f.x, h.y - f.y))) })).sort((a, b) => a.d - b.d);
  for (const { f } of list) { if (f.stun > 0) { f.stun--; s.ev.push({ t: 'stunned', x: f.x, y: f.y }); } else s.eq.push(f.id); }
  s.phase = 'enemy'; s.pt = 0; s.eTimer = 0.7;
  s.ev.push({ t: 'phase', phase: 'enemy' });
}

function pickTarget(s, f, hs) {
  let best = null; let bs = 1e9;
  for (const h of hs) { const sc = hyp(h.x - f.x, h.y - f.y) / h.aggro * (1 + 0.35 * rnd(s)); if (sc < bs) { bs = sc; best = h; } }
  return best;
}
function launchFoe(s, f, ang, speed, attacking) {
  f.vx = Math.cos(ang) * speed; f.vy = Math.sin(ang) * speed;
  f.attacking = attacking; f.attackUntil = s.t + 2.2;
  s.ev.push({ t: 'foeMove', id: f.id, x: f.x, y: f.y });
}
function foeAct(s, f) {
  const hs = heroes(s); if (!hs.length) return 0;
  const T = pickTarget(s, f, hs);
  const base = Math.atan2(T.y - f.y, T.x - f.x);
  const jitter = (rnd(s) - 0.5) * 2 * f.err;
  const spd = f.speed * (0.85 + 0.3 * rnd(s));
  const dist = hyp(T.x - f.x, T.y - f.y);
  switch (f.ai) {
    case 'charge': launchFoe(s, f, base + jitter, spd, true); return 0.5;
    case 'throw':
      if (dist < 58) {
        const a = base + jitter;
        s.proj.push({ x: f.x, y: f.y, vx: Math.cos(a) * 60, vy: Math.sin(a) * 60, dmg: f.atk * (0.9 + 0.2 * rnd(s)), life: 2 });
        s.ev.push({ t: 'throw', x: f.x, y: f.y, id: f.id });
      }
      launchFoe(s, f, dist < 24 ? base + Math.PI : base + Math.PI / 2 * (rnd(s) < 0.5 ? 1 : -1), 16, false);
      return 0.7;
    case 'heal':
      for (const o of foes(s)) if (hyp(o.x - f.x, o.y - f.y) < 22 && o !== f) { o.hp = Math.min(o.maxHp, o.hp + 9); s.ev.push({ t: 'heal', x: o.x, y: o.y }); }
      s.ev.push({ t: 'heal', x: f.x, y: f.y, self: true });
      launchFoe(s, f, base + Math.PI, 14, false);
      return 0.7;
    case 'boss': {
      const c = f.cnt++ % 3;
      if (c === 0) launchFoe(s, f, base + jitter, spd, true);
      else if (c === 1) { launchFoe(s, f, base, 30, false); f.stompAt = s.t + 1.1; s.ev.push({ t: 'telegraph', x: f.x, y: f.y, id: f.id }); }
      else {
        let n = 0;
        for (let k = 0; k < 8 && n < 1 && foes(s).length < 8; k++) {
          const a = rnd(s) * Math.PI * 2; const x = clamp(f.x + Math.cos(a) * (f.r + 4), 3, W - 3); const y = clamp(f.y + Math.sin(a) * (f.r + 4), 3, H - 30);
          if (s.bodies.some((o) => o.alive && hyp(o.x - x, o.y - y) < o.r + 3)) continue;
          const imp = addFoe(s, rnd(s) < 0.5 ? 'imp' : 'grunt', x, y);
          s.ev.push({ t: 'spawn', x, y, id: imp.id }); n++;
        }
        launchFoe(s, f, base, 12, false);
      }
      return 0.9;
    }
    default: return 0;
  }
}

function endEnemy(s) {
  if (!heroes(s).length) { s.phase = 'lost'; s.ev.push({ t: 'lost' }); return; }
  s.turn++;
  s.gala = Math.min(100, s.gala + 6);
  s.phase = 'aim'; s.pt = 0;
  s.ev.push({ t: 'phase', phase: 'aim' });
}

export function step(s) {
  if (s.phase === 'won' || s.phase === 'lost') return;
  physics(s);
  s.t += DT; s.pt += DT;
  if (s.phase === 'shot') {
    const sh = s.shot; const h = byId(s, sh.id);
    if (!sh.done && h.alive && h.vx === 0 && h.vy === 0 && s.pt > 0.15) {
      if (sh.special === 'spin') { sh.done = true; aoe(s, h.x, h.y, 18, 8, 34, false, h); }
      else if (sh.special === 'slam') { sh.done = true; aoe(s, h.x, h.y, 17, 14, 30, true, h); }
    }
    if (s.pt > 9) for (const b of s.bodies) if (b.kind !== 'crystal') { b.vx = 0; b.vy = 0; }
    if (!moving(s) && s.pt > 0.2) endShot(s);
  } else if (s.phase === 'enemy') {
    s.eTimer -= DT;
    if (s.eq.length && s.eTimer <= 0) {
      const f = byId(s, s.eq.shift());
      s.eTimer = f && f.alive ? foeAct(s, f) : 0;
    }
    if (s.pt > 14) for (const b of s.bodies) if (b.kind !== 'crystal') { b.vx = 0; b.vy = 0; b.stompAt = 0; }
    if (!s.eq.length && s.eTimer <= 0 && !moving(s)) endEnemy(s);
  }
}

/** Preview a shot: clone, fire, follow the hero until its first hit or maxT. Returns [{x,y,bounce}] */
export function previewPath(s, type, ang, power, special, maxT = 1.5) {
  const c = cloneState(s);
  if (!fire(c, type, ang, power, special)) return [];
  const h = c.bodies.find((b) => b.id === c.shot.id);
  const pts = [{ x: h.x, y: h.y }];
  let hit = null;
  for (let i = 0; i * DT < maxT; i++) {
    step(c);
    const ev = c.ev; c.ev = [];
    let bounce = false;
    for (const e of ev) { if (e.t === 'wall' || e.t === 'crystal') bounce = true; if (e.t === 'hit' && e.id === h.id) hit = true; }
    if (i % 5 === 0 || bounce || hit) pts.push({ x: h.x, y: h.y, bounce });
    if (hit || (h.vx === 0 && h.vy === 0)) break;
  }
  return pts;
}

export function normalizeSave(sv) {
  const o = sv && typeof sv === 'object' ? sv : {};
  const stars = {};
  if (o.stars && typeof o.stars === 'object') for (const k of Object.keys(o.stars)) { const v = Number(o.stars[k]); if (v >= 1 && v <= 3) stars[k] = v | 0; }
  const up = {};
  for (const id of HERO_ORDER) { const u = (o.up && o.up[id]) || {}; up[id] = { hp: clamp(u.hp | 0, 0, 5), atk: clamp(u.atk | 0, 0, 5) }; }
  return { unlocked: clamp(o.unlocked | 0 || 1, 1, LEVELS.length), stars, coins: Math.max(0, o.coins | 0), up, muted: !!o.muted };
}
export const upgradeCost = (lvl) => 25 * (lvl + 1);
