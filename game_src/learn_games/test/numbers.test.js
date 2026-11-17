import { test } from 'node:test';
import assert from 'node:assert/strict';
import { numberWord, TIERS, COUNT_TIERS, tierCounts, countTierCounts, numberPlan, countPlan, findQ, afterQ, beforeQ, BIGGER_Q, SMALLER_Q, allNumberSentences } from '../src/letters/numbers.js';
import { NUMBERS } from '../src/kit/words.js';
import { LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { rng } from '../src/maze/sim.js';
import { ROUNDS } from '../src/letters/sim.js';

test('every number 0-100 has its own Egyptian word, matching the words the games already say for 1-30', () => {
  const words = Array.from({ length: 101 }, (_, n) => numberWord(n));
  assert.equal(new Set(words).size, 101);
  NUMBERS.forEach(([ar], i) => assert.equal(numberWord(i + 1), ar, `number ${i + 1}`));
  assert.equal(numberWord(0), 'صفر'); assert.equal(numberWord(21), 'واحد وعشرين'); assert.equal(numberWord(57), 'سبعة وخمسين');
  assert.equal(numberWord(90), 'تسعين'); assert.equal(numberWord(100), 'مية');
  assert.throws(() => numberWord(101)); assert.throws(() => numberWord(-1)); assert.throws(() => numberWord(2.5));
});

test('the four tiers cover 0-100 exactly once', () => {
  const all = Object.values(TIERS).flat().sort((a, b) => a - b);
  assert.deepEqual(all, Array.from({ length: 101 }, (_, i) => i));
  assert.deepEqual(Object.values(COUNT_TIERS).flat(), Array.from({ length: 20 }, (_, i) => i + 1));
});

test('age picks what comes first but never closes anything: tier counts add up to eight at every age', () => {
  for (const age of [2, 3, 4, 5, 6]) {
    assert.equal(Object.values(tierCounts(age)).reduce((a, b) => a + b, 0), ROUNDS);
    assert.equal(Object.values(countTierCounts(age)).reduce((a, b) => a + b, 0), ROUNDS);
    assert.equal(numberPlan(age, ROUNDS, rng(3)).length, ROUNDS);
    assert.equal(countPlan(age, ROUNDS, rng(3)).length, ROUNDS);
  }
  assert.ok(tierCounts(2).A >= 6 && tierCounts(6).D >= 2); // the youngest start easy, the oldest meet big numbers
});

test('the numbers level: one right option, unique options, asked sentence exists, questions are right', () => {
  const all = new Set(allNumberSentences());
  assert.equal(all.size, 101 + 20 + 20 + 2);
  const after = new Map(Array.from({ length: 20 }, (_, n) => [afterQ(n), n]));
  const before = new Map(Array.from({ length: 20 }, (_, i) => [beforeQ(i + 1), i + 1]));
  const seen = new Set();
  for (const age of [2, 3, 4, 5, 6]) for (let s = 1; s <= 120; s++) {
    const p = new LevelPlay('numbers', age, s * 7919);
    assert.equal(p.rounds.length, ROUNDS);
    for (const r of p.rounds) {
      assert.ok(all.has(r.prompt), `unknown sentence ${r.prompt}`);
      assert.equal(r.options.filter((o) => o.id === r.answer).length, 1);
      assert.equal(new Set(r.options.map((o) => o.n)).size, r.options.length);
      const nums = r.options.map((o) => o.n);
      assert.ok(nums.every((n) => n >= 0 && n <= 100));
      const ans = Number(r.answer.slice(1));
      if (after.has(r.prompt)) { seen.add('after'); assert.equal(ans, after.get(r.prompt) + 1); }
      else if (before.has(r.prompt)) { seen.add('before'); assert.equal(ans, before.get(r.prompt) - 1); }
      else if (r.prompt === BIGGER_Q) { seen.add('bigger'); assert.equal(ans, Math.max(...nums)); }
      else if (r.prompt === SMALLER_Q) { seen.add('smaller'); assert.equal(ans, Math.min(...nums)); }
      else { seen.add('find'); assert.equal(r.prompt, findQ(ans)); }
      if (age <= 3) assert.ok(ans <= 20, 'the youngest start inside 0-20');
    }
  }
  assert.deepEqual([...seen].sort(), ['after', 'before', 'bigger', 'find', 'smaller']);
});

test('the oldest meet numbers above twenty, the youngest do not; all of 0-100 can come up', () => {
  const big = new Set();
  for (let s = 1; s <= 300; s++) for (const r of new LevelPlay('numbers', 6, s * 31).rounds) if (r.prompt.startsWith('فين رقم')) big.add(Number(r.answer.slice(1)));
  assert.ok([...big].some((n) => n > 20));
  assert.ok([...big].some((n) => n === 100) && [...big].some((n) => n === 0));
  for (let s = 1; s <= 100; s++) for (const r of new LevelPlay('numbers', 2, s).rounds) assert.ok(Number(r.answer.slice(1)) <= 20);
});

test('counting: 1-20 at any age, three options, the answer among them', () => {
  const ns = new Set();
  for (const age of [2, 4, 5, 6]) for (let s = 1; s <= 80; s++) {
    for (const r of new LevelPlay('counting', age, s * 13).rounds) {
      assert.ok(r.n >= 1 && r.n <= 20); assert.equal(r.options.length, 3);
      assert.ok(r.options.some((o) => o.id === r.answer));
      if (age === 6) ns.add(r.n);
      if (age <= 3) assert.ok(r.n <= 10);
    }
  }
  assert.ok([...ns].some((n) => n > 10));
});

test('fresh numbers: a second visit shows other numbers first', () => {
  const mem = new FreshMemory(null, 2900);
  const run = (seed) => { mem.begin('numbers'); const p = new LevelPlay('numbers', 6, seed, mem); const ks = p.rounds.map((r) => r.key); ks.forEach((k) => mem.note(k)); return ks; };
  const a = run(1), b = run(2);
  const overlap = a.filter((k) => b.includes(k)).length;
  assert.ok(overlap <= 3, `overlap ${overlap}`);
});
