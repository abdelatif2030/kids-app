import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Studio, RANKS, KINDS, SHOP, normalizeSave } from '../src/sim.js';

/** A robot creator: starts a creation and stops the needle when it is in the zone. */
function tick(s) {
  if (!s.cur) { s.make(['photo', 'video', 'game'][Math.floor(s.cash / 50) % 3]); }
  else if (Math.abs(s.cur.pos - s.zone.c) < 0.03) s.stop();
  for (const sh of SHOP) s.buy(sh.id);
  s.step(1 / 30);
}

test('six ranks from intern to the board', () => {
  assert.equal(RANKS.length, 6);
  assert.equal(RANKS[0].id, 'intern');
  assert.equal(RANKS[5].id, 'board');
});

test('a robot creator reaches the board of directors', () => {
  const s = new Studio({ seed: 4 });
  let t = 0;
  while (s.state === 'play' && t < 3000) { tick(s); t += 1 / 30; }
  console.log(`board in ${t.toFixed(0)}s, masterpieces ${s.masterpieces}, slop ${s.slop}, cash ${s.total}`);
  assert.equal(s.state, 'won');
  assert.ok(t < 1500);
});

test('green zone = masterpiece with cash and stars; far = slop and streak resets; near = a little cash', () => {
  const s = new Studio({ seed: 2 });
  s.make('photo'); s.cur.pos = s.zone.c;
  assert.equal(s.stop(), 'master');
  assert.ok(s.cash > 0 && s.stars === 1 && s.streak === 1);
  s.make('video'); s.cur.pos = Math.min(1, s.zone.c + s.zone.w * 0.75);
  assert.equal(s.stop(), 'ok');
  s.make('photo'); s.cur.pos = s.zone.c > 0.5 ? 0 : 1;
  assert.equal(s.stop(), 'slop');
  assert.equal(s.streak, 0);
  assert.equal(s.slop, 1);
});

test('shop upgrades cost cash and make things easier', () => {
  const s = new Studio();
  assert.equal(s.buy('zone'), false);
  s.cash = 1000;
  const w0 = s.zoneW;
  assert.ok(s.buy('zone'));
  assert.ok(s.zoneW > w0);
  assert.ok(s.buy('needle'));
  assert.ok(s.needleSpeed < 1.5);
});

test('orders give bonus stars and events come and go', () => {
  const s = new Studio({ seed: 1 });
  s.order = { kind: 'photo', left: 1, total: 1, bonus: 3, time: 40 };
  s.make('photo'); s.cur.pos = s.zone.c; s.stop();
  assert.ok(s.stars >= 4);
  let ev = false;
  for (let i = 0; i < 30 * 40; i++) for (const e of s.step(1 / 30)) if (e.type === 'event') ev = true;
  assert.ok(ev);
  assert.ok(KINDS.game.cash > KINDS.photo.cash);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).best, 0);
});
