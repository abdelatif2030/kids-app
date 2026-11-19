// Game rules for the Viking Slingshot: a Battle ties the physics world to the slingshot, the viking types, goblins, gold and stars.
// Pure logic, no DOM: the canvas game (main.js) and the tests drive the same class.
import { World, DT, GRAVITY, MATERIALS } from './phys.js';
import { LEVELS } from './levels.js';

export const ANCHOR = { x: 3.4, y: 3.3 };
export const MAX_PULL = 3.2;
export const BASE_K = 8.6; // launch speed per unit of pull (max pull 3.2 -> about 27.5 m/s)
export const SIM_LIMIT = 14; // seconds a shot may take to settle before the next viking comes

export const VIKINGS = {
  axe: { r: 0.46, density: 4.2, rest: 0.18, power: 1.0, ar: 'فايكنج', en: 'Viking', icon: '🪓' },
  bomb: { r: 0.5, density: 4.0, rest: 0.1, power: 1.0, ar: 'فايكنج القنبلة', en: 'Bomb thrower', icon: '💣' },
  shield: { r: 0.5, density: 4.0, rest: 0.82, power: 1.15, ar: 'فايكنج الدرع', en: 'Shield bouncer', icon: '🛡️' },
  giant: { r: 0.82, density: 4.6, rest: 0.08, power: 2.7, ar: 'العملاق', en: 'The giant', icon: '👹' },
};

export const GOBLINS = {
  g: { r: 0.55, hp: 2, thr: 3.2, gold: 10 },
  h: { r: 0.6, hp: 5, thr: 6, gold: 20 }, // helmet
  boss: { r: 1.35, hp: 16, thr: 9, gold: 120 },
};

export const UPGRADE_COST = { power: [60, 140, 260], extra: [90, 200, 400] };

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const n = LEVELS.length;
  const stars = {};
  if (o.stars && typeof o.stars === 'object') {
    for (let i = 1; i <= n; i++) { const v = Math.floor(Number(o.stars[i])); if (v >= 1 && v <= 3) stars[i] = v; }
  }
  const up = o.up && typeof o.up === 'object' ? o.up : {};
  const lvl = (v) => Math.max(0, Math.min(3, Math.floor(Number(v)) || 0));
  let unlocked = Math.floor(Number(o.unlocked)) || 1;
  for (let i = 1; i <= n; i++) if (stars[i] && i + 1 > unlocked) unlocked = i + 1;
  unlocked = Math.max(1, Math.min(n, unlocked));
  return { unlocked, stars, gold: Math.max(0, Math.min(999999, Math.floor(Number(o.gold)) || 0)), up: { power: lvl(up.power), extra: lvl(up.extra) }, muted: !!o.muted };
}

export function upgradeCost(save, kind) { const l = save.up[kind]; return l >= 3 ? null : UPGRADE_COST[kind][l]; }
export function buyUpgrade(save, kind) {
  const c = upgradeCost(save, kind);
  if (c === null || save.gold < c) return false;
  save.gold -= c; save.up[kind] += 1;
  return true;
}

/** Record a finished level in the save (gold is kept even when the level was lost). */
export function recordResult(save, index, res) {
  save.gold += Math.max(0, res.gold | 0);
  if (res.won) {
    const lv = index + 1;
    save.stars[lv] = Math.max(save.stars[lv] || 0, res.stars);
    save.unlocked = Math.max(save.unlocked, Math.min(LEVELS.length, lv + 1));
  }
  return save;
}

export function starsFor(unused, total) {
  if (unused >= Math.ceil(total / 2)) return 3;
  if (unused >= 1) return 2;
  return 1;
}

export class Battle {
  constructor(index, opts = {}) {
    this.index = index;
    this.level = LEVELS[index];
    this.opts = { power: opts.power | 0, extra: opts.extra | 0, easy: !!opts.easy };
    this.world = new World(opts.seed || 7 + index);
    if (opts.noSleep) this.world.sleeping = false;
    this.queue = this.level.vikings.slice();
    for (let i = 0; i < this.opts.extra; i++) this.queue.push('axe');
    this.cur = 0;
    this.state = 'aim'; // aim | fly | settle | won | lost
    this.flight = null;
    this.settleT = 0;
    this.gold = 0;
    this.kills = 0;
    this.shots = 0;
    this.broken = 0;
    this.goblinsTotal = 0;
    this.goblinsLeft = 0;
    this.time = 0;
    this.stars = 0;
    this.out = []; // events of the last update()
    this.acc = 0;
    this._build();
  }

  _build() {
    const w = this.world;
    w.addBox({ x: 30, y: -2, w: 150, h: 4, mat: 'ground', kind: 'ground', static: true });
    for (const l of this.level.ledges || []) w.addBox({ x: l.x, y: l.y, w: l.w, h: l.h, mat: 'stone', kind: 'ground', static: true });
    for (const b of this.level.blocks) w.addBox({ x: b.x, y: b.y, w: b.w, h: b.h, mat: b.m, a: b.a || 0, kind: 'block' });
    for (const g of this.level.goblins) {
      const k = GOBLINS[g.k || 'g'];
      const body = w.addCircle({ x: g.x, y: g.y, r: k.r, kind: 'goblin', mat: 'goblin', hp: k.hp, thr: k.thr, tag: g.k || 'g' });
      body.gold = k.gold;
      this.goblinsTotal++;
    }
    this.goblinsLeft = this.goblinsTotal;
    // let the fort settle before the player sees it (deterministic), then it sleeps until touched
    for (let i = 0; i < 120 * 2; i++) w.step();
    w.events.length = 0;
    this.out = [];
  }

  get vikingsLeft() { return this.queue.length - this.cur; }
  get currentType() { return this.cur < this.queue.length ? this.queue[this.cur] : null; }

  /** pull = vector from the dragged position back to the anchor (the direction the viking will fly). */
  velocityFor(px, py) {
    const l = Math.hypot(px, py);
    if (l < 1e-6) return { vx: 0, vy: 0, l: 0 };
    const c = Math.min(l, MAX_PULL);
    const k = BASE_K * (1 + 0.1 * this.opts.power) * (this.opts.easy ? 1 : 1);
    return { vx: (px / l) * c * k, vy: (py / l) * c * k, l: c };
  }

  launch(px, py) {
    if (this.state !== 'aim' || this.cur >= this.queue.length) return false;
    const v = this.velocityFor(px, py);
    if (v.l < 0.35) return false;
    const type = this.queue[this.cur];
    const spec = VIKINGS[type];
    this.cur++;
    this.shots++;
    const body = this.world.addCircle({
      x: ANCHOR.x, y: ANCHOR.y, r: spec.r, kind: 'viking', mat: 'viking', density: spec.density, rest: spec.rest, power: spec.power,
      mass: spec.density * Math.PI * spec.r * spec.r, tag: type === 'giant' ? 'smasher' : type,
    });
    body.vx = v.vx; body.vy = v.vy; body.w = -body.vx * 0.2 / spec.r;
    this.flight = { body, type, t: 0, used: false, fuse: -1, still: 0 };
    this.state = 'fly';
    this.settleT = 0;
    this.out.push({ t: 'launch', type });
    return true;
  }

  /** The special move of the flying viking. */
  tap() {
    const f = this.flight;
    if (this.state !== 'fly' || !f || f.used || !f.body.alive) return false;
    f.used = true;
    const b = f.body;
    if (f.type === 'bomb') { this._boom(f); return true; }
    if (f.type === 'giant') { b.vy = Math.min(b.vy, -16); b.vx *= 0.7; }
    else { b.vx *= 1.3; b.vy = b.vy * 1.3 + 1.5; }
    this.world.wakeIsland(b);
    this.out.push({ t: 'ability', type: f.type, x: b.x, y: b.y });
    return true;
  }

  _boom(f) {
    const b = f.body;
    this.world.explode(b.x, b.y, 3.6, 10, 34);
    this.world.remove(b);
    f.exploded = true;
  }

  /** advance by real time dt (seconds); returns the events produced */
  update(dt) {
    this.out = [];
    this.acc += Math.min(dt, 0.1);
    let guard = 0;
    while (this.acc >= DT && guard++ < 24) { this.acc -= DT; this._step(); }
    return this.out;
  }

  /** run `seconds` of simulation at once (tests) */
  run(seconds) {
    const n = Math.round(seconds / DT);
    for (let i = 0; i < n; i++) { this._step(); if (this.state === 'won' && this.time > 0 && this.winT > 1.5) break; }
    return this.out;
  }

  _step() {
    const w = this.world;
    this.time += DT;
    w.step();
    for (const e of w.events) {
      if (e.t === 'goblin' || e.t === 'goblinLost') {
        this.goblinsLeft--; this.kills++;
        const g = GOBLINS[e.tag || 'g'];
        if (e.t === 'goblin') { this.gold += g.gold; this.out.push({ t: 'goblin', x: e.x, y: e.y, r: e.r, gold: g.gold, boss: e.tag === 'boss' }); }
      } else if (e.t === 'break') { this.broken++; this.out.push(e); } else if (e.t === 'gone') {
        if (this.flight && this.flight.body === e.body && !this.flight.exploded) { /* viking left the field */ this.flight.gone = true; }
      } else this.out.push(e);
    }
    const f = this.flight;
    if (f) {
      f.t += DT;
      const b = f.body;
      if (b.alive) {
        if (f.type === 'bomb' && !f.exploded) {
          if (b.touch && f.fuse < 0 && f.t > 0.12) f.fuse = 0.09;
          if (f.fuse >= 0) { f.fuse -= DT; if (f.fuse <= 0) this._boom(f); }
        }
        if (b.asleep || (Math.hypot(b.vx, b.vy) < 0.4 && b.touch)) f.still += DT; else f.still = 0;
      }
      if (this.state === 'fly' && (!b.alive || f.still > 1.2 || f.t > 9)) { this.state = 'settle'; this.settleT = 0; f.endT = this.time; }
    }
    if (this.state === 'settle') {
      this.settleT += DT;
      const f2 = this.flight;
      if (f2 && f2.body.alive && this.settleT > 1.6) { this.world.remove(f2.body); this.out.push({ t: 'vikingGone', x: f2.body.x, y: f2.body.y }); }
      if (this.settleT > 0.8 && (this.world.calm() || this.settleT > SIM_LIMIT)) {
        if (this.goblinsLeft > 0) this.state = this.cur < this.queue.length ? 'aim' : 'lost';
      }
    }
    if (this.goblinsLeft <= 0 && this.state !== 'won') {
      const unused = this.queue.length - this.cur;
      this.state = 'won'; this.winT = 0;
      this.stars = starsFor(unused, this.queue.length);
      this.bonus = unused * 15;
      this.gold += this.bonus;
      this.out.push({ t: 'won', stars: this.stars });
    } else if (this.state === 'won') this.winT += DT;
    if (this.state === 'lost' && !this.lostSent) { this.lostSent = true; this.out.push({ t: 'lost' }); }
  }

  result() { return { won: this.state === 'won', stars: this.stars, gold: this.gold }; }

  /** Copy of the whole battle (the robot in the tests tries shots on copies). */
  clone() {
    const o = structuredClone({ ...this });
    Object.setPrototypeOf(o, Battle.prototype);
    Object.setPrototypeOf(o.world, World.prototype);
    o.level = this.level;
    return o;
  }

  /** dots of the predicted flight (no collisions) from the anchor for a pull vector */
  trajectory(px, py, n = 16, step = 0.1) {
    const v = this.velocityFor(px, py);
    const pts = [];
    for (let i = 1; i <= n; i++) { const t = i * step; pts.push({ x: ANCHOR.x + v.vx * t, y: ANCHOR.y + v.vy * t + 0.5 * GRAVITY * t * t }); }
    return pts;
  }
}

void MATERIALS;
