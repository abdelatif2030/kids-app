((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={
cmM(d,e,f,g){return new B.acY(f,g,e,d)},
cmI(d){return new B.acV(d,null)},
acY:function acY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNF:function aNF(d){this.a=d},
acV:function acV(d,e){this.c=d
this.a=e},
aNm:function aNm(d,e,f){this.a=d
this.b=e
this.c=f},
aNn:function aNn(d,e){this.a=d
this.b=e},
aNo:function aNo(d,e){this.a=d
this.b=e},
aNp:function aNp(d){this.a=d},
G3:function G3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a6r:function a6r(){var _=this
_.d=null
_.e=$
_.c=_.a=null},
bKU:function bKU(d){this.a=d},
bKT:function bKT(d,e){this.a=d
this.b=e},
a0f:function a0f(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aye:function aye(){var _=this
_.d=$
_.e=null
_.f=!1
_.c=_.a=null},
bKY:function bKY(d){this.a=d},
bKX:function bKX(d,e){this.a=d
this.b=e},
bKW:function bKW(d){this.a=d},
bKV:function bKV(d){this.a=d}},C
J=c[1]
A=c[0]
D=c[2]
E=c[9]
B=a.updateHolder(c[5],B)
C=c[14]
B.acY.prototype={
v(d){var x=$.h().a==="ar",w=x?"\u0623\u0644\u0639\u0627\u0628 \u062a\u0639\u0644\u064a\u0645\u064a\u0629":"Learning games"
x=x?"\u0623\u0644\u0639\u0627\u0628 \u0644\u0644\u062a\u0633\u0644\u064a\u0629":"Fun games"
x=A.a([new A.ev("choice_educational",C.bvV,0.325,0.46,w,this.c,36,C.bVC,null),new A.ev("choice_fun",C.bvO,0.335,0.46,x,this.d,36,C.bVD,null)],y.t)
return new A.nF("assets/games/choice_scene.webp",1.7768331562167907,x,D.AA,!1,new B.aNF(this),null,C.bWo)}}
B.acV.prototype={
acs(d,e){var x,w=null,v=this.c.c
if(v<e.e){x=d.aj(y.v).f
x.h_(A.hj(w,w,w,w,w,D.U,w,A.c($.h().a==="ar"?"\u0627\u0644\u0644\u0639\u0628\u0629 \u062f\u064a \u0644\u0645\u0627 \u062a\u0643\u0628\u0631 \u0634\u0648\u064a\u0629!":"This game is for a little later!",w,w,w,w,w,w,w,w,w),w,D.ck,w,w,w,w,w,w,w,w,w,w))
return}x=A.bA(new B.aNm(this,e,v),w,y.r)
A.ao(d,!1).bc(x)},
v(d){var x=null,w=$.bYm().f.$0(),v=$.bYp().f.$0(),u=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
return A.bk(x,C.aeH,new A.nF("assets/games/fun_games_scene.webp",1.7768331562167907,A.a([new A.ev("fun_carnival_race",C.buX,0.43,0.58,w,new B.aNn(this,d),40,C.bWh,x),new A.ev("fun_jungle_adventure",C.bvF,0.43,0.575,v,new B.aNo(this,d),40,C.bWj,x),new A.ev("fun_back",C.bul,0.07,0.125,u,new B.aNp(d),60,C.bWg,x)],y.t),D.AA,!1,x,x,C.bWi),x,!1,x,x)}}
B.G3.prototype={
R(){return new B.a6r()}}
B.a6r.prototype={
gaiH(){var x=this.e
return x===$?this.e=new E.alw(this.a.c):x},
ae(){var x=this
x.aw()
A.a_0(D.bLw)
x.gaiH().dl(x.a.d).bH(new B.bKU(x),y.F)},
m(){A.a_0(D.bLx)
this.ag()},
aTP(d){var x,w,v,u=null
try{u=y.y.a(D.aq.h0(d,null))}catch(x){return}switch(J.J(u,"type")){case"save":w=J.J(u,"save")
if(y.y.b(w))this.gaiH().Eb(this.a.d,w)
break
case"exit":v=this.c
if(v!=null)A.qf(v)
break}},
v(d){var x,w=null,v=this.d
if(v==null)x=C.abY
else{x=this.a.c
x=new B.a0f(x,v,this.gaTO(),new A.M(x.a+"_view",y.q))}return A.bk(w,C.ad2,x,w,!1,w,w)}}
B.a0f.prototype={
R(){return new B.aye()},
bft(d){return this.e.$1(d)}}
B.aye.prototype={
gakL(){var x,w,v=this.d
if(v===$){x=this.a.c
w=$.ccN
$.ccN=w+1
v=this.d="web-game-"+x.a+"-"+w}return v},
ae(){this.aw()
$.a8w()
var x=this.gakL()
$.r4().zv(x,new B.bKY(this),!0)},
b3W(d){var x,w,v=null,u=b.G,t=this.a.c
if(t.c in u){d.$0()
return}x=A.bMw(A.lD(u.document,"getElementById",t.a+"-js",v,v,v))
t=x==null
w=t?A.e1(A.lD(u.document,"createElement","script",v,v,v)):x
A.lD(w,"addEventListener","load",A.bNm(new B.bKW(d)),v,v)
if(t){w.id=this.a.c.a+"-js"
t=$.AI
t.toString
w.src=t.wU("assets/games/"+this.a.c.b+"/game.js")
A.lD(u.document.head,"append",w,v,v,v)}},
b3T(d){var x,w,v,u,t=this
if(t.f)return
x=t.a.c
w=b.G[x.c]
v=$.AI
u=v.wU("assets/games/"+x.b+"/")
x=A.eR(t.a.d,y.w,y.x)
x.l(0,"base",u)
t.e=A.e1(A.lD(w,"start",d,A.aO(x),A.dt(new B.bKV(t)),null))},
m(){var x,w=null
this.f=!0
x=this.e
if(x!=null)A.lD(x,"dispose",w,w,w,w)
this.ag()},
v(d){return new A.JV(this.gakL(),null,null,D.By,null)}}
var z=a.updateTypes(["G3(B)","~(o)"])
B.aNF.prototype={
$2(d,e){var x,w=null,v=0.075*d,u=D.n.Y(v,44,90)
v=D.n.Y(v,44,90)
x=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
return A.a([A.jz(w,new A.cq(this.a.e,A.aL(w,C.arV,D.C,w,w,new A.az(D.fk,w,A.cp(D.r,3),w,D.QG,w,D.bB),w,w,w,w,w,w,w,w),40,x,!1,!0,C.bVB),v,w,0.02*d,w,0.03*e,u)],y.u)},
$S:205}
B.aNm.prototype={
$1(d){var x=this.a.c
return new B.G3(this.b,x.a,this.c,x.Q,null)},
$S:z+0}
B.aNn.prototype={
$0(){return this.a.acs(this.b,$.bYm())},
$S:0}
B.aNo.prototype={
$0(){return this.a.acs(this.b,$.bYp())},
$S:0}
B.aNp.prototype={
$0(){return A.qf(this.a)},
$S:0}
B.bKU.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.u(new B.bKT(x,d))},
$S:1174}
B.bKT.prototype={
$0(){var x=this.a,w=$.h().a==="ar"?"ar":"en",v=x.a
return x.d=A.ad(["lang",w,"age",v.e,"gender",v.f,"save",this.b],y.w,y.x)},
$S:0}
B.bKY.prototype={
$1(d){var x,w=A.e1(A.lD(b.G.document,"createElement","div",null,null,null))
w.style.cssText="position:relative;width:100%;height:100%;overflow:hidden"
x=this.a
x.b3W(new B.bKX(x,w))
return w},
$S:145}
B.bKX.prototype={
$0(){return this.a.b3T(this.b)},
$S:0}
B.bKW.prototype={
$0(){return this.a.$0()},
$S:0}
B.bKV.prototype={
$1(d){var x=A.Qf(d),w=this.a
if(!w.f){w=w.a
w.toString
w.bft(D.aq.d8(x,null))}},
$S:180};(function installTearOffs(){var x=a._instance_1u
x(B.a6r.prototype,"gaTO","aTP",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.W,[B.acY,B.acV])
w(B.aNF,A.pK)
x(A.kl,[B.aNm,B.bKU,B.bKY,B.bKV])
x(A.na,[B.aNn,B.aNo,B.aNp,B.bKT,B.bKX,B.bKW])
x(A.Q,[B.G3,B.a0f])
x(A.Z,[B.a6r,B.aye])})()
A.u9(b.typeUniverse,JSON.parse('{"acY":{"W":[],"e":[]},"acV":{"W":[],"e":[]},"G3":{"Q":[],"e":[]},"a6r":{"Z":["G3"]},"a0f":{"Q":[],"e":[]},"aye":{"Z":["a0f"]}}'))
var y={t:A.a3("x<ev>"),u:A.a3("x<e>"),y:A.a3("aD<o,@>"),F:A.a3("bi"),w:A.a3("o"),q:A.a3("M<o>"),v:A.a3("wV"),x:A.a3("S?"),r:A.a3("~")};(function constants(){C.acp=new A.n8(null,null,null,D.r,null,null,null,null)
C.abY=new A.i9(D.V,null,null,C.acp,null)
C.ad2=new A.q(1,0.11372549019607843,0.07058823529411765,0.3137254901960784,D.o)
C.aeH=new A.q(1,0.5607843137254902,0.8274509803921568,1,D.o)
C.arV=new A.aC(D.za,30,D.r,null,null)
C.bul=new A.i(0.052,0.088)
C.buX=new A.i(0.272,0.56)
C.bvF=new A.i(0.732,0.565)
C.bvO=new A.i(0.695,0.655)
C.bvV=new A.i(0.312,0.655)
C.bVB=new A.M("choice_back",y.q)
C.bVC=new A.M("choice_educational",y.q)
C.bVD=new A.M("choice_fun",y.q)
C.bWg=new A.M("fun_back",y.q)
C.bWh=new A.M("fun_carnival_race",y.q)
C.bWi=new A.M("fun_games_page",y.q)
C.bWj=new A.M("fun_jungle_adventure",y.q)
C.bWo=new A.M("games_choice",y.q)})();(function staticFields(){$.ccN=0})()};
(a=>{a["7SLe71Uhm+YM781L4C7+JP9cXZU="]=a.current})($__dart_deferred_initializers__);