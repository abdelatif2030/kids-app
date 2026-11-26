// docs/LEARN_MODE_LINES.csv: every clip the «اتعلّم» (learn) mode needs that does not exist yet, in every language:
//   - the general lines (GEN in src/learn/lines.js), the name of every section, the small words numbers are built from (up to 100 000),
//   - the Arabic letter sentences, and the Arabic names of the section items.
// File name = the game's clip id. Run:  node tools/make_learn_mode_lines.mjs
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
import { GEN } from '../game_src/learn_games/src/learn/lines.js';
import { learnSections, LANGS } from '../game_src/learn_games/src/learn/sections.js';
import { numberPartsNeeded } from '../game_src/learn_games/src/learn/numbers.js';

const has = (l, id) => fs.existsSync(`assets/games/learn_voice/${l}/${id}.mp3`);
const rows = [['language', 'file_name', 'kind', 'text']];
const seen = new Set();
const add = (l, text, kind, slow = false) => {
  const id = clipId(text, l) + (slow ? '_slow' : '');
  if (seen.has(l + id) || has(l, id)) return;
  seen.add(l + id);
  rows.push([l, id + '.mp3', kind, text]);
};
LANGS.forEach((l, i) => { for (const k of Object.keys(GEN)) add(l, GEN[k][i], 'general line'); });
for (const l of LANGS) for (const s of learnSections(l)) {
  add(l, s.name, 'section name');
  for (const it of s.items) {
    if (l === 'ar') for (const x of [...it.say, ...it.sentence]) add('ar', x.t, 'arabic item');
  }
}
for (const l of LANGS) for (const p of numberPartsNeeded(l, 100000)) { add(l, p, 'number part'); if (l !== 'ar') add(l, p, 'number part read slowly', true); }
const q = (c) => '"' + String(c).replace(/"/g, '""') + '"';
fs.writeFileSync('docs/LEARN_MODE_LINES.csv', '﻿' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
const c = {};
for (const r of rows.slice(1)) c[`${r[0]} ${r[2]}`] = (c[`${r[0]} ${r[2]}`] || 0) + 1;
console.log(rows.length - 1, 'clips'); console.log(c);
