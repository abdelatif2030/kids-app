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

test('a car that drives straight into any ride always gets through it (never stuck spinning)', () => {
  for (const def of TRACKS) {
    const track = new TrackPath(def);
    const race0 = new Race(track, { racerId: 'raccoon', upgrades: {}, seed: 1 });
    for (const h of race0.hazards) {
      for (const lane of [-0.3, 0, 0.3]) {
        const race = new Race(track, { racerId: 'raccoon', upgrades: {}, seed: 2 });
        race.phase = 'race';
        // only the player on the road, aimed straight at the ride, at full speed
        race.cars = [race.player];
        const p = race.player;
        p.s = track.wrap(h.s - 18);
        p.x = lane * track.width;
        p.v = 20;
        p.lap = 0;
        let spins = 0;
        let t = 0;
        let passed = false;
        while (t < 10) {
          race.step(1 / 60, { throttle: 1, steer: 0, item: false });
          spins += race.events.filter((e) => e.type === 'spin').length;
          t += 1 / 60;
          let ds = track.wrap(p.s - h.s);
          if (ds > track.length / 2) ds -= track.length;
          if (ds > 12) { passed = true; break; }
        }
        assert.ok(passed, `${def.id} ${h.type} at lane ${lane}: still stuck after ${t.toFixed(1)} s (${spins} spins)`);
        assert.ok(spins <= 2, `${def.id} ${h.type} lane ${lane}: ${spins} spins in one ride`);
      }
    }
  }
});
