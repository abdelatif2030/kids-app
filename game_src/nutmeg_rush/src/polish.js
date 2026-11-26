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
const CHEERS = { start: 3, good: 6, combo: 2, oops: 4, near: 2, win: 3, lose: 3, idle: 2 };
const WIN_RE = /فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i;
const LOSE_RE = /خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;
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
