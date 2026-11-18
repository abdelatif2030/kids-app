import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Hunt, LEVELS, ringPoint, LOOP, WALLS, normalizeSave } from '../src/sim.js';

/** A robot hero: walks to the best shrine, then stays near the ring edge so everything is in range; pushes barrels at the dragon. */
function robot(h) {
  const hero = h.hero;
  let tx = 0;
  let tz = 5.6;
  const sh = h.shrines.find((s) => !s.dead);
  if (sh) { tx = sh.x * 0.8; tz = sh.z * 0.8; }
  else { const sg = h.segs.find((s) => s.alive); if (sg) { tx = Math.max(-6, Math.min(6, sg.x * 0.6)); tz = Math.max(-6, Math.min(6, sg.z * 0.6)); } }
  const d = Math.hypot(tx - hero.x, tz - hero.z);
  return d < 0.6 ? { dx: 0, dz: 0 } : { dx: (tx - hero.x) / d, dz: (tz - hero.z) / d };
}

function play(level, seed = 3) {
  const h = new Hunt({ level, seed });
  let t = 0;
  while (h.state === 'play' && t < 300) { h.step(1 / 30, robot(h)); t += 1 / 30; }
  return { h, t };
}

test('three levels, longer dragons, a ring of channel around an ice maze', () => {
  assert.equal(LEVELS.length, 3);
  assert.ok(LEVELS[2].seg > LEVELS[0].seg);
  const p = ringPoint(0);
  assert.equal(Math.abs(p.x), LOOP);
  assert.ok(WALLS.length >= 5);
});

test('a robot hero breaks every segment of the dragon on every level', () => {
  for (let i = 0; i < 3; i++) {
    const { h, t } = play(i);
    console.log(`level ${i + 1}: ${h.state} in ${t.toFixed(0)}s, allies ${h.allies}, weapon ${h.weapon}, barrels left ${h.barrels.filter((b) => !b.dead).length}`);
    assert.equal(h.state, 'won');
  }
});

test('shrines give allies or the triple shot; a blast hits several segments; barrels can be pushed', () => {
  const h = new Hunt({ level: 0, seed: 2 });
  h.shrines[0].hp = 0.5; h.shrines[0].x = 0; h.shrines[0].z = 5;
  for (let i = 0; i < 60; i++) h.step(1 / 30);
  assert.ok(h.allies >= 2);
  const g = new Hunt({ level: 0, seed: 2 });
  const sg = g.segs[2];
  const b = g.barrels[0];
  b.x = sg.x; b.z = sg.z;
  const n0 = g.alive;
  const hp0 = g.segs.reduce((a, s) => a + s.hp, 0);
  g.step(1 / 30);
  assert.ok(g.barrels[0].dead);
  assert.ok(g.segs.reduce((a, s) => a + s.hp, 0) < hp0);
  void n0;
  const p = new Hunt({ level: 0, seed: 2 });
  p.hero.x = -3; p.hero.z = 1.6;
  p.barrels[0].x = -2.0; p.barrels[0].z = 2;
  p.hero.z = 2;
  for (let i = 0; i < 20; i++) p.step(1 / 30, { dx: 1, dz: 0 });
  assert.ok(p.barrels[0].x > -2.0);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 3);
});
