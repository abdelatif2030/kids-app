import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Defense, LEVELS, HERO, HALF_W, WALL_Z, KINDS, normalizeSave, waveOf, guideEntries } from '../src/sim.js';

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

test('Red Sea Reef Fort anchor: the original seven Red Sea sites keep ids/boss numbers', () => {
  assert.deepEqual(LEVELS.slice(0, 7).map((l) => l.id), [1, 2, 3, 4, 5, 6, 7]);
  assert.deepEqual(LEVELS.slice(0, 7).map((l) => l.boss), [40, 60, 80, 100, 130, 160, 200]);
  assert.match(LEVELS[2].en, /Ras Mohammed/);
  assert.match(LEVELS[4].ar, /الثقب الأزرق/);
});

test('Batch F: ten reefs — three new southern sites continue the tour and the boss curve', () => {
  assert.equal(LEVELS.length, 10);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.deepEqual(LEVELS.map((l) => l.boss), [40, 60, 80, 100, 130, 160, 200, 240, 280, 320]);
  assert.match(LEVELS[7].en, /Marsa Alam/);
  assert.match(LEVELS[8].en, /Elphinstone/);
  assert.match(LEVELS[9].en, /Brothers/);
  // every reef carries an album fact in both languages
  for (const lv of LEVELS) {
    assert.ok(lv.fact.ar.length > 10 && lv.fact.en.length > 10, `fact for ${lv.en}`);
    assert.ok(lv.fish, `fish for ${lv.en}`);
  }
  // the new reefs differ in more than boss HP: later waves are bigger and denser
  const count = (i) => [0, 1, 2].reduce((n, w) => n + waveOf(i, w, () => 0.5).length, 0);
  assert.ok(count(9) > count(7) && count(7) > count(6), 'wave size keeps growing into the new reefs');
});

test('Batch F: the unlock chain walks all ten reefs', () => {
  const stars = {};
  for (let done = 0; done < LEVELS.length; done++) {
    const s = normalizeSave({ stars: { ...stars } });
    assert.equal(s.unlocked, Math.min(LEVELS.length, done + 1), `after ${done} wins`);
    stars[done + 1] = 2; // completing reef `done + 1`
  }
  const end = normalizeSave({ stars });
  assert.equal(end.unlocked, LEVELS.length, 'the chain caps at the last reef, never beyond');
  assert.deepEqual(Object.keys(end.stars).map(Number), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('Batch F: a seven-level save migrates cleanly into the ten-reef tour', () => {
  const old = { unlocked: 7, stars: { 1: 3, 2: 2, 3: 3, 4: 1, 5: 2, 6: 3, 7: 1 }, coins: 120, up: { power: 3, wall: 2, pearl: 1 }, muted: true };
  const s = normalizeSave(old);
  assert.deepEqual(s.stars, old.stars, 'every earned star survives');
  assert.equal(s.unlocked, 8, 'Marsa Alam unlocks from the finished Red Sea Deep');
  assert.equal(s.coins, 120);
  assert.deepEqual(s.up, old.up);
  assert.equal(s.muted, true);
  // a finished old campaign (all 7 starred) also opens reef 8, not a lock-up at 7
  assert.equal(normalizeSave({ unlocked: 7, stars: old.stars }).unlocked, 8);
});

test('Batch F: reef-guide album locks every entry until its reef is completed', () => {
  const fresh = guideEntries(null);
  assert.equal(fresh.length, 10);
  assert.ok(fresh.every((e) => !e.unlocked), 'a new child sees ten shadowed entries');
  const mid = guideEntries({ stars: { 1: 1, 3: 2 } });
  assert.deepEqual(mid.map((e) => e.unlocked), [true, false, true, false, false, false, false, false, false, false]);
  const full = guideEntries({ stars: Object.fromEntries(LEVELS.map((l) => [l.id, 1])) });
  assert.ok(full.every((e) => e.unlocked), 'finishing the tour opens the whole album');
  // finishing a reef in a migrated 7-level save unlocks exactly its own entry
  const migrated = guideEntries({ stars: { 7: 3 } });
  assert.equal(migrated[6].unlocked, true);
  assert.equal(migrated[7].unlocked, false);
});

test('Batch F: scripted campaign — first reef to last, the whole tour completes', () => {
  const save = normalizeSave(null);
  const up = { power: 0, wall: 0, pearl: 0 };
  for (const [i, lv] of LEVELS.entries()) {
    assert.ok(i + 1 <= save.unlocked, `reef ${lv.id} is unlocked when its turn comes`);
    let won = false;
    for (let seed = 1; seed <= 3 && !won; seed++) {
      const d = new Defense({ level: i, seed, up: { ...up } });
      play(d);
      won = d.state === 'won';
      if (won) save.stars[lv.id] = Math.max(save.stars[lv.id] ?? 0, d.result.stars);
    }
    assert.ok(won, `campaign stalls at reef ${lv.id} (${lv.en})`);
    // spend the shells the way the shop allows before the next reef
    up.power = Math.min(5, i + 1);
    up.wall = Math.min(5, i + 1);
    up.pearl = Math.min(5, Math.floor((i + 1) / 2));
    const s2 = normalizeSave(save);
    save.unlocked = s2.unlocked;
  }
  assert.equal(Object.keys(save.stars).length, 10, 'all ten reefs starred');
  assert.ok(guideEntries(save).every((e) => e.unlocked), 'the album is complete at the end of the campaign');
});
