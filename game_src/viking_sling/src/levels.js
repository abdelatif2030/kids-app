// Fort layouts for the Viking Slingshot. y points up, the ground top is y = 0, the slingshot sits at x about 3.4.
// Every fort is assembled from a few helpers so that each block rests exactly on the one below (stable at rest: the tests
// check that no fort moves, breaks or loses a goblin when left alone for 5 seconds).

function builder() {
  const blocks = []; const goblins = []; const ledges = [];
  /** one block resting with its bottom edge at `bottom`; returns the new top */
  const b = (m, x, bottom, w, h) => { blocks.push({ m, x: +x.toFixed(4), y: +(bottom + h / 2).toFixed(4), w, h }); return bottom + h; };
  const R = { g: 0.55, h: 0.6, boss: 1.35 };
  /** a goblin standing with its feet at `bottom` */
  const gob = (x, bottom, k = 'g') => { goblins.push({ x, y: +(bottom + R[k] + 0.004).toFixed(4), k }); return bottom + 2 * R[k]; };
  /** two posts and a roof beam; the roof is as wide as the hut. returns the top of the roof */
  const hut = (x, bottom, w, h, pm = 'wood', rm = 'wood', t = 0.5) => {
    b(pm, x - w / 2 + t / 2, bottom, t, h); b(pm, x + w / 2 - t / 2, bottom, t, h);
    return b(rm, x, bottom + h, w, t);
  };
  /** a block wall: columns x rows of w x h blocks, centred on x */
  const wall = (m, x, bottom, cols, rows, w, h) => {
    let top = bottom;
    for (let r = 0; r < rows; r++) { top = bottom + (r + 1) * h; for (let c = 0; c < cols; c++) b(m, x + (c - (cols - 1) / 2) * w, bottom + r * h, w, h); }
    return top;
  };
  const ledge = (x, w, h) => { ledges.push({ x, y: h / 2, w, h }); return h; };
  return { blocks, goblins, ledges, b, gob, hut, wall, ledge };
}

const L = [];
const add = (ar, en, vikings, fn) => { const k = builder(); fn(k); L.push({ ar, en, vikings, blocks: k.blocks, goblins: k.goblins, ledges: k.ledges }); };

// 1. the first hut: nothing hard
add('الكوخ الأول', 'The First Hut', ['axe', 'axe', 'axe'], (k) => {
  k.hut(16, 0, 3, 2.2);
  k.gob(16, 0);
  k.gob(21, 0);
});

// 2. two huts and a roof friend
add('كوخان', 'Two Huts', ['axe', 'axe', 'axe', 'axe'], (k) => {
  const top = k.hut(15, 0, 3.2, 2.2);
  k.gob(15, 0);
  k.gob(15, top);
  k.hut(20, 0, 3.2, 2.2);
  k.gob(20, 0);
});

// 3. a frozen shack: ice is easy, and the bomb thrower shows up
add('كوخ الثلج', 'Ice Shack', ['axe', 'bomb', 'axe', 'axe'], (k) => {
  let top = k.hut(15, 0, 3.2, 2.2, 'ice', 'ice');
  k.gob(15, 0);
  k.gob(15, top);
  k.b('ice', 20, 0, 1, 1); k.b('ice', 20, 1, 1, 1); top = k.b('ice', 20, 2, 1, 1);
  k.gob(20, top);
  k.b('stone', 23.5, 0, 1.5, 1.5);
  k.gob(23.5, 1.5);
});

// 4. a stone wall in front of the huts: lob it over, or bomb it
add('خلف السور', 'Behind the Wall', ['axe', 'bomb', 'shield', 'axe'], (k) => {
  k.wall('stone', 13, 0, 1, 3, 1.4, 1.4);
  const top = k.hut(18, 0, 3.2, 2.2);
  k.gob(18, 0);
  k.gob(18, top);
  const t2 = k.hut(22.5, 0, 3.2, 2.2);
  k.gob(22.5, 0);
  k.gob(22.5, t2);
});

// 5. a stone house: the giant smashes it
add('بيت الحجر', 'The Stone House', ['giant', 'axe', 'bomb', 'shield'], (k) => {
  const top = k.hut(17, 0, 4, 2.4, 'stone', 'stone', 0.7);
  k.gob(17, 0);
  k.gob(17, top);
  k.b('wood', 22, 0, 0.5, 2.4); k.b('wood', 25, 0, 0.5, 2.4);
  const t2 = k.b('wood', 23.5, 2.4, 3.4, 0.5);
  k.gob(23.5, 0);
  k.gob(23.5, t2);
});

// 6. the wooden tower, two storeys
add('البرج الخشبي', 'The Wooden Tower', ['axe', 'axe', 'shield', 'bomb'], (k) => {
  let top = 0;
  for (let f = 0; f < 2; f++) {
    top = k.hut(17, top, 3.6, 2.2);
    k.gob(17, top - 2.5);
  }
  k.gob(17, top);
  k.hut(23, 0, 3.2, 2.2, 'ice', 'wood');
  k.gob(23, 0);
});

// 7. stone ground floor, wooden upper floors
add('القلعة الصغيرة', 'The Little Castle', ['shield', 'bomb', 'giant', 'axe'], (k) => {
  let top = k.hut(16, 0, 4.2, 2.2, 'stone', 'stone', 0.7);
  k.gob(16, 0, 'h');
  top = k.hut(16, top, 3.4, 2.0, 'wood', 'wood');
  k.gob(16, top - 2.5);
  k.gob(16, top);
  top = k.hut(22, 0, 3.4, 2.4, 'ice', 'wood');
  k.gob(22, 0);
  k.gob(22, top, 'h');
});

// 8. two towers and a bridge
add('الجسر', 'The Bridge', ['axe', 'bomb', 'shield', 'giant', 'axe'], (k) => {
  k.wall('stone', 14.5, 0, 1, 3, 1.5, 1.5);
  k.wall('stone', 24.5, 0, 1, 3, 1.5, 1.5);
  const top = k.b('wood', 19.5, 4.5, 11, 0.5);
  k.gob(14.5, 4.5);
  k.gob(24.5, 4.5, 'h');
  k.gob(19.5, top);
  k.hut(19.5, 0, 5, 2.4, 'wood', 'ice');
  k.gob(18.5, 0); k.gob(20.5, 0);
});

// 9. goblin citadel
add('قلعة الغيلان', 'Goblin Citadel', ['axe', 'bomb', 'shield', 'giant', 'bomb', 'axe'], (k) => {
  k.wall('stone', 13.5, 0, 1, 4, 1.4, 1.4);
  let top = k.hut(19, 0, 4.4, 2.4, 'stone', 'stone', 0.7);
  k.gob(19, 0, 'h');
  top = k.hut(19, top, 3.4, 2.0, 'wood', 'ice');
  k.gob(19, top - 2.5);
  k.gob(19, top, 'h');
  const t2 = k.hut(25, 0, 3.4, 2.4, 'wood', 'wood');
  k.gob(25, 0);
  k.gob(25, t2);
  k.hut(29, 0, 3, 2.2, 'ice', 'ice');
  k.gob(29, 0);
});

// 10. the boss fortress
add('حصن زعيم الغيلان', 'The Goblin King', ['axe', 'bomb', 'shield', 'giant', 'bomb', 'giant', 'axe'], (k) => {
  k.wall('stone', 13, 0, 1, 4, 1.4, 1.4);
  // keep with the boss
  let top = k.hut(21, 0, 7.2, 3.2, 'stone', 'stone', 0.8);
  k.gob(19, 0, 'h'); k.gob(23, 0, 'h');
  top = k.b('wood', 21, top, 3, 0.5);
  k.gob(21, top, 'boss');
  // side towers
  const t1 = k.hut(27, 0, 3.4, 2.4, 'wood', 'ice');
  k.gob(27, 0);
  k.gob(27, t1);
  const t2 = k.hut(31, 0, 3.2, 2.2, 'ice', 'wood');
  k.gob(31, 0, 'h');
  k.gob(31, t2);
});

export const LEVELS = L;
export const BOSS_LEVEL = L.length - 1;
