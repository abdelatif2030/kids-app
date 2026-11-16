// «أطعم الحيوان» — Feed the Animal (rebuilt learning game). A sunny meadow with a fence and a tree: a hungry animal sits on
// the grass with a thinking bubble, and a picnic table in front holds three or four plates of food. The app says "the
// rabbit is hungry! what will he eat?" and the child taps the right plate: the food hops to the animal, who munches and
// floats hearts, then the app says what it likes ("the rabbit likes carrots"). A wrong plate only makes the animal shake
// its head kindly; after two the right plate glows. Five rounds; skill 'nature'; the learning star the first time.
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { Stage, M, canvasTex } from '../kit/stage3d.js';
import { makeThing } from '../kit/things3d.js';
import { addSky, addClouds, scatter } from '../kit/realism.js';
import { AnimalsPlay, question, reward } from './sim.js';

const TEXT = {
  title: ['أطعم الحيوان', 'Feed the Animal'],
  no: ['مش ده... جرّب حاجة تانية', 'Not that... try something else'],
  yes_m: ['أحسنت!', 'Well done!'],
  yes_f: ['أحسنتي!', 'Well done!'],
  again: ['اسمع تاني', 'Hear again'],
};

const THEME_FARM = {
  ...THEME_GARDEN,
  tempo: 104,
  lead: 'marimba',
  chords: [[43, [67, 71, 74]], [48, [67, 72, 76]], [50, [66, 69, 74]], [43, [67, 71, 74]], [45, [64, 69, 72]], [48, [67, 72, 76]], [50, [66, 69, 74]], [43, [67, 71, 79]]],
  melody: [[0, 0, 79], [0, 4, 83], [1, 0, 84], [1, 4, 79], [2, 0, 81], [2, 4, 78], [3, 0, 79], [3, 4, 74], [4, 0, 76], [4, 4, 81], [5, 0, 84], [5, 4, 88], [6, 0, 86], [6, 4, 81], [7, 0, 79]],
};
const SCALE = { bunny: 2.5, cat: 2.2, dog: 2.2, monkey: 2.3, cow: 1.9, bear: 2.1, mouse: 2.7, chick: 2.6 };
const FOOD_SCALE = { carrot: 1.2, fish: 1.3, bone: 1.2, banana: 1.2, grass: 1.1, honey: 1.2, cheese: 1.2, seeds: 1.3 };
const SPOT = new THREE.Vector3(0, 0, -1.2);
const MOUTH = new THREE.Vector3(0, 1.9, -0.2);

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_FARM });
    const sh = this.sh;
    this.st = new Stage(sh, { bg: 0xbfe8ff, ground: 0x8ad070, fov: 40, box: [6.6, 4.1], dir: [0, 0.5, 1], target: [0, 1.5, 0.3] });
    this._meadow();
    this.plates = [];
    this.animal = null;
    this.hearts = [];
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🐰🥕🐱🐟', () => this._start()));
    this.st.onFrame((dt, time) => this._frame(dt, time));
  }

  _meadow() {
    const s = this.st.scene;
    addSky(s);
    this.clouds = addClouds(s, 7, { y: 10, z: -20 });
    this.st.onFrame((dt) => this.clouds.userData.drift(dt));
    scatter(s, [
      { t: 'tree', x: 7.6, z: -3.4, s: 4.4 }, { t: 'tree', x: -10.5, z: -6, s: 5.4 }, { t: 'tree', x: 11, z: -7, s: 5 }, { t: 'bush', x: -4.2, z: -3.3, s: 0.8 }, { t: 'bush', x: 3.8, z: -3.2, s: 0.9 },
      { t: 'rock', x: 5.6, z: -1.4, s: 0.5 }, { t: 'rock', x: -4.9, z: -0.9, s: 0.4 },
      ...Array.from({ length: 30 }, (_, i) => ({ t: 'flower', x: -12 + i * 0.85 + Math.sin(i * 1.7) * 0.5, z: -2.8 + ((i * 7) % 5) * 0.55 + Math.cos(i) * 0.3 })),
    ], 0);
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(80, 40), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#8ad070'; g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 70; i++) { g.fillStyle = i % 2 ? '#7ac860' : '#9ae080'; g.beginPath(); g.ellipse((i * 53) % 256, (i * 97) % 256, 12, 5, 0, 0, Math.PI * 2); g.fill(); }
      for (let i = 0; i < 14; i++) { g.fillStyle = ['#ff7aa8', '#ffe05a', '#ffffff'][i % 3]; g.beginPath(); g.arc((i * 41 + 9) % 256, (i * 73 + 20) % 256, 3, 0, Math.PI * 2); g.fill(); }
    }, [8, 4]), roughness: 1 }));
    grass.rotation.x = -Math.PI / 2;
    grass.receiveShadow = true;
    s.add(grass);
    // hills and a sun
    for (const [x, z, r, c] of [[-9, -12, 7, 0x6ac860], [8, -14, 8, 0x7ad870], [0, -16, 9, 0x5ab850]]) {
      const hill = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), M(c, { roughness: 1 }));
      hill.position.set(x, -0.2, z);
      s.add(hill);
    }
    const sun = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 16), new THREE.MeshBasicMaterial({ color: 0xfff06a }));
    sun.position.set(8, 9, -14);
    s.add(sun);
    // a fence along the back
    for (let i = -8; i <= 8; i++) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.3, 0.15), M(0xfff4e0));
      post.position.set(i * 1.1, 0.65, -4);
      post.castShadow = true;
      s.add(post);
    }
    for (const y of [0.5, 1.0]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(19.5, 0.14, 0.1), M(0xfff4e0));
      rail.position.set(0, y, -4);
      s.add(rail);
    }
    // a tree
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 3, 12), M(0x8a5a2a));
    trunk.position.set(-6.2, 1.5, -2.6);
    trunk.castShadow = true;
    s.add(trunk);
    for (const [x, y, r] of [[-6.2, 3.8, 1.7], [-7.2, 3.2, 1.2], [-5.2, 3.3, 1.3]]) {
      const l = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), M(0x3aa84a));
      l.position.set(x, y, -2.6);
      l.castShadow = true;
      s.add(l);
    }
    // a little round patch the animal sits on
    const patch = new THREE.Mesh(new THREE.CircleGeometry(2.1, 28), M(0xb8e890, { roughness: 1 }));
    patch.rotation.x = -Math.PI / 2;
    patch.position.set(SPOT.x, 0.02, SPOT.z);
    s.add(patch);
    // the picnic table with a checked cloth
    const top = new THREE.Mesh(new THREE.BoxGeometry(11, 0.22, 2.4), new THREE.MeshStandardMaterial({ map: canvasTex(128, 128, (g) => {
      for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { g.fillStyle = (i + j) % 2 ? '#ffffff' : '#ff8a8a'; g.fillRect(i * 16, j * 16, 16, 16); }
    }, [6, 1.5]), roughness: 0.9 }));
    top.position.set(0, 1.0, 2.6);
    top.castShadow = true; top.receiveShadow = true;
    s.add(top);
    for (const x of [-5, 5]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.0, 2.0), M(0xa86a3a));
      leg.position.set(x, 0.5, 2.6);
      s.add(leg);
    }
  }

  _start() {
    this.play = new AnimalsPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    const sh = this.sh;
    sh.clear();
    this.lightDots = sh.topBar(5, '🥕');
    this.lightDots(0);
    this.sign = h('div', { class: 'la-sign' });
    this.signText = h('span');
    this.sign.append(h('i', {}, '🍽️'), this.signText, h('button', { class: 'la-again', 'aria-label': sh.t('again'), onclick: (e) => { e.stopPropagation(); this._say(); } }, '🔊'));
    sh.layer.append(this.sign);
    sh.sound.setMode('play');
    this._ask();
  }

  _ask() {
    const a = this.play.animal;
    if (this.animal) this.st.scene.remove(this.animal.g);
    for (const p of this.plates) this.st.scene.remove(p.g);
    this.plates = [];
    // the animal hops in
    const g = new THREE.Group();
    const thing = makeThing(a.thing);
    thing.scale.setScalar(SCALE[a.thing] || 2.2);
    g.add(thing);
    const bub = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(256, 256, (c) => {
      c.fillStyle = '#ffffff'; c.beginPath(); c.arc(128, 118, 92, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(70, 215, 18, 0, Math.PI * 2); c.fill(); c.beginPath(); c.arc(92, 188, 10, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#ff8a2a'; c.font = '900 130px Tajawal, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('؟', 128, 128);
    }), transparent: true, depthWrite: false }));
    bub.scale.setScalar(1.7);
    bub.position.set(1.7, 3.6, 0);
    g.add(bub);
    g.position.copy(SPOT);
    g.scale.setScalar(0.001);
    this.st.add(g);
    this.animal = { g, thing, bub, born: 0, chew: 0, shake: 0, happy: 0 };
    // the plates
    const foods = this.play.plates;
    const n = foods.length;
    foods.forEach((f, i) => {
      const pg = new THREE.Group();
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 0.8, 0.12, 28), M(0xffffff, { roughness: 0.3 }));
      plate.position.y = 0.06;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.07, 8, 28), M(0xffd23a));
      rim.rotation.x = Math.PI / 2; rim.position.y = 0.12;
      const food = makeThing(f);
      food.scale.setScalar(FOOD_SCALE[f] || 1.2);
      food.position.y = 0.1;
      const glow = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.05, 28), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0, depthWrite: false }));
      glow.position.y = 0.02;
      const hit = new THREE.Mesh(new THREE.SphereGeometry(1.2, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.position.y = 0.6;
      hit.userData.id = f;
      pg.add(plate, rim, food, glow, hit);
      pg.position.set(((i + 0.5) / n - 0.5) * (n <= 3 ? 7 : 8.8), 1.12, 2.6);
      pg.scale.setScalar(0.001);
      this.st.add(pg);
      this.plates.push({ g: pg, food, hit, glow, f, born: -0.3 - i * 0.1, wig: 0, base: pg.position.clone() });
    });
    this.st.setPicks(this.plates, (id) => this._tap(id));
    this.st.focus = null;
    this.signText.textContent = question(a);
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this.st.mode = 'wait';
    this.sh.sound.play('pop');
    this._say();
  }

  _say() {
    this.sh.sound.play('sparkle');
    this.sh.speak(question(this.play.animal));
  }

  _tap(food) {
    if (this.st.mode !== 'wait') return;
    const a = this.play.animal;
    const ev = this.play.tap(food);
    const plate = this.plates.find((p) => p.f === food);
    if (!ev.ok) {
      plate.wig = 0.6;
      this.animal.shake = 1.0;
      this.sh.sound.play('hmm');
      this.sh.say(this.sh.t('no'), false, 1.8);
      if (ev.firstMiss) this.sh.round('nature', false, a.id);
      setTimeout(() => this.st.mode === 'wait' && this._say(), 1100);
      return;
    }
    if (ev.first) this.sh.round('nature', true, a.id);
    this.st.mode = 'found';
    this.st.setPicks([], null);
    for (const p of this.plates) if (p !== plate) p.gone = true;
    // the food hops to the animal's mouth
    this.fly = { plate, from: plate.g.position.clone().add(new THREE.Vector3(0, 0.3, 0)), t: 0 };
    this.lightDots(this.play.round);
    this.sh.sound.play('whoosh');
    setTimeout(() => {
      this.animal.chew = 1.6;
      this.sh.sound.play('nibble');
      setTimeout(() => this.sh.sound.play('nibble'), 350);
      setTimeout(() => this.sh.sound.play('nibble'), 700);
      this._hearts();
      this.sh.sound.play('right');
      this.sh.say(this.sh.t('yes'), false, 1.4);
      this.sh.speak(reward(a));
    }, 900);
    setTimeout(() => {
      if (ev.finished) {
        this.st.mode = 'end';
        this.sign.remove();
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '🐰', () => this._start());
      } else this._ask();
    }, 4600);
  }

  _hearts() {
    for (let i = 0; i < 7; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: heartTex(), transparent: true, depthWrite: false }));
      s.scale.setScalar(0.55 + (i % 3) * 0.1);
      s.position.set(SPOT.x + (Math.random() - 0.5) * 1.6, 2.2 + Math.random() * 0.6, SPOT.z + 0.3);
      s.userData = { v: 0.9 + Math.random() * 0.8, life: 2.2, dx: (Math.random() - 0.5) * 0.5 };
      this.st.add(s);
      this.hearts.push(s);
    }
  }

  _frame(dt, time) {
    const hint = this.play && this.st.mode === 'wait' ? this.play.hint : null;
    const fid = this.st.mode === 'wait' ? this.st.focusedId() : null;
    const A = this.animal;
    if (A) {
      if (A.born < 1) { A.born += dt * 2.4; const k = Math.min(1, A.born); A.g.scale.setScalar(Math.max(0.001, 1 - Math.pow(1 - k, 3) + Math.sin(k * Math.PI) * 0.15)); A.g.position.y = Math.abs(Math.sin(k * Math.PI * 2)) * 0.5; }
      else A.g.position.y = A.chew > 0 ? Math.abs(Math.sin(time * 14)) * 0.08 : Math.sin(time * 1.8) * 0.02;
      A.chew = Math.max(0, A.chew - dt);
      A.shake = Math.max(0, A.shake - dt);
      A.thing.rotation.y = A.shake > 0 ? Math.sin(A.shake * 22) * 0.5 : Math.sin(time * 0.9) * 0.08;
      A.bub.position.y = 3.6 + Math.sin(time * 3) * 0.08;
      A.bub.visible = this.st.mode === 'wait';
    }
    for (const p of this.plates) {
      if (p.born < 1) { p.born += dt * 3; const k = Math.max(0, Math.min(1, p.born)); p.g.scale.setScalar(Math.max(0.001, k < 1 ? 1 - Math.pow(1 - k, 3) + Math.sin(k * Math.PI) * 0.12 : 1)); }
      if (p.gone) { p.g.scale.multiplyScalar(Math.max(0, 1 - dt * 3)); continue; }
      if (this.fly && this.fly.plate === p) continue;
      const on = p.f === hint || p.f === fid;
      p.glow.material.opacity = on ? 0.6 + Math.sin(time * 6) * 0.2 : 0;
      p.glow.material.color.setHex(p.f === fid ? 0x7ad0ff : 0xfff27a);
      p.food.rotation.y = Math.sin(time * 1.3 + p.base.x) * 0.3;
      p.food.position.y = 0.1 + (on ? Math.abs(Math.sin(time * 6)) * 0.12 : 0);
      if (p.wig > 0) { p.wig -= dt; p.g.rotation.z = Math.sin(p.wig * 40) * 0.2 * p.wig; } else p.g.rotation.z = 0;
    }
    if (this.fly) {
      const F = this.fly;
      F.t += dt / 0.8;
      const k = Math.min(1, F.t);
      F.plate.g.position.lerpVectors(F.from, MOUTH, k * k * (3 - 2 * k));
      F.plate.g.position.y += Math.sin(k * Math.PI) * 1.6;
      F.plate.g.scale.setScalar(Math.max(0.05, 1 - 0.6 * k));
      F.plate.g.rotation.y = k * 6;
      if (k >= 1) { this.st.scene.remove(F.plate.g); F.plate.gone = true; this.fly = null; }
    }
    for (let i = this.hearts.length - 1; i >= 0; i--) {
      const s = this.hearts[i];
      s.userData.life -= dt;
      s.position.y += s.userData.v * dt;
      s.position.x += s.userData.dx * dt;
      s.material.opacity = Math.max(0, Math.min(1, s.userData.life));
      if (s.userData.life <= 0) { this.st.scene.remove(s); this.hearts.splice(i, 1); }
    }
  }

  pause() { this.sh.pause(); }

  dispose() {
    this.st.dispose();
    this.sh.dispose();
  }
}

let _heart = null;
function heartTex() {
  if (_heart) return _heart;
  _heart = canvasTex(128, 128, (g) => {
    g.fillStyle = '#ff4a7a';
    g.beginPath();
    g.moveTo(64, 112);
    g.bezierCurveTo(0, 70, 8, 16, 46, 18);
    g.bezierCurveTo(60, 20, 64, 34, 64, 34);
    g.bezierCurveTo(64, 34, 68, 20, 82, 18);
    g.bezierCurveTo(120, 16, 128, 70, 64, 112);
    g.fill();
  });
  return _heart;
}

const CSS = `
.la-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #3aa84a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.4));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(20,60,20,.3);pointer-events:auto;max-width:94%}
.la-sign i{font-style:normal;font-size:1.4em}
.la-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.la-sign.pop{animation:la-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes la-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.la-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('la-style')) document.head.append(h('style', { id: 'la-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnAnimals = api;
export default api;
