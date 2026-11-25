// German version of the English word list (docs/ENGLISH_WORDLIST.csv): same words, same order, 3 clips each
// (the word with its article at normal speed, slowly, and a short sentence). Nouns are taught WITH their article
// (der / die / das). Run:  node tools/game_voice/german_wordlist.mjs   ->  docs/GERMAN_WORDLIST.csv
// The German is written by Claude: a native German speaker must check every line before recording.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
// '*' = plural noun ("Das sind ..."), '~' = no article in the sentence ("Das ist Milch."), array = [word, own sentence]
const DE = {
  zero: 'null', one: 'eins', two: 'zwei', three: 'drei', four: 'vier', five: 'fünf', six: 'sechs', seven: 'sieben', eight: 'acht', nine: 'neun', ten: 'zehn',
  eleven: 'elf', twelve: 'zwölf', thirteen: 'dreizehn', fourteen: 'vierzehn', fifteen: 'fünfzehn', sixteen: 'sechzehn', seventeen: 'siebzehn', eighteen: 'achtzehn',
  nineteen: 'neunzehn', twenty: 'zwanzig', thirty: 'dreißig', forty: 'vierzig', fifty: 'fünfzig', sixty: 'sechzig', seventy: 'siebzig', eighty: 'achtzig', ninety: 'neunzig', 'one hundred': 'hundert',
  'letter a': ['A', 'A wie Affe.'], 'letter b': ['Be', 'B wie Ball.'], 'letter c': ['Ze', 'C wie Computer.'], 'letter d': ['De', 'D wie Dach.'], 'letter e': ['E', 'E wie Esel.'],
  'letter f': ['Eff', 'F wie Fisch.'], 'letter g': ['Ge', 'G wie Giraffe.'], 'letter h': ['Ha', 'H wie Hund.'], 'letter i': ['I', 'I wie Igel.'], 'letter j': ['Jott', 'J wie Jacke.'],
  'letter k': ['Ka', 'K wie Katze.'], 'letter l': ['Ell', 'L wie Löwe.'], 'letter m': ['Emm', 'M wie Maus.'], 'letter n': ['Enn', 'N wie Nase.'], 'letter o': ['O', 'O wie Ohr.'],
  'letter p': ['Pe', 'P wie Pinguin.'], 'letter q': ['Ku', 'Q wie Qualle.'], 'letter r': ['Er', 'R wie Rose.'], 'letter s': ['Ess', 'S wie Sonne.'], 'letter t': ['Te', 'T wie Tiger.'],
  'letter u': ['U', 'U wie Uhr.'], 'letter v': ['Fau', 'V wie Vogel.'], 'letter w': ['We', 'W wie Wolke.'], 'letter x': ['Iks', 'X wie Xylophon.'], 'letter y': ['Üpsilon', 'Y wie Yacht.'], 'letter z': ['Zett', 'Z wie Zebra.'],
  red: 'rot', blue: 'blau', yellow: 'gelb', green: 'grün', orange: 'orange', purple: 'lila', pink: 'rosa', black: 'schwarz', white: 'weiß', brown: 'braun', gray: 'grau',
  'sky blue': 'himmelblau', navy: 'marineblau', 'light green': 'hellgrün', 'dark green': 'dunkelgrün', turquoise: 'türkis', gold: 'gold', silver: 'silber', beige: 'beige', maroon: 'weinrot',
  lemon: 'zitronengelb', peach: 'pfirsichfarben', lilac: 'flieder', olive: 'olivgrün', mustard: 'senfgelb', magenta: 'magenta', indigo: 'indigo', crimson: 'dunkelrot', bronze: 'bronze',
  caramel: 'karamellfarben', charcoal: 'anthrazit', mint: 'mintgrün', coral: 'korallenrot', sand: 'sandfarben',
  circle: 'der Kreis', square: 'das Quadrat', triangle: 'das Dreieck', star: 'der Stern', heart: 'das Herz', rectangle: 'das Rechteck', oval: 'das Oval', diamond: 'die Raute',
  pentagon: 'das Fünfeck', hexagon: 'das Sechseck', octagon: 'das Achteck', crescent: 'die Mondsichel', plus: 'das Pluszeichen', semicircle: 'der Halbkreis', trapezoid: 'das Trapez',
  parallelogram: 'das Parallelogramm', hexagram: 'der Sechsstern', drop: 'der Tropfen', arrow: 'der Pfeil', ring: 'der Ring', cube: 'der Würfel', ball: 'der Ball', cone: 'der Kegel',
  cylinder: 'der Zylinder', pyramid: 'die Pyramide', sphere: 'die Kugel',
  saturday: ['Samstag', 'Heute ist Samstag.'], sunday: ['Sonntag', 'Heute ist Sonntag.'], monday: ['Montag', 'Heute ist Montag.'], tuesday: ['Dienstag', 'Heute ist Dienstag.'],
  wednesday: ['Mittwoch', 'Heute ist Mittwoch.'], thursday: ['Donnerstag', 'Heute ist Donnerstag.'], friday: ['Freitag', 'Heute ist Freitag.'],
  january: 'der Januar', february: 'der Februar', march: 'der März', april: 'der April', may: 'der Mai', june: 'der Juni', july: 'der Juli', august: 'der August',
  september: 'der September', october: 'der Oktober', november: 'der November', december: 'der Dezember',
  summer: 'der Sommer', winter: 'der Winter', spring: 'der Frühling', autumn: 'der Herbst',
  morning: ['der Morgen', 'Guten Morgen!'], noon: ['der Mittag', 'Es ist Mittag.'], evening: ['der Abend', 'Guten Abend!'], night: ['die Nacht', 'Gute Nacht!'],
  'wake up': ['aufwachen', 'Ich wache auf.'], 'wash my face': ['das Gesicht waschen', 'Ich wasche mein Gesicht.'], 'eat breakfast': ['frühstücken', 'Ich frühstücke.'],
  'go to school': ['zur Schule gehen', 'Ich gehe zur Schule.'], 'eat lunch': ['zu Mittag essen', 'Ich esse zu Mittag.'], play: ['spielen', 'Ich spiele.'],
  'eat dinner': ['zu Abend essen', 'Ich esse zu Abend.'], 'have a bath': ['baden', 'Ich bade.'], 'brush my teeth': ['die Zähne putzen', 'Ich putze meine Zähne.'], sleep: ['schlafen', 'Ich schlafe.'],
  'on the table': ['auf dem Tisch', 'Der Ball ist auf dem Tisch.'], 'under the table': ['unter dem Tisch', 'Der Ball ist unter dem Tisch.'], 'inside the box': ['in der Kiste', 'Der Ball ist in der Kiste.'],
  'next to the box': ['neben der Kiste', 'Der Ball ist neben der Kiste.'], 'next to the table': ['neben dem Tisch', 'Der Ball ist neben dem Tisch.'],
  'red ball': ['der rote Ball', 'Das ist ein roter Ball.'], 'blue cube': ['der blaue Würfel', 'Das ist ein blauer Würfel.'], 'yellow star': ['der gelbe Stern', 'Das ist ein gelber Stern.'],
  'green heart': ['das grüne Herz', 'Das ist ein grünes Herz.'], 'purple ring': ['der lila Ring', 'Das ist ein lila Ring.'], 'orange drop': ['der orange Tropfen', 'Das ist ein orange Tropfen.'],
  bunny: 'der Hase', cat: 'die Katze', dog: 'der Hund', monkey: 'der Affe', cow: 'die Kuh', bear: 'der Bär', mouse: 'die Maus', chick: 'das Küken', horse: 'das Pferd', hen: 'die Henne',
  donkey: 'der Esel', goat: 'die Ziege', parrot: 'der Papagei', sheep: 'das Schaf', rooster: 'der Hahn', lion: 'der Löwe', tiger: 'der Tiger', elephant: 'der Elefant', giraffe: 'die Giraffe',
  zebra: 'das Zebra', gorilla: 'der Gorilla', chameleon: 'das Chamäleon', frog: 'der Frosch', toucan: 'der Tukan', penguin: 'der Pinguin', seal: 'die Robbe', reindeer: 'das Rentier',
  fox: 'der Fuchs', camel: 'das Kamel', hawk: 'der Falke', dolphin: 'der Delfin', turtle: 'die Schildkröte', bee: 'die Biene', butterfly: 'der Schmetterling', goose: 'die Gans',
  duck: 'die Ente', pigeon: 'die Taube', peacock: 'der Pfau', shark: 'der Hai', cheetah: 'der Gepard', crocodile: 'das Krokodil', iguana: 'der Leguan', mantis: 'die Gottesanbeterin',
  caterpillar: 'die Raupe', 'T. rex': 'der T-Rex', triceratops: 'der Triceratops', stegosaurus: 'der Stegosaurus', brachiosaurus: 'der Brachiosaurus', owl: 'die Eule', panda: 'der Panda',
  octopus: 'der Oktopus', crab: 'die Krabbe', whale: 'der Wal', bat: 'die Fledermaus', eagle: 'der Adler', ostrich: 'der Strauß', swan: 'der Schwan', sparrow: 'der Spatz', snail: 'die Schnecke',
  spider: 'die Spinne', crow: 'die Krähe', ladybug: 'der Marienkäfer', dragonfly: 'die Libelle', flamingo: 'der Flamingo',
  eye: 'das Auge', ear: 'das Ohr', nose: 'die Nase', mouth: 'der Mund', hand: 'die Hand', foot: 'der Fuß', hair: 'die Haare*', tooth: 'der Zahn', head: 'der Kopf', finger: 'der Finger', knee: 'das Knie', belly: 'der Bauch',
  shirt: 'das T-Shirt', trousers: 'die Hose', dress: 'das Kleid', hat: 'der Hut', socks: 'die Socken*', jacket: 'die Jacke', scarf: 'der Schal', gloves: 'die Handschuhe*', glasses: 'die Brille',
  cap: 'die Mütze', pajamas: 'der Schlafanzug', raincoat: 'der Regenmantel',
  mom: ['die Mama', 'Das ist meine Mama.'], dad: ['der Papa', 'Das ist mein Papa.'], grandma: ['die Oma', 'Das ist meine Oma.'], grandpa: ['der Opa', 'Das ist mein Opa.'],
  baby: ['das Baby', 'Das ist das Baby.'], brother: ['der Bruder', 'Das ist mein Bruder.'], sister: ['die Schwester', 'Das ist meine Schwester.'], boy: 'der Junge', girl: 'das Mädchen',
  friends: ['die Freunde', 'Das sind meine Freunde.'], family: ['die Familie', 'Das ist meine Familie.'], uncle: ['der Onkel', 'Das ist mein Onkel.'],
  bread: 'das Brot~', cheese: 'der Käse~', egg: 'das Ei', milk: 'die Milch~', rice: 'der Reis~', chicken: 'das Hähnchen', juice: 'der Saft~', water: 'das Wasser~', cookie: 'der Keks',
  honey: 'der Honig~', soup: 'die Suppe', pizza: 'die Pizza',
  kiwi: 'die Kiwi', melon: 'die Melone', dates: 'die Datteln*', fig: 'die Feige', apricot: 'die Aprikose', berries: 'die Beeren*', plum: 'die Pflaume', avocado: 'die Avocado',
  cherry: 'die Kirsche', olives: 'die Oliven*', coconut: 'die Kokosnuss', ant: 'die Ameise', fly: 'die Fliege', worm: 'der Wurm',
  doctor: 'der Arzt', teacher: 'der Lehrer', police: 'der Polizist', firefighter: 'der Feuerwehrmann', farmer: 'der Bauer', cook: 'der Koch', driver: 'der Fahrer', pilot: 'der Pilot',
  nurse: 'die Krankenschwester', builder: 'der Bauarbeiter', singer: 'der Sänger', painter: 'der Maler',
  drum: 'die Trommel', guitar: 'die Gitarre', piano: 'das Klavier', violin: 'die Geige', flute: 'die Flöte', trumpet: 'die Trompete', tambourine: 'das Tamburin', oud: 'die Oud',
  microphone: 'das Mikrofon', headphones: 'die Kopfhörer*', 'music note': 'die Note', bell: 'die Glocke',
  pencil: 'der Bleistift', book: 'das Buch', notebook: 'das Heft', scissors: 'die Schere', ruler: 'das Lineal', eraser: 'der Radiergummi', crayons: 'die Buntstifte*', board: 'die Tafel',
  map: 'die Landkarte', glue: 'der Kleber', desk: 'der Schreibtisch', paper: 'das Papier~',
  tomato: 'die Tomate', cucumber: 'die Gurke', potato: 'die Kartoffel', onion: 'die Zwiebel', eggplant: 'die Aubergine', pepper: 'die Paprika', lettuce: 'der Salat', broccoli: 'der Brokkoli',
  peas: 'die Erbsen*', pumpkin: 'der Kürbis', garlic: 'der Knoblauch', mushroom: 'der Pilz',
  rain: ['der Regen', 'Es regnet.'], snow: ['der Schnee', 'Es schneit.'], wind: ['der Wind', 'Der Wind weht.'], thunder: ['der Donner', 'Hörst du den Donner?'], lightning: 'der Blitz',
  umbrella: 'der Regenschirm', snowflake: 'die Schneeflocke', flower: 'die Blume', leaves: 'die Blätter*', hot: ['heiß', 'Es ist heiß.'], cold: ['kalt', 'Es ist kalt.'], mountain: 'der Berg',
  banana: 'die Banane', apple: 'der Apfel', fish: 'der Fisch', sun: 'die Sonne', rose: 'die Rose', pomegranate: 'der Granatapfel', corn: 'der Mais~', rocket: 'die Rakete', plane: 'das Flugzeug',
  envelope: 'der Briefumschlag', grapes: 'die Trauben*', dove: 'die Friedenstaube', snake: 'die Schlange', pig: 'das Schwein', jellyfish: 'die Qualle', seahorse: 'das Seepferdchen',
  snowman: 'der Schneemann', tent: 'das Zelt', palm: 'die Palme', cactus: 'der Kaktus', scorpion: 'der Skorpion', lizard: 'die Eidechse', balloon: 'der Luftballon', jeep: 'der Jeep',
  castle: 'die Burg', shell: 'die Muschel', lighthouse: 'der Leuchtturm', bed: 'das Bett', toothbrush: 'die Zahnbürste', sink: 'das Waschbecken', towel: 'das Handtuch', backpack: 'der Rucksack',
  shoes: 'die Schuhe*', wardrobe: 'der Kleiderschrank', table: 'der Tisch', broom: 'der Besen', clock: 'die Uhr', swing: 'die Schaukel', bike: 'das Fahrrad', tree: 'der Baum',
  school: 'die Schule', hospital: 'das Krankenhaus', light: 'das Licht', fountain: 'der Brunnen', skyscraper: 'das Hochhaus', king: 'der König', queen: 'die Königin', dragon: 'der Drache',
  knight: 'der Ritter', wizard: 'der Zauberer', chest: 'die Schatztruhe', alien: 'der Außerirdische', robot: 'der Roboter', moon: 'der Mond', 'ringed planet': 'der Ringplanet',
  balloons: 'die Luftballons*', cloud: 'die Wolke', candy: 'das Bonbon', cupcake: 'der Cupcake',
  carrot: 'die Karotte', grass: 'das Gras~', bone: 'der Knochen', meat: 'das Fleisch~', hay: 'das Heu~', seeds: 'die Körner*', insect: 'das Insekt',
  strawberry: 'die Erdbeere', 'fire truck': 'das Feuerwehrauto', sunflower: 'die Sonnenblume', leaf: 'das Blatt', 'tang fish': 'der blaue Doktorfisch', bluebird: 'der blaue Vogel',
  'blue planet': 'der blaue Planet', 'cotton candy': 'die Zuckerwatte~', 'pink planet': 'der rosa Planet',
  pear: 'die Birne', watermelon: 'die Wassermelone', 'teddy bear': 'der Teddybär', blocks: 'die Bauklötze*', 'yo-yo': 'das Jo-Jo', car: 'das Auto', bus: 'der Bus', boat: 'das Boot', train: 'der Zug',
};
// the four letters only German has
const EXTRA = [['letters (German only)', 'letter ä', 'Ä', 'Ä wie Äpfel.'], ['letters (German only)', 'letter ö', 'Ö', 'Ö wie Öl.'], ['letters (German only)', 'letter ü', 'Ü', 'Ü wie Überraschung.'], ['letters (German only)', 'letter ß', 'Eszett', 'ß wie Fuß.']];

const NO_ARTICLE_WORDS = /^[a-zäöüß]/; // adjectives, colours, verbs, time words: written lower case, said as they are
const sentenceOf = (word, plural, mass) => {
  const m = /^(der|die|das) (.+)$/.exec(word);
  if (!m) return `Das ist ${word}.`;
  const [, art, rest] = m;
  if (plural) return `Das sind ${rest}.`;
  if (mass) return `Das ist ${rest}.`;
  return `Das ist ${art === 'die' ? 'eine' : 'ein'} ${rest}.`;
};
const hash = (lang, text) => { let h = 0x811c9dc5; for (const ch of new TextEncoder().encode(`${lang}|${text.replace(/\s+/g, ' ').trim()}`)) { h ^= ch; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;

const en = readFileSync(join(ROOT, 'docs', 'ENGLISH_WORDLIST.csv'), 'utf8').replace(/^﻿/, '').trim().split('\n').slice(1);
const out = ['category,english_word,german_word,clip1_word_normal,clip2_same_word_READ_SLOWLY,clip3_sentence,file1_word,file2_slow,file3_sentence'];
const missing = [];
const push = (cat, e, de, sen) => out.push([cat, e, de, de, de, sen, hash('de', de) + '.mp3', hash('de', de) + '_slow.mp3', hash('de', sen) + '.mp3'].map(q).join(','));
let n = 0;
for (const line of en) {
  const cells = [...line.matchAll(/"((?:[^"]|"")*)"/g)].map((m) => m[1].replace(/""/g, '"'));
  const cat = cells[0]; const e = cells[1];
  const v = DE[e];
  if (v === undefined) { missing.push(e); continue; }
  let word, sen;
  if (Array.isArray(v)) { [word, sen] = v; }
  else {
    const plural = v.endsWith('*'); const mass = v.endsWith('~');
    word = v.replace(/[*~]$/, '');
    sen = NO_ARTICLE_WORDS.test(word) && !/^(der|die|das) /.test(word) ? `Das ist ${word}.` : sentenceOf(word, plural, mass);
  }
  push(cat, e, word, sen); n++;
}
for (const [cat, e, w, s] of EXTRA) { push(cat, e, w, s); n++; }
writeFileSync(join(ROOT, 'docs', 'GERMAN_WORDLIST.csv'), '﻿' + out.join('\n') + '\n');
console.log(`${n} German words -> ${n * 3} clips` + (missing.length ? `; MISSING: ${missing.join(', ')}` : ''));
