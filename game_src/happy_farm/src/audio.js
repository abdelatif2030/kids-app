import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Relaxing farm sound, all made live with Web Audio (no files): a gentle country tune on a plucked acoustic guitar
// (each string computed with the Karplus-Strong method), soft bass, light shaker and birds; the tractor's putt-putt,
// a crunchy cutting sound that follows how much is being cut, the "trailer full" horn, grain pouring, coins, a rock
// thunk, and baa / moo / cluck. Gentle volumes behind a limiter; one button mutes everything.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

// G major, a slow fingerpicked progression: G - C - D - Em - G - C - D - G (one bar each).
const BARS = [
  [43, [55, 59, 62, 67]], [48, [55, 60, 64, 67]], [50, [57, 62, 66, 69]], [52, [55, 59, 64, 67]],
  [43, [55, 59, 62, 67]], [48, [55, 60, 64, 67]], [50, [57, 62, 66, 69]], [43, [55, 59, 62, 67]],
];
// a simple melody on top: [bar, eighth, midi]
const MELODY = [
  [0, 0, 74], [0, 4, 71], [0, 6, 74], [1, 0, 76], [1, 4, 72], [2, 0, 74], [2, 3, 78], [2, 6, 76], [3, 0, 71], [3, 4, 67],
  [4, 0, 74], [4, 2, 76], [4, 4, 79], [5, 0, 76], [5, 4, 72], [6, 0, 74], [6, 4, 78], [7, 0, 79], [7, 4, 74],
];
const PICK = [0, 2, 1, 3, 0, 2, 1, 3]; // which chord string on each eighth

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.plucks = new Map();
    this.cutRate = 0;
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
      this.music.gain.value = 0.42;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.8;
      this.sfx.connect(this.master);
      const delay = c.createDelay(0.6);
      delay.delayTime.value = 0.31;
      const fb = c.createGain();
      fb.gain.value = 0.2;
      const wet = c.createGain();
      wet.gain.value = 0.16;
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
    this.tempo = mode === 'farm' ? 92 : 80;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
    if (mode !== 'farm') this.engine(false);
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  /** A plucked guitar string (Karplus-Strong), computed once per pitch and reused. */
  _pluckBuffer(m) {
    if (this.plucks.has(m)) return this.plucks.get(m);
    const c = this.ctx;
    const sr = c.sampleRate;
    const len = Math.floor(sr * 2.2);
    const buf = c.createBuffer(1, len, sr);
    const out = buf.getChannelData(0);
    const period = Math.max(2, Math.round(sr / hz(m)));
    const ring = new Float32Array(period);
    for (let i = 0; i < period; i++) ring[i] = (Math.random() * 2 - 1) * 0.6;
    let idx = 0;
    const damp = 0.996 - Math.max(0, m - 60) * 0.0004;
    for (let i = 0; i < len; i++) {
      const next = (idx + 1) % period;
      const v = (ring[idx] + ring[next]) * 0.5 * damp;
      out[i] = ring[idx];
      ring[idx] = v;
      idx = next;
    }
    this.plucks.set(m, buf);
    return buf;
  }

  pluck(m, t, vol = 0.25, dest = this.music) {
    const s = this.ctx.createBufferSource();
    s.buffer = this._pluckBuffer(m);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 3200;
    const g = this.ctx.createGain();
    g.gain.value = vol;
    s.connect(lp).connect(g).connect(dest);
    s.start(t);
    s.stop(t + 2.2);
  }

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
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const farm = this.mode === 'farm';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = BARS[bar];
      if (e === 0) this.pluck(root, t, 0.35);
      if (e === 4) this.pluck(root + 7, t, 0.22);
      this.pluck(chord[PICK[e]], t, e % 2 ? 0.11 : 0.15);
      for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this.pluck(m, t + 0.01, farm ? 0.24 : 0.18);
      if (farm && e % 2 === 1) this._noise(t, 0.05, 0.025, 'highpass', 6000, 0.7, this.music);
      // now and then a bird
      if (e === 3 && Math.random() < 0.12) {
        const b0 = 2200 + Math.random() * 1200;
        this._slide('sine', b0, b0 * 1.4, t, 0.12, 0.03, this.music);
        this._slide('sine', b0 * 1.2, b0 * 0.9, t + 0.15, 0.1, 0.025, this.music);
      }
      this.step++;
      this.nextTime += eighth;
    }
  }

  // ---- tractor ----------------------------------------------------------------------------------------------------

  engine(on) {
    if (!this.ctx) return;
    const c = this.ctx;
    if (on && !this._eng) {
      const o = c.createOscillator();
      o.type = 'square';
      const lp = c.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 260;
      const g = c.createGain();
      g.gain.value = 0.0001;
      // putt-putt: a slow tremolo on the engine tone
      const lfo = c.createOscillator();
      lfo.frequency.value = 9;
      const lg = c.createGain();
      lg.gain.value = 0.02;
      lfo.connect(lg).connect(g.gain);
      o.connect(lp).connect(g).connect(this.sfx);
      o.start();
      lfo.start();
      this._eng = { o, lp, g, lfo };
    } else if (!on && this._eng) {
      const e = this._eng;
      e.g.gain.setTargetAtTime(0.0001, c.currentTime, 0.1);
      e.o.stop(c.currentTime + 0.5);
      e.lfo.stop(c.currentTime + 0.5);
      this._eng = null;
    }
  }

  engineUpdate(speed, cutting) {
    if (!this._eng || !this.ctx) return;
    const t = this.ctx.currentTime;
    this._eng.o.frequency.setTargetAtTime(48 + speed * 9, t, 0.1);
    this._eng.lfo.frequency.setTargetAtTime(7 + speed * 2.5, t, 0.1);
    this._eng.lp.frequency.setTargetAtTime(220 + speed * 60 + (cutting ? 120 : 0), t, 0.1);
    this._eng.g.gain.setTargetAtTime(0.03 + speed * 0.008, t, 0.15);
  }

  /** Crunchy cutting: called with the number of crops cut this frame. */
  cutting(n) {
    if (!this.on || n <= 0) return;
    const now = this.ctx.currentTime;
    if (this._lastCut && now - this._lastCut < 0.045) return;
    this._lastCut = now;
    this._noise(now, 0.07, Math.min(0.12, 0.04 + n * 0.012), 'bandpass', 2400 + Math.random() * 900, 1.4);
    this._noise(now, 0.04, 0.05, 'highpass', 5000, 0.7);
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'full':
        this._tone('square', 392, t, 0.18, 0.06);
        this._tone('square', 392, t + 0.25, 0.25, 0.06);
        this._tone('square', 330, t + 0.25, 0.25, 0.05);
        break;
      case 'pour':
        this._noise(t, 1.0, 0.12, 'bandpass', 1500, 0.6, S, 600);
        break;
      case 'coin': {
        const m = 84 + ((arg ?? 0) % 8) * 2;
        this._tone('sine', hz(m), t, 0.22, 0.09);
        this._tone('sine', hz(m + 7), t + 0.05, 0.2, 0.06);
        break;
      }
      case 'rock':
        this._tone('sine', 140, t, 0.2, 0.25);
        this._noise(t, 0.12, 0.15, 'lowpass', 700);
        break;
      case 'sheep': {
        const o = this._tone('sawtooth', 380, t, 0.55, 0.05);
        const v = this.ctx.createOscillator();
        v.frequency.value = 7;
        const vg = this.ctx.createGain();
        vg.gain.value = 25;
        v.connect(vg).connect(o.frequency);
        v.start(t);
        v.stop(t + 0.6);
        break;
      }
      case 'cow':
        this._slide('sawtooth', 150, 105, t, 0.9, 0.06);
        this._slide('sine', 300, 210, t, 0.9, 0.04);
        break;
      case 'chicken':
        for (let i = 0; i < 3; i++) this._slide('square', 900, 650, t + i * 0.09, 0.07, 0.03);
        break;
      case 'penned':
        [79, 83, 86, 91].forEach((m, i) => this.pluck(m, t + i * 0.07, 0.3, S));
        break;
      case 'done':
        [[67, 0], [71, 0.15], [74, 0.3], [79, 0.45], [83, 0.7], [86, 0.9]].forEach(([m, d]) => this.pluck(m, t + d, 0.4, S));
        this._noise(t + 0.9, 1.4, 0.05, 'bandpass', 1600, 0.5);
        break;
      case 'buy':
        [84, 88, 91, 96].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.06, 0.3, 0.08));
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.12, 0.05);
        this._tone('square', 196, t + 0.13, 0.14, 0.05);
        break;
      default:
    }
  }
}
