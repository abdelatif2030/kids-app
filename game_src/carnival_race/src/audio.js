import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// All the game's sound, made live with Web Audio: an original carnival tune (calliope organ, oom-pah bass, drums),
// a motor that follows the speed, and an effect for every moment of the race. No sound files, nothing downloaded.
// Volumes are kept gentle for small ears; one button mutes everything.

const A4 = 440;
const hz = (midi) => A4 * Math.pow(2, (midi - 69) / 12);

// The tune: [midi note, length in beats], 8 bars of 4/4. Original melody.
const MELODY = [
  [76, 0.5], [79, 0.5], [84, 0.5], [79, 0.5], [76, 0.5], [79, 0.5], [84, 1],
  [81, 0.5], [79, 0.5], [77, 0.5], [76, 0.5], [74, 1], [72, 1],
  [74, 0.5], [77, 0.5], [81, 0.5], [77, 0.5], [74, 0.5], [77, 0.5], [81, 1],
  [79, 0.5], [77, 0.5], [76, 0.5], [74, 0.5], [72, 2],
  [76, 0.5], [76, 0.5], [79, 0.5], [79, 0.5], [84, 1], [83, 0.5], [81, 0.5],
  [79, 0.5], [77, 0.5], [76, 0.5], [77, 0.5], [79, 2],
  [81, 0.5], [83, 0.5], [84, 0.5], [81, 0.5], [79, 0.5], [76, 0.5], [72, 1],
  [74, 0.5], [76, 0.5], [77, 0.5], [79, 0.5], [72, 2],
];
// One chord per bar (root note in the bass octave + the chord tones)
const CHORDS = [
  [48, [60, 64, 67]], [43, [59, 62, 67]], [50, [62, 65, 69]], [48, [60, 64, 67]],
  [48, [60, 64, 67]], [41, [60, 65, 69]], [45, [60, 64, 69]], [43, [59, 62, 65]],
];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off'; // 'menu' | 'race' | 'off'
    this.engineOn = false;
    this._timer = null;
  }

  /** Must be called from a tap or key press (browsers only allow sound after one). */
  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      iosWatch(this.ctx, () => !!(this.held || this._held));
      const c = this.ctx;
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      // a soft limiter so nothing ever gets harsh
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      comp.attack.value = 0.003;
      comp.release.value = 0.2;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.32;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.75;
      this.sfx.connect(this.master);
      // a little room echo on the music makes it sound like a fairground
      const delay = c.createDelay(0.5);
      delay.delayTime.value = 0.23;
      const fb = c.createGain();
      fb.gain.value = 0.22;
      const wet = c.createGain();
      wet.gain.value = 0.18;
      this.music.connect(delay);
      delay.connect(fb).connect(delay);
      delay.connect(wet).connect(this.master);
      this.noiseBuf = this._noise();
      this._startScheduler();
      if (this.mode !== 'off') this.setMode(this.mode, true);
    }
    if (this.ctx.state !== 'running') {
      this._silentTick();
      this._mediaKick();
      this.ctx.resume();
    }
  }

  /** True when sound is really playing (the browser allowed it). */
  get on() {
    return !!this.ctx && this.ctx.state === 'running';
  }

  _mediaKick() {
    if (this._kicked) return;
    try {
      const a = new Audio('data:audio/wav;base64,UklGRkQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YSADAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==');
      a.volume = 0.01;
      const p = a.play();
      if (p && p.then) p.then(() => { this._kicked = true; }).catch(() => {});
    } catch (_) {
      // nothing to do
    }
  }

  _silentTick() {
    try {
      const c = this.ctx;
      const b = c.createBuffer(1, 1, c.sampleRate);
      const src = c.createBufferSource();
      src.buffer = b;
      src.connect(c.destination);
      src.start(0);
    } catch (_) {
      // nothing to do
    }
  }

  _noise() {
    const c = this.ctx;
    const b = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }

  suspend() {
    iosPause(); if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() {
    iosKeepAlive(); if (this.ctx && this.ctx.state === 'suspended' && !this._held) this.ctx.resume(); }

  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.tempo = mode === 'race' ? 138 : 104;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.melodyIndex = 0;
    this.melodyTime = this.nextTime;
    if (mode !== 'race') this.engine(false);
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  _env(g, t, a, peak, d, sustain, rel, end) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak * sustain), t + a + d);
    g.gain.setValueAtTime(Math.max(0.0001, peak * sustain), end);
    g.gain.exponentialRampToValueAtTime(0.0001, end + rel);
  }

  _osc(type, f, t, end, dest, gain = 0.2, a = 0.01, d = 0.1, sus = 0.6, rel = 0.08, detune = 0) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    o.detune.value = detune;
    const g = c.createGain();
    this._env(g, t, a, gain, d, sus, rel, end);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(end + rel + 0.05);
    return o;
  }

  /** Calliope / fairground organ: two detuned pipes and a soft octave, with a gentle wobble. */
  organ(midi, t, dur, vol = 0.11, dest = this.music) {
    const c = this.ctx;
    const f = hz(midi);
    const end = t + dur * 0.92;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 3200;
    lp.connect(dest);
    const vib = c.createOscillator();
    vib.frequency.value = 5.8;
    const vg = c.createGain();
    vg.gain.value = 6;
    vib.connect(vg);
    vib.start(t);
    vib.stop(end + 0.2);
    for (const [type, mul, g, det] of [['square', 1, vol * 0.45, -6], ['triangle', 1, vol * 0.7, 6], ['sine', 2, vol * 0.3, 0]]) {
      const o = this._osc(type, f * mul, t, end, lp, g, 0.012, 0.08, 0.75, 0.06, det);
      vg.connect(o.detune);
    }
  }

  /** Music box / bell: a pure tone with a bright, quickly fading overtone. */
  bell(midi, t, vol = 0.12, dest = this.sfx, len = 0.6) {
    const f = hz(midi);
    this._osc('sine', f, t, t + 0.02, dest, vol, 0.004, 0.02, 0.9, len);
    this._osc('sine', f * 2.76, t, t + 0.01, dest, vol * 0.35, 0.002, 0.01, 0.8, len * 0.35);
    this._osc('sine', f * 5.4, t, t + 0.01, dest, vol * 0.12, 0.002, 0.01, 0.8, len * 0.15);
  }

  _noiseHit(t, len, vol, filterType, freq, q = 1, dest = this.sfx, freqEnd) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = filterType;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + len);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.01, len / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(dest);
    s.start(t, Math.random() * 0.5);
    s.stop(t + len + 0.05);
  }

  _kick(t, vol = 0.5, dest = this.music) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + 0.25);
  }

  _slide(type, f0, f1, t, len, vol, dest = this.sfx) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  // ---- music scheduler ------------------------------------------------------------------------------------------

  _startScheduler() {
    this._timer = setInterval(() => this._schedule(), 30);
  }

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.18;
    const beat = 60 / this.tempo;
    const race = this.mode === 'race';
    // accompaniment on an eighth-note grid
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64; // 8 bars x 8 eighths
      const bar = Math.floor(step / 8);
      const inBar = step % 8;
      const [root, chord] = CHORDS[bar];
      if (race) {
        if (inBar === 0 || inBar === 4) { this.organ(root, t, beat * 0.9, 0.16); this._kick(t, 0.42); }
        if (inBar === 2 || inBar === 6) {
          for (const n of chord) this.organ(n, t, beat * 0.45, 0.05);
          this._noiseHit(t, 0.12, 0.12, 'bandpass', 1800, 0.8, this.music);
        }
        this._noiseHit(t, 0.04, inBar % 2 ? 0.035 : 0.05, 'highpass', 7000, 0.7, this.music);
      } else {
        // the menu: a soft waltz-like music box
        if (inBar === 0) this.bell(root + 12, t, 0.07, this.music, 1.2);
        if (inBar === 2 || inBar === 4 || inBar === 6) this.bell(chord[(inBar / 2) % 3] + 12, t, 0.04, this.music, 0.6);
      }
      this.step++;
      this.nextTime += beat / 2;
    }
    // the tune
    while (this.melodyTime < ahead) {
      const [n, len] = MELODY[this.melodyIndex % MELODY.length];
      if (race) this.organ(n, this.melodyTime, len * beat, 0.09);
      else this.bell(n + 12, this.melodyTime, 0.06, this.music, Math.min(1.2, len * beat * 1.5));
      this.melodyTime += len * beat;
      this.melodyIndex++;
    }
  }

  // ---- motor ----------------------------------------------------------------------------------------------------

  engine(on) {
    if (!this.ctx) return;
    const c = this.ctx;
    if (on && !this.engineOn) {
      this.engineOn = true;
      const g = c.createGain();
      g.gain.value = 0.0001;
      const lp = c.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 500;
      lp.Q.value = 3;
      const o1 = c.createOscillator();
      o1.type = 'sawtooth';
      const o2 = c.createOscillator();
      o2.type = 'square';
      o2.detune.value = -1200;
      const o2g = c.createGain();
      o2g.gain.value = 0.5;
      o1.connect(lp);
      o2.connect(o2g).connect(lp);
      lp.connect(g).connect(this.sfx);
      o1.start();
      o2.start();
      this._eng = { g, lp, o1, o2 };
    } else if (!on && this.engineOn) {
      this.engineOn = false;
      const e = this._eng;
      e.g.gain.setTargetAtTime(0.0001, c.currentTime, 0.08);
      e.o1.stop(c.currentTime + 0.4);
      e.o2.stop(c.currentTime + 0.4);
      this._eng = null;
    }
  }

  /** speed in m/s, boosting, on the road or flying */
  engineUpdate(v, boost, air) {
    if (!this._eng) return;
    const c = this.ctx;
    const t = c.currentTime;
    const f = 48 + v * 3.4 + (boost ? 30 : 0) + (air ? 25 : 0);
    this._eng.o1.frequency.setTargetAtTime(f, t, 0.06);
    this._eng.o2.frequency.setTargetAtTime(f, t, 0.06);
    this._eng.lp.frequency.setTargetAtTime(380 + v * 45 + (boost ? 900 : 0), t, 0.08);
    this._eng.g.gain.setTargetAtTime(0.025 + Math.min(0.045, v * 0.0018), t, 0.1);
  }

  // ---- effects --------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'count':
        this._osc('square', 660, t, t + 0.12, S, 0.12, 0.005, 0.05, 0.7, 0.08);
        this._osc('sine', 1320, t, t + 0.12, S, 0.05, 0.005, 0.05, 0.7, 0.08);
        break;
      case 'go':
        [72, 76, 79, 84].forEach((n) => this.organ(n, t, 0.6, 0.12, S));
        this._osc('square', 990, t, t + 0.35, S, 0.12, 0.005, 0.1, 0.7, 0.2);
        break;
      case 'ticket':
        this.bell(88 + ((arg ?? 0) % 3) * 2, t, 0.13);
        this.bell(95 + ((arg ?? 0) % 3) * 2, t + 0.06, 0.09);
        break;
      case 'item':
        [84, 88, 91, 96].forEach((n, i) => this.bell(n, t + i * 0.05, 0.1, S, 0.35));
        break;
      case 'rocket':
        this._noiseHit(t, 1.1, 0.35, 'bandpass', 400, 1.2, S, 3500);
        this._slide('sawtooth', 120, 520, t, 0.9, 0.08);
        break;
      case 'boost':
        this._noiseHit(t, 0.5, 0.22, 'bandpass', 600, 1, S, 2500);
        break;
      case 'shield':
        [79, 84, 88, 91].forEach((n, i) => this.bell(n, t + i * 0.03, 0.07, S, 0.9));
        this._slide('sine', 400, 900, t, 0.5, 0.06);
        break;
      case 'shieldPop':
        this._noiseHit(t, 0.18, 0.25, 'highpass', 3000, 0.7);
        this.bell(96, t, 0.08, S, 0.3);
        break;
      case 'blast':
        this._kick(t, 0.8, S);
        this._noiseHit(t, 0.6, 0.35, 'lowpass', 2500, 0.8, S, 200);
        break;
      case 'bump': {
        // a rubbery "boing"
        const c = this.ctx;
        const o = c.createOscillator();
        o.type = 'sine';
        o.frequency.setValueAtTime(330, t);
        o.frequency.exponentialRampToValueAtTime(110, t + 0.28);
        const wob = c.createOscillator();
        wob.frequency.value = 22;
        const wg = c.createGain();
        wg.gain.value = 30;
        wob.connect(wg).connect(o.frequency);
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.25, t + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
        o.connect(g).connect(S);
        o.start(t);
        wob.start(t);
        o.stop(t + 0.35);
        wob.stop(t + 0.35);
        this._noiseHit(t, 0.06, 0.15, 'lowpass', 900, 0.7);
        break;
      }
      case 'spin':
        this._slide('triangle', 1300, 260, t, 0.7, 0.12);
        this._slide('sine', 1950, 390, t, 0.7, 0.05);
        break;
      case 'wall':
        this._kick(t, 0.25, S);
        this._noiseHit(t, 0.08, 0.12, 'lowpass', 700);
        break;
      case 'jump':
        this._slide('triangle', 280, 760, t, 0.32, 0.12);
        break;
      case 'land':
        this._kick(t, 0.32, S);
        this._noiseHit(t, 0.1, 0.12, 'lowpass', 1200);
        break;
      case 'trick':
        [84, 88, 91, 96, 100].forEach((n, i) => this.bell(n, t + i * 0.045, 0.09, S, 0.3));
        break;
      case 'driftTier':
        this.bell([0, 81, 86, 93][arg] ?? 81, t, 0.07, S, 0.25);
        break;
      case 'lap':
        this.bell(84, t, 0.12, S, 0.5);
        this.bell(91, t + 0.15, 0.12, S, 0.7);
        break;
      case 'lastLap':
        [79, 84, 88, 91, 96].forEach((n, i) => this.organ(n, t + i * 0.09, 0.12, 0.09, S));
        break;
      case 'lead':
        [76, 79, 84].forEach((n, i) => this.organ(n, t + i * 0.08, i === 2 ? 0.4 : 0.1, 0.1, S));
        break;
      case 'finish':
        // fanfare and a cheering crowd
        [[72, 0], [76, 0.16], [79, 0.32], [84, 0.48]].forEach(([n, d]) => this.organ(n, t + d, d === 0.48 ? 1.2 : 0.15, 0.14, S));
        [60, 64, 67].forEach((n) => this.organ(n, t + 0.48, 1.2, 0.07, S));
        this._noiseHit(t + 0.2, 2.6, 0.12, 'bandpass', 1400, 0.5, S);
        this._noiseHit(t + 0.4, 2.2, 0.08, 'bandpass', 2600, 0.6, S);
        break;
      case 'win':
        [[72, 0], [72, 0.12], [72, 0.24], [76, 0.36], [79, 0.6], [76, 0.84], [79, 0.96], [84, 1.08]].forEach(([n, d], i, arr) =>
          this.organ(n, t + d, i === arr.length - 1 ? 1.4 : 0.11, 0.13, S));
        break;
      case 'firework':
        this._noiseHit(t, 0.05, 0.05, 'highpass', 2000, 0.5);
        for (let i = 0; i < 6; i++) this._noiseHit(t + 0.08 + Math.random() * 0.4, 0.03, 0.025, 'highpass', 4000, 0.5);
        break;
      case 'tap':
        this._osc('sine', 880, t, t + 0.02, S, 0.07, 0.003, 0.02, 0.6, 0.06);
        break;
      case 'buy':
        [88, 91, 96, 100].forEach((n, i) => this.bell(n, t + i * 0.07, 0.11, S, 0.5));
        this._noiseHit(t, 0.08, 0.1, 'highpass', 5000, 0.7);
        break;
      case 'locked':
        this._osc('square', 220, t, t + 0.12, S, 0.07, 0.005, 0.05, 0.6, 0.06);
        this._osc('square', 196, t + 0.13, t + 0.25, S, 0.07, 0.005, 0.05, 0.6, 0.08);
        break;
      default:
    }
  }
}
