((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,A={AX:function AX(d,e){this.c=d
this.a=e},alh:function alh(d){var _=this
_.d=null
_.e=d
_.c=_.a=null},baJ:function baJ(d,e,f){this.a=d
this.b=e
this.c=f},baM:function baM(d){this.a=d},baN:function baN(d){this.a=d},baO:function baO(d){this.a=d},baK:function baK(d){this.a=d},baL:function baL(d){this.a=d},baP:function baP(){},baQ:function baQ(){},baR:function baR(d,e,f){this.a=d
this.b=e
this.c=f},baS:function baS(d){this.a=d},baT:function baT(){},aeh:function aeh(d,e,f){this.c=d
this.d=e
this.a=f},aQV:function aQV(){},aQU:function aQU(){},aQT:function aQT(d){this.a=d},
cyI(d){var x,w
for(x=0;x<6;++x){w=D.bbJ[x]
if(w.a===d)return w}return null},
czX(d,e){var x,w,v,u,t,s
switch(d.a.a){case 0:for(x=$.bWg(),w=d.b,v=0;v<11;++v){u=x[v]
if(u.a===w){x=e>=u.e&&e<=u.f
return new B.GD(x,u.b)}}break
case 1:for(x=$.c1u(),w=d.b,v=0;v<2;++v){u=x[v]
if(u.a===w){x=u.b.$0()
return new B.GD(e>=u.c&&e<=u.d,x)}}break
case 2:for(x=d.b,v=0;v<17;++v){t=C.tr[v]
if(t.a===x){x=B.e(t.b)
return new B.GD(e>=t.d&&e<=t.e,x)}}break
case 3:for(x=$.c1y(),w=d.b,v=0;v<17;++v){s=x[v]
if(s.a===w){x=s.f.$0()
return new B.GD(e>=s.d&&e<=s.e,x)}}break}return null},
ccm(d,e){var x,w,v,u
for(x=d.length,w=null,v=0;v<x;++v){u=A.czX(d[v],e)
if(u==null)continue
if(w==null)w=u
if(u.a)return u}return w},
cyH(d,e){var x,w,v,u,t
for(x=d.b,w=0;w<3;++w){v=x[w]
u=$.cgv()
t=B.yh(new B.ap(u,new A.bTD(v),B.a_(u).i("ap<1>")))
if(t!=null&&e>=t.c&&e<=t.d)return t}return null},
czC(d){var x
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
cyJ(d,e,f){var x,w,v,u,t,s,r,q=A.cyI(d.a)
if(q==null)return null
x=A.ccm(q.c,e)
x=x==null?null:x.b
w=A.cyH(q,e)
v=B.a([],y.s)
for(u=q.d,t=u.length,s=0;s<t;++s){r=u[s]
if(f.p(0,r))v.push(r)}u=A.ccm(q.e,e)
return new A.aQS(x,w,v,u==null?null:u.b)},
vt:function vt(d,e){this.a=d
this.b=e},
LH:function LH(d,e){this.a=d
this.b=e},
iw:function iw(d,e){this.a=d
this.b=e},
vb:function vb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTD:function bTD(d){this.a=d},
aQS:function aQS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fd(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return new A.IH(d,f,g,new A.bM1(h,i))},
qr:function qr(d,e){this.a=d
this.b=e},
IH:function IH(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
bM1:function bM1(d,e){this.a=d
this.b=e},
cyF(d){var x,w,v,u,t,s=d.c,r=d.a,q=new A.bTB(),p=[new B.le(["balloons",new A.bTf(),1,2,new A.bTg()]),new B.le(["animal",new A.bTh(),1,2,new A.bTs()]),new B.le(["colors",new A.bTu(),2,3,new A.bTv()]),new B.le(["letters",new A.bTw(),3,8,new A.bTx()]),new B.le(["memory",new A.bTy(),3,6,new A.bTz()]),new B.le(["math",new A.bTA(),4,12,new A.bTi(s)])],o=B.a([],y.X)
for(x=0;x<6;++x){w=p[x]
v=w.a
if(s>=v[2]&&s<=v[3])o.push(new A.oq(v[0],v[1],new A.bTj(q,w),!1))}for(v=B.c_L(s),u=v.length,x=0;x<v.length;v.length===u||(0,B.w)(v),++x){w=v[x]
t=w.a
if(D.bEZ.p(0,t))o.push(new A.oq(t,w.b,new A.bTk(r,w,q,s,d),!0))}o.push(new A.oq("drawing",new A.bTl(),new A.bTm(q,d),!1))
o.push(new A.oq("stories",new A.bTn(),new A.bTo(q,d),!1))
o.push(new A.oq("adventures",new A.bTp(),new A.bTq(q,d),!1))
o.push(new A.oq("feelings",new A.bTr(),new A.bTt(q,d),!1))
return o},
CY(d,e,f,g){return new A.yo(d,e,f,g)},
cyG(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=new B.OV(0,2,1)
for(x=d+g,w=(d-g)/2,v=-1,u=1;u<=3;++u){t=(e-g*(u-1))/u
s=t*1.1547169811320754
r=s>320?320:s
q=C.n.eK(x/(r+g))
if(q<2){s=w/1.1547169811320754>t?s:w
q=2}else s=r
p=s*s*C.h.a_(u*q,1,f)
if(s>=110&&p>v){o=new B.OV(s,q,u)
v=p}}return v<0?new B.OV(w,2,1):o},
clM(d,e,f){return new A.Va(d,f,e)},
oq:function oq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTB:function bTB(){},
bTC:function bTC(d){this.a=d},
bTf:function bTf(){},
bTg:function bTg(){},
bTh:function bTh(){},
bTs:function bTs(){},
bTu:function bTu(){},
bTv:function bTv(){},
bTw:function bTw(){},
bTx:function bTx(){},
bTy:function bTy(){},
bTz:function bTz(){},
bTA:function bTA(){},
bTi:function bTi(d){this.a=d},
bTj:function bTj(d,e){this.a=d
this.b=e},
bTe:function bTe(d){this.a=d},
bTk:function bTk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTd:function bTd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTl:function bTl(){},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTc:function bTc(d){this.a=d},
bTn:function bTn(){},
bTo:function bTo(d,e){this.a=d
this.b=e},
bTb:function bTb(d){this.a=d},
bTp:function bTp(){},
bTq:function bTq(d,e){this.a=d
this.b=e},
bTa:function bTa(d){this.a=d},
bTr:function bTr(){},
bTt:function bTt(d,e){this.a=d
this.b=e},
bT9:function bT9(d){this.a=d},
yo:function yo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSb:function bSb(){},
bSc:function bSc(){},
bSd:function bSd(){},
bSe:function bSe(){},
bSf:function bSf(){},
bSg:function bSg(){},
bSh:function bSh(){},
bSi:function bSi(){},
Va:function Va(d,e,f){this.c=d
this.d=e
this.a=f},
aqi:function aqi(d){var _=this
_.d=$
_.e="all"
_.f=0
_.r=d
_.c=_.a=null},
bnW:function bnW(d,e){this.a=d
this.b=e},
bo6:function bo6(d){this.a=d},
bo7:function bo7(d){this.a=d},
bo8:function bo8(d){this.a=d},
bo9:function bo9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bo5:function bo5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
bo_:function bo_(d,e){this.a=d
this.b=e},
bo0:function bo0(d,e){this.a=d
this.b=e},
bo1:function bo1(d){this.a=d},
bnZ:function bnZ(d,e){this.a=d
this.b=e},
bo2:function bo2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bnY:function bnY(d,e,f){this.a=d
this.b=e
this.c=f},
bnX:function bnX(d){this.a=d},
bo3:function bo3(d,e,f){this.a=d
this.b=e
this.c=f},
bo4:function bo4(d,e,f){this.a=d
this.b=e
this.c=f},
auV:function auV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3a:function a3a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bsT:function bsT(){},
aqh:function aqh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bnV:function bnV(){},
Ba:function Ba(d){this.a=d},
a0v:function a0v(){this.d=$
this.c=this.a=null},
bcZ:function bcZ(d,e){this.a=d
this.b=e},
bd_:function bd_(d){this.a=d},
bd0:function bd0(){},
bd1:function bd1(d,e){this.a=d
this.b=e},
en:function en(d,e){this.a=d
this.b=e},
Gm:function Gm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D0:function D0(d){this.a=d},
a2u:function a2u(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=$
_.w=f
_.x=0
_.z=_.y=!1
_.c=_.a=null},
boO:function boO(d,e){this.a=d
this.b=e},
boP:function boP(d){this.a=d},
boQ:function boQ(d){this.a=d},
boS:function boS(d,e){this.a=d
this.b=e},
boR:function boR(d,e){this.a=d
this.b=e},
boT:function boT(d,e){this.a=d
this.b=e},
Ai:function Ai(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dg:function Dg(d,e){this.c=d
this.a=e},
a2F:function a2F(d,e){var _=this
_.d=d
_.f=_.e=$
_.r=e
_.w=0
_.y=_.x=!1
_.c=_.a=null},
bqg:function bqg(d,e){this.a=d
this.b=e},
bqh:function bqh(d){this.a=d},
bqi:function bqi(d){this.a=d},
bqj:function bqj(d,e){this.a=d
this.b=e},
FJ:function FJ(d){this.a=d},
a60:function a60(d){var _=this
_.d=d
_.e=$
_.f=null
_.r=0
_.c=_.a=null},
bIy:function bIy(d,e){this.a=d
this.b=e},
bIz:function bIz(d,e){this.a=d
this.b=e}},D
J=c[1]
B=c[0]
C=c[2]
E=c[10]
F=c[18]
A=a.updateHolder(c[6],A)
D=c[17]
A.AX.prototype={
S(){var x=y.N
return new A.alh(B.A(x,x))}}
A.alh.prototype={
ae(){this.aw()
this.An()},
An(){var x=0,w=B.m(y.H),v=this,u,t,s
var $async$An=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:u=v.a.c
x=2
return B.d(B.r3(u.a,u.c,!0,$.m1().e),$async$An)
case 2:t=e
x=3
return B.d(B.Qj(v.a.c.a),$async$An)
case 3:s=e
if(v.c!=null)v.u(new A.baJ(v,t,s))
return B.k(null,w)}})
return B.l($async$An,w)},
Lv(d){return this.aTY(d)},
aTY(d){var x=0,w=B.m(y.H),v=this,u,t,s,r
var $async$Lv=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:r={}
r.a=null
if(d.a==="game"){u=C.e.hV($.u5(),new A.baM(d))
t=v.a.c
r.a=u.r.$3(t.a,t.c,$.h().a)}else{s=C.e.hV(B.Hd(),new A.baN(d))
r.a=B.b55(v.a.c,s)}t=v.c
t.toString
r=B.bF(new A.baO(r),null,y.H)
x=2
return B.d(B.an(t,!1).bh(r),$async$Lv)
case 2:if(v.c!=null)v.An()
return B.k(null,w)}})
return B.l($async$Lv,w)},
a8L(d){return d.a==="game"?C.e.hV($.u5(),new A.baK(d)).b.$0():C.e.hV(B.Hd(),new A.baL(d)).b},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=$.h(),g=B.bC(j,!0,j,j,j,j,j,j,B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"Weekly adventure",j,j,j,j,j,j,j,j,j),j)
if(i==null)h=C.bh
else{x=B.a8(170,C.dA.q()>>>16&255,C.dA.q()>>>8&255,C.dA.q()&255)
w=i.a
v=w.b
u=B.c(v.b.$0(),j,j,j,j,j,C.eA,C.a3,j,j)
t=B.c(v.c.$0(),j,j,j,j,j,C.hI,C.a3,j,j)
if(i.c)s=h.a==="ar"?"\u062e\u0644\u0635\u062a \u0645\u063a\u0627\u0645\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639!":"You finished this week's adventure!"
else{s=i.b
r=B.a_(s).i("ap<1>")
q="\u062e\u0644\u0635\u062a "+new B.ap(s,new A.baP(),r).gA(0)+" \u0645\u0646 "+s.length+". \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0639\u062c\u0627\u0644."
s="Finished "+new B.ap(s,new A.baQ(),r).gA(0)+" of "+s.length+". No rush."
if(h.a==="ar")s=q}r=y.D
x=B.a([new B.bV(B.a3(B.a([u,t,C.b3,B.c(s,D.bSC,j,j,j,j,C.a2c,j,j,j)],r),C.y,j,C.r,C.w,0,C.A),x,C.a9,C.aM,j,24,j,D.bSD)],r)
u=i.e
if(u!=null)x.push(new B.X(C.fK,new B.Bt(u,96,j),j))
x.push(C.c2)
w=w.c
if(w.length===0)x.push(B.c(h.a==="ar"?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0644\u0639\u0627\u0628 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u0631 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639. \u062c\u0631\u0651\u0628 \u0627\u0643\u062a\u0634\u0641 \u0645\u0639 \u0645\u0627\u0645\u0627 \u0648\u0628\u0627\u0628\u0627.":"No games fit this age this week. Try discovering with mum and dad.",j,j,j,j,j,j,C.a3,j,j))
for(u=i.b,t=y.O,p=0;p<w.length;++p){s=k.a8L(w[p])
q=u[p]
if(q)o=h.a==="ar"?"\u062a\u0645":"done"
else o=h.a==="ar"?"\u0644\u0645 \u064a\u062a\u0645 \u0628\u0639\u062f":"not yet"
n=q?D.afS:C.t
m=q?C.ec:D.amF
m=B.c6(m,q?C.p9:C.a9,j,32,j)
l=B.c(k.a8L(w[p]),j,j,j,j,j,C.jU,j,j,j)
x.push(new B.X(C.fJ,new B.cv(new A.baR(k,i,p),new B.bV(B.az(B.a([m,C.bs,new B.f7(1,C.bZ,l,j),B.c6(w[p].a==="story"?C.qr:C.qt,C.O,j,j,j)],r),C.y,j,C.r,C.w,0,j),n,C.a9,C.aM,j,24,j,new B.O("adventure_step_"+p,t)),20,s+", "+o,!1,!0,j),j))}x.push(new A.aeh(v,k.a.c.c,j))
w=k.e
if(w.gc2(w)){w=B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a\u064a":"My adventures",j,j,j,j,j,C.ey,j,j,j)
v=B.a([],r)
for(h=k.e.gcL(),h=h.c8(h),u=B.a_(h).i("cA<1>"),h=new B.cA(h,u),h=new B.ba(h,h.gA(0),u.i("ba<al.E>")),u=u.i("al.E");h.t();){s=h.d
if(s==null)s=u.a(s)
v.push(B.n3(D.apZ,j,new B.O("adventure_past_"+s.a,t),B.c(C.e.k9($.azU(),new A.baS(s),new A.baT()).b.$0(),j,j,j,j,j,j,j,j,j),j,j))}C.e.O(x,B.a([C.a8,w,C.b3,B.b_(C.I,v,C.a0,j,C.I,8,8)],r))}h=B.i9(x,j,j,C.ar,j,C.ad,!1)}return B.bm(g,j,h,j,!1,j,j)}}
A.aeh.prototype={
v(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=B.aa(y.N)
for(x=$.u5(),w=this.d,v=0;v<24;++v){u=x[v]
if(w>=u.e&&w<=u.f)m.C(0,u.a)}t=A.cyJ(this.c,w,m)
if(t==null)return C.aW
m=new A.aQV()
x=$.h()
w=B.c(x.a==="ar"?"\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0639\u0644\u0651\u0645":"Learning path",n,n,n,n,n,C.a2_,n,n,n)
s=m.$3(D.bwm,t.b,C.qn)
r=t.c
r=m.$3(D.bwn,r==null?n:r.e.$0(),D.ank)
q=t.d
q=m.$3(D.bwo,q.length===0?n:new B.a2(q,new A.aQU(),B.a_(q).i("a2<1,n>")).aC(0,B.e("\u060c ")),C.qt)
p=t.e
if(p==null)p=n
else{o=x.a==="ar"?"\u0645\u0639 \u0634\u062e\u0635 \u0628\u0627\u0644\u063a":"with a grown-up"
o=p+" ("+o+")"
p=o}p=m.$3(D.bwp,p,C.yQ)
return new B.X(C.fK,new B.bV(B.a3(B.a([w,s,r,q,p,m.$3(D.bwq,x.a==="ar"?"\u0639\u0646\u062f \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u064a\u064f\u0633\u062c\u064e\u0651\u0644 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"When the steps are done the week's adventure is recorded",C.IT)],y.D),C.X,n,C.r,C.w,0,C.A),C.t,C.a9,C.aM,n,24,n,D.bUj),n)}}
A.vt.prototype={
H(){return"PhaseKind."+this.b}}
A.LH.prototype={
H(){return"RefKind."+this.b}}
A.iw.prototype={}
A.vb.prototype={}
A.aQS.prototype={}
A.qr.prototype={
H(){return"Strand."+this.b}}
A.IH.prototype={}
A.oq.prototype={}
A.yo.prototype={}
A.Va.prototype={
S(){return new A.aqi(E.bY4(0,1))}}
A.aqi.prototype={
m(){this.r.m()
this.ag()},
aRk(d){var x,w=this
if(d===w.e)return
w.u(new A.bnW(w,d))
x=w.r
if(x.f.length!==0)x.a3t(0)},
ajf(d,e){var x=this,w=C.h.a_(x.f+d,0,e-1)
if(w!==x.f&&x.r.f.length!==0)x.r.al6(w,C.mG,D.ajP)},
v(d){var x,w,v,u,t,s,r,q,p=A.cyF(this.a.c),o=B.a([],y.j)
for(x=$.cgw(),w=0;w<8;++w){v=x[w]
u=v.d
if(u.ga2(u)||C.e.cJ(p,new A.bo6(v)))o.push(v)}t=C.e.k9(o,new A.bo7(this),new A.bo8(o))
x=t.d
if(x.ga2(x))s=p
else{u=B.a([],y.X)
for(r=p.length,w=0;w<p.length;p.length===r||(0,B.w)(p),++w){q=p[w]
if(x.p(0,q.a))u.push(q)}s=u}return new B.hl(D.a86,C.dc,B.fX(new A.bo9(this,s,o,t,d.ai(y.I).w===C.bS)),D.bUi)}}
A.auV.prototype={
v(d){var x=null,w=this.c,v=w.c,u=v.$0(),t=this.d,s=t?D.at7:x,r=t?x:C.t.jk(0.92),q=B.bf(30),p=B.cB(C.t,3)
v=B.y(v.$0())
return new B.cv(this.e,B.B1(C.W,B.c(w.b+"  "+v,x,x,x,x,x,B.ar(x,x,t?C.t:D.aeh,x,x,x,x,x,x,x,x,17,x,x,C.aa,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x,C.aO,new B.aF(r,x,p,q,D.bfj,s,C.a2),C.Hv,x,x,x,C.eS,x),30,u,!1,!0,x)}}
A.a3a.prototype={
v(d){var x,w,v=this,u=null,t=v.e,s=t?1:0.3,r=v.c,q=$.h().a==="ar"?"\u0635\u0641\u062d\u0629 \u062a\u0627\u0646\u064a\u0629":"Turn the page"
t=t?v.f:new A.bsT()
x=B.cB(C.t,3)
w=v.d?C.ql:C.qm
return B.a8s(new B.cv(t,B.aY(u,B.c6(w,C.t,u,r*0.8,C.aC),C.G,u,u,new B.aF(u,u,x,u,C.Qx,D.at0,C.bE),u,r,u,u,u,u,u,r),r,q,!1,!0,u),C.aO,C.aB,s)}}
A.aqh.prototype={
v(d){var x=this,w=null,v=B.df(0,0,300+x.f*60,0),u=x.c,t=u.a,s=u.b.$0(),r=y.D
s=B.a([B.jW(0,new B.cv(x.x,B.pW("assets/games/learn_cards/"+t+".webp",C.W,w,w,!1,C.cE,C.em,w,w,w),28,s,!1,!0,new B.O("learn_"+t,y.O)))],r)
if(u.d){u=B.a([],r)
if(x.r)u.push(D.aqa)
u.push(new B.Jp(x.w,"game",t,24,w))
s.push(B.jV(w,B.a3(u,C.y,w,C.r,C.am,0,C.A),w,w,4,w,4,w))}return B.c7Q(new A.bnV(),new B.aN(x.d,x.e,B.ef(C.bD,s,C.S,C.c8,w),w),C.pM,v,new B.b4(0,1,y.Y),y.i)}}
A.Ba.prototype={
S(){return new A.a0v()}}
A.a0v.prototype={
ae(){this.aw()
this.d=B.bo(6,!1,!1,y.y)},
aVY(d){var x=this.d
x===$&&B.b()
if(x[d])return
this.u(new A.bcZ(this,d))},
aYh(){return this.u(new A.bd_(this))},
v(d){var x,w,v,u,t,s=this,r=null,q=s.d
q===$&&B.b()
x=C.e.dz(q,new A.bd0())
q=B.bC(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
w=y.D
if(x)w=B.a3(B.a([C.qz,C.aZ,B.c(B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,36,r,r,C.ak,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),C.f2,B.cH(B.c(B.e("\u0627\u0644\u0639\u0628 \u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gaYg(),r)],w),C.y,r,C.r,C.am,0,C.A)
else{w=B.a([],w)
for(v=0;v<6;++v){u=s.d[v]?0:1
t=new B.aP(55,55)
w.push(new B.cv(new A.bd1(s,v),new B.r4(B.aY(r,r,C.G,r,r,new B.aF(C.nz[C.h.an(v,6)],r,r,new B.cu(t,t,t,t),r,r,C.a2),r,130,r,r,r,r,r,110),u,C.aO,C.dd,r,r),20,r,!1,!0,r))}w=B.b_(C.aY,w,C.a0,r,C.I,24,24)}return B.bm(q,r,new B.rA(B.bd(w,r,r,r),r),r,!1,r,r)}}
A.en.prototype={}
A.Gm.prototype={}
A.D0.prototype={
S(){return new A.a2u(C.aN,D.a40,B.aa(y.S))}}
A.a2u.prototype={
ae(){this.aw()
this.Yr()},
Yr(){var x=this,w=B.L(x.e.e,y.r)
C.e.bz(w,x.d)
x.f=B.c7(w,0,B.cD(5,"count",y.S),B.a_(w).c).c8(0)
x.x=0
x.aer()},
aer(){var x,w,v,u=this,t=u.f
t===$&&B.b()
x=C.o.az(t[u.x].b,0,1)
t=y.s
w=B.a(u.e.d.split(""),t)
C.e.N(w,x)
v=u.d
C.e.bz(w,v)
t=B.a([x],t)
C.e.O(t,B.c7(w,0,B.cD(2,"count",y.S),y.N))
C.e.bz(t,v)
u.r=t
u.w.W(0)
u.z=u.y=!1},
Nj(d){return this.b0I(d)},
b0I(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$Nj=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.y||u.w.p(0,d)){x=1
break}t=u.r
t===$&&B.b()
t=t[d]
s=u.f
s===$&&B.b()
s=C.o.az(s[u.x].b,0,1)
if(t!==s){u.z=!0
u.u(new A.boO(u,d))
x=1
break}B.lJ("letters_"+u.e.a,!u.z,$.co().d,s)
u.u(new A.boP(u))
x=3
return B.d(B.kY(C.hh,null,y.z),$async$Nj)
case 3:if(u.c==null){x=1
break}u.u(new A.boQ(u))
case 1:return B.k(v,w)}})
return B.l($async$Nj,w)},
Ni(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Ni=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u1(t),$async$Ni)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaRn())
case 1:return B.k(v,w)}})
return B.l($async$Ni,w)},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.bC(l,!0,C.Z,l,l,l,l,l,B.c(B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a"),l,l,l,l,l,C.uP,l,l,l),l),j=y.D,i=B.a([],j)
for(x=0;x<4;++x){w=D.bll[x]
i.push(B.dv(l,B.c(B.e(w.b),l,l,l,l,l,C.jW,l,l,l),l,new A.boS(m,w),w===m.e,l))}i=B.a([B.b_(C.aY,i,C.a0,l,C.I,0,8),C.f2],j)
if(m.x>=5)i.push(new B.Mz(m.gaRm(),l))
else{v=B.c(m.y?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0623\u0648\u0644 \u062d\u0631\u0641"),l,l,l,l,l,C.uQ,l,l,l)
u=m.f
u===$&&B.b()
u=u[m.x]
t=B.c(u.a,l,l,l,l,l,C.uN,l,l,l)
s=m.e.c?C.bS:C.aC
s=B.c(u.b,l,l,l,l,l,D.bNj,l,s,l)
u=B.a([],j)
r=m.w
q=0
for(;;){p=m.r
p===$&&B.b()
if(!(q<p.length))break
p=r.p(0,q)?0.15:1
o=C.nz[(q+3)%6]
n=new B.aP(24,24)
u.push(new B.r4(new B.cv(new A.boT(m,q),B.aY(C.W,B.c(m.r[q],l,l,l,l,l,D.bM4,l,l,l),C.G,l,l,new B.aF(o,l,l,new B.cu(n,n,n,n),l,l,C.a2),l,96,l,l,l,l,l,96),20,l,!1,!0,l),p,C.aO,C.dd,l,l));++q}C.e.O(i,B.a([v,C.aZ,t,s,C.f2,B.b_(C.aY,u,C.a0,l,C.I,16,16)],j))}return B.bm(k,l,new B.rA(B.bd(B.dm(B.a3(i,C.y,l,C.r,C.am,0,C.A),l,C.T,l,C.ar,l,l,C.ad),l,l,l),l),l,!1,l,l)}}
A.Ai.prototype={}
A.Dg.prototype={
S(){return new A.a2F(C.aN,B.aa(y.S))}}
A.a2F.prototype={
ae(){this.aw()
this.aeU()},
aRS(){var x,w,v,u,t,s=this,r=null,q="addition",p=s.a.c
if(p<=5){x=p<=4?5:10
w=1+s.d.cm(x)
return new A.Ai(w,B.e("\u0643\u0627\u0645\u061f"),w,"counting")}if(p<=7){v=p===6?10:20
x=s.d
u=1+x.cm(v-1)
t=1+x.cm(v-u)
return new A.Ai(r,""+u+" + "+t+" = ?",u+t,q)}if(p<=9){x=s.d
u=10+x.cm(41)
if(x.Sp()){t=1+x.cm(50)
return new A.Ai(r,""+u+" + "+t+" = ?",u+t,q)}t=1+x.cm(u-1)
return new A.Ai(r,""+u+" - "+t+" = ?",u-t,"subtraction")}x=s.d
u=2+x.cm(8)
t=2+x.cm(11)
return new A.Ai(r,""+u+" \xd7 "+t+" = ?",u*t,"multiplication")},
aeU(){var x,w=this,v=B.a([],y.q)
for(x=0;x<5;++x)v.push(w.aRS())
w.e=v
w.w=0
w.aeV()},
aeV(){var x,w,v,u,t,s=this,r=s.e
r===$&&B.b()
x=r[s.w].c
r=y.t
w=B.a([],r)
for(v=-3;v<=3;++v)if(v!==0&&x+v>=1)w.push(x+v)
u=s.d
C.e.bz(w,u)
r=B.a([x],r)
t=y.S
C.e.O(r,B.c7(w,0,B.cD(2,"count",t),t))
C.e.bz(r,u)
s.f=r
s.r.W(0)
s.y=s.x=!1},
Nw(d){return this.b0J(d)},
b0J(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$Nw=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.x||u.r.p(0,d)){x=1
break}t=u.f
t===$&&B.b()
t=t[d]
s=u.e
s===$&&B.b()
s=s[u.w]
if(t!==s.c){u.y=!0
u.u(new A.bqg(u,d))
x=1
break}B.lJ(s.d,!u.y,$.co().d,null)
u.u(new A.bqh(u))
x=3
return B.d(B.kY(C.hh,null,y.z),$async$Nw)
case 3:if(u.c==null){x=1
break}u.u(new A.bqi(u))
case 1:return B.k(v,w)}})
return B.l($async$Nw,w)},
Nv(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Nv=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u1(t),$async$Nv)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaSx())
case 1:return B.k(v,w)}})
return B.l($async$Nv,w)},
v(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bC(o,!0,C.Z,o,o,o,o,o,B.c(B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a"),o,o,o,o,o,B.ar(o,o,o,o,o,o,o,o,o,o,o,26,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o)
if(p.w>=5)x=new B.Mz(p.gaRR(),o)
else{x=y.D
w=B.a([B.c(p.x?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"),o,o,o,o,o,C.uQ,o,o,o),C.f2],x)
v=p.e
v===$&&B.b()
u=v[p.w].a
if(u!=null){v=B.a([],x)
for(t=0;t<u;++t)v.push(D.bQ6)
w.push(B.b_(C.aY,v,C.a0,o,C.I,0,8))}if(p.e[p.w].a!=null)w.push(C.a8)
w.push(B.c(p.e[p.w].b,o,o,o,o,o,D.bP1,o,C.aC,o))
w.push(C.C_)
x=B.a([],x)
v=p.r
t=0
for(;;){s=p.f
s===$&&B.b()
if(!(t<s.length))break
s=v.p(0,t)?0.15:1
r=C.nz[(t+2)%6]
q=new B.aP(24,24)
x.push(new B.r4(new B.cv(new A.bqj(p,t),B.aY(C.W,B.c(""+p.f[t],o,o,o,o,o,D.bJS,o,o,o),C.G,o,o,new B.aF(r,o,o,new B.cu(q,q,q,q),o,o,C.a2),o,104,o,o,o,o,o,104),20,o,!1,!0,o),s,C.aO,C.dd,o,o));++t}w.push(B.b_(C.aY,x,C.a0,o,C.I,16,16))
x=B.dm(B.a3(w,C.y,o,C.r,C.am,0,C.A),o,C.T,o,C.ar,o,o,C.ad)}return B.bm(n,o,new B.rA(B.bd(x,o,o,o),o),o,!1,o,o)}}
A.FJ.prototype={
S(){return new A.a60(C.aN)}}
A.a60.prototype={
ae(){this.aw()
this.akz()},
akz(){var x=this,w=B.L(D.bdM,y.N)
C.e.bz(w,x.d)
x.e=B.c7(w,0,B.cD(3,"count",y.S),B.a_(w).c).c8(0)
x.f=null;++x.r},
b0M(d){if(this.f!=null)return
this.u(new A.bIy(this,d))},
b3n(){return this.u(this.gb3l())},
v(d){var x,w,v,u,t,s=this,r=null,q=B.bC(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r),p=B.c(s.f==null?B.e("\u0627\u062e\u062a\u0627\u0631 \u0635\u0646\u062f\u0648\u0642"):B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,C.uQ,r,r,r),o=y.D,n=B.a([],o)
for(x=0;x<3;++x){w=s.f===x
v=w?C.nz[x]:C.t
u=new B.aP(24,24)
t=new B.aZ(C.x2,3,C.a6,-1)
if(w){w=s.e
w===$&&B.b()
w=w[x]}else w="\ud83d\udce6"
n.push(new B.cv(new A.bIz(s,x),B.aY(C.W,B.c(w,r,r,r,r,r,D.bMn,r,r,r),C.G,r,r,new B.aF(v,r,new B.e1(t,t,t,t),new B.cu(u,u,u,u),r,r,C.a2),r,110,r,r,r,r,r,110),20,r,!1,!0,r))}p=B.a([p,C.f2,B.b_(C.aY,n,C.a0,r,C.I,20,20),C.C_],o)
if(s.f!=null)p.push(B.cH(B.c(B.e("\u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gb3m(),r))
return B.bm(q,r,new B.rA(B.bd(B.a3(p,C.y,r,C.r,C.am,0,C.A),r,r,r),r),r,!1,r,r)}}
var z=a.updateTypes(["~()","a6<~>()","f(vt,n?,ac)","E(IH)","Ba()","FJ()","D0()","Dg()","AX()","E(oq)","E(yo)","yo()"])
A.baJ.prototype={
$0(){var x=this.a
x.d=this.b
x.e=this.c},
$S:0}
A.baM.prototype={
$1(d){return d.a===this.a.b},
$S:114}
A.baN.prototype={
$1(d){return d.a===this.a.b},
$S:399}
A.baO.prototype={
$1(d){var x=this.a.a
x.toString
return x},
$S:10}
A.baK.prototype={
$1(d){return d.a===this.a.b},
$S:114}
A.baL.prototype={
$1(d){return d.a===this.a.b},
$S:399}
A.baP.prototype={
$1(d){return d},
$S:57}
A.baQ.prototype={
$1(d){return d},
$S:57}
A.baR.prototype={
$0(){return this.a.Lv(this.b.a.c[this.c])},
$S:0}
A.baS.prototype={
$1(d){return d.a===this.a.b},
$S:1147}
A.baT.prototype={
$0(){return C.e.gZ($.azU())},
$S:1148}
A.aQV.prototype={
$3(d,e,f){var x=null
return e==null?C.aW:new B.X(C.mQ,B.az(B.a([B.c6(f,C.cd,x,22,x),C.ct,B.c(A.czC(d)+": ",x,x,x,x,x,D.bNf,x,x,x),B.aX(B.c(e,x,x,x,x,x,C.hI,x,x,x),1)],y.D),C.y,x,C.r,C.w,0,x),x)},
$S:z+2}
A.aQU.prototype={
$1(d){return C.e.hV($.u5(),new A.aQT(d)).b.$0()},
$S:23}
A.aQT.prototype={
$1(d){return d.a===this.a},
$S:114}
A.bTD.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.bM1.prototype={
$0(){var x=this.a,w=this.b
return $.h().a==="ar"?x:w},
$S:1}
A.bTB.prototype={
$2(d,e){var x=B.bF(new A.bTC(e),null,y.H)
return B.an(d,!1).bh(x)},
$S:1149}
A.bTC.prototype={
$1(d){return this.a.$0()},
$S:10}
A.bTf.prototype={
$0(){return B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a")},
$S:1}
A.bTg.prototype={
$0(){return D.a71},
$S:z+4}
A.bTh.prototype={
$0(){return B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f")},
$S:1}
A.bTs.prototype={
$0(){return D.bYh},
$S:z+5}
A.bTu.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646")},
$S:1}
A.bTv.prototype={
$0(){return D.abB},
$S:1150}
A.bTw.prototype={
$0(){return B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a")},
$S:1}
A.bTx.prototype={
$0(){return D.asO},
$S:z+6}
A.bTy.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629")},
$S:1}
A.bTz.prototype={
$0(){return D.bq5},
$S:1151}
A.bTA.prototype={
$0(){return B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a")},
$S:1}
A.bTi.prototype={
$0(){return new A.Dg(this.a,null)},
$S:z+7}
A.bTj.prototype={
$1(d){return this.a.$2(d,new A.bTe(this.b))},
$S:91}
A.bTe.prototype={
$0(){return new B.Cg(this.a.a[4].$0(),null)},
$S:1153}
A.bTk.prototype={
$1(d){return this.at9(d)},
at9(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:t=u.a
s=u.b
x=3
return B.d(B.LV(t,"game",s.a),$async$$1)
case 3:if(d.e==null){x=1
break}x=4
return B.d(u.c.$2(d,new A.bTd(s,t,u.d,u.e)),$async$$1)
case 4:case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:91}
A.bTd.prototype={
$0(){var x=this
return x.a.r.$3(x.b,x.c,B.a7A(x.d))},
$S:328}
A.bTl.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0631\u0633\u0645":"Drawing"},
$S:1}
A.bTm.prototype={
$1(d){return this.a.$2(d,new A.bTc(this.b))},
$S:91}
A.bTc.prototype={
$0(){return new B.oh(this.a,null,null)},
$S:363}
A.bTn.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u0643\u0631\u062a\u0648\u0646":"Stories and cartoons"},
$S:1}
A.bTo.prototype={
$1(d){return this.a.$2(d,new A.bTb(this.b))},
$S:91}
A.bTb.prototype={
$0(){return new B.mC(this.a,null)},
$S:1154}
A.bTp.prototype={
$0(){return $.h().a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a \u0631\u062d\u0644\u062a\u064a":"Rehlaty adventures"},
$S:1}
A.bTq.prototype={
$1(d){return this.a.$2(d,new A.bTa(this.b))},
$S:91}
A.bTa.prototype={
$0(){return new A.AX(this.a,null)},
$S:z+8}
A.bTr.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0648\u0627\u0644\u0623\u0635\u062d\u0627\u0628":"Feelings and friends"},
$S:1}
A.bTt.prototype={
$1(d){return this.a.$2(d,new A.bT9(this.b))},
$S:91}
A.bT9.prototype={
$0(){return new B.nq(B.j7("feelings"),this.a,null)},
$S:1155}
A.bSb.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0643\u0644":"All"},
$S:1}
A.bSc.prototype={
$0(){return $.h().a==="ar"?"\u062a\u0641\u0643\u064a\u0631":"Thinking"},
$S:1}
A.bSd.prototype={
$0(){return $.h().a==="ar"?"\u062d\u0631\u0648\u0641":"Letters"},
$S:1}
A.bSe.prototype={
$0(){return $.h().a==="ar"?"\u0623\u0631\u0642\u0627\u0645":"Numbers"},
$S:1}
A.bSf.prototype={
$0(){return $.h().a==="ar"?"\u0623\u0644\u0648\u0627\u0646 \u0648\u0623\u0634\u0643\u0627\u0644":"Colours & shapes"},
$S:1}
A.bSg.prototype={
$0(){return $.h().a==="ar"?"\u062d\u064a\u0648\u0627\u0646\u0627\u062a":"Animals"},
$S:1}
A.bSh.prototype={
$0(){return $.h().a==="ar"?"\u0630\u0627\u0643\u0631\u0629":"Memory"},
$S:1}
A.bSi.prototype={
$0(){return $.h().a==="ar"?"\u0631\u0633\u0645 \u0648\u0642\u0635\u0635":"Draw & stories"},
$S:1}
A.bnW.prototype={
$0(){var x=this.a
x.e=this.b
x.f=0},
$S:0}
A.bo6.prototype={
$1(d){return this.a.d.p(0,d.a)},
$S:z+9}
A.bo7.prototype={
$1(d){return d.a===this.a.e},
$S:z+10}
A.bo8.prototype={
$0(){return C.e.gZ(this.a)},
$S:z+11}
A.bo9.prototype={
$2(d,e){var x=this,w=e.b,v=e.d,u=w/8.533333333333333,t=C.n.a_(v*0.085,46,58),s=C.n.a_(w*0.055,40,68),r=C.n.a_(w*0.014,6,18),q=u+t+12,p=C.n.a_(v-q-24-12,80,1/0),o=x.b,n=A.cyG(w-s*2,p,o.length,r),m=n.c*n.b,l=C.h.a_(C.n.e9(o.length/m),1,99),k=n.a,j=x.a,i=j.d
if(i===$)i=j.d=B.xX(j.a.c.a)
return B.e5(new A.bo5(j,w,u,t,s,x.c,x.d,q,p,l,o,m,r,k,k/1.1547169811320754,x.e),i,y.C)},
$S:1156}
A.bo5.prototype={
$2(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="learn_next",d="learn_prev",a0=a2.b
if(a0==null)a0=C.ew
x=g.b
w=B.jV(0,B.i7(B.t0(B.pW("assets/games/learn_bottom.webp",C.W,f,f,!1,C.cE,C.En,f,f,x),0.85),!0,f),f,f,0,0,f,f)
v=B.jV(f,B.pW("assets/games/learn_top.webp",C.W,f,f,!1,C.cE,C.En,f,f,x),f,f,0,0,0,f)
u=g.c
t=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
s=g.a
x=B.jV(f,new B.cv(new A.bo_(s,a1),C.ir,60,t,!1,!0,D.bUh),u,f,0,f,0,x*0.13)
t=g.e
r=t*0.5
q=y.D
p=B.a([],q)
for(o=g.f,n=o.length,m=y.O,l=g.r.a,k=0;k<o.length;o.length===n||(0,B.w)(o),++k){j=o[k]
i=j.a
p.push(new B.X(C.pY,new A.auV(j,i===l,new A.bo0(s,j),new B.O("shelf_"+i,m)),f))}u=B.jV(f,B.bd(B.i9(p,f,D.bUg,new B.ae(r,0,r,0),f,C.bj,!0),f,f,f),g.d,f,0,0,u+6,f)
r=g.w
p=g.x
o=g.y
n=new B.a5V(0)
l=B.a([w,v,x,u,B.jV(f,new E.KU(n,s.r,f,new A.bo1(s),new B.Mq(new A.bo2(s,g.z,g.Q,g.as,g.at,g.ax,a0),o,!0,!0,!0,B.c05(),f),C.T,C.S,new B.O("learn_pages_"+l,m)),p,f,t,t,r,f)],q)
if(o>1){x=r+p/2-t/2
w=g.ay
v=w?e:d
t-=6
u=s.f
r=w?u<o-1:u>0
v=B.jV(f,new A.a3a(t,!0,r,new A.bo3(s,w,o),new B.O(v,m)),f,f,4,f,x,f)
r=w?d:e
u=w?u>0:u<o-1
C.e.O(l,B.a([v,B.jV(f,new A.a3a(t,!1,u,new A.bo4(s,w,o),new B.O(r,m)),f,f,f,4,x,f)],q))}x=B.a([],q)
for(h=0;h<o;++h){w=h===s.f
v=w?28:12
w=w?C.xi:C.t.jk(0.9)
u=new B.aP(8,8)
x.push(B.B1(f,f,f,C.aO,new B.aF(w,f,f,new B.cu(u,u,u,u),C.Q4,f,C.a2),C.mM,f,12,C.cX,f,v))}l.push(B.jV(6,B.az(x,C.y,f,C.c1,C.w,0,f),24,f,0,0,f,f))
return B.ef(C.bD,l,C.S,C.c8,f)},
$S:1157}
A.bo_.prototype={
$0(){var x=this.a.a.d.$0()
return x},
$S:0}
A.bo0.prototype={
$0(){return this.a.aRk(this.b.a)},
$S:0}
A.bo1.prototype={
$1(d){var x=this.a
return x.u(new A.bnZ(x,d))},
$S:13}
A.bnZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bo2.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=l.c,h=B.c7(j,e*i,k,B.a_(j).c).oy(0,i).c8(0)
i=l.d
j=B.a([],y.D)
for(x=B.mn(h,0,y.A),w=J.au(x.a),x=x.b,v=new B.lx(w,x),u=y.O,t=l.e,s=l.f,r=l.r,q=l.a;v.t();){p={}
o=v.c
o=o>=0?new B.N(x+o,w.gG()):B.ad(B.cZ())
p.a=null
n=p.a=o.b
m=n.a
j.push(new A.aqh(n,t,s,o.a,r.p(0,m),q.a.c.a,new A.bnY(p,q,d),new B.O("card_"+m,u)))}return B.bd(B.b_(C.aY,j,C.a0,k,C.I,i,i),k,k,k)},
$S:1158}
A.bnY.prototype={
$0(){var x=0,w=B.m(y.H),v=this,u
var $async$$0=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:x=2
return B.d(v.a.a.c.$1(v.c),$async$$0)
case 2:u=v.b
if(u.c!=null)u.u(new A.bnX(u))
return B.k(null,w)}})
return B.l($async$$0,w)},
$S:3}
A.bnX.prototype={
$0(){var x=this.a
return x.d=B.xX(x.a.c.a)},
$S:0}
A.bo3.prototype={
$0(){var x=this.b?1:-1
return this.a.ajf(x,this.c)},
$S:0}
A.bo4.prototype={
$0(){var x=this.b?-1:1
return this.a.ajf(x,this.c)},
$S:0}
A.bsT.prototype={
$0(){},
$S:0}
A.bnV.prototype={
$3(d,e,f){return B.ak9(B.t0(f,C.n.a_(e,0,1)),0.7+0.3*e)},
$S:323}
A.bcZ.prototype={
$0(){var x=this.a.d
x===$&&B.b()
x[this.b]=!0
return!0},
$S:0}
A.bd_.prototype={
$0(){return this.a.d=B.bo(6,!1,!1,y.y)},
$S:0}
A.bd0.prototype={
$1(d){return d},
$S:57}
A.bd1.prototype={
$0(){return this.a.aVY(this.b)},
$S:0}
A.boO.prototype={
$0(){return this.a.w.C(0,this.b)},
$S:0}
A.boP.prototype={
$0(){return this.a.y=!0},
$S:0}
A.boQ.prototype={
$0(){var x=this.a
if(++x.x<5)x.aer()},
$S:0}
A.boS.prototype={
$1(d){var x=this.a
return x.u(new A.boR(x,this.b))},
$S:4}
A.boR.prototype={
$0(){var x=this.a
x.e=this.b
x.Yr()},
$S:0}
A.boT.prototype={
$0(){return this.a.Nj(this.b)},
$S:0}
A.bqg.prototype={
$0(){return this.a.r.C(0,this.b)},
$S:0}
A.bqh.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bqi.prototype={
$0(){var x=this.a
if(++x.w<5)x.aeV()},
$S:0}
A.bqj.prototype={
$0(){return this.a.Nw(this.b)},
$S:0}
A.bIy.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bIz.prototype={
$0(){return this.a.b0M(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.a0v.prototype,"gaYg","aYh",0)
var w
x(w=A.a2u.prototype,"gaRn","Yr",0)
x(w,"gaRm","Ni",1)
x(w=A.a2F.prototype,"gaSx","aeU",0)
x(w,"gaRR","Nv",1)
x(w=A.a60.prototype,"gb3l","akz",0)
x(w,"gb3m","b3n",0)})();(function inheritance(){var x=a.inheritMany
x(B.U,[A.AX,A.Va,A.Ba,A.D0,A.Dg,A.FJ])
x(B.W,[A.alh,A.aqi,A.a0v,A.a2u,A.a2F,A.a60])
x(B.n6,[A.baJ,A.baR,A.baT,A.bM1,A.bTf,A.bTg,A.bTh,A.bTs,A.bTu,A.bTv,A.bTw,A.bTx,A.bTy,A.bTz,A.bTA,A.bTi,A.bTe,A.bTd,A.bTl,A.bTc,A.bTn,A.bTb,A.bTp,A.bTa,A.bTr,A.bT9,A.bSb,A.bSc,A.bSd,A.bSe,A.bSf,A.bSg,A.bSh,A.bSi,A.bnW,A.bo8,A.bo_,A.bo0,A.bnZ,A.bnY,A.bnX,A.bo3,A.bo4,A.bsT,A.bcZ,A.bd_,A.bd1,A.boO,A.boP,A.boQ,A.boR,A.boT,A.bqg,A.bqh,A.bqi,A.bqj,A.bIy,A.bIz])
x(B.jI,[A.baM,A.baN,A.baO,A.baK,A.baL,A.baP,A.baQ,A.baS,A.aQV,A.aQU,A.aQT,A.bTD,A.bTC,A.bTj,A.bTk,A.bTm,A.bTo,A.bTq,A.bTt,A.bo6,A.bo7,A.bo1,A.bnV,A.bd0,A.boS])
x(B.Y,[A.aeh,A.auV,A.a3a,A.aqh])
x(B.tP,[A.vt,A.LH,A.qr])
x(B.T,[A.iw,A.vb,A.aQS,A.IH,A.oq,A.yo,A.en,A.Gm,A.Ai])
x(B.o8,[A.bTB,A.bo9,A.bo5,A.bo2])})()
B.qN(b.typeUniverse,JSON.parse('{"AX":{"U":[],"f":[]},"alh":{"W":["AX"]},"aeh":{"Y":[],"f":[]},"Va":{"U":[],"f":[]},"aqi":{"W":["Va"]},"auV":{"Y":[],"f":[]},"a3a":{"Y":[],"f":[]},"aqh":{"Y":[],"f":[]},"Ba":{"U":[],"f":[]},"a0v":{"W":["Ba"]},"D0":{"U":[],"f":[]},"a2u":{"W":["D0"]},"Dg":{"U":[],"f":[]},"a2F":{"W":["Dg"]},"FJ":{"U":[],"f":[]},"a60":{"W":["FJ"]}}'))
var y=(function rtii(){var x=B.a4
return{M:x("fF<n>"),I:x("hM"),W:x("x<q>"),X:x("x<oq>"),j:x("x<yo>"),p:x("x<iw>"),s:x("x<n>"),D:x("x<f>"),q:x("x<Ai>"),w:x("x<en>"),t:x("x<u>"),A:x("oq"),C:x("bh<n>"),N:x("n"),Y:x("b4<Q>"),O:x("O<n>"),r:x("en"),y:x("E"),i:x("Q"),z:x("@"),S:x("u"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a71=new A.Ba(null)
D.ace=new B.q(1,0.6039215686274509,0.8470588235294118,0.9607843137254902,C.q)
D.acj=new B.q(1,0.48627450980392156,0.803921568627451,0.7058823529411765,C.q)
D.adD=new B.q(1,0.43137254901960786,0.7843137254901961,0.5882352941176471,C.q)
D.bdn=x([D.ace,D.acj,D.adD],y.W)
D.asQ=new B.dR(C.c4,C.cm,C.b7,D.bdn,null,null)
D.a86=new B.aF(null,null,null,null,null,D.asQ,C.a2)
D.abB=new B.ri(null)
D.aeh=new B.q(1,0.22745098039215686,0.16470588235294117,0.41568627450980394,C.q)
D.afS=new B.q(1,0.8901960784313725,0.9725490196078431,0.8784313725490196,C.q)
D.ajP=new B.b3(38e4)
D.amF=new B.ac(61267,"MaterialIcons",!1)
D.ank=new B.ac(63573,"MaterialIcons",!1)
D.apZ=new B.aw(F.yN,18,null,null,null,null)
D.aqa=new B.aw(C.ec,28,C.fo,null,null,null)
D.asO=new A.D0(null)
D.aeL=new B.q(1,1,0.8313725490196079,0.35294117647058826,C.q)
D.afF=new B.q(1,0.9607843137254902,0.6274509803921569,0.10196078431372549,C.q)
D.atn=x([D.aeL,D.afF],y.W)
D.at0=new B.dR(C.c4,C.cm,C.b7,D.atn,null,null)
D.ag1=new B.q(1,0.6039215686274509,0.41568627450980394,0.9411764705882353,C.q)
D.bkZ=x([D.ag1,C.xi],y.W)
D.at7=new B.dR(C.k8,C.m6,C.b7,D.bkZ,null,null)
D.bj3=x(["ar_letters_see","ar_letters_name","ar_letters_write"],y.s)
D.im=new A.LH(2,"realActivity")
D.bww=new A.iw(D.im,"picture_book")
D.PU=x([D.bww],y.p)
D.b7W=x(["letter_fishing","trace_letters","listen_letter"],y.s)
D.bwv=new A.iw(D.im,"letter_tray")
D.bwx=new A.iw(D.im,"play_dough")
D.aRN=x([D.bwv,D.bwx],y.p)
D.arL=new A.vb("letters",D.bj3,D.PU,D.b7W,D.aRN)
D.bgz=x(["math_count_10","math_compare","math_dots_order"],y.s)
D.Bi=new A.LH(0,"story")
D.bwt=new A.iw(D.Bi,"three_apples")
D.X_=new A.iw(D.im,"count_toys")
D.bdu=x([D.bwt,D.X_],y.p)
D.bkq=x(["numerals","compare","connect_four"],y.s)
D.ly=new A.LH(3,"everyday")
D.bwB=new A.iw(D.ly,"count_steps")
D.bes=x([D.bwB,D.X_],y.p)
D.arG=new A.vb("numbers",D.bgz,D.bdu,D.bkq,D.bes)
D.bet=x(["sci_animals_home","sci_animals_food","ar_words_first"],y.s)
D.bws=new A.iw(D.Bi,"bunny_garden")
D.bwr=new A.iw(D.Bi,"bee_flower")
D.bwD=new A.iw(D.ly,"look_sky")
D.bfO=x([D.bws,D.bwr,D.bwD],y.p)
D.bgf=x(["animal_habitats","feed_animal","listen_picture"],y.s)
D.bwC=new A.iw(D.ly,"feed_pet")
D.bwG=new A.iw(D.ly,"water_plant")
D.bl9=x([D.bwC,D.bwG],y.p)
D.arH=new A.vb("animals",D.bet,D.bfO,D.bgf,D.bl9)
D.bkQ=x(["logic_planning","life_routine","pos_words"],y.s)
D.bDG=new A.LH(1,"branching")
D.bwu=new A.iw(D.bDG,"boat")
D.X0=new A.iw(D.im,"day_routine")
D.bgy=x([D.bwu,D.X0],y.p)
D.bk6=x(["maze","treasure_hunt","next_in_day"],y.s)
D.bwF=new A.iw(D.ly,"toys_basket")
D.bcl=x([D.X0,D.bwF],y.p)
D.arJ=new A.vb("thinking",D.bkQ,D.bgy,D.bk6,D.bcl)
D.bd2=x(["ar_words_first","ar_words_listen","ar_letters_name"],y.s)
D.bwA=new A.iw(D.im,"sound_box")
D.beH=x([D.bwA],y.p)
D.biQ=x(["listen_picture","listen_word","listen_letter"],y.s)
D.arK=new A.vb("listening",D.bd2,D.beH,D.biQ,D.PU)
D.blC=x(["shape_names","col_more","shape_size"],y.s)
D.bwy=new A.iw(D.im,"round3")
D.beG=x([D.bwy],y.p)
D.bi3=x(["shape_finder","connect_dots","jigsaw","big_small"],y.s)
D.bwE=new A.iw(D.ly,"shop_colours")
D.bwz=new A.iw(D.im,"sort_color")
D.bkW=x([D.bwE,D.bwz],y.p)
D.arI=new A.vb("shapes",D.blC,D.beG,D.bi3,D.bkW)
D.bbJ=x([D.arL,D.arG,D.arH,D.arJ,D.arK,D.arI],B.a4("x<vb>"))
D.bdM=x(["\ud83d\udc36","\ud83d\udc31","\ud83d\udc38","\ud83d\udc30","\ud83e\udd81","\ud83d\udc35"],y.s)
D.a8D=new B.c8(0,C.aT,C.eK,C.f1,6)
D.bfj=x([D.a8D],B.a4("x<c8>"))
D.c0b=new A.en("\ud83c\udf4e","\u062a\u0641\u0627\u062d\u0629")
D.c0e=new A.en("\ud83c\udf4c","\u0645\u0648\u0632")
D.c0p=new A.en("\ud83d\udc18","\u0641\u064a\u0644")
D.c0q=new A.en("\ud83c\udf33","\u0634\u062c\u0631\u0629")
D.c0m=new A.en("\ud83d\udc1f","\u0633\u0645\u0643\u0629")
D.c0r=new A.en("\ud83c\udfe0","\u0628\u064a\u062a")
D.c0g=new A.en("\ud83d\udc2a","\u062c\u0645\u0644")
D.c0l=new A.en("\ud83d\udc26","\u0639\u0635\u0641\u0648\u0631")
D.c0y=new A.en("\ud83d\udc31","\u0642\u0637\u0629")
D.aZK=x([D.c0b,D.c0e,D.c0p,D.c0q,D.c0m,D.c0r,D.c0g,D.c0l,D.c0y],y.w)
D.a40=new A.Gm("ar","\u0639\u0631\u0628\u064a",!0,"\u0623\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a",D.aZK)
D.c0i=new A.en("\ud83c\udf4e","Apple")
D.c0s=new A.en("\ud83d\udc31","Cat")
D.c0h=new A.en("\ud83d\udc36","Dog")
D.c0F=new A.en("\ud83d\udc1f","Fish")
D.c0n=new A.en("\ud83c\udf1e","Sun")
D.c0k=new A.en("\ud83d\udc18","Elephant")
D.c0C=new A.en("\ud83c\udf4c","Banana")
D.c0u=new A.en("\ud83c\udfe0","House")
D.atg=x([D.c0i,D.c0s,D.c0h,D.c0F,D.c0n,D.c0k,D.c0C,D.c0u],y.w)
D.c_2=new A.Gm("en","English",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.atg)
D.c0A=new A.en("\ud83c\udf4e","Apfel")
D.c0t=new A.en("\ud83d\udc31","Katze")
D.c0f=new A.en("\ud83d\udc36","Hund")
D.c0o=new A.en("\ud83d\udc1f","Fisch")
D.c0a=new A.en("\ud83c\udf1e","Sonne")
D.c0c=new A.en("\ud83c\udf33","Baum")
D.c0v=new A.en("\ud83c\udfe0","Haus")
D.c0w=new A.en("\ud83d\udc18","Elefant")
D.aMg=x([D.c0A,D.c0t,D.c0f,D.c0o,D.c0a,D.c0c,D.c0v,D.c0w],y.w)
D.c_3=new A.Gm("de","Deutsch",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.aMg)
D.c0d=new A.en("\ud83c\udf4e","Pomme")
D.c09=new A.en("\ud83d\udc31","Chat")
D.c0B=new A.en("\ud83d\udc36","Chien")
D.c0x=new A.en("\ud83d\udc1f","Poisson")
D.c0z=new A.en("\ud83c\udf1e","Soleil")
D.c0j=new A.en("\ud83c\udf33","Arbre")
D.c0E=new A.en("\ud83c\udfe0","Maison")
D.c0D=new A.en("\ud83c\udf4c","Banane")
D.bma=x([D.c0d,D.c09,D.c0B,D.c0x,D.c0z,D.c0j,D.c0E,D.c0D],y.w)
D.c_4=new A.Gm("fr","Fran\xe7ais",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.bma)
D.bll=x([D.a40,D.c_2,D.c_3,D.c_4],B.a4("x<Gm>"))
D.bq5=new B.rW(null)
D.bwm=new A.vt(0,"discover")
D.bwn=new A.vt(1,"learn")
D.bwo=new A.vt(2,"play")
D.bwp=new A.vt(3,"apply")
D.bwq=new A.vt(4,"celebrate")
D.bqr={colors:0,shape_finder:1,jigsaw:2}
D.bEV=new B.fF(D.bqr,3,y.M)
D.bqy={letters:0,letter_fishing:1,trace_letters:2,word_book:3,listen_letter:4,listen_word:5}
D.bEX=new B.fF(D.bqy,6,y.M)
D.bqE={animal:0,animal_habitats:1,feed_animal:2,listen_picture:3,balloons:4}
D.bEY=new B.fF(D.bqE,5,y.M)
D.bqX={balloons:0,animal:1,colors:2,letters:3,memory:4,math:5,snakes_ladders:6,jigsaw:7,maze:8,treasure_hunt:9,connect_dots:10,animal_habitats:11,match_pictures:12,letter_fishing:13,connect_four:14,numerals:15,trace_letters:16,word_book:17,listen_picture:18,listen_word:19,listen_letter:20,odd_one_out:21,pattern:22,compare:23,sort_groups:24,feed_animal:25,big_small:26,next_in_day:27,shape_finder:28,where_ball:29,drawing:30,stories:31,adventures:32,feelings:33}
D.bEZ=new B.fF(D.bqX,34,y.M)
D.bqH={drawing:0,stories:1,adventures:2,feelings:3}
D.bF2=new B.fF(D.bqH,4,y.M)
D.bqU={memory:0,match_pictures:1,odd_one_out:2}
D.bF3=new B.fF(D.bqU,3,y.M)
D.bqS={math:0,numerals:1,compare:2,connect_dots:3,big_small:4}
D.bF6=new B.fF(D.bqS,5,y.M)
D.bqY={maze:0,sort_groups:1,treasure_hunt:2,next_in_day:3,snakes_ladders:4,connect_four:5,where_ball:6,pattern:7}
D.bFf=new B.fF(D.bqY,8,y.M)
D.jJ=new A.qr(0,"arabic")
D.bIl=new A.qr(1,"english")
D.hC=new A.qr(2,"maths")
D.Cd=new A.qr(3,"science")
D.Ce=new A.qr(4,"everyday")
D.jK=new A.qr(5,"logic")
D.bIm=new A.qr(6,"feelings")
D.bIn=new A.qr(7,"creativity")
D.bIo=new A.qr(8,"stories")
D.bJS=new B.C(!0,C.t,null,null,null,null,48,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bM4=new B.C(!0,C.t,null,null,null,null,52,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMn=new B.C(!0,null,null,null,null,null,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNf=new B.C(!0,C.O,null,null,null,null,15,C.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNj=new B.C(!0,null,null,null,null,null,40,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bP1=new B.C(!0,null,null,null,null,null,56,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQ6=new B.iW("\ud83c\udf4e",null,C.op,null,null,null,null,null,null,null,null)
D.bSC=new B.O("adventure_progress",y.O)
D.bSD=new B.O("adventure_theme",y.O)
D.bUg=new B.O("learn_shelves",y.O)
D.bUh=new B.O("learning_back",y.O)
D.bUi=new B.O("learning_page",y.O)
D.bUj=new B.O("learning_path",y.O)
D.bYh=new A.FJ(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cIk","cgv",()=>{var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="artwork for the library words (emoji today)",b2="approved word recordings (device voice today)",b3="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u0644\u0639\u0628\u0629",b4="Five rounds of the game",b5="approved letter-name recordings",b6="approved colour-name recordings",b7="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a",b8="Five rounds",b9="\u0623\u064a\u0651 \u0634\u0643\u0644 \u0644\u0647 \u062b\u0644\u0627\u062b \u0632\u0648\u0627\u064a\u0627\u061f",c0="Which shape has three corners?",c1="\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0644\u0639\u0628\u0629",c2="Finish the game",c3="\u0644\u0627 \u062a\u0648\u062c\u062f \u0644\u0639\u0628\u0629 \u0628\u0639\u062f: \u0645\u062e\u0637\u0651\u0637",c4="No game yet: planned",c5="\u0645\u0627\u0630\u0627 \u0646\u0641\u0639\u0644 \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c6="What do we do next?",c7="\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0623\u062a\u064a \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c8="What comes next?",c9=y.s,d0=B.a(["word_book"],c9),d1=B.a([b1],c9),d2=B.a([b2],c9)
d0=A.fd("ar_words_first",D.jJ,1,6,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u062d\u0648\u0644\u064a","I learn the names of things around me","\u0623\u0646\u0638\u0631 \u0625\u0644\u0649 \u0635\u0648\u0631\u0629 \u0648\u0623\u0633\u0645\u0639 \u0627\u0633\u0645\u0647\u0627","Look at a picture and hear its name",B.a(["picture_book"],c9),d1,d2,"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644","Open at least five words",d0,C.L,"\u0627\u0646\u0638\u0631 \u0625\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629. \u0645\u0627 \u0627\u0633\u0645\u0647\u0627\u061f","Look at the picture. What is it called?",C.L,C.L)
d2=B.a(["ar_words_first"],c9)
d1=B.a(["listen_picture"],c9)
w=B.a(["listening"],c9)
w=A.fd("ar_words_listen",D.jJ,3,6,"\u0623\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0635\u0648\u0631\u062a\u0647\u0627","I hear a word and pick its picture","\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0635\u062d\u064a\u062d\u0629","Hear a word and pick the right picture",C.L,B.a([b1],c9),B.a([b2],c9),b3,b4,d1,d2,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629.","Hear the word, then pick the picture.",w,C.L)
d2=B.a(["letter_fishing","letters"],c9)
d1=B.a(["letters_ar"],c9)
d1=A.fd("ar_letters_see",D.jJ,3,6,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0627\u0644\u062d\u0631\u0641","I recognise the shape of a letter","\u0623\u0635\u0637\u0627\u062f \u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Catch the asked letter",C.L,C.L,B.a([b5],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0645\u0646 \u0627\u0644\u0635\u064a\u062f","Five rounds of letter fishing",d2,C.L,"\u0627\u0635\u0637\u062f \u0627\u0644\u0633\u0645\u0643\u0629 \u0627\u0644\u062a\u064a \u0639\u0644\u064a\u0647\u0627 \u0627\u0644\u062d\u0631\u0641.","Catch the fish that has the letter.",d1,C.L)
d2=B.a(["ar_letters_see"],c9)
v=B.a(["listen_letter"],c9)
u=B.a(["letters_ar"],c9)
u=A.fd("ar_letters_name",D.jJ,4,6,"\u0623\u0633\u0645\u0639 \u0627\u0633\u0645 \u0627\u0644\u062d\u0631\u0641 \u0648\u0623\u062e\u062a\u0627\u0631\u0647","I hear a letter name and pick it","\u0623\u0633\u0645\u0639 \u0627\u0633\u0645 \u062d\u0631\u0641 \u0648\u0623\u062e\u062a\u0627\u0631\u0647","Hear a letter name and pick it",C.L,C.L,B.a([b5],c9),b3,b4,v,d2,"\u0627\u0633\u0645\u0639 \u0627\u0633\u0645 \u0627\u0644\u062d\u0631\u0641\u060c \u062b\u0645 \u0627\u062e\u062a\u0631\u0647.","Hear the letter name, then pick it.",u,C.L)
d2=B.a(["ar_letters_see"],c9)
v=B.a(["trace_letters"],c9)
d2=A.fd("ar_letters_write",D.jJ,4,6,"\u0623\u062a\u062a\u0628\u0651\u0639 \u0634\u0643\u0644 \u0627\u0644\u062d\u0631\u0641","I trace the shape of a letter","\u0623\u062a\u062a\u0628\u0651\u0639 \u0627\u0644\u062d\u0631\u0641 \u0628\u0625\u0635\u0628\u0639\u064a","Trace the letter with a finger",B.a(["letter_tray","play_dough"],c9),C.L,C.L,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u062a\u062a\u0628\u0651\u0639","Finish the tracing game",v,d2,"\u062a\u062a\u0628\u0651\u0639 \u0627\u0644\u062d\u0631\u0641 \u0628\u0625\u0635\u0628\u0639\u0643 \u0645\u0646 \u0627\u0644\u064a\u0645\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631.","Trace the letter with your finger, right to left.",C.L,C.L)
v=B.a(["ar_letters_name"],c9)
t=B.a(["phonics"],c9)
t=A.fd("ar_letter_sounds",D.jJ,4,6,"\u0623\u0633\u0645\u0639 \u0635\u0648\u062a \u0627\u0644\u062d\u0631\u0641","I hear the sound of a letter","\u062f\u0631\u0633 \u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0645\u0648\u062c\u0651\u0647","The guided letter lesson",C.L,C.L,B.a(["recorded isolated letter sounds (84 items silent today)"],c9),"\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u062d\u0631\u0641 \u0628\u0639\u062f \u0627\u0644\u062f\u0631\u0633","Review the letter after the lesson",C.L,v,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u0648\u062a\u060c \u062b\u0645 \u0643\u0631\u0651\u0631\u0647 \u0645\u0639\u064a.","Hear the sound, then say it with me.",t,C.L)
v=B.a(["ar_letters_name"],c9)
s=B.a(["listen_word"],c9)
r=B.a(["listening"],c9)
r=A.fd("ar_listen_word_read",D.jJ,5,6,"\u0623\u0642\u0631\u0623 \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u062a\u064a \u0623\u0633\u0645\u0639\u0647\u0627","I read the word I hear","\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0645\u0643\u062a\u0648\u0628\u0647\u0627","Hear a word and pick its written form",C.L,C.L,B.a([b2],c9),b3,b4,s,v,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0643\u062a\u0648\u0628\u0629.","Hear the word, then pick the written one.",r,C.L)
v=B.a(["word_book"],c9)
s=B.a(["english_vocab"],c9)
s=A.fd("en_words_first",D.bIl,2,6,"\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0627\u062a \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0633\u064a\u0637\u0629","I hear simple English words","\u0623\u0641\u062a\u062d \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0643\u062a\u0627\u0628 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629","Open the book words in English",C.L,C.L,B.a(["approved English recordings"],c9),"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a","Open five words",v,C.L,"\u0627\u0641\u062a\u062d \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0627\u0633\u0645\u0639\u0647\u0627 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.","Open the word and hear it in English.",s,C.L)
v=B.a(["colors"],c9)
q=B.a(["colors"],c9)
p=B.a(["color_red","color_blue","color_yellow","color_green"],c9)
o=B.a([b6],c9)
p=A.fd("col_names",D.hC,2,4,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","I learn the colours","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Pick the asked colour",B.a(["shop_colours","sort_color"],c9),C.L,o,"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","Five rounds of the colour game",v,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u064a \u062a\u0633\u0645\u0639\u0647.","Pick the colour you hear.",q,p)
q=B.a(["col_names"],c9)
v=B.a(["shape_finder"],c9)
o=B.a(["shapes","colors"],c9)
n=B.a(["color_orange","color_purple","color_pink","color_brown","color_black","color_white"],c9)
n=A.fd("col_more",D.hC,3,6,"\u0623\u0644\u0648\u0627\u0646 \u0623\u0643\u062b\u0631 \u0648\u0623\u0633\u0645\u0627\u0624\u0647\u0627","More colours and their names","\u0623\u062c\u062f \u0627\u0644\u0644\u0648\u0646 \u0645\u0639 \u0627\u0644\u0634\u0643\u0644","Find the colour with the shape",C.L,B.a(["picture cards for the six extra colours"],c9),B.a([b6],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a (\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0645\u0639\u064b\u0627)","Five rounds (shapes and colours together)",v,q,"\u0623\u064a\u0646 \u0627\u0644\u0645\u062b\u0644\u062b \u0627\u0644\u0623\u062d\u0645\u0631\u061f","Where is the red triangle?",o,n)
o=B.a(["shape_finder","connect_dots"],c9)
q=B.a(["shapes"],c9)
v=B.a(["shape_circle","shape_square","shape_triangle","shape_rectangle","shape_star","shape_heart","shape_diamond"],c9)
m=B.a(["approved shape-name recordings"],c9)
v=A.fd("shape_names",D.hC,2,6,"\u0623\u0639\u0631\u0641 \u0627\u0644\u0623\u0634\u0643\u0627\u0644","I know the shapes","\u0623\u062c\u062f \u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0648\u0627\u0644\u0645\u0631\u0628\u0639 \u0648\u0627\u0644\u0645\u062b\u0644\u062b","Find the circle, square and triangle",B.a(["round3"],c9),C.L,m,b7,b8,o,C.L,"\u0623\u064a\u0646 \u0627\u0644\u062f\u0627\u0626\u0631\u0629\u061f","Where is the circle?",q,v)
q=B.a(["shape_names","math_count_10"],c9)
q=A.fd("shape_corners",D.hC,5,6,"\u0623\u0639\u062f\u0651 \u0632\u0648\u0627\u064a\u0627 \u0627\u0644\u0634\u0643\u0644","I count the corners of a shape",b9,c0,C.L,C.L,C.L,b7,b8,B.a(["shape_finder"],c9),q,b9,c0,B.a(["shapes"],c9),C.L)
o=B.a(["big_small"],c9)
m=B.a(["shapes"],c9)
m=A.fd("shape_size",D.hC,2,6,"\u0623\u0645\u064a\u0651\u0632 \u0627\u0644\u0643\u0628\u064a\u0631 \u0645\u0646 \u0627\u0644\u0635\u063a\u064a\u0631","I tell big from small","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0623\u0643\u0628\u0631 \u0623\u0648 \u0627\u0644\u0623\u0635\u063a\u0631","Pick the bigger or the smaller",C.L,B.a(["real artwork pairs (emoji today)"],c9),C.L,b7,b8,o,C.L,"\u0623\u064a\u0647\u0645\u0627 \u0627\u0644\u0643\u0628\u064a\u0631\u061f","Which one is big?",m,C.L)
o=B.a(["numerals","math"],c9)
l=B.a(["counting"],c9)
k=B.a(["num_1","num_2","num_3","num_4","num_5","num_6","num_7","num_8","num_9","num_10"],c9)
j=B.a(["approved number recordings"],c9)
k=A.fd("math_count_10",D.hC,3,6,"\u0623\u0639\u062f\u0651 \u062d\u062a\u0649 \u0661\u0660","I count to 10","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0635\u062d\u064a\u062d","Pick the right numeral",B.a(["count_toys","count_steps"],c9),C.L,j,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","Finish the numerals game",o,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.","Pick the matching numeral.",l,k)
l=A.fd("math_dots_order",D.hC,3,6,"\u0623\u0631\u062a\u0651\u0628 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","I put numbers in order","\u0623\u0648\u0635\u0651\u0644 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628","Join the dots in order",C.L,C.L,C.L,"\u0631\u0633\u0645 \u062b\u0644\u0627\u062b \u0635\u0648\u0631","Draw three pictures",B.a(["connect_dots"],c9),C.L,"\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628: \u0661\u060c \u0662\u060c \u0663...","Tap the dots in order: 1, 2, 3...",B.a(["counting"],c9),C.L)
o=B.a(["math_count_10"],c9)
o=A.fd("math_compare",D.hC,3,6,"\u0623\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0627\u0644\u0643\u0645\u0651\u064a\u0627\u062a","I compare quantities","\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631 \u0623\u0648 \u0623\u0642\u0644","Which group has more or fewer",C.L,C.L,C.L,b7,b8,B.a(["compare"],c9),o,"\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631\u061f","Which group has more?",B.a(["counting"],c9),C.L)
j=B.a(["math_count_10"],c9)
j=A.fd("math_board",D.hC,4,6,"\u0623\u0639\u062f\u0651 \u0648\u0623\u0646\u062a\u0638\u0631 \u062f\u0648\u0631\u064a","I count and wait my turn","\u0623\u062a\u062d\u0631\u0643 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u0644\u0639\u0628","Move along a game board",C.L,C.L,C.L,c1,c2,B.a(["snakes_ladders"],c9),j,"\u0627\u0631\u0645\u0650 \u0627\u0644\u0646\u0631\u062f \u0648\u062a\u062d\u0631\u0651\u0643 \u0628\u0639\u062f\u062f \u0627\u0644\u0646\u0642\u0627\u0637.","Roll the dice and move that many.",C.L,C.L)
i=B.a(["where_ball","treasure_hunt"],c9)
h=B.a(["spatial"],c9)
g=B.a(["pos_above","pos_below","pos_inside","pos_beside","pos_outside","pos_front","pos_behind"],c9)
f=B.a(["\xab\u0623\u0645\u0627\u0645\xbb \u0648\xab\u062e\u0644\u0641\xbb \u0648\xab\u062e\u0627\u0631\u062c\xbb scenes"],c9)
e=B.a(["approved position-word recordings"],c9)
g=A.fd("pos_words",D.jK,3,6,"\u0641\u0648\u0642 \u0648\u062a\u062d\u062a \u0648\u062f\u0627\u062e\u0644 \u0648\u0628\u062c\u0627\u0646\u0628","On top, under, inside and next to","\u0623\u062c\u062f \u0623\u064a\u0646 \u0627\u0644\u0643\u0631\u0629","Find where the ball is",B.a(["toys_basket"],c9),f,e,b7,b8,i,C.L,"\u0623\u064a\u0646 \u0627\u0644\u0643\u0631\u0629\u061f \u0627\u0644\u0643\u0631\u0629 \u062a\u062d\u062a \u0627\u0644\u0637\u0627\u0648\u0644\u0629.","Where is the ball? The ball is under the table.",h,g)
h=A.fd("pos_fit",D.jK,3,6,"\u0623\u0631\u0643\u0651\u0628 \u0627\u0644\u0635\u0648\u0631\u0629","I fit the picture together","\u0623\u0636\u0639 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0641\u064a \u0645\u0643\u0627\u0646\u0647\u0627","Put each piece in its place",C.L,C.L,C.L,"\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629","Complete the picture",B.a(["jigsaw"],c9),C.L,"\u0636\u0639 \u0627\u0644\u0642\u0637\u0639\u0629 \u0641\u064a \u0645\u0643\u0627\u0646\u0647\u0627.","Put the piece in its place.",B.a(["spatial"],c9),C.L)
i=B.a(["animal_habitats"],c9)
e=B.a(["nature"],c9)
f=B.a([b1],c9)
e=A.fd("sci_animals_home",D.Cd,3,6,"\u0623\u064a\u0646 \u062a\u0639\u064a\u0634 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a\u061f","Where do animals live?","\u0623\u0636\u0639 \u0627\u0644\u062d\u064a\u0648\u0627\u0646 \u0641\u064a \u0628\u064a\u062a\u0647","Put the animal in its home",B.a(["nature_walk"],c9),f,C.L,c1,c2,i,C.L,"\u0623\u064a\u0646 \u064a\u0639\u064a\u0634 \u0647\u0630\u0627 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f","Where does this animal live?",e,C.L)
i=B.a(["feed_animal"],c9)
f=B.a(["nature"],c9)
d=B.a([b1],c9)
f=A.fd("sci_animals_food",D.Cd,2,6,"\u0645\u0627\u0630\u0627 \u064a\u0623\u0643\u0644 \u0643\u0644 \u062d\u064a\u0648\u0627\u0646\u061f","What does each animal eat?","\u0623\u0637\u0639\u0645 \u0627\u0644\u062d\u064a\u0648\u0627\u0646 \u0637\u0639\u0627\u0645\u0647","Feed the animal its food",B.a(["feed_pet","water_plant"],c9),d,C.L,b7,b8,i,C.L,"\u0645\u0627\u0630\u0627 \u064a\u0623\u0643\u0644 \u0647\u0630\u0627 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f","What does this animal eat?",f,C.L)
i=A.fd("sci_plants",D.Cd,3,6,"\u0623\u0631\u0627\u0642\u0628 \u0627\u0644\u0646\u0628\u0627\u062a","I watch a plant grow","\u0623\u0633\u0642\u064a \u0646\u0628\u062a\u0629 \u0648\u0623\u0631\u0627\u0642\u0628\u0647\u0627","Water a plant and watch it",B.a(["water_plant","plant_watch","leaf_hunt"],c9),C.L,C.L,"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0648\u0627\u0644\u062f \u0644\u0644\u0646\u0634\u0627\u0637","A parent confirms the activity",C.L,C.L,"\u0627\u0633\u0642\u0650 \u0627\u0644\u0646\u0628\u062a\u0629 \u0643\u0644 \u064a\u0648\u0645 \u0648\u0627\u0646\u0638\u0631 \u0643\u064a\u0641 \u062a\u0643\u0628\u0631.","Water the plant every day and see it grow.",C.L,C.L)
d=B.a(["fam_mother","fam_father","fam_baby","fam_brother","fam_sister","fam_grandfather","fam_grandmother","fam_uncle","fam_aunt"],c9)
a0=B.a(["family pictures drawn in Rehlaty style (no photos)"],c9)
a1=B.a(["approved family-word recordings"],c9)
d=A.fd("fam_names",D.Ce,1,6,"\u0623\u0641\u0631\u0627\u062f \u0639\u0627\u0626\u0644\u062a\u064a","The people in my family","\u0623\u0633\u0645\u0651\u064a \u0645\u0646 \u0641\u064a \u0639\u0627\u0626\u0644\u062a\u064a","Name the people in my family",B.a(["my_name_address"],c9),a0,a1,c3,c4,C.L,C.L,"\u0645\u0646 \u0647\u0630\u0627\u061f \u0647\u0630\u0647 \u0645\u0627\u0645\u0627.","Who is this? This is Mum.",C.L,d)
a1=B.a(["clo_shirt","clo_trousers","clo_dress","clo_socks","clo_coat","clo_pyjamas","clo_bag","clo_scarf"],c9)
a0=B.a(["clothes pictures"],c9)
a2=B.a(["approved clothes-word recordings"],c9)
a1=A.fd("clo_names",D.Ce,2,6,"\u0645\u0644\u0627\u0628\u0633\u064a","My clothes","\u0623\u0633\u0645\u0651\u064a \u0645\u0644\u0627\u0628\u0633\u064a \u0648\u0623\u0631\u062a\u062f\u064a \u0645\u0627 \u064a\u0646\u0627\u0633\u0628 \u0627\u0644\u0637\u0642\u0633","Name my clothes and dress for the weather",B.a(["dress_self","sort_socks","sort_laundry"],c9),a0,a2,c3,c4,C.L,C.L,"\u0645\u0627\u0630\u0627 \u0646\u0644\u0628\u0633 \u0627\u0644\u064a\u0648\u0645\u061f","What do we wear today?",C.L,a1)
a2=B.a(["next_in_day"],c9)
a0=B.a(["sequence"],c9)
a3=B.a(["routine pictures"],c9)
a0=A.fd("life_routine",D.Ce,3,6,"\u0623\u0631\u062a\u0651\u0628 \u064a\u0648\u0645\u064a","I order my day",c5,c6,B.a(["day_routine","brush_teeth","wash_hands"],c9),a3,C.L,b7,b8,a2,C.L,c5,c6,a0,C.L)
a2=A.fd("logic_odd",D.jK,3,6,"\u0623\u062c\u062f \u0627\u0644\u0645\u062e\u062a\u0644\u0641","I find the odd one out","\u062b\u0644\u0627\u062b \u0635\u0648\u0631 \u0645\u062a\u0634\u0627\u0628\u0647\u0629 \u0648\u0648\u0627\u062d\u062f\u0629 \u0645\u062e\u062a\u0644\u0641\u0629","Three alike, one different",C.L,C.L,C.L,b7,b8,B.a(["odd_one_out"],c9),C.L,"\u0623\u064a\u0651 \u0635\u0648\u0631\u0629 \u0645\u062e\u062a\u0644\u0641\u0629\u061f","Which picture is different?",B.a(["shapes"],c9),C.L)
a3=A.fd("logic_pattern",D.jK,4,6,"\u0623\u0643\u0645\u0644 \u0627\u0644\u0646\u0645\u0637","I complete the pattern",c7,c8,C.L,C.L,C.L,b7,b8,B.a(["pattern"],c9),C.L,c7,c8,B.a(["sequence"],c9),C.L)
a4=B.a(["sort_groups"],c9)
a5=B.a(["vocab"],c9)
a5=A.fd("logic_sort",D.jK,4,6,"\u0623\u0635\u0646\u0651\u0641 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u0627\u062a","I sort into groups","\u0623\u0636\u0639 \u0643\u0644 \u0634\u064a\u0621 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u062a\u0647","Put each thing in its group",B.a(["sort_color","socks_pairs"],c9),C.L,C.L,b7,b8,a4,C.L,"\u0636\u0639 \u0643\u0644 \u0634\u064a\u0621 \u0645\u0639 \u0623\u0645\u062b\u0627\u0644\u0647.","Put each thing with its kind.",a5,C.L)
a4=A.fd("logic_memory",D.jK,3,6,"\u0623\u062a\u0630\u0643\u0651\u0631 \u0627\u0644\u0623\u0632\u0648\u0627\u062c","I remember pairs","\u0623\u0644\u0639\u0628 \u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629","Play the memory game",C.L,C.L,C.L,c1,c2,B.a(["memory","match_pictures"],c9),C.L,"\u0627\u0642\u0644\u0628 \u0628\u0637\u0627\u0642\u062a\u064a\u0646 \u0648\u0627\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0632\u0648\u062c.","Turn two cards and find the pair.",B.a(["memory"],c9),C.L)
a6=A.fd("logic_planning",D.jK,4,6,"\u0623\u062e\u0637\u0651\u0637 \u0637\u0631\u064a\u0642\u064a","I plan my way","\u0623\u062c\u062f \u0627\u0644\u0637\u0631\u064a\u0642 \u0641\u064a \u0627\u0644\u0645\u062a\u0627\u0647\u0629","Find the way through the maze",C.L,C.L,C.L,c1,c2,B.a(["maze"],c9),C.L,"\u0633\u0627\u0639\u062f \u0627\u0644\u0641\u0623\u0631 \u0644\u064a\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u062c\u0628\u0646.","Help the mouse reach the cheese.",C.L,C.L)
a7=B.a(["feelings"],c9)
a8=B.a(["reviewed Adam and Nour dialogue recordings"],c9)
a7=A.fd("emo_feelings",D.bIm,3,6,"\u0623\u0633\u0645\u0651\u064a \u0634\u0639\u0648\u0631\u064a \u0648\u0623\u062a\u0635\u0631\u0641 \u0628\u0644\u0637\u0641","I name my feeling and act kindly","\u0645\u0648\u0627\u0642\u0641 \u0642\u0635\u064a\u0631\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0627\u0639\u0631","Short feelings scenarios",B.a(["three_good","thank_card"],c9),C.L,a8,"\u0625\u0646\u0647\u0627\u0621 \u0645\u0633\u062a\u0648\u0649","Finish a level",C.L,C.L,"\u0643\u064a\u0641 \u064a\u0634\u0639\u0631 \u0647\u0630\u0627 \u0627\u0644\u0637\u0641\u0644\u061f","How does this child feel?",a7,C.L)
a8=A.fd("art_free",D.bIn,2,6,"\u0623\u0631\u0633\u0645 \u0648\u0623\u0639\u0628\u0651\u0631","I draw and express myself","\u0623\u0631\u0633\u0645 \u062b\u0645 \u0623\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Draw then press \u201cdone\u201d",B.a(["play_dough"],c9),C.L,C.L,"\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Pressing \u201cdone\u201d",C.L,C.L,"\u0627\u0631\u0633\u0645 \u0645\u0627 \u062a\u062d\u0628.","Draw what you like.",C.L,C.L)
a9=B.a(["story"],c9)
b0=B.a(["recorded narration (device voice today)"],c9)
return B.a([d0,w,d1,u,d2,t,r,s,p,n,v,q,m,k,l,o,j,g,h,e,f,i,d,a1,a0,a2,a3,a5,a4,a6,a7,a8,A.fd("story_listen",D.bIo,1,6,"\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629 \u0642\u0635\u064a\u0631\u0629","I listen to a short story","\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629","Listen to a story",C.L,B.a(["only 2 stories fit ages 1\u20132"],c9),b0,"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0642\u0635\u0629 (\u0627\u0633\u062a\u0645\u0627\u0639 \u0641\u0642\u0637\u060c \u0644\u0627 \u064a\u064f\u0639\u062f\u0651 \u0625\u062a\u0642\u0627\u0646\u064b\u0627)","Finishing a story (listening only, never counted as mastery)",C.L,C.L,"\u0647\u064a\u0627 \u0646\u0633\u0645\u0639 \u0642\u0635\u0629.","Let's hear a story.",a9,C.L)],B.a4("x<IH>"))})
x($,"cID","cgw",()=>B.a([A.CY("all","\u2728",new A.bSb(),C.ew),A.CY("brain","\ud83e\udde0",new A.bSc(),D.bFf),A.CY("letters","\ud83d\udd24",new A.bSd(),D.bEX),A.CY("numbers","\ud83d\udd22",new A.bSe(),D.bF6),A.CY("shapes","\ud83c\udfa8",new A.bSf(),D.bEV),A.CY("animals","\ud83e\udd81",new A.bSg(),D.bEY),A.CY("observe","\ud83e\udde9",new A.bSh(),D.bF3),A.CY("create","\ud83d\udd8d\ufe0f",new A.bSi(),D.bF2)],y.j))})()};
(a=>{a["/inMzfS6TpQ55QIxjBJNnffSx9Q="]=a.current})($__dart_deferred_initializers__);