import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeSave, totalStars, starRow, LEVELS } from '../src/world/main.js';

test('six levels, all open: dress, salon, pet, cupcake, garden and the big party', () => { assert.deepEqual(LEVELS.map((l) => l.id), ['dress', 'salon', 'pet', 'cupcake', 'garden', 'party']); });
test('saves are cleaned: damaged data becomes a clean start, stars are never negative or huge', () => {
  assert.equal(totalStars(normalizeSave(null)), 0);
  assert.equal(totalStars(normalizeSave('junk')), 0);
  const s = normalizeSave({ stars: { dress: 3, salon: -5, pet: 'x', cupcake: 99999, garden: 2.9 }, muted: 1 });
  assert.deepEqual(s.stars, { dress: 3, salon: 0, pet: 0, cupcake: 999, garden: 2, party: 0 }); assert.equal(s.muted, true);
});
test('the star row shows at most three', () => { assert.equal(starRow(0), '☆☆☆'); assert.equal(starRow(2), '⭐⭐☆'); assert.equal(starRow(9), '⭐⭐⭐'); });
