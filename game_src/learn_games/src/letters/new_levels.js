// Five more levels of «عالم رحلتي التعليمي» (2026-11-20, from the teacher / parent review):
//   t_opposites  المتضادات          hot / cold, fast / slow, tall / short, heavy / light, big / small (the SAME picture drawn big and small), inside / outside, day / night, fly / walk
//   t_patterns   الأنماط والتسلسل    what comes next, the missing one, the odd one out (colours, shapes, pictures; AB, AAB, ABB, ABC, AABB)
//   t_senses     الحواس والمشاعر     the five senses, faces for feelings (calm, kind answers, no diagnosis), whom we go to
//   t_manners    الأدب               thank you, please, sorry, greetings, sharing, waiting for a turn (the child HEARS every choice read aloud)
//   t_safety     الأمان              the road, hot things, strangers (tell a grown-up), medicine, water, who helps us
// Like extra_bank.js an item is { key, tier, say: [every sentence it speaks], make(c) } with c = { r, nOpt, age, seed, pickLow }. `key` names the thing to learn
// (the child's memory is kept per key); an item is asked only when ALL of its sentences have a recorded clip (a question is never silent).
// A round may carry `read`: one sentence per option, in the order of the options; the game says the question and then each choice (the choice lights up
// while it is said), so a child who cannot read can still choose between «شكراً» and «آسف». Wrong answers never punish.
import { colorOf } from './colors.js';
import { rng } from '../maze/sim.js';

const T = (thing, extra = {}) => ({ id: thing, kind: 'thing', thing, ...extra });
const item = (key, tier, say, make) => ({ key, tier, say: [...new Set(say.filter(Boolean))], make });
const shuffle = (arr, r) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

export const NEW_LEVELS = [
  { id: 't_opposites', mode: 'items', ar: 'المتضادات', emoji: '↔️', skill: 'vocab', topic: true, world: 'farm' },
  { id: 't_patterns', mode: 'items', ar: 'الأنماط والتسلسل', emoji: '🔁', skill: 'sequence', topic: true, world: 'rainbow' },
  { id: 't_senses', mode: 'items', ar: 'الحواس والمشاعر', emoji: '👂', skill: 'feelings', topic: true, world: 'meadow' },
  { id: 't_manners', mode: 'items', ar: 'الأدب والأخلاق', emoji: '🙏', skill: 'listening', topic: true, world: 'home' },
  { id: 't_safety', mode: 'items', ar: 'الأمان', emoji: '🚦', skill: 'listening', topic: true, world: 'city' },
];

// ====================================================================================================================================================
// 1. Opposites
// ====================================================================================================================================================
/** Two opposite sides; each side has a question and the pictures that fit it. The wrong choices always come from the OTHER side. */
export const OPPOSITES = [
  { tier: 0, a: { n: 'hot', q: 'فين الحاجة السخنة؟', list: ['sun', 'r_sun', 'o_soup', 't_hot', 'o_pizza', 'o_chicken'] },
    b: { n: 'cold', q: 'فين الحاجة الباردة؟', list: ['t_snow', 't_cold', 'w_snowman', 'w_iceblock', 'w_igloo', 't_flake', 'w_penguin', 'r_icecream'] } },
  { tier: 0, a: { n: 'fly', q: 'فين اللي بيطير؟', list: ['plane', 'butterfly', 'bee', 'c_heli', 'helicopter', 'rocket', 'i_eagle', 'd_hawk', 'd_balloon', 'dove', 'crow', 'parrot', 'dragonfly', 'i_sparrow', 'r_kite', 's_ufo'] },
    b: { n: 'walk', q: 'فين اللي بيمشي على الأرض؟', list: ['cat', 'dog', 'cow', 'horse', 'sheep', 'pig', 'elephant', 'giraffe', 'lion', 'tiger', 'camel', 'car', 'bus', 'j_gorilla', 'zebra', 'rabbit'] } },
  { tier: 1, a: { n: 'fast', q: 'فين الحاجة السريعة؟', list: ['cheetah', 'plane', 'helicopter', 'rocket', 'train', 'c_police', 'horse', 'c_taxi', 'firetruck', 'dragonfly'] },
    b: { n: 'slow', q: 'فين الحاجة البطيئة؟', list: ['tortoise', 'turtle', 'i_snail', 'caterpillar', 'i_worm', 'u_turtle', 'b_turtle'] } },
  { tier: 1, a: { n: 'inside', q: 'فين اللي بنلاقيه جوه البيت؟', list: ['h_bed', 'h_table', 'h_wardrobe', 'h_clock', 'h_sink', 'h_towel', 'h_toothbrush', 'h_toybox', 'h_broom'] },
    b: { n: 'outside', q: 'فين اللي بنلاقيه بره البيت؟', list: ['h_tree', 'h_swing', 'h_fence', 'h_tulips', 'h_birdbath', 'h_gnome', 'h_mailbox', 'h_doghouse', 'h_bike'] } },
  { tier: 1, a: { n: 'day', q: 'فين اللي بنشوفه بالنهار؟', list: ['sun', 'r_sun', 'r_rainbow', 'butterfly', 'bee', 'sunflower_1', 'r_kite'] },
    b: { n: 'night', q: 'فين اللي بنشوفه بالليل؟', list: ['s_moon', 'crescent', 's_star', 'i_bat', 'owl', 's_comet', 'w_owl'] } },
  { tier: 1, a: { n: 'tall', q: 'فين الحاجة الطويلة؟', list: ['giraffe', 'j_giraffe', 'c_skyscraper', 'd_palm', 'h_tree', 'k_tower', 'w_pine1', 'i_ostrich', 'i_flamingo'] },
    b: { n: 'short', q: 'فين الحاجة القصيرة؟', list: ['rabbit', 'frog', 'i_snail', 'j_mushroom', 'h_gnome', 'chick', 'cat', 'i_ant', 'caterpillar', 'ladybug', 'i_worm'] } },
  { tier: 2, a: { n: 'heavy', q: 'فين الحاجة التقيلة؟', list: ['elephant', 'u_whale', 'c_bulldozer', 'h_wardrobe', 'd_pyramid', 'bus', 'c_citybus', 'train', 'j_gorilla', 'j_elephant'] },
    b: { n: 'light', q: 'فين الحاجة الخفيفة؟', list: ['butterfly', 'bee', 'r_balloons', 'e_paper', 'r_cotton', 't_flake', 't_leaves', 'chick', 'i_sparrow', 'r_cloud'] } },
];
export const BIG_Q = 'فين الحاجة الكبيرة؟';
export const SMALL_Q = 'فين الحاجة الصغيرة؟';
export const BIGGEST_Q = 'فين الأكبر؟';
export const SMALLEST_Q = 'فين الأصغر؟';
/** Things of about the same size in real life: «the big one» among DIFFERENT pictures is then only a matter of how they are drawn. */
export const SIZE_MIXED = ['apple', 'banana', 'orange', 'strawberry', 'pear', 'grapes', 'ball', 'teddy', 'cat', 'duck', 'fish', 'frog', 'rabbit', 'heart', 'rose', 'carrot', 'lemon', 'corn', 'hen', 'chick', 'e_book', 'e_pencil', 'h_clock', 'butterfly'];
/** Any picture can be drawn in three or four sizes: «the biggest one». */
export const SIZE_SAME = [...SIZE_MIXED, 'watermelon', 'dog', 'cow', 'horse', 'sheep', 'pig', 'car', 'bus', 'boat', 'plane', 'train', 'h_bed', 'h_tree', 'lion', 'giraffe', 'bee'];

const CC = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];
/** Pictures of concepts (kit/concepts3d.js): where the ball is, what the glass holds, the door, the arrow, the plate with more or fewer apples. */
export const REL_Q = { on: 'فين الكورة فوق الترابيزة؟', under: 'فين الكورة تحت الترابيزة؟', beside: 'فين الكورة جنب الترابيزة؟' };
export const BOX_Q = { in: 'فين الكورة جوه الصندوق؟', out: 'فين الكورة بره الصندوق؟' };
export const CUP_Q = { full: 'فين الكوباية المليانة؟', half: 'فين الكوباية اللي نصها مليان؟', empty: 'فين الكوباية الفاضية؟' };
export const DOOR_Q = { open: 'فين الباب المفتوح؟', closed: 'فين الباب المقفول؟' };
export const ARROW_Q = { up: 'فين السهم اللي بيشاور لفوق؟', down: 'فين السهم اللي بيشاور لتحت؟', right: 'فين السهم اللي بيشاور لليمين؟', left: 'فين السهم اللي بيشاور للشمال؟' };
export const MORE_Q = 'فين الطبق اللي فيه أكتر؟';
export const FEWER_Q = 'فين الطبق اللي فيه أقل؟';
const mk = (id) => ({ id, kind: 'thing', thing: id });

function conceptItems() {
  const out = [];
  for (const col of CC) {
    for (const [k, q] of Object.entries(REL_Q)) out.push(item(`op:rel:${k}:${col}`, 1, [q], (c) => ({ prompt: q, answer: `rel_${k}_${col}`, options: Object.keys(REL_Q).map((x) => mk(`rel_${x}_${col}`)).sort(() => c.r() - 0.5) })));
    for (const [k, q] of Object.entries(BOX_Q)) out.push(item(`op:box:${k}:${col}`, 1, [q], (c) => {
      const other = k === 'in' ? 'out' : 'in';
      const cols = c.pickLow(CC.filter((x) => x !== col), c.nOpt - 1);
      return { prompt: q, answer: `box_${k}_${col}`, options: [mk(`box_${k}_${col}`), ...cols.map((x) => mk(`box_${other}_${x}`))].sort(() => c.r() - 0.5) };
    }));
    for (const [k, q] of Object.entries(CUP_Q)) out.push(item(`op:cup:${k}:${col}`, 0, [q], (c) => ({ prompt: q, answer: `cup_${k}_${col}`, options: Object.keys(CUP_Q).map((x) => mk(`cup_${x}_${col}`)).sort(() => c.r() - 0.5) })));
    for (const [k, q] of Object.entries(DOOR_Q)) out.push(item(`op:door:${k}:${col}`, 0, [q], (c) => {
      const other = k === 'open' ? 'closed' : 'open';
      const cols = c.pickLow(CC.filter((x) => x !== col), c.nOpt - 1);
      return { prompt: q, answer: `door_${k}_${col}`, options: [mk(`door_${k}_${col}`), ...cols.map((x) => mk(`door_${other}_${x}`))].sort(() => c.r() - 0.5) };
    }));
    for (const [k, q] of Object.entries(ARROW_Q)) out.push(item(`op:arrow:${k}:${col}`, 1, [q], (c) => {
      const dirs = c.pickLow(Object.keys(ARROW_Q).filter((x) => x !== k), c.nOpt - 1);
      return { prompt: q, answer: `arrow_${k}_${col}`, options: [k, ...dirs].sort(() => c.r() - 0.5).map((x) => mk(`arrow_${x}_${col}`)) };
    }));
  }
  // more / fewer: plates with 1-9 apples; the counts of one round are all different
  const counts = tuples([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 40, hash('plates'));
  for (const tri of counts) for (const [kind, q] of [['more', MORE_Q], ['fewer', FEWER_Q]]) {
    out.push(item(`op:plates:${kind}:${tri.join('-')}`, 1, [q], (c) => {
      const extra = c.pickLow([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => !tri.includes(x) && (kind === 'more' ? x < Math.max(...tri) : x > Math.min(...tri))), 1)[0];
      const set = c.nOpt >= 4 && extra != null ? [...tri, extra] : [...tri];
      const right = kind === 'more' ? Math.max(...set) : Math.min(...set);
      return { prompt: q, answer: `plate_${right}`, options: set.sort(() => c.r() - 0.5).map((n) => mk(`plate_${n}`)) };
    }));
  }
  return out;
}

function opposites() {
  const out = [];
  for (const p of OPPOSITES) {
    for (const [x, y] of [[p.a, p.b], [p.b, p.a]]) {
      for (const th of x.list) {
        out.push(item(`op:${x.n}:${th}`, p.tier, [x.q], (c) => {
          const others = c.pickLow(y.list.filter((t) => t !== th && !x.list.includes(t)), c.nOpt - 1);
          return { prompt: x.q, answer: th, options: [th, ...others].sort(() => c.r() - 0.5).map((t) => T(t)) };
        }));
      }
    }
  }
  // the big one / the small one among different pictures (one picture is drawn in another size than the rest)
  for (const th of SIZE_MIXED) {
    out.push(item(`op:big:${th}`, 0, [BIG_Q], (c) => {
      const others = c.pickLow(SIZE_MIXED.filter((t) => t !== th), c.nOpt - 1);
      return { prompt: BIG_Q, answer: `${th}:big`, options: [T(th, { id: `${th}:big`, scale: 1 }), ...others.map((t) => T(t, { id: `${t}:small`, scale: 0.5 }))].sort(() => c.r() - 0.5) };
    }));
    out.push(item(`op:small:${th}`, 0, [SMALL_Q], (c) => {
      const others = c.pickLow(SIZE_MIXED.filter((t) => t !== th), c.nOpt - 1);
      return { prompt: SMALL_Q, answer: `${th}:small`, options: [T(th, { id: `${th}:small`, scale: 0.5 }), ...others.map((t) => T(t, { id: `${t}:big`, scale: 1 }))].sort(() => c.r() - 0.5) };
    }));
  }
  // the biggest / the smallest of the SAME picture drawn three or four times
  for (const th of SIZE_SAME) for (const [kind, q] of [['biggest', BIGGEST_Q], ['smallest', SMALLEST_Q]]) {
    out.push(item(`op:${kind}:${th}`, 1, [q], (c) => {
      const sizes = c.nOpt >= 4 ? [1, 0.74, 0.52, 0.34] : [1, 0.62, 0.36];
      const options = sizes.map((s, i) => T(th, { id: `${th}:s${i}`, scale: s }));
      return { prompt: q, answer: kind === 'biggest' ? `${th}:s0` : `${th}:s${sizes.length - 1}`, options: options.sort(() => c.r() - 0.5) };
    }));
  }
  out.push(...conceptItems());
  return out;
}

// ====================================================================================================================================================
// 2. Patterns and sequences
// ====================================================================================================================================================
export const NEXT_Q = 'إيه اللي جاي بعد كده؟';
export const MISSING_Q = 'إيه اللي ناقص في الصف؟';
export const ODD_Q = 'فين اللي مش زيهم؟';
const PAT_COLORS = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'brown'];
const PAT_SHAPES = ['circle', 'square', 'triangle', 'star', 'heart', 'octagon', 'plus', 'drop'];
const PAT_THINGS = ['apple', 'banana', 'orange', 'strawberry', 'pear', 'grapes', 'watermelon', 'lemon', 'cat', 'dog', 'duck', 'fish', 'frog', 'rabbit', 'chick', 'cow', 'sheep', 'hen', 'ball', 'teddy', 'car', 'boat', 'rose', 'sun', 'heart', 'bus', 'plane', 'carrot', 'horse', 'pig'];
const SHAPE_PAINT = ['red', 'blue', 'green', 'purple', 'orange'];
/** What a domain draws: an option (to tap) and a place in the row. A shape is painted one colour for a whole row so only its form changes. */
const DOMAINS = {
  color: { list: PAT_COLORS, opt: (x) => ({ id: `c:${x}`, kind: 'color', hex: colorOf(x).hex }), row: (x) => ({ kind: 'color', hex: colorOf(x).hex }) },
  shape: { list: PAT_SHAPES, opt: (x, col) => ({ id: `s:${x}`, kind: 'shape', shape: x, color: col }), row: (x, col) => ({ kind: 'shape', shape: x, color: col }) },
  thing: { list: PAT_THINGS, opt: (x) => T(x, { id: `t:${x}` }), row: (x) => ({ kind: 'thing', thing: x }) },
};
export const PATTERNS = [
  { id: 'AB', cyc: [0, 1], tier: 0, per: 14 },
  { id: 'AAB', cyc: [0, 0, 1], tier: 1, per: 10 },
  { id: 'ABB', cyc: [0, 1, 1], tier: 1, per: 10 },
  { id: 'ABC', cyc: [0, 1, 2], tier: 2, per: 10 },
  { id: 'AABB', cyc: [0, 0, 1, 1], tier: 2, per: 8 },
];
/** A fixed, shuffled choice of `cap` ordered tuples of `k` different things (the same on every device, so a child's memory keeps its meaning). */
function tuples(list, k, cap, seed) {
  const all = [];
  const rec = (acc) => { if (acc.length === k) { all.push(acc); return; } for (const x of list) if (!acc.includes(x)) rec([...acc, x]); };
  rec([]);
  const r = rng(seed);
  for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
  return all.slice(0, cap);
}

function patterns() {
  const out = [];
  for (const [dom, d] of Object.entries(DOMAINS)) {
    for (const p of PATTERNS) {
      const k = Math.max(...p.cyc) + 1;
      const total = Math.min(p.cyc.length * 2 + 1, 7);
      const picks = tuples(d.list, k, p.per, hash(`${dom}${p.id}`));
      picks.forEach((tup, n) => {
        const col = SHAPE_PAINT[hash(tup.join()) % SHAPE_PAINT.length];
        const seq = Array.from({ length: total }, (_, i) => p.cyc[i % p.cyc.length]);
        for (const mode of ['next', 'missing']) {
          const gap = mode === 'next' ? total - 1 : 1 + (hash(`${dom}${p.id}${tup.join()}`) % (total - 2));
          const q = mode === 'next' ? NEXT_Q : MISSING_Q;
          out.push(item(`pt:${mode}:${p.id}:${dom}:${tup.join('-')}`, p.tier, [q], (c) => {
            const right = tup[seq[gap]];
            const sameRow = tup.filter((x) => x !== right); // the other things of the pattern are the likeliest mistakes
            const extra = d.list.filter((x) => !tup.includes(x));
            const wrong = [...sameRow.slice(0, c.nOpt - 1), ...c.pickLow(extra, Math.max(0, c.nOpt - 1 - sameRow.length))].slice(0, c.nOpt - 1);
            const row = seq.map((s, i) => (i === gap ? { kind: 'gap' } : d.row(tup[s], col)));
            return { prompt: q, answer: d.opt(right, col).id, show: { type: 'row', items: row }, options: [right, ...wrong].sort(() => c.r() - 0.5).map((x) => d.opt(x, col)) };
          }));
        }
      });
    }
    // the odd one out: some are the same, one is different
    const pairs = tuples(d.list, 2, dom === 'thing' ? 30 : dom === 'color' ? 20 : 16, hash(`odd${dom}`));
    for (const [same, odd] of pairs) {
      out.push(item(`pt:odd:${dom}:${same}-${odd}`, 0, [ODD_Q], (c) => {
        const col = SHAPE_PAINT[hash(`${same}${odd}`) % SHAPE_PAINT.length];
        const copies = Array.from({ length: c.nOpt - 1 }, (_, i) => ({ ...d.opt(same, col), id: `${d.opt(same, col).id}#${i}` }));
        const the = { ...d.opt(odd, col), id: `${d.opt(odd, col).id}#odd` };
        return { prompt: ODD_Q, answer: the.id, options: [...copies, the].sort(() => c.r() - 0.5) };
      }));
    }
  }
  return out;
}

// ====================================================================================================================================================
// 3. Senses and feelings
// ====================================================================================================================================================
const FACES = {
  happy: { ch: '😊', find: 'فين الوش الفرحان؟' },
  sad: { ch: '😢', find: 'فين الوش الزعلان؟' },
  angry: { ch: '😠', find: 'فين الوش الغضبان؟' },
  scared: { ch: '😨', find: 'فين الوش الخايف؟' },
  surprised: { ch: '😮', find: 'فين الوش المتفاجئ؟' },
  sleepy: { ch: '😴', find: 'فين الوش النعسان؟' },
  sick: { ch: '🤒', find: 'فين الوش التعبان؟' },
};
const FACE_OPT = (f) => ({ id: `f:${f}`, kind: 'letter', ch: FACES[f].ch });
export const FEEL_SUFFIX = '، بنحس بإيه؟';
/** [what happens (we, plural: it fits a boy and a girl), the face that fits, tier] */
export const SITUATIONS = [
  ['ماما جابت لنا هدية', 'happy', 1], ['لعبنا مع صحابنا في الجنينة', 'happy', 1], ['لقينا لعبتنا اللي ضاعت', 'happy', 1], ['روحنا الملاهي', 'happy', 1],
  ['أكلنا آيس كريم', 'happy', 1], ['جدو وتيتة زارونا', 'happy', 1], ['رسمنا رسمة حلوة', 'happy', 1],
  ['لعبتنا اتكسرت', 'sad', 1], ['البالونة طارت في السما', 'sad', 1], ['الآيس كريم وقع على الأرض', 'sad', 1], ['صاحبنا سافر بعيد', 'sad', 2], ['وحشنا حد بنحبه', 'sad', 2], ['قطتنا الصغيرة تاهت', 'sad', 2],
  ['حد خد لعبتنا بالعافية', 'angry', 1], ['حد هد البرج اللي بنيناه', 'angry', 1], ['حد زقنا وإحنا بنلعب', 'angry', 2], ['حد قال علينا كلمة وحشة', 'angry', 2], ['حد شخبط على رسمتنا', 'angry', 2],
  ['سمعنا رعد جامد', 'scared', 1], ['النور راح والدنيا ضلمة', 'scared', 1], ['كلب كبير جري ناحيتنا', 'scared', 1], ['ضعنا في السوق', 'scared', 2], ['شفنا حشرة كبيرة', 'scared', 2],
  ['فتحنا الصندوق ولقينا مفاجأة', 'surprised', 2], ['شفنا ألعاب نارية في السما', 'surprised', 2], ['بابا رجع من السفر فجأة', 'surprised', 2], ['لقينا هدية من غير ما نتوقع', 'surprised', 2],
  ['سهرنا لوقت متأخر', 'sleepy', 2], ['لعبنا يوم طويل', 'sleepy', 2], ['جه ميعاد النوم', 'sleepy', 1],
  ['بطننا بتوجعنا', 'sick', 2], ['عندنا سخونية', 'sick', 2], ['عندنا برد وكحة', 'sick', 2],
];
const BODY = { eye: 'y_eye', ear: 'y_ear', nose: 'y_nose', mouth: 'y_mouth', hand: 'y_hand' };
export const SENSE_Q = { eye: 'بنشوف بإيه؟', ear: 'بنسمع بإيه؟', nose: 'بنشم بإيه؟', hand: 'بنلمس بإيه؟', mouth: 'بنحس بطعم الأكل بإيه؟' };
export const SENSE_SHOW_Q = { eye: 'بنشوف ده بإيه؟', ear: 'بنسمع ده بإيه؟', nose: 'بنشم ده بإيه؟', hand: 'بنلمس ده بإيه؟', mouth: 'بنحس بطعم ده بإيه؟' };
export const SENSE_THINGS = {
  nose: ['rose', 't_flower', 'o_honey', 'o_bread', 'o_pizza', 'o_cookie', 'strawberry', 'orange', 'lemon', 'r_cupcake', 'o_chicken', 'mango'],
  ear: ['m_drum', 'm_guitar', 'm_piano', 'm_violin', 'm_flute', 'm_trumpet', 'm_tambourine', 'm_bell', 't_thunder', 'f_rooster', 'm_oud'],
  mouth: ['apple', 'banana', 'strawberry', 'watermelon', 'o_cookie', 'r_candy', 'r_icecream', 'o_honey', 'o_pizza', 'o_bread', 'o_juice', 'grapes', 'mango', 'pear', 'r_cupcake'],
  hand: ['teddy', 'cat', 'bunny', 'chick', 'sheep', 'r_cotton', 'l_scarf', 'l_gloves', 'w_iceblock', 'd_cactus'],
  eye: ['r_rainbow', 'sun', 's_moon', 's_star', 'r_balloons', 'butterfly', 'r_kite', 't_flower'],
};
export const COPE = [
  ['لو زعلنا، نروح لمين؟', ['a_mama', 'a_baba', 'a_grandma', 'a_grandpa', 'a_uncle'], 'sad'],
  ['لو خفنا، نروح لمين؟', ['a_mama', 'a_baba', 'a_grandma', 'a_grandpa', 'a_uncle'], 'scared'],
  ['لو تعبنا، نروح لمين؟', ['a_mama', 'a_baba', 'z_doctor', 'z_nurse'], 'sick'],
  ['لو حد ضايقنا، نحكي لمين؟', ['a_mama', 'a_baba', 'a_grandma', 'a_grandpa', 'z_teacher'], 'bother'],
];
const NOT_PEOPLE = ['ball', 'apple', 'car', 'bus', 'h_clock', 'boat', 'e_ruler', 'h_table', 'banana'];

function senses() {
  const out = [];
  for (const [f, v] of Object.entries(FACES)) out.push(item(`se:face:${f}`, 0, [v.find], (c) => ({ prompt: v.find, answer: `f:${f}`, options: [`f:${f}`, ...c.pickLow(Object.keys(FACES).filter((x) => x !== f), c.nOpt - 1).map((x) => `f:${x}`)].sort(() => c.r() - 0.5).map((id) => FACE_OPT(id.slice(2))) })));
  for (const [text, f, tier] of SITUATIONS) {
    const q = `${text}${FEEL_SUFFIX}`;
    out.push(item(`se:feel:${text}`, tier, [q], (c) => ({ prompt: q, answer: `f:${f}`, options: [`f:${f}`, ...c.pickLow(Object.keys(FACES).filter((x) => x !== f), c.nOpt - 1).map((x) => `f:${x}`)].sort(() => c.r() - 0.5).map((id) => FACE_OPT(id.slice(2))) })));
  }
  for (const [q, who, tag] of COPE) {
    for (const p of who) out.push(item(`se:cope:${tag}:${p}`, 1, [q], (c) => ({ prompt: q, answer: p, options: [p, ...c.pickLow(NOT_PEOPLE, c.nOpt - 1)].sort(() => c.r() - 0.5).map((x) => T(x)) })));
  }
  const bodyOpts = (c, sense) => {
    const others = c.pickLow([...Object.keys(BODY).filter((s) => s !== sense).map((s) => BODY[s]), 'y_foot'].filter((id) => !(sense === 'hand' && id === 'y_foot')), c.nOpt - 1);
    return [BODY[sense], ...others].sort(() => c.r() - 0.5).map((x) => T(x));
  };
  for (const sense of Object.keys(BODY)) {
    out.push(item(`se:sense:${sense}`, 0, [SENSE_Q[sense]], (c) => ({ prompt: SENSE_Q[sense], answer: BODY[sense], options: bodyOpts(c, sense) })));
    for (const th of SENSE_THINGS[sense]) out.push(item(`se:show:${sense}:${th}`, 1, [SENSE_SHOW_Q[sense]], (c) => ({ prompt: SENSE_SHOW_Q[sense], answer: BODY[sense], show: { type: 'thing', thing: th }, options: bodyOpts(c, sense) })));
  }
  return out;
}

// ====================================================================================================================================================
// 4. Manners  (the choices are words; the game reads each one aloud)
// ====================================================================================================================================================
export const PHRASES = ['شكراً', 'لو سمحت', 'آسف', 'صباح الخير', 'مع السلامة', 'اتفضل', 'العفو', 'الحمد لله', 'بسم الله', 'السلام عليكم', 'أهلاً وسهلاً', 'تسلم إيدك', 'تصبحي على خير', 'عن إذنك', 'ألف سلامة'];
const PH = (text) => ({ id: `p:${text}`, kind: 'letter', ch: text, say: text });
/** A round whose choices are phrases: the right one among wrong ones, shuffled, with `read` in the order of the options. */
function phraseRound(c, prompt, right, wrongs, extra = {}) {
  const opts = [right, ...c.pickLow(wrongs, c.nOpt - 1)].sort(() => c.r() - 0.5).map(PH);
  return { prompt, answer: `p:${right}`, options: opts, read: opts.map((o) => o.say), reward: right, ...extra };
}
export const GIFT_Q = 'حد ادّاني ده، أقول إيه؟';
export const ASK_Q = 'أنا عايز ده، أقول إيه؟';
export const SHARE_Q = 'صاحبي عايز يلعب بده، أقوله إيه؟';
export const HELP_Q = 'ده ساعدني، أقوله إيه؟';
export const MORNING_Q = 'قابلت ده الصبح، أقوله إيه؟';
const GIFTS = ['apple', 'banana', 'orange', 'strawberry', 'pear', 'grapes', 'watermelon', 'ball', 'teddy', 'blocks', 'drum', 'yoyo', 'o_cookie', 'r_candy', 'r_cupcake', 'r_icecream', 'o_juice', 'o_bread', 'o_milk', 'rose', 'heart', 'e_book', 'e_pencil', 'e_crayons', 'h_bike', 'mango', 'carrot', 'o_honey', 'o_pizza', 'o_egg', 'l_shirt', 'l_hat', 'l_cap', 'l_socks', 'm_guitar', 'm_piano', 'e_notebook'];
const ASKS = ['o_water', 'o_juice', 'o_milk', 'o_bread', 'apple', 'banana', 'ball', 'teddy', 'e_pencil', 'e_crayons', 'e_paper', 'e_scissors', 'blocks', 'h_towel', 'strawberry', 'orange', 'pear', 'grapes', 'o_cookie', 'r_icecream', 'h_toothbrush', 'e_book', 'e_glue', 'e_eraser', 'e_ruler', 'o_soup', 'o_rice', 'o_cheese', 'watermelon', 'mango'];
const TOYS = ['ball', 'teddy', 'blocks', 'drum', 'yoyo', 'h_bike', 'm_guitar', 'm_piano', 'e_crayons', 'h_ball', 'h_swing', 'm_tambourine'];
const PEOPLE = ['z_doctor', 'z_teacher', 'z_police', 'z_firefighter', 'z_farmer', 'z_cook', 'z_driver', 'z_pilot', 'z_nurse', 'z_builder', 'z_singer', 'z_painter', 'a_mama', 'a_baba', 'a_grandma', 'a_grandpa', 'a_uncle', 'a_brother', 'a_sister', 'a_friends'];
/** [what happens, the right words] */
export const SITUATIONS_SAY = [
  ['قابلت صاحبي الصبح، أقوله إيه؟', 'صباح الخير'], ['داخل البيت، أقول إيه؟', 'السلام عليكم'], ['هاكل، أقول إيه الأول؟', 'بسم الله'], ['خلصت أكل، أقول إيه؟', 'الحمد لله'],
  ['وقعت حاجة من صاحبي بالغلط، أقوله إيه؟', 'آسف'], ['حد قالي شكراً، أرد أقول إيه؟', 'العفو'], ['عطست، أقول إيه؟', 'الحمد لله'], ['ماما عملت الأكل، أقولها إيه؟', 'تسلم إيدك'],
  ['رايح أنام، أقول لماما إيه؟', 'تصبحي على خير'], ['جالنا ضيف، أقوله إيه؟', 'أهلاً وسهلاً'], ['صاحبي ماشي، أقوله إيه؟', 'مع السلامة'], ['عايز أعدي من قدام حد، أقول إيه؟', 'عن إذنك'],
  ['صاحبي تعبان، أقوله إيه؟', 'ألف سلامة'], ['صاحبي إدّاني لعبته، أقوله إيه؟', 'شكراً'],
];
/** [what happens, the right words, wrong words]: waiting, sharing, listening, honesty */
export const TURN_ITEMS = [
  ['عايز ألعب على المرجيحة والدور مش دوري، أعمل إيه؟', 'أستنى دوري', ['ألعب مكانه', 'أزقه']],
  ['صاحبي بيتكلم، أعمل إيه؟', 'أسمعه لحد ما يخلص', ['أقاطعه', 'أجري']],
  ['عايز لعبة صاحبي، أعمل إيه؟', 'أطلبها بأدب', ['آخدها بالعافية', 'أصرخ']],
  ['لقيت لعبة على الأرض مش بتاعتي، أعمل إيه؟', 'أديها لكبير', ['آخدها معايا', 'أرميها']],
  ['إحنا في الطابور، أعمل إيه؟', 'أستنى بهدوء', ['أزق اللي قدامي', 'أجري']],
  ['صاحبي زعلان، أعمل إيه؟', 'أقعد معاه وأسمعه', ['أسيبه وأمشي', 'أضحك عليه']],
  ['معايا حلوى وصاحبي معندوش، أعمل إيه؟', 'أشاركه', ['آكلها لوحدي', 'أخبيها']],
];

/** Phrases that could ALSO be right for the same situation: a wrong choice is never one of them (a greeting is not wrong next to a greeting). */
const SAME_GROUP = [
  ['صباح الخير', 'السلام عليكم', 'أهلاً وسهلاً'], ['آسف', 'عن إذنك', 'لو سمحت'], ['الحمد لله', 'بسم الله'],
  ['شكراً', 'العفو', 'اتفضل', 'تسلم إيدك'], ['مع السلامة', 'ألف سلامة', 'تصبحي على خير'],
];
export const wrongsFor = (right) => PHRASES.filter((p) => p !== right && !SAME_GROUP.some((g) => g.includes(right) && g.includes(p)));

function manners() {
  const out = [];
  const showRound = (prompt, right, wrongs, th) => (c) => phraseRound(c, prompt, right, wrongs, { show: { type: 'thing', thing: th } });
  for (const th of GIFTS) out.push(item(`mn:gift:${th}`, 0, [GIFT_Q, ...PHRASES], showRound(GIFT_Q, 'شكراً', ['آسف', 'مع السلامة', 'صباح الخير', 'العفو'], th)));
  for (const th of ASKS) out.push(item(`mn:ask:${th}`, 0, [ASK_Q, ...PHRASES], showRound(ASK_Q, 'لو سمحت', ['شكراً', 'آسف', 'مع السلامة', 'صباح الخير'], th)));
  for (const th of TOYS) out.push(item(`mn:share:${th}`, 1, [SHARE_Q, ...PHRASES], showRound(SHARE_Q, 'اتفضل', ['آسف', 'مع السلامة', 'صباح الخير', 'عن إذنك'], th)));
  for (const th of PEOPLE) {
    out.push(item(`mn:help:${th}`, 1, [HELP_Q, ...PHRASES], showRound(HELP_Q, 'شكراً', ['آسف', 'مع السلامة', 'صباح الخير', 'لو سمحت'], th)));
    out.push(item(`mn:morning:${th}`, 1, [MORNING_Q, ...PHRASES], showRound(MORNING_Q, 'صباح الخير', ['مع السلامة', 'تصبحي على خير', 'آسف', 'شكراً'], th)));
  }
  for (const [q, right] of SITUATIONS_SAY) out.push(item(`mn:say:${q}`, 1, [q, ...PHRASES], (c) => phraseRound(c, q, right, wrongsFor(right))));
  for (const [q, right, wrongs] of TURN_ITEMS) out.push(item(`mn:turn:${q}`, 2, [q, right, ...wrongs], (c) => phraseRound(c, q, right, wrongs)));
  return out;
}

// ====================================================================================================================================================
// 5. Safety  (calm and short; every rule ends with a grown-up)
// ====================================================================================================================================================
/** [what happens, the safe thing to do, wrong things, tier] */
export const RULES = [
  ['الإشارة حمرا، أعمل إيه؟', 'أقف', ['أعدي', 'أجري'], 0],
  ['عايز أعدي الشارع، أعدي مع مين؟', 'مع ماما أو بابا', ['لوحدي', 'وأنا بجري'], 0],
  ['قبل ما أعدي الشارع أعمل إيه؟', 'أبص يمين وشمال', ['أجري', 'أغمض عيني'], 0],
  ['ألعب بالكورة فين؟', 'في الجنينة', ['في الشارع', 'على السلم'], 0],
  ['ركبت العربية، أعمل إيه الأول؟', 'أربط الحزام', ['أقف على الكرسي', 'أطلع راسي برة'], 1],
  ['هركب العجلة، ألبس إيه؟', 'الخوذة', ['ولا حاجة', 'البيجامة'], 1],
  ['هنزل من العربية، أنزل من أنهي ناحية؟', 'ناحية الرصيف', ['ناحية الشارع', 'من الشباك'], 1],
  ['الشوربة سخنة، أعمل إيه؟', 'أستنى لحد ما تبرد', ['آكلها بسرعة', 'ألمسها'], 0],
  ['شفت نار، أعمل إيه؟', 'أبعد وأنادي كبير', ['ألعب بيها', 'أطفيها بإيدي'], 0],
  ['الكبريت والولاعة لمين؟', 'للكبار بس', ['للعب', 'للأكل'], 1],
  ['البوتاجاز سخن، أعمل إيه؟', 'أبعد عنه', ['ألمسه', 'ألعب بيه'], 0],
  ['المكواة سخنة، أعمل إيه؟', 'أبعد عنها', ['ألمسها', 'ألعب بيها'], 0],
  ['عايز أستحمى بالمية السخنة، أعمل إيه؟', 'كبير يظبطها لي', ['أفتحها لوحدي', 'أجرب بإيدي'], 1],
  ['واحد غريب قال تعالى معايا، أعمل إيه؟', 'أقول لأ وأجري لماما', ['أروح معاه', 'أسكت'], 2],
  ['واحد غريب عرض عليا حلوى، أعمل إيه؟', 'أقول لأ وأقول لماما', ['آخدها', 'أروح معاه'], 2],
  ['غريب بيخبط على الباب، أعمل إيه؟', 'أنادي ماما أو بابا', ['أفتح له', 'أسكت'], 2],
  ['حد غريب بيسأل عن عنواننا، أعمل إيه؟', 'ما أقولش وأنادي كبير', ['أقوله', 'أكتبه له'], 2],
  ['ضعت في السوق، أعمل إيه؟', 'أقف وأنادي شرطي أو موظف', ['أمشي بعيد', 'أخرج برة'], 2],
  ['جسمي ملكي، لو حد لمسني ومش حابب، أعمل إيه؟', 'أقول لأ وأقول لماما', ['أسكت', 'أخبي الموضوع'], 2],
  ['ينفع أحكي لماما وبابا أي حاجة؟', 'أيوه، دايماً', ['لأ', 'مرة بس'], 2],
  ['الدوا مين يدّيهولي؟', 'ماما أو بابا', ['أنا لوحدي', 'صاحبي'], 1],
  ['لقيت علبة دوا، أعمل إيه؟', 'أقول لكبير', ['آخد حباية', 'أدوقها'], 1],
  ['سائل التنضيف شكله حلو، أشربه؟', 'لأ، ده مش للشرب', ['أيوه', 'أدوقه'], 1],
  ['هنزل البحر، أنزل مع مين؟', 'مع كبير', ['لوحدي', 'مع صاحبي الصغير'], 1],
  ['هستحمى في البانيو، هبقى مع مين؟', 'مع كبير', ['لوحدي', 'مع لعبتي'], 1],
  ['فيه فيشة كهربا، ألمسها؟', 'لأ، أبعد', ['أيوه', 'ألعب بيها'], 0],
  ['السكينة والمقص الحاد، ألعب بيهم؟', 'لأ، دول للكبار', ['أيوه', 'شوية'], 0],
  ['الشباك عالي، أطلع عليه؟', 'لأ، أبعد عنه', ['أيوه', 'أطلع كرسي'], 1],
  ['ماشي على السلم، أعمل إيه؟', 'أنزل بالراحة', ['أجري', 'أنط'], 0],
  ['اتجرحت، أعمل إيه؟', 'أقول لكبير', ['أسكت', 'أخبي الموضوع'], 0],
  ['في الزحمة أمسك إيد مين؟', 'إيد ماما أو بابا', ['إيد غريب', 'ولا إيد حد'], 1],
  ['شفت حيوان في الشارع، أعمل إيه؟', 'ما ألمسوش وأبعد', ['أجري وراه', 'ألمسه'], 1],
  ['سمعت رعد وبرق، أقعد فين؟', 'جوه البيت', ['تحت الشجرة', 'في الجنينة'], 1],
  ['الجو حر جداً، ألعب فين؟', 'في الضل', ['تحت الشمس', 'في الشارع'], 1],
  ['لقيت حاجة مش عارف هي إيه، أعمل إيه؟', 'أسأل كبير', ['أدوقها', 'ألمسها'], 1],
  ['إحنا في رحلة، أمشي فين؟', 'جنب المدرسة', ['بعيد عنهم', 'لوحدي'], 1],
];
export const DANGER_THINGS = ['j_snake', 'd_scorpion', 'shark', 'croc', 'j_tiger', 'lion', 'e_scissors', 't_lightning', 'd_cactus', 'i_spider', 'o_soup', 'u_jelly', 'u_puffer', 'j_gorilla'];
export const SAFE_THINGS = ['teddy', 'ball', 'blocks', 'bunny', 'chick', 'drum', 'yoyo', 'h_toybox', 'e_crayons', 'e_book', 'r_kite', 'r_pinwheel'];
export const DANGER_Q = 'فين اللي خطر نبعد عنه؟';
export const SAFE_Q = 'فين اللي آمن نلعب بيه؟';
export const DANGER_ACT_Q = 'ده ممكن يعورني، أعمل إيه؟';
const DANGER_ACT = ['أبعد وأنادي كبير', 'ألمسه', 'ألعب بيه'];
export const PROTECT = [
  ['فين اللي بيحمينا من المطر؟', ['t_umbrella', 'l_raincoat'], ['apple', 'ball', 'h_bed', 'e_book', 'car']],
  ['فين اللي بيحمينا من الشمس؟', ['l_cap', 'l_hat', 'l_glasses', 'b_umbrella'], ['l_gloves', 'l_scarf', 'ball', 'h_bed', 'e_book']],
  ['فين اللي بيحمينا من البرد؟', ['l_jacket', 'l_scarf', 'l_gloves', 'l_socks', 'l_hat'], ['l_glasses', 'ball', 'h_bed', 'e_book', 'b_umbrella']],
];
export const HELPERS = [
  ['لو في حريق نكلم مين؟', ['z_firefighter'], 'fire'],
  ['لو ضعنا نسأل مين؟', ['z_police', 'a_mama', 'a_baba'], 'lost'],
  ['لو وقعنا وتعبنا جامد نكلم مين؟', ['z_doctor', 'z_nurse', 'a_mama', 'a_baba'], 'hurt'],
  ['لو حد غريب ضايقنا نقول لمين؟', ['a_mama', 'a_baba', 'a_grandma', 'a_grandpa', 'z_teacher', 'z_police'], 'stranger'],
  ['لو شمينا ريحة دخان نقول لمين؟', ['a_mama', 'a_baba', 'z_firefighter'], 'smoke'],
  ['لو شفنا حد وقع وبيعيط نكلم مين؟', ['a_mama', 'a_baba', 'z_teacher', 'z_nurse'], 'fell'],
];
const NOT_HELPERS = ['ball', 'apple', 'car', 'bus', 'teddy', 'banana', 'boat', 'h_clock'];

function safety() {
  const out = [];
  for (const [q, right, wrongs, tier] of RULES) out.push(item(`sf:rule:${q}`, tier, [q, right, ...wrongs], (c) => phraseRound(c, q, right, wrongs)));
  for (const th of DANGER_THINGS) {
    out.push(item(`sf:danger:${th}`, 1, [DANGER_Q], (c) => ({ prompt: DANGER_Q, answer: th, options: [th, ...c.pickLow(SAFE_THINGS, c.nOpt - 1)].sort(() => c.r() - 0.5).map((x) => T(x)) })));
    out.push(item(`sf:act:${th}`, 1, [DANGER_ACT_Q, ...DANGER_ACT], (c) => phraseRound(c, DANGER_ACT_Q, DANGER_ACT[0], DANGER_ACT.slice(1), { show: { type: 'thing', thing: th } })));
  }
  for (const th of SAFE_THINGS) out.push(item(`sf:safe:${th}`, 0, [SAFE_Q], (c) => ({ prompt: SAFE_Q, answer: th, options: [th, ...c.pickLow(DANGER_THINGS, c.nOpt - 1)].sort(() => c.r() - 0.5).map((x) => T(x)) })));
  for (const [q, yes, no] of PROTECT) for (const th of yes) out.push(item(`sf:protect:${th}:${q}`, 1, [q], (c) => ({ prompt: q, answer: th, options: [th, ...c.pickLow(no, c.nOpt - 1)].sort(() => c.r() - 0.5).map((x) => T(x)) })));
  for (const [q, who, tag] of HELPERS) for (const p of who) out.push(item(`sf:help:${tag}:${p}`, 1, [q], (c) => ({ prompt: q, answer: p, options: [p, ...c.pickLow(NOT_HELPERS, c.nOpt - 1)].sort(() => c.r() - 0.5).map((x) => T(x)) })));
  return out;
}

// ====================================================================================================================================================
export const NEW_ITEMS = {
  t_opposites: opposites(),
  t_patterns: patterns(),
  t_senses: senses(),
  t_manners: manners(),
  t_safety: safety(),
};
/** Every sentence the new levels can say (the voice list, tools/game_voice/lines.mjs). */
export const allNewLevelSentences = () => [...new Set(Object.values(NEW_ITEMS).flatMap((list) => list.flatMap((x) => x.say)))];
