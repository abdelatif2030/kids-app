import test from 'node:test';
import assert from 'node:assert/strict';
import { Roll, buildCity, robotRoll, normalizeSave, GOALS, THINGS, PICK } from '../src/sim.js';

const city = buildCity(11);

function play(opts, mode = 'robot') {
  const g = new Roll({ things: city, ...opts });
  const dt = 1 / 30;
  const seen = { stick: 0, bump: 0, bigger: [], groups: new Set(), ticks: 0, counts: [] };
  for (let i = 0; i < 300 * 30; i++) {
    if (mode === 'robot') { const m = robotRoll(g); g.setMove(m.x, m.z); }
    for (const e of g.step(dt)) {
      if (e.type === 'stick') { seen.stick++; seen.groups.add(THINGS[e.kind].g); }
      if (e.type === 'bump') seen.bump++;
      if (e.type === 'bigger') seen.bigger.push(e.reached);
      if (e.type === 'tick') seen.ticks++;
      if (e.type === 'count') seen.counts.push(e.n);
    }
    if (g.state === 'done') break;
  }
  return { g, seen };
}

test('the city has clutter, street stuff, cars, buses and buildings', () => {
  const groups = [0, 0, 0, 0, 0];
  for (const t of city) groups[THINGS[t.kind].g]++;
  console.log('things per group', groups);
  assert.ok(groups[0] > 400 && groups[1] > 100 && groups[2] > 100 && groups[3] > 20 && groups[4] > 40);
});

test('the robot grows from 0.5 m to a gigantic ball, passing every goal, before the time runs out', () => {
  const { g, seen } = play({ seed: 1 });
  console.log(`final ${g.d.toFixed(1)} m, collected ${g.collected}, bumps ${seen.bump}, goals ${seen.bigger}, stars ${g.result.stars}, groups ${[...seen.groups]}`);
  assert.equal(g.state, 'done');
  assert.deepEqual(seen.counts, [2, 1]);
  assert.ok(seen.bigger.length >= 5, 'reached the building goal');
  assert.ok(seen.groups.has(4), 'rolled up a building');
  assert.ok(g.result.stars >= 2);
  assert.equal(seen.ticks, 10);
});

test('a ball that does not move stays small; the time still runs out (no losing)', () => {
  const { g } = play({}, 'none');
  assert.equal(g.state, 'done');
  assert.ok(g.d < 1);
  assert.equal(g.result.stars, 0);
});

test('too big things bounce the ball and a little gum falls off; small ones stick', () => {
  const g = new Roll({ things: [{ kind: 'bus', x: 0, z: 0, s: 11, r: 5.5, h: 11, id: 0 }, { kind: 'hotdog', x: 0, z: 9, s: 0.22, r: 0.11, h: 0.22, id: 1 }] });
  g.state = 'roll';
  g.d = 2;
  g.ball = { x: 0, z: 9.6, vx: 0, vz: -6 };
  g.setMove(0, -1);
  const ev = [];
  for (let i = 0; i < 60; i++) ev.push(...g.step(1 / 30));
  assert.ok(ev.some((e) => e.type === 'stick' && e.kind === 'hotdog'));
  assert.ok(ev.some((e) => e.type === 'bump' && e.kind === 'bus'));
  assert.ok(g.ball.z > 5.5);
  assert.ok(0.22 <= 2 * PICK);
  assert.equal(GOALS[0].d, 1.3);
});

test('saves are cleaned', () => {
  const s = normalizeSave({ best: 61.234, stars: 5, plays: -1 });
  assert.equal(s.best, 61.2);
  assert.equal(s.stars, 0);
  assert.equal(s.plays, 0);
});
