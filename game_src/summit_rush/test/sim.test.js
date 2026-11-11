import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Race, COURSES, LANES, HALF, normalizeSave, layCourse } from '../src/sim.js';

/** A careful robot: steps away from anything rolling at it, otherwise runs to crystals, pads and orbs. */
function robot(race) {
  const me = race.me;
  const threat = race.hazards.filter((h) => h.s > me.s - 0.5 && h.s - me.s < 22 && Math.abs(h.x - me.x) < h.half + 1.1).sort((a, b) => a.s - b.s)[0];
  if (threat) {
    const free = LANES.filter((l) => race.hazards.every((h) => !(h.s > me.s - 1 && h.s - me.s < 24 && Math.abs(h.x - l) < h.half + 0.9)));
    if (free.length) race.steer(free.sort((a, b) => Math.abs(a - me.x) - Math.abs(b - me.x))[0]);
    return;
  }
  const want = [...race.lay.orbs.filter((o) => !o.got), ...race.lay.pads, ...race.lay.crystals.filter((c) => !c.got)].filter((o) => o.s > me.s + 1 && o.s < me.s + 12)
    .filter((o) => race.hazards.every((h) => !(h.s > me.s - 1 && h.s - me.s < 30 && Math.abs(h.x - o.x) < h.half + 1.2)))
    .sort((a, b) => a.s - b.s)[0];
  if (want) race.steer(want.x);
}

function play(ci, opts, steer = robot, maxT = 200) {
  const r = new Race(ci, opts);
  const seen = new Set();
  for (let i = 0; i < maxT * 30 && (r.state === 'count' || r.state === 'run'); i++) {
    steer(r);
    for (const e of r.step(1 / 30)) seen.add(e.type);
  }
  return { r, seen };
}

test('a 3-2-1 countdown, then GO', () => {
  const r = new Race(0, { seed: 3 });
  const counts = [];
  let go = false;
  for (let i = 0; i < 120; i++) for (const e of r.step(1 / 30)) { if (e.type === 'count') counts.push(e.n); if (e.type === 'go') go = true; }
  assert.deepEqual(counts, [2, 1]);
  assert.ok(go);
  assert.equal(r.state, 'run');
});

test('a careful robot reaches the summit in time on every course, in the top two', () => {
  for (let ci = 0; ci < COURSES.length; ci++) {
    for (const seed of [1, 2, 3, 4]) {
      const { r, seen } = play(ci, { seed });
      assert.equal(r.state, 'won', `course ${ci + 1} seed ${seed}: ${r.state} at ${Math.round(r.me.s)}/${r.course.len}, lives ${r.me.lives}`);
      assert.ok(r.place <= 2, `course ${ci + 1} seed ${seed} place ${r.place}`);
      assert.ok(seen.has('crystal'));
      assert.ok(r.me.score > 0);
    }
  }
});

test('standing still in the middle gets hit: a wipeout costs a heart and ground; three hits end the race', () => {
  const { r, seen } = play(1, { seed: 5 }, (race) => race.steer(race.me.x));
  assert.ok(seen.has('wipeout'));
  assert.ok(r.state === 'out' || r.state === 'won' || r.state === 'timeup');
  if (r.state === 'out') assert.equal(r.me.lives, 0);
});

test('easy mode (age 4): hits cost no heart', () => {
  const { r, seen } = play(1, { seed: 5, easy: true }, (race) => race.steer(race.me.x));
  assert.ok(seen.has('wipeout'));
  assert.equal(r.me.lives, 3);
  assert.notEqual(r.state, 'out');
});

test('a wipeout puts the runner on the ground, pushes them back, then they get up', () => {
  const r = new Race(0, { seed: 1 });
  r.state = 'run';
  r.me.s = 100;
  r.hazards.push({ id: 99, kind: 'boulder', s: 100.2, x: r.me.x, v: 0, r: 1, half: 1, roll: 0 });
  const ev = r.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'wipeout'));
  assert.ok(r.me.s < 95);
  assert.equal(r.me.lives, 2);
  const s0 = r.me.s;
  for (let i = 0; i < 20; i++) r.step(1 / 30);
  assert.equal(r.me.s, s0, 'lies still while down');
  for (let i = 0; i < 40; i++) r.step(1 / 30);
  assert.ok(r.me.s > s0, 'up and running again');
});

test('a shield takes one hit', () => {
  const r = new Race(0, { seed: 1 });
  r.state = 'run';
  r.me.s = 100;
  r.me.shield = 5;
  r.hazards.push({ id: 99, kind: 'snowball', s: 100.2, x: r.me.x, v: 0, r: 1, half: 1, roll: 0 });
  const ev = r.step(1 / 30);
  assert.ok(ev.some((e) => e.type === 'blocked'));
  assert.equal(r.me.lives, 3);
  assert.equal(r.me.down, 0);
});

test('boost pads and tailwind make the runner faster', () => {
  const a = new Race(0, { seed: 1 });
  a.state = 'run';
  a.me.s = 10;
  a.me.boost = 1.5;
  a.lay.crystals.length = 0;
  a.step(0.1);
  const b = new Race(0, { seed: 1 });
  b.state = 'run';
  b.me.s = 10;
  b.lay.crystals.length = 0;
  b.step(0.1);
  assert.ok(a.me.s - 10 > (b.me.s - 10) * 1.4);
});

test('the course: crystals inside the run, orbs of both kinds, pads', () => {
  for (const c of COURSES) {
    const l = layCourse(c, 7);
    assert.ok(l.crystals.length > 40);
    for (const cr of l.crystals) assert.ok(Math.abs(cr.x) <= HALF);
    assert.ok(l.orbs.some((o) => o.kind === 'tailwind') && l.orbs.some((o) => o.kind === 'shield'));
    assert.equal(l.pads.length, c.pads);
  }
});

test('progress is cleaned when loaded', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, best: {}, crystals: 0, muted: false });
  assert.deepEqual(normalizeSave({ unlocked: 9, best: { 1: 2, 2: 7 }, crystals: -3, muted: 1 }), { unlocked: 3, best: { 1: 2 }, crystals: 0, muted: true });
});
