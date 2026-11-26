import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
// Winter Camp sound, made live with Web Audio (no files): a soft wind, a warm slow music-box tune, axe thunks,
// a bright pop for a log, a drop thump, building knocks with a chime, a wind howl in the blizzard, a sleigh-bell jingle for the gate.
const TUNE = {
  tempo: 72,
  beats: 16,
  wave: 'sine',
  vol: 0.13,
  notes: [
    [0, 72, 1], [1, 76, 1], [2, 79, 2], [4, 77, 1], [5, 74, 1], [6, 72, 2],
    [8, 74, 1], [9, 77, 1], [10, 81, 2], [12, 79, 1], [13, 76, 1], [14, 72, 2],
    [0, 48, 3], [4, 53, 3], [8, 55, 3], [12, 48, 3],
  ],
};

export class Sound extends SynthBase {
  play(name) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(name);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (name) {
      case 'chop': this.noise(t, 0.09, 0.16, 'bandpass', 420, 3); this.tone('square', 120, t, 0.07, 0.06); break;
      case 'log': [0, 7].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.07, 0.2, 0.14)); this.noise(t, 0.2, 0.08, 'lowpass', 700); break;
      case 'drop': this.noise(t, 0.16, 0.14, 'lowpass', 300); this.tone('sine', 140, t, 0.12, 0.12); this.tone('triangle', hz(84), t + 0.08, 0.1, 0.08); break;
      case 'built': [0, 4, 7, 12].forEach((s, i) => { this.tone('triangle', hz(67 + s), t + 0.3 + i * 0.1, 0.5, 0.14); }); for (let i = 0; i < 3; i++) this.noise(t + i * 0.1, 0.07, 0.14, 'bandpass', 380, 3); break;
      case 'hire': [0, 5, 9].forEach((s, i) => this.tone('sine', hz(76 + s), t + i * 0.08, 0.25, 0.12)); break;
      case 'storm': this.slide('sawtooth', 120, 220, t, 1.4, 0.05); this.setBed('wind'); break;
      case 'stormEnd': this.setBed('wind'); break;
      case 'gate': for (let i = 0; i < 10; i++) this.tone('sine', hz(88 + (i % 4) * 3), t + i * 0.09, 0.3, 0.08); this.slide('triangle', 90, 60, t, 1.2, 0.12); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }

  setMode(m) { if (m === 'off') { this.setBed(null); this.setTune(null); } else { this.setBed('wind'); this.setTune(TUNE); } }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
