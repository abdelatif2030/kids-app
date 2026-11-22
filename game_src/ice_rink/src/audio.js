import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Ice Rink Brawl sound: all synthesized (Web Audio), no files. Festive winter tune + effects.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

// An original sleigh-bell style tune in G major: [beat, midi, length]
const MELODY = [
  [0, 79, 0.5], [0.5, 83, 0.5], [1, 86, 1], [2, 83, 0.5], [2.5, 79, 0.5], [3, 74, 1],
  [4, 76, 0.5], [4.5, 79, 0.5], [5, 83, 1], [6, 81, 0.5], [6.5, 79, 0.5], [7, 78, 1],
  [8, 79, 0.5], [8.5, 83, 0.5], [9, 86, 1], [10, 88, 0.5], [10.5, 86, 0.5], [11, 83, 1],
  [12, 81, 0.5], [12.5, 79, 0.5], [13, 78, 0.5], [13.5, 76, 0.5], [14, 74, 2],
];
const BASS = [[0, 55, 2], [2, 62, 2], [4, 60, 2], [6, 62, 2], [8, 55, 2], [10, 59, 2], [12, 57, 2], [14, 50, 2]];
const SLY = [
  [0, 67, 1], [1.5, 70, 0.5], [2, 73, 1], [3, 70, 1], [4, 67, 1], [5.5, 66, 0.5], [6, 64, 1], [7, 66, 1],
  [8, 67, 1], [9.5, 70, 0.5], [10, 73, 1], [11, 76, 1], [12, 75, 1], [13, 73, 0.5], [14, 70, 2],
  [0, 43, 2], [4, 41, 2], [8, 43, 2], [12, 39, 2],
];

export class Sound extends SynthBase {
  play(n, v = 1) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.tone('sine', 660, t, 0.06, 0.07); break;
      case 'select': this.tone('triangle', hz(84), t, 0.08, 0.07); break;
      case 'pull': this.tone('sine', 300 + v * 400, t, 0.05, 0.03); break;
      case 'whoosh': this.noise(t, 0.5, 0.05 + 0.09 * v, 'bandpass', 500 + 1200 * v, 1.2, this.sfx, 5000); this.slide('sine', 300, 120, t, 0.35, 0.05); break;
      case 'crystal': { const m = [84, 88, 91, 93, 96][(Math.random() * 5) | 0]; this.tone('triangle', hz(m), t, 0.45, 0.1 * Math.min(1, 0.4 + v)); this.tone('sine', hz(m + 12), t + 0.02, 0.3, 0.04); break; }
      case 'wall': this.noise(t, 0.12, 0.07 * Math.min(1, v), 'lowpass', 700); this.tone('sine', 140, t, 0.1, 0.07); break;
      case 'hit': this.slide('sine', 220, 70, t, 0.18, 0.2); this.noise(t, 0.1, 0.12, 'lowpass', 1200); break;
      case 'chain': this.tone('triangle', hz(76), t, 0.15, 0.1); this.tone('triangle', hz(83), t + 0.07, 0.18, 0.1); break;
      case 'bump': this.noise(t, 0.08, 0.08, 'lowpass', 600); break;
      case 'squeak': this.slide('square', 500, 1100, t, 0.14, 0.05); this.slide('square', 1100, 600, t + 0.13, 0.12, 0.04); break;
      case 'puff': this.noise(t, 0.25, 0.1, 'highpass', 2500, 1, this.sfx, 800); [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(86 + s), t + 0.05 + i * 0.06, 0.2, 0.07)); break;
      case 'special': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('sawtooth', hz(60 + s), t + i * 0.05, 0.3, 0.06)); this.noise(t, 0.5, 0.08, 'bandpass', 800, 2, this.sfx, 4000); break;
      case 'ready': [0, 7, 12].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.07, 0.25, 0.09)); break;
      case 'wave': this.slide('sine', 600, 90, t, 0.5, 0.14); this.noise(t, 0.5, 0.1, 'lowpass', 2000, 1, this.sfx, 200); break;
      case 'throw': this.slide('triangle', 400, 900, t, 0.2, 0.06); break;
      case 'splat': this.noise(t, 0.12, 0.1, 'highpass', 1500); break;
      case 'heal': [0, 4, 7].forEach((s, i) => this.tone('sine', hz(84 + s), t + i * 0.06, 0.25, 0.07)); break;
      case 'stomp': this.slide('sine', 130, 40, t, 0.4, 0.25); this.noise(t, 0.3, 0.14, 'lowpass', 500); break;
      case 'hurt': this.slide('sawtooth', 300, 120, t, 0.25, 0.07); break;
      case 'banner': [0, 7].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.09, 0.3, 0.1)); break;
      case 'enemyBanner': [0, -3].forEach((s, i) => this.tone('square', hz(55 + s), t + i * 0.12, 0.3, 0.06)); break;
      case 'coin': this.tone('square', hz(88), t, 0.06, 0.04); this.tone('square', hz(95), t + 0.06, 0.12, 0.04); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.11, 0.6, 0.14)); break;
      case 'lose': [0, -2, -5, -9].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.2, 0.5, 0.11)); break;
      default: break;
    }
  }

  setMode(mode) {
    if (!mode) { this.setBed(null); this.setTune(null); return; }
    this.setBed('wind');
    if (mode === 'enemy') this.setTune({ tempo: 112, beats: 16, wave: 'square', vol: 0.045, notes: SLY });
    else this.setTune({ tempo: mode === 'boss' ? 126 : 118, beats: 16, wave: 'triangle', vol: 0.09, notes: [...MELODY, ...BASS] });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
