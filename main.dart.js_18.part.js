((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,E,A={B5:function B5(d,e){this.c=d
this.a=e},alu:function alu(d){var _=this
_.d=null
_.e=d
_.c=_.a=null},bbe:function bbe(d,e,f){this.a=d
this.b=e
this.c=f},bbh:function bbh(d){this.a=d},bbi:function bbi(d){this.a=d},bbj:function bbj(d){this.a=d},bbf:function bbf(d){this.a=d},bbg:function bbg(d){this.a=d},bbk:function bbk(){},bbl:function bbl(){},bbm:function bbm(d,e,f){this.a=d
this.b=e
this.c=f},bbn:function bbn(d){this.a=d},bbo:function bbo(){},aeq:function aeq(d,e,f){this.c=d
this.d=e
this.a=f},aRk:function aRk(){},aRj:function aRj(){},aRi:function aRi(d){this.a=d},
czh(d){var x,w
for(x=0;x<6;++x){w=D.bcf[x]
if(w.a===d)return w}return null},
cAy(d,e){var x,w,v,u,t,s
switch(d.a.a){case 0:for(x=$.bWT(),w=d.b,v=0;v<11;++v){u=x[v]
if(u.a===w){x=e>=u.e&&e<=u.f
return new B.GR(x,u.b)}}break
case 1:for(x=$.c23(),w=d.b,v=0;v<2;++v){u=x[v]
if(u.a===w){x=u.b.$0()
return new B.GR(e>=u.c&&e<=u.d,x)}}break
case 2:for(x=d.b,v=0;v<17;++v){t=C.tA[v]
if(t.a===x){x=B.e(t.b)
return new B.GR(e>=t.d&&e<=t.e,x)}}break
case 3:for(x=$.c27(),w=d.b,v=0;v<17;++v){s=x[v]
if(s.a===w){x=s.f.$0()
return new B.GR(e>=s.d&&e<=s.e,x)}}break}return null},
ccT(d,e){var x,w,v,u
for(x=d.length,w=null,v=0;v<x;++v){u=A.cAy(d[v],e)
if(u==null)continue
if(w==null)w=u
if(u.a)return u}return w},
czf(d,e){var x,w,v,u,t
for(x=d.b,w=0;w<3;++w){v=x[w]
u=$.ch2()
t=B.vd(new B.an(u,new A.bUd(v),B.a_(u).i("an<1>")))
if(t!=null&&e>=t.c&&e<=t.d)return t}return null},
cAd(d){var x
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
czi(d,e,f){var x,w,v,u,t,s,r,q=A.czh(d.a)
if(q==null)return null
x=A.ccT(q.c,e)
x=x==null?null:x.b
w=A.czf(q,e)
v=B.a([],y.s)
for(u=q.d,t=u.length,s=0;s<t;++s){r=u[s]
if(f.p(0,r))v.push(r)}u=A.ccT(q.e,e)
return new A.aRh(x,w,v,u==null?null:u.b)},
vA:function vA(d,e){this.a=d
this.b=e},
LU:function LU(d,e){this.a=d
this.b=e},
ix:function ix(d,e){this.a=d
this.b=e},
vh:function vh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bUd:function bUd(d){this.a=d},
aRh:function aRh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
ff(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return new A.IU(d,f,g,new A.bMH(h,i))},
qs:function qs(d,e){this.a=d
this.b=e},
IU:function IU(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
bMH:function bMH(d,e){this.a=d
this.b=e},
cze(d){var x,w,v,u,t,s=d.c,r=d.a,q=new A.bUb(),p=[new B.le(["balloons",new A.bTQ(),1,2,new A.bTR()]),new B.le(["animal",new A.bTS(),1,2,new A.bU2()]),new B.le(["colors",new A.bU4(),2,3,new A.bU5()]),new B.le(["letters",new A.bU6(),3,8,new A.bU7()]),new B.le(["memory",new A.bU8(),3,6,new A.bU9()]),new B.le(["math",new A.bUa(),4,12,new A.bTT(s)])],o=B.a([],y.W)
for(x=0;x<6;++x){w=p[x]
v=w.a
if(s>=v[2]&&s<=v[3])o.push(new A.vg(v[0],v[1],new A.bTU(q,w),!1))}for(v=B.c0m(s),u=v.length,x=0;x<v.length;v.length===u||(0,B.w)(v),++x){w=v[x]
t=w.a
if(D.bF1.p(0,t))o.push(new A.vg(t,w.b,new A.bTV(r,w,q,s,d),!0))}o.push(new A.vg("drawing",new A.bTW(),new A.bTX(q,d),!1))
o.push(new A.vg("stories",new A.bTY(),new A.bTZ(q,d),!1))
o.push(new A.vg("adventures",new A.bU_(),new A.bU0(q,d),!1))
o.push(new A.vg("feelings",new A.bU1(),new A.bU3(q,d),!1))
return o},
cmi(d,e,f){return new A.Vk(d,f,e)},
vg:function vg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUb:function bUb(){},
bUc:function bUc(d){this.a=d},
bTQ:function bTQ(){},
bTR:function bTR(){},
bTS:function bTS(){},
bU2:function bU2(){},
bU4:function bU4(){},
bU5:function bU5(){},
bU6:function bU6(){},
bU7:function bU7(){},
bU8:function bU8(){},
bU9:function bU9(){},
bUa:function bUa(){},
bTT:function bTT(d){this.a=d},
bTU:function bTU(d,e){this.a=d
this.b=e},
bTP:function bTP(d){this.a=d},
bTV:function bTV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTO:function bTO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTW:function bTW(){},
bTX:function bTX(d,e){this.a=d
this.b=e},
bTN:function bTN(d){this.a=d},
bTY:function bTY(){},
bTZ:function bTZ(d,e){this.a=d
this.b=e},
bTM:function bTM(d){this.a=d},
bU_:function bU_(){},
bU0:function bU0(d,e){this.a=d
this.b=e},
bTL:function bTL(d){this.a=d},
bU1:function bU1(){},
bU3:function bU3(d,e){this.a=d
this.b=e},
bTK:function bTK(d){this.a=d},
Vk:function Vk(d,e,f){this.c=d
this.d=e
this.a=f},
aqu:function aqu(){this.d=$
this.c=this.a=null},
bou:function bou(d,e){this.a=d
this.b=e},
bos:function bos(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bor:function bor(d,e,f){this.a=d
this.b=e
this.c=f},
boq:function boq(d,e,f){this.a=d
this.b=e
this.c=f},
bop:function bop(d){this.a=d},
bot:function bot(d,e){this.a=d
this.b=e},
Bj:function Bj(d){this.a=d},
a0D:function a0D(){this.d=$
this.c=this.a=null},
bdu:function bdu(d,e){this.a=d
this.b=e},
bdv:function bdv(d){this.a=d},
bdw:function bdw(){},
bdx:function bdx(d,e){this.a=d
this.b=e},
en:function en(d,e){this.a=d
this.b=e},
GA:function GA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Da:function Da(d){this.a=d},
a2C:function a2C(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=$
_.w=f
_.x=0
_.z=_.y=!1
_.c=_.a=null},
bp8:function bp8(d,e){this.a=d
this.b=e},
bp9:function bp9(d){this.a=d},
bpa:function bpa(d){this.a=d},
bpc:function bpc(d,e){this.a=d
this.b=e},
bpb:function bpb(d,e){this.a=d
this.b=e},
bpd:function bpd(d,e){this.a=d
this.b=e},
Ar:function Ar(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dq:function Dq(d,e){this.c=d
this.a=e},
a2N:function a2N(d,e){var _=this
_.d=d
_.f=_.e=$
_.r=e
_.w=0
_.y=_.x=!1
_.c=_.a=null},
bqB:function bqB(d,e){this.a=d
this.b=e},
bqC:function bqC(d){this.a=d},
bqD:function bqD(d){this.a=d},
bqE:function bqE(d,e){this.a=d
this.b=e},
FY:function FY(d){this.a=d},
a68:function a68(d){var _=this
_.d=d
_.e=$
_.f=null
_.r=0
_.c=_.a=null},
bJd:function bJd(d,e){this.a=d
this.b=e},
bJe:function bJe(d,e){this.a=d
this.b=e}},D
B=c[0]
C=c[2]
E=c[17]
A=a.updateHolder(c[6],A)
D=c[16]
A.B5.prototype={
S(){var x=y.N
return new A.alu(B.A(x,x))}}
A.alu.prototype={
ae(){this.aw()
this.Ap()},
Ap(){var x=0,w=B.m(y.H),v=this,u,t,s
var $async$Ap=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:u=v.a.c
x=2
return B.d(B.r3(u.a,u.c,!0,$.m2().e),$async$Ap)
case 2:t=e
x=3
return B.d(B.Qv(v.a.c.a),$async$Ap)
case 3:s=e
if(v.c!=null)v.u(new A.bbe(v,t,s))
return B.k(null,w)}})
return B.l($async$Ap,w)},
LA(d){return this.aU6(d)},
aU6(d){var x=0,w=B.m(y.H),v=this,u,t,s,r
var $async$LA=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:r={}
r.a=null
if(d.a==="game"){u=C.e.hW($.ua(),new A.bbh(d))
t=v.a.c
r.a=u.r.$3(t.a,t.c,$.h().a)}else{s=C.e.hW(B.Hq(),new A.bbi(d))
r.a=B.b5x(v.a.c,s)}t=v.c
t.toString
r=B.bG(new A.bbj(r),null,y.H)
x=2
return B.d(B.ap(t,!1).bi(r),$async$LA)
case 2:if(v.c!=null)v.Ap()
return B.k(null,w)}})
return B.l($async$LA,w)},
a8P(d){return d.a==="game"?C.e.hW($.ua(),new A.bbf(d)).b.$0():C.e.hW(B.Hq(),new A.bbg(d)).b},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=$.h(),g=B.bD(j,!0,j,j,j,j,j,j,B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"Weekly adventure",j,j,j,j,j,j,j,j,j),j)
if(i==null)h=C.bi
else{x=B.a6(170,C.dD.q()>>>16&255,C.dD.q()>>>8&255,C.dD.q()&255)
w=i.a
v=w.b
u=B.c(v.b.$0(),j,j,j,j,j,C.eA,C.a4,j,j)
t=B.c(v.c.$0(),j,j,j,j,j,C.hJ,C.a4,j,j)
if(i.c)s=h.a==="ar"?"\u062e\u0644\u0635\u062a \u0645\u063a\u0627\u0645\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639!":"You finished this week's adventure!"
else{s=i.b
r=B.a_(s).i("an<1>")
q="\u062e\u0644\u0635\u062a "+new B.an(s,new A.bbk(),r).gA(0)+" \u0645\u0646 "+s.length+". \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0639\u062c\u0627\u0644."
s="Finished "+new B.an(s,new A.bbl(),r).gA(0)+" of "+s.length+". No rush."
if(h.a==="ar")s=q}r=y.D
x=B.a([new B.bV(B.a1(B.a([u,t,C.b3,B.c(s,D.bSx,j,j,j,j,C.a2s,j,j,j)],r),C.y,j,C.r,C.v,0,C.z),x,C.a8,C.aN,j,24,j,D.bSy)],r)
u=i.e
if(u!=null)x.push(new B.X(C.fM,new B.BC(u,96,j),j))
x.push(C.c1)
w=w.c
if(w.length===0)x.push(B.c(h.a==="ar"?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0644\u0639\u0627\u0628 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u0631 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639. \u062c\u0631\u0651\u0628 \u0627\u0643\u062a\u0634\u0641 \u0645\u0639 \u0645\u0627\u0645\u0627 \u0648\u0628\u0627\u0628\u0627.":"No games fit this age this week. Try discovering with mum and dad.",j,j,j,j,j,j,C.a4,j,j))
for(u=i.b,t=y.O,p=0;p<w.length;++p){s=k.a8P(w[p])
q=u[p]
if(q)o=h.a==="ar"?"\u062a\u0645":"done"
else o=h.a==="ar"?"\u0644\u0645 \u064a\u062a\u0645 \u0628\u0639\u062f":"not yet"
n=q?D.agm:C.t
m=q?C.ed:D.anb
m=B.c6(m,q?C.pd:C.a8,j,32)
l=B.c(k.a8P(w[p]),j,j,j,j,j,C.k0,j,j,j)
x.push(new B.X(C.fL,new B.ct(new A.bbm(k,i,p),new B.bV(B.at(B.a([m,C.bw,new B.ep(1,C.bI,l,j),B.c6(w[p].a==="story"?C.qz:C.n5,C.O,j,j)],r),C.y,j,C.r,C.v,0,j),n,C.a8,C.aN,j,24,j,new B.N("adventure_step_"+p,t)),20,s+", "+o,!1,!0,j),j))}x.push(new A.aeq(v,k.a.c.c,j))
w=k.e
if(w.gc2(w)){w=B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a\u064a":"My adventures",j,j,j,j,j,C.ey,j,j,j)
v=B.a([],r)
for(h=k.e.gcF(),h=h.c9(h),u=B.a_(h).i("cD<1>"),h=new B.cD(h,u),h=new B.ba(h,h.gA(0),u.i("ba<ak.E>")),u=u.i("ak.E");h.t();){s=h.d
if(s==null)s=u.a(s)
v.push(B.n4(D.apA,j,new B.N("adventure_past_"+s.a,t),B.c(C.e.kQ($.aAa(),new A.bbn(s),new A.bbo()).b.$0(),j,j,j,j,j,j,j,j,j),j,j))}C.e.O(x,B.a([C.a7,w,C.b3,B.b_(C.J,v,C.a1,j,C.J,8,8)],r))}h=B.iv(x,j,j,C.as,j,C.ac,!1)}return B.bj(g,j,h,j,!1,j,j)}}
A.aeq.prototype={
v(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=B.a9(y.N)
for(x=$.ua(),w=this.d,v=0;v<24;++v){u=x[v]
if(w>=u.e&&w<=u.f)m.C(0,u.a)}t=A.czi(this.c,w,m)
if(t==null)return C.aW
m=new A.aRk()
x=$.h()
w=B.c(x.a==="ar"?"\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0639\u0644\u0651\u0645":"Learning path",n,n,n,n,n,C.a2e,n,n,n)
s=m.$3(D.bxg,t.b,C.qu)
r=t.c
r=m.$3(D.bxh,r==null?n:r.e.$0(),D.anT)
q=t.d
q=m.$3(D.bxi,q.length===0?n:new B.a3(q,new A.aRj(),B.a_(q).i("a3<1,n>")).aC(0,B.e("\u060c ")),C.n5)
p=t.e
if(p==null)p=n
else{o=x.a==="ar"?"\u0645\u0639 \u0634\u062e\u0635 \u0628\u0627\u0644\u063a":"with a grown-up"
o=p+" ("+o+")"
p=o}p=m.$3(D.bxj,p,C.qw)
return new B.X(C.fM,new B.bV(B.a1(B.a([w,s,r,q,p,m.$3(D.bxk,x.a==="ar"?"\u0639\u0646\u062f \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u064a\u064f\u0633\u062c\u064e\u0651\u0644 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"When the steps are done the week's adventure is recorded",C.J4)],y.D),C.X,n,C.r,C.v,0,C.z),C.t,C.a8,C.aN,n,24,n,D.bUb),n)}}
A.vA.prototype={
I(){return"PhaseKind."+this.b}}
A.LU.prototype={
I(){return"RefKind."+this.b}}
A.ix.prototype={}
A.vh.prototype={}
A.aRh.prototype={}
A.qs.prototype={
I(){return"Strand."+this.b}}
A.IU.prototype={}
A.vg.prototype={}
A.Vk.prototype={
S(){return new A.aqu()}}
A.aqu.prototype={
v(d){return new B.hm(D.a8s,C.de,B.fz(new A.bou(this,A.cze(this.a.c))),D.bUa)}}
A.Bj.prototype={
S(){return new A.a0D()}}
A.a0D.prototype={
ae(){this.aw()
this.d=B.bn(6,!1,!1,y.y)},
aW6(d){var x=this.d
x===$&&B.b()
if(x[d])return
this.u(new A.bdu(this,d))},
aYq(){return this.u(new A.bdv(this))},
v(d){var x,w,v,u,t,s=this,r=null,q=s.d
q===$&&B.b()
x=C.e.dn(q,new A.bdw())
q=B.bD(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
w=y.D
if(x)w=B.a1(B.a([C.qH,C.aY,B.c(B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,36,r,r,C.am,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),C.f0,B.cG(B.c(B.e("\u0627\u0644\u0639\u0628 \u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gaYp(),r)],w),C.y,r,C.r,C.ah,0,C.z)
else{w=B.a([],w)
for(v=0;v<6;++v){u=s.d[v]?0:1
t=new B.aO(55,55)
w.push(new B.ct(new A.bdx(s,v),new B.r4(B.aR(r,r,C.G,r,r,new B.aD(C.nB[C.h.ak(v,6)],r,r,new B.cs(t,t,t,t),r,r,C.a0),r,130,r,r,r,r,r,110),u,C.aP,C.d_,r,r),20,r,!1,!0,r))}w=B.b_(C.b_,w,C.a1,r,C.J,24,24)}return B.bj(q,r,new B.rD(B.bg(w,r,r,r),r),r,!1,r,r)}}
A.en.prototype={}
A.GA.prototype={}
A.Da.prototype={
S(){return new A.a2C(C.aK,D.a4j,B.a9(y.S))}}
A.a2C.prototype={
ae(){this.aw()
this.Yx()},
Yx(){var x=this,w=B.K(x.e.e,y.r)
C.e.bl(w,x.d)
x.f=B.c9(w,0,B.cE(5,"count",y.S),B.a_(w).c).c9(0)
x.x=0
x.aez()},
aez(){var x,w,v,u=this,t=u.f
t===$&&B.b()
x=C.o.az(t[u.x].b,0,1)
t=y.s
w=B.a(u.e.d.split(""),t)
C.e.N(w,x)
v=u.d
C.e.bl(w,v)
t=B.a([x],t)
C.e.O(t,B.c9(w,0,B.cE(2,"count",y.S),y.N))
C.e.bl(t,v)
u.r=t
u.w.W(0)
u.z=u.y=!1},
No(d){return this.b0S(d)},
b0S(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$No=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.y||u.w.p(0,d)){x=1
break}t=u.r
t===$&&B.b()
t=t[d]
s=u.f
s===$&&B.b()
s=C.o.az(s[u.x].b,0,1)
if(t!==s){u.z=!0
u.u(new A.bp8(u,d))
x=1
break}B.lJ("letters_"+u.e.a,!u.z,$.cp().d,s)
u.u(new A.bp9(u))
x=3
return B.d(B.jj(C.hh,null,y.z),$async$No)
case 3:if(u.c==null){x=1
break}u.u(new A.bpa(u))
case 1:return B.k(v,w)}})
return B.l($async$No,w)},
Nn(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Nn=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u5(t),$async$Nn)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaRv())
case 1:return B.k(v,w)}})
return B.l($async$Nn,w)},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.bD(l,!0,C.Z,l,l,l,l,l,B.c(B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a"),l,l,l,l,l,C.uY,l,l,l),l),j=y.D,i=B.a([],j)
for(x=0;x<4;++x){w=D.bm0[x]
i.push(B.dx(l,B.c(B.e(w.b),l,l,l,l,l,C.k2,l,l,l),l,new A.bpc(m,w),w===m.e,l))}i=B.a([B.b_(C.b_,i,C.a1,l,C.J,0,8),C.f0],j)
if(m.x>=5)i.push(new B.MK(m.gaRu(),l))
else{v=B.c(m.y?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0623\u0648\u0644 \u062d\u0631\u0641"),l,l,l,l,l,C.uZ,l,l,l)
u=m.f
u===$&&B.b()
u=u[m.x]
t=B.c(u.a,l,l,l,l,l,C.uX,l,l,l)
s=m.e.c?C.c2:C.aB
s=B.c(u.b,l,l,l,l,l,D.bNf,l,s,l)
u=B.a([],j)
r=m.w
q=0
for(;;){p=m.r
p===$&&B.b()
if(!(q<p.length))break
p=r.p(0,q)?0.15:1
o=C.nB[(q+3)%6]
n=new B.aO(24,24)
u.push(new B.r4(new B.ct(new A.bpd(m,q),B.aR(C.W,B.c(m.r[q],l,l,l,l,l,D.bM0,l,l,l),C.G,l,l,new B.aD(o,l,l,new B.cs(n,n,n,n),l,l,C.a0),l,96,l,l,l,l,l,96),20,l,!1,!0,l),p,C.aP,C.d_,l,l));++q}C.e.O(i,B.a([v,C.aY,t,s,C.f0,B.b_(C.b_,u,C.a1,l,C.J,16,16)],j))}return B.bj(k,l,new B.rD(B.bg(B.d3(B.a1(i,C.y,l,C.r,C.ah,0,C.z),l,C.T,l,C.as,l,l,C.ac),l,l,l),l),l,!1,l,l)}}
A.Ar.prototype={}
A.Dq.prototype={
S(){return new A.a2N(C.aK,B.a9(y.S))}}
A.a2N.prototype={
ae(){this.aw()
this.af1()},
aS0(){var x,w,v,u,t,s=this,r=null,q="addition",p=s.a.c
if(p<=5){x=p<=4?5:10
w=1+s.d.c7(x)
return new A.Ar(w,B.e("\u0643\u0627\u0645\u061f"),w,"counting")}if(p<=7){v=p===6?10:20
x=s.d
u=1+x.c7(v-1)
t=1+x.c7(v-u)
return new A.Ar(r,""+u+" + "+t+" = ?",u+t,q)}if(p<=9){x=s.d
u=10+x.c7(41)
if(x.Su()){t=1+x.c7(50)
return new A.Ar(r,""+u+" + "+t+" = ?",u+t,q)}t=1+x.c7(u-1)
return new A.Ar(r,""+u+" - "+t+" = ?",u-t,"subtraction")}x=s.d
u=2+x.c7(8)
t=2+x.c7(11)
return new A.Ar(r,""+u+" \xd7 "+t+" = ?",u*t,"multiplication")},
af1(){var x,w=this,v=B.a([],y.q)
for(x=0;x<5;++x)v.push(w.aS0())
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
C.e.bl(w,u)
r=B.a([x],r)
t=y.S
C.e.O(r,B.c9(w,0,B.cE(2,"count",t),t))
C.e.bl(r,u)
s.f=r
s.r.W(0)
s.y=s.x=!1},
NB(d){return this.b0T(d)},
b0T(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$NB=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.x||u.r.p(0,d)){x=1
break}t=u.f
t===$&&B.b()
t=t[d]
s=u.e
s===$&&B.b()
s=s[u.w]
if(t!==s.c){u.y=!0
u.u(new A.bqB(u,d))
x=1
break}B.lJ(s.d,!u.y,$.cp().d,null)
u.u(new A.bqC(u))
x=3
return B.d(B.jj(C.hh,null,y.z),$async$NB)
case 3:if(u.c==null){x=1
break}u.u(new A.bqD(u))
case 1:return B.k(v,w)}})
return B.l($async$NB,w)},
NA(){var x=0,w=B.m(y.H),v,u=this,t
var $async$NA=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u5(t),$async$NA)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaSG())
case 1:return B.k(v,w)}})
return B.l($async$NA,w)},
v(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bD(o,!0,C.Z,o,o,o,o,o,B.c(B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a"),o,o,o,o,o,B.ar(o,o,o,o,o,o,o,o,o,o,o,26,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o)
if(p.w>=5)x=new B.MK(p.gaS_(),o)
else{x=y.D
w=B.a([B.c(p.x?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"),o,o,o,o,o,C.uZ,o,o,o),C.f0],x)
v=p.e
v===$&&B.b()
u=v[p.w].a
if(u!=null){v=B.a([],x)
for(t=0;t<u;++t)v.push(D.bQ1)
w.push(B.b_(C.b_,v,C.a1,o,C.J,0,8))}if(p.e[p.w].a!=null)w.push(C.a7)
w.push(B.c(p.e[p.w].b,o,o,o,o,o,D.bOX,o,C.aB,o))
w.push(C.Ca)
x=B.a([],x)
v=p.r
t=0
for(;;){s=p.f
s===$&&B.b()
if(!(t<s.length))break
s=v.p(0,t)?0.15:1
r=C.nB[(t+2)%6]
q=new B.aO(24,24)
x.push(new B.r4(new B.ct(new A.bqE(p,t),B.aR(C.W,B.c(""+p.f[t],o,o,o,o,o,D.bJQ,o,o,o),C.G,o,o,new B.aD(r,o,o,new B.cs(q,q,q,q),o,o,C.a0),o,104,o,o,o,o,o,104),20,o,!1,!0,o),s,C.aP,C.d_,o,o));++t}w.push(B.b_(C.b_,x,C.a1,o,C.J,16,16))
x=B.d3(B.a1(w,C.y,o,C.r,C.ah,0,C.z),o,C.T,o,C.as,o,o,C.ac)}return B.bj(n,o,new B.rD(B.bg(x,o,o,o),o),o,!1,o,o)}}
A.FY.prototype={
S(){return new A.a68(C.aK)}}
A.a68.prototype={
ae(){this.aw()
this.akE()},
akE(){var x=this,w=B.K(D.bej,y.N)
C.e.bl(w,x.d)
x.e=B.c9(w,0,B.cE(3,"count",y.S),B.a_(w).c).c9(0)
x.f=null;++x.r},
b0X(d){if(this.f!=null)return
this.u(new A.bJd(this,d))},
b3y(){return this.u(this.gb3w())},
v(d){var x,w,v,u,t,s=this,r=null,q=B.bD(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r),p=B.c(s.f==null?B.e("\u0627\u062e\u062a\u0627\u0631 \u0635\u0646\u062f\u0648\u0642"):B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,C.uZ,r,r,r),o=y.D,n=B.a([],o)
for(x=0;x<3;++x){w=s.f===x
v=w?C.nB[x]:C.t
u=new B.aO(24,24)
t=new B.aZ(C.xa,3,C.a6,-1)
if(w){w=s.e
w===$&&B.b()
w=w[x]}else w="\ud83d\udce6"
n.push(new B.ct(new A.bJe(s,x),B.aR(C.W,B.c(w,r,r,r,r,r,D.bMj,r,r,r),C.G,r,r,new B.aD(v,r,new B.dZ(t,t,t,t),new B.cs(u,u,u,u),r,r,C.a0),r,110,r,r,r,r,r,110),20,r,!1,!0,r))}p=B.a([p,C.f0,B.b_(C.b_,n,C.a1,r,C.J,20,20),C.Ca],o)
if(s.f!=null)p.push(B.cG(B.c(B.e("\u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gb3x(),r))
return B.bj(q,r,new B.rD(B.bg(B.a1(p,C.y,r,C.r,C.ah,0,C.z),r,r,r),r),r,!1,r,r)}}
var z=a.updateTypes(["~()","a7<~>()","f(vA,n?,ac)","E(IU)","Bj()","FY()","Da()","Dq()","B5()"])
A.bbe.prototype={
$0(){var x=this.a
x.d=this.b
x.e=this.c},
$S:0}
A.bbh.prototype={
$1(d){return d.a===this.a.b},
$S:129}
A.bbi.prototype={
$1(d){return d.a===this.a.b},
$S:398}
A.bbj.prototype={
$1(d){var x=this.a.a
x.toString
return x},
$S:10}
A.bbf.prototype={
$1(d){return d.a===this.a.b},
$S:129}
A.bbg.prototype={
$1(d){return d.a===this.a.b},
$S:398}
A.bbk.prototype={
$1(d){return d},
$S:59}
A.bbl.prototype={
$1(d){return d},
$S:59}
A.bbm.prototype={
$0(){return this.a.LA(this.b.a.c[this.c])},
$S:0}
A.bbn.prototype={
$1(d){return d.a===this.a.b},
$S:1155}
A.bbo.prototype={
$0(){return C.e.gZ($.aAa())},
$S:1156}
A.aRk.prototype={
$3(d,e,f){var x=null
return e==null?C.aW:new B.X(C.mS,B.at(B.a([B.c6(f,C.c4,x,22),C.ch,B.c(A.cAd(d)+": ",x,x,x,x,x,D.bNb,x,x,x),B.aX(B.c(e,x,x,x,x,x,C.hJ,x,x,x),1)],y.D),C.y,x,C.r,C.v,0,x),x)},
$S:z+2}
A.aRj.prototype={
$1(d){return C.e.hW($.ua(),new A.aRi(d)).b.$0()},
$S:23}
A.aRi.prototype={
$1(d){return d.a===this.a},
$S:129}
A.bUd.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.bMH.prototype={
$0(){var x=this.a,w=this.b
return $.h().a==="ar"?x:w},
$S:1}
A.bUb.prototype={
$2(d,e){var x=B.bG(new A.bUc(e),null,y.H)
return B.ap(d,!1).bi(x)},
$S:1157}
A.bUc.prototype={
$1(d){return this.a.$0()},
$S:10}
A.bTQ.prototype={
$0(){return B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a")},
$S:1}
A.bTR.prototype={
$0(){return D.a7k},
$S:z+4}
A.bTS.prototype={
$0(){return B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f")},
$S:1}
A.bU2.prototype={
$0(){return D.bYc},
$S:z+5}
A.bU4.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646")},
$S:1}
A.bU5.prototype={
$0(){return D.ac1},
$S:1158}
A.bU6.prototype={
$0(){return B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a")},
$S:1}
A.bU7.prototype={
$0(){return D.atl},
$S:z+6}
A.bU8.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629")},
$S:1}
A.bU9.prototype={
$0(){return D.bqS},
$S:1159}
A.bUa.prototype={
$0(){return B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a")},
$S:1}
A.bTT.prototype={
$0(){return new A.Dq(this.a,null)},
$S:z+7}
A.bTU.prototype={
$1(d){return this.a.$2(d,new A.bTP(this.b))},
$S:83}
A.bTP.prototype={
$0(){return new B.Cr(this.a.a[4].$0(),null)},
$S:1161}
A.bTV.prototype={
$1(d){return this.atg(d)},
atg(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:t=u.a
s=u.b
x=3
return B.d(B.M7(t,"game",s.a),$async$$1)
case 3:if(d.e==null){x=1
break}x=4
return B.d(u.c.$2(d,new A.bTO(s,t,u.d,u.e)),$async$$1)
case 4:case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:83}
A.bTO.prototype={
$0(){var x=this
return x.a.r.$3(x.b,x.c,B.a7G(x.d))},
$S:327}
A.bTW.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0631\u0633\u0645":"Drawing"},
$S:1}
A.bTX.prototype={
$1(d){return this.a.$2(d,new A.bTN(this.b))},
$S:83}
A.bTN.prototype={
$0(){return new B.og(this.a,null,null)},
$S:362}
A.bTY.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u0643\u0631\u062a\u0648\u0646":"Stories and cartoons"},
$S:1}
A.bTZ.prototype={
$1(d){return this.a.$2(d,new A.bTM(this.b))},
$S:83}
A.bTM.prototype={
$0(){return new B.mB(this.a,null)},
$S:1162}
A.bU_.prototype={
$0(){return $.h().a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a \u0631\u062d\u0644\u062a\u064a":"Rehlaty adventures"},
$S:1}
A.bU0.prototype={
$1(d){return this.a.$2(d,new A.bTL(this.b))},
$S:83}
A.bTL.prototype={
$0(){return new A.B5(this.a,null)},
$S:z+8}
A.bU1.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0648\u0627\u0644\u0623\u0635\u062d\u0627\u0628":"Feelings and friends"},
$S:1}
A.bU3.prototype={
$1(d){return this.a.$2(d,new A.bTK(this.b))},
$S:83}
A.bTK.prototype={
$0(){return new B.nq(B.ja("feelings"),this.a,null)},
$S:1163}
A.bou.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=C.h.a_(C.n.eK(t/230),2,6),r=t/8.533333333333333,q=B.nE(0,B.hQ(B.pX("assets/games/learn_bottom.webp",C.W,u,u,!1,C.cF,C.EA,u,u,t),!0,u),u,u,0,0,u,u),p=this.a,o=p.d
if(o===$)o=p.d=B.y5(p.a.c.a)
x=B.js(0,B.e6(new A.bos(p,t,s,this.b),o,y.C),r)
w=B.nE(u,B.pX("assets/games/learn_top.webp",C.W,u,u,!1,C.cF,C.EA,u,u,t),u,u,0,0,0,u)
v=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
return B.eg(C.bG,B.a([q,x,w,B.nE(u,new B.ct(new A.bot(p,d),C.it,60,v,!1,!0,D.bU9),r,u,0,u,0,t*0.13)],y.D),C.U,C.c9,u)},
$S:166}
A.bos.prototype={
$2(d,e){var x,w,v,u,t=this,s=e.b
if(s==null)s=C.f_
x=t.b
w=x*0.025
v=x*0.012
u=t.d
return B.aNw(new B.aj0(t.c,v,v,1.1547169811320754,null),new A.bor(t.a,u,s),u.length,null,new B.ae(w,8,w,x/9.035294117647059*0.6),null,!1)},
$S:1164}
A.bor.prototype={
$2(d,e){var x=null,w=this.b[e],v=w.a,u=w.b.$0(),t=this.a,s=y.D
u=B.a([B.js(0,new B.ct(new A.boq(t,w,d),B.pX("assets/games/learn_cards/"+v+".webp",C.W,x,x,!1,C.cF,C.eo,x,x,x),28,u,!1,!0,new B.N("learn_"+v,y.O)),0)],s)
if(w.d){s=B.a([],s)
if(this.c.p(0,v))s.push(D.apd)
s.push(new B.JC(t.a.c.a,"game",v,24,x))
u.push(B.nE(x,B.a1(s,C.y,x,C.r,C.ah,0,C.z),x,x,4,x,4,x))}return B.eg(C.bG,u,C.U,C.c9,x)},
$S:1165}
A.boq.prototype={
$0(){var x=0,w=B.m(y.H),v=this,u
var $async$$0=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:x=2
return B.d(v.b.c.$1(v.c),$async$$0)
case 2:u=v.a
if(u.c!=null)u.u(new A.bop(u))
return B.k(null,w)}})
return B.l($async$$0,w)},
$S:3}
A.bop.prototype={
$0(){var x=this.a
return x.d=B.y5(x.a.c.a)},
$S:0}
A.bot.prototype={
$0(){var x=this.a.a.d.$0()
return x},
$S:0}
A.bdu.prototype={
$0(){var x=this.a.d
x===$&&B.b()
x[this.b]=!0
return!0},
$S:0}
A.bdv.prototype={
$0(){return this.a.d=B.bn(6,!1,!1,y.y)},
$S:0}
A.bdw.prototype={
$1(d){return d},
$S:59}
A.bdx.prototype={
$0(){return this.a.aW6(this.b)},
$S:0}
A.bp8.prototype={
$0(){return this.a.w.C(0,this.b)},
$S:0}
A.bp9.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bpa.prototype={
$0(){var x=this.a
if(++x.x<5)x.aez()},
$S:0}
A.bpc.prototype={
$1(d){var x=this.a
return x.u(new A.bpb(x,this.b))},
$S:4}
A.bpb.prototype={
$0(){var x=this.a
x.e=this.b
x.Yx()},
$S:0}
A.bpd.prototype={
$0(){return this.a.No(this.b)},
$S:0}
A.bqB.prototype={
$0(){return this.a.r.C(0,this.b)},
$S:0}
A.bqC.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bqD.prototype={
$0(){var x=this.a
if(++x.w<5)x.af2()},
$S:0}
A.bqE.prototype={
$0(){return this.a.NB(this.b)},
$S:0}
A.bJd.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bJe.prototype={
$0(){return this.a.b0X(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.a0D.prototype,"gaYp","aYq",0)
var w
x(w=A.a2C.prototype,"gaRv","Yx",0)
x(w,"gaRu","Nn",1)
x(w=A.a2N.prototype,"gaSG","af1",0)
x(w,"gaS_","NA",1)
x(w=A.a68.prototype,"gb3w","akE",0)
x(w,"gb3x","b3y",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.Q,[A.B5,A.Vk,A.Bj,A.Da,A.Dq,A.FY])
x(B.V,[A.alu,A.aqu,A.a0D,A.a2C,A.a2N,A.a68])
x(B.n7,[A.bbe,A.bbm,A.bbo,A.bMH,A.bTQ,A.bTR,A.bTS,A.bU2,A.bU4,A.bU5,A.bU6,A.bU7,A.bU8,A.bU9,A.bUa,A.bTT,A.bTP,A.bTO,A.bTW,A.bTN,A.bTY,A.bTM,A.bU_,A.bTL,A.bU1,A.bTK,A.boq,A.bop,A.bot,A.bdu,A.bdv,A.bdx,A.bp8,A.bp9,A.bpa,A.bpb,A.bpd,A.bqB,A.bqC,A.bqD,A.bqE,A.bJd,A.bJe])
x(B.kg,[A.bbh,A.bbi,A.bbj,A.bbf,A.bbg,A.bbk,A.bbl,A.bbn,A.aRk,A.aRj,A.aRi,A.bUd,A.bUc,A.bTU,A.bTV,A.bTX,A.bTZ,A.bU0,A.bU3,A.bdw,A.bpc])
w(A.aeq,B.W)
x(B.tS,[A.vA,A.LU,A.qs])
x(B.T,[A.ix,A.vh,A.aRh,A.IU,A.vg,A.en,A.GA,A.Ar])
x(B.pH,[A.bUb,A.bou,A.bos,A.bor])})()
B.u1(b.typeUniverse,JSON.parse('{"B5":{"Q":[],"f":[]},"alu":{"V":["B5"]},"aeq":{"W":[],"f":[]},"Vk":{"Q":[],"f":[]},"aqu":{"V":["Vk"]},"Bj":{"Q":[],"f":[]},"a0D":{"V":["Bj"]},"Da":{"Q":[],"f":[]},"a2C":{"V":["Da"]},"Dq":{"Q":[],"f":[]},"a2N":{"V":["Dq"]},"FY":{"Q":[],"f":[]},"a68":{"V":["FY"]}}'))
var y=(function rtii(){var x=B.a4
return{W:x("x<vg>"),p:x("x<ix>"),s:x("x<n>"),D:x("x<f>"),q:x("x<Ar>"),w:x("x<en>"),t:x("x<r>"),C:x("bk<n>"),N:x("n"),O:x("N<n>"),r:x("en"),y:x("E"),z:x("@"),S:x("r"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a7k=new A.Bj(null)
D.acG=new B.q(1,0.6039215686274509,0.8470588235294118,0.9607843137254902,C.q)
D.acL=new B.q(1,0.48627450980392156,0.803921568627451,0.7058823529411765,C.q)
D.ae5=new B.q(1,0.43137254901960786,0.7843137254901961,0.5882352941176471,C.q)
D.bdV=x([D.acG,D.acL,D.ae5],B.a4("x<q>"))
D.atn=new B.e7(C.cb,C.cn,C.bd,D.bdV,null,null)
D.a8s=new B.aD(null,null,null,null,null,D.atn,C.a0)
D.ac1=new B.rm(null)
D.agm=new B.q(1,0.8901960784313725,0.9725490196078431,0.8784313725490196,C.q)
D.anb=new B.ac(61267,"MaterialIcons",!1)
D.anT=new B.ac(63573,"MaterialIcons",!1)
D.apd=new B.ay(C.ed,28,C.fp,null,null)
D.apA=new B.ay(E.yZ,18,null,null,null)
D.atl=new A.Da(null)
D.bjH=x(["ar_letters_see","ar_letters_name","ar_letters_write"],y.s)
D.ip=new A.LU(2,"realActivity")
D.bxq=new A.ix(D.ip,"picture_book")
D.Q5=x([D.bxq],y.p)
D.b8s=x(["letter_fishing","trace_letters","listen_letter"],y.s)
D.bxp=new A.ix(D.ip,"letter_tray")
D.bxr=new A.ix(D.ip,"play_dough")
D.aSj=x([D.bxp,D.bxr],y.p)
D.asi=new A.vh("letters",D.bjH,D.Q5,D.b8s,D.aSj)
D.bh8=x(["math_count_10","math_compare","math_dots_order"],y.s)
D.Bt=new A.LU(0,"story")
D.bxn=new A.ix(D.Bt,"three_apples")
D.Xd=new A.ix(D.ip,"count_toys")
D.be1=x([D.bxn,D.Xd],y.p)
D.bl6=x(["numerals","compare","connect_four"],y.s)
D.lC=new A.LU(3,"everyday")
D.bxv=new A.ix(D.lC,"count_steps")
D.bf0=x([D.bxv,D.Xd],y.p)
D.asd=new A.vh("numbers",D.bh8,D.be1,D.bl6,D.bf0)
D.bf1=x(["sci_animals_home","sci_animals_food","ar_words_first"],y.s)
D.bxm=new A.ix(D.Bt,"bunny_garden")
D.bxl=new A.ix(D.Bt,"bee_flower")
D.bxx=new A.ix(D.lC,"look_sky")
D.bgm=x([D.bxm,D.bxl,D.bxx],y.p)
D.bgP=x(["animal_habitats","feed_animal","listen_picture"],y.s)
D.bxw=new A.ix(D.lC,"feed_pet")
D.bxA=new A.ix(D.lC,"water_plant")
D.blP=x([D.bxw,D.bxA],y.p)
D.ase=new A.vh("animals",D.bf1,D.bgm,D.bgP,D.blP)
D.blw=x(["logic_planning","life_routine","pos_words"],y.s)
D.bDL=new A.LU(1,"branching")
D.bxo=new A.ix(D.bDL,"boat")
D.Xe=new A.ix(D.ip,"day_routine")
D.bh7=x([D.bxo,D.Xe],y.p)
D.bkN=x(["maze","treasure_hunt","next_in_day"],y.s)
D.bxz=new A.ix(D.lC,"toys_basket")
D.bcS=x([D.Xe,D.bxz],y.p)
D.asg=new A.vh("thinking",D.blw,D.bh7,D.bkN,D.bcS)
D.bdB=x(["ar_words_first","ar_words_listen","ar_letters_name"],y.s)
D.bxu=new A.ix(D.ip,"sound_box")
D.bfg=x([D.bxu],y.p)
D.bjt=x(["listen_picture","listen_word","listen_letter"],y.s)
D.ash=new A.vh("listening",D.bdB,D.bfg,D.bjt,D.Q5)
D.bmh=x(["shape_names","col_more","shape_size"],y.s)
D.bxs=new A.ix(D.ip,"round3")
D.bff=x([D.bxs],y.p)
D.biF=x(["shape_finder","connect_dots","jigsaw","big_small"],y.s)
D.bxy=new A.ix(D.lC,"shop_colours")
D.bxt=new A.ix(D.ip,"sort_color")
D.blC=x([D.bxy,D.bxt],y.p)
D.asf=new A.vh("shapes",D.bmh,D.bff,D.biF,D.blC)
D.bcf=x([D.asi,D.asd,D.ase,D.asg,D.ash,D.asf],B.a4("x<vh>"))
D.bej=x(["\ud83d\udc36","\ud83d\udc31","\ud83d\udc38","\ud83d\udc30","\ud83e\udd81","\ud83d\udc35"],y.s)
D.c03=new A.en("\ud83c\udf4e","\u062a\u0641\u0627\u062d\u0629")
D.c06=new A.en("\ud83c\udf4c","\u0645\u0648\u0632")
D.c0h=new A.en("\ud83d\udc18","\u0641\u064a\u0644")
D.c0i=new A.en("\ud83c\udf33","\u0634\u062c\u0631\u0629")
D.c0e=new A.en("\ud83d\udc1f","\u0633\u0645\u0643\u0629")
D.c0j=new A.en("\ud83c\udfe0","\u0628\u064a\u062a")
D.c08=new A.en("\ud83d\udc2a","\u062c\u0645\u0644")
D.c0d=new A.en("\ud83d\udc26","\u0639\u0635\u0641\u0648\u0631")
D.c0q=new A.en("\ud83d\udc31","\u0642\u0637\u0629")
D.b_h=x([D.c03,D.c06,D.c0h,D.c0i,D.c0e,D.c0j,D.c08,D.c0d,D.c0q],y.w)
D.a4j=new A.GA("ar","\u0639\u0631\u0628\u064a",!0,"\u0623\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a",D.b_h)
D.c0a=new A.en("\ud83c\udf4e","Apple")
D.c0k=new A.en("\ud83d\udc31","Cat")
D.c09=new A.en("\ud83d\udc36","Dog")
D.c0x=new A.en("\ud83d\udc1f","Fish")
D.c0f=new A.en("\ud83c\udf1e","Sun")
D.c0c=new A.en("\ud83d\udc18","Elephant")
D.c0u=new A.en("\ud83c\udf4c","Banana")
D.c0m=new A.en("\ud83c\udfe0","House")
D.atM=x([D.c0a,D.c0k,D.c09,D.c0x,D.c0f,D.c0c,D.c0u,D.c0m],y.w)
D.bZV=new A.GA("en","English",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.atM)
D.c0s=new A.en("\ud83c\udf4e","Apfel")
D.c0l=new A.en("\ud83d\udc31","Katze")
D.c07=new A.en("\ud83d\udc36","Hund")
D.c0g=new A.en("\ud83d\udc1f","Fisch")
D.c02=new A.en("\ud83c\udf1e","Sonne")
D.c04=new A.en("\ud83c\udf33","Baum")
D.c0n=new A.en("\ud83c\udfe0","Haus")
D.c0o=new A.en("\ud83d\udc18","Elefant")
D.aMN=x([D.c0s,D.c0l,D.c07,D.c0g,D.c02,D.c04,D.c0n,D.c0o],y.w)
D.bZW=new A.GA("de","Deutsch",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.aMN)
D.c05=new A.en("\ud83c\udf4e","Pomme")
D.c01=new A.en("\ud83d\udc31","Chat")
D.c0t=new A.en("\ud83d\udc36","Chien")
D.c0p=new A.en("\ud83d\udc1f","Poisson")
D.c0r=new A.en("\ud83c\udf1e","Soleil")
D.c0b=new A.en("\ud83c\udf33","Arbre")
D.c0w=new A.en("\ud83c\udfe0","Maison")
D.c0v=new A.en("\ud83c\udf4c","Banane")
D.bmQ=x([D.c05,D.c01,D.c0t,D.c0p,D.c0r,D.c0b,D.c0w,D.c0v],y.w)
D.bZX=new A.GA("fr","Fran\xe7ais",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.bmQ)
D.bm0=x([D.a4j,D.bZV,D.bZW,D.bZX],B.a4("x<GA>"))
D.bqS=new B.rZ(null)
D.bxg=new A.vA(0,"discover")
D.bxh=new A.vA(1,"learn")
D.bxi=new A.vA(2,"play")
D.bxj=new A.vA(3,"apply")
D.bxk=new A.vA(4,"celebrate")
D.brE={balloons:0,animal:1,colors:2,letters:3,memory:4,math:5,snakes_ladders:6,jigsaw:7,maze:8,treasure_hunt:9,connect_dots:10,animal_habitats:11,match_pictures:12,letter_fishing:13,connect_four:14,numerals:15,trace_letters:16,word_book:17,listen_picture:18,listen_word:19,listen_letter:20,odd_one_out:21,pattern:22,compare:23,sort_groups:24,feed_animal:25,big_small:26,next_in_day:27,shape_finder:28,where_ball:29,drawing:30,stories:31,adventures:32,feelings:33}
D.bF1=new B.ii(D.brE,34,B.a4("ii<n>"))
D.jP=new A.qs(0,"arabic")
D.bIj=new A.qs(1,"english")
D.hD=new A.qs(2,"maths")
D.Co=new A.qs(3,"science")
D.Cp=new A.qs(4,"everyday")
D.jQ=new A.qs(5,"logic")
D.bIk=new A.qs(6,"feelings")
D.bIl=new A.qs(7,"creativity")
D.bIm=new A.qs(8,"stories")
D.bJQ=new B.C(!0,C.t,null,null,null,null,48,C.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bM0=new B.C(!0,C.t,null,null,null,null,52,C.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMj=new B.C(!0,null,null,null,null,null,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNb=new B.C(!0,C.O,null,null,null,null,15,C.ad,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNf=new B.C(!0,null,null,null,null,null,40,C.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOX=new B.C(!0,null,null,null,null,null,56,C.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQ1=new B.iZ("\ud83c\udf4e",null,C.lP,null,null,null,null,null,null,null,null)
D.bSx=new B.N("adventure_progress",y.O)
D.bSy=new B.N("adventure_theme",y.O)
D.bU9=new B.N("learning_back",y.O)
D.bUa=new B.N("learning_page",y.O)
D.bUb=new B.N("learning_path",y.O)
D.bYc=new A.FY(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cIV","ch2",()=>{var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="artwork for the library words (emoji today)",b2="approved word recordings (device voice today)",b3="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u0644\u0639\u0628\u0629",b4="Five rounds of the game",b5="approved letter-name recordings",b6="approved colour-name recordings",b7="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a",b8="Five rounds",b9="\u0623\u064a\u0651 \u0634\u0643\u0644 \u0644\u0647 \u062b\u0644\u0627\u062b \u0632\u0648\u0627\u064a\u0627\u061f",c0="Which shape has three corners?",c1="\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0644\u0639\u0628\u0629",c2="Finish the game",c3="\u0644\u0627 \u062a\u0648\u062c\u062f \u0644\u0639\u0628\u0629 \u0628\u0639\u062f: \u0645\u062e\u0637\u0651\u0637",c4="No game yet: planned",c5="\u0645\u0627\u0630\u0627 \u0646\u0641\u0639\u0644 \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c6="What do we do next?",c7="\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0623\u062a\u064a \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c8="What comes next?",c9=y.s,d0=B.a(["word_book"],c9),d1=B.a([b1],c9),d2=B.a([b2],c9)
d0=A.ff("ar_words_first",D.jP,1,6,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u062d\u0648\u0644\u064a","I learn the names of things around me","\u0623\u0646\u0638\u0631 \u0625\u0644\u0649 \u0635\u0648\u0631\u0629 \u0648\u0623\u0633\u0645\u0639 \u0627\u0633\u0645\u0647\u0627","Look at a picture and hear its name",B.a(["picture_book"],c9),d1,d2,"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644","Open at least five words",d0,C.L,"\u0627\u0646\u0638\u0631 \u0625\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629. \u0645\u0627 \u0627\u0633\u0645\u0647\u0627\u061f","Look at the picture. What is it called?",C.L,C.L)
d2=B.a(["ar_words_first"],c9)
d1=B.a(["listen_picture"],c9)
w=B.a(["listening"],c9)
w=A.ff("ar_words_listen",D.jP,3,6,"\u0623\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0635\u0648\u0631\u062a\u0647\u0627","I hear a word and pick its picture","\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0635\u062d\u064a\u062d\u0629","Hear a word and pick the right picture",C.L,B.a([b1],c9),B.a([b2],c9),b3,b4,d1,d2,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629.","Hear the word, then pick the picture.",w,C.L)
d2=B.a(["letter_fishing","letters"],c9)
d1=B.a(["letters_ar"],c9)
d1=A.ff("ar_letters_see",D.jP,3,6,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0627\u0644\u062d\u0631\u0641","I recognise the shape of a letter","\u0623\u0635\u0637\u0627\u062f \u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Catch the asked letter",C.L,C.L,B.a([b5],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0645\u0646 \u0627\u0644\u0635\u064a\u062f","Five rounds of letter fishing",d2,C.L,"\u0627\u0635\u0637\u062f \u0627\u0644\u0633\u0645\u0643\u0629 \u0627\u0644\u062a\u064a \u0639\u0644\u064a\u0647\u0627 \u0627\u0644\u062d\u0631\u0641.","Catch the fish that has the letter.",d1,C.L)
d2=B.a(["ar_letters_see"],c9)
v=B.a(["listen_letter"],c9)
u=B.a(["letters_ar"],c9)
u=A.ff("ar_letters_name",D.jP,4,6,"\u0623\u0633\u0645\u0639 \u0627\u0633\u0645 \u0627\u0644\u062d\u0631\u0641 \u0648\u0623\u062e\u062a\u0627\u0631\u0647","I hear a letter name and pick it","\u0623\u0633\u0645\u0639 \u0627\u0633\u0645 \u062d\u0631\u0641 \u0648\u0623\u062e\u062a\u0627\u0631\u0647","Hear a letter name and pick it",C.L,C.L,B.a([b5],c9),b3,b4,v,d2,"\u0627\u0633\u0645\u0639 \u0627\u0633\u0645 \u0627\u0644\u062d\u0631\u0641\u060c \u062b\u0645 \u0627\u062e\u062a\u0631\u0647.","Hear the letter name, then pick it.",u,C.L)
d2=B.a(["ar_letters_see"],c9)
v=B.a(["trace_letters"],c9)
d2=A.ff("ar_letters_write",D.jP,4,6,"\u0623\u062a\u062a\u0628\u0651\u0639 \u0634\u0643\u0644 \u0627\u0644\u062d\u0631\u0641","I trace the shape of a letter","\u0623\u062a\u062a\u0628\u0651\u0639 \u0627\u0644\u062d\u0631\u0641 \u0628\u0625\u0635\u0628\u0639\u064a","Trace the letter with a finger",B.a(["letter_tray","play_dough"],c9),C.L,C.L,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u062a\u062a\u0628\u0651\u0639","Finish the tracing game",v,d2,"\u062a\u062a\u0628\u0651\u0639 \u0627\u0644\u062d\u0631\u0641 \u0628\u0625\u0635\u0628\u0639\u0643 \u0645\u0646 \u0627\u0644\u064a\u0645\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631.","Trace the letter with your finger, right to left.",C.L,C.L)
v=B.a(["ar_letters_name"],c9)
t=B.a(["phonics"],c9)
t=A.ff("ar_letter_sounds",D.jP,4,6,"\u0623\u0633\u0645\u0639 \u0635\u0648\u062a \u0627\u0644\u062d\u0631\u0641","I hear the sound of a letter","\u062f\u0631\u0633 \u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u0645\u0648\u062c\u0651\u0647","The guided letter lesson",C.L,C.L,B.a(["recorded isolated letter sounds (84 items silent today)"],c9),"\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u062d\u0631\u0641 \u0628\u0639\u062f \u0627\u0644\u062f\u0631\u0633","Review the letter after the lesson",C.L,v,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u0648\u062a\u060c \u062b\u0645 \u0643\u0631\u0651\u0631\u0647 \u0645\u0639\u064a.","Hear the sound, then say it with me.",t,C.L)
v=B.a(["ar_letters_name"],c9)
s=B.a(["listen_word"],c9)
r=B.a(["listening"],c9)
r=A.ff("ar_listen_word_read",D.jP,5,6,"\u0623\u0642\u0631\u0623 \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u062a\u064a \u0623\u0633\u0645\u0639\u0647\u0627","I read the word I hear","\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0629 \u0648\u0623\u062e\u062a\u0627\u0631 \u0645\u0643\u062a\u0648\u0628\u0647\u0627","Hear a word and pick its written form",C.L,C.L,B.a([b2],c9),b3,b4,s,v,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0643\u062a\u0648\u0628\u0629.","Hear the word, then pick the written one.",r,C.L)
v=B.a(["word_book"],c9)
s=B.a(["english_vocab"],c9)
s=A.ff("en_words_first",D.bIj,2,6,"\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0627\u062a \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0633\u064a\u0637\u0629","I hear simple English words","\u0623\u0641\u062a\u062d \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0643\u062a\u0627\u0628 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629","Open the book words in English",C.L,C.L,B.a(["approved English recordings"],c9),"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a","Open five words",v,C.L,"\u0627\u0641\u062a\u062d \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0627\u0633\u0645\u0639\u0647\u0627 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.","Open the word and hear it in English.",s,C.L)
v=B.a(["colors"],c9)
q=B.a(["colors"],c9)
p=B.a(["color_red","color_blue","color_yellow","color_green"],c9)
o=B.a([b6],c9)
p=A.ff("col_names",D.hD,2,4,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","I learn the colours","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Pick the asked colour",B.a(["shop_colours","sort_color"],c9),C.L,o,"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","Five rounds of the colour game",v,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u064a \u062a\u0633\u0645\u0639\u0647.","Pick the colour you hear.",q,p)
q=B.a(["col_names"],c9)
v=B.a(["shape_finder"],c9)
o=B.a(["shapes","colors"],c9)
n=B.a(["color_orange","color_purple","color_pink","color_brown","color_black","color_white"],c9)
n=A.ff("col_more",D.hD,3,6,"\u0623\u0644\u0648\u0627\u0646 \u0623\u0643\u062b\u0631 \u0648\u0623\u0633\u0645\u0627\u0624\u0647\u0627","More colours and their names","\u0623\u062c\u062f \u0627\u0644\u0644\u0648\u0646 \u0645\u0639 \u0627\u0644\u0634\u0643\u0644","Find the colour with the shape",C.L,B.a(["picture cards for the six extra colours"],c9),B.a([b6],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a (\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0645\u0639\u064b\u0627)","Five rounds (shapes and colours together)",v,q,"\u0623\u064a\u0646 \u0627\u0644\u0645\u062b\u0644\u062b \u0627\u0644\u0623\u062d\u0645\u0631\u061f","Where is the red triangle?",o,n)
o=B.a(["shape_finder","connect_dots"],c9)
q=B.a(["shapes"],c9)
v=B.a(["shape_circle","shape_square","shape_triangle","shape_rectangle","shape_star","shape_heart","shape_diamond"],c9)
m=B.a(["approved shape-name recordings"],c9)
v=A.ff("shape_names",D.hD,2,6,"\u0623\u0639\u0631\u0641 \u0627\u0644\u0623\u0634\u0643\u0627\u0644","I know the shapes","\u0623\u062c\u062f \u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0648\u0627\u0644\u0645\u0631\u0628\u0639 \u0648\u0627\u0644\u0645\u062b\u0644\u062b","Find the circle, square and triangle",B.a(["round3"],c9),C.L,m,b7,b8,o,C.L,"\u0623\u064a\u0646 \u0627\u0644\u062f\u0627\u0626\u0631\u0629\u061f","Where is the circle?",q,v)
q=B.a(["shape_names","math_count_10"],c9)
q=A.ff("shape_corners",D.hD,5,6,"\u0623\u0639\u062f\u0651 \u0632\u0648\u0627\u064a\u0627 \u0627\u0644\u0634\u0643\u0644","I count the corners of a shape",b9,c0,C.L,C.L,C.L,b7,b8,B.a(["shape_finder"],c9),q,b9,c0,B.a(["shapes"],c9),C.L)
o=B.a(["big_small"],c9)
m=B.a(["shapes"],c9)
m=A.ff("shape_size",D.hD,2,6,"\u0623\u0645\u064a\u0651\u0632 \u0627\u0644\u0643\u0628\u064a\u0631 \u0645\u0646 \u0627\u0644\u0635\u063a\u064a\u0631","I tell big from small","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0623\u0643\u0628\u0631 \u0623\u0648 \u0627\u0644\u0623\u0635\u063a\u0631","Pick the bigger or the smaller",C.L,B.a(["real artwork pairs (emoji today)"],c9),C.L,b7,b8,o,C.L,"\u0623\u064a\u0647\u0645\u0627 \u0627\u0644\u0643\u0628\u064a\u0631\u061f","Which one is big?",m,C.L)
o=B.a(["numerals","math"],c9)
l=B.a(["counting"],c9)
k=B.a(["num_1","num_2","num_3","num_4","num_5","num_6","num_7","num_8","num_9","num_10"],c9)
j=B.a(["approved number recordings"],c9)
k=A.ff("math_count_10",D.hD,3,6,"\u0623\u0639\u062f\u0651 \u062d\u062a\u0649 \u0661\u0660","I count to 10","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0635\u062d\u064a\u062d","Pick the right numeral",B.a(["count_toys","count_steps"],c9),C.L,j,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","Finish the numerals game",o,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.","Pick the matching numeral.",l,k)
l=A.ff("math_dots_order",D.hD,3,6,"\u0623\u0631\u062a\u0651\u0628 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","I put numbers in order","\u0623\u0648\u0635\u0651\u0644 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628","Join the dots in order",C.L,C.L,C.L,"\u0631\u0633\u0645 \u062b\u0644\u0627\u062b \u0635\u0648\u0631","Draw three pictures",B.a(["connect_dots"],c9),C.L,"\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628: \u0661\u060c \u0662\u060c \u0663...","Tap the dots in order: 1, 2, 3...",B.a(["counting"],c9),C.L)
o=B.a(["math_count_10"],c9)
o=A.ff("math_compare",D.hD,3,6,"\u0623\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0627\u0644\u0643\u0645\u0651\u064a\u0627\u062a","I compare quantities","\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631 \u0623\u0648 \u0623\u0642\u0644","Which group has more or fewer",C.L,C.L,C.L,b7,b8,B.a(["compare"],c9),o,"\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631\u061f","Which group has more?",B.a(["counting"],c9),C.L)
j=B.a(["math_count_10"],c9)
j=A.ff("math_board",D.hD,4,6,"\u0623\u0639\u062f\u0651 \u0648\u0623\u0646\u062a\u0638\u0631 \u062f\u0648\u0631\u064a","I count and wait my turn","\u0623\u062a\u062d\u0631\u0643 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u0644\u0639\u0628","Move along a game board",C.L,C.L,C.L,c1,c2,B.a(["snakes_ladders"],c9),j,"\u0627\u0631\u0645\u0650 \u0627\u0644\u0646\u0631\u062f \u0648\u062a\u062d\u0631\u0651\u0643 \u0628\u0639\u062f\u062f \u0627\u0644\u0646\u0642\u0627\u0637.","Roll the dice and move that many.",C.L,C.L)
i=B.a(["where_ball","treasure_hunt"],c9)
h=B.a(["spatial"],c9)
g=B.a(["pos_above","pos_below","pos_inside","pos_beside","pos_outside","pos_front","pos_behind"],c9)
f=B.a(["\xab\u0623\u0645\u0627\u0645\xbb \u0648\xab\u062e\u0644\u0641\xbb \u0648\xab\u062e\u0627\u0631\u062c\xbb scenes"],c9)
e=B.a(["approved position-word recordings"],c9)
g=A.ff("pos_words",D.jQ,3,6,"\u0641\u0648\u0642 \u0648\u062a\u062d\u062a \u0648\u062f\u0627\u062e\u0644 \u0648\u0628\u062c\u0627\u0646\u0628","On top, under, inside and next to","\u0623\u062c\u062f \u0623\u064a\u0646 \u0627\u0644\u0643\u0631\u0629","Find where the ball is",B.a(["toys_basket"],c9),f,e,b7,b8,i,C.L,"\u0623\u064a\u0646 \u0627\u0644\u0643\u0631\u0629\u061f \u0627\u0644\u0643\u0631\u0629 \u062a\u062d\u062a \u0627\u0644\u0637\u0627\u0648\u0644\u0629.","Where is the ball? The ball is under the table.",h,g)
h=A.ff("pos_fit",D.jQ,3,6,"\u0623\u0631\u0643\u0651\u0628 \u0627\u0644\u0635\u0648\u0631\u0629","I fit the picture together","\u0623\u0636\u0639 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0641\u064a \u0645\u0643\u0627\u0646\u0647\u0627","Put each piece in its place",C.L,C.L,C.L,"\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629","Complete the picture",B.a(["jigsaw"],c9),C.L,"\u0636\u0639 \u0627\u0644\u0642\u0637\u0639\u0629 \u0641\u064a \u0645\u0643\u0627\u0646\u0647\u0627.","Put the piece in its place.",B.a(["spatial"],c9),C.L)
i=B.a(["animal_habitats"],c9)
e=B.a(["nature"],c9)
f=B.a([b1],c9)
e=A.ff("sci_animals_home",D.Co,3,6,"\u0623\u064a\u0646 \u062a\u0639\u064a\u0634 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a\u061f","Where do animals live?","\u0623\u0636\u0639 \u0627\u0644\u062d\u064a\u0648\u0627\u0646 \u0641\u064a \u0628\u064a\u062a\u0647","Put the animal in its home",B.a(["nature_walk"],c9),f,C.L,c1,c2,i,C.L,"\u0623\u064a\u0646 \u064a\u0639\u064a\u0634 \u0647\u0630\u0627 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f","Where does this animal live?",e,C.L)
i=B.a(["feed_animal"],c9)
f=B.a(["nature"],c9)
d=B.a([b1],c9)
f=A.ff("sci_animals_food",D.Co,2,6,"\u0645\u0627\u0630\u0627 \u064a\u0623\u0643\u0644 \u0643\u0644 \u062d\u064a\u0648\u0627\u0646\u061f","What does each animal eat?","\u0623\u0637\u0639\u0645 \u0627\u0644\u062d\u064a\u0648\u0627\u0646 \u0637\u0639\u0627\u0645\u0647","Feed the animal its food",B.a(["feed_pet","water_plant"],c9),d,C.L,b7,b8,i,C.L,"\u0645\u0627\u0630\u0627 \u064a\u0623\u0643\u0644 \u0647\u0630\u0627 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f","What does this animal eat?",f,C.L)
i=A.ff("sci_plants",D.Co,3,6,"\u0623\u0631\u0627\u0642\u0628 \u0627\u0644\u0646\u0628\u0627\u062a","I watch a plant grow","\u0623\u0633\u0642\u064a \u0646\u0628\u062a\u0629 \u0648\u0623\u0631\u0627\u0642\u0628\u0647\u0627","Water a plant and watch it",B.a(["water_plant","plant_watch","leaf_hunt"],c9),C.L,C.L,"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0648\u0627\u0644\u062f \u0644\u0644\u0646\u0634\u0627\u0637","A parent confirms the activity",C.L,C.L,"\u0627\u0633\u0642\u0650 \u0627\u0644\u0646\u0628\u062a\u0629 \u0643\u0644 \u064a\u0648\u0645 \u0648\u0627\u0646\u0638\u0631 \u0643\u064a\u0641 \u062a\u0643\u0628\u0631.","Water the plant every day and see it grow.",C.L,C.L)
d=B.a(["fam_mother","fam_father","fam_baby","fam_brother","fam_sister","fam_grandfather","fam_grandmother","fam_uncle","fam_aunt"],c9)
a0=B.a(["family pictures drawn in Rehlaty style (no photos)"],c9)
a1=B.a(["approved family-word recordings"],c9)
d=A.ff("fam_names",D.Cp,1,6,"\u0623\u0641\u0631\u0627\u062f \u0639\u0627\u0626\u0644\u062a\u064a","The people in my family","\u0623\u0633\u0645\u0651\u064a \u0645\u0646 \u0641\u064a \u0639\u0627\u0626\u0644\u062a\u064a","Name the people in my family",B.a(["my_name_address"],c9),a0,a1,c3,c4,C.L,C.L,"\u0645\u0646 \u0647\u0630\u0627\u061f \u0647\u0630\u0647 \u0645\u0627\u0645\u0627.","Who is this? This is Mum.",C.L,d)
a1=B.a(["clo_shirt","clo_trousers","clo_dress","clo_socks","clo_coat","clo_pyjamas","clo_bag","clo_scarf"],c9)
a0=B.a(["clothes pictures"],c9)
a2=B.a(["approved clothes-word recordings"],c9)
a1=A.ff("clo_names",D.Cp,2,6,"\u0645\u0644\u0627\u0628\u0633\u064a","My clothes","\u0623\u0633\u0645\u0651\u064a \u0645\u0644\u0627\u0628\u0633\u064a \u0648\u0623\u0631\u062a\u062f\u064a \u0645\u0627 \u064a\u0646\u0627\u0633\u0628 \u0627\u0644\u0637\u0642\u0633","Name my clothes and dress for the weather",B.a(["dress_self","sort_socks","sort_laundry"],c9),a0,a2,c3,c4,C.L,C.L,"\u0645\u0627\u0630\u0627 \u0646\u0644\u0628\u0633 \u0627\u0644\u064a\u0648\u0645\u061f","What do we wear today?",C.L,a1)
a2=B.a(["next_in_day"],c9)
a0=B.a(["sequence"],c9)
a3=B.a(["routine pictures"],c9)
a0=A.ff("life_routine",D.Cp,3,6,"\u0623\u0631\u062a\u0651\u0628 \u064a\u0648\u0645\u064a","I order my day",c5,c6,B.a(["day_routine","brush_teeth","wash_hands"],c9),a3,C.L,b7,b8,a2,C.L,c5,c6,a0,C.L)
a2=A.ff("logic_odd",D.jQ,3,6,"\u0623\u062c\u062f \u0627\u0644\u0645\u062e\u062a\u0644\u0641","I find the odd one out","\u062b\u0644\u0627\u062b \u0635\u0648\u0631 \u0645\u062a\u0634\u0627\u0628\u0647\u0629 \u0648\u0648\u0627\u062d\u062f\u0629 \u0645\u062e\u062a\u0644\u0641\u0629","Three alike, one different",C.L,C.L,C.L,b7,b8,B.a(["odd_one_out"],c9),C.L,"\u0623\u064a\u0651 \u0635\u0648\u0631\u0629 \u0645\u062e\u062a\u0644\u0641\u0629\u061f","Which picture is different?",B.a(["shapes"],c9),C.L)
a3=A.ff("logic_pattern",D.jQ,4,6,"\u0623\u0643\u0645\u0644 \u0627\u0644\u0646\u0645\u0637","I complete the pattern",c7,c8,C.L,C.L,C.L,b7,b8,B.a(["pattern"],c9),C.L,c7,c8,B.a(["sequence"],c9),C.L)
a4=B.a(["sort_groups"],c9)
a5=B.a(["vocab"],c9)
a5=A.ff("logic_sort",D.jQ,4,6,"\u0623\u0635\u0646\u0651\u0641 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u0627\u062a","I sort into groups","\u0623\u0636\u0639 \u0643\u0644 \u0634\u064a\u0621 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u062a\u0647","Put each thing in its group",B.a(["sort_color","socks_pairs"],c9),C.L,C.L,b7,b8,a4,C.L,"\u0636\u0639 \u0643\u0644 \u0634\u064a\u0621 \u0645\u0639 \u0623\u0645\u062b\u0627\u0644\u0647.","Put each thing with its kind.",a5,C.L)
a4=A.ff("logic_memory",D.jQ,3,6,"\u0623\u062a\u0630\u0643\u0651\u0631 \u0627\u0644\u0623\u0632\u0648\u0627\u062c","I remember pairs","\u0623\u0644\u0639\u0628 \u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629","Play the memory game",C.L,C.L,C.L,c1,c2,B.a(["memory","match_pictures"],c9),C.L,"\u0627\u0642\u0644\u0628 \u0628\u0637\u0627\u0642\u062a\u064a\u0646 \u0648\u0627\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0632\u0648\u062c.","Turn two cards and find the pair.",B.a(["memory"],c9),C.L)
a6=A.ff("logic_planning",D.jQ,4,6,"\u0623\u062e\u0637\u0651\u0637 \u0637\u0631\u064a\u0642\u064a","I plan my way","\u0623\u062c\u062f \u0627\u0644\u0637\u0631\u064a\u0642 \u0641\u064a \u0627\u0644\u0645\u062a\u0627\u0647\u0629","Find the way through the maze",C.L,C.L,C.L,c1,c2,B.a(["maze"],c9),C.L,"\u0633\u0627\u0639\u062f \u0627\u0644\u0641\u0623\u0631 \u0644\u064a\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u062c\u0628\u0646.","Help the mouse reach the cheese.",C.L,C.L)
a7=B.a(["feelings"],c9)
a8=B.a(["reviewed Adam and Nour dialogue recordings"],c9)
a7=A.ff("emo_feelings",D.bIk,3,6,"\u0623\u0633\u0645\u0651\u064a \u0634\u0639\u0648\u0631\u064a \u0648\u0623\u062a\u0635\u0631\u0641 \u0628\u0644\u0637\u0641","I name my feeling and act kindly","\u0645\u0648\u0627\u0642\u0641 \u0642\u0635\u064a\u0631\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0627\u0639\u0631","Short feelings scenarios",B.a(["three_good","thank_card"],c9),C.L,a8,"\u0625\u0646\u0647\u0627\u0621 \u0645\u0633\u062a\u0648\u0649","Finish a level",C.L,C.L,"\u0643\u064a\u0641 \u064a\u0634\u0639\u0631 \u0647\u0630\u0627 \u0627\u0644\u0637\u0641\u0644\u061f","How does this child feel?",a7,C.L)
a8=A.ff("art_free",D.bIl,2,6,"\u0623\u0631\u0633\u0645 \u0648\u0623\u0639\u0628\u0651\u0631","I draw and express myself","\u0623\u0631\u0633\u0645 \u062b\u0645 \u0623\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Draw then press \u201cdone\u201d",B.a(["play_dough"],c9),C.L,C.L,"\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Pressing \u201cdone\u201d",C.L,C.L,"\u0627\u0631\u0633\u0645 \u0645\u0627 \u062a\u062d\u0628.","Draw what you like.",C.L,C.L)
a9=B.a(["story"],c9)
b0=B.a(["recorded narration (device voice today)"],c9)
return B.a([d0,w,d1,u,d2,t,r,s,p,n,v,q,m,k,l,o,j,g,h,e,f,i,d,a1,a0,a2,a3,a5,a4,a6,a7,a8,A.ff("story_listen",D.bIm,1,6,"\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629 \u0642\u0635\u064a\u0631\u0629","I listen to a short story","\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629","Listen to a story",C.L,B.a(["only 2 stories fit ages 1\u20132"],c9),b0,"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0642\u0635\u0629 (\u0627\u0633\u062a\u0645\u0627\u0639 \u0641\u0642\u0637\u060c \u0644\u0627 \u064a\u064f\u0639\u062f\u0651 \u0625\u062a\u0642\u0627\u0646\u064b\u0627)","Finishing a story (listening only, never counted as mastery)",C.L,C.L,"\u0647\u064a\u0627 \u0646\u0633\u0645\u0639 \u0642\u0635\u0629.","Let's hear a story.",a9,C.L)],B.a4("x<IU>"))})})()};
(a=>{a["xb6iPY37x+5DRKvGTGuROJga/8s="]=a.current})($__dart_deferred_initializers__);