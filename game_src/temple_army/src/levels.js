// Temple Army levels. Maps are built from corridors (a tiny builder), then checked by the tests (solvable, robot wins).
// Legend:  # wall  . floor  S start  E exit  $ coin  ^ spike trap  1-9 gates (see `gates`)  k K j cages (+6 +12 +25)
//          a b c levers   A B C saws (lever a destroys saw A...)   e f g enemy hordes (see `hordes`)   X brute   Y golem
function build(W, H, fn) {
  const g = Array.from({ length: H }, () => Array(W).fill('#'));
  const f = (x0, y0, x1, y1) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) g[y][x] = '.'; };
  const s = (x, y, ch) => { g[y][x] = ch; };
  // a row of gates across a vertical corridor: gate tiles at (x..x+n-1, y), floor rooms above and below
  const gateH = (x, y, chars) => { f(x, y - 1, x + chars.length - 1, y + 1); chars.split('').forEach((c, i) => s(x + i, y, c)); };
  // a column of gates across a horizontal corridor
  const gateV = (x, y, chars) => { f(x - 1, y, x + 1, y + chars.length - 1); chars.split('').forEach((c, i) => s(x, y + i, c)); };
  fn({ f, s, gateH, gateV });
  return g.map((r) => r.join(''));
}

const L1 = build(11, 20, ({ f, s, gateH }) => {
  f(3, 16, 7, 18); s(5, 17, 'S');
  f(5, 1, 5, 15);
  gateH(4, 12, '123');
  f(2, 14, 5, 14); s(2, 14, 'K'); s(3, 14, '$');
  f(5, 8, 8, 8); f(8, 5, 8, 8); s(8, 5, 'k'); s(8, 7, '$');
  gateH(4, 5, '456');
  s(5, 3, 'f'); s(5, 1, 'E'); s(5, 9, '$'); s(5, 10, '$'); s(5, 16, '$');
});

const L2 = build(14, 20, ({ f, s, gateH, gateV }) => {
  f(1, 15, 3, 17); s(2, 16, 'S');
  f(3, 16, 11, 16); s(6, 16, '^'); s(9, 16, '^');
  f(8, 17, 8, 18); s(8, 18, 'K');
  f(11, 6, 11, 16); s(11, 13, '^');
  f(8, 11, 11, 11); s(10, 11, '^'); s(8, 11, 'K'); s(9, 11, '$');
  gateH(10, 8, '123');
  f(11, 5, 11, 7);
  f(2, 5, 11, 5); s(9, 5, '^');
  gateV(6, 4, '456');
  s(4, 5, '$'); s(3, 5, '^');
  f(2, 1, 2, 5); s(2, 3, 'f'); s(2, 1, 'E');
  s(11, 14, '$'); s(5, 16, '$');
});

const L3 = build(15, 21, ({ f, s, gateH }) => {
  f(6, 17, 8, 19); s(7, 18, 'S');
  f(7, 10, 7, 17);
  gateH(6, 14, '123');
  f(2, 12, 7, 12); s(2, 12, 'K'); s(4, 12, '^'); s(3, 12, '$');
  f(7, 12, 12, 12); s(12, 12, 'K'); s(10, 12, '$');
  s(7, 10, 'f');
  f(3, 3, 11, 9); s(7, 5, 'X'); s(5, 8, '$'); s(9, 8, '$');
  f(7, 1, 7, 2); s(7, 1, 'E');
});

const L4 = build(16, 21, ({ f, s, gateH }) => {
  f(1, 17, 3, 19); s(2, 18, 'S');
  f(3, 18, 13, 18); s(7, 18, '^');
  f(9, 14, 9, 17); s(9, 14, 'a'); s(9, 16, '$');
  f(13, 8, 13, 18); s(13, 15, 'A');
  gateH(12, 11, '123');
  f(11, 8, 11, 9); s(11, 9, 'b');
  f(3, 7, 13, 7); s(8, 7, 'B'); s(5, 7, 'f');
  f(3, 1, 3, 7); s(3, 1, 'E');
  gateH(2, 4, '456');
  f(6, 3, 6, 6); s(6, 3, 'K'); s(6, 5, '$');
  f(5, 16, 5, 17); s(5, 16, 'K'); f(11, 16, 11, 17); s(11, 16, 'K');
  s(13, 9, '$'); s(13, 17, '$');
});

const L5 = build(17, 23, ({ f, s, gateH }) => {
  f(7, 19, 9, 21); s(8, 20, 'S');
  f(8, 13, 8, 19); s(8, 17, '^');
  f(2, 13, 14, 13); s(4, 13, '^'); s(12, 13, '^');
  f(2, 8, 2, 13); s(2, 10, 'A'); s(2, 8, 'j');
  f(14, 9, 14, 13); s(14, 9, 'a'); s(14, 11, '$');
  f(8, 4, 8, 12);
  gateH(7, 10, '123');
  s(8, 8, 'f');
  f(4, 6, 8, 6); s(4, 6, 'K'); s(6, 6, '^');
  f(8, 6, 12, 6); s(12, 6, 'k'); s(10, 6, '$');
  f(7, 3, 9, 5); s(7, 4, '4'); s(8, 4, '5'); s(9, 4, '6');
  f(8, 1, 8, 2); s(8, 1, 'E');
  s(6, 13, '$'); s(10, 13, '$'); s(8, 15, '$');
});

const L6 = build(17, 23, ({ f, s, gateH }) => {
  f(7, 19, 9, 21); s(8, 20, 'S');
  f(8, 11, 8, 19);
  gateH(7, 17, '123');
  gateH(7, 13, '456');
  f(3, 15, 8, 15); s(3, 15, 'K'); s(5, 15, '$'); s(8, 15, '^');
  f(9, 15, 13, 15); s(13, 15, 'j'); s(11, 15, 'e'); s(10, 15, '$');
  s(8, 11, 'f');
  f(2, 2, 14, 10); s(8, 6, 'Y'); s(4, 8, '$'); s(12, 8, '$');
  s(8, 1, 'E');
});

export const LEVELS = [
  { id: 1, name: ['بوابة الطحالب', 'Mossy Gate'], theme: { sky: 0x1d3a2a, fog: 0x2c5a3e, wall: 0x58704a, floor: 0x8a8a6a, accent: 0x7af09a }, map: L1,
    start: 5, gates: { 1: ['x', 2], 2: ['+', 4], 3: ['-', 3], 4: ['/', 2], 5: ['x', 2], 6: ['+', 12] }, hordes: { f: 40 }, par: [30, 60] },
  { id: 2, name: ['قاعة الأشواك', 'Spike Hall'], theme: { sky: 0x1a3a40, fog: 0x2a5a60, wall: 0x4a6a6a, floor: 0x8a8870, accent: 0x6ae0e8 }, map: L2,
    start: 6, gates: { 1: ['x', 2], 2: ['+', 8], 3: ['/', 2], 4: ['-', 6], 5: ['x', 3], 6: ['+', 10] }, hordes: { f: 70 }, par: [70, 140] },
  { id: 3, name: ['عرين الوحش', "Brute's Den"], theme: { sky: 0x2a2040, fog: 0x4a3a6a, wall: 0x6a5a7a, floor: 0x8a8078, accent: 0xc89af0 }, map: L3,
    start: 8, gates: { 1: ['x', 3], 2: ['-', 6], 3: ['+', 10] }, hordes: { f: 20 }, boss: { kind: 'brute', hp: 90, atk: 5 }, par: [25, 45] },
  { id: 4, name: ['ممرات المناشير', 'Saw Corridors'], theme: { sky: 0x40281a, fog: 0x6a4a2a, wall: 0x7a5a3a, floor: 0x9a8a68, accent: 0xffb050 }, map: L4,
    start: 6, gates: { 1: ['x', 2], 2: ['+', 10], 3: ['/', 3], 4: ['x', 2], 5: ['-', 8], 6: ['+', 20] }, hordes: { f: 45 }, par: [50, 100] },
  { id: 5, name: ['المعبد المتشابك', 'Vine Temple'], theme: { sky: 0x1a2a40, fog: 0x2a4a6a, wall: 0x4a6a58, floor: 0x80907a, accent: 0x70c8ff }, map: L5,
    start: 6, gates: { 1: ['x', 2], 2: ['x', 3], 3: ['/', 2], 4: ['+', 25], 5: ['x', 2], 6: ['-', 10] }, hordes: { f: 90 }, par: [50, 110] },
  { id: 6, name: ['عرين العملاق', 'Golem Arena'], theme: { sky: 0x3a2a14, fog: 0x6a5020, wall: 0x7a6a4a, floor: 0xa09070, accent: 0xffd23a }, map: L6,
    start: 6, gates: { 1: ['x', 2], 2: ['+', 12], 3: ['/', 2], 4: ['x', 3], 5: ['x', 2], 6: ['-', 15] }, hordes: { e: 12, f: 60 }, boss: { kind: 'golem', hp: 560, atk: 12 }, par: [40, 100] },
];
