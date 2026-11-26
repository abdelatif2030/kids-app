import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { FR_LEVELS, poolOfLevel, wordKey, englishRounds } from '../src/english/levels.js';
import { clipId } from '../src/kit/voice.js';

const rnd = () => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; };

test('16 French levels with enough words', () => {
  assert.equal(FR_LEVELS.length, 16);
  for (const lv of FR_LEVELS) { assert.ok(poolOfLevel(lv).length >= 5, lv.id); assert.ok(lv.id.startsWith('fr_')); }
});

test('clip ids of the French csv match the game ids (voice pack compatible)', () => {
  const rows = fs.readFileSync(new URL('../../../docs/FRENCH_WORDLIST.csv', import.meta.url), 'utf8').replace(/^﻿/, '').trim().split('\n').slice(1);
  let n = 0;
  for (const line of rows) {
    const c = line.match(/"((?:[^"]|"")*)"/g).map((x) => x.slice(1, -1).replace(/""/g, '"'));
    assert.equal(clipId(c[3], 'fr'), c[6].replace('.mp3', ''), c[2]);
    assert.equal(clipId(c[5], 'fr'), c[8].replace('.mp3', ''), c[5]);
    n++;
  }
  assert.ok(n > 400);
});

test('every level builds 8 rounds with one right option, in French', () => {
  for (const lv of FR_LEVELS) for (const age of [3, 5]) {
    const rs = englishRounds(lv, age, rnd(), null, 3, 8);
    assert.equal(rs.length, 8);
    for (const r of rs) {
      assert.equal(r.lang, 'fr');
      assert.equal(r.options.filter((o) => o.id === r.answer).length, 1);
      assert.equal(new Set(r.options.map((o) => o.id)).size, r.options.length);
      assert.equal(r.say.find((x) => x.lang !== 'ar').lang, 'fr'); // the Arabic name (optional) may come first
      assert.equal(r.rewardSay[0].lang, 'fr');
    }
  }
});

test('French letters include the accents', () => {
  const lv = FR_LEVELS.find((l) => l.id === 'fr_letters');
  const chs = poolOfLevel(lv).map((e) => e.ch);
  for (const c of ['Éé', 'Èè', 'Çç', 'Êê']) assert.ok(chs.includes(c), c);
});
