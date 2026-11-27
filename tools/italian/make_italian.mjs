// Builds the Italian world from the English word list (the same 730 pictures and Arabic names) and the Italian words written in
// tools/italian/it_part1.txt + it_part2.txt (line = english row number | Italian | kind).
//   game_src/learn_games/src/italian/words.json   the rows, in the same format as german/words.json
//   docs/ITALIAN_WORDLIST.csv                     for a native speaker to check (+ the clips each word needs)
//   docs/ITALIAN_VOICE_REQUEST.csv                the clips to generate (word, slowly, sentence), file names the game looks for
// kind: m / f / mp / fp = noun (definite article written); L letter name; C colour; D day; M month; R routine phrase; P place phrase; A feeling
// Run: node tools/italian/make_italian.mjs   (nothing is generated, only listed)
import fs from 'node:fs';
import { clipId } from '../../game_src/learn_games/src/kit/voice.js';

const here = (p) => new URL(p, import.meta.url);
const EN = JSON.parse(fs.readFileSync(here('../../game_src/learn_games/src/english/words.json'), 'utf8'));
const IT = new Map();
for (const f of ['it_part1.txt', 'it_part2.txt']) for (const ln of fs.readFileSync(here(f), 'utf8').split('\n')) { if (!ln.trim()) continue; const [i, w, g] = ln.split('|'); IT.set(Number(i), { w: w.trim(), g: g.trim() }); }
if (IT.size !== EN.length) throw new Error(`Italian lines ${IT.size} != English rows ${EN.length}`);

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const bare = (w) => w.replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '');
const startsVowel = (b) => /^[aeiouàèéìòù]/i.test(b);
const needsUno = (b) => /^(s[^aeiou\W]|z|gn|ps|x|y|pn)/i.test(b);
const indef = (w, g) => { // "il cane" -> "un cane", "la mela" -> "una mela", "l'ape" -> "un'ape", "lo zaino" -> "uno zaino"
  const b = bare(w);
  if (g === 'm') return (startsVowel(b) ? 'un ' : needsUno(b) ? 'uno ' : 'un ') + b;
  return (startsVowel(b) ? "un'" : 'una ') + b;
};
const LETTER_WORD = { a: 'ape', b: 'balena', c: 'cane', d: 'delfino', e: 'elefante', f: 'farfalla', g: 'gatto', h: 'hotel', i: 'isola', j: 'jeans', k: 'koala', l: 'leone', m: 'mela', n: 'naso', o: 'orso', p: 'pesce', q: 'quadro', r: 'rana', s: 'sole', t: 'tigre', u: 'uva', v: 'volpe', w: 'wafer', x: 'xilofono', y: 'yogurt', z: 'zebra' };
const withDef = (c) => (startsVowel(c) ? `l'${c}` : `il ${c}`); // for a colour: "il rosso", "l'oro"

const rows = [];
EN.forEach((e, i) => {
  const { w, g } = IT.get(i);
  const key = (e.eng !== undefined ? e.eng : e.en);
  const row = { ...e, eng: key, en: w, w };
  if (g === 'm' || g === 'f') row.s = `È ${indef(w, g)}.`;
  else if (g === 'mp' || g === 'fp') row.s = `Sono ${w}.`;
  else if (g === 'L') { const ch = key.replace('letter ', ''); row.en = ch.toUpperCase(); row.w = ch.toUpperCase() === 'I' ? 'I' : w; row.s = `${ch.toUpperCase()} come ${LETTER_WORD[ch]}.`; }
  else if (g === 'C') row.s = `È ${w}.`;
  else if (g === 'D') { row.s = `Oggi è ${w}.`; row.ch = cap(w); }
  else if (g === 'M') { row.s = `Siamo a ${w}.`; row.ch = cap(w); }
  else if (g === 'R') row.s = `${cap(w)}.`;
  else if (g === 'P') row.s = `La palla è ${w}.`;
  else if (g === 'A') row.s = `Sono ${w}.`;
  else if (e.n !== undefined || g === '-') row.s = `${cap(w)}!`;
  if (e.cat.startsWith('numbers') || e.cat.startsWith('tens')) row.s = `${cap(w)}!`;
  rows.push({ ...row, _g: g });
});
const clean = rows.map(({ _g, ...r }) => r);
fs.mkdirSync(here('../../game_src/learn_games/src/italian/'), { recursive: true });
fs.writeFileSync(here('../../game_src/learn_games/src/italian/words.json'), JSON.stringify(clean));

const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
const csv = [['category', 'english_word', 'arabic', 'italian_word', 'italian_sentence', 'clip1_word_normal', 'clip2_same_word_READ_SLOWLY', 'clip3_sentence', 'file1_word', 'file2_slow', 'file3_sentence']];
const req = [['language', 'kind', 'text', 'file_name']]; const seen = new Set();
const add = (kind, text, slow) => { const id = clipId(text, 'it') + (slow ? '_slow' : ''); if (seen.has(id)) return; seen.add(id); req.push(['it', kind, text, id + '.mp3']); };
for (const r of clean) {
  csv.push([r.cat, r.eng, r.ar || '', r.en, r.s, r.w, r.w, r.s, `${clipId(r.w, 'it')}.mp3`, `${clipId(r.w, 'it')}_slow.mp3`, `${clipId(r.s, 'it')}.mp3`]);
  add('word', r.w, false); add('word slowly', r.w, true); add('sentence', r.s, false);
}
fs.writeFileSync(here('../../docs/ITALIAN_WORDLIST.csv'), '﻿' + csv.map((r) => r.map(q).join(',')).join('\n') + '\n');
fs.writeFileSync(here('../../docs/ITALIAN_VOICE_REQUEST.csv'), '﻿' + req.map((r) => r.map(q).join(',')).join('\n') + '\n');
console.log('Italian rows', clean.length, '| clips (words + slow + sentences)', req.length - 1);
