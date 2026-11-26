import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Synthesised sound for «حلاوة ولا مقلب»: playful spooky-cute music + effects, all Web Audio, no files.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const MEL = [[0, 74, 1], [1, 77, 0.5], [1.5, 74, 0.5], [2, 72, 1], [3, 69, 1], [4, 70, 1], [5, 74, 0.5], [5.5, 70, 0.5], [6, 69, 1], [7, 65, 1],
  [8, 74, 1], [9, 77, 0.5], [9.5, 81, 0.5], [10, 80, 1], [11, 77, 1], [12, 76, 0.5], [12.5, 74, 0.5], [13, 73, 1], [14, 74, 2]];
const BASS = [[0, 50, 1], [2, 57, 1], [4, 46, 1], [6, 53, 1], [8, 50, 1], [10, 57, 1], [12, 45, 1], [14, 50, 1]];
const BOSS = [[0, 62, 0.5], [0.5, 62, 0.5], [1, 65, 1], [2, 62, 0.5], [2.5, 62, 0.5], [3, 68, 1], [4, 67, 0.5], [4.5, 65, 0.5], [5, 62, 1], [6, 61, 2],
  [8, 62, 0.5], [8.5, 62, 0.5], [9, 65, 1], [10, 70, 0.5], [10.5, 68, 0.5], [11, 65, 1], [12, 64, 1], [13, 61, 1], [14, 62, 2],
  [0, 38, 1], [2, 38, 1], [4, 36, 1], [6, 37, 1], [8, 38, 1], [10, 41, 1], [12, 40, 1], [14, 37, 1]];

export class Sound extends SynthBase {
  play(n, a = 0) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'jump': this.slide('sine', 330, 700, t, 0.13, 0.08); break;
      case 'land': this.noise(t, 0.08, 0.06, 'lowpass', 400); break;
      case 'candy': this.tone('sine', hz(88 + (a % 4)), t, 0.1, 0.07); this.tone('sine', hz(95 + (a % 4)), t + 0.06, 0.14, 0.06); break;
      case 'bell': // ding-dong
        for (const [f, d] of [[hz(76), 0], [hz(72), 0.34]]) { this.tone('sine', f, t + d, 0.9, 0.16, this.sfx, 0.004); this.tone('sine', f * 2.76, t + d, 0.4, 0.05, this.sfx, 0.004); this.tone('triangle', f * 4.1, t + d, 0.15, 0.02, this.sfx, 0.004); }
        break;
      case 'join': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(79 + s), t + 0.25 + i * 0.07, 0.14, 0.09)); this.slide('sine', 300, 520, t + 0.2, 0.3, 0.05); break;
      case 'scare': this.slide('square', 1500, 500, t, 0.18, 0.05); this.slide('square', 1700, 600, t + 0.2, 0.18, 0.04); break;
      case 'hit': this.slide('triangle', 320, 110, t, 0.22, 0.14); this.noise(t, 0.12, 0.08, 'lowpass', 700); break;
      case 'recollect': this.tone('triangle', hz(84), t, 0.08, 0.08); this.tone('triangle', hz(91), t + 0.07, 0.12, 0.08); break;
      case 'push': this.tone('triangle', hz(36), t, 0.16, 0.2); this.noise(t, 0.1, 0.06, 'lowpass', 300); break;
      case 'break': this.noise(t, 0.5, 0.2, 'highpass', 1800, 1, this.sfx, 400); [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.07, 0.25, 0.1)); break;
      case 'wake': this.slide('sawtooth', 500, 330, t, 0.1, 0.05); this.slide('sawtooth', 520, 340, t + 0.15, 0.1, 0.05); break;
      case 'warn': this.slide('sine', 140, 260, t, 0.35, 0.1); break;
      case 'boing': this.slide('sine', 180, 600, t, 0.22, 0.12); this.slide('sine', 600, 220, t + 0.2, 0.25, 0.08); break;
      case 'cheer': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.06, 0.2, 0.1)); break;
      case 'deflate': this.noise(t, 1.5, 0.12, 'bandpass', 1800, 2, this.sfx, 200); this.slide('sine', 500, 90, t, 1.5, 0.08); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'oops': this.slide('sawtooth', 300, 200, t, 0.3, 0.05); this.slide('sawtooth', 280, 140, t + 0.3, 0.5, 0.05); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      default: break;
    }
  }
  setMode(mode) {
    if (!mode) { this.setBed(null); this.setTune(null); return; }
    this.setBed('wind');
    if (mode === 'boss') this.setTune({ tempo: 136, beats: 16, wave: 'square', vol: 0.05, notes: BOSS });
    else this.setTune({ tempo: 112, beats: 16, wave: 'triangle', vol: 0.09, notes: [...MEL, ...BASS] });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
