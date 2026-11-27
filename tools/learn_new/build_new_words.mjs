// Builds the 386 new learn words (docs/LEARN_NEW_ITEMS.csv + tools/learn_new/it_words.txt) for the five languages:
//   assets/games/learn_voice/extra_words.js      window.__learnExtraWords = {en,de,fr,it}: rows in the same shape as src/<lang>/words.json (loaded by script, so the game bundle stays small)
//   docs/NEW_WORDS_VOICE_REQUEST_<lang>.csv      the clips Instinct must record (kind, text, file_name) that do not exist yet
// Run: node tools/learn_new/build_new_words.mjs
import fs from 'node:fs';
import { clipId } from '../../game_src/learn_games/src/kit/voice.js';
import { NEW_SECTIONS, NEW_SECTION_OF } from '../../game_src/learn_games/src/learn/newsections.js';

const csv = (s) => { // small CSV parser (quotes, commas, newlines in quotes)
  const out = []; let row = [], cur = '', q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '"') { if (s[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n') { row.push(cur); out.push(row); row = []; cur = ''; }
    else if (c !== '\r') cur += c;
  }
  if (cur || row.length) { row.push(cur); out.push(row); }
  return out;
};
const text = fs.readFileSync(new URL('../../docs/LEARN_NEW_ITEMS.csv', import.meta.url), 'utf8').replace(/^﻿/, '');
const [head, ...body] = csv(text).filter((r) => r.length > 3);
const col = (r, n) => r[head.indexOf(n)];
const IT = fs.readFileSync(new URL('./it_words.txt', import.meta.url), 'utf8').split('\n').filter((l) => l.trim());
if (IT.length !== body.length) throw new Error(`Italian list has ${IT.length} lines, the CSV has ${body.length} rows`);

const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const PLURAL = new Set('tissues,hieroglyphs,the pyramids,vitamins,lentils,fireworks,sunglasses,stuffed vegetables,teeth,bones,lungs'.split(','));
const UNCOUNT = new Set('money,wood,metal,plastic,glass,cloth,stone,rubber,wool,leather,ice,steam,electricity,toothpaste,shampoo,confetti,ful medames,baklava,blood,skin,paper'.split(','));
const PLAIN = new Set('save water,plant a tree,camel ride,a pair,wash your hands,healthy food,exercise,sleep well,doctor\'s visit,hold hands,look both ways,ask a grown-up,exit sign'.split(','));
const WHERE = { // 'the ball is ... the box' per language (hand written: the cases differ)
  in: ['The ball is in the box.', 'Der Ball ist in der Kiste.', 'La balle est dans la boîte.', 'La palla è nella scatola.'],
  on: ['The ball is on the box.', 'Der Ball ist auf der Kiste.', 'La balle est sur la boîte.', 'La palla è sulla scatola.'],
  under: ['The ball is under the box.', 'Der Ball ist unter der Kiste.', 'La balle est sous la boîte.', 'La palla è sotto la scatola.'],
  behind: ['The ball is behind the box.', 'Der Ball ist hinter der Kiste.', 'La balle est derrière la boîte.', 'La palla è dietro la scatola.'],
  'in front of': ['The ball is in front of the box.', 'Der Ball ist vor der Kiste.', 'La balle est devant la boîte.', 'La palla è davanti alla scatola.'],
  'next to': ['The ball is next to the box.', 'Der Ball ist neben der Kiste.', 'La balle est à côté de la boîte.', 'La palla è accanto alla scatola.'],
  between: ['The ball is between the boxes.', 'Der Ball ist zwischen den Kisten.', 'La balle est entre les boîtes.', 'La palla è tra le scatole.'],
  above: ['The ball is above the box.', 'Der Ball ist über der Kiste.', 'La balle est au-dessus de la boîte.', 'La palla è sopra la scatola.'],
  left: ['The ball is on the left.', 'Der Ball ist links.', 'La balle est à gauche.', 'La palla è a sinistra.'],
  right: ['The ball is on the right.', 'Der Ball ist rechts.', 'La balle est à droite.', 'La palla è a destra.'],
};
const LI = { en: 0, de: 1, fr: 2, it: 3 };
const split2 = (s) => s.split(' - ').map((x) => x.trim());
const vowel = (w) => /^[aeiou]/i.test(w);

function sentence(kind, lang, key, w, extra) {
  switch (kind) {
    case 'verb': {
      if (lang === 'en') return `I can ${w.replace(/^to /, '')}.`;
      if (lang === 'de') return `Ich kann ${w} .`.replace(' .', '.');
      if (lang === 'fr') { if (/^se /.test(w)) return `Je peux me ${w.slice(3)}.`; if (/^s['’]/.test(w)) return `Je peux m'${w.slice(2)}.`; return `Je peux ${w}.`; }
      if (lang === 'it') return `Posso ${w.replace(/(\w*)rsi\b/, '$1rmi')}.`;
      break;
    }
    case 'adj': return { en: `It is ${w}.`, de: `Es ist ${w}.`, fr: `C'est ${w}.`, it: `È ${w}.` }[lang];
    case 'opposite': {
      const [a, b] = split2(w);
      return { en: `${cap(a)} is the opposite of ${b}.`, de: `${cap(a)} ist das Gegenteil von ${b}.`, fr: `${cap(a)} est le contraire de ${b}.`, it: `${cap(a)} è il contrario di ${b}.` }[lang];
    }
    case 'where': return WHERE[extra.en] ? WHERE[extra.en][LI[lang]] : '';
    case 'noun': {
      const pl = PLURAL.has(extra.en);
      if (lang === 'en') {
        if (pl) return `These are ${w}.`;
        if (UNCOUNT.has(extra.en) || /^(the |[A-Z])/.test(w)) return `This is ${w}.`;
        return `This is ${vowel(w) ? 'an' : 'a'} ${w}.`;
      }
      if (lang === 'de') return pl ? `Das sind ${w}.` : `Das ist ${w}.`;
      if (lang === 'fr') return pl ? `Ce sont ${w}.` : `C'est ${w}.`;
      if (lang === 'it') return pl || /^(i|gli|le) /.test(w) ? `Sono ${w}.` : `È ${w}.`;
      break;
    }
    default: return '';
  }
  return '';
}

const rows = { en: [], de: [], fr: [], it: [] };
body.forEach((r, i) => {
  const secCsv = col(r, 'section'), en = col(r, 'english').trim();
  const sec = NEW_SECTION_OF[secCsv]; if (!sec) throw new Error('no section for ' + secCsv);
  let kind = sec.kind; if (PLAIN.has(en)) kind = 'plain'; if (secCsv === 'shop' && / - /.test(en)) kind = 'opposite';
  const words = { en, de: col(r, 'german').trim(), fr: col(r, 'french').trim(), it: IT[i].trim() };
  for (const lang of ['en', 'de', 'fr', 'it']) {
    const w = words[lang];
    const s = sentence(kind, lang, secCsv, w, { en });
    const row = { cat: `new:${sec.id}`, en: w, w, s, thing: col(r, 'picture_id').trim() };
    if (lang === 'en') row.ar = col(r, 'arabic').trim();
    else { row.eng = en; row.lang = lang; row.ar = col(r, 'arabic').trim(); }
    rows[lang].push(row);
  }
});

fs.writeFileSync(new URL('../../assets/games/learn_voice/extra_words.js', import.meta.url), `// made by tools/learn_new/build_new_words.mjs (386 new words, five languages)\nwindow.__learnExtraWords = ${JSON.stringify(rows)};\n`);

const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
for (const lang of ['en', 'de', 'fr', 'it']) {
  let have = new Set(); try { have = new Set(fs.readdirSync(new URL(`../../assets/games/learn_voice/${lang}/`, import.meta.url)).map((f) => f.replace('.mp3', ''))); } catch { /* none yet (Italian) */ }
  const out = [['kind', 'text', 'file_name']]; const seen = new Set();
  const add = (kind, t, suf = '') => { if (!t) return; const id = clipId(t, lang) + suf; if (have.has(id) || seen.has(id)) return; seen.add(id); out.push([kind, t, id + '.mp3']); };
  for (const r of rows[lang]) { add('word', r.w); add('word-slow', r.w, '_slow'); add('sentence', r.s); }
  fs.writeFileSync(new URL(`../../docs/NEW_WORDS_VOICE_REQUEST_${lang.toUpperCase()}.csv`, import.meta.url), '﻿' + out.map((x) => x.map(q).join(',')).join('\n') + '\n');
  console.log(lang, 'rows', rows[lang].length, 'clips to record', out.length - 1, 'with sentence', rows[lang].filter((r) => r.s).length);
}
