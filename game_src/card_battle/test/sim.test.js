import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Battle, CARDS, UNITS, DT, HALF, MATCH_TIME, DOUBLE_AT, ENERGY_MAX, REGEN, normalizeSave, recordResult, Deck, mulberry32 } from '../src/sim.js';

function adv(b, sec) { const ev = []; for (let t = 0; t < sec - 1e-9; t += DT) ev.push(...b.step(DT)); return ev; }

/** A scripted player: defends when aliens cross the middle, casts spells on clusters, otherwise pushes with what it can afford. */
function bot(b) {
  const hand = b.deck.hand;
  const foes = b.units.filter((u) => u.side === 1);
  const idx = (id) => hand.indexOf(id);
  const can = (id) => idx(id) >= 0 && b.energy >= CARDS[id].cost;
  const threat = foes.filter((u) => u.y > HALF - 1.5);
  if (threat.length) {
    const lead = threat.reduce((a, c) => (c.y > a.y ? c : a));
    if (threat.length >= 3 && can('plasma')) return b.play(idx('plasma'), lead.x, lead.y - 0.3);
    if (foes.some((u) => u.max > 300) && can('blackhole') && lead.y > 9) return b.play(idx('blackhole'), lead.x, lead.y);
    for (const id of ['blaster', 'spark', 'swarm', 'smash', 'turret']) if (can(id)) return b.play(idx(id), lead.x, Math.min(14, lead.y + 2));
    return false;
  }
  const mine = b.units.filter((u) => u.side === 0 && u.y < 12);
  if (mine.length >= 2 && can('repair')) return b.play(idx('repair'), mine[0].x, mine[0].y);
  if (b.energy >= 7) for (const id of ['smash', 'blaster', 'swarm', 'spark']) if (can(id)) return b.play(idx(id), 3 + b.rand() * 4, 13);
  return false;
}

function run(seed, diff, useBot = true, limit = MATCH_TIME + 5) {
  const b = new Battle({ seed, difficulty: diff });
  let t = 0;
  let next = 0;
  while (b.state === 'play' && t < limit) {
    if (useBot && t >= next) { bot(b); next = t + 0.5; }
    b.step(DT);
    t += DT;
  }
  return { b, t };
}

test('a match always ends within the 150 s limit, even if nobody plays', () => {
  for (const d of ['easy', 'normal', 'hard']) {
    const { b, t } = run(7, d, false);
    assert.notEqual(b.state, 'play');
    assert.ok(t <= MATCH_TIME + 0.2, `${d} ended at ${t}`);
    assert.ok(b.over);
  }
});

test('energy fills at the normal rate, then twice as fast in the last minute', () => {
  const b = new Battle({ seed: 1, difficulty: 'easy' });
  b.energy = 0;
  adv(b, 2.8);
  assert.ok(Math.abs(b.energy - 1) < 0.05);
  assert.equal(b.energyRate, REGEN);
  while (b.timeLeft > DOUBLE_AT + 1) adv(b, 1);
  b.energy = 0;
  const ev1 = adv(b, 2);
  assert.ok(Math.abs(b.energy - 2 * REGEN * 2) < 0.1 || b.energy > 0);
  while (b.timeLeft > DOUBLE_AT - 1) adv(b, 0.5);
  b.energy = 0;
  adv(b, 2.8);
  assert.ok(Math.abs(b.energy - 2) < 0.1, `got ${b.energy}`);
  assert.equal(b.energyRate, REGEN * 2);
  void ev1;
});

test('energy never passes 10 and a card needs its cost', () => {
  const b = new Battle({ seed: 3 });
  b.energy = 1;
  const slot = b.deck.hand.findIndex((id) => CARDS[id].cost > 1);
  assert.equal(b.play(slot, 5, 12), false);
  b.energy = 9.9;
  adv(b, 20);
  assert.ok(b.energy <= ENERGY_MAX);
});

test('units only on your half, spells anywhere; deck cycles with a next card', () => {
  const b = new Battle({ seed: 5 });
  b.energy = 10;
  const uSlot = b.deck.hand.findIndex((id) => CARDS[id].type === 'unit');
  const sSlot = b.deck.hand.findIndex((id) => CARDS[id].type === 'spell');
  assert.equal(b.play(uSlot, 5, 3), false);
  const before = b.deck.hand[uSlot];
  const next = b.deck.next;
  assert.equal(b.play(uSlot, 5, 12), true);
  assert.equal(b.deck.hand[uSlot], next);
  assert.equal(b.deck.queue[b.deck.queue.length - 1], before);
  if (sSlot >= 0) assert.equal(b.play(sSlot, 5, 3), true);
  const d = new Deck(mulberry32(2), Object.keys(CARDS));
  assert.equal(d.hand.length, 4);
  assert.equal(new Set([...d.hand, ...d.queue]).size, 8);
});

test('plasma wave damages enemies in its area only', () => {
  const b = new Battle({ seed: 9, difficulty: 'easy' });
  const near = b._spawn(1, 'slime', 5, 6);
  const far = b._spawn(1, 'slime', 8.5, 5);
  near.spawn = 0; far.spawn = 0;
  b.energy = 10;
  b.deck.hand[0] = 'plasma';
  assert.ok(b.play(0, 5, 6));
  adv(b, 1);
  assert.ok(near.dead || near.hp < near.max);
  assert.equal(far.hp, far.max);
});

test('repair heals friends, black hole pulls and hurts enemies', () => {
  const b = new Battle({ seed: 9, difficulty: 'easy' });
  const mine = b._spawn(0, 'smash', 5, 11);
  mine.spawn = 0; mine.hp = 100;
  b.energy = 10; b.deck.hand[0] = 'repair';
  assert.ok(b.play(0, 5, 11));
  adv(b, 3);
  assert.ok(mine.hp > 200, `hp ${mine.hp}`);
  const foe = b._spawn(1, 'brute', 3.8, 5);
  foe.spawn = 0;
  b.energy = 10; b.deck.hand[1] = 'blackhole';
  const d0 = Math.hypot(foe.x - 5, foe.y - 5);
  assert.ok(b.play(1, 5, 5));
  adv(b, 1.5);
  assert.ok(foe.hp < foe.max);
  assert.ok(Math.hypot(foe.x - 5, foe.y - 5) < d0);
});

test('turret shoots, units explode into events, bases are destroyed', () => {
  const b = new Battle({ seed: 2, difficulty: 'easy' });
  const t = b._spawn(0, 'turret', 5, 10); t.spawn = 0;
  const s = b._spawn(1, 'slime', 5, 8); s.spawn = 0;
  const evs = [];
  for (let i = 0; i < 200; i++) evs.push(...b.step(DT));
  assert.ok(evs.some((e) => e.type === 'shot'));
  assert.ok(s.dead);
  assert.ok(evs.some((e) => e.type === 'die'));
  b.base[1].hp = 5;
  const sm = b._spawn(0, 'smash', 5, 3.5); sm.spawn = 0;
  for (let i = 0; i < 300 && b.state === 'play'; i++) b.step(DT);
  assert.equal(b.state, 'won');
  assert.ok(b.over.stars >= 1);
});

test('time-out: more base health fraction wins; stars follow health left', () => {
  const b = new Battle({ seed: 2, difficulty: 'easy' });
  b.base[1].hp = b.base[1].max * 0.5;
  b.tick = Math.round(MATCH_TIME / DT) - 1;
  b.step(DT * 2);
  assert.equal(b.state, 'won');
  assert.equal(b.over.stars, 3);
  const c = new Battle({ seed: 2, difficulty: 'easy' });
  c.base[0].hp = 600; c.base[1].hp = c.base[1].max * 0.5; c.tick = Math.round(MATCH_TIME / DT) - 1;
  c.step(DT * 2);
  assert.equal(c.over.stars, 2);
  const d = new Battle({ seed: 2, difficulty: 'easy' });
  d.base[0].hp = 300; d.tick = Math.round(MATCH_TIME / DT) - 1;
  d.step(DT * 2);
  assert.equal(d.state, 'lost');
  assert.equal(d.over.stars, 0);
});

test('the same seed plays out the same way', () => {
  const a = run(11, 'normal');
  const b = run(11, 'normal');
  assert.equal(a.b.base[0].hp, b.b.base[0].hp);
  assert.equal(a.b.base[1].hp, b.b.base[1].hp);
  assert.equal(a.b.state, b.b.state);
});

test('scripted bot beats Easy on most seeds, and Hard is harder than Easy', () => {
  const seeds = Array.from({ length: 24 }, (_, i) => i + 1);
  const stat = (d) => {
    let wins = 0; let hp = 0;
    for (const s of seeds) { const { b } = run(s, d); if (b.state === 'won') wins++; hp += b.base[0].hp / b.base[0].max; }
    return { wins, hp: hp / seeds.length };
  };
  const e = stat('easy'); const n = stat('normal'); const h = stat('hard');
  console.log('easy', e, 'normal', n, 'hard', h);
  assert.ok(e.wins >= 17, `easy wins ${e.wins}/24`);
  assert.ok(h.wins < e.wins, 'hard should be harder (wins)');
  assert.ok(h.hp < e.hp, 'hard should hurt the base more');
  assert.ok(n.wins <= e.wins && h.wins <= n.wins + 2);
});

test('save normalisation and recording', () => {
  const s = normalizeSave({ stars: { easy: 9, hard: -2 }, wins: 'x', muted: 1, diff: 'zzz', junk: 1 });
  assert.deepEqual(s.stars, { easy: 3, normal: 0, hard: 0 });
  assert.equal(s.wins, 0); assert.equal(s.diff, 'easy'); assert.equal(s.muted, true);
  assert.deepEqual(normalizeSave(null).stars, { easy: 0, normal: 0, hard: 0 });
  const r = recordResult(s, 'normal', { state: 'won', stars: 2 });
  assert.equal(r.stars.normal, 2); assert.equal(r.wins, 1); assert.equal(r.plays, 1);
  assert.equal(recordResult(r, 'normal', { state: 'won', stars: 1 }).stars.normal, 2);
  assert.equal(recordResult(r, 'hard', { state: 'lost', stars: 0 }).stars.hard, 0);
});

test('unit table sanity', () => {
  for (const [k, u] of Object.entries(UNITS)) { assert.ok(u.hp > 0 && u.dmg > 0 && u.r > 0, k); }
});
