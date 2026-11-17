import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { LEVELS, LevelPlay, WORD_ITEMS, wordItems, PICKS, HABITS } from '../src/letters/levels.js';
import { ROUNDS, letterById } from '../src/letters/sim.js';

const ART = new URL('../../../assets/games/art/', import.meta.url);
const DIMS = JSON.parse(readFileSync(new URL('../src/kit/art_dims.json', import.meta.url), 'utf8'));

test('every extra word has its picture, a real letter and a unique id', () => {
  const ids = new Set();
  for (const w of WORD_ITEMS) {
    assert.ok(!ids.has(w.id), `duplicate ${w.id}`);
    ids.add(w.id);
    assert.ok(letterById(w.letter), `unknown letter ${w.letter}`);
    if (w.id.startsWith('w_')) {
      assert.ok(existsSync(new URL(`${w.thing}.webp`, ART)), `missing picture ${w.thing}`);
      assert.ok(DIMS[w.thing], `no size for ${w.thing}`);
      assert.ok(w.word.startsWith(w.the.replace(/^ال/, '').split(' ')[0]) || w.the.includes(w.word.split(' ')[0]), `${w.the} / ${w.word}`);
    }
  }
  assert.ok(WORD_ITEMS.length >= 100);
});

test('the pictures of new vehicles, fruits and habits exist', () => {
  const things = [...PICKS.vehicles.items, ...PICKS.fruits.items].map((x) => x.thing).filter((t) => /^[a-z]_/.test(t));
  for (const t of [...things, ...HABITS.map((h) => h.answer).filter((t) => /^[a-z]_/.test(t))]) {
    assert.ok(existsSync(new URL(`${t}.webp`, ART)), `missing picture ${t}`);
  }
});

test('every level has eight rounds at every age, the answer is among distinct options', () => {
  assert.equal(ROUNDS, 8);
  for (const lv of LEVELS) for (const age of [3, 4, 5, 6]) for (const seed of [1, 7, 99]) {
    const play = new LevelPlay(lv.id, age, seed);
    assert.equal(play.rounds.length, ROUNDS, `${lv.id} age ${age}`);
    for (const r of play.rounds) {
      const ids = r.options.map((o) => o.id);
      assert.ok(ids.includes(r.answer), `${lv.id} age ${age}: answer missing`);
      assert.equal(new Set(ids).size, ids.length, `${lv.id} age ${age}: duplicate options`);
    }
  }
});

test('younger children get the easy words only', () => {
  assert.ok(wordItems(3).length >= 20);
  assert.ok(wordItems(3).every((w) => w.age <= 3));
  assert.ok(wordItems(6).length > wordItems(4).length);
});
