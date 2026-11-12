// «السلالم والزلاجات» — Ladders & Slides (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #5).
// A 3D board of 30 bright squares in a playground: wooden ladders climb up, colourful slides ride down (no snakes, a
// slide is a fun "wheee", never a loss). The child and Teddy the bear take turns: tap the giant die, it tumbles and
// lands, and the pawn hops square by square while the app's voice counts the steps ("واحد، اتنين، تلاتة").
// First to the flag on 30 wins — either way the race ends happily. The learning star the first time a race is finished.
import * as THREE from 'three';
import { polish } from '../kit/realism.js';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { makeItem } from '../kit/toys3d.js';
import { NUMBERS } from '../kit/words.js';
import { Race, LADDERS, SLIDES, LAST, cellXY } from './sim.js';

const TEXT = {
  title: ['السلالم والزلاجات', 'Ladders & Slides'],
  yourTurn_m: ['دورك! دوس على الزهر', 'Your turn! Tap the die'],
  yourTurn_f: ['دورك! دوسي على الزهر', 'Your turn! Tap the die'],
  bearTurn: ['دور الدبدوب', "Teddy's turn"],
  ladder: ['سلّم! اطلع لفوق', 'A ladder! Up you go'],
  slide: ['زحليقة! وييي', 'A slide! Wheee'],
  youWin_m: ['وصلت للعلم الأول!', 'You reached the flag first!'],
  youWin_f: ['وصلتي للعلم الأول!', 'You reached the flag first!'],
  bearWin: ['الدبدوب وصل الأول! أحسنتم', 'Teddy got there first! Well played'],
};
const COUNT = { ar: ['واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة'], en: ['one', 'two', 'three', 'four', 'five', 'six'] };

const THEME_PLAY = {
  ...THEME_GARDEN,
  tempo: 116,
  lead: 'marimba',
  chords: [[48, [64, 67, 72]], [43, [62, 67, 71]], [45, [64, 69, 72]], [41, [65, 69, 72]], [48, [64, 67, 72]], [43, [62, 67, 71]], [41, [65, 69, 72]], [43, [62, 67, 74]]],
  melody: [[0, 0, 72], [0, 2, 76], [0, 4, 79], [0, 6, 84], [1, 0, 83], [1, 4, 79], [2, 0, 81], [2, 2, 79], [2, 4, 76], [3, 0, 77], [3, 4, 81],
    [4, 0, 79], [4, 2, 76], [4, 4, 72], [5, 0, 74], [5, 4, 79], [6, 0, 77], [6, 2, 81], [6, 4, 84], [7, 0, 83], [7, 4, 79]],
};

const T = 1.25; // square size
const TILE_COLORS = ['#ff8a8a', '#ffd25a', '#7ad0ff', '#8ae07a', '#c8a0ff', '#ffb070'];

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_PLAY });
    const sh = this.sh;
    this.en = sh.T.lang === 'en';
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    polish(this.renderer, this.scene);
    this.scene.background = new THREE.Color(0xa8e0ff);
    this.scene.fog = new THREE.Fog(0xa8e0ff, 30, 70);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x7ac85a, 1.6));
    const sun = new THREE.DirectionalLight(0xfff4e0, 2.2);
    sun.position.set(-6, 14, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 40 });
    this.scene.add(sun);
    this.at = (n) => {
      if (n <= 0) return new THREE.Vector3(-3 * T - 0.4, 0.15, 2.5 * T + 0.8);
      const { col, row } = cellXY(n);
      return new THREE.Vector3((col - 2) * T, 0.15, (2.5 - row) * T);
    };
    this._playground();
    this._board();
    this.kid = makeKid();
    this.kid.scale.setScalar(1.5);
    this.bear = makeItem('teddy');
    this.bear.scale.setScalar(1.35);
    this.scene.add(this.kid, this.bear);
    this.die = makeDie();
    this.die.position.set(4.7, 0.6, 1.2);
    this.scene.add(this.die);
    this.fx = [];
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    this._place();
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🎲🪜🛝🧸', () => this._start()));
    this._loop();
  }

  _playground() {
    const s = this.scene;
    const grass = new THREE.Mesh(new THREE.CircleGeometry(40, 48), new THREE.MeshStandardMaterial({ color: 0x8ad86a, roughness: 1 }));
    grass.rotation.x = -Math.PI / 2;
    grass.receiveShadow = true;
    s.add(grass);
    const sand = new THREE.Mesh(new THREE.BoxGeometry(5 * T + 1.2, 0.2, 6 * T + 1.2), new THREE.MeshStandardMaterial({ color: 0xc8864a, roughness: 0.8 }));
    sand.position.y = 0;
    sand.receiveShadow = true;
    s.add(sand);
    // trees and a fence around
    const leaf = [0x4ac85a, 0x3ab04a, 0x6ad86a].map((c) => new THREE.MeshStandardMaterial({ color: c }));
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      if (Math.sin(a) > 0.3) continue;
      const g = new THREE.Group();
      const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0x8a5a2a }));
      tk.position.y = 0.6;
      const cr = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), leaf[i % 3]);
      cr.position.y = 1.8;
      cr.castShadow = true;
      g.add(tk, cr);
      g.position.set(Math.cos(a) * 10, 0, Math.sin(a) * 9);
      s.add(g);
    }
    // swings in the back
    const frame = new THREE.MeshStandardMaterial({ color: 0xff6a5a });
    for (const x of [-2.4, 2.4]) {
      for (const k of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3, 8), frame);
        leg.position.set(x + k * 0.5, 1.4, -6.5);
        leg.rotation.z = k * 0.3;
        s.add(leg);
      }
    }
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 5, 8), frame);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(0, 2.8, -6.5);
    s.add(bar);
  }

  _board() {
    const s = this.scene;
    for (let n = 1; n <= LAST; n++) {
      const p = this.at(n);
      const tile = new THREE.Mesh(new THREE.BoxGeometry(T * 0.96, 0.16, T * 0.96), new THREE.MeshStandardMaterial({ map: numberTex(n, TILE_COLORS[(n * 7) % TILE_COLORS.length], n === LAST), roughness: 0.6 }));
      tile.position.set(p.x, 0.12, p.z);
      tile.receiveShadow = true;
      s.add(tile);
    }
    // the flag on 30
    const f = this.at(LAST);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.4, 8), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
    pole.position.set(f.x + 0.45, 0.9, f.z - 0.45);
    s.add(pole);
    this.flag = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.4), new THREE.MeshStandardMaterial({ color: 0xff3a5a, side: THREE.DoubleSide }));
    this.flag.position.set(f.x + 0.75, 1.42, f.z - 0.45);
    s.add(this.flag);
    // ladders (wooden rails and rungs)
    const wood = new THREE.MeshStandardMaterial({ color: 0xc8864a, roughness: 0.7 });
    for (const [a, b] of Object.entries(LADDERS)) {
      const A = this.at(Number(a)).setY(0.3), B = this.at(b).setY(0.3);
      const dir = B.clone().sub(A);
      const len = dir.length();
      const g = new THREE.Group();
      const side = new THREE.Vector3(-dir.z, 0, dir.x).normalize().multiplyScalar(0.22);
      for (const k of [-1, 1]) {
        const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, len, 8), wood);
        rail.position.copy(A).add(B).multiplyScalar(0.5).addScaledVector(side, k).setY(0.42);
        rail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        rail.castShadow = true;
        g.add(rail);
      }
      const rungs = Math.round(len / 0.35);
      for (let i = 1; i < rungs; i++) {
        const r = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.44, 6), wood);
        r.position.copy(A).lerp(B, i / rungs).setY(0.42);
        r.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), side.clone().normalize());
        g.add(r);
      }
      s.add(g);
    }
    // slides (smooth colourful tubes that dip down)
    this.slideCurves = {};
    const cols = [0x4aa8ff, 0xff5a8a, 0xffc23a, 0x3ec86a];
    Object.entries(SLIDES).forEach(([a, b], i) => {
      const A = this.at(Number(a)), B = this.at(b);
      // a playground slide: a flat chute with low side rails, high at the top square, gently down to the bottom one
      const curve = new THREE.CatmullRomCurve3([A.clone().setY(1.0), A.clone().lerp(B, 0.3).setY(0.75), A.clone().lerp(B, 0.7).setY(0.38), B.clone().setY(0.26)]);
      this.slideCurves[a] = curve;
      const mat = new THREE.MeshStandardMaterial({ color: cols[i % cols.length], roughness: 0.3 });
      const rail = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
      const N = 24;
      for (let k = 0; k < N; k++) {
        const p0 = curve.getPoint(k / N), p1 = curve.getPoint((k + 1) / N);
        const seg = p1.clone().sub(p0);
        const piece = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, seg.length() + 0.02), mat);
        piece.position.copy(p0).lerp(p1, 0.5);
        piece.lookAt(p1);
        piece.castShadow = true;
        s.add(piece);
        const sideV = new THREE.Vector3(-seg.z, 0, seg.x).normalize().multiplyScalar(0.23);
        for (const sgn of [-1, 1]) {
          const r = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, seg.length() + 0.02), rail);
          r.position.copy(piece.position).addScaledVector(sideV, sgn).add(new THREE.Vector3(0, 0.06, 0));
          r.lookAt(r.position.clone().add(seg));
          s.add(r);
        }
      }
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8), new THREE.MeshStandardMaterial({ color: 0x888899 }));
      top.position.copy(A).setY(0.55);
      s.add(top);
    });
  }

  _place() {
    this.kid.position.copy(this.at(0)).add(new THREE.Vector3(-0.2, 0, 0));
    this.bear.position.copy(this.at(0)).add(new THREE.Vector3(0.35, 0, 0.1));
  }

  _resize(w, hh) {
    this.renderer.setSize(w, hh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / hh;
    this.camera.updateProjectionMatrix();
    const a = this.camera.aspect;
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const halfW = 3.6 * T + (a > 1.2 ? 2.4 : 0.8);
    const halfH = 3.8 * T;
    const d = Math.max(halfH / t, halfW / (t * a));
    const dir = new THREE.Vector3(0, 0.78, 0.62).normalize();
    const target = new THREE.Vector3(a > 1.2 ? 0.9 : 0, 0, 0.6);
    this.camera.position.copy(target).addScaledVector(dir, d);
    this.camera.lookAt(target);
    if (this.die) this.die.position.set(a > 1.2 ? 4.9 : 2.8, 0.6, a > 1.2 ? 1.2 : 5.4);
  }

  _bind() {
    this.sh.root.addEventListener('pointerup', (e) => {
      if (e.target.closest('button') || e.target.closest('.lk-dim')) return;
      if (this.mode !== 'wait') return;
      const r = this.sh.root.getBoundingClientRect();
      const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, this.camera);
      if (ray.intersectObject(this.die, true).length) this._roll();
    });
    this._onKey = (e) => { if ((e.key === 'Enter' || e.key === ' ') && this.mode === 'wait') { e.preventDefault(); this._roll(); } };
    window.addEventListener('keydown', this._onKey);
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.race = new Race(this.sh.age, Math.floor(Math.random() * 1e9));
    this._place();
    this.sh.clear();
    this.turnPill = h('div', { class: 'lld-turn' });
    this.rollBtn = h('button', { class: 'lld-roll', onclick: (e) => { e.stopPropagation(); this._roll(); } }, '🎲');
    this.sh.layer.append(h('div', { class: 'lk-top' }, this.sh.backBtn(), this.turnPill, this.sh.soundBtn()), this.rollBtn);
    this.bubble = h('div', { class: 'lk-bubble', role: 'status' });
    this.sh.bubble = this.bubble;
    this.sh.layer.append(this.bubble);
    this.sh.sound.setMode('play');
    this._turn();
  }

  _turn() {
    const kid = this.race.turn === 0;
    this.turnPill.textContent = kid ? this.sh.t('yourTurn') : this.sh.t('bearTurn');
    this.turnPill.classList.toggle('bear', !kid);
    this.rollBtn.classList.toggle('off', !kid);
    if (kid) {
      this.mode = 'wait';
      this.sh.say(this.sh.t('yourTurn'), true, 2);
    } else {
      this.mode = 'bear';
      setTimeout(() => this._roll(true), 1100);
    }
  }

  _roll(bear = false) {
    if (!bear && this.mode !== 'wait') return;
    this.mode = 'rolling';
    this.rollBtn.classList.add('off');
    const n = this.race.roll();
    this.rollAnim = { t: 0, n };
    this.sh.sound.play('whoosh');
  }

  _rolled(n) {
    setFace(this.die, n);
    this.sh.sound.play('drop');
    const ev = this.race.move(n);
    const words = (this.en ? COUNT.en : COUNT.ar).slice(0, n);
    this.sh.speak(words.join(this.en ? ', ' : '، '), 0.6 + n * 0.55);
    const pawn = ev.who === 0 ? this.kid : this.bear;
    this.walk = { pawn, ev, i: 0, t: 0, from: pawn.position.clone() };
    this.mode = 'hop';
  }

  _afterHops() {
    const { pawn, ev } = this.walk;
    this.walk = null;
    if (ev.ride) {
      this.mode = 'ride';
      const ladder = ev.ride.kind === 'ladder';
      this.ride = { pawn, ev, t: 0, ladder, from: pawn.position.clone(), to: this.at(ev.ride.to).add(this._offset(ev.who)) };
      this.sh.say(this.sh.t(ladder ? 'ladder' : 'slide'), ev.who === 0, 1.8);
      this.sh.sound.play(ladder ? 'sparkle' : 'whoosh');
      if (!ladder) this.sh.sound.play('cheer');
      return;
    }
    this._endMove(ev);
  }

  _endMove(ev) {
    if (ev.won) {
      this.mode = 'end';
      this._confetti(this.at(LAST));
      this.sh.sound.setMode('calm');
      const msg = ev.who === 0 ? this.sh.t('youWin') : this.sh.t('bearWin');
      this.sh.say(msg, true, 3);
      setTimeout(() => this.sh.finishCard(this.sh.t('title'), ev.who === 0 ? '🏁' : '🧸', () => this._start()), 1800);
      return;
    }
    // the child hears the number of the square they stand on (a number word to learn, 1-30)
    if (ev.who === 0) this.sh.speak(NUMBERS[ev.at - 1][this.en ? 1 : 0]);
    setTimeout(() => this._turn(), ev.who === 0 ? 1700 : 500);
  }

  _offset(who) { return who === 0 ? new THREE.Vector3(-0.22, 0, 0.05) : new THREE.Vector3(0.24, 0, -0.08); }

  _confetti(at) {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xff7ab8];
    for (let i = 0; i < 50; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.16), new THREE.MeshBasicMaterial({ color: cols[i % 5], side: THREE.DoubleSide }));
      m.position.copy(at).setY(1);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 2, 4 + Math.random() * 3, Math.sin(a) * 2), life: 2.4 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  // ---- loop ---------------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    this.flag.rotation.y = Math.sin(time * 3) * 0.2;
    if (this.rollAnim) {
      const r = this.rollAnim;
      r.t += dt;
      this.die.position.y = 0.6 + Math.abs(Math.sin(r.t * 9)) * 1.2 * Math.max(0, 1 - r.t);
      this.die.rotation.set(r.t * 14, r.t * 11, r.t * 7);
      if (Math.floor(r.t * 8) !== this._dt) { this._dt = Math.floor(r.t * 8); setFace(this.die, 1 + (this._dt % this.race.faces)); }
      if (r.t > 1) { this.rollAnim = null; this.die.rotation.set(0, 0.3, 0); this.die.position.y = 0.6; this._rolled(r.n); }
    } else if (this.mode === 'wait') {
      this.die.position.y = 0.6 + Math.abs(Math.sin(time * 3)) * 0.15; // "tap me"
      this.die.rotation.y = 0.3 + Math.sin(time * 1.5) * 0.15;
    }
    if (this.walk) {
      const w = this.walk;
      w.t += dt / 0.5;
      const sq = w.ev.hops[w.i];
      const to = this.at(sq).add(this._offset(w.ev.who));
      const k = Math.min(1, w.t);
      w.pawn.position.lerpVectors(w.from, to, k);
      w.pawn.position.y = to.y + Math.sin(k * Math.PI) * 0.6;
      if (k >= 1) {
        this.sh.sound.play('step', w.i % 2);
        this._pop(to, w.i + 1);
        w.i++;
        w.t = 0;
        w.from = to.clone();
        if (w.i >= w.ev.hops.length) this._afterHops();
      }
    }
    if (this.ride) {
      const r = this.ride;
      r.t += dt / (r.ladder ? 1.3 : 1.1);
      const k = Math.min(1, r.t);
      if (r.ladder) {
        r.pawn.position.lerpVectors(r.from, r.to, k);
        r.pawn.position.y = 0.15 + Math.sin(k * Math.PI) * 0.5 + Math.abs(Math.sin(k * 30)) * 0.05;
      } else {
        const c = this.slideCurves[r.ev.ride.from];
        const p = c.getPoint(k * k);
        r.pawn.position.set(p.x, p.y, p.z);
        r.pawn.rotation.z = Math.sin(k * 20) * 0.2;
      }
      if (k >= 1) { r.pawn.position.copy(r.to); r.pawn.rotation.z = 0; const ev = r.ev; this.ride = null; this.sh.sound.play('drop'); this._endMove(ev); }
    }
    // the pawns face the camera and bob a little
    this.kid.rotation.y = Math.sin(time * 2) * 0.15;
    this.bear.rotation.y = Math.sin(time * 2 + 1) * 0.15;
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const m = this.fx[i];
      const u = m.userData;
      u.life -= dt;
      if (u.v) { u.v.y -= 6 * dt; m.position.addScaledVector(u.v, dt); m.rotation.x += dt * 6; }
      if (u.rise) { m.position.y += dt * 1.2; m.material.opacity = Math.max(0, u.life); }
      if (u.life <= 0) { this.scene.remove(m); m.geometry.dispose(); this.fx.splice(i, 1); }
    }
    this.renderer.render(this.scene, this.camera);
  }

  /** A little number rising from the square, counting the hops. */
  _pop(at, k) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: numberTex(k, '#ffffff', false, true), transparent: true, depthWrite: false }));
    s.position.copy(at).setY(1.2);
    s.scale.setScalar(0.6);
    s.userData = { life: 0.9, rise: true };
    this.scene.add(s);
    this.fx.push(s);
  }

  pause() { this.sh.pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    this.sh.dispose();
  }
}

// ---- models and textures ----------------------------------------------------------------------------------------------

function numberTex(n, color, flag, bubble) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  if (bubble) {
    g.fillStyle = '#ff8a2a';
    g.beginPath(); g.arc(64, 64, 58, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#fff'; g.lineWidth = 8; g.stroke();
  } else {
    g.fillStyle = color;
    g.fillRect(0, 0, 128, 128);
    g.fillStyle = 'rgba(255,255,255,.35)';
    g.fillRect(6, 6, 116, 116);
    g.fillStyle = color;
    g.fillRect(14, 14, 100, 100);
  }
  g.fillStyle = bubble ? '#fff' : '#3a2a5a';
  g.font = `900 ${bubble ? 76 : 64}px Tajawal, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(flag ? '🏁' : String(n), 64, 70);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const pipCache = new Map();
function pipTex(n) {
  if (pipCache.has(n)) return pipCache.get(n);
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#e8304a';
  const P = { 1: [[64, 64]], 2: [[36, 36], [92, 92]], 3: [[32, 32], [64, 64], [96, 96]], 4: [[36, 36], [92, 36], [36, 92], [92, 92]], 5: [[34, 34], [94, 34], [64, 64], [34, 94], [94, 94]], 6: [[36, 30], [92, 30], [36, 64], [92, 64], [36, 98], [92, 98]] };
  for (const [x, y] of P[n]) { g.beginPath(); g.arc(x, y, 13, 0, Math.PI * 2); g.fill(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  pipCache.set(n, t);
  return t;
}

function makeDie() {
  const mats = [1, 2, 3, 4, 5, 6].map((n) => new THREE.MeshStandardMaterial({ map: pipTex(n), roughness: 0.35 }));
  const die = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1, 4, 4, 4), mats);
  // round the corners a little
  const p = die.geometry.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const c = new THREE.Vector3(Math.max(-0.4, Math.min(0.4, v.x)), Math.max(-0.4, Math.min(0.4, v.y)), Math.max(-0.4, Math.min(0.4, v.z)));
    const d = v.clone().sub(c);
    if (d.lengthSq() > 0) v.copy(c.add(d.normalize().multiplyScalar(0.15)));
    p.setXYZ(i, v.x, v.y, v.z);
  }
  die.geometry.computeVertexNormals();
  die.castShadow = true;
  return die;
}

/** Shows [n] on the top face (and the front, so it is easy to read). */
function setFace(die, n) {
  die.material[2].map = pipTex(n); // +y
  die.material[4].map = pipTex(n); // +z
  die.material[2].needsUpdate = true;
  die.material[4].needsUpdate = true;
}

function makeKid() {
  const g = new THREE.Group();
  const M = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.22, 6, 12), M(0x4aa8ff));
  body.position.y = 0.38;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), M(0xf0c098));
  head.position.y = 0.72;
  head.castShadow = true;
  g.add(head);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(0xff3a3a));
  cap.position.y = 0.75;
  g.add(cap);
  const visor = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.02, 16, 1, false, -Math.PI / 2, Math.PI), M(0xff3a3a));
  visor.position.set(0, 0.76, 0.1);
  g.add(visor);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), M(0x1a1a24));
    eye.position.set(s * 0.06, 0.74, 0.15);
    g.add(eye);
  }
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.12, 16), M(0xffd23a));
  base.position.y = 0.06;
  g.add(base);
  return g;
}

const CSS = `
.lld-turn{background:rgba(255,255,255,.92);border:calc(var(--u)*.55) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:max(18px,calc(var(--u)*4.4));color:#3a7a2a;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(30,20,70,.25);white-space:nowrap}
.lld-turn.bear{color:#a8642a}
.lld-roll{position:absolute;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-start:calc(var(--u)*4);width:max(72px,calc(var(--u)*18));height:max(72px,calc(var(--u)*18));border-radius:calc(var(--u)*4);border:calc(var(--u)*.8) solid #fff;background:linear-gradient(180deg,#ff8a5a,#e8402a);font-size:calc(var(--u)*10);cursor:pointer;box-shadow:0 calc(var(--u)*1) 0 #a82a1a,0 calc(var(--u)*1.4) calc(var(--u)*3) rgba(0,0,0,.3);animation:lld-bounce 1s ease-in-out infinite;pointer-events:auto}
.lld-roll.off{opacity:.35;animation:none;pointer-events:none}
@keyframes lld-bounce{50%{transform:translateY(calc(var(--u)*-1.6))}}
.lld-roll:focus-visible{outline:calc(var(--u)*.8) solid #3a8ae8;outline-offset:calc(var(--u)*.6)}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lld-style')) document.head.append(h('style', { id: 'lld-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnLadders = api;
export default api;
