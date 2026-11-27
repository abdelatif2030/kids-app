// The Italian lines of the «اتعلّم» (learn) mode and of the screens around it, as clips to generate: docs/ITALIAN_UI_LINES.csv (kind, text, file_name).
// Texts written here (general lines, section names, resume dialog, language/mode questions, stories, ordinals, sight words, letter sounds) + the numbers of the
// walk (0..100, hundreds, thousands, ten-thousands) from src/learn/numbers.js. Run: node tools/italian/make_italian_lines.mjs   (nothing is generated, only listed)
import fs from 'node:fs';
import { clipId } from '../../game_src/learn_games/src/kit/voice.js';
import { numberWords, numberSequence } from '../../game_src/learn_games/src/learn/numbers.js';

const GEN = { start: 'Impariamo insieme!', look: 'Guarda!', say: 'Ripeti con me!', again: 'Ancora!', great: 'Bravissimo!', next: 'Il prossimo!', done: 'Hai imparato tutto! Bravo!', count: 'Contiamo insieme!' };
const SECTIONS = ['Le lettere', 'I numeri', 'Tutti gli animali', 'Gli animali della fattoria', 'Gli animali selvatici', 'Gli uccelli', 'Gli animali del mare', 'Gli insetti', 'Rettili e dinosauri', 'I colori', 'Le forme',
  'I giorni della settimana', 'I mesi', 'Stagioni e momenti del giorno', 'Il mio corpo', 'Le emozioni', 'I vestiti', 'La famiglia', 'Il cibo', 'La frutta', 'La verdura', 'I mestieri', 'La scuola', 'La musica', 'Il tempo',
  'I veicoli', 'In casa', 'La città e i luoghi', 'La mia giornata', 'Intorno a me', 'Tante cose', 'Conta con me', 'Primo, secondo, terzo', 'Frasi brevi',
  'Storia: La gatta affamata', 'Storia: Una giornata di sole', 'Storia: In fattoria', 'Storia: La giornata di Adam', 'Storia: La mela rossa', 'Parole da leggere', 'I suoni delle lettere'];
const SCREENS = ['Bentornato!', "Che ne dici di continuare da dove ti eri fermato, o di ricominciare dall'inizio?", 'Cosa vuoi imparare oggi?', 'Vuoi giocare ai livelli o imparare e scegliere?', 'Giochiamo', 'Impara', 'Scegli un livello', 'Scegli il tuo viaggio'];
const STORIES = ["C'è una gattina affamata.", 'Vede un pesce.', "Beve un po' di latte.", 'Ora va a letto. Buonanotte!',
  'Il sole è alto.', 'Sami ha un aquilone rosso.', 'Arriva una grande nuvola.', 'Piove! Sami corre a casa.',
  'La mucca fa muuu.', 'Il cavallo corre veloce.', "L'anatra nuota nello stagno.", 'Il cane fa bau. Buongiorno, fattoria!',
  'Adam è sveglio.', 'Mangia il pane a colazione.', "Va a scuola con l'autobus.", 'Legge un libro. Che bella giornata!',
  "C'è un albero alto.", 'Una mela rossa cade giù.', 'Nour la raccoglie.', 'La divide con il suo fratellino.'];
const ORD = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo', 'undicesimo', 'dodicesimo', 'tredicesimo', 'quattordicesimo', 'quindicesimo', 'sedicesimo', 'diciassettesimo', 'diciottesimo', 'diciannovesimo', 'ventesimo'];
const SIGHT = 'il lo la un una e è sono io tu lui lei noi di a in su con per non sì no mio tuo qui là che chi dove come grande piccolo buono bello mamma papà'.split(' ');
const SOUNDS = { a: 'a', b: 'bu', c: 'ku', d: 'du', e: 'e', f: 'fff', g: 'gu', i: 'i', l: 'lll', m: 'mmm', n: 'nnn', o: 'o', p: 'pu', q: 'ku', r: 'rrr', s: 'sss', t: 'tu', u: 'u', v: 'vvv', z: 'ts' };

const rows = [['kind', 'text', 'file_name']]; const seen = new Set();
const add = (kind, text) => { if (!text) return; const id = clipId(text, 'it'); if (seen.has(id)) return; seen.add(id); rows.push([kind, text, `${id}.mp3`]); };
for (const t of Object.values(GEN)) add('general line', t);
for (const t of SECTIONS) add('section name', t);
for (const t of SCREENS) add('screen / question', t);
for (const t of STORIES) add('story page', t);
for (const t of ORD) add('ordinal', t);
for (const t of SIGHT) add('word to read', t);
for (const t of Object.values(SOUNDS)) add('letter sound', t);
for (const n of numberSequence(100000)) add('number', numberWords(n, 'it').text);
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
fs.writeFileSync(new URL('../../docs/ITALIAN_UI_LINES.csv', import.meta.url), '﻿' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
const by = {}; for (const r of rows.slice(1)) by[r[0]] = (by[r[0]] || 0) + 1;
console.log('Italian screen / learn-mode lines', rows.length - 1, JSON.stringify(by));
