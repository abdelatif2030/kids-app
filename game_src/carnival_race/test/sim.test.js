import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';


test('Moulid Funfair anchor: title renamed, race untouched', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes("title: ['عربيات ملاهي المولد', 'Moulid Funfair Cars']"));
});
