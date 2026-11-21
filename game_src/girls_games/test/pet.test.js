import test from 'node:test';
import assert from 'node:assert/strict';
import { Round, STEPS, CHARS, PLACES } from '../src/pet/main.js';

test('four friends, four steps, six homes', () => { assert.equal(CHARS.length, 4); assert.equal(STEPS.length, 4); assert.equal(PLACES.length, 6); });

test('a robot cares for every friend in every order: complete only when all four are done, one star per round', () => {
  const orders = [[0, 1, 2, 3], [3, 2, 1, 0], [1, 3, 0, 2], [2, 0, 3, 1]];
  for (const c of CHARS) for (const o of orders) {
    const r = new Round();
    assert.equal(r.finish(), false);
    for (const i of o) { assert.equal(r.complete, false); assert.equal(r.do(STEPS[i].id), true); assert.equal(r.do(STEPS[i].id), false); }
    assert.equal(r.complete, true); assert.equal(r.next, null);
    assert.equal(r.finish(), true); assert.equal(r.stars, 1); assert.equal(r.complete, false);
  }
});

test('the friend asks for the first undone step in the story order', () => {
  const r = new Round(); assert.equal(r.next.id, 'feed'); r.do('feed'); assert.equal(r.next.id, 'bath'); r.do('sleep'); assert.equal(r.next.id, 'bath');
});
