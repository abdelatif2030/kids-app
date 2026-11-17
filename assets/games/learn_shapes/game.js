(()=>{var nl="170";var Vh=0,kl=1,Gh=2;var Jc=1,il=2,Sn=3,Yn=0,Re=1,Be=2,Wn=0,ki=1,Bl=2,zl=3,Hl=4,Wh=5,ri=100,Xh=101,qh=102,Yh=103,Zh=104,$h=200,Jh=201,Kh=202,jh=203,Ua=204,Na=205,Qh=206,td=207,ed=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,Fa=0,Oa=1,ka=2,Vi=3,Ba=4,za=5,Ha=6,Va=7,Kc=0,ld=1,cd=2,Xn=0,hd=1,dd=2,ud=3,fd=4,pd=5,gd=6,sl=7;var jc=300,Gi=301,Wi=302,Ga=303,Wa=304,Br=306,Xi=1e3,li=1001,Xa=1002,an=1003,md=1004;var Us=1005;var fn=1006,ea=1007;var Tn=1008;var Dn=1009,Qc=1010,th=1011,ms=1012,rl=1013,ci=1014,Rn=1015,Rs=1016,al=1017,ol=1018,qi=1020,eh=35902,nh=1021,ih=1022,rn=1023,sh=1024,rh=1025,Bi=1026,Yi=1027,ah=1028,ll=1029,oh=1030,cl=1031;var hl=1033,rr=33776,ar=33777,or=33778,lr=33779,qa=35840,Ya=35841,Za=35842,$a=35843,Ja=36196,Ka=37492,ja=37496,Qa=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,cr=36492,po=36494,go=36495,lh=36283,mo=36284,_o=36285,Ao=36286;var hr=2300,xo=2301,na=2302,Vl=2400,Gl=2401,Wl=2402;var _d=3200,Ad=3201;var ch=0,xd=1,Gn="",ve="srgb",Qi="srgb-linear",zr="linear",re="srgb";var vi=7680;var Xl=519,yd=512,vd=513,Cd=514,hh=515,Id=516,Md=517,wd=518,bd=519,ql=35044;var Yl="300 es",Pn=2e3,dr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=1234567,ds=Math.PI/180,_s=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function Sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ed(i,t,e){return i!==t?(e-i)/(t-i):0}function us(i,t,e){return(1-e)*i+e*t}function Td(i,t,e,n){return us(i,t,1-Math.exp(-e*n))}function Rd(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ud(i,t){return i+Math.random()*(t-i)}function Nd(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Zl=i);let t=Zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*ds}function kd(i){return i*_s}function Bd(i){return(i&i-1)===0&&i!==0}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dh={DEG2RAD:ds,RAD2DEG:_s,generateUUID:mi,clamp:Te,euclideanModulo:dl,mapLinear:Sd,inverseLerp:Ed,lerp:us,damp:Td,pingpong:Rd,smoothstep:Pd,smootherstep:Ld,randInt:Dd,randFloat:Ud,randFloatSpread:Nd,seededRandom:Fd,degToRad:Od,radToDeg:kd,isPowerOfTwo:Bd,ceilPowerOfTwo:zd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Vd,normalize:Oe,denormalize:Ni},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],y=s[0],g=s[3],f=s[6],M=s[1],v=s[4],_=s[7],L=s[2],S=s[5],T=s[8];return r[0]=a*y+o*M+l*L,r[3]=a*g+o*v+l*S,r[6]=a*f+o*_+l*T,r[1]=c*y+h*M+u*L,r[4]=c*g+h*v+u*S,r[7]=c*f+h*_+u*T,r[2]=d*y+p*M+m*L,r[5]=d*g+p*v+m*S,r[8]=d*f+p*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ia=new Gt;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){let i=As("canvas");return i.style.display="block",i}var $l={};function cs(i){i in $l||($l[i]=!0,console.warn(i))}function Wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jl=[.64,.33,.3,.6,.15,.06],Kl=[.2126,.7152,.0722],jl=[.3127,.329],Ql=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Qi]:{primaries:Jl,whitePoint:jl,transfer:zr,toXYZ:Ql,fromXYZ:tc,luminanceCoefficients:Kl,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:Jl,whitePoint:jl,transfer:re,toXYZ:Ql,fromXYZ:tc,luminanceCoefficients:Kl,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var Ci,yo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=As("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=As("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yd=0,ur=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sa(s[a].image)):r.push(sa(s[a]))}else r=sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zd=0,We=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=li,s=li,r=fn,a=Tn,o=rn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=mi(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=jc;We.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,L=(f+1)/2,S=(h+d)/4,T=(u+y)/4,P=(m+g)/4;return v>_&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ur(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends vo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*y,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let L=Math.sqrt(v),S=Math.atan2(L,f*M);g=Math.sin(g*S)/L,o=Math.sin(o*S)/L}let _=o*M;if(l=l*g+d*_,c=c*g+p*_,h=h*g+m*_,u=u*g+y*_,g===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-o*p,t[e+2]=c*m+h*p+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new E,ec=new $n,hi=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Fs.subVectors(this.max,ss),Ii.subVectors(t.a,ss),Mi.subVectors(t.b,ss),wi.subVectors(t.c,ss),On.subVectors(Mi,Ii),kn.subVectors(wi,Mi),jn.subVectors(Ii,wi);let e=[0,-On.z,On.y,0,-kn.z,kn.y,0,-jn.z,jn.y,On.z,0,-On.x,kn.z,0,-kn.x,jn.z,0,-jn.x,-On.y,On.x,0,-kn.y,kn.x,0,-jn.y,jn.x,0];return!aa(e,Ii,Mi,wi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Ii,Mi,wi,Fs))?!1:(Os.crossVectors(On,kn),e=[Os.x,Os.y,Os.z],aa(e,Ii,Mi,wi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new E,new E,new E,new E,new E,new E,new E,new E],en=new E,Ns=new hi,Ii=new E,Mi=new E,wi=new E,On=new E,kn=new E,jn=new E,ss=new E,Fs=new E,Os=new E,Qn=new E;function aa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);let o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $d=new hi,rs=new E,oa=new E,xs=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(oa)),this.expandByPoint(rs.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new E,la=new E,ks=new E,Bn=new E,ca=new E,Bs=new E,ha=new E,pr=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(la);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=Bn.dot(this.direction),l=-Bn.dot(ks),c=Bn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(ks,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),Bs.subVectors(n,t),ha.crossVectors(ca,Bs);let a=this.direction.dot(ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);let l=o*this.direction.dot(Bs.crossVectors(Bn,Bs));if(l<0)return null;let c=o*this.direction.dot(ca.cross(Bn));if(c<0||l+c>a)return null;let h=-o*Bn.dot(ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,m,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,y,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,y,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,m=c*h,y=c*u;e[0]=d+y*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,m=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,y=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,p=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jd,t,Kd)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),zn.crossVectors(n,qe),zn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),zn.crossVectors(n,qe)),zn.normalize(),zs.crossVectors(qe,zn),s[0]=zn.x,s[4]=zs.x,s[8]=qe.x,s[1]=zn.y,s[5]=zs.y,s[9]=qe.y,s[2]=zn.z,s[6]=zs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],y=n[6],g=n[10],f=n[14],M=n[3],v=n[7],_=n[11],L=n[15],S=s[0],T=s[4],P=s[8],I=s[12],x=s[1],R=s[5],z=s[9],O=s[13],H=s[2],J=s[6],V=s[10],it=s[14],G=s[3],ht=s[7],At=s[11],Mt=s[15];return r[0]=a*S+o*x+l*H+c*G,r[4]=a*T+o*R+l*J+c*ht,r[8]=a*P+o*z+l*V+c*At,r[12]=a*I+o*O+l*it+c*Mt,r[1]=h*S+u*x+d*H+p*G,r[5]=h*T+u*R+d*J+p*ht,r[9]=h*P+u*z+d*V+p*At,r[13]=h*I+u*O+d*it+p*Mt,r[2]=m*S+y*x+g*H+f*G,r[6]=m*T+y*R+g*J+f*ht,r[10]=m*P+y*z+g*V+f*At,r[14]=m*I+y*O+g*it+f*Mt,r[3]=M*S+v*x+_*H+L*G,r[7]=M*T+v*R+_*J+L*ht,r[11]=M*P+v*z+_*V+L*At,r[15]=M*I+v*O+_*it+L*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],y=t[7],g=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+y*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],y=t[13],g=t[14],f=t[15],M=u*g*c-y*d*c+y*l*p-o*g*p-u*l*f+o*d*f,v=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,_=h*y*c-m*u*c+m*o*p-a*y*p-h*o*f+a*u*f,L=m*u*l-h*y*l-m*o*d+a*y*d+h*o*g-a*u*g,S=e*M+n*v+s*_+r*L;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=M*T,t[1]=(y*d*r-u*g*r-y*s*p+n*g*p+u*s*f-n*d*f)*T,t[2]=(o*g*r-y*l*r+y*s*c-n*g*c-o*s*f+n*l*f)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*T,t[4]=v*T,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*T,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*f-e*l*f)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*T,t[8]=_*T,t[9]=(m*u*r-h*y*r-m*n*p+e*y*p+h*n*f-e*u*f)*T,t[10]=(a*y*r-m*o*r+m*n*c-e*y*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=L*T,t[13]=(h*y*s-m*u*s+m*n*d-e*y*d-h*n*g+e*u*g)*T,t[14]=(m*o*s-a*y*s-m*n*l+e*y*l+a*n*g-e*o*g)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,y=a*h,g=a*u,f=o*u,M=l*c,v=l*h,_=l*u,L=n.x,S=n.y,T=n.z;return s[0]=(1-(y+f))*L,s[1]=(p+_)*L,s[2]=(m-v)*L,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(d+f))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+v)*T,s[9]=(g-M)*T,s[10]=(1-(d+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=bi.set(s[0],s[1],s[2]).length(),a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===Pn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===dr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,m,y;if(o===Pn)m=(a+r)*u,y=-2*u;else if(o===dr)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},bi=new E,nn=new ge,Jd=new E(0,0,0),Kd=new E(1,1,1),zn=new E,zs=new E,qe=new E,nc=new ge,ic=new $n,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jd=0,sc=new E,Si=new $n,Mn=new ge,Hs=new E,as=new E,Qd=new E,tu=new $n,rc=new E(1,0,0),ac=new E(0,1,0),oc=new E(0,0,1),lc={type:"added"},eu={type:"removed"},Ei={type:"childadded",child:null},da={type:"childremoved",child:null},ze=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new E,e=new pn,n=new $n,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Gt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(as,Hs,this.up):Mn.lookAt(Hs,as,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Mn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eu),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new E(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new E,wn=new E,ua=new E,bn=new E,Ti=new E,Ri=new E,cc=new E,fa=new E,pa=new E,ga=new E,ma=new ae,_a=new ae,Aa=new ae,ai=class i{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),wn.subVectors(n,e),ua.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(wn),l=sn.dot(ua),c=wn.dot(wn),h=wn.dot(ua),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ma.setScalar(0),_a.setScalar(0),Aa.setScalar(0),ma.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(Aa,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),wn.subVectors(t,e),sn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),sn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ti.subVectors(s,n),Ri.subVectors(r,n),fa.subVectors(t,n);let l=Ti.dot(fa),c=Ri.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,s);let h=Ti.dot(pa),u=Ri.dot(pa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ti,a);ga.subVectors(t,r);let p=Ti.dot(ga),m=Ri.dot(ga);if(m>=0&&p<=m)return e.copy(r);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ri,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return cc.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(cc,o);let f=1/(g+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(Ti,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=dl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xa(a,r,t+1/3),this.g=xa(a,r,t),this.b=xa(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Kt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Te(Ue.r*255,0,255))*65536+Math.round(Te(Ue.g*255,0,255))*256+Math.round(Te(Ue.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ve){Kt.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Vs);let n=us(Hn.h,Vs.h,e),s=us(Hn.s,Vs.s,e),r=us(Hn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Yt;Yt.NAMES=fh;var nu=0,di=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=mi(),this.name="",this.blending=ki,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ie=class extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new E,Gs=new ot,Ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var gr=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},iu=0,Je=new ge,ya=new ze,Pi=new E,Ye=new hi,os=new hi,Se=new E,He=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?mr:gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ye.min,os.min),Ye.expandByPoint(Se),Se.addVectors(Ye.max,os.max),Ye.expandByPoint(Se)):(Ye.expandByPoint(os.min),Ye.expandByPoint(os.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(t,c),Se.add(Pi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new E,l[P]=new E;let c=new E,h=new E,u=new E,d=new ot,p=new ot,m=new ot,y=new E,g=new E;function f(P,I,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[P].add(y),o[I].add(y),o[x].add(y),l[P].add(g),l[I].add(g),l[x].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,I=M.length;P<I;++P){let x=M[P],R=x.start,z=x.count;for(let O=R,H=R+z;O<H;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new E,_=new E,L=new E,S=new E;function T(P){L.fromBufferAttribute(s,P),S.copy(L);let I=o[P];v.copy(I),v.sub(L.multiplyScalar(L.dot(I))).normalize(),_.crossVectors(S,I);let R=_.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,I=M.length;P<I;++P){let x=M[P],R=x.start,z=x.count;for(let O=R,H=R+z;O<H;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hc=new ge,ti=new pr,Ws=new xs,dc=new E,Xs=new E,qs=new E,Ys=new E,va=new E,Zs=new E,uc=new E,$s=new E,ut=class extends ze{constructor(t=new He,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(va.fromBufferAttribute(u,t),a?Zs.addScaledVector(va,h):Zs.addScaledVector(va.sub(e),h))}e.add(Zs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Ws.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Ws,dc)===null||ti.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),ti.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,L=v;_<L;_+=3){let S=o.getX(_),T=o.getX(_+1),P=o.getX(_+2);s=Js(this,f,t,n,c,h,u,S,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let M=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);s=Js(this,a,t,n,c,h,u,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,L=v;_<L;_+=3){let S=_,T=_+1,P=_+2;s=Js(this,f,t,n,c,h,u,S,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let M=g,v=g+1,_=g+2;s=Js(this,a,t,n,c,h,u,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function su(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Yn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Js(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);let h=su(i,t,e,n,Xs,qs,Ys,uc);if(h){let u=new E;ai.getBarycoord(uc,Xs,qs,Ys,u),s&&(h.uv=ai.getInterpolatedAttribute(s,o,l,c,u,new ot)),r&&(h.uv1=ai.getInterpolatedAttribute(r,o,l,c,u,new ot)),a&&(h.normal=ai.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};ai.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}var se=class i extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function m(y,g,f,M,v,_,L,S,T,P,I){let x=_/T,R=L/P,z=_/2,O=L/2,H=S/2,J=T+1,V=P+1,it=0,G=0,ht=new E;for(let At=0;At<V;At++){let Mt=At*R-O;for(let zt=0;zt<J;zt++){let te=zt*x-z;ht[y]=te*M,ht[g]=Mt*v,ht[f]=H,c.push(ht.x,ht.y,ht.z),ht[y]=0,ht[g]=0,ht[f]=S>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(zt/T),u.push(1-At/P),it+=1}}for(let At=0;At<P;At++)for(let Mt=0;Mt<T;Mt++){let zt=d+Mt+J*At,te=d+Mt+J*(At+1),$=d+(Mt+1)+J*(At+1),rt=d+(Mt+1)+J*At;l.push(zt,te,rt),l.push(te,$,rt),G+=6}o.addGroup(p,G,I),p+=G,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function ru(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var au={clone:Zi,merge:ke},ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ou,this.fragmentShader=lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_r=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new E,fc=new ot,pc=new ot,Ne=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Di=1,Io=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Li,Di,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Li,Di,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Li,Di,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Li,Di,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Li,Di,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ar=class extends We{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mo=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new se(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Wn});r.uniforms.tEquirect.value=e;let a=new ut(s,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=fn),new Io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ca=new E,cu=new E,hu=new Gt,En=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ca.subVectors(n,e).cross(cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hu.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new xs,Ks=new E,vs=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],y=s[10],g=s[11],f=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-p,_-f).normalize(),n[1].setComponents(l+r,d+c,g+p,_+f).normalize(),n[2].setComponents(l+a,d+h,g+m,_+M).normalize(),n[3].setComponents(l-a,d-h,g-m,_-M).normalize(),n[4].setComponents(l-o,d-u,g-y,_-v).normalize(),e===Pn)n[5].setComponents(l+o,d+u,g+y,_+v).normalize();else if(e===dr)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ks.x=s.normal.x>0?t.max.x:t.min.x,Ks.y=s.normal.y>0?t.max.y:t.min.y,Ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function du(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],y=u[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var on=class i extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],m=[],y=[],g=[];for(let f=0;f<h;f++){let M=f*d-a;for(let v=0;v<c;v++){let _=v*u-r;m.push(_,-M,0),y.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,_=M+c*(f+1),L=M+1+c*(f+1),S=M+1+c*f;p.push(v,_,S),p.push(_,L,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,df=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:uu,alphahash_pars_fragment:fu,alphamap_fragment:pu,alphamap_pars_fragment:gu,alphatest_fragment:mu,alphatest_pars_fragment:_u,aomap_fragment:Au,aomap_pars_fragment:xu,batching_pars_vertex:yu,batching_vertex:vu,begin_vertex:Cu,beginnormal_vertex:Iu,bsdfs:Mu,iridescence_fragment:wu,bumpmap_pars_fragment:bu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Ru,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Uu,common:Nu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:ku,displacementmap_vertex:Bu,emissivemap_fragment:zu,emissivemap_pars_fragment:Hu,colorspace_fragment:Vu,colorspace_pars_fragment:Gu,envmap_fragment:Wu,envmap_common_pars_fragment:Xu,envmap_pars_fragment:qu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:rf,envmap_vertex:Zu,fog_vertex:$u,fog_pars_vertex:Ju,fog_fragment:Ku,fog_pars_fragment:ju,gradientmap_pars_fragment:Qu,lightmap_pars_fragment:tf,lights_lambert_fragment:ef,lights_lambert_pars_fragment:nf,lights_pars_begin:sf,lights_toon_fragment:af,lights_toon_pars_fragment:of,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:hf,lights_physical_pars_fragment:df,lights_fragment_begin:uf,lights_fragment_maps:ff,lights_fragment_end:pf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:Af,map_fragment:xf,map_pars_fragment:yf,map_particle_fragment:vf,map_particle_pars_fragment:Cf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Mf,morphinstance_vertex:wf,morphcolor_vertex:bf,morphnormal_vertex:Sf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Tf,normal_fragment_begin:Rf,normal_fragment_maps:Pf,normal_pars_fragment:Lf,normal_pars_vertex:Df,normal_vertex:Uf,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Bf,opaque_fragment:zf,packing:Hf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:Wf,dithering_pars_fragment:Xf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:$f,shadowmap_vertex:Jf,shadowmask_pars_fragment:Kf,skinbase_vertex:jf,skinning_pars_vertex:Qf,skinning_vertex:tp,skinnormal_vertex:ep,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:sp,tonemapping_pars_fragment:rp,transmission_fragment:ap,transmission_pars_fragment:op,uv_pars_fragment:lp,uv_pars_vertex:cp,uv_vertex:hp,worldpos_vertex:dp,background_vert:up,background_frag:fp,backgroundCube_vert:pp,backgroundCube_frag:gp,cube_vert:mp,cube_frag:_p,depth_vert:Ap,depth_frag:xp,distanceRGBA_vert:yp,distanceRGBA_frag:vp,equirect_vert:Cp,equirect_frag:Ip,linedashed_vert:Mp,linedashed_frag:wp,meshbasic_vert:bp,meshbasic_frag:Sp,meshlambert_vert:Ep,meshlambert_frag:Tp,meshmatcap_vert:Rp,meshmatcap_frag:Pp,meshnormal_vert:Lp,meshnormal_frag:Dp,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:kp,meshtoon_frag:Bp,points_vert:zp,points_frag:Hp,shadow_vert:Vp,shadow_frag:Gp,sprite_vert:Wp,sprite_frag:Xp},dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},un={basic:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ke([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ke([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ke([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:ke([dt.common,dt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:ke([dt.lights,dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};un.physical={uniforms:ke([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var js={r:0,b:0,g:0},ni=new pn,qp=new ge;function Yp(i,t,e,n,s,r,a){let o=new Yt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function y(M){let v=!1,_=m(M);_===null?f(o,l):_&&_.isColor&&(f(_,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===Br)?(h===void 0&&(h=new ut(new se(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(v.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(ni)),h.material.toneMapped=Kt.getTransfer(_.colorSpace)!==re,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ut(new on(2,2),new gn({name:"BackgroundMaterial",uniforms:Zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,v){M.getRGB(js,ph(i)),n.buffers.color.setClear(js.r,js.g,js.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:y,addToRenderList:g}}function Zp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,R,z,O,H){let J=!1,V=u(O,z,R);r!==V&&(r=V,c(r.object)),J=p(x,O,z,H),J&&m(x,O,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(x,R,z,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,z){let O=z.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let J=H[R.id];J===void 0&&(J={},H[R.id]=J);let V=J[O];return V===void 0&&(V=d(l()),J[O]=V),V}function d(x){let R=[],z=[],O=[];for(let H=0;H<e;H++)R[H]=0,z[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,R,z,O){let H=r.attributes,J=R.attributes,V=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let At=H[G],Mt=J[G];if(Mt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),At===void 0||At.attribute!==Mt||Mt&&At.data!==Mt.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function m(x,R,z,O){let H={},J=R.attributes,V=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let At=J[G];At===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(At=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(At=x.instanceColor));let Mt={};Mt.attribute=At,At&&At.data&&(Mt.data=At.data),H[G]=Mt,V++}r.attributes=H,r.attributesNum=V,r.index=O}function y(){let x=r.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function g(x){f(x,0)}function f(x,R){let z=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;z[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),H[x]!==R&&(i.vertexAttribDivisor(x,R),H[x]=R)}function M(){let x=r.newAttributes,R=r.enabledAttributes;for(let z=0,O=R.length;z<O;z++)R[z]!==x[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function v(x,R,z,O,H,J,V){V===!0?i.vertexAttribIPointer(x,R,z,H,J):i.vertexAttribPointer(x,R,z,O,H,J)}function _(x,R,z,O){y();let H=O.attributes,J=z.getAttributes(),V=R.defaultAttributeValues;for(let it in J){let G=J[it];if(G.location>=0){let ht=H[it];if(ht===void 0&&(it==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),it==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){let At=ht.normalized,Mt=ht.itemSize,zt=t.get(ht);if(zt===void 0)continue;let te=zt.buffer,$=zt.type,rt=zt.bytesPerElement,wt=$===i.INT||$===i.UNSIGNED_INT||ht.gpuType===rl;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Dt=lt.stride,kt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)f(G.location+Ft,lt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)g(G.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ft=0;Ft<G.locationSize;Ft++)v(G.location+Ft,Mt/G.locationSize,$,At,Dt*rt,(kt+Mt/G.locationSize*Ft)*rt,wt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)f(G.location+lt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<G.locationSize;lt++)g(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let lt=0;lt<G.locationSize;lt++)v(G.location+lt,Mt/G.locationSize,$,At,Mt*rt,Mt/G.locationSize*lt*rt,wt)}}else if(V!==void 0){let At=V[it];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(G.location,At);break;case 3:i.vertexAttrib3fv(G.location,At);break;case 4:i.vertexAttrib4fv(G.location,At);break;default:i.vertexAttrib1fv(G.location,At)}}}}M()}function L(){P();for(let x in n){let R=n[x];for(let z in R){let O=R[z];for(let H in O)h(O[H].object),delete O[H];delete R[z]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let z in R){let O=R[z];for(let H in O)h(O[H].object),delete O[H];delete R[z]}delete n[x.id]}function T(x){for(let R in n){let z=n[R];if(z[x.id]===void 0)continue;let O=z[x.id];for(let H in O)h(O[H].object),delete O[H];delete z[x.id]}}function P(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:I,dispose:L,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function $p(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=h[y]*d[y];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let P=T===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:L,maxSamples:S}}function Kp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new En,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,v=M*4,_=f.clippingState||null;l.value=_,_=h(m,d,v,p);for(let L=0;L!==v;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let f=p+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,_=p;v!==y;++v,_+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function jp(i){let t=new WeakMap;function e(a,o){return o===Ga?a.mapping=Gi:o===Wa&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ga||o===Wa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xr=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fi=4,gc=[.125,.215,.35,.446,.526,.582],oi=20,Ia=new xr,mc=new Yt,Ma=null,wa=0,ba=0,Sa=!1,si=(1+Math.sqrt(5))/2,Ui=1/si,_c=[new E(-si,Ui,0),new E(si,Ui,0),new E(-Ui,0,si),new E(Ui,0,si),new E(0,si,-Ui),new E(0,si,Ui),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],$i=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,wa,ba),this._renderer.xr.enabled=Sa,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Rs,format:rn,colorSpace:Qi,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=tg(r,t,e)}return s}_compileMaterial(t){let e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,s){let o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mc),h.toneMapping=Xn,h.autoClear=!1;let p=new Ie({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),m=new ut(new se,p),y=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,y=!0):(p.color.copy(mc),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;Qs(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_c[(s-r-1)%_c.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):oi;g>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${oi}`);let f=[],M=0;for(let T=0;T<oi;++T){let P=T/y,I=Math.exp(-P*P/2);f.push(I),T===0?M+=I:T<g&&(M+=2*I)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[s],L=3*_*(s>v-Fi?s-v+Fi:0),S=4*(this._cubeSize-_);Qs(e,L,S,3*_,2*_),l.setRenderTarget(e),l.render(u,Ia)}};function Qp(i){let t=[],e=[],n=[],s=i,r=i-Fi+1+gc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fi?l=gc[a-i+Fi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,y=3,g=2,f=1,M=new Float32Array(y*m*p),v=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,P=S>2?0:-1,I=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(I,y*m*S),v.set(d,g*m*S);let x=[S,S,S,S,S,S];_.set(x,f*m*S)}let L=new He;L.setAttribute("position",new Ke(M,y)),L.setAttribute("uv",new Ke(v,g)),L.setAttribute("faceIndex",new Ke(_,f)),t.push(L),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tg(i,t,e){let n=new Float32Array(oi),s=new E(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function xc(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function yc(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ga||l===Wa,h=l===Gi||l===Wi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new $i(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new $i(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ng(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)t.remove(y[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let y=p[m];for(let g=0,f=y.length;g<f;g++)t.update(y[g],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,m=u.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let v=0,_=M.length;v<_;v+=3){let L=M[v+0],S=M[v+1],T=M[v+2];d.push(L,S,S,T,T,L)}}else if(m!==void 0){let M=m.array;y=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let L=v+0,S=v+1,T=v+2;d.push(L,S,S,T,T,L)}}else return;let g=new(uh(d)?mr:gr)(d,1);g.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*y[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,t,e){let n=new WeakMap,s=new ae;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;p===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*L*4*u),T=new fr(S,_,L,u);T.type=Rn,T.needsUpdate=!0;let P=v*4;for(let x=0;x<u;x++){let R=g[x],z=f[x],O=M[x],H=_*L*4*x;for(let J=0;J<R.count;J++){let V=J*P;p===!0&&(s.fromBufferAttribute(R,J),S[H+V+0]=s.x,S[H+V+1]=s.y,S[H+V+2]=s.z,S[H+V+3]=0),m===!0&&(s.fromBufferAttribute(z,J),S[H+V+4]=s.x,S[H+V+5]=s.y,S[H+V+6]=s.z,S[H+V+7]=0),y===!0&&(s.fromBufferAttribute(O,J),S[H+V+8]=s.x,S[H+V+9]=s.y,S[H+V+10]=s.z,S[H+V+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ot(_,L)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function og(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var yr=class extends We{constructor(t,e,n,s,r,a,o,l,c,h=Bi){if(h!==Bi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=ci),n===void 0&&h===Yi&&(n=qi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},mh=new We,vc=new yr(1,1),_h=new fr,Ah=new Co,xh=new Ar,Cc=[],Ic=[],Mc=new Float32Array(16),wc=new Float32Array(9),bc=new Float32Array(4);function ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Me(e,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),we(e,n)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Me(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),we(e,n)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Me(e,n))return;Mc.set(n),i.uniformMatrix4fv(this.addr,!1,Mc),we(e,n)}}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=hh,r=vc):r=mh,e.setTexture2D(t||r,s)}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ah,s)}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xh,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_h,s)}function Sg(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return dg;case 35674:return ug;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return gg;case 35667:case 35671:return mg;case 35668:case 35672:return _g;case 35669:case 35673:return Ag;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return bg}}function Eg(i,t){i.uniform1fv(this.addr,t)}function Tg(i,t){let e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Rg(i,t){let e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){let e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){let e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dg(i,t){let e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ug(i,t){let e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function Fg(i,t){i.uniform2iv(this.addr,t)}function Og(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function Bg(i,t){i.uniform1uiv(this.addr,t)}function zg(i,t){i.uniform2uiv(this.addr,t)}function Hg(i,t){i.uniform3uiv(this.addr,t)}function Vg(i,t){i.uniform4uiv(this.addr,t)}function Gg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||mh,r[a])}function Wg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ah,r[a])}function Xg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xh,r[a])}function qg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_h,r[a])}function Yg(i){switch(i){case 5126:return Eg;case 35664:return Tg;case 35665:return Rg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return kg;case 5125:return Bg;case 36294:return zg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}},bo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}},So=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function Zg(i,t,e){let n=i.name,s=n.length;for(Ea.lastIndex=0;;){let r=Ea.exec(n),a=Ea.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sc(e,c===void 0?new wo(o,i,t):new bo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new So(o),Sc(e,u)),e=u}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ec(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $g=37297,Jg=0;function Kg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Tc=new Gt;function jg(i){Kt._getMatrix(Tc,Kt.workingColorSpace,i);let t=`mat3( ${Tc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kg(i.getShaderSource(t),a)}else return s}function Qg(i,t){let e=jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t0(i,t){let e;switch(t){case hd:e="Linear";break;case dd:e="Reinhard";break;case ud:e="Cineon";break;case fd:e="ACESFilmic";break;case gd:e="AgX";break;case sl:e="Neutral";break;case pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tr=new E;function e0(){Kt.getLuminanceCoefficients(tr);let i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function i0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function Pc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(r0,o0)}var a0=new Map;function o0(i,t){let e=Xt[t];if(e===void 0){let n=a0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}var l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(i){return i.replace(l0,c0)}function c0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function d0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function f0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:t="ENVMAP_BLENDING_MULTIPLY";break;case ld:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function p0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function g0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=h0(e),c=d0(e),h=u0(e),u=f0(e),d=p0(e),p=n0(e),m=i0(r),y=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(g=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=Eo(a),a=Pc(a,e),a=Lc(a,e),o=Eo(o),o=Pc(o,e),o=Lc(o,e),a=Dc(a),o=Dc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=M+g+a,_=M+f+o,L=Ec(s,s.VERTEX_SHADER,v),S=Ec(s,s.FRAGMENT_SHADER,_);s.attachShader(y,L),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(R){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(S).trim(),J=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,S);else{let it=Rc(s,L,"vertex"),G=Rc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+it+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||H==="")&&(V=!1);V&&(R.diagnostics={runnable:J,programLog:z,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(L),s.deleteShader(S),P=new Hi(s,y),I=s0(s,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,$g)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=S,this}var m0=0,To=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ro(t),e.set(t,n)),n}},Ro=class{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}};function _0(i,t,e,n,s,r,a){let o=new ys,l=new To,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(I){return c.add(I),I===0?"uv":`uv${I}`}function g(I,x,R,z,O){let H=z.fog,J=O.geometry,V=I.isMeshStandardMaterial?z.environment:null,it=(I.isMeshStandardMaterial?e:t).get(I.envMap||V),G=it&&it.mapping===Br?it.image.height:null,ht=m[I.type];I.precision!==null&&(p=s.getMaxPrecision(I.precision),p!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",p,"instead."));let At=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=At!==void 0?At.length:0,zt=0;J.morphAttributes.position!==void 0&&(zt=1),J.morphAttributes.normal!==void 0&&(zt=2),J.morphAttributes.color!==void 0&&(zt=3);let te,$,rt,wt;if(ht){let ie=un[ht];te=ie.vertexShader,$=ie.fragmentShader}else te=I.vertexShader,$=I.fragmentShader,l.update(I),rt=l.getVertexShaderID(I),wt=l.getFragmentShaderID(I);let lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),kt=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,Jt=!!I.map,j=!!I.matcap,st=!!it,b=!!I.aoMap,Pt=!!I.lightMap,tt=!!I.bumpMap,vt=!!I.normalMap,ct=!!I.displacementMap,Ut=!!I.emissiveMap,xt=!!I.metalnessMap,w=!!I.roughnessMap,A=I.anisotropy>0,F=I.clearcoat>0,Y=I.dispersion>0,Q=I.iridescence>0,Z=I.sheen>0,bt=I.transmission>0,ft=A&&!!I.anisotropyMap,yt=F&&!!I.clearcoatMap,qt=F&&!!I.clearcoatNormalMap,nt=F&&!!I.clearcoatRoughnessMap,Ct=Q&&!!I.iridescenceMap,Nt=Q&&!!I.iridescenceThicknessMap,Ot=Z&&!!I.sheenColorMap,It=Z&&!!I.sheenRoughnessMap,Zt=!!I.specularMap,Wt=!!I.specularColorMap,ce=!!I.specularIntensityMap,D=bt&&!!I.transmissionMap,pt=bt&&!!I.thicknessMap,W=!!I.gradientMap,K=!!I.alphaMap,_t=I.alphaTest>0,gt=!!I.alphaHash,Ht=!!I.extensions,_e=Xn;I.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Le={shaderID:ht,shaderType:I.type,shaderName:I.name,vertexShader:te,fragmentShader:$,defines:I.defines,customVertexShaderID:rt,customFragmentShaderID:wt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:kt,instancingColor:kt&&O.instanceColor!==null,instancingMorph:kt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Qi,alphaToCoverage:!!I.alphaToCoverage,map:Jt,matcap:j,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:Pt,bumpMap:tt,normalMap:vt,displacementMap:d&&ct,emissiveMap:Ut,normalMapObjectSpace:vt&&I.normalMapType===xd,normalMapTangentSpace:vt&&I.normalMapType===ch,metalnessMap:xt,roughnessMap:w,anisotropy:A,anisotropyMap:ft,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:qt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:Q,iridescenceMap:Ct,iridescenceThicknessMap:Nt,sheen:Z,sheenColorMap:Ot,sheenRoughnessMap:It,specularMap:Zt,specularColorMap:Wt,specularIntensityMap:ce,transmission:bt,transmissionMap:D,thicknessMap:pt,gradientMap:W,opaque:I.transparent===!1&&I.blending===ki&&I.alphaToCoverage===!1,alphaMap:K,alphaTest:_t,alphaHash:gt,combine:I.combine,mapUv:Jt&&y(I.map.channel),aoMapUv:b&&y(I.aoMap.channel),lightMapUv:Pt&&y(I.lightMap.channel),bumpMapUv:tt&&y(I.bumpMap.channel),normalMapUv:vt&&y(I.normalMap.channel),displacementMapUv:ct&&y(I.displacementMap.channel),emissiveMapUv:Ut&&y(I.emissiveMap.channel),metalnessMapUv:xt&&y(I.metalnessMap.channel),roughnessMapUv:w&&y(I.roughnessMap.channel),anisotropyMapUv:ft&&y(I.anisotropyMap.channel),clearcoatMapUv:yt&&y(I.clearcoatMap.channel),clearcoatNormalMapUv:qt&&y(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&y(I.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&y(I.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&y(I.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(I.sheenRoughnessMap.channel),specularMapUv:Zt&&y(I.specularMap.channel),specularColorMapUv:Wt&&y(I.specularColorMap.channel),specularIntensityMapUv:ce&&y(I.specularIntensityMap.channel),transmissionMapUv:D&&y(I.transmissionMap.channel),thicknessMapUv:pt&&y(I.thicknessMap.channel),alphaMapUv:K&&y(I.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(vt||A),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(Jt||K),fog:!!H,useFog:I.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:zt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Jt&&I.map.isVideoTexture===!0&&Kt.getTransfer(I.map.colorSpace)===re,decodeVideoTextureEmissive:Ut&&I.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(I.emissiveMap.colorSpace)===re,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Be,flipSided:I.side===Re,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ht&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&I.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function f(I){let x=[];if(I.shaderID?x.push(I.shaderID):(x.push(I.customVertexShaderID),x.push(I.customFragmentShaderID)),I.defines!==void 0)for(let R in I.defines)x.push(R),x.push(I.defines[R]);return I.isRawShaderMaterial===!1&&(M(x,I),v(x,I),x.push(i.outputColorSpace)),x.push(I.customProgramCacheKey),x.join()}function M(I,x){I.push(x.precision),I.push(x.outputColorSpace),I.push(x.envMapMode),I.push(x.envMapCubeUVHeight),I.push(x.mapUv),I.push(x.alphaMapUv),I.push(x.lightMapUv),I.push(x.aoMapUv),I.push(x.bumpMapUv),I.push(x.normalMapUv),I.push(x.displacementMapUv),I.push(x.emissiveMapUv),I.push(x.metalnessMapUv),I.push(x.roughnessMapUv),I.push(x.anisotropyMapUv),I.push(x.clearcoatMapUv),I.push(x.clearcoatNormalMapUv),I.push(x.clearcoatRoughnessMapUv),I.push(x.iridescenceMapUv),I.push(x.iridescenceThicknessMapUv),I.push(x.sheenColorMapUv),I.push(x.sheenRoughnessMapUv),I.push(x.specularMapUv),I.push(x.specularColorMapUv),I.push(x.specularIntensityMapUv),I.push(x.transmissionMapUv),I.push(x.thicknessMapUv),I.push(x.combine),I.push(x.fogExp2),I.push(x.sizeAttenuation),I.push(x.morphTargetsCount),I.push(x.morphAttributeCount),I.push(x.numDirLights),I.push(x.numPointLights),I.push(x.numSpotLights),I.push(x.numSpotLightMaps),I.push(x.numHemiLights),I.push(x.numRectAreaLights),I.push(x.numDirLightShadows),I.push(x.numPointLightShadows),I.push(x.numSpotLightShadows),I.push(x.numSpotLightShadowsWithMaps),I.push(x.numLightProbes),I.push(x.shadowMapType),I.push(x.toneMapping),I.push(x.numClippingPlanes),I.push(x.numClipIntersection),I.push(x.depthPacking)}function v(I,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),I.push(o.mask)}function _(I){let x=m[I.type],R;if(x){let z=un[x];R=au.clone(z.uniforms)}else R=I.uniforms;return R}function L(I,x){let R;for(let z=0,O=h.length;z<O;z++){let H=h[z];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new g0(i,x,I,r),h.push(R)),R}function S(I){if(--I.usedTimes===0){let x=h.indexOf(I);h[x]=h[h.length-1],h.pop(),I.destroy()}}function T(I){l.remove(I)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:P}}function A0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function x0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,y,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=y,f.group=g),t++,f}function o(u,d,p,m,y,g){let f=a(u,d,p,m,y,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,m,y,g){let f=a(u,d,p,m,y,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||x0),n.length>1&&n.sort(d||Nc),s.length>1&&s.sort(d||Nc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function y0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fc,i.set(n,[a])):s>=r.length?(a=new Fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Yt};break;case"SpotLight":e={position:new E,direction:new E,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function C0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var I0=0;function M0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w0(i){let t=new v0,e=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new ge,a=new ge;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,y=0,g=0,f=0,M=0,v=0,_=0,L=0,S=0,T=0;c.sort(M0);for(let I=0,x=c.length;I<x;I++){let R=c[I],z=R.color,O=R.intensity,H=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],O);T++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let it=R.shadow,G=e.get(R);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(O),V.distance=H,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[y]=V;let it=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,it.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[y]=it.matrix,R.castShadow){let G=e.get(R);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=J,_++}y++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(z).multiplyScalar(O),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=V,g++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let it=R.shadow,G=e.get(R);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,v++}n.point[m]=V,m++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(O),V.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[f]=V,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+L-S,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=T,n.version=I0++)}function l(c,h){let u=0,d=0,p=0,m=0,y=0,g=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let v=c[f];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function Oc(i){let t=new w0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function b0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Oc(i),t.set(s,[o])):r>=a.length?(o=new Oc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Po=class extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T0(i,t,e){let n=new vs,s=new ot,r=new ot,a=new ae,o=new Po({depthPacking:Ad}),l=new Lo,c={},h=e.maxTextureSize,u={[Yn]:Re,[Re]:Yn,[Be]:Be},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:S0,fragmentShader:E0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new He;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ut(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let f=this.type;this.render=function(S,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let I=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=f!==Sn&&this.type===Sn,H=f===Sn&&this.type!==Sn;for(let J=0,V=S.length;J<V;J++){let it=S[J],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||O===!0||H===!0){let Mt=this.type!==Sn?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new Un(s.x,s.y,Mt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let At=G.getViewportCount();for(let Mt=0;Mt<At;Mt++){let zt=G.getViewport(Mt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),z.viewport(a),G.updateMatrices(it,Mt),n=G.getFrustum(),_(T,P,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===Sn&&M(G,P),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(I,x,R)};function M(S,T){let P=t.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,P,p,y,null)}function v(S,T,P,I){let x=null,R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=x.uuid,O=T.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let J=H[O];J===void 0&&(J=x.clone(),H[O]=J,T.addEventListener("dispose",L)),x=J}if(x.visible=T.visible,x.wireframe=T.wireframe,I===Sn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=i.properties.get(x);z.light=P}return x}function _(S,T,P,I,x){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Sn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let O=t.update(S),H=S.material;if(Array.isArray(H)){let J=O.groups;for(let V=0,it=J.length;V<it;V++){let G=J[V],ht=H[G.materialIndex];if(ht&&ht.visible){let At=v(S,ht,I,x);S.onBeforeShadow(i,S,T,P,O,At,G),i.renderBufferDirect(P,null,O,At,S,G),S.onAfterShadow(i,S,T,P,O,At,G)}}}else if(H.visible){let J=v(S,H,I,x);S.onBeforeShadow(i,S,T,P,O,J,null),i.renderBufferDirect(P,null,O,J,S,null),S.onAfterShadow(i,S,T,P,O,J,null)}}let z=S.children;for(let O=0,H=z.length;O<H;O++)_(z[O],T,P,I,x)}function L(S){S.target.removeEventListener("dispose",L);for(let P in c){let I=c[P],x=S.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}var R0={[Fa]:Oa,[ka]:Ha,[Ba]:Va,[Vi]:za,[Oa]:Fa,[Ha]:ka,[Va]:Ba,[za]:Vi};function P0(i,t){function e(){let D=!1,pt=new ae,W=null,K=new ae(0,0,0,0);return{setMask:function(_t){W!==_t&&!D&&(i.colorMask(_t,_t,_t,_t),W=_t)},setLocked:function(_t){D=_t},setClear:function(_t,gt,Ht,_e,Le){Le===!0&&(_t*=_e,gt*=_e,Ht*=_e),pt.set(_t,gt,Ht,_e),K.equals(pt)===!1&&(i.clearColor(_t,gt,Ht,_e),K.copy(pt))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function n(){let D=!1,pt=!1,W=null,K=null,_t=null;return{setReversed:function(gt){if(pt!==gt){let Ht=t.get("EXT_clip_control");pt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let _e=_t;_t=null,this.setClear(_e)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(gt){W!==gt&&!D&&(i.depthMask(gt),W=gt)},setFunc:function(gt){if(pt&&(gt=R0[gt]),K!==gt){switch(gt){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=gt}},setLocked:function(gt){D=gt},setClear:function(gt){_t!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),_t=gt)},reset:function(){D=!1,W=null,K=null,_t=null,pt=!1}}}function s(){let D=!1,pt=null,W=null,K=null,_t=null,gt=null,Ht=null,_e=null,Le=null;return{setTest:function(ie){D||(ie?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ie){pt!==ie&&!D&&(i.stencilMask(ie),pt=ie)},setFunc:function(ie,Qe,yn){(W!==ie||K!==Qe||_t!==yn)&&(i.stencilFunc(ie,Qe,yn),W=ie,K=Qe,_t=yn)},setOp:function(ie,Qe,yn){(gt!==ie||Ht!==Qe||_e!==yn)&&(i.stencilOp(ie,Qe,yn),gt=ie,Ht=Qe,_e=yn)},setLocked:function(ie){D=ie},setClear:function(ie){Le!==ie&&(i.clearStencil(ie),Le=ie)},reset:function(){D=!1,pt=null,W=null,K=null,_t=null,gt=null,Ht=null,_e=null,Le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,y=!1,g=null,f=null,M=null,v=null,_=null,L=null,S=null,T=new Yt(0,0,0),P=0,I=!1,x=null,R=null,z=null,O=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=it>=2);let ht=null,At={},Mt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),te=new ae().fromArray(Mt),$=new ae().fromArray(zt);function rt(D,pt,W,K){let _t=new Uint8Array(4),gt=i.createTexture();i.bindTexture(D,gt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<W;Ht++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return gt}let wt={};wt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Vi),tt(!1),vt(kl),lt(i.CULL_FACE),b(Wn);function lt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Dt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function kt(D,pt){return u[D]!==pt?(i.bindFramebuffer(D,pt),u[D]=pt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ft(D,pt){let W=p,K=!1;if(D){W=d.get(pt),W===void 0&&(W=[],d.set(pt,W));let _t=D.textures;if(W.length!==_t.length||W[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ht=_t.length;gt<Ht;gt++)W[gt]=i.COLOR_ATTACHMENT0+gt;W.length=_t.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function Jt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let j={[ri]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};j[Yh]=i.MIN,j[Zh]=i.MAX;let st={[$h]:i.ZERO,[Jh]:i.ONE,[Kh]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function b(D,pt,W,K,_t,gt,Ht,_e,Le,ie){if(D===Wn){y===!0&&(Dt(i.BLEND),y=!1);return}if(y===!1&&(lt(i.BLEND),y=!0),D!==Wh){if(D!==g||ie!==I){if((f!==ri||_!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,_=ri),ie)switch(D){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,v=null,L=null,S=null,T.set(0,0,0),P=0,g=D,I=ie}return}_t=_t||pt,gt=gt||W,Ht=Ht||K,(pt!==f||_t!==_)&&(i.blendEquationSeparate(j[pt],j[_t]),f=pt,_=_t),(W!==M||K!==v||gt!==L||Ht!==S)&&(i.blendFuncSeparate(st[W],st[K],st[gt],st[Ht]),M=W,v=K,L=gt,S=Ht),(_e.equals(T)===!1||Le!==P)&&(i.blendColor(_e.r,_e.g,_e.b,Le),T.copy(_e),P=Le),g=D,I=!1}function Pt(D,pt){D.side===Be?Dt(i.CULL_FACE):lt(i.CULL_FACE);let W=D.side===Re;pt&&(W=!W),tt(W),D.blending===ki&&D.transparent===!1?b(Wn):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function vt(D){D!==Vh?(lt(i.CULL_FACE),D!==R&&(D===kl?i.cullFace(i.BACK):D===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),R=D}function ct(D){D!==z&&(V&&i.lineWidth(D),z=D)}function Ut(D,pt,W){D?(lt(i.POLYGON_OFFSET_FILL),(O!==pt||H!==W)&&(i.polygonOffset(pt,W),O=pt,H=W)):Dt(i.POLYGON_OFFSET_FILL)}function xt(D){D?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+J-1),ht!==D&&(i.activeTexture(D),ht=D)}function A(D,pt,W){W===void 0&&(ht===null?W=i.TEXTURE0+J-1:W=ht);let K=At[W];K===void 0&&(K={type:void 0,texture:void 0},At[W]=K),(K.type!==D||K.texture!==pt)&&(ht!==W&&(i.activeTexture(W),ht=W),i.bindTexture(D,pt||wt[D]),K.type=D,K.texture=pt)}function F(){let D=At[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function It(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Zt(D,pt){let W=c.get(pt);W===void 0&&(W=new WeakMap,c.set(pt,W));let K=W.get(D);K===void 0&&(K=i.getUniformBlockIndex(pt,D.name),W.set(D,K))}function Wt(D,pt){let K=c.get(pt).get(D);l.get(pt)!==K&&(i.uniformBlockBinding(pt,K,D.__bindingPointIndex),l.set(pt,K))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,At={},u={},d=new WeakMap,p=[],m=null,y=!1,g=null,f=null,M=null,v=null,_=null,L=null,S=null,T=new Yt(0,0,0),P=0,I=!1,x=null,R=null,z=null,O=null,H=null,te.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:kt,drawBuffers:Ft,useProgram:Jt,setBlending:b,setMaterial:Pt,setFlipSided:tt,setCullFace:vt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:xt,activeTexture:w,bindTexture:A,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ct,texImage3D:Nt,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:qt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Ot,viewport:It,reset:ce}}function kc(i,t,e,n){let s=L0(n);switch(e){case nh:return i*t;case sh:return i*t;case rh:return i*t*2;case ah:return i*t/s.components*s.byteLength;case ll:return i*t/s.components*s.byteLength;case oh:return i*t*2/s.components*s.byteLength;case cl:return i*t*2/s.components*s.byteLength;case ih:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case hl:return i*t*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case $a:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cr:case po:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lh:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _o:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L0(i){switch(i){case Dn:case Qc:return{byteLength:1,components:1};case ms:case th:case Rs:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case ci:case rl:case Rn:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,A){return p?new OffscreenCanvas(w,A):As("canvas")}function y(w,A,F){let Y=1,Q=xt(w);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let Z=Math.floor(Y*Q.width),bt=Math.floor(Y*Q.height);u===void 0&&(u=m(Z,bt));let ft=A?m(Z,bt):u;return ft.width=Z,ft.height=bt,ft.getContext("2d").drawImage(w,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+bt+")."),ft}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function g(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,A,F,Y,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=A;if(A===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),A===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),A===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),A===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),A===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),A===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),A===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),A===i.RGBA){let bt=Q?zr:Kt.getTransfer(Y);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=bt===re?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(w,A){let F;return w?A===null||A===ci||A===qi?F=i.DEPTH24_STENCIL8:A===Rn?F=i.DEPTH32F_STENCIL8:A===ms&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ci||A===qi?F=i.DEPTH_COMPONENT24:A===Rn?F=i.DEPTH_COMPONENT32F:A===ms&&(F=i.DEPTH_COMPONENT16),F}function L(w,A){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function S(w){let A=w.target;A.removeEventListener("dispose",S),P(A),A.isVideoTexture&&h.delete(A)}function T(w){let A=w.target;A.removeEventListener("dispose",T),x(A)}function P(w){let A=n.get(w);if(A.__webglInit===void 0)return;let F=w.source,Y=d.get(F);if(Y){let Q=Y[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(w),Object.keys(Y).length===0&&d.delete(F)}n.remove(w)}function I(w){let A=n.get(w);i.deleteTexture(A.__webglTexture);let F=w.source,Y=d.get(F);delete Y[A.__cacheKey],a.memory.textures--}function x(w){let A=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let Q=0;Q<A.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let F=w.textures;for(let Y=0,Q=F.length;Y<Q;Y++){let Z=n.get(F[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(w)}let R=0;function z(){R=0}function O(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function H(w){let A=[];return A.push(w.wrapS),A.push(w.wrapT),A.push(w.wrapR||0),A.push(w.magFilter),A.push(w.minFilter),A.push(w.anisotropy),A.push(w.internalFormat),A.push(w.format),A.push(w.type),A.push(w.generateMipmaps),A.push(w.premultiplyAlpha),A.push(w.flipY),A.push(w.unpackAlignment),A.push(w.colorSpace),A.join()}function J(w,A){let F=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,w,A);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+A)}function V(w,A){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+A)}function it(w,A){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,A);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+A)}function G(w,A){let F=n.get(w);if(w.version>0&&F.__version!==w.version){rt(F,w,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+A)}let ht={[Xi]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},At={[an]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},Mt={[yd]:i.NEVER,[bd]:i.ALWAYS,[vd]:i.LESS,[hh]:i.LEQUAL,[Cd]:i.EQUAL,[wd]:i.GEQUAL,[Id]:i.GREATER,[Md]:i.NOTEQUAL};function zt(w,A){if(A.type===Rn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===ea||A.magFilter===Us||A.magFilter===Tn||A.minFilter===fn||A.minFilter===ea||A.minFilter===Us||A.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ht[A.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ht[A.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ht[A.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,At[A.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,At[A.minFilter]),A.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===an||A.minFilter!==Us&&A.minFilter!==Tn||A.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function te(w,A){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",S));let Y=A.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let Z=H(A);if(Z!==w.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[Z].usedTimes++;let bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&I(A)),w.__cacheKey=Z,w.__webglTexture=Q[Z].texture}return F}function $(w,A,F){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=te(w,A),Z=A.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+F);let bt=n.get(Z);if(Z.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);let ft=Kt.getPrimaries(Kt.workingColorSpace),yt=A.colorSpace===Gn?null:Kt.getPrimaries(A.colorSpace),qt=A.colorSpace===Gn||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let nt=y(A.image,!1,s.maxTextureSize);nt=Ut(A,nt);let Ct=r.convert(A.format,A.colorSpace),Nt=r.convert(A.type),Ot=v(A.internalFormat,Ct,Nt,A.colorSpace,A.isVideoTexture);zt(Y,A);let It,Zt=A.mipmaps,Wt=A.isVideoTexture!==!0,ce=bt.__version===void 0||Q===!0,D=Z.dataReady,pt=L(A,nt);if(A.isDepthTexture)Ot=_(A.format===Yi,A.type),ce&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ot,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,nt.width,nt.height,0,Ct,Nt,null));else if(A.isDataTexture)if(Zt.length>0){Wt&&ce&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,Zt[0].width,Zt[0].height);for(let W=0,K=Zt.length;W<K;W++)It=Zt[W],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,Ct,Nt,It.data):e.texImage2D(i.TEXTURE_2D,W,Ot,It.width,It.height,0,Ct,Nt,It.data);A.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,Ct,Nt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,nt.width,nt.height,0,Ct,Nt,nt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ot,Zt[0].width,Zt[0].height,nt.depth);for(let W=0,K=Zt.length;W<K;W++)if(It=Zt[W],A.format!==rn)if(Ct!==null)if(Wt){if(D)if(A.layerUpdates.size>0){let _t=kc(It.width,It.height,A.format,A.type);for(let gt of A.layerUpdates){let Ht=It.data.subarray(gt*_t/It.data.BYTES_PER_ELEMENT,(gt+1)*_t/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,gt,It.width,It.height,1,Ct,Ht)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,nt.depth,Ct,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ot,It.width,It.height,nt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,nt.depth,Ct,Nt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ot,It.width,It.height,nt.depth,0,Ct,Nt,It.data)}else{Wt&&ce&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,Zt[0].width,Zt[0].height);for(let W=0,K=Zt.length;W<K;W++)It=Zt[W],A.format!==rn?Ct!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,Ct,It.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ot,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,Ct,Nt,It.data):e.texImage2D(i.TEXTURE_2D,W,Ot,It.width,It.height,0,Ct,Nt,It.data)}else if(A.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ot,nt.width,nt.height,nt.depth),D)if(A.layerUpdates.size>0){let W=kc(nt.width,nt.height,A.format,A.type);for(let K of A.layerUpdates){let _t=nt.data.subarray(K*W/nt.data.BYTES_PER_ELEMENT,(K+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,Ct,Nt,_t)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Ct,Nt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,nt.width,nt.height,nt.depth,0,Ct,Nt,nt.data);else if(A.isData3DTexture)Wt?(ce&&e.texStorage3D(i.TEXTURE_3D,pt,Ot,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Ct,Nt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,nt.width,nt.height,nt.depth,0,Ct,Nt,nt.data);else if(A.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(i.TEXTURE_2D,pt,Ot,nt.width,nt.height);else{let W=nt.width,K=nt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ot,W,K,0,Ct,Nt,null),W>>=1,K>>=1}}else if(Zt.length>0){if(Wt&&ce){let W=xt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ot,W.width,W.height)}for(let W=0,K=Zt.length;W<K;W++)It=Zt[W],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ct,Nt,It):e.texImage2D(i.TEXTURE_2D,W,Ot,Ct,Nt,It);A.generateMipmaps=!1}else if(Wt){if(ce){let W=xt(nt);e.texStorage2D(i.TEXTURE_2D,pt,Ot,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Nt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Ct,Nt,nt);g(A)&&f(Y),bt.__version=Z.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function rt(w,A,F){if(A.image.length!==6)return;let Y=te(w,A),Q=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let Z=n.get(Q);if(Q.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);let bt=Kt.getPrimaries(Kt.workingColorSpace),ft=A.colorSpace===Gn?null:Kt.getPrimaries(A.colorSpace),yt=A.colorSpace===Gn||bt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let qt=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,Ct=[];for(let K=0;K<6;K++)!qt&&!nt?Ct[K]=y(A.image[K],!0,s.maxCubemapSize):Ct[K]=nt?A.image[K].image:A.image[K],Ct[K]=Ut(A,Ct[K]);let Nt=Ct[0],Ot=r.convert(A.format,A.colorSpace),It=r.convert(A.type),Zt=v(A.internalFormat,Ot,It,A.colorSpace),Wt=A.isVideoTexture!==!0,ce=Z.__version===void 0||Y===!0,D=Q.dataReady,pt=L(A,Nt);zt(i.TEXTURE_CUBE_MAP,A);let W;if(qt){Wt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Zt,Nt.width,Nt.height);for(let K=0;K<6;K++){W=Ct[K].mipmaps;for(let _t=0;_t<W.length;_t++){let gt=W[_t];A.format!==rn?Ot!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,gt.width,gt.height,Ot,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Zt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,gt.width,gt.height,Ot,It,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Zt,gt.width,gt.height,0,Ot,It,gt.data)}}}else{if(W=A.mipmaps,Wt&&ce){W.length>0&&pt++;let K=xt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Zt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct[K].width,Ct[K].height,Ot,It,Ct[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,Ct[K].width,Ct[K].height,0,Ot,It,Ct[K].data);for(let _t=0;_t<W.length;_t++){let Ht=W[_t].image[K].image;Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Ht.width,Ht.height,Ot,It,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Zt,Ht.width,Ht.height,0,Ot,It,Ht.data)}}else{Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,It,Ct[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,Ot,It,Ct[K]);for(let _t=0;_t<W.length;_t++){let gt=W[_t];Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Ot,It,gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Zt,Ot,It,gt.image[K])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function wt(w,A,F,Y,Q,Z){let bt=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),yt=v(F.internalFormat,bt,ft,F.colorSpace),qt=n.get(A),nt=n.get(F);if(nt.__renderTarget=A,!qt.__hasExternalTextures){let Ct=Math.max(1,A.width>>Z),Nt=Math.max(1,A.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,yt,Ct,Nt,A.depth,0,bt,ft,null):e.texImage2D(Q,Z,yt,Ct,Nt,0,bt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,nt.__webglTexture,0,tt(A)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,nt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,A,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),A.depthBuffer){let Y=A.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=_(A.stencilBuffer,Q),bt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=tt(A);vt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,A.width,A.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Z,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{let Y=A.textures;for(let Q=0;Q<Y.length;Q++){let Z=Y[Q],bt=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),yt=v(Z.internalFormat,bt,ft,Z.colorSpace),qt=tt(A);F&&vt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,yt,A.width,A.height):vt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,yt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,yt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(w,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);let Q=Y.__webglTexture,Z=tt(A);if(A.depthTexture.format===Bi)vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(A.depthTexture.format===Yi)vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function kt(w){let A=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let Q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),A.__depthDisposeCallback=Q}A.__boundDepthTexture=Y}if(w.depthTexture&&!A.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,w)}else if(F){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),lt(A.__webglDepthbuffer[Y],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),lt(A.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(w,A,F){let Y=n.get(w);A!==void 0&&wt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&kt(w)}function Jt(w){let A=w.texture,F=n.get(w),Y=n.get(A);w.addEventListener("dispose",T);let Q=w.textures,Z=w.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let yt=0;yt<A.mipmaps.length;yt++)F.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else F.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)F.__webglFramebuffer[ft]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ft=0,yt=Q.length;ft<yt;ft++){let qt=n.get(Q[ft]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){let yt=Q[ft];F.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);let qt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),Ct=v(yt.internalFormat,qt,nt,yt.colorSpace,w.isXRRenderTarget===!0),Nt=tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(i.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)wt(F.__webglFramebuffer[ft][yt],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else wt(F.__webglFramebuffer[ft],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ft=0,yt=Q.length;ft<yt;ft++){let qt=Q[ft],nt=n.get(qt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),zt(i.TEXTURE_2D,qt),wt(F.__webglFramebuffer,w,qt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(qt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),zt(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)wt(F.__webglFramebuffer[yt],w,A,i.COLOR_ATTACHMENT0,ft,yt);else wt(F.__webglFramebuffer,w,A,i.COLOR_ATTACHMENT0,ft,0);g(A)&&f(ft),e.unbindTexture()}w.depthBuffer&&kt(w)}function j(w){let A=w.textures;for(let F=0,Y=A.length;F<Y;F++){let Q=A[F];if(g(Q)){let Z=M(w),bt=n.get(Q).__webglTexture;e.bindTexture(Z,bt),f(Z),e.unbindTexture()}}}let st=[],b=[];function Pt(w){if(w.samples>0){if(vt(w)===!1){let A=w.textures,F=w.width,Y=w.height,Q=i.COLOR_BUFFER_BIT,Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),ft=A.length>1;if(ft)for(let yt=0;yt<A.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<A.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let qt=n.get(A[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(st.length=0,b.length=0,st.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(Z),b.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<A.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let qt=n.get(A[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let A=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function tt(w){return Math.min(s.maxSamples,w.samples)}function vt(w){let A=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(w){let A=a.render.frame;h.get(w)!==A&&(h.set(w,A),w.update())}function Ut(w,A){let F=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Qi&&F!==Gn&&(Kt.getTransfer(F)===re?(Y!==rn||Q!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),A}function xt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=vt}function U0(i,t){function e(n,s=Gn){let r,a=Kt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return i.BYTE;if(n===th)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===rn)return i.RGBA;if(n===sh)return i.LUMINANCE;if(n===rh)return i.LUMINANCE_ALPHA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===ah)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===oh)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===Za||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Ka)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cr||n===po||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===mo||n===_o||n===Ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Do=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ae=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},N0={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:F0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},No=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,y=new Uo,g=e.getContextAttributes(),f=null,M=null,v=[],_=[],L=new ot,S=null,T=new Ne;T.viewport=new ae;let P=new Ne;P.viewport=new ae;let I=[T,P],x=new Do,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=v[$];return rt===void 0&&(rt=new fs,v[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=v[$];return rt===void 0&&(rt=new fs,v[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=v[$];return rt===void 0&&(rt=new fs,v[$]=rt),rt.getHandSpace()};function O($){let rt=_.indexOf($.inputSource);if(rt===-1)return;let wt=v[rt];wt!==void 0&&(wt.update($.inputSource,$.frame,c||a),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){let rt=_[$];rt!==null&&(_[$]=null,v[$].disconnect(rt))}R=null,z=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Un(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,wt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Yi:Bi,wt=g.stencil?qi:ci);let Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Un(d.textureWidth,d.textureHeight,{format:rn,type:Dn,depthTexture:new yr(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J($){for(let rt=0;rt<$.removed.length;rt++){let wt=$.removed[rt],lt=_.indexOf(wt);lt>=0&&(_[lt]=null,v[lt].disconnect(wt))}for(let rt=0;rt<$.added.length;rt++){let wt=$.added[rt],lt=_.indexOf(wt);if(lt===-1){for(let kt=0;kt<v.length;kt++)if(kt>=_.length){_.push(wt),lt=kt;break}else if(_[kt]===null){_[kt]=wt,lt=kt;break}if(lt===-1)break}let Dt=v[lt];Dt&&Dt.connect(wt)}}let V=new E,it=new E;function G($,rt,wt){V.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(wt.matrixWorld);let lt=V.distanceTo(it),Dt=rt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,Ft=Dt[14]/(Dt[10]-1),Jt=Dt[14]/(Dt[10]+1),j=(Dt[9]+1)/Dt[5],st=(Dt[9]-1)/Dt[5],b=(Dt[8]-1)/Dt[0],Pt=(kt[8]+1)/kt[0],tt=Ft*b,vt=Ft*Pt,ct=lt/(-b+Pt),Ut=ct*-b;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ut),$.translateZ(ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let xt=Ft+ct,w=Jt+ct,A=tt-Ut,F=vt+(lt-Ut),Y=j*Jt/w*xt,Q=st*Jt/w*xt;$.projectionMatrix.makePerspective(A,F,Y,Q,xt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,wt=$.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),x.near=P.near=T.near=rt,x.far=P.far=T.far=wt,(R!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far),T.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;let lt=$.parent,Dt=x.cameras;ht(x,lt);for(let kt=0;kt<Dt.length;kt++)ht(Dt[kt],lt);Dt.length===2?G(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),At($,x,lt)};function At($,rt,wt){wt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_s*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Mt=null;function zt($,rt){if(h=rt.getViewerPose(c||a),m=rt,h!==null){let wt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let lt=!1;wt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let kt=0;kt<wt.length;kt++){let Ft=wt[kt],Jt=null;if(p!==null)Jt=p.getViewport(Ft);else{let st=u.getViewSubImage(d,Ft);Jt=st.viewport,kt===0&&(t.setRenderTargetTextures(M,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(M))}let j=I[kt];j===void 0&&(j=new Ne,j.layers.enable(kt),j.viewport=new ae,I[kt]=j),j.matrix.fromArray(Ft.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ft.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),kt===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(j)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let kt=u.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&y.init(t,kt,s.renderState)}}for(let wt=0;wt<v.length;wt++){let lt=_[wt],Dt=v[wt];lt!==null&&Dt!==void 0&&Dt.update(lt,rt,c||a)}Mt&&Mt($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let te=new gh;te.setAnimationLoop(zt),this.setAnimationLoop=function($){Mt=$},this.dispose=function(){}}},ii=new pn,k0=new ge;function B0(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ph(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,M,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Re&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Re&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,ii.copy(_),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),g.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(ii)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,M,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=v*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(m(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));let L=v.program;n.updateUBOMapping(M,L);let S=t.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){let v=u();M.__bindingPointIndex=v;let _=i.createBuffer(),L=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],_=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=_.length;S<T;S++){let P=Array.isArray(_[S])?_[S]:[_[S]];for(let I=0,x=P.length;I<x;I++){let R=P[I];if(p(R,S,I,L)===!0){let z=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],H=0;for(let J=0;J<O.length;J++){let V=O[J],it=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+H,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,_,L){let S=M.value,T=v+"_"+_;if(L[T]===void 0)return typeof S=="number"||typeof S=="boolean"?L[T]=S:L[T]=S.clone(),!0;{let P=L[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return L[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(M){let v=M.uniforms,_=0,L=16;for(let T=0,P=v.length;T<P;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,R=I.length;x<R;x++){let z=I[x],O=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=O.length;H<J;H++){let V=O[H],it=y(V),G=_%L,ht=G%it.boundary,At=G+ht;_+=ht,At!==0&&L-At<it.storage&&(_+=L-At),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=it.storage}}}let S=_%L;return S>0&&(_+=L-S),M.__size=_,M.__cache={},this}function y(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var vr=class{constructor(t={}){let{canvas:e=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),y=new Int32Array(4),g=null,f=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Xn,this.toneMappingExposure=1;let _=this,L=!1,S=0,T=0,P=null,I=-1,x=null,R=new ae,z=new ae,O=null,H=new Yt(0),J=0,V=e.width,it=e.height,G=1,ht=null,At=null,Mt=new ae(0,0,V,it),zt=new ae(0,0,V,it),te=!1,$=new vs,rt=!1,wt=!1,lt=new ge,Dt=new ge,kt=new E,Ft=new ae,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function st(){return P===null?G:1}let b=n;function Pt(C,U){return e.getContext(C,U)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),b===null){let U="webgl2";if(b=Pt(U,C),b===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,vt,ct,Ut,xt,w,A,F,Y,Q,Z,bt,ft,yt,qt,nt,Ct,Nt,Ot,It,Zt,Wt,ce,D;function pt(){tt=new ng(b),tt.init(),Wt=new U0(b,tt),vt=new Jp(b,tt,t,Wt),ct=new P0(b,tt),vt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ut=new rg(b),xt=new A0,w=new D0(b,tt,ct,xt,vt,Wt,Ut),A=new jp(_),F=new eg(_),Y=new du(b),ce=new Zp(b,Y),Q=new ig(b,Y,Ut,ce),Z=new og(b,Q,Y,Ut),Ot=new ag(b,vt,w),nt=new Kp(xt),bt=new _0(_,A,F,tt,vt,ce,nt),ft=new B0(_,xt),yt=new y0,qt=new b0(tt),Nt=new Yp(_,A,F,ct,Z,p,l),Ct=new T0(_,Z,vt),D=new z0(b,Ut,vt,ct),It=new $p(b,tt,Ut),Zt=new sg(b,tt,Ut),Ut.programs=bt.programs,_.capabilities=vt,_.extensions=tt,_.properties=xt,_.renderLists=yt,_.shadowMap=Ct,_.state=ct,_.info=Ut}pt();let W=new No(_,b);this.xr=W,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(V,it,!1))},this.getSize=function(C){return C.set(V,it)},this.setSize=function(C,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,it=U,e.width=Math.floor(C*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=C+"px",e.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(V*G,it*G).floor()},this.setDrawingBufferSize=function(C,U,k){V=C,it=U,G=k,e.width=Math.floor(C*k),e.height=Math.floor(U*k),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Mt)},this.setViewport=function(C,U,k,B){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,U,k,B),ct.viewport(R.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(zt)},this.setScissor=function(C,U,k,B){C.isVector4?zt.set(C.x,C.y,C.z,C.w):zt.set(C,U,k,B),ct.scissor(z.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){ct.setScissorTest(te=C)},this.setOpaqueSort=function(C){ht=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(C=!0,U=!0,k=!0){let B=0;if(C){let N=!1;if(P!==null){let at=P.texture.format;N=at===hl||at===cl||at===ll}if(N){let at=P.texture.type,mt=at===Dn||at===ci||at===ms||at===qi||at===al||at===ol,Et=Nt.getClearColor(),Tt=Nt.getClearAlpha(),Bt=Et.r,Vt=Et.g,Rt=Et.b;mt?(m[0]=Bt,m[1]=Vt,m[2]=Rt,m[3]=Tt,b.clearBufferuiv(b.COLOR,0,m)):(y[0]=Bt,y[1]=Vt,y[2]=Rt,y[3]=Tt,b.clearBufferiv(b.COLOR,0,y))}else B|=b.COLOR_BUFFER_BIT}U&&(B|=b.DEPTH_BUFFER_BIT),k&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),qt.dispose(),xt.dispose(),A.dispose(),F.dispose(),Z.dispose(),ce.dispose(),D.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Rl),W.removeEventListener("sessionend",Pl),Kn.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let C=Ut.autoReset,U=Ct.enabled,k=Ct.autoUpdate,B=Ct.needsUpdate,N=Ct.type;pt(),Ut.autoReset=C,Ct.enabled=U,Ct.autoUpdate=k,Ct.needsUpdate=B,Ct.type=N}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ht(C){let U=C.target;U.removeEventListener("dispose",Ht),_e(U)}function _e(C){Le(C),xt.remove(C)}function Le(C){let U=xt.get(C).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),C.isShaderMaterial&&bt.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,k,B,N,at){U===null&&(U=Jt);let mt=N.isMesh&&N.matrixWorld.determinant()<0,Et=Bh(C,U,k,B,N);ct.setMaterial(B,mt);let Tt=k.index,Bt=1;if(B.wireframe===!0){if(Tt=Q.getWireframeAttribute(k),Tt===void 0)return;Bt=2}let Vt=k.drawRange,Rt=k.attributes.position,jt=Vt.start*Bt,he=(Vt.start+Vt.count)*Bt;at!==null&&(jt=Math.max(jt,at.start*Bt),he=Math.min(he,(at.start+at.count)*Bt)),Tt!==null?(jt=Math.max(jt,0),he=Math.min(he,Tt.count)):Rt!=null&&(jt=Math.max(jt,0),he=Math.min(he,Rt.count));let de=he-jt;if(de<0||de===1/0)return;ce.setup(N,B,Et,k,Tt);let Ge,ee=It;if(Tt!==null&&(Ge=Y.get(Tt),ee=Zt,ee.setIndex(Ge)),N.isMesh)B.wireframe===!0?(ct.setLineWidth(B.wireframeLinewidth*st()),ee.setMode(b.LINES)):ee.setMode(b.TRIANGLES);else if(N.isLine){let Lt=B.linewidth;Lt===void 0&&(Lt=1),ct.setLineWidth(Lt*st()),N.isLineSegments?ee.setMode(b.LINES):N.isLineLoop?ee.setMode(b.LINE_LOOP):ee.setMode(b.LINE_STRIP)}else N.isPoints?ee.setMode(b.POINTS):N.isSprite&&ee.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Lt=N._multiDrawStarts,vn=N._multiDrawCounts,ne=N._multiDrawCount,tn=Tt?Y.get(Tt).bytesPerElement:1,yi=xt.get(B).currentProgram.getUniforms();for(let Xe=0;Xe<ne;Xe++)yi.setValue(b,"_gl_DrawID",Xe),ee.render(Lt[Xe]/tn,vn[Xe])}else if(N.isInstancedMesh)ee.renderInstances(jt,de,N.count);else if(k.isInstancedBufferGeometry){let Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,vn=Math.min(k.instanceCount,Lt);ee.renderInstances(jt,de,vn)}else ee.render(jt,de)};function ie(C,U,k){C.transparent===!0&&C.side===Be&&C.forceSinglePass===!1?(C.side=Re,C.needsUpdate=!0,Ds(C,U,k),C.side=Yn,C.needsUpdate=!0,Ds(C,U,k),C.side=Be):Ds(C,U,k)}this.compile=function(C,U,k=null){k===null&&(k=C),f=qt.get(k),f.init(U),v.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),C!==k&&C.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let B=new Set;return C.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Et=at[mt];ie(Et,k,N),B.add(Et)}else ie(at,k,N),B.add(at)}),v.pop(),f=null,B},this.compileAsync=function(C,U,k=null){let B=this.compile(C,U,k);return new Promise(N=>{function at(){if(B.forEach(function(mt){xt.get(mt).currentProgram.isReady()&&B.delete(mt)}),B.size===0){N(C);return}setTimeout(at,10)}tt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Qe=null;function yn(C){Qe&&Qe(C)}function Rl(){Kn.stop()}function Pl(){Kn.start()}let Kn=new gh;Kn.setAnimationLoop(yn),typeof self!="undefined"&&Kn.setContext(self),this.setAnimationLoop=function(C){Qe=C,W.setAnimationLoop(C),C===null?Kn.stop():Kn.start()},W.addEventListener("sessionstart",Rl),W.addEventListener("sessionend",Pl),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,U,P),f=qt.get(C,v.length),f.init(U),v.push(f),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Dt),wt=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,wt),g=yt.get(C,M.length),g.init(),M.push(g),W.enabled===!0&&W.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&ta(at,U,-1/0,_.sortObjects)}ta(C,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ht,At),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Nt.addToRenderList(g,C),this.info.render.frame++,rt===!0&&nt.beginShadows();let k=f.state.shadowsArray;Ct.render(k,C,U),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,N=g.transmissive;if(f.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let mt=0,Et=at.length;mt<Et;mt++){let Tt=at[mt];Dl(B,N,C,Tt)}j&&Nt.render(C);for(let mt=0,Et=at.length;mt<Et;mt++){let Tt=at[mt];Ll(g,C,Tt,Tt.viewport)}}else N.length>0&&Dl(B,N,C,U),j&&Nt.render(C),Ll(g,C,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(_,C,U),ce.resetDefaultState(),I=-1,x=null,v.pop(),v.length>0?(f=v[v.length-1],rt===!0&&nt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ta(C,U,k,B){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)k=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){B&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Dt);let mt=Z.update(C),Et=C.material;Et.visible&&g.push(C,mt,Et,k,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let mt=Z.update(C),Et=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ft.copy(mt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(Dt)),Array.isArray(Et)){let Tt=mt.groups;for(let Bt=0,Vt=Tt.length;Bt<Vt;Bt++){let Rt=Tt[Bt],jt=Et[Rt.materialIndex];jt&&jt.visible&&g.push(C,mt,jt,k,Ft.z,Rt)}}else Et.visible&&g.push(C,mt,Et,k,Ft.z,null)}}let at=C.children;for(let mt=0,Et=at.length;mt<Et;mt++)ta(at[mt],U,k,B)}function Ll(C,U,k,B){let N=C.opaque,at=C.transmissive,mt=C.transparent;f.setupLightsView(k),rt===!0&&nt.setGlobalState(_.clippingPlanes,k),B&&ct.viewport(R.copy(B)),N.length>0&&Ls(N,U,k),at.length>0&&Ls(at,U,k),mt.length>0&&Ls(mt,U,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Dl(C,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Un(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Rs:Dn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let at=f.state.transmissionRenderTarget[B.id],mt=B.viewport||R;at.setSize(mt.z,mt.w);let Et=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(H),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),j&&Nt.render(k);let Tt=_.toneMapping;_.toneMapping=Xn;let Bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),rt===!0&&nt.setGlobalState(_.clippingPlanes,B),Ls(C,k,B),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Rt=0,jt=U.length;Rt<jt;Rt++){let he=U[Rt],de=he.object,Ge=he.geometry,ee=he.material,Lt=he.group;if(ee.side===Be&&de.layers.test(B.layers)){let vn=ee.side;ee.side=Re,ee.needsUpdate=!0,Ul(de,k,B,Ge,ee,Lt),ee.side=vn,ee.needsUpdate=!0,Vt=!0}}Vt===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}_.setRenderTarget(Et),_.setClearColor(H,J),Bt!==void 0&&(B.viewport=Bt),_.toneMapping=Tt}function Ls(C,U,k){let B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=C.length;N<at;N++){let mt=C[N],Et=mt.object,Tt=mt.geometry,Bt=B===null?mt.material:B,Vt=mt.group;Et.layers.test(k.layers)&&Ul(Et,U,k,Tt,Bt,Vt)}}function Ul(C,U,k,B,N,at){C.onBeforeRender(_,U,k,B,N,at),C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),N.onBeforeRender(_,U,k,B,C,at),N.transparent===!0&&N.side===Be&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,_.renderBufferDirect(k,U,B,N,C,at),N.side=Yn,N.needsUpdate=!0,_.renderBufferDirect(k,U,B,N,C,at),N.side=Be):_.renderBufferDirect(k,U,B,N,C,at),C.onAfterRender(_,U,k,B,N,at)}function Ds(C,U,k){U.isScene!==!0&&(U=Jt);let B=xt.get(C),N=f.state.lights,at=f.state.shadowsArray,mt=N.state.version,Et=bt.getParameters(C,N.state,at,U,k),Tt=bt.getProgramCacheKey(Et),Bt=B.programs;B.environment=C.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(C.isMeshStandardMaterial?F:A).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,Bt===void 0&&(C.addEventListener("dispose",Ht),Bt=new Map,B.programs=Bt);let Vt=Bt.get(Tt);if(Vt!==void 0){if(B.currentProgram===Vt&&B.lightsStateVersion===mt)return Fl(C,Et),Vt}else Et.uniforms=bt.getUniforms(C),C.onBeforeCompile(Et,_),Vt=bt.acquireProgram(Et,Tt),Bt.set(Tt,Vt),B.uniforms=Et.uniforms;let Rt=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Rt.clippingPlanes=nt.uniform),Fl(C,Et),B.needsLights=Hh(C),B.lightsStateVersion=mt,B.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Vt,B.uniformsList=null,Vt}function Nl(C){if(C.uniformsList===null){let U=C.currentProgram.getUniforms();C.uniformsList=Hi.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function Fl(C,U){let k=xt.get(C);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Bh(C,U,k,B,N){U.isScene!==!0&&(U=Jt),w.resetTextureUnits();let at=U.fog,mt=B.isMeshStandardMaterial?U.environment:null,Et=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qi,Tt=(B.isMeshStandardMaterial?F:A).get(B.envMap||mt),Bt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Vt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,he=!!k.morphAttributes.color,de=Xn;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=_.toneMapping);let Ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=Ge!==void 0?Ge.length:0,Lt=xt.get(B),vn=f.state.lights;if(rt===!0&&(wt===!0||C!==x)){let $e=C===x&&B.id===I;nt.setState(B,C,$e)}let ne=!1;B.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==vn.state.version||Lt.outputColorSpace!==Et||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==Tt||B.fog===!0&&Lt.fog!==at||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==nt.numPlanes||Lt.numIntersection!==nt.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Rt||Lt.morphNormals!==jt||Lt.morphColors!==he||Lt.toneMapping!==de||Lt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Lt.__version=B.version);let tn=Lt.currentProgram;ne===!0&&(tn=Ds(B,U,N));let yi=!1,Xe=!1,ns=!1,ue=tn.getUniforms(),dn=Lt.uniforms;if(ct.useProgram(tn.program)&&(yi=!0,Xe=!0,ns=!0),B.id!==I&&(I=B.id,Xe=!0),yi||x!==C){ct.buffers.depth.getReversed()?(lt.copy(C.projectionMatrix),Xd(lt),qd(lt),ue.setValue(b,"projectionMatrix",lt)):ue.setValue(b,"projectionMatrix",C.projectionMatrix),ue.setValue(b,"viewMatrix",C.matrixWorldInverse);let Nn=ue.map.cameraPosition;Nn!==void 0&&Nn.setValue(b,kt.setFromMatrixPosition(C.matrixWorld)),vt.logarithmicDepthBuffer&&ue.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ue.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,Xe=!0,ns=!0)}if(N.isSkinnedMesh){ue.setOptional(b,N,"bindMatrix"),ue.setOptional(b,N,"bindMatrixInverse");let $e=N.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(b,"boneTexture",$e.boneTexture,w))}N.isBatchedMesh&&(ue.setOptional(b,N,"batchingTexture"),ue.setValue(b,"batchingTexture",N._matricesTexture,w),ue.setOptional(b,N,"batchingIdTexture"),ue.setValue(b,"batchingIdTexture",N._indirectTexture,w),ue.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(b,"batchingColorTexture",N._colorsTexture,w));let is=k.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Ot.update(N,k,tn),(Xe||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,ue.setValue(b,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(dn.envMap.value=Tt,dn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),Xe&&(ue.setValue(b,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&zh(dn,ns),at&&B.fog===!0&&ft.refreshFogUniforms(dn,at),ft.refreshMaterialUniforms(dn,B,G,it,f.state.transmissionRenderTarget[C.id]),Hi.upload(b,Nl(Lt),dn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hi.upload(b,Nl(Lt),dn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ue.setValue(b,"center",N.center),ue.setValue(b,"modelViewMatrix",N.modelViewMatrix),ue.setValue(b,"normalMatrix",N.normalMatrix),ue.setValue(b,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let $e=B.uniformsGroups;for(let Nn=0,Fn=$e.length;Nn<Fn;Nn++){let Ol=$e[Nn];D.update(Ol,tn),D.bind(Ol,tn)}}return tn}function zh(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function Hh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,U,k){xt.get(C.texture).__webglTexture=U,xt.get(C.depthTexture).__webglTexture=k;let B=xt.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){let k=xt.get(C);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,k=0){P=C,S=U,T=k;let B=!0,N=null,at=!1,mt=!1;if(C){let Tt=xt.get(C);if(Tt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Tt.__hasExternalTextures)w.rebindTextures(C,xt.get(C.texture).__webglTexture,xt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Rt=C.depthTexture;if(Tt.__boundDepthTexture!==Rt){if(Rt!==null&&xt.has(Rt)&&(C.width!==Rt.image.width||C.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}let Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let Vt=xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][k]:N=Vt[U],at=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?N=xt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[k]:N=Vt,R.copy(C.viewport),z.copy(C.scissor),O=C.scissorTest}else R.copy(Mt).multiplyScalar(G).floor(),z.copy(zt).multiplyScalar(G).floor(),O=te;if(ct.bindFramebuffer(b.FRAMEBUFFER,N)&&B&&ct.drawBuffers(C,N),ct.viewport(R),ct.scissor(z),ct.setScissorTest(O),at){let Tt=xt.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,k)}else if(mt){let Tt=xt.get(C.texture),Bt=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Tt.__webglTexture,k||0,Bt)}I=-1},this.readRenderTargetPixels=function(C,U,k,B,N,at,mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){ct.bindFramebuffer(b.FRAMEBUFFER,Et);try{let Tt=C.texture,Bt=Tt.format,Vt=Tt.type;if(!vt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-B&&k>=0&&k<=C.height-N&&b.readPixels(U,k,B,N,Wt.convert(Bt),Wt.convert(Vt),at)}finally{let Tt=P!==null?xt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(b.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(C,U,k,B,N,at,mt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){let Tt=C.texture,Bt=Tt.format,Vt=Tt.type;if(!vt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-B&&k>=0&&k<=C.height-N){ct.bindFramebuffer(b.FRAMEBUFFER,Et);let Rt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Rt),b.bufferData(b.PIXEL_PACK_BUFFER,at.byteLength,b.STREAM_READ),b.readPixels(U,k,B,N,Wt.convert(Bt),Wt.convert(Vt),0);let jt=P!==null?xt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(b.FRAMEBUFFER,jt);let he=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Wd(b,he,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Rt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,at),b.deleteBuffer(Rt),b.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,k=0){C.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-k),N=Math.floor(C.image.width*B),at=Math.floor(C.image.height*B),mt=U!==null?U.x:0,Et=U!==null?U.y:0;w.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,mt,Et,N,at),ct.unbindTexture()},this.copyTextureToTexture=function(C,U,k=null,B=null,N=0){C.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let at,mt,Et,Tt,Bt,Vt,Rt,jt,he,de=C.isCompressedTexture?C.mipmaps[N]:C.image;k!==null?(at=k.max.x-k.min.x,mt=k.max.y-k.min.y,Et=k.isBox3?k.max.z-k.min.z:1,Tt=k.min.x,Bt=k.min.y,Vt=k.isBox3?k.min.z:0):(at=de.width,mt=de.height,Et=de.depth||1,Tt=0,Bt=0,Vt=0),B!==null?(Rt=B.x,jt=B.y,he=B.z):(Rt=0,jt=0,he=0);let Ge=Wt.convert(U.format),ee=Wt.convert(U.type),Lt;U.isData3DTexture?(w.setTexture3D(U,0),Lt=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Lt=b.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Lt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);let vn=b.getParameter(b.UNPACK_ROW_LENGTH),ne=b.getParameter(b.UNPACK_IMAGE_HEIGHT),tn=b.getParameter(b.UNPACK_SKIP_PIXELS),yi=b.getParameter(b.UNPACK_SKIP_ROWS),Xe=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,de.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,de.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Tt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Bt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Vt);let ns=C.isDataArrayTexture||C.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let dn=xt.get(C),is=xt.get(U),$e=xt.get(dn.__renderTarget),Nn=xt.get(is.__renderTarget);ct.bindFramebuffer(b.READ_FRAMEBUFFER,$e.__webglFramebuffer),ct.bindFramebuffer(b.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<Et;Fn++)ns&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.get(C).__webglTexture,N,Vt+Fn),C.isDepthTexture?(ue&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,N,he+Fn),b.blitFramebuffer(Tt,Bt,at,mt,Rt,jt,at,mt,b.DEPTH_BUFFER_BIT,b.NEAREST)):ue?b.copyTexSubImage3D(Lt,N,Rt,jt,he+Fn,Tt,Bt,at,mt):b.copyTexSubImage2D(Lt,N,Rt,jt,he+Fn,Tt,Bt,at,mt);ct.bindFramebuffer(b.READ_FRAMEBUFFER,null),ct.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ue?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Lt,N,Rt,jt,he,at,mt,Et,Ge,ee,de.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Lt,N,Rt,jt,he,at,mt,Et,Ge,de.data):b.texSubImage3D(Lt,N,Rt,jt,he,at,mt,Et,Ge,ee,de):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,Rt,jt,at,mt,Ge,ee,de.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,Rt,jt,de.width,de.height,Ge,de.data):b.texSubImage2D(b.TEXTURE_2D,N,Rt,jt,at,mt,Ge,ee,de);b.pixelStorei(b.UNPACK_ROW_LENGTH,vn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ne),b.pixelStorei(b.UNPACK_SKIP_PIXELS,tn),b.pixelStorei(b.UNPACK_SKIP_ROWS,yi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Xe),N===0&&U.generateMipmaps&&b.generateMipmap(Lt),ct.unbindTexture()},this.copyTextureToTexture3D=function(C,U,k=null,B=null,N=0){return C.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,C=arguments[2],U=arguments[3],N=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,k,B,N)},this.initRenderTarget=function(C){xt.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ct.unbindTexture()},this.resetState=function(){S=0,T=0,P=null,ct.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Ji=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ui=class extends We{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new E,s=[],r=[],a=[],o=new E,l=new ge;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fo=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var er=new E,Ta=new fl,Ra=new fl,Pa=new fl,Ki=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),c=er);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=er),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,y,g),Ra.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,y,g),Pa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ra.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Pa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ta.calc(l),Ra.calc(l),Pa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function H0(i,t){let e=1-i;return e*e*t}function V0(i,t){return 2*(1-i)*i*t}function G0(i,t){return i*i*t}function ps(i,t,e,n){return H0(i,t)+V0(i,e)+G0(i,n)}function W0(i,t){let e=1-i;return e*e*e*t}function X0(i,t){let e=1-i;return 3*e*e*i*t}function q0(i,t){return 3*(1-i)*i*i*t}function Y0(i,t){return i*i*i*t}function gs(i,t,e,n,s){return W0(i,t)+X0(i,e)+q0(i,n)+Y0(i,s)}var Cr=class extends je{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,s.x,r.x,a.x,o.x),gs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends je{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,s.x,r.x,a.x,o.x),gs(t,s.y,r.y,a.y,o.y),gs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends je{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends je{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends je{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,s.x,r.x,a.x),ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends je{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,s.x,r.x,a.x),ps(t,s.y,r.y,a.y),ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Bc(o,l.x,c.x,h.x,u.x),Bc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Sr=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Ki,CubicBezierCurve:Cr,CubicBezierCurve3:Oo,EllipseCurve:Cs,LineCurve:Ir,LineCurve3:ko,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:wr,SplineCurve:br}),Bo=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Sr[s.type]().fromJSON(s))}return this}},Er=class extends Bo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ir(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Cr(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Cs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Is=class i extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new E,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ln=class i extends He{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,y=[],g=n/2,f=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function M(){let _=new E,L=new E,S=0,T=(e-t)/n;for(let P=0;P<=r;P++){let I=[],x=P/r,R=x*(e-t)+t;for(let z=0;z<=s;z++){let O=z/s,H=O*l+o,J=Math.sin(H),V=Math.cos(H);L.x=R*J,L.y=-x*n+g,L.z=R*V,u.push(L.x,L.y,L.z),_.set(J,T,V).normalize(),d.push(_.x,_.y,_.z),p.push(O,1-x),I.push(m++)}y.push(I)}for(let P=0;P<s;P++)for(let I=0;I<r;I++){let x=y[I][P],R=y[I+1][P],z=y[I+1][P+1],O=y[I][P+1];(t>0||I!==0)&&(h.push(x,R,O),S+=3),(e>0||I!==r-1)&&(h.push(R,z,O),S+=3)}c.addGroup(f,S,0),f+=S}function v(_){let L=m,S=new ot,T=new E,P=0,I=_===!0?t:e,x=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*x,0),d.push(0,x,0),p.push(.5,.5),m++;let R=m;for(let z=0;z<=s;z++){let H=z/s*l+o,J=Math.cos(H),V=Math.sin(H);T.x=I*V,T.y=g*x,T.z=I*J,u.push(T.x,T.y,T.z),d.push(0,x,0),S.x=J*.5+.5,S.y=V*.5*x+.5,p.push(S.x,S.y),m++}for(let z=0;z<s;z++){let O=L+z,H=R+z;_===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(f,P,_===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mn=class i extends ln{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zo=class i extends He{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new E,_=new E,L=new E;for(let S=0;S<e.length;S+=3)p(e[S+0],v),p(e[S+1],_),p(e[S+2],L),l(v,_,L,M)}function l(M,v,_,L){let S=L+1,T=[];for(let P=0;P<=S;P++){T[P]=[];let I=M.clone().lerp(_,P/S),x=v.clone().lerp(_,P/S),R=S-P;for(let z=0;z<=R;z++)z===0&&P===S?T[P][z]=I:T[P][z]=I.clone().lerp(x,z/R)}for(let P=0;P<S;P++)for(let I=0;I<2*(S-P)-1;I++){let x=Math.floor(I/2);I%2===0?(d(T[P][x+1]),d(T[P+1][x]),d(T[P][x])):(d(T[P][x+1]),d(T[P+1][x+1]),d(T[P+1][x]))}}function c(M){let v=new E;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let M=new E;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let _=g(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;a.push(_,1-L)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){let v=a[M+0],_=a[M+2],L=a[M+4],S=Math.max(v,_,L),T=Math.min(v,_,L);S>.9&&T<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){let _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){let M=new E,v=new E,_=new E,L=new E,S=new ot,T=new ot,P=new ot;for(let I=0,x=0;I<r.length;I+=9,x+=6){M.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),S.set(a[x+0],a[x+1]),T.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),L.copy(M).add(v).add(_).divideScalar(3);let R=g(L);y(S,x+0,M,R),y(T,x+2,v,R),y(P,x+4,_,R)}}function y(M,v,_,L){L<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ze=class extends Er{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Er().fromJSON(s))}return this}},Z0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=Q0(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ms(r,a,e,o,l,p,0),a}};function yh(i,t,e,n,s){let r,a;if(s===hm(i,t,e,n)>0)for(r=t;r<e;r+=n)a=zc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=zc(r,i[r],i[r+1],a);return a&&Vr(a,a.next)&&(bs(a),a=a.next),a}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||me(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ms(i,t,e,n,s,r,a){if(!i)return;!a&&r&&sm(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?J0(i,n,s,r):$0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),bs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=K0(fi(i),t,e),Ms(i,t,e,n,s,r,2)):a===2&&j0(i,t,e,n,s,r):Ms(fi(i),t,e,n,s,r,1);break}}}function $0(i){let t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Oi(s,o,r,l,a,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function J0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,f=Ho(p,m,t,e,n),M=Ho(y,g,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=f&&_&&_.z<=M;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Oi(o,h,l,u,c,d,v.x,v.y)&&me(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Oi(o,h,l,u,c,d,_.x,_.y)&&me(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Oi(o,h,l,u,c,d,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Oi(o,h,l,u,c,d,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function K0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Vr(s,r)&&vh(s,n,n.next,r)&&ws(s,r)&&ws(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),bs(n),bs(n.next),n=i=r),n=n.next}while(n!==i);return fi(n)}function j0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&om(a,o)){let l=Ch(a,o);a=fi(a,a.next),l=fi(l,l.next),Ms(a,t,e,n,s,r,0),Ms(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Q0(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=yh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(am(c));for(s.sort(tm),r=0;r<s.length;r++)e=em(s[r],e);return e}function tm(i,t){return i.x-t.x}function em(i,t){let e=nm(i,t);if(!e)return t;let n=Ch(e,i);return fi(n,n.next),fi(e,e.next)}function nm(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Oi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ws(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&im(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function im(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function sm(i,t,e,n){let s=i;do s.z===0&&(s.z=Ho(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rm(s)}function rm(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Ho(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function am(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Oi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function om(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!lm(i,t)&&(ws(i,t)&&ws(t,i)&&cm(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Vr(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vr(i,t){return i.x===t.x&&i.y===t.y}function vh(i,t,e,n){let s=ir(me(i,t,e)),r=ir(me(i,t,n)),a=ir(me(e,n,i)),o=ir(me(e,n,t));return!!(s!==r&&a!==o||s===0&&nr(i,e,t)||r===0&&nr(i,n,t)||a===0&&nr(e,i,n)||o===0&&nr(e,t,n))}function nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ir(i){return i>0?1:i<0?-1:0}function lm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ws(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function cm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ch(i,t){let e=new Vo(i.i,i.x,i.y),n=new Vo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zc(i,t,e,n){let s=new Vo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var qn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hc(t),Vc(n,t);let a=t.length;e.forEach(Hc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Vc(n,e[l]);let o=Z0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Hc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var _n=class i extends He{constructor(t=new Ze([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:dm,v,_=!1,L,S,T,P;f&&(v=f.getSpacedPoints(h),_=!0,d=!1,L=f.computeFrenetFrames(h,!1),S=new E,T=new E,P=new E),d||(g=0,p=0,m=0,y=0);let I=o.extractPoints(c),x=I.shape,R=I.holes;if(!qn.isClockWise(x)){x=x.reverse();for(let j=0,st=R.length;j<st;j++){let b=R[j];qn.isClockWise(b)&&(R[j]=b.reverse())}}let O=qn.triangulateShape(x,R),H=x;for(let j=0,st=R.length;j<st;j++){let b=R[j];x=x.concat(b)}function J(j,st,b){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(st,b)}let V=x.length,it=O.length;function G(j,st,b){let Pt,tt,vt,ct=j.x-st.x,Ut=j.y-st.y,xt=b.x-j.x,w=b.y-j.y,A=ct*ct+Ut*Ut,F=ct*w-Ut*xt;if(Math.abs(F)>Number.EPSILON){let Y=Math.sqrt(A),Q=Math.sqrt(xt*xt+w*w),Z=st.x-Ut/Y,bt=st.y+ct/Y,ft=b.x-w/Q,yt=b.y+xt/Q,qt=((ft-Z)*w-(yt-bt)*xt)/(ct*w-Ut*xt);Pt=Z+ct*qt-j.x,tt=bt+Ut*qt-j.y;let nt=Pt*Pt+tt*tt;if(nt<=2)return new ot(Pt,tt);vt=Math.sqrt(nt/2)}else{let Y=!1;ct>Number.EPSILON?xt>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?xt<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(w)&&(Y=!0),Y?(Pt=-Ut,tt=ct,vt=Math.sqrt(A)):(Pt=ct,tt=Ut,vt=Math.sqrt(A/2))}return new ot(Pt/vt,tt/vt)}let ht=[];for(let j=0,st=H.length,b=st-1,Pt=j+1;j<st;j++,b++,Pt++)b===st&&(b=0),Pt===st&&(Pt=0),ht[j]=G(H[j],H[b],H[Pt]);let At=[],Mt,zt=ht.concat();for(let j=0,st=R.length;j<st;j++){let b=R[j];Mt=[];for(let Pt=0,tt=b.length,vt=tt-1,ct=Pt+1;Pt<tt;Pt++,vt++,ct++)vt===tt&&(vt=0),ct===tt&&(ct=0),Mt[Pt]=G(b[Pt],b[vt],b[ct]);At.push(Mt),zt=zt.concat(Mt)}for(let j=0;j<g;j++){let st=j/g,b=p*Math.cos(st*Math.PI/2),Pt=m*Math.sin(st*Math.PI/2)+y;for(let tt=0,vt=H.length;tt<vt;tt++){let ct=J(H[tt],ht[tt],Pt);lt(ct.x,ct.y,-b)}for(let tt=0,vt=R.length;tt<vt;tt++){let ct=R[tt];Mt=At[tt];for(let Ut=0,xt=ct.length;Ut<xt;Ut++){let w=J(ct[Ut],Mt[Ut],Pt);lt(w.x,w.y,-b)}}}let te=m+y;for(let j=0;j<V;j++){let st=d?J(x[j],zt[j],te):x[j];_?(T.copy(L.normals[0]).multiplyScalar(st.x),S.copy(L.binormals[0]).multiplyScalar(st.y),P.copy(v[0]).add(T).add(S),lt(P.x,P.y,P.z)):lt(st.x,st.y,0)}for(let j=1;j<=h;j++)for(let st=0;st<V;st++){let b=d?J(x[st],zt[st],te):x[st];_?(T.copy(L.normals[j]).multiplyScalar(b.x),S.copy(L.binormals[j]).multiplyScalar(b.y),P.copy(v[j]).add(T).add(S),lt(P.x,P.y,P.z)):lt(b.x,b.y,u/h*j)}for(let j=g-1;j>=0;j--){let st=j/g,b=p*Math.cos(st*Math.PI/2),Pt=m*Math.sin(st*Math.PI/2)+y;for(let tt=0,vt=H.length;tt<vt;tt++){let ct=J(H[tt],ht[tt],Pt);lt(ct.x,ct.y,u+b)}for(let tt=0,vt=R.length;tt<vt;tt++){let ct=R[tt];Mt=At[tt];for(let Ut=0,xt=ct.length;Ut<xt;Ut++){let w=J(ct[Ut],Mt[Ut],Pt);_?lt(w.x,w.y+v[h-1].y,v[h-1].x+b):lt(w.x,w.y,u+b)}}}$(),rt();function $(){let j=s.length/3;if(d){let st=0,b=V*st;for(let Pt=0;Pt<it;Pt++){let tt=O[Pt];Dt(tt[2]+b,tt[1]+b,tt[0]+b)}st=h+g*2,b=V*st;for(let Pt=0;Pt<it;Pt++){let tt=O[Pt];Dt(tt[0]+b,tt[1]+b,tt[2]+b)}}else{for(let st=0;st<it;st++){let b=O[st];Dt(b[2],b[1],b[0])}for(let st=0;st<it;st++){let b=O[st];Dt(b[0]+V*h,b[1]+V*h,b[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function rt(){let j=s.length/3,st=0;wt(H,st),st+=H.length;for(let b=0,Pt=R.length;b<Pt;b++){let tt=R[b];wt(tt,st),st+=tt.length}n.addGroup(j,s.length/3-j,1)}function wt(j,st){let b=j.length;for(;--b>=0;){let Pt=b,tt=b-1;tt<0&&(tt=j.length-1);for(let vt=0,ct=h+g*2;vt<ct;vt++){let Ut=V*vt,xt=V*(vt+1),w=st+Pt+Ut,A=st+tt+Ut,F=st+tt+xt,Y=st+Pt+xt;kt(w,A,F,Y)}}}function lt(j,st,b){l.push(j),l.push(st),l.push(b)}function Dt(j,st,b){Ft(j),Ft(st),Ft(b);let Pt=s.length/3,tt=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);Jt(tt[0]),Jt(tt[1]),Jt(tt[2])}function kt(j,st,b,Pt){Ft(j),Ft(st),Ft(Pt),Ft(st),Ft(b),Ft(Pt);let tt=s.length/3,vt=M.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Jt(vt[0]),Jt(vt[1]),Jt(vt[3]),Jt(vt[1]),Jt(vt[2]),Jt(vt[3])}function Ft(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Jt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return um(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sr[s.type]().fromJSON(s)),new i(n,t.options)}},dm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-u),new ot(d,1-m),new ot(y,1-f)]:[new ot(o,1-l),new ot(h,1-u),new ot(p,1-m),new ot(g,1-f)]}};function um(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Tr=class i extends zo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Rr=class i extends He{constructor(t=new Ze([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,m=d.holes;qn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let M=m[g];qn.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=qn.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let M=m[g];p=p.concat(M)}for(let g=0,f=p.length;g<f;g++){let M=p[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,f=y.length;g<f;g++){let M=y[g],v=M[0]+u,_=M[1]+u,L=M[2]+u;n.push(v,_,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function fm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var An=class i extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],m=[],y=[],g=[];for(let f=0;f<=n;f++){let M=[],v=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let S=L/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(S+_,1-v),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let v=h[f][M+1],_=h[f][M],L=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&p.push(v,_,S),(f!==n-1||l<Math.PI)&&p.push(_,L,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fe=class i extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let y=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let y=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,M=(s+1)*p+m;a.push(y,g,M),a.push(g,f,M)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ss=class i extends He{constructor(t=new wr(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new ot,h=new E,u=[],d=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function y(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),M(),f()}function g(v){h=t.getPointAt(v/e,h);let _=a.normals[v],L=a.binormals[v];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,P=Math.sin(T),I=-Math.cos(T);l.x=I*_.x+P*L.x,l.y=I*_.y+P*L.y,l.z=I*_.z+P*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let L=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),T=(s+1)*v+_,P=(s+1)*(v-1)+_;m.push(L,S,P),m.push(S,T,P)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Sr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var oe=class extends di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function sr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Go=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gl:r=t,o=2*e-n;break;case Wl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gl:a=t,l=2*n-e;break;case Wl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,f=-d*g+2*d*y-d*m,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-p)*g+(1.5+p)*y+.5*m,_=p*g-p*y;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+M*a[c+L]+v*a[l+L]+_*a[u+L];return r}},Wo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Xo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sr(e,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sr(t.times,Array),values:sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Go(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case xo:e=this.InterpolantFactoryMethodLinear;break;case na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&pm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===na,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=xo;var pi=class extends cn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=hr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends cn{};qo.prototype.ValueTypeName="color";var Yo=class extends cn{};Yo.prototype.ValueTypeName="number";var Zo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)$n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pr=class extends cn{InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends cn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=hr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends cn{};$o.prototype.ValueTypeName="vector";var Gc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Jo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},gm=new Jo,Es=class{constructor(t){this.manager=t!==void 0?t:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ko=class extends Es{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Gc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=As("img");function l(){h(),Gc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Lr=class extends Es{constructor(t){super(t)}load(t,e,n,s){let r=new We,a=new Ko(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ts=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Dr=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},La=new ge,Wc=new E,Xc=new E,Ur=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wc),Xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xc),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qc=new ge,ls=new E,Da=new E,jo=class extends Ur{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),Da.copy(n.position),Da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Da),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}},Nr=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Qo=class extends Ur{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Qo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Or=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Yc(){return performance.now()}var pl="\\[\\]\\.:\\/",mm=new RegExp("["+pl+"]","g"),gl="[^"+pl+"]",_m="[^"+pl.replace("\\.","")+"]",Am=/((?:WC+[\/:])*)/.source.replace("WC",gl),xm=/(WCOD+)?/.source.replace("WCOD",_m),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),Cm=new RegExp("^"+Am+xm+ym+vm+"$"),Im=["material","materials","bones","map"],tl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(t){let e=Cm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=tl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xm=new Float32Array(1);var Zc=new ge,kr=class{constructor(t,e,n=0,s=1/0){this.ray=new pr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(t,e=!0,n=[]){return el(t,this,n,e),n.sort($c),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)el(t[s],this,n,e);return n.sort($c),n}};function $c(i,t){return i.distance-t.distance}function el(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)el(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);var Mm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Pe=null,Gr=!1;function Ih(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function ml(){Ih(),Gr=!0;try{if(Pe||(Pe=document.createElement("audio"),Pe.src=Mm,Pe.loop=!0,Pe.preload="auto",Pe.setAttribute("playsinline",""),Pe.setAttribute("webkit-playsinline",""),Pe.setAttribute("x-webkit-airplay","deny"),Pe.volume=.01,Pe.addEventListener("pause",()=>{Gr&&!document.hidden&&setTimeout(()=>Gr&&Pe.paused&&Pe.play().catch(()=>{}),300)})),Pe.paused){let i=Pe.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function _l(){Gr=!1;try{Pe&&!Pe.paused&&Pe.pause()}catch{}}function Mh(i,t){Ih();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var le=i=>440*Math.pow(2,(i-69)/12),Al={tempo:112,chords:[[41,[65,69,72]],[46,[65,70,74]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,70]],[41,[65,69,72]]],melody:[[0,0,77],[0,2,81],[0,4,84],[0,6,81],[1,0,82],[1,3,79],[1,4,77],[2,0,79],[2,2,76],[2,4,72],[2,6,76],[3,0,77],[3,4,72],[4,0,74],[4,2,77],[4,4,81],[4,6,79],[5,0,77],[5,2,74],[5,4,70],[6,0,72],[6,2,76],[6,4,79],[6,6,82],[7,0,81],[7,4,77]],lead:"marimba",shaker:!0},Wr=class{constructor(t=Al){this.ctx=null,this.muted=!1,this.mode="off",this.theme=t}unlock(){if(ml(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Mh(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.34,this.musicBus.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.3;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.14,this.musicBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){_l(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){ml(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){if(this.mode===t&&!e||(this.mode=t,!this.ctx))return;this.step=0,this.nextTime=this.ctx.currentTime+.12;let n=this.musicOnly?1.6:1,s=(t==="calm"?.18:t==="menu"?.28:.34)*n;this.musicBus.gain.setTargetAtTime(s,this.ctx.currentTime,.3)}duck(t=2){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.mode==="calm"?.18:.34;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(.035,e,.06),this.musicBus.gain.setTargetAtTime(n,e+t,.4),this.sfx.gain.cancelScheduledValues(e),this.sfx.gain.setTargetAtTime(.45,e+.15,.08),this.sfx.gain.setTargetAtTime(.85,e+t,.3)}dispose(){clearInterval(this._timer),_l(),this.ctx&&this.ctx.close(),this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}lead(t,e,n,s=this.musicBus){let r=le(t);switch(this.theme.lead){case"bell":this.tone("sine",r,e,.9,n,s,.002),this.tone("sine",r*2.76,e,.25,n*.25,s,.002);break;case"pluck":this.tone("triangle",r,e,.28,n,s,.002),this.tone("sine",r*2,e,.12,n*.3,s,.002);break;case"flute":this.tone("sine",r,e,.45,n,s,.05),this.tone("triangle",r*2,e,.3,n*.08,s,.06);break;default:this.tone("sine",r,e,.35,n,s,.003),this.tone("sine",r*4,e,.05,n*.3,s,.002)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=this.theme,n=t.currentTime+.2,s=60/(this.mode==="menu"?e.tempo*.9:e.tempo)/2,r=e.chords.length,a=this.mode==="play";for(;this.nextTime<n;){let o=this.nextTime,l=this.step%(r*8),c=Math.floor(l/8),h=l%8,[u,d]=e.chords[c];(h===0||h===4)&&this.tone("triangle",le(u-(h===4?5:0)),o,s*1.6,.14,this.musicBus,.01),(h===2||h===6)&&d.forEach(m=>this.tone("sine",le(m-12),o,s*1.2,.022,this.musicBus,.004));let p=this.energy||0;if(this.suspense){let m=[0,4,7,4,9,7,4,2];h%2===0?this.tone("triangle",le(u+24+m[(this.step>>1)%8]),o,s*.55,.055,this.musicBus,.004):this.noise(o,.02,.03,"highpass",6500,1,this.musicBus),h===6&&this.tone("sine",le(u+31+c%4*2),o,s*1.6,.03,this.musicBus,.01)}else for(let[m,y,g]of e.melody)m===c&&y===h&&this.lead(g,o,(a?.075:.06)*(.65+.7*p));p>=.4&&h%2===0&&this.lead(d[h/2%d.length]+12,o+s*.5,.03*p),p>=.8&&(h===3||h===7)&&this.lead(d[2]+24,o,.025),e.shaker&&a&&h%2===1&&this.noise(o,.04,.012,"highpass",8e3,1,this.musicBus),this.step++,this.nextTime+=s}}setSuspense(t){this.suspense=!!t}play(t,e){if(!this.on||this.musicOnly)return;let n=this.ctx.currentTime+.005;switch(t){case"note":this.lead(e||79,n,.09,this.sfx);break;case"applause":{for(let r=0;r<150;r++){let a=n+Math.pow(Math.random(),1.5)*2.5;this.noise(a,.02+Math.random()*.025,.2+Math.random()*.14,"bandpass",1300+Math.random()*3e3,1.3,this.sfx),r%3===0&&this.noise(a,.05,.12,"lowpass",900,.8,this.sfx)}break}case"crowd":{let s=this.ctx;for(let r=0;r<6;r++){let a=n+r*.045+Math.random()*.08,o=s.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(250+r*28,a),o.frequency.exponentialRampToValueAtTime(430+r*36,a+.5);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=850,l.Q.value=4;let c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=1300,c.Q.value=5;let h=s.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(.07,a+.07),h.gain.exponentialRampToValueAtTime(1e-4,a+.75),o.connect(l),o.connect(c),l.connect(h),c.connect(h),h.connect(this.sfx),o.start(a),o.stop(a+.8)}break}case"fanfare":[72,76,79,84,88].forEach((s,r)=>{this.tone("triangle",le(s),n+r*.075,.38,.085),this.tone("square",le(s),n+r*.075,.18,.018),this.tone("sine",le(s)*2,n+r*.075,.3,.03)});break;case"yay":[72,76,79,84,88,91].forEach((s,r)=>{this.tone("triangle",le(s),n+r*.06,.4,.05),this.tone("sine",le(s)*2,n+r*.06,.2,.02)});break;case"tap":this.tone("sine",880,n,.06,.05);break;case"step":this.slide("sine",e?210:180,95,n,.11,.2),this.noise(n,.05,.12,"lowpass",1800,1),this.tone("triangle",e?900:780,n+.005,.045,.07);break;case"bump":this.slide("sine",260,150,n,.18,.13),this.slide("sine",320,200,n+.06,.14,.05);break;case"right":[[84,0],[88,.09],[91,.18]].forEach(([s,r])=>{this.tone("sine",le(s),n+r,.45,.08),this.tone("sine",le(s)*3,n+r,.08,.012)});break;case"wrong":this.tone("triangle",le(67),n,.18,.06),this.tone("triangle",le(64),n+.14,.26,.05);break;case"pop":this.slide("sine",900,300,n,.08,.12),this.noise(n,.05,.06,"bandpass",2500,2);break;case"sparkle":for(let s=0;s<6;s++)this.tone("sine",le(90+s*5%12),n+s*.045,.25,.03);break;case"star":[88,91,96,100].forEach((s,r)=>this.tone("sine",le(s),n+r*.07,.5,.05));break;case"whoosh":this.noise(n,.5,.09,"bandpass",500,.8,this.sfx,2600);break;case"page":this.noise(n,.25,.06,"bandpass",1800,.6,this.sfx,900);break;case"drop":this.tone("sine",520,n,.08,.1),this.tone("sine",780,n+.05,.12,.06),this.noise(n,.05,.04,"lowpass",900,1);break;case"splash":this.noise(n,.6,.12,"lowpass",3e3,.7,this.sfx,500);for(let s=0;s<4;s++)this.tone("sine",900+Math.random()*900,n+.05+s*.06,.08,.025);break;case"nibble":for(let s=0;s<5;s++)this.noise(n+s*.09,.05,.08,"bandpass",1200+s%2*500,2);break;case"squeak":this.slide("sine",1800,2600,n,.08,.05),this.slide("sine",2600,2e3,n+.08,.07,.04);break;case"cheer":[76,79,84,88].forEach((s,r)=>{this.tone("sine",le(s),n+r*.07,.35,.05),this.tone("sine",le(s)*2,n+r*.07,.12,.012)});break;case"hmm":this.tone("sine",le(67),n,.25,.05),this.tone("sine",le(64),n+.15,.3,.045);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.9]].forEach(([s,r])=>{this.tone("triangle",le(s),n+r,.5,.08),this.tone("sine",le(s)*2,n+r,.2,.02)});for(let s=0;s<10;s++)this.noise(n+.3+s*.05,.05,.025,"highpass",7500,1);break;case"roundWin":[[79,0],[84,.1],[88,.2],[91,.32]].forEach(([s,r])=>this.tone("sine",le(s),n+r,.4,.07));break;default:}}voice(t,e,n){t.forEach((s,r)=>{let a=e+r*.11;this.slide("sine",le(s)*.94,le(s),a,.12,n),this.slide("square",le(s)*.94,le(s),a,.1,n*.12)})}};function bh(i){return String(i).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu,"").replace(/\s+/g," ").trim()}function wh(i,t){let e=`${t==="en"?"en":"ar"}|${bh(i)}`,n=2166136261;for(let s of new TextEncoder().encode(e))n^=s,n=Math.imul(n,16777619)>>>0;return n.toString(16).padStart(8,"0")}var wm="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",Xr=class{constructor(t,e,n,s){if(this.dir=`${t}../learn_voice/`,this.lang=e==="en"?"en":"ar",this.fallback=n,this.onTalk=s||(()=>{}),this.queue=[],this.audio=null,this.muted=!1,this.el=null,this.tok=0,this.pending=null,this.unlocked=!1,typeof document!="undefined"&&document.addEventListener){let r=()=>this._gesture();for(let a of["pointerdown","touchend","click","keydown"])document.addEventListener(a,r,{capture:!0,passive:!0})}if(typeof document!="undefined"&&!window.__learnVoice&&!document.getElementById("learn-voice-manifest")){let r=document.createElement("script");r.id="learn-voice-manifest",r.src=`${this.dir}manifest.js`,r.onerror=()=>{window.__learnVoice=window.__learnVoice||{ar:[],en:[]}},document.head.append(r)}}_element(){return this.el||(this.el=new Audio,this.el.preload="auto"),this.el}_gesture(){let t=this._element();if(!this.unlocked&&!this.audio){this.unlocked=!0;try{t.src=wm;let n=t.play();n&&n.catch&&n.catch(()=>{this.unlocked=!1})}catch{this.unlocked=!1}}let e=this.pending;e&&e.run===this.run&&!this.audio&&(this.pending=null,this._play(e.text))}has(t){let e=typeof window!="undefined"&&window.__learnVoice;return!!(e&&e[this.lang]&&e[this.lang].includes(wh(t,this.lang)))}say(t,e,n){this.stop(),this.queue=(Array.isArray(t)?t:[t]).map(bh).filter(Boolean),this.i=0,this.onEach=e||null,this.onDone=n||null,this.run=(this.run||0)+1,!this.queue.length&&this.onDone?this.onDone():this._next()}_finish(){let t=this.onDone;this.onDone=null,t&&t()}_start(t){this.onEach&&this.onEach(t)}_next(t=0){if(this.muted){this._finish();return}if(!this.queue.length){this._finish();return}if(typeof window!="undefined"&&!window.__learnVoice&&t<8){let n=this.queue;setTimeout(()=>{this.queue===n&&this._next(t+1)},130);return}let e=this.queue.shift();if(!this.has(e)){let n=[e,...this.queue],s=n.join(this.lang==="en"?", ":"\u060C ");this.queue=[],this.onTalk(Math.min(8,1.2+s.length*.09)),this.fallback(s,this.lang);let r=Math.max(600,Math.min(1100,s.length*90/n.length)),a=this.run;n.forEach((o,l)=>setTimeout(()=>{a===this.run&&this._start(this.i+l)},l*r)),setTimeout(()=>{a===this.run&&this._finish()},n.length*r+300);return}this._start(this.i++),this._play(e)}_play(t){let e=this._element(),n=++this.tok;this.pending=null,this.audio=e,e.onloadedmetadata=()=>{this.tok===n&&this.onTalk((e.duration||2)+.3)},e.onended=()=>{this.tok===n&&this.audio===e&&(this.audio=null,this._next())},e.onerror=()=>{this.tok===n&&this.audio===e&&(this.audio=null,this.onTalk(Math.min(6,1.2+t.length*.09)),this.fallback(t,this.lang),this._next())},this.onTalk(2.5);try{e.src=`${this.dir}${this.lang}/${wh(t,this.lang)}.mp3`}catch{}let s=this.run,r=e.play();r&&r.catch&&r.catch(a=>{this.tok!==n||a&&a.name==="AbortError"||(this.audio=null,this.pending={text:t,run:s})})}stop(){if(this.run=(this.run||0)+1,this.queue=[],this.onDone=null,this.tok++,this.pending=null,this.audio){try{this.audio.pause()}catch{}this.audio=null}}};function $t(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var bm={back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Let's play"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],newStar_m:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643! \u2B50","A new star for you! \u2B50"],newStar_f:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643\u064A! \u2B50","A new star for you! \u2B50"],doneAgain_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],doneAgain_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],great_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],great_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],greatSay_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],greatSay_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],newStarSay_m:["\u062E\u062F\u062A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"],newStarSay_f:["\u062E\u062F\u062A\u064A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"]};function Sh(i,t){let e=t.lang==="en"?"en":"ar",n=t.gender==="girl",s={...bm,...i};return{t:o=>{let l=`${o}_${n?"f":"m"}`,c=s[l]?l:o;return s[c]?s[c][e==="en"?1:0]:o},num:o=>e==="en"?String(o):String(o).replace(/[0-9]/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]),lang:e,girl:n}}var Sm=`
.lk-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#3a2a5a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}
.lk-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.lk-layer{position:absolute;inset:0;pointer-events:none}
.lk-layer button,.lk-layer .lk-card,.lk-layer .lk-pe{pointer-events:auto}
.lk-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*2.4);right:calc(var(--u)*2.4);display:flex;align-items:center;justify-content:space-between;gap:calc(var(--u)*2)}
.lk-rbtn{width:calc(var(--u)*12);height:calc(var(--u)*12);min-width:48px;min-height:48px;border-radius:50%;border:calc(var(--u)*.7) solid #fff;background:linear-gradient(180deg,#9a6af0,#6a3ad0);color:#fff;font-size:calc(var(--u)*5.6);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #4a2a9a,0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,70,.35);padding:0;font-family:inherit}
.lk-rbtn:active,.lk-back:active{transform:translateY(calc(var(--u)*.5))}
.lk-back{height:max(52px,calc(var(--u)*12));border-radius:999px;border:calc(var(--u)*.8) solid #6a3ad0;background:#fff;color:#4a2a9a;font-family:inherit;font-weight:900;font-size:max(20px,calc(var(--u)*4.8));display:flex;align-items:center;gap:calc(var(--u)*1.2);padding:0 calc(var(--u)*3.4) 0 calc(var(--u)*2.2);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #4a2a9a,0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,70,.35)}
.lk-back b{font-size:1.3em;color:#6a3ad0;line-height:1}
.lk-back:focus-visible{outline:calc(var(--u)*.8) solid #3a8ae8;outline-offset:calc(var(--u)*.6)}
.lk-rbtn.y{background:linear-gradient(180deg,#ffd45a,#f5a01a);box-shadow:0 calc(var(--u)*.8) 0 #b8700a,0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,70,.35)}
.lk-dots{display:flex;gap:calc(var(--u)*1.4);background:rgba(255,255,255,.82);border:calc(var(--u)*.5) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*2.6);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(30,20,70,.25)}
.lk-dots span{font-size:calc(var(--u)*5);filter:grayscale(1);opacity:.35;transition:all .3s;line-height:1}
.lk-dots span.on{filter:none;opacity:1;transform:scale(1.15)}
.lk-bubble{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*15);left:50%;transform:translateX(-50%) scale(.9);max-width:86%;background:#fff;border:calc(var(--u)*.6) solid #ffd45a;border-radius:calc(var(--u)*5);padding:calc(var(--u)*1.6) calc(var(--u)*4.4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2.4) rgba(30,20,70,.25);opacity:0;transition:opacity .3s,transform .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lk-bubble.show{opacity:1;transform:translateX(-50%) scale(1)}
.lk-dim{position:absolute;inset:0;background:rgba(40,30,90,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.lk-card{background:#fffaf0;border:calc(var(--u)*.8) solid #ffd45a;border-radius:calc(var(--u)*6);padding:calc(var(--u)*4) calc(var(--u)*6);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(30,20,70,.4);animation:lk-in .45s cubic-bezier(.2,1.4,.4,1)}
@keyframes lk-in{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
.lk-title{font-size:calc(var(--u)*10);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #6a3ad0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #4a2a9a;text-align:center;line-height:1.15}
.lk-big{font-size:calc(var(--u)*14);line-height:1}
.lk-msg{font-size:calc(var(--u)*5);font-weight:900;color:#3aa86a;text-align:center}
.lk-small{font-size:calc(var(--u)*3.8);font-weight:700;color:#7a6a9a;text-align:center}
.lk-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.8) calc(var(--u)*6);min-height:max(52px,calc(var(--u)*11.5));cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.lk-btn.p{background:linear-gradient(180deg,#9a6af0,#6a3ad0);box-shadow:0 calc(var(--u)*.9) 0 #4a2a9a}
.lk-btn:active{transform:translateY(calc(var(--u)*.5))}
.lk-btn:focus-visible,.lk-rbtn:focus-visible{outline:calc(var(--u)*.8) solid #3a8ae8;outline-offset:calc(var(--u)*.6)}
.lk-starburst{font-size:calc(var(--u)*11);line-height:1;animation:lk-spin 1.6s ease-out}
@keyframes lk-spin{from{transform:scale(0) rotate(-180deg)}to{transform:scale(1) rotate(0)}}
.lk-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*24);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`,qr=class{constructor(t,e,n,s){this.el=t,this.cfg=e||{},this.post=n||(()=>{}),this.opts=s,this.T=Sh(s.text||{},this.cfg),this.age=Math.min(6,Math.max(3,Number(this.cfg.age)||5)),this.base=this.cfg.base||"./",this.done=!!this.cfg.done,this.save=this.cfg.save&&typeof this.cfg.save=="object"?{...this.cfg.save}:{},this.sound=new Wr(s.theme),s.musicOnly&&(this.sound.musicOnly=!0,this.opts.voice=!1),this.voice=new Xr(this.base,this.T.lang,(r,a)=>this.post({type:"speak",text:r,lang:a}),r=>this.sound.duck(r)),this.sound.muted=!!this.save.muted,document.getElementById("lk-style")||document.head.append($t("style",{id:"lk-style"},Sm)),this.root=$t("div",{class:"lk-root",dir:this.T.lang==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=$t("div",{class:"lk-layer"}),this.root.append(this.layer);for(let r of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(r,()=>this.sound.unlock(),{capture:!0,passive:!0});this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=$t("button",{class:"lk-soundpill",onclick:r=>{r.stopPropagation(),this.sound.unlock()}},this.T.t("sound")),this.root.append(this.soundPill),this._tapped=!1,this.root.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t)}t(t){return this.T.t(t)}setGender(t){this.cfg.gender=t==="girl"?"girl":"boy",this.T=Sh(this.opts.text||{},this.cfg)}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.onResize&&this.onResize(this.w,this.h)}async fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,2500))])}catch{}}speak(t,e,n){if(!t||this.opts.voice===!1){n&&n();return}this.voice.muted=this.sound.muted,this.voice.say(t,e,n)}round(t,e,n){t&&this.post({type:"round",skill:t,correct:!!e,detail:n==null?null:String(n)})}complete(){this.post({type:"complete"})}saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}exit(){this.saveNow(),this.post({type:"exit"})}clear(){this.layer.replaceChildren(),this.bubble=null}backBtn(){return $t("button",{class:"lk-rbtn","aria-label":this.t("back"),onclick:t=>{t.stopPropagation(),this.exit()}},this.T.lang==="en"?"\u2190":"\u2192")}soundBtn(){let t=$t("button",{class:"lk-rbtn y","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}topBar(t,e){let n=$t("div",{class:"lk-dots","aria-hidden":"true"},Array.from({length:t},()=>$t("span",{},e)));return this.layer.append($t("div",{class:"lk-top"},this.backBtn(),n,this.soundBtn())),this.bubble=$t("div",{class:"lk-bubble",role:"status"}),this.layer.append(this.bubble),s=>[...n.children].forEach((r,a)=>r.classList.toggle("on",a<s))}say(t,e,n=3.2){this.bubble&&(this.bubble.textContent=t,this.bubble.classList.add("show"),clearTimeout(this._bt),n>0&&(this._bt=setTimeout(()=>this.bubble&&this.bubble.classList.remove("show"),n*1e3)),e&&this.speak(e===!0?t:e))}titleCard(t,e,n,s=!1){this.clear(),this.sound.setMode("menu"),this.layer.append($t("div",{class:"lk-top"},this.backBtn(),$t("span"),this.soundBtn()));let r=$t("button",{class:"lk-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),n()}},"\u25B6 ",this.t("play"));s?this.layer.append($t("div",{class:"lk-dim",style:"background:none"},r)):this.layer.append($t("div",{class:"lk-dim",style:"background:none"},$t("div",{class:"lk-card"},$t("div",{class:"lk-title"},t),$t("div",{class:"lk-big"},e),r))),setTimeout(()=>r.focus({preventScroll:!0}),50)}finishCard(t,e,n,s,r){this.complete();let a=!this.done;this.done=!0,this.sound.play("win"),setTimeout(()=>this.sound.play("star"),900),this.speak(a?`${this.t("greatSay")} ${this.t("newStarSay")}`:this.t("doneAgain"));let o=$t("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),n()}},"\u21BB ",this.t("again"));this.layer.append($t("div",{class:"lk-dim"},$t("div",{class:"lk-card"},$t("div",{class:"lk-title",style:"font-size:calc(var(--u)*8)"},t),$t("div",{class:"lk-starburst"},a?"\u2B50":e),$t("div",{class:"lk-msg"},this.t("great")),$t("div",{class:"lk-small",style:"font-size:calc(var(--u)*4.6);color:#6a3ad0"},a?this.t("newStar"):this.t("doneAgain")),s?$t("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),s()}},this.t("nextLevel")):null,o,r?$t("button",{class:"lk-btn p",onclick:()=>{this.sound.play("tap"),r()}},this.t("levelsBtn")):null,$t("button",{class:"lk-btn p",onclick:()=>this.exit()},this.t("back"))))),setTimeout(()=>o.focus({preventScroll:!0}),50)}pause(){this.sound.suspend(),this.voice&&this.voice.stop()}dispose(){this.voice&&this.voice.stop(),clearInterval(this._pill),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}};var Yr=class extends Ji{constructor(){super();let t=new se;t.deleteAttribute("uv");let e=new oe({side:Re}),n=new oe,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ut(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ut(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ut(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ut(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ut(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ut(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ut(t,es(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new ut(t,es(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let m=new ut(t,es(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new ut(t,es(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new ut(t,es(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let f=new ut(t,es(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function es(i){let t=new Ie;return t.color.setScalar(i),t}function Eh(i,t,{env:e=.35,exposure:n=.95}={}){i.toneMapping=sl,i.toneMappingExposure=n;try{let s=new $i(i);t.environment=s.fromScene(new Yr,.04).texture,t.environmentIntensity=e,s.dispose()}catch{}}function $r(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"));let r=new ui(s);return r.colorSpace=ve,n&&(r.wrapS=r.wrapT=Xi,r.repeat.set(...n)),r}var Ai=(i,t={})=>new oe({color:i,roughness:.55,...t});var Zr=class{constructor(t,e={}){this.sh=t,this.o={bg:14676991,ground:14207144,fov:40,box:[5,3],dir:[0,.45,.9],target:[0,.8,0],...e},this.renderer=new vr({antialias:!0,powerPreference:"high-performance"}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=ve,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=il,t.root.prepend(this.renderer.domElement),this.scene=new Ji,Eh(this.renderer,this.scene),this.scene.background=new Yt(this.o.bg),this.camera=new Ne(this.o.fov,1,.1,120),this.scene.add(new Dr(16777215,this.o.ground,1.6));let n=new Fr(16774368,2);n.position.set(-3,9,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:34}),this.scene.add(n),this.fx=[],this.picks=[],this.focus=null,this.mode="title",this.clock=new Or,this.frames=[],t.onResize=(s,r)=>this.resize(s,r),this.resize(t.w,t.h),this._bind(),this._loop()}add(...t){return this.scene.add(...t),t[0]}resize(t,e){var u;let n=this.renderer;n.setSize(t,e,!1),n.domElement.style.width="100%",n.domElement.style.height="100%";let s=this.camera;s.aspect=t/e,s.updateProjectionMatrix();let r=Math.tan(dh.degToRad(s.fov/2)),a=this.o.wide&&s.aspect>=((u=this.o.wide.minAspect)!=null?u:1.45)?this.o.wide:null,o=a?a.box:this.o.box,l=Math.max(o[1]/r,o[0]/(r*s.aspect)),c=new E(...this.o.dir).normalize(),h=new E(...a?a.target:this.o.target);s.position.copy(h).addScaledVector(c,l),s.lookAt(h)}setPicks(t,e){this.picks=t,this.onPick=e,this.focus!=null&&this.focus>=t.length&&(this.focus=null)}_bind(){let t=this.sh.root;this._up=e=>{if(this.mode!=="wait"||!this.picks.length||e.target.closest("button")||e.target.closest(".lk-dim"))return;let n=t.getBoundingClientRect(),s=new ot((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new kr;r.setFromCamera(s,this.camera);let a=r.intersectObjects(this.picks.map(o=>o.hit),!1)[0];a&&this.onPick(a.object.userData.id)},t.addEventListener("pointerup",this._up),this._key=e=>{var s;if(this.mode!=="wait"||!this.picks.length)return;let n=this.picks.length;e.key==="ArrowLeft"||e.key==="ArrowRight"?(e.preventDefault(),this.focus=(((s=this.focus)!=null?s:e.key==="ArrowRight"?-1:0)+(e.key==="ArrowRight"?1:-1)+n)%n,this.sh.sound.play("tap")):(e.key==="Enter"||e.key===" ")&&this.focus!=null&&(e.preventDefault(),this.onPick(this.picks[this.focus].hit.userData.id))},window.addEventListener("keydown",this._key)}focusedId(){return this.focus!=null&&this.picks[this.focus]?this.picks[this.focus].hit.userData.id:null}sparkle(t,e=22){let n=[16734810,16763194,4892927,7002218,16777215];for(let s=0;s<e;s++){let r=new ut(new Tr(.06),new Ie({color:n[s%5]}));r.position.copy(t);let a=Math.random()*Math.PI*2;r.userData={v:new E(Math.cos(a)*1.5,2+Math.random()*2,Math.sin(a)*1.2),life:1},this.scene.add(r),this.fx.push(r)}}onFrame(t){this.frames.push(t)}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;for(let n of this.frames)n(t,e);for(let n=this.fx.length-1;n>=0;n--){let s=this.fx[n],r=s.userData;r.life-=t,r.v.y-=6*t,s.position.addScaledVector(r.v,t),r.life<=0&&(this.scene.remove(s),s.geometry.dispose(),this.fx.splice(n,1))}this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._key),this.sh.root.removeEventListener("pointerup",this._up),this.renderer.dispose()}};var xl=new Map;function et(i,t=.45){let e=`${i}|${t}`;return xl.has(e)||xl.set(e,new oe({color:i,roughness:t,metalness:.02})),xl.get(e)}function Ee(i,t,e=0,n=0,s=0){let r=new ut(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var St=(i,t,e,n,s,r=1,a=1,o=1,l=18)=>{let c=Ee(new An(i,l,Math.max(10,l-4)),t,e,n,s);return c.scale.set(r,a,o),c},xe=(i,t,e,n,s,r,a,o=18)=>Ee(new ln(i,t,e,o),n,s,r,a),be=(i,t,e,n,s,r,a)=>Ee(new se(i,t,e),n,s,r,a),Jn=1710628,xn=16777215;function yl(i,t,e,n,s=1,r=.08){for(let a of[-1,1])i.add(St(.045*s,et(xn,.3),t+a*r*s,e,n)),i.add(St(.026*s,et(Jn,.2),t+a*r*s,e,n+.03*s)),i.add(St(.009*s,et(xn,.2),t+a*r*s+.01*s,e+.012*s,n+.05*s))}function Jr(i,t,e,n,s=.6){let r=St(.09,et(3848266,.5),t,e,n,1,.35,.6);r.rotation.z=s,i.add(r)}var vl={apple(i){i.add(St(.34,et(15216682,.35),0,.34,0,1,.92,1)),i.add(xe(.02,.025,.14,et(6961690),0,.7,0)),Jr(i,.08,.72,0),i.add(St(.06,et(16777215,.2),-.13,.48,.24,1,1.4,.5))},banana(i){let t=new Ki([new E(-.38,.42,0),new E(-.2,.18,0),new E(.1,.12,0),new E(.36,.34,0)]),e=Ee(new Ss(t,24,.11,12),et(16765498,.4));i.add(e),i.add(St(.05,et(6965786),-.4,.45,0)),i.add(St(.04,et(4864538),.38,.37,0))},orange(i){i.add(St(.33,et(16747034,.5),0,.33,0)),i.add(xe(.015,.02,.06,et(4880938),0,.66,0)),Jr(i,.06,.66,0,.3)},strawberry(i){let t=Ee(new mn(.3,.5,18),et(15738938,.4),0,.3,0);t.rotation.x=Math.PI,i.add(t),i.add(St(.3,et(15738938,.4),0,.5,0,1,.45,1));for(let e=0;e<14;e++){let n=e*2.4,s=.25+e%4*.07,r=.22-(.55-s)*.2;i.add(St(.018,et(16769658,.3),Math.cos(n)*r,s,Math.sin(n)*r))}for(let e=0;e<5;e++){let n=St(.1,et(3848266),Math.cos(e*1.26)*.12,.62,Math.sin(e*1.26)*.12,1,.25,.5);n.rotation.y=-e*1.26,i.add(n)}},pear(i){i.add(St(.3,et(11065402,.45),0,.3,0)),i.add(St(.2,et(11065402,.45),0,.58,0)),i.add(xe(.02,.025,.12,et(6961690),.02,.8,0)),Jr(i,.1,.8,0)},grapes(i){let t=et(9059032,.3),e=0;for(let[n,s,r]of[[4,.62,.16],[4,.46,.14],[3,.31,.1],[1,.17,0]]){for(let a=0;a<n;a++){let o=a/n*Math.PI*2+e;i.add(St(.1,t,Math.cos(o)*r,s,Math.sin(o)*r))}e+=.5}i.add(xe(.02,.02,.14,et(6965786),0,.78,0)),Jr(i,.1,.8,0)},watermelon(i){let t=new Ze;t.absarc(0,0,.42,0,Math.PI,!1);let e=new _n(t,{depth:.18,bevelEnabled:!1,curveSegments:24});e.translate(0,0,-.09);let n=Ee(e,et(2791994));n.rotation.x=Math.PI,n.position.y=.44,i.add(n);let s=new Ze;s.absarc(0,0,.36,0,Math.PI,!1);let r=Ee(new _n(s,{depth:.2,bevelEnabled:!1,curveSegments:24}),et(16730714));r.geometry.translate(0,0,-.1),r.rotation.x=Math.PI,r.position.y=.44,i.add(r);for(let[a,o]of[[-.18,.3],[0,.22],[.18,.3],[-.08,.36],[.1,.36]])i.add(St(.025,et(Jn),a,o,.105,1,1.5,.5))},ball(i){i.add(St(.34,et(16777215,.3),0,.34,0));let t=Ee(new Fe(.34,.06,10,36),et(16726602,.3),0,.34,0);i.add(t);let e=Ee(new Fe(.34,.06,10,36),et(3836671,.3),0,.34,0);e.rotation.y=Math.PI/2,i.add(e);let n=Ee(new Fe(.34,.06,10,36),et(16765498,.3),0,.34,0);n.rotation.x=Math.PI/2,i.add(n)},teddy(i){let t=et(13141066,.8),e=et(15779984,.8);i.add(St(.22,t,0,.26,0,1,1.05,.9)),i.add(St(.14,e,0,.25,.14,1,1.1,.6)),i.add(St(.19,t,0,.6,0)),i.add(St(.08,e,0,.56,.16,1,.8,.8)),i.add(St(.03,et(Jn),0,.58,.23));for(let s of[-1,1])i.add(St(.07,t,s*.15,.76,0)),i.add(St(.04,e,s*.15,.76,.04)),i.add(St(.025,et(Jn,.2),s*.07,.65,.17)),i.add(St(.08,t,s*.22,.32,.06)),i.add(St(.09,t,s*.13,.07,.08,1,.8,1.2));let n=St(.05,et(16726634),0,.44,.17,2,.8,.6);i.add(n)},blocks(i){let t=[16730698,4892927,16762938];[[-.18,.13,0],[.18,.13,.02],[0,.39,0]].forEach(([e,n,s],r)=>{let a=be(.26,.26,.26,et(t[r],.4),e,n,s);a.rotation.y=(r-1)*.2,i.add(a);let o=be(.14,.14,.01,et(xn,.4),e,n,s+.135);o.rotation.y=a.rotation.y,i.add(o)})},drum(i){i.add(xe(.3,.3,.34,et(15220778,.4),0,.2,0,24)),i.add(xe(.31,.31,.04,et(16765498,.3),0,.38,0,24)),i.add(xe(.31,.31,.04,et(16765498,.3),0,.03,0,24)),i.add(xe(.29,.29,.02,et(16315626,.6),0,.4,0,24));for(let t=0;t<6;t++){let e=t/6*Math.PI*2,n=xe(.012,.012,.36,et(xn),Math.cos(e)*.3,.2,Math.sin(e)*.3,6);n.rotation.z=t%2?.5:-.5,i.add(n)}for(let t of[-1,1]){let e=xe(.02,.02,.42,et(14198890),t*.14,.55,.05,8);e.rotation.z=t*.8,i.add(e),i.add(St(.04,et(14198890),t*.3,.7,.05))}},yoyo(i){for(let e of[-1,1]){let n=xe(.3,.3,.1,et(e<0?3852456:16739e3,.35),0,.32,e*.08,24);n.rotation.x=Math.PI/2,i.add(n)}let t=xe(.08,.08,.08,et(xn),0,.32,0);t.rotation.x=Math.PI/2,i.add(t),i.add(xe(.008,.008,.4,et(xn),0,.68,0,6)),i.add(St(.04,et(16765498),0,.88,0))},cat(i){let t=et(16754762,.7);i.add(St(.22,t,0,.24,-.05,1,.95,1.1)),i.add(St(.18,t,0,.52,.12));for(let n of[-1,1]){let s=Ee(new mn(.07,.13,12),t,n*.1,.68,.1);s.rotation.z=-n*.25,i.add(s),i.add(St(.06,t,n*.12,.05,.12,1,.7,1.3))}yl(i,0,.55,.26,1,.065),i.add(St(.025,et(16743066),0,.49,.29));let e=Ee(new Ss(new Ki([new E(0,.2,-.3),new E(.1,.35,-.42),new E(.05,.55,-.38)]),12,.04,8),t);i.add(e);for(let n=0;n<3;n++)i.add(be(.12,.02,.01,et(14186538),0,.62+n*.03-.03,.29-n*.02))},fish(i){let t=et(16747050,.35);i.add(St(.26,t,0,.36,0,.6,.85,1.3));let e=Ee(new mn(.18,.24,4),t,0,.36,-.42);e.rotation.x=-Math.PI/2,e.scale.set(.3,1,1.2),i.add(e);for(let s of[-.08,.1])i.add(St(.2,et(xn,.4),0,.36,s,.62,.84,.12));for(let s of[-1,1])i.add(St(.05,et(xn,.3),s*.14,.42,.2)),i.add(St(.028,et(Jn),s*.17,.42,.22));let n=Ee(new mn(.1,.18,4),t,0,.6,-.05);n.scale.set(.2,1,1),i.add(n)},chick(i){let t=et(16767034,.6);i.add(St(.22,t,0,.24,0)),i.add(St(.16,t,0,.5,.04)),yl(i,0,.53,.17,.9,.06);let e=Ee(new mn(.04,.09,8),et(16747034),0,.48,.21);e.rotation.x=Math.PI/2,i.add(e);for(let n of[-1,1]){let s=St(.1,t,n*.2,.26,0,.4,.8,1);s.rotation.z=n*.4,i.add(s),i.add(be(.06,.02,.1,et(16747034),n*.07,.01,.06))}i.add(St(.04,t,0,.68,.02,.6,1.2,.6))},bunny(i){let t=et(16052468,.8);i.add(St(.22,t,0,.24,-.02,1,.95,1.05)),i.add(St(.16,t,0,.5,.1));for(let e of[-1,1]){let n=St(.06,t,e*.07,.78,.06,.8,2.6,.6);n.rotation.z=-e*.12,i.add(n),i.add(St(.035,et(16754880),e*.07,.78,.1,.8,2.2,.4)),i.add(St(.06,t,e*.1,.04,.14,1,.6,1.4))}yl(i,0,.53,.23,.85,.06),i.add(St(.025,et(16747176),0,.47,.26)),i.add(St(.07,t,0,.22,-.26))},frog(i){let t=et(5949498,.45);i.add(St(.26,t,0,.2,0,1.1,.75,1));for(let n of[-1,1])i.add(St(.1,t,n*.12,.38,.1)),i.add(St(.065,et(xn,.3),n*.12,.42,.16)),i.add(St(.035,et(Jn),n*.12,.43,.21)),i.add(St(.09,t,n*.24,.05,.12,1,.4,1.4));let e=Ee(new Fe(.1,.012,6,16,Math.PI),et(2779674),0,.24,.24);e.rotation.z=Math.PI,i.add(e),i.add(St(.18,et(13168778,.5),0,.13,.08,1,.5,1))},car(i){i.add(be(.74,.22,.4,et(15216682,.3),0,.22,0)),i.add(be(.4,.2,.36,et(15216682,.3),-.05,.42,0));for(let t of[-1,1])i.add(be(.17,.14,.37,et(10148095,.1),-.05+t*.1,.43,0));for(let t of[-.24,.24])for(let e of[-.21,.21]){let n=xe(.1,.1,.07,et(Jn,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n),i.add(xe(.045,.045,.075,et(14211296,.3),t,.1,e).rotateX(Math.PI/2))}for(let t of[-.12,.12])i.add(St(.035,et(16773800,.2),.37,.25,t));i.rotation.y=-Math.PI/2},bus(i){i.add(be(.86,.42,.4,et(16761402,.35),0,.33,0));for(let t=0;t<4;t++)for(let e of[-1,1])i.add(be(.15,.12,.01,et(10148095,.1),-.3+t*.19,.42,e*.205));i.add(be(.01,.16,.3,et(10148095,.1),.435,.42,0)),i.add(be(.88,.04,.41,et(3816010),0,.22,0));for(let t of[-.28,.28])for(let e of[-.21,.21]){let n=xe(.09,.09,.07,et(Jn,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n)}i.rotation.y=-Math.PI/2},boat(i){let t=new Ze;t.moveTo(-.42,.2),t.lineTo(.42,.2),t.lineTo(.3,0),t.lineTo(-.3,0),t.closePath();let e=Ee(new _n(t,{depth:.3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),et(3832552,.35),0,.02,-.15);i.add(e),i.add(be(.86,.04,.32,et(xn,.4),0,.22,0)),i.add(xe(.015,.015,.62,et(9067050),0,.53,0,8));let n=new Ze;n.moveTo(0,0),n.lineTo(.3,0),n.lineTo(0,.5),n.closePath();let s=Ee(new Rr(n),new oe({color:16734810,side:Be,roughness:.6}),.02,.28,0);i.add(s),i.rotation.y=-Math.PI/2},plane(i){let t=et(16053498,.3),e=xe(.1,.07,.8,t,0,.32,0);e.rotation.z=Math.PI/2,i.add(e),i.add(St(.1,t,.4,.32,0,1,1,1)),i.add(be(.22,.03,.86,et(3836671,.35),.02,.3,0)),i.add(be(.12,.02,.32,et(3836671,.35),-.36,.34,0)),i.add(be(.12,.18,.02,et(16730698,.35),-.36,.44,0));for(let s=0;s<3;s++)for(let r of[-1,1])i.add(St(.025,et(6998271,.1),.1-s*.12,.37,r*.09));let n=be(.02,.26,.04,et(3816010),.5,.32,0);i.add(n),i.userData.prop=n,i.rotation.y=-Math.PI/2},train(i){i.add(be(.5,.3,.36,et(3852394,.35),-.12,.25,0)),i.add(be(.26,.24,.36,et(15220778,.35),-.24,.52,0)),i.add(be(.18,.1,.38,et(10148095,.1),-.24,.56,0));let t=xe(.14,.14,.36,et(3832552,.35),.24,.27,0);t.rotation.z=Math.PI/2,i.add(t),i.add(xe(.05,.07,.18,et(3816010),.3,.48,0)),i.add(St(.06,et(16765498),.42,.27,0));for(let e of[-.26,0,.26])for(let n of[-.19,.19]){let s=xe(.09,.09,.05,et(16761402,.4),e,.1,n);s.rotation.x=Math.PI/2,i.add(s)}i.rotation.y=-Math.PI/2}},a_=Object.keys(vl);function Th(i){let t=new Ae,e=new Ae;return(vl[i]||vl.ball)(e),t.add(e),t.userData.id=i,t.userData.inner=e,t}function Rh(i,t=.34,e=.07){let n=new Ze;if(i==="circle")n.absarc(0,0,.72,0,Math.PI*2);else if(i==="square")n.moveTo(-.62+.14,-.62),n.lineTo(.62-.14,-.62),n.quadraticCurveTo(.62,-.62,.62,-.62+.14),n.lineTo(.62,.62-.14),n.quadraticCurveTo(.62,.62,.62-.14,.62),n.lineTo(-.62+.14,.62),n.quadraticCurveTo(-.62,.62,-.62,.62-.14),n.lineTo(-.62,-.62+.14),n.quadraticCurveTo(-.62,-.62,-.62+.14,-.62);else if(i==="triangle")n.moveTo(-.82,-.6),n.lineTo(.82,-.6),n.lineTo(0,.82),n.closePath();else if(i==="star"){for(let r=0;r<10;r++){let a=Math.PI/2+r*Math.PI/5,o=r%2?.42:.92,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else n.moveTo(0,-.78),n.bezierCurveTo(-.2,-.55,-.9,-.2,-.9,.28),n.bezierCurveTo(-.9,.7,-.35,.85,0,.4),n.bezierCurveTo(.35,.85,.9,.7,.9,.28),n.bezierCurveTo(.9,-.2,.2,-.55,0,-.78);let s=new _n(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:4,curveSegments:20});return s.center(),s}var Cl={ambulance:[220,130],ant:[340,280],apple:[180,190],banana:[210,180],bee:[320,240],boat:[230,170],boy_idle:[410,810],boy_point:[310,490],boy_read:[260,430],boy_wave:[352,490],brachio:[400,298],bus:[200,130],butterfly:[270,230],car:[220,110],carrot:[190,190],cat:[310,410],cat2:[410,450],caterpillar:[380,240],cheetah:[490,440],chick:[340,340],clownfish:[320,250],cow:[492,472],cow2:[470,470],crab:[400,310],croc:[340,490],croc2:[440,260],dog:[280,420],dog2:[400,440],dolphin:[420,340],dragonfly:[1010,640],elephant:[380,460],elephant2:[520,470],firetruck:[230,140],frog:[156,256],giraffe:[300,500],giraffe2:[310,520],girl_cheer:[300,470],girl_idle:[430,840],girl_stand_read:[280,490],girl_wave:[332,490],goose:[270,410],grapes:[150,200],grasshopper:[400,250],helicopter:[280,140],hen:[300,380],horse:[450,470],iguana:[440,240],ladybug:[300,190],lion:[280,480],lion2:[360,450],mallard:[320,340],mango:[190,200],mantis:[360,250],monkey:[420,450],octopus:[430,330],orange:[164,176],owl:[490,532],owlbrown:[260,330],panda:[380,430],parrot:[370,330],peacock:[430,340],penguin:[330,350],pig:[410,450],pigeon:[300,320],pineapple:[130,230],plane:[250,150],police:[240,140],rabbit:[360,450],seahorse:[210,340],shark:[460,290],sheep:[222,350],sheep2:[430,430],snake:[360,270],starfish:[320,320],stego:[480,268],strawberry:[144,190],tiger:[430,450],tortoise:[390,230],train:[280,150],trex:[450,288],triceratops:[390,290],turtle:[450,310],watermelon:[210,164],zebra:[440,490],fox:[1040,1020],camel:[1040,1020],sun:[992,1020],rose:[1040,1028],pomegranate:[1040,1028],rocket:[992,1028],ball:[1040,1020],crow:[1040,1020],envelope:[992,1020],lemon:[1040,1028],crescent:[1040,1028],corn:[992,1048],rabbit_n:[1040,1020],duck_n:[1040,1020],banana_n:[992,1020],apple_n:[1040,1028],clownfish_n:[1040,1028],butterfly_n:[992,1028],cat_n:[1040,1020],horse_n:[1040,1020],sheep_n:[992,1020],hen_n:[1040,1028],bee_n:[1040,1028],giraffe_n:[992,1048],windmill_p:[800,900],house_p:[1120,760],tree_oak:[890,900],tree_apple:[664,800],tuft_1:[430,350],tuft_2:[450,350],tuft_3:[450,350],lotus_p:[740,400],fence_p:[1120,370],hay_p:[1020,580],stones_p:[1100,250],flowers_p:[1040,510],frog_n:[1536,1024],plane_n:[1536,1024],grapes_n:[1536,1044],dove_n:[1536,1024],butterfly_1:[480,380],butterfly_2:[460,440],butterfly_3:[430,360],bird_blue:[820,670],bird_yellow:[900,710],ladybug_leaf:[1e3,630],barn_f:[1080,810],silo_f:[470,790],pump_f:[490,780],gate_f:[970,400],hayroll_f:[530,490],haystack_f:[520,470],trough_f:[620,390],scarecrow_f:[550,680],tractor_f:[860,660],crate_apple:[550,490],crate_carrot:[530,510],crate_corn:[540,490],sunflower_1:[390,610],sunflower_2:[440,530],b_clown:[1084,1084],b_tang:[1084,1084],b_yellowfish:[1084,1084],b_octopus:[1084,1084],b_crab_walk:[1084,1084],b_gull_fly:[1084,1084],b_shell:[828,742],b_spiral:[828,742],b_starfish:[828,742],b_crab:[828,742],b_jelly:[828,742],b_turtle:[828,742],b_dolphin:[828,742],b_gull:[828,742],b_gull_fly2:[828,742],b_coral:[828,742],b_ball:[828,742],b_ring:[828,742],b_palm1:[828,742],b_palm2:[828,742],b_umbrella:[828,742],b_castle:[828,742],b_lighthouse:[828,742],b_boat:[828,742],b_dock:[828,742],b_chair:[828,742],b_rocks:[828,742],b_weed:[828,742],b_surf:[828,742],b_bucket:[828,742],f_pad_stump:[1596,1084],f_pad_hay:[1596,1084],f_pad_nest:[1596,1084],f_pad_plank:[1596,1084],f_coop:[828,742],f_eggs:[828,742],f_milk:[828,742],f_barrow:[828,742],f_water_can:[828,742],f_sign:[828,742],f_bucket:[828,742],f_stool:[828,742],f_barrels:[828,742],f_post:[828,742],f_haypile:[828,742],f_birdhouse:[828,742],f_cow:[916,940],f_pig:[600,760],f_horse:[860,980],f_sheep:[692,840],f_goat:[680,1060],f_donkey:[720,1080],f_rooster:[680,1040],f_hen:[740,960],s_pad_moon:[1596,1084],s_pad_energy:[1566,1084],s_pad_metal:[1596,1054],s_pad_crystal:[1566,1054],s_alien:[828,1084],s_robot:[828,1084],s_cat:[828,1084],s_dog:[798,1084],s_shoot:[828,1054],s_rocket:[828,1054],s_helmet:[828,1054],s_comet:[798,1054],s_launch:[828,742],s_ufo:[828,742],s_station:[828,742],s_rock:[798,742],s_crystal:[828,742],s_dish:[828,742],s_rover:[828,742],s_ringplanet:[798,742],s_blueplanet:[828,714],s_pinkplanet:[828,714],s_star:[828,714],s_moon:[798,714],k_tower:[828,742],k_gate:[828,742],k_wall:[828,742],k_stall:[798,742],k_well:[828,742],k_chest:[828,742],k_banner:[828,742],k_catapult:[798,742],k_cannon:[828,714],k_shield:[828,714],k_cottage:[828,714],k_torch:[798,714],k_knight:[828,1084],k_princess:[828,1084],k_king:[828,1084],k_queen:[798,1084],k_dragon:[828,1054],k_horse:[828,1054],k_jester:[828,1054],k_wizard:[798,1054],k_pad_stone:[1596,1084],k_pad_velvet:[1566,1084],k_pad_shield:[1596,1054],k_pad_gold:[1566,1054],w_pine1:[828,742],w_pine2:[828,742],w_snowman:[828,742],w_igloo:[798,742],w_cabin:[828,742],w_sled:[828,742],w_snowballs:[828,742],w_iceblock:[798,742],w_crystal:[828,714],w_pond:[940,748],w_sign:[880,748],w_skis:[880,748],w_penguin:[828,1084],w_bear:[828,1084],w_fox:[820,960],w_rabbit:[798,1084],w_owl:[828,1054],w_reindeer:[828,1054],w_seal:[980,900],w_chick:[798,1054],w_pad_ice:[1596,1084],w_pad_snow:[1566,1084],w_pad_log:[1596,1054],w_pad_crystal:[1566,1054],c_pad_manhole:[1596,1084],c_pad_tire:[1566,1084],c_pad_round:[1596,1054],c_pad_cone:[1560,1088],c_schoolbus:[828,742],c_firetruck:[828,742],c_ambulance:[828,742],c_police:[798,742],c_citybus:[828,742],c_taxi:[828,742],c_train:[828,742],c_tram:[798,742],c_bulldozer:[828,714],c_bike:[828,714],c_heli:[828,714],c_plane:[798,714],c_skyscraper:[828,742],c_house:[828,742],c_school:[828,742],c_hospital:[798,742],c_firestation:[828,742],c_light:[828,742],c_busstop:[828,742],c_lamp:[798,742],c_bench:[828,714],c_tree:[828,714],c_mailbox:[828,714],c_fountain:[798,714],r_pad_candy:[1596,1084],r_pad_cloud:[1566,1084],r_pad_rainbow:[1596,1054],r_pad_cookie:[1566,1054],r_unicorn:[828,1084],r_butterfly:[840,700],r_ladybug:[900,660],r_kite:[798,1084],r_pinwheel:[828,1054],r_star:[828,1054],r_sun:[828,1054],r_cloud:[798,1054],r_rainbow:[880,680],r_lolli:[828,742],r_cotton:[828,742],r_carousel:[798,742],r_slide:[828,742],r_swing:[828,742],r_seesaw:[828,742],r_balloons:[798,742],r_icecream:[600,800],r_candy:[828,714],r_cupcake:[828,714],r_gingerhouse:[798,714],u_pinktube:[828,742],u_orangecoral:[828,742],u_brain:[828,742],u_weed:[798,742],u_rocks:[828,742],u_chest:[828,742],u_wreck:[828,742],u_anchor:[798,742],u_arch:[828,714],u_clam:[828,714],u_anemone:[828,714],u_barrel:[798,714],u_clown:[828,742],u_tang:[828,742],u_yellowfish:[828,742],u_octopus:[798,742],u_turtle:[828,742],u_dolphin:[828,742],u_seahorse:[828,742],u_crab:[798,742],u_star:[828,714],u_jelly:[828,714],u_whale:[800,718],u_puffer:[798,714],u_pad_sand:[1596,1084],u_pad_shell:[1566,1084],u_pad_coral:[1596,1054],u_pad_pearl:[1566,1054],j_tree:[828,742],j_palm:[828,742],j_leaf:[828,742],j_banana:[798,742],j_mango:[828,742],j_hut:[828,742],j_bridge:[828,742],j_rocks:[798,742],j_vine:[828,714],j_flower:[828,714],j_mushroom:[828,714],j_totem:[798,714],j_pad_stump:[1596,1084],j_pad_lily:[1566,1084],j_pad_stone:[1596,1054],j_pad_bamboo:[1566,1054],j_monkey:[828,742],j_lion:[828,742],j_elephant:[828,742],j_giraffe:[798,742],j_zebra:[828,742],j_parrot:[828,742],j_frog:[828,742],j_tiger:[798,742],j_toucan:[828,714],j_gorilla:[828,714],j_chameleon:[828,714],j_snake:[798,714],d_pyramid:[850,580],d_pyramid2:[828,742],d_palm:[828,742],d_cactus:[798,742],d_dune:[828,742],d_oasis:[828,742],d_tent:[880,580],d_jar:[798,742],d_cart:[828,714],d_well:[828,714],d_flower:[828,714],d_lantern:[798,714],d_camel:[828,742],d_babycamel:[828,742],d_fox:[828,742],d_scorpion:[798,742],d_lizard:[828,742],d_snake:[828,742],d_hawk:[828,742],d_horse:[798,742],d_donkeycart:[828,714],d_jeep:[828,714],d_balloon:[828,714],d_boat:[798,714],d_pad_stone:[1596,1084],d_pad_carpet:[1566,1084],d_pad_clay:[1596,1054],d_pad_wood:[1566,1054],h_bed:[828,742],h_toothbrush:[828,742],h_sink:[828,742],h_towel:[798,742],h_backpack:[828,742],h_shoes:[828,742],h_wardrobe:[828,742],h_table:[798,742],h_broom:[828,714],h_bin:[828,714],h_clock:[828,714],h_toybox:[798,714],h_fence:[828,742],h_tulips:[828,742],h_wateringcan:[828,742],h_swing:[798,742],h_tree:[720,760],h_birdbath:[828,742],h_gnome:[500,720],h_mailbox:[798,742],h_doghouse:[828,714],h_bike:[790,640],h_ball:[828,714],h_plant:[798,714],v_tomato:[828,742],v_cucumber:[828,742],v_potato:[828,742],v_onion:[798,742],v_eggplant:[828,742],v_pepper:[828,742],v_lettuce:[828,742],v_broccoli:[798,742],v_peas:[828,714],v_pumpkin:[828,714],v_garlic:[828,714],v_mushroom:[798,714],q_kiwi:[828,742],q_melon:[828,742],q_dates:[828,742],q_fig:[798,742],q_apricot:[828,742],q_berries:[828,742],q_plum:[828,742],q_avocado:[798,742],q_peach:[828,714],q_cherry:[828,714],q_olives:[828,714],q_coconut:[798,714],e_pencil:[828,742],e_book:[828,742],e_notebook:[828,742],e_scissors:[798,742],e_ruler:[828,742],e_eraser:[828,742],e_crayons:[828,742],e_board:[798,742],e_map:[828,714],e_glue:[828,714],e_desk:[828,714],e_paper:[798,714],l_shirt:[828,742],l_trousers:[828,742],l_dress:[828,742],l_hat:[798,742],l_socks:[828,742],l_jacket:[828,742],l_scarf:[828,742],l_gloves:[798,742],l_glasses:[828,714],l_cap:[828,714],l_pajamas:[828,714],l_raincoat:[798,714],y_eye:[828,742],y_ear:[828,742],y_nose:[828,742],y_mouth:[798,742],y_hand:[828,742],y_foot:[828,742],y_hair:[828,742],y_tooth:[798,742],y_head:[828,714],y_finger:[828,714],y_knee:[828,714],y_belly:[798,714],g_rectangle:[828,742],g_oval:[828,742],g_diamond:[828,742],g_hexagon:[798,742],g_pentagon:[828,742],g_arrow:[828,742],g_cube:[828,742],g_sphere:[798,742],g_cone:[828,714],g_cylinder:[828,714],g_ring:[828,714],g_heart:[798,714],a_mama:[828,742],a_baba:[828,742],a_grandma:[828,742],a_grandpa:[798,742],a_baby:[828,742],a_brother:[828,742],a_sister:[828,742],a_boy:[798,742],a_girl:[828,714],a_friends:[828,714],a_family:[828,714],a_uncle:[798,714],h_pad_rug:[1596,1084],h_pad_wood:[1566,1084],h_pad_stone:[1596,1054],h_pad_bath:[1566,1054],t_rain:[828,742],t_snow:[828,742],t_wind:[828,742],t_thunder:[798,742],t_lightning:[828,742],t_umbrella:[828,742],t_flake:[828,742],t_flower:[798,742],t_leaves:[828,714],t_hot:[828,714],t_cold:[828,714],t_mountain:[798,714],z_doctor:[828,742],z_teacher:[828,742],z_police:[828,742],z_firefighter:[798,742],z_farmer:[828,742],z_cook:[828,742],z_driver:[828,742],z_pilot:[798,742],z_nurse:[828,714],z_builder:[828,714],z_singer:[828,714],z_painter:[798,714],i_ant:[828,742],i_fly:[828,742],i_spider:[828,742],i_worm:[798,742],i_eagle:[798,800],i_peacock:[828,800],i_flamingo:[828,800],i_swan:[798,742],i_ostrich:[798,752],i_sparrow:[828,714],i_bat:[914,714],i_snail:[798,714],o_bread:[828,742],o_cheese:[828,742],o_egg:[828,742],o_milk:[798,742],o_rice:[828,742],o_chicken:[828,742],o_juice:[828,742],o_water:[798,742],o_cookie:[828,714],o_honey:[828,772],o_soup:[828,714],o_pizza:[798,714],m_drum:[828,742],m_guitar:[828,742],m_piano:[828,742],m_violin:[798,742],m_flute:[828,742],m_trumpet:[828,742],m_tambourine:[828,742],m_oud:[798,742],m_mic:[828,714],m_headphones:[828,714],m_note:[828,714],m_bell:[798,714]};var Tm={boy:{height:3.6,total:440,parts:{head:"boy_head",body:"boy_body",legL:"boy_leg_l",legR:"boy_leg_r",armDown:"boy_arm_down",armWave:"boy_arm_wave",armBend:"boy_arm_bend",armUp:"boy_arm_up",armPoint:"boy_arm_point2",eyeOpen:"boy_eye_open",eyeShut:"boy_eye_closed",mSmile:"boy_mouth_smile",mOpen:"boy_mouth_open",mLaugh:"boy_mouth_laugh",mO:"boy_mouth_o",mOh:"boy_mouth_oh",mFlat:"boy_mouth_flat"},hipL:[-20,172],hipR:[24,172],legLAnchor:[32,6],legRAnchor:[28,6],body:{at:[0,166],anchor:[59,128]},head:{at:[0,290],anchor:[68,146],eyeL:[-17,64],eyeR:[23,64],mouth:[4,26],eyeK:.62,mouthK:.65},shoulderL:[-46,264],shoulderR:[46,264],arm:{down:[12,10],wave:[14,26],bend:[12,10],up:[12,62],point:[10,16]}}};Tm.girl={height:3.5,total:420,parts:{head:"girl_head",body:"girl_body",legL:"girl_leg_l",legR:"girl_leg_r",armDown:"girl_arm_down",armWave:"girl_arm_wave",armBend:"girl_arm_bend",armUp:"girl_arm_wave",armPoint:"girl_arm_point",eyeOpen:"girl_eye_open",eyeShut:"girl_eye_closed",mSmile:"girl_mouth_smile",mOpen:"girl_mouth_open",mLaugh:"girl_mouth_laugh",mO:"girl_mouth_o",mOh:"girl_mouth_o",mFlat:"girl_mouth_flat"},hipL:[-16,150],hipR:[20,150],legLAnchor:[30,6],legRAnchor:[28,6],body:{at:[0,95],anchor:[65,175]},head:{at:[0,267],anchor:[74,155],eyeL:[24,98],eyeR:[72,98],mouth:[47,36],eyeK:.55,mouthK:.6,eyeAnchor:[30,26],mouthAnchor:[33,15]},shoulderL:[-51,234],shoulderR:[51,234],arm:{down:[12,12],wave:[14,28],bend:[12,12],up:[14,28],point:[10,18]}};var Ph=[{id:"monkey",thing:"j_monkey",letter:"qaaf",word:"\u0642\u0631\u062F",wd:"\u0642\u0650\u0631\u0652\u062F",the:"\u0627\u0644\u0642\u0631\u062F",thed:"\u0627\u0644\u0642\u0650\u0631\u0652\u062F",age:3},{id:"lion",thing:"j_lion",letter:"alef",word:"\u0623\u0633\u062F",wd:"\u0623\u064E\u0633\u064E\u062F",the:"\u0627\u0644\u0623\u0633\u062F",thed:"\u0627\u0644\u0623\u064E\u0633\u064E\u062F",age:3},{id:"elephant",thing:"j_elephant",letter:"faa",word:"\u0641\u064A\u0644",wd:"\u0641\u0650\u064A\u0644",the:"\u0627\u0644\u0641\u064A\u0644",thed:"\u0627\u0644\u0641\u0650\u064A\u0644",age:3},{id:"zebra",thing:"j_zebra",letter:"haa",word:"\u062D\u0645\u0627\u0631 \u0648\u062D\u0634\u064A",wd:"\u062D\u0650\u0645\u064E\u0627\u0631 \u0648\u064E\u062D\u0652\u0634\u0650\u064A",the:"\u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631 \u0627\u0644\u0648\u064E\u062D\u0652\u0634\u0650\u064A",age:5},{id:"parrot",thing:"j_parrot",letter:"baa",word:"\u0628\u0628\u063A\u0627\u0621",wd:"\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",age:4},{id:"tiger",thing:"j_tiger",letter:"noon",word:"\u0646\u0645\u0631",wd:"\u0646\u0650\u0645\u0650\u0631",the:"\u0627\u0644\u0646\u0645\u0631",thed:"\u0627\u0644\u0646\u0650\u0651\u0645\u0650\u0631",age:4},{id:"toucan",thing:"j_toucan",letter:"tah",word:"\u0637\u0648\u0642\u0627\u0646",wd:"\u0637\u064F\u0648\u0642\u064E\u0627\u0646",the:"\u0627\u0644\u0637\u0648\u0642\u0627\u0646",thed:"\u0627\u0644\u0637\u064F\u0651\u0648\u0642\u064E\u0627\u0646",age:6},{id:"gorilla",thing:"j_gorilla",letter:"ghayn",word:"\u063A\u0648\u0631\u064A\u0644\u0627",wd:"\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",the:"\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627",thed:"\u0627\u0644\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",age:5},{id:"chameleon",thing:"j_chameleon",letter:"haa",word:"\u062D\u0631\u0628\u0627\u0621",wd:"\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",the:"\u0627\u0644\u062D\u0631\u0628\u0627\u0621",thed:"\u0627\u0644\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",age:6},{id:"snake",thing:"j_snake",letter:"thaa",word:"\u062B\u0639\u0628\u0627\u0646",wd:"\u062B\u064F\u0639\u0652\u0628\u064E\u0627\u0646",the:"\u0627\u0644\u062B\u0639\u0628\u0627\u0646",thed:"\u0627\u0644\u062B\u064F\u0651\u0639\u0652\u0628\u064E\u0627\u0646",age:5},{id:"cow",thing:"f_cow",letter:"baa",word:"\u0628\u0642\u0631\u0629",wd:"\u0628\u064E\u0642\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0628\u0642\u0631\u0629",thed:"\u0627\u0644\u0628\u064E\u0642\u064E\u0631\u064E\u0629",age:3},{id:"pig",thing:"f_pig",letter:"khaa",word:"\u062E\u0646\u0632\u064A\u0631",wd:"\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",the:"\u0627\u0644\u062E\u0646\u0632\u064A\u0631",thed:"\u0627\u0644\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",age:4},{id:"goat",thing:"f_goat",letter:"meem",word:"\u0645\u0627\u0639\u0632",wd:"\u0645\u064E\u0627\u0639\u0650\u0632",the:"\u0627\u0644\u0645\u0627\u0639\u0632",thed:"\u0627\u0644\u0645\u064E\u0627\u0639\u0650\u0632",age:5},{id:"donkey",thing:"f_donkey",letter:"haa",word:"\u062D\u0645\u0627\u0631",wd:"\u062D\u0650\u0645\u064E\u0627\u0631",the:"\u0627\u0644\u062D\u0645\u0627\u0631",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631",age:4},{id:"rooster",thing:"f_rooster",letter:"dal",word:"\u062F\u064A\u0643",wd:"\u062F\u0650\u064A\u0643",the:"\u0627\u0644\u062F\u064A\u0643",thed:"\u0627\u0644\u062F\u0650\u0651\u064A\u0643",age:3},{id:"octopus",thing:"u_octopus",letter:"alef",word:"\u0623\u062E\u0637\u0628\u0648\u0637",wd:"\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",the:"\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",age:5},{id:"turtle",thing:"u_turtle",letter:"seen",word:"\u0633\u0644\u062D\u0641\u0627\u0629",wd:"\u0633\u064F\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",the:"\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629",thed:"\u0627\u0644\u0633\u064F\u0651\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",age:4},{id:"dolphin",thing:"u_dolphin",letter:"dal",word:"\u062F\u0648\u0644\u0641\u064A\u0646",wd:"\u062F\u064F\u0648\u0644\u0652\u0641\u0650\u064A\u0646",the:"\u0627\u0644\u062F\u0648\u0644\u0641\u064A\u0646",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u0652\u0641\u0650\u064A\u0646",age:5},{id:"whale",thing:"u_whale",letter:"haa",word:"\u062D\u0648\u062A",wd:"\u062D\u064F\u0648\u062A",the:"\u0627\u0644\u062D\u0648\u062A",thed:"\u0627\u0644\u062D\u064F\u0648\u062A",age:4},{id:"crab",thing:"u_crab",letter:"seen",word:"\u0633\u0631\u0637\u0627\u0646",wd:"\u0633\u064E\u0631\u064E\u0637\u064E\u0627\u0646",the:"\u0627\u0644\u0633\u0631\u0637\u0627\u0646",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u064E\u0637\u064E\u0627\u0646",age:5},{id:"starfish",thing:"u_star",letter:"noon",word:"\u0646\u062C\u0645\u0629 \u0628\u062D\u0631",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629 \u0628\u064E\u062D\u0652\u0631",the:"\u0646\u062C\u0645\u0629 \u0627\u0644\u0628\u062D\u0631",thed:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629\u0652 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:5},{id:"jellyfish",thing:"u_jelly",letter:"qaaf",word:"\u0642\u0646\u062F\u064A\u0644 \u0628\u062D\u0631",wd:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0628\u064E\u062D\u0652\u0631",the:"\u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631",thed:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"seahorse",thing:"u_seahorse",letter:"haa",word:"\u062D\u0635\u0627\u0646 \u0628\u062D\u0631",wd:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0628\u064E\u062D\u0652\u0631",the:"\u062D\u0635\u0627\u0646 \u0627\u0644\u0628\u062D\u0631",thed:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"penguin",thing:"w_penguin",letter:"baa",word:"\u0628\u0637\u0631\u064A\u0642",wd:"\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",the:"\u0627\u0644\u0628\u0637\u0631\u064A\u0642",thed:"\u0627\u0644\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",age:4},{id:"bear",thing:"w_bear",letter:"dal",word:"\u062F\u0628",wd:"\u062F\u064F\u0628\u0651",the:"\u0627\u0644\u062F\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0628\u0651",age:3},{id:"owl",thing:"w_owl",letter:"baa",word:"\u0628\u0648\u0645\u0629",wd:"\u0628\u064F\u0648\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u0648\u0645\u0629",thed:"\u0627\u0644\u0628\u064F\u0648\u0645\u064E\u0629",age:4},{id:"reindeer",thing:"w_reindeer",letter:"raa",word:"\u0631\u0646\u0629",wd:"\u0631\u064E\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0631\u0646\u0629",thed:"\u0627\u0644\u0631\u064E\u0651\u0646\u064E\u0651\u0629",age:6},{id:"seal",thing:"w_seal",letter:"faa",word:"\u0641\u0642\u0645\u0629",wd:"\u0641\u064F\u0642\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0641\u0642\u0645\u0629",thed:"\u0627\u0644\u0641\u064F\u0642\u0652\u0645\u064E\u0629",age:5},{id:"snowman",thing:"w_snowman",letter:"raa",word:"\u0631\u062C\u0644 \u062B\u0644\u062C",wd:"\u0631\u064E\u062C\u064F\u0644 \u062B\u064E\u0644\u0652\u062C",the:"\u0631\u062C\u0644 \u0627\u0644\u062B\u0644\u062C",thed:"\u0631\u064E\u062C\u064F\u0644 \u0627\u0644\u062B\u064E\u0651\u0644\u0652\u062C",age:5},{id:"pyramid",thing:"d_pyramid",letter:"haa2",word:"\u0647\u0631\u0645",wd:"\u0647\u064E\u0631\u064E\u0645",the:"\u0627\u0644\u0647\u0631\u0645",thed:"\u0627\u0644\u0647\u064E\u0631\u064E\u0645",age:4},{id:"tent",thing:"d_tent",letter:"khaa",word:"\u062E\u064A\u0645\u0629",wd:"\u062E\u064E\u064A\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062E\u064A\u0645\u0629",thed:"\u0627\u0644\u062E\u064E\u064A\u0652\u0645\u064E\u0629",age:4},{id:"palm",thing:"d_palm",letter:"noon",word:"\u0646\u062E\u0644\u0629",wd:"\u0646\u064E\u062E\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u062E\u0644\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062E\u0652\u0644\u064E\u0629",age:4},{id:"cactus",thing:"d_cactus",letter:"sad",word:"\u0635\u0628\u0627\u0631",wd:"\u0635\u064E\u0628\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0635\u0628\u0627\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0628\u064E\u0651\u0627\u0631",age:6},{id:"scorpion",thing:"d_scorpion",letter:"ayn",word:"\u0639\u0642\u0631\u0628",wd:"\u0639\u064E\u0642\u0652\u0631\u064E\u0628",the:"\u0627\u0644\u0639\u0642\u0631\u0628",thed:"\u0627\u0644\u0639\u064E\u0642\u0652\u0631\u064E\u0628",age:5},{id:"lizard",thing:"d_lizard",letter:"seen",word:"\u0633\u062D\u0644\u064A\u0629",wd:"\u0633\u0650\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u062D\u0644\u064A\u0629",thed:"\u0627\u0644\u0633\u0650\u0651\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",age:6},{id:"hawk",thing:"d_hawk",letter:"sad",word:"\u0635\u0642\u0631",wd:"\u0635\u064E\u0642\u0652\u0631",the:"\u0627\u0644\u0635\u0642\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0642\u0652\u0631",age:5},{id:"hotballoon",thing:"d_balloon",letter:"meem",word:"\u0645\u0646\u0637\u0627\u062F",wd:"\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",the:"\u0627\u0644\u0645\u0646\u0637\u0627\u062F",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",age:5},{id:"jeep",thing:"d_jeep",letter:"jeem",word:"\u062C\u064A\u0628",wd:"\u062C\u0650\u064A\u0628",the:"\u0627\u0644\u062C\u064A\u0628",thed:"\u0627\u0644\u062C\u0650\u064A\u0628",age:4},{id:"umbrella",thing:"b_umbrella",letter:"meem",word:"\u0645\u0638\u0644\u0629",wd:"\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u0638\u0644\u0629",thed:"\u0627\u0644\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",age:4},{id:"sandcastle",thing:"b_castle",letter:"qaaf",word:"\u0642\u0644\u0639\u0629",wd:"\u0642\u064E\u0644\u0652\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0644\u0639\u0629",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0639\u064E\u0629",age:4},{id:"shell",thing:"b_shell",letter:"sad",word:"\u0635\u062F\u0641\u0629",wd:"\u0635\u064E\u062F\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0635\u062F\u0641\u0629",thed:"\u0627\u0644\u0635\u064E\u0651\u062F\u064E\u0641\u064E\u0629",age:4},{id:"lighthouse",thing:"b_lighthouse",letter:"faa",word:"\u0641\u0646\u0627\u0631",wd:"\u0641\u064E\u0646\u064E\u0627\u0631",the:"\u0627\u0644\u0641\u0646\u0627\u0631",thed:"\u0627\u0644\u0641\u064E\u0646\u064E\u0627\u0631",age:6},{id:"bed",thing:"h_bed",letter:"seen",word:"\u0633\u0631\u064A\u0631",wd:"\u0633\u064E\u0631\u0650\u064A\u0631",the:"\u0627\u0644\u0633\u0631\u064A\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u0650\u064A\u0631",age:3},{id:"toothbrush",thing:"h_toothbrush",letter:"faa",word:"\u0641\u0631\u0634\u0627\u0629",wd:"\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",the:"\u0627\u0644\u0641\u0631\u0634\u0627\u0629",thed:"\u0627\u0644\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",age:5},{id:"sink",thing:"h_sink",letter:"haa",word:"\u062D\u0648\u0636",wd:"\u062D\u064E\u0648\u0652\u0636",the:"\u0627\u0644\u062D\u0648\u0636",thed:"\u0627\u0644\u062D\u064E\u0648\u0652\u0636",age:5},{id:"towel",thing:"h_towel",letter:"meem",word:"\u0645\u0646\u0634\u0641\u0629",wd:"\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0645\u0646\u0634\u0641\u0629",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",age:5},{id:"backpack",thing:"h_backpack",letter:"sheen",word:"\u0634\u0646\u0637\u0629",wd:"\u0634\u064E\u0646\u0652\u0637\u064E\u0629",the:"\u0627\u0644\u0634\u0646\u0637\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u0646\u0652\u0637\u064E\u0629",age:3},{id:"shoes",thing:"h_shoes",letter:"jeem",word:"\u062C\u0632\u0645\u0629",wd:"\u062C\u064E\u0632\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062C\u0632\u0645\u0629",thed:"\u0627\u0644\u062C\u064E\u0632\u0652\u0645\u064E\u0629",age:3},{id:"wardrobe",thing:"h_wardrobe",letter:"dal",word:"\u062F\u0648\u0644\u0627\u0628",wd:"\u062F\u064F\u0648\u0644\u064E\u0627\u0628",the:"\u0627\u0644\u062F\u0648\u0644\u0627\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u064E\u0627\u0628",age:5},{id:"table",thing:"h_table",letter:"taa",word:"\u062A\u0631\u0627\u0628\u064A\u0632\u0629",wd:"\u062A\u064E\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",the:"\u0627\u0644\u062A\u0631\u0627\u0628\u064A\u0632\u0629",thed:"\u0627\u0644\u062A\u064E\u0651\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",age:5},{id:"broom",thing:"h_broom",letter:"meem",word:"\u0645\u0643\u0646\u0633\u0629",wd:"\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u0643\u0646\u0633\u0629",thed:"\u0627\u0644\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",age:5},{id:"clock",thing:"h_clock",letter:"seen",word:"\u0633\u0627\u0639\u0629",wd:"\u0633\u064E\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u0639\u064E\u0629",age:4},{id:"swing",thing:"h_swing",letter:"alef",word:"\u0623\u0631\u062C\u0648\u062D\u0629",wd:"\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",the:"\u0627\u0644\u0623\u0631\u062C\u0648\u062D\u0629",thed:"\u0627\u0644\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",age:4},{id:"bike",thing:"h_bike",letter:"ayn",word:"\u0639\u062C\u0644\u0629",wd:"\u0639\u064E\u062C\u064E\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u062C\u0644\u0629",thed:"\u0627\u0644\u0639\u064E\u062C\u064E\u0644\u064E\u0629",age:4},{id:"tree",thing:"h_tree",letter:"sheen",word:"\u0634\u062C\u0631\u0629",wd:"\u0634\u064E\u062C\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0634\u062C\u0631\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u062C\u064E\u0631\u064E\u0629",age:3},{id:"school",thing:"c_school",letter:"meem",word:"\u0645\u062F\u0631\u0633\u0629",wd:"\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u062F\u0631\u0633\u0629",thed:"\u0627\u0644\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",age:4},{id:"hospital",thing:"c_hospital",letter:"meem",word:"\u0645\u0633\u062A\u0634\u0641\u0649",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",the:"\u0627\u0644\u0645\u0633\u062A\u0634\u0641\u0649",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",age:5},{id:"trafficlight",thing:"c_light",letter:"alef",word:"\u0625\u0634\u0627\u0631\u0629",wd:"\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0625\u0634\u0627\u0631\u0629",thed:"\u0627\u0644\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",age:5},{id:"fountain",thing:"c_fountain",letter:"noon",word:"\u0646\u0627\u0641\u0648\u0631\u0629",wd:"\u0646\u064E\u0627\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u0627\u0641\u064F\u0648\u0631\u064E\u0629",age:5},{id:"building",thing:"c_skyscraper",letter:"ayn",word:"\u0639\u0645\u0627\u0631\u0629",wd:"\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0645\u0627\u0631\u0629",thed:"\u0627\u0644\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",age:4},{id:"king",thing:"k_king",letter:"meem",word:"\u0645\u0644\u0643",wd:"\u0645\u064E\u0644\u0650\u0643",the:"\u0627\u0644\u0645\u0644\u0643",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643",age:4},{id:"queen",thing:"k_queen",letter:"meem",word:"\u0645\u0644\u0643\u0629",wd:"\u0645\u064E\u0644\u0650\u0643\u064E\u0629",the:"\u0627\u0644\u0645\u0644\u0643\u0629",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643\u064E\u0629",age:5},{id:"dragon",thing:"k_dragon",letter:"taa",word:"\u062A\u0646\u064A\u0646",wd:"\u062A\u0650\u0646\u0650\u0651\u064A\u0646",the:"\u0627\u0644\u062A\u0646\u064A\u0646",thed:"\u0627\u0644\u062A\u0650\u0651\u0646\u0650\u0651\u064A\u0646",age:4},{id:"knight",thing:"k_knight",letter:"faa",word:"\u0641\u0627\u0631\u0633",wd:"\u0641\u064E\u0627\u0631\u0650\u0633",the:"\u0627\u0644\u0641\u0627\u0631\u0633",thed:"\u0627\u0644\u0641\u064E\u0627\u0631\u0650\u0633",age:4},{id:"wizard",thing:"k_wizard",letter:"seen",word:"\u0633\u0627\u062D\u0631",wd:"\u0633\u064E\u0627\u062D\u0650\u0631",the:"\u0627\u0644\u0633\u0627\u062D\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u062D\u0650\u0631",age:5},{id:"treasure",thing:"k_chest",letter:"kaaf",word:"\u0643\u0646\u0632",wd:"\u0643\u064E\u0646\u0652\u0632",the:"\u0627\u0644\u0643\u0646\u0632",thed:"\u0627\u0644\u0643\u064E\u0646\u0652\u0632",age:4},{id:"alien",thing:"s_alien",letter:"faa",word:"\u0641\u0636\u0627\u0626\u064A",wd:"\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0641\u0636\u0627\u0626\u064A",thed:"\u0627\u0644\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",age:5},{id:"robot",thing:"s_robot",letter:"raa",word:"\u0631\u0648\u0628\u0648\u062A",wd:"\u0631\u064F\u0648\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0631\u0648\u0628\u0648\u062A",thed:"\u0627\u0644\u0631\u064F\u0651\u0648\u0628\u064F\u0648\u062A",age:4},{id:"moon",thing:"s_moon",letter:"qaaf",word:"\u0642\u0645\u0631",wd:"\u0642\u064E\u0645\u064E\u0631",the:"\u0627\u0644\u0642\u0645\u0631",thed:"\u0627\u0644\u0642\u064E\u0645\u064E\u0631",age:3},{id:"star",thing:"s_star",letter:"noon",word:"\u0646\u062C\u0645\u0629",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062C\u0652\u0645\u064E\u0629",age:3},{id:"planet",thing:"s_ringplanet",letter:"kaaf",word:"\u0643\u0648\u0643\u0628",wd:"\u0643\u064E\u0648\u0652\u0643\u064E\u0628",the:"\u0627\u0644\u0643\u0648\u0643\u0628",thed:"\u0627\u0644\u0643\u064E\u0648\u0652\u0643\u064E\u0628",age:5},{id:"balloon",thing:"r_balloons",letter:"baa",word:"\u0628\u0627\u0644\u0648\u0646",wd:"\u0628\u064E\u0627\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0627\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0644\u064F\u0648\u0646",age:3},{id:"cloud",thing:"r_cloud",letter:"seen",word:"\u0633\u062D\u0627\u0628\u0629",wd:"\u0633\u064E\u062D\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0633\u062D\u0627\u0628\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u062D\u064E\u0627\u0628\u064E\u0629",age:4},{id:"sweet",thing:"r_candy",letter:"haa",word:"\u062D\u0644\u0648\u0649",wd:"\u062D\u064E\u0644\u0652\u0648\u064E\u0649",the:"\u0627\u0644\u062D\u0644\u0648\u0649",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0648\u064E\u0649",age:4},{id:"cake",thing:"r_cupcake",letter:"kaaf",word:"\u0643\u0639\u0643\u0629",wd:"\u0643\u064E\u0639\u0652\u0643\u064E\u0629",the:"\u0627\u0644\u0643\u0639\u0643\u0629",thed:"\u0627\u0644\u0643\u064E\u0639\u0652\u0643\u064E\u0629",age:4},{id:"y_eye",thing:"y_eye",letter:"ayn",word:"\u0639\u064A\u0646",wd:"\u0639\u064E\u064A\u0652\u0646",the:"\u0627\u0644\u0639\u064A\u0646",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0646",age:3},{id:"y_ear",thing:"y_ear",letter:"waaw",word:"\u0648\u062F\u0646",wd:"\u0648\u0650\u062F\u0652\u0646",the:"\u0627\u0644\u0648\u062F\u0646",thed:"\u0627\u0644\u0648\u0650\u062F\u0652\u0646",age:3},{id:"y_nose",thing:"y_nose",letter:"alef",word:"\u0623\u0646\u0641",wd:"\u0623\u064E\u0646\u0652\u0641",the:"\u0627\u0644\u0623\u0646\u0641",thed:"\u0627\u0644\u0623\u064E\u0646\u0652\u0641",age:3},{id:"y_mouth",thing:"y_mouth",letter:"faa",word:"\u0641\u0645",wd:"\u0641\u064E\u0645",the:"\u0627\u0644\u0641\u0645",thed:"\u0627\u0644\u0641\u064E\u0645",age:3},{id:"y_hand",thing:"y_hand",letter:"alef",word:"\u0625\u064A\u062F",wd:"\u0625\u0650\u064A\u062F",the:"\u0627\u0644\u0625\u064A\u062F",thed:"\u0627\u0644\u0625\u0650\u064A\u062F",age:3},{id:"y_foot",thing:"y_foot",letter:"raa",word:"\u0631\u062C\u0644",wd:"\u0631\u0650\u062C\u0652\u0644",the:"\u0627\u0644\u0631\u062C\u0644",thed:"\u0627\u0644\u0631\u0651\u0650\u062C\u0652\u0644",age:3},{id:"y_hair",thing:"y_hair",letter:"sheen",word:"\u0634\u0639\u0631",wd:"\u0634\u064E\u0639\u0652\u0631",the:"\u0627\u0644\u0634\u0639\u0631",thed:"\u0627\u0644\u0634\u0651\u064E\u0639\u0652\u0631",age:4},{id:"y_tooth",thing:"y_tooth",letter:"seen",word:"\u0633\u0646\u0629",wd:"\u0633\u0650\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u0646\u0629",thed:"\u0627\u0644\u0633\u0651\u0650\u0646\u064E\u0651\u0629",age:4},{id:"y_head",thing:"y_head",letter:"raa",word:"\u0631\u0627\u0633",wd:"\u0631\u064E\u0627\u0633",the:"\u0627\u0644\u0631\u0627\u0633",thed:"\u0627\u0644\u0631\u0651\u064E\u0627\u0633",age:3},{id:"y_finger",thing:"y_finger",letter:"sad",word:"\u0635\u0628\u0627\u0639",wd:"\u0635\u064F\u0628\u064E\u0651\u0627\u0639",the:"\u0627\u0644\u0635\u0628\u0627\u0639",thed:"\u0627\u0644\u0635\u0651\u064F\u0628\u064E\u0651\u0627\u0639",age:4},{id:"y_knee",thing:"y_knee",letter:"raa",word:"\u0631\u0643\u0628\u0629",wd:"\u0631\u064F\u0643\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0631\u0643\u0628\u0629",thed:"\u0627\u0644\u0631\u0651\u064F\u0643\u0652\u0628\u064E\u0629",age:5},{id:"y_belly",thing:"y_belly",letter:"baa",word:"\u0628\u0637\u0646",wd:"\u0628\u064E\u0637\u0652\u0646",the:"\u0627\u0644\u0628\u0637\u0646",thed:"\u0627\u0644\u0628\u064E\u0637\u0652\u0646",age:5},{id:"l_shirt",thing:"l_shirt",letter:"qaaf",word:"\u0642\u0645\u064A\u0635",wd:"\u0642\u064E\u0645\u0650\u064A\u0635",the:"\u0627\u0644\u0642\u0645\u064A\u0635",thed:"\u0627\u0644\u0642\u064E\u0645\u0650\u064A\u0635",age:4},{id:"l_trousers",thing:"l_trousers",letter:"baa",word:"\u0628\u0646\u0637\u0644\u0648\u0646",wd:"\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",age:4},{id:"l_dress",thing:"l_dress",letter:"faa",word:"\u0641\u0633\u062A\u0627\u0646",wd:"\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",the:"\u0627\u0644\u0641\u0633\u062A\u0627\u0646",thed:"\u0627\u0644\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",age:4},{id:"l_hat",thing:"l_hat",letter:"qaaf",word:"\u0642\u0628\u0639\u0629",wd:"\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0628\u0639\u0629",thed:"\u0627\u0644\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",age:4},{id:"l_socks",thing:"l_socks",letter:"sheen",word:"\u0634\u0631\u0627\u0628",wd:"\u0634\u064F\u0631\u064E\u0651\u0627\u0628",the:"\u0627\u0644\u0634\u0631\u0627\u0628",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u064E\u0651\u0627\u0628",age:3},{id:"l_jacket",thing:"l_jacket",letter:"jeem",word:"\u062C\u0627\u0643\u062A",wd:"\u062C\u064E\u0627\u0643\u0650\u062A",the:"\u0627\u0644\u062C\u0627\u0643\u062A",thed:"\u0627\u0644\u062C\u064E\u0627\u0643\u0650\u062A",age:5},{id:"l_scarf",thing:"l_scarf",letter:"waaw",word:"\u0648\u0634\u0627\u062D",wd:"\u0648\u0650\u0634\u064E\u0627\u062D",the:"\u0627\u0644\u0648\u0634\u0627\u062D",thed:"\u0627\u0644\u0648\u0650\u0634\u064E\u0627\u062D",age:6},{id:"l_gloves",thing:"l_gloves",letter:"qaaf",word:"\u0642\u0641\u0627\u0632",wd:"\u0642\u064F\u0641\u064E\u0651\u0627\u0632",the:"\u0627\u0644\u0642\u0641\u0627\u0632",thed:"\u0627\u0644\u0642\u064F\u0641\u064E\u0651\u0627\u0632",age:6},{id:"l_glasses",thing:"l_glasses",letter:"noon",word:"\u0646\u0636\u0627\u0631\u0629",wd:"\u0646\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0636\u0627\u0631\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",age:5},{id:"l_cap",thing:"l_cap",letter:"kaaf",word:"\u0643\u0627\u0628",wd:"\u0643\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u0627\u0628",thed:"\u0627\u0644\u0643\u064E\u0627\u0628",age:4},{id:"l_pajamas",thing:"l_pajamas",letter:"baa",word:"\u0628\u064A\u062C\u0627\u0645\u0629",wd:"\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u062C\u0627\u0645\u0629",thed:"\u0627\u0644\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",age:4},{id:"l_raincoat",thing:"l_raincoat",letter:"meem",word:"\u0645\u0639\u0637\u0641",wd:"\u0645\u0650\u0639\u0652\u0637\u064E\u0641",the:"\u0627\u0644\u0645\u0639\u0637\u0641",thed:"\u0627\u0644\u0645\u0650\u0639\u0652\u0637\u064E\u0641",age:6},{id:"a_mama",thing:"a_mama",letter:"meem",word:"\u0645\u0627\u0645\u0627",wd:"\u0645\u064E\u0627\u0645\u064E\u0627",the:"\u0627\u0644\u0645\u0627\u0645\u0627",thed:"\u0627\u0644\u0645\u064E\u0627\u0645\u064E\u0627",age:3},{id:"a_baba",thing:"a_baba",letter:"baa",word:"\u0628\u0627\u0628\u0627",wd:"\u0628\u064E\u0627\u0628\u064E\u0627",the:"\u0627\u0644\u0628\u0627\u0628\u0627",thed:"\u0627\u0644\u0628\u064E\u0627\u0628\u064E\u0627",age:3},{id:"a_grandma",thing:"a_grandma",letter:"taa",word:"\u062A\u064A\u062A\u0629",wd:"\u062A\u0650\u064A\u062A\u064E\u0629",the:"\u0627\u0644\u062A\u064A\u062A\u0629",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u062A\u064E\u0629",age:3},{id:"a_grandpa",thing:"a_grandpa",letter:"jeem",word:"\u062C\u062F\u0648",wd:"\u062C\u064E\u062F\u064F\u0651\u0648",the:"\u0627\u0644\u062C\u062F\u0648",thed:"\u0627\u0644\u062C\u064E\u062F\u064F\u0651\u0648",age:3},{id:"a_baby",thing:"a_baby",letter:"tah",word:"\u0637\u0641\u0644",wd:"\u0637\u0650\u0641\u0652\u0644",the:"\u0627\u0644\u0637\u0641\u0644",thed:"\u0627\u0644\u0637\u0651\u0650\u0641\u0652\u0644",age:3},{id:"a_brother",thing:"a_brother",letter:"alef",word:"\u0623\u062E",wd:"\u0623\u064E\u062E",the:"\u0627\u0644\u0623\u062E",thed:"\u0627\u0644\u0623\u064E\u062E",age:4},{id:"a_sister",thing:"a_sister",letter:"alef",word:"\u0623\u062E\u062A",wd:"\u0623\u064F\u062E\u0652\u062A",the:"\u0627\u0644\u0623\u062E\u062A",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u062A",age:4},{id:"a_boy",thing:"a_boy",letter:"waaw",word:"\u0648\u0644\u062F",wd:"\u0648\u064E\u0644\u064E\u062F",the:"\u0627\u0644\u0648\u0644\u062F",thed:"\u0627\u0644\u0648\u064E\u0644\u064E\u062F",age:3},{id:"a_girl",thing:"a_girl",letter:"baa",word:"\u0628\u0646\u062A",wd:"\u0628\u0650\u0646\u0652\u062A",the:"\u0627\u0644\u0628\u0646\u062A",thed:"\u0627\u0644\u0628\u0650\u0646\u0652\u062A",age:3},{id:"a_friends",thing:"a_friends",letter:"sad",word:"\u0635\u062D\u0627\u0628",wd:"\u0635\u064F\u062D\u064E\u0627\u0628",the:"\u0627\u0644\u0635\u062D\u0627\u0628",thed:"\u0627\u0644\u0635\u0651\u064F\u062D\u064E\u0627\u0628",age:5},{id:"a_family",thing:"a_family",letter:"ayn",word:"\u0639\u064A\u0644\u0629",wd:"\u0639\u0650\u064A\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u064A\u0644\u0629",thed:"\u0627\u0644\u0639\u0650\u064A\u0644\u064E\u0629",age:5},{id:"a_uncle",thing:"a_uncle",letter:"ayn",word:"\u0639\u0645\u0648",wd:"\u0639\u064E\u0645\u064F\u0651\u0648",the:"\u0627\u0644\u0639\u0645\u0648",thed:"\u0627\u0644\u0639\u064E\u0645\u064F\u0651\u0648",age:5},{id:"o_bread",thing:"o_bread",letter:"ayn",word:"\u0639\u064A\u0634",wd:"\u0639\u064E\u064A\u0652\u0634",the:"\u0627\u0644\u0639\u064A\u0634",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0634",age:3},{id:"o_cheese",thing:"o_cheese",letter:"jeem",word:"\u062C\u0628\u0646\u0629",wd:"\u062C\u064F\u0628\u0652\u0646\u064E\u0629",the:"\u0627\u0644\u062C\u0628\u0646\u0629",thed:"\u0627\u0644\u062C\u064F\u0628\u0652\u0646\u064E\u0629",age:4},{id:"o_egg",thing:"o_egg",letter:"baa",word:"\u0628\u064A\u0636\u0629",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u0636\u0629",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0629",age:3},{id:"o_milk",thing:"o_milk",letter:"laam",word:"\u0644\u0628\u0646",wd:"\u0644\u064E\u0628\u064E\u0646",the:"\u0627\u0644\u0644\u0628\u0646",thed:"\u0627\u0644\u0644\u0651\u064E\u0628\u064E\u0646",age:3},{id:"o_rice",thing:"o_rice",letter:"raa",word:"\u0631\u0632",wd:"\u0631\u064F\u0632\u0651",the:"\u0627\u0644\u0631\u0632",thed:"\u0627\u0644\u0631\u0651\u064F\u0632\u0651",age:4},{id:"o_chicken",thing:"o_chicken",letter:"faa",word:"\u0641\u0631\u0627\u062E",wd:"\u0641\u0650\u0631\u064E\u0627\u062E",the:"\u0627\u0644\u0641\u0631\u0627\u062E",thed:"\u0627\u0644\u0641\u0650\u0631\u064E\u0627\u062E",age:5},{id:"o_juice",thing:"o_juice",letter:"ayn",word:"\u0639\u0635\u064A\u0631",wd:"\u0639\u064E\u0635\u0650\u064A\u0631",the:"\u0627\u0644\u0639\u0635\u064A\u0631",thed:"\u0627\u0644\u0639\u064E\u0635\u0650\u064A\u0631",age:4},{id:"o_water",thing:"o_water",letter:"meem",word:"\u0645\u064A\u0629",wd:"\u0645\u064E\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u064A\u0629",thed:"\u0627\u0644\u0645\u064E\u064A\u064E\u0651\u0629",age:3},{id:"o_cookie",thing:"o_cookie",letter:"baa",word:"\u0628\u0633\u0643\u0648\u062A",wd:"\u0628\u0650\u0633\u0652\u0643\u064F\u0648\u062A",the:"\u0627\u0644\u0628\u0633\u0643\u0648\u062A",thed:"\u0627\u0644\u0628\u0650\u0633\u0652\u0643\u064F\u0648\u062A",age:4},{id:"o_honey",thing:"o_honey",letter:"ayn",word:"\u0639\u0633\u0644",wd:"\u0639\u064E\u0633\u064E\u0644",the:"\u0627\u0644\u0639\u0633\u0644",thed:"\u0627\u0644\u0639\u064E\u0633\u064E\u0644",age:5},{id:"o_soup",thing:"o_soup",letter:"sheen",word:"\u0634\u0648\u0631\u0628\u0629",wd:"\u0634\u064F\u0648\u0631\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0634\u0648\u0631\u0628\u0629",thed:"\u0627\u0644\u0634\u0651\u064F\u0648\u0631\u0652\u0628\u064E\u0629",age:5},{id:"o_pizza",thing:"o_pizza",letter:"baa",word:"\u0628\u064A\u062A\u0632\u0627",wd:"\u0628\u0650\u064A\u062A\u0652\u0632\u064E\u0627",the:"\u0627\u0644\u0628\u064A\u062A\u0632\u0627",thed:"\u0627\u0644\u0628\u0650\u064A\u062A\u0652\u0632\u064E\u0627",age:4},{id:"q_kiwi",thing:"q_kiwi",letter:"kaaf",word:"\u0643\u064A\u0648\u064A",wd:"\u0643\u0650\u064A\u0648\u0650\u064A",the:"\u0627\u0644\u0643\u064A\u0648\u064A",thed:"\u0627\u0644\u0643\u0650\u064A\u0648\u0650\u064A",age:5},{id:"q_melon",thing:"q_melon",letter:"sheen",word:"\u0634\u0645\u0627\u0645",wd:"\u0634\u064E\u0645\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0634\u0645\u0627\u0645",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u064E\u0651\u0627\u0645",age:5},{id:"q_dates",thing:"q_dates",letter:"baa",word:"\u0628\u0644\u062D",wd:"\u0628\u064E\u0644\u064E\u062D",the:"\u0627\u0644\u0628\u0644\u062D",thed:"\u0627\u0644\u0628\u064E\u0644\u064E\u062D",age:5},{id:"q_fig",thing:"q_fig",letter:"taa",word:"\u062A\u064A\u0646",wd:"\u062A\u0650\u064A\u0646",the:"\u0627\u0644\u062A\u064A\u0646",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u0646",age:5},{id:"q_apricot",thing:"q_apricot",letter:"meem",word:"\u0645\u0634\u0645\u0634",wd:"\u0645\u0650\u0634\u0652\u0645\u0650\u0634",the:"\u0627\u0644\u0645\u0634\u0645\u0634",thed:"\u0627\u0644\u0645\u0650\u0634\u0652\u0645\u0650\u0634",age:5},{id:"q_berries",thing:"q_berries",letter:"taa",word:"\u062A\u0648\u062A",wd:"\u062A\u064F\u0648\u062A",the:"\u0627\u0644\u062A\u0648\u062A",thed:"\u0627\u0644\u062A\u0651\u064F\u0648\u062A",age:4},{id:"q_plum",thing:"q_plum",letter:"baa",word:"\u0628\u0631\u0642\u0648\u0642",wd:"\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0631\u0642\u0648\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",age:6},{id:"q_avocado",thing:"q_avocado",letter:"alef",word:"\u0623\u0641\u0648\u0643\u0627\u062F\u0648",wd:"\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",the:"\u0627\u0644\u0623\u0641\u0648\u0643\u0627\u062F\u0648",thed:"\u0627\u0644\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",age:6},{id:"q_peach",thing:"q_peach",letter:"khaa",word:"\u062E\u0648\u062E",wd:"\u062E\u064F\u0648\u062E",the:"\u0627\u0644\u062E\u0648\u062E",thed:"\u0627\u0644\u062E\u064F\u0648\u062E",age:5},{id:"q_cherry",thing:"q_cherry",letter:"kaaf",word:"\u0643\u0631\u0632",wd:"\u0643\u064E\u0631\u064E\u0632",the:"\u0627\u0644\u0643\u0631\u0632",thed:"\u0627\u0644\u0643\u064E\u0631\u064E\u0632",age:4},{id:"q_olives",thing:"q_olives",letter:"zayn",word:"\u0632\u064A\u062A\u0648\u0646",wd:"\u0632\u064E\u064A\u0652\u062A\u064F\u0648\u0646",the:"\u0627\u0644\u0632\u064A\u062A\u0648\u0646",thed:"\u0627\u0644\u0632\u0651\u064E\u064A\u0652\u062A\u064F\u0648\u0646",age:5},{id:"q_coconut",thing:"q_coconut",letter:"noon",word:"\u0646\u0627\u0631\u062C\u064A\u0644",wd:"\u0646\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",the:"\u0627\u0644\u0646\u0627\u0631\u062C\u064A\u0644",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",age:6},{id:"i_ant",thing:"i_ant",letter:"noon",word:"\u0646\u0645\u0644\u0629",wd:"\u0646\u064E\u0645\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u0645\u0644\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0645\u0652\u0644\u064E\u0629",age:4},{id:"i_fly",thing:"i_fly",letter:"dhal",word:"\u0630\u0628\u0627\u0628\u0629",wd:"\u0630\u064F\u0628\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0630\u0628\u0627\u0628\u0629",thed:"\u0627\u0644\u0630\u0651\u064F\u0628\u064E\u0627\u0628\u064E\u0629",age:6},{id:"i_spider",thing:"i_spider",letter:"ayn",word:"\u0639\u0646\u0643\u0628\u0648\u062A",wd:"\u0639\u064E\u0646\u0652\u0643\u064E\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A",thed:"\u0627\u0644\u0639\u064E\u0646\u0652\u0643\u064E\u0628\u064F\u0648\u062A",age:6},{id:"i_worm",thing:"i_worm",letter:"dal",word:"\u062F\u0648\u062F\u0629",wd:"\u062F\u064F\u0648\u062F\u064E\u0629",the:"\u0627\u0644\u062F\u0648\u062F\u0629",thed:"\u0627\u0644\u062F\u0651\u064F\u0648\u062F\u064E\u0629",age:4},{id:"i_eagle",thing:"i_eagle",letter:"noon",word:"\u0646\u0633\u0631",wd:"\u0646\u0650\u0633\u0652\u0631",the:"\u0627\u0644\u0646\u0633\u0631",thed:"\u0627\u0644\u0646\u0651\u0650\u0633\u0652\u0631",age:6},{id:"i_peacock",thing:"i_peacock",letter:"tah",word:"\u0637\u0627\u0648\u0648\u0633",wd:"\u0637\u064E\u0627\u0648\u064F\u0648\u0633",the:"\u0627\u0644\u0637\u0627\u0648\u0648\u0633",thed:"\u0627\u0644\u0637\u0651\u064E\u0627\u0648\u064F\u0648\u0633",age:6},{id:"i_flamingo",thing:"i_flamingo",letter:"faa",word:"\u0641\u0644\u0627\u0645\u0646\u062C\u0648",wd:"\u0641\u0650\u0644\u064E\u0627\u0645\u0650\u0646\u0652\u062C\u064F\u0648",the:"\u0627\u0644\u0641\u0644\u0627\u0645\u0646\u062C\u0648",thed:"\u0627\u0644\u0641\u0650\u0644\u064E\u0627\u0645\u0650\u0646\u0652\u062C\u064F\u0648",age:6},{id:"i_swan",thing:"i_swan",letter:"baa",word:"\u0628\u062C\u0639\u0629",wd:"\u0628\u064E\u062C\u064E\u0639\u064E\u0629",the:"\u0627\u0644\u0628\u062C\u0639\u0629",thed:"\u0627\u0644\u0628\u064E\u062C\u064E\u0639\u064E\u0629",age:6},{id:"i_ostrich",thing:"i_ostrich",letter:"noon",word:"\u0646\u0639\u0627\u0645\u0629",wd:"\u0646\u064E\u0639\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u0639\u0627\u0645\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0639\u064E\u0627\u0645\u064E\u0629",age:6},{id:"i_sparrow",thing:"i_sparrow",letter:"ayn",word:"\u0639\u0635\u0641\u0648\u0631\u0629",wd:"\u0639\u064F\u0635\u0652\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0635\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0639\u064F\u0635\u0652\u0641\u064F\u0648\u0631\u064E\u0629",age:4},{id:"i_bat",thing:"i_bat",letter:"khaa",word:"\u062E\u0641\u0627\u0634",wd:"\u062E\u064F\u0641\u064E\u0651\u0627\u0634",the:"\u0627\u0644\u062E\u0641\u0627\u0634",thed:"\u0627\u0644\u062E\u064F\u0641\u064E\u0651\u0627\u0634",age:6},{id:"i_snail",thing:"i_snail",letter:"haa",word:"\u062D\u0644\u0632\u0648\u0646\u0629",wd:"\u062D\u064E\u0644\u064E\u0632\u064F\u0648\u0646\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0632\u0648\u0646\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u064E\u0632\u064F\u0648\u0646\u064E\u0629",age:5},{id:"z_doctor",thing:"z_doctor",letter:"dal",word:"\u062F\u0643\u062A\u0648\u0631",wd:"\u062F\u064F\u0643\u0652\u062A\u064F\u0648\u0631",the:"\u0627\u0644\u062F\u0643\u062A\u0648\u0631",thed:"\u0627\u0644\u062F\u0651\u064F\u0643\u0652\u062A\u064F\u0648\u0631",age:3},{id:"z_teacher",thing:"z_teacher",letter:"meem",word:"\u0645\u062F\u0631\u0633",wd:"\u0645\u064F\u062F\u064E\u0631\u0650\u0651\u0633",the:"\u0627\u0644\u0645\u062F\u0631\u0633",thed:"\u0627\u0644\u0645\u064F\u062F\u064E\u0631\u0650\u0651\u0633",age:4},{id:"z_police",thing:"z_police",letter:"sheen",word:"\u0634\u0631\u0637\u064A",wd:"\u0634\u064F\u0631\u0652\u0637\u0650\u064A",the:"\u0627\u0644\u0634\u0631\u0637\u064A",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u0652\u0637\u0650\u064A",age:4},{id:"z_firefighter",thing:"z_firefighter",letter:"alef",word:"\u0625\u0637\u0641\u0627\u0626\u064A",wd:"\u0625\u0650\u0637\u0652\u0641\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0625\u0637\u0641\u0627\u0626\u064A",thed:"\u0627\u0644\u0625\u0650\u0637\u0652\u0641\u064E\u0627\u0626\u0650\u064A",age:5},{id:"z_farmer",thing:"z_farmer",letter:"faa",word:"\u0641\u0644\u0627\u062D",wd:"\u0641\u064E\u0644\u064E\u0651\u0627\u062D",the:"\u0627\u0644\u0641\u0644\u0627\u062D",thed:"\u0627\u0644\u0641\u064E\u0644\u064E\u0651\u0627\u062D",age:5},{id:"z_cook",thing:"z_cook",letter:"tah",word:"\u0637\u0628\u0627\u062E",wd:"\u0637\u064E\u0628\u064E\u0651\u0627\u062E",the:"\u0627\u0644\u0637\u0628\u0627\u062E",thed:"\u0627\u0644\u0637\u0651\u064E\u0628\u064E\u0651\u0627\u062E",age:5},{id:"z_driver",thing:"z_driver",letter:"seen",word:"\u0633\u0648\u0627\u0642",wd:"\u0633\u064E\u0648\u064E\u0651\u0627\u0642",the:"\u0627\u0644\u0633\u0648\u0627\u0642",thed:"\u0627\u0644\u0633\u0651\u064E\u0648\u064E\u0651\u0627\u0642",age:5},{id:"z_pilot",thing:"z_pilot",letter:"tah",word:"\u0637\u064A\u0627\u0631",wd:"\u0637\u064E\u064A\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0637\u064A\u0627\u0631",thed:"\u0627\u0644\u0637\u0651\u064E\u064A\u064E\u0651\u0627\u0631",age:5},{id:"z_nurse",thing:"z_nurse",letter:"meem",word:"\u0645\u0645\u0631\u0636\u0629",wd:"\u0645\u064F\u0645\u064E\u0631\u0650\u0651\u0636\u064E\u0629",the:"\u0627\u0644\u0645\u0645\u0631\u0636\u0629",thed:"\u0627\u0644\u0645\u064F\u0645\u064E\u0631\u0650\u0651\u0636\u064E\u0629",age:6},{id:"z_builder",thing:"z_builder",letter:"baa",word:"\u0628\u0646\u0627\u0621",wd:"\u0628\u064E\u0646\u064E\u0651\u0627\u0621",the:"\u0627\u0644\u0628\u0646\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0646\u064E\u0651\u0627\u0621",age:6},{id:"z_singer",thing:"z_singer",letter:"meem",word:"\u0645\u0637\u0631\u0628",wd:"\u0645\u064F\u0637\u0652\u0631\u0650\u0628",the:"\u0627\u0644\u0645\u0637\u0631\u0628",thed:"\u0627\u0644\u0645\u064F\u0637\u0652\u0631\u0650\u0628",age:6},{id:"z_painter",thing:"z_painter",letter:"raa",word:"\u0631\u0633\u0627\u0645",wd:"\u0631\u064E\u0633\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0631\u0633\u0627\u0645",thed:"\u0627\u0644\u0631\u0651\u064E\u0633\u064E\u0651\u0627\u0645",age:5},{id:"m_drum",thing:"m_drum",letter:"tah",word:"\u0637\u0628\u0644\u0629",wd:"\u0637\u064E\u0628\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0637\u0628\u0644\u0629",thed:"\u0627\u0644\u0637\u0651\u064E\u0628\u0652\u0644\u064E\u0629",age:4},{id:"m_guitar",thing:"m_guitar",letter:"jeem",word:"\u062C\u064A\u062A\u0627\u0631",wd:"\u062C\u0650\u064A\u062A\u064E\u0627\u0631",the:"\u0627\u0644\u062C\u064A\u062A\u0627\u0631",thed:"\u0627\u0644\u062C\u0650\u064A\u062A\u064E\u0627\u0631",age:5},{id:"m_piano",thing:"m_piano",letter:"baa",word:"\u0628\u064A\u0627\u0646\u0648",wd:"\u0628\u0650\u064A\u064E\u0627\u0646\u064F\u0648",the:"\u0627\u0644\u0628\u064A\u0627\u0646\u0648",thed:"\u0627\u0644\u0628\u0650\u064A\u064E\u0627\u0646\u064F\u0648",age:5},{id:"m_violin",thing:"m_violin",letter:"kaaf",word:"\u0643\u0645\u0627\u0646",wd:"\u0643\u064E\u0645\u064E\u0627\u0646",the:"\u0627\u0644\u0643\u0645\u0627\u0646",thed:"\u0627\u0644\u0643\u064E\u0645\u064E\u0627\u0646",age:5},{id:"m_flute",thing:"m_flute",letter:"noon",word:"\u0646\u0627\u064A",wd:"\u0646\u064E\u0627\u064A",the:"\u0627\u0644\u0646\u0627\u064A",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u064A",age:6},{id:"m_trumpet",thing:"m_trumpet",letter:"baa",word:"\u0628\u0648\u0642",wd:"\u0628\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0648\u0642",thed:"\u0627\u0644\u0628\u064F\u0648\u0642",age:5},{id:"m_tambourine",thing:"m_tambourine",letter:"dal",word:"\u062F\u0641",wd:"\u062F\u064F\u0641\u0651",the:"\u0627\u0644\u062F\u0641",thed:"\u0627\u0644\u062F\u0651\u064F\u0641\u0651",age:5},{id:"m_oud",thing:"m_oud",letter:"ayn",word:"\u0639\u0648\u062F",wd:"\u0639\u064F\u0648\u062F",the:"\u0627\u0644\u0639\u0648\u062F",thed:"\u0627\u0644\u0639\u064F\u0648\u062F",age:6},{id:"m_mic",thing:"m_mic",letter:"meem",word:"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",wd:"\u0645\u0650\u064A\u0643\u0652\u0631\u064F\u0648\u0641\u064F\u0648\u0646",the:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",thed:"\u0627\u0644\u0645\u0650\u064A\u0643\u0652\u0631\u064F\u0648\u0641\u064F\u0648\u0646",age:5},{id:"m_headphones",thing:"m_headphones",letter:"seen",word:"\u0633\u0645\u0627\u0639\u0629",wd:"\u0633\u064E\u0645\u064E\u0651\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0645\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0651\u0627\u0639\u064E\u0629",age:5},{id:"m_note",thing:"m_note",letter:"noon",word:"\u0646\u0648\u062A\u0629",wd:"\u0646\u064F\u0648\u062A\u064E\u0629",the:"\u0627\u0644\u0646\u0648\u062A\u0629",thed:"\u0627\u0644\u0646\u0651\u064F\u0648\u062A\u064E\u0629",age:6},{id:"m_bell",thing:"m_bell",letter:"jeem",word:"\u062C\u0631\u0633",wd:"\u062C\u064E\u0631\u064E\u0633",the:"\u0627\u0644\u062C\u0631\u0633",thed:"\u0627\u0644\u062C\u064E\u0631\u064E\u0633",age:4},{id:"e_pencil",thing:"e_pencil",letter:"qaaf",word:"\u0642\u0644\u0645",wd:"\u0642\u064E\u0644\u064E\u0645",the:"\u0627\u0644\u0642\u0644\u0645",thed:"\u0627\u0644\u0642\u064E\u0644\u064E\u0645",age:3},{id:"e_book",thing:"e_book",letter:"kaaf",word:"\u0643\u062A\u0627\u0628",wd:"\u0643\u0650\u062A\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u062A\u0627\u0628",thed:"\u0627\u0644\u0643\u0650\u062A\u064E\u0627\u0628",age:3},{id:"e_notebook",thing:"e_notebook",letter:"kaaf",word:"\u0643\u0631\u0627\u0633\u0629",wd:"\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0627\u0633\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",age:4},{id:"e_scissors",thing:"e_scissors",letter:"meem",word:"\u0645\u0642\u0635",wd:"\u0645\u064E\u0642\u064E\u0635",the:"\u0627\u0644\u0645\u0642\u0635",thed:"\u0627\u0644\u0645\u064E\u0642\u064E\u0635",age:5},{id:"e_ruler",thing:"e_ruler",letter:"meem",word:"\u0645\u0633\u0637\u0631\u0629",wd:"\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0645\u0633\u0637\u0631\u0629",thed:"\u0627\u0644\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",age:5},{id:"e_eraser",thing:"e_eraser",letter:"alef",word:"\u0623\u0633\u062A\u064A\u0643\u0629",wd:"\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u062A\u064A\u0643\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",age:5},{id:"e_crayons",thing:"e_crayons",letter:"alef",word:"\u0623\u0644\u0648\u0627\u0646",wd:"\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",the:"\u0627\u0644\u0623\u0644\u0648\u0627\u0646",thed:"\u0627\u0644\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",age:4},{id:"e_board",thing:"e_board",letter:"seen",word:"\u0633\u0628\u0648\u0631\u0629",wd:"\u0633\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0633\u0628\u0648\u0631\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",age:5},{id:"e_map",thing:"e_map",letter:"khaa",word:"\u062E\u0631\u064A\u0637\u0629",wd:"\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",the:"\u0627\u0644\u062E\u0631\u064A\u0637\u0629",thed:"\u0627\u0644\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",age:6},{id:"e_glue",thing:"e_glue",letter:"sad",word:"\u0635\u0645\u063A",wd:"\u0635\u064E\u0645\u0652\u063A",the:"\u0627\u0644\u0635\u0645\u063A",thed:"\u0627\u0644\u0635\u0651\u064E\u0645\u0652\u063A",age:6},{id:"e_desk",thing:"e_desk",letter:"meem",word:"\u0645\u0643\u062A\u0628",wd:"\u0645\u064E\u0643\u0652\u062A\u064E\u0628",the:"\u0627\u0644\u0645\u0643\u062A\u0628",thed:"\u0627\u0644\u0645\u064E\u0643\u0652\u062A\u064E\u0628",age:5},{id:"e_paper",thing:"e_paper",letter:"waaw",word:"\u0648\u0631\u0642\u0629",wd:"\u0648\u064E\u0631\u064E\u0642\u064E\u0629",the:"\u0627\u0644\u0648\u0631\u0642\u0629",thed:"\u0627\u0644\u0648\u064E\u0631\u064E\u0642\u064E\u0629",age:4},{id:"g_rectangle",thing:"g_rectangle",letter:"meem",word:"\u0645\u0633\u062A\u0637\u064A\u0644",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",the:"\u0627\u0644\u0645\u0633\u062A\u0637\u064A\u0644",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",age:4},{id:"g_oval",thing:"g_oval",letter:"baa",word:"\u0628\u064A\u0636\u0627\u0648\u064A",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",the:"\u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",age:5},{id:"g_diamond",thing:"g_diamond",letter:"meem",word:"\u0645\u0639\u064A\u0646",wd:"\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",the:"\u0627\u0644\u0645\u0639\u064A\u0646",thed:"\u0627\u0644\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",age:5},{id:"g_hexagon",thing:"g_hexagon",letter:"seen",word:"\u0633\u062F\u0627\u0633\u064A",wd:"\u0633\u064F\u062F\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u0633\u062F\u0627\u0633\u064A",thed:"\u0627\u0644\u0633\u0651\u064F\u062F\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_pentagon",thing:"g_pentagon",letter:"khaa",word:"\u062E\u0645\u0627\u0633\u064A",wd:"\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A",thed:"\u0627\u0644\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_arrow",thing:"g_arrow",letter:"seen",word:"\u0633\u0647\u0645",wd:"\u0633\u064E\u0647\u0652\u0645",the:"\u0627\u0644\u0633\u0647\u0645",thed:"\u0627\u0644\u0633\u0651\u064E\u0647\u0652\u0645",age:4},{id:"g_cube",thing:"g_cube",letter:"meem",word:"\u0645\u0643\u0639\u0628",wd:"\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",the:"\u0627\u0644\u0645\u0643\u0639\u0628",thed:"\u0627\u0644\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",age:5},{id:"g_sphere",thing:"g_sphere",letter:"kaaf",word:"\u0643\u0631\u0629",wd:"\u0643\u064F\u0631\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0629",age:4},{id:"g_cone",thing:"g_cone",letter:"meem",word:"\u0645\u062E\u0631\u0648\u0637",wd:"\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",the:"\u0627\u0644\u0645\u062E\u0631\u0648\u0637",thed:"\u0627\u0644\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",age:6},{id:"g_cylinder",thing:"g_cylinder",letter:"alef",word:"\u0623\u0633\u0637\u0648\u0627\u0646\u0629",wd:"\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u0637\u0648\u0627\u0646\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",age:6},{id:"g_ring",thing:"g_ring",letter:"haa",word:"\u062D\u0644\u0642\u0629",wd:"\u062D\u064E\u0644\u0652\u0642\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0642\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0642\u064E\u0629",age:5},{id:"g_heart",thing:"g_heart",letter:"qaaf",word:"\u0642\u0644\u0628",wd:"\u0642\u064E\u0644\u0652\u0628",the:"\u0627\u0644\u0642\u0644\u0628",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0628",age:3},{id:"v_tomato",thing:"v_tomato",letter:"tah",word:"\u0637\u0645\u0627\u0637\u0645",wd:"\u0637\u064E\u0645\u064E\u0627\u0637\u0650\u0645",the:"\u0627\u0644\u0637\u0645\u0627\u0637\u0645",thed:"\u0627\u0644\u0637\u0651\u064E\u0645\u064E\u0627\u0637\u0650\u0645",age:4},{id:"v_cucumber",thing:"v_cucumber",letter:"khaa",word:"\u062E\u064A\u0627\u0631",wd:"\u062E\u0650\u064A\u064E\u0627\u0631",the:"\u0627\u0644\u062E\u064A\u0627\u0631",thed:"\u0627\u0644\u062E\u0650\u064A\u064E\u0627\u0631",age:4},{id:"v_potato",thing:"v_potato",letter:"baa",word:"\u0628\u0637\u0627\u0637\u0633",wd:"\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",the:"\u0627\u0644\u0628\u0637\u0627\u0637\u0633",thed:"\u0627\u0644\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",age:4},{id:"v_onion",thing:"v_onion",letter:"baa",word:"\u0628\u0635\u0644",wd:"\u0628\u064E\u0635\u064E\u0644",the:"\u0627\u0644\u0628\u0635\u0644",thed:"\u0627\u0644\u0628\u064E\u0635\u064E\u0644",age:5},{id:"v_eggplant",thing:"v_eggplant",letter:"baa",word:"\u0628\u0627\u0630\u0646\u062C\u0627\u0646",wd:"\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",the:"\u0627\u0644\u0628\u0627\u0630\u0646\u062C\u0627\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",age:5},{id:"v_pepper",thing:"v_pepper",letter:"faa",word:"\u0641\u0644\u0641\u0644",wd:"\u0641\u0650\u0644\u0652\u0641\u0650\u0644",the:"\u0627\u0644\u0641\u0644\u0641\u0644",thed:"\u0627\u0644\u0641\u0650\u0644\u0652\u0641\u0650\u0644",age:5},{id:"v_lettuce",thing:"v_lettuce",letter:"khaa",word:"\u062E\u0633",wd:"\u062E\u064E\u0633",the:"\u0627\u0644\u062E\u0633",thed:"\u0627\u0644\u062E\u064E\u0633",age:5},{id:"v_broccoli",thing:"v_broccoli",letter:"baa",word:"\u0628\u0631\u0648\u0643\u0644\u064A",wd:"\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",the:"\u0627\u0644\u0628\u0631\u0648\u0643\u0644\u064A",thed:"\u0627\u0644\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",age:5},{id:"v_peas",thing:"v_peas",letter:"baa",word:"\u0628\u0633\u0644\u0629",wd:"\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0628\u0633\u0644\u0629",thed:"\u0627\u0644\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",age:6},{id:"v_pumpkin",thing:"v_pumpkin",letter:"qaaf",word:"\u0642\u0631\u0639",wd:"\u0642\u064E\u0631\u0652\u0639",the:"\u0627\u0644\u0642\u0631\u0639",thed:"\u0627\u0644\u0642\u064E\u0631\u0652\u0639",age:5},{id:"v_garlic",thing:"v_garlic",letter:"thaa",word:"\u062B\u0648\u0645",wd:"\u062B\u064F\u0648\u0645",the:"\u0627\u0644\u062B\u0648\u0645",thed:"\u0627\u0644\u062B\u0651\u064F\u0648\u0645",age:6},{id:"v_mushroom",thing:"v_mushroom",letter:"faa",word:"\u0641\u0637\u0631",wd:"\u0641\u064F\u0637\u0652\u0631",the:"\u0627\u0644\u0641\u0637\u0631",thed:"\u0627\u0644\u0641\u064F\u0637\u0652\u0631",age:6},{id:"t_rain",thing:"t_rain",letter:"meem",word:"\u0645\u0637\u0631",wd:"\u0645\u064E\u0637\u064E\u0631",the:"\u0627\u0644\u0645\u0637\u0631",thed:"\u0627\u0644\u0645\u064E\u0637\u064E\u0631",age:4},{id:"t_snow",thing:"t_snow",letter:"thaa",word:"\u062B\u0644\u062C",wd:"\u062B\u064E\u0644\u0652\u062C",the:"\u0627\u0644\u062B\u0644\u062C",thed:"\u0627\u0644\u062B\u0651\u064E\u0644\u0652\u062C",age:4},{id:"t_wind",thing:"t_wind",letter:"haa2",word:"\u0647\u0648\u0627",wd:"\u0647\u064E\u0648\u064E\u0627",the:"\u0627\u0644\u0647\u0648\u0627",thed:"\u0627\u0644\u0647\u064E\u0648\u064E\u0627",age:5},{id:"t_thunder",thing:"t_thunder",letter:"raa",word:"\u0631\u0639\u062F",wd:"\u0631\u064E\u0639\u0652\u062F",the:"\u0627\u0644\u0631\u0639\u062F",thed:"\u0627\u0644\u0631\u0651\u064E\u0639\u0652\u062F",age:6},{id:"t_lightning",thing:"t_lightning",letter:"baa",word:"\u0628\u0631\u0642",wd:"\u0628\u064E\u0631\u0652\u0642",the:"\u0627\u0644\u0628\u0631\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642",age:6},{id:"t_umbrella",thing:"t_umbrella",letter:"sheen",word:"\u0634\u0645\u0633\u064A\u0629",wd:"\u0634\u064E\u0645\u0652\u0633\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0634\u0645\u0633\u064A\u0629",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u0652\u0633\u0650\u064A\u064E\u0651\u0629",age:4},{id:"t_flake",thing:"t_flake",letter:"noon",word:"\u0646\u062F\u0641\u0629",wd:"\u0646\u064F\u062F\u0652\u0641\u064E\u0629",the:"\u0627\u0644\u0646\u062F\u0641\u0629",thed:"\u0627\u0644\u0646\u0651\u064F\u062F\u0652\u0641\u064E\u0629",age:6},{id:"t_flower",thing:"t_flower",letter:"zayn",word:"\u0632\u0647\u0631\u0629",wd:"\u0632\u064E\u0647\u0652\u0631\u064E\u0629",the:"\u0627\u0644\u0632\u0647\u0631\u0629",thed:"\u0627\u0644\u0632\u0651\u064E\u0647\u0652\u0631\u064E\u0629",age:3},{id:"t_leaves",thing:"t_leaves",letter:"alef",word:"\u0623\u0648\u0631\u0627\u0642",wd:"\u0623\u064E\u0648\u0652\u0631\u064E\u0627\u0642",the:"\u0627\u0644\u0623\u0648\u0631\u0627\u0642",thed:"\u0627\u0644\u0623\u064E\u0648\u0652\u0631\u064E\u0627\u0642",age:5},{id:"t_hot",thing:"t_hot",letter:"haa",word:"\u062D\u0631",wd:"\u062D\u064E\u0631\u0651",the:"\u0627\u0644\u062D\u0631",thed:"\u0627\u0644\u062D\u064E\u0631\u0651",age:5},{id:"t_cold",thing:"t_cold",letter:"baa",word:"\u0628\u0631\u062F",wd:"\u0628\u064E\u0631\u0652\u062F",the:"\u0627\u0644\u0628\u0631\u062F",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u062F",age:5},{id:"t_mountain",thing:"t_mountain",letter:"jeem",word:"\u062C\u0628\u0644",wd:"\u062C\u064E\u0628\u064E\u0644",the:"\u0627\u0644\u062C\u0628\u0644",thed:"\u0627\u0644\u062C\u064E\u0628\u064E\u0644",age:5}];var Pm="../art/";var Il=new Map;function Lm(i){if(Il.has(i))return Il.get(i);let t=new Lr().load(`${Pm}${i}.webp`);return t.colorSpace=ve,t.anisotropy=4,t.generateMipmaps=!0,t.minFilter=Tn,Il.set(i,t),t}function Lh(i,t,e=1){if(e>1){let l=new Ae;for(let c=e-1;c>=0;c--){let h=Lh(i,t,1);h.position.z=-c*.028;let u=c===0?1:Math.max(.35,.78-c*.07);h.material=h.material.clone(),h.material.color.setScalar(u),l.add(h)}return l}let[n,s]=Cl[i],r=new on(t*n/s,t);r.translate(0,t/2,0);let a=new Ie({map:Lm(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:Be}),o=new ut(r,a);return o.userData.name=i,o}var Kr={apple:"apple_n",banana:"banana_n",ball:"ball",crow:"crow",envelope:"envelope",lemon:"lemon",crescent:"crescent",corn:"corn",orange:"orange",grapes:"grapes_n",strawberry:"strawberry",watermelon:"watermelon",pineapple:"pineapple",mango:"mango",carrot:"carrot",cow:"cow",sheep:"sheep_n",dog:"dog",cat:"cat_n",giraffe:"giraffe_n",lion:"lion",elephant:"elephant2",horse:"horse_n",pig:"pig",bunny:"rabbit_n",rabbit:"rabbit_n",duck:"duck_n",hen:"hen_n",chick:"chick",bee:"bee_n",butterfly:"butterfly_n",monkey:"monkey",fish:"clownfish_n",dove:"dove_n",frog:"frog_n",panda:"panda",tiger:"tiger",zebra:"zebra",penguin:"penguin",parrot:"parrot",fox:"fox",camel:"camel",sun:"sun",rose:"rose",pomegranate:"pomegranate",rocket:"rocket",car:"car",bus:"bus",train:"train",plane:"plane_n",boat:"boat",firetruck:"firetruck",ambulance:"ambulance",police:"police",helicopter:"helicopter"},Dh=[...Ph.map(i=>i.thing),"c_schoolbus","c_citybus","c_taxi","c_tram","c_bulldozer","h_bike","d_jeep","d_balloon","d_boat","d_donkeycart","h_towel","h_shoes","h_toybox","h_broom","h_bin","h_wardrobe","h_clock","h_wateringcan","h_ball","h_table","h_sink","h_bed","h_backpack","h_toothbrush","f_haypile","f_eggs"];for(let i of Dh)Kr[i]=i;var Uh=new Set(["cow","sheep","dog","cat","giraffe","lion","elephant","elephant2","fox","camel","crow","sheep_n","cat_n","giraffe_n","horse_n","rabbit_n","duck_n","hen_n","bee_n","butterfly_n","clownfish_n","croc","horse","pig","rabbit","mallard","hen","chick","bee","butterfly","frog_n","dove_n","grapes_n","plane_n","monkey","clownfish","pigeon","frog","panda","tiger","zebra","penguin","parrot"]);for(let i of Dh)Uh.add(i);var Dm=i=>!!Kr[i]&&!!Cl[Kr[i]];function Nh(i){if(!Dm(i))return null;let t=new Ae,e=Kr[i],n=Uh.has(e)?1.5:1;return t.add(Lh(e,n)),t.userData.id=i,t.userData.art=!0,t.userData.inner=new Ae,t}var X=(i,t=.55)=>new oe({color:i,roughness:t}),q=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let l=new ut(new An(i,18,14),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l.castShadow=!0,l},fe=(i,t,e,n,s=0,r=0,a=0)=>{let o=new ut(new ln(i,t,e,14),n);return o.position.set(s,r,a),o.castShadow=!0,o},Ce=(i,t,e,n=0,s=0,r=0)=>{let a=new ut(new mn(i,t,14),e);return a.position.set(n,s,r),a.castShadow=!0,a},Ve=(i,t,e,n=.12,s=.05)=>{for(let r of[-1,1])i.add(q(s,X(1710628,.3),r*n,t,e)),i.add(q(s*.35,new Ie({color:16777215}),r*n+s*.3,t+s*.4,e+s*.7))},hn=(i,t,e,n,s=.28,r=.07)=>{for(let a of e)for(let o of n)i.add(fe(r,r*.9,s,t,a,s/2,o))},Ml={duck(i){let t=X(16767034,.4),e=X(16747050);i.add(q(.42,t,0,.45,0,1,.9,1.15)),i.add(q(.27,t,0,.9,.3));let n=q(.13,e,0,.84,.55,1.3,.5,1.1);i.add(n),Ve(i,.97,.5,.12),i.add(q(.2,X(16761370),.38,.5,-.02,.4,.8,1)),i.add(q(.2,X(16761370),-.38,.5,-.02,.4,.8,1)),i.add(Ce(.14,.3,t,0,.62,-.5)).rotation.x=-1.1},butterfly(i){i.add(fe(.05,.05,.6,X(4864602),0,.5,0)).rotation.x=Math.PI/2,i.children[0].rotation.x=0,i.add(q(.09,X(4864602),0,.85,0));let t=new Ae;for(let[e,n,s]of[[-1,1,16739e3],[1,1,16739e3],[-1,-1,12090111],[1,-1,12090111]]){let r=q(.38,X(s,.4),e*.36,.62+n*.18,0,1,1,.12);t.add(r,q(.1,X(16777215),e*.42,.62+n*.2,.06,1,1,.3))}i.add(t),i.userData.wings=t;for(let e of[-1,1]){let n=fe(.012,.012,.3,X(4864602),e*.08,1.05,0);n.rotation.z=-e*.4,i.add(n)}},fox(i){let t=X(15764010),e=X(16774376),n=X(4860442);i.add(q(.4,t,0,.5,-.05,.9,.85,1.25)),i.add(q(.3,t,0,.88,.38,1.1,.95,1)),i.add(q(.2,e,0,.8,.55,1.2,.7,1)),i.add(q(.05,n,0,.84,.72));for(let s of[-1,1]){let r=Ce(.11,.32,t,s*.2,1.2,.34);r.rotation.z=-s*.2,i.add(r),i.add(Ce(.05,.2,n,s*.2,1.18,.37)).rotation.z=-s*.2}Ve(i,.95,.62,.12),i.add(q(.18,t,0,.55,-.62,.8,.8,1.7)).rotation.x=.5,i.add(q(.14,e,0,.78,-.95,.9,.9,1.2)),hn(i,n,[-.2,.2],[.25,-.35],.3)},camel(i){let t=X(14198888),e=X(12093512);i.add(q(.42,t,0,.78,0,.85,.8,1.35)),i.add(q(.22,t,0,1.2,-.2)),i.add(q(.2,t,0,1.18,.28));let n=fe(.12,.17,.62,t,0,1.2,.58);n.rotation.x=.5,i.add(n),i.add(q(.17,t,0,1.55,.78,.9,.9,1.3)),i.add(q(.05,X(1710628),0,1.6,.93)),Ve(i,1.6,.76,.1,.035),hn(i,e,[-.22,.22],[.42,-.42],.55,.08),i.add(fe(.025,.025,.35,e,0,.7,-.62)).rotation.x=.3},horse(i){let t=X(11037242),e=X(3810328),n=X(16774376);i.add(q(.38,t,0,.78,0,.8,.8,1.4));let s=fe(.14,.2,.6,t,0,1.15,.5);s.rotation.x=.55,i.add(s),i.add(q(.2,t,0,1.5,.7,.85,.95,1.5)),i.add(q(.12,n,0,1.45,.88,.8,.7,1));for(let r of[-1,1])i.add(Ce(.07,.2,t,r*.1,1.72,.58));Ve(i,1.55,.74,.14,.035),i.add(q(.1,e,0,1.55,.45,.5,1.6,.9)).rotation.x=.55,hn(i,t,[-.2,.2],[.42,-.45],.55,.075),i.add(Ce(.1,.55,e,0,.85,-.75)).rotation.x=2.6},sheep(i){let t=X(16775920,.9),e=X(3816004);for(let[n,s,r,a]of[[0,.62,0,.42],[-.28,.6,.1,.3],[.28,.6,.1,.3],[0,.85,.05,.3],[-.2,.6,-.3,.3],[.2,.6,-.3,.3],[0,.52,.3,.3]])i.add(q(a,t,n,s,r));i.add(q(.22,e,0,.72,.5,.95,1.05,1.1));for(let n of[-1,1])i.add(q(.1,e,n*.24,.8,.45,1.4,.7,.5));Ve(i,.78,.68,.09,.03),hn(i,e,[-.18,.18],[.22,-.25],.3,.06)},hen(i){let t=X(16774376,.7),e=X(15216682),n=X(16752682);i.add(q(.42,t,0,.55,0,1,.95,1.1)),i.add(q(.24,t,0,1,.32)),i.add(q(.12,n,0,.95,.56,.9,.7,1.4));for(let s=0;s<3;s++)i.add(q(.07,e,0,1.28-Math.abs(s-1)*.04,.3+(s-1)*.1));i.add(q(.06,e,0,.82,.55,.7,1.4,.7)),Ve(i,1.03,.5,.11,.035),i.add(Ce(.22,.5,t,0,.85,-.5)).rotation.x=-.6,i.add(q(.2,X(15786184),.4,.55,0,.35,.8,1)),i.add(q(.2,X(15786184),-.4,.55,0,.35,.8,1)),hn(i,n,[-.12,.12],[0],.2,.03)},sun(i){let t=X(16765466,.3);i.add(q(.45,t,0,.7,0));for(let n=0;n<10;n++){let s=n/10*Math.PI*2,r=Ce(.09,.32,X(16754714),Math.cos(s)*.68,.7+Math.sin(s)*.68,0);r.rotation.z=s-Math.PI/2,i.add(r)}Ve(i,.78,.42,.15,.045);let e=new ut(new Fe(.15,.025,6,14,Math.PI),X(12073498));e.position.set(0,.6,.43),e.rotation.z=Math.PI,i.add(e);for(let n of[-1,1])i.add(q(.07,X(16751210),n*.28,.62,.38,1,.7,.5))},bee(i){let t=X(16765466),e=X(2763306);i.add(q(.4,t,0,.5,0,.9,.85,1.25));for(let n of[-.1,.2,-.38]){let s=q(.37-Math.abs(n)*.2,e,0,.5,n,.9,.85,.2);i.add(s)}i.add(q(.22,t,0,.62,.52)),Ve(i,.68,.68,.1,.05);for(let n of[-1,1]){i.add(q(.22,X(13627135,.2),n*.32,.95,0,.9,.35,1.1)).userData.wing=n;let s=fe(.012,.012,.3,e,n*.08,.95,.62);s.rotation.z=-n*.4,s.rotation.x=.3,i.add(s)}i.add(Ce(.06,.2,e,0,.45,-.62)).rotation.x=-Math.PI/2},heart(i){let t=new ut(Rh("heart",.4,.09),new oe({color:16726634,roughness:.25}));t.scale.setScalar(.62),t.position.y=.55,t.castShadow=!0,i.add(t),i.add(q(.07,new Ie({color:16765148}),-.2,.72,.28,1,1.4,.5))},rose(i){let t=X(15214666,.45),e=X(3844170);i.add(fe(.04,.05,.75,e,0,.38,0));for(let[n,s]of[[-1,.35],[1,.5]]){let r=q(.16,e,n*.2,s,0,1.6,.3,.8);r.rotation.z=n*.4,i.add(r)}i.add(q(.3,t,0,.95,0,1,.9,1));for(let n=0;n<5;n++){let s=n/5*Math.PI*2;i.add(q(.18,X(16730730,.45),Math.cos(s)*.24,.98,Math.sin(s)*.24,1,1.1,.6)).rotation.y=-s}i.add(q(.14,X(13113914),0,1.05,0))},dog(i){let t=X(13144138),e=X(16774376),n=X(8014370);i.add(q(.4,t,0,.55,-.05,.85,.8,1.3)),i.add(q(.3,t,0,.95,.4)),i.add(q(.18,e,0,.88,.62,1,.8,1.1)),i.add(q(.06,X(1710628),0,.93,.78));for(let s of[-1,1])i.add(q(.13,n,s*.3,.95,.35,.6,1.5,.9));Ve(i,1.02,.62,.12,.045),hn(i,t,[-.2,.2],[.28,-.38],.32,.08),i.add(Ce(.07,.4,t,0,.8,-.65)).rotation.x=-2.2,i.add(q(.1,X(16743066),0,.74,.7,.8,.4,1.2))},monkey(i){let t=X(10119738),e=X(15782048);i.add(q(.38,t,0,.55,0,.9,1,.9)),i.add(q(.3,t,0,1.05,.05)),i.add(q(.2,e,0,.98,.25,1.2,.9,.6)),i.add(q(.05,X(3811866),0,1,.36)),Ve(i,1.12,.27,.1,.04);for(let s of[-1,1])i.add(q(.14,t,s*.33,1.08,0)),i.add(q(.09,e,s*.33,1.08,.05)),i.add(q(.1,t,s*.5,.45,.12,.8,1.6,.8));i.add(q(.24,e,0,.5,.25,.9,1,.5)),hn(i,t,[-.18,.18],[.05],.3,.09);let n=new ut(new Fe(.3,.05,8,16,Math.PI*1.4),t);n.position.set(0,.5,-.4),n.rotation.y=Math.PI/2,i.add(n)},cow(i){let t=X(16775920),e=X(2763306),n=X(16756920);i.add(q(.45,t,0,.78,0,.9,.85,1.4)),i.add(q(.18,e,-.15,.95,.1,1,1,.9)),i.add(q(.15,e,.2,.7,-.2,1,1,.9)),i.add(q(.3,t,0,1,.62)),i.add(q(.2,n,0,.9,.85,1.1,.8,.8));for(let s of[-1,1])i.add(q(.04,X(1710628),s*.08,.92,1)),i.add(Ce(.05,.2,X(16312512),s*.2,1.38,.62)).rotation.z=-s*.4,i.add(q(.11,e,s*.32,1.12,.6,1.4,.6,.8));Ve(i,1.12,.84,.15,.04),hn(i,t,[-.22,.22],[.4,-.45],.45,.09),i.add(fe(.025,.025,.5,t,0,.7,-.7)).rotation.x=.3},bear(i){let t=X(9067066),e=X(15255704);i.add(q(.46,t,0,.55,0,1,1,.9)),i.add(q(.32,t,0,1.15,.05)),i.add(q(.18,e,0,1.08,.28,1.1,.8,.8)),i.add(q(.06,X(1710628),0,1.13,.42,1.2,.8,1));for(let n of[-1,1])i.add(q(.12,t,n*.26,1.42,0)),i.add(q(.07,e,n*.26,1.42,.07)),i.add(q(.14,t,n*.45,.3,.25,.8,1,1.2));Ve(i,1.22,.3,.11,.045),i.add(q(.3,e,0,.5,.35,.9,1,.5));for(let n of[-1,1])i.add(q(.12,t,n*.42,.55,.15,.8,1.6,.8))},mouse(i){let t=X(12105928),e=X(16756928);i.add(q(.32,t,0,.36,0,.9,.85,1.3)),i.add(q(.22,t,0,.45,.35,.9,.9,1.2)),i.add(q(.05,e,0,.44,.58));for(let s of[-1,1])i.add(q(.14,t,s*.2,.68,.22,1,1,.3)),i.add(q(.09,e,s*.2,.68,.25,1,1,.3));Ve(i,.52,.5,.09,.035);let n=new ut(new Fe(.3,.025,6,16,Math.PI*1.2),e);n.position.set(0,.15,-.55),n.rotation.set(0,Math.PI/2,0),i.add(n),hn(i,t,[-.15,.15],[.15,-.2],.12,.05)},carrot(i){let t=Ce(.22,.95,X(16747034),0,.5,0);t.rotation.z=Math.PI,i.add(t);for(let e of[-.07,0,.07])i.add(Ce(.06,.3,X(3844170),e,1.15,0)).rotation.z=e*3},bone(i){let t=X(16774368);i.add(fe(.1,.1,.8,t,0,.3,0)).rotation.z=Math.PI/2;for(let e of[-.42,.42])for(let n of[-.1,.1])i.add(q(.14,t,e,.3,n))},grass(i){for(let t=0;t<9;t++){let e=t/9*Math.PI*2,n=Ce(.07,.8+t%3*.15,X(t%2?4900954:3844170),Math.cos(e)*.18,.4,Math.sin(e)*.18);n.rotation.z=Math.cos(e)*.3,n.rotation.x=Math.sin(e)*.3,i.add(n)}},honey(i){i.add(fe(.32,.36,.55,X(16758810,.2),0,.3,0)),i.add(fe(.34,.34,.08,X(9067050),0,.6,0)),i.add(q(.13,X(16762938,.2),.2,.55,.1,1,.6,1));let t=new ut(new on(.4,.28),X(16774360));t.position.set(0,.32,.37),i.add(t)},cheese(i){let t=X(16765498,.5),e=fe(.5,.5,.4,t,0,.25,0);i.add(e),e.geometry=new ln(.5,.5,.4,3),e.rotation.y=.5;for(let[n,s,r]of[[.1,.3,.3],[-.2,.2,.2],[.25,.45,0],[-.05,.46,-.1]])i.add(q(.07,X(15247386),n,s,r))},seeds(i){for(let t=0;t<18;t++)i.add(q(.06,X(t%3?13148240:15257720),Math.cos(t*2.4)*.28*(.4+t%5/6),.07+t%4*.05,Math.sin(t*2.4)*.28*(.4+t%5/6),1,.7,1.4))},pomegranate(i){let t=X(13113402,.35);i.add(q(.42,t,0,.45,0)),i.add(fe(.12,.16,.12,X(9048616),0,.88,0));for(let e=0;e<5;e++){let n=e/5*Math.PI*2;i.add(Ce(.05,.14,X(9048616),Math.cos(n)*.1,.98,Math.sin(n)*.1))}i.add(q(.08,new Ie({color:16747168}),-.15,.62,.34,1,1.3,.5))},giraffe(i){let t=X(16764746),e=X(12089386);i.add(q(.38,t,0,.78,0,.8,.8,1.3));for(let[s,r,a]of[[.2,.85,.1],[-.2,.7,-.2],[.18,.7,-.3],[-.15,.9,.25]])i.add(q(.09,e,s,r,a,1,1,.5));let n=fe(.12,.17,.95,t,0,1.35,.4);n.rotation.x=.18,i.add(n),i.add(q(.2,t,0,1.88,.5,.9,.95,1.3)),i.add(q(.11,X(15782040),0,1.82,.7,1,.8,1));for(let s of[-1,1])i.add(fe(.02,.02,.2,e,s*.09,2.1,.45)),i.add(q(.04,e,s*.09,2.22,.45)),i.add(q(.07,t,s*.2,1.95,.4,1.3,.6,.5));Ve(i,1.92,.64,.12,.035);for(let s of[-1,1])i.add(q(.09,e,s*.06,1.5,.45,1,1,.4));hn(i,t,[-.2,.2],[.32,-.38],.55,.07)},corn(i){i.add(q(.26,X(16765466,.4),0,.55,0,1,1.9,1));for(let t=0;t<7;t++)for(let e=0;e<8;e++){let n=e/8*Math.PI*2+t*.4;i.add(q(.055,X(16760330,.4),Math.cos(n)*.25,.15+t*.14,Math.sin(n)*.25))}for(let t of[.3,2.4,4.4]){let e=Ce(.18,.7,X(4892746),Math.cos(t)*.2,.35,Math.sin(t)*.2);e.rotation.z=Math.cos(t)*.35,e.rotation.x=Math.sin(t)*.35,e.scale.z=.35,i.add(e)}},rocket(i){let t=X(16053503,.3),e=X(15216682,.4);i.add(fe(.26,.3,1,t,0,.7,0)),i.add(Ce(.26,.45,e,0,1.43,0)),i.add(q(.12,X(4892927,.1),0,.85,.24,1,1,.5));for(let n=0;n<3;n++){let s=n/3*Math.PI*2,r=q(.2,e,Math.cos(s)*.3,.3,Math.sin(s)*.3,.4,1.4,1);r.rotation.y=-s,i.add(r)}i.add(Ce(.15,.4,new Ie({color:16754714}),0,.02,0)).rotation.x=Math.PI},envelope(i){let t=document.createElement("canvas");t.width=256,t.height=168;let e=t.getContext("2d");e.fillStyle="#fff6e0",e.fillRect(0,0,256,168),e.strokeStyle="#d8c8a0",e.lineWidth=4,e.beginPath(),e.moveTo(0,0),e.lineTo(128,96),e.lineTo(256,0),e.stroke(),e.beginPath(),e.moveTo(0,168),e.lineTo(96,80),e.moveTo(256,168),e.lineTo(160,80),e.stroke(),e.fillStyle="#e8304a",e.beginPath(),e.arc(128,96,22,0,Math.PI*2),e.fill(),e.fillStyle="#ffd0d8",e.font="900 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u2665",128,97);let n=new ui(t);n.colorSpace=ve;let s=new ut(new se(1.05,.7,.07),[X(15787208),X(15787208),X(15787208),X(15787208),new oe({map:n,roughness:.7}),X(15260864)]);s.position.y=.5,s.rotation.x=-.12,s.castShadow=!0,i.add(s)},crow(i){let t=X(1842734,.25),e=X(2764880,.3),n=X(4868696,.4);i.add(q(.42,t,0,.62,0,.85,.8,1.35)),i.add(q(.3,t,0,1,.5)),i.add(q(.13,n,0,.93,.86,.9,.8,1.9));for(let r of[-1,1]){i.add(q(.075,X(16777215,.2),r*.2,1.07,.66)),i.add(q(.04,X(0,.1),r*.22,1.07,.71));let a=q(.3,e,r*.34,.62,-.05,.38,.85,1.5);a.rotation.z=-r*.25,i.add(a)}let s=Ce(.2,.75,e,0,.5,-.75,4);s.rotation.x=-1.7,s.scale.set(1,1,.3),i.add(s),hn(i,X(3816008),[-.1,.1],[.05],.3,.03)},lemon(i){let t=X(16771146,.4);i.add(q(.4,t,0,.4,0,1.25,.95,.95)),i.add(q(.1,t,.5,.4,0,1,.8,.8)),i.add(q(.1,t,-.5,.4,0,1,.8,.8));let e=q(.2,X(3844170),.1,.82,0,1.6,.25,.8);e.rotation.z=.4,i.add(e)},crescent(i){let t=new oe({color:16767050,roughness:.3,emissive:16758810,emissiveIntensity:.35}),e=new ut(new Fe(.5,.17,12,28,Math.PI*1.5),t);e.position.y=.65,e.rotation.z=Math.PI*.75,e.castShadow=!0,i.add(e),i.add(q(.12,t,.55,.95,0))},dove(i){let t=X(16775924,.5);i.add(q(.38,t,0,.5,0,.9,.9,1.25)),i.add(q(.22,t,0,.92,.3)),i.add(Ce(.06,.2,X(16753178),0,.9,.55)).rotation.x=Math.PI/2,Ve(i,.97,.45,.1,.035);for(let e of[-1,1]){let n=q(.28,t,e*.36,.78,-.05,.4,1.4,1.1);n.rotation.z=-e*.5,i.add(n)}i.add(Ce(.16,.5,t,0,.5,-.5)).rotation.x=-1.4},bed(i){i.add(new ut(new se(1.5,.25,.95),X(13141578)).translateY(.2)),i.add(new ut(new se(1.4,.2,.88),X(16774376)).translateY(.42)),i.add(new ut(new se(1,.16,.9),X(4892927)).translateX(.18).translateY(.55)),i.add(q(.28,X(16777215),-.5,.62,0,1.2,.5,1.4)),i.add(new ut(new se(.08,.7,.95),X(11037242)).translateX(-.75).translateY(.5))},soap(i){i.add(new ut(new se(.7,.28,.45),X(16751304,.3)).translateY(.2));for(let[t,e,n,s]of[[.2,.6,.1,.18],[-.15,.78,0,.13],[.35,.85,-.1,.1],[-.35,.55,.15,.1],[.05,1,.05,.09]])i.add(q(s,new oe({color:13627135,transparent:!0,opacity:.6,roughness:.05}),t,e,n))},bowl(i){let t=new ut(new An(.5,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new oe({color:4892927,roughness:.3,side:Be}));t.position.y=.55,i.add(t),i.add(fe(.5,.5,.03,X(16777215),0,.55,0)),i.add(fe(.46,.46,.03,X(16774360),0,.52,0));for(let n=0;n<7;n++)i.add(q(.09,X(15249482),Math.cos(n*2.1)*.25,.6,Math.sin(n*2.1)*.25,1,.7,1));let e=fe(.025,.025,.6,X(13158608),.35,.75,.1);e.rotation.z=-.6,i.add(e)},backpack(i){i.add(q(.45,X(16734794,.5),0,.5,0,1,1.1,.7)),i.add(q(.3,X(16758826,.5),0,.35,.28,1,.8,.5));for(let e of[-1,1])i.add(new ut(new Fe(.3,.04,8,14,Math.PI),X(3816010))).position.set(e*.35,.55,.25);let t=new ut(new Fe(.12,.03,8,14,Math.PI),X(3816010));t.position.set(0,1,0),i.add(t)},pot(i){i.add(fe(.45,.4,.55,X(13158612,.25),0,.35,0)),i.add(fe(.47,.47,.06,X(15263984,.25),0,.66,0)),i.add(q(.08,X(16734794),0,.74,0));for(let t of[-1,1])i.add(new ut(new Fe(.1,.03,6,10),X(3816010))).position.set(t*.5,.45,0);for(let[t,e]of[[.1,0],[-.12,.08],[.02,-.1]])i.add(q(.13,new oe({color:16777215,transparent:!0,opacity:.55}),t,1+t,e))},plate(i){i.add(fe(.55,.45,.07,X(16777215,.25),0,.2,0)),i.add(new ut(new Fe(.5,.03,8,24),X(4892927)).rotateX(Math.PI/2).translateZ(-.25)),i.add(q(.2,X(14195274),.12,.35,.05,1.1,.8,1)),i.add(q(.14,X(4892746),-.2,.32,-.08)),i.add(q(.1,X(15216682),-.15,.3,.22));let t=fe(.015,.015,.6,X(13158608),.7,.28,0);t.rotation.x=Math.PI/2,i.add(t)},tub(i){let t=X(16777215,.25);i.add(new ut(new se(1.5,.12,.8),t).translateY(.15));for(let[e,n,s,r]of[[1.5,.1,0,.4],[1.5,.1,0,-.4],[.1,.8,.75,0],[.1,.8,-.75,0]])i.add(new ut(new se(e,.55,n),t)).position.set(s,.4,r);i.add(new ut(new se(1.35,.04,.7),X(9099519,.1)).translateY(.5));for(let[e,n,s,r]of[[-.3,.62,.1,.16],[.1,.7,-.1,.2],[.4,.62,.15,.13],[-.1,.8,.05,.12]])i.add(q(r,new oe({color:16777215,transparent:!0,opacity:.85}),e,n,s));for(let e of[-.6,.6])i.add(fe(.06,.06,.12,X(13158608),e,.05,.3))},toothbrush(i){let t=new ut(new se(.13,1,.08),X(4892927));t.position.set(0,.55,0),t.rotation.z=.25,i.add(t);let e=new ut(new se(.2,.34,.1),X(4892927));e.position.set(-.22,1.06,0),e.rotation.z=.25,i.add(e);let n=new ut(new se(.17,.3,.1),X(16777215));n.position.set(-.24,1.07,.08),n.rotation.z=.25,i.add(n),i.add(q(.09,X(16777215),-.2,1.14,.12,1.5,.8,.8))}};function Fh(i){let t=Nh(i);if(t)return t;if(!Ml[i])return Th(i);let e=new Ae,n=new Ae;return n.add=function(...r){return Ae.prototype.add.apply(this,r),r[0]},Ml[i](n),Um.has(i)&&(n.rotation.y=-.85),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(n),e.userData.id=i,e.userData.inner=n,e}var Um=new Set(["crow","fox","camel","monkey","bear","mouse","dog","giraffe","sheep","hen","duck","cow","dove"]),b_=Object.keys(Ml);function wl(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var xi=[{id:"circle",ar:"\u062F\u0627\u064A\u0631\u0629",the:"\u0627\u0644\u062F\u0627\u064A\u0631\u0629",fem:!0},{id:"square",ar:"\u0645\u0631\u0628\u0639",the:"\u0627\u0644\u0645\u0631\u0628\u0639",fem:!1},{id:"triangle",ar:"\u0645\u062B\u0644\u062B",the:"\u0627\u0644\u0645\u062B\u0644\u062B",fem:!1},{id:"star",ar:"\u0646\u062C\u0645\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",fem:!0},{id:"heart",ar:"\u0642\u0644\u0628",the:"\u0627\u0644\u0642\u0644\u0628",fem:!1}],jr=[{id:"red",hex:15216682,m:"\u0623\u062D\u0645\u0631",f:"\u062D\u0645\u0631\u0627"},{id:"blue",hex:2788072,m:"\u0623\u0632\u0631\u0642",f:"\u0632\u0631\u0642\u0627"},{id:"yellow",hex:16762906,m:"\u0623\u0635\u0641\u0631",f:"\u0635\u0641\u0631\u0627"},{id:"green",hex:2795594,m:"\u0623\u062E\u0636\u0631",f:"\u062E\u0636\u0631\u0627"},{id:"orange",hex:16747034,m:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A",f:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A"}],Nm=8,Fm=i=>i<=4?3:i===5?4:5,Om=i=>i>=5,bl=i=>xi.find(t=>t.id===i),Ps=i=>jr.find(t=>t.id===i),Oh=(i,t)=>i.fem?t.f:t.m,km=(i,t)=>{let e=Oh(i,t);return e==="\u0628\u0631\u062A\u0642\u0627\u0644\u064A"?"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A":`\u0627\u0644${e}`};function Sl(i,t){return t?`\u0641\u064A\u0646 ${i.the} ${km(i,t)}\u061F`:`\u0641\u064A\u0646 ${i.the}\u061F`}function kh(i,t){return t?`\u062F\u064A ${i.ar} ${Oh(i,t)}`:`\u062F\u064A ${i.ar}`}function Bm(i,t){let e=wl(t),n=[];for(let s=0;s<Nm;s++){let r,a,o=0;do r=xi[Math.floor(e()*(i<=4?3:5))].id,a=jr[Math.floor(e()*5)].id,o++;while(o<30&&n.length&&n[n.length-1].shape===r);n.push({shape:r,color:a})}return n}function zm(i,t,e){let n=wl(e),s=Fm(i),r=d=>d.sort(()=>n()-.5),a=d=>`${d.shape}-${d.color}`,o=[{shape:t.shape,color:t.color}],l=new Set([a(o[0])]),c=(d,p)=>l.has(a({shape:d,color:p}))?!1:(l.add(a({shape:d,color:p})),o.push({shape:d,color:p}),!0),h=r(xi.map(d=>d.id).filter(d=>d!==t.shape)),u=r(jr.map(d=>d.id).filter(d=>d!==t.color));if(i<=5)for(let d=0;d<s-1;d++)c(h[d],u[d]);else{c(h[0],t.color),c(t.shape,u[0]);for(let d=1;o.length<s&&d<30;d++)c(h[d%h.length],u[(d+1)%u.length]);for(let d=0;o.length<s&&d<80;d++){let p=xi[Math.floor(n()*5)].id,m=jr[Math.floor(n()*5)].id;p===t.shape||m===t.color||c(p,m)}}return r(o).map((d,p)=>({id:`t${p}`,...d}))}var Qr=class{constructor(t,e=Date.now()){this.age=t,this.seed=e,this.targets=Bm(t,e),this.round=0,this.misses=0}get finished(){return this.round>=this.targets.length}get target(){return this.finished?null:this.targets[this.round]}get askColor(){return Om(this.age)}get tiles(){return this.finished?[]:zm(this.age,this.target,this.seed+this.round*53)}isAnswer(t){return t.shape===this.target.shape&&(!this.askColor||t.color===this.target.color)}get hint(){return this.misses>=2?this.tiles.find(t=>this.isAnswer(t)).id:null}tap(t){if(this.finished)return null;let e=this.tiles.find(s=>s.id===t);if(!e||!this.isAnswer(e))return this.misses++,{ok:!1,firstMiss:this.misses===1};let n={ok:!0,first:this.misses===0,tile:e};return this.round++,this.misses=0,n.finished=this.finished,n}};var Hm={title:["\u0623\u064A\u0646 \u0627\u0644\u0634\u0643\u0644\u061F","Find the Shape"],no:["\u0645\u0634 \u062F\u064A... \u062F\u0648\u0651\u0631 \u062A\u0627\u0646\u064A","Not that one... look again"],yes_m:["\u0623\u062D\u0633\u0646\u062A!","Well done!"],yes_f:["\u0623\u062D\u0633\u0646\u062A\u064A!","Well done!"],again:["\u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Hear again"]},Vm={...Al,tempo:108,lead:"bell",chords:[[48,[64,67,72]],[43,[62,67,71]],[45,[64,69,72]],[41,[65,69,72]],[48,[64,67,72]],[45,[64,69,72]],[43,[62,67,71]],[48,[64,67,76]]],melody:[[0,0,79],[0,4,84],[1,0,83],[1,4,79],[2,0,81],[2,4,84],[3,0,86],[3,4,81],[4,0,84],[4,4,88],[5,0,86],[5,4,81],[6,0,79],[6,4,83],[7,0,84]]};function Gm(i,t=.34,e=.07){let n=new Ze;if(i==="circle")n.absarc(0,0,.72,0,Math.PI*2);else if(i==="square")n.moveTo(-.62+.14,-.62),n.lineTo(.62-.14,-.62),n.quadraticCurveTo(.62,-.62,.62,-.62+.14),n.lineTo(.62,.62-.14),n.quadraticCurveTo(.62,.62,.62-.14,.62),n.lineTo(-.62+.14,.62),n.quadraticCurveTo(-.62,.62,-.62,.62-.14),n.lineTo(-.62,-.62+.14),n.quadraticCurveTo(-.62,-.62,-.62+.14,-.62);else if(i==="triangle")n.moveTo(-.82,-.6),n.lineTo(.82,-.6),n.lineTo(0,.82),n.closePath();else if(i==="star"){for(let r=0;r<10;r++){let a=Math.PI/2+r*Math.PI/5,o=r%2?.42:.92,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else n.moveTo(0,-.78),n.bezierCurveTo(-.2,-.55,-.9,-.2,-.9,.28),n.bezierCurveTo(-.9,.7,-.35,.85,0,.4),n.bezierCurveTo(.35,.85,.9,.7,.9,.28),n.bezierCurveTo(.9,-.2,.2,-.55,0,-.78);let s=new _n(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:4,curveSegments:20});return s.center(),s}var El=class{constructor(t,e,n){this.sh=new qr(t,e,n,{text:Hm,theme:Vm});let s=this.sh;this.st=new Zr(s,{bg:16771572,ground:15780056,fov:40,box:[6.4,3.9],dir:[0,.3,1],target:[0,2,0]}),this.geo=Object.fromEntries(xi.map(r=>[r.id,Gm(r.id)])),this._room(),this.tiles=[],this.flights=[],this.filled=new Map,s.fonts().then(()=>s.titleCard(s.t("title"),"\u{1F534}\u{1F7E6}\u2B50\u{1F49A}",()=>this._start())),this.st.onFrame((r,a)=>this._frame(r,a))}_room(){let t=this.st.scene,e=new ut(new on(60,30),new oe({map:$r(256,256,c=>{for(let h=0;h<8;h++)c.fillStyle=h%2?"#f4d4a8":"#ecc898",c.fillRect(0,h*32,256,32),c.fillStyle="rgba(120,70,30,.2)",c.fillRect(0,h*32+30,256,2)},[10,5]),roughness:.8}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);let n=new ut(new on(50,16),new oe({map:$r(256,256,c=>{c.fillStyle="#ffd9ec",c.fillRect(0,0,256,256),c.fillStyle="#ffc8e2";for(let h=0;h<24;h++)c.beginPath(),c.arc(h*71%256,h*109%256,12,0,Math.PI*2),c.fill()},[8,2]),roughness:1}));n.position.set(0,8,-3.5),t.add(n);let s=new ut(new Is(5.6,40),new oe({map:$r(256,256,c=>{["#9ad8ff","#fff0b8","#ffb0d0","#fff0b8","#9ad8ff"].forEach((h,u,d)=>{c.fillStyle=h,c.beginPath(),c.arc(128,128,128-u*(128/d.length),0,Math.PI*2),c.fill()})}),roughness:1}));s.rotation.x=-Math.PI/2,s.scale.y=.5,s.position.set(0,.01,1.8),t.add(s);let r=new ut(new se(11.4,3,.3),Ai(4892927));r.position.set(0,3.1,-2.4),r.castShadow=!0,t.add(r);let a=new ut(new se(11,2.6,.2),Ai(16771512,{roughness:.8}));a.position.set(0,3.1,-2.25),t.add(a);for(let c of[-4.9,4.9]){let h=new ut(new se(.4,1.6,.5),Ai(2783960));h.position.set(c,.8,-2.4),t.add(h)}this.holes=new Map,xi.forEach((c,h)=>{let u=-4+h*2,d=new ut(this.geo[c.id],new oe({color:5917290,roughness:1}));d.scale.set(.9,.9,.08),d.position.set(u,3.1,-2.12),t.add(d),this.holes.set(c.id,{x:u,hole:d})});let o=new ut(new se(11,.3,2.3),Ai(14194250));o.position.set(0,.85,.9),o.castShadow=!0,o.receiveShadow=!0,t.add(o);let l=new ut(new se(11,.5,.15),Ai(12088890));l.position.set(0,.55,2),t.add(l);for(let c of[-5.2,5.2]){let h=new ut(new se(.4,.8,2),Ai(12088890));h.position.set(c,.4,.9),t.add(h)}this.kitty=Fh("cat"),this.kitty.scale.setScalar(1.5),this.kitty.position.set(5.8,0,2.6),this.kitty.rotation.y=-.5,t.add(this.kitty)}_start(){this.play=new Qr(this.sh.age,Math.floor(Math.random()*1e9));let t=this.sh;t.clear(),this.lightDots=t.topBar(5,"\u{1F537}"),this.lightDots(0),this.sign=$t("div",{class:"ls-sign"}),this.signText=$t("span"),this.sign.append($t("i",{},"\u{1F537}"),this.signText,$t("button",{class:"ls-again","aria-label":t.t("again"),onclick:e=>{e.stopPropagation(),this._say()}},"\u{1F50A}")),t.layer.append(this.sign),t.sound.setMode("play");for(let e of this.filled.values())this.st.scene.remove(e);this.filled.clear(),this._ask()}_asked(){let t=this.play.target;return{s:bl(t.shape),c:this.play.askColor?Ps(t.color):null}}_ask(){for(let s of this.tiles)this.st.scene.remove(s.g);this.tiles=[];let t=this.play.tiles,e=t.length;t.forEach((s,r)=>{let a=new Ae,o=new ut(this.geo[s.shape],new oe({color:Ps(s.color).hex,roughness:.25,metalness:.05}));o.castShadow=!0,o.scale.setScalar(.95),o.position.y=.95;let l=new ut(new An(1,10,8),new Ie({visible:!1}));l.position.y=.95,l.userData.id=s.id;let c=new ut(new ln(1,1,.05,24),new Ie({color:16773754,transparent:!0,opacity:0,depthWrite:!1}));c.position.y=.02,a.add(o,l,c),a.position.set(((r+.5)/e-.5)*(e<=3?7:9.4),1,.9),a.scale.setScalar(.001),this.st.add(a),this.tiles.push({g:a,mesh:o,hit:l,glow:c,t:s,wig:0,born:-r*.09,base:a.position.clone(),gone:!1})}),this.st.setPicks(this.tiles,s=>this._tap(s)),this.st.focus=null;let n=this._asked();this.signText.textContent=Sl(n.s,n.c),this.sign.classList.remove("pop"),this.sign.offsetWidth,this.sign.classList.add("pop"),this.st.mode="wait",this._say()}_say(){this.sh.sound.play("sparkle");let t=this._asked();this.sh.speak(Sl(t.s,t.c))}_tap(t){if(this.st.mode!=="wait")return;let e=this._asked(),n=this.play.tap(t),s=this.tiles.find(o=>o.t.id===t),r=`${e.s.id}${e.c?"-"+e.c.id:""}`;if(!n.ok){s.wig=.6,this.sh.sound.play("bump"),this.sh.say(this.sh.t("no"),!1,1.6),n.firstMiss&&this.sh.round("shapes",!1,r),setTimeout(()=>this.st.mode==="wait"&&this._say(),900);return}n.first&&this.sh.round("shapes",!0,r),this.st.mode="found",this.st.setPicks([],null);for(let o of this.tiles)o!==s&&(o.gone=!0);this.sh.sound.play("whoosh");let a=this.holes.get(s.t.shape);this.fly={tile:s,from:s.g.position.clone(),to:new E(a.x,3.1-.95,-1.95),t:0,hole:a,color:Ps(s.t.color).hex,shape:s.t.shape},this.lightDots(this.play.round),this.sh.say(this.sh.t("yes"),!0,1.6),setTimeout(()=>this.sh.speak(kh(bl(s.t.shape),this.play.askColor?Ps(s.t.color):null)),1700),setTimeout(()=>{n.finished?(this.st.mode="end",this.sign.remove(),this.sh.sound.setMode("calm"),this.sh.finishCard(this.sh.t("title"),"\u{1F537}",()=>this._start())):this._ask()},4200)}_frame(t,e){let n=this.play&&this.st.mode==="wait"?this.play.hint:null,s=this.st.mode==="wait"?this.st.focusedId():null;for(let a of this.tiles){if(a.born<1){a.born+=t*3;let l=Math.max(0,Math.min(1,a.born));a.g.scale.setScalar(Math.max(.001,l<1?1-Math.pow(1-l,3)+Math.sin(l*Math.PI)*.15:1))}if(a.gone){a.g.scale.multiplyScalar(Math.max(0,1-t*3));continue}if(this.fly&&this.fly.tile===a)continue;a.mesh.rotation.y=Math.sin(e*1.2+a.base.x)*.25,a.g.position.y=a.base.y+Math.sin(e*2+a.base.x)*.04;let o=a.t.id===n||a.t.id===s;a.glow.material.opacity=o?.6+Math.sin(e*6)*.2:0,a.glow.material.color.setHex(a.t.id===s?8048895:16773754),o?a.mesh.position.y=.95+Math.abs(Math.sin(e*6))*.15:a.mesh.position.y=.95,a.wig>0?(a.wig-=t,a.g.rotation.z=Math.sin(a.wig*40)*.3*a.wig):a.g.rotation.z=0}if(this.fly){let a=this.fly;a.t+=t/.8;let o=Math.min(1,a.t),l=o*o*(3-2*o);if(a.tile.g.position.lerpVectors(a.from,a.to,l),a.tile.g.position.y+=Math.sin(o*Math.PI)*1.4,a.tile.g.rotation.y=l*Math.PI*2,a.tile.g.scale.setScalar(1-.05*l),o>=1){let c=this.filled.get(a.shape);c&&this.st.scene.remove(c);let h=new ut(this.geo[a.shape],new oe({color:a.color,roughness:.3}));h.scale.set(.9,.9,.5),h.position.set(a.hole.x,3.1,-2),this.st.add(h),this.filled.set(a.shape,h),this.st.scene.remove(a.tile.g),this.st.sparkle(new E(a.hole.x,3.2,-1.7)),this.sh.sound.play("pop"),this.sh.sound.play("right"),this.kitty.userData.jump=1.4,this.fly=null}}let r=this.kitty;r.userData.jump=Math.max(0,(r.userData.jump||0)-t),r.position.y=r.userData.jump>0?Math.abs(Math.sin(r.userData.jump*9))*.6:0}pause(){this.sh.pause()}dispose(){this.st.dispose(),this.sh.dispose()}},Wm=`
.ls-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #e8508a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.6));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(60,20,40,.3);pointer-events:auto;max-width:94%}
.ls-sign i{font-style:normal;font-size:1.4em}
.ls-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ls-sign.pop{animation:ls-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes ls-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.ls-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`,Tl={start(i,t,e){document.getElementById("ls-style")||document.head.append($t("style",{id:"ls-style"},Wm));let n=new El(i,t||{},e);return Tl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.LearnShapes=Tl;var F_=Tl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
