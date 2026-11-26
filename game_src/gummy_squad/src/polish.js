// Shared cinematic finish for every three.js game (visual layer only, never touches sim.js).
// Usage: wrap the renderer: this.renderer = polishRenderer(new THREE.WebGLRenderer({...}), { preset: 'warm' }).
// It hooks renderer.render(scene, camera): the frame goes through HDR render -> bloom -> filmic tone map -> colour grade + vignette.
// Add ?nopolish=1 to the URL to see the game without it (used for before/after demo videos).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';


// Emoji everywhere: bundle Twemoji (colour) as a unicode-range fallback of the game font, so icons render identically on every device.
if (typeof document !== 'undefined' && !document.getElementById('tw-emoji-font')) {
  const st = document.createElement('style'); st.id = 'tw-emoji-font';
  const u = new URL('../../fonts/TwemojiMozilla.ttf', location.href).href;
  const R = 'U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE';
  st.textContent = `@font-face{font-family:Tajawal;src:url(${u});unicode-range:${R};font-weight:100 900;font-display:swap}`;
  document.head.appendChild(st);
  // games register their own 'Tajawal' FontFace (no unicode-range) which would shadow the emoji face above: re-add emoji last
  try {
    const origAdd = document.fonts.add.bind(document.fonts);
    document.fonts.add = (f) => {
      const r = origAdd(f);
      if (f && !f.__tw && String(f.family).replace(/["']/g, '') === 'Tajawal') {
        const e = new FontFace('Tajawal', `url(${u})`, { unicodeRange: R, weight: '100 900' });
        e.__tw = 1; e.load().then(() => origAdd(e)).catch(() => {});
      }
      return r;
    };
  } catch (_) { /* old browser */ }
}

// Drawn icons (CSS only) for the emoji every menu/HUD reuses: lock, star, coin. A DOM observer swaps them in, so every game
// gets the same crisp icons on every device with no per-game edits.
if (typeof document !== 'undefined' && !document.getElementById('tw-icons')) {
  const st = document.createElement('style'); st.id = 'tw-icons';
  st.textContent = `.tw-lock{display:inline-block;position:relative;width:.85em;height:.62em;background:linear-gradient(#f2f6fc,#b8c6dc);border-radius:.12em;vertical-align:-.04em;margin:.25em .2em 0}
.tw-lock::before{content:"";position:absolute;left:18%;top:-.42em;width:64%;height:.5em;border:.13em solid #c9d6ea;border-bottom:0;border-radius:.4em .4em 0 0;box-sizing:border-box}
.tw-lock::after{content:"";position:absolute;left:44%;top:.18em;width:12%;height:.22em;background:#5a6a88;border-radius:.1em}
.tw-star{display:inline-block;width:.95em;height:.95em;background:linear-gradient(#ffe680,#ffb300);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);vertical-align:-.12em;margin:0 .08em}
.tw-coin{display:inline-block;width:.88em;height:.88em;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff1a8,#f5b400 60%,#c98400);border:.09em solid #b87400;box-sizing:border-box;vertical-align:-.12em;margin:0 .1em;position:relative}
.tw-coin::after{content:"";position:absolute;inset:.17em;border:.07em solid rgba(150,90,0,.55);border-radius:50%}`;
  document.head.appendChild(st);
  const RE = /(\u{1F512}|\u2B50|\u{1FA99})\uFE0F?/gu;
  const CLS = { '\u{1F512}': 'tw-lock', '\u2B50': 'tw-star', '\u{1FA99}': 'tw-coin' };
  const sweep = () => {
    if (!document.body) return;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const hits = [];
    for (let n = w.nextNode(); n; n = w.nextNode()) { const pt = n.parentNode; if (pt && /^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(pt.nodeName)) continue; RE.lastIndex = 0; if (RE.test(n.nodeValue)) hits.push(n); }
    for (const n of hits) {
      const frag = document.createDocumentFragment(); let last = 0; const t = n.nodeValue; RE.lastIndex = 0; let m;
      while ((m = RE.exec(t))) { if (m.index > last) frag.append(t.slice(last, m.index)); const sp = document.createElement('span'); sp.className = CLS[m[1]]; frag.append(sp); last = m.index + m[0].length; }
      if (last < t.length) frag.append(t.slice(last));
      n.parentNode.replaceChild(frag, n);
    }
  };
  let pend = 0;
  const kick = () => { if (pend) return; pend = setTimeout(() => { pend = 0; sweep(); }, 30); };
  const go = () => { new MutationObserver(kick).observe(document.body, { childList: true, subtree: true, characterData: true }); sweep(); };
  if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
}

const PRESETS = {
  // bloom: [strength, radius, threshold]; grade: contrast, saturation, warm(+)/cool(-) tint, vignette
  warm: { bloom: [0.32, 0.55, 0.82], contrast: 1.08, sat: 1.12, tint: 0.05, vig: 0.38, exposure: 1.0 },
  fresh: { bloom: [0.28, 0.5, 0.85], contrast: 1.06, sat: 1.1, tint: -0.015, vig: 0.32, exposure: 1.0 },
  night: { bloom: [0.55, 0.7, 0.7], contrast: 1.12, sat: 1.08, tint: -0.04, vig: 0.5, exposure: 1.05 },
  candy: { bloom: [0.4, 0.6, 0.78], contrast: 1.05, sat: 1.18, tint: 0.02, vig: 0.3, exposure: 1.0 },
  epic: { bloom: [0.38, 0.6, 0.8], contrast: 1.14, sat: 1.1, tint: 0.035, vig: 0.45, exposure: 1.02 },
};

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, contrast: { value: 1.08 }, sat: { value: 1.1 }, tint: { value: 0.04 }, vig: { value: 0.4 }, time: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float contrast, sat, tint, vig, time; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);
      c = (c - 0.5) * contrast + 0.5;
      // split tone: warm highlights, cool-teal shadows
      c += vec3(tint, tint * 0.35, -tint) * smoothstep(0.35, 1.0, l);
      c += vec3(-tint * 0.4, 0.0, tint * 0.5) * (1.0 - smoothstep(0.0, 0.4, l)) * 0.6;
      vec2 d = vUv - 0.5; float v = 1.0 - vig * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c *= v;
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`,
};


// Floating light motes (pollen / sparkle / snow-like) anchored in world space around the camera: adds depth and life to every scene.
const MOTE_COLORS = { warm: 0xfff1c2, fresh: 0xe6f6ff, night: 0xbfd8ff, candy: 0xffd1f0, epic: 0xffe2a8 };
function makeMotes(scene, camera, name, rec) {
  const R = Math.min(60, Math.max(6, (camera.far || 300) * 0.035));
  const N = 110;
  const pos = new Float32Array(N * 3), vel = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = camera.position.x + (Math.random() - 0.5) * 2 * R; pos[i * 3 + 1] = camera.position.y + (Math.random() - 0.5) * R; pos[i * 3 + 2] = camera.position.z + (Math.random() - 0.5) * 2 * R;
    vel[i * 3] = (Math.random() - 0.5) * 0.25; vel[i * 3 + 1] = 0.05 + Math.random() * 0.25; vel[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const c = document.createElement('canvas'); c.width = c.height = 32; const x = c.getContext('2d');
  const gr = x.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 32, 32);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.PointsMaterial({ map: tex, color: MOTE_COLORS[name] || 0xfff1c2, size: R * 0.045, transparent: true, opacity: 0.75, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, sizeAttenuation: true });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; pts.renderOrder = 999; pts.name = '__motes';
  scene.add(pts);
  return { pts, pos, vel, R, N };
}
function stepMotes(M, camera, dt) {
  const { pos, vel, R, N } = M;
  for (let i = 0; i < N; i++) {
    for (let a = 0; a < 3; a++) {
      const k = i * 3 + a; pos[k] += vel[k] * dt * (a === 1 ? R * 0.1 : R * 0.12);
      const lim = a === 1 ? R * 0.5 : R; const rel = pos[k] - [camera.position.x, camera.position.y, camera.position.z][a];
      if (rel > lim) pos[k] -= 2 * lim; else if (rel < -lim) pos[k] += 2 * lim;
    }
  }
  M.pts.geometry.attributes.position.needsUpdate = true;
}


// Playing-alongside encouragement voice (clips assets/games/_voice/<id>_<voice>.mp3, silent if missing) + soft tap SFX.
// Moments are detected generically from the page: first touch, periodic praise while playing, idle nudge, win/lose screens appearing.
const CHEERS = { start: 3, good: 6, combo: 2, oops: 4, near: 2, win: 3, lose: 3, idle: 2, overtake: 3, boost: 3, behind: 3, collect: 3, levelup: 3 };
const WIN_RE = /فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i;
const LOSE_RE = /خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;

// Sound -> encouragement voice: every game's Sound.play(name) calls this, so real game events (not a timer) trigger the cheer lines.
const SFX_CHEER = { win: 'win', finish: 'win', goal: 'win', arrive: 'win', lose: 'lose', lost: 'lose', crash: 'oops', hit: 'oops', hurt: 'oops', bump: 'oops', splat: 'oops', fall: 'oops', coin: 'collect', star: 'collect', pick: 'collect', crystal: 'collect', power: 'collect', overtake: 'overtake', nitro: 'boost', boost: 'boost', dash: 'boost', combo: 'combo', unlock: 'levelup', lap: 'levelup', wave: 'levelup', miss: 'near', draft: 'near', leap: 'near', go: 'start' };
const _sfxLast = {};
if (typeof window !== 'undefined') window.__cheerSfx = (name) => {
  const kind = SFX_CHEER[name]; if (!kind || !window.__cheer) return;
  const now = performance.now(); const gap = (kind === 'collect' || kind === 'oops') ? 9000 : 4500;
  if (now - (_sfxLast[kind] || -1e9) < gap) return; _sfxLast[kind] = now;
  window.__cheer(kind, kind === 'win' || kind === 'lose' || kind === 'levelup');
};

export function installCheer(root, voice) {
  if (!root || root.__cheer) return; root.__cheer = true;
  const base = new URL('../_voice/', location.href).href;
  const cache = {}; let AC = null, lastSay = 0, lastInput = performance.now(), started = false, playedGood = 0, speaking = false;
  const clip = (id) => { if (!cache[id]) { const a = new Audio(`${base}${id}_${voice}.mp3`); a.preload = 'auto'; a.volume = 0.95; cache[id] = a; } return cache[id]; };
  const say = (kind, force) => {
    const now = performance.now(); if (!force && now - lastSay < 6000) return; if (speaking) return;
    const id = kind + (1 + Math.floor(Math.random() * CHEERS[kind])); const a = clip(id);
    speaking = true; lastSay = now; a.currentTime = 0;
    const done = () => { speaking = false; }; a.onended = done; a.onerror = done;
    const p = a.play(); if (p && p.catch) p.catch(done);
    setTimeout(done, 4000);
  };
  window.__cheer = (kind, force) => { if (CHEERS[kind]) { started = true; say(kind, !!force); } }; // games call this on real events: start good combo oops near win lose idle
  const pop = () => { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const o = AC.createOscillator(), g = AC.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(520, AC.currentTime); o.frequency.exponentialRampToValueAtTime(900, AC.currentTime + 0.08); g.gain.setValueAtTime(0.08, AC.currentTime); g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + 0.12); o.connect(g); g.connect(AC.destination); o.start(); o.stop(AC.currentTime + 0.13); } catch (e) {} };
  const onInput = () => { lastInput = performance.now(); pop(); if (!started) { started = true; say('start', true); } };
  root.addEventListener('pointerdown', onInput, { passive: true });
  window.addEventListener('keydown', onInput, { passive: true });
  let tx = ''; const mo = new MutationObserver(() => {
    if (!started) return; const t = (root.innerText || '').slice(0, 600); if (t === tx) return; tx = t;
    if (WIN_RE.test(t)) say('win', false); else if (LOSE_RE.test(t)) say('lose', false);
  });
  mo.observe(root, { childList: true, subtree: true });
  setInterval(() => {
    const now = performance.now(); if (!started || document.hidden) return;
    if (now - lastInput > 14000) { say('idle', false); lastInput = now - 4000; }
    else if (now - lastSay > 22000) { playedGood++; say(playedGood % 5 === 0 ? 'combo' : 'good', false); }
  }, 2500);
}

export function polishRenderer(renderer, opts = {}) {
  const q = new URLSearchParams(typeof location !== 'undefined' ? location.search : '');
  if (q.has('nopolish')) return renderer;
  const preset = Object.assign({}, PRESETS[q.get('look') || opts.preset || 'warm'] || PRESETS.warm, opts.tune || {});
  const low = q.has('low') || !!opts.low;
  const rec = q.has('rec');
  const origRender = renderer.render.bind(renderer);
  const motes = new WeakMap(); let lastT = performance.now();
  let composer = null, rp = null, bloom = null, grade = null, w = 0, h = 0, pr = 0, busy = false;
  const t0 = performance.now();

  function build(scene, camera) {
    const size = renderer.getSize(new THREE.Vector2());
    w = size.x; h = size.y; pr = renderer.getPixelRatio();
    composer = new EffectComposer(renderer);
    composer.setPixelRatio(pr); composer.setSize(w, h);
    rp = new RenderPass(scene, camera);
    composer.addPass(rp);
    if (!low) {
      bloom = new UnrealBloomPass(new THREE.Vector2(Math.max(2, w >> 1), Math.max(2, h >> 1)), preset.bloom[0], preset.bloom[1], preset.bloom[2]);
      composer.addPass(bloom);
    }
    composer.addPass(new OutputPass());
    grade = new ShaderPass(GradeShader);
    grade.uniforms.contrast.value = preset.contrast; grade.uniforms.sat.value = preset.sat;
    grade.uniforms.tint.value = preset.tint; grade.uniforms.vig.value = preset.vig;
    composer.addPass(grade);
  }

  renderer.render = function (scene, camera) {
    // only the main on-screen frame goes through the composer; render targets / manual layering stay untouched
    if (busy || renderer.getRenderTarget() !== null || renderer.autoClear === false || !scene || !camera || !scene.isScene) return origRender(scene, camera);
    try {
      if (!composer) build(scene, camera);
      const s = renderer.getSize(new THREE.Vector2());
      const p = renderer.getPixelRatio();
      if (s.x !== w || s.y !== h || p !== pr) { w = s.x; h = s.y; pr = p; composer.setPixelRatio(p); composer.setSize(w, h); if (bloom) bloom.resolution.set(Math.max(2, w >> 1), Math.max(2, h >> 1)); }
      rp.scene = scene; rp.camera = camera;
      grade.uniforms.time.value = (performance.now() - t0) / 1000;
      const nowT = performance.now(); const dt = Math.min(0.1, Math.max(0, (nowT - lastT) / 1000)); lastT = nowT;
      if (!q.has('nomotes') && opts.motes !== false) { let M = motes.get(scene); if (!M) { M = makeMotes(scene, camera, q.get('look') || opts.preset || 'warm', rec); motes.set(scene, M); } stepMotes(M, camera, dt); }
      busy = true;
      composer.render();
      busy = false;
    } catch (e) {
      busy = false;
      if (typeof console !== 'undefined') console.warn('[polish] disabled:', e && e.message);
      renderer.render = origRender; // fall back to the plain renderer, game keeps running
      origRender(scene, camera);
    }
  };
  if (!q.has('nocheer') && !rec) setTimeout(() => installCheer(renderer.domElement.parentElement && renderer.domElement.parentElement.parentElement || document.body, q.get('voice') || opts.voice || 'puck'), 0);
  renderer.__polish = { preset, rec };
  return renderer;
}
