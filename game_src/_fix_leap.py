p = 'C:/dev/rehlaty/game_src/learn_games/src/letters/main.js'
s = open(p, encoding='utf8').read()
a = "      const slotPos = new THREE.Vector3(L.slot.x, L.slot.y - 0.2, L.slot.z);\n"
assert a in s
s = s.replace(a, a + "      // numbers, letters and plaques must never spin while they hop (owner 2026-11-20: the number turned edge-on and could not be read)\n      const noSpin = L.o.o && (L.o.o.kind === 'number' || L.o.o.kind === 'letter' || L.o.o.plaque);\n", 1)
s = s.replace("L.o.g.rotation.y = ee * Math.PI;", "L.o.g.rotation.y = noSpin ? 0 : ee * Math.PI;", 1)
s = s.replace("L.o.g.rotation.y = Math.PI + ee * Math.PI;", "L.o.g.rotation.y = noSpin ? 0 : Math.PI + ee * Math.PI;", 1)
s = s.replace("L.o.g.rotation.y = e * Math.PI * 2;", "L.o.g.rotation.y = noSpin ? 0 : e * Math.PI * 2;", 1)
open(p, 'w', encoding='utf8').write(s)
print('ok', 'noSpin' in s)
