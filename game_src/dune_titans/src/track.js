// The coastal circuit: a smooth closed curve through control points, sampled every 2 m. Each sample knows its
// position, direction, curvature and distance from the start line, so the race can find where anything is on the
// track quickly. Pure maths, no drawing.

export const HALF_W = 6.5; // road half width (m)
export const WALL = HALF_W + 4; // the barriers
const STEP = 2;

// a coastal Grand Prix: long main straight by the stands, a hairpin, fast sweepers along the sea, a twisty section
const POINTS = [
  [0, 0], [120, 0], [220, 4], [278, 30], [298, 80], [282, 128], [236, 150], [178, 150], [146, 178], [150, 232],
  [126, 284], [60, 306], [-20, 300], [-92, 270], [-136, 214], [-140, 150], [-112, 104], [-118, 60], [-90, 18], [-48, 2],
];

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

export function buildTrack(reverse = false) {
  const big = POINTS.map(([x, z]) => [x * 1.3, z * 1.3]);
  const pts = reverse ? [...big].reverse() : big;
  const n = pts.length;
  // dense polyline
  const dense = [];
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    for (let k = 0; k < 40; k++) {
      const t = k / 40;
      dense.push([catmull(p0[0], p1[0], p2[0], p3[0], t), catmull(p0[1], p1[1], p2[1], p3[1], t)]);
    }
  }
  // resample evenly every STEP metres
  const xs = [];
  const zs = [];
  let carry = 0;
  xs.push(dense[0][0]);
  zs.push(dense[0][1]);
  for (let i = 1; i <= dense.length; i++) {
    const a = dense[i - 1];
    const b = dense[i % dense.length];
    let seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
    let ax = a[0];
    let az = a[1];
    while (carry + seg >= STEP) {
      const need = STEP - carry;
      const f = need / seg;
      ax += (b[0] - ax) * f;
      az += (b[1] - az) * f;
      xs.push(ax);
      zs.push(az);
      seg -= need;
      carry = 0;
    }
    carry += seg;
  }
  xs.pop();
  zs.pop();
  const N = xs.length;
  const ang = new Float64Array(N);
  const curv = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N;
    ang[i] = Math.atan2(xs[j] - xs[i], zs[j] - zs[i]); // heading: 0 = +z, like the bikes
  }
  for (let i = 0; i < N; i++) {
    let d = ang[(i + 2) % N] - ang[(i - 2 + N) % N];
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    curv[i] = d / (4 * STEP); // 1/radius, sign = turning direction
  }
  return { N, step: STEP, length: N * STEP, xs, zs, ang, curv, reverse };
}

/** Index of the sample nearest to (x, z), searching near a hint index. */
export function nearest(tr, x, z, hint = -1, span = 30) {
  let best = 0;
  let bd = Infinity;
  if (hint < 0) {
    for (let i = 0; i < tr.N; i += 1) { const d = (tr.xs[i] - x) ** 2 + (tr.zs[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  for (let k = -span; k <= span; k++) {
    const i = (hint + k + tr.N) % tr.N;
    const d = (tr.xs[i] - x) ** 2 + (tr.zs[i] - z) ** 2;
    if (d < bd) { bd = d; best = i; }
  }
  return best;
}

/** Signed sideways distance from the centre line (positive = right of the direction of travel). */
export function lateral(tr, i, x, z) {
  const a = tr.ang[i];
  const dx = x - tr.xs[i];
  const dz = z - tr.zs[i];
  // right vector of heading a (forward = (sin a, cos a)) is (cos a, -sin a)... in x/z: right = (-cos a, sin a)? use cross
  return dx * -Math.cos(a) + dz * Math.sin(a);
}

/** The world point at sample i, `side` metres to the right. */
export function pointAt(tr, i, side = 0) {
  const k = ((i % tr.N) + tr.N) % tr.N;
  const a = tr.ang[k];
  return { x: tr.xs[k] - Math.cos(a) * side, z: tr.zs[k] + Math.sin(a) * side, a };
}

/** The tightest curvature in the next `metres` (for braking and for the riders' speed choice). */
export function curvAhead(tr, i, metres) {
  let m = 0;
  let sign = 0;
  const n = Math.round(metres / tr.step);
  for (let k = 0; k < n; k++) {
    const c = tr.curv[(i + k) % tr.N];
    if (Math.abs(c) > m) { m = Math.abs(c); sign = Math.sign(c); }
  }
  return { abs: m, sign };
}

/** The fastest speed that still makes every corner ahead, braking at `decel` (m/s²) in time. */
export function safeSpeed(tr, i, v, grip, decel = 24) {
  const reach = (v * v) / (2 * decel) + 12;
  const n = Math.round(reach / tr.step);
  let best = Infinity;
  for (let k = 0; k <= n; k++) {
    const c = Math.abs(tr.curv[(i + k) % tr.N]);
    if (c < 0.0015) continue;
    const vc = Math.sqrt(grip / c);
    const allowed = Math.sqrt(vc * vc + 2 * decel * k * tr.step);
    if (allowed < best) best = allowed;
  }
  return best;
}
