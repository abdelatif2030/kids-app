import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Puzzle, LEVELS, normalizeSave } from '../src/sim.js';
import fs from 'node:fs';

const DT = 1 / 60;

function settle(p, max = 12) {
  let t = 0;
  while (p.state === 'play' && t < max) { p.step(DT); t += DT; if (t > 0.5 && p.settled()) break; }
  return t;
}

/** The robot: pulls the right pins (jar towers' pins, never the lava or trap pins), waiting for the candies between pulls. */
function solve(p, order) {
  const ids = order === 'rev' ? p.solution.slice().reverse() : p.solution;
  for (const id of ids) { if (p.state !== 'play') break; p.pull(id); settle(p); }
  let t = 0;
  while (p.state === 'play' && t < 10) { p.step(DT); t += DT; }
}

test('levels are stable at rest: nothing moves in 5 seconds, every candy is in its tower', () => {
  assert.equal(LEVELS, 12);
  for (let i = 0; i < LEVELS; i++) {
    const p = new Puzzle({ level: i });
    const before = p.balls.map((b) => [b.x, b.y]);
    for (let k = 0; k < 300; k++) p.step(DT);
    p.balls.forEach((b, j) => {
      assert.ok(Math.hypot(b.x - before[j][0], b.y - before[j][1]) < 0.01, `level ${i + 1} ball ${j} moved`);
      const tw = p.towers[b.tw];
      assert.ok(b.x > tw.x0 && b.x < tw.x1 && b.y > tw.topY, `level ${i + 1} ball ${j} outside its tower (${b.x.toFixed(2)},${b.y.toFixed(2)})`);
    });
    assert.equal(p.state, 'play');
    assert.ok(p.jarBalls >= p.target && p.target >= 4);
  }
});

test('a robot pulling the right pins wins at least 11 of 12 levels, in either order', () => {
  for (const order of ['fwd', 'rev']) {
    let wins = 0;
    for (let i = 0; i < LEVELS; i++) {
      const p = new Puzzle({ level: i });
      solve(p, order);
      console.log(`${order} level ${i + 1}: ${p.state} jar ${p.inJar}/${p.target} lost ${p.lost} stars ${p.stars} moves ${p.moves}`);
      if (p.state === 'won') wins += 1;
    }
    assert.ok(wins >= 11, `${order}: ${wins}/12`);
  }
});

test('decoy pins lose candies (or the ramp) when pulled first, in at least 3 levels', () => {
  let levelsWithDecoy = 0;
  for (let i = 0; i < LEVELS; i++) {
    const probe = new Puzzle({ level: i });
    const decoys = probe.pins.filter((x) => !probe.solution.includes(x.id));
    let bad = 0;
    for (const d of decoys) {
      const p = new Puzzle({ level: i });
      p.pull(d.id); settle(p);
      solve(p, 'fwd');
      if (p.lost > 0 || p.state !== 'won') bad += 1;
    }
    if (bad > 0) levelsWithDecoy += 1;
  }
  assert.ok(levelsWithDecoy >= 3, `${levelsWithDecoy}`);
});

test('undo restores the board; a pin pulls only once', () => {
  const p = new Puzzle({ level: 0 });
  const pin = p.pins.find((x) => x.role === 'lava');
  assert.ok(p.pull(pin.id));
  assert.equal(p.pull(pin.id), false);
  settle(p);
  assert.ok(p.lost > 0);
  assert.ok(p.undo());
  assert.equal(p.lost, 0);
  assert.equal(p.moves, 0);
  assert.ok(p.balls.every((b) => b.alive));
});

test('hint points to a pin of the solution', () => {
  const p = new Puzzle({ level: 3 });
  assert.ok(p.solution.includes(p.hint()));
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ unlocked: 99, stars: { 1: 9, 2: 3 } }).unlocked, 12);
  assert.deepEqual(normalizeSave({ stars: 5 }).stars, {});
});

test('Sweet-Maker\'s Pins anchor + kind rules: stars are solved + no-loss + full-jar sparkle, never move-par', () => {
  const src = fs.readFileSync(new URL('../src/sim.js', import.meta.url), 'utf8');
  assert.ok(!/stars = .*moves <= this\.par/.test(src), 'move-par still grades stars');
  assert.ok(/inJar >= this\.balls\.length/.test(src), 'sparkle star missing');
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("title: ['دبابيس الحلواني', \"Sweet-Maker's Pins\"]"));
});
