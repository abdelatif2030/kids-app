((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,F,A={B2:function B2(d,e){this.c=d
this.a=e},alt:function alt(d){var _=this
_.d=null
_.e=d
_.c=_.a=null},bb5:function bb5(d,e,f){this.a=d
this.b=e
this.c=f},bb8:function bb8(d){this.a=d},bb9:function bb9(d){this.a=d},bba:function bba(d){this.a=d},bb6:function bb6(d){this.a=d},bb7:function bb7(d){this.a=d},bbb:function bbb(){},bbc:function bbc(){},bbd:function bbd(d,e,f){this.a=d
this.b=e
this.c=f},bbe:function bbe(d){this.a=d},bbf:function bbf(){},aes:function aes(d,e,f){this.c=d
this.d=e
this.a=f},aRf:function aRf(){},aRe:function aRe(){},aRd:function aRd(d){this.a=d},
czs(d){var x,w
for(x=0;x<6;++x){w=D.bce[x]
if(w.a===d)return w}return null},
cAI(d,e){var x,w,v,u,t,s
switch(d.a.a){case 0:for(x=$.bX1(),w=d.b,v=0;v<11;++v){u=x[v]
if(u.a===w){x=e>=u.e&&e<=u.f
return new B.GM(x,u.b)}}break
case 1:for(x=$.c2g(),w=d.b,v=0;v<2;++v){u=x[v]
if(u.a===w){x=u.b.$0()
return new B.GM(e>=u.c&&e<=u.d,x)}}break
case 2:for(x=d.b,v=0;v<17;++v){t=C.tE[v]
if(t.a===x){x=B.e(t.b)
return new B.GM(e>=t.d&&e<=t.e,x)}}break
case 3:for(x=$.c2k(),w=d.b,v=0;v<17;++v){s=x[v]
if(s.a===w){x=s.f.$0()
return new B.GM(e>=s.d&&e<=s.e,x)}}break}return null},
cd5(d,e){var x,w,v,u
for(x=d.length,w=null,v=0;v<x;++v){u=A.cAI(d[v],e)
if(u==null)continue
if(w==null)w=u
if(u.a)return u}return w},
czr(d,e){var x,w,v,u,t
for(x=d.b,w=0;w<3;++w){v=x[w]
u=$.che()
t=B.ym(new B.ao(u,new A.bUm(v),B.a_(u).i("ao<1>")))
if(t!=null&&e>=t.c&&e<=t.d)return t}return null},
cAn(d){var x
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
czt(d,e,f){var x,w,v,u,t,s,r,q=A.czs(d.a)
if(q==null)return null
x=A.cd5(q.c,e)
x=x==null?null:x.b
w=A.czr(q,e)
v=B.a([],y.s)
for(u=q.d,t=u.length,s=0;s<t;++s){r=u[s]
if(f.p(0,r))v.push(r)}u=A.cd5(q.e,e)
return new A.aRc(x,w,v,u==null?null:u.b)},
vv:function vv(d,e){this.a=d
this.b=e},
LU:function LU(d,e){this.a=d
this.b=e},
iy:function iy(d,e){this.a=d
this.b=e},
vd:function vd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bUm:function bUm(d){this.a=d},
aRc:function aRc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return new A.IQ(d,f,g,new A.bMG(h,i))},
qr:function qr(d,e){this.a=d
this.b=e},
IQ:function IQ(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
bMG:function bMG(d,e){this.a=d
this.b=e},
czp(d){var x,w,v,u,t,s=d.c,r=d.a,q=new A.bUk(),p=[new B.le(["balloons",new A.bTZ(),1,2,new A.bU_()]),new B.le(["animal",new A.bU0(),1,2,new A.bUb()]),new B.le(["colors",new A.bUd(),2,3,new A.bUe()]),new B.le(["letters",new A.bUf(),3,8,new A.bUg()]),new B.le(["memory",new A.bUh(),3,6,new A.bUi()]),new B.le(["math",new A.bUj(),4,12,new A.bU1(s)])],o=B.a([],y.X)
for(x=0;x<6;++x){w=p[x]
v=w.a
if(s>=v[2]&&s<=v[3])o.push(new A.os(v[0],v[1],new A.bU2(q,w),!1))}for(v=B.c0w(s),u=v.length,x=0;x<v.length;v.length===u||(0,B.w)(v),++x){w=v[x]
t=w.a
if(D.bG0.p(0,t))o.push(new A.os(t,w.b,new A.bU3(r,w,q,s,d),!0))}o.push(new A.os("drawing",new A.bU4(),new A.bU5(q,d),!1))
o.push(new A.os("stories",new A.bU6(),new A.bU7(q,d),!1))
o.push(new A.os("adventures",new A.bU8(),new A.bU9(q,d),!1))
o.push(new A.os("feelings",new A.bUa(),new A.bUc(q,d),!1))
return o},
D4(d,e,f,g){return new A.yt(d,e,f,g)},
czq(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=new B.P7(0,2,1)
for(x=d+g,w=(d-g)/2,v=-1,u=1;u<=3;++u){t=(e-g*(u-1))/u
s=t*1.1547169811320754
r=s>320?320:s
q=C.n.eK(x/(r+g))
if(q<2){s=w/1.1547169811320754>t?s:w
q=2}else s=r
p=s*s*C.h.a_(u*q,1,f)
if(s>=110&&p>v){o=new B.P7(s,q,u)
v=p}}return v<0?new B.P7(w,2,1):o},
cmv(d,e,f){return new A.Vl(d,f,e)},
os:function os(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUk:function bUk(){},
bUl:function bUl(d){this.a=d},
bTZ:function bTZ(){},
bU_:function bU_(){},
bU0:function bU0(){},
bUb:function bUb(){},
bUd:function bUd(){},
bUe:function bUe(){},
bUf:function bUf(){},
bUg:function bUg(){},
bUh:function bUh(){},
bUi:function bUi(){},
bUj:function bUj(){},
bU1:function bU1(d){this.a=d},
bU2:function bU2(d,e){this.a=d
this.b=e},
bTY:function bTY(d){this.a=d},
bU3:function bU3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTX:function bTX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU4:function bU4(){},
bU5:function bU5(d,e){this.a=d
this.b=e},
bTW:function bTW(d){this.a=d},
bU6:function bU6(){},
bU7:function bU7(d,e){this.a=d
this.b=e},
bTV:function bTV(d){this.a=d},
bU8:function bU8(){},
bU9:function bU9(d,e){this.a=d
this.b=e},
bTU:function bTU(d){this.a=d},
bUa:function bUa(){},
bUc:function bUc(d,e){this.a=d
this.b=e},
bTT:function bTT(d){this.a=d},
yt:function yt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSN:function bSN(){},
bSO:function bSO(){},
bSP:function bSP(){},
bSQ:function bSQ(){},
bSR:function bSR(){},
bSS:function bSS(){},
bST:function bST(){},
bSU:function bSU(){},
Vl:function Vl(d,e,f){this.c=d
this.d=e
this.a=f},
aqw:function aqw(d){var _=this
_.d=$
_.e="all"
_.f=0
_.r=d
_.c=_.a=null},
boo:function boo(d,e){this.a=d
this.b=e},
boz:function boz(d){this.a=d},
boA:function boA(d){this.a=d},
boB:function boB(d){this.a=d},
boC:function boC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
boy:function boy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
bos:function bos(d,e){this.a=d
this.b=e},
bot:function bot(d,e){this.a=d
this.b=e},
bou:function bou(d){this.a=d},
bor:function bor(d,e){this.a=d
this.b=e},
bov:function bov(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
boq:function boq(d,e,f){this.a=d
this.b=e
this.c=f},
bop:function bop(d){this.a=d},
bow:function bow(d,e,f){this.a=d
this.b=e
this.c=f},
box:function box(d,e,f){this.a=d
this.b=e
this.c=f},
av9:function av9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3j:function a3j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btl:function btl(){},
aqv:function aqv(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bon:function bon(){},
Bg:function Bg(d){this.a=d},
a0E:function a0E(){this.d=$
this.c=this.a=null},
bdl:function bdl(d,e){this.a=d
this.b=e},
bdm:function bdm(d){this.a=d},
bdn:function bdn(){},
bdo:function bdo(d,e){this.a=d
this.b=e},
en:function en(d,e){this.a=d
this.b=e},
Gv:function Gv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D7:function D7(d){this.a=d},
a2D:function a2D(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=$
_.w=f
_.x=0
_.z=_.y=!1
_.c=_.a=null},
bpg:function bpg(d,e){this.a=d
this.b=e},
bph:function bph(d){this.a=d},
bpi:function bpi(d){this.a=d},
bpk:function bpk(d,e){this.a=d
this.b=e},
bpj:function bpj(d,e){this.a=d
this.b=e},
bpl:function bpl(d,e){this.a=d
this.b=e},
Ao:function Ao(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dn:function Dn(d,e){this.c=d
this.a=e},
a2O:function a2O(d,e){var _=this
_.d=d
_.f=_.e=$
_.r=e
_.w=0
_.y=_.x=!1
_.c=_.a=null},
bqJ:function bqJ(d,e){this.a=d
this.b=e},
bqK:function bqK(d){this.a=d},
bqL:function bqL(d){this.a=d},
bqM:function bqM(d,e){this.a=d
this.b=e},
FS:function FS(d){this.a=d},
a6a:function a6a(d){var _=this
_.d=d
_.e=$
_.f=null
_.r=0
_.c=_.a=null},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJc:function bJc(d,e){this.a=d
this.b=e}},D
J=c[1]
B=c[0]
C=c[2]
E=c[10]
F=c[18]
A=a.updateHolder(c[6],A)
D=c[17]
A.B2.prototype={
S(){var x=y.N
return new A.alt(B.A(x,x))}}
A.alt.prototype={
ae(){this.aw()
this.Ao()},
Ao(){var x=0,w=B.m(y.H),v=this,u,t,s
var $async$Ao=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:u=v.a.c
x=2
return B.d(B.r3(u.a,u.c,!0,$.m3().e),$async$Ao)
case 2:t=e
x=3
return B.d(B.Qx(v.a.c.a),$async$Ao)
case 3:s=e
if(v.c!=null)v.u(new A.bb5(v,t,s))
return B.k(null,w)}})
return B.l($async$Ao,w)},
Lx(d){return this.aU8(d)},
aU8(d){var x=0,w=B.m(y.H),v=this,u,t,s,r
var $async$Lx=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:r={}
r.a=null
if(d.a==="game"){u=C.e.hW($.u7(),new A.bb8(d))
t=v.a.c
r.a=u.r.$3(t.a,t.c,$.h().a)}else{s=C.e.hW(B.Hm(),new A.bb9(d))
r.a=B.b5s(v.a.c,s)}t=v.c
t.toString
r=B.bG(new A.bba(r),null,y.H)
x=2
return B.d(B.an(t,!1).bi(r),$async$Lx)
case 2:if(v.c!=null)v.Ao()
return B.k(null,w)}})
return B.l($async$Lx,w)},
a8P(d){return d.a==="game"?C.e.hW($.u7(),new A.bb6(d)).b.$0():C.e.hW(B.Hm(),new A.bb7(d)).b},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=$.h(),g=B.bD(j,!0,j,j,j,j,j,j,B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"Weekly adventure",j,j,j,j,j,j,j,j,j),j)
if(i==null)h=C.bi
else{x=B.a6(170,C.dD.q()>>>16&255,C.dD.q()>>>8&255,C.dD.q()&255)
w=i.a
v=w.b
u=B.c(v.b.$0(),j,j,j,j,j,C.eB,C.a3,j,j)
t=B.c(v.c.$0(),j,j,j,j,j,C.hI,C.a3,j,j)
if(i.c)s=h.a==="ar"?"\u062e\u0644\u0635\u062a \u0645\u063a\u0627\u0645\u0631\u0629 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639!":"You finished this week's adventure!"
else{s=i.b
r=B.a_(s).i("ao<1>")
q="\u062e\u0644\u0635\u062a "+new B.ao(s,new A.bbb(),r).gA(0)+" \u0645\u0646 "+s.length+". \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0639\u062c\u0627\u0644."
s="Finished "+new B.ao(s,new A.bbc(),r).gA(0)+" of "+s.length+". No rush."
if(h.a==="ar")s=q}r=y.D
x=B.a([new B.bV(B.a2(B.a([u,t,C.b5,B.c(s,D.bTF,j,j,j,j,C.a2q,j,j,j)],r),C.y,j,C.r,C.w,0,C.A),x,C.a8,C.aO,j,24,j,D.bTG)],r)
u=i.e
if(u!=null)x.push(new B.W(C.fL,new B.Bz(u,96,j),j))
x.push(C.bV)
w=w.c
if(w.length===0)x.push(B.c(h.a==="ar"?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0644\u0639\u0627\u0628 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u0631 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639. \u062c\u0631\u0651\u0628 \u0627\u0643\u062a\u0634\u0641 \u0645\u0639 \u0645\u0627\u0645\u0627 \u0648\u0628\u0627\u0628\u0627.":"No games fit this age this week. Try discovering with mum and dad.",j,j,j,j,j,j,C.a3,j,j))
for(u=i.b,t=y.O,p=0;p<w.length;++p){s=k.a8P(w[p])
q=u[p]
if(q)o=h.a==="ar"?"\u062a\u0645":"done"
else o=h.a==="ar"?"\u0644\u0645 \u064a\u062a\u0645 \u0628\u0639\u062f":"not yet"
n=q?D.age:C.t
m=q?C.ed:D.an7
m=B.c5(m,q?C.pg:C.a8,j,32,j)
l=B.c(k.a8P(w[p]),j,j,j,j,j,C.k_,j,j,j)
x.push(new B.W(C.fK,new B.cu(new A.bbd(k,i,p),new B.bV(B.ax(B.a([m,C.bw,new B.eJ(1,C.bO,l,j),B.c5(w[p].a==="story"?C.qE:C.qG,C.P,j,j,j)],r),C.y,j,C.r,C.w,0,j),n,C.a8,C.aO,j,24,j,new B.O("adventure_step_"+p,t)),20,s+", "+o,!1,!0,j),j))}x.push(new A.aes(v,k.a.c.c,j))
w=k.e
if(w.gc2(w)){w=B.c(h.a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a\u064a":"My adventures",j,j,j,j,j,C.ez,j,j,j)
v=B.a([],r)
for(h=k.e.gcF(),h=h.c9(h),u=B.a_(h).i("cC<1>"),h=new B.cC(h,u),h=new B.ba(h,h.gA(0),u.i("ba<al.E>")),u=u.i("al.E");h.t();){s=h.d
if(s==null)s=u.a(s)
v.push(B.n5(D.aqr,j,new B.O("adventure_past_"+s.a,t),B.c(C.e.kc($.aA9(),new A.bbe(s),new A.bbf()).b.$0(),j,j,j,j,j,j,j,j,j),j,j))}C.e.O(x,B.a([C.a7,w,C.b5,B.b_(C.I,v,C.a0,j,C.I,8,8)],r))}h=B.ia(x,j,j,C.ar,j,C.ad,!1)}return B.bm(g,j,h,j,!1,j,j)}}
A.aes.prototype={
v(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=B.aa(y.N)
for(x=$.u7(),w=this.d,v=0;v<24;++v){u=x[v]
if(w>=u.e&&w<=u.f)m.C(0,u.a)}t=A.czt(this.c,w,m)
if(t==null)return C.aW
m=new A.aRf()
x=$.h()
w=B.c(x.a==="ar"?"\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0639\u0644\u0651\u0645":"Learning path",n,n,n,n,n,C.a2d,n,n,n)
s=m.$3(D.bxb,t.b,C.qA)
r=t.c
r=m.$3(D.bxc,r==null?n:r.e.$0(),D.anN)
q=t.d
q=m.$3(D.bxd,q.length===0?n:new B.a3(q,new A.aRe(),B.a_(q).i("a3<1,n>")).aC(0,B.e("\u060c ")),C.qG)
p=t.e
if(p==null)p=n
else{o=x.a==="ar"?"\u0645\u0639 \u0634\u062e\u0635 \u0628\u0627\u0644\u063a":"with a grown-up"
o=p+" ("+o+")"
p=o}p=m.$3(D.bxe,p,C.z0)
return new B.W(C.fL,new B.bV(B.a2(B.a([w,s,r,q,p,m.$3(D.bxf,x.a==="ar"?"\u0639\u0646\u062f \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u064a\u064f\u0633\u062c\u064e\u0651\u0644 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0623\u0633\u0628\u0648\u0639":"When the steps are done the week's adventure is recorded",C.J_)],y.D),C.X,n,C.r,C.w,0,C.A),C.t,C.a8,C.aO,n,24,n,D.bVn),n)}}
A.vv.prototype={
H(){return"PhaseKind."+this.b}}
A.LU.prototype={
H(){return"RefKind."+this.b}}
A.iy.prototype={}
A.vd.prototype={}
A.aRc.prototype={}
A.qr.prototype={
H(){return"Strand."+this.b}}
A.IQ.prototype={}
A.os.prototype={}
A.yt.prototype={}
A.Vl.prototype={
S(){return new A.aqw(E.bYQ(0,1))}}
A.aqw.prototype={
m(){this.r.m()
this.ag()},
aRu(d){var x,w=this
if(d===w.e)return
w.u(new A.boo(w,d))
x=w.r
if(x.f.length!==0)x.a3x(0)},
ajm(d,e){var x=this,w=C.h.a_(x.f+d,0,e-1)
if(w!==x.f&&x.r.f.length!==0)x.r.ald(w,C.kF,D.akd)},
v(d){var x,w,v,u,t,s,r,q,p=A.czp(this.a.c),o=B.a([],y.j)
for(x=$.chf(),w=0;w<8;++w){v=x[w]
u=v.d
if(u.ga2(u)||C.e.cJ(p,new A.boz(v)))o.push(v)}t=C.e.kc(o,new A.boA(this),new A.boB(o))
x=t.d
if(x.ga2(x))s=p
else{u=B.a([],y.X)
for(r=p.length,w=0;w<p.length;p.length===r||(0,B.w)(p),++w){q=p[w]
if(x.p(0,q.a))u.push(q)}s=u}return new B.hn(D.a8m,C.de,B.fJ(new A.boC(this,s,o,t,d.ai(y.I).w===C.bW)),D.bVm)}}
A.av9.prototype={
v(d){var x=null,w=this.c,v=w.c,u=v.$0(),t=this.d,s=t?D.atB:x,r=t?x:C.t.jl(0.92),q=B.be(30),p=B.cz(C.t,3)
v=B.y(v.$0())
return new B.cu(this.e,B.B7(C.W,B.c(w.b+"  "+v,x,x,x,x,x,B.ar(x,x,t?C.t:D.aeB,x,x,x,x,x,x,x,x,17,x,x,C.aa,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x,C.aP,new B.aF(r,x,p,q,D.bfS,s,C.a1),C.HD,x,x,x,C.eS,x),30,u,!1,!0,x)}}
A.a3j.prototype={
v(d){var x,w,v=this,u=null,t=v.e,s=t?1:0.3,r=v.c,q=$.h().a==="ar"?"\u0635\u0641\u062d\u0629 \u062a\u0627\u0646\u064a\u0629":"Turn the page"
t=t?v.f:new A.btl()
x=B.cz(C.t,3)
w=v.d?C.qy:C.qz
return B.a8A(new B.cu(t,B.aU(u,B.c5(w,C.t,u,r*0.8,C.aB),C.G,u,u,new B.aF(u,u,x,u,C.QF,D.atu,C.by),u,r,u,u,u,u,u,r),r,q,!1,!0,u),C.aP,C.aA,s)}}
A.aqv.prototype={
v(d){var x=this,w=null,v=B.df(0,0,300+x.f*60,0),u=x.c,t=u.a,s=u.b.$0(),r=y.D
s=B.a([B.js(0,new B.cu(x.x,B.pX("assets/games/learn_cards/"+t+".webp",C.W,w,w,!1,C.cF,C.eo,w,w,w),28,s,!1,!0,new B.O("learn_"+t,y.O)))],r)
if(u.d){u=B.a([],r)
if(x.r)u.push(D.aqD)
u.push(new B.Jz(x.w,"game",t,24,w))
s.push(B.jr(w,B.a2(u,C.y,w,C.r,C.ak,0,C.A),w,w,4,w,4,w))}return B.c8A(new A.bon(),new B.aI(x.d,x.e,B.e9(C.bB,s,C.U,C.c3,w),w),C.pX,v,new B.b4(0,1,y.Y),y.i)}}
A.Bg.prototype={
S(){return new A.a0E()}}
A.a0E.prototype={
ae(){this.aw()
this.d=B.bn(6,!1,!1,y.y)},
aW8(d){var x=this.d
x===$&&B.b()
if(x[d])return
this.u(new A.bdl(this,d))},
aYs(){return this.u(new A.bdm(this))},
v(d){var x,w,v,u,t,s=this,r=null,q=s.d
q===$&&B.b()
x=C.e.dr(q,new A.bdn())
q=B.bD(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
w=y.D
if(x)w=B.a2(B.a([C.qM,C.aZ,B.c(B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,36,r,r,C.aj,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),C.f4,B.cG(B.c(B.e("\u0627\u0644\u0639\u0628 \u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gaYr(),r)],w),C.y,r,C.r,C.ak,0,C.A)
else{w=B.a([],w)
for(v=0;v<6;++v){u=s.d[v]?0:1
t=new B.aO(55,55)
w.push(new B.cu(new A.bdo(s,v),new B.r4(B.aU(r,r,C.G,r,r,new B.aF(C.nE[C.h.al(v,6)],r,r,new B.ct(t,t,t,t),r,r,C.a1),r,130,r,r,r,r,r,110),u,C.aP,C.d_,r,r),20,r,!1,!0,r))}w=B.b_(C.aY,w,C.a0,r,C.I,24,24)}return B.bm(q,r,new B.rB(B.bc(w,r,r,r),r),r,!1,r,r)}}
A.en.prototype={}
A.Gv.prototype={}
A.D7.prototype={
S(){return new A.a2D(C.aN,D.a4e,B.aa(y.S))}}
A.a2D.prototype={
ae(){this.aw()
this.Yu()},
Yu(){var x=this,w=B.L(x.e.e,y.r)
C.e.bx(w,x.d)
x.f=B.c9(w,0,B.cE(5,"count",y.S),B.a_(w).c).c9(0)
x.x=0
x.aey()},
aey(){var x,w,v,u=this,t=u.f
t===$&&B.b()
x=C.o.az(t[u.x].b,0,1)
t=y.s
w=B.a(u.e.d.split(""),t)
C.e.N(w,x)
v=u.d
C.e.bx(w,v)
t=B.a([x],t)
C.e.O(t,B.c9(w,0,B.cE(2,"count",y.S),y.N))
C.e.bx(t,v)
u.r=t
u.w.W(0)
u.z=u.y=!1},
Nl(d){return this.b0U(d)},
b0U(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$Nl=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.y||u.w.p(0,d)){x=1
break}t=u.r
t===$&&B.b()
t=t[d]
s=u.f
s===$&&B.b()
s=C.o.az(s[u.x].b,0,1)
if(t!==s){u.z=!0
u.u(new A.bpg(u,d))
x=1
break}B.lL("letters_"+u.e.a,!u.z,$.cq().d,s)
u.u(new A.bph(u))
x=3
return B.d(B.jQ(C.hh,null,y.z),$async$Nl)
case 3:if(u.c==null){x=1
break}u.u(new A.bpi(u))
case 1:return B.k(v,w)}})
return B.l($async$Nl,w)},
Nk(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Nk=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u3(t),$async$Nk)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaRx())
case 1:return B.k(v,w)}})
return B.l($async$Nk,w)},
v(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.bD(l,!0,C.Z,l,l,l,l,l,B.c(B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a"),l,l,l,l,l,C.v1,l,l,l),l),j=y.D,i=B.a([],j)
for(x=0;x<4;++x){w=D.blY[x]
i.push(B.dw(l,B.c(B.e(w.b),l,l,l,l,l,C.k1,l,l,l),l,new A.bpk(m,w),w===m.e,l))}i=B.a([B.b_(C.aY,i,C.a0,l,C.I,0,8),C.f4],j)
if(m.x>=5)i.push(new B.MM(m.gaRw(),l))
else{v=B.c(m.y?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0623\u0648\u0644 \u062d\u0631\u0641"),l,l,l,l,l,C.v2,l,l,l)
u=m.f
u===$&&B.b()
u=u[m.x]
t=B.c(u.a,l,l,l,l,l,C.v_,l,l,l)
s=m.e.c?C.bW:C.aB
s=B.c(u.b,l,l,l,l,l,D.bOl,l,s,l)
u=B.a([],j)
r=m.w
q=0
for(;;){p=m.r
p===$&&B.b()
if(!(q<p.length))break
p=r.p(0,q)?0.15:1
o=C.nE[(q+3)%6]
n=new B.aO(24,24)
u.push(new B.r4(new B.cu(new A.bpl(m,q),B.aU(C.W,B.c(m.r[q],l,l,l,l,l,D.bN6,l,l,l),C.G,l,l,new B.aF(o,l,l,new B.ct(n,n,n,n),l,l,C.a1),l,96,l,l,l,l,l,96),20,l,!1,!0,l),p,C.aP,C.d_,l,l));++q}C.e.O(i,B.a([v,C.aZ,t,s,C.f4,B.b_(C.aY,u,C.a0,l,C.I,16,16)],j))}return B.bm(k,l,new B.rB(B.bc(B.dh(B.a2(i,C.y,l,C.r,C.ak,0,C.A),l,C.T,l,C.ar,l,l,C.ad),l,l,l),l),l,!1,l,l)}}
A.Ao.prototype={}
A.Dn.prototype={
S(){return new A.a2O(C.aN,B.aa(y.S))}}
A.a2O.prototype={
ae(){this.aw()
this.af0()},
aS2(){var x,w,v,u,t,s=this,r=null,q="addition",p=s.a.c
if(p<=5){x=p<=4?5:10
w=1+s.d.c7(x)
return new A.Ao(w,B.e("\u0643\u0627\u0645\u061f"),w,"counting")}if(p<=7){v=p===6?10:20
x=s.d
u=1+x.c7(v-1)
t=1+x.c7(v-u)
return new A.Ao(r,""+u+" + "+t+" = ?",u+t,q)}if(p<=9){x=s.d
u=10+x.c7(41)
if(x.Ss()){t=1+x.c7(50)
return new A.Ao(r,""+u+" + "+t+" = ?",u+t,q)}t=1+x.c7(u-1)
return new A.Ao(r,""+u+" - "+t+" = ?",u-t,"subtraction")}x=s.d
u=2+x.c7(8)
t=2+x.c7(11)
return new A.Ao(r,""+u+" \xd7 "+t+" = ?",u*t,"multiplication")},
af0(){var x,w=this,v=B.a([],y.q)
for(x=0;x<5;++x)v.push(w.aS2())
w.e=v
w.w=0
w.af1()},
af1(){var x,w,v,u,t,s=this,r=s.e
r===$&&B.b()
x=r[s.w].c
r=y.t
w=B.a([],r)
for(v=-3;v<=3;++v)if(v!==0&&x+v>=1)w.push(x+v)
u=s.d
C.e.bx(w,u)
r=B.a([x],r)
t=y.S
C.e.O(r,B.c9(w,0,B.cE(2,"count",t),t))
C.e.bx(r,u)
s.f=r
s.r.W(0)
s.y=s.x=!1},
Ny(d){return this.b0V(d)},
b0V(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$Ny=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:if(u.x||u.r.p(0,d)){x=1
break}t=u.f
t===$&&B.b()
t=t[d]
s=u.e
s===$&&B.b()
s=s[u.w]
if(t!==s.c){u.y=!0
u.u(new A.bqJ(u,d))
x=1
break}B.lL(s.d,!u.y,$.cq().d,null)
u.u(new A.bqK(u))
x=3
return B.d(B.jQ(C.hh,null,y.z),$async$Ny)
case 3:if(u.c==null){x=1
break}u.u(new A.bqL(u))
case 1:return B.k(v,w)}})
return B.l($async$Ny,w)},
Nx(){var x=0,w=B.m(y.H),v,u=this,t
var $async$Nx=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return B.d(B.u3(t),$async$Nx)
case 3:if(e){x=1
break}if(u.c!=null)u.u(u.gaSI())
case 1:return B.k(v,w)}})
return B.l($async$Nx,w)},
v(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bD(o,!0,C.Z,o,o,o,o,o,B.c(B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a"),o,o,o,o,o,B.ar(o,o,o,o,o,o,o,o,o,o,o,26,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o)
if(p.w>=5)x=new B.MM(p.gaS1(),o)
else{x=y.D
w=B.a([B.c(p.x?B.e("\u0623\u062d\u0633\u0646\u062a!"):B.e("\u0627\u062e\u062a\u0627\u0631 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"),o,o,o,o,o,C.v2,o,o,o),C.f4],x)
v=p.e
v===$&&B.b()
u=v[p.w].a
if(u!=null){v=B.a([],x)
for(t=0;t<u;++t)v.push(D.bR9)
w.push(B.b_(C.aY,v,C.a0,o,C.I,0,8))}if(p.e[p.w].a!=null)w.push(C.a7)
w.push(B.c(p.e[p.w].b,o,o,o,o,o,D.bQ4,o,C.aB,o))
w.push(C.C9)
x=B.a([],x)
v=p.r
t=0
for(;;){s=p.f
s===$&&B.b()
if(!(t<s.length))break
s=v.p(0,t)?0.15:1
r=C.nE[(t+2)%6]
q=new B.aO(24,24)
x.push(new B.r4(new B.cu(new A.bqM(p,t),B.aU(C.W,B.c(""+p.f[t],o,o,o,o,o,D.bKU,o,o,o),C.G,o,o,new B.aF(r,o,o,new B.ct(q,q,q,q),o,o,C.a1),o,104,o,o,o,o,o,104),20,o,!1,!0,o),s,C.aP,C.d_,o,o));++t}w.push(B.b_(C.aY,x,C.a0,o,C.I,16,16))
x=B.dh(B.a2(w,C.y,o,C.r,C.ak,0,C.A),o,C.T,o,C.ar,o,o,C.ad)}return B.bm(n,o,new B.rB(B.bc(x,o,o,o),o),o,!1,o,o)}}
A.FS.prototype={
S(){return new A.a6a(C.aN)}}
A.a6a.prototype={
ae(){this.aw()
this.akG()},
akG(){var x=this,w=B.L(D.bei,y.N)
C.e.bx(w,x.d)
x.e=B.c9(w,0,B.cE(3,"count",y.S),B.a_(w).c).c9(0)
x.f=null;++x.r},
b0Y(d){if(this.f!=null)return
this.u(new A.bJb(this,d))},
b3z(){return this.u(this.gb3x())},
v(d){var x,w,v,u,t,s=this,r=null,q=B.bD(r,!0,C.Z,r,r,r,r,r,B.c(B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,26,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r),p=B.c(s.f==null?B.e("\u0627\u062e\u062a\u0627\u0631 \u0635\u0646\u062f\u0648\u0642"):B.e("\u0623\u062d\u0633\u0646\u062a!"),r,r,r,r,r,C.v2,r,r,r),o=y.D,n=B.a([],o)
for(x=0;x<3;++x){w=s.f===x
v=w?C.nE[x]:C.t
u=new B.aO(24,24)
t=new B.aZ(C.xe,3,C.a5,-1)
if(w){w=s.e
w===$&&B.b()
w=w[x]}else w="\ud83d\udce6"
n.push(new B.cu(new A.bJc(s,x),B.aU(C.W,B.c(w,r,r,r,r,r,D.bNp,r,r,r),C.G,r,r,new B.aF(v,r,new B.dZ(t,t,t,t),new B.ct(u,u,u,u),r,r,C.a1),r,110,r,r,r,r,r,110),20,r,!1,!0,r))}p=B.a([p,C.f4,B.b_(C.aY,n,C.a0,r,C.I,20,20),C.C9],o)
if(s.f!=null)p.push(B.cG(B.c(B.e("\u062a\u0627\u0646\u064a"),r,r,r,r,r,B.ar(r,r,r,r,r,r,r,r,r,r,r,24,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,s.gb3y(),r))
return B.bm(q,r,new B.rB(B.bc(B.a2(p,C.y,r,C.r,C.ak,0,C.A),r,r,r),r),r,!1,r,r)}}
var z=a.updateTypes(["~()","a7<~>()","f(vv,n?,ac)","E(IQ)","Bg()","FS()","D7()","Dn()","B2()","E(os)","E(yt)","yt()"])
A.bb5.prototype={
$0(){var x=this.a
x.d=this.b
x.e=this.c},
$S:0}
A.bb8.prototype={
$1(d){return d.a===this.a.b},
$S:125}
A.bb9.prototype={
$1(d){return d.a===this.a.b},
$S:403}
A.bba.prototype={
$1(d){var x=this.a.a
x.toString
return x},
$S:10}
A.bb6.prototype={
$1(d){return d.a===this.a.b},
$S:125}
A.bb7.prototype={
$1(d){return d.a===this.a.b},
$S:403}
A.bbb.prototype={
$1(d){return d},
$S:58}
A.bbc.prototype={
$1(d){return d},
$S:58}
A.bbd.prototype={
$0(){return this.a.Lx(this.b.a.c[this.c])},
$S:0}
A.bbe.prototype={
$1(d){return d.a===this.a.b},
$S:1153}
A.bbf.prototype={
$0(){return C.e.gZ($.aA9())},
$S:1154}
A.aRf.prototype={
$3(d,e,f){var x=null
return e==null?C.aW:new B.W(C.mV,B.ax(B.a([B.c5(f,C.c6,x,22,x),C.cq,B.c(A.cAn(d)+": ",x,x,x,x,x,D.bOh,x,x,x),B.aX(B.c(e,x,x,x,x,x,C.hI,x,x,x),1)],y.D),C.y,x,C.r,C.w,0,x),x)},
$S:z+2}
A.aRe.prototype={
$1(d){return C.e.hW($.u7(),new A.aRd(d)).b.$0()},
$S:22}
A.aRd.prototype={
$1(d){return d.a===this.a},
$S:125}
A.bUm.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.bMG.prototype={
$0(){var x=this.a,w=this.b
return $.h().a==="ar"?x:w},
$S:1}
A.bUk.prototype={
$2(d,e){var x=B.bG(new A.bUl(e),null,y.H)
return B.an(d,!1).bi(x)},
$S:1155}
A.bUl.prototype={
$1(d){return this.a.$0()},
$S:10}
A.bTZ.prototype={
$0(){return B.e("\u0627\u0641\u0631\u0642\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062a")},
$S:1}
A.bU_.prototype={
$0(){return D.a7f},
$S:z+4}
A.bU0.prototype={
$0(){return B.e("\u0641\u064a\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u061f")},
$S:1}
A.bUb.prototype={
$0(){return D.bZp},
$S:z+5}
A.bUd.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646")},
$S:1}
A.bUe.prototype={
$0(){return D.abR},
$S:1156}
A.bUf.prototype={
$0(){return B.e("\u062d\u0631\u0648\u0641 \u0648\u0643\u0644\u0645\u0627\u062a")},
$S:1}
A.bUg.prototype={
$0(){return D.ath},
$S:z+6}
A.bUh.prototype={
$0(){return B.e("\u0644\u0639\u0628\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629")},
$S:1}
A.bUi.prototype={
$0(){return D.bqO},
$S:1157}
A.bUj.prototype={
$0(){return B.e("\u0631\u064a\u0627\u0636\u064a\u0627\u062a")},
$S:1}
A.bU1.prototype={
$0(){return new A.Dn(this.a,null)},
$S:z+7}
A.bU2.prototype={
$1(d){return this.a.$2(d,new A.bTY(this.b))},
$S:91}
A.bTY.prototype={
$0(){return new B.Cn(this.a.a[4].$0(),null)},
$S:1159}
A.bU3.prototype={
$1(d){return this.ath(d)},
ath(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:t=u.a
s=u.b
x=3
return B.d(B.M7(t,"game",s.a),$async$$1)
case 3:if(d.e==null){x=1
break}x=4
return B.d(u.c.$2(d,new A.bTX(s,t,u.d,u.e)),$async$$1)
case 4:case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:91}
A.bTX.prototype={
$0(){var x=this
return x.a.r.$3(x.b,x.c,B.a7I(x.d))},
$S:356}
A.bU4.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0631\u0633\u0645":"Drawing"},
$S:1}
A.bU5.prototype={
$1(d){return this.a.$2(d,new A.bTW(this.b))},
$S:91}
A.bTW.prototype={
$0(){return new B.oi(this.a,null,null)},
$S:381}
A.bU6.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u0643\u0631\u062a\u0648\u0646":"Stories and cartoons"},
$S:1}
A.bU7.prototype={
$1(d){return this.a.$2(d,new A.bTV(this.b))},
$S:91}
A.bTV.prototype={
$0(){return new B.mD(this.a,null)},
$S:1160}
A.bU8.prototype={
$0(){return $.h().a==="ar"?"\u0645\u063a\u0627\u0645\u0631\u0627\u062a \u0631\u062d\u0644\u062a\u064a":"Rehlaty adventures"},
$S:1}
A.bU9.prototype={
$1(d){return this.a.$2(d,new A.bTU(this.b))},
$S:91}
A.bTU.prototype={
$0(){return new A.B2(this.a,null)},
$S:z+8}
A.bUa.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0648\u0627\u0644\u0623\u0635\u062d\u0627\u0628":"Feelings and friends"},
$S:1}
A.bUc.prototype={
$1(d){return this.a.$2(d,new A.bTT(this.b))},
$S:91}
A.bTT.prototype={
$0(){return new B.nr(B.ja("feelings"),this.a,null)},
$S:1161}
A.bSN.prototype={
$0(){return $.h().a==="ar"?"\u0627\u0644\u0643\u0644":"All"},
$S:1}
A.bSO.prototype={
$0(){return $.h().a==="ar"?"\u062a\u0641\u0643\u064a\u0631":"Thinking"},
$S:1}
A.bSP.prototype={
$0(){return $.h().a==="ar"?"\u062d\u0631\u0648\u0641":"Letters"},
$S:1}
A.bSQ.prototype={
$0(){return $.h().a==="ar"?"\u0623\u0631\u0642\u0627\u0645":"Numbers"},
$S:1}
A.bSR.prototype={
$0(){return $.h().a==="ar"?"\u0623\u0644\u0648\u0627\u0646 \u0648\u0623\u0634\u0643\u0627\u0644":"Colours & shapes"},
$S:1}
A.bSS.prototype={
$0(){return $.h().a==="ar"?"\u062d\u064a\u0648\u0627\u0646\u0627\u062a":"Animals"},
$S:1}
A.bST.prototype={
$0(){return $.h().a==="ar"?"\u0630\u0627\u0643\u0631\u0629":"Memory"},
$S:1}
A.bSU.prototype={
$0(){return $.h().a==="ar"?"\u0631\u0633\u0645 \u0648\u0642\u0635\u0635":"Draw & stories"},
$S:1}
A.boo.prototype={
$0(){var x=this.a
x.e=this.b
x.f=0},
$S:0}
A.boz.prototype={
$1(d){return this.a.d.p(0,d.a)},
$S:z+9}
A.boA.prototype={
$1(d){return d.a===this.a.e},
$S:z+10}
A.boB.prototype={
$0(){return C.e.gZ(this.a)},
$S:z+11}
A.boC.prototype={
$2(d,e){var x=this,w=e.b,v=e.d,u=w/8.533333333333333,t=C.n.a_(v*0.085,46,58),s=C.n.a_(w*0.055,40,68),r=C.n.a_(w*0.014,6,18),q=u+t+12,p=C.n.a_(v-q-24-12,80,1/0),o=x.b,n=A.czq(w-s*2,p,o.length,r),m=n.c*n.b,l=C.h.a_(C.n.e9(o.length/m),1,99),k=n.a,j=x.a,i=j.d
if(i===$)i=j.d=B.y1(j.a.c.a)
return B.e6(new A.boy(j,w,u,t,s,x.c,x.d,q,p,l,o,m,r,k,k/1.1547169811320754,x.e),i,y.C)},
$S:1162}
A.boy.prototype={
$2(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="learn_next",d="learn_prev",a0=a2.b
if(a0==null)a0=C.ex
x=g.b
w=B.jr(0,B.hU(B.t1(B.pX("assets/games/learn_bottom.webp",C.W,f,f,!1,C.cF,C.Ex,f,f,x),0.85),!0,f),f,f,0,0,f,f)
v=B.jr(f,B.pX("assets/games/learn_top.webp",C.W,f,f,!1,C.cF,C.Ex,f,f,x),f,f,0,0,0,f)
u=g.c
t=$.h().a==="ar"?"\u0631\u062c\u0648\u0639":"Back"
s=g.a
x=B.jr(f,new B.cu(new A.bos(s,a1),C.is,60,t,!1,!0,D.bVl),u,f,0,f,0,x*0.13)
t=g.e
r=t*0.5
q=y.D
p=B.a([],q)
for(o=g.f,n=o.length,m=y.O,l=g.r.a,k=0;k<o.length;o.length===n||(0,B.w)(o),++k){j=o[k]
i=j.a
p.push(new B.W(C.q9,new A.av9(j,i===l,new A.bot(s,j),new B.O("shelf_"+i,m)),f))}u=B.jr(f,B.bc(B.ia(p,f,D.bVk,new B.ad(r,0,r,0),f,C.bl,!0),f,f,f),g.d,f,0,0,u+6,f)
r=g.w
p=g.x
o=g.y
n=new B.a64(0)
l=B.a([w,v,x,u,B.jr(f,new E.L5(n,s.r,f,new A.bou(s),new B.MD(new A.bov(s,g.z,g.Q,g.as,g.at,g.ax,a0),o,!0,!0,!0,B.c0S(),f),C.T,C.U,new B.O("learn_pages_"+l,m)),p,f,t,t,r,f)],q)
if(o>1){x=r+p/2-t/2
w=g.ay
v=w?e:d
t-=6
u=s.f
r=w?u<o-1:u>0
v=B.jr(f,new A.a3j(t,!0,r,new A.bow(s,w,o),new B.O(v,m)),f,f,4,f,x,f)
r=w?d:e
u=w?u>0:u<o-1
C.e.O(l,B.a([v,B.jr(f,new A.a3j(t,!1,u,new A.box(s,w,o),new B.O(r,m)),f,f,f,4,x,f)],q))}x=B.a([],q)
for(h=0;h<o;++h){w=h===s.f
v=w?28:12
w=w?C.mH:C.t.jl(0.9)
u=new B.aO(8,8)
x.push(B.B7(f,f,f,C.aP,new B.aF(w,f,f,new B.ct(u,u,u,u),C.Qc,f,C.a1),C.mR,f,12,C.cX,f,v))}l.push(B.jr(6,B.ax(x,C.y,f,C.bQ,C.w,0,f),24,f,0,0,f,f))
return B.e9(C.bB,l,C.U,C.c3,f)},
$S:1163}
A.bos.prototype={
$0(){var x=this.a.a.d.$0()
return x},
$S:0}
A.bot.prototype={
$0(){return this.a.aRu(this.b.a)},
$S:0}
A.bou.prototype={
$1(d){var x=this.a
return x.u(new A.bor(x,d))},
$S:14}
A.bor.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bov.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=l.c,h=B.c9(j,e*i,k,B.a_(j).c).oA(0,i).c9(0)
i=l.d
j=B.a([],y.D)
for(x=B.mp(h,0,y.A),w=J.au(x.a),x=x.b,v=new B.ly(w,x),u=y.O,t=l.e,s=l.f,r=l.r,q=l.a;v.t();){p={}
o=v.c
o=o>=0?new B.M(x+o,w.gG()):B.ae(B.cZ())
p.a=null
n=p.a=o.b
m=n.a
j.push(new A.aqv(n,t,s,o.a,r.p(0,m),q.a.c.a,new A.boq(p,q,d),new B.O("card_"+m,u)))}return B.bc(B.b_(C.aY,j,C.a0,k,C.I,i,i),k,k,k)},
$S:1164}
A.boq.prototype={
$0(){var x=0,w=B.m(y.H),v=this,u
var $async$$0=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:x=2
return B.d(v.a.a.c.$1(v.c),$async$$0)
case 2:u=v.b
if(u.c!=null)u.u(new A.bop(u))
return B.k(null,w)}})
return B.l($async$$0,w)},
$S:3}
A.bop.prototype={
$0(){var x=this.a
return x.d=B.y1(x.a.c.a)},
$S:0}
A.bow.prototype={
$0(){var x=this.b?1:-1
return this.a.ajm(x,this.c)},
$S:0}
A.box.prototype={
$0(){var x=this.b?-1:1
return this.a.ajm(x,this.c)},
$S:0}
A.btl.prototype={
$0(){},
$S:0}
A.bon.prototype={
$3(d,e,f){return B.akl(B.t1(f,C.n.a_(e,0,1)),0.7+0.3*e)},
$S:353}
A.bdl.prototype={
$0(){var x=this.a.d
x===$&&B.b()
x[this.b]=!0
return!0},
$S:0}
A.bdm.prototype={
$0(){return this.a.d=B.bn(6,!1,!1,y.y)},
$S:0}
A.bdn.prototype={
$1(d){return d},
$S:58}
A.bdo.prototype={
$0(){return this.a.aW8(this.b)},
$S:0}
A.bpg.prototype={
$0(){return this.a.w.C(0,this.b)},
$S:0}
A.bph.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bpi.prototype={
$0(){var x=this.a
if(++x.x<5)x.aey()},
$S:0}
A.bpk.prototype={
$1(d){var x=this.a
return x.u(new A.bpj(x,this.b))},
$S:4}
A.bpj.prototype={
$0(){var x=this.a
x.e=this.b
x.Yu()},
$S:0}
A.bpl.prototype={
$0(){return this.a.Nl(this.b)},
$S:0}
A.bqJ.prototype={
$0(){return this.a.r.C(0,this.b)},
$S:0}
A.bqK.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bqL.prototype={
$0(){var x=this.a
if(++x.w<5)x.af1()},
$S:0}
A.bqM.prototype={
$0(){return this.a.Ny(this.b)},
$S:0}
A.bJb.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bJc.prototype={
$0(){return this.a.b0Y(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.a0E.prototype,"gaYr","aYs",0)
var w
x(w=A.a2D.prototype,"gaRx","Yu",0)
x(w,"gaRw","Nk",1)
x(w=A.a2O.prototype,"gaSI","af0",0)
x(w,"gaS1","Nx",1)
x(w=A.a6a.prototype,"gb3x","akG",0)
x(w,"gb3y","b3z",0)})();(function inheritance(){var x=a.inheritMany
x(B.T,[A.B2,A.Vl,A.Bg,A.D7,A.Dn,A.FS])
x(B.Y,[A.alt,A.aqw,A.a0E,A.a2D,A.a2O,A.a6a])
x(B.n8,[A.bb5,A.bbd,A.bbf,A.bMG,A.bTZ,A.bU_,A.bU0,A.bUb,A.bUd,A.bUe,A.bUf,A.bUg,A.bUh,A.bUi,A.bUj,A.bU1,A.bTY,A.bTX,A.bU4,A.bTW,A.bU6,A.bTV,A.bU8,A.bTU,A.bUa,A.bTT,A.bSN,A.bSO,A.bSP,A.bSQ,A.bSR,A.bSS,A.bST,A.bSU,A.boo,A.boB,A.bos,A.bot,A.bor,A.boq,A.bop,A.bow,A.box,A.btl,A.bdl,A.bdm,A.bdo,A.bpg,A.bph,A.bpi,A.bpj,A.bpl,A.bqJ,A.bqK,A.bqL,A.bqM,A.bJb,A.bJc])
x(B.jK,[A.bb8,A.bb9,A.bba,A.bb6,A.bb7,A.bbb,A.bbc,A.bbe,A.aRf,A.aRe,A.aRd,A.bUm,A.bUl,A.bU2,A.bU3,A.bU5,A.bU7,A.bU9,A.bUc,A.boz,A.boA,A.bou,A.bon,A.bdn,A.bpk])
x(B.X,[A.aes,A.av9,A.a3j,A.aqv])
x(B.tR,[A.vv,A.LU,A.qr])
x(B.U,[A.iy,A.vd,A.aRc,A.IQ,A.os,A.yt,A.en,A.Gv,A.Ao])
x(B.o9,[A.bUk,A.boC,A.boy,A.bov])})()
B.qN(b.typeUniverse,JSON.parse('{"B2":{"T":[],"f":[]},"alt":{"Y":["B2"]},"aes":{"X":[],"f":[]},"Vl":{"T":[],"f":[]},"aqw":{"Y":["Vl"]},"av9":{"X":[],"f":[]},"a3j":{"X":[],"f":[]},"aqv":{"X":[],"f":[]},"Bg":{"T":[],"f":[]},"a0E":{"Y":["Bg"]},"D7":{"T":[],"f":[]},"a2D":{"Y":["D7"]},"Dn":{"T":[],"f":[]},"a2O":{"Y":["Dn"]},"FS":{"T":[],"f":[]},"a6a":{"Y":["FS"]}}'))
var y=(function rtii(){var x=B.a4
return{M:x("fG<n>"),I:x("hP"),W:x("x<q>"),X:x("x<os>"),j:x("x<yt>"),p:x("x<iy>"),s:x("x<n>"),D:x("x<f>"),q:x("x<Ao>"),w:x("x<en>"),t:x("x<r>"),A:x("os"),C:x("bh<n>"),N:x("n"),Y:x("b4<Q>"),O:x("O<n>"),r:x("en"),y:x("E"),i:x("Q"),z:x("@"),S:x("r"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a7f=new A.Bg(null)
D.acv=new B.q(1,0.6039215686274509,0.8470588235294118,0.9607843137254902,C.q)
D.acA=new B.q(1,0.48627450980392156,0.803921568627451,0.7058823529411765,C.q)
D.adV=new B.q(1,0.43137254901960786,0.7843137254901961,0.5882352941176471,C.q)
D.bdU=x([D.acv,D.acA,D.adV],y.W)
D.atj=new B.dS(C.c5,C.ck,C.b9,D.bdU,null,null)
D.a8m=new B.aF(null,null,null,null,null,D.atj,C.a1)
D.abR=new B.rj(null)
D.aeB=new B.q(1,0.22745098039215686,0.16470588235294117,0.41568627450980394,C.q)
D.age=new B.q(1,0.8901960784313725,0.9725490196078431,0.8784313725490196,C.q)
D.akd=new B.b3(38e4)
D.an7=new B.ac(61267,"MaterialIcons",!1)
D.anN=new B.ac(63573,"MaterialIcons",!1)
D.aqr=new B.aw(F.yY,18,null,null,null,null)
D.aqD=new B.aw(C.ed,28,C.fp,null,null,null)
D.ath=new A.D7(null)
D.af5=new B.q(1,1,0.8313725490196079,0.35294117647058826,C.q)
D.ag1=new B.q(1,0.9607843137254902,0.6274509803921569,0.10196078431372549,C.q)
D.atR=x([D.af5,D.ag1],y.W)
D.atu=new B.dS(C.c5,C.ck,C.b9,D.atR,null,null)
D.ago=new B.q(1,0.6039215686274509,0.41568627450980394,0.9411764705882353,C.q)
D.blB=x([D.ago,C.mH],y.W)
D.atB=new B.dS(C.ke,C.mb,C.b9,D.blB,null,null)
D.bjG=x(["ar_letters_see","ar_letters_name","ar_letters_write"],y.s)
D.io=new A.LU(2,"realActivity")
D.bxl=new A.iy(D.io,"picture_book")
D.Q1=x([D.bxl],y.p)
D.b8r=x(["letter_fishing","trace_letters","listen_letter"],y.s)
D.bxk=new A.iy(D.io,"letter_tray")
D.bxm=new A.iy(D.io,"play_dough")
D.aSh=x([D.bxk,D.bxm],y.p)
D.ase=new A.vd("letters",D.bjG,D.Q1,D.b8r,D.aSh)
D.bh8=x(["math_count_10","math_compare","math_dots_order"],y.s)
D.Bt=new A.LU(0,"story")
D.bxi=new A.iy(D.Bt,"three_apples")
D.Xb=new A.iy(D.io,"count_toys")
D.be0=x([D.bxi,D.Xb],y.p)
D.bl2=x(["numerals","compare","connect_four"],y.s)
D.lD=new A.LU(3,"everyday")
D.bxq=new A.iy(D.lD,"count_steps")
D.bf_=x([D.bxq,D.Xb],y.p)
D.as9=new A.vd("numbers",D.bh8,D.be0,D.bl2,D.bf_)
D.bf0=x(["sci_animals_home","sci_animals_food","ar_words_first"],y.s)
D.bxh=new A.iy(D.Bt,"bunny_garden")
D.bxg=new A.iy(D.Bt,"bee_flower")
D.bxs=new A.iy(D.lD,"look_sky")
D.bgm=x([D.bxh,D.bxg,D.bxs],y.p)
D.bgP=x(["animal_habitats","feed_animal","listen_picture"],y.s)
D.bxr=new A.iy(D.lD,"feed_pet")
D.bxv=new A.iy(D.lD,"water_plant")
D.blM=x([D.bxr,D.bxv],y.p)
D.asa=new A.vd("animals",D.bf0,D.bgm,D.bgP,D.blM)
D.bls=x(["logic_planning","life_routine","pos_words"],y.s)
D.bEI=new A.LU(1,"branching")
D.bxj=new A.iy(D.bEI,"boat")
D.Xc=new A.iy(D.io,"day_routine")
D.bh7=x([D.bxj,D.Xc],y.p)
D.bkJ=x(["maze","treasure_hunt","next_in_day"],y.s)
D.bxu=new A.iy(D.lD,"toys_basket")
D.bcR=x([D.Xc,D.bxu],y.p)
D.asc=new A.vd("thinking",D.bls,D.bh7,D.bkJ,D.bcR)
D.bdz=x(["ar_words_first","ar_words_listen","ar_letters_name"],y.s)
D.bxp=new A.iy(D.io,"sound_box")
D.bff=x([D.bxp],y.p)
D.bjs=x(["listen_picture","listen_word","listen_letter"],y.s)
D.asd=new A.vd("listening",D.bdz,D.bff,D.bjs,D.Q1)
D.bme=x(["shape_names","col_more","shape_size"],y.s)
D.bxn=new A.iy(D.io,"round3")
D.bfe=x([D.bxn],y.p)
D.biE=x(["shape_finder","connect_dots","jigsaw","big_small"],y.s)
D.bxt=new A.iy(D.lD,"shop_colours")
D.bxo=new A.iy(D.io,"sort_color")
D.bly=x([D.bxt,D.bxo],y.p)
D.asb=new A.vd("shapes",D.bme,D.bfe,D.biE,D.bly)
D.bce=x([D.ase,D.as9,D.asa,D.asc,D.asd,D.asb],B.a4("x<vd>"))
D.bei=x(["\ud83d\udc36","\ud83d\udc31","\ud83d\udc38","\ud83d\udc30","\ud83e\udd81","\ud83d\udc35"],y.s)
D.a8T=new B.ca(0,C.aT,C.eK,C.f2,6)
D.bfS=x([D.a8T],B.a4("x<ca>"))
D.c1j=new A.en("\ud83c\udf4e","\u062a\u0641\u0627\u062d\u0629")
D.c1m=new A.en("\ud83c\udf4c","\u0645\u0648\u0632")
D.c1x=new A.en("\ud83d\udc18","\u0641\u064a\u0644")
D.c1y=new A.en("\ud83c\udf33","\u0634\u062c\u0631\u0629")
D.c1u=new A.en("\ud83d\udc1f","\u0633\u0645\u0643\u0629")
D.c1z=new A.en("\ud83c\udfe0","\u0628\u064a\u062a")
D.c1o=new A.en("\ud83d\udc2a","\u062c\u0645\u0644")
D.c1t=new A.en("\ud83d\udc26","\u0639\u0635\u0641\u0648\u0631")
D.c1G=new A.en("\ud83d\udc31","\u0642\u0637\u0629")
D.b_f=x([D.c1j,D.c1m,D.c1x,D.c1y,D.c1u,D.c1z,D.c1o,D.c1t,D.c1G],y.w)
D.a4e=new A.Gv("ar","\u0639\u0631\u0628\u064a",!0,"\u0623\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a",D.b_f)
D.c1q=new A.en("\ud83c\udf4e","Apple")
D.c1A=new A.en("\ud83d\udc31","Cat")
D.c1p=new A.en("\ud83d\udc36","Dog")
D.c1N=new A.en("\ud83d\udc1f","Fish")
D.c1v=new A.en("\ud83c\udf1e","Sun")
D.c1s=new A.en("\ud83d\udc18","Elephant")
D.c1K=new A.en("\ud83c\udf4c","Banana")
D.c1C=new A.en("\ud83c\udfe0","House")
D.atK=x([D.c1q,D.c1A,D.c1p,D.c1N,D.c1v,D.c1s,D.c1K,D.c1C],y.w)
D.c0a=new A.Gv("en","English",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.atK)
D.c1I=new A.en("\ud83c\udf4e","Apfel")
D.c1B=new A.en("\ud83d\udc31","Katze")
D.c1n=new A.en("\ud83d\udc36","Hund")
D.c1w=new A.en("\ud83d\udc1f","Fisch")
D.c1i=new A.en("\ud83c\udf1e","Sonne")
D.c1k=new A.en("\ud83c\udf33","Baum")
D.c1D=new A.en("\ud83c\udfe0","Haus")
D.c1E=new A.en("\ud83d\udc18","Elefant")
D.aML=x([D.c1I,D.c1B,D.c1n,D.c1w,D.c1i,D.c1k,D.c1D,D.c1E],y.w)
D.c0b=new A.Gv("de","Deutsch",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.aML)
D.c1l=new A.en("\ud83c\udf4e","Pomme")
D.c1h=new A.en("\ud83d\udc31","Chat")
D.c1J=new A.en("\ud83d\udc36","Chien")
D.c1F=new A.en("\ud83d\udc1f","Poisson")
D.c1H=new A.en("\ud83c\udf1e","Soleil")
D.c1r=new A.en("\ud83c\udf33","Arbre")
D.c1M=new A.en("\ud83c\udfe0","Maison")
D.c1L=new A.en("\ud83c\udf4c","Banane")
D.bmN=x([D.c1l,D.c1h,D.c1J,D.c1F,D.c1H,D.c1r,D.c1M,D.c1L],y.w)
D.c0c=new A.Gv("fr","Fran\xe7ais",!1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",D.bmN)
D.blY=x([D.a4e,D.c0a,D.c0b,D.c0c],B.a4("x<Gv>"))
D.bqO=new B.rX(null)
D.bxb=new A.vv(0,"discover")
D.bxc=new A.vv(1,"learn")
D.bxd=new A.vv(2,"play")
D.bxe=new A.vv(3,"apply")
D.bxf=new A.vv(4,"celebrate")
D.br9={colors:0,shape_finder:1,jigsaw:2}
D.bFX=new B.fG(D.br9,3,y.M)
D.brg={letters:0,letter_fishing:1,trace_letters:2,word_book:3,listen_letter:4,listen_word:5}
D.bFZ=new B.fG(D.brg,6,y.M)
D.brm={animal:0,animal_habitats:1,feed_animal:2,listen_picture:3,balloons:4}
D.bG_=new B.fG(D.brm,5,y.M)
D.brF={balloons:0,animal:1,colors:2,letters:3,memory:4,math:5,snakes_ladders:6,jigsaw:7,maze:8,treasure_hunt:9,connect_dots:10,animal_habitats:11,match_pictures:12,letter_fishing:13,connect_four:14,numerals:15,trace_letters:16,word_book:17,listen_picture:18,listen_word:19,listen_letter:20,odd_one_out:21,pattern:22,compare:23,sort_groups:24,feed_animal:25,big_small:26,next_in_day:27,shape_finder:28,where_ball:29,drawing:30,stories:31,adventures:32,feelings:33}
D.bG0=new B.fG(D.brF,34,y.M)
D.brp={drawing:0,stories:1,adventures:2,feelings:3}
D.bG4=new B.fG(D.brp,4,y.M)
D.brC={memory:0,match_pictures:1,odd_one_out:2}
D.bG5=new B.fG(D.brC,3,y.M)
D.brA={math:0,numerals:1,compare:2,connect_dots:3,big_small:4}
D.bG8=new B.fG(D.brA,5,y.M)
D.brG={maze:0,sort_groups:1,treasure_hunt:2,next_in_day:3,snakes_ladders:4,connect_four:5,where_ball:6,pattern:7}
D.bGh=new B.fG(D.brG,8,y.M)
D.jO=new A.qr(0,"arabic")
D.bJn=new A.qr(1,"english")
D.hC=new A.qr(2,"maths")
D.Cn=new A.qr(3,"science")
D.Co=new A.qr(4,"everyday")
D.jP=new A.qr(5,"logic")
D.bJo=new A.qr(6,"feelings")
D.bJp=new A.qr(7,"creativity")
D.bJq=new A.qr(8,"stories")
D.bKU=new B.C(!0,C.t,null,null,null,null,48,C.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bN6=new B.C(!0,C.t,null,null,null,null,52,C.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNp=new B.C(!0,null,null,null,null,null,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOh=new B.C(!0,C.P,null,null,null,null,15,C.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOl=new B.C(!0,null,null,null,null,null,40,C.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQ4=new B.C(!0,null,null,null,null,null,56,C.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bR9=new B.j_("\ud83c\udf4e",null,C.ow,null,null,null,null,null,null,null,null)
D.bTF=new B.O("adventure_progress",y.O)
D.bTG=new B.O("adventure_theme",y.O)
D.bVk=new B.O("learn_shelves",y.O)
D.bVl=new B.O("learning_back",y.O)
D.bVm=new B.O("learning_page",y.O)
D.bVn=new B.O("learning_path",y.O)
D.bZp=new A.FS(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cJ5","che",()=>{var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="artwork for the library words (emoji today)",b2="approved word recordings (device voice today)",b3="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u0644\u0639\u0628\u0629",b4="Five rounds of the game",b5="approved letter-name recordings",b6="approved colour-name recordings",b7="\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a",b8="Five rounds",b9="\u0623\u064a\u0651 \u0634\u0643\u0644 \u0644\u0647 \u062b\u0644\u0627\u062b \u0632\u0648\u0627\u064a\u0627\u061f",c0="Which shape has three corners?",c1="\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0644\u0639\u0628\u0629",c2="Finish the game",c3="\u0644\u0627 \u062a\u0648\u062c\u062f \u0644\u0639\u0628\u0629 \u0628\u0639\u062f: \u0645\u062e\u0637\u0651\u0637",c4="No game yet: planned",c5="\u0645\u0627\u0630\u0627 \u0646\u0641\u0639\u0644 \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c6="What do we do next?",c7="\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0623\u062a\u064a \u0628\u0639\u062f \u0630\u0644\u0643\u061f",c8="What comes next?",c9=y.s,d0=B.a(["word_book"],c9),d1=B.a([b1],c9),d2=B.a([b2],c9)
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
s=A.fg("en_words_first",D.bJn,2,6,"\u0623\u0633\u0645\u0639 \u0643\u0644\u0645\u0627\u062a \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0633\u064a\u0637\u0629","I hear simple English words","\u0623\u0641\u062a\u062d \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0643\u062a\u0627\u0628 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629","Open the book words in English",C.L,C.L,B.a(["approved English recordings"],c9),"\u0641\u062a\u062d \u062e\u0645\u0633 \u0643\u0644\u0645\u0627\u062a","Open five words",v,C.L,"\u0627\u0641\u062a\u062d \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0627\u0633\u0645\u0639\u0647\u0627 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.","Open the word and hear it in English.",s,C.L)
v=B.a(["colors"],c9)
q=B.a(["colors"],c9)
p=B.a(["color_red","color_blue","color_yellow","color_green"],c9)
o=B.a([b6],c9)
p=A.fg("col_names",D.hC,2,4,"\u0623\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","I learn the colours","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628","Pick the asked colour",B.a(["shop_colours","sort_color"],c9),C.L,o,"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a \u0641\u064a \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","Five rounds of the colour game",v,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u064a \u062a\u0633\u0645\u0639\u0647.","Pick the colour you hear.",q,p)
q=B.a(["col_names"],c9)
v=B.a(["shape_finder"],c9)
o=B.a(["shapes","colors"],c9)
n=B.a(["color_orange","color_purple","color_pink","color_brown","color_black","color_white"],c9)
n=A.fg("col_more",D.hC,3,6,"\u0623\u0644\u0648\u0627\u0646 \u0623\u0643\u062b\u0631 \u0648\u0623\u0633\u0645\u0627\u0624\u0647\u0627","More colours and their names","\u0623\u062c\u062f \u0627\u0644\u0644\u0648\u0646 \u0645\u0639 \u0627\u0644\u0634\u0643\u0644","Find the colour with the shape",C.L,B.a(["picture cards for the six extra colours"],c9),B.a([b6],c9),"\u062e\u0645\u0633 \u062c\u0648\u0644\u0627\u062a (\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0645\u0639\u064b\u0627)","Five rounds (shapes and colours together)",v,q,"\u0623\u064a\u0646 \u0627\u0644\u0645\u062b\u0644\u062b \u0627\u0644\u0623\u062d\u0645\u0631\u061f","Where is the red triangle?",o,n)
o=B.a(["shape_finder","connect_dots"],c9)
q=B.a(["shapes"],c9)
v=B.a(["shape_circle","shape_square","shape_triangle","shape_rectangle","shape_star","shape_heart","shape_diamond"],c9)
m=B.a(["approved shape-name recordings"],c9)
v=A.fg("shape_names",D.hC,2,6,"\u0623\u0639\u0631\u0641 \u0627\u0644\u0623\u0634\u0643\u0627\u0644","I know the shapes","\u0623\u062c\u062f \u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0648\u0627\u0644\u0645\u0631\u0628\u0639 \u0648\u0627\u0644\u0645\u062b\u0644\u062b","Find the circle, square and triangle",B.a(["round3"],c9),C.L,m,b7,b8,o,C.L,"\u0623\u064a\u0646 \u0627\u0644\u062f\u0627\u0626\u0631\u0629\u061f","Where is the circle?",q,v)
q=B.a(["shape_names","math_count_10"],c9)
q=A.fg("shape_corners",D.hC,5,6,"\u0623\u0639\u062f\u0651 \u0632\u0648\u0627\u064a\u0627 \u0627\u0644\u0634\u0643\u0644","I count the corners of a shape",b9,c0,C.L,C.L,C.L,b7,b8,B.a(["shape_finder"],c9),q,b9,c0,B.a(["shapes"],c9),C.L)
o=B.a(["big_small"],c9)
m=B.a(["shapes"],c9)
m=A.fg("shape_size",D.hC,2,6,"\u0623\u0645\u064a\u0651\u0632 \u0627\u0644\u0643\u0628\u064a\u0631 \u0645\u0646 \u0627\u0644\u0635\u063a\u064a\u0631","I tell big from small","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0623\u0643\u0628\u0631 \u0623\u0648 \u0627\u0644\u0623\u0635\u063a\u0631","Pick the bigger or the smaller",C.L,B.a(["real artwork pairs (emoji today)"],c9),C.L,b7,b8,o,C.L,"\u0623\u064a\u0647\u0645\u0627 \u0627\u0644\u0643\u0628\u064a\u0631\u061f","Which one is big?",m,C.L)
o=B.a(["numerals","math"],c9)
l=B.a(["counting"],c9)
k=B.a(["num_1","num_2","num_3","num_4","num_5","num_6","num_7","num_8","num_9","num_10"],c9)
j=B.a(["approved number recordings"],c9)
k=A.fg("math_count_10",D.hC,3,6,"\u0623\u0639\u062f\u0651 \u062d\u062a\u0649 \u0661\u0660","I count to 10","\u0623\u062e\u062a\u0627\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0635\u062d\u064a\u062d","Pick the right numeral",B.a(["count_toys","count_steps"],c9),C.L,j,"\u0625\u0646\u0647\u0627\u0621 \u0644\u0639\u0628\u0629 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","Finish the numerals game",o,C.L,"\u0627\u062e\u062a\u0631 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.","Pick the matching numeral.",l,k)
l=A.fg("math_dots_order",D.hC,3,6,"\u0623\u0631\u062a\u0651\u0628 \u0627\u0644\u0623\u0631\u0642\u0627\u0645","I put numbers in order","\u0623\u0648\u0635\u0651\u0644 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628","Join the dots in order",C.L,C.L,C.L,"\u0631\u0633\u0645 \u062b\u0644\u0627\u062b \u0635\u0648\u0631","Draw three pictures",B.a(["connect_dots"],c9),C.L,"\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628: \u0661\u060c \u0662\u060c \u0663...","Tap the dots in order: 1, 2, 3...",B.a(["counting"],c9),C.L)
o=B.a(["math_count_10"],c9)
o=A.fg("math_compare",D.hC,3,6,"\u0623\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0627\u0644\u0643\u0645\u0651\u064a\u0627\u062a","I compare quantities","\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631 \u0623\u0648 \u0623\u0642\u0644","Which group has more or fewer",C.L,C.L,C.L,b7,b8,B.a(["compare"],c9),o,"\u0623\u064a \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u064a\u0647\u0627 \u0623\u0643\u062b\u0631\u061f","Which group has more?",B.a(["counting"],c9),C.L)
j=B.a(["math_count_10"],c9)
j=A.fg("math_board",D.hC,4,6,"\u0623\u0639\u062f\u0651 \u0648\u0623\u0646\u062a\u0638\u0631 \u062f\u0648\u0631\u064a","I count and wait my turn","\u0623\u062a\u062d\u0631\u0643 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u0644\u0639\u0628","Move along a game board",C.L,C.L,C.L,c1,c2,B.a(["snakes_ladders"],c9),j,"\u0627\u0631\u0645\u0650 \u0627\u0644\u0646\u0631\u062f \u0648\u062a\u062d\u0631\u0651\u0643 \u0628\u0639\u062f\u062f \u0627\u0644\u0646\u0642\u0627\u0637.","Roll the dice and move that many.",C.L,C.L)
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
a7=A.fg("emo_feelings",D.bJo,3,6,"\u0623\u0633\u0645\u0651\u064a \u0634\u0639\u0648\u0631\u064a \u0648\u0623\u062a\u0635\u0631\u0641 \u0628\u0644\u0637\u0641","I name my feeling and act kindly","\u0645\u0648\u0627\u0642\u0641 \u0642\u0635\u064a\u0631\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0627\u0639\u0631","Short feelings scenarios",B.a(["three_good","thank_card"],c9),C.L,a8,"\u0625\u0646\u0647\u0627\u0621 \u0645\u0633\u062a\u0648\u0649","Finish a level",C.L,C.L,"\u0643\u064a\u0641 \u064a\u0634\u0639\u0631 \u0647\u0630\u0627 \u0627\u0644\u0637\u0641\u0644\u061f","How does this child feel?",a7,C.L)
a8=A.fg("art_free",D.bJp,2,6,"\u0623\u0631\u0633\u0645 \u0648\u0623\u0639\u0628\u0651\u0631","I draw and express myself","\u0623\u0631\u0633\u0645 \u062b\u0645 \u0623\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Draw then press \u201cdone\u201d",B.a(["play_dough"],c9),C.L,C.L,"\u0636\u063a\u0637 \xab\u062e\u0644\u0635\u062a\xbb","Pressing \u201cdone\u201d",C.L,C.L,"\u0627\u0631\u0633\u0645 \u0645\u0627 \u062a\u062d\u0628.","Draw what you like.",C.L,C.L)
a9=B.a(["story"],c9)
b0=B.a(["recorded narration (device voice today)"],c9)
return B.a([d0,w,d1,u,d2,t,r,s,p,n,v,q,m,k,l,o,j,g,h,e,f,i,d,a1,a0,a2,a3,a5,a4,a6,a7,a8,A.fg("story_listen",D.bJq,1,6,"\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629 \u0642\u0635\u064a\u0631\u0629","I listen to a short story","\u0623\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0642\u0635\u0629","Listen to a story",C.L,B.a(["only 2 stories fit ages 1\u20132"],c9),b0,"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0642\u0635\u0629 (\u0627\u0633\u062a\u0645\u0627\u0639 \u0641\u0642\u0637\u060c \u0644\u0627 \u064a\u064f\u0639\u062f\u0651 \u0625\u062a\u0642\u0627\u0646\u064b\u0627)","Finishing a story (listening only, never counted as mastery)",C.L,C.L,"\u0647\u064a\u0627 \u0646\u0633\u0645\u0639 \u0642\u0635\u0629.","Let's hear a story.",a9,C.L)],B.a4("x<IQ>"))})
x($,"cJl","chf",()=>B.a([A.D4("all","\u2728",new A.bSN(),C.ex),A.D4("brain","\ud83e\udde0",new A.bSO(),D.bGh),A.D4("letters","\ud83d\udd24",new A.bSP(),D.bFZ),A.D4("numbers","\ud83d\udd22",new A.bSQ(),D.bG8),A.D4("shapes","\ud83c\udfa8",new A.bSR(),D.bFX),A.D4("animals","\ud83e\udd81",new A.bSS(),D.bG_),A.D4("observe","\ud83e\udde9",new A.bST(),D.bG5),A.D4("create","\ud83d\udd8d\ufe0f",new A.bSU(),D.bG4)],y.j))})()};
(a=>{a["7+5798zMm/Pt9ojqbKdAbRNr2HY="]=a.current})($__dart_deferred_initializers__);