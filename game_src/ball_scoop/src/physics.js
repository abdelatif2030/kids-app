// Real ball physics for the visible pile (pure JS, no three.js, runs in node tests too).
// Spheres with gravity, collision with the ground height field, the truck's shovel (rigid boxes that move, tilt and
// pitch with the truck), static boxes (the bank pit) and each other (spatial hash). World = three.js world space.
export const R = 0.15;
const D = 2 * R;
export const G = 20;
const CELL = 0.4;
const GX = 48, GY = 30, GZ = 48;
const MAXPAIRS = 24000;

/** The shovel: rigid boxes in truck-local space (x lateral, y up, z forward). grp = tilts when the bucket dumps. */
export const TUB = { pivotY: 0.42, pivotZ: 3.1 };
export function tubBoxes(W) {
  const out = tubBoxes0(W);
  for (const b of out) { b.cb = Math.cos(b.pitch); b.sb = Math.sin(b.pitch); }
  return out;
}
function tubBoxes0(W) {
  const hw = W / 2;
  const a = Math.atan2(0.42, 0.85);
  return [
    { n: 'back', c: [0, 1.4, 0.75], h: [hw + 0.2, 1.4, 0.2], pitch: 0, grp: true },
    { n: 'floor', c: [0, 0.32, 2.0], h: [hw, 0.1, 1.1], pitch: 0, grp: true },
    { n: 'lip', c: [0, 0.15, 3.525], h: [hw, 0.06, 0.475], pitch: a, grp: true },
    { n: 'left', c: [hw + 0.12, 0.95, 2.325], h: [0.15, 0.95, 1.625], pitch: 0, grp: true },
    { n: 'right', c: [-hw - 0.12, 0.95, 2.325], h: [0.15, 0.95, 1.625], pitch: 0, grp: true },
    { n: 'cab', c: [0, 0.85, -0.6], h: [1.0, 0.85, 1.3], pitch: 0, grp: false },
  ];
}

export class BallWorld {
  constructor(max = 900) {
    this.max = max;
    this.state = new Uint8Array(max); // 0 free, 1 carried, 2 debris
    this.x = new Float32Array(max); this.y = new Float32Array(max); this.z = new Float32Array(max);
    this.vx = new Float32Array(max); this.vy = new Float32Array(max); this.vz = new Float32Array(max);
    this.col = new Uint8Array(max);
    this.life = new Float32Array(max);
    this.pull = new Float32Array(max);
    this.free = new Int32Array(max); this.freeN = 0;
    for (let i = max - 1; i >= 0; i--) this.free[this.freeN++] = i;
    this.head = new Int32Array(GX * GY * GZ).fill(-1);
    this.nxt = new Int32Array(max);
    this.ic = new Int16Array(max * 3);
    this.pairs = new Int32Array(MAXPAIRS * 2); this.np = 0;
    this.T = { x: 0, y: 0, z: 0, yaw: 0, pitch: 0, tilt: 0, tiltRate: 0, W: 3, vx: 0, vy: 0, vz: 0, magnet: 0 };
    this.boxes = tubBoxes(3);
    this.ground = () => 0;
    this.statics = []; // world AABBs {a:[minx,miny,minz], b:[maxx,maxy,maxz]}
    this.contactGround = new Uint8Array(max);
    this.tmp = { nx: 0, ny: 0, nz: 0, pen: 0 };
  }

  setTruck(t) {
    const T = this.T;
    if (t.W !== T.W) this.boxes = tubBoxes(t.W);
    Object.assign(T, t);
    T.cy = Math.cos(T.yaw); T.sy = Math.sin(T.yaw);
    T.cp = Math.cos(T.pitch); T.sp = Math.sin(T.pitch);
    T.ct = Math.cos(T.tilt); T.st = Math.sin(T.tilt);
  }

  get live() { return this.max - this.freeN; }

  spawn(x, y, z, vx, vy, vz, col, st = 1) {
    if (!this.freeN) return -1;
    const i = this.free[--this.freeN];
    this.state[i] = st; this.x[i] = x; this.y[i] = y; this.z[i] = z; this.vx[i] = vx; this.vy[i] = vy; this.vz[i] = vz;
    this.col[i] = col; this.life[i] = 0; this.pull[i] = 0;
    return i;
  }

  kill(i) { if (!this.state[i]) return; this.state[i] = 0; this.free[this.freeN++] = i; }

  step(dt) {
    const sub = Math.max(1, Math.min(6, Math.ceil(dt / 0.0085)));
    const h = dt / sub;
    for (let s = 0; s < sub; s++) this._sub(h);
  }

  _sub(h) {
    const { x, y, z, vx, vy, vz, state, T } = this;
    for (let i = 0; i < this.max; i++) {
      const st = state[i];
      if (!st) continue;
      if (this.pull[i] > 0) { this.pull[i] -= h; vx[i] += (T.x - x[i]) * (10 + T.magnet * 7) * h + (T.vx - vx[i]) * Math.min(1, 12 * h); vz[i] += (T.vz * 0.9 - vz[i]) * Math.min(1, 4 * h); }
      vy[i] -= G * h;
      const k = 1 - 0.25 * h; vx[i] *= k; vy[i] *= k; vz[i] *= k;
      x[i] += vx[i] * h; y[i] += vy[i] * h; z[i] += vz[i] * h;
      if (st === 2) this.life[i] += h;
    }
    this._findPairs();
    for (let it = 0; it < 2; it++) {
      this._resolvePairs();
      for (let i = 0; i < this.max; i++) if (state[i]) this._collide(i, h);
    }
    // gentle settling: slow carried balls that touch the ground or others lose a little speed
    for (let i = 0; i < this.max; i++) if (state[i] === 1 && this.contactGround[i]) { const f = 1 - 2.2 * h; vx[i] *= f; vz[i] *= f; }
  }

  _findPairs() {
    const { x, y, z, state, head, nxt, T } = this;
    head.fill(-1);
    const ox = T.x - GX * CELL / 2, oy = T.y - 6.8, oz = T.z - GZ * CELL / 2 + 4;
    this._o = [ox, oy, oz];
    const idx = this._idx || (this._idx = new Int32Array(this.max));
    const ic = this.ic;
    for (let i = 0; i < this.max; i++) {
      idx[i] = -1;
      if (state[i] !== 1) continue;
      const cx = Math.floor((x[i] - ox) / CELL), cy = Math.floor((y[i] - oy) / CELL), cz = Math.floor((z[i] - oz) / CELL);
      if (cx < 0 || cy < 0 || cz < 0 || cx >= GX || cy >= GY || cz >= GZ) continue;
      const c = (cy * GZ + cz) * GX + cx;
      idx[i] = c; ic[i * 3] = cx; ic[i * 3 + 1] = cy; ic[i * 3 + 2] = cz; nxt[i] = head[c]; head[c] = i;
    }
    let np = 0;
    const lim = (D + 0.06) * (D + 0.06);
    const pairs = this.pairs;
    for (let i = 0; i < this.max; i++) {
      const c = idx[i];
      if (c < 0) continue;
      const cx = ic[i * 3], cy = ic[i * 3 + 1], cz = ic[i * 3 + 2];
      for (let dy = -1; dy <= 1; dy++) {
        const yy = cy + dy; if (yy < 0 || yy >= GY) continue;
        for (let dz = -1; dz <= 1; dz++) {
          const zz = cz + dz; if (zz < 0 || zz >= GZ) continue;
          for (let dx = -1; dx <= 1; dx++) {
            const xx = cx + dx; if (xx < 0 || xx >= GX) continue;
            for (let j = head[(yy * GZ + zz) * GX + xx]; j >= 0; j = nxt[j]) {
              if (j <= i) continue;
              const ax = x[j] - x[i], ay = y[j] - y[i], az = z[j] - z[i];
              if (ax * ax + ay * ay + az * az < lim && np < MAXPAIRS) { pairs[np * 2] = i; pairs[np * 2 + 1] = j; np++; }
            }
          }
        }
      }
    }
    this.np = np;
  }

  _resolvePairs() {
    const { x, y, z, vx, vy, vz, pairs } = this;
    for (let p = 0; p < this.np; p++) {
      const i = pairs[p * 2], j = pairs[p * 2 + 1];
      let dx = x[j] - x[i], dy = y[j] - y[i], dz = z[j] - z[i];
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 >= D * D) continue;
      let d = Math.sqrt(d2);
      if (d < 1e-5) { dx = 0; dy = 1; dz = 0; d = 1e-5; } else { dx /= d; dy /= d; dz /= d; }
      const pen = (D - d) * 0.5 * 0.85;
      x[i] -= dx * pen; y[i] -= dy * pen; z[i] -= dz * pen;
      x[j] += dx * pen; y[j] += dy * pen; z[j] += dz * pen;
      const rvx = vx[j] - vx[i], rvy = vy[j] - vy[i], rvz = vz[j] - vz[i];
      const vn = rvx * dx + rvy * dy + rvz * dz;
      if (vn < 0) { const im = -vn * 0.5 * 1.08; vx[i] -= dx * im; vy[i] -= dy * im; vz[i] -= dz * im; vx[j] += dx * im; vy[j] += dy * im; vz[j] += dz * im; }
      const k = 0.02; // viscous friction between balls: the pile heaps up instead of flowing like water
      vx[i] += rvx * k; vy[i] += rvy * k; vz[i] += rvz * k; vx[j] -= rvx * k; vy[j] -= rvy * k; vz[j] -= rvz * k;
    }
  }

  _bounce(i, nx, ny, nz, cvx, cvy, cvz, h, fr) {
    const { vx, vy, vz } = this;
    const rx = vx[i] - cvx, ry = vy[i] - cvy, rz = vz[i] - cvz;
    const vn = rx * nx + ry * ny + rz * nz;
    if (vn < 0) {
      const e = vn < -3 ? 0.32 : 0;
      const m = -(1 + e) * vn;
      vx[i] += nx * m; vy[i] += ny * m; vz[i] += nz * m;
      const f = Math.min(1, fr * h);
      const tx = rx - vn * nx, ty = ry - vn * ny, tz = rz - vn * nz;
      vx[i] -= tx * f; vy[i] -= ty * f; vz[i] -= tz * f;
    }
  }

  _collide(i, h) {
    const { x, y, z, state, T } = this;
    this.contactGround[i] = 0;
    // ground
    const gh = this.ground(x[i], z[i]);
    if (y[i] - R < gh) {
      const e = 0.2;
      const s = (this.ground(x[i], z[i] + e) - this.ground(x[i], z[i] - e)) / (2 * e);
      const sc = Math.max(-1.5, Math.min(1.5, s));
      const inv = 1 / Math.sqrt(1 + sc * sc);
      y[i] = gh + R;
      this._bounce(i, 0, inv, -sc * inv, 0, 0, 0, h, 0);
      this.contactGround[i] = 1;
    }
    // statics
    for (const s of this.statics) {
      const qx = Math.max(s.a[0], Math.min(s.b[0], x[i])), qy = Math.max(s.a[1], Math.min(s.b[1], y[i])), qz = Math.max(s.a[2], Math.min(s.b[2], z[i]));
      let dx = x[i] - qx, dy = y[i] - qy, dz = z[i] - qz;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 >= R * R) continue;
      if (d2 > 1e-9) { const d = Math.sqrt(d2); dx /= d; dy /= d; dz /= d; x[i] += dx * (R - d); y[i] += dy * (R - d); z[i] += dz * (R - d); }
      else {
        const m = [x[i] - s.a[0], s.b[0] - x[i], y[i] - s.a[1], s.b[1] - y[i], z[i] - s.a[2], s.b[2] - z[i]];
        let k = 0; for (let q = 1; q < 6; q++) if (m[q] < m[k]) k = q;
        dx = dy = dz = 0; const sg = k % 2 ? 1 : -1;
        if (k < 2) dx = sg; else if (k < 4) dy = sg; else dz = sg;
        x[i] += dx * (m[k] + R); y[i] += dy * (m[k] + R); z[i] += dz * (m[k] + R);
      }
      this._bounce(i, dx, dy, dz, 0, 0, 0, h, 3);
    }
    // truck
    this._truck(i, h);
    if (state[i] === 2 && y[i] < -30) this.kill(i);
  }

  _truck(i, h) {
    const { x, y, z, T } = this;
    let dx = x[i] - T.x, dy = y[i] - T.y, dz = z[i] - T.z;
    if (dx * dx + dz * dz > 49 || dy > 12 || dy < -8) return;
    // world -> truck (yaw), then undo the body pitch
    let lx = dx * T.cy - dz * T.sy, lz = dx * T.sy + dz * T.cy, ly = dy;
    const py = ly * T.cp + lz * T.sp, pz = lz * T.cp - ly * T.sp;
    ly = py; lz = pz;
    if (Math.abs(lx) > T.W / 2 + 1.5 || lz < -3.5 || lz > 5.6 || ly > 8 || ly < -1.2) return;
    // group-tilt frame (dump): rotate about the lip pivot
    const ry = ly - TUB.pivotY, rz = lz - TUB.pivotZ;
    const gy = TUB.pivotY + ry * T.ct + rz * T.st, gz = TUB.pivotZ + rz * T.ct - ry * T.st;
    for (const b of this.boxes) {
      let px = lx, qy = b.grp ? gy : ly, qz = b.grp ? gz : lz;
      // into the box frame
      let by = qy - b.c[1], bz = qz - b.c[2];
      const cb = b.cb, sb = b.sb;
      const ey = by * cb + bz * sb, ez = bz * cb - by * sb;
      const ex = px - b.c[0];
      const cx = Math.max(-b.h[0], Math.min(b.h[0], ex)), cy = Math.max(-b.h[1], Math.min(b.h[1], ey)), cz = Math.max(-b.h[2], Math.min(b.h[2], ez));
      let nx = ex - cx, ny = ey - cy, nz = ez - cz;
      const d2 = nx * nx + ny * ny + nz * nz;
      if (d2 >= R * R) continue;
      let pen;
      if (d2 > 1e-9) { const d = Math.sqrt(d2); nx /= d; ny /= d; nz /= d; pen = R - d; }
      else {
        const m = [b.h[0] - ex, b.h[0] + ex, b.h[1] - ey, b.h[1] + ey, b.h[2] - ez, b.h[2] + ez];
        let k = 0; for (let q = 1; q < 6; q++) if (m[q] < m[k]) k = q;
        nx = ny = nz = 0; const sg = k % 2 === 0 ? 1 : -1;
        if (k < 2) nx = sg; else if (k < 4) ny = sg; else nz = sg;
        pen = m[k] + R;
      }
      // normal back out of the box frame
      let wy = ny * cb - nz * sb, wz = nz * cb + ny * sb, wx = nx;
      if (b.grp) { const y2 = wy * T.ct - wz * T.st, z2 = wz * T.ct + wy * T.st; wy = y2; wz = z2; }
      // body pitch forward again, then yaw
      const y3 = wy * T.cp - wz * T.sp, z3 = wz * T.cp + wy * T.sp;
      const fx = wx * T.cy + z3 * T.sy, fz = -wx * T.sy + z3 * T.cy, fy = y3;
      x[i] += fx * pen; y[i] += fy * pen; z[i] += fz * pen;
      // velocity of the box at this point (truck motion + dump rotation)
      let cvx = T.vx, cvy = T.vy, cvz = T.vz;
      if (b.grp && T.tiltRate) {
        const tvy = -rz * T.tiltRate, tvz = ry * T.tiltRate;
        cvy += tvy; cvz += tvz * 1;
      }
      this._bounce(i, fx, fy, fz, cvx, cvy, cvz, h, 5);
      // refresh local coords for the next box (small moves)
      lx += 0; // positions only moved by pen; next boxes recompute from the old frame, fine for resting contacts
    }
  }

  /** Truck-local coordinates (after yaw and pitch) of a world point, for carry tests. */
  toLocal(wx, wy, wz, out) {
    const T = this.T;
    const dx = wx - T.x, dy = wy - T.y, dz = wz - T.z;
    const lx = dx * T.cy - dz * T.sy, lz = dx * T.sy + dz * T.cy;
    out[0] = lx; out[1] = dy * T.cp + lz * T.sp; out[2] = lz * T.cp - dy * T.sp;
    return out;
  }
  fromLocal(lx, ly, lz, out) {
    const T = this.T;
    const y3 = ly * T.cp - lz * T.sp, z3 = lz * T.cp + ly * T.sp;
    out[0] = T.x + lx * T.cy + z3 * T.sy; out[1] = T.y + y3; out[2] = T.z - lx * T.sy + z3 * T.cy;
    return out;
  }
}
