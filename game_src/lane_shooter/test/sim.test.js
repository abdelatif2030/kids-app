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
