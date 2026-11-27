// The 24 new sections of the «اتعلّم» mode (386 words, docs/LEARN_NEW_ITEMS.csv). Names: [ar, en, de, fr, it]. Words come from window.__learnExtraWords
// (assets/games/learn_voice/extra_words.js, built by tools/learn_new/build_new_words.mjs); every row has cat `new:<id>`.
const D = (id, emoji, name, csv, kind) => ({ id, emoji, name, csv, kind, pick: (e) => e.cat === `new:${id}` });
export const NEW_SECTIONS = [
  D('n_sounds', '🔊', ['أصوات الحيوانات', 'Animal sounds', 'Tierlaute', 'Les cris des animaux', 'I versi degli animali'], ['sounds'], 'plain'),
  D('n_verbs', '🏃', ['أفعال', 'Verbs', 'Verben', 'Les verbes', 'I verbi'], ['action'], 'verb'),
  D('n_opposites', '↔️', ['عكس الكلمات', 'Opposites', 'Gegensätze', 'Les contraires', 'I contrari'], ['opposite'], 'opposite'),
  D('n_where', '📍', ['فين؟', 'Where?', 'Wo?', 'Où ?', 'Dove?'], ['where'], 'where'),
  D('n_describe', '🌈', ['صفات', 'Describing words', 'Wie ist es?', 'Les adjectifs', 'Gli aggettivi'], ['describe'], 'adj'),
  D('n_polite', '🙏', ['كلمات الأدب', 'Polite words', 'Höfliche Wörter', 'Les mots polis', 'Le parole gentili'], ['polite'], 'plain'),
  D('n_questions', '❓', ['كلمات السؤال وأنا وإنت', 'Questions and pronouns', 'Fragen und Fürwörter', 'Questions et pronoms', 'Domande e pronomi'], ['question', 'people'], 'plain'),
  D('n_health', '🩺', ['صحتي والحمّام', 'Health and bathroom', 'Gesundheit und Bad', 'Santé et salle de bain', 'Salute e bagno'], ['health', 'bathroom'], 'noun'),
  D('n_safety', '🚦', ['الأمان', 'Staying safe', 'Sicherheit', 'La sécurité', 'La sicurezza'], ['safety'], 'noun'),
  D('n_money', '💰', ['الفلوس والسوق', 'Money and shopping', 'Geld und Einkaufen', 'L’argent et les courses', 'Soldi e spesa'], ['shop'], 'noun'),
  D('n_time', '⏰', ['الوقت والترتيب', 'Time and order', 'Zeit und Reihenfolge', 'Le temps et l’ordre', 'Tempo e ordine'], ['time', 'number2'], 'plain'),
  D('n_math', '➕', ['الحساب والقياس', 'Maths and measuring', 'Rechnen und Messen', 'Calcul et mesures', 'Calcolo e misure'], ['math'], 'plain'),
  D('n_planet', '🌍', ['كوكبنا', 'Our planet', 'Unser Planet', 'Notre planète', 'Il nostro pianeta'], ['earth'], 'noun'),
  D('n_countries', '🗺️', ['دول العالم', 'Countries', 'Länder', 'Les pays', 'I paesi'], ['country'], 'noun'),
  D('n_egypt', '🇪🇬', ['مصر بلدي', 'My Egypt', 'Mein Ägypten', 'Mon Égypte', 'Il mio Egitto'], ['egypt'], 'noun'),
  D('n_landmarks', '🗼', ['معالم العالم', 'World landmarks', 'Weltwunder', 'Monuments du monde', 'Monumenti del mondo'], ['world'], 'noun'),
  D('n_deen', '🕌', ['ديني', 'My religion', 'Meine Religion', 'Ma religion', 'La mia religione'], ['deen'], 'noun'),
  D('n_science', '🔬', ['علوم الطبيعة', 'Nature and science', 'Natur und Wissenschaft', 'Nature et sciences', 'Natura e scienze'], ['nature2'], 'noun'),
  D('n_body', '🫀', ['حواسي وجسمي من جوه', 'Senses and inside my body', 'Sinne und mein Körper innen', 'Les sens et mon corps', 'I sensi e il mio corpo'], ['senses', 'inside'], 'verb'),
  D('n_materials', '🧱', ['الخامات', 'Materials', 'Materialien', 'Les matières', 'I materiali'], ['material'], 'noun'),
  D('n_treats', '🧃', ['أكلات ومشروبات', 'Drinks and treats', 'Getränke und Leckereien', 'Boissons et gourmandises', 'Bevande e dolcezze'], ['drink', 'sweet', 'egyfood'], 'noun'),
  D('n_playground', '🛝', ['الملعب والبحر', 'Playground and beach', 'Spielplatz und Strand', 'Aire de jeux et plage', 'Parco giochi e spiaggia'], ['playground'], 'noun'),
  D('n_helpers', '🎻', ['ناس بتساعدنا وآلات موسيقية', 'Helpers and instruments', 'Helfer und Instrumente', 'Métiers et instruments', 'Aiutanti e strumenti'], ['people2', 'instrument'], 'noun'),
  D('n_fun', '🎉', ['تكنولوجيا وإكسسوارات وحفلات', 'Tech, accessories and parties', 'Technik, Accessoires und Feste', 'Technologie, accessoires et fêtes', 'Tecnologia, accessori e feste'], ['tech', 'accessory', 'party'], 'noun'),
];
// csv section -> new section (the kind of sentence can differ per section; senses are verbs, the body-inside words are nouns)
export const NEW_SECTION_OF = {};
for (const s of NEW_SECTIONS) for (const c of s.csv) NEW_SECTION_OF[c] = { id: s.id, kind: s.kind };
NEW_SECTION_OF.inside = { id: 'n_body', kind: 'noun' };
NEW_SECTION_OF.senses = { id: 'n_body', kind: 'verb' };
NEW_SECTION_OF.question = { id: 'n_questions', kind: 'plain' };
NEW_SECTION_OF.health = { id: 'n_health', kind: 'noun' };
