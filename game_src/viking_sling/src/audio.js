import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Sounds for the Viking Slingshot, all synthesised live (Web Audio, no files).
import { SynthBase, hz } from '../../cozy_kit/audio.js';

export class Sound extends SynthBase {
  constructor() { super(); this.lastImpact = 0; }

  play(n, v = 1) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'twang': this.slide('sawtooth', 520, 120, t, 0.28, 0.1); this.tone('triangle', 196, t, 0.3, 0.1); break;
      case 'stretch': this.tone('triangle', 150 + v * 200, t, 0.06, 0.05); break;
      case 'thud': this.noise(t, 0.16, 0.18 * v, 'lowpass', 380); this.tone('sine', 90, t, 0.14, 0.14 * v); break;
      case 'wood': this.noise(t, 0.12, 0.2 * v, 'bandpass', 1500, 2); this.tone('square', 240, t, 0.05, 0.06); this.noise(t + 0.05, 0.1, 0.12 * v, 'bandpass', 900, 2); break;
      case 'stone': this.noise(t, 0.34, 0.26 * v, 'lowpass', 900, 1, undefined, 160); this.tone('sine', 70, t, 0.25, 0.18); break;
      case 'ice': for (let i = 0; i < 4; i++) this.tone('triangle', 1700 + i * 330 + (i % 2) * 90, t + i * 0.03, 0.14, 0.07 * v); this.noise(t, 0.12, 0.1, 'highpass', 4000); break;
      case 'pop': this.slide('sine', 300, 900, t, 0.14, 0.14); [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(84 + s), t + 0.1 + i * 0.05, 0.14, 0.09)); break;
      case 'coin': this.tone('square', hz(88), t, 0.06, 0.05); this.tone('square', hz(95), t + 0.06, 0.16, 0.05); break;
      case 'boom': this.noise(t, 0.6, 0.4, 'lowpass', 1400, 1, undefined, 80); this.tone('sine', 60, t, 0.5, 0.3); break;
      case 'dash': this.noise(t, 0.25, 0.14, 'bandpass', 1200, 1, undefined, 3000); break;
      case 'bounce': this.slide('sine', 200, 520, t, 0.14, 0.12); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.11, 0.6, 0.14)); this.tone('square', hz(55), t, 0.5, 0.05); break;
      case 'lose': [0, -2, -5, -9].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.18, 0.4, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      default: break;
    }
  }

  /** Impact sound for a physics hit, thinned out so a collapse does not turn into noise. */
  impact(mat, J) {
    const c = this.ctx;
    if (!c || c.state !== 'running') return;
    const now = c.currentTime;
    if (now - this.lastImpact < 0.045) return;
    this.lastImpact = now;
    const v = Math.min(1, 0.3 + J / 20);
    this.play(mat === 'wood' ? 'wood' : mat === 'stone' ? 'stone' : mat === 'ice' ? 'ice' : 'thud', v);
  }

  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); return; }
    this.setBed('wind');
    // a stomping Viking horn tune in D minor
    this.setTune({ tempo: 96, beats: 16, wave: 'sawtooth', vol: 0.05, notes: [[0, 50, 1.5], [2, 57, 1], [3, 53, 1], [4, 57, 1.5], [6, 62, 1], [7, 60, 1], [8, 58, 1.5], [10, 57, 1], [11, 53, 1], [12, 55, 1.5], [14, 57, 2], [0, 38, 2], [4, 38, 2], [8, 34, 2], [12, 36, 2]] });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
