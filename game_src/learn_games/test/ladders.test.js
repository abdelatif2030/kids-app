import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, LADDERS, SLIDES, LAST, cellXY } from '../src/ladders/sim.js';

test('ladders go up, slides go down, none start where another ends', () => {
  for (const [a, b] of Object.entries(LADDERS)) assert.ok(b > Number(a));
  for (const [a, b] of Object.entries(SLIDES)) assert.ok(b < Number(a));
  const starts = new Set([...Object.keys(LADDERS), ...Object.keys(SLIDES)].map(Number));
  for (const end of [...Object.values(LADDERS), ...Object.values(SLIDES)]) assert.ok(!starts.has(end), `${end} chains`);
  assert.ok(!starts.has(LAST));
});

test('the board zig-zags: neighbours are next to each other', () => {
  for (let n = 1; n < LAST; n++) {
    const a = cellXY(n), b = cellXY(n + 1);
    assert.equal(Math.abs(a.col - b.col) + Math.abs(a.row - b.row), 1);
  }
});

test('young children roll 1-3, older 1-6', () => {
  const y = new Race(3, 1), o = new Race(6, 1);
  for (let i = 0; i < 200; i++) { const a = y.roll(), b = o.roll(); assert.ok(a >= 1 && a <= 3); assert.ok(b >= 1 && b <= 6); }
});

test('hops count one square at a time, turns alternate, a ladder or slide moves after the hops', () => {
  const r = new Race(6, 2);
  const e = r.move(3);
  assert.deepEqual(e.hops, [1, 2, 3]);
  assert.equal(e.ride.kind, 'ladder');
  assert.equal(r.pos[0], 11);
  assert.equal(r.turn, 1);
  r.pos[1] = 14;
  const s = r.move(2);
  assert.equal(s.ride.kind, 'slide');
  assert.equal(r.pos[1], 6);
});

test('every race ends with a winner, passing 30 is enough', () => {
  for (let seed = 1; seed < 200; seed++) {
    const r = new Race(seed % 2 ? 4 : 6, seed);
    let guard = 0;
    while (r.winner < 0 && guard++ < 500) r.move(r.roll());
    assert.ok(r.winner === 0 || r.winner === 1, `seed ${seed}`);
    assert.equal(r.pos[r.winner], LAST);
  }
});
