import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';

/** Soft courtyard sound: a fountain bed, now and then a bird, a slow plucked tune, and one looping voice per tool. */
export class Sound extends SynthBase {
  _loops() {
    if (this.loop || !this.ctx) return;
    const c = this.ctx;
    const mk = (type, freq, q, vol) => {
      const s = c.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
      const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      const g = c.createGain(); g.gain.value = 0;
      s.connect(f).connect(g).connect(this.sfx); s.start(0, Math.random());
      return { f, g, vol };
    };
    const sq = c.createOscillator(); sq.type = 'triangle'; sq.frequency.value = 1700;
    const sg = c.createGain(); sg.gain.value = 0; sq.connect(sg).connect(this.sfx); sq.start();
    this.loop = {
      fizz: mk('highpass', 5200, 0.7, 0.07), scrub: mk('bandpass', 1500, 1.2, 0.16), jet: mk('bandpass', 3400, 0.6, 0.2),
      squeak: { o: sq, g: sg, vol: 0.035 }, squeakNoise: mk('bandpass', 900, 1.5, 0.08),
    };
  }

  /** level 0..1 for a loop; `pitch` (0..1) moves its filter */
  hold(name, level, pitch = 0.5) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this._loops();
    const L = this.loop[name]; if (!L) return;
    const t = this.ctx.currentTime; const v = this.muted ? 0 : level * L.vol;
    L.g.gain.setTargetAtTime(v, t, 0.04);
    if (L.f) L.f.frequency.setTargetAtTime({ fizz: 4200 + pitch * 3000, scrub: 1000 + pitch * 1800, jet: 2600 + pitch * 1800, squeakNoise: 700 + pitch * 800 }[name] || 1500, t, 0.05);
    if (L.o) L.o.frequency.setTargetAtTime(1450 + pitch * 900, t, 0.05);
  }
  silence() { if (this.loop) for (const k of Object.keys(this.loop)) this.hold(k, 0); }

  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'thud': this.slide('sine', 150, 48, t, 0.2, 0.3); this.noise(t, 0.12, 0.18, 'lowpass', 700); this.noise(t + 0.02, 0.2, 0.05, 'bandpass', 2200, 1); break;
      case 'puff': this.noise(t, 0.28, 0.07, 'bandpass', 1600, 0.8, this.sfx, 600); break;
      case 'pop': this.tone('sine', 900 + Math.random() * 500, t, 0.05, 0.04); break;
      case 'coin': this.tone('square', hz(88), t, 0.07, 0.05); this.tone('square', hz(95), t + 0.07, 0.15, 0.05); break;
      case 'stage': [0, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.08, 0.3, 0.12)); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'no': this.slide('triangle', 300, 200, t, 0.2, 0.08); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'chirp': { const f = 2400 + Math.random() * 1200; this.slide('sine', f, f * 1.35, t, 0.09, 0.025); this.slide('sine', f * 1.3, f * 0.95, t + 0.11, 0.1, 0.02); break; }
      default: break;
    }
  }

  setMode(on) {
    clearInterval(this._birds);
    if (!on) { this.setBed(null); this.setTune(null); this.silence(); return; }
    this.setBed('waves');
    this.setTune({ tempo: 84, beats: 16, wave: 'triangle', vol: 0.06, notes: [[0, 64, 1], [1.5, 67, 1], [3, 71, 1], [4, 69, 1.5], [6, 67, 1], [8, 62, 1], [9.5, 66, 1], [11, 69, 1], [12, 67, 2], [14, 64, 1], [0, 40, 3], [8, 38, 3]] });
    this._birds = setInterval(() => { if (Math.random() < 0.45) { this.play('chirp'); if (Math.random() < 0.5) setTimeout(() => this.play('chirp'), 180); } }, 2600);
  }
  dispose() { clearInterval(this._birds); super.dispose(); }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
