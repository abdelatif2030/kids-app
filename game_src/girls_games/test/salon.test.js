import test from 'node:test';
import assert from 'node:assert/strict';
import { Makeover, TOOLS, DRESSES, PLACES, STYLES, BOWS, CLIENTS } from '../src/salon/main.js';

test('five tools, 24 dresses, six salons', () => { assert.equal(TOOLS.length, 5); assert.equal(DRESSES.length, 24); assert.equal(PLACES.length, 6); assert.ok(STYLES === 4 && BOWS >= 12); });

test('a robot gives makeovers in every salon: the mirror needs three DIFFERENT tools, a star only after THREE girls', () => {
  for (let p = 0; p < 6; p++) {
    const m = new Makeover();
    for (let g = 1; g <= CLIENTS; g++) {
      assert.equal(m.mirror(), 'no');
      m.use('brush'); m.use('brush'); m.use('brush'); assert.equal(m.ready, false);
      m.use('dress'); assert.equal(m.ready, false);
      m.use('bow'); assert.equal(m.ready, true);
      assert.equal(m.mirror(), g < CLIENTS ? 'next' : 'star');
      m.reset(); assert.equal(m.ready, false);
    }
    assert.equal(m.stars, 1); assert.equal(m.clients, 0);
  }
});
