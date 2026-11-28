import test from 'node:test';
import assert from 'node:assert/strict';
import { Race, COURSES, LAPS, normalizeSave, postcards, TUBE_X, RING_R } from '../src/sim.js';

const DT = 1 / 60;

// A good young pilot: steers to the next ring, boosts when charged, ducks under bridges and around pillars.
function pilot(r) {
  const p = r.player;
  const g = r.nextRing();
  let tx = g.x;
  let ty = g.y;
  for (const o of r.obstacles) {
    const ds = (o.s - p.s + r.length) % r.length;
    if (ds > 40) continue;
    if (o.kind === 'bridge') ty = Math.min(ty, o.y - o.half - 2.4);
    if (o.kind === 'pillar' && Math.abs(tx - o.x) < 5) tx = o.x + (tx >= o.x ? 5 : -5);
  }
  r.setSteer((tx - p.x) / 3, (ty - p.y) / 3);
  if (p.charge >= 0.66) r.boost();
}

function fly(course, brain, opts = {}) {
  const r = new Race({ course, seed: 11, ...opts });
  const seen = [];
  for (let i = 0; i < 60 * 400 && r.state !== 'done'; i++) {
    if (brain) brain(r);
    for (const e of r.step(DT)) seen.push(e.type);
  }
  return { r, seen };
}

test('every course is a closed loop with rings inside the flight tube', () => {
  for (let c = 0; c < COURSES.length; c++) {
    const r = new Race({ course: c });
    assert.ok(r.length > 1500 && r.length < 4000, `length ${r.length}`);
    const a = r.track.frame(0).p;
    const b = r.track.frame(r.length - 0.01).p;
    assert.ok(Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 2);
    for (const g of r.rings) assert.ok(Math.abs(g.x) < TUBE_X - RING_R + 1 && g.s > 0 && g.s < r.length);
    for (const o of r.obstacles) assert.ok(o.s >= 0 && o.s < r.length, `${o.kind} ${o.s}`);
  }
});

test('the countdown runs, then the race starts', () => {
  const r = new Race({ course: 0 });
  const seen = [];
  for (let i = 0; i < 60 * 4; i++) for (const e of r.step(DT)) seen.push(e);
  assert.ok(seen.some((e) => e.type === 'count'));
  assert.ok(seen.some((e) => e.type === 'go'));
  assert.equal(r.state, 'race');
  assert.ok(r.player.speed > 0);
});

test('a good pilot wins every course with rings, boosts and no bumps', () => {
  for (let c = 0; c < COURSES.length; c++) {
    const { r, seen } = fly(c, pilot);
    assert.equal(r.state, 'done', `course ${c}`);
    assert.equal(r.player.lap, LAPS);
    assert.equal(r.result.place, 1, `course ${c} place ${r.result.place}`);
    assert.equal(r.result.stars, 3);
    assert.ok(r.ringsHit >= r.rings.length * LAPS * 0.9, `rings ${r.ringsHit}/${r.rings.length * LAPS}`);
    assert.ok(seen.includes('boost') && seen.includes('lap') && seen.includes('finish'));
    assert.equal(r.bumps, 0, `course ${c} bumps`);
    assert.ok(r.result.time > 40 && r.result.time < 160, `time ${r.result.time}`);
  }
});

test('a child who never steers still gets around and finishes (rings pull them along)', () => {
  for (let c = 0; c < COURSES.length; c++) {
    const { r } = fly(c, null);
    assert.equal(r.state, 'done');
    assert.ok(r.result.stars >= 1);
  }
  const { r } = fly(0, null, { easy: true });
  assert.ok(r.ringsHit > r.rings.length, 'the youngest get help toward the rings');
});

test('rings charge the boost and the boost makes the plane faster', () => {
  const r = new Race({ course: 0 });
  for (let i = 0; i < 60 * 6; i++) r.step(DT);
  r.player.charge = 1;
  const v0 = r.player.speed;
  assert.ok(r.boost());
  for (let i = 0; i < 60; i++) r.step(DT);
  assert.ok(r.player.speed > v0 * 1.2);
  assert.equal(r.boost(), false, 'no double boost');
});

test('flying into a bridge deck is a soft bump, never the end', () => {
  const r = new Race({ course: 0 });
  for (let i = 0; i < 60 * 4; i++) r.step(DT);
  const br = r.obstacles.find((o) => o.kind === 'bridge');
  r.player.s = br.s - 30;
  r.player.y = br.y;
  let bumped = false;
  for (let i = 0; i < 60 && !bumped; i++) { r.setSteer(0, 0); r.player.y = br.y; bumped = r.step(DT).some((e) => e.type === 'bump'); }
  assert.ok(bumped);
  assert.equal(r.state, 'race');
  assert.ok(r.player.bump > 0 && r.player.imm > 0);
});

test('damaged saves load safely', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, best: {}, muted: false });
  assert.deepEqual(normalizeSave({ unlocked: 42, stars: { 1: 7, 2: 2 }, best: { 1: 'x', 2: 61.234 }, muted: 'yes' }), { unlocked: 3, stars: { 2: 2 }, best: { 2: 61.23 }, muted: false });
});

test('every course flies over its own real place (B2: explicit pano, no ice over Cairo)', async () => {
  const { existsSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const artDir = fileURLToPath(new URL('../../../assets/games/air_race/art/', import.meta.url));
  for (const c of COURSES) {
    assert.ok(Number.isInteger(c.pano), `course ${c.id} must name its panorama explicitly`);
    assert.ok(existsSync(`${artDir}pano${c.pano}.webp`), `missing pano${c.pano}.webp for course ${c.id}`);
    assert.notEqual(c.world, 'glacier', `course ${c.id} (${c.en}) is an Egyptian landmark, not a glacier`);
  }
  const byId = Object.fromEntries(COURSES.map((c) => [c.id, c]));
  assert.equal(byId[2].world, 'desert', 'the New Capital stands in the desert');
  assert.equal(byId[5].world, 'sunset', 'the Baron Palace panorama is a sunset');
  assert.equal(byId[3].world, 'lagoon', 'the Alexandria Library stands on the sea');
});

import fs from 'node:fs';

test('Nile Air Tour anchor: title renamed; five landmark courses unchanged', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['جولة النيل الجوية', 'Nile Air Tour']"));
  assert.deepEqual(COURSES.slice(0, 5).map((c) => c.en), ['Cairo Airport', 'New Capital', 'Alex Library', 'Montaza Palace', 'Baron Palace']);
});

// ---- Phase 2G: southern leg + postcards ---------------------------------------------------------------------------------

// The pre-2G data of courses 1–5, field for field (the new `fact` field is additive and excluded here).
const FROZEN_FIVE = [
  { id: 1, ar: 'مطار القاهرة', en: 'Cairo Airport', world: 'sunset', pano: 1, rx: 380, rz: 300, wob: [0.22, 3, 0.4], hy: [34, 10], rings: 26, golden: 4, bridges: [5, 14, 21], pillars: [3, 9, 17, 24], arches: [12] },
  { id: 2, ar: 'العاصمة الجديدة', en: 'New Capital', world: 'desert', pano: 2, rx: 420, rz: 330, wob: [0.28, 2, 1.1], hy: [46, 14], rings: 28, golden: 4, bridges: [19], pillars: [4, 10, 15, 23, 26], arches: [7, 13, 21], canyon: [0.62, 0.74] },
  { id: 3, ar: 'مكتبة إسكندرية', en: 'Alex Library', world: 'lagoon', pano: 3, rx: 400, rz: 340, wob: [0.3, 4, 2.2], hy: [38, 12], rings: 30, golden: 5, bridges: [4, 11, 18, 26], pillars: [2, 8, 15, 22, 28], arches: [6, 20] },
  { id: 4, ar: 'قصر المنتزه', en: 'Montaza Palace', world: 'lagoon', pano: 4, rx: 440, rz: 340, wob: [0.3, 4, 1.5], hy: [40, 12], rings: 30, golden: 5, bridges: [3, 9, 15, 22, 27], pillars: [2, 7, 12, 18, 25], arches: [5, 13, 20] },
  { id: 5, ar: 'قصر البارون', en: 'Baron Palace', world: 'sunset', pano: 5, rx: 460, rz: 360, wob: [0.3, 3, 2.6], hy: [48, 14], rings: 32, golden: 5, bridges: [10, 24], pillars: [3, 8, 14, 19, 27, 30], arches: [6, 12, 17, 23, 29], canyon: [0.5, 0.64] },
];
const dataOf = (c) => Object.fromEntries(Object.entries(c).filter(([k]) => k !== 'fact'));

test('2G freeze: the first five courses are byte-identical data; the southern leg is appended only', () => {
  assert.equal(COURSES.length, 9);
  assert.deepEqual(COURSES.map((c) => c.id), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'ids stay sequential, nothing renumbered');
  for (let i = 0; i < 5; i++) assert.deepEqual(dataOf(COURSES[i]), FROZEN_FIVE[i], `course ${i + 1} data changed`);
  assert.deepEqual(COURSES.slice(5).map((c) => c.en), ['Luxor Temples', 'Aswan & the Nile', 'Abu Simbel', 'Hurghada & the Red Sea']);
  assert.deepEqual(COURSES.slice(5).map((c) => c.world), ['desert', 'lagoon', 'sunset', 'lagoon']);
  // the difficulty curve continues gently: rings and course size never shrink along the tour
  for (let i = 1; i < COURSES.length; i++) assert.ok(COURSES[i].rings >= COURSES[i - 1].rings - 2, `rings dip at course ${COURSES[i].id}`);
  for (const c of COURSES) {
    assert.ok(c.fact && c.fact.ar.length > 10 && c.fact.en.length > 10, `course ${c.id} needs a postcard fact in both languages`);
    for (const k of [...c.bridges, ...c.pillars, ...c.arches]) assert.ok(k >= 0 && k < c.rings, `course ${c.id} obstacle ring ${k} out of range`);
  }
});

test('2G unlock chain reaches the end of the southern leg', () => {
  for (let k = 1; k <= 8; k++) {
    const stars = {};
    for (let id = 1; id <= k; id++) stars[id] = 1;
    assert.ok(normalizeSave({ stars }).unlocked >= k + 1, `finishing course ${k} must open course ${k + 1}`);
  }
  const all = {};
  for (let id = 1; id <= 9; id++) all[id] = 3;
  assert.equal(normalizeSave({ stars: all }).unlocked, 9);
  assert.equal(normalizeSave({ unlocked: 9 }).unlocked, 9, 'the cap rose with the tour');
});

test('2G old-save migration: a finished pre-2G save keeps everything and earns its five postcards', () => {
  const old = { unlocked: 5, stars: { 1: 3, 2: 3, 3: 2, 4: 1, 5: 3 }, best: { 1: 88.5, 5: 120.25 }, muted: true };
  assert.deepEqual(normalizeSave(old), { unlocked: 6, stars: { 1: 3, 2: 3, 3: 2, 4: 1, 5: 3 }, best: { 1: 88.5, 5: 120.25 }, muted: true },
    'stars/best/muted survive untouched; unlocked follows the stars into the new leg (course 5 done → 6 open)');
  const cards = postcards(old);
  assert.deepEqual(cards.map((e) => e.got), [true, true, true, true, true, false, false, false, false]);
});

test('2G postcards: locked cards are secrets, earned cards show name, stars and fact', () => {
  const fresh = postcards(null);
  assert.equal(fresh.length, 9);
  assert.ok(fresh.every((e) => !e.got && e.fact === null), 'a fresh save leaks no fact');
  const some = postcards({ stars: { 1: 2, 6: 3 } });
  assert.deepEqual(some.map((e) => e.got), [true, false, false, false, false, true, false, false, false]);
  assert.equal(some[0].stars, 2);
  assert.equal(some[0].fact, COURSES[0].fact);
  assert.equal(some[5].fact.en, COURSES[5].fact.en);
  assert.equal(some[1].fact, null, 'an unearned card stays a secret even mid-tour');
});

test('2G campaign proof: the pilot flies the whole tour in order, first race to last, and collects every postcard', () => {
  // the same progression rule main.js applies on the results screen
  let save = normalizeSave(null);
  for (let i = 0; i < COURSES.length; i++) {
    assert.ok(i + 1 <= save.unlocked, `course ${i + 1} should be open by now (unlocked=${save.unlocked})`);
    const { r } = fly(i, pilot);
    assert.equal(r.state, 'done', `course ${i + 1}`);
    assert.ok(r.result.stars >= 1, `course ${i + 1} finished`);
    save.stars[COURSES[i].id] = Math.max(save.stars[COURSES[i].id] ?? 0, r.result.stars);
    if (i + 2 > save.unlocked && i + 1 < COURSES.length) save.unlocked = i + 2;
    save = normalizeSave(save);
  }
  assert.equal(save.unlocked, 9);
  assert.ok(postcards(save).every((e) => e.got), 'every postcard earned by the end of the tour');
});
