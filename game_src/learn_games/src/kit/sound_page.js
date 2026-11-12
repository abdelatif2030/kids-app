// A listening page for the game's own sounds (made in code, no audio files): every effect and the music moods.
import { Sound } from './sound.js';

const NAMES = [
  ['applause', 'تصفيق'], ['crowd', 'هتاف الأطفال'], ['fanfare', 'فانفار النجاح'], ['yay', 'ياي'], ['cheer', 'تشجيع'], ['win', 'فوز'],
  ['right', 'إجابة صح'], ['wrong', 'حاول تاني'], ['step', 'خطوة'], ['tap', 'لمسة'], ['bump', 'خبطة ناعمة'], ['pop', 'فقاعة'],
  ['sparkle', 'لمعة'], ['star', 'نجمة'], ['whoosh', 'وووش (الانتقال)'], ['page', 'صفحة'], ['drop', 'نقطة'], ['splash', 'رشّة ماء'],
  ['nibble', 'قضمة'], ['squeak', 'زقزقة'], ['bell', 'جرس'], ['pluck', 'نغمة'], ['flute', 'ناي'], ['note', 'نوتة'], ['hmm', 'همم'],
];
const s = new Sound();
const box = document.getElementById('b');
const add = (label, fn) => { const b = document.createElement('button'); b.textContent = label; b.onclick = () => { s.unlock(); fn(); }; box.append(b); };
for (const [id, ar] of NAMES) add(`${ar} (${id})`, () => s.play(id, 0));
add('خطوتين ورا بعض', () => { s.play('step', 0); setTimeout(() => s.play('step', 1), 660); });
add('مشي ٥ خطوات (كل 0.67 ث)', () => { for (let i = 0; i < 5; i++) setTimeout(() => s.play('step', i % 2), i * 667); });
for (const m of ['menu', 'play', 'calm']) add(`موسيقى: ${m}`, () => s.setMode(m, true));
add('موسيقى التشويق (مستني الإجابة)', () => { s.setMode('play', true); s.setSuspense(true); });
add('وقّف الموسيقى', () => { s.setSuspense(false); s.setMode('menu', true); });
