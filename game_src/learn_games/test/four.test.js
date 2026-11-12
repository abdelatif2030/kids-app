import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Four, COLS, ROWS } from '../src/four/sim.js';

test('discs stack from the bottom and turns alternate', () => {
  const g = new Four();
  assert.equal(g.drop(3).row, 0);
  assert.equal(g.drop(3).row, 1);
  assert.equal(g.at(3, 0), 0);
  assert.equal(g.at(3, 1), 1);
});

test('four across, down and diagonal win, and the line is reported', () => {
  const across = new Four();
  for (const c of [0, 0, 1, 1, 2, 2]) across.drop(c);
  const w = across.drop(3);
  assert.ok(w.won);
  assert.equal(w.line.length, 4);
  const down = new Four();
  for (const c of [0, 1, 0, 1, 0, 1]) down.drop(c);
  assert.ok(down.drop(0).won);
  const diag = new Four();
  for (const c of [0, 1, 1, 2, 2, 3, 2, 3, 3, 6]) diag.drop(c);
  assert.ok(diag.drop(3).won);
  assert.equal(diag.winner, 0);
});

test('a full column cannot take more, a full frame with no four is a draw', () => {
  const g = new Four(2, 2);
  g.drop(0); g.drop(0);
  assert.equal(g.canDrop(0), false);
  g.drop(1); g.drop(1);
  assert.ok(g.draw);
  assert.ok(g.over);
});

test('random games always end (win or draw)', () => {
  for (let s = 1; s < 300; s++) {
    const g = new Four();
    let a = s;
    while (!g.over) { a = (a * 16807) % 2147483647; const c = a % COLS; if (g.canDrop(c)) g.drop(c); }
    assert.ok(g.winner >= 0 || g.cells.every((col) => col.length === ROWS));
  }
});
