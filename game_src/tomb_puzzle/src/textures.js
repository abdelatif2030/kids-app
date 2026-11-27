// Every picture in the tomb is drawn here with a 2D canvas (original hieroglyph-style symbols, no files).
import * as THREE from 'three';

export const PAL = {
  sand: { bg: 0x1c120b, floorA: '#dcbc82', floorB: '#cfae72', line: '#a07a44', wall: '#c99a5c', wallDark: '#8c6236', glyph: '#6d4120', trim: '#f0c850', carpet: '#b3202a', carpet2: '#7e1219', amb: 0xffe2b8, ambG: 0x6a4a2a, ambI: 1.15, sun: 0xffd9a0, sunI: 1.1, torch: 0xffa040 },
  gold: { bg: 0x241705, floorA: '#e6c872', floorB: '#d8b85c', line: '#9a7420', wall: '#d6a840', wallDark: '#8a6414', glyph: '#6a4208', trim: '#fff0a0', carpet: '#9c1530', carpet2: '#640a1a', amb: 0xfff0c0, ambG: 0x7a5a1a, ambI: 1.2, sun: 0xffe090, sunI: 1.2, torch: 0xffb030 },
  moon: { bg: 0x070c1c, floorA: '#8e9cbc', floorB: '#7f8eb0', line: '#566486', wall: '#7585ae', wallDark: '#434f78', glyph: '#27335c', trim: '#c4d8ff', carpet: '#2c40a0', carpet2: '#1a2a70', amb: 0xaec4ff, ambG: 0x28345a, ambI: 1.0, sun: 0xbcd0ff, sunI: 0.85, torch: 0xff9a48 },
  tut: { bg: 0x1a1206, floorA: '#dfc078', floorB: '#cdb068', line: '#96702a', wall: '#c9992e', wallDark: '#7c5a10', glyph: '#5f4306', trim: '#ffe98a', carpet: '#147d72', carpet2: '#0b4f47', amb: 0xffeec2, ambG: 0x6a521a, ambI: 1.2, sun: 0xffdf94, sunI: 1.15, torch: 0xffa840 },
  hat: { bg: 0x201410, floorA: '#e6cdb2', floorB: '#dbc09e', line: '#b08a5e', wall: '#d9b98c', wallDark: '#9a7648', glyph: '#7a5226', trim: '#fff0cd', carpet: '#b3543f', carpet2: '#7e3222', amb: 0xffe8cc, ambG: 0x77543a, ambI: 1.15, sun: 0xffd9ae, sunI: 1.1, torch: 0xff9a40 },
};

function rngf(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, repeat = false) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  return t;
}

/** Original hieroglyph-like glyphs: eye, ankh, bird, water, scarab, sun, feather, lotus, snake, reed. */
export function glyph(g, kind, x, y, s, col) {
  g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 0.09; g.lineCap = 'round'; g.lineJoin = 'round';
  switch (kind % 10) {
    case 0: g.beginPath(); g.moveTo(-0.5, 0); g.quadraticCurveTo(0, -0.45, 0.5, 0); g.quadraticCurveTo(0, 0.3, -0.5, 0); g.stroke(); g.beginPath(); g.arc(0, -0.02, 0.14, 0, 7); g.fill(); g.beginPath(); g.moveTo(-0.2, 0.2); g.lineTo(-0.3, 0.5); g.moveTo(0.1, 0.22); g.quadraticCurveTo(0.3, 0.45, 0.1, 0.55); g.stroke(); break;
    case 1: g.beginPath(); g.ellipse(0, -0.3, 0.2, 0.28, 0, 0, 7); g.stroke(); g.beginPath(); g.moveTo(0, -0.02); g.lineTo(0, 0.55); g.moveTo(-0.3, 0.12); g.lineTo(0.3, 0.12); g.stroke(); break;
    case 2: g.beginPath(); g.ellipse(0, 0.08, 0.34, 0.2, -0.2, 0, 7); g.stroke(); g.beginPath(); g.arc(0.32, -0.15, 0.1, 0, 7); g.fill(); g.beginPath(); g.moveTo(0.4, -0.15); g.lineTo(0.55, -0.1); g.moveTo(-0.3, 0.15); g.lineTo(-0.55, 0.3); g.moveTo(-0.05, 0.28); g.lineTo(-0.05, 0.5); g.moveTo(0.1, 0.28); g.lineTo(0.1, 0.5); g.stroke(); break;
    case 3: for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(-0.5, -0.25 + i * 0.25); g.lineTo(-0.25, -0.4 + i * 0.25); g.lineTo(0, -0.25 + i * 0.25); g.lineTo(0.25, -0.4 + i * 0.25); g.lineTo(0.5, -0.25 + i * 0.25); g.stroke(); } break;
    case 4: g.beginPath(); g.ellipse(0, 0.05, 0.22, 0.3, 0, 0, 7); g.fill(); g.beginPath(); g.arc(0, -0.3, 0.12, 0, 7); g.fill(); g.beginPath(); for (const sx of [-1, 1]) { g.moveTo(sx * 0.2, -0.05); g.lineTo(sx * 0.5, -0.2); g.moveTo(sx * 0.2, 0.1); g.lineTo(sx * 0.5, 0.15); g.moveTo(sx * 0.15, 0.28); g.lineTo(sx * 0.4, 0.5); } g.stroke(); break;
    case 5: g.beginPath(); g.arc(0, 0, 0.22, 0, 7); g.stroke(); g.beginPath(); g.arc(0, 0, 0.07, 0, 7); g.fill(); for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.283; g.moveTo(Math.cos(a) * 0.3, Math.sin(a) * 0.3); g.lineTo(Math.cos(a) * 0.46, Math.sin(a) * 0.46); } g.stroke(); break;
    case 6: g.beginPath(); g.ellipse(0, 0, 0.14, 0.5, 0, 0, 7); g.stroke(); g.beginPath(); g.moveTo(0, -0.5); g.lineTo(0, 0.5); for (let i = -2; i <= 2; i++) { g.moveTo(0, i * 0.18); g.lineTo(0.12, i * 0.18 - 0.1); } g.stroke(); break;
    case 7: for (const a of [-0.7, 0, 0.7]) { g.save(); g.rotate(a); g.beginPath(); g.ellipse(0, -0.2, 0.1, 0.32, 0, 0, 7); g.stroke(); g.restore(); } g.beginPath(); g.moveTo(0, 0.1); g.lineTo(0, 0.55); g.stroke(); break;
    case 8: g.beginPath(); g.moveTo(-0.5, 0.2); g.bezierCurveTo(-0.3, -0.4, -0.1, 0.5, 0.1, -0.1); g.bezierCurveTo(0.2, -0.4, 0.4, -0.1, 0.5, -0.3); g.stroke(); break;
    default: g.beginPath(); g.moveTo(0, 0.5); g.lineTo(0, -0.4); g.stroke(); g.beginPath(); g.ellipse(0, -0.35, 0.1, 0.18, 0, 0, 7); g.fill(); break;
  }
  g.restore();
}

export function makeFloorTex(P) {
  const [c, g] = canvas(256, 256); const r = rngf(7);
  g.fillStyle = P.floorA; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1100; i++) { g.fillStyle = r() > 0.5 ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'; g.fillRect(r() * 256, r() * 256, 2 + r() * 3, 2 + r() * 3); }
  g.fillStyle = P.floorB; g.fillRect(8, 8, 240, 240);
  for (let i = 0; i < 700; i++) { g.fillStyle = r() > 0.5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.07)'; g.fillRect(8 + r() * 238, 8 + r() * 238, 2 + r() * 4, 2 + r() * 4); }
  g.strokeStyle = P.line; g.lineWidth = 6; g.strokeRect(3, 3, 250, 250);
  g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 2; g.strokeRect(9, 9, 238, 238);
  return tex(c);
}

export function makeCrumbleTex(P) {
  const [c, g] = canvas(256, 256); const r = rngf(11);
  g.fillStyle = P.floorB; g.fillRect(0, 0, 256, 256);
  g.fillStyle = 'rgba(70,40,10,.22)'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) { g.fillStyle = r() > 0.5 ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.1)'; g.fillRect(r() * 256, r() * 256, 2 + r() * 4, 2 + r() * 4); }
  g.strokeStyle = '#3a2410'; g.lineWidth = 5; g.lineCap = 'round';
  for (let k = 0; k < 4; k++) { g.beginPath(); let x = 128 + (r() - 0.5) * 60; let y = 128 + (r() - 0.5) * 60; g.moveTo(x, y); for (let i = 0; i < 5; i++) { x += (r() - 0.5) * 70; y += (r() - 0.5) * 70; g.lineTo(x, y); } g.stroke(); }
  g.strokeStyle = '#6a4a22'; g.lineWidth = 6; g.setLineDash([16, 10]); g.strokeRect(4, 4, 248, 248);
  return tex(c);
}

export function makeWallSideTex(P) {
  const [c, g] = canvas(256, 256); const r = rngf(3);
  g.fillStyle = P.wall; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1400; i++) { g.fillStyle = r() > 0.5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.06)'; g.fillRect(r() * 256, r() * 256, 2 + r() * 4, 2 + r() * 4); }
  g.fillStyle = P.wallDark; g.fillRect(0, 0, 256, 20); g.fillStyle = P.trim; g.fillRect(0, 20, 256, 6);
  g.fillStyle = P.wallDark; g.fillRect(0, 232, 256, 24); g.fillStyle = P.trim; g.fillRect(0, 226, 256, 5);
  g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 3; g.strokeRect(1, 1, 254, 254);
  g.fillStyle = 'rgba(0,0,0,.1)'; g.fillRect(24, 44, 208, 170);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) glyph(g, Math.floor(r() * 10), 56 + i * 72, 90 + j * 76, 52, P.glyph);
  return tex(c);
}

export function makeWallTopTex(P) {
  const [c, g] = canvas(128, 128); const r = rngf(5);
  g.fillStyle = P.wall; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 400; i++) { g.fillStyle = r() > 0.5 ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)'; g.fillRect(r() * 128, r() * 128, 2 + r() * 3, 2 + r() * 3); }
  g.strokeStyle = P.trim; g.lineWidth = 5; g.strokeRect(4, 4, 120, 120);
  return tex(c);
}

export function makeCarpetTex(P) {
  const [c, g] = canvas(256, 256);
  g.fillStyle = P.carpet; g.fillRect(0, 0, 256, 256);
  g.fillStyle = P.carpet2; for (let i = 0; i < 8; i++) { g.beginPath(); g.moveTo(40 + 22 * (i % 2), i * 32 + 16); g.lineTo(60 + 22 * (i % 2), i * 32); g.lineTo(80 + 22 * (i % 2), i * 32 + 16); g.lineTo(60 + 22 * (i % 2), i * 32 + 32); g.fill(); }
  g.fillStyle = '#e8c050'; g.fillRect(0, 0, 18, 256); g.fillRect(238, 0, 18, 256);
  g.fillStyle = P.carpet2; g.fillRect(18, 0, 8, 256); g.fillRect(230, 0, 8, 256);
  g.strokeStyle = '#e8c050'; g.lineWidth = 4; g.strokeRect(34, 0, 188, 256);
  // lotus in the middle
  g.save(); g.translate(128, 128); g.fillStyle = '#f4d878'; g.strokeStyle = '#7a4a10'; g.lineWidth = 3;
  for (const a of [-1.1, -0.55, 0, 0.55, 1.1]) { g.save(); g.rotate(a); g.beginPath(); g.ellipse(0, -44, 14, 40, 0, 0, 7); g.fill(); g.stroke(); g.restore(); }
  g.fillStyle = '#e8402a'; g.beginPath(); g.arc(0, 0, 14, 0, 7); g.fill(); g.stroke(); g.restore();
  return tex(c);
}

export function makePlateTex(col) {
  const [c, g] = canvas(256, 256); g.translate(128, 128);
  const gr = g.createRadialGradient(0, 0, 10, 0, 0, 124); gr.addColorStop(0, '#fff4b0'); gr.addColorStop(0.5, '#f2c43a'); gr.addColorStop(1, '#b8841a');
  g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 124, 0, 7); g.fill();
  g.fillStyle = col; g.beginPath(); g.arc(0, 0, 124, 0, 7); g.arc(0, 0, 108, 0, 7, true); g.fill();
  g.strokeStyle = '#8a5a10'; g.lineWidth = 5; for (let i = 0; i < 16; i++) { const a = (i / 16) * 6.283; g.beginPath(); g.moveTo(Math.cos(a) * 38, Math.sin(a) * 38); g.lineTo(Math.cos(a) * 100, Math.sin(a) * 100); g.stroke(); }
  g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fillStyle = '#ffe680'; g.fill(); g.stroke();
  g.beginPath(); g.arc(0, 0, 16, 0, 7); g.fillStyle = '#fff'; g.fill();
  return tex(c);
}

export function makeBlockTex(P) {
  const [c, g] = canvas(256, 256); const r = rngf(9);
  g.fillStyle = P.wall; g.fillRect(0, 0, 256, 256);
  g.fillStyle = 'rgba(255,255,255,.12)'; g.fillRect(0, 0, 256, 10);
  for (let i = 0; i < 700; i++) { g.fillStyle = r() > 0.5 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.08)'; g.fillRect(r() * 256, r() * 256, 2 + r() * 4, 2 + r() * 4); }
  g.strokeStyle = P.glyph; g.lineWidth = 8; g.strokeRect(14, 14, 228, 228);
  g.strokeStyle = P.trim; g.lineWidth = 4; g.strokeRect(26, 26, 204, 204);
  glyph(g, 5, 128, 128, 120, P.glyph);
  g.strokeStyle = 'rgba(0,0,0,.4)'; g.lineWidth = 5; g.strokeRect(2, 2, 252, 252);
  return tex(c);
}

export function makeDoorTex(col, kind = 'door') {
  const [c, g] = canvas(256, 256);
  g.fillStyle = '#7a6a58'; g.fillRect(0, 0, 256, 256);
  g.fillStyle = '#8c7b66'; g.fillRect(10, 10, 236, 236);
  g.strokeStyle = '#3a2e22'; g.lineWidth = 6; g.strokeRect(5, 5, 246, 246);
  if (kind === 'lock') { g.fillStyle = '#e8c040'; g.fillRect(10, 10, 236, 236); glyph(g, 1, 128, 120, 150, '#6a4208'); g.fillStyle = '#3a2208'; g.beginPath(); g.arc(128, 112, 14, 0, 7); g.fill(); g.fillRect(122, 112, 12, 50); }
  else if (kind === 'gate') { g.fillStyle = '#e8902a'; g.fillRect(10, 10, 236, 236); glyph(g, 5, 128, 128, 170, '#6a2c08'); }
  else {
    g.fillStyle = col; g.fillRect(20, 20, 216, 26); g.fillRect(20, 210, 216, 26);
    glyph(g, 0, 128, 128, 120, '#2a1e12');
    g.fillStyle = col; g.beginPath(); g.arc(128, 128, 18, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 4; g.stroke();
  }
  return tex(c);
}

export function makeArrowTex() {
  const [c, g] = canvas(128, 128);
  g.fillStyle = 'rgba(255,214,80,.95)'; g.strokeStyle = 'rgba(90,50,0,.85)'; g.lineWidth = 6; g.lineJoin = 'round';
  g.beginPath(); g.moveTo(64, 10); g.lineTo(112, 68); g.lineTo(80, 68); g.lineTo(80, 118); g.lineTo(48, 118); g.lineTo(48, 68); g.lineTo(16, 68); g.closePath(); g.fill(); g.stroke();
  return tex(c);
}

/** Loads a shared-pool exterior picture (assets/games/art/, reached via a ../art/ relative path) as a texture for
 *  the menu / tomb-map backdrops. Failure is graceful by design: on error it calls onErr and the caller simply keeps
 *  its existing background — the screen never breaks because a pool picture is missing. */
export function loadExteriorTex(url, onOk, onErr) {
  try {
    new THREE.TextureLoader().load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; if (onOk) onOk(t); }, undefined, () => { if (onErr) onErr(); });
  } catch (_) { if (onErr) onErr(); }
}

export function makeGlowTex(col = '255,200,100') {
  const [c, g] = canvas(64, 64); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, `rgba(${col},1)`); gr.addColorStop(0.35, `rgba(${col},.45)`); gr.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return tex(c);
}
export function makeShadowTex() {
  const [c, g] = canvas(64, 64); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(0,0,0,.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return tex(c);
}
