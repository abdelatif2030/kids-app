import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeSave, totalStars, starRow, LEVELS, DEEP_LAYERS, deepFor, DeepRoom } from '../src/world/main.js';

test('six levels, all open: dress, salon, pet, cupcake, garden and the big party', () => { assert.deepEqual(LEVELS.map((l) => l.id), ['dress', 'salon', 'pet', 'cupcake', 'garden', 'party']); });
test('saves are cleaned: damaged data becomes a clean start, stars are never negative or huge', () => {
  assert.equal(totalStars(normalizeSave(null)), 0);
  assert.equal(totalStars(normalizeSave('junk')), 0);
  const s = normalizeSave({ stars: { dress: 3, salon: -5, pet: 'x', cupcake: 99999, garden: 2.9 }, muted: 1 });
  assert.deepEqual(s.stars, { dress: 3, salon: 0, pet: 0, cupcake: 999, garden: 2, party: 0 }); assert.equal(s.muted, true);
});
test('the star row shows at most three', () => { assert.equal(starRow(0), '☆☆☆'); assert.equal(starRow(2), '⭐⭐☆'); assert.equal(starRow(9), '⭐⭐⭐'); });

import fs from 'node:fs';

test('Phase 2H freeze: the hub and its six doors are unchanged by the second layers', () => {
  assert.deepEqual(LEVELS.map((l) => [l.id, l.folder, l.ar, l.en]), [
    ['dress', 'little_princess_dress', 'ألبسي نور', 'Dress up Nour'],
    ['salon', 'little_salon', 'صالون الشعر', 'Hair salon'],
    ['pet', 'baby_and_pet', 'بيبي وصاحبها', 'Baby & pet'],
    ['cupcake', 'cupcake_shop', 'محل الكب كيك', 'Cupcake shop'],
    ['garden', 'butterfly_garden', 'حديقة الفراشات', 'Butterfly garden'],
    ['party', 'girls_world', 'الحفلة الكبيرة', 'The big party'],
  ]);
});

test('Phase 2H: every door has exactly one second layer, bilingual, five spots', () => {
  assert.deepEqual(DEEP_LAYERS.map((d) => d.id), LEVELS.map((l) => l.id));
  for (const d of DEEP_LAYERS) {
    assert.ok(d.ar && d.en && d.emoji && d.cover, d.id);
    assert.equal(d.spots.length, 5, d.id);
    for (const s of d.spots) assert.ok(s.e && s.ar && s.en, `${d.id} spot`);
    assert.equal(deepFor(d.id), d);
  }
  assert.equal(deepFor('party').en, 'The Nile felucca'); // the plan's party integrator
  assert.equal(deepFor('nope'), null);
});

test('Phase 2H DeepRoom: a spot counts once, completion needs every spot, nothing is lost', () => {
  const r = new DeepRoom(deepFor('dress'));
  assert.equal(r.complete, false);
  assert.equal(r.tap(0), 'found');
  assert.equal(r.tap(0), 'no'); // already found: a gentle no-op, never a penalty
  assert.equal(r.tap(99), 'no');
  for (let i = 1; i < 4; i++) assert.equal(r.tap(i), 'found');
  assert.equal(r.foundCount, 4); assert.equal(r.complete, false);
  assert.equal(r.tap(4), 'done');
  assert.equal(r.complete, true);
});

test('Phase 2H DeepRoom: garden spots grow in two taps (seed, then bloom)', () => {
  const r = new DeepRoom(deepFor('garden'));
  assert.equal(r.tap(0), 'grew'); assert.equal(r.found(0), false); assert.equal(r.foundCount, 0);
  assert.equal(r.tap(0), 'found'); assert.equal(r.found(0), true);
  for (let i = 1; i < 5; i++) { r.tap(i); r.tap(i); }
  assert.equal(r.complete, true);
});

test('Phase 2H save migration: old saves gain zeroed deep counts and keep stars and bag', () => {
  const old = normalizeSave({ stars: { dress: 2, party: 1 }, bag: { cupcakes: 3 }, muted: false });
  assert.deepEqual(old.deep, { dress: 0, salon: 0, pet: 0, cupcake: 0, garden: 0, party: 0 });
  assert.equal(old.stars.dress, 2); assert.equal(old.bag.cupcakes, 3);
  const kept = normalizeSave({ deep: { garden: 4, dress: -2, party: 'x', salon: 99999 } });
  assert.deepEqual(kept.deep, { dress: 0, salon: 999, pet: 0, cupcake: 0, garden: 4, party: 0 });
  assert.deepEqual(normalizeSave(null).deep, { dress: 0, salon: 0, pet: 0, cupcake: 0, garden: 0, party: 0 });
});

test('Phase 2H wiring: the world offers the second layer from inside the room and returns', () => {
  const world = fs.readFileSync(new URL('../src/world/main.js', import.meta.url), 'utf8');
  assert.ok(world.includes('gw-deep-btn') && world.includes('_openDeep') && world.includes('_closeDeep'));
  assert.ok(world.includes("data-deep-layer"));
});

test('Director Protocol: every second layer has its OWN sky and its OWN code-drawn dressing', () => {
  // Background-differentiation rule: no two layers may share a sky colour or a decor set.
  const tops = DEEP_LAYERS.map((d) => d.sky[0]);
  assert.equal(new Set(tops).size, tops.length, 'sky tops must all differ');
  const skies = DEEP_LAYERS.map((d) => d.sky.join('/'));
  assert.equal(new Set(skies).size, skies.length, 'full skies must all differ');
  for (const d of DEEP_LAYERS) {
    assert.ok(Array.isArray(d.decor) && d.decor.length >= 4, `${d.id} needs a decor garland`);
    assert.ok(Array.isArray(d.floor) && d.floor.length >= 4, `${d.id} needs a floor dressing row`);
  }
  const decors = DEEP_LAYERS.map((d) => d.decor.join(''));
  assert.equal(new Set(decors).size, decors.length, 'decor garlands must all differ');
  const floors = DEEP_LAYERS.map((d) => d.floor.join(''));
  assert.equal(new Set(floors).size, floors.length, 'floor rows must all differ');
  const world = fs.readFileSync(new URL('../src/world/main.js', import.meta.url), 'utf8');
  assert.ok(world.includes('gw-deep-decor'), 'the overlay must render the dressing');
});

test('Director Protocol fixes: short-landscape compact layer + pill hides under room cards', () => {
  const world = fs.readFileSync(new URL('../src/world/main.js', import.meta.url), 'utf8');
  assert.ok(world.includes('@media (max-height:520px)'), 'compact deep layer for 844x390-class screens');
  assert.ok(world.includes("box.querySelector('.gk-dim')") && world.includes('MutationObserver'), 'pill must hide while a room card is open');
  assert.ok(world.includes('this._pillObs.disconnect()'), 'observer must be disconnected on close');
  assert.ok(world.includes('.gw-root .gk-card{max-height:96%;overflow-y:auto}'), 'world-only card height guard');
});

test('Nour\'s World anchor: hub renamed, two dress places are Egyptian', () => {
  const world = fs.readFileSync(new URL('../src/world/main.js', import.meta.url), 'utf8');
  assert.ok(world.includes("Nour's world") && world.includes('عالم نور'));
  assert.ok(world.includes('ألبسي نور'));
});
