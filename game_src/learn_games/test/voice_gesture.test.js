import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Voice, clipId } from '../src/kit/voice.js';

// A fake phone: one Audio class that can refuse to play (no tap for a while), a document that records tap listeners.
function phone({ blocked }) {
  const taps = [];
  const made = [];
  class FakeAudio {
    constructor() { made.push(this); this.src = ''; this.played = []; }
    play() {
      if (blocked.on && !String(this.src).startsWith('data:')) { const e = new Error('blocked'); e.name = 'NotAllowedError'; return Promise.reject(e); }
      this.played.push(this.src);
      return Promise.resolve();
    }
    pause() { this.paused = true; }
  }
  globalThis.Audio = FakeAudio;
  globalThis.document = { addEventListener: (ev, fn) => taps.push([ev, fn]), getElementById: () => ({}), head: { append() {} } };
  globalThis.window = { __learnVoice: { ar: [clipId('الأسد جعان! هياكل إيه؟', 'ar'), clipId('أحسنت', 'ar')], en: [] } };
  return { taps, made, tap: () => taps.forEach(([, fn]) => fn()) };
}
const tick = () => new Promise((r) => setTimeout(r, 5));

test('one audio element is reused for every clip', async () => {
  const blocked = { on: false };
  const ph = phone({ blocked });
  const v = new Voice('x/', 'ar', () => {}, () => {});
  v.say('الأسد جعان! هياكل إيه؟'); await tick();
  v.say('أحسنت'); await tick();
  assert.equal(ph.made.length, 1);
  assert.equal(ph.made[0].played.length, 2);
});

test('a sentence the phone refuses (no tap for a while) is said at the next tap', async () => {
  const blocked = { on: true };
  const ph = phone({ blocked });
  const v = new Voice('x/', 'ar', () => {}, () => {});
  v.say('الأسد جعان! هياكل إيه؟'); await tick();
  assert.ok(v.pending, 'kept, not lost');
  assert.equal(ph.made[0].played.length, 0);
  blocked.on = false; // the child touches the screen
  ph.tap(); await tick();
  assert.equal(v.pending, null);
  assert.ok(ph.made[0].played.some((s) => s.endsWith(`${clipId('الأسد جعان! هياكل إيه؟', 'ar')}.mp3`)), 'said at the tap');
});

test('a refused sentence that was replaced by a newer one is NOT said late', async () => {
  const blocked = { on: true };
  const ph = phone({ blocked });
  const v = new Voice('x/', 'ar', () => {}, () => {});
  v.say('الأسد جعان! هياكل إيه؟'); await tick();
  assert.ok(v.pending);
  v.say('أحسنت'); await tick();
  assert.ok(!v.pending || v.pending.text.t === 'أحسنت');
  blocked.on = false;
  ph.tap(); await tick();
  assert.ok(!ph.made[0].played.some((s) => s.endsWith(`${clipId('الأسد جعان! هياكل إيه؟', 'ar')}.mp3`)), 'the old question is gone');
});

test('the first tap unlocks the element with a silent clip', async () => {
  const ph = phone({ blocked: { on: false } });
  const v = new Voice('x/', 'ar', () => {}, () => {});
  ph.tap();
  assert.equal(v.unlocked, true);
  assert.ok(ph.made[0].played[0].startsWith('data:audio/wav'));
});

test('an optional Arabic word without a recording is skipped (no robotic device voice), a recorded one is played', async () => {
  const { Voice, clipId } = await import('../src/kit/voice.js');
  const said = [];
  const v = new Voice('./', 'en', (t, l) => said.push([t, l]), () => {});
  v.has = (it) => it.t === 'recorded';
  v._play = (it) => { said.push(['clip', it.t]); v._next(); };
  globalThis.window = globalThis.window || {}; window.__learnVoice = true;
  v.say([{ t: 'recorded', lang: 'en' }, { t: 'قطة', lang: 'ar', optional: true }, { t: 'recorded', lang: 'en' }]);
  assert.deepEqual(said.map((x) => x[1]), ['recorded', 'recorded']);
  assert.ok(clipId('قطة', 'ar'));
});
