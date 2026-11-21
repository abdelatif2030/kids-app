import test from 'node:test';
import assert from 'node:assert/strict';
import { Order, Shift, ORDERS, STEPS, PLACES, GUESTS, LINERS, FINISHED } from '../src/cupcake/main.js';

test('five steps, six bakeries, guests 1..6', () => { assert.equal(STEPS.length, 5); assert.equal(PLACES.length, 6); assert.deepEqual(GUESTS, [1, 2, 3, 4, 5, 6]); });

test('a robot bakes and serves in every bakery: steps must go in order, a wrong tap does nothing, one star per served order', () => {
  for (let p = 0; p < 6; p++) {
    const o = new Order(GUESTS[p]);
    assert.equal(o.serve(), false);
    assert.equal(o.do('cherry'), false); // out of order: nothing happens
    for (const s of STEPS) { assert.equal(o.cupcakeDone, false); assert.equal(o.do(s.id), true); }
    assert.equal(o.cupcakeDone, true);
    for (let g = 0; g < GUESTS[p]; g++) { assert.equal(o.complete, false); assert.equal(o.serve(), true); }
    assert.equal(o.serve(), false); assert.equal(o.complete, true);
    assert.equal(o.finish(), true); assert.equal(o.stars, 1); assert.equal(o.step, 0);
  }
});

test('every cup has a matching finished cupcake picture', () => { for (const n of LINERS) assert.ok(FINISHED[n] >= 1 && FINISHED[n] <= 12); });

test('a robot works a whole shift in every bakery: three orders with more and more guests, ONE star at the end', () => {
  for (let base = 1; base <= 3; base++) {
    const sh = new Shift(base);
    for (let n = 0; n < ORDERS; n++) {
      const o = sh.order; assert.equal(o.guests, Math.min(6, base + n));
      for (const s of STEPS) assert.equal(o.do(s.id), true);
      for (let g = 0; g < o.guests; g++) assert.equal(o.serve(), true);
      assert.equal(o.complete, true);
      assert.equal(sh.served(), n < ORDERS - 1 ? 'next' : 'star');
    }
    assert.equal(sh.stars, 1);
  }
});
