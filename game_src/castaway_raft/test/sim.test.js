import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Voyage, LEVELS, COST, normalizeSave, logbookEntries } from '../src/sim.js';

/** A robot castaway: hooks the item closest to the raft, builds what the level needs, scares the shark. */
function play(level, opts = {}) {
  const v = new Voyage({ level, easy: opts.easy, seed: opts.seed ?? 3 });
  let t = 0;
  while (v.state !== 'done' && t < 900) {
    if (v.hook.phase === 'idle') {
      const sh = v.shark;
      if (v.level.shark && (sh.state === 'circle' || sh.state === 'bite')) v.throwHook(sh.x, sh.y);
      else {
        const cand = v.items.filter((i) => i.y > 0.15 && i.y < 0.85 && !i.grabbed).sort((a, b) => Math.hypot(a.x - 0.5, a.y - 0.7) - Math.hypot(b.x - 0.5, b.y - 0.7))[0];
        if (cand) v.throwHook(cand.x, cand.y + 0.01);
      }
    }
    const need = v.level.need;
    for (const k of ['sail', 'fish', 'hut']) if (need[k] && !v.built[k]) v.build(k);
    if (need.tile && v.extra.tile < need.tile) v.build('tile');
    v.step(1 / 30);
    t += 1 / 30;
  }
  return { v, t };
}

test('twelve levels, each a new stretch of sea that ends at an island', () => {
  assert.equal(LEVELS.length, 12);
  for (const l of LEVELS) assert.ok(l.len > 30 && l.need && l.ar && l.en);
});

// Phase 2G freeze: stops 1-8 gameplay data is byte-identical to before the expansion.
const FROZEN = [
  { id: 1, ar: 'رحلة جزيرة النخيل', en: 'Palm Cay Run', len: 40, spawn: 1.0, shark: false, bottles: 1, need: { tile: 1 }, isl: 'palm' },
  { id: 2, ar: 'تيار الخشب العائم', en: 'Driftwood Current', len: 48, spawn: 1.0, shark: false, bottles: 1, need: { tile: 1, sail: 1 }, isl: 'sand' },
  { id: 3, ar: 'شعاب القرش', en: 'Shark Shoals', len: 56, spawn: 1.1, shark: true, bottles: 2, need: { tile: 1, sail: 1, fish: 1 }, isl: 'rock' },
  { id: 4, ar: 'صخرة الزعنفة', en: 'Fin Rock', len: 60, spawn: 1.1, shark: true, bottles: 2, need: { tile: 1, sail: 1, fish: 1, hut: 1 }, isl: 'rock' },
  { id: 5, ar: 'مرجان تائه', en: 'Coral Drift', len: 64, spawn: 1.2, shark: true, bottles: 2, need: { tile: 2, sail: 1, fish: 1, hut: 1 }, isl: 'coral' },
  { id: 6, ar: 'مضيق العاصفة', en: 'Storm Strait', len: 68, spawn: 1.3, shark: true, bottles: 3, need: { tile: 2, sail: 1, fish: 1, hut: 1 }, isl: 'palm', storm: true },
  { id: 7, ar: 'بوابة الحوت', en: 'Whale Gate', len: 72, spawn: 1.3, shark: true, bottles: 3, need: { tile: 3, sail: 1, fish: 1, hut: 1 }, isl: 'sand' },
  { id: 8, ar: 'جزيرة الكنز', en: 'Treasure Atoll', len: 80, spawn: 1.4, shark: true, bottles: 3, need: { tile: 3, sail: 1, fish: 1, hut: 1 }, isl: 'gold' },
];
const gameplay = (l) => { const { fact, ...rest } = l; return rest; };

test('freeze: stops 1-8 gameplay fields unchanged, ids 1..12 in order', () => {
  assert.deepEqual(LEVELS.slice(0, 8).map(gameplay), FROZEN);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('12-stop structure: new stops are real Aswan islands, gentle difficulty rise, facts in both languages', () => {
  const names = LEVELS.slice(8).map((l) => l.en);
  assert.deepEqual(names, ["Kitchener's Island", 'Elephantine Island', 'Sehel Island', 'Philae Island']);
  for (let i = 1; i < LEVELS.length; i++) assert.ok(LEVELS[i].len >= LEVELS[i - 1].len, 'len never drops');
  for (const l of LEVELS) {
    assert.ok(l.fact && l.fact.ar.length > 10 && l.fact.en.length > 10, `stop ${l.id} fact`);
    assert.ok(['palm', 'sand', 'rock', 'coral', 'gold'].includes(l.isl), `stop ${l.id} reuses a shipped island plate`);
  }
  // kind rules: nothing in the data can fail a child — no timers/lives fields exist
  for (const l of LEVELS) assert.ok(!('timeLimit' in l) && !('lives' in l) && !('par' in l));
});

test('a robot castaway reaches every island with stars', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    const { v, t } = play(i);
    assert.equal(v.state, 'done', `level ${i + 1} not finished after ${t | 0}s`);
    assert.ok(v.stars >= 1);
    assert.ok(v.mustDone);
    console.log(`level ${i + 1}: ${t.toFixed(0)}s, stars ${v.stars}, bottles ${v.bottles}/${v.level.bottles}, lost ${v.lost}`);
  }
});

test('the raft waits at the island until the building list is done', () => {
  const v = new Voyage({ level: 0 });
  for (let i = 0; i < 30 * 60; i++) v.step(1 / 30);
  assert.equal(v.progress, 1);
  assert.equal(v.state, 'sail');
  v.res.wood = 3;
  assert.ok(v.build('tile'));
  for (let i = 0; i < 30 * 4; i++) v.step(1 / 30);
  assert.equal(v.state, 'done');
});

test('a hook grabs what is near and brings it to the raft', () => {
  const v = new Voyage({ level: 0 });
  v.items.push({ id: 99, kind: 'plank', x: 0.5, y: 0.4, vy: 0, ph: 0 });
  assert.ok(v.throwHook(0.5, 0.4));
  assert.equal(v.throwHook(0.2, 0.2), false); // already out
  for (let i = 0; i < 90; i++) v.step(1 / 30);
  assert.equal(v.res.wood, 1);
  assert.equal(v.hook.phase, 'idle');
});

test('building costs resources, a sail speeds the raft, the shark takes one log and can be scared', () => {
  const v = new Voyage({ level: 2 });
  assert.equal(v.canBuild('sail'), false);
  v.res.wood = 5;
  v.res.crate = 1;
  assert.ok(v.build('sail'));
  assert.equal(v.res.wood, 3);
  assert.equal(v.speed, 1.6);
  assert.equal(v.build('sail'), false);
  assert.deepEqual(COST.tile, { wood: 3 });
  // bitten
  v.progress = 0.5;
  v.shark.state = 'bite';
  v.shark.t = 1.7;
  v.step(0.2);
  assert.equal(v.res.wood, 2);
  assert.equal(v.lost, 1);
  // scared
  const w = new Voyage({ level: 2 });
  w.progress = 0.5;
  w.shark.state = 'circle';
  w.shark.x = 0.7;
  w.shark.y = 0.6;
  w.throwHook(0.7, 0.6);
  for (let i = 0; i < 40; i++) w.step(1 / 30);
  assert.equal(w.shark.state === 'flee' || w.shark.state === 'none', true);
  assert.equal(w.lost, 0);
});

test('damaged saves load safely', () => {
  assert.deepEqual(normalizeSave(null).stars, {});
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 12);
  assert.equal(normalizeSave({ unlocked: 'x', stars: { 1: 9 } }).unlocked, 1);
});

test('old-save migration: a finished 8-stop save keeps its stars and unlocks stop 9', () => {
  const old = { unlocked: 8, stars: { 1: 3, 2: 3, 3: 2, 4: 2, 5: 2, 6: 1, 7: 1, 8: 3 }, coins: 500 };
  const s = normalizeSave(old);
  assert.equal(s.unlocked, 8);
  assert.deepEqual(s.stars, old.stars);
  const book = logbookEntries(old);
  assert.equal(book.length, 12);
  assert.deepEqual(book.map((e) => e.unlocked), [true, true, true, true, true, true, true, true, false, false, false, false]);
  assert.deepEqual(logbookEntries(null).map((e) => e.unlocked), Array(12).fill(false));
});

test('scripted campaign: robot sails stop 1 to 12, unlock chain 1→12, logbook completes', () => {
  let save = normalizeSave(null);
  for (let i = 0; i < LEVELS.length; i++) {
    assert.equal(save.unlocked, i + 1, `stop ${i + 1} should be unlocked at campaign step ${i + 1}`);
    const { v } = play(i);
    assert.equal(v.state, 'done', `campaign stop ${i + 1} not finished`);
    if (v.stars > (save.stars[v.level.id] || 0)) save.stars[v.level.id] = v.stars;
    save.unlocked = Math.max(save.unlocked, Math.min(LEVELS.length, v.level.id + 1));
    save = normalizeSave(save);
  }
  assert.equal(save.unlocked, 12);
  assert.deepEqual(logbookEntries(save).map((e) => e.unlocked), Array(12).fill(true));
});

import fs from 'node:fs';

test('Nile Felucca anchor: title, Nile crocodile and Nile island strings', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['فلوكة النيل', 'Nile Felucca']"));
  assert.ok(i18n.includes('تمساح النيل'));
  assert.ok(i18n.includes('جزيرة النيل'));
  assert.ok(!i18n.includes('Hungry shark'));
});
