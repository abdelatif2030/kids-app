import test from 'node:test';
import assert from 'node:assert/strict';
import { Race, COURSES, LAPS, normalizeSave, TUBE_X, RING_R } from '../src/sim.js';

const DT = 1 / 60;

// A good young pilot: steers to the next ring, boosts when charged, ducks under bridges and around pillars.
function pilot(r) {
  const p = r.player;
  const g = r.nextRing();
  let tx = g.x;
  let ty = g.y;
  for (const o of r.obstacles) {
    const ds = (o.s - p.s + r.length) % r.length;
    if (ds > 40) continue;
    if (o.kind === 'bridge') ty = Math.min(ty, o.y - o.half - 2.4);
    if (o.kind === 'pillar' && Math.abs(tx - o.x) < 5) tx = o.x + (tx >= o.x ? 5 : -5);
  }
  r.setSteer((tx - p.x) / 3, (ty - p.y) / 3);
  if (p.charge >= 0.66) r.boost();
}

function fly(course, brain, opts = {}) {
  const r = new Race({ course, seed: 11, ...opts });
  const seen = [];
  for (let i = 0; i < 60 * 400 && r.state !== 'done'; i++) {
    if (brain) brain(r);
    for (const e of r.step(DT)) seen.push(e.type);
  }
  return { r, seen };
}

test('every course is a closed loop with rings inside the flight tube', () => {
  for (let c = 0; c < COURSES.length; c++) {
    const r = new Race({ course: c });
    assert.ok(r.length > 1500 && r.length < 4000, `length ${r.length}`);
    const a = r.track.frame(0).p;
    const b = r.track.frame(r.length - 0.01).p;
    assert.ok(Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 2);
    for (const g of r.rings) assert.ok(Math.abs(g.x) < TUBE_X - RING_R + 1 && g.s > 0 && g.s < r.length);
    for (const o of r.obstacles) assert.ok(o.s >= 0 && o.s < r.length, `${o.kind} ${o.s}`);
  }
});

test('the countdown runs, then the race starts', () => {
  const r = new Race({ course: 0 });
  const seen = [];
  for (let i = 0; i < 60 * 4; i++) for (const e of r.step(DT)) seen.push(e);
  assert.ok(seen.some((e) => e.type === 'count'));
  assert.ok(seen.some((e) => e.type === 'go'));
  assert.equal(r.state, 'race');
  assert.ok(r.player.speed > 0);
});

test('a good pilot wins every course with rings, boosts and no bumps', () => {
  for (let c = 0; c < COURSES.length; c++) {
    const { r, seen } = fly(c, pilot);
    assert.equal(r.state, 'done', `course ${c}`);
    assert.equal(r.player.lap, LAPS);
    assert.equal(r.result.place, 1, `course ${c} place ${r.result.place}`);
    assert.equal(r.result.stars, 3);
    assert.ok(r.ringsHit >= r.rings.length * LAPS * 0.9, `rings ${r.ringsHit}/${r.rings.length * LAPS}`);
    assert.ok(seen.includes('boost') && seen.includes('lap') && seen.includes('finish'));
    assert.equal(r.bumps, 0, `course ${c} bumps`);
    assert.ok(r.result.time > 40 && r.result.time < 160, `time ${r.result.time}`);
  }
});

test('a child who never steers still gets around and finishes (rings pull them along)', () => {
  for (let c = 0; c < COURSES.length; c++) {
    const { r } = fly(c, null);
    assert.equal(r.state, 'done');
    assert.ok(r.result.stars >= 1);
  }
  const { r } = fly(0, null, { easy: true });
  assert.ok(r.ringsHit > r.rings.length, 'the youngest get help toward the rings');
});

test('rings charge the boost and the boost makes the plane faster', () => {
  const r = new Race({ course: 0 });
  for (let i = 0; i < 60 * 6; i++) r.step(DT);
  r.player.charge = 1;
  const v0 = r.player.speed;
  assert.ok(r.boost());
  for (let i = 0; i < 60; i++) r.step(DT);
  assert.ok(r.player.speed > v0 * 1.2);
  assert.equal(r.boost(), false, 'no double boost');
});

test('flying into a bridge deck is a soft bump, never the end', () => {
  const r = new Race({ course: 0 });
  for (let i = 0; i < 60 * 4; i++) r.step(DT);
  const br = r.obstacles.find((o) => o.kind === 'bridge');
  r.player.s = br.s - 30;
  r.player.y = br.y;
  let bumped = false;
  for (let i = 0; i < 60 && !bumped; i++) { r.setSteer(0, 0); r.player.y = br.y; bumped = r.step(DT).some((e) => e.type === 'bump'); }
  assert.ok(bumped);
  assert.equal(r.state, 'race');
  assert.ok(r.player.bump > 0 && r.player.imm > 0);
});

test('damaged saves load safely', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, best: {}, muted: false });
  assert.deepEqual(normalizeSave({ unlocked: 9, stars: { 1: 7, 2: 2 }, best: { 1: 'x', 2: 61.234 }, muted: 'yes' }), { unlocked: 1, stars: { 2: 2 }, best: { 2: 61.23 }, muted: false });
});
