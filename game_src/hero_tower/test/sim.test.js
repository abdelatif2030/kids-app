import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CHAPTERS, Tower, buildChapter, solve, apply, fmt, normalizeSave, TROLL_FLOOR, SORCERER_FLOOR } from '../src/sim.js';

test('fmt writes big numbers compactly', () => {
  assert.equal(fmt(8), '8');
  assert.equal(fmt(1250), '1,250');
  assert.equal(fmt(57700), '57.7K');
  assert.equal(fmt(341000), '341K');
  assert.equal(fmt(6170000), '6.17M');
  assert.equal(fmt(1305000), '1.3M');
});

test('absorbing: a weaker foe adds its power, a stronger one wins the round, a gold coin multiplies, a crystal adds, a chest needs the key', () => {
  assert.deepEqual(apply(10, false, { type: 'enemy', power: 4 }), { win: true, p: 14, key: false });
  assert.equal(apply(10, false, { type: 'enemy', power: 10 }).win, false);
  assert.equal(apply(10, false, { type: 'mult', mul: 2 }).p, 20);
  assert.equal(apply(10, false, { type: 'crystal', add: 5 }).p, 15);
  assert.equal(apply(10, false, { type: 'chest', add: 5 }), null);
  assert.deepEqual(apply(10, true, { type: 'chest', add: 5 }), { win: true, p: 15, key: false });
});

for (const easy of [false, true]) for (const ch of CHAPTERS) {
  test(`chapter ${ch.id} (${easy ? 'easy' : 'normal'}): every floor has a winning order and the planned order wins, 12 floors + a roof`, () => {
    for (let seed = 1; seed <= 25; seed++) {
      const floors = buildChapter(ch, seed, easy);
      assert.equal(floors.length, ch.floors + 1);
      assert.equal(floors[TROLL_FLOOR - 1].kind, 'troll');
      assert.equal(floors[SORCERER_FLOOR - 1].kind, 'sorcerer');
      assert.equal(floors[floors.length - 1].kind, 'dragon');
      let p = floors[0].startP;
      for (const f of floors) {
        assert.equal(f.startP, p, `floor ${f.n} start power follows the plan`);
        const foes = f.things.filter((t) => t.type === 'enemy' || t.type === 'boss');
        assert.ok(foes.length >= 1, 'a floor has a foe');
        assert.ok(solve(f.startP, f.things).ok, `chapter ${ch.id} seed ${seed} floor ${f.n} has a solution`);
        // play the planned order
        let key = false;
        for (const id of f.plan) {
          const th = f.things.find((t) => t.id === id);
          const r = apply(p, key, th);
          assert.ok(r && r.win, `planned step ${id} wins (floor ${f.n}, power ${p})`);
          p = r.p; key = r.key;
        }
      }
    }
  });
}

test('a game: a wrong tap loses gently and the floor comes back with the start power; the planned taps clear every floor to the end', () => {
  const t = new Tower(CHAPTERS[0], 5);
  // find the biggest foe on floor 1 and tap it first if it is too strong
  let lostOnce = false;
  for (let guard = 0; guard < 400 && t.state !== 'done'; guard++) {
    if (t.state === 'climb') { assert.ok(t.climb()); continue; }
    if (!lostOnce) {
      const strong = t.floor.things.find((x) => (x.type === 'enemy' || x.type === 'boss') && !t.isGreen(x));
      if (strong) { const r = t.tap(strong.id); assert.equal(r.type, 'lose'); t.retryFloor(); assert.equal(t.p, t.p0); lostOnce = true; continue; }
    }
    for (const id of t.floor.plan) { const r = t.tap(id); assert.ok(['win', 'nothing'].includes(r.type), `${id} ${r.type}`); }
  }
  assert.equal(t.state, 'done');
  assert.ok(t.stars >= 1 && t.stars <= 3);
});

test('the same seed makes the same chapter; different seeds differ', () => {
  const a = JSON.stringify(buildChapter(CHAPTERS[0], 3));
  assert.equal(a, JSON.stringify(buildChapter(CHAPTERS[0], 3)));
  assert.notEqual(a, JSON.stringify(buildChapter(CHAPTERS[0], 4)));
});

test('a key opens the chest only after it was taken; a locked chest does nothing and loses nothing', () => {
  const t = new Tower(CHAPTERS[0], 9);
  t.floors[0].things = [{ id: 'a', type: 'chest', add: 5 }, { id: 'k', type: 'key' }, { id: 'e', type: 'enemy', power: 3 }];
  t.floors[0].plan = ['k', 'a', 'e'];
  assert.equal(t.tap('a').type, 'locked');
  assert.equal(t.losses, 0);
  assert.equal(t.tap('k').type, 'win');
  assert.equal(t.tap('a').type, 'win');
  assert.equal(t.p, 8 + 5);
});

test('save normalising is safe', () => {
  assert.deepEqual(normalizeSave(null), { unlocked: 1, stars: {}, muted: false, plays: 0 });
  const s = normalizeSave({ unlocked: 99, stars: { 1: 3, 2: 9, x: 1 }, muted: 1, plays: -4 });
  assert.equal(s.unlocked, CHAPTERS.length);
  assert.deepEqual(s.stars, { 1: 3 });
  assert.equal(s.plays, 0);
});

test('treasures like the video: purple crystals ADD, gold coins MULTIPLY, both appear in a chapter', () => {
  const seen = new Set();
  for (let seed = 1; seed <= 30; seed++) for (const f of buildChapter(CHAPTERS[0], seed, false)) for (const t of f.things) seen.add(t.type);
  assert.ok(seen.has('crystal') && seen.has('mult') && seen.has('sword') && seen.has('potion') && seen.has('key') && seen.has('chest'));
  assert.equal(apply(7, false, { type: 'mult', mul: 3 }).p, 21);
});

test('Citadel Tower anchor: chapters 1–6 keep their distinct Egyptian places, ids/floors unchanged', () => {
  assert.deepEqual(CHAPTERS.slice(0, 6).map((c) => c.id), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(CHAPTERS.slice(0, 6).map((c) => c.place), ['citadel', 'catherine', 'pharos', 'nubia', 'shali', 'philae']);
  assert.ok(CHAPTERS.every((c) => c.floors === 12));
});

test('Phase 2E: eight chapters, two genuinely new themes and places for 7–8', () => {
  assert.equal(CHAPTERS.length, 8);
  assert.deepEqual(CHAPTERS.map((c) => c.id), [1, 2, 3, 4, 5, 6, 7, 8]);
  const places = CHAPTERS.map((c) => c.place);
  assert.equal(new Set(places).size, 8, 'every chapter has its own place');
  const [c7, c8] = CHAPTERS.slice(6);
  assert.equal(c7.theme, 'sea'); assert.equal(c7.place, 'qaitbey');
  assert.equal(c8.theme, 'dawn'); assert.equal(c8.place, 'zweila');
  for (const c of [c7, c8]) assert.ok(!['castle', 'ice', 'fire'].includes(c.theme), `${c.theme} is a new look`);
  // the difficulty curve continues chapters 5–6 sensibly
  assert.ok(c7.start > CHAPTERS[5].start && c8.start > c7.start);
  assert.ok(c7.ratio > CHAPTERS[5].ratio && c8.ratio > c7.ratio);
  assert.equal(c7.mulMax, 4); assert.equal(c8.mulMax, 4);
});

test('Phase 2E: chapters 7 and 8 build and a planned-order climb completes them to the roof', () => {
  for (const ch of CHAPTERS.slice(6)) {
    const tw = new Tower(ch, 7);
    assert.equal(tw.total, ch.floors + 1);
    for (let guard = 0; guard < 500 && tw.state !== 'done'; guard++) {
      if (tw.state === 'climb') { assert.ok(tw.climb()); continue; }
      for (const id of tw.floor.plan) { const r = tw.tap(id); assert.ok(['win', 'nothing'].includes(r.type), `${id} ${r.type}`); }
    }
    assert.equal(tw.state, 'done', `chapter ${ch.id} reaches its roof`);
    assert.equal(tw.floor.kind, 'dragon');
  }
});

test('Phase 2E: a full 1→8 climb in sim order keeps the unlock chain reaching the new roof', () => {
  let save = normalizeSave(null);
  for (const ch of CHAPTERS) {
    assert.ok(ch.id <= save.unlocked, `chapter ${ch.id} is unlocked when its turn comes`);
    const tw = new Tower(ch, 11);
    for (let guard = 0; guard < 500 && tw.state !== 'done'; guard++) {
      if (tw.state === 'climb') { tw.climb(); continue; }
      for (const id of tw.floor.plan) tw.tap(id);
    }
    assert.equal(tw.state, 'done');
    save = normalizeSave({ ...save, stars: { ...save.stars, [ch.id]: tw.stars } });
  }
  assert.equal(save.unlocked, CHAPTERS.length);
  assert.equal(Object.keys(save.stars).length, 8);
});

test('Phase 2E: a 6-chapter save migrates — progress kept, chapters 7–8 locked until 6 is won', () => {
  const old = normalizeSave({ unlocked: 6, stars: { 1: 3, 2: 2, 3: 3, 4: 1, 5: 2 }, plays: 9 });
  assert.equal(old.unlocked, 6, 'chapter 6 open, 7 still locked');
  assert.deepEqual(old.stars, { 1: 3, 2: 2, 3: 3, 4: 1, 5: 2 });
  assert.equal(old.plays, 9);
  const after6 = normalizeSave({ ...old, stars: { ...old.stars, 6: 2 } });
  assert.equal(after6.unlocked, 7, 'winning 6 opens 7 (and not 8)');
  const after7 = normalizeSave({ ...after6, stars: { ...after6.stars, 7: 1 } });
  assert.equal(after7.unlocked, 8, 'winning 7 opens 8');
});
