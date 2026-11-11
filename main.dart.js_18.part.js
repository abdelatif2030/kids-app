((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={
cmX(d,e,f,g){return new B.acZ(f,g,e,d)},
cmT(d){return new B.acW(d,null)},
acZ:function acZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNF:function aNF(d){this.a=d},
acW:function acW(d,e){this.c=d
this.a=e},
aNn:function aNn(d,e,f){this.a=d
this.b=e
this.c=f},
aNo:function aNo(d,e,f){this.a=d
this.b=e
this.c=f},
aNp:function aNp(d){this.a=d},
G4:function G4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a6s:function a6s(){var _=this
_.d=null
_.e=$
_.c=_.a=null},
bKU:function bKU(d){this.a=d},
bKT:function bKT(d,e){this.a=d
this.b=e},
a0g:function a0g(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayf:function ayf(){var _=this
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
B.acZ.prototype={
v(d){var x=$.h().a==="ar",w=x?"\u0623\u0644\u0639\u0627\u0628 \u062a\u0639\u0644\u064a\u0645\u064a\u0629":"Learning games"
x=x?"\u0623\u0644\u0639\u0627\u0628 \u0644\u0644\u062a\u0633\u0644\u064a\u0629":"Fun games"
x=A.a([new A.eC("choice_educational",C.bvT,0.325,0.46,w,this.c,36,C.bVA,null),new A.eC("choice_fun",C.bvM,0.335,0.46,x,this.d,36,C.bVB,null)],y.t)
return new A.nF("assets/games/choice_scene.webp",1.7768331562167907,x,D.AA,!1,new B.aNF(this),null,C.bWk)}}
B.acW.prototype={
aLh(d,e){var x,w=null,v=this.c.c
if(v<e.e){x=d.aj(y.v).f
x.h_(A.hj(w,w,w,w,w,D.U,w,A.c($.h().a==="ar"?"\u0627\u0644\u0644\u0639\u0628\u0629 \u062f\u064a \u0644\u0645\u0627 \u062a\u0643\u0628\u0631 \u0634\u0648\u064a\u0629!":"This game is for a little later!",w,w,w,w,w,w,w,w,w),w,D.ck,w,w,w,w,w,w,w,w,w,w))
return}x=A.bA(new B.aNn(this,e,v),w,y.r)
A.ao(d,!1).bc(x)},
v(d){var x,w,v,u,t,s,r,q=null,p=A.a([],y.t)
for(x=[new A.hM(["fun_moto_race",$.c3P(),0.139,0.441,0.23]),new A.hM(["fun_carnival_race",$.c3I(),0.38,0.441,0.23]),new A.hM(["fun_jungle_adventure",$.c3O(),0.622,0.441,0.23]),new A.hM(["fun_happy_farm",$.c3N(),0.862,0.441,0.23]),new A.hM(["fun_pumpkin_pie",$.c3T(),0.139,0.768,0.25]),new A.hM(["fun_samurai",$.c3V(),0.387,0.768,0.22]),new A.hM(["fun_ocean_defense",$.c3Q(),0.631,0.768,0.25]),new A.hM(["fun_golden_tail",$.c3M(),0.876,0.768,0.22])],w=y.q,v=0;v<8;++v){u={}
t=x[v]
u.a=null
t=t.a
s=t[0]
r=t[1]
u.a=r
p.push(new A.eC(s,new A.i(t[2],t[3]),t[4],0.3,r.f.$0(),new B.aNo(u,this,d),40,new A.M(s,w),q))}x=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
p.push(new A.eC("fun_back",C.bvx,0.078,0.138,x,new B.aNp(d),60,C.bWe,q))
return A.bk(q,C.aeH,new A.nF("assets/games/fun_games_scene.webp",1.7768331562167907,p,D.AA,!1,q,q,C.bWf),q,!1,q,q)}}
B.G4.prototype={
R(){return new B.a6s()}}
B.a6s.prototype={
gaiG(){var x=this.e
return x===$?this.e=new E.alx(this.a.c):x},
ae(){var x=this
x.aw()
A.a_1(D.bLu)
x.gaiG().dl(x.a.d).bH(new B.bKU(x),y.F)},
m(){A.a_1(D.bLv)
this.ag()},
aTP(d){var x,w,v,u=null
try{u=y.y.a(D.aq.h0(d,null))}catch(x){return}switch(J.J(u,"type")){case"save":w=J.J(u,"save")
if(y.y.b(w))this.gaiG().Eb(this.a.d,w)
break
case"exit":v=this.c
if(v!=null)A.qf(v)
break}},
v(d){var x,w=null,v=this.d
if(v==null)x=C.abY
else{x=this.a.c
x=new B.a0g(x,v,this.gaTO(),new A.M(x.a+"_view",y.q))}return A.bk(w,C.ad2,x,w,!1,w,w)}}
B.a0g.prototype={
R(){return new B.ayf()},
bft(d){return this.e.$1(d)}}
B.ayf.prototype={
gakK(){var x,w,v=this.d
if(v===$){x=this.a.c
w=$.ccY
$.ccY=w+1
v=this.d="web-game-"+x.a+"-"+w}return v},
ae(){this.aw()
$.a8x()
var x=this.gakK()
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
v(d){return new A.JW(this.gakK(),null,null,D.By,null)}}
var z=a.updateTypes(["G4(B)","~(o)"])
B.aNF.prototype={
$2(d,e){var x,w=null,v=0.075*d,u=D.n.Y(v,44,90)
v=D.n.Y(v,44,90)
x=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
return A.a([A.jA(w,new A.cq(this.a.e,A.aL(w,C.arV,D.C,w,w,new A.az(D.fk,w,A.cp(D.r,3),w,D.QG,w,D.bB),w,w,w,w,w,w,w,w),40,x,!1,!0,C.bVz),v,w,0.02*d,w,0.03*e,u)],y.u)},
$S:205}
B.aNn.prototype={
$1(d){var x=this.a.c
return new B.G4(this.b,x.a,this.c,x.Q,null)},
$S:z+0}
B.aNo.prototype={
$0(){return this.b.aLh(this.c,this.a.a)},
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
$1(d){var x=A.Qg(d),w=this.a
if(!w.f){w=w.a
w.toString
w.bft(D.aq.d8(x,null))}},
$S:180};(function installTearOffs(){var x=a._instance_1u
x(B.a6s.prototype,"gaTO","aTP",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.W,[B.acZ,B.acW])
w(B.aNF,A.pK)
x(A.km,[B.aNn,B.bKU,B.bKY,B.bKV])
x(A.na,[B.aNo,B.aNp,B.bKT,B.bKX,B.bKW])
x(A.Q,[B.G4,B.a0g])
x(A.Z,[B.a6s,B.ayf])})()
A.u9(b.typeUniverse,JSON.parse('{"acZ":{"W":[],"e":[]},"acW":{"W":[],"e":[]},"G4":{"Q":[],"e":[]},"a6s":{"Z":["G4"]},"a0g":{"Q":[],"e":[]},"ayf":{"Z":["a0g"]}}'))
var y={t:A.a3("x<eC>"),u:A.a3("x<e>"),y:A.a3("aD<o,@>"),F:A.a3("bi"),w:A.a3("o"),q:A.a3("M<o>"),v:A.a3("wV"),x:A.a3("S?"),r:A.a3("~")};(function constants(){C.acp=new A.n8(null,null,null,D.r,null,null,null,null)
C.abY=new A.ia(D.V,null,null,C.acp,null)
C.ad2=new A.q(1,0.11372549019607843,0.07058823529411765,0.3137254901960784,D.o)
C.aeH=new A.q(1,0.5607843137254902,0.8274509803921568,1,D.o)
C.arV=new A.aC(D.za,30,D.r,null,null)
C.bvx=new A.i(0.066,0.101)
C.bvM=new A.i(0.695,0.655)
C.bvT=new A.i(0.312,0.655)
C.bVz=new A.M("choice_back",y.q)
C.bVA=new A.M("choice_educational",y.q)
C.bVB=new A.M("choice_fun",y.q)
C.bWe=new A.M("fun_back",y.q)
C.bWf=new A.M("fun_games_page",y.q)
C.bWk=new A.M("games_choice",y.q)})();(function staticFields(){$.ccY=0})()};
(a=>{a["4i/4DFSs9Vmrnv8JawiHb5ql87g="]=a.current})($__dart_deferred_initializers__);