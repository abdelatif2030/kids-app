// «فين الكورة؟» — Where Is the Ball? (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #7).
// A 3D playroom with a wooden table and an open toy box. Bobby the puppy has hidden his ball; the app says where
// ("the ball is under the table" — shown on a sign, with a button to hear it again) and the child taps that place
// among the glowing question marks. Right: the ball pops out there and Bobby runs over, wagging, to fetch it. A wrong
// place only wobbles. Five rounds; skill 'spatial' (on / under / next to / inside).
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { makeItem } from '../kit/toys3d.js';
import { BallPlay, sentence, spotById } from './sim.js';

const TEXT = {
  title: ['فين الكورة؟', 'Where Is the Ball?'],
  intro: ['بوبي خبّى الكورة! اسمع وقول هي فين', 'Bobby hid the ball! Listen and find it'],
  no: ['مش هنا... اسمع تاني', 'Not here... listen again'],
  yes_m: ['برافو! لقيت الكورة', 'Yes! You found the ball'],
  yes_f: ['برافو! لقيتي الكورة', 'Yes! You found the ball'],
  again: ['اسمع تاني', 'Hear again'],
};

const THEME_PUP = {
  ...THEME_GARDEN,
  tempo: 110,
  lead: 'marimba',
  chords: [[43, [67, 71, 74]], [48, [67, 72, 76]], [45, [64, 69, 72]], [50, [66, 69, 74]], [43, [67, 71, 74]], [48, [67, 72, 76]], [50, [66, 69, 74]], [43, [67, 71, 79]]],
  melody: [[0, 0, 79], [0, 2, 83], [0, 4, 86], [1, 0, 84], [1, 4, 79], [2, 0, 81], [2, 2, 84], [2, 4, 88], [3, 0, 86], [3, 4, 81], [4, 0, 83], [4, 4, 79], [5, 0, 84], [5, 4, 88], [6, 0, 86], [6, 2, 81], [6, 4, 78], [7, 0, 79]],
};

const POS = {
  on_table: [-1.9, 1.32, 0],
  under_table: [-1.9, 0.32, 0.15],
  in_box: [2.0, 0.72, 0.2],
  beside_box: [3.45, 0.32, 0.45],
  beside_table: [-3.65, 0.32, 0.45],
};

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_PUP });
    const sh = this.sh;
    this.en = sh.T.lang === 'en';
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xfff0d8);
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd8b890, 1.6));
    const sun = new THREE.DirectionalLight(0xfff4e0, 2);
    sun.position.set(-3, 9, 7);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 6, bottom: -6, near: 1, far: 30 });
    this.scene.add(sun);
    this._room();
    this.pup = makePuppy();
    this.scene.add(this.pup);
    this.ball = makeItem('ball');
    this.ball.scale.setScalar(0.62);
    this.ball.visible = false;
    this.scene.add(this.ball);
    this.marks = new Map();
    this.fx = [];
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    this.pup.position.set(0, 0, 1.5);
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🐶⚽📦', () => this._start()));
    this._loop();
  }

  _room() {
    const s = this.scene;
    const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, ...o });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      for (let i = 0; i < 8; i++) { g.fillStyle = ['#e8b880', '#deac72', '#f0c48c', '#e2b078'][i % 4]; g.fillRect(0, i * 32, 256, 32); g.fillStyle = 'rgba(120,70,30,.22)'; g.fillRect(0, i * 32 + 30, 256, 2); }
    }, [8, 6]), roughness: 0.8 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    s.add(floor);
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 14), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#d8f0e8'; g.fillRect(0, 0, 256, 256);
      g.fillStyle = '#c8e8dc';
      for (let i = 0; i < 20; i++) { g.beginPath(); g.arc((i * 67) % 256, (i * 101) % 256, 10, 0, Math.PI * 2); g.fill(); }
    }, [8, 3]), roughness: 1 }));
    wall.position.set(0, 7, -3.2);
    s.add(wall);
    const skirting = new THREE.Mesh(new THREE.BoxGeometry(40, 0.4, 0.1), M(0xffffff));
    skirting.position.set(0, 0.2, -3.1);
    s.add(skirting);
    // a round rug
    const rug = new THREE.Mesh(new THREE.CircleGeometry(4.6, 40), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      ['#ff9ab8', '#fff0b8', '#9ad8ff', '#fff0b8', '#ff9ab8'].forEach((c, i, all) => { g.fillStyle = c; g.beginPath(); g.arc(128, 128, 128 - i * (128 / all.length), 0, Math.PI * 2); g.fill(); });
    }), roughness: 1 }));
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.01, 0.6);
    rug.receiveShadow = true;
    s.add(rug);
    // a picture and a window on the wall
    const frame = new THREE.Mesh(new THREE.BoxGeometry(2, 1.5, 0.08), M(0xffc23a));
    frame.position.set(4.2, 3.4, -3.1);
    s.add(frame);
    const pic = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.2), M(0x8ad8ff));
    pic.position.set(4.2, 3.4, -3.05);
    s.add(pic);
    const sunPic = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20), M(0xffe05a));
    sunPic.position.set(4.6, 3.6, -3.04);
    s.add(sunPic);
    // the table
    const wood = M(0xc8864a);
    const top = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.14, 1.5), wood);
    top.position.set(-1.9, 1.0, 0);
    top.castShadow = true;
    top.receiveShadow = true;
    s.add(top);
    for (const [x, z] of [[-1, -0.6], [1, -0.6], [-1, 0.6], [1, 0.6]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.95, 10), M(0xa86a3a));
      leg.position.set(-1.9 + x, 0.47, z);
      leg.castShadow = true;
      s.add(leg);
    }
    // the open toy box (four walls and a floor), striped
    const boxMat = new THREE.MeshStandardMaterial({ map: canvasTex(64, 64, (g) => { for (let i = 0; i < 4; i++) { g.fillStyle = i % 2 ? '#4aa8ff' : '#7ac8ff'; g.fillRect(i * 16, 0, 16, 64); } g.fillStyle = '#ffd23a'; g.fillRect(0, 0, 64, 8); }), roughness: 0.5, side: THREE.DoubleSide });
    const bx = 2.0, bz = 0.2, bw = 1.5, bd = 1.1, bh = 0.85;
    for (const [w, d, x, z] of [[bw, 0.06, 0, bd / 2], [bw, 0.06, 0, -bd / 2], [0.06, bd, bw / 2, 0], [0.06, bd, -bw / 2, 0]]) {
      const side = new THREE.Mesh(new THREE.BoxGeometry(w, bh, d), boxMat);
      side.position.set(bx + x, bh / 2, bz + z);
      side.castShadow = true;
      s.add(side);
    }
    const bottom = new THREE.Mesh(new THREE.BoxGeometry(bw, 0.06, bd), M(0x3a8ae8));
    bottom.position.set(bx, 0.3, bz);
    s.add(bottom);
    // a few toys around
    for (const [id, x, z, r, sc] of [['blocks', -4.6, -1.8, 0.5, 0.9], ['teddy', 4.9, -1.6, -0.5, 1], ['train', 0.2, -2.2, 0.3, 0.9]]) {
      const it = makeItem(id);
      it.scale.setScalar(sc);
      it.position.set(x, 0, z);
      it.rotation.y = r;
      s.add(it);
    }
  }

  _makeMarks() {
    for (const m of this.marks.values()) this.scene.remove(m.g);
    this.marks.clear();
    for (const id of this.play.spots) {
      const g = new THREE.Group();
      const [x, y, z] = POS[id];
      g.position.set(x, y, z);
      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.42, 20, 14), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0.35, depthWrite: false }));
      const q = new THREE.Sprite(new THREE.SpriteMaterial({ map: qTex(), transparent: true, depthWrite: false }));
      q.scale.setScalar(0.62);
      const hit = new THREE.Mesh(new THREE.SphereGeometry(0.7, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.id = id;
      g.add(glow, q, hit);
      this.scene.add(g);
      this.marks.set(id, { g, glow, q, hit, shake: 0 });
    }
  }

  _resize(w, hh) {
    this.renderer.setSize(w, hh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / hh;
    this.camera.updateProjectionMatrix();
    const a = this.camera.aspect;
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const d = Math.max(3.1 / t, 4.9 / (t * a));
    const dir = new THREE.Vector3(0, 0.42, 0.9).normalize();
    const target = new THREE.Vector3(0, 0.9, 0.2);
    this.camera.position.copy(target).addScaledVector(dir, d);
    this.camera.lookAt(target);
  }

  _bind() {
    this.sh.root.addEventListener('pointerup', (e) => {
      if (this.mode !== 'wait' || e.target.closest('button') || e.target.closest('.lk-dim')) return;
      const r = this.sh.root.getBoundingClientRect();
      const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, this.camera);
      const hit = ray.intersectObjects([...this.marks.values()].map((m) => m.hit), false)[0];
      if (hit) this._tap(hit.object.userData.id);
    });
    this._onKey = (e) => {
      if (this.mode !== 'wait') return;
      const ids = this.play.spots;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); this.focus = ((this.focus ?? -1) + (e.key === 'ArrowRight' ? 1 : -1) + ids.length) % ids.length; this.sh.sound.play('tap'); }
      else if ((e.key === 'Enter' || e.key === ' ') && this.focus != null) { e.preventDefault(); this._tap(ids[this.focus]); }
    };
    window.addEventListener('keydown', this._onKey);
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.play = new BallPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    this.sh.clear();
    this.lightDots = this.sh.topBar(5, '⚽');
    this.lightDots(0);
    this.sign = h('div', { class: 'lbl-sign' });
    this.signText = h('span');
    this.sign.append(h('i', {}, '🐶'), this.signText, h('button', { class: 'lbl-again', 'aria-label': this.sh.t('again'), onclick: (e) => { e.stopPropagation(); this._say(); } }, '🔊'));
    this.sh.layer.append(this.sign);
    this.sh.sound.setMode('play');
    this._makeMarks();
    this.sh.say(this.sh.t('intro'), true, 3);
    setTimeout(() => this._ask(), 3000);
  }

  _ask() {
    this.ball.visible = false;
    this.fetch = null;
    this.pupGo = { to: new THREE.Vector3(0, 0, 1.5) };
    for (const m of this.marks.values()) { m.g.visible = true; m.glow.material.opacity = 0.35; }
    this.signText.textContent = sentence(this.play.target, this.en);
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this.mode = 'wait';
    this._say();
  }

  _say() {
    this.sh.sound.play('sparkle');
    this.sh.speak(sentence(this.play.target, this.en));
  }

  _tap(id) {
    if (this.mode !== 'wait') return;
    const target = this.play.target;
    const ev = this.play.tap(id);
    const word = spotById(target).ar;
    if (!ev.ok) {
      this.marks.get(id).shake = 0.5;
      this.sh.sound.play('bump');
      this.sh.say(this.sh.t('no'), false, 1.6);
      if (ev.firstMiss) this.sh.round('spatial', false, word);
      setTimeout(() => this.mode === 'wait' && this._say(), 900);
      return;
    }
    if (ev.first) this.sh.round('spatial', true, word);
    this.mode = 'found';
    for (const [k, m] of this.marks) m.g.visible = k === id ? false : false;
    const [x, y, z] = POS[id];
    this.ball.position.set(x, y - 0.2, z);
    this.ball.visible = true;
    this.ballPop = 0;
    this._sparkle(new THREE.Vector3(x, y + 0.2, z));
    this.sh.sound.play('pop');
    this.sh.sound.play('right');
    this.lightDots(this.play.round);
    this.sh.say(this.sh.t('yes'), true, 2);
    // Bobby runs to it (he stops in front of high or boxed places)
    const front = new THREE.Vector3(x, 0, Math.max(z + 1.1, 1.2));
    this.pupGo = { to: front, then: () => { this.fetch = { t: 0 }; this.sh.sound.play('cheer'); } };
    setTimeout(() => {
      if (ev.finished) {
        this.mode = 'end';
        this.sign.remove();
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '🐶', () => this._start());
      } else this._ask();
    }, 3400);
  }

  _sparkle(at) {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xffffff];
    for (let i = 0; i < 22; i++) {
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.06), new THREE.MeshBasicMaterial({ color: cols[i % 5] }));
      m.position.copy(at);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 1.5, 2 + Math.random() * 2, Math.sin(a) * 1.2), life: 1 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    const hint = this.play && this.mode === 'wait' ? this.play.hint : null;
    let i = 0;
    for (const [id, m] of this.marks) {
      m.q.position.y = Math.sin(time * 3 + i) * 0.06;
      m.glow.scale.setScalar(1 + Math.sin(time * 4 + i) * 0.1 + (id === hint ? 0.35 : 0));
      m.glow.material.opacity = id === hint ? 0.7 : 0.35;
      m.glow.material.color.setHex(this.focus != null && this.play.spots[this.focus] === id ? 0x7ad0ff : 0xfff27a);
      if (m.shake > 0) { m.shake -= dt; m.g.rotation.z = Math.sin(m.shake * 40) * 0.4 * m.shake; m.g.position.x = POS[id][0] + Math.sin(m.shake * 40) * 0.08; } else m.g.rotation.z = 0;
      i++;
    }
    // the ball pops out with a bounce
    if (this.ball.visible && this.ballPop != null && !this.fetch) {
      this.ballPop += dt;
      const base = POS[this.play.targets[Math.max(0, this.play.round - 1)]] || [0, 0, 0];
      this.ball.position.y = base[1] - 0.2 + Math.abs(Math.sin(this.ballPop * 6)) * 0.5 * Math.max(0, 1 - this.ballPop * 0.7);
      this.ball.rotation.y += dt * 3;
    }
    // Bobby
    const p = this.pup;
    const u = p.userData;
    let running = false;
    if (this.pupGo) {
      const d = this.pupGo.to.clone().sub(p.position);
      d.y = 0;
      const len = d.length();
      if (len > 0.08) {
        running = true;
        p.position.addScaledVector(d.normalize(), Math.min(len, dt * 5));
        p.rotation.y = Math.atan2(d.x, d.z);
      } else {
        const then = this.pupGo.then;
        this.pupGo = null;
        p.rotation.y = this.mode === 'found' ? Math.PI : 0;
        if (then) then();
      }
    }
    p.position.y = running ? Math.abs(Math.sin(time * 16)) * 0.12 : (this.fetch ? Math.abs(Math.sin(time * 9)) * 0.35 : 0);
    u.legs.forEach((l, k) => { l.rotation.x = running ? Math.sin(time * 16 + k * Math.PI) * 0.7 : 0; });
    u.tail.rotation.y = Math.sin(time * (this.fetch || running ? 22 : 6)) * 0.6;
    u.head.rotation.z = Math.sin(time * 2) * 0.08;
    u.ears.forEach((e2, k) => { e2.rotation.x = Math.sin(time * 6 + k) * (running ? 0.4 : 0.08); });
    if (this.fetch) {
      // the ball hops to Bobby and he holds it up
      this.fetch.t += dt;
      const k = Math.min(1, this.fetch.t * 2);
      const hold = p.position.clone().add(new THREE.Vector3(0, 1.25, 0));
      this.ball.position.lerp(hold, k * 0.25 + 0.05);
    }
    for (let j = this.fx.length - 1; j >= 0; j--) {
      const m = this.fx[j];
      const uu = m.userData;
      uu.life -= dt;
      uu.v.y -= 6 * dt;
      m.position.addScaledVector(uu.v, dt);
      if (uu.life <= 0) { this.scene.remove(m); m.geometry.dispose(); this.fx.splice(j, 1); }
    }
    this.renderer.render(this.scene, this.camera);
  }

  pause() { this.sh.pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    this.sh.dispose();
  }
}

function makePuppy() {
  const g = new THREE.Group();
  const M = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75 });
  const fur = M(0xd8a060), dark = M(0x8a5a2a), white = M(0xfff4e4), black = M(0x1a1a24);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.45, 8, 14), fur);
  body.rotation.x = Math.PI / 2;
  body.position.y = 0.48;
  body.castShadow = true;
  g.add(body);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), white);
  belly.scale.set(0.9, 0.7, 1.3);
  belly.position.set(0, 0.36, 0.05);
  g.add(belly);
  const head = new THREE.Group();
  head.position.set(0, 0.86, 0.42);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.28, 18, 14), fur);
  skull.castShadow = true;
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10), white);
  snout.scale.set(1, 0.8, 1.1);
  snout.position.set(0, -0.07, 0.22);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), black);
  nose.position.set(0, -0.03, 0.37);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), M(0xff7a9a));
  tongue.scale.set(1, 0.4, 1.4);
  tongue.position.set(0, -0.16, 0.28);
  const patch = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), dark);
  patch.scale.set(1, 1, 0.4);
  patch.position.set(0.12, 0.08, 0.2);
  head.add(skull, snout, nose, tongue, patch);
  const ears = [];
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), black);
    eye.position.set(s * 0.11, 0.06, 0.24);
    const glint = new THREE.Mesh(new THREE.SphereGeometry(0.015, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    glint.position.set(s * 0.11 + 0.015, 0.08, 0.28);
    const ear = new THREE.Group();
    ear.position.set(s * 0.24, 0.14, 0);
    const flap = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), dark);
    flap.scale.set(0.5, 1.3, 0.9);
    flap.position.y = -0.14;
    ear.add(flap);
    ears.push(ear);
    head.add(eye, glint, ear);
  }
  g.add(head);
  const legs = [];
  for (const [x, z] of [[-0.16, 0.26], [0.16, 0.26], [-0.16, -0.24], [0.16, -0.24]]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.36, z);
    const l = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.2, 4, 8), fur);
    l.position.y = -0.17;
    const paw = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), white);
    paw.scale.set(1, 0.6, 1.2);
    paw.position.set(0, -0.32, 0.03);
    leg.add(l, paw);
    g.add(leg);
    legs.push(leg);
  }
  const tail = new THREE.Group();
  tail.position.set(0, 0.6, -0.5);
  const tl = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.28, 4, 8), fur);
  tl.position.set(0, 0.14, -0.08);
  tl.rotation.x = -0.6;
  tail.add(tl);
  g.add(tail);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.04, 8, 20), M(0xe8302a));
  collar.rotation.x = Math.PI / 2.4;
  collar.position.set(0, 0.68, 0.3);
  g.add(collar);
  g.userData = { legs, tail, head, ears };
  g.scale.setScalar(1.15);
  return g;
}

let _q = null;
function qTex() {
  if (_q) return _q;
  _q = canvasTex(128, 128, (g) => {
    g.fillStyle = '#ff8a2a';
    g.beginPath(); g.arc(64, 64, 54, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#fff'; g.lineWidth = 8; g.stroke();
    g.fillStyle = '#fff';
    g.font = '900 80px Tajawal, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('؟', 64, 68);
  });
  return _q;
}

function canvasTex(w, hh, draw, repeat) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = hh;
  draw(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}

const CSS = `
.lbl-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #ff8a2a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.4));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,10,.3);pointer-events:auto;max-width:94%}
.lbl-sign i{font-style:normal;font-size:1.3em}
.lbl-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lbl-sign.pop{animation:lbl-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes lbl-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.lbl-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lbl-style')) document.head.append(h('style', { id: 'lbl-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnBall = api;
export default api;
