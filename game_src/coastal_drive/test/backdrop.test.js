import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('the flat hill wall is hidden once the painted ring is loaded (it stood in front of the far cars and hid them)', () => {
  const s = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  const i = s.indexOf('_setPano(i) {');
  assert.ok(s.slice(i, i + 900).includes('this.backdrop.visible = false'));
});
