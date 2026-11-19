import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Match, ROUNDS, PITCH, BARREL_R, normalizeSave, applyResult, buy, equip, COLORS } from '../src/sim.js';

const run = (m, secs, fn) => { const evs = []; const n = Math.round(secs * 60); for (let i = 0; i < n && m.phase !== 'over'; i++) { if (fn) fn(m, i); evs.push(...m.step(1 / 60)); } return evs; };

test('nine rounds, the last is the final, difficulty grows', () => {
  assert.ok(ROUNDS.length >= 9);
  assert.ok(ROUNDS[ROUNDS.length - 1].final);
  for (let i = 1; i < ROUNDS.length; i++) assert.ok(ROUNDS[i].skill >= ROUNDS[i - 1].skill);
});

test('four knights per team and a kickoff countdown, then play', () => {
  const m = new Match({ seed: 1 });
  assert.equal(m.knights.filter((k) => k.team === 0).length, 4);
  assert.equal(m.knights.filter((k) => k.team === 1).length, 4);
  const ev = run(m, 4);
  assert.ok(ev.some((e) => e.type === 'count' && e.n === 3));
  assert.ok(ev.some((e) => e.type === 'go'));
  assert.equal(m.phase, 'play');
});

test('the barrel never leaves the arena (random inputs, all hazards, all difficulties)', () => {
  for (const diff of ['easy', 'normal', 'hard']) for (let seed = 1; seed <= 4; seed++) {
    const m = new Match({ round: 8, diff, seed });
    let r = seed * 77;
    const rnd = () => { r = (r * 1103515245 + 12345) & 0x7fffffff; return r / 0x7fffffff; };
    run(m, 140, (mm, i) => {
      if (i % 20 === 0) { mm.input.x = rnd() * 2 - 1; mm.input.z = rnd() * 2 - 1; }
      if (i % 50 === 0) mm.pressDash();
      const b = mm.barrel;
      assert.ok(Number.isFinite(b.x) && Number.isFinite(b.z));
      assert.ok(Math.abs(b.x) <= PITCH.hw + 0.01, `x ${b.x}`);
      assert.ok(Math.abs(b.z) <= PITCH.hl + PITCH.pocket + 0.01, `z ${b.z}`);
      for (const k of mm.knights) assert.ok(Math.abs(k.x) <= PITCH.hw && Math.abs(k.z) <= PITCH.hl);
    });
  }
});

test('hazards are always telegraphed at least 0.8 s before they act', () => {
  const warn = new Map(); const bad = [];
  let falls = 0, boulderStuns = 0, opens = 0, goes = 0;
  for (let seed = 1; seed <= 3; seed++) {
    const m = new Match({ round: 8, diff: 'normal', seed, autoPlayer: true });
    const evs = run(m, 130);
    const wd = new Map(), wb = new Map();
    for (const e of evs) {
      if (e.type === 'doorWarn') wd.set(e.id, e.t);
      if (e.type === 'doorOpen') { opens++; if (e.t - wd.get(e.id) < 0.8) bad.push(e); }
      if (e.type === 'fall') { falls++; assert.ok(wd.has(e.door)); }
      if (e.type === 'boulderWarn') wb.set(e.id, e.t);
      if (e.type === 'boulderGo') { goes++; if (e.t - wb.get(e.id) < 0.8) bad.push(e); }
      if (e.type === 'stun' && e.kind === 'boulder') { boulderStuns++; assert.ok(wb.size > 0); }
    }
  }
  void warn;
  assert.equal(bad.length, 0);
  assert.ok(opens > 5 && goes > 5, `opens ${opens} goes ${goes}`);
  console.log(`doors opened ${opens}, falls ${falls}, boulders ${goes}, boulder stuns ${boulderStuns}`);
});

test('a barrel through the gate scores for the right team and play restarts at the centre', () => {
  const m = new Match({ seed: 3 }); run(m, 4);
  m.barrel.x = 0; m.barrel.z = -PITCH.hl + 2; m.barrel.vz = -16; m.barrel.vx = 0;
  const ev = run(m, 2);
  assert.ok(ev.some((e) => e.type === 'goal' && e.team === 0));
  assert.deepEqual(m.score, [1, 0]);
  run(m, 2.7);
  assert.equal(m.phase, 'kickoff');
  assert.equal(m.barrel.x, 0); assert.equal(m.barrel.z, 0);
  run(m, 3);
  assert.equal(m.phase, 'play');
  m.barrel.x = 1; m.barrel.z = PITCH.hl - 2; m.barrel.vz = 16; m.barrel.vx = 0;
  run(m, 2);
  assert.deepEqual(m.score, [1, 1]);
});

test('a barrel hitting the end wall beside the gate bounces and does not score', () => {
  const m = new Match({ seed: 3 }); run(m, 4);
  m.barrel.x = 9; m.barrel.z = -PITCH.hl + 3; m.barrel.vz = -18; m.barrel.vx = 0;
  run(m, 1.5);
  assert.deepEqual(m.score, [0, 0]);
  assert.ok(m.barrel.z >= -PITCH.hl + BARREL_R - 0.01);
});

test('the match ends by time (a lead wins, a draw goes to overtime then ends)', () => {
  const m = new Match({ seed: 5 });
  run(m, 140, (mm) => { mm.input.x = 0; mm.input.z = 0; });
  assert.equal(m.phase, 'over');
  const lead = new Match({ seed: 5 }); run(lead, 4); lead.score = [1, 0]; lead.timeLeft = 0.5;
  run(lead, 2); assert.equal(lead.phase, 'over'); assert.ok(lead.result().win);
});

test('first to five goals ends the match', () => {
  const m = new Match({ seed: 5 }); run(m, 4); m.score = [4, 0];
  m.barrel.x = 0; m.barrel.z = -PITCH.hl + 2; m.barrel.vz = -16;
  run(m, 6);
  assert.equal(m.phase, 'over'); assert.equal(m.result().stars, 3);
});

test('a dash stuns a rival briefly, then the rival is immune and the dash has a cooldown', () => {
  const m = new Match({ seed: 2, autoPlayer: false }); run(m, 4);
  const me = m.knights[0]; const rival = m.knights[4];
  for (const k of m.knights) if (k !== me && k !== rival) { k.x = k.team ? 13 : -13; k.z = k.team ? -22 : 22; }
  me.x = 0; me.z = 5; rival.x = 0; rival.z = 3.2; rival.vx = rival.vz = 0; m.barrel.x = 10; m.barrel.z = 20;
  me.cd = 0; m.input.x = 0; m.input.z = -1; m.pressDash();
  const ev = run(m, 0.5, (mm) => { mm.knights[4].cmd = { x: 0, z: 0, dash: false }; mm.knights[4].aiT = 9; });
  assert.ok(ev.some((e) => e.type === 'stun' && e.id === 4 && e.kind === 'dash'));
  assert.ok(me.cd > 0.5);
  assert.ok(rival.stun > 0 || rival.immune > 0);
});

test('a dash shoves the barrel hard', () => {
  const m = new Match({ seed: 2 }); run(m, 4);
  const me = m.knights[0]; me.x = 0; me.z = 4; m.barrel.x = 0; m.barrel.z = 0; me.cd = 0;
  m.input.x = 0; m.input.z = -1; m.pressDash();
  run(m, 0.4);
  assert.ok(m.barrel.vz < -5 || m.barrel.z < -3, `vz ${m.barrel.vz} z ${m.barrel.z}`);
});

test('same seed gives the same match', () => {
  const a = new Match({ seed: 9, autoPlayer: true }); const b = new Match({ seed: 9, autoPlayer: true });
  run(a, 40); run(b, 40);
  assert.deepEqual(a.score, b.score); assert.equal(a.barrel.x, b.barrel.x); assert.equal(a.barrel.z, b.barrel.z);
});

test('a bot team (player driven by the same AI) wins Easy in most seeds', () => {
  let wins = 0, draws = 0; const N = 12;
  for (let seed = 1; seed <= N; seed++) {
    const m = new Match({ round: 0, diff: 'easy', seed, autoPlayer: true });
    run(m, 400);
    assert.equal(m.phase, 'over');
    const r = m.result(); if (r.win) wins++; if (r.draw) draws++;
  }
  console.log(`easy: ${wins}/${N} wins, ${draws} draws`);
  assert.ok(wins >= 8, `wins ${wins}`);
});

test('the same bot is challenged on Hard in the final (it should not win every time)', () => {
  let wins = 0; const N = 8;
  for (let seed = 1; seed <= N; seed++) { const m = new Match({ round: 8, diff: 'hard', seed, autoPlayer: true }); run(m, 400); if (m.result().win) wins++; }
  console.log(`hard final: ${wins}/${N} wins`);
  assert.ok(wins < N);
});

test('save normalisation, shop and results', () => {
  const s = normalizeSave({ coins: 'x', unlocked: 99, stars: [9, -1, 'a'], color: 'pink', owned: { colors: ['nope'] }, diff: 'wild' });
  assert.equal(s.coins, 0); assert.equal(s.unlocked, ROUNDS.length); assert.equal(s.stars[0], 3); assert.equal(s.stars[1], 0); assert.equal(s.color, 'blue'); assert.equal(s.diff, 'normal');
  assert.deepEqual(normalizeSave(null).owned.colors, ['blue']);
  s.coins = 100;
  assert.equal(buy(s, 'color', 'pink').reason, 'bought'); assert.equal(s.coins, 100 - COLORS.find((c) => c.id === 'pink').price);
  assert.ok(equip(s, 'color', 'pink')); assert.ok(!equip(s, 'color', 'gold'));
  assert.equal(buy(s, 'helmet', 'crown').reason, 'coins');
  const t = normalizeSave(null); applyResult(t, 0, { win: true, goals: [3, 1], stars: 2, coins: 20 });
  assert.equal(t.unlocked, 2); assert.equal(t.stars[0], 2); assert.equal(t.coins, 20);
});
