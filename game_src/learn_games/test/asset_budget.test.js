import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Speed budget (2026-11-18): the game must stay light on a phone. Pictures were recompressed (158 MB -> 36 MB); this keeps them small.
const GAMES = new URL('../../../assets/games/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const sizes = (dir) => readdirSync(dir).filter((f) => f.endsWith('.webp')).map((f) => [f, statSync(join(dir, f)).size]);

test('no picture of the game is larger than 300 KB', () => {
  const big = sizes(join(GAMES, 'art')).filter(([, s]) => s > 300 * 1024);
  assert.deepEqual(big.map(([f, s]) => `${f} ${Math.round(s / 1024)}KB`), []);
});

test('character clips are under 1 MB each and the art folder under 60 MB', () => {
  const big = sizes(join(GAMES, 'clips')).filter(([, s]) => s > 1024 * 1024);
  assert.deepEqual(big.map(([f]) => f), []);
  const total = sizes(join(GAMES, 'art')).reduce((a, [, s]) => a + s, 0);
  assert.ok(total < 60 * 1024 * 1024, `art is ${Math.round(total / 1048576)} MB`);
});

test('the letters game bundle stays under 1.6 MB (minified)', () => {
  assert.ok(statSync(join(GAMES, 'learn_letters', 'game.js')).size < 1.6 * 1024 * 1024);
});
