// The sentences of the «اتعلّم» mode that are not words: every one is a clip the owner records (docs/LEARN_MODE_LINES.csv, made by
// tools/make_learn_mode_lines.mjs). Until a clip exists the device voice says it.
export const GEN = { // key -> [ar, en, de, fr]
  start: ['يلا نتعلم سوا!', "Let's learn together!", 'Los, wir lernen zusammen!', 'On apprend ensemble !'],
  look: ['بص!', 'Look!', 'Schau!', 'Regarde !'],
  say: ['قول معايا!', 'Say it with me!', 'Sag es mit mir!', 'Répète avec moi !'],
  again: ['تاني!', 'Again!', 'Noch einmal!', 'Encore !'],
  great: ['برافو عليك!', 'Great job!', 'Super gemacht!', 'Bravo !'],
  next: ['اللي بعده!', 'The next one!', 'Das nächste!', 'Le suivant !'],
  done: ['خلصت كل حاجة! إنت شاطر!', 'You learned them all! Well done!', 'Du hast alles gelernt! Toll!', 'Tu as tout appris ! Bravo !'],
  count: ['تعالى نعد سوا!', "Let's count together!", 'Zähl mit mir!', 'Comptons ensemble !'],
};
const IDX = { ar: 0, en: 1, de: 2, fr: 3 };
export const gen = (key, lang) => GEN[key][IDX[lang] ?? 0];
