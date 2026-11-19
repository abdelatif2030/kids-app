import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Sim, buildLevel, normalizeSave, applyResult, buyCostume, kidSlot, hazardBox, BELL, NUM_LEVELS, DT, JUMP, COSTUMES } from '../src/sim.js';

/** Peak height of one jump held for `hold` seconds. */
function peak(hold) {
  const s = new Sim({ data: { n: 1, len: 300, speed: 6, boss: 3, porches: [], hazards: [], hedges: [], candies: [], par: { two: 1, three: 2 }, theme: 0 } });
  let max = 0; let t = 0; let started = false;
  while (t < 2) {
    const held = !started || t < hold;
    s.step(DT, { held }); started = true; t += DT;
    max = Math.max(max, s.hero.y);
    if (t > 0.1 && s.hero.ground) break;
  }
  return max;
}

function flat(over = {}) {
  return { n: 1, len: 400, speed: 6, boss: 3, porches: [], hazards: [], hedges: [], candies: [], par: { two: 1, three: 2 }, theme: 0, potential: 2, ...over };
}

/** Run until the hero is `ahead` units before x, then jump holding `hold` seconds. */
function runWithJump(s, atX, hold) {
  let jumpT = -1; let all = [];
  for (let i = 0; i < 60 * 12 && s.state !== 'won'; i++) {
    if (jumpT < 0 && s.hero.x >= atX) jumpT = 0;
    const held = jumpT >= 0 && jumpT <= hold + DT;
    if (jumpT >= 0) jumpT += DT;
    all = all.concat(s.step(DT, { held }));
    if (jumpT > 1.5) break;
  }
  return all;
}

test('variable jump: height grows with hold time', () => {
  const hs = [0, 0.08, 0.16, 0.27, 0.5].map(peak);
  for (let i = 1; i < hs.length; i++) assert.ok(hs[i] >= hs[i - 1] - 1e-9, `non-decreasing ${hs}`);
  assert.ok(hs[0] > 0.7 && hs[0] < 1.3, `tap ${hs[0]}`);
  assert.ok(hs[3] > 2.4, `full ${hs[3]}`);
  assert.ok(hs[2] > hs[0] + 0.5);
  assert.ok(hs[4] <= 3.5, `cap ${hs[4]}`);
});

test('friendly porch: jumping to the bell adds kids; passing on the ground does not', () => {
  const data = flat({ porches: [{ id: 1, x: 20, kind: 'friendly', kids: 3, style: 0, rung: false }] });
  const a = new Sim({ data });
  const before = a.kids.length;
  const ev = runWithJump(a, 20 - 3.0, 0.2);
  assert.ok(ev.some((e) => e.type === 'ring' && e.kind === 'friendly'));
  assert.equal(a.kids.length, before + 3);
  const b = new Sim({ data });
  for (let i = 0; i < 60 * 6; i++) b.step(DT, {});
  assert.equal(b.kids.length, before);
});

test('grumpy porch: ringing scares kids away, staying low is safe', () => {
  const data = flat({ porches: [{ id: 1, x: 20, kind: 'grumpy', kids: 0, style: 0, rung: false }] });
  const a = new Sim({ data, startKids: 6 });
  const ev = runWithJump(a, 20 - 3.0, 0.2);
  assert.ok(ev.some((e) => e.type === 'ring' && e.kind === 'grumpy'));
  assert.equal(a.kids.length, 3);
  const b = new Sim({ data, startKids: 6 });
  runWithJump(b, 20 - 3.0, 0.0); // a tap jump stays below the bell
  assert.equal(b.kids.length, 6);
});

test('hedge needs enough kids', () => {
  const data = flat({ hedges: [{ id: 1, x: 15, need: 6, push: 0, broken: false }] });
  const few = new Sim({ data, startKids: 2 });
  for (let i = 0; i < 60 * 3; i++) few.step(DT, {});
  assert.ok(few.hero.x < 15, 'blocked');
  assert.ok(few.blocked);
  for (let i = 0; i < 60 * 10; i++) few.step(DT, {});
  assert.ok(few.hero.x > 15, 'slowly pushed through in the end');
  const many = new Sim({ data, startKids: 6 });
  const ev = [];
  for (let i = 0; i < 60 * 4; i++) ev.push(...many.step(DT, {}));
  assert.ok(many.hero.x > 15);
  assert.ok(ev.some((e) => e.type === 'hedgeBreak' && !e.slow));
});

test('hitting a hazard drops kids that can be re-collected', () => {
  const data = flat({ hazards: [{ id: 1, type: 'pit', x: 12, w: 1.2, hit: false, passed: false, on: false, gone: 0, v: 0, phase: 0, loss: 2 }] });
  const s = new Sim({ data, startKids: 5 });
  let hit = null; let rec = 0;
  for (let i = 0; i < 60 * 6; i++) {
    const ev = s.step(DT, {});
    for (const e of ev) { if (e.type === 'hit') hit = e; if (e.type === 'recollect') rec++; }
  }
  assert.ok(hit && hit.lost === 2);
  assert.equal(rec, 2);
  assert.equal(s.kids.length, 5);
});

test('moving hazards are fair: dog wakes at distance', () => {
  const data = flat({ hazards: [{ id: 1, type: 'dog', x: 30, w: 1.0, hit: false, passed: false, on: false, gone: 0, v: 3.2, phase: 0, loss: 2 }] });
  const s = new Sim({ data });
  let wake = null;
  for (let i = 0; i < 60 * 8; i++) for (const e of s.step(DT, {})) if (e.type === 'wake') wake = s.hero.x;
  assert.ok(wake !== null && 30 - wake <= 12.6 && 30 - wake > 11);
});

test('level generator: deterministic, growing, fair', () => {
  let prev = 0;
  for (let n = 1; n <= NUM_LEVELS; n++) {
    const a = buildLevel(n); const b = buildLevel(n);
    assert.deepEqual(a, b);
    assert.ok(a.len > prev); prev = a.len;
    assert.ok(a.porches.filter((p) => p.kind === 'friendly').length >= 4, 'has friendly porches');
    for (const h of a.hedges) assert.ok(h.need <= a.potential, 'hedge reachable');
    assert.ok(a.par.three >= a.par.two);
    assert.equal(a.theme, n - 1);
    // events never closer than ~7 units centre to centre
    const xs = [...a.porches.map((p) => p.x), ...a.hedges.map((h) => h.x)].sort((p, q) => p - q);
    for (let i = 1; i < xs.length; i++) assert.ok(xs[i] - xs[i - 1] >= 6, `spacing ${xs[i] - xs[i - 1]} level ${n}`);
  }
  assert.ok(NUM_LEVELS >= 6);
  assert.ok(buildLevel(1, true).speed < buildLevel(1).speed);
});

test('crowd layout stays compact', () => {
  for (const n of [1, 5, 15, 40]) {
    let m = 0;
    for (let i = 0; i < n; i++) m = Math.max(m, kidSlot(i, n).dx);
    assert.ok(m < 5.1, `${n} kids reach ${m}`);
  }
});

test('save: normalised, buying costumes', () => {
  const s = normalizeSave({ unlocked: 99, stars: { 1: 9, 2: 'x' }, candy: -5, owned: ['witch', 'zzz'], equipped: 'cat', muted: 1 });
  assert.equal(s.unlocked, NUM_LEVELS); assert.equal(s.stars[1], 3); assert.equal(s.candy, 0);
  assert.deepEqual(s.owned, ['ghost', 'witch']); assert.equal(s.equipped, 'ghost');
  assert.deepEqual(normalizeSave(null).owned, ['ghost']);
  assert.equal(buyCostume({ candy: 10 }, 'pumpkin'), null);
  const b = buyCostume({ candy: 30 }, 'pumpkin');
  assert.equal(b.candy, 5); assert.equal(b.equipped, 'pumpkin');
  assert.equal(buyCostume(b, 'pumpkin'), null);
  const r = applyResult(null, 1, { stars: 2, earned: 12 });
  assert.equal(r.unlocked, 2); assert.equal(r.stars[1], 2); assert.equal(r.candy, 12);
  assert.ok(COSTUMES.length >= 8);
  void hazardBox; void BELL; void JUMP;
});

// ---- robot player with look-ahead ---------------------------------------------------------------------------------
function cost(sim, plan, horizon) {
  let c = 0; let heldFor = 0; let started = false;
  const s = sim.clone();
  for (let i = 0; i < horizon; i++) {
    let held = false;
    if (plan) { if (!started) { held = true; started = true; heldFor = 0; } else if (heldFor < plan.hold) { held = true; heldFor += DT * 2; } }
    const ev = s.step(DT * 2, { held });
    for (const e of ev) {
      if (e.type === 'hit') c += 10 * (e.lost + 1);
      else if (e.type === 'ring') c += e.kind === 'grumpy' ? 12 : -4 * e.n;
      else if (e.type === 'candy') c -= 0.4;
      else if (e.type === 'recollect') c -= 3;
    }
  }
  return c;
}
const PLANS = [{ hold: 0 }, { hold: 0.08 }, { hold: 0.16 }, { hold: 0.27 }];
export function robotRun(level, easy = false, maxT = 300) {
  const s = new Sim({ level, easy, seed: 5 });
  let plan = null; let heldFor = 0; let held = false; const log = { hits: 0, rings: 0 };
  const dt = DT * 2;
  for (let i = 0; i < maxT * 30 && s.state !== 'won'; i++) {
    const near = s.state === 'boss' || s.L.porches.some((p) => !p.rung && p.x - s.hero.x < 9 && p.x - s.hero.x > -3) || s.L.hazards.some((z) => !z.passed && z.x - s.hero.x < 16) || s.L.hedges.some((z) => !z.broken && z.x - s.hero.x < 4);
    if (s.hero.ground && !held && near) {
      const base = cost(s, null, 48);
      let best = null; let bc = base;
      for (const p of PLANS) { const c = cost(s, p, 48); if (c < bc - 1e-9) { bc = c; best = p; } }
      plan = best; heldFor = 0;
      held = !!best;
    }
    if (held) { heldFor += dt; if (heldFor >= plan.hold + dt) held = false; }
    for (const e of s.step(dt, { held })) { if (e.type === 'hit') log.hits++; if (e.type === 'ring') log.rings++; }
    if (!s.hero.ground && !plan) held = false;
    if (s.hero.ground && held && heldFor > plan.hold + dt) held = false;
  }
  return { s, log };
}

test('a robot player finishes every street and beats the spider', () => {
  for (let n = 1; n <= NUM_LEVELS; n++) {
    const { s, log } = robotRun(n);
    console.log(`level ${n}: ${s.state}, kids ${s.kids.length}/${s.L.potential}, stars ${s.result && s.result.stars}, hits ${log.hits}, time ${s.t.toFixed(0)}s, hedges ${s.stats.hedges}`);
    assert.equal(s.state, 'won', `level ${n} not won`);
    assert.ok(s.boss.defeated);
    assert.ok(s.result.stars >= 1);
  }
});

test('a robot also finishes the easy mode (age 3)', () => {
  const { s } = robotRun(3, true);
  assert.equal(s.state, 'won');
});

test('a player who never jumps rings nothing and ends with fewer kids than the robot', () => {
  const idle = new Sim({ level: 2, seed: 5 });
  for (let i = 0; i < 60 * 400 && idle.state !== 'won'; i++) idle.step(DT, {});
  const { s } = robotRun(2);
  assert.equal(idle.stats.rings, 0);
  assert.ok(idle.kids.length < s.kids.length, `${idle.kids.length} vs ${s.kids.length}`);
});

test('boss attacks are telegraphed at least 0.7 s ahead', () => {
  const s = new Sim({ level: 7, seed: 3 });
  s.state = 'boss'; s.hero.x = s.arenaX; s._initBoss([]);
  const tele = [];
  for (let i = 0; i < 60 * 40; i++) for (const e of s.step(DT, {})) if (e.type === 'bossTele') tele.push(e.tele);
  assert.ok(tele.length >= 3);
  for (const t of tele) assert.ok(t >= 0.7, `tele ${t}`);
});

test('determinism: same input gives same state', () => {
  const run = () => { const s = new Sim({ level: 3, seed: 2 }); for (let i = 0; i < 600; i++) s.step(DT, { held: i % 50 < 12 }); return JSON.stringify({ x: s.hero.x, y: s.hero.y, k: s.kids, c: s.candy }); };
  assert.equal(run(), run());
});
