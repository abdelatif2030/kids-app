import test from 'node:test';
import assert from 'node:assert/strict';
import { Party, normalizeBag, addItem, sizeFor, FRIENDS } from '../src/party/main.js';

test('damaged bags become empty bags; items from the levels are added with limits', () => {
  assert.deepEqual(normalizeBag(null).flowers, [0, 0, 0, 0, 0, 0]);
  const b = normalizeBag({ flowers: [1, -3, 'x', 200, 0, 2], cupcakes: 5, friends: { kitten: 2, ghost: 9 } });
  assert.deepEqual(b.flowers, [1, 0, 0, 99, 0, 2]); assert.equal(b.friends.kitten, 2); assert.equal(b.friends.ghost, undefined);
  addItem(b, { kind: 'flower', color: 1 }); addItem(b, { kind: 'cupcake' }); addItem(b, { kind: 'friend', char: 'bunny' }); addItem(b, { kind: 'look' }); addItem(b, { kind: 'hairdo' }); addItem(b, { kind: 'flower', color: 9 });
  assert.equal(b.flowers[1], 1); assert.equal(b.cupcakes, 6); assert.equal(b.friends.bunny, 1); assert.equal(b.looks, 1); assert.equal(b.hairdos, 1);
});

test('the party grows: 3/3/2 at first, up to 6/6/4', () => {
  assert.deepEqual(sizeFor(0), { vases: 3, plates: 3, guests: 2, show: 1 });
  const big = sizeFor(9); assert.equal(big.vases, 6); assert.equal(big.plates, 6); assert.equal(big.guests, 4);
});

test('a robot fills every place from a full bag, the party starts only when everything is full, and the next party is bigger', () => {
  const bag = normalizeBag({ flowers: [9, 9, 9, 9, 9, 9], cupcakes: 30, looks: 5, hairdos: 5, friends: { baby: 9, kitten: 9, bunny: 9, puppy: 9 }, parties: 0 });
  for (let round = 0; round < 4; round++) {
    const p = new Party(bag);
    assert.equal(p.ready, false); assert.equal(p.throwParty(), false);
    while (p.vases.length < p.size.vases) assert.equal(p.placeFlower(p.vases.length % 6), true);
    assert.equal(p.placeFlower(0), false); // the vases are full
    while (p.plates < p.size.plates) assert.equal(p.placeCupcake(), true);
    assert.equal(p.placeCupcake(), false);
    for (const f of FRIENDS.slice(0, p.size.guests)) assert.equal(p.invite(f), true);
    assert.equal(p.invite('baby'), false); // a friend comes once per party
    assert.equal(p.ready, false); assert.equal(p.showLook(), true); assert.equal(p.showLook(), false); assert.equal(p.ready, false);
    assert.equal(p.doHair(), true); assert.equal(p.ready, true);
    assert.equal(p.throwParty(), true); assert.equal(bag.parties, round + 1);
  }
});

test('an empty bag cannot fill anything and the party says which level makes what is missing', () => {
  const p = new Party(normalizeBag(null));
  assert.equal(p.placeFlower(0), false); assert.equal(p.placeCupcake(), false); assert.equal(p.invite('baby'), false); assert.equal(p.showLook(), false); assert.equal(p.doHair(), false);
  assert.deepEqual(p.missing().sort(), ['cupcake', 'dress', 'garden', 'pet', 'salon']);
});
