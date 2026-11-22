import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Gummy Squad sound: everything is synthesised live (no files). A soft music-box lullaby for the menu and the waves that turns
// brisk and bouncy for the King Donut fight, plus a sound for each bear's attack, candies, mints, the super and the boss.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const LULLABY = {
  tempo: 76, beats: 16, wave: 'sine', vol: 0.11,
  notes: [[0, 72, 1], [1, 76, 1], [2, 79, 1.5], [4, 77, 1], [5, 74, 1], [6, 72, 1.5], [8, 69, 1], [9, 72, 1], [10, 76, 1.5], [12, 74, 1], [13, 71, 1], [14, 67, 2],
    [0, 48, 3], [4, 53, 3], [8, 45, 3], [12, 43, 3]],
};
const BATTLE = {
  tempo: 128, beats: 16, wave: 'triangle', vol: 0.1,
  notes: [[0, 69, 0.5], [0.5, 72, 0.5], [1, 76, 1], [2, 74, 0.5], [2.5, 72, 0.5], [3, 69, 1], [4, 67, 0.5], [4.5, 71, 0.5], [5, 74, 1], [6, 72, 0.5], [6.5, 71, 0.5], [7, 67, 1],
    [8, 69, 0.5], [8.5, 72, 0.5], [9, 76, 1], [10, 79, 1], [11, 76, 1], [12, 74, 0.5], [12.5, 72, 0.5], [13, 71, 1], [14, 72, 2],
    [0, 45, 1], [2, 45, 1], [4, 43, 1], [6, 43, 1], [8, 45, 1], [10, 45, 1], [12, 43, 1], [14, 40, 1], [1, 52, 0.5], [3, 52, 0.5], [5, 50, 0.5], [7, 50, 0.5], [9, 52, 0.5], [11, 52, 0.5], [13, 50, 0.5], [15, 47, 0.5]],
};

export class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'straw': this.noise(t, 0.16, 0.12, 'bandpass', 1800, 1.2, this.sfx, 500); this.tone('triangle', hz(76), t, 0.1, 0.07); break;
      case 'lime': this.slide('sine', 500, 1100, t, 0.2, 0.09); this.tone('triangle', hz(88), t + 0.12, 0.2, 0.06); break;
      case 'blue': this.slide('square', 700, 260, t, 0.07, 0.04); break;
      case 'hit': this.tone('sine', 220, t, 0.06, 0.08); break;
      case 'impact': this.noise(t, 0.08, 0.07, 'bandpass', 1200, 1); break;
      case 'limeBoom': this.noise(t, 0.2, 0.1, 'lowpass', 1400, 1, this.sfx, 300); this.tone('triangle', hz(60), t, 0.2, 0.08); break;
      case 'crumble': this.noise(t, 0.22, 0.14, 'highpass', 1800, 0.8, this.sfx, 5000); this.tone('triangle', hz(84), t + 0.03, 0.1, 0.05); break;
      case 'candy': this.tone('triangle', hz(88 + Math.floor(Math.random() * 3) * 2), t, 0.12, 0.07); break;
      case 'mint': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('sine', hz(79 + s), t + i * 0.07, 0.3, 0.1)); break;
      case 'revive': [0, 7, 12, 19].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.09, 0.4, 0.11)); break;
      case 'bearHit': this.slide('triangle', 420, 200, t, 0.2, 0.12); break;
      case 'bearDown': this.slide('triangle', 400, 90, t, 0.7, 0.12); this.noise(t, 0.4, 0.06, 'lowpass', 500); break;
      case 'warn': this.tone('sine', 520, t, 0.1, 0.05); break;
      case 'splat': this.noise(t, 0.3, 0.14, 'lowpass', 900, 1, this.sfx, 200); this.tone('sine', 120, t, 0.2, 0.1); break;
      case 'blast': this.noise(t, 0.4, 0.18, 'lowpass', 1000, 1, this.sfx, 120); this.slide('sawtooth', 200, 40, t, 0.4, 0.1); break;
      case 'spit': this.slide('sine', 300, 600, t, 0.12, 0.06); break;
      case 'super': this.slide('sine', 100, 800, t, 0.9, 0.1); break;
      case 'superBoom': this.noise(t, 0.9, 0.3, 'lowpass', 800, 1, this.sfx, 60); this.slide('sawtooth', 160, 28, t, 0.8, 0.22); this.tone('sine', 55, t, 0.9, 0.25); break;
      case 'roar': this.slide('sawtooth', 160, 60, t, 0.9, 0.16); this.noise(t, 0.9, 0.1, 'bandpass', 300, 1.5, this.sfx, 120); break;
      case 'slam': this.noise(t, 0.4, 0.22, 'lowpass', 500, 1, this.sfx, 80); this.tone('sine', 70, t, 0.4, 0.22); break;
      case 'charge': this.slide('sawtooth', 90, 240, t, 0.5, 0.1); break;
      case 'wave': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.3, 0.1)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.11, 0.6, 0.13)); break;
      case 'lose': [0, -3, -7, -12].forEach((s, i) => this.tone('sine', hz(64 + s), t + i * 0.25, 0.7, 0.12)); break;
      case 'tap': this.tone('sine', 700, t, 0.06, 0.08); break;
      default: break;
    }
  }
  mode(m) { this.setTune(m === 'battle' ? BATTLE : m === 'calm' ? LULLABY : null); }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
