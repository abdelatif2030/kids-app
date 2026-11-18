import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Lagoon, DEPTHS, UPGRADES, RIVAL_GOAL, normalizeSave } from '../src/sim.js';

function tick(l, t) {
  if (Math.floor(t * 30) % 20 === 0) l.tap();
  for (const d of DEPTHS) { l.buy('area', d.id); l.buy('manager', d.id); }
  for (const u of UPGRADES) l.buy('up', u.id);
  l.step(1 / 30);
}

test('four depths with growing pearl value and three upgrades', () => {
  assert.equal(DEPTHS.length, 4);
  assert.ok(DEPTHS[3].pearl > DEPTHS[0].pearl);
  assert.equal(UPGRADES.length, 3);
});

test('a robot owner overtakes the rival yacht', () => {
  const l = new Lagoon({ seed: 4 });
  let t = 0;
  while (l.state === 'play' && t < 4000) { tick(l, t); t += 1 / 30; }
  console.log(`won in ${t.toFixed(0)}s, earned ${l.earned}, rival ${Math.round(l.rival)}`);
  assert.equal(l.state, 'won');
  assert.ok(t < 1800);
});

test('tapping sends divers, pearls reach the basket, the bell lifts them and the boat sells them', () => {
  const l = new Lagoon({ seed: 2 });
  assert.ok(l.tap());
  let sold = 0;
  for (let i = 0; i < 30 * 30; i++) { l.tap(); for (const e of l.step(1 / 30)) if (e.type === 'sold') sold += e.cash; }
  assert.ok(sold > 0);
  assert.ok(l.cash > 0);
});

test('managers automate; deeper areas must be bought; upgrades add divers', () => {
  const l = new Lagoon();
  assert.equal(l.buy('area', 'reef'), false);
  l.cash = 10000;
  assert.ok(l.buy('area', 'reef'));
  assert.ok(l.buy('manager', 'shallows'));
  assert.equal(l.buy('manager', 'shallows'), false);
  const n = l.areas[0].divers.length;
  assert.ok(l.buy('up', 'divers'));
  assert.equal(l.areas[0].divers.length, n + 1);
  let sold = false;
  for (let i = 0; i < 30 * 30; i++) for (const e of l.step(1 / 30)) if (e.type === 'sold') sold = true;
  assert.ok(sold, 'the manager works without taps');
  assert.ok(RIVAL_GOAL > 1000);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).wins, 0); });
