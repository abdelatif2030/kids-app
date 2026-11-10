import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TRACKS, normalizeSave, applyResult, buyUpgrade, buyRacer, emptySave } from '../src/data.js';
import { TrackPath } from '../src/track.js';
import { Race } from '../src/race.js';

function simulate(trackIndex, { easy = false, seed = 3, steerFromAi = true } = {}) {
  const track = new TrackPath(TRACKS[trackIndex]);
  const race = new Race(track, { racerId: 'raccoon', upgrades: {}, easy, difficulty: TRACKS[trackIndex].difficulty, seed });
  const dt = 1 / 60;
  let t = 0;
  const seen = new Set();
  while (race.phase !== 'done' && t < 400) {
    // a simple "child": hold the pedal and steer toward the AI racing line
    const ai = race._ai(race.player, dt);
    race.step(dt, { throttle: 1, steer: steerFromAi ? ai.steer : 0, item: !!race.player.item, trick: 0 });
    for (const e of race.events) seen.add(e.type);
    for (const c of race.cars) {
      for (const k of ['s', 'x', 'h', 'v', 'progress']) assert.ok(Number.isFinite(c[k]), `${k} is finite`);
      assert.ok(Math.abs(c.x) <= track.width / 2, 'car stays on the road');
    }
    t += dt;
  }
  return { race, t, seen, track };
}

for (let i = 0; i < TRACKS.length; i++) {
  test(`track ${TRACKS[i].id}: a race finishes in a sensible time with places 1..6`, () => {
    const { race, t, seen, track } = simulate(i);
    assert.equal(race.phase, 'done');
    assert.ok(t > 30 && t < 200, `race took ${t.toFixed(1)} s, lap ${track.length.toFixed(0)} m`);
    assert.deepEqual([...race.cars.map((c) => c.place)].sort(), [1, 2, 3, 4, 5, 6]);
    assert.ok(race.result.place >= 1 && race.result.place <= 6);
    assert.ok(seen.has('go') && seen.has('finish'));
    console.log(`  ${TRACKS[i].id}: ${track.length.toFixed(0)} m/lap, ${t.toFixed(1)} s, place ${race.result.place}, tickets ${race.result.collected}, events ${[...seen].join(',')}`);
  });
}

test('easy mode: a child who never steers still finishes', () => {
  const { race } = simulate(0, { easy: true, steerFromAi: false });
  assert.equal(race.phase, 'done');
});

test('the loop on Starry Summit really turns the road upside down', () => {
  const track = new TrackPath(TRACKS[2]);
  let inverted = 0;
  for (let s = 0; s < track.length; s += 1) if (track.upAt(s).y < -0.5) inverted++;
  assert.ok(inverted > 5, `upside-down metres: ${inverted}`);
});

test('save: damaged data loads safely, nothing is lost, prices are enforced', () => {
  assert.deepEqual(normalizeSave(null), emptySave());
  const s = normalizeSave({ tickets: -5, owned: ['hacker', 'cat'], selected: 'dragon', upgrades: { engine: 99 } });
  assert.equal(s.tickets, 0);
  assert.deepEqual(s.owned, ['raccoon', 'cat']);
  assert.equal(s.selected, 'raccoon');
  assert.equal(s.upgrades.engine, 5);
  const save = emptySave();
  assert.equal(buyUpgrade(save, 'engine'), false, 'no tickets, no upgrade');
  const r = applyResult(save, 0, 2, 7, false);
  assert.equal(r.won, 47);
  assert.equal(r.unlockedNext, true);
  assert.equal(save.unlocked, 2);
  assert.equal(buyUpgrade(save, 'engine'), true);
  assert.equal(save.tickets, 7);
  assert.equal(buyRacer(save, 'bunny'), false);
});
