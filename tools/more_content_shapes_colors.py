# -*- coding: utf-8 -*-
# One-off edit script (2026-11-18): 5 more shapes (25 in all) and 9 more colours (34 in all). Kept for the record.
import io


def edit(p, pairs):
    s = io.open(p, encoding='utf8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (p, a[:70], s.count(a))
        s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8', newline='\n').write(s)


edit('game_src/learn_games/src/kit/shapes3d.js', [
    ("  else if (kind === 'triangle') {",
     """  else if (kind === 'semicircle') { s.absarc(0, -0.3, 0.85, 0, Math.PI, false); s.closePath(); }
  else if (kind === 'trapezoid') { s.moveTo(-0.9, -0.5); s.lineTo(0.9, -0.5); s.lineTo(0.5, 0.5); s.lineTo(-0.5, 0.5); s.closePath(); }
  else if (kind === 'parallelogram') { s.moveTo(-0.9, -0.5); s.lineTo(0.5, -0.5); s.lineTo(0.9, 0.5); s.lineTo(-0.5, 0.5); s.closePath(); }
  else if (kind === 'hexagram') { for (let i = 0; i < 12; i++) { const a = Math.PI / 2 + (i * Math.PI) / 6, r = i % 2 ? 0.5 : 0.95; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) s.lineTo(x, y); else s.moveTo(x, y); } s.closePath(); }
  else if (kind === 'drop') { s.moveTo(0, 0.95); s.bezierCurveTo(0.2, 0.5, 0.75, 0.1, 0.75, -0.3); s.bezierCurveTo(0.75, -0.75, 0.4, -0.95, 0, -0.95); s.bezierCurveTo(-0.4, -0.95, -0.75, -0.75, -0.75, -0.3); s.bezierCurveTo(-0.75, 0.1, -0.2, 0.5, 0, 0.95); }
  else if (kind === 'triangle') {"""),
])
edit('game_src/learn_games/src/letters/shapes_all.js', [
    ("  { id: 'plus', the: 'علامة الجمع', ar: 'علامة جمع', fem: true, tier: 'C', render: 'code' },",
     """  { id: 'plus', the: 'علامة الجمع', ar: 'علامة جمع', fem: true, tier: 'C', render: 'code' },
  { id: 'semicircle', the: 'نص الدايرة', ar: 'نص دايرة', fem: false, tier: 'C', render: 'code' },
  { id: 'trapezoid', the: 'شبه المنحرف', ar: 'شبه منحرف', fem: false, tier: 'C', render: 'code', sides: 4 },
  { id: 'parallelogram', the: 'متوازي الأضلاع', ar: 'متوازي أضلاع', fem: false, tier: 'C', render: 'code', sides: 4 },
  { id: 'hexagram', the: 'النجمة السداسية', ar: 'نجمة سداسية', fem: true, tier: 'C', render: 'code' },
  { id: 'drop', the: 'القطرة', ar: 'قطرة', fem: true, tier: 'C', render: 'code' },"""),
])
edit('tools/game_voice/tashkeel_shapes.py', [
    ("'المكعب': 'المُكَعَّب',", "'المكعب': 'المُكَعَّب', 'نص الدايرة': 'نُصّ الدَّايْرَة', 'شبه المنحرف': 'شِبْه المُنْحَرِف', 'متوازي الأضلاع': 'مُتَوَازِي الأَضْلَاع', 'النجمة السداسية': 'النَّجْمَة السُّدَاسِيَّة', 'القطرة': 'القَطْرَة',"),
    ("'مكعب': 'مُكَعَّب',", "'مكعب': 'مُكَعَّب', 'نص دايرة': 'نُصّ دَايْرَة', 'شبه منحرف': 'شِبْه مُنْحَرِف', 'متوازي أضلاع': 'مُتَوَازِي أَضْلَاع', 'نجمة سداسية': 'نَجْمَة سُدَاسِيَّة', 'قطرة': 'قَطْرَة',"),
    ("          ('الأسطوانة', 'أسطوانة', True), ('الهرم', 'هرم', False)]",
     "          ('الأسطوانة', 'أسطوانة', True), ('الهرم', 'هرم', False), ('نص الدايرة', 'نص دايرة', False), ('شبه المنحرف', 'شبه منحرف', False),\n          ('متوازي الأضلاع', 'متوازي أضلاع', False), ('النجمة السداسية', 'نجمة سداسية', True), ('القطرة', 'قطرة', True)]"),
    ("COLORABLE = {'الدايرة', 'المربع', 'المثلث', 'النجمة', 'القلب', 'المثمن', 'الهلال', 'علامة الجمع', 'الهرم'}",
     "COLORABLE = {'الدايرة', 'المربع', 'المثلث', 'النجمة', 'القلب', 'المثمن', 'الهلال', 'علامة الجمع', 'الهرم', 'نص الدايرة', 'شبه المنحرف', 'متوازي الأضلاع', 'النجمة السداسية', 'القطرة'}"),
])
edit('game_src/learn_games/src/letters/colors.js', [
    ("  { id: 'mustard', the: 'الخردلي', name: 'خردلي', hex: 0xd8a820, tier: 'C', family: 'yellow' },",
     """  { id: 'mustard', the: 'الخردلي', name: 'خردلي', hex: 0xd8a820, tier: 'C', family: 'yellow' },
  { id: 'magenta', the: 'الفوشيا', name: 'فوشيا', hex: 0xd81b8a, tier: 'C', family: 'pink' },
  { id: 'indigo', the: 'النيلي', name: 'نيلي', hex: 0x3a2a9a, tier: 'C', family: 'blue' },
  { id: 'crimson', the: 'القرمزي', name: 'قرمزي', hex: 0xb01030, tier: 'C', family: 'red' },
  { id: 'bronze', the: 'البرونزي', name: 'برونزي', hex: 0xb07a3a, tier: 'C', family: 'brown', metal: 0.7 },
  { id: 'caramel', the: 'الكراميل', name: 'كراميل', hex: 0xc88a3a, tier: 'C', family: 'brown' },
  { id: 'charcoal', the: 'الرصاصي', name: 'رصاصي', hex: 0x4a4a54, tier: 'C', family: 'gray' },
  { id: 'mint', the: 'النعناعي', name: 'نعناعي', hex: 0x90e8b0, tier: 'C', family: 'green' },
  { id: 'coral', the: 'المرجاني', name: 'مرجاني', hex: 0xff7060, tier: 'C', family: 'orange' },
  { id: 'sand', the: 'الرملي', name: 'رملي', hex: 0xe0c890, tier: 'C', family: 'white' },"""),
])
edit('tools/game_voice/tashkeel_colors.py', [
    ("'الليموني': 'اللِّيمُونِي',", "'الليموني': 'اللِّيمُونِي', 'الفوشيا': 'الفُوشِيَا', 'النيلي': 'النِّيلِي', 'القرمزي': 'القِرْمِزِي', 'البرونزي': 'البُرُونْزِي', 'الكراميل': 'الكَرَامِيل', 'الرصاصي': 'الرَّصَاصِي', 'النعناعي': 'النَّعْنَاعِي', 'المرجاني': 'المَرْجَانِي', 'الرملي': 'الرَّمْلِي',"),
])
print('ok')
