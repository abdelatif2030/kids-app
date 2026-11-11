import test from 'node:test';
import assert from 'node:assert/strict';
import { Pond, LEVELS, robotPlay, normalizeSave, sizeOf, KINDS } from '../src/sim.js';

function play(opts, mode = 'robot', maxT = 400) {
  const p = new Pond(opts);
  const dt = 1 / 30;
  const seen = { eat: 0, air: 0, hurt: 0, aim: 0, evolve: 0, boss: 0, bossHit: 0, leap: 0, heron: 0, kinds: new Set(), maxCombo: 0 };
  for (let i = 0; i < maxT * 30; i++) {
    if (mode === 'robot') {
      const m = robotPlay(p);
      p.setMove(m.x, m.z);
      if (m.leap) p.leap();
    }
    for (const e of p.step(dt)) {
      if (e.type === 'eat') { seen.eat++; seen.kinds.add(e.kind); if (e.air) seen.air++; seen.maxCombo = Math.max(seen.maxCombo, e.combo); }
      if (e.type in seen && typeof seen[e.type] === 'number') seen[e.type]++;
    }
    if (p.state !== 'play') break;
  }
  return { p, seen };
}

test('the robot clears all three levels: evolve, grow, beat the boss', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    let run;
    for (let k = 0; k < 3; k++) { run = play({ level: i, seed: 7 + i + k * 50 }); if (run.p.state === 'won') break; }
    const { p, seen } = run;
    console.log(`level ${i + 1}: ${p.state} t=${p.t.toFixed(0)}s power=${p.frog.power} eaten=${seen.eat} kinds=${[...seen.kinds]} hurt=${seen.hurt} aims=${seen.aim} leaps=${seen.leap} herons=${seen.heron} bossHits=${seen.bossHit} combo=${seen.maxCombo} stars=${p.result && p.result.stars}`);
    assert.equal(p.state, 'won', `level ${i + 1}`);
    assert.equal(seen.evolve, 1);
    assert.equal(seen.boss, 1);
    assert.ok(seen.bossHit >= 3);
    assert.ok(seen.aim >= 1);
  }
});

test('the robot wins most runs over many seeds', () => {
  let wins = 0;
  let n = 0;
  for (let i = 0; i < LEVELS.length; i++) for (let s = 0; s < 6; s++) { n++; if (play({ level: i, seed: 300 + i * 17 + s }).p.state === 'won') wins++; }
  console.log(`wins ${wins}/${n}`);
  assert.ok(wins >= n * 0.75);
});

test('the frog only eats critters that are not bigger, and grows by their number', () => {
  const p = new Pond({ level: 0, seed: 2 });
  p.critters = [];
  p.frog.power = 5;
  p.critters.push({ id: 900, kind: 'fly', x: p.frog.x + 1.5, z: p.frog.z, v: 2, a: 0, t: 0, r: 0.2, y: 0.9, air: 0, aim: 0, lash: 0, cool: 9, hopT: 0 });
  p.critters.push({ id: 901, kind: 'beetle', x: p.frog.x - 1.6, z: p.frog.z, v: 9, a: 0, t: 0, r: 0.3, y: 0, air: 0, aim: 0, lash: 0, cool: 9, hopT: 0 });
  p.rand = () => 0.99;
  for (let i = 0; i < 60; i++) p.step(1 / 30);
  assert.equal(p.frog.power, 7); // a 2 adds 2
  assert.ok(p.critters.some((c) => c.id === 901));
  assert.ok(sizeOf(40) > sizeOf(4) * 2);
});

test('a bigger frog aims first (a warning) and costs a heart only if the frog stays; leaping is safe', () => {
  const p = new Pond({ level: 0, seed: 4 });
  p.critters = [];
  p.rand = () => 0.99;
  const big = { id: 950, kind: 'frog', x: p.frog.x + 3, z: p.frog.z, v: 30, a: 0, t: 0, r: 0.8, y: 0, air: 0, aim: 0, lash: 0, cool: 0, hopT: 0 };
  p.critters.push(big);
  const ev = p.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'aim'));
  assert.equal(p.hearts, 3);
  for (let i = 0; i < 40; i++) p.step(1 / 30);
  assert.equal(p.hearts, 2);
  const q = new Pond({ level: 0, seed: 4 });
  q.critters = [{ ...big, cool: 0 }];
  q.rand = () => 0.99;
  q.step(1 / 30);
  q.leap();
  for (let i = 0; i < 12; i++) q.step(1 / 30);
  assert.equal(q.hearts, 3);
});

test('gulped after the last heart; easy mode has an extra heart and slower warnings', () => {
  const { p } = play({ level: 2, seed: 9 }, 'none', 300);
  console.log(`idle on level 3: ${p.state}, hearts ${p.hearts}`);
  assert.equal(p.state, 'lost');
  assert.equal(new Pond({ easy: true }).hearts, 4);
  assert.ok(KINDS.frog.danger);
});

test('saves are cleaned', () => {
  const s = normalizeSave({ unlocked: 9, drops: -3, stars: { 1: 3, 2: 0 }, best: { 1: 50 } });
  assert.equal(s.unlocked, 3);
  assert.equal(s.drops, 0);
  assert.deepEqual(s.stars, { 1: 3 });
  assert.deepEqual(s.best, { 1: 50 });
});
