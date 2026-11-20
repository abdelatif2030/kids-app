// All pictures of «حلاوة ولا مقلب» drawn in code (canvas 2D): costume sprites, porches, hazards, the spider, parallax tiles.
import { rng } from './sim.js';

export const THEMES = [
  { id: 'lane', skyTop: '#2a1650', skyMid: '#8a3a72', skyBot: '#ffa24a', moon: '#fff0b0', hill: '#3a1d4e', hill2: '#51285a', wall: ['#e8a05a', '#c86a4a', '#f0c070', '#b85a6a'], roof: ['#6a2a4a', '#4a2a5a'], ground: '#4a3040', walk: '#a88a78', leaf: ['#e8742a', '#f0a030', '#c8402a'], fog: 0, tree: '#2c1840', prop: 'pumpkin' },
  { id: 'park', skyTop: '#10243e', skyMid: '#2a5a78', skyBot: '#8ac0b8', moon: '#e8f4ff', hill: '#1a3a4a', hill2: '#25505a', wall: ['#8ab0c8', '#a0c0b0', '#c0b8d8', '#88a8b8'], roof: ['#34506a', '#3a4a6a'], ground: '#2a3a4a', walk: '#8aa0a8', leaf: ['#b8d070', '#e8c850', '#90b060'], fog: 0.5, tree: '#143040', prop: 'lamp' },
  { id: 'mansion', skyTop: '#1c1038', skyMid: '#4a2a78', skyBot: '#b86ad0', moon: '#f4e8ff', hill: '#2a1a44', hill2: '#3a2058', wall: ['#a898d8', '#c8a0e0', '#8a88c8', '#d8b0d0'], roof: ['#2a1a50', '#3a2060'], ground: '#34224a', walk: '#9a88b0', leaf: ['#c880f0', '#f0a0e0', '#9a70d8'], fog: 0.25, tree: '#20123a', prop: 'fence' },
  { id: 'farm', skyTop: '#2a1a30', skyMid: '#a04a3a', skyBot: '#ffc060', moon: '#ffe0a0', hill: '#4a2a28', hill2: '#6a3a28', wall: ['#d8a060', '#b86a40', '#e8c878', '#a8683a'], roof: ['#7a3a28', '#5a3020'], ground: '#4a3424', walk: '#b09068', leaf: ['#e8b030', '#d87820', '#f0d060'], fog: 0.1, tree: '#3a2218', prop: 'hay' },
  { id: 'hill', skyTop: '#241454', skyMid: '#d85a8a', skyBot: '#ffd070', moon: '#fffbd0', hill: '#6a2a60', hill2: '#e8902a', wall: ['#ffd0a0', '#ffb0b0', '#fff0b0', '#ffc078'], roof: ['#8a2a6a', '#e87a2a'], ground: '#5a2a50', walk: '#d8a890', leaf: ['#ffe060', '#ff9a30', '#fff0d0'], fog: 0, tree: '#4a1a50', prop: 'candy' },
  { id: 'bridge', skyTop: '#06203a', skyMid: '#0a5a78', skyBot: '#48c0b0', moon: '#e0fff0', hill: '#0a3248', hill2: '#0c4a5a', wall: ['#78d0c0', '#88b0e0', '#a8e0d0', '#68a8c8'], roof: ['#14486a', '#1a5a70'], ground: '#143a50', walk: '#7ab0b8', leaf: ['#78f0d0', '#c0f0a0', '#60d0e0'], fog: 0.35, tree: '#0a2a3a', prop: 'lantern' },
  { id: 'parade', skyTop: '#0a0a3a', skyMid: '#3a2a8a', skyBot: '#e86ab0', moon: '#fff8e0', hill: '#1a1050', hill2: '#2a1a70', wall: ['#ff9ac0', '#ffd070', '#8ad0ff', '#c0a0ff'], roof: ['#3a1a80', '#5a2a90'], ground: '#2a1a58', walk: '#b090c8', leaf: ['#ff70b0', '#ffd860', '#80d8ff'], fog: 0, tree: '#1a0e48', prop: 'bunting' },
];

const OUT = '#2a1a3a';
// Optional painted pictures (set once by main.js); each drawing falls back to the code version when its picture is missing.
let PIC = {};
export function setPics(p) { PIC = p || {}; }
function rr(g, x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }
function ell(g, x, y, rx, ry, fill, stroke) { g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, 6.2832); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = 3; g.stroke(); } }
function fs(g, fill, w = 3) { g.fillStyle = fill; g.fill(); g.strokeStyle = OUT; g.lineWidth = w; g.lineJoin = 'round'; g.stroke(); }

// ---- costumes: sprite box 100 x 125, feet at y=118, centre x=50 --------------------------------------------------------
const SKIN = ['#f4c9a0', '#d79a6a', '#a8704a'];
const PAL = {
  ghost: [['#ffffff', '#d8d8ee'], ['#d8f0ff', '#a8c8e8'], ['#ffe0f0', '#e8b0d0']],
  pumpkin: [['#ff8a20', '#c85a10'], ['#ffa030', '#d86a18'], ['#f07018', '#b04a0c']],
  witch: [['#7a3ab8', '#4a2078'], ['#2a8a7a', '#1a5a50'], ['#c84a8a', '#8a2a5a']],
  robot: [['#b8c4d0', '#78889a'], ['#d8b078', '#a8784a'], ['#6aa8e0', '#3a78b0']],
  cat: [['#3a3048', '#241c30'], ['#f09a3a', '#c8681a'], ['#b8b8c8', '#8a8a9c']],
  mummy: [['#f4ecd0', '#c8bc98'], ['#e8e0f0', '#b8b0c8'], ['#f0e4c0', '#c0b088']],
  dino: [['#58c060', '#2a8a38'], ['#48b8d0', '#2a7a98'], ['#e86aa0', '#b03a70']],
  bat: [['#5a3a88', '#3a2060'], ['#3a3a58', '#22223a'], ['#8a3a78', '#5a2050']],
};

function face(g, v, ph, hood) {
  ell(g, 50, 44, 19, 18, SKIN[v % 3], OUT);
  g.fillStyle = OUT; ell(g, 43, 43, 2.4, 3, OUT); ell(g, 57, 43, 2.4, 3, OUT);
  g.fillStyle = '#ff9a9a'; g.globalAlpha = 0.5; ell(g, 38, 51, 4, 2.5, '#ff7a8a'); ell(g, 62, 51, 4, 2.5, '#ff7a8a'); g.globalAlpha = 1;
  g.strokeStyle = OUT; g.lineWidth = 2; g.beginPath(); g.arc(50, 50, 5, 0.2, 2.9); g.stroke();
}
function legs(g, ph, shoe = '#3a2a4a') {
  const a = ph === 2 ? 0 : ph === 0 ? 5 : -5;
  g.fillStyle = shoe; g.strokeStyle = OUT; g.lineWidth = 3;
  rr(g, 36 - a * 0.4, 106, 14, 12 + (ph === 2 ? -3 : 0), 5); g.fill(); g.stroke();
  rr(g, 52 + a * 0.4, 106, 14, 12 + (ph === 2 ? -3 : 0) , 5); g.fill(); g.stroke();
}
function bucket(g, ph) {
  const y = 84 + (ph === 0 ? 2 : 0);
  g.strokeStyle = OUT; g.lineWidth = 2.5; g.beginPath(); g.arc(76, y - 2, 8, Math.PI, 0); g.stroke();
  g.beginPath(); g.moveTo(68, y); g.lineTo(84, y); g.lineTo(81, y + 15); g.lineTo(71, y + 15); g.closePath(); fs(g, '#ff8a20', 2.5);
  g.fillStyle = '#3a2a1a'; g.fillRect(72, y + 5, 3, 3); g.fillRect(77, y + 5, 3, 3);
  for (let i = 0; i < 3; i++) ell(g, 71 + i * 5, y, 3.2, 3.2, ['#ff4a6a', '#4ad0ff', '#ffe04a'][i], OUT);
}
function drawCostume(g, id, v, ph) {
  const [c1, c2] = PAL[id][v % 3];
  g.save();
  const bob = ph === 2 ? 0 : ph === 0 ? 0 : 1.5;
  g.translate(0, bob);
  if (id === 'ghost') {
    legs(g, ph, '#5a4a6a');
    g.beginPath(); g.moveTo(24, 112); g.bezierCurveTo(18, 70, 24, 26, 50, 24); g.bezierCurveTo(76, 26, 82, 70, 76, 112);
    for (let i = 0; i < 5; i++) g.quadraticCurveTo(72 - i * 11 - 5, 120 - (i % 2) * 2, 76 - (i + 1) * 10.4, 112 + (i % 2 ? 0 : 2)); g.closePath(); fs(g, c1);
    g.fillStyle = c2; g.globalAlpha = 0.5; g.beginPath(); g.ellipse(34, 80, 8, 24, 0.1, 0, 6.3); g.fill(); g.globalAlpha = 1;
    ell(g, 41, 48, 4, 6, '#2a1a3a'); ell(g, 59, 48, 4, 6, '#2a1a3a'); ell(g, 50, 60, 3.4, 4, '#2a1a3a');
    if (v === 2) { ell(g, 50, 26, 6, 4, '#ff6a9a', OUT); }
    if (v === 1) { g.fillStyle = '#ffd24a'; g.beginPath(); g.moveTo(40, 26); g.lineTo(44, 14); g.lineTo(50, 22); g.lineTo(56, 14); g.lineTo(60, 26); g.closePath(); fs(g, '#ffd24a', 2); }
  } else if (id === 'pumpkin') {
    legs(g, ph, '#3a5a2a');
    face(g, v, ph);
    ell(g, 50, 82, 31, 28, c1, OUT);
    g.strokeStyle = c2; g.lineWidth = 3; for (const k of [-15, -7, 7, 15]) { g.beginPath(); g.ellipse(50, 82, Math.abs(k) + 2, 27, 0, -1.4, 1.4); g.stroke(); }
    g.fillStyle = '#ffe04a'; g.beginPath(); g.moveTo(38, 74); g.lineTo(46, 74); g.lineTo(42, 66); g.closePath(); g.fill(); g.beginPath(); g.moveTo(54, 74); g.lineTo(62, 74); g.lineTo(58, 66); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(38, 86); for (let i = 0; i < 6; i++) g.lineTo(38 + i * 4.8, 86 + (i % 2 ? 6 : 0)); g.lineTo(62, 92); g.lineTo(38, 92); g.fill();
    g.beginPath(); g.moveTo(46, 28); g.quadraticCurveTo(48, 12, 56, 14); g.lineTo(55, 22); g.quadraticCurveTo(52, 22, 52, 30); g.closePath(); fs(g, '#4aa840', 2.5);
    ell(g, 63, 24, 8, 4, '#6ad050', OUT);
  } else if (id === 'witch') {
    legs(g, ph, '#2a1a2a');
    g.beginPath(); g.moveTo(38, 62); g.lineTo(62, 62); g.lineTo(76, 112); g.lineTo(24, 112); g.closePath(); fs(g, c1);
    g.fillStyle = c2; g.fillRect(31, 100, 38, 5);
    ell(g, 30, 44, 7, 12, '#e8742a', OUT); ell(g, 70, 44, 7, 12, '#e8742a', OUT);
    face(g, v, ph);
    ell(g, 50, 28, 32, 6, c2, OUT);
    g.beginPath(); g.moveTo(34, 28); g.quadraticCurveTo(44, 12, 50, -6); g.quadraticCurveTo(56, 12, 66, 28); g.closePath(); fs(g, c1);
    g.fillStyle = '#ffd24a'; g.fillRect(40, 20, 20, 5); g.strokeStyle = OUT; g.lineWidth = 1.5; g.strokeRect(40, 20, 20, 5);
  } else if (id === 'robot') {
    g.fillStyle = '#6a7a8a'; g.strokeStyle = OUT; g.lineWidth = 3;
    rr(g, 36, 92, 10, 26, 3); g.fill(); g.stroke(); rr(g, 54, 92, 10, 26, 3); g.fill(); g.stroke();
    rr(g, 30, 98 + (ph === 2 ? -3 : 0), 20, 18, 5); fs(g, '#3a3a4a'); rr(g, 50, 98 + (ph === 2 ? -3 : 0), 20, 18, 5); fs(g, '#3a3a4a');
    rr(g, 26, 56, 48, 46, 6); fs(g, c1);
    g.fillStyle = c2; g.fillRect(26, 78, 48, 4);
    for (let i = 0; i < 3; i++) ell(g, 36 + i * 11, 68, 3.5, 3.5, ['#ff4a4a', '#ffe04a', '#4aff8a'][i], OUT);
    rr(g, 34, 86, 32, 10, 3); fs(g, '#2a3a4a'); g.fillStyle = '#6aff9a'; g.fillRect(38, 89, 12 + (ph === 0 ? 6 : 0), 4);
    rr(g, 28, 10, 44, 42, 8); fs(g, c1);
    rr(g, 33, 18, 34, 26, 5); fs(g, SKIN[v % 3], 2.5);
    ell(g, 43, 30, 2.4, 3, OUT); ell(g, 57, 30, 2.4, 3, OUT); g.strokeStyle = OUT; g.lineWidth = 2; g.beginPath(); g.arc(50, 34, 5, 0.2, 2.9); g.stroke();
    g.strokeStyle = OUT; g.lineWidth = 3; g.beginPath(); g.moveTo(50, 10); g.lineTo(50, -2); g.stroke(); ell(g, 50, -4, 5, 5, '#ff4a6a', OUT);
    g.fillStyle = '#e8d8a8'; g.fillRect(44, 54, 12, 5);
  } else if (id === 'cat') {
    g.strokeStyle = c1; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath(); g.moveTo(30, 100); g.quadraticCurveTo(10, 90 + (ph === 0 ? 6 : 0), 14, 66); g.stroke();
    g.strokeStyle = OUT; g.lineWidth = 2; g.stroke(); g.strokeStyle = c1; g.lineWidth = 6; g.stroke();
    legs(g, ph, c2);
    rr(g, 28, 60, 44, 52, 18); fs(g, c1);
    ell(g, 50, 92, 12, 14, c2 === '#241c30' ? '#4a4058' : '#f8ecd8', OUT);
    g.beginPath(); g.moveTo(30, 36); g.lineTo(32, 12); g.lineTo(46, 28); g.closePath(); fs(g, c1); g.beginPath(); g.moveTo(70, 36); g.lineTo(68, 12); g.lineTo(54, 28); g.closePath(); fs(g, c1);
    g.fillStyle = '#ff9aaa'; g.beginPath(); g.moveTo(34, 28); g.lineTo(34, 19); g.lineTo(41, 26); g.fill(); g.beginPath(); g.moveTo(66, 28); g.lineTo(66, 19); g.lineTo(59, 26); g.fill();
    ell(g, 50, 44, 22, 20, c1, OUT);
    ell(g, 50, 46, 15, 14, SKIN[v % 3], OUT);
    ell(g, 44, 44, 2.2, 3, OUT); ell(g, 56, 44, 2.2, 3, OUT); ell(g, 50, 49, 2.5, 1.8, '#ff6a8a');
    g.strokeStyle = OUT; g.lineWidth = 1.2; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(50 + s * 6, 50); g.lineTo(50 + s * 17, 47); g.moveTo(50 + s * 6, 52); g.lineTo(50 + s * 17, 54); g.stroke(); }
  } else if (id === 'mummy') {
    legs(g, ph, '#8a7a5a');
    rr(g, 28, 58, 44, 54, 16); fs(g, c1);
    g.strokeStyle = c2; g.lineWidth = 3; for (let i = 0; i < 6; i++) { g.beginPath(); g.moveTo(28, 66 + i * 8); g.lineTo(72, 70 + i * 8 - (i % 2) * 5); g.stroke(); }
    ell(g, 50, 42, 21, 20, c1, OUT);
    g.strokeStyle = c2; g.lineWidth = 3; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(30, 32 + i * 7); g.lineTo(70, 36 + i * 7 - (i % 2) * 4); g.stroke(); }
    rr(g, 34, 38, 32, 10, 5); fs(g, '#2a1a3a', 1.5); ell(g, 43, 43, 3.4, 3.4, '#fff'); ell(g, 57, 43, 3.4, 3.4, '#fff'); ell(g, 44, 44, 1.6, 1.8, OUT); ell(g, 58, 44, 1.6, 1.8, OUT);
    g.strokeStyle = c1; g.lineWidth = 4; g.beginPath(); g.moveTo(28, 72); g.quadraticCurveTo(14, 80 + (ph === 0 ? 5 : 0), 18, 96); g.stroke();
  } else if (id === 'dino') {
    g.strokeStyle = OUT; g.lineWidth = 11; g.lineCap = 'round'; g.beginPath(); g.moveTo(30, 104); g.quadraticCurveTo(8, 104, 6 + (ph === 0 ? 0 : 4), 80); g.stroke(); g.strokeStyle = c1; g.lineWidth = 7; g.stroke();
    legs(g, ph, c2);
    rr(g, 28, 60, 44, 52, 18); fs(g, c1);
    ell(g, 50, 94, 12, 14, '#f4f0b0', OUT);
    for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(26, 68 + i * 10); g.lineTo(18, 72 + i * 10); g.lineTo(26, 76 + i * 10); g.closePath(); fs(g, '#ffd24a', 2); }
    ell(g, 50, 42, 24, 22, c1, OUT);
    for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(40 + i * 10, 22); g.lineTo(44 + i * 10, 10); g.lineTo(48 + i * 10, 22); g.closePath(); fs(g, '#ffd24a', 2); }
    ell(g, 40, 22, 6, 6, c1, OUT); ell(g, 60, 22, 6, 6, c1, OUT); ell(g, 40, 22, 2.5, 2.5, '#fff'); ell(g, 60, 22, 2.5, 2.5, '#fff');
    ell(g, 50, 46, 15, 14, SKIN[v % 3], OUT);
    ell(g, 44, 44, 2.2, 3, OUT); ell(g, 56, 44, 2.2, 3, OUT); g.strokeStyle = OUT; g.lineWidth = 2; g.beginPath(); g.arc(50, 49, 5, 0.2, 2.9); g.stroke();
    g.fillStyle = '#fff'; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(34 + i * 10.5, 58); g.lineTo(38 + i * 10.5, 64); g.lineTo(42 + i * 10.5, 58); g.fill(); }
  } else if (id === 'bat') {
    const f = ph === 0 ? 8 : ph === 1 ? 0 : 14;
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(50 + s * 14, 66); g.quadraticCurveTo(50 + s * 44, 44 - f, 50 + s * 48, 70 - f * 0.5); g.quadraticCurveTo(50 + s * 38, 68, 50 + s * 34, 84); g.quadraticCurveTo(50 + s * 28, 74, 50 + s * 22, 88); g.quadraticCurveTo(50 + s * 18, 80, 50 + s * 12, 96); g.closePath(); fs(g, c2); }
    legs(g, ph, '#2a1a3a');
    rr(g, 32, 60, 36, 50, 16); fs(g, c1);
    g.beginPath(); g.moveTo(32, 36); g.lineTo(34, 10); g.lineTo(46, 26); g.closePath(); fs(g, c1); g.beginPath(); g.moveTo(68, 36); g.lineTo(66, 10); g.lineTo(54, 26); g.closePath(); fs(g, c1);
    ell(g, 50, 44, 21, 19, c1, OUT);
    ell(g, 50, 47, 14, 13, SKIN[v % 3], OUT);
    ell(g, 45, 45, 2.2, 3, OUT); ell(g, 55, 45, 2.2, 3, OUT);
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(45, 52); g.lineTo(47, 57); g.lineTo(49, 52); g.fill(); g.beginPath(); g.moveTo(51, 52); g.lineTo(53, 57); g.lineTo(55, 52); g.fill();
  }
  if (id !== 'ghost' || true) bucket(g, ph);
  g.restore();
}

const cache = new Map();
export function sprite(id, v, ph) {
  const key = `${id}|${v % 3}|${ph}`;
  let c = cache.get(key);
  if (!c) {
    c = document.createElement('canvas'); c.width = 200; c.height = 270;
    const g = c.getContext('2d'); g.scale(2, 2); g.translate(0, 18);
    drawCostume(g, id, v % 3, ph);
    cache.set(key, c);
  }
  return c;
}
/** Draw a kid with feet at (x, y) and height ~ hpx. */
export function drawKid(g, id, v, ph, x, y, hpx, flip = false, tilt = 0) {
  const s = sprite(id, v, ph);
  const k = hpx / 125;
  g.save(); g.translate(x, y); if (tilt) g.rotate(tilt); if (flip) g.scale(-1, 1);
  g.drawImage(s, -50 * k, -(118 + 18) * k + 0, 100 * k, 135 * k);
  g.restore();
}

// ---- porches -----------------------------------------------------------------------------------------------------------
/** Door centre at x (px), sidewalk line at gy. u = pixels per unit. */
export function drawPorch(g, p, x, gy, u, th, time, near) {
  const friendly = p.kind === 'friendly';
  const wall = th.wall[p.style % 4];
  const roof = th.roof[p.style % 2];
  const W = 6.4 * u; const H = 4.6 * u; const top = gy - 0.2 * u - H;
  const x0 = x - W / 2;
  // roof + chimney
  g.fillStyle = roof; g.strokeStyle = OUT; g.lineWidth = u * 0.1; g.lineJoin = 'round';
  g.beginPath(); g.moveTo(x0 - 0.5 * u, top + 0.1 * u); g.lineTo(x, top - 2.1 * u); g.lineTo(x0 + W + 0.5 * u, top + 0.1 * u); g.closePath(); g.fill(); g.stroke();
  rr(g, x0 + W * 0.68, top - 2.2 * u, 0.9 * u, 1.6 * u, u * 0.1); g.fillStyle = '#6a4a58'; g.fill(); g.stroke();
  // wall
  rr(g, x0, top, W, H, u * 0.15); g.fillStyle = wall; g.fill(); g.stroke();
  g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(x0 + u * 0.05, gy - 1.2 * u, W - u * 0.1, 1.0 * u);
  // windows
  for (const s of [-1, 1]) {
    const wx = x + s * 2.15 * u - 0.7 * u; const wy = top + 1.0 * u;
    rr(g, wx, wy, 1.4 * u, 1.7 * u, u * 0.3);
    g.fillStyle = friendly ? '#ffd860' : '#4a6a88'; g.fill(); g.stroke();
    if (friendly) { g.fillStyle = 'rgba(255,250,200,.8)'; g.fillRect(wx + u * 0.1, wy + u * 0.1, u * 0.5, u * 0.5); }
    g.beginPath(); g.moveTo(wx + 0.7 * u, wy); g.lineTo(wx + 0.7 * u, wy + 1.7 * u); g.moveTo(wx, wy + 0.85 * u); g.lineTo(wx + 1.4 * u, wy + 0.85 * u); g.stroke();
    if (!friendly) { // scowling shutters
      g.fillStyle = '#2a2a48'; g.beginPath(); g.moveTo(wx - 0.1 * u, wy - 0.1 * u); g.lineTo(wx + 0.75 * u, wy + (s < 0 ? 0.55 : 0.2) * u); g.lineTo(wx + 0.75 * u, wy + (s < 0 ? 0.2 : 0.55) * u); g.lineTo(wx + 1.5 * u, wy - 0.1 * u); g.closePath(); g.fill();
    }
  }
  // door
  const dw = 1.5 * u; const dh = 2.5 * u;
  const open = p.rung && friendly;
  g.beginPath(); g.moveTo(x - dw / 2, gy - 0.2 * u); g.lineTo(x - dw / 2, gy - dh + 0.6 * u); g.arc(x, gy - dh + 0.6 * u, dw / 2, Math.PI, 0); g.lineTo(x + dw / 2, gy - 0.2 * u); g.closePath();
  g.fillStyle = open ? '#fff0a0' : friendly ? '#c8602a' : '#4a3a5a'; g.fill(); g.stroke();
  if (open) { const gr = g.createRadialGradient(x, gy - u, 0, x, gy - u, 3 * u); gr.addColorStop(0, 'rgba(255,240,150,.7)'); gr.addColorStop(1, 'rgba(255,240,150,0)'); g.fillStyle = gr; g.fillRect(x - 3 * u, gy - 4 * u, 6 * u, 4 * u); }
  else { g.fillStyle = '#ffd24a'; g.beginPath(); g.arc(x + dw * 0.28, gy - 1.1 * u, u * 0.12, 0, 6.3); g.fill(); }
  // sign / wreath
  if (friendly) { g.strokeStyle = '#3a8a3a'; g.lineWidth = u * 0.25; g.beginPath(); g.arc(x, gy - dh + 0.55 * u, 0.4 * u, 0, 6.3); g.stroke(); g.fillStyle = '#ff5a4a'; g.beginPath(); g.arc(x + 0.35 * u, gy - dh + 0.35 * u, u * 0.12, 0, 6.3); g.fill(); }
  else { g.fillStyle = '#fff'; g.beginPath(); g.arc(x, gy - dh + 0.45 * u, 0.5 * u, 0, 6.3); g.fill(); g.strokeStyle = '#d83a3a'; g.lineWidth = u * 0.14; g.stroke(); g.beginPath(); g.moveTo(x - 0.35 * u, gy - dh + 0.1 * u); g.lineTo(x + 0.35 * u, gy - dh + 0.8 * u); g.stroke(); }
  // porch awning + bunting
  g.fillStyle = friendly ? '#e8603a' : '#5a5a78'; g.strokeStyle = OUT; g.lineWidth = u * 0.1;
  g.beginPath(); g.moveTo(x - 1.5 * u, top + H * 0.42); g.lineTo(x + 1.5 * u, top + H * 0.42); g.lineTo(x + 1.9 * u, top + H * 0.42 + 0.5 * u); g.lineTo(x - 1.9 * u, top + H * 0.42 + 0.5 * u); g.closePath(); g.fill(); g.stroke();
  if (friendly) for (let i = 0; i < 5; i++) { g.fillStyle = ['#ffd24a', '#ff6a8a', '#7ad0ff', '#9aff8a', '#ff9a4a'][i]; g.beginPath(); g.moveTo(x - 1.8 * u + i * 0.9 * u, top + H * 0.42 + 0.5 * u); g.lineTo(x - 1.4 * u + i * 0.9 * u, top + H * 0.42 + 0.5 * u); g.lineTo(x - 1.6 * u + i * 0.9 * u, top + H * 0.42 + 1.0 * u); g.fill(); }
  // step + pumpkins
  rr(g, x - 1.3 * u, gy - 0.35 * u, 2.6 * u, 0.35 * u, u * 0.05); g.fillStyle = '#b8a8a0'; g.fill(); g.stroke();
  if (friendly) { for (const s of [-1, 1]) { ell(g, x + s * 1.9 * u, gy - 0.5 * u, 0.55 * u, 0.45 * u, '#ff8a20', OUT); g.fillStyle = '#ffe04a'; g.fillRect(x + s * 1.9 * u - 0.2 * u, gy - 0.6 * u, 0.12 * u, 0.12 * u); g.fillRect(x + s * 1.9 * u + 0.1 * u, gy - 0.6 * u, 0.12 * u, 0.12 * u); } }
  else { g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = u * 0.05; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(x0 + 0.1 * u, top + 0.15 * u); g.lineTo(x0 + (0.9 + i * 0.35) * u, top + (0.1 + i * 0.4) * u); g.stroke(); } }
  // porch light + glow
  const gl = friendly ? 'rgba(255,210,100,' : 'rgba(120,150,255,';
  const gr = g.createRadialGradient(x, top + H * 0.42, 0, x, top + H * 0.42, 4.5 * u);
  gr.addColorStop(0, gl + (friendly ? 0.4 : 0.22) + ')'); gr.addColorStop(1, gl + '0)');
  g.fillStyle = gr; g.fillRect(x - 4.5 * u, top - u, 9 * u, H + 2 * u);
  // the bell
  if (!p.rung) {
    const by = gy - 3.0 * u + Math.sin(time * 3 + p.x) * 0.12 * u;
    const ring = friendly ? '#7aff9a' : '#ff6a6a';
    g.strokeStyle = ring; g.lineWidth = u * 0.14; g.globalAlpha = 0.45 + 0.35 * Math.sin(time * 4 + p.x); g.beginPath(); g.arc(x, by, 1.05 * u, 0, 6.3); g.stroke(); g.globalAlpha = 1;
    g.fillStyle = friendly ? '#ffd24a' : '#9a9aa8'; g.strokeStyle = OUT; g.lineWidth = u * 0.1;
    g.beginPath(); g.moveTo(x - 0.5 * u, by + 0.4 * u); g.quadraticCurveTo(x - 0.5 * u, by - 0.5 * u, x, by - 0.55 * u); g.quadraticCurveTo(x + 0.5 * u, by - 0.5 * u, x + 0.5 * u, by + 0.4 * u); g.closePath(); g.fill(); g.stroke();
    ell(g, x, by + 0.5 * u, 0.15 * u, 0.15 * u, '#6a4a1a');
    if (!friendly) { g.strokeStyle = '#d83a3a'; g.lineWidth = u * 0.16; g.beginPath(); g.moveTo(x - 0.3 * u, by - 0.25 * u); g.lineTo(x + 0.3 * u, by + 0.25 * u); g.moveTo(x + 0.3 * u, by - 0.25 * u); g.lineTo(x - 0.3 * u, by + 0.25 * u); g.stroke(); }
    else if (near) { g.fillStyle = '#fff'; g.font = `900 ${0.9 * u}px system-ui`; g.textAlign = 'center'; g.fillText('↑', x, by - 1.2 * u); }
  }
}

// ---- hazards ---------------------------------------------------------------------------------------------------------
export function drawPit(g, x, gy, u, w, time, th) {
  const px = x; const pw = w * u;
  rr(g, px, gy - 0.1 * u, pw, 0.55 * u, u * 0.25); g.fillStyle = th.leaf[2]; g.fill(); g.strokeStyle = OUT; g.lineWidth = u * 0.08; g.stroke();
  for (let i = 0; i < Math.ceil(w * 3); i++) { const lx = px + ((i * 0.37 + 0.2) % 1) * pw; const ly = gy + 0.1 * u - ((i * 7) % 4) * 0.12 * u; g.fillStyle = th.leaf[i % 3]; g.beginPath(); g.ellipse(lx, ly, 0.28 * u, 0.15 * u, i, 0, 6.3); g.fill(); }
  g.fillStyle = 'rgba(255,255,255,.8)'; for (let i = 0; i < 2; i++) { const a = time * 2 + i * 3 + x; g.beginPath(); g.arc(px + pw / 2 + Math.cos(a) * 0.5 * u, gy - 0.5 * u - ((time * 1.5 + i) % 1) * 0.7 * u, 0.06 * u, 0, 6.3); g.fill(); }
}
export function drawSprinkler(g, x, gy, u, state, time) {
  g.fillStyle = '#6a8aa8'; g.strokeStyle = OUT; g.lineWidth = u * 0.08;
  rr(g, x - 0.2 * u, gy - 0.65 * u, 0.4 * u, 0.65 * u, u * 0.08); g.fill(); g.stroke(); ell(g, x, gy - 0.7 * u, 0.3 * u, 0.15 * u, '#ffd24a', OUT);
  if (state === 'warn') { g.fillStyle = 'rgba(160,220,255,.8)'; for (let i = 0; i < 4; i++) { const a = time * 14 + i * 1.6; g.beginPath(); g.arc(x + Math.sin(a) * 0.3 * u, gy - 0.9 * u - ((a * 0.4) % 1) * 0.5 * u, 0.07 * u, 0, 6.3); g.fill(); } }
  if (state === 'on') {
    g.strokeStyle = 'rgba(150,215,255,.9)'; g.lineWidth = u * 0.14; g.lineCap = 'round';
    for (let k = -3; k <= 3; k++) { g.beginPath(); g.moveTo(x, gy - 0.75 * u); g.quadraticCurveTo(x + k * 0.45 * u, gy - (2.1 - Math.abs(k) * 0.12) * u, x + k * 0.85 * u * 0.55 + k * 0.1 * u, gy - 0.15 * u); g.stroke(); }
    g.fillStyle = 'rgba(190,235,255,.35)'; g.beginPath(); g.ellipse(x, gy - 0.5 * u, 1.3 * u, 1.0 * u, 0, Math.PI, 0); g.fill();
  }
}
export function drawDog(g, x, gy, u, time, awake) {
  const run = awake ? Math.sin(time * 18) : 0;
  const k = u;
  g.save(); g.translate(x + 0.5 * k, gy); g.scale(-1, 1); // faces left, running toward the hero
  if (PIC.dog) { const dw = 1.9 * k; const dh = dw * PIC.dog.naturalHeight / PIC.dog.naturalWidth; g.scale(-1, 1); g.translate(0.3 * k, -Math.abs(run) * 0.06 * k); g.drawImage(PIC.dog, -dw / 2, -dh, dw, dh); g.restore(); if (awake) { g.fillStyle = '#ffe04a'; g.font = `900 ${u * 0.9}px system-ui`; g.textAlign = 'center'; g.fillText('!', x + 0.4 * u, gy - 1.6 * u); } return; }
  g.strokeStyle = OUT; g.lineWidth = k * 0.08; g.lineJoin = 'round';
  rr(g, -0.5 * k, -0.9 * k + Math.abs(run) * 0.05 * k, 1.2 * k, 0.6 * k, 0.3 * k); g.fillStyle = '#c8905a'; g.fill(); g.stroke();
  for (const [lx, s] of [[-0.35, 1], [-0.05, -1], [0.3, 1], [0.55, -1]]) { rr(g, lx * k + s * run * 0.12 * k, -0.4 * k, 0.16 * k, 0.4 * k, 0.07 * k); g.fillStyle = '#a8703a'; g.fill(); g.stroke(); }
  ell(g, 0.78 * k, -0.95 * k, 0.32 * k, 0.28 * k, '#d8a06a', OUT);
  ell(g, 1.0 * k, -0.85 * k, 0.15 * k, 0.12 * k, '#3a2a1a'); ell(g, 0.82 * k, -1.02 * k, 0.05 * k, 0.06 * k, OUT);
  g.beginPath(); g.moveTo(0.6 * k, -1.15 * k); g.lineTo(0.5 * k, -0.7 * k - Math.abs(run) * 0.1 * k); g.lineTo(0.75 * k, -1.0 * k); g.closePath(); g.fillStyle = '#7a4a22'; g.fill(); g.stroke();
  g.strokeStyle = '#c8905a'; g.lineWidth = k * 0.12; g.lineCap = 'round'; g.beginPath(); g.moveTo(-0.5 * k, -0.7 * k); g.quadraticCurveTo(-0.9 * k, -1.0 * k - run * 0.2 * k, -0.8 * k, -1.2 * k); g.stroke();
  g.restore();
  if (awake) { g.fillStyle = '#ffe04a'; g.font = `900 ${u * 0.9}px system-ui`; g.textAlign = 'center'; g.fillText('!', x + 0.4 * u, gy - 1.6 * u); }
}
export function drawJack(g, x, gy, u, time, w = 1.1, face = true) {
  const r = w * u * 0.5 + 0.05 * u;
  g.save(); g.translate(x + w * u / 2, gy - r);
  g.rotate(-time * 5);
  if (PIC.jack) { g.drawImage(PIC.jack, -r * 1.05, -r * 1.05, r * 2.1, r * 2.1); g.restore(); return; }
  ell(g, 0, 0, r, r * 0.95, '#ff8a20', OUT);
  g.strokeStyle = '#c85a10'; g.lineWidth = u * 0.08; for (const k of [-0.5, 0, 0.5]) { g.beginPath(); g.ellipse(0, 0, Math.abs(k) * r + r * 0.15, r * 0.93, 0, -1.3, 1.3); g.stroke(); }
  g.fillStyle = '#ffe04a'; g.beginPath(); g.moveTo(-r * 0.5, -r * 0.1); g.lineTo(-r * 0.15, -r * 0.1); g.lineTo(-r * 0.32, -r * 0.45); g.fill(); g.beginPath(); g.moveTo(r * 0.5, -r * 0.1); g.lineTo(r * 0.15, -r * 0.1); g.lineTo(r * 0.32, -r * 0.45); g.fill();
  g.fillRect(-r * 0.4, r * 0.2, r * 0.8, r * 0.18);
  g.fillStyle = '#4aa840'; g.fillRect(-r * 0.08, -r * 1.1, r * 0.16, r * 0.3);
  g.restore();
}
export function drawHedge(g, hd, x, gy, u, kids, time) {
  const w = 1.6 * u; const h = 4.2 * u;
  const sh = hd.push > 0 ? Math.sin(time * 40) * u * 0.06 * Math.min(1, hd.push * 3) : 0;
  g.save(); g.translate(sh, 0);
  g.fillStyle = '#2f8a3a'; g.strokeStyle = OUT; g.lineWidth = u * 0.1;
  for (let i = 0; i < 6; i++) { ell(g, x + w / 2 + ((i % 2) - 0.5) * 0.3 * u, gy - 0.5 * u - i * 0.68 * u, 0.95 * u, 0.55 * u, i % 2 ? '#38a046' : '#2a7a34', OUT); }
  g.fillStyle = '#ff6a8a'; for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(x + 0.3 * u + ((i * 7) % 5) * 0.25 * u, gy - 0.7 * u - i * 0.62 * u, 0.1 * u, 0, 6.3); g.fill(); }
  g.restore();
  // sign
  const sx = x + w / 2; const sy = gy - h - 0.9 * u;
  rr(g, sx - 1.1 * u, sy - 0.55 * u, 2.2 * u, 1.1 * u, u * 0.3); g.fillStyle = kids >= hd.need ? '#4ad07a' : '#ffd24a'; g.fill(); g.strokeStyle = OUT; g.lineWidth = u * 0.1; g.stroke();
  g.fillStyle = '#2a1a3a'; g.font = `900 ${0.7 * u}px Tajawal, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(`👥 ${hd.need}`, sx, sy + u * 0.02); g.textBaseline = 'alphabetic';
}

// ---- boss: giant inflatable spider ---------------------------------------------------------------------------------------
export function drawSpider(g, b, bx, gy, u, time, atk, heroX) {
  const defl = b.defeated ? Math.min(1, b.deflate / 1.6) : 0;
  const wob = Math.sin(time * 2) * 0.05 + (b.dizzy > 0 ? Math.sin(time * 30) * 0.08 : 0);
  const sy = 1 - defl * 0.55;
  const bodyY = gy - (3.3 - defl * 1.5) * u;
  g.save(); g.translate(bx, 0);
  g.strokeStyle = OUT; g.lineJoin = 'round'; g.lineCap = 'round';
  // tie-down ropes + stakes
  g.lineWidth = u * 0.07; g.strokeStyle = '#d8d0c0';
  for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * 2.0 * u, bodyY + 1.5 * u); g.lineTo(s * 4.2 * u, gy); g.stroke(); g.fillStyle = '#c85a3a'; g.fillRect(s * 4.2 * u - 0.12 * u, gy - 0.3 * u, 0.24 * u, 0.3 * u); }
  // legs
  const legCol = ['#ff8a20', '#2a1a3a'];
  const legs = [[-1, 0], [-1, 1], [-1, 2], [-1, 3], [1, 0], [1, 1], [1, 2], [1, 3]];
  legs.forEach(([s, i], idx) => {
    const ax = s * (1.4 + i * 0.3) * u; const ay = bodyY + (0.6 + i * 0.25) * u;
    let kx = s * (3.4 + i * 0.7) * u; let ky = bodyY - (0.8 - i * 0.55) * u;
    let fx = s * (4.6 + i * 0.95) * u; let fy = gy;
    const sway = Math.sin(time * 2 + idx) * 0.1 * u;
    ky += sway; if (defl) { ky = gy - 0.7 * u; kx *= 0.8; }
    if (atk && s < 0 && i === 0) {
      const p = atk.t < atk.tele ? atk.t / atk.tele : 1;
      if (atk.type === 'stomp') { const hx = heroX - bx; fx = atk.t < atk.tele ? hx + 0 : hx; kx = (fx + ax) / 2 - 0.6 * u; ky = atk.t < atk.tele ? bodyY - (3.2 + 0.0) * u + p * 0.5 * u : gy - 1.2 * u; fy = atk.t < atk.tele ? bodyY - (3.8 - 0.3) * u : gy; if (atk.t < atk.tele) { fx = hx + 1.0 * u; } }
      if (atk.type === 'swat') { const act = atk.t >= atk.tele; fx = act ? -5.5 * u - ((atk.t - atk.tele) / atk.active) * 2 * u : -2.6 * u; fy = gy - (act ? 2.3 : 3.6) * u; kx = (fx + ax) / 2; ky = fy - 1.2 * u; }
    }
    g.strokeStyle = OUT; g.lineWidth = u * 0.95; g.beginPath(); g.moveTo(ax, ay); g.quadraticCurveTo(kx, ky, fx, fy); g.stroke();
    g.strokeStyle = legCol[(idx % 2)]; g.lineWidth = u * 0.72; g.beginPath(); g.moveTo(ax, ay); g.quadraticCurveTo(kx, ky, fx, fy); g.stroke();
    g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = u * 0.16; g.beginPath(); g.moveTo(ax, ay - 0.2 * u); g.quadraticCurveTo(kx, ky - 0.2 * u, fx, fy - 0.2 * u); g.stroke();
  });
  // body
  g.save(); g.translate(0, bodyY); g.scale(1 + wob * 0.5 + defl * 0.3, sy * (1 - wob * 0.4)); g.rotate(wob * 0.3);
  const gr = g.createRadialGradient(-0.8 * u, -1.0 * u, 0.2 * u, 0, 0, 3.0 * u); gr.addColorStop(0, '#6a3a98'); gr.addColorStop(1, '#2a1a4a');
  ell(g, 0, 0, 2.7 * u, 2.4 * u, gr, OUT); g.lineWidth = u * 0.12; g.stroke();
  g.fillStyle = '#ff8a20'; g.globalAlpha = 0.9; g.beginPath(); g.ellipse(0, 1.0 * u, 1.5 * u, 0.7 * u, 0, 0, 6.3); g.fill(); g.globalAlpha = 1;
  g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = u * 0.14; g.beginPath(); g.arc(-0.6 * u, -0.7 * u, 1.7 * u, 3.6, 4.5); g.stroke();
  // eyes
  const look = Math.max(-1, Math.min(1, (heroX - bx) / (8 * u)));
  const eyes = [[-1.2, -0.55, 0.72], [0, -0.85, 0.82], [1.2, -0.55, 0.72]];
  for (const [ex, ey, er] of eyes) { ell(g, ex * u, ey * u, er * u, er * u * 1.05, '#fff', OUT); const pr = er * 0.42; ell(g, (ex + look * er * 0.35) * u, (ey + 0.05) * u, pr * u, pr * u, defl ? '#aaa' : '#1a1a2a'); }
  g.strokeStyle = OUT; g.lineWidth = u * 0.12; g.beginPath(); g.arc(0, 0.5 * u, 1.2 * u, 0.25, 2.9 - (b.dizzy > 0 ? 0 : 0)); g.stroke();
  g.fillStyle = '#fff'; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(-0.9 * u + i * 0.6 * u, 1.35 * u); g.lineTo(-0.7 * u + i * 0.6 * u, 1.65 * u); g.lineTo(-0.5 * u + i * 0.6 * u, 1.35 * u); g.fill(); }
  g.restore();
  // roll warning: pumpkin over the head
  if (atk && atk.type === 'roll' && atk.t < atk.tele) drawJack(g, -0.6 * u, bodyY - 3.4 * u + 2.4 * u * (atk.t / atk.tele) * 0 + 1.4 * u * (atk.t / atk.tele), u, time, 1.3);
  g.restore();
  // fan hose at the back
  g.fillStyle = '#6a6a78'; g.fillRect(bx + 3.4 * u, gy - 0.6 * u, 1.2 * u, 0.6 * u);
}

// ---- parallax tiles (pre-rendered) ---------------------------------------------------------------------------------------
function treeTile(g, x, gy, s, col, kind) {
  g.fillStyle = col;
  if (kind === 'pine') { for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(x - s * (0.5 - i * 0.1), gy - s * (0.6 + i * 0.6) + s * 0.5); g.lineTo(x, gy - s * (1.4 + i * 0.6)); g.lineTo(x + s * (0.5 - i * 0.1), gy - s * (0.6 + i * 0.6) + s * 0.5); g.fill(); } g.fillRect(x - s * 0.08, gy - s * 0.6, s * 0.16, s * 0.6); }
  else { g.fillRect(x - s * 0.07, gy - s * 1.0, s * 0.14, s * 1.0); g.beginPath(); g.arc(x, gy - s * 1.4, s * 0.62, 0, 6.3); g.fill(); g.beginPath(); g.arc(x - s * 0.4, gy - s * 1.1, s * 0.4, 0, 6.3); g.fill(); g.beginPath(); g.arc(x + s * 0.4, gy - s * 1.15, s * 0.42, 0, 6.3); g.fill(); }
}
/** kind: 'far' | 'mid' | 'lane'. Returns { canvas, w (units) } drawn at scale u (px/unit), height covering 11 units above gy. */
export function buildTile(th, kind, u, dpr, themeIdx) {
  const TW = kind === 'lane' ? 36 : kind === 'mid' ? 40 : 48;
  const HU = 12;
  const c = document.createElement('canvas'); c.width = Math.ceil(TW * u * dpr); c.height = Math.ceil(HU * u * dpr);
  const g = c.getContext('2d'); g.scale(dpr, dpr);
  const gy = HU * u; const r = rng(themeIdx * 131 + (kind === 'far' ? 1 : kind === 'mid' ? 2 : 3));
  const W = TW * u;
  if (kind === 'far') {
    g.fillStyle = th.hill; g.beginPath(); g.moveTo(0, gy); for (let x = 0; x <= W; x += 6) g.lineTo(x, gy - u * (3.2 + 1.6 * Math.sin(x / W * 6.2832 * 2) + 0.7 * Math.sin(x / W * 6.2832 * 5))); g.lineTo(W, gy); g.closePath(); g.fill();
    for (let i = 0; i < 9; i++) treeTile(g, (i / 9 + 0.04) * W, gy - u * 2.2, u * (1.2 + r() * 0.9), th.tree, i % 2 ? 'pine' : 'round');
    if (th.id === 'mansion') { g.fillStyle = th.tree; const mx = W * 0.5; g.fillRect(mx - 3 * u, gy - 7 * u, 6 * u, 5 * u); g.beginPath(); g.moveTo(mx - 3.4 * u, gy - 7 * u); g.lineTo(mx, gy - 10 * u); g.lineTo(mx + 3.4 * u, gy - 7 * u); g.fill(); g.fillRect(mx - 4 * u, gy - 9 * u, 1.2 * u, 7 * u); g.fillStyle = '#ffd860'; g.fillRect(mx - 1 * u, gy - 5.6 * u, 0.6 * u, 0.9 * u); g.fillRect(mx + 1 * u, gy - 5.6 * u, 0.6 * u, 0.9 * u); }
  } else if (kind === 'mid') {
    g.fillStyle = th.hill2; g.beginPath(); g.moveTo(0, gy); for (let x = 0; x <= W; x += 6) g.lineTo(x, gy - u * (1.2 + 0.7 * Math.sin(x / W * 6.2832 * 3))); g.lineTo(W, gy); g.closePath(); g.fill();
    for (let i = 0; i < 6; i++) {
      const hx = (i + 0.5) * (W / 6); const hw = u * (3.4 + r() * 1.4); const hh = u * (2.8 + r() * 1.6);
      g.fillStyle = th.tree; g.fillRect(hx - hw / 2, gy - hh - u * 0.6, hw, hh + u * 0.6);
      g.beginPath(); g.moveTo(hx - hw / 2 - u * 0.3, gy - hh - u * 0.6); g.lineTo(hx, gy - hh - u * 1.9); g.lineTo(hx + hw / 2 + u * 0.3, gy - hh - u * 0.6); g.closePath(); g.fill();
      g.fillStyle = '#ffd860'; for (let k = 0; k < 2; k++) { if (r() < 0.8) { g.fillRect(hx - hw * 0.28 + k * hw * 0.34, gy - hh + u * 0.2, u * 0.5, u * 0.7); } }
      if (i % 2 === 0) treeTile(g, hx + hw * 0.7, gy, u * 1.4, th.tree, 'round');
    }
    if (th.prop === 'hay') for (let i = 0; i < 5; i++) { g.fillStyle = '#c89a3a'; g.beginPath(); g.ellipse((i + 0.3) * W / 5, gy - u * 0.5, u * 0.9, u * 0.6, 0, 0, 6.3); g.fill(); }
    if (th.prop === 'lantern' || th.prop === 'bunting') { g.strokeStyle = 'rgba(255,255,255,.4)'; g.lineWidth = u * 0.06; g.beginPath(); g.moveTo(0, gy - u * 6); g.quadraticCurveTo(W / 2, gy - u * 4.2, W, gy - u * 6); g.stroke(); for (let i = 1; i < 12; i++) { const t = i / 12; const x = t * W; const y = gy - u * (6 - 1.8 * Math.sin(t * Math.PI)); g.fillStyle = ['#ff9a4a', '#ffd24a', '#ff6aa0', '#7ad0ff'][i % 4]; g.beginPath(); g.arc(x, y + u * 0.4, u * 0.28, 0, 6.3); g.fill(); } }
  } else {
    // lane: fence, lamps, pumpkins, small bushes right behind the sidewalk
    const gyl = gy - u * 0.2;
    g.fillStyle = th.ground; g.fillRect(0, gyl - u * 1.0, W, u * 1.0);
    g.strokeStyle = OUT; g.lineWidth = u * 0.05;
    for (let x = 0.4 * u; x < W; x += 0.7 * u) { g.fillStyle = th.prop === 'fence' ? '#2a2038' : '#e8dcc8'; g.beginPath(); g.moveTo(x, gyl); g.lineTo(x, gyl - 1.1 * u); g.lineTo(x + 0.2 * u, gyl - 1.3 * u); g.lineTo(x + 0.4 * u, gyl - 1.1 * u); g.lineTo(x + 0.4 * u, gyl); g.closePath(); g.fill(); g.stroke(); }
    g.fillStyle = th.prop === 'fence' ? '#2a2038' : '#d8ccb8'; g.fillRect(0, gyl - 0.85 * u, W, 0.14 * u); g.fillRect(0, gyl - 0.4 * u, W, 0.14 * u);
    for (let i = 0; i < 4; i++) { const bx = (i + 0.3) * W / 4 + r() * u * 2; ell(g, bx, gyl - 0.5 * u, 0.9 * u, 0.7 * u, '#2a7a36', OUT); }
    for (let i = 0; i < 6; i++) { const px = (i + 0.5) * W / 6 + (r() - 0.5) * u; ell(g, px, gyl - 0.3 * u, 0.4 * u, 0.33 * u, '#ff8a20', OUT); g.fillStyle = '#ffe04a'; g.fillRect(px - 0.14 * u, gyl - 0.38 * u, 0.1 * u, 0.1 * u); g.fillRect(px + 0.05 * u, gyl - 0.38 * u, 0.1 * u, 0.1 * u); }
    for (let i = 0; i < 3; i++) { const lx = (i + 0.7) * W / 3; g.fillStyle = '#2a2a3a'; g.fillRect(lx - 0.07 * u, gyl - 3.4 * u, 0.14 * u, 3.4 * u); g.fillStyle = '#ffe49a'; g.beginPath(); g.arc(lx, gyl - 3.6 * u, 0.32 * u, 0, 6.3); g.fill(); const gl = g.createRadialGradient(lx, gyl - 3.6 * u, 0, lx, gyl - 3.6 * u, 3 * u); gl.addColorStop(0, 'rgba(255,220,130,.5)'); gl.addColorStop(1, 'rgba(255,220,130,0)'); g.fillStyle = gl; g.fillRect(lx - 3 * u, gyl - 6.6 * u, 6 * u, 6 * u); }
    for (let i = 0; i < 3; i++) { treeTile(g, (i + 0.15) * W / 3, gyl - u * 0.5, u * 1.6, th.tree, 'round'); }
  }
  return { canvas: c, w: TW, h: HU };
}

export function buildSky(th, w, h, dpr) {
  const c = document.createElement('canvas'); c.width = Math.ceil(w * dpr); c.height = Math.ceil(h * dpr);
  const g = c.getContext('2d'); g.scale(dpr, dpr);
  const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, th.skyTop); gr.addColorStop(0.55, th.skyMid); gr.addColorStop(1, th.skyBot);
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  const r = rng(77);
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(255,255,255,${0.25 + r() * 0.6})`; const s = 0.6 + r() * 1.6; g.beginPath(); g.arc(r() * w, r() * h * 0.5, s, 0, 6.3); g.fill(); }
  return c;
}
export function drawMoon(g, x, y, r, th) {
  const gl = g.createRadialGradient(x, y, r * 0.5, x, y, r * 3); gl.addColorStop(0, 'rgba(255,240,190,.45)'); gl.addColorStop(1, 'rgba(255,240,190,0)');
  g.fillStyle = gl; g.fillRect(x - r * 3, y - r * 3, r * 6, r * 6);
  g.fillStyle = th.moon; g.beginPath(); g.arc(x, y, r, 0, 6.3); g.fill();
  g.fillStyle = 'rgba(160,140,170,.35)'; for (const [dx, dy, rr2] of [[-0.3, -0.2, 0.22], [0.25, 0.1, 0.16], [-0.1, 0.4, 0.12]]) { g.beginPath(); g.arc(x + dx * r, y + dy * r, rr2 * r, 0, 6.3); g.fill(); }
}
export function drawLeaf(g, x, y, s, rot, col) {
  g.save(); g.translate(x, y); g.rotate(rot); g.fillStyle = col; g.beginPath(); g.moveTo(0, -s); g.quadraticCurveTo(s * 0.8, -s * 0.2, 0, s); g.quadraticCurveTo(-s * 0.8, -s * 0.2, 0, -s); g.fill(); g.restore();
}
export function drawHero(g, x, y, u, id, v, ph, fl, bucketLight, time) {
  // warm lantern light on the ground
  const gr = g.createRadialGradient(x + u * 1.8, y, 0, x + u * 1.8, y, u * 4.2); gr.addColorStop(0, 'rgba(255,200,110,.35)'); gr.addColorStop(1, 'rgba(255,200,110,0)');
  g.fillStyle = gr; g.fillRect(x - u * 3, y - u * 3, u * 10, u * 4);
  drawKid(g, id, v, ph, x, y, 1.9 * u, false, fl);
}
