# استضافة نسخة الويب على Oracle Cloud (Free) — Hosting the web demo on Oracle Cloud Free

> الحالة / Status: **لم يتم اختبارها على سيرفر حقيقي** (not tested on a real VM; no Oracle account was touched from the cloud session).
> الدليل الخارجي (`projectalphatech/oracle-free-vps`) لم أقرأه ولم أشغّل أي سكريبت منه — اقرأ أي سكريبت قبل ما تشغّله.

## بالعربي — الخطوات

1. **الحساب**: كارت حقيقي (مش prepaid). اختار الـ region القريبة (مينفعش تتغير بعدين).
2. **الـ VM**: Ampere **A1.Flex** (2 OCPU، 12GB) بـ Ubuntu 22.04/24.04. لو ظهر «out of capacity» جرّب بالليل أو AD تانية.
3. **البورتات**: افتح 80 و443 في **Security List** (Ingress، TCP، من 0.0.0.0/0) **وكمان** في iptables جوه الـ VM:
   ```bash
   sudo iptables -I INPUT 6 -p tcp --dport 80 -j ACCEPT
   sudo iptables -I INPUT 6 -p tcp --dport 443 -j ACCEPT
   sudo apt-get install -y iptables-persistent && sudo netfilter-persistent save
   ```
4. **الدومين**: محتاج دومين (أو subdomain) يشاور على الـ IP العام للـ VM (سجل A). Caddy بيجيب شهادة HTTPS لوحده.
5. **Caddy** على الـ VM:
   ```bash
   sudo apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl
   curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
   curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
   sudo apt-get update && sudo apt-get install -y caddy
   sudo mkdir -p /srv/rehlaty && sudo chown $USER /srv/rehlaty
   sudo cp Caddyfile /etc/caddy/Caddyfile            # من الملف اللي جنب الملف ده
   echo 'DOMAIN=demo.example.com' | sudo tee /etc/default/caddy-domain
   sudo systemctl edit caddy      # أضف:  [Service]\nEnvironmentFile=/etc/default/caddy-domain
   ```
6. **النشر** من جهازك (محتاج flutter و brotli و rsync و ssh):
   ```bash
   export FIREBASE_API_KEY=... FIREBASE_APP_ID=... FIREBASE_SENDER_ID=... FIREBASE_PROJECT_ID=... FIREBASE_AUTH_DOMAIN=... LESSONS_BASE_URL=...
   SERVER=ubuntu@<ip> deploy/oracle/deploy.sh
   ```
7. **مهم جداً بعد ما الدومين يشتغل** (من غير كده تسجيل الدخول هيفشل):
   - Firebase Console → Authentication → Settings → **Authorized domains** → أضف الدومين الجديد.
   - Google Cloud Console → Credentials → OAuth client (Web) → **Authorized JavaScript origins** → أضف `https://الدومين`.
   - Cloudflare R2 (فيديوهات الدروس) → CORS → أضف `https://الدومين` في `AllowedOrigins`.
   - الـ CSP في `tool/headers_login` مش بيحتاج تعديل (نفس المصادر).

## English — what to know
- Static files only: no app code runs on the server. Caddy serves the Flutter build with automatic HTTPS, the same security headers as the Cloudflare version (`headers_to_caddy.py` converts `tool/headers_login`), and **brotli level 11** copies, which are about 10–15% smaller than a CDN's on-the-fly compression.
- **Honest speed note:** one VM in one region has no CDN. Users far from that region will see higher latency than on Cloudflare Pages. If speed matters most, put Cloudflare (orange cloud, free) in front of this VM, or keep Pages and use Oracle for other things.
- Never put API keys in the repository or in this kit; the build script reads them from environment variables.
- Keep the VM patched (`sudo apt-get update && sudo apt-get upgrade`), allow SSH by key only, and keep ports 80/443 as the only public web ports.
