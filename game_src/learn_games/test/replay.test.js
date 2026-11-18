import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { ROUNDS } from '../src/letters/sim.js';

// «العب معانا تاني»: the child finishes a level, taps the button and plays the SAME level again. The second game must show other things than the first
// (other letters, other shapes...), at every age, in every level, even when the app is closed between the two.
const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];
const keys = (p) => p.rounds.map((r) => r.key || r.answer);

for (const lv of LEVELS) {
  test(`replay of «${lv.ar}» shows other things at every age`, () => {
    for (const age of [2, 3, 4, 5, 6]) for (let trial = 0; trial < 6; trial++) {
      let mem = new FreshMemory(null, 2900);
      mem.begin(lv.id);
      const first = new LevelPlay(lv.id, age, 100 + trial * 17 + age, mem, WORLDS[trial]);
      const a = keys(first);
      a.forEach((k) => mem.note(k)); // the child answered them all
      if (trial % 2) mem = new FreshMemory(JSON.parse(JSON.stringify(mem.toJSON())), 2900); // or the app was closed in between
      mem.begin(lv.id); // the same level again
      const second = new LevelPlay(lv.id, age, 900 + trial * 13 + age, mem, WORLDS[(trial + 3) % 12]);
      const b = keys(second);
      assert.equal(b.length, ROUNDS);
      const same = b.filter((k) => a.includes(k));
      // levels whose whole bank is small (counting 1-20, shapes 20, colours 25...) can share a few things; the others share none
      const limit = ['counting', 'shapes', 'colors', 'letters', 'order'].includes(lv.id) ? 3 : 1;
      assert.ok(same.length <= limit, `${lv.id} age ${age}: the replay repeats ${same.length} things (${same.join(' ')})`);
    }
  });
}

test('letters and shapes: a replay never starts with the first game\'s letters or shapes', () => {
  for (const id of ['letters', 'shapes']) for (const age of [2, 3, 4, 5, 6]) {
    const mem = new FreshMemory(null, 2900);
    mem.begin(id);
    const a = keys(new LevelPlay(id, age, 5, mem, 'meadow'));
    a.forEach((k) => mem.note(k));
    mem.begin(id);
    const b = keys(new LevelPlay(id, age, 6, mem, 'farm'));
    assert.ok(!a.includes(b[0]) && !a.includes(b[1]), `${id} age ${age}: ${b.slice(0, 2)} was already in the first game ${a}`);
  }
});
