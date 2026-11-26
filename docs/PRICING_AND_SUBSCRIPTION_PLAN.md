# Pricing and subscription plan (owner's research, 2026-11-26; estimates, not promises)

**Competitors (Egypt App Store):** Lamsa 72.99 EGP/month, 199.99 per 3 months, 659.99/year. Lingokids 259.99/month. Khan Academy Kids free.

**Proposed prices:** monthly 59.99 to 79.99 EGP; yearly 449.99 to 549.99 EGP; free trial 7 to 14 days; a REAL free version; the subscription unlocks all games, episodes and languages.

**Payment in Egypt:** many cards fail on international payments (unconfirmed), so carrier billing matters: Google Play supports Vodafone and Etisalat, Apple only Vodafone. Both stores' own billing handles it; we never touch payments.

**Revenue (estimate):** per 1000 downloads about 30 to 80 subscribers, i.e. about 2000 to 6000 EGP a month at first. Parent marketing (TikTok, Facebook) matters more than the price.

## What this means for the app (nothing built yet)
1. **Only the stores' own subscriptions** (App Store Auto-Renewable Subscription, Google Play Billing). Rules: docs/APPLE_REVIEW_RULES.md. Needs the owner's approval for the package (`in_app_purchase`), then: a paywall screen with price, period, "renews automatically", trial length, **Restore purchases**, privacy + terms links (`LegalLinks`).
2. **Parent gate before any purchase or link**: the parent PIN already exists; a paywall may be opened only from Parent settings (or after the PIN), never from a child screen.
3. **Free version that is real** (decide what is free): suggestion: the learning world's first levels in Arabic, a few games, one story, drawing; paid: all languages (English/German/French), all fun games, all learn sections, printables. Never lock safety/parent controls.
4. **No ads, no third-party analytics** (already the rule). Subscription without ads is the clean route for the Kids category.
5. **Accounts:** with no user accounts in Release 1, the "delete account" rule is satisfied by the local delete (done). A subscription does not need an account: the store identifies the buyer; restore works through the store.
6. **Screenshots/store text** must say which features need a subscription.
7. **Tracking subscribers** without analytics: use the store consoles only.

## Decisions needed from the owner
Final prices and trial length; what is free and what is paid; whether the paywall also shows a yearly "best value" option; approval of the `in_app_purchase` package; whether to start with Android (Google Play supports two carriers) before iOS.
