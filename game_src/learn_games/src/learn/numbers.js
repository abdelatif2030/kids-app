// Number words for the «اتعلّم» (learn) mode: any whole number 0..999 999 (and 1 000 000) in Arabic (Egyptian), English, German and French.
// numberWords(n, lang) -> { parts: [...], text } : `parts` are the small words a recorded voice can be built from (twenty, three, hundred, thousand ...),
// `text` is the whole phrase (what the device voice reads when a part has no recording yet).
const clamp = (n) => Math.max(0, Math.min(1000000, Math.floor(Number(n) || 0)));

// ---- English ----
const EN_U = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const EN_T = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function en999(n) { // 1..999
  const p = [];
  if (n >= 100) { p.push(EN_U[Math.floor(n / 100)], 'hundred'); n %= 100; }
  if (n >= 20) { p.push(EN_T[Math.floor(n / 10)]); n %= 10; }
  if (n > 0) p.push(EN_U[n]);
  return p;
}
function en(n) {
  if (n === 0) return ['zero'];
  if (n === 1000000) return ['one', 'million'];
  const p = [];
  if (n >= 1000) { p.push(...en999(Math.floor(n / 1000)), 'thousand'); n %= 1000; }
  if (n > 0) p.push(...en999(n));
  return p;
}

// ---- German ----
const DE_U = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const DE_T = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
function de99(n, lead) { // 1..99 ; lead = "ein" instead of "eins" before hundert/tausend
  if (n < 20) return [n === 1 && lead ? 'ein' : DE_U[n]];
  const t = Math.floor(n / 10), u = n % 10;
  if (!u) return [DE_T[t]];
  return [u === 1 ? 'ein' : DE_U[u], 'und', DE_T[t]];
}
function de999(n, lead) { // 1..999
  const p = [];
  if (n >= 100) { const h = Math.floor(n / 100); p.push(...(h === 1 ? [] : [DE_U[h]]), 'hundert'); n %= 100; }
  if (n > 0) p.push(...de99(n, lead && !p.length));
  return p;
}
function de(n) {
  if (n === 0) return ['null'];
  if (n === 1000000) return ['eine', 'Million'];
  const p = [];
  if (n >= 1000) { const k = Math.floor(n / 1000); p.push(...(k === 1 ? [] : de999(k, true)), 'tausend'); n %= 1000; }
  if (n > 0) p.push(...de999(n, false));
  return p;
}
const deText = (p) => p.join('').replace(/^eineMillion$/, 'eine Million');

// ---- French ----
const FR_U = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const FR_T = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
function fr99(n, plural80) { // 1..99
  if (n < 20) return [FR_U[n]];
  if (n < 70) { const t = Math.floor(n / 10), u = n % 10; return !u ? [FR_T[t]] : u === 1 ? [FR_T[t], 'et', 'un'] : [FR_T[t], FR_U[u]]; }
  if (n < 80) { const r = n - 60; return r === 11 ? ['soixante', 'et', 'onze'] : r === 10 ? ['soixante-dix'] : ['soixante', FR_U[r]]; }
  const r = n - 80; // 80..99
  if (r === 0) return [plural80 ? 'quatre-vingts' : 'quatre-vingt'];
  return ['quatre-vingt', FR_U[r]];
}
function fr999(n, plural80) { // 1..999
  const p = [];
  if (n >= 100) { const h = Math.floor(n / 100); const rest = n % 100; p.push(...(h === 1 ? [] : [FR_U[h]]), h > 1 && !rest && plural80 ? 'cents' : 'cent'); n = rest; }
  if (n > 0) p.push(...fr99(n, plural80));
  return p;
}
function fr(n) {
  if (n === 0) return ['zéro'];
  if (n === 1000000) return ['un', 'million'];
  const p = [];
  if (n >= 1000) { const k = Math.floor(n / 1000); p.push(...(k === 1 ? [] : fr999(k, false)), 'mille'); n %= 1000; }
  if (n > 0) p.push(...fr999(n, true));
  return p;
}

// ---- Arabic (Egyptian) ----
const AR_U = ['صفر', 'واحد', 'اتنين', 'تلاتة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'تمانية', 'تسعة', 'عشرة', 'حداشر', 'اتناشر', 'تلاتاشر', 'أربعتاشر', 'خمستاشر', 'ستاشر', 'سبعتاشر', 'تمنتاشر', 'تسعتاشر'];
const AR_T = ['', '', 'عشرين', 'تلاتين', 'أربعين', 'خمسين', 'ستين', 'سبعين', 'تمانين', 'تسعين'];
const AR_H = ['', 'مية', 'ميتين', 'تلتمية', 'ربعمية', 'خمسمية', 'ستمية', 'سبعمية', 'تمنمية', 'تسعمية'];
const AR_TH = ['', 'ألف', 'ألفين', 'تلات تلاف', 'أربع تلاف', 'خمس تلاف', 'ست تلاف', 'سبع تلاف', 'تمن تلاف', 'تسع تلاف', 'عشر تلاف'];
function ar99(n) { // 1..99
  if (n < 20) return [AR_U[n]];
  const t = Math.floor(n / 10), u = n % 10;
  return u ? [AR_U[u], 'و' + AR_T[t]] : [AR_T[t]];
}
function ar999(n) { // 1..999
  const p = [];
  const h = Math.floor(n / 100), r = n % 100;
  if (h) p.push(AR_H[h]);
  if (r) { const x = ar99(r); if (h) x[0] = 'و' + x[0]; p.push(...x); }
  return p;
}
function arThousands(k) { // the thousands part, k = 1..999
  if (k <= 10) return [AR_TH[k]];
  return [...ar999(k), 'ألف'];
}
function ar(n) {
  if (n === 0) return ['صفر'];
  if (n === 1000000) return ['مليون'];
  const p = [];
  const k = Math.floor(n / 1000), r = n % 1000;
  if (k) p.push(...arThousands(k));
  if (r) { const x = ar999(r); if (k) x[0] = 'و' + x[0]; p.push(...x); }
  return p;
}

const TABLE = { en, de, fr, ar };
export function numberWords(n, lang) {
  n = clamp(n);
  const fn = TABLE[lang] || en;
  const parts = fn(n);
  let text = lang === 'de' ? deText(parts) : parts.join(' ');
  if (lang === 'fr') text = text.replace(/quatre-vingt (?!mille)/g, 'quatre-vingt-');
  return { parts, text };
}

/** Every distinct small word the number words of a language are built from (what a voice must record to say any number up to a million). */
export function numberPartsNeeded(lang, max = 1000000) {
  const set = new Set();
  const probe = [];
  for (let i = 0; i <= 1000; i++) probe.push(i);
  for (let k = 1; k <= 999; k++) probe.push(k * 1000);
  probe.push(max);
  for (const i of probe) if (i <= max) for (const p of numberWords(i, lang).parts) set.add(p);
  return [...set];
}

/** The numbers a child walks through, in order: every number to 100, then the hundreds, the thousands, the ten-thousands, up to [max]. */
export function numberSequence(max = 100000) {
  const out = [];
  for (let i = 0; i <= 100 && i <= max; i++) out.push(i);
  for (let i = 200; i <= 1000 && i <= max; i += 100) out.push(i);
  for (let i = 2000; i <= 10000 && i <= max; i += 1000) out.push(i);
  for (let i = 20000; i <= 100000 && i <= max; i += 10000) out.push(i);
  return out;
}

/** The number after [n] when walking on: +1 to 100, then the next hundred / thousand / ten thousand. null at the end. */
export function nextNumber(n, max = 100000) {
  let x = n < 100 ? n + 1 : n < 1000 ? (Math.floor(n / 100) + 1) * 100 : n < 10000 ? (Math.floor(n / 1000) + 1) * 1000 : (Math.floor(n / 10000) + 1) * 10000;
  return x > max ? null : x;
}
export function prevNumber(n) {
  if (n <= 0) return null;
  if (n <= 100) return n - 1;
  if (n <= 1000) return Math.ceil(n / 100) * 100 - 100 || 100;
  if (n <= 10000) return Math.ceil(n / 1000) * 1000 - 1000;
  return Math.ceil(n / 10000) * 10000 - 10000;
}
