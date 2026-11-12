import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// MANDATORY (owner 2026-11-12): every Arabic sentence the games speak is voiced from a fully vowelled reading.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const lines = JSON.parse(readFileSync(join(ROOT, 'assets', 'games', 'learn_voice', 'lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
const T = JSON.parse(readFileSync(join(ROOT, 'tools', 'game_voice', 'tashkeel.json'), 'utf8'));
const MARK = /[ً-ْ]/;
const STRIP = /[ً-ْـٰ]/g;
// the voice may read a slightly different spelling than the screen shows (owner's choices)
const SPELLING = new Set(['خلصتها تاني! برافو عليكي', 'حداشر', 'فين رقم حداشر؟', 'شاطره أوي!', 'شاطره أوي! خدتي نجمة جديدة!', 'لقيتي الكنز! شاطره']);

test('every spoken Arabic sentence has a diacritized reading', () => {
  const missing = lines.filter((l) => !T[l.text]).map((l) => l.text);
  assert.deepEqual(missing, []);
});
test('every word of every reading carries vowel marks (fatha, damma, kasra, sukun or shadda)', () => {
  const bare = [];
  for (const l of lines) for (const w of (T[l.text] || '').split(/[^ء-يً-ْٰ]+/).filter(Boolean)) if (!MARK.test(w)) bare.push(`${l.text} → ${w}`);
  assert.deepEqual(bare, []);
});
test('the reading is the same sentence as the text (only vowel marks added)', () => {
  const diff = lines.filter((l) => !SPELLING.has(l.text) && T[l.text] && T[l.text].replace(STRIP, '') !== l.text.replace(STRIP, '')).map((l) => l.text);
  assert.deepEqual(diff, []);
});
