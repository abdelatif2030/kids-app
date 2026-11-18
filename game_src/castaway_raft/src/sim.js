// Castaway Raft with no drawing. A little castaway stands on a raft that sails by itself toward an island. Tap the
// sea to throw a hook: it grabs the floating plank, barrel, crate or golden bottle nearest to where it lands and
// reels it in. Wood builds raft tiles, a sail (faster sailing), a fishing spot (food and coins) and a hut. From the
// third level a hungry shark circles and bites ONE log; tap the shark to scare it off. The raft can only land when
// the level's building list is finished. Nothing is ever lost for good: a bite takes one wood, never the raft.
// Positions are 0..1 across (x) and down (y) the screen. Deterministic with a seed, so a robot test can play.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const COST = {
  tile: { wood: 3 },
  sail: { wood: 2, crate: 1 },
  fish: { wood: 2, crate: 0, barrel: 1 },
  hut: { wood: 4, crate: 2 },
};
export const MAX_TILES = 9;
export const START_TILES = 4;
export const RAFT = { x: 0.5, y: 0.6 };

export const LEVELS = [
  { id: 1, ar: 'رحلة جزيرة النخيل', en: 'Palm Cay Run', len: 40, spawn: 1.0, shark: false, bottles: 1, need: { tile: 1 }, isl: 'palm' },
  { id: 2, ar: 'تيار الخشب العائم', en: 'Driftwood Current', len: 48, spawn: 1.0, shark: false, bottles: 1, need: { tile: 1, sail: 1 }, isl: 'sand' },
  { id: 3, ar: 'شعاب القرش', en: 'Shark Shoals', len: 56, spawn: 1.1, shark: true, bottles: 2, need: { tile: 1, sail: 1, fish: 1 }, isl: 'rock' },
  { id: 4, ar: 'صخرة الزعنفة', en: 'Fin Rock', len: 60, spawn: 1.1, shark: true, bottles: 2, need: { tile: 1, sail: 1, fish: 1, hut: 1 }, isl: 'rock' },
  { id: 5, ar: 'مرجان تائه', en: 'Coral Drift', len: 64, spawn: 1.2, shark: true, bottles: 2, need: { tile: 2, sail: 1, fish: 1, hut: 1 }, isl: 'coral' },
  { id: 6, ar: 'مضيق العاصفة', en: 'Storm Strait', len: 68, spawn: 1.3, shark: true, bottles: 3, need: { tile: 2, sail: 1, fish: 1, hut: 1 }, isl: 'palm', storm: true },
  { id: 7, ar: 'بوابة الحوت', en: 'Whale Gate', len: 72, spawn: 1.3, shark: true, bottles: 3, need: { tile: 3, sail: 1, fish: 1, hut: 1 }, isl: 'sand' },
  { id: 8, ar: 'جزيرة الكنز', en: 'Treasure Atoll', len: 80, spawn: 1.4, shark: true, bottles: 3, need: { tile: 3, sail: 1, fish: 1, hut: 1 }, isl: 'gold' },
];

export const KINDS = ['plank', 'barrel', 'crate', 'bottle'];

export class Voyage {
  /** opts: { level (0..7), easy, seed } */
  constructor(opts = {}) {
    this.level = LEVELS[clamp(opts.level ?? 0, 0, LEVELS.length - 1)];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 5);
    this.state = 'sail'; // sail -> landing -> done
    this.time = 0;
    this.progress = 0;
    this.res = { wood: 0, crate: 0, barrel: 0 };
    this.bottles = 0;
    this.bottlesSpawned = 0;
    this.coins = 0;
    this.lost = 0; // wood a shark took
    this.built = { tile: START_TILES, sail: false, fish: false, hut: false };
    this.extra = { tile: 0 }; // tiles built this level
    this.items = [];
    this.nextId = 1;
    this.spawnT = 0.4;
    this.hook = { phase: 'idle', tx: 0.5, ty: 0.3, t: 0, dur: 0, item: null, hx: RAFT.x, hy: RAFT.y };
    this.shark = { state: 'none', x: -0.2, y: 0.5, t: 0, next: this.easy ? 16 : 11 };
    this.fishT = 5;
    this.events = [];
    this.landT = 0;
    this.stars = 0;
  }

  get radius() { return this.easy ? 0.12 : 0.085; }

  get mustDone() {
    const n = this.level.need;
    return (!n.tile || this.extra.tile >= n.tile) && (!n.sail || this.built.sail) && (!n.fish || this.built.fish) && (!n.hut || this.built.hut);
  }

  get speed() { return (this.built.sail ? 1.6 : 1) * (this.level.storm ? 1.1 : 1); }

  /** Remaining wanted builds, for the buttons: [{kind, have, need}] */
  canBuild(kind) {
    if (kind === 'tile') return this.built.tile < MAX_TILES && this._afford(kind);
    if (this.built[kind]) return false;
    return this._afford(kind);
  }

  _afford(kind) {
    const c = COST[kind];
    return Object.keys(c).every((k) => (this.res[k] || 0) >= c[k]);
  }

  build(kind) {
    if (!this.canBuild(kind)) return false;
    const c = COST[kind];
    for (const k of Object.keys(c)) this.res[k] -= c[k];
    if (kind === 'tile') { this.built.tile += 1; this.extra.tile += 1; } else this.built[kind] = true;
    this.events.push({ type: 'build', kind });
    return true;
  }

  /** Throw the hook at (x, y). Ignored while it is already out. */
  throwHook(x, y) {
    const hk = this.hook;
    if (hk.phase !== 'idle' || this.state !== 'sail') return false;
    hk.tx = clamp(x, 0.04, 0.96);
    hk.ty = clamp(y, 0.1, 0.92);
    hk.phase = 'out';
    hk.t = 0;
    hk.dur = 0.22 + Math.hypot(hk.tx - RAFT.x, hk.ty - RAFT.y) * 0.55;
    hk.item = null;
    this.events.push({ type: 'throw' });
    return true;
  }

  _spawn() {
    const r = this.rand();
    const wantBottle = this.bottlesSpawned < this.level.bottles && this.progress > 0.12 + this.bottlesSpawned * 0.22 && r < 0.2;
    let kind = r < 0.5 ? 'plank' : r < 0.78 ? 'barrel' : 'crate';
    if (wantBottle) { kind = 'bottle'; this.bottlesSpawned += 1; }
    this.items.push({ id: this.nextId++, kind, x: 0.12 + this.rand() * 0.76, y: -0.06, vy: (kind === 'bottle' ? 0.05 : 0.065) * (this.level.storm ? 1.3 : 1), ph: this.rand() * 6.28, grabbed: false });
  }

  _grab(item) {
    switch (item.kind) {
      case 'plank': this.res.wood += 1; this.events.push({ type: 'got', what: 'wood', n: 1 }); break;
      case 'barrel': this.res.wood += 1; this.res.barrel += 1; this.events.push({ type: 'got', what: 'wood', n: 1 }); break;
      case 'crate': this.res.crate += 1; this.events.push({ type: 'got', what: 'crate', n: 1 }); break;
      case 'bottle': this.bottles += 1; this.events.push({ type: 'got', what: 'bottle', n: 1 }); break;
      default: break;
    }
  }

  step(dt) {
    const ev = (this.events = []);
    if (this.state === 'done') return ev;
    this.time += dt;
    const L = this.level;
    // sailing: stops at the island until the building list is finished
    if (this.state === 'sail') {
      const full = this.progress >= 1;
      if (!full) this.progress = Math.min(1, this.progress + (dt * this.speed) / L.len);
      if (this.progress >= 1 && this.mustDone && !this.hook.item) { this.state = 'landing'; this.landT = 0; ev.push({ type: 'landing' }); }
      if (this.progress >= 1 && !this.mustDone && !full) ev.push({ type: 'needBuild' });
    } else if (this.state === 'landing') {
      this.landT += dt;
      if (this.landT > 2.2) this._finish(ev);
    }
    // things drift
    this.spawnT -= dt;
    if (this.state === 'sail' && this.progress < 0.97 && this.spawnT <= 0) { this._spawn(); this.spawnT = (0.85 + this.rand() * 0.9) / L.spawn; }
    for (const it of this.items) it.y += it.vy * dt * (this.state === 'landing' ? 0 : 1);
    this.items = this.items.filter((it) => it.y < 1.15 && !it.grabbed);
    // the hook
    const hk = this.hook;
    if (hk.phase === 'out') {
      hk.t += dt;
      const k = clamp(hk.t / hk.dur, 0, 1);
      hk.hx = RAFT.x + (hk.tx - RAFT.x) * k;
      hk.hy = RAFT.y + (hk.ty - RAFT.y) * k;
      if (k >= 1) {
        // shark first, then the nearest item
        const sh = this.shark;
        if (sh.state !== 'none' && sh.state !== 'flee' && Math.hypot(sh.x - hk.tx, sh.y - hk.ty) < (this.easy ? 0.26 : 0.2)) {
          sh.state = 'flee';
          sh.t = 0;
          sh.next = this.easy ? 18 : 14;
          ev.push({ type: 'scare' });
        } else {
          let best = null;
          let bd = this.radius;
          for (const it of this.items) {
            const d = Math.hypot(it.x - hk.tx, it.y - hk.ty);
            if (d < bd) { bd = d; best = it; }
          }
          if (best) { best.grabbed = true; hk.item = best; ev.push({ type: 'hooked', kind: best.kind }); } else ev.push({ type: 'miss' });
        }
        hk.phase = 'back';
        hk.t = 0;
      }
    } else if (hk.phase === 'back') {
      hk.t += dt;
      const k = clamp(hk.t / hk.dur, 0, 1);
      hk.hx = hk.tx + (RAFT.x - hk.tx) * k;
      hk.hy = hk.ty + (RAFT.y - hk.ty) * k;
      if (k >= 1) {
        if (hk.item) { this._grab(hk.item); hk.item = null; }
        hk.phase = 'idle';
      }
    }
    // the fishing spot feeds the castaway
    if (this.built.fish && this.state === 'sail') {
      this.fishT -= dt;
      if (this.fishT <= 0) { this.fishT = 6; this.coins += 5; ev.push({ type: 'fish', n: 5 }); }
    }
    this._sharkStep(dt, ev);
    return ev;
  }

  _sharkStep(dt, ev) {
    const sh = this.shark;
    if (!this.level.shark) return;
    sh.t += dt;
    const ang = this.time * 0.9;
    switch (sh.state) {
      case 'none':
        if (this.progress > 0.2 && this.state === 'sail') { sh.next -= dt; if (sh.next <= 0) { sh.state = 'circle'; sh.t = 0; sh.x = 0.1; sh.y = 0.4; ev.push({ type: 'sharkIn' }); } }
        break;
      case 'circle': {
        sh.x = RAFT.x + Math.cos(ang) * 0.3;
        sh.y = RAFT.y + Math.sin(ang) * 0.2;
        if (sh.t > (this.easy ? 6 : 3.6)) { sh.state = 'bite'; sh.t = 0; ev.push({ type: 'sharkWarn' }); }
        break;
      }
      case 'bite': {
        // closes in on the raft edge; one log is taken when it arrives
        const tx = RAFT.x + 0.17;
        const ty = RAFT.y + 0.04;
        sh.x += (tx - sh.x) * Math.min(1, dt * 3);
        sh.y += (ty - sh.y) * Math.min(1, dt * 3);
        if (sh.t > 1.8) {
          if (this.res.wood > 0) { this.res.wood -= 1; this.lost += 1; ev.push({ type: 'bitten', wood: 1 }); } else ev.push({ type: 'bitten', wood: 0 });
          sh.state = 'flee';
          sh.t = 0;
          sh.next = this.easy ? 18 : 12;
        }
        break;
      }
      case 'flee':
        sh.x += dt * 0.5;
        sh.y -= dt * 0.05;
        if (sh.t > 2.5) { sh.state = 'none'; sh.x = -0.3; }
        break;
      default: break;
    }
  }

  _finish(ev) {
    this.state = 'done';
    this.stars = 1 + (this.bottles >= this.level.bottles ? 1 : 0) + (this.lost === 0 ? 1 : 0);
    this.reward = 40 + this.level.id * 10 + this.coins + this.bottles * 20;
    ev.push({ type: 'done', stars: this.stars });
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (const l of LEVELS) { const v = o.stars && Number(o.stars[l.id]); if (v >= 1 && v <= 3) stars[l.id] = Math.floor(v); }
  const unlocked = Math.max(1, Math.min(LEVELS.length, Math.floor(Number(o.unlocked)) || 1));
  return { unlocked, stars, coins: Math.max(0, Math.floor(Number(o.coins)) || 0), muted: !!o.muted };
}
