import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Trip, LEVELS, COLS, normalizeSave } from '../src/sim.js';

/** Is it safe to stand on row r at column x for the next `secs`? */
function safe(trip, r, x, secs = 0.7) {
  const row = trip.row(r);
  if (row.type === 'road') return row.items.every((it) => { const dx = (x - it.x) * row.dir; if (it.stop && it.v < 0.6) return Math.abs(dx) > it.len / 2 + 0.2; return dx < -(it.len / 2 + 0.6) || dx > it.len / 2 + 0.4 + it.v * secs; });
  if (row.type === 'river' || row.type === 'lily') return row.items.some((it) => Math.abs(x + (row.dir || 0) * (row.speed || 0) * 0.16 - it.x) < it.len / 2 - 0.1);
  if (row.type === 'rail') return row.train.state === 'wait' && row.train.t > 1.2;
  return true;
}

/** A robot fox: fetches cubs and berries on the way, waits for gaps in the traffic, rides logs. */
function think(trip) {
  const f = trip.fox;
  if (f.hop > 0 || f.bump > 0 || trip.state !== 'play') return;
  const x = Math.round(f.x);
  const goals = [...trip.cubs.filter((c) => !c.found).map((c) => ({ r: c.r0, x: c.x0 })), ...trip.berries.filter((b) => !b.taken)].sort((a, b) => a.r - b.r);
  const goal = goals.find((g) => g.r >= f.r) ?? goals[0] ?? { r: trip.den, x: 0 };
  const row = trip.row(f.r);
  const danger = !safe(trip, f.r, f.x, 0.5);
  if (goal.r === f.r) {
    if (goal.x !== x && !(row.type === 'river')) trip.hop(goal.x > x ? 'right' : 'left');
    return;
  }
  const dir = goal.r > f.r ? 'up' : 'down';
  const nr = f.r + (dir === 'up' ? 1 : -1);
  if (safe(trip, nr, f.x)) { trip.hop(dir); return; }
  // lily pads: shuffle sideways to a column with a pad ahead
  const nrow = trip.row(nr);
  if (nrow.type === 'lily' && row.type !== 'river') {
    const pad = nrow.items.reduce((a, b) => (Math.abs(b.x - x) < Math.abs(a.x - x) ? b : a));
    if (pad.x !== x) { trip.hop(pad.x > x ? 'right' : 'left'); return; }
  }
  // in danger where we stand: step back
  if (danger) {
    const back = f.r + (dir === 'up' ? -1 : 1);
    if (back >= 0 && safe(trip, back, f.x)) trip.hop(dir === 'up' ? 'down' : 'up');
  }
}

test('a robot fox brings the cubs home on every level', () => {
  for (const [i, lv] of LEVELS.entries()) {
    let home = 0;
    let allCubs = 0;
    const line = [];
    for (let seed = 1; seed <= 4; seed++) {
      const trip = new Trip({ level: i, seed });
      let t = 0;
      while (trip.state !== 'done' && t < 240) { think(trip); trip.step(1 / 30); t += 1 / 30; }
      const r = trip.result;
      if (trip.state === 'done') home++;
      if (r.cubs === r.of) allCubs++;
      line.push(`${trip.state} ${Math.round(t)}s cubs ${r.cubs}/${r.of} berries ${r.berries} bumps ${r.bumps}`);
    }
    console.log(`level ${lv.id}: home ${home}/4 | ${line.join(' | ')}`);
    assert.ok(home >= 3, `level ${lv.id}: too hard`);
    assert.ok(allCubs >= 2, `level ${lv.id}: cubs left behind`);
  }
});

test('a car bump or a splash puts the fox back on the last safe grass', () => {
  const trip = new Trip({ level: 0, seed: 2 });
  const road = trip.rows.find((r) => r.type === 'road');
  // stand on the grass before the road, then hop right in front of a car
  trip.fox.r = road.r - 1;
  trip.fox.lastSafe = road.r - 1;
  trip.fox.x = 0;
  road.items[0].x = -road.dir * 0.4;
  road.items[0].v = road.speed;
  trip.hop('up');
  let bumped = false;
  for (let i = 0; i < 60; i++) for (const e of trip.step(1 / 30)) if (e.type === 'bump') bumped = true;
  assert.ok(bumped);
  assert.equal(trip.fox.r, road.r - 1);
  const t2 = new Trip({ level: 0, seed: 2 });
  const river = t2.rows.find((r) => r.type === 'river');
  t2.fox.r = river.r - 1;
  t2.fox.lastSafe = river.r - 1;
  t2.fox.x = 0;
  for (const it of river.items) it.x = 8; // no log under her
  t2.hop('up');
  let splash = false;
  for (let i = 0; i < 60; i++) for (const e of t2.step(1 / 30)) if (e.type === 'bump' && e.why === 'splash') splash = true;
  assert.ok(splash);
});

test('cubs join the parade and follow; cars stop for them; the train waits for them', () => {
  const trip = new Trip({ level: 1, seed: 3 });
  const cub = trip.cubs[0];
  trip.fox.r = cub.r0;
  trip.fox.x = cub.x0 + 1 > COLS ? cub.x0 - 1 : cub.x0 + 1;
  trip.hop(trip.fox.x > cub.x0 ? 'left' : 'right');
  let found = false;
  for (let i = 0; i < 20; i++) for (const e of trip.step(1 / 30)) if (e.type === 'cub') found = true;
  assert.ok(found && trip.parade.length === 1);
  // a cub on a road: the car in front of it stops
  const road = trip.rows.find((r) => r.type === 'road');
  cub.r = road.r;
  cub.x = 0;
  trip.trail.push({ x: 0, r: road.r }, { x: 0, r: road.r });
  cub.lag = 0;
  road.items.forEach((it, k) => { it.x = -road.dir * (1.5 + k * 6); it.v = road.speed; });
  for (let i = 0; i < 30; i++) trip.step(1 / 30);
  assert.ok(road.items[0].stop, 'the car stopped for the cub');
  assert.ok(Math.abs(road.items[0].x - cub.x) > road.items[0].len / 2, 'and did not run into it');
  const rail = trip.rows.find((r) => r.type === 'rail');
  rail.train.state = 'wait';
  rail.train.t = 0;
  cub.r = rail.r;
  trip.trail.push({ x: 0, r: rail.r });
  for (let i = 0; i < 60; i++) trip.step(1 / 30);
  assert.notEqual(rail.train.state, 'pass', 'the train waited');
});

test('the den ends the level with stars for the den, every berry and no bumps', () => {
  const trip = new Trip({ level: 0, seed: 1 });
  trip.parade = [...trip.cubs];
  trip.picked = trip.berries.length;
  trip.fox.r = trip.den - 1;
  trip.hop('up');
  let done = false;
  for (let i = 0; i < 200 && !done; i++) for (const e of trip.step(1 / 30)) if (e.type === 'done') done = true;
  assert.ok(done);
  assert.equal(trip.result.stars, 3);
});

test('the fox never leaves the board', () => {
  const trip = new Trip({ level: 2, seed: 5 });
  for (let i = 0; i < 600; i++) {
    if (i % 5 === 0) trip.hop(['left', 'right', 'up', 'down'][i % 4]);
    trip.step(1 / 30);
    assert.ok(trip.fox.r >= 0 && trip.fox.r <= trip.den && Math.abs(trip.fox.x) <= COLS + 0.7);
  }
});

test('damaged saves load safely', () => {
  for (const bad of [null, 1, 'x', { unlocked: 9, stars: { 1: 8 }, berries: -4 }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= LEVELS.length && s.berries >= 0);
  }
});
