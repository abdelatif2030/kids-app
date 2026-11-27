import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Farm, SPOTS, GOAL, normalizeSave } from '../src/sim.js';

/** A robot farmer: jars to the machine, crates to the counter, cash from the pile, then buys upgrades. */
function robot(f) {
  const me = f.me;
  let tgt;
  if (me.crates > 0 && f.customers.length) tgt = SPOTS.counter;
  else if (f.cashPile > 0) tgt = SPOTS.cash;
  else if (me.jars > 0) tgt = SPOTS.machine;
  else if (f.machine.crates > 0) tgt = SPOTS.machine;
  else if (f.machine2.open && f.machine2.crates > 0) tgt = SPOTS.machine2;
  else { const hv = f.hives.filter((h) => h.open).sort((a, b) => b.jars - a.jars)[0]; tgt = hv; }
  const d = Math.hypot(tgt.x - me.x, tgt.y - me.y);
  return d < 1.2 ? { dx: 0, dy: 0 } : { dx: (tgt.x - me.x) / d, dy: (tgt.y - me.y) / d };
}

test('a robot farmer grows the honey business to the goal', () => {
  const f = new Farm({ seed: 4 });
  let t = 0;
  while (f.state === 'play' && t < 2400) {
    for (const k of ['conveyor', 'hive', 'bag', 'machine2']) f.buy(k);
    f.step(1 / 30, robot(f));
    t += 1 / 30;
  }
  console.log(`won in ${t.toFixed(0)}s, served ${f.served}, left ${f.left}`);
  assert.equal(f.state, 'won');
  assert.ok(t < 1500);
  assert.ok(GOAL > 500);
});

test('jars from hives, the packing machine makes a crate of 4, a customer buys it and the cash is picked up', () => {
  const f = new Farm({ seed: 2 });
  f.me.x = f.hives[0].x; f.me.y = f.hives[0].y;
  for (let i = 0; i < 30 * 12; i++) f.step(1 / 30);
  assert.ok(f.me.jars > 0);
  f.me.jars = 4; f.me.x = SPOTS.machine.x; f.me.y = SPOTS.machine.y;
  for (let i = 0; i < 30 * 4; i++) f.step(1 / 30);
  assert.ok(f.me.crates >= 1);
  f.customers.push({ id: 1, patience: 30, max: 38, hue: 0 });
  f.me.x = SPOTS.counter.x; f.me.y = SPOTS.counter.y;
  f.step(1 / 30);
  assert.ok(f.cashPile > 0);
  f.me.x = SPOTS.cash.x; f.me.y = SPOTS.cash.y;
  f.step(1 / 30);
  assert.ok(f.cash > 0);
});

test('upgrades cost cash; impatient customers just leave', () => {
  const f = new Farm();
  assert.equal(f.buy('hive'), false);
  f.cash = 500;
  assert.ok(f.buy('conveyor'));
  assert.ok(f.buy('hive'));
  const b = f.bag;
  assert.ok(f.buy('bag'));
  assert.equal(f.bag, b + 2);
  f.customers.push({ id: 5, patience: 0.01, max: 38, hue: 1 });
  f.step(1);
  assert.equal(f.left, 1);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).wins, 0); });

test('farm snapshot round-trips: money, goal progress and purchases survive a new session', () => {
  const a = new Farm({ seed: 5 });
  a.cash = 275; a.earned = 640; a.served = 9; a.left = 1; a.cashPile = 35;
  a.bag = 8; a.hives[3].open = true; a.hives[4].open = true; a.machine2.open = true; a.conveyor = true;
  const b = new Farm({ seed: 8 });
  b.applySnapshot(normalizeSave({ farm: a.snapshot() }).farm);
  assert.equal(b.cash, 275); assert.equal(b.earned, 640); assert.equal(b.served, 9);
  assert.equal(b.bag, 8); assert.equal(b.cashPile, 35);
  assert.equal(b.hives.filter((x) => x.open).length, 4);
  assert.equal(b.machine2.open, true); assert.equal(b.conveyor, true);
});

test('normalizeSave validates the farm snapshot and never restores a finished goal', () => {
  assert.equal(normalizeSave({}).farm, null);
  const bad = normalizeSave({ farm: { cash: -5, earned: 99999, bag: 7, hives: [false, false] } });
  assert.equal(bad.farm.cash, 0);
  assert.equal(bad.farm.earned, GOAL - 1);
  assert.equal(bad.farm.bag, 4);
  assert.deepEqual(bad.farm.hives.slice(0, 2), [true, true]); // starter hives always open
});
