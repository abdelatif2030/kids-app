import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Lagoon, LEDGES, RIVAL_GOAL, MAX_HIRE, UP_MULT, recordBest, normalizeSave } from '../src/sim.js';

/** A robot owner: taps all the time and buys the cheapest useful thing. */
function tick(l, t) {
  if (Math.floor(t * 30) % 10 === 0) l.tap();
  const next = l.nextLedge;
  if (next) l.buy('area', next.id);
  for (const a of l.areas) { l.buy('hire', a.id); l.buy('up', a.id); }
  l.step(1 / 30); l.drain();
}

test('four ledges with growing pearl value and the rival goal of $1.5M', () => {
  assert.equal(LEDGES.length, 4);
  assert.ok(LEDGES[3].pearl > LEDGES[0].pearl);
  assert.equal(RIVAL_GOAL, 1500000);
});

test('a robot owner reaches the rival fortune in a few minutes', () => {
  const l = new Lagoon({ seed: 4 });
  let t = 0;
  while (l.state === 'play' && t < 4000) { tick(l, t); t += 1 / 30; }
  console.log(`won in ${t.toFixed(0)}s, earned ${l.earned}`);
  assert.equal(l.state, 'won');
  assert.ok(t > 60 && t < 900);
});

test('nothing happens without a tap; a tap sends the diver, pearls reach the basket, the bell lifts, the boat sells', () => {
  const l = new Lagoon({ seed: 2 });
  for (let i = 0; i < 30 * 10; i++) l.step(1 / 30);
  assert.equal(l.cash, 0);
  assert.ok(l.tap());
  let sold = 0;
  for (let i = 0; i < 30 * 30; i++) { l.tap(); l.step(1 / 30); for (const e of l.drain()) if (e.type === 'sold') sold += e.cash; }
  assert.ok(sold > 0);
  assert.equal(l.cash, sold);
});

test('HIRE makes a diver work by himself; UPGRADE triples pearls; NEW LEDGE opens a deeper one', () => {
  const l = new Lagoon();
  assert.equal(l.buy('area', 'reef'), false);
  assert.equal(l.buy('hire', 'shallows'), false);
  l.cash = 1e6;
  assert.ok(l.buy('area', 'reef'));
  assert.equal(l.nextLedge.id, 'cave');
  assert.ok(l.buy('hire', 'shallows'));
  assert.equal(l.areas[0].divers.length, 2);
  assert.equal(l.mult(l.areas[0]), 1); assert.ok(l.buy('up', 'shallows')); assert.equal(l.mult(l.areas[0]), 3);
  for (let i = 0; i < 10; i++) l.buy('hire', 'shallows');
  assert.equal(l.areas[0].hired, MAX_HIRE);
  let sold = false;
  for (let i = 0; i < 30 * 30; i++) { l.step(1 / 30); if (l.drain().some((e) => e.type === 'sold')) sold = true; }
  assert.ok(sold, 'the hired diver works without taps');
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).wins, 0); });

test('best is the FASTEST dive: a slower win never replaces it (the old Math.max bug)', () => {
  assert.equal(recordBest(0, 95), 95); // first win sets the best
  assert.equal(recordBest(95, 130), 95); // slower dive: best unchanged
  assert.equal(recordBest(95, 80), 80); // faster dive: best improves
  assert.equal(recordBest(95, 0), 95); // no time recorded: keep the best
});

test('the upgrade multiplier the shop advertises is the one the sim pays', () => {
  const l = new Lagoon({ seed: 3 });
  const a = l.areas[0];
  assert.equal(l.mult(a), 1);
  a.upLvl = 2;
  assert.equal(l.mult(a), UP_MULT ** 2);
});
