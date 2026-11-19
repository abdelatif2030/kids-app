// Keeps the visible physical pile and the authoritative ball count (sim.js Run.balls) in step.
//  - visible spheres = min(count, cap); each sphere stands for count / visible balls when the count is above the cap
//  - a sphere that leaves the shovel's carry volume (spills over a side, falls behind) is LOST: the count drops by its weight
//  - wall hits / minus gates / spinners eject spheres in proportion to the balls lost
//  - gates and scoops add spheres (rain from above / the pile's own balls); the finale tips them into the bank pit
import { BallWorld, R, G } from './physics.js';
import { FIN, FRONT } from './sim.js';

export const capFor = (W) => Math.min(560, Math.round(W * 100));
const PIT = FIN;

/** Heap of n balls as a stepped pyramid, points {dx, y, dz} around the pile centre (y = height of the ball centre above the ground). */
export function heapPoints(n) {
  const s = 2 * R * 1.06;
  let m = 1; while ((m * (m + 1) * (2 * m + 1)) / 6 < n) m++;
  const pts = [];
  for (let k = 0; k < m && pts.length < n; k++) {
    const side = m - k;
    for (let i = 0; i < side; i++) for (let j = 0; j < side; j++) {
      if (pts.length >= n) break;
      pts.push({ dx: (i - (side - 1) / 2) * s, dz: (j - (side - 1) / 2) * s, y: R + k * s * 0.84 });
    }
  }
  return pts;
}
export const DECOR_MAX = 45;

export class Pile {
  constructor() {
    this.w = new BallWorld(900);
    this.stats = { spilled: 0, ejected: 0, ms: 0, frames: 0, maxLive: 0 };
  }

  begin(run) {
    const w = this.w;
    for (let i = 0; i < w.max; i++) w.kill(i);
    this.run = run; this.cap = capFor(run.W);
    this.lossAcc = 0; this.spillRecent = 0; this.banked = 0; this.bankStart = 0; this.prev = null;
    w.ground = (x, z) => (z > run.zEdge && z < run.zEdge + PIT.pitLen && Math.abs(x) < PIT.pitHalf ? PIT.pitY : run.groundAt(z));
    const e = run.zEdge, ph = PIT.pitHalf, py = PIT.pitY;
    w.statics = [
      { a: [ph, py - 2, e], b: [ph + 1.2, 7, e + PIT.pitLen + 1.2] },
      { a: [-ph - 1.2, py - 2, e], b: [-ph, 7, e + PIT.pitLen + 1.2] },
      { a: [-ph - 1.2, py - 2, e + PIT.pitLen], b: [ph + 1.2, 7, e + PIT.pitLen + 1.2] },
      { a: [-ph - 1.2, py - 2, e - 3], b: [ph + 1.2, FIN.h, e - 0.02] },
    ];
    this.updateTruck(1 / 60, true);
  }

  updateTruck(dt, snap) {
    const r = this.run, T = this.w.T;
    const wx = -r.gx;
    const p = this.prev;
    let vx = 0, vy = 0, vz = snap ? r.speed : 0;
    if (p && !snap) { vx = (wx - p.x) / dt; vy = (r.y - p.y) / dt; vz = (r.z - p.z) / dt; vx = T.vx + (vx - T.vx) * 0.6; vy = T.vy + (vy - T.vy) * 0.6; }
    const yawT = vz > 1 ? Math.atan2(vx, Math.max(vz, 1)) : 0;
    const yaw = (T.yaw || 0) + (Math.max(-0.2, Math.min(0.2, yawT * 0.4)) - (T.yaw || 0)) * Math.min(1, dt * 8);
    const tilt = r.tilt || 0;
    const tr = p ? (tilt - p.tilt) / dt : 0;
    this.prev = { x: wx, y: r.y, z: r.z, tilt };
    this.w.setTruck({ x: wx, y: r.y, z: r.z, yaw, pitch: r.pitch, tilt, tiltRate: snap ? 0 : tr, W: r.W, vx, vy, vz, magnet: r.up.magnet });
  }

  get live() { let n = 0; const { state } = this.w; for (let i = 0; i < state.length; i++) if (state[i] === 1) n++; return n; }
  get weight() { const l = this.live; return l > 0 && this.run.balls > l ? this.run.balls / l : 1; }

  _local(lx, ly, lz) { const o = [0, 0, 0]; return this.w.fromLocal(lx, ly, lz, o); }
  _topY() { let m = 1; const { state, y } = this.w; for (let i = 0; i < state.length; i++) if (state[i] === 1 && y[i] > m) m = y[i]; return m; }

  _rain(n) {
    const w = this.w, T = w.T, W = T.W;
    const base = Math.min(Math.max(this._topY() - T.y, 0.9) + 0.45, 2.1);
    for (let k = 0; k < n; k++) {
      const p = this._local((Math.random() - 0.5) * (W - 0.7), base + Math.random() * 0.9, 1.5 + Math.random() * 1.4);
      w.spawn(p[0], p[1], p[2], T.vx, T.vy, T.vz, (Math.random() * 6) | 0, 1);
    }
  }

  _scoop(e, room) {
    const w = this.w, run = this.run, T = w.T, t = e.t;
    const n = Math.min(e.n, room);
    const pts = heapPoints(Math.min(e.n, DECOR_MAX));
    const cx = run.centerAt(t.z) + t.x;
    const c0 = w.toLocal(-cx, 0, t.z, [0, 0, 0])[0];
    const hwid = pts.reduce((m, p) => Math.max(m, Math.abs(p.dx)), 0);
    const room2 = Math.max(0, T.W / 2 - 0.35 - hwid);
    for (let k = 0; k < n; k++) {
      if (k < pts.length) {
        const p = pts[k];
        const wx = -(cx + p.dx), wz = t.z + p.dz;
        const q = w.toLocal(wx, w.ground(wx, wz) + p.y, wz, [0, 0, 0]);
        q[0] = (q[0] - c0) + Math.max(-room2, Math.min(room2, c0));
        const f = w.fromLocal(q[0], q[1], q[2], [0, 0, 0]);
        const i = w.spawn(f[0], f[1], f[2], T.vx, 0, T.vz * 0.7, (t.id + k) % 6, 1);
        if (i >= 0) w.pull[i] = 1.0;
      } else {
        const wx = -(cx + (Math.random() - 0.5) * 1.2), wz = t.z + (Math.random() - 0.5) * 1.2;
        const i = w.spawn(wx, 2.2 + Math.random() * 1.5, wz, T.vx * 0.3, 0, T.vz * 0.5, (Math.random() * 6) | 0, 1);
        if (i >= 0) w.pull[i] = 1.0;
      }
    }
  }

  _eject(k, power = 1) {
    const w = this.w, T = w.T;
    const idx = [];
    for (let i = 0; i < w.max; i++) if (w.state[i] === 1) idx.push(i);
    idx.sort((a, b) => w.y[b] - w.y[a]);
    k = Math.min(k, idx.length);
    for (let q = 0; q < k; q++) {
      const i = idx[q];
      w.state[i] = 2; w.life[i] = 0;
      w.vx[i] += (Math.random() - 0.5) * 11 * power; w.vy[i] += (4 + Math.random() * 5) * power; w.vz[i] += (Math.random() - 0.3) * 6 * power;
    }
    this.stats.ejected += k;
    return k;
  }

  _kick(vy, vz = 0) { const w = this.w; for (let i = 0; i < w.max; i++) if (w.state[i] === 1) { w.vy[i] += vy * (0.6 + Math.random() * 0.8); w.vz[i] += vz * (Math.random() - 0.4); } }

  /** events from Run.step, then physics, spills and reconcile. Call once per frame after run.step(dt). */
  update(dt, events) {
    const t0 = typeof performance !== 'undefined' ? performance.now() : 0;
    const run = this.run, w = this.w;
    this.updateTruck(dt);
    const live0 = this.live;
    for (const e of events) {
      if (e.type === 'scoop') this._scoop(e, Math.max(0, Math.min(run.balls, this.cap) - this.live));
      else if (e.type === 'wall' || (e.type === 'gate' && e.gained < 0)) {
        const lost = e.type === 'wall' ? e.lost : -e.gained;
        const before = e.before || run.balls + lost;
        const k = Math.max(1, Math.round(this.live * lost / Math.max(1, before)));
        this._eject(Math.min(k, this.live), e.type === 'wall' ? 1.15 : 0.8);
        if (e.type === 'wall') this._kick(3.2, 2);
      } else if (e.type === 'bump' || e.type === 'land') this._kick(e.type === 'land' ? 2.4 : 1.6);
      else if (e.type === 'jump') this._kick(1.5);
    }
    // reconcile the visible count with the authoritative one
    const target = Math.min(run.balls, this.cap);
    let live = this.live;
    if (live > target) this._eject(live - target, 0.6);
    else if (live < target && run.state === 'run') this._rain(Math.min(target - live, 10));
    w.step(dt);
    this._spills();
    for (let i = 0; i < w.max; i++) if (w.state[i] === 2 && (w.life[i] > 1.6 || w.y[i] < -20)) w.kill(i);
    const s = this.stats;
    s.frames++; s.ms += (typeof performance !== 'undefined' ? performance.now() : 0) - t0; s.maxLive = Math.max(s.maxLive, this.live);
    void live0; void G; void FRONT;
  }

  _spills() {
    const w = this.w, run = this.run, T = w.T;
    if (run.state === 'bank' || run.state === 'done') {
      let b = 0;
      for (let i = 0; i < w.max; i++) if (w.state[i] === 1 && w.z[i] > run.zEdge + 0.4) b++;
      if (run.tilt > 0.05 && !this.bankStart) this.bankStart = Math.max(1, this.live);
      this.banked = b;
      return;
    }
    const o = [0, 0, 0], half = T.W / 2 + 0.5;
    let lost = 0;
    const wt = this.weight;
    for (let i = 0; i < w.max; i++) {
      if (w.state[i] !== 1) continue;
      w.toLocal(w.x[i], w.y[i], w.z[i], o);
      if (Math.abs(o[0]) > (o[2] > 3.3 ? half + 1.4 : half) || o[2] > 8 || o[2] < -0.4 || o[1] < -0.9) { w.state[i] = 2; w.life[i] = 0.3; lost++; const rs = Math.abs(o[0]) > half ? 'side' : o[2] > 8 ? 'front' : o[2] < -0.4 ? 'back' : 'low'; this.stats[rs] = (this.stats[rs] || 0) + 1; if (this.dbg && this.dbg.length < 400) this.dbg.push([rs, +run.time.toFixed(2), ...o.map((v) => +v.toFixed(2)), +w.vx[i].toFixed(1), +w.T.vx.toFixed(1), run.balls]); }
    }
    if (lost) {
      this.lossAcc += lost * wt;
      const n = Math.floor(this.lossAcc + 1e-9);
      this.lossAcc -= n;
      run.lose(n);
      this.stats.spilled += lost; this.spillRecent += n;
    }
  }
}
