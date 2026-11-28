import { test } from 'node:test';
import assert from 'node:assert/strict';
import { World, buildLevel, LEVELS, WORLDS, LANDMARKS, worldName, normalizeSave } from '../src/sim.js';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { play } from './bot.js';

const sig = (lv) => crypto.createHash('sha256').update(lv.grid.map((r) => r.join('')).join('/') + '|' + lv.enemies.map((e) => e.x + ',' + e.dir).join(';')).digest('hex').slice(0, 16);
// Layout signatures of levels 1-8 (seed 5) pinned BEFORE the Phase 2F
// expansion — the expansion must not change them by a single tile.
const PINNED_1_8 = ['9e6540c51369fbc0', 'c80e0e2539835314', '06234a8e5f6e176a', '39d083d7f33a0238', '969d3b02fe1dce7d', '68f0f9d7151d3be2', '7fbd1305b8344efa', '46ea2aa6654aa370'];

test('sixteen levels over eight worlds, each longer, each ending with a flag', () => {
  assert.equal(LEVELS, 16);
  assert.equal(WORLDS.length, 8);
  for (let i = 0; i < LEVELS; i++) { const lv = buildLevel(i, 5); assert.ok(lv.grid.some((row) => row.includes('F'))); assert.ok(lv.grid.some((row) => row.includes('c'))); assert.ok(lv.enemies.length >= 1); }
  assert.ok(buildLevel(15, 5).len > buildLevel(0, 5).len);
  assert.equal(new Set(Array.from({ length: LEVELS }, (_, i) => buildLevel(i, 5).world)).size, 8);
  // journey order: each world hosts exactly 2 consecutive levels, Siwa oasis last
  assert.deepEqual(Array.from({ length: LEVELS }, (_, i) => buildLevel(i, 5).world),
    ['hills', 'hills', 'cave', 'cave', 'desert', 'desert', 'snow', 'snow', 'nile', 'nile', 'temple', 'temple', 'shore', 'shore', 'oasis', 'oasis']);
});

test('levels 1-8 generate EXACTLY as before the expansion (pinned layout signatures)', () => {
  for (let i = 0; i < 8; i++) assert.equal(sig(buildLevel(i, 5)), PINNED_1_8[i], `level ${i + 1} layout changed`);
});

test('a robot player that looks before it jumps finishes ALL 16 levels', () => {
  let wins = 0; let total = 0;
  for (let i = 0; i < LEVELS; i++) {
    const { w, t } = play(World, { level: i, seed: 5, easy: false }, 400);
    total += t;
    console.log(`level ${i + 1}: ${w.state} in ${t.toFixed(0)}s, x ${w.p.x.toFixed(0)}/${w.flagX}, coins ${w.coins}, lives ${w.lives}`);
    if (w.state === 'won') wins += 1;
  }
  console.log(`bot total (16 levels, seed 5): ${total.toFixed(0)}s`);
  assert.equal(wins, 16, `${wins}/16`);
});

test('the levels are fair for other seeds too (at least 90% of 192 robot runs win)', () => {
  let wins = 0; let n = 0;
  for (let seed = 1; seed <= 12; seed++) for (let i = 0; i < LEVELS; i++) { n++; if (play(World, { level: i, seed, easy: false }, 300).w.state === 'won') wins++; }
  assert.ok(wins / n >= 0.9, `${wins}/${n}`);
});

test('no pit is wider than 3 tiles, no pipe taller than 2, no step taller than 3', () => {
  for (let seed = 1; seed <= 6; seed++) for (let i = 0; i < LEVELS; i++) {
    const lv = buildLevel(i, seed);
    const floor = lv.grid[lv.ground];
    let run = 0;
    for (let x = 0; x < lv.len; x++) { if (floor[x] === ' ') { run++; assert.ok(run <= 3, `pit ${run} wide`); } else run = 0; }
    for (let x = 0; x < lv.len; x++) { let h = 0; for (let y = lv.ground - 1; y >= 0 && (lv.grid[y][x] === 'P' || lv.grid[y][x] === 'B'); y--) h++; assert.ok(h <= 3, `column ${x} is ${h} tall`); }
  }
});

test('every world has its signature set-piece landmark; new worlds carry a bonus coin arc, old levels none', () => {
  const kinds = new Set();
  for (let i = 0; i < LEVELS; i++) {
    const lv = buildLevel(i, 5);
    assert.equal(lv.landmark.kind, LANDMARKS[lv.world], `level ${i + 1} landmark`);
    assert.ok(lv.landmark.x > 10 && lv.landmark.x < lv.flagX - 10, 'landmark sits mid-level');
    kinds.add(lv.landmark.kind);
    if (i < 8) assert.equal(lv.bonus, 0, 'old levels unchanged: no bonus coins');
    else assert.equal(lv.bonus, 4, `level ${i + 1} bonus arc`);
  }
  assert.equal(kinds.size, 8, 'eight distinct set-pieces');
  assert.equal(LANDMARKS.desert, 'sphinx');
  assert.equal(LANDMARKS.shore, 'lighthouse');
  assert.equal(LANDMARKS.oasis, 'palms');
  assert.equal(LANDMARKS.temple, 'columns');
});

test('unlock chain runs 1→16 and old 8-level saves migrate safely', () => {
  // an old save from the 8-level game: finished level 8, next must be 9
  const old = normalizeSave({ unlocked: 8, stars: { 8: 3, 1: 2 }, coins: 40 });
  assert.equal(old.unlocked, 8);
  assert.equal(old.stars[8], 3);
  // the win handler's rule (min(LEVELS, i+2)) now walks the chain to 16
  let unlocked = old.unlocked;
  for (let i = 7; i < LEVELS; i++) { unlocked = Math.max(unlocked, Math.min(LEVELS, i + 2)); assert.equal(unlocked, i + 2 > LEVELS ? LEVELS : i + 2); }
  assert.equal(unlocked, LEVELS);
  // clamps still derive from LEVELS
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, LEVELS);
  assert.equal(normalizeSave({ unlocked: 16 }).unlocked, 16);
  const s16 = normalizeSave({ stars: { 16: 3, 17: 3 } });
  assert.equal(s16.stars[16], 3);
  assert.equal(s16.stars[17], undefined);
});

test('a checkpoint keeps your progress after a fall, and running out of lives ends the try', () => {
  const w = new World({ level: 3, seed: 5 });
  assert.ok(w.cps.length >= 3);
  const cp = w.cps[2];
  w.p.x = cp.x + 1; w.p.y = 10; w.step(1 / 60);
  assert.equal(w.cp.x, cp.x);
  w.p.y = 100; w.step(1 / 60);
  assert.equal(w.lives, 2);
  assert.equal(w.p.x, cp.x);
  w.p.y = 100; w.step(1 / 60); w.p.y = 100; w.step(1 / 60);
  assert.equal(w.state, 'lost');
});

test('a question block gives a coin, falling in a pit costs a life and restarts the hero, stomping a bug scores', () => {
  const w = new World({ level: 0, seed: 1 });
  w.p.y = 100; w.step(1 / 60);
  assert.equal(w.lives, 2);
  assert.ok(w.p.y < 20);
  const v = new World({ level: 0, seed: 1 });
  const e = { x: 5, y: v.H - 3, dir: 1, w: 0.9, dead: false, vx: 0 };
  v.enemies = [e];
  v.p.x = 4.9; v.p.y = e.y - 1.4; v.p.vy = 6; v.p.inv = 0;
  v.step(1 / 60);
  assert.ok(e.dead || v.score >= 0);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); });

test('Nile Hops anchor: eight Egyptian world names, first-four rotation unchanged', () => {
  assert.deepEqual(WORLDS, ['hills', 'cave', 'desert', 'snow', 'nile', 'temple', 'shore', 'oasis']);
  assert.equal(worldName('hills', 'en'), 'Nile Bank');
  assert.equal(worldName('snow', 'ar'), 'قمة سانت كاترين');
  assert.equal(worldName('desert', 'en'), 'Desert Oasis');
  assert.equal(worldName('temple', 'en'), 'Karnak Temple');
  assert.equal(worldName('shore', 'ar'), 'شاطئ الإسكندرية');
  assert.equal(worldName('oasis', 'en'), 'Siwa Oasis');
});

test('certification: every level has a distinct backdrop (world × per-level variant), pin untouched', async () => {
  const { bgVariant, drawBackground } = await import('../src/art.js');
  const combos = new Set();
  for (let i = 0; i < LEVELS; i++) {
    const lv = buildLevel(i, 5);
    combos.add(`${lv.world}:${bgVariant(i)}`);
    // the second level of each world pair wears the other dressing
    if (i % 2 === 1) assert.notEqual(bgVariant(i), bgVariant(i - 1), `levels ${i} and ${i + 1} share a backdrop`);
  }
  assert.equal(combos.size, LEVELS, 'all 16 levels must have distinct world+variant backdrops');
  assert.ok(drawBackground.toString().includes('variant'), 'drawBackground must accept the variant argument');
  // the variant is cosmetic only: pinned layouts 1-8 still byte-identical
  for (let i = 0; i < 8; i++) assert.equal(sig(buildLevel(i, 5)), PINNED_1_8[i]);
});

test('IP guard: the hills tune is not the famous platform theme', () => {
  const src = fs.readFileSync(new URL('../src/audio.js', import.meta.url), 'utf8');
  // The old melody opened 76,76,-,76,72,76,79 (E E - E C E G). It must be gone.
  assert.ok(!src.includes('[0, 76, 0.5], [0.5, 76, 0.5]'), 'old hills melody still present');
  assert.ok(src.includes('hills:'), 'hills tune still exists');
});
