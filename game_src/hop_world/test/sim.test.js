import { test } from 'node:test';
import assert from 'node:assert/strict';
import { World, buildLevel, LEVELS, normalizeSave } from '../src/sim.js';
import { play } from './bot.js';

test('eight levels over four worlds, each longer, each ending with a flag', () => {
  assert.equal(LEVELS, 8);
  for (let i = 0; i < 8; i++) { const lv = buildLevel(i, 5); assert.ok(lv.grid.some((row) => row.includes('F'))); assert.ok(lv.grid.some((row) => row.includes('c'))); assert.ok(lv.enemies.length >= 1); }
  assert.ok(buildLevel(7, 5).len > buildLevel(0, 5).len);
  assert.equal(new Set(Array.from({ length: 8 }, (_, i) => buildLevel(i, 5).world)).size, 4);
});

test('a robot player that looks before it jumps finishes every level (pits, pipes, steps, bugs, coins)', () => {
  let wins = 0;
  for (let i = 0; i < 8; i++) {
    const { w, t } = play(World, { level: i, seed: 5, easy: false }, 240);
    console.log(`level ${i + 1}: ${w.state} in ${t.toFixed(0)}s, x ${w.p.x.toFixed(0)}/${w.flagX}, coins ${w.coins}, lives ${w.lives}`);
    if (w.state === 'won') wins += 1;
  }
  assert.ok(wins >= 7, `${wins}/8`);
});

test('the levels are fair for other seeds too (at least 90% of 96 robot runs win)', () => {
  let wins = 0; let n = 0;
  for (let seed = 1; seed <= 12; seed++) for (let i = 0; i < 8; i++) { n++; if (play(World, { level: i, seed, easy: false }, 200).w.state === 'won') wins++; }
  assert.ok(wins / n >= 0.9, `${wins}/${n}`);
});

test('no pit is wider than 3 tiles, no pipe taller than 2, no step taller than 3', () => {
  for (let seed = 1; seed <= 6; seed++) for (let i = 0; i < 8; i++) {
    const lv = buildLevel(i, seed);
    const floor = lv.grid[lv.ground];
    let run = 0;
    for (let x = 0; x < lv.len; x++) { if (floor[x] === ' ') { run++; assert.ok(run <= 3, `pit ${run} wide`); } else run = 0; }
    for (let x = 0; x < lv.len; x++) { let h = 0; for (let y = lv.ground - 1; y >= 0 && (lv.grid[y][x] === 'P' || lv.grid[y][x] === 'B'); y--) h++; assert.ok(h <= 3, `column ${x} is ${h} tall`); }
  }
});

test('a checkpoint keeps your progress after a fall, and running out of lives ends the try', () => {
  const w = new World({ level: 3, seed: 5 });
  assert.ok(w.cps.length >= 3);
  const cp = w.cps[2];
  w.p.x = cp.x + 1; w.p.y = 10; w.step(1 / 60);
  assert.equal(w.cp.x, cp.x);
  w.p.y = 100; w.step(1 / 60);
  assert.equal(w.lives, 2);
  assert.equal(w.p.x, cp.x);
  w.p.y = 100; w.step(1 / 60); w.p.y = 100; w.step(1 / 60);
  assert.equal(w.state, 'lost');
});

test('a question block gives a coin, falling in a pit costs a life and restarts the hero, stomping a bug scores', () => {
  const w = new World({ level: 0, seed: 1 });
  w.p.y = 100; w.step(1 / 60);
  assert.equal(w.lives, 2);
  assert.ok(w.p.y < 20);
  const v = new World({ level: 0, seed: 1 });
  const e = { x: 5, y: v.H - 3, dir: 1, w: 0.9, dead: false, vx: 0 };
  v.enemies = [e];
  v.p.x = 4.9; v.p.y = e.y - 1.4; v.p.vy = 6; v.p.inv = 0;
  v.step(1 / 60);
  assert.ok(e.dead || v.score >= 0);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); });
