import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Chase } from '../src/sim.js';
import { LEVELS, PLATFORMS, STRIPS, MUSHROOMS, GROUND_R, floorAt, buildGraph, distancesTo, normalizeSave } from '../src/data.js';

const P = Object.fromEntries(PLATFORMS.map((p) => [p.id, p]));

/** A robot dino: walks the graph to the tail and grabs; when wearing it, runs to the place farthest from the
 * nearest animal. */
function robot(c, dt) {
  const p = c.player;
  if (c.holder !== p) {
    const h = c.holder;
    if (Math.hypot(h.x - p.x, h.z - p.z) < 1.5 && Math.abs(h.y - p.y) < 1.2) c.grab();
    if (Math.hypot(h.x - p.x, h.z - p.z) < 3.5 && Math.abs(h.y - p.y) < 0.6) return { x: h.x - p.x, z: h.z - p.z };
    // both on the open oasis floor: a child just runs straight at the tail (no deck routing needed)
    if (p.grounded && h.grounded && p.y < 0.1 && h.y < 0.1) return { x: h.x - p.x, z: h.z - p.z };
    // keep one chase target for a short while: re-picking the holder's nearest node every frame makes the
    // route restart whenever that node flips, and the dino dithers between two first hops instead of walking
    p._chaseT = (p._chaseT ?? 0) - dt;
    if (p._chaseGoal === undefined || p._chaseT <= 0 || p._chaseHolder !== h) { p._chaseGoal = c.nodeNear(h); p._chaseHolder = h; p._chaseT = 0.75; }
    return walkTo(c, p._chaseGoal);
  }
  // on the open floor the dino simply outruns everyone (5.2 vs ≤4.3): run straight away from the chasers nearby
  if (p.grounded && p.y < 0.1) {
    const near = c.rivals.filter((r) => Math.hypot(r.x - p.x, r.z - p.z) < 9);
    if (near.length) {
      const cx = near.reduce((a, r) => a + r.x, 0) / near.length;
      const cz = near.reduce((a, r) => a + r.z, 0) / near.length;
      let ax = p.x - cx;
      let az = p.z - cz;
      // keep the run inside the playground: bend away from the rim when close to it
      const rr = Math.hypot(p.x, p.z);
      if (rr > 16) { ax -= p.x * 0.12; az -= p.z * 0.12; }
      const l = Math.hypot(ax, az);
      if (l > 0.2) return { x: ax / l, z: az / l };
    }
  }
  p._repick = (p._repick ?? 0) - dt;
  // like the animals' own flee brain: think again sooner when a chaser is close
  if (Math.min(...c.rivals.map((r) => Math.hypot(r.x - p.x, r.z - p.z))) < 7 && p._repick > 0.8) p._repick = 0.8;
  if (p._goal === undefined || p._repick <= 0) {
    let best = 0;
    let bs = -Infinity;
    const near = c.rivals.map((r) => c.nodeNear(r));
    for (const n of c.nodes) {
      const s = Math.min(...near.map((k) => c.dist[k][n.i])) - (Number.isFinite(noDrop(c)[n.i][c.nodeNear(p)]) ? 0 : 1e6);
      if (Number.isFinite(s) && s > bs) { bs = s; best = n.i; }
    }
    p._goal = best;
    p._repick = 1.5;
  }
  return walkTo(c, p._goal);
}

const NODROP = new Map();
function noDrop(c) {
  // the dino's own route table (per arena): jumping off a deck is a fall now (back to the start), so it never plans one
  if (!NODROP.has(c.levelIndex)) {
    const g = c.nodes.map((n) => ({ ...n, out: n.out.filter((e) => c.nodes[e.to].tag !== 'drop') }));
    NODROP.set(c.levelIndex, g.map((n) => distancesTo(g, n.i)));
  }
  return NODROP.get(c.levelIndex);
}

function walkTo(c, goal) {
  const p = c.player;
  // 'drop'/'edge' nodes are graph artifacts (the landing spot / rim of a deck jump the dino never plans): if one
  // is the nearest node to the target, walk to the nearest real node instead — a child walks to the animal, not the artifact
  if (c.nodes[goal].tag === 'drop' || c.nodes[goal].tag === 'edge') {
    let bd = Infinity;
    for (const n of c.nodes) {
      if (n.tag === 'drop' || n.tag === 'edge') continue;
      const d = Math.hypot(n.x - c.nodes[goal].x, n.z - c.nodes[goal].z) + Math.abs(n.y - c.nodes[goal].y) * 4;
      if (d < bd) { bd = d; goal = n.i; }
    }
  }
  const dist = noDrop(c);
  let n = p._next !== undefined ? c.nodes[p._next] : null;
  if (!n || Math.abs(n.y - p.y) > 3 || p._goalWas !== goal) { n = c.nodes[c.nodeNear(p)]; p._next = n.i; p._goalWas = goal; }
  if (Math.hypot(n.x - p.x, n.z - p.z) < 0.5 && Math.abs(n.y - p.y) < 0.7 && n.i !== goal) {
    let bc = Infinity;
    let best = n.i;
    for (const e of n.out) if (c.nodes[e.to].tag !== 'drop' && e.d + dist[goal][e.to] < bc) { bc = e.d + dist[goal][e.to]; best = e.to; }
    p._next = best;
    n = c.nodes[best];
  }
  const dx = n.x - p.x;
  const dz = n.z - p.z;
  const l = Math.hypot(dx, dz) || 1;
  return l < 0.05 ? { x: 0, z: 0 } : { x: dx / l, z: dz / l };
}

test('a robot dino (no jumps, no mushrooms) wins a fair share of rounds at every level', () => {
  let total = 0;
  for (const [i, lv] of LEVELS.entries()) {
    let wins = 0;
    let line = [];
    for (let seed = 1; seed <= 4; seed++) {
      const c = new Chase({ level: i, seed });
      const dt = 1 / 30;
      while (c.state !== 'over') c.step(dt, robot(c, dt));
      const r = c.result;
      if (r.win) wins++;
      line.push(`${r.win ? 'W' : 'L'} held ${Math.round(r.held)}s grabs ${r.grabs} lost ${r.lost}`);
    }
    console.log(`level ${lv.id}: ${wins}/4 | ${line.join(' | ')}`);
    total += wins;
    if (i < 3) assert.ok(wins >= 1, `the robot never won level ${lv.id}`);
  }
  assert.ok(total >= 9, `only ${total}/24 wins`);
});

test('the animals take the tail from a dino that stands still', () => {
  const c = new Chase({ level: 2, seed: 4 });
  c.holder = c.player;
  let lost = false;
  for (let i = 0; i < 30 * 30 && !lost; i++) for (const e of c.step(1 / 30)) if (e.type === 'steal' && e.from === 0) lost = true;
  assert.ok(lost, 'nobody came for the tail');
});

test('the animals chase the tail across the playground (walking graph is connected)', () => {
  const nodes = buildGraph();
  for (const n of nodes) {
    const d = distancesTo(nodes, n.i);
    const unreachable = nodes.filter((m) => d[m.i] === Infinity && m.tag !== 'mushroom' && m.tag !== 'edge' && m.tag !== 'slide');
    assert.equal(unreachable.length, 0, `${unreachable.length} nodes cannot reach node ${n.i} (${n.tag})`);
  }
});

test('walking up a ramp onto a deck, along a bridge, and falling off the edge', () => {
  const c = new Chase({ level: 0, seed: 1 });
  c.state = 'play';
  const p = c.player;
  // start at the bottom of the west ramp of deck 3 and walk east, up
  const ramp = STRIPS.find((s) => s.kind === 'ramp' && s.from === 'p3');
  Object.assign(p, { x: ramp.bx, y: 0, z: ramp.bz, grounded: true, surf: null });
  for (let i = 0; i < 40; i++) c.step(1 / 30, { x: 1, z: 0 });
  assert.ok(Math.abs(p.y - P.p3.y) < 0.05, `on deck 3? y=${p.y}`);
  // keep going east off the far side? the bridge to the big deck leaves north-east; walking south falls down
  let fell = false;
  for (let i = 0; i < 60; i++) for (const e of c.step(1 / 30, { x: 0, z: 1 })) if (e.type === 'fell') fell = true;
  assert.ok(fell, 'walking off the deck is a fall (back to the start)');
});

test('the broken bridge needs a jump; a jump crosses it', () => {
  const halves = STRIPS.filter((s) => s.broken);
  assert.equal(halves.length, 2);
  const c = new Chase({ level: 0, seed: 1 });
  c.state = 'play';
  const p = c.player;
  const a = halves[0];
  const dx = a.bx - a.ax;
  const dz = a.bz - a.az;
  const l = Math.hypot(dx, dz);
  // walk to the end of the first half, then over the gap without jumping: down you go
  Object.assign(p, { x: a.ax + (dx / l) * 0.5, y: a.ay, z: a.az + (dz / l) * 0.5, grounded: true, surf: a });
  let fell = false;
  for (let i = 0; i < 90 && !fell; i++) for (const e of c.step(1 / 30, { x: dx / l, z: dz / l })) if (e.type === 'fell') fell = true;
  assert.ok(fell, 'walking fell through the gap');
  // again with a jump at the edge
  Object.assign(p, { x: a.ax + (dx / l) * 0.5, y: a.ay, z: a.az + (dz / l) * 0.5, grounded: true, surf: a, vy: 0, launch: null });
  let jumped = false;
  for (let i = 0; i < 120; i++) {
    const o = Math.hypot(p.x - a.bx, p.z - a.bz);
    if (!jumped && o < 0.5) jumped = c.jump();
    c.step(1 / 30, { x: dx / l, z: dz / l });
    if (jumped && p.grounded && Math.hypot(p.x - P.p2.x, p.z - P.p2.z) < 1.5) break;
  }
  assert.ok(jumped);
  assert.ok(Math.abs(p.y - P.p2.y) < 0.1, `reached the east deck, y=${p.y}`);
});

test('a mushroom throws you onto its deck; a slide brings you down fast', () => {
  for (const m of MUSHROOMS) {
    const c = new Chase({ level: 0, seed: 1 });
    c.state = 'play';
    const p = c.player;
    Object.assign(p, { x: m.x, y: 0, z: m.z, grounded: true });
    for (let i = 0; i < 90; i++) c.step(1 / 30, { x: 0, z: 0 });
    assert.ok(Math.abs(p.y - P[m.to].y) < 0.05, `mushroom to ${m.to}: y=${p.y}`);
  }
  const c = new Chase({ level: 0, seed: 1 });
  c.state = 'play';
  const p = c.player;
  const s = STRIPS.find((x) => x.kind === 'slide' && x.from === 'p5');
  Object.assign(p, { x: s.ax, y: s.ay, z: s.az, grounded: true, surf: null });
  let t = 0;
  while (p.y > 0.05 && t < 5) { c.step(1 / 30, { x: 0, z: 0 }); t += 1 / 30; }
  assert.ok(t < 1.5, `slid down in ${t.toFixed(2)} s`);
});

test('nobody leaves the playground and the floor is never below the ground', () => {
  const c = new Chase({ level: 5, seed: 2 });
  for (let i = 0; i < 30 * 70; i++) {
    c.step(1 / 30, { x: Math.sin(i / 40), z: Math.cos(i / 55) });
    if (i % 25 === 0) c.jump();
    for (const e of c.all) {
      assert.ok(Math.hypot(e.x, e.z) <= GROUND_R);
      assert.ok(e.y >= -0.001);
    }
  }
  assert.equal(c.state, 'over');
  assert.equal(floorAt(30, 30, 0).y, 0);
});

test('the youngest grab by touching, and the animals are slower', () => {
  const c = new Chase({ level: 0, seed: 1, easy: true });
  c.state = 'play';
  const h = c.holder;
  h.immune = 0;
  Object.assign(c.player, { x: h.x + 0.5, y: h.y, z: h.z });
  c.step(1 / 30);
  assert.equal(c.holder, c.player);
  assert.ok(c.rivals[0].speed < new Chase({ level: 0, seed: 1 }).rivals[0].speed);
});

test('damaged saves load safely', () => {
  for (const bad of [null, 1, 'x', { unlocked: 50, stars: { 1: 7, 2: 3 } }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= LEVELS.length);
    for (const v of Object.values(s.stars)) assert.ok(v >= 1 && v <= 3);
  }
});

test('falling off a deck takes the dino back to the start (and the tail goes to the nearest animal)', () => {
  const c = new Chase({ level: 0, seed: 1 });
  c.state = 'play';
  const p = c.player;
  c.holder = p;
  // walk south off the big deck (no bridge there)
  Object.assign(p, { x: P.p0.x - 2.6, y: P.p0.y, z: P.p0.z - 1, grounded: true });
  let fell = false;
  for (let i = 0; i < 90 && !fell; i++) for (const e of c.step(1 / 30, { x: -1, z: 0 })) if (e.type === 'fell') fell = true;
  assert.ok(fell, 'fell');
  assert.ok(Math.abs(p.y - P.p0.y) < 0.01, 'back on the start deck');
  assert.notEqual(c.holder, p);
  // walking down a ramp is not a fall
  const d = new Chase({ level: 0, seed: 1 });
  d.state = 'play';
  const ramp = STRIPS.find((x) => x.kind === 'ramp' && x.from === 'p3');
  Object.assign(d.player, { x: P.p3.x - 1.5, y: P.p3.y, z: P.p3.z, grounded: true });
  let f2 = false;
  for (let i = 0; i < 60; i++) for (const e of d.step(1 / 30, { x: -1, z: 0 })) if (e.type === 'fell') f2 = true;
  assert.ok(!f2 && d.player.y < 0.1, `walked down the ramp, y=${d.player.y} ${ramp.kind}`);
});

test('every level has a shipped panorama wired as its backdrop (art/pano<level+1>.webp)', async () => {
  const { existsSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const artDir = fileURLToPath(new URL('../../../assets/games/golden_tail/art/', import.meta.url));
  for (let i = 0; i < LEVELS.length; i++) assert.ok(existsSync(`${artDir}pano${i + 1}.webp`), `missing pano${i + 1}.webp for level ${i}`);
  assert.ok(existsSync(`${artDir}win.webp`), 'missing win.webp');
  assert.ok(existsSync(`${artDir}icon_star.webp`), 'missing icon_star.webp');
});

import fs from 'node:fs';

test('Golden Tail Oasis anchor: title and levels move to the oasis', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['الذيل الذهبي في الواحة', 'Golden Tail Oasis']"));
  assert.deepEqual(LEVELS.map((l) => l.en), ['Palm Plaza', 'Oasis Bridges', 'Oasis Bouncers', 'Sand Slides', 'Oasis Lookout', 'Oasis Cup']);
  assert.deepEqual(LEVELS.map((l) => l.time), [40, 45, 50, 55, 60, 60]); // round clocks unchanged
});

// ---- Phase 2F: six genuinely different arenas --------------------------------------------------------------------------------

import { ARENAS, getArena, arenaSignature, TRUNKS } from '../src/data.js';

// Level 1's arena as it shipped when all six levels shared it (captured from the pre-2F data.js).
const L1_BEFORE = {"PLATFORMS":[{"id":"p0","x":0,"z":0,"r":3.4,"y":3},{"id":"p1","x":-10,"z":-6,"r":2.6,"y":4.5},{"id":"p2","x":10,"z":-6,"r":2.6,"y":4},{"id":"p3","x":-10,"z":7,"r":2.6,"y":2.4},{"id":"p4","x":10,"z":8,"r":2.6,"y":5},{"id":"p5","x":0,"z":-13,"r":2.8,"y":6},{"id":"p6","x":0,"z":12.5,"r":2.3,"y":1.2}],"STRIPS":[{"kind":"bridge","ax":-2.6582280697088874,"ay":3,"az":-1.5949368418253325,"bx":-8.027766270861148,"by":4.5,"bz":-4.8166597625166885,"w":1.5,"rails":true,"from":"p0","to":"p1"},{"kind":"bridge","ax":-2.5396189536090255,"ay":3,"az":1.7777332675263178,"bx":-8.115766582806206,"by":2.4,"bz":5.681036607964344,"w":1.5,"rails":true,"from":"p0","to":"p3"},{"kind":"bridge","ax":-8.115766582806206,"ay":4.5,"az":-7.318963392035656,"bx":-2.048079801297601,"by":6,"bz":-11.56634413909168,"w":1.5,"rails":true,"from":"p1","to":"p5"},{"kind":"bridge","ax":8.115766582806206,"ay":4,"az":-7.318963392035656,"bx":2.048079801297601,"by":6,"bz":-11.56634413909168,"w":1.5,"rails":true,"from":"p2","to":"p5"},{"kind":"bridge","ax":0,"ay":3,"az":3.1,"bx":0,"by":1.2,"bz":10.5,"w":1.5,"rails":true,"from":"p0","to":"p6"},{"kind":"bridge","ax":10,"ay":4,"az":-3.6999999999999997,"bx":10,"by":5,"bz":5.699999999999999,"w":1.5,"rails":true,"from":"p2","to":"p4"},{"kind":"ramp","ax":-12.3,"ay":2.4,"az":7,"bx":-16.9,"by":0,"bz":7,"w":1.8,"rails":false,"from":"p3"},{"kind":"ramp","ax":0,"ay":1.2,"az":14.5,"bx":0,"by":0,"bz":17.9,"w":1.8,"rails":false,"from":"p6"},{"kind":"ramp","ax":12.3,"ay":4,"az":-6,"bx":18.3,"by":0,"bz":-6,"w":1.8,"rails":false,"from":"p2"},{"kind":"slide","ax":2,"ay":6,"az":-14.5,"bx":8.72,"by":0,"bz":-19.54,"w":1.3,"rails":true,"from":"p5"},{"kind":"slide","ax":11.38,"ay":5,"az":9.84,"bx":15.580000000000002,"by":0,"bz":15.440000000000001,"w":1.3,"rails":true,"from":"p4"},{"kind":"slide","ax":-11.84,"ay":4.5,"az":-7.38,"bx":-16.88,"by":0,"bz":-11.16,"w":1.3,"rails":true,"from":"p1"},{"kind":"bridge","ax":2.6582280697088874,"ay":3,"az":-1.5949368418253325,"bx":4.571253537143727,"by":3.5,"bz":-2.7427521222862365,"w":1.5,"rails":true,"broken":true},{"kind":"bridge","ax":6.114740803426308,"ay":3.5,"az":-3.6688444820557846,"bx":8.027766270861148,"by":4,"bz":-4.8166597625166885,"w":1.5,"rails":true,"broken":true}],"MUSHROOMS":[{"x":-4.5,"z":-4.5,"to":"p1","r":0.8},{"x":-4,"z":-17.5,"to":"p5","r":0.8},{"x":14.5,"z":2.5,"to":"p4","r":0.8},{"x":-5.2,"z":8.6,"to":"p0","r":0.8}],"TRUNKS":[{"x":0,"z":0,"r":0.75,"top":2.7},{"x":-10,"z":-6,"r":0.75,"top":4.2},{"x":10,"z":-6,"r":0.75,"top":3.7},{"x":-10,"z":7,"r":0.75,"top":2.1},{"x":10,"z":8,"r":0.75,"top":4.7},{"x":0,"z":-13,"r":0.75,"top":5.7},{"x":0,"z":12.5,"r":0.75,"top":0.8999999999999999}]};

test('level 1 keeps the original shared arena byte-for-byte (platforms, strips, mushrooms, trunks)', () => {
  assert.deepEqual({ PLATFORMS, STRIPS, MUSHROOMS, TRUNKS }, L1_BEFORE);
  assert.deepEqual(getArena(0), ARENAS[0]);
});

test('the six levels have six genuinely different arenas, each themed by its layout', () => {
  assert.equal(ARENAS.length, LEVELS.length);
  assert.equal(new Set(ARENAS.map(arenaSignature)).size, 6, 'arena signatures must all differ');
  const kinds = ARENAS.map((a) => ({
    platforms: a.platforms.length,
    slides: a.strips.filter((s) => s.kind === 'slide').length,
    bridges: a.strips.filter((s) => s.kind === 'bridge' && !s.broken).length,
    broken: a.strips.filter((s) => s.broken).length / 2,
    mushrooms: a.mushrooms.length,
    maxY: Math.max(...a.platforms.map((p) => p.y)),
    span: Math.max(...a.platforms.map((p) => Math.hypot(p.x, p.z))),
  }));
  // the ladder's identities: bridges (2) · bouncers (3) · slides (4) · lookout heights (5) · widest cup final (6)
  assert.ok(kinds[1].bridges > kinds[0].bridges, 'level 2 is the bridge arena');
  assert.ok(kinds[2].mushrooms >= kinds[0].mushrooms && kinds[2].maxY > kinds[0].maxY, 'level 3 climbs by bouncing');
  assert.ok(kinds[3].slides > kinds[0].slides, 'level 4 is the slide arena');
  assert.ok(kinds[4].maxY > kinds[3].maxY, 'level 5 is the high lookout');
  assert.ok(kinds[5].span > kinds[0].span && kinds[5].broken === 2, 'level 6 is the widest, with two broken bridges');
  for (const [i, a] of ARENAS.entries()) {
    for (const id of ['p0', 'p1', 'p2', 'p3', 'p4', 'p5']) assert.ok(a.platforms.some((p) => p.id === id), `arena ${i + 1} needs deck ${id} (rival spawns)`);
    for (const m of a.mushrooms) assert.ok(a.platforms.some((p) => p.id === m.to), `arena ${i + 1} mushroom targets a real deck`);
  }
});

test('every arena is fully traversable: the walking graph connects the start deck to every deck', () => {
  for (const [i, arena] of ARENAS.entries()) {
    const nodes = buildGraph(arena);
    // same reachability rule as the animals' own test, for every node as a goal
    for (const n of nodes) {
      const d = distancesTo(nodes, n.i);
      const unreachable = nodes.filter((m) => d[m.i] === Infinity && m.tag !== 'mushroom' && m.tag !== 'edge' && m.tag !== 'slide');
      assert.equal(unreachable.length, 0, `arena ${i + 1}: ${unreachable.length} nodes cannot reach node ${n.i} (${n.tag})`);
    }
    // forward from the start deck centre, following the graph's own one-way edges (slides/mushrooms/drops)
    const start = nodes.find((n) => n.tag === 'p0');
    const seen = new Set([start.i]);
    const queue = [start.i];
    while (queue.length) {
      const u = queue.pop();
      for (const e of nodes[u].out) if (!seen.has(e.to)) { seen.add(e.to); queue.push(e.to); }
    }
    for (const p of arena.platforms) {
      const centre = nodes.find((n) => n.tag === p.id);
      assert.ok(seen.has(centre.i), `arena ${i + 1}: deck ${p.id} not reachable from the start deck`);
    }
  }
});

test('every mushroom in every arena throws you onto its deck; every slide brings you down', () => {
  for (const [i, arena] of ARENAS.entries()) {
    const P = Object.fromEntries(arena.platforms.map((p) => [p.id, p]));
    for (const m of arena.mushrooms) {
      const c = new Chase({ level: i, seed: 1 });
      c.state = 'play';
      Object.assign(c.player, { x: m.x, y: 0, z: m.z, grounded: true });
      for (let k = 0; k < 90; k++) c.step(1 / 30, { x: 0, z: 0 });
      assert.ok(Math.abs(c.player.y - P[m.to].y) < 0.05, `arena ${i + 1} mushroom to ${m.to}: y=${c.player.y}`);
    }
    for (const s of arena.strips.filter((x) => x.kind === 'slide')) {
      const c = new Chase({ level: i, seed: 1 });
      c.state = 'play';
      Object.assign(c.player, { x: s.ax, y: s.ay, z: s.az, grounded: true, surf: null });
      let t = 0;
      while (c.player.y > 0.05 && t < 5) { c.step(1 / 30, { x: 0, z: 0 }); t += 1 / 30; }
      assert.ok(t < 2.5, `arena ${i + 1} slide from ${s.from} took ${t.toFixed(2)} s`);
    }
  }
});

test('the play robot completes all six levels (every round reaches its end)', () => {
  let summed = 0;
  for (const [i, lv] of LEVELS.entries()) {
    const c = new Chase({ level: i, seed: 3 });
    const dt = 1 / 30;
    let guard = 0;
    while (c.state !== 'over' && guard++ < 30 * 200) c.step(dt, robot(c, dt));
    assert.equal(c.state, 'over', `level ${lv.id} never finished`);
    summed += c.time;
  }
  console.log(`robot single-pass summed level times: ${summed.toFixed(0)} s (round clocks sum ${LEVELS.reduce((a, l) => a + l.time, 0)} s + ready countdowns)`);
});

test('certification regression: no strip endpoint leaves the playground (the 2F stuck-dino trap)', () => {
  // Phase 2F bug: arena 6's p4 slide ended at radius ≈25.7, outside GROUND_R
  // (25) — a sliding dino stuck against the rim clamp at y≈1.1 forever.
  for (const [i, arena] of ARENAS.entries()) {
    for (const s of arena.strips) {
      for (const [ex, ez, tag] of [[s.ax, s.az, 'start'], [s.bx, s.bz, 'end']]) {
        const r = Math.hypot(ex, ez);
        assert.ok(r <= 23.9, `arena ${i + 1} ${s.kind} from ${s.from} ${tag} ends at r=${r.toFixed(2)} (> 23.9)`);
      }
    }
    // dynamic proof: a dino placed at the top of every slide reaches the floor
    for (const s of arena.strips.filter((x) => x.kind === 'slide')) {
      const c = new Chase({ level: i, seed: 7 });
      c.state = 'play';
      Object.assign(c.player, { x: s.ax, y: s.ay, z: s.az, grounded: true, surf: null });
      let steps = 0;
      while (c.player.y > 0.05 && steps < 30 * 5) { c.step(1 / 30, { x: 0, z: 0 }); steps++; }
      assert.ok(c.player.y <= 0.05, `arena ${i + 1} slide from ${s.from}: dino stuck at y=${c.player.y.toFixed(2)}, r=${Math.hypot(c.player.x, c.player.z).toFixed(2)} after ${(steps / 30).toFixed(1)}s`);
      assert.ok(Math.hypot(c.player.x, c.player.z) < GROUND_R, 'dino must stay inside the playground');
    }
  }
});

test('tournament ladder: a win unlocks exactly the next level, 1→6, and old saves migrate untouched', () => {
  // the progression rule main.js applies on a win (save.unlocked = i + 2, capped at the last level)
  let save = normalizeSave(null);
  assert.equal(save.unlocked, 1);
  for (let i = 0; i < LEVELS.length; i++) {
    assert.ok(i + 1 <= save.unlocked, `level ${i + 1} should be unlocked at this rung`);
    if (i + 2 > save.unlocked && i + 1 < LEVELS.length) save.unlocked = i + 2;
    save = normalizeSave(save); // round-trip through the save cleaner at every rung
  }
  assert.equal(save.unlocked, 6);
  // level ids and order never moved, so a finished pre-2F save keeps every star and unlock
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6]);
  const old = { unlocked: 6, stars: { 1: 3, 2: 2, 6: 1 }, muted: true };
  assert.deepEqual(normalizeSave(old), old);
  const mid = { unlocked: 3, stars: { 1: 3, 2: 1 } };
  assert.deepEqual(normalizeSave(mid), { unlocked: 3, stars: { 1: 3, 2: 1 }, muted: false });
});
