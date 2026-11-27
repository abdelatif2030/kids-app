// voice.js — VoiceCoach: live spoken encouragement for Rehlaty games (owner requirement, 2026-11-27).
// Plays pre-generated voice clips (mp3) for game events — nitro, overtakes, near misses, bumps, wins —
// with per-event phrase variants and cooldowns so the child hears a lively companion, not a loop.
// Clips live under <base>voice/<lang>/<event>_<n>.mp3 (n = 1..count). The game passes a manifest of
// which events/clips exist; anything missing falls back to speechSynthesis with the same phrase bank,
// and to silence when neither is available. No network, no tracking — clips are local game assets.
//
// Usage:
//   import { VoiceCoach } from '../../cozy_kit/voice.js';
//   this.voice = new VoiceCoach({ base, lang: 'ar', girl: false, clips: { nitro: 3, overtake: 2 } });
//   this.voice.say('nitro');            // on the event
//   this.voice.setMuted(save.muted);    // follow the game's mute
//   this.voice.unlock();                // call from a user gesture (autoplay policy)
//   this.voice.dispose();

const BANKS = {
  ar: {
    go: ['يالا بينا يا وحش!', 'دوس بنزين يا بطل!'],
    nitro: ['نيترووو! طير يا وحش!', 'يا سلام على السرعة!', 'نيترو! امسك الطريق!'],
    overtake: ['عدّيته! برافو عليك!', 'تجاوز رائع يا بطل!', 'ايوه كده! سبقته!'],
    overtaken: ['ولا يهمك، هتعديه!', 'خليك وراه، فرصتك جاية!'],
    near: ['ياااه! كانت قريبة!', 'عدّت على خير! قلبك جامد!', 'اووه! قريبة قوي!'],
    bump: ['اوبس! خبطة صغيرة، كمّل!', 'ولا يهمك يا بطل، كمّل!'],
    charge: ['نيترو جديد جاهز!', 'عندك نيترو!'],
    pickup: ['أيوه! عملة!', 'جمعت عملة! برافو!'],
    trick: ['حركة بهلوانية! واو!', 'يا سلام على الحركة!'],
    draft: ['راكب وراه! الهوا بيزقّك!', 'سليب ستريم! سرعة زيادة!'],
    lap: ['لفّة جديدة! كمّل يا بطل!', 'آخر لفّة! اديها كل اللي عندك!'],
    win: ['كسبت يا بطل! انت الأول!', 'مبروووك! بطل السباق!'],
    lose: ['لعبت حلو قوي! جرّب تاني وهتكسب!', 'كنت قريب! المرة الجاية بتاعتك!'],
    count: ['استعد!'],
  },
  en: {
    go: ["Let's go!", 'Go, champion, go!'],
    nitro: ['Nitrooo! Fly, superstar!', 'Wow, so fast!', 'Nitro boost! Hold on tight!'],
    overtake: ['You passed him! Bravo!', 'Great overtake, champion!', 'Yes! You are ahead!'],
    overtaken: ["Don't worry, you'll pass him!", 'Stay close, your chance is coming!'],
    near: ['Whoa! That was close!', 'Phew! Great driving!', 'Ooh! So close!'],
    bump: ['Oops! Small bump, keep going!', "No worries, champion, keep going!"],
    charge: ['New nitro ready!', 'You have a nitro!'],
    pickup: ['Yes! A coin!', 'You got a coin! Bravo!'],
    trick: ['Amazing trick! Wow!', 'What a move!'],
    draft: ['Right behind him! The wind pushes you!', 'Slipstream! Extra speed!'],
    lap: ['New lap! Keep going, champion!', 'Last lap! Give it everything!'],
    win: ['You won, champion! First place!', 'Hooray! Racing star!'],
    lose: ['Great racing! Try again and win!', 'So close! Next one is yours!'],
    count: ['Get ready!'],
  },
};

// Girl variants for the few Arabic lines that address the child directly.
const GIRL_SWAPS = [[/يا بطل/g, 'يا بطلة']];

export class VoiceCoach {
  /** opts: { base, lang ('ar'|'en'), girl, clips: {event: count}, cooldown (s), gap (s) } */
  constructor(opts = {}) {
    this.base = opts.base || './';
    this.lang = opts.lang === 'en' ? 'en' : 'ar';
    this.girl = !!opts.girl;
    this.clips = opts.clips || {};
    this.cooldown = opts.cooldown ?? 9.0;
    this.gap = opts.gap ?? 4.0;
    this.muted = false;
    this.unlocked = false;
    this.lastSay = -Infinity;
    this.lastEvent = {};
    this.pick = {};
    this.audio = null;
    this.failed = new Set();
  }

  setMuted(m) {
    const next = !!m;
    if (next === this.muted) return;
    this.muted = next;
    if (this.muted) this._stop();
  }

  unlock() {
    this.unlocked = true;
    // Warm the synthesiser inside the gesture so the first line is not swallowed.
    try {
      const ss = window.speechSynthesis;
      if (ss && ss.getVoices().length === 0) ss.getVoices();
    } catch (_) { /* no speech here */ }
  }

  _stop() {
    if (this.audio) { try { this.audio.pause(); } catch (_) { /* fine */ } this.audio = null; }
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (_) { /* fine */ }
  }

  _phrase(event) {
    const bank = (BANKS[this.lang] && BANKS[this.lang][event]) || BANKS.ar[event] || [];
    if (!bank.length) return null;
    // Rotate variants so repeats do not sound like a loop.
    const i = ((this.pick[event] = (this.pick[event] || 0) + 1) - 1) % bank.length;
    let text = bank[i];
    if (this.girl && this.lang === 'ar') for (const [re, rep] of GIRL_SWAPS) text = text.replace(re, rep);
    return { text, n: i + 1 };
  }

  /** Speak for an event. Returns true when something was spoken. */
  say(event, now = performance.now() / 1000) {
    if (this.muted || !this.unlocked) return false;
    if (now - this.lastSay < this.gap) return false;
    if (now - (this.lastEvent[event] ?? -Infinity) < this.cooldown) return false;
    const p = this._phrase(event);
    if (!p) return false;
    this.lastSay = now;
    this.lastEvent[event] = now;
    const count = this.clips[event] || 0;
    const clipKey = `${event}_${p.n}`;
    if (count >= p.n && !this.failed.has(clipKey)) {
      const a = new Audio(`${this.base}voice/${this.lang}/${clipKey}.mp3`);
      a.volume = 0.95;
      a.onerror = () => { this.failed.add(clipKey); this._speak(p.text); };
      const pr = a.play();
      if (pr && pr.catch) pr.catch(() => { this.failed.add(clipKey); this._speak(p.text); });
      this.audio = a;
      return true;
    }
    return this._speak(p.text);
  }

  _speak(text) {
    try {
      const ss = window.speechSynthesis;
      if (!ss) return false;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = this.lang === 'ar' ? 'ar-EG' : 'en-US';
      u.rate = 1.05;
      u.pitch = 1.15;
      const voices = ss.getVoices();
      const v = voices.find((x) => x.lang && x.lang.toLowerCase().startsWith(this.lang));
      if (v) u.voice = v;
      ss.cancel();
      ss.speak(u);
      return true;
    } catch (_) { return false; }
  }

  dispose() { this._stop(); }
}
