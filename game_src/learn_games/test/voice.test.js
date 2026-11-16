import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { clipId, spoken } from '../src/kit/voice.js';

test('the spoken words drop emoji and extra spaces', () => {
  assert.equal(spoken('  الكنز   شمال الصخرة 🦜 '), 'الكنز شمال الصخرة');
  assert.equal(spoken('نجمة جديدة ليك! ⭐'), 'نجمة جديدة ليك!');
});

test('a sentence always gets the same id; language and words change it', () => {
  assert.equal(clipId('تفاحة', 'ar'), clipId(' تفاحة ', 'ar'));
  assert.notEqual(clipId('تفاحة', 'ar'), clipId('موزة', 'ar'));
  assert.notEqual(clipId('ball', 'en'), clipId('ball', 'ar'));
  assert.match(clipId('تفاحة', 'ar'), /^[0-9a-f]{8}$/);
});

test('the list of sentences (tools/game_voice/lines.mjs) uses the same ids as the games, with no clash', () => {
  const lines = JSON.parse(readFileSync(new URL('../../../assets/games/learn_voice/lines.json', import.meta.url), 'utf8'));
  assert.ok(lines.length > 200);
  const seen = new Set();
  for (const l of lines) {
    assert.equal(l.id, clipId(l.text, l.lang), l.text);
    assert.ok(!seen.has(`${l.lang}/${l.id}`), `two sentences share ${l.id}`);
    seen.add(`${l.lang}/${l.id}`);
  }
  // sentences the games really say
  for (const [t, lang] of [['الكورة تحت الترابيزة', 'ar'], ['الكنز يمين النخلة', 'ar'], ['واحد، اتنين، تلاتة', 'ar'], ['التفاحة فاكهة!', 'ar'], ['أفطر', 'ar'], ['The ball is inside the box', 'en']]) {
    assert.ok(seen.has(`${lang}/${clipId(t, lang)}`), t);
  }
});
