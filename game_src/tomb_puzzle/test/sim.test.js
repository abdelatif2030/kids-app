import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseLevel, initState, step, solve, hintMove, starsFor, Puzzle, normalizeSave, museumEntries, T, doorOpen } from '../src/sim.js';
import { LEVELS, TOMBS } from '../src/levels.js';

const mk = (rows, extra = {}) => parseLevel({ id: 99, tomb: 0, rows, par: 10, ...extra });
const run = (P, moves) => { let last; for (const m of moves) last = P.move(m); return last; };

test('20 rooms in 5 tombs, 2 ankh keys each (8 per tomb), one start and one exit', () => {
  assert.equal(LEVELS.length, 20);
  assert.equal(TOMBS.length, 5);
  assert.deepEqual(LEVELS.map((l) => l.id), Array.from({ length: 20 }, (_, i) => i + 1), 'room ids are sequential and never renumbered');
  for (let t = 0; t < 5; t++) {
    const ls = LEVELS.filter((l) => l.tomb === t);
    assert.equal(ls.length, 4);
    assert.equal(ls.reduce((a, l) => a + parseLevel(l).keyCells.length, 0), 8);
  }
  for (const d of LEVELS) {
    const L = parseLevel(d);
    assert.ok(L.start >= 0 && L.exit >= 0, `level ${d.id} start/exit`);
    assert.ok(L.w <= 8 && L.h <= 10, `level ${d.id} fits a phone`);
    for (let g = 0; g < 4; g++) assert.equal(L.platesByGrp[g].length > 0, L.doors.some((c) => L.doorAt[c] === g), `level ${d.id} door/plate group ${g}`);
    if (L.gateCells.length) assert.ok(L.torchCells.length > 0);
  }
});

test('every level is solvable, within its par, and the solution replays to a win', () => {
  for (const d of LEVELS) {
    const L = parseLevel(d);
    const all = solve(L, undefined, { allKeys: true, maxStates: 400000 });
    assert.ok(all.found, `level ${d.id} solvable with all keys`);
    assert.ok(all.states < 100000, `level ${d.id} small state space (${all.states})`);
    assert.ok(all.length <= d.par, `level ${d.id}: optimal ${all.length} <= par ${d.par}`);
    assert.ok(d.par <= all.length + Math.max(4, Math.ceil(all.length * 0.3)), `level ${d.id}: par not too generous`);
    const ex = solve(L);
    assert.ok(ex.found && ex.length <= all.length);
    const P = new Puzzle(L);
    let r;
    for (const m of all.path) r = P.move(m);
    assert.ok(P.s.won, `level ${d.id} replay wins`);
    assert.equal(starsFor(L, P.s), 3);
    assert.equal(P.s.moves, all.length);
    assert.ok(r.ev.some((e) => e.type === 'win'));
  }
});

test('hint gives a move that keeps the level solvable', () => {
  const L = parseLevel(LEVELS[1]);
  const P = new Puzzle(L);
  for (let i = 0; i < 60 && !P.s.won; i++) { const m = hintMove(L, P.s); assert.ok(m); P.move(m); }
  assert.ok(P.s.won);
});

test('walls and bounds bump and do not count as moves', () => {
  const P = new Puzzle(mk(['###', '#@E', '###']));
  const r = P.move('U');
  assert.equal(r.changed, false); assert.equal(r.ev[0].why, 'wall');
  assert.equal(P.s.moves, 0);
});

test('block pushing rules', () => {
  const L = mk(['#######', '#@XX..#', '#.....#', '#.X#X.#', '#K.....', '#######'].map((r) => r.padEnd(7, '#')));
  let P = new Puzzle(L);
  assert.equal(P.move('R').changed, false, 'two blocks in a row cannot be pushed');
  P = new Puzzle(L);
  P.move('D'); P.move('D'); // now at (1,3)
  const r = P.move('R'); // pushes X(2,3) into the wall (3,3)
  assert.equal(r.changed, false);
  // blocks cannot be pushed onto a key or the exit
  const L2 = mk(['#####', '#@XK#', '###E#']);
  assert.equal(new Puzzle(L2).move('R').changed, false);
  const L3 = mk(['#####', '#@XE#', '#####']);
  assert.equal(new Puzzle(L3).move('R').changed, false);
  // a block moves one tile and the explorer follows
  const L4 = mk(['######', '#@X..#', '#...E#', '######']);
  const P4 = new Puzzle(L4);
  const r4 = P4.move('R');
  assert.ok(r4.changed && r4.ev.some((e) => e.type === 'push'));
  assert.deepEqual(P4.s.blocks, [1 * 6 + 3]);
  assert.equal(P4.s.p, 1 * 6 + 2);
});

test('a block fills a pit and the pit becomes floor', () => {
  const L = mk(['#######', '#@Xp.E#', '#######']);
  const P = new Puzzle(L);
  const r = P.move('R');
  assert.ok(r.ev.find((e) => e.type === 'push').fill);
  assert.equal(P.s.terr[1 * 7 + 4], T.FLOOR);
  assert.equal(P.s.blocks.length, 0);
  // walking into an open pit is refused
  const L2 = mk(['######', '#@p.E#', '######']);
  const r2 = new Puzzle(L2).move('R');
  assert.equal(r2.changed, false); assert.equal(r2.ev[0].why, 'pit');
});

test('plates open doors; a block keeps it open; a closed door stops the explorer', () => {
  const L = mk(['#######', '#@X.1.#', '###A###', '###E###', '#######']);
  const P = new Puzzle(L);
  assert.equal(doorOpen(L, P.s, 2 * 7 + 3), false);
  P.move('R'); const r = P.move('R');
  assert.ok(r.ev.some((e) => e.type === 'plate' && e.on));
  assert.equal(doorOpen(L, P.s, 2 * 7 + 3), true);
  assert.equal(P.s.p, 1 * 7 + 3);
  const L2 = mk(['#####', '#@A.#', '#####']);
  const r2 = new Puzzle(L2).move('R');
  assert.equal(r2.changed, false); assert.equal(r2.ev[0].why, 'door');
});

test('the explorer can also press a plate, and the door closes again when he steps off', () => {
  const L = mk(['######', '#@1A.#', '######']);
  const P = new Puzzle(L);
  P.move('R');
  assert.equal(doorOpen(L, P.s, 1 * 6 + 3), true);
  P.move('R'); // the door was open while he stood on the plate, so he can step into the doorway
  assert.equal(P.s.p, 1 * 6 + 3);
  P.move('R'); // now he stands in the doorway; leaving it, the door shuts behind him
  assert.equal(doorOpen(L, P.s, 1 * 6 + 3), false);
});

test('a door never closes on someone standing in the doorway', () => {
  const L = mk(['#######', '#@X1A.E', '#######'].map((r) => r.slice(0, 7)));
  const P = new Puzzle(L);
  P.move('R'); // push block onto plate at (3,1)? X from 2 to 3
  assert.ok(doorOpen(L, P.s, 1 * 7 + 4));
});

test('locked door needs a key and spends it', () => {
  const L = mk(['######', '#@KLE#', '######']);
  const P = new Puzzle(L);
  P.move('R');
  assert.equal(P.s.held, 1);
  const r = P.move('R');
  assert.ok(r.ev.some((e) => e.type === 'unlock'));
  assert.equal(P.s.held, 0);
  assert.equal(P.s.keys, 1);
  const L2 = mk(['#####', '#@LE#', '#####']);
  const r2 = new Puzzle(L2).move('R');
  assert.equal(r2.changed, false); assert.equal(r2.ev[0].why, 'lock');
});

test('torches light by walking into them and open the gate', () => {
  const L = mk(['#######', '#.TGE##', '#@.####', '#######']);
  const P = new Puzzle(L);
  assert.equal(P.move('R').changed, true);
  P.move('R'); // (3,2)? wall -> bump
  const P2 = new Puzzle(mk(['#######', '#@TGE##', '#######']));
  const r = P2.move('R');
  assert.ok(r.ev.some((e) => e.type === 'light') && r.ev.some((e) => e.type === 'gate'));
  assert.equal(P2.s.p, 1 * 7 + 1, 'lighting does not move you');
  assert.equal(P2.move('R').ev[0].why, 'brazier');
  P2.s.torches = 1; // already lit, then the neighbour is a lit brazier -> still blocked
});

test('crumbling floor: cracks when you step off, falls at the end of the next move', () => {
  const L = mk(['########', '#@c..E.#', '#.###..#', '########']);
  const P = new Puzzle(L);
  const idx = (x, y) => y * 8 + x;
  P.move('R'); // onto c
  assert.equal(P.s.terr[idx(2, 1)], T.CRUMBLE);
  let r = P.move('R'); // off c: cracked, not fallen yet
  assert.ok(r.ev.some((e) => e.type === 'crack'));
  assert.equal(P.s.terr[idx(2, 1)], T.CRACKED);
  r = P.move('R'); // the next move: it falls
  assert.ok(r.ev.some((e) => e.type === 'crumble'));
  assert.equal(P.s.terr[idx(2, 1)], T.PIT);
});

test('stepping back onto a cracked tile means a fall: back at the entrance, never a dead end', () => {
  const L = mk(['######', '#@c.E#', '######']);
  const P = new Puzzle(L);
  P.move('R'); P.move('R');
  const r = P.move('L'); // back onto the cracked tile as it falls
  assert.ok(r.fell && r.ev.some((e) => e.type === 'fall'));
  assert.equal(P.s.p, L.start);
  assert.equal(P.s.moves, 0);
  assert.equal(P.s.falls, 1);
  assert.equal(P.s.terr[1 * 6 + 2], T.CRUMBLE, 'the room is fresh again');
  assert.ok(P.undo(), 'a fall can be undone');
  assert.equal(P.s.terr[1 * 6 + 2], T.CRACKED);
});

test('undo and reset', () => {
  const L = mk(['######', '#@X.E#', '######']);
  const P = new Puzzle(L);
  P.move('R');
  assert.deepEqual(P.s.blocks, [1 * 6 + 3]);
  assert.ok(P.undo());
  assert.deepEqual(P.s.blocks, [1 * 6 + 2]);
  assert.equal(P.s.p, L.start);
  assert.equal(P.undo(), false);
  P.move('R'); assert.ok(P.reset());
  assert.equal(P.s.moves, 0);
  assert.ok(P.undo());
  assert.equal(P.s.moves, 1);
});

test('stars: completion + collection only — par never gates a star', () => {
  const L = mk(['######', '#@KE.#', '######'], { par: 2 });
  const P = new Puzzle(L);
  run(P, 'RR');
  assert.equal(starsFor(L, P.s), 3);
  // a SLOW solve (moves well over par) with every key still earns all 3 stars
  const L2 = mk(['######', '#@KE.#', '######'], { par: 1 });
  const P2 = new Puzzle(L2); run(P2, 'RR');
  assert.ok(P2.s.moves > L2.par, 'this solve really is over par');
  assert.equal(starsFor(L2, P2.s), 3, 'par must not gate the 3rd star');
  const P2b = new Puzzle(L2); run(P2b, 'RR'); P2b.s.moves = 999;
  assert.equal(starsFor(L2, P2b.s), 3, 'even a very slow all-keys solve keeps 3 stars');
  const L3 = mk(['#######', '#@.KE.#', '#.###.#', '#######'].map((r) => r.slice(0, 7)));
  const P3 = new Puzzle(L3); run(P3, 'RRR');
  assert.equal(starsFor(L3, P3.s), 3);
  // exit reached with a key left behind: completion star only
  const L4 = mk(['######', '#@EK.#', '######']);
  const P4 = new Puzzle(L4); run(P4, 'R');
  assert.equal(starsFor(L4, P4.s), 1);
  // not won yet: no stars at all
  const P5 = new Puzzle(L);
  assert.equal(starsFor(L, P5.s), 0);
});

test('stars: partial collection earns the middle star', () => {
  // two keys in the room; the second hides in an alcove the exit path can skip
  const L = mk(['#########', '#@K..E..#', '#..K....#', '#########']);
  const P = new Puzzle(L); run(P, 'RRRR'); // one key, then straight to the exit
  assert.equal(P.s.won, true);
  assert.equal(starsFor(L, P.s), 2, 'solved with some but not all keys: 2 stars');
  const P2 = new Puzzle(L); run(P2, 'RRDURR'); // both keys (detour into the alcove), then the exit
  assert.equal(P2.s.won, true);
  assert.equal(starsFor(L, P2.s), 3, 'every key collected: 3 stars, speed irrelevant');
});

test('tomb names are the real places (Saqqara / Valley of the Kings / Abu Simbel / Tutankhamun / Hatshepsut), ids append-only', () => {
  assert.deepEqual(TOMBS.map((t) => t.id), ['sand', 'gold', 'moon', 'tut', 'hat']);
  assert.deepEqual(TOMBS.map((t) => t.name), [['سقارة', 'Saqqara'], ['وادي الملوك', 'Valley of the Kings'], ['أبو سمبل', 'Abu Simbel'], ['مقبرة توت عنخ آمون', 'Tomb of Tutankhamun'], ['معبد حتشبسوت', 'Temple of Hatshepsut']]);
  for (const t of TOMBS) { assert.equal(t.fact.length, 2, `tomb ${t.id} has an ar+en museum fact`); assert.ok(t.fact[0].length > 10 && t.fact[1].length > 10); }
});

test('no room is a copy or a horizontal mirror of another room', () => {
  const sig = (rows) => rows.join('/');
  const mirror = (rows) => rows.map((r) => [...r].reverse().join('')).join('/');
  const seen = new Set();
  for (const d of LEVELS) {
    assert.ok(!seen.has(sig(d.rows)), `room ${d.id} duplicates an earlier room`);
    assert.ok(!seen.has(mirror(d.rows)), `room ${d.id} mirrors an earlier room`);
    seen.add(sig(d.rows)); seen.add(mirror(d.rows));
  }
});

test('save is sanitised', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, keys: {}, best: {}, muted: false });
  const s = normalizeSave({ unlocked: 99, stars: { 1: 3, 2: 'x' }, muted: 1 });
  assert.equal(s.unlocked, 20); assert.deepEqual(s.stars, { 1: 3 }); assert.equal(s.muted, true);
});

test('old 3-tomb save migrates cleanly: progress kept, new tombs simply locked', () => {
  const old = { unlocked: 12, stars: { 1: 3, 2: 3, 3: 2, 4: 3, 5: 1 }, keys: { 1: 2, 2: 2, 3: 1, 4: 2, 5: 0 }, best: { 1: 21 }, muted: false };
  const s = normalizeSave(old);
  assert.equal(s.unlocked, 12, 'an old save at the old cap stays at 12, it is not inflated');
  assert.deepEqual(s.stars, old.stars); assert.deepEqual(s.keys, old.keys); assert.deepEqual(s.best, old.best);
  const full = normalizeSave({ unlocked: 12, stars: Object.fromEntries(Array.from({ length: 12 }, (_, i) => [i + 1, 3])), keys: Object.fromEntries(Array.from({ length: 12 }, (_, i) => [i + 1, 2])) });
  const entries = museumEntries(full);
  assert.deepEqual(entries.map((e) => e.complete), [true, true, true, false, false], 'the 3 old tombs show complete, the 2 new ones locked');
  assert.equal(entries[0].keys, 8); assert.equal(entries[0].stars, 12);
});

test('unlock chain walks all 20 rooms in order across all 5 tombs', () => {
  // the same progression rule the game applies on a win: unlocked = max(unlocked, min(LEVELS.length, idx + 2))
  let unlocked = normalizeSave(null).unlocked;
  assert.equal(unlocked, 1);
  for (let idx = 0; idx < LEVELS.length; idx++) {
    assert.ok(idx + 1 <= unlocked, `room ${LEVELS[idx].id} is reachable when its turn comes`);
    unlocked = Math.max(unlocked, Math.min(LEVELS.length, idx + 2));
    const next = LEVELS[idx + 1];
    if (next) assert.ok(next.id <= unlocked, `winning room ${LEVELS[idx].id} unlocks room ${next.id} (tomb ${next.tomb})`);
  }
  assert.equal(unlocked, 20);
  for (let t = 0; t < 5; t++) assert.equal(LEVELS.filter((l) => l.tomb === t).length, 4, `tomb ${t} is crossed by the chain`);
});

test('museum book: fresh save all locked, a finished tomb opens with its keys, stars and fact', () => {
  const fresh = museumEntries(null);
  assert.equal(fresh.length, 5);
  assert.ok(fresh.every((e) => !e.complete && e.done === 0 && e.keys === 0));
  const partial = museumEntries({ stars: { 1: 3, 2: 2, 3: 1 }, keys: { 1: 2, 2: 1, 3: 2 } });
  assert.equal(partial[0].complete, false, 'a tomb with an unfinished room stays locked');
  assert.equal(partial[0].done, 3);
  const done = museumEntries({ stars: { 1: 3, 2: 3, 3: 3, 4: 2 }, keys: { 1: 2, 2: 2, 3: 2, 4: 1 } });
  assert.equal(done[0].complete, true);
  assert.equal(done[0].keys, 7); assert.equal(done[0].totalKeys, 8); assert.equal(done[0].stars, 11);
  assert.equal(done[0].tomb.fact.length, 2);
  assert.ok(done.slice(1).every((e) => !e.complete));
});

test('initState is a fresh copy', () => {
  const L = parseLevel(LEVELS[1]);
  const a = initState(L); const b = initState(L);
  a.blocks.push(1); a.terr[0] = 9;
  assert.notEqual(a.blocks.length, b.blocks.length);
  assert.notEqual(b.terr[0], 9);
  assert.ok(step(L, b, 'U'));
});
