// Oasis Rally — the Western Desert tracks. SIX point-to-point legs, each with its OWN geometry
// (Phase 2E / Batch F): no leg is another leg reversed or rescaled. The rally folds each long leg
// back on itself inside one desert arena (max radius ≈700 m, inside the painted panorama ring),
// so the length comes from the folding — flowing snakes, dune S-fields, a chalk slalom,
// volcanic switchbacks, an oasis ring and the grand cup snake. Every row-end turn is a real
// semicircle arc of control points (never a single apex point — a lone apex makes the spline
// kink), and every closing straight runs round the arena perimeter so it meets the start line
// travelling the same way the trucks launch. The road is wide enough for rally trucks side by
// side, and the sand itself changes along the way — firm packed dirt in most places, soft
// drifts in the dune fields where cornering grip drops (gripAt, per leg).
// Pure maths, no drawing.

export const HALF_W = 9; // a wide dirt road for trucks (m)
export const WALL = HALF_W + 6; // the rock outcrops and marker posts at the edge
const STEP = 2;

// ---- the six legs ---------------------------------------------------------------------------------
// Control points are in metres. Every leg starts heading east (legs 1–3, 5, 6) or south down a
// column (leg 4) along a straight — the start camp — and closes back to its start round the
// perimeter with a home straight.

// Leg 1 — Siwa → Great Sand Sea: the flowing snake. Six wide rows (150 m apart) with gentle
// in-row waves, broad end turns and a long west-side home straight. The kind opener.
// The start straight runs flat for its first half so the grid launches clean.
const LEG1 = [
  [-460, -375], [-230, -375], [0, -375], [230, -352], [460, -375], [513, -353], [535, -300], [513, -247],
  [460, -225], [230, -200], [0, -228], [-230, -202], [-460, -225], [-513, -197], [-535, -150], [-513, -103],
  [-460, -75], [-230, -100], [0, -72], [230, -98], [460, -75], [513, -53], [535, 0], [513, 53],
  [460, 75], [230, 100], [0, 72], [-230, 98], [-460, 75], [-513, 103], [-535, 150], [-513, 197],
  [-460, 225], [-230, 200], [0, 228], [230, 202], [460, 225], [513, 247], [535, 300], [513, 353],
  [460, 375], [230, 350], [0, 378], [-230, 352], [-460, 375], [-495, 362], [-503, 318], [-500, 195], [-508, 0], [-512, -195], [-518, -315], [-503, -362], [-478, -374],
];

// Leg 2 — Great Sand Sea → Bahariya: the dune S-fields. Six rows (125 m apart) with strong
// S wiggles in every row and the deepest, most frequent soft-sand drifts of the rally.
// Closes down the west side and arcs into the start straight.
const LEG2 = [
  [-430, -375], [-290, -335], [-145, -378], [0, -338], [145, -375], [290, -332], [430, -375], [474, -356], [492, -312], [474, -268],
  [430, -250], [290, -288], [145, -248], [0, -290], [-145, -250], [-290, -285], [-430, -250], [-474, -232], [-492, -188], [-474, -144],
  [-430, -125], [-290, -88], [-145, -128], [0, -85], [145, -125], [290, -90], [430, -125], [474, -106], [492, -62], [474, -18],
  [430, 0], [290, -38], [145, 2], [0, -40], [-145, 0], [-290, -35], [-430, 0], [-474, 18], [-492, 62], [-474, 106],
  [-430, 125], [-290, 162], [-145, 122], [0, 165], [145, 125], [290, 160], [430, 125], [474, 144], [492, 188], [474, 232],
  [430, 250], [290, 212], [145, 252], [0, 210], [-145, 250], [-290, 215], [-430, 250], [-478, 120], [-478, -60], [-478, -200], [-470, -318], [-448, -360],
];

// Leg 3 — White Desert: the chalk slalom. Seven tight rows (108 m apart) woven as a slalom
// between the chalk pillars — a triangular zigzag in every row, so the truck never stops
// turning, yet every apex is broad. Closes round the south edge into the start.
const LEG3 = [
  [-440, -324], [-293, -276], [-147, -324], [0, -276], [147, -324], [293, -276], [440, -324], [478, -308], [494, -270], [478, -232],
  [440, -216], [293, -264], [147, -216], [0, -264], [-147, -216], [-293, -264], [-440, -216], [-478, -200], [-494, -162], [-478, -124],
  [-440, -108], [-293, -60], [-147, -108], [0, -60], [147, -108], [293, -60], [440, -108], [478, -92], [494, -54], [478, -16],
  [440, 0], [293, -48], [147, 0], [0, -48], [-147, 0], [-293, -48], [-440, 0], [-478, 16], [-494, 54], [-478, 92],
  [-440, 108], [-293, 156], [-147, 108], [0, 156], [147, 108], [293, 156], [440, 108], [478, 124], [494, 162], [478, 200],
  [440, 216], [293, 168], [147, 216], [0, 168], [-147, 216], [-293, 168], [-440, 216], [-478, 232], [-494, 270], [-478, 308],
  [-440, 324], [-293, 276], [-147, 324], [0, 276], [147, 324], [293, 276], [440, 324],
  [492, 160], [492, -160], [492, -320], [385, -415], [125, -438], [-125, -438], [-380, -418], [-468, -433], [-505, -415], [-523, -378], [-505, -341], [-468, -323],
];

// Leg 4 — Black Desert: volcanic switchbacks. The snake turned on its side — seven columns
// (125 m apart) climbed and dropped with semicircle hairpins at every end, short straights
// between. Closes round the south and west edges, arcing east into the first column.
const LEG4 = [
  [-375, -424], [-378, -215], [-372, 0], [-378, 215], [-375, 430], [-356, 474], [-312, 492], [-268, 474],
  [-250, 430], [-248, 215], [-252, 0], [-248, -215], [-250, -430], [-232, -474], [-188, -492], [-144, -474],
  [-125, -430], [-122, -215], [-128, 0], [-122, 215], [-125, 430], [-106, 474], [-62, 492], [-18, 474],
  [0, 430], [2, 215], [-2, 0], [2, -215], [0, -430], [18, -474], [62, -492], [106, -474],
  [125, -430], [128, -215], [122, 0], [128, 215], [125, 430], [144, 474], [188, 492], [232, 474],
  [250, 430], [252, 215], [248, 0], [252, -215], [250, -430], [268, -474], [312, -492], [356, -474],
  [375, -430], [378, -215], [372, 0], [378, 215], [375, 430], [388, 472], [408, 498], [436, 520], [458, 538], [448, 560], [400, 562],
  [300, 548], [0, 556], [-300, 548], [-440, 520], [-478, 400], [-478, 150], [-478, -100], [-478, -300], [-470, -360], [-448, -402], [-412, -420],
];

// Leg 5 — Farafra Oasis: the oasis ring. The only pure ring of the rally: a scalloped loop
// round the palm grove, the weave swinging the road in and out between the palms (the weave
// is the length). Generated in polar form (angle, radius) sampled every 6° so the spline
// stays smooth; angles rise monotonically, so the road never crosses itself.
const LEG5 = (() => {
  const pts = [];
  for (let k = 0; k < 60; k++) {
    const th = (k / 60) * Math.PI * 2;
    const r = 425 + 105 * Math.sin(4 * th + 0.9) + 30 * Math.sin(8 * th + 2.0);
    pts.push([Math.sin(th) * r, -Math.cos(th) * r]);
  }
  return pts;
})();

// Leg 6 — Oasis Cup: Dakhla (sunset finale): the grand snake. Eight rows (108 m apart) — the
// longest leg of the rally — gentle waves throughout, and a west-side home straight that
// arcs into the start.
const LEG6 = [
  [-450, -378], [-225, -356], [0, -380], [225, -354], [450, -378], [488, -362], [504, -324], [488, -286],
  [450, -270], [225, -292], [0, -268], [-225, -294], [-450, -270], [-488, -254], [-504, -216], [-488, -178],
  [-450, -162], [-225, -140], [0, -164], [225, -138], [450, -162], [488, -146], [504, -108], [488, -70],
  [450, -54], [225, -76], [0, -52], [-225, -78], [-450, -54], [-488, -38], [-504, 0], [-488, 38],
  [-450, 54], [-225, 78], [0, 50], [225, 76], [450, 54], [488, 70], [504, 108], [488, 146],
  [450, 162], [225, 136], [0, 164], [-225, 138], [-450, 162], [-488, 178], [-504, 216], [-488, 254],
  [-450, 270], [-225, 294], [0, 266], [225, 292], [450, 270], [488, 286], [504, 324], [488, 362],
  [450, 378], [225, 352], [0, 380], [-225, 354], [-450, 378], [-515, 330], [-550, 240], [-558, 120], [-558, -60], [-558, -200], [-558, -270], [-544, -324], [-504, -363],
];

// Per-leg definitions: geometry, uniform scale (tuned against the robot driver — see
// docs/REVIEW_dune_titans.md Phase 2E), and the soft-sand drift fields as
// (fraction of the leg, depth of the grip dip). No two legs share a drift pattern.
export const LEG_DEFS = [
  { points: LEG1, scale: 1.04, drifts: [[0.13, 0.3], [0.47, 0.38], [0.81, 0.34]] },
  { points: LEG2, scale: 1.05, drifts: [[0.1, 0.36], [0.3, 0.42], [0.52, 0.34], [0.71, 0.4], [0.9, 0.3]] },
  { points: LEG3, scale: 0.94, drifts: [[0.22, 0.28], [0.58, 0.32], [0.86, 0.26]] },
  { points: LEG4, scale: 1.05, drifts: [[0.18, 0.3], [0.5, 0.36], [0.78, 0.3]] },
  { points: LEG5, scale: 1.38, drifts: [[0.15, 0.26], [0.42, 0.3], [0.68, 0.28], [0.9, 0.32]] },
  { points: LEG6, scale: 1.0, drifts: [[0.12, 0.34], [0.36, 0.3], [0.55, 0.4], [0.74, 0.32], [0.92, 0.36]] },
];

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

/** Build leg `leg` (0..5). `reverse` keeps the old call shape working (tests/tooling). */
export function buildTrack(leg = 0, reverse = false) {
  const def = LEG_DEFS[((leg % LEG_DEFS.length) + LEG_DEFS.length) % LEG_DEFS.length];
  const big = def.points.map(([x, z]) => [x * def.scale, z * def.scale]);
  const raw = reverse ? [...big].reverse() : big;
  // Even out the control spacing (≤55 m) before smoothing: Catmull-Rom through unevenly
  // spaced points overshoots where a long straight meets a short turn segment.
  // Interpolated points sit on the same straight lines, so the designed shape is
  // unchanged — only the spline's behaviour is tamed.
  const pts = [];
  for (let i = 0; i < raw.length; i++) {
    const a = raw[i];
    const b = raw[(i + 1) % raw.length];
    pts.push(a);
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const extra = Math.floor(seg / 55);
    for (let k = 1; k <= extra; k++) {
      const f = k / (extra + 1);
      pts.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]);
    }
  }
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
    ang[i] = Math.atan2(xs[j] - xs[i], zs[j] - zs[i]); // heading: 0 = +z, like the trucks
  }
  for (let i = 0; i < N; i++) {
    let d = ang[(i + 2) % N] - ang[(i - 2 + N) % N];
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    curv[i] = d / (4 * STEP); // 1/radius, sign = turning direction
  }
  // the sand grip profile: 1 on packed dirt, dipping inside each drift (smooth gaussian dips)
  const grip = new Float64Array(N).fill(1);
  for (let i = 0; i < N; i++) {
    const f = i / N;
    for (const [c, depth] of def.drifts) {
      let d = Math.abs(f - c);
      if (d > 0.5) d = 1 - d;
      grip[i] -= depth * Math.exp(-(d * d) / (2 * 0.012 * 0.012));
    }
  }
  return { N, step: STEP, length: N * STEP, xs, zs, ang, curv, grip, reverse, leg, cpCount: n, drifts: def.drifts };
}

/** Cornering grip multiplier at sample i: soft sand in the drifts, firm dirt elsewhere. */
export function gripAt(tr, i) {
  const k = ((i % tr.N) + tr.N) % tr.N;
  return tr.grip[k];
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
  return dx * -Math.cos(a) + dz * Math.sin(a);
}

/** The world point at sample i, `side` metres to the right. */
export function pointAt(tr, i, side = 0) {
  const k = ((i % tr.N) + tr.N) % tr.N;
  const a = tr.ang[k];
  return { x: tr.xs[k] - Math.cos(a) * side, z: tr.zs[k] + Math.sin(a) * side, a };
}

/** The tightest curvature in the next `metres` (for braking and for the drivers' speed choice). */
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
