// Shared per-game visual effects: particle bursts (sparkles, dust, confetti), ribbon trail, toon outlines. Pure visual helpers.
import * as THREE from 'three';

let _tex = null;
function softTex() {
  if (_tex) return _tex;
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,0.7)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  _tex = new THREE.CanvasTexture(c); _tex.colorSpace = THREE.SRGBColorSpace; return _tex;
}
let _star = null;
function starTex() {
  if (_star) return _star;
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.translate(32, 32); x.fillStyle = '#fff'; x.beginPath();
  for (let i = 0; i < 10; i++) { const r = i % 2 ? 11 : 28, a = -Math.PI / 2 + i * Math.PI / 5; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  x.closePath(); x.fill();
  _star = new THREE.CanvasTexture(c); _star.colorSpace = THREE.SRGBColorSpace; return _star;
}

/** Particle pool: fx.burst(pos, {color, n, speed, size, life, gravity, kind}) */
export class FX {
  constructor(scene, max = 400) {
    this.max = max; this.items = []; this.scene = scene;
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.siz = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.siz, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.NormalBlending, vertexColors: true,
      uniforms: { map: { value: softTex() }, scale: { value: 300 } },
      vertexShader: 'attribute float size; varying vec3 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'uniform sampler2D map; varying vec3 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); if (t.a < 0.02) discard; gl_FragColor = vec4(vC * (0.8 + t.a * 0.6), t.a); }',
    });
    this.points = new THREE.Points(g, mat); this.points.frustumCulled = false; this.points.renderOrder = 998; scene.add(this.points);
    this.geo = g;
  }
  burst(p, o = {}) {
    const n = o.n || 14, c = new THREE.Color(o.color || 0xffd23a), sp = o.speed || 4, life = o.life || 0.6;
    for (let i = 0; i < n; i++) {
      if (this.items.length >= this.max) this.items.shift();
      const a = Math.random() * Math.PI * 2, e = (o.up != null ? o.up : Math.random() - 0.3), r = Math.random() * sp;
      const cc = o.colors ? new THREE.Color(o.colors[i % o.colors.length]) : c;
      this.items.push({ x: p.x, y: p.y, z: p.z, vx: Math.cos(a) * r * (o.flat ? 1 : 0.8), vy: (e * sp * 0.8) + (o.lift || 0), vz: Math.sin(a) * r * (o.flat ? 1 : 0.8) + (o.vz || 0), life, max: life * (0.7 + Math.random() * 0.6), r: cc.r, g: cc.g, b: cc.b, s: (o.size || 0.3) * (0.6 + Math.random() * 0.8), grav: o.gravity != null ? o.gravity : 6 });
    }
  }
  update(dt) {
    const it = this.items; let k = 0;
    for (let i = 0; i < it.length; i++) {
      const q = it[i]; q.life -= dt; if (q.life <= 0) continue;
      q.vy -= q.grav * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
      const f = Math.min(1, q.life / q.max);
      this.pos[k * 3] = q.x; this.pos[k * 3 + 1] = q.y; this.pos[k * 3 + 2] = q.z;
      this.col[k * 3] = q.r; this.col[k * 3 + 1] = q.g; this.col[k * 3 + 2] = q.b; this.siz[k] = q.s * (0.3 + f);
      it[k] = q; k++;
    }
    it.length = k;
    for (let i = k; i < this.max; i++) this.siz[i] = 0;
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true; this.geo.attributes.size.needsUpdate = true;
  }
  setViewportScale(h) { this.points.material.uniforms.scale.value = h * 0.9; }
}

/** Ink outline (inverted hull) on every mesh under obj. Thickness is relative to each mesh's own size. */
export function outline(obj, color = 0x2a1a3a, k = 0.06) {
  const mat = outline._m || (outline._m = new Map());
  let m = mat.get(color); if (!m) { m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide, fog: false }); mat.set(color, m); }
  const add = [];
  obj.traverse((c) => { if (c.isMesh && !c.userData.__ol && c.geometry && c.material && !c.material.transparent && c.material.opacity !== 0) add.push(c); });
  for (const c of add) {
    const o = new THREE.Mesh(c.geometry, m); o.userData.__ol = true; o.scale.setScalar(1 + k); o.renderOrder = -1; c.add(o);
  }
  return obj;
}
