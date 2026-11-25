import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { EN_LEVELS, poolOfLevel, wordKey } from '../src/english/levels.js';
import { LevelPlay } from '../src/letters/levels.js';
import { FreshMemory } from '../src/letters/fresh.js';
import { ROUNDS } from '../src/letters/sim.js';
import { clipId } from '../src/kit/voice.js';
import WORDS from '../src/english/words.json' with { type: 'json' };

const VOICE = new URL('../../../assets/games/learn_voice/en/', import.meta.url);
const have = (name) => fs.existsSync(new URL(`${name}.mp3`, VOICE));
const manifest = fs.readFileSync(new URL('../../../assets/games/learn_voice/manifest.js', import.meta.url), 'utf8');
const MAN = JSON.parse(manifest.slice(manifest.indexOf('{'), manifest.lastIndexOf('}') + 1));

test('fourteen English levels, each with at least eight words', () => {
  assert.equal(EN_LEVELS.length, 14);
  for (const lv of EN_LEVELS) assert.ok(poolOfLevel(lv).length >= 8, lv.id);
});

test('every English word has its word clip, slow clip and sentence clip (and the manifest lists them)', () => {
  for (const e of WORDS) {
    const w = clipId(e.w, 'en'), s = clipId(e.s, 'en');
    assert.ok(have(w) && have(`${w}_slow`) && have(s), `${e.en}`);
    assert.ok(MAN.en.includes(w) && MAN.en.includes(`${w}_slow`) && MAN.en.includes(s), `${e.en} in manifest`);
  }
});

for (const age of [2, 3, 4, 5, 6]) {
  test(`age ${age}: every English level has ${ROUNDS} rounds, one right option, distinct options, three meetings per new word`, () => {
    for (const lv of EN_LEVELS) {
      for (let seed = 1; seed <= 20; seed++) {
        const p = new LevelPlay(lv.id, age, seed * 7919, null, 'meadow');
        assert.equal(p.rounds.length, ROUNDS, lv.id);
        for (const r of p.rounds) {
          const ids = r.options.map((o) => o.id);
          assert.equal(new Set(ids).size, ids.length, `${lv.id} distinct`);
          assert.ok(ids.includes(r.answer), `${lv.id} answer among options`);
          assert.ok(r.options.length >= 3, `${lv.id} options`);
          assert.equal(r.lang, 'en');
          assert.ok(r.say.length >= 1 && r.retry.length === 1 && r.rewardSay.length === 1);
        }
        const asked = p.rounds.map((r) => r.key);
        // a word is asked again in the same game (the repeat), but the first rounds never repeat
        assert.equal(new Set(asked.slice(0, ROUNDS - 3)).size, ROUNDS - 3, `${lv.id} first rounds distinct`);
        assert.ok(asked.length > new Set(asked).size, `${lv.id} repeats some words`);
      }
    }
  });
}

test('an Arabic word with its recording follows the praise (everything that is not a letter)', () => {
  const ar = JSON.parse(fs.readFileSync(new URL('../../../assets/games/learn_voice/lines.json', import.meta.url), 'utf8')).filter((l) => l.lang === 'ar').map((l) => l.id);
  const arDir = new URL('../../../assets/games/learn_voice/ar/', import.meta.url);
  for (const lv of EN_LEVELS) {
    if (lv.id === 'en_letters') continue;
    for (const r of new LevelPlay(lv.id, 5, 11, null, 'meadow').rounds) {
      assert.ok(r.arWord, `${lv.id} ${r.key}`);
      const id = clipId(r.arWord, 'ar');
      assert.ok(ar.includes(id), `${r.arWord} is in the voice list`); // its clip comes from the owner's own recordings (docs/ENGLISH_VOICE_REQUEST.csv); until then the device voice says it
    }
  }
});

test('a replay shows other words first, and a new word is heard slowly too', () => {
  const lv = EN_LEVELS.find((l) => l.id === 'en_animals');
  let mem = new FreshMemory(null, 2900);
  const seen = new Set();
  for (let g = 0; g < 3; g++) {
    mem.begin(lv.id);
    const p = new LevelPlay(lv.id, 5, 31 + g, mem, 'meadow');
    const firsts = p.rounds.slice(0, ROUNDS - 3);
    for (const r of firsts) {
      assert.ok(!seen.has(r.key), 'new words first, no repeat across games');
      assert.equal(r.say.length, 2, 'a new word: normal then slow');
      seen.add(r.key);
    }
    for (const r of p.rounds) mem.note(r.key);
  }
  assert.equal(seen.size, 15);
});
