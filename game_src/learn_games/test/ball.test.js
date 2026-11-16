import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spotsFor, makeRounds, BallPlay, sentence, ROUNDS } from '../src/ball/sim.js';

test('more places for older children; every target is one of the places shown', () => {
  assert.equal(spotsFor(3).length, 3);
  assert.equal(spotsFor(5).length, 4);
  assert.equal(spotsFor(6).length, 5);
  for (const age of [3, 4, 5, 6]) {
    for (let seed = 1; seed < 60; seed++) {
      const t = makeRounds(age, seed);
      assert.equal(t.length, ROUNDS);
      for (let i = 0; i < t.length; i++) {
        assert.ok(spotsFor(age).includes(t[i]));
        if (i) assert.notEqual(t[i], t[i - 1], 'never the same place twice in a row');
      }
    }
  }
});

test('the sentence in Egyptian Arabic and English', () => {
  assert.equal(sentence('under_table', false), 'الكورة تحت الترابيزة');
  assert.equal(sentence('in_box', true), 'The ball is inside the box');
});

test('a wrong place counts a miss; after two the right place is hinted; first try is reported', () => {
  const p = new BallPlay(6, 3);
  const wrong = p.spots.find((s) => s !== p.target);
  assert.equal(p.tap(wrong).firstMiss, true);
  assert.equal(p.hint, null);
  assert.equal(p.tap(wrong).firstMiss, false);
  assert.equal(p.hint, p.target);
  assert.equal(p.tap(p.target).first, false);
  assert.equal(p.tap(p.target).first, true);
});

test('a robot that listens finishes five rounds', () => {
  const p = new BallPlay(4, 8);
  let n = 0;
  while (!p.finished) { assert.ok(p.tap(p.target).ok); n++; }
  assert.equal(n, ROUNDS);
});
