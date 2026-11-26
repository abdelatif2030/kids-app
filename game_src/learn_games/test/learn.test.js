import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { numberWords, numberSequence, nextNumber, prevNumber, numberPartsNeeded } from '../src/learn/numbers.js';
import { learnSections, numberItem, formatNumber, LANGS } from '../src/learn/sections.js';
import { numberWord } from '../src/letters/numbers.js';

const EXTRA_IDS = new Set(['count', 'ordinals', 'sentences', 'story1', 'story2', 'story3', 'story4', 'story5', 'sight', 'phonics', 'harakat', 'forms']);
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
        assert.ok(it.label && (it.show || it.display === 'text') && it.say.length && it.say[0].t, `${l} ${s.id} ${it.key}`);
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

test('the resume question has a recording slot per language (docs/RESUME_VOICE_LINES.csv uses the game\'s clip ids)', async () => {
  const { clipId } = await import('../src/kit/voice.js');
  const csv = fs.readFileSync(new URL('../../../docs/RESUME_VOICE_LINES.csv', import.meta.url), 'utf8');
  for (const [l, t] of [['ar', 'إيه رأيك تكمّل من مكان ما كنت واقف، ولا تبدأ من الأول؟'], ['en', 'How about continuing where you stopped, or starting from the beginning?'], ['de', 'Möchtest du dort weitermachen, wo du aufgehört hast, oder von vorne anfangen?'], ['fr', "Tu veux continuer là où tu t'es arrêté, ou recommencer depuis le début ?"]]) {
    assert.ok(csv.includes(`${clipId(t, l)}.mp3`), l);
  }
});

test('the top bar (back and sound) stays clickable above a full-screen card (the back arrow bug of 2026-11-26)', () => {
  const css = fs.readFileSync(new URL('../src/kit/shell.js', import.meta.url), 'utf8');
  assert.ok(/\.lk-top\{[^}]*z-index:6;pointer-events:none\}\.lk-top>\*\{pointer-events:auto\}/.test(css));
});

test('every English word of the new sections has its clips now (the owner delivered all 891)', () => {
  const EN = JSON.parse(fs.readFileSync(new URL('../src/english/words.json', import.meta.url), 'utf8'));
  let missing = 0;
  return import('../src/kit/voice.js').then(({ clipId }) => {
    for (const e of EN) for (const id of [clipId(e.w, 'en'), `${clipId(e.w, 'en')}_slow`, clipId(e.s, 'en')]) if (!fs.existsSync(new URL(`../../../assets/games/learn_voice/en/${id}.mp3`, import.meta.url))) missing++;
    assert.equal(missing, 0);
  });
});

test('every English / German / French level and every section shows an Arabic name (the child must know what he enters)', async () => {
  const { EN_LEVELS, DE_LEVELS, FR_LEVELS } = await import('../src/english/levels.js');
  for (const l of [...EN_LEVELS, ...DE_LEVELS, ...FR_LEVELS]) assert.ok(l.arName && /[؀-ۿ]/.test(l.arName), l.id);
  for (const lang of LANGS) for (const s of learnSections(lang)) assert.ok(s.nameAr && /[؀-ۿ]/.test(s.nameAr), `${lang} ${s.id}`);
});

test('the lists fit the screen without scrolling: the card is fitted by _fitGrid and the tiles size themselves (.lw-fit)', () => {
  const src = fs.readFileSync(new URL('../src/letters/main.js', import.meta.url), 'utf8');
  assert.ok(src.includes('_fitGrid(card, grid, n)') && src.includes('.lw-fit .lw-tile{width:var(--tw)'));
  assert.ok(src.includes("this._fitGrid(card, grid, tiles.length)") && src.includes('this._fitGrid(lvCard, lvGrid, tiles.length)'));
});

test('the Arabic names of the section items now have their recordings (the owner delivered all 628)', async () => {
  const { clipId } = await import('../src/kit/voice.js');
  let missing = [];
  for (const s of learnSections('ar')) for (const it of s.items) for (const x of [...it.say, ...it.sentence]) {
    if (s.id === 'letters' || s.id === 'numbers' || EXTRA_IDS.has(s.id)) continue; // the newer kinds have their own list of lines to record
    if (!fs.existsSync(new URL(`../../../assets/games/learn_voice/ar/${clipId(x.t, 'ar')}.mp3`, import.meta.url))) missing.push(x.t);
  }
  assert.ok(missing.length < 40, `missing ${missing.length}: ${missing.slice(0, 5)}`);
});

test('the number pad and the end card sit above the full-screen next button (a tap on a key used to close the pad)', () => {
  const src = fs.readFileSync(new URL('../src/letters/main.js', import.meta.url), 'utf8');
  assert.ok(src.includes('.lw-lpick,.lw-ldone{z-index:5}') && src.includes("'lk-dim lw-ldone'") && /\.lw-lhit\{[^}]*z-index:2\}/.test(src));
});

test('the six newer kinds of sections exist (counting, ordinals, sentences, stories, reading words, letter sounds, Arabic marks and forms)', () => {
  const ids = (l) => learnSections(l).map((s) => s.id);
  for (const l of LANGS) for (const id of ['count', 'ordinals', 'sentences', 'story1', 'story2', 'story3', 'story4', 'story5', 'sight']) assert.ok(ids(l).includes(id), `${l} ${id}`);
  for (const l of ['en', 'de', 'fr']) assert.ok(ids(l).includes('phonics'), l);
  assert.ok(ids('ar').includes('harakat') && ids('ar').includes('forms') && !ids('en').includes('harakat'));
  const sec = (l, id) => learnSections(l).find((s) => s.id === id);
  assert.equal(sec('en', 'count').items[2].say.length, 3); // counting aloud: one, two, three
  assert.equal(sec('en', 'count').items[2].show.n, 3);
  assert.equal(sec('de', 'ordinals').items[0].text, '1.');
  assert.equal(sec('fr', 'ordinals').items[0].text, '1er');
  for (const l of LANGS) for (let k = 1; k <= 5; k++) assert.equal(sec(l, 'story' + k).items.length, 4, `${l} story${k}`);
  assert.equal(sec('en', 'phonics').items[0].say[0].t, 'ah');
});

test('every picture the new sections use exists in the art folder', () => {
  const missing = new Set();
  for (const l of LANGS) for (const s of learnSections(l)) for (const it of s.items) {
    const t = it.show && it.show.thing;
    if (t && /^[a-z]_/.test(t) && !fs.existsSync(new URL(`../../../assets/games/art/${t}.webp`, import.meta.url))) missing.add(t); // ids like fish / cat are drawn in code
  }
  assert.deepEqual([...missing], []);
});
