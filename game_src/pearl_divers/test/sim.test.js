import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Lagoon, LEDGES, RIVAL_GOAL, MAX_HIRE, UP_MULT, recordBest, normalizeSave, recordZone, pearlAlbum, ZONE_FACTS, depthOf, ZONE_THEMES } from '../src/sim.js';

/** A robot owner: taps all the time and buys the cheapest useful thing. */
function tick(l, t) {
  if (Math.floor(t * 30) % 10 === 0) l.tap();
  const next = l.nextLedge;
  if (next) l.buy('area', next.id);
  for (const a of l.areas) { l.buy('hire', a.id); l.buy('up', a.id); }
  l.step(1 / 30); l.drain();
}

test('four ledges with growing pearl value and the rival goal of $1.5M', () => {
  assert.ok(LEDGES[3].pearl > LEDGES[0].pearl);
  assert.equal(RIVAL_GOAL, 1500000);
});

// ---------- Phase 2H: depth-zone ladder + pearl album ----------

test('Phase 2H freeze: the original four ledges are byte-identical, new zones are append-only', () => {
  assert.deepEqual(LEDGES.slice(0, 4), [
    { id: 'shallows', ar: 'المياه الضحلة', en: 'Shallows', pearl: 100, open: 0, hire: 1500, up: 2400, clam: 1.4 },
    { id: 'reef', ar: 'الشعاب', en: 'Coral Reef', pearl: 520, open: 3000, hire: 9000, up: 12000, clam: 1.7 },
    { id: 'cave', ar: 'كهف اللآلئ', en: 'Pearl Cave', pearl: 2600, open: 16000, hire: 45000, up: 60000, clam: 2.0 },
    { id: 'abyss', ar: 'الأعماق', en: 'The Deep', pearl: 13000, open: 80000, hire: 220000, up: 300000, clam: 2.4 },
  ]);
  assert.equal(LEDGES.length, 6);
  assert.deepEqual(LEDGES.slice(4).map((l) => l.id), ['giftun', 'ras_temple']);
  assert.equal(RIVAL_GOAL, 1500000); // the goal never moved
});

test('Phase 2H ladder: gentle curve — values and costs rise, clam time grows slowly, depths step by 10 m', () => {
  for (let i = 1; i < LEDGES.length; i++) {
    assert.ok(LEDGES[i].pearl > LEDGES[i - 1].pearl, 'pearl value rises');
    assert.ok(LEDGES[i].pearl / LEDGES[i - 1].pearl <= 5.2, 'no cliff in pearl value');
    assert.ok(LEDGES[i].open > LEDGES[i - 1].open, 'open cost rises');
    assert.ok(LEDGES[i].clam - LEDGES[i - 1].clam <= 0.4, 'clam time grows gently');
    assert.equal(depthOf(i), depthOf(i - 1) + 10);
  }
  assert.ok(LEDGES[4].en.includes('Hurghada') && LEDGES[5].en.includes('Ras Mohammed'), 'new zones are real Red Sea places');
});

test('Phase 2H ladder: zones unlock in sequence only — no skipping a rung, even with plenty of cash', () => {
  const l = new Lagoon({ seed: 5 });
  l.cash = 1e9;
  assert.equal(l.buy('area', 'cave'), false, 'cannot skip reef');
  assert.equal(l.buy('area', 'ras_temple'), false, 'cannot jump to the last rung');
  assert.equal(l.cost('area', 'giftun'), null, 'a locked-out-of-turn zone has no price');
  const order = [];
  while (l.nextLedge) { const n = l.nextLedge; assert.ok(l.buy('area', n.id)); order.push(n.id); }
  assert.deepEqual(order, ['reef', 'cave', 'abyss', 'giftun', 'ras_temple']);
  assert.equal(l.openCount, 6);
});

test('Phase 2H migration: old saves gain a zones list without inventing progress', () => {
  // a finished old campaign had only the original four zones — credit exactly those
  assert.deepEqual(normalizeSave({ wins: 2, best: 80 }).zones, ['shallows', 'reef', 'cave', 'abyss']);
  // an unfinished old save recorded nothing — nothing is invented
  assert.deepEqual(normalizeSave({ wins: 0, best: 0 }).zones, []);
  assert.deepEqual(normalizeSave(null).zones, []);
  // damaged lists are filtered to real ids and de-duped, order kept
  assert.deepEqual(normalizeSave({ wins: 0, zones: ['reef', 'nope', 'reef', 'giftun', 7] }).zones, ['reef', 'giftun']);
});

test('Phase 2H recordZone: append-only, de-duped, unknown ids ignored, save not mutated', () => {
  const s = { wins: 0, zones: ['shallows'] };
  assert.deepEqual(recordZone(s, 'giftun'), ['shallows', 'giftun']);
  assert.deepEqual(recordZone(s, 'shallows'), ['shallows']);
  assert.deepEqual(recordZone(s, 'atlantis'), ['shallows']);
  assert.deepEqual(s.zones, ['shallows']);
});

test('Phase 2H album: earned entries show icon + name + fact; locked entries return NO name and NO fact', () => {
  const album = pearlAlbum({ wins: 0, zones: ['shallows', 'giftun'] });
  assert.equal(album.length, 6);
  const earned = album.find((e) => e.id === 'giftun');
  assert.equal(earned.unlocked, true);
  assert.equal(earned.icon, ZONE_FACTS.giftun.icon);
  assert.ok(earned.en.includes('Giftun') && earned.ar.includes('جفتون'));
  assert.equal(earned.fact.en, ZONE_FACTS.giftun.fact.en);
  assert.ok(earned.fact.ar.length > 10 && earned.fact.en.length > 10);
  for (const e of album.filter((x) => !x.unlocked)) {
    assert.equal(e.fact, null); assert.equal(e.ar, null); assert.equal(e.en, null); assert.equal(e.icon, null);
    const blob = JSON.stringify(e);
    assert.ok(!blob.includes(ZONE_FACTS[e.id].fact.en) && !blob.includes(ZONE_FACTS[e.id].fact.ar), 'a locked fact must not leak through the derivation');
  }
  // a migrated winning old save unlocks exactly the original four
  assert.deepEqual(pearlAlbum({ wins: 1 }).filter((e) => e.unlocked).map((e) => e.id), ['shallows', 'reef', 'cave', 'abyss']);
  // every zone has a bilingual fact waiting for it
  for (const l of LEDGES) { assert.ok(ZONE_FACTS[l.id].fact.ar && ZONE_FACTS[l.id].fact.en); assert.ok(ZONE_FACTS[l.id].icon); }
});

test('Phase 2H campaign proof: a scripted robot climbs the whole ladder first rung to last and wins', () => {
  const l = new Lagoon({ seed: 7 });
  const opened = [];
  let t = 0;
  // a ladder-first robot: it saves towards the next rung and only spends the
  // surplus on hires/upgrades (the plain robot above wins off the old zones
  // first — which is fine, the ladder is an invitation, never a gate on winning)
  const ladderTick = (tt) => {
    if (Math.floor(tt * 30) % 10 === 0) l.tap();
    const next = l.nextLedge;
    if (next) l.buy('area', next.id);
    const reserve = next ? next.open : 0;
    for (const a of l.areas) {
      if (l.cash - (l.cost('hire', a.id) ?? Infinity) >= reserve) l.buy('hire', a.id);
      if (l.cash - (l.cost('up', a.id) ?? Infinity) >= reserve) l.buy('up', a.id);
    }
    l.step(1 / 30); l.drain();
  };
  while (l.state === 'play' && t < 4000) {
    const before = l.openCount;
    ladderTick(t);
    if (l.openCount > before) opened.push(l.areas[l.openCount - 1].id);
    t += 1 / 30;
  }
  console.log(`Phase 2H campaign: won in ${t.toFixed(0)}s, ladder climbed: ${opened.join(' -> ')}`);
  assert.equal(l.state, 'won');
  assert.deepEqual(opened, ['reef', 'cave', 'abyss', 'giftun', 'ras_temple'], 'every rung opened, in ladder order');
  assert.ok(t > 60 && t < 900);
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

import fs from 'node:fs';

test('Red Sea Pearl Divers anchor: title and win line on the Red Sea coast', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("title: ['غوّاصو لؤلؤ البحر الأحمر', 'Red Sea Pearl Divers']"));
  assert.ok(main.includes('ساحل البحر الأحمر'));
});

test('Director Protocol: every zone has a unique background motif, in LEDGES order', () => {
  assert.equal(ZONE_THEMES.length, LEDGES.length);
  assert.deepEqual(ZONE_THEMES.map((t) => t.id), LEDGES.map((l) => l.id));
  assert.equal(new Set(ZONE_THEMES.map((t) => t.motif)).size, 6, 'no two zones share a motif');
  assert.equal(new Set(ZONE_THEMES.map((t) => t.overlay)).size, 6, 'no two zones share an overlay tint');
});

test('Director Protocol: the renderer draws every zone motif (no shared background)', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  for (const t of ZONE_THEMES) assert.ok(main.includes(t.motif), `main.js draws motif ${t.motif}`);
  assert.ok(main.includes('_zoneDress'), 'renderer has the per-zone dressing pass');
});
