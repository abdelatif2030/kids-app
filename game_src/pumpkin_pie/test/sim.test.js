import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Bakery } from '../src/sim.js';
import { PADS, normalizeSave, capacityOf, OVENS, COUNTER_ZONE, CASH_ZONE, CHUTE, FIELDS, BOUNDS } from '../src/data.js';

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

/** A simple robot chef: pay for pads, collect cash, serve pies, bake pumpkins, pick pumpkins. */
function robotInput(b) {
  const p = b.p;
  let target = null;
  const pad = b.pads.find((pd) => b.save.coins >= Math.min(pd.cost - (b.save.paid[pd.id] ?? 0), 25));
  const shelf = b.ovens.filter((o) => b.ovenOpen(o) && o.out > 0).sort((x, y) => y.out - x.out)[0];
  if (p.kind === null) b._unload = false;
  if (p.kind === 'pumpkin' && p.stack >= b.capacity) b._unload = true;
  const atShelf = shelf && dist(p, shelf.shelf) < 1 && p.stack < b.capacity;
  if (p.kind === 'pie' && atShelf) target = shelf.shelf;
  else if (p.kind === 'pie') target = b.counter < 16 ? COUNTER_ZONE : CASH_ZONE;
  else if (p.kind === 'pumpkin' && (b._unload || !b.plots.some((pl) => pl.ripe && b.fieldOpen(pl.field)))) {
    b._unload = true;
    const oven = b.ovens.filter((o) => b.ovenOpen(o) && o.in < 10).sort((x, y) => x.in - y.in)[0];
    target = b.has('chute') ? CHUTE : oven ? oven.input : COUNTER_ZONE;
  } else if (pad) target = pad;
  else if (b.cash >= 6) target = CASH_ZONE;
  else if (shelf && shelf.out >= 3 && p.kind === null) target = shelf.shelf;
  else {
    let best = null;
    for (const pl of b.plots) if (pl.ripe && b.fieldOpen(pl.field) && (!best || dist(pl, p) < dist(best, p))) best = pl;
    target = best ?? (shelf ? shelf.shelf : CASH_ZONE);
  }
  // an oven or the counter in the way: step south of it first
  const blocked = b._solids().some(([x0, z0, x1, z1]) => {
    for (let k = 1; k <= 20; k++) {
      const x = p.x + ((target.x - p.x) * k) / 20;
      const z = p.z + ((target.z - p.z) * k) / 20;
      if (x > x0 - 0.45 && x < x1 + 0.45 && z > z0 - 0.45 && z < z1 + 0.45) return true;
    }
    return false;
  });
  if (blocked) target = p.z > -1.2 ? { x: target.x, z: -0.8 } : { x: p.x, z: -0.8 };
  const dx = target.x - p.x;
  const dz = target.z - p.z;
  const l = Math.hypot(dx, dz);
  if (l < 0.3) return { x: 0, z: 0 };
  return { x: dx / l, z: dz / l };
}

test('a robot chef builds the whole bakery', () => {
  const save = normalizeSave(null);
  const b = new Bakery(save, 3);
  const dt = 1 / 30;
  let t = 0;
  const unlockAt = {};
  while (!save.complete && t < 1500) {
    const ev = b.step(dt, robotInput(b));
    for (const e of ev) if (e.type === 'unlock') unlockAt[e.pad] = Math.round(t);
    t += dt;
  }
  console.log('unlocked at (s):', JSON.stringify(unlockAt), 'served', save.served, 'pies', save.pies);
  assert.ok(save.complete, `bakery not finished after ${Math.round(t)} s: ${save.unlocked.join(',')}`);
  assert.equal(save.unlocked.length, PADS.length);
  assert.ok(t < 1200, 'it should take a child less than about 20 minutes');
  assert.ok(unlockAt.basket < 120, 'the first pad comes quickly');
});

test('pumpkins regrow, ovens bake, customers pay into the cash pile', () => {
  const save = normalizeSave(null);
  const b = new Bakery(save, 1);
  const plot = b.plots[0];
  b.p.x = plot.x;
  b.p.z = plot.z;
  b.step(0.2, { x: 0, z: 0 });
  assert.equal(b.p.kind, 'pumpkin');
  assert.equal(b.p.stack, 1);
  assert.equal(plot.ripe, false);
  b.p.x = 0;
  b.p.z = 1.5;
  for (let i = 0; i < 70; i++) b.step(0.1, { x: 0, z: 0 });
  assert.equal(plot.ripe, true, 'regrows after a few seconds');
  // put it in the oven
  b.p.x = OVENS[0].input.x;
  b.p.z = OVENS[0].input.z;
  b.p.kind = 'pumpkin';
  b.p.stack = 1;
  b.step(0.2, { x: 0, z: 0 });
  assert.equal(b.ovens[0].in, 1);
  assert.equal(b.p.kind, null);
  for (let i = 0; i < 30; i++) b.step(0.1, { x: 0, z: 0 });
  assert.equal(b.ovens[0].out, 1, 'one pie baked');
  // a pie on the counter is bought
  b.counter = 3;
  for (let i = 0; i < 300 && b.cash === 0; i++) b.step(0.1, { x: 0, z: 0 });
  assert.ok(b.cash >= 3, 'a customer paid');
  const before = save.coins;
  b.p.x = CASH_ZONE.x;
  b.p.z = CASH_ZONE.z;
  for (let i = 0; i < 20; i++) b.step(0.2, { x: 0, z: 0 });
  assert.ok(save.coins > before, 'cash collected');
});

test('the basket never holds more than its size, and one kind at a time', () => {
  const save = normalizeSave(null);
  const b = new Bakery(save, 2);
  for (const pl of b.plots.filter((x) => x.field === 'field1')) {
    b.p.x = pl.x;
    b.p.z = pl.z;
    for (let i = 0; i < 3; i++) b.step(0.2, { x: 0, z: 0 });
  }
  assert.equal(b.p.stack, capacityOf([]));
  b.ovens[0].out = 5;
  b.p.x = OVENS[0].shelf.x;
  b.p.z = OVENS[0].shelf.z;
  for (let i = 0; i < 10; i++) b.step(0.2, { x: 0, z: 0 });
  assert.equal(b.p.kind, 'pumpkin', 'no pies on top of pumpkins');
  assert.equal(b.ovens[0].out, 5);
});

test('a pad is paid a little at a time and keeps what was paid', () => {
  const save = normalizeSave({ coins: 10 });
  const b = new Bakery(save, 2);
  const pad = PADS[0];
  b.p.x = pad.x;
  b.p.z = pad.z;
  for (let i = 0; i < 40; i++) b.step(0.2, { x: 0, z: 0 });
  assert.equal(save.coins, 0);
  assert.equal(save.paid.basket, 10);
  assert.ok(!b.has('basket'));
  save.coins = 20;
  for (let i = 0; i < 40; i++) b.step(0.2, { x: 0, z: 0 });
  assert.ok(b.has('basket'));
  assert.equal(save.coins, 15);
  assert.equal(b.capacity, 9);
  assert.equal(save.paid.basket, undefined);
});

test('the chef cannot walk through the ovens or the counter, nor leave the yard', () => {
  const b = new Bakery(normalizeSave(null), 2);
  b.p.x = 0;
  b.p.z = -3;
  for (let i = 0; i < 60; i++) b.step(0.05, { x: 0, z: -1 });
  assert.ok(b.p.z > -5.1);
  b.p.x = -2;
  b.p.z = -3.4;
  for (let i = 0; i < 60; i++) b.step(0.05, { x: -1, z: 0 });
  assert.ok(b.p.x > -4.7, `in the oven at ${b.p.x}`);
  for (let i = 0; i < 400; i++) b.step(0.05, { x: 1, z: 1 });
  assert.ok(b.p.x <= BOUNDS.x1 && b.p.z <= BOUNDS.z1);
});

test('every pad, zone and plot is inside the yard and pads do not sit on pumpkins', () => {
  const b = new Bakery(normalizeSave(null), 2);
  for (const p of PADS) {
    assert.ok(p.x > BOUNDS.x0 && p.x < BOUNDS.x1 && p.z > -5 && p.z < BOUNDS.z1, p.id);
    for (const pl of b.plots) assert.ok(dist(p, pl) > 1.2 || p.id === 'chute', `${p.id} on a pumpkin`);
  }
  for (const f of FIELDS) assert.ok(Math.abs(f.x) + 2.5 < BOUNDS.x1);
  assert.ok(dist(COUNTER_ZONE, CASH_ZONE) > 2);
});

test('damaged saves load safely', () => {
  for (const bad of [null, 5, 'x', { coins: -4, unlocked: 'all', paid: 3 }, { unlocked: ['nope', 'basket', 'basket'], paid: { field2: 9999, chute: 5 }, complete: true }]) {
    const s = normalizeSave(bad);
    assert.ok(s.coins >= 0);
    assert.ok(Array.isArray(s.unlocked));
    assert.equal(s.complete, false);
  }
  const s = normalizeSave({ unlocked: ['nope', 'basket', 'basket'], paid: { field2: 9999, chute: 5 } });
  assert.deepEqual(s.unlocked, ['basket']);
  assert.deepEqual(s.paid, { chute: 5 });
});
