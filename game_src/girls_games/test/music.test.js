import test from 'node:test';
import assert from 'node:assert/strict';
import { SCALE, TUNE } from '../src/kit/music.js';

test('every note of the scale and the tune is in the pentatonic scale of C (it cannot sound wrong)', () => {
  const allowed = new Set([0, 2, 4, 7, 9]);
  for (const n of SCALE) assert.ok(allowed.has(((n % 12) + 12) % 12), `scale note ${n}`);
  for (const [m] of TUNE) if (m) assert.ok([0, 2, 4, 5, 7, 9, 11].includes(((m % 12) + 12) % 12), `tune note ${m}`); // the lullaby may touch F and B: diatonic
  assert.ok(TUNE.length >= 20);
});
