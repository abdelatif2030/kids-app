---
name: owasp-secure-coding
description: Use when writing or changing code that handles user input, authentication, secrets, storage, networking, permissions, or personal data, or when asked about OWASP risks. Gives a secure-coding workflow and checklist with Flutter, Dart and Firebase guidance. Complements the built-in security-review, which reviews pending changes.
---

# Secure coding (OWASP)

Use while writing code. For reviewing a finished change, use the built-in `security-review`.

## Workflow
1. Name the assets (what an attacker wants: accounts, children's data, messages, keys) and the trust boundaries (device, server, third party).
2. For each input that crosses a boundary: validate, bound its size, and treat it as data, never as code or a path or a query.
3. Decide who may do the action, and enforce it on the server side (rules/back end), not only in the UI.
4. Collect the minimum data; store it the least risky way; keep it for the shortest time.
5. Fail closed with a generic user message; log the detail without personal data or secrets.
6. Write a test that a malicious input is refused.

## OWASP Top 10 in one line each
- Broken access control: check ownership and role on every read and write (server side).
- Cryptographic failures: no home-made crypto; TLS only; hash passwords/PINs with a salt and a slow or at least salted hash; never log secrets.
- Injection: parameterize queries; never build queries, shell commands or HTML from input.
- Insecure design: threat-model new features; deny by default.
- Security misconfiguration: no debug flags, test keys or open rules in production builds.
- Vulnerable components: add a package only with a reason; keep versions pinned; read its permissions.
- Identification and authentication failures: rate-limit and lock out guessing; no secrets in code.
- Integrity failures: verify what you load (updates, links, files).
- Logging and monitoring failures: log security events, not personal data.
- SSRF and unsafe fetches: allow-list hosts; never fetch a URL chosen by a user.

## Flutter and Dart specifics
- Secrets: never in source, assets or `--dart-define` of a public build. Anything shipped in the app can be read. Keep keys on a server.
- Storage: `shared_preferences` is plain text; use `flutter_secure_storage` for secrets and PIN hashes. Do not store tokens or personal data in logs, analytics or crash reports.
- Platform: Android `allowBackup="false"` for private data; request only the permissions a feature needs, at the moment of use, and explain refusals; no broad storage permission (use the system picker).
- WebViews and links: do not open arbitrary URLs; allow-list `https` hosts; never `launchUrl` with user-supplied text without validation. Child-facing apps: no external links.
- Input: constrain length, character set and counts; reject links and e-mails where they must not appear; never `jsonDecode` untrusted data without a try/catch and type checks.
- Firebase/Firestore: rules are the security. Deny by default; check `request.auth.uid`, roles and field lists (`keys().hasOnly`); bound string sizes; make records create-only when they must not change; test rules with the emulator. Never rely on client checks.
- Children's data (COPPA/GDPR-K minded): collect the minimum, no tracking or ads SDKs, parent consent for photos or messages, easy delete.

## When to read more
- A feature touching auth, storage, rules or personal data: `references/checklist.md`.
