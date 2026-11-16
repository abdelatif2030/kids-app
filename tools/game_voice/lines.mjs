// Lists every sentence the rebuilt learning games can say, with its clip id (the same id the games compute).
//   node tools/game_voice/lines.mjs
// Writes assets/games/learn_voice/lines.json and docs/GAME_VOICE_LINES.csv (id, language, file, text).
// Sentences come from each game's TEXT table (read from the source) and from the game rules (things to sort, treasure
// clues, steps of the day, counting, where the ball is).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SRC = join(ROOT, 'game_src', 'learn_games', 'src');
const imp = (p) => import(pathToFileURL(join(SRC, p)).href);
const { clipId, spoken } = await imp('kit/voice.js');

const lines = new Map();
function add(text, lang) {
  const t = spoken(text);
  if (!t) return;
  const id = clipId(t, lang);
  lines.set(`${lang}/${id}`, { id, lang, text: t });
}
const both = (ar, en) => { add(ar, 'ar'); add(en, 'en'); };

// 1. every TEXT table: key: ['arabic', 'english']
const PAIR = /\w+:\s*\[\s*(['"])((?:\\.|(?!\1).)*)\1\s*,\s*(['"])((?:\\.|(?!\3).)*)\3\s*\]/g;
const un = (s) => s.replace(/\\(['"\\])/g, '$1');
const skipGames = new Set(['maze']); // music only
for (const dir of readdirSync(SRC)) {
  if (dir === 'kit' || skipGames.has(dir)) continue;
  const f = join(SRC, dir, 'main.js');
  if (!existsSync(f)) continue;
  const src = readFileSync(f, 'utf8');
  const a = src.indexOf('const TEXT = {');
  if (a < 0) continue;
  const block = src.slice(a, src.indexOf('\n};', a));
  for (const m of block.matchAll(PAIR)) both(un(m[2]), un(m[4]));
}
// the end card of every game (kit)
{
  const src = readFileSync(join(SRC, 'kit', 'shell.js'), 'utf8');
  const a = src.indexOf('const KIT = {');
  const kit = {};
  for (const m of src.slice(a, src.indexOf('\n};', a)).matchAll(/(\w+):\s*\[\s*(['"])((?:\\.|(?!\2).)*)\2\s*,\s*(['"])((?:\\.|(?!\4).)*)\4\s*\]/g)) kit[m[1]] = [un(m[3]), un(m[5])];
  for (const g of ['m', 'f']) {
    both(`${kit[`greatSay_${g}`][0]} ${kit[`newStarSay_${g}`][0]}`, `${kit[`greatSay_${g}`][1]} ${kit[`newStarSay_${g}`][1]}`);
    both(kit[`doneAgain_${g}`][0], kit[`doneAgain_${g}`][1]);
  }
}

// 2. sentences built by the rules
const { ITEM_WORDS } = await imp('kit/words.js');
const sort = await imp('sort/sim.js');
for (const g of sort.GROUP_IDS) {
  for (const it of sort.GROUPS[g].items) {
    const w = ITEM_WORDS[it];
    both(w[0], w[1]);
    both(`${w[2]} ${sort.GROUPS[g].ar}!`, `${w[1]}: ${sort.GROUPS[g].en}!`);
  }
}
const tr = await imp('treasure/sim.js');
for (const kind of tr.KINDS) for (const id of tr.MARKS) { const c = { kind, mark: { id, cell: 0 } }; both(tr.clueText(c, false), tr.clueText(c, true)); }
const day = await imp('day/sim.js');
for (const s of day.STEPS) both(s.ar, s.en);
const COUNT = { ar: ['واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة'], en: ['one', 'two', 'three', 'four', 'five', 'six'] };
for (let n = 1; n <= 6; n++) both(COUNT.ar.slice(0, n).join('، '), COUNT.en.slice(0, n).join(', '));
const { NUMBERS } = await imp('kit/words.js');
for (const [ar, en] of NUMBERS) both(ar, en);
const pat = await imp('pattern/sim.js');
for (const b of pat.BEADS) both(b.ar, b.en);
const ball = await imp('ball/sim.js');
for (const s of ball.SPOTS) both(ball.sentence(s.id, false), ball.sentence(s.id, true));

// the four games built last (Arabic only: the owner asked for the games in Arabic)
const letters = await imp('letters/sim.js');
for (const l of letters.LETTERS) { add(letters.question(l), 'ar'); add(letters.reward(l), 'ar'); }
const counting = await imp('counting/sim.js');
for (let n = 1; n <= 10; n++) add(counting.askText(n), 'ar');
add(counting.COUNT_Q, 'ar');
const shapes = await imp('shapes/sim.js');
for (const sh of shapes.SHAPES) {
  add(shapes.question(sh, null), 'ar');
  add(shapes.reward(sh, null), 'ar');
  for (const c of shapes.COLORS) { add(shapes.question(sh, c), 'ar'); add(shapes.reward(sh, c), 'ar'); }
}
const animals = await imp('animals/sim.js');
for (const a of animals.ANIMALS) { add(animals.question(a), 'ar'); add(animals.reward(a), 'ar'); }

// the learning world's levels: words, first letter, numbers, order of the alphabet, habits (Mama and Baba), encouragements
const lv = await imp('letters/levels.js');
for (const l of letters.LETTERS) { add(lv.wordQuestion(l), 'ar'); add(lv.firstQuestion(l), 'ar'); }
for (const id of lv.ALPHABET.slice(0, -1)) add(lv.nextQuestion(letters.letterById(id)), 'ar');
for (let n = 1; n <= 20; n++) add(lv.numberQuestion(n), 'ar');
for (const hb of lv.HABITS) add(hb.text, 'ar');
for (const tab of Object.values(lv.PICKS)) for (const it of tab.items) add(tab.prompt(it), 'ar');
for (const c of [...lv.CHEERS_M, ...lv.CHEERS_F]) add(c, 'ar');

const all0 = [...lines.values()];
const all = all0.sort((a, b) => a.lang.localeCompare(b.lang) || a.text.localeCompare(b.text));
const out = join(ROOT, 'assets', 'games', 'learn_voice');
if (process.argv.includes('--check')) {
  // is the saved list current? (used by the tests: a new word in a game must be added to the list, then given a voice)
  const saved = existsSync(join(out, 'lines.json')) ? readFileSync(join(out, 'lines.json'), 'utf8') : '';
  if (saved !== JSON.stringify(all, null, 1) + String.fromCharCode(10)) { console.error('lines.json is out of date: run node tools/game_voice/lines.mjs'); process.exit(1); }
  console.log(`lines.json is current (${all.length} sentences)`);
  process.exit(0);
}
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'lines.json'), JSON.stringify(all, null, 1) + '\n');
writeFileSync(join(ROOT, 'docs', 'GAME_VOICE_LINES.csv'), '\ufeffid,language,file,text\n' + all.map((l) => `${l.id},${l.lang},${l.lang}/${l.id}.mp3,"${l.text.replace(/"/g, '""')}"`).join('\n') + '\n');
const chars = (lang) => all.filter((l) => l.lang === lang).reduce((s, l) => s + l.text.length, 0);
console.log(`${all.filter((l) => l.lang === 'ar').length} Arabic lines (${chars('ar')} characters), ${all.filter((l) => l.lang === 'en').length} English lines (${chars('en')} characters)`);
