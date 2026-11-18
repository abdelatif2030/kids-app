import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, ROUNDS, LAPS, normalizeSave } from '../src/sim.js';
import { buildTrack, nearest, lateral, pointAt, curvAhead, safeSpeed, HALF_W, WALL } from '../src/track.js';

/** A robot rider: the same racing brain the rivals use, steering through the child's controls. */
function robot(race, opts = {}) {
  const r = race.player;
  const ctl = race._ai(r);
  const c = curvAhead(race.track, r.i, 25 + r.v * 1.3);
  const target = safeSpeed(race.track, r.i, r.v, 16 * 0.95);
  return { steer: ctl.steer, brake: !opts.noBrake && r.v > target + 1.5, nitro: opts.nitro !== false && c.abs < 0.003 && r.nitro > 0.6 };
}

function run(race, opts) {
  let t = 0;
  let walls = 0;
  while (race.state !== 'done' && t < 400) {
    for (const e of race.step(1 / 30, robot(race, opts))) if (e.type === 'wall' && e.id === 0) walls++;
    t += 1 / 30;
  }
  return { t, walls };
}

test('the circuit is a smooth closed loop about 1.7 km long', () => {
  const tr = buildTrack();
  assert.ok(tr.length > 1400 && tr.length < 2400, `length ${tr.length}`);
  let maxCurv = 0;
  for (let i = 0; i < tr.N; i++) maxCurv = Math.max(maxCurv, Math.abs(tr.curv[i]));
  assert.ok(maxCurv < 1 / 18, `tightest corner radius ${(1 / maxCurv).toFixed(1)} m`);
  // the start is a straight
  for (let i = 0; i < 25; i++) assert.ok(Math.abs(tr.curv[i]) < 0.006);
  const p = pointAt(tr, 100, 3);
  assert.ok(Math.abs(lateral(tr, nearest(tr, p.x, p.z), p.x, p.z) - 3) < 0.5, 'right is right');
  const rev = buildTrack(true);
  assert.ok(Math.abs(rev.length - tr.length) < 20);
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
      assert.ok(race.riders.every((r) => r.prog > race.length * 1.2), 'everyone was racing');
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
  // put both on the main straight, the child 8 m behind in the same line
  const pi = 20;
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

test('the barriers keep everybody on the circuit; nobody crashes', () => {
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
  while (easy.state !== 'done' && t < 300) { easy.step(1 / 30, { steer: 0 }); t += 1 / 30; }
  assert.equal(easy.state, 'done', 'hands-off easy race finished');
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
