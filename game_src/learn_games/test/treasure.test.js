import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeMap, candidates, holds, planFor, Hunt, clueText } from '../src/treasure/sim.js';
import { rng } from '../src/maze/sim.js';

test('every map has exactly one possible place, and every clue is true for it', () => {
  for (const age of [3, 4, 5, 6]) {
    const r = rng(age * 11);
    for (let i = 0; i < 300; i++) {
      const m = makeMap(age, r);
      assert.deepEqual(candidates(m), [m.treasure]);
      for (const c of m.clues) assert.ok(holds(c.kind, c.mark, m.treasure, m.cols));
      assert.ok(!m.marks.some((k) => k.cell === m.treasure));
      assert.ok(m.clues.length <= planFor(age).maxClues);
      for (const c of m.clues) assert.ok(planFor(age).kinds.includes(c.kind), `${c.kind} at age ${age}`);
    }
  }
});

test('the youngest get a small map and one direct clue', () => {
  const m = makeMap(4, rng(3));
  assert.equal(m.cols, 3);
  assert.equal(m.clues.length, 1);
  assert.ok(['above', 'below', 'left', 'right'].includes(m.clues[0].kind));
});

test('clue words in Arabic and English', () => {
  const mark = { id: 'palm', cell: 4 };
  assert.equal(clueText({ kind: 'right', mark }, false), 'الكنز يمين النخلة');
  assert.equal(clueText({ kind: 'next', mark }, true), 'The treasure is next to the palm tree');
});

test('digging: a landmark is not dug, an empty place counts one miss once, the treasure ends the map', () => {
  const h = new Hunt(5, 7);
  const empty = Array.from({ length: h.map.cols ** 2 }, (_, i) => i).find((c) => c !== h.map.treasure && !h.map.marks.some((m) => m.cell === c));
  assert.equal(h.dig(h.map.marks[0].cell).type, 'mark');
  assert.equal(h.dig(empty).type, 'empty');
  assert.equal(h.dig(empty).misses, 1);
  const f = h.dig(h.map.treasure);
  assert.equal(f.type, 'found');
  assert.equal(f.first, false);
});

test('a robot that reads the clues finds all five treasures first time', () => {
  for (const age of [3, 4, 5, 6]) {
    const h = new Hunt(age, 100 + age);
    let found = 0;
    while (!h.finished) {
      const only = candidates(h.map);
      assert.equal(only.length, 1);
      const ev = h.dig(only[0]);
      assert.equal(ev.type, 'found');
      assert.ok(ev.first);
      found++;
      h.next();
    }
    assert.equal(found, 5);
  }
});
