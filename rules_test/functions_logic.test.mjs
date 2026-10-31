// Tests of the DRAFT backend logic (../functions/src) on the LOCAL Firestore emulator. Nothing is deployed; no real project is used.
import { test, before, after, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc, getDocs, collection, collectionGroup, query, where, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';

const require = createRequire(import.meta.url);
const { deleteAccountData } = require('../functions/src/deletion.js');
const { purgeExpired } = require('../functions/src/retention.js');

let env;
before(async () => {
  env = await initializeTestEnvironment({ projectId: 'demo-rehlaty-functions', firestore: { rules: 'service cloud.firestore { match /databases/{d}/documents { match /{x=**} { allow read, write: if false; } } }', host: '127.0.0.1', port: 8081 } });
});
after(async () => { await env.cleanup(); });
beforeEach(async () => { await env.clearFirestore(); });

// the storage interface of the functions, over the web SDK with security rules disabled (what the Admin SDK does in production)
const withStore = async (fn) => { let out; await env.withSecurityRulesDisabled(async (ctx) => {
  const db = ctx.firestore();
  const mapDocs = (snap) => snap.docs.map((d) => ({ path: d.ref.path, data: d.data() }));
  const store = {
    get: async (p) => { const s = await getDoc(doc(db, p)); return s.exists() ? s.data() : null; },
    list: async (p) => mapDocs(await getDocs(collection(db, p))),
    listWhere: async (c, f, v) => mapDocs(await getDocs(query(collection(db, c), where(f, '==', v)))),
    listGroup: async (id) => mapDocs(await getDocs(collectionGroup(db, id))),
    update: (p, patch) => updateDoc(doc(db, p), patch),
    remove: (p) => deleteDoc(doc(db, p)),
  };
  out = await fn(store, db);
}); return out; };
const exists = async (db, p) => (await getDoc(doc(db, p))).exists();
const get = async (db, p) => (await getDoc(doc(db, p))).data();

async function seed() {
  await withStore(async (_s, db) => {
    const put = (p, d) => setDoc(doc(db, p), d);
    for (const [u, role, extra] of [['p1', 'parent', {}], ['p2', 'parent', {}], ['t1', 'teacher', {}], ['t2', 'teacher', {}], ['r1', 'relative', { username: 'nana' }], ['r2', 'relative', { username: 'uncle' }]]) {
      await put(`users/${u}`, { role, name: u, ...extra });
    }
    await put('usernames/nana', { uid: 'r1', displayName: 'Nana' });
    await put('usernames/uncle', { uid: 'r2', displayName: 'Uncle' });
    for (const [fid, rel] of [['p1', 'r1'], ['p2', 'r2']]) {
      await put(`families/${fid}/relatives/${rel}`, { name: 'R', status: 'active', children: { c1: 'L' } });
      await put(`families/${fid}/messages/m1`, { relUid: rel, kind: 'phrase', body: 'p_love' });
      await put(`families/${fid}/voices/v1`, { relUid: rel, data: 'AAAA', at: Timestamp.now() });
      await put(`families/${fid}/calls/k1`, { relUid: rel, status: 'ended', createdAt: Timestamp.now() });
      await put(`families/${fid}/calls/k1/candidates/c1`, { from: 'parent', data: '{}' });
      await put(`users/${rel}/families/${fid}`, { parentName: fid });
      await put(`connectRequests/q_${fid}`, { familyId: fid, toUid: rel, status: 'accepted' });
    }
    // a second relative in family p1, who must keep their thread when r1 leaves
    await put('families/p1/relatives/r3', { name: 'R3', status: 'active', children: { c1: 'L' } });
    await put('families/p1/messages/m3', { relUid: 'r3', kind: 'phrase', body: 'p_hi' });
    // marketplace
    await put('teachers/t1', { name: 'T1', status: 'approved' });
    await put('teachers/t2', { name: 'T2', status: 'approved' });
    await put('teacherFiles/t1', { cvName: 'cv', cvB64: 'AA' });
    await put('teacherFiles/t2', { cvName: 'cv', cvB64: 'AA' });
    await put('portfolio/w1', { teacherUid: 't1', title: 'W', type: 'worksheet', status: 'published' });
    await put('portfolio/w2', { teacherUid: 't2', title: 'W', type: 'worksheet', status: 'published' });
    await put('slots/s1', { teacherUid: 't1', startMs: 1, minutes: 45, status: 'booked', bookingId: 'b1' });
    await put('slots/s2', { teacherUid: 't1', startMs: 2, minutes: 45, status: 'open' });
    await put('slots/s3', { teacherUid: 't2', startMs: 3, minutes: 45, status: 'open' });
    await put('bookings/b1', { parentUid: 'p1', teacherUid: 't1', parentName: 'Sara', teacherName: 'T1', note: 'my note', status: 'accepted', slotId: 's1', lessonLink: 'https://x.y/z' });
    await put('bookings/b1/messages/bm1', { senderUid: 'p1', text: 'hello' });
    await put('bookings/b2', { parentUid: 'p2', teacherUid: 't1', parentName: 'Mona', teacherName: 'T1', note: '', status: 'completed' });
    await put('bookings/b3', { parentUid: 'p2', teacherUid: 't2', parentName: 'Mona', teacherName: 'T2', note: '', status: 'requested' });
    await put('reviews/b2', { bookingId: 'b2', teacherUid: 't1', parentUid: 'p2', rating: 5, text: 'good' });
    await put('reviews/b1', { bookingId: 'b1', teacherUid: 't1', parentUid: 'p1', rating: 4, text: 'ok' });
    await put('lessonReports/b2', { teacherUid: 't1', parentUid: 'p2', covered: 'x' });
    await put('requests/rq1', { parentUid: 'p1', goal: 'math', status: 'open' });
    await put('requests/rq2', { parentUid: 'p2', goal: 'math', status: 'open' });
    await put('proposals/rq1_t1', { requestId: 'rq1', parentUid: 'p1', teacherUid: 't1', status: 'sent' });
    await put('proposals/rq2_t2', { requestId: 'rq2', parentUid: 'p2', teacherUid: 't2', status: 'sent' });
    await put('reports/rep1', { teacherUid: 't2', reporterUid: 'p1', reason: 'x' });
  });
}

test('deleting a parent removes the family tree and their requests, anonymises shared history and leaves everyone else untouched', async () => {
  await seed();
  const out = await withStore((s) => deleteAccountData(s, 'p1'));
  assert.equal(out.role, 'parent');
  await withStore(async (_s, db) => {
    for (const p of ['users/p1', 'families/p1/relatives/r1', 'families/p1/relatives/r3', 'families/p1/messages/m1', 'families/p1/messages/m3', 'families/p1/voices/v1', 'families/p1/calls/k1', 'families/p1/calls/k1/candidates/c1', 'connectRequests/q_p1', 'requests/rq1', 'proposals/rq1_t1', 'bookings/b1/messages/bm1']) {
      assert.equal(await exists(db, p), false, `${p} should be gone`);
    }
    const b1 = await get(db, 'bookings/b1');
    assert.deepEqual([b1.status, b1.parentUid, b1.parentName, b1.note, b1.lessonLink], ['cancelled', 'deleted', 'Deleted account', '', null]);
    assert.equal((await get(db, 'slots/s1')).status, 'open'); // the slot is free again
    assert.equal((await get(db, 'reviews/b1')).parentUid, 'deleted');
    assert.equal((await get(db, 'reports/rep1')).reporterUid, 'deleted');
    // other people's data is intact
    for (const p of ['users/p2', 'users/r1', 'users/t1', 'families/p2/messages/m1', 'families/p2/voices/v1', 'families/p2/relatives/r2', 'requests/rq2', 'proposals/rq2_t2', 'bookings/b2', 'bookings/b3', 'reviews/b2', 'lessonReports/b2', 'teachers/t1', 'usernames/nana']) {
      assert.equal(await exists(db, p), true, `${p} must remain`);
    }
    assert.equal((await get(db, 'bookings/b2')).parentUid, 'p2');
  });
  const again = await withStore((s) => deleteAccountData(s, 'p1')); // safe to retry
  assert.deepEqual(again, { role: null, counts: {} });
});

test('deleting a relative ends their access and removes their own thread, but not the family or other relatives', async () => {
  await seed();
  await withStore((s) => deleteAccountData(s, 'r1'));
  await withStore(async (_s, db) => {
    for (const p of ['users/r1', 'usernames/nana', 'users/r1/families/p1', 'families/p1/relatives/r1', 'families/p1/messages/m1', 'families/p1/voices/v1', 'families/p1/calls/k1', 'families/p1/calls/k1/candidates/c1', 'connectRequests/q_p1']) {
      assert.equal(await exists(db, p), false, `${p} should be gone`);
    }
    for (const p of ['users/p1', 'families/p1/relatives/r3', 'families/p1/messages/m3', 'families/p2/messages/m1', 'usernames/uncle', 'users/r2', 'connectRequests/q_p2']) {
      assert.equal(await exists(db, p), true, `${p} must remain`);
    }
  });
});

test('deleting a teacher removes the profile, CV, work samples, times and proposals, cancels and anonymises bookings, and leaves other teachers alone', async () => {
  await seed();
  await withStore((s) => deleteAccountData(s, 't1'));
  await withStore(async (_s, db) => {
    for (const p of ['users/t1', 'teachers/t1', 'teacherFiles/t1', 'portfolio/w1', 'slots/s2', 'proposals/rq1_t1', 'reviews/b2', 'reviews/b1', 'lessonReports/b2']) {
      assert.equal(await exists(db, p), false, `${p} should be gone`);
    }
    const b1 = await get(db, 'bookings/b1'), b2 = await get(db, 'bookings/b2');
    assert.deepEqual([b1.status, b1.teacherUid, b1.teacherName], ['cancelled', 'deleted', 'Deleted account']);
    assert.deepEqual([b2.status, b2.teacherUid], ['completed', 'deleted']); // history is kept, anonymised
    for (const p of ['users/t2', 'teachers/t2', 'teacherFiles/t2', 'portfolio/w2', 'slots/s3', 'proposals/rq2_t2', 'bookings/b3', 'users/p1', 'users/p2']) {
      assert.equal(await exists(db, p), true, `${p} must remain`);
    }
    assert.equal((await get(db, 'bookings/b3')).teacherUid, 't2');
  });
});

test('an unknown account does not throw and deletes nothing else; a missing uid is refused', async () => {
  await seed();
  assert.deepEqual(await withStore((s) => deleteAccountData(s, 'nobody')), { role: null, counts: {} });
  await withStore(async (_s, db) => { assert.equal(await exists(db, 'users/p1'), true); });
  await assert.rejects(() => withStore((s) => deleteAccountData(s, '')), /uid required/);
  await assert.rejects(() => withStore((s) => deleteAccountData(s, undefined)), /uid required/);
});

test('retention: voice older than 14 days and calls older than 24 hours go (with their candidates); newer and undated records stay', async () => {
  const now = Date.now();
  const at = (ms) => Timestamp.fromMillis(now - ms);
  const H = 3600 * 1000, D = 24 * H;
  await withStore(async (_s, db) => {
    const put = (p, d) => setDoc(doc(db, p), d);
    await put('families/p1/voices/old', { relUid: 'r1', at: at(15 * D) });
    await put('families/p1/voices/edge', { relUid: 'r1', at: at(13 * D) });
    await put('families/p2/voices/old2', { relUid: 'r2', at: at(30 * D) });
    await put('families/p1/voices/undated', { relUid: 'r1' });
    await put('families/p1/calls/oldcall', { relUid: 'r1', createdAt: at(25 * H) });
    await put('families/p1/calls/oldcall/candidates/c1', { from: 'parent', data: '{}' });
    await put('families/p1/calls/newcall', { relUid: 'r1', createdAt: at(2 * H) });
    await put('families/p1/calls/newcall/candidates/c1', { from: 'parent', data: '{}' });
    await put('families/p1/messages/m1', { relUid: 'r1', body: 'p_love' }); // messages are not touched by retention
  });
  const counts = await withStore((s) => purgeExpired(s, now));
  assert.deepEqual(counts, { voices: 2, calls: 1, candidates: 1 });
  await withStore(async (_s, db) => {
    for (const p of ['families/p1/voices/old', 'families/p2/voices/old2', 'families/p1/calls/oldcall', 'families/p1/calls/oldcall/candidates/c1']) assert.equal(await exists(db, p), false, p);
    for (const p of ['families/p1/voices/edge', 'families/p1/voices/undated', 'families/p1/calls/newcall', 'families/p1/calls/newcall/candidates/c1', 'families/p1/messages/m1']) assert.equal(await exists(db, p), true, p);
  });
  assert.deepEqual(await withStore((s) => purgeExpired(s, now)), { voices: 0, calls: 0, candidates: 0 }); // idempotent
});
