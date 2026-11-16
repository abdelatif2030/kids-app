import { test } from 'node:test';
import assert from 'node:assert/strict';
import { poolFor, platesFor, makeRounds, platesOf, AnimalsPlay, question, reward, animalById, ROUNDS, ANIMALS } from '../src/animals/sim.js';

test('more animals for older children, never the same animal twice in a row', () => {
  assert.equal(poolFor(4).length, 3); assert.equal(poolFor(5).length, 5); assert.equal(poolFor(6).length, 8);
  for (const age of [4, 5, 6]) for (let s = 1; s < 60; s++) {
    const t = makeRounds(age, s);
    assert.equal(t.length, ROUNDS);
    t.forEach((x, i) => { assert.ok(poolFor(age).some((a) => a.id === x)); if (i) assert.notEqual(x, t[i - 1]); });
  }
});
test('plates: the right food plus other foods, all different', () => {
  for (const age of [4, 5, 6]) for (const a of poolFor(age)) for (let s = 1; s < 20; s++) {
    const p = platesOf(age, a.id, s);
    assert.equal(p.length, platesFor(age));
    assert.ok(p.includes(a.food));
    assert.equal(new Set(p).size, p.length);
  }
});
test('Egyptian Arabic with the right gender', () => {
  assert.equal(question(animalById('rabbit')), 'الأرنب جعان! هياكل إيه؟');
  assert.equal(question(animalById('cat')), 'القطة جعانة! هتاكل إيه؟');
  assert.equal(reward(animalById('cow')), 'البقرة بتحب الحشيش');
  assert.equal(reward(animalById('dog')), 'الكلب بيحب العضمة');
  assert.equal(ANIMALS.length, 8);
});
test('miss, hint and first-try reporting; a whole game finishes', () => {
  const p = new AnimalsPlay(6, 5);
  const wrong = p.plates.find((f) => f !== p.animal.food);
  assert.equal(p.tap(wrong).firstMiss, true);
  p.tap(wrong);
  assert.equal(p.hint, p.animal.food);
  assert.equal(p.tap(p.animal.food).first, false);
  let n = 1;
  while (!p.finished) { p.tap(p.animal.food); n++; }
  assert.equal(n, ROUNDS);
});
