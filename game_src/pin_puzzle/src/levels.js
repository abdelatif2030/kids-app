// The twelve levels of «اسحب الدبوس». Each tower: s = slot (L left, C centre, R right), c = candies per chamber from the TOP chamber down,
// d = what is under a side tower: 'jar' (a wooden ramp into the jar, default), 'lava' (nothing: the candies fall into the lava) or
// 'trap' (the ramp is held up by its own pin: pulling that pin sends the candies into the lava). The centre tower always drops into the jar.
// slack = how many candies may be missing from the goal.
export const SPECS = [
  { t: [{ s: 'C', c: [8] }, { s: 'L', c: [6], d: 'lava' }], slack: 0 },
  { t: [{ s: 'L', c: [6], d: 'lava' }, { s: 'C', c: [10] }, { s: 'R', c: [6], d: 'lava' }], slack: 1 },
  { t: [{ s: 'C', c: [6, 6] }, { s: 'R', c: [8], d: 'lava' }], slack: 0 },
  { t: [{ s: 'L', c: [8], d: 'lava' }, { s: 'C', c: [8] }, { s: 'R', c: [8] }], slack: 2 },
  { t: [{ s: 'L', c: [8], d: 'trap' }, { s: 'C', c: [8] }, { s: 'R', c: [6], d: 'lava' }], slack: 0 },
  { t: [{ s: 'L', c: [6, 6] }, { s: 'C', c: [6, 8], flip: 1 }, { s: 'R', c: [8], d: 'lava' }], slack: 2 },
  { t: [{ s: 'L', c: [8], d: 'lava' }, { s: 'C', c: [7, 7] }, { s: 'R', c: [8], d: 'trap' }], slack: 0 },
  { t: [{ s: 'L', c: [7, 7], d: 'trap' }, { s: 'C', c: [8] }, { s: 'R', c: [8], d: 'lava' }], slack: 0 },
  { t: [{ s: 'L', c: [8], d: 'lava' }, { s: 'C', c: [6, 6] }, { s: 'R', c: [6, 6], d: 'trap' }], slack: 0 },
  { t: [{ s: 'L', c: [6, 6], d: 'trap' }, { s: 'C', c: [6, 6], flip: 1 }, { s: 'R', c: [8], d: 'lava' }], slack: 0 },
  { t: [{ s: 'L', c: [5, 5] }, { s: 'C', c: [5, 5] }, { s: 'R', c: [5, 5], d: 'trap' }], slack: 2 },
  { t: [{ s: 'L', c: [5, 5], d: 'trap' }, { s: 'C', c: [6, 6] }, { s: 'R', c: [8], d: 'lava' }], slack: 0 },
];
