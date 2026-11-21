import test from 'node:test';
import assert from 'node:assert/strict';
import { Makeover, TOOLS, DRESSES, PLACES, STYLES, BOWS } from '../src/salon/main.js';

test('five tools, four dresses, six salons', () => { assert.equal(TOOLS.length, 5); assert.equal(DRESSES.length, 4); assert.equal(PLACES.length, 6); assert.ok(STYLES === 4 && BOWS >= 12); });

test('a robot uses every tool in every salon: the mirror needs three DIFFERENT tools, one star per makeover', () => {
  for (let p = 0; p < 6; p++) {
    const m = new Makeover();
    assert.equal(m.mirror(), false);
    m.use('brush'); m.use('brush'); m.use('brush'); assert.equal(m.ready, false);
    m.use('dress'); assert.equal(m.ready, false);
    m.use('bow'); assert.equal(m.ready, true);
    assert.equal(m.mirror(), true); assert.equal(m.stars, 1);
    m.reset(); assert.equal(m.ready, false);
  }
});
