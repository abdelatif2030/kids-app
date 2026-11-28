import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, buildRoad, levelLen, LEVELS, UPG, upgradeCost, normalizeSave, robotRun, robotSteer, goalFor, themeOf, panoOf, THEMES, THEME_PANO, FIN, STOPS, tourCards, DRESS, dressOf } from '../src/sim.js';
import { Pile, capFor } from '../src/pile.js';

test('thirty levels in five themes, each road longer, ending at the bank', () => {
  assert.ok(LEVELS >= 30);
  assert.deepEqual(THEMES, ['meadow', 'desert', 'snow', 'candy', 'space']);
  for (let i = 0; i < LEVELS; i++) {
    const road = buildRoad(i);
    assert.equal(road.L, levelLen(i));
    assert.ok(road.things.some((t) => t.kind === 'gate'));
    assert.ok(road.things.some((t) => t.kind === 'pile'));
    assert.equal(road.theme, themeOf(i));
  }
  assert.ok(levelLen(29) > levelLen(0) * 4);
  // crazier: later levels use the new hazards
  const kinds = new Set(); for (let i = 20; i < 30; i++) for (const t of buildRoad(i).things) kinds.add(t.kind);
  for (const k of ['mwall', 'spinner', 'conv', 'ramp']) assert.ok(kinds.has(k), k);
  assert.ok(buildRoad(29).zones.curves.length > 0 && buildRoad(29).zones.narrows.length > 0 && buildRoad(29).zones.bumps.length > 0);
});

test('a robot driver finishes every one of the 30 levels and banks balls and coins', () => {
  for (let i = 0; i < LEVELS; i++) {
    const r = robotRun(i, {});
    assert.equal(r.state, 'done', `level ${i + 1}`);
    assert.ok(r.coins > 0, `coins level ${i + 1}`);
    assert.ok(goalFor(i) >= 20);
  }
});

test('piles add balls, x3 multiplies, a wall knocks some out but never all; armour reduces the loss; upgrades cost coins', () => {
  const mk = (up) => { const r = new Run({ level: 0, seed: 1, up }); r.things = [{ id: 1, kind: 'pile', x: 0, z: 8, n: 30, w: 1.6 }, { id: 2, kind: 'gate', x: 0, z: 14, w: 3, op: 'mul', v: 3 }, { id: 3, kind: 'wall', x: 0, z: 22, w: 3, loss: 0.2 }]; return r; };
  const r = mk({});
  const b0 = r.balls;
  for (let i = 0; i < 30 * 3; i++) r.step(1 / 30);
  const full = (b0 + 30) * 3;
  assert.equal(r.balls, full - Math.round(full * 0.2));
  assert.ok(r.balls > 0);
  const a = mk({ armor: 4 }); const a0 = a.balls; for (let i = 0; i < 30 * 3; i++) a.step(1 / 30);
  assert.ok((a.balls / ((a0 + 30) * 3)) > (r.balls / full));
  assert.equal(upgradeCost('wide', 0), UPG[1].base);
  assert.equal(upgradeCost('wide', 99), null);
  assert.ok(new Run({ up: { wide: 3 } }).W > new Run().W);
  assert.equal(UPG.length, 5);
});

test('damaged saves load safely', () => { assert.equal(normalizeSave(null).unlocked, 1); assert.equal(normalizeSave({ unlocked: 99 }).unlocked, 30); assert.deepEqual(normalizeSave({ stars: { 1: 9 } }).stars, { 1: 3 }); });

/** Drive a run with the real ball physics. */
function drivePhysics(level, opts = {}) {
  const run = new Run({ level, up: opts.up || {} });
  if (opts.things) run.things = opts.things;
  const pile = new Pile(); pile.begin(run);
  const dt = 1 / 60; let t = 0; const log = { maxLive: 0, bad: 0, overCap: 0, minY: 0 };
  const w = pile.w;
  while (run.state !== 'done' && t < (opts.maxT || 200)) {
    if (!opts.noSteer) robotSteer(run);
    const ev = run.step(dt); pile.update(dt, ev); t += dt;
    if (opts.each) opts.each(run, pile, ev);
    const live = pile.live; log.maxLive = Math.max(log.maxLive, live);
    if (live > pile.cap) log.overCap++;
    const T = w.T;
    for (let i = 0; i < w.max; i++) if (w.state[i]) {
      const x = w.x[i], y = w.y[i], z = w.z[i];
      if (!(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) || Math.abs(x - T.x) > 60 || y < -12 || y > 40 || Math.abs(z - T.z) > 60) log.bad++;
    }
  }
  return { run, pile, log, t };
}

test('physics: spheres never escape the world, the pile never exceeds its cap, and the count follows the pile', () => {
  for (const lv of [0, 14, 29]) {
    const { run, pile, log } = drivePhysics(lv);
    assert.equal(run.state, 'done', `level ${lv + 1}`);
    assert.equal(log.bad, 0, 'a sphere escaped the world');
    assert.equal(log.overCap, 0, 'more spheres than the cap');
    assert.ok(log.maxLive <= pile.cap);
    assert.ok(run.balls >= 0 && Number.isFinite(run.balls));
  }
});

test('physics: with a count below the cap the visible spheres equal the count (conservation) while driving straight', () => {
  const things = [{ id: 1, kind: 'pile', x: 0, z: 10, n: 40, w: 1.6 }, { id: 2, kind: 'gate', x: 0, z: 40, w: 3, op: 'add', v: 60 }];
  let checks = 0;
  const { run, pile } = drivePhysics(0, { things, noSteer: true, maxT: 14, each: (r, p) => { if (r.state === 'run' && r.time > 8 && r.time < 12) { assert.equal(p.live, Math.min(r.balls, p.cap)); checks++; } } });
  assert.ok(checks > 100);
  assert.ok(run.balls >= 80);
  assert.equal(capFor(3.0) <= 560, true);
});

test('physics: a wall hit loses balls (count drops, spheres fly out) and the heavy pile spills over the sides when it overflows', () => {
  const things = [{ id: 1, kind: 'wall', x: 0, z: 60, w: 3, loss: 0.2 }];
  const run0 = new Run({ level: 0, up: { start: 8 } });
  const pre = run0.balls;
  let before = 0, after = 0, ejected0 = 0;
  const { run, pile } = drivePhysics(0, { things, up: { start: 8 }, noSteer: true, maxT: 12, each: (r, p, ev) => { if (ev.some((e) => e.type === 'wall')) { before = r.balls + ev.find((e) => e.type === 'wall').lost; after = r.balls; ejected0 = p.stats.ejected; } } });
  assert.ok(before > 0 && after < before, 'the wall must remove balls');
  assert.ok(ejected0 > 0, 'spheres must fly out');
  assert.ok(run.balls < pre + 1);
  // overflow: far more balls than the shovel can hold -> spheres spill and the count drops
  const big = new Run({ level: 0 }); big.things = []; big.balls = 5000; const p2 = new Pile(); p2.begin(big);
  for (let i = 0; i < 60 * 6; i++) { big.step(1 / 60); p2.update(1 / 60, []); }
  assert.ok(p2.live <= p2.cap);
  assert.ok(FIN.pitLen > 0);
});

test('physics: the bank finale pours the pile into the pit and keeps the count', () => {
  const { run, pile } = drivePhysics(2);
  assert.equal(run.state, 'done');
  assert.ok(run.coins > 0);
  assert.ok(pile.bankStart > 0 && pile.banked >= pile.bankStart * 0.6, `banked ${pile.banked}/${pile.bankStart}`);
});

test('panoramas follow the theme, not a rotation (B2: pano keyed to what the painting shows)', async () => {
  const { existsSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const artDir = fileURLToPath(new URL('../../../assets/games/ball_scoop/art/', import.meta.url));
  // pano changes exactly at theme boundaries (every 6 levels), never mid-theme
  // (the single exception is the finale override, asserted separately below)
  for (let lv = 0; lv < LEVELS - 2; lv++) {
    if (themeOf(lv) === themeOf(lv + 1)) assert.equal(panoOf(lv), panoOf(lv + 1), `levels ${lv}/${lv + 1} share a theme but not a pano`);
  }
  assert.equal(panoOf(0), 3, 'sea-bridge meadow levels fly the Alexandria coast');
  assert.equal(panoOf(6), 2, 'desert levels run the Old Cairo bazaar');
  assert.equal(panoOf(12), 0, 'snow has no truthful painting: no ring');
  assert.equal(panoOf(18), 1, 'candy levels get the funfair');
  assert.equal(panoOf(24), 5, 'space levels get the rainbow sky road');
  assert.equal(panoOf(LEVELS - 1), 6, 'the finale gets the treasure vault');
  for (let n = 1; n <= 6; n++) assert.ok(existsSync(`${artDir}pano${n}.webp`), `missing pano${n}.webp`);
});

test('Phase 2H freeze: the 30 levels/roads/goals are byte-identical after the tour was added', () => {
  assert.equal(LEVELS, 30);
  assert.equal(buildRoad(0).things.length, 22); assert.equal(buildRoad(0).L, 230);
  assert.equal(buildRoad(7).things.length, 43); assert.equal(buildRoad(7).L, 412);
  assert.equal(buildRoad(29).things.length, 108); assert.equal(buildRoad(29).L, 984);
  assert.equal(goalFor(0), 150); assert.equal(goalFor(29), 700);
  assert.deepEqual(THEMES, ['meadow', 'desert', 'snow', 'candy', 'space']);
});

test('Phase 2H tour stops: exactly 30, one per level, six per theme leg, named ar+en with facts', () => {
  assert.equal(STOPS.length, LEVELS);
  const names = new Set();
  STOPS.forEach((s, i) => {
    assert.ok(s.ar && s.en && s.factAr && s.factEn, `stop ${i + 1} needs ar/en names and facts`);
    names.add(s.en);
    assert.equal(tourCards({})[i].theme, themeOf(i), 'card leg follows the level theme');
  });
  assert.equal(names.size, 30, 'stop names are unique');
  // the Corniche leg runs west→east as the REVIEW promised: Qaitbey first, Montazah last of the leg
  assert.equal(STOPS[0].en, 'Qaitbey Citadel'); assert.equal(STOPS[5].en, 'Montazah Palace');
  assert.equal(STOPS[29].en, 'Aswan Sky');
});

test('Phase 2H tour cards: derived from the save only — fresh all locked, facts never leak', () => {
  const fresh = tourCards(null);
  assert.equal(fresh.length, 30);
  assert.ok(fresh.every((c) => !c.earned && c.stars === 0 && c.factAr === null && c.factEn === null));
  const partial = tourCards({ unlocked: 3, stars: { 1: 3, 2: 1 }, best: { 1: 400 } });
  assert.equal(partial[0].earned, true); assert.equal(partial[0].stars, 3); assert.equal(partial[0].best, 400);
  assert.ok(partial[0].factAr.includes('فنار') && partial[0].factEn.includes('Pharos'));
  assert.equal(partial[1].earned, true); assert.equal(partial[1].stars, 1);
  assert.ok(partial.slice(2).every((c) => !c.earned && c.factAr === null && c.factEn === null), 'mid-tour unearned cards stay secret');
  const full = tourCards({ unlocked: 30, stars: Object.fromEntries(Array.from({ length: 30 }, (_, i) => [i + 1, 2])) });
  assert.ok(full.every((c) => c.earned && c.factAr && c.factEn));
});

test('Phase 2H old-save migration: a pre-tour save keeps everything and gains its cards for free', () => {
  const legacy = { unlocked: 5, stars: { 1: 2, 2: 3, 3: 1, 4: 1 }, best: { 1: 260, 2: 300 }, coins: 123, up: { start: 2 }, muted: true };
  const n = normalizeSave(legacy);
  assert.equal(n.unlocked, 5); assert.deepEqual(n.stars, legacy.stars); assert.deepEqual(n.best, legacy.best);
  assert.equal(n.coins, 123); assert.equal(n.up.start, 2); assert.equal(n.muted, true);
  const cards = tourCards(legacy);
  assert.deepEqual(cards.filter((c) => c.earned).map((c) => c.n), [1, 2, 3, 4], 'exactly the finished levels hold cards');
  assert.equal(tourCards({ stars: { 1: 9 } })[0].stars, 3, 'damaged saves clamp safely');
  assert.equal(tourCards('junk').filter((c) => c.earned).length, 0);
});

test('Phase 2H campaign proof: the robot plays level 1→30 in order under the game’s own progression, and the tour completes', () => {
  // mirrors main.js _done(): stars/best recorded, unlocked advances by one, card earned on finish
  const save = normalizeSave(null);
  for (let i = 0; i < LEVELS; i++) {
    assert.ok(i + 1 <= save.unlocked, `level ${i + 1} must be open when the campaign reaches it`);
    const r = robotRun(i, save.up);
    assert.equal(r.state, 'done', `level ${i + 1}`);
    const stars = r.starsFor();
    assert.ok(stars >= 1, 'finishing always earns at least one star (kind rules)');
    save.best[i + 1] = Math.max(save.best[i + 1] || 0, r.balls);
    save.stars[i + 1] = Math.max(save.stars[i + 1] || 0, stars);
    save.unlocked = Math.max(save.unlocked, Math.min(LEVELS, i + 2));
    const cards = tourCards(save);
    assert.equal(cards.filter((c) => c.earned).length, i + 1, `after level ${i + 1} exactly ${i + 1} cards are earned`);
    assert.equal(cards[i].earned, true); assert.ok(cards[i].factAr && cards[i].factEn);
  }
  assert.equal(save.unlocked, LEVELS);
  assert.ok(tourCards(save).every((c) => c.earned), 'the full 30-stop tour card is complete');
});

test('Phase 2H tour screen is wired into the menu (main.js)', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("showMenu('tour')"), 'menu reaches the tour screen');
  assert.ok(main.includes('tourCards(this.save)'), 'cards are save-derived in the UI');
  assert.ok(main.includes("tour: ['بطاقة الجولة', 'Tour card']"));
});

test('Director Protocol: gentle rules — a child who never steers still finishes every level (no fail state)', () => {
  for (let i = 0; i < LEVELS; i++) {
    const r = new Run({ level: i });
    let t = 0;
    while (r.state !== 'done' && t < 400) { r.step(1 / 30); t += 1 / 30; }
    assert.equal(r.state, 'done', `level ${i + 1}: driving straight (hitting everything) must still finish kindly`);
    assert.ok(r.starsFor() >= 1, 'finishing always earns a star');
    assert.ok(r.balls >= 0, 'ball count never goes negative');
  }
});

test('Director Protocol dressing: every level has a DIFFERENT background identity', () => {
  assert.equal(DRESS.length, LEVELS, 'one dress entry per level');
  assert.equal(new Set(DRESS.map((d) => d.lm)).size, LEVELS, 'all 30 landmarks are different');
  assert.equal(new Set(DRESS.map((d) => d.sky)).size, LEVELS, 'all 30 sky colours are different — no two levels share a backdrop colour');
  assert.equal(new Set(DRESS.map((d) => d.lamp)).size, LEVELS, 'all 30 lamp accents are different too');
  for (let i = 0; i < LEVELS; i++) assert.equal(dressOf(i), DRESS[i], 'dressOf is the level table, append-only');
  assert.equal(dressOf(999), DRESS[LEVELS - 1], 'out-of-range levels clamp to the finale dress');
  // inside a leg the pano is shared (it is the leg painting) — the dress is what separates the levels
  for (let leg = 0; leg < 5; leg++) {
    const skies = new Set(Array.from({ length: 6 }, (_, k) => dressOf(leg * 6 + k).sky));
    assert.equal(skies.size, 6, `leg ${leg + 1}: six different skies inside the leg`);
  }
});

test('Director Protocol dressing is wired into the renderer (main.js)', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes('dressOf(run.level)'), 'renderer asks the sim for the level dress');
  assert.ok(main.includes('buildLandmark(dress.lm)'), 'the stop landmark is built per level');
  assert.ok(main.includes('setHex(dress.sky)'), 'the sky comes from the dress, not only the theme');
});

import fs from 'node:fs';

test('Corniche Scoop Tour anchor: theme names match the panoramas\' true places', () => {
  const main = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(main.includes("title: ['جولة الكورنيش', 'Corniche Scoop Tour']"));
  assert.ok(main.includes("'Qaitbey Coast'") && main.includes("'Khan el-Khalili'") && main.includes("'Moulid Funfair'"));
  assert.deepEqual(THEMES, ['meadow', 'desert', 'snow', 'candy', 'space']); // keys unchanged
  assert.equal(THEME_PANO.meadow, 3); // pano mapping from Phase 2B unchanged
});
