// «سليم وكنوز الفراعنة» — Salim and the Pharaohs' Treasure. Entry: window.TombPuzzle.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3/4-view Egyptian tomb puzzle adventure (three.js, everything drawn in code): walk the little explorer through 20 rooms in 5 tombs,
// push stone blocks onto sun plates to open doors, fill pits, collect 8 ankh keys per tomb, light braziers, open locked doors and
// beware of the crumbling floor. Undo, reset, hints and stars. Arabic (RTL) and English. No network, no ads, no tracking.
import * as THREE from 'three';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const TOMB_CLIPS = { go: 2, pickup: 2, trick: 2, charge: 2, bump: 2, win: 2, lose: 2 };
import { parseLevel, Puzzle, step, stateKey, hintMove, starsFor, normalizeSave, museumEntries, cloneState, doorOpen, gateOpen, lockOpen, groupPressed, DIR_KEYS, DIRS, T } from './sim.js';
import { LEVELS, TOMBS } from './levels.js';
import { Sound } from './audio.js';
import * as TX from './textures.js';
import { geo, M, mesh, Mesher, makeExplorer, makeBlock, makeKey, makeBrazier, makePlate, makeDoor, makeExit, makeArrow, makePit, GRP_COL, GRP_CSS } from './models.js';

const S = {
  title: ['سليم وكنوز الفراعنة', 'Salim and the Pharaohs\' Treasure'], sub: ['مغامرة سليم المستكشف الصغير', 'Little Salim the explorer\'s adventure'], play: ['العب', 'PLAY'], cont: ['كمّل', 'CONTINUE'], levels: ['المراحل', 'LEVELS'],
  quit: ['خروج', 'QUIT'], back: ['رجوع', 'Back'], sound: ['الصوت', 'Sound'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'], restart: ['من الأول', 'RESTART'], home: ['القائمة', 'MENU'],
  moves: ['حركات', 'Moves'], par: ['الأفضل', 'Par'], keysWord: ['المفاتيح', 'Keys'], next: ['المرحلة التالية', 'NEXT ROOM'], replay: ['العب تاني', 'PLAY AGAIN'],
  won: ['وصلت للمخرج! 🏆', 'You found the exit! 🏆'], select: ['اختار الغرفة', 'CHOOSE A ROOM'], locked: ['خلّص الغرفة اللي قبلها', 'Finish the room before'], room: ['غرفة', 'Room'],
  st1: ['وصلت للمخرج', 'Reached the exit'], st2: ['وجدت مفتاح عنخ', 'Found an ankh key'], st3: ['جمعت كل مفاتيح الغرفة', 'Found every key in the room'], sparkle: ['✨ بريق الأفضل: خلّصت بأقل حركات!', '✨ Best-moves sparkle: fewest moves!'],
  fall: ['انهارت الأرض! نبدأ الغرفة من جديد', 'The floor gave way! Back to the start'], stuck: ['اضغط ↩ للرجوع خطوة', 'Tap ↩ to step back'], deadRoom: ['الغرفة اتعقدت! دوس ↩ ترجع خطوة أو 🔄 تبدأ من الأول', 'This room is jammed! Tap ↩ to step back or 🔄 to restart'], thatWay: ['جرّب هذا الاتجاه!', 'Try this way!'],
  bLock: ['الباب يحتاج مفتاحاً', 'This door needs a key'], bDoor: ['الباب مغلق: اضغط القرص الذهبي', 'Door closed: press the golden plate'], bGate: ['أشعل كل المشاعل لتفتح البوابة', 'Light every torch to open the gate'],
  bPit: ['حفرة! ادفع حجراً فيها', 'A pit! Push a block into it'], bBlock: ['الحجر لا يتحرك هناك', 'The block can\'t move there'], bBraz: ['المشعل مضاء', 'Already lit'],
  doorOpened: ['انفتح الباب!', 'A door opened!'], gateOpened: ['انفتحت البوابة!', 'The gate opened!'], keyFound: ['وجدت مفتاح عنخ!', 'Found an ankh key!'], fin: ['أنت بطل المقابر! 🌟', 'You are the tomb hero! 🌟'],
  tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], undo: ['تراجع', 'Undo'], reset: ['إعادة الغرفة', 'Reset room'], hintB: ['تلميح', 'Hint'], pause: ['استراحة', 'Pause'],
  how: ['اسحب بإصبعك أو اضغط على المربع لتتحرك. ادفع الأحجار، اجمع المفاتيح، واصل للمخرج', 'Drag or tap a tile to move. Push blocks, collect keys, reach the exit'],
  tombKeys: ['مفاتيح المقبرة', 'Tomb keys'],
  museum: ['كتاب المتحف', 'MUSEUM BOOK'], museumSub: ['كل مقبرة تخلّصها بتبقى معرض في المتحف!', 'Every tomb you finish becomes a museum exhibit!'],
  museumLocked: ['لسه مقفول — خلّص كل غرف المقبرة عشان تفتحه', 'Still locked — finish every room in this tomb to open it'], museumStars: ['نجوم المقبرة', 'Tomb stars'],
};
const I = makeI18n(S);
const CSS = css('tp', '#6a3f1a', '#2a160a', '#ffd25a') + `
.tp-root{background:#1c120b}
.tp-banner{position:absolute;left:50%;top:calc(var(--u)*20);transform:translateX(-50%);max-width:92%;background:linear-gradient(180deg,#4a2a12,#2a160a);border:calc(var(--u)*.6) solid #ffd25a;border-radius:calc(var(--u)*3);color:#ffe9a8;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1.4) calc(var(--u)*4);text-align:center;opacity:0;transition:opacity .35s;pointer-events:none;box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(0,0,0,.5);line-height:1.25}
.tp-banner.show{opacity:1}
.tp-ank{width:calc(var(--u)*5);height:calc(var(--u)*5)}
.tp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.6);width:100%}
.tp-tomb{width:100%;display:flex;flex-direction:column;gap:calc(var(--u)*1.2)}
.tp-th{display:flex;justify-content:space-between;align-items:center;font-weight:900;font-size:calc(var(--u)*4.2);color:#ffd25a;padding:0 calc(var(--u)*1)}
.tp-lvb{border:calc(var(--u)*.4) solid rgba(255,255,255,.7);font-family:inherit;border-radius:calc(var(--u)*3);color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*5);min-height:calc(var(--u)*17);cursor:pointer;justify-content:center}
.tp-lvb small{font-size:calc(var(--u)*3);letter-spacing:calc(var(--u)*.2)}
.tp-lvb.lock{filter:grayscale(1) brightness(.55);cursor:default}
.tp-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.8);gap:calc(var(--u)*2)}
.tp-row.off{opacity:.45}
.tp-bot{gap:calc(var(--u)*4)}
.tp-bot .tp-round{width:calc(var(--u)*13);height:calc(var(--u)*13);font-size:calc(var(--u)*6)}
.tp-star{display:inline-block;font-size:calc(var(--u)*13);transform:scale(0);animation:tpstar .5s forwards}
.tp-star.off{filter:grayscale(1);opacity:.3}
@keyframes tpstar{70%{transform:scale(1.25)}100%{transform:scale(1)}}
.tp-pill.big{font-size:calc(var(--u)*4.4)}
.tp-museum{display:flex;flex-direction:column;gap:calc(var(--u)*2);width:100%;max-height:62vh;overflow-y:auto}
.tp-exhibit{border:calc(var(--u)*.5) solid #ffd25a;border-radius:calc(var(--u)*3);background:linear-gradient(180deg,rgba(74,42,18,.92),rgba(42,22,10,.92));padding:calc(var(--u)*2.4) calc(var(--u)*3);color:#ffe9a8;text-align:start}
.tp-exhibit .ic{font-size:calc(var(--u)*8);line-height:1}
.tp-exhibit .nm{font-weight:900;font-size:calc(var(--u)*4.6);color:#ffd25a}
.tp-exhibit .alt{font-size:calc(var(--u)*3.2);opacity:.75;font-weight:700}
.tp-exhibit .fact{font-size:calc(var(--u)*3.6);line-height:1.45;margin-top:calc(var(--u)*1)}
.tp-exhibit .meta{display:flex;gap:calc(var(--u)*3);align-items:center;font-weight:900;font-size:calc(var(--u)*3.6);margin-top:calc(var(--u)*1.2);flex-wrap:wrap}
.tp-exhibit .meta span{white-space:nowrap}
.tp-exhibit.lock{border-color:rgba(255,255,255,.35);color:#cfc4b2}
.tp-exhibit.lock .ic{filter:grayscale(1) brightness(.45)}
.tp-exhibit.lock .nm{color:#b8ab94}
.tp-exhibit.lock .fact{opacity:.8}
`;



const TOMB_LOOK = ['sand', 'gold', 'moon', 'tut', 'hat'];
const TOMB_BTN = ['linear-gradient(180deg,#e8b868,#a8702a)', 'linear-gradient(180deg,#f4d048,#b88a10)', 'linear-gradient(180deg,#8aa0e8,#3a4c9a)', 'linear-gradient(180deg,#f7dc6a,#a87b12)', 'linear-gradient(180deg,#eec39a,#b0763f)'];
const ANKH_SVG = '<svg class="tp-ank" viewBox="0 0 24 24" fill="none" stroke="#ffd25a" stroke-linecap="round"><ellipse cx="12" cy="7" rx="4.6" ry="5.6" stroke-width="2.4"/><path d="M12 12.8V23M6 16h12" stroke-width="2.8"/></svg>';
const FACE = { U: Math.PI, D: 0, L: -Math.PI / 2, R: Math.PI / 2 }; // explorer model faces +z (south)
const ARROW_Y = { U: 0, L: Math.PI / 2, D: Math.PI, R: -Math.PI / 2 };
const MOVE_CD = 0.15;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.base = config.base || './';
    this.save = normalizeSave(config.save);
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: TOMB_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('tp-style')) document.head.append(h('style', { id: 'tp-style' }, CSS));
    this.root = h('div', { class: 'tp-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'tp-layer' });
    this.mode = 'menu'; this.clock = 0; this.cd = 0; this.buf = null; this.fx = []; this.texCache = {}; this.extCache = {}; this.extWanted = null;
    this.vs = null; this.lastBanner = ''; this.lastBumpT = 0;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  // ---------- three.js ----------
  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.5, 200);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x886644, 2.2); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffe0b0, 2.0); this.sun.position.set(-6, 14, 4); this.scene.add(this.sun);
    this.pl = new THREE.PointLight(0xffa850, 5, 8, 1.6); this.scene.add(this.pl);
    this.bl = []; for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xff9a40, 0, 7, 1.7); this.scene.add(l); this.bl.push(l); }
    this.stage = new THREE.Group(); this.scene.add(this.stage);
    this.glowTex = TX.makeGlowTex('255,200,110'); this.shadowTex = TX.makeShadowTex(); this.arrowTex = TX.makeArrowTex();
    this.exp = makeExplorer(); this.scene.add(this.exp);
    this.expShadow = mesh(geo.plane, new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false }), 0, 0.02, 0, 0.9, 0.9, 1); this.expShadow.rotation.x = -Math.PI / 2; this.scene.add(this.expShadow);
    this.hintArrow = makeArrow(this.arrowTex); this.hintArrow.scale.set(0.8, 0.8, 1); this.hintArrow.visible = false; this.hintArrow.rotation.order = 'YXZ'; this.scene.add(this.hintArrow);
    // sparkle pool + dust
    this.sparks = [];
    for (let i = 0; i < 48; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); s.visible = false; s.userData = { life: 0 }; this.scene.add(s); this.sparks.push(s); }
    const dg = new THREE.BufferGeometry(); const dp = new Float32Array(90 * 3); for (let i = 0; i < 90; i++) { dp[i * 3] = Math.random() * 10; dp[i * 3 + 1] = Math.random() * 3; dp[i * 3 + 2] = Math.random() * 10; } dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    this.dust = new THREE.Points(dg, new THREE.PointsMaterial({ map: this.glowTex, size: 0.18, transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })); this.dust.frustumCulled = false; this.scene.add(this.dust);
  }

  _tex(look) {
    if (this.texCache[look]) return this.texCache[look];
    const P = TX.PAL[look];
    const t = { P, floor: TX.makeFloorTex(P), crumble: TX.makeCrumbleTex(P), wallSide: TX.makeWallSideTex(P), wallTop: TX.makeWallTopTex(P), carpet: TX.makeCarpetTex(P), block: TX.makeBlockTex(P), plate: [0, 1, 2, 3].map((g) => TX.makePlateTex(GRP_CSS[g])), door: [0, 1, 2, 3].map((g) => TX.makeDoorTex(GRP_CSS[g])), lock: TX.makeDoorTex('#fff', 'lock'), gate: TX.makeDoorTex('#fff', 'gate') };
    return (this.texCache[look] = t);
  }

  /** Menu / tomb-map backdrop from the shared art pool (assets/games/art/ via ../art/). Graceful fallback: if the
   *  picture fails to load, the tomb's own rendered background stays exactly as it was — no broken screen. In-tomb
   *  screens never use this: _build() always restores the tomb's own colour background when a room starts. */
  _exterior(name) {
    this.extWanted = name;
    const hit = this.extCache[name];
    if (hit) { this.scene.background = hit; return; }
    TX.loadExteriorTex(`${this.base}../art/${name}`, (t) => {
      this.extCache[name] = t;
      if (this.extWanted === name) this.scene.background = t;
    }, () => { /* pool picture missing: keep the existing background */ });
  }

  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.updateProjectionMatrix();
    this._fit();
  }

  /** Frames the whole room between the top bar and the bottom buttons. */
  _fit() {
    const L = this.L; if (!L) return;
    const cam = this.camera; const el = 60 * Math.PI / 180; const dir = new THREE.Vector3(0, Math.sin(el), Math.cos(el));
    const corners = []; for (const x of [0, L.w]) for (const z of [0, L.h]) for (const y of [0, 1.5]) corners.push(new THREE.Vector3(x, y, z));
    const portrait = this.cw < this.ch; const top = portrait ? 0.74 : 0.72; const bot = portrait ? -0.7 : -0.68; const sx = 0.94;
    const target = new THREE.Vector3(L.w / 2, 0, L.h / 2);
    const bounds = (d) => { cam.position.copy(target).addScaledVector(dir, d); cam.lookAt(target); cam.updateMatrixWorld(); cam.updateProjectionMatrix(); let mnx = 9, mxx = -9, mny = 9, mxy = -9; for (const c of corners) { const p = c.clone().project(cam); mnx = Math.min(mnx, p.x); mxx = Math.max(mxx, p.x); mny = Math.min(mny, p.y); mxy = Math.max(mxy, p.y); } return { mnx, mxx, mny, mxy }; };
    let lo = 4; let hi = 120;
    for (let i = 0; i < 20; i++) { const d = (lo + hi) / 2; const b = bounds(d); const ok = b.mxx <= sx && b.mnx >= -sx && (b.mxy - b.mny) <= (top - bot); if (ok) hi = d; else lo = d; }
    const d = hi;
    for (let i = 0; i < 8; i++) { const b = bounds(d); const mid = (b.mxy + b.mny) / 2; const want = (top + bot) / 2; target.z -= (mid - want) * d * 0.38; }
    bounds(d);
    this.baseCam = { pos: cam.position.clone(), target: target.clone() };
  }

  // ---------- level building ----------
  _clearStage() {
    this.stage.traverse((o) => { if (o.geometry && o.userData.own) o.geometry.dispose(); });
    this.stage.clear();
    this.blockMeshes = new Map(); this.tiles = new Map(); this.plateM = []; this.doorM = []; this.lockM = []; this.gateM = []; this.torchM = []; this.keyM = []; this.exitM = null; this.arrowM = [];
  }

  _build(idx) {
    this.idx = idx; const def = LEVELS[idx]; const L = this.L = parseLevel(def); this.P = new Puzzle(L); this.vs = null;
    const look = TOMB_LOOK[def.tomb]; const tx = this.tx = this._tex(look); const Pal = tx.P;
    this._clearStage();
    this.scene.background = new THREE.Color(Pal.bg);
    this.hemi.color.set(Pal.amb); this.hemi.groundColor.set(Pal.ambG); this.hemi.intensity = Pal.ambI * 1.35; this.sun.color.set(Pal.sun); this.sun.intensity = Pal.sunI * 1.15;
    this.pl.color.set(Pal.torch);
    const { w, h: hh } = L; const st = this.stage;
    const floorM = new Mesher(); const carpetM = new Mesher(); const wallSide = new Mesher(); const wallTop = new Mesher();
    const isWall = (x, y) => x < 0 || y < 0 || x >= w || y >= hh || !!L.wall[y * w + x];
    const dynSet = new Set(L.dyn);
    const tall = (x, y) => { for (let yy = 0; yy < y; yy++) for (let xx = x - 1; xx <= x + 1; xx++) if (!isWall(xx, yy)) return false; return true; };
    const wh = (x, y) => (isWall(x, y) ? (tall(x, y) ? 1.5 : 0.62) : 0);
    this.tallTorches = [];
    for (let y = 0; y < hh; y++) {
      for (let x = 0; x < w; x++) {
        const i = y * w + x;
        if (!L.wall[i]) {
          if (!dynSet.has(i)) floorM.quad([x, 0, y], [x, 0, y + 1], [x + 1, 0, y + 1], [x + 1, 0, y], [0, 1, 0], [[0, 1], [0, 0], [1, 0], [1, 1]]);
          if (L.carpet[i]) {
            const horiz = L.carpet[y * w + x - 1] || L.carpet[y * w + x + 1]; const vert = (y > 0 && L.carpet[i - w]) || (y < hh - 1 && L.carpet[i + w]);
            const uvs = horiz && !vert ? [[0, 0], [1, 0], [1, 1], [0, 1]] : [[0, 1], [0, 0], [1, 0], [1, 1]];
            carpetM.quad([x, 0.012, y], [x, 0.012, y + 1], [x + 1, 0.012, y + 1], [x + 1, 0.012, y], [0, 1, 0], uvs);
          }
          continue;
        }
        let near = false; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (!isWall(x + dx, y + dy)) near = true;
        if (!near) continue;
        const H = wh(x, y);
        wallTop.quad([x, H, y], [x, H, y + 1], [x + 1, H, y + 1], [x + 1, H, y], [0, 1, 0], [[0, 1], [0, 0], [1, 0], [1, 1]]);
        const face = (nx, ny, a, b, c, d, n) => { const nh = wh(nx, ny); if (H > nh) { const f = nh / H; const lerp = (p, q) => [p[0], nh, p[2]]; wallSide.quad(lerp(a), lerp(b), c, d, n, [[0, 0], [1, 0], [1, 1], [0, 1]]); void f; } };
        face(x, y + 1, [x, 0, y + 1], [x + 1, 0, y + 1], [x + 1, H, y + 1], [x, H, y + 1], [0, 0, 1]);
        face(x, y - 1, [x + 1, 0, y], [x, 0, y], [x, H, y], [x + 1, H, y], [0, 0, -1]);
        face(x + 1, y, [x + 1, 0, y + 1], [x + 1, 0, y], [x + 1, H, y], [x + 1, H, y + 1], [1, 0, 0]);
        face(x - 1, y, [x, 0, y], [x, 0, y + 1], [x, H, y + 1], [x, H, y], [-1, 0, 0]);
        if (H > 1 && !isWall(x, y + 1) && (x + y) % 2 === 0) this.tallTorches.push([x + 0.5, y + 1]);
      }
    }
    const addMesh = (mb, material) => { if (mb.empty) return; const g = mb.build(); const m = new THREE.Mesh(g, material); m.userData.own = true; st.add(m); return m; };
    addMesh(floorM, new THREE.MeshLambertMaterial({ map: tx.floor, side: THREE.DoubleSide }));
    addMesh(carpetM, new THREE.MeshLambertMaterial({ map: tx.carpet, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 }));
    addMesh(wallSide, new THREE.MeshLambertMaterial({ map: tx.wallSide, side: THREE.DoubleSide }));
    addMesh(wallTop, new THREE.MeshLambertMaterial({ map: tx.wallTop, side: THREE.DoubleSide }));
    for (const [tx0, tz0] of this.tallTorches) {
      const g = new THREE.Group(); g.position.set(tx0, 0, tz0 + 0.04);
      g.add(mesh(geo.box, M(0x5a3a1a), 0, 0.95, 0, 0.1, 0.34, 0.1), mesh(geo.cone, new THREE.MeshBasicMaterial({ color: 0xffa030 }), 0, 1.25, 0, 0.18, 0.3, 0.18));
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: Pal.torch })); sp.scale.set(1.5, 1.5, 1); sp.position.set(0, 1.25, 0.1); g.add(sp); g.userData.sp = sp; g.userData.flame = g.children[1];
      st.add(g); this.torchM.push({ wall: true, g });
    }
    // dynamic tiles
    for (const c of L.dyn) {
      const x = c % w; const z = (c / w) | 0; const g = new THREE.Group(); g.position.set(x + 0.5, 0, z + 0.5);
      const top = new THREE.MeshLambertMaterial({ map: tx.floor }); const side = new THREE.MeshLambertMaterial({ color: 0x6a4a28 });
      const slab = new THREE.Mesh(geo.box, [side, side, top, side, side, side]); slab.scale.set(0.99, 0.3, 0.99); slab.position.y = -0.15; g.add(slab);
      const pit = makePit(); g.add(pit); g.userData = { slab, pit, top, shown: -1, fallT: -1, popT: -1, cell: c };
      st.add(g); this.tiles.set(c, g);
    }
    // keys
    for (const c of L.keyCells) { const k = makeKey(); k.position.set((c % w) + 0.5, 0.5, ((c / w) | 0) + 0.5); st.add(k); this.keyM.push(k); const sh = mesh(geo.plane, new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false }), 0, -0.47, 0, 0.5, 0.5, 1); sh.rotation.x = -Math.PI / 2; k.add(sh); }
    // plates, doors, locks, gates, braziers, exit
    for (let g = 0; g < 4; g++) for (const c of L.platesByGrp[g]) { const p = makePlate(tx.plate[g], GRP_COL[g]); p.position.set((c % w) + 0.5, 0, ((c / w) | 0) + 0.5); st.add(p); this.plateM.push({ g: p, c, grp: g, y: 0 }); }
    for (const c of L.doors) { const grp = L.doorAt[c]; const d = makeDoor(tx.door[grp], GRP_COL[grp]); d.position.set((c % w) + 0.5, 0, ((c / w) | 0) + 0.5); st.add(d); this.doorM.push({ g: d, c, open: 0, grp }); }
    for (const c of L.lockCells) { const d = makeDoor(tx.lock, 0xf4c430); d.position.set((c % w) + 0.5, 0, ((c / w) | 0) + 0.5); st.add(d); this.lockM.push({ g: d, c, open: 0 }); }
    for (const c of L.gateCells) { const d = makeDoor(tx.gate, 0xff9020); d.position.set((c % w) + 0.5, 0, ((c / w) | 0) + 0.5); st.add(d); this.gateM.push({ g: d, c, open: 0 }); }
    for (const c of L.torchCells) { const b = makeBrazier(); b.position.set((c % w) + 0.5, 0, ((c / w) | 0) + 0.5); const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: Pal.torch, opacity: 0 })); sp.scale.set(1.7, 1.7, 1); sp.position.y = 1.1; b.add(sp); b.userData.sp = sp; st.add(b); this.torchM.push({ g: b, c, lit: false }); }
    this.exitM = makeExit(this.glowTex); this.exitM.position.set((L.exit % w) + 0.5, 0, ((L.exit / w) | 0) + 0.5); st.add(this.exitM);
    this.exitArrow = makeArrow(this.arrowTex); this.exitArrow.scale.set(0.55, 0.55, 1); this.exitArrow.rotation.order = 'YXZ'; this.exitArrow.rotation.set(-Math.PI / 2, 0, 0); this.exitArrow.visible = false; st.add(this.exitArrow);
    for (const [ax, ay, d] of L.arrows) { const m = makeArrow(this.arrowTex); m.rotation.order = 'YXZ'; m.rotation.set(-Math.PI / 2, ARROW_Y[d], 0); m.position.set(ax + 0.5, 0.03, ay + 0.5); m.scale.set(0.5, 0.5, 1); st.add(m); this.arrowM.push(m); }
    this._syncBlocks(true);
    this._snapExplorer();
    this.pl.position.set(this.exp.position.x, 1.5, this.exp.position.z + 0.3);
    this._fit();
    this.dust.position.set(-1, 0, -1);
  }

  _blockMesh() { const m = makeBlock(this.tx.block); const sh = mesh(geo.plane, new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false }), 0, 0.02, 0, 1.25, 1.25, 1); sh.rotation.x = -Math.PI / 2; m.add(sh); this.stage.add(m); return m; }
  _syncBlocks(snap) {
    for (const m of this.blockMeshes.values()) this.stage.remove(m);
    this.blockMeshes = new Map(); const w = this.L.w; const s = this.vs || this.P.s;
    for (const c of s.blocks) { const m = this._blockMesh(); m.position.set((c % w) + 0.5, 0, ((c / w) | 0) + 0.5); m.userData = { tx: m.position.x, tz: m.position.z, tg: 0 }; this.blockMeshes.set(c, m); }
    void snap;
  }
  _snapExplorer() { const s = this.vs || this.P.s; const w = this.L.w; this.exX = this.exTX = (s.p % w) + 0.5; this.exZ = this.exTZ = ((s.p / w) | 0) + 0.5; this.face = 0; this.exp.rotation.y = 0; this.exp.position.set(this.exX, 0, this.exZ); this.exp.scale.setScalar(1); this.exp.visible = true; this.jumpT = -1; }

  // ---------- input ----------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => { if (e.target.closest('button') || this.mode !== 'play' || this.paused) return; this.drag = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false, dir: null, rep: 0 }; this.auto = null; });
    this.root.addEventListener('pointermove', (e) => {
      const d = this.drag; if (!d || this.mode !== 'play' || this.paused) return;
      const dx = e.clientX - d.x; const dy = e.clientY - d.y; const Th = this.u * 5;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < Th) { if (d.moved && Math.max(Math.abs(dx), Math.abs(dy)) < Th * 0.5) d.dir = null; return; }
      const dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'R' : 'L') : (dy > 0 ? 'D' : 'U');
      if (!d.moved || dir !== d.dir) { d.moved = true; d.dir = dir; d.rep = performance.now() + 260; this._want(dir); }
    });
    this.root.addEventListener('pointerup', (e) => {
      const d = this.drag; this.drag = null;
      if (!d || d.moved || this.mode !== 'play' || this.paused) return;
      if (performance.now() - d.t < 500 && Math.hypot(e.clientX - d.x, e.clientY - d.y) < this.u * 3) this._tap(e.clientX, e.clientY);
    });
    this.root.addEventListener('pointercancel', () => { this.drag = null; });
    this._onKey = (e) => {
      if (this.mode !== 'play') return;
      const k = e.key.toLowerCase(); const map = { arrowup: 'U', w: 'U', arrowdown: 'D', s: 'D', arrowleft: 'L', a: 'L', arrowright: 'R', d: 'R' };
      if (map[k]) { e.preventDefault(); this.auto = null; this._want(map[k]); } else if (k === 'z' || k === 'u') this.undo(); else if (k === 'r') this.resetRoom(); else if (k === 'h') this.showHint(); else if (k === 'p' || k === 'escape') this.togglePause();
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _want(dir) { this.buf = dir; }

  _tap(cx, cy) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, this.camera);
    const pt = new THREE.Vector3(); if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), pt)) return;
    const L = this.L; const x = Math.floor(pt.x); const y = Math.floor(pt.z); if (x < 0 || y < 0 || x >= L.w || y >= L.h) return;
    const cell = y * L.w + x; const s = this.P.s; const px = s.p % L.w; const py = (s.p / L.w) | 0;
    if (cell === s.p) return;
    if (Math.abs(px - x) + Math.abs(py - y) === 1) { this._want(x > px ? 'R' : x < px ? 'L' : y > py ? 'D' : 'U'); return; }
    const path = this._path(cell);
    if (path && path.length) { this.auto = path; this._want(this.auto.shift()); } else this.banner(I.t('bBlock'), 1200);
  }

  /** Walk-only route to a tapped tile (never pushes blocks, lights braziers or opens locks by itself). */
  _path(goal) {
    const L = this.L; const start = this.P.s; const seen = new Set([stateKey(L, start)]); const q = [{ s: start, path: '' }];
    for (let i = 0; i < q.length && i < 6000; i++) {
      const n = q[i];
      for (const d of DIR_KEYS) {
        const r = step(L, n.s, d);
        if (!r.changed || r.fell || r.s.won && r.s.p !== goal) continue;
        if (r.ev.some((e) => e.type === 'push' || e.type === 'light' || e.type === 'unlock')) continue;
        if (r.s.p === goal) return (n.path + d).split('');
        const k = `${stateKey(L, r.s)}`; if (seen.has(k)) continue; seen.add(k); q.push({ s: r.s, path: n.path + d });
      }
    }
    return null;
  }

  // ---------- gameplay ----------
  tryMove(dir) {
    if (this.mode !== 'play' || this.paused || this.locked) return;
    const before = this.P.s; const r = this.P.move(dir);
    this.cd = MOVE_CD;
    if (!r.changed) { this.auto = null; this._events(r.ev, before); return; }
    this._events(r.ev, before, r);
    this._watch();
  }

  /** After a move: tell the child when the room cannot be finished any more (so nobody is left stuck without knowing why), and
   *  show the hint by itself when nothing happened for a while. */
  _watch() {
    clearTimeout(this._deadT); clearTimeout(this._idleT);
    if (this.P.s.won) return;
    this._deadT = setTimeout(() => {
      if (this.mode !== 'play' || this.paused || this.P.s.won) return;
      if (!hintMove(this.L, this.P.s)) { this.sound.play('hint'); this.banner(I.t('deadRoom'), 6000); }
    }, 450);
    this._idleT = setTimeout(() => { if (this.mode === 'play' && !this.paused && !this.P.s.won) this.showHint(); }, 22000);
  }

  _events(ev, before, r) {
    const L = this.L; const w = L.w; const cellXZ = (c) => [(c % w) + 0.5, ((c / w) | 0) + 0.5];
    let doorSound = false;
    for (const e of ev) {
      switch (e.type) {
        case 'move': { const [x, z] = cellXZ(e.to); this.exTX = x; this.exTZ = z; this.face = FACE[e.dir]; this.sound.play('step'); this.hintArrow.visible = false; break; }
        case 'push': {
          const m = this.blockMeshes.get(e.from); this.blockMeshes.delete(e.from); this.sound.play('scrape');
          if (m) { const [x, z] = cellXZ(e.to); m.userData.tx = x; m.userData.tz = z; if (e.fill) m.userData.sink = 0; else this.blockMeshes.set(e.to, m); }
          if (e.fill) this.sound.play('crumble');
          break;
        }
        case 'key': { const [x, z] = cellXZ(e.cell); this._burst(x, 0.7, z, 0xffd050, 10); this.sound.play('key'); this.voice.say('pickup'); this.banner(I.t('keyFound'), 1300); break; }
        case 'plate': this.sound.play(e.on ? 'plate' : 'unplate'); if (e.on) this.voice.say('trick'); if (L.doors.some((c) => L.doorAt[c] === e.grp)) doorSound = true; if (e.on) { const pc = L.platesByGrp[e.grp]; for (const c of pc) { const [x, z] = cellXZ(c); this._burst(x, 0.2, z, 0xffe080, 6); } } break;
        case 'light': { const [x, z] = cellXZ(e.cell); this._burst(x, 1.0, z, 0xffa030, 10); this.sound.play('light'); this.voice.say('trick'); this.face = FACE[e.dir]; break; }
        case 'gate': this.sound.play('door'); this.voice.say('charge'); this.banner(I.t('gateOpened'), 1600); break;
        case 'unlock': { const [x, z] = cellXZ(e.cell); this._burst(x, 0.7, z, 0xffd050, 10); this.sound.play('unlock'); this.voice.say('charge'); break; }
        case 'crack': { const [x, z] = cellXZ(e.cell); this._burst(x, 0.1, z, 0xc8a070, 4); this.sound.play('crack'); break; }
        case 'crumble': { const [x, z] = cellXZ(e.cell); this._burst(x, 0.1, z, 0xc8a070, 8); this.sound.play('crumble'); break; }
        case 'bump': this._bump(e); break;
        case 'fall': this._fall(ev, before); break;
        case 'win': this._win(); break;
        default: break;
      }
    }
    if (doorSound) setTimeout(() => this.sound.play('door'), 120);
    if (r && r.changed && !r.fell) { this.auto && !this.auto.length && (this.auto = null); }
    if (r && r.fell) this.auto = null;
    this._hud();
  }

  _bump(e) {
    this.auto = null; this.face = FACE[e.dir]; this.bumpT = 0.18; this.bumpDir = e.dir;
    const now = performance.now(); if (now - this.lastBumpT < 700) return; this.lastBumpT = now;
    const msg = { lock: 'bLock', door: 'bDoor', gate: 'bGate', pit: 'bPit', block: 'bBlock', brazier: 'bBraz' }[e.why];
    this.sound.play('bump'); this.voice.say('bump'); if (msg) this.banner(I.t(msg), 1700);
  }

  _fall(ev, before) {
    this.locked = true; this.auto = null; this.buf = null;
    const w = this.L.w; const vs = cloneState(before);
    for (const e of ev) { if (e.type === 'crack') vs.terr[e.cell] = T.CRACKED; if (e.type === 'crumble') vs.terr[e.cell] = T.PIT; if (e.type === 'move') vs.p = e.to; }
    this.vs = vs; this.fallT = 0; this.fallCell = vs.p; void w; this.sound.play('fall'); this.voice.say('lose'); this.banner(I.t('fall'), 2200);
  }

  _win() {
    this.locked = true; this.auto = null; this.buf = null; const s = this.P.s; const L = this.L; const def = LEVELS[this.idx];
    const stars = starsFor(L, s); const sv = this.save;
    sv.stars[def.id] = Math.max(sv.stars[def.id] || 0, stars); sv.keys[def.id] = Math.max(sv.keys[def.id] || 0, this._popcount(s.keys));
    sv.best[def.id] = sv.best[def.id] ? Math.min(sv.best[def.id], s.moves) : s.moves; sv.unlocked = Math.max(sv.unlocked, Math.min(LEVELS.length, this.idx + 2));
    this.post({ type: 'save', save: sv });
    this.jumpT = 0; this.sound.play('win'); this.voice.say('win'); const [ex, ez] = [(L.exit % L.w) + 0.5, ((L.exit / L.w) | 0) + 0.5]; this._burst(ex, 1.0, ez, 0xffe080, 24);
    setTimeout(() => { if (this.mode === 'play' && this.L === L) this._results(stars); }, 1100);
  }
  _popcount(n) { let c = 0; while (n) { c += n & 1; n >>= 1; } return c; }

  undo() { if (this.mode !== 'play' || this.paused || this.locked) return; if (this.P.undo()) { this.sound.play('undo'); this._resync(); this.auto = null; this._watch(); } else this.sound.play('bump'); }
  resetRoom() { if (this.mode !== 'play' || this.paused || this.locked) return; if (this.P.reset()) { this.sound.play('undo'); this._resync(); this.auto = null; this._watch(); } }
  _resync() { this.vs = null; this._syncBlocks(true); this._snapExplorer(); this.hintArrow.visible = false; this._hud(); }

  showHint() {
    if (this.mode !== 'play' || this.paused || this.locked) return;
    const d = hintMove(this.L, this.P.s);
    this.sound.play('hint');
    if (!d) { this.banner(I.t('stuck'), 2600); return; }
    this.hintDir = d; this.hintT = 3.2; this.hintArrow.visible = true; this.banner(I.t('thatWay'), 1800);
  }

  banner(text, ms = 2600) { if (!this.bannerEl) return; this.bannerEl.textContent = text; this.bannerEl.classList.add('show'); clearTimeout(this._bt); this._bt = setTimeout(() => this.bannerEl && this.bannerEl.classList.remove('show'), ms); }

  _burst(x, y, z, col, n) {
    let k = 0; for (const s of this.sparks) { if (k >= n) break; if (s.visible) continue; k++; s.visible = true; s.material.color.set(col); s.position.set(x, y, z); const a = Math.random() * 6.283; const v = 0.6 + Math.random() * 1.4; s.userData = { life: 0.7 + Math.random() * 0.4, t: 0, vx: Math.cos(a) * v, vy: 1 + Math.random() * 1.5, vz: Math.sin(a) * v, size: 0.3 + Math.random() * 0.3 }; }
  }

  // ---------- UI ----------
  _clear() { this.layer.replaceChildren(); this.bannerEl = null; }
  _soundPill() { const pill = h('button', { class: 'tp-soundpill', onclick: () => this.sound.unlock() }, I.t('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  _lastOpen() { return Math.min(this.save.unlocked, LEVELS.length) - 1; }

  showMenu() {
    this.mode = 'menu'; this.paused = false; this.locked = false; this.sound.setMode(false); this._clear();
    this._build(Math.min(this._lastOpen(), 0) === 0 ? 0 : 0); this.menuSpin = true; this._exterior('desert_pano.webp'); // the panorama is the exterior backdrop; d_pyramid2.webp is a black-background icon cutout — as a full-screen backdrop it renders as a black field behind the card (checked in the Batch E frames), so the pano serves both exterior screens
    const cont = this.save.unlocked > 1 || Object.keys(this.save.stars).length > 0;
    const idx = Math.min(this._lastOpen(), LEVELS.length - 1);
    this.layer.append(h('div', { class: 'tp-dim', style: 'background:rgba(10,5,0,.5)' }, h('div', { class: 'tp-card' }, h('div', { class: 'tp-logo' }, '𓂀 ', I.t('title')), h('div', { class: 'tp-small' }, I.t('sub')),
      h('button', { class: 'tp-btn', onclick: () => { this.sound.play('tap'); this.start(idx); } }, '▶ ', cont ? I.t('cont') : I.t('play')),
      h('button', { class: 'tp-btn dark', onclick: () => { this.sound.play('tap'); this.showLevels(); } }, '🗺️ ', I.t('levels')),
      h('button', { class: 'tp-btn dark', onclick: () => { this.sound.play('tap'); this.showMuseum(); } }, '🏛️ ', I.t('museum')),
      h('button', { class: 'tp-btn dark', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); this.showMenu(); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`),
      h('button', { class: 'tp-btn alt', onclick: () => this.post({ type: 'exit' }) }, I.t('quit')))));
    this._soundPill();
  }

  showLevels() {
    this._clear(); this._exterior('desert_pano.webp'); const ar = I.getLang() !== 'en'; const sv = this.save;
    const tombs = TOMBS.map((tb, ti) => {
      const ls = LEVELS.map((l, i) => [l, i]).filter(([l]) => l.tomb === ti);
      const keys = ls.reduce((a, [l]) => a + (sv.keys[l.id] || 0), 0);
      const btns = ls.map(([l, i]) => {
        const lock = i + 1 > sv.unlocked; const st = sv.stars[l.id] || 0;
        return h('button', { class: `tp-lvb${lock ? ' lock' : ''}`, style: `background:${TOMB_BTN[ti]}`, onclick: () => { if (lock) { this.banner(I.t('locked'), 1500); return; } this.sound.play('tap'); this.start(i); } },
          h('span', {}, I.num(i + 1)), h('small', {}, lock ? '🔒' : (st ? '⭐'.repeat(st) : '☆☆☆')));
      });
      const hd = h('div', { class: 'tp-th' }, h('span', {}, `${tb.icon} ${ar ? tb.name[0] : tb.name[1]}`), h('span', { style: 'display:flex;gap:calc(var(--u)*1);align-items:center' }, `${I.num(keys)}/${I.num(8)}`));
      hd.lastChild.insertAdjacentHTML('beforeend', ANKH_SVG);
      return h('div', { class: 'tp-tomb' }, hd, h('div', { class: 'tp-grid' }, btns));
    });
    this.layer.append(h('div', { class: 'tp-dim', style: 'background:rgba(10,5,0,.6)' }, h('div', { class: 'tp-card' }, h('div', { class: 'tp-title' }, I.t('select')), ...tombs, h('button', { class: 'tp-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this.bannerEl = h('div', { class: 'tp-banner' }); this.layer.append(this.bannerEl); this._soundPill();
  }

  /** Museum book: one exhibit per tomb, derived from the existing save (museumEntries). A finished tomb shows its
   *  name (ar+en), its collected ankh keys and stars, and a one-line true fact; an unfinished tomb stays a locked
   *  silhouette. Read-only — it never writes to the save. */
  showMuseum() {
    this.mode = 'museum'; this._clear(); this._exterior('desert_pano.webp'); const en = I.getLang() === 'en'; const sv = this.save;
    const cards = museumEntries(sv).map((e) => {
      const nm = en ? e.tomb.name[1] : e.tomb.name[0]; const alt = en ? e.tomb.name[0] : e.tomb.name[1];
      if (!e.complete) return h('div', { class: 'tp-exhibit lock' }, h('div', { class: 'ic' }, e.tomb.icon), h('div', { class: 'nm' }, '🔒 ', nm), h('div', { class: 'alt' }, alt), h('div', { class: 'fact' }, I.t('museumLocked')), h('div', { class: 'meta' }, h('span', {}, `${I.num(e.done)}/${I.num(e.rooms)}`)));
      const meta = h('div', { class: 'meta' }, h('span', {}, `${I.t('tombKeys')} ${I.num(e.keys)}/${I.num(e.totalKeys)}`), h('span', {}, `⭐ ${I.num(e.stars)}`));
      meta.firstChild.insertAdjacentHTML('beforeend', ANKH_SVG);
      return h('div', { class: 'tp-exhibit' }, h('div', { class: 'ic' }, e.tomb.icon), h('div', { class: 'nm' }, nm), h('div', { class: 'alt' }, alt), h('div', { class: 'fact' }, en ? e.tomb.fact[1] : e.tomb.fact[0]), meta);
    });
    this.layer.append(h('div', { class: 'tp-dim', style: 'background:rgba(10,5,0,.6)' }, h('div', { class: 'tp-card' }, h('div', { class: 'tp-title' }, '🏛️ ', I.t('museum')), h('div', { class: 'tp-small' }, I.t('museumSub')), h('div', { class: 'tp-museum' }, cards), h('button', { class: 'tp-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this._soundPill();
  }

  start(idx) {
    this.voice.say('go');
    this.extWanted = null; this.menuSpin = false; this._build(idx); this.mode = 'play'; this.paused = false; this.locked = false; this.cd = 0.2; this.buf = null; this.auto = null; this.fallT = -1;
    this._clear(); this.sound.setMode(true);
    this.movesEl = h('span', {}); this.keysEl = h('span', {}); this.lvEl = h('span', {}, `${I.t('room')} ${I.num(idx + 1)}`);
    const keyPill = h('div', { class: 'tp-pill' }, this.keysEl); keyPill.insertAdjacentHTML('beforeend', ANKH_SVG);
    this.layer.append(h('div', { class: 'tp-top' }, h('button', { class: 'tp-round', 'aria-label': I.t('pause'), onclick: () => this.togglePause() }, '⏸'), h('div', { class: 'tp-pill' }, this.lvEl), keyPill));
    this.layer.append(h('div', { class: 'tp-top', style: 'top:calc(var(--u)*13.5);justify-content:center' }, h('div', { class: 'tp-pill', style: 'font-size:calc(var(--u)*3.2);padding:calc(var(--u)*.4) calc(var(--u)*2.6)' }, this.movesEl)));
    const b = (t, label, fn) => h('button', { class: 'tp-round', 'aria-label': label, title: label, onclick: () => { this.sound.play('tap'); fn(); } }, t);
    this.layer.append(h('div', { class: 'tp-bot' }, b('↩️', I.t('undo'), () => this.undo()), b('💡', I.t('hintB'), () => this.showHint()), b('🔄', I.t('reset'), () => this.resetRoom())));
    this.bannerEl = h('div', { class: 'tp-banner' }); this.layer.append(this.bannerEl); this._soundPill();
    this._hud(); const hint = LEVELS[idx].hint; setTimeout(() => this.banner(hint[I.getLang() === 'en' ? 1 : 0], 4500), 350);
  }

  _hud() {
    if (!this.movesEl || !this.P) return;
    const s = this.P.s; const L = this.L; const tomb = LEVELS[this.idx].tomb;
    let total = 0; for (let i = 0; i < LEVELS.length; i++) if (LEVELS[i].tomb === tomb) total += i === this.idx ? Math.max(this.save.keys[LEVELS[i].id] || 0, this._popcount(s.keys)) : (this.save.keys[LEVELS[i].id] || 0);
    this.keysEl.textContent = `${I.num(total)}/${I.num(8)}`;
    this.movesEl.textContent = `${I.t('moves')} ${I.num(s.moves)}  ·  ${I.t('par')} ${I.num(L.par)}`;
  }

  togglePause() {
    if (this.mode !== 'play' || this.locked) return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'tp-dim' }, h('div', { class: 'tp-card' }, h('div', { class: 'tp-title' }, I.t('paused')), h('button', { class: 'tp-btn', onclick: () => this.togglePause() }, '▶ ', I.t('resume')),
        h('button', { class: 'tp-btn dark', onclick: () => { this.togglePause(); this.resetRoom(); } }, '🔄 ', I.t('restart')),
        h('button', { class: 'tp-btn dark', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); this.togglePause(); this.togglePause(); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`),
        h('button', { class: 'tp-btn dark', onclick: () => { this.paused = false; this.showLevels(); this.mode = 'menu'; this.sound.setMode(false); } }, '🗺️ ', I.t('levels')),
        h('button', { class: 'tp-btn dark', onclick: () => { this.paused = false; this.showMenu(); } }, '🏠 ', I.t('home'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _results(stars) {
    const L = this.L; const s = this.P.s; const last = this.idx >= LEVELS.length - 1; const all = s.keys === L.keyFull;
    const row = (on, t) => h('div', { class: `tp-row${on ? '' : ' off'}` }, h('span', {}, on ? '⭐' : '☆'), h('span', {}, t));
    const starEls = [0, 1, 2].map((i) => h('span', { class: `tp-star${i < stars ? '' : ' off'}`, style: `animation-delay:${0.15 + i * 0.25}s` }, '⭐'));
    this.layer.append(h('div', { class: 'tp-dim' }, h('div', { class: 'tp-card' }, h('div', { class: 'tp-logo', style: 'font-size:calc(var(--u)*7)' }, last ? I.t('fin') : I.t('won')), h('div', {}, starEls),
      row(true, I.t('st1')), row(s.keys !== 0, I.t('st2')), row(all, I.t('st3')),
      s.moves <= L.par ? h('div', { class: 'tp-small' }, I.t('sparkle')) : null,
      !last ? h('button', { class: 'tp-btn', onclick: () => this.start(this.idx + 1) }, '▶ ', I.t('next')) : null,
      h('button', { class: `tp-btn ${last ? '' : 'dark'}`, onclick: () => this.start(this.idx) }, '🔄 ', I.t('replay')),
      h('button', { class: 'tp-btn dark', onclick: () => this.showLevels() }, '🗺️ ', I.t('levels')))));
  }

  // ---------- frame ----------
  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    if (this.mode === 'play' && !this.paused) this._tickInput(dt);
    this._visuals(dt);
    this.renderer.render(this.scene, this.camera);
  }

  _tickInput(dt) {
    this.cd -= dt;
    if (this.locked) {
      if (this.fallT >= 0) { this.fallT += dt; if (this.fallT > 0.9) { this.fallT = -1; this.vs = null; this.locked = false; this._syncBlocks(true); this._snapExplorer(); const L = this.L; this._burst((L.start % L.w) + 0.5, 0.5, ((L.start / L.w) | 0) + 0.5, 0xffe080, 12); this._hud(); } }
      return;
    }
    const d = this.drag; if (d && d.moved && d.dir && now() > d.rep) this.buf = d.dir;
    if (this.cd <= 0) {
      if (this.buf) { const b = this.buf; this.buf = null; this.tryMove(b); } else if (this.auto && this.auto.length) this.tryMove(this.auto.shift());
    }
    if (this.hintT > 0) { this.hintT -= dt; if (this.hintT <= 0) this.hintArrow.visible = false; }
  }

  _visuals(dt) {
    const L = this.L; if (!L) return; const s = this.vs || this.P.s; const w = L.w; const t = this.clock;
    // explorer
    const k = Math.min(1, dt * 16); const dx = this.exTX - this.exX; const dz = this.exTZ - this.exZ; const walking = Math.hypot(dx, dz) > 0.04;
    this.exX += dx * k; this.exZ += dz * k;
    let ox = 0; let oz = 0; if (this.bumpT > 0) { this.bumpT -= dt; const f = Math.sin((1 - this.bumpT / 0.18) * Math.PI) * 0.1; const dv = DIRS[this.bumpDir]; ox = dv[0] * f; oz = dv[1] * f; }
    const e = this.exp; let y = 0; let sc = 1;
    if (this.fallT >= 0) { const f = Math.min(1, this.fallT / 0.7); y = -f * 1.4; sc = 1 - f * 0.7; e.visible = this.fallT < 0.75; }
    if (this.jumpT >= 0) { this.jumpT += dt; y = Math.abs(Math.sin(this.jumpT * 7)) * 0.5; e.rotation.y += dt * 8; }
    const ph = t * 16; const b = e.userData.body;
    e.position.set(this.exX + ox, y, this.exZ + oz); e.scale.setScalar(sc);
    if (this.jumpT < 0) { let da = this.face - e.rotation.y; da = Math.atan2(Math.sin(da), Math.cos(da)); e.rotation.y += da * Math.min(1, dt * 14); }
    b.position.y = walking ? Math.abs(Math.sin(ph)) * 0.06 : Math.sin(t * 2) * 0.012;
    e.userData.legL.rotation.x = walking ? Math.sin(ph) * 0.8 : 0; e.userData.legR.rotation.x = walking ? -Math.sin(ph) * 0.8 : 0;
    e.userData.armL.rotation.x = walking ? -Math.sin(ph) * 0.7 : 0; e.userData.armR.rotation.z = -0.35 + Math.sin(t * 3) * 0.04;
    const fl = 1 + Math.sin(t * 17) * 0.12 + Math.sin(t * 31) * 0.08; e.userData.flame[0].scale.set(0.14 * fl, 0.26 * fl, 0.14 * fl); e.userData.flame[1].scale.set(0.08 * fl, 0.16 * fl, 0.08 * fl);
    this.expShadow.position.set(this.exX, 0.025, this.exZ); this.expShadow.visible = this.fallT < 0;
    this.pl.position.set(this.exX + 0.25, 1.4, this.exZ + 0.3); this.pl.intensity = 5 * (0.94 + Math.sin(t * 19) * 0.04 + Math.sin(t * 7) * 0.03);
    // blocks
    for (const m of [...this.blockMeshes.values()]) { const u = m.userData; m.position.x += (u.tx - m.position.x) * Math.min(1, dt * 14); m.position.z += (u.tz - m.position.z) * Math.min(1, dt * 14); }
    for (const m of this.stage.children) { if (m.userData && m.userData.sink !== undefined) { m.userData.sink += dt; m.position.y = -m.userData.sink * 2; m.scale.setScalar(Math.max(0.01, 1 - m.userData.sink * 1.5)); if (m.userData.sink > 0.6) this.stage.remove(m); } }
    // tiles
    for (const [c, g] of this.tiles) {
      const u = g.userData; const terr = s.terr[c];
      if (u.shown !== terr) {
        if (u.shown === T.CRACKED && terr === T.PIT) u.fallT = 0; else u.fallT = -1;
        if (u.shown === T.PIT && terr === T.FLOOR) u.popT = 0;
        const crack = terr === T.CRUMBLE || terr === T.CRACKED; u.top.map = crack ? this.tx.crumble : this.tx.floor; u.top.needsUpdate = true; u.shown = terr;
        u.pit.visible = terr === T.PIT; if (terr !== T.PIT || u.fallT >= 0) u.slab.visible = terr !== T.PIT || u.fallT >= 0;
        if (u.fallT < 0) { u.slab.position.set(0, -0.15, 0); u.slab.rotation.set(0, 0, 0); }
      }
      if (u.fallT >= 0) { u.fallT += dt; u.slab.position.y = -0.15 - u.fallT * u.fallT * 9; u.slab.rotation.x = u.fallT * 2; u.slab.rotation.z = u.fallT * 1.4; if (u.fallT > 0.7) { u.slab.visible = false; u.fallT = -1; } }
      if (u.popT >= 0) { u.popT += dt; const f = Math.min(1, u.popT / 0.3); g.scale.y = 0.6 + 0.4 * f; if (f >= 1) { u.popT = -1; g.scale.y = 1; } }
      if (terr === T.CRACKED) { u.slab.position.x = Math.sin(t * 60) * 0.015; u.slab.position.z = Math.cos(t * 53) * 0.015; if (Math.random() < dt * 8) this._burst(c % w + 0.5 + (Math.random() - 0.5) * 0.7, 0.05, ((c / w) | 0) + 0.5 + (Math.random() - 0.5) * 0.7, 0xc8a070, 1); }
    }
    // plates, doors
    for (const p of this.plateM) { const on = s.p === p.c || s.blocks.includes(p.c); const ty = on ? -0.045 : 0; p.y += (ty - p.y) * Math.min(1, dt * 14); p.g.userData.top.position.y = 0.06 + p.y; const grp = groupPressed(L, s, p.grp); p.g.userData.glow.material.opacity += ((on || grp ? 0.55 + Math.sin(t * 5) * 0.12 : 0) - p.g.userData.glow.material.opacity) * Math.min(1, dt * 10); }
    for (const d of this.doorM) { const o = doorOpen(L, s, d.c) ? 1 : 0; d.open += (o - d.open) * Math.min(1, dt * 7); d.g.position.y = -d.open * 1.25; d.g.visible = d.open < 0.97; }
    for (const d of this.lockM) { const o = lockOpen(L, s, d.c) ? 1 : 0; d.open += (o - d.open) * Math.min(1, dt * 9); d.g.position.y = -d.open * 1.25; d.g.visible = d.open < 0.97; }
    for (const d of this.gateM) { const o = gateOpen(L, s) ? 1 : 0; d.open += (o - d.open) * Math.min(1, dt * 5); d.g.position.y = -d.open * 1.25; d.g.visible = d.open < 0.97; }
    // braziers
    let li = 0;
    for (const tm of this.torchM) {
      if (tm.wall) { const f = 1 + Math.sin(t * 13 + tm.g.position.x * 3) * 0.12; tm.g.userData.flame.scale.set(0.18 * f, 0.3 * f, 0.18 * f); tm.g.userData.sp.material.opacity = 0.7 + Math.sin(t * 9 + tm.g.position.x) * 0.15; continue; }
      const lit = !!((s.torches >> L.torchAt[tm.c]) & 1);
      tm.g.userData.flame.visible = lit; const f = 1 + Math.sin(t * 15 + tm.c) * 0.12 + Math.sin(t * 27) * 0.06; tm.g.userData.flame.scale.set(f, f * 1.1, f);
      tm.g.userData.sp.material.opacity += ((lit ? 0.5 : 0) - tm.g.userData.sp.material.opacity) * Math.min(1, dt * 8);
      if (lit && li < this.bl.length) { const l = this.bl[li++]; l.position.set(tm.g.position.x, 1.3, tm.g.position.z); l.intensity = 4.5 * f; }
    }
    for (; li < this.bl.length; li++) this.bl[li].intensity = 0;
    // keys + exit
    this.keyM.forEach((kk, i) => { const got = (s.keys >> i) & 1; kk.visible = !got; kk.rotation.y = t * 2.4 + i; kk.children[0].position.y = 0; kk.position.y = 0.55 + Math.sin(t * 3 + i) * 0.08; });
    if (this.exitM) { const ex = this.exitM.userData; ex.portal.material.opacity = 0.75 + Math.sin(t * 3) * 0.15; ex.floorGlow.material.opacity = 0.55 + Math.sin(t * 4) * 0.15; ex.floorGlow.rotation.z = t * 0.5; this.exitArrow.visible = this.mode === 'play' && !s.won; this.exitArrow.position.set(this.exitM.position.x, 1.9 + Math.sin(t * 4) * 0.12, this.exitM.position.z + 0.2); }
    for (const a of this.arrowM) { const f = 0.5 + Math.sin(t * 4) * 0.05; a.scale.set(f, f, 1); }
    // hint arrow
    if (this.hintArrow.visible && this.hintDir) { const dv = DIRS[this.hintDir]; this.hintArrow.rotation.set(-Math.PI / 2, ARROW_Y[this.hintDir], 0); this.hintArrow.position.set(this.exX + dv[0] * (0.95 + Math.sin(t * 8) * 0.12), 0.06, this.exZ + dv[1] * (0.95 + Math.sin(t * 8) * 0.12)); }
    // sparkles, dust
    for (const sp of this.sparks) { if (!sp.visible) continue; const u = sp.userData; u.t += dt; if (u.t > u.life) { sp.visible = false; continue; } sp.position.x += u.vx * dt; sp.position.y += u.vy * dt; sp.position.z += u.vz * dt; u.vy -= 2.2 * dt; const f = 1 - u.t / u.life; sp.scale.setScalar(u.size * f + 0.05); sp.material.opacity = f; }
    const pos = this.dust.geometry.attributes.position; for (let i = 0; i < pos.count; i++) { let yy = pos.getY(i) + dt * 0.12; if (yy > 3) yy = 0; pos.setY(i, yy); pos.setX(i, pos.getX(i) + Math.sin(t * 0.5 + i) * dt * 0.1); } pos.needsUpdate = true;
    this.dust.position.set(this.L.w / 2 - 5, 0, this.L.h / 2 - 5);
    // camera: gentle drift in the menu
    if (this.baseCam) { const cam = this.camera; if (this.menuSpin) { cam.position.copy(this.baseCam.pos); cam.position.x += Math.sin(t * 0.3) * 0.8; cam.lookAt(this.baseCam.target); } else { cam.position.copy(this.baseCam.pos); cam.lookAt(this.baseCam.target); } }
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() {
    clearTimeout(this._deadT); clearTimeout(this._idleT);
    this.renderer.setAnimationLoop(null); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove();
  }
}

function now() { return performance.now(); }

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.TombPuzzle = api;
export default api;
