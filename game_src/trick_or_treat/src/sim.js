// «حلاوة ولا مقلب» - Trick or Treat Crowd: pure deterministic side-scrolling logic (no DOM, no Date, no Math.random).
// A leader runs down a street at a fixed speed. One button: jump (hold = higher). Ring doorbells of friendly porches by
// jumping to the bell (kids join), do NOT ring grumpy ones (kids get scared off), hop over leaf pits / sprinklers / a dog /
// rolling jack-o'-lanterns, push through hedges (need N kids), then beat the giant inflatable spider (telegraphed attacks).
// Nothing permanent is ever lost: a hit only drops kids who can be re-collected; the boss cannot end the run badly.
export const DT = 1 / 60;
export const HERO = { w: 0.5, h: 1.3, cy: 0.65 };
export const JUMP = { v0: 11.2, g: 38, holdG: 0.4, cutG: 1.8, holdMax: 0.27, coyote: 0.09, buffer: 0.12 };
export const BELL = { y: 3.0, r: 1.2 };
export const START_KIDS = 2;
export const HIGH_BONUS = 2;
export const MAX_KIDS = 40;
export const TRIG = 12.5;
export const ARENA = 6; // hero stops this far before the end x
export const NUM_LEVELS = 7;

export const COSTUMES = [
  { id: 'ghost', price: 0 }, { id: 'pumpkin', price: 25 }, { id: 'witch', price: 40 }, { id: 'robot', price: 60 },
  { id: 'cat', price: 80 }, { id: 'mummy', price: 100 }, { id: 'dino', price: 130 }, { id: 'bat', price: 160 },
];

export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export const LEVELS = [
  { len: 300, speed: 6.0, boss: 4, hedges: [], gap: [6, 9], combo: 0, mix: { friendly: 6, grumpy: 1, pit: 3, sprinkler: 2, rest: 1 } },
  { len: 380, speed: 6.3, boss: 5, hedges: [0.62], gap: [6, 9], combo: 0.15, mix: { friendly: 6, grumpy: 2, pit: 3, sprinkler: 3, dog: 2, rest: 1 } },
  { len: 450, speed: 6.6, boss: 6, hedges: [0.42, 0.75], gap: [5.5, 8.5], combo: 0.25, mix: { friendly: 6, grumpy: 3, pit: 3, sprinkler: 3, dog: 2, jack: 2, rest: 1 } },
  { len: 520, speed: 6.9, boss: 7, hedges: [0.35, 0.62, 0.85], gap: [5.5, 8], combo: 0.3, mix: { friendly: 6, grumpy: 3, pit: 3, sprinkler: 3, dog: 2, jack: 3, rest: 1 } },
  { len: 600, speed: 7.2, boss: 8, hedges: [0.3, 0.55, 0.8], gap: [5, 8], combo: 0.35, mix: { friendly: 6, grumpy: 4, pit: 3, sprinkler: 3, dog: 3, jack: 3, rest: 1 } },
  { len: 680, speed: 7.5, boss: 9, hedges: [0.25, 0.5, 0.72, 0.88], gap: [5, 7.5], combo: 0.4, mix: { friendly: 6, grumpy: 4, pit: 3, sprinkler: 4, dog: 3, jack: 3, rest: 1 } },
  { len: 760, speed: 7.8, boss: 10, hedges: [0.2, 0.42, 0.62, 0.8, 0.9], gap: [5, 7], combo: 0.45, mix: { friendly: 6, grumpy: 5, pit: 3, sprinkler: 4, dog: 3, jack: 4, rest: 1 } },
];

export const easyFor = (age) => age > 0 && age <= 3;

// ---- hazards ------------------------------------------------------------------------------------------------------
export function sprinklerPhase(hz, t) {
  const p = (t + hz.phase) % 2.6;
  return p < 1.3 ? 'off' : p < 1.8 ? 'warn' : 'on';
}
export function hazardBox(hz, t) {
  switch (hz.type) {
    case 'pit': return { x0: hz.x, x1: hz.x + hz.w, top: 0.45 };
    case 'sprinkler': return sprinklerPhase(hz, t) === 'on' ? { x0: hz.x - 1.0, x1: hz.x + 1.0, top: 1.6 } : { x0: hz.x - 0.25, x1: hz.x + 0.25, top: 0.7 };
    case 'dog': return { x0: hz.x, x1: hz.x + hz.w, top: 0.7 };
    default: return { x0: hz.x, x1: hz.x + hz.w, top: 0.7 }; // jack
  }
}

// ---- level generator ----------------------------------------------------------------------------------------------
export function buildLevel(n, easy = false) {
  n = Math.max(1, Math.min(NUM_LEVELS, n | 0));
  const cfg = LEVELS[n - 1];
  const r = rng(n * 7919 + 13);
  const L = { n, len: cfg.len, speed: cfg.speed * (easy ? 0.88 : 1), boss: cfg.boss, theme: n - 1, porches: [], hazards: [], hedges: [], candies: [], floats: [], potential: START_KIDS, par: { two: 0, three: 0 } };
  let id = 0;
  const ri = (a, b) => a + Math.floor(r() * (b - a + 1));
  const rf = (a, b) => a + r() * (b - a);
  const candy = (x, y) => L.candies.push({ x: +x.toFixed(2), y: +y.toFixed(2), got: false });
  const arc = (x0, x1, peak, k) => { for (let i = 0; i < k; i++) { const s = k === 1 ? 0.5 : i / (k - 1); candy(x0 + (x1 - x0) * s, 0.5 + peak * Math.sin(Math.PI * s)); } };
  const line = (x0, x1, y, k) => { for (let i = 0; i < k; i++) candy(x0 + ((x1 - x0) * i) / Math.max(1, k - 1), y); };
  const hz = (o) => { L.hazards.push({ id: id++, hit: false, passed: false, on: false, gone: 0, v: 0, phase: 0, loss: 1, ...o }); };
  const entries = Object.entries(cfg.mix);
  const total = entries.reduce((a, [, w]) => a + w, 0);
  const pick = () => { let v = r() * total; for (const [k, w] of entries) { v -= w; if (v <= 0) return k; } return 'rest'; };
  const hedgeAt = cfg.hedges.map((f) => Math.round(cfg.len * f));
  const endX = cfg.len - 26;
  let x = 22;
  let last = '';
  let style = 0;
  while (x < endX) {
    if (hedgeAt.length && x + 6 >= hedgeAt[0]) {
      const hx = Math.max(x + 6, hedgeAt[0]);
      const need = Math.max(3, Math.min(22, Math.round(L.potential * 0.5)));
      L.hedges.push({ id: id++, x: hx, need, push: 0, broken: false });
      line(hx - 6, hx - 2, 0.5, 4);
      hedgeAt.shift();
      x = hx + 5 + rf(cfg.gap[0], cfg.gap[1]);
      last = 'hedge';
      continue;
    }
    let kind = pick();
    if (kind === last && kind !== 'friendly' && kind !== 'rest') kind = 'friendly';
    if (kind === 'friendly' && last === 'friendly' && r() < 0.4) kind = 'rest';
    const px = x + 5;
    if (kind === 'friendly') {
      const kids = ri(3, 5);
      let bx = px;
      if (r() < cfg.combo) { hz({ type: 'pit', x: px - 6.5, w: 1.2 }); arc(px - 7.2, px - 5.3, 0.9, 3); }
      L.porches.push({ id: id++, x: bx, kind: 'friendly', kids, style: style++ % 4, rung: false });
      L.potential += kids;
      arc(bx - 3, bx + 2.5, 2.1, 6);
      x = bx + 4 + rf(cfg.gap[0], cfg.gap[1]);
    } else if (kind === 'grumpy') {
      L.porches.push({ id: id++, x: px, kind: 'grumpy', kids: 0, style: style++ % 4, rung: false });
      arc(px - 1.8, px + 1.8, 1.9, 5); // candy over the grumpy door: jump it
      x = px + 4 + rf(cfg.gap[0], cfg.gap[1]);
    } else if (kind === 'pit') {
      const big = n >= 2 && r() < 0.5;
      const w = big ? 2.6 : 1.2;
      hz({ type: 'pit', x: px, w });
      arc(px - 0.6, px + w + 0.6, big ? 1.7 : 1.0, big ? 5 : 3);
      x = px + w + 3 + rf(cfg.gap[0], cfg.gap[1]);
    } else if (kind === 'sprinkler') {
      hz({ type: 'sprinkler', x: px, w: 0.5, phase: rf(0, 2.6) });
      arc(px - 1.4, px + 1.4, 1.7, 5);
      x = px + 3.5 + rf(cfg.gap[0], cfg.gap[1]);
    } else if (kind === 'dog') {
      const x0 = x + 14;
      hz({ type: 'dog', x: x0, w: 1.0, v: 3 + 0.2 * n, loss: 2 });
      line(x0 - 4, x0 - 1, 0.5, 4);
      x = x0 + 1 + rf(cfg.gap[0], cfg.gap[1]);
    } else if (kind === 'jack') {
      const x0 = x + 14;
      hz({ type: 'jack', x: x0, w: 1.1, v: 4 + 0.2 * n, loss: 2 });
      line(x0 - 4, x0 - 1, 0.5, 4);
      x = x0 + 1 + rf(cfg.gap[0], cfg.gap[1]);
    } else {
      line(px - 2, px + 4, 0.5, 6);
      if (r() < 0.55) { const fk = ri(4, 6); L.floats.push({ id: id++, x: +(px + 1.5).toFixed(2), y: 3.2, kids: fk, got: false }); arc(px - 1.2, px + 1.5, 2.6, 4); }
      x = px + 6 + rf(cfg.gap[0] * 0.5, cfg.gap[1] * 0.5);
    }
    last = kind;
  }
  L.par.two = Math.ceil(L.potential * 0.45);
  L.par.three = Math.ceil(L.potential * 0.75);
  return L;
}

// ---- crowd layout (pure helpers, also used by the renderer) -------------------------------------------------------
/** Where kid i of n stands relative to the leader: dx behind (units), lane 0..2 (0 = front, 2 = far back). */
export function kidSlot(i, n) {
  const col = Math.floor(i / 3);
  const lane = i % 3;
  const cols = Math.max(1, Math.ceil(n / 3));
  const step = Math.min(0.75, 3.6 / Math.max(1, cols - 1));
  return { dx: 1.0 + col * step + (lane === 1 ? 0.3 : lane === 2 ? 0.15 : 0), lane };
}

// ---- save -----------------------------------------------------------------------------------------------------------
export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const int = (v, a, b, d) => { v = Math.floor(Number(v)); return Number.isFinite(v) ? Math.max(a, Math.min(b, v)) : d; };
  const ids = COSTUMES.map((c) => c.id);
  const owned = Array.isArray(o.owned) ? o.owned.filter((x, i, a) => ids.includes(x) && a.indexOf(x) === i) : [];
  if (!owned.includes('ghost')) owned.unshift('ghost');
  const stars = {};
  const raw = o.stars && typeof o.stars === 'object' ? o.stars : {};
  for (let i = 1; i <= NUM_LEVELS; i++) { const v = int(raw[i], 0, 3, 0); if (v) stars[i] = v; }
  return {
    unlocked: int(o.unlocked, 1, NUM_LEVELS, 1), stars, candy: int(o.candy, 0, 1e7, 0), owned,
    equipped: owned.includes(o.equipped) ? o.equipped : 'ghost', muted: !!o.muted, plays: int(o.plays, 0, 1e7, 0),
  };
}
export function applyResult(save, level, res) {
  const s = normalizeSave(save);
  s.unlocked = Math.max(s.unlocked, Math.min(NUM_LEVELS, level + 1));
  s.stars[level] = Math.max(s.stars[level] || 0, res.stars);
  s.candy += res.earned;
  s.plays += 1;
  return s;
}
export function buyCostume(save, id) {
  const s = normalizeSave(save);
  const c = COSTUMES.find((x) => x.id === id);
  if (!c || s.owned.includes(id) || s.candy < c.price) return null;
  s.candy -= c.price; s.owned.push(id); s.equipped = id;
  return s;
}

// ---- simulation -----------------------------------------------------------------------------------------------------
const TRAIL = 480;
export class Sim {
  constructor({ level = 1, easy = false, seed = 1, data = null, startKids = START_KIDS } = {}) {
    this.easy = !!easy;
    this.L = structuredClone(data || buildLevel(level, easy));
    this.level = this.L.n;
    this.rs = (seed * 2654435761 + this.level * 97) >>> 0 || 1;
    this.t = 0; this.tick = 0; this.acc = 0; this.state = 'run';
    this.hero = { x: 0, y: 0, vy: 0, ground: true, hold: 0, jumping: false, coyote: 0, buf: 0, prev: false, invuln: 0, stumble: 0 };
    this.kids = [];
    this.serial = 0;
    for (let i = 0; i < startKids; i++) this.kids.push({ c: this.serial++, born: -9, from: 0 });
    this.candy = 0;
    this.strays = [];
    this.returning = [];
    this.blocked = null;
    this.pushT = 0;
    this.boss = null;
    this.stats = { rings: 0, scares: 0, hits: 0, recollected: 0, hedges: 0, dodged: 0, floats: 0, perfect: 0 };
    this.trail = new Float32Array(TRAIL);
    this.result = null;
  }

  get speed() { return this.L.speed; }
  get arenaX() { return this.L.len - ARENA; }
  progress() { return Math.min(1, this.hero.x / this.arenaX); }
  rand() { let s = this.rs; s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; this.rs = s; return s / 4294967296; }
  clone() { const c = Object.create(Sim.prototype); Object.assign(c, structuredClone({ ...this })); return c; }

  /** y of a kid following the leader's path with a delay (units behind / speed). */
  kidY(i, n = this.kids.length) {
    const k = Math.round((kidSlot(i, n).dx / this.speed) / DT);
    if (k > this.tick) return 0;
    return this.trail[(this.tick - k) % TRAIL];
  }

  step(dt, input = {}) {
    const ev = [];
    this.acc += Math.min(dt, 0.1);
    while (this.acc >= DT - 1e-9) { this.acc -= DT; if (this.state !== 'won') this._tick(!!input.held, ev); else this.t += DT; }
    return ev;
  }

  _lose(n, ev, mode, kind) {
    const lost = Math.min(this.kids.length, this.easy ? Math.min(n, 1) : n);
    const gone = this.kids.splice(this.kids.length - lost, lost);
    return { lost, gone };
  }

  _tick(held, ev) {
    const h = this.hero;
    const L = this.L;
    this.t += DT; this.tick++;
    // ---- input -> jump
    if (held && !h.prev) h.buf = JUMP.buffer;
    h.prev = held;
    h.buf = Math.max(0, h.buf - DT);
    h.coyote = h.ground ? JUMP.coyote : Math.max(0, h.coyote - DT);
    if (h.buf > 0 && (h.ground || h.coyote > 0)) { h.vy = JUMP.v0; h.ground = false; h.jumping = true; h.hold = 0; h.coyote = 0; h.buf = 0; ev.push({ type: 'jump' }); }
    // ---- vertical
    let g = JUMP.g;
    if (h.vy > 0 && h.jumping) { if (!held) g *= JUMP.cutG; else if (h.hold < JUMP.holdMax) { g *= JUMP.holdG; h.hold += DT; } }
    h.vy -= g * DT;
    h.y += h.vy * DT;
    if (h.y <= 0 && h.vy <= 0) { if (!h.ground && h.vy < -3) ev.push({ type: 'land' }); h.y = 0; h.vy = 0; h.ground = true; h.jumping = false; }
    h.invuln = Math.max(0, h.invuln - DT);
    h.stumble = Math.max(0, h.stumble - DT);
    // ---- horizontal
    if (this.state === 'run') {
      let sp = this.speed * (h.stumble > 0 ? 0.55 : 1);
      this.blocked = null;
      for (const hd of L.hedges) {
        if (hd.broken) continue;
        if (h.x + HERO.w / 2 + sp * DT >= hd.x) {
          if (this.kids.length >= hd.need) { hd.broken = true; this.stats.hedges++; ev.push({ type: 'hedgeBreak', x: hd.x, need: hd.need }); }
          else {
            this.blocked = hd; sp = 0; h.x = Math.min(h.x, hd.x - HERO.w / 2 - 0.1);
            hd.push += DT * Math.max(0.17, (this.kids.length / hd.need) * 0.45);
            this.pushT -= DT;
            if (this.pushT <= 0) { this.pushT = 0.5; ev.push({ type: 'hedgePush', x: hd.x, need: hd.need }); }
            if (hd.push >= 1) { hd.broken = true; this.stats.hedges++; ev.push({ type: 'hedgeBreak', x: hd.x, need: hd.need, slow: true }); }
          }
          break;
        }
      }
      h.x += sp * DT;
      if (h.x >= this.arenaX) { h.x = this.arenaX; this.state = 'boss'; this._initBoss(ev); }
    }
    this.trail[this.tick % TRAIL] = h.y;
    // ---- moving hazards
    for (const hz of L.hazards) {
      if ((hz.type === 'dog' || hz.type === 'jack') && !hz.passed) {
        if (!hz.on && hz.x - h.x < TRIG) { hz.on = true; ev.push({ type: 'wake', kind: hz.type, x: hz.x }); }
        if (hz.on) hz.x -= hz.v * DT;
      }
      if (!hz.passed && hz.x + hz.w < h.x - 0.8) { hz.passed = true; if (hz.type === 'dog' || hz.type === 'jack') hz.removed = true; if (!hz.hit) this.stats.dodged++; }
    }
    if (L.hazards.some((z) => z.removed)) L.hazards = L.hazards.filter((z) => !z.removed);
    // ---- hazard hits
    if (this.state === 'run' && h.invuln <= 0) {
      for (const hz of L.hazards) {
        if (hz.hit || Math.abs(hz.x - h.x) > 6) continue;
        const b = hazardBox(hz, this.t);
        if (h.x + HERO.w / 2 > b.x0 && h.x - HERO.w / 2 < b.x1 && h.y < b.top) { this._hit(hz, ev); break; }
      }
    }
    // ---- porches. Video rule: run past a friendly door on the ground and its bell rings (kids join); jumping through the
    // warm bell high up rings it for a bonus. A grumpy door must be jumped over: running past it on the ground scares kids off.
    for (const p of L.porches) {
      if (p.rung || Math.abs(p.x - h.x) > 2.5) continue;
      const dx = p.x - h.x; const dy = BELL.y - (h.y + HERO.cy);
      if (p.kind === 'friendly') {
        const high = dx * dx + dy * dy < BELL.r * BELL.r;
        if (high || (Math.abs(dx) < 0.6 && h.y < 1.4)) {
          p.rung = true; this.stats.rings++;
          const add = Math.min(p.kids + (high ? HIGH_BONUS : 0), MAX_KIDS - this.kids.length);
          for (let i = 0; i < add; i++) this.kids.push({ c: this.serial++, born: this.t, from: p.x });
          ev.push({ type: 'ring', kind: 'friendly', n: add, x: p.x, id: p.id, high });
        }
      } else if (Math.abs(dx) < 0.6 && h.y < 0.6) {
        p.rung = true; this.stats.scares++;
        const { lost } = this._lose(3);
        ev.push({ type: 'ring', kind: 'grumpy', lost, x: p.x, id: p.id });
      } else if (dx < -0.9) { p.rung = true; this.stats.dodged++; ev.push({ type: 'skip', x: p.x, id: p.id }); }
    }
    // ---- floating doors (hold the jump to fly through): bonus kids, never a penalty
    for (const f of L.floats || []) {
      if (f.got || Math.abs(f.x - h.x) > 2) continue;
      const dx = f.x - h.x; const dy = f.y - (h.y + HERO.cy);
      if (dx * dx + dy * dy < 1.3 * 1.3) {
        f.got = true; this.stats.floats++;
        const add = Math.min(f.kids, MAX_KIDS - this.kids.length);
        for (let i = 0; i < add; i++) this.kids.push({ c: this.serial++, born: this.t, from: f.x });
        ev.push({ type: 'float', n: add, x: f.x, y: f.y });
      }
    }
    // ---- a "Perfect!" jump: airborne near the top of the arc right over the middle of a pit
    for (const hz of L.hazards) {
      if (hz.type !== 'pit' || hz.perfect || hz.w < 1) continue;
      if (h.x >= hz.x + hz.w / 2 && h.x < hz.x + hz.w / 2 + 0.3) {
        hz.perfect = true;
        if (h.y > 1.1 && !hz.hit) { this.candy += 5; this.stats.perfect++; ev.push({ type: 'perfect', x: hz.x + hz.w / 2, y: h.y }); }
      }
    }
    // ---- candy
    for (const c of L.candies) {
      if (c.got || Math.abs(c.x - h.x) > 1.2) continue;
      const dx = c.x - h.x; const dy = c.y - (h.y + HERO.cy);
      if (dx * dx + dy * dy < 0.8) { c.got = true; this.candy++; ev.push({ type: 'candy', x: c.x, y: c.y }); }
    }
    // ---- strays (dropped kids)
    for (const s of this.strays) {
      if (!s.done && Math.abs(s.x - h.x) < 0.8 && h.y < 1.0 && this.kids.length < MAX_KIDS) {
        s.done = true; this.kids.push({ c: s.c, born: this.t, from: s.x }); this.stats.recollected++; ev.push({ type: 'recollect', x: s.x });
      } else if (!s.done && s.x < h.x - 4) { s.done = true; ev.push({ type: 'strayGone', x: s.x }); }
    }
    this.strays = this.strays.filter((s) => !s.done);
    // ---- kids coming back after a boss hit
    for (const r of this.returning) { r.t -= DT; if (r.t <= 0 && this.kids.length < MAX_KIDS) { this.kids.push({ c: r.c, born: this.t, from: h.x - 4 }); r.done = true; ev.push({ type: 'return' }); } }
    this.returning = this.returning.filter((r) => !r.done);
    if (this.state === 'boss') this._bossTick(ev);
  }

  _hit(hz, ev) {
    const h = this.hero;
    hz.hit = true; this.stats.hits++;
    const { lost, gone } = this._lose(hz.loss);
    gone.slice(0, 4).forEach((k, j) => {
      let x = h.x + 3.6 + j * 2.0;
      for (let tries = 0; tries < 8; tries++) {
        const bad = this.L.hazards.some((z) => z.type === 'pit' && x > z.x - 0.9 && x < z.x + z.w + 0.9);
        if (!bad) break; x += 0.8;
      }
      this.strays.push({ x, c: k.c, done: false });
    });
    h.invuln = this.easy ? 1.9 : 1.4; h.stumble = 0.35; h.vy = 5.5; h.ground = false; h.jumping = false;
    ev.push({ type: 'hit', kind: hz.type, lost, x: hz.x });
  }

  // ---- boss --------------------------------------------------------------------------------------------------------
  _bossScale() { return Math.max(0.8, 1 - 0.04 * (this.level - 1)) * (this.easy ? 1.2 : 1); }
  _initBoss(ev) {
    this.boss = { x: this.L.len + 2.2, hp: this.L.boss, hpMax: this.L.boss, t: 0, cool: 2.0, dizzy: 0, attack: null, last: '', phase: 1, deflate: 0, defeated: false };
    ev.push({ type: 'bossStart' });
  }
  _bossTick(ev) {
    const b = this.boss; const h = this.hero;
    b.t += DT;
    if (b.defeated) { b.deflate += DT; if (b.deflate > 1.8) this._win(ev); return; }
    b.dizzy = Math.max(0, b.dizzy - DT);
    const ratio = b.hp / b.hpMax;
    const ph = ratio > 0.66 ? 1 : ratio > 0.34 ? 2 : 3;
    if (ph !== b.phase) { b.phase = ph; ev.push({ type: 'bossPhase', phase: ph }); }
    let a = b.attack;
    if (!a) {
      b.cool -= DT;
      if (b.cool <= 0 && b.dizzy <= 0) {
        const pool = ph === 1 ? ['roll'] : ph === 2 ? ['roll', 'stomp'] : ['roll', 'stomp', 'swat'];
        let type = pool[Math.floor(this.rand() * pool.length)];
        if (type === b.last && pool.length > 1 && this.rand() < 0.6) type = pool[(pool.indexOf(type) + 1) % pool.length];
        const s = this._bossScale();
        const spec = { roll: [1.0 * s, 1.0], stomp: [1.15 * s, this.easy ? 0.35 : 0.45], swat: [1.0 * s, this.easy ? 0.4 : 0.55] }[type];
        a = b.attack = { type, t: 0, tele: spec[0], active: spec[1], hit: false, px: b.x - 1.6, speed: (this.easy ? 6.5 : 8.5) };
        b.last = type;
        ev.push({ type: 'bossTele', attack: type, tele: a.tele });
      }
      return;
    }
    a.t += DT;
    if (a.t >= a.tele && !a.hit && h.invuln <= 0) {
      let hit = false;
      if (a.type === 'roll') { a.px = b.x - 1.6 - a.speed * (a.t - a.tele); hit = Math.abs(a.px - h.x) < 0.55 + HERO.w / 2 && h.y < 0.75; }
      else if (a.type === 'stomp') hit = a.t < a.tele + a.active && h.y < 0.55;
      else hit = a.t < a.tele + a.active && h.y + HERO.h > 1.45;
      if (hit) {
        a.hit = true; this.stats.hits++;
        const { lost, gone } = this._lose(2);
        gone.forEach((k) => this.returning.push({ t: 2.2, c: k.c, done: false }));
        h.invuln = 1.1; h.stumble = 0.3;
        ev.push({ type: 'hit', kind: 'boss' + a.type, lost, x: h.x });
      }
    } else if (a.type === 'roll' && a.t >= a.tele) a.px = b.x - 1.6 - a.speed * (a.t - a.tele);
    const total = a.type === 'roll' ? a.tele + ((b.x - 1.6) - (h.x - 2)) / a.speed : a.tele + a.active;
    if (a.t >= total) {
      b.attack = null; b.cool = (0.9 + this.rand() * 0.5) * this._bossScale();
      if (!a.hit) {
        const dmg = Math.min(3, 1 + Math.floor(this.kids.length / 12));
        b.hp = Math.max(0, b.hp - dmg); b.dizzy = 0.9; this.stats.dodged++;
        ev.push({ type: 'bossHit', dmg, hp: b.hp });
        if (b.hp <= 0) { b.defeated = true; ev.push({ type: 'bossDown' }); }
      }
    }
  }

  _win(ev) {
    this.state = 'won';
    const L = this.L; const k = this.kids.length;
    const stars = 1 + (k >= L.par.two ? 1 : 0) + (k >= L.par.three ? 1 : 0);
    this.result = { stars, kids: k, candy: this.candy, earned: this.candy + stars * 4, time: +this.t.toFixed(1) };
    ev.push({ type: 'won', ...this.result });
  }
}
