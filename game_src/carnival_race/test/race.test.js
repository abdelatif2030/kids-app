import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TRACKS, TRACK_COUNT, normalizeSave, applyResult, buyUpgrade, buyRacer, emptySave } from '../src/data.js';
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

test('Phase 2F: nine tracks, original six unchanged and in order, three new authored tracks appended', () => {
  assert.equal(TRACK_COUNT, 9);
  assert.equal(TRACKS.length, 9);
  assert.deepEqual(TRACKS.map((t) => t.id), ['pier', 'lanterns', 'stars', 'pier2', 'lanterns2', 'stars2', 'moulid', 'luxor', 'matrouh']);
  // the original six keep their identity (saves key progress by track id, order drives the unlock chain)
  const orig = [
    ['pier', 0, 15, 2], ['lanterns', 1, 14, 3], ['stars', 2, 23, 4],
    ['pier2', 1, 15, 3], ['lanterns2', 2, 14, 4], ['stars2', 3, 23, 5],
  ];
  orig.forEach(([id, diff, nPts, nHaz], i) => {
    assert.equal(TRACKS[i].difficulty, diff, `${id} difficulty`);
    assert.equal(TRACKS[i].points.length, nPts, `${id} points`);
    assert.equal(TRACKS[i].hazards.length, nHaz, `${id} hazards`);
  });
  // the new three are authored (not mirrors): their point geometry differs from every earlier track
  for (const t of TRACKS.slice(6)) {
    for (const o of TRACKS.slice(0, 6)) assert.notDeepEqual(t.points, o.points, `${t.id} must not copy ${o.id}`);
    assert.ok(t.ar && t.en, `${t.id} has ar+en names`);
    for (const h of t.hazards) assert.ok(['teacups', 'hammer', 'boat'].includes(h.type), `${t.id} hazard type ${h.type} is engine-supported`);
    for (const f of [...t.items, ...t.ramps, ...t.arches, ...t.hazards.map((h) => h.at)]) assert.ok(f >= 0 && f < 1, `${t.id} fraction ${f} in [0,1)`);
    for (const [a, b] of t.tunnels) assert.ok(a >= 0 && a < b && b <= 1, `${t.id} tunnel ${a}..${b}`);
  }
  assert.deepEqual(TRACKS.slice(6).map((t) => t.difficulty), [2, 3, 4]);
});

test('Phase 2F: the unlock chain walks all nine tracks and a finished 6-track save migrates intact', () => {
  // a save that had finished the old six tracks: progress intact, new tracks still locked
  const old = normalizeSave({ tickets: 321, unlocked: 6, best: { pier: 1, stars2: 2 }, owned: ['raccoon', 'cat'], selected: 'cat' });
  assert.equal(old.unlocked, 6);
  assert.equal(old.tickets, 321);
  assert.equal(old.best.pier, 1);
  assert.equal(old.best.stars2, 2);
  assert.equal(old.selected, 'cat');
  // an over-large unlocked value from a damaged save clamps to the new count, not the old one
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 9);
  // podium finishes walk the whole chain 1 -> 9; off-podium finishes do not unlock
  const s = emptySave();
  for (let i = 0; i < TRACK_COUNT; i++) {
    const r = applyResult(s, i, 3, 0, false);
    assert.equal(s.best[TRACKS[i].id], 3, `best recorded by id for ${TRACKS[i].id}`);
    if (i + 1 < TRACK_COUNT) {
      assert.equal(r.unlockedNext, true, `track ${i} unlocks track ${i + 1}`);
      assert.equal(s.unlocked, i + 2);
    } else {
      assert.equal(r.unlockedNext, false, 'no track after the last one');
      assert.equal(s.unlocked, 9);
    }
  }
  const s2 = emptySave();
  assert.equal(applyResult(s2, 0, 4, 0, false).unlockedNext, false);
  assert.equal(s2.unlocked, 1);
  // easy mode still opens the next track on any finish, including into the new tracks
  const s3 = normalizeSave({ unlocked: 6 });
  assert.equal(applyResult(s3, 5, 6, 0, true).unlockedNext, true);
  assert.equal(s3.unlocked, 7);
});

test('Certification Sweep A: tracks 4-6 are authored variants, not exact mirrors of tracks 1-3', () => {
  // the mirror of a point (x,z) is (-x,z); an exact mirror track matches it at every point
  for (const [v, s] of [[3, 0], [4, 1], [5, 2]]) {
    const vt = TRACKS[v];
    const st = TRACKS[s];
    assert.equal(vt.points.length, st.points.length, `${vt.id} keeps the point count of ${st.id}`);
    let moved = 0;
    vt.points.forEach((q, i) => {
      const dx = Math.abs(q.p[0] - -st.points[i].p[0]);
      const dz = Math.abs(q.p[2] - st.points[i].p[2]);
      if (Math.hypot(dx, dz) > 3) moved++;
    });
    assert.ok(moved >= 3, `${vt.id}: at least 3 corners moved off the mirror of ${st.id} (got ${moved})`);
    const lv = new TrackPath(vt).length;
    const ls = new TrackPath(st).length;
    assert.ok(Math.abs(lv - ls) / ls > 0.005, `${vt.id} lap ${lv.toFixed(0)} m differs from ${st.id} lap ${ls.toFixed(0)} m`);
    // feature placement also re-authored: at least one of ramps/tunnels/arches differs
    const feat = (t) => JSON.stringify([t.ramps, t.tunnels, t.arches]);
    assert.notEqual(feat(vt), feat(st), `${vt.id} features differ from ${st.id}`);
  }
});

test('Certification Sweep A: every track has a distinct sky/fog/pano variant', async () => {
  const fs = await import('node:fs');
  const s = fs.readFileSync(new URL('../src/world.js', import.meta.url), 'utf8');
  const m = s.match(/const TRACK_VARIANTS = \[([\s\S]*?)\];/);
  assert.ok(m, 'TRACK_VARIANTS table exists in world.js');
  const rows = [...m[1].matchAll(/top: (0x[0-9a-f]+), mid: (0x[0-9a-f]+), horizon: (0x[0-9a-f]+), fog: (0x[0-9a-f]+), panoTint: (0x[0-9a-f]+)/gi)]
    .map((r) => r.slice(1).join('|'));
  assert.equal(rows.length, 9, 'one variant row per track');
  assert.equal(new Set(rows).size, 9, 'all 9 track variants are distinct');
  // tracks 7-9 reuse pano1/2/3 (tracks 1-3's skies): their variants must differ from the donors
  for (const [t, d] of [[6, 0], [7, 1], [8, 2]]) assert.notEqual(rows[t], rows[d], `track ${t + 1} variant differs from pano donor track ${d + 1}`);
});

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
