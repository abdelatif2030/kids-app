import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Match, LEVELS, VENUES, PITCH, SKINS, LIVES, BALL_SPEED, normalizeSave, buySkin, selectSkin, LEG_OFF, COMET_TIME, TRIGGER_DIST } from '../src/sim.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const STAND = ['idle', 'chase', 'windup', 'recover', 'cheer', 'stun'];

/** Robot player (a reasonable child-like policy): flees telegraphed lanes diagonally,
 * runs into teammates for a safe one-two, nutmegs an isolated defender to build heat,
 * sprints straight through everyone while the comet burns, otherwise picks the most
 * open lane upfield; shoots only when the target is outside the keeper's reach. */
function bot(m) {
  const b = m.ball;
  if (m.mode === 'shoot') { if (m.modeT > 0.35 && m.targetSafe(0.4)) m.tap(); return; }
  if (m.mode !== 'play') return;
  // 1. get out of a red lane, keeping forward momentum
  for (const d of m.defenders) {
    if (d.state !== 'windup' && d.state !== 'slide') continue;
    const rx = b.x - d.x, rz = b.z - d.z, along = rx * d.lx + rz * d.lz, perp = rx * d.lz - rz * d.lx;
    if (along > -2 && along < 13 && Math.abs(perp) < 3.4) { m.setInput(Math.abs(perp) > 0.4 ? Math.sign(perp) : (b.x > 0 ? -1 : 1), 0.55); return; }
  }
  // 2. comet: tackles burn instead of stealing — run straight through
  if (m.comet) { m.setInput(clamp(b.x * -0.05, -1, 1), 1); return; }
  // 3. teammate in the clear: a one-two is safe and jumps the ball ahead
  const mate = m.mates.find((q) => q.state === 'wait' && q.z > b.z && q.z - b.z < 20);
  if (mate && !m.defenders.some((d) => d.state !== 'stun' && Math.hypot(d.x - mate.x, d.z - mate.z) < 4)) { const dx = mate.x - b.x, dz = Math.max(2, mate.z - b.z), len = Math.hypot(dx, dz); m.setInput(dx / len, dz / len); return; }
  // 4. an isolated defender ahead: run at his middle for a nutmeg
  const nd = m.defenders.filter((d) => STAND.includes(d.state) && (d.state === 'idle' || d.state === 'chase') && !d.nutmegged && d.z > b.z + 1 && d.z - b.z < 11).sort((p, q) => p.z - q.z)[0];
  if (nd && !m.defenders.some((d) => d !== nd && d.state !== 'stun' && Math.hypot(d.x - nd.x, d.z - nd.z) < 5.5)) { const dx = nd.x - b.x, dz = Math.max(2, nd.z - b.z), len = Math.hypot(dx, dz); m.setInput(dx / len, dz / len); return; }
  // 5. otherwise run the most open lane upfield (dodging dummies)
  let bestX = b.x, bestScore = -1e9;
  for (const cx of [-13, -9, -5, -2, 0, 2, 5, 9, 13]) {
    let s = -Math.abs(cx - b.x) * 0.35;
    for (const d of m.defenders) { if (d.state === 'stun') continue; const dz = d.z - b.z; if (dz < -3 || dz > 20) continue; s += Math.min(Math.hypot(d.x - cx, Math.max(0, dz)), 12) * (dz > -1 ? 1 : 0.4); }
    for (const o of m.dummies) { const dz = o.z - b.z; if (dz > 0 && dz < 8) s -= Math.max(0, 4 - Math.abs(o.x - cx)) * 1.5; }
    if (s > bestScore) { bestScore = s; bestX = cx; }
  }
  const dx = bestX - b.x, dz = 14, len = Math.hypot(dx, dz);
  m.setInput(dx / len, dz / len);
}

function play(level, seed, cap = 300) {
  const m = new Match({ level, seed });
  const warned = new Map(); const evs = [];
  let t = 0;
  while (m.mode !== 'done' && t < cap) {
    bot(m);
    for (const e of m.step(1 / 60)) {
      evs.push(e);
      if (e.type === 'tackleWarn') warned.set(e.id, m.clock);
      if (e.type === 'slide') assert.ok(e.warned >= m.def.windup - 1e-6, 'a slide always follows a full telegraph');
    }
    t += 1 / 60;
  }
  return { m, evs };
}

test('twelve levels with growing defenders and a keeper that gets wider', () => {
  assert.equal(LEVELS.length, 12);
  for (let i = 1; i < LEVELS.length; i++) { assert.ok(LEVELS[i].defenders >= LEVELS[i - 1].defenders); assert.ok(LEVELS[i].reach > LEVELS[i - 1].reach); assert.ok(LEVELS[i].windup <= LEVELS[i - 1].windup); assert.ok(LEVELS[i].chase >= LEVELS[i - 1].chase); assert.ok(LEVELS[i].cooldown <= LEVELS[i - 1].cooldown); }
  assert.deepEqual(SKINS.map((s) => [s.id, s.price]), [['classic', 0], ['flame', 120], ['ice', 200], ['gold', 320]]);
});

test('Batch F structure: 4 venues x 3 levels, every level vs a named kid team (ar + en)', () => {
  assert.equal(VENUES.length, 4);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  for (let v = 0; v < 4; v++) assert.deepEqual(LEVELS.filter((l) => l.venue === v).map((l) => l.id), [v * 3 + 1, v * 3 + 2, v * 3 + 3], `venue ${v} holds exactly its 3 levels`);
  const teams = new Set();
  for (const l of LEVELS) {
    assert.ok(l.team && l.team.ar.length > 1 && l.team.en.length > 1, `level ${l.id} has a team name in both languages`);
    assert.ok(l.ar.length > 1 && l.en.length > 1);
    teams.add(l.team.en);
  }
  assert.equal(teams.size, 12, 'every opponent team is distinct');
  assert.equal(LEVELS[11].en, 'Cup Final');
  assert.match(LEVELS[10].en, /Cairo International Stadium/);
});

test('a robot beats every one of the 12 levels (some seed): dodge, nutmeg, shoot', () => {
  let nut = 0, one = 0, dodge = 0, warns = 0, slides = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    let win = null;
    for (const seed of [3, 5, 1, 6, 2, 4, 7]) {
      const { m, evs } = play(i, seed);
      assert.equal(m.mode, 'done', `level ${i + 1} not finished`);
      warns += evs.filter((e) => e.type === 'tackleWarn').length; slides += evs.filter((e) => e.type === 'slide').length;
      if (m.result().goal) { win = { m, seed }; break; }
    }
    assert.ok(win, `level ${i + 1} (${LEVELS[i].en}) is beatable by the robot`);
    const { m } = win, r = m.result();
    console.log(`level ${i + 1} ${LEVELS[i].en}: goal (seed ${win.seed}) stars ${r.stars} tricks ${r.tricks} stolen ${m.stats.stolen} time ${m.time.toFixed(0)}s`);
    assert.ok(r.stars >= 1 && r.coins > 0);
    nut += m.stats.nutmegs; one += m.stats.onetwos; dodge += m.stats.dodges;
  }
  assert.ok(nut > 0, 'nutmegs happen'); assert.ok(one > 0, 'one-twos happen'); assert.ok(dodge > 0, 'dodges happen');
  assert.ok(warns >= slides && slides > 0, 'every tackle was announced');
});

test('a tackle is telegraphed: the lane shows for the full wind-up before the defender moves', () => {
  const m = new Match({ level: 2 });
  m.defenders = [m.defenders[0]]; const d = m.defenders[0];
  d.x = 0; d.z = 20; d.state = 'chase'; d.cd = 0; m.mates = [];
  m.ball.x = 0; m.ball.z = 12; m.ball.inv = 0; m.setInput(0, 0);
  let warnAt = null, slideAt = null; const startZ = d.z;
  for (let i = 0; i < 400 && slideAt === null; i++) {
    for (const e of m.step(1 / 60)) { if (e.type === 'tackleWarn') warnAt = m.clock; if (e.type === 'slide') slideAt = m.clock; }
    if (warnAt !== null && slideAt === null) assert.ok(d.state === 'windup'); // not moving along the lane yet
  }
  assert.ok(warnAt !== null && slideAt !== null);
  assert.ok(slideAt - warnAt >= m.def.windup - 0.03, `windup ${slideAt - warnAt}`);
  assert.ok(d.lx !== undefined && Math.abs(Math.hypot(d.lx, d.lz) - 1) < 1e-6);
  assert.ok(startZ > 0);
});

test('a slide that the ball dodges counts as a dodge; a ball in the lane is stolen', () => {
  const mk = (ballX) => {
    const m = new Match({ level: 1 }); m.mates = [];
    const d = m.defenders[0]; m.defenders = [d]; Object.assign(d, { x: 0, z: 30, state: 'chase', cd: 0, hx: 0, hz: -1 });
    Object.assign(m.ball, { x: 0, z: 23, vx: 0, vz: 0, inv: 0 }); m.setInput(0, 0); // the ball holds still: it only moves while you drag
    return { m, d, ballX };
  };
  // dodge: step sideways after the warning
  { const { m } = mk(); let dodged = false, stolen = false, moved = false;
    for (let i = 0; i < 400; i++) { if (m.defenders[0].state === 'windup' && !moved) { moved = true; m.setInput(1, 0); } if (moved && Math.abs(m.ball.x) > 4.5) m.setInput(0, 0); for (const e of m.step(1 / 60)) { if (e.type === 'dodge') dodged = true; if (e.type === 'stolen') stolen = true; } }
    assert.ok(dodged && !stolen); assert.ok(m.stats.dodges >= 1); }
  // stolen: stay put in the lane
  { const { m } = mk(); let stolen = false; const before = { ...m.ball };
    for (let i = 0; i < 300 && !stolen; i++) for (const e of m.step(1 / 60)) if (e.type === 'stolen') stolen = true;
    assert.ok(stolen); assert.equal(m.heat, 0);
    assert.ok(m.ball.inv > 1, 'safe after the steal'); assert.ok(m.mode === 'play', 'nothing permanent is lost');
    for (const d of m.defenders) if (d.state !== 'cheer') assert.ok(Math.hypot(d.x - m.ball.x, d.z - m.ball.z) > 5);
    assert.ok(before.z >= 0); }
});

test('nutmeg: rolling through the gap between the legs scores, hitting a leg steals', () => {
  const run = (offset) => {
    const m = new Match({ level: 0 }); m.mates = [];
    const d = m.defenders[0]; m.defenders = [d]; Object.assign(d, { x: 0, z: 30, state: 'windup', cd: 5, wt: 0, hx: 0, hz: -1, lx: 0, lz: -1, near: 9, hit: false });
    Object.assign(m.ball, { x: offset, z: 25, vx: 0, vz: 7, inv: 0 }); m.setInput(0, 7 / BALL_SPEED);
    const seen = [];
    for (let i = 0; i < 70; i++) for (const e of m.step(1 / 60)) seen.push(e.type);
    return { m, seen };
  };
  const a = run(0); assert.ok(a.seen.includes('nutmeg') && !a.seen.includes('stolen')); assert.equal(a.m.stats.nutmegs, 1); assert.ok(a.m.heat >= 34);
  const b = run(LEG_OFF); assert.ok(b.seen.includes('stolen') && !b.seen.includes('nutmeg'));
  const c = run(3); assert.ok(!c.seen.includes('nutmeg') && !c.seen.includes('stolen'));
});

test('one-two: running into the teammate returns the ball ahead and is safe from tackles', () => {
  const m = new Match({ level: 1 });
  const mate = m.mates[0]; Object.assign(m.ball, { x: mate.x, z: mate.z - 3, vx: 0, vz: 7, inv: 0 }); m.setInput(0, 7 / BALL_SPEED);
  const z0 = mate.z; let two = false;
  for (let i = 0; i < 90; i++) for (const e of m.step(1 / 60)) if (e.type === 'onetwo') two = true;
  assert.ok(two && m.stats.onetwos === 1 && mate.state !== 'wait');
  assert.ok(m.ball.z > z0 + 5, 'the ball came back ahead of the teammate');
  assert.ok(m.heat >= 28);
});

test('heat builds from tricks and a full meter makes a comet that burns through a tackle, then cools down', () => {
  const m = new Match({ level: 2 }); m.mates = [];
  m._trick('dodge'); assert.ok(m.heat > 0 && !m.comet);
  m._trick('nutmeg'); m._trick('nutmeg'); m._trick('onetwo');
  assert.ok(m.comet && m.cometT === COMET_TIME, 'comet on');
  // a tackle burns
  const d = m.defenders[0]; m.defenders = [d]; Object.assign(d, { x: 0, z: 30, state: 'slide', t: 0, lx: 0, lz: -1, near: 9, hit: false, hx: 0, hz: -1 });
  Object.assign(m.ball, { x: 0, z: 29, vx: 0, vz: 0, inv: 0 });
  const seen = []; for (let i = 0; i < 20; i++) for (const e of m.step(1 / 60)) seen.push(e.type);
  assert.ok(seen.includes('burn') && !seen.includes('stolen')); assert.ok(d.state === 'stun');
  // comet is faster
  const fast = new Match({ level: 0 }); fast.defenders = []; fast.mates = []; fast.setInput(0, 1);
  const slow = new Match({ level: 0 }); slow.defenders = []; slow.mates = []; slow.setInput(0, 1);
  fast.cometT = COMET_TIME; fast.heat = 100; for (let i = 0; i < 60; i++) { fast.step(1 / 60); slow.step(1 / 60); }
  assert.ok(fast.ball.vz > slow.ball.vz * 1.2);
  // ends
  const e = new Match({ level: 0 }); e.defenders = []; e.mates = []; e.cometT = 0.2; e.heat = 100; e.ball.z = 5; e.setInput(0, -1);
  const ev2 = []; for (let i = 0; i < 30; i++) ev2.push(...e.step(1 / 60));
  assert.ok(ev2.some((x) => x.type === 'cometOff') && e.heat === 0 && !e.comet);
});

test('shooting: tap with the target inside the keeper reach is saved, outside scores; a comet shrinks his reach', () => {
  const setup = (comet) => {
    const m = new Match({ level: 2 }); m.defenders = []; m.mates = [];
    Object.assign(m.ball, { x: 2, z: PITCH.BOX_Z + 0.5, inv: 0 }); if (comet) { m.cometT = 5; m.heat = 50; }
    m.step(1 / 60); assert.equal(m.mode, 'shoot');
    for (let i = 0; i < 30; i++) m.step(1 / 60);
    return m;
  };
  const m1 = setup(false); m1.target.x = m1.keeper.x + m1.def.reach * 0.5; m1.target.p = 1e9; // freeze needs no more steps
  assert.equal(m1.targetSafe(), false); assert.ok(m1.tap());
  let ev = []; for (let i = 0; i < 200; i++) ev.push(...m1.step(1 / 60));
  assert.ok(ev.some((e) => e.type === 'save') && ev.some((e) => e.type === 'lost' && e.reason === 'saved'), 'a save ends the level (try again)');
  assert.ok(ev.some((e) => e.type === 'end' && !e.result.goal && e.result.reason === 'saved'));
  const m2 = setup(false); m2.target.x = m2.keeper.x + m2.def.reach + 1;
  assert.ok(m2.targetSafe()); m2.tap(); ev = []; for (let i = 0; i < 40; i++) ev.push(...m2.step(1 / 60));
  assert.ok(ev.some((e) => e.type === 'goal') && m2.goals === 1);
  const m3 = setup(true); const gap = m3.def.reach * 0.8; m3.target.x = m3.keeper.x + gap;
  assert.ok(m3.targetSafe(), 'inside the normal reach but outside the comet reach'); assert.ok(m3.reachNow() < m3.def.reach);
  assert.equal(m3.tap(), true);
  assert.equal(setup(false).tap(), true); // after 0.3 s taps count
  const early = new Match({ level: 0 }); early.defenders = []; Object.assign(early.ball, { z: PITCH.BOX_Z + 0.1 }); early.step(1 / 60); assert.equal(early.tap(), false, 'accidental tap ignored');
});

test('easy mode (small children) is gentler', () => {
  const e = new Match({ level: 3, easy: true }), n = new Match({ level: 3 });
  assert.ok(e.def.windup > n.def.windup && e.def.chase < n.def.chase && e.def.reach < n.def.reach);
});

test('save is normalised, balls are bought once with coins and nothing is taken for failing', () => {
  assert.equal(normalizeSave(null).unlocked, 1); assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 12);
  const s = normalizeSave({ coins: 100, owned: ['gold', 'bogus'], skin: 'bogus', stars: [9, -1] });
  assert.deepEqual(s.owned, ['classic', 'gold']); assert.equal(s.skin, 'classic'); assert.deepEqual(s.stars.slice(0, 2), [3, 0]); assert.equal(s.stars.length, 12);
  assert.equal(buySkin(s, 'ice'), false); assert.equal(s.coins, 100);
  const t = normalizeSave({ coins: 200 }); assert.ok(buySkin(t, 'flame')); assert.equal(t.coins, 80); assert.equal(buySkin(t, 'flame'), false); assert.equal(buySkin(t, 'gold'), false);
  assert.ok(selectSkin(t, 'classic') && t.skin === 'classic' && !selectSkin(t, 'gold'));
  assert.ok(TRIGGER_DIST > 0);
});

test('the ball only moves while you drag; let go and it rolls to a stop', () => {
  const m = new Match({ level: 0 }); m.defenders = []; m.mates = []; m.dummies = []; m.coinList = [];
  const z0 = m.ball.z; for (let i = 0; i < 120; i++) m.step(1 / 60);
  assert.equal(m.ball.z, z0, 'no input = no movement'); assert.equal(m.ball.x, 0);
  m.setInput(0, 1); for (let i = 0; i < 60; i++) m.step(1 / 60);
  assert.ok(m.ball.z > z0 + 8 && m.ball.vz > BALL_SPEED * 0.95, 'fully out = top speed');
  m.setInput(0, 0.4); for (let i = 0; i < 40; i++) m.step(1 / 60); assert.ok(Math.abs(m.ball.vz - BALL_SPEED * 0.4) < 0.5, 'half stick = slower');
  m.setInput(0, 0); for (let i = 0; i < 40; i++) m.step(1 / 60); assert.ok(Math.abs(m.ball.vz) < 1e-6 && Math.abs(m.ball.vx) < 1e-6, 'released = stops');
});

test('three balls: every steal takes one; with none left the kids fetch more and the match plays on (never a fail state)', () => {
  const m = new Match({ level: 1 }); m.mates = []; assert.equal(m.lives, LIVES); assert.equal(LIVES, 3);
  const ev = [];
  const stealOnce = () => {
    const d = m.defenders[0]; m.defenders = [d]; Object.assign(d, { x: 0, z: 30, state: 'slide', t: 0, lx: 0, lz: -1, near: 9, hit: false, hx: 0, hz: -1 });
    Object.assign(m.ball, { x: 0, z: 29, vx: 0, vz: 0, inv: 0 }); m.setInput(0, 0);
    for (let i = 0; i < 30 && m.mode === 'play'; i++) ev.push(...m.step(1 / 60));
    for (let i = 0; i < 30; i++) ev.push(...m.step(1 / 60)); // let the steal settle
  };
  stealOnce(); assert.equal(m.lives, 2); assert.equal(m.mode, 'play');
  stealOnce(); assert.equal(m.lives, 1); assert.equal(m.mode, 'play');
  stealOnce(); // the last ball goes — the kids fetch more instead of full time
  assert.equal(m.refills, 1);
  assert.equal(m.lives, LIVES, 'balls refill back to three');
  assert.equal(m.mode, 'play', 'running out of balls never ends the match');
  assert.equal(ev.filter((e) => e.type === 'refill').length, 1, 'one kind refill moment');
  assert.ok(!ev.some((e) => e.type === 'lost' || e.type === 'end'), 'no fail state, no end');
  // and it keeps working: three more steals refill again, the match is still alive
  stealOnce(); stealOnce(); stealOnce();
  assert.equal(m.refills, 2); assert.equal(m.stats.stolen, 6); assert.equal(m.mode, 'play');
  assert.ok(!ev.some((e) => e.type === 'lost' || e.type === 'end'));
  // a refilled run is not a "clean" run: a goal after refills earns no clean-run star
  m.goals = 1;
  assert.equal(m.result().stars, 1);
});

test('coins on the pitch are collected by rolling over them; yellow dummies bounce the ball (BLOCKED)', () => {
  const m = new Match({ level: 0 }); m.defenders = []; m.mates = [];
  assert.ok(m.coinList.length >= 12 && m.dummies.length >= 2);
  const c = m.coinList[0]; Object.assign(m.ball, { x: c.x, z: c.z - 3, vx: 0, vz: 0, inv: 0 }); m.setInput(0, 0.5);
  const ev = []; for (let i = 0; i < 60; i++) ev.push(...m.step(1 / 60)); m.setInput(0, 0);
  assert.ok(ev.some((e) => e.type === 'coin') && m.coins >= 1 && c.got);
  const d = m.dummies[0]; m.coinList = []; Object.assign(m.ball, { x: d.x, z: d.z - 3, vx: 0, vz: 0, inv: 0 }); m.setInput(0, 1);
  const ev2 = []; for (let i = 0; i < 40; i++) ev2.push(...m.step(1 / 60));
  assert.ok(ev2.some((e) => e.type === 'blocked') && m.stats.blocked >= 1);
  assert.ok(Math.hypot(m.ball.x - d.x, m.ball.z - d.z) > 0.7, 'the ball does not go through');
});

test('progress runs from 0 at the kick-off to 1 at the box', () => {
  const m = new Match({ level: 0 }); m.defenders = []; m.mates = []; m.dummies = []; assert.ok(m.progress < 0.1);
  m.ball.z = PITCH.BOX_Z / 2; assert.ok(Math.abs(m.progress - 0.5) < 0.01);
  m.ball.z = PITCH.BOX_Z + 0.2; m.step(1 / 60); assert.equal(m.mode, 'shoot'); assert.equal(m.progress, 1);
});

test('level 1 is Hara Pitch with no teammate, level 2 is Hara Challenge with one', () => {
  assert.equal(LEVELS[0].en, 'Hara Pitch'); assert.equal(LEVELS[0].mates, 0); assert.equal(LEVELS[1].en, 'Hara Challenge'); assert.equal(LEVELS[1].mates, 1);
  const m = new Match({ level: 1 }); const mate = m.mates[0]; Object.assign(m.ball, { x: mate.x, z: mate.z - 10, inv: 0 }); const ev = m.step(1 / 60);
  assert.ok(ev.some((e) => e.type === 'mateHint'), 'PASS TO YOUR MATE!');
});

import fs from 'node:fs';
test('dragging or pressing right moves the ball to the screen\'s right (sim +x is screen-right: the ball sits at world x = -sim x)', () => {
  const src = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(src.includes('this.pointerIn = [dx / R, -dy / R]'));
  assert.ok(src.includes('if (k.arrowleft || k.a) jx -= 1; if (k.arrowright || k.d) jx += 1;'));
});

test('Hara Football anchor: venues progress hara -> school -> club -> Cairo Stadium', () => {
  assert.equal(LEVELS.length, 12);
  assert.match(LEVELS[0].en, /Hara/);
  assert.match(LEVELS[3].en, /School/);
  assert.match(LEVELS[7].en, /Local Club/);
  assert.match(LEVELS[10].en, /Cairo International Stadium/);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('migration: an old 7-level save keeps its stars and unlocks, padded to 12', () => {
  const old = { unlocked: 6, stars: [3, 2, 1, 0, 2, 0, 1], coins: 140, goals: 5, tricks: 21, best: [900, 800, 700, 600, 500] };
  const s = normalizeSave(old);
  assert.equal(s.stars.length, 12);
  assert.deepEqual(s.stars.slice(0, 7), [3, 2, 1, 0, 2, 0, 1], 'old stars stay at their level indices');
  assert.deepEqual(s.stars.slice(7), [0, 0, 0, 0, 0], 'new levels start unstarred');
  assert.equal(s.unlocked, 8, 'unlock is derived from the stars: a star on old level 7 opens level 8 (never less than the saved 6)');
  assert.equal(s.coins, 140); assert.equal(s.goals, 5); assert.equal(s.tricks, 21);
  assert.equal(s.best.length, 12); assert.deepEqual(s.best.slice(0, 5), [900, 800, 700, 600, 500]);
  // a finished old campaign (all 7 starred) opens the first new level, not the whole ladder
  const done = normalizeSave({ unlocked: 7, stars: [1, 1, 1, 1, 1, 1, 1] });
  assert.equal(done.unlocked, 8);
});

test('campaign: winning level by level unlocks the whole ladder through to the Cup Final', () => {
  let save = normalizeSave(null);
  for (let i = 0; i < LEVELS.length; i++) {
    assert.ok(save.unlocked > i, `level ${i + 1} is unlocked before it is played (unlocked=${save.unlocked})`);
    let r = null;
    for (const seed of [3, 5, 1, 6, 2, 4, 7]) { const p = play(i, seed); if (p.m.result().goal) { r = p.m.result(); break; } }
    assert.ok(r, `campaign stops: level ${i + 1} not beaten`);
    // the same bookkeeping main.js _finish does, then the save is re-normalised like on load
    save.stars[i] = Math.max(save.stars[i], r.stars);
    save.unlocked = Math.max(save.unlocked, Math.min(LEVELS.length, i + 2));
    save = normalizeSave(save);
  }
  assert.equal(save.unlocked, 12);
  assert.ok(save.stars.every((v) => v >= 1), 'every level starred after the campaign');
  assert.equal(LEVELS[LEVELS.length - 1].en, 'Cup Final');
});

test('kind rules: par time never grades stars — a slow clean goal beats a fast stolen one', () => {
  const slow = new Match({ level: 0, seed: 3 });
  slow.goals = 1; slow.time = 9999; // far over par, no tricks
  assert.equal(slow.result().stars, 2); // goal + clean run (no ball stolen)
  const fast = new Match({ level: 0, seed: 3 });
  fast.goals = 1; fast.time = 1; fast.stats.stolen = 1; // under par, but a ball was stolen
  assert.equal(fast.result().stars, 1); // goal only — speed earns nothing
  const tricky = new Match({ level: 0, seed: 3 });
  tricky.goals = 1; tricky.stats.nutmegs = tricky.def.trickGoal; tricky.time = 9999;
  assert.equal(tricky.result().stars, 3); // goal + tricks + clean
});
