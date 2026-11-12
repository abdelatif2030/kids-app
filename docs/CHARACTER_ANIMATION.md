# Animated characters (2026-11-12)

## What exists
Two places show the characters, and both are animated:

1. **Inside the learning world** (the three.js game, `game_src/learn_games`): the child's hero (boy/girl) and the owl, made from
   the owner's own cut-out art (`assets/games/art`). `src/kit/actors.js` holds the animation state machine.
2. **On the Flutter learning page** (`lib/games/learning_page.dart`): the child's own character on the sand, driven by the real
   events of the game. Reusable widget: `lib/design/animated_character.dart`.

## Flutter files
| File | What |
|---|---|
| `lib/design/animated_character.dart` (new) | `CharacterKind` (boy = Adam, girl = Nour, owl = Lulu), `CharMood`, `CharacterController`, `AnimatedCharacter` |
| `lib/games/web_games/learn_reactions.dart` (new) | `LearnReactions`: the events of a learning web game (`correct`, `wrong`, `complete`) |
| `lib/games/web_games/web_game_screen.dart` | `LearnBridge` now emits those events from the real `round` and `complete` messages |
| `lib/games/learning_page.dart` | the character on the page: welcome, playful tap, correct, wrong, complete (trophy) |
| `test/animated_character_test.dart` (new) | 10 tests: priorities, repeated answers, interruptions, never stuck, random idle, reduced motion, real events |

## Animations implemented (Flutter)
* **Idle, always on:** gentle bounce and breathing (a 2.9 s loop), a slow sway.
* **Idle, random (every 2.5-7 s, never the same rhythm):** looks around, a small hop, a wave (pose swap), excited bounces.
* **Welcome:** waves (waving picture) with a small pop, when the page opens.
* **Tap:** a squash-and-hop when the child taps play (the game opens after 0.38 s).
* **Correct answer:** a short happy jump with the cheering picture and a few sparkles.
* **Wrong answer:** a kind head tilt and shake that fades out. No sadness, no anger, nothing shown as failure.
* **Celebrate:** three big bounces, wiggle, sparkles (2.4 s).
* **Complete (game finished):** bigger jumps, sparkles and a golden trophy rising above the head (3.2 s).
* Rules: a smaller reaction never cuts a bigger one; the same reaction again restarts it; every reaction ends by itself and returns to idle.
  Animations pause when the app is in the background (`WidgetsBindingObserver`) and when the route is covered (`TickerMode`),
  controllers and timers are disposed, reduced motion turns movement off. No new packages.

## Animations in the three.js game (`actors.js`)
idle (breathing + bounce), random look/hop/wave/excited, point, talk, clap, cheer/jump, celebrate (spin + jumps), think (gentle tilt),
run and walk (used between levels), sad (kept, not used). Wired to real answers, wrong tries, level ends and the walk to the next place.

## What the art cannot do (missing assets)
The characters are flat cut-outs, so every movement is the whole body and the pose picture is swapped. A static image cannot show
a real laugh, blink or looking around. For genuine facial animation we would need, per character:
* separate layers (head, eyes open/closed, eyebrows, mouth shapes: closed, open smile, laugh, "oh", arms, hands) so the code can
  move them; or a Rive / Spine file with bones and a state machine (needs the owner's approval for a package: `rive`); or a
  sprite sheet of 8-12 frames each for laugh, cheer, think and walk; or GLB models with an animation clip set (idle, walk, clap, laugh, jump).
* The reference sheets already show the faces (happy, laughing, surprised, thinking, sad, sleeping) and many poses; each needs to be
  provided as its own full-body picture to be used as a pose.

## Not verified
Not run on a real phone or tablet. The Flutter page was tested with widget tests, not looked at in a browser. The sounds were not heard.
