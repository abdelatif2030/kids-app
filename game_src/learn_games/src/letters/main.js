// «عالم رحلتي التعليمي» — Rehlaty Learning World: ONE strong learning game (owner 2026-11-12) with nine levels that teach
// the letters, words, numbers, counting, the order of the alphabet, shapes and colours, animals and what they eat, and
// good habits (listen to Mama and Baba, love your friends) with pictures, sound and 3D. A sunny pond with natural scenery;
// teacher Boom the owl stands on the bank: he tosses the pictures onto the water (he "picks"), asks, points, claps, and
// arranges every right answer on his picture rack. Mama and Baba step up in the habits level. Every right answer gets a
// short kind phrase; a wrong pick only wobbles (after two the right one glows). The calm music grows with each right
// answer. Five rounds per level; ALL levels are open from the start (owner, 2026-11-12); skills go to the parent dashboard.
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { Stage, M, canvasTex, labelTex } from '../kit/stage3d.js';
import { makeThing } from '../kit/things3d.js';
import { addSky, addClouds, scatter } from '../kit/realism.js';
import { buildWorld, WORLD_IDS, WORLD_NAMES, PADS } from '../kit/worlds3d.js';
import { makeActor, setArtBase, artProp } from '../kit/actors.js';
import { stepSeconds } from '../kit/clips.js';
// where the two worlds meet while they slide past each other (just outside the right edge of the screen at the start)
const SEAM_X = 14.5;
import { shapeGeo } from '../kit/shapes3d.js';
import { colorOf } from './colors.js';
import { NUMBERS } from '../kit/words.js';
import { LEVELS, ALL_LEVELS, EVERY_LEVEL, ARABIC_LEVELS, TOPIC_LEVELS, LevelPlay, levelsFor, cheer } from './levels.js';
import { EN_LEVELS, DE_LEVELS, FR_LEVELS, IT_LEVELS } from '../english/levels.js';
import { learnSections, numberItem } from '../learn/sections.js';
import { EXTRA_DEFS } from '../learn/extra.js';
import { nextNumber, prevNumber } from '../learn/numbers.js';
import { gen as learnLine } from '../learn/lines.js';
import { FreshMemory } from './fresh.js';
import { themeForWorld } from '../kit/themes.js';
import { ROUNDS } from './sim.js';

const TEXT = {
  title: ['عالم رحلتي التعليمي', 'Rehlaty Learning World'],
  pick: ['اختار المستوى', 'Choose a level'],
  no: ['مش هنا... اسمع تاني', 'Not here... listen again'],
  again: ['اسمع تاني', 'Hear again'],
  nextLevel: ['المستوى التالي ▶', 'Next level ▶'],
  levelsBtn: ['المستويات', 'Levels'],
  chooseHero: ['اختار شخصيتك!', 'Choose your hero!'],
  letsGo: ['يلا نبدأ المغامرة!', "Let's start the adventure!"],
  ageQ: ['عندك كام سنة؟', 'How old are you?'],
  replay: ['العب معانا تاني', 'Play with us again'], replaySay: ['يلا نلعب تاني!', "Let's play again!"],
  age2: ['عندك سنتين', 'You are two'], age3: ['عندك تلات سنين', 'You are three'], age4: ['عندك أربع سنين', 'You are four'],
  age5: ['عندك خمس سنين', 'You are five'], age6: ['عندك ست سنين', 'You are six'],
};

// calm, gentle music (slow, soft bells and a rocking bass); it opens up as the child answers
const THEME_WORLD = {
  ...THEME_GARDEN,
  tempo: 84,
  lead: 'bell',
  shaker: false,
  chords: [[48, [64, 67, 72]], [45, [64, 69, 72]], [41, [65, 69, 72]], [43, [62, 67, 71]], [48, [64, 67, 72]], [45, [64, 69, 72]], [43, [62, 67, 71]], [48, [64, 67, 76]]],
  melody: [[0, 0, 79], [0, 4, 84], [1, 0, 81], [1, 4, 76], [2, 0, 77], [2, 4, 81], [3, 0, 79], [3, 4, 74], [4, 0, 84], [4, 4, 79], [5, 0, 81], [5, 4, 88], [6, 0, 86], [6, 4, 83], [7, 0, 84]],
};
const PENTA = [72, 74, 76, 79, 81, 84, 86, 88]; // C major pentatonic: every tap rings a pleasant note
const RAFT = [0xff8a3a, 0xff5a8a, 0x4ac8ff, 0xffc93a, 0x7ad86a];

/** Scales a picture so it is always fully visible: about [h] tall and never wider than [w]; returns its height and lowest point. */
function fitThing(item, h, w) {
  const b = new THREE.Box3().setFromObject(item);
  const sz = b.getSize(new THREE.Vector3());
  const k = Math.min(h / Math.max(sz.y, 0.01), w / Math.max(sz.x, sz.z, 0.01));
  item.scale.multiplyScalar(k);
  const b2 = new THREE.Box3().setFromObject(item);
  return { h: b2.max.y - b2.min.y, minY: b2.min.y };
}
const SCALE = { camel: 1.15, horse: 1.15, giraffe: 0.8, rocket: 1.1, crescent: 1.4, cow: 1.1, bear: 1.3, bed: 1.05, tub: 1.05, pot: 1.25, plate: 1.25, bowl: 1.25, soap: 1.3, backpack: 1.25, toothbrush: 1.3, heart: 1.4, carrot: 1.5, bone: 1.6, grass: 1.3, honey: 1.5, cheese: 1.4, seeds: 1.6 };
const HAND = new THREE.Vector3(-5.0, 2.8, 2.0);
const LANDSCAPE = { portrait: false, span: 9.2, off: 0.9, zs: [-1.3, -0.2], hero: [-4.4, 4.6, 1.3], owl: [-6.7, 4.0, 0.85], stand: [-0.2, 3.3], cam: { box: [9.0, 5.1], target: [0, 2.5, 0.3], minAspect: 0 } };
const PORTRAIT = { portrait: true, span: 8.8, off: 0, zs: [-4.4, -2.5], hero: [-2.2, 5.8, 1.25], owl: [0.2, 5.4, 0.85], stand: [2.2, 2.6], cam: { box: [6.6, 4.4], target: [0, 2.6, 1.8], minAspect: 0 } };
const STAND = new THREE.Vector3(-1.5, 0, 5.4); // the picture of the question stands in FRONT of the choices (nearer the child), not among them
const RACK = new THREE.Vector3(5.2, 0, 3.0);
const RACK_S = 0.6;

const EXTRA_IDS = new Set(EXTRA_DEFS.map((d) => d.id));

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_WORLD });
    const sh = this.sh;
    setArtBase(`${sh.base}../art/`);
    this.girl = sh.T.girl;
    this.st = new Stage(sh, { bg: 0xcfeeff, ground: 0x9ad0a0, fov: 40, box: [7.2, 3.9], dir: [0, 0.5, 1], target: [0, 1.0, 0.8], wide: { box: [9.0, 5.1], target: [0, 2.5, 0.3], minAspect: 0 } });
    // Two layouts (owner 2026-11-13): sideways (wide) keeps the full scenery; upright (portrait) comes much closer: the choices in a
    // tighter row, the hero and the owl standing in front of them, bigger.
    this.layout = LANDSCAPE;
    this._portrait = false;
    const stageResize = sh.onResize;
    sh.onResize = (w, hh) => { this._applyLayout(w / hh); stageResize(w, hh); };
    this.opts = new Map();
    this.rackItems = [];
    this.cheerN = Math.floor(Math.random() * 9);
    this.worlds = {};
    this.worldId = null;
    this.padStyle = PADS.float;
    this._goWorld(0, true);
    if (/[?&]debug/.test(location.search)) window.__game = this; // test hook (?debug)
    this.fade = h('div', { class: 'lw-fade' });
    sh.root.append(this.fade);
    this.owl = makeActor('owl');
    this.owl.position.set(this.layout.owl[0], 0.16, this.layout.owl[1]);
    this.owl.scale.setScalar(this.layout.owl[2]); // the owl companion: bigger and clearer (owner 2026-11-13)
    this.owl.rotation.y = 0.25;
    this.st.add(this.owl);
    this.stand = this._makeStand();
    this._laidOut = undefined;
    this._applyLayout(sh.w / sh.h); // the right layout from the first frame
    this.st.resize(sh.w, sh.h);
    this._makeRack();
    this.save = sh.save;
    if (!this.save.lw) this.save.lw = { unlocked: 1, done: {} };
    this.mem = new FreshMemory(this.save.lw.fresh); // what this child already met (new things come first)
    if (this.save.lw.age >= 2 && this.save.lw.age <= 6) sh.age = this.save.lw.age; // the age the child chose in the game wins over the app's
    this.st.onFrame((dt, time) => this._frame(dt, time));
    sh.fonts().then(() => this._start()); // no start screen any more (owner 2026-11-13): straight to the levels page
  }

  // ---- the world ---------------------------------------------------------------------------------------------------

  _pond() {
    const s = this.st.scene;
    addSky(s);
    this.clouds = addClouds(s, 7, { y: 9, z: -18 });
    this.st.onFrame((dt) => this.clouds.userData.drift(dt));
    scatter(s, [
      { t: 'tree', x: -9.5, z: -5, s: 5.2 }, { t: 'tree', x: 9.8, z: -4.5, s: 4.6 }, { t: 'tree', x: -13, z: -2, s: 4.2 }, { t: 'tree', x: 13.5, z: -2.5, s: 5 },
      { t: 'bush', x: -8, z: 3.8, s: 0.9 }, { t: 'bush', x: 8.6, z: 3.5, s: 0.8 }, { t: 'rock', x: -7.4, z: 4.8, s: 0.55 }, { t: 'rock', x: 7.2, z: 5.2, s: 0.45 },
      ...Array.from({ length: 22 }, (_, i) => ({ t: 'flower', x: -12 + i * 1.12 + Math.sin(i) * 0.4, z: 6 + (i % 4) * 0.6 + Math.cos(i * 2) * 0.5 })),
    ], -0.2);
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(60, 40), M(0x8ad070, { roughness: 1 }));
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.2;
    grass.receiveShadow = true;
    s.add(grass);
    const bank = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 6.6, 0.3, 48), M(0xc8a070, { roughness: 1 }));
    bank.scale.z = 0.62;
    bank.position.y = -0.12;
    s.add(bank);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(15, 0.4, 3.2), M(0x7ac860, { roughness: 1 }));
    strip.position.set(0, -0.05, 3.1);
    strip.receiveShadow = true;
    s.add(strip);
    this.water = new THREE.Mesh(new THREE.CylinderGeometry(6.1, 6.1, 0.3, 48), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      const gr = g.createLinearGradient(0, 0, 256, 256);
      gr.addColorStop(0, '#6ad0ff'); gr.addColorStop(1, '#2a9ae0');
      g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
      g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 3;
      for (let i = 0; i < 9; i++) { g.beginPath(); g.ellipse((i * 83) % 256, (i * 57) % 256, 28, 8, 0, 0, Math.PI * 2); g.stroke(); }
    }), roughness: 0.2, metalness: 0.1 }));
    this.water.scale.z = 0.58;
    this.water.position.y = -0.08;
    s.add(this.water);
    for (const [x, z, r] of [[-5.1, -1.7, 0.5], [4.9, -1.9, 0.6], [-4.6, 1.2, 0.45], [5.2, 1.0, 0.5], [-1.6, -2.6, 0.5], [2.4, -2.5, 0.42]]) {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.04, 20, 1, false, 0.4, 5.5), M(0x3aa84a));
      pad.position.set(x, 0.1, z);
      s.add(pad);
    }
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 1.1 + Math.PI * 1.05;
      const reed = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 1.3 + (i % 3) * 0.3, 6), M(0x4a9a3a));
      reed.position.set(Math.cos(a) * 6.5, 0.5, Math.sin(a) * 3.9);
      s.add(reed);
      const tip = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.25, 4, 8), M(0x8a5a2a));
      tip.position.set(reed.position.x, 1.15 + (i % 3) * 0.3, reed.position.z);
      s.add(tip);
    }
  }

  /** Every place has its own tune (kit/themes.js): the child hears where he is. */
  _tune(id) {
    const th = themeForWorld(id);
    if (th && this.sh && this.sh.sound) this.sh.sound.theme = th;
  }

  /** Moves to another place (a fade, then the new scenery); the first level starts at the pond, each next level somewhere new. */
  _goWorld(i, instant) {
    const id = WORLD_IDS[i % WORLD_IDS.length];
    if (this.worldId === id) return;
    const swap = () => {
      if (!this.worlds[id]) { this.worlds[id] = buildWorld(id); this.st.add(this.worlds[id].group); }
      for (const w of Object.values(this.worlds)) w.group.visible = w === this.worlds[id];
      this.world = this.worlds[id];
      this.worldId = id;
      this.padStyle = PADS[this.world.pad];
      this._tune(id);
    };
    if (instant) { swap(); return; }
    this.fade.classList.add('on');
    if (this.hero) this.hero.act('run');
    setTimeout(() => { swap(); this.fade.classList.remove('on'); this.sh.say(WORLD_NAMES[id], false, 2.2); }, 520);
  }

  /** Puts the camera, the hero, the owl, the question picture and the choices where the current screen shape wants them. */
  _applyLayout(aspect) {
    const portrait = aspect < 1.0;
    if (this._laidOut === portrait) return;
    this._laidOut = portrait;
    this._portrait = portrait;
    const L = (this.layout = portrait ? PORTRAIT : LANDSCAPE);
    this.st.o.wide = L.cam;
    STAND.set(L.stand[0], 0, L.stand[1]);
    this._placeStand();
    if (this.hero) { this.hero.position.set(L.hero[0], 0.16, L.hero[1]); this.hero.scale.setScalar(L.hero[2]); }
    if (this.owl) { this.owl.position.set(L.owl[0], 0.16, L.owl[1]); this.owl.scale.setScalar(L.owl[2]); }
    for (const o of this.opts.values()) { if (o.home) { const i = [...this.opts.values()].indexOf(o), n = this.opts.size; o.home.set(((i + 0.5) / n - 0.5) * L.span + L.off, 0.1, i % 2 ? L.zs[1] : L.zs[0]); } }
  }

  /** The stand (the round table) and what stands on it: at STAND, moved by the item's own offset (the apples stand further back). */
  _placeStand() {
    const p = STAND.clone();
    const off = this.standItem && this.standItem.userData && this.standItem.userData.off;
    if (off) p.add(off);
    if (this.stand) this.stand.position.copy(p);
    if (this.standItem) this.standItem.position.copy(p);
  }

  _makeStand() {
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.05, 0.7, 28), M(0xd8964a));
    base.position.y = 0.35;
    base.castShadow = true;
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.08, 28), M(0xffe9b8));
    top.position.y = 0.72;
    g.add(base, top);
    g.position.copy(STAND);
    g.visible = false;
    this.st.add(g);
    this.standItem = null;
    return g;
  }

  _makeRack() {
    const g = new THREE.Group();
    const board = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.25, 0.8), M(0xd8964a));
    board.position.y = 0.75;
    board.castShadow = true;
    const back = new THREE.Mesh(new THREE.BoxGeometry(4.6, 1.3, 0.12), M(0xb8763a));
    back.position.set(0, 1.35, -0.45);
    g.add(board, back);
    for (const x of [-2.1, 2.1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.75, 0.8), M(0xa86a3a)); leg.position.set(x, 0.37, 0); g.add(leg); }
    this.slots = Array.from({ length: ROUNDS }, (_, i) => {
      const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.05, 20), M(0xfff4d8));
      dish.position.set(-1.96 + i * 0.56, 0.9, 0.1);
      g.add(dish);
      return new THREE.Vector3(RACK.x + (-1.96 + i * 0.56) * RACK_S, 0.9 * RACK_S + 0.35, RACK.z + 0.1);
    });
    g.position.copy(RACK);
    g.scale.setScalar(RACK_S);
    this.st.add(g);
    this.rack = g;
  }

  // ---- pieces ------------------------------------------------------------------------------------------------------

  _plaque(text, big = false) {
    const g = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.12, 32), M(0xffffff, { roughness: 0.35 }));
    disc.rotation.x = Math.PI / 2;
    disc.castShadow = true;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.05, 10, 32), M(0xffc83a, { roughness: 0.3 }));
    const face = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshBasicMaterial({ map: labelTex(text, { size: big ? 200 : 180 }), transparent: true, toneMapped: false }));
    face.position.z = 0.075;
    // the golden glow rings of the owner's design picture
    const glow = new THREE.MeshBasicMaterial({ color: 0xffd84a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    const glow2 = new THREE.MeshBasicMaterial({ color: 0xffe890, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false });
    const halo1 = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.03, 8, 48), glow);
    const halo2 = new THREE.Mesh(new THREE.TorusGeometry(0.86, 0.022, 8, 48), glow2);
    g.add(disc, rim, face, halo1, halo2);
    return g;
  }

  _option(o, i, n) {
    const g = new THREE.Group();
    const col = this.padStyle.ring[i % 5];
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.24, 12, 28), M(col, { roughness: 0.4 }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.05;
    const raft = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.08, 28), M(this.padStyle.disc));
    raft.position.y = 0.04;
    // a world can bring its own pad pictures (the farm: stump, hay, nest, planks): they replace the ring and the raft, and what stands
    // on them is lifted onto the top surface of the picture
    const padPics = this.world && this.world.padPics;
    let lift = 0;
    if (padPics) {
      const pp = artProp(padPics[i % padPics.length], 1.75);
      pp.position.z = -0.04;
      g.add(pp);
      ring.visible = false;
      lift = 0.62;
    } else g.add(ring, raft);
    let item = null, plaque = null, baseY = 0.06;
    if (o.kind === 'thing') {
      item = makeThing(o.thing);
      const sz = o.scale || 1; // the same picture drawn big or small (opposites)
      const fi = fitThing(item, 2.15 * sz, 1.8 * sz);
      baseY = 0.12 + lift - fi.minY;
      item.position.set(-0.1, baseY, 0);
      g.add(item);
      if (o.plaque) {
        // the letter sign stands to the right and above, never in front of the picture
        const top = Math.max(2.0, baseY + fi.h + 0.55);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, top, 8), M(0xb88848));
        pole.position.set(-0.1, top / 2, -0.25); // behind the picture, centred above it (like the owner's design)
        plaque = this._plaque(o.plaque);
        plaque.scale.setScalar(1.3); // big, clear letters
        plaque.position.set(-0.1, top + 0.25, 0.1);
        g.add(pole, plaque);
      }
    } else if (o.kind === 'color') {
      item = new THREE.Mesh(new THREE.SphereGeometry(0.62, 28, 20), new THREE.MeshStandardMaterial({ color: o.hex, roughness: o.metal ? 0.28 : 0.18, metalness: o.metal || 0.05 }));
      item.position.set(0, 0.95 + lift, 0);
      item.castShadow = true;
      g.add(item);
    } else if (o.kind === 'shape') {
      item = new THREE.Mesh(shapeGeo(o.shape), new THREE.MeshStandardMaterial({ color: colorOf(o.color).hex, roughness: 0.25, metalness: 0.05 }));
      item.position.set(0, 1.05 + lift, 0);
      item.scale.setScalar(0.95 * (o.scale || 1));
      item.castShadow = true;
      g.add(item);
    } else {
      const text = o.kind === 'number' ? (o.latin ? String(o.n) : this.sh.T.num(o.n)) : o.ch; // English levels show 0 1 2 3, not ٠ ١ ٢ ٣
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 8), M(0xb88848));
      pole.position.set(0, 0.45 + lift, 0);
      plaque = this._plaque(text, true);
      plaque.position.set(0, 1.5 + lift, 0);
      // upright phone: neighbouring signs must never cover each other's number (owner 2026-11-21), so four signs are a bit smaller
      plaque.scale.setScalar(this.layout.portrait ? (n >= 4 ? 0.98 : 1.2) : 1.6);
      g.add(pole, plaque);
      item = plaque;
    }
    const glow = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.06, 28), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0, depthWrite: false }));
    glow.position.y = 0.02;
    const hit = new THREE.Mesh(new THREE.SphereGeometry(1.5, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
    hit.userData.id = o.id;
    hit.position.set(0.2, 0.9, 0);
    g.add(glow, hit);
    const home = new THREE.Vector3(((i + 0.5) / n - 0.5) * this.layout.span + this.layout.off, 0.1, i % 2 ? this.layout.zs[1] : this.layout.zs[0]); // two rows, kept behind the question picture
    g.position.copy(HAND);
    g.scale.setScalar(0.01);
    this.st.add(g);
    return { g, o, home, item, plaque, baseY, ring, glow, hit, ph: i * 1.7, wig: 0, gone: false, arrive: -0.35 - i * 0.28, from: HAND.clone() };
  }

  _showStand(show) {
    if (this.standItem) { this.st.scene.remove(this.standItem); this.standItem = null; }
    this.stand.visible = false;
    this.stand.scale.setScalar(1);
    if (!show) return;
    this.stand.visible = show.type !== 'row'; // a row of pictures (patterns) is wider than the table
    this.stand.scale.setScalar(show.big || 1); // the «اتعلّم» mode draws one thing big
    const g = new THREE.Group();
    if (show.type === 'thing') {
      const t = makeThing(show.thing);
      const fi = fitThing(t, 2.5, 2.3);
      t.position.y = 0.76 - fi.minY;
      g.add(t);
      if (!t.userData.art) g.userData.spin = t; // a flat picture must not turn edge-on
      g.userData.pet = { inner: t, base: t.position.y, s0: t.scale.clone(), t0: Math.random() * 6, hop: 0, hopDur: 1.2, shake: 0, chew: 0, hungry: !!(this.level && this.level.mode === 'animal') };
    } else if (show.type === 'apples') {
      // the apples to count are BIG and stand further back, in the free space between the choices and the question sign (they used to be small and hidden
      // behind the sign at the bottom of the screen; owner 2026-11-18)
      const n = show.n;
      const cols = n > 15 ? 7 : n > 10 ? 6 : n > 6 ? 5 : 4;
      const rows = Math.ceil(n / cols);
      const size = n > 15 ? 0.78 : n > 10 ? 0.9 : n > 6 ? 1.0 : 1.15;
      const apples = [];
      for (let k = 0; k < n; k++) {
        const a = makeThing(show.thing || 'apple');
        a.scale.setScalar(size);
        const r = Math.floor(k / cols), c = k % cols;
        const sp = show.spread || 1; // the counting pictures stand further apart so each one can be counted
        a.position.set((c - (cols - 1) / 2) * 0.62 * size * sp + (r % 2) * 0.12, 0.76, (r - (rows - 1) / 2) * 0.52 * size * sp);
        g.add(a);
        apples.push(a);
      }
      g.userData.apples = apples;
      g.userData.off = new THREE.Vector3(0, 0, this._portrait ? -1.0 : -1.6);
    } else if (show.type === 'mixed') {
      // adding: a group of apples and a group of oranges side by side: «كام فاكهة بالكل؟»
      const fruits = [];
      const size = show.a + show.b > 6 ? 0.9 : 1.1;
      const place = (kind, count, x0) => {
        for (let k = 0; k < count; k++) {
          const a = makeThing(kind);
          a.scale.setScalar(size);
          const c = k % 3, r = Math.floor(k / 3);
          a.position.set(x0 + (c - 1) * 0.62 * size, 0.76, (r - 0.5) * 0.55 * size);
          g.add(a);
          fruits.push(a);
        }
      };
      place('apple', show.a, -1.15);
      place('orange', show.b, 1.15);
      g.userData.apples = fruits; // counted aloud one by one, like the apples
      g.userData.off = new THREE.Vector3(0, 0, this._portrait ? -1.0 : -1.6);
    } else if (show.type === 'row') {
      // patterns: a row of colours, shapes or pictures; the empty place is a plaque with «؟»
      const n = show.items.length;
      const sp = Math.min(1.0, 4.0 / n);
      const sz = sp * 0.88;
      show.items.forEach((s, k) => {
        let m;
        if (s.kind === 'gap') {
          m = this._plaque('؟', true);
          m.scale.setScalar(sz * 0.8);
          m.position.set(0, 0.76 + sz * 0.5, 0);
        } else if (s.kind === 'color') {
          m = new THREE.Mesh(new THREE.SphereGeometry(sz * 0.46, 22, 16), new THREE.MeshStandardMaterial({ color: s.hex, roughness: 0.18, metalness: 0.05 }));
          m.position.set(0, 0.76 + sz * 0.46, 0);
          m.castShadow = true;
        } else if (s.kind === 'shape') {
          m = new THREE.Mesh(shapeGeo(s.shape), new THREE.MeshStandardMaterial({ color: colorOf(s.color).hex, roughness: 0.25, metalness: 0.05 }));
          m.scale.setScalar(sz * 0.5);
          m.position.set(0, 0.76 + sz * 0.5, 0);
          m.castShadow = true;
        } else {
          m = makeThing(s.thing);
          const fi = fitThing(m, sz, sz);
          m.position.y = 0.76 - fi.minY;
        }
        const holder = new THREE.Group();
        holder.add(m);
        holder.position.x = (k - (n - 1) / 2) * sp;
        g.add(holder);
      });
      g.scale.setScalar(this._portrait ? 1.1 : 1.45); // it stands further back (clear of the question bar), so it is drawn bigger
      g.userData.off = new THREE.Vector3(this._portrait ? 0 : 0.5, 0, this._portrait ? -1.0 : -1.9);    } else if (show.type === 'letter') {
      const p = this._plaque(show.ch, true);
      p.position.set(0, 1.7, 0);
      p.scale.setScalar(show.scale || 1.5);
      g.add(p);
    }
    if (show.big) g.scale.setScalar(show.big);
    this.st.add(g);
    this.standItem = g;
    this._placeStand();
  }

  // ---- the hero (boy or girl, chosen once and kept) ---------------------------------------------------------------------

  _start() {
    // the hero is chosen once; when the child's profile already says boy or girl, that is the hero (no chooser)
    const given = this.sh.cfg && (this.sh.cfg.gender === 'girl' || this.sh.cfg.gender === 'boy') ? this.sh.cfg.gender : null;
    if (!this.save.lw.hero && given) { this.save.lw.hero = given; this.save.lw.look = {}; this.sh.saveNow(); }
    if (this.save.lw.hero) { this._makeHero(this.save.lw.hero, this.save.lw.look); this._startPage(); } else this._chooseHero();
  }

  _makeHero(kind, look) {
    if (this.hero) this.st.scene.remove(this.hero);
    const k = makeActor(kind);
    k.position.set(this.layout.hero[0], 0.16, this.layout.hero[1]);
    k.scale.setScalar(this.layout.hero[2]); // the hero is the star of the screen: big and close
    k.rotation.y = 0.2;
    this.st.add(k);
    this.hero = k;
    if (/[?&]debug/.test(location.search)) window.__hero = k; // test hook: ?debug lets a tester call __hero.act("celebrate")
    this.kind = kind;
    this.girl = kind === 'girl'; // every phrase now speaks to a girl or to a boy, as the child chose
    this.sh.setGender(kind);
  }

  _chooseHero() {
    const sh = this.sh;
    this._clearRound();
    sh.clear();
    this.st.mode = 'hero';
    sh.sound.setMode('menu');
    sh.layer.append(h('div', { class: 'lk-top' }, sh.backBtn(), h('span'), sh.soundBtn()));
    if (this.hero) { this.st.scene.remove(this.hero); this.hero = null; }
    const pre = { boy: makeActor('boy'), girl: makeActor('girl') };
    pre.boy.position.set(-2.1, 0, 2.2);
    pre.girl.position.set(2.1, 0, 2.2);
    for (const k of Object.values(pre)) { k.scale.setScalar(1.25); this.st.add(k); k.act('wave'); }
    this.previews = pre;
    const look = {};
    let chosen = null;
    const panel = h('div', { class: 'lw-hero' });
    const pick = (kind) => {
      chosen = kind;
      sh.sound.play('right');
      pre[kind].act('celebrate');
      this.girl = kind === 'girl';
      sh.setGender(kind);
      this.girl = kind === 'girl';
      sh.setGender(kind);
      const other = kind === 'boy' ? 'girl' : 'boy';
      this.st.scene.remove(pre[other]);
      pre[kind].position.set(0, 0, 2.2);
      panel.replaceChildren(
        h('button', { class: 'lk-btn', onclick: () => {
          sh.sound.play('win');
          this.save.lw.hero = chosen;
          this.save.lw.look = { hair: look.hair, cloth: look.cloth };
          sh.saveNow();
          this.st.scene.remove(pre[kind]);
          this.previews = null;
          this._makeHero(chosen, look);
          this.hero.act('celebrate');
          sh.speak(sh.t('letsGo'));
          setTimeout(() => this._startPage(), 1600);
        } }, '▶ ' + sh.t('play')));
    };
    panel.append(h('div', { class: 'lw-who' }, h('button', { class: 'lw-boy', onclick: () => pick('boy') }, '👦  ولد'), h('button', { class: 'lw-girl', onclick: () => pick('girl') }, '👧  بنت')));
    sh.layer.append(h('div', { class: 'lw-herobar' }, h('div', { class: 'lw-title', style: 'font-size:calc(var(--u)*6.5)' }, sh.t('chooseHero')), panel));
    sh.speak(sh.t('chooseHero'));
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  /** After the hero is known: straight into the level the child tapped on the app's page (a sign of the picture), else the list. */
  /** The age is known when the app told us or the child chose it in the game (2 to 6). */
  _ageKnown() { return !!(this.save.lw.age >= 2) || Number(this.sh.cfg && this.sh.cfg.age) >= 2; }

  /** «عندك كام سنة؟»: five big buttons 2-6, each with its balloons; the choice is kept and decides what comes first. */
  _chooseAge(then) {
    const sh = this.sh;
    this._clearRound();
    sh.clear();
    this.st.mode = 'age';
    sh.sound.setMode('menu');
    sh.layer.append(h('div', { class: 'lk-top' }, sh.backBtn(), h('span'), sh.soundBtn()));
    const row = h('div', { class: 'lw-agerow' }, [2, 3, 4, 5, 6].map((n) => h('button', {
      class: `lw-agebtn2${sh.age === n && this._ageKnown() ? ' on' : ''}`, 'aria-label': sh.t(`age${n}`),
      onclick: () => {
        sh.sound.unlock();
        sh.sound.play('right');
        this.save.lw.age = n;
        sh.age = n;
        sh.saveNow();
        sh.speak(sh.t(`age${n}`));
        setTimeout(then, 1500);
      },
    }, h('b', {}, sh.T.num(n)), h('i', {}, '🎈'.repeat(n)))));
    sh.layer.append(h('div', { class: 'lw-agebar' }, h('div', { class: 'lw-title', style: 'font-size:calc(var(--u)*7)' }, sh.t('ageQ')), row));
    sh.speak(sh.t('ageQ'));
  }

  _startPage() {
    if (!this._ageKnown()) { this._chooseAge(() => this._startPage()); return; }
    if (this.sh.cfg && this.sh.cfg.learnMode === 'learn') { this._learnHome(); return; } // «اتعلّم» (owner 2026-11-26)
    const want = this.sh.cfg && this.sh.cfg.level;
    if (this.sh.cfg) this.sh.cfg.level = null; // only the first time: back to the list afterwards
    if (want && EVERY_LEVEL.some((l) => l.id === want)) this._enter(want);
    else this._levels();
  }

  /** True while the child learns English (the chooser in the app passes learnLang 'en'); the Arabic world is untouched. */
  _learnEn() { const l = this.sh.cfg && this.sh.cfg.learnLang; return l === 'en' || l === 'de' || l === 'fr' || l === 'it'; }
  _learnFr() { return !!(this.sh.cfg && this.sh.cfg.learnLang === 'fr'); }
  _learnIt() { return !!(this.sh.cfg && this.sh.cfg.learnLang === 'it'); }
  _learnDe() { return !!(this.sh.cfg && this.sh.cfg.learnLang === 'de'); }
  /** The levels of the language being learned. */
  _list() { return this._learnIt() ? IT_LEVELS : this._learnFr() ? FR_LEVELS : this._learnDe() ? DE_LEVELS : this._learnEn() ? EN_LEVELS : ARABIC_LEVELS; }


  // ---- «اتعلّم»: the basics, one item at a time (owner 2026-11-26) -------------------------------------------------------

  _lang() { const l = this.sh.cfg && this.sh.cfg.learnLang; return l === 'en' || l === 'de' || l === 'fr' || l === 'it' ? l : 'ar'; }
  _lt(ar, en, de, fr, it) { const l = this._lang(); return l === 'it' ? (it || en) : { ar, en, de, fr }[l]; }
  _learnData() { return this._secs || (this._secs = learnSections(this._lang())); }

  /** The sections (letters, numbers, animals, birds ...): the child picks what to learn. */
  _learnHome() {
    const sh = this.sh;
    this._clearRound();
    sh.clear();
    this._showStand(null);
    this.st.mode = 'menu';
    sh.sound.setSuspense(false);
    sh.sound.setMode('menu');
    sh.sound.energy = 0;
    this._L = null;
    if (/[?&]debug/.test(location.search)) window.__lw = this; // test hook (see _begin)
    sh.layer.append(h('div', { class: 'lk-top' }, sh.backBtn(), h('span'), sh.soundBtn()));
    const lang = this._lang();
    const tiles = this._learnData().map((s) => h('button', { class: 'lw-tile lw-lsec', 'aria-label': s.name, onclick: () => { sh.sound.play('tap'); this._learnOpen(s.id, 0, true); } },
      h('i', {}, s.emoji), lang !== 'ar' ? h('span', { class: 'lw-bi' }, h('em', {}, s.nameAr), h('small', { dir: 'ltr' }, s.name)) : h('span', {}, s.name), h('small', { dir: 'ltr' }, s.kind === 'numbers' ? '0 → 100 000' : String(s.items.length))));
    const grid = h('div', { class: 'lw-grid lw-lgrid' }, tiles);
    const card = h('div', { class: `lw-card lw-learn${lang === 'ar' ? '' : ' lw-en'}` },
      h('div', { class: 'lw-title' }, this._lt('اختار رحلتك 📚', 'Choose your journey 📚', 'Wähle deine Reise 📚', 'Choisis ton voyage 📚', 'Scegli il tuo viaggio 📚')),
      lang !== 'ar' ? h('div', { class: 'lw-arsub' }, 'اختار رحلتك') : null,
      grid);
    sh.layer.append(h('div', { class: 'lk-dim', style: 'background:rgba(40,30,90,.18)' }, card));
    this._fitGrid(card, grid, tiles.length);
    this.owl.act('cheer');
    this.owl.look(0);
  }


  /** Fits [n] tiles into the card with NO scrolling (owner 2026-11-26): the number of columns that makes the tiles biggest for this screen shape;
   *  the tiles take their size from --tw / --th (see .lw-fit). Re-fits when the window changes. */
  _fitGrid(card, grid, n) {
    const sh = this.sh;
    grid.classList.add('lw-fit');
    const fit = () => {
      if (!grid.isConnected) return false;
      const W = sh.root.clientWidth || 800, H = sh.root.clientHeight || 450;
      grid.style.display = 'none';
      const header = card.offsetHeight; // title, sub line and paddings
      grid.style.display = '';
      const gap = Math.max(5, Math.round(Math.min(W, H) * 0.014));
      const dim = card.parentElement, cs = getComputedStyle(dim);
      const innerH = dim.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom), innerW = dim.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const availW = Math.min(innerW * 0.96, 1400) - 44, availH = innerH * 0.92 - header - 6; // the card is at most 92% x 96% of the free area
      let best = null;
      for (let c = 2; c <= 14; c++) {
        const rows = Math.ceil(n / c);
        const tw = Math.min(190, (availW - gap * (c - 1)) / c), th0 = (availH - gap * (rows - 1)) / rows;
        const th = Math.min(th0, tw * 1.22);
        const score = Math.min(tw * 1.1, th * 1.1);
        if (!best || score > best.score) best = { c, tw: Math.min(tw, th * 1.12), th, score };
      }
      grid.style.setProperty('--tw', `${Math.floor(best.tw)}px`);
      grid.style.setProperty('--th', `${Math.floor(best.th)}px`);
      grid.style.setProperty('grid-template-columns', `repeat(${best.c}, ${Math.floor(best.tw)}px)`, 'important');
      grid.style.gap = `${gap}px`;
      return true;
    };
    requestAnimationFrame(() => { fit(); });
    const ro = new ResizeObserver(() => { if (!fit()) ro.disconnect(); });
    ro.observe(sh.root);
  }

  _learnOpen(secId, i, intro) {
    const sec = this._learnData().find((s) => s.id === secId);
    if (!sec) { this._learnHome(); return; }
    this._L = { sec, i: Math.max(0, Math.min(sec.items.length - 1, i)), num: sec.kind === 'numbers' ? (sec.items[i] ? sec.items[i].n : 0) : null, intro: !!intro };
    this._learnShow();
  }

  /** The «Example» button above the word's sign: tap it to open the examples 1 2 3 4 (the picture of the scene first, when there is one). Every row
   *  shows the sentence in the language being learned with the word highlighted, and its Arabic under it; tap a row to hear it (Arabic, then the language).
   *  The text is always shown; the voice plays when the example has a recording. */
  _exampleButton(it, lang) {
    const sh = this.sh, L = this._L;
    if (!L || EXTRA_IDS.has(L.sec.id) || L.sec.kind === 'numbers') return null;
    const key = it.key.split(':').slice(1).join(':').toLowerCase();
    const table = (typeof window !== 'undefined' && window.__learnExamples) || {};
    const list = (table[key] || []).filter((e) => e[lang]);
    if (!list.length) return null;
    const label = this._lt('مثال', 'Example', 'Beispiel', 'Exemple', 'Esempio');
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    const bare = (w) => String(w || '').replace(/^(der|die|das|le|la|les|l'|the|a|an|ال)\s?/i, '').trim();
    const hl = (text, word) => { // the learned word stands out in the sentence
      const w = bare(word); const i = w ? text.toLowerCase().indexOf(w.toLowerCase()) : -1;
      if (i < 0) return [document.createTextNode(text)];
      return [document.createTextNode(text.slice(0, i)), h('mark', {}, text.slice(i, i + w.length)), document.createTextNode(text.slice(i + w.length))];
    };
    const slug = key.replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    const panel = h('div', { class: 'lw-expanel', dir, style: 'display:none' });
    this._exOpen = false;
    // a small picture beside every example: its own scene (ex_<word>_<n>.webp) or the word's scene (ex_<word>.webp); no picture = no frame
    // beside every example (outside its card) a square picture box: the example's own scene (ex_<word>_<n>.webp), else the word's scene (ex_<word>.webp), else a small
    // sign of the kind of sentence (look, find, where...). Never a picture that does not belong to the word.
    const box = (n, ic) => { const b = h('div', { class: 'lw-exbox' }, h('i', {}, ic || '💡')); const img = new Image(); img.alt = ''; let second = false; img.onload = () => { b.replaceChildren(img); }; img.onerror = () => { if (!second) { second = true; img.src = `${sh.base}../art/ex_${slug}.webp`; } }; img.src = `${sh.base}../art/ex_${slug}_${n}.webp`; return b; };
    const rows = list.map((e, i) => {
      const main = h('span', { class: 'lw-exmain', dir: lang === 'ar' ? 'rtl' : 'ltr' }, ...hl(e[lang], it.label));
      const sub = lang !== 'ar' && e.ar ? h('small', { class: 'lw-exar', dir: 'rtl' }, ...hl(e.ar, it.arSay && it.arSay[0] ? it.arSay[0].t : '')) : null;
      return h('button', { class: 'lw-exrow', 'aria-label': `${label} ${i + 1}`, onclick: (ev) => {
        ev.stopPropagation(); sh.sound.play('tap'); rows.forEach((r, j) => r.classList.toggle('on', j === i));
        sh.speak([...(lang !== 'ar' && e.ar ? [{ t: e.ar, lang: 'ar', optional: true }] : []), { t: e[lang], lang, optional: true }]);
      } }, h('b', {}, String(i + 1)), h('div', { class: 'lw-extext' }, main, sub), h('i', {}, '🔊'));
    });
    list.forEach((e, i) => panel.append(h('div', { class: 'lw-exline' }, rows[i], box(i + 1, e.ic))));
    let open = false;
    const chip = h('button', { class: 'lw-ex', 'aria-label': label, onclick: (ev) => { ev.stopPropagation(); sh.sound.play('tap'); open = !open; panel.style.display = open ? 'flex' : 'none'; chip.classList.toggle('open', open); this._exampleView(open, panel); } },
      h('i', {}, '💡'), h('span', {}, label), list.length > 1 ? h('em', {}, String(list.length)) : null);
    sh.layer.append(panel);
    return h('div', { class: 'lw-exw' }, chip);
  }

  /** While the examples are open the picture slides away from them: up on a phone held upright (the panel sits at the bottom), a little to the left on a wide screen
   *  (the panel sits at the right), so the child and the thing being learned stay in view. */
  _exampleView(open, panel) {
    const W = this.cw || this.sh.root.clientWidth, H = this.ch || this.sh.root.clientHeight;
    if (!open) { this.st.shiftView(0, 0); return; }
    const wide = W > H * 1.15;
    const r = panel.getBoundingClientRect();
    if (wide) this.st.shiftView(Math.round(W * 0.12), 0);
    else this.st.shiftView(0, Math.round(Math.min(H * 0.3, r.height * 0.55)));
  }

  _learnItem() {
    const L = this._L;
    return L.sec.kind === 'numbers' ? numberItem(L.num, this._lang()) : L.sec.items[L.i];
  }

  /** What is said for an item: the word, the word slowly, the word again, then its sentence. A number is said from its small recorded words when they all exist. */
  _learnSpeech(it, withIntro) {
    const v = this.sh.voice;
    const has = (x) => !!(v && v.has && v.has(v._item(x)));
    let say = it.say, slow = it.slow;
    if (it.parts && it.n > 20 && !has(it.say[0]) && it.parts.every((p) => has({ t: p, lang: it.lang }))) {
      say = it.parts.map((p) => ({ t: p, lang: it.lang }));
      slow = say;
    }
    const ar = it.arSay || []; // in English / German / French the Arabic word is heard first, once
    const q = it.once ? [...ar, ...say, ...it.sentence] : [...ar, ...say, ...slow, ...say, ...it.sentence];
    if (withIntro) { const L = this._L; q.unshift({ t: L.sec.name, lang: this._lang() }, { t: learnLine('start', this._lang()), lang: this._lang() }); }
    return q;
  }

  _learnShow() {
    const sh = this.sh, L = this._L, lang = this._lang();
    const it = this._learnItem();
    this._clearRound();
    sh.clear();
    this.st.mode = 'learn';
    sh.sound.setMode('play');
    const isNum = L.sec.kind === 'numbers';
    const textOnly = isNum || it.display === 'text';
    this._showStand(textOnly ? null : { big: 1.9, ...it.show }); // a number is a big sign of the page (any length), the rest stands on the table
    const last = isNum ? nextNumber(L.num) == null : L.i >= L.sec.items.length - 1;
    const first = isNum ? L.num <= 0 : L.i <= 0;
    const pos = isNum ? '' : `${L.i + 1} / ${L.sec.items.length}`;
    const go = (dir) => {
      sh.sound.play('tap');
      if (dir > 0) {
        if (last) { this._learnDone(); return; }
        if (isNum) L.num = nextNumber(L.num); else L.i++;
      } else if (!first) { if (isNum) L.num = prevNumber(L.num); else L.i--; }
      L.intro = false;
      this._learnShow();
    };
    const say = () => { sh.speak(this._learnSpeech(this._learnItem(), false)); };
    sh.layer.append(
      h('div', { class: 'lk-top lw-ltop' },
        h('button', { class: 'lk-rbtn', 'aria-label': 'back', onclick: () => { sh.sound.play('tap'); this._learnHome(); } }, '←'),
        h('span', { class: 'lw-lprog' }, `${L.sec.emoji} ${L.sec.name}  `, h('bdi', { dir: 'ltr' }, pos)),
        h('button', { class: 'lk-rbtn y', 'aria-label': 'pick', onclick: () => { sh.sound.play('tap'); this._learnPick(); } }, isNum ? '🔢' : '🔎'),
        sh.soundBtn()),
      isNum ? h('div', { class: 'lw-lbignum', dir: 'ltr', style: `font-size:calc(var(--u)*${it.label.length <= 3 ? 24 : it.label.length <= 5 ? 19 : 14})` }, it.label) : null,
      !isNum && it.display === 'text' ? h('div', { class: 'lw-lbignum', dir: lang === 'ar' ? 'rtl' : 'ltr', style: `font-size:calc(var(--u)*${it.fs || Math.max(7, Math.min(22, 70 / Math.max(3, it.text.length)))})` }, it.text) : null,
      it.caption ? h('div', { class: 'lw-lcap', dir: lang === 'ar' ? 'rtl' : 'ltr' }, it.caption) : null,
      this._exampleButton(it, lang),
      h('button', { class: 'lw-lhit', 'aria-label': 'next', onclick: () => go(1) }),
      h('div', { class: `lw-lbar${lang === 'ar' ? '' : ' ltr'}` },
        h('button', { class: 'lw-lnav', 'aria-label': 'previous', disabled: first || null, onclick: () => go(-1) }, lang === 'ar' ? '▶' : '◀'),
        h('div', { class: 'lw-lsign' }, h('b', {}, it.label), h('button', { class: 'lw-again', 'aria-label': 'again', onclick: (e) => { e.stopPropagation(); sh.sound.play('tap'); say(); } }, '🔊')),
        h('button', { class: 'lw-lnav go', 'aria-label': 'next', onclick: () => go(1) }, lang === 'ar' ? '◀' : '▶')));
    this.owl.act('cheer');
    this.owl.look(0);
    sh.speak(this._learnSpeech(it, L.intro));
  }

  /** The end of a section: no stars to count, just a kind word and the way on. */
  _learnDone() {
    const sh = this.sh, lang = this._lang(), L = this._L;
    this._showStand(null);
    sh.speak([{ t: learnLine('done', lang), lang }]);
    sh.layer.append(h('div', { class: 'lk-dim lw-ldone' }, h('div', { class: `lk-card${lang === 'ar' ? '' : ' ltr'}` },
      h('div', { class: 'lk-title', style: 'font-size:calc(var(--u)*7)' }, `${L.sec.emoji} ${L.sec.name}`),
      h('div', { class: 'lk-starburst' }, '🌟'),
      h('div', { class: 'lk-msg' }, learnLine('done', lang)),
      h('button', { class: 'lk-btn', onclick: () => { sh.sound.play('tap'); this._learnOpen(L.sec.id, 0, false); } }, '↻ ', learnLine('again', lang)),
      h('button', { class: 'lk-btn p', onclick: () => { sh.sound.play('tap'); this._learnHome(); } }, this._lt('← الأقسام', '← Sections', '← Bereiche', '← Les rubriques', '← Sezioni')))));
  }

  /** Jump to one item: a keypad for numbers (up to 100 000), a list of the words for everything else. */
  _learnPick() {
    const sh = this.sh, L = this._L, lang = this._lang();
    const close = () => { const m = sh.layer.querySelector('.lw-lpick'); if (m) m.remove(); };
    let body;
    if (L.sec.kind === 'numbers') {
      let v = '';
      const shown = h('div', { class: 'lw-lnum' }, '0');
      const upd = () => { shown.textContent = v ? numberItem(Number(v), lang).label : '0'; };
      const key = (k) => h('button', { class: 'lw-lkey', onclick: () => { sh.sound.play('tap'); if (v.length < 6) v = (v + k).replace(/^0+(?=\d)/, ''); if (Number(v) > 100000) v = '100000'; upd(); } }, lang === 'ar' ? String(k).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : String(k));
      body = h('div', { class: 'lw-lkeys' }, shown,
        h('div', { class: 'lw-lpad' }, ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(key), h('button', { class: 'lw-lkey', onclick: () => { v = v.slice(0, -1); upd(); } }, '⌫'), key(0),
          h('button', { class: 'lw-lkey ok', onclick: () => { sh.sound.play('tap'); L.num = Math.min(100000, Number(v || 0)); L.intro = false; close(); this._learnShow(); } }, 'OK')));
    } else {
      body = h('div', { class: 'lw-lpicklist' }, ...L.sec.items.map((x, k) => h('button', { class: `lw-lpickitem${k === L.i ? ' on' : ''}`, onclick: () => { sh.sound.play('tap'); L.i = k; L.intro = false; close(); this._learnShow(); } }, x.label)));
    }
    sh.layer.append(h('div', { class: 'lk-dim lw-lpick', onclick: (e) => { if (e.target === e.currentTarget) close(); } }, h('div', { class: `lw-card lw-lcard${lang === 'ar' ? '' : ' ltr'}` },
      h('div', { class: 'lw-title' }, L.sec.kind === 'numbers' ? this._lt('اكتب رقم', 'Type a number', 'Tippe eine Zahl', 'Tape un nombre', 'Scrivi un numero') : this._lt('اختار واحد', 'Pick one', 'Wähle eins', 'Choisis-en un', 'Scegline uno')), body,
      h('button', { class: 'lk-btn p', onclick: () => { sh.sound.play('tap'); close(); } }, '✕'))));
  }

  _levels() {
    const sh = this.sh;
    if (/[?&]debug/.test(location.search)) window.__lw = this; // test hook (see _begin)
    this._clearRound();
    sh.clear();
    this.st.mode = 'menu';
    sh.sound.setSuspense(false);
    sh.sound.setMode('menu');
    sh.sound.energy = 0;
    sh.layer.append(h('div', { class: 'lk-top' }, sh.backBtn(), h('span'), sh.soundBtn()));
    const unlocked = Infinity; // every level is open: the child chooses any of them
    const list = this._learnEn() ? this._list() : levelsFor(sh.age);
    const tiles = list.map((lv, i) => {
      const locked = i + 1 > unlocked;
      const done = !!this.save.lw.done[lv.id];
      return h('button', {
        class: `lw-tile${locked ? ' lock' : ''}${done ? ' done' : ''}`, 'aria-label': lv.ar, disabled: locked || null,
        onclick: () => { sh.sound.play('tap'); this._enter(lv.id); },
      }, lv.art ? h('i', { class: 'lw-ic' }, h('img', { src: `${sh.base}art/${lv.art.icon}.webp`, alt: '' })) : h('i', {}, locked ? '🔒' : lv.emoji), h('b', {}, this._learnEn() ? String(i + 1) : sh.T.num(i + 1)), lv.arName ? h('span', { class: 'lw-bi' }, h('em', {}, lv.arName), h('small', { dir: 'ltr' }, lv.ar)) : h('span', {}, lv.ar), done ? h('u', {}, '⭐') : null);
    });
    const mapArt = this._learnEn() && list[0].art ? `background:linear-gradient(rgba(40,30,90,.10),rgba(40,30,90,.10)),url(${sh.base}art/${list[0].art.map}.webp) center/cover no-repeat;` : '';
    const lvGrid = h('div', { class: 'lw-grid' }, tiles);
    const lvCard = h('div', { class: `lw-card${this._learnEn() ? ' lw-en' : ''}` }, h('div', { class: 'lw-title' }, this._learnIt() ? 'Scegli un gioco 🎧' : this._learnFr() ? 'Choisis un jeu 🎧' : this._learnDe() ? 'Such ein Spiel aus 🎧' : this._learnEn() ? 'Pick a game 🎧' : sh.t('pick')), this._learnEn() ? h('div', { class: 'lw-arsub' }, 'اختار لعبة') : null, lvGrid);
    const oldCard = h('div', { class: 'lk-dim', style: mapArt + 'background-color:rgba(40,30,90,.18)' }, lvCard);
    const mountOld = () => { sh.layer.append(oldCard); this._fitGrid(lvCard, lvGrid, tiles.length); };
    if (this._learnEn()) {
      mountOld();
      this.owl.act('cheer');
      this.owl.look(0);
      if (!this._askedResume && (this.save.lw.history || []).length && this.save.lw.last) { this._askedResume = true; setTimeout(() => this._resumeChoice(), 600); }
      return;
    } // English / German / French: their own simple list of levels
    // the owner's picture of the levels page (2026-11-13): shown when its file is there, otherwise the card above
    const topBar = sh.layer.querySelector('.lk-top');
    const img = new Image();
    img.className = 'lw-pic-img';
    img.alt = '';
    img.onload = () => { if (this.st.mode === 'menu') { if (topBar) topBar.remove(); sh.layer.append(this._levelsPicture(img, list)); } };
    img.onerror = () => { if (this.st.mode === 'menu') mountOld(); };
    img.src = `${sh.base}../art/levels_page.webp`;
    this.owl.act('cheer');
    this.owl.look(0);
  }

  /** A full-screen picture (the owner's art) fitted whole into the window, with a blurred copy behind it for the sides; returns the
   *  wrapper and `place(el, cx, cy, w, h)` that puts an element on the picture in fractions of it. */
  _pictureFrame(img, R) {
    const sh = this.sh;
    const wrap = h('div', { class: 'lw-pic' });
    const blur = img.cloneNode();
    blur.className = 'lw-pic-blur';
    const box = h('div', { class: 'lw-pic-box' }, img);
    const fit = () => {
      const W = sh.root.clientWidth || 800, H = sh.root.clientHeight || 450;
      const w = Math.min(W, H * R);
      box.style.width = `${w}px`;
      box.style.height = `${w / R}px`;
    };
    fit();
    new ResizeObserver(fit).observe(sh.root);
    const place = (el, cx, cy, w, hh) => { el.style.left = `${(cx - w / 2) * 100}%`; el.style.top = `${(cy - hh / 2) * 100}%`; el.style.width = `${w * 100}%`; el.style.height = `${hh * 100}%`; box.append(el); return el; };
    wrap.append(blur, box);
    return { wrap, place };
  }

  /** The drawn board of 12 tiles used by EVERY levels page (owner 2026-11-26: page 1 now looks exactly like the other pages): a panel that covers the
   *  picture's own tiles, then the tiles (colour by position, big icon, number, name, stars). `items` = [{lv, n, can}] (at most 12). */
  _drawBoard(place, items, done, best = {}) {
    const sh = this.sh;
    const cols = [0.723, 0.532, 0.343], rows = [0.327, 0.489, 0.647, 0.807];
    place(h('div', { class: 'lw-board' }), 0.5255, 0.57, 0.69, 0.71);
    items.forEach(({ lv, n, can }, k) => {
      const cx = cols[k % 3], cy = rows[Math.floor(k / 3)];
      const stars = best[lv.id];
      const b = h('button', { class: `lw-ptile c${(k + Math.floor(k / 3)) % 6}${done[lv.id] ? ' done' : ''}${can === false ? ' off' : ''}`, 'aria-label': lv.ar, disabled: can === false || null, onclick: () => { sh.sound.play('tap'); this._enter(lv.id); } },
        h('i', {}, h('em', {}, lv.emoji)), h('b', {}, sh.T.num(n)), h('span', {}, lv.ar), stars ? h('small', {}, '★'.repeat(stars)) : null, done[lv.id] ? h('u', {}, '⭐') : null);
      place(b, cx, cy, 0.178, 0.157);
    });
  }

  /** The levels page as the owner's picture, with the drawn board of twelve tiles, home, sound and "next level". */
  _levelsPicture(img, list) {
    const sh = this.sh;
    const { wrap, place } = this._pictureFrame(img, 1226 / 1283); // the picture's width / height
    const open = new Set(list.map((l) => l.id));
    this._drawBoard(place, LEVELS.map((lv, i) => ({ lv, n: i + 1, can: open.has(lv.id) })), this.save.lw.done || {}, this.save.lw.best || {});
    // «تقريري»: what was played and learned (the history), and the choice to continue after the last level played
    place(h('button', { class: 'lw-more lw-rep', onclick: () => { sh.sound.play('tap'); this._report(); } }, sh.T.lang === 'en' ? '📒 My report' : '📒 تقريري'), 0.86, 0.945, 0.22, 0.06);
    if (!this._askedResume && (this.save.lw.history || []).length && this.save.lw.last) { this._askedResume = true; setTimeout(() => this._resumeChoice(), 600); }
    // «مستويات أكتر»: the topic levels (body, clothes, jobs...), drawn in code under the picture's tiles
    place(h('button', { class: 'lw-more', onclick: () => { sh.sound.play('tap'); this._moreLevels(); } }, sh.T.lang === 'en' ? '➕ More levels' : '➕ مستويات أكتر'), 0.5, 0.945, 0.3, 0.06);
    // "next level": the first level not done yet (the first one when all are done)
    const next = list.find((l) => !this.save.lw.done[l.id]) || list[0];
    place(h('button', { class: 'lw-hit', 'aria-label': 'next', onclick: () => { sh.sound.play('tap'); this._enter(next.id); } }), 0.114, 0.46, 0.22, 0.12);
    // home and sound: the shell's own buttons, invisible, on the picture's round buttons
    const back = sh.backBtn();
    back.classList.add('lw-hit');
    place(back, 0.069, 0.058, 0.1, 0.095);
    const snd = sh.soundBtn();
    snd.classList.add('lw-hit');
    place(snd, 0.94, 0.058, 0.1, 0.095);
    // the child's age (a cake with the number): a tap opens «عندك كام سنة؟» again
    const ageB = h('button', { class: 'lw-agetag', 'aria-label': sh.t('ageQ'), onclick: (e) => { e.stopPropagation(); sh.sound.play('tap'); this._chooseAge(() => this._levels()); } }, `🎂 ${sh.T.num(sh.age)}`);
    place(ageB, 0.069, 0.17, 0.115, 0.055);
    if (this.save.lw.points) place(h('div', { class: 'lw-ptstag' }, `⭐ ${sh.T.num(this.save.lw.points)}`), 0.069, 0.235, 0.115, 0.05);
    return wrap;
  }

  /** On opening: continue after the last level played, or start again from the first one. */
  _resumeChoice() {
    const sh = this.sh, lang = this._lang();
    if (this.st.mode !== 'menu') return;
    const list = this._list();
    const idx = list.findIndex((l) => l.id === this.save.lw.last);
    const last = list[idx];
    if (!last) return;
    const next = list[(idx + 1) % list.length];
    const T = {
      ar: ['أهلاً بيك تاني!', 'إيه رأيك تكمّل من مكان ما كنت واقف، ولا تبدأ من الأول؟', `آخر مرة لعبت: ${last.ar}`, `▶ كمّل: ${next.ar}`, '↺ ابدأ من الأول', 'هاختار مستوى'],
      en: ['Welcome back!', 'How about continuing where you stopped, or starting from the beginning?', `Last time: ${last.ar}`, `▶ Continue: ${next.ar}`, '↺ Start from the beginning', 'Choose a level'],
      de: ['Willkommen zurück!', 'Möchtest du dort weitermachen, wo du aufgehört hast, oder von vorne anfangen?', `Letztes Mal: ${last.ar}`, `▶ Weiter: ${next.ar}`, '↺ Von vorne anfangen', 'Level auswählen'],
      fr: ['Bon retour !', "Tu veux continuer là où tu t'es arrêté, ou recommencer depuis le début ?", `La dernière fois : ${last.ar}`, `▶ Continuer : ${next.ar}`, '↺ Recommencer depuis le début', 'Choisir un niveau'],
    }[lang];
    const box = h('div', { class: 'lk-dim', style: 'background:rgba(40,30,90,.45);z-index:30' },
      h('div', { class: `lw-card lw-resume${lang === 'ar' ? '' : ' ltr'}` },
        h('div', { class: 'lw-title' }, T[0]),
        h('div', { class: 'lw-ask' }, T[1]),
        h('div', { class: 'lw-sub' }, T[2]),
        h('button', { class: 'lw-choice', onclick: () => { box.remove(); sh.sound.play('tap'); this._enter(next.id); } }, T[3]),
        h('button', { class: 'lw-choice alt', onclick: () => { box.remove(); sh.sound.play('tap'); this._enter(list[0].id); } }, T[4]),
        h('button', { class: 'lw-moreclose', onclick: () => box.remove() }, T[5])));
    sh.layer.append(box);
    sh.speak([{ t: T[1], lang }]); // the owner records it (docs/RESUME_VOICE_LINES.csv); silent until then
  }

  /** «تقريري»: games played, stars, and what was learned in each game (kept on the device). */
  _report() {
    const sh = this.sh;
    const en = sh.T.lang === 'en';
    const lw = this.save.lw;
    const hist = lw.history || [];
    const done = this._list().filter((l) => lw.done[l.id]).length;
    const stars = hist.reduce((a, x) => a + (x.s || 0), 0);
    const rows = [...hist].reverse().slice(0, 30).map((x) => {
      const lv = EVERY_LEVEL.find((l) => l.id === x.l);
      const d = new Date(x.t);
      return h('div', { class: 'lw-hrow' },
        h('b', {}, `${lv ? lv.emoji : ''} ${lv ? lv.ar : x.l}  ${'⭐'.repeat(x.s || 1)}`),
        h('small', {}, `${d.getDate()}/${d.getMonth() + 1}`),
        h('span', {}, (x.q || []).join('  •  ')));
    });
    const box = h('div', { class: 'lk-dim', style: 'background:rgba(40,30,90,.5);z-index:40' },
      h('div', { class: 'lw-card lw-report' },
        h('div', { class: 'lw-title' }, en ? 'My report' : 'تقريري'),
        h('div', { class: 'lw-sub' }, en
          ? `${hist.length} games • ${done} of ${this._list().length} levels • ${stars} stars`
          : `لعبت ${sh.T.num(hist.length)} لعبة • خلصت ${sh.T.num(done)} من ${sh.T.num(this._list().length)} مستوى • ${sh.T.num(stars)} نجمة`),
        rows.length ? h('div', { class: 'lw-hlist' }, rows) : h('div', { class: 'lw-sub' }, en ? 'Play a level and it will show here.' : 'العب مستوى وهيظهر هنا.'),
        h('button', { class: 'lw-moreclose', onclick: () => box.remove() }, en ? 'Close' : 'اقفل')));
    sh.layer.append(box);
  }

  /** The topic levels as a small page of tiles (opened from «مستويات أكتر»). */
  _moreLevels(page = 0) {
    const sh = this.sh;
    // owner 2026-11-21: the new levels get a page as good as the first twelve: the same picture, the same 3 x 4 tiles, pages of twelve
    const img = new Image();
    img.className = 'lw-pic-img';
    img.alt = '';
    img.onload = () => {
      if (this.st.mode !== 'menu') return;
      this._clearPicPages();
      sh.layer.append(this._moreLevelsPicture(img, page));
    };
    img.onerror = () => this._moreLevelsCard();
    img.src = `${sh.base}../art/levels_page.webp`;
  }

  _clearPicPages() { for (const el of this.sh.layer.querySelectorAll('.lw-pic')) el.remove(); }

  _moreLevelsPicture(img, page) {
    const sh = this.sh;
    const en = sh.T.lang === 'en';
    const done = this.save.lw.done || {};
    const { wrap, place } = this._pictureFrame(img, 1226 / 1283);
    const PER = 12, pages = Math.ceil(TOPIC_LEVELS.length / PER);
    const slice = TOPIC_LEVELS.slice(page * PER, page * PER + PER);
    this._drawBoard(place, slice.map((lv, k) => ({ lv, n: LEVELS.length + page * PER + k + 1 })), done, this.save.lw.best || {});
    const go = (p) => { sh.sound.play('tap'); this._moreLevels(p); };
    const first = h('button', { class: 'lw-more', onclick: () => { sh.sound.play('tap'); this._clearPicPages(); this._levels(); } }, en ? `↩ First levels (${page + 1}/${pages})` : `↩ المستويات الأولى (${sh.T.num(page + 1)}/${sh.T.num(pages)})`);
    place(first, 0.5, 0.945, 0.34, 0.06);
    if (page + 1 < pages) place(h('button', { class: 'lw-more lw-navb', onclick: () => go(page + 1) }, en ? 'Next ▶' : '◀ التالي'), 0.2, 0.945, 0.2, 0.06);
    if (page > 0) place(h('button', { class: 'lw-more lw-navb', onclick: () => go(page - 1) }, en ? '◀ Back' : 'السابق ▶'), 0.8, 0.945, 0.2, 0.06);
    const next = TOPIC_LEVELS.find((l) => !done[l.id]) || TOPIC_LEVELS[0];
    place(h('button', { class: 'lw-hit', 'aria-label': 'next', onclick: () => { sh.sound.play('tap'); this._enter(next.id); } }), 0.114, 0.46, 0.22, 0.12);
    const back = sh.backBtn();
    back.classList.add('lw-hit');
    place(back, 0.069, 0.058, 0.1, 0.095);
    const snd = sh.soundBtn();
    snd.classList.add('lw-hit');
    place(snd, 0.94, 0.058, 0.1, 0.095);
    return wrap;
  }

  _moreLevelsCard() {
    const sh = this.sh;
    const done = this.save.lw.done || {};
    const en = sh.T.lang === 'en';
    const tiles = TOPIC_LEVELS.map((lv, i) => h('button', {
      class: `lw-tile${done[lv.id] ? ' done' : ''}`, 'aria-label': lv.ar,
      onclick: () => { sh.sound.play('tap'); box.remove(); this._enter(lv.id); },
    }, h('i', {}, lv.emoji), h('b', {}, sh.T.num(LEVELS.length + i + 1)), h('span', {}, lv.ar), done[lv.id] ? h('u', {}, '⭐') : null));
    const box = h('div', { class: 'lk-dim', style: 'background:rgba(40,30,90,.45);z-index:30' },
      h('div', { class: 'lw-card' },
        h('div', { class: 'lw-title' }, en ? 'More levels' : 'مستويات أكتر'),
        h('div', { class: 'lw-grid' }, tiles),
        h('button', { class: 'lw-moreclose', onclick: () => box.remove() }, en ? 'Close' : 'اقفل')));
    sh.layer.append(box);
  }

  _clearRound() {
    if (this.st && this.st.shiftView) this.st.shiftView(0, 0); // leaving a word closes the examples: the picture slides back
    for (const o of this.opts.values()) this.st.scene.remove(o.g);
    this.opts.clear();
    this.leap = null;
    for (const it of this.rackItems) this.st.scene.remove(it);
    this.rackItems = [];
    this._showStand(null);
    this.st.setPicks([], null);
  }

  /** Entering a level from the map: the places turn by five each visit, so the same level is somewhere else next time. */
  _enter(levelId) {
    const lw = this.save.lw;
    this._begin(levelId);
    lw.spin = ((lw.spin || 0) + 5) % WORLD_IDS.length;
  }

  _begin(levelId, keepSpin = false) {
    const sh = this.sh;
    this._clearRound();
    this.levelId = levelId;
    this.level = EVERY_LEVEL.find((l) => l.id === levelId);
    if (!keepSpin) this._spin = this.save.lw.spin || 0;
    // a level may name the place that fits it (the new levels: a farm for opposites, a home for manners, a city for safety...); the others turn through the places
    const fixedWorld = this.level.world ? WORLD_IDS.indexOf(this.level.world) : -1;
    const worldIdx = fixedWorld >= 0 ? fixedWorld : Math.max(0, EVERY_LEVEL.findIndex((l) => l.id === levelId)) + this._spin;
    this._goWorld(worldIdx);
    this.mem.begin(levelId);
    if (/[?&]debug/.test(location.search)) window.__lw = this; // test hook: ?debug lets a tester put a round on screen (see docs/LEVELS_REPORT.md)
    this.firstTry = 0; // answers right at the first try in this game (the rating)
    this.learnedNow = []; // what was answered right at the first try (kept in the history)
    clearTimeout(this._endT);
    this.play = new LevelPlay(levelId, sh.age, Math.floor(Math.random() * 1e9), this.mem, WORLD_IDS[worldIdx % WORLD_IDS.length]);
    sh.clear();
    this.lightDots = sh.topBar(ROUNDS, '⭐');
    this.lightDots(0);
    this._scoreBadge();
    this._jumpBtn();
    this.sign = h('div', { class: 'lw-sign' });
    this.signText = h('span');
    this.signIcon = h('i', {}, this._barIcon());
    if (this._learnEn()) {
      // English: two big buttons beside the word, usable as often as the child likes: hear it again, hear it slowly (also after the right answer: the sentence)
      const hear = (slow) => (e) => {
        e.stopPropagation();
        const r = this.play && this.play.cur;
        if (!r || !r.say) return;
        this.sh.sound.play('tap');
        // Listen: say again EVERYTHING that was said last (the word, the slow word, the praise and the sentence), exactly as the first time;
        // Slowly: the word slowly
        if (!slow && r.sayAll) this.sh.speak(r.sayAll); // everything: the Arabic word, the word, slowly, the sentence
        else if (!slow && this._lastQ && this._lastQ.length) this.sh.speak(this._lastQ);
        else this.sh.speak(slow ? r.retry : (r.sayOnly || [r.say[0]]));
      };
      this.sign.style.direction = 'ltr';
      this.sign.append(this.signText, h('button', { class: 'lw-again lw-hear', 'aria-label': 'Listen again', onclick: hear(false) }, h('b', {}, '🔊'), h('small', {}, this._learnIt() ? 'Ascolta' : this._learnFr() ? 'Écouter' : this._learnDe() ? 'Hören' : 'Listen')),
        h('button', { class: 'lw-again lw-hear lw-slow', 'aria-label': 'Listen slowly', onclick: hear(true) }, h('b', {}, '🐢'), h('small', {}, this._learnIt() ? 'Piano' : this._learnFr() ? 'Lentement' : this._learnDe() ? 'Langsam' : 'Slowly')));
    } else this.sign.append(this.signIcon, this.signText, h('button', { class: 'lw-again', 'aria-label': sh.t('again'), onclick: (e) => { e.stopPropagation(); this._say(); } }, '🔊'));
    sh.layer.append(this.sign);
    sh.sound.setMode('play');
    sh.sound.energy = 0;
    this.st.mode = 'busy';
    setTimeout(() => this._ask(), this.worldChanged ? 1300 : 700);
  }

  /** The little picture on the question bar. A level that asks about many different things (fruits, shapes, animals,
   *  habits) must not show ONE of them (it looked like the answer was a strawberry while the question was an apple), so it
   *  shows a neutral 'look' icon; levels about letters and numbers keep their own. */
  _barIcon() {
    const m = this.level && this.level.mode;
    if (m === 'en') return '🔊';
    return ['pick', 'color', 'shape', 'animal', 'habit', 'word'].includes(m) ? '👀' : this.level.emoji;
  }

  _ask() {
    const r = this.play.cur;
    for (const o of this.opts.values()) this.st.scene.remove(o.g);
    this.opts.clear();
    this._showStand(r.show);
    const n = r.options.length;
    this.owl.act('toss');
    r.options.forEach((o, i) => this.opts.set(o.id, this._option(o, i, n)));
    this.st.setPicks([...this.opts.values()], (id) => this._tap(id));
    this.st.focus = null;
    this.signText.textContent = r.prompt;
    this.signText.style.direction = r.lang === 'en' || r.lang === 'de' || r.lang === 'fr' || r.lang === 'it' ? 'ltr' : '';
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this.st.mode = 'wait';
    this._pet((p) => { p.hungry = this.level.mode === 'animal'; });
    this.sh.sound.setSuspense(true);
    this.owl.look(0);
    this._say();
  }

  /** Says the question. With [full], a round whose choices are WORDS (manners, safety: 
ead) also reads every choice aloud, one after the other, and the choice being read hops. */
  _say(full = true) {
    const r = this.play.cur;
    if (!r) return;
    this.sh.sound.play('sparkle');
    this.owl.act('point');
    if (this.hero) { this.hero.look(0); this.hero.act('point'); }
    if (full && r.read && r.read.length) {
      const ids = r.options.map((o) => o.id);
      this.sh.speak([r.prompt, ...r.read], (i) => { const o = i > 0 ? this.opts.get(ids[i - 1]) : null; if (o) o.wig = 0.6; });
    } else if (r.say) { const q = full ? r.say : (r.retry || r.say); if (full) this._lastQ = q; this.sh.speak(q); } // English: the word (a new one also slowly); after a wrong tap, slowly
    else this.sh.speak(r.prompt);
  }

  _tap(id) {
    if (this.st.mode !== 'wait') return;
    const r = this.play.cur;
    const ev = this.play.tap(id);
    const o = this.opts.get(id);
    if (!ev.ok) {
      o.wig = 0.6;
      this.sh.sound.play('bump');
      this.owl.act('think');
      if (this.hero) this.hero.act('think');
      this._pet((p) => { p.shake = 0.7; });
      this.sh.say(this.sh.t('no'), false, 1.6);
      if (ev.firstMiss) this.sh.round(this.level.skill, false, r.answer);
      setTimeout(() => this.st.mode === 'wait' && this._say(false), 900);
      return;
    }
    if (ev.first) { this.sh.round(this.level.skill, true, r.answer); this.firstTry = (this.firstTry || 0) + 1; (this.learnedNow = this.learnedNow || []).push(r.prompt); }
    this.mem.note(r.key);
    this.save.lw.fresh = this.mem.toJSON();
    this.st.mode = 'found';
    this.sh.sound.setSuspense(false);
    this.st.setPicks([], null);
    const done = this.play.round;
    this.lightDots(done);
    this.sh.sound.energy = done / 5;
    this.sh.sound.play('splash');
    this.sh.sound.play('note', PENTA[(done * 2) % PENTA.length]);
    this.sh.sound.play('right');
    this.sh.sound.play('fanfare');
    this.sh.sound.play('applause');
    setTimeout(() => this.sh.sound.play('crowd'), 160);
    this.owl.act(done % 2 ? 'cheer' : 'clap');
    if (this.hero) this.hero.act(done % 3 === 0 ? 'celebrate' : done % 3 === 1 ? 'giggle' : 'clap');
    this.owl.look(o.g.position.x);
    for (const [k, x] of this.opts) if (k !== id) x.gone = true;
    // the owl arranges the picture on his rack
    this._pet((p) => { p.hop = p.hopDur = 1.3; p.hungry = false; });
    this.leap = { o, t: 0, from: o.g.position.clone(), slot: this.slots[done - 1], via: this.level.mode === 'animal' && this.standItem ? STAND.clone().add(new THREE.Vector3(0, 1.1, 0.4)) : null };
    const phrase = cheer(this.girl, this.cheerN++);
    const seq = [phrase];
    if (r.reward) seq.push(r.reward);
    this.signText.textContent = r.reward ? (r.arWord ? `${r.reward}  ·  ${r.arWord}` : r.reward) : phrase;
    this.signText.style.direction = (r.lang === 'en' || r.lang === 'de' || r.lang === 'fr' || r.lang === 'it') && r.reward ? 'ltr' : '';
    this.signIcon.textContent = '⭐';
    this._advDone = false;
    const next = () => {
      clearTimeout(this._advT);
      if (this._advDone) return;
      this._advDone = true;
      this._advance(ev);
    };
    setTimeout(() => {
      if (r.countAloud && this.standItem && this.standItem.userData.apples) {
        // count the apples out loud, each one hopping as its number is said
        const words = NUMBERS.slice(0, r.countAloud).map((x) => x[0]); // every number up to the count (no cap)
        this.sh.speak([phrase, ...words], (i) => {
          const a = this.standItem && this.standItem.userData.apples[i - 1];
          if (a) a.userData.jump = 0.4;
          if (i) this.sh.sound.play('note', PENTA[i % PENTA.length]);
        }, next);
      } else { const q = r.rewardSay ? [phrase, ...(r.arWord ? [{ t: r.arWord, lang: 'ar', optional: true }] : []), ...r.rewardSay] : seq; if (r.rewardSay) this._lastQ = q; this.sh.speak(q, null, next); }
    }, 600);
    // the next question waits for the whole counting to finish: a long count (eleven apples...) takes its time; only a safety net
    this._advT = setTimeout(next, 9000 + (r.countAloud || 0) * 1700);
  }

  _advance(ev) {
    setTimeout(() => {
      this.signIcon.textContent = this._barIcon();
      if (ev.finished) this._levelDone();
      else this._ask();
    }, 700);
  }

  _levelDone() {
    const sh = this.sh;
    this.st.mode = 'end';
    sh.sound.setSuspense(false);
    this.sign.remove();
    const list = this._list(); // the twelve map levels, then the topic levels
    const idx = list.findIndex((l) => l.id === this.levelId);
    this.save.lw.done[this.levelId] = true;
    this.save.lw.unlocked = Math.max(this.save.lw.unlocked || 1, idx + 2);
    // the rating of this game: finishing earns at least one star (never for time spent); right at the first try earns more.
    // The points are kept in the save (per child, on this device) and sent to the app for the child's profile.
    const ft = this.firstTry || 0;
    const stars = ft >= 7 ? 3 : ft >= 4 ? 2 : 1;
    const pts = stars * 10 + ft;
    const lw = this.save.lw;
    lw.points = (lw.points || 0) + pts;
    lw.plays = (lw.plays || 0) + 1;
    lw.best = lw.best || {};
    lw.best[this.levelId] = Math.max(lw.best[this.levelId] || 0, stars);
    // the history: what the child learned in this game, kept on the device (last 200 games)
    lw.history = lw.history || [];
    lw.history.push({ t: Date.now(), l: this.levelId, s: stars, ft, q: (this.learnedNow || []).slice(0, 8) });
    if (lw.history.length > 200) lw.history.splice(0, lw.history.length - 200);
    lw.last = this.levelId;
    sh.post({ type: 'points', points: pts, total: lw.points, stars, level: this.levelId, plays: lw.plays });
    sh.saveNow();
    this._rewardPanel(stars);
    this._showScore(pts, lw.points - pts, lw.points);
    this.owl.act('cheer');
    if (this.hero) this.hero.act('celebrate');
    this.st.sparkle(new THREE.Vector3(RACK.x, 2.2, RACK.z), 40);
    const hasNext = idx + 1 < list.length;
    if (!hasNext) {
      // the very last level: the end card (the star the first time), then back to the levels
      sh.sound.setMode('calm');
      sh.finishCard(this.level.ar, this.level.emoji, () => this._begin(this.levelId, true), null, () => this._levels());
      if (this.level.art) { const c = [...sh.layer.querySelectorAll('.lk-dim')].pop(); if (c) c.style.cssText += `background:linear-gradient(rgba(0,0,0,.12),rgba(0,0,0,.12)),url(${sh.base}art/${this.level.art.win}.webp) center/cover no-repeat;`; }
      setTimeout(() => this._report(), 1500); // the whole journey is done: the child's report
      return;
    }
    // no stop between levels (owner 2026-11-12): a short celebration, then the hero walks on slowly to the next place
    const first = !sh.done;
    sh.done = true;
    sh.complete();
    sh.sound.play('win');
    sh.sound.play('applause');
    setTimeout(() => sh.sound.play('crowd'), 200);
    setTimeout(() => { sh.sound.play('yay'); sh.sound.play('star'); }, 900);
    sh.speak(first ? `${sh.t('greatSay')} ${sh.t('newStarSay')}` : sh.t('greatSay'));
    const nextId = list[idx + 1].id;
    // a few seconds to see the stars, and the child can tap «العب معانا تاني» to play the same level again (new things come first)
    this._endT = setTimeout(() => this._walkOn(nextId, idx + 1 + (this._spin || 0)), 6500);
  }

  /** «🗺️»: a SMALL round button in the top bar, next to the row of stars (it covers nothing of the scene); it opens a small list of ALL the levels. */
  _jumpBtn() {
    const sh = this.sh;
    const en = sh.T.lang === 'en';
    const btn = h('button', { class: 'lw-jumpbtn', title: en ? 'Other levels' : 'مستويات تانية', 'aria-label': en ? 'Other levels' : 'مستويات تانية', onclick: (e) => { e.stopPropagation(); sh.sound.play('tap'); this._jumpMenu(); } }, '🗺️', h('span', {}, en ? 'Levels' : 'المستويات'));
    const top = sh.layer.querySelector('.lk-top');
    const dots = top && top.querySelector('.lk-dots');
    if (top && dots) top.insertBefore(btn, dots); else sh.layer.append(btn);
  }

  _jumpMenu() {
    const sh = this.sh;
    if (this._jump && this._jump.isConnected) { this._closeJump(); return; }
    const en = sh.T.lang === 'en';
    const done = this.save.lw.done || {};
    const best = this.save.lw.best || {};
    const tiles = this._list().map((lv, i) => h('button', {
      class: `lw-jt${lv.id === this.levelId ? ' here' : ''}${done[lv.id] ? ' done' : ''}`, title: lv.ar, 'aria-label': lv.ar,
      onclick: () => { sh.sound.play('tap'); this._closeJump(); clearTimeout(this._endT); if (sh.voice && sh.voice.stop) sh.voice.stop(); this._enter(lv.id); },
    }, h('i', {}, lv.emoji), h('b', {}, sh.T.num(i + 1)), best[lv.id] ? h('u', {}, '★'.repeat(best[lv.id])) : null));
    this._jump = h('div', { class: 'lw-jump' }, h('div', { class: 'lw-jtitle' }, en ? 'Go to a level' : 'روح مستوى تاني'), h('div', { class: 'lw-jgrid' }, tiles));
    sh.layer.append(this._jump);
    // a tap anywhere else closes the little list
    this._jumpOff = (e) => { if (!this._jump) { document.removeEventListener('pointerdown', this._jumpOff, true); return; } if (!this._jump.contains(e.target) && !(e.target.closest && e.target.closest('.lw-jumpbtn'))) this._closeJump(); };
    setTimeout(() => { if (this._jump) document.addEventListener('pointerdown', this._jumpOff, true); }, 0);
  }

  _closeJump() {
    if (this._jump) this._jump.remove();
    if (this._jumpOff) document.removeEventListener('pointerdown', this._jumpOff, true);
    this._jump = null;
  }

  /** The points at the top right of the screen: the total (⭐ N) and, for a few seconds after a finished level, the number just added (+N) above it. */
  _scoreBadge() {
    const sh = this.sh;
    const total = (this.save.lw.points || 0);
    this.deltaEl = h('b', { class: 'lw-delta', dir: 'ltr' }); // +23 reads left to right
    this.sumEl = h('span', { class: 'lw-sum' }, `⭐ ${sh.T.num(total)}`);
    this.scoreEl = h('div', { class: 'lw-score' + (total > 0 ? '' : ' hide'), 'aria-live': 'polite' }, this.deltaEl, this.sumEl);
    // in the top row, right beside the arrow (owner 2026-11-18); the «+N» appears under it for a few seconds
    const top = sh.layer.querySelector('.lk-top');
    const dots = top && top.querySelector('.lk-dots');
    if (top && dots) top.insertBefore(this.scoreEl, dots); else sh.layer.append(this.scoreEl);
  }

  /** «+23» appears, then the total counts up to its new value. */
  _showScore(add, from, to) {
    const sh = this.sh;
    if (!this.scoreEl || !this.scoreEl.isConnected) this._scoreBadge();
    this.scoreEl.classList.remove('hide');
    this.sumEl.textContent = `⭐ ${sh.T.num(from)}`;
    this.deltaEl.textContent = `+${sh.T.num(add)}`;
    this.deltaEl.classList.remove('go');
    void this.deltaEl.offsetWidth;
    this.deltaEl.classList.add('go');
    const steps = Math.min(add, 24) || 1;
    let k = 0;
    clearInterval(this._countT);
    this._countT = setInterval(() => {
      k++;
      this.sumEl.textContent = `⭐ ${sh.T.num(k >= steps ? to : Math.round(from + (add * k) / steps))}`;
      if (k >= steps) clearInterval(this._countT);
    }, 60);
    sh.sound.play('note', 88);
  }

  /** The stars of the game just finished, and the button to play it again. */
  _rewardPanel(stars) {
    const sh = this.sh;
    const panel = h('div', { class: 'lw-reward' },
      h('div', { class: 'lw-stars' }, [1, 2, 3].map((k) => h('i', { class: k <= stars ? 'on' : '' }, '⭐'))));
    const again = h('button', { class: 'lw-replay', onclick: () => {
      clearTimeout(this._endT);
      sh.sound.play('tap');
      sh.speak(sh.t('replaySay'));
      setTimeout(() => this._begin(this.levelId, true), 700);
    } }, `🔁 ${sh.t('replay')}`);
    sh.layer.append(panel, again);
  }

  /** Between levels: the hero WALKS (in place, footsteps) while the world scrolls past and the next place slides in from
   *  the right and its sky fades in (no flash, no jump), then the next level begins. */
  _walkOn(nextId, worldIndex) {
    const sh = this.sh;
    this._clearRound();
    const hero = this.hero;
    const id = WORLD_IDS[worldIndex % WORLD_IDS.length];
    if (this.worldId === id || !hero) { this._goWorld(worldIndex, true); this._begin(nextId, true); return; }
    if (!this.worlds[id]) { this.worlds[id] = buildWorld(id); this.st.add(this.worlds[id].group); }
    const from = this.world, to = this.worlds[id];
    const SHIFT = 34;
    to.group.visible = true;
    to.group.position.x = SHIFT;
    from.seam('old', SEAM_X);
    to.seam('new', SEAM_X);
    const sky = to.group.children[0];
    if (sky && sky.material) { sky.material.transparent = true; sky.material.opacity = 0; }
    let foot = 0;
    // footsteps follow the walk clip: one step every half stride, the first just after the first foot lands
    let stepTimer = null;
    const stepMs = stepSeconds(this.kind) * 1000;
    const tick = () => { sh.sound.play('step', foot++ % 2); stepTimer = setTimeout(tick, stepMs); };
    stepTimer = setTimeout(tick, 80);
    hero.act('walk');
    this.owl.act('wave');
    sh.sound.setMode('calm');
    sh.sound.play('whoosh');
    this.scroll = { from, to, sky, t: 0, dur: 4.2, SHIFT, then: () => {
      clearTimeout(stepTimer);
      from.seam('off');
      to.seam('off');
      from.group.visible = false;
      from.group.position.x = 0;
      to.group.position.x = 0;
      if (sky && sky.material) { sky.material.opacity = 1; sky.material.transparent = false; }
      this.world = to;
      this.worldId = id;
      this.padStyle = PADS[to.pad];
      this._tune(id);
      hero.act('wave');
      setTimeout(() => this._begin(nextId, true), 1400);
    } };
  }

  // ---- animation ---------------------------------------------------------------------------------------------------

  /** Runs `fn` on the little pet standing on the question stand (a picture of an animal, a thing...), when there is one. */
  _pet(fn) {
    const p = this.standItem && this.standItem.userData.pet;
    if (p) fn(p);
  }

  /** The picture on the stand is alive: it breathes and bounces gently, wobbles when hungry, shakes its head at a wrong
   *  answer, hops for joy at a right one and chews when it eats. Pure motion, no sound, nothing is ever lost. */
  _petLife(p, dt, time) {
    const t = p.inner, a = time * 1.6 + p.t0;
    let y = p.base + Math.abs(Math.sin(a)) * 0.05;
    let sx = 1 + Math.sin(a * 2) * 0.012, sy = 1 - Math.sin(a * 2) * 0.012, rz = Math.sin(time * 1.1 + p.t0) * 0.03;
    if (p.hungry) { rz += Math.sin(time * 6.5) * 0.04; sx += Math.sin(time * 9) * 0.012; }
    if (p.shake > 0) { p.shake -= dt; rz += Math.sin(p.shake * 30) * 0.28 * Math.max(0, p.shake / 0.7); }
    if (p.hop > 0) {
      p.hop -= dt;
      const k = 1 - Math.max(0, p.hop) / p.hopDur, w = Math.abs(Math.sin(k * Math.PI * 3)), fade = 1 - k * 0.45;
      y += w * 0.62 * fade; sy += (1 - w) * 0.1 * (1 - k); sx -= (1 - w) * 0.07 * (1 - k); rz += Math.sin(k * Math.PI * 6) * 0.1 * (1 - k);
    }
    if (p.chew > 0) { p.chew -= dt; y += Math.abs(Math.sin(time * 17)) * 0.08; sy += Math.sin(time * 34) * 0.035; rz += Math.sin(time * 11) * 0.05; }
    t.position.y = y;
    t.scale.set(p.s0.x * sx, p.s0.y * sy, p.s0.z);
    t.rotation.z = rz;
  }

  _frame(dt, time) {
    this.owl.update(dt, time);
    if (this.hero) this.hero.update(dt, time);
    if (this.scroll) {
      const C = this.scroll;
      C.t += dt / C.dur;
      const k = Math.min(1, C.t);
      const e = k * k * (3 - 2 * k);
      C.from.group.position.x = -C.SHIFT * e;
      C.to.group.position.x = C.SHIFT * (1 - e);
      const xb = SEAM_X - C.SHIFT * e; // the seam moves left with the scroll
      C.from.seam('old', xb);
      C.to.seam('new', xb);
      if (C.sky && C.sky.material) C.sky.material.opacity = e;
      C.to.update(dt, time);
      if (this.hero) this.hero.userData.state.act = 'walk';
      if (k >= 1) { const then = C.then; this.scroll = null; then(); }
    }
    if (this.walk) {
      const W = this.walk;
      W.t += dt / W.dur;
      const k = Math.min(1, W.t);
      W.hero.position.x = W.from + (W.to - W.from) * (k * k * (3 - 2 * k));
      if (k >= 1) { const then = W.then; this.walk = null; then(); }
    }
    if (this.previews) for (const k of Object.values(this.previews)) if (k.parent) { k.update(dt, time); if (Math.random() < 0.004) k.act('wave'); }
    if (this.world) this.world.update(dt, time);
    const hint = this.play && this.st.mode === 'wait' && this.play.cur ? this.play.hint : null;
    const fid = this.st.mode === 'wait' ? this.st.focusedId() : null;
    for (const [id, f] of this.opts) {
      if (f.gone) { f.g.position.x += (f.g.position.x < 0 ? -1 : 1) * dt * 6; f.g.scale.multiplyScalar(Math.max(0, 1 - dt * 1.5)); continue; }
      if (this.leap && this.leap.o === f) continue;
      if (f.arrive < 1) {
        // the owl tosses it onto the water
        f.arrive += dt * 2.4;
        const k = Math.max(0, Math.min(1, f.arrive));
        if (f.arrive > 0) {
          f.g.position.lerpVectors(f.from, f.home, k);
          f.g.position.y += Math.sin(k * Math.PI) * 2.0;
          f.g.scale.setScalar(Math.max(0.01, k));
          if (k >= 1 && !f.landed) { f.landed = true; this.sh.sound.play('splash'); }
        }
        continue;
      }
      const a = time * 0.55 + f.ph;
      // numbers, letters and anything carrying a sign must stay READABLE: they face the child, hardly drift and never turn (owner 2026-11-18:
      // the numbers were spinning while the child chose and could not be read); pictures keep their gentle swing
      const still = f.o.kind === 'number' || f.o.kind === 'letter';
      const sway = still ? 0 : f.o.plaque ? 0.06 : 0.35;
      const drift = still ? 0.1 : f.o.plaque ? 0.3 : 0.55;
      f.g.position.set(f.home.x + Math.cos(a) * drift, 0.1 + Math.sin(time * 2 + f.ph) * 0.04, f.home.z + Math.sin(a * 1.3) * (still ? 0.06 : 0.4));
      f.g.rotation.y = Math.sin(time * 0.8 + f.ph) * sway;
      f.ring.rotation.z = Math.sin(time * 2 + f.ph) * 0.06;
      if (f.o.kind === 'thing' && f.item) f.item.position.y = f.baseY + Math.abs(Math.sin(time * 2.4 + f.ph)) * 0.06;
      if (f.o.kind === 'shape') f.item.rotation.y = Math.sin(time * 1.4 + f.ph) * 0.5;
      if (f.o.kind === 'color') f.item.position.y = 0.95 + Math.abs(Math.sin(time * 2.2 + f.ph)) * 0.12;
      const wg = f.item && f.item.userData && f.item.userData.inner && f.item.userData.inner.userData.wings;
      if (wg) wg.scale.x = 0.55 + Math.abs(Math.sin(time * 14 + f.ph)) * 0.45;
      f.glow.material.opacity = id === hint ? 0.55 + Math.sin(time * 6) * 0.2 : id === fid ? 0.4 : 0;
      f.glow.material.color.setHex(id === fid ? 0x7ad0ff : 0xfff27a);
      if (id === hint) this.owl.look(f.g.position.x);
      if (f.wig > 0) { f.wig -= dt; f.g.rotation.z = Math.sin(f.wig * 40) * 0.35 * f.wig; } else f.g.rotation.z = 0;
    }
    // the chosen picture hops to the owl's rack
    if (this.leap) {
      const L = this.leap;
      L.t += dt / (L.via ? 1.7 : 1.1);
      const k = Math.min(1, L.t);
      const slotPos = new THREE.Vector3(L.slot.x, L.slot.y - 0.2, L.slot.z);
      // numbers, letters and plaques must never spin while they hop (owner 2026-11-20: the number turned edge-on and could not be read)
      const noSpin = L.o.o && (L.o.o.kind === 'number' || L.o.o.kind === 'letter' || L.o.o.plaque);
      if (L.via) {
        // the food first hops to the animal's mouth, who munches, and only then goes on to the rack
        const SPLIT = 0.42;
        if (k < SPLIT) {
          const kk = k / SPLIT, ee = kk * kk * (3 - 2 * kk);
          L.o.g.position.lerpVectors(L.from, L.via, ee);
          L.o.g.position.y += Math.sin(kk * Math.PI) * 1.6;
          L.o.g.scale.setScalar(Math.max(0.01, 1 - 0.5 * ee));
          L.o.g.rotation.y = noSpin ? 0 : ee * Math.PI;
        } else {
          if (!L.ate) { L.ate = true; this.sh.sound.play('pop'); this._pet((p) => { p.chew = 1.1; }); this.st.sparkle(L.via.clone(), 10); }
          const kk = (k - SPLIT) / (1 - SPLIT), ee = kk * kk * (3 - 2 * kk);
          L.o.g.position.lerpVectors(L.via, slotPos, ee);
          L.o.g.position.y += Math.sin(kk * Math.PI) * 2.0;
          L.o.g.scale.setScalar(Math.max(0.01, 0.5 - 0.08 * ee));
          L.o.g.rotation.y = noSpin ? 0 : Math.PI + ee * Math.PI;
        }
      } else {
        const e = k * k * (3 - 2 * k);
        L.o.g.position.lerpVectors(L.from, slotPos, e);
        L.o.g.position.y += Math.sin(k * Math.PI) * 2.4;
        L.o.g.scale.setScalar(Math.max(0.01, 1 - 0.58 * e));
        L.o.g.rotation.y = noSpin ? 0 : e * Math.PI * 2;
      }
      if (k >= 1) {
        // keep only the picture on the rack: the raft stays behind and sinks away
        const keep = L.o.item;
        const wp = new THREE.Vector3();
        const ws = new THREE.Vector3();
        keep.getWorldPosition(wp);
        keep.getWorldScale(ws);
        L.o.g.remove(keep);
        keep.position.copy(wp);
        keep.scale.copy(ws).multiplyScalar(0.8 * 0.62);
        keep.rotation.set(0, 0, 0);
        this.st.add(keep);
        this.rackItems.push(keep);
        this.st.scene.remove(L.o.g);
        this.opts.delete(L.o.o.id);
        this.st.sparkle(new THREE.Vector3(L.slot.x, L.slot.y + 0.3, L.slot.z), 14);
        this.sh.sound.play('pop');
        this.leap = null;
      }
    }
    // the apples on the stand hop as they are counted
    if (this.standItem && this.standItem.userData.apples) {
      for (const a of this.standItem.userData.apples) {
        if (a.userData.jump > 0) { a.userData.jump -= dt; a.position.y = 0.76 + Math.sin(Math.max(0, a.userData.jump) * Math.PI / 0.4) * 0.25; } else a.position.y = 0.76;
      }
    }
    if (this.standItem && this.standItem.userData.spin) this.standItem.userData.spin.rotation.y = time * 0.8;
    if (this.standItem && this.standItem.userData.pet) this._petLife(this.standItem.userData.pet, dt, time);
  }

  pause() { this.sh.pause(); }

  dispose() {
    clearTimeout(this._advT);
    this.st.dispose();
    this.sh.dispose();
  }
}

const CSS = `
.lw-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #2a9ae0;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.4));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(10,40,70,.3);pointer-events:auto;max-width:94%}
.lw-sign i{font-style:normal;font-size:1.5em}
.lw-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lw-sign.pop{animation:lw-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes lw-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.lw-hear{width:auto!important;min-width:calc(var(--u)*13);height:calc(var(--u)*13)!important;border-radius:calc(var(--u)*4)!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:0 calc(var(--u)*1.5)!important;direction:ltr}.lw-hear b{font-size:calc(var(--u)*6);line-height:1}.lw-hear small{font-size:calc(var(--u)*2.6);font-weight:900;color:#5a3a00}.lw-slow{background:linear-gradient(180deg,#9be88a,#3fb84a)!important;box-shadow:0 calc(var(--u)*.5) 0 #1f7a2a!important}.lw-slow small{color:#0f4a18}
.lw-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
.lw-card{background:#fffaf0;border:calc(var(--u)*.8) solid #ffd45a;border-radius:calc(var(--u)*6);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:96%;max-height:92%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(30,20,70,.4);pointer-events:auto}
.lw-title{font-size:calc(var(--u)*7.5);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #6a3ad0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #4a2a9a}
.lw-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:calc(var(--u)*1.6)}
.lw-tile{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.4);width:calc(var(--u)*17);min-width:92px;height:calc(var(--u)*19);min-height:96px;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3.4);background:linear-gradient(180deg,#8ad8ff,#3aa0f0);color:#fff;font-family:inherit;font-weight:900;cursor:pointer;padding:calc(var(--u)*.8);box-shadow:0 calc(var(--u)*.8) 0 #1a6ab8,0 calc(var(--u)*1) calc(var(--u)*2) rgba(20,40,80,.3)}
.lw-tile:active{transform:translateY(calc(var(--u)*.5))}
.lw-tile i{font-style:normal;font-size:calc(var(--u)*6.5);line-height:1}
.lw-tile i.lw-ic{width:calc(var(--u)*9);height:calc(var(--u)*9)}.lw-tile i.lw-ic img{width:100%;height:100%;object-fit:contain;display:block}
.lw-tile b{position:absolute;top:calc(var(--u)*.6);left:calc(var(--u)*1);font-size:calc(var(--u)*3);background:#ffd23a;color:#5a3a00;border-radius:999px;min-width:calc(var(--u)*4.6);text-align:center}
.lw-tile span{font-size:calc(var(--u)*3.3);line-height:1.15;text-align:center}
.lw-tile u{position:absolute;bottom:calc(var(--u)*.4);right:calc(var(--u)*.8);text-decoration:none;font-size:calc(var(--u)*3.6)}
.lw-tile.done{background:linear-gradient(180deg,#8aeaa0,#2fb85a);box-shadow:0 calc(var(--u)*.8) 0 #1a7a3a,0 calc(var(--u)*1) calc(var(--u)*2) rgba(20,40,80,.3)}
.lw-pic{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#6cc0f0}
.lw-pic-blur{position:absolute;inset:-5%;width:110%;height:110%;object-fit:cover;filter:blur(18px) brightness(.9);transform:scale(1.05)}
.lw-pic-box{position:relative}
.lw-pic-img{display:block;width:100%;height:100%;user-select:none;-webkit-user-drag:none}
.lw-more{position:absolute;border:calc(var(--u)*.5) solid #fff;border-radius:999px;background:linear-gradient(180deg,#ffb84a,#f08a1a);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*2.6);cursor:pointer;box-shadow:0 calc(var(--u)*.5) 0 #b8600a}
.lw-moreclose{margin-top:calc(var(--u)*1.5);padding:calc(var(--u)*1) calc(var(--u)*4);border:none;border-radius:999px;background:#fff;color:#5a3a9a;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);cursor:pointer}
.lw-card .lw-grid{max-height:70vh;overflow:auto}
.lw-sub{font-weight:800;color:#5a3a9a;text-align:center;font-size:calc(var(--u)*2.6);margin:calc(var(--u)*.6) 0}
.lw-choice{display:block;width:100%;margin-top:calc(var(--u)*1.2);padding:calc(var(--u)*1.4);border:none;border-radius:999px;background:linear-gradient(180deg,#7ad86a,#2fb85a);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);cursor:pointer;box-shadow:0 calc(var(--u)*.5) 0 #1a7a3a}
.lw-choice.alt{background:linear-gradient(180deg,#8ad8ff,#3aa0f0);box-shadow:0 calc(var(--u)*.5) 0 #1a6ab8}
.lw-hlist{max-height:52vh;overflow:auto;margin-top:calc(var(--u)*1)}
.lw-hrow{background:#fff;border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*1) calc(var(--u)*1.6);margin:calc(var(--u)*.6) 0;font-size:calc(var(--u)*2.3);color:#3a2a5a;text-align:right}
.lw-hrow b{display:block}.lw-hrow small{color:#8a7aaa}.lw-hrow span{display:block;font-size:calc(var(--u)*2);color:#5a4a7a}
.lw-report{max-width:min(92vw,calc(var(--u)*60))}
.lw-board{position:absolute;border-radius:7%;background:linear-gradient(180deg,#fff7d9,#ffe7a3);border:calc(var(--u)*.7) solid #f5b21a;box-shadow:0 calc(var(--u)*.7) 0 #c88a10,inset 0 0 calc(var(--u)*2) rgba(255,255,255,.9);pointer-events:none}
.lw-ptile{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.1);border:calc(var(--u)*.55) solid var(--bd,#ffd45a);border-radius:18%;background:linear-gradient(180deg,#fff,var(--bg,#ffeec2));box-shadow:0 calc(var(--u)*.6) 0 var(--sh,#c88a10),inset 0 0 0 calc(var(--u)*.3) #fff;font-family:inherit;cursor:pointer;padding:0;overflow:hidden;transition:transform .12s}
.lw-ptile:active{transform:translateY(calc(var(--u)*.4)) scale(.97)}
.lw-ptile:focus-visible{outline:calc(var(--u)*.7) solid #7a3fd0}
.lw-ptile.c0{--bg:#ffe0e0;--bd:#ff9a9a;--sh:#c85a5a}.lw-ptile.c1{--bg:#ffefc9;--bd:#ffc04a;--sh:#c88a10}.lw-ptile.c2{--bg:#dcf5d0;--bd:#7ad060;--sh:#4a9a3a}
.lw-ptile.c3{--bg:#d6ecff;--bd:#6ab8ff;--sh:#3a7ac0}.lw-ptile.c4{--bg:#ebdcff;--bd:#b48aff;--sh:#7a52c0}.lw-ptile.c5{--bg:#ffdff1;--bd:#ff8ac8;--sh:#c04a90}
.lw-ptile.off{filter:grayscale(.8);opacity:.6;pointer-events:none}
.lw-ptile i{font-style:normal;display:flex;align-items:center;justify-content:center;width:46%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,rgba(255,255,255,.55));box-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.08)}
.lw-ptile i em{font-style:normal;font-size:calc(var(--u)*5.2);line-height:1}
.lw-ptile b{position:absolute;top:4%;right:7%;min-width:24%;border-radius:999px;background:#7a3fd0;color:#fff;font-size:calc(var(--u)*2.5);line-height:1.4;text-align:center;box-shadow:0 calc(var(--u)*.25) 0 #4a2a9a}
.lw-ptile span{font-size:calc(var(--u)*2.7);font-weight:900;color:#3f2480;line-height:1.1;text-align:center;padding:0 5%;max-width:98%}
.lw-ptile small{font-size:calc(var(--u)*2);color:#e8a10a;line-height:1;letter-spacing:.1em}
.lw-ptile u{position:absolute;top:3%;left:6%;text-decoration:none;font-size:calc(var(--u)*3.2)}
.lw-ptile.done{border-color:#58c040}
.lw-hit{position:absolute;border:none;background:transparent;padding:0;margin:0;cursor:pointer;opacity:0;border-radius:18%}
.lw-hit:focus-visible{opacity:1;outline:calc(var(--u)*.8) solid #fff200;background:rgba(255,242,0,.18)}
.lw-hit.off{pointer-events:none}
.lw-star{position:absolute;font-style:normal;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);pointer-events:none;filter:drop-shadow(0 2px 2px rgba(0,0,0,.35))}
.lw-tile.lock{background:linear-gradient(180deg,#d8d8e4,#a8a8b8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a8a;cursor:default;opacity:.85}
.lw-herobar{position:absolute;left:50%;bottom:calc(var(--u)*3);transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.6);pointer-events:none;width:94%}
.lw-hero{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.4);pointer-events:auto}
.lw-who{display:flex;gap:calc(var(--u)*3)}
.lw-jumpbtn{flex:none;font-family:inherit;display:flex;align-items:center;gap:calc(var(--u)*.8);height:calc(var(--u)*7.4);min-height:40px;border-radius:999px;border:calc(var(--u)*.5) solid #fff;background:linear-gradient(180deg,#8a6aff,#5a3ad0);color:#fff;font-size:calc(var(--u)*3.4);font-weight:900;line-height:1;cursor:pointer;box-shadow:0 calc(var(--u)*.5) 0 #3a2290;padding:0 calc(var(--u)*2);white-space:nowrap}
.lw-jumpbtn span{font-size:calc(var(--u)*3);font-weight:900}
.lw-jump{position:absolute;right:calc(var(--u)*2);top:calc(var(--u)*11.6);background:rgba(255,250,240,.96);border:calc(var(--u)*.5) solid #ffd45a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1) calc(var(--u)*1.2);z-index:30;pointer-events:auto;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2.4) rgba(30,20,70,.35)}
.lw-jtitle{font-size:calc(var(--u)*2.8);font-weight:900;color:#5a2fb0}
.lw-jgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:calc(var(--u)*.7)}
@media (max-aspect-ratio:1/1){.lw-jgrid{grid-template-columns:repeat(4,1fr)}}
.lw-jt{position:relative;font-family:inherit;display:flex;align-items:center;justify-content:center;width:calc(var(--u)*7.6);height:calc(var(--u)*7.6);min-width:34px;min-height:34px;background:linear-gradient(180deg,#8ad0ff,#3a9ae8);border:calc(var(--u)*.35) solid #fff;border-radius:calc(var(--u)*1.6);padding:0;cursor:pointer;color:#fff;box-shadow:0 calc(var(--u)*.4) 0 #1f6fb8}
.lw-jt i{font-style:normal;font-size:calc(var(--u)*3.8);line-height:1}
.lw-jt b{position:absolute;top:-1px;left:1px;font-size:calc(var(--u)*1.9);line-height:1;background:#ffd23a;color:#5a3a00;border-radius:999px;min-width:calc(var(--u)*2.6);text-align:center}
.lw-jt u{position:absolute;bottom:0;right:1px;text-decoration:none;font-size:calc(var(--u)*1.8);color:#ffe36a;line-height:1}
.lw-jt.done{background:linear-gradient(180deg,#8aeaa0,#2fb85a);box-shadow:0 calc(var(--u)*.4) 0 #1a7a3a}
.lw-jt.here{outline:calc(var(--u)*.5) solid #ff8a1a}
.lw-reward{position:absolute;left:50%;top:17%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);pointer-events:none;animation:lw-reward-pop .7s cubic-bezier(.2,1.6,.4,1)}
.lw-stars{display:flex;gap:calc(var(--u)*1.2);font-size:calc(var(--u)*11)}
.lw-stars i{font-style:normal;filter:grayscale(1) brightness(1.6);opacity:.45;transform:scale(.8)}
.lw-stars i.on{filter:none;opacity:1;transform:scale(1);animation:lw-star-in .6s cubic-bezier(.2,1.8,.4,1) both}
.lw-stars i.on:nth-child(2){animation-delay:.25s}.lw-stars i.on:nth-child(3){animation-delay:.5s}
.lw-score{position:relative;flex:none;display:flex;flex-direction:column;align-items:center;pointer-events:none;z-index:4}
.lw-score.hide{display:none}
.lw-sum{font-weight:900;font-size:calc(var(--u)*4.4);color:#5a2fb0;background:#fff7d6;border:calc(var(--u)*.5) solid #ffd45a;border-radius:999px;padding:calc(var(--u)*.3) calc(var(--u)*2.2);box-shadow:0 calc(var(--u)*.5) 0 #c88a10;white-space:nowrap}
.lw-delta{position:absolute;top:calc(100% + var(--u)*.4);left:-50%;right:-50%;text-align:center;white-space:nowrap;font-weight:900;font-size:calc(var(--u)*7);color:#fff;-webkit-text-stroke:calc(var(--u)*.6) #2a9a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.7) 0 #1a6a30;opacity:0}
.lw-delta.go{animation:lw-delta-in 4.5s ease-out both}
@keyframes lw-delta-in{0%{opacity:0;transform:translateY(calc(var(--u)*3)) scale(.4)}12%{opacity:1;transform:translateY(0) scale(1.15)}20%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:translateY(calc(var(--u)*-1))}}
.lw-replay{position:absolute;left:50%;top:calc(var(--u)*13);transform:translateX(-50%);font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;background:linear-gradient(180deg,#8a6aff,#5a3ad0);border:calc(var(--u)*.7) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);cursor:pointer;box-shadow:0 calc(var(--u)*.9) 0 #3a2290,0 calc(var(--u)*1.4) calc(var(--u)*2.6) rgba(40,30,90,.35);animation:lw-replay-bob 1.6s ease-in-out infinite;z-index:5;white-space:nowrap}
.lw-ptstag{font-weight:900;font-size:calc(var(--u)*3.8);color:#5a2fb0;background:#fff7d6;border:calc(var(--u)*.5) solid #ffd45a;border-radius:999px;display:flex;align-items:center;justify-content:center;white-space:nowrap}
.lw-best{font-style:normal;color:#ffb81a;font-size:calc(var(--u)*3);text-shadow:0 1px 0 #a06a00;display:flex;align-items:center;justify-content:center;pointer-events:none}
@keyframes lw-reward-pop{from{transform:translateX(-50%) scale(.4);opacity:0}to{transform:translateX(-50%) scale(1);opacity:1}}
@keyframes lw-star-in{from{transform:scale(0) rotate(-120deg)}to{transform:scale(1) rotate(0)}}
@keyframes lw-replay-bob{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(calc(var(--u)*-.9))}}
.lw-agebar{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*3);pointer-events:none;width:96%}
.lw-agerow{display:flex;gap:calc(var(--u)*2.2);pointer-events:auto;flex-wrap:wrap;justify-content:center}
.lw-agebtn2{font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:linear-gradient(180deg,#fff7d6,#ffd45a);border:calc(var(--u)*.8) solid #fff;border-radius:calc(var(--u)*5);padding:calc(var(--u)*1.8) calc(var(--u)*2.6);cursor:pointer;box-shadow:0 calc(var(--u)*1) 0 #c88a10,0 calc(var(--u)*1.6) calc(var(--u)*3) rgba(40,30,90,.35);min-width:max(64px,calc(var(--u)*13));animation:lw-agebob 2.4s ease-in-out infinite}
.lw-agebtn2:nth-child(2){animation-delay:.2s}.lw-agebtn2:nth-child(3){animation-delay:.4s}.lw-agebtn2:nth-child(4){animation-delay:.6s}.lw-agebtn2:nth-child(5){animation-delay:.8s}
.lw-agebtn2.on{background:linear-gradient(180deg,#d8f8c8,#6ad070)}
.lw-agebtn2 b{font-size:calc(var(--u)*9);line-height:1;color:#5a2fb0}
.lw-agebtn2 i{font-style:normal;font-size:calc(var(--u)*3.2);line-height:1.1;max-width:calc(var(--u)*13);word-break:break-all;text-align:center}
.lw-agebtn2:active{transform:translateY(calc(var(--u)*.5))}
@keyframes lw-agebob{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--u)*-1))}}
.lw-agetag{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#5a2fb0;background:#fff;border:calc(var(--u)*.5) solid #ffd45a;border-radius:999px;padding:0 calc(var(--u)*1);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.5) 0 #c88a10;white-space:nowrap}
.lw-who button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;border:calc(var(--u)*.7) solid #fff;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*5);cursor:pointer;min-height:max(52px,calc(var(--u)*12));box-shadow:0 calc(var(--u)*.8) 0 rgba(0,0,0,.25)}
.lw-boy{background:linear-gradient(180deg,#ffd84a,#f5a01a)}
.lw-girl{background:linear-gradient(180deg,#ff8ac8,#e8409a)}
.lw-row{display:flex;gap:calc(var(--u)*1.6)}
.lw-sw{width:max(40px,calc(var(--u)*8));height:max(40px,calc(var(--u)*8));border-radius:50%;border:calc(var(--u)*.6) solid #fff;cursor:pointer;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(0,0,0,.3)}
.lw-fade{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none;transition:opacity .5s;z-index:20}
.lw-fade.on{opacity:1}
.lw-tile:focus-visible{outline:calc(var(--u)*.8) solid #6a3ad0;outline-offset:calc(var(--u)*.6)}
@media (max-aspect-ratio:1/1){.lw-grid{grid-template-columns:repeat(3,1fr)}}
.lw-learn{max-width:96%;overflow-x:hidden !important}.lw-lgrid{grid-template-columns:repeat(6,minmax(0,1fr)) !important;max-height:62vh;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin}.lw-lsec{min-height:calc(var(--u)*17);padding:calc(var(--u)*1) calc(var(--u)*.5) !important;gap:calc(var(--u)*.4)}.lw-lsec i{font-style:normal;font-size:calc(var(--u)*7)}.lw-lsec span{font-size:calc(var(--u)*2.5);line-height:1.1;text-align:center}.lw-lsec small{font-size:calc(var(--u)*2.3);opacity:.85}
.lw-ltop{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--u)*1.5);pointer-events:auto}.lw-lprog{flex:1;text-align:center;font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;text-shadow:0 calc(var(--u)*.3) calc(var(--u)*1) rgba(0,0,0,.45);background:rgba(60,40,140,.55);border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*3)}
.lw-lbignum{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font-weight:900;color:#3a2a6a;background:radial-gradient(circle at 50% 35%,#fff,#fff7d6);border:calc(var(--u)*1) solid #f5b21a;border-radius:calc(var(--u)*8);padding:calc(var(--u)*1.5) calc(var(--u)*7);box-shadow:0 calc(var(--u)*1.2) 0 #c98a1a,0 calc(var(--u)*2) calc(var(--u)*5) rgba(0,0,0,.3);pointer-events:none;white-space:nowrap;line-height:1.1}/* the pick pad and the end card must sit ABOVE the full-screen next button (z-index 2), else a tap on a key advances the number and closes the pad (owner 2026-11-26) */
.lw-lpick,.lw-ldone{z-index:5}
.lw-lcap{position:absolute;left:50%;top:15%;transform:translateX(-50%);width:max-content;max-width:90%;text-align:center;font-weight:900;color:#3a2a6a;background:#fff;border:calc(var(--u)*.7) solid #6a3ad0;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*2.4);font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.7) 0 #4a2a9a;z-index:1;pointer-events:none;line-height:1.25}
.lw-exw{position:absolute;left:50%;bottom:calc(var(--u)*15);transform:translateX(-50%);display:flex;flex-direction:column-reverse;align-items:center;gap:calc(var(--u)*1);z-index:4;pointer-events:none;max-width:92%}
.lw-exw>*{pointer-events:auto}
.lw-ex{display:flex;align-items:center;gap:calc(var(--u)*1.2);font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.2);color:#fff;background:linear-gradient(180deg,#ffb84a,#f08a1a);border:calc(var(--u)*.5) solid #fff;border-radius:999px;padding:calc(var(--u)*.7) calc(var(--u)*2.6);cursor:pointer;box-shadow:0 calc(var(--u)*.5) 0 #b8600a;text-shadow:0 calc(var(--u)*.2) 0 rgba(0,0,0,.25)}
.lw-ex i{font-style:normal;font-size:calc(var(--u)*3.8)}.lw-ex em{font-style:normal;background:#fff;color:#c86a0a;border-radius:999px;min-width:calc(var(--u)*3.4);text-align:center;font-size:calc(var(--u)*2.6);line-height:1.35;text-shadow:none}
.lw-ex.open{filter:brightness(1.08);transform:translateY(calc(var(--u)*.3))}
.lw-expanel{position:absolute;z-index:5;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:calc(var(--u)*23);max-height:42%;overflow-y:auto;flex-direction:column;gap:calc(var(--u)*.9);background:rgba(255,255,255,.96);border:calc(var(--u)*.6) solid #6a3ad0;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4);box-shadow:0 calc(var(--u)*.7) 0 #4a2a9a;max-width:100%}
.lw-exrow{display:flex;align-items:center;gap:calc(var(--u)*1.4);font-family:inherit;font-weight:800;font-size:calc(var(--u)*3);color:#3a2a6a;background:#f1ebff;border:calc(var(--u)*.35) solid #cdbdf5;border-radius:calc(var(--u)*2.2);padding:calc(var(--u)*.5) calc(var(--u)*1.6);cursor:pointer;text-align:start}
.lw-exrow b{flex:none;width:calc(var(--u)*4.6);height:calc(var(--u)*4.6);border-radius:50%;background:#7a3fd0;color:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*2.8)}
.lw-extext{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.3);line-height:1.25;min-width:0}.lw-exmain mark{background:#ffe066;color:#3a2a6a;border-radius:calc(var(--u)*.6);padding:0 calc(var(--u)*.5)}.lw-exar{font-size:calc(var(--u)*2.7);color:#6a5a9a;font-weight:700}.lw-exar mark{background:#ffe9a0;color:#6a4a0a;border-radius:calc(var(--u)*.5);padding:0 calc(var(--u)*.4)}.lw-exrow i{font-style:normal;font-size:calc(var(--u)*3.6)}
.lw-exline{display:flex;align-items:stretch;gap:calc(var(--u)*1.2)}
@media (min-aspect-ratio:115/100){.lw-expanel{left:auto;right:calc(var(--u)*1);top:calc(var(--u)*19);bottom:auto;width:min(38%,calc(var(--u)*78));max-height:calc(100% - var(--u)*26)}}.lw-exline .lw-exrow{flex:1;min-width:0}
.lw-exbox{flex:none;width:calc(var(--u)*11);min-height:calc(var(--u)*11);border-radius:calc(var(--u)*2.4);border:calc(var(--u)*.5) solid #cdbdf5;background:linear-gradient(180deg,#fff,#efe6ff);display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 calc(var(--u)*.4) 0 #cdbdf5}.lw-exbox i{font-style:normal;font-size:calc(var(--u)*5.2)}.lw-exbox img{width:100%;height:100%;object-fit:cover;display:block}
.lw-exrow.on{background:#fff0b8;border-color:#f5b21a}
.lw-lhit{position:absolute;left:18%;right:18%;top:14%;bottom:30%;background:transparent;border:none;cursor:pointer;pointer-events:auto;z-index:2}
.lw-lbar{position:absolute;left:0;right:0;bottom:calc(var(--u)*2.5);display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*2.5);pointer-events:auto;z-index:3}.lw-lbar.ltr{direction:ltr}
.lw-lsign{display:flex;align-items:center;gap:calc(var(--u)*2.5);background:#fff;border:calc(var(--u)*.7) solid #6a3ad0;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*3);box-shadow:0 calc(var(--u)*.8) 0 #4a2a9a;max-width:60vw}.lw-lsign b{font-size:calc(var(--u)*6);color:#3a2a6a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lw-lnav{font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;border:calc(var(--u)*.7) solid #fff;color:#fff;background:linear-gradient(180deg,#9a6af0,#6a3ad0);box-shadow:0 calc(var(--u)*.8) 0 #4a2a9a;cursor:pointer}.lw-lnav.go{background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.8) 0 #1a6a3a;width:calc(var(--u)*17);height:calc(var(--u)*17);font-size:calc(var(--u)*8)}.lw-lnav[disabled]{opacity:.35}
.lw-lcard{max-height:92%;overflow:auto;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.5)}.lw-lpicklist{display:flex;flex-wrap:wrap;gap:calc(var(--u)*1.2);justify-content:center;max-height:52vh;overflow:auto}.lw-lpickitem{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);background:#eaf4ff;border:calc(var(--u)*.4) solid #7ab8ff;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2.4);cursor:pointer}.lw-lpickitem.on{background:#ffd23a;border-color:#e0a010}
.lw-lcard .lw-title{font-size:calc(var(--u)*5.4)}.lw-lcard .lk-btn{min-height:calc(var(--u)*8);font-size:calc(var(--u)*4);padding:calc(var(--u)*.6) calc(var(--u)*4)}.lw-lnum{font-weight:900;font-size:calc(var(--u)*7);color:#3a2a6a;background:#fff;border:calc(var(--u)*.6) solid #7ab8ff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*4);min-width:calc(var(--u)*40);text-align:center;direction:ltr}.lw-lkeys{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.5)}.lw-lpad{display:grid;grid-template-columns:repeat(3,calc(var(--u)*13));gap:calc(var(--u)*.8);direction:ltr}.lw-lkey{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);height:calc(var(--u)*8);border-radius:calc(var(--u)*2.4);border:calc(var(--u)*.5) solid #7ab8ff;background:#eaf4ff;color:#3a2a6a;cursor:pointer}.lw-lkey.ok{background:linear-gradient(180deg,#6ae08a,#2fa85a);color:#fff;border-color:#fff}
/* the look of the level lists and the sections (owner 2026-11-26): cosy panel, ribbon title, sticker tiles with a colour each */
.lw-card{background:linear-gradient(180deg,#fffdf2,#ffefc4) !important;border:calc(var(--u)*1) solid #f4b02a !important;box-shadow:0 calc(var(--u)*1.4) 0 #c98a1a,0 calc(var(--u)*3) calc(var(--u)*7) rgba(30,20,70,.42),inset 0 0 0 calc(var(--u)*.6) #fff7d8 !important;padding-top:calc(var(--u)*3) !important}
.lw-title{background:linear-gradient(180deg,#9a6af0,#5f33cc);padding:calc(var(--u)*.9) calc(var(--u)*8);border-radius:999px;border:calc(var(--u)*.7) solid #fff;box-shadow:0 calc(var(--u)*.8) 0 #3e1f94,0 calc(var(--u)*1.4) calc(var(--u)*3) rgba(0,0,0,.3);font-size:calc(var(--u)*5.6) !important;-webkit-text-stroke:0 !important;text-shadow:0 calc(var(--u)*.5) 0 #3e1f94 !important;margin-top:calc(var(--u)*-1);color:#fff}
.lw-tile{--c1:#ff8a65;--c2:#f4511e;--cd:#b23a14;background:linear-gradient(180deg,var(--c1),var(--c2)) !important;border:calc(var(--u)*.7) solid #fff !important;border-radius:calc(var(--u)*3.4) !important;box-shadow:0 calc(var(--u)*.9) 0 var(--cd),0 calc(var(--u)*1.4) calc(var(--u)*2.4) rgba(20,30,70,.3) !important;transition:transform .12s}
.lw-tile:nth-child(8n+2){--c1:#ffd54f;--c2:#f59e0b;--cd:#b87a07}.lw-tile:nth-child(8n+3){--c1:#aed86a;--c2:#43a047;--cd:#2b7a30}.lw-tile:nth-child(8n+4){--c1:#5fd8e8;--c2:#0a9be0;--cd:#0a6fa8}
.lw-tile:nth-child(8n+5){--c1:#8f9bff;--c2:#5666d8;--cd:#35449a}.lw-tile:nth-child(8n+6){--c1:#cf7fe0;--c2:#9a2bb8;--cd:#661a7e}.lw-tile:nth-child(8n+7){--c1:#ff7fae;--c2:#e0246a;--cd:#a01248}.lw-tile:nth-child(8n+8){--c1:#46d6c4;--c2:#0c9686;--cd:#0a5f55}
.lw-tile:hover{transform:translateY(calc(var(--u)*-.5)) scale(1.03)}
.lw-tile i:not(.lw-ic){background:rgba(255,255,255,.93);border-radius:50%;width:calc(var(--u)*9.4);height:calc(var(--u)*9.4);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5.6) !important;box-shadow:inset 0 calc(var(--u)*-.5) 0 rgba(0,0,0,.08),0 calc(var(--u)*.3) calc(var(--u)*.8) rgba(0,0,0,.2)}
.lw-tile span{overflow-wrap:break-word;hyphens:auto;max-width:100%;color:#fff;font-weight:900;-webkit-text-stroke:calc(var(--u)*.45) rgba(0,0,0,.38);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.35) 0 rgba(0,0,0,.28);letter-spacing:.01em}
.lw-tile b{background:#fff !important;color:var(--cd) !important;width:calc(var(--u)*5.2);height:calc(var(--u)*5.2);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*3.1) !important;box-shadow:0 calc(var(--u)*.3) calc(var(--u)*.6) rgba(0,0,0,.25);top:calc(var(--u)*.7) !important;left:calc(var(--u)*.9) !important}
.lw-tile u{top:calc(var(--u)*.5);bottom:auto !important;right:calc(var(--u)*.7) !important;font-size:calc(var(--u)*4.6) !important;filter:drop-shadow(0 calc(var(--u)*.3) calc(var(--u)*.4) rgba(0,0,0,.4))}
.lw-tile.done{box-shadow:0 calc(var(--u)*.9) 0 var(--cd),0 0 0 calc(var(--u)*.7) #ffd23a,0 calc(var(--u)*1.4) calc(var(--u)*2.4) rgba(20,30,70,.3) !important}
.lw-tile.lock{--c1:#d8d8e4;--c2:#a8a8b8;--cd:#7a7a8a}
.lw-lsec small{background:rgba(255,255,255,.85);color:var(--cd);border-radius:999px;padding:0 calc(var(--u)*1.2);font-weight:900;opacity:1 !important}
.lw-resume{width:min(92%,calc(var(--u)*60)) !important;max-width:none !important}.lw-resume .lw-title{font-size:calc(var(--u)*4.6) !important;white-space:nowrap;padding-inline:calc(var(--u)*5)}.lw-ask{font-size:calc(var(--u)*3.8);font-weight:900;color:#4a2a9a;text-align:center;line-height:1.35;margin-top:calc(var(--u)*1)}
.lw-choice{font-size:calc(var(--u)*3.6) !important;padding:calc(var(--u)*1.8) calc(var(--u)*3) !important;border:calc(var(--u)*.5) solid #fff !important;box-shadow:0 calc(var(--u)*.8) 0 #1a7a3a,0 calc(var(--u)*1.2) calc(var(--u)*2) rgba(0,0,0,.25) !important}.lw-choice.alt{box-shadow:0 calc(var(--u)*.8) 0 #1a6ab8,0 calc(var(--u)*1.2) calc(var(--u)*2) rgba(0,0,0,.25) !important}
.lw-bi{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.2);width:100%}.lw-bi em{font-style:normal;font-size:calc(var(--u)*3.3);line-height:1.1;font-weight:900;direction:rtl}.lw-bi small{font-size:calc(var(--u)*1.9);font-weight:800;opacity:.95;line-height:1.05;-webkit-text-stroke:0;text-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.3)}
.lw-arsub{font-weight:900;color:#5a3a9a;font-size:calc(var(--u)*3.6);margin-top:calc(var(--u)*-.6);direction:rtl}
.lw-en .lw-tile span.lw-bi{font-size:0}.lw-en .lw-lsec span.lw-bi{font-size:0}
/* tiles that fit the screen without scrolling (owner 2026-11-26): everything in a tile is in proportion to its height */
.lw-grid.lw-fit{max-height:none !important;overflow:visible !important;justify-content:center;grid-auto-rows:var(--th)}
.lw-fit .lw-tile{width:var(--tw) !important;height:var(--th) !important;min-width:0 !important;min-height:0 !important;padding:calc(var(--th)*.04) calc(var(--tw)*.03) !important;gap:calc(var(--th)*.02);border-radius:calc(var(--th)*.16) !important}
.lw-fit .lw-tile i:not(.lw-ic){width:calc(var(--th)*.4);height:calc(var(--th)*.4);font-size:calc(var(--th)*.24) !important}
.lw-fit .lw-tile i.lw-ic{width:calc(var(--th)*.42) !important;height:calc(var(--th)*.42) !important}
.lw-fit .lw-tile span{font-size:calc(var(--th)*.15) !important}
.lw-fit .lw-bi em{font-size:calc(var(--th)*.16) !important}.lw-fit .lw-bi small{font-size:calc(var(--th)*.095) !important}
.lw-fit .lw-tile b{width:calc(var(--th)*.2) !important;height:calc(var(--th)*.2) !important;font-size:calc(var(--th)*.12) !important}
.lw-fit .lw-tile u{font-size:calc(var(--th)*.2) !important}
.lw-fit .lw-lsec small{font-size:calc(var(--th)*.1) !important;padding:0 calc(var(--th)*.06)}
.lw-card:has(.lw-fit){overflow:hidden !important}
.lw-card.ltr{direction:ltr}
.lw-en .lw-lgrid{grid-template-columns:repeat(7,minmax(0,1fr)) !important}.lw-en .lw-lsec span{font-size:calc(var(--u)*1.95)}.lw-en .lw-grid:not(.lw-lgrid) .lw-tile{height:calc(var(--u)*18);min-height:84px}
.lw-en{direction:ltr}.lw-en .lw-grid{grid-template-columns:repeat(8,minmax(0,1fr))}.lw-en .lw-tile{min-width:0;padding-inline:0}.lw-en .lw-tile span{font-size:calc(var(--u)*2.7)}
@media (max-aspect-ratio:1/1){.lw-en .lw-grid{grid-template-columns:repeat(3,1fr)}}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lw-style')) document.head.append(h('style', { id: 'lw-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnLetters = api;
export default api;
