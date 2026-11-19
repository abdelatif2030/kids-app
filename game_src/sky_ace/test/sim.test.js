import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Game, autoInput, genStage, stageParams, normalizeSave, buyUpgrade, buySkin, finishStage, starsFor, upgradeCost, STAGES, TELE, W } from '../src/sim.js';

function run(g, maxSec, hook) {
  let t = 0; const log = [];
  while ((g.state === 'play' || g.state === 'clearing' || g.state === 'losing') && t < maxSec) {
    const ev = g.step(1 / 60, autoInput(g));
    for (const e of ev) log.push({ ...e, t: g.time });
    if (hook) hook(g, ev);
    t += 1 / 60;
  }
  return { t, log };
}

test('save normalisation survives garbage and clamps', () => {
  const s = normalizeSave({ coins: -5, stars: { 1: 9, 2: 'x' }, up: { dmg: 99 }, owned: ['gold', 'nope'], skin: 'berry', unlocked: 'zz' });
  assert.equal(s.coins, 0); assert.equal(s.stars[1], 3); assert.equal(s.stars[2], 0);
  assert.equal(s.up.dmg, 5); assert.equal(s.skin, 'sunny'); assert.deepEqual(s.owned, ['sunny', 'gold']);
  assert.equal(s.unlocked, 2);
  assert.equal(normalizeSave(null).coins, 0);
  assert.equal(normalizeSave('x').unlocked, 1);
});

test('stage generator is deterministic and gets harder', () => {
  const a = genStage(3, 1); const b = genStage(3, 1);
  assert.deepEqual(a.spawns, b.spawns);
  for (let n = 2; n <= STAGES; n++) { assert.ok(stageParams(n).bspeed > stageParams(n - 1).bspeed); assert.ok(stageParams(n).bossHp > stageParams(n - 1).bossHp); assert.ok(stageParams(n).waves >= stageParams(n - 1).waves); }
  for (let n = 1; n <= STAGES; n++) { const s = genStage(n); assert.ok(s.spawns.length >= 10); for (const e of s.spawns) { assert.ok(e.x0 > -10 && e.x0 < W + 10); assert.ok(e.y0 < 0); } assert.ok(s.spawns.some((e) => e.drop)); }
});

test('auto fire, fire-rate upgrade and move limits', () => {
  const g = new Game({ stage: 1 });
  g.step(1, { tx: 500, ty: -500 });
  assert.ok(g.p.x <= W - 6 && g.p.y >= g.H * 0.38);
  assert.ok(g.pbul.length > 0);
  const slow = new Game({ stage: 1 }); const fast = new Game({ stage: 1, save: { up: { rate: 5 } } });
  let a = 0; let b = 0;
  for (let i = 0; i < 120; i++) { a += slow.step(1 / 60, {}).filter((e) => e.type === 'shot').length; b += fast.step(1 / 60, {}).filter((e) => e.type === 'shot').length; }
  assert.ok(b > a);
});

test('power-ups work', () => {
  const g = new Game({ stage: 1 });
  const give = (kind) => { g.caps.push({ x: g.p.x, y: g.p.y, kind, age: 0 }); g.step(1 / 60, {}); };
  give('double'); assert.ok(g.p.double > 9);
  const n0 = g.pbul.length; g.pbul = []; g.p.fireT = 0; g.step(1 / 60, {}); assert.equal(g.pbul.length, 4); void n0;
  give('shield'); const hp = g.p.hp; g.p.inv = 0; g.ebul.push({ x: g.p.x, y: g.p.y, vx: 0, vy: 0, r: 2, age: 1 }); g.step(1 / 60, {}); assert.equal(g.p.hp, hp);
  give('heal'); give('x2'); assert.equal(g.mult, 2);
  g.p.hp = 40; give('heal'); assert.equal(g.p.hp, 70);
  // magnet pulls a far coin
  const m = new Game({ stage: 1 }); m.caps.push({ x: m.p.x, y: m.p.y, kind: 'magnet', age: 0 }); m.step(1 / 60, {});
  m.coins.push({ x: m.p.x + 40, y: m.p.y - 20, v: 1, age: 0 }); for (let i = 0; i < 60; i++) m.step(1 / 60, {});
  assert.ok(m.coinsGot >= 1);
  // bomb clears bullets and hurts enemies
  const bg = new Game({ stage: 1 });
  bg.ebul.push({ x: 10, y: 10, vx: 0, vy: 5, r: 2, age: 1 }, { x: 20, y: 30, vx: 0, vy: 5, r: 2, age: 1 });
  bg.enemies.push({ id: 99, type: 'scout', x: 50, y: 40, vx: 0, vy: 0, r: 5, hp: 2, maxHp: 2, age: 0, s: { x0: 50, y0: 40, vy: 0, amp: 0, freq: 1, ph: 0, mode: 'down', fireEvery: 0 }, charge: 0, lock: null, next: 1e9, warnAt: 0, flash: 0, drop: null });
  assert.ok(bg.useBomb()); assert.equal(bg.ebul.length, 0); assert.equal(bg.enemies.filter((e) => e.hp > 0).length, 0);
  assert.equal(bg.useBomb(), false); // cooldown
  const cd = bg.p.bombCd; bg.step(cd + 0.1, {}); assert.equal(bg.p.bombCd, 0);
  assert.ok(new Game({ save: { up: { bomb: 5 } } }).st.bombCd < new Game().st.bombCd);
});

test('score multiplier rules', () => {
  const g = new Game({ stage: 1 });
  const add = () => g.enemies.push({ id: g.nid++, type: 'scout', x: 50, y: 40, vx: 0, vy: 0, r: 5, hp: 1, maxHp: 1, age: 0, s: { x0: 50, y0: 40, vy: 0, amp: 0, freq: 1, ph: 0, mode: 'down', fireEvery: 0 }, charge: 0, lock: null, next: 1e9, warnAt: 0, flash: 0, drop: null });
  add(); g.p.fireT = 99; g._hurt(g.enemies[0], 5); assert.equal(g.score, 100);
  g.caps.push({ x: g.p.x, y: g.p.y, kind: 'x2', age: 0 }); g.step(1 / 60, {});
  g.enemies = []; add(); g._hurt(g.enemies[0], 5); assert.equal(g.score, 300);
  g.caps.push({ x: g.p.x, y: g.p.y, kind: 'x2', age: 0 }); g.step(1 / 60, {}); assert.equal(g.mult, 2); // refreshes, never stacks to 4
  g.p.inv = 0; g._damagePlayer(10, 'bullet', 1); assert.equal(g.mult, 2); // getting hit keeps it
  g.step(10.5, {}); assert.equal(g.mult, 1);
  g.enemies = []; add(); const s0 = g.score; g._hurt(g.enemies[0], 5); assert.equal(g.score - s0, 100);
});

test('enemy fire is announced >= 0.5 s and never an instant hit', () => {
  let fires = 0; let hits = 0;
  for (const st of [2, 4, 6, 8]) {
    const g = new Game({ stage: st });
    // a still player: stays in the middle and takes what comes
    let t = 0; const warned = new Map();
    while (g.state === 'play' && t < 90) {
      const ev = g.step(1 / 60, { tx: 50, ty: g.H - 30 });
      for (const e of ev) {
        if (e.type === 'warn') warned.set(e.id, g.time);
        if (e.type === 'fire') { fires++; assert.ok(e.lead >= 0.5, `lead ${e.lead}`); assert.ok(e.lead >= TELE - 0.02); }
        if (e.type === 'hit' && e.src === 'bullet') { hits++; assert.ok(e.age >= 0.35, `bullet age ${e.age}`); }
      }
      t += 1 / 60;
    }
  }
  assert.ok(fires > 10); assert.ok(hits > 0);
});

test('boss has three phases, a curtain with a wide gap, and dies', () => {
  const g = new Game({ stage: 5 });
  g.si = g.spawns.length; g.enemies = []; g.step(2, {}); g.step(30, {});
  assert.ok(g.boss);
  g.boss.y = g.H * 0.19; g.boss.entered = true; g.boss.cd = 99;
  const phases = [];
  for (let i = 0; i < 3; i++) {
    g.boss.hp = g.boss.maxHp * [0.6, 0.3, 0.01][i] + 0.5; g.boss.inv = 0; g._hurtBoss(g.boss, 1);
    phases.push(g.boss.phase);
  }
  assert.deepEqual(phases, [1, 2, 2]);
  g.ebul = []; g.boss.pending = 'curtain'; g.boss.gap = 50; g.boss.lock = null; g._bossFire(g.boss);
  const xs = g.ebul.map((b) => b.x).sort((a, b) => a - b);
  let gap = 0; for (let i = 1; i < xs.length; i++) gap = Math.max(gap, xs[i] - xs[i - 1]);
  assert.ok(gap >= 24, `gap ${gap}`);
  g.boss.inv = 0; g._hurtBoss(g.boss, 9999);
  assert.equal(g.boss.hp, 0); assert.equal(g.state, 'clearing');
  g.step(3, {}); assert.equal(g.state, 'clear'); assert.ok(g.result.won);
});

test('a robot dodges and clears all 8 stages including bosses', () => {
  let save = normalizeSave(null);
  for (let st = 1; st <= STAGES; st++) {
    const g = new Game({ stage: st, save });
    const { t } = run(g, 260);
    console.log(`stage ${st}: ${g.state} in ${t.toFixed(0)}s hp ${Math.round(g.p.hp)} score ${g.score} coins ${g.coinsGot} stars ${g.result && g.result.stars} bombs ${g.bombs}`);
    assert.equal(g.state, 'clear', `stage ${st} ended ${g.state}`);
    assert.ok(g.p.hp > 0); assert.ok(g.result.stars >= 1);
    save = finishStage(save, st, g.result);
  }
  assert.equal(save.unlocked, STAGES);
});

test('a player who never moves is hurt on a hard stage', () => {
  const g = new Game({ stage: 8 });
  let t = 0; while (g.state === 'play' && t < 120) { g.step(1 / 60, {}); t += 1 / 60; }
  assert.ok(g.p.hp < g.p.maxHp);
});

test('stars, upgrades and skins economy', () => {
  assert.equal(starsFor(1), 3); assert.equal(starsFor(0.5), 2); assert.equal(starsFor(0.1), 1);
  let s = normalizeSave({ coins: 100 });
  assert.equal(buyUpgrade(s, 'dmg').coins, 60);
  assert.equal(buyUpgrade(normalizeSave({ coins: 10 }), 'dmg'), null);
  assert.equal(buySkin(s, 'gold'), null);
  s = buySkin({ ...s, coins: 500 }, 'gold'); assert.equal(s.skin, 'gold'); assert.equal(s.coins, 100);
  assert.equal(buySkin(s, 'gold'), null);
  let m = normalizeSave({ coins: 9999 }); for (let i = 0; i < 6; i++) m = buyUpgrade(m, 'hp') || m;
  assert.equal(m.up.hp, 5); assert.equal(upgradeCost(m, 'hp'), null);
  const f = finishStage(normalizeSave(null), 1, { won: true, stars: 2, score: 500, coins: 30 });
  assert.equal(f.coins, 30); assert.equal(f.unlocked, 2); assert.equal(f.stars[1], 2);
  assert.equal(finishStage(f, 1, { won: true, stars: 1, score: 10, coins: 0 }).stars[1], 2);
  assert.equal(finishStage(normalizeSave(null), 1, { won: false, stars: 0, score: 0, coins: 5 }).unlocked, 1);
});
