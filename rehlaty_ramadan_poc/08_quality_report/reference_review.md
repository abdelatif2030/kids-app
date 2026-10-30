# Reference review (2026-10-30)

Generated with Higgsfield image model `nano_banana_pro` (the job record reports `nano_banana_2`), 2K, 16:9, logo as reference.

| File | Result |
|---|---|
| 02_character_sheets/adam_sheet_v1.png | Consistent across 8 views (curly dark-brown hair, brown eyes, blue hoodie, yellow strap, jeans, sneakers). Matches the logo boy. Flaw: back view shows only the strap, no backpack body. |
| 02_character_sheets/nour_sheet_v1.png | Consistent across 8 views (two ponytails, pink flower ties, pink hoodie, purple backpack visible from the side and back). Matches the logo girl and Adam's rendering style. |
| 03_environment_reference/living_room_v1.png | Warm Ramadan living room with a crescent, lanterns, lights, rug, sofa, dates, and an empty wall hook. Rendering is more painterly than the characters, so it may not blend with them in a single shot. |

Not yet checked: character likeness against the logo by anyone but the generator's reviewer (me); no video, voice or lip-sync exists yet.

## Trial clip (2026-10-30)

`05_generated_shots/trial_clip_01.mp4` (copy: `07_final_video/rehlaty_ramadan_trial_01.mp4`): 2.0 s, 854x480, 30 fps, H.264 + AAC audio. Model `wan3_0` (Higgsfield), image-to-video from `04_storyboard/start_frame_trial_1920.jpg`, 2 credits. The start frame was composed locally from the approved Adam and Nour sheets over the living-room reference.

Checked by looking at 4 frames (0.0, 0.5, 1.0, 1.5 s):
- Adam and Nour keep their faces, hair, clothes and backpacks; the room is unchanged; Adam raises a glowing lantern; Nour reacts; the camera pushes in slowly. No visible limb or finger defects in those frames.
- Frame 0: Adam's eyes are closed (a blink).
- Not checked: smoothness between the sampled frames, the whole sequence in motion.
- Audio: a track exists (mean -11.4 dB, peak 0 dB). I did NOT verify what is said or that it is Egyptian Arabic, and no lip-sync was verified. Someone must listen.
- This is 2 s of the planned 30 s. Shots 2-4, music, the end logo card and the 20-30 s assembly are not made.

## Trial video 02 (2026-10-30): all credits used (Higgsfield balance now 0)

`07_final_video/rehlaty_ramadan_trial_02.mp4`: 6.1 s, 854x480, H.264 + AAC. Built with ffmpeg: clip 1 (2 s) + clip 2 (2 s) + 2 s end card with the supplied logo, unmodified, fading in.
- Clip 2 (`05_generated_shots/trial_clip_02.mp4`, wan3_0, 2 credits) was generated from the last frame of clip 1 (`04_storyboard/clip01_last_frame.jpg`), prompt: Nour reacts "واو! حلو أوي يا آدم!".
- Looked at 4 frames of clip 2: both children and the room stay consistent with clip 1; Nour ends up holding the lantern that Adam was holding (not in the prompt); Adam blinks in the first frame; no visible hand defects in those frames. The hand-over is a small continuity change from the storyboard.
- End card checked (one frame): logo intact, Arabic and English names readable.
- Not verified: the audio content and language of either clip, lip-sync, motion smoothness between sampled frames, the cut between clips (a 4 s dialogue exchange only; no background music was added).
- Not made: storyboard shots 3 and 4, the second child line, music, a 20-30 s cut. Needs more credits (21 for a 7 s 480p draft).

## Voice problem on clip 2 (reported by the owner, 2026-10-30)

Clip 2's generated voice for Nour sounded like Adam (a boy). Higgsfield credits are 0, so the clip cannot be regenerated. ElevenLabs library check: no Egyptian child or Egyptian female voice (female Arabic voices are Saudi, Lebanese, Moroccan, MSA); creating a child voice with `creative_design_voice` was refused by ElevenLabs' safety filter. Stopgap: `07_final_video/rehlaty_ramadan_trial_03_nour_muted.mp4` = trial_02 with clip 2's audio removed (clip 1 audio and the logo card unchanged). Proper fix needs: Higgsfield credits to regenerate clip 2 with a girl voice reference, or a real/recorded child voice.

## Girl voice for Nour (2026-10-30)

`06_audio/nour_line_mini_v1.mp3`: ElevenLabs `eleven_v3`, voice "Mini - Lively Cute Little Girl" (`nUX4UWK0Tf1qh5zvFZWR`, a child voice listed as Hindi), text «واو! حلو أوي يا آدم!», 1.96 s, 20 ElevenLabs credits (about 0.2 US cents), one take. Laid over clip 2 with a 0.15 s delay: `07_final_video/rehlaty_ramadan_trial_04_girl_voice.mp4` (6.1 s; clip 1 keeps its original generated audio; logo end card silent).
- Not verified (nobody on the assistant side can listen): that the Arabic is pronounced correctly, that the accent is Egyptian (the voice is Hindi-listed, so it may be Indian-accented), and that it fits the mouth movement (no lip-sync was run; the mouth in clip 2 was animated for the old audio).
- No Egyptian child or Egyptian female voice exists in the ElevenLabs library; designing one was refused by the safety filter.

## Wrong speaker fixed with a close-up (2026-10-30)

Owner's note on trial_04: in clip 2 it was Adam's mouth that moved while Nour's voice played. Higgsfield credits are 0, so the clip could not be regenerated with Nour speaking. Workaround: `05_generated_shots/trial_clip_02_nour_closeup.mp4` crops clip 2 to Nour only (crop 454x255 scaled to 854x480, so it is softer than the rest), with the girl voice on top; `07_final_video/rehlaty_ramadan_trial_05_nour_closeup.mp4` = clip 1 + this + logo card (6.1 s).
- Checked 4 frames: Adam is not visible; Nour smiles and looks at the lantern; mouth open in 2 of 4 frames; one blink.
- Not verified: mouth sync with the girl voice (the animation was made for the old audio), accent, and sound.
- Proper fix: regenerate clip 2 with Nour as the speaker (about 2 Higgsfield credits).
