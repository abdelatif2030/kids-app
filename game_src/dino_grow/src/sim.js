// Dino Grow — pure game logic (no DOM, no three.js). Deterministic for a given seed and input sequence.
// You are a baby dinosaur. Everything shows a POWER number. You may eat only what is weaker than you (power < yours).
// Touching something stronger only pushes you back and costs a little power (never a hard fail). Eating grows your power, and at
// thresholds you EVOLVE. Three levels: Jungle, Swamp, Volcano Valley (a giant boss that telegraphs stomps and fire).

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

/** Evolution stages: a name, the power it begins at. */
export const STAGES = [
  { id: 'baby', at: 0, ar: 'ديناصور صغير', en: 'Baby Raptor' },
  { id: 'raptor', at: 10, ar: 'رابتور', en: 'Raptor' },
  { id: 'hunter', at: 32, ar: 'صيّاد كبير', en: 'Big Hunter' },
  { id: 'giant', at: 70, ar: 'عملاق', en: 'Giant' },
];
export function stageOf(P) { let s = 0; for (let i = 1; i < STAGES.length; i++) if (P >= STAGES[i].at) s = i; return s; }
/** The player's body radius grows with power. */
export const radiusOf = (P) => 0.55 + 0.2 * Math.sqrt(Math.max(0, P));
export const speedOf = (P) => 7.5 + 0.02 * Math.min(P, 150);
/** Camera distance: a smooth, strictly increasing (monotonic) zoom-out as power grows. */
export const zoomFor = (P) => 11 + 8 * Math.log(1 + Math.max(0, P) / 10);
/** Number colour: red = stronger or equal (run!), green = easy meal, white = a fair meal. */
export const toneOf = (cp, P) => (cp >= P ? 'red' : cp <= P * 0.6 ? 'green' : 'white');
/** Power gained by eating something of this power. */
export const gainOf = (power) => Math.max(1, Math.ceil(power * 0.5));

/** Stars: 1 for finishing; 2 when reasonably quick; 3 when quick, or gentle (few bumps), or very strong at the end. */
export function starsFor({ time, par, hits, power, goal }) {
  let s = 1;
  if (time <= par * 1.7) s = 2;
  if (s === 2 && (time <= par || hits <= 2 || power >= goal * 1.25)) s = 3;
  return s;
}

/** Species: power, size factor, behaviour (static/flee/wander/hunter), flee speed as a share of the player's speed, wander speed. */
const SP = {
  beetle: { power: 1, f: 0.45, ai: 'flee', fleeK: 0.62, ws: 1.6, respawn: 3, look: 'beetle', ar: 'خنفسة', en: 'Beetle' },
  egg: { power: 1, f: 0.6, ai: 'static', respawn: 6, look: 'egg', ar: 'بيضة', en: 'Egg' },
  compy: { power: 3, f: 0.8, ai: 'flee', fleeK: 0.78, ws: 2.2, respawn: 5, look: 'compy', ar: 'كومبي', en: 'Compy' },
  dodo: { power: 5, f: 0.85, ai: 'flee', fleeK: 0.72, ws: 2, respawn: 6, look: 'dodo', ar: 'دودو', en: 'Dodo' },
  stegoBaby: { power: 8, f: 0.9, ai: 'wander', fleeK: 0.55, ws: 1.7, respawn: 8, look: 'stego', ar: 'ستيجو صغير', en: 'Baby Stego' },
  trike: { power: 14, f: 0.95, ai: 'wander', fleeK: 0.5, ws: 1.8, respawn: 10, look: 'trike', ar: 'ترايسيرا', en: 'Trike' },
  raptorRed: { power: 22, f: 0.95, ai: 'hunter', fleeK: 0.7, ws: 2.2, respawn: 14, look: 'raptorRed', ar: 'رابتور أحمر', en: 'Red Raptor' },
  rexJr: { power: 40, f: 0.95, ai: 'hunter', fleeK: 0.6, ws: 2, respawn: 20, look: 'rexJr', ar: 'ريكس صغير', en: 'Junior Rex' },
  mudbug: { power: 2, f: 0.45, ai: 'flee', fleeK: 0.62, ws: 1.6, respawn: 3, look: 'mudbug', ar: 'حشرة الطين', en: 'Mud Bug' },
  frog: { power: 4, f: 0.7, ai: 'flee', fleeK: 0.75, ws: 2, respawn: 5, look: 'frog', ar: 'ضفدعة', en: 'Frog' },
  swampEgg: { power: 6, f: 0.6, ai: 'static', respawn: 7, look: 'swampEgg', ar: 'بيضة المستنقع', en: 'Swamp Egg' },
  gator: { power: 20, f: 0.95, ai: 'hunter', fleeK: 0.6, ws: 1.8, respawn: 14, look: 'gator', ar: 'تمساح', en: 'Gator' },
  ankylo: { power: 30, f: 0.95, ai: 'wander', fleeK: 0.45, ws: 1.4, respawn: 12, look: 'ankylo', ar: 'أنكيلو', en: 'Ankylo' },
  calf: { power: 42, f: 0.95, ai: 'wander', fleeK: 0.45, ws: 1.5, respawn: 14, look: 'calf', ar: 'براكيو صغير', en: 'Baby Brachio' },
  swampRex: { power: 60, f: 0.95, ai: 'hunter', fleeK: 0.55, ws: 1.8, respawn: 20, look: 'swampRex', ar: 'ريكس المستنقع', en: 'Swamp Rex' },
  emberbug: { power: 2, f: 0.45, ai: 'flee', fleeK: 0.62, ws: 1.6, respawn: 3, look: 'emberbug', ar: 'حشرة الجمر', en: 'Ember Bug' },
  lavaEgg: { power: 8, f: 0.6, ai: 'static', respawn: 7, look: 'lavaEgg', ar: 'بيضة البركان', en: 'Lava Egg' },
  lizard: { power: 16, f: 0.85, ai: 'flee', fleeK: 0.75, ws: 2.2, respawn: 8, look: 'lizard', ar: 'سحلية', en: 'Lizard' },
  ankyloRed: { power: 32, f: 0.95, ai: 'wander', fleeK: 0.45, ws: 1.4, respawn: 12, look: 'ankyloRed', ar: 'أنكيلو الحمم', en: 'Lava Ankylo' },
  trikeRed: { power: 48, f: 0.95, ai: 'wander', fleeK: 0.45, ws: 1.6, respawn: 14, look: 'trikeRed', ar: 'ترايسيرا الحمم', en: 'Lava Trike' },
  spino: { power: 72, f: 0.95, ai: 'hunter', fleeK: 0.55, ws: 1.8, respawn: 22, look: 'spino', ar: 'سبينو', en: 'Spino' },
  rex: { power: 88, f: 0.95, ai: 'hunter', fleeK: 0.5, ws: 1.8, respawn: 26, look: 'rex', ar: 'ريكس', en: 'Rex' },
};
export const SPECIES = SP;
for (const [k, s] of Object.entries(SP)) { s.key = k; s.r = (0.55 + 0.2 * Math.sqrt(s.power)) * s.f; s.gain = gainOf(s.power); }

export const LEVELS = [
  { id: 'jungle', ar: 'الغابة', en: 'Jungle', half: 28, start: 2, goal: 32, par: 100, obst: { kinds: ['tree', 'tree', 'rock'], n: 14 },
    species: [['beetle', 10], ['egg', 6], ['compy', 6], ['dodo', 5], ['stegoBaby', 4], ['trike', 3], ['raptorRed', 3], ['rexJr', 2]] },
  { id: 'swamp', ar: 'المستنقع', en: 'Swamp', half: 32, start: 14, goal: 70, par: 140, obst: { kinds: ['stump', 'rock', 'stump'], n: 13 },
    species: [['mudbug', 10], ['frog', 8], ['swampEgg', 6], ['gator', 4], ['ankylo', 4], ['calf', 3], ['swampRex', 2]] },
  { id: 'volcano', ar: 'وادي البركان', en: 'Volcano Valley', half: 36, start: 56, goal: 100, par: 220, obst: { kinds: ['rock', 'pillar', 'rock'], n: 14 },
    boss: { power: 100, hp: 3, r: 4 },
    species: [['emberbug', 8], ['lavaEgg', 6], ['lizard', 6], ['ankyloRed', 3], ['trikeRed', 4], ['spino', 3], ['rex', 2]] },
];

export function normalizeSave(s) {
  const o = { unlocked: 1, stars: [0, 0, 0], best: [0, 0, 0], muted: false, eaten: 0 };
  if (s && typeof s === 'object') {
    o.unlocked = clamp(Math.floor(Number(s.unlocked)) || 1, 1, LEVELS.length);
    for (let i = 0; i < LEVELS.length; i++) {
      const st = s.stars && s.stars[i]; o.stars[i] = clamp(Math.floor(Number(st)) || 0, 0, 3);
      const b = s.best && Number(s.best[i]); o.best[i] = b > 0 && Number.isFinite(b) ? Math.round(b) : 0;
    }
    o.muted = !!s.muted;
    o.eaten = Math.max(0, Math.floor(Number(s.eaten)) || 0);
  }
  return o;
}

export class Dino {
  constructor({ level = 0, seed = 1, easy = false } = {}) {
    const L = LEVELS[clamp(level, 0, LEVELS.length - 1)];
    this.L = L; this.level = LEVELS.indexOf(L); this.easy = !!easy; this.rand = rng(seed * 7919 + this.level * 131 + 17);
    this.time = 0; this.done = false; this.won = false; this.result = null; this.winT = 0;
    this.floor = L.start;
    this.player = { x: 0, z: 0, vx: 0, vz: 0, P: L.start, stage: stageOf(L.start), r: radiusOf(L.start), face: 0, pdx: 0, pdz: 1, pounceT: 0, pounceCd: 0, inv: 0, kx: 0, kz: 0, speedNow: 0, px: 0, pz: 1, bite: 0 };
    this.stats = { eaten: 0, hits: 0 };
    this.nextId = 1; this.creatures = []; this.pending = []; this.obstacles = []; this.projectiles = []; this.boss = null;
    this._genObstacles();
    for (const [k, n] of L.species) for (let i = 0; i < n; i++) this._spawn(k, true);
    if (L.boss) this.boss = { x: 0, z: -L.half + 8, power: L.boss.power, r: L.boss.r, hp: easy ? 2 : L.boss.hp, maxHp: easy ? 2 : L.boss.hp, face: 0, tele: null, timer: 4, stagger: 0, hitCd: 0, speedNow: 0, down: false };
  }

  get arena() { return this.L.half; }
  get stage() { return this.player.stage; }
  get phase() { return this.boss ? this.boss.maxHp - this.boss.hp + 1 : 0; }
  target(kind) { return this.L.species.find((s) => s[0] === kind)[1]; }

  _genObstacles() {
    const { kinds, n } = this.L.obst; const H = this.L.half - 3;
    for (let tries = 0; this.obstacles.length < n && tries < 400; tries++) {
      const x = (this.rand() * 2 - 1) * H; const z = (this.rand() * 2 - 1) * H;
      const kind = kinds[Math.floor(this.rand() * kinds.length)];
      const r = (kind === 'rock' ? 1.0 : kind === 'pillar' ? 1.2 : 1.1) + this.rand() * 0.5;
      if (Math.hypot(x, z) < 7) continue;
      if (this.boss === null && this.L.boss && Math.hypot(x, z + this.L.half - 8) < 8) continue;
      if (this.obstacles.some((o) => Math.hypot(o.x - x, o.z - z) < o.r + r + 3)) continue;
      this.obstacles.push({ x, z, r, kind });
    }
  }

  _freeSpot(minDist, r) {
    const H = this.L.half - 2.5;
    for (let t = 0; t < 40; t++) {
      const x = (this.rand() * 2 - 1) * H; const z = (this.rand() * 2 - 1) * H;
      if (Math.hypot(x - this.player.x, z - this.player.z) < minDist) continue;
      if (this.obstacles.some((o) => Math.hypot(o.x - x, o.z - z) < o.r + r + 0.6)) continue;
      if (this.L.boss && Math.hypot(x, z + this.L.half - 8) < 7) continue;
      return { x, z };
    }
    return null;
  }

  _spawn(kind, initial) {
    const sp = SP[kind];
    const spot = this._freeSpot(sp.ai === 'hunter' ? (initial ? 16 : 18) : initial ? 6 : 10, sp.r);
    if (!spot) return null;
    const c = { id: this.nextId++, kind, power: sp.power, r: sp.r, ai: sp.ai, x: spot.x, z: spot.z, face: this.rand() * 6.28, vx: 0, vz: 0, speed: 0, wa: this.rand() * 6.28, wt: this.rand() * 2, walk: false, stun: 0, chase: false, born: initial ? -1 : this.time };
    this.creatures.push(c);
    return c;
  }

  _loss(frac) {
    const p = this.player; const loss = this.easy ? 1 : Math.max(1, Math.round(p.P * frac));
    const before = p.P; p.P = Math.max(this.floor, p.P - loss); return before - p.P;
  }

  _hurt(fromX, fromZ, frac, ev, src) {
    const p = this.player; if (p.inv > 0) return false;
    const lost = this._loss(frac);
    const dx = p.x - fromX; const dz = p.z - fromZ; const d = Math.hypot(dx, dz) || 1;
    p.kx = (dx / d) * 15; p.kz = (dz / d) * 15; p.inv = 1.4; p.pounceT = 0; this.stats.hits++;
    p.r = radiusOf(p.P);
    ev.push({ type: 'bump', src, lost, x: p.x, z: p.z });
    return true;
  }

  _push(o, x, z, r) {
    const d = Math.hypot(x - o.x, z - o.z); const m = o.r + r;
    if (d < m && d > 1e-6) { const k = (m - d) / d; return [(x - o.x) * k, (z - o.z) * k]; }
    return [0, 0];
  }

  _place(e, r) {
    const H = this.L.half - r;
    e.x = clamp(e.x, -H, H); e.z = clamp(e.z, -H, H);
    for (let i = 0; i < 2; i++) for (const o of this.obstacles) { const [px, pz] = this._push(o, e.x, e.z, r); e.x += px; e.z += pz; }
    e.x = clamp(e.x, -H, H); e.z = clamp(e.z, -H, H);
  }

  step(dt, input = {}) {
    const ev = [];
    if (this.done) return ev;
    dt = Math.min(dt, 0.05);
    this.time += dt;
    this._player(dt, input, ev);
    this._creatures(dt, ev);
    if (this.boss) this._boss(dt, ev);
    this._projectiles(dt, ev);
    this._respawn(dt);
    this._collide(ev);
    if (this.winT > 0) { this.winT -= dt; if (this.winT <= 0) this._finish(ev); }
    else if (!this.boss && this.player.P >= this.L.goal) this._finish(ev);
    return ev;
  }

  _player(dt, input, ev) {
    const p = this.player;
    let ix = Number(input.x) || 0; let iz = Number(input.z) || 0; let mag = Math.hypot(ix, iz);
    if (mag > 1) { ix /= mag; iz /= mag; mag = 1; }
    p.inv = Math.max(0, p.inv - dt); p.pounceCd = Math.max(0, p.pounceCd - dt); p.bite = Math.max(0, p.bite - dt);
    if (mag > 0.1) { p.pdx = ix / mag; p.pdz = iz / mag; }
    if (input.pounce && p.pounceCd <= 0 && p.pounceT <= 0) { p.pounceT = 0.32; p.pounceCd = 1.5; p.px = p.pdx; p.pz = p.pdz; ev.push({ type: 'pounce', x: p.x, z: p.z }); }
    const base = speedOf(p.P);
    let vx; let vz;
    if (p.pounceT > 0) { p.pounceT -= dt; vx = p.px * base * 3.2; vz = p.pz * base * 3.2; } else { vx = ix * base; vz = iz * base; }
    p.speedNow = Math.hypot(vx, vz);
    if (p.speedNow > 0.3) { const target = Math.atan2(vx, vz); let df = target - p.face; df = Math.atan2(Math.sin(df), Math.cos(df)); p.face += df * Math.min(1, dt * 12); }
    p.kx *= Math.exp(-dt * 5); p.kz *= Math.exp(-dt * 5);
    p.x += (vx + p.kx) * dt; p.z += (vz + p.kz) * dt;
    p.r = radiusOf(p.P);
    this._place(p, p.r * 0.8);
  }

  _creatures(dt, ev) {
    const p = this.player; const pb = speedOf(p.P); const H = this.L.half;
    for (const c of this.creatures) {
      c.stun = Math.max(0, c.stun - dt);
      const dx = p.x - c.x; const dz = p.z - c.z; const d = Math.hypot(dx, dz) || 1e-6;
      const sp = SP[c.kind]; let vx = 0; let vz = 0;
      if (c.ai === 'static') { c.speed = 0; continue; }
      if (c.power < p.P) {
        c.chase = false;
        if (d < 9 + p.r * 2) {
          const k = pb * sp.fleeK * (this.easy ? 0.8 : 1);
          let ax = -dx / d; let az = -dz / d;
          const wall = H - Math.max(Math.abs(c.x), Math.abs(c.z));
          if (wall < 3) { const cd = Math.hypot(c.x, c.z) || 1; ax += (-c.x / cd) * 0.9; az += (-c.z / cd) * 0.9; const m = Math.hypot(ax, az) || 1; ax /= m; az /= m; }
          vx = ax * k; vz = az * k;
        } else this._wander(c, dt, sp, H);
      } else if (c.ai === 'hunter' && c.stun <= 0) {
        const sight = this.easy ? 9 : 13;
        if (!c.chase && d < sight) { c.chase = true; ev.push({ type: 'alert', id: c.id, x: c.x, z: c.z }); }
        if (c.chase && d > sight * 1.5) c.chase = false;
        if (c.chase) { const k = pb * (this.easy ? 0.42 : 0.6); vx = (dx / d) * k; vz = (dz / d) * k; } else this._wander(c, dt, sp, H);
      } else if (c.stun > 0) { vx = (-dx / d) * 3.5; vz = (-dz / d) * 3.5; } else this._wander(c, dt, sp, H);
      if (c.walkV) { vx = c.walkV[0]; vz = c.walkV[1]; c.walkV = null; }
      c.vx = vx; c.vz = vz; c.speed = Math.hypot(vx, vz);
      c.x += vx * dt; c.z += vz * dt;
      if (c.speed > 0.2) { const target = Math.atan2(vx, vz); let df = target - c.face; df = Math.atan2(Math.sin(df), Math.cos(df)); c.face += df * Math.min(1, dt * 8); }
      this._place(c, c.r * 0.7);
    }
  }

  _wander(c, dt, sp, H) {
    c.wt -= dt;
    if (c.wt <= 0) { c.wa = this.rand() * 6.283; c.wt = 1.5 + this.rand() * 2.5; c.walk = this.rand() < 0.65; }
    if (Math.max(Math.abs(c.x), Math.abs(c.z)) > H - 3) c.wa = Math.atan2(-c.x, -c.z);
    if (c.walk) c.walkV = [Math.sin(c.wa) * sp.ws, Math.cos(c.wa) * sp.ws];
  }

  _respawn(dt) {
    for (const pd of this.pending) pd.t -= dt;
    const due = this.pending.filter((pd) => pd.t <= 0);
    this.pending = this.pending.filter((pd) => pd.t > 0);
    for (const pd of due) {
      const alive = this.creatures.reduce((n, c) => n + (c.kind === pd.kind ? 1 : 0), 0);
      if (alive < this.target(pd.kind)) { if (!this._spawn(pd.kind, false)) this.pending.push({ kind: pd.kind, t: 1 }); }
    }
  }

  _collide(ev) {
    const p = this.player;
    for (let i = this.creatures.length - 1; i >= 0; i--) {
      const c = this.creatures[i];
      const d = Math.hypot(c.x - p.x, c.z - p.z);
      const reach = p.r * 0.85 + c.r * 0.75 + (p.pounceT > 0 ? 0.5 : 0);
      if (d >= reach) continue;
      if (c.power < p.P) this._eat(i, ev);
      else if (this._hurt(c.x, c.z, 0.04, ev, c.kind)) { c.stun = 2.2; c.chase = false; }
    }
    const b = this.boss;
    if (b && !b.down) {
      const d = Math.hypot(b.x - p.x, b.z - p.z);
      if (d < b.r * 0.9 + p.r * 0.85) {
        if (p.P > b.power && b.hitCd <= 0) this._bite(ev);
        else if (p.P <= b.power) this._hurt(b.x, b.z, 0.06, ev, 'boss');
        else { const dx = p.x - b.x; const dz = p.z - b.z; const m = Math.hypot(dx, dz) || 1; p.x += (dx / m) * 0.3; p.z += (dz / m) * 0.3; }
      }
    }
  }

  _gain(g, ev) {
    const p = this.player; p.P = Math.min(999, p.P + g); p.r = radiusOf(p.P);
    while (p.stage < STAGES.length - 1 && p.P >= STAGES[p.stage + 1].at) { p.stage++; ev.push({ type: 'evolve', stage: p.stage, P: p.P }); }
  }

  _eat(i, ev) {
    const c = this.creatures[i]; const p = this.player; const sp = SP[c.kind];
    this.creatures.splice(i, 1);
    const gain = sp.gain; const Pbefore = p.P;
    this.stats.eaten++; p.bite = 0.3;
    this.pending.push({ kind: c.kind, t: sp.respawn });
    ev.push({ type: 'eat', id: c.id, kind: c.kind, x: c.x, z: c.z, power: c.power, gain, P: Pbefore });
    this._gain(gain, ev);
  }

  _bite(ev) {
    const b = this.boss; const p = this.player;
    b.hp--; b.hitCd = 2.6; b.stagger = 2.0; b.tele = null; b.timer = 3; p.bite = 0.4;
    const dx = b.x - p.x; const dz = b.z - p.z; const m = Math.hypot(dx, dz) || 1;
    b.x += (dx / m) * 5; b.z += (dz / m) * 5; this._place(b, b.r * 0.5);
    ev.push({ type: 'bossBite', hp: b.hp, x: b.x, z: b.z });
    this._gain(4, ev);
    if (b.hp <= 0) { b.down = true; this.winT = 2.4; ev.push({ type: 'bossDown', x: b.x, z: b.z }); }
  }

  _boss(dt, ev) {
    const b = this.boss; const p = this.player;
    b.hitCd = Math.max(0, b.hitCd - dt); b.speedNow = 0;
    if (b.down) return;
    if (b.stagger > 0) { b.stagger -= dt; return; }
    const dx = p.x - b.x; const dz = p.z - b.z; const d = Math.hypot(dx, dz) || 1e-6; const phase = this.phase;
    const slow = this.easy ? 1.45 : 1;
    if (b.tele) {
      const t = b.tele; t.t += dt;
      if (t.type === 'fire') t.ang = Math.atan2(dx, dz); // keeps aiming until the last moment, then locks
      if (t.type === 'fire' && t.t > t.dur * 0.7) t.locked = true;
      if (t.t >= t.dur) {
        if (t.type === 'stomp') {
          ev.push({ type: 'stomp', x: b.x, z: b.z, radius: t.radius });
          if (d < t.radius + p.r * 0.5) this._hurt(b.x, b.z, 0.07, ev, 'stomp');
        } else {
          const n = phase >= 3 ? 5 : 3;
          for (let k = 0; k < n; k++) {
            const a = t.ang + (k - (n - 1) / 2) * 0.3; const sp = 10;
            this.projectiles.push({ id: this.nextId++, x: b.x + Math.sin(a) * b.r, z: b.z + Math.cos(a) * b.r, vx: Math.sin(a) * sp, vz: Math.cos(a) * sp, life: 3.2, r: 0.7 });
          }
          ev.push({ type: 'fire', x: b.x, z: b.z, ang: t.ang });
        }
        b.tele = null; b.timer = (phase === 1 ? 3.4 : phase === 2 ? 2.8 : 2.3) * slow;
      }
      return;
    }
    b.face = Math.atan2(dx, dz);
    const sp = (1.7 + phase * 0.5) / (this.easy ? 1.3 : 1);
    if (d > b.r + p.r) { b.x += (dx / d) * sp * dt; b.z += (dz / d) * sp * dt; b.speedNow = sp; this._place(b, b.r * 0.5); }
    b.timer -= dt;
    if (b.timer <= 0) {
      const wantFire = phase >= 2 && (d > 9 || this.rand() < 0.4);
      if (wantFire) { b.tele = { type: 'fire', t: 0, dur: 1.2 * slow, ang: Math.atan2(dx, dz), x: b.x, z: b.z, locked: false }; ev.push({ type: 'telegraph', kind: 'fire' }); }
      else { b.tele = { type: 'stomp', t: 0, dur: 1.4 * slow, radius: 7 + phase * 1.6, x: b.x, z: b.z }; ev.push({ type: 'telegraph', kind: 'stomp' }); }
    }
  }

  _projectiles(dt, ev) {
    const p = this.player; const H = this.L.half + 2;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const q = this.projectiles[i];
      q.x += q.vx * dt; q.z += q.vz * dt; q.life -= dt;
      if (q.life <= 0 || Math.abs(q.x) > H || Math.abs(q.z) > H) { this.projectiles.splice(i, 1); continue; }
      if (Math.hypot(q.x - p.x, q.z - p.z) < p.r * 0.8 + q.r) { this._hurt(q.x - q.vx * 0.1, q.z - q.vz * 0.1, 0.06, ev, 'fire'); this.projectiles.splice(i, 1); }
    }
  }

  _finish(ev) {
    this.done = true; this.won = true;
    const p = this.player; const L = this.L;
    const stars = starsFor({ time: this.time, par: L.par, hits: this.stats.hits, power: p.P, goal: L.goal });
    this.result = { stars, time: this.time, power: p.P, eaten: this.stats.eaten, hits: this.stats.hits, level: this.level, stage: p.stage };
    ev.push({ type: 'complete', ...this.result });
  }
}
