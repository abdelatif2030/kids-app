import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Studio, RANKS, KINDS, SHOP, normalizeSave } from '../src/sim.js';

/** A robot creator: waits until the needle is in the green zone, then taps the best unlocked button. */
function tick(s) {
  if (s.promo) s.next();
  const d = Math.abs(s.needle.pos - s.zone.c);
  if (d < 0.04) { const k = s.unlocked('game') ? 'game' : s.unlocked('video') ? 'video' : 'photo'; s.tap(k); s.drain(); }
  for (const sh of SHOP) s.buy(sh.id);
  s.step(1 / 60);
}

test('six ranks from intern to the board, goals 5/10/16/22', () => {
  assert.equal(RANKS.length, 6);
  assert.equal(RANKS[0].id, 'intern');
  assert.equal(RANKS[5].id, 'board');
  assert.deepEqual(RANKS.slice(0, 4).map((r) => r.goal), [5, 10, 16, 22]);
});

test('a robot creator reaches the board of directors', () => {
  const s = new Studio({ seed: 4 });
  let t = 0;
  while (s.state === 'play' && t < 3000) { tick(s); t += 1 / 60; }
  console.log(`board in ${t.toFixed(0)}s, masterpieces ${s.masterpieces}, slop ${s.slop}, cash ${s.total}`);
  assert.equal(s.state, 'won');
  assert.ok(t < 1500);
});

test('the needle always swings; a tap is judged where it is: green master, yellow ok, red slop', () => {
  const s = new Studio({ seed: 2 });
  const p0 = s.needle.pos; s.step(0.2); assert.notEqual(s.needle.pos, p0);
  s.needle.pos = s.zone.c;
  assert.ok(['master', 'perfect'].includes(s.tap('photo')));
  assert.ok(s.cash > 0 && s.stars === 1 && s.streak === 1);
  s.needle.pos = Math.min(1, s.zone.c + s.zone.w * 0.75);
  assert.equal(s.tap('photo'), 'ok');
  s.needle.pos = s.zone.c > 0.5 ? 0 : 1;
  assert.equal(s.tap('photo'), 'slop');
  assert.equal(s.streak, 0);
  assert.equal(s.slop, 1);
});

test('a masterpiece moves the green zone', () => {
  const s = new Studio({ seed: 9 });
  const c = s.zone.c; s.needle.pos = c; s.tap('photo');
  assert.notEqual(s.zone.c, c);
});

test('VIDEO unlocks at level 2 and GAME at level 3', () => {
  const s = new Studio({ seed: 1 });
  assert.equal(s.unlocked('video'), false);
  assert.equal(s.tap('video'), null);
  s.rank = 1; assert.equal(s.unlocked('video'), true); assert.equal(s.unlocked('game'), false);
  s.rank = 2; assert.equal(s.unlocked('game'), true);
});

test('promotion waits for "next level"; slop never costs stars or cash', () => {
  const s = new Studio({ seed: 1 });
  s.stars = 4; s.needle.pos = s.zone.c; s.tap('photo');
  assert.equal(s.rank, 1); assert.equal(s.stars, 0); assert.equal(s.promo, true);
  s.needle.pos = 0.5; assert.equal(s.tap('photo'), null);
  s.next(); assert.equal(s.promo, false);
  s.stars = 3; const cash = s.cash; s.needle.pos = s.zone.c > 0.5 ? 0 : 1; s.tap('photo');
  assert.equal(s.stars, 3); assert.equal(s.cash, cash);
});

test('shop upgrades cost cash and make things easier', () => {
  const s = new Studio();
  assert.equal(s.buy('zone'), false);
  s.cash = 1000;
  const w0 = s.zoneW; const v0 = s.needleSpeed;
  assert.ok(s.buy('zone')); assert.ok(s.zoneW > w0);
  assert.ok(s.buy('needle')); assert.ok(s.needleSpeed < v0);
});

test('client orders from level 2 give bonus stars; hot streak at level 3; trend at level 4', () => {
  const s = new Studio({ seed: 1 });
  for (let i = 0; i < 30 * 30; i++) s.step(1 / 30);
  assert.equal(s.order, null); // none at level 1
  s.rank = 1; s.orderT = 0; s.step(0.1);
  assert.ok(s.order && s.order.kind === 'video');
  s.order = { kind: 'video', left: 1, total: 1, bonus: 3, time: 20, max: 20 };
  s.needle.pos = s.zone.c; s.tap('video');
  assert.ok(s.stars >= 5 || s.rank === 2);
  const h = new Studio(); h.rank = 2; h.streak = 3; assert.equal(h.hot, true); assert.equal(h.mult, 2);
  const t = new Studio({ seed: 3 }); t.rank = 3; let ev = false;
  for (let i = 0; i < 30 * 60; i++) { t.step(1 / 30); if (t.drain().some((e) => e.type === 'event')) ev = true; }
  assert.ok(ev);
  assert.ok(KINDS.game.cash > KINDS.photo.cash);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).best, 0);
});

test('career snapshot round-trips: rank, cash, stars and upgrades survive a new session', () => {
  const a = new Studio({ seed: 7 });
  a.cash = 432; a.stars = 3; a.rank = 2; a.total = 900; a.slop = 5; a.masterpieces = 4; a.streak = 2;
  a.up.gpu = 2; a.up.zone = 1; a.up.needle = 3; a.up.cash = 1;
  const snap = a.career();
  const b = new Studio({ seed: 99 });
  b.applyCareer(snap);
  assert.equal(b.rank, 2); assert.equal(b.cash, 432); assert.equal(b.stars, 3);
  assert.equal(b.total, 900); assert.equal(b.masterpieces, 4);
  assert.deepEqual(b.up, { gpu: 2, zone: 1, needle: 3, cash: 1 });
});

test('normalizeSave validates the career: garbage is clamped, a missing career stays null', () => {
  const bad = normalizeSave({ career: { cash: -50, rank: 99, up: { gpu: 999, zone: -2 } } });
  assert.equal(bad.career.cash, 0);
  assert.equal(bad.career.rank, RANKS.length - 1);
  assert.equal(bad.career.up.gpu, SHOP.find((s) => s.id === 'gpu').max);
  assert.equal(bad.career.up.zone, 0);
  assert.equal(normalizeSave({}).career, null);
  assert.equal(normalizeSave(null).career, null);
  const good = normalizeSave({ career: { cash: 10, rank: 1, up: { needle: 2 } } });
  assert.equal(good.career.rank, 1); assert.equal(good.career.up.needle, 2);
});
