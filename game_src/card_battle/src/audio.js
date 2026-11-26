import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Neon synth sound for Card Battle: everything is made live with Web Audio (no files).
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const MUSIC = {
  tempo: 118, beats: 16, wave: 'sawtooth', vol: 0.05,
  notes: [
    [0, 57, 0.5], [0.5, 64, 0.5], [1, 69, 0.5], [1.5, 64, 0.5], [2, 57, 0.5], [2.5, 64, 0.5], [3, 72, 0.5], [3.5, 64, 0.5],
    [4, 53, 0.5], [4.5, 60, 0.5], [5, 65, 0.5], [5.5, 60, 0.5], [6, 53, 0.5], [6.5, 60, 0.5], [7, 69, 0.5], [7.5, 60, 0.5],
    [8, 55, 0.5], [8.5, 62, 0.5], [9, 67, 0.5], [9.5, 62, 0.5], [10, 55, 0.5], [10.5, 62, 0.5], [11, 71, 0.5], [11.5, 62, 0.5],
    [12, 52, 0.5], [12.5, 59, 0.5], [13, 64, 0.5], [13.5, 59, 0.5], [14, 52, 0.5], [14.5, 59, 0.5], [15, 71, 0.5], [15.5, 76, 0.5],
    [0, 33, 2], [4, 29, 2], [8, 31, 2], [12, 28, 2], [2, 33, 1], [6, 29, 1], [10, 31, 1], [14, 28, 1],
  ],
};

export class Sound extends SynthBase {
  constructor() { super(); this.last = {}; this.hum = null; }

  _gate(n, gap) {
    const t = this.ctx.currentTime;
    if (this.last[n] && t - this.last[n] < gap) return false;
    this.last[n] = t;
    return true;
  }

  play(n) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.tone('sine', 700, t, 0.05, 0.07); break;
      case 'pick': this.tone('triangle', hz(84), t, 0.06, 0.07); break;
      case 'nope': this.slide('square', 220, 150, t, 0.18, 0.05); break;
      case 'deploy': this.slide('sawtooth', 200, 800, t, 0.16, 0.05); this.tone('triangle', hz(79), t + 0.1, 0.12, 0.09); this.noise(t, 0.12, 0.05, 'highpass', 2500); break;
      case 'laser': if (this._gate(n, 0.07)) this.slide('square', 1500, 420, t, 0.1, 0.035); break;
      case 'goo': if (this._gate(n, 0.1)) this.slide('sine', 300, 120, t, 0.14, 0.07); break;
      case 'hit': if (this._gate(n, 0.06)) this.noise(t, 0.05, 0.05, 'bandpass', 1400, 2); break;
      case 'beam': if (this._gate(n, 0.15)) { this.slide('sawtooth', 900, 180, t, 0.28, 0.05); this.noise(t, 0.2, 0.04, 'bandpass', 2400, 3); } break;
      case 'boom': if (this._gate(n, 0.05)) { this.noise(t, 0.3, 0.12, 'lowpass', 1800, 1, this.sfx, 200); this.tone('sine', 120, t, 0.18, 0.1); } break;
      case 'plasma': this.slide('sawtooth', 160, 1200, t, 0.35, 0.07); this.noise(t + 0.3, 0.6, 0.16, 'bandpass', 2600, 1, this.sfx, 300); this.tone('sine', 70, t + 0.4, 0.5, 0.18); break;
      case 'hole': this.slide('sine', 600, 70, t, 1.2, 0.12); this.slide('triangle', 300, 50, t + 0.1, 1.4, 0.08); break;
      case 'holeEnd': this.slide('sine', 90, 900, t, 0.25, 0.1); this.noise(t, 0.3, 0.1, 'lowpass', 900); break;
      case 'repair': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('sine', hz(72 + s), t + i * 0.07, 0.3, 0.09)); break;
      case 'double': [0, 7, 12, 19].forEach((s, i) => this.tone('square', hz(64 + s), t + i * 0.08, 0.2, 0.06)); break;
      case 'baseHit': if (this._gate(n, 0.2)) { this.tone('square', 90, t, 0.2, 0.1); this.noise(t, 0.15, 0.08, 'lowpass', 700); } break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => { this.tone('triangle', hz(72 + s), t + i * 0.1, 0.5, 0.13); this.tone('square', hz(60 + s), t + i * 0.1, 0.3, 0.04); }); break;
      case 'lose': [0, -3, -7, -12].forEach((s, i) => this.tone('sawtooth', hz(62 + s), t + i * 0.22, 0.5, 0.08)); break;
      case 'star': this.tone('triangle', hz(84), t, 0.3, 0.12); this.tone('sine', hz(91), t + 0.05, 0.3, 0.08); break;
      default: break;
    }
  }

  /** A low UFO hum while a match is on. */
  setHum(on) {
    const c = this.ctx;
    if (this.hum) { try { this.hum.o1.stop(); this.hum.o2.stop(); this.hum.l.stop(); } catch (_) { /* fine */ } this.hum = null; }
    if (!c || !on) return;
    const g = c.createGain(); g.gain.value = 0.018;
    const o1 = c.createOscillator(); o1.type = 'sine'; o1.frequency.value = 92;
    const o2 = c.createOscillator(); o2.type = 'triangle'; o2.frequency.value = 138.5;
    const l = c.createOscillator(); l.frequency.value = 4.5;
    const lg = c.createGain(); lg.gain.value = 0.009;
    l.connect(lg).connect(g.gain);
    o1.connect(g); o2.connect(g); g.connect(this.sfx);
    o1.start(); o2.start(); l.start();
    this.hum = { o1, o2, l };
  }

  setMode(on, fast = false) {
    if (!on) { this.setTune(null); this.setHum(false); return; }
    this.setTune({ ...MUSIC, tempo: fast ? 140 : MUSIC.tempo });
    this.setHum(true);
  }

  dispose() { this.setHum(false); super.dispose(); }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
