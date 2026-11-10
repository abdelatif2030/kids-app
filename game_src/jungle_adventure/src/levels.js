// The three levels of «مغامرة الأدغال», built with a tiny builder so gaps, steps and shafts stay readable.
// Grid: x = column (the girl runs to the right), y = row (0 = top, ROWS-1 = bottom). Characters:
//   '#' solid ground/stone   '=' thin ledge you can jump up through   '^' spikes
//   'o' coin   'R' jade relic   'b' beetle   'v' bat
//   'S' shield   'M' coin magnet   'F' speed boots   'H' hourglass (+time)
//   'C' checkpoint flag   'T' totem (end of level)   'A' sun altar (end of the last level)
export const ROWS = 14;

class Builder {
  constructor(width) {
    this.w = width;
    this.g = Array.from({ length: ROWS }, () => Array(width).fill(' '));
    this.hints = [];
  }
  set(x, y, c) { if (x >= 0 && x < this.w && y >= 0 && y < ROWS) this.g[y][x] = c; return this; }
  fill(x0, x1, y0, y1, c = '#') { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) this.set(x, y, c); return this; }
  /** Solid ground from x0 to x1 whose top is row `top`. */
  ground(x0, x1, top = 10) { return this.fill(x0, x1, top, ROWS - 1); }
  ledge(x0, x1, y) { return this.fill(x0, x1, y, y, '='); }
  coins(x0, x1, y) { for (let x = x0; x <= x1; x++) this.set(x, y, 'o'); return this; }
  /** Coins along a jump arc starting at x0 on row y. */
  arc(x0, y, n = 5) { for (let i = 0; i < n; i++) this.set(x0 + i, y - Math.round(Math.sin((i / (n - 1)) * Math.PI) * 2), 'o'); return this; }
  spikes(x0, x1, top) { return this.fill(x0, x1, top - 1, top - 1, '^'); }
  /** A wall-kick shaft: a hanging stone column at `col` (rows 0..colBottom) and a tall block to its right. */
  shaft(col, colBottom, blockX0, blockX1, blockTop) {
    this.fill(col, col, 0, colBottom);
    return this.ground(blockX0, blockX1, blockTop);
  }
  hint(x, key) { this.hints.push({ x, key }); return this; }
  done(def) { return { ...def, width: this.w, rows: this.g.map((r) => r.join('')), hints: this.hints }; }
}

function trail() {
  const b = new Builder(222);
  b.ground(0, 28).coins(8, 14, 9).set(22, 9, 'b').hint(2, 'tap').hint(16, 'stomp');
  b.arc(27, 8, 6);
  b.ground(31, 50).set(35, 9, 'C').set(44, 9, 'b').coins(38, 42, 9);
  b.ground(51, 72, 8).hint(47, 'hold').ledge(56, 61, 5).coins(56, 61, 4).set(59, 2, 'R');
  b.arc(72, 6, 5);
  b.ground(76, 95, 9).set(80, 7, 'M').coins(82, 94, 8).set(88, 8, 'b').set(93, 8, 'b');
  b.ground(98, 120, 9).set(100, 8, 'C').spikes(108, 109, 9).set(115, 6, 'H').coins(111, 114, 8);
  b.ground(121, 140, 7).ledge(128, 133, 4).coins(128, 132, 3).set(133, 2, 'R');
  b.ground(141, 160).set(143, 8, 'F').set(148, 9, 'b').set(154, 9, 'b').coins(144, 147, 9);
  b.ground(164, 185).set(166, 9, 'C').coins(170, 180, 9).set(176, 9, 'S');
  b.arc(185, 8, 5).set(187, 6, 'R');
  b.ground(189, 221).set(198, 9, 'v').coins(201, 207, 9).hint(204, 'totem').set(212, 9, 'T');
  return b.done({ id: 'trail', theme: 'jungle', time: 60, ar: 'درب الأدغال', en: 'Jungle Trail' });
}

function ruins() {
  const b = new Builder(222);
  b.ground(0, 30).coins(6, 12, 9).set(18, 9, 'b').spikes(25, 26, 10).hint(2, 'go');
  b.ground(33, 55).set(35, 9, 'C').set(42, 9, 'v').coins(36, 40, 9).coins(44, 50, 9);
  // shaft 1: run under the hanging column, then kick up between it and the tall block
  b.shaft(53, 7, 56, 75, 3).hint(48, 'wall').set(54, 5, 'R').coins(54, 55, 2);
  b.coins(58, 73, 2);
  b.ground(76, 90, 6).coins(78, 82, 5).set(84, 5, 'b');
  b.ground(91, 110, 9).set(93, 8, 'C').set(96, 6, 'M').spikes(101, 102, 9).coins(104, 109, 8);
  b.arc(110, 7, 5);
  b.ground(114, 135, 9).set(120, 8, 'v').set(126, 8, 'v').coins(116, 131, 8);
  // shaft 2
  b.shaft(133, 6, 136, 150, 2).set(134, 4, 'R').set(142, 1, 'H').coins(138, 148, 1);
  b.ground(151, 165, 6).coins(153, 163, 5);
  b.ground(166, 190).set(168, 9, 'C').set(172, 9, 'S').spikes(178, 179, 10).set(185, 9, 'b');
  b.ledge(180, 184, 7).coins(180, 183, 6).set(184, 5, 'R');
  b.ground(193, 221).coins(195, 205, 9).hint(204, 'totem').set(212, 9, 'T');
  return b.done({ id: 'ruins', theme: 'ruins', time: 70, ar: 'الأطلال الغارقة', en: 'Sunken Ruins' });
}

function temple() {
  const b = new Builder(200);
  b.ground(0, 25).coins(6, 12, 9).set(15, 9, 'b').set(20, 9, 'b').hint(2, 'go');
  b.arc(25, 7, 5);
  b.ground(29, 45, 9).set(31, 8, 'C').set(37, 8, 'v').spikes(42, 43, 9).coins(32, 36, 8);
  b.ground(46, 60, 7).ledge(50, 55, 4).coins(50, 55, 3).set(53, 2, 'R');
  b.arc(60, 5, 5);
  b.ground(64, 85, 8).set(66, 7, 'F').set(72, 7, 'b').set(76, 7, 'b').coins(68, 80, 7);
  b.shaft(83, 5, 86, 100, 2).hint(78, 'wall').set(84, 3, 'R').coins(88, 98, 1);
  b.ground(101, 115, 5).coins(103, 113, 4);
  b.ground(116, 135, 9).set(118, 8, 'C').set(120, 8, 'S').set(125, 8, 'v').set(131, 8, 'v').coins(121, 134, 8);
  b.ground(139, 160, 9).set(141, 8, 'M').spikes(146, 147, 9).spikes(152, 153, 9).set(156, 6, 'H').coins(142, 158, 8);
  b.arc(160, 7, 5).set(162, 5, 'R');
  b.ground(164, 199).set(166, 9, 'C').set(170, 9, 'b').set(175, 9, 'b').set(180, 9, 'b').coins(168, 184, 9).hint(184, 'altar').set(190, 9, 'A');
  return b.done({ id: 'temple', theme: 'temple', time: 70, ar: 'معبد الشمس', en: 'Sun Temple' });
}

export const LEVELS = [trail(), ruins(), temple()];
