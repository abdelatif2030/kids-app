// «معركة الكروت النيون» — pure, deterministic battle logic (no DOM, no clock). The renderer only reads this state.
// Arena: x 0..10, y 0..16 (hexagon with flat top/bottom). Side 0 = the player (robots, base at the bottom, y large),
// side 1 = the Alien Overlord (UFO at the top, y small). Time is advanced in fixed ticks of 1/30 s so a seed always
// plays out the same way.

export const DT = 1 / 30;
export const W = 10;
export const L = 16;
export const HALF = 8;
export const CX = 5;
export const MATCH_TIME = 150;
export const DOUBLE_AT = 60; // energy flows twice as fast when this many seconds (or less) are left
export const ENERGY_MAX = 10;
export const REGEN = 1 / 2.8; // energy per second
export const START_ENERGY = 5;
export const BASE_HP = 1000;
export const BASE_R = 1.25;
export const BASE_RANGE = 3.6;
export const HAND = 4;

export const DIFFS = {
  easy: { ufoHp: 800, ufoDmg: 16, aiRegen: 0.62, aiStart: 3, think: 3.6, pushAt: 8, miss: 0.35, smart: false },
  normal: { ufoHp: 1000, ufoDmg: 24, aiRegen: 0.9, aiStart: 5, think: 2.2, pushAt: 7, miss: 0.1, smart: true },
  hard: { ufoHp: 1150, ufoDmg: 30, aiRegen: 1.12, aiStart: 6, think: 1.1, pushAt: 5, miss: 0, smart: true },
  // 2026-11-21: two more levels above Hard
  expert: { ufoHp: 1300, ufoDmg: 34, aiRegen: 1.25, aiStart: 6, think: 0.9, pushAt: 4.5, miss: 0, smart: true },
  legend: { ufoHp: 1450, ufoDmg: 38, aiRegen: 1.38, aiStart: 7, think: 0.75, pushAt: 4, miss: 0, smart: true },
};

/** Unit stats. proj: the unit fires a homing bolt; building: never moves and expires. */
export const UNITS = {
  spark: { side: 0, hp: 110, dmg: 20, cd: 0.7, range: 0.7, speed: 2.5, r: 0.36, aggro: 3.4 },
  blaster: { side: 0, hp: 78, dmg: 19, cd: 0.85, range: 3.3, speed: 1.5, r: 0.4, aggro: 4.2, proj: 'laser', pspd: 11 },
  smash: { side: 0, hp: 560, dmg: 62, cd: 1.3, range: 0.9, speed: 1.0, r: 0.62, aggro: 3.0 },
  swarm: { side: 0, hp: 44, dmg: 9, cd: 0.55, range: 0.65, speed: 2.8, r: 0.27, aggro: 3.2 },
  turret: { side: 0, hp: 330, dmg: 17, cd: 0.7, range: 3.8, speed: 0, r: 0.6, aggro: 3.8, proj: 'laser', pspd: 12, building: true, life: 30 },
  slime: { side: 1, hp: 125, dmg: 18, cd: 0.8, range: 0.7, speed: 2.0, r: 0.4, aggro: 3.2 },
  bug: { side: 1, hp: 52, dmg: 12, cd: 0.5, range: 0.6, speed: 3.0, r: 0.28, aggro: 3.4 },
  brute: { side: 1, hp: 600, dmg: 58, cd: 1.3, range: 0.9, speed: 0.95, r: 0.65, aggro: 3.0 },
  spitter: { side: 1, hp: 82, dmg: 20, cd: 1.0, range: 3.1, speed: 1.4, r: 0.4, aggro: 4.0, proj: 'goo', pspd: 6.5 },
};

export const CARDS = {
  spark: { type: 'unit', cost: 2, unit: 'spark', count: 1 },
  blaster: { type: 'unit', cost: 3, unit: 'blaster', count: 1 },
  smash: { type: 'unit', cost: 5, unit: 'smash', count: 1 },
  swarm: { type: 'unit', cost: 3, unit: 'swarm', count: 3 },
  turret: { type: 'unit', cost: 4, unit: 'turret', count: 1 },
  plasma: { type: 'spell', cost: 3, spell: 'plasma' },
  blackhole: { type: 'spell', cost: 4, spell: 'blackhole' },
  repair: { type: 'spell', cost: 3, spell: 'repair' },
};
export const ALIEN_CARDS = {
  slime: { type: 'unit', cost: 2, unit: 'slime', count: 1 },
  bug: { type: 'unit', cost: 3, unit: 'bug', count: 2 },
  brute: { type: 'unit', cost: 5, unit: 'brute', count: 1 },
  spitter: { type: 'unit', cost: 4, unit: 'spitter', count: 1 },
};
export const SPELLS = {
  plasma: { r: 2.3, delay: 0.45, dur: 0.05, dmg: 135, baseDmg: 60, push: 0.9 },
  blackhole: { r: 2.7, delay: 0.3, dur: 3.6, dps: 40, pull: 2.4 },
  repair: { r: 2.6, delay: 0.2, dur: 4.0, hps: 56, baseHps: 10 },
};

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const arenaHalfW = (y) => 3.6 + 1.4 * (1 - Math.min(1, Math.abs(y - HALF) / HALF));
export function clampToArena(x, y, r = 0.35) {
  const cy = clamp(y, r, L - r);
  const hw = arenaHalfW(cy) - r;
  return [clamp(x, CX - hw, CX + hw), cy];
}

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Four cards in hand, the next one waiting; a played card goes to the back of the queue. */
export class Deck {
  constructor(rand, ids) {
    const order = ids.slice();
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    this.hand = order.slice(0, HAND);
    this.queue = order.slice(HAND);
  }
  get next() { return this.queue[0]; }
  play(slot) {
    const played = this.hand[slot];
    this.hand[slot] = this.queue.shift();
    this.queue.push(played);
    return played;
  }
}

const OFFS = {
  1: [[0, 0]],
  2: [[-0.35, 0], [0.35, 0]],
  3: [[-0.5, 0.2], [0.5, 0.2], [0, -0.35]],
};

export class Battle {
  constructor(opts = {}) {
    this.seed = opts.seed ?? 1;
    this.rand = mulberry32(this.seed);
    this.aiRand = mulberry32((this.seed ^ 0x9e3779b9) >>> 0);
    this.difficulty = DIFFS[opts.difficulty] ? opts.difficulty : 'normal';
    this.dp = DIFFS[this.difficulty];
    this.tick = 0;
    this.acc = 0;
    this.state = 'play';
    this.over = null;
    this.doubled = false;
    this.energy = START_ENERGY;
    this.aiEnergy = this.dp.aiStart;
    this.base = [
      { side: 0, isBase: true, hp: BASE_HP, max: BASE_HP, x: CX, y: 14.7, r: BASE_R, cd: 1, flash: 0, atk: 0 },
      { side: 1, isBase: true, hp: this.dp.ufoHp, max: this.dp.ufoHp, x: CX, y: 1.3, r: BASE_R, cd: 1.5, flash: 0, atk: 0 },
    ];
    this.units = [];
    this.projs = [];
    this.fields = [];
    this.nextId = 1;
    this.deck = new Deck(this.rand, Object.keys(CARDS));
    this.ai = new AI(this);
    this.events = [];
    this.stats = { played: 0, kills: 0, lost: 0 };
  }

  get timeLeft() { return Math.max(0, MATCH_TIME - this.tick * DT); }
  get alpha() { return this.acc / DT; }
  get energyRate() { return REGEN * (this.timeLeft <= DOUBLE_AT ? 2 : 1); }
  _ev(e) { this.events.push(e); }

  /** Where may this card be dropped? Units and the turret: own half. Spells: anywhere in the arena. */
  zoneOk(id, x, y, side = 0) {
    const c = side === 0 ? CARDS[id] : ALIEN_CARDS[id];
    if (!c) return false;
    if (y < 0 || y > L) return false;
    if (Math.abs(x - CX) > arenaHalfW(y)) return false;
    if (c.type === 'spell') return true;
    return side === 0 ? y >= HALF + 0.3 : y <= HALF - 0.3;
  }

  canPlay(slot) {
    const id = this.deck.hand[slot];
    return this.state === 'play' && !!id && this.energy >= CARDS[id].cost;
  }

  /** Player plays the card in hand slot `slot` at (x, y). Returns true when it worked. */
  play(slot, x, y) {
    if (this.state !== 'play') return false;
    const id = this.deck.hand[slot];
    const c = CARDS[id];
    if (!c || this.energy < c.cost || !this.zoneOk(id, x, y, 0)) return false;
    this.energy -= c.cost;
    this.deck.play(slot);
    this.stats.played++;
    this._cast(0, c, id, x, y);
    return true;
  }

  aiPlay(id, x, y) {
    const c = ALIEN_CARDS[id];
    if (!c || this.state !== 'play' || this.aiEnergy < c.cost || !this.zoneOk(id, x, y, 1)) return false;
    this.aiEnergy -= c.cost;
    this._cast(1, c, id, x, y);
    return true;
  }

  _cast(side, c, id, x, y) {
    if (c.type === 'spell') {
      const sp = SPELLS[c.spell];
      const [cx, cy] = clampToArena(x, y, 0.1);
      this.fields.push({ kind: c.spell, side, x: cx, y: cy, r: sp.r, delay: sp.delay, dur: sp.dur, t: 0, done: false, acc: 0 });
      this._ev({ type: 'spell', kind: c.spell, side, x: cx, y: cy, r: sp.r, delay: sp.delay, dur: sp.dur });
      return;
    }
    const offs = OFFS[c.count] || OFFS[1];
    const dir = side === 0 ? -1 : 1;
    for (const [ox, oy] of offs) this._spawn(side, c.unit, x + ox, y + oy * dir);
    this._ev({ type: 'deploy', side, kind: c.unit, card: id, x, y });
  }

  _spawn(side, kind, x, y) {
    const d = UNITS[kind];
    const [cx, cy] = clampToArena(x, y, d.r);
    const u = {
      id: this.nextId++, side, kind, x: cx, y: cy, px: cx, py: cy, hp: d.hp, max: d.hp, r: d.r,
      cd: 0.35, spawn: 0.45, age: 0, tgt: null, retarget: 0, slow: 0, flash: 0, atk: 0, ang: side === 0 ? -Math.PI / 2 : Math.PI / 2,
      dead: false, life: d.life || 0, moving: false,
    };
    this.units.push(u);
    return u;
  }

  step(dt) {
    if (this.state === 'play') {
      this.acc += Math.min(dt, 0.25);
      while (this.acc >= DT && this.state === 'play') {
        this.acc -= DT;
        this._tick();
      }
    }
    const out = this.events; // includes events from play() since the last step
    this.events = [];
    return out;
  }

  _tick() {
    this.tick++;
    const tl = this.timeLeft;
    const rate = REGEN * (tl <= DOUBLE_AT ? 2 : 1);
    if (!this.doubled && tl <= DOUBLE_AT) { this.doubled = true; this._ev({ type: 'double' }); }
    this.energy = Math.min(ENERGY_MAX, this.energy + rate * DT);
    this.aiEnergy = Math.min(ENERGY_MAX, this.aiEnergy + rate * DT * this.dp.aiRegen);
    for (const u of this.units) { u.px = u.x; u.py = u.y; }
    this.ai.update(DT);
    this._fields(DT);
    this._units(DT);
    this._bases(DT);
    this._projs(DT);
    this._separate();
    this.units = this.units.filter((u) => !u.dead);
    this._checkEnd();
  }

  _nearest(u, maxGap) {
    let best = null;
    let bd = 1e9;
    for (const v of this.units) {
      if (v.side === u.side || v.dead || v.spawn > 0) continue;
      const d = Math.hypot(v.x - u.x, v.y - u.y) - v.r - u.r;
      if (d < bd) { bd = d; best = v; }
    }
    return best && bd <= maxGap ? best : null;
  }

  _damage(t, n) {
    if (t.hp <= 0 || t.dead) return;
    t.hp -= n;
    t.flash = 0.12;
    this._ev({ type: 'dmg', x: t.x, y: t.y, n: Math.round(n), side: t.side, base: !!t.isBase });
    if (t.hp <= 0) {
      t.hp = 0;
      if (!t.isBase) this._kill(t, false);
    }
  }

  _kill(u, silent) {
    u.dead = true;
    if (!silent) { if (u.side === 0) this.stats.lost++; else this.stats.kills++; }
    this._ev({ type: 'die', kind: u.kind, side: u.side, x: u.x, y: u.y, silent });
  }

  _units(dt) {
    for (const u of this.units) {
      if (u.dead) continue;
      const d = UNITS[u.kind];
      u.age += dt;
      u.flash = Math.max(0, u.flash - dt);
      u.atk = Math.max(0, u.atk - dt);
      u.moving = false;
      if (u.spawn > 0) { u.spawn -= dt; continue; }
      u.cd -= dt;
      if (u.slow > 0) u.slow -= dt;
      if (d.building) {
        u.life -= dt;
        if (u.life <= 0) { this._kill(u, true); continue; }
        const t = this._nearest(u, d.range);
        if (t) this._attack(u, d, t);
        continue;
      }
      u.retarget -= dt;
      if (u.tgt && (u.tgt.dead || u.tgt.hp <= 0)) u.tgt = null;
      if (!u.tgt || u.retarget <= 0) { u.retarget = 0.25; u.tgt = this._nearest(u, d.aggro); }
      let t = u.tgt;
      if (!t) t = this.base[1 - u.side];
      if (t.hp <= 0) continue;
      const dx = t.x - u.x;
      const dy = t.y - u.y;
      const dist = Math.hypot(dx, dy) || 1e-6;
      const gap = dist - t.r - u.r;
      if (gap <= d.range) {
        u.ang = Math.atan2(dy, dx);
        this._attack(u, d, t);
      } else {
        const sp = d.speed * (u.slow > 0 ? 0.35 : 1) * dt;
        u.x += (dx / dist) * sp;
        u.y += (dy / dist) * sp;
        u.ang = Math.atan2(dy, dx);
        u.moving = true;
      }
    }
  }

  _attack(u, d, t) {
    if (u.cd > 0) return;
    u.cd = d.cd;
    u.atk = 0.22;
    u.ang = Math.atan2(t.y - u.y, t.x - u.x);
    if (d.proj) {
      this.projs.push({ side: u.side, x: u.x, y: u.y, t, dmg: d.dmg, spd: d.pspd, kind: d.proj, from: u.kind, age: 0 });
      this._ev({ type: 'shot', kind: u.kind, side: u.side, proj: d.proj, x: u.x, y: u.y, tx: t.x, ty: t.y });
    } else {
      this._damage(t, d.dmg);
      this._ev({ type: 'hit', kind: u.kind, side: u.side, x: u.x, y: u.y, tx: t.x, ty: t.y });
    }
  }

  _projs(dt) {
    for (const p of this.projs) {
      p.age += dt;
      const t = p.t;
      if (!t || t.dead || (!t.isBase && t.hp <= 0)) { p.gone = true; continue; }
      const dx = t.x - p.x;
      const dy = t.y - p.y;
      const dist = Math.hypot(dx, dy);
      const hitR = t.isBase ? BASE_R * 0.8 : t.r;
      const step = p.spd * dt;
      if (dist <= hitR + step) {
        this._damage(t, p.dmg);
        this._ev({ type: 'impact', proj: p.kind, side: p.side, x: t.x, y: t.y });
        p.gone = true;
      } else {
        p.x += (dx / dist) * step;
        p.y += (dy / dist) * step;
      }
    }
    this.projs = this.projs.filter((p) => !p.gone);
  }

  _bases(dt) {
    for (const b of this.base) {
      b.cd -= dt;
      b.flash = Math.max(0, b.flash - dt);
      b.atk = Math.max(0, b.atk - dt);
      if (b.hp <= 0 || b.cd > 0) continue;
      let best = null;
      let bd = 1e9;
      for (const v of this.units) {
        if (v.side === b.side || v.dead || v.spawn > 0) continue;
        const d = Math.hypot(v.x - b.x, v.y - b.y) - v.r - b.r;
        if (d < bd) { bd = d; best = v; }
      }
      if (best && bd <= BASE_RANGE) {
        b.cd = 1.4;
        b.atk = 0.3;
        this._damage(best, b.side === 0 ? 26 : this.dp.ufoDmg);
        this._ev({ type: 'beam', side: b.side, x: b.x, y: b.y, tx: best.x, ty: best.y });
      }
    }
  }

  _fields(dt) {
    for (const f of this.fields) {
      f.t += dt;
      if (f.t < f.delay) continue;
      const sp = SPELLS[f.kind];
      if (f.kind === 'plasma') {
        if (f.done) continue;
        f.done = true;
        for (const u of this.units) {
          if (u.side === f.side || u.dead) continue;
          const dist = Math.hypot(u.x - f.x, u.y - f.y);
          if (dist > f.r + u.r) continue;
          this._damage(u, sp.dmg);
          if (!u.dead && !UNITS[u.kind].building) {
            const nx = (u.x - f.x) / (dist || 1);
            const ny = (u.y - f.y) / (dist || 1);
            u.x += nx * sp.push; u.y += ny * sp.push;
            const [cx, cy] = clampToArena(u.x, u.y, u.r); u.x = cx; u.y = cy;
          }
        }
        const b = this.base[1 - f.side];
        if (b.hp > 0 && Math.hypot(b.x - f.x, b.y - f.y) < f.r + BASE_R) this._damage(b, sp.baseDmg);
        this._ev({ type: 'plasma', x: f.x, y: f.y, r: f.r, side: f.side });
      } else if (f.kind === 'blackhole') {
        f.acc += dt;
        for (const u of this.units) {
          if (u.side === f.side || u.dead) continue;
          const dx = f.x - u.x;
          const dy = f.y - u.y;
          const dist = Math.hypot(dx, dy);
          if (dist > f.r + u.r) continue;
          u.slow = Math.max(u.slow, 0.2);
          if (!UNITS[u.kind].building && dist > 0.05) {
            const m = Math.min(dist, sp.pull * dt);
            u.x += (dx / dist) * m; u.y += (dy / dist) * m;
          }
        }
        if (f.acc >= 0.5) {
          f.acc -= 0.5;
          for (const u of this.units) {
            if (u.side === f.side || u.dead) continue;
            if (Math.hypot(f.x - u.x, f.y - u.y) <= f.r + u.r) this._damage(u, sp.dps * 0.5);
          }
        }
      } else if (f.kind === 'repair') {
        f.acc += dt;
        if (f.acc >= 0.25) {
          f.acc -= 0.25;
          for (const u of this.units) {
            if (u.side !== f.side || u.dead || u.hp >= u.max) continue;
            if (Math.hypot(f.x - u.x, f.y - u.y) <= f.r + u.r) {
              u.hp = Math.min(u.max, u.hp + sp.hps * 0.25);
              this._ev({ type: 'heal', x: u.x, y: u.y, n: Math.round(sp.hps * 0.25) });
            }
          }
          const b = this.base[f.side];
          if (b.hp > 0 && b.hp < b.max && Math.hypot(b.x - f.x, b.y - f.y) < f.r + BASE_R) {
            b.hp = Math.min(b.max, b.hp + sp.baseHps * 0.25);
            this._ev({ type: 'heal', x: b.x, y: b.y, n: Math.round(sp.baseHps * 0.25), base: true });
          }
        }
      }
    }
    this.fields = this.fields.filter((f) => f.t < f.delay + f.dur);
  }

  _separate() {
    const us = this.units;
    for (let i = 0; i < us.length; i++) {
      const a = us[i];
      if (a.dead) continue;
      for (let j = i + 1; j < us.length; j++) {
        const b = us[j];
        if (b.dead) continue;
        const wa = UNITS[a.kind].building ? 0 : 1;
        const wb = UNITS[b.kind].building ? 0 : 1;
        if (wa + wb === 0) continue;
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        const min = a.r + b.r;
        if (d >= min) continue;
        if (d < 1e-4) { dx = ((a.id + b.id) % 2) ? 1 : -1; dy = 0; d = 1; }
        const push = Math.min(0.12, (min - d) * 0.5);
        const nx = dx / d;
        const ny = dy / d;
        const tot = wa + wb;
        a.x -= nx * push * 2 * (wa / tot); a.y -= ny * push * 2 * (wa / tot);
        b.x += nx * push * 2 * (wb / tot); b.y += ny * push * 2 * (wb / tot);
      }
    }
    for (const u of us) {
      if (u.dead) continue;
      for (const b of this.base) {
        const dx = u.x - b.x;
        const dy = u.y - b.y;
        const d = Math.hypot(dx, dy);
        const min = b.r + u.r * 0.6;
        if (d < min && d > 1e-4) { u.x = b.x + (dx / d) * min; u.y = b.y + (dy / d) * min; }
      }
      const [cx, cy] = clampToArena(u.x, u.y, u.r);
      u.x = cx; u.y = cy;
    }
  }

  _end(state) {
    this.state = state;
    const pf = this.base[0].hp / this.base[0].max;
    const stars = state === 'won' ? 1 + (pf >= 0.5 ? 1 : 0) + (pf >= 0.85 ? 1 : 0) : 0;
    this.over = { state, stars, baseHp: Math.max(0, Math.round(this.base[0].hp)), baseFrac: Math.max(0, pf), time: Math.min(MATCH_TIME, this.tick * DT) };
    this._ev({ type: state === 'won' ? 'win' : state === 'lost' ? 'lose' : 'draw', stars });
  }

  _checkEnd() {
    const p = this.base[0].hp;
    const e = this.base[1].hp;
    if (p <= 0 && e <= 0) this._end('draw');
    else if (e <= 0) this._end('won');
    else if (p <= 0) this._end('lost');
    else if (this.tick >= Math.round(MATCH_TIME / DT)) {
      const pf = p / this.base[0].max;
      const ef = e / this.base[1].max;
      if (pf > ef + 1e-9) this._end('won');
      else if (pf < ef - 1e-9) this._end('lost');
      else this._end('draw');
    }
  }
}

/** The Alien Overlord's brain: a few decisions per difficulty, no cheating beyond its energy rate. */
export class AI {
  constructor(b) { this.b = b; this.cool = 2.2; }

  update(dt) {
    const b = this.b;
    const p = b.dp;
    const r = b.aiRand;
    this.cool -= dt;
    if (this.cool > 0) return;
    this.cool = p.think * (0.75 + 0.5 * r());
    const e = b.aiEnergy;
    const foes = b.units.filter((u) => u.side === 0 && !u.dead && !UNITS[u.kind].building);
    const near = foes.filter((u) => u.y < HALF + 1.5);
    let order;
    let x;
    let y;
    if (near.length) {
      const lead = near.reduce((a, c) => (c.y < a.y ? c : a));
      const tank = near.some((u) => u.max >= 300);
      const many = near.length >= 3;
      if (p.smart) order = tank ? ['bug', 'spitter', 'slime'] : many ? ['brute', 'spitter', 'slime'] : ['slime', 'spitter', 'bug', 'brute'];
      else order = r() < 0.5 ? ['slime', 'bug'] : ['bug', 'spitter', 'slime'];
      x = lead.x + (r() - 0.5) * 1.6;
      y = clamp(lead.y - 1.6, 2.8, HALF - 0.6);
    } else {
      if (e < p.pushAt) return;
      order = p.smart ? ['brute', 'spitter', 'bug', 'slime'] : ['slime', 'bug', 'spitter', 'brute'];
      if (r() < 0.4) order.push(order.shift());
      x = 2.6 + r() * 4.8;
      y = 4.4 + r() * 1.6;
    }
    if (!p.smart && r() < p.miss) return;
    for (const id of order) {
      if (ALIEN_CARDS[id].cost <= e) { b.aiPlay(id, x, y); return; }
    }
  }
}

// ---- saved progress (stars per difficulty, wins, the tutorial flag, sound) ----------------------------------------------
export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const st = o.stars && typeof o.stars === 'object' ? o.stars : {};
  const n = (v, max) => (Number.isFinite(+v) ? Math.max(0, Math.min(max, Math.floor(+v))) : 0);
  return {
    stars: { easy: n(st.easy, 3), normal: n(st.normal, 3), hard: n(st.hard, 3), expert: n(st.expert, 3), legend: n(st.legend, 3) },
    wins: n(o.wins, 1e6),
    plays: n(o.plays, 1e6),
    muted: !!o.muted,
    tutorial: !!o.tutorial,
    diff: DIFFS[o.diff] ? o.diff : 'easy',
  };
}

export function recordResult(save, difficulty, over) {
  const s = normalizeSave(save);
  s.plays += 1;
  s.diff = DIFFS[difficulty] ? difficulty : s.diff;
  if (over && over.state === 'won') {
    s.wins += 1;
    s.stars[s.diff] = Math.max(s.stars[s.diff], over.stars);
  }
  return s;
}
