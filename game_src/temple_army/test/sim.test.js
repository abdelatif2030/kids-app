import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Run, LEVELS, TILE, TRAP, applyGate, resolveClash, normalizeSave, buySkin, buyUp, SKINS, starsFor, bfs, defaultSave } from '../src/sim.js';
import { makeBot, playLevel } from '../src/bot.js';
import { Trail, packCrowd } from '../src/crowd.js';

test('at least six levels, every map is rectangular with one start and one exit', () => {
  assert.ok(LEVELS.length >= 5);
  for (const d of LEVELS) {
    const w = d.map[0].length;
    assert.ok(d.map.every((r) => r.length === w), `${d.id} rectangular`);
    const all = (d.floors || [d.map]).flat().join(''); // 2-floor levels: S and E live on different floors
    assert.equal((all.match(/S/g) || []).length, 1); assert.equal((all.match(/E/g) || []).length, 1);
    assert.ok(d.map[0].split('').every((c) => c === '#') && d.map[d.map.length - 1].split('').every((c) => c === '#'));
    assert.ok(d.map.every((r) => r[0] === '#' && r[w - 1] === '#'), 'closed border');
  }
});

test('gate maths', () => {
  assert.equal(applyGate(10, 'x', 3), 30); assert.equal(applyGate(10, '+', 20), 30);
  assert.equal(applyGate(10, '-', 4), 6); assert.equal(applyGate(3, '-', 10), 1);
  assert.equal(applyGate(10, '/', 2), 5); assert.equal(applyGate(7, '/', 2), 4); assert.equal(applyGate(1, '/', 5), 1);
});

test('only one gate of a fork can be used', () => {
  const r = new Run({ level: 0 });
  const g = r.lv.groups[0]; const a = r.lv.gates[g.gates[0]]; const b = r.lv.gates[g.gates[1]];
  r.cap.x = a.x; r.cap.y = a.y; r.step(0.05); const n1 = r.n;
  r.cap.x = b.x; r.cap.y = b.y; r.step(0.05);
  assert.equal(r.n, n1); assert.equal(g.taken, a.id);
});

test('crowd-vs-crowd resolution is monotonic in the numbers', () => {
  let prevA = 0;
  for (let a = 1; a <= 120; a += 3) {
    let prev = 1e9;
    for (let b = 1; b <= 120; b += 7) { const s = resolveClash(a, b).a; assert.ok(s <= prev, `a=${a} b=${b}`); prev = s; }
    const s = resolveClash(a, 40).a; assert.ok(s >= prevA, `a=${a}`); prevA = s;
  }
  assert.equal(resolveClash(30, 30).a, 0); // a tie goes to the defenders
  assert.ok(resolveClash(100, 40).a > 60); assert.equal(resolveClash(10, 40).a, 0);
});

test('a fight in the sim ends with the bigger crowd standing', () => {
  const r = new Run({ level: 0 }); const h = r.lv.hordes[0];
  r.army = 100; r.cap.x = h.x - 2; r.cap.y = h.y; r.step(0.1);
  assert.ok(r.fight);
  for (let i = 0; i < 600 && r.fight; i++) r.step(1 / 30);
  assert.equal(h.alive, false); assert.ok(r.n > 50 && r.n < 100);
});

test('every spike trap shows a warning at least 0.8 s before the spikes rise', () => {
  assert.ok(TRAP.upAt - TRAP.warnAt >= 0.8);
  const r = new Run({ level: 1 }); const warn = new Map();
  let ups = 0;
  for (let i = 0; i < 60 * 30; i++) {
    for (const e of r.step(1 / 60)) {
      if (e.type === 'trapWarn') warn.set(e.id, e.t);
      if (e.type === 'trapUp') { ups++; assert.ok(warn.has(e.id) && e.t - warn.get(e.id) >= 0.8 - 1e-6, 'warn before up'); }
    }
  }
  assert.ok(ups > 5);
});

test('standing on a trap hurts only when the spikes are up', () => {
  const r = new Run({ level: 1 }); const tr = r.lv.traps[0];
  r.cap.x = tr.x; r.cap.y = tr.y; const before = r.n; let hit = false;
  for (let i = 0; i < 60 * 8 && !hit; i++) for (const e of r.step(1 / 60)) { if (e.type === 'trapHit') { hit = true; assert.equal(r.trapStateAt(tr, e.t), 'up'); } }
  assert.ok(hit && r.n < before);
});

test('levers destroy their saw, saws block and hurt', () => {
  const r = new Run({ level: 3 }); const saw = r.lv.saws[0]; const lever = r.lv.levers[0];
  assert.equal(r.lv.solid[saw.ty * r.lv.W + saw.tx], 1);
  r.cap.x = lever.x; r.cap.y = lever.y; r.step(0.05);
  assert.equal(saw.alive, false); assert.equal(r.lv.solid[saw.ty * r.lv.W + saw.tx], 0);
  const r2 = new Run({ level: 3 }); const s2 = r2.lv.saws[0]; const n0 = r2.n;
  r2.cap.x = s2.x; r2.cap.y = s2.y - 2.2; r2.step(0.05);
  assert.ok(r2.n < n0, 'touching a saw hurts');
});

test('boss telegraphs come at least 0.8 s before they hit', () => {
  for (const level of [2, 5]) {
    const r = new Run({ level }); const b = r.lv.boss; const bot = makeBot(); let tele = 0; let imp = 0;
    r.army = level === 2 ? 40 : 150; r.cap.x = b.x; r.cap.y = b.y + 7;
    for (let i = 0; i < 60 * 40 && r.state === 'play'; i++) for (const e of r.step(1 / 60, bot(r))) {
      if (e.type === 'tele') { assert.ok(e.dur >= 0.8); tele++; }
      if (e.type === 'impact') { imp++; assert.ok(e.t - e.teleAt >= 0.8 - 1e-6); }
    }
    assert.ok(tele >= 1 && imp >= 1, `level ${level} telegraphs ${tele}`);
  }
});

test('every level is solvable (exit reachable once levers are pulled, levers reachable first)', () => {
  for (let i = 0; i < LEVELS.length; i++) {
    const r = new Run({ level: i }); const l = r.lv;
    const [sx, sy] = r.tileOf(l.start.x, l.start.y);
    let left = l.levers.slice();
    while (left.length) { // pull every lever that can be reached with the saws still closed
      const ok = left.filter((lv) => bfs(r, [sx, sy], (x, y) => x === Math.floor(lv.x / TILE) && y === Math.floor(lv.y / TILE)));
      assert.ok(ok.length, `a lever is reachable in level ${i + 1}`);
      for (const lv of ok) for (const s of l.saws) if (s.key === lv.link) l.solid[s.ty * l.W + s.tx] = 0;
      left = left.filter((q) => !ok.includes(q));
    }
    for (const s of l.saws) l.solid[s.ty * l.W + s.tx] = 0;
    if (r.floorLv) { // 2-floor: stairs reachable downstairs, exit reachable from the stairs upstairs
      const st = l.stairs[0];
      assert.ok(bfs(r, [sx, sy], (x, y) => x === st.tx && y === st.ty), `level ${i + 1} staircase reachable`);
      const up = r.floorLv[1]; const saved = r.lv; r.lv = up;
      const [ux, uy] = r.tileOf(up.stairs[0].x, up.stairs[0].y);
      assert.ok(bfs(r, [ux, uy], (x, y) => x === up.exit.tx && y === up.exit.ty), `level ${i + 1} upper exit reachable`);
      r.lv = saved;
    } else assert.ok(bfs(r, [sx, sy], (x, y) => x === l.exit.tx && y === l.exit.ty), `level ${i + 1} reachable`);
  }
});

test('a robot that picks the best gates wins every level, with stars', () => {
  const out = [];
  for (let i = 0; i < LEVELS.length; i++) {
    const r = playLevel(i, {});
    out.push(`${i + 1}:${r.state} n=${r.result && r.result.survivors} stars=${r.result && r.result.stars} t=${r.t.toFixed(0)}s coins=${r.coins} lost=${Math.round(r.lost)}`);
    assert.equal(r.state, 'won', `level ${i + 1}: ${out.join(' | ')}`);
    assert.ok(r.result.survivors >= 1 && r.result.stars >= 1);
  }
  console.log(out.join('\n'));
});

test('the robot beats both bosses and the exit stays shut until they fall', () => {
  for (const i of [2, 5]) {
    const r = new Run({ level: i }); const bot = makeBot(); let down = false; let early = false;
    while (r.state === 'play' && r.t < 300) { for (const e of r.step(1 / 30, bot(r))) if (e.type === 'exitOpen') down = true; if (!down && r.lv.exit.open) early = true; }
    assert.ok(down && !early && r.state === 'won', `boss level ${i + 1}`);
  }
});

test('gate choice matters: the worst gates give a smaller army (or a loss)', () => {
  for (const i of [0, 1, 3, 4]) {
    const good = playLevel(i, {}); const bad = playLevel(i, { worst: true });
    const gn = good.result ? good.result.survivors : 0; const bn = bad.result && bad.result.won ? bad.result.survivors : 0;
    assert.ok(gn > bn, `level ${i + 1}: good ${gn} vs worst ${bn}`);
  }
});

test('standing still never loses members', () => {
  const r = new Run({ level: 2 }); const n = r.n;
  for (let i = 0; i < 600; i++) r.step(1 / 30, { x: 0, y: 0 });
  assert.equal(r.n, n); assert.equal(r.state, 'play');
});

test('upgrades and easy mode help; the run is deterministic', () => {
  const a = playLevel(0, {}); const b = playLevel(0, {});
  assert.equal(a.n, b.n); assert.equal(a.t, b.t);
  const up = new Run({ level: 0, up: { start: 3 } }); assert.equal(up.n, LEVELS[0].start + 9);
  assert.ok(new Run({ level: 0, easy: true }).n > new Run({ level: 0 }).n);
});

test('save normalisation survives garbage; the shop checks the coins', () => {
  assert.deepEqual(normalizeSave(null), defaultSave());
  const s = normalizeSave({ unlocked: 99, stars: [5, -1, 'x'], coins: -4, skin: 'zzz', skins: ['jade', 'bogus'], up: { start: 99, power: 'a' }, muted: 1 });
  assert.equal(s.unlocked, LEVELS.length); assert.equal(s.stars[0], 3); assert.equal(s.stars[1], 0); assert.equal(s.coins, 0);
  assert.equal(s.skin, 'sand'); assert.deepEqual(s.skins, ['sand', 'jade']); assert.equal(s.up.start, 5); assert.equal(s.up.power, 0);
  const t = normalizeSave({ coins: 50 });
  assert.equal(buySkin(t, 'royal'), false); assert.equal(buySkin(t, 'ember'), true); assert.equal(t.coins, 10); assert.equal(t.skin, 'ember');
  assert.equal(buyUp(t, 'start'), false); t.coins = 100; assert.equal(buyUp(t, 'start'), true); assert.equal(t.up.start, 1); assert.equal(t.coins, 80);
  assert.ok(SKINS.length >= 5);
  assert.equal(starsFor(0, 1000), 3); assert.equal(starsFor(0, 1), 1);
});

test('crowd formation: hundreds of followers stay out of the walls', () => {
  const r = new Run({ level: 0 }); const tr = new Trail(); const bot = makeBot();
  for (let i = 0; i < 60 * 6; i++) { r.step(1 / 60, bot(r)); tr.push(r.cap.x, r.cap.y); }
  for (const n of [5, 40, 300]) {
    const pts = packCrowd(n, tr, r.cap, (x, y) => r.free(x, y, 0.2));
    assert.equal(pts.length, n);
    for (const p of pts) assert.ok(r.free(p.x, p.y, 0.15), `point in wall n=${n}`);
  }
});

test('Batch E: the six levels are the real Egyptian temples, Karnak first', () => {
  assert.deepEqual(LEVELS.slice(0, 6).map((d) => d.name[1]), ['Karnak Temple', 'Philae Temple', 'Edfu Temple', 'Abu Simbel Temple', 'Luxor Temple', 'Dendera Temple']);
  assert.deepEqual(LEVELS.slice(0, 6).map((d) => d.name[0]), ['معبد الكرنك', 'معبد فيلة', 'معبد إدفو', 'معبد أبو سمبل', 'معبد الأقصر', 'معبد دندرة']);
});

// ---------------- Phase 2G: 2-floor Karnak + procession finale ----------------
const fnv = (s) => { let x = 0x811c9dc5; for (let i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 0x01000193) >>> 0; } return x.toString(16).padStart(8, '0'); };
const fp = (d) => fnv(JSON.stringify({ id: d.id, name: d.name, map: d.map, start: d.start, gates: d.gates, hordes: d.hordes, boss: d.boss || null, par: d.par }));

test('Phase 2G freeze: the original six levels are byte-identical (ids, order, data)', () => {
  assert.deepEqual(LEVELS.slice(0, 6).map(fp), ['5bc4b171', '9b608079', '7eaf13e0', '93eadbb2', '7e412af7', 'cdd2b4fa']);
  assert.deepEqual(LEVELS.map((d) => d.id), [1, 2, 3, 4, 5, 6, 7, 8], 'append-only: two new levels at the end');
});

test('Phase 2G: Karnak level 7 really has two floors joined by one staircase each', () => {
  const d = LEVELS[6];
  assert.equal(d.floors.length, 2);
  const r = new Run({ level: 6 });
  assert.equal(r.floorLv.length, 2);
  for (const fl of r.floorLv) assert.equal(fl.stairs.length, 1, 'exactly one staircase per floor');
  assert.equal(r.floorLv[0].exit, null, 'no exit on the ground floor — you must climb');
  assert.ok(r.floorLv[1].exit, 'the exit is on the upper floor');
  assert.ok(r.floorLv[0].start, 'the run starts on the ground floor');
});

test('Phase 2G: the staircase carries the army (and coins) to the other floor, with no bounce', () => {
  const r = new Run({ level: 6 }); const st = r.lv.stairs[0];
  r.cap.x = st.x; r.cap.y = st.y; const evs = r.step(0.05);
  assert.equal(r.floorIdx, 1); assert.ok(evs.some((e) => e.type === 'floor' && e.floor === 1));
  const up = r.lv.stairs[0]; assert.equal(Math.floor(r.cap.x / TILE), up.tx); assert.equal(Math.floor(r.cap.y / TILE), up.ty);
  for (let i = 0; i < 10; i++) r.step(0.05); // standing on the arrival stairs must NOT bounce back down
  assert.equal(r.floorIdx, 1);
});

test('Phase 2G: scripted bot proof — Karnak 2-floor is completed via the upper floor', () => {
  const r = new Run({ level: 6 }); const bot = makeBot(); let floors = 0;
  while (r.state === 'play' && r.t < 400) for (const e of r.step(1 / 30, bot(r))) if (e.type === 'floor') floors++;
  assert.equal(r.state, 'won'); assert.ok(floors >= 1, 'the bot climbed the staircase'); assert.equal(r.floorIdx, 1);
  assert.ok(r.result.stars >= 1);
});

test('Phase 2G: the procession finale is hazard-free, all-growing, and the bot completes it', () => {
  const d = LEVELS[7];
  assert.equal(d.procession, true);
  const r = new Run({ level: 7 });
  assert.equal(r.lv.hordes.length, 0); assert.equal(r.lv.traps.length, 0); assert.equal(r.lv.saws.length, 0); assert.equal(r.lv.boss, null);
  for (const g of r.lv.gates) assert.ok(g.op === 'x' || g.op === '+', 'every procession gate grows the crowd');
  const done = playLevel(7, {});
  assert.equal(done.state, 'won'); assert.ok(done.result.survivors > LEVELS[7].start, 'the parade grows on the way');
});

test('Phase 2G: unlock chain — each win unlocks exactly the next level, through the finale', () => {
  const s = defaultSave();
  for (let i = 0; i < LEVELS.length; i++) {
    assert.ok(i + 1 <= s.unlocked, `level ${i + 1} is unlocked when reached`);
    const r = playLevel(i, {});
    assert.equal(r.state, 'won', `campaign level ${i + 1} won`);
    // the same rule main.js _results applies on a win:
    s.stars[i] = Math.max(s.stars[i] || 0, r.result.stars); s.unlocked = Math.max(s.unlocked, Math.min(LEVELS.length, i + 2));
  }
  assert.equal(s.unlocked, LEVELS.length);
});

test('Phase 2G: an old 6-level save migrates — progress kept, new levels appended locked', () => {
  const old = { unlocked: 4, stars: [3, 2, 1, 0, 0, 0], best: [50, 40, 30, 0, 0, 0], coins: 77, skin: 'sand', skins: ['sand'], up: { start: 1, power: 0, speed: 0 } };
  const s = normalizeSave(old);
  assert.equal(s.stars.length, LEVELS.length); assert.equal(s.best.length, LEVELS.length);
  assert.deepEqual(s.stars.slice(0, 6), [3, 2, 1, 0, 0, 0]); assert.deepEqual(s.stars.slice(6), [0, 0]);
  assert.equal(s.unlocked, 4); assert.equal(s.coins, 77); assert.equal(s.up.start, 1);
  const done = normalizeSave({ unlocked: 7, stars: [3, 3, 3, 3, 3, 3] }); // finished the old campaign
  assert.equal(done.unlocked, 7, 'a finished old campaign unlocks the new Karnak 2-floor level, not the finale');
});

test('Batch E kind rule: a negative or divide gate can never wipe out the army', () => {
  for (const n of [1, 2, 5, 40]) {
    assert.ok(applyGate(n, '-', 999) >= 1, `minus gate floors at 1 (n=${n})`);
    assert.ok(applyGate(n, '/', 99) >= 1, `divide gate floors at 1 (n=${n})`);
  }
  // every gate fork offers at least one growing gate, so a kind path always exists
  const r = new Run({ level: 0 });
  for (const grp of r.lv.groups) assert.ok(grp.gates.some((id) => { const g = r.lv.gates[id]; return g.op === 'x' || g.op === '+'; }), 'each fork has a growing gate');
});
