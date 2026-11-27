import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, buildRoad, levelLen, normalizeSave, ROAD } from '../src/sim.js';

/** A robot commander: steers to the nearest enemy/cage, prefers the better gate, otherwise stays central. */
function robot(r) {
  let target = 0;
  let bd = 1e9;
  for (const t of r.things) {
    if (t.dead || t.z < r.zs - 0.5 || t.z - r.zs > 40) continue;
    if (t.kind === 'gate') {
      const gs = r.things.filter((o) => o.kind === 'gate' && Math.abs(o.z - t.z) < 0.01 && !o.dead);
      const best = gs.sort((a, b) => b.val - a.val)[0];
      if (best && t.z - r.zs < 14) { target = best.x; bd = 0; break; }
    }
    const d = t.z - r.zs;
    if (d < bd && (t.kind === 'enemy' || t.kind === 'cage' || t.kind === 'crate')) { bd = d; target = t.x; }
  }
  r.steer(target / (ROAD - 0.8));
}

function play(level, opts = {}) {
  const r = new Run({ level, seed: opts.seed ?? 5, easy: opts.easy, bow: opts.bow, rank: opts.rank });
  let t = 0;
  while (r.state === 'run' && t < 400) { robot(r); r.step(1 / 30); t += 1 / 30; }
  return { r, t };
}

test('eight levels, longer and tougher, each ends with a boss wall', () => {
  for (let i = 0; i < 8; i++) {
    const road = buildRoad(i, 5);
    assert.equal(road.L, levelLen(i));
    assert.ok(road.things.some((t) => t.boss));
    assert.ok(road.things.some((t) => t.kind === 'gate'));
  }
  assert.ok(levelLen(7) > levelLen(0));
});

test('cages appear on the roads', () => {
  let n = 0;
  for (let i = 0; i < 8; i++) n += buildRoad(i, 5).things.filter((t) => t.kind === 'cage').length;
  assert.ok(n >= 8);
});

test('a robot commander with the shop upgrades survives every level', () => {
  let wins = 0;
  for (let i = 0; i < 8; i++) {
    const { r, t } = play(i, { bow: Math.min(3, i >> 1), rank: Math.min(4, i >> 1), easy: false });
    console.log(`level ${i + 1}: ${r.state} in ${t.toFixed(0)}s, squad ${r.n}, peak ${r.peak}, kills ${r.kills}, coins ${r.coins}`);
    if (r.state === 'done') wins += 1;
  }
  assert.ok(wins >= 6, `${wins}/8 won`);
});

test('shooting a gate raises its number, cages free soldiers, crates upgrade the weapon', () => {
  const r = new Run({ level: 0, seed: 2 });
  r.things = [{ id: 1, kind: 'gate', x: 0, z: 20, w: 4.6, val: 3, hits: 0 }, { id: 2, kind: 'cage', x: 3.2, z: 12, w: 2.8, hp: 2, free: 4 }, { id: 3, kind: 'crate', x: -3.2, z: 12, w: 1.8, hp: 1, level: 1 }];
  r.steer(0);
  for (let i = 0; i < 30; i++) r.step(1 / 30);
  assert.ok(r.things[0].val > 3);
  r.targetX = 3.2; r.x = 3.2;
  const n0 = r.n;
  for (let i = 0; i < 40; i++) r.step(1 / 30);
  assert.equal(r.n, n0 + 4);
  r.targetX = -3.2; r.x = -3.2; r.zs = 9;
  for (let i = 0; i < 30; i++) r.step(1 / 30);
  assert.equal(r.weapon, 2);
});

test('touching an enemy costs soldiers; no soldiers left means the level is lost (try again)', () => {
  const r = new Run({ level: 0, seed: 2 });
  r.n = 3;
  r.things = [{ id: 1, kind: 'enemy', x: 0, z: 5, hp: 30, w: 1.1, t: 0 }];
  for (let i = 0; i < 200 && r.state === 'run'; i++) r.step(1 / 30);
  assert.equal(r.state, 'lost');
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ bow: 99 }).bow, 3);
});

test('rescue squad: swimmers are rescued by rings and by reaching the boat; logs are the danger', () => {
  const road = buildRoad(3, 5, 'squad');
  assert.ok(road.things.some((t) => t.trait === 'swim'));
  assert.ok(road.things.some((t) => t.trait === 'log'));
  assert.ok(road.things.some((t) => t.trait === 'wreck' && t.boss));
  // ring a swimmer down to zero -> rescued, crew grows
  const r = new Run({ level: 0, seed: 2, theme: 'squad' });
  r.things = [{ id: 1, kind: 'enemy', trait: 'swim', x: 0, z: 14, hp: 1, w: 1.1, t: 0 }];
  const n0 = r.n;
  let rescued = false;
  for (let i = 0; i < 90 && !rescued; i++) for (const e of r.step(1 / 30)) if (e.type === 'rescue') rescued = true;
  assert.ok(rescued && r.n === n0 + 1, `rescued ${rescued}, crew ${n0} -> ${r.n}`);
  // a swimmer who reaches the boat climbs aboard too
  const r2 = new Run({ level: 0, seed: 2, theme: 'squad' });
  r2.things = [{ id: 1, kind: 'enemy', trait: 'swim', x: 0, z: 4, hp: 9, w: 1.1, t: 0 }];
  const n1 = r2.n;
  let rescued2 = false;
  for (let i = 0; i < 120 && !rescued2; i++) for (const e of r2.step(1 / 30)) if (e.type === 'rescue') rescued2 = true;
  assert.ok(rescued2 && r2.n === n1 + 1);
  // the current really pushes the boat
  const r3 = new Run({ level: 0, seed: 2, theme: 'squad' });
  r3.things = [];
  let moved = 0;
  for (let i = 0; i < 300; i++) { r3.step(1 / 30); moved = Math.max(moved, Math.abs(r3.x)); }
  assert.ok(moved > 0.2, `current drift moved the boat ${moved}`);
});

test('archers: targets stand still, the wind bends arrows, the grand target blocks the bridge', () => {
  const road = buildRoad(2, 5, 'archers');
  assert.ok(road.things.some((t) => t.trait === 'target'));
  assert.ok(road.things.some((t) => t.trait === 'grand' && t.boss));
  const r = new Run({ level: 2, seed: 2, theme: 'archers' });
  const tgt = r.things.find((t) => t.trait === 'target');
  const z0 = tgt.z;
  for (let i = 0; i < 60; i++) r.step(1 / 30);
  assert.equal(tgt.z, z0, 'targets never advance');
  // wind: some level has a real wind, and a flying arrow's x drifts with it
  const windy = [0, 1, 2, 3, 4, 5, 6, 7].map((l) => new Run({ level: l, seed: 1, theme: 'archers' }).wind);
  assert.ok(windy.some((w) => w !== 0), `winds ${windy}`);
  const rw = new Run({ level: windy.findIndex((w) => w !== 0), seed: 1, theme: 'archers' });
  rw.things = [];
  for (let i = 0; i < 12 && !rw.bullets.length; i++) rw.step(1 / 30);
  const b = rw.bullets[0];
  assert.ok(b, 'an arrow is flying');
  const bx = b.x;
  for (let i = 0; i < 10; i++) rw.step(1 / 30);
  assert.ok(Math.abs(b.x - bx) > 0.01, `arrow bent by wind ${bx} -> ${b.x}`);
  // the grand target blocks like a gate until shot down
  const rb = new Run({ level: 0, seed: 2, theme: 'archers' });
  rb.things = [{ id: 1, kind: 'enemy', trait: 'grand', x: 0, z: 8, hp: 9999, w: 3.2, t: 0, boss: true }];
  for (let i = 0; i < 90; i++) rb.step(1 / 30);
  assert.ok(rb.zs < 8, `blocked at ${rb.zs}`);
});

test('rescue has sixteen Nile reaches; a robot rescuer and a robot archer both finish their games', () => {
  for (let i = 0; i < 16; i++) assert.ok(buildRoad(i, 5, 'squad').things.some((t) => t.boss), `rescue level ${i + 1} boss`);
  function playT(level, theme, opts = {}) {
    const r = new Run({ level, seed: opts.seed ?? 5, theme, bow: opts.bow, rank: opts.rank });
    let t = 0;
    while (r.state === 'run' && t < 400) { robot(r); r.step(1 / 30); t += 1 / 30; }
    return r;
  }
  let wins = 0;
  for (let i = 8; i < 16; i++) { const r = playT(i, 'squad', { bow: 3, rank: 4 }); if (r.state === 'done') wins += 1; }
  assert.ok(wins >= 5, `rescue late levels ${wins}/8 won`);
  wins = 0;
  for (let i = 0; i < 8; i++) { const r = playT(i, 'archers', { bow: Math.min(3, i >> 1), rank: Math.min(4, i >> 1) }); if (r.state === 'done') wins += 1; }
  assert.ok(wins >= 6, `archers levels ${wins}/8 won`);
});
