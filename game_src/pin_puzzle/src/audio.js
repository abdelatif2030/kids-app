import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Sound for «اسحب الدبوس»: everything is synthesised live (no files). Music is a soft looping tune.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const SCALE = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24];

export class Sound extends SynthBase {
  play(n, a = 0) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'pull': this.slide('sawtooth', 520, 180, t, 0.28, 0.05); this.noise(t, 0.25, 0.05, 'bandpass', 1800, 2, this.sfx, 600); break;
      case 'plink': this.tone('triangle', hz(72 + SCALE[Math.min(a, SCALE.length - 1)]), t, 0.22, 0.1); break;
      case 'hit': this.tone('sine', 700 + Math.random() * 300, t, 0.04, Math.min(0.05, 0.01 * a)); break;
      case 'lava': this.noise(t, 0.4, 0.07, 'lowpass', 900, 1, this.sfx, 200); this.slide('sine', 300, 90, t, 0.35, 0.05); break;
      case 'goal': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.07, 0.3, 0.1)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.13)); break;
      case 'fail': [7, 4, 0].forEach((s, i) => this.tone('sine', hz(64 + s), t + i * 0.18, 0.4, 0.12)); break;
      case 'undo': this.slide('sine', 300, 600, t, 0.15, 0.07); break;
      case 'hint': this.tone('sine', hz(88), t, 0.12, 0.07); this.tone('sine', hz(95), t + 0.1, 0.18, 0.07); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      default: break;
    }
  }

  setMode(on) {
    if (!on) { this.setTune(null); return; }
    this.setTune({ tempo: 100, beats: 16, wave: 'triangle', vol: 0.07, notes: [[0, 69, 1], [1, 72, 1], [2, 76, 2], [4, 74, 1], [5, 71, 1], [6, 67, 2], [8, 65, 1], [9, 69, 1], [10, 72, 2], [12, 71, 1], [13, 67, 1], [14, 64, 2], [0, 45, 2], [4, 43, 2], [8, 41, 2], [12, 43, 2]] });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
