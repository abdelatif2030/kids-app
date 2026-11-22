import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Mars Farm sounds: everything is synthesised with Web Audio (no files).
import { SynthBase, hz } from '../../cozy_kit/audio.js';

export class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'select': this.tone('triangle', hz(76), t, 0.08, 0.07); break;
      case 'plant': this.slide('sine', 300, 560, t, 0.12, 0.09); this.noise(t, 0.06, 0.03, 'lowpass', 600); break;
      case 'harvest': this.tone('triangle', hz(76), t, 0.1, 0.1); this.tone('triangle', hz(83), t + 0.07, 0.14, 0.1); break;
      case 'ripe': this.tone('sine', hz(93), t, 0.25, 0.04); break;
      case 'coin': this.tone('square', hz(88), t, 0.07, 0.05); this.tone('square', hz(95), t + 0.07, 0.14, 0.05); break;
      case 'milk': this.slide('triangle', 520, 380, t, 0.18, 0.08); this.slide('triangle', 400, 520, t + 0.16, 0.16, 0.07); break;
      case 'feed': this.noise(t, 0.09, 0.07, 'bandpass', 1800, 2); this.noise(t + 0.12, 0.09, 0.06, 'bandpass', 1500, 2); break;
      case 'load': this.tone('square', hz(48), t, 0.09, 0.07); this.tone('square', hz(55), t + 0.09, 0.1, 0.06); break;
      case 'done': this.tone('sine', hz(84), t, 0.35, 0.1); this.tone('sine', hz(91), t + 0.1, 0.4, 0.09); break;
      case 'build': this.noise(t, 0.12, 0.12, 'lowpass', 400); [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(64 + s), t + 0.1 + i * 0.06, 0.2, 0.1)); break;
      case 'region': [0, 4, 7, 11, 14].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.07, 0.3, 0.11)); this.noise(t, 0.4, 0.05, 'highpass', 3000); break;
      case 'drone': this.slide('sawtooth', 260, 880, t, 0.9, 0.035); this.noise(t, 0.9, 0.04, 'bandpass', 2400, 1.5, this.sfx, 5000); break;
      case 'goat': this.tone('triangle', hz(74), t, 0.1, 0.1); this.tone('triangle', hz(70), t + 0.1, 0.12, 0.1); break;
      case 'colonist': this.tone('triangle', hz(79), t, 0.1, 0.09); this.tone('triangle', hz(86), t + 0.09, 0.2, 0.09); this.slide('sine', 900, 250, t, 0.4, 0.03); break;
      case 'levelup': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.09, 0.5, 0.13)); break;
      case 'ready': [0, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.08, 0.3, 0.1)); break;
      case 'err': this.slide('square', 240, 150, t, 0.16, 0.05); break;
      case 'rumble': this.noise(t, 4.6, 0.22, 'lowpass', 160, 1, this.sfx, 1400); this.slide('sawtooth', 70, 150, t, 4.6, 0.05); break;
      case 'land': this.noise(t, 0.7, 0.2, 'lowpass', 500, 1, this.sfx, 90); break;
      case 'firework': this.slide('sine', 500, 1800, t, 0.25, 0.05); this.noise(t + 0.25, 0.35, 0.1, 'highpass', 1200); this.tone('triangle', hz(84 + Math.floor(Math.random() * 12)), t + 0.25, 0.3, 0.07); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24, 28].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.12, 0.9, 0.14)); break;
      default: break;
    }
  }

  setMode(on) {
    if (!on) { this.setBed(null); this.setTune(null); return; }
    this.setBed('wind');
    this.setTune({
      tempo: 112, beats: 16, wave: 'triangle', vol: 0.075,
      notes: [[0, 72, 1], [1, 76, 1], [2, 79, 1], [3, 76, 1], [4, 74, 1], [5, 77, 1], [6, 81, 2], [8, 72, 1], [9, 79, 1], [10, 76, 1], [11, 74, 1], [12, 71, 1], [13, 74, 1], [14, 79, 2],
        [0, 48, 2], [4, 53, 2], [8, 48, 2], [12, 55, 2]],
    });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
