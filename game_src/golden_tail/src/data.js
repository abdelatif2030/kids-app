// «مغامرة الذيل الذهبي» — the treetop playground: round tree-house decks at different heights, rope bridges (one is
// broken: only a jump crosses it), ramps down to the forest floor, slides, and big bouncy mushrooms that throw you up
// onto a high deck. Pure data and geometry helpers, no DOM, no three.js.

export const GROUND_R = 25;
export const G = 24; // gravity

export const PLATFORMS = [
  { id: 'p0', x: 0, z: 0, r: 3.4, y: 3 },
  { id: 'p1', x: -10, z: -6, r: 2.6, y: 4.5 },
  { id: 'p2', x: 10, z: -6, r: 2.6, y: 4 },
  { id: 'p3', x: -10, z: 7, r: 2.6, y: 2.4 },
  { id: 'p4', x: 10, z: 8, r: 2.6, y: 5 },
  { id: 'p5', x: 0, z: -13, r: 2.8, y: 6 },
  { id: 'p6', x: 0, z: 12.5, r: 2.3, y: 1.2 },
];
const P = Object.fromEntries(PLATFORMS.map((p) => [p.id, p]));

/** A straight walkable strip from a to b ({x,y,z}); kind bridge / ramp / slide. */
function strip(kind, a, b, w, extra = {}) {
  return { kind, ax: a.x, ay: a.y, az: a.z, bx: b.x, by: b.y, bz: b.z, w, rails: kind !== 'ramp', ...extra };
}
function edgeOf(p, dx, dz, inset = 0.3) {
  const l = Math.hypot(dx, dz);
  return { x: p.x + (dx / l) * (p.r - inset), y: p.y, z: p.z + (dz / l) * (p.r - inset) };
}
function bridge(a, b, extra) {
  const A = P[a];
  const B = P[b];
  return strip('bridge', edgeOf(A, B.x - A.x, B.z - A.z), edgeOf(B, A.x - B.x, A.z - B.z), 1.5, { from: a, to: b, ...extra });
}
function down(kind, p, dx, dz, len) {
  const top = edgeOf(P[p], dx, dz);
  const l = Math.hypot(dx, dz);
  return strip(kind, top, { x: top.x + (dx / l) * len, y: 0, z: top.z + (dz / l) * len }, kind === 'slide' ? 1.3 : 1.8, { from: p });
}

export const STRIPS = [
  bridge('p0', 'p1'),
  bridge('p0', 'p3'),
  bridge('p1', 'p5'),
  bridge('p2', 'p5'),
  bridge('p0', 'p6'),
  bridge('p2', 'p4'),
  down('ramp', 'p3', -1, 0, 4.6),
  down('ramp', 'p6', 0, 1, 3.4),
  down('ramp', 'p2', 1, 0, 6),
  down('slide', 'p5', 0.8, -0.6, 8.4),
  down('slide', 'p4', 0.6, 0.8, 7),
  down('slide', 'p1', -0.8, -0.6, 6.3),
];

// the broken bridge between the big deck and the east deck: two halves with a gap only a jump can cross
{
  const a = edgeOf(P.p0, 1, -0.6);
  const b = edgeOf(P.p2, -1, 0.6);
  const mx = (a.x + b.x) / 2;
  const mz = (a.z + b.z) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const l = Math.hypot(dx, dz);
  const g = 0.9; // half the gap
  STRIPS.push(strip('bridge', a, { x: mx - (dx / l) * g, y: my, z: mz - (dz / l) * g }, 1.5, { broken: true }));
  STRIPS.push(strip('bridge', { x: mx + (dx / l) * g, y: my, z: mz + (dz / l) * g }, b, 1.5, { broken: true }));
}

/** Bouncy mushrooms on the forest floor: stepping on one throws you onto a deck. */
export const MUSHROOMS = [
  { x: -4.5, z: -4.5, to: 'p1' },
  { x: -4, z: -17.5, to: 'p5' },
  { x: 14.5, z: 2.5, to: 'p4' },
  { x: -5.2, z: 8.6, to: 'p0' },
].map((m) => ({ ...m, r: 0.8 }));

/** Tree trunks under the decks (only in the way below the deck). */
export const TRUNKS = PLATFORMS.map((p) => ({ x: p.x, z: p.z, r: 0.75, top: p.y - 0.3 }));

/** Six levels: longer rounds, more and faster rivals. */
export const LEVELS = [
  { id: 1, ar: 'ساحة الشجر', en: 'Canopy Commons', time: 40, rivals: 2, speed: 3.7 },
  { id: 2, ar: 'جسر الحبال', en: 'Rope Bridges', time: 45, rivals: 3, speed: 3.9 },
  { id: 3, ar: 'المشروم النطّاط', en: 'Bouncy Mushrooms', time: 50, rivals: 3, speed: 4.1 },
  { id: 4, ar: 'الزحاليق', en: 'Slide Hill', time: 55, rivals: 4, speed: 4.2 },
  { id: 5, ar: 'برج المراقبة', en: 'Lookout Tower', time: 60, rivals: 4, speed: 4.4 },
  { id: 6, ar: 'بطولة الغابة', en: 'Forest Cup', time: 60, rivals: 5, speed: 4.5 },
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

/** The highest floor under (x, z) that something at height y can stand on (it can step up a little). */
export function floorAt(x, z, y, step = 0.45) {
  let best = 0;
  let surf = null;
  for (const p of PLATFORMS) {
    if (p.y <= y + step && p.y > best && Math.hypot(x - p.x, z - p.z) <= p.r) { best = p.y; surf = p; }
  }
  for (const s of STRIPS) {
    const o = onStrip(s, x, z);
    if (o.t < -0.02 || o.t > 1.02 || Math.abs(o.side) > s.w / 2) continue;
    if (o.y <= y + step && o.y > best - 0.001) { best = o.y; surf = s; }
  }
  return { y: best, surf };
}

// ---- the walking graph (for the animals; they cannot jump the broken bridge) --------------------------------------

export function buildGraph() {
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
