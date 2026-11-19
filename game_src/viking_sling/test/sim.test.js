import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Battle, MAX_PULL, normalizeSave, starsFor, recordResult, buyUpgrade, upgradeCost } from '../src/sim.js';
import { World } from '../src/phys.js';
import { LEVELS } from '../src/levels.js';

function playShot(b, deg, pull, tapAt) {
  const a = (deg * Math.PI) / 180;
  b.launch(Math.cos(a) * pull, Math.sin(a) * pull);
  let t = 0;
  while ((b.state === 'fly' || b.state === 'settle') && t < 25) {
    b._step(); t += 1 / 120;
    if (tapAt !== undefined && b.state === 'fly' && t >= tapAt) { b.tap(); tapAt = undefined; }
  }
}

/** A robot: for every viking it tries a grid of angles and powers on copies of the battle and plays the best shot. */
function robot(index) {
  const b = new Battle(index);
  while (b.state === 'aim') {
    let best = null;
    const type = b.currentType;
    const taps = type === 'bomb' ? [undefined, 0.8] : [undefined];
    outer: for (let deg = 8; deg <= 72; deg += 6) for (const f of [0.6, 0.85, 1.0]) for (const tap of taps) {
      const c = b.clone();
      playShot(c, deg, f * MAX_PULL, tap);
      const score = (c.state === 'won' ? 1000 : 0) + (c.goblinsTotal - c.goblinsLeft) * 10 + c.broken * 0.1;
      if (!best || score > best.score) best = { score, deg, f, tap };
      if (c.state === 'won') break outer;
    }
    playShot(b, best.deg, best.f * MAX_PULL, best.tap);
  }
  return b;
}

test('there are at least eight levels and the last one has a boss', () => {
  assert.ok(LEVELS.length >= 8);
  assert.ok(LEVELS[LEVELS.length - 1].goblins.some((g) => g.k === 'boss'));
  for (const l of LEVELS) { assert.ok(l.goblins.length > 0); assert.ok(l.vikings.length >= 3); }
});

test('every fort stands still for 5 seconds with no input (sleeping off: the strictest case)', () => {
  LEVELS.forEach((lv, i) => {
    const b = new Battle(i, { noSleep: true });
    const before = b.world.bodies.map((o) => [o.x, o.y, o.a]);
    const n = b.world.bodies.length;
    b.run(5);
    assert.equal(b.world.bodies.length, n, `level ${i + 1}: something broke`);
    assert.equal(b.goblinsLeft, b.goblinsTotal, `level ${i + 1}: a goblin fell`);
    assert.equal(b.state, 'aim');
    let drift = 0;
    b.world.bodies.forEach((o, k) => { drift = Math.max(drift, Math.hypot(o.x - before[k][0], o.y - before[k][1]), Math.abs(o.a - before[k][2]) * 1.5); });
    assert.ok(drift < 0.35, `level ${i + 1} drifted ${drift.toFixed(3)}`);
  });
});

test('the physics is deterministic', () => {
  const run = () => { const b = new Battle(3, { seed: 5 }); playShot(b, 20, MAX_PULL * 0.8); return b.world.bodies.map((o) => `${o.x.toFixed(5)},${o.y.toFixed(5)}`).join(';'); };
  assert.equal(run(), run());
});

test('a launched viking topples blocks and kills goblins', () => {
  const b = new Battle(0);
  const n = b.world.bodies.length;
  let won = false;
  for (let deg = 6; deg <= 40 && !won; deg += 2) for (const f of [0.6, 0.8, 1]) {
    const c = b.clone(); playShot(c, deg, MAX_PULL * f);
    if (c.goblinsLeft < c.goblinsTotal && c.broken > 0) { won = true; assert.ok(c.gold > 0); break; }
  }
  assert.ok(won);
  assert.equal(b.world.bodies.length, n); // the original was untouched by the copies
});

test('a stone block resists a normal viking more than wood does', () => {
  const hit = (mat) => {
    const w = new World(1);
    w.addBox({ x: 30, y: -2, w: 150, h: 4, mat: 'ground', kind: 'ground', static: true });
    const blk = w.addBox({ x: 10, y: 0.75, w: 1.5, h: 1.5, mat, kind: 'block' });
    const v = w.addCircle({ x: 5, y: 0.75, r: 0.46, kind: 'viking', mat: 'viking', mass: 2.8 });
    v.vx = 20;
    for (let i = 0; i < 240; i++) w.step();
    return blk.alive ? blk.hp / blk.maxHp : 0;
  };
  assert.ok(hit('wood') < hit('stone'));
  assert.ok(hit('ice') <= hit('wood'));
});

test('the robot wins at least 7 levels, including the boss fortress, within a bounded search', { timeout: 600000 }, () => {
  let won = 0; let boss = false;
  const order = [LEVELS.length - 1, ...LEVELS.map((_, i) => i).slice(0, -1)];
  for (const i of order) {
    const b = robot(i);
    if (b.state === 'won') { won++; if (i === LEVELS.length - 1) boss = true; assert.ok(b.stars >= 1); }
    if (won >= 8 && boss) break;
  }
  assert.ok(won >= 7, `only ${won} won`);
  assert.ok(boss, 'boss fortress not won');
});

test('stars depend on spare vikings', () => {
  assert.equal(starsFor(2, 4), 3); assert.equal(starsFor(1, 4), 2); assert.equal(starsFor(0, 4), 1);
  assert.equal(starsFor(1, 3), 2); assert.equal(starsFor(2, 3), 3);
});

test('save normalisation survives junk and shop works', () => {
  assert.deepEqual(normalizeSave(null).stars, {});
  const s = normalizeSave({ unlocked: 'x', stars: { 1: 9, 2: 3, 99: 2, a: 1 }, gold: -5, up: { power: 7, extra: 'q' }, muted: 1 });
  assert.equal(s.stars[1], undefined); assert.equal(s.stars[2], 3); assert.equal(s.gold, 0); assert.equal(s.up.power, 3); assert.equal(s.up.extra, 0);
  assert.ok(s.unlocked >= 3); assert.equal(s.muted, true);
  const t = normalizeSave({ gold: 70 });
  assert.equal(buyUpgrade(t, 'extra'), false);
  assert.equal(buyUpgrade(t, 'power'), true); assert.equal(t.gold, 10); assert.equal(t.up.power, 1);
  assert.equal(upgradeCost(normalizeSave({ up: { power: 3 } }), 'power'), null);
  recordResult(t, 0, { won: true, stars: 2, gold: 40 });
  assert.equal(t.stars[1], 2); assert.equal(t.unlocked, 2); assert.equal(t.gold, 50);
  recordResult(t, 0, { won: true, stars: 1, gold: 0 });
  assert.equal(t.stars[1], 2);
});

test('upgrades add vikings', () => {
  const b = new Battle(0, { extra: 2 });
  assert.equal(b.queue.length, LEVELS[0].vikings.length + 2);
});
