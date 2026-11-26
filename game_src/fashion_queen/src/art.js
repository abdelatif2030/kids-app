// Fashion Queen art: the stylist doll (rotatable, animated), pets, furniture and scenes, all drawn in code with soft gradients to give a
// glossy 3D-cartoon look (canvas 2D with shading, not a polygon engine).
import { ITEMS } from './data.js';

const byId = new Map(ITEMS.map((i) => [i.id, i]));
export const itemOf = (id) => byId.get(id);

const shade = (hex, k) => {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16; let g = (n >> 8) & 255; let b = n & 255;
  r = Math.max(0, Math.min(255, Math.round(r * k))); g = Math.max(0, Math.min(255, Math.round(g * k))); b = Math.max(0, Math.min(255, Math.round(b * k)));
  return `rgb(${r},${g},${b})`;
};
const grad = (c, x0, y0, x1, y1, col) => { const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, shade(col, 1.18)); g.addColorStop(0.55, col); g.addColorStop(1, shade(col, 0.78)); return g; };

/** look: { skin, hairStyle, hairColor, eye, lips, blush, shadow, lash, nails, outfit: {slot: itemId}, expr } */
export function drawDoll(c, cx, y0, s, look, t, opts = {}) {
  const px = (v) => v * s;
  const turn = opts.turn ?? 0; // -1..1 rotation of the doll
  const sx = Math.cos(turn * Math.PI * 0.5);
  const o = look.outfit || {};
  const get = (slot) => (o[slot] ? byId.get(o[slot]) : null);
  const sway = Math.sin(t * 2) * s * 0.5;
  const walk = opts.walk ? Math.sin(t * 8) : 0;
  c.save(); c.translate(cx + sway * 0.2, y0 + (opts.walk ? Math.abs(Math.sin(t * 8)) * s * -1.2 : 0)); c.scale(sx || 0.05, 1);
  const skin = look.skin || '#ffe0c8';
  // hair back
  const hc = look.hairColor || '#7a4a2a';
  c.fillStyle = grad(c, -px(20), 0, px(20), px(80), hc);
  const hs = look.hairStyle || 'long';
  if (hs === 'long' || hs === 'wavy') { c.beginPath(); c.ellipse(0, px(36), px(24), px(42), 0, 0, 6.3); c.fill(); if (hs === 'wavy') for (let k = 0; k < 6; k++) { c.beginPath(); c.arc(px(-22 + k * 8.8), px(72 + (k % 2) * 3), px(5.5), 0, 6.3); c.fill(); } }
  else if (hs === 'curly') { c.beginPath(); c.ellipse(0, px(32), px(28), px(36), 0, 0, 6.3); c.fill(); for (let k = 0; k < 9; k++) { c.beginPath(); c.arc(px(-26 + k * 6.5), px(66 + (k % 2) * 4), px(6.5), 0, 6.3); c.fill(); } }
  else if (hs === 'pony') { c.beginPath(); c.ellipse(px(26), px(46 + walk * 3), px(9), px(26), 0.3 + walk * 0.15, 0, 6.3); c.fill(); }
  else if (hs === 'braid') { for (let k = 0; k < 7; k++) { c.beginPath(); c.arc(px(-3 + (k % 2) * 3), px(56 + k * 6), px(5.2), 0, 6.3); c.fill(); } }
  else if (hs === 'pigtails') { for (const sd of [-1, 1]) { c.beginPath(); c.ellipse(sd * px(24), px(44), px(8), px(22), sd * 0.2, 0, 6.3); c.fill(); } }
  // arms and legs
  c.fillStyle = grad(c, 0, 0, px(8), 0, skin);
  const arm = (sd) => { c.save(); c.translate(sd * px(21), px(62)); c.rotate(sd * (-(o.dress ? 0.24 : 0.1) + (opts.walk ? walk * 0.35 * sd : 0)) + (opts.wave && sd > 0 ? -2.3 + Math.sin(t * 9) * 0.4 : 0)); c.beginPath(); c.roundRect(-px(5), 0, px(10), px(46), px(5)); c.fill(); c.restore(); };
  const drawArms = () => { c.fillStyle = grad(c, 0, 0, px(8), 0, skin); arm(-1); arm(1); }; // called after the clothes: arms and hands stay in front of the dress (owner 2026-11-26)
  const leg = (sd) => { c.save(); c.translate(sd * px(6), px(142)); c.rotate(opts.walk ? -walk * 0.28 * sd : 0); c.beginPath(); c.roundRect(-px(4.5), 0, px(9), px(56), px(4.5)); c.fill(); c.restore(); };
  leg(-1); leg(1);
  // bottom / dress / top
  const dress = get('dress'); const top = get('top'); const bot = get('bottom');
  const cloth = (col, fn) => { c.fillStyle = grad(c, -px(30), px(60), px(30), px(180), col); c.strokeStyle = 'rgba(0,0,0,.14)'; c.lineWidth = px(0.8); c.beginPath(); fn(); c.closePath(); c.fill(); c.stroke(); };
  const bodyTop = (col) => cloth(col, () => { c.moveTo(-px(17), px(58)); c.lineTo(px(17), px(58)); c.lineTo(px(16), px(100)); c.lineTo(-px(16), px(100)); });
  if (dress) {
    const col = dress.color; const st = dress.style;
    cloth(col, () => {
      if (st === 'gown') { c.moveTo(-px(16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(19), px(100)); c.lineTo(px(46), px(204)); c.quadraticCurveTo(0, px(218), -px(46), px(204)); c.lineTo(-px(19), px(100)); }
      else if (st === 'ball') { c.moveTo(-px(16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(18), px(96)); c.bezierCurveTo(px(70), px(120), px(70), px(190), px(52), px(208)); c.quadraticCurveTo(0, px(222), -px(52), px(208)); c.bezierCurveTo(-px(70), px(190), -px(70), px(120), -px(18), px(96)); }
      else if (st === 'mermaid') { c.moveTo(-px(16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(17), px(120)); c.quadraticCurveTo(px(20), px(168), px(40), px(206)); c.quadraticCurveTo(0, px(194), -px(40), px(206)); c.quadraticCurveTo(-px(20), px(168), -px(17), px(120)); }
      else if (st === 'mini') { c.moveTo(-px(16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(18), px(100)); c.lineTo(px(30), px(138)); c.lineTo(-px(30), px(138)); c.lineTo(-px(18), px(100)); }
      else if (st === 'wrap') { c.moveTo(-px(16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(18), px(104)); c.lineTo(px(34), px(160)); c.lineTo(-px(34), px(160)); c.lineTo(-px(18), px(104)); }
      else { c.moveTo(-px(16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(18), px(100)); c.lineTo(px(38), px(174)); c.lineTo(-px(38), px(174)); c.lineTo(-px(18), px(100)); }
    });
    c.fillStyle = 'rgba(255,255,255,.35)'; c.beginPath(); c.ellipse(-px(5), px(80), px(8), px(12), 0, 0, 6.3); c.fill();
    // a soft scoop neckline, thin straps, folds in the skirt, a ribbon sash at the waist and a trimmed hem
    const HEM = { gown: [46, 204], ball: [52, 208], mermaid: [40, 206], mini: [30, 138], wrap: [34, 160], aline: [38, 174] }[st] || [38, 174];
    c.fillStyle = grad(c, 0, px(54), 0, px(66), skin); c.beginPath(); c.ellipse(0, px(57), px(10.5), px(7), 0, 0, Math.PI); c.fill();
    c.strokeStyle = shade(col, 0.8); c.lineWidth = px(1.1); c.beginPath(); c.arc(0, px(58.5), px(10.5), 0.05, Math.PI - 0.05); c.stroke();
    c.lineWidth = px(0.7);
    for (const k of [-0.75, -0.45, -0.15, 0.15, 0.45, 0.75]) {
      c.strokeStyle = k < 0 ? 'rgba(255,255,255,.32)' : 'rgba(0,0,0,.09)';
      c.beginPath(); c.moveTo(k * px(15), px(103)); c.quadraticCurveTo(k * px(HEM[0] * 0.62), px((103 + HEM[1]) / 2), k * px(HEM[0] * 0.95), px(HEM[1] - 3)); c.stroke();
    }
    c.fillStyle = shade(col, 0.82); c.beginPath(); c.roundRect(-px(17.5), px(97), px(35), px(5.5), px(2.5)); c.fill();
    c.fillStyle = 'rgba(255,255,255,.5)'; c.beginPath(); c.roundRect(-px(17.5), px(97), px(35), px(1.8), px(1)); c.fill();
    c.fillStyle = shade(col, 0.7); for (const sd of [-1, 1]) { c.beginPath(); c.moveTo(0, px(99.5)); c.quadraticCurveTo(sd * px(8), px(92), sd * px(11), px(100)); c.quadraticCurveTo(sd * px(8), px(106), 0, px(99.5)); c.fill(); }
    c.fillStyle = '#fff'; c.beginPath(); c.arc(0, px(99.5), px(2), 0, 6.3); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.85)'; c.lineWidth = px(1.2); c.setLineDash([px(1.6), px(2.2)]); c.beginPath(); c.moveTo(-px(HEM[0] * 0.95), px(HEM[1] - 2)); c.quadraticCurveTo(0, px(HEM[1] + 11), px(HEM[0] * 0.95), px(HEM[1] - 2)); c.stroke(); c.setLineDash([]);
    c.strokeStyle = shade(col, 0.7); c.lineWidth = px(1.2); c.beginPath(); c.moveTo(-px(16), px(100)); c.lineTo(px(16), px(100)); c.stroke();
    if (st === 'ball' || st === 'gown') { c.fillStyle = 'rgba(255,255,255,.7)'; for (let k = 0; k < 9; k++) { c.beginPath(); c.arc(px(-20 + (k * 11) % 40), px(120 + (k * 17) % 70), px(1.4), 0, 6.3); c.fill(); } }
  } else {
    if (bot) {
      const col = bot.color;
      cloth(col, () => { const st = bot.style; if (st === 'skirt') { c.moveTo(-px(17), px(98)); c.lineTo(px(17), px(98)); c.lineTo(px(28), px(134)); c.lineTo(-px(28), px(134)); } else if (st === 'longskirt') { c.moveTo(-px(17), px(98)); c.lineTo(px(17), px(98)); c.lineTo(px(34), px(180)); c.lineTo(-px(34), px(180)); } else if (st === 'pleat') { c.moveTo(-px(17), px(98)); c.lineTo(px(17), px(98)); c.lineTo(px(30), px(140)); c.lineTo(-px(30), px(140)); } else if (st === 'shorts') { c.moveTo(-px(17), px(98)); c.lineTo(px(17), px(98)); c.lineTo(px(19), px(128)); c.lineTo(px(2), px(128)); c.lineTo(0, px(112)); c.lineTo(-px(2), px(128)); c.lineTo(-px(19), px(128)); } else { c.moveTo(-px(17), px(98)); c.lineTo(px(17), px(98)); c.lineTo(px(15), px(196)); c.lineTo(px(2), px(196)); c.lineTo(0, px(120)); c.lineTo(-px(2), px(196)); c.lineTo(-px(15), px(196)); } });
    } else { cloth('#f0c0d0', () => { c.moveTo(-px(17), px(98)); c.lineTo(px(17), px(98)); c.lineTo(px(21), px(128)); c.lineTo(-px(21), px(128)); }); }
    if (top) { bodyTop(top.color); if (top.style === 'hoodie') { c.fillStyle = shade(top.color, 0.85); c.beginPath(); c.ellipse(0, px(58), px(14), px(5), 0, 0, 6.3); c.fill(); } if (top.style === 'sweater') { c.strokeStyle = shade(top.color, 0.75); c.lineWidth = px(0.9); for (let k = 0; k < 4; k++) { c.beginPath(); c.moveTo(-px(16), px(66 + k * 8)); c.lineTo(px(16), px(66 + k * 8)); c.stroke(); } } c.fillStyle = 'rgba(255,255,255,.3)'; c.beginPath(); c.ellipse(-px(5), px(76), px(7), px(10), 0, 0, 6.3); c.fill(); }
    else bodyTop('#ffd8e8');
  }
  drawArms();
  // shoes
  const sh = get('shoes');
  if (sh) { c.fillStyle = grad(c, 0, px(196), 0, px(210), sh.color); c.strokeStyle = 'rgba(0,0,0,.25)'; c.lineWidth = px(0.8); for (const sd of [-1, 1]) { c.save(); c.translate(sd * px(6), px(198) - (opts.walk ? walk * sd * 3 : 0)); c.beginPath(); if (sh.style === 'boots') c.roundRect(-px(6), -px(14), px(13), px(24), px(3)); else c.roundRect(-px(7), 0, px(15), px(10), px(4)); c.fill(); c.stroke(); if (sh.style === 'heels' || sh.style === 'crystal') { c.fillStyle = sh.color; c.fillRect(px(3), px(8), px(2.5), px(6)); } c.restore(); } }
  // neck, head
  c.fillStyle = grad(c, 0, px(40), px(8), px(58), skin); c.fillRect(-px(4), px(46), px(8), px(12));
  c.fillStyle = grad(c, -px(20), px(10), px(20), px(52), skin); c.beginPath(); c.ellipse(0, px(30), px(20), px(23), 0, 0, 6.3); c.fill();
  // face
  const bl = look.blush; if (bl) { c.fillStyle = bl; c.globalAlpha = 0.5; c.beginPath(); c.ellipse(-px(12), px(38), px(5), px(3.4), 0, 0, 6.3); c.ellipse(px(12), px(38), px(5), px(3.4), 0, 0, 6.3); c.fill(); c.globalAlpha = 1; }
  const shd = look.shadow; if (shd) { c.fillStyle = shd; c.globalAlpha = 0.75; c.beginPath(); c.ellipse(-px(8), px(26.5), px(6.6), px(3.8), 0, 0, 6.3); c.ellipse(px(8), px(26.5), px(6.6), px(3.8), 0, 0, 6.3); c.fill(); c.globalAlpha = 1; }
  c.fillStyle = '#fff'; c.beginPath(); c.ellipse(-px(8), px(30), px(5), px(4.6), 0, 0, 6.3); c.ellipse(px(8), px(30), px(5), px(4.6), 0, 0, 6.3); c.fill();
  const blink = Math.sin(t * 1.3) > 0.985 || opts.blink;
  const ec = look.eye || '#4a2a1a';
  c.fillStyle = ec; c.beginPath(); c.arc(-px(8), px(30.5), px(blink ? 0.1 : 3.3), 0, 6.3); c.arc(px(8), px(30.5), px(blink ? 0.1 : 3.3), 0, 6.3); c.fill();
  c.fillStyle = '#111'; c.beginPath(); c.arc(-px(8), px(30.6), px(blink ? 0.05 : 1.6), 0, 6.3); c.arc(px(8), px(30.6), px(blink ? 0.05 : 1.6), 0, 6.3); c.fill();
  c.fillStyle = '#fff'; c.beginPath(); c.arc(-px(7), px(29.3), px(1.1), 0, 6.3); c.arc(px(9), px(29.3), px(1.1), 0, 6.3); c.fill();
  c.strokeStyle = '#3a2a3a'; c.lineWidth = px(look.lash === 'glam' ? 1.5 : look.lash === 'long' ? 1.2 : 0.9);
  const lf = look.lash === 'glam' ? 3 : look.lash === 'wing' ? 2 : look.lash === 'long' ? 2 : 1;
  for (const sd of [-1, 1]) { c.beginPath(); for (let k = 0; k < lf; k++) { c.moveTo(sd * px(12.5), px(27 + k * 1.6)); c.lineTo(sd * px(14.5 + k * 0.8), px(25 - k * 1.2)); } c.stroke(); }
  c.strokeStyle = 'rgba(120,70,50,.5)'; c.lineWidth = px(0.8); c.beginPath(); c.moveTo(0, px(34)); c.quadraticCurveTo(px(1.5), px(37), -px(0.5), px(37.5)); c.stroke();
  const lp = look.lips || '#d88a8a'; c.fillStyle = grad(c, 0, px(42), 0, px(49), lp); c.beginPath(); c.moveTo(-px(5), px(44)); c.quadraticCurveTo(0, px(41.5), px(5), px(44)); c.quadraticCurveTo(0, px(opts.smile ? 50 : 48.5), -px(5), px(44)); c.fill();
  // hair front
  c.fillStyle = grad(c, -px(22), px(0), px(22), px(30), hc); c.beginPath(); c.ellipse(0, px(15), px(22), px(13), 0, Math.PI, 0); c.fill(); c.beginPath(); c.ellipse(-px(19), px(26), px(5), px(13), 0.1, 0, 6.3); c.ellipse(px(19), px(26), px(5), px(13), -0.1, 0, 6.3); c.fill();
  if (hs === 'bun') { c.beginPath(); c.arc(0, px(2), px(9), 0, 6.3); c.fill(); }
  if (hs === 'bob') { c.beginPath(); c.roundRect(-px(23), px(14), px(46), px(36), px(14)); c.globalCompositeOperation = 'destination-over'; c.fill(); c.globalCompositeOperation = 'source-over'; }
  // nails
  if (look.nails) { c.fillStyle = look.nails; for (const sd of [-1, 1]) { c.beginPath(); c.ellipse(sd * px(24), px(108), px(2.2), px(1.6), 0, 0, 6.3); c.fill(); } }
  // jewellery and accessories
  const ne = get('neck'); if (ne) { c.strokeStyle = ne.color; c.fillStyle = ne.color; c.lineWidth = px(1.2); if (ne.style === 'pearls') { for (let k = 0; k < 9; k++) { const a = Math.PI * (0.15 + k * 0.088); c.beginPath(); c.arc(px(Math.cos(a) * 11), px(53 + Math.sin(a) * 7), px(1.6), 0, 6.3); c.fill(); } } else { c.beginPath(); c.arc(0, px(50), px(10), 0.2, Math.PI - 0.2); c.stroke(); c.font = `${px(7)}px system-ui`; c.textAlign = 'center'; if (ne.style === 'heart') c.fillText('💛', 0, px(64)); if (ne.style === 'star') c.fillText('⭐', 0, px(64)); } }
  const ea = get('ears'); if (ea) { c.fillStyle = ea.color; c.strokeStyle = ea.color; c.lineWidth = px(1); for (const sd of [-1, 1]) { if (ea.style === 'hoops') { c.beginPath(); c.arc(sd * px(20), px(42), px(3), 0, 6.3); c.stroke(); } else if (ea.style === 'drops') { c.beginPath(); c.moveTo(sd * px(20), px(40)); c.lineTo(sd * px(20), px(50)); c.stroke(); c.beginPath(); c.arc(sd * px(20), px(51), px(1.8), 0, 6.3); c.fill(); } else { c.beginPath(); c.arc(sd * px(20), px(41), px(1.8), 0, 6.3); c.fill(); } } }
  const wr = get('wrist'); if (wr) { c.strokeStyle = wr.color; c.lineWidth = px(2); for (const sd of [-1, 1]) { c.beginPath(); c.ellipse(sd * px(24), px(104), px(4), px(1.5), 0, 0, 6.3); c.stroke(); } }
  const bg = get('bag'); if (bg) { c.fillStyle = grad(c, 0, px(100), 0, px(120), bg.color); c.strokeStyle = shade(bg.color, 0.6); c.lineWidth = px(1); const bx = px(30); c.beginPath(); c.roundRect(bx - px(7), px(104), px(16), px(13), px(3)); c.fill(); c.stroke(); c.beginPath(); c.arc(bx + px(1), px(104), px(6), Math.PI, 0); c.stroke(); }
  const hd = get('head'); if (hd) drawHead(c, hd, px);
  const fc = get('face'); if (fc) { c.strokeStyle = fc.color; c.fillStyle = fc.colorName === 'black' ? 'rgba(20,20,30,.85)' : 'rgba(255,120,170,.65)'; c.lineWidth = px(1); for (const sd of [-1, 1]) { c.beginPath(); if (fc.style === 'heartglasses') { c.arc(sd * px(8) - px(2), px(29), px(5), 0, 6.3); } else c.roundRect(sd * px(8) - px(6), px(25), px(12), px(9), px(3)); c.fill(); c.stroke(); } c.beginPath(); c.moveTo(-px(3), px(29)); c.lineTo(px(3), px(29)); c.stroke(); }
  c.restore();
}

function drawHead(c, it, px) {
  const col = it.color; c.save();
  if (it.style === 'crown') { c.fillStyle = grad(c, 0, px(-6), 0, px(12), col); c.strokeStyle = shade(col, 0.6); c.lineWidth = px(0.8); c.beginPath(); c.moveTo(-px(14), px(12)); c.lineTo(-px(14), px(0)); c.lineTo(-px(7), px(7)); c.lineTo(0, px(-5)); c.lineTo(px(7), px(7)); c.lineTo(px(14), px(0)); c.lineTo(px(14), px(12)); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#ff4a7a'; c.beginPath(); c.arc(0, px(8), px(2.2), 0, 6.3); c.fill(); }
  else if (it.style === 'tiara') { c.strokeStyle = col; c.lineWidth = px(1.8); c.beginPath(); c.arc(0, px(14), px(14), Math.PI * 1.15, Math.PI * 1.85); c.stroke(); c.fillStyle = '#7ad8ff'; c.beginPath(); c.arc(0, px(0), px(2.4), 0, 6.3); c.fill(); }
  else if (it.style === 'bow') { c.fillStyle = col; c.beginPath(); c.moveTo(px(14), px(8)); c.lineTo(px(26), px(2)); c.lineTo(px(26), px(14)); c.closePath(); c.moveTo(px(14), px(8)); c.lineTo(px(2), px(2)); c.lineTo(px(2), px(14)); c.closePath(); c.fill(); }
  else if (it.style === 'sunhat') { c.fillStyle = '#f0d890'; c.strokeStyle = '#b8984a'; c.beginPath(); c.ellipse(0, px(12), px(34), px(8), 0, 0, 6.3); c.fill(); c.stroke(); c.beginPath(); c.ellipse(0, px(6), px(16), px(10), 0, Math.PI, 0); c.fill(); c.stroke(); c.fillStyle = col; c.fillRect(-px(16), px(6), px(32), px(3)); }
  else if (it.style === 'flowers') { c.font = `${px(9)}px system-ui`; c.textAlign = 'center'; for (const x of [-16, -8, 0, 8, 16]) c.fillText(['🌸', '🌷', '🌹', '🌷', '🌸'][(x + 16) / 8], px(x), px(14 + Math.abs(x) * 0.3)); }
  else if (it.style === 'veil') { c.fillStyle = 'rgba(255,255,255,.55)'; c.strokeStyle = 'rgba(200,200,220,.7)'; c.beginPath(); c.moveTo(-px(8), px(10)); c.quadraticCurveTo(-px(50), px(90), -px(44), px(190)); c.lineTo(px(44), px(190)); c.quadraticCurveTo(px(50), px(90), px(8), px(10)); c.closePath(); c.fill(); c.stroke(); }
  else if (it.style === 'beanie') { c.fillStyle = col; c.beginPath(); c.ellipse(0, px(12), px(22), px(16), 0, Math.PI, 0); c.fill(); c.fillRect(-px(22), px(10), px(44), px(6)); c.fillStyle = '#fff'; c.beginPath(); c.arc(0, px(-4), px(4), 0, 6.3); c.fill(); }
  c.restore();
}

export function drawPet(c, cx, cy, s, pet, t, st = {}) {
  const base = pet.base; const bounce = Math.sin(t * 4) * s * 0.03 * (st.happy ? 3 : 1);
  c.save(); c.translate(cx, cy + bounce);
  const ell = (x, y, rx, ry, col) => { c.fillStyle = grad(c, x - rx, y - ry, x + rx, y + ry, col); c.beginPath(); c.ellipse(x * s, y * s, rx * s, ry * s, 0, 0, 6.3); c.fill(); };
  c.fillStyle = 'rgba(0,0,0,.12)'; c.beginPath(); c.ellipse(0, s * 0.72, s * 0.6, s * 0.12, 0, 0, 6.3); c.fill();
  ell(0, 0.35, 0.55, 0.42, base); // body
  for (const sd of [-1, 1]) ell(sd * 0.3, 0.72, 0.14, 0.1, shade(base, 0.9));
  // ears
  const ear = pet.ear; for (const sd of [-1, 1]) { c.fillStyle = pet.id === 'panda' ? '#222' : shade(base, 0.82); c.beginPath(); if (ear === 'floppy') c.ellipse(sd * s * 0.42, -s * 0.12, s * 0.14, s * 0.3, sd * 0.3, 0, 6.3); else if (ear === 'long') c.ellipse(sd * s * 0.2, -s * 0.78, s * 0.12, s * 0.34, sd * 0.1, 0, 6.3); else if (ear === 'round') c.arc(sd * s * 0.36, -s * 0.38, s * 0.15, 0, 6.3); else { c.moveTo(sd * s * 0.45, -s * 0.2); c.lineTo(sd * s * 0.3, -s * 0.7); c.lineTo(sd * s * 0.1, -s * 0.3); c.closePath(); } c.fill(); }
  ell(0, -0.1, 0.5, 0.45, base); // head
  if (pet.id === 'panda') { c.fillStyle = '#222'; for (const sd of [-1, 1]) { c.beginPath(); c.ellipse(sd * s * 0.2, -s * 0.12, s * 0.12, s * 0.15, sd * 0.4, 0, 6.3); c.fill(); } }
  if (pet.id === 'pony') { c.fillStyle = '#ff8ac8'; c.beginPath(); c.ellipse(0, -s * 0.5, s * 0.3, s * 0.16, 0, Math.PI, 0); c.fill(); }
  const blink = Math.sin(t * 1.1 + pet.cost) > 0.97;
  c.fillStyle = '#fff'; for (const sd of [-1, 1]) { c.beginPath(); c.ellipse(sd * s * 0.2, -s * 0.12, s * 0.1, blink ? s * 0.01 : s * 0.12, 0, 0, 6.3); c.fill(); }
  c.fillStyle = '#222'; for (const sd of [-1, 1]) { c.beginPath(); c.arc(sd * s * 0.2, -s * 0.1, blink ? 0.2 : s * 0.06, 0, 6.3); c.fill(); }
  c.fillStyle = '#ff7a9a'; c.beginPath(); c.ellipse(0, s * 0.02, s * 0.06, s * 0.045, 0, 0, 6.3); c.fill();
  c.strokeStyle = '#a04a5a'; c.lineWidth = s * 0.02; c.beginPath(); c.arc(0, s * 0.04, s * (st.sad ? 0.05 : 0.1), st.sad ? Math.PI * 1.1 : 0.15, st.sad ? Math.PI * 1.9 : Math.PI - 0.15); c.stroke();
  if (st.happy) { c.fillStyle = '#ff6a9a'; c.font = `${s * 0.3}px system-ui`; c.textAlign = 'center'; c.fillText('💖', s * 0.5, -s * 0.5 - (t * 40 % s * 0.4)); }
  // outfit
  const o = st.outfit;
  if (o === 'bow') { c.fillStyle = '#ff4a8a'; c.beginPath(); c.moveTo(s * 0.2, -s * 0.5); c.lineTo(s * 0.42, -s * 0.6); c.lineTo(s * 0.42, -s * 0.4); c.closePath(); c.moveTo(s * 0.2, -s * 0.5); c.lineTo(0, -s * 0.6); c.lineTo(0, -s * 0.4); c.closePath(); c.fill(); }
  else if (o === 'hat') { c.fillStyle = '#7a4ad8'; c.beginPath(); c.moveTo(-s * 0.25, -s * 0.5); c.lineTo(0, -s * 0.95); c.lineTo(s * 0.25, -s * 0.5); c.closePath(); c.fill(); }
  else if (o === 'scarf') { c.fillStyle = '#e8344a'; c.fillRect(-s * 0.45, s * 0.2, s * 0.9, s * 0.1); c.fillRect(s * 0.2, s * 0.2, s * 0.1, s * 0.3); }
  else if (o === 'crown') { c.fillStyle = '#ffd23a'; c.beginPath(); c.moveTo(-s * 0.2, -s * 0.52); c.lineTo(-s * 0.2, -s * 0.7); c.lineTo(-s * 0.1, -s * 0.6); c.lineTo(0, -s * 0.76); c.lineTo(s * 0.1, -s * 0.6); c.lineTo(s * 0.2, -s * 0.7); c.lineTo(s * 0.2, -s * 0.52); c.closePath(); c.fill(); }
  else if (o === 'glasses') { c.strokeStyle = '#222'; c.lineWidth = s * 0.025; for (const sd of [-1, 1]) { c.beginPath(); c.arc(sd * s * 0.2, -s * 0.1, s * 0.12, 0, 6.3); c.stroke(); } }
  c.restore();
}

/** The painted backdrops (assets/games/fashion_queen/art/bg_<name>.webp), set once by the game after they load; a missing one keeps the code-drawn gradient. */
export const BG_PICS = {};
const BG_NAME = { palace: 'palace', map: 'palace', shop: 'studio', studio: 'studio', salon: 'salon', pets: 'pets', house: 'house', runway: 'runway' };

export function drawStage(c, W, H, kind, t) {
  const pic = BG_PICS[BG_NAME[kind]];
  if (pic) {
    // cover the whole stage with the picture, then a soft veil so the dolls and the panels stay readable
    const k = Math.max(W / pic.naturalWidth, H / pic.naturalHeight); const w = pic.naturalWidth * k; const h = pic.naturalHeight * k;
    c.drawImage(pic, (W - w) / 2, (H - h) / 2, w, h);
    c.fillStyle = 'rgba(255,240,250,.14)'; c.fillRect(0, 0, W, H);
    c.font = '26px system-ui'; c.textAlign = 'center';
    for (let i = 0; i < 6; i++) { c.globalAlpha = 0.55; c.fillText(['✨', '💖', '⭐'][i % 3], W * (0.12 + i * 0.15), H * (0.08 + 0.03 * Math.sin(t * 2 + i))); } c.globalAlpha = 1;
    return;
  }
  const g = c.createLinearGradient(0, 0, 0, H);
  const pal = { palace: ['#ffd8f0', '#d8a8f0'], studio: ['#ffe4f2', '#f8b8d8'], salon: ['#e8d8ff', '#ffb8d8'], pets: ['#c8f0ff', '#a8e8a0'], house: ['#fff0f8', '#ffd0e8'], runway: ['#2a1a5a', '#6a2a9a'], map: ['#a8e8ff', '#a8f0a8'], shop: ['#fff0c8', '#ffc8e8'] }[kind] || ['#ffd8f0', '#d8a8f0'];
  g.addColorStop(0, pal[0]); g.addColorStop(1, pal[1]); c.fillStyle = g; c.fillRect(0, 0, W, H);
  if (kind === 'palace' || kind === 'map') { c.fillStyle = 'rgba(255,255,255,.55)'; for (const x of [0.12, 0.3, 0.7, 0.88]) { c.fillRect(W * x - 22, H * 0.15, 44, H * 0.4); c.beginPath(); c.moveTo(W * x - 28, H * 0.15); c.lineTo(W * x, H * 0.04); c.lineTo(W * x + 28, H * 0.15); c.fill(); } }
  if (kind === 'runway') { for (let i = 0; i < 14; i++) { c.fillStyle = `rgba(255,255,255,${0.04 + (i % 3) * 0.03})`; c.beginPath(); c.moveTo(W * (i / 14), 0); c.lineTo(W * (i / 14) + 40, 0); c.lineTo(W * 0.5 + (i - 7) * 8, H); c.closePath(); c.fill(); } c.fillStyle = '#ff8ad8'; c.beginPath(); c.moveTo(W * 0.38, H * 0.2); c.lineTo(W * 0.62, H * 0.2); c.lineTo(W * 0.92, H); c.lineTo(W * 0.08, H); c.closePath(); c.fill(); }
  c.font = '26px system-ui'; c.textAlign = 'center';
  for (let i = 0; i < 9; i++) { c.globalAlpha = 0.6; c.fillText(['✨', '💖', '⭐'][i % 3], W * (0.08 + i * 0.105), H * (0.1 + 0.03 * Math.sin(t * 2 + i))); } c.globalAlpha = 1;
}

export function drawFurn(c, x, y, s, emoji, color, flip) {
  c.save(); c.translate(x, y); if (flip) c.scale(-1, 1);
  c.fillStyle = 'rgba(0,0,0,.12)'; c.beginPath(); c.ellipse(0, s * 0.42, s * 0.42, s * 0.1, 0, 0, 6.3); c.fill();
  if (color) { c.fillStyle = color; c.globalAlpha = 0.5; c.beginPath(); c.arc(0, 0, s * 0.46, 0, 6.3); c.fill(); c.globalAlpha = 1; }
  c.font = `${s * 0.85}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(emoji, 0, 0); c.restore();
}
