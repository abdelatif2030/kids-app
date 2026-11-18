# Smoke test for every web game (2026-11-19)
Serve assets/games (python -m http.server 8099 in assets/games), put the list of [folder, global] pairs from lib/games/web_games/web_game.dart in /_all.json,
open any page of that server and run in the console: each game is loaded in a hidden iframe for 2.8 s; a game passes when window[global] exists, its DOM is
rendered (>400 chars) and no script error fired. Result of 2026-11-19: 52 of 52 web games passed.
```js
window.__out = []; (async () => { const list = await (await fetch('/_all.json')).json(); for (const [folder, glob] of list) { const res = await new Promise((resolve) => { const f = document.createElement('iframe'); f.style.cssText = 'position:fixed;left:0;top:0;width:390px;height:700px;border:0;opacity:0'; const errs = []; f.onload = () => { try { f.contentWindow.addEventListener('error', (e) => errs.push(String(e.message))); } catch (_) {} }; f.src = `/${folder}/index.html`; document.body.append(f); setTimeout(() => { let ok = false, root = false; try { ok = !!f.contentWindow[glob]; root = f.contentDocument.body.innerHTML.length > 400; } catch (e) { errs.push(String(e)); } f.remove(); resolve({ folder, glob, ok, root, errs }); }, 2800); }); window.__out.push(res); } })();
// then: window.__out.filter(r => !r.ok || !r.root || r.errs.length)
```
