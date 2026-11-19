import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, buildPath, LEVELS, LANES, HEARTS, isBossLevel, upgradeCost, normalizeSave, robotSteer } from '../src/sim.js';

function play(level, opts = {}) {
  const r = new Run({ level, seed: opts.seed ?? 5, up: opts.up });
  let t = 0;
  while (r.state === 'run' && t < 200) { if (!opts.idle) robotSteer(r); r.step(1 / 30); t += 1 / 30; }
  return r;
}

test('every level has enemy rows, cards and coins in the three lanes, and bosses end chapters', () => {
  for (let i = 0; i < LEVELS; i++) {
    const p = buildPath(i, 5);
    const kinds = new Set(p.things.map((t) => t.kind));
    for (const k of ['enemy', 'card', 'coin']) assert.ok(kinds.has(k), `level ${i + 1} has ${k}`);
    assert.equal(p.things.some((t) => t.kind === 'boss'), isBossLevel(i));
    for (const t of p.things) if (t.kind === 'enemy' || t.kind === 'card') assert.ok(LANES.includes(t.x));
    assert.equal(p.goals.length, 3);
  }
  assert.ok(isBossLevel(3) && isBossLevel(7) && isBossLevel(11) && !isBossLevel(0));
});

test('a sensible player wins every level (weaker creatures absorbed, cards taken) and keeps hearts', () => {
  for (let i = 0; i < LEVELS; i++) {
    const r = play(i);
    assert.equal(r.state, 'won', `level ${i + 1}`);
    assert.ok(r.hearts >= 1 && r.stars >= 1 && r.reward > 0);
  }
});

test('only weaker creatures can be beaten: a stronger one costs a heart and bounces, it never gives power', () => {
  const r = new Run({ level: 0, seed: 1 });
  r.things = [{ id: 1, kind: 'enemy', x: 0, z: 5, power: 50, type: 0 }];
  const p0 = r.power;
  let hurt = 0;
  for (let i = 0; i < 90; i++) for (const e of r.step(1 / 30)) if (e.type === 'hurt') hurt++;
  assert.equal(hurt, 1, 'one hit then a short protection while bouncing');
  assert.equal(r.hearts, HEARTS - 1);
  assert.ok(r.power === p0 && !r.things[0].done);
  const w = new Run({ level: 0, seed: 1 });
  w.things = [{ id: 1, kind: 'enemy', x: 0, z: 5, power: 3, type: 0 }];
  for (let i = 0; i < 90; i++) w.step(1 / 30);
  assert.equal(w.power, 5 + 3, 'absorbed its power');
});

test('cards add or take power, coins are collected, a hero with no hearts stops (try again)', () => {
  const r = new Run({ level: 0, seed: 1 });
  r.things = [{ id: 1, kind: 'card', x: 0, z: 4, v: 6 }, { id: 2, kind: 'card', x: 0, z: 8, v: -3 }, { id: 3, kind: 'coin', x: 0, z: 12, v: 1 }];
  for (let i = 0; i < 150; i++) r.step(1 / 30);
  assert.equal(r.power, 5 + 6 - 3);
  assert.equal(r.coins, 1);
  const d = new Run({ level: 0, seed: 1 });
  d.hearts = 1;
  d.things = [{ id: 1, kind: 'enemy', x: 0, z: 4, power: 99, type: 0 }];
  for (let i = 0; i < 120; i++) d.step(1 / 30);
  assert.equal(d.state, 'lost');
});

test('an idle hero (never steering) still gets somewhere without errors, and the extra-heart upgrade adds hearts', () => {
  const r = play(0, { idle: true });
  assert.ok(['won', 'lost'].includes(r.state));
  assert.equal(new Run({ up: { armor: 2 } }).hearts, HEARTS + 2);
  assert.equal(upgradeCost('armor', 99), null);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, LEVELS);
  assert.deepEqual(normalizeSave({ stars: { 1: 9 } }).stars, {});
});
