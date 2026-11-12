// «رتّب يومي» — Arrange My Day (rebuilt in 3D, learning game #4). A cosy room with a big window: the sky in the window
// follows the day (pink dawn, blue morning, golden afternoon, orange sunset, a starry night with the moon) and a
// clothesline with wooden pegs stretches across it. Chunky 3D picture cards (a bed, a bowl, a backpack, a pot, a bath...)
// wait on a wooden shelf; the child taps them in the order they happen and each one swings up and hangs from its peg.
// Each card's words are said by the voice. A wrong card only wiggles; after two the right one glows. Five rounds.
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { Stage, M, canvasTex } from '../kit/stage3d.js';
import { makeThing } from '../kit/things3d.js';
import { DayPlay, stepById } from './sim.js';

const TEXT = {
  title: ['رتّب يومي', 'Arrange My Day'],
  intro: ['رتّب يومك! إيه اللي بيحصل الأول؟', 'Arrange your day! What happens first?'],
  first: ['إيه أول حاجة؟', 'What comes first?'],
  next: ['وبعدين؟', 'And then?'],
  notYet: ['لسه بدري عليها!', 'Not yet!'],
  dayDone_m: ['يوم جميل! رتّبته صح', 'A lovely day, in the right order!'],
  dayDone_f: ['يوم جميل! رتّبتيه صح', 'A lovely day, in the right order!'],
};

const THEME_DAY = {
  ...THEME_GARDEN,
  tempo: 96,
  lead: 'bell',
  shaker: false,
  chords: [[48, [64, 67, 72]], [53, [65, 69, 72]], [55, [62, 67, 71]], [48, [64, 67, 72]], [45, [64, 69, 72]], [53, [65, 69, 72]], [55, [62, 65, 71]], [48, [64, 67, 72]]],
  melody: [[0, 0, 76], [0, 4, 79], [1, 0, 81], [1, 4, 77], [2, 0, 79], [2, 4, 74], [3, 0, 76], [4, 0, 72], [4, 4, 76], [5, 0, 77], [5, 4, 81], [6, 0, 79], [6, 4, 83], [7, 0, 84]],
};

// the picture on each card: a 3D model and its board colour
const PIC = {
  wake: ['bed', 0x9ad8ff, 1.0], wash: ['soap', 0xffc0dc, 1.3], breakfast: ['bowl', 0xffe08a, 1.3], school: ['backpack', 0xffb0a0, 1.3],
  lunch: ['pot', 0xc8f0b0, 1.3], play: ['teddy', 0xffd8a0, 1.5], dinner: ['plate', 0xd8c8ff, 1.3], bath: ['tub', 0xa8e8ff, 1.0],
  teeth: ['toothbrush', 0xb8f0e0, 1.3], sleep: ['crescent', 0xb8b8f0, 1.5],
};
const SKY = [[0, '#ffb0c0', '#ffe4c0'], [0.15, '#7ac8ff', '#d8f0ff'], [0.5, '#4ab0ff', '#c0e8ff'], [0.65, '#ffc860', '#ffe8b0'], [0.78, '#ff8a50', '#ffc890'], [0.9, '#1a2a6a', '#3a4a8a'], [1, '#0a1440', '#1a2a5a']];
const lerpC = (a, b, k) => new THREE.Color(a).lerp(new THREE.Color(b), k);
function skyAt(t) {
  let i = 0;
  while (i < SKY.length - 2 && t > SKY[i + 1][0]) i++;
  const [t0, a0, b0] = SKY[i], [t1, a1, b1] = SKY[i + 1];
  const k = Math.max(0, Math.min(1, (t - t0) / (t1 - t0)));
  return [lerpC(a0, a1, k), lerpC(b0, b1, k)];
}

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_DAY });
    const sh = this.sh;
    this.en = sh.T.lang === 'en';
    this.st = new Stage(sh, { bg: 0xfff1d6, ground: 0xe8c8a0, fov: 40, box: [6.6, 4.4], dir: [0, 0.18, 1], target: [0, 3.0, 0] });
    this.sky = 0.05;
    this.skyWant = 0.05;
    this.cards = [];
    this.hung = [];
    this.stars = [];
    this._room();
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🌅🥣🎒🛁😴', () => this._start()));
    this.st.onFrame((dt, time) => this._frame(dt, time));
  }

  _room() {
    const s = this.st.scene;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#e8b880' : '#f0c48c'; g.fillRect(0, i * 32, 256, 32); g.fillStyle = 'rgba(120,70,30,.22)'; g.fillRect(0, i * 32 + 30, 256, 2); }
    }, [10, 5]), roughness: 0.8 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    s.add(floor);
    this.wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 14), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#fff1d6'; g.fillRect(0, 0, 256, 256);
      g.fillStyle = 'rgba(255,170,130,.4)';
      for (let y = 0; y < 256; y += 40) for (let x = (y / 40) % 2 ? 20 : 0; x < 256; x += 40) { g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill(); }
    }, [8, 3]), roughness: 1 }));
    this.wall.position.set(0, 7, -3.4);
    s.add(this.wall);
    // the window: a frame around a sky plane (its colours follow the time of day)
    this.skyMat = new THREE.MeshBasicMaterial({ map: this._skyTex(skyAt(0.05)), toneMapped: false });
    const win = new THREE.Mesh(new THREE.PlaneGeometry(10, 3.9), this.skyMat);
    win.position.set(0, 4.4, -3.3);
    s.add(win);
    const fr = M(0xffffff, { roughness: 0.4 });
    for (const [w, hh, x, y] of [[10.5, 0.3, 0, 6.5], [10.5, 0.3, 0, 2.3], [0.3, 4.5, -5.1, 4.4], [0.3, 4.5, 5.1, 4.4], [0.14, 4.1, 0, 4.4]]) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, hh, 0.25), fr);
      b.position.set(x, y, -3.2);
      b.castShadow = true;
      s.add(b);
    }
    this.sun = new THREE.Mesh(new THREE.SphereGeometry(0.5, 20, 16), new THREE.MeshBasicMaterial({ color: 0xffe05a, toneMapped: false }));
    this.sun.position.z = -3.28;
    s.add(this.sun);
    this.moon = makeThing('crescent');
    this.moon.scale.setScalar(1.2);
    this.moon.position.z = -3.2;
    s.add(this.moon);
    for (let i = 0; i < 26; i++) {
      const st = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffffe0, toneMapped: false }));
      st.position.set((Math.random() - 0.5) * 9.2, 2.6 + Math.random() * 3.5, -3.27);
      st.userData.ph = Math.random() * 6;
      st.visible = false;
      s.add(st);
      this.stars.push(st);
    }
    // the clothesline: a rope with a gentle sag, in front of the window
    this.rope = null;
    // the shelf the cards wait on
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(12, 0.3, 2.6), M(0xd8964a));
    shelf.position.set(0, 0.95, 0.5);
    shelf.castShadow = true; shelf.receiveShadow = true;
    s.add(shelf);
    const front = new THREE.Mesh(new THREE.BoxGeometry(12, 0.7, 0.15), M(0xb8763a));
    front.position.set(0, 0.55, 1.7);
    s.add(front);
    for (const x of [-5.6, 5.6]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.9, 2.4), M(0xb8763a));
      leg.position.set(x, 0.45, 0.5);
      s.add(leg);
    }
    // a lamp that comes on in the evening
    this.lamp = new THREE.Group();
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 2.2, 10), M(0xb8763a));
    stand.position.y = 1.1;
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.65, 0.7, 20, 1, true), new THREE.MeshStandardMaterial({ color: 0xffe08a, emissive: 0xffb83a, emissiveIntensity: 0.1, side: THREE.DoubleSide }));
    shade.position.y = 2.4;
    this.lampShade = shade;
    this.lamp.add(stand, shade);
    this.lamp.position.set(-6.2, 0, -1.4);
    s.add(this.lamp);
    this.lampLight = new THREE.PointLight(0xffc870, 0, 12);
    this.lampLight.position.set(-6.2, 2.5, -0.8);
    s.add(this.lampLight);
  }

  _skyTex([top, bot]) {
    const c = document.createElement('canvas');
    c.width = 4; c.height = 64;
    this._skyCtx = c.getContext('2d');
    this._skyCv = c;
    this._paintSky(top, bot);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    this._skyTexture = t;
    return t;
  }

  _paintSky(top, bot) {
    const g = this._skyCtx;
    const gr = g.createLinearGradient(0, 0, 0, 64);
    gr.addColorStop(0, '#' + top.getHexString()); gr.addColorStop(1, '#' + bot.getHexString());
    g.fillStyle = gr; g.fillRect(0, 0, 4, 64);
    this._skyTexture && (this._skyTexture.needsUpdate = true);
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.play = new DayPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    const sh = this.sh;
    sh.clear();
    this.lightDots = sh.topBar(5, '☀️');
    this.lightDots(0);
    sh.sound.setMode('play');
    sh.say(sh.t('intro'), true, 3);
    this._round();
  }

  _slotX(i, n) {
    const k = (i + 0.5) / n;
    return this.en ? -4.1 + 8.2 * k : 4.1 - 8.2 * k;
  }

  _round() {
    for (const c of [...this.cards, ...this.hung]) this.st.scene.remove(c.g);
    if (this.rope) this.st.scene.remove(this.rope);
    this.cards = [];
    this.hung = [];
    const r = this.play.current;
    const n = r.order.length;
    this.slots = n;
    this.skyWant = Math.max(0, stepById(r.order[0]).t - 0.04);
    // the rope
    const pts = [];
    for (let i = 0; i <= 24; i++) { const k = i / 24; pts.push(new THREE.Vector3(-4.9 + 9.8 * k, 5.85 - Math.sin(k * Math.PI) * 0.18, -2.6)); }
    this.rope = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.035, 6), M(0xb08a5a));
    this.st.add(this.rope);
    // the wooden pegs where cards will hang (numbered)
    this.pegs = Array.from({ length: n }, (_, i) => {
      const x = this._slotX(i, n);
      const sag = Math.sin(((x + 4.9) / 9.8) * Math.PI) * 0.18;
      return new THREE.Vector3(x, 5.85 - sag, -2.5);
    });
    const cw = Math.min(1.9, 9.4 / n * 0.92);
    this.cw = cw;
    r.shuffled.forEach((id, i) => {
      const card = this._makeCard(id, cw);
      const x = ((i + 0.5) / n - 0.5) * Math.min(11, n * (cw + 0.35));
      card.g.position.set(x, 1.7 + cw * 0.55, 0.5);
      card.g.scale.setScalar(0.001);
      card.born = -i * 0.08;
      card.base = card.g.position.clone();
      this.st.add(card.g);
      this.cards.push(card);
    });
    this.st.setPicks(this.cards, (id) => this._tap(id));
    this.st.focus = null;
    this.st.mode = 'wait';
    this.busy = false;
  }

  _makeCard(id, cw) {
    const s = stepById(id);
    const [thing, col, sc] = PIC[id];
    const g = new THREE.Group();
    const board = new THREE.Mesh(new THREE.BoxGeometry(cw, cw * 1.25, 0.14), M(col, { roughness: 0.4 }));
    board.castShadow = true;
    const inner = new THREE.Mesh(new THREE.BoxGeometry(cw * 0.9, cw * 1.15, 0.05), M(0xffffff, { roughness: 0.5 }));
    inner.position.z = 0.06;
    const t = makeThing(thing);
    t.scale.setScalar(sc * cw * 0.4);
    t.position.set(0, -cw * 0.3, 0.1);
    t.rotation.y = 0.35;
    const label = new THREE.Mesh(new THREE.PlaneGeometry(cw * 0.88, cw * 0.3), new THREE.MeshBasicMaterial({ map: canvasTex(512, 160, (c) => {
      c.fillStyle = '#3a2a5a'; c.font = '900 64px Tajawal, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      let txt = this.en ? s.en : s.ar;
      while (c.measureText(txt).width > 480 && c.font.indexOf('px') > 0) { const px = parseInt(c.font.match(/(\d+)px/)[1], 10) - 4; c.font = `900 ${px}px Tajawal, sans-serif`; }
      c.fillText(txt, 256, 84);
    }), transparent: true, toneMapped: false }));
    label.position.set(0, -cw * 0.46, 0.1);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(cw * 1.2, cw * 1.45, 0.05), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0, depthWrite: false }));
    glow.position.z = -0.1;
    const hit = new THREE.Mesh(new THREE.BoxGeometry(cw * 1.05, cw * 1.3, 0.6), new THREE.MeshBasicMaterial({ visible: false }));
    hit.userData.id = id;
    g.add(board, inner, t, label, glow, hit);
    return { g, id, hit, glow, thing: t, wig: 0, born: 0, base: new THREE.Vector3(), used: false };
  }

  _tap(id) {
    if (this.busy || this.st.mode !== 'wait') return;
    const card = this.cards.find((c) => c.id === id);
    if (!card || card.used) return;
    const ev = this.play.tap(id);
    if (!ev) return;
    if (!ev.ok) {
      card.wig = 0.6;
      this.sh.sound.play('bump');
      this.sh.say(this.sh.t('notYet'), false, 1.4);
      return;
    }
    const s = stepById(id);
    card.used = true;
    this.busy = true;
    this.cards = this.cards.filter((c) => c !== card);
    this.st.setPicks(this.cards, (cid) => this._tap(cid));
    const to = this.pegs[ev.slot].clone();
    to.y -= card.g.children[0].geometry.parameters.height * 0.5 + 0.02;
    this.fly = { card, from: card.g.position.clone(), to, t: 0, ev, step: s };
    this.sh.sound.play('whoosh');
  }

  _landed(F) {
    const { card, ev, step: s } = F;
    this.hung.push(card);
    card.swing = 1;
    this.sh.sound.play('drop');
    this.sh.sound.play('right');
    this.sh.speak(this.en ? s.en : s.ar);
    this.skyWant = s.t;
    // a wooden peg on the rope
    const peg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.18), M(0xc8864a));
    peg.position.set(F.to.x, this.pegs[ev.slot].y - 0.02, -2.5);
    this.st.add(peg);
    card.peg = peg;
    this.busy = false;
    if (ev.roundDone) this._roundDone(ev);
  }

  _roundDone(ev) {
    this.busy = true;
    this.sh.round('sequence', ev.first, this.play.rounds[this.play.round - 1].order.join(','));
    this.lightDots(this.play.round);
    setTimeout(() => {
      this.sh.sound.play('roundWin');
      this.sh.sound.play('cheer');
      for (const c of this.hung) c.dance = 1.6;
      this.st.sparkle(new THREE.Vector3(0, 5.5, -2));
      this.sh.say(this.sh.t('dayDone'), true, 2.2);
    }, 700);
    setTimeout(() => {
      this.busy = false;
      if (ev.finished) {
        this.st.mode = 'end';
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '🌙', () => this._start());
        return;
      }
      this._round();
      this.sh.say(this.sh.t('first'), false, 1.6);
    }, 3300);
  }

  _frame(dt, time) {
    // the sky follows the day
    this.sky += (this.skyWant - this.sky) * Math.min(1, dt * 2.2);
    const t = this.sky;
    const night = Math.max(0, Math.min(1, (t - 0.7) / 0.25));
    if (this._lastSky == null || Math.abs(this._lastSky - t) > 0.002) {
      const [a, b] = skyAt(t);
      this._paintSky(a, b);
      this._lastSky = t;
    }
    const arc = Math.PI * (1 - Math.min(1, t / 0.82));
    const dir = this.en ? 1 : -1;
    const sx = Math.cos(arc) * 4.2 * dir, sy = 2.9 + Math.sin(arc) * 3.0;
    this.sun.position.set(sx, sy, -3.28);
    this.sun.visible = night < 0.95;
    this.sun.material.color.set(t > 0.6 ? 0xffa040 : 0xffe05a);
    this.moon.position.set(-3 * dir, 5.1, -3.2);
    this.moon.visible = night > 0.05;
    this.moon.scale.setScalar(0.9 + night * 0.4);
    for (const s of this.stars) { s.visible = night > 0.1; s.scale.setScalar(0.8 + Math.sin(time * 2 + s.userData.ph) * 0.4); }
    this.lampShade.material.emissiveIntensity = 0.1 + night * 1.5;
    this.lampLight.intensity = night * 14;
    // shelf cards
    const hint = this.play && this.st.mode === 'wait' ? this.play.hint : null;
    const fid = this.st.mode === 'wait' ? this.st.focusedId() : null;
    for (const c of this.cards) {
      if (c.born < 1) { c.born += dt * 3; const k = Math.max(0, Math.min(1, c.born)); c.g.scale.setScalar(Math.max(0.001, k < 1 ? 1 - Math.pow(1 - k, 3) + Math.sin(k * Math.PI) * 0.12 : 1)); }
      const on = c.id === hint || c.id === fid;
      c.glow.material.opacity = on ? 0.6 + Math.sin(time * 6) * 0.2 : 0;
      c.g.position.y = c.base.y + (on ? Math.abs(Math.sin(time * 6)) * 0.12 : Math.sin(time * 1.6 + c.base.x) * 0.03);
      c.thing.rotation.y = 0.35 + Math.sin(time * 1.2 + c.base.x) * 0.25;
      if (c.wig > 0) { c.wig -= dt; c.g.rotation.z = Math.sin(c.wig * 40) * 0.25 * c.wig; } else c.g.rotation.z = 0;
    }
    if (this.fly) {
      const F = this.fly;
      F.t += dt / 0.7;
      const k = Math.min(1, F.t);
      const e = k * k * (3 - 2 * k);
      F.card.g.position.lerpVectors(F.from, F.to, e);
      F.card.g.position.y += Math.sin(k * Math.PI) * 1.2;
      F.card.g.rotation.y = Math.sin(k * Math.PI * 2) * 0.3;
      F.card.g.scale.setScalar(1 - 0.12 * e);
      if (k >= 1) { const f = F; this.fly = null; this._landed(f); }
    }
    for (const c of this.hung) {
      if (c.swing > 0) { c.swing = Math.max(0, c.swing - dt * 0.9); c.g.rotation.z = Math.sin(time * 9) * 0.18 * c.swing; } else if (c.dance > 0) { c.dance -= dt; c.g.rotation.z = Math.sin(time * 12) * 0.12; } else c.g.rotation.z = Math.sin(time * 0.9 + c.g.position.x) * 0.012;
    }
  }

  pause() { this.sh.pause(); }

  dispose() {
    this.st.dispose();
    this.sh.dispose();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnDay = api;
export default api;
