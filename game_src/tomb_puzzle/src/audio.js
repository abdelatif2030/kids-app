import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// All sound is made live with Web Audio (no files): a mysterious-but-light plucked "oud" tune and the tomb's little effects.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

// D phrygian-dominant: D Eb F# G A Bb C  (midi 62 63 66 67 69 70 72)
const TUNE = {
  tempo: 84, beats: 16,
  notes: [
    [0, 69, 1.5], [1.5, 67, 0.5], [2, 66, 1], [3, 63, 1], [4, 62, 2], [6, 63, 1], [7, 66, 1],
    [8, 69, 1], [9, 70, 1], [10, 69, 1], [11, 67, 1], [12, 66, 1.5], [13.5, 63, 0.5], [14, 62, 2],
  ],
  bass: [[0, 50, 4], [4, 50, 4], [8, 55, 4], [12, 50, 4]],
};

export class Sound extends SynthBase {
  pluck(f, t, len, vol, dest = this.music) {
    const c = this.ctx;
    if (!c) return;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
    const o2 = c.createOscillator(); o2.type = 'triangle'; o2.frequency.value = f * 2.003;
    const fl = c.createBiquadFilter(); fl.type = 'lowpass'; fl.Q.value = 2;
    fl.frequency.setValueAtTime(f * 7, t); fl.frequency.exponentialRampToValueAtTime(f * 1.3, t + len);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    const g2 = c.createGain(); g2.gain.value = 0.35;
    o.connect(fl); o2.connect(g2).connect(fl); fl.connect(g).connect(dest);
    o.start(t); o2.start(t); o.stop(t + len + 0.05); o2.stop(t + len + 0.05);
  }

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || !this.tune || this.muted) return;
    const spb = 60 / TUNE.tempo;
    if (this.loopStart == null) this.loopStart = c.currentTime + 0.1;
    const ahead = c.currentTime + 0.25;
    while (this.loopStart + this.nextBeat * spb < ahead) {
      const beat = this.nextBeat % TUNE.beats;
      const base = this.loopStart + this.nextBeat * spb;
      if (base < c.currentTime - 0.5) { this.loopStart = c.currentTime + 0.1; this.nextBeat = 0; break; }
      for (const [b, m, len] of TUNE.notes) if (Math.abs(b - beat) < 1e-6) this.pluck(hz(m), base, Math.min(1.6, len * spb * 1.6), 0.22);
      for (const [b, m, len] of TUNE.bass) if (Math.abs(b - beat) < 1e-6) this.tone('sine', hz(m), base, len * spb, 0.16, this.music, 0.05);
      if (Math.abs(beat % 2) < 1e-6) this.tone('sine', beat % 4 === 0 ? 90 : 120, base, 0.12, beat % 4 === 0 ? 0.2 : 0.09, this.music); // soft frame drum
      if (Math.abs(beat % 1 - 0.5) < 1e-6) this.pluck(hz(74 + ((beat * 2) % 3) * 0), base, 0.2, 0.03);
      this.nextBeat += 0.5;
    }
  }

  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setBed('wind'); this.setTune(TUNE); }

  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'step': this.noise(t, 0.07, 0.07, 'bandpass', 700 + Math.random() * 200, 1.5); break;
      case 'scrape': this.noise(t, 0.28, 0.16, 'lowpass', 500, 1, this.sfx, 180); this.tone('sine', 70, t, 0.25, 0.1); break;
      case 'plate': this.tone('square', 220, t, 0.06, 0.07); this.tone('sine', hz(81), t + 0.04, 0.35, 0.1); this.tone('sine', hz(88), t + 0.1, 0.4, 0.07); break;
      case 'unplate': this.tone('square', 160, t, 0.06, 0.06); break;
      case 'door': this.noise(t, 0.9, 0.18, 'lowpass', 380, 1, this.sfx, 120); this.slide('sawtooth', 110, 45, t, 0.8, 0.08); break;
      case 'key': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(84 + s), t + i * 0.07, 0.5, 0.1)); break;
      case 'crack': this.noise(t, 0.12, 0.12, 'highpass', 2200, 2); this.tone('square', 90, t, 0.05, 0.05); break;
      case 'crumble': this.noise(t, 0.5, 0.2, 'lowpass', 900, 1, this.sfx, 150); break;
      case 'fall': this.slide('triangle', 520, 90, t, 0.6, 0.12); break;
      case 'light': this.noise(t, 0.4, 0.12, 'highpass', 1200, 0.8, this.sfx, 3000); this.tone('triangle', hz(76), t + 0.1, 0.4, 0.07); break;
      case 'unlock': this.tone('square', 300, t, 0.05, 0.08); this.tone('square', 450, t + 0.06, 0.05, 0.08); this.tone('triangle', hz(86), t + 0.12, 0.4, 0.09); break;
      case 'bump': this.tone('sine', 110, t, 0.08, 0.08); break;
      case 'undo': this.slide('triangle', 700, 350, t, 0.15, 0.08); break;
      case 'win': [0, 3, 7, 10, 12, 15, 19].forEach((s, i) => this.pluck(hz(62 + s), t + i * 0.1, 0.9, 0.25, this.sfx)); break;
      case 'tap': this.tone('sine', 700, t, 0.06, 0.08); break;
      case 'hint': this.tone('triangle', hz(86), t, 0.3, 0.08); this.tone('triangle', hz(91), t + 0.1, 0.3, 0.08); break;
      default: break;
    }
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
