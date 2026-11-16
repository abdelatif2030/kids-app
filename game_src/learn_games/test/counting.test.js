import { test } from 'node:test';
import assert from 'node:assert/strict';
import { maxFor, maxCountFor, makeRounds, optionsFor, CountPlay, askText, ROUNDS } from '../src/counting/sim.js';

test('bigger numbers for older children; age 4 has no count-the-apples rounds', () => {
  assert.equal(maxFor(4), 3); assert.equal(maxFor(5), 6); assert.equal(maxFor(6), 10);
  for (let s = 1; s < 60; s++) {
    for (const age of [4, 5, 6]) {
      const r = makeRounds(age, s);
      assert.equal(r.length, ROUNDS);
      r.forEach((x) => { assert.ok(x.n >= 1 && x.n <= (x.mode === 'count' ? maxCountFor(age) : maxFor(age))); });
      if (age === 4) assert.ok(r.every((x) => x.mode === 'give'));
      else assert.ok(r.some((x) => x.mode === 'count'));
    }
  }
});
test('the three number cards contain the answer and are distinct, positive', () => {
  for (const age of [5, 6]) for (let n = 1; n <= maxCountFor(age); n++) for (let s = 1; s < 20; s++) {
    const o = optionsFor(age, n, s);
    assert.equal(o.length, 3);
    assert.ok(o.includes(n));
    assert.equal(new Set(o).size, 3);
    assert.ok(o.every((v) => v >= 1));
  }
});
test('Egyptian Arabic for the request', () => {
  assert.equal(askText(1), 'هات تفاحة واحدة');
  assert.equal(askText(2), 'هات تفاحتين');
  assert.equal(askText(3), 'هات تلاتة تفاحات');
  assert.equal(askText(10), 'هات عشرة تفاحات');
});
test('give rounds finish at the number asked and count one by one', () => {
  const p = new CountPlay(4, 7);
  const n = p.cur.n;
  let last;
  for (let i = 1; i <= n; i++) { last = p.pick(); assert.equal(last.k, i); }
  assert.equal(last.done, true);
  assert.equal(p.round, 1);
});
test('count rounds: wrong card is a miss, two misses hint, first try reported', () => {
  const p = new CountPlay(6, 11);
  while (p.cur.mode !== 'count') { const n = p.cur.n; for (let i = 0; i < n; i++) p.pick(); }
  const n = p.cur.n;
  const wrong = p.options.find((v) => v !== n);
  assert.equal(p.choose(wrong).firstMiss, true);
  p.choose(wrong);
  assert.equal(p.hint, n);
  assert.equal(p.choose(n).first, false);
});
test('a whole game can be finished', () => {
  const p = new CountPlay(6, 3);
  let guard = 0;
  while (!p.finished && guard++ < 200) {
    if (p.cur.mode === 'give') p.pick(); else p.choose(p.cur.n);
  }
  assert.ok(p.finished);
});
