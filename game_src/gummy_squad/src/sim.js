// Gummy Squad: the pure, deterministic game logic (no DOM, no three.js). One Run = one battle.
// A squad of three gummy bears (Strawberry: candy-cane sword, Lime: lollipop staff, Blueberry: gumball blaster) fights two
// waves of sour gumdrops and then KING DONUT. The player only moves the squad; the bears hit the nearest enemy by themselves.
// Every hazard (glaze rain, the boss's rolling charge, a bomber's blast) shows a warning of at least one second before it hurts.
// Coordinates: x right, y down the screen (world z). Angles in radians, direction (cos a, sin a).

export const ARENA = { hx: 12, hy: 12 };
export const BEAR_R = 0.62;
const TAU = Math.PI * 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const angDiff = (a, b) => { let d = (b - a) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return d; };

export function mulberry(seed) {
  let a = seed >>> 0 || 1;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------------------------------------------------------------- data
export const BEARS = [
  { id: 'strawberry', role: 'melee', hp: 120, range: 3.1, arc: 1.25, cd: 0.62, dmg: 15, color: 0xff4a62 },
  { id: 'lime', role: 'magic', hp: 85, range: 9.5, cd: 1.0, dmg: 12, splash: 1.7, speed: 11, color: 0x7ae83a },
  { id: 'blueberry', role: 'ranged', hp: 85, range: 10.5, cd: 0.4, dmg: 6, speed: 17, color: 0x4a8aff },
];
const SLOTS = [[1.7, 0], [-0.9, 1.5], [-0.9, -1.5]];

export const KINDS = {
  gummy: { hp: 32, speed: 2.3, r: 0.7, touch: 7, reward: 1, color: 0xff7a4a },
  sour: { hp: 20, speed: 3.9, r: 0.55, touch: 5, reward: 1, color: 0x9aff3a },
  spitter: { hp: 26, speed: 1.9, r: 0.65, touch: 4, reward: 2, color: 0xb070ff, shoot: true, keep: 6.5, shotCd: 2.5, projDmg: 8, projSpeed: 6.5 },
  tank: { hp: 110, speed: 1.4, r: 1.1, touch: 12, reward: 4, color: 0xffd23a },
  bomber: { hp: 22, speed: 3.0, r: 0.6, touch: 0, reward: 2, color: 0xff9a2a, bomb: true },
};
// [time, kind, count]
export const WAVES = [
  [[0.5, 'gummy', 3], [3, 'sour', 3], [7, 'gummy', 3], [10, 'sour', 2]],
  [[0.5, 'gummy', 3], [2.5, 'spitter', 2], [5, 'sour', 3], [8, 'tank', 1], [10, 'bomber', 2], [13, 'spitter', 2], [15, 'gummy', 3]],
];
/** 2026-11-21: six stages. Each stage makes the sweets tougher and the boss stronger; from stage 3 a third wave comes first. */
export const STAGES = 6;
const THIRD_WAVE = [[0.5, 'gummy', 4], [2.5, 'sour', 4], [5, 'spitter', 2], [7.5, 'bomber', 2], [10, 'sour', 3]];
export const stageMul = (stage) => ({ hp: 1 + 0.25 * stage, boss: 1 + 0.35 * stage, spd: 1 + 0.04 * stage });
export const BOSS = { hp: 1100, r: 1.9, speed: 2.0, touch: 10 };
const RAIN = { warn: [1.5, 1.3, 1.1], r: [1.9, 2.0, 2.2], dmg: 14 };
const CHARGE = { warn: [1.35, 1.2, 1.05], speed: [14, 16, 18], dmg: 22, stun: [1.9, 1.7, 1.4] };
const CYCLES = [['rain', 'charge', 'summon'], ['charge', 'rain', 'summon', 'charge'], ['rain', 'charge', 'rain', 'summon', 'charge']];
export const MIN_WARN = 1.0;

export const UPGRADES = {
  damage: { max: 5, costs: [30, 60, 100, 160, 240], per: 0.12 },
  health: { max: 5, costs: [30, 60, 100, 160, 240], per: 0.15 },
  charge: { max: 5, costs: [25, 50, 90, 140, 210], per: 0.25 },
};

// ---------------------------------------------------------------- save
export function normalizeSave(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const num = (v, a, b, d = 0) => (Number.isFinite(Number(v)) ? clamp(Math.floor(Number(v)), a, b) : d);
  const u = r.upgrades && typeof r.upgrades === 'object' ? r.upgrades : {};
  return {
    candies: num(r.candies, 0, 999999),
    upgrades: { damage: num(u.damage, 0, UPGRADES.damage.max), health: num(u.health, 0, UPGRADES.health.max), charge: num(u.charge, 0, UPGRADES.charge.max) },
    bestStars: num(r.bestStars, 0, 3),
    stage: num(r.stage, 0, 5), // the highest stage opened (0 = only the first)
    runs: num(r.runs, 0, 999999),
    wins: num(r.wins, 0, 999999),
    muted: !!r.muted,
    lang: r.lang === 'en' ? 'en' : r.lang === 'ar' ? 'ar' : '',
  };
}
export function upgradeCost(save, key) {
  const u = UPGRADES[key];
  const lv = save.upgrades[key];
  return lv >= u.max ? null : u.costs[lv];
}
/** Returns a new save with one more level of `key`, or null when it is maxed or too expensive. */
export function buyUpgrade(save, key) {
  const cost = upgradeCost(save, key);
  if (cost === null || save.candies < cost) return null;
  const s = normalizeSave(save);
  s.candies -= cost;
  s.upgrades[key] += 1;
  return s;
}
export function applyResult(save, res) {
  const s = normalizeSave(save);
  s.candies = Math.min(999999, s.candies + res.candies + (res.bonus || 0));
  s.runs += 1;
  if (res.win) { s.wins += 1; s.bestStars = Math.max(s.bestStars, res.stars); if (res.stage === s.stage && s.stage < STAGES - 1) s.stage += 1; }
  return s;
}

// ---------------------------------------------------------------- run
export class Run {
  constructor(opts = {}) {
    this.rng = mulberry(opts.seed || 1);
    const up = normalizeSave({ upgrades: opts.upgrades }).upgrades;
    this.up = up;
    this.dmgMul = 1 + UPGRADES.damage.per * up.damage;
    this.hpMul = 1 + UPGRADES.health.per * up.health;
    this.chargeMul = 1 + UPGRADES.charge.per * up.charge;
    this.easy = !!opts.easy;
    this.stage = Math.max(0, Math.min(STAGES - 1, opts.stage | 0));
    this.mul = stageMul(this.stage);
    this.waves = this.stage >= 2 ? [THIRD_WAVE, ...WAVES] : WAVES;
    this.t = 0; this.state = 'wave'; this.wave = 0; this.waveT = 0; this.spawnIdx = 0; this.gapT = 0;
    this.squad = { x: 0, y: 7, face: -Math.PI / 2, moving: false };
    this.bears = BEARS.map((b, i) => ({ id: b.id, idx: i, def: b, x: SLOTS[i][1] * 0 + this.squad.x, y: this.squad.y + 1, hp: Math.round(b.hp * this.hpMul), maxHp: Math.round(b.hp * this.hpMul), alive: true, inv: 0, cd: 0.3 + i * 0.1, aim: -Math.PI / 2, flash: 0, swing: 0, hasTarget: false }));
    this.enemies = []; this.projectiles = []; this.hazards = []; this.pickups = []; this.jaws = [];
    this.boss = null; this.charge = 0; this.candies = 0; this.mintT = 0; this.events = [];
    this.over = false; this.result = null; this.nextId = 1;
    this.hazardHits = []; // {kind, warn, age}: every hit a hazard did, for tests
    this.kills = 0;
    this.ev({ type: 'wave', n: 1 });
  }

  ev(e) { this.events.push(e); }
  drain() { const e = this.events; this.events = []; return e; }
  get aliveBears() { return this.bears.filter((b) => b.alive); }
  get fallenBears() { return this.bears.filter((b) => !b.alive); }
  get stars() { return this.bears.filter((b) => b.alive).length; }
  get bossFight() { return !!this.boss && this.boss.state !== 'dead'; }

  // ---- targeting
  targets() { const t = this.enemies.filter((e) => e.hp > 0); if (this.boss && this.boss.hp > 0 && this.boss.state !== 'intro') t.push(this.boss); return t; }
  nearest(x, y, list) { let best = null; let bd = 1e9; for (const e of list) { const d = Math.hypot(e.x - x, e.y - y) - (e.r || 0); if (d < bd) { bd = d; best = e; } } return best ? { e: best, d: bd } : null; }

  // ---- main step
  step(dt, input = {}) {
    if (this.over) { this.t += dt; return; }
    dt = Math.min(dt, 0.05);
    this.t += dt;
    this._squad(dt, input);
    this._waves(dt);
    this._enemies(dt);
    this._boss(dt);
    this._bears(dt);
    this._projectiles(dt);
    this._hazards(dt);
    this._jaws(dt);
    if (input.super) this.useSuper();
    this._pickups(dt);
    this._mintTimer(dt);
    this._ending();
  }

  // ---- squad movement + formation
  _squad(dt, input) {
    const sq = this.squad;
    const ix = Number(input.x) || 0; const iy = Number(input.y) || 0;
    const m = Math.hypot(ix, iy);
    sq.moving = m > 0.05;
    if (sq.moving) {
      const k = Math.min(1, m) / m;
      sq.x = clamp(sq.x + ix * k * 6.2 * dt, -ARENA.hx + 1.9, ARENA.hx - 1.9);
      sq.y = clamp(sq.y + iy * k * 6.2 * dt, -ARENA.hy + 1.9, ARENA.hy - 1.9);
    }
    const near = this.nearest(sq.x, sq.y, this.targets());
    let want = sq.face;
    if (near) want = Math.atan2(near.e.y - sq.y, near.e.x - sq.x); else if (sq.moving) want = Math.atan2(iy, ix);
    const da = angDiff(sq.face, want);
    sq.face += clamp(da, -8 * dt, 8 * dt);
    const c = Math.cos(sq.face); const s = Math.sin(sq.face);
    for (const b of this.bears) {
      if (!b.alive) continue;
      const [f, sd] = SLOTS[b.idx];
      const tx = sq.x + f * c - sd * s; const ty = sq.y + f * s + sd * c;
      const k = Math.min(1, dt * 9);
      b.x = clamp(b.x + (tx - b.x) * k, -ARENA.hx + 0.7, ARENA.hx - 0.7);
      b.y = clamp(b.y + (ty - b.y) * k, -ARENA.hy + 0.7, ARENA.hy - 0.7);
    }
  }

  // ---- waves
  _waves(dt) {
    if (this.state === 'wave') {
      this.waveT += dt;
      const w = this.waves[this.wave];
      while (this.spawnIdx < w.length && w[this.spawnIdx][0] <= this.waveT) {
        const [, kind, n] = w[this.spawnIdx++];
        for (let i = 0; i < n; i++) this.spawn(kind);
      }
      if (this.spawnIdx >= w.length && this.enemies.every((e) => e.hp <= 0)) { this.state = 'gap'; this.gapT = 2.4; this.ev({ type: 'waveClear', n: this.wave + 1 }); }
    } else if (this.state === 'gap') {
      this.gapT -= dt;
      if (this.gapT <= 0) {
        if (this.wave + 1 < this.waves.length) { this.wave++; this.state = 'wave'; this.waveT = 0; this.spawnIdx = 0; this.ev({ type: 'wave', n: this.wave + 1 }); }
        else { this.state = 'boss'; this._spawnBoss(); }
      }
    }
  }

  spawn(kind, at) {
    const d = KINDS[kind];
    let x = 0; let y = 0;
    if (at) { x = at.x; y = at.y; } else {
      for (let i = 0; i < 8; i++) {
        const side = Math.floor(this.rng() * 4); const u = (this.rng() * 2 - 1) * (ARENA.hx - 1);
        x = side === 0 ? -ARENA.hx + 0.8 : side === 1 ? ARENA.hx - 0.8 : u; y = side === 2 ? -ARENA.hy + 0.8 : side === 3 ? ARENA.hy - 0.8 : u;
        if (Math.hypot(x - this.squad.x, y - this.squad.y) > 7) break;
      }
    }
    const e = { id: this.nextId++, kind, x, y, r: d.r, hp: d.hp * this.mul.hp, maxHp: d.hp * this.mul.hp, speed: d.speed * this.mul.spd * (this.easy ? 0.85 : 1), flash: 0, touchCd: 0.6, shotCd: 1 + this.rng() * 1.5, wind: 0, fuse: 0, age: 0, aim: 0 };
    this.enemies.push(e);
    this.ev({ type: 'spawn', kind, x, y });
    return e;
  }

  _spawnBoss() {
    this.boss = { x: 0, y: -5, r: BOSS.r, hp: BOSS.hp * this.mul.boss * (this.easy ? 0.8 : 1), maxHp: BOSS.hp * this.mul.boss * (this.easy ? 0.8 : 1), state: 'intro', t: 0, phase: 1, atk: 0, dir: Math.PI / 2, hazard: null, hit: new Set(), flash: 0, touchCd: 0, volley: 0, face: Math.PI / 2, kind: 'boss' };
    this.ev({ type: 'bossIntro' });
  }

  // ---- enemies
  _enemies(dt) {
    const live = this.enemies.filter((e) => e.hp > 0);
    const bears = this.aliveBears;
    for (const e of live) {
      e.age += dt; e.flash = Math.max(0, e.flash - dt); e.touchCd -= dt;
      const def = KINDS[e.kind];
      const tgt = this.nearest(e.x, e.y, bears.map((b) => ({ x: b.x, y: b.y, r: 0, b })));
      let vx = 0; let vy = 0;
      if (tgt) {
        const dx = tgt.e.x - e.x; const dy = tgt.e.y - e.y; const dd = Math.hypot(dx, dy) || 1;
        e.aim = Math.atan2(dy, dx);
        if (def.bomb) {
          if (e.fuse > 0) { /* stands still while the fuse burns */ } else if (dd < 3.1) { e.fuse = 1; this.hazards.push({ kind: 'blast', from: 'blast', x: e.x, y: e.y, r: 2.4, warn: 1.0, t: 0, dmg: 18, owner: e, done: false }); this.ev({ type: 'fuse', x: e.x, y: e.y }); } else { vx = dx / dd; vy = dy / dd; }
        } else if (def.shoot) {
          if (e.wind > 0) { e.wind -= dt; if (e.wind <= 0) this._enemyShot(e, tgt.e, def); } else {
            if (dd > def.keep + 1) { vx = dx / dd; vy = dy / dd; } else if (dd < def.keep - 1.2) { vx = -dx / dd; vy = -dy / dd; }
            e.shotCd -= dt;
            if (e.shotCd <= 0 && dd < 12) { e.wind = 0.55; e.shotCd = def.shotCd; this.ev({ type: 'wind', x: e.x, y: e.y, id: e.id }); }
          }
        } else { vx = dx / dd; vy = dy / dd; }
        if (def.touch && dd < e.r + BEAR_R + 0.15 && e.touchCd <= 0) { e.touchCd = 1.1; this.hurtBear(tgt.e.b, def.touch, { kind: 'touch' }); }
      }
      e.x += vx * e.speed * dt; e.y += vy * e.speed * dt;
      for (const o of live) { // keep sweets from piling up on one spot
        if (o === e) continue;
        const dx = e.x - o.x; const dy = e.y - o.y; const d = Math.hypot(dx, dy); const mn = e.r + o.r;
        if (d < mn && d > 1e-4) { const p = (mn - d) * 0.5 * Math.min(1, dt * 10); e.x += (dx / d) * p; e.y += (dy / d) * p; }
      }
      e.x = clamp(e.x, -ARENA.hx + 0.5, ARENA.hx - 0.5); e.y = clamp(e.y, -ARENA.hy + 0.5, ARENA.hy - 0.5);
    }
    this.enemies = this.enemies.filter((e) => e.hp > 0 || e.dying);
  }

  _enemyShot(e, t, def) {
    const a = Math.atan2(t.y - e.y, t.x - e.x);
    this.projectiles.push({ from: 'enemy', kind: 'spit', x: e.x + Math.cos(a) * 0.8, y: e.y + Math.sin(a) * 0.8, vx: Math.cos(a) * def.projSpeed, vy: Math.sin(a) * def.projSpeed, dmg: def.projDmg, splash: 0, life: 3, r: 0.28 });
    this.ev({ type: 'spit', x: e.x, y: e.y });
  }

  // ---- boss
  _boss(dt) {
    const b = this.boss;
    if (!b || b.state === 'dead') return;
    b.t += dt; b.flash = Math.max(0, b.flash - dt); b.touchCd -= dt;
    const bears = this.aliveBears;
    const tgt = this.nearest(b.x, b.y, bears);
    b.phase = b.hp / b.maxHp > 0.6 ? 1 : b.hp / b.maxHp > 0.3 ? 2 : 3;
    if (b.phase !== (b.lastPhase || 1)) { b.lastPhase = b.phase; this.ev({ type: 'phase', n: b.phase }); }
    const ph = b.phase - 1;
    const goto = (speed) => { if (!tgt) return; const dx = tgt.e.x - b.x; const dy = tgt.e.y - b.y; const d = Math.hypot(dx, dy) || 1; if (d > b.r + 1.4) { b.x += (dx / d) * speed * dt; b.y += (dy / d) * speed * dt; } b.face = Math.atan2(dy, dx); };
    const touch = () => { if (b.touchCd > 0) return; for (const be of bears) if (Math.hypot(be.x - b.x, be.y - b.y) < b.r + BEAR_R + 0.1) { b.touchCd = 1.2; this.hurtBear(be, BOSS.touch, { kind: 'touch' }); break; } };
    switch (b.state) {
      case 'intro':
        if (b.t >= 2.6) { b.state = 'idle'; b.t = 0; b.idleDur = 1.6; this.ev({ type: 'bossLand', x: b.x, y: b.y }); }
        break;
      case 'idle':
        goto(BOSS.speed * (1 + ph * 0.2)); touch();
        if (b.t >= b.idleDur) { const cyc = CYCLES[ph]; const a = cyc[b.atk++ % cyc.length]; this._startAttack(b, a, tgt); }
        break;
      case 'rain': {
        // two volleys of glaze circles, 0.8 s apart
        const sched = [0.55, 1.35];
        if (b.volley < sched.length && b.t >= sched[b.volley]) { this._rainVolley(b, b.volley); b.volley++; }
        if (b.t >= 1.9) this._toIdle(b);
        break;
      }
      case 'summon':
        if (!b.summoned && b.t >= 0.6) { b.summoned = true; this._summon(b); }
        if (b.t >= 1.4) this._toIdle(b);
        break;
      case 'windCharge':
        if (b.t >= b.hazard.warn) { b.state = 'charge'; b.t = 0; b.hit = new Set(); this.ev({ type: 'chargeGo', x: b.x, y: b.y }); }
        break;
      case 'charge': {
        const sp = CHARGE.speed[ph];
        b.x += Math.cos(b.dir) * sp * dt; b.y += Math.sin(b.dir) * sp * dt;
        for (const be of bears) {
          if (b.hit.has(be.id)) continue;
          if (Math.hypot(be.x - b.x, be.y - b.y) < b.r + BEAR_R) { b.hit.add(be.id); this.hurtBear(be, CHARGE.dmg * (1 + ph * 0.1), { kind: 'charge', age: b.hazard.t, warn: b.hazard.warn }); }
        }
        if (Math.abs(b.x) > ARENA.hx - b.r - 0.2 || Math.abs(b.y) > ARENA.hy - b.r - 0.2) {
          b.x = clamp(b.x, -ARENA.hx + b.r + 0.2, ARENA.hx - b.r - 0.2); b.y = clamp(b.y, -ARENA.hy + b.r + 0.2, ARENA.hy - b.r - 0.2);
          b.state = 'stun'; b.t = 0; this._dropHazard(b.hazard); b.hazard = null; this.ev({ type: 'bossSlam', x: b.x, y: b.y });
        }
        break;
      }
      case 'stun':
        if (b.t >= CHARGE.stun[ph]) this._toIdle(b);
        break;
      default: break;
    }
    // the boss never leaves the arena
    b.x = clamp(b.x, -ARENA.hx + b.r, ARENA.hx - b.r); b.y = clamp(b.y, -ARENA.hy + b.r, ARENA.hy - b.r);
  }

  _toIdle(b) { b.state = 'idle'; b.t = 0; b.idleDur = [2.2, 1.6, 1.1][b.phase - 1]; b.summoned = false; b.volley = 0; }

  _startAttack(b, a, tgt) {
    b.t = 0; b.state = a === 'charge' ? 'windCharge' : a; b.volley = 0; b.summoned = false;
    if (a === 'charge') {
      const ph = b.phase - 1;
      const tx = tgt ? tgt.e.x : 0; const ty = tgt ? tgt.e.y : 0;
      b.dir = Math.atan2(ty - b.y, tx - b.x); b.face = b.dir;
      const dx = Math.cos(b.dir); const dy = Math.sin(b.dir);
      let len = 0; while (len < 60) { const px = b.x + dx * len; const py = b.y + dy * len; if (Math.abs(px) > ARENA.hx - b.r - 0.2 || Math.abs(py) > ARENA.hy - b.r - 0.2) break; len += 0.25; }
      b.hazard = { kind: 'path', from: 'charge', x: b.x, y: b.y, dx, dy, len, width: b.r * 2, warn: CHARGE.warn[ph], t: 0, owner: b };
      this.hazards.push(b.hazard);
      this.ev({ type: 'chargeWarn', x: b.x, y: b.y, dir: b.dir });
    } else this.ev({ type: a === 'rain' ? 'rainWarn' : 'summonWarn', x: b.x, y: b.y });
  }

  _dropHazard(hz) { const i = this.hazards.indexOf(hz); if (i >= 0) this.hazards.splice(i, 1); }

  _rainVolley(b, n) {
    const ph = b.phase - 1; const bears = this.aliveBears;
    const count = 2 + b.phase;
    const spots = [];
    if (n === 0) for (const be of bears) spots.push({ x: be.x, y: be.y }); // right under the bears: they must step away
    for (let i = 0; i < count; i++) spots.push({ x: (this.rng() * 2 - 1) * (ARENA.hx - 2), y: (this.rng() * 2 - 1) * (ARENA.hy - 2) });
    for (const s of spots) this.hazards.push({ kind: 'circle', from: 'rain', x: s.x, y: s.y, r: RAIN.r[ph], warn: RAIN.warn[ph], t: 0, dmg: RAIN.dmg * (1 + ph * 0.1), done: false });
    this.ev({ type: 'rain', n: spots.length });
  }

  _summon(b) {
    const n = [3, 4, 5][b.phase - 1];
    const live = this.enemies.filter((e) => e.hp > 0).length;
    for (let i = 0; i < n && live + i < 9; i++) {
      const a = (i / n) * TAU + this.rng();
      const e = this.spawn(i % 2 ? 'sour' : 'gummy', { x: clamp(b.x + Math.cos(a) * 3, -ARENA.hx + 1, ARENA.hx - 1), y: clamp(b.y + Math.sin(a) * 3, -ARENA.hy + 1, ARENA.hy - 1) });
      e.touchCd = 1.0;
    }
    this.ev({ type: 'summon', x: b.x, y: b.y });
  }

  // ---- bears attack the nearest enemy
  _bears(dt) {
    const targets = this.targets();
    for (const b of this.bears) {
      b.flash = Math.max(0, b.flash - dt); b.inv = Math.max(0, b.inv - dt); b.swing = Math.max(0, b.swing - dt); b.cd -= dt;
      if (!b.alive) continue;
      const d = b.def;
      const n = this.nearest(b.x, b.y, targets);
      b.hasTarget = !!(n && n.d <= d.range);
      if (!n) { b.aim = this.squad.face; continue; }
      b.aim = Math.atan2(n.e.y - b.y, n.e.x - b.x);
      if (!b.hasTarget || b.cd > 0) continue;
      b.cd = d.cd;
      if (d.role === 'melee') {
        b.swing = 0.28;
        for (const t of targets) {
          const dd = Math.hypot(t.x - b.x, t.y - b.y);
          if (dd - (t.r || 0) > d.range) continue;
          if (Math.abs(angDiff(b.aim, Math.atan2(t.y - b.y, t.x - b.x))) > d.arc && dd > (t.r || 0) + 0.8) continue;
          this.hurtEnemy(t, d.dmg, { bear: b });
        }
        this.ev({ type: 'swing', x: b.x, y: b.y, a: b.aim, idx: b.idx });
      } else {
        const a = b.aim + (this.rng() - 0.5) * (d.role === 'ranged' ? 0.07 : 0.02);
        this.projectiles.push({ from: 'bear', kind: d.role === 'magic' ? 'magic' : 'gum', x: b.x + Math.cos(a) * 0.7, y: b.y + Math.sin(a) * 0.7, vx: Math.cos(a) * d.speed, vy: Math.sin(a) * d.speed, dmg: d.dmg, splash: d.splash || 0, life: d.range / d.speed + 0.35, r: d.role === 'magic' ? 0.4 : 0.25, idx: b.idx });
        this.ev({ type: 'shoot', x: b.x, y: b.y, a, idx: b.idx });
      }
    }
  }

  // ---- damage
  hurtEnemy(e, d, src = {}) {
    if (e.hp <= 0) return 0;
    if (e.kind === 'boss' && e.state === 'intro') return 0;
    let dmg = d * this.dmgMul * (e.kind === 'boss' && e.state === 'stun' ? 1.5 : 1);
    dmg = Math.min(dmg, e.hp);
    e.hp -= dmg; e.flash = 0.12;
    if (!src.noCharge) this.charge = Math.min(100, this.charge + dmg * 0.16 * this.chargeMul);
    this.ev({ type: 'hit', x: e.x, y: e.y, boss: e.kind === 'boss', dmg });
    if (e.hp <= 1e-6) { e.hp = 0; this._die(e); }
    return dmg;
  }

  _die(e) {
    if (e.kind === 'boss') {
      e.state = 'dead';
      this.hazards = this.hazards.filter((h) => h.kind === 'splat');
      this.ev({ type: 'bossDown', x: e.x, y: e.y });
      for (const o of this.enemies) if (o.hp > 0) { o.hp = 0; this.kills++; this.ev({ type: 'crumble', kind: o.kind, x: o.x, y: o.y }); }
      this._drop(e.x, e.y, 12, 3);
      return;
    }
    this.kills++;
    const def = KINDS[e.kind];
    this.ev({ type: 'crumble', kind: e.kind, x: e.x, y: e.y });
    this._drop(e.x, e.y, def.reward, 1);
    const fallen = this.fallenBears.length > 0;
    if (!this.pickups.some((p) => p.type === 'mint') && this.rng() < (fallen ? 0.35 : 0.04)) this._mint(e.x, e.y);
  }

  _drop(x, y, n, v) {
    for (let i = 0; i < n; i++) { const a = this.rng() * TAU; const s = 1.5 + this.rng() * 2.5; this.pickups.push({ type: 'candy', x, y, v, vx: Math.cos(a) * s, vy: Math.sin(a) * s, t: 0, hue: Math.floor(this.rng() * 6) }); }
  }
  _mint(x, y) { this.pickups.push({ type: 'mint', x, y, v: 0, vx: 0, vy: 0, t: 0, life: 28 }); this.mintT = this.t; this.ev({ type: 'mintDrop', x, y }); }

  hurtBear(b, d, src = {}) {
    if (!b.alive || b.inv > 0) return false;
    const dmg = d * (this.easy ? 0.6 : 1);
    b.hp -= dmg; b.flash = 0.25; b.inv = 0.5;
    if (src.kind === 'charge' || src.kind === 'rain' || src.kind === 'blast') this.hazardHits.push({ kind: src.kind, warn: src.warn ?? 0, age: src.age ?? 0 });
    this.ev({ type: 'bearHit', x: b.x, y: b.y, idx: b.idx, dmg });
    if (b.hp <= 0) { b.hp = 0; b.alive = false; b.fallT = this.t; this.ev({ type: 'bearDown', x: b.x, y: b.y, idx: b.idx }); }
    return true;
  }

  // ---- projectiles
  _projectiles(dt) {
    const targets = this.targets();
    const out = [];
    for (const p of this.projectiles) {
      p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt;
      let dead = p.life <= 0 || Math.abs(p.x) > ARENA.hx + 3 || Math.abs(p.y) > ARENA.hy + 3;
      if (!dead && p.from === 'bear') {
        for (const t of targets) {
          if (t.hp <= 0) continue;
          if (Math.hypot(t.x - p.x, t.y - p.y) < (t.r || 0.6) + p.r) {
            if (p.splash > 0) for (const o of targets) { if (o.hp > 0 && Math.hypot(o.x - p.x, o.y - p.y) - (o.r || 0) <= p.splash) this.hurtEnemy(o, p.dmg, { bear: p.idx }); } else this.hurtEnemy(t, p.dmg, { bear: p.idx });
            this.ev({ type: 'impact', x: p.x, y: p.y, kind: p.kind });
            dead = true; break;
          }
        }
      } else if (!dead && p.from === 'enemy') {
        for (const b of this.bears) if (b.alive && Math.hypot(b.x - p.x, b.y - p.y) < BEAR_R + p.r) { if (this.hurtBear(b, p.dmg, { kind: 'spit' }) || b.inv > 0) { this.ev({ type: 'impact', x: p.x, y: p.y, kind: 'spit' }); dead = true; break; } }
      }
      if (!dead) out.push(p);
    }
    this.projectiles = out;
  }

  // ---- hazards (always telegraphed)
  _hazards(dt) {
    const keep = [];
    for (const h of this.hazards) {
      h.t += dt;
      if (h.kind === 'blast' && h.owner.hp <= 0 && !h.done) continue; // popped before it went off: nothing happens
      if ((h.kind === 'circle' || h.kind === 'blast') && !h.done && h.t >= h.warn) {
        h.done = true;
        for (const b of this.bears) if (b.alive && Math.hypot(b.x - h.x, b.y - h.y) <= h.r + BEAR_R * 0.4) this.hurtBear(b, h.dmg, { kind: h.from, age: h.t, warn: h.warn });
        this.ev({ type: h.kind === 'blast' ? 'blast' : 'splat', x: h.x, y: h.y, r: h.r });
        if (h.kind === 'blast' && h.owner.hp > 0) { h.owner.hp = 0; h.owner.dying = false; this.kills++; this.ev({ type: 'crumble', kind: h.owner.kind, x: h.owner.x, y: h.owner.y }); this._drop(h.owner.x, h.owner.y, KINDS.bomber.reward, 1); }
      }
      if (h.done && h.t >= h.warn + 0.5) continue;
      keep.push(h);
    }
    this.hazards = keep;
  }

  // ---- SUPER: a giant jawbreaker
  useSuper() {
    if (this.over || this.charge < 100 || !(this.state === 'wave' || this.state === 'boss')) return false;
    const targets = this.targets();
    if (!targets.length) return false;
    let best = null; let bs = -1;
    for (const c of targets) {
      let s = c.kind === 'boss' ? 4 : 1;
      for (const o of targets) if (o !== c && Math.hypot(o.x - c.x, o.y - c.y) < 3.6) s += o.kind === 'boss' ? 4 : 1;
      if (s > bs) { bs = s; best = c; }
    }
    this.charge = 0;
    this.jaws.push({ x: best.x, y: best.y, t: 0, delay: 0.95, r: 4.4, dmg: 120, bossDmg: 170 });
    this.ev({ type: 'super', x: best.x, y: best.y });
    return true;
  }

  _jaws(dt) {
    const keep = [];
    for (const j of this.jaws) {
      j.t += dt;
      if (j.t < j.delay) { keep.push(j); continue; }
      for (const t of this.targets()) {
        const d = Math.hypot(t.x - j.x, t.y - j.y);
        if (d - (t.r || 0) <= j.r) this.hurtEnemy(t, t.kind === 'boss' ? j.bossDmg : j.dmg, { noCharge: true });
      }
      this.projectiles = this.projectiles.filter((p) => p.from !== 'enemy' || Math.hypot(p.x - j.x, p.y - j.y) > j.r);
      this.ev({ type: 'jawLand', x: j.x, y: j.y, r: j.r });
    }
    this.jaws = keep;
  }

  // ---- candies and mints
  _pickups(dt) {
    const bears = this.aliveBears;
    const keep = [];
    for (const p of this.pickups) {
      p.t += dt;
      if (p.type === 'candy') {
        p.x = clamp(p.x + p.vx * dt, -ARENA.hx + 0.4, ARENA.hx - 0.4); p.y = clamp(p.y + p.vy * dt, -ARENA.hy + 0.4, ARENA.hy - 0.4);
        const k = Math.max(0, 1 - dt * 5); p.vx *= k; p.vy *= k;
        if (p.t > 0.35) {
          const n = this.nearest(p.x, p.y, bears);
          if (n && n.d < 4.2) { const dx = n.e.x - p.x; const dy = n.e.y - p.y; const d = Math.hypot(dx, dy) || 1; p.x += (dx / d) * 9 * dt; p.y += (dy / d) * 9 * dt; }
          if (n && n.d < 0.95) { this.candies += p.v; this.ev({ type: 'candy', x: p.x, y: p.y, v: p.v }); continue; }
        }
      } else {
        p.life -= dt;
        if (p.life <= 0) continue;
        const n = this.nearest(p.x, p.y, bears);
        if (n && n.d < 1.1) { this._useMint(p); continue; }
      }
      keep.push(p);
    }
    this.pickups = keep;
  }

  _useMint(p) {
    const down = this.fallenBears.sort((a, b) => a.fallT - b.fallT)[0];
    if (down) { down.alive = true; down.hp = Math.ceil(down.maxHp * 0.5); down.inv = 1.5; down.flash = 0.4; this.ev({ type: 'revive', x: down.x, y: down.y, idx: down.idx }); } else {
      for (const b of this.aliveBears) b.hp = Math.min(b.maxHp, b.hp + b.maxHp * 0.25);
      this.ev({ type: 'heal', x: p.x, y: p.y });
    }
  }

  _mintTimer() {
    if (this.fallenBears.length && this.aliveBears.length && !this.pickups.some((p) => p.type === 'mint') && this.t - this.mintT > 14 && (this.state === 'wave' || this.state === 'boss')) {
      const a = this.rng() * TAU; const d = 4 + this.rng() * 4;
      this._mint(clamp(this.squad.x + Math.cos(a) * d, -ARENA.hx + 1.2, ARENA.hx - 1.2), clamp(this.squad.y + Math.sin(a) * d, -ARENA.hy + 1.2, ARENA.hy - 1.2));
    }
  }

  // ---- end
  _ending() {
    if (this.over) return;
    if (this.boss && this.boss.state === 'dead') {
      this.over = true; this.state = 'won';
      const stars = this.stars;
      this.result = { win: true, stars, candies: this.candies, bonus: 20 + 10 * stars + 6 * this.stage, stage: this.stage };
      this.ev({ type: 'won', stars });
    } else if (!this.aliveBears.length) {
      this.over = true; this.state = 'lost';
      this.result = { win: false, stars: 0, candies: this.candies, bonus: 0, stage: this.stage };
      this.ev({ type: 'lost' });
    }
  }
}
