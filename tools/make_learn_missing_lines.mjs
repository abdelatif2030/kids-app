// Lists every line the newer «اتعلّم» sections say (counting, ordinals, sentences, stories, reading words, letter sounds, Arabic marks) that has no
// recording yet: docs/LEARN_NEW_KINDS_LINES.csv (language, kind, text, file_name). Run: node tools/make_learn_missing_lines.mjs
import fs from 'node:fs';
import { learnSections, LANGS } from '../game_src/learn_games/src/learn/sections.js';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
import { EXTRA_DEFS } from '../game_src/learn_games/src/learn/extra.js';
const ids = new Set(EXTRA_DEFS.map((d) => d.id));
const rows = [['language', 'section', 'text', 'file_name', 'already_recorded']];
const seen = new Set();
for (const lang of LANGS) for (const s of learnSections(lang)) {
  if (!ids.has(s.id)) continue;
  for (const it of s.items) for (const x of [...it.say, ...it.slow, ...it.sentence]) {
    const id = clipId(x.t, lang) + (x.slow ? '_slow' : '');
    const file = `${id}.mp3`;
    if (seen.has(lang + file)) continue;
    seen.add(lang + file);
    const have = fs.existsSync(new URL(`../assets/games/learn_voice/${lang}/${file}`, import.meta.url));
    rows.push([lang, s.id, x.t, file, have ? 'yes' : 'no']);
  }
}
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
fs.writeFileSync(new URL('../docs/LEARN_NEW_KINDS_LINES.csv', import.meta.url), '﻿' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
const need = rows.filter((r) => r[4] === 'no').length;
console.log(`lines ${rows.length - 1}, still to record ${need}`);
for (const l of LANGS) console.log(l, rows.filter((r) => r[0] === l && r[4] === 'no').length);
