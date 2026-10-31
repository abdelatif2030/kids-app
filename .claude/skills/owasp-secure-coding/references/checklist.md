# Secure coding checklist

## Input and output
- [ ] Every external input has a type check, a length limit and an allowed-characters rule.
- [ ] Parsing (JSON, URLs, files) is in try/catch and returns a safe default on failure.
- [ ] User text is never used as a path, command, query or markup.
- [ ] Error messages shown to users do not reveal internals.

## Authentication and sessions
- [ ] Guessable secrets (PINs) are salted-hashed, rate-limited and locked out after repeated failures.
- [ ] Sensitive screens re-check the user (parent gate) before acting.
- [ ] Sign-out clears tokens and cached private data.

## Authorization
- [ ] Every Firestore/back-end read and write is checked by rules against `request.auth` and the record's owner or role.
- [ ] Rules list the exact allowed fields and sizes; unknown fields are refused.
- [ ] A user cannot grant themselves a role or approval.
- [ ] No listing or search that lets one user enumerate others (read by exact id only).

## Data protection
- [ ] No secrets, tokens or keys in source, assets, logs or build flags of a public build.
- [ ] Secrets in secure storage; private data excluded from device backups.
- [ ] Only the permissions in use are declared; each is requested when needed.
- [ ] Personal data is minimized, has a retention limit, and can be deleted.

## Dependencies and build
- [ ] New package: needed? maintained? permissions? licence? Version pinned?
- [ ] No debug banners, test rules or sample keys in release.
- [ ] Network traffic is HTTPS only.

## Testing
- [ ] A test proves an invalid or hostile input is refused.
- [ ] Rules tests cover: allowed actor, other user, signed-out, wrong field, oversize value.
