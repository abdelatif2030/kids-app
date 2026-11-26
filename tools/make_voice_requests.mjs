// Writes docs/NEW_CLIPS_TO_RECORD.csv: every clip the new English words (expansion) and the German words need and that is not in
// assets/games/learn_voice yet: file name, language, kind, text.  node tools/make_voice_requests.mjs
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
const EN = JSON.parse(fs.readFileSync('game_src/learn_games/src/english/words.json', 'utf8'));
const DE = JSON.parse(fs.readFileSync('game_src/learn_games/src/german/words.json', 'utf8'));
const FR = JSON.parse(fs.readFileSync('game_src/learn_games/src/french/words.json', 'utf8'));
const has = (lang, id) => fs.existsSync(`assets/games/learn_voice/${lang}/${id}.mp3`);
const rows = [['language', 'file_name', 'kind', 'text', 'for_word']];
const add = (lang, text, kind, slow, word) => {
  const id = clipId(text, lang) + (slow ? '_slow' : '');
  if (!has(lang, id)) rows.push([lang, id + '.mp3', kind, text, word]);
};
for (const e of EN) {
  add('en', e.w, 'word', false, e.en); add('en', e.w, 'word read slowly', true, e.en); add('en', e.s, 'sentence', false, e.en);
  if (e.ar && e.cat !== 'letters A-Z (name)') { const id = clipId(e.ar, 'ar'); if (!has('ar', id)) rows.push(['ar', id + '.mp3', 'arabic word after the praise', e.ar, e.en]); }
}
for (const e of DE) {
  add('de', e.w, 'word', false, e.en); add('de', e.w, 'word read slowly', true, e.en); add('de', e.s, 'sentence', false, e.en);
}
for (const e of FR) {
  add('fr', e.w, 'word', false, e.en); add('fr', e.w, 'word read slowly', true, e.en); add('fr', e.s, 'sentence', false, e.en);
}
const q = (c) => '"' + String(c).replace(/"/g, '""') + '"';
// the same text is one file: keep the first row of every file name
const seen = new Set(); const out = rows.filter((r, i) => i === 0 || !seen.has(r[0] + r[1]) && seen.add(r[0] + r[1]));
fs.writeFileSync('docs/NEW_CLIPS_TO_RECORD.csv', '﻿' + out.map((r) => r.map(q).join(',')).join('\n') + '\n');
const c = {}; for (const r of out.slice(1)) c[r[0]] = (c[r[0]] || 0) + 1;
console.log(out.length - 1, 'clips', c);
