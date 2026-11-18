import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Marble Dozer sound, made live with Web Audio (no files): a playful marimba tune, a soft engine rumble while pushing, marbles knocking,
// plinks that climb as marbles drop into the hole, a spring for the bumpers, a sparkle for the gates, and a fanfare.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// C - Am - F - G, twice [bass, chord]
const CHORDS = [[48, [64, 67, 72]], [45, [64, 69, 72]], [41, [65, 69, 72]], [43, [62, 67, 71]], [48, [64, 67, 72]], [45, [60, 64, 69]], [41, [65, 69, 72]], [43, [62, 67, 71]]];
const MELODY = [[0, 0, 84], [0, 2, 79], [0, 4, 84], [0, 6, 88], [1, 0, 86], [1, 2, 84], [1, 4, 81], [1, 6, 84], [2, 0, 84], [2, 2, 81], [2, 4, 77], [2, 6, 81], [3, 0, 83], [3, 3, 79], [3, 6, 74],
  [4, 0, 84], [4, 2, 79], [4, 4, 84], [4, 6, 91], [5, 0, 88], [5, 2, 84], [5, 4, 81], [5, 6, 79], [6, 0, 81], [6, 2, 84], [6, 4, 86], [6, 6, 84], [7, 0, 83], [7, 4, 79]];

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
    this.tempo = mode === 'play' ? 116 : 100;
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

  // ---- music ---------------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      if (e % 4 === 0) this._tone('triangle', hz(root - 12), t, eighth * 2.4, 0.15, this.music, 0.006);
      if (e % 4 === 2) chord.forEach((m) => this._tone('sine', hz(m), t, 0.14, 0.026, this.music, 0.003));
      if (play && e % 2 === 1) this._noise(t, 0.025, 0.012, 'highpass', 7000, 1, this.music);
      for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) { this._tone('sine', hz(m), t, 0.32, play ? 0.07 : 0.055, this.music, 0.002); this._tone('sine', hz(m) * 4, t, 0.05, 0.016, this.music, 0.002); }
      this.step++;
      this.nextTime += eighth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    switch (name) {
      case 'tap': this._tone('sine', 880, t, 0.06, 0.05); break;
      case 'no': this._tone('square', 220, t, 0.1, 0.03); break;
      case 'rumble': this._noise(t, 0.12, 0.035, 'lowpass', 220, 1); break; // the engine pushing
      case 'click': this._tone('sine', 1500 + Math.random() * 700, t, 0.025, 0.02); break; // marbles knocking
      case 'bump': this._slide('sine', 220, 520, t, 0.14, 0.09); this._tone('triangle', 880, t + 0.05, 0.15, 0.04); break;
      case 'score': { const m = 79 + Math.min(arg || 0, 12); this._tone('sine', hz(m), t, 0.14, 0.06); this._tone('sine', hz(m + 12), t + 0.04, 0.2, 0.04); break; }
      case 'gate': [76, 83, 88].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.05, 0.25, 0.05)); this._noise(t, 0.2, 0.03, 'highpass', 5000, 1); break;
      case 'done': [72, 76, 79, 84].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.07, 0.35, 0.07)); break;
      case 'awesome': [84, 88, 91, 96].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.05, 0.3, 0.06)); break;
      case 'tick': this._tone('square', 1200, t, 0.03, 0.025); break;
      case 'win': [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.55], [84, 0.68], [88, 0.85], [91, 1.05]].forEach(([m, d]) => { this._tone('triangle', hz(m), t + d, 0.5, 0.08); this._tone('sine', hz(m) * 2, t + d, 0.2, 0.03); }); for (let i = 0; i < 8; i++) this._noise(t + 0.2 + i * 0.07, 0.05, 0.025, 'highpass', 7500, 1); break;
      case 'lose': [[67, 0], [64, 0.25], [60, 0.5]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.45, 0.06)); break;
      default:
    }
  }
}
