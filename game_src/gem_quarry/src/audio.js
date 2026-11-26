import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Sound of the quarry, all made live with Web Audio (no files): chiptune-ish upbeat tune plus named effects.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

export class Sound extends SynthBase {
  play(n) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'dig': this.noise(t, 0.05, 0.07, 'highpass', 2500); this.tone('square', hz(60 + ((t * 7) | 0) % 5), t, 0.05, 0.03); break;
      case 'drop': this.noise(t, 0.12, 0.1, 'lowpass', 420); this.tone('triangle', hz(43), t, 0.12, 0.1); break;
      case 'engine': this.slide('sawtooth', 70, 140, t, 0.5, 0.05); this.noise(t, 0.4, 0.04, 'lowpass', 300); break;
      case 'horn': this.tone('square', hz(57), t, 0.22, 0.05); this.tone('square', hz(61), t, 0.22, 0.05); break;
      case 'coin': this.tone('square', hz(88), t, 0.07, 0.05); this.tone('square', hz(95), t + 0.07, 0.14, 0.05); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      case 'warn': this.tone('square', hz(64), t, 0.12, 0.05); this.tone('square', hz(58), t + 0.14, 0.18, 0.05); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'no': this.tone('triangle', hz(52), t, 0.12, 0.07); break;
      default: break;
    }
  }
  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); return; }
    const N = [[0, 69, 1], [1, 72, 1], [2, 76, 1], [3, 72, 1], [4, 74, 1], [5, 77, 1], [6, 81, 1], [7, 77, 1], [8, 76, 1], [9, 72, 1], [10, 69, 1], [11, 72, 1], [12, 71, 1], [13, 74, 1], [14, 76, 2],
      [0, 45, 1], [2, 45, 1], [4, 50, 1], [6, 50, 1], [8, 48, 1], [10, 48, 1], [12, 43, 1], [14, 43, 1]];
    this.setTune({ tempo: 132, beats: 16, wave: 'square', vol: 0.045, notes: N });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
