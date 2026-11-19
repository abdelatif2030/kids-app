import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Match, LEVELS, PITCH, SKINS, LIVES, BALL_SPEED, normalizeSave, buySkin, selectSkin, LEG_OFF, COMET_TIME, TRIGGER_DIST } from '../src/sim.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const STAND = ['idle', 'chase', 'windup', 'recover', 'cheer', 'stun'];

/** Robot player: dodges telegraphed lanes, aims at the middle of a defender for a nutmeg, runs into teammates, shoots when safe. */
function bot(m) {
  const b = m.ball;
  if (m.mode === 'shoot') { if (m.modeT > 0.4 && m.targetSafe(0.5)) m.tap(); return; }
  if (m.mode !== 'play') return;
  let tx = 0, tz = b.z + 30;
  // 1. get out of a red lane
  let flee = null;
  for (const d of m.defenders) {
    if (d.state !== 'windup' && d.state !== 'slide') continue;
    const rx = b.x - d.x, rz = b.z - d.z, along = rx * d.lx + rz * d.lz, perp = rx * d.lz - rz * d.lx;
    if (along > -2 && along < 13 && Math.abs(perp) < 3.2) { m._flee = m._flee || {}; if (!m._flee[d.id] || m._flee[d.id].t !== `${d.lx}|${d.lz}`) m._flee[d.id] = { t: `${d.lx}|${d.lz}`, dir: Math.abs(perp) > 0.4 ? Math.sign(perp) : (b.x > 0 ? -1 : 1) }; flee = m._flee[d.id].dir; }
  }
  if (flee) { m.setInput(flee, 0); return; }
  // 2. teammate for a one-two
  const mate = m.mates.find((q) => q.state === 'wait' && q.z > b.z && q.z - b.z < 22);
  const nd = m.defenders.filter((d) => STAND.includes(d.state) && d.state !== 'stun' && d.z > b.z + 1 && d.z - b.z < 12).sort((p, q) => p.z - q.z)[0];
  if (mate && (!nd || mate.z < nd.z)) { tx = mate.x; tz = mate.z; }
  else if (nd && !nd.nutmegged) { tx = nd.x + nd.hz * 0 + (-nd.hx) * 0; tz = nd.z; }
  const dz = Math.max(2, tz - b.z), dx = tx - b.x, len = Math.hypot(dx, dz);
  m.setInput(dx / len, dz / len);
}

function play(level, seed, cap = 240) {
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

test('five levels with growing defenders and a keeper that gets wider', () => {
  assert.equal(LEVELS.length, 5);
  for (let i = 1; i < 5; i++) { assert.ok(LEVELS[i].defenders > LEVELS[i - 1].defenders); assert.ok(LEVELS[i].reach > LEVELS[i - 1].reach); assert.ok(LEVELS[i].windup < LEVELS[i - 1].windup); }
  assert.deepEqual(SKINS.map((s) => [s.id, s.price]), [['classic', 0], ['flame', 120], ['ice', 200], ['gold', 320]]);
});

test('a robot completes all 5 levels: dodge, nutmeg, shoot', () => {
  let won = 0, nut = 0, one = 0, dodge = 0, goals = 0, warns = 0, slides = 0;
  for (let i = 0; i < 5; i++) {
    const { m, evs } = play(i, 3);
    const r = m.result();
    console.log(`level ${i + 1}: mode ${m.mode} goal ${r.goal} stars ${r.stars} tricks ${r.tricks} (nutmeg ${m.stats.nutmegs}, one-two ${m.stats.onetwos}, dodge ${m.stats.dodges}) stolen ${m.stats.stolen} saves ${m.stats.saves} time ${m.time.toFixed(0)}s`);
    assert.equal(m.mode, 'done', `level ${i + 1} not finished`);
    if (r.goal) assert.ok(r.stars >= 1 && r.coins > 0); else assert.ok(['lives', 'saved'].includes(r.reason));
    if (r.goal) won++;
    nut += m.stats.nutmegs; one += m.stats.onetwos; dodge += m.stats.dodges; goals += m.goals;
    warns += evs.filter((e) => e.type === 'tackleWarn').length; slides += evs.filter((e) => e.type === 'slide').length;
  }
  assert.ok(won >= 4, `the robot wins ${won}/5`); assert.equal(goals, won); assert.ok(nut > 0, 'nutmegs happen'); assert.ok(one > 0, 'one-twos happen'); assert.ok(dodge > 0, 'dodges happen');
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
  assert.equal(normalizeSave(null).unlocked, 1); assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 5);
  const s = normalizeSave({ coins: 100, owned: ['gold', 'bogus'], skin: 'bogus', stars: [9, -1] });
  assert.deepEqual(s.owned, ['classic', 'gold']); assert.equal(s.skin, 'classic'); assert.deepEqual(s.stars.slice(0, 2), [3, 0]); assert.equal(s.stars.length, 5);
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

test('three balls: every steal takes one, with none left it is full time', () => {
  const m = new Match({ level: 1 }); m.mates = []; assert.equal(m.lives, LIVES); assert.equal(LIVES, 3);
  const ev = [];
  for (let k = 0; k < 3; k++) {
    const d = m.defenders[0]; m.defenders = [d]; Object.assign(d, { x: 0, z: 30, state: 'slide', t: 0, lx: 0, lz: -1, near: 9, hit: false, hx: 0, hz: -1 });
    Object.assign(m.ball, { x: 0, z: 29, vx: 0, vz: 0, inv: 0 }); m.setInput(0, 0);
    for (let i = 0; i < 30 && m.mode === 'play'; i++) ev.push(...m.step(1 / 60));
    assert.equal(m.lives, 2 - k);
    if (k < 2) { assert.equal(m.mode, 'play'); for (let i = 0; i < 30; i++) ev.push(...m.step(1 / 60)); }
  }
  assert.equal(m.mode, 'lost'); for (let i = 0; i < 120; i++) ev.push(...m.step(1 / 60));
  const end = ev.find((e) => e.type === 'end'); assert.ok(end && !end.result.goal && end.result.reason === 'lives' && end.result.stars === 0);
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

test('level 1 is Warm Up with no teammate, level 2 is One-Two with one', () => {
  assert.equal(LEVELS[0].en, 'Warm Up'); assert.equal(LEVELS[0].mates, 0); assert.equal(LEVELS[1].en, 'One-Two'); assert.equal(LEVELS[1].mates, 1);
  const m = new Match({ level: 1 }); const mate = m.mates[0]; Object.assign(m.ball, { x: mate.x, z: mate.z - 10, inv: 0 }); const ev = m.step(1 / 60);
  assert.ok(ev.some((e) => e.type === 'mateHint'), 'PASS TO YOUR MATE!');
});
