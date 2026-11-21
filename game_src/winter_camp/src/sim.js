// Winter Camp with no drawing. A lone survivor walks a snowy forest, chops pines (auto when near, 3 swings), carries the
// logs on the back (capacity grows with upgrades) and drops them at the glowing building site (auto when standing on it).
// Each delivered log is one step of the current build and one coin. Builds in order: log cabin, workshop, sawmill,
// supply sled; the sled opens the frozen gate to new lands (the win). Helpers (bought with coins) chop and deliver by
// themselves. The campfire warms: far from it the survivor shivers (slower), never worse. A blizzard comes now and then:
// colder and harder to see. Positions in metres on a 60 x 60 field. Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const SIZE = 60;
export const FIRE = { x: 30, y: 30 };
export const SITE = { x: 30, y: 21, r: 3.2 };
export const BUILDS = [
  { id: 'cabin', ar: 'الكوخ الخشبي', en: 'Log cabin', logs: 8 },
  { id: 'workshop', ar: 'الورشة', en: 'Workshop', logs: 14 },
  { id: 'sawmill', ar: 'المنشرة', en: 'Sawmill', logs: 20 },
  { id: 'greenhouse', ar: 'الصوبة الزجاجية', en: 'Glass greenhouse', logs: 34 },
  { id: 'tower', ar: 'برج المراقبة', en: 'Watch tower', logs: 42 },
  { id: 'sled', ar: 'زلاجة المؤن', en: 'Supply sled', logs: 52 },
];
export const HELPER_COST = [10, 25, 45, 70];
export const BAG_UPGRADE = [15, 35];
const BAG0 = 4;

export class Camp {
  /** opts: { easy, seed } */
  constructor(opts = {}) {
    this.rand = rng(opts.seed ?? 9);
    this.easy = !!opts.easy;
    this.me = { x: FIRE.x, y: FIRE.y + 3, vx: 0, vy: 0, face: 1, swing: 0, bag: 0, chop: null, cold: 1 };
    this.bagMax = BAG0;
    this.coins = 0;
    this.logsTotal = 0;
    this.stage = 0; // index into BUILDS, BUILDS.length = finished
    this.progress = 0; // logs in the current build
    this.helpers = [];
    this.trees = [];
    this.fx = [];
    this.time = 0;
    this.storm = { on: false, t: 55, left: 0 };
    this.state = 'play'; // play -> gate -> done
    this.events = [];
    for (let i = 0; i < 38; i++) this._tree(true);
  }

  _tree(initial) {
    for (let k = 0; k < 20; k++) {
      const x = 3 + this.rand() * (SIZE - 6);
      const y = 3 + this.rand() * (SIZE - 6);
      if (Math.hypot(x - FIRE.x, y - FIRE.y) < 8 || Math.hypot(x - SITE.x, y - SITE.y) < 6) continue;
      if (this.trees.some((t) => Math.hypot(t.x - x, t.y - y) < 3)) continue;
      this.trees.push({ x, y, hp: 3, size: 0.8 + this.rand() * 0.5, regrow: 0, alive: true, hit: 0 });
      return;
    }
    void initial;
  }

  get bagMaxNow() { return this.bagMax; }
  get build() { return BUILDS[this.stage] || null; }
  get nextHelperCost() { return this.helpers.length < HELPER_COST.length ? HELPER_COST[this.helpers.length] : null; }
  get nextBagCost() { const n = this.bagMax - BAG0; return n < BAG_UPGRADE.length * 2 ? BAG_UPGRADE[n / 2] : null; }

  hireHelper() {
    const c = this.nextHelperCost;
    if (c === null || this.coins < c) return false;
    this.coins -= c;
    this.helpers.push({ x: FIRE.x + (this.helpers.length - 1.5), y: FIRE.y + 4, bag: 0, target: null, swing: 0, face: 1, mode: 'seek' });
    this.events.push({ type: 'hire' });
    return true;
  }

  upgradeBag() {
    const c = this.nextBagCost;
    if (c === null || this.coins < c) return false;
    this.coins -= c;
    this.bagMax += 2;
    this.events.push({ type: 'bag' });
    return true;
  }

  get cold() { return this.me.cold; }
  get warm() { return Math.hypot(this.me.x - FIRE.x, this.me.y - FIRE.y) < 7; }

  /** input: { dx, dy } direction, length 0..1 */
  step(dt, input = { dx: 0, dy: 0 }) {
    this.events = [];
    if (this.state === 'done') return this.events;
    this.time += dt;
    const me = this.me;
    // blizzard
    const st = this.storm;
    if (st.on) { st.left -= dt; if (st.left <= 0) { st.on = false; st.t = 70 + this.rand() * 30; this.events.push({ type: 'stormEnd' }); } }
    else { st.t -= dt; if (st.t <= 0) { st.on = true; st.left = this.easy ? 10 : 16; this.events.push({ type: 'storm' }); } }
    // warmth: the fire warms, the cold slowly takes it; a cabin makes it warm everywhere near the site
    const near = this.warm || (this.stage > 0 && Math.hypot(me.x - SITE.x, me.y - SITE.y) < 6);
    const rate = near ? 0.25 : -(this.easy ? 0.012 : 0.02) * (st.on ? 2.2 : 1);
    me.cold = clamp(me.cold + rate * dt, 0, 1);
    const slow = me.cold < 0.25 ? 0.6 : 1;
    // walking
    const len = Math.hypot(input.dx, input.dy);
    const sp = (me.bag > 0 ? 6.4 - me.bag * 0.15 : 6.4) * slow * (me.swing > 0 ? 0.3 : 1);
    if (len > 0.05) { me.vx = (input.dx / Math.max(1, len)) * sp; me.vy = (input.dy / Math.max(1, len)) * sp; if (Math.abs(input.dx) > 0.1) me.face = Math.sign(input.dx); } else { me.vx = 0; me.vy = 0; }
    me.x = clamp(me.x + me.vx * dt, 1, SIZE - 1);
    me.y = clamp(me.y + me.vy * dt, 1, SIZE - 1);
    // chopping the nearest tree in reach while the bag has room
    this._chop(me, dt, true);
    // the building site takes the logs
    this._deliver(me, true);
    // helpers
    for (const hp of this.helpers) this._helper(hp, dt);
    // trees grow back
    for (const t of this.trees) {
      if (!t.alive) { t.regrow -= dt; if (t.regrow <= 0) { t.alive = true; t.hp = 3; this.events.push({ type: 'regrow' }); } }
      if (t.hit > 0) t.hit -= dt;
    }
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
    if (this.state === 'gate') { this.gateT = (this.gateT || 0) + dt; if (this.gateT > 3) { this.state = 'done'; this.events.push({ type: 'done' }); } }
    return this.events;
  }

  _chop(who, dt, isMe) {
    const cap = isMe ? this.bagMax : 3;
    if (who.swing > 0) {
      who.swing -= dt;
      if (who.swing <= 0 && who.chop) {
        const t = who.chop;
        who.chop = null;
        if (t.alive && Math.hypot(t.x - who.x, t.y - who.y) < 2.6) {
          t.hp -= 1;
          t.hit = 0.25;
          this.events.push({ type: 'chop', x: t.x, y: t.y, me: isMe });
          if (t.hp <= 0) {
            t.alive = false;
            t.regrow = 20 + this.rand() * 12;
            who.bag = Math.min(cap, who.bag + (t.size > 1.1 ? 2 : 1) + (this.stage >= 2 ? 1 : 0));
            this.events.push({ type: 'log', x: t.x, y: t.y, me: isMe });
          }
        }
      }
      return;
    }
    if (who.bag >= cap) return;
    let best = null;
    let bd = 2.2;
    for (const t of this.trees) {
      if (!t.alive) continue;
      const d = Math.hypot(t.x - who.x, t.y - who.y);
      if (d < bd) { bd = d; best = t; }
    }
    if (best) { who.chop = best; who.swing = this.stage >= 1 ? 0.3 : 0.45; if (best.x !== who.x) who.face = Math.sign(best.x - who.x) || 1; }
  }

  _deliver(who, isMe) {
    if (this.stage >= BUILDS.length || who.bag <= 0) return;
    if (Math.hypot(who.x - SITE.x, who.y - SITE.y) > SITE.r) return;
    const b = BUILDS[this.stage];
    const n = Math.min(who.bag, b.logs - this.progress);
    who.bag -= n;
    this.progress += n;
    this.coins += n;
    this.logsTotal += n;
    this.events.push({ type: 'drop', n, me: isMe });
    if (this.progress >= b.logs) {
      this.events.push({ type: 'built', id: b.id });
      this.stage += 1;
      this.progress = 0;
      if (this.stage >= BUILDS.length) { this.state = 'gate'; this.gateT = 0; this.events.push({ type: 'gate' }); }
    }
  }

  _helper(hp, dt) {
    const speed = 5 * dt;
    const go = (tx, ty) => {
      const d = Math.hypot(tx - hp.x, ty - hp.y);
      if (d > 0.01) { hp.x += ((tx - hp.x) / d) * Math.min(d, speed); hp.y += ((ty - hp.y) / d) * Math.min(d, speed); if (Math.abs(tx - hp.x) > 0.05) hp.face = Math.sign(tx - hp.x); }
      return d;
    };
    if (hp.swing > 0) { this._chop(hp, dt, false); return; }
    if (hp.bag >= 3 || (hp.bag > 0 && hp.mode === 'carry')) {
      hp.mode = 'carry';
      if (go(SITE.x + (hp.x < SITE.x ? -1 : 1), SITE.y + 1) < 1.2) this._deliver(hp, false);
      if (hp.bag === 0) hp.mode = 'seek';
      return;
    }
    if (!hp.target || !hp.target.alive) {
      hp.target = null;
      let bd = 1e9;
      for (const t of this.trees) {
        if (!t.alive) continue;
        const d = Math.hypot(t.x - hp.x, t.y - hp.y);
        if (d < bd && !this.helpers.some((o) => o !== hp && o.target === t)) { bd = d; hp.target = t; }
      }
      if (!hp.target && hp.bag > 0) hp.mode = 'carry';
    }
    if (hp.target) {
      if (go(hp.target.x, hp.target.y) < 1.8) this._chop(hp, dt, false);
    }
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { best: Math.max(0, Math.floor(Number(o.best)) || 0), finished: Math.max(0, Math.floor(Number(o.finished)) || 0), muted: !!o.muted };
}
