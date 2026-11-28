import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeLevel, solve, topFirst, Game, normalizeSave, LEVELS, CHAPTERS, CHAPTER_SIZE, chapterOf, TRAY_CAP, COMBO_TIME, levelParams } from '../src/sim.js';

/** A tiny hand-made level: items in a row, no overlaps, given kinds. */
function row(kinds) {
  const items = kinds.map((k, i) => ({ id: i, x: 10 + i * 8, y: 50, layer: 0, kind: k }));
  return { n: 1, size: 14, items, over: items.map(() => []) };
}

test('every level 1-30+ is generated with triples and is solvable with the 7-slot tray', () => {
  for (let n = 1; n <= LEVELS; n++) {
    const lv = makeLevel(n);
    const p = levelParams(n);
    assert.equal(lv.items.length, p.triples * 3);
    const counts = new Map();
    for (const i of lv.items) counts.set(i.kind, (counts.get(i.kind) || 0) + 1);
    for (const c of counts.values()) assert.equal(c % 3, 0, `level ${n}: kinds come in threes`);
    const path = solve(lv);
    assert.ok(path, `level ${n} must be solvable`);
    assert.equal(path.length, lv.items.length);
    // replay the solution through the real game rules
    const g = new Game(lv); g.bonus = -1e9; // no wand: replay the pure solution
    for (const id of path) { assert.ok(g.isFree(id)); g.tap(id); }
    assert.equal(g.state, 'won', `level ${n} replay wins`);
    // and the constructive top-first order
    const g2 = new Game(lv); g2.bonus = -1e9;
    for (const id of topFirst(lv)) g2.tap(id);
    assert.equal(g2.state, 'won', `level ${n} top-first wins`);
  }
});

test('piles grow and get more kinds as levels go up', () => {
  const a = makeLevel(1); const b = makeLevel(15); const c = makeLevel(30);
  assert.ok(a.items.length < b.items.length && b.items.length < c.items.length);
  assert.ok(new Set(a.items.map((i) => i.kind)).size < new Set(c.items.map((i) => i.kind)).size);
  assert.ok(c.items.length >= 90);
});

test('the generator is deterministic per level', () => {
  assert.deepEqual(makeLevel(7), makeLevel(7));
  assert.notDeepEqual(makeLevel(7).items.map((i) => i.x), makeLevel(8).items.map((i) => i.x));
});

test('covered sweets cannot be picked, the top ones can', () => {
  const lv = makeLevel(10);
  const g = new Game(lv);
  const free = g.freeIds();
  assert.ok(free.length >= 3 && free.length < lv.items.length);
  const covered = lv.items.find((i) => !g.isFree(i.id));
  assert.ok(covered);
  const ev = g.tap(covered.id);
  assert.equal(ev[0].type, 'blocked');
  assert.equal(g.tray.length, 0);
  assert.ok(g.isFree(lv.items.length - 1), 'the topmost sweet is always free');
});

test('tray keeps equal kinds together and three of a kind vanish', () => {
  const g = new Game(row([1, 2, 1, 3, 1, 2, 2, 3, 3]));
  g.tap(0); g.tap(1); g.tap(2);
  assert.deepEqual(g.tray.map((t) => t.kind), [1, 1, 2]);
  const ev = g.tap(4);
  assert.equal(ev.find((e) => e.type === 'match').kind, 1);
  assert.deepEqual(g.tray.map((t) => t.kind), [2]);
  assert.equal(g.matches, 1);
});

test('a full tray without a match loses', () => {
  const g = new Game(row([0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6]));
  for (let i = 0; i < TRAY_CAP - 1; i++) { g.tap(i); assert.equal(g.state, 'play'); }
  const ev = g.tap(TRAY_CAP - 1);
  assert.equal(g.state, 'lost');
  assert.ok(ev.some((e) => e.type === 'lost'));
  assert.deepEqual(g.tap(8), [], 'no moves after losing');
  // an extra slot gives a way to continue
  assert.ok(g.extraSlot());
  assert.equal(g.state, 'play');
  assert.equal(g.cap, TRAY_CAP + 1);
  assert.equal(g.extraSlot(), false, 'only one extra slot');
});

test('quick matches build combos and points scale; the combo ends after a pause', () => {
  const g = new Game(row([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]));
  g.tap(0); g.tap(1); g.tap(2);
  assert.equal(g.combo, 1); assert.equal(g.score, 100);
  g.tick(1); g.tap(3); g.tap(4); g.tap(5);
  assert.equal(g.combo, 2); assert.equal(g.score, 100 + 200);
  g.tick(1); g.tap(6); g.tap(7); g.tap(8);
  assert.equal(g.combo, 3); assert.equal(g.score, 100 + 200 + 300);
  assert.equal(g.maxCombo, 3);
  g.tick(COMBO_TIME + 0.1);
  assert.equal(g.combo, 0);
  g.tap(9); g.tap(10); g.tap(11);
  assert.equal(g.combo, 1);
  assert.equal(g.state, 'won');
  assert.ok(g.stars() >= 2);
});

test('a full bonus meter casts the wand and clears a few sweets by itself', () => {
  const kinds = []; for (let k = 0; k < 8; k++) kinds.push(k, k, k);
  const g = new Game(row(kinds));
  const before = g.remaining();
  g.bonus = 95;
  g.tap(0); g.tap(1); const ev = g.tap(2);
  const wand = ev.find((e) => e.type === 'wand');
  assert.ok(wand);
  assert.equal(wand.ids.length, 3);
  assert.equal(g.bonus, 0);
  assert.equal(g.remaining(), before - 3 - 3);
});

test('undo (once), shuffle (limited) and helpers refill with a new game', () => {
  const lv = makeLevel(6);
  const g = new Game(lv);
  assert.equal(g.canUndo(), false);
  const id = g.freeIds()[0];
  g.tap(id);
  assert.equal(g.tray.length, 1);
  assert.ok(g.undo());
  assert.equal(g.tray.length, 0);
  assert.equal(g.alive[id], 1);
  assert.equal(g.canUndo(), false);
  const kinds = lv.items.map((i) => i.kind).sort().join();
  assert.ok(g.shuffle());
  assert.equal(g.items.map((i) => i.kind).sort().join(), kinds, 'counts stay the same');
  assert.ok(g.shuffle());
  assert.equal(g.shuffle(), false);
  assert.ok(solve({ items: g.items, over: g.over }), 'shuffled pile is still solvable');
  assert.equal(new Game(lv).helpers.shuffle, 2);
});

test('stars: one for winning, more for combos without helpers', () => {
  const g = new Game(row([1, 1, 1]));
  g.tap(0); g.tap(1); g.tap(2);
  assert.equal(g.state, 'won'); assert.equal(g.stars(), 1);
});

test('damaged saves load safely and progress is clamped', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, muted: false });
  const s = normalizeSave({ unlocked: 'x', stars: { 3: 9, 99: 2, a: 1, 4: -2 }, muted: 1 });
  assert.equal(s.stars[3], 3); assert.equal(s.stars[4], 1); assert.equal(s.stars[99], undefined);
  assert.equal(s.unlocked, 5);
  assert.equal(normalizeSave({ unlocked: 500 }).unlocked, LEVELS);
});

import fs from 'node:fs';

test('Kunafa Tray anchor: title renamed; the full-tray state stays recoverable', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("title: ['صينية الكنافة', 'Kunafa Tray']"));
  const sim = fs.readFileSync(new URL('../src/sim.js', import.meta.url), 'utf8');
  assert.ok(/state === 'lost' && this\.tray\.length < this\.cap\) this\.state = 'play'/.test(sim), 'lost state must be escapable with a helper');
});

test('chapters: 4 chapters x 9 trays cover levels 1-36 with no gaps or overlaps', () => {
  assert.equal(CHAPTERS.length, 4);
  assert.equal(CHAPTER_SIZE, 9);
  const seen = [];
  for (const ch of CHAPTERS) {
    assert.equal(ch.to - ch.from + 1, CHAPTER_SIZE, `chapter ${ch.id} owns 9 levels`);
    assert.ok(ch.name[0] && ch.name[1], `chapter ${ch.id} has ar+en names`);
    for (let n = ch.from; n <= ch.to; n++) seen.push(n);
  }
  assert.deepEqual(seen, Array.from({ length: LEVELS }, (_, i) => i + 1), 'chapters tile 1..LEVELS exactly');
  assert.equal(new Set(CHAPTERS.map((c) => c.board)).size, 4, 'each chapter has its own board');
  assert.deepEqual(CHAPTERS.map((c) => c.board), ['shop', 'ramadan', 'mawled', 'picnic']);
});

test('chapterOf maps the chapter boundaries correctly', () => {
  const want = [[1, 1], [9, 1], [10, 2], [18, 2], [19, 3], [27, 3], [28, 4], [36, 4]];
  for (const [n, id] of want) assert.equal(chapterOf(n).id, id, `level ${n} is chapter ${id}`);
  for (let n = 1; n <= LEVELS; n++) {
    const ch = chapterOf(n);
    assert.ok(n >= ch.from && n <= ch.to, `level ${n} inside its chapter range`);
  }
  assert.equal(chapterOf(0).id, 1, 'clamped like levelParams');
  assert.equal(chapterOf(999).id, 4, 'clamped like levelParams');
});

test('every level in every chapter is completed by the constructive top-first path', () => {
  for (const ch of CHAPTERS) {
    for (let n = ch.from; n <= ch.to; n++) {
      const lv = makeLevel(n);
      const g = new Game(lv); g.bonus = -1e9; // no wand: the pure constructive path
      for (const id of topFirst(lv)) g.tap(id);
      assert.equal(g.state, 'won', `chapter ${ch.id} level ${n} top-first wins`);
    }
  }
});

test('chapters do not change saves: an existing save opens identically', () => {
  const saved = { unlocked: 20, stars: { 1: 3, 9: 2, 18: 1, 19: 3 }, muted: true };
  assert.deepEqual(normalizeSave(saved), saved);
  assert.deepEqual(normalizeSave({ unlocked: 36, stars: {} }), { unlocked: 36, stars: {}, muted: false });
  assert.equal(normalizeSave({ unlocked: 10 }).unlocked, 10, 'mid-chapter progress is untouched');
});

test('chapter boards are wired: main switches the board per chapter, sprites draw all four', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes('chapterOf(this.n)'), 'startLevel resolves the chapter');
  assert.ok(main.includes('this.boardId = ch.board'), 'the board follows the chapter');
  assert.ok(main.includes('for (const ch of CHAPTERS)'), 'level select is grouped by chapter');
  const sprites = fs.readFileSync(new URL('../src/sprites.js', import.meta.url), 'utf8');
  for (const b of ['shop', 'ramadan', 'mawled', 'picnic']) assert.ok(sprites.includes(`'${b}'`) || b === 'shop', `board ${b} handled`);
  for (const fn of ['drawRamadan', 'drawMawled', 'drawPicnic']) assert.ok(sprites.includes(`function ${fn}`), `${fn} exists`);
});
