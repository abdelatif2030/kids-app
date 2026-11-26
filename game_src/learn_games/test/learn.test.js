import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { numberWords, numberSequence, nextNumber, prevNumber, numberPartsNeeded } from '../src/learn/numbers.js';
import { learnSections, numberItem, formatNumber, LANGS } from '../src/learn/sections.js';
import { numberWord } from '../src/letters/numbers.js';

const T = (n, l) => numberWords(n, l).text;

test('number words: spot checks in the four languages', () => {
  assert.equal(T(21, 'en'), 'twenty one');
  assert.equal(T(123, 'en'), 'one hundred twenty three');
  assert.equal(T(100000, 'en'), 'one hundred thousand');
  assert.equal(T(21, 'de'), 'einundzwanzig');
  assert.equal(T(1000, 'de'), 'tausend');
  assert.equal(T(2000, 'de'), 'zweitausend');
  assert.equal(T(100000, 'de'), 'hunderttausend');
  assert.equal(T(71, 'fr'), 'soixante et onze');
  assert.equal(T(80, 'fr'), 'quatre-vingts');
  assert.equal(T(81, 'fr'), 'quatre-vingt-un');
  assert.equal(T(99, 'fr'), 'quatre-vingt-dix-neuf');
  assert.equal(T(200, 'fr'), 'deux cents');
  assert.equal(T(100000, 'fr'), 'cent mille');
  assert.equal(T(2000, 'ar'), 'ألفين');
  assert.equal(T(100000, 'ar'), 'مية ألف');
  assert.equal(T(300, 'ar'), 'تلتمية');
});

test('the Arabic number words up to 100 are exactly the ones the Arabic world already has (so their recordings play)', () => {
  for (let n = 0; n <= 100; n++) assert.equal(T(n, 'ar'), numberWord(n), String(n));
});

test('every number 0..100000 has words in every language (no holes, no undefined)', () => {
  for (const l of LANGS) for (let n = 0; n <= 100000; n += n < 1200 ? 1 : 137) {
    const w = numberWords(n, l);
    assert.ok(w.parts.length > 0 && w.text && !/undefined|NaN/.test(w.text), `${l} ${n}`);
  }
});

test('the walk: every number to 100, then hundreds, thousands, ten thousands; next/previous agree', () => {
  const seq = numberSequence(100000);
  assert.equal(seq.length, 101 + 9 + 9 + 9);
  assert.equal(seq[0], 0); assert.equal(seq.at(-1), 100000);
  for (let i = 0; i < seq.length - 1; i++) { assert.equal(nextNumber(seq[i]), seq[i + 1], `next ${seq[i]}`); assert.equal(prevNumber(seq[i + 1]), seq[i], `prev ${seq[i + 1]}`); }
  assert.equal(nextNumber(100000), null);
  assert.equal(nextNumber(150), 200);
  assert.equal(nextNumber(2500), 3000);
});

test('the small words a recorded voice needs are few (about 30-75 per language)', () => {
  for (const l of LANGS) { const n = numberPartsNeeded(l, 100000).length; assert.ok(n >= 20 && n <= 90, `${l} ${n}`); }
});

test('number signs: separators and Arabic digits', () => {
  assert.equal(formatNumber(100000, 'en'), '100,000');
  assert.equal(formatNumber(100000, 'de'), '100.000');
  assert.equal(formatNumber(12345, 'ar'), '١٢٬٣٤٥');
  assert.equal(numberItem(7, 'fr').say[0].t, 'sept');
});

test('sections: every language has the big ones, every item is complete and has something to say', () => {
  for (const l of LANGS) {
    const secs = learnSections(l);
    const ids = secs.map((s) => s.id);
    for (const id of ['letters', 'numbers', 'animals', 'birds', 'sea', 'colours']) assert.ok(ids.includes(id), `${l} ${id}`);
    for (const s of secs) {
      assert.ok(s.items.length >= 4, `${l} ${s.id}`);
      const keys = new Set();
      for (const it of s.items) {
        assert.ok(it.label && it.show && it.say.length && it.say[0].t, `${l} ${s.id} ${it.key}`);
        assert.ok(!keys.has(it.key), `duplicate ${it.key}`); keys.add(it.key);
      }
    }
  }
});

test('Arabic has 28 letters in the alphabet order and the English alphabet has 26', () => {
  const ar = learnSections('ar').find((s) => s.id === 'letters').items;
  assert.equal(ar.length, 28);
  assert.equal(ar[0].show.ch, 'أ'); assert.equal(ar[1].show.ch, 'ب'); assert.equal(ar.at(-1).show.ch, 'ي');
  const en = learnSections('en').find((s) => s.id === 'letters').items;
  assert.equal(en.length, 26);
  assert.equal(learnSections('de').find((s) => s.id === 'letters').items.length, 30);
});

test('pictures of the new sections exist (bundled x_ pictures)', () => {
  for (const l of LANGS) for (const s of learnSections(l)) for (const it of s.items) {
    const t = it.show && it.show.thing;
    if (t && t.startsWith('x_')) assert.ok(fs.existsSync(new URL(`../../../assets/games/art/${t}.webp`, import.meta.url)), t);
  }
});
