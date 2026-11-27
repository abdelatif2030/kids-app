// Real 3D rink under the 2D sprite layer: lit glossy ice, beveled wooden boards with snow caps, corner lanterns, falling snow.
// Straight-down perspective camera: the ice plane maps 1:1 to screen pixels, so sim/taps/sprites stay exact; the board height gives true depth at the edges.
import * as THREE from 'three';

function iceTexture(W, H) {
  const k = 6, c = document.createElement('canvas'); c.width = W * k; c.height = H * k; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, c.width * 0.5, c.height); gr.addColorStop(0, '#f4fcff'); gr.addColorStop(0.5, '#cfeafb'); gr.addColorStop(1, '#b4dcf5');
  g.fillStyle = gr; g.fillRect(0, 0, c.width, c.height);
  let sd = 11; const R = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  g.lineCap = 'round';
  for (let i = 0; i < 160; i++) { g.strokeStyle = `rgba(255,255,255,${0.3 + R() * 0.5})`; g.lineWidth = 1 + R() * 2; const x = R() * c.width, y = R() * c.height, a = R() * 6.28, l = 20 + R() * 90; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * l * 0.5, y + Math.sin(a) * l * 0.5 + 8, x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
  for (let i = 0; i < 70; i++) { g.strokeStyle = `rgba(100,160,210,${0.12 + R() * 0.15})`; g.lineWidth = 1.5; const x = R() * c.width, y = R() * c.height, a = R() * 6.28, l = 30 + R() * 120; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
  g.lineWidth = 7; g.strokeStyle = 'rgba(60,120,200,.4)'; g.beginPath(); g.moveTo(0, c.height / 2); g.lineTo(c.width, c.height / 2); g.stroke();
  g.strokeStyle = 'rgba(220,60,80,.38)'; g.beginPath(); g.moveTo(0, c.height * 0.2); g.lineTo(c.width, c.height * 0.2); g.moveTo(0, c.height * 0.8); g.lineTo(c.width, c.height * 0.8); g.stroke();
  g.strokeStyle = 'rgba(60,120,200,.4)'; g.beginPath(); g.arc(c.width / 2, c.height / 2, 9 * k, 0, 6.28); g.stroke();
  g.fillStyle = 'rgba(60,120,200,.35)'; g.beginPath(); g.arc(c.width / 2, c.height / 2, 2 * k, 0, 6.28); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function woodTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, '#c58a46'); gr.addColorStop(1, '#8a5222'); g.fillStyle = gr; g.fillRect(0, 0, 256, 64);
  g.strokeStyle = 'rgba(50,25,5,.35)'; g.lineWidth = 2; for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(0, i * 16); g.lineTo(256, i * 16); g.stroke(); }
  for (let x = 0; x < 256; x += 64) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 64); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

export class Rink3D {
  constructor(parent, W, H) {
    this.W = W; this.H = H;
    this.cv = document.createElement('canvas'); this.cv.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none';
    parent.append(this.cv);
    this.r = new THREE.WebGLRenderer({ canvas: this.cv, alpha: true, antialias: true }); this.r.setClearColor(0, 0);
    this.r.outputColorSpace = THREE.SRGBColorSpace; this.r.toneMapping = THREE.ACESFilmicToneMapping; this.r.toneMappingExposure = 1.25;
    this.scene = new THREE.Scene(); this.cam = new THREE.PerspectiveCamera(30, 1, 10, 4000);
    this.root = new THREE.Group(); this.scene.add(this.root);
    this.scene.add(new THREE.HemisphereLight(0xdff0ff, 0x6a7a9a, 1.1));
    const sun = new THREE.DirectionalLight(0xfff0d8, 1.7); sun.position.set(-200, 700, -300); this.scene.add(sun);
    this.lamps = [];
    this.snow = null;
  }
  build(ox, oy, sc) {
    // rebuild geometry in screen-pixel units for the current layout
    while (this.root.children.length) { const o = this.root.children.pop(); o.traverse((m) => { if (m.geometry) m.geometry.dispose(); }); }
    const w = this.W * sc, h = this.H * sc; this.px = { ox, oy, w, h, sc };
    if (!this.ice) this.ice = iceTexture(this.W, this.H);
    if (!this.wood) this.wood = woodTexture();
    const cx = ox + w / 2, cz = oy + h / 2;
    const icem = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: this.ice, emissive: 0xffffff, emissiveMap: this.ice, emissiveIntensity: 0.55, roughness: 0.18, metalness: 0.1 }));
    icem.rotation.x = -Math.PI / 2; icem.position.set(cx, 0, cz); this.root.add(icem);
    const T = sc * 3, Ht = sc * 3.2, wm = new THREE.MeshStandardMaterial({ map: this.wood, roughness: 0.6 }), snowm = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    const box = (bw, bh, bd, x, y, z, m) => { const b = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), m); b.position.set(x, y, z); this.root.add(b); return b; };
    for (const s of [-1, 1]) {
      box(w + T * 2, Ht, T, cx, Ht / 2, cz + s * (h / 2 + T / 2), wm); box(w + T * 2, Ht * 0.28, T * 1.15, cx, Ht + Ht * 0.14, cz + s * (h / 2 + T / 2), snowm);
      box(T, Ht, h, cx + s * (w / 2 + T / 2), Ht / 2, cz, wm); box(T * 1.15, Ht * 0.28, h, cx + s * (w / 2 + T / 2), Ht + Ht * 0.14, cz, snowm);
    }
    // snow drift on the ice just inside the boards + glowing blue edge line
    const edgeM = new THREE.MeshBasicMaterial({ color: 0x7fd0ff, transparent: true, opacity: 0.55 });
    box(w, 0.6, sc * 0.35, cx, 0.4, oy + sc * 0.2, edgeM); box(w, 0.6, sc * 0.35, cx, 0.4, oy + h - sc * 0.2, edgeM);
    // corner lanterns
    for (const l of this.lamps) this.scene.remove(l); this.lamps = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const x = cx + sx * (w / 2 + T * 0.5), z = cz + sz * (h / 2 + T * 0.5);
      box(T * 0.55, Ht * 3.2, T * 0.55, x, Ht * 1.6, z, wm);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(T * 0.55, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffe9a0 })); bulb.position.set(x, Ht * 3.5, z); this.root.add(bulb);
      const pl = new THREE.PointLight(0xffd890, 2.2, w * 0.9, 1.5); pl.position.set(x - sx * T, Ht * 4, z - sz * T); this.scene.add(pl); this.lamps.push(pl);
    }
    // string lights along the top board
    const gm = [0xff5a5a, 0xffd23a, 0x5ac8ff, 0x8aff7a];
    for (let i = 0; i < 14; i++) { const x = ox + (i + 0.5) / 14 * w; const b = new THREE.Mesh(new THREE.SphereGeometry(T * 0.22, 10, 8), new THREE.MeshBasicMaterial({ color: gm[i % 4] })); b.position.set(x, Ht * 1.9 + Math.sin(i * 1.7) * 2, oy - T * 0.5); this.root.add(b); }
    if (!this.snow) {
      const n = 160, pos = new Float32Array(n * 3); this.snowSeed = []; for (let i = 0; i < n; i++) this.snowSeed.push([Math.random(), Math.random(), Math.random()]);
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      this.snow = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 5, transparent: true, opacity: 0.85, depthWrite: false })); this.scene.add(this.snow);
    }
  }
  resize(cw, ch, dpr) {
    this.cw = cw; this.ch = ch; this.r.setPixelRatio(dpr); this.r.setSize(cw, ch, false);
    this.D = 900; this.cam.aspect = cw / ch; this.cam.fov = 2 * Math.atan(ch / 2 / this.D) * 180 / Math.PI; this.cam.updateProjectionMatrix();
    this.cam.position.set(cw / 2, this.D, ch / 2); this.cam.up.set(0, 0, -1); this.cam.lookAt(cw / 2, 0, ch / 2);
  }
  render(t) {
    if (this.snow) {
      const p = this.snow.geometry.attributes.position.array, n = this.snowSeed.length;
      for (let i = 0; i < n; i++) { const s = this.snowSeed[i]; const y = 420 - ((t * (30 + s[2] * 40) + s[1] * 420) % 420); p[i * 3] = s[0] * this.cw + Math.sin(t + i) * 12; p[i * 3 + 1] = y + 4; p[i * 3 + 2] = ((s[2] * 7.3 + s[1]) % 1) * this.ch; }
      this.snow.geometry.attributes.position.needsUpdate = true;
    }
    this.r.render(this.scene, this.cam);
  }
}
