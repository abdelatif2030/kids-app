import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
// Hot Spring Village sound, made live with Web Audio (no files): a very soft wind bed, a warm slow pentatonic tune,
// a woody slice, a splash and soft steam for the spring, bright coin pings, a paper-lantern chime for each light.
const TUNE = {
  tempo: 66,
  beats: 16,
  wave: 'sine',
  vol: 0.12,
  notes: [
    [0, 69, 1.5], [2, 72, 1], [3, 76, 2], [6, 74, 1], [7, 72, 1], [8, 69, 2], [10, 67, 1], [11, 69, 2], [14, 72, 1.5],
    [0, 45, 4], [4, 50, 4], [8, 52, 4], [12, 45, 4],
    [4, 81, 0.5], [12, 84, 0.5],
  ],
};

export class Sound extends SynthBase {
  play(name) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(name);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (name) {
      case 'cut': this.noise(t, 0.05, 0.1, 'bandpass', 1500, 4); this.tone('triangle', 330 + Math.random() * 60, t, 0.07, 0.05); break;
      case 'pick': this.tone('triangle', hz(76 + Math.floor(Math.random() * 4) * 2), t, 0.1, 0.07); break;
      case 'drop': this.noise(t, 0.2, 0.09, 'lowpass', 900, 1, undefined, 300); this.tone('sine', 180, t, 0.12, 0.09); this.tone('sine', hz(84), t + 0.05, 0.14, 0.04); break;
      case 'splash': this.noise(t, 0.35, 0.12, 'bandpass', 1100, 1.2, undefined, 400); this.tone('sine', 260, t, 0.2, 0.06); this.tone('sine', 380, t + 0.07, 0.2, 0.05); break;
      case 'thaw': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(74 + s), t + i * 0.07, 0.3, 0.1)); this.noise(t, 0.5, 0.06, 'highpass', 3500, 0.8); break;
      case 'coin': this.tone('square', hz(88), t, 0.07, 0.05); this.tone('square', hz(95), t + 0.07, 0.16, 0.05); break;
      case 'tea': this.tone('sine', hz(79), t, 0.3, 0.09); this.tone('sine', hz(83), t + 0.1, 0.4, 0.07); break;
      case 'buy': [0, 4, 7, 11, 12].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.08, 0.4, 0.12)); break;
      case 'arrive': this.tone('sine', hz(72), t, 0.15, 0.05); this.tone('sine', hz(67), t + 0.12, 0.2, 0.05); break;
      case 'lantern': [0, 7, 12, 16].forEach((s, i) => this.tone('sine', hz(79 + s), t + i * 0.11, 0.9, 0.11)); this.noise(t, 0.4, 0.05, 'highpass', 4500, 0.7); break;
      case 'glow': for (let i = 0; i < 12; i++) this.tone('sine', hz(72 + [0, 4, 7, 12][i % 4] + Math.floor(i / 4) * 5), t + i * 0.12, 0.8, 0.09); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.1, 0.6, 0.13)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }

  setMode(m) { if (m === 'off') { this.setBed(null); this.setTune(null); } else { this.setBed('wind'); this.setTune(TUNE); } }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
