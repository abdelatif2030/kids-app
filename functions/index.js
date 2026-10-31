'use strict';
// DRAFT Cloud Functions entry point. NOT DEPLOYED, and the Admin-SDK adapter below has NOT been run against a real project
// (only src/deletion.js and src/retention.js are tested, on the local Firestore emulator). Needs the Blaze plan.
// Deploy only after reading docs/FIREBASE_BACKEND_SETUP_GUIDE.md and approving it yourself.
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const admin = require('firebase-admin');
const { deleteAccountData } = require('./src/deletion');
const { purgeExpired } = require('./src/retention');

admin.initializeApp();
const db = admin.firestore();

const store = {
  async get(path) { const s = await db.doc(path).get(); return s.exists ? s.data() : null; },
  async list(path) { const q = await db.collection(path).get(); return q.docs.map((d) => ({ path: d.ref.path, data: d.data() })); },
  async listWhere(col, field, val) { const q = await db.collection(col).where(field, '==', val).get(); return q.docs.map((d) => ({ path: d.ref.path, data: d.data() })); },
  async listGroup(id) { const q = await db.collectionGroup(id).get(); return q.docs.map((d) => ({ path: d.ref.path, data: d.data() })); },
  async update(path, patch) { await db.doc(path).update(patch); },
  async remove(path) { await db.doc(path).delete(); },
};

// Callable: the signed-in person deletes their own account. The caller must have signed in within the last 5 minutes.
exports.deleteMyAccount = onCall({ enforceAppCheck: true }, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Sign in first.');
  const authTime = request.auth.token.auth_time || 0;
  if (Date.now() / 1000 - authTime > 300) throw new HttpsError('failed-precondition', 'Please sign in again, then delete the account.');
  const uid = request.auth.uid;
  const result = await deleteAccountData(store, uid);
  await admin.auth().deleteUser(uid);
  return { ok: true, role: result.role };
});

// Scheduled: every hour, remove voice recordings older than 14 days and call records older than 24 hours.
exports.purgeFamilyData = onSchedule('every 60 minutes', async () => { await purgeExpired(store, Date.now()); });
