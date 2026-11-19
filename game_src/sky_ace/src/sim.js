// Sky Ace simulation: pure and deterministic (no DOM, no Date, no Math.random). World is 100 wide, `H` tall (units).
export const W = 100;
export const STAGES = 8;
export const TELE = 0.65; // every enemy shot is announced at least this long (seconds) before it leaves the gun
export const LOCK = 0.25; // the aim freezes this long before firing so the child can dodge

export function rngOf(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

export const TYPES = {
  scout: { r: 5, hp: 2, score: 100, coins: 1, fire: 'aim1' },
  black: { r: 5.5, hp: 4, score: 200, coins: 2, fire: 'spread3' },
  drone: { r: 5, hp: 3, score: 150, coins: 2, fire: 'aim1' },
  bomber: { r: 9, hp: 12, score: 500, coins: 5, fire: 'ring' },
};
export const POWERS = ['double', 'shield', 'magnet', 'bomb', 'x2', 'heal'];
export const UPGRADES = {
  dmg: { max: 5, cost: [40, 90, 160, 260, 400] },
  rate: { max: 5, cost: [40, 90, 160, 260, 400] },
  hp: { max: 5, cost: [30, 70, 130, 210, 320] },
  magnet: { max: 5, cost: [30, 60, 110, 180, 280] },
  bomb: { max: 5, cost: [50, 100, 170, 270, 420] },
};
export const SKINS = [
  { id: 'sunny', cost: 0 }, { id: 'berry', cost: 120 }, { id: 'mint', cost: 160 }, { id: 'sky', cost: 200 }, { id: 'gold', cost: 400 },
];
export const BOSS_KINDS = ['blimp', 'ufo', 'fortress', 'blimp', 'ufo', 'fortress', 'blimp', 'fortress'];

export function stageParams(n) {
  const k = clamp(n, 1, STAGES) - 1;
  return {
    n: k + 1,
    hpMul: 1 + 0.14 * k,
    bspeed: 34 + 3.2 * k,
    waves: 6 + k + 1,
    interval: 5.6 - 0.25 * k,
    fireEvery: Math.max(1.9, 3.6 - 0.22 * k),
    fireChance: Math.min(0.85, 0.3 + 0.08 * k),
    vy: 22 + 1.6 * k,
    bossHp: 80 + 36 * k,
    boss: BOSS_KINDS[k],
  };
}

/** Builds the list of enemy spawns of a stage (deterministic). */
export function genStage(n, seed = 1) {
  const sp = stageParams(n);
  const rnd = rngOf(sp.n * 977 + seed * 31);
  const spawns = [];
  const forms = ['line', 'v'];
  if (sp.n >= 2) forms.push('sine', 'hover');
  if (sp.n >= 3) forms.push('twins');
  if (sp.n >= 4) forms.push('bomber');
  const caps = ['double', 'x2', 'shield', 'magnet', 'bomb', 'heal'];
  let capI = 0;
  for (let k = 0; k < sp.waves; k++) {
    const t = 2 + k * sp.interval;
    let f = k === 0 ? 'line' : forms[Math.floor(rnd() * forms.length)];
    if (k === sp.waves - 1 && sp.n >= 3) f = 'hover';
    const type = (sp.n >= 3 && rnd() < 0.35 + 0.05 * sp.n) ? 'black' : 'scout';
    const cap = k % 2 === 1 ? (capI === 0 ? 'double' : caps[Math.floor(rnd() * caps.length)]) : null;
    if (cap) capI++;
    const mk = (o) => {
      const canFire = k > 0 && rnd() < sp.fireChance;
      spawns.push({ t, type: o.type || type, x0: o.x0, y0: o.y0, vy: o.vy || sp.vy, amp: o.amp || 0, freq: o.freq || 1.2, ph: o.ph || 0, mode: o.mode || 'down', stopY: o.stopY || 0.2, stay: o.stay || 6, fireEvery: canFire ? sp.fireEvery * (0.9 + rnd() * 0.3) : 0, fireStart: 1.4 + rnd() * 1.2, drop: null });
    };
    const first = spawns.length;
    if (f === 'line') { const c = 3 + (sp.n > 3 ? 1 : 0) + (sp.n > 6 ? 1 : 0); for (let i = 0; i < c; i++) mk({ x0: 50 + (i - (c - 1) / 2) * 18, y0: -8 }); }
    else if (f === 'v') { const c = 5; for (let i = 0; i < c; i++) mk({ x0: 50 + (i - 2) * 14, y0: -8 - Math.abs(i - 2) * 7 }); }
    else if (f === 'sine') { const c = 4 + (sp.n > 5 ? 1 : 0); const x0 = 25 + rnd() * 50; for (let i = 0; i < c; i++) mk({ x0, y0: -8 - i * 10, amp: 22, freq: 1.1, ph: 0 }); }
    else if (f === 'hover') { const c = 3 + (sp.n > 4 ? 1 : 0); for (let i = 0; i < c; i++) mk({ type: 'drone', x0: 50 + (i - (c - 1) / 2) * 24, y0: -8, mode: 'hover', stopY: 0.17 + (i % 2) * 0.07, amp: 10, freq: 0.9, ph: i, vy: 30 }); }
    else if (f === 'twins') { mk({ x0: 25, y0: -8, amp: 12, ph: 0 }); mk({ x0: 75, y0: -8, amp: 12, ph: Math.PI }); mk({ x0: 25, y0: -22, amp: 12, ph: 0 }); mk({ x0: 75, y0: -22, amp: 12, ph: Math.PI }); }
    else if (f === 'bomber') { mk({ type: 'bomber', x0: 50, y0: -12, vy: 13, amp: 20, freq: 0.6 }); mk({ type: 'scout', x0: 20, y0: -10 }); mk({ type: 'scout', x0: 80, y0: -10 }); }
    if (cap) spawns[first].drop = cap;
  }
  return { sp, spawns, lastT: 2 + (sp.waves - 1) * sp.interval };
}

export function bossGeom(kind) { return { blimp: { r: 17 }, ufo: { r: 16 }, fortress: { r: 19 } }[kind]; }

// ---------- save, upgrades, economy ----------
export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const num = (v, a, b, d) => { v = Number(v); return Number.isFinite(v) ? Math.min(b, Math.max(a, Math.floor(v))) : d; };
  const stars = {}; const best = {};
  let top = 0;
  for (let i = 1; i <= STAGES; i++) { stars[i] = num(o.stars && o.stars[i], 0, 3, 0); best[i] = num(o.best && o.best[i], 0, 99999999, 0); if (stars[i] > 0) top = i; }
  const up = {};
  for (const k of Object.keys(UPGRADES)) up[k] = num(o.up && o.up[k], 0, UPGRADES[k].max, 0);
  const owned = ['sunny'];
  if (Array.isArray(o.owned)) for (const id of o.owned) if (SKINS.some((x) => x.id === id) && !owned.includes(id)) owned.push(id);
  const skin = owned.includes(o.skin) ? o.skin : 'sunny';
  return { coins: num(o.coins, 0, 9999999, 0), stars, best, unlocked: Math.max(num(o.unlocked, 1, STAGES, 1), Math.min(STAGES, top + 1)), up, owned, skin, muted: !!o.muted, tutorial: !!o.tutorial, lang: o.lang === 'en' ? 'en' : o.lang === 'ar' ? 'ar' : null };
}
export function upgradeCost(save, key) { const u = UPGRADES[key]; const l = save.up[key]; return l >= u.max ? null : u.cost[l]; }
export function buyUpgrade(save, key) {
  const c = upgradeCost(save, key);
  if (c === null || save.coins < c) return null;
  return { ...save, coins: save.coins - c, up: { ...save.up, [key]: save.up[key] + 1 } };
}
export function buySkin(save, id) {
  const s = SKINS.find((x) => x.id === id);
  if (!s || save.owned.includes(id)) return null;
  if (save.coins < s.cost) return null;
  return { ...save, coins: save.coins - s.cost, owned: [...save.owned, id], skin: id };
}
export function starsFor(hpFrac) { return hpFrac >= 0.7 ? 3 : hpFrac >= 0.35 ? 2 : 1; }
export function finishStage(save, stage, r) {
  const s = normalizeSave(save);
  s.coins += r.coins | 0;
  if (r.won) {
    s.stars[stage] = Math.max(s.stars[stage], r.stars);
    s.best[stage] = Math.max(s.best[stage], r.score | 0);
    s.unlocked = Math.min(STAGES, Math.max(s.unlocked, stage + 1));
  }
  return s;
}
export function statsFor(save) {
  const u = save.up;
  return { dmg: 1 + 0.25 * u.dmg, fireInt: 0.22 - 0.018 * u.rate, maxHp: 100 + 12 * u.hp, magnet: 14 + 6 * u.magnet, bombCd: 14 - 1.2 * u.bomb };
}

// ---------- the game ----------
export class Game {
  constructor(o = {}) {
    this.stage = clamp(o.stage || 1, 1, STAGES);
    this.H = o.H || 200;
    this.easy = !!o.easy;
    this.save = normalizeSave(o.save);
    this.st = statsFor(this.save);
    const gs = genStage(this.stage, o.seed || 1);
    this.sp = gs.sp; this.spawns = gs.spawns; this.lastT = gs.lastT; this.si = 0;
    this.rnd = rngOf((o.seed || 1) * 7919 + this.stage);
    this.bs = this.sp.bspeed * (this.easy ? 0.8 : 1);
    this.time = 0; this.nid = 1; this.state = 'play'; this.ev = [];
    this.p = { x: 50, y: this.H - 30, vx: 0, hp: this.st.maxHp, maxHp: this.st.maxHp, inv: 1, fireT: 0.3, double: 0, shield: 0, shieldHits: 0, magnet: 0, x2: 0, bombCd: 0, bombInv: 0 };
    this.enemies = []; this.ebul = []; this.pbul = []; this.caps = []; this.coins = []; this.boss = null;
    this.score = 0; this.coinsGot = 0; this.kills = 0; this.bossAt = null; this.clearT = 0; this.loseT = 0; this.result = null; this.bombs = 0;
  }

  get mult() { return this.p.x2 > 0 ? 2 : 1; }
  setH(H) { this.H = H; this.p.y = clamp(this.p.y, H * 0.38, H - 12); }
  _e(type, o = {}) { this.ev.push({ type, ...o }); }
  addScore(v) { const m = this.mult; this.score += v * m; return v * m; }

  step(dt, input = {}) {
    this.ev = [];
    let left = dt;
    while (left > 1e-9) { const d = Math.min(left, 1 / 60); this._step(d, input); left -= d; input = { ...input, bomb: false }; }
    return this.ev;
  }

  _step(dt, input) {
    if (this.state === 'clear' || this.state === 'lose') return;
    this.time += dt;
    const p = this.p; const H = this.H;
    if (this.state === 'play' || this.state === 'clearing') {
      // move
      if (this.state === 'play' || this.state === 'clearing') {
        const tx = clamp(input.tx ?? p.x, 6, W - 6); const ty = clamp(input.ty ?? p.y, H * 0.38, H - 12);
        const dx = tx - p.x; const dy = ty - p.y; const d = Math.hypot(dx, dy);
        const m = Math.min(d, 140 * dt);
        const ox = p.x;
        if (d > 1e-6) { p.x += (dx / d) * m; p.y += (dy / d) * m; }
        p.vx = (p.x - ox) / dt;
      }
      p.inv = Math.max(0, p.inv - dt); p.bombInv = Math.max(0, p.bombInv - dt);
      for (const k of ['double', 'shield', 'magnet', 'x2']) p[k] = Math.max(0, p[k] - dt);
      if (p.shield <= 0) p.shieldHits = 0;
      p.bombCd = Math.max(0, p.bombCd - dt);
      if (input.bomb) this.useBomb();
      // auto fire
      p.fireT -= dt;
      if (p.fireT <= 0 && this.state === 'play') {
        p.fireT += this.st.fireInt; if (p.fireT < 0) p.fireT = this.st.fireInt;
        const d = this.st.dmg;
        this.pbul.push({ x: p.x - 2.2, y: p.y - 6, vx: 0, vy: -170, dmg: d }, { x: p.x + 2.2, y: p.y - 6, vx: 0, vy: -170, dmg: d });
        if (p.double > 0) this.pbul.push({ x: p.x - 4, y: p.y - 4, vx: -16, vy: -165, dmg: d }, { x: p.x + 4, y: p.y - 4, vx: 16, vy: -165, dmg: d });
        this._e('shot');
      }
    }
    // spawns
    if (this.state === 'play') {
      while (this.si < this.spawns.length && this.spawns[this.si].t <= this.time) this._spawn(this.spawns[this.si++]);
      if (!this.boss && !this.bossAt && this.si >= this.spawns.length && (this.enemies.length === 0 || this.time > this.lastT + 16)) this.bossAt = this.time + 1.5;
      if (!this.boss && this.bossAt && this.time >= this.bossAt) this._spawnBoss();
    }
    // enemies
    for (const e of this.enemies) this._moveEnemy(e, dt);
    for (const e of this.enemies) if (this.state === 'play') this._enemyFire(e, dt);
    if (this.boss) { this._moveBoss(this.boss, dt); if (this.state === 'play') this._bossAI(this.boss, dt); }
    this.enemies = this.enemies.filter((e) => e.hp > 0 && e.y < this.H + 14);
    // player bullets
    for (const b of this.pbul) { b.x += b.vx * dt; b.y += b.vy * dt; }
    for (const b of this.pbul) {
      if (b.dead) continue;
      for (const e of this.enemies) { if (e.hp <= 0) continue; const rr = e.r + 1.6; if ((b.x - e.x) ** 2 + (b.y - e.y) ** 2 < rr * rr && e.y > -4) { b.dead = true; this._hurt(e, b.dmg); break; } }
      const bo = this.boss;
      if (!b.dead && bo && bo.hp > 0 && bo.y > -8) { const rr = bo.r + 1.6; if ((b.x - bo.x) ** 2 + (b.y - bo.y) ** 2 < rr * rr) { b.dead = true; this._hurtBoss(bo, b.dmg); } }
    }
    this.pbul = this.pbul.filter((b) => !b.dead && b.y > -10 && b.x > -10 && b.x < W + 10);
    // enemy bullets
    for (const b of this.ebul) { b.x += b.vx * dt; b.y += b.vy * dt; b.age += dt; }
    if (this.state !== 'lose') for (const b of this.ebul) {
      if (b.dead || p.inv > 0 || p.bombInv > 0) continue;
      if ((b.x - p.x) ** 2 + (b.y - p.y) ** 2 < (b.r + 2.8) ** 2) { b.dead = true; this._damagePlayer(this.easy ? 6 : 10, 'bullet', b.age); }
    }
    this.ebul = this.ebul.filter((b) => !b.dead && b.y < H + 10 && b.y > -20 && b.x > -10 && b.x < W + 10);
    // ramming
    if (this.state === 'play' && p.inv <= 0 && p.bombInv <= 0) {
      for (const e of this.enemies) if (e.hp > 0 && e.y > 0 && (e.x - p.x) ** 2 + (e.y - p.y) ** 2 < (e.r + 4) ** 2) { this._damagePlayer(this.easy ? 9 : 15, 'ram', 99); e.hp = 0; this._kill(e, true); break; }
      const bo = this.boss;
      if (p.inv <= 0 && bo && bo.hp > 0 && (bo.x - p.x) ** 2 + (bo.y - p.y) ** 2 < (bo.r * 0.8 + 3) ** 2) this._damagePlayer(this.easy ? 9 : 15, 'ram', 99);
    }
    // capsules
    for (const c of this.caps) { c.age += dt; c.y += 18 * dt; c.x += Math.sin(c.age * 2) * 6 * dt; }
    for (const c of this.caps) if (!c.dead && (c.x - p.x) ** 2 + (c.y - p.y) ** 2 < 8 * 8) { c.dead = true; this._power(c.kind); }
    this.caps = this.caps.filter((c) => !c.dead && c.y < H + 10);
    // coins
    const mag = this.state === 'clearing' ? 999 : p.magnet > 0 ? 55 : this.st.magnet;
    for (const c of this.coins) {
      c.age += dt;
      const d = Math.hypot(p.x - c.x, p.y - c.y);
      if (d < mag) { const sp = 90 + (mag > 100 ? 100 : 0); c.x += ((p.x - c.x) / (d || 1)) * sp * dt; c.y += ((p.y - c.y) / (d || 1)) * sp * dt; } else c.y += 22 * dt;
      if (d < 6.5) { c.dead = true; this.coinsGot += c.v; const s = this.addScore(10); this._e('coin', { x: c.x, y: c.y, score: s }); }
    }
    this.coins = this.coins.filter((c) => !c.dead && c.y < H + 10);
    // end states
    if (this.state === 'clearing') { this.clearT -= dt; if (this.clearT <= 0) this._finish(true); }
    if (this.state === 'losing') { this.loseT -= dt; if (this.loseT <= 0) this._finish(false); }
  }

  _finish(won) {
    const frac = this.p.hp / this.p.maxHp;
    this.state = won ? 'clear' : 'lose';
    this.result = { won, stars: won ? starsFor(frac) : 0, score: this.score, coins: this.coinsGot, hpFrac: Math.max(0, frac), kills: this.kills };
    this._e(won ? 'stageClear' : 'lose', this.result);
  }

  useBomb() {
    const p = this.p;
    if (p.bombCd > 0 || (this.state !== 'play')) return false;
    p.bombCd = this.st.bombCd; p.bombInv = 0.6; this.bombs++;
    const n = this.ebul.length;
    this.ebul = [];
    for (const e of this.enemies) if (e.y > -6) this._hurt(e, 12);
    if (this.boss && this.boss.hp > 0 && this.boss.y > -8) { this.boss.charge = 0; this.boss.pending = null; this._hurtBoss(this.boss, 30); }
    this.addScore(5 * n);
    this._e('bomb', { x: p.x, y: p.y, cleared: n });
    return true;
  }

  _power(kind) {
    const p = this.p;
    if (kind === 'double') p.double = 10;
    else if (kind === 'shield') { p.shield = 9; p.shieldHits = 3; }
    else if (kind === 'magnet') p.magnet = 10;
    else if (kind === 'x2') p.x2 = 10;
    else if (kind === 'bomb') p.bombCd = 0;
    else if (kind === 'heal') p.hp = Math.min(p.maxHp, p.hp + 30);
    this._e('power', { kind, x: p.x, y: p.y });
  }

  _damagePlayer(dmg, src, age) {
    const p = this.p;
    if (p.shield > 0 && p.shieldHits > 0) { p.shieldHits--; if (p.shieldHits <= 0) p.shield = 0; p.inv = 0.5; this._e('shield', { x: p.x, y: p.y }); return; }
    p.hp -= dmg; p.inv = 1.0;
    this._e('hit', { src, age, dmg, x: p.x, y: p.y });
    if (p.hp <= 0) { p.hp = 0; this.state = 'losing'; this.loseT = 1.6; this.ebul = []; this._e('down', { x: p.x, y: p.y }); }
  }

  _spawn(s) {
    const T = TYPES[s.type];
    const e = { id: this.nid++, type: s.type, x: s.x0, y: s.y0, vx: 0, vy: 0, r: T.r, hp: T.hp * this.sp.hpMul, maxHp: T.hp * this.sp.hpMul, age: 0, s, charge: 0, lock: null, next: s.fireEvery ? s.fireStart : 1e9, warnAt: 0, flash: 0, drop: s.drop };
    this.enemies.push(e);
  }

  _posOf(e, age) {
    const s = e.s;
    const x = s.x0 + s.amp * Math.sin(s.freq * age + s.ph);
    let y;
    if (s.mode === 'hover') {
      const stop = s.stopY * this.H; const tin = Math.max(0, (stop - s.y0) / s.vy);
      if (age < tin) y = s.y0 + s.vy * age; else if (age < tin + s.stay) y = stop + 2 * Math.sin(age * 2); else y = stop + 30 * (age - tin - s.stay);
    } else y = s.y0 + s.vy * age;
    return { x: clamp(x, 4, W - 4), y };
  }
  _moveEnemy(e, dt) { const ox = e.x; const oy = e.y; e.age += dt; const q = this._posOf(e, e.age); e.x = q.x; e.y = q.y; e.vx = (e.x - ox) / dt; e.vy = (e.y - oy) / dt; e.flash = Math.max(0, e.flash - dt); }

  _hurt(e, d) { e.hp -= d; e.flash = 0.1; if (e.hp <= 0) this._kill(e, false); }
  _kill(e, ram) {
    const T = TYPES[e.type]; this.kills++;
    const s = this.addScore(T.score);
    this._e('kill', { x: e.x, y: e.y, kind: e.type, score: s, chute: this.rnd() < 0.5, ram });
    for (let i = 0; i < T.coins; i++) this.coins.push({ x: e.x + (this.rnd() - 0.5) * 8, y: e.y + (this.rnd() - 0.5) * 6, v: 2, age: 0 });
    if (e.drop) this.caps.push({ x: e.x, y: e.y, kind: e.drop, age: 0 });
    e.hp = 0; e.charge = 0;
  }

  _bullet(x, y, ang, speed, r = 2.2) { if (this.ebul.length > 160) return; this.ebul.push({ x, y, vx: Math.sin(ang) * speed, vy: Math.cos(ang) * speed, r, age: 0 }); }

  _enemyFire(e, dt) {
    if (!e.s.fireEvery || e.hp <= 0) return;
    const p = this.p; const T = TYPES[e.type];
    if (e.charge > 0) {
      e.charge -= dt;
      if (e.charge <= LOCK && !e.lock) e.lock = { x: p.x, y: p.y };
      if (e.charge <= 0) {
        const lead = this.time - e.warnAt;
        const L = e.lock || { x: p.x, y: p.y };
        const base = Math.atan2(L.x - e.x, L.y - e.y);
        const sp = this.bs * (e.type === 'drone' ? 0.85 : 1);
        if (T.fire === 'aim1') this._bullet(e.x, e.y + e.r, base, sp);
        else if (T.fire === 'spread3') for (const a of [-0.22, 0, 0.22]) this._bullet(e.x, e.y + e.r, base + a, sp * 0.95);
        else for (let i = 0; i < 7; i++) this._bullet(e.x, e.y + e.r, -1.2 + i * 0.4, sp * 0.8, 2.6);
        this._e('fire', { id: e.id, lead });
        e.lock = null; e.next = e.age + e.s.fireEvery * (this.easy ? 1.5 : 1);
      }
      return;
    }
    if (e.age >= e.next && e.y > 4 && e.y < p.y - 28 && this.state === 'play') { e.charge = TELE + 0.02; e.warnAt = this.time; e.lock = null; this._e('warn', { id: e.id, x: e.x, y: e.y }); }
  }

  // ----- boss -----
  _spawnBoss() {
    const k = this.sp.boss; const g = bossGeom(k);
    const hp = this.sp.bossHp * (this.easy ? 0.8 : 1);
    this.boss = { kind: k, x: 50, y: -30, vx: 0, r: g.r, hp, maxHp: hp, phase: 0, age: 0, cd: 3, charge: 0, pending: null, lock: null, inv: 0, flash: 0, gap: 50, warnAt: 0, entered: false };
    this._e('boss', { kind: k });
  }
  _moveBoss(b, dt) {
    b.age += dt; b.flash = Math.max(0, b.flash - dt); b.inv = Math.max(0, b.inv - dt);
    const ty = this.H * 0.25; const ox = b.x;
    if (b.y < ty) b.y += 14 * dt; else b.entered = true;
    if (b.hp > 0) b.x = 50 + 28 * Math.sin(b.age * (0.45 + 0.04 * this.stage));
    b.vx = (b.x - ox) / dt;
  }
  _hurtBoss(b, d) {
    if (b.inv > 0 || b.hp <= 0 || !b.entered) return;
    b.hp -= d; b.flash = 0.08; this._e('bossHit', { x: b.x, y: b.y });
    if (b.hp <= 0) { b.hp = 0; this._bossDown(b); return; }
    const frac = b.hp / b.maxHp; const ph = frac < 0.33 ? 2 : frac < 0.66 ? 1 : 0;
    if (ph > b.phase) { b.phase = ph; b.inv = 1.0; b.charge = 0; b.pending = null; b.cd = 2; this.ebul = []; this._e('bossPhase', { phase: ph }); }
  }
  _bossDown(b) {
    this.ebul = []; this.enemies.forEach((e) => { if (e.hp > 0) e.hp = 0; });
    this.addScore(5000); this.kills++;
    for (let i = 0; i < 25; i++) this.coins.push({ x: b.x + (this.rnd() - 0.5) * 30, y: b.y + (this.rnd() - 0.5) * 16, v: 2, age: 0 });
    this._e('bossDown', { x: b.x, y: b.y });
    this.state = 'clearing'; this.clearT = 2.8; this.p.inv = 99;
  }
  _bossAI(b, dt) {
    if (!b.entered || b.hp <= 0 || b.inv > 0.5) return;
    const p = this.p;
    if (b.charge > 0) {
      b.charge -= dt;
      if (b.charge <= LOCK && !b.lock) b.lock = { x: p.x, y: p.y };
      if (b.charge <= 0) this._bossFire(b);
      return;
    }
    b.cd -= dt;
    if (b.cd > 0) return;
    const lists = [['aim3'], ['aim3', 'ring', 'summon'], ['aim3', 'curtain', 'ring']];
    const a = lists[b.phase][Math.floor(this.rnd() * lists[b.phase].length)];
    b.pending = a; b.charge = (a === 'curtain' ? 1.1 : TELE) + 0.02; b.warnAt = this.time; b.lock = null;
    b.gap = 20 + this.rnd() * 60;
    this._e('warn', { id: 0, x: b.x, y: b.y, boss: a, gap: b.gap });
  }
  _bossFire(b) {
    const a = b.pending; const lead = this.time - b.warnAt; const sp = this.bs * 0.9;
    const L = b.lock || this.p;
    const base = Math.atan2(L.x - b.x, L.y - b.y);
    const y0 = b.y + b.r * 0.6;
    if (a === 'aim3') for (const d of [-0.25, 0, 0.25]) this._bullet(b.x, y0, base + d, sp, 2.6);
    else if (a === 'ring') for (let i = 0; i < 12; i++) this._bullet(b.x, y0, -1.45 + i * (2.9 / 11), sp * 0.8, 2.6);
    else if (a === 'curtain') for (let x = 4; x <= 96; x += 8) if (Math.abs(x - b.gap) > 15) this._bullet(x, y0, 0, sp * 0.75, 2.6);
    else if (a === 'summon') for (let i = 0; i < 2; i++) this.spawns.splice(this.si, 0, { t: this.time, type: 'drone', x0: b.x + (i ? 22 : -22), y0: b.y, vy: 30, amp: 8, freq: 1, ph: i, mode: 'hover', stopY: 0.32, stay: 5, fireEvery: this.sp.fireEvery * 1.3, fireStart: 2, drop: null });
    this._e('fire', { id: 0, lead, boss: a });
    b.pending = null; b.lock = null;
    b.cd = Math.max(1.2, [2.6, 2.2, 1.8][b.phase] - this.stage * 0.08) * (this.easy ? 1.5 : 1);
  }
}

// ---------- auto pilot (tests and the menu demo) ----------
export function autoInput(g) {
  const p = g.p; const H = g.H;
  if (g.state !== 'play' && g.state !== 'clearing') return { tx: p.x, ty: p.y };
  const ys = [H - 24, H - 44, H - 64];
  const bl = g.ebul.filter((b) => b.y > p.y - 100 && b.y < p.y + 20);
  const bodies = g.enemies.filter((e) => e.hp > 0 && e.y > p.y - 100).map((e) => ({ x: e.x, y: e.y, vx: e.vx, vy: e.vy, r: e.r }));
  if (g.boss && g.boss.hp > 0) bodies.push({ x: g.boss.x, y: g.boss.y, vx: g.boss.vx, vy: 0, r: g.boss.r * 0.8 });
  let fx = 50; let fy = -1e9;
  for (const e of g.enemies) if (e.hp > 0 && e.y > 0 && e.y < p.y - 5 && e.y > fy) { fy = e.y; fx = e.x; }
  if (g.boss && g.boss.hp > 0) fx = g.boss.x;
  const cap = g.caps.find((c) => c.y > H * 0.3 && c.y < H - 10);
  if (cap) fx = cap.x;
  if (g.state === 'play' && g.p.bombCd <= 0 && ((bl.length > 14) || (g.boss && g.boss.entered && g.p.hp < g.p.maxHp * 0.6))) g.useBomb();
  let best = null;
  const T = [0.08, 0.18, 0.28, 0.4, 0.52, 0.66, 0.8];
  for (let cx = 6; cx <= 94; cx += 3) for (const cy of ys) {
    const dist = Math.hypot(cx - p.x, cy - p.y); let cost = 0;
    for (const t of T) {
      const f = dist > 0 ? Math.min(1, (140 * t) / dist) : 1;
      const px = p.x + (cx - p.x) * f; const py = p.y + (cy - p.y) * f;
      for (const b of bl) { const bx = b.x + b.vx * t; const by = b.y + b.vy * t; const d2 = (px - bx) ** 2 + (py - by) ** 2; if (d2 < 100) cost += 400; else if (d2 < 169) cost += 40; }
      for (const e of bodies) { const ex = e.x + e.vx * t; const ey = e.y + e.vy * t; const rr = e.r + 7; if ((px - ex) ** 2 + (py - ey) ** 2 < rr * rr) cost += 300; }
    }
    cost += Math.abs(cx - fx) * 0.35 + Math.abs(cy - (H - 30)) * 0.1 + dist * 0.05;
    if (!best || cost < best.cost) best = { cx, cy, cost };
  }
  return { tx: best.cx, ty: best.cy };
}
