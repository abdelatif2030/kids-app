import { test } from 'node:test';
import assert from 'node:assert/strict';
import { poolFor, platesFor, makeRounds, platesOf, AnimalsPlay, question, reward, animalById, ROUNDS, ANIMALS } from '../src/animals/sim.js';

test('more animals for older children, never the same animal twice in a row', () => {
  assert.ok(poolFor(4).length > 3); assert.ok(poolFor(5).length > poolFor(4).length); assert.equal(poolFor(6).length, ANIMALS.length);
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
  assert.ok(ANIMALS.length >= 34);
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

import { FOODS, edibleBy, MIN_GROUP } from '../src/animals/sim.js';
test('every animal and food is complete, and no animal is a pig', () => {
  assert.equal(new Set(ANIMALS.map((a) => a.id)).size, ANIMALS.length);
  for (const a of ANIMALS) {
    assert.ok(FOODS[a.food], a.id); for (const f of a.also) assert.ok(FOODS[f], `${a.id} also ${f}`);
    assert.ok(a.thing && a.the && a.groups.length && [4, 5, 6].includes(a.age), a.id);
    assert.ok(!/خنزير/.test(a.the));
  }
});
test('a wrong plate is never something the animal also eats, in any world and at any age', () => {
  const worlds = [null, 'meadow', 'farm', 'jungle', 'snow', 'desert', 'underwater', 'space'];
  for (const world of worlds) for (const age of [4, 5, 6]) for (const a of poolFor(age, world)) for (let s = 1; s < 12; s++) {
    const p = platesOf(age, a.id, s, world);
    assert.equal(p.length, platesFor(age));
    assert.equal(new Set(p).size, p.length);
    assert.ok(p.includes(a.food));
    for (const f of p) if (f !== a.food) assert.ok(!edibleBy(a).includes(f), `${a.id} also eats ${f}`);
  }
});
test('a world shows its own animals, or everyone of the age when it has too few', () => {
  assert.ok(poolFor(6, 'jungle').every((a) => a.groups.includes('jungle')));
  assert.ok(poolFor(6, 'farm').every((a) => a.groups.includes('farm')));
  assert.ok(poolFor(6, 'jungle').length >= MIN_GROUP);
  assert.equal(poolFor(4, 'space').length, poolFor(4).length);
  assert.equal(poolFor(4, 'snow').length, poolFor(4).length); // too few snow animals at four
  for (const a of poolFor(4)) assert.ok(a.age <= 4);
});
test('the animals level follows the world it is in', async () => {
  const { LevelPlay } = await import('../src/letters/levels.js');
  const p = new LevelPlay('animals', 6, 3, null, 'jungle');
  for (const r of p.rounds) if (r.show) assert.ok(poolFor(6, 'jungle').some((a) => a.thing === r.show.thing));
  const f = new LevelPlay('animals', 6, 3, null, 'farm');
  for (const r of f.rounds) if (r.show) assert.ok(poolFor(6, 'farm').some((a) => a.thing === r.show.thing));
});
