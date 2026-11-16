import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Sunny pool-party sound, made live with Web Audio (no files): a tropical tune on steel drums over ukulele strums,
// a bouncy bass, claps and a shaker, in the round's own tempo; while racing the coach's whistle marks every beat (tap
// STROKE with it). Diving muffles the music. Effects: splashes that get brighter for perfect strokes, a rubbery
// bonk, the leap and its splash, a slide "wheee", waves, a breath warning, the start whistle, the crowd at the finish
// and win / try-again tunes. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const CHORDS = [[48, [60, 64, 67, 72]], [53, [60, 65, 69, 72]], [55, [62, 67, 71, 74]], [48, [60, 64, 67, 72]]];
const MELODY = [[0, 0, 79], [0, 2, 81], [0, 3, 79], [0, 5, 76], [1, 0, 77], [1, 2, 81], [1, 4, 84], [2, 0, 83], [2, 3, 79], [2, 5, 74], [3, 0, 76], [3, 2, 79], [3, 4, 84]];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.plucks = new Map();
  }

  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      iosWatch(this.ctx, () => !!(this.held || this._held));
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.4;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.8;
      this.sfx.connect(this.master);
      const delay = c.createDelay(0.8);
      delay.delayTime.value = 0.36;
      const fb = c.createGain();
      fb.gain.value = 0.22;
      const wet = c.createGain();
      wet.gain.value = 0.18;
      this.music.connect(delay);
      delay.connect(fb).connect(delay);
      delay.connect(wet).connect(this.master);
      const b = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
      this._timer = setInterval(() => this._schedule(), 30);
      if (this.mode !== 'off') this.setMode(this.mode, true);
    }
    if (this.ctx.state !== 'running' && !this.held) {
      this._silentTick();
      this._mediaKick();
      this.ctx.resume();
    }
  }

  get on() { return !!this.ctx && this.ctx.state === 'running'; }

  _silentTick() {
    try {
      const c = this.ctx;
      const src = c.createBufferSource();
      src.buffer = c.createBuffer(1, 1, c.sampleRate);
      src.connect(c.destination);
      src.start(0);
    } catch (_) { /* fine */ }
  }

  _mediaKick() {
    if (this._kicked) return;
    try {
      // a tiny silent wav: some phone browsers only open game sound after a normal audio element played once
      const a = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA');
      a.volume = 0.01;
      const p = a.play();
      if (p && p.then) p.then(() => { this._kicked = true; }).catch(() => {});
    } catch (_) { /* fine */ }
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }
  suspend() {
    iosPause(); this.held = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() {
    iosKeepAlive(); this.held = false; if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.tempo = this.tempo || 100;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  _tone(type, f, t, len, vol, dest = this.sfx, a = 0.005) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
    return o;
  }

  _noise(t, len, vol, type, freq, q = 1, dest = this.sfx, freqEnd) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
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

  /** A steel drum note: a bright sine with a few soft partials and a quick bloom. */
  _pan(m, t, vol = 0.08, dest = this.music) {
    this._tone('sine', hz(m), t, 0.7, vol, dest, 0.004);
    this._tone('sine', hz(m) * 2, t, 0.35, vol * 0.4, dest, 0.004);
    this._tone('sine', hz(m) * 3.01, t, 0.15, vol * 0.2, dest, 0.003);
  }

  /** A ukulele strum: four quick plucked strings. */
  _strum(chord, t, vol = 0.05) {
    chord.forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.012, 0.25, vol, this.music, 0.003));
  }

  setTempo(bpm) { this.tempo = bpm; if (this.ctx) { this.step = 0; this.nextTime = this.ctx.currentTime + 0.05; } }

  /** Under water the music sounds muffled. */
  setUnder(on) {
    if (!this.ctx) return;
    if (!this.under) {
      // put a low-pass in front of the music once
      const c = this.ctx;
      this.under = c.createBiquadFilter();
      this.under.type = 'lowpass';
      this.under.frequency.value = 20000;
      this.music.disconnect();
      this.music.connect(this.under).connect(this.master);
    }
    this.under.frequency.setTargetAtTime(on ? 420 : 20000, this.ctx.currentTime, 0.08);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const race = this.mode === 'race';
    const eighth = 60 / this.tempo / 2;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 32; // 4 bars of 8 eighths
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      if (e === 0 || e === 4) this._slide('sine', 130, 50, t, 0.16, race ? 0.26 : 0.2, this.music);
      if (e === 2 || e === 6) { this._noise(t, 0.08, 0.06, 'bandpass', 1500, 1, this.music); this._noise(t + 0.01, 0.05, 0.04, 'highpass', 3000, 1, this.music); } // claps
      this._noise(t, 0.04, 0.022, 'highpass', 7000, 0.8, this.music); // shaker
      if (e === 0 || e === 3 || e === 6) this._tone('sine', hz(root - 12), t, eighth * 1.6, 0.14, this.music, 0.01);
      if (e % 2 === 1) this._strum(chord, t, 0.035);
      for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this._pan(m, t, race ? 0.06 : 0.08);
      // the coach's whistle on every beat while racing: tap STROKE with it
      if (race && e % 2 === 0) { this._tone('sine', 2900, t, 0.07, 0.035, this.sfx, 0.004); this._tone('sine', 3400, t + 0.035, 0.05, 0.025, this.sfx, 0.004); }
      this.step++;
      this.nextTime += eighth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'count':
        this._tone('square', 660, t, 0.12, 0.05);
        break;
      case 'go': // a big start whistle and a splash
        this._tone('sine', 2600, t, 0.5, 0.08);
        this._tone('sine', 3100, t, 0.5, 0.05);
        this._noise(t + 0.2, 0.5, 0.12, 'bandpass', 1400, 0.7, S, 500);
        break;
      case 'stroke': { // a splash; the better the timing, the brighter
        const g = arg;
        this._noise(t, 0.16, g === 'perfect' ? 0.14 : 0.1, 'bandpass', g === 'off' ? 700 : 1600, 0.9, S, g === 'off' ? 400 : 3200);
        if (g === 'perfect') { this._pan(91, t + 0.02, 0.07, S); this._pan(96, t + 0.08, 0.05, S); } else if (g === 'good') this._pan(86, t + 0.02, 0.05, S); else this._slide('sine', 300, 180, t, 0.14, 0.06);
        break;
      }
      case 'dive':
        this._noise(t, 0.3, 0.1, 'lowpass', 900, 0.8, S, 250);
        break;
      case 'surface':
        this._noise(t, 0.2, 0.08, 'bandpass', 1200, 1, S, 2600);
        break;
      case 'breath':
        this._slide('sine', 900, 500, t, 0.2, 0.06);
        this._slide('sine', 900, 500, t + 0.25, 0.2, 0.06);
        break;
      case 'bonk': // a rubbery boing
        this._slide('sine', 180, 420, t, 0.25, 0.18);
        this._noise(t, 0.1, 0.07, 'lowpass', 900);
        break;
      case 'leap':
        this._slide('sine', 300, 900, t, 0.3, 0.1);
        this._noise(t + 0.75, 0.4, 0.14, 'bandpass', 1300, 0.7, S, 500);
        break;
      case 'slide':
        this._slide('sine', 1300, 500, t, 1.1, 0.07);
        this._noise(t, 1.2, 0.08, 'bandpass', 1500, 0.8, S, 700);
        break;
      case 'splash':
        this._noise(t, 0.5, 0.15, 'bandpass', 1300, 0.7, S, 400);
        break;
      case 'wave':
        this._noise(t, 1.0, 0.08, 'lowpass', 600, 0.8, S, 1500);
        break;
      case 'finish':
        this._noise(t, 2, 0.07, 'bandpass', 1200, 0.5, S);
        [79, 84, 88].forEach((m, i) => this._pan(m, t + i * 0.1, 0.09, S));
        break;
      case 'win':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [88, 0.55], [91, 0.7], [96, 0.9]].forEach(([m, d]) => this._pan(m, t + d, 0.11, S));
        break;
      case 'lose':
        [79, 76, 72, 67].forEach((m, i) => this._pan(m, t + i * 0.18, 0.08, S));
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.12, 0.04);
        break;
      default:
    }
  }
}
