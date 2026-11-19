// Small pictures made with the same drawing code as the game: clothing, hair styles, pets and whole looks (cached as data URLs).
import { drawDoll, drawPet } from './art.js';
import { PETS } from './data.js';
import { defaultLook } from './logic.js';

// where to look at the doll for each slot: [centre x, centre y, size] in doll units
const FOCUS = { dress: [0, 135, 170], top: [0, 80, 62], bottom: [0, 150, 110], shoes: [0, 204, 40], bag: [30, 110, 40], neck: [0, 56, 44], ears: [0, 42, 62], wrist: [24, 106, 40], head: [0, 12, 70], face: [0, 30, 48] };
const N = 112;

function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

export function makeThumbs() {
  const cache = new Map();
  const memo = (key, fn) => { let v = cache.get(key); if (!v) { v = fn(); cache.set(key, v); } return v; };
  const base = () => { const l = defaultLook(); l.outfit = {}; l.hairStyle = 'long'; return l; };
  return {
    item(it) {
      return memo(`i:${it.id}`, () => {
        const c = cv(N, N); const g = c.getContext('2d');
        const [fx, fy, size] = FOCUS[it.slot] || [0, 100, 200];
        const s = N / size;
        const look = base(); look.outfit = { [it.slot]: it.id };
        drawDoll(g, N / 2 - fx * s, N / 2 - fy * s, s, look, 0, {});
        return c.toDataURL();
      });
    },
    hair(style, color) {
      return memo(`h:${style}:${color}`, () => {
        const c = cv(N, N); const g = c.getContext('2d');
        const look = base(); look.hairStyle = style; look.hairColor = color;
        const s = N / 100;
        drawDoll(g, N / 2, N * 0.18, s, look, 0, {});
        return c.toDataURL();
      });
    },
    pet(id) {
      return memo(`p:${id}`, () => {
        const c = cv(N, N); const g = c.getContext('2d');
        const pet = PETS.find((p) => p.id === id);
        drawPet(g, N / 2, N * 0.5, N * 0.42, pet, 0, {});
        return c.toDataURL();
      });
    },
    look(look) {
      const c = cv(90, 120); const g = c.getContext('2d');
      const s = 118 / 228;
      drawDoll(g, 45, 2 + 12 * s, s, look, 0, {});
      return c.toDataURL();
    },
    clear() { cache.clear(); },
  };
}
