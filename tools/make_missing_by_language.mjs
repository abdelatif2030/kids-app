// Lists the lines of the English / German / French worlds that still have no recording: docs/<LANG>_STILL_MISSING.csv
// (kind, text, file_name). Run: node tools/make_missing_by_language.mjs   (nothing is generated, only listed)
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
import { learnSections } from '../game_src/learn_games/src/learn/sections.js';
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
for (const [folder, lang, NAME] of [['english', 'en', 'ENGLISH'], ['german', 'de', 'GERMAN'], ['french', 'fr', 'FRENCH']]) {
  const have = new Set(fs.readdirSync(new URL(`../assets/games/learn_voice/${lang}/`, import.meta.url)).map((f) => f.replace('.mp3', '')));
  const rows = [['kind', 'text', 'file_name']]; const seen = new Set();
  const W = JSON.parse(fs.readFileSync(new URL(`../game_src/learn_games/src/${folder}/words.json`, import.meta.url), 'utf8'));
  for (const e of W) for (const [k, t, sl] of [['level-word', e.w, ''], ['level-slow', e.w, '_slow'], ['level-sentence', e.s, '']]) { const id = clipId(t, lang) + sl; if (!have.has(id) && !seen.has(id)) { seen.add(id); rows.push([k, t, id + '.mp3']); } }
  for (const s of learnSections(lang)) for (const it of s.items) for (const x of [...it.say, ...it.slow, ...it.sentence]) {
    if (x.lang !== lang) continue;
    const id = clipId(x.t, lang) + (x.slow ? '_slow' : ''); if (!have.has(id) && !seen.has(id)) { seen.add(id); rows.push([`learn-${s.id}`, x.t, id + '.mp3']); }
  }
  fs.writeFileSync(new URL(`../docs/${NAME}_STILL_MISSING.csv`, import.meta.url), '﻿' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
  console.log(lang, 'still missing', rows.length - 1, '(level lines', rows.filter((r) => r[0].startsWith('level')).length + ')');
}
