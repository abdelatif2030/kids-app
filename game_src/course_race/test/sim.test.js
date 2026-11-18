import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, ROUNDS, buildCourse, HALF, normalizeSave } from '../src/sim.js';

/** A robot runner: jumps before a gap, uses the jetpack when it is falling, dodges lane obstacles. */
function drive(race) {
  const p = race.p;
  const ahead = race.els.filter((e) => e.z > p.z - 1 && e.z - p.z < 30).sort((a, b) => a.z - b.z);
  let tx = 0;
  for (const e of ahead) {
    const d = e.z - p.z;
    if (e.kind === 'gap' && d < 3.2 && d > 0 && p.grounded) race.jump();
    if (e.kind === 'gap' && race.theme === 'alien' && p.y < -0.5 && p.vy < 0 && p.fall <= 0) race.jetpack();
    if (e.kind === 'gate' && d < 2.5 && d > 0 && p.grounded) race.jump();
    if (e.kind === 'hammer' || e.kind === 'meteor') { if (d < 12) tx = e.x > 0 ? -2.6 : 2.6; }
    if (e.kind === 'sweeper' && d < 6 && d > 0 && p.grounded) race.jump();
    if ((e.kind === 'ring' || e.kind === 'boost' || e.kind === 'pad' || e.kind === 'tube') && d < 14 && tx === 0) tx = e.x;
  }
  race.steer(tx / (HALF - 0.5));
}

function run(theme, round, seed = 4, easy = false) {
  const r = new Race({ theme, round, seed, easy });
  let t = 0;
  while (r.state !== 'done' && t < 200) { drive(r); r.step(1 / 30); t += 1 / 30; }
  return { r, t };
}

test('three rounds, longer each, with the course elements of the theme', () => {
  assert.equal(ROUNDS.length, 3);
  const alien = buildCourse('alien', 2, 4).els.map((e) => e.kind);
  for (const k of ['gap', 'door', 'meteor']) assert.ok(alien.includes(k), k);
  const rhino = buildCourse('rhino', 2, 4).els.map((e) => e.kind);
  for (const k of ['gap', 'sweeper', 'hammer', 'pad']) assert.ok(rhino.includes(k), k);
  assert.ok(buildCourse('alien', 2, 1).L > buildCourse('alien', 0, 1).L);
});

test('a robot runner finishes every round of both games', () => {
  for (const theme of ['alien', 'rhino']) {
    for (let i = 0; i < 3; i++) {
      const { r, t } = run(theme, i);
      assert.equal(r.state, 'done');
      console.log(`${theme} round ${i + 1}: place ${r.p.place} in ${t.toFixed(0)}s, hits ${r.p.hits}, falls ${r.p.falls}, qualified ${r.qualified}`);
      assert.ok(r.p.place >= 1 && r.p.place <= 6);
    }
  }
});

test('the countdown first, then go; the jetpack has three bursts; a fall puts the runner back on the ledge', () => {
  const r = new Race({ theme: 'alien', round: 0, seed: 2 });
  assert.equal(r.state, 'count');
  for (let i = 0; i < 100 && r.state === 'count'; i++) r.step(1 / 30);
  assert.equal(r.state, 'run');
  r.p.vy = -1;
  assert.ok(r.jetpack());
  assert.equal(r.p.jets, 2);
  const g = r.els.find((e) => e.kind === 'gap');
  r.state = 'run';
  r.p.z = g.z + 1; r.p.y = -3.9; r.p.vy = -10; r.p.grounded = false; r.p.jets = 0; r.p.jet = 0;
  let back = false;
  for (let i = 0; i < 90; i++) { r.step(1 / 30); if (r.p.falls >= 1 && r.p.fall <= 0 && r.p.z <= g.z) back = true; }
  assert.ok(r.p.falls >= 1);
  assert.ok(back);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 3);
});
