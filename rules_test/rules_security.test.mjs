// Tests of the security-review changes S2, S3 and S4 applied to ../firestore.rules (working tree, NOT published), on the LOCAL emulator.
import { test, before, after, beforeEach } from 'node:test';
import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

let env;
before(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-rehlaty-security',
    firestore: { rules: readFileSync('../firestore.rules', 'utf8'), host: '127.0.0.1', port: 8081 },
  });
});
after(async () => { await env.cleanup(); });
const as = (uid) => env.authenticatedContext(uid).firestore();
const admin = (fn) => env.withSecurityRulesDisabled((ctx) => fn(ctx.firestore())); // the owner in the console / a backend function
const HOUR = 3600 * 1000;

beforeEach(async () => {
  await env.clearFirestore();
  await admin(async (db) => {
    for (const [uid, role] of [['p1', 'parent'], ['p2', 'parent'], ['t1', 'teacher'], ['t2', 'teacher'], ['t3', 'teacher'], ['r1', 'relative']]) {
      await setDoc(doc(db, 'users', uid), { role, name: uid });
    }
    await setDoc(doc(db, 'teachers', 't1'), { name: 'T1', bio: 'b', subjects: ['math'], languages: ['ar'], status: 'approved' });
    await setDoc(doc(db, 'teachers', 't2'), { name: 'T2', bio: 'b', subjects: ['math'], languages: ['ar'], status: 'pending' });
  });
});

const profile = (over = {}) => ({ name: 'New', bio: 'b', subjects: ['math'], languages: ['ar'], priceNote: '', status: 'pending', ...over });

// S2 -----------------------------------------------------------------------------------------------------------------
test('S2: a new teacher profile can only be created as pending; "approved" at creation is refused', async () => {
  await assertSucceeds(setDoc(doc(as('t3'), 'teachers', 't3'), profile()));
  await admin((db) => setDoc(doc(db, 'teachers', 't3x'), { status: 'x' })); // unrelated doc, sanity for the helper
  await assertFails(setDoc(doc(as('t3'), 'teachers', 't3'), profile({ status: 'approved' })));
});

test('S2: a teacher cannot approve themselves, lift a suspension, or change the status in any way', async () => {
  await assertFails(updateDoc(doc(as('t2'), 'teachers', 't2'), { status: 'approved' })); // pending -> approved by the teacher
  await admin((db) => updateDoc(doc(db, 'teachers', 't2'), { status: 'suspended' }));
  await assertFails(updateDoc(doc(as('t2'), 'teachers', 't2'), { status: 'approved' }));
  await assertSucceeds(updateDoc(doc(as('t1'), 'teachers', 't1'), { bio: 'new bio' })); // an approved teacher edits other fields
  await assertFails(updateDoc(doc(as('t1'), 'teachers', 't1'), { status: 'pending' }));
});

test('S2: parents see approved teachers only; the owner approving makes a pending teacher visible', async () => {
  await assertSucceeds(getDoc(doc(as('p1'), 'teachers', 't1')));
  await assertFails(getDoc(doc(as('p1'), 'teachers', 't2'))); // pending: hidden from parents
  await assertSucceeds(getDoc(doc(as('t2'), 'teachers', 't2'))); // but the teacher sees their own
  await admin((db) => updateDoc(doc(db, 'teachers', 't2'), { status: 'approved' }));
  await assertSucceeds(getDoc(doc(as('p1'), 'teachers', 't2')));
});

test('S2: a pending teacher cannot publish bookable times or work samples, an approved one can', async () => {
  const slot = (t) => ({ teacherUid: t, startMs: Date.now() + 48 * HOUR, minutes: 45, status: 'open' });
  const id = (t, s) => `${t}_${s.startMs}`;
  const s2 = slot('t2'), s1 = slot('t1');
  await assertFails(setDoc(doc(as('t2'), 'slots', id('t2', s2)), s2));
  await assertSucceeds(setDoc(doc(as('t1'), 'slots', id('t1', s1)), s1));
  const work = (t) => ({ teacherUid: t, title: 'Worksheet', description: 'd', type: 'worksheet', status: 'draft' });
  await assertFails(setDoc(doc(as('t2'), 'portfolio', 'w2'), work('t2')));
  await assertSucceeds(setDoc(doc(as('t1'), 'portfolio', 'w1'), work('t1')));
});

// S3 -----------------------------------------------------------------------------------------------------------------
test('S3: a teacher CV is readable by its teacher and by parents (while approved), not by relatives, other teachers or outsiders', async () => {
  await admin(async (db) => {
    await setDoc(doc(db, 'teacherFiles', 't1'), { cvName: 'cv.pdf', cvB64: 'AAAA' });
    await setDoc(doc(db, 'teacherFiles', 't2'), { cvName: 'cv.pdf', cvB64: 'AAAA' });
  });
  await assertSucceeds(getDoc(doc(as('t1'), 'teacherFiles', 't1')));
  await assertSucceeds(getDoc(doc(as('p1'), 'teacherFiles', 't1')));
  await assertFails(getDoc(doc(as('r1'), 'teacherFiles', 't1'))); // a relative
  await assertFails(getDoc(doc(as('t3'), 'teacherFiles', 't1'))); // another teacher
  await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(), 'teacherFiles', 't1')));
  await assertFails(getDoc(doc(as('p1'), 'teacherFiles', 't2'))); // the teacher is still pending
  await assertSucceeds(getDoc(doc(as('t2'), 'teacherFiles', 't2'))); // the owner of the file always can
});

// S4 -----------------------------------------------------------------------------------------------------------------
test('S4: booking messages cannot carry links or addresses, from either side; plain text still works', async () => {
  await admin((db) => setDoc(doc(db, 'bookings', 'b1'), { parentUid: 'p1', teacherUid: 't1', status: 'accepted', lessonLink: 'https://meet.example/x' }));
  const m = (uid, text) => ({ senderUid: uid, text, createdAt: serverTimestamp() });
  const ref = (db, id) => doc(db, 'bookings', 'b1', 'messages', id);
  await assertSucceeds(setDoc(ref(as('p1'), 'ok1'), m('p1', 'Is Tuesday at five fine?')));
  await assertSucceeds(setDoc(ref(as('t1'), 'ok2'), m('t1', 'Yes, see you then.')));
  let i = 0;
  for (const bad of ['see https://evil.example', 'http://x', 'WWW.evil', 'a.com', 'x.NET', 'y.org', 'me@mail', 'go to ://a', 'wa.me/123@x']) {
    await assertFails(setDoc(ref(as('t1'), `bad${i++}`), m('t1', bad)));
    await assertFails(setDoc(ref(as('p1'), `bad${i++}`), m('p1', bad)));
  }
  // an outsider still cannot write, and the lesson link on the booking itself is unchanged behaviour (https only, set by the teacher)
  await assertFails(setDoc(ref(as('t2'), 'out'), m('t2', 'hello')));
});
