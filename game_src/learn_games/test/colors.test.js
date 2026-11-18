import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COLORS, COLOR_TIERS, COLOR_THINGS, THING_COLORS, colorOf, colorOfThing, colorTierCounts, thingRounds, colorPlan, findColorQ, findThingQ, allColorSentences, colorChoices } from '../src/letters/colors.js';
import { LevelPlay } from '../src/letters/levels.js';
import { rng } from '../src/maze/sim.js';
import { ROUNDS } from '../src/letters/sim.js';
import { readFileSync, existsSync } from 'node:fs';
import { MIXES, allExtraSentences } from '../src/letters/extras.js';

test('25 colours, each with a name, a hex, a tier and a family; tiers are 6 + 5 + 14', () => {
  assert.equal(COLORS.length, 25);
  assert.equal(new Set(COLORS.map((c) => c.id)).size, 25);
  assert.equal(new Set(COLORS.map((c) => c.hex)).size, 25);
  assert.deepEqual([COLOR_TIERS.A.length, COLOR_TIERS.B.length, COLOR_TIERS.C.length], [6, 5, 14]);
  for (const c of COLORS) assert.ok(c.the.startsWith('ال') && c.name && c.family && c.hex >= 0 && c.hex <= 0xffffff, c.id);
  assert.ok(colorOf('gold').metal && colorOf('silver').metal);
});

test('pictures of a colour: every picture exists, belongs to one colour, and no colour is a family of one picture', () => {
  const seen = new Set();
  for (const id of THING_COLORS) {
    assert.ok(colorOf(id), id);
    assert.ok(COLOR_THINGS[id].length >= 2, `${id} needs at least two pictures`);
    for (const t of COLOR_THINGS[id]) {
      assert.ok(!seen.has(t), `${t} is listed under two colours`); seen.add(t);
      assert.ok(existsSync(new URL(`../../../assets/games/art/${t}.webp`, import.meta.url)), `${t}.webp`);
      assert.equal(colorOfThing(t), id);
    }
  }
});

test('tier counts add up to eight at every age; the youngest never get tier C, the oldest get most of it', () => {
  for (const age of [2, 3, 4, 5, 6]) {
    assert.equal(Object.values(colorTierCounts(age)).reduce((a, b) => a + b, 0), ROUNDS);
    assert.equal(colorPlan(age, ROUNDS, rng(5)).length, ROUNDS);
  }
  assert.equal(colorTierCounts(3).C, 0);
  assert.ok(colorTierCounts(6).C >= 3);
  assert.equal(thingRounds(2), 0); assert.ok(thingRounds(6) >= 2);
});

test('colour choices never put two shades of one family together', () => {
  for (let s = 1; s <= 300; s++) {
    const r = rng(s);
    const right = COLORS[s % COLORS.length];
    const ch = colorChoices(right, COLORS, 4, r);
    assert.equal(ch[0], right);
    assert.equal(ch.length, 4);
    assert.equal(new Set(ch.map((c) => c.family)).size, 4);
  }
});

test('the colours level: eight rounds, one right option, questions match, sentences are in the voice list', () => {
  const all = new Set([...allColorSentences(), ...allExtraSentences(colorOf)]);
  assert.ok(all.size >= 25 + THING_COLORS.length);
  const byThingQ = new Map(THING_COLORS.map((id) => [findThingQ(colorOf(id)), id]));
  const byColorQ = new Map(COLORS.map((c) => [findColorQ(c), c.id]));
  const kinds = new Set();
  let c6 = 0;
  for (const age of [2, 3, 4, 5, 6]) for (let s = 1; s <= 150; s++) {
    const p = new LevelPlay('colors', age, s * 6007);
    assert.equal(p.rounds.length, ROUNDS);
    for (const r of p.rounds) {
      assert.ok(all.has(r.prompt), `unknown sentence ${r.prompt}`);
      assert.equal(r.options.filter((o) => o.id === r.answer).length, 1);
      assert.equal(new Set(r.options.map((o) => o.id)).size, r.options.length);
      if (r.prompt.startsWith('لو خلطنا')) {
        kinds.add('mix');
        assert.ok(age >= 5, 'mixing from age five');
        assert.ok(MIXES.some((m) => m[2] === r.answer), 'the answer is what the mix makes');
        assert.ok(r.reward && all.has(r.reward));
      } else if (byColorQ.has(r.prompt)) {
        kinds.add('color');
        assert.equal(r.answer, byColorQ.get(r.prompt));
        assert.ok(r.options.every((o) => o.kind === 'color' && Number.isInteger(o.hex)));
        const fams = r.options.map((o) => colorOf(o.id).family);
        assert.equal(new Set(fams).size, fams.length, 'two shades of one family');
        if (age <= 3) assert.notEqual(colorOf(r.answer).tier, 'C');
        if (age === 6 && colorOf(r.answer).tier === 'C') c6++;
      } else {
        kinds.add('thing');
        assert.ok(age >= 3, 'no picture questions at two');
        const cid = byThingQ.get(r.prompt);
        assert.equal(colorOfThing(r.answer), cid);
        for (const o of r.options) if (o.id !== r.answer) assert.notEqual(colorOfThing(o.id), cid);
      }
    }
  }
  assert.deepEqual([...kinds].filter((k) => k !== 'mix').sort(), ['color', 'thing']);
  assert.ok(c6 > 100, 'age six meets the new colours often');
});

test('every colour sentence has a recorded clip', () => {
  const lines = JSON.parse(readFileSync(new URL('../../../assets/games/learn_voice/lines.json', import.meta.url), 'utf8'));
  const have = new Set(lines.filter((l) => l.lang === 'ar').map((l) => l.text));
  for (const q of allColorSentences()) assert.ok(have.has(q), `not in the voice list: ${q}`);
});
