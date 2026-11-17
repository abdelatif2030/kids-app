import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FreshMemory, isSpotlight, weekOf } from '../src/letters/fresh.js';
import { LEVELS, LevelPlay, levelsFor } from '../src/letters/levels.js';
import { ROUNDS } from '../src/letters/sim.js';

/** Plays a whole level right away (as the game does) and returns the keys it asked about. */
function playOut(mem, levelId, age, seed) {
  mem.begin(levelId);
  const p = new LevelPlay(levelId, age, seed, mem);
  const keys = [];
  while (!p.finished) { const r = p.cur; if (r.key) { mem.note(r.key); keys.push(r.key); } p.tap(r.answer); }
  return keys;
}

test('a second visit to the same level shows new things first (large pool: no overlap at all)', () => {
  const mem = new FreshMemory(null, 2900);
  const a = playOut(mem, 'words', 6, 1);
  const b = playOut(mem, 'words', 6, 2);
  const c = playOut(mem, 'words', 6, 3);
  assert.equal(a.length, ROUNDS);
  for (const k of b) assert.ok(!a.includes(k), `repeat ${k}`);
  for (const k of c) assert.ok(!a.includes(k) && !b.includes(k), `repeat ${k}`);
});

test('a small pool shows what is left first, then the oldest (fruits and vegetables, 8 rounds)', async () => {
  const { PICKS } = await import('../src/letters/levels.js');
  const mem = new FreshMemory(null, 2900);
  const a = playOut(mem, 'fruits', 5, 1);
  assert.equal(new Set(a).size, ROUNDS);
  const unseen = PICKS.fruits.items.map((it) => `t:${it.thing}`).filter((k) => !a.includes(k));
  assert.equal(unseen.length, PICKS.fruits.items.length - ROUNDS);
  const b = playOut(mem, 'fruits', 5, 2);
  for (const k of b) assert.ok(unseen.includes(k), `${k} was already shown: new things come first`);
});

test('the next level does not repeat what the level before it just showed', () => {
  const mem = new FreshMemory(null, 2900);
  const before = playOut(mem, 'words', 6, 7);
  const after = playOut(mem, 'letters', 6, 8); // letters and words share the same pictures (key t:<picture>)
  for (const k of after) assert.ok(!before.includes(k), `repeat across levels: ${k}`);
});

test('the spotlight is deterministic per week, changes with the week, and goes first when not met yet', () => {
  const keys = Array.from({ length: 300 }, (_, i) => `t:thing${i}`);
  const w1 = keys.filter((k) => isSpotlight(k, 2900));
  const w2 = keys.filter((k) => isSpotlight(k, 2901));
  assert.deepEqual(w1, keys.filter((k) => isSpotlight(k, 2900)));
  assert.ok(w1.length > 10 && w1.length < 45);
  assert.notDeepEqual(w1, w2);
  const mem = new FreshMemory(null, 2900);
  const order = mem.order(keys, (k) => k, Math.random);
  assert.ok(order.slice(0, w1.length).every((k) => isSpotlight(k, 2900)));
  assert.equal(weekOf(0), 0);
  assert.equal(weekOf(7 * 86400000), 1);
});

test('memory survives a save and a load, ignores damaged data and stays bounded', () => {
  const mem = new FreshMemory(null, 1);
  mem.begin('words');
  for (let i = 0; i < 2000; i++) mem.note(`t:x${i}`);
  assert.ok(Object.keys(mem.seen).length <= 1500);
  assert.ok(mem.seen["t:x1999"] && !mem.seen["t:x0"]);
  const copy = new FreshMemory(JSON.parse(JSON.stringify(mem.toJSON())), 1);
  assert.deepEqual(copy.toJSON(), mem.toJSON());
  for (const bad of [null, undefined, 5, 'x', [], { seen: 3, tick: 'a', cur: 7, prev: 'z' }]) {
    const m = new FreshMemory(bad, 1);
    m.begin('letters'); m.note('t:a');
    assert.equal(m.seen['t:a'], 1);
  }
});

test('with memory every level still has exactly one right option and eight rounds, for many visits', () => {
  for (const age of [3, 4, 5, 6]) {
    const mem = new FreshMemory(null, 2900);
    for (let visit = 0; visit < 6; visit++) for (const lv of levelsFor(age)) {
      mem.begin(lv.id);
      const p = new LevelPlay(lv.id, age, visit * 100 + 7, mem);
      assert.equal(p.rounds.length, ROUNDS, lv.id);
      for (const r of p.rounds) {
        assert.equal(r.options.filter((o) => o.id === r.answer).length, 1, `${lv.id} ${r.prompt}`);
        assert.equal(new Set(r.options.map((o) => o.id)).size, r.options.length, `${lv.id} duplicate option`);
        if (r.key) mem.note(r.key);
      }
    }
  }
  assert.ok(LEVELS.length > 0);
});

test('the habits level never asks the same habit twice in one game', () => {
  for (let s = 1; s < 30; s++) {
    const p = new LevelPlay('habits', 5, s, new FreshMemory(null, 1));
    assert.equal(new Set(p.rounds.map((r) => r.answer)).size, ROUNDS);
  }
});
