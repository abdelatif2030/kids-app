// More questions per level (2026-11-19, owner request: every level offers at least 100 DIFFERENT things to learn).
// The base rules in levels.js make a game from the level's own bank of pictures, numbers, letters... Once a child has met something, the same rules
// would show it again. This file holds the OTHER questions of each level, built from the same pictures and the same words:
//   first letter of a picture, counting what the level is about («كام سمكة؟»), a letter with a vowel mark or in its start / middle / end form,
//   the letter before, the missing letter, a shape in a colour, the colour of a thing, a thing of a colour, mixing and rainbow colours, adding apples,
//   what an animal says / where it lives.
// An item is { key, tier, say: [sentences], about?, make(c) }. `key` names the thing to learn (the child's memory is kept per key), `tier` 0-2 says how
// hard it is (the age only decides what comes first), `say` lists every sentence the item speaks: the game asks an item only when ALL of them have a
// recorded clip (so a question is never silent) and tools/game_voice/lines.mjs reads the same list. `make(c)` builds the round; c = { r, nOpt, age, seed, pickLow }.
import { LETTERS, letterById } from './sim.js';
import { optionsFor } from '../counting/sim.js';
import { ANIMALS, PLACES, SOUNDS, HOMES, soundQ, soundSay, homeQ, homeSay, animalById, hasSound, homeOf } from '../animals/sim.js';
import { COLORS, COLOR_THINGS, colorOf, colorChoices, findThingQ } from './colors.js';
import { COLORABLE, SHAPE_COLORS, shapeColorOf, findShapeQ, shapeSay, SHAPES_ALL } from './shapes_all.js';
import { TOTAL_Q, prevQ, mixQ, mixSay } from './extras.js';

const T = (id) => ({ id, kind: 'thing', thing: id });
const N = (n) => ({ id: `n${n}`, kind: 'number', n });
const item = (key, tier, say, make, about = null) => ({ key, tier, say, make, about });
const shuffle = (arr, r) => [...arr].sort(() => r() - 0.5);

// ---- counting what a level is about --------------------------------------------------------------------------------------------------------
/** [picture, the singular noun after «كام»]: «كام سمكة؟». Pictures the app already has. */
export const COUNT_OBJECTS = {
  counting: [['duck', 'بطة'], ['ball', 'كورة'], ['fish', 'سمكة'], ['cat', 'قطة'], ['rose', 'وردة'], ['bee', 'نحلة'], ['butterfly', 'فراشة'], ['bunny', 'أرنب'], ['frog', 'ضفدع'], ['hen', 'دجاجة'], ['sheep', 'خروف'], ['horse', 'حصان']],
  vehicles: [['car', 'عربية'], ['bus', 'أتوبيس'], ['boat', 'مركب'], ['plane', 'طيارة'], ['train', 'قطر'], ['h_bike', 'عجلة']],
  t_bugs: [['i_ant', 'نملة'], ['butterfly_n', 'فراشة'], ['bee_n', 'نحلة'], ['i_snail', 'حلزونة'], ['i_sparrow', 'عصفورة'], ['i_worm', 'دودة']],
  t_weather: [['t_flower', 'زهرة'], ['t_umbrella', 'شمسية'], ['t_flake', 'ندفة'], ['t_leaves', 'ورقة']],
  t_food: [['o_egg', 'بيضة'], ['o_cookie', 'بسكوتة'], ['o_pizza', 'بيتزا'], ['r_cupcake', 'كعكة']],
  t_space: [['s_star', 'نجمة'], ['s_moon', 'قمر'], ['s_alien', 'فضائي'], ['s_robot', 'روبوت']],
  t_sea: [['u_star', 'نجمة بحر'], ['u_turtle', 'سلحفاة'], ['u_crab', 'سرطان'], ['b_shell', 'صدفة']],
};
const countItem = (thing, noun, n, maxN) => item(`co:${thing}:${n}`, n <= 3 ? 0 : n <= 6 ? 1 : 2, [`كام ${noun}؟`], (c) => ({
  prompt: `كام ${noun}؟`, answer: `n${n}`, show: { type: 'apples', n, thing }, countAloud: n, options: optionsFor(c.age, n, c.seed + n * 31, Math.max(maxN, n + 2)).map(N),
}));

// ---- the rainbow, more mixes, colours of things ---------------------------------------------------------------------------------------------
export const RAINBOW = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
export const rainbowQ = (a) => `إيه اللون اللي بعد ${a.the} في قوس قزح؟`;
export const RAINBOW_FIRST_Q = 'إيه أول لون في قوس قزح؟';
/** Mixes that the first mixing round does not ask: [a, b, result]. They are asked only through this file (their sentences are recorded first). */
export const MIXES_MORE = [['white', 'black', 'gray'], ['white', 'blue', 'skyblue'], ['red', 'green', 'brown']];
/** What a thing is called in «إيه لون ...؟». Things whose NAME says the colour, or whose real colour varies (grapes, olives, berries), are not asked this way. */
export const COLOR_QUESTION_THINGS = {
  apple: 'التفاحة', v_tomato: 'الطماطم', strawberry: 'الفراولة', q_cherry: 'الكرز', firetruck: 'عربية المطافي', ladybug: 'الدعسوقة',
  banana: 'الموزة', lemon: 'الليمونة', chick: 'الكتكوت', r_sun: 'الشمس', sunflower_1: 'زهرة عباد الشمس',
  orange: 'البرتقالة', carrot: 'الجزرة', v_pumpkin: 'القرع',
  j_leaf: 'ورقة الشجر', v_lettuce: 'الخس', v_broccoli: 'البروكلي', v_cucumber: 'الخيار', frog: 'الضفدع', d_cactus: 'الصبار', q_avocado: 'الأفوكادو', v_peas: 'البسلة',
  v_eggplant: 'الباذنجان', q_plum: 'البرقوق', i_flamingo: 'الفلامنجو', r_cotton: 'غزل البنات',
  v_potato: 'البطاطس', o_cookie: 'البسكوت', w_bear: 'الدب القطبي', r_cloud: 'السحابة', o_milk: 'اللبن', w_snowman: 'رجل الثلج', j_elephant: 'الفيل', w_seal: 'الفقمة',
};
export const colorQ = (the) => `إيه لون ${the}؟`;

// ---- the builder ----------------------------------------------------------------------------------------------------------------------------
/** env comes from levels.js (it owns PICKS, WORD_ITEMS...): { PICKS, WORD_ITEMS, firstQ, wordReward, ALPHABET, HARAKAT, FORMS, CONNECTING, harakaQ, formQ, TOPIC_TABLES }. */
export function buildBanks(env) {
  const { PICKS, WORD_ITEMS, firstQ, wordReward, ALPHABET, HARAKAT, FORMS, CONNECTING, harakaQ, formQ, TOPIC_TABLES } = env;
  const banks = {};
  const add = (level, list) => { banks[level] = [...(banks[level] || []), ...list]; };

  // first letter of the pictures of a level (the sentences «إيه الحرف الأول في كلمة ...؟» and «الباء زي بطة» are recorded for every picture-word)
  const tierW = (w) => (w.age <= 3 ? 0 : w.age <= 5 ? 1 : 2);
  for (const table of TOPIC_TABLES) {
    const list = [];
    for (const it of PICKS[table].items) {
      const w = WORD_ITEMS.find((x) => x.thing === it.thing);
      if (!w) continue;
      list.push(item(`fl:${w.thing}`, tierW(w), [firstQ(w), wordReward(w)], (c) => {
        const near = WORD_ITEMS.filter((x) => tierW(x) <= tierW(w));
        const others = c.pickLow([...new Set(near.map((x) => x.letter))].filter((x) => x !== w.letter), c.nOpt - 1);
        return { prompt: firstQ(w), answer: w.letter, show: { type: 'thing', thing: w.thing }, reward: wordReward(w), options: [w.letter, ...others].sort(() => c.r() - 0.5).map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch })) };
      }, `tp:${table}:${it.id}`));
    }
    add(table, list);
  }

  // counting what the level is about
  for (const [level, objs] of Object.entries(COUNT_OBJECTS)) {
    const maxN = level === 'counting' ? 10 : 8;
    add(level, objs.flatMap(([thing, noun]) => Array.from({ length: maxN }, (_, k) => countItem(thing, noun, k + 1, maxN))));
  }
  // adding: «كام فاكهة بالكل؟» with apples and oranges (every pair up to ten)
  const sums = [];
  for (let a = 1; a <= 9; a++) for (let b = 1; a + b <= 10; b++) {
    sums.push(item(`ad:${a}+${b}`, a + b <= 6 ? 1 : 2, [TOTAL_Q], (c) => ({ prompt: TOTAL_Q, answer: `n${a + b}`, show: { type: 'mixed', a, b }, countAloud: a + b, options: optionsFor(c.age, a + b, c.seed + (a * 7 + b) * 13, 20).map(N) })));
  }
  add('counting', sums);

  // the alphabet in order: the letter before, and the missing letter of three
  const ab = ALPHABET;
  const letters = ab.map(letterById);
  const letterOpts = (c, ans, k, not = []) => {
    const reach = Math.max(k < 8 ? 8 : k < 16 ? 16 : 28, k + 3);
    const others = c.pickLow(ab.slice(0, reach).filter((x) => x !== ans && !not.includes(x)), c.nOpt - 1);
    return [ans, ...others].sort(() => c.r() - 0.5).map((x) => ({ id: x, kind: 'letter', ch: letterById(x).ch }));
  };
  const order = [];
  for (let k = 1; k < ab.length; k++) {
    order.push(item(`lp:${ab[k]}`, k < 8 ? 1 : 2, [prevQ(letters[k]), `${letters[k - 1].the} زي ${letters[k - 1].word}`], (c) => ({ prompt: prevQ(letters[k]), answer: ab[k - 1], from: ab[k], show: { type: 'letter', ch: letters[k].ch }, reward: `${letters[k - 1].the} زي ${letters[k - 1].word}`, options: letterOpts(c, ab[k - 1], k) })));
  }
  for (let s = 0; s + 2 < ab.length; s++) for (let g = 0; g < 3; g++) {
    const seq = [ab[s], ab[s + 1], ab[s + 2]];
    const text = seq.map((x, i) => (i === g ? '؟' : letterById(x).ch)).join('  ');
    order.push(item(`ms:${s}:${g}`, s < 6 ? 1 : 2, [MISSING_Q, `${letterById(seq[g]).the} زي ${letterById(seq[g]).word}`], (c) => ({ prompt: MISSING_Q, answer: seq[g], show: { type: 'letter', ch: text }, reward: `${letterById(seq[g]).the} زي ${letterById(seq[g]).word}`, options: letterOpts(c, seq[g], s + 2, seq) })));
  }
  add('order', order);

  // letters with a vowel mark and in the forms of a word (the sentences «فين حرف الباء اللي عليه فتحة؟» ... are recorded)
  const lets = [];
  for (const l of LETTERS) {
    const idx = ab.indexOf(l.id);
    for (const h of HARAKAT.slice(0, 3)) {
      lets.push(item(`hk:${l.id}:${h.id}`, idx < 8 ? 1 : 2, [harakaQ(l, h)], (c) => {
        const marks = c.nOpt >= 4 ? HARAKAT : HARAKAT.slice(0, 3);
        return { prompt: harakaQ(l, h), answer: `h${h.id}`, options: marks.map((m) => ({ id: `h${m.id}`, kind: 'letter', ch: l.ch + m.mark })).sort(() => c.r() - 0.5) };
      }));
    }
    if (CONNECTING.has(l.id)) for (const f of FORMS) {
      lets.push(item(`fm:${l.id}:${f.id}`, 2, [formQ(l, f)], (c) => {
        const opts = FORMS.map((x) => ({ id: x.id, kind: 'letter', ch: x.make(l.ch) }));
        if (c.nOpt >= 4) opts.push({ id: 'fa', kind: 'letter', ch: l.ch });
        return { prompt: formQ(l, f), answer: f.id, options: opts.sort(() => c.r() - 0.5) };
      }));
    }
  }
  add('letters', lets);

  // a shape in a colour (the 14 colourable shapes x 7 colours; the sentences are recorded)
  const shapeTier = { A: 0, B: 1, C: 2, D: 2 };
  const shapes = [];
  for (const sh of COLORABLE) for (const col of SHAPE_COLORS) {
    shapes.push(item(`sc:${sh.id}:${col.id}`, shapeTier[sh.tier] + (sh.tier === 'A' ? 1 : 0), [findShapeQ(sh, col), shapeSay(sh, col)], (c) => {
      const tiles = [{ shape: sh, color: col.id }];
      const otherCols = shuffle(SHAPE_COLORS.filter((x) => x.id !== col.id), c.r);
      tiles.push({ shape: sh, color: otherCols[0].id });
      const sameCol = c.pickLow(COLORABLE.filter((x) => x.id !== sh.id), 1)[0];
      tiles.push({ shape: sameCol, color: col.id });
      while (tiles.length < c.nOpt) {
        const x = c.pickLow(COLORABLE.filter((y) => y.id !== sh.id && y.id !== sameCol.id && !tiles.some((t) => t.shape.id === y.id)), 1)[0];
        const k = otherCols[1 + (tiles.length % (otherCols.length - 1))];
        if (x) tiles.push({ shape: x, color: k.id });
        else break;
      }
      return { prompt: findShapeQ(sh, col), answer: `${sh.id}-${col.id}`, shapeId: sh.id, reward: shapeSay(sh, col), options: shuffle(tiles, c.r).map((t) => ({ id: `${t.shape.id}-${t.color}`, kind: 'shape', shape: t.shape.id, color: t.color })) };
    }));
  }
  add('shapes', shapes);

  // colours: a thing of a colour, the colour of a thing, mixes, the rainbow
  const colors = [];
  const tierC = (id) => ({ A: 0, B: 1, C: 2 }[colorOf(id).tier]);
  const thingOpts = (c, cid, right) => {
    const others = c.pickLow(Object.keys(COLOR_THINGS).filter((id) => id !== cid && colorOf(id).family !== colorOf(cid).family), c.nOpt - 1).map((id) => COLOR_THINGS[id][Math.floor(c.r() * COLOR_THINGS[id].length)]);
    return [right, ...others].sort(() => c.r() - 0.5).map(T);
  };
  for (const [cid, list] of Object.entries(COLOR_THINGS)) for (const th of list) {
    colors.push(item(`ct:${th}`, tierC(cid), [findThingQ(colorOf(cid))], (c) => ({ prompt: findThingQ(colorOf(cid)), answer: th, colorId: cid, options: thingOpts(c, cid, th) })));
    if (COLOR_QUESTION_THINGS[th]) {
      const q = colorQ(COLOR_QUESTION_THINGS[th]);
      colors.push(item(`wc:${th}`, tierC(cid), [q], (c) => {
        const col = colorOf(cid);
        const opts = colorChoices(col, COLORS, c.nOpt, c.r);
        return { prompt: q, answer: cid, colorId: cid, show: { type: 'thing', thing: th }, options: opts.sort(() => c.r() - 0.5).map((x) => ({ id: x.id, kind: 'color', hex: x.hex, metal: x.metal || 0 })) };
      }));
    }
  }
  for (const [a, b, res] of MIXES_MORE) {
    const [ca, cb, cc] = [colorOf(a), colorOf(b), colorOf(res)];
    colors.push(item(`mx:${a}+${b}`, 2, [mixQ(ca, cb), mixSay(ca, cb, cc)], (c) => ({ prompt: mixQ(ca, cb), answer: res, colorId: res, reward: mixSay(ca, cb, cc), options: colorChoices(cc, COLORS, c.nOpt, c.r).sort(() => c.r() - 0.5).map((x) => ({ id: x.id, kind: 'color', hex: x.hex, metal: x.metal || 0 })) })));
  }
  const rbOpts = (c, res) => colorChoices(colorOf(res), COLORS, c.nOpt, c.r).sort(() => c.r() - 0.5).map((x) => ({ id: x.id, kind: 'color', hex: x.hex, metal: x.metal || 0 }));
  colors.push(item('rb:first', 1, [RAINBOW_FIRST_Q], (c) => ({ prompt: RAINBOW_FIRST_Q, answer: 'red', colorId: 'red', options: rbOpts(c, 'red') })));
  for (let i = 0; i + 1 < RAINBOW.length; i++) {
    const [a, res] = [colorOf(RAINBOW[i]), RAINBOW[i + 1]];
    colors.push(item(`rb:${RAINBOW[i]}`, 2, [rainbowQ(a)], (c) => ({ prompt: rainbowQ(a), answer: res, colorId: res, options: rbOpts(c, res) })));
  }
  add('colors', colors);

  // animals: who says it, where it lives (the sentences are recorded)
  const an = [];
  const tierA = (a) => (a.age <= 4 ? 0 : a.age <= 5 ? 1 : 2);
  for (const a of ANIMALS) {
    if (hasSound(a.id)) {
      const snd = SOUNDS[a.id];
      an.push(item(`as:${a.id}`, tierA(a), [soundQ(snd), soundSay(a)], (c) => {
        const others = c.pickLow(ANIMALS.filter((x) => x.id !== a.id && SOUNDS[x.id] && SOUNDS[x.id].id !== snd.id).map((x) => x.id), c.nOpt - 1);
        return { prompt: soundQ(snd), answer: a.id, animal: a.id, show: null, reward: soundSay(a), options: [a.id, ...others].sort(() => c.r() - 0.5).map((x) => T2(x, animalById(x).thing)) };
      }));
    }
    if (homeOf(a.id)) {
      an.push(item(`ah:${a.id}`, tierA(a) + 1 > 2 ? 2 : tierA(a) + 1, [homeQ(a), homeSay(a)], (c) => {
        const home = homeOf(a.id);
        const others = c.pickLow(Object.keys(PLACES).filter((x) => x !== home), c.nOpt - 1);
        return { prompt: homeQ(a), answer: home, animal: a.id, show: { type: 'thing', thing: a.thing }, reward: homeSay(a), options: [home, ...others].sort(() => c.r() - 0.5).map((x) => T2(x, PLACES[x].thing)) };
      }));
    }
  }
  add('animals', an);
  return banks;
}
const T2 = (id, thing) => ({ id, kind: 'thing', thing });
export const MISSING_Q = 'إيه الحرف الناقص؟';

/** Every sentence the extra questions can say, for the voice list (tools/game_voice/lines.mjs). */
export function allBankSentences(banks) {
  return [...new Set(Object.values(banks).flatMap((l) => l.flatMap((x) => x.say)))];
}
export { SHAPES_ALL, shapeColorOf, HOMES };
