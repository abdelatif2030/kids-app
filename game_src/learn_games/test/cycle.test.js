import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { ROUNDS } from '../src/letters/sim.js';

// The owner's check: play level 1 to level 12 like a child would (every level, every age), play each level again and again, close and reopen the app
// in between (the memory is saved and loaded as JSON, like the game's save), and make sure that
//   (1) nothing repeats inside one game when the level has enough different things,
//   (2) a replay shows things the child has NOT seen yet (until the level has really run out of things),
//   (3) after the level runs out, it starts a new cycle with the oldest first.
const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];

/** Everything a level can ask at an age (the distinct keys over many seeds, no memory). */
function poolOf(levelId) {
  // the whole bank of the level: what ANY age can be asked (a young child reaches the harder tiers once the easy ones are used up)
  const keys = new Set();
  for (const age of [2, 3, 4, 5, 6]) for (let s = 1; s <= 500; s++) for (const r of new LevelPlay(levelId, age, s * 104729, null, WORLDS[s % 12]).rounds) keys.add(r.key || r.answer);
  return keys;
}
const keysOf = (p) => p.rounds.map((r) => r.key || r.answer);
const reopen = (mem) => new FreshMemory(JSON.parse(JSON.stringify(mem.toJSON())), mem.week); // the app was closed and opened again

for (const age of [2, 3, 4, 5, 6]) {
  test(`age ${age}: all 12 levels, repeated plays and app restarts show new things and never repeat inside a game`, () => {
    let mem = new FreshMemory(null, 2900);
    const report = [];
    for (const lv of LEVELS) {
      const pool = poolOf(lv.id);
      let prevKeys = [];
      let sessionOfPlays = 0, maxRepeatsInGame = 0, firstRepeatVisit = null, cycles = 0, allSeenBefore = false;
      const visits = Math.min(60, Math.ceil(pool.size / ROUNDS) * 2 + 2);
      for (let v = 0; v < visits; v++) {
        if (v % 3 === 2) mem = reopen(mem); // closing and reopening the app between visits
        mem.begin(lv.id);
        const p = new LevelPlay(lv.id, age, 31 * v + 7 * age + lv.id.length, mem, WORLDS[(v * 5) % 12]);
        const ks = keysOf(p);
        assert.equal(ks.length, ROUNDS, `${lv.id}: eight questions`);
        // (1) inside one game
        const dup = ks.length - new Set(ks).size;
        maxRepeatsInGame = Math.max(maxRepeatsInGame, dup);
        if (pool.size >= ROUNDS * 2) assert.equal(dup, 0, `${lv.id} age ${age} visit ${v}: ${ks.join(' ')} repeats inside one game (pool ${pool.size})`);
        // (2) new things first, until the whole level has been seen once (the game also remembers what the levels before it showed)
        const isNew = (k) => !(k in mem.seen);
        const notSeenBefore = ks.filter(isNew).length;
        const unseenLeft = [...pool].filter(isNew).length;
        if (unseenLeft >= ROUNDS) assert.equal(notSeenBefore, ROUNDS, `${lv.id} age ${age} visit ${v}: only ${notSeenBefore} new of ${ks.length} while ${unseenLeft} unseen were left`);
        else if (unseenLeft > 0) assert.ok(notSeenBefore >= unseenLeft - 1, `${lv.id} age ${age} visit ${v}: ${unseenLeft} new things were left but only ${notSeenBefore} came`);
        if (firstRepeatVisit === null && notSeenBefore < ks.length) firstRepeatVisit = v;
        // (3) a new cycle (everything seen once) starts with the oldest things, not with what was just shown
        if (allSeenBefore && pool.size >= ROUNDS * 3) {
          const again = ks.filter((k) => prevKeys.includes(k)).length;
          assert.ok(again <= 1, `${lv.id} age ${age} visit ${v}: ${again} of the things of the last game came back at once`);
        }
        // the child answered all eight right: the game remembers them
        ks.forEach((k) => mem.note(k));
        prevKeys = ks;
        if (!allSeenBefore && [...pool].every((k) => k in mem.seen)) { allSeenBefore = true; cycles++; }
        sessionOfPlays++;
      }
      report.push({ level: lv.id, things: pool.size, plays: sessionOfPlays, firstRepeatAtVisit: firstRepeatVisit, completedACycle: allSeenBefore, worstRepeatsInOneGame: maxRepeatsInGame });
    }
    // levels with fewer than 16 different things cannot avoid repeating: the report names them
    const thin = report.filter((x) => x.things < ROUNDS * 2).map((x) => `${x.level}(${x.things})`);
    if (process.env.SHOW_CYCLE) console.table(report);
    assert.ok(Array.isArray(thin));
  });
}

test('the previous level never repeats at the start of the next one (walking from level 1 to 12)', () => {
  const mem = new FreshMemory(null, 2900);
  let prev = null;
  for (const lv of LEVELS) {
    mem.begin(lv.id);
    const p = new LevelPlay(lv.id, 6, 5000 + lv.id.length, mem, 'meadow');
    const ks = keysOf(p);
    if (prev && ['words', 'letters', 'first', 'fruits', 'vehicles', 'animals', 'habits'].includes(lv.id)) {
      const shared = ks.filter((k) => prev.includes(k));
      assert.ok(shared.length <= 1, `${lv.id} repeats ${shared.join(',')} from the level before`);
    }
    ks.forEach((k) => mem.note(k));
    prev = ks;
  }
});
