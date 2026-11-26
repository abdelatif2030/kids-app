# Apple review rules (from an owner who was rejected 10+ times)

These are rules for every change. `test/apple_review_test.dart` keeps the checkable ones true.

## The three he learned
1. **Subscriptions inside the app = Apple In-App Purchase only.** Never Stripe, MyFatoorah, Moyasar, PayPal, Fawry, Paymob (test: no such name in `pubspec.yaml` or `lib/`). Today the app sells nothing. If a subscription is ever added: StoreKit/`in_app_purchase` (needs the owner's approval for the package), a **Restore purchases** button, price + period + "renews automatically" text, and links to privacy + terms on the paywall (use `LegalLinks`).
2. **The payment/sign-up screen has links to the privacy policy and the terms.** Done: `LegalLinks` (lib/legal/terms_screen.dart) is on the sign-in page, the register page and the Privacy screen; `TermsScreen` exists in the app; hosted pages `web/privacy`, `web/terms`, `web/support`.
3. **The user can delete the account inside the app.** Done: Parent settings -> Privacy and data -> «حذف حسابي وبياناتي» (`lib/account_deletion.dart`): deletes the signed-in account (client part: own `users/{uid}/families`, `users/{uid}` if the rules allow, then the sign-in identity; asks for a fresh sign-in when Firebase requires it) and erases everything local (children, progress, what was typed at sign-up). **Not done:** the backend clean-up of the rest of the online records (`functions/src/deletion.js`, `docs/ACCOUNT_DELETION_DESIGN.md`); the online gate stays closed until that is deployed (`kAccountDeletionReady`).

## The twelve common rejections, and where we stand
| # | Reason | Status |
|---|---|---|
| 1 | Stripe instead of IAP | No payments exist. Guard test. |
| 2 | Google sign-in without Sign in with Apple (guideline 4.8) | Google button is **hidden on iOS** (`kGoogleSignInAllowed`). E-mail sign-up is fine. To offer Google on iPhone, add Sign in with Apple first (package `sign_in_with_apple`: owner approval). |
| 3 | No in-app account deletion | Built (see above); backend clean-up pending. Release 1 is offline: no account can be created in it. |
| 4 | Copycat / spam app | Original art and content only. Keep it so. |
| 5 | Review account does not work / hidden features | The release build is offline: nothing to log into. If online is opened, give Apple a working test parent account and list every feature in the review notes. No hidden switches (`ONLINE_DEV`, `DEMO` do nothing in release). |
| 6 | Broken iPad layout | `UIRequiresFullScreen` + landscape only on iPad (test). Responsive tests at 3 widths. **Still to do:** run on a real iPad (MANUAL_TESTS). |
| 7 | Screenshots do not match the app | Take them from the final build only (iPhone + iPad sizes); no mock-ups, no paid/unfinished features. |
| 8 | "Coming soon" screens | **Removed:** episodes tile, the cartoons/stories "soon" pages (cartoons opens the video lessons, stories opens the stories), the pet page (opens «رفيقي»), the empty lesson slots (quran/songs open the lesson list for that subject, drawing opens the studio). Test fails if the words come back. **Owner to check:** quran and songs show "no lessons for this section right now" until you add those videos to `lessons.json` (an empty page can still be rejected: add at least one video each, or take the tile off the picture). |
| 9 | Support / privacy links do not work | Host `web/privacy`, `web/terms`, `web/support` (same site as the demo) and put the **real URLs and a real support e-mail** in App Store Connect. The pages still say "[e-mail]": fill it. |
| 10 | User-generated content without a report button | Release 1 has no user content shown to other users. Teacher reviews/family chat (online, gated) have a report action (`reports`); keep one on every new user-content screen, plus a way to block. |
| 11 | Restore purchases not working | No purchases yet. Rule above. |
| 12 | Paid features shown in screenshots without saying so | Screenshots only of free features, or add "requires subscription" on the image/caption. |

## Before every submission (checklist)
- [ ] Real support e-mail and the legal entity name in the three hosted pages and in `TermsScreen`.
- [ ] Privacy "nutrition label" matches `PrivacyInfo.xcprivacy` (docs/IOS_RELEASE.md).
- [ ] No ComingSoon, no empty tiles: open every tile on a real iPad and iPhone.
- [ ] Screenshots from the final build; iPad screenshots present.
- [ ] Review notes: how to reach every feature; test account if online is on.
- [ ] Kids Category: no external links, no ads, parental gate before anything leaving the app (done: PIN).
