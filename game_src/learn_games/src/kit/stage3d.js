// A small 3D stage shared by the rebuilt learning games: renderer, scene, soft light, a camera that always fits the
// scene's box on any screen, tapping on things (ray picks, with keyboard arrows + Enter as the other way in), little
// confetti, and the draw loop. A game adds its own models and calls `onFrame`.
import * as THREE from 'three';
import { polish } from './realism.js';

export function canvasTex(w, hh, draw, repeat) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = hh;
  draw(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}

export const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, ...o });

/** A rounded text label as a flat sprite texture (letters, numbers). */
export function labelTex(text, { size = 160, color = '#3a2a5a', bg = null, font = '900' } = {}) {
  return canvasTex(256, 256, (g) => {
    if (bg) { g.fillStyle = bg; g.beginPath(); g.arc(128, 128, 120, 0, Math.PI * 2); g.fill(); }
    g.fillStyle = color;
    g.font = `${font} ${size}px Tajawal, sans-serif`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(text, 128, 138);
  });
}

export class Stage {
  /**
   * @param sh the Shell. @param o { bg, ground (hemisphere ground colour), fov, box: [halfWidth, halfHeight],
   * dir: [x,y,z] direction from the target to the camera, target: [x,y,z] }
   */
  constructor(sh, o = {}) {
    this.sh = sh;
    this.o = { bg: 0xdff3ff, ground: 0xd8c8a8, fov: 40, box: [5, 3], dir: [0, 0.45, 0.9], target: [0, 0.8, 0], ...o };
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.localClippingEnabled = true; // used by the walk between places (worlds3d seam)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    polish(this.renderer, this.scene);
    this.scene.background = new THREE.Color(this.o.bg);
    this.camera = new THREE.PerspectiveCamera(this.o.fov, 1, 0.1, 120);
    this.scene.add(new THREE.HemisphereLight(0xffffff, this.o.ground, 1.6));
    const sun = new THREE.DirectionalLight(0xfff4e0, 2);
    sun.position.set(-3, 9, 7);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 7, bottom: -7, near: 1, far: 34 });
    this.scene.add(sun);
    this.fx = [];
    this.picks = [];
    this.focus = null;
    this.mode = 'title';
    this.clock = new THREE.Clock();
    this.frames = [];
    sh.onResize = (w, hh) => this.resize(w, hh);
    this.resize(sh.w, sh.h);
    this._bind();
    this._loop();
  }

  add(...o) { this.scene.add(...o); return o[0]; }

  resize(w, hh) {
    const r = this.renderer;
    r.setSize(w, hh, false);
    r.domElement.style.width = '100%';
    r.domElement.style.height = '100%';
    const c = this.camera;
    c.aspect = w / hh;
    c.updateProjectionMatrix();
    const t = Math.tan(THREE.MathUtils.degToRad(c.fov / 2));
    // [wide] (owner 2026-11-13): on a wide screen (a phone held sideways) the camera pulls back so the WHOLE scenery shows (windmill,
    // house, trees, pond, everything); on a narrow screen it keeps the tighter frame around the play area
    const wide = this.o.wide && c.aspect >= (this.o.wide.minAspect ?? 1.45) ? this.o.wide : null;
    const box = wide ? wide.box : this.o.box;
    const d = Math.max(box[1] / t, box[0] / (t * c.aspect));
    const dir = new THREE.Vector3(...this.o.dir).normalize();
    const target = new THREE.Vector3(...(wide ? wide.target : this.o.target));
    c.position.copy(target).addScaledVector(dir, d);
    c.lookAt(target);
  }

  /** The things the child may tap now: [{ hit: Mesh with userData.id }, ...] and the callback(id). */
  setPicks(list, cb) { this.picks = list; this.onPick = cb; if (this.focus != null && this.focus >= list.length) this.focus = null; }

  _bind() {
    const root = this.sh.root;
    this._up = (e) => {
      if (this.mode !== 'wait' || !this.picks.length || e.target.closest('button') || e.target.closest('.lk-dim')) return;
      const r = root.getBoundingClientRect();
      const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, this.camera);
      const hit = ray.intersectObjects(this.picks.map((p) => p.hit), false)[0];
      if (hit) this.onPick(hit.object.userData.id);
    };
    root.addEventListener('pointerup', this._up);
    this._key = (e) => {
      if (this.mode !== 'wait' || !this.picks.length) return;
      const n = this.picks.length;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        this.focus = ((this.focus ?? (e.key === 'ArrowRight' ? -1 : 0)) + (e.key === 'ArrowRight' ? 1 : -1) + n) % n;
        this.sh.sound.play('tap');
      } else if ((e.key === 'Enter' || e.key === ' ') && this.focus != null) {
        e.preventDefault();
        this.onPick(this.picks[this.focus].hit.userData.id);
      }
    };
    window.addEventListener('keydown', this._key);
  }

  focusedId() { return this.focus != null && this.picks[this.focus] ? this.picks[this.focus].hit.userData.id : null; }

  sparkle(at, n = 22) {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xffffff];
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.06), new THREE.MeshBasicMaterial({ color: cols[i % 5] }));
      m.position.copy(at);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 1.5, 2 + Math.random() * 2, Math.sin(a) * 1.2), life: 1 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  onFrame(fn) { this.frames.push(fn); }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    for (const f of this.frames) f(dt, time);
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

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('keydown', this._key);
    this.sh.root.removeEventListener('pointerup', this._up);
    this.renderer.dispose();
  }
}
