import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import MORE_WORDS from '../src/letters/more_words.json' with { type: 'json' };
import { LEVELS, LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { FOODS, PLACES, ANIMALS } from '../src/animals/sim.js';
import { SHAPES_ALL } from '../src/letters/shapes_all.js';
import { COLOR_THINGS } from '../src/letters/colors.js';

// "nothing is hidden": every picture a question can show must be a real picture (the owner's art, or a thing the 3D kit draws),
// never the beach-ball placeholder that an unknown name falls back to.
// the picture names (art_dims.json) and the names actors.js maps explicitly or by the rule «every picture can be shown by its own name»;
// the 3D kit's own code-drawn things are listed from things3d.js (its BUILD table), read from the source so this test needs no browser
const DIMS = JSON.parse(readFileSync(new URL('../src/kit/art_dims.json', import.meta.url), 'utf8'));
const ACTORS = readFileSync(new URL('../src/kit/actors.js', import.meta.url), 'utf8');
const mapped = new Set([...ACTORS.matchAll(/(?:^|[\s{,])([a-z_0-9]+):\s*'([a-z_0-9]+)'/g)].map((m) => m[1]));
const CODE = new Set(['../src/kit/things3d.js', '../src/kit/toys3d.js'].flatMap((f) => [...readFileSync(new URL(f, import.meta.url), 'utf8').matchAll(/^  ([a-z_0-9]+)\s*[:(]/gm)].map((m) => m[1])));
const ruleAllPictures = /Object\.keys\(DIMS\)\)\s*if \(!ART_FILE\[n\]\)/.test(ACTORS);
const known = (id) => (ruleAllPictures && !!DIMS[id]) || mapped.has(id) || MORE_WORDS.some((w) => w.thing === id) || CODE.has(id);
const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];

test('every picture of every question of every level and age is a real picture', () => {
  const bad = new Map();
  for (const age of [2, 3, 4, 5, 6]) {
    const mem = new FreshMemory(null, 2900);
    for (let v = 0; v < 25; v++) for (const lv of LEVELS) {
      mem.begin(lv.id);
      const p = new LevelPlay(lv.id, age, 977 * v + age * 13 + lv.id.length, mem, WORLDS[(v * 5) % 12]);
      for (const r of p.rounds) {
        const things = [...r.options.filter((o) => o.kind === 'thing').map((o) => o.thing), ...(r.show && r.show.thing ? [r.show.thing] : [])];
        for (const t of things) if (!known(t)) bad.set(t, `${lv.id}: ${r.prompt}`);
        if (r.key) mem.note(r.key);
      }
    }
  }
  assert.deepEqual([...bad], [], `pictures that would show as a beach ball: ${[...bad.keys()].join(', ')}`);
});

test('every animal, food, place and shape picture is known', () => {
  for (const a of ANIMALS) assert.ok(known(a.thing), `animal ${a.id} ${a.thing}`);
  for (const [k, f] of Object.entries(FOODS)) assert.ok(known(f.thing), `food ${k} ${f.thing}`);
  for (const [k, p] of Object.entries(PLACES)) assert.ok(known(p.thing), `place ${k} ${p.thing}`);
  for (const s of SHAPES_ALL) if (s.render === 'art') assert.ok(known(s.art), `shape ${s.art}`);
  for (const list of Object.values(COLOR_THINGS)) for (const t of list) assert.ok(known(t), `colour thing ${t}`);
});

test('animal names are plain words a child knows: dinosaurs are «الديناصور ...», no strange foreign names', () => {
  for (const a of ANIMALS) assert.ok(!/إغوانا|تيرانوصور|ستيجوصور|ثلاثي/.test(a.the), a.the);
  assert.ok(ANIMALS.filter((a) => a.groups.includes('dino')).every((a) => a.the.startsWith('الديناصور')));
});
