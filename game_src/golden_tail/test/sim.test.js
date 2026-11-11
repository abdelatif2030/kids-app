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
    return walkTo(c, c.nodeNear(h));
  }
  p._repick = (p._repick ?? 0) - dt;
  if (p._goal === undefined || p._repick <= 0) {
    let best = 0;
    let bs = -Infinity;
    const near = c.rivals.map((r) => c.nodeNear(r));
    for (const n of c.nodes) {
      const s = Math.min(...near.map((k) => c.dist[k][n.i]));
      if (Number.isFinite(s) && s > bs) { bs = s; best = n.i; }
    }
    p._goal = best;
    p._repick = 1.5;
  }
  return walkTo(c, p._goal);
}

function walkTo(c, goal) {
  const p = c.player;
  let n = p._next !== undefined ? c.nodes[p._next] : null;
  if (!n || Math.abs(n.y - p.y) > 1.5 || p._goalWas !== goal) { n = c.nodes[c.nodeNear(p)]; p._next = n.i; p._goalWas = goal; }
  if (Math.hypot(n.x - p.x, n.z - p.z) < 0.5 && Math.abs(n.y - p.y) < 0.7 && n.i !== goal) {
    let bc = Infinity;
    let best = n.i;
    for (const e of n.out) if (e.d + c.dist[goal][e.to] < bc) { bc = e.d + c.dist[goal][e.to]; best = e.to; }
    p._next = best;
    n = c.nodes[best];
  }
  const dx = n.x - p.x;
  const dz = n.z - p.z;
  const l = Math.hypot(dx, dz) || 1;
  return l < 0.05 ? { x: 0, z: 0 } : { x: dx / l, z: dz / l };
}

test('a robot dino wins rounds at every level', () => {
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
    assert.ok(wins >= 1, `the robot never won level ${lv.id}`);
  }
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
  for (let i = 0; i < 60; i++) c.step(1 / 30, { x: 0, z: 1 });
  assert.ok(p.y < 0.05, `fell to the ground, y=${p.y}`);
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
  for (let i = 0; i < 90 && p.y > 0.05; i++) c.step(1 / 30, { x: dx / l, z: dz / l });
  assert.ok(p.y < 0.05, 'walking fell through the gap');
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
