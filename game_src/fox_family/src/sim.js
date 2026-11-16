// «أم الثعلب ومغامرات العيور» — the rules with no drawing. A fox mother hops one square at a time across meadows,
// roads, rivers and railway tracks to a cozy tree-stump den. Lost cubs wait along the way: touch one and it joins a
// little parade that follows her exact path. Cars stop for cubs, the log train waits until they are clear, logs and
// lily pads carry everyone over the water. A bump (a car, the train, a splash) puts her back on the last safe grass.
// Deterministic with a seed so a robot test can play every level.

export const COLS = 4; // columns -4..4
const HOP_T = 0.16;
const BUMP_T = 0.9;

// lane codes: g grass, r road, w river (logs), l lily pads, t railway, d den
export const LEVELS = [
  { id: 1, ar: 'مرج الصيف', en: 'Summer Meadow', season: 'summer', lanes: 'ggrrgwggrrgtglggrgd', speed: 1 },
  { id: 2, ar: 'غابة الخريف', en: 'Autumn Woods', season: 'autumn', lanes: 'ggrrrgwwgtgrrgtglwgrrgd', speed: 1.15 },
  { id: 3, ar: 'تلال الشتا', en: 'Winter Hills', season: 'winter', lanes: 'ggrrgwwgttgrrrglwgtgrrwgd', speed: 1.25 },
];

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

/** Builds the rows of a level: vehicles, platforms, trains, berries and cubs. */
export function buildLevel(level, rand) {
  const rows = [];
  let dir = 1;
  [...level.lanes].forEach((code, r) => {
    const row = { r, type: { g: 'grass', r: 'road', w: 'river', l: 'lily', t: 'rail', d: 'den' }[code], items: [] };
    if (row.type === 'road') {
      dir = -dir;
      row.dir = dir;
      row.speed = (1.6 + rand() * 1.4) * level.speed;
      const n = 2 + Math.floor(rand() * 2);
      const kinds = level.season === 'summer' ? ['tractor', 'truck', 'tractor', 'car'] : level.season === 'autumn' ? ['truck', 'tractor', 'truck', 'car'] : ['truck', 'tractor', 'truck', 'van']; // green tractors and pickups, like the video
      for (let k = 0; k < n; k++) {
        const kind = kinds[Math.floor(rand() * kinds.length)];
        row.items.push({ x: -8 + (k * 16) / n + rand() * 2, len: kind === 'truck' || kind === 'van' ? 2.2 : 1.5, kind, stop: false, v: row.speed });
      }
    } else if (row.type === 'river') {
      dir = -dir;
      row.dir = dir;
      row.speed = (0.9 + rand() * 0.6) * level.speed;
      for (let k = 0; k < 3; k++) row.items.push({ x: -8 + k * 5.4 + rand(), len: 2.6 + rand() * 1.2, kind: level.season === 'winter' ? 'floe' : 'log' });
    } else if (row.type === 'lily') {
      row.dir = 0;
      row.speed = 0;
      // still lily pads in a winding line, always crossable
      const start = Math.floor(rand() * 5) - 2;
      for (let x = -COLS; x <= COLS; x++) if ((x - start) % 2 === 0 || x === 0) row.items.push({ x, len: 0.9, kind: 'lily' });
    } else if (row.type === 'rail') {
      row.train = { state: 'wait', t: 3 + rand() * 4, x: -14, dir: rand() < 0.5 ? 1 : -1 };
    }
    rows.push(row);
  });
  // berries and cubs on grass rows (not the first)
  const grass = rows.filter((w) => w.type === 'grass' && w.r > 1);
  const pickCell = (used) => {
    for (let k = 0; k < 50; k++) {
      const w = grass[Math.floor(rand() * grass.length)];
      const x = Math.floor(rand() * (COLS * 2 + 1)) - COLS;
      const key = `${w.r},${x}`;
      if (!used.has(key)) { used.add(key); return { r: w.r, x }; }
    }
    return null;
  };
  const used = new Set();
  const berries = [];
  for (let k = 0; k < 5; k++) { const c = pickCell(used); if (c) berries.push({ ...c, taken: false }); }
  const cubs = [];
  const nCubs = 2 + level.id;
  for (let k = 0; k < nCubs; k++) { const c = pickCell(used); if (c) cubs.push({ ...c, id: k, found: false, x0: c.x, r0: c.r }); }
  return { rows, berries, cubs };
}

export class Trip {
  /** opts: { level (0..2), seed, easy } */
  constructor(opts = {}) {
    this.level = LEVELS[opts.level ?? 0];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 8);
    const b = buildLevel(this.level, this.rand);
    this.rows = b.rows;
    this.berries = b.berries;
    this.cubs = b.cubs;
    this.fox = { x: 0, r: 0, fx: 0, fr: 0, hop: 0, face: 0, bump: 0, lastSafe: 0, ride: 0 };
    this.trail = [{ x: 0, r: 0 }]; // every square the mother stood on, newest last
    this.parade = []; // cubs following her
    this.bumps = 0;
    this.picked = 0;
    this.state = 'play'; // play -> home -> done
    this.events = [];
    this.time = 0;
    this.queue = [];
  }

  get den() { return this.rows.length - 1; }
  row(r) { return this.rows[Math.max(0, Math.min(this.rows.length - 1, r))]; }

  /** A hop: 'up' (forward), 'down', 'left', 'right'. Queued if mid-hop. */
  hop(dir) {
    if (this.state !== 'play') return false;
    if (this.fox.hop > 0 || this.fox.bump > 0) { if (this.queue.length < 2) this.queue.push(dir); return false; }
    const f = this.fox;
    const nr = f.r + (dir === 'up' ? 1 : dir === 'down' ? -1 : 0);
    const nx = Math.round(f.x) + (dir === 'left' ? -1 : dir === 'right' ? 1 : 0);
    if (nr < 0 || nr > this.den || Math.abs(nx) > COLS) { this.events.push({ type: 'blocked' }); return false; }
    f.fr = f.r;
    f.fx = f.x;
    f.r = nr;
    f.x = nx;
    f.hop = HOP_T;
    f.face = dir;
    this.events.push({ type: 'hop', dir });
    return true;
  }

  step(dt) {
    this.events = [];
    if (this.state === 'done') return this.events;
    this.time += dt;
    const f = this.fox;
    this._traffic(dt);
    if (f.bump > 0) {
      f.bump -= dt;
      if (f.bump <= 0) {
        f.r = f.lastSafe;
        f.x = Math.max(-COLS, Math.min(COLS, Math.round(f.x)));
        f.hop = 0;
        // the whole parade comes back to the safe grass with her (nobody is left on a road or a track)
        for (let k = 0; k <= this.parade.length; k++) this.trail.push({ x: f.x, r: f.r });
      }
    } else if (f.hop > 0) {
      f.hop -= dt;
      if (f.hop <= 0) this._land();
    } else if (this.queue.length) this.hop(this.queue.shift());
    // riding a log
    const row = this.row(f.r);
    if (f.hop <= 0 && f.bump <= 0 && row.type === 'river' && this.state === 'play') {
      f.x += row.dir * row.speed * dt;
      if (Math.abs(f.x) > COLS + 0.6 || !this._onPlatform(row, f.x)) this._bump('splash');
    }
    if (f.hop <= 0 && f.bump <= 0 && this.state === 'play') this._danger();
    this._paradeStep(dt);
    if (this.state === 'home') {
      this.homeT -= dt;
      if (this.homeT <= 0) { this.state = 'done'; this.events.push({ type: 'done', result: this.result }); }
    }
    return this.events;
  }

  _land() {
    const f = this.fox;
    const row = this.row(f.r);
    // stepping back onto a square she just walked: the path folds up, so the cubs stay behind her
    const lx = Math.round(f.x);
    for (let i = this.trail.length - 1; i >= Math.max(0, this.trail.length - 12); i--) {
      const p = this.trail[i];
      if (p.r === f.r && Math.round(p.x) === lx) { this.trail.length = i; break; }
    }
    this.trail.push({ x: f.x, r: f.r });
    if (row.type === 'grass' || row.type === 'den') f.lastSafe = f.r;
    if (row.type === 'lily' || row.type === 'river') {
      if (!this._onPlatform(row, f.x)) { this._bump('splash'); return; }
      this.events.push({ type: 'plop' });
    }
    // berries and cubs
    for (const b of this.berries) if (!b.taken && b.r === f.r && b.x === Math.round(f.x)) { b.taken = true; this.picked++; this.events.push({ type: 'berry', n: this.picked }); }
    for (const c of this.cubs) {
      if (!c.found && c.r === f.r && Math.abs(c.x - f.x) < 0.6) {
        c.found = true;
        this.parade.push(c);
        c.lag = this.parade.length; // follows this many squares behind
        this.events.push({ type: 'cub', n: this.parade.length, of: this.cubs.length });
      }
    }
    if (f.r === this.den) {
      this.state = 'home';
      this.homeT = 1.2 + this.parade.length * 0.35;
      this.events.push({ type: 'den' });
    }
  }

  _onPlatform(row, x) {
    return row.items.some((it) => Math.abs(x - it.x) < it.len / 2 + 0.15);
  }

  _danger() {
    const f = this.fox;
    const row = this.row(f.r);
    if (row.type === 'road') {
      // only a moving car bumps; a car that stopped for the cubs is just in the way
      for (const it of row.items) if (it.v > 0.6 && Math.abs(it.x - f.x) < it.len / 2 + 0.35) { this._bump('car'); return; }
    }
    if (row.type === 'rail' && row.train.state === 'pass' && Math.abs(row.train.x - f.x) < 6) this._bump('train');
  }

  _bump(why) {
    const f = this.fox;
    if (f.bump > 0) return;
    f.bump = BUMP_T;
    this.bumps++;
    this.queue = [];
    this.events.push({ type: 'bump', why, x: f.x, r: f.r });
  }

  // ---- the world moves -----------------------------------------------------------------------------------------

  _traffic(dt) {
    const cubRows = new Set(this.parade.map((c) => c.r));
    for (const row of this.rows) {
      if (row.type === 'road') {
        for (const it of row.items) {
          // cars stop for cubs crossing in front of them (and, for the youngest, for the mother too)
          const ahead = (x) => (x - it.x) * row.dir > 0 && (x - it.x) * row.dir < it.len / 2 + 2.6;
          const cubThere = this.parade.some((c) => c.r === row.r && ahead(c.x));
          const momThere = this.easy && this.fox.r === row.r && ahead(this.fox.x);
          const was = it.stop;
          it.stop = cubThere || momThere;
          if (it.stop && !was) this.events.push({ type: 'stop', r: row.r });
          it.v += ((it.stop ? 0 : row.speed) - it.v) * Math.min(1, dt * (it.stop ? 8 : 2));
          it.x += row.dir * it.v * dt;
          if (it.x > 9) it.x -= 18;
          if (it.x < -9) it.x += 18;
        }
      } else if (row.type === 'river') {
        for (const it of row.items) {
          it.x += row.dir * row.speed * dt;
          if (it.x > 9) it.x -= 18;
          if (it.x < -9) it.x += 18;
        }
      } else if (row.type === 'rail') {
        const tr = row.train;
        tr.t -= dt;
        if (tr.state === 'wait' && tr.t <= 0) {
          // the log train waits while any cub is on the tracks
          if (cubRows.has(row.r)) tr.t = 0.5;
          else { tr.state = 'warn'; tr.t = 1.6; this.events.push({ type: 'trainWarn', r: row.r }); }
        } else if (tr.state === 'warn' && tr.t <= 0) {
          if (cubRows.has(row.r)) tr.t = 0.5;
          else { tr.state = 'pass'; tr.x = -16 * tr.dir; this.events.push({ type: 'train', r: row.r }); }
        } else if (tr.state === 'pass') {
          tr.x += tr.dir * 16 * dt;
          if (Math.abs(tr.x) > 18) { tr.state = 'wait'; tr.t = 4 + this.rand() * 4; }
        }
      }
    }
  }

  /** The cubs follow the mother's exact path, each a square further behind; logs carry them too. */
  _paradeStep(dt) {
    const n = this.trail.length;
    this.parade.forEach((c) => {
      const target = this.trail[Math.max(0, n - 1 - c.lag)];
      if (!target) return;
      const row = this.row(target.r);
      let tx = target.x;
      if (row.type === 'river') {
        // ride the nearest log under that square
        const it = row.items.reduce((a, b) => (Math.abs(b.x - c.x) < Math.abs(a.x - c.x) ? b : a));
        tx = c.r === target.r ? c.x + row.dir * row.speed * dt : it.x;
      }
      c.x += (tx - c.x) * Math.min(1, dt * 9);
      c.r += (target.r - c.r) * Math.min(1, dt * 9);
      if (Math.abs(target.r - c.r) < 0.05) c.r = target.r;
    });
  }

  /** Stars (like the video): reached the den, picked every berry, never bumped. */
  get result() {
    const home = this.state !== 'play';
    const all = this.picked >= this.berries.length;
    return { stars: (home ? 1 : 0) + (home && all ? 1 : 0) + (home && this.bumps === 0 ? 1 : 0), cubs: this.parade.length, of: this.cubs.length, berries: this.picked, bumps: this.bumps };
  }
}

/** Save: { unlocked (1..3), stars, berries, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  const b = Math.floor(Number(s.berries));
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1, stars, berries: Number.isFinite(b) && b > 0 ? b : 0, muted: s.muted === true };
}
