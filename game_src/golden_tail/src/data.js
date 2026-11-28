// «الذيل الذهبي في الواحة» — the oasis playground, one arena per level: round palm decks at different heights, rope
// bridges (some broken: only a jump crosses them), ramps down to the oasis floor, slides, and big bouncy mushrooms
// that throw you up onto a high deck. Level 1 (Palm Plaza) keeps the original shared arena byte-for-byte; levels
// 2–6 each get their own Siwa-themed geometry (bridges over the spring pools, bouncer groves, sand-slide terraces,
// the Shali fortress lookout, and the wide Oasis Cup final). Pure data and geometry helpers, no DOM, no three.js.

export const GROUND_R = 25;
export const G = 24; // gravity

/** A straight walkable strip from a to b ({x,y,z}); kind bridge / ramp / slide. */
function strip(kind, a, b, w, extra = {}) {
  return { kind, ax: a.x, ay: a.y, az: a.z, bx: b.x, by: b.y, bz: b.z, w, rails: kind !== 'ramp', ...extra };
}
function edgeOf(p, dx, dz, inset = 0.3) {
  const l = Math.hypot(dx, dz);
  return { x: p.x + (dx / l) * (p.r - inset), y: p.y, z: p.z + (dz / l) * (p.r - inset) };
}
function bridge(P, a, b, extra) {
  const A = P[a];
  const B = P[b];
  return strip('bridge', edgeOf(A, B.x - A.x, B.z - A.z), edgeOf(B, A.x - B.x, A.z - B.z), 1.5, { from: a, to: b, ...extra });
}
function brokenBridge(P, a, b) {
  // two halves with a gap only a jump can cross
  const A = P[a];
  const B = P[b];
  const p = edgeOf(A, B.x - A.x, B.z - A.z);
  const q = edgeOf(B, A.x - B.x, A.z - B.z);
  const mx = (p.x + q.x) / 2;
  const mz = (p.z + q.z) / 2;
  const my = (p.y + q.y) / 2;
  const dx = q.x - p.x;
  const dz = q.z - p.z;
  const l = Math.hypot(dx, dz);
  const g = 0.9; // half the gap
  return [
    strip('bridge', p, { x: mx - (dx / l) * g, y: my, z: mz - (dz / l) * g }, 1.5, { broken: true }),
    strip('bridge', { x: mx + (dx / l) * g, y: my, z: mz + (dz / l) * g }, q, 1.5, { broken: true }),
  ];
}
function down(P, kind, p, dx, dz, len) {
  const top = edgeOf(P[p], dx, dz);
  const l = Math.hypot(dx, dz);
  return strip(kind, top, { x: top.x + (dx / l) * len, y: 0, z: top.z + (dz / l) * len }, kind === 'slide' ? 1.3 : 1.8, { from: p });
}

// ---- the six arenas -------------------------------------------------------------------------------------------------
// A link is ['bridge', a, b] | ['broken', a, b] | ['down', 'ramp'|'slide', from, dx, dz, len].
const ARENA_DEFS = [
  { // 1 · Palm Plaza — the original shared arena, unchanged (the opening experience stays exactly as shipped)
    platforms: [
      { id: 'p0', x: 0, z: 0, r: 3.4, y: 3 },
      { id: 'p1', x: -10, z: -6, r: 2.6, y: 4.5 },
      { id: 'p2', x: 10, z: -6, r: 2.6, y: 4 },
      { id: 'p3', x: -10, z: 7, r: 2.6, y: 2.4 },
      { id: 'p4', x: 10, z: 8, r: 2.6, y: 5 },
      { id: 'p5', x: 0, z: -13, r: 2.8, y: 6 },
      { id: 'p6', x: 0, z: 12.5, r: 2.3, y: 1.2 },
    ],
    links: [
      ['bridge', 'p0', 'p1'], ['bridge', 'p0', 'p3'], ['bridge', 'p1', 'p5'], ['bridge', 'p2', 'p5'],
      ['bridge', 'p0', 'p6'], ['bridge', 'p2', 'p4'],
      ['down', 'ramp', 'p3', -1, 0, 4.6], ['down', 'ramp', 'p6', 0, 1, 3.4], ['down', 'ramp', 'p2', 1, 0, 6],
      ['down', 'slide', 'p5', 0.8, -0.6, 8.4], ['down', 'slide', 'p4', 0.6, 0.8, 7], ['down', 'slide', 'p1', -0.8, -0.6, 6.3],
      ['broken', 'p0', 'p2'],
    ],
    mushrooms: [
      { x: -4.5, z: -4.5, to: 'p1' },
      { x: -4, z: -17.5, to: 'p5' },
      { x: 14.5, z: 2.5, to: 'p4' },
      { x: -5.2, z: 8.6, to: 'p0' },
    ],
  },
  { // 2 · Oasis Bridges — a ring of decks over the spring pools, joined by long rope bridges
    platforms: [
      { id: 'p0', x: 0, z: 0, r: 3.2, y: 3 },
      { id: 'p1', x: -11, z: -7, r: 2.6, y: 4 },
      { id: 'p2', x: 11, z: -7, r: 2.6, y: 4 },
      { id: 'p3', x: -11, z: 8, r: 2.6, y: 3.5 },
      { id: 'p4', x: 11, z: 8, r: 2.6, y: 3.5 },
      { id: 'p5', x: 0, z: -14, r: 2.8, y: 5.5 },
      { id: 'p6', x: 0, z: 14, r: 2.4, y: 2 },
      { id: 'p7', x: -17, z: 0, r: 2.2, y: 5 },
      { id: 'p8', x: 17, z: 0, r: 2.2, y: 5 },
    ],
    links: [
      ['bridge', 'p0', 'p1'], ['bridge', 'p0', 'p2'], ['bridge', 'p0', 'p3'], ['bridge', 'p0', 'p4'],
      ['bridge', 'p1', 'p5'], ['bridge', 'p2', 'p5'], ['bridge', 'p3', 'p6'], ['bridge', 'p4', 'p6'],
      ['bridge', 'p1', 'p7'], ['bridge', 'p2', 'p8'],
      ['down', 'ramp', 'p3', -1, 0, 4.6], ['down', 'ramp', 'p6', 0, 1, 3.4], ['down', 'ramp', 'p8', 1, 0, 4.2],
      ['down', 'slide', 'p5', 0.8, -0.6, 8], ['down', 'slide', 'p7', -0.6, -0.8, 6.5],
      ['broken', 'p0', 'p5'],
    ],
    mushrooms: [
      { x: -5, z: -10, to: 'p5' },
      { x: -14, z: 4, to: 'p7' },
      { x: 14, z: 4, to: 'p8' },
      { x: -4, z: 5, to: 'p0' },
    ],
  },
  { // 3 · Oasis Bouncers — a palm-canopy climb: few bridges, the mushrooms do the lifting
    platforms: [
      { id: 'p0', x: 0, z: 0, r: 3.4, y: 2.5 },
      { id: 'p1', x: -11, z: -8, r: 2.6, y: 5 },
      { id: 'p2', x: 11, z: -8, r: 2.6, y: 6 },
      { id: 'p3', x: -11, z: 9, r: 2.6, y: 4 },
      { id: 'p4', x: 11, z: 9, r: 2.6, y: 7 },
      { id: 'p5', x: 0, z: -14, r: 2.8, y: 8 },
      { id: 'p6', x: 0, z: 14, r: 2.3, y: 3.5 },
    ],
    links: [
      ['bridge', 'p0', 'p3'], ['bridge', 'p0', 'p6'], ['bridge', 'p1', 'p5'], ['bridge', 'p2', 'p5'], ['bridge', 'p4', 'p6'],
      ['down', 'ramp', 'p3', -1, 0, 5], ['down', 'ramp', 'p6', 0, 1, 3.6],
      ['down', 'slide', 'p5', 0.8, -0.6, 8.4], ['down', 'slide', 'p4', 0.6, 0.8, 7], ['down', 'slide', 'p2', 1, -0.3, 6.5],
      ['broken', 'p0', 'p2'],
    ],
    mushrooms: [
      { x: -7, z: -12, to: 'p1' },
      { x: 7, z: -12, to: 'p2' },
      { x: 7, z: 13, to: 'p4' },
      { x: -4, z: -19, to: 'p5' },
      { x: -5.2, z: 8.6, to: 'p0' },
    ],
  },
  { // 4 · Sand Slides — terraced decks on the salt-lake shore, five slides pour down to the flats
    platforms: [
      { id: 'p0', x: 0, z: 0, r: 3.2, y: 4 },
      { id: 'p1', x: -10, z: -6, r: 2.6, y: 6 },
      { id: 'p2', x: 10, z: -6, r: 2.6, y: 5 },
      { id: 'p3', x: -10, z: 7, r: 2.6, y: 3 },
      { id: 'p4', x: 10, z: 8, r: 2.6, y: 6.5 },
      { id: 'p5', x: 0, z: -13, r: 2.8, y: 7.5 },
      { id: 'p6', x: 0, z: 13, r: 2.3, y: 2 },
      { id: 'p7', x: -15, z: -1, r: 2.2, y: 4.5 },
      { id: 'p8', x: 15, z: -1, r: 2.2, y: 3.5 },
    ],
    links: [
      ['bridge', 'p0', 'p1'], ['bridge', 'p0', 'p3'], ['bridge', 'p1', 'p5'], ['bridge', 'p2', 'p5'],
      ['bridge', 'p0', 'p6'], ['bridge', 'p3', 'p7'], ['bridge', 'p4', 'p8'],
      ['down', 'ramp', 'p3', -1, 0, 4.6], ['down', 'ramp', 'p6', 0, 1, 3.4], ['down', 'ramp', 'p8', 1, 0, 5],
      ['down', 'slide', 'p5', 0.8, -0.6, 8.4], ['down', 'slide', 'p4', 0.6, 0.8, 7], ['down', 'slide', 'p1', -0.8, -0.6, 6.3],
      ['down', 'slide', 'p7', -0.5, 0.8, 6], ['down', 'slide', 'p2', 0.8, 0.6, 6.5],
      ['broken', 'p0', 'p2'],
    ],
    mushrooms: [
      { x: -5, z: -18, to: 'p5' },
      { x: 14, z: 3, to: 'p4' },
      { x: 5, z: -5, to: 'p0' },
      { x: -12, z: 4, to: 'p7' },
    ],
  },
  { // 5 · Oasis Lookout — the Shali fortress ruins: tall wall-top decks around a high keep
    platforms: [
      { id: 'p0', x: 0, z: 0, r: 3.4, y: 5 },
      { id: 'p1', x: -12, z: -9, r: 2.6, y: 7 },
      { id: 'p2', x: 12, z: -9, r: 2.6, y: 7 },
      { id: 'p3', x: -12, z: 10, r: 2.6, y: 6 },
      { id: 'p4', x: 12, z: 10, r: 2.6, y: 8 },
      { id: 'p5', x: 0, z: -14, r: 2.8, y: 9 },
      { id: 'p6', x: 0, z: 16, r: 2.3, y: 4 },
      { id: 'p7', x: -16, z: 0, r: 2.2, y: 5.5 },
      { id: 'p8', x: 16, z: 0, r: 2.2, y: 5.5 },
    ],
    links: [
      ['bridge', 'p0', 'p1'], ['bridge', 'p0', 'p3'], ['bridge', 'p1', 'p5'], ['bridge', 'p2', 'p5'],
      ['bridge', 'p3', 'p6'], ['bridge', 'p4', 'p6'], ['bridge', 'p1', 'p7'], ['bridge', 'p2', 'p8'],
      ['bridge', 'p7', 'p3'], ['bridge', 'p8', 'p4'],
      ['down', 'ramp', 'p6', 0, 1, 3.6], ['down', 'ramp', 'p3', -1, 0, 5.5],
      ['down', 'slide', 'p5', 0.8, -0.6, 8.4], ['down', 'slide', 'p4', 0.6, 0.8, 5.5], ['down', 'slide', 'p1', -0.8, -0.6, 5.5],
      ['broken', 'p0', 'p5'],
    ],
    mushrooms: [
      { x: -8, z: -13, to: 'p1' },
      { x: 8, z: -13, to: 'p2' },
      { x: 8, z: 14, to: 'p4' },
      { x: -5, z: 6, to: 'p0' },
      { x: 11, z: -5, to: 'p8' },
    ],
  },
  { // 6 · Oasis Cup — the final: the widest arena, two broken bridges, every route mixed together
    platforms: [
      { id: 'p0', x: 0, z: 0, r: 3.6, y: 4 },
      { id: 'p1', x: -13, z: -9, r: 2.8, y: 5.5 },
      { id: 'p2', x: 13, z: -9, r: 2.8, y: 5 },
      { id: 'p3', x: -13, z: 10, r: 2.8, y: 4.5 },
      { id: 'p4', x: 13, z: 10, r: 2.8, y: 6.5 },
      { id: 'p5', x: 0, z: -15, r: 3, y: 8 },
      { id: 'p6', x: 0, z: 16, r: 2.5, y: 3 },
      { id: 'p7', x: -17, z: 0, r: 2.4, y: 6 },
      { id: 'p8', x: 17, z: 0, r: 2.4, y: 6 },
    ],
    links: [
      ['bridge', 'p0', 'p1'], ['bridge', 'p0', 'p3'], ['bridge', 'p1', 'p5'], ['bridge', 'p2', 'p5'],
      ['bridge', 'p3', 'p6'], ['bridge', 'p4', 'p6'], ['bridge', 'p1', 'p7'], ['bridge', 'p3', 'p7'],
      ['bridge', 'p2', 'p8'], ['bridge', 'p4', 'p8'],
      ['down', 'ramp', 'p3', -1, 0, 5], ['down', 'ramp', 'p6', 0, 1, 3.6], ['down', 'ramp', 'p7', -1, 0, 4],
      ['down', 'slide', 'p5', 0.8, -0.6, 8.4], ['down', 'slide', 'p4', 0.6, 0.8, 5], ['down', 'slide', 'p1', -0.8, -0.6, 5.5],
      ['broken', 'p0', 'p2'], ['broken', 'p0', 'p4'],
    ],
    mushrooms: [
      { x: -5, z: -19, to: 'p5' },
      { x: -13, z: 5, to: 'p7' },
      { x: 13, z: 5, to: 'p8' },
      { x: 5, z: 6, to: 'p0' },
      { x: 9, z: -13, to: 'p2' },
    ],
  },
];

function buildArena(def) {
  const platforms = def.platforms.map((p) => ({ ...p }));
  const P = Object.fromEntries(platforms.map((p) => [p.id, p]));
  const strips = [];
  for (const l of def.links) {
    if (l[0] === 'bridge') strips.push(bridge(P, l[1], l[2]));
    else if (l[0] === 'broken') strips.push(...brokenBridge(P, l[1], l[2]));
    else strips.push(down(P, l[1], l[2], l[3], l[4], l[5]));
  }
  /** Bouncy mushrooms on the oasis floor: stepping on one throws you onto a deck. */
  const mushrooms = def.mushrooms.map((m) => ({ ...m, r: 0.8 }));
  /** Tree trunks under the decks (only in the way below the deck). */
  const trunks = platforms.map((p) => ({ x: p.x, z: p.z, r: 0.75, top: p.y - 0.3 }));
  return { platforms, strips, mushrooms, trunks };
}

export const ARENAS = ARENA_DEFS.map(buildArena);
/** The arena of level `i` (0-based index into LEVELS). */
export function getArena(i) { return ARENAS[Math.max(0, Math.min(ARENAS.length - 1, i | 0))]; }
/** A stable fingerprint of an arena's geometry (for tests that prove the arenas really differ). */
export function arenaSignature(a) { return JSON.stringify([a.platforms, a.strips, a.mushrooms]); }

// Level 1's arena, kept as the classic module-level names (its geometry is the original shared arena, unchanged).
export const PLATFORMS = ARENAS[0].platforms;
export const STRIPS = ARENAS[0].strips;
export const MUSHROOMS = ARENAS[0].mushrooms;
export const TRUNKS = ARENAS[0].trunks;

/** Six levels: longer rounds, more and faster rivals. */
export const LEVELS = [
  { id: 1, ar: 'ساحة النخيل', en: 'Palm Plaza', time: 40, rivals: 2, speed: 3.7 },
  { id: 2, ar: 'جسور الواحة', en: 'Oasis Bridges', time: 45, rivals: 3, speed: 3.9 },
  { id: 3, ar: 'نطّاطات الواحة', en: 'Oasis Bouncers', time: 50, rivals: 3, speed: 4.1 },
  { id: 4, ar: 'زحاليق الرمل', en: 'Sand Slides', time: 55, rivals: 4, speed: 4.2 },
  { id: 5, ar: 'برج مراقبة الواحة', en: 'Oasis Lookout', time: 60, rivals: 4, speed: 4.25 },
  { id: 6, ar: 'كأس الواحة', en: 'Oasis Cup', time: 60, rivals: 4, speed: 4.3 },
];

export const RIVALS = [
  { kind: 'raccoon', ar: 'راكون', en: 'Rocky' },
  { kind: 'bear', ar: 'دبدوب', en: 'Bruno' },
  { kind: 'fox', ar: 'ثعلوب', en: 'Foxy' },
  { kind: 'bunny', ar: 'أرنوبة', en: 'Bunny' },
  { kind: 'cat', ar: 'قطقوطة', en: 'Kitty' },
];

// ---- geometry ----------------------------------------------------------------------------------------------------

/** Where a point lies along a strip: t (0..1 along), side (sideways distance), height there. */
export function onStrip(s, x, z) {
  const vx = s.bx - s.ax;
  const vz = s.bz - s.az;
  const l2 = vx * vx + vz * vz;
  const t = ((x - s.ax) * vx + (z - s.az) * vz) / l2;
  const l = Math.sqrt(l2);
  const side = ((x - s.ax) * vz - (z - s.az) * vx) / l;
  return { t, side, y: s.ay + (s.by - s.ay) * Math.max(0, Math.min(1, t)) };
}

/** The highest floor under (x, z) that something at height y can stand on (it can step up a little).
 *  Defaults to level 1's arena, exactly as before; the sim passes its own level's arena. */
export function floorAt(x, z, y, step = 0.45, arena = ARENAS[0]) {
  let best = 0;
  let surf = null;
  for (const p of arena.platforms) {
    if (p.y <= y + step && p.y > best && Math.hypot(x - p.x, z - p.z) <= p.r) { best = p.y; surf = p; }
  }
  for (const s of arena.strips) {
    const o = onStrip(s, x, z);
    if (o.t < -0.02 || o.t > 1.02 || Math.abs(o.side) > s.w / 2) continue;
    if (o.y <= y + step && o.y > best - 0.001) { best = o.y; surf = s; }
  }
  return { y: best, surf };
}

// ---- the walking graph (for the animals; they cannot jump the broken bridge) --------------------------------------

export function buildGraph(arena = ARENAS[0]) {
  const PLATFORMS = arena.platforms;
  const STRIPS = arena.strips;
  const MUSHROOMS = arena.mushrooms;
  const nodes = [];
  const add = (x, y, z, tag) => { nodes.push({ i: nodes.length, x, y, z, tag, out: [] }); return nodes.length - 1; };
  const link = (a, b, both = true, extra = 0) => {
    const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y, nodes[a].z - nodes[b].z) + extra;
    nodes[a].out.push({ to: b, d });
    if (both) nodes[b].out.push({ to: a, d });
  };
  const centre = {};
  for (const p of PLATFORMS) centre[p.id] = add(p.x, p.y, p.z, p.id);
  const onDeck = {};
  for (const p of PLATFORMS) onDeck[p.id] = [centre[p.id]];
  const ground = [];
  for (const s of STRIPS) {
    if (s.broken) continue;
    const a = add(s.ax, s.ay, s.az, s.kind);
    const b = add(s.bx, s.by, s.bz, s.kind);
    link(a, b, s.kind !== 'slide');
    onDeck[s.from].push(a);
    if (s.kind === 'bridge') onDeck[s.to].push(b);
    else ground.push(b);
  }
  // jumping off a deck (one way down) where no strip leaves
  for (const p of PLATFORMS) {
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2 + 0.5;
      const dx = Math.cos(a);
      const dz = Math.sin(a);
      const clash = STRIPS.some((s) => {
        if (s.from !== p.id && s.to !== p.id) return false;
        const ex = s.from === p.id ? s.ax : s.bx;
        const ez = s.from === p.id ? s.az : s.bz;
        const ang = Math.atan2(ez - p.z, ex - p.x);
        let d = ang - a;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        return Math.abs(d) < 0.8;
      });
      if (clash) continue;
      const edge = add(p.x + dx * (p.r - 0.4), p.y, p.z + dz * (p.r - 0.4), 'edge');
      onDeck[p.id].push(edge);
      const g = add(p.x + dx * (p.r + 1.2), 0, p.z + dz * (p.r + 1.2), 'drop');
      link(edge, g, false, 1);
      ground.push(g);
    }
  }
  for (const id of Object.keys(onDeck)) {
    const l = onDeck[id];
    for (let i = 0; i < l.length; i++) for (let j = i + 1; j < l.length; j++) link(l[i], l[j]);
  }
  for (const m of MUSHROOMS) {
    const g = add(m.x, 0, m.z, 'mushroom');
    link(g, centre[m.to], false, -2); // a bounce is quick
    ground.push(g);
  }
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    ground.push(add(Math.cos(a) * 18, 0, Math.sin(a) * 18, 'ground'));
  }
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2 + 0.3;
    ground.push(add(Math.cos(a) * 6.5, 0, Math.sin(a) * 6.5, 'ground'));
  }
  for (let i = 0; i < ground.length; i++) {
    for (let j = i + 1; j < ground.length; j++) {
      const a = nodes[ground[i]];
      const b = nodes[ground[j]];
      if (Math.hypot(a.x - b.x, a.z - b.z) < 13) link(ground[i], ground[j]);
    }
  }
  return nodes;
}

/** Cheapest path costs from every node to `goal` (walking the edges backwards). */
export function distancesTo(nodes, goal) {
  const n = nodes.length;
  const dist = new Float64Array(n).fill(Infinity);
  const back = Array.from({ length: n }, () => []);
  for (const a of nodes) for (const e of a.out) back[e.to].push({ from: a.i, d: e.d });
  dist[goal] = 0;
  const done = new Uint8Array(n);
  for (let k = 0; k < n; k++) {
    let u = -1;
    for (let i = 0; i < n; i++) if (!done[i] && (u < 0 || dist[i] < dist[u])) u = i;
    if (u < 0 || dist[u] === Infinity) break;
    done[u] = 1;
    for (const e of back[u]) if (dist[u] + e.d < dist[e.from]) dist[e.from] = dist[u] + e.d;
  }
  return dist;
}

/** Save: { unlocked (1..6), stars: {levelId: n}, muted } made safe. */
export function normalizeSave(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const stars = {};
  if (s.stars && typeof s.stars === 'object') for (const lv of LEVELS) { const v = Math.floor(Number(s.stars[lv.id])); if (v >= 1 && v <= 3) stars[lv.id] = v; }
  const u = Math.floor(Number(s.unlocked));
  return { unlocked: Number.isFinite(u) ? Math.max(1, Math.min(LEVELS.length, u)) : 1, stars, muted: s.muted === true };
}
