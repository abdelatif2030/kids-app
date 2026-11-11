// The chase with no drawing. The plush dino and the animals walk the decks, bridges, ramps and slides, fall off edges
// (softly), bounce on mushrooms; whoever wears the golden tail when the clock reaches zero wins the round. The dino
// grabs with the GRAB button (automatic for the youngest), the animals grab when they reach the tail. They find their
// way with a small walking graph; only the dino can jump (over the broken bridge, onto the low deck, off a deck).
import { GROUND_R, G, PLATFORMS, MUSHROOMS, TRUNKS, LEVELS, RIVALS, floorAt, buildGraph, distancesTo } from './data.js';

const PLAYER_SPEED = 5.2;
const JUMP_V = 8.8;
const SLIDE_SPEED = 10;
const GRAB_R = 1.6;
const P = Object.fromEntries(PLATFORMS.map((p) => [p.id, p]));

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

let GRAPH = null;
let DIST = null;
function graph() {
  if (!GRAPH) {
    GRAPH = buildGraph();
    DIST = GRAPH.map((n) => distancesTo(GRAPH, n.i));
  }
  return { nodes: GRAPH, dist: DIST };
}

export class Chase {
  /** opts: { level (0..5), easy, seed } */
  constructor(opts = {}) {
    this.level = LEVELS[opts.level ?? 0];
    this.easy = !!opts.easy;
    this.rand = rng(opts.seed ?? 9);
    const { nodes, dist } = graph();
    this.nodes = nodes;
    this.dist = dist;
    this.timeLeft = this.level.time;
    this.time = 0;
    this.state = 'ready'; // ready (3-2-1) -> play -> over
    this.readyT = 3;
    this.events = [];
    this.player = this._ent(0, 'dino', 0, P.p0.y, 1.5, PLAYER_SPEED);
    this.player.isPlayer = true;
    this.rivals = [];
    const spots = ['p1', 'p2', 'p4', 'p3', 'p5'];
    for (let i = 0; i < this.level.rivals; i++) {
      const r = RIVALS[i];
      const p = P[spots[i]];
      const sp = this.level.speed * (this.easy ? 0.8 : 1) * (0.96 + this.rand() * 0.08);
      const e = this._ent(i + 1, r.kind, p.x, p.y, p.z, sp);
      e.name = r;
      e.think = this.rand();
      this.rivals.push(e);
    }
    this.all = [this.player, ...this.rivals];
    this.holder = this.rivals[Math.floor(this.rand() * this.rivals.length)];
    this.holder.immune = 1;
    this.held = 0; // seconds the dino wore the tail
    this.lost = 0; // times the tail was taken from the dino
    this.grabs = 0;
  }

  _ent(id, kind, x, y, z, speed) {
    return { id, kind, x, y, z, vy: 0, grounded: true, face: 0, moving: 0, stun: 0, immune: 0, grabCd: 0, reach: 0, speed, launch: null, next: -1, goal: -1, repick: 0, surf: null, sliding: false };
  }

  get youWin() { return this.holder === this.player; }

  // ---- input from the dino --------------------------------------------------------------------------------------------

  jump() {
    const p = this.player;
    if (this.state !== 'play' || !p.grounded || p.stun > 0) return false;
    p.vy = JUMP_V;
    p.grounded = false;
    this.events.push({ type: 'jump', who: 0 });
    return true;
  }

  grab() {
    const p = this.player;
    if (this.state !== 'play' || p.grabCd > 0 || p.stun > 0 || this.holder === p) return false;
    p.grabCd = 0.35;
    if (this._canGrab(p, this.holder, GRAB_R)) { this._steal(p); return true; }
    this.events.push({ type: 'whiff' });
    return false;
  }

  _canGrab(a, h, r) {
    return h.immune <= 0 && Math.hypot(a.x - h.x, a.z - h.z) < r && Math.abs(a.y - h.y) < 1.4;
  }

  _steal(by) {
    const from = this.holder;
    from.stun = 0.9;
    from.immune = 0;
    by.immune = 1.6;
    by.grabCd = 0.5;
    this.holder = by;
    if (from === this.player) this.lost++;
    if (by === this.player) this.grabs++;
    // everybody else waits a moment before trying again
    for (const r of this.rivals) if (r !== by) r.grabCd = Math.max(r.grabCd, 0.5);
    this.events.push({ type: 'steal', by: by.id, from: from.id, x: by.x, y: by.y, z: by.z });
  }

  // ---- a step ----------------------------------------------------------------------------------------------------------

  step(dt, input = { x: 0, z: 0 }) {
    this.events = [];
    if (this.state === 'over') return this.events;
    this.time += dt;
    if (this.state === 'ready') {
      const before = Math.ceil(this.readyT);
      this.readyT -= dt;
      if (Math.ceil(this.readyT) !== before && this.readyT > 0) this.events.push({ type: 'count', n: Math.ceil(this.readyT) });
      if (this.readyT <= 0) { this.state = 'play'; this.events.push({ type: 'go' }); }
      return this.events;
    }
    const before = Math.ceil(this.timeLeft);
    this.timeLeft -= dt;
    if (Math.ceil(this.timeLeft) !== before && this.timeLeft <= 10 && this.timeLeft > 0) this.events.push({ type: 'tick', n: Math.ceil(this.timeLeft) });
    if (this.holder === this.player) this.held += dt;
    for (const e of this.all) {
      e.stun = Math.max(0, e.stun - dt);
      e.immune = Math.max(0, e.immune - dt);
      e.grabCd = Math.max(0, e.grabCd - dt);
    }
    // the dino
    let { x, z } = input;
    const l = Math.hypot(x, z);
    if (l > 1) { x /= l; z /= l; }
    this._move(this.player, x, z, this.player.speed, dt);
    if (this.easy && this.holder !== this.player && this._canGrab(this.player, this.holder, GRAB_R * 0.8)) this._steal(this.player);
    // the animals
    for (const r of this.rivals) this._brain(r, dt);
    // animals grab when they reach the tail (after a short reaction)
    for (const r of this.rivals) {
      if (this.holder === r || r.stun > 0 || r.grabCd > 0) { r.reach = 0; continue; }
      if (this._canGrab(r, this.holder, 1.15)) {
        r.reach += dt;
        if (r.reach > (this.easy ? 0.45 : 0.25)) { r.reach = 0; this._steal(r); }
      } else r.reach = 0;
    }
    this._separate();
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.state = 'over';
      this.events.push({ type: 'over', win: this.youWin });
    }
    return this.events;
  }

  /** 1 star for winning, +1 for wearing the tail at least 40% of the round, +1 if it was taken at most twice. */
  get result() {
    const win = this.youWin;
    return { win, stars: win ? 1 + (this.held >= this.level.time * 0.4 ? 1 : 0) + (this.lost <= 2 ? 1 : 0) : 0, held: this.held, lost: this.lost, grabs: this.grabs };
  }

  // ---- moving on the playground -------------------------------------------------------------------------------------

  _move(e, dx, dz, speed, dt) {
    if (e.stun > 0) { dx = 0; dz = 0; }
    const l = Math.hypot(dx, dz);
    e.moving = Math.min(1, l);
    let vx = dx * speed;
    let vz = dz * speed;
    const s = e.grounded ? e.surf : null;
    e.sliding = !!(s && s.kind === 'slide');
    if (e.sliding) {
      // a slide carries you down
      const sx = s.bx - s.ax;
      const sz = s.bz - s.az;
      const sl = Math.hypot(sx, sz);
      vx = (sx / sl) * SLIDE_SPEED + vx * 0.2;
      vz = (sz / sl) * SLIDE_SPEED + vz * 0.2;
      e.moving = 1;
    }
    if (e.launch) { vx = e.launch.vx; vz = e.launch.vz; }
    if (Math.hypot(vx, vz) > 0.3) e.face = Math.atan2(vx, vz);
    const ox = e.x;
    const oz = e.z;
    e.x += vx * dt;
    e.z += vz * dt;
    // rope rails on bridges and slides
    if (s && s.rails) {
      const vxs = s.bx - s.ax;
      const vzs = s.bz - s.az;
      const L = Math.hypot(vxs, vzs);
      const t = ((e.x - s.ax) * vxs + (e.z - s.az) * vzs) / (L * L);
      const side = ((e.x - s.ax) * vzs - (e.z - s.az) * vxs) / L;
      const lim = s.w / 2 - 0.25;
      if (t > 0.04 && t < 0.96 && Math.abs(side) > lim) {
        const fix = (Math.abs(side) - lim) * Math.sign(side);
        e.x -= (vzs / L) * fix;
        e.z += (vxs / L) * fix;
      }
    }
    // tree trunks below the decks
    for (const tr of TRUNKS) {
      if (e.y > tr.top) continue;
      const d = Math.hypot(e.x - tr.x, e.z - tr.z);
      const min = tr.r + 0.35;
      if (d < min) { e.x = tr.x + ((e.x - tr.x) / (d || 1)) * min; e.z = tr.z + ((e.z - tr.z) / (d || 1)) * min; }
    }
    const r = Math.hypot(e.x, e.z);
    if (r > GROUND_R - 0.6) { e.x *= (GROUND_R - 0.6) / r; e.z *= (GROUND_R - 0.6) / r; }
    void ox; void oz;
    // up and down
    const f = floorAt(e.x, e.z, e.y);
    if (e.grounded && e.y - f.y <= 0.55 && e.vy <= 0) {
      e.y = f.y;
      e.surf = f.surf;
    } else {
      if (e.grounded) { e.grounded = false; e.vy = Math.min(e.vy, 0); }
      e.vy -= G * dt;
      e.y += e.vy * dt;
      const f2 = floorAt(e.x, e.z, Math.max(e.y, f.y));
      if (e.vy <= 0 && e.y <= f2.y) {
        const fell = -e.vy;
        e.y = f2.y;
        e.vy = 0;
        e.grounded = true;
        e.surf = f2.surf;
        e.launch = null;
        e.next = -1;
        this.events.push({ type: 'land', who: e.id, hard: fell > 9 });
      }
    }
    // mushrooms throw you up onto a deck
    if (e.grounded && e.y < 0.05) {
      for (const m of MUSHROOMS) {
        if (Math.hypot(e.x - m.x, e.z - m.z) < m.r) {
          const t = P[m.to];
          const vy = Math.sqrt(2 * G * (t.y + 2.2));
          const T = vy / G + Math.sqrt((2 * 2.2) / G);
          e.vy = vy;
          e.grounded = false;
          e.launch = { vx: (t.x - e.x) / T, vz: (t.z - e.z) / T };
          e.next = -1;
          this.events.push({ type: 'bounce', who: e.id, x: m.x, z: m.z });
          break;
        }
      }
    }
  }

  _separate() {
    const a = this.all;
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        const p = a[i];
        const q = a[j];
        if (Math.abs(p.y - q.y) > 1) continue;
        const dx = q.x - p.x;
        const dz = q.z - p.z;
        const d = Math.hypot(dx, dz) || 0.01;
        if (d < 0.8) {
          const push = (0.8 - d) / 2;
          p.x -= (dx / d) * push; p.z -= (dz / d) * push;
          q.x += (dx / d) * push; q.z += (dz / d) * push;
        }
      }
    }
  }

  // ---- the animals' brains ----------------------------------------------------------------------------------------

  /** The graph node nearest to a spot at the same level. */
  nodeNear(e) {
    let best = 0;
    let bd = Infinity;
    for (const n of this.nodes) {
      const d = Math.hypot(n.x - e.x, n.z - e.z) + Math.abs(n.y - e.y) * 4;
      if (d < bd) { bd = d; best = n.i; }
    }
    return best;
  }

  _brain(r, dt) {
    if (r.stun > 0 || !r.grounded) { this._move(r, 0, 0, r.speed, dt); return; }
    const h = this.holder;
    let tx;
    let tz;
    const mine = h === r;
    const speed = r.speed * (mine ? 0.9 : 1);
    if (!mine && Math.hypot(h.x - r.x, h.z - r.z) < 3.5 && Math.abs(h.y - r.y) < 0.6) {
      tx = h.x; tz = h.z; // close: straight at the tail
      r.next = -1;
    } else {
      r.repick -= dt;
      if (mine) {
        // run away: pick a place far (by walking) from the dino and the others; think again sooner when it is near
        const near = Math.hypot(this.player.x - r.x, this.player.z - r.z) < 7;
        if (near && r.repick > 0.8) r.repick = 0.8;
        if (r.goal < 0 || r.repick <= 0) {
          const from = this.nodeNear(this.player);
          let best = 0;
          let bs = -Infinity;
          for (const n of this.nodes) {
            const score = this.dist[from][n.i] - 0.35 * this.dist[n.i][this.nodeNear(r)] + this.rand() * 4;
            if (Number.isFinite(score) && score > bs) { bs = score; best = n.i; }
          }
          r.goal = best;
          r.repick = 2 + this.rand();
          r.next = -1;
        }
      } else if (r.goal < 0 || r.repick <= 0) {
        r.goal = this.nodeNear(h);
        r.repick = 0.6;
      }
      if (r.next < 0) r.next = this.nodeNear(r);
      const n = this.nodes[r.next];
      if (Math.hypot(n.x - r.x, n.z - r.z) < 0.5 && Math.abs(n.y - r.y) < 0.7) {
        // here: take the edge that leads best towards the goal
        const dist = this.dist[r.goal];
        let best = -1;
        let bc = Infinity;
        for (const ed of n.out) {
          const c = ed.d + dist[ed.to];
          if (c < bc) { bc = c; best = ed.to; }
        }
        if (n.i === r.goal || bc > dist[n.i] + 0.01) best = -1;
        if (best < 0) {
          // at the goal (or stuck): when fleeing, choose again soon
          if (mine) r.repick = 0;
          tx = mine ? r.x + (r.x - this.player.x) : h.x;
          tz = mine ? r.z + (r.z - this.player.z) : h.z;
        } else {
          r.next = best;
          tx = this.nodes[best].x;
          tz = this.nodes[best].z;
        }
      } else {
        tx = n.x;
        tz = n.z;
      }
    }
    const dx = tx - r.x;
    const dz = tz - r.z;
    const l = Math.hypot(dx, dz);
    if (l < 0.05) this._move(r, 0, 0, speed, dt);
    else this._move(r, dx / l, dz / l, speed, dt);
  }
}

export { LEVELS };
