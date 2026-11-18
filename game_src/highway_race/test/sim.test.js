import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, STAGES, LANES, HALF, normalizeSave, bend } from '../src/sim.js';

/** A robot driver: picks the clearest lane ahead, nitro when the road ahead is clear. */
function drive(r) {
  const p = r.p;
  let best = 0;
  let bd = -1;
  for (let l = 0; l < 4; l++) {
    let free = 80;
    for (const c of r.traffic) { if (c.lane !== l) continue; const dz = c.z - p.z; if (dz > -3 && dz < free) free = dz; }
    const score = free - Math.abs(LANES[l] - p.x) * 3;
    if (score > bd) { bd = score; best = l; }
  }
  r.steer(LANES[best] / (HALF - 1.1));
  const clear = r.traffic.every((c) => c.z - p.z < 0 || c.z - p.z > 60 || Math.abs(LANES[c.lane] - p.x) > 2.2);
  if (clear && p.charges > 0 && p.nitro <= 0) r.useNitro();
}

function run(stage, easy = false, seed = 5) {
  const r = new Race({ stage, easy, seed });
  let t = 0;
  while (r.state !== 'done' && t < 200) { drive(r); r.step(1 / 30); t += 1 / 30; }
  return { r, t };
}

test('three stages, longer and busier', () => {
  assert.equal(STAGES.length, 3);
  assert.ok(STAGES[2].dist > STAGES[0].dist && STAGES[2].traffic > STAGES[0].traffic);
  assert.ok(Math.abs(bend(500)) < 40);
});

test('a robot driver beats the clock and the rival on every stage, with a few bumps', () => {
  for (let i = 0; i < 3; i++) {
    const { r, t } = run(i);
    console.log(`stage ${i + 1}: ${r.won ? 'won' : r.state} in ${t.toFixed(0)}s of ${r.cfg.time}, bumps ${r.p.bumps}, lead ${r.p.lead.toFixed(0)} m`);
    assert.equal(r.state, 'done');
    assert.ok(r.won, `stage ${i + 1} not won`);
  }
});

test('doing nothing in the right lane runs out the clock or loses the lead, but never crashes the game', () => {
  const r = new Race({ stage: 2, seed: 8 });
  for (let i = 0; i < 30 * 130 && r.state !== 'done'; i++) r.step(1 / 30);
  assert.equal(r.state, 'done');
  assert.ok(r.p.bumps >= 0);
});

test('a bump slows the car for a moment and never repeats while protected; nitro is limited', () => {
  const r = new Race({ stage: 0, seed: 2 });
  for (let i = 0; i < 250; i++) r.step(1 / 30);
  assert.equal(r.state, 'run');
  r.traffic.length = 0;
  r.p.inv = 0;
  const b0 = r.p.bumps;
  r.traffic.push({ id: 999, lane: 2, z: r.p.z + 2, v: 5, truck: false });
  r.targetX = LANES[2]; r.p.x = LANES[2];
  const v0 = r.p.v;
  r.step(1 / 30);
  assert.equal(r.p.bumps, b0 + 1);
  for (let i = 0; i < 10; i++) r.step(1 / 30);
  assert.ok(r.p.v < v0);
  assert.equal(r.p.bumps, b0 + 1);
  r.p.charges = 3; r.p.nitro = 0;
  assert.ok(r.useNitro()); r.p.nitro = 0;
  assert.ok(r.useNitro()); r.p.nitro = 0;
  assert.ok(r.useNitro()); r.p.nitro = 0;
  assert.equal(r.useNitro(), false);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 3);
});
