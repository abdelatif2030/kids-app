import { test } from 'node:test';
import assert from 'node:assert/strict';
import { poolFor, makeRounds, fishFor, LettersPlay, question, reward, letterById, ROUNDS, LETTERS } from '../src/letters/sim.js';

test('more letters for older children; targets come from the pool and never repeat in a row', () => {
  assert.equal(poolFor(4).length, 4);
  assert.equal(poolFor(5).length, 8);
  assert.equal(poolFor(6).length, 28);
  assert.equal(LETTERS.length, 28);
  for (const age of [4, 5, 6]) for (let s = 1; s < 50; s++) {
    const t = makeRounds(age, s);
    assert.equal(t.length, ROUNDS);
    t.forEach((x, i) => { assert.ok(poolFor(age).some((l) => l.id === x)); if (i) assert.notEqual(x, t[i - 1]); });
  }
});
test('the fish always include the target and are different letters', () => {
  for (const age of [4, 5, 6]) for (let s = 1; s < 50; s++) {
    const p = poolFor(age)[s % poolFor(age).length].id;
    const f = fishFor(age, p, s);
    assert.ok(f.includes(p));
    assert.equal(new Set(f).size, f.length);
    assert.equal(f.length, age <= 4 ? 3 : 4);
  }
});
test('sentences name the letter and a word that starts with it', () => {
  assert.equal(question(letterById('baa')), 'فين حرف الباء؟');
  assert.equal(reward(letterById('baa')), 'الباء زي بطة');
  for (const l of LETTERS) assert.ok(l.word.startsWith(l.ch) || (l.ch === 'أ' && l.word.startsWith('أ')), l.id);
});
test('a wrong fish is a miss, two misses hint, first try is reported', () => {
  const p = new LettersPlay(5, 3);
  const wrong = p.fish.find((x) => x !== p.target);
  assert.equal(p.tap(wrong).firstMiss, true);
  assert.equal(p.hint, null);
  p.tap(wrong);
  assert.equal(p.hint, p.target);
  assert.equal(p.tap(p.target).first, false);
  const q = new LettersPlay(5, 3);
  assert.equal(q.tap(q.target).first, true);
  let n = 1;
  while (!q.finished) { q.tap(q.target); n++; }
  assert.equal(n, ROUNDS);
});
