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
  return b.done({ id: 'trail', theme: 'jungle', time: 60, ar: 'درب الأدغال', en: 'Jungle Trail', relicName: { ar: 'حجر درب الفيوم', en: 'Fayoum Trail Stone' } });
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
  return b.done({ id: 'ruins', theme: 'ruins', time: 70, ar: 'الأطلال الغارقة', en: 'Sunken Ruins', relicName: { ar: 'لوح الأطلال الغارقة', en: 'Sunken Ruins Tablet' } });
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
  return b.done({ id: 'temple', theme: 'temple', time: 70, ar: 'معبد الشمس', en: 'Sun Temple', relicName: { ar: 'عين الشمس الذهبية', en: 'Golden Sun Eye' } });
}

// --- Phase 2E (Batch F): nine real maps. Levels 4–6 finish the Fayoum island (Wadi El Rayan falls, Qasr Qarun,
// the Wadi El Hitan fossil terraces); levels 7–12 are the Siwa island (oasis, salt lake, Shali fortress,
// Cleopatra spring, palm groves, and the Great Oracle Temple finale). Every map is its own layout — the old
// remix() copies of maps 1–3 are gone. Same proven grammar as maps 1–3: gaps of 2–3 tiles, steps of at most
// 3 rows, wall-kick shafts for the big climbs, exactly 3 jade relics and at least 2 flags per map.

function falls() {
  // Waterfall climb: the path climbs terrace after terrace beside the Wadi El Rayan falls, drops to the
  // shaft pool, wall-kicks up the falls shaft, then eases back down to the totem.
  const b = new Builder(226);
  b.ground(0, 26).coins(6, 12, 9).set(20, 9, 'C').set(24, 9, 'b').hint(2, 'go');
  b.arc(26, 8, 5);
  b.ground(30, 48, 8).set(34, 7, 'C').coins(33, 40, 7).ledge(38, 44, 5).coins(38, 44, 4).set(42, 3, 'R');
  b.arc(48, 6, 5);
  b.ground(52, 70, 6).coins(55, 64, 5).set(62, 5, 'v').set(66, 5, 'b');
  b.ground(74, 92, 9).set(76, 8, 'C').coins(77, 88, 8);
  b.shaft(90, 6, 93, 110, 2).hint(84, 'wall').set(91, 4, 'R').coins(95, 108, 1);
  b.ground(111, 128, 5).coins(114, 125, 4).set(122, 4, 'b');
  b.ground(132, 150, 7).set(134, 6, 'C').ledge(138, 144, 4).coins(138, 144, 3).set(142, 2, 'R').spikes(146, 147, 7);
  b.ground(154, 172, 9).set(160, 7, 'M').coins(157, 168, 8);
  b.ground(176, 194).set(178, 9, 'C').coins(182, 192, 9).set(190, 9, 'S');
  b.arc(194, 8, 5);
  b.ground(198, 225).coins(202, 212, 9).set(206, 9, 'b').set(216, 9, 'v').hint(218, 'totem').set(220, 9, 'T');
  return b.done({ id: 'falls', theme: 'jungle', time: 85, ar: 'شلالات وادي الريان', en: 'Wadi El Rayan Falls', relicName: { ar: 'قطرة الشلال البلورية', en: 'Crystal Falls Drop' } });
}

function qarun() {
  // Temple gate run: a fast, mostly flat run through the gates of Qasr Qarun — two wall-kick gate shafts,
  // spike strips and beetle guards between them.
  const b = new Builder(200);
  b.ground(0, 28).coins(6, 13, 9).set(18, 9, 'b').set(24, 9, 'b').hint(2, 'go');
  b.arc(28, 8, 5);
  b.ground(32, 52, 9).set(34, 8, 'C').coins(36, 50, 8).spikes(40, 41, 9).set(48, 6, 'H');
  b.shaft(50, 6, 53, 70, 3).hint(44, 'wall').set(51, 4, 'R').coins(55, 68, 2).set(56, 2, 'C');
  b.ground(71, 90, 6).coins(74, 86, 5).set(84, 5, 'b');
  b.arc(90, 4, 5);
  b.ground(94, 114, 8).set(96, 7, 'C').set(100, 6, 'M').coins(98, 112, 7).set(104, 7, 'v').set(110, 7, 'v');
  b.ground(118, 138, 9).set(121, 7, 'F').coins(120, 136, 8).spikes(124, 125, 9);
  b.ledge(120, 126, 6).coins(120, 126, 5).set(124, 4, 'R');
  b.shaft(136, 6, 139, 156, 2).hint(130, 'wall').set(137, 3, 'R').coins(141, 148, 1).set(152, 0, 'H');
  b.ground(157, 176, 6).set(159, 5, 'C').coins(160, 173, 5).set(170, 5, 'b');
  b.arc(176, 4, 5);
  b.ground(180, 199, 9).coins(183, 193, 8).hint(186, 'totem').set(192, 8, 'T');
  return b.done({ id: 'qarun', theme: 'temple', time: 80, ar: 'بوابة قصر قارون', en: 'Qasr Qarun Gate', relicName: { ar: 'مفتاح قصر قارون', en: 'Key of Qasr Qarun' } });
}

function hitan() {
  // Fossil dig terraces: the path steps down terrace by terrace into the Wadi El Hitan dig, climbs one
  // shaft out of the dig pit, and finishes along the whale-fossil ridge.
  const b = new Builder(206);
  b.ground(0, 24, 7).coins(5, 12, 6).set(18, 6, 'b').hint(2, 'go');
  b.ground(28, 47, 9).set(30, 8, 'C').coins(32, 45, 8).spikes(42, 43, 9);
  b.arc(47, 7, 5);
  b.ground(51, 70).coins(54, 66, 9).ledge(56, 62, 7).coins(56, 62, 6).set(60, 5, 'R').set(64, 9, 'b');
  b.ground(74, 92, 8).set(76, 7, 'C').set(80, 6, 'S').coins(78, 90, 7).set(86, 7, 'v');
  b.arc(92, 6, 5);
  b.ground(96, 114, 9).coins(99, 112, 8).set(108, 8, 'b');
  b.shaft(112, 6, 115, 132, 2).hint(104, 'wall').set(113, 4, 'R').coins(117, 130, 1);
  b.ground(133, 152, 5).set(135, 4, 'C').coins(136, 149, 4).set(146, 4, 'b');
  b.ground(156, 175, 8).set(162, 6, 'M').ledge(160, 166, 5).coins(160, 166, 4).set(164, 3, 'R').coins(168, 173, 7).spikes(170, 171, 8);
  b.arc(175, 6, 5);
  b.ground(179, 205).set(181, 9, 'C').coins(184, 198, 9).set(190, 9, 'b').set(196, 9, 'b').hint(197, 'totem').set(199, 9, 'T');
  return b.done({ id: 'hitan', theme: 'ruins', time: 85, ar: 'مدرجات وادي الحيتان', en: 'Wadi El Hitan Terraces', relicName: { ar: 'أحفورة حوت وادي الحيتان', en: 'Wadi El Hitan Whale Fossil' } });
}

function oasis() {
  // Palm maze: a zig-zag of palm ledges climbs up and down over the Siwa oasis floor — every stretch has a
  // low ledge and a high ledge, and the relics sit on the high ones.
  const b = new Builder(204);
  b.ground(0, 30).coins(6, 14, 9).set(22, 9, 'b').hint(2, 'go');
  b.ledge(8, 14, 7).coins(8, 14, 6).ledge(16, 22, 4).coins(16, 22, 3).set(20, 2, 'R').set(26, 9, 'C');
  b.arc(30, 8, 5);
  b.ground(34, 56, 9).coins(37, 50, 8).set(48, 8, 'b').ledge(38, 44, 6).coins(38, 44, 5).ledge(46, 52, 3).coins(46, 52, 2);
  b.ground(60, 82).set(62, 9, 'C').coins(64, 78, 9).spikes(72, 73, 10).ledge(66, 72, 7).coins(66, 72, 6).set(70, 5, 'R').set(78, 9, 'v');
  b.arc(82, 8, 5);
  b.ground(86, 106, 8).set(90, 6, 'F').coins(89, 103, 7).set(98, 7, 'b').ledge(92, 98, 5).coins(92, 98, 4);
  b.ground(110, 132, 9).set(112, 8, 'C').coins(114, 129, 8).set(124, 8, 'b').set(129, 8, 'b');
  b.ledge(116, 122, 6).coins(116, 122, 5).ledge(124, 130, 3).coins(124, 130, 2).set(128, 1, 'R');
  b.arc(132, 7, 5);
  b.ground(136, 158).set(142, 8, 'M').coins(139, 154, 9).set(150, 9, 'S');
  b.ground(162, 182, 9).set(164, 8, 'C').coins(166, 179, 8).set(176, 8, 'v');
  b.arc(182, 7, 5);
  b.ground(186, 203).coins(189, 198, 9).hint(194, 'totem').set(197, 9, 'T');
  return b.done({ id: 'oasis', theme: 'oasis', time: 85, ar: 'واحة سيوة', en: 'Siwa Oasis', relicName: { ar: 'تمرة الواحة الذهبية', en: 'Golden Oasis Date' } });
}

function salt() {
  // Salt-lake flats: long, calm white flats with wide views — the gentlest Siwa map, with the relics on
  // little salt ledges above the flats.
  const b = new Builder(214);
  b.ground(0, 34).coins(6, 16, 9).set(26, 9, 'b').hint(2, 'go');
  b.arc(34, 8, 5);
  b.ground(38, 66).set(40, 9, 'C').coins(43, 60, 9).spikes(52, 53, 10).set(58, 7, 'H');
  b.ground(70, 96, 9).coins(73, 90, 8).ledge(76, 84, 6).coins(76, 84, 5).set(82, 4, 'R').set(88, 8, 'b');
  b.arc(96, 7, 5);
  b.ground(100, 126).set(102, 9, 'C').coins(105, 122, 9).set(116, 9, 'v').set(120, 9, 'b');
  b.ground(130, 156, 8).set(136, 6, 'M').coins(133, 150, 7).ledge(140, 148, 5).coins(140, 148, 4).set(146, 3, 'R').spikes(152, 153, 8);
  b.arc(156, 6, 5);
  b.ground(160, 186).set(162, 9, 'C').coins(165, 182, 9).set(174, 9, 'b').set(180, 9, 'S');
  b.ground(190, 213, 9).coins(193, 206, 8).ledge(196, 202, 6).coins(196, 202, 5).set(200, 4, 'R').set(204, 8, 'v').hint(203, 'totem').set(207, 8, 'T');
  return b.done({ id: 'salt', theme: 'oasis', time: 85, ar: 'بحيرة الملح', en: 'Salt Lake Flats', relicName: { ar: 'بلورة ملح سيوة', en: 'Siwa Salt Crystal' } });
}

function shali() {
  // Shali fortress: two tall wall-kick shafts climb the mud-brick fortress walls, with guarded courtyards
  // between them.
  const b = new Builder(210);
  b.ground(0, 26).coins(6, 13, 9).set(20, 9, 'b').hint(2, 'go');
  b.shaft(24, 6, 27, 44, 3).hint(16, 'wall').set(25, 4, 'R').coins(29, 42, 2).set(30, 2, 'C');
  b.ground(45, 64, 6).coins(48, 61, 5).set(58, 5, 'b');
  b.arc(64, 4, 5);
  b.ground(68, 88, 8).set(70, 7, 'C').coins(72, 85, 7).spikes(80, 81, 8).set(84, 7, 'v');
  b.ground(92, 112, 9).set(96, 7, 'F').coins(95, 109, 8).set(104, 8, 'b').ledge(98, 104, 6).coins(98, 104, 5).set(102, 4, 'R');
  b.shaft(110, 5, 113, 130, 2).hint(104, 'wall').set(111, 3, 'R').coins(115, 128, 1).set(124, 0, 'H');
  b.ground(131, 150, 5).set(133, 4, 'C').coins(134, 147, 4).set(144, 4, 'b');
  b.arc(150, 3, 5);
  b.ground(154, 174, 7).set(160, 5, 'M').coins(157, 171, 6).spikes(164, 165, 7);
  b.ground(178, 209, 9).set(180, 8, 'C').coins(183, 200, 8).set(190, 8, 'b').set(196, 8, 'b').hint(197, 'totem').set(203, 8, 'T');
  return b.done({ id: 'shali', theme: 'temple', time: 90, ar: 'قلعة شالي', en: 'Shali Fortress', relicName: { ar: 'مفتاح قلعة شالي', en: 'Shali Fortress Key' } });
}

function spring() {
  // Cleopatra spring: island-hop ponds — a chain of small palm islands over the spring water, no island
  // longer than a breath, every gap a short hop.
  const b = new Builder(216);
  b.ground(0, 16).coins(4, 10, 9).hint(2, 'go');
  b.arc(16, 8, 5);
  b.ground(20, 32, 9).set(22, 8, 'C').coins(22, 30, 8);
  b.ground(36, 48).coins(38, 46, 9).set(44, 9, 'b');
  b.arc(48, 8, 5);
  b.ground(52, 64, 8).coins(54, 62, 7).ledge(56, 61, 5).coins(56, 61, 4).set(59, 3, 'R');
  b.ground(68, 80, 9).coins(70, 78, 8).set(76, 8, 'v');
  b.ground(84, 97).set(86, 9, 'C').coins(87, 95, 9).spikes(92, 93, 10);
  b.arc(97, 8, 5);
  b.ground(101, 113, 8).coins(103, 111, 7).set(109, 7, 'b');
  b.ground(117, 130, 9).coins(119, 128, 8).ledge(121, 127, 6).coins(121, 127, 5).set(125, 4, 'R');
  b.ground(134, 146).set(136, 9, 'C').coins(137, 144, 9).set(142, 9, 'S');
  b.arc(146, 8, 5);
  b.ground(150, 162, 8).coins(152, 160, 7).set(158, 7, 'v');
  b.ground(166, 179, 9).coins(168, 177, 8).ledge(169, 175, 6).coins(169, 175, 5).set(173, 4, 'R');
  b.ground(183, 215).set(185, 9, 'C').coins(187, 205, 9).set(196, 9, 'b').hint(200, 'totem').set(208, 9, 'T');
  return b.done({ id: 'spring', theme: 'oasis', time: 90, ar: 'عين كليوباترا', en: 'Cleopatra Spring', relicName: { ar: 'لؤلؤة عين كليوباترا', en: 'Cleopatra Spring Pearl' } });
}

function palms() {
  // Palm-grove loops: long grove floors with pairs of palm ledges looping overhead — run under them or
  // hop up and loop along the tops.
  const b = new Builder(208);
  b.ground(0, 30).coins(6, 14, 9).set(24, 9, 'b').hint(2, 'go');
  b.ledge(8, 16, 7).coins(8, 16, 6).ledge(18, 26, 7).coins(18, 26, 6).set(27, 9, 'C');
  b.arc(30, 8, 5);
  b.ground(34, 58, 9).coins(37, 52, 8).set(50, 8, 'b').ledge(38, 46, 6).coins(38, 46, 5).ledge(48, 56, 6).coins(48, 56, 5).set(54, 4, 'R');
  b.ground(62, 86).set(64, 9, 'C').coins(66, 82, 9).spikes(76, 77, 10).ledge(68, 76, 7).coins(68, 76, 6).ledge(78, 85, 7).coins(78, 85, 6);
  b.arc(86, 8, 5);
  b.ground(90, 112, 8).set(95, 6, 'M').coins(93, 109, 7).set(104, 7, 'v').ledge(96, 104, 5).coins(96, 104, 4).set(102, 3, 'R');
  b.ground(116, 140, 9).set(118, 8, 'C').coins(120, 136, 8).set(130, 8, 'b').set(136, 8, 'b').ledge(122, 130, 6).coins(122, 130, 5).ledge(132, 139, 6).coins(132, 139, 5);
  b.arc(140, 7, 5);
  b.ground(144, 168).set(150, 8, 'F').coins(147, 164, 9).ledge(150, 158, 7).coins(150, 158, 6).set(156, 5, 'R').set(162, 9, 'S');
  b.ground(172, 207, 9).set(174, 8, 'C').coins(176, 198, 8).set(190, 8, 'b').hint(194, 'totem').set(201, 8, 'T');
  return b.done({ id: 'palms', theme: 'oasis', time: 90, ar: 'بساتين النخيل', en: 'Palm Groves', relicName: { ar: 'سعفة النخلة الذهبية', en: 'Golden Palm Frond' } });
}

function oracle() {
  // The big finale: the Great Oracle Temple of Siwa — two gate shafts, a guarded treasury court and a
  // long final hall that ends at the sun altar.
  const b = new Builder(230);
  b.ground(0, 28).coins(6, 14, 9).set(20, 9, 'b').set(25, 9, 'b').hint(2, 'go');
  b.arc(28, 8, 5);
  b.ground(32, 54, 9).set(34, 8, 'C').coins(36, 52, 8).set(40, 8, 'v').spikes(44, 45, 9);
  b.shaft(52, 6, 55, 72, 3).hint(46, 'wall').set(53, 4, 'R').coins(57, 70, 2).set(58, 2, 'C');
  b.ground(73, 92, 6).coins(76, 90, 5).set(86, 5, 'b');
  b.arc(92, 4, 5);
  b.ground(96, 118, 8).set(98, 7, 'C').coins(100, 115, 7).ledge(104, 110, 5).coins(104, 110, 4).set(108, 3, 'R').spikes(114, 115, 8);
  b.ground(122, 144, 9).set(128, 7, 'M').coins(125, 141, 8).set(134, 8, 'b').set(138, 6, 'H').set(140, 8, 'b');
  b.shaft(142, 5, 145, 162, 2).hint(136, 'wall').set(143, 3, 'R').coins(147, 160, 1);
  b.ground(163, 184, 5).set(165, 4, 'C').coins(167, 181, 4).set(176, 4, 'v').set(180, 4, 'b');
  b.arc(184, 3, 5);
  b.ground(188, 229, 9).set(194, 7, 'S').coins(191, 220, 8).set(198, 8, 'b').set(206, 8, 'b').set(214, 8, 'b').hint(216, 'altar').set(222, 8, 'A');
  return b.done({ id: 'oracle', theme: 'temple', time: 110, ar: 'معبد الوحي الكبير', en: 'Great Oracle Temple', relicName: { ar: 'تاج معبد الوحي', en: 'Oracle Temple Crown' } });
}

export const LEVELS = [trail(), ruins(), temple(), falls(), qarun(), hitan(), oasis(), salt(), shali(), spring(), palms(), oracle()];
