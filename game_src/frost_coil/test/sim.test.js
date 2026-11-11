import test from 'node:test';
import assert from 'node:assert/strict';
import { Puzzle, LEVELS, makeLevel, trace, solve, turn, turnN, turnsTo, normalizeSave, N, E, S, W } from '../src/sim.js';

test('a quarter turn goes N->E->S->W', () => {
  assert.equal(turn(N), E);
  assert.equal(turn(W), N);
  assert.equal(turn(N | S), E | W);
  assert.equal(turnN(N | E, 4), N | E);
});

test('every level starts unsolved, is solvable, and the moves leave room to spare', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    const lv = makeLevel(i);
    assert.equal(trace(lv).done, false, `level ${i + 1} starts solved`);
    assert.ok(lv.min >= 3, `level ${i + 1} too easy (${lv.min})`);
    assert.ok(lv.moves >= lv.min + 8, `level ${i + 1}`);
    assert.ok(lv.path[0][0] === lv.rows - 1 && lv.path[0][1] === 0);
    assert.ok(lv.path.at(-1)[0] === 0 && lv.path.at(-1)[1] === lv.cols - 1);
    const p = new Puzzle(i);
    assert.equal(solve(p), 'won', `level ${i + 1}`);
    assert.ok(p.result.stars >= 2, `level ${i + 1} stars ${p.result.stars}`);
    console.log(`level ${i + 1}: ${lv.rows}x${lv.cols} path ${lv.path.length} min ${lv.min} moves ${lv.moves} stars ${p.result.stars}`);
  }
});

test('levels are the same every time (fixed seeds)', () => {
  const a = makeLevel(4);
  const b = makeLevel(4);
  assert.deepEqual(a.tiles.map((r) => r.map((t) => t.mask)), b.tiles.map((r) => r.map((t) => t.mask)));
});

test('frozen and cross tiles do not turn and cost no move', () => {
  const p = new Puzzle(10);
  const frozen = p.level.tiles.flat().find((t) => t.locked);
  assert.ok(frozen);
  const before = p.movesLeft;
  assert.equal(p.tap(frozen.r, frozen.c).type, 'stuck');
  assert.equal(p.movesLeft, before);
  assert.equal(turnsTo(frozen), 0);
});

test('running out of moves ends the try (try again, nothing lost)', () => {
  const p = new Puzzle(0);
  // turn a tile off the path over and over
  const off = p.level.tiles.flat().find((t) => !t.onPath && !t.cross) || p.level.tiles[0][0];
  let ev;
  while (p.state === 'play') ev = p.tap(off.r, off.c);
  assert.equal(p.state, 'out');
  assert.ok(ev.out);
  assert.equal(p.result.won, false);
});

test('the ice glows further as the path grows from the dragon', () => {
  const p = new Puzzle(1);
  const [r, c] = p.level.path[0];
  const t = p.level.tiles[r][c];
  let k = turnsTo(t);
  let last;
  while (k-- > 0) last = p.tap(r, c);
  assert.ok(last.reach >= 1);
});

test('easy mode gives more moves', () => {
  assert.ok(makeLevel(0, true).moves > makeLevel(0).moves);
});

test('saves are cleaned', () => {
  const s = normalizeSave({ unlocked: 40, coins: -2, stars: { 1: 3, 2: 8 } });
  assert.equal(s.unlocked, 12);
  assert.equal(s.coins, 0);
  assert.deepEqual(s.stars, { 1: 3 });
});
