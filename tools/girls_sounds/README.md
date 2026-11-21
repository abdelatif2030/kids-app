# Sounds of the girls world (2026-11-22)
Made with ElevenLabs sound generation (POST /v1/sound-generation, the owner's key from the environment; 7 short clips, a few hundred credits). Prompts:
- musicbox / glock / harp: "a single soft music box note (glockenspiel bar strike / soft harp string pluck), clean ..., no reverb, no background, children toy" (2 s)
- pop: "a soft cute bubble pop, short, children game sound" · sparkle: "magical fairy dust sparkle chime, short twinkling glissando, cute, no music"
- success: "short cheerful rising music box jingle for a toddler game success, 3 seconds, sweet"
- lullaby: "gentle slow lullaby melody played on a music box and soft bells, soothing, simple, for toddlers, no drums" (22 s)
`pitch.mjs` measures the pitch of a sample (autocorrelation) so one note can be played at any scale pitch by changing its playback rate. Run `bash build.sh` after replacing a *.src.mp3.
