import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STEPS, makeRounds, lengthFor, DayPlay, ROUNDS } from '../src/day/sim.js';

test('the day runs from waking to sleeping, the sky time only goes forward', () => {
  assert.equal(STEPS[0].id, 'wake');
  assert.equal(STEPS[STEPS.length - 1].id, 'sleep');
  for (let i = 1; i < STEPS.length; i++) assert.ok(STEPS[i].t > STEPS[i - 1].t);
});

test('each round is a run of consecutive steps, shuffled so it is never already in order', () => {
  for (const age of [3, 4, 5, 6]) {
    for (let seed = 1; seed < 50; seed++) {
      const rs = makeRounds(age, seed);
      assert.equal(rs.length, ROUNDS);
      for (const r of rs) {
        assert.equal(r.order.length, lengthFor(age));
        const at = STEPS.findIndex((s) => s.id === r.order[0]);
        r.order.forEach((id, j) => assert.equal(STEPS[at + j].id, id));
        assert.deepEqual([...r.shuffled].sort(), [...r.order].sort());
        assert.ok(r.shuffled.some((s, j) => s !== r.order[j]));
      }
    }
  }
});

test('a wrong card counts a miss, after two the right one glows; the round event is first-try only', () => {
  const p = new DayPlay(5, 4);
  const wrong = p.current.order.find((id) => id !== p.wanted);
  assert.equal(p.tap(wrong).ok, false);
  assert.equal(p.hint, null);
  p.tap(wrong);
  assert.equal(p.hint, p.wanted);
  let ev;
  for (const id of [...p.current.order]) ev = p.tap(id);
  assert.ok(ev.roundDone);
  assert.equal(ev.first, false);
  for (const id of [...p.current.order]) ev = p.tap(id);
  assert.equal(ev.first, true);
});

test('a robot that knows the day finishes all five rounds', () => {
  const p = new DayPlay(6, 9);
  let done = 0;
  while (!p.finished) { const ev = p.tap(p.wanted); if (ev.roundDone) done++; }
  assert.equal(done, ROUNDS);
});
