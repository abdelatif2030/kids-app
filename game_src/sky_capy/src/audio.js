import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Sky Capy sound, made live with Web Audio (no files): an airy adventurous tune (bass, plucks, a bright melody; a heavier mode for
// the boss) and effects: soft bubble shots, pops that climb with the combo, pearls, feathers, capsules, a songbird rescue, the Bubble
// Storm, a friendly boss horn and the rank fanfare. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// G - Em - C - D, twice [bass, chord]
const CHORDS = [[43, [62, 67, 71]], [40, [59, 64, 67]], [36, [60, 64, 67]], [38, [62, 66, 69]], [43, [62, 67, 71]], [40, [59, 64, 67]], [36, [60, 64, 69]], [38, [62, 66, 69]]];
const MELODY = [[0, 0, 79], [0, 3, 83], [0, 5, 86], [1, 0, 84], [1, 3, 83], [1, 6, 79], [2, 0, 84], [2, 2, 88], [2, 4, 86], [2, 6, 84], [3, 0, 86], [3, 4, 81], [3, 6, 78],
  [4, 0, 79], [4, 3, 83], [4, 5, 86], [5, 0, 88], [5, 3, 86], [5, 6, 83], [6, 0, 84], [6, 2, 81], [6, 4, 84], [6, 6, 88], [7, 0, 86], [7, 4, 83]];

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
    this.tempo = mode === 'boss' ? 132 : mode === 'play' ? 118 : 100;
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
    const play = this.mode === 'play' || this.mode === 'boss';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      if (e % 2 === 0) this._tone('triangle', hz(root - 12), t, eighth * 1.6, 0.16, this.music, 0.006);
      if (e % 2 === 1) chord.forEach((m) => this._tone('triangle', hz(m - 12), t, 0.11, 0.026, this.music, 0.003));
      if (play && e % 4 === 0) this._noise(t, 0.04, 0.03, 'lowpass', 800, 1, this.music);
      if (play && e % 4 === 2) this._noise(t, 0.03, 0.018, 'highpass', 6500, 1, this.music);
      if (this.mode === 'boss' && e % 4 === 0) this._tone('sawtooth', hz(root - 24), t, 0.2, 0.05, this.music, 0.01);
      for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) { this._tone('sine', hz(m), t, 0.3, play ? 0.075 : 0.06, this.music, 0.002); this._tone('sine', hz(m) * 4, t, 0.06, 0.015, this.music, 0.002); }
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
      case 'shoot': this._slide('sine', 520, 880, t, 0.07, 0.025); break;
      case 'hit': this._tone('triangle', 300 + Math.random() * 100, t, 0.04, 0.03); break;
      case 'pop': this._noise(t, 0.06, 0.07, 'highpass', 2500, 1); this._slide('triangle', 300, 1000, t, 0.14, 0.07); this._tone('sine', hz(84 + Math.min(arg || 0, 8)), t + 0.06, 0.2, 0.04); break;
      case 'pearl': this._tone('sine', hz(88 + Math.min(arg || 0, 8) * 2), t, 0.1, 0.045); this._tone('sine', hz(100), t + 0.04, 0.12, 0.03); break;
      case 'feather': this._tone('sine', hz(96), t, 0.14, 0.04); break;
      case 'capsule': [76, 80, 83, 88].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.05, 0.3, 0.06)); break;
      case 'rescue': [88, 92, 95, 100, 95, 100].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.06, 0.12, 0.05)); break;
      case 'chirp': this._slide('sine', 1800, 2600, t, 0.07, 0.03); break;
      case 'storm': this._noise(t, 1.0, 0.1, 'bandpass', 500, 0.7, this.sfx, 3000); [72, 76, 79, 84, 88].forEach((m, i) => this._tone('sine', hz(m), t + 0.05 + i * 0.07, 0.5, 0.06)); break;
      case 'hurt': this._tone('sine', 170, t, 0.2, 0.14); this._noise(t, 0.1, 0.05, 'lowpass', 500, 1); break;
      case 'boss': this._slide('sawtooth', 110, 60, t, 0.9, 0.08); this._noise(t, 0.7, 0.05, 'lowpass', 400, 1); break;
      case 'combo': [84, 88].forEach((m, i) => this._tone('triangle', hz(m + (arg || 0) * 2), t + i * 0.05, 0.2, 0.05)); break;
      case 'rank': [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [88, 0.55]].forEach(([m, d]) => { this._tone('triangle', hz(m), t + d, 0.45, 0.07); this._tone('sine', hz(m) * 2, t + d, 0.2, 0.03); }); break;
      case 'dead': [[67, 0], [64, 0.3], [60, 0.6], [55, 0.9]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.5, 0.06)); break;
      default:
    }
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
