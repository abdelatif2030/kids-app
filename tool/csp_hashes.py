import hashlib, base64
V='13.1.0'
def h(t): return "sha256-"+base64.b64encode(hashlib.sha256(t.encode()).digest()).decode()
# Prints the CSP hashes of the inline loader scripts that firebase_core_web injects (see its injectSrcScript).
# V must equal the SDK version the plugin loads (the console shows it in the gstatic URL).
target=''
def variants(w,u):
    tt=f'''            window.ff_trigger_{w} = async (callback) => {{
              console.debug("Initializing Firebase {w}");
              callback(await import("{u}"));
            }};
          '''
    nt=f'''      window.ff_trigger_{w} = async (callback) => {{
        console.debug("Initializing Firebase {w}");
        callback(await import("{u}"));
      }};
    '''
    return {'TT':tt,'NT':nt}
svc=[('firebase_core','firebase-app.js'),('firebase_auth','firebase-auth.js'),('firebase_firestore','firebase-firestore-pipelines.js')]
for w,f in svc:
    for k,t in variants(w,f'https://www.gstatic.com/firebasejs/{V}/{f}').items():
        print(w,k,h(t), '<== MATCH' if h(t)==target else '')
