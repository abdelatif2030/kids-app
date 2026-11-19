import test from 'node:test';
import assert from 'node:assert/strict';
import { Dino, LEVELS, STAGES, SPECIES, stageOf, zoomFor, toneOf, starsFor, normalizeSave, radiusOf } from '../src/sim.js';

const away = (g, x, z) => { const p = g.player; const dx = p.x - x; const dz = p.z - z; const m = Math.hypot(dx, dz) || 1; return [dx / m, dz / m]; };

function robot(g) {
  const p = g.player; const b = g.boss; let ix = 0; let iz = 0; let pounce = false;
  // dodge the boss telegraphs and fireballs
  if (b && b.tele && b.tele.type === 'stomp') {
    const d = Math.hypot(p.x - b.x, p.z - b.z);
    if (d < b.tele.radius + 3) { const [ax, az] = away(g, b.x, b.z); return { x: ax, z: az, pounce: false }; }
  }
  for (const q of g.projectiles) { if (Math.hypot(q.x - p.x, q.z - p.z) < 6) { const [ax, az] = away(g, q.x, q.z); ix += ax * 0.8 + az * 0.6 * Math.sign(q.vx * (p.z - q.z) - q.vz * (p.x - q.x) || 1) * 0; iz += az * 0.8; } }
  let tx = null; let tz = null; let td = 0;
  if (b && !b.down && p.P > b.power + 1) { tx = b.x; tz = b.z; td = Math.hypot(tx - p.x, tz - p.z); }
  else {
    let best = -1;
    for (const c of g.creatures) {
      if (c.power >= p.P * 0.98) continue;
      const d = Math.hypot(c.x - p.x, c.z - p.z);
      const s = Math.ceil(c.power * 0.5) / (d + 6);
      if (s > best) { best = s; tx = c.x; tz = c.z; td = d; }
    }
  }
  if (tx !== null) { const dx = tx - p.x; const dz = tz - p.z; const m = Math.hypot(dx, dz) || 1; ix += dx / m; iz += dz / m; if (td < 4.5) pounce = true; }
  else { ix += Math.sin(g.time * 0.7); iz += Math.cos(g.time * 0.5); }
  // keep away from stronger hunters
  let threat = false;
  for (const c of g.creatures) {
    if (c.power < p.P || (c.ai !== 'hunter' && c.power < p.P * 1.5)) continue; // small red ones are harmless: only hunters and much bigger things are avoided
    const d = Math.hypot(c.x - p.x, c.z - p.z);
    if (d < 9) { const [ax, az] = away(g, c.x, c.z); ix += ax * (9 - d) * 0.5; iz += az * (9 - d) * 0.5; threat = true; }
  }
  const H = g.L.half; // do not get cornered against the edge by hunters
  if (threat && Math.abs(p.x) > H - 7) ix -= Math.sign(p.x) * 2.5; if (threat && Math.abs(p.z) > H - 7) iz -= Math.sign(p.z) * 2.5;
  return { x: ix, z: iz, pounce };
}

function play(level, seed, easy = false, maxT = 900) {
  const g = new Dino({ level, seed, easy }); const all = []; const ate = [];
  while (!g.done && g.time < maxT) {
    const ev = g.step(1 / 30, robot(g));
    for (const e of ev) { all.push(e); if (e.type === 'eat') ate.push(e); }
  }
  return { g, all, ate };
}

test('robot completes every level incl. the boss and never eats stronger prey', () => {
  for (let lv = 0; lv < LEVELS.length; lv++) {
    for (const seed of [1, 2, 3]) {
      const { g, ate, all } = play(lv, seed);
      assert.ok(g.done && g.won, `level ${lv} seed ${seed} not finished (t=${g.time.toFixed(0)}, P=${g.player.P})`);
      for (const e of ate) assert.ok(e.power < e.P, 'ate a creature that was not weaker');
      if (lv === 2) { assert.ok(all.some((e) => e.type === 'bossDown')); assert.ok(g.player.P > 100); }
    }
  }
});

test('easy mode also completes all levels', () => {
  for (let lv = 0; lv < LEVELS.length; lv++) { const { g } = play(lv, 5, true); assert.ok(g.won, `easy level ${lv}`); }
});

test('evolution thresholds', () => {
  assert.equal(stageOf(2), 0); assert.equal(stageOf(9.9), 0); assert.equal(stageOf(10), 1); assert.equal(stageOf(32), 2); assert.equal(stageOf(70), 3); assert.equal(stageOf(500), 3);
  const g = new Dino({ level: 0, seed: 1 }); g.player.P = 9; g.player.x = 0; g.player.z = 0;
  g.creatures = [{ id: 99, kind: 'compy', power: 3, r: SPECIES.compy.r, ai: 'flee', x: 0, z: 0, face: 0, vx: 0, vz: 0, speed: 0, wa: 0, wt: 5, walk: false, stun: 0, chase: false }];
  const ev = g.step(0.02, {});
  assert.ok(ev.some((e) => e.type === 'eat')); assert.ok(ev.some((e) => e.type === 'evolve' && e.stage === 1)); assert.equal(g.player.stage, 1);
  assert.equal(STAGES.length, 4);
});

test('stronger creature only bumps: costs a little power, never below the start', () => {
  const g = new Dino({ level: 0, seed: 1 }); const p = g.player; p.P = 20;
  g.creatures = [{ id: 99, kind: 'rexJr', power: 40, r: 2, ai: 'hunter', x: 0.5, z: 0, face: 0, vx: 0, vz: 0, speed: 0, wa: 0, wt: 5, walk: false, stun: 0, chase: false }];
  const ev = g.step(0.02, {});
  assert.ok(ev.some((e) => e.type === 'bump')); assert.ok(p.P < 20 && p.P >= 18); assert.ok(g.creatures.filter((c) => !c.alpha).length === 1);
  for (let i = 0; i < 400; i++) g.step(0.05, { x: 0, z: 0 });
  assert.ok(p.P >= g.L.start);
});

test('boss cannot be bitten before you are stronger', () => {
  const g = new Dino({ level: 2, seed: 1 }); const p = g.player; g.creatures = []; p.P = 80;
  p.x = g.boss.x + 3; p.z = g.boss.z;
  const ev = g.step(0.02, {});
  assert.ok(!ev.some((e) => e.type === 'bossBite')); assert.ok(ev.some((e) => e.type === 'bump'));
  const g2 = new Dino({ level: 2, seed: 1 }); g2.creatures = []; g2.player.P = 110; g2.player.x = g2.boss.x + 3; g2.player.z = g2.boss.z;
  assert.ok(g2.step(0.02, {}).some((e) => e.type === 'bossBite')); assert.equal(g2.boss.hp, 2);
});

test('boss telegraphs before it stomps or fires', () => {
  const g = new Dino({ level: 2, seed: 2 }); g.creatures = []; g.boss.hp = 2; const seen = []; g.player.x = 15;
  for (let i = 0; i < 1200 && seen.length < 6; i++) for (const e of g.step(0.05, {})) if (['telegraph', 'stomp', 'fire'].includes(e.type)) seen.push(e.type);
  assert.equal(seen[0], 'telegraph'); assert.ok(seen.includes('stomp') || seen.includes('fire'));
});

test('camera zoom is monotonic in power', () => {
  let prev = -1; for (let P = 0; P <= 300; P++) { const z = zoomFor(P); assert.ok(z > prev); prev = z; }
  for (let P = 1; P < 200; P++) assert.ok(radiusOf(P + 1) > radiusOf(P));
});

test('tone colours', () => { assert.equal(toneOf(50, 20), 'red'); assert.equal(toneOf(20, 20), 'red'); assert.equal(toneOf(19, 20), 'white'); assert.equal(toneOf(5, 20), 'green'); });

test('stars', () => {
  assert.equal(starsFor({ time: 50, par: 100, hits: 9, power: 40, goal: 32 }), 3);
  assert.equal(starsFor({ time: 150, par: 100, hits: 9, power: 35, goal: 32 }), 2);
  assert.equal(starsFor({ time: 400, par: 100, hits: 0, power: 40, goal: 32 }), 1);
  assert.equal(starsFor({ time: 150, par: 100, hits: 1, power: 40, goal: 32 }), 3);
});

test('deterministic and save normalisation', () => {
  const a = play(0, 7).g; const b = play(0, 7).g; assert.equal(a.time, b.time); assert.equal(a.player.P, b.player.P);
  const s = normalizeSave({ unlocked: 99, stars: [5, -1, 'x'], best: [10.4, null], muted: 1 });
  assert.deepEqual(s.stars, [3, 0, 0]); assert.equal(s.unlocked, 3); assert.equal(s.best[0], 10); assert.equal(normalizeSave(null).unlocked, 1);
});

test('levels 1 and 2 end only when you eat the alpha (BEAT THE ALPHA 36), not by reaching a power', () => {
  const g = new Dino({ level: 0, seed: 1 }); g.creatures = []; assert.equal(g.L.start, 3); assert.equal(g.L.goal, 37);
  g.player.P = 19; g.step(0.02, {}); assert.ok(!g.alpha);
  g.player.P = 20; const ev = g.step(0.02, {}); assert.ok(ev.some((e) => e.type === 'alpha') && g.alpha && g.alpha.power === 36);
  g.player.P = 200; for (let i = 0; i < 100; i++) g.step(0.05, {}); assert.ok(!g.done, 'power alone does not finish');
  const a = g.alpha; g.creatures = [a]; g.player.x = a.x; g.player.z = a.z;
  const ev2 = g.step(0.02, {}); assert.ok(ev2.some((e) => e.type === 'alphaDown'));
  let done = false; for (let i = 0; i < 60; i++) for (const e of g.step(0.05, {})) if (e.type === 'complete') done = true;
  assert.ok(done && g.won);
});

test('a weaker player cannot eat the alpha: it only bumps', () => {
  const g = new Dino({ level: 1, seed: 1 }); g.creatures = []; g.player.P = 60; g.step(0.02, {}); assert.ok(g.alpha && g.alpha.power === 80);
  const a = g.alpha; g.creatures = [a]; g.player.x = a.x; g.player.z = a.z; g.player.inv = 0;
  const ev = g.step(0.02, {}); assert.ok(ev.some((e) => e.type === 'bump') && !ev.some((e) => e.type === 'alphaDown') && g.creatures.includes(a));
});
