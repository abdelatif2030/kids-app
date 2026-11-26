// Writes docs/FRENCH_WORDLIST.csv (same columns as GERMAN_WORDLIST.csv): the French word, the slow clip, the sentence and their file names.
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
const rows = JSON.parse(fs.readFileSync('tools/fr_words.json', 'utf8'));
const q = (c) => '"' + String(c).replace(/"/g, '""') + '"';
const out = [['category', 'english_word', 'french_word', 'clip1_word_normal', 'clip2_same_word_READ_SLOWLY', 'clip3_sentence', 'file1_word', 'file2_slow', 'file3_sentence']];
for (const r of rows) { const w = clipId(r.fr, 'fr'); out.push([r.cat, r.en, r.fr, r.fr, r.fr, r.s, `${w}.mp3`, `${w}_slow.mp3`, `${clipId(r.s, 'fr')}.mp3`]); }
fs.writeFileSync('docs/FRENCH_WORDLIST.csv', '﻿' + out.map((r) => r.map(q).join(',')).join('\n') + '\n');
console.log(out.length - 1, 'rows');
