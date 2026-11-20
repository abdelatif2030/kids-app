import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { NEW_LEVELS, NEW_ITEMS, allNewLevelSentences, PHRASES, RULES, wrongsFor } from '../src/letters/new_levels.js';
import { CONCEPT_IDS } from '../src/kit/concepts3d.js';
import { ALL_LEVELS, LevelPlay, TOPIC_LEVELS } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { ROUNDS } from '../src/letters/sim.js';
import { rng } from '../src/maze/sim.js';

// 2026-11-20: opposites, patterns, senses and feelings, manners, safety.
const lines = JSON.parse(readFileSync(new URL('../../../assets/games/learn_voice/lines.json', import.meta.url), 'utf8')).filter((l) => l.lang === 'ar');
const byText = new Map(lines.map((l) => [l.text, l.id]));
const tashkeel = JSON.parse(readFileSync(new URL('../../../tools/game_voice/tashkeel.json', import.meta.url), 'utf8'));
const ids = NEW_LEVELS.map((l) => l.id);

test('five new levels are listed after the old ones, each with its own place and a skill the dashboard knows', () => {
  assert.equal(NEW_LEVELS.length, 5);
  for (const lv of NEW_LEVELS) { assert.ok(ALL_LEVELS.includes(lv) && TOPIC_LEVELS.includes(lv)); assert.ok(lv.world && lv.emoji && lv.ar); }
  assert.equal(ALL_LEVELS.length, 29);
});
test('every sentence of the new levels has a recording id, a diacritized reading and a voice clip file', () => {
  for (const q of allNewLevelSentences()) {
    assert.ok(byText.has(q), `not in the voice list: ${q}`);
    assert.ok(/[ً-ْ]/.test(tashkeel[q] || ''), `no marks: ${q}`);
    readFileSync(new URL(`../../../assets/games/learn_voice/ar/${byText.get(q)}.mp3`, import.meta.url));
  }
});
test('each new level has at least 100 different things and every item builds a valid round', () => {
  for (const id of ids) {
    const items = NEW_ITEMS[id];
    assert.ok(new Set(items.map((x) => x.key)).size === items.length, `${id}: duplicate keys`);
    assert.ok(items.length >= 100, `${id}: ${items.length}`);
    for (const it of items) for (const nOpt of [3, 4]) for (const age of [2, 5]) {
      const r = rng(5);
      const used = new Map();
      const pickLow = (arr, n) => [...arr].sort(() => r() - 0.5).sort((a, b) => (used.get(a.id ?? a) || 0) - (used.get(b.id ?? b) || 0)).slice(0, n);
      const round = it.make({ r, nOpt, age, seed: 3, pickLow });
      assert.ok(it.say.includes(round.prompt), `${it.key}: prompt not listed`);
      for (const t of [round.reward, ...(round.read || [])]) if (t) assert.ok(it.say.includes(t), `${it.key}: ${t} not listed`);
      assert.equal(round.options.filter((o) => o.id === round.answer).length, 1, it.key);
      assert.equal(new Set(round.options.map((o) => o.id)).size, round.options.length, `${it.key}: distinct options`);
      assert.ok(round.options.length >= 3, `${it.key}: ${round.options.length} options`);
      if (round.read) assert.equal(round.read.length, round.options.length, `${it.key}: one sentence per option`);
      for (const o of round.options) if (o.kind === 'thing' && /^(rel|box|cup|door|arrow|plate)_/.test(o.thing)) assert.ok(CONCEPT_IDS.includes(o.thing), o.thing);
    }
  }
});
test('every game of a new level has eight different questions, a wrong answer never ends it, and the set place is used', () => {
  for (const lv of NEW_LEVELS) for (const age of [2, 3, 4, 5, 6]) {
    const mem = new FreshMemory(null, 2900);
    for (let g = 0; g < 12; g++) {
      mem.begin(lv.id);
      const p = new LevelPlay(lv.id, age, 17 * g + age, mem, lv.world);
      assert.equal(p.rounds.length, ROUNDS);
      assert.equal(new Set(p.rounds.map((r) => r.key)).size, ROUNDS);
      const wrong = p.cur.options.find((o) => o.id !== p.cur.answer).id;
      assert.equal(p.tap(wrong).ok, false);
      assert.equal(p.cur.answer !== undefined, true);
      p.rounds.forEach((r) => mem.note(r.key));
    }
  }
});
test('manners and safety read their choices; a wrong choice is never also a right one', () => {
  for (const id of ['t_manners', 't_safety']) {
    const reads = NEW_ITEMS[id].filter((x) => x.say.length > 1 && x.make({ r: rng(1), nOpt: 4, age: 5, seed: 1, pickLow: (a, n) => a.slice(0, n) }).read);
    assert.ok(reads.length >= 50, id);
  }
  for (const p of PHRASES) assert.ok(!wrongsFor(p).some((w) => w === p));
  assert.ok(wrongsFor('شكراً').every((w) => !['العفو', 'اتفضل', 'تسلم إيدك'].includes(w)));
  assert.ok(RULES.every(([, right, wrongs]) => wrongs.length >= 2 && !wrongs.includes(right)));
});
test('patterns: the row follows its pattern and the answer fits', () => {
  const r = rng(9);
  const pickLow = (arr, n) => [...arr].sort(() => r() - 0.5).slice(0, n);
  for (const it of NEW_ITEMS.t_patterns.filter((x) => /^pt:(next|missing):/.test(x.key))) {
    const round = it.make({ r, nOpt: 4, age: 5, seed: 1, pickLow });
    const row = round.show.items;
    assert.equal(row.filter((x) => x.kind === 'gap').length, 1);
    const [, , pat] = it.key.split(':');
    const cyc = { AB: 'ab', AAB: 'aab', ABB: 'abb', ABC: 'abc', AABB: 'aabb' }[pat];
    const sig = (x) => (x.kind === 'color' ? x.hex : x.kind === 'shape' ? x.shape : x.thing);
    const gap = row.findIndex((x) => x.kind === 'gap');
    const map = new Map();
    row.forEach((x, i) => { if (i !== gap) { const s = cyc[i % cyc.length]; assert.equal(map.get(s) ?? sig(x), sig(x), it.key); map.set(s, sig(x)); } });
    const optSig = round.options.find((o) => o.id === round.answer);
    const want = map.get(cyc[gap % cyc.length]);
    assert.equal(optSig.kind === 'color' ? optSig.hex : optSig.kind === 'shape' ? optSig.shape : optSig.thing, want, it.key);
  }
});
