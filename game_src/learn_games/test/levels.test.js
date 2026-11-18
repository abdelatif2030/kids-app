import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LETTERS, ROUNDS, fishCount, letterById } from '../src/letters/sim.js';
import { LEVELS, LevelPlay, ALPHABET, WORD_THE, HABITS, HABIT_ITEMS, CHEERS_M, CHEERS_F, levelsFor, orderPool, wordQuestion, numberQuestion, nextQuestion, firstQuestion } from '../src/letters/levels.js';

test('every letter has a word with "the" and the alphabet lists all 28 once', () => {
  assert.equal(ALPHABET.length, 28);
  assert.equal(new Set(ALPHABET).size, 28);
  for (const l of LETTERS) { assert.ok(WORD_THE[l.id], l.id); assert.ok(ALPHABET.includes(l.id)); }
  assert.equal(wordQuestion(letterById('baa')), 'فين البطة؟');
  assert.equal(numberQuestion(5), 'فين رقم خمسة؟');
  assert.equal(nextQuestion(letterById('baa')), 'إيه الحرف اللي بعد الباء؟');
  assert.equal(firstQuestion(letterById('baa')), 'إيه الحرف الأول في كلمة بطة؟');
});
test('twelve levels, every one open at every age', () => {
  assert.equal(LEVELS.length, 12);
  for (const age of [2, 3, 4, 5, 6]) assert.equal(levelsFor(age).length, 12);
});
test('every level, every age: five rounds, exactly one right option, no duplicate options', () => {
  for (const lv of LEVELS) for (const age of [4, 5, 6]) for (let s = 1; s < 40; s++) {
    const p = new LevelPlay(lv.id, age, s);
    assert.equal(p.rounds.length, ROUNDS, lv.id);
    for (const r of p.rounds) {
      assert.ok(r.prompt, lv.id);
      assert.ok(r.options.length >= 3, `${lv.id} ${age}`);
      assert.equal(new Set(r.options.map((o) => o.id)).size, r.options.length, `${lv.id} ${age} ${s}`);
      assert.equal(r.options.filter((o) => o.id === r.answer).length, 1, `${lv.id} ${age} ${s}`);
    }
  }
});
test('letters, words and first levels keep the old option counts', () => {
  for (const id of ['letters', 'words', 'first']) for (const age of [4, 5, 6]) for (const r of new LevelPlay(id, age, 3).rounds) assert.equal(r.options.length, fishCount(age));
});
test('order level: the answer is the real next letter of the alphabet', () => {
  for (let s = 1; s < 60; s++) for (const r of new LevelPlay('order', 6, s).rounds) assert.equal(ALPHABET[ALPHABET.indexOf(r.from) + 1], r.answer);
});
test('habits: Mama or Baba, one right thing among other things', () => {
  assert.ok(HABITS.every((h) => h.text && h.answer && !h.who)); // no mama/baba characters any more: our voice asks, the child chooses
  assert.ok(HABIT_ITEMS.length >= 8);
  for (let s = 1; s < 30; s++) for (const r of new LevelPlay('habits', 6, s).rounds) assert.ok(!r.who && !r.show);
});
test('shapes level asks colour only from age four; animals level pairs an animal with its food', () => {
  for (let s = 1; s < 30; s++) {
    assert.ok(!new LevelPlay('shapes', 3, s).rounds.some((r) => /الأحمر|الحمرا|الأزرق|الزرقا|الأصفر|الصفرا|الأخضر|الخضرا|البرتقالي|البنفسجي|الوردي/.test(r.prompt)));
    for (const r of new LevelPlay('animals', 6, s).rounds) { assert.ok(r.show === null || r.show.thing); assert.ok(r.reward); }
  }
});
test('encouragements: short, boy and girl lists of the same length, none says "bravo" or counts points', () => {
  assert.equal(CHEERS_M.length, CHEERS_F.length);
  for (const t of [...CHEERS_M, ...CHEERS_F]) { assert.ok(t.length <= 14, t); assert.ok(!/برافو|نقطة|نقاط/.test(t)); }
});
test('miss, hint, first try and finishing', () => {
  const p = new LevelPlay('words', 5, 3);
  const wrong = p.cur.options.find((o) => o.id !== p.cur.answer).id;
  assert.equal(p.tap(wrong).firstMiss, true);
  p.tap(wrong);
  assert.equal(p.hint, p.cur.answer);
  assert.equal(p.tap(p.cur.answer).first, false);
  let n = 1;
  while (!p.finished) { p.tap(p.cur.answer); n++; }
  assert.equal(n, ROUNDS);
});

test('inside one game no picture floods the level: every wrong choice comes from the least shown things', () => {
  for (const [id, age, bound] of [['fruits', 5, 4], ['colors', 5, 4], ['vehicles', 5, 3], ['habits', 5, 3], ['words', 6, 2], ['animals', 6, 3]]) {
    let worst = 0;
    for (let s = 1; s <= 300; s++) {
      const p = new LevelPlay(id, age, s * 104729);
      const count = new Map();
      for (const r of p.rounds) for (const o of r.options) { const k = o.thing || o.hex || o.id; count.set(k, (count.get(k) || 0) + 1); }
      worst = Math.max(worst, ...count.values());
    }
    assert.ok(worst <= bound, `${id}: one picture showed ${worst} times in one game (limit ${bound})`);
  }
});
