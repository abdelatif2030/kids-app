# Content that needs a human review before release

Nothing here is wrong to our knowledge, but none of it has been reviewed by an Arabic teacher or a child-development specialist. Mark each item reviewed (name, date) in the file where it lives.

1. **Letters** (`lib/literacy/letters_data.dart`): letter names, the example words and their emoji, the syllable words with vowel marks, the six reading sentences. Check spelling, that each word is appropriate and the picture is unambiguous (for example 🏞️ for «نهر»), and that regional pronunciation differences are acceptable.
2. **Pronunciation**: replace device text-to-speech by recordings for letters, vowelled syllables and words. Isolated letters are the weakest case for TTS.
3. **Stories** (`lib/stories/story_data.dart`): wording, age ranges, the values taught, and the comprehension questions. The interactive story's choices.
4. **Vocabulary** (`lib/library/vocab.dart`): 110 items, Arabic names (dialect-neutral), English names, ages.
5. **Feelings land** (`lib/journey/content.dart`, `_feelingPool`): scenarios and "right" answers. They are not a diagnosis and must never be shown as one.
6. **Offline activities** (`lib/library/activities.dart`): the safety notes (water, knives, small objects, allergies) and age limits.
7. **Videos** (`assets/videos.json`, 157): watch each one, check it embeds, age fit and language; some channels teach a specific way of wudu.
8. **Artwork**: emoji are placeholders; licensed illustrations are needed for a polished release.
