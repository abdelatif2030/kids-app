// From a word list in the LEARN_NEW_ITEMS.csv format (section, ages, english, arabic, german, french, picture_id, ...) writes the file of voice
// clips to generate: docs/<NAME>_VOICE_REQUEST.csv  (language, kind, text, file_name). Usage:
//   node tools/make_batch_voice_request.mjs docs/LEARN_NEW_ITEMS.csv NEW_ITEMS
// Per word: the Arabic word (1 clip), and for English / German / French: the word, the word slowly, and a short sentence (nouns only).
// Nothing is generated here. The file names are the ones the game looks for, so installing the mp3 files is enough.
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
const [src, name = 'BATCH'] = process.argv.slice(2);
function parseCsv(t) { const rows = []; let row = [], cell = '', q = false; t = t.replace(/^﻿/, ''); for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"' && t[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; } else if (c === '"') q = true; else if (c === ',') { row.push(cell); cell = ''; } else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; } else if (c !== '\r') cell += c; } if (cell || row.length) { row.push(cell); rows.push(row); } return rows; }
const [head, ...data] = parseCsv(fs.readFileSync(src, 'utf8')).filter((r) => r.length > 3);
const ix = Object.fromEntries(head.map((h, i) => [h, i]));
const NO_SENTENCE = new Set(['sounds', 'action', 'opposite', 'where', 'describe', 'polite', 'question', 'people', 'number2', 'math', 'time', 'health', 'safety', 'senses', 'deen']);
const clean = (s) => s.replace(/\s*\(.*?\)/g, '').replace(/\s+-\s+/g, ', ').trim();
const has = (lang, id) => fs.existsSync(`assets/games/learn_voice/${lang}/${id}.mp3`);
const rows = [['language', 'kind', 'text', 'file_name']]; const seen = new Set();
const add = (lang, kind, text, slow) => { const id = clipId(text, lang) + (slow ? '_slow' : ''); const key = lang + id; if (seen.has(key) || has(lang, id)) return; seen.add(key); rows.push([lang, kind, text, id + '.mp3']); };
const an = (w) => (/^[aeiou]/i.test(w) ? 'an' : 'a');
for (const r of data) {
  const sec = r[ix.section]; const en = clean(r[ix.english]), ar = clean(r[ix.arabic]), de = clean(r[ix.german]), fr = clean(r[ix.french]);
  if (ar) add('ar', 'arabic word', ar, false);
  const noun = !NO_SENTENCE.has(sec) && !/^to /.test(en) && !/[?]/.test(en);
  for (const [lang, w, sent] of [
    ['en', en, () => (/s$/.test(en) && !/ss$/.test(en) ? `These are ${en}.` : `This is ${an(en)} ${en}.`)],
    ['de', de, () => (/^die /.test(de) && /s$/.test(en) && !/ss$/.test(en) ? `Das sind ${de}.` : `Das ist ${de}.`)],
    ['fr', fr, () => (/^les /.test(fr) ? `Ce sont ${fr}.` : `C'est ${fr}.`)],
  ]) {
    if (!w) continue;
    add(lang, 'word', w, false); add(lang, 'word slowly', w, true);
    if (noun) add(lang, 'sentence', sent(), false);
  }
}
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
const out = `docs/${name}_VOICE_REQUEST.csv`;
fs.writeFileSync(out, '﻿' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
const by = {}; for (const r of rows.slice(1)) by[r[0]] = (by[r[0]] || 0) + 1;
console.log(out, rows.length - 1, 'clips', JSON.stringify(by), 'from', data.length, 'words');
