import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Defense, LEVELS, HERO, HALF_W, WALL_Z, KINDS, normalizeSave, waveOf } from '../src/sim.js';

/** A robot: aims at the enemy closest to the wall (or the octopus), picks repair when hurt, else shell / whirl / spread. */
function play(d) {
  let t = 0;
  while (d.state === 'play' && t < 600) {
    if (d.choosing) {
      const order = d.wall < d.wallMax * 0.5 ? ['repair', 'shell', 'whirl', 'spread', 'rapid'] : ['shell', 'spread', 'whirl', 'rapid', 'repair'];
      d.choose(order.find((id) => d.choosing.includes(id)));
    }
    // like a child: looks again only now and then, and the finger is not exact
    d._look = (d._look ?? 0) - 1 / 30;
    if (d._look <= 0) {
      d._look = 0.45;
      let target = null;
      for (const e of d.enemies) if (!target || e.z > target.z) target = e;
      const wobble = (Math.sin(t * 7.3) + Math.sin(t * 3.1)) * 0.12;
      if (target) d.aimAt(target.x, target.z);
      else if (d.boss) d.aimAt(d.boss.x, d.boss.z);
      d.setAim(d.aim + wobble);
    }
    d.step(1 / 30);
    t += 1 / 30;
  }
  return t;
}

test('a robot defends every level and beats the octopus', () => {
  for (const [i, lv] of LEVELS.entries()) {
    let won = 0;
    const lines = [];
    for (let seed = 1; seed <= 3; seed++) {
      const d = new Defense({ level: i, seed, up: { power: Math.min(5, i), wall: Math.min(5, i), pearl: Math.min(5, Math.floor(i / 2)) } }); // the shop upgrades a child has bought by then
      const t = play(d);
      if (d.state === 'won') won++;
      lines.push(`${d.state} ${Math.round(t)}s wall ${Math.round(d.wall)}/${d.wallMax} xpLv ${d.xpLevel} kills ${d.kills}`);
    }
    console.log(`level ${lv.id}: ${won}/3 | ${lines.join(' | ')}`);
    assert.ok(won >= 2, `level ${lv.id} too hard for the robot`);
  }
});

test('nobody shooting: the fortress falls (the enemies are a real threat)', () => {
  const d = new Defense({ level: 0, seed: 2 });
  d.fireEvery = 1e9;
  let t = 0;
  while (d.state === 'play' && t < 400) { d.step(1 / 30); t += 1 / 30; }
  assert.equal(d.state, 'lost');
});

test('level up pauses and offers three different powers; repair is offered when the wall is hurt', () => {
  const d = new Defense({ level: 0, seed: 4 });
  d.wall = 30;
  d._gainXp(100);
  assert.equal(d.choosing.length, 3);
  assert.equal(new Set(d.choosing).size, 3);
  assert.ok(d.choosing.includes('repair'));
  const before = d.time;
  d.step(0.5);
  assert.equal(d.time, before, 'the game waits while choosing');
  d.choose('repair');
  assert.equal(d.wall, 65);
  assert.equal(d.choosing, null);
});

test('the spinning shell bounces off the coral walls and hits enemies', () => {
  const d = new Defense({ level: 0, seed: 5 });
  d.fireEvery = 1e9;
  d.spawns = [];
  d._addShell();
  const s = d.shells[0];
  s.vx = 9;
  s.vz = 0;
  s.x = HALF_W - 1;
  s.z = -6;
  const e = d._enemy('puffer', -3, -6);
  e.hp = 99;
  let bounced = false;
  for (let i = 0; i < 60; i++) for (const ev of d.step(1 / 30)) if (ev.type === 'bounce') bounced = true;
  assert.ok(bounced);
  assert.ok(e.hp < 99, 'the shell hit the puffer');
  assert.ok(Math.abs(s.x) <= HALF_W);
});

test('the whirlpool pulls enemies together and hurts them', () => {
  const d = new Defense({ level: 0, seed: 6 });
  d.fireEvery = 1e9;
  d.spawns = [];
  d.whirlLevel = 1;
  d.whirlT = 0;
  const a = d._enemy('puffer', -1.2, -12);
  const b = d._enemy('puffer', 1.2, -12);
  a.hp = b.hp = 50;
  d.step(1 / 30);
  assert.equal(d.whirls.length, 1);
  const gap0 = Math.abs(a.x - b.x);
  for (let i = 0; i < 40; i++) d.step(1 / 30);
  assert.ok(Math.abs(a.x - b.x) < gap0, 'pulled together');
  assert.ok(a.hp < 50 && b.hp < 50, 'and hurt');
});

test('an enemy reaching the wall costs wall, depending on its kind', () => {
  const d = new Defense({ level: 0, seed: 7 });
  d.fireEvery = 1e9;
  d.spawns = [];
  d._enemy('puffer', 0, WALL_Z - 0.86);
  d.step(1 / 30);
  assert.equal(d.wall, d.wallMax - KINDS.puffer.dmg);
});

test('aim stays forward, shots stay in the corridor, the easy mode is gentler', () => {
  const d = new Defense({ level: 0, seed: 8 });
  d.aimAt(HERO.x - 100, HERO.z);
  assert.ok(d.aim >= -1.25);
  for (let i = 0; i < 200; i++) { d.step(1 / 30); for (const s of d.shots) assert.ok(Math.abs(s.x) <= HALF_W + 1); }
  const e = new Defense({ level: 0, easy: true });
  assert.ok(e.wallMax > d.wallMax && e.speedMul < 1);
  assert.ok(waveOf(4, 2, () => 0.5).length > waveOf(0, 0, () => 0.5).length);
});

test('damaged saves load safely', () => {
  for (const bad of [null, 3, 'x', { unlocked: 77, stars: { 1: 9 }, coins: -5, up: { power: 99, wall: 'a' } }]) {
    const s = normalizeSave(bad);
    assert.ok(s.unlocked >= 1 && s.unlocked <= LEVELS.length);
    assert.ok(s.coins >= 0);
    for (const v of Object.values(s.up)) assert.ok(v >= 0 && v <= 5);
  }
});
