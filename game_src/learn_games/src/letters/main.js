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
import { makeActor, setArtBase } from '../kit/actors.js';
import { stepSeconds } from '../kit/clips.js';
// where the two worlds meet while they slide past each other (just outside the right edge of the screen at the start)
const SEAM_X = 14.5;
import { shapeGeo } from '../kit/shapes3d.js';
import { colorById } from '../shapes/sim.js';
import { NUMBERS } from '../kit/words.js';
import { LEVELS, LevelPlay, levelsFor, cheer } from './levels.js';

const TEXT = {
  title: ['عالم رحلتي التعليمي', 'Rehlaty Learning World'],
  pick: ['اختار المستوى', 'Choose a level'],
  no: ['مش هنا... اسمع تاني', 'Not here... listen again'],
  again: ['اسمع تاني', 'Hear again'],
  nextLevel: ['المستوى التالي ▶', 'Next level ▶'],
  levelsBtn: ['المستويات', 'Levels'],
  chooseHero: ['اختار شخصيتك!', 'Choose your hero!'],
  letsGo: ['يلا نبدأ المغامرة!', "Let's start the adventure!"],
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
const STAND = new THREE.Vector3(-1.5, 0, 5.4); // the picture of the question stands in FRONT of the choices (nearer the child), not among them
const RACK = new THREE.Vector3(5.2, 0, 3.0);
const RACK_S = 0.6;

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_WORLD });
    const sh = this.sh;
    setArtBase(`${sh.base}../art/`);
    this.girl = sh.T.girl;
    this.st = new Stage(sh, { bg: 0xcfeeff, ground: 0x9ad0a0, fov: 40, box: [7.2, 3.9], dir: [0, 0.5, 1], target: [0, 1.0, 0.8] });
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
    this.owl.position.set(-5.6, 0.16, 3.4);
    this.owl.scale.setScalar(0.66);
    this.owl.rotation.y = 0.25;
    this.st.add(this.owl);
    this.stand = this._makeStand();
    this._makeRack();
    this.save = sh.save;
    if (!this.save.lw) this.save.lw = { unlocked: 1, done: {} };
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
    };
    if (instant) { swap(); return; }
    this.fade.classList.add('on');
    if (this.hero) this.hero.act('run');
    setTimeout(() => { swap(); this.fade.classList.remove('on'); this.sh.say(WORLD_NAMES[id], false, 2.2); }, 520);
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
    const board = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.25, 1.0), M(0xd8964a));
    board.position.y = 0.75;
    board.castShadow = true;
    const back = new THREE.Mesh(new THREE.BoxGeometry(4.6, 1.3, 0.12), M(0xb8763a));
    back.position.set(0, 1.35, -0.45);
    g.add(board, back);
    for (const x of [-2.1, 2.1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.75, 0.8), M(0xa86a3a)); leg.position.set(x, 0.37, 0); g.add(leg); }
    this.slots = Array.from({ length: 5 }, (_, i) => {
      const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.05, 20), M(0xfff4d8));
      dish.position.set(-1.75 + i * 0.88, 0.9, 0.1);
      g.add(dish);
      return new THREE.Vector3(RACK.x + (-1.75 + i * 0.88) * RACK_S, 0.9 * RACK_S + 0.35, RACK.z + 0.1);
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
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.22, 12, 28), M(col, { roughness: 0.4 }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.05;
    const raft = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.08, 28), M(this.padStyle.disc));
    raft.position.y = 0.04;
    g.add(ring, raft);
    let item = null, plaque = null, baseY = 0.06;
    if (o.kind === 'thing') {
      item = makeThing(o.thing);
      const fi = fitThing(item, 1.9, 1.55);
      baseY = 0.12 - fi.minY;
      item.position.set(-0.1, baseY, 0);
      g.add(item);
      if (o.plaque) {
        // the letter sign stands to the right and above, never in front of the picture
        const top = Math.max(2.0, baseY + fi.h + 0.55);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, top, 8), M(0xb88848));
        pole.position.set(-0.1, top / 2, -0.25); // behind the picture, centred above it (like the owner's design)
        plaque = this._plaque(o.plaque);
        plaque.position.set(-0.1, top + 0.1, 0.1);
        g.add(pole, plaque);
      }
    } else if (o.kind === 'color') {
      item = new THREE.Mesh(new THREE.SphereGeometry(0.62, 28, 20), new THREE.MeshStandardMaterial({ color: o.hex, roughness: 0.18, metalness: 0.05 }));
      item.position.set(0, 0.95, 0);
      item.castShadow = true;
      g.add(item);
    } else if (o.kind === 'shape') {
      item = new THREE.Mesh(shapeGeo(o.shape), new THREE.MeshStandardMaterial({ color: colorById(o.color).hex, roughness: 0.25, metalness: 0.05 }));
      item.position.set(0, 1.05, 0);
      item.scale.setScalar(0.95);
      item.castShadow = true;
      g.add(item);
    } else {
      const text = o.kind === 'number' ? this.sh.T.num(o.n) : o.ch;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 8), M(0xb88848));
      pole.position.set(0, 0.45, 0);
      plaque = this._plaque(text, true);
      plaque.position.set(0, 1.5, 0);
      plaque.scale.setScalar(1.45);
      g.add(pole, plaque);
      item = plaque;
    }
    const glow = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.06, 28), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0, depthWrite: false }));
    glow.position.y = 0.02;
    const hit = new THREE.Mesh(new THREE.SphereGeometry(1.35, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
    hit.userData.id = o.id;
    hit.position.set(0.2, 0.9, 0);
    g.add(glow, hit);
    const home = new THREE.Vector3(((i + 0.5) / n - 0.5) * 8.7 + 0.35, 0.1, i % 2 ? -0.2 : -1.3); // two rows, kept behind the question picture
    g.position.copy(HAND);
    g.scale.setScalar(0.01);
    this.st.add(g);
    return { g, o, home, item, plaque, baseY, ring, glow, hit, ph: i * 1.7, wig: 0, gone: false, arrive: -0.35 - i * 0.28, from: HAND.clone() };
  }

  _showStand(show) {
    if (this.standItem) { this.st.scene.remove(this.standItem); this.standItem = null; }
    this.stand.visible = false;
    if (!show) return;
    this.stand.visible = true;
    const g = new THREE.Group();
    if (show.type === 'thing') {
      const t = makeThing(show.thing);
      const fi = fitThing(t, 1.9, 1.7);
      t.position.y = 0.76 - fi.minY;
      g.add(t);
      if (!t.userData.art) g.userData.spin = t; // a flat picture must not turn edge-on
    } else if (show.type === 'apples') {
      const n = show.n;
      const cols = n > 10 ? 5 : n > 6 ? 4 : 3;
      const rows = Math.ceil(n / cols);
      const apples = [];
      for (let k = 0; k < n; k++) {
        const a = makeThing('apple');
        a.scale.setScalar(n > 10 ? 0.5 : 0.62);
        const r = Math.floor(k / cols), c = k % cols;
        a.position.set((c - (cols - 1) / 2) * 0.42 + (r % 2) * 0.1, 0.76, (r - (rows - 1) / 2) * 0.4);
        g.add(a);
        apples.push(a);
      }
      g.userData.apples = apples;
    } else if (show.type === 'letter') {
      const p = this._plaque(show.ch, true);
      p.position.set(0, 1.7, 0);
      p.scale.setScalar(1.5);
      g.add(p);
    }
    g.position.copy(STAND);
    this.st.add(g);
    this.standItem = g;
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
    k.position.set(-3.7, 0.16, 3.4);
    k.scale.setScalar(0.9);
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
  _startPage() {
    const want = this.sh.cfg && this.sh.cfg.level;
    if (this.sh.cfg) this.sh.cfg.level = null; // only the first time: back to the list afterwards
    if (want && levelsFor(this.sh.age).some((l) => l.id === want)) this._begin(want);
    else this._levels();
  }

  _levels() {
    const sh = this.sh;
    this._clearRound();
    sh.clear();
    this.st.mode = 'menu';
    sh.sound.setSuspense(false);
    sh.sound.setMode('menu');
    sh.sound.energy = 0;
    sh.layer.append(h('div', { class: 'lk-top' }, sh.backBtn(), h('span'), sh.soundBtn()));
    const unlocked = Infinity; // every level is open: the child chooses any of them
    const list = levelsFor(sh.age);
    const tiles = list.map((lv, i) => {
      const locked = i + 1 > unlocked;
      const done = !!this.save.lw.done[lv.id];
      return h('button', {
        class: `lw-tile${locked ? ' lock' : ''}${done ? ' done' : ''}`, 'aria-label': lv.ar, disabled: locked || null,
        onclick: () => { sh.sound.play('tap'); this._begin(lv.id); },
      }, h('i', {}, locked ? '🔒' : lv.emoji), h('b', {}, sh.T.num(i + 1)), h('span', {}, lv.ar), done ? h('u', {}, '⭐') : null);
    });
    const oldCard = h('div', { class: 'lk-dim', style: 'background:rgba(40,30,90,.18)' }, h('div', { class: 'lw-card' }, h('div', { class: 'lw-title' }, sh.t('pick')), h('div', { class: 'lw-grid' }, tiles)));
    // the owner's picture of the levels page (2026-11-13): shown when its file is there, otherwise the card above
    const topBar = sh.layer.querySelector('.lk-top');
    const img = new Image();
    img.className = 'lw-pic-img';
    img.alt = '';
    img.onload = () => { if (this.st.mode === 'menu') { if (topBar) topBar.remove(); sh.layer.append(this._levelsPicture(img, list)); } };
    img.onerror = () => { if (this.st.mode === 'menu') sh.layer.append(oldCard); };
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

  /** The levels page as the owner's picture, with invisible buttons on the twelve tiles, home, sound and "next level". */
  _levelsPicture(img, list) {
    const sh = this.sh;
    const { wrap, place } = this._pictureFrame(img, 1226 / 1283); // the picture's width / height
    const cols = [0.723, 0.532, 0.343]; // right to left, like the picture
    const rows = [0.327, 0.489, 0.647, 0.807];
    const open = new Set(list.map((l) => l.id));
    LEVELS.forEach((lv, i) => {
      const cx = cols[i % 3], cy = rows[Math.floor(i / 3)];
      const can = open.has(lv.id);
      const b = h('button', { class: 'lw-hit', 'aria-label': lv.ar, disabled: !can || null, onclick: () => { sh.sound.play('tap'); this._begin(lv.id); } });
      place(b, cx, cy, 0.17, 0.148);
      if (!can) b.classList.add('off');
      if (this.save.lw.done[lv.id]) place(h('i', { class: 'lw-star' }, '⭐'), cx + 0.066, cy - 0.07, 0.05, 0.045);
    });
    // "next level": the first level not done yet (the first one when all are done)
    const next = list.find((l) => !this.save.lw.done[l.id]) || list[0];
    place(h('button', { class: 'lw-hit', 'aria-label': 'next', onclick: () => { sh.sound.play('tap'); this._begin(next.id); } }), 0.114, 0.46, 0.22, 0.12);
    // home and sound: the shell's own buttons, invisible, on the picture's round buttons
    const back = sh.backBtn();
    back.classList.add('lw-hit');
    place(back, 0.069, 0.058, 0.1, 0.095);
    const snd = sh.soundBtn();
    snd.classList.add('lw-hit');
    place(snd, 0.94, 0.058, 0.1, 0.095);
    return wrap;
  }

  _clearRound() {
    for (const o of this.opts.values()) this.st.scene.remove(o.g);
    this.opts.clear();
    this.leap = null;
    for (const it of this.rackItems) this.st.scene.remove(it);
    this.rackItems = [];
    this._showStand(null);
    this.st.setPicks([], null);
  }

  _begin(levelId) {
    const sh = this.sh;
    this._clearRound();
    this.levelId = levelId;
    this.level = LEVELS.find((l) => l.id === levelId);
    this._goWorld(Math.max(0, levelsFor(sh.age).findIndex((l) => l.id === levelId)));
    this.play = new LevelPlay(levelId, sh.age, Math.floor(Math.random() * 1e9));
    sh.clear();
    this.lightDots = sh.topBar(5, '⭐');
    this.lightDots(0);
    this.sign = h('div', { class: 'lw-sign' });
    this.signText = h('span');
    this.signIcon = h('i', {}, this._barIcon());
    this.sign.append(this.signIcon, this.signText, h('button', { class: 'lw-again', 'aria-label': sh.t('again'), onclick: (e) => { e.stopPropagation(); this._say(); } }, '🔊'));
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
    return ['pick', 'shape', 'animal', 'habit', 'word'].includes(m) ? '👀' : this.level.emoji;
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
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this.st.mode = 'wait';
    this.sh.sound.setSuspense(true);
    this.owl.look(0);
    this._say();
  }

  _say() {
    const r = this.play.cur;
    if (!r) return;
    this.sh.sound.play('sparkle');
    this.owl.act('point');
    if (this.hero) { this.hero.look(0); this.hero.act('point'); }
    this.sh.speak(r.prompt);
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
      this.sh.say(this.sh.t('no'), false, 1.6);
      if (ev.firstMiss) this.sh.round(this.level.skill, false, r.answer);
      setTimeout(() => this.st.mode === 'wait' && this._say(), 900);
      return;
    }
    if (ev.first) this.sh.round(this.level.skill, true, r.answer);
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
    this.leap = { o, t: 0, from: o.g.position.clone(), slot: this.slots[done - 1] };
    const phrase = cheer(this.girl, this.cheerN++);
    const seq = [phrase];
    if (r.reward) seq.push(r.reward);
    this.signText.textContent = r.reward || phrase;
    this.signIcon.textContent = '⭐';
    this.sh.say(phrase, false, 1.6);
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
      } else this.sh.speak(seq, null, next);
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
    const list = levelsFor(sh.age);
    const idx = list.findIndex((l) => l.id === this.levelId);
    this.save.lw.done[this.levelId] = true;
    this.save.lw.unlocked = Math.max(this.save.lw.unlocked || 1, idx + 2);
    sh.saveNow();
    this.owl.act('cheer');
    if (this.hero) this.hero.act('celebrate');
    this.st.sparkle(new THREE.Vector3(RACK.x, 2.2, RACK.z), 40);
    const hasNext = idx + 1 < list.length;
    if (!hasNext) {
      // the very last level: the end card (the star the first time), then back to the levels
      sh.sound.setMode('calm');
      sh.finishCard(this.level.ar, this.level.emoji, () => this._begin(this.levelId), null, () => this._levels());
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
    setTimeout(() => this._walkOn(nextId, idx + 1), 3000);
  }

  /** Between levels: the hero WALKS (in place, footsteps) while the world scrolls past and the next place slides in from
   *  the right and its sky fades in (no flash, no jump), then the next level begins. */
  _walkOn(nextId, worldIndex) {
    const sh = this.sh;
    this._clearRound();
    const hero = this.hero;
    const id = WORLD_IDS[worldIndex % WORLD_IDS.length];
    if (this.worldId === id || !hero) { this._goWorld(worldIndex, true); this._begin(nextId); return; }
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
      hero.act('wave');
      setTimeout(() => this._begin(nextId), 1400);
    } };
  }

  // ---- animation ---------------------------------------------------------------------------------------------------

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
      f.g.position.set(f.home.x + Math.cos(a) * 0.55, 0.1 + Math.sin(time * 2 + f.ph) * 0.04, f.home.z + Math.sin(a * 1.3) * 0.4);
      f.g.rotation.y = Math.sin(time * 0.8 + f.ph) * 0.35;
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
      L.t += dt / 1.1;
      const k = Math.min(1, L.t);
      const e = k * k * (3 - 2 * k);
      L.o.g.position.lerpVectors(L.from, new THREE.Vector3(L.slot.x, L.slot.y - 0.2, L.slot.z), e);
      L.o.g.position.y += Math.sin(k * Math.PI) * 2.4;
      L.o.g.scale.setScalar(Math.max(0.01, 1 - 0.58 * e));
      L.o.g.rotation.y = e * Math.PI * 2;
      if (k >= 1) {
        // keep only the picture on the rack: the raft stays behind and sinks away
        const keep = L.o.item;
        const wp = new THREE.Vector3();
        const ws = new THREE.Vector3();
        keep.getWorldPosition(wp);
        keep.getWorldScale(ws);
        L.o.g.remove(keep);
        keep.position.copy(wp);
        keep.scale.copy(ws).multiplyScalar(0.8);
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
.lw-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
.lw-card{background:#fffaf0;border:calc(var(--u)*.8) solid #ffd45a;border-radius:calc(var(--u)*6);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:96%;max-height:92%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(30,20,70,.4);pointer-events:auto}
.lw-title{font-size:calc(var(--u)*7.5);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #6a3ad0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #4a2a9a}
.lw-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:calc(var(--u)*1.6)}
.lw-tile{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.4);width:calc(var(--u)*17);min-width:92px;height:calc(var(--u)*19);min-height:96px;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3.4);background:linear-gradient(180deg,#8ad8ff,#3aa0f0);color:#fff;font-family:inherit;font-weight:900;cursor:pointer;padding:calc(var(--u)*.8);box-shadow:0 calc(var(--u)*.8) 0 #1a6ab8,0 calc(var(--u)*1) calc(var(--u)*2) rgba(20,40,80,.3)}
.lw-tile:active{transform:translateY(calc(var(--u)*.5))}
.lw-tile i{font-style:normal;font-size:calc(var(--u)*6.5);line-height:1}
.lw-tile b{position:absolute;top:calc(var(--u)*.6);left:calc(var(--u)*1);font-size:calc(var(--u)*3);background:#ffd23a;color:#5a3a00;border-radius:999px;min-width:calc(var(--u)*4.6);text-align:center}
.lw-tile span{font-size:calc(var(--u)*3.3);line-height:1.15;text-align:center}
.lw-tile u{position:absolute;bottom:calc(var(--u)*.4);right:calc(var(--u)*.8);text-decoration:none;font-size:calc(var(--u)*3.6)}
.lw-tile.done{background:linear-gradient(180deg,#8aeaa0,#2fb85a);box-shadow:0 calc(var(--u)*.8) 0 #1a7a3a,0 calc(var(--u)*1) calc(var(--u)*2) rgba(20,40,80,.3)}
.lw-pic{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#6cc0f0}
.lw-pic-blur{position:absolute;inset:-5%;width:110%;height:110%;object-fit:cover;filter:blur(18px) brightness(.9);transform:scale(1.05)}
.lw-pic-box{position:relative}
.lw-pic-img{display:block;width:100%;height:100%;user-select:none;-webkit-user-drag:none}
.lw-hit{position:absolute;border:none;background:transparent;padding:0;margin:0;cursor:pointer;opacity:0;border-radius:18%}
.lw-hit:focus-visible{opacity:1;outline:calc(var(--u)*.8) solid #fff200;background:rgba(255,242,0,.18)}
.lw-hit.off{pointer-events:none}
.lw-star{position:absolute;font-style:normal;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);pointer-events:none;filter:drop-shadow(0 2px 2px rgba(0,0,0,.35))}
.lw-tile.lock{background:linear-gradient(180deg,#d8d8e4,#a8a8b8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a8a;cursor:default;opacity:.85}
.lw-herobar{position:absolute;left:50%;bottom:calc(var(--u)*3);transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.6);pointer-events:none;width:94%}
.lw-hero{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.4);pointer-events:auto}
.lw-who{display:flex;gap:calc(var(--u)*3)}
.lw-who button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;border:calc(var(--u)*.7) solid #fff;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*5);cursor:pointer;min-height:max(52px,calc(var(--u)*12));box-shadow:0 calc(var(--u)*.8) 0 rgba(0,0,0,.25)}
.lw-boy{background:linear-gradient(180deg,#ffd84a,#f5a01a)}
.lw-girl{background:linear-gradient(180deg,#ff8ac8,#e8409a)}
.lw-row{display:flex;gap:calc(var(--u)*1.6)}
.lw-sw{width:max(40px,calc(var(--u)*8));height:max(40px,calc(var(--u)*8));border-radius:50%;border:calc(var(--u)*.6) solid #fff;cursor:pointer;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(0,0,0,.3)}
.lw-fade{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none;transition:opacity .5s;z-index:20}
.lw-fade.on{opacity:1}
.lw-tile:focus-visible{outline:calc(var(--u)*.8) solid #6a3ad0;outline-offset:calc(var(--u)*.6)}
@media (max-aspect-ratio:1/1){.lw-grid{grid-template-columns:repeat(3,1fr)}}
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
