# Rehlaty — testing guide for a non-developer

Use this guide to test the app by hand on a real phone or tablet. It covers the same ground as `docs/MANUAL_TESTS.md` (the long technical checklist) in about 13 short sessions of 5-15 minutes.
**You do not need to know how to program.** If a step says "tap X", the word on the screen may be in Arabic or English depending on the language you chose; both are fine.

Nothing here has been run yet by a person. Do not tick a result you did not see yourself.

## Before you start
- A phone or tablet with the app installed (see `docs/REAL_DEVICE_TEST_GUIDE.md`; someone may need to install it for you).
- 20-60 minutes, a charged device, internet (Wi-Fi) for most sessions and a way to switch it off.
- Headphones are NOT needed; use the speaker, and test once with the phone on silent.
- A pen and paper or a copy of `docs/TEST_REPORT_TEMPLATE.md`. Take a **screenshot** whenever something looks wrong (press power + volume-down on most Android phones).
- Use test names for children (for example "Test A", "Test B"). Do not put your real child's data into a test build you share.

## How to record a result
For each check write: **session number, step number, Pass / Fail / Could not test, device name, what you saw**. If it failed, follow "How to report a problem" at the bottom.

## Session 1 - First start and a child profile (10 min)
1. Open the app for the first time.
   *Expect:* the Rehlaty screen opens in landscape (the screen is wide). No crash. The language is Arabic unless you changed it.
2. Follow the steps to add a child (nickname, age 1-6, goals). Set a parent PIN (4 digits) when asked.
   *Expect:* every step can be completed; only ages 1 to 6 are offered; you reach the child's home.
3. Close the app completely (swipe it away) and open it again.
   *Expect:* the child is still there; you are not asked to start again.

## Session 2 - Parent area and PIN (5 min)
1. From the child's home, open the parent area (the grown-up button). Answer the question or enter the PIN.
   *Expect:* the parent screen opens. A wrong PIN is refused (after 5 wrong tries it waits 30 seconds).
2. Go back to the child's side.
   *Expect:* a child cannot reach the parent area without the PIN.

## Session 3 - Videos: nothing shows until a parent approves (15 min) - the most important safety check
1. As the child, open the video list (Cartoons / Videos).
   *Expect:* **no videos**, and a friendly message telling the child to ask a grown-up. If ANY video shows now, **stop and report it as Critical**.
2. Parent area -> **Lesson library** (Arabic: مكتبة الدروس والفيديوهات).
   *Expect:* 157 lessons, "0 visible to children", every lesson says "Waiting for your approval" and "Unverified candidate".
3. Look at a lesson that you have not previewed.
   *Expect:* the button **Review and decide** is greyed out (it needs a preview first).
4. Tap **Preview** on one lesson, watch it, go back, then tap **Review and decide**.
   *Expect:* a sheet with the lesson details, the exact video address and five checks. **Approve** stays greyed out until all five are ticked. Tick all and approve: the status becomes "Visible to children", the date of approval is shown, the counter shows 1. Try **Reject** on another lesson: it is listed under the Rejected filter and never appears to the child; **Reopen review** brings it back to undecided.
5. Go to the child's side and open the video list for that child's age.
   *Expect:* only the approved video appears. Tap it: it plays in the YouTube player. Pause, resume, and go back.
6. Parent area -> **Disable** that lesson. Check the child's list.
   *Expect:* it disappears. **Enable** brings it back. **Withdraw approval** removes it.
7. **Add a lesson by link:** paste a playlist link, a channel link, a search link and a link to another website, one at a time.
   *Expect:* each is refused with a message. Then paste a normal single-video YouTube link with a title and ages.
   *Expect:* it is saved as "Waiting for approval" and does NOT appear for the child until you preview and approve it. **Remove** deletes it.
8. Open a video that no longer exists (ask the helper, or use an approved link you then break) or switch the internet off and open a video.
   *Expect:* a clear message ("not available" or "no internet") with **Try again** and **Back** buttons; never a blank screen; no other video suggested.

## Session 3b - Online features (release gate closed)
1. Parent settings -> Family chat, and the Teachers entry on the first screen.
   *Expect:* a clear page "Not available in this version yet" with the reasons; **no sign-in or registration form**; the rest of the app works normally. If a sign-in form appears, report it as High.
2. First screen: there is no "I am family" button.

## Session 3c - Permissions
1. Use the whole app for 10 minutes without starting dictation, a voice message or a call.
   *Expect:* **no camera or microphone permission dialog ever appears.**
2. Parent area -> plan assistant -> dictation button (if shown): the microphone/speech dialog appears only now. Refuse it.
   *Expect:* a message that dictation is unavailable; typing still works; the app does not crash; the narration voices (speaker buttons) still work.
3. Phone Settings -> Apps -> Rehlaty -> Permissions: note what is listed.

## Session 4 - Games and stars (15 min)
1. As the child, open the Games tab. Pick 3 different games for the child's age.
   *Expect:* each game shows instructions, can be played to the end, and shows a congratulation screen.
2. Finish a game for the first time.
   *Expect:* a star (and sometimes a sticker or a short companion message). Play it a second time: **no second star**.
3. Start a game and press back halfway.
   *Expect:* a question "Leave the game?" appears.
4. Tap the speaker button in a game.
   *Expect:* the instruction is read (with the phone's voice) and the button shows Adam or Nour.

## Session 5 - The Me tab: companion, world, adventure, family, museum (15 min)
1. Open the **Me** tab. Tap the companion (Adam / Nour) and switch to the other.
   *Expect:* a speech bubble with a short friendly sentence; the sentence is always shown in writing too.
2. Open **My world**. After finishing games, check the islands and gifts; open the palette (top corner) and change colour, time of day and island name.
   *Expect:* the island changes; a gift you earned shows on the island and in the shelf; locked gifts tell you what earns them. Nothing is bought.
3. Open **Weekly adventure**, **Learning from our day**, **Family time**, **My achievement museum**.
   *Expect:* each opens; the museum shows only what this child really did (an empty room says "Nothing here yet"); "Learning from our day" tasks say a grown-up is needed; confirming asks a grown-up question.

## Session 6 - Stories (10 min)
1. Open Stories. Play a story for 30 seconds, pause, close the app, reopen, resume.
   *Expect:* it resumes near where you stopped.
2. Open "Choose your path" and make different choices to reach more than one ending.
   *Expect:* every path ends kindly; "Tell it another way" restarts it.

## Session 7 - Listening to voices (10 min)  (no recordings exist; this is the phone's own voice)
1. Open a letters lesson and a vocabulary lesson and press the speaker.
   *Expect:* you hear a computer voice, understandable. It is expected to sound robotic. If it is silent, report the phone model and whether an Arabic voice is installed.
2. Parent area -> Sound settings: turn the characters off, then try a speaker button.
   *Expect:* silence, no crash. Turn them on again.

## Session 8 - Printing (5 min, needs a printer or "Save as PDF")
1. Parent area -> Printables. Choose a worksheet and preview it.
   *Expect:* a readable A4 page, Arabic in the right direction.

## Session 9 - Two children (10 min) - the data privacy check
1. Add a second child "Test B". Finish a game as Test A only.
   *Expect:* Test B has no star, no gift, no museum exhibits and no adventure progress from Test A.
2. Parent area -> Children -> export Test A's data; then delete Test A.
   *Expect:* Test A's progress is gone; Test B is untouched.

## Session 10 - Arabic, English and large text (10 min)
1. Switch the app language (Parent settings) between Arabic and English.
   *Expect:* the whole screen flips direction (right-to-left for Arabic); no text is cut off.
2. Set the phone's font size to the largest (phone Settings -> Display -> Font size) and set the app's own text size to extra large.
   *Expect:* texts are bigger but still readable; buttons remain tappable; nothing overlaps.

## Session 11 - No internet (5 min)
1. Turn on airplane mode. Open the app and play a game, a story with the phone voice, and the Me tab.
   *Expect:* they still work. Only videos need internet and show the offline message.

## Session 12 - Daily time limit (5 min)
1. Parent area -> set the daily limit to 1-2 minutes, start child mode and keep playing.
   *Expect:* a gentle "time to rest" screen appears; a video that is playing is allowed to finish; the PIN lets a parent extend or end the session.

## Session 13 - Rotation and touch (5 min)
1. Hold the phone portrait, then landscape.
   *Expect:* the app stays landscape (it is designed for landscape). Videos play full-size.
2. Use the app with a small child's clumsy taps: tap fast, tap two things.
   *Expect:* no crash, no double stars, buttons are big enough.

## How to report a problem
Use `docs/TEST_REPORT_TEMPLATE.md`. For every problem send: session and step number, device and Android version, language, **what you did, what you expected, what happened**, a screenshot or a short screen recording, and whether it happens every time.

Severity: **Critical** = a child sees an unapproved video or personal data, a crash on start, or a child can reach the parent area. **High** = a feature does not work or loses data. **Medium** = confusing or cut-off screen. **Low** = a small visual issue or a wording problem.
