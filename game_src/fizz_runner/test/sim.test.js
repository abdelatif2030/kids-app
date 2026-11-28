import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, ENVS, LANES, MISSIONS, normalizeSave } from '../src/sim.js';

/** A robot runner: switches to the safest lane, jumps barriers and ramps, slides under overhead bars. */
function bot(r) {
  const z = r.z;
  const near = r.things.filter((t) => !t.done && t.z > z - 0.5 && t.z < z + 16);
  const danger = (lane) => near.filter((t) => (t.lane === lane || t.lane === -1) && ['car', 'truck', 'movecar'].includes(t.kind) && t.z < z + 14);
  let want = r.lane;
  if (danger(r.lane).length) { const opts = [0, 1, 2].filter((l) => !danger(l).length); if (opts.length) want = opts.sort((a, b) => Math.abs(a - r.lane) - Math.abs(b - r.lane))[0]; }
  if (want < r.lane) r.left(); else if (want > r.lane) r.right();
  for (const t of near) {
    const d = t.z - z;
    if ((t.lane === r.lane || t.lane === -1) && d < 4.2 && d > 0.6) { if (t.kind === 'barrier' || t.kind === 'cone') r.jump(); if (t.kind === 'overhead') r.doSlide(); }
  }
}

test('six environments, each longer than a kilometre, with missions', () => {
  assert.equal(ENVS.length, 6);
  assert.ok(ENVS.every((e) => e.len >= 1000));
  assert.equal(MISSIONS.length, 5);
});

test('a robot runner survives long stretches on every environment, collects cans and reaches speed', () => {
  for (let i = 0; i < 6; i++) {
    const r = new Run({ env: i, seed: 5 });
    let t = 0;
    while (r.state === 'run' && t < 200) { bot(r); r.step(1 / 60); t += 1 / 60; }
    console.log(`${r.env.id}: ${r.state} at ${r.z.toFixed(0)} m, cans ${r.cans}, speed ${r.speed.toFixed(0)}, dodged ${r.dodged}, stunts ${r.stuntsDone}`);
    assert.ok(r.z > 200, `${r.env.id} only ${r.z}`);
    assert.ok(r.cans > 0);
  }
});

test('a crash is a stumble (hearts), three crashes end the run, a shield absorbs one hit, jumping clears a barrier, sliding clears an overhead bar', () => {
  const r = new Run({ env: 0, seed: 1 });
  r.things = [{ kind: 'barrier', lane: 1, z: 5, done: false, id: 1 }];
  for (let i = 0; i < 120 && r.state === 'run'; i++) r.step(1 / 60);
  assert.equal(r.state, 'run'); // kind rules: one hit no longer ends the run
  assert.equal(r.hearts, 2);
  for (const left of [1, 0]) {
    r.inv = 0; r.things = [{ kind: 'barrier', lane: 1, z: r.z + 5, done: false, id: 2 }];
    for (let i = 0; i < 120 && r.state === 'run'; i++) r.step(1 / 60);
    assert.equal(r.hearts, left);
  }
  assert.equal(r.state, 'over');
  const s = new Run({ env: 0, seed: 1 });
  s.shield = 5; s.things = [{ kind: 'barrier', lane: 1, z: 5, done: false, id: 1 }];
  for (let i = 0; i < 120; i++) s.step(1 / 60);
  assert.equal(s.state, 'run');
  const j = new Run({ env: 0, seed: 1 });
  j.things = [{ kind: 'barrier', lane: 1, z: 8, done: false, id: 1 }];
  for (let i = 0; i < 6; i++) j.step(1 / 60);
  j.jump();
  for (let i = 0; i < 80; i++) j.step(1 / 60);
  assert.equal(j.state, 'run');
  const o = new Run({ env: 0, seed: 1 });
  o.things = [{ kind: 'overhead', lane: -1, z: 8, done: false, id: 1 }];
  for (let i = 0; i < 12; i++) o.step(1 / 60);
  o.doSlide();
  for (let i = 0; i < 60; i++) o.step(1 / 60);
  assert.equal(o.state, 'run');
});

test('cans are collected, magnets pull them, ramps give stunt points', () => {
  const r = new Run({ env: 0, seed: 1 });
  r.things = [{ kind: 'can', lane: 1, z: 4, y: 0.9, done: false, id: 1 }, { kind: 'ramp', lane: 1, z: 12, done: false, id: 2 }];
  for (let i = 0; i < 180; i++) r.step(1 / 60);
  assert.equal(r.cans, 1);
  assert.ok(r.stuntsDone >= 1);
  assert.ok(LANES.length === 3);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 6); });

import fs from 'node:fs';

test('Fizzo in Egypt anchor: title and the six runs are Egyptian places', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("title: ['فيزو في مصر', 'Fizzo in Egypt']"));
  assert.deepEqual(ENVS.map((e) => e.en), ['Cairo Streets', 'Downtown Cairo', 'Khan el-Khalili', 'Helwan Workshops', 'Corniche Road', 'Fizzy Bonus']);
  assert.deepEqual(ENVS.map((e) => e.id), ['city', 'downtown', 'shops', 'industry', 'highway', 'bonus']); // ids unchanged
});
