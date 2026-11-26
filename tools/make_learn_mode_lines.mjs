// docs/LEARN_MODE_LINES.csv: the new sentences the "Learn" (basics) mode needs in every language (file name = the game's clip id).
import fs from 'node:fs';
import { clipId } from '../game_src/learn_games/src/kit/voice.js';
const GEN = [ // [key, ar, en, de, fr]
 ['start', 'يلا نتعلم سوا!', "Let's learn together!", 'Los, wir lernen zusammen!', 'On apprend ensemble !'],
 ['look', 'بص!', 'Look!', 'Schau!', 'Regarde !'],
 ['say', 'قول معايا!', 'Say it with me!', 'Sag es mit mir!', 'Répète avec moi !'],
 ['again', 'تاني!', 'Again!', 'Noch einmal!', 'Encore !'],
 ['slow', 'مرة كمان، براحة.', 'One more time, slowly.', 'Noch einmal, ganz langsam.', 'Encore une fois, doucement.'],
 ['great', 'برافو عليك!', 'Great job!', 'Super gemacht!', 'Bravo !'],
 ['next', 'اللي بعده!', 'The next one!', 'Das nächste!', 'Le suivant !'],
 ['done', 'خلصت كل حاجة! إنت شاطر!', 'You learned them all! Well done!', 'Du hast alles gelernt! Toll!', 'Tu as tout appris ! Bravo !'],
 ['again_all', 'عايز نبدأ من الأول؟', 'Do you want to start again?', 'Möchtest du von vorn anfangen?', 'Tu veux recommencer ?'],
 ['count', 'تعالى نعد سوا!', "Let's count together!", 'Zähl mit mir!', 'Comptons ensemble !'],
];
const SEC = [ // [key, ar, en, de, fr]  intro of every section
 ['letters', 'هنتعلم الحروف!', "Let's learn the letters!", 'Wir lernen die Buchstaben!', "On apprend les lettres !"],
 ['numbers', 'هنتعلم الأرقام!', "Let's learn the numbers!", 'Wir lernen die Zahlen!', 'On apprend les chiffres !'],
 ['tens', 'هنتعلم العشرات!', "Let's learn the tens!", 'Wir lernen die Zehnerzahlen!', 'On apprend les dizaines !'],
 ['animals', 'هنتعلم الحيوانات!', "Let's learn the animals!", 'Wir lernen die Tiere!', 'On apprend les animaux !'],
 ['colours', 'هنتعلم الألوان!', "Let's learn the colours!", 'Wir lernen die Farben!', 'On apprend les couleurs !'],
 ['shapes', 'هنتعلم الأشكال!', "Let's learn the shapes!", 'Wir lernen die Formen!', 'On apprend les formes !'],
 ['days', 'هنتعلم أيام الأسبوع!', "Let's learn the days of the week!", 'Wir lernen die Wochentage!', 'On apprend les jours de la semaine !'],
 ['months', 'هنتعلم شهور السنة!', "Let's learn the months!", 'Wir lernen die Monate!', 'On apprend les mois !'],
 ['seasons', 'هنتعلم فصول السنة!', "Let's learn the seasons!", 'Wir lernen die Jahreszeiten!', 'On apprend les saisons !'],
 ['body', 'هنتعلم جسمي!', "Let's learn the body!", 'Wir lernen den Körper!', 'On apprend le corps !'],
 ['clothes', 'هنتعلم الهدوم!', "Let's learn the clothes!", 'Wir lernen die Kleidung!', 'On apprend les vêtements !'],
 ['family', 'هنتعلم العيلة!', "Let's learn the family!", 'Wir lernen die Familie!', 'On apprend la famille !'],
 ['food', 'هنتعلم الأكل!', "Let's learn the food!", 'Wir lernen das Essen!', 'On apprend la nourriture !'],
 ['fruit', 'هنتعلم الفاكهة والخضار!', "Let's learn fruit and vegetables!", 'Wir lernen Obst und Gemüse!', 'On apprend les fruits et les légumes !'],
 ['jobs', 'هنتعلم الوظايف!', "Let's learn the jobs!", 'Wir lernen die Berufe!', 'On apprend les métiers !'],
 ['school', 'هنتعلم حاجات المدرسة!', "Let's learn school things!", 'Wir lernen Schulsachen!', "On apprend les affaires d'école !"],
 ['weather', 'هنتعلم الجو!', "Let's learn the weather!", 'Wir lernen das Wetter!', 'On apprend la météo !'],
 ['home', 'هنتعلم حاجات البيت!', "Let's learn things at home!", 'Wir lernen Dinge im Haus!', 'On apprend les choses de la maison !'],
 ['city', 'هنتعلم المدينة!', "Let's learn the city!", 'Wir lernen die Stadt!', 'On apprend la ville !'],
 ['routine', 'هنتعلم يومي!', "Let's learn my day!", 'Wir lernen meinen Tag!', 'On apprend ma journée !'],
];
const LANGS = ['ar', 'en', 'de', 'fr'];
const q = (c) => '"' + String(c).replace(/"/g, '""') + '"';
const rows = [['language', 'file_name', 'kind', 'key', 'text']];
for (const [kind, list] of [['general line', GEN], ['section intro', SEC]]) for (const r of list) LANGS.forEach((l, i) => rows.push([l, clipId(r[i + 1], l) + '.mp3', kind, r[0], r[i + 1]]));
fs.writeFileSync('docs/LEARN_MODE_LINES.csv', '﻿' + rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
console.log(rows.length - 1, 'lines');
