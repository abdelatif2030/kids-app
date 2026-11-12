// «كمّل النمط» — Complete the Pattern (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #8).
// A glossy string of big beads (balls, cubes, stars, hearts, rings, drops) lies across a wooden craft table with a
// gap at the end. Three beads wait in a wooden tray below: the child taps the one that comes next and it flies to the
// gap and clicks onto the string. Wrong beads only wobble (after two, the right one glows). Each round the beads of the
// pattern light up one after another with a note each ("one, two, ..." in colours), so the rhythm can be heard too.
// Five rounds; skill 'sequence'. The learning star the first time.
import * as THREE from 'three';
import { polish } from '../kit/realism.js';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { PatternPlay, BEADS } from './sim.js';

const TEXT = {
  title: ['كمّل النمط', 'Complete the Pattern'],
  intro: ['إيه الخرزة اللي جاية؟', 'Which bead comes next?'],
  no: ['مش دي... بُص على الترتيب تاني', 'Not that one... look at the order again'],
  yes_m: ['أحسنت! كمّلت النمط', 'Yes! You finished the pattern'],
  yes_f: ['أحسنتي! كمّلتي النمط', 'Yes! You finished the pattern'],
};

const THEME_BEADS = {
  ...THEME_GARDEN,
  tempo: 106,
  lead: 'bell',
  chords: [[48, [64, 67, 72]], [43, [62, 67, 71]], [45, [64, 69, 72]], [41, [65, 69, 72]], [48, [64, 67, 72]], [43, [62, 67, 71]], [41, [65, 69, 72]], [48, [64, 67, 76]]],
  melody: [[0, 0, 84], [0, 4, 79], [1, 0, 83], [1, 4, 79], [2, 0, 81], [2, 4, 76], [3, 0, 77], [3, 4, 81], [4, 0, 84], [4, 4, 88], [5, 0, 86], [5, 4, 83], [6, 0, 81], [6, 4, 77], [7, 0, 79]],
};
const NOTES = [72, 76, 79, 84, 88, 91];

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_BEADS });
    const sh = this.sh;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    polish(this.renderer, this.scene);
    this.scene.background = new THREE.Color(0xffe8d8);
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd8b8a0, 1.5));
    const key = new THREE.DirectionalLight(0xfff4e0, 2.2);
    key.position.set(-3, 8, 7);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -8, right: 8, top: 6, bottom: -6, near: 1, far: 30 });
    this.scene.add(key);
    this._table();
    this.string = new THREE.Group();
    this.tray = new THREE.Group();
    this.scene.add(this.string, this.tray);
    this.fx = [];
    this.flying = [];
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🔴🟦⭐💚', () => this._start()));
    this._loop();
  }

  _table() {
    const s = this.scene;
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#fff0e0'; g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 24; i++) { g.fillStyle = ['#ffd0d8', '#d0ecff', '#fff0b0', '#d8f4d0'][i % 4]; g.beginPath(); g.arc((i * 71) % 256, (i * 107) % 256, 9, 0, Math.PI * 2); g.fill(); }
    }, [6, 3]), roughness: 1 }));
    wall.position.set(0, 4, -4);
    s.add(wall);
    const top = new THREE.Mesh(new THREE.BoxGeometry(16, 0.4, 9), new THREE.MeshStandardMaterial({ map: canvasTex(256, 128, (g) => {
      for (let i = 0; i < 6; i++) { g.fillStyle = ['#e8b070', '#deA466', '#eeba7e', '#e0aa6c'][i % 4]; g.fillRect(0, i * 22, 256, 22); g.fillStyle = 'rgba(120,70,30,.2)'; g.fillRect(0, i * 22 + 20, 256, 2); }
    }, [3, 2]), roughness: 0.7 }));
    top.position.set(0, -0.2, 0.5);
    top.receiveShadow = true;
    s.add(top);
    // a felt mat for the string and a wooden tray for the choices
    const mat = new THREE.Mesh(new THREE.BoxGeometry(11.2, 0.08, 2.4), new THREE.MeshStandardMaterial({ color: 0xffb8c8, roughness: 1 }));
    mat.position.set(0, 0.02, -0.9);
    mat.receiveShadow = true;
    s.add(mat);
    const tray = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.18, 2.2), new THREE.MeshStandardMaterial({ color: 0xc8864a, roughness: 0.7 }));
    tray.position.set(0, 0.06, 2.2);
    tray.receiveShadow = true;
    s.add(tray);
    for (const [w, d, x, z] of [[6.2, 0.18, 0, 1.1], [6.2, 0.18, 0, 3.3], [0.18, 2.2, -3.1, 2.2], [0.18, 2.2, 3.1, 2.2]]) {
      const rim = new THREE.Mesh(new THREE.BoxGeometry(w, 0.32, d), new THREE.MeshStandardMaterial({ color: 0xa86a3a, roughness: 0.7 }));
      rim.position.set(x, 0.2, z);
      rim.castShadow = true;
      s.add(rim);
    }
    // a few craft things on the table
    for (const [x, z, c] of [[-6.3, 1.5, 0xff6a8a], [6.4, 1.2, 0x6ac8ff]]) {
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.42, 0.9, 16), new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 }));
      cup.position.set(x, 0.45, z);
      cup.castShadow = true;
      s.add(cup);
      for (let i = 0; i < 4; i++) {
        const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.1, 6), new THREE.MeshStandardMaterial({ color: [0xffc81a, 0xf0303a, 0x3ec86a, 0x2a7af0][i] }));
        pen.position.set(x + (i - 1.5) * 0.14, 1.1, z);
        pen.rotation.z = (i - 1.5) * 0.14;
        s.add(pen);
      }
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
    const need = Math.max(this.n || 7, 7) * 0.78 / 2 + 0.8;
    const d = Math.max(4.6 / t, need / (t * a));
    const dir = new THREE.Vector3(0, 0.78, 0.62).normalize();
    const target = new THREE.Vector3(0, 0, 0.9);
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
      const hit = ray.intersectObjects(this.options.map((o) => o.hit), false)[0];
      if (hit) this._pick(hit.object.userData.id);
    });
    this._onKey = (e) => {
      if (this.mode !== 'wait') return;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); this.focus = (((this.focus ?? -1) + (e.key === 'ArrowRight' ? 1 : -1)) + 3) % 3; this.sh.sound.play('tap'); }
      else if ((e.key === 'Enter' || e.key === ' ') && this.focus != null) { e.preventDefault(); this._pick(this.options[this.focus].id); }
      else if (/^[1-3]$/.test(e.key)) this._pick(this.options[Number(e.key) - 1].id);
    };
    window.addEventListener('keydown', this._onKey);
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.play = new PatternPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    this.sh.clear();
    this.lightDots = this.sh.topBar(5, '📿');
    this.lightDots(0);
    this.sh.sound.setMode('play');
    this.sh.say(this.sh.t('intro'), true, 2.4);
    this._round(true);
  }

  _round(first) {
    const r = this.play.current;
    for (const o of [...this.string.children, ...this.tray.children]) { o.traverse((x) => { if (x.geometry) x.geometry.dispose(); }); }
    this.string.clear();
    this.tray.clear();
    this.beads = [];
    const n = r.shown.length + 1;
    this.n = n;
    const gap = 0.92;
    const x0 = -((n - 1) * gap) / 2;
    // the string (a cord) from the first to the last place
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, n * gap + 0.6, 8), new THREE.MeshStandardMaterial({ color: 0x8a5a2a, roughness: 0.9 }));
    cord.rotation.z = Math.PI / 2;
    cord.position.set(0, 0.5, -0.9);
    this.string.add(cord);
    this.places = [];
    r.shown.forEach((id, i) => {
      const b = makeBead(id);
      b.position.set(x0 + i * gap, 0.55, -0.9);
      b.scale.setScalar(0);
      b.userData.pop = -0.12 * i;
      this.string.add(b);
      this.beads.push(b);
    });
    // the gap: a pulsing dashed ring
    const gp = new THREE.Vector3(x0 + (n - 1) * gap, 0.55, -0.9);
    this.gapPos = gp;
    this.gapRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 8, 28), new THREE.MeshBasicMaterial({ color: 0xff8a2a }));
    this.gapRing.position.copy(gp);
    this.gapRing.rotation.x = Math.PI / 2 - 0.5;
    this.string.add(this.gapRing);
    // the three choices in the tray
    this.options = r.options.map((id, i) => {
      const b = makeBead(id);
      b.position.set((i - 1) * 1.9, 0.72, 2.2);
      b.scale.setScalar(1.25);
      const hit = new THREE.Mesh(new THREE.SphereGeometry(0.95, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.id = id;
      hit.position.copy(b.position);
      this.tray.add(b, hit);
      return { id, b, hit, base: b.position.clone(), shake: 0 };
    });
    this._resize(this.sh.w, this.sh.h);
    this.mode = 'show';
    this.showT = first ? 2.6 : 0.6;
  }

  _name(id) { const b = BEADS.find((x) => x.id === id); return this.en ? b.en : b.ar; }

  /** The beads of the pattern light up one after another while the voice says each one's name (colour and shape). */
  _showPattern() {
    const names = this.play.current.shown.map((id) => this._name(id));
    this.sh.speak(names, (i) => {
      const b = this.beads[i];
      if (b) b.userData.glow = 1;
      this.sh.sound.tone('sine', 440 * Math.pow(2, (NOTES[i % 6] - 69) / 12), this.sh.sound.ctx ? this.sh.sound.ctx.currentTime + 0.01 : 0, 0.4, 0.04);
    }, () => { this.mode = 'wait'; });
  }

  _pick(id) {
    if (this.mode !== 'wait') return;
    const ev = this.play.tap(id);
    const o = this.options.find((x) => x.id === id);
    if (!ev.ok) {
      o.shake = 0.5;
      this.sh.sound.play('bump');
      this.sh.say(this.sh.t('no'), false, 1.8);
      if (ev.firstMiss) this.sh.round('sequence', false, ev.detail);
      return;
    }
    if (ev.first) this.sh.round('sequence', true, ev.detail);
    this.mode = 'fly';
    this.flying.push({ o, from: o.b.position.clone(), to: this.gapPos.clone(), t: 0, ev });
    this.sh.sound.play('whoosh');
  }

  _landed(f) {
    const b = f.o.b;
    this.tray.remove(b);
    this.string.add(b);
    b.scale.setScalar(1);
    b.position.copy(this.gapPos);
    this.gapRing.visible = false;
    this.sh.sound.play('drop');
    this.sh.sound.play('right');
    this.sparkle(this.gapPos.clone().setY(1));
    this.lightDots(this.play.round);
    // the right bead's name is said again: that is the word the child learns here
    this.sh.say(this.sh.t('yes'), false, 1.8);
    this.sh.speak([this.sh.t('yes'), this._name(f.o.id)]);
    // the whole string dances
    this.beads.push(b);
    this.dance = 1.4;
    setTimeout(() => this.sh.sound.play('cheer'), 300);
    setTimeout(() => {
      if (f.ev.finished) {
        this.mode = 'end';
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '📿', () => this._start());
      } else this._round(false);
    }, 2300);
  }

  sparkle(at) {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xff7ab8, 0xffffff];
    for (let i = 0; i < 24; i++) {
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.07), new THREE.MeshBasicMaterial({ color: cols[i % 6] }));
      m.position.copy(at);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 1.6, 2 + Math.random() * 2, Math.sin(a) * 1.2), life: 1 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    if (this.mode === 'show') { this.showT -= dt; if (this.showT <= 0) { this.mode = 'showing'; this._showPattern(); } }
    for (const [i, b] of (this.beads || []).entries()) {
      const u = b.userData;
      if (u.pop !== undefined) { u.pop += dt * 3; b.scale.setScalar(Math.max(0, Math.min(1, u.pop)) * (1 + Math.sin(Math.min(1, Math.max(0, u.pop)) * Math.PI) * 0.25)); if (u.pop >= 1) { u.pop = undefined; b.scale.setScalar(1); } }
      if (u.glow > 0) { u.glow = Math.max(0, u.glow - dt * 2.2); b.scale.setScalar(1 + u.glow * 0.3); b.position.y = 0.55 + u.glow * 0.25; }
      else if (u.pop === undefined) b.position.y = 0.55 + (this.dance > 0 ? Math.abs(Math.sin(time * 9 + i * 0.7)) * 0.35 * Math.min(1, this.dance) : 0);
    }
    this.dance = Math.max(0, (this.dance || 0) - dt);
    if (this.gapRing && this.gapRing.visible) { this.gapRing.scale.setScalar(1 + Math.sin(time * 5) * 0.12); this.gapRing.rotation.z = time * 0.8; }
    const hint = this.play && this.mode === 'wait' ? this.play.hint : null;
    for (const [i, o] of (this.options || []).entries()) {
      if (this.flying.some((f) => f.o === o)) continue;
      o.b.rotation.y += dt * (o.id === hint ? 4 : 0.8);
      o.b.position.y = o.base.y + (this.mode === 'wait' ? Math.abs(Math.sin(time * 2.6 + i)) * 0.12 : 0) + (o.id === hint ? Math.abs(Math.sin(time * 6)) * 0.3 : 0);
      if (o.shake > 0) { o.shake -= dt; o.b.position.x = o.base.x + Math.sin(o.shake * 45) * 0.18 * o.shake * 2; }
      o.b.scale.setScalar(1.25 + (this.focus === i && this.mode === 'wait' ? 0.18 : 0) + (o.id === hint ? 0.18 : 0));
    }
    for (let i = this.flying.length - 1; i >= 0; i--) {
      const f = this.flying[i];
      f.t += dt / 0.7;
      const k = Math.min(1, f.t);
      f.o.b.position.lerpVectors(f.from, f.to, k * k * (3 - 2 * k));
      f.o.b.position.y += Math.sin(k * Math.PI) * 1.3;
      f.o.b.scale.setScalar(1.25 - 0.25 * k);
      if (k >= 1) { this.flying.splice(i, 1); this._landed(f); }
    }
    for (let j = this.fx.length - 1; j >= 0; j--) {
      const m = this.fx[j];
      const u = m.userData;
      u.life -= dt;
      u.v.y -= 6 * dt;
      m.position.addScaledVector(u.v, dt);
      if (u.life <= 0) { this.scene.remove(m); m.geometry.dispose(); this.fx.splice(j, 1); }
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

/** A glossy bead of one of the six kinds, a little hole through it for the string. */
function makeBead(id) {
  const def = BEADS.find((b) => b.id === id);
  const mat = new THREE.MeshStandardMaterial({ color: def.color, roughness: 0.25, metalness: 0.05 });
  const g = new THREE.Group();
  let m;
  switch (def.shape) {
    case 'cube': m = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.62, 0.62, 3, 3, 3), mat); rounded(m.geometry, 0.28, 0.1); break;
    case 'star': {
      const sh = new THREE.Shape();
      for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2; const r = i % 2 ? 0.17 : 0.4; sh.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
      m = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 }), mat);
      m.geometry.center();
      break;
    }
    case 'heart': {
      const sh = new THREE.Shape();
      sh.moveTo(0, -0.34); sh.bezierCurveTo(-0.5, 0.0, -0.4, 0.4, 0, 0.18); sh.bezierCurveTo(0.4, 0.4, 0.5, 0.0, 0, -0.34);
      m = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 }), mat);
      m.geometry.center();
      break;
    }
    case 'ring': m = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.14, 14, 28), mat); break;
    case 'drop': m = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 14), mat); m.scale.set(0.85, 1.15, 0.85); break;
    default: m = new THREE.Mesh(new THREE.SphereGeometry(0.36, 22, 16), mat);
  }
  m.castShadow = true;
  g.add(m);
  const shine = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
  shine.position.set(-0.14, 0.18, 0.28);
  g.add(shine);
  return g;
}

function rounded(geo, half, r) {
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const c = new THREE.Vector3(Math.max(-half + r, Math.min(half - r, v.x)), Math.max(-half + r, Math.min(half - r, v.y)), Math.max(-half + r, Math.min(half - r, v.z)));
    const d = v.clone().sub(c);
    if (d.lengthSq() > 0) v.copy(c.add(d.normalize().multiplyScalar(r)));
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
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

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnPattern = api;
export default api;
