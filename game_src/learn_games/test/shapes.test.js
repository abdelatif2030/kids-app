import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tilesFor, makeRounds, ShapesPlay, question, reward, shapeById, colorById, ROUNDS } from '../src/shapes/sim.js';

test('Egyptian Arabic questions with the right gender', () => {
  assert.equal(question(shapeById('circle'), colorById('red')), 'فين الدايرة الحمرا؟');
  assert.equal(question(shapeById('square'), colorById('red')), 'فين المربع الأحمر؟');
  assert.equal(question(shapeById('star'), colorById('yellow')), 'فين النجمة الصفرا؟');
  assert.equal(question(shapeById('heart'), colorById('green')), 'فين القلب الأخضر؟');
  assert.equal(question(shapeById('triangle'), colorById('orange')), 'فين المثلث البرتقالي؟');
  assert.equal(question(shapeById('circle'), null), 'فين الدايرة؟');
  assert.equal(reward(shapeById('circle'), colorById('blue')), 'دي دايرة زرقا');
  assert.equal(reward(shapeById('triangle'), null), 'دي مثلث');
});
test('exactly one tile is the answer, no two tiles are the same pair, age 6 mixes colours and shapes', () => {
  for (const age of [4, 5, 6]) for (let s = 1; s < 80; s++) {
    const p = new ShapesPlay(age, s);
    for (let r = 0; r < ROUNDS; r++) {
      const tiles = p.tiles;
      assert.equal(tiles.length, tilesFor(age));
      assert.equal(tiles.filter((t) => p.isAnswer(t)).length, 1, `age ${age} seed ${s}`);
      assert.equal(new Set(tiles.map((t) => `${t.shape}-${t.color}`)).size, tiles.length);
      if (age === 6) {
        const t = p.target;
        assert.ok(tiles.some((x) => x.color === t.color && x.shape !== t.shape), 'a same-colour tile');
        assert.ok(tiles.some((x) => x.shape === t.shape && x.color !== t.color), 'a same-shape tile');
      }
      p.tap(tiles.find((t) => p.isAnswer(t)).id);
    }
    assert.ok(p.finished);
  }
});
test('age 4 asks for the shape only, with the three easy shapes', () => {
  for (let s = 1; s < 40; s++) for (const t of makeRounds(4, s)) assert.ok(['circle', 'square', 'triangle'].includes(t.shape));
});
test('miss, hint and first-try reporting', () => {
  const p = new ShapesPlay(5, 9);
  const wrong = p.tiles.find((t) => !p.isAnswer(t));
  assert.equal(p.tap(wrong.id).firstMiss, true);
  p.tap(wrong.id);
  assert.ok(p.hint);
  assert.equal(p.tap(p.hint).first, false);
});
