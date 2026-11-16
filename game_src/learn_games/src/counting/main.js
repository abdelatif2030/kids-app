// «الحساب والعدّ» — Counting at the Market (rebuilt learning game). A fruit stall with a striped awning: a tray of big red
// apples on the left, a wicker basket on the right.
//  • "Get me three apples": each apple the child taps hops into the basket and the app counts it out loud
//    ("one... two... three"); at the number asked the shopkeeper cheers.
//  • Older children also get "how many apples?": apples sit in the basket, the app counts them aloud, and the child taps
//    the number card. A wrong card only wobbles and the apples are counted aloud again; after two the right card glows.
// Five rounds; skill 'counting'; the learning star the first time.
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { NUMBERS } from '../kit/words.js';
import { makeItem } from '../kit/toys3d.js';
import { Stage, M, canvasTex, labelTex } from '../kit/stage3d.js';
import { CountPlay, askText, COUNT_Q } from './sim.js';

const TEXT = {
  title: ['الحساب والعدّ', 'Counting at the Market'],
  no: ['مش كده... عدّ معايا', 'Not quite... count with me'],
  yes_m: ['أحسنت!', 'Well done!'],
  yes_f: ['أحسنتي!', 'Well done!'],
};

const THEME_MARKET = {
  ...THEME_GARDEN,
  tempo: 112,
  lead: 'marimba',
  chords: [[48, [64, 67, 72]], [53, [65, 69, 72]], [55, [67, 71, 74]], [48, [64, 67, 72]], [45, [64, 69, 72]], [53, [65, 69, 72]], [55, [67, 71, 74]], [48, [64, 67, 76]]],
  melody: [[0, 0, 76], [0, 4, 79], [1, 0, 77], [1, 4, 81], [2, 0, 79], [2, 4, 83], [3, 0, 84], [3, 4, 79], [4, 0, 81], [4, 4, 76], [5, 0, 77], [5, 4, 74], [6, 0, 79], [6, 4, 83], [7, 0, 84]],
};

const TRAY = (i) => new THREE.Vector3(-5.3 + (i % 5) * 1.0, 1.18, -0.2 + Math.floor(i / 5) * 1.0);
const BASKET = new THREE.Vector3(3.9, 0, 0.3);
const SLOT = (k, big = false) => (big
  ? new THREE.Vector3(BASKET.x - 0.95 + (k % 5) * 0.48, 0.9 + Math.floor(k / 5) * 0.5, BASKET.z - 0.4 + (k % 2) * 0.45)
  : new THREE.Vector3(BASKET.x - 0.85 + (k % 4) * 0.57, 0.9 + Math.floor(k / 4) * 0.62, BASKET.z - 0.35 + (k % 2) * 0.4));

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_MARKET });
    const sh = this.sh;
    this.st = new Stage(sh, { bg: 0xcdeeff, ground: 0xe8c898, fov: 40, box: [7.4, 3.9], dir: [0, 0.62, 1], target: [0, 1.6, 0] });
    this._market();
    this.apples = [];
    this.cards = [];
    this.flights = [];
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🍎🧺🔢', () => this._start()));
    this.st.onFrame((dt, time) => this._frame(dt, time));
  }

  _market() {
    const s = this.st.scene;
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { g.fillStyle = (i + j) % 2 ? '#f0d8a8' : '#e8caa0'; g.fillRect(i * 32, j * 32, 32, 32); }
    }, [12, 6]), roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    s.add(ground);
    // the back wall with a window and a sign board
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 12), new THREE.MeshStandardMaterial({ map: canvasTex(256, 128, (g) => {
      g.fillStyle = '#ffe9c8'; g.fillRect(0, 0, 256, 128);
      g.fillStyle = '#ffd9a0';
      for (let i = 0; i < 8; i++) g.fillRect(i * 32, 0, 16, 128);
    }, [8, 1]), roughness: 1 }));
    wall.position.set(0, 6, -3.2);
    s.add(wall);
    // the stall table
    const wood = M(0xc8864a);
    const top = new THREE.Mesh(new THREE.BoxGeometry(14, 0.22, 3.2), wood);
    top.position.set(-0.3, 1.0, 0.1);
    top.castShadow = true; top.receiveShadow = true;
    s.add(top);
    const cloth = new THREE.Mesh(new THREE.BoxGeometry(14.1, 0.04, 3.3), M(0xfff4e0));
    cloth.position.set(-0.3, 1.13, 0.1);
    s.add(cloth);
    for (const x of [-6.6, 6.0]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.0, 2.8), M(0xa86a3a));
      leg.position.set(x, 0.5, 0.1);
      s.add(leg);
    }
    const front = new THREE.Mesh(new THREE.BoxGeometry(13.4, 0.9, 0.12), M(0xa86a3a));
    front.position.set(-0.3, 0.55, 1.6);
    s.add(front);
    // the striped awning on two posts
    const awn = new THREE.Mesh(new THREE.BoxGeometry(15, 0.2, 4.6), new THREE.MeshStandardMaterial({ map: canvasTex(256, 64, (g) => {
      for (let i = 0; i < 12; i++) { g.fillStyle = i % 2 ? '#ffffff' : '#ff5a5a'; g.fillRect(i * 22, 0, 22, 64); }
    }), roughness: 0.8 }));
    awn.position.set(-0.3, 6.6, -0.4);
    awn.rotation.x = 0.22;
    awn.castShadow = true;
    s.add(awn);
    for (const x of [-7.4, 6.8]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 6.4, 10), M(0xa86a3a));
      post.position.set(x, 3.2, -1.7);
      s.add(post);
    }
    // crates and a few fruit behind, for the market feel
    for (const [x, c] of [[-6.2, 0xffb84a], [-4.7, 0x7ad86a], [5.7, 0xff7a9a]]) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 1.0), M(0xb8803a));
      crate.position.set(x, 1.5, -2.1);
      const fr = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10), M(c));
      fr.position.set(x, 2.0, -2.1);
      s.add(crate, fr);
    }
    // the wicker basket
    this.basket = new THREE.Group();
    const wick = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.1, 1.0, 28, 1, true), new THREE.MeshStandardMaterial({ map: canvasTex(128, 64, (g) => {
      g.fillStyle = '#d8a050'; g.fillRect(0, 0, 128, 64);
      g.strokeStyle = '#a8742a'; g.lineWidth = 3;
      for (let i = 0; i < 8; i++) { g.beginPath(); g.moveTo(0, i * 8 + 4); g.lineTo(128, i * 8 + 4); g.stroke(); }
      for (let i = 0; i < 12; i++) { g.beginPath(); g.moveTo(i * 11, 0); g.lineTo(i * 11, 64); g.stroke(); }
    }, [3, 1]), side: THREE.DoubleSide, roughness: 0.9 }));
    wick.position.y = 0.5;
    wick.castShadow = true;
    const bot = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.06, 28), M(0xb8803a));
    bot.position.y = 0.03;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.07, 8, 32), M(0xc8903a));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 1.0;
    const handle = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.06, 8, 24, Math.PI), M(0xc8903a));
    handle.position.y = 1.0;
    this.basket.add(wick, bot, rim, handle);
    this.basket.position.set(BASKET.x, 1.12, BASKET.z);
    s.add(this.basket);
    // the shopkeeper: a round smiling grandma behind the stall
    this.keeper = makeKeeper();
    this.keeper.position.set(0.2, 1.1, -1.9);
    s.add(this.keeper);
  }

  _clearApples() {
    for (const a of this.apples) this.st.scene.remove(a.m);
    for (const c of this.cards) this.st.scene.remove(c.g);
    this.apples = [];
    this.cards = [];
    this.flights = [];
  }

  _start() {
    this.play = new CountPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    const sh = this.sh;
    sh.clear();
    this.lightDots = sh.topBar(5, '🍎');
    this.lightDots(0);
    this.sign = h('div', { class: 'lc-sign' });
    this.signText = h('span');
    this.sign.append(h('i', {}, '🧺'), this.signText, h('button', { class: 'lc-again', 'aria-label': 'again', onclick: (e) => { e.stopPropagation(); this._say(); } }, '🔊'));
    sh.layer.append(this.sign);
    sh.sound.setMode('play');
    this._ask();
  }

  _ask() {
    this._clearApples();
    const c = this.play.cur;
    this.st.mode = 'wait';
    if (c.mode === 'give') {
      for (let i = 0; i < 10; i++) {
        const m = makeItem('apple');
        m.scale.setScalar(1.25);
        m.position.copy(TRAY(i));
        m.traverse((o) => { o.castShadow = true; });
        const hit = new THREE.Mesh(new THREE.SphereGeometry(0.62, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
        hit.position.y = 0.5;
        hit.userData.id = 'a' + i;
        m.add(hit);
        this.st.add(m);
        this.apples.push({ m, hit, in: false, bob: Math.random() * 6 });
      }
      this.signText.textContent = askText(c.n);
      this.st.setPicks(this.apples.map((a) => ({ hit: a.hit })), (id) => this._pickApple(Number(id.slice(1))));
    } else {
      // n apples already in the basket; three number cards on the table
      const big = c.n > 10;
      for (let i = 0; i < c.n; i++) {
        const m = makeItem('apple');
        m.scale.setScalar(big ? 0.95 : 1.25);
        m.userData.sc = big ? 0.95 : 1.25;
        m.position.copy(SLOT(i, big)).add(new THREE.Vector3(0, 1.12 - 0.3, 0));
        m.userData.pop = -i * 0.12;
        m.scale.setScalar(0.001);
        this.st.add(m);
        this.apples.push({ m, in: true, bob: 0, popT: -i * 0.1 });
      }
      const opts = this.play.options;
      opts.forEach((v, i) => {
        const g = new THREE.Group();
        const card = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.2, 1.7), M(0xffffff, { roughness: 0.4 }));
        card.castShadow = true;
        const face = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: labelTex(this.sh.T.num(v), { size: 200, color: ['#e8302a', '#2a8ae8', '#2aa84a'][i % 3] }), transparent: true }));
        face.rotation.x = -Math.PI / 2;
        face.position.y = 0.11;
        const glow = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.12, 2.1), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0 }));
        glow.position.y = -0.02;
        const hit = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 2), new THREE.MeshBasicMaterial({ visible: false }));
        hit.userData.id = 'v' + v;
        g.add(glow, card, face, hit);
        g.position.set(-5 + i * 2.3, 1.35, 0.2);
        g.rotation.x = -0.28;
        this.st.add(g);
        this.cards.push({ g, v, hit, glow, wig: 0 });
      });
      this.signText.textContent = COUNT_Q;
      this.st.setPicks(this.cards.map((x) => ({ hit: x.hit })), (id) => this._choose(Number(id.slice(1))));
    }
    this.st.focus = null;
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this._say();
  }

  _say() {
    this.sh.sound.play('sparkle');
    const c = this.play.cur;
    this.sh.speak(c.mode === 'give' ? askText(c.n) : COUNT_Q);
  }

  _pickApple(i) {
    if (this.st.mode !== 'wait') return;
    const a = this.apples[i];
    if (!a || a.in) return;
    const ev = this.play.pick();
    if (!ev) return;
    a.in = true;
    const k = ev.k - 1;
    this.flights.push({ a, from: a.m.position.clone(), to: SLOT(k).add(new THREE.Vector3(0, 1.12 - 0.3 + 0.1, 0)), t: 0 });
    this.sh.sound.play('drop');
    // count out loud: the number of this apple
    this.sh.speak(NUMBERS[ev.k - 1][0]);
    this.st.setPicks(this.apples.filter((x) => !x.in).map((x) => ({ hit: x.hit })), (id) => this._pickApple(Number(id.slice(1))));
    if (ev.done) {
      this.st.mode = 'found';
      this.st.setPicks([], null);
      this.sh.round('counting', true, String(ev.n));
      this._celebrate(ev, 1500);
    }
  }

  _choose(v) {
    if (this.st.mode !== 'wait') return;
    const c = this.play.cur;
    const ev = this.play.choose(v);
    const card = this.cards.find((x) => x.v === v);
    if (!ev.ok) {
      card.wig = 0.6;
      this.sh.sound.play('bump');
      this.sh.say(this.sh.t('no'), false, 2);
      if (ev.firstMiss) this.sh.round('counting', false, String(c.n));
      this._countAloud(c.n, 500);
      return;
    }
    if (ev.first) this.sh.round('counting', true, String(c.n));
    this.st.mode = 'found';
    this.st.setPicks([], null);
    this._countAloud(c.n, 300, () => this._celebrate(ev, 400));
  }

  /** Counts the apples in the basket aloud, lighting each in turn. */
  _countAloud(n, delay, then) {
    clearTimeout(this._ct);
    this._ct = setTimeout(() => {
      const words = NUMBERS.slice(0, n).map((x) => x[0]);
      this.sh.speak(words, (i) => { const a = this.apples[i]; if (a) a.jump = 0.4; this.sh.sound.play('tap'); }, then);
    }, delay);
  }

  _celebrate(ev, delay) {
    setTimeout(() => {
      this.lightDots(this.play.round);
      this.sh.sound.play('right');
      this.sh.sound.play('cheer');
      this.st.sparkle(new THREE.Vector3(BASKET.x, 2.4, BASKET.z));
      this.keeper.userData.cheer = 1.6;
      this.sh.say(this.sh.t('yes'), true, 1.8);
      setTimeout(() => {
        if (ev.finished) {
          this.st.mode = 'end';
          this.sign.remove();
          this._clearApples();
          this.sh.sound.setMode('calm');
          this.sh.finishCard(this.sh.t('title'), '🍎', () => this._start());
        } else this._ask();
      }, 2600);
    }, delay);
  }

  _frame(dt, time) {
    const hint = this.play && this.st.mode === 'wait' ? this.play.hint : null;
    const fid = this.st.mode === 'wait' ? this.st.focusedId() : null;
    for (const a of this.apples) {
      if (a.popT != null) {
        a.popT += dt * 3;
        const k = Math.max(0, Math.min(1, a.popT));
        a.m.scale.setScalar(Math.max(0.001, (a.m.userData.sc || 1.25) * (k < 1 ? 1 - Math.pow(1 - k, 3) + Math.sin(k * Math.PI) * 0.2 : 1)));
      } else if (!a.in) a.m.position.y = 1.18 + Math.sin(time * 2 + a.bob) * 0.02;
      if (a.jump > 0) { a.jump -= dt; a.m.position.y += Math.sin(Math.max(0, a.jump) * Math.PI / 0.4) * 0.12; }
    }
    for (let i = this.flights.length - 1; i >= 0; i--) {
      const f = this.flights[i];
      f.t += dt / 0.55;
      const k = Math.min(1, f.t);
      f.a.m.position.lerpVectors(f.from, f.to, k);
      f.a.m.position.y += Math.sin(k * Math.PI) * 1.8;
      f.a.m.rotation.z = Math.sin(k * Math.PI) * 0.5;
      if (k >= 1) { f.a.m.rotation.z = 0; this.flights.splice(i, 1); }
    }
    for (const c of this.cards) {
      const on = c.v === hint || (fid && fid === 'v' + c.v);
      c.glow.material.opacity = on ? 0.6 + Math.sin(time * 6) * 0.2 : 0;
      c.g.position.y = 1.35 + (on ? Math.sin(time * 5) * 0.05 : 0);
      if (c.wig > 0) { c.wig -= dt; c.g.rotation.z = Math.sin(c.wig * 40) * 0.25 * c.wig; } else c.g.rotation.z = 0;
    }
    for (const a of this.apples) if (a.hit && !a.in && fid === a.hit.userData.id) a.m.position.y += 0.15 + Math.sin(time * 8) * 0.05;
    const kp = this.keeper;
    const u = kp.userData;
    u.cheer = Math.max(0, (u.cheer || 0) - dt);
    kp.position.y = 1.1 + (u.cheer > 0 ? Math.abs(Math.sin(time * 10)) * 0.25 : Math.sin(time * 1.6) * 0.03);
    if (u.armL) { u.armL.rotation.z = u.cheer > 0 ? 2.4 + Math.sin(time * 14) * 0.4 : 0.3; u.armR.rotation.z = u.cheer > 0 ? -2.4 - Math.sin(time * 14) * 0.4 : -0.3; }
  }

  pause() { this.sh.pause(); }

  dispose() {
    clearTimeout(this._ct);
    this.st.dispose();
    this.sh.dispose();
  }
}

function makeKeeper() {
  const g = new THREE.Group();
  const skin = M(0xf0c090), dress = M(0x4aa8ff), hair = M(0xd8d8e0), apron = M(0xfff4e0);
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.95, 20, 16), dress);
  body.scale.set(1, 1.05, 0.85);
  body.position.y = 1.0;
  const ap = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 12), apron);
  ap.scale.set(1, 0.9, 0.5);
  ap.position.set(0, 0.85, 0.5);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.62, 20, 16), skin);
  head.position.y = 2.3;
  const bun = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), hair);
  bun.position.set(0, 2.95, -0.05);
  const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.64, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), hair);
  hairTop.position.y = 2.38;
  g.add(body, ap, head, bun, hairTop);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), M(0x1a1a24));
    eye.position.set(s * 0.22, 2.35, 0.56);
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), M(0xff9a9a));
    cheek.position.set(s * 0.38, 2.15, 0.46);
    g.add(eye, cheek);
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 6, 14, Math.PI), M(0xb83a3a));
  smile.position.set(0, 2.12, 0.58);
  smile.rotation.z = Math.PI;
  g.add(smile);
  const arms = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.95, 1.6, 0);
    const a = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.7, 4, 8), dress);
    a.position.y = -0.4;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), skin);
    hand.position.y = -0.95;
    arm.add(a, hand);
    g.add(arm);
    arms.push(arm);
  }
  g.userData = { armL: arms[0], armR: arms[1] };
  return g;
}

const CSS = `
.lc-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #e8302a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.6));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(60,20,10,.3);pointer-events:auto;max-width:94%}
.lc-sign i{font-style:normal;font-size:1.4em}
.lc-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lc-sign.pop{animation:lc-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes lc-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.lc-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lc-style')) document.head.append(h('style', { id: 'lc-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnCounting = api;
export default api;
