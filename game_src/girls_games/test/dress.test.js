import test from 'node:test';
import assert from 'node:assert/strict';
import { Outfit, itemsFor, nameOf, PLACES, CATS, SHOW } from '../src/dress/main.js';

test('six places, four items per category per place, always the same four', () => {
  assert.equal(PLACES.length, 6);
  for (const c of CATS) for (let p = 0; p < 6; p++) {
    const a = itemsFor(c.id, p); const b = itemsFor(c.id, p);
    assert.equal(a.length, 4); assert.deepEqual(a, b);
    for (const n of a) assert.ok(n >= 1 && n <= c.count);
  }
});

test('the 24 dresses are all reachable across the six places', () => {
  const seen = new Set();
  for (let p = 0; p < 6; p++) for (const n of itemsFor('dress', p)) seen.add(n);
  assert.equal(seen.size, 24);
  assert.equal(nameOf('dress', 3), 'dress_03');
});

test('a robot walks a fashion show in every place: a star only after THREE finished looks, never before', () => {
  for (let p = 0; p < 6; p++) {
    const o = new Outfit();
    for (let look = 1; look <= SHOW; look++) {
      assert.equal(o.party(), 'no');
      o.wear('dress', itemsFor('dress', p)[0] + look); assert.equal(o.complete, false);
      o.wear('shoes', itemsFor('shoes', p)[1]); assert.equal(o.party(), 'no');
      o.wear('crown', itemsFor('crown', p)[2]); assert.equal(o.complete, true);
      o.wear('bow', 3); // the bow is optional
      assert.equal(o.party(), look < SHOW ? 'look' : 'star');
      o.reset(); assert.equal(o.complete, false);
    }
    assert.equal(o.stars, 1); assert.equal(o.looks, 0);
  }
});

test('tapping the same item again takes it off', () => {
  const o = new Outfit(); o.wear('dress', 5); o.wear('dress', 5); assert.equal(o.worn.dress, 0);
});
