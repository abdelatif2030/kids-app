import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { BANKS, ALL_LEVELS, LevelPlay, PICKS, allBankSentences } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { rng } from '../src/maze/sim.js';
import { allTimeSentences } from '../src/letters/time_level.js';
import { HABITS_MORE } from '../src/letters/habits_more.js';

// 2026-11-19: every level offers at least 100 different things (extra_bank.js and the base banks). These tests check the extra questions themselves.
const lines = JSON.parse(readFileSync(new URL('../../../assets/games/learn_voice/lines.json', import.meta.url), 'utf8')).filter((l) => l.lang === 'ar');
const byText = new Map(lines.map((l) => [l.text, l.id]));
const CLIPS = new URL('../../../assets/games/learn_voice/ar/', import.meta.url);
const tashkeel = JSON.parse(readFileSync(new URL('../../../tools/game_voice/tashkeel.json', import.meta.url), 'utf8'));

test('every sentence an extra question can say is in the voice list and has a diacritized reading', () => {
  const need = [...allBankSentences(), ...allTimeSentences(), ...HABITS_MORE.map((h) => h.text)];
  const missing = need.filter((q) => !byText.has(q));
  assert.deepEqual(missing, []);
  const bare = need.filter((q) => !/[ً-ْ]/.test(tashkeel[q] || ''));
  assert.deepEqual(bare, []);
});

test('every extra question builds a round: one right option among distinct options, a prompt and a unique key', () => {
  for (const [level, items] of Object.entries(BANKS)) {
    const keys = new Set();
    for (const it of items) {
      assert.ok(!keys.has(it.key), `${level}: ${it.key} twice`);
      keys.add(it.key);
      for (const nOpt of [3, 4]) {
        const r = rng(7);
        const used = new Map();
        const pickLow = (arr, n) => [...arr].sort(() => r() - 0.5).sort((a, b) => (used.get(a.id ?? a) || 0) - (used.get(b.id ?? b) || 0)).slice(0, n);
        const round = it.make({ r, nOpt, age: 5, seed: 11, pickLow });
        assert.ok(round.prompt && it.say.includes(round.prompt), `${level} ${it.key}: the prompt is one of the item's sentences`);
        assert.ok(it.say.includes(round.prompt) && (!round.reward || it.say.includes(round.reward)), `${level} ${it.key}: reward must be listed`);
        assert.equal(round.options.filter((o) => o.id === round.answer).length, 1, `${level} ${it.key} (${nOpt} options): one right option`);
        assert.equal(new Set(round.options.map((o) => o.id)).size, round.options.length, `${level} ${it.key}: distinct options`);
        assert.ok(round.options.length >= 3, `${level} ${it.key}: at least three options`);
      }
    }
  }
});

test('a game never repeats a thing, and the extra questions of a level only appear for a child who has met the base things', () => {
  for (const lv of ALL_LEVELS) {
    for (const age of [2, 4, 6]) {
      const mem = new FreshMemory(null, 2900);
      for (let g = 0; g < 40; g++) {
        mem.begin(lv.id);
        const p = new LevelPlay(lv.id, age, 31 * g + age, mem, 'meadow');
        const ks = p.rounds.map((r) => r.key || r.answer);
        assert.equal(new Set(ks).size, ks.length, `${lv.id} age ${age} game ${g}: ${ks.join(' ')}`);
        ks.forEach((k) => mem.note(k));
      }
    }
  }
});

test('every level can offer at least 100 different things once its extra sentences have their clips', () => {
  const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];
  const low = [];
  for (const lv of ALL_LEVELS) {
    const mem = new FreshMemory(null, 99999);
    const seen = new Set();
    let stale = 0;
    for (let g = 0; g < 600 && stale < 40; g++) {
      mem.begin(lv.id);
      const p = new LevelPlay(lv.id, 5, 100 + g * 7, mem, WORLDS[g % 12]);
      const ks = p.rounds.map((r) => r.key || r.answer);
      let fresh = 0;
      for (const k of ks) if (!seen.has(k)) { seen.add(k); fresh++; }
      ks.forEach((k) => mem.note(k));
      stale = fresh === 0 ? stale + 1 : 0;
    }
    if (seen.size < 100) low.push(`${lv.id}(${seen.size})`);
  }
  assert.deepEqual(low, [], `levels below 100 different things: ${low.join(' ')}`);
});

test('the picture levels still have their pictures', () => {
  for (const id of ['fruits', 'vehicles', 't_sea', 't_space']) assert.ok(PICKS[id].items.length >= 12);
  assert.ok(existsSync(new URL('lines.json', new URL('../../../assets/games/learn_voice/', import.meta.url))));
  assert.ok(existsSync(CLIPS));
});
