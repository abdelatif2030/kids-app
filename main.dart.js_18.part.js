((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,A={B5:function B5(d,e){this.c=d
this.a=e},alz:function alz(d){var _=this
_.d=null
_.e=d
_.c=_.a=null},bbf:function bbf(d,e,f){this.a=d
this.b=e
this.c=f},bbi:function bbi(d){this.a=d},bbj:function bbj(d){this.a=d},bbk:function bbk(d){this.a=d},bbg:function bbg(d){this.a=d},bbh:function bbh(d){this.a=d},bbl:function bbl(){},bbm:function bbm(){},bbn:function bbn(d,e,f){this.a=d
this.b=e
this.c=f},bbo:function bbo(d){this.a=d},bbp:function bbp(){},aew:function aew(d,e,f){this.c=d
this.d=e
this.a=f},aRn:function aRn(){},aRm:function aRm(){},aRl:function aRl(d){this.a=d},
czG(d){var x,w
for(x=0;x<6;++x){w=D.bch[x]
if(w.a===d)return w}return null},
cAW(d,e){var x,w,v,u,t,s
switch(d.a.a){case 0:for(x=$.bXc(),w=d.b,v=0;v<11;++v){u=x[v]
if(u.a===w){x=e>=u.e&&e<=u.f
return new B.GQ(x,u.b)}}break
case 1:for(x=$.c2r(),w=d.b,v=0;v<2;++v){u=x[v]
if(u.a===w){x=u.b.$0()
return new B.GQ(e>=u.c&&e<=u.d,x)}}break
case 2:for(x=d.b,v=0;v<17;++v){t=C.tD[v]
if(t.a===x){x=B.e(t.b)
return new B.GQ(e>=t.d&&e<=t.e,x)}}break
case 3:for(x=$.c2v(),w=d.b,v=0;v<17;++v){s=x[v]
if(s.a===w){x=s.f.$0()
return new B.GQ(e>=s.d&&e<=s.e,x)}}break}return null},
cdi(d,e){var x,w,v,u
for(x=d.length,w=null,v=0;v<x;++v){u=A.cAW(d[v],e)
if(u==null)continue
if(w==null)w=u
if(u.a)return u}return w},
czF(d,e){var x,w,v,u,t
for(x=d.b,w=0;w<3;++w){v=x[w]
u=$.chr()
t=B.ve(new B.an(u,new A.bUy(v),B.a_(u).i("an<1>")))
if(t!=null&&e>=t.c&&e<=t.d)return t}return null},
cAB(d){var x
switch(d.a){case 0:x=$.h().a==="ar"?"\u0627\u0643\u062a\u0634\u0641":"Discover"
break
case 1:x=$.h().a==="ar"?"\u062a\u0639\u0644\u0651\u0645":"Learn"
break
case 2:x=$.h().a==="ar"?"\u0627\u0644\u0639\u0628":"Play"
break
case 3:x=$.h().a==="ar"?"\u0637\u0628\u0651\u0642":"Apply"
break
case 4:x=$.h().a==="ar"?"\u0627\u062d\u062a\u0641\u0644":"Celebrate"
break
default:x=null}return x},
czH(d,e,f){var x,w,v,u,t,s,r,q=A.czG(d.a)
if(q==null)return null
x=A.cdi(q.c,e)
x=x==null?null:x.b
w=A.czF(q,e)
v=B.a([],y.s)
for(u=q.d,t=u.length,s=0;s<t;++s){r=u[s]
if(f.p(0,r))v.push(r)}u=A.cdi(q.e,e)
return new A.aRk(x,w,v,u==null?null:u.b)},
vz:function vz(d,e){this.a=d
this.b=e},
LY:function LY(d,e){this.a=d
this.b=e},
ix:function ix(d,e){this.a=d
this.b=e},
vh:function vh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bUy:function bUy(d){this.a=d},
aRk:function aRk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return new A.IU(d,f,g,new A.bMT(h,i))},
qt:function qt(d,e){this.a=d
this.b=e},
IU:function IU(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
bMT:function bMT(d,e){this.a=d
this.b=e},
czD(d){var x,w,v,u,t,s=d.c,r=d.a,q=new A.bUw(),p=[new B.lg(["balloons",new A.bUa(),1,2,new A.bUb()]),new B.lg(["animal",new A.bUc(),1,2,new A.bUn()]),new B.lg(["colors",new A.bUp(),2,3,new A.bUq()]),new B.lg(["letters",new A.bUr(),3,8,new A.bUs()]),new B.lg(["memory",new A.bUt(),3,6,new A.bUu()]),new B.lg(["math",new A.bUv(),4,12,new A.bUd(s)])],o=B.a([],y.X)
for(x=0;x<6;++x){w=p[x]
v=w.a
if(s>=v[2]&&s<=v[3])o.push(new A.os(v[0],v[1],new A.bUe(q,w),!1))}for(v=B.c0I(s),u=v.length,x=0;x<v.length;v.length===u||(0,B.w)(v),++x){w=v[x]
t=w.a
if(D.bF6.p(0,t))o.push(new A.os(t,w.b,new A.bUf(r,w,q,s,d),!0))}o.push(new A.os("drawing",new A.bUg(),new A.bUh(q,d),!1))
o.push(new A.os("stories",new A.bUi(),new A.bUj(q,d),!1))
o.push(new A.os("adventures",new A.bUk(),new A.bUl(q,d),!1))
o.push(new A.os("feelings",new A.bUm(),new A.bUo(q,d),!1))
return o},
D7(d,e,f,g){return new A.yy(d,e,f,g)},
czE(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=new B.Pa(0,2,1)
for(x=d+g,w=(d-g)/2,v=-1,u=1;u<=3;++u){t=(e-g*(u-1))/u
s=t*1.1547169811320754
r=s>320?320:s
q=C.n.eK(x/(r+g))
if(q<2){s=w/1.1547169811320754>t?s:w
q=2}else s=r
p=s*s*C.h.a_(u*q,1,f)
if(s>=110&&p>v){o=new B.Pa(s,q,u)
v=p}}return v<0?new B.Pa(w,2,1):o},
cmI(d,e,f){return new A.Vp(d,f,e)},
os:function os(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUw:function bUw(){},
bUx:function bUx(d){this.a=d},
bUa:function bUa(){},
bUb:function bUb(){},
bUc:function bUc(){},
bUn:function bUn(){},
bUp:function bUp(){},
bUq:function bUq(){},
bUr:function bUr(){},
bUs:function bUs(){},
bUt:function bUt(){},
bUu:function bUu(){},
bUv:function bUv(){},
bUd:function bUd(d){this.a=d},
bUe:function bUe(d,e){this.a=d
this.b=e},
bU9:function bU9(d){this.a=d},
bUf:function bUf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bU8:function bU8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUg:function bUg(){},
bUh:function bUh(d,e){this.a=d
this.b=e},
bU7:function bU7(d){this.a=d},
bUi:function bUi(){},
bUj:function bUj(d,e){this.a=d
this.b=e},
bU6:function bU6(d){this.a=d},
bUk:function bUk(){},
bUl:function bUl(d,e){this.a=d
this.b=e},
bU5:function bU5(d){this.a=d},
bUm:function bUm(){},
bUo:function bUo(d,e){this.a=d
this.b=e},
bU4:function bU4(d){this.a=d},
yy:function yy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT_:function bT_(){},
bT0:function bT0(){},
bT1:function bT1(){},
bT2:function bT2(){},
bT3:function bT3(){},
bT4:function bT4(){},
bT5:function bT5(){},
bT6:function bT6(){},
Vp:function Vp(d,e,f){this.c=d
this.d=e
this.a=f},
aqB:function aqB(d){var _=this
_.d=$
_.e="all"
_.f=0
_.r=d
_.c=_.a=null},
bor:function bor(d,e){this.a=d
this.b=e},
boC:function boC(d){this.a=d},
boD:function boD(d){this.a=d},
boE:function boE(d){this.a=d},
boF:function boF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
boB:function boB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s},
bov:function bov(d,e){this.a=d
this.b=e},
bow:function bow(d,e){this.a=d
this.b=e},
box:function box(d){this.a=d},
bou:function bou(d,e){this.a=d
this.b=e},
boy:function boy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bot:function bot(d,e,f){this.a=d
this.b=e
this.c=f},
bos:function bos(d){this.a=d},
boz:function boz(d,e,f){this.a=d
this.b=e
this.c=f},
boA:function boA(d,e,f){this.a=d
this.b=e
this.c=f},
ave:function ave(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3n:function a3n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bto:function bto(){},
aqA:function aqA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
boq:function boq(){},
Bi:function Bi(d){this.a=d},
a0I:function a0I(){this.d=$
this.c=this.a=null},
bdv:function bdv(d,e){this.a=d
this.b=e},
bdw:function bdw(d){this.a=d},
bdx:function bdx(){},
bdy:function bdy(d,e){this.a=d
this.b=e},
en:function en(d,e){this.a=d
this.b=e},
Gz:function Gz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Da:function Da(d){this.a=d},
a2H:function a2H(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=$
_.w=f
_.x=0
_.z=_.y=!1
_.c=_.a=null},
bpj:function bpj(d,e){this.a=d
this.b=e},
bpk:function bpk(d){this.a=d},
bpl:function bpl(d){this.a=d},
bpn:function bpn(d,e){this.a=d
this.b=e},
bpm:function bpm(d,e){this.a=d
this.b=e},
bpo:function bpo(d,e){this.a=d
this.b=e},
As:function As(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dq:function Dq(d,e){this.c=d
this.a=e},
a2S:function a2S(d,e){var _=this
_.d=d
_.f=_.e=$
_.r=e
_.w=0
_.y=_.x=!1
_.c=_.a=null},
bqM:function bqM(d,e){this.a=d
this.b=e},
bqN:function bqN(d){this.a=d},
bqO:function bqO(d){this.a=d},
bqP:function bqP(d,e){this.a=d
this.b=e},
FX:function FX(d){this.a=d},
a6e:function a6e(d){var _=this
_.d=d
_.e=$
_.f=null
_.r=0
_.c=_.a=null},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJq:function bJq(d,e){this.a=d
this.b=e}},D
J=c[1]
B=c[0]
C=c[2]
E=c[10]
F=c[18]
A=a.updateHolder(c[6],A)
D=c[17]
A.B5.prototype={
S(){var x=y.N
return new A.alz(B.A(x,x))}}
A.alz.prototype={
ae(){this.aw()
this.Ap()},
Ap(){var x=0,w=B.m(y.H),v=this,u,t,s
var $async$Ap=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:u=v.a.c
x=2
return B.d(B.r5(u.a,u.c,!0,$.m3().e),$async$Ap)
case 2:t=e
x=3
return B.d(B.QA(v.a.c.a),$async$Ap)
case 3:s=e
if(v.c!=null)v.u(new A.bbf(v,t,s))
return B.k(null,w)}})
return B.l($async$Ap,w)},
Lz(d){return this.aU9(d)},
aU9(d){var x=0,w=B.m(y.H),v=this,u,t,s,r
var $async$Lz=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:r={}
r.a=null
if(d.a==="game"){u=C.e.hW($.ua(),new A.bbi(d))
t=v.a.c
r.a=u.r.$3(t.a,t.c,$.h().a)}else{s=C.e.hW(B.Hq(),new A.bbj(d))
r.a=B.b5A(v.a.c,s)}t=v.c
t.toString
r=B.bG(new A.bbk(r),null,y.H)
x=2
return B.d(B.ap(t,!1).bi(r),$async$Lz)
case 2:if(v.c!=null)v.Ap()
return B.k(null,w)}})
return B.l($async$Lz,w)},
a8Q(d){return d.a==="game"?C.e.hW($.ua(),new A.bbg(d)).b.$0():C.e.hW(B.Hq(),new A.bbh(d)).b},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=$.h(),g=B.bD(j,!0,j,j,j,j,j,j,B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"Weekly adventure",j,j,j,j,j,j,j,j,j),j)
if(i==null)h=C.bh
else{x=B.a6(170,C.dD.q()>>>16&255,C.dD.q()>>>8&255,C.dD.q()&255)
w=i.a
v=w.b
u=B.c(v.b.$0(),j,j,j,j,j,C.eB,C.a3,j,j)
t=B.c(v.c.$0(),j,j,j,j,j,C.hJ,C.a3,j,j)
if(i.c)s=h.a==="ar"?"\u062e\u0644\u0635\u062a \u0645\u063a\u0627\u0645\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639!":"You finished this week's adventure!"
else{s=i.b
r=B.a_(s).i("an<1>")
q="\u062e\u0644\u0635\u062a "+new B.an(s,new A.bbl(),r).gA(0)+" \u0645\u0646 "+s.length+". \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0639\u062c\u0627\u0644."
s="Finished "+new B.an(s,new A.bbm(),r).gA(0)+" of "+s.length+". No rush."
if(h.a==="ar")s=q}r=y.D
x=B.a([new B.bV(B.a2(B.a([u,t,C.b3,B.c(s,D.bSH,j,j,j,j,C.a2r,j,j,j)],r),C.y,j,C.t,C.v,0,C.A),x,C.a8,C.aN,j,24,j,D.bSI)],r)
u=i.e
if(u!=null)x.push(new B.X(C.fL,new B.BB(u,96,j),j))
x.push(C.c2)
w=w.c
if(w.length===0)x.push(B.c(h.a==="ar"?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0644\u0639\u0627\u0628 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u0631 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639. \u062c\u0631\u0651\u0628 \u0627\u0643\u062a\u0634\u0641 \u0645\u0639 \u0645\u0627\u0645\u0627 \u0648\u0628\u0627\u0628\u0627.":"No games fit this age this week. Try discovering with mum and dad.",j,j,j,j,j,j,C.a3,j,j))
for(u=i.b,t=y.O,p=0;p<w.length;++p){s=k.a8Q(w[p])
q=u[p]
if(q)o=h.a==="ar"?"\u062a\u0645":"done"
else o=h.a==="ar"?"\u0644\u0645 \u064a\u062a\u0645 \u0628\u0639\u062f":"not yet"
n=q?D.agn:C.r
m=q?C.ec:D.and
m=B.c6(m,q?C.pf:C.a8,j,32,j)
l=B.c(k.a8Q(w[p]),j,j,j,j,j,C.k_,j,j,j)
x.push(new B.X(C.fK,new B.cn(new A.bbn(k,i,p),new B.bV(B.av(B.a([m,C.bw,new B.ex(1,C.bK,l,j),B.c6(w[p].a==="story"?C.qC:C.qF,C.P,j,j,j)],r),C.y,j,C.t,C.v,0,j),n,C.a8,C.aN,j,24,j,new B.N("adventure_step_"+p,t)),20,s+", "+o,!1,!0,j),j))}x.push(new A.aew(v,k.a.c.c,j))
w=k.e
if(w.gc2(w)){w=B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a\u064a":"My adventures",j,j,j,j,j,C.ez,j,j,j)
v=B.a([],r)
for(h=k.e.gcG(),h=h.c9(h),u=B.a_(h).i("cD<1>"),h=new B.cD(h,u),h=new B.ba(h,h.gA(0),u.i("ba<al.E>")),u=u.i("al.E");h.t();){s=h.d
if(s==null)s=u.a(s)
v.push(B.n5(D.aqu,j,new B.N("adventure_past_"+s.a,t),B.c(C.e.kc($.aAg(),new A.bbo(s),new A.bbp()).b.$0(),j,j,j,j,j,j,j,j,j),j,j))}C.e.O(x,B.a([C.a7,w,C.b3,B.b_(C.I,v,C.a1,j,C.I,8,8)],r))}h=B.ia(x,j,j,C.ar,j,C.ad,!1)}return B.bm(g,j,h,j,!1,j,j)}}
A.aew.prototype={
v(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=B.a9(y.N)
for(x=$.ua(),w=this.d,v=0;v<24;++v){u=x[v]
if(w>=u.e&&w<=u.f)m.C(0,u.a)}t=A.czH(this.c,w,m)
if(t==null)return C.aW
m=new A.aRn()
x=$.h()
w=B.c(x.a==="ar"?"\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0639\u0644\u0651\u0645":"Learning path",n,n,n,n,n,C.a2d,n,n,n)
s=m.$3(D.bxn,t.b,C.qy)
r=t.c
r=m.$3(D.bxo,r==null?n:r.e.$0(),D.anT)
q=t.d
q=m.$3(D.bxp,q.length===0?n:new B.a3(q,new A.aRm(),B.a_(q).i("a3<1,o>")).aC(0,B.e("\u060c ")),C.qF)
p=t.e
if(p==null)p=n
else{o=x.a==="ar"?"\u0645\u0639 \u0634\u062e\u0635 \u0628\u0627\u0644\u063a":"with a grown-up"
o=p+" ("+o+")"
p=o}p=m.$3(D.bxq,p,C.z_)
return new B.X(C.fL,new B.bV(B.a2(B.a([w,s,r,q,p,m.$3(D.bxr,x.a==="ar"?"\u0639\u0646\u062f \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u064a\u064f\u0633\u062c\u064e\u0651\u0644 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"When the steps are done the week's adventure is recorded",C.J2)],y.D),C.X,n,C.t,C.v,0,C.A),C.r,C.a8,C.aN,n,24,n,D.bUm),n)}}
A.vz.prototype={
I(){return"PhaseKind."+this.b}}
A.LY.prototype={
I(){return"RefKind."+this.b}}
A.ix.prototype={}
A.vh.prototype={}
A.aRk.prototype={}
A.qt.prototype={
I(){return"Strand."+this.b}}
A.IU.prototype={}
A.os.prototype={}
A.yy.prototype={}
A.Vp.prototype={
S(){return new A.aqB(E.bZ1(0,1))}}
A.aqB.prototype={
m(){this.r.m()
this.ah()},
aRv(d){var x,w=this
if(d===w.e)return
w.u(new A.bor(w,d))
x=w.r
if(x.f.length!==0)x.a3z(0)},
ajm(d,e){var x=this,w=C.h.a_(x.f+d,0,e-1)
if(w!==x.f&&x.r.f.length!==0)x.r.ald(w,C.kF,D.akm)},
v(d){var x,w,v,u,t,s,r,q,p=A.czD(this.a.c),o=B.a([],y.j)
for(x=$.chs(),w=0;w<8;++w){v=x[w]
u=v.d
if(u.ga2(u)||C.e.cF(p,new A.boC(v)))o.push(v)}t=C.e.kc(o,new A.boD(this),new A.boE(o))
x=t.d
if(x.ga2(x))s=p
else{u=B.a([],y.X)
for(r=p.length,w=0;w<p.length;p.length===r||(0,B.w)(p),++w){q=p[w]
if(x.p(0,q.a))u.push(q)}s=u}return new B.hm(D.a8o,C.de,B.fA(new A.boF(this,s,o,t,d.ai(y.I).w===C.bV)),D.bUl)}}
A.ave.prototype={
v(d){var x=null,w=this.c,v=w.c,u=v.$0(),t=this.d,s=t?D.atE:x,r=t?x:C.r.jl(0.92),q=B.bf(30),p=B.cz(C.r,3)
v=B.y(v.$0())
return new B.cn(this.e,B.xi(C.W,B.c(w.b+"  "+v,x,x,x,x,x,B.ar(x,x,t?C.r:D.aeJ,x,x,x,x,x,x,x,x,17,x,x,C.ac,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x,C.aP,new B.aF(r,x,p,q,D.bfW,s,C.a0),C.HF,x,x,x,C.eS,x),30,u,!1,!0,x)}}
A.a3n.prototype={
v(d){var x,w,v=this,u=null,t=v.e,s=t?1:0.3,r=v.c,q=$.h().a==="ar"?"\u0635\u0641\u062d\u0629 \u062a\u0627\u0646\u064a\u0629":"Turn the page"
t=t?v.f:new A.bto()
x=B.cz(C.r,3)
w=v.d?C.qw:C.qx
return B.a8E(new B.cn(t,B.aU(u,B.c6(w,C.r,u,r*0.8,C.aB),C.G,u,u,new B.aF(u,u,x,u,C.QG,D.atx,C.bx),u,r,u,u,u,u,u,r),r,q,!1,!0,u),C.aP,C.aA,s)}}
A.aqA.prototype={
v(d){var x=this,w=null,v=B.dd(0,0,300+x.f*60,0),u=x.c,t=u.a,s=u.b.$0(),r=y.D
s=B.a([B.jt(0,new B.cn(x.x,B.pY("assets/games/learn_cards/"+t+".webp",C.W,w,w,!1,C.cF,C.en,w,w,w),28,s,!1,!0,new B.N("learn_"+t,y.O)))],r)
if(u.d){u=B.a([],r)
if(x.r)u.push(D.aqE)
u.push(new B.JD(x.w,"game",t,24,w))
s.push(B.js(w,B.a2(u,C.y,w,C.t,C.al,0,C.A),w,w,4,w,4,w))}return B.c8L(new A.boq(),new B.aI(x.d,x.e,B.e9(C.bB,s,C.U,C.c3,w),w),C.pW,v,new B.b4(0,1,y.Y),y.i)}}
A.Bi.prototype={
S(){return new A.a0I()}}
A.a0I.prototype={
ae(){this.aw()
this.d=B.bn(6,!1,!1,y.y)},
aW9(d){var x=this.d
x===$&&B.b()
if(x[d])return
this.u(new A.bdv(this,d))},
aYt(){return this.u(new A.bdw(this))},
v(d){var x,w,v,u,t,s=this,r=null,q=s.d
q===$&&B.b()
x=C.e.dn(q,new A.bdx())
q=B.bD(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
w=y.D
if(x)w=B.a2(B.a([C.qL,C.aZ,B.c(B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,36,r,r,C.ak,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),C.f3,B.cG(B.c(B.e("\u0627\u0644\u0639\u0628 \u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gaYs(),r)],w),C.y,r,C.t,C.al,0,C.A)
else{w=B.a([],w)
for(v=0;v<6;++v){u=s.d[v]?0:1
t=new B.aO(55,55)
w.push(new B.cn(new A.bdy(s,v),new B.r6(B.aU(r,r,C.G,r,r,new B.aF(C.nD[C.h.ak(v,6)],r,r,new B.ct(t,t,t,t),r,r,C.a0),r,130,r,r,r,r,r,110),u,C.aP,C.d_,r,r),20,r,!1,!0,r))}w=B.b_(C.aY,w,C.a1,r,C.I,24,24)}return B.bm(q,r,new B.rE(B.bc(w,r,r,r),r),r,!1,r,r)}}
A.en.prototype={}
A.Gz.prototype={}
A.Da.prototype={
S(){return new A.a2H(C.aL,D.a4g,B.a9(y.S))}}
A.a2H.prototype={
ae(){this.aw()
this.Yw()},
Yw(){var x=this,w=B.L(x.e.e,y.r)
C.e.bp(w,x.d)
x.f=B.c9(w,0,B.cF(5,"count",y.S),B.a_(w).c).c9(0)
x.x=0
x.aez()},
aez(){var x,w,v,u=this,t=u.f
t===$&&B.b()
x=C.o.az(t[u.x].b,0,1)
t=y.s
w=B.a(u.e.d.split(""),t)
C.e.N(w,x)
v=u.d
C.e.bp(w,v)
t=B.a([x],t)
C.e.O(t,B.c9(w,0,B.cF(2,"count",y.S),y.N))
C.e.bp(t,v)
u.r=t
u.w.W(0)
u.z=u.y=!1},
Nn(d){return this.b0V(d)},
b0V(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$Nn=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.y||u.w.p(0,d)){x=1
break}t=u.r
t===$&&B.b()
t=t[d]
s=u.f
s===$&&B.b()
s=C.o.az(s[u.x].b,0,1)
if(t!==s){u.z=!0
u.u(new A.bpj(u,d))
x=1
break}B.lL("letters_"+u.e.a,!u.z,$.cq().d,s)
u.u(new A.bpk(u))
x=3
return B.d(B.jj(C.hh,null,y.z),$async$Nn)
case 3:if(u.c==null){x=1
break}u.u(new A.bpl(u))
case 1:return B.k(v,w)}})
return B.l($async$Nn,w)},
Nm(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Nm=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u5(t),$async$Nm)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaRy())
case 1:return B.k(v,w)}})
return B.l($async$Nm,w)},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.bD(l,!0,C.Z,l,l,l,l,l,B.c(B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a"),l,l,l,l,l,C.v_,l,l,l),l),j=y.D,i=B.a([],j)
for(x=0;x<4;++x){w=D.bm2[x]
i.push(B.dx(l,B.c(B.e(w.b),l,l,l,l,l,C.k1,l,l,l),l,new A.bpn(m,w),w===m.e,l))}i=B.a([B.b_(C.aY,i,C.a1,l,C.I,0,8),C.f3],j)
if(m.x>=5)i.push(new B.MP(m.gaRx(),l))
else{v=B.c(m.y?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0623\u0648\u0644 \u062d\u0631\u0641"),l,l,l,l,l,C.v0,l,l,l)
u=m.f
u===$&&B.b()
u=u[m.x]
t=B.c(u.a,l,l,l,l,l,C.uZ,l,l,l)
s=m.e.c?C.bV:C.aB
s=B.c(u.b,l,l,l,l,l,D.bNp,l,s,l)
u=B.a([],j)
r=m.w
q=0
for(;;){p=m.r
p===$&&B.b()
if(!(q<p.length))break
p=r.p(0,q)?0.15:1
o=C.nD[(q+3)%6]
n=new B.aO(24,24)
u.push(new B.r6(new B.cn(new A.bpo(m,q),B.aU(C.W,B.c(m.r[q],l,l,l,l,l,D.bMa,l,l,l),C.G,l,l,new B.aF(o,l,l,new B.ct(n,n,n,n),l,l,C.a0),l,96,l,l,l,l,l,96),20,l,!1,!0,l),p,C.aP,C.d_,l,l));++q}C.e.O(i,B.a([v,C.aZ,t,s,C.f3,B.b_(C.aY,u,C.a1,l,C.I,16,16)],j))}return B.bm(k,l,new B.rE(B.bc(B.d3(B.a2(i,C.y,l,C.t,C.al,0,C.A),l,C.T,l,C.ar,l,l,C.ad),l,l,l),l),l,!1,l,l)}}
A.As.prototype={}
A.Dq.prototype={
S(){return new A.a2S(C.aL,B.a9(y.S))}}
A.a2S.prototype={
ae(){this.aw()
this.af1()},
aS3(){var x,w,v,u,t,s=this,r=null,q="addition",p=s.a.c
if(p<=5){x=p<=4?5:10
w=1+s.d.c7(x)
return new A.As(w,B.e("\u0643\u0627\u0645\u061f"),w,"counting")}if(p<=7){v=p===6?10:20
x=s.d
u=1+x.c7(v-1)
t=1+x.c7(v-u)
return new A.As(r,""+u+" + "+t+" = ?",u+t,q)}if(p<=9){x=s.d
u=10+x.c7(41)
if(x.St()){t=1+x.c7(50)
return new A.As(r,""+u+" + "+t+" = ?",u+t,q)}t=1+x.c7(u-1)
return new A.As(r,""+u+" - "+t+" = ?",u-t,"subtraction")}x=s.d
u=2+x.c7(8)
t=2+x.c7(11)
return new A.As(r,""+u+" \xd7 "+t+" = ?",u*t,"multiplication")},
af1(){var x,w=this,v=B.a([],y.q)
for(x=0;x<5;++x)v.push(w.aS3())
w.e=v
w.w=0
w.af2()},
af2(){var x,w,v,u,t,s=this,r=s.e
r===$&&B.b()
x=r[s.w].c
r=y.t
w=B.a([],r)
for(v=-3;v<=3;++v)if(v!==0&&x+v>=1)w.push(x+v)
u=s.d
C.e.bp(w,u)
r=B.a([x],r)
t=y.S
C.e.O(r,B.c9(w,0,B.cF(2,"count",t),t))
C.e.bp(r,u)
s.f=r
s.r.W(0)
s.y=s.x=!1},
NA(d){return this.b0W(d)},
b0W(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$NA=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.x||u.r.p(0,d)){x=1
break}t=u.f
t===$&&B.b()
t=t[d]
s=u.e
s===$&&B.b()
s=s[u.w]
if(t!==s.c){u.y=!0
u.u(new A.bqM(u,d))
x=1
break}B.lL(s.d,!u.y,$.cq().d,null)
u.u(new A.bqN(u))
x=3
return B.d(B.jj(C.hh,null,y.z),$async$NA)
case 3:if(u.c==null){x=1
break}u.u(new A.bqO(u))
case 1:return B.k(v,w)}})
return B.l($async$NA,w)},
Nz(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Nz=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u5(t),$async$Nz)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaSJ())
case 1:return B.k(v,w)}})
return B.l($async$Nz,w)},
v(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bD(o,!0,C.Z,o,o,o,o,o,B.c(B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a"),o,o,o,o,o,B.ar(o,o,o,o,o,o,o,o,o,o,o,26,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o)
if(p.w>=5)x=new B.MP(p.gaS2(),o)
else{x=y.D
w=B.a([B.c(p.x?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"),o,o,o,o,o,C.v0,o,o,o),C.f3],x)
v=p.e
v===$&&B.b()
u=v[p.w].a
if(u!=null){v=B.a([],x)
for(t=0;t<u;++t)v.push(D.bQb)
w.push(B.b_(C.aY,v,C.a1,o,C.I,0,8))}if(p.e[p.w].a!=null)w.push(C.a7)
w.push(B.c(p.e[p.w].b,o,o,o,o,o,D.bP6,o,C.aB,o))
w.push(C.C9)
x=B.a([],x)
v=p.r
t=0
for(;;){s=p.f
s===$&&B.b()
if(!(t<s.length))break
s=v.p(0,t)?0.15:1
r=C.nD[(t+2)%6]
q=new B.aO(24,24)
x.push(new B.r6(new B.cn(new A.bqP(p,t),B.aU(C.W,B.c(""+p.f[t],o,o,o,o,o,D.bK_,o,o,o),C.G,o,o,new B.aF(r,o,o,new B.ct(q,q,q,q),o,o,C.a0),o,104,o,o,o,o,o,104),20,o,!1,!0,o),s,C.aP,C.d_,o,o));++t}w.push(B.b_(C.aY,x,C.a1,o,C.I,16,16))
x=B.d3(B.a2(w,C.y,o,C.t,C.al,0,C.A),o,C.T,o,C.ar,o,o,C.ad)}return B.bm(n,o,new B.rE(B.bc(x,o,o,o),o),o,!1,o,o)}}
A.FX.prototype={
S(){return new A.a6e(C.aL)}}
A.a6e.prototype={
ae(){this.aw()
this.akG()},
akG(){var x=this,w=B.L(D.bem,y.N)
C.e.bp(w,x.d)
x.e=B.c9(w,0,B.cF(3,"count",y.S),B.a_(w).c).c9(0)
x.f=null;++x.r},
b1_(d){if(this.f!=null)return
this.u(new A.bJp(this,d))},
b3B(){return this.u(this.gb3z())},
v(d){var x,w,v,u,t,s=this,r=null,q=B.bD(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r),p=B.c(s.f==null?B.e("\u0627\u062e\u062a\u0627\u0631 \u0635\u0646\u062f\u0648\u0642"):B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,C.v0,r,r,r),o=y.D,n=B.a([],o)
for(x=0;x<3;++x){w=s.f===x
v=w?C.nD[x]:C.r
u=new B.aO(24,24)
t=new B.aZ(C.xc,3,C.a5,-1)
if(w){w=s.e
w===$&&B.b()
w=w[x]}else w="\ud83d\udce6"
n.push(new B.cn(new A.bJq(s,x),B.aU(C.W,B.c(w,r,r,r,r,r,D.bMt,r,r,r),C.G,r,r,new B.aF(v,r,new B.dZ(t,t,t,t),new B.ct(u,u,u,u),r,r,C.a0),r,110,r,r,r,r,r,110),20,r,!1,!0,r))}p=B.a([p,C.f3,B.b_(C.aY,n,C.a1,r,C.I,20,20),C.C9],o)
if(s.f!=null)p.push(B.cG(B.c(B.e("\u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gb3A(),r))
return B.bm(q,r,new B.rE(B.bc(B.a2(p,C.y,r,C.t,C.al,0,C.A),r,r,r),r),r,!1,r,r)}}
var z=a.updateTypes(["~()","a7<~>()","f(vz,o?,ad)","E(IU)","Bi()","FX()","Da()","Dq()","B5()","E(os)","E(yy)","yy()"])
A.bbf.prototype={
$0(){var x=this.a
x.d=this.b
x.e=this.c},
$S:0}
A.bbi.prototype={
$1(d){return d.a===this.a.b},
$S:126}
A.bbj.prototype={
$1(d){return d.a===this.a.b},
$S:400}
A.bbk.prototype={
$1(d){var x=this.a.a
x.toString
return x},
$S:10}
A.bbg.prototype={
$1(d){return d.a===this.a.b},
$S:126}
A.bbh.prototype={
$1(d){return d.a===this.a.b},
$S:400}
A.bbl.prototype={
$1(d){return d},
$S:58}
A.bbm.prototype={
$1(d){return d},
$S:58}
A.bbn.prototype={
$0(){return this.a.Lz(this.b.a.c[this.c])},
$S:0}
A.bbo.prototype={
$1(d){return d.a===this.a.b},
$S:1154}
A.bbp.prototype={
$0(){return C.e.gZ($.aAg())},
$S:1155}
A.aRn.prototype={
$3(d,e,f){var x=null
return e==null?C.aW:new B.X(C.mV,B.av(B.a([B.c6(f,C.c6,x,22,x),C.cm,B.c(A.cAB(d)+": ",x,x,x,x,x,D.bNl,x,x,x),B.aY(B.c(e,x,x,x,x,x,C.hJ,x,x,x),1)],y.D),C.y,x,C.t,C.v,0,x),x)},
$S:z+2}
A.aRm.prototype={
$1(d){return C.e.hW($.ua(),new A.aRl(d)).b.$0()},
$S:24}
A.aRl.prototype={
$1(d){return d.a===this.a},
$S:126}
A.bUy.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.bMT.prototype={
$0(){var x=this.a,w=this.b
return $.h().a==="ar"?x:w},
$S:1}
A.bUw.prototype={
$2(d,e){var x=B.bG(new A.bUx(e),null,y.H)
return B.ap(d,!1).bi(x)},
$S:1156}
A.bUx.prototype={
$1(d){return this.a.$0()},
$S:10}
A.bUa.prototype={
$0(){return B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a")},
$S:1}
A.bUb.prototype={
$0(){return D.a7h},
$S:z+4}
A.bUc.prototype={
$0(){return B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f")},
$S:1}
A.bUn.prototype={
$0(){return D.bYo},
$S:z+5}
A.bUp.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646")},
$S:1}
A.bUq.prototype={
$0(){return D.abZ},
$S:1157}
A.bUr.prototype={
$0(){return B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a")},
$S:1}
A.bUs.prototype={
$0(){return D.atk},
$S:z+6}
A.bUt.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629")},
$S:1}
A.bUu.prototype={
$0(){return D.bqT},
$S:1158}
A.bUv.prototype={
$0(){return B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a")},
$S:1}
A.bUd.prototype={
$0(){return new A.Dq(this.a,null)},
$S:z+7}
A.bUe.prototype={
$1(d){return this.a.$2(d,new A.bU9(this.b))},
$S:90}
A.bU9.prototype={
$0(){return new B.Cq(this.a.a[4].$0(),null)},
$S:1160}
A.bUf.prototype={
$1(d){return this.ati(d)},
ati(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:t=u.a
s=u.b
x=3
return B.d(B.Mb(t,"game",s.a),$async$$1)
case 3:if(d.e==null){x=1
break}x=4
return B.d(u.c.$2(d,new A.bU8(s,t,u.d,u.e)),$async$$1)
case 4:case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:90}
A.bU8.prototype={
$0(){var x=this
return x.a.r.$3(x.b,x.c,B.a7M(x.d))},
$S:329}
A.bUg.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0631\u0633\u0645":"Drawing"},
$S:1}
A.bUh.prototype={
$1(d){return this.a.$2(d,new A.bU7(this.b))},
$S:90}
A.bU7.prototype={
$0(){return new B.oi(this.a,null,null)},
$S:364}
A.bUi.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u0643\u0631\u062a\u0648\u0646":"Stories and cartoons"},
$S:1}
A.bUj.prototype={
$1(d){return this.a.$2(d,new A.bU6(this.b))},
$S:90}
A.bU6.prototype={
$0(){return new B.mC(this.a,null)},
$S:1161}
A.bUk.prototype={
$0(){return $.h().a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a \u0631\u062d\u0644\u062a\u064a":"Rehlaty adventures"},
$S:1}
A.bUl.prototype={
$1(d){return this.a.$2(d,new A.bU5(this.b))},
$S:90}
A.bU5.prototype={
$0(){return new A.B5(this.a,null)},
$S:z+8}
A.bUm.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0648\u0627\u0644\u0623\u0635\u062d\u0627\u0628":"Feelings and friends"},
$S:1}
A.bUo.prototype={
$1(d){return this.a.$2(d,new A.bU4(this.b))},
$S:90}
A.bU4.prototype={
$0(){return new B.nr(B.ja("feelings"),this.a,null)},
$S:1162}
A.bT_.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0643\u0644":"All"},
$S:1}
A.bT0.prototype={
$0(){return $.h().a==="ar"?"\u062a\u0641\u0643\u064a\u0631":"Thinking"},
$S:1}
A.bT1.prototype={
$0(){return $.h().a==="ar"?"\u062d\u0631\u0648\u0641":"Letters"},
$S:1}
A.bT2.prototype={
$0(){return $.h().a==="ar"?"\u0623\u0631\u0642\u0627\u0645":"Numbers"},
$S:1}
A.bT3.prototype={
$0(){return $.h().a==="ar"?"\u0623\u0644\u0648\u0627\u0646 \u0648\u0623\u0634\u0643\u0627\u0644":"Colours & shapes"},
$S:1}
A.bT4.prototype={
$0(){return $.h().a==="ar"?"\u062d\u064a\u0648\u0627\u0646\u0627\u062a":"Animals"},
$S:1}
A.bT5.prototype={
$0(){return $.h().a==="ar"?"\u0630\u0627\u0643\u0631\u0629":"Memory"},
$S:1}
A.bT6.prototype={
$0(){return $.h().a==="ar"?"\u0631\u0633\u0645 \u0648\u0642\u0635\u0635":"Draw & stories"},
$S:1}
A.bor.prototype={
$0(){var x=this.a
x.e=this.b
x.f=0},
$S:0}
A.boC.prototype={
$1(d){return this.a.d.p(0,d.a)},
$S:z+9}
A.boD.prototype={
$1(d){return d.a===this.a.e},
$S:z+10}
A.boE.prototype={
$0(){return C.e.gZ(this.a)},
$S:z+11}
A.boF.prototype={
$2(d,e){var x=this,w=e.b,v=e.d,u=w/8.533333333333333,t=C.n.a_(v*0.085,46,58),s=C.n.a_(w*0.055,40,68),r=C.n.a_(w*0.014,6,18),q=u+t+12,p=C.n.a_(v-q-24-12,80,1/0),o=x.b,n=A.czE(w-s*2,p,o.length,r),m=n.c*n.b,l=C.h.a_(C.n.e9(o.length/m),1,99),k=n.a,j=x.a,i=j.d
if(i===$)i=j.d=B.y6(j.a.c.a)
return B.e6(new A.boB(j,w,u,t,s,x.c,x.d,q,p,l,o,m,r,k,k/1.1547169811320754,x.e),i,y.C)},
$S:1163}
A.boB.prototype={
$2(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="learn_next",d="learn_prev",a0=a2.b
if(a0==null)a0=C.ex
x=g.b
w=B.js(0,B.hT(B.qb(B.pY("assets/games/learn_bottom.webp",C.W,f,f,!1,C.cF,C.Ex,f,f,x),0.85),!0,f),f,f,0,0,f,f)
v=B.js(f,B.pY("assets/games/learn_top.webp",C.W,f,f,!1,C.cF,C.Ex,f,f,x),f,f,0,0,0,f)
u=g.c
t=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
s=g.a
x=B.js(f,new B.cn(new A.bov(s,a1),C.is,60,t,!1,!0,D.bUk),u,f,0,f,0,x*0.13)
t=g.e
r=t*0.5
q=y.D
p=B.a([],q)
for(o=g.f,n=o.length,m=y.O,l=g.r.a,k=0;k<o.length;o.length===n||(0,B.w)(o),++k){j=o[k]
i=j.a
p.push(new B.X(C.q7,new A.ave(j,i===l,new A.bow(s,j),new B.N("shelf_"+i,m)),f))}u=B.js(f,B.bc(B.ia(p,f,D.bUj,new B.ae(r,0,r,0),f,C.bl,!0),f,f,f),g.d,f,0,0,u+6,f)
r=g.w
p=g.x
o=g.y
n=new B.a68(0)
l=B.a([w,v,x,u,B.js(f,new E.L9(n,s.r,f,new A.box(s),new B.MG(new A.boy(s,g.z,g.Q,g.as,g.at,g.ax,a0),o,!0,!0,!0,B.c12(),f),C.T,C.U,new B.N("learn_pages_"+l,m)),p,f,t,t,r,f)],q)
if(o>1){x=r+p/2-t/2
w=g.ay
v=w?e:d
t-=6
u=s.f
r=w?u<o-1:u>0
v=B.js(f,new A.a3n(t,!0,r,new A.boz(s,w,o),new B.N(v,m)),f,f,4,f,x,f)
r=w?d:e
u=w?u>0:u<o-1
C.e.O(l,B.a([v,B.js(f,new A.a3n(t,!1,u,new A.boA(s,w,o),new B.N(r,m)),f,f,f,4,x,f)],q))}x=B.a([],q)
for(h=0;h<o;++h){w=h===s.f
v=w?28:12
w=w?C.mI:C.r.jl(0.9)
u=new B.aO(8,8)
x.push(B.xi(f,f,f,C.aP,new B.aF(w,f,f,new B.ct(u,u,u,u),C.Qd,f,C.a0),C.mS,f,12,C.cX,f,v))}l.push(B.js(6,B.av(x,C.y,f,C.bL,C.v,0,f),24,f,0,0,f,f))
return B.e9(C.bB,l,C.U,C.c3,f)},
$S:1164}
A.bov.prototype={
$0(){var x=this.a.a.d.$0()
return x},
$S:0}
A.bow.prototype={
$0(){return this.a.aRv(this.b.a)},
$S:0}
A.box.prototype={
$1(d){var x=this.a
return x.u(new A.bou(x,d))},
$S:14}
A.bou.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.boy.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=l.c,h=B.c9(j,e*i,k,B.a_(j).c).oB(0,i).c9(0)
i=l.d
j=B.a([],y.D)
for(x=B.ly(h,0,y.A),w=J.at(x.a),x=x.b,v=new B.l1(w,x),u=y.O,t=l.e,s=l.f,r=l.r,q=l.a;v.t();){p={}
o=v.c
o=o>=0?new B.Z(x+o,w.gG()):B.ac(B.cU())
p.a=null
n=p.a=o.b
m=n.a
j.push(new A.aqA(n,t,s,o.a,r.p(0,m),q.a.c.a,new A.bot(p,q,d),new B.N("card_"+m,u)))}return B.bc(B.b_(C.aY,j,C.a1,k,C.I,i,i),k,k,k)},
$S:1165}
A.bot.prototype={
$0(){var x=0,w=B.m(y.H),v=this,u
var $async$$0=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:x=2
return B.d(v.a.a.c.$1(v.c),$async$$0)
case 2:u=v.b
if(u.c!=null)u.u(new A.bos(u))
return B.k(null,w)}})
return B.l($async$$0,w)},
$S:3}
A.bos.prototype={
$0(){var x=this.a
return x.d=B.y6(x.a.c.a)},
$S:0}
A.boz.prototype={
$0(){var x=this.b?1:-1
return this.a.ajm(x,this.c)},
$S:0}
A.boA.prototype={
$0(){var x=this.b?-1:1
return this.a.ajm(x,this.c)},
$S:0}
A.bto.prototype={
$0(){},
$S:0}
A.boq.prototype={
$3(d,e,f){return B.akq(B.qb(f,C.n.a_(e,0,1)),0.7+0.3*e)},
$S:324}
A.bdv.prototype={
$0(){var x=this.a.d
x===$&&B.b()
x[this.b]=!0
return!0},
$S:0}
A.bdw.prototype={
$0(){return this.a.d=B.bn(6,!1,!1,y.y)},
$S:0}
A.bdx.prototype={
$1(d){return d},
$S:58}
A.bdy.prototype={
$0(){return this.a.aW9(this.b)},
$S:0}
A.bpj.prototype={
$0(){return this.a.w.C(0,this.b)},
$S:0}
A.bpk.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bpl.prototype={
$0(){var x=this.a
if(++x.x<5)x.aez()},
$S:0}
A.bpn.prototype={
$1(d){var x=this.a
return x.u(new A.bpm(x,this.b))},
$S:4}
A.bpm.prototype={
$0(){var x=this.a
x.e=this.b
x.Yw()},
$S:0}
A.bpo.prototype={
$0(){return this.a.Nn(this.b)},
$S:0}
A.bqM.prototype={
$0(){return this.a.r.C(0,this.b)},
$S:0}
A.bqN.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bqO.prototype={
$0(){var x=this.a
if(++x.w<5)x.af2()},
$S:0}
A.bqP.prototype={
$0(){return this.a.NA(this.b)},
$S:0}
A.bJp.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bJq.prototype={
$0(){return this.a.b1_(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.a0I.prototype,"gaYs","aYt",0)
var w
x(w=A.a2H.prototype,"gaRy","Yw",0)
x(w,"gaRx","Nm",1)
x(w=A.a2S.prototype,"gaSJ","af1",0)
x(w,"gaS2","Nz",1)
x(w=A.a6e.prototype,"gb3z","akG",0)
x(w,"gb3A","b3B",0)})();(function inheritance(){var x=a.inheritMany
x(B.S,[A.B5,A.Vp,A.Bi,A.Da,A.Dq,A.FX])
x(B.W,[A.alz,A.aqB,A.a0I,A.a2H,A.a2S,A.a6e])
x(B.n8,[A.bbf,A.bbn,A.bbp,A.bMT,A.bUa,A.bUb,A.bUc,A.bUn,A.bUp,A.bUq,A.bUr,A.bUs,A.bUt,A.bUu,A.bUv,A.bUd,A.bU9,A.bU8,A.bUg,A.bU7,A.bUi,A.bU6,A.bUk,A.bU5,A.bUm,A.bU4,A.bT_,A.bT0,A.bT1,A.bT2,A.bT3,A.bT4,A.bT5,A.bT6,A.bor,A.boE,A.bov,A.bow,A.bou,A.bot,A.bos,A.boz,A.boA,A.bto,A.bdv,A.bdw,A.bdy,A.bpj,A.bpk,A.bpl,A.bpm,A.bpo,A.bqM,A.bqN,A.bqO,A.bqP,A.bJp,A.bJq])
x(B.jL,[A.bbi,A.bbj,A.bbk,A.bbg,A.bbh,A.bbl,A.bbm,A.bbo,A.aRn,A.aRm,A.aRl,A.bUy,A.bUx,A.bUe,A.bUf,A.bUh,A.bUj,A.bUl,A.bUo,A.boC,A.boD,A.box,A.boq,A.bdx,A.bpn])
x(B.V,[A.aew,A.ave,A.a3n,A.aqA])
x(B.tT,[A.vz,A.LY,A.qt])
x(B.T,[A.ix,A.vh,A.aRk,A.IU,A.os,A.yy,A.en,A.Gz,A.As])
x(B.o9,[A.bUw,A.boF,A.boB,A.boy])})()
B.qQ(b.typeUniverse,JSON.parse('{"B5":{"S":[],"f":[]},"alz":{"W":["B5"]},"aew":{"V":[],"f":[]},"Vp":{"S":[],"f":[]},"aqB":{"W":["Vp"]},"ave":{"V":[],"f":[]},"a3n":{"V":[],"f":[]},"aqA":{"V":[],"f":[]},"Bi":{"S":[],"f":[]},"a0I":{"W":["Bi"]},"Da":{"S":[],"f":[]},"a2H":{"W":["Da"]},"Dq":{"S":[],"f":[]},"a2S":{"W":["Dq"]},"FX":{"S":[],"f":[]},"a6e":{"W":["FX"]}}'))
var y=(function rtii(){var x=B.a4
return{M:x("fI<o>"),I:x("hP"),W:x("x<q>"),X:x("x<os>"),j:x("x<yy>"),p:x("x<ix>"),s:x("x<o>"),D:x("x<f>"),q:x("x<As>"),w:x("x<en>"),t:x("x<r>"),A:x("os"),C:x("bh<o>"),N:x("o"),Y:x("b4<P>"),O:x("N<o>"),r:x("en"),y:x("E"),i:x("P"),z:x("@"),S:x("r"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a7h=new A.Bi(null)
D.acD=new B.q(1,0.6039215686274509,0.8470588235294118,0.9607843137254902,C.q)
D.acI=new B.q(1,0.48627450980392156,0.803921568627451,0.7058823529411765,C.q)
D.ae2=new B.q(1,0.43137254901960786,0.7843137254901961,0.5882352941176471,C.q)
D.bdY=x([D.acD,D.acI,D.ae2],y.W)
D.atm=new B.dS(C.c5,C.cj,C.b9,D.bdY,null,null)
D.a8o=new B.aF(null,null,null,null,null,D.atm,C.a0)
D.abZ=new B.rn(null)
D.aeJ=new B.q(1,0.22745098039215686,0.16470588235294117,0.41568627450980394,C.q)
D.agn=new B.q(1,0.8901960784313725,0.9725490196078431,0.8784313725490196,C.q)
D.akm=new B.b3(38e4)
D.and=new B.ad(61267,"MaterialIcons",!1)
D.anT=new B.ad(63573,"MaterialIcons",!1)
D.aqu=new B.ay(F.yX,18,null,null,null,null)
D.aqE=new B.ay(C.ec,28,C.fp,null,null,null)
D.atk=new A.Da(null)
D.afe=new B.q(1,1,0.8313725490196079,0.35294117647058826,C.q)
D.agb=new B.q(1,0.9607843137254902,0.6274509803921569,0.10196078431372549,C.q)
D.atU=x([D.afe,D.agb],y.W)
D.atx=new B.dS(C.c5,C.cj,C.b9,D.atU,null,null)
D.agx=new B.q(1,0.6039215686274509,0.41568627450980394,0.9411764705882353,C.q)
D.blG=x([D.agx,C.mI],y.W)
D.atE=new B.dS(C.ke,C.mc,C.b9,D.blG,null,null)
D.bjK=x(["ar_letters_see","ar_letters_name","ar_letters_write"],y.s)
D.io=new A.LY(2,"realActivity")
D.bxx=new A.ix(D.io,"picture_book")
D.Q3=x([D.bxx],y.p)
D.b8u=x(["letter_fishing","trace_letters","listen_letter"],y.s)
D.bxw=new A.ix(D.io,"letter_tray")
D.bxy=new A.ix(D.io,"play_dough")
D.aSk=x([D.bxw,D.bxy],y.p)
D.ash=new A.vh("letters",D.bjK,D.Q3,D.b8u,D.aSk)
D.bhc=x(["math_count_10","math_compare","math_dots_order"],y.s)
D.Bs=new A.LY(0,"story")
D.bxu=new A.ix(D.Bs,"three_apples")
D.Xd=new A.ix(D.io,"count_toys")
D.be4=x([D.bxu,D.Xd],y.p)
D.bl7=x(["numerals","compare","connect_four"],y.s)
D.lE=new A.LY(3,"everyday")
D.bxC=new A.ix(D.lE,"count_steps")
D.bf3=x([D.bxC,D.Xd],y.p)
D.asc=new A.vh("numbers",D.bhc,D.be4,D.bl7,D.bf3)
D.bf4=x(["sci_animals_home","sci_animals_food","ar_words_first"],y.s)
D.bxt=new A.ix(D.Bs,"bunny_garden")
D.bxs=new A.ix(D.Bs,"bee_flower")
D.bxE=new A.ix(D.lE,"look_sky")
D.bgq=x([D.bxt,D.bxs,D.bxE],y.p)
D.bgT=x(["animal_habitats","feed_animal","listen_picture"],y.s)
D.bxD=new A.ix(D.lE,"feed_pet")
D.bxH=new A.ix(D.lE,"water_plant")
D.blR=x([D.bxD,D.bxH],y.p)
D.asd=new A.vh("animals",D.bf4,D.bgq,D.bgT,D.blR)
D.blx=x(["logic_planning","life_routine","pos_words"],y.s)
D.bDN=new A.LY(1,"branching")
D.bxv=new A.ix(D.bDN,"boat")
D.Xe=new A.ix(D.io,"day_routine")
D.bhb=x([D.bxv,D.Xe],y.p)
D.bkO=x(["maze","treasure_hunt","next_in_day"],y.s)
D.bxG=new A.ix(D.lE,"toys_basket")
D.bcU=x([D.Xe,D.bxG],y.p)
D.asf=new A.vh("thinking",D.blx,D.bhb,D.bkO,D.bcU)
D.bdD=x(["ar_words_first","ar_words_listen","ar_letters_name"],y.s)
D.bxB=new A.ix(D.io,"sound_box")
D.bfj=x([D.bxB],y.p)
D.bjw=x(["listen_picture","listen_word","listen_letter"],y.s)
D.asg=new A.vh("listening",D.bdD,D.bfj,D.bjw,D.Q3)
D.bmj=x(["shape_names","col_more","shape_size"],y.s)
D.bxz=new A.ix(D.io,"round3")
D.bfi=x([D.bxz],y.p)
D.biI=x(["shape_finder","connect_dots","jigsaw","big_small"],y.s)
D.bxF=new A.ix(D.lE,"shop_colours")
D.bxA=new A.ix(D.io,"sort_color")
D.blD=x([D.bxF,D.bxA],y.p)
D.ase=new A.vh("shapes",D.bmj,D.bfi,D.biI,D.blD)
D.bch=x([D.ash,D.asc,D.asd,D.asf,D.asg,D.ase],B.a4("x<vh>"))
D.bem=x(["\ud83d\udc36","\ud83d\udc31","\ud83d\udc38","\ud83d\udc30","\ud83e\udd81","\ud83d\udc35"],y.s)
D.a8W=new B.ca(0,C.aS,C.eK,C.f1,6)
D.bfW=x([D.a8W],B.a4("x<ca>"))
D.c0i=new A.en("\ud83c\udf4e","\u062a\u0641\u0627\u062d\u0629")
D.c0l=new A.en("\ud83c\udf4c","\u0645\u0648\u0632")
D.c0w=new A.en("\ud83d\udc18","\u0641\u064a\u0644")
D.c0x=new A.en("\ud83c\udf33","\u0634\u062c\u0631\u0629")
D.c0t=new A.en("\ud83d\udc1f","\u0633\u0645\u0643\u0629")
D.c0y=new A.en("\ud83c\udfe0","\u0628\u064a\u062a")
D.c0n=new A.en("\ud83d\udc2a","\u062c\u0645\u0644")
D.c0s=new A.en("\ud83d\udc26","\u0639\u0635\u0641\u0648\u0631")
D.c0F=new A.en("\ud83d\udc31","\u0642\u0637\u0629")
D.b_i=x([D.c0i,D.c0l,D.c0w,D.c0x,D.c0t,D.c0y,D.c0n,D.c0s,D.c0F],y.w)
D.a4g=new A.Gz("ar","\u0639\u0631\u0628\u064a",!0,"\u0623\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a",D.b_i)
D.c0p=new A.en("\ud83c\udf4e","Apple")
D.c0z=new A.en("\ud83d\udc31","Cat")
D.c0o=new A.en("\ud83d\udc36","Dog")
D.c0M=new A.en("\ud83d\udc1f","Fish")
D.c0u=new A.en("\ud83c\udf1e","Sun")
D.c0r=new A.en("\ud83d\udc18","Elephant")
D.c0J=new A.en("\ud83c\udf4c","Banana")
D.c0B=new A.en("\ud83c\udfe0","House")
D.atN=x([D.c0p,D.c0z,D.c0o,D.c0M,D.c0u,D.c0r,D.c0J,D.c0B],y.w)
D.c_9=new A.Gz("en","English",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.atN)
D.c0H=new A.en("\ud83c\udf4e","Apfel")
D.c0A=new A.en("\ud83d\udc31","Katze")
D.c0m=new A.en("\ud83d\udc36","Hund")
D.c0v=new A.en("\ud83d\udc1f","Fisch")
D.c0h=new A.en("\ud83c\udf1e","Sonne")
D.c0j=new A.en("\ud83c\udf33","Baum")
D.c0C=new A.en("\ud83c\udfe0","Haus")
D.c0D=new A.en("\ud83d\udc18","Elefant")
D.aMO=x([D.c0H,D.c0A,D.c0m,D.c0v,D.c0h,D.c0j,D.c0C,D.c0D],y.w)
D.c_a=new A.Gz("de","Deutsch",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.aMO)
D.c0k=new A.en("\ud83c\udf4e","Pomme")
D.c0g=new A.en("\ud83d\udc31","Chat")
D.c0I=new A.en("\ud83d\udc36","Chien")
D.c0E=new A.en("\ud83d\udc1f","Poisson")
D.c0G=new A.en("\ud83c\udf1e","Soleil")
D.c0q=new A.en("\ud83c\udf33","Arbre")
D.c0L=new A.en("\ud83c\udfe0","Maison")
D.c0K=new A.en("\ud83c\udf4c","Banane")
D.bmS=x([D.c0k,D.c0g,D.c0I,D.c0E,D.c0G,D.c0q,D.c0L,D.c0K],y.w)
D.c_b=new A.Gz("fr","Fran\xe7ais",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.bmS)
D.bm2=x([D.a4g,D.c_9,D.c_a,D.c_b],B.a4("x<Gz>"))
D.bqT=new B.t_(null)
D.bxn=new A.vz(0,"discover")
D.bxo=new A.vz(1,"learn")
D.bxp=new A.vz(2,"play")
D.bxq=new A.vz(3,"apply")
D.bxr=new A.vz(4,"celebrate")
D.bre={colors:0,shape_finder:1,jigsaw:2}
D.bF2=new B.fI(D.bre,3,y.M)
D.brl={letters:0,letter_fishing:1,trace_letters:2,word_book:3,listen_letter:4,listen_word:5}
D.bF4=new B.fI(D.brl,6,y.M)
D.brr={animal:0,animal_habitats:1,feed_animal:2,listen_picture:3,balloons:4}
D.bF5=new B.fI(D.brr,5,y.M)
D.brK={balloons:0,animal:1,colors:2,letters:3,memory:4,math:5,snakes_ladders:6,jigsaw:7,maze:8,treasure_hunt:9,connect_dots:10,animal_habitats:11,match_pictures:12,letter_fishing:13,connect_four:14,numerals:15,trace_letters:16,word_book:17,listen_picture:18,listen_word:19,listen_letter:20,odd_one_out:21,pattern:22,compare:23,sort_groups:24,feed_animal:25,big_small:26,next_in_day:27,shape_finder:28,where_ball:29,drawing:30,stories:31,adventures:32,feelings:33}
D.bF6=new B.fI(D.brK,34,y.M)
D.bru={drawing:0,stories:1,adventures:2,feelings:3}
D.bFa=new B.fI(D.bru,4,y.M)
D.brH={memory:0,match_pictures:1,odd_one_out:2}
D.bFb=new B.fI(D.brH,3,y.M)
D.brF={math:0,numerals:1,compare:2,connect_dots:3,big_small:4}
D.bFe=new B.fI(D.brF,5,y.M)
D.brL={maze:0,sort_groups:1,treasure_hunt:2,next_in_day:3,snakes_ladders:4,connect_four:5,where_ball:6,pattern:7}
D.bFn=new B.fI(D.brL,8,y.M)
D.jO=new A.qt(0,"arabic")
D.bIt=new A.qt(1,"english")
D.hD=new A.qt(2,"maths")
D.Cn=new A.qt(3,"science")
D.Co=new A.qt(4,"everyday")
D.jP=new A.qt(5,"logic")
D.bIu=new A.qt(6,"feelings")
D.bIv=new A.qt(7,"creativity")
D.bIw=new A.qt(8,"stories")
D.bK_=new B.C(!0,C.r,null,null,null,null,48,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMa=new B.C(!0,C.r,null,null,null,null,52,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMt=new B.C(!0,null,null,null,null,null,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNl=new B.C(!0,C.P,null,null,null,null,15,C.ac,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNp=new B.C(!0,null,null,null,null,null,40,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bP6=new B.C(!0,null,null,null,null,null,56,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQb=new B.j_("\ud83c\udf4e",null,C.ou,null,null,null,null,null,null,null,null)
D.bSH=new B.N("adventure_progress",y.O)
D.bSI=new B.N("adventure_theme",y.O)
D.bUj=new B.N("learn_shelves",y.O)
D.bUk=new B.N("learning_back",y.O)
D.bUl=new B.N("learning_page",y.O)
D.bUm=new B.N("learning_path",y.O)
D.bYo=new A.FX(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cJi","chr",()=>{var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="artwork for the library words (emoji today)",b2="approved word recordings (device voice today)",b3="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u0644\u0639\u0628\u0629",b4="Five rounds of the game",b5="approved letter-name recordings",b6="approved colour-name recordings",b7="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a",b8="Five rounds",b9="\u0623\u064a\u0651 \u0634\u0643\u0644 \u0644\u0647 \u062b\u0644\u0627\u062b \u0632\u0648\u0627\u064a\u0627\u061f",c0="Which shape has three corners?",c1="\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0644\u0639\u0628\u0629",c2="Finish the game",c3="\u0644\u0627 \u062a\u0648\u062c\u062f \u0644\u0639\u0628\u0629 \u0628\u0639\u062f: \u0645\u062e\u0637\u0651\u0637",c4="No game yet: planned",c5="\u0645\u0627\u0630\u0627 \u0646\u0641\u0639\u0644 \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c6="What do we do next?",c7="\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0623\u062a\u064a \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c8="What comes next?",c9=y.s,d0=B.a(["word_book"],c9),d1=B.a([b1],c9),d2=B.a([b2],c9)
d0=A.fg("ar_words_first",D.jO,1,6,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u062d\u0648\u0644\u064a","I learn the names of things around me","\u0623\u0646\u0638\u0631 \u0625\u0644\u0649 \u0635\u0648\u0631\u0629 \u0648\u0623\u0633\u0645\u0639 \u0627\u0633\u0645\u0647\u0627","Look at a picture and hear its name",B.a(["picture_book"],c9),d1,d2,"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644","Open at least five words",d0,C.L,"\u0627\u0646\u0638\u0631 \u0625\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629. \u0645\u0627 \u0627\u0633\u0645\u0647\u0627\u061f","Look at the picture. What is it called?",C.L,C.L)
d2=B.a(["ar_words_first"],c9)
d1=B.a(["listen_picture"],c9)
w=B.a(["listening"],c9)
w=A.fg("ar_words_listen",D.jO,3,6,"\u0623\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0635\u0648\u0631\u062a\u0647\u0627","I hear a word and pick its picture","\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0635\u062d\u064a\u062d\u0629","Hear a word and pick the right picture",C.L,B.a([b1],c9),B.a([b2],c9),b3,b4,d1,d2,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629.","Hear the word, then pick the picture.",w,C.L)
d2=B.a(["letter_fishing","letters"],c9)
d1=B.a(["letters_ar"],c9)
d1=A.fg("ar_letters_see",D.jO,3,6,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0627\u0644\u062d\u0631\u0641","I recognise the shape of a letter","\u0623\u0635\u0637\u0627\u062f \u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Catch the asked letter",C.L,C.L,B.a([b5],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0645\u0646 \u0627\u0644\u0635\u064a\u062f","Five rounds of letter fishing",d2,C.L,"\u0627\u0635\u0637\u062f \u0627\u0644\u0633\u0645\u0643\u0629 \u0627\u0644\u062a\u064a \u0639\u0644\u064a\u0647\u0627 \u0627\u0644\u062d\u0631\u0641.","Catch the fish that has the letter.",d1,C.L)
d2=B.a(["ar_letters_see"],c9)
v=B.a(["listen_letter"],c9)
u=B.a(["letters_ar"],c9)
u=A.fg("ar_letters_name",D.jO,4,6,"\u0623\u0633\u0645\u0639 \u0627\u0633\u0645 \u0627\u0644\u062d\u0631\u0641 \u0648\u0623\u062e\u062a\u0627\u0631\u0647","I hear a letter name and pick it","\u0623\u0633\u0645\u0639 \u0627\u0633\u0645 \u062d\u0631\u0641 \u0648\u0623\u062e\u062a\u0627\u0631\u0647","Hear a letter name and pick it",C.L,C.L,B.a([b5],c9),b3,b4,v,d2,"\u0627\u0633\u0645\u0639 \u0627\u0633\u0645 \u0627\u0644\u062d\u0631\u0641\u060c \u062b\u0645 \u0627\u062e\u062a\u0631\u0647.","Hear the letter name, then pick it.",u,C.L)
d2=B.a(["ar_letters_see"],c9)
v=B.a(["trace_letters"],c9)
d2=A.fg("ar_letters_write",D.jO,4,6,"\u0623\u062a\u062a\u0628\u0651\u0639 \u0634\u0643\u0644 \u0627\u0644\u062d\u0631\u0641","I trace the shape of a letter","\u0623\u062a\u062a\u0628\u0651\u0639 \u0627\u0644\u062d\u0631\u0641 \u0628\u0625\u0635\u0628\u0639\u064a","Trace the letter with a finger",B.a(["letter_tray","play_dough"],c9),C.L,C.L,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u062a\u062a\u0628\u0651\u0639","Finish the tracing game",v,d2,"\u062a\u062a\u0628\u0651\u0639 \u0627\u0644\u062d\u0631\u0641 \u0628\u0625\u0635\u0628\u0639\u0643 \u0645\u0646 \u0627\u0644\u064a\u0645\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631.","Trace the letter with your finger, right to left.",C.L,C.L)
v=B.a(["ar_letters_name"],c9)
t=B.a(["phonics"],c9)
t=A.fg("ar_letter_sounds",D.jO,4,6,"\u0623\u0633\u0645\u0639 \u0635\u0648\u062a \u0627\u0644\u062d\u0631\u0641","I hear the sound of a letter","\u062f\u0631\u0633 \u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0645\u0648\u062c\u0651\u0647","The guided letter lesson",C.L,C.L,B.a(["recorded isolated letter sounds (84 items silent today)"],c9),"\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u062d\u0631\u0641 \u0628\u0639\u062f \u0627\u0644\u062f\u0631\u0633","Review the letter after the lesson",C.L,v,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u0648\u062a\u060c \u062b\u0645 \u0643\u0631\u0651\u0631\u0647 \u0645\u0639\u064a.","Hear the sound, then say it with me.",t,C.L)
v=B.a(["ar_letters_name"],c9)
s=B.a(["listen_word"],c9)
r=B.a(["listening"],c9)
r=A.fg("ar_listen_word_read",D.jO,5,6,"\u0623\u0642\u0631\u0623 \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u062a\u064a \u0623\u0633\u0645\u0639\u0647\u0627","I read the word I hear","\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0645\u0643\u062a\u0648\u0628\u0647\u0627","Hear a word and pick its written form",C.L,C.L,B.a([b2],c9),b3,b4,s,v,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0643\u062a\u0648\u0628\u0629.","Hear the word, then pick the written one.",r,C.L)
v=B.a(["word_book"],c9)
s=B.a(["english_vocab"],c9)
s=A.fg("en_words_first",D.bIt,2,6,"\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0627\u062a \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0633\u064a\u0637\u0629","I hear simple English words","\u0623\u0641\u062a\u062d \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0643\u062a\u0627\u0628 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629","Open the book words in English",C.L,C.L,B.a(["approved English recordings"],c9),"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a","Open five words",v,C.L,"\u0627\u0641\u062a\u062d \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0627\u0633\u0645\u0639\u0647\u0627 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.","Open the word and hear it in English.",s,C.L)
v=B.a(["colors"],c9)
q=B.a(["colors"],c9)
p=B.a(["color_red","color_blue","color_yellow","color_green"],c9)
o=B.a([b6],c9)
p=A.fg("col_names",D.hD,2,4,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","I learn the colours","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Pick the asked colour",B.a(["shop_colours","sort_color"],c9),C.L,o,"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","Five rounds of the colour game",v,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u064a \u062a\u0633\u0645\u0639\u0647.","Pick the colour you hear.",q,p)
q=B.a(["col_names"],c9)
v=B.a(["shape_finder"],c9)
o=B.a(["shapes","colors"],c9)
n=B.a(["color_orange","color_purple","color_pink","color_brown","color_black","color_white"],c9)
n=A.fg("col_more",D.hD,3,6,"\u0623\u0644\u0648\u0627\u0646 \u0623\u0643\u062b\u0631 \u0648\u0623\u0633\u0645\u0627\u0624\u0647\u0627","More colours and their names","\u0623\u062c\u062f \u0627\u0644\u0644\u0648\u0646 \u0645\u0639 \u0627\u0644\u0634\u0643\u0644","Find the colour with the shape",C.L,B.a(["picture cards for the six extra colours"],c9),B.a([b6],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a (\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0645\u0639\u064b\u0627)","Five rounds (shapes and colours together)",v,q,"\u0623\u064a\u0646 \u0627\u0644\u0645\u062b\u0644\u062b \u0627\u0644\u0623\u062d\u0645\u0631\u061f","Where is the red triangle?",o,n)
o=B.a(["shape_finder","connect_dots"],c9)
q=B.a(["shapes"],c9)
v=B.a(["shape_circle","shape_square","shape_triangle","shape_rectangle","shape_star","shape_heart","shape_diamond"],c9)
m=B.a(["approved shape-name recordings"],c9)
v=A.fg("shape_names",D.hD,2,6,"\u0623\u0639\u0631\u0641 \u0627\u0644\u0623\u0634\u0643\u0627\u0644","I know the shapes","\u0623\u062c\u062f \u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0648\u0627\u0644\u0645\u0631\u0628\u0639 \u0648\u0627\u0644\u0645\u062b\u0644\u062b","Find the circle, square and triangle",B.a(["round3"],c9),C.L,m,b7,b8,o,C.L,"\u0623\u064a\u0646 \u0627\u0644\u062f\u0627\u0626\u0631\u0629\u061f","Where is the circle?",q,v)
q=B.a(["shape_names","math_count_10"],c9)
q=A.fg("shape_corners",D.hD,5,6,"\u0623\u0639\u062f\u0651 \u0632\u0648\u0627\u064a\u0627 \u0627\u0644\u0634\u0643\u0644","I count the corners of a shape",b9,c0,C.L,C.L,C.L,b7,b8,B.a(["shape_finder"],c9),q,b9,c0,B.a(["shapes"],c9),C.L)
o=B.a(["big_small"],c9)
m=B.a(["shapes"],c9)
m=A.fg("shape_size",D.hD,2,6,"\u0623\u0645\u064a\u0651\u0632 \u0627\u0644\u0643\u0628\u064a\u0631 \u0645\u0646 \u0627\u0644\u0635\u063a\u064a\u0631","I tell big from small","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0623\u0643\u0628\u0631 \u0623\u0648 \u0627\u0644\u0623\u0635\u063a\u0631","Pick the bigger or the smaller",C.L,B.a(["real artwork pairs (emoji today)"],c9),C.L,b7,b8,o,C.L,"\u0623\u064a\u0647\u0645\u0627 \u0627\u0644\u0643\u0628\u064a\u0631\u061f","Which one is big?",m,C.L)
o=B.a(["numerals","math"],c9)
l=B.a(["counting"],c9)
k=B.a(["num_1","num_2","num_3","num_4","num_5","num_6","num_7","num_8","num_9","num_10"],c9)
j=B.a(["approved number recordings"],c9)
k=A.fg("math_count_10",D.hD,3,6,"\u0623\u0639\u062f\u0651 \u062d\u062a\u0649 \u0661\u0660","I count to 10","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0635\u062d\u064a\u062d","Pick the right numeral",B.a(["count_toys","count_steps"],c9),C.L,j,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","Finish the numerals game",o,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.","Pick the matching numeral.",l,k)
l=A.fg("math_dots_order",D.hD,3,6,"\u0623\u0631\u062a\u0651\u0628 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","I put numbers in order","\u0623\u0648\u0635\u0651\u0644 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628","Join the dots in order",C.L,C.L,C.L,"\u0631\u0633\u0645 \u062b\u0644\u0627\u062b \u0635\u0648\u0631","Draw three pictures",B.a(["connect_dots"],c9),C.L,"\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628: \u0661\u060c \u0662\u060c \u0663...","Tap the dots in order: 1, 2, 3...",B.a(["counting"],c9),C.L)
o=B.a(["math_count_10"],c9)
o=A.fg("math_compare",D.hD,3,6,"\u0623\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0627\u0644\u0643\u0645\u0651\u064a\u0627\u062a","I compare quantities","\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631 \u0623\u0648 \u0623\u0642\u0644","Which group has more or fewer",C.L,C.L,C.L,b7,b8,B.a(["compare"],c9),o,"\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631\u061f","Which group has more?",B.a(["counting"],c9),C.L)
j=B.a(["math_count_10"],c9)
j=A.fg("math_board",D.hD,4,6,"\u0623\u0639\u062f\u0651 \u0648\u0623\u0646\u062a\u0638\u0631 \u062f\u0648\u0631\u064a","I count and wait my turn","\u0623\u062a\u062d\u0631\u0643 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u0644\u0639\u0628","Move along a game board",C.L,C.L,C.L,c1,c2,B.a(["snakes_ladders"],c9),j,"\u0627\u0631\u0645\u0650 \u0627\u0644\u0646\u0631\u062f \u0648\u062a\u062d\u0631\u0651\u0643 \u0628\u0639\u062f\u062f \u0627\u0644\u0646\u0642\u0627\u0637.","Roll the dice and move that many.",C.L,C.L)
i=B.a(["where_ball","treasure_hunt"],c9)
h=B.a(["spatial"],c9)
g=B.a(["pos_above","pos_below","pos_inside","pos_beside","pos_outside","pos_front","pos_behind"],c9)
f=B.a(["\xab\u0623\u0645\u0627\u0645\xbb \u0648\xab\u062e\u0644\u0641\xbb \u0648\xab\u062e\u0627\u0631\u062c\xbb scenes"],c9)
e=B.a(["approved position-word recordings"],c9)
g=A.fg("pos_words",D.jP,3,6,"\u0641\u0648\u0642 \u0648\u062a\u062d\u062a \u0648\u062f\u0627\u062e\u0644 \u0648\u0628\u062c\u0627\u0646\u0628","On top, under, inside and next to","\u0623\u062c\u062f \u0623\u064a\u0646 \u0627\u0644\u0643\u0631\u0629","Find where the ball is",B.a(["toys_basket"],c9),f,e,b7,b8,i,C.L,"\u0623\u064a\u0646 \u0627\u0644\u0643\u0631\u0629\u061f \u0627\u0644\u0643\u0631\u0629 \u062a\u062d\u062a \u0627\u0644\u0637\u0627\u0648\u0644\u0629.","Where is the ball? The ball is under the table.",h,g)
h=A.fg("pos_fit",D.jP,3,6,"\u0623\u0631\u0643\u0651\u0628 \u0627\u0644\u0635\u0648\u0631\u0629","I fit the picture together","\u0623\u0636\u0639 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0641\u064a \u0645\u0643\u0627\u0646\u0647\u0627","Put each piece in its place",C.L,C.L,C.L,"\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629","Complete the picture",B.a(["jigsaw"],c9),C.L,"\u0636\u0639 \u0627\u0644\u0642\u0637\u0639\u0629 \u0641\u064a \u0645\u0643\u0627\u0646\u0647\u0627.","Put the piece in its place.",B.a(["spatial"],c9),C.L)
i=B.a(["animal_habitats"],c9)
e=B.a(["nature"],c9)
f=B.a([b1],c9)
e=A.fg("sci_animals_home",D.Cn,3,6,"\u0623\u064a\u0646 \u062a\u0639\u064a\u0634 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a\u061f","Where do animals live?","\u0623\u0636\u0639 \u0627\u0644\u062d\u064a\u0648\u0627\u0646 \u0641\u064a \u0628\u064a\u062a\u0647","Put the animal in its home",B.a(["nature_walk"],c9),f,C.L,c1,c2,i,C.L,"\u0623\u064a\u0646 \u064a\u0639\u064a\u0634 \u0647\u0630\u0627 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f","Where does this animal live?",e,C.L)
i=B.a(["feed_animal"],c9)
f=B.a(["nature"],c9)
d=B.a([b1],c9)
f=A.fg("sci_animals_food",D.Cn,2,6,"\u0645\u0627\u0630\u0627 \u064a\u0623\u0643\u0644 \u0643\u0644 \u062d\u064a\u0648\u0627\u0646\u061f","What does each animal eat?","\u0623\u0637\u0639\u0645 \u0627\u0644\u062d\u064a\u0648\u0627\u0646 \u0637\u0639\u0627\u0645\u0647","Feed the animal its food",B.a(["feed_pet","water_plant"],c9),d,C.L,b7,b8,i,C.L,"\u0645\u0627\u0630\u0627 \u064a\u0623\u0643\u0644 \u0647\u0630\u0627 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f","What does this animal eat?",f,C.L)
i=A.fg("sci_plants",D.Cn,3,6,"\u0623\u0631\u0627\u0642\u0628 \u0627\u0644\u0646\u0628\u0627\u062a","I watch a plant grow","\u0623\u0633\u0642\u064a \u0646\u0628\u062a\u0629 \u0648\u0623\u0631\u0627\u0642\u0628\u0647\u0627","Water a plant and watch it",B.a(["water_plant","plant_watch","leaf_hunt"],c9),C.L,C.L,"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0648\u0627\u0644\u062f \u0644\u0644\u0646\u0634\u0627\u0637","A parent confirms the activity",C.L,C.L,"\u0627\u0633\u0642\u0650 \u0627\u0644\u0646\u0628\u062a\u0629 \u0643\u0644 \u064a\u0648\u0645 \u0648\u0627\u0646\u0638\u0631 \u0643\u064a\u0641 \u062a\u0643\u0628\u0631.","Water the plant every day and see it grow.",C.L,C.L)
d=B.a(["fam_mother","fam_father","fam_baby","fam_brother","fam_sister","fam_grandfather","fam_grandmother","fam_uncle","fam_aunt"],c9)
a0=B.a(["family pictures drawn in Rehlaty style (no photos)"],c9)
a1=B.a(["approved family-word recordings"],c9)
d=A.fg("fam_names",D.Co,1,6,"\u0623\u0641\u0631\u0627\u062f \u0639\u0627\u0626\u0644\u062a\u064a","The people in my family","\u0623\u0633\u0645\u0651\u064a \u0645\u0646 \u0641\u064a \u0639\u0627\u0626\u0644\u062a\u064a","Name the people in my family",B.a(["my_name_address"],c9),a0,a1,c3,c4,C.L,C.L,"\u0645\u0646 \u0647\u0630\u0627\u061f \u0647\u0630\u0647 \u0645\u0627\u0645\u0627.","Who is this? This is Mum.",C.L,d)
a1=B.a(["clo_shirt","clo_trousers","clo_dress","clo_socks","clo_coat","clo_pyjamas","clo_bag","clo_scarf"],c9)
a0=B.a(["clothes pictures"],c9)
a2=B.a(["approved clothes-word recordings"],c9)
a1=A.fg("clo_names",D.Co,2,6,"\u0645\u0644\u0627\u0628\u0633\u064a","My clothes","\u0623\u0633\u0645\u0651\u064a \u0645\u0644\u0627\u0628\u0633\u064a \u0648\u0623\u0631\u062a\u062f\u064a \u0645\u0627 \u064a\u0646\u0627\u0633\u0628 \u0627\u0644\u0637\u0642\u0633","Name my clothes and dress for the weather",B.a(["dress_self","sort_socks","sort_laundry"],c9),a0,a2,c3,c4,C.L,C.L,"\u0645\u0627\u0630\u0627 \u0646\u0644\u0628\u0633 \u0627\u0644\u064a\u0648\u0645\u061f","What do we wear today?",C.L,a1)
a2=B.a(["next_in_day"],c9)
a0=B.a(["sequence"],c9)
a3=B.a(["routine pictures"],c9)
a0=A.fg("life_routine",D.Co,3,6,"\u0623\u0631\u062a\u0651\u0628 \u064a\u0648\u0645\u064a","I order my day",c5,c6,B.a(["day_routine","brush_teeth","wash_hands"],c9),a3,C.L,b7,b8,a2,C.L,c5,c6,a0,C.L)
a2=A.fg("logic_odd",D.jP,3,6,"\u0623\u062c\u062f \u0627\u0644\u0645\u062e\u062a\u0644\u0641","I find the odd one out","\u062b\u0644\u0627\u062b \u0635\u0648\u0631 \u0645\u062a\u0634\u0627\u0628\u0647\u0629 \u0648\u0648\u0627\u062d\u062f\u0629 \u0645\u062e\u062a\u0644\u0641\u0629","Three alike, one different",C.L,C.L,C.L,b7,b8,B.a(["odd_one_out"],c9),C.L,"\u0623\u064a\u0651 \u0635\u0648\u0631\u0629 \u0645\u062e\u062a\u0644\u0641\u0629\u061f","Which picture is different?",B.a(["shapes"],c9),C.L)
a3=A.fg("logic_pattern",D.jP,4,6,"\u0623\u0643\u0645\u0644 \u0627\u0644\u0646\u0645\u0637","I complete the pattern",c7,c8,C.L,C.L,C.L,b7,b8,B.a(["pattern"],c9),C.L,c7,c8,B.a(["sequence"],c9),C.L)
a4=B.a(["sort_groups"],c9)
a5=B.a(["vocab"],c9)
a5=A.fg("logic_sort",D.jP,4,6,"\u0623\u0635\u0646\u0651\u0641 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u0627\u062a","I sort into groups","\u0623\u0636\u0639 \u0643\u0644 \u0634\u064a\u0621 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u062a\u0647","Put each thing in its group",B.a(["sort_color","socks_pairs"],c9),C.L,C.L,b7,b8,a4,C.L,"\u0636\u0639 \u0643\u0644 \u0634\u064a\u0621 \u0645\u0639 \u0623\u0645\u062b\u0627\u0644\u0647.","Put each thing with its kind.",a5,C.L)
a4=A.fg("logic_memory",D.jP,3,6,"\u0623\u062a\u0630\u0643\u0651\u0631 \u0627\u0644\u0623\u0632\u0648\u0627\u062c","I remember pairs","\u0623\u0644\u0639\u0628 \u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629","Play the memory game",C.L,C.L,C.L,c1,c2,B.a(["memory","match_pictures"],c9),C.L,"\u0627\u0642\u0644\u0628 \u0628\u0637\u0627\u0642\u062a\u064a\u0646 \u0648\u0627\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0632\u0648\u062c.","Turn two cards and find the pair.",B.a(["memory"],c9),C.L)
a6=A.fg("logic_planning",D.jP,4,6,"\u0623\u062e\u0637\u0651\u0637 \u0637\u0631\u064a\u0642\u064a","I plan my way","\u0623\u062c\u062f \u0627\u0644\u0637\u0631\u064a\u0642 \u0641\u064a \u0627\u0644\u0645\u062a\u0627\u0647\u0629","Find the way through the maze",C.L,C.L,C.L,c1,c2,B.a(["maze"],c9),C.L,"\u0633\u0627\u0639\u062f \u0627\u0644\u0641\u0623\u0631 \u0644\u064a\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u062c\u0628\u0646.","Help the mouse reach the cheese.",C.L,C.L)
a7=B.a(["feelings"],c9)
a8=B.a(["reviewed Adam and Nour dialogue recordings"],c9)
a7=A.fg("emo_feelings",D.bIu,3,6,"\u0623\u0633\u0645\u0651\u064a \u0634\u0639\u0648\u0631\u064a \u0648\u0623\u062a\u0635\u0631\u0641 \u0628\u0644\u0637\u0641","I name my feeling and act kindly","\u0645\u0648\u0627\u0642\u0641 \u0642\u0635\u064a\u0631\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0627\u0639\u0631","Short feelings scenarios",B.a(["three_good","thank_card"],c9),C.L,a8,"\u0625\u0646\u0647\u0627\u0621 \u0645\u0633\u062a\u0648\u0649","Finish a level",C.L,C.L,"\u0643\u064a\u0641 \u064a\u0634\u0639\u0631 \u0647\u0630\u0627 \u0627\u0644\u0637\u0641\u0644\u061f","How does this child feel?",a7,C.L)
a8=A.fg("art_free",D.bIv,2,6,"\u0623\u0631\u0633\u0645 \u0648\u0623\u0639\u0628\u0651\u0631","I draw and express myself","\u0623\u0631\u0633\u0645 \u062b\u0645 \u0623\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Draw then press \u201cdone\u201d",B.a(["play_dough"],c9),C.L,C.L,"\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Pressing \u201cdone\u201d",C.L,C.L,"\u0627\u0631\u0633\u0645 \u0645\u0627 \u062a\u062d\u0628.","Draw what you like.",C.L,C.L)
a9=B.a(["story"],c9)
b0=B.a(["recorded narration (device voice today)"],c9)
return B.a([d0,w,d1,u,d2,t,r,s,p,n,v,q,m,k,l,o,j,g,h,e,f,i,d,a1,a0,a2,a3,a5,a4,a6,a7,a8,A.fg("story_listen",D.bIw,1,6,"\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629 \u0642\u0635\u064a\u0631\u0629","I listen to a short story","\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629","Listen to a story",C.L,B.a(["only 2 stories fit ages 1\u20132"],c9),b0,"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0642\u0635\u0629 (\u0627\u0633\u062a\u0645\u0627\u0639 \u0641\u0642\u0637\u060c \u0644\u0627 \u064a\u064f\u0639\u062f\u0651 \u0625\u062a\u0642\u0627\u0646\u064b\u0627)","Finishing a story (listening only, never counted as mastery)",C.L,C.L,"\u0647\u064a\u0627 \u0646\u0633\u0645\u0639 \u0642\u0635\u0629.","Let's hear a story.",a9,C.L)],B.a4("x<IU>"))})
x($,"cJy","chs",()=>B.a([A.D7("all","\u2728",new A.bT_(),C.ex),A.D7("brain","\ud83e\udde0",new A.bT0(),D.bFn),A.D7("letters","\ud83d\udd24",new A.bT1(),D.bF4),A.D7("numbers","\ud83d\udd22",new A.bT2(),D.bFe),A.D7("shapes","\ud83c\udfa8",new A.bT3(),D.bF2),A.D7("animals","\ud83e\udd81",new A.bT4(),D.bF5),A.D7("observe","\ud83e\udde9",new A.bT5(),D.bFb),A.D7("create","\ud83d\udd8d\ufe0f",new A.bT6(),D.bFa)],y.j))})()};
(a=>{a["UXow780CrZfvkNXmTpV/fUYdKuQ="]=a.current})($__dart_deferred_initializers__);