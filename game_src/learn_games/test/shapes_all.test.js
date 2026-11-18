import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { BIG_Q, SMALL_Q, SHAPES_ALL, SHAPE_TIERS, COLORABLE, SHAPE_COLORS, shapeTierCounts, shapePlan, findShapeQ, shapeSay, sidesQ, shapeWithSides, SIDES_ASKED, allShapeSentences, colourRounds, sidesRounds } from '../src/letters/shapes_all.js';
import { LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { rng } from '../src/maze/sim.js';
import { ROUNDS } from '../src/letters/sim.js';

test('20 shapes: tiers 3 + 4 + 8 + 5, unique ids, art pictures exist, sides only where they are certain', () => {
  assert.equal(SHAPES_ALL.length, 20);
  assert.equal(new Set(SHAPES_ALL.map((s) => s.id)).size, 20);
  assert.deepEqual(['A', 'B', 'C', 'D'].map((t) => SHAPE_TIERS[t].length), [3, 4, 8, 5]);
  for (const s of SHAPES_ALL) {
    assert.ok(s.the && s.ar && ['code', 'art'].includes(s.render));
    if (s.render === 'art') assert.ok(existsSync(new URL(`../../../assets/games/art/${s.art}.webp`, import.meta.url)), s.art);
  }
  assert.ok(COLORABLE.length >= 9);
  for (const n of SIDES_ASKED) assert.equal(SHAPES_ALL.filter((s) => s.sides === n).length, 1, `${n} sides must belong to one shape`);
  assert.equal(shapeWithSides(3).id, 'triangle');
  assert.equal(shapeWithSides(4), undefined);
});

test('Egyptian sentences with the right gender', () => {
  const by = (id) => SHAPES_ALL.find((s) => s.id === id);
  assert.equal(findShapeQ(by('circle')), 'فين الدايرة؟');
  assert.equal(findShapeQ(by('circle'), SHAPE_COLORS[0]), 'فين الدايرة الحمرا؟');
  assert.equal(findShapeQ(by('square'), SHAPE_COLORS[0]), 'فين المربع الأحمر؟');
  assert.equal(shapeSay(by('triangle')), 'ده مثلث');
  assert.equal(shapeSay(by('star'), SHAPE_COLORS[1]), 'دي نجمة زرقا');
  assert.equal(sidesQ(3), 'فين الشكل اللي له تلات أضلاع؟');
  assert.ok(allShapeSentences().length > 100);
  assert.equal(new Set(allShapeSentences()).size, allShapeSentences().length);
});

test('plans: eight rounds at every age, youngest only tiers A/B and no colour or sides, oldest meet solids', () => {
  for (const age of [2, 3, 4, 5, 6]) {
    assert.equal(Object.values(shapeTierCounts(age)).reduce((a, b) => a + b, 0), ROUNDS);
    assert.equal(shapePlan(age, ROUNDS, rng(4)).length, ROUNDS);
  }
  assert.equal(colourRounds(3), 0); assert.equal(sidesRounds(4), 0); assert.ok(sidesRounds(6) >= 1);
  assert.equal(shapeTierCounts(3).C + shapeTierCounts(3).D, 0);
  assert.ok(shapeTierCounts(6).D >= 2);
});

test('the shapes level: one right option, unique options, answers match the question, sentences are known', () => {
  const known = new Set(allShapeSentences());
  const kinds = new Set();
  for (const age of [2, 3, 4, 5, 6]) for (let s = 1; s <= 150; s++) {
    let hardForYoungest = 0;
    const p = new LevelPlay('shapes', age, s * 7919);
    assert.equal(p.rounds.length, ROUNDS);
    for (const r of p.rounds) {
      assert.ok(known.has(r.prompt), `unknown question ${r.prompt}`);
      assert.ok(known.has(r.reward), `unknown sentence ${r.reward}`);
      assert.equal(r.options.filter((o) => o.id === r.answer).length, 1);
      assert.equal(new Set(r.options.map((o) => o.id)).size, r.options.length);
      for (const o of r.options) assert.ok(o.kind === 'shape' ? COLORABLE.some((c) => c.id === o.shape) && SHAPE_COLORS.some((c) => c.id === o.color) : o.kind === 'thing' && o.thing.startsWith('g_'));
      if (r.prompt === BIG_Q || r.prompt === SMALL_Q) {
        kinds.add('size');
        assert.ok(age >= 3, 'no size question at two');
        const sc = r.options.map((o) => o.scale);
        assert.ok(sc.every((z) => z > 0 && z <= 1) && new Set(sc).size === sc.length);
        const right = r.options.find((o) => o.id === r.answer);
        assert.equal(right.scale, r.prompt === BIG_Q ? Math.max(...sc) : Math.min(...sc));
        assert.equal(new Set(r.options.map((o) => `${o.shape}-${o.color}`)).size, 1, 'one shape, one colour, only the size differs');
      } else if (/أضلاع/.test(r.prompt)) {
        kinds.add('sides');
        const n = SIDES_ASKED.find((x) => r.prompt === sidesQ(x));
        assert.equal(r.answer, shapeWithSides(n).id);
        for (const o of r.options) if (o.id !== r.answer) assert.notEqual(SHAPES_ALL.find((x) => x.id === o.id).sides, n);
        assert.ok(age >= 5);
      } else if (r.answer.includes('-')) {
        kinds.add('colour');
        const [shape, color] = r.answer.split('-');
        assert.equal(r.prompt, findShapeQ(SHAPES_ALL.find((x) => x.id === shape), SHAPE_COLORS.find((c) => c.id === color)));
        assert.ok(age >= 4);
        assert.ok(r.options.some((o) => o.shape === shape && o.color !== color), 'same shape, other colour');
        assert.ok(r.options.some((o) => o.color === color && o.shape !== shape), 'same colour, other shape');
        assert.equal(r.options.filter((o) => o.shape === shape && o.color === color).length, 1);
      } else {
        kinds.add('name');
        assert.equal(r.prompt, findShapeQ(SHAPES_ALL.find((x) => x.id === r.answer)));
        if (age <= 3 && !['A', 'B'].includes(SHAPES_ALL.find((x) => x.id === r.answer).tier)) hardForYoungest++;
      }
    }
    assert.ok(hardForYoungest <= 1, 'a toddler gets at most one shape from the harder tiers (there are only seven easy ones)');
  }
  assert.deepEqual([...kinds].sort(), ['colour', 'name', 'sides', 'size']);
});

test('all 20 shapes can come up, and a second visit shows other shapes first', () => {
  const seen = new Set();
  for (let s = 1; s <= 400; s++) for (const r of new LevelPlay('shapes', 6, s * 31).rounds) seen.add(r.key);
  assert.equal(seen.size, 20);
  const mem = new FreshMemory(null, 2900);
  const run = (seed) => { mem.begin('shapes'); const ks = new LevelPlay('shapes', 6, seed, mem).rounds.map((r) => r.key); ks.forEach((k) => mem.note(k)); return ks; };
  const a = run(1), b = run(2);
  assert.ok(a.filter((k) => b.includes(k)).length <= 2);
});
