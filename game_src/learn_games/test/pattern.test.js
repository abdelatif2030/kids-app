import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeRounds, PatternPlay, ROUNDS, BEADS } from '../src/pattern/sim.js';

test('each pattern repeats, the missing bead continues it, and the options hold it once', () => {
  for (const age of [3, 4, 5, 6]) {
    for (let seed = 1; seed < 80; seed++) {
      for (const r of makeRounds(age, seed)) {
        const unit = r.unit.split('').map(Number);
        const kinds = {};
        const full = [...r.shown, r.answer];
        full.forEach((id, k) => {
          const u = unit[k % unit.length];
          kinds[u] = kinds[u] ?? id;
          assert.equal(kinds[u], id, 'the pattern repeats exactly');
        });
        assert.equal(r.options.length, 3);
        assert.equal(r.options.filter((o) => o === r.answer).length, 1);
        assert.equal(new Set(r.options).size, 3);
        assert.ok(r.options.every((o) => BEADS.some((b) => b.id === o)));
      }
    }
  }
});

test('the pattern gets harder with age: AB, then AAB or ABB, then ABC', () => {
  assert.equal(makeRounds(4, 1)[0].unit, '01');
  assert.ok(['001', '011'].includes(makeRounds(5, 1)[0].unit));
  assert.equal(makeRounds(6, 1)[0].unit, '012');
});

test('five rounds; a wrong bead is a miss, two misses hint the right one, first try reported', () => {
  const p = new PatternPlay(6, 4);
  assert.equal(p.rounds.length, ROUNDS);
  const wrong = p.current.options.find((o) => o !== p.current.answer);
  assert.equal(p.tap(wrong).firstMiss, true);
  assert.equal(p.hint, null);
  p.tap(wrong);
  assert.equal(p.hint, p.current.answer);
  assert.equal(p.tap(p.current.answer).first, false);
  let n = 1;
  while (!p.finished) { assert.equal(p.tap(p.current.answer).first, true); n++; }
  assert.equal(n, ROUNDS);
});
