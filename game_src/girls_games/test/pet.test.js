import test from 'node:test';
import assert from 'node:assert/strict';
import { Round, Journey, STEPS, CHARS, PLACES } from '../src/pet/main.js';

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

test('a robot cares for all four friends in turn starting from each one: a star only after the fourth friend', () => {
  for (let first = 0; first < 4; first++) {
    const j = new Journey(first);
    assert.equal(j.char, CHARS[first].id);
    const seen = new Set();
    for (let f = 0; f < 4; f++) {
      seen.add(j.char);
      for (let k = 0; k < STEPS.length; k++) assert.equal(j.step(STEPS[k].id), k < STEPS.length - 1 ? 'step' : f < 3 ? 'friend' : 'star');
    }
    assert.equal(seen.size, 4); assert.equal(j.stars, 1); assert.equal(j.friendsDone, 0);
  }
});
