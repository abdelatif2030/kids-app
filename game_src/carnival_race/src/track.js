// The road as numbers: a closed Catmull-Rom curve sampled into short steps. Every car lives in "track space"
// (s = metres along the lap, x = metres sideways, h = metres above the road), and the frame at s turns that into a
// world position. Loops work because the road's up direction comes from the track data, not from world up.
import { CatmullRomCurve3, Vector3 } from 'three';

const _v = new Vector3();

export class TrackPath {
  constructor(def, step = 1.0) {
    this.def = def;
    this.width = def.width;
    const pts = def.points.map((c) => new Vector3(c.p[0], c.p[1], c.p[2]));
    const ups = def.points.map((c) => (c.up ? new Vector3(...c.up).normalize() : new Vector3(0, 1, 0)));
    this.curve = new CatmullRomCurve3(pts, true, 'centripetal', 0.5);
    const n = pts.length;

    // Dense samples by curve parameter, then resample by arc length every `step` metres.
    const dense = Math.max(400, n * 60);
    const dp = [];
    const du = [];
    let len = 0;
    const dist = [0];
    for (let i = 0; i <= dense; i++) {
      const t = i / dense;
      const p = this.curve.getPoint(t);
      // up hint: blend the up of the two control points around this parameter
      const f = t * n;
      const i0 = Math.floor(f) % n;
      const i1 = (i0 + 1) % n;
      const k = f - Math.floor(f);
      const smooth = k * k * (3 - 2 * k);
      const u = ups[i0].clone().lerp(ups[i1], smooth).normalize();
      if (i > 0) {
        len += p.distanceTo(dp[i - 1]);
        dist.push(len);
      }
      dp.push(p);
      du.push(u);
    }
    this.length = len;
    const count = Math.max(64, Math.round(len / step));
    this.count = count;
    this.step = len / count;
    this.pos = new Float32Array(count * 3);
    this.tan = new Float32Array(count * 3);
    this.up = new Float32Array(count * 3);
    this.right = new Float32Array(count * 3);
    this.curv = new Float32Array(count); // signed sideways curvature: + turns right
    let j = 0;
    const P = [];
    const U = [];
    for (let i = 0; i < count; i++) {
      const s = i * this.step;
      while (j < dist.length - 2 && dist[j + 1] < s) j++;
      const seg = dist[j + 1] - dist[j] || 1;
      const k = (s - dist[j]) / seg;
      P.push(dp[j].clone().lerp(dp[j + 1], k));
      U.push(du[j].clone().lerp(du[j + 1], k).normalize());
    }
    const T = [];
    for (let i = 0; i < count; i++) {
      const a = P[(i - 1 + count) % count];
      const b = P[(i + 1) % count];
      T.push(b.clone().sub(a).normalize());
    }
    for (let i = 0; i < count; i++) {
      const t = T[i];
      // make up perpendicular to the tangent
      const u = U[i].clone().addScaledVector(t, -U[i].dot(t)).normalize();
      // right = t x u: with the camera looking along +t, this points to the screen's right
      const r = new Vector3().crossVectors(t, u).normalize();
      P[i].toArray(this.pos, i * 3);
      t.toArray(this.tan, i * 3);
      u.toArray(this.up, i * 3);
      r.toArray(this.right, i * 3);
    }
    for (let i = 0; i < count; i++) {
      const tPrev = new Vector3().fromArray(this.tan, ((i - 2 + count) % count) * 3);
      const tNext = new Vector3().fromArray(this.tan, ((i + 2) % count) * 3);
      const r = new Vector3().fromArray(this.right, i * 3);
      this.curv[i] = tNext.sub(tPrev).dot(r) / (4 * this.step);
    }
    // smooth curvature a little so AI and drift do not jitter
    const c2 = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      let sum = 0;
      for (let d = -4; d <= 4; d++) sum += this.curv[(i + d + count) % count];
      c2[i] = sum / 9;
    }
    this.curv = c2;
  }

  wrap(s) {
    const L = this.length;
    return ((s % L) + L) % L;
  }

  _idx(s) {
    const f = this.wrap(s) / this.step;
    const i0 = Math.floor(f) % this.count;
    return [i0, (i0 + 1) % this.count, f - Math.floor(f)];
  }

  _lerp(arr, s, out) {
    const [a, b, k] = this._idx(s);
    out.set(
      arr[a * 3] + (arr[b * 3] - arr[a * 3]) * k,
      arr[a * 3 + 1] + (arr[b * 3 + 1] - arr[a * 3 + 1]) * k,
      arr[a * 3 + 2] + (arr[b * 3 + 2] - arr[a * 3 + 2]) * k,
    );
    return out;
  }

  point(s, out = new Vector3()) { return this._lerp(this.pos, s, out); }
  tangent(s, out = new Vector3()) { return this._lerp(this.tan, s, out).normalize(); }
  upAt(s, out = new Vector3()) { return this._lerp(this.up, s, out).normalize(); }
  rightAt(s, out = new Vector3()) { return this._lerp(this.right, s, out).normalize(); }
  curvature(s) {
    const [a, b, k] = this._idx(s);
    return this.curv[a] + (this.curv[b] - this.curv[a]) * k;
  }

  /** World position of track-space (s, x, h). */
  world(s, x, h, out = new Vector3()) {
    this.point(s, out);
    out.addScaledVector(this.rightAt(s, _v), x);
    out.addScaledVector(this.upAt(s, _v), h);
    return out;
  }

  /** Is the road here part of a loop or steep bank (up far from world up)? */
  isInverted(s) {
    return this.upAt(s, _v).y < 0.5;
  }
}
