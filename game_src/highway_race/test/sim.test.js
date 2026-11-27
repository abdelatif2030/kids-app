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
  while (r.state !== 'done' && t < r.cfg.time + 30) { drive(r); r.step(1 / 30); t += 1 / 30; }
  return { r, t };
}

test('three stages, longer and busier', () => {
  assert.equal(STAGES.length, 6);
  assert.ok(STAGES[2].dist > STAGES[0].dist && STAGES[2].traffic > STAGES[0].traffic);
  assert.ok(Math.abs(bend(500)) < 40);
});

test('a robot driver beats the clock and the rival on every stage, with a few bumps', () => {
  for (let i = 0; i < STAGES.length; i++) {
    const { r, t } = run(i);
    console.log(`stage ${i + 1}: ${r.won ? 'won' : r.state} in ${t.toFixed(0)}s of ${r.cfg.time}, bumps ${r.p.bumps}, lead ${r.p.lead.toFixed(0)} m`);
    assert.equal(r.state, 'done');
    assert.ok(r.won, `stage ${i + 1} not won`);
  }
});

test('a good robot driver earns 3 stars on every stage (the third star must be earnable)', () => {
  for (let i = 0; i < STAGES.length; i++) {
    const { r } = run(i);
    assert.equal(r.stars, 3, `stage ${i + 1}: carBumps ${r.p.carBumps} vs gentle allowance ${r.cfg.gentle}`);
  }
});

test('third star boundary: car bumps up to the stage allowance keep it, one more loses it; cone taps never count', () => {
  const finishWith = (carBumps, coneTaps) => {
    const r = new Race({ stage: 0, seed: 4 });
    r.state = 'run';
    r.traffic.length = 0;
    r.p.carBumps = carBumps;
    r.p.bumps = carBumps + coneTaps;
    r.rival.z = -100;
    r.p.z = r.cfg.dist - 1; r.p.v = 30;
    r.step(1 / 30);
    return r.stars;
  };
  assert.equal(finishWith(6, 0), 3);
  assert.equal(finishWith(6, 40), 3); // any number of cone taps still earns the star
  assert.equal(finishWith(7, 0), 2);
});

test('rubber-banding: a rival left far ahead eases off so the child can catch up', () => {
  const r = new Race({ stage: 0, seed: 3 });
  r.state = 'run';
  r.traffic.length = 0;
  r.rival.z = 320; r.rival.v = r.cfg.rival;
  for (let i = 0; i < 90; i++) r.step(1 / 30);
  assert.ok(r.rival.v < r.cfg.rival * 0.95, `rival should ease off, v=${r.rival.v.toFixed(1)} vs pace ${r.cfg.rival}`);
});

test('easy mode: a lazy robot (slow steering, no nitro) still wins stage 1', () => {
  const r = new Race({ stage: 0, easy: true, seed: 5 });
  let t = 0; let steerT = 0;
  while (r.state !== 'done' && t < r.cfg.time + 30) {
    steerT -= 1 / 30;
    if (steerT <= 0) {
      steerT = 0.5;
      let best = 0; let bd = -1;
      for (let l = 0; l < 4; l++) {
        let free = 80;
        for (const c of r.traffic) { if (c.lane !== l) continue; const dz = c.z - r.p.z; if (dz > -3 && dz < free) free = dz; }
        const score = free - Math.abs(LANES[l] - r.p.x) * 3;
        if (score > bd) { bd = score; best = l; }
      }
      r.steer(LANES[best] / (HALF - 1.1));
    }
    r.step(1 / 30); t += 1 / 30;
  }
  assert.equal(r.state, 'done');
  assert.ok(r.won, 'lazy robot should win easy stage 1');
});

test('road stars: driving through a star collects it and counts up', () => {
  const r = new Race({ stage: 0, seed: 4 });
  r.state = 'run';
  const pk = r.pickups[0];
  assert.ok(pk, 'stage should have pickups');
  r.p.x = LANES[pk.lane]; r.targetX = r.p.x; r.p.z = pk.z - 1; r.p.v = 20;
  const evs = r.step(1 / 30);
  assert.equal(r.starsGot, 1);
  assert.ok(evs.some((e) => e.type === 'pickup' && e.n === 1));
});

test('milestones fire exactly once each at 25/50/75 percent', () => {
  const r = new Race({ stage: 0, seed: 4 });
  r.state = 'run';
  r.traffic.length = 0;
  let count = 0;
  for (const f of [0.3, 0.55, 0.8, 0.9]) {
    r.p.z = r.cfg.dist * f;
    count += r.step(1 / 30).filter((e) => e.type === 'milestone').length;
  }
  assert.equal(count, 3);
});

test('save keeps stars for all six stages and the chosen car colour', () => {
  const s = normalizeSave({ stars: { 5: 2, 6: 3 }, unlocked: 6, color: 2 });
  assert.equal(s.stars[5], 2);
  assert.equal(s.stars[6], 3);
  assert.equal(s.color, 2);
  assert.equal(normalizeSave({ color: 9 }).color, 3);
  assert.equal(normalizeSave(null).color, 0);
});

test('doing nothing in the right lane runs out the clock or loses the lead, but never crashes the game', () => {
  const r = new Race({ stage: 2, seed: 8 });
  for (let i = 0; i < 30 * (r.cfg.time + 10) && r.state !== 'done'; i++) r.step(1 / 30);
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
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 6);
});
