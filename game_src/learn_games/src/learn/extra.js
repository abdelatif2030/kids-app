// The six newer kinds of «اتعلّم» sections (owner 2026-11-26): counting with pictures and ordinals, short sentences, picture stories,
// reading words (sight words), letter sounds (en/de/fr) and the Arabic vowel marks + letter forms.
// Pure data (no DOM). A missing recording is simply silent; every line spoken here is listed by tools/make_learn_missing_lines.mjs.
import EN from '../english/words.json' with { type: 'json' };
import DE from '../german/words.json' with { type: 'json' };
import FR from '../french/words.json' with { type: 'json' };
import IT from '../italian/words.json' with { type: 'json' };
import { LETTERS } from '../letters/sim.js';
import { numberWord } from '../letters/numbers.js';
import { numberWords } from './numbers.js';

const IDX = { ar: 0, en: 1, de: 2, fr: 3, it: 4 };
const pick = (a, lang) => a[IDX[lang]];
const WORDS = { en: EN, de: DE, fr: FR, it: IT };
const engOf = (e) => (e.eng !== undefined ? e.eng : e.en);
const BYKEY = new Map(EN.map((e) => [engOf(e).toLowerCase(), e]));
const thingOf = (key) => { const e = BYKEY.get(key); return e && e.thing ? e.thing : null; };

const item = (o) => ({ say: [], slow: [], sentence: [], ...o });

// ---------------------------------------------------------------- counting (1..10, 12, 15, 20) and ordinals (1..20)
const COUNT_THINGS = ['apple', 'x_ball', 'apple', 'x_ball', 'apple', 'x_ball', 'apple', 'x_ball', 'apple', 'x_ball']; // round things only: wide pictures overlap when there are many
const COUNTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];
const digits = (n, lang) => (lang === 'ar' ? String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : String(n));
const nw = (n, lang) => (lang === 'ar' ? numberWord(n) : numberWords(n, lang).text);

function countItems(lang) {
  return COUNTS.map((n, k) => {
    const say = [];
    for (let i = 1; i <= n; i++) say.push({ t: nw(i, lang), lang });
    return item({ key: `count:${n}`, show: { type: 'apples', n, thing: COUNT_THINGS[k % COUNT_THINGS.length], big: n <= 6 ? 1.35 : n <= 10 ? 1.1 : 0.95, spread: 1.45 }, label: digits(n, lang), lang, say, once: true });
  });
}

const ORD = {
  ar: ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر', 'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرين'],
  en: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth'],
  de: ['erste', 'zweite', 'dritte', 'vierte', 'fünfte', 'sechste', 'siebte', 'achte', 'neunte', 'zehnte', 'elfte', 'zwölfte', 'dreizehnte', 'vierzehnte', 'fünfzehnte', 'sechzehnte', 'siebzehnte', 'achtzehnte', 'neunzehnte', 'zwanzigste'],
  it: ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo', 'undicesimo', 'dodicesimo', 'tredicesimo', 'quattordicesimo', 'quindicesimo', 'sedicesimo', 'diciassettesimo', 'diciottesimo', 'diciannovesimo', 'ventesimo'],
  fr: ['premier', 'deuxième', 'troisième', 'quatrième', 'cinquième', 'sixième', 'septième', 'huitième', 'neuvième', 'dixième', 'onzième', 'douzième', 'treizième', 'quatorzième', 'quinzième', 'seizième', 'dix-septième', 'dix-huitième', 'dix-neuvième', 'vingtième'],
};
function ordinalSign(n, lang) {
  if (lang === 'en') return `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`;
  if (lang === 'de') return `${n}.`;
  if (lang === 'fr') return n === 1 ? '1er' : `${n}e`;
  if (lang === 'it') return `${n}º`;
  return digits(n, 'ar');
}
function ordinalItems(lang) {
  return ORD[lang].map((w, k) => item({ key: `ord:${k + 1}`, display: 'text', text: ordinalSign(k + 1, lang), show: null, label: w, lang, say: [{ t: w, lang }] }));
}

// ---------------------------------------------------------------- short sentences (a picture and one line)
// Arabic lines are written here; the English / German / French lines are the sentences of the word rows (the same recordings).
const SENT_AR = { dog: 'ده كلب', cat: 'دي قطة', apple: 'دي تفاحة', banana: 'دي موزة', ball: 'دي كورة', car: 'دي عربية', sun: 'دي الشمس', moon: 'ده القمر', tree: 'دي شجرة', flower: 'دي وردة',
  fish: 'دي سمكة', cow: 'دي بقرة', horse: 'ده حصان', book: 'ده كتاب', chair: 'ده كرسي', bed: 'ده سرير', bus: 'ده أتوبيس', boat: 'دي مركب', hat: 'دي طاقية', cup: 'ده كوب',
  egg: 'دي بيضة', milk: 'ده لبن', bread: 'ده عيش', cake: 'دي تورتة', pizza: 'دي بيتزا', girl: 'دي بنت', boy: 'ده ولد', baby: 'ده بيبي' };
function sentenceItems(lang) {
  const out = [];
  for (const key of Object.keys(SENT_AR)) {
    const en = BYKEY.get(key);
    if (!en || !en.thing) continue;
    let text, word;
    if (lang === 'ar') { text = SENT_AR[key]; word = en.ar; } else {
      const row = WORDS[lang].find((e) => engOf(e).toLowerCase() === key);
      if (!row || !row.s) continue;
      text = row.s; word = row.en;
    }
    out.push(item({ key: `sent:${key}`, show: { type: 'thing', thing: en.thing }, caption: text, label: word, lang, say: [{ t: text, lang }] }));
  }
  return out;
}

// ---------------------------------------------------------------- picture stories: 4 pages each (picture + one sentence)
const STORIES = [
  { id: 'story1', emoji: '🐱', name: ['قصة: القطة الجعانة', 'Story: The hungry cat', 'Geschichte: Die hungrige Katze', 'Histoire : Le chat affamé', 'Storia: La gatta affamata'], pics: ['cat', 'fish', 'o_milk', 'h_bed'], pages: [
    ['في قطة صغيرة جعانة.', 'القطة شافت سمكة.', 'القطة شربت شوية لبن.', 'دلوقتي القطة نامت في السرير. تصبحي على خير!'],
    ['A little cat is hungry.', 'She sees a fish.', 'She drinks some milk.', 'Now she goes to bed. Good night!'],
    ['Eine kleine Katze hat Hunger.', 'Sie sieht einen Fisch.', 'Sie trinkt etwas Milch.', 'Jetzt geht sie ins Bett. Gute Nacht!'],
    ['Un petit chat a faim.', 'Il voit un poisson.', 'Il boit du lait.', 'Maintenant il va au lit. Bonne nuit !'],
    ['C\'è una gattina affamata.', 'Vede un pesce.', 'Beve un po\' di latte.', 'Ora va a letto. Buonanotte!']] },
  { id: 'story2', emoji: '🪁', name: ['قصة: يوم مشمس', 'Story: A sunny day', 'Geschichte: Ein sonniger Tag', 'Histoire : Un jour de soleil', 'Storia: Una giornata di sole'], pics: ['sun', 'r_kite', 'r_cloud', 't_rain'], pages: [
    ['الشمس طلعت.', 'سامي معاه طيارة ورق.', 'جت سحابة كبيرة.', 'مطر! سامي جري على البيت.'],
    ['The sun is up.', 'Sam has a red kite.', 'A big cloud comes.', 'Rain! Sam runs home.'],
    ['Die Sonne scheint.', 'Sam hat einen roten Drachen.', 'Eine große Wolke kommt.', 'Es regnet! Sam rennt nach Hause.'],
    ['Le soleil brille.', 'Sam a un cerf-volant rouge.', 'Un gros nuage arrive.', 'Il pleut ! Sam court à la maison.'],
    ['Il sole è alto.', 'Sami ha un aquilone rosso.', 'Arriva una grande nuvola.', 'Piove! Sami corre a casa.']] },
  { id: 'story3', emoji: '🐄', name: ['قصة: في المزرعة', 'Story: At the farm', 'Geschichte: Auf dem Bauernhof', 'Histoire : À la ferme', 'Storia: In fattoria'], pics: ['cow', 'horse', 'mallard', 'dog'], pages: [
    ['البقرة بتقول موو.', 'الحصان بيجري بسرعة.', 'البطة بتعوم في البركة.', 'الكلب بيقول هو هو. صباح الخير يا مزرعة!'],
    ['The cow says moo.', 'The horse runs fast.', 'The duck swims in the pond.', 'The dog says woof. Good morning, farm!'],
    ['Die Kuh macht muh.', 'Das Pferd rennt schnell.', 'Die Ente schwimmt im Teich.', 'Der Hund sagt wau. Guten Morgen, Bauernhof!'],
    ['La vache fait meuh.', 'Le cheval court vite.', 'Le canard nage dans la mare.', 'Le chien fait ouaf. Bonjour, la ferme !'],
    ['La mucca fa muuu.', 'Il cavallo corre veloce.', 'L\'anatra nuota nello stagno.', 'Il cane fa bau. Buongiorno, fattoria!']] },
  { id: 'story4', emoji: '🚌', name: ['قصة: يوم آدم', "Story: Adam's day", 'Geschichte: Adams Tag', "Histoire : La journée d'Adam", 'Storia: La giornata di Adam'], pics: ['a_boy', 'o_bread', 'bus', 'e_book'], pages: [
    ['آدم صحي من النوم.', 'أكل عيش في الفطار.', 'راح المدرسة بالأتوبيس.', 'قرأ كتاب. يوم جميل!'],
    ['Adam is awake.', 'He eats bread for breakfast.', 'He goes to school by bus.', 'He reads a book. What a nice day!'],
    ['Adam ist wach.', 'Er isst Brot zum Frühstück.', 'Er fährt mit dem Bus zur Schule.', 'Er liest ein Buch. Was für ein schöner Tag!'],
    ['Adam est réveillé.', 'Il mange du pain au petit déjeuner.', "Il va à l'école en bus.", 'Il lit un livre. Quelle belle journée !'],
    ['Adam è sveglio.', 'Mangia il pane a colazione.', 'Va a scuola con l\'autobus.', 'Legge un libro. Che bella giornata!']] },
  { id: 'story5', emoji: '🍎', name: ['قصة: التفاحة الحمرا', 'Story: The red apple', 'Geschichte: Der rote Apfel', 'Histoire : La pomme rouge', 'Storia: La mela rossa'], pics: ['h_tree', 'apple', 'a_girl', 'a_baby'], pages: [
    ['في شجرة طويلة.', 'تفاحة حمرا وقعت.', 'نور شالت التفاحة.', 'نور قسمتها مع أخوها الصغير.'],
    ['There is a tall tree.', 'A red apple falls down.', 'Nour picks it up.', 'She shares it with her baby brother.'],
    ['Da ist ein hoher Baum.', 'Ein roter Apfel fällt herunter.', 'Nour hebt ihn auf.', 'Sie teilt ihn mit ihrem kleinen Bruder.'],
    ['Il y a un grand arbre.', 'Une pomme rouge tombe.', 'Nour la ramasse.', 'Elle la partage avec son petit frère.'],
    ['C\'è un albero alto.', 'Una mela rossa cade giù.', 'Nour la raccoglie.', 'La divide con il suo fratellino.']] },
];
export const STORY_DEFS = STORIES.map((s) => ({ id: s.id, emoji: s.emoji, name: s.name }));
function storyItems(story, lang) {
  const pages = story.pages[IDX[lang]];
  return pages.map((text, k) => item({ key: `${story.id}:${k + 1}`, show: { type: 'thing', thing: story.pics[k] }, caption: text, label: `${digits(k + 1, lang)} / ${digits(pages.length, lang)}`, lang, say: [{ t: text, lang }] }));
}

// ---------------------------------------------------------------- words to read (sight words)
const SIGHT = {
  ar: 'هذا هذه ده دي أنا إنت هو هي إحنا في على من إلى مع لا فين مين إيه ليه كبير صغير حلو جميل بيت ماما بابا يلا تعالى'.split(' '),
  en: 'the a and is it in on at to of you I we he she my me can see go like look this that have are was for with up down big said play come here'.split(' '),
  de: 'der die das und ist ich du er sie wir es in auf mit von zu ein nicht ja nein mein dein da hier was wer wo wie groß klein gut Mama Papa kann sehen gehen'.split(' '),
  it: 'il lo la un una e è sono io tu lui lei noi di a in su con per non sì no mio tuo qui là che chi dove come grande piccolo buono bello mamma papà'.split(' '),
  fr: 'le la les un une et est je tu il elle nous vous dans sur avec de du à pas oui non mon ma ton ici là que qui où comment grand petit bon papa maman'.split(' '),
};
function sightItems(lang) {
  return SIGHT[lang].map((w) => item({ key: `sight:${w}`, display: 'text', text: w, show: null, label: w, lang, say: [{ t: w, lang }] }));
}

// ---------------------------------------------------------------- letter sounds (en, de, fr): the sound, then a word that starts with it
const SOUNDS = {
  en: { a: 'ah', b: 'buh', c: 'kuh', d: 'duh', e: 'eh', f: 'fff', g: 'guh', h: 'huh', i: 'ih', j: 'juh', k: 'kuh', l: 'lll', m: 'mmm', n: 'nnn', o: 'aw', p: 'puh', q: 'kwuh', r: 'rrr', s: 'sss', t: 'tuh', u: 'uh', v: 'vvv', w: 'wuh', x: 'ks', y: 'yuh', z: 'zzz' },
  de: { a: 'a', b: 'bö', c: 'kö', d: 'dö', e: 'e', f: 'ff', g: 'gö', h: 'hö', i: 'i', j: 'jö', k: 'kö', l: 'll', m: 'mm', n: 'nn', o: 'o', p: 'pö', q: 'kwö', r: 'rr', s: 'ss', t: 'tö', u: 'u', v: 'ff', w: 'wö', x: 'ks', y: 'ü', z: 'ts', ä: 'ä', ö: 'ö', ü: 'ü', ß: 'ss' },
  it: { a: 'a', b: 'bu', c: 'ku', d: 'du', e: 'e', f: 'fff', g: 'gu', i: 'i', l: 'lll', m: 'mmm', n: 'nnn', o: 'o', p: 'pu', q: 'ku', r: 'rrr', s: 'sss', t: 'tu', u: 'u', v: 'vvv', z: 'ts' },
  fr: { a: 'a', b: 'beu', c: 'keu', d: 'deu', e: 'eu', f: 'ff', g: 'gu', h: '', i: 'i', j: 'jj', k: 'keu', l: 'll', m: 'mm', n: 'nn', o: 'o', p: 'peu', q: 'keu', r: 'rr', s: 'ss', t: 'teu', u: 'u', v: 'vv', w: 'weu', x: 'ks', y: 'i', z: 'zz', é: 'é', è: 'è', ê: 'ê', à: 'a', ç: 'ss' },
};
const ARTICLE = /^(der|die|das|ein|eine|le|la|les|l'|un|une|the|a|an|il|lo|i|gli|le)\s*/i;
const PREFER = ['animals', 'x:animals', 'picture words', 'picture pack: food', 'x:food', 'things of a colour', 'picture pack: school', 'x:home', 'x:around'];
function phonicsItems(lang) {
  if (lang === 'ar') return [];
  const rows = WORDS[lang].filter((e) => e.thing && !e.cat.startsWith('letters') && !e.cat.startsWith('numbers') && e.w && !String(e.thing).startsWith('y_'));
  const out = [];
  for (const [L, sound] of Object.entries(SOUNDS[lang])) {
    const cands = rows.filter((e) => e.w.replace(ARTICLE, '').toLowerCase().startsWith(L)).sort((x, y) => (PREFER.indexOf(x.cat) + 1 || 99) - (PREFER.indexOf(y.cat) + 1 || 99));
    const ex = cands[0];
    const say = [];
    if (sound) say.push({ t: sound, lang });
    if (ex) say.push({ t: ex.w, lang });
    if (!say.length) continue;
    out.push(item({ key: `sound:${L}`, show: ex ? { type: 'thing', thing: ex.thing } : { type: 'letter', ch: L.toUpperCase() + L, scale: 1.5 }, label: `${L.toUpperCase()}${L}${ex ? '  ' + ex.en : ''}`, lang, say, once: true }));
  }
  return out;
}

// ---------------------------------------------------------------- Arabic: the vowel marks, syllables, and the forms of a letter
const MARKS = [['ـَ', 'الفتحة'], ['ـُ', 'الضمة'], ['ـِ', 'الكسرة'], ['ـْ', 'السكون'], ['ـّ', 'الشدّة'], ['ـً', 'التنوين']];
function harakatItems(lang) {
  if (lang !== 'ar') return [];
  const out = MARKS.map(([m, name], k) => item({ key: `mark:${k}`, display: 'text', text: m, show: null, label: name, lang, say: [{ t: name, lang }] }));
  for (const L of ['ب', 'م', 'ن', 'ك', 'س']) for (const v of ['َ', 'ُ', 'ِ']) {
    const s = L + v;
    out.push(item({ key: `syl:${s}`, display: 'text', text: s, show: null, label: s, lang, say: [{ t: s, lang }] }));
  }
  for (const v of ['ْ', 'ّ', 'ً', 'ٌ', 'ٍ']) {
    const s = 'ب' + v;
    out.push(item({ key: `syl:${s}`, display: 'text', text: s, show: null, label: s, lang, say: [{ t: s, lang }] }));
  }
  return out;
}
const NOJOIN = new Set('ادذرزوأؤإء');
const ARABIC_ORDER = 'أبتثجحخدذرزسشصضطظعغفقكلمنهوي';
function formItems(lang) {
  if (lang !== 'ar') return [];
  const rows = [...LETTERS].sort((a, b) => ARABIC_ORDER.indexOf(a.ch) - ARABIC_ORDER.indexOf(b.ch));
  return rows.map((l) => {
    const c = l.ch;
    const text = NOJOIN.has(c) ? `${c}   ـ${c}` : `${c}ـ   ـ${c}ـ   ـ${c}`;
    return item({ key: `form:${l.id}`, display: 'text', fs: 15, text, show: null, label: l.ch, lang, say: [{ t: l.the, lang }] });
  });
}

// ---------------------------------------------------------------- the definitions (id, emoji, names, builder)
export const EXTRA_DEFS = [
  { id: 'count', emoji: '🍎', name: ['عدّ معايا', 'Count with me', 'Zähl mit', 'Compte avec moi', 'Conta con me'], build: countItems, after: 'numbers' },
  { id: 'ordinals', emoji: '🥇', name: ['الأول والتاني', 'First, second, third', 'Erste, zweite, dritte', 'Premier, deuxième', 'Primo, secondo, terzo'], build: ordinalItems, after: 'count' },
  { id: 'sentences', emoji: '💬', name: ['جمل قصيرة', 'Short sentences', 'Kurze Sätze', 'Phrases courtes', 'Frasi brevi'], build: sentenceItems },
  ...STORIES.map((s) => ({ id: s.id, emoji: s.emoji, name: s.name, build: (lang) => storyItems(s, lang) })),
  { id: 'sight', emoji: '📖', name: ['كلمات للقراءة', 'Words to read', 'Wörter zum Lesen', 'Mots à lire', 'Parole da leggere'], build: sightItems },
  { id: 'phonics', emoji: '🔈', name: ['أصوات الحروف', 'Letter sounds', 'Buchstabenlaute', 'Les sons des lettres', 'I suoni delle lettere'], build: phonicsItems },
  { id: 'harakat', emoji: '✏️', name: ['الحركات', 'Vowel marks', 'Vokalzeichen', 'Voyelles', 'Le vocali (arabo)'], build: harakatItems },
  { id: 'forms', emoji: '🔠', name: ['شكل الحرف', 'Letter forms', 'Buchstabenformen', 'Formes des lettres', 'Forme delle lettere (arabo)'], build: formItems },
];
