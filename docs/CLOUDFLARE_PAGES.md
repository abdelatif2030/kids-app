# Free hosting of the web demo on Cloudflare Pages

Cloudflare Pages is a free static host (free plan: unlimited bandwidth for static files, HTTPS included, 20,000 files and
25 MiB per file per site; the demo has 84 files and its biggest file is 6.9 MB). The demo is a static Flutter web build, so
there is no server to run. Nothing here changes the app or turns on any online feature.

## What you deploy
The folder `build/web` produced by:
```powershell
flutter build web --release --no-web-resources-cdn --dart-define=DEMO=true
```
`--dart-define=DEMO=true` turns on the demo entry (the short child form, the demo notice, the erase button, parent-approval-only
videos). `--no-web-resources-cdn` bundles CanvasKit so the page does not load it from a third-party CDN. The file
`web/_headers` is copied into the build and Cloudflare reads it: it sets the Content Security Policy and the other security headers.

## Way A (easiest): upload the folder or the zip in the dashboard, no command line
1. Sign in at https://dash.cloudflare.com (a free account is enough).
2. **Workers & Pages → Create → Pages → Upload assets**.
3. Project name: `rehlaty-demo` (this becomes `https://rehlaty-demo.pages.dev`). Create the project.
4. Drag the **contents of `build/web`** (or `rehlaty-demo-web.zip`) into the box. `index.html` and `_headers` must be at the top level.
5. **Deploy site**. When it finishes open `https://rehlaty-demo.pages.dev`.
To update later: open the project → **Create new deployment** → upload again.

## Way B: the command line (`wrangler`), good for repeating the deployment
```powershell
npm install -g wrangler
wrangler login
flutter build web --release --no-web-resources-cdn --dart-define=DEMO=true
wrangler pages project create rehlaty-demo --production-branch main
wrangler pages deploy build\web --project-name rehlaty-demo --branch main
```
(After the first time, only the last two lines of work are needed: build, then `wrangler pages deploy`.)

## Way C: automatic deployment from GitHub with GitHub Actions (optional, later)
Cloudflare's own build machines do not have Flutter, so build in GitHub and upload the result. Needs two GitHub secrets
(`CLOUDFLARE_API_TOKEN` with "Cloudflare Pages: Edit", and `CLOUDFLARE_ACCOUNT_ID`). Example file, to be added by the owner as
`.github/workflows/pages.yml` (it is NOT in the repository on purpose, so nothing deploys by accident):
```yaml
name: Deploy demo to Cloudflare Pages
on: { push: { branches: [main] } }
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with: { channel: stable }
      - run: flutter pub get
      - run: flutter build web --release --no-web-resources-cdn --dart-define=DEMO=true
      - run: npx wrangler pages deploy build/web --project-name rehlaty-demo --branch main
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```
Match the Flutter version to the one the project uses (`flutter --version` on your machine) if the build complains.

## After the first deployment: check these
1. The page opens in Arabic. Create a child, play a game, **refresh**, close the browser and open the same address again: the child is still there.
2. In the browser's developer tools → Network, click the main page and look at the response headers: `Content-Security-Policy`, `Referrer-Policy: no-referrer`, `Permissions-Policy` must be present (this proves `_headers` was uploaded).
3. Parent area (gear → grown-up question → create a PIN) → "Lesson library": a child sees no video until you approve one.
4. In Cloudflare keep **Web Analytics OFF** (the demo promises no tracking).

## Things to know
* **Use the production address** (`https://rehlaty-demo.pages.dev`) for visitors. Every upload also gets its own preview address
  (`https://<hash>.rehlaty-demo.pages.dev`); the browser keeps data **per address**, so progress saved on one address is not seen on another.
  Changing the domain later also starts everybody empty (there is no cloud backup, and the demo says so).
* A custom domain is free to add (Project → Custom domains) if the domain is on Cloudflare DNS; the same warning about data per address applies.
* Cloudflare can restrict the demo to invited people (Zero Trust → Access, free for up to 50 users) if you do not want the public to open it yet.
* If you do not want search engines to list the demo, add `X-Robots-Tag: noindex` to `web/_headers` before building.
* A bad deployment can be undone: Project → Deployments → pick an older one → **Rollback**.
* External contacts that still happen (honestly): fonts from `fonts.gstatic.com`, and YouTube when a child opens a lesson a parent approved.
  Cloudflare itself sees ordinary web-server logs (address, time) as any host does.
* Not verified: the deployed site has not been opened yet (nobody deployed it), Safari/Firefox, real phones and tablets.
