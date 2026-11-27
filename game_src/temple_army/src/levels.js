// Guardians of Karnak levels — each level is a real Egyptian temple (Karnak, Philae, Edfu, Abu Simbel, Luxor, Dendera).
// Maps are built from corridors (a tiny builder), then checked by the tests (solvable, robot wins).
// Legend:  # wall  . floor  S start  E exit  $ coin  ^ spike trap  1-9 gates (see `gates`)  k K j cages (+6 +12 +25)
//          a b c levers   A B C saws (lever a destroys saw A...)   e f g enemy hordes (see `hordes`)   X brute   Y golem
//          T staircase (only in a `floors: [ground, upper]` level: stepping on it swaps the active floor)
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

// Phase 2G — Karnak with TWO floors. The engine is a flat grid, so the honest smallest
// "2-floor" is two stacked maps in one level def (`floors: [ground, upper]`), joined by a
// staircase tile `T`: stepping on it carries the whole army (and coins/time) to the matching
// staircase on the other floor. Each floor keeps its own gates/cages state. The exit is only
// on the upper floor, so the campaign of this temple is: grow downstairs, climb, finish upstairs.
const L7_GROUND = build(13, 20, ({ f, s, gateH }) => {
  f(5, 16, 7, 18); s(6, 17, 'S');
  f(6, 3, 6, 15);
  f(2, 14, 6, 14); s(2, 14, 'K'); s(3, 14, '$'); s(4, 14, '$'); // freed friends BEFORE the fork: the kind path
  gateH(5, 12, '123');
  s(6, 10, '$');
  s(6, 9, 'f'); // a small friendly-rival crowd guards the way up
  f(6, 8, 10, 8); f(9, 7, 10, 9); s(10, 8, 'k'); s(9, 7, '$');
  f(5, 2, 7, 4); s(6, 3, 'T'); s(6, 5, '$'); // the grand staircase
});

const L7_UPPER = build(13, 20, ({ f, s, gateH }) => {
  f(5, 15, 7, 17); s(6, 16, 'T'); // you arrive here from the ground floor
  f(6, 4, 6, 14);
  gateH(5, 11, '456');
  s(6, 9, '$');
  f(6, 8, 10, 8); f(9, 7, 10, 9); s(10, 8, 'j'); s(9, 7, '$');
  s(6, 6, 'g');
  s(6, 5, '$');
  f(5, 1, 7, 3); s(6, 2, 'E');
});

// Phase 2G — Procession finale. A separate combat *mode* would be disproportionate in this
// engine (the crowd-follow system IS a march), so the procession is a finale LEVEL flagged
// `procession: true`: a wide festival avenue to the Karnak gate with NO hordes, NO traps,
// NO saws and NO boss — every gate grows the crowd, cages are friends joining the parade,
// coins are celebration pickups. It cannot be lost: there is simply nothing that can hurt
// the army on this map. Stars come from how many marchers reach the temple (collection).
const L8 = build(15, 22, ({ f, s, gateH }) => {
  f(6, 18, 8, 20); s(7, 19, 'S');
  f(6, 1, 8, 17);
  s(7, 16, '$'); s(6, 15, '$'); s(8, 15, '$');
  gateH(6, 14, '123');
  f(3, 11, 5, 12); s(3, 11, 'k'); s(4, 12, '$'); // friends join the procession
  f(9, 11, 11, 12); s(11, 11, 'K'); s(10, 12, '$');
  s(7, 10, '$');
  gateH(6, 8, '456');
  s(6, 5, '$'); s(8, 5, '$'); s(7, 3, '$');
  s(7, 1, 'E');
});

export const LEVELS = [
  { id: 1, name: ['معبد الكرنك', 'Karnak Temple'], theme: { sky: 0x87b8d8, fog: 0xe8d8a8, wall: 0xd9b672, floor: 0xe8cf94, accent: 0xffd23a }, map: L1,
    start: 5, gates: { 1: ['x', 2], 2: ['+', 4], 3: ['-', 3], 4: ['/', 2], 5: ['x', 2], 6: ['+', 12] }, hordes: { f: 40 }, par: [30, 60] },
  { id: 2, name: ['معبد فيلة', 'Philae Temple'], theme: { sky: 0x7ab8d8, fog: 0xa8d0d8, wall: 0xc8a878, floor: 0xdcc498, accent: 0x6ae0e8 }, map: L2,
    start: 6, gates: { 1: ['x', 2], 2: ['+', 8], 3: ['/', 2], 4: ['-', 6], 5: ['x', 3], 6: ['+', 10] }, hordes: { f: 70 }, par: [70, 140] },
  { id: 3, name: ['معبد إدفو', 'Edfu Temple'], theme: { sky: 0xd8a860, fog: 0xe0c090, wall: 0xb08a5a, floor: 0xd8bc88, accent: 0xffd23a }, map: L3,
    start: 8, gates: { 1: ['x', 3], 2: ['-', 6], 3: ['+', 10] }, hordes: { f: 20 }, boss: { kind: 'brute', hp: 90, atk: 5 }, par: [25, 45] },
  { id: 4, name: ['معبد أبو سمبل', 'Abu Simbel Temple'], theme: { sky: 0xe8b060, fog: 0xe8cc98, wall: 0xa87a4a, floor: 0xd0b080, accent: 0xffb050 }, map: L4,
    start: 6, gates: { 1: ['x', 2], 2: ['+', 10], 3: ['/', 3], 4: ['x', 2], 5: ['-', 8], 6: ['+', 20] }, hordes: { f: 45 }, par: [50, 100] },
  { id: 5, name: ['معبد الأقصر', 'Luxor Temple'], theme: { sky: 0x6a5a9a, fog: 0x9a86b8, wall: 0x9a7a5a, floor: 0xc8a878, accent: 0xffd23a }, map: L5,
    start: 6, gates: { 1: ['x', 2], 2: ['x', 3], 3: ['/', 2], 4: ['+', 25], 5: ['x', 2], 6: ['-', 10] }, hordes: { f: 90 }, par: [50, 110] },
  { id: 6, name: ['معبد دندرة', 'Dendera Temple'], theme: { sky: 0x5a7ab0, fog: 0x8aa0c0, wall: 0x8a7a62, floor: 0xb8a888, accent: 0xffe080 }, map: L6,
    start: 6, gates: { 1: ['x', 2], 2: ['+', 12], 3: ['/', 2], 4: ['x', 3], 5: ['x', 2], 6: ['-', 15] }, hordes: { e: 12, f: 60 }, boss: { kind: 'golem', hp: 560, atk: 12 }, par: [40, 100] },
  { id: 7, name: ['الكرنك من طابقين', 'Karnak: Two Floors'], theme: { sky: 0x8fc0dc, fog: 0xe8d8a8, wall: 0xd9b672, floor: 0xe8cf94, accent: 0xffd23a }, map: L7_GROUND, floors: [L7_GROUND, L7_UPPER],
    start: 5, gates: { 1: ['x', 2], 2: ['+', 8], 3: ['/', 2], 4: ['x', 3], 5: ['+', 15], 6: ['-', 6] }, hordes: { f: 25, g: 40 }, par: [15, 45] },
  { id: 8, name: ['موكب الحرّاس', 'Guardians Procession'], theme: { sky: 0x9fd0e8, fog: 0xf0dfae, wall: 0xd9b672, floor: 0xecd69c, accent: 0xffb03a }, map: L8, procession: true,
    start: 6, gates: { 1: ['+', 6], 2: ['x', 2], 3: ['+', 10], 4: ['x', 2], 5: ['+', 15], 6: ['x', 3] }, hordes: {}, par: [20, 50] },
];

