// Writes the «examples» (up to 4 per word) of every word the child learns, in Arabic / English / German / French:
//   assets/games/learn_voice/examples.js           (loaded by the game as a script: the «Example» button above the word shows them as 1 2 3 4, each with a speaker; Arabic + the language)
//   docs/EXAMPLES_ALL_ITEMS.csv                    (for review: key, section, example number, the four sentences)
//   docs/EXAMPLES_VOICE_REQUEST.csv                (the clips to generate that do not exist yet: language, example number, text, file name)
//   docs/EXAMPLES_IMAGE_PROMPTS.md                 (one scene picture per word, for example 1: 12 per sheet; file names ex_<word>.webp)
// The sentences are made from safe patterns per kind of word (look at / I can see / where is / find / show me / I like / I want), so they are
// grammatical in every language; hand-written sets (seasons, parts of the day) replace the patterns. A native speaker should read the German
// and French ones. Run: node tools/make_examples.mjs   (nothing is generated, only listed)
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
import { learnSections } from '../game_src/learn_games/src/learn/sections.js';

const rd = (f) => JSON.parse(fs.readFileSync(new URL(`../game_src/learn_games/src/${f}/words.json`, import.meta.url), 'utf8'));
const EN = rd('english'), DE = rd('german'), FR = rd('french'), IT = rd('italian');
const engOf = (e) => (e.eng !== undefined ? e.eng : e.en).toLowerCase();
const byKey = (rows) => new Map(rows.map((e) => [engOf(e), e]));
const M = { en: byKey(EN), de: byKey(DE), fr: byKey(FR), it: byKey(IT) };
const IT_ART = /^(il|lo|la|i|gli|le|l') ?/;
const itPlural = (w) => /^(i|gli|le) /.test(w);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const DE_ART = /^(der|die|das) /;
const FR_ART = /^(le|la|les|l') ?/;
const accDe = (w) => w.replace(/^der /, 'den ');
const noArt = (w) => w.replace(DE_ART, '').replace(/^(le|la|les) /, '').replace(/^l'/, '');

// pattern -> [ar, en, de, fr] builders
const P = {
  look: [(w) => `بُصّ على ${w}!`, (w) => `Look at the ${w}!`, (w) => `Schau dir ${accDe(w)} an!`, (w) => `Regarde ${w} !`, (w) => `Guarda ${w}!`],
  see: [(w) => `أنا شايف ${w}.`, (w) => `I can see the ${w}.`, (w) => `Ich sehe ${accDe(w)}.`, (w) => `Je vois ${w}.`, (w) => `Vedo ${w}.`],
  where: [(w) => `فين ${w}؟`, (w) => `Where is the ${w}?`, (w) => `Wo ist ${w}?`, (w) => `Où est ${w} ?`, (w) => (itPlural(w) ? `Dove sono ${w}?` : `Dov'è ${w}?`)],
  find: [(w) => `تقدر تلاقي ${w}؟`, (w) => `Can you find the ${w}?`, (w) => `Kannst du ${accDe(w)} finden?`, (w) => `Peux-tu trouver ${w} ?`, (w) => `Riesci a trovare ${w}?`],
  show: [(w) => `وريني ${w}!`, (w) => `Show me the ${w}!`, (w) => `Zeig mir ${accDe(w)}!`, (w) => `Montre-moi ${w} !`, (w) => `Mostrami ${w}!`],
  like: [(w) => `أنا بحب ${w}.`, (w) => `I like the ${w}.`, (w) => `Ich mag ${accDe(w)}.`, (w) => `J'aime ${w}.`, (w) => (itPlural(w) ? `Mi piacciono ${w}.` : `Mi piace ${w}.`)],
  want: [(w) => `عايز ${w}.`, (w) => `I want the ${w}.`, (w) => `Ich möchte ${accDe(w)}.`, (w) => `Je veux ${w}.`, (w) => `Voglio ${w}.`],
};
const ICON = { look: '👀', see: '👁️', where: '❓', find: '🔎', show: '👉', like: '❤️', want: '🤲' };
const HAND_ICON = { morning: '🌅', afternoon: '☀️', evening: '🌇', night: '🌙', spring: '🌸', summer: '🏖️', autumn: '🍂', winter: '❄️' };
const ANIMAL = 'look see where like find show'.split(' ');
const FOOD = 'want like see show look find'.split(' ');
const DEFAULT = 'see look where find show'.split(' ');
const POOLS = { animals: ANIMAL, farm: ANIMAL, wild: ANIMAL, birds: ANIMAL, sea: ANIMAL, insects: ANIMAL, reptiles: ANIMAL, food: FOOD, fruit: FOOD, veg: FOOD };
const SKIP = new Set(['letters', 'numbers', 'count', 'ordinals', 'sentences', 'sight', 'phonics', 'harakat', 'forms', 'feelings']);
const SPECIAL = new Set(['seasons', 'days', 'months', 'colours']);

// hand-written sets: [ar, en, de, fr] per example
const HAND = {
  morning: [['صباح الخير! الشمس طلعت.', 'Good morning! The sun is up.', 'Guten Morgen! Die Sonne ist da.', 'Bonjour ! Le soleil se lève.'], ['بغسل سناني الصبح.', 'I brush my teeth in the morning.', 'Am Morgen putze ich mir die Zähne.', 'Le matin, je me brosse les dents.'], ['الفطار بيبقى الصبح.', 'We eat breakfast in the morning.', 'Am Morgen essen wir Frühstück.', 'Le matin, nous prenons le petit déjeuner.']],
  afternoon: [['بنلعب بعد الضهر.', 'We play in the afternoon.', 'Am Nachmittag spielen wir.', "L'après-midi, nous jouons."], ['الغدا بعد الضهر.', 'We eat lunch in the afternoon.', 'Am Nachmittag essen wir zu Mittag.', "L'après-midi, nous déjeunons."], ['الشمس عالية بعد الضهر.', 'The sun is high in the afternoon.', 'Am Nachmittag steht die Sonne hoch.', "L'après-midi, le soleil est haut."]],
  evening: [['بنتعشى بالمسا.', 'We have dinner in the evening.', 'Am Abend essen wir zu Abend.', 'Le soir, nous dînons.'], ['الشمس بتغرب بالمسا.', 'The sun goes down in the evening.', 'Am Abend geht die Sonne unter.', 'Le soir, le soleil se couche.'], ['بسمع حكاية بالمسا.', 'I listen to a story in the evening.', 'Am Abend höre ich eine Geschichte.', 'Le soir, j’écoute une histoire.']],
  night: [['النجوم بتلمع بالليل.', 'The stars shine at night.', 'Nachts leuchten die Sterne.', 'La nuit, les étoiles brillent.'], ['بنام بالليل.', 'We sleep at night.', 'Nachts schlafen wir.', 'La nuit, nous dormons.'], ['القمر بيطلع بالليل.', 'The moon comes out at night.', 'Nachts kommt der Mond heraus.', 'La nuit, la lune se lève.']],
  spring: [['الورد بيطلع في الربيع.', 'Flowers grow in spring.', 'Im Frühling wachsen Blumen.', 'Au printemps, les fleurs poussent.'], ['الجو حلو في الربيع.', 'The weather is nice in spring.', 'Im Frühling ist das Wetter schön.', 'Au printemps, il fait beau.'], ['الفراشات بتطير في الربيع.', 'Butterflies fly in spring.', 'Im Frühling fliegen Schmetterlinge.', 'Au printemps, les papillons volent.']],
  summer: [['بنسبح في الصيف.', 'We swim in summer.', 'Im Sommer schwimmen wir.', 'En été, nous nageons.'], ['الجو حر في الصيف.', 'It is hot in summer.', 'Im Sommer ist es heiß.', 'En été, il fait chaud.'], ['بناكل آيس كريم في الصيف.', 'We eat ice cream in summer.', 'Im Sommer essen wir Eis.', 'En été, nous mangeons une glace.']],
  autumn: [['الورق بيقع في الخريف.', 'Leaves fall in autumn.', 'Im Herbst fallen die Blätter.', 'En automne, les feuilles tombent.'], ['الجو معتدل في الخريف.', 'The weather is mild in autumn.', 'Im Herbst ist das Wetter mild.', 'En automne, il fait doux.'], ['المدرسة بتبدأ في الخريف.', 'School starts in autumn.', 'Im Herbst beginnt die Schule.', "En automne, l'école commence."]],
  winter: [['الدنيا برد في الشتا.', 'It is cold in winter.', 'Im Winter ist es kalt.', 'En hiver, il fait froid.'], ['بنلبس هدوم تقيلة في الشتا.', 'We wear warm clothes in winter.', 'Im Winter tragen wir warme Kleidung.', 'En hiver, nous portons des vêtements chauds.'], ['المطر بينزل في الشتا.', 'It rains in winter.', 'Im Winter regnet es.', 'En hiver, il pleut.']],
};
const HAND_IT = {"morning": ["Buongiorno! Il sole è alto.", "Al mattino mi lavo i denti.", "Al mattino faccio colazione."], "afternoon": ["Il pomeriggio giochiamo.", "Il pomeriggio pranziamo.", "Il pomeriggio il sole è alto."], "evening": ["La sera ceniamo.", "La sera il sole tramonta.", "La sera ascolto una storia."], "night": ["Di notte brillano le stelle.", "Di notte dormiamo.", "Di notte esce la luna."], "spring": ["In primavera crescono i fiori.", "In primavera il tempo è bello.", "In primavera volano le farfalle."], "summer": ["In estate nuotiamo.", "In estate fa caldo.", "In estate mangiamo il gelato."], "autumn": ["In autunno cadono le foglie.", "In autunno il tempo è mite.", "In autunno inizia la scuola."], "winter": ["In inverno fa freddo.", "In inverno indossiamo vestiti caldi.", "In inverno piove."]};
const DAYS = [
  (a, e, d, f) => [`هنتقابل يوم ${a}.`, `See you on ${cap(e)}!`, d && `Bis ${d}!`, f && `À ${f} !`],
  (a, e, d, f) => [`بنلعب يوم ${a}.`, `We play on ${cap(e)}.`, d && `Am ${d} spielen wir.`, f && `Le ${f}, nous jouons.`],
  (a, e, d, f) => [`يوم ${a} يوم حلو.`, `${cap(e)} is a nice day.`, d && `${cap(d)} ist ein schöner Tag.`, f && `${cap(f)} est un beau jour.`],
  (a, e, d, f) => [`يوم ${a} هشوف عيلتي.`, `I will see my family on ${cap(e)}.`, d && `Am ${d} sehe ich meine Familie.`, f && `${cap(f)}, je vois ma famille.`],
];
const MONTHS = [
  (a, e, d, f) => [`عيد ميلادي في شهر ${a}.`, `My birthday is in ${cap(e)}.`, d && `Mein Geburtstag ist im ${noArt(d)}.`, f && `Mon anniversaire est en ${f}.`],
  (a, e, d, f) => [`${a} شهر من شهور السنة.`, `${cap(e)} is a month of the year.`, d && `${cap(d)} ist ein Monat im Jahr.`, f && `${cap(f)} est un mois de l'année.`],
  (a, e, d, f) => [`في شهر ${a} بنتبسط.`, `We have fun in ${cap(e)}.`, d && `Im ${noArt(d)} haben wir Spaß.`, f && `En ${f}, nous nous amusons.`],
  (a, e, d, f) => [`شهري المفضل هو ${a}.`, `My favourite month is ${cap(e)}.`, d && `Mein Lieblingsmonat ist ${d}.`, f && `Mon mois préféré est ${f}.`],
];
const COLOURS = [
  (a, e, d, f) => [`أنا بحب اللون ${a}.`, `I like ${e}.`, d && `Ich mag ${cap(d)}.`, f && `J'aime le ${f}.`],
  (a, e, d, f) => [`اللون ${a} لون حلو.`, `${cap(e)} is a pretty colour.`, d && `${cap(d)} ist eine schöne Farbe.`, f && `Le ${f} est une belle couleur.`],
  (a, e, d, f) => [`تقدر تلاقي حاجة لونها ${a}؟`, `Can you find something ${e}?`, d && /[^a]$/.test(d) && !/ /.test(d) ? `Findest du etwas ${cap(d)}es?` : null, f && `Peux-tu trouver quelque chose de ${f} ?`],
];
const isPlural = (en) => /s$/.test(en) && !/(ss|us|is)$/.test(en);

const table = {}; // key -> [{ar,en,de,fr}, ...] (aligned: example i in every language says the same thing)
const rows = [['key', 'section', 'example_no', 'arabic', 'english', 'german', 'french', 'italian']];
const secOf = new Map();
for (const s of learnSections('en')) {
  if (SKIP.has(s.id)) continue;
  for (const it of s.items) { const k = it.key.split(':').slice(1).join(':').toLowerCase(); if (!secOf.has(k)) secOf.set(k, s.id); }
}
let spin = 0;
for (const [k, sec] of secOf) {
  const en = M.en.get(k); if (!en) continue;
  const de = M.de.get(k), fr = M.fr.get(k), it = M.it.get(k);
  const sets = []; // each: [ar, en, de, fr]
  if (HAND[k]) sets.push(...HAND[k].map((x, i) => [...x, (HAND_IT[k] || [])[i] || null, HAND_ICON[k]]));
  else if (sec === 'days') DAYS.forEach((f, i) => { const w = it && it.w; const t = [`Ci vediamo ${w}!`, `Il ${w} giochiamo.`, `${cap(w || '')} è un bel giorno.`, `${cap(w || '')} vedo la mia famiglia.`][i]; sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), w ? t : null, '📅']); });
  else if (sec === 'months') MONTHS.forEach((f, i) => { const w = it && it.w; const t = [`Il mio compleanno è a ${w}.`, `${cap(w || '')} è un mese dell'anno.`, `A ${w} ci divertiamo.`, `Il mio mese preferito è ${w}.`][i]; sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), w ? t : null, '🗓️']); });
  else if (sec === 'colours') COLOURS.forEach((f, i) => { const w = it && it.w; const d = w ? (/^[aeiou]/.test(w) ? `l'${w}` : `il ${w}`) : ''; const t = [`Mi piace ${d}.`, `${cap(d)} è un bel colore.`, `Riesci a trovare qualcosa di ${w}?`][i]; sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), w ? t : null, '🎨']); });
  else if (!SPECIAL.has(sec)) {
    const pool = POOLS[sec] || DEFAULT;
    const plural = isPlural(en.w);
    const usable = pool.filter((p) => !(plural && p === 'where'));
    const chosen = []; for (let i = 0; chosen.length < Math.min(4, usable.length); i++) chosen.push(usable[(spin + i) % usable.length]);
    spin++;
    for (const p of chosen) {
      const b = P[p];
      const deOk = de && DE_ART.test(de.w) && !(p === 'where' && /^die /.test(de.w) && plural);
      const frOk = fr && FR_ART.test(fr.w) && !(p === 'where' && /^les /.test(fr.w));
      const itOk = it && IT_ART.test(it.w);
      sets.push([en.ar ? b[0](en.ar) : null, b[1](en.w), deOk ? b[2](de.w) : null, frOk ? b[3](fr.w) : null, itOk ? b[4](it.w) : null, ICON[p]]);
    }
  } else continue;
  table[k] = sets.map((s) => ({ ar: s[0] || '', en: s[1] || '', de: s[2] || '', fr: s[3] || '', it: s[4] || '', ic: s[5] || '💡' }));
  sets.forEach((s, i) => rows.push([k, sec, i + 1, s[0] || '', s[1] || '', s[2] || '', s[3] || '', s[4] || '']));
}
fs.writeFileSync(new URL('../assets/games/learn_voice/examples.js', import.meta.url), `// made by tools/make_examples.mjs: up to 4 example sentences per word (Arabic, English, German, French)
window.__learnExamples = ${JSON.stringify(table)};
`);
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
fs.writeFileSync(new URL('../docs/EXAMPLES_ALL_ITEMS.csv', import.meta.url), '\ufeff' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
const has = (lang, id) => fs.existsSync(new URL(`../assets/games/learn_voice/${lang}/${id}.mp3`, import.meta.url));
const req = [['language', 'example_no', 'text', 'file_name']]; const seen = new Set();
const per = { ar: { words: 0, sentences: 0 }, en: { words: 0, sentences: 0 }, de: { words: 0, sentences: 0 }, fr: { words: 0, sentences: 0 }, it: { words: 0, sentences: 0 } };
for (const [k, arr] of Object.entries(table)) for (const l of ['ar', 'en', 'de', 'fr', 'it']) {
  let any = false;
  arr.forEach((e, i) => { const t = e[l]; if (!t) return; any = true; per[l].sentences++; const id = clipId(t, l); if (seen.has(l + id) || has(l, id)) return; seen.add(l + id); req.push([l, i + 1, t, id + '.mp3']); });
  if (any) per[l].words++;
}
fs.writeFileSync(new URL('../docs/EXAMPLES_VOICE_REQUEST.csv', import.meta.url), '\ufeff' + req.map((r) => r.map(q).join(',')).join('\n') + '\n');
// one scene picture per word (the scene of example 1), 12 per sheet, cut by machine
const slug = (k) => k.replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
const keys = Object.keys(table).filter((k) => table[k][0] && table[k][0].en);
const PRE = "Polished kids' mobile-game art, cute 3D-cartoon look, glossy, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters, no text, no letters, no numbers anywhere in the pictures). TECHNICAL RULES (the picture is cut by machine): ONE single image, a grid of 4 columns x 3 rows, every cell exactly the same size, a thin pure white gap between cells, each cell is a COMPLETE small scene (its own bright background filling the whole cell, nothing cut at the edge) with ONE clear main subject shown doing what the sentence says, easy for a 3-year-old to read. In this exact order left to right, top to bottom: ";
const md = ['# صور الأمثلة: مشهد لكل كلمة (مثال رقم 1)', '', 'نفس شات ChatGPT. كل شيت 4 × 3 = 12 مشهد. أسماء الملفات ex_<الكلمة>.webp تحت كل برومت. اللعبة بتعرض الصورة فوق الأمثلة لو الملف موجود، ولو مش موجود بتشتغل من غيرها.', ''];
for (let i = 0, n = 1; i < keys.length; i += 12, n++) {
  const ch = keys.slice(i, i + 12);
  md.push(`**EXP-${String(n).padStart(2, '0')}**`, PRE + ch.map((k, j) => `(${j + 1}) ${table[k][0].en}`).join('; ') + '.', `أسماء الملفات بالترتيب: ${ch.map((k) => 'ex_' + slug(k)).join(', ')}`, '');
}
fs.writeFileSync(new URL('../docs/EXAMPLES_IMAGE_PROMPTS.md', import.meta.url), md.join('\n'));
// phase 2 (optional): a picture for EVERY example (ex_<word>_<n>.webp): the small picture beside the example; without it the word's scene is used
const flat = [];
for (const k of Object.keys(table)) table[k].forEach((e, i) => { if (e.en) flat.push({ k, n: i + 1, en: e.en }); });
const md2 = ['# صور لكل مثال (مرحلة 2: اختياري)', '', 'صورة صغيرة جنب كل مثال بتوضح الموقف. أسماء الملفات ex_<الكلمة>_<رقم المثال>.webp. لو الملف مش موجود اللعبة بتستخدم صورة الكلمة (ex_<الكلمة>.webp من المرحلة 1)، ولو دي كمان مش موجودة بتشتغل من غير صورة.', ''];
for (let i = 0, n = 1; i < flat.length; i += 12, n++) {
  const ch = flat.slice(i, i + 12);
  md2.push(`**EXE-${String(n).padStart(3, '0')}**`, PRE + ch.map((x, j) => `(${j + 1}) ${x.en}`).join('; ') + '.', `أسماء الملفات بالترتيب: ${ch.map((x) => `ex_${slug(x.k)}_${x.n}`).join(', ')}`, '');
}
fs.writeFileSync(new URL('../docs/EXAMPLES_IMAGE_PROMPTS_PER_EXAMPLE.md', import.meta.url), md2.join(String.fromCharCode(10)));
console.log(JSON.stringify(per), '| clips to generate', req.length - 1, '| scene pictures', keys.length, '| sheets', Math.ceil(keys.length / 12), '| pictures per example', flat.length, '| sheets', Math.ceil(flat.length / 12));
