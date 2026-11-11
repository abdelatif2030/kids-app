import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Fight, STAGES, ARENA, normalizeSave } from '../src/sim.js';

/** A robot samurai: walks to the nearest ninja, dashes away from swings and the oni's attacks, dashes through the
 * oni when it is tired. */
function robot(f) {
  const p = f.p;
  const b = f.boss;
  const danger = f.enemies.find((e) => e.state === 'wind' && e.kind !== 'thrower' && Math.hypot(e.x - p.x, e.z - p.z) < 2.4);
  if (danger && p.dashCd <= 0) {
    const dx = p.x - danger.x;
    const dz = p.z - danger.z;
    f.dash(-dz + dx * 0.5 - p.x * 0.15, dx + dz * 0.5 - p.z * 0.15);
    return { x: 0, z: 0 };
  }
  if (b && b.hp > 0) {
    const dx = b.x - p.x;
    const dz = b.z - p.z;
    const d = Math.hypot(dx, dz);
    if (b.state === 'slamWind' && Math.hypot(p.x - b.ax, p.z - b.az) < b.ar + 0.6) {
      const ax = p.x - b.ax || 0.3;
      const az = p.z - b.az || 0.3;
      if (p.dashCd <= 0) f.dash(ax - p.x * 0.3, az - p.z * 0.3);
      return { x: ax, z: az };
    }
    if (b.state === 'sweepWind' && d < b.ar + 0.8) return { x: -dx, z: -dz };
    if (b.state === 'chargeWind' || b.state === 'charge') {
      // step out of the charge line
      const side = b.ax * (p.z - b.z) - b.az * (p.x - b.x) > 0 ? 1 : -1;
      return { x: -b.az * side, z: b.ax * side };
    }
    if (b.state === 'tired' && p.dashCd <= 0 && d < 7) f.dash(dx, dz);
    return d > 2.4 ? { x: dx, z: dz } : { x: 0, z: 0 };
  }
  let best = null;
  for (const e of f.enemies) if (!best || Math.hypot(e.x - p.x, e.z - p.z) < Math.hypot(best.x - p.x, best.z - p.z)) best = e;
  if (!best) return { x: -p.x * 0.3, z: -p.z * 0.3 };
  const dx = best.x - p.x;
  const dz = best.z - p.z;
  const d = Math.hypot(dx, dz);
  if (best.kind === 'thrower' && d > 3 && p.dashCd <= 0 && d < 7) { f.dash(dx, dz); return { x: 0, z: 0 }; }
  return d > 1.6 ? { x: dx, z: dz } : { x: 0, z: 0 };
}

for (const [i, st] of STAGES.entries()) {
  test(`a robot samurai wins stage ${st.id}`, () => {
    let won = null;
    for (let seed = 1; seed <= 4 && !won; seed++) {
      const f = new Fight({ stage: i, seed });
      let t = 0;
      let bossT = null;
      while (t < 400 && f.state !== 'won' && f.state !== 'down') {
        f.step(1 / 30, robot(f));
        if (f.boss && bossT === null) bossT = t;
        t += 1 / 30;
      }
      console.log(`stage ${st.id} seed ${seed}: ${f.state} at ${Math.round(t)} s, boss at ${Math.round(bossT ?? -1)} s, hp ${f.p.hp}, kills ${f.kills}, best combo ${f.bestCombo}`);
      if (f.state === 'won') won = f;
    }
    assert.ok(won, 'the robot could not win');
    assert.ok(won.result.stars >= 1);
  });
}

test('a swing that reaches the samurai costs a heart; a dash dodges it', () => {
  const f = new Fight({ stage: 0 });
  f.p.x = 0;
  f.p.z = 0;
  f.enemies.push({ id: 99, kind: 'ninja', x: 0, z: -1.2, hp: 1, state: 'wind', t: 0.01, face: 0, wx: 0, wz: 1, flash: 0, side: 1 });
  f.p.slashCd = 5; // no sword this time
  f.step(0.05);
  assert.equal(f.p.hp, f.maxHp - 1);
  const g = new Fight({ stage: 0 });
  g.p.x = 0;
  g.p.z = 0;
  g.p.slashCd = 5;
  g.enemies.push({ id: 99, kind: 'ninja', x: 0, z: -1.2, hp: 1, state: 'wind', t: 0.05, face: 0, wx: 0, wz: 1, flash: 0, side: 1 });
  g.dash(1, 0);
  g.step(0.03);
  g.step(0.03);
  assert.equal(g.p.hp, g.maxHp);
});

test('the sword swings by itself at a ninja in reach and a combo grows', () => {
  const f = new Fight({ stage: 0 });
  f.p.x = 0;
  f.p.z = 0;
  for (let i = 0; i < 3; i++) f.enemies.push({ id: 50 + i, kind: 'ninja', x: 1.2, z: 0, hp: 1, state: 'run', t: 1, face: 0, wx: 0, wz: 0, flash: 0, side: 1 });
  let kills = 0;
  for (let i = 0; i < 40; i++) for (const e of f.step(0.05)) if (e.type === 'kill') kills++;
  assert.equal(kills, 3);
  assert.ok(f.combo >= 2);
});

test('a dash cuts every ninja on its path', () => {
  const f = new Fight({ stage: 0 });
  f.p.x = -4;
  f.p.z = 0;
  f.p.slashCd = 5;
  for (let i = 0; i < 3; i++) f.enemies.push({ id: 60 + i, kind: 'ninja', x: -2 + i * 1.5, z: 0.3, hp: 1, state: 'rest', t: 5, face: 0, wx: 0, wz: 0, flash: 0, side: 1 });
  f.dash(1, 0);
  let kills = 0;
  for (let i = 0; i < 10; i++) for (const e of f.step(0.03)) if (e.type === 'kill' && e.how === 'dash') kills++;
  assert.equal(kills, 3);
});

test('nobody leaves the courtyard', () => {
  const f = new Fight({ stage: 2, seed: 3 });
  for (let i = 0; i < 2000; i++) {
    f.step(1 / 30, { x: 1, z: 0.4 });
    if (i % 50 === 0) f.dash(1, 1);
    assert.ok(Math.hypot(f.p.x, f.p.z) <= ARENA);
    for (const e of f.enemies) assert.ok(Math.hypot(e.x, e.z) <= ARENA + 0.01);
    if (f.state === 'down') break;
  }
});

test('younger children get more hearts and slower ninjas', () => {
  const f = new Fight({ stage: 0, easy: true });
  assert.ok(f.maxHp > new Fight({ stage: 0 }).maxHp);
  assert.ok(f.speedMul < 1);
});

test('damaged saves load safely', () => {
  for (const bad of [null, 7, 'x', { unlocked: 99, stars: { 1: 9, 2: 2 }, best: -3 }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= STAGES.length);
    for (const v of Object.values(s.stars)) assert.ok(v >= 1 && v <= 3);
    assert.ok(s.best >= 0);
  }
});

test('standing still is not enough: the ninjas win in the end', () => {
  const f = new Fight({ stage: 1, seed: 2 });
  f.p.slashCd = 1e9;
  for (let i = 0; i < 30 * 200 && f.state !== 'down'; i++) { f.p.slashCd = 9; f.step(1 / 30); }
  assert.equal(f.state, 'down');
});
