import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeSet, SortPlay, GROUPS, GROUP_IDS, groupOf, basketsFor, ROUNDS, PER_ROUND } from '../src/sort/sim.js';
import { ITEM_WORDS } from '../src/kit/words.js';

test('every thing belongs to exactly one group and has its words', () => {
  const all = GROUP_IDS.flatMap((g) => GROUPS[g].items);
  assert.equal(new Set(all).size, all.length);
  for (const it of all) {
    assert.ok(groupOf(it));
    assert.ok(ITEM_WORDS[it] && ITEM_WORDS[it][0] && ITEM_WORDS[it][1], it);
  }
});

test('five rounds of four; every basket of a round gets at least one thing', () => {
  for (const age of [3, 4, 5, 6]) {
    for (let seed = 1; seed < 40; seed++) {
      const set = makeSet(age, seed);
      assert.equal(set.length, ROUNDS);
      set.forEach((r, i) => {
        assert.equal(r.items.length, PER_ROUND);
        assert.equal(r.groups.length, basketsFor(age, i));
        for (const g of r.groups) assert.ok(r.items.some((it) => groupOf(it) === g), `round ${i} basket ${g} empty`);
        for (const it of r.items) assert.ok(r.groups.includes(groupOf(it)));
        assert.equal(new Set(r.items).size, r.items.length, 'no twin in a round');
      });
    }
  }
});

test('younger children get two baskets; older ones three from round 3', () => {
  assert.deepEqual([0, 1, 2, 3, 4].map((i) => basketsFor(4, i)), [2, 2, 2, 2, 2]);
  assert.deepEqual([0, 1, 2, 3, 4].map((i) => basketsFor(6, i)), [2, 2, 3, 3, 3]);
});

test('a wrong basket bounces back; after two misses the right one glows; first try is recorded', () => {
  const p = new SortPlay(5, 9);
  const right = p.rightBasket;
  const wrong = right === 0 ? 1 : 0;
  assert.equal(p.drop(wrong).ok, false);
  assert.equal(p.hint, -1);
  assert.equal(p.drop(wrong).ok, false);
  assert.equal(p.hint, right);
  const ev = p.drop(right);
  assert.equal(ev.ok, true);
  assert.equal(ev.first, false);
  assert.equal(p.misses, 0);
  const ev2 = p.drop(p.rightBasket);
  assert.equal(ev2.first, true);
});

test('a robot sorting everything right finishes the set with all first tries', () => {
  const p = new SortPlay(6, 3);
  let rounds = 0;
  let guard = 0;
  while (!p.finished && guard++ < 100) {
    const ev = p.drop(p.rightBasket);
    assert.ok(ev.ok);
    if (ev.roundDone) rounds++;
  }
  assert.equal(rounds, ROUNDS);
  assert.equal(p.log.length, ROUNDS * PER_ROUND);
  assert.ok(p.log.every((l) => l.first));
});
