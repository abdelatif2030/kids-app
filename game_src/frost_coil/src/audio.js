import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Winter puzzle sound, made live with Web Audio (no files): a gentle music-box waltz with a celesta, soft pads,
// sleigh bells and a whisper of wind. Effects: an icy "click" and a little crackle when a tile turns, a chime that
// climbs as the ice reaches further from the dragon, a dull knock on a frozen tile, the star's sparkle, the dragon's
// whoosh into the portal and the portal's swirl, a happy win tune, a soft "the ice held" tune when the moves run
// out, star chimes and taps. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// a waltz in D major: D - Bm - G - A ... [bass, chord]
const CHORDS = [[50, [62, 66, 69]], [47, [59, 62, 66]], [43, [59, 62, 67]], [45, [61, 64, 69]], [50, [62, 66, 69]], [42, [61, 66, 69]], [43, [62, 67, 71]], [45, [61, 64, 69]]];
const MELODY = [[0, 0, 78], [0, 2, 81], [0, 4, 86], [1, 0, 83], [1, 2, 81], [1, 4, 78], [2, 0, 79], [2, 2, 83], [2, 4, 86], [3, 0, 85], [3, 4, 81],
  [4, 0, 78], [4, 2, 81], [4, 4, 90], [5, 0, 88], [5, 2, 85], [5, 4, 81], [6, 0, 83], [6, 2, 86], [6, 4, 91], [7, 0, 88]];

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
    this.tempo = mode === 'play' ? 96 : 88;
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
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, len / 4));
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

  /** marimba: a sine with a fast-fading overtone */
  mar(m, t, vol, dest = this.music) {
    const f = hz(m);
    this._tone('sine', f, t, 0.35, vol, dest, 0.003);
    this._tone('sine', f * 4, t, 0.05, vol * 0.3, dest, 0.002);
  }

  // ---- music (a waltz: six eighths a bar) ---------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 48;
      const bar = Math.floor(step / 6);
      const e = step % 6;
      const [root, chord] = CHORDS[bar];
      if (e === 0) { this._tone('triangle', hz(root - 12), t, eighth * 2.2, 0.16, this.music, 0.01); chord.forEach((m) => this._tone('sine', hz(m - 12), t, eighth * 5.5, 0.02, this.music, 0.4)); }
      if (e === 2 || e === 4) chord.forEach((m) => this._tone('sine', hz(m), t, 0.25, 0.022, this.music, 0.004));
      for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) { this._tone('sine', hz(m), t, 0.7, play ? 0.07 : 0.06, this.music, 0.002); this._tone('sine', hz(m) * 4, t, 0.12, 0.012, this.music, 0.002); }
      // sleigh bells now and then
      if (play && e === 3 && bar % 2 === 1) for (let i = 0; i < 4; i++) this._noise(t + i * 0.035, 0.05, 0.02, 'highpass', 7500, 1, this.music);
      // a whisper of wind
      if (e === 0 && bar % 4 === 0) this._noise(t, eighth * 10, 0.012, 'bandpass', 600, 0.5, this.music, 900);
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
      case 'turn': // an icy click and a small crackle
        this._tone('triangle', 1600, t, 0.05, 0.06);
        this._noise(t, 0.06, 0.05, 'highpass', 4000, 1);
        this._tone('sine', 900, t + 0.02, 0.08, 0.04);
        break;
      case 'reach': { // the ice reaches one tile further: a chime that climbs
        const k = Math.min(arg ?? 1, 12);
        const m = 74 + [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 26][k - 1];
        this._tone('sine', hz(m), t, 0.5, 0.07);
        this._tone('sine', hz(m + 12), t + 0.04, 0.3, 0.03);
        break;
      }
      case 'stuck': // a frozen tile does not move
        this._tone('sine', 220, t, 0.12, 0.12);
        this._noise(t, 0.08, 0.05, 'lowpass', 600, 1);
        break;
      case 'star':
        [88, 91, 95].forEach((m, i) => this._tone('sine', hz(m + (arg ?? 0) * 2), t + i * 0.05, 0.3, 0.05));
        break;
      case 'whoosh': // the dragon slides through the ice into the portal
        this._noise(t, 1.2, 0.12, 'bandpass', 500, 0.8, S, 3000);
        this._slide('sine', 300, 900, t, 1.1, 0.06);
        break;
      case 'portal':
        for (let i = 0; i < 8; i++) this._tone('sine', hz(84 + i * 2), t + i * 0.05, 0.4, 0.04);
        this._slide('sine', 200, 60, t, 0.8, 0.2);
        break;
      case 'win':
        [[74, 0], [78, 0.14], [81, 0.28], [86, 0.42], [81, 0.62], [86, 0.76], [90, 0.95]].forEach(([m, d]) => { this._tone('sine', hz(m), t + d, 0.6, 0.08); this._tone('sine', hz(m) * 4, t + d, 0.1, 0.015); });
        for (let i = 0; i < 8; i++) this._noise(t + 0.2 + i * 0.05, 0.05, 0.025, 'highpass', 7500, 1);
        break;
      case 'out': // the ice held: soft and kind
        [[74, 0], [71, 0.3], [69, 0.6], [66, 0.9]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.45, 0.06));
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
