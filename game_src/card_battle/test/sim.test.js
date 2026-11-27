import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Battle, CARDS, ALIEN_CARDS, UNITS, DT, HALF, ENERGY_MAX, REGEN, normalizeSave, recordResult, Deck, mulberry32, CAMPAIGN, DIFFS, DIFF_RANK, recordCampaignResult, campaignUnlocked } from '../src/sim.js';

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

function run(seed, diff, useBot = true, limit = 1200) {
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

test('kind rules (2.2): no match clock — with both bases alive the battle simply continues', () => {
  const b = new Battle({ seed: 7, difficulty: 'easy' });
  let sawDouble = false;
  for (let t = 0; t < 400; t += DT) { // far beyond the old 150 s limit
    b.base[0].hp = b.base[0].max; b.base[1].hp = b.base[1].max; // keep both bases standing
    for (const e of b.step(DT)) if (e.type === 'double') sawDouble = true;
  }
  assert.equal(b.state, 'play', 'time alone never ends a match');
  assert.equal(sawDouble, false, 'no late-match energy surge exists');
  assert.equal(b.energyRate, REGEN);
});

test('energy fills at one constant rate for the whole match', () => {
  const b = new Battle({ seed: 1, difficulty: 'easy' });
  b.energy = 0;
  adv(b, 2.8);
  assert.ok(Math.abs(b.energy - 1) < 0.05);
  assert.equal(b.energyRate, REGEN);
  for (let t = 0; t < 300; t += DT) { b.base[0].hp = b.base[0].max; b.base[1].hp = b.base[1].max; b.step(DT); } // five minutes in…
  assert.equal(b.state, 'play');
  b.energy = 0;
  adv(b, 2.8); // …still the same gentle rate
  assert.ok(Math.abs(b.energy - 1) < 0.05, `got ${b.energy}`);
  assert.equal(b.energyRate, REGEN);
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

test('a match ends when a base falls; stars follow the base health left', () => {
  const b = new Battle({ seed: 2, difficulty: 'easy' });
  b.base[1].hp = 0;
  b.step(DT * 2);
  assert.equal(b.state, 'won');
  assert.equal(b.over.stars, 3);
  const c = new Battle({ seed: 2, difficulty: 'easy' });
  c.base[0].hp = c.base[0].max * 0.6; c.base[1].hp = 0;
  c.step(DT * 2);
  assert.equal(c.state, 'won');
  assert.equal(c.over.stars, 2);
  const d = new Battle({ seed: 2, difficulty: 'easy' });
  d.base[0].hp = 0;
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
  assert.deepEqual(s.stars, { easy: 3, normal: 0, hard: 0, expert: 0, legend: 0 });
  assert.equal(s.wins, 0); assert.equal(s.diff, 'easy'); assert.equal(s.muted, true);
  assert.deepEqual(normalizeSave(null).stars, { easy: 0, normal: 0, hard: 0, expert: 0, legend: 0 });
  const r = recordResult(s, 'normal', { state: 'won', stars: 2 });
  assert.equal(r.stars.normal, 2); assert.equal(r.wins, 1); assert.equal(r.plays, 1);
  assert.equal(recordResult(r, 'normal', { state: 'won', stars: 1 }).stars.normal, 2);
  assert.equal(recordResult(r, 'hard', { state: 'lost', stars: 0 }).stars.hard, 0);
});

test('unit table sanity', () => {
  for (const [k, u] of Object.entries(UNITS)) { assert.ok(u.hp > 0 && u.dmg > 0 && u.r > 0, k); }
});

// ---- Phase 2E (Batch F): the 8-duel Nile campaign ---------------------------------------------------------------------------------

test('campaign: 8 duels, distinct landmarks, rising difficulty curve', () => {
  assert.equal(CAMPAIGN.length, 8);
  assert.equal(new Set(CAMPAIGN.map((d) => d.id)).size, 8);
  assert.equal(new Set(CAMPAIGN.map((d) => d.en)).size, 8);
  for (const d of CAMPAIGN) {
    assert.ok(d.ar && d.en && d.icon, d.id);
    assert.ok(DIFFS[d.diff], `${d.id} diff ${d.diff}`);
    assert.ok(Array.isArray(d.focus) && d.focus.length >= 1 && d.focus.every((f) => ALIEN_CARDS[f]), `${d.id} focus must name real alien cards`);
  }
  const ranks = CAMPAIGN.map((d) => DIFF_RANK[d.diff]);
  for (let i = 1; i < ranks.length; i++) assert.ok(ranks[i] >= ranks[i - 1], `duel ${i + 1} easier than duel ${i}`);
  assert.ok(ranks[ranks.length - 1] > ranks[0], 'the finale is harder than the opener');
});

test('campaign: unlock chain — win k unlocks k+1, win 8 completes the tour', () => {
  let s = normalizeSave(null);
  assert.equal(s.campaign.unlocked, 1);
  assert.equal(campaignUnlocked(s, 0), true);
  assert.equal(campaignUnlocked(s, 1), false);
  for (let i = 0; i < CAMPAIGN.length; i++) {
    assert.equal(campaignUnlocked(s, i), true, `duel ${i + 1} should be unlocked before playing it`);
    s = recordCampaignResult(s, i, { state: 'won', stars: 2 });
    assert.equal(s.campaign.won[i], true);
    if (i + 1 < CAMPAIGN.length) {
      assert.equal(s.campaign.unlocked, i + 2);
      assert.equal(campaignUnlocked(s, i + 1), true);
      assert.equal(s.campaign.complete, false);
    }
  }
  assert.equal(s.campaign.complete, true);
  assert.equal(s.campaign.unlocked, CAMPAIGN.length);
  assert.deepEqual(s.campaign.album, CAMPAIGN.map((d) => d.id));
});

test('campaign: album award logic — win earns the card once, a loss earns nothing', () => {
  let s = normalizeSave(null);
  s = recordCampaignResult(s, 0, { state: 'lost', stars: 0 });
  assert.deepEqual(s.campaign.album, []);
  assert.equal(s.campaign.won[0], false);
  assert.equal(s.campaign.unlocked, 1);
  s = recordCampaignResult(s, 0, { state: 'draw', stars: 0 });
  assert.deepEqual(s.campaign.album, []);
  s = recordCampaignResult(s, 0, { state: 'won', stars: 1 });
  assert.deepEqual(s.campaign.album, [CAMPAIGN[0].id]);
  s = recordCampaignResult(s, 0, { state: 'won', stars: 3 }); // replaying a won duel…
  assert.deepEqual(s.campaign.album, [CAMPAIGN[0].id], '…never duplicates the card');
  assert.equal(recordCampaignResult(s, 99, { state: 'won', stars: 3 }).campaign.album.length, 1, 'bad index ignored');
});

test('campaign: save migration — an old save starts a fresh tour and keeps free play intact', () => {
  const old = { stars: { easy: 3, hard: 2 }, wins: 7, plays: 12, muted: true, tutorial: true, diff: 'hard' };
  const s = normalizeSave(old);
  assert.deepEqual(s.campaign, { unlocked: 1, won: [false, false, false, false, false, false, false, false], album: [], complete: false });
  assert.equal(s.stars.easy, 3); assert.equal(s.stars.hard, 2);
  assert.equal(s.wins, 7); assert.equal(s.plays, 12); assert.equal(s.diff, 'hard'); assert.equal(s.muted, true);
  const r = recordResult(s, 'hard', { state: 'won', stars: 3 }); // free play still records exactly as before…
  assert.equal(r.wins, 8); assert.equal(r.stars.hard, 3);
  assert.deepEqual(r.campaign, s.campaign, '…and never disturbs the campaign');
  const junk = normalizeSave({ campaign: { unlocked: 99, won: [true, 'x'], album: ['giza', 'nope', 'giza'] } });
  assert.equal(junk.campaign.unlocked, 8);
  assert.deepEqual(junk.campaign.album, ['aswan', 'philae', 'giza'], 'album is healed from won duels, deduped, in tour order');
});

test('campaign: every duel completes with a winner, and the test bot wins each duel at least sometimes', () => {
  for (let i = 0; i < CAMPAIGN.length; i++) {
    const d = CAMPAIGN[i];
    const seeds = Array.from({ length: d.diff === 'hard' ? 24 : 12 }, (_, k) => k + 1); // Hard is the tightest duel for the bot (see REVIEW)
    let wins = 0;
    for (const seed of seeds) {
      const { b } = run(seed, d.diff);
      assert.notEqual(b.state, 'play', `duel ${i + 1} (${d.en}) seed ${seed} never ended`);
      if (b.state === 'won') wins++;
    }
    console.log(`duel ${i + 1} ${d.en} [${d.diff}] bot wins ${wins}/${seeds.length}`);
    assert.ok(wins >= 1, `duel ${i + 1} (${d.en}, ${d.diff}) is a wall for the test bot: 0/${seeds.length} wins`);
  }
});

import fs from 'node:fs';

test("Heroes' Cards anchor: neon battle becomes the heroes' card game", () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("title: ['بطاقات الأبطال', \"Heroes' Cards\"]"));
  assert.ok(!main.includes('Neon Card Battle'));
});
