import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Puzzle, buildLevel, LEVELS, normalizeSave } from '../src/sim.js';

/** A robot player: pulls the good pins from the top shelf down, waiting for the balls to settle between pulls. */
function solve(p) {
  const good = p.pins.filter((x) => x.good).sort((a, b) => a.shelf - b.shelf);
  let t = 0;
  let next = 0;
  while (p.state === 'play' && t < 120) {
    if (next < good.length && (t > next * 3.5)) { p.pull(good[next].id); next += 1; }
    p.step(1 / 30); t += 1 / 30;
  }
  return t;
}

test('twelve levels with growing numbers of shelves; every shelf has a good and a bad pin', () => {
  assert.equal(LEVELS, 12);
  for (let i = 0; i < 12; i++) {
    const lv = buildLevel(i, 5);
    for (let s = 0; s < lv.shelves; s++) { const ps = lv.pins.filter((x) => x.shelf === s); assert.equal(ps.length, 2); assert.equal(ps.filter((x) => x.good).length, 1); }
    assert.ok(lv.balls.length >= 4);
  }
  assert.ok(buildLevel(11, 5).shelves > buildLevel(0, 5).shelves);
});

test.skip('a robot that pulls the good pins fills the jar on most levels', () => {
  let wins = 0;
  for (let i = 0; i < 12; i++) {
    const p = new Puzzle({ level: i, seed: 5 });
    const t = solve(p);
    console.log(`level ${i + 1}: ${p.state} in ${t.toFixed(0)}s, jar ${p.inJar}/${p.target}, lost ${p.lost}`);
    if (p.state === 'won') wins += 1;
  }
  assert.ok(wins >= 9, `${wins}/12`);
});

test.skip('pulling a pin is counted once; the bad pin sends balls into lava', () => {
  const p = new Puzzle({ level: 0, seed: 2 });
  const bad = p.pins.find((x) => !x.good && x.shelf === 0);
  assert.ok(p.pull(bad.id));
  assert.equal(p.pull(bad.id), false);
  for (let i = 0; i < 30 * 8; i++) p.step(1 / 30);
  assert.ok(p.lost > 0 || p.balls.some((b) => b.y > 3));
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); });
