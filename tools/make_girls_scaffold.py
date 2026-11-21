"""python tools/make_girls_scaffold.py <id> <Global> <ar title> <bg color>  -> assets/games/<id>/{index.html,boot.js,art/} (the girls games share this page)."""
import os, sys
gid, glob, ar, bg = sys.argv[1:5]
d = f'C:/dev/rehlaty/assets/games/{gid}'
os.makedirs(d + '/art', exist_ok=True)
open(d + '/index.html', 'w', encoding='utf8').write(f'''<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<title>{ar}</title>
<style>html,body{{margin:0;height:100%;background:{bg};overflow:hidden;overscroll-behavior:none}}#game{{position:fixed;inset:0}}</style>
</head>
<body>
<div id="game"></div>
<script src="game.js"></script>
<script src="boot.js"></script>
</body>
</html>
''')
open(d + '/boot.js', 'w', encoding='utf8').write(f'''// Boot for the app's built-in browser view (Android/iOS). The app calls window.crStart(config) when the page is
// ready and listens on the "RehlatyRace" channel. Opened on its own (for checking in a browser) it starts by itself.
(function () {{
  var game = null;
  function post(msg) {{
    var s = JSON.stringify(msg);
    if (window.RehlatyRace && window.RehlatyRace.postMessage) window.RehlatyRace.postMessage(s);
    else if (window.console) console.log('[girls]', s);
  }}
  window.crStart = function (config) {{
    if (game) game.dispose();
    config = config || {{}};
    config.base = config.base || './';
    game = window.{glob}.start(document.getElementById('game'), config, post);
  }};
  window.crPause = function () {{ if (game) game.pause(); }};
  window.crStop = function () {{ if (game) game.dispose(); game = null; }};
  if (!window.RehlatyRace) {{
    var q = new URLSearchParams(location.search);
    window.crStart({{ lang: q.get('lang') || 'ar', age: Number(q.get('age') || 3), gender: 'girl', save: null }});
  }} else {{
    post({{ type: 'loaded' }});
  }}
}})();
''')
print('scaffold', gid)
