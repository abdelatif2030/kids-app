import test from 'node:test';
import assert from 'node:assert/strict';
import { Garden, COLORS, POTS, PLACES } from '../src/garden/main.js';

test('six colours, six pots, six gardens', () => { assert.equal(COLORS.length, 6); assert.equal(POTS, 6); assert.equal(PLACES.length, 6); });

test('a robot plants, waters and grows every pot in every garden: one star per finished garden, a wrong tap does nothing', () => {
  for (let p = 0; p < 6; p++) {
    const g = new Garden();
    assert.equal(g.water(0), null); // nothing planted: nothing happens
    for (let i = 0; i < POTS; i++) {
      assert.equal(g.bloomed, false);
      assert.equal(g.plant(i, (i + p) % 6), true); assert.equal(g.plant(i, 0), false); // a planted pot stays
      assert.equal(g.water(i), 2); assert.equal(g.water(i), 3);
    }
    assert.equal(g.butterflies, POTS); assert.equal(g.bloomed, true);
    assert.equal(g.water(0), 4); assert.equal(g.water(0), null);
    assert.equal(g.finish(), true); assert.equal(g.stars, 1); assert.equal(g.pots.every((x) => x.stage === 0), true);
  }
});
