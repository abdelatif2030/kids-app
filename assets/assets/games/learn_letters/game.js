(()=>{var Lc="170";var sd=0,El=1,rd=2;var zh=1,Uc=2,Bn=3,ci=0,Fe=1,Me=2,ri=0,ns=1,Tl=2,Rl=3,Pl=4,ad=5,wi=100,od=101,cd=102,ld=103,hd=104,ud=200,dd=201,fd=202,pd=203,uo=204,fo=205,gd=206,md=207,xd=208,Ad=209,_d=210,yd=211,vd=212,Cd=213,Id=214,po=0,go=1,mo=2,as=3,xo=4,Ao=5,_o=6,yo=7,Hh=0,Md=1,bd=2,ai=0,wd=1,Sd=2,Ed=3,Td=4,Rd=5,Pd=6,Nc=7;var Vh=300,os=301,cs=302,vo=303,Co=304,ca=306,Ri=1e3,Ti=1001,Io=1002,dn=1003,Dd=1004;var ir=1005;var Cn=1006,Da=1007;var Hn=1008;var Xn=1009,Gh=1010,Wh=1011,Us=1012,Fc=1013,Pi=1014,Vn=1015,$s=1016,Oc=1017,kc=1018,ls=1020,Xh=35902,qh=1021,Yh=1022,un=1023,$h=1024,Zh=1025,is=1026,hs=1027,Jh=1028,Bc=1029,Kh=1030,zc=1031;var Hc=1033,Er=33776,Tr=33777,Rr=33778,Pr=33779,Mo=35840,bo=35841,wo=35842,So=35843,Eo=36196,To=37492,Ro=37496,Po=37808,Do=37809,Lo=37810,Uo=37811,No=37812,Fo=37813,Oo=37814,ko=37815,Bo=37816,zo=37817,Ho=37818,Vo=37819,Go=37820,Wo=37821,Dr=36492,Xo=36494,qo=36495,Qh=36283,Yo=36284,$o=36285,Zo=36286;var Lr=2300,Jo=2301,La=2302,Dl=2400,Ll=2401,Ul=2402;var Ld=3200,Ud=3201;var jh=0,Nd=1,si="",de="srgb",ms="srgb-linear",la="linear",he="srgb";var Bi=7680;var Nl=519,Fd=512,Od=513,kd=514,tu=515,Bd=516,zd=517,Hd=518,Vd=519,Fl=35044;var Ol="300 es",Gn=2e3,Ur=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=1234567,Ts=Math.PI/180,Ns=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Vc(i,t){return(i%t+t)%t}function Gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wd(i,t,e){return i!==t?(e-i)/(t-i):0}function Rs(i,t,e){return(1-e)*i+e*t}function Xd(i,t,e,n){return Rs(i,t,1-Math.exp(-e*n))}function qd(i,t=1){return t-Math.abs(Vc(i,t*2)-t)}function Yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jd(i,t){return i+Math.random()*(t-i)}function Kd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(kl=i);let t=kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jd(i){return i*Ts}function tf(i){return i*Ns}function ef(i){return(i&i-1)===0&&i!==0}function nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var eu={DEG2RAD:Ts,RAD2DEG:Ns,generateUUID:Fi,clamp:Ne,euclideanModulo:Vc,mapLinear:Gd,inverseLerp:Wd,lerp:Rs,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:$d,randInt:Zd,randFloat:Jd,randFloatSpread:Kd,seededRandom:Qd,degToRad:jd,radToDeg:tf,isPowerOfTwo:ef,ceilPowerOfTwo:nf,floorPowerOfTwo:sf,setQuaternionFromProperEuler:rf,normalize:Xe,denormalize:ji},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],I=s[1],_=s[4],x=s[7],D=s[2],b=s[5],R=s[8];return r[0]=a*A+o*I+c*D,r[3]=a*g+o*_+c*b,r[6]=a*p+o*x+c*R,r[1]=l*A+h*I+u*D,r[4]=l*g+h*_+u*b,r[7]=l*p+h*x+u*R,r[2]=d*A+f*I+m*D,r[5]=d*g+f*_+m*b,r[8]=d*p+f*x+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=f*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ua=new Xt;function nu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){let i=Fs("canvas");return i.style.display="block",i}var Bl={};function Ss(i){i in Bl||(Bl[i]=!0,console.warn(i))}function of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zl=[.64,.33,.3,.6,.15,.06],Hl=[.2126,.7152,.0722],Vl=[.3127,.329],Gl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[ms]:{primaries:zl,whitePoint:Vl,transfer:la,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:Hl,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:zl,whitePoint:Vl,transfer:he,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:Hl,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var zi,Ko=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Fs("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hf=0,Nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Na(s[a].image)):r.push(Na(s[a]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Na(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uf=0,Je=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=Cn,a=Hn,o=un,c=Xn,l=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Fi(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Vh;Je.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],A=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,x=(f+1)/2,D=(p+1)/2,b=(h+d)/4,R=(u+A)/4,S=(m+g)/4;return _>x&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=R/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=S/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=S/r),this.set(n,s,r,e),this}let I=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(I)<.001&&(I=1),this.x=(g-m)/I,this.y=(u-A)/I,this.z=(d-h)/I,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Nr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(u!==A||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*A,I=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),b=Math.atan2(D,p*I);g=Math.sin(g*b)/D,o=Math.sin(o*b)/D}let x=o*I;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fa=new T,Xl=new hi,In=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),rr.subVectors(this.max,Cs),Hi.subVectors(t.a,Cs),Vi.subVectors(t.b,Cs),Gi.subVectors(t.c,Cs),Qn.subVectors(Vi,Hi),jn.subVectors(Gi,Vi),_i.subVectors(Hi,Gi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!Oa(e,Hi,Vi,Gi,rr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Hi,Vi,Gi,rr))?!1:(ar.crossVectors(Qn,jn),e=[ar.x,ar.y,ar.z],Oa(e,Hi,Vi,Gi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new T,new T,new T,new T,new T,new T,new T,new T],cn=new T,sr=new In,Hi=new T,Vi=new T,Gi=new T,Qn=new T,jn=new T,_i=new T,Cs=new T,rr=new T,ar=new T,yi=new T;function Oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var df=new In,Is=new T,ka=new T,Os=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);let e=Is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(ka)),this.expandByPoint(Is.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new T,Ba=new T,or=new T,ti=new T,za=new T,cr=new T,Ha=new T,Or=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ba.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ba);let r=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=ti.dot(this.direction),c=-ti.dot(or),l=ti.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ba).addScaledVector(or,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){za.subVectors(e,t),cr.subVectors(n,t),Ha.crossVectors(za,cr);let a=this.direction.dot(Ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);let c=o*this.direction.dot(cr.crossVectors(ti,cr));if(c<0)return null;let l=o*this.direction.dot(za.cross(ti));if(l<0||c+l>a)return null;let h=-o*ti.dot(Ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,A,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-A*l,e[9]=-o*c,e[2]=A-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,A=l*u;e[0]=d+A*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=A+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,A=l*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+A,e[1]=c*u,e[5]=A*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+A,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ff,t,pf)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ei.crossVectors(n,Qe),ei.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ei.crossVectors(n,Qe)),ei.normalize(),lr.crossVectors(Qe,ei),s[0]=ei.x,s[4]=lr.x,s[8]=Qe.x,s[1]=ei.y,s[5]=lr.y,s[9]=Qe.y,s[2]=ei.z,s[6]=lr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],I=n[3],_=n[7],x=n[11],D=n[15],b=s[0],R=s[4],S=s[8],M=s[12],y=s[1],P=s[5],V=s[9],F=s[13],k=s[2],K=s[6],z=s[10],nt=s[14],G=s[3],ht=s[7],ft=s[11],vt=s[15];return r[0]=a*b+o*y+c*k+l*G,r[4]=a*R+o*P+c*K+l*ht,r[8]=a*S+o*V+c*z+l*ft,r[12]=a*M+o*F+c*nt+l*vt,r[1]=h*b+u*y+d*k+f*G,r[5]=h*R+u*P+d*K+f*ht,r[9]=h*S+u*V+d*z+f*ft,r[13]=h*M+u*F+d*nt+f*vt,r[2]=m*b+A*y+g*k+p*G,r[6]=m*R+A*P+g*K+p*ht,r[10]=m*S+A*V+g*z+p*ft,r[14]=m*M+A*F+g*nt+p*vt,r[3]=I*b+_*y+x*k+D*G,r[7]=I*R+_*P+x*K+D*ht,r[11]=I*S+_*V+x*z+D*ft,r[15]=I*M+_*F+x*nt+D*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+A*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],I=u*g*l-A*d*l+A*c*f-o*g*f-u*c*p+o*d*p,_=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,x=h*A*l-m*u*l+m*o*f-a*A*f-h*o*p+a*u*p,D=m*u*c-h*A*c-m*o*d+a*A*d+h*o*g-a*u*g,b=e*I+n*_+s*x+r*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return t[0]=I*R,t[1]=(A*d*r-u*g*r-A*s*f+n*g*f+u*s*p-n*d*p)*R,t[2]=(o*g*r-A*c*r+A*s*l-n*g*l-o*s*p+n*c*p)*R,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,t[4]=_*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*R,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*R,t[8]=x*R,t[9]=(m*u*r-h*A*r-m*n*f+e*A*f+h*n*p-e*u*p)*R,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*R,t[12]=D*R,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*R,t[14]=(m*o*s-a*A*s-m*n*c+e*A*c+a*n*g-e*o*g)*R,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,A=a*h,g=a*u,p=o*u,I=c*l,_=c*h,x=c*u,D=n.x,b=n.y,R=n.z;return s[0]=(1-(A+p))*D,s[1]=(f+x)*D,s[2]=(m-_)*D,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(d+p))*b,s[6]=(g+I)*b,s[7]=0,s[8]=(m+_)*R,s[9]=(g-I)*R,s[10]=(1-(d+A))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);let l=1/r,h=1/a,u=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===Gn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ur)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,m,A;if(o===Gn)m=(a+r)*u,A=-2*u;else if(o===Ur)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new T,ln=new ve,ff=new T(0,0,0),pf=new T(1,1,1),ei=new T,lr=new T,Qe=new T,ql=new ve,Yl=new hi,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gf=0,$l=new T,Xi=new hi,Fn=new ve,hr=new T,Ms=new T,mf=new T,xf=new hi,Zl=new T(1,0,0),Jl=new T(0,1,0),Kl=new T(0,0,1),Ql={type:"added"},Af={type:"removed"},qi={type:"childadded",child:null},Va={type:"childremoved",child:null},Ye=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Mn,n=new hi,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Xt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ms,hr,this.up):Fn.lookAt(hr,Ms,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Af),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new T(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new T,On=new T,Ga=new T,kn=new T,Yi=new T,$i=new T,jl=new T,Wa=new T,Xa=new T,qa=new T,Ya=new ue,$a=new ue,Za=new ue,Si=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),On.subVectors(n,e),Ga.subVectors(t,e);let a=hn.dot(hn),o=hn.dot(On),c=hn.dot(Ga),l=On.dot(On),h=On.dot(Ga),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ya.setScalar(0),$a.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ya,r.x),a.addScaledVector($a,r.y),a.addScaledVector(Za,r.z),a}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),On.subVectors(t,e),hn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),hn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),$i.subVectors(r,n),Wa.subVectors(t,n);let c=Yi.dot(Wa),l=$i.dot(Wa);if(c<=0&&l<=0)return e.copy(n);Xa.subVectors(t,s);let h=Yi.dot(Xa),u=$i.dot(Xa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Yi,a);qa.subVectors(t,r);let f=Yi.dot(qa),m=$i.dot(qa);if(m>=0&&f<=m)return e.copy(r);let A=f*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector($i,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return jl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(jl,o);let p=1/(g+A+d);return a=A*p,o=d*p,e.copy(n).addScaledVector(Yi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Vc(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ja(a,r,t+1/3),this.g=Ja(a,r,t),this.b=Ja(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return ne.fromWorkingColorSpace(He.copy(this),t),Math.round(Ne(He.r*255,0,255))*65536+Math.round(Ne(He.g*255,0,255))*256+Math.round(Ne(He.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=de){ne.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(ur);let n=Rs(ni.h,ur.h,e),s=Rs(ni.s,ur.s,e),r=Rs(ni.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Qt;Qt.NAMES=iu;var _f=0,Di=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Fi(),this.name="",this.blending=ns,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ie=class extends Di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new T,dr=new ot,nn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}};var kr=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Br=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},yf=0,en=new ve,Ka=new Ye,Zi=new T,je=new In,bs=new In,Ue=new T,Ge=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?Br:kr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(je.min,bs.min),je.expandByPoint(Ue),Ue.addVectors(je.max,bs.max),je.expandByPoint(Ue)):(je.expandByPoint(bs.min),je.expandByPoint(bs.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(Zi.fromBufferAttribute(t,l),Ue.add(Zi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new T,c[S]=new T;let l=new T,h=new T,u=new T,d=new ot,f=new ot,m=new ot,A=new T,g=new T;function p(S,M,y){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[S].add(A),o[M].add(A),o[y].add(A),c[S].add(g),c[M].add(g),c[y].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let S=0,M=I.length;S<M;++S){let y=I[S],P=y.start,V=y.count;for(let F=P,k=P+V;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new T,x=new T,D=new T,b=new T;function R(S){D.fromBufferAttribute(s,S),b.copy(D);let M=o[S];_.copy(M),_.sub(D.multiplyScalar(D.dot(M))).normalize(),x.crossVectors(b,M);let P=x.dot(c[S])<0?-1:1;a.setXYZW(S,_.x,_.y,_.z,P)}for(let S=0,M=I.length;S<M;++S){let y=I[S],P=y.start,V=y.count;for(let F=P,k=P+V;F<k;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?f=c[A]*o.data.stride+o.offset:f=c[A]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},th=new ve,vi=new Or,fr=new Os,eh=new T,pr=new T,gr=new T,mr=new T,Qa=new T,xr=new T,nh=new T,Ar=new T,Y=class extends Ye{constructor(t=new Ge,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Qa.fromBufferAttribute(u,t),a?xr.addScaledVector(Qa,h):xr.addScaledVector(Qa.sub(e),h))}e.add(xr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(fr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(fr,eh)===null||vi.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),vi.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],I=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=I,D=_;x<D;x+=3){let b=o.getX(x),R=o.getX(x+1),S=o.getX(x+2);s=_r(this,p,t,n,l,h,u,b,R,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let I=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);s=_r(this,a,t,n,l,h,u,I,_,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],I=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=I,D=_;x<D;x+=3){let b=x,R=x+1,S=x+2;s=_r(this,p,t,n,l,h,u,b,R,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let I=g,_=g+1,x=g+2;s=_r(this,a,t,n,l,h,u,I,_,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function vf(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ci,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:i}}function _r(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,pr),i.getVertexPosition(c,gr),i.getVertexPosition(l,mr);let h=vf(i,t,e,n,pr,gr,mr,nh);if(h){let u=new T;Si.getBarycoord(nh,pr,gr,mr,u),s&&(h.uv=Si.getInterpolatedAttribute(s,o,c,l,u,new ot)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,c,l,u,new ot)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};Si.getNormal(pr,gr,mr,d.normal),h.face=d,h.barycoord=u}return h}var le=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(A,g,p,I,_,x,D,b,R,S,M){let y=x/R,P=D/S,V=x/2,F=D/2,k=b/2,K=R+1,z=S+1,nt=0,G=0,ht=new T;for(let ft=0;ft<z;ft++){let vt=ft*P-F;for(let Nt=0;Nt<K;Nt++){let Zt=Nt*y-V;ht[A]=Zt*I,ht[g]=vt*_,ht[p]=k,l.push(ht.x,ht.y,ht.z),ht[A]=0,ht[g]=0,ht[p]=b>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Nt/R),u.push(1-ft/S),nt+=1}}for(let ft=0;ft<S;ft++)for(let vt=0;vt<R;vt++){let Nt=d+vt+K*ft,Zt=d+vt+K*(ft+1),$=d+(vt+1)+K*(ft+1),et=d+(vt+1)+K*ft;c.push(Nt,Zt,et),c.push(Zt,$,et),G+=6}o.addGroup(f,G,M),f+=G,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function Cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function su(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var If={clone:us,merge:qe},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new T,ih=new ot,sh=new ot,Ve=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,ih,sh),e.subVectors(sh,ih)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,Ki=1,tc=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Ji,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let c=new Ve(Ji,Ki,t,e);c.layers=this.layers,this.add(c);let l=new Ve(Ji,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Hr=class extends Je{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ec=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ri});r.uniforms.tEquirect.value=e;let a=new Y(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Cn),new tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ja=new T,wf=new T,Sf=new Xt,zn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ja.subVectors(n,e).cross(wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sf.getNormalMatrix(t),s=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Os,yr=new T,Bs=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],I=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+a,d+h,g+m,x+I).normalize(),n[3].setComponents(c-a,d-h,g-m,x-I).normalize(),n[4].setComponents(c-o,d-u,g-A,x-_).normalize(),e===Gn)n[5].setComponents(c+o,d+u,g+A,x+_).normalize();else if(e===Ur)n[5].setComponents(o,u,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ru(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ef(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],A=u[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let A=u[f];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Te=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let I=p*d-a;for(let _=0;_<l;_++){let x=_*u-r;m.push(x,-I,0),A.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let I=0;I<o;I++){let _=I+l*p,x=I+l*(p+1),D=I+1+l*(p+1),b=I+1+l*p;f.push(_,x,b),f.push(x,D,b)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,eg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Tf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:Df,alphatest_fragment:Lf,alphatest_pars_fragment:Uf,aomap_fragment:Nf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:kf,begin_vertex:Bf,beginnormal_vertex:zf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:$f,color_pars_fragment:Zf,color_pars_vertex:Jf,color_vertex:Kf,common:Qf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:cp,envmap_pars_fragment:lp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:vp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:gp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:xp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:Cp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:wp,lights_physical_pars_fragment:Sp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Fp,map_particle_fragment:Op,map_particle_pars_fragment:kp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:qp,normal_fragment_maps:Yp,normal_pars_fragment:$p,normal_pars_vertex:Zp,normal_vertex:Jp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:a0,dithering_pars_fragment:o0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:g0,skinning_vertex:m0,skinnormal_vertex:x0,specularmap_fragment:A0,specularmap_pars_fragment:_0,tonemapping_fragment:y0,tonemapping_pars_fragment:v0,transmission_fragment:C0,transmission_pars_fragment:I0,uv_pars_fragment:M0,uv_pars_vertex:b0,uv_vertex:w0,worldpos_vertex:S0,background_vert:E0,background_frag:T0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:D0,cube_frag:L0,depth_vert:U0,depth_frag:N0,distanceRGBA_vert:F0,distanceRGBA_frag:O0,equirect_vert:k0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:K0,meshphysical_vert:Q0,meshphysical_frag:j0,meshtoon_vert:tg,meshtoon_frag:eg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:ag,sprite_frag:og},dt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},vn={basic:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:qe([dt.points,dt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:qe([dt.common,dt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:qe([dt.sprite,dt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:qe([dt.common,dt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:qe([dt.lights,dt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vn.physical={uniforms:qe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var vr={r:0,b:0,g:0},Ii=new Mn,cg=new ve;function lg(i,t,e,n,s,r,a){let o=new Qt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(I){let _=I.isScene===!0?I.background:null;return _&&_.isTexture&&(_=(I.backgroundBlurriness>0?e:t).get(_)),_}function A(I){let _=!1,x=m(I);x===null?p(o,c):x&&x.isColor&&(p(x,1),_=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(I,_){let x=m(_);x&&(x.isCubeTexture||x.mapping===ca)?(h===void 0&&(h=new Y(new le(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:us(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(_.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Ii)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Y(new Te(2,2),new bn({name:"BackgroundMaterial",uniforms:us(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null))}function p(I,_){I.getRGB(vr,su(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(I,_=1){o.set(I),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,p(o,c)},render:A,addToRenderList:g}}function hg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,P,V,F,k){let K=!1,z=u(F,V,P);r!==z&&(r=z,l(r.object)),K=f(y,F,V,k),K&&m(y,F,V,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(y,P,V,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,V){let F=V.wireframe===!0,k=n[y.id];k===void 0&&(k={},n[y.id]=k);let K=k[P.id];K===void 0&&(K={},k[P.id]=K);let z=K[F];return z===void 0&&(z=d(c()),K[F]=z),z}function d(y){let P=[],V=[],F=[];for(let k=0;k<e;k++)P[k]=0,V[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,V,F){let k=r.attributes,K=P.attributes,z=0,nt=V.getAttributes();for(let G in nt)if(nt[G].location>=0){let ft=k[G],vt=K[G];if(vt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function m(y,P,V,F){let k={},K=P.attributes,z=0,nt=V.getAttributes();for(let G in nt)if(nt[G].location>=0){let ft=K[G];ft===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));let vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),k[G]=vt,z++}r.attributes=k,r.attributesNum=z,r.index=F}function A(){let y=r.newAttributes;for(let P=0,V=y.length;P<V;P++)y[P]=0}function g(y){p(y,0)}function p(y,P){let V=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;V[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),k[y]!==P&&(i.vertexAttribDivisor(y,P),k[y]=P)}function I(){let y=r.newAttributes,P=r.enabledAttributes;for(let V=0,F=P.length;V<F;V++)P[V]!==y[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function _(y,P,V,F,k,K,z){z===!0?i.vertexAttribIPointer(y,P,V,k,K):i.vertexAttribPointer(y,P,V,F,k,K)}function x(y,P,V,F){A();let k=F.attributes,K=V.getAttributes(),z=P.defaultAttributeValues;for(let nt in K){let G=K[nt];if(G.location>=0){let ht=k[nt];if(ht===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let ft=ht.normalized,vt=ht.itemSize,Nt=t.get(ht);if(Nt===void 0)continue;let Zt=Nt.buffer,$=Nt.type,et=Nt.bytesPerElement,It=$===i.INT||$===i.UNSIGNED_INT||ht.gpuType===Fc;if(ht.isInterleavedBufferAttribute){let ct=ht.data,Ft=ct.stride,St=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<G.locationSize;kt++)g(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let kt=0;kt<G.locationSize;kt++)_(G.location+kt,vt/G.locationSize,$,ft,Ft*et,(St+vt/G.locationSize*kt)*et,It)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,ht.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<G.locationSize;ct++)g(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ct=0;ct<G.locationSize;ct++)_(G.location+ct,vt/G.locationSize,$,ft,vt*et,vt/G.locationSize*ct*et,It)}}else if(z!==void 0){let ft=z[nt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(G.location,ft);break;case 3:i.vertexAttrib3fv(G.location,ft);break;case 4:i.vertexAttrib4fv(G.location,ft);break;default:i.vertexAttrib1fv(G.location,ft)}}}}I()}function D(){S();for(let y in n){let P=n[y];for(let V in P){let F=P[V];for(let k in F)h(F[k].object),delete F[k];delete P[V]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let V in P){let F=P[V];for(let k in F)h(F[k].object),delete F[k];delete P[V]}delete n[y.id]}function R(y){for(let P in n){let V=n[P];if(V[y.id]===void 0)continue;let F=V[y.id];for(let k in F)h(F[k].object),delete F[k];delete V[y.id]}}function S(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:A,enableAttribute:g,disableUnusedAttributes:I}}function ug(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function dg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let S=R===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Vn&&!S)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:I,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:D,maxSamples:b}}function fg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let I=r?0:n,_=I*4,x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let D=0;D!==_;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let p=f+A*4,I=d.matrixWorldInverse;o.getNormalMatrix(I),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==A;++_,x+=4)a.copy(u[_]).applyMatrix4(I,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function pg(i){let t=new WeakMap;function e(a,o){return o===vo?a.mapping=os:o===Co&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===vo||o===Co)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ec(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vr=class extends zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,rh=[.125,.215,.35,.446,.526,.582],Ei=20,to=new Vr,ah=new Qt,eo=null,no=0,io=0,so=!1,bi=(1+Math.sqrt(5))/2,Qi=1/bi,oh=[new T(-bi,Qi,0),new T(bi,Qi,0),new T(-Qi,0,bi),new T(Qi,0,bi),new T(0,bi,-Qi),new T(0,bi,Qi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=so,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:$s,format:un,colorSpace:ms,depthBuffer:!1},s=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(r)),this._blurMaterial=mg(r,t,e)}return s}_compileMaterial(t){let e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ah),h.toneMapping=ai,h.autoClear=!1;let f=new ie({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new Y(new le,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(ah),A=!0);for(let p=0;p<6;p++){let I=p%3;I===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):I===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Cr(s,I*_,p>2?_:0,_,_),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oh[(s-r-1)%oh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Y(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):Ei;g>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);let p=[],I=0;for(let R=0;R<Ei;++R){let S=R/A,M=Math.exp(-S*S/2);p.push(M),R===0?I+=M:R<g&&(I+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/I;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let x=this._sizeLods[s],D=3*x*(s>_-ts?s-_+ts:0),b=4*(this._cubeSize-x);Cr(e,D,b,3*x,2*x),c.setRenderTarget(e),c.render(u,to)}};function gg(i){let t=[],e=[],n=[],s=i,r=i-ts+1+rh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ts?c=rh[a-i+ts-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,A=3,g=2,p=1,I=new Float32Array(A*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let b=0;b<f;b++){let R=b%3*2/3-1,S=b>2?0:-1,M=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];I.set(M,A*m*b),_.set(d,g*m*b);let y=[b,b,b,b,b,b];x.set(y,p*m*b)}let D=new Ge;D.setAttribute("position",new nn(I,A)),D.setAttribute("uv",new nn(_,g)),D.setAttribute("faceIndex",new nn(x,p)),t.push(D),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ch(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mg(i,t,e){let n=new Float32Array(Ei),s=new T(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function lh(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function hh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function xg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===vo||c===Co,h=c===os||c===cs;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ds(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ds(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,A=0;if(f!==null){let I=f.array;A=f.version;for(let _=0,x=I.length;_<x;_+=3){let D=I[_+0],b=I[_+1],R=I[_+2];d.push(D,b,b,R,R,D)}}else if(m!==void 0){let I=m.array;A=m.version;for(let _=0,x=I.length/3-1;_<x;_+=3){let D=_+0,b=_+1,R=_+2;d.push(D,b,b,R,R,D)}}else return;let g=new(nu(d)?Br:kr)(d,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function yg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,A,0,m);let p=0;for(let I=0;I<m;I++)p+=f[I]*A[I];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cg(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),A===!0&&(_=3);let x=o.attributes.position.count*_,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*D*4*u),R=new Fr(b,x,D,u);R.type=Vn,R.needsUpdate=!0;let S=_*4;for(let y=0;y<u;y++){let P=g[y],V=p[y],F=I[y],k=x*D*4*y;for(let K=0;K<P.count;K++){let z=K*S;f===!0&&(s.fromBufferAttribute(P,K),b[k+z+0]=s.x,b[k+z+1]=s.y,b[k+z+2]=s.z,b[k+z+3]=0),m===!0&&(s.fromBufferAttribute(V,K),b[k+z+4]=s.x,b[k+z+5]=s.y,b[k+z+6]=s.z,b[k+z+7]=0),A===!0&&(s.fromBufferAttribute(F,K),b[k+z+8]=s.x,b[k+z+9]=s.y,b[k+z+10]=s.z,b[k+z+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ot(x,D)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let A=0;A<l.length;A++)f+=l[A];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ig(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Gr=class extends Je{constructor(t,e,n,s,r,a,o,c,l,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Pi),n===void 0&&h===hs&&(n=ls),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},au=new Je,uh=new Gr(1,1),ou=new Fr,cu=new jo,lu=new Hr,dh=[],fh=[],ph=new Float32Array(16),gh=new Float32Array(9),mh=new Float32Array(4);function xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),Pe(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),Pe(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),Pe(e,n)}}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=tu,r=uh):r=au,e.setTexture2D(t||r,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lu,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ou,s)}function Gg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return wg;case 35666:return Sg;case 35674:return Eg;case 35675:return Tg;case 35676:return Rg;case 5124:case 35670:return Pg;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(i,t){i.uniform1fv(this.addr,t)}function Xg(i,t){let e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function qg(i,t){let e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Yg(i,t){let e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){let e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zg(i,t){let e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jg(i,t){let e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kg(i,t){i.uniform1iv(this.addr,t)}function Qg(i,t){i.uniform2iv(this.addr,t)}function jg(i,t){i.uniform3iv(this.addr,t)}function tm(i,t){i.uniform4iv(this.addr,t)}function em(i,t){i.uniform1uiv(this.addr,t)}function nm(i,t){i.uniform2uiv(this.addr,t)}function im(i,t){i.uniform3uiv(this.addr,t)}function sm(i,t){i.uniform4uiv(this.addr,t)}function rm(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||au,r[a])}function am(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function om(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||lu,r[a])}function cm(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ou,r[a])}function lm(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return $g;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Qg;case 35668:case 35672:return jg;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return cm}}var nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}},ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ro=/(\w+)(\])?(\[|\.)?/g;function xh(i,t){i.seq.push(t),i.map[t.id]=t}function hm(i,t,e){let n=i.name,s=n.length;for(ro.lastIndex=0;;){let r=ro.exec(n),a=ro.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xh(e,l===void 0?new nc(o,i,t):new ic(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new sc(o),xh(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ah(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var um=37297,dm=0;function fm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _h=new Xt;function pm(i){ne._getMatrix(_h,ne.workingColorSpace,i);let t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case la:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(t),a)}else return s}function gm(i,t){let e=pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,t){let e;switch(t){case wd:e="Linear";break;case Sd:e="Reinhard";break;case Ed:e="Cineon";break;case Td:e="ACESFilmic";break;case Pd:e="AgX";break;case Nc:e="Neutral";break;case Rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ir=new T;function xm(){ne.getLuminanceCoefficients(Ir);let i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function _m(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ym(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Es(i){return i!==""}function vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(vm,Im)}var Cm=new Map;function Im(i,t){let e=$t[t];if(e===void 0){let n=Cm.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}var Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(Mm,bm)}function bm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case cs:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Em(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Tm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Md:t="ENVMAP_BLENDING_MIX";break;case bd:t="ENVMAP_BLENDING_ADD";break}return t}function Rm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=wm(e),l=Sm(e),h=Em(e),u=Tm(e),d=Rm(e),f=Am(e),m=_m(r),A=s.createProgram(),g,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Es).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(g=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?$t.tonemapping_pars_fragment:"",e.toneMapping!==ai?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=rc(a),a=vh(a,e),a=Ch(a,e),o=rc(o),o=vh(o,e),o=Ch(o,e),a=Ih(a),o=Ih(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=I+g+a,x=I+p+o,D=Ah(s,s.VERTEX_SHADER,_),b=Ah(s,s.FRAGMENT_SHADER,x);s.attachShader(A,D),s.attachShader(A,b),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function R(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(A).trim(),F=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(b).trim(),K=!0,z=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,D,b);else{let nt=yh(s,D,"vertex"),G=yh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+nt+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||k==="")&&(z=!1);z&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:F,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(D),s.deleteShader(b),S=new rs(s,A),M=ym(s,A)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(A,um)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=b,this}var Dm=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oc(t),e.set(t,n)),n}},oc=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function Lm(i,t,e,n,s,r,a){let o=new ks,c=new ac,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,P,V,F){let k=V.fog,K=F.geometry,z=M.isMeshStandardMaterial?V.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),G=nt&&nt.mapping===ca?nt.image.height:null,ht=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=ft!==void 0?ft.length:0,Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let Zt,$,et,It;if(ht){let ce=vn[ht];Zt=ce.vertexShader,$=ce.fragmentShader}else Zt=M.vertexShader,$=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),It=c.getFragmentShaderID(M);let ct=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),St=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,jt=!!M.map,Q=!!M.matcap,rt=!!nt,E=!!M.aoMap,wt=!!M.lightMap,it=!!M.bumpMap,Ct=!!M.normalMap,ut=!!M.displacementMap,Bt=!!M.emissiveMap,_t=!!M.metalnessMap,w=!!M.roughnessMap,v=M.anisotropy>0,O=M.clearcoat>0,Z=M.dispersion>0,tt=M.iridescence>0,J=M.sheen>0,Et=M.transmission>0,pt=v&&!!M.anisotropyMap,yt=O&&!!M.clearcoatMap,Kt=O&&!!M.clearcoatNormalMap,at=O&&!!M.clearcoatRoughnessMap,Mt=tt&&!!M.iridescenceMap,zt=tt&&!!M.iridescenceThicknessMap,Ht=J&&!!M.sheenColorMap,bt=J&&!!M.sheenRoughnessMap,ee=!!M.specularMap,Yt=!!M.specularColorMap,pe=!!M.specularIntensityMap,L=Et&&!!M.transmissionMap,gt=Et&&!!M.thicknessMap,W=!!M.gradientMap,j=!!M.alphaMap,At=M.alphaTest>0,mt=!!M.alphaHash,Gt=!!M.extensions,Ie=ai;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Be={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:$,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:It,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:kt,batchingColor:kt&&F._colorsTexture!==null,instancing:St,instancingColor:St&&F.instanceColor!==null,instancingMorph:St&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ms,alphaToCoverage:!!M.alphaToCoverage,map:jt,matcap:Q,envMap:rt,envMapMode:rt&&nt.mapping,envMapCubeUVHeight:G,aoMap:E,lightMap:wt,bumpMap:it,normalMap:Ct,displacementMap:d&&ut,emissiveMap:Bt,normalMapObjectSpace:Ct&&M.normalMapType===Nd,normalMapTangentSpace:Ct&&M.normalMapType===jh,metalnessMap:_t,roughnessMap:w,anisotropy:v,anisotropyMap:pt,clearcoat:O,clearcoatMap:yt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:at,dispersion:Z,iridescence:tt,iridescenceMap:Mt,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Ht,sheenRoughnessMap:bt,specularMap:ee,specularColorMap:Yt,specularIntensityMap:pe,transmission:Et,transmissionMap:L,thicknessMap:gt,gradientMap:W,opaque:M.transparent===!1&&M.blending===ns&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:At,alphaHash:mt,combine:M.combine,mapUv:jt&&A(M.map.channel),aoMapUv:E&&A(M.aoMap.channel),lightMapUv:wt&&A(M.lightMap.channel),bumpMapUv:it&&A(M.bumpMap.channel),normalMapUv:Ct&&A(M.normalMap.channel),displacementMapUv:ut&&A(M.displacementMap.channel),emissiveMapUv:Bt&&A(M.emissiveMap.channel),metalnessMapUv:_t&&A(M.metalnessMap.channel),roughnessMapUv:w&&A(M.roughnessMap.channel),anisotropyMapUv:pt&&A(M.anisotropyMap.channel),clearcoatMapUv:yt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&A(M.sheenRoughnessMap.channel),specularMapUv:ee&&A(M.specularMap.channel),specularColorMapUv:Yt&&A(M.specularColorMap.channel),specularIntensityMapUv:pe&&A(M.specularIntensityMap.channel),transmissionMapUv:L&&A(M.transmissionMap.channel),thicknessMapUv:gt&&A(M.thicknessMap.channel),alphaMapUv:j&&A(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ct||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(jt||j),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:jt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===he,decodeVideoTextureEmissive:Bt&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Me,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(I(y,M),_(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function I(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=m[M.type],P;if(y){let V=vn[y];P=If.clone(V.uniforms)}else P=M.uniforms;return P}function D(M,y){let P;for(let V=0,F=h.length;V<F;V++){let k=h[V];if(k.cacheKey===y){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Pm(i,y,M,r),h.push(P)),P}function b(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function S(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:S}}function Um(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function o(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Nm),n.length>1&&n.sort(d||bh),s.length>1&&s.sort(d||bh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Fm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wh,i.set(n,[a])):s>=r.length?(a=new wh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Qt};break;case"SpotLight":e={position:new T,direction:new T,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bm=0;function zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hm(i){let t=new Om,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new ve,a=new ve;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,I=0,_=0,x=0,D=0,b=0,R=0;l.sort(zm);for(let M=0,y=l.length;M<y;M++){let P=l[M],V=P.color,F=P.intensity,k=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*F,u+=V.g*F,d+=V.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);R++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,G=e.get(P);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=P.shadow.matrix,I++}n.directional[f]=z,f++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(V).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[A]=z;let nt=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,nt.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[A]=nt.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.spotShadow[A]=G,n.spotShadowMap[A]=K,x++}A++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(V).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let nt=P.shadow,G=e.get(P);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let S=n.hash;(S.directionalLength!==f||S.pointLength!==m||S.spotLength!==A||S.rectAreaLength!==g||S.hemiLength!==p||S.numDirectionalShadows!==I||S.numPointShadows!==_||S.numSpotShadows!==x||S.numSpotMaps!==D||S.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+D-b,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,S.directionalLength=f,S.pointLength=m,S.spotLength=A,S.rectAreaLength=g,S.hemiLength=p,S.numDirectionalShadows=I,S.numPointShadows=_,S.numSpotShadows=x,S.numSpotMaps=D,S.numLightProbes=R,n.version=Bm++)}function c(l,h){let u=0,d=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,I=l.length;p<I;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function Sh(i){let t=new Hm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Vm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sh(i),t.set(s,[o])):r>=a.length?(o=new Sh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var cc=class extends Di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lc=class extends Di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,t,e){let n=new Bs,s=new ot,r=new ot,a=new ue,o=new cc({depthPacking:Ud}),c=new lc,l={},h=e.maxTextureSize,u={[ci]:Fe,[Fe]:ci,[Me]:Me},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Y(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let p=this.type;this.render=function(b,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ri),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let F=p!==Bn&&this.type===Bn,k=p===Bn&&this.type!==Bn;for(let K=0,z=b.length;K<z;K++){let nt=b[K],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||F===!0||k===!0){let vt=this.type!==Bn?{minFilter:dn,magFilter:dn}:{};G.map!==null&&G.map.dispose(),G.map=new qn(s.x,s.y,vt),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ft=G.getViewportCount();for(let vt=0;vt<ft;vt++){let Nt=G.getViewport(vt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),V.viewport(a),G.updateMatrices(nt,vt),n=G.getFrustum(),x(R,S,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===Bn&&I(G,S),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,y,P)};function I(b,R){let S=t.update(A);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,S,d,A,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,S,f,A,null)}function _(b,R,S,M){let y=null,P=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=S.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=y.uuid,F=R.uuid,k=l[V];k===void 0&&(k={},l[V]=k);let K=k[F];K===void 0&&(K=y.clone(),k[F]=K,R.addEventListener("dispose",D)),y=K}if(y.visible=R.visible,y.wireframe=R.wireframe,M===Bn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,S.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=S}return y}function x(b,R,S,M,y){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let F=t.update(b),k=b.material;if(Array.isArray(k)){let K=F.groups;for(let z=0,nt=K.length;z<nt;z++){let G=K[z],ht=k[G.materialIndex];if(ht&&ht.visible){let ft=_(b,ht,M,y);b.onBeforeShadow(i,b,R,S,F,ft,G),i.renderBufferDirect(S,null,F,ft,b,G),b.onAfterShadow(i,b,R,S,F,ft,G)}}}else if(k.visible){let K=_(b,k,M,y);b.onBeforeShadow(i,b,R,S,F,K,null),i.renderBufferDirect(S,null,F,K,b,null),b.onAfterShadow(i,b,R,S,F,K,null)}}let V=b.children;for(let F=0,k=V.length;F<k;F++)x(V[F],R,S,M,y)}function D(b){b.target.removeEventListener("dispose",D);for(let S in l){let M=l[S],y=b.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var qm={[po]:go,[mo]:_o,[xo]:yo,[as]:Ao,[go]:po,[_o]:mo,[yo]:xo,[Ao]:as};function Ym(i,t){function e(){let L=!1,gt=new ue,W=null,j=new ue(0,0,0,0);return{setMask:function(At){W!==At&&!L&&(i.colorMask(At,At,At,At),W=At)},setLocked:function(At){L=At},setClear:function(At,mt,Gt,Ie,Be){Be===!0&&(At*=Ie,mt*=Ie,Gt*=Ie),gt.set(At,mt,Gt,Ie),j.equals(gt)===!1&&(i.clearColor(At,mt,Gt,Ie),j.copy(gt))},reset:function(){L=!1,W=null,j.set(-1,0,0,0)}}}function n(){let L=!1,gt=!1,W=null,j=null,At=null;return{setReversed:function(mt){if(gt!==mt){let Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Ie=At;At=null,this.setClear(Ie)}gt=mt},getReversed:function(){return gt},setTest:function(mt){mt?ct(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(mt){W!==mt&&!L&&(i.depthMask(mt),W=mt)},setFunc:function(mt){if(gt&&(mt=qm[mt]),j!==mt){switch(mt){case po:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case mo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=mt}},setLocked:function(mt){L=mt},setClear:function(mt){At!==mt&&(gt&&(mt=1-mt),i.clearDepth(mt),At=mt)},reset:function(){L=!1,W=null,j=null,At=null,gt=!1}}}function s(){let L=!1,gt=null,W=null,j=null,At=null,mt=null,Gt=null,Ie=null,Be=null;return{setTest:function(ce){L||(ce?ct(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ce){gt!==ce&&!L&&(i.stencilMask(ce),gt=ce)},setFunc:function(ce,an,Dn){(W!==ce||j!==an||At!==Dn)&&(i.stencilFunc(ce,an,Dn),W=ce,j=an,At=Dn)},setOp:function(ce,an,Dn){(mt!==ce||Gt!==an||Ie!==Dn)&&(i.stencilOp(ce,an,Dn),mt=ce,Gt=an,Ie=Dn)},setLocked:function(ce){L=ce},setClear:function(ce){Be!==ce&&(i.clearStencil(ce),Be=ce)},reset:function(){L=!1,gt=null,W=null,j=null,At=null,mt=null,Gt=null,Ie=null,Be=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,I=null,_=null,x=null,D=null,b=null,R=new Qt(0,0,0),S=0,M=!1,y=null,P=null,V=null,F=null,k=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,nt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=nt>=2);let ht=null,ft={},vt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Zt=new ue().fromArray(vt),$=new ue().fromArray(Nt);function et(L,gt,W,j){let At=new Uint8Array(4),mt=i.createTexture();i.bindTexture(L,mt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<W;Gt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(gt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return mt}let It={};It[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(as),it(!1),Ct(El),ct(i.CULL_FACE),E(ri);function ct(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ft(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function St(L,gt){return u[L]!==gt?(i.bindFramebuffer(L,gt),u[L]=gt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function kt(L,gt){let W=f,j=!1;if(L){W=d.get(gt),W===void 0&&(W=[],d.set(gt,W));let At=L.textures;if(W.length!==At.length||W[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Gt=At.length;mt<Gt;mt++)W[mt]=i.COLOR_ATTACHMENT0+mt;W.length=At.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function jt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let Q={[wi]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};Q[ld]=i.MIN,Q[hd]=i.MAX;let rt={[ud]:i.ZERO,[dd]:i.ONE,[fd]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function E(L,gt,W,j,At,mt,Gt,Ie,Be,ce){if(L===ri){A===!0&&(Ft(i.BLEND),A=!1);return}if(A===!1&&(ct(i.BLEND),A=!0),L!==ad){if(L!==g||ce!==M){if((p!==wi||x!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,x=wi),ce)switch(L){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}I=null,_=null,D=null,b=null,R.set(0,0,0),S=0,g=L,M=ce}return}At=At||gt,mt=mt||W,Gt=Gt||j,(gt!==p||At!==x)&&(i.blendEquationSeparate(Q[gt],Q[At]),p=gt,x=At),(W!==I||j!==_||mt!==D||Gt!==b)&&(i.blendFuncSeparate(rt[W],rt[j],rt[mt],rt[Gt]),I=W,_=j,D=mt,b=Gt),(Ie.equals(R)===!1||Be!==S)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Be),R.copy(Ie),S=Be),g=L,M=!1}function wt(L,gt){L.side===Me?Ft(i.CULL_FACE):ct(i.CULL_FACE);let W=L.side===Fe;gt&&(W=!W),it(W),L.blending===ns&&L.transparent===!1?E(ri):E(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Ct(L){L!==sd?(ct(i.CULL_FACE),L!==P&&(L===El?i.cullFace(i.BACK):L===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=L}function ut(L){L!==V&&(z&&i.lineWidth(L),V=L)}function Bt(L,gt,W){L?(ct(i.POLYGON_OFFSET_FILL),(F!==gt||k!==W)&&(i.polygonOffset(gt,W),F=gt,k=W)):Ft(i.POLYGON_OFFSET_FILL)}function _t(L){L?ct(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+K-1),ht!==L&&(i.activeTexture(L),ht=L)}function v(L,gt,W){W===void 0&&(ht===null?W=i.TEXTURE0+K-1:W=ht);let j=ft[W];j===void 0&&(j={type:void 0,texture:void 0},ft[W]=j),(j.type!==L||j.texture!==gt)&&(ht!==W&&(i.activeTexture(W),ht=W),i.bindTexture(L,gt||It[L]),j.type=L,j.texture=gt)}function O(){let L=ft[ht];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(L){Zt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function bt(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function ee(L,gt){let W=l.get(gt);W===void 0&&(W=new WeakMap,l.set(gt,W));let j=W.get(L);j===void 0&&(j=i.getUniformBlockIndex(gt,L.name),W.set(L,j))}function Yt(L,gt){let j=l.get(gt).get(L);c.get(gt)!==j&&(i.uniformBlockBinding(gt,j,L.__bindingPointIndex),c.set(gt,j))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,ft={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,I=null,_=null,x=null,D=null,b=null,R=new Qt(0,0,0),S=0,M=!1,y=null,P=null,V=null,F=null,k=null,Zt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Ft,bindFramebuffer:St,drawBuffers:kt,useProgram:jt,setBlending:E,setMaterial:wt,setFlipSided:it,setCullFace:Ct,setLineWidth:ut,setPolygonOffset:Bt,setScissorTest:_t,activeTexture:w,bindTexture:v,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:Mt,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:Yt,texStorage2D:Kt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Ht,viewport:bt,reset:pe}}function Eh(i,t,e,n){let s=$m(n);switch(e){case qh:return i*t;case $h:return i*t;case Zh:return i*t*2;case Jh:return i*t/s.components*s.byteLength;case Bc:return i*t/s.components*s.byteLength;case Kh:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case Yh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:case So:return Math.max(i,16)*Math.max(t,8)/4;case Mo:case wo:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dr:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qh:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case Xn:case Gh:return{byteLength:1,components:1};case Us:case Wh:case $s:return{byteLength:2,components:1};case Oc:case kc:return{byteLength:2,components:4};case Pi:case Fc:case Vn:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return f?new OffscreenCanvas(w,v):Fs("canvas")}function A(w,v,O){let Z=1,tt=_t(w);if((tt.width>O||tt.height>O)&&(Z=O/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let J=Math.floor(Z*tt.width),Et=Math.floor(Z*tt.height);u===void 0&&(u=m(J,Et));let pt=v?m(J,Et):u;return pt.width=J,pt.height=Et,pt.getContext("2d").drawImage(w,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Et+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(w,v,O,Z,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=v;if(v===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),v===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){let Et=tt?la:ne.getTransfer(Z);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Et===he?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(w,v){let O;return w?v===null||v===Pi||v===ls?O=i.DEPTH24_STENCIL8:v===Vn?O=i.DEPTH32F_STENCIL8:v===Us&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pi||v===ls?O=i.DEPTH_COMPONENT24:v===Vn?O=i.DEPTH_COMPONENT32F:v===Us&&(O=i.DEPTH_COMPONENT16),O}function D(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==Cn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function b(w){let v=w.target;v.removeEventListener("dispose",b),S(v),v.isVideoTexture&&h.delete(v)}function R(w){let v=w.target;v.removeEventListener("dispose",R),y(v)}function S(w){let v=n.get(w);if(v.__webglInit===void 0)return;let O=w.source,Z=d.get(O);if(Z){let tt=Z[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(w),Object.keys(Z).length===0&&d.delete(O)}n.remove(w)}function M(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let O=w.source,Z=d.get(O);delete Z[v.__cacheKey],a.memory.textures--}function y(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let tt=0;tt<v.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=w.textures;for(let Z=0,tt=O.length;Z<tt;Z++){let J=n.get(O[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(w)}let P=0;function V(){P=0}function F(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function k(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function K(w,v){let O=n.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,w,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function z(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){$(O,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function nt(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){$(O,w,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){et(O,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ht={[Ri]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},ft={[dn]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},vt={[Fd]:i.NEVER,[Vd]:i.ALWAYS,[Od]:i.LESS,[tu]:i.LEQUAL,[kd]:i.EQUAL,[Hd]:i.GEQUAL,[Bd]:i.GREATER,[zd]:i.NOTEQUAL};function Nt(w,v){if(v.type===Vn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Cn||v.magFilter===Da||v.magFilter===ir||v.magFilter===Hn||v.minFilter===Cn||v.minFilter===Da||v.minFilter===ir||v.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ht[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ht[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ht[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,vt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==ir&&v.minFilter!==Hn||v.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",b));let Z=v.source,tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));let J=k(v);if(J!==w.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[J].usedTimes++;let Et=tt[w.__cacheKey];Et!==void 0&&(tt[w.__cacheKey].usedTimes--,Et.usedTimes===0&&M(v)),w.__cacheKey=J,w.__webglTexture=tt[J].texture}return O}function $(w,v,O){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let tt=Zt(w,v),J=v.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+O);let Et=n.get(J);if(J.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);let pt=ne.getPrimaries(ne.workingColorSpace),yt=v.colorSpace===si?null:ne.getPrimaries(v.colorSpace),Kt=v.colorSpace===si||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let at=A(v.image,!1,s.maxTextureSize);at=Bt(v,at);let Mt=r.convert(v.format,v.colorSpace),zt=r.convert(v.type),Ht=_(v.internalFormat,Mt,zt,v.colorSpace,v.isVideoTexture);Nt(Z,v);let bt,ee=v.mipmaps,Yt=v.isVideoTexture!==!0,pe=Et.__version===void 0||tt===!0,L=J.dataReady,gt=D(v,at);if(v.isDepthTexture)Ht=x(v.format===hs,v.type),pe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,Mt,zt,null));else if(v.isDataTexture)if(ee.length>0){Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,gt,Ht,ee[0].width,ee[0].height);for(let W=0,j=ee.length;W<j;W++)bt=ee[W],Yt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,zt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,Mt,zt,bt.data);v.generateMipmaps=!1}else Yt?(pe&&e.texStorage2D(i.TEXTURE_2D,gt,Ht,at.width,at.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Mt,zt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,Mt,zt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ht,ee[0].width,ee[0].height,at.depth);for(let W=0,j=ee.length;W<j;W++)if(bt=ee[W],v.format!==un)if(Mt!==null)if(Yt){if(L)if(v.layerUpdates.size>0){let At=Eh(bt.width,bt.height,v.format,v.type);for(let mt of v.layerUpdates){let Gt=bt.data.subarray(mt*At/bt.data.BYTES_PER_ELEMENT,(mt+1)*At/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,mt,bt.width,bt.height,1,Mt,Gt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,at.depth,Mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ht,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,at.depth,Mt,zt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ht,bt.width,bt.height,at.depth,0,Mt,zt,bt.data)}else{Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,gt,Ht,ee[0].width,ee[0].height);for(let W=0,j=ee.length;W<j;W++)bt=ee[W],v.format!==un?Mt!==null?Yt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,zt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,Mt,zt,bt.data)}else if(v.isDataArrayTexture)if(Yt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ht,at.width,at.height,at.depth),L)if(v.layerUpdates.size>0){let W=Eh(at.width,at.height,v.format,v.type);for(let j of v.layerUpdates){let At=at.data.subarray(j*W/at.data.BYTES_PER_ELEMENT,(j+1)*W/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,at.width,at.height,1,Mt,zt,At)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,zt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,Mt,zt,at.data);else if(v.isData3DTexture)Yt?(pe&&e.texStorage3D(i.TEXTURE_3D,gt,Ht,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,zt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,Mt,zt,at.data);else if(v.isFramebufferTexture){if(pe)if(Yt)e.texStorage2D(i.TEXTURE_2D,gt,Ht,at.width,at.height);else{let W=at.width,j=at.height;for(let At=0;At<gt;At++)e.texImage2D(i.TEXTURE_2D,At,Ht,W,j,0,Mt,zt,null),W>>=1,j>>=1}}else if(ee.length>0){if(Yt&&pe){let W=_t(ee[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ht,W.width,W.height)}for(let W=0,j=ee.length;W<j;W++)bt=ee[W],Yt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt,zt,bt):e.texImage2D(i.TEXTURE_2D,W,Ht,Mt,zt,bt);v.generateMipmaps=!1}else if(Yt){if(pe){let W=_t(at);e.texStorage2D(i.TEXTURE_2D,gt,Ht,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,zt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Mt,zt,at);g(v)&&p(Z),Et.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function et(w,v,O){if(v.image.length!==6)return;let Z=Zt(w,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let J=n.get(tt);if(tt.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);let Et=ne.getPrimaries(ne.workingColorSpace),pt=v.colorSpace===si?null:ne.getPrimaries(v.colorSpace),yt=v.colorSpace===si||Et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Kt=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let j=0;j<6;j++)!Kt&&!at?Mt[j]=A(v.image[j],!0,s.maxCubemapSize):Mt[j]=at?v.image[j].image:v.image[j],Mt[j]=Bt(v,Mt[j]);let zt=Mt[0],Ht=r.convert(v.format,v.colorSpace),bt=r.convert(v.type),ee=_(v.internalFormat,Ht,bt,v.colorSpace),Yt=v.isVideoTexture!==!0,pe=J.__version===void 0||Z===!0,L=tt.dataReady,gt=D(v,zt);Nt(i.TEXTURE_CUBE_MAP,v);let W;if(Kt){Yt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ee,zt.width,zt.height);for(let j=0;j<6;j++){W=Mt[j].mipmaps;for(let At=0;At<W.length;At++){let mt=W[At];v.format!==un?Ht!==null?Yt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,mt.width,mt.height,Ht,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,ee,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,mt.width,mt.height,Ht,bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,ee,mt.width,mt.height,0,Ht,bt,mt.data)}}}else{if(W=v.mipmaps,Yt&&pe){W.length>0&&gt++;let j=_t(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ee,j.width,j.height)}for(let j=0;j<6;j++)if(at){Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Mt[j].width,Mt[j].height,Ht,bt,Mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Mt[j].width,Mt[j].height,0,Ht,bt,Mt[j].data);for(let At=0;At<W.length;At++){let Gt=W[At].image[j].image;Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Gt.width,Gt.height,Ht,bt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,ee,Gt.width,Gt.height,0,Ht,bt,Gt.data)}}else{Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ht,bt,Mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Ht,bt,Mt[j]);for(let At=0;At<W.length;At++){let mt=W[At];Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Ht,bt,mt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,ee,Ht,bt,mt.image[j])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function It(w,v,O,Z,tt,J){let Et=r.convert(O.format,O.colorSpace),pt=r.convert(O.type),yt=_(O.internalFormat,Et,pt,O.colorSpace),Kt=n.get(v),at=n.get(O);if(at.__renderTarget=v,!Kt.__hasExternalTextures){let Mt=Math.max(1,v.width>>J),zt=Math.max(1,v.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,yt,Mt,zt,v.depth,0,Et,pt,null):e.texImage2D(tt,J,yt,Mt,zt,0,Et,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,at.__webglTexture,0,it(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let Z=v.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,J=x(v.stencilBuffer,tt),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=it(v);Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{let Z=v.textures;for(let tt=0;tt<Z.length;tt++){let J=Z[tt],Et=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),yt=_(J.internalFormat,Et,pt,J.colorSpace),Kt=it(v);O&&Ct(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,yt,v.width,v.height):Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,yt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,yt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let tt=Z.__webglTexture,J=it(v);if(v.depthTexture.format===is)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===hs)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function St(w){let v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=Z}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ft(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),ct(v.__webglDepthbuffer[Z],w,!1);else{let tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ct(v.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(w,v,O){let Z=n.get(w);v!==void 0&&It(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&St(w)}function jt(w){let v=w.texture,O=n.get(w),Z=n.get(v);w.addEventListener("dispose",R);let tt=w.textures,J=w.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,a.memory.textures++),J){O.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[pt]=[];for(let yt=0;yt<v.mipmaps.length;yt++)O.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else O.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)O.__webglFramebuffer[pt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let pt=0,yt=tt.length;pt<yt;pt++){let Kt=n.get(tt[pt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ct(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){let yt=tt[pt];O.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[pt]);let Kt=r.convert(yt.format,yt.colorSpace),at=r.convert(yt.type),Mt=_(yt.internalFormat,Kt,at,yt.colorSpace,w.isXRRenderTarget===!0),zt=it(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,O.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)It(O.__webglFramebuffer[pt][yt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else It(O.__webglFramebuffer[pt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,yt=tt.length;pt<yt;pt++){let Kt=tt[pt],at=n.get(Kt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Nt(i.TEXTURE_2D,Kt),It(O.__webglFramebuffer,w,Kt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),Nt(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)It(O.__webglFramebuffer[yt],w,v,i.COLOR_ATTACHMENT0,pt,yt);else It(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,pt,0);g(v)&&p(pt),e.unbindTexture()}w.depthBuffer&&St(w)}function Q(w){let v=w.textures;for(let O=0,Z=v.length;O<Z;O++){let tt=v[O];if(g(tt)){let J=I(w),Et=n.get(tt).__webglTexture;e.bindTexture(J,Et),p(J),e.unbindTexture()}}}let rt=[],E=[];function wt(w){if(w.samples>0){if(Ct(w)===!1){let v=w.textures,O=w.width,Z=w.height,tt=i.COLOR_BUFFER_BIT,J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),pt=v.length>1;if(pt)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);let Kt=n.get(v[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,tt,i.NEAREST),c===!0&&(rt.length=0,E.length=0,rt.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(J),E.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);let Kt=n.get(v[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(w){return Math.min(s.maxSamples,w.samples)}function Ct(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Bt(w,v){let O=w.colorSpace,Z=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ms&&O!==si&&(ne.getTransfer(O)===he?(Z!==un||tt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function _t(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=z,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ct}function Jm(i,t){function e(n,s=si){let r,a=ne.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===un)return i.RGBA;if(n===$h)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Jh)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===Kh)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===Er||n===Tr||n===Rr||n===Pr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===bo||n===wo||n===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Do||n===Lo||n===Uo||n===No||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dr||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===Yo||n===$o||n===Zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hc=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Tt=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(l,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jm=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:Qm,fragmentShader:jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dc=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,A=new uc,g=e.getContextAttributes(),p=null,I=null,_=[],x=[],D=new ot,b=null,R=new Ve;R.viewport=new ue;let S=new Ve;S.viewport=new ue;let M=[R,S],y=new hc,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=_[$];return et===void 0&&(et=new Ps,_[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=_[$];return et===void 0&&(et=new Ps,_[$]=et),et.getGripSpace()},this.getHand=function($){let et=_[$];return et===void 0&&(et=new Ps,_[$]=et),et.getHandSpace()};function F($){let et=x.indexOf($.inputSource);if(et===-1)return;let It=_[et];It!==void 0&&(It.update($.inputSource,$.frame,l||a),It.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let $=0;$<_.length;$++){let et=x[$];et!==null&&(x[$]=null,_[$].disconnect(et))}P=null,V=null,A.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,I=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),I=new qn(f.framebufferWidth,f.framebufferHeight,{format:un,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,It=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?hs:is,It=g.stencil?ls:Pi);let Ft={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),I=new qn(d.textureWidth,d.textureHeight,{format:un,type:Xn,depthTexture:new Gr(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K($){for(let et=0;et<$.removed.length;et++){let It=$.removed[et],ct=x.indexOf(It);ct>=0&&(x[ct]=null,_[ct].disconnect(It))}for(let et=0;et<$.added.length;et++){let It=$.added[et],ct=x.indexOf(It);if(ct===-1){for(let St=0;St<_.length;St++)if(St>=x.length){x.push(It),ct=St;break}else if(x[St]===null){x[St]=It,ct=St;break}if(ct===-1)break}let Ft=_[ct];Ft&&Ft.connect(It)}}let z=new T,nt=new T;function G($,et,It){z.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(It.matrixWorld);let ct=z.distanceTo(nt),Ft=et.projectionMatrix.elements,St=It.projectionMatrix.elements,kt=Ft[14]/(Ft[10]-1),jt=Ft[14]/(Ft[10]+1),Q=(Ft[9]+1)/Ft[5],rt=(Ft[9]-1)/Ft[5],E=(Ft[8]-1)/Ft[0],wt=(St[8]+1)/St[0],it=kt*E,Ct=kt*wt,ut=ct/(-E+wt),Bt=ut*-E;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let _t=kt+ut,w=jt+ut,v=it-Bt,O=Ct+(ct-Bt),Z=Q*jt/w*_t,tt=rt*jt/w*_t;$.projectionMatrix.makePerspective(v,O,Z,tt,_t,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,It=$.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(It=A.depthFar)),y.near=S.near=R.near=et,y.far=S.far=R.far=It,(P!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,V=y.far),R.layers.mask=$.layers.mask|2,S.layers.mask=$.layers.mask|4,y.layers.mask=R.layers.mask|S.layers.mask;let ct=$.parent,Ft=y.cameras;ht(y,ct);for(let St=0;St<Ft.length;St++)ht(Ft[St],ct);Ft.length===2?G(y,R,S):y.projectionMatrix.copy(R.projectionMatrix),ft($,y,ct)};function ft($,et,It){It===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(It.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ns*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let vt=null;function Nt($,et){if(h=et.getViewerPose(l||a),m=et,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(I,f.framebuffer),t.setRenderTarget(I));let ct=!1;It.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let St=0;St<It.length;St++){let kt=It[St],jt=null;if(f!==null)jt=f.getViewport(kt);else{let rt=u.getViewSubImage(d,kt);jt=rt.viewport,St===0&&(t.setRenderTargetTextures(I,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(I))}let Q=M[St];Q===void 0&&(Q=new Ve,Q.layers.enable(St),Q.viewport=new ue,M[St]=Q),Q.matrix.fromArray(kt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(kt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(jt.x,jt.y,jt.width,jt.height),St===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Q)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let St=u.getDepthInformation(It[0]);St&&St.isValid&&St.texture&&A.init(t,St,s.renderState)}}for(let It=0;It<_.length;It++){let ct=x[It],Ft=_[It];ct!==null&&Ft!==void 0&&Ft.update(ct,et,l||a)}vt&&vt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let Zt=new ru;Zt.setAnimationLoop(Nt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}},Mi=new Mn,tx=new ve;function ex(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,su(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,I,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,I,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let I=t.get(p),_=I.envMap,x=I.envMapRotation;_&&(g.envMap.value=_,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(Mi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,I,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*I,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,I){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let I=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,_){let x=_.program;n.uniformBlockBinding(I,x)}function l(I,_){let x=s[I.id];x===void 0&&(m(I),x=h(I),s[I.id]=x,I.addEventListener("dispose",g));let D=_.program;n.updateUBOMapping(I,D);let b=t.render.frame;r[I.id]!==b&&(d(I),r[I.id]=b)}function h(I){let _=u();I.__bindingPointIndex=_;let x=i.createBuffer(),D=I.__size,b=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){let _=s[I.id],x=I.uniforms,D=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,R=x.length;b<R;b++){let S=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,y=S.length;M<y;M++){let P=S[M];if(f(P,b,M,D)===!0){let V=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],k=0;for(let K=0;K<F.length;K++){let z=F[K],nt=A(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+k,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,k),k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(I,_,x,D){let b=I.value,R=_+"_"+x;if(D[R]===void 0)return typeof b=="number"||typeof b=="boolean"?D[R]=b:D[R]=b.clone(),!0;{let S=D[R];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return D[R]=b,!0}else if(S.equals(b)===!1)return S.copy(b),!0}return!1}function m(I){let _=I.uniforms,x=0,D=16;for(let R=0,S=_.length;R<S;R++){let M=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,P=M.length;y<P;y++){let V=M[y],F=Array.isArray(V.value)?V.value:[V.value];for(let k=0,K=F.length;k<K;k++){let z=F[k],nt=A(z),G=x%D,ht=G%nt.boundary,ft=G+ht;x+=ht,ft!==0&&D-ft<nt.storage&&(x+=D-ft),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=nt.storage}}}let b=x%D;return b>0&&(x+=D-b),I.__size=x,I.__cache={},this}function A(I){let _={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(_.boundary=4,_.storage=4):I.isVector2?(_.boundary=8,_.storage=8):I.isVector3||I.isColor?(_.boundary=16,_.storage=12):I.isVector4?(_.boundary=16,_.storage=16):I.isMatrix3?(_.boundary=48,_.storage=48):I.isMatrix4?(_.boundary=64,_.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),_}function g(I){let _=I.target;_.removeEventListener("dispose",g);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let I in s)i.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Wr=class{constructor(t={}){let{canvas:e=af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,I=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=ai,this.toneMappingExposure=1;let x=this,D=!1,b=0,R=0,S=null,M=-1,y=null,P=new ue,V=new ue,F=null,k=new Qt(0),K=0,z=e.width,nt=e.height,G=1,ht=null,ft=null,vt=new ue(0,0,z,nt),Nt=new ue(0,0,z,nt),Zt=!1,$=new Bs,et=!1,It=!1,ct=new ve,Ft=new ve,St=new T,kt=new ue,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function rt(){return S===null?G:1}let E=n;function wt(C,U){return e.getContext(C,U)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",mt,!1),E===null){let U="webgl2";if(E=wt(U,C),E===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,Ct,ut,Bt,_t,w,v,O,Z,tt,J,Et,pt,yt,Kt,at,Mt,zt,Ht,bt,ee,Yt,pe,L;function gt(){it=new Ag(E),it.init(),Yt=new Jm(E,it),Ct=new dg(E,it,t,Yt),ut=new Ym(E,it),Ct.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Bt=new vg(E),_t=new Um,w=new Zm(E,it,ut,_t,Ct,Yt,Bt),v=new pg(x),O=new xg(x),Z=new Ef(E),pe=new hg(E,Z),tt=new _g(E,Z,Bt,pe),J=new Ig(E,tt,Z,Bt),Ht=new Cg(E,Ct,w),at=new fg(_t),Et=new Lm(x,v,O,it,Ct,pe,at),pt=new ex(x,_t),yt=new Fm,Kt=new Vm(it),zt=new lg(x,v,O,ut,J,f,c),Mt=new Xm(x,J,Ct),L=new nx(E,Bt,Ct,ut),bt=new ug(E,it,Bt),ee=new yg(E,it,Bt),Bt.programs=Et.programs,x.capabilities=Ct,x.extensions=it,x.properties=_t,x.renderLists=yt,x.shadowMap=Mt,x.state=ut,x.info=Bt}gt();let W=new dc(x,E);this.xr=W,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(z,nt,!1))},this.getSize=function(C){return C.set(z,nt)},this.setSize=function(C,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,nt=U,e.width=Math.floor(C*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=C+"px",e.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(z*G,nt*G).floor()},this.setDrawingBufferSize=function(C,U,B){z=C,nt=U,G=B,e.width=Math.floor(C*B),e.height=Math.floor(U*B),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(vt)},this.setViewport=function(C,U,B,H){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,U,B,H),ut.viewport(P.copy(vt).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,U,B,H){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,U,B,H),ut.scissor(V.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(C){ut.setScissorTest(Zt=C)},this.setOpaqueSort=function(C){ht=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(C=!0,U=!0,B=!0){let H=0;if(C){let N=!1;if(S!==null){let lt=S.texture.format;N=lt===Hc||lt===zc||lt===Bc}if(N){let lt=S.texture.type,xt=lt===Xn||lt===Pi||lt===Us||lt===ls||lt===Oc||lt===kc,Pt=zt.getClearColor(),Dt=zt.getClearAlpha(),Vt=Pt.r,Wt=Pt.g,Lt=Pt.b;xt?(m[0]=Vt,m[1]=Wt,m[2]=Lt,m[3]=Dt,E.clearBufferuiv(E.COLOR,0,m)):(A[0]=Vt,A[1]=Wt,A[2]=Lt,A[3]=Dt,E.clearBufferiv(E.COLOR,0,A))}else H|=E.COLOR_BUFFER_BIT}U&&(H|=E.DEPTH_BUFFER_BIT),B&&(H|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),Kt.dispose(),_t.dispose(),v.dispose(),O.dispose(),J.dispose(),pe.dispose(),L.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",yl),W.removeEventListener("sessionend",vl),Ai.stop()};function j(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let C=Bt.autoReset,U=Mt.enabled,B=Mt.autoUpdate,H=Mt.needsUpdate,N=Mt.type;gt(),Bt.autoReset=C,Mt.enabled=U,Mt.autoUpdate=B,Mt.needsUpdate=H,Mt.type=N}function mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){let U=C.target;U.removeEventListener("dispose",Gt),Ie(U)}function Ie(C){Be(C),_t.remove(C)}function Be(C){let U=_t.get(C).programs;U!==void 0&&(U.forEach(function(B){Et.releaseProgram(B)}),C.isShaderMaterial&&Et.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,B,H,N,lt){U===null&&(U=jt);let xt=N.isMesh&&N.matrixWorld.determinant()<0,Pt=ed(C,U,B,H,N);ut.setMaterial(H,xt);let Dt=B.index,Vt=1;if(H.wireframe===!0){if(Dt=tt.getWireframeAttribute(B),Dt===void 0)return;Vt=2}let Wt=B.drawRange,Lt=B.attributes.position,se=Wt.start*Vt,ge=(Wt.start+Wt.count)*Vt;lt!==null&&(se=Math.max(se,lt.start*Vt),ge=Math.min(ge,(lt.start+lt.count)*Vt)),Dt!==null?(se=Math.max(se,0),ge=Math.min(ge,Dt.count)):Lt!=null&&(se=Math.max(se,0),ge=Math.min(ge,Lt.count));let me=ge-se;if(me<0||me===1/0)return;pe.setup(N,H,Pt,B,Dt);let Ze,ae=bt;if(Dt!==null&&(Ze=Z.get(Dt),ae=ee,ae.setIndex(Ze)),N.isMesh)H.wireframe===!0?(ut.setLineWidth(H.wireframeLinewidth*rt()),ae.setMode(E.LINES)):ae.setMode(E.TRIANGLES);else if(N.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),ut.setLineWidth(Ut*rt()),N.isLineSegments?ae.setMode(E.LINES):N.isLineLoop?ae.setMode(E.LINE_LOOP):ae.setMode(E.LINE_STRIP)}else N.isPoints?ae.setMode(E.POINTS):N.isSprite&&ae.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ut=N._multiDrawStarts,Ln=N._multiDrawCounts,oe=N._multiDrawCount,on=Dt?Z.get(Dt).bytesPerElement:1,ki=_t.get(H).currentProgram.getUniforms();for(let Ke=0;Ke<oe;Ke++)ki.setValue(E,"_gl_DrawID",Ke),ae.render(Ut[Ke]/on,Ln[Ke])}else if(N.isInstancedMesh)ae.renderInstances(se,me,N.count);else if(B.isInstancedBufferGeometry){let Ut=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ln=Math.min(B.instanceCount,Ut);ae.renderInstances(se,me,Ln)}else ae.render(se,me)};function ce(C,U,B){C.transparent===!0&&C.side===Me&&C.forceSinglePass===!1?(C.side=Fe,C.needsUpdate=!0,nr(C,U,B),C.side=ci,C.needsUpdate=!0,nr(C,U,B),C.side=Me):nr(C,U,B)}this.compile=function(C,U,B=null){B===null&&(B=C),p=Kt.get(B),p.init(U),_.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),C!==B&&C.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let H=new Set;return C.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let lt=N.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){let Pt=lt[xt];ce(Pt,B,N),H.add(Pt)}else ce(lt,B,N),H.add(lt)}),_.pop(),p=null,H},this.compileAsync=function(C,U,B=null){let H=this.compile(C,U,B);return new Promise(N=>{function lt(){if(H.forEach(function(xt){_t.get(xt).currentProgram.isReady()&&H.delete(xt)}),H.size===0){N(C);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let an=null;function Dn(C){an&&an(C)}function yl(){Ai.stop()}function vl(){Ai.start()}let Ai=new ru;Ai.setAnimationLoop(Dn),typeof self!="undefined"&&Ai.setContext(self),this.setAnimationLoop=function(C){an=C,W.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},W.addEventListener("sessionstart",yl),W.addEventListener("sessionend",vl),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,U,S),p=Kt.get(C,_.length),p.init(U),_.push(p),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ft),It=this.localClippingEnabled,et=at.init(this.clippingPlanes,It),g=yt.get(C,I.length),g.init(),I.push(g),W.enabled===!0&&W.isPresenting===!0){let lt=x.xr.getDepthSensingMesh();lt!==null&&Pa(lt,U,-1/0,x.sortObjects)}Pa(C,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ht,ft),Q=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Q&&zt.addToRenderList(g,C),this.info.render.frame++,et===!0&&at.beginShadows();let B=p.state.shadowsArray;Mt.render(B,C,U),et===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let lt=U.cameras;if(N.length>0)for(let xt=0,Pt=lt.length;xt<Pt;xt++){let Dt=lt[xt];Il(H,N,C,Dt)}Q&&zt.render(C);for(let xt=0,Pt=lt.length;xt<Pt;xt++){let Dt=lt[xt];Cl(g,C,Dt,Dt.viewport)}}else N.length>0&&Il(H,N,C,U),Q&&zt.render(C),Cl(g,C,U);S!==null&&(w.updateMultisampleRenderTarget(S),w.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(x,C,U),pe.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],et===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,I.pop(),I.length>0?g=I[I.length-1]:g=null};function Pa(C,U,B,H){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)B=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){H&&kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);let xt=J.update(C),Pt=C.material;Pt.visible&&g.push(C,xt,Pt,B,kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let xt=J.update(C),Pt=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),kt.copy(C.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){let Dt=xt.groups;for(let Vt=0,Wt=Dt.length;Vt<Wt;Vt++){let Lt=Dt[Vt],se=Pt[Lt.materialIndex];se&&se.visible&&g.push(C,xt,se,B,kt.z,Lt)}}else Pt.visible&&g.push(C,xt,Pt,B,kt.z,null)}}let lt=C.children;for(let xt=0,Pt=lt.length;xt<Pt;xt++)Pa(lt[xt],U,B,H)}function Cl(C,U,B,H){let N=C.opaque,lt=C.transmissive,xt=C.transparent;p.setupLightsView(B),et===!0&&at.setGlobalState(x.clippingPlanes,B),H&&ut.viewport(P.copy(H)),N.length>0&&er(N,U,B),lt.length>0&&er(lt,U,B),xt.length>0&&er(xt,U,B),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Il(C,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new qn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?$s:Xn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let lt=p.state.transmissionRenderTarget[H.id],xt=H.viewport||P;lt.setSize(xt.z,xt.w);let Pt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(k),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Q&&zt.render(B);let Dt=x.toneMapping;x.toneMapping=ai;let Vt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),et===!0&&at.setGlobalState(x.clippingPlanes,H),er(C,B,H),w.updateMultisampleRenderTarget(lt),w.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Lt=0,se=U.length;Lt<se;Lt++){let ge=U[Lt],me=ge.object,Ze=ge.geometry,ae=ge.material,Ut=ge.group;if(ae.side===Me&&me.layers.test(H.layers)){let Ln=ae.side;ae.side=Fe,ae.needsUpdate=!0,Ml(me,B,H,Ze,ae,Ut),ae.side=Ln,ae.needsUpdate=!0,Wt=!0}}Wt===!0&&(w.updateMultisampleRenderTarget(lt),w.updateRenderTargetMipmap(lt))}x.setRenderTarget(Pt),x.setClearColor(k,K),Vt!==void 0&&(H.viewport=Vt),x.toneMapping=Dt}function er(C,U,B){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,lt=C.length;N<lt;N++){let xt=C[N],Pt=xt.object,Dt=xt.geometry,Vt=H===null?xt.material:H,Wt=xt.group;Pt.layers.test(B.layers)&&Ml(Pt,U,B,Dt,Vt,Wt)}}function Ml(C,U,B,H,N,lt){C.onBeforeRender(x,U,B,H,N,lt),C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),N.onBeforeRender(x,U,B,H,C,lt),N.transparent===!0&&N.side===Me&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,C,lt),N.side=ci,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,C,lt),N.side=Me):x.renderBufferDirect(B,U,H,N,C,lt),C.onAfterRender(x,U,B,H,N,lt)}function nr(C,U,B){U.isScene!==!0&&(U=jt);let H=_t.get(C),N=p.state.lights,lt=p.state.shadowsArray,xt=N.state.version,Pt=Et.getParameters(C,N.state,lt,U,B),Dt=Et.getProgramCacheKey(Pt),Vt=H.programs;H.environment=C.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(C.isMeshStandardMaterial?O:v).get(C.envMap||H.environment),H.envMapRotation=H.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,Vt===void 0&&(C.addEventListener("dispose",Gt),Vt=new Map,H.programs=Vt);let Wt=Vt.get(Dt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===xt)return wl(C,Pt),Wt}else Pt.uniforms=Et.getUniforms(C),C.onBeforeCompile(Pt,x),Wt=Et.acquireProgram(Pt,Dt),Vt.set(Dt,Wt),H.uniforms=Pt.uniforms;let Lt=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Lt.clippingPlanes=at.uniform),wl(C,Pt),H.needsLights=id(C),H.lightsStateVersion=xt,H.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function bl(C){if(C.uniformsList===null){let U=C.currentProgram.getUniforms();C.uniformsList=rs.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function wl(C,U){let B=_t.get(C);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function ed(C,U,B,H,N){U.isScene!==!0&&(U=jt),w.resetTextureUnits();let lt=U.fog,xt=H.isMeshStandardMaterial?U.environment:null,Pt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ms,Dt=(H.isMeshStandardMaterial?O:v).get(H.envMap||xt),Vt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Wt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color,me=ai;H.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(me=x.toneMapping);let Ze=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=Ze!==void 0?Ze.length:0,Ut=_t.get(H),Ln=p.state.lights;if(et===!0&&(It===!0||C!==y)){let tn=C===y&&H.id===M;at.setState(H,C,tn)}let oe=!1;H.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ln.state.version||Ut.outputColorSpace!==Pt||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==Dt||H.fog===!0&&Ut.fog!==lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==Vt||Ut.vertexTangents!==Wt||Ut.morphTargets!==Lt||Ut.morphNormals!==se||Ut.morphColors!==ge||Ut.toneMapping!==me||Ut.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Ut.__version=H.version);let on=Ut.currentProgram;oe===!0&&(on=nr(H,U,N));let ki=!1,Ke=!1,ys=!1,xe=on.getUniforms(),yn=Ut.uniforms;if(ut.useProgram(on.program)&&(ki=!0,Ke=!0,ys=!0),H.id!==M&&(M=H.id,Ke=!0),ki||y!==C){ut.buffers.depth.getReversed()?(ct.copy(C.projectionMatrix),cf(ct),lf(ct),xe.setValue(E,"projectionMatrix",ct)):xe.setValue(E,"projectionMatrix",C.projectionMatrix),xe.setValue(E,"viewMatrix",C.matrixWorldInverse);let Jn=xe.map.cameraPosition;Jn!==void 0&&Jn.setValue(E,St.setFromMatrixPosition(C.matrixWorld)),Ct.logarithmicDepthBuffer&&xe.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Ke=!0,ys=!0)}if(N.isSkinnedMesh){xe.setOptional(E,N,"bindMatrix"),xe.setOptional(E,N,"bindMatrixInverse");let tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),xe.setValue(E,"boneTexture",tn.boneTexture,w))}N.isBatchedMesh&&(xe.setOptional(E,N,"batchingTexture"),xe.setValue(E,"batchingTexture",N._matricesTexture,w),xe.setOptional(E,N,"batchingIdTexture"),xe.setValue(E,"batchingIdTexture",N._indirectTexture,w),xe.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(E,"batchingColorTexture",N._colorsTexture,w));let vs=B.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Ht.update(N,B,on),(Ke||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,xe.setValue(E,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yn.envMap.value=Dt,yn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(yn.envMapIntensity.value=U.environmentIntensity),Ke&&(xe.setValue(E,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&nd(yn,ys),lt&&H.fog===!0&&pt.refreshFogUniforms(yn,lt),pt.refreshMaterialUniforms(yn,H,G,nt,p.state.transmissionRenderTarget[C.id]),rs.upload(E,bl(Ut),yn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(rs.upload(E,bl(Ut),yn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(E,"center",N.center),xe.setValue(E,"modelViewMatrix",N.modelViewMatrix),xe.setValue(E,"normalMatrix",N.normalMatrix),xe.setValue(E,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let tn=H.uniformsGroups;for(let Jn=0,Kn=tn.length;Jn<Kn;Jn++){let Sl=tn[Jn];L.update(Sl,on),L.bind(Sl,on)}}return on}function nd(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function id(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,U,B){_t.get(C.texture).__webglTexture=U,_t.get(C.depthTexture).__webglTexture=B;let H=_t.get(C);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){let B=_t.get(C);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,B=0){S=C,b=U,R=B;let H=!0,N=null,lt=!1,xt=!1;if(C){let Dt=_t.get(C);if(Dt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(E.FRAMEBUFFER,null),H=!1;else if(Dt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Dt.__hasExternalTextures)w.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Lt=C.depthTexture;if(Dt.__boundDepthTexture!==Lt){if(Lt!==null&&_t.has(Lt)&&(C.width!==Lt.image.width||C.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}let Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(xt=!0);let Wt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?N=Wt[U][B]:N=Wt[U],lt=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?N=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[B]:N=Wt,P.copy(C.viewport),V.copy(C.scissor),F=C.scissorTest}else P.copy(vt).multiplyScalar(G).floor(),V.copy(Nt).multiplyScalar(G).floor(),F=Zt;if(ut.bindFramebuffer(E.FRAMEBUFFER,N)&&H&&ut.drawBuffers(C,N),ut.viewport(P),ut.scissor(V),ut.setScissorTest(F),lt){let Dt=_t.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt.__webglTexture,B)}else if(xt){let Dt=_t.get(C.texture),Vt=U||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Dt.__webglTexture,B||0,Vt)}M=-1},this.readRenderTargetPixels=function(C,U,B,H,N,lt,xt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xt!==void 0&&(Pt=Pt[xt]),Pt){ut.bindFramebuffer(E.FRAMEBUFFER,Pt);try{let Dt=C.texture,Vt=Dt.format,Wt=Dt.type;if(!Ct.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-H&&B>=0&&B<=C.height-N&&E.readPixels(U,B,H,N,Yt.convert(Vt),Yt.convert(Wt),lt)}finally{let Dt=S!==null?_t.get(S).__webglFramebuffer:null;ut.bindFramebuffer(E.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(C,U,B,H,N,lt,xt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xt!==void 0&&(Pt=Pt[xt]),Pt){let Dt=C.texture,Vt=Dt.format,Wt=Dt.type;if(!Ct.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-H&&B>=0&&B<=C.height-N){ut.bindFramebuffer(E.FRAMEBUFFER,Pt);let Lt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Lt),E.bufferData(E.PIXEL_PACK_BUFFER,lt.byteLength,E.STREAM_READ),E.readPixels(U,B,H,N,Yt.convert(Vt),Yt.convert(Wt),0);let se=S!==null?_t.get(S).__webglFramebuffer:null;ut.bindFramebuffer(E.FRAMEBUFFER,se);let ge=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await of(E,ge,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Lt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,lt),E.deleteBuffer(Lt),E.deleteSync(ge),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,B=0){C.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);let H=Math.pow(2,-B),N=Math.floor(C.image.width*H),lt=Math.floor(C.image.height*H),xt=U!==null?U.x:0,Pt=U!==null?U.y:0;w.setTexture2D(C,0),E.copyTexSubImage2D(E.TEXTURE_2D,B,0,0,xt,Pt,N,lt),ut.unbindTexture()},this.copyTextureToTexture=function(C,U,B=null,H=null,N=0){C.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let lt,xt,Pt,Dt,Vt,Wt,Lt,se,ge,me=C.isCompressedTexture?C.mipmaps[N]:C.image;B!==null?(lt=B.max.x-B.min.x,xt=B.max.y-B.min.y,Pt=B.isBox3?B.max.z-B.min.z:1,Dt=B.min.x,Vt=B.min.y,Wt=B.isBox3?B.min.z:0):(lt=me.width,xt=me.height,Pt=me.depth||1,Dt=0,Vt=0,Wt=0),H!==null?(Lt=H.x,se=H.y,ge=H.z):(Lt=0,se=0,ge=0);let Ze=Yt.convert(U.format),ae=Yt.convert(U.type),Ut;U.isData3DTexture?(w.setTexture3D(U,0),Ut=E.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ut=E.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ut=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=E.getParameter(E.UNPACK_ROW_LENGTH),oe=E.getParameter(E.UNPACK_IMAGE_HEIGHT),on=E.getParameter(E.UNPACK_SKIP_PIXELS),ki=E.getParameter(E.UNPACK_SKIP_ROWS),Ke=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,me.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,me.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Dt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Vt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Wt);let ys=C.isDataArrayTexture||C.isData3DTexture,xe=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let yn=_t.get(C),vs=_t.get(U),tn=_t.get(yn.__renderTarget),Jn=_t.get(vs.__renderTarget);ut.bindFramebuffer(E.READ_FRAMEBUFFER,tn.__webglFramebuffer),ut.bindFramebuffer(E.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Kn=0;Kn<Pt;Kn++)ys&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_t.get(C).__webglTexture,N,Wt+Kn),C.isDepthTexture?(xe&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,ge+Kn),E.blitFramebuffer(Dt,Vt,lt,xt,Lt,se,lt,xt,E.DEPTH_BUFFER_BIT,E.NEAREST)):xe?E.copyTexSubImage3D(Ut,N,Lt,se,ge+Kn,Dt,Vt,lt,xt):E.copyTexSubImage2D(Ut,N,Lt,se,ge+Kn,Dt,Vt,lt,xt);ut.bindFramebuffer(E.READ_FRAMEBUFFER,null),ut.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else xe?C.isDataTexture||C.isData3DTexture?E.texSubImage3D(Ut,N,Lt,se,ge,lt,xt,Pt,Ze,ae,me.data):U.isCompressedArrayTexture?E.compressedTexSubImage3D(Ut,N,Lt,se,ge,lt,xt,Pt,Ze,me.data):E.texSubImage3D(Ut,N,Lt,se,ge,lt,xt,Pt,Ze,ae,me):C.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,N,Lt,se,lt,xt,Ze,ae,me.data):C.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,N,Lt,se,me.width,me.height,Ze,me.data):E.texSubImage2D(E.TEXTURE_2D,N,Lt,se,lt,xt,Ze,ae,me);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ln),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,oe),E.pixelStorei(E.UNPACK_SKIP_PIXELS,on),E.pixelStorei(E.UNPACK_SKIP_ROWS,ki),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ke),N===0&&U.generateMipmaps&&E.generateMipmap(Ut),ut.unbindTexture()},this.copyTextureToTexture3D=function(C,U,B=null,H=null,N=0){return C.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,C=arguments[2],U=arguments[3],N=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,B,H,N)},this.initRenderTarget=function(C){_t.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ut.unbindTexture()},this.resetState=function(){b=0,R=0,S=null,ut.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var fs=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var wn=class extends Je{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ot:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],a=[],o=new T,c=new ve;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fc=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mr=new T,ao=new Wc,oo=new Wc,co=new Wc,ps=class extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Mr.subVectors(s[0],s[1]).add(s[0]),l=Mr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),A=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),ao.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,A,g),oo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,A,g),co.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),oo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),co.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ao.calc(c),oo.calc(c),co.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Th(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ix(i,t){let e=1-i;return e*e*t}function sx(i,t){return 2*(1-i)*i*t}function rx(i,t){return i*i*t}function Ds(i,t,e,n){return ix(i,t)+sx(i,e)+rx(i,n)}function ax(i,t){let e=1-i;return e*e*e*t}function ox(i,t){let e=1-i;return 3*e*e*i*t}function cx(i,t){return 3*(1-i)*i*i*t}function lx(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return ax(i,t)+ox(i,e)+cx(i,n)+lx(i,s)}var Xr=class extends sn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends sn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends sn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends sn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends sn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends sn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y),Ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Th(o,c.x,l.x,h.x,u.x),Th(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Jr=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:ps,CubicBezierCurve:Xr,CubicBezierCurve3:pc,EllipseCurve:zs,LineCurve:qr,LineCurve3:gc,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:$r,SplineCurve:Zr}),mc=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jr[s.type]().fromJSON(s))}return this}},Hs=class extends mc{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Yr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Xr(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Zr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new zs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xc=class i extends Ge{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new T,d=new ot,f=new T,m=new T,A=new T,g=0,p=0;for(let I=0;I<=t.length-1;I++)switch(I){case 0:g=t[I+1].x-t[I].x,p=t[I+1].y-t[I].y,f.x=p*1,f.y=-g,f.z=p*0,A.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(A.x,A.y,A.z);break;default:g=t[I+1].x-t[I].x,p=t[I+1].y-t[I].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=A.x,f.y+=A.y,f.z+=A.z,f.normalize(),c.push(f.x,f.y,f.z),A.copy(m)}for(let I=0;I<=e;I++){let _=n+I*h*s,x=Math.sin(_),D=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*D,a.push(u.x,u.y,u.z),d.x=I/e,d.y=b/(t.length-1),o.push(d.x,d.y);let R=c[3*b+0]*x,S=c[3*b+1],M=c[3*b+0]*D;l.push(R,S,M)}}for(let I=0;I<e;I++)for(let _=0;_<t.length-1;_++){let x=_+I*t.length,D=x,b=x+t.length,R=x+t.length+1,S=x+1;r.push(D,b,S),r.push(R,S,b)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ui=class i extends xc{constructor(t=1,e=1,n=4,s=8){let r=new Hs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},di=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new T,h=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},re=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,A=[],g=n/2,p=0;I(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function I(){let x=new T,D=new T,b=0,R=(e-t)/n;for(let S=0;S<=r;S++){let M=[],y=S/r,P=y*(e-t)+t;for(let V=0;V<=s;V++){let F=V/s,k=F*c+o,K=Math.sin(k),z=Math.cos(k);D.x=P*K,D.y=-y*n+g,D.z=P*z,u.push(D.x,D.y,D.z),x.set(K,R,z).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),M.push(m++)}A.push(M)}for(let S=0;S<s;S++)for(let M=0;M<r;M++){let y=A[M][S],P=A[M+1][S],V=A[M+1][S+1],F=A[M][S+1];(t>0||M!==0)&&(h.push(y,P,F),b+=3),(e>0||M!==r-1)&&(h.push(P,V,F),b+=3)}l.addGroup(p,b,0),p+=b}function _(x){let D=m,b=new ot,R=new T,S=0,M=x===!0?t:e,y=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;let P=m;for(let V=0;V<=s;V++){let k=V/s*c+o,K=Math.cos(k),z=Math.sin(k);R.x=M*z,R.y=g*y,R.z=M*K,u.push(R.x,R.y,R.z),d.push(0,y,0),b.x=K*.5+.5,b.y=z*.5*y+.5,f.push(b.x,b.y),m++}for(let V=0;V<s;V++){let F=D+V,k=P+V;x===!0?h.push(k,k+1,F):h.push(k+1,k,F),S+=3}l.addGroup(p,S,x===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rn=class i extends re{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kr=class i extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(I){let _=new T,x=new T,D=new T;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],x),f(e[b+2],D),c(_,x,D,I)}function c(I,_,x,D){let b=D+1,R=[];for(let S=0;S<=b;S++){R[S]=[];let M=I.clone().lerp(x,S/b),y=_.clone().lerp(x,S/b),P=b-S;for(let V=0;V<=P;V++)V===0&&S===b?R[S][V]=M:R[S][V]=M.clone().lerp(y,V/P)}for(let S=0;S<b;S++)for(let M=0;M<2*(b-S)-1;M++){let y=Math.floor(M/2);M%2===0?(d(R[S][y+1]),d(R[S+1][y]),d(R[S][y])):(d(R[S][y+1]),d(R[S+1][y+1]),d(R[S+1][y]))}}function l(I){let _=new T;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(I),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let I=new T;for(let _=0;_<r.length;_+=3){I.x=r[_+0],I.y=r[_+1],I.z=r[_+2];let x=g(I)/2/Math.PI+.5,D=p(I)/Math.PI+.5;a.push(x,1-D)}m(),u()}function u(){for(let I=0;I<a.length;I+=6){let _=a[I+0],x=a[I+2],D=a[I+4],b=Math.max(_,x,D),R=Math.min(_,x,D);b>.9&&R<.1&&(_<.2&&(a[I+0]+=1),x<.2&&(a[I+2]+=1),D<.2&&(a[I+4]+=1))}}function d(I){r.push(I.x,I.y,I.z)}function f(I,_){let x=I*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function m(){let I=new T,_=new T,x=new T,D=new T,b=new ot,R=new ot,S=new ot;for(let M=0,y=0;M<r.length;M+=9,y+=6){I.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),b.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),S.set(a[y+4],a[y+5]),D.copy(I).add(_).add(x).divideScalar(3);let P=g(D);A(b,y+0,I,P),A(R,y+2,_,P),A(S,y+4,x,P)}}function A(I,_,x,D){D<0&&I.x===1&&(a[_]=I.x-1),x.x===0&&x.z===0&&(a[_]=D/2/Math.PI+.5)}function g(I){return Math.atan2(I.z,-I.x)}function p(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Qr=class i extends Kr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var fn=class extends Hs{constructor(t){super(t),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}},hx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=gx(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Vs(r,a,e,o,c,f,0),a}};function hu(i,t,e,n,s){let r,a;if(s===wx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Rh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Rh(r,i[r],i[r+1],a);return a&&ua(a,a.next)&&(Ws(a),a=a.next),a}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ua(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&yx(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?dx(i,n,s,r):ux(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ws(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=fx(Li(i),t,e),Vs(i,t,e,n,s,r,2)):a===2&&px(i,t,e,n,s,r):Vs(Li(i),t,e,n,s,r,1);break}}}function ux(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&es(s,o,r,c,a,l,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ce(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,A=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Ac(f,m,t,e,n),I=Ac(A,g,t,e,n),_=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=I;){if(_.x>=f&&_.x<=A&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&es(o,h,c,u,l,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&es(o,h,c,u,l,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=A&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&es(o,h,c,u,l,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=I;){if(x.x>=f&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&es(o,h,c,u,l,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function fx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ua(s,r)&&uu(s,n,n.next,r)&&Gs(s,r)&&Gs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ws(n),Ws(n.next),n=i=r),n=n.next}while(n!==i);return Li(n)}function px(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let c=du(a,o);a=Li(a,a.next),c=Li(c,c.next),Vs(a,t,e,n,s,r,0),Vs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gx(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=hu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Cx(l));for(s.sort(mx),r=0;r<s.length;r++)e=xx(s[r],e);return e}function mx(i,t){return i.x-t.x}function xx(i,t){let e=Ax(i,t);if(!e)return t;let n=du(e,i);return Li(n,n.next),Li(e,e.next)}function Ax(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&es(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Gs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&_x(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function _x(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function yx(i,t,e,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function es(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ix(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mx(i,t)&&(Gs(i,t)&&Gs(t,i)&&bx(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||ua(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ua(i,t){return i.x===t.x&&i.y===t.y}function uu(i,t,e,n){let s=wr(Ce(i,t,e)),r=wr(Ce(i,t,n)),a=wr(Ce(e,n,i)),o=wr(Ce(e,n,t));return!!(s!==r&&a!==o||s===0&&br(i,e,t)||r===0&&br(i,n,t)||a===0&&br(e,i,n)||o===0&&br(e,t,n))}function br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wr(i){return i>0?1:i<0?-1:0}function Mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gs(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function du(i,t){let e=new _c(i.i,i.x,i.y),n=new _c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rh(i,t,e,n){let s=new _c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _c(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var oi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ph(t),Dh(n,t);let a=t.length;e.forEach(Ph);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Dh(n,e[c]);let o=hx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ph(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var fi=class i extends Ge{constructor(t=new fn([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,I=e.UVGenerator!==void 0?e.UVGenerator:Sx,_,x=!1,D,b,R,S;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,D=p.computeFrenetFrames(h,!1),b=new T,R=new T,S=new T),d||(g=0,f=0,m=0,A=0);let M=o.extractPoints(l),y=M.shape,P=M.holes;if(!oi.isClockWise(y)){y=y.reverse();for(let Q=0,rt=P.length;Q<rt;Q++){let E=P[Q];oi.isClockWise(E)&&(P[Q]=E.reverse())}}let F=oi.triangulateShape(y,P),k=y;for(let Q=0,rt=P.length;Q<rt;Q++){let E=P[Q];y=y.concat(E)}function K(Q,rt,E){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,E)}let z=y.length,nt=F.length;function G(Q,rt,E){let wt,it,Ct,ut=Q.x-rt.x,Bt=Q.y-rt.y,_t=E.x-Q.x,w=E.y-Q.y,v=ut*ut+Bt*Bt,O=ut*w-Bt*_t;if(Math.abs(O)>Number.EPSILON){let Z=Math.sqrt(v),tt=Math.sqrt(_t*_t+w*w),J=rt.x-Bt/Z,Et=rt.y+ut/Z,pt=E.x-w/tt,yt=E.y+_t/tt,Kt=((pt-J)*w-(yt-Et)*_t)/(ut*w-Bt*_t);wt=J+ut*Kt-Q.x,it=Et+Bt*Kt-Q.y;let at=wt*wt+it*it;if(at<=2)return new ot(wt,it);Ct=Math.sqrt(at/2)}else{let Z=!1;ut>Number.EPSILON?_t>Number.EPSILON&&(Z=!0):ut<-Number.EPSILON?_t<-Number.EPSILON&&(Z=!0):Math.sign(Bt)===Math.sign(w)&&(Z=!0),Z?(wt=-Bt,it=ut,Ct=Math.sqrt(v)):(wt=ut,it=Bt,Ct=Math.sqrt(v/2))}return new ot(wt/Ct,it/Ct)}let ht=[];for(let Q=0,rt=k.length,E=rt-1,wt=Q+1;Q<rt;Q++,E++,wt++)E===rt&&(E=0),wt===rt&&(wt=0),ht[Q]=G(k[Q],k[E],k[wt]);let ft=[],vt,Nt=ht.concat();for(let Q=0,rt=P.length;Q<rt;Q++){let E=P[Q];vt=[];for(let wt=0,it=E.length,Ct=it-1,ut=wt+1;wt<it;wt++,Ct++,ut++)Ct===it&&(Ct=0),ut===it&&(ut=0),vt[wt]=G(E[wt],E[Ct],E[ut]);ft.push(vt),Nt=Nt.concat(vt)}for(let Q=0;Q<g;Q++){let rt=Q/g,E=f*Math.cos(rt*Math.PI/2),wt=m*Math.sin(rt*Math.PI/2)+A;for(let it=0,Ct=k.length;it<Ct;it++){let ut=K(k[it],ht[it],wt);ct(ut.x,ut.y,-E)}for(let it=0,Ct=P.length;it<Ct;it++){let ut=P[it];vt=ft[it];for(let Bt=0,_t=ut.length;Bt<_t;Bt++){let w=K(ut[Bt],vt[Bt],wt);ct(w.x,w.y,-E)}}}let Zt=m+A;for(let Q=0;Q<z;Q++){let rt=d?K(y[Q],Nt[Q],Zt):y[Q];x?(R.copy(D.normals[0]).multiplyScalar(rt.x),b.copy(D.binormals[0]).multiplyScalar(rt.y),S.copy(_[0]).add(R).add(b),ct(S.x,S.y,S.z)):ct(rt.x,rt.y,0)}for(let Q=1;Q<=h;Q++)for(let rt=0;rt<z;rt++){let E=d?K(y[rt],Nt[rt],Zt):y[rt];x?(R.copy(D.normals[Q]).multiplyScalar(E.x),b.copy(D.binormals[Q]).multiplyScalar(E.y),S.copy(_[Q]).add(R).add(b),ct(S.x,S.y,S.z)):ct(E.x,E.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let rt=Q/g,E=f*Math.cos(rt*Math.PI/2),wt=m*Math.sin(rt*Math.PI/2)+A;for(let it=0,Ct=k.length;it<Ct;it++){let ut=K(k[it],ht[it],wt);ct(ut.x,ut.y,u+E)}for(let it=0,Ct=P.length;it<Ct;it++){let ut=P[it];vt=ft[it];for(let Bt=0,_t=ut.length;Bt<_t;Bt++){let w=K(ut[Bt],vt[Bt],wt);x?ct(w.x,w.y+_[h-1].y,_[h-1].x+E):ct(w.x,w.y,u+E)}}}$(),et();function $(){let Q=s.length/3;if(d){let rt=0,E=z*rt;for(let wt=0;wt<nt;wt++){let it=F[wt];Ft(it[2]+E,it[1]+E,it[0]+E)}rt=h+g*2,E=z*rt;for(let wt=0;wt<nt;wt++){let it=F[wt];Ft(it[0]+E,it[1]+E,it[2]+E)}}else{for(let rt=0;rt<nt;rt++){let E=F[rt];Ft(E[2],E[1],E[0])}for(let rt=0;rt<nt;rt++){let E=F[rt];Ft(E[0]+z*h,E[1]+z*h,E[2]+z*h)}}n.addGroup(Q,s.length/3-Q,0)}function et(){let Q=s.length/3,rt=0;It(k,rt),rt+=k.length;for(let E=0,wt=P.length;E<wt;E++){let it=P[E];It(it,rt),rt+=it.length}n.addGroup(Q,s.length/3-Q,1)}function It(Q,rt){let E=Q.length;for(;--E>=0;){let wt=E,it=E-1;it<0&&(it=Q.length-1);for(let Ct=0,ut=h+g*2;Ct<ut;Ct++){let Bt=z*Ct,_t=z*(Ct+1),w=rt+wt+Bt,v=rt+it+Bt,O=rt+it+_t,Z=rt+wt+_t;St(w,v,O,Z)}}}function ct(Q,rt,E){c.push(Q),c.push(rt),c.push(E)}function Ft(Q,rt,E){kt(Q),kt(rt),kt(E);let wt=s.length/3,it=I.generateTopUV(n,s,wt-3,wt-2,wt-1);jt(it[0]),jt(it[1]),jt(it[2])}function St(Q,rt,E,wt){kt(Q),kt(rt),kt(wt),kt(rt),kt(E),kt(wt);let it=s.length/3,Ct=I.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);jt(Ct[0]),jt(Ct[1]),jt(Ct[3]),jt(Ct[1]),jt(Ct[2]),jt(Ct[3])}function kt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function jt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ex(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jr[s.type]().fromJSON(s)),new i(n,t.options)}},Sx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,c),new ot(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],A=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-u),new ot(d,1-m),new ot(A,1-p)]:[new ot(o,1-c),new ot(h,1-u),new ot(f,1-m),new ot(g,1-p)]}};function Ex(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var jr=class i extends Kr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ta=class i extends Ge{constructor(t=new fn([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;oi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let I=m[g];oi.isClockWise(I)===!0&&(m[g]=I.reverse())}let A=oi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let I=m[g];f=f.concat(I)}for(let g=0,p=f.length;g<p;g++){let I=f[g];s.push(I.x,I.y,0),r.push(0,0,1),a.push(I.x,I.y)}for(let g=0,p=A.length;g<p;g++){let I=A[g],_=I[0]+u,x=I[1]+u,D=I[2]+u;n.push(_,x,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Tx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Tx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var be=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let I=[],_=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let b=D/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(b+x,1-_),I.push(l++)}h.push(I)}for(let p=0;p<n;p++)for(let I=0;I<e;I++){let _=h[p][I+1],x=h[p][I],D=h[p+1][I],b=h[p+1][I+1];(p!==0||a>0)&&f.push(_,x,b),(p!==n-1||c<Math.PI)&&f.push(x,D,b)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ae=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let A=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let A=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,I=(s+1)*f+m;a.push(A,g,I),a.push(g,p,I)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xs=class i extends Ge{constructor(t=new $r(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new ot,h=new T,u=[],d=[],f=[],m=[];A(),this.setIndex(m),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function A(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),I(),p()}function g(_){h=t.getPointAt(_/e,h);let x=a.normals[_],D=a.binormals[_];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,S=Math.sin(R),M=-Math.cos(R);c.x=M*x.x+S*D.x,c.y=M*x.y+S*D.y,c.z=M*x.z+S*D.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){let D=(s+1)*(_-1)+(x-1),b=(s+1)*_+(x-1),R=(s+1)*_+x,S=(s+1)*(_-1)+x;m.push(D,b,S),m.push(b,R,S)}}function I(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)l.x=_/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Jr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Jt=class extends Di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Sr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,o=2*e-n;break;case Ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:a=t,c=2*n-e;break;case Ul:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-d*g+2*d*A-d*m,I=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*A+.5*m,x=f*g-f*A;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+I*a[l+D]+_*a[c+D]+x*a[u+D];return r}},vc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Cc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Rx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Jo;var Ui=class extends pn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Lr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends pn{};Ic.prototype.ValueTypeName="color";var Mc=class extends pn{};Mc.prototype.ValueTypeName="number";var bc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)hi.slerpFlat(r,0,a,l-o,a,l,c);return r}},ea=class extends pn{InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends pn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Lr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends pn{};wc.prototype.ValueTypeName="vector";var Lh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Sc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Px=new Sc,qs=class{constructor(t){this.manager=t!==void 0?t:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ec=class extends qs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Lh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Fs("img");function c(){h(),Lh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var pi=class extends qs{constructor(t){super(t)}load(t,e,n,s){let r=new Je,a=new Ec(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ys=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},na=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lo=new ve,Uh=new T,Nh=new T,ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fh=new ve,ws=new T,ho=new T,Tc=class extends ia{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),ho.copy(n.position),ho.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ho),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}},sa=class extends Ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rc=class extends ia{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ra=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var aa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Oh(){return performance.now()}var Xc="\\[\\]\\.:\\/",Dx=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",Lx="[^"+Xc.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",qc),Nx=/(WCOD+)?/.source.replace("WCOD",Lx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),kx=new RegExp("^"+Ux+Nx+Fx+Ox+"$"),Bx=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(t){let e=kx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Pc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RA=new Float32Array(1);var kh=new ve,oa=class{constructor(t,e,n=0,s=1/0){this.ray=new Or(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(Bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Dc(t[s],this,n,e);return n.sort(Bh),n}};function Bh(i,t){return i.distance-t.distance}function Dc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Dc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);var zx="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",ke=null,da=!1;function fu(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Yc(){fu(),da=!0;try{if(ke||(ke=document.createElement("audio"),ke.src=zx,ke.loop=!0,ke.preload="auto",ke.setAttribute("playsinline",""),ke.setAttribute("webkit-playsinline",""),ke.setAttribute("x-webkit-airplay","deny"),ke.volume=.01,ke.addEventListener("pause",()=>{da&&!document.hidden&&setTimeout(()=>da&&ke.paused&&ke.play().catch(()=>{}),300)})),ke.paused){let i=ke.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function $c(){da=!1;try{ke&&!ke.paused&&ke.pause()}catch{}}function pu(i,t){fu();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var fe=i=>440*Math.pow(2,(i-69)/12),Zc={tempo:112,chords:[[41,[65,69,72]],[46,[65,70,74]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,70]],[41,[65,69,72]]],melody:[[0,0,77],[0,2,81],[0,4,84],[0,6,81],[1,0,82],[1,3,79],[1,4,77],[2,0,79],[2,2,76],[2,4,72],[2,6,76],[3,0,77],[3,4,72],[4,0,74],[4,2,77],[4,4,81],[4,6,79],[5,0,77],[5,2,74],[5,4,70],[6,0,72],[6,2,76],[6,4,79],[6,6,82],[7,0,81],[7,4,77]],lead:"marimba",shaker:!0},fa=class{constructor(t=Zc){this.ctx=null,this.muted=!1,this.mode="off",this.theme=t}unlock(){if(Yc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;pu(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.34,this.musicBus.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.3;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.14,this.musicBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){$c(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Yc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){if(this.mode===t&&!e||(this.mode=t,!this.ctx))return;this.step=0,this.nextTime=this.ctx.currentTime+.12;let n=this.musicOnly?1.6:1,s=(t==="calm"?.18:t==="menu"?.28:.34)*n;this.musicBus.gain.setTargetAtTime(s,this.ctx.currentTime,.3)}duck(t=2){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.mode==="calm"?.18:.34;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(.035,e,.06),this.musicBus.gain.setTargetAtTime(n,e+t,.4),this.sfx.gain.cancelScheduledValues(e),this.sfx.gain.setTargetAtTime(.45,e+.15,.08),this.sfx.gain.setTargetAtTime(.85,e+t,.3)}dispose(){clearInterval(this._timer),$c(),this.ctx&&this.ctx.close(),this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}lead(t,e,n,s=this.musicBus){let r=fe(t);switch(this.theme.lead){case"bell":this.tone("sine",r,e,.9,n,s,.002),this.tone("sine",r*2.76,e,.25,n*.25,s,.002);break;case"pluck":this.tone("triangle",r,e,.28,n,s,.002),this.tone("sine",r*2,e,.12,n*.3,s,.002);break;case"flute":this.tone("sine",r,e,.45,n,s,.05),this.tone("triangle",r*2,e,.3,n*.08,s,.06);break;default:this.tone("sine",r,e,.35,n,s,.003),this.tone("sine",r*4,e,.05,n*.3,s,.002)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=this.theme,n=t.currentTime+.2,s=60/(this.mode==="menu"?e.tempo*.9:e.tempo)/2,r=e.chords.length,a=this.mode==="play";for(;this.nextTime<n;){let o=this.nextTime,c=this.step%(r*8),l=Math.floor(c/8),h=c%8,[u,d]=e.chords[l];(h===0||h===4)&&this.tone("triangle",fe(u-(h===4?5:0)),o,s*1.6,.14,this.musicBus,.01),(h===2||h===6)&&d.forEach(m=>this.tone("sine",fe(m-12),o,s*1.2,.022,this.musicBus,.004));let f=this.energy||0;if(this.suspense){let m=[0,4,7,4,9,7,4,2];h%2===0?this.tone("triangle",fe(u+24+m[(this.step>>1)%8]),o,s*.55,.055,this.musicBus,.004):this.noise(o,.02,.03,"highpass",6500,1,this.musicBus),h===6&&this.tone("sine",fe(u+31+l%4*2),o,s*1.6,.03,this.musicBus,.01)}else for(let[m,A,g]of e.melody)m===l&&A===h&&this.lead(g,o,(a?.075:.06)*(.65+.7*f));f>=.4&&h%2===0&&this.lead(d[h/2%d.length]+12,o+s*.5,.03*f),f>=.8&&(h===3||h===7)&&this.lead(d[2]+24,o,.025),e.shaker&&a&&h%2===1&&this.noise(o,.04,.012,"highpass",8e3,1,this.musicBus),this.step++,this.nextTime+=s}}setSuspense(t){this.suspense=!!t}play(t,e){if(!this.on||this.musicOnly)return;let n=this.ctx.currentTime+.005;switch(t){case"note":this.lead(e||79,n,.09,this.sfx);break;case"applause":{for(let r=0;r<130;r++){let a=n+Math.pow(Math.random(),1.5)*2.5;this.noise(a,.02+Math.random()*.025,.09+Math.random()*.08,"bandpass",1300+Math.random()*3e3,1.3,this.sfx),r%3===0&&this.noise(a,.05,.05,"lowpass",900,.8,this.sfx)}break}case"crowd":{let s=this.ctx;for(let r=0;r<6;r++){let a=n+r*.045+Math.random()*.08,o=s.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(250+r*28,a),o.frequency.exponentialRampToValueAtTime(430+r*36,a+.5);let c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=850,c.Q.value=4;let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=1300,l.Q.value=5;let h=s.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(.07,a+.07),h.gain.exponentialRampToValueAtTime(1e-4,a+.75),o.connect(c),o.connect(l),c.connect(h),l.connect(h),h.connect(this.sfx),o.start(a),o.stop(a+.8)}break}case"fanfare":[72,76,79,84,88].forEach((s,r)=>{this.tone("triangle",fe(s),n+r*.075,.38,.085),this.tone("square",fe(s),n+r*.075,.18,.018),this.tone("sine",fe(s)*2,n+r*.075,.3,.03)});break;case"yay":[72,76,79,84,88,91].forEach((s,r)=>{this.tone("triangle",fe(s),n+r*.06,.4,.05),this.tone("sine",fe(s)*2,n+r*.06,.2,.02)});break;case"tap":this.tone("sine",880,n,.06,.05);break;case"step":this.tone("sine",e?1250:1100,n,.04,.035),this.noise(n,.03,.02,"highpass",5e3,1);break;case"bump":this.slide("sine",260,150,n,.18,.13),this.slide("sine",320,200,n+.06,.14,.05);break;case"right":[[84,0],[88,.09],[91,.18]].forEach(([s,r])=>{this.tone("sine",fe(s),n+r,.45,.08),this.tone("sine",fe(s)*3,n+r,.08,.012)});break;case"wrong":this.tone("triangle",fe(67),n,.18,.06),this.tone("triangle",fe(64),n+.14,.26,.05);break;case"pop":this.slide("sine",900,300,n,.08,.12),this.noise(n,.05,.06,"bandpass",2500,2);break;case"sparkle":for(let s=0;s<6;s++)this.tone("sine",fe(90+s*5%12),n+s*.045,.25,.03);break;case"star":[88,91,96,100].forEach((s,r)=>this.tone("sine",fe(s),n+r*.07,.5,.05));break;case"whoosh":this.noise(n,.5,.09,"bandpass",500,.8,this.sfx,2600);break;case"page":this.noise(n,.25,.06,"bandpass",1800,.6,this.sfx,900);break;case"drop":this.tone("sine",520,n,.08,.1),this.tone("sine",780,n+.05,.12,.06),this.noise(n,.05,.04,"lowpass",900,1);break;case"splash":this.noise(n,.6,.12,"lowpass",3e3,.7,this.sfx,500);for(let s=0;s<4;s++)this.tone("sine",900+Math.random()*900,n+.05+s*.06,.08,.025);break;case"nibble":for(let s=0;s<5;s++)this.noise(n+s*.09,.05,.08,"bandpass",1200+s%2*500,2);break;case"squeak":this.slide("sine",1800,2600,n,.08,.05),this.slide("sine",2600,2e3,n+.08,.07,.04);break;case"cheer":[76,79,84,88].forEach((s,r)=>{this.tone("sine",fe(s),n+r*.07,.35,.05),this.tone("sine",fe(s)*2,n+r*.07,.12,.012)});break;case"hmm":this.tone("sine",fe(67),n,.25,.05),this.tone("sine",fe(64),n+.15,.3,.045);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.9]].forEach(([s,r])=>{this.tone("triangle",fe(s),n+r,.5,.08),this.tone("sine",fe(s)*2,n+r,.2,.02)});for(let s=0;s<10;s++)this.noise(n+.3+s*.05,.05,.025,"highpass",7500,1);break;case"roundWin":[[79,0],[84,.1],[88,.2],[91,.32]].forEach(([s,r])=>this.tone("sine",fe(s),n+r,.4,.07));break;default:}}voice(t,e,n){t.forEach((s,r)=>{let a=e+r*.11;this.slide("sine",fe(s)*.94,fe(s),a,.12,n),this.slide("square",fe(s)*.94,fe(s),a,.1,n*.12)})}};function mu(i){return String(i).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu,"").replace(/\s+/g," ").trim()}function gu(i,t){let e=`${t==="en"?"en":"ar"}|${mu(i)}`,n=2166136261;for(let s of new TextEncoder().encode(e))n^=s,n=Math.imul(n,16777619)>>>0;return n.toString(16).padStart(8,"0")}var pa=class{constructor(t,e,n,s){if(this.dir=`${t}../learn_voice/`,this.lang=e==="en"?"en":"ar",this.fallback=n,this.onTalk=s||(()=>{}),this.queue=[],this.audio=null,this.muted=!1,typeof document!="undefined"&&!window.__learnVoice&&!document.getElementById("learn-voice-manifest")){let r=document.createElement("script");r.id="learn-voice-manifest",r.src=`${this.dir}manifest.js`,r.onerror=()=>{window.__learnVoice=window.__learnVoice||{ar:[],en:[]}},document.head.append(r)}}has(t){let e=typeof window!="undefined"&&window.__learnVoice;return!!(e&&e[this.lang]&&e[this.lang].includes(gu(t,this.lang)))}say(t,e,n){this.stop(),this.queue=(Array.isArray(t)?t:[t]).map(mu).filter(Boolean),this.i=0,this.onEach=e||null,this.onDone=n||null,this.run=(this.run||0)+1,!this.queue.length&&this.onDone?this.onDone():this._next()}_finish(){let t=this.onDone;this.onDone=null,t&&t()}_start(t){this.onEach&&this.onEach(t)}_next(t=0){if(this.muted){this._finish();return}if(!this.queue.length){this._finish();return}if(typeof window!="undefined"&&!window.__learnVoice&&t<8){let r=this.queue;setTimeout(()=>{this.queue===r&&this._next(t+1)},130);return}let e=this.queue.shift();if(!this.has(e)){let r=[e,...this.queue],a=r.join(this.lang==="en"?", ":"\u060C ");this.queue=[],this.onTalk(Math.min(8,1.2+a.length*.09)),this.fallback(a,this.lang);let o=Math.max(600,Math.min(1100,a.length*90/r.length)),c=this.run;r.forEach((l,h)=>setTimeout(()=>{c===this.run&&this._start(this.i+h)},h*o)),setTimeout(()=>{c===this.run&&this._finish()},r.length*o+300);return}this._start(this.i++);let n=new Audio(`${this.dir}${this.lang}/${gu(e,this.lang)}.mp3`);this.audio=n,n.addEventListener("loadedmetadata",()=>this.onTalk((n.duration||2)+.3)),n.addEventListener("ended",()=>{this.audio===n&&(this.audio=null,this._next())}),n.addEventListener("error",()=>{this.audio===n&&(this.audio=null,this.onTalk(Math.min(6,1.2+e.length*.09)),this.fallback(e,this.lang),this._next())}),this.onTalk(2.5);let s=n.play();s&&s.catch&&s.catch(()=>{})}stop(){if(this.run=(this.run||0)+1,this.queue=[],this.onDone=null,this.audio){try{this.audio.pause()}catch{}this.audio=null}}};function Ot(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Hx={back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Let's play"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],newStar_m:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643! \u2B50","A new star for you! \u2B50"],newStar_f:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643\u064A! \u2B50","A new star for you! \u2B50"],doneAgain_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],doneAgain_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],great_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],great_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],greatSay_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],greatSay_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],newStarSay_m:["\u062E\u062F\u062A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"],newStarSay_f:["\u062E\u062F\u062A\u064A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"]};function xu(i,t){let e=t.lang==="en"?"en":"ar",n=t.gender==="girl",s={...Hx,...i};return{t:o=>{let c=`${o}_${n?"f":"m"}`,l=s[c]?c:o;return s[l]?s[l][e==="en"?1:0]:o},num:o=>e==="en"?String(o):String(o).replace(/[0-9]/g,c=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[c]),lang:e,girl:n}}var Vx=`
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
`,ga=class{constructor(t,e,n,s){this.el=t,this.cfg=e||{},this.post=n||(()=>{}),this.opts=s,this.T=xu(s.text||{},this.cfg),this.age=Number(this.cfg.age)||5,this.base=this.cfg.base||"./",this.done=!!this.cfg.done,this.save=this.cfg.save&&typeof this.cfg.save=="object"?{...this.cfg.save}:{},this.sound=new fa(s.theme),s.musicOnly&&(this.sound.musicOnly=!0,this.opts.voice=!1),this.voice=new pa(this.base,this.T.lang,(r,a)=>this.post({type:"speak",text:r,lang:a}),r=>this.sound.duck(r)),this.sound.muted=!!this.save.muted,document.getElementById("lk-style")||document.head.append(Ot("style",{id:"lk-style"},Vx)),this.root=Ot("div",{class:"lk-root",dir:this.T.lang==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=Ot("div",{class:"lk-layer"}),this.root.append(this.layer);for(let r of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(r,()=>this.sound.unlock(),{capture:!0,passive:!0});this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=Ot("button",{class:"lk-soundpill",onclick:r=>{r.stopPropagation(),this.sound.unlock()}},this.T.t("sound")),this.root.append(this.soundPill),this._tapped=!1,this.root.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t)}t(t){return this.T.t(t)}setGender(t){this.cfg.gender=t==="girl"?"girl":"boy",this.T=xu(this.opts.text||{},this.cfg)}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.onResize&&this.onResize(this.w,this.h)}async fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,2500))])}catch{}}speak(t,e,n){if(!t||this.opts.voice===!1){n&&n();return}this.voice.muted=this.sound.muted,this.voice.say(t,e,n)}round(t,e,n){t&&this.post({type:"round",skill:t,correct:!!e,detail:n==null?null:String(n)})}complete(){this.post({type:"complete"})}saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}exit(){this.saveNow(),this.post({type:"exit"})}clear(){this.layer.replaceChildren(),this.bubble=null}backBtn(){return Ot("button",{class:"lk-rbtn","aria-label":this.t("back"),onclick:t=>{t.stopPropagation(),this.exit()}},this.T.lang==="en"?"\u2190":"\u2192")}soundBtn(){let t=Ot("button",{class:"lk-rbtn y","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}topBar(t,e){let n=Ot("div",{class:"lk-dots","aria-hidden":"true"},Array.from({length:t},()=>Ot("span",{},e)));return this.layer.append(Ot("div",{class:"lk-top"},this.backBtn(),n,this.soundBtn())),this.bubble=Ot("div",{class:"lk-bubble",role:"status"}),this.layer.append(this.bubble),s=>[...n.children].forEach((r,a)=>r.classList.toggle("on",a<s))}say(t,e,n=3.2){this.bubble&&(this.bubble.textContent=t,this.bubble.classList.add("show"),clearTimeout(this._bt),n>0&&(this._bt=setTimeout(()=>this.bubble&&this.bubble.classList.remove("show"),n*1e3)),e&&this.speak(e===!0?t:e))}titleCard(t,e,n){this.clear(),this.sound.setMode("menu"),this.layer.append(Ot("div",{class:"lk-top"},this.backBtn(),Ot("span"),this.soundBtn()));let s=Ot("button",{class:"lk-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),n()}},"\u25B6 ",this.t("play"));this.layer.append(Ot("div",{class:"lk-dim",style:"background:none"},Ot("div",{class:"lk-card"},Ot("div",{class:"lk-title"},t),Ot("div",{class:"lk-big"},e),s))),setTimeout(()=>s.focus({preventScroll:!0}),50)}finishCard(t,e,n,s,r){this.complete();let a=!this.done;this.done=!0,this.sound.play("win"),setTimeout(()=>this.sound.play("star"),900),this.speak(a?`${this.t("greatSay")} ${this.t("newStarSay")}`:this.t("doneAgain"));let o=Ot("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),n()}},"\u21BB ",this.t("again"));this.layer.append(Ot("div",{class:"lk-dim"},Ot("div",{class:"lk-card"},Ot("div",{class:"lk-title",style:"font-size:calc(var(--u)*8)"},t),Ot("div",{class:"lk-starburst"},a?"\u2B50":e),Ot("div",{class:"lk-msg"},this.t("great")),Ot("div",{class:"lk-small",style:"font-size:calc(var(--u)*4.6);color:#6a3ad0"},a?this.t("newStar"):this.t("doneAgain")),s?Ot("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),s()}},this.t("nextLevel")):null,o,r?Ot("button",{class:"lk-btn p",onclick:()=>{this.sound.play("tap"),r()}},this.t("levelsBtn")):null,Ot("button",{class:"lk-btn p",onclick:()=>this.exit()},this.t("back"))))),setTimeout(()=>o.focus({preventScroll:!0}),50)}pause(){this.sound.suspend(),this.voice&&this.voice.stop()}dispose(){this.voice&&this.voice.stop(),clearInterval(this._pill),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}};var ma=class extends fs{constructor(){super();let t=new le;t.deleteAttribute("uv");let e=new Jt({side:Fe}),n=new Jt,s=new sa(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Y(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Y(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Y(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let c=new Y(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Y(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Y(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Y(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Y(t,As(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Y(t,As(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new Y(t,As(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let A=new Y(t,As(43));A.position.set(-.462,8.89,14.52),A.scale.set(4.38,5.441,.088),this.add(A);let g=new Y(t,As(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Y(t,As(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function As(i){let t=new ie;return t.color.setScalar(i),t}function Au(i,t,{env:e=.35,exposure:n=.95}={}){i.toneMapping=Nc,i.toneMappingExposure=n;try{let s=new ds(i);t.environment=s.fromScene(new ma,.04).texture,t.environmentIntensity=e,s.dispose()}catch{}}function mn(i,{top:t="#5ab4ff",horizon:e="#d8f0ff"}={}){let n=document.createElement("canvas");n.width=8,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,t),r.addColorStop(.6,e),r.addColorStop(1,"#fff6e0"),s.fillStyle=r,s.fillRect(0,0,8,256);let a=new wn(n);a.colorSpace=de;let o=new Y(new be(90,24,16),new ie({map:a,side:Fe,fog:!1,depthWrite:!1}));return o.renderOrder=-10,i.add(o),i.background=null,o}function Sn(i,t=7,{y:e=11,spread:n=36,z:s=-22}={}){let r=new Tt,a=new Jt({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.35});for(let o=0;o<t;o++){let c=new Tt,l=4+o%3;for(let h=0;h<l;h++){let u=new Y(new be(1.2+h%3*.45,14,10),a);u.position.set((h-l/2)*1.5,Math.sin(h*1.7)*.4,h%2*.5),u.scale.y=.7,c.add(u)}c.position.set((o/t-.5)*n+Math.sin(o*3)*3,e+o%3*1.6,s-o%2*6),c.userData.v=.08+o%4*.03,r.add(c)}return i.add(r),r.userData.drift=o=>{for(let c of r.children)c.position.x+=c.userData.v*o,c.position.x>n/2+6&&(c.position.x=-n/2-6)},r}function _u(i=3,t=3844170){let e=new Tt,n=new Y(new re(.16*i/3,.26*i/3,i*.55,10),new Jt({color:8014370,roughness:1}));n.position.y=i*.27,n.castShadow=!0,e.add(n);let s=new Jt({color:t,roughness:.85});for(let[r,a,o,c]of[[0,i*.8,0,.62],[-.45,i*.66,.1,.45],[.45,i*.68,-.1,.46],[.05,i*1.02,.05,.42],[-.1,i*.7,.4,.4]]){let l=new Y(new be(c*i/3*1.5,14,11),s);l.position.set(r*i/3*1.5,a,o*i/3*1.5),l.castShadow=!0,e.add(l)}return e.userData.sway={amp:.018+Math.random()*.012,ph:Math.random()*6.28,sp:.8+Math.random()*.5},e}function Gx(i=.7,t=3840584){let e=new Tt,n=new Jt({color:t,roughness:.9});for(let[s,r,a,o]of[[0,.5,0,1],[-.7,.35,.1,.7],[.7,.38,-.05,.75]]){let c=new Y(new be(i*o,12,9),n);c.position.set(s*i,r*i,a*i),c.castShadow=!0,e.add(c)}return e.userData.sway={amp:.03,ph:Math.random()*6.28,sp:1.1},e}function Wx(i=16738970,t=.55){let e=new Tt,n=new Y(new re(.02,.025,t,6),new Jt({color:3840570}));n.position.y=t/2,e.add(n);let s=new Jt({color:i,roughness:.6});for(let a=0;a<6;a++){let o=a/6*Math.PI*2,c=new Y(new be(.08,8,6),s);c.position.set(Math.cos(o)*.11,t,Math.sin(o)*.11),c.scale.set(1,.5,1),e.add(c)}let r=new Y(new be(.07,8,6),new Jt({color:16769114}));return r.position.y=t+.02,e.add(r),e.userData.sway={amp:.14,ph:Math.random()*6.28,sp:1.6+Math.random()*.8},e}function Xx(i=.5){let t=new Y(new Qr(i,1),new Jt({color:10132132,roughness:.95,flatShading:!0}));return t.scale.set(1.2,.7,1),t.castShadow=!0,t}function Yn(i,t,e=0){let n=[16738970,16765498,16777215,12086015,16747066];t.forEach((s,r)=>{let a;s.t==="tree"?a=_u(s.s||3.4,s.c||[3844170,4896858,3119685][r%3]):s.t==="bush"?a=Gx(s.s||.7):s.t==="rock"?a=Xx(s.s||.5):a=Wx(n[r%n.length],s.s||.55),a.position.set(s.x,e,s.z),a.rotation.y=r*1.3,i.add(a)})}function Jc(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"));let r=new wn(s);return r.colorSpace=de,n&&(r.wrapS=r.wrapT=Ri,r.repeat.set(...n)),r}var De=(i,t={})=>new Jt({color:i,roughness:.55,...t});function yu(i,{size:t=160,color:e="#3a2a5a",bg:n=null,font:s="900"}={}){return Jc(256,256,r=>{n&&(r.fillStyle=n,r.beginPath(),r.arc(128,128,120,0,Math.PI*2),r.fill()),r.fillStyle=e,r.font=`${s} ${t}px Tajawal, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,138)})}var xa=class{constructor(t,e={}){this.sh=t,this.o={bg:14676991,ground:14207144,fov:40,box:[5,3],dir:[0,.45,.9],target:[0,.8,0],...e},this.renderer=new Wr({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=de,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Uc,t.root.prepend(this.renderer.domElement),this.scene=new fs,Au(this.renderer,this.scene),this.scene.background=new Qt(this.o.bg),this.camera=new Ve(this.o.fov,1,.1,120),this.scene.add(new na(16777215,this.o.ground,1.6));let n=new ra(16774368,2);n.position.set(-3,9,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:34}),this.scene.add(n),this.fx=[],this.picks=[],this.focus=null,this.mode="title",this.clock=new aa,this.frames=[],t.onResize=(s,r)=>this.resize(s,r),this.resize(t.w,t.h),this._bind(),this._loop()}add(...t){return this.scene.add(...t),t[0]}resize(t,e){let n=this.renderer;n.setSize(t,e,!1),n.domElement.style.width="100%",n.domElement.style.height="100%";let s=this.camera;s.aspect=t/e,s.updateProjectionMatrix();let r=Math.tan(eu.degToRad(s.fov/2)),a=Math.max(this.o.box[1]/r,this.o.box[0]/(r*s.aspect)),o=new T(...this.o.dir).normalize(),c=new T(...this.o.target);s.position.copy(c).addScaledVector(o,a),s.lookAt(c)}setPicks(t,e){this.picks=t,this.onPick=e,this.focus!=null&&this.focus>=t.length&&(this.focus=null)}_bind(){let t=this.sh.root;this._up=e=>{if(this.mode!=="wait"||!this.picks.length||e.target.closest("button")||e.target.closest(".lk-dim"))return;let n=t.getBoundingClientRect(),s=new ot((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new oa;r.setFromCamera(s,this.camera);let a=r.intersectObjects(this.picks.map(o=>o.hit),!1)[0];a&&this.onPick(a.object.userData.id)},t.addEventListener("pointerup",this._up),this._key=e=>{var s;if(this.mode!=="wait"||!this.picks.length)return;let n=this.picks.length;e.key==="ArrowLeft"||e.key==="ArrowRight"?(e.preventDefault(),this.focus=(((s=this.focus)!=null?s:e.key==="ArrowRight"?-1:0)+(e.key==="ArrowRight"?1:-1)+n)%n,this.sh.sound.play("tap")):(e.key==="Enter"||e.key===" ")&&this.focus!=null&&(e.preventDefault(),this.onPick(this.picks[this.focus].hit.userData.id))},window.addEventListener("keydown",this._key)}focusedId(){return this.focus!=null&&this.picks[this.focus]?this.picks[this.focus].hit.userData.id:null}sparkle(t,e=22){let n=[16734810,16763194,4892927,7002218,16777215];for(let s=0;s<e;s++){let r=new Y(new jr(.06),new ie({color:n[s%5]}));r.position.copy(t);let a=Math.random()*Math.PI*2;r.userData={v:new T(Math.cos(a)*1.5,2+Math.random()*2,Math.sin(a)*1.2),life:1},this.scene.add(r),this.fx.push(r)}}onFrame(t){this.frames.push(t)}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;for(let n of this.frames)n(t,e);for(let n=this.fx.length-1;n>=0;n--){let s=this.fx[n],r=s.userData;r.life-=t,r.v.y-=6*t,s.position.addScaledVector(r.v,t),r.life<=0&&(this.scene.remove(s),s.geometry.dispose(),this.fx.splice(n,1))}this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._key),this.sh.root.removeEventListener("pointerup",this._up),this.renderer.dispose()}};var Kc=new Map;function st(i,t=.45){let e=`${i}|${t}`;return Kc.has(e)||Kc.set(e,new Jt({color:i,roughness:t,metalness:.02})),Kc.get(e)}function Oe(i,t,e=0,n=0,s=0){let r=new Y(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var Rt=(i,t,e,n,s,r=1,a=1,o=1,c=18)=>{let l=Oe(new be(i,c,Math.max(10,c-4)),t,e,n,s);return l.scale.set(r,a,o),l},we=(i,t,e,n,s,r,a,o=18)=>Oe(new re(i,t,e,o),n,s,r,a),Le=(i,t,e,n,s,r,a)=>Oe(new le(i,t,e),n,s,r,a),gi=1710628,En=16777215;function Qc(i,t,e,n,s=1,r=.08){for(let a of[-1,1])i.add(Rt(.045*s,st(En,.3),t+a*r*s,e,n)),i.add(Rt(.026*s,st(gi,.2),t+a*r*s,e,n+.03*s)),i.add(Rt(.009*s,st(En,.2),t+a*r*s+.01*s,e+.012*s,n+.05*s))}function Aa(i,t,e,n,s=.6){let r=Rt(.09,st(3848266,.5),t,e,n,1,.35,.6);r.rotation.z=s,i.add(r)}var jc={apple(i){i.add(Rt(.34,st(15216682,.35),0,.34,0,1,.92,1)),i.add(we(.02,.025,.14,st(6961690),0,.7,0)),Aa(i,.08,.72,0),i.add(Rt(.06,st(16777215,.2),-.13,.48,.24,1,1.4,.5))},banana(i){let t=new ps([new T(-.38,.42,0),new T(-.2,.18,0),new T(.1,.12,0),new T(.36,.34,0)]),e=Oe(new Xs(t,24,.11,12),st(16765498,.4));i.add(e),i.add(Rt(.05,st(6965786),-.4,.45,0)),i.add(Rt(.04,st(4864538),.38,.37,0))},orange(i){i.add(Rt(.33,st(16747034,.5),0,.33,0)),i.add(we(.015,.02,.06,st(4880938),0,.66,0)),Aa(i,.06,.66,0,.3)},strawberry(i){let t=Oe(new rn(.3,.5,18),st(15738938,.4),0,.3,0);t.rotation.x=Math.PI,i.add(t),i.add(Rt(.3,st(15738938,.4),0,.5,0,1,.45,1));for(let e=0;e<14;e++){let n=e*2.4,s=.25+e%4*.07,r=.22-(.55-s)*.2;i.add(Rt(.018,st(16769658,.3),Math.cos(n)*r,s,Math.sin(n)*r))}for(let e=0;e<5;e++){let n=Rt(.1,st(3848266),Math.cos(e*1.26)*.12,.62,Math.sin(e*1.26)*.12,1,.25,.5);n.rotation.y=-e*1.26,i.add(n)}},pear(i){i.add(Rt(.3,st(11065402,.45),0,.3,0)),i.add(Rt(.2,st(11065402,.45),0,.58,0)),i.add(we(.02,.025,.12,st(6961690),.02,.8,0)),Aa(i,.1,.8,0)},grapes(i){let t=st(9059032,.3),e=0;for(let[n,s,r]of[[4,.62,.16],[4,.46,.14],[3,.31,.1],[1,.17,0]]){for(let a=0;a<n;a++){let o=a/n*Math.PI*2+e;i.add(Rt(.1,t,Math.cos(o)*r,s,Math.sin(o)*r))}e+=.5}i.add(we(.02,.02,.14,st(6965786),0,.78,0)),Aa(i,.1,.8,0)},watermelon(i){let t=new fn;t.absarc(0,0,.42,0,Math.PI,!1);let e=new fi(t,{depth:.18,bevelEnabled:!1,curveSegments:24});e.translate(0,0,-.09);let n=Oe(e,st(2791994));n.rotation.x=Math.PI,n.position.y=.44,i.add(n);let s=new fn;s.absarc(0,0,.36,0,Math.PI,!1);let r=Oe(new fi(s,{depth:.2,bevelEnabled:!1,curveSegments:24}),st(16730714));r.geometry.translate(0,0,-.1),r.rotation.x=Math.PI,r.position.y=.44,i.add(r);for(let[a,o]of[[-.18,.3],[0,.22],[.18,.3],[-.08,.36],[.1,.36]])i.add(Rt(.025,st(gi),a,o,.105,1,1.5,.5))},ball(i){i.add(Rt(.34,st(16777215,.3),0,.34,0));let t=Oe(new Ae(.34,.06,10,36),st(16726602,.3),0,.34,0);i.add(t);let e=Oe(new Ae(.34,.06,10,36),st(3836671,.3),0,.34,0);e.rotation.y=Math.PI/2,i.add(e);let n=Oe(new Ae(.34,.06,10,36),st(16765498,.3),0,.34,0);n.rotation.x=Math.PI/2,i.add(n)},teddy(i){let t=st(13141066,.8),e=st(15779984,.8);i.add(Rt(.22,t,0,.26,0,1,1.05,.9)),i.add(Rt(.14,e,0,.25,.14,1,1.1,.6)),i.add(Rt(.19,t,0,.6,0)),i.add(Rt(.08,e,0,.56,.16,1,.8,.8)),i.add(Rt(.03,st(gi),0,.58,.23));for(let s of[-1,1])i.add(Rt(.07,t,s*.15,.76,0)),i.add(Rt(.04,e,s*.15,.76,.04)),i.add(Rt(.025,st(gi,.2),s*.07,.65,.17)),i.add(Rt(.08,t,s*.22,.32,.06)),i.add(Rt(.09,t,s*.13,.07,.08,1,.8,1.2));let n=Rt(.05,st(16726634),0,.44,.17,2,.8,.6);i.add(n)},blocks(i){let t=[16730698,4892927,16762938];[[-.18,.13,0],[.18,.13,.02],[0,.39,0]].forEach(([e,n,s],r)=>{let a=Le(.26,.26,.26,st(t[r],.4),e,n,s);a.rotation.y=(r-1)*.2,i.add(a);let o=Le(.14,.14,.01,st(En,.4),e,n,s+.135);o.rotation.y=a.rotation.y,i.add(o)})},drum(i){i.add(we(.3,.3,.34,st(15220778,.4),0,.2,0,24)),i.add(we(.31,.31,.04,st(16765498,.3),0,.38,0,24)),i.add(we(.31,.31,.04,st(16765498,.3),0,.03,0,24)),i.add(we(.29,.29,.02,st(16315626,.6),0,.4,0,24));for(let t=0;t<6;t++){let e=t/6*Math.PI*2,n=we(.012,.012,.36,st(En),Math.cos(e)*.3,.2,Math.sin(e)*.3,6);n.rotation.z=t%2?.5:-.5,i.add(n)}for(let t of[-1,1]){let e=we(.02,.02,.42,st(14198890),t*.14,.55,.05,8);e.rotation.z=t*.8,i.add(e),i.add(Rt(.04,st(14198890),t*.3,.7,.05))}},yoyo(i){for(let e of[-1,1]){let n=we(.3,.3,.1,st(e<0?3852456:16739e3,.35),0,.32,e*.08,24);n.rotation.x=Math.PI/2,i.add(n)}let t=we(.08,.08,.08,st(En),0,.32,0);t.rotation.x=Math.PI/2,i.add(t),i.add(we(.008,.008,.4,st(En),0,.68,0,6)),i.add(Rt(.04,st(16765498),0,.88,0))},cat(i){let t=st(16754762,.7);i.add(Rt(.22,t,0,.24,-.05,1,.95,1.1)),i.add(Rt(.18,t,0,.52,.12));for(let n of[-1,1]){let s=Oe(new rn(.07,.13,12),t,n*.1,.68,.1);s.rotation.z=-n*.25,i.add(s),i.add(Rt(.06,t,n*.12,.05,.12,1,.7,1.3))}Qc(i,0,.55,.26,1,.065),i.add(Rt(.025,st(16743066),0,.49,.29));let e=Oe(new Xs(new ps([new T(0,.2,-.3),new T(.1,.35,-.42),new T(.05,.55,-.38)]),12,.04,8),t);i.add(e);for(let n=0;n<3;n++)i.add(Le(.12,.02,.01,st(14186538),0,.62+n*.03-.03,.29-n*.02))},fish(i){let t=st(16747050,.35);i.add(Rt(.26,t,0,.36,0,.6,.85,1.3));let e=Oe(new rn(.18,.24,4),t,0,.36,-.42);e.rotation.x=-Math.PI/2,e.scale.set(.3,1,1.2),i.add(e);for(let s of[-.08,.1])i.add(Rt(.2,st(En,.4),0,.36,s,.62,.84,.12));for(let s of[-1,1])i.add(Rt(.05,st(En,.3),s*.14,.42,.2)),i.add(Rt(.028,st(gi),s*.17,.42,.22));let n=Oe(new rn(.1,.18,4),t,0,.6,-.05);n.scale.set(.2,1,1),i.add(n)},chick(i){let t=st(16767034,.6);i.add(Rt(.22,t,0,.24,0)),i.add(Rt(.16,t,0,.5,.04)),Qc(i,0,.53,.17,.9,.06);let e=Oe(new rn(.04,.09,8),st(16747034),0,.48,.21);e.rotation.x=Math.PI/2,i.add(e);for(let n of[-1,1]){let s=Rt(.1,t,n*.2,.26,0,.4,.8,1);s.rotation.z=n*.4,i.add(s),i.add(Le(.06,.02,.1,st(16747034),n*.07,.01,.06))}i.add(Rt(.04,t,0,.68,.02,.6,1.2,.6))},bunny(i){let t=st(16052468,.8);i.add(Rt(.22,t,0,.24,-.02,1,.95,1.05)),i.add(Rt(.16,t,0,.5,.1));for(let e of[-1,1]){let n=Rt(.06,t,e*.07,.78,.06,.8,2.6,.6);n.rotation.z=-e*.12,i.add(n),i.add(Rt(.035,st(16754880),e*.07,.78,.1,.8,2.2,.4)),i.add(Rt(.06,t,e*.1,.04,.14,1,.6,1.4))}Qc(i,0,.53,.23,.85,.06),i.add(Rt(.025,st(16747176),0,.47,.26)),i.add(Rt(.07,t,0,.22,-.26))},frog(i){let t=st(5949498,.45);i.add(Rt(.26,t,0,.2,0,1.1,.75,1));for(let n of[-1,1])i.add(Rt(.1,t,n*.12,.38,.1)),i.add(Rt(.065,st(En,.3),n*.12,.42,.16)),i.add(Rt(.035,st(gi),n*.12,.43,.21)),i.add(Rt(.09,t,n*.24,.05,.12,1,.4,1.4));let e=Oe(new Ae(.1,.012,6,16,Math.PI),st(2779674),0,.24,.24);e.rotation.z=Math.PI,i.add(e),i.add(Rt(.18,st(13168778,.5),0,.13,.08,1,.5,1))},car(i){i.add(Le(.74,.22,.4,st(15216682,.3),0,.22,0)),i.add(Le(.4,.2,.36,st(15216682,.3),-.05,.42,0));for(let t of[-1,1])i.add(Le(.17,.14,.37,st(10148095,.1),-.05+t*.1,.43,0));for(let t of[-.24,.24])for(let e of[-.21,.21]){let n=we(.1,.1,.07,st(gi,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n),i.add(we(.045,.045,.075,st(14211296,.3),t,.1,e).rotateX(Math.PI/2))}for(let t of[-.12,.12])i.add(Rt(.035,st(16773800,.2),.37,.25,t));i.rotation.y=-Math.PI/2},bus(i){i.add(Le(.86,.42,.4,st(16761402,.35),0,.33,0));for(let t=0;t<4;t++)for(let e of[-1,1])i.add(Le(.15,.12,.01,st(10148095,.1),-.3+t*.19,.42,e*.205));i.add(Le(.01,.16,.3,st(10148095,.1),.435,.42,0)),i.add(Le(.88,.04,.41,st(3816010),0,.22,0));for(let t of[-.28,.28])for(let e of[-.21,.21]){let n=we(.09,.09,.07,st(gi,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n)}i.rotation.y=-Math.PI/2},boat(i){let t=new fn;t.moveTo(-.42,.2),t.lineTo(.42,.2),t.lineTo(.3,0),t.lineTo(-.3,0),t.closePath();let e=Oe(new fi(t,{depth:.3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),st(3832552,.35),0,.02,-.15);i.add(e),i.add(Le(.86,.04,.32,st(En,.4),0,.22,0)),i.add(we(.015,.015,.62,st(9067050),0,.53,0,8));let n=new fn;n.moveTo(0,0),n.lineTo(.3,0),n.lineTo(0,.5),n.closePath();let s=Oe(new ta(n),new Jt({color:16734810,side:Me,roughness:.6}),.02,.28,0);i.add(s),i.rotation.y=-Math.PI/2},plane(i){let t=st(16053498,.3),e=we(.1,.07,.8,t,0,.32,0);e.rotation.z=Math.PI/2,i.add(e),i.add(Rt(.1,t,.4,.32,0,1,1,1)),i.add(Le(.22,.03,.86,st(3836671,.35),.02,.3,0)),i.add(Le(.12,.02,.32,st(3836671,.35),-.36,.34,0)),i.add(Le(.12,.18,.02,st(16730698,.35),-.36,.44,0));for(let s=0;s<3;s++)for(let r of[-1,1])i.add(Rt(.025,st(6998271,.1),.1-s*.12,.37,r*.09));let n=Le(.02,.26,.04,st(3816010),.5,.32,0);i.add(n),i.userData.prop=n,i.rotation.y=-Math.PI/2},train(i){i.add(Le(.5,.3,.36,st(3852394,.35),-.12,.25,0)),i.add(Le(.26,.24,.36,st(15220778,.35),-.24,.52,0)),i.add(Le(.18,.1,.38,st(10148095,.1),-.24,.56,0));let t=we(.14,.14,.36,st(3832552,.35),.24,.27,0);t.rotation.z=Math.PI/2,i.add(t),i.add(we(.05,.07,.18,st(3816010),.3,.48,0)),i.add(Rt(.06,st(16765498),.42,.27,0));for(let e of[-.26,0,.26])for(let n of[-.19,.19]){let s=we(.09,.09,.05,st(16761402,.4),e,.1,n);s.rotation.x=Math.PI/2,i.add(s)}i.rotation.y=-Math.PI/2}},WA=Object.keys(jc);function vu(i){let t=new Tt,e=new Tt;return(jc[i]||jc.ball)(e),t.add(e),t.userData.id=i,t.userData.inner=e,t}function _a(i,t=.34,e=.07){let n=new fn;if(i==="circle")n.absarc(0,0,.72,0,Math.PI*2);else if(i==="square")n.moveTo(-.62+.14,-.62),n.lineTo(.62-.14,-.62),n.quadraticCurveTo(.62,-.62,.62,-.62+.14),n.lineTo(.62,.62-.14),n.quadraticCurveTo(.62,.62,.62-.14,.62),n.lineTo(-.62+.14,.62),n.quadraticCurveTo(-.62,.62,-.62,.62-.14),n.lineTo(-.62,-.62+.14),n.quadraticCurveTo(-.62,-.62,-.62+.14,-.62);else if(i==="triangle")n.moveTo(-.82,-.6),n.lineTo(.82,-.6),n.lineTo(0,.82),n.closePath();else if(i==="star"){for(let r=0;r<10;r++){let a=Math.PI/2+r*Math.PI/5,o=r%2?.42:.92,c=Math.cos(a)*o,l=Math.sin(a)*o;r?n.lineTo(c,l):n.moveTo(c,l)}n.closePath()}else n.moveTo(0,-.78),n.bezierCurveTo(-.2,-.55,-.9,-.2,-.9,.28),n.bezierCurveTo(-.9,.7,-.35,.85,0,.4),n.bezierCurveTo(.35,.85,.9,.7,.9,.28),n.bezierCurveTo(.9,-.2,.2,-.55,0,-.78);let s=new fi(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:4,curveSegments:20});return s.center(),s}var tl={ambulance:[220,130],ant:[340,260],apple:[120,150],banana:[190,140],bee:[320,200],boat:[230,130],boy_idle:[410,810],boy_point:[310,490],boy_read:[240,430],boy_wave:[292,490],brachio:[400,280],bus:[160,110],butterfly:[270,230],car:[200,110],carrot:[170,190],cat:[270,390],cat2:[390,430],caterpillar:[380,220],cheetah:[470,440],chick:[270,340],clownfish:[320,230],cow:[340,480],cow2:[430,450],crab:[400,290],croc:[300,470],croc2:[440,260],dog:[280,380],dog2:[360,440],dolphin:[400,300],dragonfly:[420,240],elephant:[380,460],elephant2:[480,470],firetruck:[210,140],frog:[156,236],giraffe:[300,500],giraffe2:[290,480],girl_cheer:[280,470],girl_idle:[430,820],girl_stand_read:[280,490],girl_wave:[272,490],goose:[230,390],grapes:[150,180],grasshopper:[400,230],helicopter:[240,140],hen:[300,360],horse:[410,450],iguana:[400,200],ladybug:[280,190],lion:[280,480],lion2:[300,430],mallard:[320,340],mango:[150,160],mantis:[300,230],monkey:[380,450],octopus:[350,290],orange:[144,156],owl:[470,512],owlbrown:[260,330],panda:[300,430],parrot:[370,330],peacock:[430,300],penguin:[330,350],pig:[340,410],pigeon:[300,320],pineapple:[130,190],plane:[230,130],police:[240,140],rabbit:[340,450],seahorse:[170,300],shark:[460,290],sheep:[210,350],sheep2:[330,430],snake:[340,230],starfish:[300,300],stego:[460,230],strawberry:[124,170],tiger:[410,450],tortoise:[370,210],train:[260,150],trex:[450,230],triceratops:[370,250],turtle:[450,270],watermelon:[190,144],zebra:[420,470]};var el={boy_arm_bend:[132,132],boy_arm_down:[124,140],boy_arm_point:[164,112],boy_arm_point2:[160,120],boy_arm_up:[140,140],boy_arm_wave:[216,156],boy_body:[236,256],boy_brow1:[100,44],boy_brow2:[104,44],boy_brow3:[104,48],boy_brow4:[104,44],boy_brow5:[104,44],boy_brow6:[104,48],boy_brow7:[104,52],boy_brow8:[104,56],boy_brow9:[104,56],boy_eye_closed:[112,60],boy_eye_left:[100,88],boy_eye_open:[100,88],boy_eye_open2:[100,88],boy_eye_shut2:[104,72],boy_eye_shut3:[112,72],boy_head:[276,300],boy_head34:[284,300],boy_leg_l:[128,352],boy_leg_r:[200,320],boy_mouth_flat:[92,44],boy_mouth_frown:[112,44],boy_mouth_laugh:[124,80],boy_mouth_o:[60,72],boy_mouth_oh:[92,112],boy_mouth_open:[144,92],boy_mouth_sad:[80,48],boy_mouth_smile:[124,44],boy_mouth_tiny:[48,56],girl_arm_bend:[120,132],girl_arm_down:[120,132],girl_arm_point:[180,124],girl_arm_wave:[180,160],girl_body:[260,350],girl_brow1:[120,52],girl_brow2:[120,52],girl_eye_closed:[120,80],girl_eye_closed2:[120,80],girl_eye_open:[120,104],girl_eye_open2:[120,104],girl_head:[320,320],girl_leg_l:[124,324],girl_leg_r:[164,320],girl_mouth_flat:[100,48],girl_mouth_frown:[112,44],girl_mouth_laugh:[104,100],girl_mouth_o:[56,68],girl_mouth_open:[140,100],girl_mouth_smile:[132,60],owl_beak:[120,80],owl_beak_open:[140,104],owl_body:[280,250],owl_eye_closed:[132,110],owl_eye_open:[132,120],owl_eye_open2:[132,120],owl_feet:[200,180],owl_full:[256,300],owl_head:[320,280],owl_wing_l:[240,200],owl_wing_r:[220,210]};var Cu="../art/",Iu=i=>{Cu=i},nl=new Map;function $x(i){if(nl.has(i))return nl.get(i);let t=new pi().load(`${Cu}rig/${i}.webp`);return t.colorSpace=de,t.anisotropy=4,nl.set(i,t),t}var Mu=i=>!!ya[i]&&Object.values(ya[i].parts).every(t=>!!el[t]);function Js(i,t,e=0){let[n,s]=el[i],r=n/2,a=s/2,o=new Te(r,a);o.translate(r/2-t[0],-(a/2-t[1]),0);let c=new ie({map:$x(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:Me}),l=new Y(o,c);l.position.z=e;let h=new Tt;return h.add(l),h.userData.mesh=l,h.userData.name=i,h}function Zs(i,t=0){let e=new Tt,n={};for(let[s,r,a]of i)n[s]=Js(r,a,t),n[s].visible=!1,e.add(n[s]);return e.userData.kids=n,e.userData.show=s=>{for(let[r,a]of Object.entries(n))a.visible=r===s},e}var ya={boy:{height:3.6,total:440,parts:{head:"boy_head",body:"boy_body",legL:"boy_leg_l",legR:"boy_leg_r",armDown:"boy_arm_down",armWave:"boy_arm_wave",armBend:"boy_arm_bend",armUp:"boy_arm_up",armPoint:"boy_arm_point2",eyeOpen:"boy_eye_open",eyeShut:"boy_eye_closed",mSmile:"boy_mouth_smile",mOpen:"boy_mouth_open",mLaugh:"boy_mouth_laugh",mO:"boy_mouth_o",mOh:"boy_mouth_oh",mFlat:"boy_mouth_flat"},hipL:[-20,172],hipR:[24,172],legLAnchor:[32,6],legRAnchor:[28,6],body:{at:[0,166],anchor:[59,128]},head:{at:[0,290],anchor:[68,146],eyeL:[-17,64],eyeR:[23,64],mouth:[4,26],eyeK:.62,mouthK:.65},shoulderL:[-46,264],shoulderR:[46,264],arm:{down:[12,10],wave:[14,26],bend:[12,10],up:[12,62],point:[10,16]}}};ya.girl={height:3.5,total:420,parts:{head:"girl_head",body:"girl_body",legL:"girl_leg_l",legR:"girl_leg_r",armDown:"girl_arm_down",armWave:"girl_arm_wave",armBend:"girl_arm_bend",armUp:"girl_arm_wave",armPoint:"girl_arm_point",eyeOpen:"girl_eye_open",eyeShut:"girl_eye_closed",mSmile:"girl_mouth_smile",mOpen:"girl_mouth_open",mLaugh:"girl_mouth_laugh",mO:"girl_mouth_o",mOh:"girl_mouth_o",mFlat:"girl_mouth_flat"},hipL:[-16,150],hipR:[20,150],legLAnchor:[30,6],legRAnchor:[28,6],body:{at:[0,95],anchor:[65,175]},head:{at:[0,267],anchor:[74,155],eyeL:[24,98],eyeR:[72,98],mouth:[47,36],eyeK:.55,mouthK:.6,eyeAnchor:[30,26],mouthAnchor:[33,15]},shoulderL:[-51,234],shoulderR:[51,234],arm:{down:[12,12],wave:[14,28],bend:[12,12],up:[14,28],point:[10,18]}};function bu(i){let t=ya[i],e=new Tt,n=t.height/t.total,s=new Tt;s.scale.setScalar(n),e.add(s);let r=t.parts,a=Js(r.legL,t.legLAnchor,-.2);a.position.set(t.hipL[0],t.hipL[1],0);let o=Js(r.legR,t.legRAnchor,-.2);o.position.set(t.hipR[0],t.hipR[1],0),s.add(a,o);let c=[["down",r.armDown,t.arm.down],["wave",r.armWave,t.arm.wave],["bend",r.armBend,t.arm.bend],["up",r.armUp,t.arm.up],["point",r.armPoint,t.arm.point]],l=Zs(c,.1);l.position.set(t.shoulderL[0],t.shoulderL[1],0),l.scale.x=-1;let h=Zs(c,.1);h.position.set(t.shoulderR[0],t.shoulderR[1],0),l.userData.show("down"),h.userData.show("down");let u=Js(r.body,t.body.anchor,0);u.position.set(t.body.at[0],t.body.at[1],0),s.add(u,l,h);let d=new Tt;d.position.set(t.head.at[0],t.head.at[1],.3),d.add(Js(r.head,t.head.anchor,0));let f=t.head.eyeAnchor||[25,22],m=Zs([["open",r.eyeOpen,f],["shut",r.eyeShut,[f[0]+3,f[1]-7]]],.02);m.position.set(t.head.eyeL[0],t.head.eyeL[1],0);let A=Zs([["open",r.eyeOpen,f],["shut",r.eyeShut,[f[0]+3,f[1]-7]]],.02);A.position.set(t.head.eyeR[0],t.head.eyeR[1],0),A.scale.x=-1;{let b=t.head.eyeK||1;m.scale.set(b,b,1),A.scale.set(-b,b,1)}m.userData.show("open"),A.userData.show("open");let g=t.head.mouthAnchor||[31,12],p=Zs([["smile",r.mSmile,g],["open",r.mOpen,g],["laugh",r.mLaugh,g],["o",r.mO,[g[0]-15,g[1]+6]],["oh",r.mOh,[g[0]-8,g[1]+10]],["flat",r.mFlat,[g[0]-8,g[1]]]],.03);p.position.set(t.head.mouth[0],t.head.mouth[1],0),p.userData.show("smile");{let b=t.head.mouthK||1;p.scale.set(b,b,1)}d.add(m,A,p),s.add(d);let I=new Y(new di(.9,24),new ie({color:0,transparent:!0,opacity:.18,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.position.set(0,.03,-.05),I.scale.set(1,.45,1),e.add(I);let _=new Tt;_.add(e);let x={act:null,t:0,lookX:0,blink:2+Math.random()*2,blinkT:0,nextMicro:3+Math.random()*3,micro:null,microT:0,mood:"smile"};_.userData.state=x,_.userData.rig=!0,_.act=b=>{x.act=b,x.t=0},_.look=b=>{x.lookX=b},_.face=()=>{},_.setLook=()=>{};let D=(b,R,S)=>b+(R-b)*S;return _.update=(b,R)=>{x.t+=b;let S=x.t,M=Math.sin(R*1.8)*1.2,y=Math.sin(R*.9)*.025,P=0,V=1+Math.sin(R*1.8)*.006,F="down",k="down",K=.05+Math.sin(R*1.6)*.02,z=-.05-Math.sin(R*1.6)*.02,nt=(St,kt,jt)=>{let Q=St*kt%1;if(Q<.22){let wt=Math.sin(Q/.22*Math.PI);return G=-.13*wt,ht=-.5*wt,0}let rt=(Q-.22)/.78,E=Math.sin(rt*Math.PI);return G=.09*E-(rt>.9?.05:0),ht=.35*E,E*jt},G=0,ht=0,ft=0,vt=!1,Nt="smile",Zt=0,$=0,et=0,It=0;if(!x.act&&(x.nextMicro-=b,x.nextMicro<=0)){x.nextMicro=2.6+Math.random()*4.5;let St=["look","look","hop","wave","excited"][Math.floor(Math.random()*5)];St==="wave"?_.act("wave"):(x.micro=St,x.microT=0,x.dir=Math.random()<.5?-1:1)}if(x.micro&&!x.act){x.microT+=b;let St=x.microT;x.micro==="look"?St<1.6?(It=Math.sin(St/1.6*Math.PI)*.18*x.dir,y+=It*.5):x.micro=null:x.micro==="hop"?St<.6?et=Math.sin(St/.6*Math.PI)*14:x.micro=null:x.micro==="excited"&&(St<1.1?(et=Math.abs(Math.sin(St*9))*8,Nt="open"):x.micro=null)}switch(x.act){case"wave":S<2.4&&(k="wave",z=-.2+Math.sin(S*11)*.22,Nt="open",y=.05);break;case"talk":S<2.4&&(k="wave",z=-.1+Math.sin(S*6)*.12,Nt=Math.sin(S*14)>0?"open":"smile");break;case"point":S<1.8&&(k="point",z=-.25,Nt="smile",y=-.05);break;case"clap":if(S<1.8){F=k="bend";let St=Math.abs(Math.sin(S*11));K=.6-St*.5,z=-.6+St*.5,Nt="laugh",et=nt(S,2.6,8)}break;case"giggle":S<2.2&&(F=k="bend",K=.9+Math.sin(S*12)*.12,z=-.9-Math.sin(S*12)*.12,Nt="laugh",et=nt(S,2.2,14),ft=Math.sin(S*4.4)*.05,y=Math.sin(S*4.4)*.06,vt=S>.9&&S<1.5);break;case"cheer":case"jump":S<1.3&&(F=k="up",K=.15,z=-.15,Nt="laugh",et=nt(S,1.5,38),ft=Math.sin(S*9)*.05);break;case"celebrate":S<2.6&&(F=k="up",K=.1+Math.sin(S*14)*.18,z=-.1-Math.sin(S*14)*.18,Nt="laugh",et=nt(S,1.4,44),ft=Math.sin(S*7)*.07,y=Math.sin(S*9)*.07);break;case"think":S<2.4&&(k="bend",z=-.9,Nt="o",y=.12+Math.sin(S*3)*.04);break;case"walk":Zt=Math.sin(S*7.4),M=Math.abs(Zt)*5,F=k="down",K=.15*Zt,z=-.15*Zt,Nt="smile";break;case"run":S<1.4&&(Zt=Math.sin(S*15),M=Math.abs(Zt)*9,$=.08);break;case"sad":S<2.2&&(Nt="flat",y=.1,M=-3);break;default:}x.act&&x.act!=="walk"&&S>2.8&&(x.act=null),e.position.y=(et+M*0)*n,s.position.y=M*n*.5,e.rotation.z=$+ft,e.scale.set(1-G*.55,1+G,1),u.scale.y=V,a.rotation.z=Zt*.42+ht,o.rotation.z=-Zt*.42-ht*.4,l.userData.show(F),h.userData.show(k),l.rotation.z=-K*-1,h.rotation.z=z,d.rotation.z=D(d.rotation.z,y,Math.min(1,b*10)),d.position.x=P,p.userData.show(Nt),x.blink-=b;let ct=vt;x.blink<=0&&x.blinkT===0&&(x.blinkT=1e-4),x.blinkT>0&&(x.blinkT+=b,ct=ct||x.blinkT<.14,x.blinkT>=.14&&(x.blinkT=0,x.blink=2+Math.random()*3.5)),m.userData.show(ct?"shut":"open"),A.userData.show(ct?"shut":"open");let Ft=Math.max(-.3,Math.min(.3,(x.lookX-_.position.x)*.035));e.rotation.y=D(e.rotation.y,Ft,Math.min(1,b*5)),I.scale.set(1-et*.004,.45-et*.002,1)},_}var rl="../clips/",va=null,il=null,sl=new Map;function wu(i){rl=i}function Zx(){return il||(il=fetch(`${rl}clips.json`).then(i=>i.ok?i.json():{}).catch(()=>({})).then(i=>(va=i||{},va))),il}var Jx={celebrate:"jump",cheer:"jump",jump:"jump",giggle:"laugh",clap:"clap",wave:"wave",walk:"walk",run:"walk"};function Kx(i){if(sl.has(i.file))return sl.get(i.file);let t=new pi().load(`${rl}${i.file}`);return t.colorSpace=de,t.repeat.set(1/i.cols,1/i.rows),sl.set(i.file,t),t}function al(i,t,e=3.6){let n=t.children[0],s=new Tt;t.add(s);let r=null,a=new Map,o=d=>{if(a.has(d.file))return a.get(d.file);let f=e/.96,m=new Te(f*d.w/d.h,f);m.translate(0,f/2-(f-e)*.2,0);let A=new ie({map:Kx(d).clone(),transparent:!0,alphaTest:.06,toneMapped:!1,side:Me});A.map.repeat.set(1/d.cols,1/d.rows),A.map.needsUpdate=!0;let g=new Y(m,A);return g.visible=!1,g.position.z=.05,s.add(g),a.set(d.file,g),g},c=()=>{r&&(r.mesh.visible=!1,r=null),n.visible=!0},l=(d,f)=>{r&&(r.mesh.visible=!1),r={entry:d,mesh:o(d),t:0,loop:f},r.mesh.visible=!0,n.visible=!1},h=t.act,u=t.update;return t.act=d=>{h(d);let f=va&&va[`${i}_${Jx[d]}`];f?l(f,!!f.loop):c()},t.update=(d,f)=>{if(u(d,f),!r)return;r.t+=d;let m=r.entry,A=Math.floor(r.t*m.fps);if(A>=m.frames)if(r.loop)A%=m.frames;else{c();return}let g=A%m.cols,p=Math.floor(A/m.cols);r.mesh.material.map.offset.set(g/m.cols,1-(p+1)/m.rows)},Zx(),t}var Su="../art/",Eu=i=>{Su=i,Iu(i),wu(`${i}../clips/`)},ol=new Map;function Qx(i){if(ol.has(i))return ol.get(i);let t=new pi().load(`${Su}${i}.webp`);return t.colorSpace=de,t.anisotropy=4,t.generateMipmaps=!0,t.minFilter=Hn,ol.set(i,t),t}function hl(i,t,e=1){if(e>1){let c=new Tt;for(let l=e-1;l>=0;l--){let h=hl(i,t,1);h.position.z=-l*.028;let u=l===0?1:Math.max(.35,.78-l*.07);h.material=h.material.clone(),h.material.color.setScalar(u),c.add(h)}return c}let[n,s]=tl[i],r=new Te(t*n/s,t);r.translate(0,t/2,0);let a=new ie({map:Qx(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:Me}),o=new Y(r,a);return o.userData.name=i,o}var jx={boy:{idle:"boy_idle",wave:"boy_wave",point:"boy_point",read:"boy_read",cheer:"boy_wave"},girl:{idle:"girl_idle",wave:"girl_wave",point:"girl_wave",read:"girl_stand_read",cheer:"girl_cheer"},owl:{idle:"owl",wave:"owl",point:"owl",read:"owl",cheer:"owl"}},cl={boy:3.6,girl:3.6,owl:3},tA=!1;function Ks(i){if(tA&&Mu(i))return al(i,bu(i),cl[i]);let t=jx[i],e=new Tt,n=new Tt;e.add(n);let s={};for(let[l,h]of Object.entries(t))s[h]||(s[h]=hl(h,cl[i],7),s[h].visible=!1,n.add(s[h]));let r=null,a=l=>{let h=s[t[l]||t.idle];h!==r&&(r&&(r.visible=!1),r=h,h.visible=!0)};a("idle");let o=new Y(new di(.9,24),new ie({color:0,transparent:!0,opacity:.18,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,-.05),o.scale.set(1,.45,1),e.add(o);let c={act:null,t:0,lookX:0,base:0,squash:0,micro:null,microT:0,nextMicro:2+Math.random()*3};return e.userData.state=c,e.act=l=>{c.act=l,c.t=0},e.look=l=>{c.lookX=l},e.face=()=>{},e.setLook=()=>{},e.update=(l,h)=>{c.t+=l;let u=c.t,d=0,f=0,m=0;if(!c.act&&(c.nextMicro-=l,c.nextMicro<=0)){let b=["look","look","hop","wave","excited"][Math.floor(Math.random()*5)];c.nextMicro=2.5+Math.random()*4.5,b==="look"?(c.micro="look",c.microT=0,c.lookDir=Math.random()<.5?-1:1):b==="wave"?e.act("wave"):(c.micro=b,c.microT=0)}if(c.micro){c.microT+=l;let b=c.microT;c.micro==="look"?b<1.6?(d=Math.sin(b/1.6*Math.PI)*.07*c.lookDir,f=Math.sin(b/1.6*Math.PI)*.3*c.lookDir):c.micro=null:c.micro==="hop"?b<.6?m=Math.sin(b/.6*Math.PI)*.22:c.micro=null:c.micro==="excited"&&(b<1.1?(m=Math.abs(Math.sin(b*9))*.14,d=Math.sin(b*18)*.03):c.micro=null)}let A=Math.sin(h*1.8)*.025,g=Math.sin(h*1.1)*.012,p=1+Math.sin(h*1.8)*.008,I=1,_=0,x="idle";switch(c.act){case"wave":u<2.4&&(x="wave",g=Math.sin(u*9)*.05,A=Math.abs(Math.sin(u*4))*.05);break;case"point":u<1.8&&(x="point",g=-.04);break;case"talk":u<2.4&&(x="wave",A=Math.abs(Math.sin(u*7))*.04,g=Math.sin(u*5)*.03);break;case"clap":u<1.8&&(x="wave",A=Math.abs(Math.sin(u*11))*.12,g=Math.sin(u*11)*.04);break;case"cheer":case"jump":u<1.3&&(x="cheer",A=Math.abs(Math.sin(u*7))*.55,p=1+Math.sin(u*14)*.04,I=1-Math.sin(u*14)*.03);break;case"celebrate":u<2.6&&(x="cheer",A=Math.abs(Math.sin(u*5))*.6,g=Math.sin(u*10)*.08,_=Math.sin(u*4)*.5);break;case"think":u<2.4&&(x="idle",g=.12+Math.sin(u*3)*.04,A=0);break;case"run":u<1.4&&(x="idle",A=Math.abs(Math.sin(u*15))*.16,g=.1+Math.sin(u*15)*.05);break;case"walk":{x="idle",A=Math.abs(Math.sin(u*7.4))*.1,g=Math.sin(u*7.4)*.06,p=1+Math.sin(u*14.8)*.012;break}case"sad":u<2.2&&(x="idle",g=.05,A=-.05,p=.97);break;default:}c.act&&c.act!=="walk"&&u>2.8&&(c.act=null),c.act||(A+=m,g+=d,_+=f),a(x);let D=Math.max(-.35,Math.min(.35,(c.lookX-e.position.x)*.04));n.rotation.y+=(D+_-n.rotation.y)*Math.min(1,l*6),n.rotation.z+=(g-n.rotation.z)*Math.min(1,l*10),n.position.y+=(A-n.position.y)*Math.min(1,l*14),n.scale.set(I,p,1),o.scale.set(1-A*.5,.45-A*.2,1)},i==="owl"?e:al(i,e,cl[i])}var ll={apple:"apple",banana:"banana",orange:"orange",grapes:"grapes",strawberry:"strawberry",watermelon:"watermelon",pineapple:"pineapple",mango:"mango",carrot:"carrot",cow:"cow",sheep:"sheep",dog:"dog",cat:"cat",giraffe:"giraffe",lion:"lion",elephant:"elephant",croc:"croc",horse:"horse",pig:"pig",bunny:"rabbit",rabbit:"rabbit",duck:"mallard",hen:"hen",chick:"chick",bee:"bee",butterfly:"butterfly",monkey:"monkey",fish:"clownfish",dove:"pigeon",frog:"frog",panda:"panda",tiger:"tiger",zebra:"zebra",penguin:"penguin",parrot:"parrot",car:"car",bus:"bus",train:"train",plane:"plane",boat:"boat",firetruck:"firetruck",ambulance:"ambulance",police:"police",helicopter:"helicopter"},eA=new Set(["cow","sheep","dog","cat","giraffe","lion","elephant","croc","horse","pig","rabbit","mallard","hen","chick","bee","butterfly","monkey","clownfish","pigeon","frog","panda","tiger","zebra","penguin","parrot"]),nA=i=>!!ll[i]&&!!tl[ll[i]];function Tu(i){if(!nA(i))return null;let t=new Tt,e=ll[i],n=eA.has(e)?1.5:1;return t.add(hl(e,n)),t.userData.id=i,t.userData.art=!0,t.userData.inner=new Tt,t}var X=(i,t=.55)=>new Jt({color:i,roughness:t}),q=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let c=new Y(new be(i,18,14),t);return c.position.set(e,n,s),c.scale.set(r,a,o),c.castShadow=!0,c},_e=(i,t,e,n,s=0,r=0,a=0)=>{let o=new Y(new re(i,t,e,14),n);return o.position.set(s,r,a),o.castShadow=!0,o},Ee=(i,t,e,n=0,s=0,r=0)=>{let a=new Y(new rn(i,t,14),e);return a.position.set(n,s,r),a.castShadow=!0,a},$e=(i,t,e,n=.12,s=.05)=>{for(let r of[-1,1])i.add(q(s,X(1710628,.3),r*n,t,e)),i.add(q(s*.35,new ie({color:16777215}),r*n+s*.3,t+s*.4,e+s*.7))},xn=(i,t,e,n,s=.28,r=.07)=>{for(let a of e)for(let o of n)i.add(_e(r,r*.9,s,t,a,s/2,o))},ul={duck(i){let t=X(16767034,.4),e=X(16747050);i.add(q(.42,t,0,.45,0,1,.9,1.15)),i.add(q(.27,t,0,.9,.3));let n=q(.13,e,0,.84,.55,1.3,.5,1.1);i.add(n),$e(i,.97,.5,.12),i.add(q(.2,X(16761370),.38,.5,-.02,.4,.8,1)),i.add(q(.2,X(16761370),-.38,.5,-.02,.4,.8,1)),i.add(Ee(.14,.3,t,0,.62,-.5)).rotation.x=-1.1},butterfly(i){i.add(_e(.05,.05,.6,X(4864602),0,.5,0)).rotation.x=Math.PI/2,i.children[0].rotation.x=0,i.add(q(.09,X(4864602),0,.85,0));let t=new Tt;for(let[e,n,s]of[[-1,1,16739e3],[1,1,16739e3],[-1,-1,12090111],[1,-1,12090111]]){let r=q(.38,X(s,.4),e*.36,.62+n*.18,0,1,1,.12);t.add(r,q(.1,X(16777215),e*.42,.62+n*.2,.06,1,1,.3))}i.add(t),i.userData.wings=t;for(let e of[-1,1]){let n=_e(.012,.012,.3,X(4864602),e*.08,1.05,0);n.rotation.z=-e*.4,i.add(n)}},fox(i){let t=X(15764010),e=X(16774376),n=X(4860442);i.add(q(.4,t,0,.5,-.05,.9,.85,1.25)),i.add(q(.3,t,0,.88,.38,1.1,.95,1)),i.add(q(.2,e,0,.8,.55,1.2,.7,1)),i.add(q(.05,n,0,.84,.72));for(let s of[-1,1]){let r=Ee(.11,.32,t,s*.2,1.2,.34);r.rotation.z=-s*.2,i.add(r),i.add(Ee(.05,.2,n,s*.2,1.18,.37)).rotation.z=-s*.2}$e(i,.95,.62,.12),i.add(q(.18,t,0,.55,-.62,.8,.8,1.7)).rotation.x=.5,i.add(q(.14,e,0,.78,-.95,.9,.9,1.2)),xn(i,n,[-.2,.2],[.25,-.35],.3)},camel(i){let t=X(14198888),e=X(12093512);i.add(q(.42,t,0,.78,0,.85,.8,1.35)),i.add(q(.22,t,0,1.2,-.2)),i.add(q(.2,t,0,1.18,.28));let n=_e(.12,.17,.62,t,0,1.2,.58);n.rotation.x=.5,i.add(n),i.add(q(.17,t,0,1.55,.78,.9,.9,1.3)),i.add(q(.05,X(1710628),0,1.6,.93)),$e(i,1.6,.76,.1,.035),xn(i,e,[-.22,.22],[.42,-.42],.55,.08),i.add(_e(.025,.025,.35,e,0,.7,-.62)).rotation.x=.3},horse(i){let t=X(11037242),e=X(3810328),n=X(16774376);i.add(q(.38,t,0,.78,0,.8,.8,1.4));let s=_e(.14,.2,.6,t,0,1.15,.5);s.rotation.x=.55,i.add(s),i.add(q(.2,t,0,1.5,.7,.85,.95,1.5)),i.add(q(.12,n,0,1.45,.88,.8,.7,1));for(let r of[-1,1])i.add(Ee(.07,.2,t,r*.1,1.72,.58));$e(i,1.55,.74,.14,.035),i.add(q(.1,e,0,1.55,.45,.5,1.6,.9)).rotation.x=.55,xn(i,t,[-.2,.2],[.42,-.45],.55,.075),i.add(Ee(.1,.55,e,0,.85,-.75)).rotation.x=2.6},sheep(i){let t=X(16775920,.9),e=X(3816004);for(let[n,s,r,a]of[[0,.62,0,.42],[-.28,.6,.1,.3],[.28,.6,.1,.3],[0,.85,.05,.3],[-.2,.6,-.3,.3],[.2,.6,-.3,.3],[0,.52,.3,.3]])i.add(q(a,t,n,s,r));i.add(q(.22,e,0,.72,.5,.95,1.05,1.1));for(let n of[-1,1])i.add(q(.1,e,n*.24,.8,.45,1.4,.7,.5));$e(i,.78,.68,.09,.03),xn(i,e,[-.18,.18],[.22,-.25],.3,.06)},hen(i){let t=X(16774376,.7),e=X(15216682),n=X(16752682);i.add(q(.42,t,0,.55,0,1,.95,1.1)),i.add(q(.24,t,0,1,.32)),i.add(q(.12,n,0,.95,.56,.9,.7,1.4));for(let s=0;s<3;s++)i.add(q(.07,e,0,1.28-Math.abs(s-1)*.04,.3+(s-1)*.1));i.add(q(.06,e,0,.82,.55,.7,1.4,.7)),$e(i,1.03,.5,.11,.035),i.add(Ee(.22,.5,t,0,.85,-.5)).rotation.x=-.6,i.add(q(.2,X(15786184),.4,.55,0,.35,.8,1)),i.add(q(.2,X(15786184),-.4,.55,0,.35,.8,1)),xn(i,n,[-.12,.12],[0],.2,.03)},sun(i){let t=X(16765466,.3);i.add(q(.45,t,0,.7,0));for(let n=0;n<10;n++){let s=n/10*Math.PI*2,r=Ee(.09,.32,X(16754714),Math.cos(s)*.68,.7+Math.sin(s)*.68,0);r.rotation.z=s-Math.PI/2,i.add(r)}$e(i,.78,.42,.15,.045);let e=new Y(new Ae(.15,.025,6,14,Math.PI),X(12073498));e.position.set(0,.6,.43),e.rotation.z=Math.PI,i.add(e);for(let n of[-1,1])i.add(q(.07,X(16751210),n*.28,.62,.38,1,.7,.5))},bee(i){let t=X(16765466),e=X(2763306);i.add(q(.4,t,0,.5,0,.9,.85,1.25));for(let n of[-.1,.2,-.38]){let s=q(.37-Math.abs(n)*.2,e,0,.5,n,.9,.85,.2);i.add(s)}i.add(q(.22,t,0,.62,.52)),$e(i,.68,.68,.1,.05);for(let n of[-1,1]){i.add(q(.22,X(13627135,.2),n*.32,.95,0,.9,.35,1.1)).userData.wing=n;let s=_e(.012,.012,.3,e,n*.08,.95,.62);s.rotation.z=-n*.4,s.rotation.x=.3,i.add(s)}i.add(Ee(.06,.2,e,0,.45,-.62)).rotation.x=-Math.PI/2},heart(i){let t=new Y(_a("heart",.4,.09),new Jt({color:16726634,roughness:.25}));t.scale.setScalar(.62),t.position.y=.55,t.castShadow=!0,i.add(t),i.add(q(.07,new ie({color:16765148}),-.2,.72,.28,1,1.4,.5))},rose(i){let t=X(15214666,.45),e=X(3844170);i.add(_e(.04,.05,.75,e,0,.38,0));for(let[n,s]of[[-1,.35],[1,.5]]){let r=q(.16,e,n*.2,s,0,1.6,.3,.8);r.rotation.z=n*.4,i.add(r)}i.add(q(.3,t,0,.95,0,1,.9,1));for(let n=0;n<5;n++){let s=n/5*Math.PI*2;i.add(q(.18,X(16730730,.45),Math.cos(s)*.24,.98,Math.sin(s)*.24,1,1.1,.6)).rotation.y=-s}i.add(q(.14,X(13113914),0,1.05,0))},dog(i){let t=X(13144138),e=X(16774376),n=X(8014370);i.add(q(.4,t,0,.55,-.05,.85,.8,1.3)),i.add(q(.3,t,0,.95,.4)),i.add(q(.18,e,0,.88,.62,1,.8,1.1)),i.add(q(.06,X(1710628),0,.93,.78));for(let s of[-1,1])i.add(q(.13,n,s*.3,.95,.35,.6,1.5,.9));$e(i,1.02,.62,.12,.045),xn(i,t,[-.2,.2],[.28,-.38],.32,.08),i.add(Ee(.07,.4,t,0,.8,-.65)).rotation.x=-2.2,i.add(q(.1,X(16743066),0,.74,.7,.8,.4,1.2))},monkey(i){let t=X(10119738),e=X(15782048);i.add(q(.38,t,0,.55,0,.9,1,.9)),i.add(q(.3,t,0,1.05,.05)),i.add(q(.2,e,0,.98,.25,1.2,.9,.6)),i.add(q(.05,X(3811866),0,1,.36)),$e(i,1.12,.27,.1,.04);for(let s of[-1,1])i.add(q(.14,t,s*.33,1.08,0)),i.add(q(.09,e,s*.33,1.08,.05)),i.add(q(.1,t,s*.5,.45,.12,.8,1.6,.8));i.add(q(.24,e,0,.5,.25,.9,1,.5)),xn(i,t,[-.18,.18],[.05],.3,.09);let n=new Y(new Ae(.3,.05,8,16,Math.PI*1.4),t);n.position.set(0,.5,-.4),n.rotation.y=Math.PI/2,i.add(n)},cow(i){let t=X(16775920),e=X(2763306),n=X(16756920);i.add(q(.45,t,0,.78,0,.9,.85,1.4)),i.add(q(.18,e,-.15,.95,.1,1,1,.9)),i.add(q(.15,e,.2,.7,-.2,1,1,.9)),i.add(q(.3,t,0,1,.62)),i.add(q(.2,n,0,.9,.85,1.1,.8,.8));for(let s of[-1,1])i.add(q(.04,X(1710628),s*.08,.92,1)),i.add(Ee(.05,.2,X(16312512),s*.2,1.38,.62)).rotation.z=-s*.4,i.add(q(.11,e,s*.32,1.12,.6,1.4,.6,.8));$e(i,1.12,.84,.15,.04),xn(i,t,[-.22,.22],[.4,-.45],.45,.09),i.add(_e(.025,.025,.5,t,0,.7,-.7)).rotation.x=.3},bear(i){let t=X(9067066),e=X(15255704);i.add(q(.46,t,0,.55,0,1,1,.9)),i.add(q(.32,t,0,1.15,.05)),i.add(q(.18,e,0,1.08,.28,1.1,.8,.8)),i.add(q(.06,X(1710628),0,1.13,.42,1.2,.8,1));for(let n of[-1,1])i.add(q(.12,t,n*.26,1.42,0)),i.add(q(.07,e,n*.26,1.42,.07)),i.add(q(.14,t,n*.45,.3,.25,.8,1,1.2));$e(i,1.22,.3,.11,.045),i.add(q(.3,e,0,.5,.35,.9,1,.5));for(let n of[-1,1])i.add(q(.12,t,n*.42,.55,.15,.8,1.6,.8))},mouse(i){let t=X(12105928),e=X(16756928);i.add(q(.32,t,0,.36,0,.9,.85,1.3)),i.add(q(.22,t,0,.45,.35,.9,.9,1.2)),i.add(q(.05,e,0,.44,.58));for(let s of[-1,1])i.add(q(.14,t,s*.2,.68,.22,1,1,.3)),i.add(q(.09,e,s*.2,.68,.25,1,1,.3));$e(i,.52,.5,.09,.035);let n=new Y(new Ae(.3,.025,6,16,Math.PI*1.2),e);n.position.set(0,.15,-.55),n.rotation.set(0,Math.PI/2,0),i.add(n),xn(i,t,[-.15,.15],[.15,-.2],.12,.05)},carrot(i){let t=Ee(.22,.95,X(16747034),0,.5,0);t.rotation.z=Math.PI,i.add(t);for(let e of[-.07,0,.07])i.add(Ee(.06,.3,X(3844170),e,1.15,0)).rotation.z=e*3},bone(i){let t=X(16774368);i.add(_e(.1,.1,.8,t,0,.3,0)).rotation.z=Math.PI/2;for(let e of[-.42,.42])for(let n of[-.1,.1])i.add(q(.14,t,e,.3,n))},grass(i){for(let t=0;t<9;t++){let e=t/9*Math.PI*2,n=Ee(.07,.8+t%3*.15,X(t%2?4900954:3844170),Math.cos(e)*.18,.4,Math.sin(e)*.18);n.rotation.z=Math.cos(e)*.3,n.rotation.x=Math.sin(e)*.3,i.add(n)}},honey(i){i.add(_e(.32,.36,.55,X(16758810,.2),0,.3,0)),i.add(_e(.34,.34,.08,X(9067050),0,.6,0)),i.add(q(.13,X(16762938,.2),.2,.55,.1,1,.6,1));let t=new Y(new Te(.4,.28),X(16774360));t.position.set(0,.32,.37),i.add(t)},cheese(i){let t=X(16765498,.5),e=_e(.5,.5,.4,t,0,.25,0);i.add(e),e.geometry=new re(.5,.5,.4,3),e.rotation.y=.5;for(let[n,s,r]of[[.1,.3,.3],[-.2,.2,.2],[.25,.45,0],[-.05,.46,-.1]])i.add(q(.07,X(15247386),n,s,r))},seeds(i){for(let t=0;t<18;t++)i.add(q(.06,X(t%3?13148240:15257720),Math.cos(t*2.4)*.28*(.4+t%5/6),.07+t%4*.05,Math.sin(t*2.4)*.28*(.4+t%5/6),1,.7,1.4))},pomegranate(i){let t=X(13113402,.35);i.add(q(.42,t,0,.45,0)),i.add(_e(.12,.16,.12,X(9048616),0,.88,0));for(let e=0;e<5;e++){let n=e/5*Math.PI*2;i.add(Ee(.05,.14,X(9048616),Math.cos(n)*.1,.98,Math.sin(n)*.1))}i.add(q(.08,new ie({color:16747168}),-.15,.62,.34,1,1.3,.5))},giraffe(i){let t=X(16764746),e=X(12089386);i.add(q(.38,t,0,.78,0,.8,.8,1.3));for(let[s,r,a]of[[.2,.85,.1],[-.2,.7,-.2],[.18,.7,-.3],[-.15,.9,.25]])i.add(q(.09,e,s,r,a,1,1,.5));let n=_e(.12,.17,.95,t,0,1.35,.4);n.rotation.x=.18,i.add(n),i.add(q(.2,t,0,1.88,.5,.9,.95,1.3)),i.add(q(.11,X(15782040),0,1.82,.7,1,.8,1));for(let s of[-1,1])i.add(_e(.02,.02,.2,e,s*.09,2.1,.45)),i.add(q(.04,e,s*.09,2.22,.45)),i.add(q(.07,t,s*.2,1.95,.4,1.3,.6,.5));$e(i,1.92,.64,.12,.035);for(let s of[-1,1])i.add(q(.09,e,s*.06,1.5,.45,1,1,.4));xn(i,t,[-.2,.2],[.32,-.38],.55,.07)},corn(i){i.add(q(.26,X(16765466,.4),0,.55,0,1,1.9,1));for(let t=0;t<7;t++)for(let e=0;e<8;e++){let n=e/8*Math.PI*2+t*.4;i.add(q(.055,X(16760330,.4),Math.cos(n)*.25,.15+t*.14,Math.sin(n)*.25))}for(let t of[.3,2.4,4.4]){let e=Ee(.18,.7,X(4892746),Math.cos(t)*.2,.35,Math.sin(t)*.2);e.rotation.z=Math.cos(t)*.35,e.rotation.x=Math.sin(t)*.35,e.scale.z=.35,i.add(e)}},rocket(i){let t=X(16053503,.3),e=X(15216682,.4);i.add(_e(.26,.3,1,t,0,.7,0)),i.add(Ee(.26,.45,e,0,1.43,0)),i.add(q(.12,X(4892927,.1),0,.85,.24,1,1,.5));for(let n=0;n<3;n++){let s=n/3*Math.PI*2,r=q(.2,e,Math.cos(s)*.3,.3,Math.sin(s)*.3,.4,1.4,1);r.rotation.y=-s,i.add(r)}i.add(Ee(.15,.4,new ie({color:16754714}),0,.02,0)).rotation.x=Math.PI},envelope(i){let t=document.createElement("canvas");t.width=256,t.height=168;let e=t.getContext("2d");e.fillStyle="#fff6e0",e.fillRect(0,0,256,168),e.strokeStyle="#d8c8a0",e.lineWidth=4,e.beginPath(),e.moveTo(0,0),e.lineTo(128,96),e.lineTo(256,0),e.stroke(),e.beginPath(),e.moveTo(0,168),e.lineTo(96,80),e.moveTo(256,168),e.lineTo(160,80),e.stroke(),e.fillStyle="#e8304a",e.beginPath(),e.arc(128,96,22,0,Math.PI*2),e.fill(),e.fillStyle="#ffd0d8",e.font="900 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u2665",128,97);let n=new wn(t);n.colorSpace=de;let s=new Y(new le(1.05,.7,.07),[X(15787208),X(15787208),X(15787208),X(15787208),new Jt({map:n,roughness:.7}),X(15260864)]);s.position.y=.5,s.rotation.x=-.12,s.castShadow=!0,i.add(s)},crow(i){let t=X(1842734,.25),e=X(2764880,.3),n=X(4868696,.4);i.add(q(.42,t,0,.62,0,.85,.8,1.35)),i.add(q(.3,t,0,1,.5)),i.add(q(.13,n,0,.93,.86,.9,.8,1.9));for(let r of[-1,1]){i.add(q(.075,X(16777215,.2),r*.2,1.07,.66)),i.add(q(.04,X(0,.1),r*.22,1.07,.71));let a=q(.3,e,r*.34,.62,-.05,.38,.85,1.5);a.rotation.z=-r*.25,i.add(a)}let s=Ee(.2,.75,e,0,.5,-.75,4);s.rotation.x=-1.7,s.scale.set(1,1,.3),i.add(s),xn(i,X(3816008),[-.1,.1],[.05],.3,.03)},lemon(i){let t=X(16771146,.4);i.add(q(.4,t,0,.4,0,1.25,.95,.95)),i.add(q(.1,t,.5,.4,0,1,.8,.8)),i.add(q(.1,t,-.5,.4,0,1,.8,.8));let e=q(.2,X(3844170),.1,.82,0,1.6,.25,.8);e.rotation.z=.4,i.add(e)},crescent(i){let t=new Jt({color:16767050,roughness:.3,emissive:16758810,emissiveIntensity:.35}),e=new Y(new Ae(.5,.17,12,28,Math.PI*1.5),t);e.position.y=.65,e.rotation.z=Math.PI*.75,e.castShadow=!0,i.add(e),i.add(q(.12,t,.55,.95,0))},dove(i){let t=X(16775924,.5);i.add(q(.38,t,0,.5,0,.9,.9,1.25)),i.add(q(.22,t,0,.92,.3)),i.add(Ee(.06,.2,X(16753178),0,.9,.55)).rotation.x=Math.PI/2,$e(i,.97,.45,.1,.035);for(let e of[-1,1]){let n=q(.28,t,e*.36,.78,-.05,.4,1.4,1.1);n.rotation.z=-e*.5,i.add(n)}i.add(Ee(.16,.5,t,0,.5,-.5)).rotation.x=-1.4},bed(i){i.add(new Y(new le(1.5,.25,.95),X(13141578)).translateY(.2)),i.add(new Y(new le(1.4,.2,.88),X(16774376)).translateY(.42)),i.add(new Y(new le(1,.16,.9),X(4892927)).translateX(.18).translateY(.55)),i.add(q(.28,X(16777215),-.5,.62,0,1.2,.5,1.4)),i.add(new Y(new le(.08,.7,.95),X(11037242)).translateX(-.75).translateY(.5))},soap(i){i.add(new Y(new le(.7,.28,.45),X(16751304,.3)).translateY(.2));for(let[t,e,n,s]of[[.2,.6,.1,.18],[-.15,.78,0,.13],[.35,.85,-.1,.1],[-.35,.55,.15,.1],[.05,1,.05,.09]])i.add(q(s,new Jt({color:13627135,transparent:!0,opacity:.6,roughness:.05}),t,e,n))},bowl(i){let t=new Y(new be(.5,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new Jt({color:4892927,roughness:.3,side:Me}));t.position.y=.55,i.add(t),i.add(_e(.5,.5,.03,X(16777215),0,.55,0)),i.add(_e(.46,.46,.03,X(16774360),0,.52,0));for(let n=0;n<7;n++)i.add(q(.09,X(15249482),Math.cos(n*2.1)*.25,.6,Math.sin(n*2.1)*.25,1,.7,1));let e=_e(.025,.025,.6,X(13158608),.35,.75,.1);e.rotation.z=-.6,i.add(e)},backpack(i){i.add(q(.45,X(16734794,.5),0,.5,0,1,1.1,.7)),i.add(q(.3,X(16758826,.5),0,.35,.28,1,.8,.5));for(let e of[-1,1])i.add(new Y(new Ae(.3,.04,8,14,Math.PI),X(3816010))).position.set(e*.35,.55,.25);let t=new Y(new Ae(.12,.03,8,14,Math.PI),X(3816010));t.position.set(0,1,0),i.add(t)},pot(i){i.add(_e(.45,.4,.55,X(13158612,.25),0,.35,0)),i.add(_e(.47,.47,.06,X(15263984,.25),0,.66,0)),i.add(q(.08,X(16734794),0,.74,0));for(let t of[-1,1])i.add(new Y(new Ae(.1,.03,6,10),X(3816010))).position.set(t*.5,.45,0);for(let[t,e]of[[.1,0],[-.12,.08],[.02,-.1]])i.add(q(.13,new Jt({color:16777215,transparent:!0,opacity:.55}),t,1+t,e))},plate(i){i.add(_e(.55,.45,.07,X(16777215,.25),0,.2,0)),i.add(new Y(new Ae(.5,.03,8,24),X(4892927)).rotateX(Math.PI/2).translateZ(-.25)),i.add(q(.2,X(14195274),.12,.35,.05,1.1,.8,1)),i.add(q(.14,X(4892746),-.2,.32,-.08)),i.add(q(.1,X(15216682),-.15,.3,.22));let t=_e(.015,.015,.6,X(13158608),.7,.28,0);t.rotation.x=Math.PI/2,i.add(t)},tub(i){let t=X(16777215,.25);i.add(new Y(new le(1.5,.12,.8),t).translateY(.15));for(let[e,n,s,r]of[[1.5,.1,0,.4],[1.5,.1,0,-.4],[.1,.8,.75,0],[.1,.8,-.75,0]])i.add(new Y(new le(e,.55,n),t)).position.set(s,.4,r);i.add(new Y(new le(1.35,.04,.7),X(9099519,.1)).translateY(.5));for(let[e,n,s,r]of[[-.3,.62,.1,.16],[.1,.7,-.1,.2],[.4,.62,.15,.13],[-.1,.8,.05,.12]])i.add(q(r,new Jt({color:16777215,transparent:!0,opacity:.85}),e,n,s));for(let e of[-.6,.6])i.add(_e(.06,.06,.12,X(13158608),e,.05,.3))},toothbrush(i){let t=new Y(new le(.13,1,.08),X(4892927));t.position.set(0,.55,0),t.rotation.z=.25,i.add(t);let e=new Y(new le(.2,.34,.1),X(4892927));e.position.set(-.22,1.06,0),e.rotation.z=.25,i.add(e);let n=new Y(new le(.17,.3,.1),X(16777215));n.position.set(-.24,1.07,.08),n.rotation.z=.25,i.add(n),i.add(q(.09,X(16777215),-.2,1.14,.12,1.5,.8,.8))}};function An(i){let t=Tu(i);if(t)return t;if(!ul[i])return vu(i);let e=new Tt,n=new Tt;return n.add=function(...r){return Tt.prototype.add.apply(this,r),r[0]},ul[i](n),iA.has(i)&&(n.rotation.y=-.85),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(n),e.userData.id=i,e.userData.inner=n,e}var iA=new Set(["crow","fox","camel","monkey","bear","mouse","dog","giraffe","sheep","hen","duck","cow","dove"]),r_=Object.keys(ul);var qt=(i,t=.8,e={})=>new Jt({color:i,roughness:t,...e}),We=(i,t,e,n,s,r,a)=>{let o=new Y(new le(i,t,e),n);return o.position.set(s,r,a),o.castShadow=!0,o.receiveShadow=!0,o},_n=(i,t,e,n,s,r,a,o=16)=>{let c=new Y(new re(i,t,e,o),n);return c.position.set(s,r,a),c.castShadow=!0,c},Tn=(i,t,e,n,s,r,a=16)=>{let o=new Y(new rn(i,t,a),e);return o.position.set(n,s,r),o.castShadow=!0,o},mi=(i,t,e,n,s)=>{let r=new Y(new be(i,18,14),t);return r.position.set(e,n,s),r.castShadow=!0,r};function xi(i,t,e,n=-.2){let s=new Y(new Te(80,44),qt(t,1));s.rotation.x=-Math.PI/2,s.position.y=n,s.receiveShadow=!0,i.add(s);let r=We(16,.4,3.4,qt(e,1),0,-.05,3.2);i.add(r)}var Ca={float:{ring:[16747066,16734858,4901119,16763194,8050794],disc:16774360},wood:{ring:[12088890,13141578,11037242,14194250,12088890],disc:15255696},cloud:{ring:[16777215,15791359,16777215,16773368,15794168],disc:15267071},rock:{ring:[9079456,8026768,10132144,9079456,8026768],disc:13158616},ice:{ring:[9099519,11069695,8046832,12120319,9099519],disc:15399679},stone:{ring:[10132122,11184810,9079434,11579568,10132122],disc:14737632}};function Ru(i=3){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,256);n.addColorStop(0,"#5ac8ff"),n.addColorStop(.5,"#2a9ae0"),n.addColorStop(1,"#4ab8f0"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,.4)",e.lineWidth=3;for(let r=0;r<18;r++)e.beginPath(),e.ellipse(r*83%256,r*57%256,26+r%3*8,6,0,0,Math.PI*2),e.stroke();let s=new wn(t);return s.colorSpace=de,s.wrapS=s.wrapT=Ri,s.repeat.set(i,i),s}var sA={meadow(i){mn(i);let t=Sn(i,7,{y:9,z:-18});Yn(i,[{t:"tree",x:-9.5,z:-5,s:5.2},{t:"tree",x:9.8,z:-4.5,s:4.6},{t:"tree",x:-13,z:-2,s:4.2},{t:"tree",x:13.5,z:-2.5,s:5},{t:"bush",x:-8,z:3.8,s:.9},{t:"bush",x:8.6,z:3.5,s:.8},{t:"rock",x:-7.4,z:4.8,s:.55},...Array.from({length:22},(s,r)=>({t:"flower",x:-12+r*1.12+Math.sin(r)*.4,z:6+r%4*.6+Math.cos(r*2)*.5}))],-.2),xi(i,9097328,8046688);let e=new Y(new re(6.4,6.6,.3,48),qt(13148272,1));e.scale.z=.62,e.position.y=-.12,i.add(e);let n=new Y(new re(6.1,6.1,.3,48),new Jt({map:Ru(),roughness:.2,metalness:.1}));n.scale.z=.58,n.position.y=-.08,i.add(n);for(let[s,r,a]of[[-5.1,-1.7,.5],[4.9,-1.9,.6],[-4.6,1.2,.45],[5.2,1,.5],[-1.6,-2.6,.5],[2.4,-2.5,.42]])i.add(_n(a,a,.04,qt(3844170),s,.1,r,20));for(let s=0;s<14;s++){let r=s/14*Math.PI*1.1+Math.PI*1.05;i.add(_n(.03,.05,1.5,qt(4889146),Math.cos(r)*6.5,.5,Math.sin(r)*3.9,6))}return{pad:"float",water:n.material,update:s=>{t.userData.drift(s)}}},farm(i){mn(i,{top:"#4aa8f0",horizon:"#ffeec8"});let t=Sn(i,6,{y:9,z:-18});xi(i,10145888,9093200);let e=qt(14168106,.7),n=qt(16777215,.6);i.add(We(5,3.2,3.6,e,-7.5,1.6,-6));let s=new Y(new re(.01,2.9,1.6,4,1),qt(6961706,.8));s.rotation.y=Math.PI/4,s.scale.set(1.25,1,.9),s.position.set(-7.5,4,-6),s.castShadow=!0,i.add(s),i.add(We(1.6,2.2,.1,n,-7.5,1.1,-4.15)),i.add(We(.12,2.2,.12,e,-7.5,1.1,-4.1)),i.add(_n(1,1,5,qt(13158608,.5),-3.2,2.5,-7.5)),i.add(mi(1,qt(12105920,.5),-3.2,5,-7.5));for(let o=-8;o<=8;o++)i.add(We(.2,1.2,.15,n,o*1.1,.6,-3.4));i.add(We(19,.14,.1,n,0,.5,-3.4),We(19,.14,.1,n,0,1,-3.4));for(let[o,c]of[[8,-4],[10,-6],[6,-7]]){let l=_n(.8,.8,1,qt(15253584,.9),o,.5,c,20);l.rotation.z=Math.PI/2,i.add(l)}let r=An("cow");r.scale.setScalar(1.8),r.position.set(7.5,-.2,-2.2),r.rotation.y=-.5,i.add(r);let a=An("sheep");return a.scale.setScalar(1.6),a.position.set(-3.5,-.2,-2.6),a.rotation.y=.4,i.add(a),Yn(i,[{t:"tree",x:11,z:-9,s:5},{t:"tree",x:-12,z:-9,s:4.6},...Array.from({length:16},(o,c)=>({t:"flower",x:-11+c*1.4,z:6+c%3*.6}))],-.2),{pad:"wood",update:(o,c)=>{t.userData.drift(o),r.position.y=-.2+Math.abs(Math.sin(c*1.2))*.03}}},beach(i){mn(i,{top:"#3aa0f0",horizon:"#bfeaff"});let t=Sn(i,6,{y:8,z:-18});xi(i,15784096,15255688);let e=new Y(new Te(80,18),new Jt({map:Ru(8),roughness:.15,metalness:.15}));e.rotation.x=-Math.PI/2,e.position.set(0,-.15,-11),i.add(e);for(let r of[-9,-5,9,12]){let a=new Tt,o=_n(.18,.28,4.2,qt(9067050),0,2.1,0,8);o.rotation.z=r>0?-.15:.15,a.add(o);for(let c=0;c<7;c++){let l=c/7*Math.PI*2,h=Tn(.35,2.4,qt(2795594),Math.cos(l)*1,4.3,Math.sin(l)*1,6);h.rotation.z=Math.cos(l)*1.2,h.rotation.x=-Math.sin(l)*1.2,a.add(h)}a.position.set(r,-.2,-5),i.add(a)}let n=new Tt;n.add(_n(.05,.05,2.2,qt(16777215),0,1.1,0,6)),n.add(Tn(1.5,.7,qt(16730698),0,2.4,0,12)),n.position.set(-7,-.2,2.2),i.add(n);let s=An("boat");s.scale.setScalar(2.2),s.position.set(4,-.1,-9),i.add(s);for(let r=0;r<10;r++)i.add(mi(.12,qt([16751288,16773344,16758896][r%3]),-10+r*2.2,-.05,5.5+r%3*.5));return{pad:"float",water:e.material,update:(r,a)=>{t.userData.drift(r),s.position.y=-.1+Math.sin(a)*.12,s.rotation.z=Math.sin(a*.8)*.05}}},space(i){mn(i,{top:"#07072a",horizon:"#2a1a5a"}),xi(i,6974086,5921398);let t=new Tt;for(let o=0;o<90;o++){let c=mi(.05+o%3*.03,new ie({color:16777184,toneMapped:!1}),(Math.random()-.5)*60,3+Math.random()*18,-20-Math.random()*10);c.userData.ph=Math.random()*6,t.add(c)}i.add(t);let e=(o,c,l,h,u,d)=>{let f=new Tt;if(f.add(mi(o,qt(c,.5),0,0,0)),d){let m=new Y(new Ae(o*1.6,o*.12,6,40),qt(15257760,.6));m.rotation.x=1.2,f.add(m)}return f.position.set(l,h,u),i.add(f),f},n=e(2.2,15245402,-9,8,-16,!0),s=e(1.4,5941480,8,11,-18),r=e(.9,15227530,3,6,-14),a=An("rocket");a.scale.setScalar(3.2),a.position.set(9,-.2,-3.5),i.add(a);for(let[o,c,l]of[[-8,-3,1.2],[-5,-5,.8],[6,4.4,.6]]){let h=_n(l,l*1.1,.25,qt(5592432,1),o,-.1,c,20);i.add(h)}return{pad:"rock",update:(o,c)=>{for(let l of t.children)l.scale.setScalar(.7+Math.sin(c*2+l.userData.ph)*.4);n.rotation.y=c*.1,s.position.y=11+Math.sin(c*.5)*.3,r.position.y=6+Math.sin(c*.7)*.2,a.position.y=-.2+Math.sin(c*1.5)*.04}}},rainbow(i){mn(i,{top:"#8ad0ff",horizon:"#ffe0f0"});let t=Sn(i,9,{y:7,z:-14});xi(i,12118160,11065472),[15216682,16747034,16765466,2795594,2788072,10111704].forEach((n,s)=>{let r=new Y(new Ae(7.5-s*.55,.28,10,48,Math.PI),qt(n,.5));r.position.set(0,-.2,-8),i.add(r)});for(let n=0;n<8;n++){let s=Tn(.4,.8,qt([16765466,16743096,8050943][n%3],.4),-11+n*3.2,1+n%3*.6,-5.5,5);s.rotation.z=Math.PI,i.add(s)}return Yn(i,Array.from({length:26},(n,s)=>({t:"flower",x:-12+s*.95,z:5.6+s%4*.5})),-.2),Yn(i,[{t:"tree",x:-10,z:-4,s:4.4},{t:"tree",x:10,z:-4.5,s:4.8,c:16747192}],-.2),{pad:"cloud",update:n=>t.userData.drift(n)}},city(i){mn(i,{top:"#6ab8f0",horizon:"#e0f0ff"});let t=Sn(i,5,{y:10,z:-18});xi(i,8026758,6974070);let e=[15231578,15775818,5943528,11037400,7002272,15764152];for(let r=0;r<9;r++){let a=4+r*7%5,o=-13+r*3.3;i.add(We(2.8,a,2.4,qt(e[r%6],.7),o,a/2-.2,-8));for(let c=0;c<Math.floor(a/1.2);c++)for(let l=-1;l<=1;l++)i.add(We(.5,.6,.05,qt(13625599,.2),o+l*.8,.7+c*1.2,-6.78))}i.add(We(40,.05,3,qt(3816006,.9),0,-.17,-3.8));for(let r=0;r<12;r++)i.add(We(1,.06,.2,qt(16769114),-12+r*2.2,-.13,-3.8));let n=An("bus");n.scale.setScalar(2.6),n.position.set(-4,-.1,-3.8),n.rotation.y=Math.PI/2,i.add(n);let s=An("car");return s.scale.setScalar(2.2),s.position.set(7,-.1,-3.8),s.rotation.y=-Math.PI/2,i.add(s),Yn(i,[{t:"tree",x:-11,z:-2,s:3.4},{t:"tree",x:11,z:-1.5,s:3.2}],-.2),{pad:"wood",update:(r,a)=>{t.userData.drift(r),n.position.x=-4+Math.sin(a*.3)*6,s.position.x=7-Math.sin(a*.3+1)*6}}},snow(i){mn(i,{top:"#8ac0e8",horizon:"#f0f8ff"});let t=Sn(i,5,{y:11,z:-18});xi(i,16054527,15266042);for(let[s,r]of[[-9,6],[-2,7.5],[7,6.5],[13,5]])i.add(Tn(r*.7,r,qt(8030896,.9),s,r/2-.2,-12,6)),i.add(Tn(r*.3,r*.38,qt(16777215,.6),s,r*.82-.2,-12,6));for(let[s,r,a]of[[-8,-4,3.6],[-6,-5,3],[8,-4.5,3.8],[10,-3.6,3],[-11,-2,3.2]]){let o=new Tt;for(let c=0;c<3;c++)o.add(Tn(1.1-c*.25,1.6,qt(2787914,.85),0,1.4+c*.9,0));o.add(_n(.18,.2,1,qt(6965802),0,.5,0)),o.scale.setScalar(a/3.2),o.position.set(s,-.2,r),i.add(o)}let e=new Tt;e.add(mi(.7,qt(16777215,.5),0,.7,0),mi(.5,qt(16777215,.5),0,1.6,0),mi(.35,qt(16777215,.5),0,2.25,0),Tn(.07,.4,qt(16742938),0,2.25,.35,8)),e.children[3].rotation.x=Math.PI/2,e.position.set(7,-.2,2.6),i.add(e);let n=new Tt;for(let s=0;s<80;s++){let r=mi(.06,new ie({color:16777215,toneMapped:!1}),(Math.random()-.5)*30,Math.random()*12,-6+Math.random()*12);r.userData.v=.5+Math.random(),n.add(r)}return i.add(n),{pad:"ice",update:(s,r)=>{t.userData.drift(s);for(let a of n.children)a.position.y-=a.userData.v*s,a.position.x+=Math.sin(r+a.userData.v*7)*s*.3,a.position.y<0&&(a.position.y=12)}}},castle(i){mn(i,{top:"#ff9a6a",horizon:"#ffe8a0"});let t=Sn(i,6,{y:9,z:-18});xi(i,8046688,6994e3);let e=qt(15260872,.8),n=qt(14168106,.6);i.add(We(7,4.2,3,e,0,2.1-.2,-9));for(let s of[-4.2,4.2])i.add(_n(1.2,1.2,5.6,e,s,2.6,-9,20)),i.add(Tn(1.5,2.2,n,s,6.5,-9,20));i.add(_n(1,1,6.8,e,0,3.2,-10,20)),i.add(Tn(1.3,2.4,n,0,7.8,-10,20)),i.add(We(1.6,2.4,.1,qt(6961706,.8),0,1,-7.45)),i.add(_n(.8,.8,.1,qt(6961706,.8),0,2.2,-7.45,16));for(let s of[-4.2,0,4.2]){let r=We(.05,.9,.05,qt(6965802),s,9.4,-9);i.add(r),i.add(We(.7,.4,.04,qt(16730746),s+.35,9.6,-9))}for(let s=0;s<6;s++)i.add(We(.3,.9,.3,e,-8+s*3.2,.3,-5.2));return Yn(i,[{t:"tree",x:-10,z:-5,s:4.6},{t:"tree",x:10.5,z:-5,s:4.4},...Array.from({length:18},(s,r)=>({t:"flower",x:-12+r*1.4,z:6+r%3*.6}))],-.2),{pad:"stone",update:s=>t.userData.drift(s)}}};function rA(i,t,e,n){let s=new Tt,r=new ie({color:2763322,side:Me,toneMapped:!1});for(let a=0;a<i;a++){let o=new Tt;for(let c of[-1,1]){let l=new Y(new Te(.7,.18),r);l.geometry.translate(c*.35,0,0),l.userData.sgn=c,o.add(l)}o.position.set(-n+a/i*n*2,t+Math.sin(a*2.1)*1.4,e-a%3),o.userData={v:1.1+a%3*.35,ph:a*1.3,y0:o.position.y},s.add(o)}return s.userData.update=(a,o)=>{for(let c of s.children){c.position.x+=c.userData.v*a,c.position.x>n+2&&(c.position.x=-n-2),c.position.y=c.userData.y0+Math.sin(o*1.3+c.userData.ph)*.35;for(let l of c.children)l.rotation.z=l.userData.sgn*Math.sin(o*9+c.userData.ph)*.7}},s}function aA(i,t,e,n){let s=new Tt,r=[16739e3,16762938,8050943,12090111];for(let a=0;a<i;a++){let o=new Tt,c=new ie({color:r[a%4],side:Me,toneMapped:!1});for(let l of[-1,1]){let h=new Y(new di(.16,10),c);h.position.x=l*.12,h.userData.sgn=l,o.add(h)}o.userData={cx:t+(e-t)*(a/Math.max(1,i-1)),ph:a*1.9,r:1+a%3*.5},o.position.z=n,s.add(o)}return s.userData.update=(a,o)=>{for(let c of s.children){let l=c.userData;c.position.x=l.cx+Math.sin(o*.5+l.ph)*l.r,c.position.y=1.4+Math.sin(o*.9+l.ph*2)*.5+Math.sin(o*2.3+l.ph)*.1;for(let h of c.children)h.rotation.y=h.userData.sgn*(.2+Math.abs(Math.sin(o*14+l.ph))*1.1)}},s}function oA(){let i=new Tt,t=new Y(new be(.22,12,10),qt(16747066,.4));t.scale.set(1.6,.8,.8);let e=Tn(.14,.3,qt(16747066,.4),-.34,0,0,3);e.rotation.z=Math.PI/2,t.add(e);let n=new Y(new Ae(.3,.02,6,24),new ie({color:16777215,transparent:!0,opacity:0,toneMapped:!1}));return n.rotation.x=Math.PI/2,i.add(t,n),i.userData={t:6*Math.random(),x:0},i.userData.update=s=>{let r=i.userData;r.t+=s;let a=7,o=r.t%a;if(o<1.2){o<s&&(r.x=(Math.random()-.5)*6);let c=o/1.2;t.visible=!0,t.position.set(r.x+c*1.6,Math.sin(c*Math.PI)*1.5-.1,-.6),t.rotation.z=Math.cos(c*Math.PI)*.9,n.position.set(r.x,.02,-.6),n.scale.setScalar(.5+c*2.2),n.material.opacity=Math.max(0,.7-c*.7)}else t.visible=!1,n.material.opacity=0},i}function cA(i,t,e){let n=[],s=[];t.traverse(a=>{a.userData&&a.userData.sway&&s.push(a)});let r=a=>{t.add(a),n.push(a.userData.update)};return["meadow","farm","beach","rainbow","castle","city","snow"].includes(i)&&r(rA(i==="snow"?3:5,6.5,-14,18)),["meadow","rainbow","farm","castle"].includes(i)&&r(aA(4,-7,7,5.2)),i==="meadow"&&r(oA()),(a,o)=>{for(let c of s){let l=c.userData.sway;c.rotation.z=Math.sin(o*l.sp+l.ph)*l.amp}for(let c of n)c(a,o);e&&(e.map.offset.x=o*.02%1,e.map.offset.y=o*.012%1)}}var Qs=["meadow","farm","beach","space","rainbow","city","snow","castle"],Pu={meadow:"\u0627\u0644\u0628\u0631\u0643\u0629",farm:"\u0627\u0644\u0645\u0632\u0631\u0639\u0629",beach:"\u0627\u0644\u0634\u0627\u0637\u0626",space:"\u0627\u0644\u0641\u0636\u0627\u0621",rainbow:"\u0645\u0644\u0639\u0628 \u0642\u0648\u0633 \u0642\u0632\u062D",city:"\u0627\u0644\u0645\u062F\u064A\u0646\u0629",snow:"\u062C\u0628\u0627\u0644 \u0627\u0644\u062B\u0644\u062C",castle:"\u0627\u0644\u0642\u0644\u0639\u0629"};function dl(i){let t=new Tt,e=sA[i](t);t.visible=!1;let n=cA(i,t,e.water);return{id:i,group:t,pad:e.pad,update:(s,r)=>{e.update(s,r),n(s,r)}}}var Rn=(i,t=.6)=>new Jt({color:i,roughness:t}),$n=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let c=new Y(new be(i,18,14),t);return c.position.set(e,n,s),c.scale.set(r,a,o),c.castShadow=!0,c};function fl(i){let t=i==="mama",e=new Tt,n=Rn(15777936),s=Rn(1710628,.3),r=Rn(t?15231648:3832552,.7),a=new Y(t?new re(.5,.85,1.6,20):new ui(.62,.9,8,16),r);a.position.y=t?1:1.3,a.castShadow=!0,e.add(a);let o=new Tt;if(o.position.y=2.25,o.add($n(.52,n)),t){let h=$n(.58,Rn(8018632,.8),0,.04,-.04,1,1.02,1.02);o.add(h),o.add($n(.44,n,0,-.04,.2,1,1,.8))}else o.add($n(.54,Rn(2759184,.9),0,.12,-.12,1,.8,1));for(let h of[-1,1])o.add($n(.06,s,h*.2,.05,.46)),o.add($n(.1,Rn(16751258),h*.33,-.12,.4,1,.7,.5));let c=new Y(new Ae(.17,.025,6,14,Math.PI),Rn(12073530));c.position.set(0,-.2,.5),c.rotation.z=Math.PI,o.add(c),t||(o.add($n(.14,Rn(2759184),-.1,-.1,.5,1.3,.5,.6)),o.add($n(.14,Rn(2759184),.1,-.1,.5,1.3,.5,.6))),e.add(o);let l=[];for(let h of[-1,1]){let u=new Tt;u.position.set(h*(t?.62:.72),t?1.7:1.9,0);let d=new Y(new ui(.15,.7,6,10),r);d.position.y=-.45,d.castShadow=!0,u.add(d,$n(.17,n,0,-1,0)),u.rotation.z=h*.25,e.add(u),l.push(u)}if(!t)for(let h of[-1,1]){let u=new Y(new ui(.2,.5,6,10),Rn(2767450));u.position.set(h*.28,.35,0),u.castShadow=!0,e.add(u)}return e.userData={head:o,arms:l,act:null,t:0},e.act=h=>{e.userData.act=h,e.userData.t=0},e.update=(h,u)=>{let d=e.userData;d.t+=h,o.rotation.z=Math.sin(u*1.1)*.03;let f=0;d.act==="talk"&&d.t<2.4?(o.rotation.x=Math.sin(d.t*7)*.06,f=.9+Math.sin(d.t*6)*.25):o.rotation.x*=.9,l[1].rotation.z+=(.25+f-l[1].rotation.z)*Math.min(1,h*10),e.position.y=Math.sin(u*1.6)*.02},e}function Pn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ia=[{id:"circle",ar:"\u062F\u0627\u064A\u0631\u0629",the:"\u0627\u0644\u062F\u0627\u064A\u0631\u0629",fem:!0},{id:"square",ar:"\u0645\u0631\u0628\u0639",the:"\u0627\u0644\u0645\u0631\u0628\u0639",fem:!1},{id:"triangle",ar:"\u0645\u062B\u0644\u062B",the:"\u0627\u0644\u0645\u062B\u0644\u062B",fem:!1},{id:"star",ar:"\u0646\u062C\u0645\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",fem:!0},{id:"heart",ar:"\u0642\u0644\u0628",the:"\u0627\u0644\u0642\u0644\u0628",fem:!1}],Ma=[{id:"red",hex:15216682,m:"\u0623\u062D\u0645\u0631",f:"\u062D\u0645\u0631\u0627"},{id:"blue",hex:2788072,m:"\u0623\u0632\u0631\u0642",f:"\u0632\u0631\u0642\u0627"},{id:"yellow",hex:16762906,m:"\u0623\u0635\u0641\u0631",f:"\u0635\u0641\u0631\u0627"},{id:"green",hex:2795594,m:"\u0623\u062E\u0636\u0631",f:"\u062E\u0636\u0631\u0627"},{id:"orange",hex:16747034,m:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A",f:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A"}],lA=5,hA=i=>i<=4?3:i===5?4:5,Du=i=>i>=5,Lu=i=>Ia.find(t=>t.id===i),ba=i=>Ma.find(t=>t.id===i),Uu=(i,t)=>i.fem?t.f:t.m,uA=(i,t)=>{let e=Uu(i,t);return e==="\u0628\u0631\u062A\u0642\u0627\u0644\u064A"?"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A":`\u0627\u0644${e}`};function Nu(i,t){return t?`\u0641\u064A\u0646 ${i.the} ${uA(i,t)}\u061F`:`\u0641\u064A\u0646 ${i.the}\u061F`}function Fu(i,t){return t?`\u062F\u064A ${i.ar} ${Uu(i,t)}`:`\u062F\u064A ${i.ar}`}function Ou(i,t){let e=Pn(t),n=[];for(let s=0;s<lA;s++){let r,a,o=0;do r=Ia[Math.floor(e()*(i<=4?3:5))].id,a=Ma[Math.floor(e()*5)].id,o++;while(o<30&&n.length&&n[n.length-1].shape===r);n.push({shape:r,color:a})}return n}function ku(i,t,e){let n=Pn(e),s=hA(i),r=d=>d.sort(()=>n()-.5),a=d=>`${d.shape}-${d.color}`,o=[{shape:t.shape,color:t.color}],c=new Set([a(o[0])]),l=(d,f)=>c.has(a({shape:d,color:f}))?!1:(c.add(a({shape:d,color:f})),o.push({shape:d,color:f}),!0),h=r(Ia.map(d=>d.id).filter(d=>d!==t.shape)),u=r(Ma.map(d=>d.id).filter(d=>d!==t.color));if(i<=5)for(let d=0;d<s-1;d++)l(h[d],u[d]);else{l(h[0],t.color),l(t.shape,u[0]);for(let d=1;o.length<s&&d<30;d++)l(h[d%h.length],u[(d+1)%u.length]);for(let d=0;o.length<s&&d<80;d++){let f=Ia[Math.floor(n()*5)].id,m=Ma[Math.floor(n()*5)].id;f===t.shape||m===t.color||l(f,m)}}return r(o).map((d,f)=>({id:`t${f}`,...d}))}var Bu=[["\u0648\u0627\u062D\u062F","one"],["\u0627\u062A\u0646\u064A\u0646","two"],["\u062A\u0644\u0627\u062A\u0629","three"],["\u0623\u0631\u0628\u0639\u0629","four"],["\u062E\u0645\u0633\u0629","five"],["\u0633\u062A\u0629","six"],["\u0633\u0628\u0639\u0629","seven"],["\u062A\u0645\u0627\u0646\u064A\u0629","eight"],["\u062A\u0633\u0639\u0629","nine"],["\u0639\u0634\u0631\u0629","ten"],["\u062D\u062F\u0627\u0634\u0631","eleven"],["\u0627\u062A\u0646\u0627\u0634\u0631","twelve"],["\u062A\u0644\u0627\u062A\u0627\u0634\u0631","thirteen"],["\u0623\u0631\u0628\u0639\u062A\u0627\u0634\u0631","fourteen"],["\u062E\u0645\u0633\u062A\u0627\u0634\u0631","fifteen"],["\u0633\u062A\u0627\u0634\u0631","sixteen"],["\u0633\u0628\u0639\u062A\u0627\u0634\u0631","seventeen"],["\u062A\u0645\u0646\u062A\u0627\u0634\u0631","eighteen"],["\u062A\u0633\u0639\u062A\u0627\u0634\u0631","nineteen"],["\u0639\u0634\u0631\u064A\u0646","twenty"],["\u0648\u0627\u062D\u062F \u0648\u0639\u0634\u0631\u064A\u0646","twenty-one"],["\u0627\u062A\u0646\u064A\u0646 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-two"],["\u062A\u0644\u0627\u062A\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-three"],["\u0623\u0631\u0628\u0639\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-four"],["\u062E\u0645\u0633\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-five"],["\u0633\u062A\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-six"],["\u0633\u0628\u0639\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-seven"],["\u062A\u0645\u0627\u0646\u064A\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-eight"],["\u062A\u0633\u0639\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-nine"],["\u062A\u0644\u0627\u062A\u064A\u0646","thirty"]];var wa=[{id:"alef",thing:"bunny",ch:"\u0623",the:"\u0627\u0644\u0623\u0644\u0641",word:"\u0623\u0631\u0646\u0628",pic:"\u{1F430}"},{id:"baa",thing:"duck",ch:"\u0628",the:"\u0627\u0644\u0628\u0627\u0621",word:"\u0628\u0637\u0629",pic:"\u{1F986}"},{id:"meem",thing:"banana",ch:"\u0645",the:"\u0627\u0644\u0645\u064A\u0645",word:"\u0645\u0648\u0632\u0629",pic:"\u{1F34C}"},{id:"kaaf",thing:"ball",ch:"\u0643",the:"\u0627\u0644\u0643\u0627\u0641",word:"\u0643\u0648\u0631\u0629",pic:"\u26BD"},{id:"taa",thing:"apple",ch:"\u062A",the:"\u0627\u0644\u062A\u0627\u0621",word:"\u062A\u0641\u0627\u062D\u0629",pic:"\u{1F34E}"},{id:"seen",thing:"fish",ch:"\u0633",the:"\u0627\u0644\u0633\u064A\u0646",word:"\u0633\u0645\u0643\u0629",pic:"\u{1F41F}"},{id:"faa",thing:"butterfly",ch:"\u0641",the:"\u0627\u0644\u0641\u0627\u0621",word:"\u0641\u0631\u0627\u0634\u0629",pic:"\u{1F98B}"},{id:"qaaf",thing:"cat",ch:"\u0642",the:"\u0627\u0644\u0642\u0627\u0641",word:"\u0642\u0637\u0629",pic:"\u{1F431}"},{id:"thaa",thing:"fox",ch:"\u062B",the:"\u0627\u0644\u062B\u0627\u0621",word:"\u062B\u0639\u0644\u0628",pic:"\u{1F98A}"},{id:"jeem",thing:"camel",ch:"\u062C",the:"\u0627\u0644\u062C\u064A\u0645",word:"\u062C\u0645\u0644",pic:"\u{1F42A}"},{id:"haa",thing:"horse",ch:"\u062D",the:"\u0627\u0644\u062D\u0627\u0621",word:"\u062D\u0635\u0627\u0646",pic:"\u{1F434}"},{id:"khaa",thing:"sheep",ch:"\u062E",the:"\u0627\u0644\u062E\u0627\u0621",word:"\u062E\u0631\u0648\u0641",pic:"\u{1F411}"},{id:"dal",thing:"hen",ch:"\u062F",the:"\u0627\u0644\u062F\u0627\u0644",word:"\u062F\u062C\u0627\u062C\u0629",pic:"\u{1F414}"},{id:"sheen",thing:"sun",ch:"\u0634",the:"\u0627\u0644\u0634\u064A\u0646",word:"\u0634\u0645\u0633",pic:"\u2600\uFE0F"},{id:"noon",thing:"bee",ch:"\u0646",the:"\u0627\u0644\u0646\u0648\u0646",word:"\u0646\u062D\u0644\u0629",pic:"\u{1F41D}"},{id:"waaw",thing:"rose",ch:"\u0648",the:"\u0627\u0644\u0648\u0627\u0648",word:"\u0648\u0631\u062F\u0629",pic:"\u{1F339}"},{id:"raa",thing:"pomegranate",ch:"\u0631",the:"\u0627\u0644\u0631\u0627\u0621",word:"\u0631\u0645\u0627\u0646\u0629",pic:"\u{1F34E}"},{id:"zayn",thing:"giraffe",ch:"\u0632",the:"\u0627\u0644\u0632\u0627\u064A",word:"\u0632\u0631\u0627\u0641\u0629",pic:"\u{1F992}"},{id:"dhal",thing:"corn",ch:"\u0630",the:"\u0627\u0644\u0630\u0627\u0644",word:"\u0630\u0631\u0629",pic:"\u{1F33D}"},{id:"sad",thing:"rocket",ch:"\u0635",the:"\u0627\u0644\u0635\u0627\u062F",word:"\u0635\u0627\u0631\u0648\u062E",pic:"\u{1F680}"},{id:"dad",thing:"frog",ch:"\u0636",the:"\u0627\u0644\u0636\u0627\u062F",word:"\u0636\u0641\u062F\u0639",pic:"\u{1F438}"},{id:"tah",thing:"plane",ch:"\u0637",the:"\u0627\u0644\u0637\u0627\u0621",word:"\u0637\u064A\u0627\u0631\u0629",pic:"\u2708\uFE0F"},{id:"zah",thing:"envelope",ch:"\u0638",the:"\u0627\u0644\u0638\u0627\u0621",word:"\u0638\u0631\u0641",pic:"\u2709\uFE0F"},{id:"ayn",thing:"grapes",ch:"\u0639",the:"\u0627\u0644\u0639\u064A\u0646",word:"\u0639\u0646\u0628",pic:"\u{1F347}"},{id:"ghayn",thing:"crow",ch:"\u063A",the:"\u0627\u0644\u063A\u064A\u0646",word:"\u063A\u0631\u0627\u0628",pic:"\u{1F426}"},{id:"laam",thing:"lemon",ch:"\u0644",the:"\u0627\u0644\u0644\u0627\u0645",word:"\u0644\u064A\u0645\u0648\u0646\u0629",pic:"\u{1F34B}"},{id:"haa2",thing:"crescent",ch:"\u0647",the:"\u0627\u0644\u0647\u0627\u0621",word:"\u0647\u0644\u0627\u0644",pic:"\u{1F319}"},{id:"yaa",thing:"dove",ch:"\u064A",the:"\u0627\u0644\u064A\u0627\u0621",word:"\u064A\u0645\u0627\u0645\u0629",pic:"\u{1F54A}\uFE0F"}],Oi=5,zu=i=>wa.slice(0,i<=4?4:i===5?8:wa.length),Hu=i=>i<=4?3:4,Zn=i=>wa.find(t=>t.id===i),Vu=i=>`\u0641\u064A\u0646 \u062D\u0631\u0641 ${i.the}\u061F`;var Sa=[{id:"rabbit",thing:"bunny",the:"\u0627\u0644\u0623\u0631\u0646\u0628",fem:!1,food:"carrot"},{id:"cat",thing:"cat",the:"\u0627\u0644\u0642\u0637\u0629",fem:!0,food:"fish"},{id:"dog",thing:"dog",the:"\u0627\u0644\u0643\u0644\u0628",fem:!1,food:"bone"},{id:"monkey",thing:"monkey",the:"\u0627\u0644\u0642\u0631\u062F",fem:!1,food:"banana"},{id:"cow",thing:"cow",the:"\u0627\u0644\u0628\u0642\u0631\u0629",fem:!0,food:"grass"},{id:"bear",thing:"bear",the:"\u0627\u0644\u062F\u0628",fem:!1,food:"honey"},{id:"mouse",thing:"mouse",the:"\u0627\u0644\u0641\u0627\u0631",fem:!1,food:"cheese"},{id:"chick",thing:"chick",the:"\u0627\u0644\u0643\u062A\u0643\u0648\u062A",fem:!1,food:"seeds"}],Gu={carrot:{the:"\u0627\u0644\u062C\u0632\u0631"},fish:{the:"\u0627\u0644\u0633\u0645\u0643"},bone:{the:"\u0627\u0644\u0639\u0636\u0645\u0629"},banana:{the:"\u0627\u0644\u0645\u0648\u0632"},grass:{the:"\u0627\u0644\u062D\u0634\u064A\u0634"},honey:{the:"\u0627\u0644\u0639\u0633\u0644"},cheese:{the:"\u0627\u0644\u062C\u0628\u0646\u0629"},seeds:{the:"\u0627\u0644\u062D\u064E\u0628"}};var pl=i=>Sa.slice(0,i<=4?3:i===5?5:8),dA=i=>i<=5?3:4,gl=i=>Sa.find(t=>t.id===i),Wu=i=>`${i.the} ${i.fem?"\u062C\u0639\u0627\u0646\u0629":"\u062C\u0639\u0627\u0646"}! ${i.fem?"\u0647\u062A\u0627\u0643\u0644":"\u0647\u064A\u0627\u0643\u0644"} \u0625\u064A\u0647\u061F`,Xu=i=>`${i.the} ${i.fem?"\u0628\u062A\u062D\u0628":"\u0628\u064A\u062D\u0628"} ${Gu[i.food].the}`;function qu(i,t,e){let n=Pn(e),s=gl(t).food,r=pl(i).map(o=>o.food).filter(o=>o!==s);for(let o of Sa)!r.includes(o.food)&&o.food!==s&&r.push(o.food);let a=[...new Set(r)].sort(()=>n()-.5).slice(0,dA(i)-1);return[s,...a].sort(()=>n()-.5)}var ml=i=>i<=4?3:i===5?6:20;var Yu="\u0643\u0627\u0645 \u062A\u0641\u0627\u062D\u0629\u061F";function $u(i,t,e){let n=Pn(e),s=ml(i),r=[];for(let a=-2;a<=2;a++)a&&t+a>=1&&t+a<=Math.max(s,t+1)&&r.push(t+a);return r.sort(()=>n()-.5),[t,r[0],r[1]].sort((a,o)=>a-o)}var js=[{id:"letters",mode:"letter",ar:"\u0627\u0635\u0637\u0627\u062F \u0627\u0644\u062D\u0631\u0641",emoji:"\u{1F524}",skill:"letters_ar"},{id:"words",mode:"word",ar:"\u0641\u064A\u0646 \u0627\u0644\u0635\u0648\u0631\u0629\u061F",emoji:"\u{1F5BC}\uFE0F",skill:"vocab"},{id:"first",mode:"first",ar:"\u0623\u0648\u0644 \u062D\u0631\u0641",emoji:"\u{1F170}\uFE0F",skill:"letters_ar"},{id:"numbers",mode:"number",ar:"\u0627\u0644\u0623\u0631\u0642\u0627\u0645",emoji:"\u{1F522}",skill:"counting"},{id:"counting",mode:"count",ar:"\u0639\u062F\u0651 \u0645\u0639\u0627\u064A\u0627",emoji:"\u{1F34E}",skill:"counting"},{id:"order",mode:"next",ar:"\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u062D\u0631\u0648\u0641",emoji:"\u{1F520}",skill:"letters_ar"},{id:"shapes",mode:"shape",ar:"\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646",emoji:"\u{1F537}",skill:"shapes"},{id:"animals",mode:"animal",ar:"\u0623\u0637\u0639\u0645 \u0627\u0644\u062D\u064A\u0648\u0627\u0646",emoji:"\u{1F430}",skill:"nature"},{id:"colors",mode:"pick",table:"colors",ar:"\u0627\u0644\u0623\u0644\u0648\u0627\u0646",emoji:"\u{1F3A8}",skill:"colors"},{id:"fruits",mode:"pick",table:"fruits",ar:"\u0641\u0648\u0627\u0643\u0647 \u0648\u062E\u0636\u0627\u0631",emoji:"\u{1F353}",skill:"vocab"},{id:"vehicles",mode:"pick",table:"vehicles",ar:"\u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A",emoji:"\u{1F68C}",skill:"vocab"},{id:"habits",mode:"habit",ar:"\u0643\u0644\u0627\u0645 \u0645\u0627\u0645\u0627 \u0648\u0628\u0627\u0628\u0627",emoji:"\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",skill:"listening"}],fA={colors:{prompt:i=>`\u0641\u064A\u0646 \u0627\u0644\u0644\u0648\u0646 ${i.the}\u061F`,items:[{id:"red",the:"\u0627\u0644\u0623\u062D\u0645\u0631",hex:15216682},{id:"blue",the:"\u0627\u0644\u0623\u0632\u0631\u0642",hex:2788072},{id:"yellow",the:"\u0627\u0644\u0623\u0635\u0641\u0631",hex:16765466},{id:"green",the:"\u0627\u0644\u0623\u062E\u0636\u0631",hex:2795594},{id:"orange",the:"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A",hex:16747034},{id:"purple",the:"\u0627\u0644\u0628\u0646\u0641\u0633\u062C\u064A",hex:10111704},{id:"pink",the:"\u0627\u0644\u0648\u0631\u062F\u064A",hex:16743096},{id:"black",the:"\u0627\u0644\u0623\u0633\u0648\u062F",hex:2368556},{id:"white",the:"\u0627\u0644\u0623\u0628\u064A\u0636",hex:16448250},{id:"brown",the:"\u0627\u0644\u0628\u0646\u064A",hex:9067058},{id:"gray",the:"\u0627\u0644\u0631\u0645\u0627\u062F\u064A",hex:10132136}]},fruits:{prompt:i=>`\u0641\u064A\u0646 ${i.the}\u061F`,items:[{id:"apple",the:"\u0627\u0644\u062A\u0641\u0627\u062D\u0629",thing:"apple"},{id:"banana",the:"\u0627\u0644\u0645\u0648\u0632\u0629",thing:"banana"},{id:"orange",the:"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u0629",thing:"orange"},{id:"strawberry",the:"\u0627\u0644\u0641\u0631\u0627\u0648\u0644\u0629",thing:"strawberry"},{id:"pear",the:"\u0627\u0644\u0643\u0645\u062B\u0631\u0649",thing:"pear"},{id:"grapes",the:"\u0627\u0644\u0639\u0646\u0628",thing:"grapes"},{id:"watermelon",the:"\u0627\u0644\u0628\u0637\u064A\u062E",thing:"watermelon"},{id:"carrot",the:"\u0627\u0644\u062C\u0632\u0631\u0629",thing:"carrot"},{id:"corn",the:"\u0627\u0644\u0630\u0631\u0629",thing:"corn"},{id:"pineapple",the:"\u0627\u0644\u0623\u0646\u0627\u0646\u0627\u0633",thing:"pineapple"},{id:"mango",the:"\u0627\u0644\u0645\u0627\u0646\u062C\u0627",thing:"mango"}]},vehicles:{prompt:i=>`\u0641\u064A\u0646 ${i.the}\u061F`,items:[{id:"car",the:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",thing:"car"},{id:"bus",the:"\u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633",thing:"bus"},{id:"boat",the:"\u0627\u0644\u0645\u0631\u0643\u0628",thing:"boat"},{id:"plane",the:"\u0627\u0644\u0637\u064A\u0627\u0631\u0629",thing:"plane"},{id:"train",the:"\u0627\u0644\u0642\u0637\u0631",thing:"train"},{id:"rocket",the:"\u0627\u0644\u0635\u0627\u0631\u0648\u062E",thing:"rocket"},{id:"firetruck",the:"\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u0637\u0627\u0641\u064A",thing:"firetruck"},{id:"ambulance",the:"\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0625\u0633\u0639\u0627\u0641",thing:"ambulance"},{id:"police",the:"\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0634\u0631\u0637\u0629",thing:"police"},{id:"helicopter",the:"\u0627\u0644\u0647\u0644\u064A\u0643\u0648\u0628\u062A\u0631",thing:"helicopter"}]}},pA=i=>js.find(t=>t.id===i),Ta=i=>i<=4?js.filter(t=>t.id!=="first"&&t.id!=="order"):js,gA=["alef","baa","taa","thaa","jeem","haa","khaa","dal","dhal","raa","zayn","seen","sheen","sad","dad","tah","zah","ayn","ghayn","faa","qaaf","kaaf","laam","meem","noon","haa2","waaw","yaa"],mA={alef:"\u0627\u0644\u0623\u0631\u0646\u0628",baa:"\u0627\u0644\u0628\u0637\u0629",meem:"\u0627\u0644\u0645\u0648\u0632\u0629",kaaf:"\u0627\u0644\u0643\u0648\u0631\u0629",taa:"\u0627\u0644\u062A\u0641\u0627\u062D\u0629",seen:"\u0627\u0644\u0633\u0645\u0643\u0629",faa:"\u0627\u0644\u0641\u0631\u0627\u0634\u0629",qaaf:"\u0627\u0644\u0642\u0637\u0629",thaa:"\u0627\u0644\u062B\u0639\u0644\u0628",jeem:"\u0627\u0644\u062C\u0645\u0644",haa:"\u0627\u0644\u062D\u0635\u0627\u0646",khaa:"\u0627\u0644\u062E\u0631\u0648\u0641",dal:"\u0627\u0644\u062F\u062C\u0627\u062C\u0629",sheen:"\u0627\u0644\u0634\u0645\u0633",noon:"\u0627\u0644\u0646\u062D\u0644\u0629",waaw:"\u0627\u0644\u0648\u0631\u062F\u0629",raa:"\u0627\u0644\u0631\u0645\u0627\u0646\u0629",zayn:"\u0627\u0644\u0632\u0631\u0627\u0641\u0629",dhal:"\u0627\u0644\u0630\u0631\u0629",sad:"\u0627\u0644\u0635\u0627\u0631\u0648\u062E",dad:"\u0627\u0644\u0636\u0641\u062F\u0639",tah:"\u0627\u0644\u0637\u064A\u0627\u0631\u0629",zah:"\u0627\u0644\u0638\u0631\u0641",ayn:"\u0627\u0644\u0639\u0646\u0628",ghayn:"\u0627\u0644\u063A\u0631\u0627\u0628",laam:"\u0627\u0644\u0644\u064A\u0645\u0648\u0646\u0629",haa2:"\u0627\u0644\u0647\u0644\u0627\u0644",yaa:"\u0627\u0644\u064A\u0645\u0627\u0645\u0629"},xA=i=>`\u0641\u064A\u0646 ${mA[i.id]}\u061F`,AA=i=>`\u0625\u064A\u0647 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0643\u0644\u0645\u0629 ${i.word}\u061F`,_A=["","\u0648\u0627\u062D\u062F","\u0627\u062A\u0646\u064A\u0646","\u062A\u0644\u0627\u062A\u0629","\u0623\u0631\u0628\u0639\u0629","\u062E\u0645\u0633\u0629","\u0633\u062A\u0629","\u0633\u0628\u0639\u0629","\u062A\u0645\u0627\u0646\u064A\u0629","\u062A\u0633\u0639\u0629","\u0639\u0634\u0631\u0629","\u062D\u062F\u0627\u0634\u0631","\u0627\u062A\u0646\u0627\u0634\u0631","\u062A\u0644\u0627\u062A\u0627\u0634\u0631","\u0623\u0631\u0628\u0639\u062A\u0627\u0634\u0631","\u062E\u0645\u0633\u062A\u0627\u0634\u0631","\u0633\u062A\u0627\u0634\u0631","\u0633\u0628\u0639\u062A\u0627\u0634\u0631","\u062A\u0645\u0646\u062A\u0627\u0634\u0631","\u062A\u0633\u0639\u062A\u0627\u0634\u0631","\u0639\u0634\u0631\u064A\u0646"],yA=i=>`\u0641\u064A\u0646 \u0631\u0642\u0645 ${_A[i]}\u061F`,vA=i=>`\u0625\u064A\u0647 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u0644\u064A \u0628\u0639\u062F ${i.the}\u061F`,CA=i=>i<=4?5:i===5?10:20,IA=i=>gA.slice(0,i<=5?8:28),Ju=[{who:"mama",text:"\u064A\u0644\u0627 \u0646\u063A\u0633\u0644 \u0625\u064A\u062F\u064A\u0646\u0627",answer:"soap"},{who:"mama",text:"\u064A\u0644\u0627 \u0646\u0641\u0637\u0631",answer:"bowl"},{who:"mama",text:"\u064A\u0644\u0627 \u0646\u063A\u0633\u0644 \u0633\u0646\u0627\u0646\u0646\u0627",answer:"toothbrush"},{who:"mama",text:"\u0648\u0642\u062A \u0627\u0644\u063A\u062F\u0627",answer:"pot"},{who:"baba",text:"\u064A\u0644\u0627 \u0646\u0631\u0648\u062D \u0627\u0644\u062D\u0636\u0627\u0646\u0629",answer:"backpack"},{who:"baba",text:"\u0648\u0642\u062A \u0627\u0644\u0646\u0648\u0645 \u064A\u0627 \u0628\u0637\u0644",answer:"bed"},{who:"baba",text:"\u064A\u0644\u0627 \u0646\u0633\u062A\u062D\u0645\u0651\u0649",answer:"tub"},{who:"baba",text:"\u064A\u0644\u0627 \u0646\u062A\u0639\u0634\u0649",answer:"plate"},{who:"baba",text:"\u0635\u0627\u062D\u0628\u0643 \u0639\u0627\u064A\u0632 \u064A\u0644\u0639\u0628\u060C \u0646\u0634\u0627\u0631\u0643\u0647 \u0625\u064A\u0647\u061F",answer:"teddy"},{who:"mama",text:"\u0646\u0642\u0648\u0644 \u0644\u0635\u0627\u062D\u0628\u0646\u0627 \u0643\u0644\u0645\u0629 \u062D\u0644\u0648\u0629 \u0648\u0646\u062D\u0628\u0647",answer:"heart"}],MA=[...new Set(Ju.map(i=>i.answer))],Zu=["\u0623\u062D\u0633\u0646\u062A!","\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","\u0645\u0645\u062A\u0627\u0632!","\u062C\u0645\u064A\u0644 \u0623\u0648\u064A!","\u0639\u0638\u064A\u0645!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643!","\u0623\u0646\u062A \u0628\u0637\u0644!","\u0643\u0645\u0651\u0644 \u0643\u062F\u0647!","\u0625\u062C\u0627\u0628\u0629 \u0635\u062D\u064A\u062D\u0629!"],bA=["\u0623\u062D\u0633\u0646\u062A\u064A!","\u062D\u0644\u0648\u0629 \u0623\u0648\u064A!","\u0645\u0645\u062A\u0627\u0632\u0629!","\u062C\u0645\u064A\u0644\u0629 \u0623\u0648\u064A!","\u0639\u0638\u064A\u0645\u0629!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u064A!","\u0625\u0646\u062A\u064A \u0628\u0637\u0644\u0629!","\u0643\u0645\u0651\u0644\u064A \u0643\u062F\u0647!","\u0625\u062C\u0627\u0628\u0629 \u0635\u062D\u064A\u062D\u0629!"],Ku=(i,t)=>(i?bA:Zu)[t%Zu.length],_s=(i,t,e)=>[...t].sort(()=>i()-.5).slice(0,e),wA={carrot:"carrot",fish:"fish",bone:"bone",banana:"banana",grass:"grass",honey:"honey",cheese:"cheese",seeds:"seeds"},Ea=class{constructor(t,e,n=Date.now()){this.level=pA(t),this.age=e,this.seed=n,this.round=0,this.misses=0,this.rounds=this._make()}_make(){let t=Pn(this.seed),e=[],n=this.level.mode,s=zu(this.age).map(c=>c.id),r=Hu(this.age),a=c=>{let l=[];return()=>(l.length||(l=[...c].sort(()=>t()-.5)),l.shift())},o=c=>`${c.the} \u0632\u064A ${c.word}`;if(n==="number"||n==="count"){let c=n==="count"?ml(this.age):CA(this.age),l=Array.from({length:c},(u,d)=>d+1),h=a(l);for(let u=0;u<Oi;u++){let d=h();u&&e[u-1].n===d&&(d=h());let f=n==="count"?$u(this.age,d,this.seed+u*31):[d,..._s(t,l.filter(m=>m!==d),r-1)].sort(()=>t()-.5);e.push({prompt:n==="count"?Yu:yA(d),answer:`n${d}`,n:d,show:n==="count"||this.age<=4?{type:"apples",n:d}:null,countAloud:d,options:f.map(m=>({id:`n${m}`,kind:"number",n:m}))})}}else if(n==="next"){let c=IA(this.age),l=a(Array.from({length:c.length-1},(h,u)=>u));for(let h=0;h<Oi;h++){let u=l(),d=Zn(c[u]),f=c[u+1],m=_s(t,c.filter(A=>A!==f&&A!==c[u]),r-1);e.push({prompt:vA(d),answer:f,from:c[u],show:{type:"letter",ch:d.ch},reward:o(Zn(f)),options:[f,...m].sort(()=>t()-.5).map(A=>({id:A,kind:"letter",ch:Zn(A).ch}))})}}else if(n==="shape")Ou(this.age,this.seed).forEach((l,h)=>{let u=ku(this.age,l,this.seed+h*53),d=Du(this.age),f=u.find(g=>g.shape===l.shape&&(!d||g.color===l.color)),m=Lu(l.shape),A=d?ba(l.color):null;e.push({prompt:Nu(m,A),answer:f.id,reward:Fu(m,A),options:u.map(g=>({id:g.id,kind:"shape",shape:g.shape,color:g.color}))})});else if(n==="animal"){let c=a(pl(this.age).map(l=>l.id));for(let l=0;l<Oi;l++){let h=c();l&&e[l-1].animal===h&&(h=c());let u=gl(h),d=qu(this.age,h,this.seed+l*41);e.push({prompt:Wu(u),answer:u.food,animal:h,show:{type:"thing",thing:u.thing},reward:Xu(u),options:d.map(f=>({id:f,kind:"thing",thing:wA[f]}))})}}else if(n==="pick"){let c=fA[this.level.table],l=a(c.items.map(h=>h.id));for(let h=0;h<Oi;h++){let u=l();h&&e[h-1].answer===u&&(u=l());let d=c.items.find(m=>m.id===u),f=_s(t,c.items.filter(m=>m.id!==u),r-1);e.push({prompt:c.prompt(d),answer:u,options:[d,...f].sort(()=>t()-.5).map(m=>m.hex!=null?{id:m.id,kind:"color",hex:m.hex}:{id:m.id,kind:"thing",thing:m.thing})})}}else if(n==="habit"){let c=_s(t,Ju,Oi);for(let l of c){let h=_s(t,MA.filter(u=>u!==l.answer),r-1);e.push({prompt:l.text,answer:l.answer,who:l.who,show:{type:"person",who:l.who},options:[l.answer,...h].sort(()=>t()-.5).map(u=>({id:u,kind:"thing",thing:u}))})}}else{let c=a(s);for(let l=0;l<Oi;l++){let h=c();l&&e[l-1].answer===h&&(h=c());let u=Zn(h),d=_s(t,s.filter(m=>m!==h),r-1),f=[h,...d].sort(()=>t()-.5);n==="letter"?e.push({prompt:Vu(u),answer:h,reward:o(u),options:f.map(m=>({id:m,kind:"thing",thing:Zn(m).thing,plaque:Zn(m).ch}))}):n==="word"?e.push({prompt:xA(u),answer:h,reward:o(u),options:f.map(m=>({id:m,kind:"thing",thing:Zn(m).thing}))}):e.push({prompt:AA(u),answer:h,reward:o(u),show:{type:"thing",thing:u.thing},options:f.map(m=>({id:m,kind:"letter",ch:Zn(m).ch}))})}}return e}get finished(){return this.round>=this.rounds.length}get cur(){return this.finished?null:this.rounds[this.round]}get hint(){return this.misses>=2?this.cur.answer:null}tap(t){if(this.finished)return null;if(t!==this.cur.answer)return this.misses++,{ok:!1,firstMiss:this.misses===1};let e={ok:!0,first:this.misses===0,round:this.cur};return this.round++,this.misses=0,e.finished=this.finished,e}};var SA={title:["\u0639\u0627\u0644\u0645 \u0631\u062D\u0644\u062A\u064A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A","Rehlaty Learning World"],pick:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0648\u0649","Choose a level"],no:["\u0645\u0634 \u0647\u0646\u0627... \u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Not here... listen again"],again:["\u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Hear again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],chooseHero:["\u0627\u062E\u062A\u0627\u0631 \u0634\u062E\u0635\u064A\u062A\u0643!","Choose your hero!"],letsGo:["\u064A\u0644\u0627 \u0646\u0628\u062F\u0623 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629!","Let's start the adventure!"]},EA={...Zc,tempo:84,lead:"bell",shaker:!1,chords:[[48,[64,67,72]],[45,[64,69,72]],[41,[65,69,72]],[43,[62,67,71]],[48,[64,67,72]],[45,[64,69,72]],[43,[62,67,71]],[48,[64,67,76]]],melody:[[0,0,79],[0,4,84],[1,0,81],[1,4,76],[2,0,77],[2,4,81],[3,0,79],[3,4,74],[4,0,84],[4,4,79],[5,0,81],[5,4,88],[6,0,86],[6,4,83],[7,0,84]]},Ra=[72,74,76,79,81,84,86,88];function Qu(i,t,e){let s=new In().setFromObject(i).getSize(new T),r=Math.min(t/Math.max(s.y,.01),e/Math.max(s.x,s.z,.01));i.scale.multiplyScalar(r);let a=new In().setFromObject(i);return{h:a.max.y-a.min.y,minY:a.min.y}}var ju=new T(-5,2.8,2),td=new T(-1.5,0,2.9),tr=new T(5.2,0,3),xl=.6,Al=class{constructor(t,e,n){this.sh=new ga(t,e,n,{text:SA,theme:EA});let s=this.sh;Eu(`${s.base}../art/`),this.girl=s.T.girl,this.st=new xa(s,{bg:13627135,ground:10145952,fov:40,box:[7.2,3.9],dir:[0,.5,1],target:[0,1,.8]}),this.opts=new Map,this.rackItems=[],this.cheerN=Math.floor(Math.random()*9),this.worlds={},this.worldId=null,this.padStyle=Ca.float,this._goWorld(0,!0),this.fade=Ot("div",{class:"lw-fade"}),s.root.append(this.fade),this.owl=Ks("owl"),this.owl.position.set(-6.3,.16,3.4),this.owl.scale.setScalar(.72),this.owl.rotation.y=.25,this.st.add(this.owl),this.persons={mama:fl("mama"),baba:fl("baba")};for(let r of Object.values(this.persons))r.position.set(-1.5,0,2.7),r.scale.setScalar(.9),r.visible=!1,r.rotation.y=.2,this.st.add(r);this.stand=this._makeStand(),this._makeRack(),this.save=s.save,this.save.lw||(this.save.lw={unlocked:1,done:{}}),this.st.onFrame((r,a)=>this._frame(r,a)),s.fonts().then(()=>s.titleCard(s.t("title"),"\u{1F989}\u{1F524}\u{1F522}\u{1F537}\u{1F430}",()=>this._start()))}_pond(){let t=this.st.scene;mn(t),this.clouds=Sn(t,7,{y:9,z:-18}),this.st.onFrame(r=>this.clouds.userData.drift(r)),Yn(t,[{t:"tree",x:-9.5,z:-5,s:5.2},{t:"tree",x:9.8,z:-4.5,s:4.6},{t:"tree",x:-13,z:-2,s:4.2},{t:"tree",x:13.5,z:-2.5,s:5},{t:"bush",x:-8,z:3.8,s:.9},{t:"bush",x:8.6,z:3.5,s:.8},{t:"rock",x:-7.4,z:4.8,s:.55},{t:"rock",x:7.2,z:5.2,s:.45},...Array.from({length:22},(r,a)=>({t:"flower",x:-12+a*1.12+Math.sin(a)*.4,z:6+a%4*.6+Math.cos(a*2)*.5}))],-.2);let e=new Y(new Te(60,40),De(9097328,{roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.2,e.receiveShadow=!0,t.add(e);let n=new Y(new re(6.4,6.6,.3,48),De(13148272,{roughness:1}));n.scale.z=.62,n.position.y=-.12,t.add(n);let s=new Y(new le(15,.4,3.2),De(8046688,{roughness:1}));s.position.set(0,-.05,3.1),s.receiveShadow=!0,t.add(s),this.water=new Y(new re(6.1,6.1,.3,48),new Jt({map:Jc(256,256,r=>{let a=r.createLinearGradient(0,0,256,256);a.addColorStop(0,"#6ad0ff"),a.addColorStop(1,"#2a9ae0"),r.fillStyle=a,r.fillRect(0,0,256,256),r.strokeStyle="rgba(255,255,255,.35)",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.ellipse(o*83%256,o*57%256,28,8,0,0,Math.PI*2),r.stroke()}),roughness:.2,metalness:.1})),this.water.scale.z=.58,this.water.position.y=-.08,t.add(this.water);for(let[r,a,o]of[[-5.1,-1.7,.5],[4.9,-1.9,.6],[-4.6,1.2,.45],[5.2,1,.5],[-1.6,-2.6,.5],[2.4,-2.5,.42]]){let c=new Y(new re(o,o,.04,20,1,!1,.4,5.5),De(3844170));c.position.set(r,.1,a),t.add(c)}for(let r=0;r<14;r++){let a=r/14*Math.PI*1.1+Math.PI*1.05,o=new Y(new re(.03,.05,1.3+r%3*.3,6),De(4889146));o.position.set(Math.cos(a)*6.5,.5,Math.sin(a)*3.9),t.add(o);let c=new Y(new ui(.07,.25,4,8),De(9067050));c.position.set(o.position.x,1.15+r%3*.3,o.position.z),t.add(c)}}_goWorld(t,e){let n=Qs[t%Qs.length];if(this.worldId===n)return;let s=()=>{this.worlds[n]||(this.worlds[n]=dl(n),this.st.add(this.worlds[n].group));for(let r of Object.values(this.worlds))r.group.visible=r===this.worlds[n];this.world=this.worlds[n],this.worldId=n,this.padStyle=Ca[this.world.pad]};if(e){s();return}this.fade.classList.add("on"),this.hero&&this.hero.act("run"),setTimeout(()=>{s(),this.fade.classList.remove("on"),this.sh.say(Pu[n],!1,2.2)},520)}_makeStand(){let t=new Tt,e=new Y(new re(.9,1.05,.7,28),De(14194250));e.position.y=.35,e.castShadow=!0;let n=new Y(new re(1.05,1.05,.08,28),De(16771512));return n.position.y=.72,t.add(e,n),t.position.copy(td),t.visible=!1,this.st.add(t),this.standItem=null,t}_makeRack(){let t=new Tt,e=new Y(new le(4.6,.25,1),De(14194250));e.position.y=.75,e.castShadow=!0;let n=new Y(new le(4.6,1.3,.12),De(12088890));n.position.set(0,1.35,-.45),t.add(e,n);for(let s of[-2.1,2.1]){let r=new Y(new le(.25,.75,.8),De(11037242));r.position.set(s,.37,0),t.add(r)}this.slots=Array.from({length:5},(s,r)=>{let a=new Y(new re(.36,.36,.05,20),De(16774360));return a.position.set(-1.75+r*.88,.9,.1),t.add(a),new T(tr.x+(-1.75+r*.88)*xl,.9*xl+.35,tr.z+.1)}),t.position.copy(tr),t.scale.setScalar(xl),this.st.add(t),this.rack=t}_plaque(t,e=!1){let n=new Tt,s=new Y(new re(.62,.62,.12,32),De(16777215,{roughness:.35}));s.rotation.x=Math.PI/2,s.castShadow=!0;let r=new Y(new Ae(.62,.05,10,32),De(16762938,{roughness:.3})),a=new Y(new Te(1.1,1.1),new ie({map:yu(t,{size:e?200:180}),transparent:!0,toneMapped:!1}));return a.position.z=.075,n.add(s,r,a),n}_option(t,e,n){let s=new Tt,r=this.padStyle.ring[e%5],a=new Y(new Ae(.85,.22,12,28),De(r,{roughness:.4}));a.rotation.x=Math.PI/2,a.position.y=.05;let o=new Y(new re(.85,.85,.08,28),De(this.padStyle.disc));o.position.y=.04,s.add(a,o);let c=null,l=null,h=.06;if(t.kind==="thing"){c=An(t.thing);let m=Qu(c,1.9,1.55);if(h=.12-m.minY,c.position.set(-.1,h,0),s.add(c),t.plaque){let A=Math.max(2,h+m.h+.55),g=new Y(new re(.035,.035,A,8),De(12093512));g.position.set(1,A/2,.1),l=this._plaque(t.plaque),l.position.set(1,A+.1,.1),s.add(g,l)}}else if(t.kind==="color")c=new Y(new be(.62,28,20),new Jt({color:t.hex,roughness:.18,metalness:.05})),c.position.set(0,.95,0),c.castShadow=!0,s.add(c);else if(t.kind==="shape")c=new Y(_a(t.shape),new Jt({color:ba(t.color).hex,roughness:.25,metalness:.05})),c.position.set(0,1.05,0),c.scale.setScalar(.95),c.castShadow=!0,s.add(c);else{let m=t.kind==="number"?this.sh.T.num(t.n):t.ch,A=new Y(new re(.05,.05,.7,8),De(12093512));A.position.set(0,.45,0),l=this._plaque(m,!0),l.position.set(0,1.5,0),l.scale.setScalar(1.45),s.add(A,l),c=l}let u=new Y(new re(1.25,1.25,.06,28),new ie({color:16773754,transparent:!0,opacity:0,depthWrite:!1}));u.position.y=.02;let d=new Y(new be(1.35,10,8),new ie({visible:!1}));d.userData.id=t.id,d.position.set(.2,.9,0),s.add(u,d);let f=new T(((e+.5)/n-.5)*8.6,.1,e%2?.7:-.65);return s.position.copy(ju),s.scale.setScalar(.01),this.st.add(s),{g:s,o:t,home:f,item:c,plaque:l,baseY:h,ring:a,glow:u,hit:d,ph:e*1.7,wig:0,gone:!1,arrive:-.35-e*.28,from:ju.clone()}}_showStand(t){this.standItem&&(this.st.scene.remove(this.standItem),this.standItem=null),this.stand.visible=!1;for(let n of Object.values(this.persons))n.visible=!1;if(!t)return;if(t.type==="person"){let n=this.persons[t.who];n.visible=!0,n.act("talk");return}this.stand.visible=!0;let e=new Tt;if(t.type==="thing"){let n=An(t.thing),s=Qu(n,1.9,1.7);n.position.y=.76-s.minY,e.add(n),n.userData.art||(e.userData.spin=n)}else if(t.type==="apples"){let n=t.n,s=n>10?5:n>6?4:3,r=Math.ceil(n/s),a=[];for(let o=0;o<n;o++){let c=An("apple");c.scale.setScalar(n>10?.5:.62);let l=Math.floor(o/s),h=o%s;c.position.set((h-(s-1)/2)*.42+l%2*.1,.76,(l-(r-1)/2)*.4),e.add(c),a.push(c)}e.userData.apples=a}else if(t.type==="letter"){let n=this._plaque(t.ch,!0);n.position.set(0,1.7,0),n.scale.setScalar(1.5),e.add(n)}e.position.copy(td),this.st.add(e),this.standItem=e}_start(){this.save.lw.hero?(this._makeHero(this.save.lw.hero,this.save.lw.look),this._levels()):this._chooseHero()}_makeHero(t,e){this.hero&&this.st.scene.remove(this.hero);let n=Ks(t);n.position.set(-4.3,.16,3.4),n.scale.setScalar(.9),n.rotation.y=.2,this.st.add(n),this.hero=n,/[?&]debug/.test(location.search)&&(window.__hero=n),this.kind=t,this.girl=t==="girl",this.sh.setGender(t)}_chooseHero(){let t=this.sh;this._clearRound(),t.clear(),this.st.mode="hero",t.sound.setMode("menu"),t.layer.append(Ot("div",{class:"lk-top"},t.backBtn(),Ot("span"),t.soundBtn())),this.hero&&(this.st.scene.remove(this.hero),this.hero=null);let e={boy:Ks("boy"),girl:Ks("girl")};e.boy.position.set(-2.1,0,2.2),e.girl.position.set(2.1,0,2.2);for(let o of Object.values(e))o.scale.setScalar(1.25),this.st.add(o),o.act("wave");this.previews=e;let n={},s=null,r=Ot("div",{class:"lw-hero"}),a=o=>{s=o,t.sound.play("right"),e[o].act("celebrate"),this.girl=o==="girl",t.setGender(o),this.girl=o==="girl",t.setGender(o);let c=o==="boy"?"girl":"boy";this.st.scene.remove(e[c]),e[o].position.set(0,0,2.2),r.replaceChildren(Ot("button",{class:"lk-btn",onclick:()=>{t.sound.play("win"),this.save.lw.hero=s,this.save.lw.look={hair:n.hair,cloth:n.cloth},t.saveNow(),this.st.scene.remove(e[o]),this.previews=null,this._makeHero(s,n),this.hero.act("celebrate"),t.speak(t.t("letsGo")),setTimeout(()=>this._levels(),1600)}},"\u25B6 "+t.t("play")))};r.append(Ot("div",{class:"lw-who"},Ot("button",{class:"lw-boy",onclick:()=>a("boy")},"\u{1F466}  \u0648\u0644\u062F"),Ot("button",{class:"lw-girl",onclick:()=>a("girl")},"\u{1F467}  \u0628\u0646\u062A"))),t.layer.append(Ot("div",{class:"lw-herobar"},Ot("div",{class:"lw-title",style:"font-size:calc(var(--u)*6.5)"},t.t("chooseHero")),r)),t.speak(t.t("chooseHero"))}_levels(){let t=this.sh;this._clearRound(),t.clear(),this.st.mode="menu",t.sound.setSuspense(!1),t.sound.setMode("menu"),t.sound.energy=0,t.layer.append(Ot("div",{class:"lk-top"},t.backBtn(),Ot("span"),t.soundBtn()));let e=this.save.lw.unlocked||1,s=Ta(t.age).map((r,a)=>{let o=a+1>e,c=!!this.save.lw.done[r.id];return Ot("button",{class:`lw-tile${o?" lock":""}${c?" done":""}`,"aria-label":r.ar,disabled:o||null,onclick:()=>{t.sound.play("tap"),this._begin(r.id)}},Ot("i",{},o?"\u{1F512}":r.emoji),Ot("b",{},t.T.num(a+1)),Ot("span",{},r.ar),c?Ot("u",{},"\u2B50"):null)});t.layer.append(Ot("div",{class:"lk-dim",style:"background:rgba(40,30,90,.18)"},Ot("div",{class:"lw-card"},Ot("div",{class:"lw-title"},t.t("pick")),Ot("div",{class:"lw-grid"},s)))),this.owl.act("cheer"),this.owl.look(0)}_clearRound(){for(let t of this.opts.values())this.st.scene.remove(t.g);this.opts.clear(),this.leap=null;for(let t of this.rackItems)this.st.scene.remove(t);this.rackItems=[],this._showStand(null),this.st.setPicks([],null)}_begin(t){let e=this.sh;this._clearRound(),this.levelId=t,this.level=js.find(n=>n.id===t),this._goWorld(Math.max(0,Ta(e.age).findIndex(n=>n.id===t))),this.play=new Ea(t,e.age,Math.floor(Math.random()*1e9)),e.clear(),this.lightDots=e.topBar(5,"\u2B50"),this.lightDots(0),this.sign=Ot("div",{class:"lw-sign"}),this.signText=Ot("span"),this.signIcon=Ot("i",{},this.level.emoji),this.sign.append(this.signIcon,this.signText,Ot("button",{class:"lw-again","aria-label":e.t("again"),onclick:n=>{n.stopPropagation(),this._say()}},"\u{1F50A}")),e.layer.append(this.sign),e.sound.setMode("play"),e.sound.energy=0,this.st.mode="busy",setTimeout(()=>this._ask(),this.worldChanged?1300:700)}_ask(){let t=this.play.cur;for(let n of this.opts.values())this.st.scene.remove(n.g);this.opts.clear(),this._showStand(t.show);let e=t.options.length;this.owl.act("toss"),t.options.forEach((n,s)=>this.opts.set(n.id,this._option(n,s,e))),this.st.setPicks([...this.opts.values()],n=>this._tap(n)),this.st.focus=null,this.signText.textContent=t.prompt,this.sign.classList.remove("pop"),this.sign.offsetWidth,this.sign.classList.add("pop"),this.st.mode="wait",this.sh.sound.setSuspense(!0),this.owl.look(0),this._say()}_say(){let t=this.play.cur;t&&(this.sh.sound.play("sparkle"),this.owl.act(t.who?"think":"point"),this.hero&&(this.hero.look(0),this.hero.act(t.who?"talk":"point")),this.sh.speak(t.prompt))}_tap(t){if(this.st.mode!=="wait")return;let e=this.play.cur,n=this.play.tap(t),s=this.opts.get(t);if(!n.ok){s.wig=.6,this.sh.sound.play("bump"),this.owl.act("think"),this.hero&&this.hero.act("think"),this.sh.say(this.sh.t("no"),!1,1.6),n.firstMiss&&this.sh.round(this.level.skill,!1,e.answer),setTimeout(()=>this.st.mode==="wait"&&this._say(),900);return}n.first&&this.sh.round(this.level.skill,!0,e.answer),this.st.mode="found",this.sh.sound.setSuspense(!1),this.st.setPicks([],null);let r=this.play.round;this.lightDots(r),this.sh.sound.energy=r/5,this.sh.sound.play("splash"),this.sh.sound.play("note",Ra[r*2%Ra.length]),this.sh.sound.play("right"),this.sh.sound.play("fanfare"),this.sh.sound.play("applause"),setTimeout(()=>this.sh.sound.play("crowd"),160),this.owl.act(r%2?"cheer":"clap"),this.hero&&this.hero.act(r%3===0?"celebrate":r%3===1?"giggle":"clap"),this.owl.look(s.g.position.x);for(let[l,h]of this.opts)l!==t&&(h.gone=!0);this.leap={o:s,t:0,from:s.g.position.clone(),slot:this.slots[r-1]};let a=Ku(this.girl,this.cheerN++),o=[a];e.reward&&o.push(e.reward),this.signText.textContent=e.reward||a,this.signIcon.textContent="\u2B50",this.sh.say(a,!1,1.6),this._advDone=!1;let c=()=>{clearTimeout(this._advT),!this._advDone&&(this._advDone=!0,this._advance(n))};setTimeout(()=>{if(e.countAloud&&this.standItem&&this.standItem.userData.apples){let l=Bu.slice(0,Math.min(e.countAloud,10)).map(h=>h[0]);this.sh.speak([a,...l],h=>{let u=this.standItem&&this.standItem.userData.apples[h-1];u&&(u.userData.jump=.4),h&&this.sh.sound.play("note",Ra[h%Ra.length])},c)}else this.sh.speak(o,null,c)},600),this._advT=setTimeout(c,9e3)}_advance(t){setTimeout(()=>{this.signIcon.textContent=this.level.emoji,t.finished?this._levelDone():this._ask()},700)}_levelDone(){let t=this.sh;this.st.mode="end",t.sound.setSuspense(!1),this.sign.remove();let e=Ta(t.age),n=e.findIndex(o=>o.id===this.levelId);if(this.save.lw.done[this.levelId]=!0,this.save.lw.unlocked=Math.max(this.save.lw.unlocked||1,n+2),t.saveNow(),this.owl.act("cheer"),this.hero&&this.hero.act("celebrate"),this.st.sparkle(new T(tr.x,2.2,tr.z),40),!(n+1<e.length)){t.sound.setMode("calm"),t.finishCard(this.level.ar,this.level.emoji,()=>this._begin(this.levelId),null,()=>this._levels());return}let r=!t.done;t.done=!0,t.complete(),t.sound.play("win"),t.sound.play("applause"),setTimeout(()=>t.sound.play("crowd"),200),setTimeout(()=>{t.sound.play("yay"),t.sound.play("star")},900),t.speak(r?`${t.t("greatSay")} ${t.t("newStarSay")}`:t.t("greatSay"));let a=e[n+1].id;setTimeout(()=>this._walkOn(a,n+1),3e3)}_walkOn(t,e){let n=this.sh;this._clearRound();let s=this.hero,r=Qs[e%Qs.length];if(this.worldId===r||!s){this._goWorld(e,!0),this._begin(t);return}this.worlds[r]||(this.worlds[r]=dl(r),this.st.add(this.worlds[r].group));let a=this.world,o=this.worlds[r],c=34;o.group.visible=!0,o.group.position.x=c;let l=o.group.children[0];l&&l.material&&(l.material.transparent=!0,l.material.opacity=0);let h=0,u=setInterval(()=>{n.sound.play("step",h++%2)},330);s.act("walk"),this.owl.act("wave"),n.sound.setMode("calm"),n.sound.play("whoosh"),this.scroll={from:a,to:o,sky:l,t:0,dur:4.2,SHIFT:c,then:()=>{clearInterval(u),a.group.visible=!1,a.group.position.x=0,o.group.position.x=0,l&&l.material&&(l.material.opacity=1,l.material.transparent=!1),this.world=o,this.worldId=r,this.padStyle=Ca[o.pad],s.act("wave"),setTimeout(()=>this._begin(t),600)}}}_frame(t,e){if(this.owl.update(t,e),this.hero&&this.hero.update(t,e),this.scroll){let r=this.scroll;r.t+=t/r.dur;let a=Math.min(1,r.t),o=a*a*(3-2*a);if(r.from.group.position.x=-r.SHIFT*o,r.to.group.position.x=r.SHIFT*(1-o),r.sky&&r.sky.material&&(r.sky.material.opacity=o),r.to.update(t,e),this.hero&&(this.hero.userData.state.act="walk"),a>=1){let c=r.then;this.scroll=null,c()}}if(this.walk){let r=this.walk;r.t+=t/r.dur;let a=Math.min(1,r.t);if(r.hero.position.x=r.from+(r.to-r.from)*(a*a*(3-2*a)),a>=1){let o=r.then;this.walk=null,o()}}if(this.previews)for(let r of Object.values(this.previews))r.parent&&(r.update(t,e),Math.random()<.004&&r.act("wave"));for(let r of Object.values(this.persons))r.visible&&r.update(t,e);this.world&&this.world.update(t,e);let n=this.play&&this.st.mode==="wait"&&this.play.cur?this.play.hint:null,s=this.st.mode==="wait"?this.st.focusedId():null;for(let[r,a]of this.opts){if(a.gone){a.g.position.x+=(a.g.position.x<0?-1:1)*t*6,a.g.scale.multiplyScalar(Math.max(0,1-t*1.5));continue}if(this.leap&&this.leap.o===a)continue;if(a.arrive<1){a.arrive+=t*2.4;let l=Math.max(0,Math.min(1,a.arrive));a.arrive>0&&(a.g.position.lerpVectors(a.from,a.home,l),a.g.position.y+=Math.sin(l*Math.PI)*2,a.g.scale.setScalar(Math.max(.01,l)),l>=1&&!a.landed&&(a.landed=!0,this.sh.sound.play("splash")));continue}let o=e*.55+a.ph;a.g.position.set(a.home.x+Math.cos(o)*.55,.1+Math.sin(e*2+a.ph)*.04,a.home.z+Math.sin(o*1.3)*.4),a.g.rotation.y=Math.sin(e*.8+a.ph)*.35,a.ring.rotation.z=Math.sin(e*2+a.ph)*.06,a.o.kind==="thing"&&a.item&&(a.item.position.y=a.baseY+Math.abs(Math.sin(e*2.4+a.ph))*.06),a.o.kind==="shape"&&(a.item.rotation.y=Math.sin(e*1.4+a.ph)*.5),a.o.kind==="color"&&(a.item.position.y=.95+Math.abs(Math.sin(e*2.2+a.ph))*.12);let c=a.item&&a.item.userData&&a.item.userData.inner&&a.item.userData.inner.userData.wings;c&&(c.scale.x=.55+Math.abs(Math.sin(e*14+a.ph))*.45),a.glow.material.opacity=r===n?.55+Math.sin(e*6)*.2:r===s?.4:0,a.glow.material.color.setHex(r===s?8048895:16773754),r===n&&this.owl.look(a.g.position.x),a.wig>0?(a.wig-=t,a.g.rotation.z=Math.sin(a.wig*40)*.35*a.wig):a.g.rotation.z=0}if(this.leap){let r=this.leap;r.t+=t/1.1;let a=Math.min(1,r.t),o=a*a*(3-2*a);if(r.o.g.position.lerpVectors(r.from,new T(r.slot.x,r.slot.y-.2,r.slot.z),o),r.o.g.position.y+=Math.sin(a*Math.PI)*2.4,r.o.g.scale.setScalar(Math.max(.01,1-.58*o)),r.o.g.rotation.y=o*Math.PI*2,a>=1){let c=r.o.item,l=new T,h=new T;c.getWorldPosition(l),c.getWorldScale(h),r.o.g.remove(c),c.position.copy(l),c.scale.copy(h).multiplyScalar(.8),c.rotation.set(0,0,0),this.st.add(c),this.rackItems.push(c),this.st.scene.remove(r.o.g),this.opts.delete(r.o.o.id),this.st.sparkle(new T(r.slot.x,r.slot.y+.3,r.slot.z),14),this.sh.sound.play("pop"),this.leap=null}}if(this.standItem&&this.standItem.userData.apples)for(let r of this.standItem.userData.apples)r.userData.jump>0?(r.userData.jump-=t,r.position.y=.76+Math.sin(Math.max(0,r.userData.jump)*Math.PI/.4)*.25):r.position.y=.76;this.standItem&&this.standItem.userData.spin&&(this.standItem.userData.spin.rotation.y=e*.8)}pause(){this.sh.pause()}dispose(){clearTimeout(this._advT),this.st.dispose(),this.sh.dispose()}},TA=`
.lw-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #2a9ae0;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.4));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(10,40,70,.3);pointer-events:auto;max-width:94%}
.lw-sign i{font-style:normal;font-size:1.5em}
.lw-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lw-sign.pop{animation:lw-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes lw-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.lw-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
.lw-card{background:#fffaf0;border:calc(var(--u)*.8) solid #ffd45a;border-radius:calc(var(--u)*6);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:96%;max-height:92%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(30,20,70,.4);pointer-events:auto}
.lw-title{font-size:calc(var(--u)*7.5);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #6a3ad0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #4a2a9a}
.lw-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:calc(var(--u)*1.6)}
.lw-tile{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.4);width:calc(var(--u)*17);min-width:92px;height:calc(var(--u)*19);min-height:96px;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3.4);background:linear-gradient(180deg,#8ad8ff,#3aa0f0);color:#fff;font-family:inherit;font-weight:900;cursor:pointer;padding:calc(var(--u)*.8);box-shadow:0 calc(var(--u)*.8) 0 #1a6ab8,0 calc(var(--u)*1) calc(var(--u)*2) rgba(20,40,80,.3)}
.lw-tile:active{transform:translateY(calc(var(--u)*.5))}
.lw-tile i{font-style:normal;font-size:calc(var(--u)*6.5);line-height:1}
.lw-tile b{position:absolute;top:calc(var(--u)*.6);left:calc(var(--u)*1);font-size:calc(var(--u)*3);background:#ffd23a;color:#5a3a00;border-radius:999px;min-width:calc(var(--u)*4.6);text-align:center}
.lw-tile span{font-size:calc(var(--u)*3.3);line-height:1.15;text-align:center}
.lw-tile u{position:absolute;bottom:calc(var(--u)*.4);right:calc(var(--u)*.8);text-decoration:none;font-size:calc(var(--u)*3.6)}
.lw-tile.done{background:linear-gradient(180deg,#8aeaa0,#2fb85a);box-shadow:0 calc(var(--u)*.8) 0 #1a7a3a,0 calc(var(--u)*1) calc(var(--u)*2) rgba(20,40,80,.3)}
.lw-tile.lock{background:linear-gradient(180deg,#d8d8e4,#a8a8b8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a8a;cursor:default;opacity:.85}
.lw-herobar{position:absolute;left:50%;bottom:calc(var(--u)*3);transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.6);pointer-events:none;width:94%}
.lw-hero{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.4);pointer-events:auto}
.lw-who{display:flex;gap:calc(var(--u)*3)}
.lw-who button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;border:calc(var(--u)*.7) solid #fff;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*5);cursor:pointer;min-height:max(52px,calc(var(--u)*12));box-shadow:0 calc(var(--u)*.8) 0 rgba(0,0,0,.25)}
.lw-boy{background:linear-gradient(180deg,#ffd84a,#f5a01a)}
.lw-girl{background:linear-gradient(180deg,#ff8ac8,#e8409a)}
.lw-row{display:flex;gap:calc(var(--u)*1.6)}
.lw-sw{width:max(40px,calc(var(--u)*8));height:max(40px,calc(var(--u)*8));border-radius:50%;border:calc(var(--u)*.6) solid #fff;cursor:pointer;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(0,0,0,.3)}
.lw-fade{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none;transition:opacity .5s;z-index:20}
.lw-fade.on{opacity:1}
.lw-tile:focus-visible{outline:calc(var(--u)*.8) solid #6a3ad0;outline-offset:calc(var(--u)*.6)}
@media (max-aspect-ratio:1/1){.lw-grid{grid-template-columns:repeat(3,1fr)}}
`,_l={start(i,t,e){document.getElementById("lw-style")||document.head.append(Ot("style",{id:"lw-style"},TA));let n=new Al(i,t||{},e);return _l.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.LearnLetters=_l;var B_=_l;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
