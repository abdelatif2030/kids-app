import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createState, fire, step, cloneState, heroes, foes, LEVELS, HERO_ORDER, previewPath, teamHp, normalizeSave, W, H } from '../src/sim.js';

function runShot(s, cap = 4000) { let n = 0; while (s.phase === 'shot' && n++ < cap) step(s); return n; }
function runAll(s, cap = 8000) { let n = 0; while ((s.phase === 'shot' || s.phase === 'enemy') && n++ < cap) step(s); }

/** Bounded search robot: angles x powers x heroes, then looks one enemy phase ahead for the best few. */
function robotTurn(s) {
  const cands = [];
  for (const h of heroes(s)) {
    for (const sp of h.meter >= 100 ? [true, false] : [false]) {
      for (let a = 0; a < 40; a++) {
        for (const p of [0.6, 1]) {
          const ang = (a / 40) * Math.PI * 2;
          const c = cloneState(s);
          const hp0 = foes(c).reduce((x, f) => x + f.hp, 0);
          fire(c, h.type, ang, p, sp);
          runShot(c);
          const hp1 = foes(c).reduce((x, f) => x + f.hp, 0);
          cands.push({ type: h.type, ang, p, sp, score: (hp0 - hp1) + (c.kills) * 25, c });
        }
      }
    }
  }
  cands.sort((x, y) => y.score - x.score);
  let best = cands[0]; let bs = -1e9;
  for (const k of cands.slice(0, 6)) {
    const c = k.c; runAll(c);
    const val = k.score + (c.phase === 'won' ? 500 : 0) + teamHp(c) * 0.9 - (c.phase === 'lost' ? 1000 : 0);
    if (val > bs) { bs = val; best = k; }
  }
  return best;
}
function playLevel(level, seed = 1) {
  const s = createState(level, { seed });
  let turns = 0;
  while (s.phase !== 'won' && s.phase !== 'lost' && turns < 25) {
    const b = robotTurn(s);
    fire(s, b.type, b.ang, b.p, b.sp);
    runAll(s); turns++;
    s.ev = [];
  }
  return { s, turns };
}

test('levels are well formed', () => {
  assert.ok(LEVELS.length >= 12);
  LEVELS.forEach((lv, i) => {
    const s = createState(i + 1);
    assert.ok(foes(s).length >= 2);
    for (const b of s.bodies) { assert.ok(b.x > b.r && b.x < W - b.r && b.y > b.r && b.y < H - b.r, `level ${i + 1} body in bounds`); }
    for (let a = 0; a < s.bodies.length; a++) for (let b = a + 1; b < s.bodies.length; b++) {
      const p = s.bodies[a]; const q = s.bodies[b];
      assert.ok(Math.hypot(p.x - q.x, p.y - q.y) >= p.r + q.r - 0.01, `level ${i + 1} no overlap ${p.type}/${q.type}`);
    }
  });
});

test('deterministic: same seed and shot give identical state', () => {
  const run = () => { const s = createState(3, { seed: 7 }); fire(s, 'fox', -1.2, 0.9, false); runAll(s); return JSON.stringify(s.bodies.map((b) => [b.x.toFixed(4), b.y.toFixed(4), b.hp])); };
  assert.equal(run(), run());
});

test('collision energy sanity: elastic hit never creates energy, momentum conserved for equal bodies', () => {
  const s = createState(1);
  s.bodies = s.bodies.filter((b) => b.kind === 'hero'); s.blocks = []; s.pools = [];
  const a = s.bodies[0]; const b = s.bodies[1];
  a.m = b.m = 1; a.im = b.im = 1; a.r = b.r = 3;
  a.x = 20; a.y = 40; b.x = 40; b.y = 40; a.vx = 50; a.vy = 0; b.vx = 0; b.vy = 0;
  const p0 = a.vx * a.m + b.vx * b.m; const e0 = 0.5 * 2500;
  let pre = a.vx;
  for (let i = 0; i < 400; i++) { pre = a.vx; step(s); if (b.vx > 0) break; }
  step(s);
  void p0;
  const p0b = pre * a.m;
  const p1 = a.vx + b.vx; const e1 = 0.5 * (a.vx ** 2 + a.vy ** 2 + b.vx ** 2 + b.vy ** 2);
  assert.ok(Math.abs(p1 - p0b) < 4, `momentum ${p0b} -> ${p1}`);
  assert.ok(e1 <= e0 + 1e-6, 'no energy gain');
  assert.ok(b.vx > 20, 'struck hero moves (chain)');
});

test('walls bounce and ice slows things to a stop', () => {
  const s = createState(1);
  s.bodies.find((b) => b.type === 'penguin').y = 40;
  fire(s, 'penguin', -Math.PI / 2, 1, false); // straight up at the wall
  let bounced = false;
  for (let i = 0; i < 4000 && s.phase === 'shot'; i++) { step(s); if (s.ev.some((e) => e.t === 'wall')) bounced = true; s.ev = []; }
  assert.ok(bounced);
  assert.equal(s.phase === 'enemy' || s.phase === 'aim', true);
});

test('a shot can chain-hit: hero -> teammate -> goblin damages the goblin', () => {
  const s = createState(1);
  const pen = s.bodies.find((b) => b.type === 'penguin'); const fox = s.bodies.find((b) => b.type === 'fox');
  const g = foes(s)[0];
  // line up: fox directly between penguin and goblin
  fox.x = 20; fox.y = 60; pen.x = 20; pen.y = 80; g.x = 20; g.y = 30;
  const hp0 = g.hp;
  fire(s, 'penguin', -Math.PI / 2, 1, false);
  for (let i = 0; i < 3000 && s.phase === 'shot'; i++) step(s);
  assert.ok(g.hp < hp0 || !g.alive, 'goblin took chain damage');
});

test('turn flow: aim -> shot -> enemy -> aim, turn counter increments', () => {
  const s = createState(2);
  assert.equal(s.phase, 'aim');
  fire(s, 'bear', -1.5, 0.2, false);
  assert.equal(s.phase, 'shot');
  const seen = new Set();
  for (let i = 0; i < 40000 && s.phase !== 'aim'; i++) { step(s); seen.add(s.phase); }
  assert.ok(seen.has('enemy'));
  assert.equal(s.phase, 'aim');
  assert.equal(s.turn, 2);
  assert.equal(fire(s, 'bear', 0, 1), true);
  assert.equal(fire(s, 'bear', 0, 1), false, 'cannot fire twice in one turn');
});

test('special meter fills from damage and special fires once', () => {
  const s = createState(1);
  const fox = s.bodies.find((b) => b.type === 'fox');
  fox.meter = 100;
  fire(s, 'fox', -1.5, 1, true);
  assert.equal(fox.meter, 0);
  assert.equal(fox.pierce, true);
  runAll(s);
  assert.equal(fox.pierce, false);
  // meter gained from dealing damage
  const s2 = createState(1);
  const pen = s2.bodies.find((b) => b.type === 'penguin'); const g = foes(s2)[0];
  pen.x = 20; pen.y = 70; g.x = 20; g.y = 40; pen.meter = 0;
  fire(s2, 'penguin', -Math.PI / 2, 1, false);
  for (let i = 0; i < 3000 && s2.phase === 'shot'; i++) step(s2);
  assert.ok(pen.meter > 5);
});

test('flame dash pierces: passes through two goblins in a line', () => {
  const s = createState(1);
  const fox = s.bodies.find((b) => b.type === 'fox'); const [a, b] = foes(s);
  fox.meter = 100; fox.x = 30; fox.y = 80; a.x = 30; a.y = 55; b.x = 30; b.y = 35;
  fire(s, 'fox', -Math.PI / 2, 1, true);
  for (let i = 0; i < 400; i++) step(s);
  assert.ok(a.hp < a.maxHp || !a.alive);
  assert.ok(b.hp < b.maxHp || !b.alive);
});

test('preview path returns points', () => {
  const s = createState(1);
  const pts = previewPath(s, 'penguin', -1.2, 0.8, false);
  assert.ok(pts.length > 3);
});

test('save normalising', () => {
  const sv = normalizeSave({ unlocked: 99, stars: { 1: 5, 2: 2 }, coins: -4, up: { fox: { hp: 9 } } });
  assert.equal(sv.unlocked, 12); assert.equal(sv.stars[2], 2); assert.equal(sv.stars[1], undefined); assert.equal(sv.coins, 0); assert.equal(sv.up.fox.hp, 5);
  assert.deepEqual(HERO_ORDER, ['penguin', 'fox', 'bear']);
});

test('a bounded-search robot wins at least 11 of 12 levels', { timeout: 900000 }, () => {
  let won = 0; const rows = [];
  const only = Number(process.env.IR_LEVEL || 0);
  if (only) { const { s, turns } = playLevel(only); console.log(`ROBOT L${only}:${s.phase} turns=${turns} stars=${s.stars} hp=${teamHp(s)}`); return; }
  for (let i = 1; i <= 12; i++) {
    const { s, turns } = playLevel(i);
    if (s.phase === 'won') won++;
    rows.push(`L${i}:${s.phase} turns=${turns} stars=${s.stars} hp=${teamHp(s)}`);
  }
  console.log(rows.join('\n'));
  assert.ok(won >= 11, `won ${won}/12`);
});
