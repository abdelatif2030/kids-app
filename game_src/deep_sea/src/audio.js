import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Ocean sound, made live with Web Audio (no files): a floating, dreamy tune (soft pads, a bubbly marimba, a gentle
// bass, brushed beat while hunting), darker and slower in the deep trench, a pounding beat when the shark comes.
// Bubbles rise now and then. Effects: a "gulp" with a bubbly pop that climbs with the combo, the whoosh of a dash,
// the "!" warning when a predator gets ready, its lunge, a soft "bonk" when bitten, the bait-ball shimmer, squid ink,
// the goal fanfare, the shark's arrival, the win tune and a "try again" tune. iPhone keep-alive shared.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const CHORDS = [[38, [62, 65, 69, 72]], [34, [58, 62, 65, 69]], [41, [60, 65, 69, 72]], [36, [60, 64, 67, 71]], [38, [62, 65, 69, 74]], [34, [58, 62, 65, 70]], [36, [60, 64, 67, 72]], [33, [61, 64, 69, 73]]];
const MELODY = [[0, 0, 81], [0, 3, 77], [0, 6, 74], [1, 0, 77], [1, 4, 81], [2, 0, 84], [2, 3, 81], [3, 0, 79], [3, 4, 76],
  [4, 0, 81], [4, 3, 84], [4, 6, 86], [5, 0, 82], [5, 4, 77], [6, 0, 79], [6, 3, 76], [7, 0, 76], [7, 4, 73]];

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
    this.tempo = mode === 'boss' ? 132 : mode === 'play' ? 100 : 84;
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

  setWorld(w) { this.world = w; }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play' || this.mode === 'boss';
    const boss = this.mode === 'boss';
    const deep = this.world === 'trench';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      const sh = deep ? -5 : 0;
      if (e === 0) chord.forEach((m) => this._tone('sine', hz(m - 12 + sh), t, eighth * 7.5, 0.025, this.music, 0.6)); // pad
      if (e === 0 || (play && e === 4) || (boss && e % 2 === 0)) this._tone('triangle', hz(root - 12 + sh), t, eighth * 1.8, 0.2, this.music, 0.02);
      if (e % 2 === 1 || !play) { const m = chord[(step >> 1) % 4] + 12 + sh; this.mar(m, t, 0.05); }
      if (!deep || e % 4 === 0) for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) this._tone('sine', hz(m + sh), t + 0.004, eighth * 2.5, play ? 0.06 : 0.045, this.music, 0.03);
      if (play) {
        if (e === 0 || e === 4 || (boss && e === 6)) this._slide('sine', 120, 45, t, 0.2, boss ? 0.32 : 0.18, this.music);
        if (e === 4 || (boss && e === 2)) this._noise(t, 0.12, boss ? 0.09 : 0.04, 'bandpass', 1800, 0.7, this.music);
        if (e % 2 === 1) this._noise(t, 0.05, 0.015, 'highpass', 6000, 1, this.music);
      }
      if (e === 0 && Math.random() < 0.5) this._bubbles(t + Math.random() * eighth * 4, 3);
      this.step++;
      this.nextTime += eighth;
    }
  }

  _bubbles(t, n) {
    for (let i = 0; i < n; i++) { const f = 500 + Math.random() * 900; this._slide('sine', f, f * 2.2, t + i * 0.07, 0.06, 0.02); }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'gulp': { // a gulp and a bubbly pop that climbs with the combo
        const k = Math.min(arg ?? 1, 10);
        this._slide('sine', 380, 120, t, 0.14, 0.2);
        const f = 600 + k * 80;
        this._slide('sine', f, f * 2, t + 0.08, 0.08, 0.06);
        this._noise(t, 0.08, 0.05, 'bandpass', 900, 2);
        break;
      }
      case 'bigGulp':
        this._slide('sine', 260, 60, t, 0.35, 0.35);
        this._bubbles(t + 0.15, 6);
        break;
      case 'combo':
        [79, 83, 86, 91].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.05, 0.15, 0.05));
        break;
      case 'dash':
        this._noise(t, 0.4, 0.14, 'bandpass', 600, 0.9, S, 2200);
        this._bubbles(t, 4);
        break;
      case 'warn': // the predator gets ready: a short alarm
        this._tone('square', 880, t, 0.08, 0.04);
        this._tone('square', 1100, t + 0.12, 0.1, 0.04);
        this._slide('sawtooth', 90, 140, t, 0.5, 0.04);
        break;
      case 'lunge':
        this._noise(t, 0.45, 0.16, 'lowpass', 900, 0.8, S, 200);
        this._slide('sine', 160, 60, t, 0.4, 0.2);
        break;
      case 'bitten': // a soft bonk (nobody gets hurt)
        this._slide('triangle', 520, 160, t, 0.3, 0.15);
        this._bubbles(t + 0.1, 5);
        break;
      case 'bait':
        for (let i = 0; i < 10; i++) this._tone('sine', 1800 + Math.random() * 1200, t + i * 0.05, 0.12, 0.02);
        break;
      case 'ink':
        this._noise(t, 0.4, 0.08, 'lowpass', 500, 1, S, 150);
        break;
      case 'grow':
        [72, 76, 79, 84].forEach((m, i) => this.mar(m, t + i * 0.08, 0.14, S));
        break;
      case 'boss':
        this._slide('sawtooth', 70, 45, t, 1.4, 0.08);
        this._slide('sine', 90, 35, t, 1.2, 0.35);
        [[50, 0], [51, 0.45], [50, 0.9], [51, 1.2]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.3, 0.12));
        break;
      case 'won':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.56], [84, 0.68], [88, 0.8]].forEach(([m, d]) => this.mar(m, t + d, 0.2, S));
        this._bubbles(t + 0.3, 10);
        break;
      case 'lost':
        [[67, 0], [63, 0.3], [60, 0.6]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.35, 0.08));
        break;
      case 'tick':
        this._tone('square', 1200, t, 0.04, 0.03);
        break;
      case 'star':
        this.mar(88 + (arg ?? 0) * 3, t, 0.2, S);
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
