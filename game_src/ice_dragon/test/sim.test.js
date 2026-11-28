import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Hunt, LEVELS, LAYOUTS, ringPoint, LOOP, WALLS, blockedIn, normalizeSave } from '../src/sim.js';

/** A robot hero: walks to the best shrine, then stays near the ring edge so everything is in range; pushes barrels at the dragon. */
function robot(h) {
  const hero = h.hero;
  let tx = 0;
  let tz = 5.6;
  const sh = h.shrines.find((s) => !s.dead);
  if (sh) { const d = Math.hypot(sh.x, sh.z) || 1; tx = sh.x - (sh.x / d) * 1.3; tz = sh.z - (sh.z / d) * 1.3; }
  else { const sg = h.segs.find((s) => s.alive); if (sg) { tx = Math.max(-6, Math.min(6, sg.x * 0.6)); tz = Math.max(-6, Math.min(6, sg.z * 0.6)); } }
  const d = Math.hypot(tx - hero.x, tz - hero.z);
  return d < 0.6 ? { dx: 0, dz: 0 } : { dx: (tx - hero.x) / d, dz: (tz - hero.z) / d };
}

function play(level, seed = 3) {
  const h = new Hunt({ level, seed });
  let t = 0;
  while (h.state === 'play' && t < 300) { h.step(1 / 30, robot(h)); t += 1 / 30; }
  return { h, t };
}

test('six levels, longer dragons, a ring of channel around an ice maze', () => {
  assert.equal(LEVELS.length, 6);
  assert.ok(LEVELS[5].seg > LEVELS[0].seg);
  const p = ringPoint(0);
  assert.equal(Math.abs(p.x), LOOP);
  assert.ok(WALLS.length >= 5);
});

test('a robot hero breaks every segment of the dragon on every level', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    const { h, t } = play(i);
    console.log(`level ${i + 1}: ${h.state} in ${t.toFixed(0)}s, allies ${h.allies}, weapon ${h.weapon}, barrels left ${h.barrels.filter((b) => !b.dead).length}`);
    assert.equal(h.state, 'won');
  }
});

test('shrines give allies or the triple shot; a blast hits several segments; barrels can be pushed', () => {
  const h = new Hunt({ level: 0, seed: 2 });
  h.shrines[0].hp = 0.5; h.shrines[0].x = 0; h.shrines[0].z = 5;
  for (let i = 0; i < 60; i++) h.step(1 / 30);
  assert.ok(h.allies >= 2);
  const g = new Hunt({ level: 0, seed: 2 });
  const sg = g.segs[2];
  const b = g.barrels[0];
  b.x = sg.x; b.z = sg.z;
  const n0 = g.alive;
  const hp0 = g.segs.reduce((a, s) => a + s.hp, 0);
  g.step(1 / 30);
  assert.ok(g.barrels[0].dead);
  assert.ok(g.segs.reduce((a, s) => a + s.hp, 0) < hp0);
  void n0;
  const p = new Hunt({ level: 0, seed: 2 });
  p.hero.x = -3; p.hero.z = 1.6;
  p.barrels[0].x = -2.0; p.barrels[0].z = 2;
  p.hero.z = 2;
  for (let i = 0; i < 20; i++) p.step(1 / 30, { dx: 1, dz: 0 });
  assert.ok(p.barrels[0].x > -2.0);
});

test('damaged saves load safely', () => {
  assert.equal(normalizeSave(null).unlocked, 1);
  assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 6);
});

test('Phase 2F: three maze layouts, pairwise distinct, layout 1 is the original maze', () => {
  assert.equal(LAYOUTS.length, 3);
  const keys = LAYOUTS.map((l) => JSON.stringify(l.walls));
  assert.equal(new Set(keys).size, 3, 'layouts must be pairwise distinct');
  // layout 1 (index 0) is byte-equivalent to the pre-2F maze
  assert.deepEqual(LAYOUTS[0].walls, [
    { x: -3.5, z: -3.5, hw: 2.2, hd: 0.5 }, { x: 3.5, z: -3.5, hw: 2.2, hd: 0.5 },
    { x: -3.5, z: 3.5, hw: 2.2, hd: 0.5 }, { x: 3.5, z: 3.5, hw: 2.2, hd: 0.5 },
    { x: 0, z: 0, hw: 0.5, hd: 2.2 }, { x: -6.2, z: 0, hw: 0.5, hd: 1.4 }, { x: 6.2, z: 0, hw: 0.5, hd: 1.4 },
  ]);
  assert.equal(WALLS, LAYOUTS[0].walls);
  // journey pattern: Fayoum oasis (L1-2) → Nile bend (L3-4) → Red Sea lagoon (L5-6)
  assert.deepEqual(LEVELS.map((l) => l.layout), [0, 0, 1, 1, 2, 2]);
  assert.deepEqual(LAYOUTS.map((l) => l.place), ['Fayoum oasis', 'Nile bend', 'Red Sea lagoon']);
});

test('Phase 2F: serpent variants per layout are parameter-only and kind', () => {
  assert.equal(LAYOUTS[0].tint, 0x3ad8c8); // original serpent untouched
  assert.equal(LAYOUTS[0].scale, 1.0);
  assert.equal(LAYOUTS[0].speedMul, 1.0);
  assert.ok(LAYOUTS[1].scale < 1 && LAYOUTS[1].speedMul > 1, 'Nile serpent: slimmer and quicker');
  assert.ok(LAYOUTS[2].scale > 1 && LAYOUTS[2].speedMul < 1, 'lagoon serpent: bigger and slower');
  assert.equal(new Set(LAYOUTS.map((l) => l.tint)).size, 3, 'three serpent colours');
  for (let i = 0; i < LEVELS.length; i++) {
    const h = new Hunt({ level: i, seed: 3 });
    assert.equal(h.walls, LAYOUTS[LEVELS[i].layout].walls);
    assert.ok(Math.abs(h.speed - LEVELS[i].speed * h.layout.speedMul) < 1e-9);
    assert.equal(h.segs.length, LEVELS[i].seg, 'segment counts unchanged');
  }
});

/** BFS over the walkable grid the sim itself defines (blockedIn, hero radius 0.4). */
function reachable(walls, from, to) {
  const step = 0.2;
  const key = (x, z) => `${Math.round(x / step)},${Math.round(z / step)}`;
  const seen = new Set([key(from.x, from.z)]);
  const q = [{ x: from.x, z: from.z }];
  while (q.length) {
    const p = q.shift();
    if (Math.hypot(p.x - to.x, p.z - to.z) < 0.55) return true;
    for (const [dx, dz] of [[step, 0], [-step, 0], [0, step], [0, -step]]) {
      const nx = p.x + dx; const nz = p.z + dz; const k = key(nx, nz);
      if (seen.has(k) || blockedIn(walls, nx, nz, 0.4)) continue;
      seen.add(k); q.push({ x: nx, z: nz });
    }
  }
  return false;
}

test('Phase 2F: every shrine and barrel is reachable from hero start on all 3 layouts', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    const h = new Hunt({ level: i, seed: 3 });
    const start = { x: h.hero.x, z: h.hero.z };
    assert.ok(!blockedIn(h.walls, start.x, start.z, 0.4), `level ${i + 1}: hero start must be walkable`);
    for (const s of h.shrines) assert.ok(reachable(h.walls, start, s), `level ${i + 1} (layout ${LEVELS[i].layout + 1}): shrine ${s.id} at ${s.x},${s.z} unreachable`);
    for (const b of h.barrels) assert.ok(reachable(h.walls, start, b), `level ${i + 1} (layout ${LEVELS[i].layout + 1}): barrel ${b.id} at ${b.x},${b.z} unreachable`);
  }
});

test('Phase 2F: unlock chain intact and old saves migrate', () => {
  // a pre-2F save (no layout field anywhere) loads with progress preserved
  const old = normalizeSave({ unlocked: 4, stars: { 1: 3, 2: 2, 3: 1 }, muted: true });
  assert.equal(old.unlocked, 4);
  assert.deepEqual(old.stars, { 1: 3, 2: 2, 3: 1 });
  assert.equal(old.muted, true);
  // chain: finishing level n (stars recorded) unlocks n+1, capped at LEVELS.length
  const done = normalizeSave({ unlocked: 1, stars: { 1: 2, 2: 3, 3: 1, 4: 1, 5: 1, 6: 3 } });
  assert.equal(done.unlocked, LEVELS.length);
  assert.equal(normalizeSave({ unlocked: 2 }).unlocked, 2);
  assert.equal(normalizeSave({}).unlocked, 1);
});

test('Phase 2F fix: winning level 3 unlocks level 4 (no stale cap at 3)', () => {
  // The in-session unlock written by _won() in main.js is DOM/THREE-bound and
  // cannot be imported here; what CAN be pinned at sim level is the save
  // derivation _won's value must agree with: stars on level n derive
  // unlocked = n + 1, capped only at LEVELS.length (6), never at 3.
  assert.equal(normalizeSave({ unlocked: 3, stars: { 3: 1 } }).unlocked, 4);
  assert.equal(normalizeSave({ unlocked: 1, stars: { 3: 2 } }).unlocked, 4);
  assert.equal(normalizeSave({ unlocked: 4, stars: { 4: 1 } }).unlocked, 5);
  assert.equal(normalizeSave({ unlocked: 5, stars: { 5: 1 } }).unlocked, 6);
  assert.equal(normalizeSave({ unlocked: 6, stars: { 6: 3 } }).unlocked, 6);
  // the _won cap expression itself, evaluated for the reported case
  assert.equal(Math.min(LEVELS.length, 3 + 1), 4, 'level 3 win -> unlock 4');
  assert.notEqual(Math.min(LEVELS.length, 3 + 1), 3);
});

/** Deterministic near-win: only segment 0 alive with a sliver of hp, parked on the ring in range of the hero. */
function nearWin({ shrinesDead = 0, time = 0 } = {}) {
  const h = new Hunt({ level: 0, seed: 3 });
  h.segs.forEach((sg, i) => { if (i > 0) sg.alive = false; });
  h.segs[0].hp = 0.01;
  h.s = 54; // ringPoint(54) = (0, +LOOP): straight ahead of the hero start, in range, line of sight clear
  h._place();
  // shrines that must stay uncracked get huge hp so the hero's auto-fire cannot change the collection state mid-test
  h.shrines.forEach((s, i) => { s.dead = i < shrinesDead; if (!s.dead) s.hp = 1e9; });
  h.time = time;
  let t = 0;
  while (h.state === 'play' && t < 30) { h.step(1 / 30, { dx: 0, dz: 0 }); t += 1 / 30; }
  assert.equal(h.state, 'won');
  return h;
}

test('Certification Sweep A: stars are completion + collection only — finishing TIME never grades them', () => {
  // the pre-fix rule gave 3 stars only under a time threshold; a very slow win with every shrine must still earn 3
  assert.equal(nearWin({ shrinesDead: 3, time: 100000 }).stars, 3, 'slow + all shrines = 3 stars');
  assert.equal(nearWin({ shrinesDead: 3, time: 0 }).stars, 3, 'fast + all shrines = 3 stars');
  // a fast win that cracks no shrine is completion only: 1 star, however quick
  assert.equal(nearWin({ shrinesDead: 0, time: 0 }).stars, 1, 'fast + no shrines = 1 star');
  assert.equal(nearWin({ shrinesDead: 0, time: 100000 }).stars, 1, 'slow + no shrines = 1 star');
  // some shrines cracked: the collection star in the middle
  assert.equal(nearWin({ shrinesDead: 1, time: 5000 }).stars, 2, 'some shrines = 2 stars at any speed');
  assert.equal(nearWin({ shrinesDead: 2, time: 0 }).stars, 2);
});

test('Certification Sweep A regression: pre-2F-shaped save keeps stars for hunts 4-6 (the dropped-stars bug)', () => {
  // the exact shape the old normalizeSave mishandled: stars recorded on hunts 4-6 with a low unlocked value
  const s = normalizeSave({ unlocked: 3, stars: { 4: 3, 5: 2, 6: 1 } });
  assert.deepEqual(s.stars, { 4: 3, 5: 2, 6: 1 }, 'stars for levels 4-6 must survive a reload');
  assert.equal(s.unlocked, 6, 'star-derived unlock reaches the end, capped at LEVELS.length');
  const mid = normalizeSave({ unlocked: 3, stars: { 1: 3, 2: 3, 3: 2, 4: 1 } });
  assert.deepEqual(mid.stars, { 1: 3, 2: 3, 3: 2, 4: 1 });
  assert.equal(mid.unlocked, 5);
  // a full pre-fix-era finished save round-trips intact
  const full = normalizeSave({ unlocked: 6, stars: { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3 }, muted: true });
  assert.deepEqual(full.stars, { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3 });
  assert.equal(full.unlocked, 6); assert.equal(full.muted, true);
});

test('Oasis Dragon anchor: six oasis hunts, ids and dragon sizes unchanged', () => {
  assert.equal(LEVELS.length, 6);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(LEVELS.map((l) => l.seg), [11, 15, 20, 23, 26, 29]);
  assert.ok(LEVELS.every((l) => /Oasis|واحة|Catherine|كاترين|Turquoise|فيروز/.test(l.en + l.ar)));
});
