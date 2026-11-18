import { SynthBase, hz } from '../../cozy_kit/audio.js';
// Castaway Raft sound, made live with Web Audio (no files): rolling waves, a ukulele-like tune, a whoosh and splash
// for the hook, a pop for every catch, wood knocks when building, a soft low "dum-dum" for the shark (never scary),
// a zip when it is scared away and a bright arpeggio when the island is reached.
const TUNE = {
  tempo: 96,
  beats: 16,
  wave: 'triangle',
  vol: 0.1,
  notes: [
    [0, 60, 1], [1, 64, 1], [2, 67, 1], [3, 64, 1], [4, 65, 1], [5, 69, 1], [6, 72, 1], [7, 69, 1],
    [8, 67, 1], [9, 71, 1], [10, 74, 1], [11, 71, 1], [12, 64, 1], [13, 67, 1], [14, 72, 2],
    [0, 48, 2], [4, 53, 2], [8, 55, 2], [12, 48, 2],
  ],
};

export class Sound extends SynthBase {
  play(name, arg) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (name) {
      case 'throw': this.noise(t, 0.25, 0.08, 'bandpass', 700, 1.2, this.sfx, 2200); break;
      case 'splash': this.noise(t, 0.35, 0.1, 'lowpass', 2400, 0.8, this.sfx, 500); this.tone('sine', 220, t, 0.12, 0.05); break;
      case 'hook': this.tone('triangle', 520, t, 0.1, 0.12); this.tone('triangle', 780, t + 0.07, 0.12, 0.1); break;
      case 'got': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.18, 0.14)); break;
      case 'bottle': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('sine', hz(79 + s), t + i * 0.07, 0.3, 0.1)); break;
      case 'miss': this.tone('sine', 300, t, 0.12, 0.05); break;
      case 'build': for (let i = 0; i < 3; i++) { this.noise(t + i * 0.12, 0.08, 0.14, 'bandpass', 380 + i * 60, 3); this.tone('square', 150 + i * 30, t + i * 0.12, 0.06, 0.05); } this.tone('triangle', hz(79), t + 0.4, 0.3, 0.12); break;
      case 'sharkIn': this.tone('sine', 98, t, 0.5, 0.12); this.tone('sine', 92, t + 0.55, 0.6, 0.12); break;
      case 'bite': this.noise(t, 0.2, 0.15, 'lowpass', 600, 1); this.slide('sawtooth', 200, 90, t, 0.3, 0.08); break;
      case 'scare': this.slide('triangle', 300, 900, t, 0.3, 0.12); this.tone('triangle', hz(84), t + 0.3, 0.2, 0.1); break;
      case 'fish': this.tone('sine', hz(86), t, 0.08, 0.1); this.tone('sine', hz(91), t + 0.08, 0.14, 0.1); break;
      case 'land': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.12, 0.5, 0.14)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => { this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14); this.tone('sine', hz(84 + s), t + i * 0.1, 0.3, 0.05); }); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: void arg;
    }
  }

  setMode(mode) {
    if (mode === 'play') { this.setBed('waves'); this.setTune(TUNE); } else if (mode === 'menu') { this.setBed('waves'); this.setTune(TUNE); } else { this.setBed(null); this.setTune(null); }
  }
}
