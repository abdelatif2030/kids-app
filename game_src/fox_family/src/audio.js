import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Countryside sound, made live with Web Audio (no files): a cheerful plucked tune with banjo-like rolls, bass and a
// soft snare; it turns mellow for autumn and gets sleigh bells in winter, with birds in summer. Effects: hops, lily-pad
// plops, berry pops, a cub's happy yip and chime, brakes squeaking when a car stops for the cubs, a honk, bumps,
// splashes, the crossing bell, the train's horn and chugging, little marching steps into the den and star chimes.
// The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const CHORDS = [[48, [64, 67, 72]], [53, [65, 69, 72]], [55, [62, 67, 71]], [48, [64, 67, 72]], [57, [64, 69, 72]], [53, [65, 69, 72]], [55, [62, 67, 71]], [48, [64, 67, 72]]];
const MELODY = [[0, 0, 76], [0, 3, 79], [1, 0, 81], [1, 4, 79], [2, 0, 74], [2, 3, 76], [2, 6, 79], [3, 0, 72], [4, 0, 76], [4, 3, 81], [5, 0, 84], [5, 4, 81], [6, 0, 79], [6, 4, 74], [7, 0, 72]];

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
    this.tempo = mode === 'play' ? 118 : 104;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  _pluckBuffer(m) {
    if (this.plucks.has(m)) return this.plucks.get(m);
    const c = this.ctx;
    const sr = c.sampleRate;
    const len = Math.floor(sr * 1.4);
    const buf = c.createBuffer(1, len, sr);
    const out = buf.getChannelData(0);
    const period = Math.max(2, Math.round(sr / hz(m)));
    const ring = new Float32Array(period);
    for (let i = 0; i < period; i++) ring[i] = (Math.random() * 2 - 1) * 0.6;
    let idx = 0;
    for (let i = 0; i < len; i++) {
      const next = (idx + 1) % period;
      const v = (ring[idx] + ring[next]) * 0.5 * 0.994;
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
    lp.frequency.value = 3000;
    const g = this.ctx.createGain();
    g.gain.value = vol;
    s.connect(lp).connect(g).connect(dest);
    s.start(t);
    s.stop(t + 1.4);
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
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  setSeason(s) { this.season = s; }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const season = this.season || 'summer';
    const shift = season === 'autumn' ? -3 : season === 'winter' ? 2 : 0;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      if (e === 0) this.pluck(root + shift, t, 0.32);
      if (e === 4) this.pluck(root + 7 + shift, t, 0.22);
      // banjo-ish rolls
      this.pluck(chord[[0, 1, 2, 1, 0, 2, 1, 2][e]] + shift, t, e % 2 ? 0.08 : 0.11);
      for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this.pluck(m + shift, t + 0.01, 0.2);
      if (e === 2 || e === 6) this._noise(t, 0.06, 0.04, 'bandpass', 2500, 1, this.music); // a soft snare
      if (season === 'winter' && e % 2 === 0) this._noise(t, 0.08, 0.035, 'highpass', 8000, 1, this.music); // sleigh bells
      if (season === 'winter' && e % 2 === 0) this._tone('sine', 5200, t, 0.06, 0.008, this.music);
      if (season !== 'winter' && e === 5 && Math.random() < 0.2) { const b0 = 2400 + Math.random() * 900; this._slide('sine', b0, b0 * 1.3, t, 0.1, 0.02, this.music); }
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
      case 'hop':
        this._slide('sine', 380, 620, t, 0.09, 0.08);
        this._noise(t + 0.08, 0.04, 0.04, 'lowpass', 900);
        break;
      case 'plop':
        this._slide('sine', 700, 300, t, 0.12, 0.08);
        break;
      case 'berry':
        this._tone('sine', hz(84 + (arg ?? 0) * 2), t, 0.15, 0.08);
        this._tone('sine', hz(91 + (arg ?? 0) * 2), t + 0.05, 0.15, 0.06);
        break;
      case 'cub': // a happy little yip and a chime
        this._slide('triangle', 900, 1500, t, 0.1, 0.07);
        this._slide('triangle', 1100, 1700, t + 0.12, 0.1, 0.06);
        [84, 88, 91].forEach((m, i) => this.pluck(m, t + 0.2 + i * 0.07, 0.25, S));
        break;
      case 'stop': // brakes squeak for the cubs
        this._slide('sine', 1800, 1500, t, 0.25, 0.025);
        break;
      case 'honk':
        this._tone('square', 400, t, 0.12, 0.03);
        this._tone('square', 400, t + 0.16, 0.12, 0.03);
        break;
      case 'bump':
        this._tone('sine', 160, t, 0.18, 0.2);
        this._noise(t, 0.12, 0.08, 'lowpass', 900);
        break;
      case 'splash':
        this._noise(t, 0.5, 0.15, 'bandpass', 1300, 0.7, S, 400);
        break;
      case 'trainWarn': // the crossing bell
        for (let i = 0; i < 4; i++) this._tone('sine', 1800, t + i * 0.3, 0.2, 0.05);
        break;
      case 'train': // horn and chugging
        this._tone('sawtooth', 220, t, 0.7, 0.04);
        this._tone('sawtooth', 277, t, 0.7, 0.03);
        for (let i = 0; i < 6; i++) this._noise(t + 0.2 + i * 0.18, 0.1, 0.05, 'lowpass', 600);
        break;
      case 'den':
        [[67, 0], [72, 0.12], [76, 0.24], [79, 0.36], [84, 0.6]].forEach(([m, d]) => this.pluck(m, t + d, 0.38, S));
        break;
      case 'march':
        this._noise(t, 0.04, 0.04, 'bandpass', 1200, 2);
        break;
      case 'star':
        this.pluck(88 + (arg ?? 0) * 3, t, 0.35, S);
        this._tone('sine', hz(100 + (arg ?? 0) * 3), t, 0.4, 0.04);
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.1, 0.03);
        break;
      default:
    }
  }
}
