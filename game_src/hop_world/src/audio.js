import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Hop World sound: every effect and the little tunes are synthesised live (Web Audio, no files).
import { SynthBase, hz } from '../../cozy_kit/audio.js';

// One looping tune per world. Notes are [beat, midi note, length in beats]; beats land on halves.
const TUNES = {
  // Original "Nile Hops" tune (composed for this game, 2026-11-27). The previous
  // hills melody reproduced a famous platform-game theme and was replaced.
  hills: { tempo: 132, beats: 16, wave: 'square', vol: 0.045, notes: [[0, 72, 1], [1, 76, 1], [2, 79, 1], [3, 76, 1], [4, 81, 1], [5, 79, 1], [6, 76, 1], [7, 74, 1], [8, 72, 1], [9, 74, 1], [10, 76, 1], [11, 74, 1], [12, 79, 1], [13, 76, 1], [14, 74, 0.5], [14.5, 72, 0.5], [15, 67, 1],
    [0, 48, 0.5], [2, 55, 0.5], [4, 48, 0.5], [6, 55, 0.5], [8, 53, 0.5], [10, 55, 0.5], [12, 48, 0.5], [14, 55, 0.5]] },
  cave: { tempo: 96, beats: 16, wave: 'triangle', vol: 0.1, notes: [[0, 57, 1], [1, 60, 1], [2, 64, 2], [4, 62, 1], [5, 60, 1], [6, 57, 2], [8, 55, 1], [9, 59, 1], [10, 62, 2], [12, 64, 1], [13, 62, 1], [14, 59, 2],
    [0, 33, 2], [4, 38, 2], [8, 31, 2], [12, 40, 2]] },
  desert: { tempo: 112, beats: 16, wave: 'triangle', vol: 0.1, notes: [[0, 62, 1], [1, 63, 0.5], [1.5, 66, 0.5], [2, 67, 1], [3, 66, 0.5], [3.5, 63, 0.5], [4, 62, 2], [6, 59, 1], [7, 62, 1], [8, 63, 1], [9, 66, 0.5], [9.5, 67, 0.5], [10, 70, 1], [11, 67, 1], [12, 66, 1], [13, 63, 1], [14, 62, 2],
    [0, 38, 1], [2, 38, 1], [4, 38, 1], [6, 38, 1], [8, 39, 1], [10, 39, 1], [12, 43, 1], [14, 38, 1]] },
  snow: { tempo: 100, beats: 16, wave: 'sine', vol: 0.12, notes: [[0, 79, 1], [1, 83, 1], [2, 86, 1.5], [4, 84, 1], [5, 83, 1], [6, 79, 2], [8, 81, 1], [9, 84, 1], [10, 88, 1.5], [12, 86, 1], [13, 83, 1], [14, 81, 2],
    [0, 55, 2], [4, 52, 2], [8, 57, 2], [12, 50, 2]] },
  // Phase 2F worlds — all melodies composed for this game (original material).
  nile: { tempo: 104, beats: 16, wave: 'triangle', vol: 0.1, notes: [[0, 69, 1], [1, 72, 1], [2, 76, 1.5], [4, 74, 1], [5, 72, 1], [6, 69, 2], [8, 67, 1], [9, 71, 1], [10, 74, 1.5], [12, 76, 1], [13, 74, 1], [14, 72, 2],
    [0, 45, 2], [4, 52, 2], [8, 43, 2], [12, 50, 2]] },
  temple: { tempo: 92, beats: 16, wave: 'triangle', vol: 0.1, notes: [[0, 62, 2], [2, 65, 1], [3, 69, 1], [4, 67, 2], [6, 65, 1], [7, 62, 1], [8, 60, 2], [10, 62, 1], [11, 65, 1], [12, 69, 1.5], [14, 67, 1], [15, 65, 0.5],
    [0, 38, 2], [4, 41, 2], [8, 36, 2], [12, 43, 2]] },
  shore: { tempo: 108, beats: 16, wave: 'sine', vol: 0.11, notes: [[0, 76, 1], [1, 79, 1], [2, 81, 1], [3, 79, 1], [4, 76, 1.5], [6, 74, 1], [7, 76, 1], [8, 79, 1], [9, 81, 1], [10, 84, 1.5], [12, 81, 1], [13, 79, 1], [14, 76, 2],
    [0, 52, 2], [4, 48, 2], [8, 55, 2], [12, 50, 2]] },
  oasis: { tempo: 98, beats: 16, wave: 'triangle', vol: 0.1, notes: [[0, 71, 1], [1, 74, 0.5], [1.5, 78, 0.5], [2, 76, 1], [3, 74, 1], [4, 71, 2], [6, 69, 1], [7, 71, 1], [8, 74, 1], [9, 78, 0.5], [9.5, 79, 0.5], [10, 78, 1], [11, 76, 1], [12, 74, 1], [13, 71, 1], [14, 69, 2],
    [0, 47, 2], [4, 47, 2], [8, 45, 2], [12, 50, 2]] },
};

export class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'jump': this.slide('square', 300, 760, t, 0.16, 0.07); break;
      case 'coin': this.tone('square', hz(83), t, 0.07, 0.06); this.tone('square', hz(88), t + 0.07, 0.2, 0.06); break;
      case 'block': this.tone('square', hz(55), t, 0.06, 0.08); this.tone('square', hz(83), t + 0.05, 0.07, 0.06); this.tone('square', hz(88), t + 0.12, 0.2, 0.06); break;
      case 'bump': this.tone('triangle', hz(43), t, 0.1, 0.12); this.noise(t, 0.06, 0.05, 'lowpass', 600); break;
      case 'brick': this.noise(t, 0.22, 0.14, 'bandpass', 1400, 0.8, this.sfx, 400); this.tone('triangle', hz(48), t, 0.12, 0.1); break;
      case 'stomp': this.slide('square', 520, 120, t, 0.14, 0.09); this.noise(t, 0.08, 0.06, 'highpass', 2000); break;
      case 'power': [0, 4, 7, 12, 16, 19].forEach((s, i) => this.tone('square', hz(64 + s), t + i * 0.06, 0.14, 0.06)); break;
      case 'appear': this.slide('triangle', 300, 900, t, 0.3, 0.09); break;
      case 'shrink': this.slide('square', 700, 160, t, 0.4, 0.08); break;
      case 'lose': [72, 70, 66, 62, 55].forEach((m, i) => this.tone('triangle', hz(m), t + i * 0.12, 0.2, 0.13)); break;
      case 'check': [72, 79, 84].forEach((m, i) => this.tone('triangle', hz(m), t + i * 0.07, 0.25, 0.1)); break;
      case 'win': [72, 76, 79, 84, 79, 84, 88, 91].forEach((m, i) => this.tone('square', hz(m), t + i * 0.1, i === 7 ? 0.7 : 0.16, 0.06)); [48, 52, 55, 60].forEach((m, i) => this.tone('triangle', hz(m), t + i * 0.2, 0.5, 0.1)); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'pause': this.tone('triangle', hz(67), t, 0.08, 0.08); this.tone('triangle', hz(60), t + 0.08, 0.1, 0.08); break;
      default: break;
    }
  }

  /** world name for the tune, or null for silence. */
  setMode(world) { if (!world) { this.setBed(null); this.setTune(null); return; } this.setTune(TUNES[world] || TUNES.hills); }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
