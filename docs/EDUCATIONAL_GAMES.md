# Educational games (Games tab, "Learning games")

| Game | Ages | Completion rule | Notes |
|---|---|---|---|
| Match identical pictures | 3-6 | all pairs matched (3 to 6 pairs by age) | a mismatch turns back after about a second; taps are ignored meanwhile; hint button |
| Letter fishing | 4-6 | 5 targets caught | Arabic or English letters (the child's learning language, "both" uses Arabic); optional listen button |
| Four in a row | 5-6 | the round ends (win or draw) | two players on one device, 5 x 5 board, no computer opponent; players differ by shape as well as color |
| Western / Arabic-Indic numerals | 4-6 | 5 matches | ages 4 digits 0-5, ages 5-6 digits 0-9; a worked example is always shown |
| Trace the letter | 4-6 | 3 letters traced (real drawing needed, not graded) | Arabic only |
| Word picture book | 2-6 | all 50 words opened (any number of visits) | the 50 words come from the app vocabulary |

| Which is different? | 3-6 | 5 rounds | three pictures of one kind (animals, food, transport, nature, home) and one different |
| Complete the pattern | 4-6 | 5 rounds | age 4: AB; age 5: AAB or ABB; age 6: ABC |
| More and fewer | 3-6 | 5 rounds | counts up to 5 (age 3), 7 (age 4), 9 (ages 5-6); alternates "more" and "fewer" |
| Sort into groups | 4-6 | 6 pictures sorted | two groups, three pictures each |

Rules every game follows
- A star appears only when the activity is completed, and only the first time per child (`GameRewards`, `kCompletionStars = 1`).
  Replaying shows kind words and no star. No stars for speed, score, taps, or per word.
- A wrong choice fades or turns back. There is no failure screen and no negative message.
- "Play again" goes to the rest screen if the session time is up.
- Finishing is recorded locally as practice (not as understanding) in the learning records.

Honest limits
- Tracing guide: it only says "start on the right" with a direction arrow. The order of strokes inside each Arabic
  letter is NOT taught because it has not been checked against an educational reference. A teacher should review
  it before any stroke-order guide is added.
- Pictures are emoji illustrations from the app vocabulary, not photographs and not custom artwork.
- Listening in the picture book uses the audio service: the card states whether the sound is a recording or the
  device voice, or that there is none. No word has an approved recording yet.
- Connect Four has no computer opponent.
- Not tested on a real device or with children; see docs/MANUAL_TESTS.md.
