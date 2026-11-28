import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, ROUNDS, LAPS, GRIP, normalizeSave } from '../src/sim.js';
import { buildTrack, nearest, lateral, pointAt, curvAhead, safeSpeed, gripAt, HALF_W, WALL } from '../src/track.js';

/** A robot rider: the same racing brain the rivals use, steering through the child's controls. */
function robot(race, opts = {}) {
  const r = race.player;
  const ctl = race._ai(r);
  const c = curvAhead(race.track, r.i, 25 + r.v * 1.3);
  const target = safeSpeed(race.track, r.i, r.v, GRIP * gripAt(race.track, r.i) * 0.95);
  return { steer: ctl.steer, brake: !opts.noBrake && r.v > target + 1.5, nitro: opts.nitro !== false && c.abs < 0.003 && r.nitro > 0.6 };
}

function run(race, opts) {
  let t = 0;
  let walls = 0;
  while (race.state !== 'done' && t < 700) {
    for (const e of race.step(1 / 30, robot(race, opts))) if (e.type === 'wall' && e.id === 0) walls++;
    t += 1 / 30;
  }
  return { t, walls };
}

test('six distinct desert legs (Phase 2E): each its own long closed loop with soft-sand drifts', () => {
  const lengths = [];
  for (let k = 0; k < ROUNDS.length; k++) {
    const tr = buildTrack(k);
    assert.ok(tr.length > 4000 && tr.length < 12000, `leg ${k + 1} length ${tr.length}`);
    lengths.push(Math.round(tr.length));
    // the sand profile: firm dirt at the start camp, real dips in the drift fields
    assert.ok(gripAt(tr, 0) > 0.95, `leg ${k + 1} start grip ${gripAt(tr, 0)}`);
    let minGrip = 1;
    for (let i = 0; i < tr.N; i++) minGrip = Math.min(minGrip, gripAt(tr, i));
    assert.ok(minGrip < 0.72, `leg ${k + 1} softest sand grip ${minGrip}`);
  }
  // no two legs share a length — none is another leg rescaled or reversed
  assert.equal(new Set(lengths).size, ROUNDS.length, `leg lengths ${lengths}`);
  // lateral sanity on leg 1's long home straight: right is right
  const tr = buildTrack(0);
  const p = pointAt(tr, 3400, 3);
  assert.ok(Math.abs(lateral(tr, nearest(tr, p.x, p.z), p.x, p.z) - 3) < 0.5, 'right is right');
});

test('a robot rider finishes every round on the podium, rivals race too', () => {
  for (const [k, rd] of ROUNDS.entries()) {
    const places = [];
    for (let seed = 1; seed <= 3; seed++) {
      const race = new Race({ round: k, seed, assist: 0 });
      const { t, walls } = run(race);
      assert.equal(race.state, 'done', `round ${rd.id} did not finish (${Math.round(t)} s)`);
      places.push(`${race.player.place} (${Math.round(race.player.finishT)}s, walls ${walls}, 2nd at ${Math.round(race.order[1].prog - race.length * LAPS)}m)`);
      assert.ok(race.player.place <= 3, `round ${rd.id} seed ${seed}: place ${race.player.place}`);
      assert.ok(race.riders.every((r) => r.prog > race.length * 0.5), 'everyone was racing');
    }
    console.log(`round ${rd.id}: ${places.join(' | ')}`);
  }
});

test('braking matters: never braking is slower or hits the barriers', () => {
  const a = new Race({ round: 1, seed: 4, assist: 0 });
  const ra = run(a);
  const b = new Race({ round: 1, seed: 4, assist: 0 });
  const rb = run(b, { noBrake: true });
  console.log(`with brakes ${a.player.finishT.toFixed(1)} s walls ${ra.walls} | no brakes ${b.player.finishT.toFixed(1)} s walls ${rb.walls}`);
  assert.ok(b.player.finishT > a.player.finishT || rb.walls > ra.walls);
});

test('the slipstream builds behind a rider and gives speed and nitro; nitro is a boost', () => {
  const race = new Race({ round: 0, seed: 2 });
  race.state = 'race';
  const p = race.player;
  const o = race.riders[1];
  // put both on leg 1's long home straight, the child 8 m behind in the same line
  const pi = 3400;
  Object.assign(o, pointAt(race.track, pi + 4, 0), { h: race.track.ang[pi + 4], v: 45, i: pi + 4, prog: (pi + 4) * 2, vmax: 45 });
  Object.assign(p, pointAt(race.track, pi, 0), { h: race.track.ang[pi], v: 45, i: pi, prog: pi * 2, nitro: 0 });
  for (const r of race.riders.slice(2)) Object.assign(r, pointAt(race.track, 300, 0), { i: 300, prog: 600 });
  for (let i = 0; i < 30; i++) race.step(1 / 30, { steer: 0 });
  assert.ok(p.draft > 0.5, `draft ${p.draft}`);
  assert.ok(p.nitro > 0.05);
  const race2 = new Race({ round: 0, seed: 2 });
  race2.state = 'race';
  race2.player.v = 40;
  race2.step(1 / 30, { nitro: true });
  assert.ok(race2.player.boost > 0);
  let v0 = race2.player.v;
  for (let i = 0; i < 30; i++) race2.step(1 / 30, {});
  assert.ok(race2.player.v > v0 + 5, 'boost accelerates');
});

test('the marker rocks keep everybody on the dirt road; nobody crashes', () => {
  const race = new Race({ round: 2, seed: 3 });
  for (let i = 0; i < 30 * 40; i++) {
    race.step(1 / 30, { steer: Math.sin(i / 20) > 0 ? 1 : -1 });
    for (const r of race.riders) assert.ok(Math.abs(r.lat) <= WALL + 0.01, `rider ${r.id} at ${r.lat}`);
  }
  assert.ok(race.player.v > 5, 'still riding');
});

test('five lights, then go; the youngest get help with steering and braking', () => {
  const race = new Race({ round: 0, seed: 1 });
  let lights = 0;
  let go = false;
  for (let i = 0; i < 30 * 5; i++) for (const e of race.step(1 / 30)) { if (e.type === 'light') lights++; if (e.type === 'go') go = true; }
  assert.ok(lights >= 4 && go);
  // an easy race with no steering at all still gets round
  const easy = new Race({ round: 0, seed: 1, easy: true });
  let t = 0;
  while (easy.state !== 'done' && t < 700) { easy.step(1 / 30, { steer: 0 }); t += 1 / 30; }
  assert.equal(easy.state, 'done', 'hands-off easy race finished');
});

test('Phase 2E geometry pins: distinct control layouts, drift patterns, arena fit, no spline spikes', () => {
  const tracks = ROUNDS.map((_, k) => buildTrack(k));
  // distinct control-point layouts: counts and centrelines differ per leg
  assert.equal(new Set(tracks.map((tr) => tr.cpCount)).size, ROUNDS.length, 'two legs share a control-point count');
  for (let a = 0; a < tracks.length; a++) {
    for (let b = a + 1; b < tracks.length; b++) {
      assert.ok(Math.abs(tracks[a].length - tracks[b].length) > 150, `legs ${a + 1} & ${b + 1} lengths too close`);
      let same = 0;
      const n = Math.min(tracks[a].N, tracks[b].N);
      for (let i = 0; i < n; i += 37) if (Math.abs(tracks[a].xs[i] - tracks[b].xs[i]) < 1 && Math.abs(tracks[a].zs[i] - tracks[b].zs[i]) < 1) same++;
      assert.equal(same, 0, `legs ${a + 1} & ${b + 1} share centreline samples`);
    }
  }
  // drift fields are placed differently on every leg
  const driftKeys = tracks.map((tr) => tr.drifts.map(([f, d]) => `${f}:${d}`).join(','));
  assert.equal(new Set(driftKeys).size, ROUNDS.length, 'two legs share a drift pattern');
  for (const [k, tr] of tracks.entries()) {
    // every leg stays inside the arena the renderer dresses (pano ring is 780 m)
    let cx = 0; let cz = 0;
    for (let i = 0; i < tr.N; i++) { cx += tr.xs[i]; cz += tr.zs[i]; }
    cx /= tr.N; cz /= tr.N;
    let ext = 0;
    for (let i = 0; i < tr.N; i++) ext = Math.max(ext, Math.hypot(tr.xs[i] - cx, tr.zs[i] - cz));
    assert.ok(ext < 760, `leg ${k + 1} reaches ${ext.toFixed(0)} m from centre`);
    // no spline spikes: the tightest corner of any leg is a real hairpin, never a kink
    let maxCurv = 0;
    for (let i = 0; i < tr.N; i++) maxCurv = Math.max(maxCurv, Math.abs(tr.curv[i]));
    assert.ok(maxCurv < 1 / 7.5, `leg ${k + 1} tightest radius ${(1 / maxCurv).toFixed(1)} m`);
  }
  // leg 1 still launches off a straight start (the grid sits there)
  const t0 = tracks[0];
  for (let i = 0; i < 25; i++) assert.ok(Math.abs(t0.curv[i]) < 0.006, `leg 1 start curv ${t0.curv[i]}`);
  // the sunset finale flag lives on the Dakhla cup only
  assert.deepEqual(ROUNDS.map((r) => r.sunset), [false, false, false, false, false, true]);
});

test('Phase 2E: the full campaign unlock chain — each podium opens the next leg, the finale is reachable', () => {
  // normalizeSave derives unlocks from earned stars (the pattern main.js relies on)
  let stars = {};
  for (let k = 0; k < ROUNDS.length; k++) {
    const s = normalizeSave({ stars });
    assert.ok(s.unlocked >= k + 1, `leg ${k + 1} should be unlocked (unlocked=${s.unlocked})`);
    stars = { ...stars, [ROUNDS[k].id]: 2 }; // a podium finish, as _results records it
  }
  const end = normalizeSave({ stars });
  assert.equal(end.unlocked, ROUNDS.length);
  assert.deepEqual(Object.keys(end.stars).map(Number).sort((a, b) => a - b), ROUNDS.map((r) => r.id));
  // an old pre-2E save (one shared track era) migrates: progress is kept, nothing is lost
  const old = normalizeSave({ unlocked: 4, stars: { 1: 3, 2: 2, 3: 1 }, best: { 1: 95.5 }, color: 2 });
  assert.ok(old.unlocked >= 4, `old save unlocked ${old.unlocked}`);
  assert.equal(old.stars[1], 3);
  assert.equal(old.best[1], 95.5);
  assert.equal(old.color, 2);
});

test('damaged saves load safely', () => {
  for (const bad of [null, 2, 'x', { unlocked: 99, stars: { 1: 5 }, best: { 1: -3 }, color: 9 }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= ROUNDS.length);
    assert.ok(s.color >= 0 && s.color < 4);
    assert.deepEqual(s.best, {});
  }
  void LAPS; void HALF_W;
});
