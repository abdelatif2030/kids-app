(()=>{var zl="170";var mu=0,Nc=1,_u=2;var Yh=1,Hl=2,zn=3,oi=0,ke=1,ve=2,si=0,es=1,Ls=2,Fc=3,Oc=4,xu=5,Mi=100,Au=101,yu=102,vu=103,Cu=104,Iu=200,wu=201,bu=202,Mu=203,Ao=204,yo=205,Eu=206,Su=207,Tu=208,Ru=209,Pu=210,Du=211,Lu=212,Uu=213,ku=214,vo=0,Co=1,Io=2,rs=3,wo=4,bo=5,Mo=6,Eo=7,$h=0,Nu=1,Fu=2,ri=0,Ou=1,Bu=2,zu=3,Hu=4,Vu=5,Gu=6,Vl=7;var Zh=300,as=301,os=302,So=303,To=304,pa=306,wn=1e3,Ti=1001,Ro=1002,gn=1003,Wu=1004;var lr=1005;var en=1006,Ba=1007;var Hn=1008;var Xn=1009,Jh=1010,jh=1011,Us=1012,Gl=1013,Ri=1014,Vn=1015,$s=1016,Wl=1017,Xl=1018,ls=1020,Kh=35902,Qh=1021,td=1022,pn=1023,ed=1024,nd=1025,ns=1026,cs=1027,id=1028,ql=1029,sd=1030,Yl=1031;var $l=1033,Lr=33776,Ur=33777,kr=33778,Nr=33779,Po=35840,Do=35841,Lo=35842,Uo=35843,ko=36196,No=37492,Fo=37496,Oo=37808,Bo=37809,zo=37810,Ho=37811,Vo=37812,Go=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Zo=37819,Jo=37820,jo=37821,Fr=36492,Ko=36494,Qo=36495,rd=36283,tl=36284,el=36285,nl=36286;var Or=2300,il=2301,za=2302,Bc=2400,zc=2401,Hc=2402;var Xu=3200,qu=3201;var ad=0,Yu=1,ii="",oe="srgb",gs="srgb-linear",ga="linear",he="srgb";var Oi=7680;var Vc=519,$u=512,Zu=513,Ju=514,od=515,ju=516,Ku=517,Qu=518,tf=519,Gc=35044;var Wc="300 es",Gn=2e3,Br=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,Ss=Math.PI/180,ks=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Zl(i,t){return(i%t+t)%t}function ef(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ts(i,t,e){return(1-e)*i+e*t}function sf(i,t,e,n){return Ts(i,t,1-Math.exp(-e*n))}function rf(i,t=1){return t-Math.abs(Zl(i,t*2)-t)}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function of(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cf(i,t){return i+Math.random()*(t-i)}function hf(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uf(i){return i*Ss}function ff(i){return i*ks}function pf(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ld={DEG2RAD:Ss,RAD2DEG:ks,generateUUID:ki,clamp:Ue,euclideanModulo:Zl,mapLinear:ef,inverseLerp:nf,lerp:Ts,damp:sf,pingpong:rf,smoothstep:af,smootherstep:of,randInt:lf,randFloat:cf,randFloatSpread:hf,seededRandom:df,degToRad:uf,radToDeg:ff,isPowerOfTwo:pf,ceilPowerOfTwo:gf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:_f,normalize:We,denormalize:Ki},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],A=s[4],_=s[7],P=s[2],b=s[5],S=s[8];return r[0]=a*x+o*v+l*P,r[3]=a*g+o*A+l*b,r[6]=a*p+o*_+l*S,r[1]=c*x+h*v+d*P,r[4]=c*g+h*A+d*b,r[7]=c*p+h*_+d*S,r[2]=u*x+f*v+m*P,r[5]=u*g+f*A+m*b,r[8]=u*p+f*_+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new qt;function cd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xf(){let i=Ns("canvas");return i.style.display="block",i}var qc={};function Ms(i){i in qc||(qc[i]=!0,console.warn(i))}function Af(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yc=[.64,.33,.3,.6,.15,.06],$c=[.2126,.7152,.0722],Zc=[.3127,.329],Jc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[gs]:{primaries:Yc,whitePoint:Zc,transfer:ga,toXYZ:Jc,fromXYZ:jc,luminanceCoefficients:$c,workingColorSpaceConfig:{unpackColorSpace:oe},outputColorSpaceConfig:{drawingBufferColorSpace:oe}},[oe]:{primaries:Yc,whitePoint:Zc,transfer:he,toXYZ:Jc,fromXYZ:jc,luminanceCoefficients:$c,outputColorSpaceConfig:{drawingBufferColorSpace:oe}}});var Bi,sl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Ns("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cf=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Va(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var If=0,je=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=en,a=Hn,o=pn,l=Xn,c=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ki(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Zh;je.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,_=(f+1)/2,P=(p+1)/2,b=(h+u)/4,S=(d+x)/4,E=(m+g)/4;return A>_&&A>P?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=S/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=E/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=S/r,s=E/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==m){let g=1-o,p=l*u+c*f+h*m+d*x,v=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let P=Math.sqrt(A),b=Math.atan2(P,p*v);g=Math.sin(g*b)/P,o=Math.sin(o*b)/P}let _=o*v;if(l=l*g+u*_,c=c*g+f*_,h=h*g+m*_,d=d*g+x*_,g===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new R,Kc=new ci,bn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),hr.subVectors(this.max,vs),zi.subVectors(t.a,vs),Hi.subVectors(t.b,vs),Vi.subVectors(t.c,vs),jn.subVectors(Hi,zi),Kn.subVectors(Vi,Hi),Ai.subVectors(zi,Vi);let e=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-Ai.z,Ai.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,Ai.z,0,-Ai.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-Ai.y,Ai.x,0];return!Wa(e,zi,Hi,Vi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,zi,Hi,Vi,hr))?!1:(dr.crossVectors(jn,Kn),e=[dr.x,dr.y,dr.z],Wa(e,zi,Hi,Vi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new R,new R,new R,new R,new R,new R,new R,new R],hn=new R,cr=new bn,zi=new R,Hi=new R,Vi=new R,jn=new R,Kn=new R,Ai=new R,vs=new R,hr=new R,dr=new R,yi=new R;function Wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wf=new bn,Cs=new R,Xa=new R,Fs=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Xa)),this.expandByPoint(Cs.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new R,qa=new R,ur=new R,Qn=new R,Ya=new R,fr=new R,$a=new R,Vr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ur),o=Qn.dot(this.direction),l=-Qn.dot(ur),c=Qn.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qa).addScaledVector(ur,u),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Ya.subVectors(e,t),fr.subVectors(n,t),$a.crossVectors(Ya,fr);let a=this.direction.dot($a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);let l=o*this.direction.dot(fr.crossVectors(Qn,fr));if(l<0)return null;let c=o*this.direction.dot(Ya.cross(Qn));if(c<0||l+c>a)return null;let h=-o*Qn.dot($a);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,x,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Mf)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ti.crossVectors(n,Qe),ti.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ti.crossVectors(n,Qe)),ti.normalize(),pr.crossVectors(Qe,ti),s[0]=ti.x,s[4]=pr.x,s[8]=Qe.x,s[1]=ti.y,s[5]=pr.y,s[9]=Qe.y,s[2]=ti.z,s[6]=pr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],A=n[7],_=n[11],P=n[15],b=s[0],S=s[4],E=s[8],w=s[12],y=s[1],D=s[5],V=s[9],N=s[13],O=s[2],j=s[6],z=s[10],nt=s[14],G=s[3],ht=s[7],ft=s[11],vt=s[15];return r[0]=a*b+o*y+l*O+c*G,r[4]=a*S+o*D+l*j+c*ht,r[8]=a*E+o*V+l*z+c*ft,r[12]=a*w+o*N+l*nt+c*vt,r[1]=h*b+d*y+u*O+f*G,r[5]=h*S+d*D+u*j+f*ht,r[9]=h*E+d*V+u*z+f*ft,r[13]=h*w+d*N+u*nt+f*vt,r[2]=m*b+x*y+g*O+p*G,r[6]=m*S+x*D+g*j+p*ht,r[10]=m*E+x*V+g*z+p*ft,r[14]=m*w+x*N+g*nt+p*vt,r[3]=v*b+A*y+_*O+P*G,r[7]=v*S+A*D+_*j+P*ht,r[11]=v*E+A*V+_*z+P*ft,r[15]=v*w+A*N+_*nt+P*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+x*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+g*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=d*g*c-x*u*c+x*l*f-o*g*f-d*l*p+o*u*p,A=m*u*c-h*g*c-m*l*f+a*g*f+h*l*p-a*u*p,_=h*x*c-m*d*c+m*o*f-a*x*f-h*o*p+a*d*p,P=m*d*l-h*x*l-m*o*u+a*x*u+h*o*g-a*d*g,b=e*v+n*A+s*_+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/b;return t[0]=v*S,t[1]=(x*u*r-d*g*r-x*s*f+n*g*f+d*s*p-n*u*p)*S,t[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*p+n*l*p)*S,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*S,t[4]=A*S,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*S,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*S,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*S,t[8]=_*S,t[9]=(m*d*r-h*x*r-m*n*f+e*x*f+h*n*p-e*d*p)*S,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*p+e*o*p)*S,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*S,t[12]=P*S,t[13]=(h*x*s-m*d*s+m*n*u-e*x*u-h*n*g+e*d*g)*S,t[14]=(m*o*s-a*x*s-m*n*l+e*x*l+a*n*g-e*o*g)*S,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,x=a*h,g=a*d,p=o*d,v=l*c,A=l*h,_=l*d,P=n.x,b=n.y,S=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(m-A)*P,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+p))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+A)*S,s[9]=(g-v)*S,s[10]=(1-(u+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Gi.set(s[0],s[1],s[2]).length(),a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);let c=1/r,h=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,m;if(o===Gn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Br)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h,m,x;if(o===Gn)m=(a+r)*d,x=-2*d;else if(o===Br)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new R,dn=new ye,bf=new R(0,0,0),Mf=new R(1,1,1),ti=new R,pr=new R,Qe=new R,Qc=new ye,th=new ci,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ef=0,eh=new R,Wi=new ci,Fn=new ye,gr=new R,Is=new R,Sf=new R,Tf=new ci,nh=new R(1,0,0),ih=new R(0,1,0),sh=new R(0,0,1),rh={type:"added"},Rf={type:"removed"},Xi={type:"childadded",child:null},Za={type:"childremoved",child:null},qe=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Mn,n=new ci,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new qt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Is,gr,this.up):Fn.lookAt(gr,Is,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};qe.DEFAULT_UP=new R(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new R,On=new R,Ja=new R,Bn=new R,qi=new R,Yi=new R,ah=new R,ja=new R,Ka=new R,Qa=new R,to=new de,eo=new de,no=new de,Ei=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),On.subVectors(n,e),Ja.subVectors(t,e);let a=un.dot(un),o=un.dot(On),l=un.dot(Ja),c=On.dot(On),h=On.dot(Ja),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,n),no.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),On.subVectors(t,e),un.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Yi.subVectors(r,n),ja.subVectors(t,n);let l=qi.dot(ja),c=Yi.dot(ja);if(l<=0&&c<=0)return e.copy(n);Ka.subVectors(t,s);let h=qi.dot(Ka),d=Yi.dot(Ka);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(qi,a);Qa.subVectors(t,r);let f=qi.dot(Qa),m=Yi.dot(Qa);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Yi,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return ah.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(ah,o);let p=1/(g+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},mr={h:0,s:0,l:0};function io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Zl(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=io(a,r,t+1/3),this.g=io(a,r,t),this.b=io(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return ne.fromWorkingColorSpace(He.copy(this),t),Math.round(Ue(He.r*255,0,255))*65536+Math.round(Ue(He.g*255,0,255))*256+Math.round(Ue(He.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=oe){ne.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(mr);let n=Ts(ei.h,mr.h,e),s=Ts(ei.s,mr.s,e),r=Ts(ei.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Kt;Kt.NAMES=hd;var Pf=0,Pi=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ki(),this.name="",this.blending=es,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=yo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends Pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new R,_r=new ot,an=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}};var Gr=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wr=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},Df=0,rn=new ye,so=new qe,$i=new R,tn=new bn,ws=new bn,Le=new R,Ge=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?Wr:Gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(tn.min,ws.min),tn.expandByPoint(Le),Le.addVectors(tn.max,ws.max),tn.expandByPoint(Le)):(tn.expandByPoint(ws.min),tn.expandByPoint(ws.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),Le.add($i)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<n.count;E++)o[E]=new R,l[E]=new R;let c=new R,h=new R,d=new R,u=new ot,f=new ot,m=new ot,x=new R,g=new R;function p(E,w,y){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[E].add(x),o[w].add(x),o[y].add(x),l[E].add(g),l[w].add(g),l[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,w=v.length;E<w;++E){let y=v[E],D=y.start,V=y.count;for(let N=D,O=D+V;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let A=new R,_=new R,P=new R,b=new R;function S(E){P.fromBufferAttribute(s,E),b.copy(P);let w=o[E];A.copy(w),A.sub(P.multiplyScalar(P.dot(w))).normalize(),_.crossVectors(b,w);let D=_.dot(l[E])<0?-1:1;a.setXYZW(E,A.x,A.y,A.z,D)}for(let E=0,w=v.length;E<w;++E){let y=v[E],D=y.start,V=y.count;for(let N=D,O=D+V;N<O;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new an(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oh=new ye,vi=new Vr,xr=new Fs,lh=new R,Ar=new R,yr=new R,vr=new R,ro=new R,Cr=new R,ch=new R,Ir=new R,X=class extends qe{constructor(t=new Ge,e=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ro.fromBufferAttribute(d,t),a?Cr.addScaledVector(ro,h):Cr.addScaledVector(ro.sub(e),h))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(xr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(xr,lh)===null||vi.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(oh.copy(r).invert(),vi.copy(t.ray).applyMatrix4(oh),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=A;_<P;_+=3){let b=o.getX(_),S=o.getX(_+1),E=o.getX(_+2);s=wr(this,p,t,n,c,h,d,b,S,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),A=o.getX(g+1),_=o.getX(g+2);s=wr(this,a,t,n,c,h,d,v,A,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=A;_<P;_+=3){let b=_,S=_+1,E=_+2;s=wr(this,p,t,n,c,h,d,b,S,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,A=g+1,_=g+2;s=wr(this,a,t,n,c,h,d,v,A,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Lf(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:i}}function wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,yr),i.getVertexPosition(c,vr);let h=Lf(i,t,e,n,Ar,yr,vr,ch);if(h){let d=new R;Ei.getBarycoord(ch,Ar,yr,vr,d),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,l,c,d,new ot)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,d,new ot)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Ei.getNormal(Ar,yr,vr,u.normal),h.face=u,h.barycoord=d}return h}var le=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function m(x,g,p,v,A,_,P,b,S,E,w){let y=_/S,D=P/E,V=_/2,N=P/2,O=b/2,j=S+1,z=E+1,nt=0,G=0,ht=new R;for(let ft=0;ft<z;ft++){let vt=ft*D-N;for(let Nt=0;Nt<j;Nt++){let Jt=Nt*y-V;ht[x]=Jt*v,ht[g]=vt*A,ht[p]=O,c.push(ht.x,ht.y,ht.z),ht[x]=0,ht[g]=0,ht[p]=b>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Nt/S),d.push(1-ft/E),nt+=1}}for(let ft=0;ft<E;ft++)for(let vt=0;vt<S;vt++){let Nt=u+vt+j*ft,Jt=u+vt+j*(ft+1),$=u+(vt+1)+j*(ft+1),et=u+(vt+1)+j*ft;l.push(Nt,Jt,et),l.push(Jt,$,et),G+=6}o.addGroup(f,G,w),f+=G,u+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Uf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var kf={clone:hs,merge:Xe},Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xr=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new R,hh=new ot,dh=new ot,Ve=class extends Xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,hh,dh),e.subVectors(dh,hh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,ol=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let l=new Ve(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},qr=class extends je{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ll=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:si});r.uniforms.tEquirect.value=e;let a=new X(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=en),new ol(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ao=new R,Of=new R,Bf=new qt,fn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ao.subVectors(n,e).cross(Of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bf.getNormalMatrix(t),s=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Fs,br=new R,Bs=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],A=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,g-f,_-p).normalize(),n[1].setComponents(l+r,u+c,g+f,_+p).normalize(),n[2].setComponents(l+a,u+h,g+m,_+v).normalize(),n[3].setComponents(l-a,u-h,g-m,_-v).normalize(),n[4].setComponents(l-o,u-d,g-x,_-A).normalize(),e===Gn)n[5].setComponents(l+o,u+d,g+x,_+A).normalize();else if(e===Br)n[5].setComponents(o,d,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ud(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ge=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*u-a;for(let A=0;A<c;A++){let _=A*d-r;m.push(_,-v,0),x.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let A=v+c*p,_=v+c*(p+1),P=v+1+c*(p+1),b=v+1+c*p;f.push(A,_,b),f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,up=`vec3 transformedNormal = objectNormal;
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
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
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
#endif`,Bp=`struct PhysicalMaterial {
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
}`,zp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,Y0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,ug=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Hf,alphahash_pars_fragment:Vf,alphamap_fragment:Gf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:jf,beginnormal_vertex:Kf,bsdfs:Qf,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:up,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:gp,emissivemap_pars_fragment:mp,colorspace_fragment:_p,colorspace_pars_fragment:xp,envmap_fragment:Ap,envmap_common_pars_fragment:yp,envmap_pars_fragment:vp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:Lp,envmap_vertex:Ip,fog_vertex:wp,fog_pars_vertex:bp,fog_fragment:Mp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Dp,lights_toon_fragment:Up,lights_toon_pars_fragment:kp,lights_phong_fragment:Np,lights_phong_pars_fragment:Fp,lights_physical_fragment:Op,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:Hp,lights_fragment_end:Vp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Qp,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:g0,premultiplied_alpha_fragment:m0,project_vertex:_0,dithering_fragment:x0,dithering_pars_fragment:A0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:I0,shadowmap_vertex:w0,shadowmask_pars_fragment:b0,skinbase_vertex:M0,skinning_pars_vertex:E0,skinning_vertex:S0,skinnormal_vertex:T0,specularmap_fragment:R0,specularmap_pars_fragment:P0,tonemapping_fragment:D0,tonemapping_pars_fragment:L0,transmission_fragment:U0,transmission_pars_fragment:k0,uv_pars_fragment:N0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:z0,background_frag:H0,backgroundCube_vert:V0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distanceRGBA_vert:$0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:j0,linedashed_vert:K0,linedashed_frag:Q0,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:dg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:pg,points_frag:gg,shadow_vert:mg,shadow_frag:_g,sprite_vert:xg,sprite_frag:Ag},ut={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},In={basic:{uniforms:Xe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Xe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Xe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Xe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Xe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Xe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Xe([ut.points,ut.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Xe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Xe([ut.common,ut.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Xe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Xe([ut.sprite,ut.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Xe([ut.common,ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Xe([ut.lights,ut.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};In.physical={uniforms:Xe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Mr={r:0,b:0,g:0},Ii=new Mn,yg=new ye;function vg(i,t,e,n,s,r,a){let o=new Kt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(v){let A=v.isScene===!0?v.background:null;return A&&A.isTexture&&(A=(v.backgroundBlurriness>0?e:t).get(A)),A}function x(v){let A=!1,_=m(v);_===null?p(o,l):_&&_.isColor&&(p(_,1),A=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,A){let _=m(A);_&&(_.isCubeTexture||_.mapping===pa)?(h===void 0&&(h=new X(new le(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:hs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(A.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(Ii)),h.material.toneMapped=ne.getTransfer(_.colorSpace)!==he,(d!==_||u!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new X(new ge(2,2),new En({name:"BackgroundMaterial",uniforms:hs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ne.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,A){v.getRGB(Mr,dd(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),l=A,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:x,addToRenderList:g}}function Cg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(y,D,V,N,O){let j=!1,z=d(N,V,D);r!==z&&(r=z,c(r.object)),j=f(y,N,V,O),j&&m(y,N,V,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(y,D,V,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,D,V){let N=V.wireframe===!0,O=n[y.id];O===void 0&&(O={},n[y.id]=O);let j=O[D.id];j===void 0&&(j={},O[D.id]=j);let z=j[N];return z===void 0&&(z=u(l()),j[N]=z),z}function u(y){let D=[],V=[],N=[];for(let O=0;O<e;O++)D[O]=0,V[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,D,V,N){let O=r.attributes,j=D.attributes,z=0,nt=V.getAttributes();for(let G in nt)if(nt[G].location>=0){let ft=O[G],vt=j[G];if(vt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function m(y,D,V,N){let O={},j=D.attributes,z=0,nt=V.getAttributes();for(let G in nt)if(nt[G].location>=0){let ft=j[G];ft===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));let vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),O[G]=vt,z++}r.attributes=O,r.attributesNum=z,r.index=N}function x(){let y=r.newAttributes;for(let D=0,V=y.length;D<V;D++)y[D]=0}function g(y){p(y,0)}function p(y,D){let V=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;V[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),O[y]!==D&&(i.vertexAttribDivisor(y,D),O[y]=D)}function v(){let y=r.newAttributes,D=r.enabledAttributes;for(let V=0,N=D.length;V<N;V++)D[V]!==y[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function A(y,D,V,N,O,j,z){z===!0?i.vertexAttribIPointer(y,D,V,O,j):i.vertexAttribPointer(y,D,V,N,O,j)}function _(y,D,V,N){x();let O=N.attributes,j=V.getAttributes(),z=D.defaultAttributeValues;for(let nt in j){let G=j[nt];if(G.location>=0){let ht=O[nt];if(ht===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let ft=ht.normalized,vt=ht.itemSize,Nt=t.get(ht);if(Nt===void 0)continue;let Jt=Nt.buffer,$=Nt.type,et=Nt.bytesPerElement,It=$===i.INT||$===i.UNSIGNED_INT||ht.gpuType===Gl;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Ft=lt.stride,St=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)p(G.location+Ot,lt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)g(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ot=0;Ot<G.locationSize;Ot++)A(G.location+Ot,vt/G.locationSize,$,ft,Ft*et,(St+vt/G.locationSize*Ot)*et,It)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<G.locationSize;lt++)g(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let lt=0;lt<G.locationSize;lt++)A(G.location+lt,vt/G.locationSize,$,ft,vt*et,vt/G.locationSize*lt*et,It)}}else if(z!==void 0){let ft=z[nt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(G.location,ft);break;case 3:i.vertexAttrib3fv(G.location,ft);break;case 4:i.vertexAttrib4fv(G.location,ft);break;default:i.vertexAttrib1fv(G.location,ft)}}}}v()}function P(){E();for(let y in n){let D=n[y];for(let V in D){let N=D[V];for(let O in N)h(N[O].object),delete N[O];delete D[V]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let V in D){let N=D[V];for(let O in N)h(N[O].object),delete N[O];delete D[V]}delete n[y.id]}function S(y){for(let D in n){let V=n[D];if(V[y.id]===void 0)continue;let N=V[y.id];for(let O in N)h(N[O].object),delete N[O];delete V[y.id]}}function E(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Ig(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==pn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let E=S===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Xn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Vn&&!E)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:P,maxSamples:b}}function bg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,A=v*4,_=p.clippingState||null;l.value=_,_=h(m,u,A,f);for(let P=0;P!==A;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,_=f;A!==x;++A,_+=4)a.copy(d[A]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Mg(i){let t=new WeakMap;function e(a,o){return o===So?a.mapping=as:o===To&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===So||o===To)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ll(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yr=class extends Xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,uh=[.125,.215,.35,.446,.526,.582],Si=20,oo=new Yr,fh=new Kt,lo=null,co=0,ho=0,uo=!1,bi=(1+Math.sqrt(5))/2,ji=1/bi,ph=[new R(-bi,ji,0),new R(bi,ji,0),new R(-ji,0,bi),new R(ji,0,bi),new R(0,bi,-ji),new R(0,bi,ji),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,ho),this._renderer.xr.enabled=uo,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:$s,format:pn,colorSpace:gs,depthBuffer:!1},s=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Sg(r,t,e)}return s}_compileMaterial(t){let e=new X(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(fh),h.toneMapping=ri,h.autoClear=!1;let f=new Gt({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new X(new le,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(fh),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let A=this._cubeSize;Er(s,v*A,p>2?A:0,A,A),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ph[(s-r-1)%ph.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new X(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Si;g>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);let p=[],v=0;for(let S=0;S<Si;++S){let E=S/x,w=Math.exp(-E*E/2);p.push(w),S===0?v+=w:S<g&&(v+=2*w)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:A}=this;u.dTheta.value=m,u.mipInt.value=A-n;let _=this._sizeLods[s],P=3*_*(s>A-Qi?s-A+Qi:0),b=4*(this._cubeSize-_);Er(e,P,b,3*_,2*_),l.setRenderTarget(e),l.render(d,oo)}};function Eg(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+uh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Qi?l=uh[a-i+Qi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),A=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let b=0;b<f;b++){let S=b%3*2/3-1,E=b>2?0:-1,w=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];v.set(w,x*m*b),A.set(u,g*m*b);let y=[b,b,b,b,b,b];_.set(y,p*m*b)}let P=new Ge;P.setAttribute("position",new an(v,x)),P.setAttribute("uv",new an(A,g)),P.setAttribute("faceIndex",new an(_,p)),t.push(P),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gh(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sg(i,t,e){let n=new Float32Array(Si),s=new R(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function mh(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function _h(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function Tg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===So||l===To,h=l===as||l===os;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ds(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ds(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let A=0,_=v.length;A<_;A+=3){let P=v[A+0],b=v[A+1],S=v[A+2];u.push(P,b,b,S,S,P)}}else if(m!==void 0){let v=m.array;x=m.version;for(let A=0,_=v.length/3-1;A<_;A+=3){let P=A+0,b=A+1,S=A+2;u.push(P,b,b,S,S,P)}}else return;let g=new(cd(u)?Wr:Gr)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Dg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*a,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Lg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ug(i,t,e){let n=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),x===!0&&(A=3);let _=o.attributes.position.count*A,P=1;_>t.maxTextureSize&&(P=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*P*4*d),S=new Hr(b,_,P,d);S.type=Vn,S.needsUpdate=!0;let E=A*4;for(let y=0;y<d;y++){let D=g[y],V=p[y],N=v[y],O=_*P*4*y;for(let j=0;j<D.count;j++){let z=j*E;f===!0&&(s.fromBufferAttribute(D,j),b[O+z+0]=s.x,b[O+z+1]=s.y,b[O+z+2]=s.z,b[O+z+3]=0),m===!0&&(s.fromBufferAttribute(V,j),b[O+z+4]=s.x,b[O+z+5]=s.y,b[O+z+6]=s.z,b[O+z+7]=0),x===!0&&(s.fromBufferAttribute(N,j),b[O+z+8]=s.x,b[O+z+9]=s.y,b[O+z+10]=s.z,b[O+z+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:S,size:new ot(_,P)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var $r=class extends je{constructor(t,e,n,s,r,a,o,l,c,h=ns){if(h!==ns&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ri),n===void 0&&h===cs&&(n=ls),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fd=new je,xh=new $r(1,1),pd=new Hr,gd=new al,md=new qr,Ah=[],yh=[],vh=new Float32Array(16),Ch=new Float32Array(9),Ih=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Te(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),Re(e,n)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Te(e,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),Re(e,n)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Te(e,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Re(e,n)}}function Gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=od,r=xh):r=fd,e.setTexture2D(t||r,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||md,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pd,s)}function em(i){switch(i){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return tm}}function nm(i,t){i.uniform1fv(this.addr,t)}function im(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function sm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function rm(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function om(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cm(i,t){i.uniform1iv(this.addr,t)}function hm(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function fm(i,t){i.uniform1uiv(this.addr,t)}function pm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function mm(i,t){i.uniform4uiv(this.addr,t)}function _m(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fd,r[a])}function xm(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gd,r[a])}function Am(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||md,r[a])}function ym(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pd,r[a])}function vm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return um;case 5125:return fm;case 36294:return pm;case 36295:return gm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return ym}}var cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=em(e.type)}},hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vm(e.type)}},dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fo=/(\w+)(\])?(\[|\.)?/g;function wh(i,t){i.seq.push(t),i.map[t.id]=t}function Cm(i,t,e){let n=i.name,s=n.length;for(fo.lastIndex=0;;){let r=fo.exec(n),a=fo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wh(e,c===void 0?new cl(o,i,t):new hl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new dl(o),wh(e,d)),e=d}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Cm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Im=37297,wm=0;function bm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Mh=new qt;function Mm(i){ne._getMatrix(Mh,ne.workingColorSpace,i);let t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bm(i.getShaderSource(t),a)}else return s}function Em(i,t){let e=Mm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sm(i,t){let e;switch(t){case Ou:e="Linear";break;case Bu:e="Reinhard";break;case zu:e="Cineon";break;case Hu:e="ACESFilmic";break;case Gu:e="AgX";break;case Vl:e="Neutral";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sr=new R;function Tm(){ne.getLuminanceCoefficients(Sr);let i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Pm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Es(i){return i!==""}function Sh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Lm,km)}var Um=new Map;function km(i,t){let e=Zt[t];if(e===void 0){let n=Um.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}var Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(Nm,Fm)}function Fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Om(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function Vm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Om(e),c=Bm(e),h=zm(e),d=Hm(e),u=Vm(e),f=Rm(e),m=Pm(r),x=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Es).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(g=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Em("linearToOutputTexel",e.outputColorSpace),Tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=ul(a),a=Sh(a,e),a=Th(a,e),o=ul(o),o=Sh(o,e),o=Th(o,e),a=Rh(a),o=Rh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=v+g+a,_=v+p+o,P=bh(s,s.VERTEX_SHADER,A),b=bh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(D){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(b).trim(),j=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,b);else{let nt=Eh(s,P,"vertex"),G=Eh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+nt+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(N===""||O==="")&&(z=!1);z&&(D.diagnostics={runnable:j,programLog:V,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(b),E=new ss(s,x),w=Dm(s,x)}let E;this.getUniforms=function(){return E===void 0&&S(this),E};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Im)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=b,this}var Wm=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pl(t),e.set(t,n)),n}},pl=class{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}};function Xm(i,t,e,n,s,r,a){let o=new Os,l=new fl,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,y,D,V,N){let O=V.fog,j=N.geometry,z=w.isMeshStandardMaterial?V.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||z),G=nt&&nt.mapping===pa?nt.image.height:null,ht=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=ft!==void 0?ft.length:0,Nt=0;j.morphAttributes.position!==void 0&&(Nt=1),j.morphAttributes.normal!==void 0&&(Nt=2),j.morphAttributes.color!==void 0&&(Nt=3);let Jt,$,et,It;if(ht){let ae=In[ht];Jt=ae.vertexShader,$=ae.fragmentShader}else Jt=w.vertexShader,$=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),It=l.getFragmentShaderID(w);let lt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),St=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,Qt=!!w.map,K=!!w.matcap,rt=!!nt,T=!!w.aoMap,Mt=!!w.lightMap,it=!!w.bumpMap,Ct=!!w.normalMap,dt=!!w.displacementMap,Bt=!!w.emissiveMap,At=!!w.metalnessMap,M=!!w.roughnessMap,C=w.anisotropy>0,F=w.clearcoat>0,Z=w.dispersion>0,tt=w.iridescence>0,J=w.sheen>0,Tt=w.transmission>0,pt=C&&!!w.anisotropyMap,yt=F&&!!w.clearcoatMap,jt=F&&!!w.clearcoatNormalMap,at=F&&!!w.clearcoatRoughnessMap,wt=tt&&!!w.iridescenceMap,zt=tt&&!!w.iridescenceThicknessMap,Ht=J&&!!w.sheenColorMap,bt=J&&!!w.sheenRoughnessMap,ee=!!w.specularMap,$t=!!w.specularColorMap,fe=!!w.specularIntensityMap,L=Tt&&!!w.transmissionMap,gt=Tt&&!!w.thicknessMap,W=!!w.gradientMap,Q=!!w.alphaMap,xt=w.alphaTest>0,mt=!!w.alphaHash,Wt=!!w.extensions,we=ri;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(we=i.toneMapping);let Be={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:Jt,fragmentShader:$,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:It,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:St,instancingColor:St&&N.instanceColor!==null,instancingMorph:St&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:gs,alphaToCoverage:!!w.alphaToCoverage,map:Qt,matcap:K,envMap:rt,envMapMode:rt&&nt.mapping,envMapCubeUVHeight:G,aoMap:T,lightMap:Mt,bumpMap:it,normalMap:Ct,displacementMap:u&&dt,emissiveMap:Bt,normalMapObjectSpace:Ct&&w.normalMapType===Yu,normalMapTangentSpace:Ct&&w.normalMapType===ad,metalnessMap:At,roughnessMap:M,anisotropy:C,anisotropyMap:pt,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:jt,clearcoatRoughnessMap:at,dispersion:Z,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Ht,sheenRoughnessMap:bt,specularMap:ee,specularColorMap:$t,specularIntensityMap:fe,transmission:Tt,transmissionMap:L,thicknessMap:gt,gradientMap:W,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:mt,combine:w.combine,mapUv:Qt&&x(w.map.channel),aoMapUv:T&&x(w.aoMap.channel),lightMapUv:Mt&&x(w.lightMap.channel),bumpMapUv:it&&x(w.bumpMap.channel),normalMapUv:Ct&&x(w.normalMap.channel),displacementMapUv:dt&&x(w.displacementMap.channel),emissiveMapUv:Bt&&x(w.emissiveMap.channel),metalnessMapUv:At&&x(w.metalnessMap.channel),roughnessMapUv:M&&x(w.roughnessMap.channel),anisotropyMapUv:pt&&x(w.anisotropyMap.channel),clearcoatMapUv:yt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(w.sheenRoughnessMap.channel),specularMapUv:ee&&x(w.specularMap.channel),specularColorMapUv:$t&&x(w.specularColorMap.channel),specularIntensityMapUv:fe&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:gt&&x(w.thicknessMap.channel),alphaMapUv:Q&&x(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ct||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(Qt||Q),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ft,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:Qt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===he,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)===he,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ve,flipSided:w.side===ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)y.push(D),y.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(y,w),A(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function v(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function A(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let y=m[w.type],D;if(y){let V=In[y];D=kf.clone(V.uniforms)}else D=w.uniforms;return D}function P(w,y){let D;for(let V=0,N=h.length;V<N;V++){let O=h[V];if(O.cacheKey===y){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Gm(i,y,w,r),h.push(D)),D}function b(w){if(--w.usedTimes===0){let y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function S(w){l.remove(w)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:b,releaseShaderCache:S,programs:h,dispose:E}}function qm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ym(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,m,x,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function o(d,u,f,m,x,g){let p=a(d,u,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,x,g){let p=a(d,u,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Ym),n.length>1&&n.sort(u||Dh),s.length>1&&s.sort(u||Dh)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function $m(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lh,i.set(n,[a])):s>=r.length?(a=new Lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Kt};break;case"SpotLight":e={position:new R,direction:new R,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Jm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qm(i){let t=new Zm,e=Jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ye,a=new ye;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,A=0,_=0,P=0,b=0,S=0;c.sort(Km);for(let w=0,y=c.length;w<y;w++){let D=c[w],V=D.color,N=D.intensity,O=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*N,d+=V.g*N,u+=V.b*N;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],N);S++}else if(D.isDirectionalLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,G=e.get(D);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=z,f++}else if(D.isSpotLight){let z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(V).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[x]=z;let nt=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,nt.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[x]=nt.matrix,D.castShadow){let G=e.get(D);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,_++}x++}else if(D.isRectAreaLight){let z=t.get(D);z.color.copy(V).multiplyScalar(N),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=z,g++}else if(D.isPointLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let nt=D.shadow,G=e.get(D);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=D.shadow.matrix,A++}n.point[m]=z,m++}else if(D.isHemisphereLight){let z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(N),z.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let E=n.hash;(E.directionalLength!==f||E.pointLength!==m||E.spotLength!==x||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==v||E.numPointShadows!==A||E.numSpotShadows!==_||E.numSpotMaps!==P||E.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=_+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,E.directionalLength=f,E.pointLength=m,E.spotLength=x,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=v,E.numPointShadows=A,E.numSpotShadows=_,E.numSpotMaps=P,E.numLightProbes=S,n.version=jm++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let A=c[p];if(A.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(A.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(A.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(A.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(A.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(g),u++}else if(A.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Uh(i){let t=new Qm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function t_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Uh(i),t.set(s,[o])):r>=a.length?(o=new Uh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var gl=class extends Pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ml=class extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`;function i_(i,t,e){let n=new Bs,s=new ot,r=new ot,a=new de,o=new gl({depthPacking:qu}),l=new ml,c={},h=e.maxTextureSize,d={[oi]:ke,[ke]:oi,[ve]:ve},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:e_,fragmentShader:n_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new X(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let p=this.type;this.render=function(b,S,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let N=p!==zn&&this.type===zn,O=p===zn&&this.type!==zn;for(let j=0,z=b.length;j<z;j++){let nt=b[j],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||N===!0||O===!0){let vt=this.type!==zn?{minFilter:gn,magFilter:gn}:{};G.map!==null&&G.map.dispose(),G.map=new qn(s.x,s.y,vt),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ft=G.getViewportCount();for(let vt=0;vt<ft;vt++){let Nt=G.getViewport(vt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),V.viewport(a),G.updateMatrices(nt,vt),n=G.getFrustum(),_(S,E,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===zn&&v(G,E),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,y,D)};function v(b,S){let E=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qn(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,E,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,E,f,x,null)}function A(b,S,E,w){let y=null,D=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)y=D;else if(y=E.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let V=y.uuid,N=S.uuid,O=c[V];O===void 0&&(O={},c[V]=O);let j=O[N];j===void 0&&(j=y.clone(),O[N]=j,S.addEventListener("dispose",P)),y=j}if(y.visible=S.visible,y.wireframe=S.wireframe,w===zn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:d[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=E}return y}function _(b,S,E,w,y){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);let N=t.update(b),O=b.material;if(Array.isArray(O)){let j=N.groups;for(let z=0,nt=j.length;z<nt;z++){let G=j[z],ht=O[G.materialIndex];if(ht&&ht.visible){let ft=A(b,ht,w,y);b.onBeforeShadow(i,b,S,E,N,ft,G),i.renderBufferDirect(E,null,N,ft,b,G),b.onAfterShadow(i,b,S,E,N,ft,G)}}}else if(O.visible){let j=A(b,O,w,y);b.onBeforeShadow(i,b,S,E,N,j,null),i.renderBufferDirect(E,null,N,j,b,null),b.onAfterShadow(i,b,S,E,N,j,null)}}let V=b.children;for(let N=0,O=V.length;N<O;N++)_(V[N],S,E,w,y)}function P(b){b.target.removeEventListener("dispose",P);for(let E in c){let w=c[E],y=b.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}var s_={[vo]:Co,[Io]:Mo,[wo]:Eo,[rs]:bo,[Co]:vo,[Mo]:Io,[Eo]:wo,[bo]:rs};function r_(i,t){function e(){let L=!1,gt=new de,W=null,Q=new de(0,0,0,0);return{setMask:function(xt){W!==xt&&!L&&(i.colorMask(xt,xt,xt,xt),W=xt)},setLocked:function(xt){L=xt},setClear:function(xt,mt,Wt,we,Be){Be===!0&&(xt*=we,mt*=we,Wt*=we),gt.set(xt,mt,Wt,we),Q.equals(gt)===!1&&(i.clearColor(xt,mt,Wt,we),Q.copy(gt))},reset:function(){L=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,gt=!1,W=null,Q=null,xt=null;return{setReversed:function(mt){if(gt!==mt){let Wt=t.get("EXT_clip_control");gt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let we=xt;xt=null,this.setClear(we)}gt=mt},getReversed:function(){return gt},setTest:function(mt){mt?lt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(mt){W!==mt&&!L&&(i.depthMask(mt),W=mt)},setFunc:function(mt){if(gt&&(mt=s_[mt]),Q!==mt){switch(mt){case vo:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case Eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=mt}},setLocked:function(mt){L=mt},setClear:function(mt){xt!==mt&&(gt&&(mt=1-mt),i.clearDepth(mt),xt=mt)},reset:function(){L=!1,W=null,Q=null,xt=null,gt=!1}}}function s(){let L=!1,gt=null,W=null,Q=null,xt=null,mt=null,Wt=null,we=null,Be=null;return{setTest:function(ae){L||(ae?lt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ae){gt!==ae&&!L&&(i.stencilMask(ae),gt=ae)},setFunc:function(ae,ln,Ln){(W!==ae||Q!==ln||xt!==Ln)&&(i.stencilFunc(ae,ln,Ln),W=ae,Q=ln,xt=Ln)},setOp:function(ae,ln,Ln){(mt!==ae||Wt!==ln||we!==Ln)&&(i.stencilOp(ae,ln,Ln),mt=ae,Wt=ln,we=Ln)},setLocked:function(ae){L=ae},setClear:function(ae){Be!==ae&&(i.clearStencil(ae),Be=ae)},reset:function(){L=!1,gt=null,W=null,Q=null,xt=null,mt=null,Wt=null,we=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,A=null,_=null,P=null,b=null,S=new Kt(0,0,0),E=0,w=!1,y=null,D=null,V=null,N=null,O=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,nt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=nt>=2);let ht=null,ft={},vt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Jt=new de().fromArray(vt),$=new de().fromArray(Nt);function et(L,gt,W,Q){let xt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(L,mt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<W;Wt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(gt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return mt}let It={};It[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(rs),it(!1),Ct(Nc),lt(i.CULL_FACE),T(si);function lt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ft(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function St(L,gt){return d[L]!==gt?(i.bindFramebuffer(L,gt),d[L]=gt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ot(L,gt){let W=f,Q=!1;if(L){W=u.get(gt),W===void 0&&(W=[],u.set(gt,W));let xt=L.textures;if(W.length!==xt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Wt=xt.length;mt<Wt;mt++)W[mt]=i.COLOR_ATTACHMENT0+mt;W.length=xt.length,Q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Q=!0);Q&&i.drawBuffers(W)}function Qt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let K={[Mi]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};K[vu]=i.MIN,K[Cu]=i.MAX;let rt={[Iu]:i.ZERO,[wu]:i.ONE,[bu]:i.SRC_COLOR,[Ao]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function T(L,gt,W,Q,xt,mt,Wt,we,Be,ae){if(L===si){x===!0&&(Ft(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),L!==xu){if(L!==g||ae!==w){if((p!==Mi||_!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,_=Mi),ae)switch(L){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,A=null,P=null,b=null,S.set(0,0,0),E=0,g=L,w=ae}return}xt=xt||gt,mt=mt||W,Wt=Wt||Q,(gt!==p||xt!==_)&&(i.blendEquationSeparate(K[gt],K[xt]),p=gt,_=xt),(W!==v||Q!==A||mt!==P||Wt!==b)&&(i.blendFuncSeparate(rt[W],rt[Q],rt[mt],rt[Wt]),v=W,A=Q,P=mt,b=Wt),(we.equals(S)===!1||Be!==E)&&(i.blendColor(we.r,we.g,we.b,Be),S.copy(we),E=Be),g=L,w=!1}function Mt(L,gt){L.side===ve?Ft(i.CULL_FACE):lt(i.CULL_FACE);let W=L.side===ke;gt&&(W=!W),it(W),L.blending===es&&L.transparent===!1?T(si):T(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Ct(L){L!==mu?(lt(i.CULL_FACE),L!==D&&(L===Nc?i.cullFace(i.BACK):L===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),D=L}function dt(L){L!==V&&(z&&i.lineWidth(L),V=L)}function Bt(L,gt,W){L?(lt(i.POLYGON_OFFSET_FILL),(N!==gt||O!==W)&&(i.polygonOffset(gt,W),N=gt,O=W)):Ft(i.POLYGON_OFFSET_FILL)}function At(L){L?lt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function M(L){L===void 0&&(L=i.TEXTURE0+j-1),ht!==L&&(i.activeTexture(L),ht=L)}function C(L,gt,W){W===void 0&&(ht===null?W=i.TEXTURE0+j-1:W=ht);let Q=ft[W];Q===void 0&&(Q={type:void 0,texture:void 0},ft[W]=Q),(Q.type!==L||Q.texture!==gt)&&(ht!==W&&(i.activeTexture(W),ht=W),i.bindTexture(L,gt||It[L]),Q.type=L,Q.texture=gt)}function F(){let L=ft[ht];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(L){Jt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function bt(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function ee(L,gt){let W=c.get(gt);W===void 0&&(W=new WeakMap,c.set(gt,W));let Q=W.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(gt,L.name),W.set(L,Q))}function $t(L,gt){let Q=c.get(gt).get(L);l.get(gt)!==Q&&(i.uniformBlockBinding(gt,Q,L.__bindingPointIndex),l.set(gt,Q))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,ft={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,A=null,_=null,P=null,b=null,S=new Kt(0,0,0),E=0,w=!1,y=null,D=null,V=null,N=null,O=null,Jt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ft,bindFramebuffer:St,drawBuffers:Ot,useProgram:Qt,setBlending:T,setMaterial:Mt,setFlipSided:it,setCullFace:Ct,setLineWidth:dt,setPolygonOffset:Bt,setScissorTest:At,activeTexture:M,bindTexture:C,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:wt,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:$t,texStorage2D:jt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Ht,viewport:bt,reset:fe}}function kh(i,t,e,n){let s=a_(n);switch(e){case Qh:return i*t;case ed:return i*t;case nd:return i*t*2;case id:return i*t/s.components*s.byteLength;case ql:return i*t/s.components*s.byteLength;case sd:return i*t*2/s.components*s.byteLength;case Yl:return i*t*2/s.components*s.byteLength;case td:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case $l:return i*t*4/s.components*s.byteLength;case Lr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Po:case Lo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Ko:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rd:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a_(i){switch(i){case Xn:case Jh:return{byteLength:1,components:1};case Us:case jh:case $s:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case Ri:case Gl:case Vn:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function o_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,C){return f?new OffscreenCanvas(M,C):Ns("canvas")}function x(M,C,F){let Z=1,tt=At(M);if((tt.width>F||tt.height>F)&&(Z=F/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let J=Math.floor(Z*tt.width),Tt=Math.floor(Z*tt.height);d===void 0&&(d=m(J,Tt));let pt=C?m(J,Tt):d;return pt.width=J,pt.height=Tt,pt.getContext("2d").drawImage(M,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Tt+")."),pt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function v(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(M,C,F,Z,tt=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=C;if(C===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),C===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),C===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),C===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),C===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),C===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),C===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),C===i.RGBA){let Tt=tt?ga:ne.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=Tt===he?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(M,C){let F;return M?C===null||C===Ri||C===ls?F=i.DEPTH24_STENCIL8:C===Vn?F=i.DEPTH32F_STENCIL8:C===Us&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ri||C===ls?F=i.DEPTH_COMPONENT24:C===Vn?F=i.DEPTH_COMPONENT32F:C===Us&&(F=i.DEPTH_COMPONENT16),F}function P(M,C){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==gn&&M.minFilter!==en?Math.log2(Math.max(C.width,C.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?C.mipmaps.length:1}function b(M){let C=M.target;C.removeEventListener("dispose",b),E(C),C.isVideoTexture&&h.delete(C)}function S(M){let C=M.target;C.removeEventListener("dispose",S),y(C)}function E(M){let C=n.get(M);if(C.__webglInit===void 0)return;let F=M.source,Z=u.get(F);if(Z){let tt=Z[C.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(M),Object.keys(Z).length===0&&u.delete(F)}n.remove(M)}function w(M){let C=n.get(M);i.deleteTexture(C.__webglTexture);let F=M.source,Z=u.get(F);delete Z[C.__cacheKey],a.memory.textures--}function y(M){let C=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(C.__webglFramebuffer[Z]))for(let tt=0;tt<C.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(C.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(C.__webglFramebuffer[Z]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[Z])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z=0;Z<C.__webglFramebuffer.length;Z++)i.deleteFramebuffer(C.__webglFramebuffer[Z]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Z=0;Z<C.__webglColorRenderbuffer.length;Z++)C.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[Z]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let F=M.textures;for(let Z=0,tt=F.length;Z<tt;Z++){let J=n.get(F[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(M)}let D=0;function V(){D=0}function N(){let M=D;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function O(M){let C=[];return C.push(M.wrapS),C.push(M.wrapT),C.push(M.wrapR||0),C.push(M.magFilter),C.push(M.minFilter),C.push(M.anisotropy),C.push(M.internalFormat),C.push(M.format),C.push(M.type),C.push(M.generateMipmaps),C.push(M.premultiplyAlpha),C.push(M.flipY),C.push(M.unpackAlignment),C.push(M.colorSpace),C.join()}function j(M,C){let F=n.get(M);if(M.isVideoTexture&&dt(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,M,C);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+C)}function z(M,C){let F=n.get(M);if(M.version>0&&F.__version!==M.version){$(F,M,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+C)}function nt(M,C){let F=n.get(M);if(M.version>0&&F.__version!==M.version){$(F,M,C);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+C)}function G(M,C){let F=n.get(M);if(M.version>0&&F.__version!==M.version){et(F,M,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+C)}let ht={[wn]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},ft={[gn]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},vt={[$u]:i.NEVER,[tf]:i.ALWAYS,[Zu]:i.LESS,[od]:i.LEQUAL,[Ju]:i.EQUAL,[Qu]:i.GEQUAL,[ju]:i.GREATER,[Ku]:i.NOTEQUAL};function Nt(M,C){if(C.type===Vn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===en||C.magFilter===Ba||C.magFilter===lr||C.magFilter===Hn||C.minFilter===en||C.minFilter===Ba||C.minFilter===lr||C.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ht[C.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ht[C.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ht[C.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ft[C.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,vt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===gn||C.minFilter!==lr&&C.minFilter!==Hn||C.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Jt(M,C){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,C.addEventListener("dispose",b));let Z=C.source,tt=u.get(Z);tt===void 0&&(tt={},u.set(Z,tt));let J=O(C);if(J!==M.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),tt[J].usedTimes++;let Tt=tt[M.__cacheKey];Tt!==void 0&&(tt[M.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(C)),M.__cacheKey=J,M.__webglTexture=tt[J].texture}return F}function $(M,C,F){let Z=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Z=i.TEXTURE_3D);let tt=Jt(M,C),J=C.source;e.bindTexture(Z,M.__webglTexture,i.TEXTURE0+F);let Tt=n.get(J);if(J.version!==Tt.__version||tt===!0){e.activeTexture(i.TEXTURE0+F);let pt=ne.getPrimaries(ne.workingColorSpace),yt=C.colorSpace===ii?null:ne.getPrimaries(C.colorSpace),jt=C.colorSpace===ii||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let at=x(C.image,!1,s.maxTextureSize);at=Bt(C,at);let wt=r.convert(C.format,C.colorSpace),zt=r.convert(C.type),Ht=A(C.internalFormat,wt,zt,C.colorSpace,C.isVideoTexture);Nt(Z,C);let bt,ee=C.mipmaps,$t=C.isVideoTexture!==!0,fe=Tt.__version===void 0||tt===!0,L=J.dataReady,gt=P(C,at);if(C.isDepthTexture)Ht=_(C.format===cs,C.type),fe&&($t?e.texStorage2D(i.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,wt,zt,null));else if(C.isDataTexture)if(ee.length>0){$t&&fe&&e.texStorage2D(i.TEXTURE_2D,gt,Ht,ee[0].width,ee[0].height);for(let W=0,Q=ee.length;W<Q;W++)bt=ee[W],$t?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,wt,zt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,wt,zt,bt.data);C.generateMipmaps=!1}else $t?(fe&&e.texStorage2D(i.TEXTURE_2D,gt,Ht,at.width,at.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,wt,zt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,wt,zt,at.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){$t&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ht,ee[0].width,ee[0].height,at.depth);for(let W=0,Q=ee.length;W<Q;W++)if(bt=ee[W],C.format!==pn)if(wt!==null)if($t){if(L)if(C.layerUpdates.size>0){let xt=kh(bt.width,bt.height,C.format,C.type);for(let mt of C.layerUpdates){let Wt=bt.data.subarray(mt*xt/bt.data.BYTES_PER_ELEMENT,(mt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,mt,bt.width,bt.height,1,wt,Wt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,at.depth,wt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ht,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,at.depth,wt,zt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ht,bt.width,bt.height,at.depth,0,wt,zt,bt.data)}else{$t&&fe&&e.texStorage2D(i.TEXTURE_2D,gt,Ht,ee[0].width,ee[0].height);for(let W=0,Q=ee.length;W<Q;W++)bt=ee[W],C.format!==pn?wt!==null?$t?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,wt,zt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ht,bt.width,bt.height,0,wt,zt,bt.data)}else if(C.isDataArrayTexture)if($t){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ht,at.width,at.height,at.depth),L)if(C.layerUpdates.size>0){let W=kh(at.width,at.height,C.format,C.type);for(let Q of C.layerUpdates){let xt=at.data.subarray(Q*W/at.data.BYTES_PER_ELEMENT,(Q+1)*W/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,wt,zt,xt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,zt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,wt,zt,at.data);else if(C.isData3DTexture)$t?(fe&&e.texStorage3D(i.TEXTURE_3D,gt,Ht,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,zt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,wt,zt,at.data);else if(C.isFramebufferTexture){if(fe)if($t)e.texStorage2D(i.TEXTURE_2D,gt,Ht,at.width,at.height);else{let W=at.width,Q=at.height;for(let xt=0;xt<gt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ht,W,Q,0,wt,zt,null),W>>=1,Q>>=1}}else if(ee.length>0){if($t&&fe){let W=At(ee[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ht,W.width,W.height)}for(let W=0,Q=ee.length;W<Q;W++)bt=ee[W],$t?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,wt,zt,bt):e.texImage2D(i.TEXTURE_2D,W,Ht,wt,zt,bt);C.generateMipmaps=!1}else if($t){if(fe){let W=At(at);e.texStorage2D(i.TEXTURE_2D,gt,Ht,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,zt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ht,wt,zt,at);g(C)&&p(Z),Tt.__version=J.version,C.onUpdate&&C.onUpdate(C)}M.__version=C.version}function et(M,C,F){if(C.image.length!==6)return;let Z=Jt(M,C),tt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+F);let J=n.get(tt);if(tt.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);let Tt=ne.getPrimaries(ne.workingColorSpace),pt=C.colorSpace===ii?null:ne.getPrimaries(C.colorSpace),yt=C.colorSpace===ii||Tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let jt=C.isCompressedTexture||C.image[0].isCompressedTexture,at=C.image[0]&&C.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!jt&&!at?wt[Q]=x(C.image[Q],!0,s.maxCubemapSize):wt[Q]=at?C.image[Q].image:C.image[Q],wt[Q]=Bt(C,wt[Q]);let zt=wt[0],Ht=r.convert(C.format,C.colorSpace),bt=r.convert(C.type),ee=A(C.internalFormat,Ht,bt,C.colorSpace),$t=C.isVideoTexture!==!0,fe=J.__version===void 0||Z===!0,L=tt.dataReady,gt=P(C,zt);Nt(i.TEXTURE_CUBE_MAP,C);let W;if(jt){$t&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ee,zt.width,zt.height);for(let Q=0;Q<6;Q++){W=wt[Q].mipmaps;for(let xt=0;xt<W.length;xt++){let mt=W[xt];C.format!==pn?Ht!==null?$t?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,mt.width,mt.height,Ht,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,ee,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,mt.width,mt.height,Ht,bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,ee,mt.width,mt.height,0,Ht,bt,mt.data)}}}else{if(W=C.mipmaps,$t&&fe){W.length>0&&gt++;let Q=At(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ee,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Ht,bt,wt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,wt[Q].width,wt[Q].height,0,Ht,bt,wt[Q].data);for(let xt=0;xt<W.length;xt++){let Wt=W[xt].image[Q].image;$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Wt.width,Wt.height,Ht,bt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,ee,Wt.width,Wt.height,0,Ht,bt,Wt.data)}}else{$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ht,bt,wt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,Ht,bt,wt[Q]);for(let xt=0;xt<W.length;xt++){let mt=W[xt];$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Ht,bt,mt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,ee,Ht,bt,mt.image[Q])}}}g(C)&&p(i.TEXTURE_CUBE_MAP),J.__version=tt.version,C.onUpdate&&C.onUpdate(C)}M.__version=C.version}function It(M,C,F,Z,tt,J){let Tt=r.convert(F.format,F.colorSpace),pt=r.convert(F.type),yt=A(F.internalFormat,Tt,pt,F.colorSpace),jt=n.get(C),at=n.get(F);if(at.__renderTarget=C,!jt.__hasExternalTextures){let wt=Math.max(1,C.width>>J),zt=Math.max(1,C.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,yt,wt,zt,C.depth,0,Tt,pt,null):e.texImage2D(tt,J,yt,wt,zt,0,Tt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Ct(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,at.__webglTexture,0,it(C)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(M,C,F){if(i.bindRenderbuffer(i.RENDERBUFFER,M),C.depthBuffer){let Z=C.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,J=_(C.stencilBuffer,tt),Tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=it(C);Ct(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,C.width,C.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,J,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,M)}else{let Z=C.textures;for(let tt=0;tt<Z.length;tt++){let J=Z[tt],Tt=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),yt=A(J.internalFormat,Tt,pt,J.colorSpace),jt=it(C);F&&Ct(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,yt,C.width,C.height):Ct(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,yt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,yt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(M,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(C.depthTexture);Z.__renderTarget=C,(!Z.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),j(C.depthTexture,0);let tt=Z.__webglTexture,J=it(C);if(C.depthTexture.format===ns)Ct(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(C.depthTexture.format===cs)Ct(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function St(M){let C=n.get(M),F=M.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==M.depthTexture){let Z=M.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Z){let tt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),C.__depthDisposeCallback=tt}C.__boundDepthTexture=Z}if(M.depthTexture&&!C.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ft(C.__webglFramebuffer,M)}else if(F){C.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Z]),C.__webglDepthbuffer[Z]===void 0)C.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(C.__webglDepthbuffer[Z],M,!1);else{let tt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),lt(C.__webglDepthbuffer,M,!1);else{let Z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(M,C,F){let Z=n.get(M);C!==void 0&&It(Z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&St(M)}function Qt(M){let C=M.texture,F=n.get(M),Z=n.get(C);M.addEventListener("dispose",S);let tt=M.textures,J=M.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=C.version,a.memory.textures++),J){F.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0){F.__webglFramebuffer[pt]=[];for(let yt=0;yt<C.mipmaps.length;yt++)F.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else F.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){F.__webglFramebuffer=[];for(let pt=0;pt<C.mipmaps.length;pt++)F.__webglFramebuffer[pt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let pt=0,yt=tt.length;pt<yt;pt++){let jt=n.get(tt[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Ct(M)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){let yt=tt[pt];F.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[pt]);let jt=r.convert(yt.format,yt.colorSpace),at=r.convert(yt.type),wt=A(yt.internalFormat,jt,at,yt.colorSpace,M.isXRRenderTarget===!0),zt=it(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,wt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,F.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,C);for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0)for(let yt=0;yt<C.mipmaps.length;yt++)It(F.__webglFramebuffer[pt][yt],M,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else It(F.__webglFramebuffer[pt],M,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(C)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,yt=tt.length;pt<yt;pt++){let jt=tt[pt],at=n.get(jt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Nt(i.TEXTURE_2D,jt),It(F.__webglFramebuffer,M,jt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),Nt(pt,C),C.mipmaps&&C.mipmaps.length>0)for(let yt=0;yt<C.mipmaps.length;yt++)It(F.__webglFramebuffer[yt],M,C,i.COLOR_ATTACHMENT0,pt,yt);else It(F.__webglFramebuffer,M,C,i.COLOR_ATTACHMENT0,pt,0);g(C)&&p(pt),e.unbindTexture()}M.depthBuffer&&St(M)}function K(M){let C=M.textures;for(let F=0,Z=C.length;F<Z;F++){let tt=C[F];if(g(tt)){let J=v(M),Tt=n.get(tt).__webglTexture;e.bindTexture(J,Tt),p(J),e.unbindTexture()}}}let rt=[],T=[];function Mt(M){if(M.samples>0){if(Ct(M)===!1){let C=M.textures,F=M.width,Z=M.height,tt=i.COLOR_BUFFER_BIT,J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(M),pt=C.length>1;if(pt)for(let yt=0;yt<C.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<C.length;yt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let jt=n.get(C[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,tt,i.NEAREST),l===!0&&(rt.length=0,T.length=0,rt.push(i.COLOR_ATTACHMENT0+yt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(rt.push(J),T.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<C.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let jt=n.get(C[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let C=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function it(M){return Math.min(s.maxSamples,M.samples)}function Ct(M){let C=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function dt(M){let C=a.render.frame;h.get(M)!==C&&(h.set(M,C),M.update())}function Bt(M,C){let F=M.colorSpace,Z=M.format,tt=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==gs&&F!==ii&&(ne.getTransfer(F)===he?(Z!==pn||tt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),C}function At(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ct}function l_(i,t){function e(n,s=ii){let r,a=ne.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return i.BYTE;if(n===jh)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===td)return i.RGB;if(n===pn)return i.RGBA;if(n===ed)return i.LUMINANCE;if(n===nd)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===id)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===sd)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===Lr||n===Ur||n===kr||n===Nr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Do||n===Lo||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===No)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oo||n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Ko||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _l=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Rt=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:h_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=new xl,g=e.getContextAttributes(),p=null,v=null,A=[],_=[],P=new ot,b=null,S=new Ve;S.viewport=new de;let E=new Ve;E.viewport=new de;let w=[S,E],y=new _l,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=A[$];return et===void 0&&(et=new Rs,A[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=A[$];return et===void 0&&(et=new Rs,A[$]=et),et.getGripSpace()},this.getHand=function($){let et=A[$];return et===void 0&&(et=new Rs,A[$]=et),et.getHandSpace()};function N($){let et=_.indexOf($.inputSource);if(et===-1)return;let It=A[et];It!==void 0&&(It.update($.inputSource,$.frame,c||a),It.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let $=0;$<A.length;$++){let et=_[$];et!==null&&(_[$]=null,A[$].disconnect(et))}D=null,V=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new qn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,It=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?cs:ns,It=g.stencil?ls:Ri);let Ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new qn(u.textureWidth,u.textureHeight,{format:pn,type:Xn,depthTexture:new $r(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j($){for(let et=0;et<$.removed.length;et++){let It=$.removed[et],lt=_.indexOf(It);lt>=0&&(_[lt]=null,A[lt].disconnect(It))}for(let et=0;et<$.added.length;et++){let It=$.added[et],lt=_.indexOf(It);if(lt===-1){for(let St=0;St<A.length;St++)if(St>=_.length){_.push(It),lt=St;break}else if(_[St]===null){_[St]=It,lt=St;break}if(lt===-1)break}let Ft=A[lt];Ft&&Ft.connect(It)}}let z=new R,nt=new R;function G($,et,It){z.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(It.matrixWorld);let lt=z.distanceTo(nt),Ft=et.projectionMatrix.elements,St=It.projectionMatrix.elements,Ot=Ft[14]/(Ft[10]-1),Qt=Ft[14]/(Ft[10]+1),K=(Ft[9]+1)/Ft[5],rt=(Ft[9]-1)/Ft[5],T=(Ft[8]-1)/Ft[0],Mt=(St[8]+1)/St[0],it=Ot*T,Ct=Ot*Mt,dt=lt/(-T+Mt),Bt=dt*-T;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let At=Ot+dt,M=Qt+dt,C=it-Bt,F=Ct+(lt-Bt),Z=K*Qt/M*At,tt=rt*Qt/M*At;$.projectionMatrix.makePerspective(C,F,Z,tt,At,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,It=$.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(It=x.depthFar)),y.near=E.near=S.near=et,y.far=E.far=S.far=It,(D!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,V=y.far),S.layers.mask=$.layers.mask|2,E.layers.mask=$.layers.mask|4,y.layers.mask=S.layers.mask|E.layers.mask;let lt=$.parent,Ft=y.cameras;ht(y,lt);for(let St=0;St<Ft.length;St++)ht(Ft[St],lt);Ft.length===2?G(y,S,E):y.projectionMatrix.copy(S.projectionMatrix),ft($,y,lt)};function ft($,et,It){It===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(It.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let vt=null;function Nt($,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let lt=!1;It.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let St=0;St<It.length;St++){let Ot=It[St],Qt=null;if(f!==null)Qt=f.getViewport(Ot);else{let rt=d.getViewSubImage(u,Ot);Qt=rt.viewport,St===0&&(t.setRenderTargetTextures(v,rt.colorTexture,u.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(v))}let K=w[St];K===void 0&&(K=new Ve,K.layers.enable(St),K.viewport=new de,w[St]=K),K.matrix.fromArray(Ot.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ot.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),St===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(K)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let St=d.getDepthInformation(It[0]);St&&St.isValid&&St.texture&&x.init(t,St,s.renderState)}}for(let It=0;It<A.length;It++){let lt=_[It],Ft=A[It];lt!==null&&Ft!==void 0&&Ft.update(lt,et,c||a)}vt&&vt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let Jt=new ud;Jt.setAnimationLoop(Nt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}},wi=new Mn,u_=new ye;function f_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,dd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,A,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),A=v.envMap,_=v.envMapRotation;A&&(g.envMap.value=A,wi.copy(_),wi.x*=-1,wi.y*=-1,wi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(wi)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let _=A.program;n.uniformBlockBinding(v,_)}function c(v,A){let _=s[v.id];_===void 0&&(m(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let P=A.program;n.updateUBOMapping(v,P);let b=t.render.frame;r[v.id]!==b&&(u(v),r[v.id]=b)}function h(v){let A=d();v.__bindingPointIndex=A;let _=i.createBuffer(),P=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,_),_}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],_=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,S=_.length;b<S;b++){let E=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,y=E.length;w<y;w++){let D=E[w];if(f(D,b,w,P)===!0){let V=D.__offset,N=Array.isArray(D.value)?D.value:[D.value],O=0;for(let j=0;j<N.length;j++){let z=N[j],nt=x(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+O,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,O),O+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,A,_,P){let b=v.value,S=A+"_"+_;if(P[S]===void 0)return typeof b=="number"||typeof b=="boolean"?P[S]=b:P[S]=b.clone(),!0;{let E=P[S];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return P[S]=b,!0}else if(E.equals(b)===!1)return E.copy(b),!0}return!1}function m(v){let A=v.uniforms,_=0,P=16;for(let S=0,E=A.length;S<E;S++){let w=Array.isArray(A[S])?A[S]:[A[S]];for(let y=0,D=w.length;y<D;y++){let V=w[y],N=Array.isArray(V.value)?V.value:[V.value];for(let O=0,j=N.length;O<j;O++){let z=N[O],nt=x(z),G=_%P,ht=G%nt.boundary,ft=G+ht;_+=ht,ft!==0&&P-ft<nt.storage&&(_+=P-ft),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=nt.storage}}}let b=_%P;return b>0&&(_+=P-b),v.__size=_,v.__cache={},this}function x(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),A}function g(v){let A=v.target;A.removeEventListener("dispose",g);let _=a.indexOf(A.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Zr=class{constructor(t={}){let{canvas:e=xf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this.toneMapping=ri,this.toneMappingExposure=1;let _=this,P=!1,b=0,S=0,E=null,w=-1,y=null,D=new de,V=new de,N=null,O=new Kt(0),j=0,z=e.width,nt=e.height,G=1,ht=null,ft=null,vt=new de(0,0,z,nt),Nt=new de(0,0,z,nt),Jt=!1,$=new Bs,et=!1,It=!1,lt=new ye,Ft=new ye,St=new R,Ot=new de,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function rt(){return E===null?G:1}let T=n;function Mt(I,U){return e.getContext(I,U)}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),T===null){let U="webgl2";if(T=Mt(U,I),T===null)throw Mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let it,Ct,dt,Bt,At,M,C,F,Z,tt,J,Tt,pt,yt,jt,at,wt,zt,Ht,bt,ee,$t,fe,L;function gt(){it=new Rg(T),it.init(),$t=new l_(T,it),Ct=new wg(T,it,t,$t),dt=new r_(T,it),Ct.reverseDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),Bt=new Lg(T),At=new qm,M=new o_(T,it,dt,At,Ct,$t,Bt),C=new Mg(_),F=new Tg(_),Z=new zf(T),fe=new Cg(T,Z),tt=new Pg(T,Z,Bt,fe),J=new kg(T,tt,Z,Bt),Ht=new Ug(T,Ct,M),at=new bg(At),Tt=new Xm(_,C,F,it,Ct,fe,at),pt=new f_(_,At),yt=new $m,jt=new t_(it),zt=new vg(_,C,F,dt,J,f,l),wt=new i_(_,J,Ct),L=new p_(T,Bt,Ct,dt),bt=new Ig(T,it,Bt),ee=new Dg(T,it,Bt),Bt.programs=Tt.programs,_.capabilities=Ct,_.extensions=it,_.properties=At,_.renderLists=yt,_.shadowMap=wt,_.state=dt,_.info=Bt}gt();let W=new Al(_,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(z,nt,!1))},this.getSize=function(I){return I.set(z,nt)},this.setSize=function(I,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,nt=U,e.width=Math.floor(I*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=I+"px",e.style.height=U+"px"),this.setViewport(0,0,I,U)},this.getDrawingBufferSize=function(I){return I.set(z*G,nt*G).floor()},this.setDrawingBufferSize=function(I,U,B){z=I,nt=U,G=B,e.width=Math.floor(I*B),e.height=Math.floor(U*B),this.setViewport(0,0,I,U)},this.getCurrentViewport=function(I){return I.copy(D)},this.getViewport=function(I){return I.copy(vt)},this.setViewport=function(I,U,B,H){I.isVector4?vt.set(I.x,I.y,I.z,I.w):vt.set(I,U,B,H),dt.viewport(D.copy(vt).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(Nt)},this.setScissor=function(I,U,B,H){I.isVector4?Nt.set(I.x,I.y,I.z,I.w):Nt.set(I,U,B,H),dt.scissor(V.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(I){dt.setScissorTest(Jt=I)},this.setOpaqueSort=function(I){ht=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,U=!0,B=!0){let H=0;if(I){let k=!1;if(E!==null){let ct=E.texture.format;k=ct===$l||ct===Yl||ct===ql}if(k){let ct=E.texture.type,_t=ct===Xn||ct===Ri||ct===Us||ct===ls||ct===Wl||ct===Xl,Dt=zt.getClearColor(),Lt=zt.getClearAlpha(),Vt=Dt.r,Xt=Dt.g,Ut=Dt.b;_t?(m[0]=Vt,m[1]=Xt,m[2]=Ut,m[3]=Lt,T.clearBufferuiv(T.COLOR,0,m)):(x[0]=Vt,x[1]=Xt,x[2]=Ut,x[3]=Lt,T.clearBufferiv(T.COLOR,0,x))}else H|=T.COLOR_BUFFER_BIT}U&&(H|=T.DEPTH_BUFFER_BIT),B&&(H|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),jt.dispose(),At.dispose(),C.dispose(),F.dispose(),J.dispose(),fe.dispose(),L.dispose(),Tt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Sc),W.removeEventListener("sessionend",Tc),xi.stop()};function Q(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let I=Bt.autoReset,U=wt.enabled,B=wt.autoUpdate,H=wt.needsUpdate,k=wt.type;gt(),Bt.autoReset=I,wt.enabled=U,wt.autoUpdate=B,wt.needsUpdate=H,wt.type=k}function mt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Wt(I){let U=I.target;U.removeEventListener("dispose",Wt),we(U)}function we(I){Be(I),At.remove(I)}function Be(I){let U=At.get(I).programs;U!==void 0&&(U.forEach(function(B){Tt.releaseProgram(B)}),I.isShaderMaterial&&Tt.releaseShaderCache(I))}this.renderBufferDirect=function(I,U,B,H,k,ct){U===null&&(U=Qt);let _t=k.isMesh&&k.matrixWorld.determinant()<0,Dt=fu(I,U,B,H,k);dt.setMaterial(H,_t);let Lt=B.index,Vt=1;if(H.wireframe===!0){if(Lt=tt.getWireframeAttribute(B),Lt===void 0)return;Vt=2}let Xt=B.drawRange,Ut=B.attributes.position,ie=Xt.start*Vt,pe=(Xt.start+Xt.count)*Vt;ct!==null&&(ie=Math.max(ie,ct.start*Vt),pe=Math.min(pe,(ct.start+ct.count)*Vt)),Lt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Lt.count)):Ut!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Ut.count));let me=pe-ie;if(me<0||me===1/0)return;fe.setup(k,H,Dt,B,Lt);let Je,se=bt;if(Lt!==null&&(Je=Z.get(Lt),se=ee,se.setIndex(Je)),k.isMesh)H.wireframe===!0?(dt.setLineWidth(H.wireframeLinewidth*rt()),se.setMode(T.LINES)):se.setMode(T.TRIANGLES);else if(k.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),dt.setLineWidth(kt*rt()),k.isLineSegments?se.setMode(T.LINES):k.isLineLoop?se.setMode(T.LINE_LOOP):se.setMode(T.LINE_STRIP)}else k.isPoints?se.setMode(T.POINTS):k.isSprite&&se.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)se.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let kt=k._multiDrawStarts,Un=k._multiDrawCounts,re=k._multiDrawCount,cn=Lt?Z.get(Lt).bytesPerElement:1,Fi=At.get(H).currentProgram.getUniforms();for(let Ke=0;Ke<re;Ke++)Fi.setValue(T,"_gl_DrawID",Ke),se.render(kt[Ke]/cn,Un[Ke])}else if(k.isInstancedMesh)se.renderInstances(ie,me,k.count);else if(B.isInstancedBufferGeometry){let kt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Un=Math.min(B.instanceCount,kt);se.renderInstances(ie,me,Un)}else se.render(ie,me)};function ae(I,U,B){I.transparent===!0&&I.side===ve&&I.forceSinglePass===!1?(I.side=ke,I.needsUpdate=!0,or(I,U,B),I.side=oi,I.needsUpdate=!0,or(I,U,B),I.side=ve):or(I,U,B)}this.compile=function(I,U,B=null){B===null&&(B=I),p=jt.get(B),p.init(U),A.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),I!==B&&I.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let H=new Set;return I.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ct=k.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Dt=ct[_t];ae(Dt,B,k),H.add(Dt)}else ae(ct,B,k),H.add(ct)}),A.pop(),p=null,H},this.compileAsync=function(I,U,B=null){let H=this.compile(I,U,B);return new Promise(k=>{function ct(){if(H.forEach(function(_t){At.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){k(I);return}setTimeout(ct,10)}it.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ln=null;function Ln(I){ln&&ln(I)}function Sc(){xi.stop()}function Tc(){xi.start()}let xi=new ud;xi.setAnimationLoop(Ln),typeof self!="undefined"&&xi.setContext(self),this.setAnimationLoop=function(I){ln=I,W.setAnimationLoop(I),I===null?xi.stop():xi.start()},W.addEventListener("sessionstart",Sc),W.addEventListener("sessionend",Tc),this.render=function(I,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,U,E),p=jt.get(I,A.length),p.init(U),A.push(p),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ft),It=this.localClippingEnabled,et=at.init(this.clippingPlanes,It),g=yt.get(I,v.length),g.init(),v.push(g),W.enabled===!0&&W.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&Oa(ct,U,-1/0,_.sortObjects)}Oa(I,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ht,ft),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&zt.addToRenderList(g,I),this.info.render.frame++,et===!0&&at.beginShadows();let B=p.state.shadowsArray;wt.render(B,I,U),et===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,k=g.transmissive;if(p.setupLights(),U.isArrayCamera){let ct=U.cameras;if(k.length>0)for(let _t=0,Dt=ct.length;_t<Dt;_t++){let Lt=ct[_t];Pc(H,k,I,Lt)}K&&zt.render(I);for(let _t=0,Dt=ct.length;_t<Dt;_t++){let Lt=ct[_t];Rc(g,I,Lt,Lt.viewport)}}else k.length>0&&Pc(H,k,I,U),K&&zt.render(I),Rc(g,I,U);E!==null&&(M.updateMultisampleRenderTarget(E),M.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(_,I,U),fe.resetDefaultState(),w=-1,y=null,A.pop(),A.length>0?(p=A[A.length-1],et===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Oa(I,U,B,H){if(I.visible===!1)return;if(I.layers.test(U.layers)){if(I.isGroup)B=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(U);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||$.intersectsSprite(I)){H&&Ot.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ft);let _t=J.update(I),Dt=I.material;Dt.visible&&g.push(I,_t,Dt,B,Ot.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||$.intersectsObject(I))){let _t=J.update(I),Dt=I.material;if(H&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ot.copy(I.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(I.matrixWorld).applyMatrix4(Ft)),Array.isArray(Dt)){let Lt=_t.groups;for(let Vt=0,Xt=Lt.length;Vt<Xt;Vt++){let Ut=Lt[Vt],ie=Dt[Ut.materialIndex];ie&&ie.visible&&g.push(I,_t,ie,B,Ot.z,Ut)}}else Dt.visible&&g.push(I,_t,Dt,B,Ot.z,null)}}let ct=I.children;for(let _t=0,Dt=ct.length;_t<Dt;_t++)Oa(ct[_t],U,B,H)}function Rc(I,U,B,H){let k=I.opaque,ct=I.transmissive,_t=I.transparent;p.setupLightsView(B),et===!0&&at.setGlobalState(_.clippingPlanes,B),H&&dt.viewport(D.copy(H)),k.length>0&&ar(k,U,B),ct.length>0&&ar(ct,U,B),_t.length>0&&ar(_t,U,B),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Pc(I,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new qn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?$s:Xn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let ct=p.state.transmissionRenderTarget[H.id],_t=H.viewport||D;ct.setSize(_t.z,_t.w);let Dt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(O),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),K&&zt.render(B);let Lt=_.toneMapping;_.toneMapping=ri;let Vt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),et===!0&&at.setGlobalState(_.clippingPlanes,H),ar(I,B,H),M.updateMultisampleRenderTarget(ct),M.updateRenderTargetMipmap(ct),it.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,ie=U.length;Ut<ie;Ut++){let pe=U[Ut],me=pe.object,Je=pe.geometry,se=pe.material,kt=pe.group;if(se.side===ve&&me.layers.test(H.layers)){let Un=se.side;se.side=ke,se.needsUpdate=!0,Dc(me,B,H,Je,se,kt),se.side=Un,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(M.updateMultisampleRenderTarget(ct),M.updateRenderTargetMipmap(ct))}_.setRenderTarget(Dt),_.setClearColor(O,j),Vt!==void 0&&(H.viewport=Vt),_.toneMapping=Lt}function ar(I,U,B){let H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ct=I.length;k<ct;k++){let _t=I[k],Dt=_t.object,Lt=_t.geometry,Vt=H===null?_t.material:H,Xt=_t.group;Dt.layers.test(B.layers)&&Dc(Dt,U,B,Lt,Vt,Xt)}}function Dc(I,U,B,H,k,ct){I.onBeforeRender(_,U,B,H,k,ct),I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),k.onBeforeRender(_,U,B,H,I,ct),k.transparent===!0&&k.side===ve&&k.forceSinglePass===!1?(k.side=ke,k.needsUpdate=!0,_.renderBufferDirect(B,U,H,k,I,ct),k.side=oi,k.needsUpdate=!0,_.renderBufferDirect(B,U,H,k,I,ct),k.side=ve):_.renderBufferDirect(B,U,H,k,I,ct),I.onAfterRender(_,U,B,H,k,ct)}function or(I,U,B){U.isScene!==!0&&(U=Qt);let H=At.get(I),k=p.state.lights,ct=p.state.shadowsArray,_t=k.state.version,Dt=Tt.getParameters(I,k.state,ct,U,B),Lt=Tt.getProgramCacheKey(Dt),Vt=H.programs;H.environment=I.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(I.isMeshStandardMaterial?F:C).get(I.envMap||H.environment),H.envMapRotation=H.environment!==null&&I.envMap===null?U.environmentRotation:I.envMapRotation,Vt===void 0&&(I.addEventListener("dispose",Wt),Vt=new Map,H.programs=Vt);let Xt=Vt.get(Lt);if(Xt!==void 0){if(H.currentProgram===Xt&&H.lightsStateVersion===_t)return Uc(I,Dt),Xt}else Dt.uniforms=Tt.getUniforms(I),I.onBeforeCompile(Dt,_),Xt=Tt.acquireProgram(Dt,Lt),Vt.set(Lt,Xt),H.uniforms=Dt.uniforms;let Ut=H.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=at.uniform),Uc(I,Dt),H.needsLights=gu(I),H.lightsStateVersion=_t,H.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Xt,H.uniformsList=null,Xt}function Lc(I){if(I.uniformsList===null){let U=I.currentProgram.getUniforms();I.uniformsList=ss.seqWithValue(U.seq,I.uniforms)}return I.uniformsList}function Uc(I,U){let B=At.get(I);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function fu(I,U,B,H,k){U.isScene!==!0&&(U=Qt),M.resetTextureUnits();let ct=U.fog,_t=H.isMeshStandardMaterial?U.environment:null,Dt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:gs,Lt=(H.isMeshStandardMaterial?F:C).get(H.envMap||_t),Vt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Xt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!B.morphAttributes.position,ie=!!B.morphAttributes.normal,pe=!!B.morphAttributes.color,me=ri;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=_.toneMapping);let Je=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=Je!==void 0?Je.length:0,kt=At.get(H),Un=p.state.lights;if(et===!0&&(It===!0||I!==y)){let sn=I===y&&H.id===w;at.setState(H,I,sn)}let re=!1;H.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Un.state.version||kt.outputColorSpace!==Dt||k.isBatchedMesh&&kt.batching===!1||!k.isBatchedMesh&&kt.batching===!0||k.isBatchedMesh&&kt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&kt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&kt.instancing===!1||!k.isInstancedMesh&&kt.instancing===!0||k.isSkinnedMesh&&kt.skinning===!1||!k.isSkinnedMesh&&kt.skinning===!0||k.isInstancedMesh&&kt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&kt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&kt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&kt.instancingMorph===!1&&k.morphTexture!==null||kt.envMap!==Lt||H.fog===!0&&kt.fog!==ct||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==at.numPlanes||kt.numIntersection!==at.numIntersection)||kt.vertexAlphas!==Vt||kt.vertexTangents!==Xt||kt.morphTargets!==Ut||kt.morphNormals!==ie||kt.morphColors!==pe||kt.toneMapping!==me||kt.morphTargetsCount!==se)&&(re=!0):(re=!0,kt.__version=H.version);let cn=kt.currentProgram;re===!0&&(cn=or(H,U,k));let Fi=!1,Ke=!1,As=!1,_e=cn.getUniforms(),Cn=kt.uniforms;if(dt.useProgram(cn.program)&&(Fi=!0,Ke=!0,As=!0),H.id!==w&&(w=H.id,Ke=!0),Fi||y!==I){dt.buffers.depth.getReversed()?(lt.copy(I.projectionMatrix),yf(lt),vf(lt),_e.setValue(T,"projectionMatrix",lt)):_e.setValue(T,"projectionMatrix",I.projectionMatrix),_e.setValue(T,"viewMatrix",I.matrixWorldInverse);let Zn=_e.map.cameraPosition;Zn!==void 0&&Zn.setValue(T,St.setFromMatrixPosition(I.matrixWorld)),Ct.logarithmicDepthBuffer&&_e.setValue(T,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(T,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,Ke=!0,As=!0)}if(k.isSkinnedMesh){_e.setOptional(T,k,"bindMatrix"),_e.setOptional(T,k,"bindMatrixInverse");let sn=k.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),_e.setValue(T,"boneTexture",sn.boneTexture,M))}k.isBatchedMesh&&(_e.setOptional(T,k,"batchingTexture"),_e.setValue(T,"batchingTexture",k._matricesTexture,M),_e.setOptional(T,k,"batchingIdTexture"),_e.setValue(T,"batchingIdTexture",k._indirectTexture,M),_e.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(T,"batchingColorTexture",k._colorsTexture,M));let ys=B.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Ht.update(k,B,cn),(Ke||kt.receiveShadow!==k.receiveShadow)&&(kt.receiveShadow=k.receiveShadow,_e.setValue(T,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Cn.envMap.value=Lt,Cn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Cn.envMapIntensity.value=U.environmentIntensity),Ke&&(_e.setValue(T,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&pu(Cn,As),ct&&H.fog===!0&&pt.refreshFogUniforms(Cn,ct),pt.refreshMaterialUniforms(Cn,H,G,nt,p.state.transmissionRenderTarget[I.id]),ss.upload(T,Lc(kt),Cn,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ss.upload(T,Lc(kt),Cn,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(T,"center",k.center),_e.setValue(T,"modelViewMatrix",k.modelViewMatrix),_e.setValue(T,"normalMatrix",k.normalMatrix),_e.setValue(T,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let sn=H.uniformsGroups;for(let Zn=0,Jn=sn.length;Zn<Jn;Zn++){let kc=sn[Zn];L.update(kc,cn),L.bind(kc,cn)}}return cn}function pu(I,U){I.ambientLightColor.needsUpdate=U,I.lightProbe.needsUpdate=U,I.directionalLights.needsUpdate=U,I.directionalLightShadows.needsUpdate=U,I.pointLights.needsUpdate=U,I.pointLightShadows.needsUpdate=U,I.spotLights.needsUpdate=U,I.spotLightShadows.needsUpdate=U,I.rectAreaLights.needsUpdate=U,I.hemisphereLights.needsUpdate=U}function gu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,U,B){At.get(I.texture).__webglTexture=U,At.get(I.depthTexture).__webglTexture=B;let H=At.get(I);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,U){let B=At.get(I);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(I,U=0,B=0){E=I,b=U,S=B;let H=!0,k=null,ct=!1,_t=!1;if(I){let Lt=At.get(I);if(Lt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(T.FRAMEBUFFER,null),H=!1;else if(Lt.__webglFramebuffer===void 0)M.setupRenderTarget(I);else if(Lt.__hasExternalTextures)M.rebindTextures(I,At.get(I.texture).__webglTexture,At.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ut=I.depthTexture;if(Lt.__boundDepthTexture!==Ut){if(Ut!==null&&At.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(I)}}let Vt=I.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(_t=!0);let Xt=At.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?k=Xt[U][B]:k=Xt[U],ct=!0):I.samples>0&&M.useMultisampledRTT(I)===!1?k=At.get(I).__webglMultisampledFramebuffer:Array.isArray(Xt)?k=Xt[B]:k=Xt,D.copy(I.viewport),V.copy(I.scissor),N=I.scissorTest}else D.copy(vt).multiplyScalar(G).floor(),V.copy(Nt).multiplyScalar(G).floor(),N=Jt;if(dt.bindFramebuffer(T.FRAMEBUFFER,k)&&H&&dt.drawBuffers(I,k),dt.viewport(D),dt.scissor(V),dt.setScissorTest(N),ct){let Lt=At.get(I.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,B)}else if(_t){let Lt=At.get(I.texture),Vt=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Lt.__webglTexture,B||0,Vt)}w=-1},this.readRenderTargetPixels=function(I,U,B,H,k,ct,_t){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=At.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&_t!==void 0&&(Dt=Dt[_t]),Dt){dt.bindFramebuffer(T.FRAMEBUFFER,Dt);try{let Lt=I.texture,Vt=Lt.format,Xt=Lt.type;if(!Ct.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=I.width-H&&B>=0&&B<=I.height-k&&T.readPixels(U,B,H,k,$t.convert(Vt),$t.convert(Xt),ct)}finally{let Lt=E!==null?At.get(E).__webglFramebuffer:null;dt.bindFramebuffer(T.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(I,U,B,H,k,ct,_t){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=At.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&_t!==void 0&&(Dt=Dt[_t]),Dt){let Lt=I.texture,Vt=Lt.format,Xt=Lt.type;if(!Ct.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=I.width-H&&B>=0&&B<=I.height-k){dt.bindFramebuffer(T.FRAMEBUFFER,Dt);let Ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.bufferData(T.PIXEL_PACK_BUFFER,ct.byteLength,T.STREAM_READ),T.readPixels(U,B,H,k,$t.convert(Vt),$t.convert(Xt),0);let ie=E!==null?At.get(E).__webglFramebuffer:null;dt.bindFramebuffer(T.FRAMEBUFFER,ie);let pe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Af(T,pe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ct),T.deleteBuffer(Ut),T.deleteSync(pe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,U=null,B=0){I.isTexture!==!0&&(Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,I=arguments[1]);let H=Math.pow(2,-B),k=Math.floor(I.image.width*H),ct=Math.floor(I.image.height*H),_t=U!==null?U.x:0,Dt=U!==null?U.y:0;M.setTexture2D(I,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,_t,Dt,k,ct),dt.unbindTexture()},this.copyTextureToTexture=function(I,U,B=null,H=null,k=0){I.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,I=arguments[1],U=arguments[2],k=arguments[3]||0,B=null);let ct,_t,Dt,Lt,Vt,Xt,Ut,ie,pe,me=I.isCompressedTexture?I.mipmaps[k]:I.image;B!==null?(ct=B.max.x-B.min.x,_t=B.max.y-B.min.y,Dt=B.isBox3?B.max.z-B.min.z:1,Lt=B.min.x,Vt=B.min.y,Xt=B.isBox3?B.min.z:0):(ct=me.width,_t=me.height,Dt=me.depth||1,Lt=0,Vt=0,Xt=0),H!==null?(Ut=H.x,ie=H.y,pe=H.z):(Ut=0,ie=0,pe=0);let Je=$t.convert(U.format),se=$t.convert(U.type),kt;U.isData3DTexture?(M.setTexture3D(U,0),kt=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(M.setTexture2DArray(U,0),kt=T.TEXTURE_2D_ARRAY):(M.setTexture2D(U,0),kt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=T.getParameter(T.UNPACK_ROW_LENGTH),re=T.getParameter(T.UNPACK_IMAGE_HEIGHT),cn=T.getParameter(T.UNPACK_SKIP_PIXELS),Fi=T.getParameter(T.UNPACK_SKIP_ROWS),Ke=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,me.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,me.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xt);let As=I.isDataArrayTexture||I.isData3DTexture,_e=U.isDataArrayTexture||U.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let Cn=At.get(I),ys=At.get(U),sn=At.get(Cn.__renderTarget),Zn=At.get(ys.__renderTarget);dt.bindFramebuffer(T.READ_FRAMEBUFFER,sn.__webglFramebuffer),dt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Dt;Jn++)As&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.get(I).__webglTexture,k,Xt+Jn),I.isDepthTexture?(_e&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.get(U).__webglTexture,k,pe+Jn),T.blitFramebuffer(Lt,Vt,ct,_t,Ut,ie,ct,_t,T.DEPTH_BUFFER_BIT,T.NEAREST)):_e?T.copyTexSubImage3D(kt,k,Ut,ie,pe+Jn,Lt,Vt,ct,_t):T.copyTexSubImage2D(kt,k,Ut,ie,pe+Jn,Lt,Vt,ct,_t);dt.bindFramebuffer(T.READ_FRAMEBUFFER,null),dt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else _e?I.isDataTexture||I.isData3DTexture?T.texSubImage3D(kt,k,Ut,ie,pe,ct,_t,Dt,Je,se,me.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(kt,k,Ut,ie,pe,ct,_t,Dt,Je,me.data):T.texSubImage3D(kt,k,Ut,ie,pe,ct,_t,Dt,Je,se,me):I.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,Ut,ie,ct,_t,Je,se,me.data):I.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,Ut,ie,me.width,me.height,Je,me.data):T.texSubImage2D(T.TEXTURE_2D,k,Ut,ie,ct,_t,Je,se,me);T.pixelStorei(T.UNPACK_ROW_LENGTH,Un),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,re),T.pixelStorei(T.UNPACK_SKIP_PIXELS,cn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Fi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ke),k===0&&U.generateMipmaps&&T.generateMipmap(kt),dt.unbindTexture()},this.copyTextureToTexture3D=function(I,U,B=null,H=null,k=0){return I.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,I=arguments[2],U=arguments[3],k=arguments[4]||0),Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,U,B,H,k)},this.initRenderTarget=function(I){At.get(I).__webglFramebuffer===void 0&&M.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?M.setTextureCube(I,0):I.isData3DTexture?M.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?M.setTexture2DArray(I,0):M.setTexture2D(I,0),dt.unbindTexture()},this.resetState=function(){b=0,S=0,E=null,dt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var us=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var mn=class extends je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,l=new ye;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Tr=new R,po=new jl,go=new jl,mo=new jl,fs=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Tr.subVectors(s[0],s[1]).add(s[0]),c=Tr);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),po.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,g),go.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,g),mo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(po.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),go.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),mo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(po.calc(l),go.calc(l),mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function g_(i,t){let e=1-i;return e*e*t}function m_(i,t){return 2*(1-i)*i*t}function __(i,t){return i*i*t}function Ps(i,t,e,n){return g_(i,t)+m_(i,e)+__(i,n)}function x_(i,t){let e=1-i;return e*e*e*t}function A_(i,t){let e=1-i;return 3*e*e*i*t}function y_(i,t){return 3*(1-i)*i*i*t}function v_(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return x_(i,t)+A_(i,e)+y_(i,n)+v_(i,s)}var Jr=class extends on{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ds(t,s.x,r.x,a.x,o.x),Ds(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends on{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ds(t,s.x,r.x,a.x,o.x),Ds(t,s.y,r.y,a.y,o.y),Ds(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jr=class extends on{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cl=class extends on{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends on{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends on{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y),Ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Nh(o,l.x,c.x,h.x,d.x),Nh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},ea=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:fs,CubicBezierCurve:Jr,CubicBezierCurve3:vl,EllipseCurve:zs,LineCurve:jr,LineCurve3:Cl,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:Qr,SplineCurve:ta}),Il=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ea[s.type]().fromJSON(s))}return this}},Hs=class extends Il{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new jr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Kr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Jr(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ta(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new zs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wl=class i extends Ge{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new ot,f=new R,m=new R,x=new R,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){let A=n+v*h*s,_=Math.sin(A),P=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*P,a.push(d.x,d.y,d.z),u.x=v/e,u.y=b/(t.length-1),o.push(u.x,u.y);let S=l[3*b+0]*_,E=l[3*b+1],w=l[3*b+0]*P;c.push(S,E,w)}}for(let v=0;v<e;v++)for(let A=0;A<t.length-1;A++){let _=A+v*t.length,P=_,b=_+t.length,S=_+t.length+1,E=_+1;r.push(P,b,E),r.push(S,E,b)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},na=class i extends wl{constructor(t=1,e=1,n=4,s=8){let r=new Hs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Yn=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function v(){let _=new R,P=new R,b=0,S=(e-t)/n;for(let E=0;E<=r;E++){let w=[],y=E/r,D=y*(e-t)+t;for(let V=0;V<=s;V++){let N=V/s,O=N*l+o,j=Math.sin(O),z=Math.cos(O);P.x=D*j,P.y=-y*n+g,P.z=D*z,d.push(P.x,P.y,P.z),_.set(j,S,z).normalize(),u.push(_.x,_.y,_.z),f.push(N,1-y),w.push(m++)}x.push(w)}for(let E=0;E<s;E++)for(let w=0;w<r;w++){let y=x[w][E],D=x[w+1][E],V=x[w+1][E+1],N=x[w][E+1];(t>0||w!==0)&&(h.push(y,D,N),b+=3),(e>0||w!==r-1)&&(h.push(D,V,N),b+=3)}c.addGroup(p,b,0),p+=b}function A(_){let P=m,b=new ot,S=new R,E=0,w=_===!0?t:e,y=_===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,g*y,0),u.push(0,y,0),f.push(.5,.5),m++;let D=m;for(let V=0;V<=s;V++){let O=V/s*l+o,j=Math.cos(O),z=Math.sin(O);S.x=w*z,S.y=g*y,S.z=w*j,d.push(S.x,S.y,S.z),u.push(0,y,0),b.x=j*.5+.5,b.y=z*.5*y+.5,f.push(b.x,b.y),m++}for(let V=0;V<s;V++){let N=P+V,O=D+V;_===!0?h.push(O,O+1,N):h.push(O+1,O,N),E+=3}c.addGroup(p,E,_===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class i extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ia=class i extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new R,_=new R,P=new R;for(let b=0;b<e.length;b+=3)f(e[b+0],A),f(e[b+1],_),f(e[b+2],P),l(A,_,P,v)}function l(v,A,_,P){let b=P+1,S=[];for(let E=0;E<=b;E++){S[E]=[];let w=v.clone().lerp(_,E/b),y=A.clone().lerp(_,E/b),D=b-E;for(let V=0;V<=D;V++)V===0&&E===b?S[E][V]=w:S[E][V]=w.clone().lerp(y,V/D)}for(let E=0;E<b;E++)for(let w=0;w<2*(b-E)-1;w++){let y=Math.floor(w/2);w%2===0?(u(S[E][y+1]),u(S[E+1][y]),u(S[E][y])):(u(S[E][y+1]),u(S[E+1][y+1]),u(S[E+1][y]))}}function c(v){let A=new R;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(v),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function h(){let v=new R;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let _=g(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;a.push(_,1-P)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let A=a[v+0],_=a[v+2],P=a[v+4],b=Math.max(A,_,P),S=Math.min(A,_,P);b>.9&&S<.1&&(A<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),P<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,A){let _=v*3;A.x=t[_+0],A.y=t[_+1],A.z=t[_+2]}function m(){let v=new R,A=new R,_=new R,P=new R,b=new ot,S=new ot,E=new ot;for(let w=0,y=0;w<r.length;w+=9,y+=6){v.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),b.set(a[y+0],a[y+1]),S.set(a[y+2],a[y+3]),E.set(a[y+4],a[y+5]),P.copy(v).add(A).add(_).divideScalar(3);let D=g(P);x(b,y+0,v,D),x(S,y+2,A,D),x(E,y+4,_,D)}}function x(v,A,_,P){P<0&&v.x===1&&(a[A]=v.x-1),_.x===0&&_.z===0&&(a[A]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},sa=class i extends ia{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var _n=class extends Hs{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}},C_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_d(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=E_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)d=i[m],u=i[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Vs(r,a,e,o,l,f,0),a}};function _d(i,t,e,n,s){let r,a;if(s===O_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Fh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Fh(r,i[r],i[r+1],a);return a&&_a(a,a.next)&&(Ws(a),a=a.next),a}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_a(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&D_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?w_(i,n,s,r):I_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ws(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=b_(Di(i),t,e),Vs(i,t,e,n,s,r,2)):a===2&&M_(i,t,e,n,s,r):Vs(Di(i),t,e,n,s,r,1);break}}}function I_(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&ts(s,o,r,l,a,c,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function w_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ce(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,p=bl(f,m,t,e,n),v=bl(x,g,t,e,n),A=i.prevZ,_=i.nextZ;for(;A&&A.z>=p&&_&&_.z<=v;){if(A.x>=f&&A.x<=x&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&ts(o,h,l,d,c,u,A.x,A.y)&&Ce(A.prev,A,A.next)>=0||(A=A.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&ts(o,h,l,d,c,u,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=x&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&ts(o,h,l,d,c,u,A.x,A.y)&&Ce(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&ts(o,h,l,d,c,u,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function b_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_a(s,r)&&xd(s,n,n.next,r)&&Gs(s,r)&&Gs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ws(n),Ws(n.next),n=i=r),n=n.next}while(n!==i);return Di(n)}function M_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&k_(a,o)){let l=Ad(a,o);a=Di(a,a.next),l=Di(l,l.next),Vs(a,t,e,n,s,r,0),Vs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function E_(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_d(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(U_(c));for(s.sort(S_),r=0;r<s.length;r++)e=T_(s[r],e);return e}function S_(i,t){return i.x-t.x}function T_(i,t){let e=R_(i,t);if(!e)return t;let n=Ad(e,i);return Di(n,n.next),Di(e,e.next)}function R_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ts(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Gs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&P_(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function P_(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function D_(i,t,e,n){let s=i;do s.z===0&&(s.z=bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,L_(s)}function L_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function U_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function k_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!N_(i,t)&&(Gs(i,t)&&Gs(t,i)&&F_(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||_a(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _a(i,t){return i.x===t.x&&i.y===t.y}function xd(i,t,e,n){let s=Pr(Ce(i,t,e)),r=Pr(Ce(i,t,n)),a=Pr(Ce(e,n,i)),o=Pr(Ce(e,n,t));return!!(s!==r&&a!==o||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||a===0&&Rr(e,i,n)||o===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function N_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gs(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function F_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ad(i,t){let e=new Ml(i.i,i.x,i.y),n=new Ml(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fh(i,t,e,n){let s=new Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Oh(t),Bh(n,t);let a=t.length;e.forEach(Oh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bh(n,e[l]);let o=C_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hi=class i extends Ge{constructor(t=new _n([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:B_,A,_=!1,P,b,S,E;p&&(A=p.getSpacedPoints(h),_=!0,u=!1,P=p.computeFrenetFrames(h,!1),b=new R,S=new R,E=new R),u||(g=0,f=0,m=0,x=0);let w=o.extractPoints(c),y=w.shape,D=w.holes;if(!ai.isClockWise(y)){y=y.reverse();for(let K=0,rt=D.length;K<rt;K++){let T=D[K];ai.isClockWise(T)&&(D[K]=T.reverse())}}let N=ai.triangulateShape(y,D),O=y;for(let K=0,rt=D.length;K<rt;K++){let T=D[K];y=y.concat(T)}function j(K,rt,T){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(rt,T)}let z=y.length,nt=N.length;function G(K,rt,T){let Mt,it,Ct,dt=K.x-rt.x,Bt=K.y-rt.y,At=T.x-K.x,M=T.y-K.y,C=dt*dt+Bt*Bt,F=dt*M-Bt*At;if(Math.abs(F)>Number.EPSILON){let Z=Math.sqrt(C),tt=Math.sqrt(At*At+M*M),J=rt.x-Bt/Z,Tt=rt.y+dt/Z,pt=T.x-M/tt,yt=T.y+At/tt,jt=((pt-J)*M-(yt-Tt)*At)/(dt*M-Bt*At);Mt=J+dt*jt-K.x,it=Tt+Bt*jt-K.y;let at=Mt*Mt+it*it;if(at<=2)return new ot(Mt,it);Ct=Math.sqrt(at/2)}else{let Z=!1;dt>Number.EPSILON?At>Number.EPSILON&&(Z=!0):dt<-Number.EPSILON?At<-Number.EPSILON&&(Z=!0):Math.sign(Bt)===Math.sign(M)&&(Z=!0),Z?(Mt=-Bt,it=dt,Ct=Math.sqrt(C)):(Mt=dt,it=Bt,Ct=Math.sqrt(C/2))}return new ot(Mt/Ct,it/Ct)}let ht=[];for(let K=0,rt=O.length,T=rt-1,Mt=K+1;K<rt;K++,T++,Mt++)T===rt&&(T=0),Mt===rt&&(Mt=0),ht[K]=G(O[K],O[T],O[Mt]);let ft=[],vt,Nt=ht.concat();for(let K=0,rt=D.length;K<rt;K++){let T=D[K];vt=[];for(let Mt=0,it=T.length,Ct=it-1,dt=Mt+1;Mt<it;Mt++,Ct++,dt++)Ct===it&&(Ct=0),dt===it&&(dt=0),vt[Mt]=G(T[Mt],T[Ct],T[dt]);ft.push(vt),Nt=Nt.concat(vt)}for(let K=0;K<g;K++){let rt=K/g,T=f*Math.cos(rt*Math.PI/2),Mt=m*Math.sin(rt*Math.PI/2)+x;for(let it=0,Ct=O.length;it<Ct;it++){let dt=j(O[it],ht[it],Mt);lt(dt.x,dt.y,-T)}for(let it=0,Ct=D.length;it<Ct;it++){let dt=D[it];vt=ft[it];for(let Bt=0,At=dt.length;Bt<At;Bt++){let M=j(dt[Bt],vt[Bt],Mt);lt(M.x,M.y,-T)}}}let Jt=m+x;for(let K=0;K<z;K++){let rt=u?j(y[K],Nt[K],Jt):y[K];_?(S.copy(P.normals[0]).multiplyScalar(rt.x),b.copy(P.binormals[0]).multiplyScalar(rt.y),E.copy(A[0]).add(S).add(b),lt(E.x,E.y,E.z)):lt(rt.x,rt.y,0)}for(let K=1;K<=h;K++)for(let rt=0;rt<z;rt++){let T=u?j(y[rt],Nt[rt],Jt):y[rt];_?(S.copy(P.normals[K]).multiplyScalar(T.x),b.copy(P.binormals[K]).multiplyScalar(T.y),E.copy(A[K]).add(S).add(b),lt(E.x,E.y,E.z)):lt(T.x,T.y,d/h*K)}for(let K=g-1;K>=0;K--){let rt=K/g,T=f*Math.cos(rt*Math.PI/2),Mt=m*Math.sin(rt*Math.PI/2)+x;for(let it=0,Ct=O.length;it<Ct;it++){let dt=j(O[it],ht[it],Mt);lt(dt.x,dt.y,d+T)}for(let it=0,Ct=D.length;it<Ct;it++){let dt=D[it];vt=ft[it];for(let Bt=0,At=dt.length;Bt<At;Bt++){let M=j(dt[Bt],vt[Bt],Mt);_?lt(M.x,M.y+A[h-1].y,A[h-1].x+T):lt(M.x,M.y,d+T)}}}$(),et();function $(){let K=s.length/3;if(u){let rt=0,T=z*rt;for(let Mt=0;Mt<nt;Mt++){let it=N[Mt];Ft(it[2]+T,it[1]+T,it[0]+T)}rt=h+g*2,T=z*rt;for(let Mt=0;Mt<nt;Mt++){let it=N[Mt];Ft(it[0]+T,it[1]+T,it[2]+T)}}else{for(let rt=0;rt<nt;rt++){let T=N[rt];Ft(T[2],T[1],T[0])}for(let rt=0;rt<nt;rt++){let T=N[rt];Ft(T[0]+z*h,T[1]+z*h,T[2]+z*h)}}n.addGroup(K,s.length/3-K,0)}function et(){let K=s.length/3,rt=0;It(O,rt),rt+=O.length;for(let T=0,Mt=D.length;T<Mt;T++){let it=D[T];It(it,rt),rt+=it.length}n.addGroup(K,s.length/3-K,1)}function It(K,rt){let T=K.length;for(;--T>=0;){let Mt=T,it=T-1;it<0&&(it=K.length-1);for(let Ct=0,dt=h+g*2;Ct<dt;Ct++){let Bt=z*Ct,At=z*(Ct+1),M=rt+Mt+Bt,C=rt+it+Bt,F=rt+it+At,Z=rt+Mt+At;St(M,C,F,Z)}}}function lt(K,rt,T){l.push(K),l.push(rt),l.push(T)}function Ft(K,rt,T){Ot(K),Ot(rt),Ot(T);let Mt=s.length/3,it=v.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);Qt(it[0]),Qt(it[1]),Qt(it[2])}function St(K,rt,T,Mt){Ot(K),Ot(rt),Ot(Mt),Ot(rt),Ot(T),Ot(Mt);let it=s.length/3,Ct=v.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);Qt(Ct[0]),Qt(Ct[1]),Qt(Ct[3]),Qt(Ct[1]),Qt(Ct[2]),Qt(Ct[3])}function Ot(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Qt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return z_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ea[s.type]().fromJSON(s)),new i(n,t.options)}},B_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-d),new ot(u,1-m),new ot(x,1-p)]:[new ot(o,1-l),new ot(h,1-d),new ot(f,1-m),new ot(g,1-p)]}};function z_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ra=class i extends ia{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var aa=class i extends Ge{constructor(t=new _n([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];ai.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=ai.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],A=v[0]+d,_=v[1]+d,P=v[2]+d;n.push(A,_,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return H_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function H_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var be=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],A=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){let b=P/e;d.x=-t*Math.cos(s+b*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+b*r)*Math.sin(a+A*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(b+_,1-A),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let A=h[p][v+1],_=h[p][v],P=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&f.push(A,_,b),(p!==n-1||l<Math.PI)&&f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ie=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;a.push(x,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xs=class i extends Ge{constructor(t=new Qr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new ot,h=new R,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function x(){for(let A=0;A<e;A++)g(A);g(r===!1?e:0),v(),p()}function g(A){h=t.getPointAt(A/e,h);let _=a.normals[A],P=a.binormals[A];for(let b=0;b<=s;b++){let S=b/s*Math.PI*2,E=Math.sin(S),w=-Math.cos(S);l.x=w*_.x+E*P.x,l.y=w*_.y+E*P.y,l.z=w*_.z+E*P.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let _=1;_<=s;_++){let P=(s+1)*(A-1)+(_-1),b=(s+1)*A+(_-1),S=(s+1)*A+_,E=(s+1)*(A-1)+_;m.push(P,b,E),m.push(b,S,E)}}function v(){for(let A=0;A<=e;A++)for(let _=0;_<=s;_++)c.x=A/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ea[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Yt=class extends Pi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function V_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=t,o=2*e-n;break;case Hc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:a=t,l=2*n-e;break;case Hc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+v*a[c+P]+A*a[l+P]+_*a[d+P];return r}},Sl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Tl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case il:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&V_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=il;var Li=class extends xn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Or;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends xn{};Rl.prototype.ValueTypeName="color";var Pl=class extends xn{};Pl.prototype.ValueTypeName="number";var Dl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},oa=class extends xn{InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends xn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Or;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends xn{};Ll.prototype.ValueTypeName="vector";var zh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ul=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},G_=new Ul,qs=class{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var kl=class extends qs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=zh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ns("img");function l(){h(),zh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var $n=class extends qs{constructor(t){super(t)}load(t,e,n,s){let r=new je,a=new kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ys=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},la=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_o=new ye,Hh=new R,Vh=new R,ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Gh=new ye,bs=new R,xo=new R,Nl=class extends ca{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),xo.copy(n.position),xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xo),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}},ha=class extends Ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fl=class extends ca{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ua=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Wh(){return performance.now()}var Kl="\\[\\]\\.:\\/",W_=new RegExp("["+Kl+"]","g"),Ql="[^"+Kl+"]",X_="[^"+Kl.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",Ql),Y_=/(WCOD+)?/.source.replace("WCOD",X_),$_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),J_=new RegExp("^"+q_+Y_+$_+Z_+"$"),j_=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let e=J_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);j_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Ol;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kx=new Float32Array(1);var Xh=new ye,fa=class{constructor(t,e,n=0,s=1/0){this.ray=new Vr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(t,e=!0,n=[]){return Bl(t,this,n,e),n.sort(qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bl(t[s],this,n,e);return n.sort(qh),n}};function qh(i,t){return i.distance-t.distance}function Bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Bl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);var K_="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Oe=null,xa=!1;function yd(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function tc(){yd(),xa=!0;try{if(Oe||(Oe=document.createElement("audio"),Oe.src=K_,Oe.loop=!0,Oe.preload="auto",Oe.setAttribute("playsinline",""),Oe.setAttribute("webkit-playsinline",""),Oe.setAttribute("x-webkit-airplay","deny"),Oe.volume=.01,Oe.addEventListener("pause",()=>{xa&&!document.hidden&&setTimeout(()=>xa&&Oe.paused&&Oe.play().catch(()=>{}),300)})),Oe.paused){let i=Oe.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function ec(){xa=!1;try{Oe&&!Oe.paused&&Oe.pause()}catch{}}function vd(i,t){yd();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var ue=i=>440*Math.pow(2,(i-69)/12),nc={tempo:112,chords:[[41,[65,69,72]],[46,[65,70,74]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,70]],[41,[65,69,72]]],melody:[[0,0,77],[0,2,81],[0,4,84],[0,6,81],[1,0,82],[1,3,79],[1,4,77],[2,0,79],[2,2,76],[2,4,72],[2,6,76],[3,0,77],[3,4,72],[4,0,74],[4,2,77],[4,4,81],[4,6,79],[5,0,77],[5,2,74],[5,4,70],[6,0,72],[6,2,76],[6,4,79],[6,6,82],[7,0,81],[7,4,77]],lead:"marimba",shaker:!0},Aa=class{constructor(t=nc){this.ctx=null,this.muted=!1,this.mode="off",this.theme=t}unlock(){if(tc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;vd(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.34,this.musicBus.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.3;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.14,this.musicBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){ec(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){tc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){if(this.mode===t&&!e||(this.mode=t,!this.ctx))return;this.step=0,this.nextTime=this.ctx.currentTime+.12;let n=this.musicOnly?1.6:1,s=(t==="calm"?.18:t==="menu"?.28:.34)*n;this.musicBus.gain.setTargetAtTime(s,this.ctx.currentTime,.3)}duck(t=2){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.mode==="calm"?.18:.34;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(.035,e,.06),this.musicBus.gain.setTargetAtTime(n,e+t,.4),this.sfx.gain.cancelScheduledValues(e),this.sfx.gain.setTargetAtTime(.45,e+.15,.08),this.sfx.gain.setTargetAtTime(.85,e+t,.3)}dispose(){clearInterval(this._timer),ec(),this.ctx&&this.ctx.close(),this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let d=c.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),l&&d.frequency.exponentialRampToValueAtTime(l,t+e),d.Q.value=a;let u=c.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),u.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(u).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}lead(t,e,n,s=this.musicBus){let r=ue(t);switch(this.theme.lead){case"bell":this.tone("sine",r,e,.9,n,s,.002),this.tone("sine",r*2.76,e,.25,n*.25,s,.002);break;case"pluck":this.tone("triangle",r,e,.28,n,s,.002),this.tone("sine",r*2,e,.12,n*.3,s,.002);break;case"flute":this.tone("sine",r,e,.45,n,s,.05),this.tone("triangle",r*2,e,.3,n*.08,s,.06);break;default:this.tone("sine",r,e,.35,n,s,.003),this.tone("sine",r*4,e,.05,n*.3,s,.002)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=this.theme,n=t.currentTime+.2,s=60/(this.mode==="menu"?e.tempo*.9:e.tempo)/2,r=e.chords.length,a=this.mode==="play";for(;this.nextTime<n;){let o=this.nextTime,l=this.step%(r*8),c=Math.floor(l/8),h=l%8,[d,u]=e.chords[c];(h===0||h===4)&&this.tone("triangle",ue(d-(h===4?5:0)),o,s*1.6,.14,this.musicBus,.01),(h===2||h===6)&&u.forEach(m=>this.tone("sine",ue(m-12),o,s*1.2,.022,this.musicBus,.004));let f=this.energy||0;if(this.suspense){let m=[0,4,7,4,9,7,4,2];h%2===0?this.tone("triangle",ue(d+24+m[(this.step>>1)%8]),o,s*.55,.055,this.musicBus,.004):this.noise(o,.02,.03,"highpass",6500,1,this.musicBus),h===6&&this.tone("sine",ue(d+31+c%4*2),o,s*1.6,.03,this.musicBus,.01)}else for(let[m,x,g]of e.melody)m===c&&x===h&&this.lead(g,o,(a?.075:.06)*(.65+.7*f));f>=.4&&h%2===0&&this.lead(u[h/2%u.length]+12,o+s*.5,.03*f),f>=.8&&(h===3||h===7)&&this.lead(u[2]+24,o,.025),e.shaker&&a&&h%2===1&&this.noise(o,.04,.012,"highpass",8e3,1,this.musicBus),this.step++,this.nextTime+=s}}setSuspense(t){this.suspense=!!t}play(t,e){if(!this.on||this.musicOnly)return;let n=this.ctx.currentTime+.005;switch(t){case"note":this.lead(e||79,n,.09,this.sfx);break;case"applause":{for(let r=0;r<150;r++){let a=n+Math.pow(Math.random(),1.5)*2.5;this.noise(a,.02+Math.random()*.025,.2+Math.random()*.14,"bandpass",1300+Math.random()*3e3,1.3,this.sfx),r%3===0&&this.noise(a,.05,.12,"lowpass",900,.8,this.sfx)}break}case"crowd":{let s=this.ctx;for(let r=0;r<6;r++){let a=n+r*.045+Math.random()*.08,o=s.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(250+r*28,a),o.frequency.exponentialRampToValueAtTime(430+r*36,a+.5);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=850,l.Q.value=4;let c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=1300,c.Q.value=5;let h=s.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(.07,a+.07),h.gain.exponentialRampToValueAtTime(1e-4,a+.75),o.connect(l),o.connect(c),l.connect(h),c.connect(h),h.connect(this.sfx),o.start(a),o.stop(a+.8)}break}case"fanfare":[72,76,79,84,88].forEach((s,r)=>{this.tone("triangle",ue(s),n+r*.075,.38,.085),this.tone("square",ue(s),n+r*.075,.18,.018),this.tone("sine",ue(s)*2,n+r*.075,.3,.03)});break;case"yay":[72,76,79,84,88,91].forEach((s,r)=>{this.tone("triangle",ue(s),n+r*.06,.4,.05),this.tone("sine",ue(s)*2,n+r*.06,.2,.02)});break;case"tap":this.tone("sine",880,n,.06,.05);break;case"step":this.slide("sine",e?210:180,95,n,.11,.2),this.noise(n,.05,.12,"lowpass",1800,1),this.tone("triangle",e?900:780,n+.005,.045,.07);break;case"bump":this.slide("sine",260,150,n,.18,.13),this.slide("sine",320,200,n+.06,.14,.05);break;case"right":[[84,0],[88,.09],[91,.18]].forEach(([s,r])=>{this.tone("sine",ue(s),n+r,.45,.08),this.tone("sine",ue(s)*3,n+r,.08,.012)});break;case"wrong":this.tone("triangle",ue(67),n,.18,.06),this.tone("triangle",ue(64),n+.14,.26,.05);break;case"pop":this.slide("sine",900,300,n,.08,.12),this.noise(n,.05,.06,"bandpass",2500,2);break;case"sparkle":for(let s=0;s<6;s++)this.tone("sine",ue(90+s*5%12),n+s*.045,.25,.03);break;case"star":[88,91,96,100].forEach((s,r)=>this.tone("sine",ue(s),n+r*.07,.5,.05));break;case"whoosh":this.noise(n,.5,.09,"bandpass",500,.8,this.sfx,2600);break;case"page":this.noise(n,.25,.06,"bandpass",1800,.6,this.sfx,900);break;case"drop":this.tone("sine",520,n,.08,.1),this.tone("sine",780,n+.05,.12,.06),this.noise(n,.05,.04,"lowpass",900,1);break;case"splash":this.noise(n,.6,.12,"lowpass",3e3,.7,this.sfx,500);for(let s=0;s<4;s++)this.tone("sine",900+Math.random()*900,n+.05+s*.06,.08,.025);break;case"nibble":for(let s=0;s<5;s++)this.noise(n+s*.09,.05,.08,"bandpass",1200+s%2*500,2);break;case"squeak":this.slide("sine",1800,2600,n,.08,.05),this.slide("sine",2600,2e3,n+.08,.07,.04);break;case"cheer":[76,79,84,88].forEach((s,r)=>{this.tone("sine",ue(s),n+r*.07,.35,.05),this.tone("sine",ue(s)*2,n+r*.07,.12,.012)});break;case"hmm":this.tone("sine",ue(67),n,.25,.05),this.tone("sine",ue(64),n+.15,.3,.045);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.9]].forEach(([s,r])=>{this.tone("triangle",ue(s),n+r,.5,.08),this.tone("sine",ue(s)*2,n+r,.2,.02)});for(let s=0;s<10;s++)this.noise(n+.3+s*.05,.05,.025,"highpass",7500,1);break;case"roundWin":[[79,0],[84,.1],[88,.2],[91,.32]].forEach(([s,r])=>this.tone("sine",ue(s),n+r,.4,.07));break;default:}}voice(t,e,n){t.forEach((s,r)=>{let a=e+r*.11;this.slide("sine",ue(s)*.94,ue(s),a,.12,n),this.slide("square",ue(s)*.94,ue(s),a,.1,n*.12)})}};function Id(i){return String(i).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu,"").replace(/\s+/g," ").trim()}function Cd(i,t){let e=`${t==="en"?"en":"ar"}|${Id(i)}`,n=2166136261;for(let s of new TextEncoder().encode(e))n^=s,n=Math.imul(n,16777619)>>>0;return n.toString(16).padStart(8,"0")}var ya=class{constructor(t,e,n,s){if(this.dir=`${t}../learn_voice/`,this.lang=e==="en"?"en":"ar",this.fallback=n,this.onTalk=s||(()=>{}),this.queue=[],this.audio=null,this.muted=!1,typeof document!="undefined"&&!window.__learnVoice&&!document.getElementById("learn-voice-manifest")){let r=document.createElement("script");r.id="learn-voice-manifest",r.src=`${this.dir}manifest.js`,r.onerror=()=>{window.__learnVoice=window.__learnVoice||{ar:[],en:[]}},document.head.append(r)}}has(t){let e=typeof window!="undefined"&&window.__learnVoice;return!!(e&&e[this.lang]&&e[this.lang].includes(Cd(t,this.lang)))}say(t,e,n){this.stop(),this.queue=(Array.isArray(t)?t:[t]).map(Id).filter(Boolean),this.i=0,this.onEach=e||null,this.onDone=n||null,this.run=(this.run||0)+1,!this.queue.length&&this.onDone?this.onDone():this._next()}_finish(){let t=this.onDone;this.onDone=null,t&&t()}_start(t){this.onEach&&this.onEach(t)}_next(t=0){if(this.muted){this._finish();return}if(!this.queue.length){this._finish();return}if(typeof window!="undefined"&&!window.__learnVoice&&t<8){let r=this.queue;setTimeout(()=>{this.queue===r&&this._next(t+1)},130);return}let e=this.queue.shift();if(!this.has(e)){let r=[e,...this.queue],a=r.join(this.lang==="en"?", ":"\u060C ");this.queue=[],this.onTalk(Math.min(8,1.2+a.length*.09)),this.fallback(a,this.lang);let o=Math.max(600,Math.min(1100,a.length*90/r.length)),l=this.run;r.forEach((c,h)=>setTimeout(()=>{l===this.run&&this._start(this.i+h)},h*o)),setTimeout(()=>{l===this.run&&this._finish()},r.length*o+300);return}this._start(this.i++);let n=new Audio(`${this.dir}${this.lang}/${Cd(e,this.lang)}.mp3`);this.audio=n,n.addEventListener("loadedmetadata",()=>this.onTalk((n.duration||2)+.3)),n.addEventListener("ended",()=>{this.audio===n&&(this.audio=null,this._next())}),n.addEventListener("error",()=>{this.audio===n&&(this.audio=null,this.onTalk(Math.min(6,1.2+e.length*.09)),this.fallback(e,this.lang),this._next())}),this.onTalk(2.5);let s=n.play();s&&s.catch&&s.catch(()=>{})}stop(){if(this.run=(this.run||0)+1,this.queue=[],this.onDone=null,this.audio){try{this.audio.pause()}catch{}this.audio=null}}};function Et(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Q_={back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Let's play"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],newStar_m:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643! \u2B50","A new star for you! \u2B50"],newStar_f:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643\u064A! \u2B50","A new star for you! \u2B50"],doneAgain_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],doneAgain_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],great_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],great_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],greatSay_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],greatSay_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],newStarSay_m:["\u062E\u062F\u062A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"],newStarSay_f:["\u062E\u062F\u062A\u064A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"]};function wd(i,t){let e=t.lang==="en"?"en":"ar",n=t.gender==="girl",s={...Q_,...i};return{t:o=>{let l=`${o}_${n?"f":"m"}`,c=s[l]?l:o;return s[c]?s[c][e==="en"?1:0]:o},num:o=>e==="en"?String(o):String(o).replace(/[0-9]/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]),lang:e,girl:n}}var tx=`
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
`,va=class{constructor(t,e,n,s){this.el=t,this.cfg=e||{},this.post=n||(()=>{}),this.opts=s,this.T=wd(s.text||{},this.cfg),this.age=Math.min(6,Math.max(3,Number(this.cfg.age)||5)),this.base=this.cfg.base||"./",this.done=!!this.cfg.done,this.save=this.cfg.save&&typeof this.cfg.save=="object"?{...this.cfg.save}:{},this.sound=new Aa(s.theme),s.musicOnly&&(this.sound.musicOnly=!0,this.opts.voice=!1),this.voice=new ya(this.base,this.T.lang,(r,a)=>this.post({type:"speak",text:r,lang:a}),r=>this.sound.duck(r)),this.sound.muted=!!this.save.muted,document.getElementById("lk-style")||document.head.append(Et("style",{id:"lk-style"},tx)),this.root=Et("div",{class:"lk-root",dir:this.T.lang==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=Et("div",{class:"lk-layer"}),this.root.append(this.layer);for(let r of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(r,()=>this.sound.unlock(),{capture:!0,passive:!0});this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=Et("button",{class:"lk-soundpill",onclick:r=>{r.stopPropagation(),this.sound.unlock()}},this.T.t("sound")),this.root.append(this.soundPill),this._tapped=!1,this.root.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t)}t(t){return this.T.t(t)}setGender(t){this.cfg.gender=t==="girl"?"girl":"boy",this.T=wd(this.opts.text||{},this.cfg)}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.onResize&&this.onResize(this.w,this.h)}async fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,2500))])}catch{}}speak(t,e,n){if(!t||this.opts.voice===!1){n&&n();return}this.voice.muted=this.sound.muted,this.voice.say(t,e,n)}round(t,e,n){t&&this.post({type:"round",skill:t,correct:!!e,detail:n==null?null:String(n)})}complete(){this.post({type:"complete"})}saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}exit(){this.saveNow(),this.post({type:"exit"})}clear(){this.layer.replaceChildren(),this.bubble=null}backBtn(){return Et("button",{class:"lk-rbtn","aria-label":this.t("back"),onclick:t=>{t.stopPropagation(),this.exit()}},this.T.lang==="en"?"\u2190":"\u2192")}soundBtn(){let t=Et("button",{class:"lk-rbtn y","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}topBar(t,e){let n=Et("div",{class:"lk-dots","aria-hidden":"true"},Array.from({length:t},()=>Et("span",{},e)));return this.layer.append(Et("div",{class:"lk-top"},this.backBtn(),n,this.soundBtn())),this.bubble=Et("div",{class:"lk-bubble",role:"status"}),this.layer.append(this.bubble),s=>[...n.children].forEach((r,a)=>r.classList.toggle("on",a<s))}say(t,e,n=3.2){this.bubble&&(this.bubble.textContent=t,this.bubble.classList.add("show"),clearTimeout(this._bt),n>0&&(this._bt=setTimeout(()=>this.bubble&&this.bubble.classList.remove("show"),n*1e3)),e&&this.speak(e===!0?t:e))}titleCard(t,e,n,s=!1){this.clear(),this.sound.setMode("menu"),this.layer.append(Et("div",{class:"lk-top"},this.backBtn(),Et("span"),this.soundBtn()));let r=Et("button",{class:"lk-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),n()}},"\u25B6 ",this.t("play"));s?this.layer.append(Et("div",{class:"lk-dim",style:"background:none"},r)):this.layer.append(Et("div",{class:"lk-dim",style:"background:none"},Et("div",{class:"lk-card"},Et("div",{class:"lk-title"},t),Et("div",{class:"lk-big"},e),r))),setTimeout(()=>r.focus({preventScroll:!0}),50)}finishCard(t,e,n,s,r){this.complete();let a=!this.done;this.done=!0,this.sound.play("win"),setTimeout(()=>this.sound.play("star"),900),this.speak(a?`${this.t("greatSay")} ${this.t("newStarSay")}`:this.t("doneAgain"));let o=Et("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),n()}},"\u21BB ",this.t("again"));this.layer.append(Et("div",{class:"lk-dim"},Et("div",{class:"lk-card"},Et("div",{class:"lk-title",style:"font-size:calc(var(--u)*8)"},t),Et("div",{class:"lk-starburst"},a?"\u2B50":e),Et("div",{class:"lk-msg"},this.t("great")),Et("div",{class:"lk-small",style:"font-size:calc(var(--u)*4.6);color:#6a3ad0"},a?this.t("newStar"):this.t("doneAgain")),s?Et("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),s()}},this.t("nextLevel")):null,o,r?Et("button",{class:"lk-btn p",onclick:()=>{this.sound.play("tap"),r()}},this.t("levelsBtn")):null,Et("button",{class:"lk-btn p",onclick:()=>this.exit()},this.t("back"))))),setTimeout(()=>o.focus({preventScroll:!0}),50)}pause(){this.sound.suspend(),this.voice&&this.voice.stop()}dispose(){this.voice&&this.voice.stop(),clearInterval(this._pill),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}};var Ca=class extends us{constructor(){super();let t=new le;t.deleteAttribute("uv");let e=new Yt({side:ke}),n=new Yt,s=new ha(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new X(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new X(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new X(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new X(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new X(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new X(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new X(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new X(t,_s(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new X(t,_s(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new X(t,_s(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new X(t,_s(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new X(t,_s(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new X(t,_s(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function _s(i){let t=new Gt;return t.color.setScalar(i),t}function bd(i,t,{env:e=.35,exposure:n=.95}={}){i.toneMapping=Vl,i.toneMappingExposure=n;try{let s=new ds(i);t.environment=s.fromScene(new Ca,.04).texture,t.environmentIntensity=e,s.dispose()}catch{}}function Ye(i,{top:t="#5ab4ff",horizon:e="#d8f0ff"}={}){let n=document.createElement("canvas");n.width=8,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,t),r.addColorStop(.6,e),r.addColorStop(1,"#fff6e0"),s.fillStyle=r,s.fillRect(0,0,8,256);let a=new mn(n);a.colorSpace=oe;let o=new X(new be(90,24,16),new Gt({map:a,side:ke,fog:!1,depthWrite:!1}));return o.renderOrder=-10,i.add(o),i.background=null,o}function Ni(i,t=7,{y:e=11,spread:n=36,z:s=-22}={}){let r=new Rt,a=new Yt({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.35});for(let o=0;o<t;o++){let l=new Rt,c=4+o%3;for(let h=0;h<c;h++){let d=new X(new be(1.2+h%3*.45,14,10),a);d.position.set((h-c/2)*1.5,Math.sin(h*1.7)*.4,h%2*.5),d.scale.y=.7,l.add(d)}l.position.set((o/t-.5)*n+Math.sin(o*3)*3,e+o%3*1.6,s-o%2*6),l.userData.v=.08+o%4*.03,r.add(l)}return i.add(r),r.userData.drift=o=>{for(let l of r.children)l.position.x+=l.userData.v*o,l.position.x>n/2+6&&(l.position.x=-n/2-6)},r}function Md(i=3,t=3844170){let e=new Rt,n=new X(new ce(.16*i/3,.26*i/3,i*.55,10),new Yt({color:8014370,roughness:1}));n.position.y=i*.27,n.castShadow=!0,e.add(n);let s=new Yt({color:t,roughness:.85});for(let[r,a,o,l]of[[0,i*.8,0,.62],[-.45,i*.66,.1,.45],[.45,i*.68,-.1,.46],[.05,i*1.02,.05,.42],[-.1,i*.7,.4,.4]]){let c=new X(new be(l*i/3*1.5,14,11),s);c.position.set(r*i/3*1.5,a,o*i/3*1.5),c.castShadow=!0,e.add(c)}return e.userData.sway={amp:.018+Math.random()*.012,ph:Math.random()*6.28,sp:.8+Math.random()*.5},e}function ex(i=.7,t=3840584){let e=new Rt,n=new Yt({color:t,roughness:.9});for(let[s,r,a,o]of[[0,.5,0,1],[-.7,.35,.1,.7],[.7,.38,-.05,.75]]){let l=new X(new be(i*o,12,9),n);l.position.set(s*i,r*i,a*i),l.castShadow=!0,e.add(l)}return e.userData.sway={amp:.03,ph:Math.random()*6.28,sp:1.1},e}function nx(i=16738970,t=.55){let e=new Rt,n=new X(new ce(.02,.025,t,6),new Yt({color:3840570}));n.position.y=t/2,e.add(n);let s=new Yt({color:i,roughness:.6});for(let a=0;a<6;a++){let o=a/6*Math.PI*2,l=new X(new be(.08,8,6),s);l.position.set(Math.cos(o)*.11,t,Math.sin(o)*.11),l.scale.set(1,.5,1),e.add(l)}let r=new X(new be(.07,8,6),new Yt({color:16769114}));return r.position.y=t+.02,e.add(r),e.userData.sway={amp:.14,ph:Math.random()*6.28,sp:1.6+Math.random()*.8},e}function ic(i=.5){let t=new X(new sa(i,1),new Yt({color:10132132,roughness:.95,flatShading:!0}));return t.scale.set(1.2,.7,1),t.castShadow=!0,t}function Ia(i,t,e=0){let n=[16738970,16765498,16777215,12086015,16747066];t.forEach((s,r)=>{let a;s.t==="tree"?a=Md(s.s||3.4,s.c||[3844170,4896858,3119685][r%3]):s.t==="bush"?a=ex(s.s||.7):s.t==="rock"?a=ic(s.s||.5):a=nx(n[r%n.length],s.s||.55),a.position.set(s.x,e,s.z),a.rotation.y=r*1.3,i.add(a)})}function sc(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"));let r=new mn(s);return r.colorSpace=oe,n&&(r.wrapS=r.wrapT=wn,r.repeat.set(...n)),r}var Pe=(i,t={})=>new Yt({color:i,roughness:.55,...t});function Ed(i,{size:t=160,color:e="#3a2a5a",bg:n=null,font:s="900"}={}){return sc(256,256,r=>{n&&(r.fillStyle=n,r.beginPath(),r.arc(128,128,120,0,Math.PI*2),r.fill()),r.fillStyle=e,r.font=`${s} ${t}px Tajawal, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,138)})}var wa=class{constructor(t,e={}){this.sh=t,this.o={bg:14676991,ground:14207144,fov:40,box:[5,3],dir:[0,.45,.9],target:[0,.8,0],...e},this.renderer=new Zr({antialias:!0,powerPreference:"high-performance"}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=oe,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hl,t.root.prepend(this.renderer.domElement),this.scene=new us,bd(this.renderer,this.scene),this.scene.background=new Kt(this.o.bg),this.camera=new Ve(this.o.fov,1,.1,120),this.scene.add(new la(16777215,this.o.ground,1.6));let n=new da(16774368,2);n.position.set(-3,9,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:34}),this.scene.add(n),this.fx=[],this.picks=[],this.focus=null,this.mode="title",this.clock=new ua,this.frames=[],t.onResize=(s,r)=>this.resize(s,r),this.resize(t.w,t.h),this._bind(),this._loop()}add(...t){return this.scene.add(...t),t[0]}resize(t,e){var d;let n=this.renderer;n.setSize(t,e,!1),n.domElement.style.width="100%",n.domElement.style.height="100%";let s=this.camera;s.aspect=t/e,s.updateProjectionMatrix();let r=Math.tan(ld.degToRad(s.fov/2)),a=this.o.wide&&s.aspect>=((d=this.o.wide.minAspect)!=null?d:1.45)?this.o.wide:null,o=a?a.box:this.o.box,l=Math.max(o[1]/r,o[0]/(r*s.aspect)),c=new R(...this.o.dir).normalize(),h=new R(...a?a.target:this.o.target);s.position.copy(h).addScaledVector(c,l),s.lookAt(h)}setPicks(t,e){this.picks=t,this.onPick=e,this.focus!=null&&this.focus>=t.length&&(this.focus=null)}_bind(){let t=this.sh.root;this._up=e=>{if(this.mode!=="wait"||!this.picks.length||e.target.closest("button")||e.target.closest(".lk-dim"))return;let n=t.getBoundingClientRect(),s=new ot((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new fa;r.setFromCamera(s,this.camera);let a=r.intersectObjects(this.picks.map(o=>o.hit),!1)[0];a&&this.onPick(a.object.userData.id)},t.addEventListener("pointerup",this._up),this._key=e=>{var s;if(this.mode!=="wait"||!this.picks.length)return;let n=this.picks.length;e.key==="ArrowLeft"||e.key==="ArrowRight"?(e.preventDefault(),this.focus=(((s=this.focus)!=null?s:e.key==="ArrowRight"?-1:0)+(e.key==="ArrowRight"?1:-1)+n)%n,this.sh.sound.play("tap")):(e.key==="Enter"||e.key===" ")&&this.focus!=null&&(e.preventDefault(),this.onPick(this.picks[this.focus].hit.userData.id))},window.addEventListener("keydown",this._key)}focusedId(){return this.focus!=null&&this.picks[this.focus]?this.picks[this.focus].hit.userData.id:null}sparkle(t,e=22){let n=[16734810,16763194,4892927,7002218,16777215];for(let s=0;s<e;s++){let r=new X(new ra(.06),new Gt({color:n[s%5]}));r.position.copy(t);let a=Math.random()*Math.PI*2;r.userData={v:new R(Math.cos(a)*1.5,2+Math.random()*2,Math.sin(a)*1.2),life:1},this.scene.add(r),this.fx.push(r)}}onFrame(t){this.frames.push(t)}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;for(let n of this.frames)n(t,e);for(let n=this.fx.length-1;n>=0;n--){let s=this.fx[n],r=s.userData;r.life-=t,r.v.y-=6*t,s.position.addScaledVector(r.v,t),r.life<=0&&(this.scene.remove(s),s.geometry.dispose(),this.fx.splice(n,1))}this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._key),this.sh.root.removeEventListener("pointerup",this._up),this.renderer.dispose()}};var rc=new Map;function st(i,t=.45){let e=`${i}|${t}`;return rc.has(e)||rc.set(e,new Yt({color:i,roughness:t,metalness:.02})),rc.get(e)}function Ne(i,t,e=0,n=0,s=0){let r=new X(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var Pt=(i,t,e,n,s,r=1,a=1,o=1,l=18)=>{let c=Ne(new be(i,l,Math.max(10,l-4)),t,e,n,s);return c.scale.set(r,a,o),c},Me=(i,t,e,n,s,r,a,o=18)=>Ne(new ce(i,t,e,o),n,s,r,a),De=(i,t,e,n,s,r,a)=>Ne(new le(i,t,e),n,s,r,a),di=1710628,Tn=16777215;function ac(i,t,e,n,s=1,r=.08){for(let a of[-1,1])i.add(Pt(.045*s,st(Tn,.3),t+a*r*s,e,n)),i.add(Pt(.026*s,st(di,.2),t+a*r*s,e,n+.03*s)),i.add(Pt(.009*s,st(Tn,.2),t+a*r*s+.01*s,e+.012*s,n+.05*s))}function ba(i,t,e,n,s=.6){let r=Pt(.09,st(3848266,.5),t,e,n,1,.35,.6);r.rotation.z=s,i.add(r)}var oc={apple(i){i.add(Pt(.34,st(15216682,.35),0,.34,0,1,.92,1)),i.add(Me(.02,.025,.14,st(6961690),0,.7,0)),ba(i,.08,.72,0),i.add(Pt(.06,st(16777215,.2),-.13,.48,.24,1,1.4,.5))},banana(i){let t=new fs([new R(-.38,.42,0),new R(-.2,.18,0),new R(.1,.12,0),new R(.36,.34,0)]),e=Ne(new Xs(t,24,.11,12),st(16765498,.4));i.add(e),i.add(Pt(.05,st(6965786),-.4,.45,0)),i.add(Pt(.04,st(4864538),.38,.37,0))},orange(i){i.add(Pt(.33,st(16747034,.5),0,.33,0)),i.add(Me(.015,.02,.06,st(4880938),0,.66,0)),ba(i,.06,.66,0,.3)},strawberry(i){let t=Ne(new nn(.3,.5,18),st(15738938,.4),0,.3,0);t.rotation.x=Math.PI,i.add(t),i.add(Pt(.3,st(15738938,.4),0,.5,0,1,.45,1));for(let e=0;e<14;e++){let n=e*2.4,s=.25+e%4*.07,r=.22-(.55-s)*.2;i.add(Pt(.018,st(16769658,.3),Math.cos(n)*r,s,Math.sin(n)*r))}for(let e=0;e<5;e++){let n=Pt(.1,st(3848266),Math.cos(e*1.26)*.12,.62,Math.sin(e*1.26)*.12,1,.25,.5);n.rotation.y=-e*1.26,i.add(n)}},pear(i){i.add(Pt(.3,st(11065402,.45),0,.3,0)),i.add(Pt(.2,st(11065402,.45),0,.58,0)),i.add(Me(.02,.025,.12,st(6961690),.02,.8,0)),ba(i,.1,.8,0)},grapes(i){let t=st(9059032,.3),e=0;for(let[n,s,r]of[[4,.62,.16],[4,.46,.14],[3,.31,.1],[1,.17,0]]){for(let a=0;a<n;a++){let o=a/n*Math.PI*2+e;i.add(Pt(.1,t,Math.cos(o)*r,s,Math.sin(o)*r))}e+=.5}i.add(Me(.02,.02,.14,st(6965786),0,.78,0)),ba(i,.1,.8,0)},watermelon(i){let t=new _n;t.absarc(0,0,.42,0,Math.PI,!1);let e=new hi(t,{depth:.18,bevelEnabled:!1,curveSegments:24});e.translate(0,0,-.09);let n=Ne(e,st(2791994));n.rotation.x=Math.PI,n.position.y=.44,i.add(n);let s=new _n;s.absarc(0,0,.36,0,Math.PI,!1);let r=Ne(new hi(s,{depth:.2,bevelEnabled:!1,curveSegments:24}),st(16730714));r.geometry.translate(0,0,-.1),r.rotation.x=Math.PI,r.position.y=.44,i.add(r);for(let[a,o]of[[-.18,.3],[0,.22],[.18,.3],[-.08,.36],[.1,.36]])i.add(Pt(.025,st(di),a,o,.105,1,1.5,.5))},ball(i){i.add(Pt(.34,st(16777215,.3),0,.34,0));let t=Ne(new Ie(.34,.06,10,36),st(16726602,.3),0,.34,0);i.add(t);let e=Ne(new Ie(.34,.06,10,36),st(3836671,.3),0,.34,0);e.rotation.y=Math.PI/2,i.add(e);let n=Ne(new Ie(.34,.06,10,36),st(16765498,.3),0,.34,0);n.rotation.x=Math.PI/2,i.add(n)},teddy(i){let t=st(13141066,.8),e=st(15779984,.8);i.add(Pt(.22,t,0,.26,0,1,1.05,.9)),i.add(Pt(.14,e,0,.25,.14,1,1.1,.6)),i.add(Pt(.19,t,0,.6,0)),i.add(Pt(.08,e,0,.56,.16,1,.8,.8)),i.add(Pt(.03,st(di),0,.58,.23));for(let s of[-1,1])i.add(Pt(.07,t,s*.15,.76,0)),i.add(Pt(.04,e,s*.15,.76,.04)),i.add(Pt(.025,st(di,.2),s*.07,.65,.17)),i.add(Pt(.08,t,s*.22,.32,.06)),i.add(Pt(.09,t,s*.13,.07,.08,1,.8,1.2));let n=Pt(.05,st(16726634),0,.44,.17,2,.8,.6);i.add(n)},blocks(i){let t=[16730698,4892927,16762938];[[-.18,.13,0],[.18,.13,.02],[0,.39,0]].forEach(([e,n,s],r)=>{let a=De(.26,.26,.26,st(t[r],.4),e,n,s);a.rotation.y=(r-1)*.2,i.add(a);let o=De(.14,.14,.01,st(Tn,.4),e,n,s+.135);o.rotation.y=a.rotation.y,i.add(o)})},drum(i){i.add(Me(.3,.3,.34,st(15220778,.4),0,.2,0,24)),i.add(Me(.31,.31,.04,st(16765498,.3),0,.38,0,24)),i.add(Me(.31,.31,.04,st(16765498,.3),0,.03,0,24)),i.add(Me(.29,.29,.02,st(16315626,.6),0,.4,0,24));for(let t=0;t<6;t++){let e=t/6*Math.PI*2,n=Me(.012,.012,.36,st(Tn),Math.cos(e)*.3,.2,Math.sin(e)*.3,6);n.rotation.z=t%2?.5:-.5,i.add(n)}for(let t of[-1,1]){let e=Me(.02,.02,.42,st(14198890),t*.14,.55,.05,8);e.rotation.z=t*.8,i.add(e),i.add(Pt(.04,st(14198890),t*.3,.7,.05))}},yoyo(i){for(let e of[-1,1]){let n=Me(.3,.3,.1,st(e<0?3852456:16739e3,.35),0,.32,e*.08,24);n.rotation.x=Math.PI/2,i.add(n)}let t=Me(.08,.08,.08,st(Tn),0,.32,0);t.rotation.x=Math.PI/2,i.add(t),i.add(Me(.008,.008,.4,st(Tn),0,.68,0,6)),i.add(Pt(.04,st(16765498),0,.88,0))},cat(i){let t=st(16754762,.7);i.add(Pt(.22,t,0,.24,-.05,1,.95,1.1)),i.add(Pt(.18,t,0,.52,.12));for(let n of[-1,1]){let s=Ne(new nn(.07,.13,12),t,n*.1,.68,.1);s.rotation.z=-n*.25,i.add(s),i.add(Pt(.06,t,n*.12,.05,.12,1,.7,1.3))}ac(i,0,.55,.26,1,.065),i.add(Pt(.025,st(16743066),0,.49,.29));let e=Ne(new Xs(new fs([new R(0,.2,-.3),new R(.1,.35,-.42),new R(.05,.55,-.38)]),12,.04,8),t);i.add(e);for(let n=0;n<3;n++)i.add(De(.12,.02,.01,st(14186538),0,.62+n*.03-.03,.29-n*.02))},fish(i){let t=st(16747050,.35);i.add(Pt(.26,t,0,.36,0,.6,.85,1.3));let e=Ne(new nn(.18,.24,4),t,0,.36,-.42);e.rotation.x=-Math.PI/2,e.scale.set(.3,1,1.2),i.add(e);for(let s of[-.08,.1])i.add(Pt(.2,st(Tn,.4),0,.36,s,.62,.84,.12));for(let s of[-1,1])i.add(Pt(.05,st(Tn,.3),s*.14,.42,.2)),i.add(Pt(.028,st(di),s*.17,.42,.22));let n=Ne(new nn(.1,.18,4),t,0,.6,-.05);n.scale.set(.2,1,1),i.add(n)},chick(i){let t=st(16767034,.6);i.add(Pt(.22,t,0,.24,0)),i.add(Pt(.16,t,0,.5,.04)),ac(i,0,.53,.17,.9,.06);let e=Ne(new nn(.04,.09,8),st(16747034),0,.48,.21);e.rotation.x=Math.PI/2,i.add(e);for(let n of[-1,1]){let s=Pt(.1,t,n*.2,.26,0,.4,.8,1);s.rotation.z=n*.4,i.add(s),i.add(De(.06,.02,.1,st(16747034),n*.07,.01,.06))}i.add(Pt(.04,t,0,.68,.02,.6,1.2,.6))},bunny(i){let t=st(16052468,.8);i.add(Pt(.22,t,0,.24,-.02,1,.95,1.05)),i.add(Pt(.16,t,0,.5,.1));for(let e of[-1,1]){let n=Pt(.06,t,e*.07,.78,.06,.8,2.6,.6);n.rotation.z=-e*.12,i.add(n),i.add(Pt(.035,st(16754880),e*.07,.78,.1,.8,2.2,.4)),i.add(Pt(.06,t,e*.1,.04,.14,1,.6,1.4))}ac(i,0,.53,.23,.85,.06),i.add(Pt(.025,st(16747176),0,.47,.26)),i.add(Pt(.07,t,0,.22,-.26))},frog(i){let t=st(5949498,.45);i.add(Pt(.26,t,0,.2,0,1.1,.75,1));for(let n of[-1,1])i.add(Pt(.1,t,n*.12,.38,.1)),i.add(Pt(.065,st(Tn,.3),n*.12,.42,.16)),i.add(Pt(.035,st(di),n*.12,.43,.21)),i.add(Pt(.09,t,n*.24,.05,.12,1,.4,1.4));let e=Ne(new Ie(.1,.012,6,16,Math.PI),st(2779674),0,.24,.24);e.rotation.z=Math.PI,i.add(e),i.add(Pt(.18,st(13168778,.5),0,.13,.08,1,.5,1))},car(i){i.add(De(.74,.22,.4,st(15216682,.3),0,.22,0)),i.add(De(.4,.2,.36,st(15216682,.3),-.05,.42,0));for(let t of[-1,1])i.add(De(.17,.14,.37,st(10148095,.1),-.05+t*.1,.43,0));for(let t of[-.24,.24])for(let e of[-.21,.21]){let n=Me(.1,.1,.07,st(di,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n),i.add(Me(.045,.045,.075,st(14211296,.3),t,.1,e).rotateX(Math.PI/2))}for(let t of[-.12,.12])i.add(Pt(.035,st(16773800,.2),.37,.25,t));i.rotation.y=-Math.PI/2},bus(i){i.add(De(.86,.42,.4,st(16761402,.35),0,.33,0));for(let t=0;t<4;t++)for(let e of[-1,1])i.add(De(.15,.12,.01,st(10148095,.1),-.3+t*.19,.42,e*.205));i.add(De(.01,.16,.3,st(10148095,.1),.435,.42,0)),i.add(De(.88,.04,.41,st(3816010),0,.22,0));for(let t of[-.28,.28])for(let e of[-.21,.21]){let n=Me(.09,.09,.07,st(di,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n)}i.rotation.y=-Math.PI/2},boat(i){let t=new _n;t.moveTo(-.42,.2),t.lineTo(.42,.2),t.lineTo(.3,0),t.lineTo(-.3,0),t.closePath();let e=Ne(new hi(t,{depth:.3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),st(3832552,.35),0,.02,-.15);i.add(e),i.add(De(.86,.04,.32,st(Tn,.4),0,.22,0)),i.add(Me(.015,.015,.62,st(9067050),0,.53,0,8));let n=new _n;n.moveTo(0,0),n.lineTo(.3,0),n.lineTo(0,.5),n.closePath();let s=Ne(new aa(n),new Yt({color:16734810,side:ve,roughness:.6}),.02,.28,0);i.add(s),i.rotation.y=-Math.PI/2},plane(i){let t=st(16053498,.3),e=Me(.1,.07,.8,t,0,.32,0);e.rotation.z=Math.PI/2,i.add(e),i.add(Pt(.1,t,.4,.32,0,1,1,1)),i.add(De(.22,.03,.86,st(3836671,.35),.02,.3,0)),i.add(De(.12,.02,.32,st(3836671,.35),-.36,.34,0)),i.add(De(.12,.18,.02,st(16730698,.35),-.36,.44,0));for(let s=0;s<3;s++)for(let r of[-1,1])i.add(Pt(.025,st(6998271,.1),.1-s*.12,.37,r*.09));let n=De(.02,.26,.04,st(3816010),.5,.32,0);i.add(n),i.userData.prop=n,i.rotation.y=-Math.PI/2},train(i){i.add(De(.5,.3,.36,st(3852394,.35),-.12,.25,0)),i.add(De(.26,.24,.36,st(15220778,.35),-.24,.52,0)),i.add(De(.18,.1,.38,st(10148095,.1),-.24,.56,0));let t=Me(.14,.14,.36,st(3832552,.35),.24,.27,0);t.rotation.z=Math.PI/2,i.add(t),i.add(Me(.05,.07,.18,st(3816010),.3,.48,0)),i.add(Pt(.06,st(16765498),.42,.27,0));for(let e of[-.26,0,.26])for(let n of[-.19,.19]){let s=Me(.09,.09,.05,st(16761402,.4),e,.1,n);s.rotation.x=Math.PI/2,i.add(s)}i.rotation.y=-Math.PI/2}},uA=Object.keys(oc);function Sd(i){let t=new Rt,e=new Rt;return(oc[i]||oc.ball)(e),t.add(e),t.userData.id=i,t.userData.inner=e,t}function Ma(i,t=.34,e=.07){let n=new _n;if(i==="circle")n.absarc(0,0,.72,0,Math.PI*2);else if(i==="square")n.moveTo(-.62+.14,-.62),n.lineTo(.62-.14,-.62),n.quadraticCurveTo(.62,-.62,.62,-.62+.14),n.lineTo(.62,.62-.14),n.quadraticCurveTo(.62,.62,.62-.14,.62),n.lineTo(-.62+.14,.62),n.quadraticCurveTo(-.62,.62,-.62,.62-.14),n.lineTo(-.62,-.62+.14),n.quadraticCurveTo(-.62,-.62,-.62+.14,-.62);else if(i==="triangle")n.moveTo(-.82,-.6),n.lineTo(.82,-.6),n.lineTo(0,.82),n.closePath();else if(i==="star"){for(let r=0;r<10;r++){let a=Math.PI/2+r*Math.PI/5,o=r%2?.42:.92,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else n.moveTo(0,-.78),n.bezierCurveTo(-.2,-.55,-.9,-.2,-.9,.28),n.bezierCurveTo(-.9,.7,-.35,.85,0,.4),n.bezierCurveTo(.35,.85,.9,.7,.9,.28),n.bezierCurveTo(.9,-.2,.2,-.55,0,-.78);let s=new hi(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:4,curveSegments:20});return s.center(),s}var lc={ambulance:[220,130],ant:[340,280],apple:[180,190],banana:[210,180],bee:[320,240],boat:[230,170],boy_idle:[410,810],boy_point:[310,490],boy_read:[260,430],boy_wave:[352,490],brachio:[400,298],bus:[200,130],butterfly:[270,230],car:[220,110],carrot:[190,190],cat:[310,410],cat2:[410,450],caterpillar:[380,240],cheetah:[490,440],chick:[340,340],clownfish:[320,250],cow:[492,472],cow2:[470,470],crab:[400,310],croc:[340,490],croc2:[440,260],dog:[280,420],dog2:[400,440],dolphin:[420,340],dragonfly:[1010,640],elephant:[380,460],elephant2:[520,470],firetruck:[230,140],frog:[156,256],giraffe:[300,500],giraffe2:[310,520],girl_cheer:[300,470],girl_idle:[430,840],girl_stand_read:[280,490],girl_wave:[332,490],goose:[270,410],grapes:[150,200],grasshopper:[400,250],helicopter:[280,140],hen:[300,380],horse:[450,470],iguana:[440,240],ladybug:[300,190],lion:[280,480],lion2:[360,450],mallard:[320,340],mango:[190,200],mantis:[360,250],monkey:[420,450],octopus:[430,330],orange:[164,176],owl:[490,532],owlbrown:[260,330],panda:[380,430],parrot:[370,330],peacock:[430,340],penguin:[330,350],pig:[410,450],pigeon:[300,320],pineapple:[130,230],plane:[250,150],police:[240,140],rabbit:[360,450],seahorse:[210,340],shark:[460,290],sheep:[222,350],sheep2:[430,430],snake:[360,270],starfish:[320,320],stego:[480,268],strawberry:[144,190],tiger:[430,450],tortoise:[390,230],train:[280,150],trex:[450,288],triceratops:[390,290],turtle:[450,310],watermelon:[210,164],zebra:[440,490],fox:[1040,1020],camel:[1040,1020],sun:[992,1020],rose:[1040,1028],pomegranate:[1040,1028],rocket:[992,1028],ball:[1040,1020],crow:[1040,1020],envelope:[992,1020],lemon:[1040,1028],crescent:[1040,1028],corn:[992,1048],rabbit_n:[1040,1020],duck_n:[1040,1020],banana_n:[992,1020],apple_n:[1040,1028],clownfish_n:[1040,1028],butterfly_n:[992,1028],cat_n:[1040,1020],horse_n:[1040,1020],sheep_n:[992,1020],hen_n:[1040,1028],bee_n:[1040,1028],giraffe_n:[992,1048],windmill_p:[800,900],house_p:[1120,760],tree_oak:[890,900],tree_apple:[664,800],tuft_1:[430,350],tuft_2:[450,350],tuft_3:[450,350],lotus_p:[740,400],fence_p:[1120,370],hay_p:[1020,580],stones_p:[1100,250],flowers_p:[1040,510],frog_n:[1536,1024],plane_n:[1536,1024],grapes_n:[1536,1044],dove_n:[1536,1024],butterfly_1:[480,380],butterfly_2:[460,440],butterfly_3:[430,360],bird_blue:[820,670],bird_yellow:[900,710],ladybug_leaf:[1e3,630],barn_f:[1080,810],silo_f:[470,790],pump_f:[490,780],gate_f:[970,400],hayroll_f:[530,490],haystack_f:[520,470],trough_f:[620,390],scarecrow_f:[550,680],tractor_f:[860,660],crate_apple:[550,490],crate_carrot:[530,510],crate_corn:[540,490],sunflower_1:[390,610],sunflower_2:[440,530],b_clown:[1084,1084],b_tang:[1084,1084],b_yellowfish:[1084,1084],b_octopus:[1084,1084],b_crab_walk:[1084,1084],b_gull_fly:[1084,1084],b_shell:[828,742],b_spiral:[828,742],b_starfish:[828,742],b_crab:[828,742],b_jelly:[828,742],b_turtle:[828,742],b_dolphin:[828,742],b_gull:[828,742],b_gull_fly2:[828,742],b_coral:[828,742],b_ball:[828,742],b_ring:[828,742],b_palm1:[828,742],b_palm2:[828,742],b_umbrella:[828,742],b_castle:[828,742],b_lighthouse:[828,742],b_boat:[828,742],b_dock:[828,742],b_chair:[828,742],b_rocks:[828,742],b_weed:[828,742],b_surf:[828,742],b_bucket:[828,742],f_pad_stump:[1596,1084],f_pad_hay:[1596,1084],f_pad_nest:[1596,1084],f_pad_plank:[1596,1084],f_coop:[828,742],f_eggs:[828,742],f_milk:[828,742],f_barrow:[828,742],f_water_can:[828,742],f_sign:[828,742],f_bucket:[828,742],f_stool:[828,742],f_barrels:[828,742],f_post:[828,742],f_haypile:[828,742],f_birdhouse:[828,742],f_cow:[916,940],f_pig:[600,760],f_horse:[860,980],f_sheep:[692,840],f_goat:[680,1060],f_donkey:[720,1080],f_rooster:[680,1040],f_hen:[740,960],s_pad_moon:[1596,1084],s_pad_energy:[1566,1084],s_pad_metal:[1596,1054],s_pad_crystal:[1566,1054],s_alien:[828,1084],s_robot:[828,1084],s_cat:[828,1084],s_dog:[798,1084],s_shoot:[828,1054],s_rocket:[828,1054],s_helmet:[828,1054],s_comet:[798,1054],s_launch:[828,742],s_ufo:[828,742],s_station:[828,742],s_rock:[798,742],s_crystal:[828,742],s_dish:[828,742],s_rover:[828,742],s_ringplanet:[798,742],s_blueplanet:[828,714],s_pinkplanet:[828,714],s_star:[828,714],s_moon:[798,714],k_tower:[828,742],k_gate:[828,742],k_wall:[828,742],k_stall:[798,742],k_well:[828,742],k_chest:[828,742],k_banner:[828,742],k_catapult:[798,742],k_cannon:[828,714],k_shield:[828,714],k_cottage:[828,714],k_torch:[798,714],k_knight:[828,1084],k_princess:[828,1084],k_king:[828,1084],k_queen:[798,1084],k_dragon:[828,1054],k_horse:[828,1054],k_jester:[828,1054],k_wizard:[798,1054],k_pad_stone:[1596,1084],k_pad_velvet:[1566,1084],k_pad_shield:[1596,1054],k_pad_gold:[1566,1054],w_pine1:[828,742],w_pine2:[828,742],w_snowman:[828,742],w_igloo:[798,742],w_cabin:[828,742],w_sled:[828,742],w_snowballs:[828,742],w_iceblock:[798,742],w_crystal:[828,714],w_pond:[940,748],w_sign:[880,748],w_skis:[880,748],w_penguin:[828,1084],w_bear:[828,1084],w_fox:[820,960],w_rabbit:[798,1084],w_owl:[828,1054],w_reindeer:[828,1054],w_seal:[980,900],w_chick:[798,1054],w_pad_ice:[1596,1084],w_pad_snow:[1566,1084],w_pad_log:[1596,1054],w_pad_crystal:[1566,1054],c_pad_manhole:[1596,1084],c_pad_tire:[1566,1084],c_pad_round:[1596,1054],c_pad_cone:[1560,1088],c_schoolbus:[828,742],c_firetruck:[828,742],c_ambulance:[828,742],c_police:[798,742],c_citybus:[828,742],c_taxi:[828,742],c_train:[828,742],c_tram:[798,742],c_bulldozer:[828,714],c_bike:[828,714],c_heli:[828,714],c_plane:[798,714],c_skyscraper:[828,742],c_house:[828,742],c_school:[828,742],c_hospital:[798,742],c_firestation:[828,742],c_light:[828,742],c_busstop:[828,742],c_lamp:[798,742],c_bench:[828,714],c_tree:[828,714],c_mailbox:[828,714],c_fountain:[798,714],r_pad_candy:[1596,1084],r_pad_cloud:[1566,1084],r_pad_rainbow:[1596,1054],r_pad_cookie:[1566,1054],r_unicorn:[828,1084],r_butterfly:[840,700],r_ladybug:[900,660],r_kite:[798,1084],r_pinwheel:[828,1054],r_star:[828,1054],r_sun:[828,1054],r_cloud:[798,1054],r_rainbow:[880,680],r_lolli:[828,742],r_cotton:[828,742],r_carousel:[798,742],r_slide:[828,742],r_swing:[828,742],r_seesaw:[828,742],r_balloons:[798,742],r_icecream:[600,800],r_candy:[828,714],r_cupcake:[828,714],r_gingerhouse:[798,714],u_pinktube:[828,742],u_orangecoral:[828,742],u_brain:[828,742],u_weed:[798,742],u_rocks:[828,742],u_chest:[828,742],u_wreck:[828,742],u_anchor:[798,742],u_arch:[828,714],u_clam:[828,714],u_anemone:[828,714],u_barrel:[798,714],u_clown:[828,742],u_tang:[828,742],u_yellowfish:[828,742],u_octopus:[798,742],u_turtle:[828,742],u_dolphin:[828,742],u_seahorse:[828,742],u_crab:[798,742],u_star:[828,714],u_jelly:[828,714],u_whale:[800,718],u_puffer:[798,714],u_pad_sand:[1596,1084],u_pad_shell:[1566,1084],u_pad_coral:[1596,1054],u_pad_pearl:[1566,1054],j_tree:[828,742],j_palm:[828,742],j_leaf:[828,742],j_banana:[798,742],j_mango:[828,742],j_hut:[828,742],j_bridge:[828,742],j_rocks:[798,742],j_vine:[828,714],j_flower:[828,714],j_mushroom:[828,714],j_totem:[798,714],j_pad_stump:[1596,1084],j_pad_lily:[1566,1084],j_pad_stone:[1596,1054],j_pad_bamboo:[1566,1054],j_monkey:[828,742],j_lion:[828,742],j_elephant:[828,742],j_giraffe:[798,742],j_zebra:[828,742],j_parrot:[828,742],j_frog:[828,742],j_tiger:[798,742],j_toucan:[828,714],j_gorilla:[828,714],j_chameleon:[828,714],j_snake:[798,714],d_pyramid:[850,580],d_pyramid2:[828,742],d_palm:[828,742],d_cactus:[798,742],d_dune:[828,742],d_oasis:[828,742],d_tent:[880,580],d_jar:[798,742],d_cart:[828,714],d_well:[828,714],d_flower:[828,714],d_lantern:[798,714],d_camel:[828,742],d_babycamel:[828,742],d_fox:[828,742],d_scorpion:[798,742],d_lizard:[828,742],d_snake:[828,742],d_hawk:[828,742],d_horse:[798,742],d_donkeycart:[828,714],d_jeep:[828,714],d_balloon:[828,714],d_boat:[798,714],d_pad_stone:[1596,1084],d_pad_carpet:[1566,1084],d_pad_clay:[1596,1054],d_pad_wood:[1566,1054],h_bed:[828,742],h_toothbrush:[828,742],h_sink:[828,742],h_towel:[798,742],h_backpack:[828,742],h_shoes:[828,742],h_wardrobe:[828,742],h_table:[798,742],h_broom:[828,714],h_bin:[828,714],h_clock:[828,714],h_toybox:[798,714],h_fence:[828,742],h_tulips:[828,742],h_wateringcan:[828,742],h_swing:[798,742],h_tree:[720,760],h_birdbath:[828,742],h_gnome:[500,720],h_mailbox:[798,742],h_doghouse:[828,714],h_bike:[790,640],h_ball:[828,714],h_plant:[798,714],v_tomato:[828,742],v_cucumber:[828,742],v_potato:[828,742],v_onion:[798,742],v_eggplant:[828,742],v_pepper:[828,742],v_lettuce:[828,742],v_broccoli:[798,742],v_peas:[828,714],v_pumpkin:[828,714],v_garlic:[828,714],v_mushroom:[798,714],q_kiwi:[828,742],q_melon:[828,742],q_dates:[828,742],q_fig:[798,742],q_apricot:[828,742],q_berries:[828,742],q_plum:[828,742],q_avocado:[798,742],q_peach:[828,714],q_cherry:[828,714],q_olives:[828,714],q_coconut:[798,714],e_pencil:[828,742],e_book:[828,742],e_notebook:[828,742],e_scissors:[798,742],e_ruler:[828,742],e_eraser:[828,742],e_crayons:[828,742],e_board:[798,742],e_map:[828,714],e_glue:[828,714],e_desk:[828,714],e_paper:[798,714],l_shirt:[828,742],l_trousers:[828,742],l_dress:[828,742],l_hat:[798,742],l_socks:[828,742],l_jacket:[828,742],l_scarf:[828,742],l_gloves:[798,742],l_glasses:[828,714],l_cap:[828,714],l_pajamas:[828,714],l_raincoat:[798,714],y_eye:[828,742],y_ear:[828,742],y_nose:[828,742],y_mouth:[798,742],y_hand:[828,742],y_foot:[828,742],y_hair:[828,742],y_tooth:[798,742],y_head:[828,714],y_finger:[828,714],y_knee:[828,714],y_belly:[798,714],g_rectangle:[828,742],g_oval:[828,742],g_diamond:[828,742],g_hexagon:[798,742],g_pentagon:[828,742],g_arrow:[828,742],g_cube:[828,742],g_sphere:[798,742],g_cone:[828,714],g_cylinder:[828,714],g_ring:[828,714],g_heart:[798,714],a_mama:[828,742],a_baba:[828,742],a_grandma:[828,742],a_grandpa:[798,742],a_baby:[828,742],a_brother:[828,742],a_sister:[828,742],a_boy:[798,742],a_girl:[828,714],a_friends:[828,714],a_family:[828,714],a_uncle:[798,714],h_pad_rug:[1596,1084],h_pad_wood:[1566,1084],h_pad_stone:[1596,1054],h_pad_bath:[1566,1054]};var cc={boy_arm_bend:[132,132],boy_arm_down:[124,140],boy_arm_point:[164,112],boy_arm_point2:[160,120],boy_arm_up:[140,140],boy_arm_wave:[216,156],boy_body:[236,256],boy_brow1:[100,44],boy_brow2:[104,44],boy_brow3:[104,48],boy_brow4:[104,44],boy_brow5:[104,44],boy_brow6:[104,48],boy_brow7:[104,52],boy_brow8:[104,56],boy_brow9:[104,56],boy_eye_closed:[112,60],boy_eye_left:[100,88],boy_eye_open:[100,88],boy_eye_open2:[100,88],boy_eye_shut2:[104,72],boy_eye_shut3:[112,72],boy_head:[276,300],boy_head34:[284,300],boy_leg_l:[128,352],boy_leg_r:[200,320],boy_mouth_flat:[92,44],boy_mouth_frown:[112,44],boy_mouth_laugh:[124,80],boy_mouth_o:[60,72],boy_mouth_oh:[92,112],boy_mouth_open:[144,92],boy_mouth_sad:[80,48],boy_mouth_smile:[124,44],boy_mouth_tiny:[48,56],girl_arm_bend:[120,132],girl_arm_down:[120,132],girl_arm_point:[180,124],girl_arm_wave:[180,160],girl_body:[260,350],girl_brow1:[120,52],girl_brow2:[120,52],girl_eye_closed:[120,80],girl_eye_closed2:[120,80],girl_eye_open:[120,104],girl_eye_open2:[120,104],girl_head:[320,320],girl_leg_l:[124,324],girl_leg_r:[164,320],girl_mouth_flat:[100,48],girl_mouth_frown:[112,44],girl_mouth_laugh:[104,100],girl_mouth_o:[56,68],girl_mouth_open:[140,100],girl_mouth_smile:[132,60],owl_beak:[120,80],owl_beak_open:[140,104],owl_body:[280,250],owl_eye_closed:[132,110],owl_eye_open:[132,120],owl_eye_open2:[132,120],owl_feet:[200,180],owl_full:[256,300],owl_head:[320,280],owl_wing_l:[240,200],owl_wing_r:[220,210]};var Td="../art/",Rd=i=>{Td=i},hc=new Map;function rx(i){if(hc.has(i))return hc.get(i);let t=new $n().load(`${Td}rig/${i}.webp`);return t.colorSpace=oe,t.anisotropy=4,hc.set(i,t),t}var Pd=i=>!!Ea[i]&&Object.values(Ea[i].parts).every(t=>!!cc[t]);function Js(i,t,e=0){let[n,s]=cc[i],r=n/2,a=s/2,o=new ge(r,a);o.translate(r/2-t[0],-(a/2-t[1]),0);let l=new Gt({map:rx(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:ve}),c=new X(o,l);c.position.z=e;let h=new Rt;return h.add(c),h.userData.mesh=c,h.userData.name=i,h}function Zs(i,t=0){let e=new Rt,n={};for(let[s,r,a]of i)n[s]=Js(r,a,t),n[s].visible=!1,e.add(n[s]);return e.userData.kids=n,e.userData.show=s=>{for(let[r,a]of Object.entries(n))a.visible=r===s},e}var Ea={boy:{height:3.6,total:440,parts:{head:"boy_head",body:"boy_body",legL:"boy_leg_l",legR:"boy_leg_r",armDown:"boy_arm_down",armWave:"boy_arm_wave",armBend:"boy_arm_bend",armUp:"boy_arm_up",armPoint:"boy_arm_point2",eyeOpen:"boy_eye_open",eyeShut:"boy_eye_closed",mSmile:"boy_mouth_smile",mOpen:"boy_mouth_open",mLaugh:"boy_mouth_laugh",mO:"boy_mouth_o",mOh:"boy_mouth_oh",mFlat:"boy_mouth_flat"},hipL:[-20,172],hipR:[24,172],legLAnchor:[32,6],legRAnchor:[28,6],body:{at:[0,166],anchor:[59,128]},head:{at:[0,290],anchor:[68,146],eyeL:[-17,64],eyeR:[23,64],mouth:[4,26],eyeK:.62,mouthK:.65},shoulderL:[-46,264],shoulderR:[46,264],arm:{down:[12,10],wave:[14,26],bend:[12,10],up:[12,62],point:[10,16]}}};Ea.girl={height:3.5,total:420,parts:{head:"girl_head",body:"girl_body",legL:"girl_leg_l",legR:"girl_leg_r",armDown:"girl_arm_down",armWave:"girl_arm_wave",armBend:"girl_arm_bend",armUp:"girl_arm_wave",armPoint:"girl_arm_point",eyeOpen:"girl_eye_open",eyeShut:"girl_eye_closed",mSmile:"girl_mouth_smile",mOpen:"girl_mouth_open",mLaugh:"girl_mouth_laugh",mO:"girl_mouth_o",mOh:"girl_mouth_o",mFlat:"girl_mouth_flat"},hipL:[-16,150],hipR:[20,150],legLAnchor:[30,6],legRAnchor:[28,6],body:{at:[0,95],anchor:[65,175]},head:{at:[0,267],anchor:[74,155],eyeL:[24,98],eyeR:[72,98],mouth:[47,36],eyeK:.55,mouthK:.6,eyeAnchor:[30,26],mouthAnchor:[33,15]},shoulderL:[-51,234],shoulderR:[51,234],arm:{down:[12,12],wave:[14,28],bend:[12,12],up:[14,28],point:[10,18]}};function Dd(i){let t=Ea[i],e=new Rt,n=t.height/t.total,s=new Rt;s.scale.setScalar(n),e.add(s);let r=t.parts,a=Js(r.legL,t.legLAnchor,-.2);a.position.set(t.hipL[0],t.hipL[1],0);let o=Js(r.legR,t.legRAnchor,-.2);o.position.set(t.hipR[0],t.hipR[1],0),s.add(a,o);let l=[["down",r.armDown,t.arm.down],["wave",r.armWave,t.arm.wave],["bend",r.armBend,t.arm.bend],["up",r.armUp,t.arm.up],["point",r.armPoint,t.arm.point]],c=Zs(l,.1);c.position.set(t.shoulderL[0],t.shoulderL[1],0),c.scale.x=-1;let h=Zs(l,.1);h.position.set(t.shoulderR[0],t.shoulderR[1],0),c.userData.show("down"),h.userData.show("down");let d=Js(r.body,t.body.anchor,0);d.position.set(t.body.at[0],t.body.at[1],0),s.add(d,c,h);let u=new Rt;u.position.set(t.head.at[0],t.head.at[1],.3),u.add(Js(r.head,t.head.anchor,0));let f=t.head.eyeAnchor||[25,22],m=Zs([["open",r.eyeOpen,f],["shut",r.eyeShut,[f[0]+3,f[1]-7]]],.02);m.position.set(t.head.eyeL[0],t.head.eyeL[1],0);let x=Zs([["open",r.eyeOpen,f],["shut",r.eyeShut,[f[0]+3,f[1]-7]]],.02);x.position.set(t.head.eyeR[0],t.head.eyeR[1],0),x.scale.x=-1;{let b=t.head.eyeK||1;m.scale.set(b,b,1),x.scale.set(-b,b,1)}m.userData.show("open"),x.userData.show("open");let g=t.head.mouthAnchor||[31,12],p=Zs([["smile",r.mSmile,g],["open",r.mOpen,g],["laugh",r.mLaugh,g],["o",r.mO,[g[0]-15,g[1]+6]],["oh",r.mOh,[g[0]-8,g[1]+10]],["flat",r.mFlat,[g[0]-8,g[1]]]],.03);p.position.set(t.head.mouth[0],t.head.mouth[1],0),p.userData.show("smile");{let b=t.head.mouthK||1;p.scale.set(b,b,1)}u.add(m,x,p),s.add(u);let v=new X(new Yn(.9,24),new Gt({color:0,transparent:!0,opacity:.18,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(0,.03,-.05),v.scale.set(1,.45,1),e.add(v);let A=new Rt;A.add(e);let _={act:null,t:0,lookX:0,blink:2+Math.random()*2,blinkT:0,nextMicro:3+Math.random()*3,micro:null,microT:0,mood:"smile"};A.userData.state=_,A.userData.rig=!0,A.act=b=>{_.act=b,_.t=0},A.look=b=>{_.lookX=b},A.face=()=>{},A.setLook=()=>{};let P=(b,S,E)=>b+(S-b)*E;return A.update=(b,S)=>{_.t+=b;let E=_.t,w=Math.sin(S*1.8)*1.2,y=Math.sin(S*.9)*.025,D=0,V=1+Math.sin(S*1.8)*.006,N="down",O="down",j=.05+Math.sin(S*1.6)*.02,z=-.05-Math.sin(S*1.6)*.02,nt=(St,Ot,Qt)=>{let K=St*Ot%1;if(K<.22){let Mt=Math.sin(K/.22*Math.PI);return G=-.13*Mt,ht=-.5*Mt,0}let rt=(K-.22)/.78,T=Math.sin(rt*Math.PI);return G=.09*T-(rt>.9?.05:0),ht=.35*T,T*Qt},G=0,ht=0,ft=0,vt=!1,Nt="smile",Jt=0,$=0,et=0,It=0;if(!_.act&&(_.nextMicro-=b,_.nextMicro<=0)){_.nextMicro=2.6+Math.random()*4.5;let St=["look","look","hop","wave","excited"][Math.floor(Math.random()*5)];St==="wave"?A.act("wave"):(_.micro=St,_.microT=0,_.dir=Math.random()<.5?-1:1)}if(_.micro&&!_.act){_.microT+=b;let St=_.microT;_.micro==="look"?St<1.6?(It=Math.sin(St/1.6*Math.PI)*.18*_.dir,y+=It*.5):_.micro=null:_.micro==="hop"?St<.6?et=Math.sin(St/.6*Math.PI)*14:_.micro=null:_.micro==="excited"&&(St<1.1?(et=Math.abs(Math.sin(St*9))*8,Nt="open"):_.micro=null)}switch(_.act){case"wave":E<2.4&&(O="wave",z=-.2+Math.sin(E*11)*.22,Nt="open",y=.05);break;case"talk":E<2.4&&(O="wave",z=-.1+Math.sin(E*6)*.12,Nt=Math.sin(E*14)>0?"open":"smile");break;case"point":E<1.8&&(O="point",z=-.25,Nt="smile",y=-.05);break;case"clap":if(E<1.8){N=O="bend";let St=Math.abs(Math.sin(E*11));j=.6-St*.5,z=-.6+St*.5,Nt="laugh",et=nt(E,2.6,8)}break;case"giggle":E<2.2&&(N=O="bend",j=.9+Math.sin(E*12)*.12,z=-.9-Math.sin(E*12)*.12,Nt="laugh",et=nt(E,2.2,14),ft=Math.sin(E*4.4)*.05,y=Math.sin(E*4.4)*.06,vt=E>.9&&E<1.5);break;case"cheer":case"jump":E<1.3&&(N=O="up",j=.15,z=-.15,Nt="laugh",et=nt(E,1.5,38),ft=Math.sin(E*9)*.05);break;case"celebrate":E<2.6&&(N=O="up",j=.1+Math.sin(E*14)*.18,z=-.1-Math.sin(E*14)*.18,Nt="laugh",et=nt(E,1.4,44),ft=Math.sin(E*7)*.07,y=Math.sin(E*9)*.07);break;case"think":E<2.4&&(O="bend",z=-.9,Nt="o",y=.12+Math.sin(E*3)*.04);break;case"walk":Jt=Math.sin(E*7.4),w=Math.abs(Jt)*5,N=O="down",j=.15*Jt,z=-.15*Jt,Nt="smile";break;case"run":E<1.4&&(Jt=Math.sin(E*15),w=Math.abs(Jt)*9,$=.08);break;case"sad":E<2.2&&(Nt="flat",y=.1,w=-3);break;default:}_.act&&_.act!=="walk"&&E>2.8&&(_.act=null),e.position.y=(et+w*0)*n,s.position.y=w*n*.5,e.rotation.z=$+ft,e.scale.set(1-G*.55,1+G,1),d.scale.y=V,a.rotation.z=Jt*.42+ht,o.rotation.z=-Jt*.42-ht*.4,c.userData.show(N),h.userData.show(O),c.rotation.z=-j*-1,h.rotation.z=z,u.rotation.z=P(u.rotation.z,y,Math.min(1,b*10)),u.position.x=D,p.userData.show(Nt),_.blink-=b;let lt=vt;_.blink<=0&&_.blinkT===0&&(_.blinkT=1e-4),_.blinkT>0&&(_.blinkT+=b,lt=lt||_.blinkT<.14,_.blinkT>=.14&&(_.blinkT=0,_.blink=2+Math.random()*3.5)),m.userData.show(lt?"shut":"open"),x.userData.show(lt?"shut":"open");let Ft=Math.max(-.3,Math.min(.3,(_.lookX-A.position.x)*.035));e.rotation.y=P(e.rotation.y,Ft,Math.min(1,b*5)),v.scale.set(1-et*.004,.45-et*.002,1)},A}var fc="../clips/",ui=null,dc=null,uc=new Map;function Ld(i,t=.33){let e=ui&&ui[`${i}_walk`];return e&&e.loopSec?e.loopSec/2:t}function Ud(i){fc=i}function ax(){return dc||(dc=fetch(`${fc}clips.json`).then(i=>i.ok?i.json():{}).catch(()=>({})).then(i=>(ui=i||{},ui))),dc}var ox={celebrate:"jump",cheer:"jump",jump:"jump",giggle:"laugh",clap:"clap",wave:"wave",walk:"walk",run:"walk"};function lx(i){if(uc.has(i.file))return uc.get(i.file);let t=new $n().load(`${fc}${i.file}`);return t.colorSpace=oe,t.generateMipmaps=!1,t.minFilter=en,t.magFilter=en,t.repeat.set(1/i.cols,1/i.rows),uc.set(i.file,t),t}function pc(i,t,e=3.6){let n=t.children[0],s=new Rt;t.add(s);let r=null,a=new Map,o=m=>{if(a.has(m.file))return a.get(m.file);let x=e/(m.px||m.h*.9),g=m.w*x,p=m.h*x,v=m.ground!=null?m.ground:m.h,A=new ge(g,p);A.translate(0,p/2-(m.h-v)*x,0);let _=new Gt({map:lx(m),transparent:!0,alphaTest:.06,toneMapped:!1,side:ve});_.map.repeat.set(1/m.cols,1/m.rows);let P=new X(A,_);return P.visible=!1,P.position.z=.05,s.add(P),a.set(m.file,P),P},l=()=>{let m=ui&&ui[`${i}_idle`];return m&&o(m).material.map.image?(h(m,!0),!0):!1},c=()=>{r&&(r.mesh.visible=!1,r=null),n.visible=!0,l()},h=(m,x)=>{r&&(r.mesh.visible=!1),r={entry:m,mesh:o(m),t:0,loop:x},r.mesh.scale.set(1,1,1),d(r,0),r.mesh.visible=!0,n.visible=!1},d=(m,x)=>{let g=m.entry;m.mesh.material.map.offset.set(x%g.cols/g.cols,1-(Math.floor(x/g.cols)+1)/g.rows)},u=t.act,f=t.update;return t.act=m=>{u(m);let x=ui&&ui[`${i}_${ox[m]}`];x&&o(x).material.map.image?h(x,!!x.loop):c()},t.update=(m,x)=>{if(f(m,x),!r&&(l(),!r))return;r.t+=m;let g=r.entry;if(g.file===`${i}_idle.webp`){let v=Math.sin(x*1.8);r.mesh.scale.set(1-v*.006,1+v*.012,1)}let p=Math.floor(r.t*g.fps);if(p>=g.frames)if(r.loop)p%=g.frames;else{c();return}d(r,p)},ax().then(m=>{for(let[x,g]of Object.entries(m||{}))x.startsWith(`${i}_`)&&o(g)}),t}var Sa=[{id:"monkey",thing:"j_monkey",letter:"qaaf",word:"\u0642\u0631\u062F",wd:"\u0642\u0650\u0631\u0652\u062F",the:"\u0627\u0644\u0642\u0631\u062F",thed:"\u0627\u0644\u0642\u0650\u0631\u0652\u062F",age:3},{id:"lion",thing:"j_lion",letter:"alef",word:"\u0623\u0633\u062F",wd:"\u0623\u064E\u0633\u064E\u062F",the:"\u0627\u0644\u0623\u0633\u062F",thed:"\u0627\u0644\u0623\u064E\u0633\u064E\u062F",age:3},{id:"elephant",thing:"j_elephant",letter:"faa",word:"\u0641\u064A\u0644",wd:"\u0641\u0650\u064A\u0644",the:"\u0627\u0644\u0641\u064A\u0644",thed:"\u0627\u0644\u0641\u0650\u064A\u0644",age:3},{id:"zebra",thing:"j_zebra",letter:"haa",word:"\u062D\u0645\u0627\u0631 \u0648\u062D\u0634\u064A",wd:"\u062D\u0650\u0645\u064E\u0627\u0631 \u0648\u064E\u062D\u0652\u0634\u0650\u064A",the:"\u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631 \u0627\u0644\u0648\u064E\u062D\u0652\u0634\u0650\u064A",age:5},{id:"parrot",thing:"j_parrot",letter:"baa",word:"\u0628\u0628\u063A\u0627\u0621",wd:"\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",age:4},{id:"tiger",thing:"j_tiger",letter:"noon",word:"\u0646\u0645\u0631",wd:"\u0646\u0650\u0645\u0650\u0631",the:"\u0627\u0644\u0646\u0645\u0631",thed:"\u0627\u0644\u0646\u0650\u0651\u0645\u0650\u0631",age:4},{id:"toucan",thing:"j_toucan",letter:"tah",word:"\u0637\u0648\u0642\u0627\u0646",wd:"\u0637\u064F\u0648\u0642\u064E\u0627\u0646",the:"\u0627\u0644\u0637\u0648\u0642\u0627\u0646",thed:"\u0627\u0644\u0637\u064F\u0651\u0648\u0642\u064E\u0627\u0646",age:6},{id:"gorilla",thing:"j_gorilla",letter:"ghayn",word:"\u063A\u0648\u0631\u064A\u0644\u0627",wd:"\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",the:"\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627",thed:"\u0627\u0644\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",age:5},{id:"chameleon",thing:"j_chameleon",letter:"haa",word:"\u062D\u0631\u0628\u0627\u0621",wd:"\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",the:"\u0627\u0644\u062D\u0631\u0628\u0627\u0621",thed:"\u0627\u0644\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",age:6},{id:"snake",thing:"j_snake",letter:"thaa",word:"\u062B\u0639\u0628\u0627\u0646",wd:"\u062B\u064F\u0639\u0652\u0628\u064E\u0627\u0646",the:"\u0627\u0644\u062B\u0639\u0628\u0627\u0646",thed:"\u0627\u0644\u062B\u064F\u0651\u0639\u0652\u0628\u064E\u0627\u0646",age:5},{id:"cow",thing:"f_cow",letter:"baa",word:"\u0628\u0642\u0631\u0629",wd:"\u0628\u064E\u0642\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0628\u0642\u0631\u0629",thed:"\u0627\u0644\u0628\u064E\u0642\u064E\u0631\u064E\u0629",age:3},{id:"pig",thing:"f_pig",letter:"khaa",word:"\u062E\u0646\u0632\u064A\u0631",wd:"\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",the:"\u0627\u0644\u062E\u0646\u0632\u064A\u0631",thed:"\u0627\u0644\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",age:4},{id:"goat",thing:"f_goat",letter:"meem",word:"\u0645\u0627\u0639\u0632",wd:"\u0645\u064E\u0627\u0639\u0650\u0632",the:"\u0627\u0644\u0645\u0627\u0639\u0632",thed:"\u0627\u0644\u0645\u064E\u0627\u0639\u0650\u0632",age:5},{id:"donkey",thing:"f_donkey",letter:"haa",word:"\u062D\u0645\u0627\u0631",wd:"\u062D\u0650\u0645\u064E\u0627\u0631",the:"\u0627\u0644\u062D\u0645\u0627\u0631",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631",age:4},{id:"rooster",thing:"f_rooster",letter:"dal",word:"\u062F\u064A\u0643",wd:"\u062F\u0650\u064A\u0643",the:"\u0627\u0644\u062F\u064A\u0643",thed:"\u0627\u0644\u062F\u0650\u0651\u064A\u0643",age:3},{id:"octopus",thing:"u_octopus",letter:"alef",word:"\u0623\u062E\u0637\u0628\u0648\u0637",wd:"\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",the:"\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",age:5},{id:"turtle",thing:"u_turtle",letter:"seen",word:"\u0633\u0644\u062D\u0641\u0627\u0629",wd:"\u0633\u064F\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",the:"\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629",thed:"\u0627\u0644\u0633\u064F\u0651\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",age:4},{id:"dolphin",thing:"u_dolphin",letter:"dal",word:"\u062F\u0648\u0644\u0641\u064A\u0646",wd:"\u062F\u064F\u0648\u0644\u0652\u0641\u0650\u064A\u0646",the:"\u0627\u0644\u062F\u0648\u0644\u0641\u064A\u0646",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u0652\u0641\u0650\u064A\u0646",age:5},{id:"whale",thing:"u_whale",letter:"haa",word:"\u062D\u0648\u062A",wd:"\u062D\u064F\u0648\u062A",the:"\u0627\u0644\u062D\u0648\u062A",thed:"\u0627\u0644\u062D\u064F\u0648\u062A",age:4},{id:"crab",thing:"u_crab",letter:"seen",word:"\u0633\u0631\u0637\u0627\u0646",wd:"\u0633\u064E\u0631\u064E\u0637\u064E\u0627\u0646",the:"\u0627\u0644\u0633\u0631\u0637\u0627\u0646",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u064E\u0637\u064E\u0627\u0646",age:5},{id:"starfish",thing:"u_star",letter:"noon",word:"\u0646\u062C\u0645\u0629 \u0628\u062D\u0631",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629 \u0628\u064E\u062D\u0652\u0631",the:"\u0646\u062C\u0645\u0629 \u0627\u0644\u0628\u062D\u0631",thed:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629\u0652 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:5},{id:"jellyfish",thing:"u_jelly",letter:"qaaf",word:"\u0642\u0646\u062F\u064A\u0644 \u0628\u062D\u0631",wd:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0628\u064E\u062D\u0652\u0631",the:"\u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631",thed:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"seahorse",thing:"u_seahorse",letter:"haa",word:"\u062D\u0635\u0627\u0646 \u0628\u062D\u0631",wd:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0628\u064E\u062D\u0652\u0631",the:"\u062D\u0635\u0627\u0646 \u0627\u0644\u0628\u062D\u0631",thed:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"penguin",thing:"w_penguin",letter:"baa",word:"\u0628\u0637\u0631\u064A\u0642",wd:"\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",the:"\u0627\u0644\u0628\u0637\u0631\u064A\u0642",thed:"\u0627\u0644\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",age:4},{id:"bear",thing:"w_bear",letter:"dal",word:"\u062F\u0628",wd:"\u062F\u064F\u0628\u0651",the:"\u0627\u0644\u062F\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0628\u0651",age:3},{id:"owl",thing:"w_owl",letter:"baa",word:"\u0628\u0648\u0645\u0629",wd:"\u0628\u064F\u0648\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u0648\u0645\u0629",thed:"\u0627\u0644\u0628\u064F\u0648\u0645\u064E\u0629",age:4},{id:"reindeer",thing:"w_reindeer",letter:"raa",word:"\u0631\u0646\u0629",wd:"\u0631\u064E\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0631\u0646\u0629",thed:"\u0627\u0644\u0631\u064E\u0651\u0646\u064E\u0651\u0629",age:6},{id:"seal",thing:"w_seal",letter:"faa",word:"\u0641\u0642\u0645\u0629",wd:"\u0641\u064F\u0642\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0641\u0642\u0645\u0629",thed:"\u0627\u0644\u0641\u064F\u0642\u0652\u0645\u064E\u0629",age:5},{id:"snowman",thing:"w_snowman",letter:"raa",word:"\u0631\u062C\u0644 \u062B\u0644\u062C",wd:"\u0631\u064E\u062C\u064F\u0644 \u062B\u064E\u0644\u0652\u062C",the:"\u0631\u062C\u0644 \u0627\u0644\u062B\u0644\u062C",thed:"\u0631\u064E\u062C\u064F\u0644 \u0627\u0644\u062B\u064E\u0651\u0644\u0652\u062C",age:5},{id:"pyramid",thing:"d_pyramid",letter:"haa2",word:"\u0647\u0631\u0645",wd:"\u0647\u064E\u0631\u064E\u0645",the:"\u0627\u0644\u0647\u0631\u0645",thed:"\u0627\u0644\u0647\u064E\u0631\u064E\u0645",age:4},{id:"tent",thing:"d_tent",letter:"khaa",word:"\u062E\u064A\u0645\u0629",wd:"\u062E\u064E\u064A\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062E\u064A\u0645\u0629",thed:"\u0627\u0644\u062E\u064E\u064A\u0652\u0645\u064E\u0629",age:4},{id:"palm",thing:"d_palm",letter:"noon",word:"\u0646\u062E\u0644\u0629",wd:"\u0646\u064E\u062E\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u062E\u0644\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062E\u0652\u0644\u064E\u0629",age:4},{id:"cactus",thing:"d_cactus",letter:"sad",word:"\u0635\u0628\u0627\u0631",wd:"\u0635\u064E\u0628\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0635\u0628\u0627\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0628\u064E\u0651\u0627\u0631",age:6},{id:"scorpion",thing:"d_scorpion",letter:"ayn",word:"\u0639\u0642\u0631\u0628",wd:"\u0639\u064E\u0642\u0652\u0631\u064E\u0628",the:"\u0627\u0644\u0639\u0642\u0631\u0628",thed:"\u0627\u0644\u0639\u064E\u0642\u0652\u0631\u064E\u0628",age:5},{id:"lizard",thing:"d_lizard",letter:"seen",word:"\u0633\u062D\u0644\u064A\u0629",wd:"\u0633\u0650\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u062D\u0644\u064A\u0629",thed:"\u0627\u0644\u0633\u0650\u0651\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",age:6},{id:"hawk",thing:"d_hawk",letter:"sad",word:"\u0635\u0642\u0631",wd:"\u0635\u064E\u0642\u0652\u0631",the:"\u0627\u0644\u0635\u0642\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0642\u0652\u0631",age:5},{id:"hotballoon",thing:"d_balloon",letter:"meem",word:"\u0645\u0646\u0637\u0627\u062F",wd:"\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",the:"\u0627\u0644\u0645\u0646\u0637\u0627\u062F",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",age:5},{id:"jeep",thing:"d_jeep",letter:"jeem",word:"\u062C\u064A\u0628",wd:"\u062C\u0650\u064A\u0628",the:"\u0627\u0644\u062C\u064A\u0628",thed:"\u0627\u0644\u062C\u0650\u064A\u0628",age:4},{id:"umbrella",thing:"b_umbrella",letter:"meem",word:"\u0645\u0638\u0644\u0629",wd:"\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u0638\u0644\u0629",thed:"\u0627\u0644\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",age:4},{id:"sandcastle",thing:"b_castle",letter:"qaaf",word:"\u0642\u0644\u0639\u0629",wd:"\u0642\u064E\u0644\u0652\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0644\u0639\u0629",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0639\u064E\u0629",age:4},{id:"shell",thing:"b_shell",letter:"sad",word:"\u0635\u062F\u0641\u0629",wd:"\u0635\u064E\u062F\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0635\u062F\u0641\u0629",thed:"\u0627\u0644\u0635\u064E\u0651\u062F\u064E\u0641\u064E\u0629",age:4},{id:"lighthouse",thing:"b_lighthouse",letter:"faa",word:"\u0641\u0646\u0627\u0631",wd:"\u0641\u064E\u0646\u064E\u0627\u0631",the:"\u0627\u0644\u0641\u0646\u0627\u0631",thed:"\u0627\u0644\u0641\u064E\u0646\u064E\u0627\u0631",age:6},{id:"bed",thing:"h_bed",letter:"seen",word:"\u0633\u0631\u064A\u0631",wd:"\u0633\u064E\u0631\u0650\u064A\u0631",the:"\u0627\u0644\u0633\u0631\u064A\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u0650\u064A\u0631",age:3},{id:"toothbrush",thing:"h_toothbrush",letter:"faa",word:"\u0641\u0631\u0634\u0627\u0629",wd:"\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",the:"\u0627\u0644\u0641\u0631\u0634\u0627\u0629",thed:"\u0627\u0644\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",age:5},{id:"sink",thing:"h_sink",letter:"haa",word:"\u062D\u0648\u0636",wd:"\u062D\u064E\u0648\u0652\u0636",the:"\u0627\u0644\u062D\u0648\u0636",thed:"\u0627\u0644\u062D\u064E\u0648\u0652\u0636",age:5},{id:"towel",thing:"h_towel",letter:"meem",word:"\u0645\u0646\u0634\u0641\u0629",wd:"\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0645\u0646\u0634\u0641\u0629",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",age:5},{id:"backpack",thing:"h_backpack",letter:"sheen",word:"\u0634\u0646\u0637\u0629",wd:"\u0634\u064E\u0646\u0652\u0637\u064E\u0629",the:"\u0627\u0644\u0634\u0646\u0637\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u0646\u0652\u0637\u064E\u0629",age:3},{id:"shoes",thing:"h_shoes",letter:"jeem",word:"\u062C\u0632\u0645\u0629",wd:"\u062C\u064E\u0632\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062C\u0632\u0645\u0629",thed:"\u0627\u0644\u062C\u064E\u0632\u0652\u0645\u064E\u0629",age:3},{id:"wardrobe",thing:"h_wardrobe",letter:"dal",word:"\u062F\u0648\u0644\u0627\u0628",wd:"\u062F\u064F\u0648\u0644\u064E\u0627\u0628",the:"\u0627\u0644\u062F\u0648\u0644\u0627\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u064E\u0627\u0628",age:5},{id:"table",thing:"h_table",letter:"taa",word:"\u062A\u0631\u0627\u0628\u064A\u0632\u0629",wd:"\u062A\u064E\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",the:"\u0627\u0644\u062A\u0631\u0627\u0628\u064A\u0632\u0629",thed:"\u0627\u0644\u062A\u064E\u0651\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",age:5},{id:"broom",thing:"h_broom",letter:"meem",word:"\u0645\u0643\u0646\u0633\u0629",wd:"\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u0643\u0646\u0633\u0629",thed:"\u0627\u0644\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",age:5},{id:"clock",thing:"h_clock",letter:"seen",word:"\u0633\u0627\u0639\u0629",wd:"\u0633\u064E\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u0639\u064E\u0629",age:4},{id:"swing",thing:"h_swing",letter:"alef",word:"\u0623\u0631\u062C\u0648\u062D\u0629",wd:"\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",the:"\u0627\u0644\u0623\u0631\u062C\u0648\u062D\u0629",thed:"\u0627\u0644\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",age:4},{id:"bike",thing:"h_bike",letter:"ayn",word:"\u0639\u062C\u0644\u0629",wd:"\u0639\u064E\u062C\u064E\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u062C\u0644\u0629",thed:"\u0627\u0644\u0639\u064E\u062C\u064E\u0644\u064E\u0629",age:4},{id:"tree",thing:"h_tree",letter:"sheen",word:"\u0634\u062C\u0631\u0629",wd:"\u0634\u064E\u062C\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0634\u062C\u0631\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u062C\u064E\u0631\u064E\u0629",age:3},{id:"school",thing:"c_school",letter:"meem",word:"\u0645\u062F\u0631\u0633\u0629",wd:"\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u062F\u0631\u0633\u0629",thed:"\u0627\u0644\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",age:4},{id:"hospital",thing:"c_hospital",letter:"meem",word:"\u0645\u0633\u062A\u0634\u0641\u0649",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",the:"\u0627\u0644\u0645\u0633\u062A\u0634\u0641\u0649",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",age:5},{id:"trafficlight",thing:"c_light",letter:"alef",word:"\u0625\u0634\u0627\u0631\u0629",wd:"\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0625\u0634\u0627\u0631\u0629",thed:"\u0627\u0644\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",age:5},{id:"fountain",thing:"c_fountain",letter:"noon",word:"\u0646\u0627\u0641\u0648\u0631\u0629",wd:"\u0646\u064E\u0627\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u0627\u0641\u064F\u0648\u0631\u064E\u0629",age:5},{id:"building",thing:"c_skyscraper",letter:"ayn",word:"\u0639\u0645\u0627\u0631\u0629",wd:"\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0645\u0627\u0631\u0629",thed:"\u0627\u0644\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",age:4},{id:"king",thing:"k_king",letter:"meem",word:"\u0645\u0644\u0643",wd:"\u0645\u064E\u0644\u0650\u0643",the:"\u0627\u0644\u0645\u0644\u0643",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643",age:4},{id:"queen",thing:"k_queen",letter:"meem",word:"\u0645\u0644\u0643\u0629",wd:"\u0645\u064E\u0644\u0650\u0643\u064E\u0629",the:"\u0627\u0644\u0645\u0644\u0643\u0629",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643\u064E\u0629",age:5},{id:"dragon",thing:"k_dragon",letter:"taa",word:"\u062A\u0646\u064A\u0646",wd:"\u062A\u0650\u0646\u0650\u0651\u064A\u0646",the:"\u0627\u0644\u062A\u0646\u064A\u0646",thed:"\u0627\u0644\u062A\u0650\u0651\u0646\u0650\u0651\u064A\u0646",age:4},{id:"knight",thing:"k_knight",letter:"faa",word:"\u0641\u0627\u0631\u0633",wd:"\u0641\u064E\u0627\u0631\u0650\u0633",the:"\u0627\u0644\u0641\u0627\u0631\u0633",thed:"\u0627\u0644\u0641\u064E\u0627\u0631\u0650\u0633",age:4},{id:"wizard",thing:"k_wizard",letter:"seen",word:"\u0633\u0627\u062D\u0631",wd:"\u0633\u064E\u0627\u062D\u0650\u0631",the:"\u0627\u0644\u0633\u0627\u062D\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u062D\u0650\u0631",age:5},{id:"treasure",thing:"k_chest",letter:"kaaf",word:"\u0643\u0646\u0632",wd:"\u0643\u064E\u0646\u0652\u0632",the:"\u0627\u0644\u0643\u0646\u0632",thed:"\u0627\u0644\u0643\u064E\u0646\u0652\u0632",age:4},{id:"alien",thing:"s_alien",letter:"faa",word:"\u0641\u0636\u0627\u0626\u064A",wd:"\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0641\u0636\u0627\u0626\u064A",thed:"\u0627\u0644\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",age:5},{id:"robot",thing:"s_robot",letter:"raa",word:"\u0631\u0648\u0628\u0648\u062A",wd:"\u0631\u064F\u0648\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0631\u0648\u0628\u0648\u062A",thed:"\u0627\u0644\u0631\u064F\u0651\u0648\u0628\u064F\u0648\u062A",age:4},{id:"moon",thing:"s_moon",letter:"qaaf",word:"\u0642\u0645\u0631",wd:"\u0642\u064E\u0645\u064E\u0631",the:"\u0627\u0644\u0642\u0645\u0631",thed:"\u0627\u0644\u0642\u064E\u0645\u064E\u0631",age:3},{id:"star",thing:"s_star",letter:"noon",word:"\u0646\u062C\u0645\u0629",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062C\u0652\u0645\u064E\u0629",age:3},{id:"planet",thing:"s_ringplanet",letter:"kaaf",word:"\u0643\u0648\u0643\u0628",wd:"\u0643\u064E\u0648\u0652\u0643\u064E\u0628",the:"\u0627\u0644\u0643\u0648\u0643\u0628",thed:"\u0627\u0644\u0643\u064E\u0648\u0652\u0643\u064E\u0628",age:5},{id:"balloon",thing:"r_balloons",letter:"baa",word:"\u0628\u0627\u0644\u0648\u0646",wd:"\u0628\u064E\u0627\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0627\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0644\u064F\u0648\u0646",age:3},{id:"cloud",thing:"r_cloud",letter:"seen",word:"\u0633\u062D\u0627\u0628\u0629",wd:"\u0633\u064E\u062D\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0633\u062D\u0627\u0628\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u062D\u064E\u0627\u0628\u064E\u0629",age:4},{id:"sweet",thing:"r_candy",letter:"haa",word:"\u062D\u0644\u0648\u0649",wd:"\u062D\u064E\u0644\u0652\u0648\u064E\u0649",the:"\u0627\u0644\u062D\u0644\u0648\u0649",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0648\u064E\u0649",age:4},{id:"cake",thing:"r_cupcake",letter:"kaaf",word:"\u0643\u0639\u0643\u0629",wd:"\u0643\u064E\u0639\u0652\u0643\u064E\u0629",the:"\u0627\u0644\u0643\u0639\u0643\u0629",thed:"\u0627\u0644\u0643\u064E\u0639\u0652\u0643\u064E\u0629",age:4},{id:"y_eye",thing:"y_eye",letter:"ayn",word:"\u0639\u064A\u0646",wd:"\u0639\u064E\u064A\u0652\u0646",the:"\u0627\u0644\u0639\u064A\u0646",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0646",age:3},{id:"y_ear",thing:"y_ear",letter:"waaw",word:"\u0648\u062F\u0646",wd:"\u0648\u0650\u062F\u0652\u0646",the:"\u0627\u0644\u0648\u062F\u0646",thed:"\u0627\u0644\u0648\u0650\u062F\u0652\u0646",age:3},{id:"y_nose",thing:"y_nose",letter:"alef",word:"\u0623\u0646\u0641",wd:"\u0623\u064E\u0646\u0652\u0641",the:"\u0627\u0644\u0623\u0646\u0641",thed:"\u0627\u0644\u0623\u064E\u0646\u0652\u0641",age:3},{id:"y_mouth",thing:"y_mouth",letter:"faa",word:"\u0641\u0645",wd:"\u0641\u064E\u0645",the:"\u0627\u0644\u0641\u0645",thed:"\u0627\u0644\u0641\u064E\u0645",age:3},{id:"y_hand",thing:"y_hand",letter:"alef",word:"\u0625\u064A\u062F",wd:"\u0625\u0650\u064A\u062F",the:"\u0627\u0644\u0625\u064A\u062F",thed:"\u0627\u0644\u0625\u0650\u064A\u062F",age:3},{id:"y_foot",thing:"y_foot",letter:"raa",word:"\u0631\u062C\u0644",wd:"\u0631\u0650\u062C\u0652\u0644",the:"\u0627\u0644\u0631\u062C\u0644",thed:"\u0627\u0644\u0631\u0651\u0650\u062C\u0652\u0644",age:3},{id:"y_hair",thing:"y_hair",letter:"sheen",word:"\u0634\u0639\u0631",wd:"\u0634\u064E\u0639\u0652\u0631",the:"\u0627\u0644\u0634\u0639\u0631",thed:"\u0627\u0644\u0634\u0651\u064E\u0639\u0652\u0631",age:4},{id:"y_tooth",thing:"y_tooth",letter:"seen",word:"\u0633\u0646\u0629",wd:"\u0633\u0650\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u0646\u0629",thed:"\u0627\u0644\u0633\u0651\u0650\u0646\u064E\u0651\u0629",age:4},{id:"y_head",thing:"y_head",letter:"raa",word:"\u0631\u0627\u0633",wd:"\u0631\u064E\u0627\u0633",the:"\u0627\u0644\u0631\u0627\u0633",thed:"\u0627\u0644\u0631\u0651\u064E\u0627\u0633",age:3},{id:"y_finger",thing:"y_finger",letter:"sad",word:"\u0635\u0628\u0627\u0639",wd:"\u0635\u064F\u0628\u064E\u0651\u0627\u0639",the:"\u0627\u0644\u0635\u0628\u0627\u0639",thed:"\u0627\u0644\u0635\u0651\u064F\u0628\u064E\u0651\u0627\u0639",age:4},{id:"y_knee",thing:"y_knee",letter:"raa",word:"\u0631\u0643\u0628\u0629",wd:"\u0631\u064F\u0643\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0631\u0643\u0628\u0629",thed:"\u0627\u0644\u0631\u0651\u064F\u0643\u0652\u0628\u064E\u0629",age:5},{id:"y_belly",thing:"y_belly",letter:"baa",word:"\u0628\u0637\u0646",wd:"\u0628\u064E\u0637\u0652\u0646",the:"\u0627\u0644\u0628\u0637\u0646",thed:"\u0627\u0644\u0628\u064E\u0637\u0652\u0646",age:5},{id:"l_shirt",thing:"l_shirt",letter:"qaaf",word:"\u0642\u0645\u064A\u0635",wd:"\u0642\u064E\u0645\u0650\u064A\u0635",the:"\u0627\u0644\u0642\u0645\u064A\u0635",thed:"\u0627\u0644\u0642\u064E\u0645\u0650\u064A\u0635",age:4},{id:"l_trousers",thing:"l_trousers",letter:"baa",word:"\u0628\u0646\u0637\u0644\u0648\u0646",wd:"\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",age:4},{id:"l_dress",thing:"l_dress",letter:"faa",word:"\u0641\u0633\u062A\u0627\u0646",wd:"\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",the:"\u0627\u0644\u0641\u0633\u062A\u0627\u0646",thed:"\u0627\u0644\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",age:4},{id:"l_hat",thing:"l_hat",letter:"qaaf",word:"\u0642\u0628\u0639\u0629",wd:"\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0628\u0639\u0629",thed:"\u0627\u0644\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",age:4},{id:"l_socks",thing:"l_socks",letter:"sheen",word:"\u0634\u0631\u0627\u0628",wd:"\u0634\u064F\u0631\u064E\u0651\u0627\u0628",the:"\u0627\u0644\u0634\u0631\u0627\u0628",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u064E\u0651\u0627\u0628",age:3},{id:"l_jacket",thing:"l_jacket",letter:"jeem",word:"\u062C\u0627\u0643\u062A",wd:"\u062C\u064E\u0627\u0643\u0650\u062A",the:"\u0627\u0644\u062C\u0627\u0643\u062A",thed:"\u0627\u0644\u062C\u064E\u0627\u0643\u0650\u062A",age:5},{id:"l_scarf",thing:"l_scarf",letter:"waaw",word:"\u0648\u0634\u0627\u062D",wd:"\u0648\u0650\u0634\u064E\u0627\u062D",the:"\u0627\u0644\u0648\u0634\u0627\u062D",thed:"\u0627\u0644\u0648\u0650\u0634\u064E\u0627\u062D",age:6},{id:"l_gloves",thing:"l_gloves",letter:"qaaf",word:"\u0642\u0641\u0627\u0632",wd:"\u0642\u064F\u0641\u064E\u0651\u0627\u0632",the:"\u0627\u0644\u0642\u0641\u0627\u0632",thed:"\u0627\u0644\u0642\u064F\u0641\u064E\u0651\u0627\u0632",age:6},{id:"l_glasses",thing:"l_glasses",letter:"noon",word:"\u0646\u0636\u0627\u0631\u0629",wd:"\u0646\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0636\u0627\u0631\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",age:5},{id:"l_cap",thing:"l_cap",letter:"kaaf",word:"\u0643\u0627\u0628",wd:"\u0643\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u0627\u0628",thed:"\u0627\u0644\u0643\u064E\u0627\u0628",age:4},{id:"l_pajamas",thing:"l_pajamas",letter:"baa",word:"\u0628\u064A\u062C\u0627\u0645\u0629",wd:"\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u062C\u0627\u0645\u0629",thed:"\u0627\u0644\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",age:4},{id:"l_raincoat",thing:"l_raincoat",letter:"meem",word:"\u0645\u0639\u0637\u0641",wd:"\u0645\u0650\u0639\u0652\u0637\u064E\u0641",the:"\u0627\u0644\u0645\u0639\u0637\u0641",thed:"\u0627\u0644\u0645\u0650\u0639\u0652\u0637\u064E\u0641",age:6},{id:"a_mama",thing:"a_mama",letter:"meem",word:"\u0645\u0627\u0645\u0627",wd:"\u0645\u064E\u0627\u0645\u064E\u0627",the:"\u0627\u0644\u0645\u0627\u0645\u0627",thed:"\u0627\u0644\u0645\u064E\u0627\u0645\u064E\u0627",age:3},{id:"a_baba",thing:"a_baba",letter:"baa",word:"\u0628\u0627\u0628\u0627",wd:"\u0628\u064E\u0627\u0628\u064E\u0627",the:"\u0627\u0644\u0628\u0627\u0628\u0627",thed:"\u0627\u0644\u0628\u064E\u0627\u0628\u064E\u0627",age:3},{id:"a_grandma",thing:"a_grandma",letter:"taa",word:"\u062A\u064A\u062A\u0629",wd:"\u062A\u0650\u064A\u062A\u064E\u0629",the:"\u0627\u0644\u062A\u064A\u062A\u0629",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u062A\u064E\u0629",age:3},{id:"a_grandpa",thing:"a_grandpa",letter:"jeem",word:"\u062C\u062F\u0648",wd:"\u062C\u064E\u062F\u064F\u0651\u0648",the:"\u0627\u0644\u062C\u062F\u0648",thed:"\u0627\u0644\u062C\u064E\u062F\u064F\u0651\u0648",age:3},{id:"a_baby",thing:"a_baby",letter:"tah",word:"\u0637\u0641\u0644",wd:"\u0637\u0650\u0641\u0652\u0644",the:"\u0627\u0644\u0637\u0641\u0644",thed:"\u0627\u0644\u0637\u0651\u0650\u0641\u0652\u0644",age:3},{id:"a_brother",thing:"a_brother",letter:"alef",word:"\u0623\u062E",wd:"\u0623\u064E\u062E",the:"\u0627\u0644\u0623\u062E",thed:"\u0627\u0644\u0623\u064E\u062E",age:4},{id:"a_sister",thing:"a_sister",letter:"alef",word:"\u0623\u062E\u062A",wd:"\u0623\u064F\u062E\u0652\u062A",the:"\u0627\u0644\u0623\u062E\u062A",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u062A",age:4},{id:"a_boy",thing:"a_boy",letter:"waaw",word:"\u0648\u0644\u062F",wd:"\u0648\u064E\u0644\u064E\u062F",the:"\u0627\u0644\u0648\u0644\u062F",thed:"\u0627\u0644\u0648\u064E\u0644\u064E\u062F",age:3},{id:"a_girl",thing:"a_girl",letter:"baa",word:"\u0628\u0646\u062A",wd:"\u0628\u0650\u0646\u0652\u062A",the:"\u0627\u0644\u0628\u0646\u062A",thed:"\u0627\u0644\u0628\u0650\u0646\u0652\u062A",age:3},{id:"a_friends",thing:"a_friends",letter:"sad",word:"\u0635\u062D\u0627\u0628",wd:"\u0635\u064F\u062D\u064E\u0627\u0628",the:"\u0627\u0644\u0635\u062D\u0627\u0628",thed:"\u0627\u0644\u0635\u0651\u064F\u062D\u064E\u0627\u0628",age:5},{id:"a_family",thing:"a_family",letter:"ayn",word:"\u0639\u064A\u0644\u0629",wd:"\u0639\u0650\u064A\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u064A\u0644\u0629",thed:"\u0627\u0644\u0639\u0650\u064A\u0644\u064E\u0629",age:5},{id:"a_uncle",thing:"a_uncle",letter:"ayn",word:"\u0639\u0645\u0648",wd:"\u0639\u064E\u0645\u064F\u0651\u0648",the:"\u0627\u0644\u0639\u0645\u0648",thed:"\u0627\u0644\u0639\u064E\u0645\u064F\u0651\u0648",age:5},{id:"q_kiwi",thing:"q_kiwi",letter:"kaaf",word:"\u0643\u064A\u0648\u064A",wd:"\u0643\u0650\u064A\u0648\u0650\u064A",the:"\u0627\u0644\u0643\u064A\u0648\u064A",thed:"\u0627\u0644\u0643\u0650\u064A\u0648\u0650\u064A",age:5},{id:"q_melon",thing:"q_melon",letter:"sheen",word:"\u0634\u0645\u0627\u0645",wd:"\u0634\u064E\u0645\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0634\u0645\u0627\u0645",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u064E\u0651\u0627\u0645",age:5},{id:"q_dates",thing:"q_dates",letter:"baa",word:"\u0628\u0644\u062D",wd:"\u0628\u064E\u0644\u064E\u062D",the:"\u0627\u0644\u0628\u0644\u062D",thed:"\u0627\u0644\u0628\u064E\u0644\u064E\u062D",age:5},{id:"q_fig",thing:"q_fig",letter:"taa",word:"\u062A\u064A\u0646",wd:"\u062A\u0650\u064A\u0646",the:"\u0627\u0644\u062A\u064A\u0646",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u0646",age:5},{id:"q_apricot",thing:"q_apricot",letter:"meem",word:"\u0645\u0634\u0645\u0634",wd:"\u0645\u0650\u0634\u0652\u0645\u0650\u0634",the:"\u0627\u0644\u0645\u0634\u0645\u0634",thed:"\u0627\u0644\u0645\u0650\u0634\u0652\u0645\u0650\u0634",age:5},{id:"q_berries",thing:"q_berries",letter:"taa",word:"\u062A\u0648\u062A",wd:"\u062A\u064F\u0648\u062A",the:"\u0627\u0644\u062A\u0648\u062A",thed:"\u0627\u0644\u062A\u0651\u064F\u0648\u062A",age:4},{id:"q_plum",thing:"q_plum",letter:"baa",word:"\u0628\u0631\u0642\u0648\u0642",wd:"\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0631\u0642\u0648\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",age:6},{id:"q_avocado",thing:"q_avocado",letter:"alef",word:"\u0623\u0641\u0648\u0643\u0627\u062F\u0648",wd:"\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",the:"\u0627\u0644\u0623\u0641\u0648\u0643\u0627\u062F\u0648",thed:"\u0627\u0644\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",age:6},{id:"q_peach",thing:"q_peach",letter:"khaa",word:"\u062E\u0648\u062E",wd:"\u062E\u064F\u0648\u062E",the:"\u0627\u0644\u062E\u0648\u062E",thed:"\u0627\u0644\u062E\u064F\u0648\u062E",age:5},{id:"q_cherry",thing:"q_cherry",letter:"kaaf",word:"\u0643\u0631\u0632",wd:"\u0643\u064E\u0631\u064E\u0632",the:"\u0627\u0644\u0643\u0631\u0632",thed:"\u0627\u0644\u0643\u064E\u0631\u064E\u0632",age:4},{id:"q_olives",thing:"q_olives",letter:"zayn",word:"\u0632\u064A\u062A\u0648\u0646",wd:"\u0632\u064E\u064A\u0652\u062A\u064F\u0648\u0646",the:"\u0627\u0644\u0632\u064A\u062A\u0648\u0646",thed:"\u0627\u0644\u0632\u0651\u064E\u064A\u0652\u062A\u064F\u0648\u0646",age:5},{id:"q_coconut",thing:"q_coconut",letter:"noon",word:"\u0646\u0627\u0631\u062C\u064A\u0644",wd:"\u0646\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",the:"\u0627\u0644\u0646\u0627\u0631\u062C\u064A\u0644",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",age:6},{id:"e_pencil",thing:"e_pencil",letter:"qaaf",word:"\u0642\u0644\u0645",wd:"\u0642\u064E\u0644\u064E\u0645",the:"\u0627\u0644\u0642\u0644\u0645",thed:"\u0627\u0644\u0642\u064E\u0644\u064E\u0645",age:3},{id:"e_book",thing:"e_book",letter:"kaaf",word:"\u0643\u062A\u0627\u0628",wd:"\u0643\u0650\u062A\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u062A\u0627\u0628",thed:"\u0627\u0644\u0643\u0650\u062A\u064E\u0627\u0628",age:3},{id:"e_notebook",thing:"e_notebook",letter:"kaaf",word:"\u0643\u0631\u0627\u0633\u0629",wd:"\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0627\u0633\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",age:4},{id:"e_scissors",thing:"e_scissors",letter:"meem",word:"\u0645\u0642\u0635",wd:"\u0645\u064E\u0642\u064E\u0635",the:"\u0627\u0644\u0645\u0642\u0635",thed:"\u0627\u0644\u0645\u064E\u0642\u064E\u0635",age:5},{id:"e_ruler",thing:"e_ruler",letter:"meem",word:"\u0645\u0633\u0637\u0631\u0629",wd:"\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0645\u0633\u0637\u0631\u0629",thed:"\u0627\u0644\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",age:5},{id:"e_eraser",thing:"e_eraser",letter:"alef",word:"\u0623\u0633\u062A\u064A\u0643\u0629",wd:"\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u062A\u064A\u0643\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",age:5},{id:"e_crayons",thing:"e_crayons",letter:"alef",word:"\u0623\u0644\u0648\u0627\u0646",wd:"\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",the:"\u0627\u0644\u0623\u0644\u0648\u0627\u0646",thed:"\u0627\u0644\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",age:4},{id:"e_board",thing:"e_board",letter:"seen",word:"\u0633\u0628\u0648\u0631\u0629",wd:"\u0633\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0633\u0628\u0648\u0631\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",age:5},{id:"e_map",thing:"e_map",letter:"khaa",word:"\u062E\u0631\u064A\u0637\u0629",wd:"\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",the:"\u0627\u0644\u062E\u0631\u064A\u0637\u0629",thed:"\u0627\u0644\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",age:6},{id:"e_glue",thing:"e_glue",letter:"sad",word:"\u0635\u0645\u063A",wd:"\u0635\u064E\u0645\u0652\u063A",the:"\u0627\u0644\u0635\u0645\u063A",thed:"\u0627\u0644\u0635\u0651\u064E\u0645\u0652\u063A",age:6},{id:"e_desk",thing:"e_desk",letter:"meem",word:"\u0645\u0643\u062A\u0628",wd:"\u0645\u064E\u0643\u0652\u062A\u064E\u0628",the:"\u0627\u0644\u0645\u0643\u062A\u0628",thed:"\u0627\u0644\u0645\u064E\u0643\u0652\u062A\u064E\u0628",age:5},{id:"e_paper",thing:"e_paper",letter:"waaw",word:"\u0648\u0631\u0642\u0629",wd:"\u0648\u064E\u0631\u064E\u0642\u064E\u0629",the:"\u0627\u0644\u0648\u0631\u0642\u0629",thed:"\u0627\u0644\u0648\u064E\u0631\u064E\u0642\u064E\u0629",age:4},{id:"g_rectangle",thing:"g_rectangle",letter:"meem",word:"\u0645\u0633\u062A\u0637\u064A\u0644",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",the:"\u0627\u0644\u0645\u0633\u062A\u0637\u064A\u0644",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",age:4},{id:"g_oval",thing:"g_oval",letter:"baa",word:"\u0628\u064A\u0636\u0627\u0648\u064A",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",the:"\u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",age:5},{id:"g_diamond",thing:"g_diamond",letter:"meem",word:"\u0645\u0639\u064A\u0646",wd:"\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",the:"\u0627\u0644\u0645\u0639\u064A\u0646",thed:"\u0627\u0644\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",age:5},{id:"g_hexagon",thing:"g_hexagon",letter:"seen",word:"\u0633\u062F\u0627\u0633\u064A",wd:"\u0633\u064F\u062F\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u0633\u062F\u0627\u0633\u064A",thed:"\u0627\u0644\u0633\u0651\u064F\u062F\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_pentagon",thing:"g_pentagon",letter:"khaa",word:"\u062E\u0645\u0627\u0633\u064A",wd:"\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A",thed:"\u0627\u0644\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_arrow",thing:"g_arrow",letter:"seen",word:"\u0633\u0647\u0645",wd:"\u0633\u064E\u0647\u0652\u0645",the:"\u0627\u0644\u0633\u0647\u0645",thed:"\u0627\u0644\u0633\u0651\u064E\u0647\u0652\u0645",age:4},{id:"g_cube",thing:"g_cube",letter:"meem",word:"\u0645\u0643\u0639\u0628",wd:"\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",the:"\u0627\u0644\u0645\u0643\u0639\u0628",thed:"\u0627\u0644\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",age:5},{id:"g_sphere",thing:"g_sphere",letter:"kaaf",word:"\u0643\u0631\u0629",wd:"\u0643\u064F\u0631\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0629",age:4},{id:"g_cone",thing:"g_cone",letter:"meem",word:"\u0645\u062E\u0631\u0648\u0637",wd:"\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",the:"\u0627\u0644\u0645\u062E\u0631\u0648\u0637",thed:"\u0627\u0644\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",age:6},{id:"g_cylinder",thing:"g_cylinder",letter:"alef",word:"\u0623\u0633\u0637\u0648\u0627\u0646\u0629",wd:"\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u0637\u0648\u0627\u0646\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",age:6},{id:"g_ring",thing:"g_ring",letter:"haa",word:"\u062D\u0644\u0642\u0629",wd:"\u062D\u064E\u0644\u0652\u0642\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0642\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0642\u064E\u0629",age:5},{id:"g_heart",thing:"g_heart",letter:"qaaf",word:"\u0642\u0644\u0628",wd:"\u0642\u064E\u0644\u0652\u0628",the:"\u0627\u0644\u0642\u0644\u0628",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0628",age:3},{id:"v_tomato",thing:"v_tomato",letter:"tah",word:"\u0637\u0645\u0627\u0637\u0645",wd:"\u0637\u064E\u0645\u064E\u0627\u0637\u0650\u0645",the:"\u0627\u0644\u0637\u0645\u0627\u0637\u0645",thed:"\u0627\u0644\u0637\u0651\u064E\u0645\u064E\u0627\u0637\u0650\u0645",age:4},{id:"v_cucumber",thing:"v_cucumber",letter:"khaa",word:"\u062E\u064A\u0627\u0631",wd:"\u062E\u0650\u064A\u064E\u0627\u0631",the:"\u0627\u0644\u062E\u064A\u0627\u0631",thed:"\u0627\u0644\u062E\u0650\u064A\u064E\u0627\u0631",age:4},{id:"v_potato",thing:"v_potato",letter:"baa",word:"\u0628\u0637\u0627\u0637\u0633",wd:"\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",the:"\u0627\u0644\u0628\u0637\u0627\u0637\u0633",thed:"\u0627\u0644\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",age:4},{id:"v_onion",thing:"v_onion",letter:"baa",word:"\u0628\u0635\u0644",wd:"\u0628\u064E\u0635\u064E\u0644",the:"\u0627\u0644\u0628\u0635\u0644",thed:"\u0627\u0644\u0628\u064E\u0635\u064E\u0644",age:5},{id:"v_eggplant",thing:"v_eggplant",letter:"baa",word:"\u0628\u0627\u0630\u0646\u062C\u0627\u0646",wd:"\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",the:"\u0627\u0644\u0628\u0627\u0630\u0646\u062C\u0627\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",age:5},{id:"v_pepper",thing:"v_pepper",letter:"faa",word:"\u0641\u0644\u0641\u0644",wd:"\u0641\u0650\u0644\u0652\u0641\u0650\u0644",the:"\u0627\u0644\u0641\u0644\u0641\u0644",thed:"\u0627\u0644\u0641\u0650\u0644\u0652\u0641\u0650\u0644",age:5},{id:"v_lettuce",thing:"v_lettuce",letter:"khaa",word:"\u062E\u0633",wd:"\u062E\u064E\u0633",the:"\u0627\u0644\u062E\u0633",thed:"\u0627\u0644\u062E\u064E\u0633",age:5},{id:"v_broccoli",thing:"v_broccoli",letter:"baa",word:"\u0628\u0631\u0648\u0643\u0644\u064A",wd:"\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",the:"\u0627\u0644\u0628\u0631\u0648\u0643\u0644\u064A",thed:"\u0627\u0644\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",age:5},{id:"v_peas",thing:"v_peas",letter:"baa",word:"\u0628\u0633\u0644\u0629",wd:"\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0628\u0633\u0644\u0629",thed:"\u0627\u0644\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",age:6},{id:"v_pumpkin",thing:"v_pumpkin",letter:"qaaf",word:"\u0642\u0631\u0639",wd:"\u0642\u064E\u0631\u0652\u0639",the:"\u0627\u0644\u0642\u0631\u0639",thed:"\u0627\u0644\u0642\u064E\u0631\u0652\u0639",age:5},{id:"v_garlic",thing:"v_garlic",letter:"thaa",word:"\u062B\u0648\u0645",wd:"\u062B\u064F\u0648\u0645",the:"\u0627\u0644\u062B\u0648\u0645",thed:"\u0627\u0644\u062B\u0651\u064F\u0648\u0645",age:6},{id:"v_mushroom",thing:"v_mushroom",letter:"faa",word:"\u0641\u0637\u0631",wd:"\u0641\u064F\u0637\u0652\u0631",the:"\u0627\u0644\u0641\u0637\u0631",thed:"\u0627\u0644\u0641\u064F\u0637\u0652\u0631",age:6}];var _c="../art/",kd=i=>{_c=i,Rd(i),Ud(`${i}../clips/`)},gc=new Map;function hx(i){if(gc.has(i))return gc.get(i);let t=new $n().load(`${_c}${i}.webp`);return t.colorSpace=oe,t.anisotropy=4,t.generateMipmaps=!0,t.minFilter=Hn,gc.set(i,t),t}function Ra(i,t,e=1){if(e>1){let l=new Rt;for(let c=e-1;c>=0;c--){let h=Ra(i,t,1);h.position.z=-c*.028;let d=c===0?1:Math.max(.35,.78-c*.07);h.material=h.material.clone(),h.material.color.setScalar(d),l.add(h)}return l}let[n,s]=lc[i],r=new ge(t*n/s,t);r.translate(0,t/2,0);let a=new Gt({map:hx(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:ve}),o=new X(r,a);return o.userData.name=i,o}var dx={boy:{idle:"boy_idle",wave:"boy_wave",point:"boy_point",read:"boy_read",cheer:"boy_wave"},girl:{idle:"girl_idle",wave:"girl_wave",point:"girl_wave",read:"girl_stand_read",cheer:"girl_cheer"},owl:{idle:"owl",wave:"owl",point:"owl",read:"owl",cheer:"owl"}},mc={boy:3.6,girl:3.6,owl:3},ux=!1;function js(i){if(ux&&Pd(i))return pc(i,Dd(i),mc[i]);let t=dx[i],e=new Rt,n=new Rt;e.add(n);let s={};for(let[c,h]of Object.entries(t))s[h]||(s[h]=Ra(h,mc[i],7),s[h].visible=!1,n.add(s[h]));let r=null,a=c=>{let h=s[t[c]||t.idle];h!==r&&(r&&(r.visible=!1),r=h,h.visible=!0)};a("idle");let o=new X(new Yn(.9,24),new Gt({color:0,transparent:!0,opacity:.18,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,-.05),o.scale.set(1,.45,1),e.add(o);let l={act:null,t:0,lookX:0,base:0,squash:0,micro:null,microT:0,nextMicro:2+Math.random()*3};return e.userData.state=l,e.act=c=>{l.act=c,l.t=0},e.look=c=>{l.lookX=c},e.face=()=>{},e.setLook=()=>{},e.update=(c,h)=>{l.t+=c;let d=l.t,u=0,f=0,m=0;if(!l.act&&(l.nextMicro-=c,l.nextMicro<=0)){let b=["look","look","hop","wave","excited"][Math.floor(Math.random()*5)];l.nextMicro=2.5+Math.random()*4.5,b==="look"?(l.micro="look",l.microT=0,l.lookDir=Math.random()<.5?-1:1):b==="wave"?e.act("wave"):(l.micro=b,l.microT=0)}if(l.micro){l.microT+=c;let b=l.microT;l.micro==="look"?b<1.6?(u=Math.sin(b/1.6*Math.PI)*.07*l.lookDir,f=Math.sin(b/1.6*Math.PI)*.3*l.lookDir):l.micro=null:l.micro==="hop"?b<.6?m=Math.sin(b/.6*Math.PI)*.22:l.micro=null:l.micro==="excited"&&(b<1.1?(m=Math.abs(Math.sin(b*9))*.14,u=Math.sin(b*18)*.03):l.micro=null)}let x=Math.sin(h*1.8)*.025,g=Math.sin(h*1.1)*.012,p=1+Math.sin(h*1.8)*.008,v=1,A=0,_="idle";switch(l.act){case"wave":d<2.4&&(_="wave",g=Math.sin(d*9)*.05,x=Math.abs(Math.sin(d*4))*.05);break;case"point":d<1.8&&(_="point",g=-.04);break;case"talk":d<2.4&&(_="wave",x=Math.abs(Math.sin(d*7))*.04,g=Math.sin(d*5)*.03);break;case"clap":d<1.8&&(_="wave",x=Math.abs(Math.sin(d*11))*.12,g=Math.sin(d*11)*.04);break;case"cheer":case"jump":d<1.3&&(_="cheer",x=Math.abs(Math.sin(d*7))*.55,p=1+Math.sin(d*14)*.04,v=1-Math.sin(d*14)*.03);break;case"celebrate":d<2.6&&(_="cheer",x=Math.abs(Math.sin(d*5))*.6,g=Math.sin(d*10)*.08,A=Math.sin(d*4)*.5);break;case"think":d<2.4&&(_="idle",g=.12+Math.sin(d*3)*.04,x=0);break;case"run":d<1.4&&(_="idle",x=Math.abs(Math.sin(d*15))*.16,g=.1+Math.sin(d*15)*.05);break;case"walk":{_="idle",x=Math.abs(Math.sin(d*7.4))*.1,g=Math.sin(d*7.4)*.06,p=1+Math.sin(d*14.8)*.012;break}case"sad":d<2.2&&(_="idle",g=.05,x=-.05,p=.97);break;default:}l.act&&l.act!=="walk"&&d>2.8&&(l.act=null),l.act||(x+=m,g+=u,A+=f),a(_);let P=Math.max(-.35,Math.min(.35,(l.lookX-e.position.x)*.04));n.rotation.y+=(P+A-n.rotation.y)*Math.min(1,c*6),n.rotation.z+=(g-n.rotation.z)*Math.min(1,c*10),n.position.y+=(x-n.position.y)*Math.min(1,c*14),n.scale.set(v,p,1),o.scale.set(1-x*.5,.45-x*.2,1)},i==="owl"?e:pc(i,e,mc[i])}var Ta={apple:"apple_n",banana:"banana_n",ball:"ball",crow:"crow",envelope:"envelope",lemon:"lemon",crescent:"crescent",corn:"corn",orange:"orange",grapes:"grapes_n",strawberry:"strawberry",watermelon:"watermelon",pineapple:"pineapple",mango:"mango",carrot:"carrot",cow:"cow",sheep:"sheep_n",dog:"dog",cat:"cat_n",giraffe:"giraffe_n",lion:"lion",elephant:"elephant2",horse:"horse_n",pig:"pig",bunny:"rabbit_n",rabbit:"rabbit_n",duck:"duck_n",hen:"hen_n",chick:"chick",bee:"bee_n",butterfly:"butterfly_n",monkey:"monkey",fish:"clownfish_n",dove:"dove_n",frog:"frog_n",panda:"panda",tiger:"tiger",zebra:"zebra",penguin:"penguin",parrot:"parrot",fox:"fox",camel:"camel",sun:"sun",rose:"rose",pomegranate:"pomegranate",rocket:"rocket",car:"car",bus:"bus",train:"train",plane:"plane_n",boat:"boat",firetruck:"firetruck",ambulance:"ambulance",police:"police",helicopter:"helicopter"},Nd=[...Sa.map(i=>i.thing),"c_schoolbus","c_citybus","c_taxi","c_tram","c_bulldozer","h_bike","d_jeep","d_balloon","d_boat","d_donkeycart","h_towel","h_shoes","h_toybox","h_broom","h_bin","h_wardrobe","h_clock","h_wateringcan","h_ball","h_table","h_sink","h_bed","h_backpack","h_toothbrush","f_haypile","f_eggs"];for(let i of Nd)Ta[i]=i;var Fd=new Set(["cow","sheep","dog","cat","giraffe","lion","elephant","elephant2","fox","camel","crow","sheep_n","cat_n","giraffe_n","horse_n","rabbit_n","duck_n","hen_n","bee_n","butterfly_n","clownfish_n","croc","horse","pig","rabbit","mallard","hen","chick","bee","butterfly","frog_n","dove_n","grapes_n","plane_n","monkey","clownfish","pigeon","frog","panda","tiger","zebra","penguin","parrot"]);for(let i of Nd)Fd.add(i);var fx=i=>!!Ta[i]&&!!lc[Ta[i]];function Od(i){if(!fx(i))return null;let t=new Rt,e=Ta[i],n=Fd.has(e)?1.5:1;return t.add(Ra(e,n)),t.userData.id=i,t.userData.art=!0,t.userData.inner=new Rt,t}function Rn(i,t){return Ra(i,t,1)}function Fe(i,t=1,e=1){let n=new $n().load(`${_c}${i}.webp`);return n.colorSpace=oe,n.wrapS=n.wrapT=wn,n.repeat.set(t,e),n.anisotropy=8,n}var q=(i,t=.55)=>new Yt({color:i,roughness:t}),Y=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let l=new X(new be(i,18,14),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l.castShadow=!0,l},xe=(i,t,e,n,s=0,r=0,a=0)=>{let o=new X(new ce(i,t,e,14),n);return o.position.set(s,r,a),o.castShadow=!0,o},Se=(i,t,e,n=0,s=0,r=0)=>{let a=new X(new nn(i,t,14),e);return a.position.set(n,s,r),a.castShadow=!0,a},$e=(i,t,e,n=.12,s=.05)=>{for(let r of[-1,1])i.add(Y(s,q(1710628,.3),r*n,t,e)),i.add(Y(s*.35,new Gt({color:16777215}),r*n+s*.3,t+s*.4,e+s*.7))},An=(i,t,e,n,s=.28,r=.07)=>{for(let a of e)for(let o of n)i.add(xe(r,r*.9,s,t,a,s/2,o))},xc={duck(i){let t=q(16767034,.4),e=q(16747050);i.add(Y(.42,t,0,.45,0,1,.9,1.15)),i.add(Y(.27,t,0,.9,.3));let n=Y(.13,e,0,.84,.55,1.3,.5,1.1);i.add(n),$e(i,.97,.5,.12),i.add(Y(.2,q(16761370),.38,.5,-.02,.4,.8,1)),i.add(Y(.2,q(16761370),-.38,.5,-.02,.4,.8,1)),i.add(Se(.14,.3,t,0,.62,-.5)).rotation.x=-1.1},butterfly(i){i.add(xe(.05,.05,.6,q(4864602),0,.5,0)).rotation.x=Math.PI/2,i.children[0].rotation.x=0,i.add(Y(.09,q(4864602),0,.85,0));let t=new Rt;for(let[e,n,s]of[[-1,1,16739e3],[1,1,16739e3],[-1,-1,12090111],[1,-1,12090111]]){let r=Y(.38,q(s,.4),e*.36,.62+n*.18,0,1,1,.12);t.add(r,Y(.1,q(16777215),e*.42,.62+n*.2,.06,1,1,.3))}i.add(t),i.userData.wings=t;for(let e of[-1,1]){let n=xe(.012,.012,.3,q(4864602),e*.08,1.05,0);n.rotation.z=-e*.4,i.add(n)}},fox(i){let t=q(15764010),e=q(16774376),n=q(4860442);i.add(Y(.4,t,0,.5,-.05,.9,.85,1.25)),i.add(Y(.3,t,0,.88,.38,1.1,.95,1)),i.add(Y(.2,e,0,.8,.55,1.2,.7,1)),i.add(Y(.05,n,0,.84,.72));for(let s of[-1,1]){let r=Se(.11,.32,t,s*.2,1.2,.34);r.rotation.z=-s*.2,i.add(r),i.add(Se(.05,.2,n,s*.2,1.18,.37)).rotation.z=-s*.2}$e(i,.95,.62,.12),i.add(Y(.18,t,0,.55,-.62,.8,.8,1.7)).rotation.x=.5,i.add(Y(.14,e,0,.78,-.95,.9,.9,1.2)),An(i,n,[-.2,.2],[.25,-.35],.3)},camel(i){let t=q(14198888),e=q(12093512);i.add(Y(.42,t,0,.78,0,.85,.8,1.35)),i.add(Y(.22,t,0,1.2,-.2)),i.add(Y(.2,t,0,1.18,.28));let n=xe(.12,.17,.62,t,0,1.2,.58);n.rotation.x=.5,i.add(n),i.add(Y(.17,t,0,1.55,.78,.9,.9,1.3)),i.add(Y(.05,q(1710628),0,1.6,.93)),$e(i,1.6,.76,.1,.035),An(i,e,[-.22,.22],[.42,-.42],.55,.08),i.add(xe(.025,.025,.35,e,0,.7,-.62)).rotation.x=.3},horse(i){let t=q(11037242),e=q(3810328),n=q(16774376);i.add(Y(.38,t,0,.78,0,.8,.8,1.4));let s=xe(.14,.2,.6,t,0,1.15,.5);s.rotation.x=.55,i.add(s),i.add(Y(.2,t,0,1.5,.7,.85,.95,1.5)),i.add(Y(.12,n,0,1.45,.88,.8,.7,1));for(let r of[-1,1])i.add(Se(.07,.2,t,r*.1,1.72,.58));$e(i,1.55,.74,.14,.035),i.add(Y(.1,e,0,1.55,.45,.5,1.6,.9)).rotation.x=.55,An(i,t,[-.2,.2],[.42,-.45],.55,.075),i.add(Se(.1,.55,e,0,.85,-.75)).rotation.x=2.6},sheep(i){let t=q(16775920,.9),e=q(3816004);for(let[n,s,r,a]of[[0,.62,0,.42],[-.28,.6,.1,.3],[.28,.6,.1,.3],[0,.85,.05,.3],[-.2,.6,-.3,.3],[.2,.6,-.3,.3],[0,.52,.3,.3]])i.add(Y(a,t,n,s,r));i.add(Y(.22,e,0,.72,.5,.95,1.05,1.1));for(let n of[-1,1])i.add(Y(.1,e,n*.24,.8,.45,1.4,.7,.5));$e(i,.78,.68,.09,.03),An(i,e,[-.18,.18],[.22,-.25],.3,.06)},hen(i){let t=q(16774376,.7),e=q(15216682),n=q(16752682);i.add(Y(.42,t,0,.55,0,1,.95,1.1)),i.add(Y(.24,t,0,1,.32)),i.add(Y(.12,n,0,.95,.56,.9,.7,1.4));for(let s=0;s<3;s++)i.add(Y(.07,e,0,1.28-Math.abs(s-1)*.04,.3+(s-1)*.1));i.add(Y(.06,e,0,.82,.55,.7,1.4,.7)),$e(i,1.03,.5,.11,.035),i.add(Se(.22,.5,t,0,.85,-.5)).rotation.x=-.6,i.add(Y(.2,q(15786184),.4,.55,0,.35,.8,1)),i.add(Y(.2,q(15786184),-.4,.55,0,.35,.8,1)),An(i,n,[-.12,.12],[0],.2,.03)},sun(i){let t=q(16765466,.3);i.add(Y(.45,t,0,.7,0));for(let n=0;n<10;n++){let s=n/10*Math.PI*2,r=Se(.09,.32,q(16754714),Math.cos(s)*.68,.7+Math.sin(s)*.68,0);r.rotation.z=s-Math.PI/2,i.add(r)}$e(i,.78,.42,.15,.045);let e=new X(new Ie(.15,.025,6,14,Math.PI),q(12073498));e.position.set(0,.6,.43),e.rotation.z=Math.PI,i.add(e);for(let n of[-1,1])i.add(Y(.07,q(16751210),n*.28,.62,.38,1,.7,.5))},bee(i){let t=q(16765466),e=q(2763306);i.add(Y(.4,t,0,.5,0,.9,.85,1.25));for(let n of[-.1,.2,-.38]){let s=Y(.37-Math.abs(n)*.2,e,0,.5,n,.9,.85,.2);i.add(s)}i.add(Y(.22,t,0,.62,.52)),$e(i,.68,.68,.1,.05);for(let n of[-1,1]){i.add(Y(.22,q(13627135,.2),n*.32,.95,0,.9,.35,1.1)).userData.wing=n;let s=xe(.012,.012,.3,e,n*.08,.95,.62);s.rotation.z=-n*.4,s.rotation.x=.3,i.add(s)}i.add(Se(.06,.2,e,0,.45,-.62)).rotation.x=-Math.PI/2},heart(i){let t=new X(Ma("heart",.4,.09),new Yt({color:16726634,roughness:.25}));t.scale.setScalar(.62),t.position.y=.55,t.castShadow=!0,i.add(t),i.add(Y(.07,new Gt({color:16765148}),-.2,.72,.28,1,1.4,.5))},rose(i){let t=q(15214666,.45),e=q(3844170);i.add(xe(.04,.05,.75,e,0,.38,0));for(let[n,s]of[[-1,.35],[1,.5]]){let r=Y(.16,e,n*.2,s,0,1.6,.3,.8);r.rotation.z=n*.4,i.add(r)}i.add(Y(.3,t,0,.95,0,1,.9,1));for(let n=0;n<5;n++){let s=n/5*Math.PI*2;i.add(Y(.18,q(16730730,.45),Math.cos(s)*.24,.98,Math.sin(s)*.24,1,1.1,.6)).rotation.y=-s}i.add(Y(.14,q(13113914),0,1.05,0))},dog(i){let t=q(13144138),e=q(16774376),n=q(8014370);i.add(Y(.4,t,0,.55,-.05,.85,.8,1.3)),i.add(Y(.3,t,0,.95,.4)),i.add(Y(.18,e,0,.88,.62,1,.8,1.1)),i.add(Y(.06,q(1710628),0,.93,.78));for(let s of[-1,1])i.add(Y(.13,n,s*.3,.95,.35,.6,1.5,.9));$e(i,1.02,.62,.12,.045),An(i,t,[-.2,.2],[.28,-.38],.32,.08),i.add(Se(.07,.4,t,0,.8,-.65)).rotation.x=-2.2,i.add(Y(.1,q(16743066),0,.74,.7,.8,.4,1.2))},monkey(i){let t=q(10119738),e=q(15782048);i.add(Y(.38,t,0,.55,0,.9,1,.9)),i.add(Y(.3,t,0,1.05,.05)),i.add(Y(.2,e,0,.98,.25,1.2,.9,.6)),i.add(Y(.05,q(3811866),0,1,.36)),$e(i,1.12,.27,.1,.04);for(let s of[-1,1])i.add(Y(.14,t,s*.33,1.08,0)),i.add(Y(.09,e,s*.33,1.08,.05)),i.add(Y(.1,t,s*.5,.45,.12,.8,1.6,.8));i.add(Y(.24,e,0,.5,.25,.9,1,.5)),An(i,t,[-.18,.18],[.05],.3,.09);let n=new X(new Ie(.3,.05,8,16,Math.PI*1.4),t);n.position.set(0,.5,-.4),n.rotation.y=Math.PI/2,i.add(n)},cow(i){let t=q(16775920),e=q(2763306),n=q(16756920);i.add(Y(.45,t,0,.78,0,.9,.85,1.4)),i.add(Y(.18,e,-.15,.95,.1,1,1,.9)),i.add(Y(.15,e,.2,.7,-.2,1,1,.9)),i.add(Y(.3,t,0,1,.62)),i.add(Y(.2,n,0,.9,.85,1.1,.8,.8));for(let s of[-1,1])i.add(Y(.04,q(1710628),s*.08,.92,1)),i.add(Se(.05,.2,q(16312512),s*.2,1.38,.62)).rotation.z=-s*.4,i.add(Y(.11,e,s*.32,1.12,.6,1.4,.6,.8));$e(i,1.12,.84,.15,.04),An(i,t,[-.22,.22],[.4,-.45],.45,.09),i.add(xe(.025,.025,.5,t,0,.7,-.7)).rotation.x=.3},bear(i){let t=q(9067066),e=q(15255704);i.add(Y(.46,t,0,.55,0,1,1,.9)),i.add(Y(.32,t,0,1.15,.05)),i.add(Y(.18,e,0,1.08,.28,1.1,.8,.8)),i.add(Y(.06,q(1710628),0,1.13,.42,1.2,.8,1));for(let n of[-1,1])i.add(Y(.12,t,n*.26,1.42,0)),i.add(Y(.07,e,n*.26,1.42,.07)),i.add(Y(.14,t,n*.45,.3,.25,.8,1,1.2));$e(i,1.22,.3,.11,.045),i.add(Y(.3,e,0,.5,.35,.9,1,.5));for(let n of[-1,1])i.add(Y(.12,t,n*.42,.55,.15,.8,1.6,.8))},mouse(i){let t=q(12105928),e=q(16756928);i.add(Y(.32,t,0,.36,0,.9,.85,1.3)),i.add(Y(.22,t,0,.45,.35,.9,.9,1.2)),i.add(Y(.05,e,0,.44,.58));for(let s of[-1,1])i.add(Y(.14,t,s*.2,.68,.22,1,1,.3)),i.add(Y(.09,e,s*.2,.68,.25,1,1,.3));$e(i,.52,.5,.09,.035);let n=new X(new Ie(.3,.025,6,16,Math.PI*1.2),e);n.position.set(0,.15,-.55),n.rotation.set(0,Math.PI/2,0),i.add(n),An(i,t,[-.15,.15],[.15,-.2],.12,.05)},carrot(i){let t=Se(.22,.95,q(16747034),0,.5,0);t.rotation.z=Math.PI,i.add(t);for(let e of[-.07,0,.07])i.add(Se(.06,.3,q(3844170),e,1.15,0)).rotation.z=e*3},bone(i){let t=q(16774368);i.add(xe(.1,.1,.8,t,0,.3,0)).rotation.z=Math.PI/2;for(let e of[-.42,.42])for(let n of[-.1,.1])i.add(Y(.14,t,e,.3,n))},grass(i){for(let t=0;t<9;t++){let e=t/9*Math.PI*2,n=Se(.07,.8+t%3*.15,q(t%2?4900954:3844170),Math.cos(e)*.18,.4,Math.sin(e)*.18);n.rotation.z=Math.cos(e)*.3,n.rotation.x=Math.sin(e)*.3,i.add(n)}},honey(i){i.add(xe(.32,.36,.55,q(16758810,.2),0,.3,0)),i.add(xe(.34,.34,.08,q(9067050),0,.6,0)),i.add(Y(.13,q(16762938,.2),.2,.55,.1,1,.6,1));let t=new X(new ge(.4,.28),q(16774360));t.position.set(0,.32,.37),i.add(t)},cheese(i){let t=q(16765498,.5),e=xe(.5,.5,.4,t,0,.25,0);i.add(e),e.geometry=new ce(.5,.5,.4,3),e.rotation.y=.5;for(let[n,s,r]of[[.1,.3,.3],[-.2,.2,.2],[.25,.45,0],[-.05,.46,-.1]])i.add(Y(.07,q(15247386),n,s,r))},seeds(i){for(let t=0;t<18;t++)i.add(Y(.06,q(t%3?13148240:15257720),Math.cos(t*2.4)*.28*(.4+t%5/6),.07+t%4*.05,Math.sin(t*2.4)*.28*(.4+t%5/6),1,.7,1.4))},pomegranate(i){let t=q(13113402,.35);i.add(Y(.42,t,0,.45,0)),i.add(xe(.12,.16,.12,q(9048616),0,.88,0));for(let e=0;e<5;e++){let n=e/5*Math.PI*2;i.add(Se(.05,.14,q(9048616),Math.cos(n)*.1,.98,Math.sin(n)*.1))}i.add(Y(.08,new Gt({color:16747168}),-.15,.62,.34,1,1.3,.5))},giraffe(i){let t=q(16764746),e=q(12089386);i.add(Y(.38,t,0,.78,0,.8,.8,1.3));for(let[s,r,a]of[[.2,.85,.1],[-.2,.7,-.2],[.18,.7,-.3],[-.15,.9,.25]])i.add(Y(.09,e,s,r,a,1,1,.5));let n=xe(.12,.17,.95,t,0,1.35,.4);n.rotation.x=.18,i.add(n),i.add(Y(.2,t,0,1.88,.5,.9,.95,1.3)),i.add(Y(.11,q(15782040),0,1.82,.7,1,.8,1));for(let s of[-1,1])i.add(xe(.02,.02,.2,e,s*.09,2.1,.45)),i.add(Y(.04,e,s*.09,2.22,.45)),i.add(Y(.07,t,s*.2,1.95,.4,1.3,.6,.5));$e(i,1.92,.64,.12,.035);for(let s of[-1,1])i.add(Y(.09,e,s*.06,1.5,.45,1,1,.4));An(i,t,[-.2,.2],[.32,-.38],.55,.07)},corn(i){i.add(Y(.26,q(16765466,.4),0,.55,0,1,1.9,1));for(let t=0;t<7;t++)for(let e=0;e<8;e++){let n=e/8*Math.PI*2+t*.4;i.add(Y(.055,q(16760330,.4),Math.cos(n)*.25,.15+t*.14,Math.sin(n)*.25))}for(let t of[.3,2.4,4.4]){let e=Se(.18,.7,q(4892746),Math.cos(t)*.2,.35,Math.sin(t)*.2);e.rotation.z=Math.cos(t)*.35,e.rotation.x=Math.sin(t)*.35,e.scale.z=.35,i.add(e)}},rocket(i){let t=q(16053503,.3),e=q(15216682,.4);i.add(xe(.26,.3,1,t,0,.7,0)),i.add(Se(.26,.45,e,0,1.43,0)),i.add(Y(.12,q(4892927,.1),0,.85,.24,1,1,.5));for(let n=0;n<3;n++){let s=n/3*Math.PI*2,r=Y(.2,e,Math.cos(s)*.3,.3,Math.sin(s)*.3,.4,1.4,1);r.rotation.y=-s,i.add(r)}i.add(Se(.15,.4,new Gt({color:16754714}),0,.02,0)).rotation.x=Math.PI},envelope(i){let t=document.createElement("canvas");t.width=256,t.height=168;let e=t.getContext("2d");e.fillStyle="#fff6e0",e.fillRect(0,0,256,168),e.strokeStyle="#d8c8a0",e.lineWidth=4,e.beginPath(),e.moveTo(0,0),e.lineTo(128,96),e.lineTo(256,0),e.stroke(),e.beginPath(),e.moveTo(0,168),e.lineTo(96,80),e.moveTo(256,168),e.lineTo(160,80),e.stroke(),e.fillStyle="#e8304a",e.beginPath(),e.arc(128,96,22,0,Math.PI*2),e.fill(),e.fillStyle="#ffd0d8",e.font="900 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u2665",128,97);let n=new mn(t);n.colorSpace=oe;let s=new X(new le(1.05,.7,.07),[q(15787208),q(15787208),q(15787208),q(15787208),new Yt({map:n,roughness:.7}),q(15260864)]);s.position.y=.5,s.rotation.x=-.12,s.castShadow=!0,i.add(s)},crow(i){let t=q(1842734,.25),e=q(2764880,.3),n=q(4868696,.4);i.add(Y(.42,t,0,.62,0,.85,.8,1.35)),i.add(Y(.3,t,0,1,.5)),i.add(Y(.13,n,0,.93,.86,.9,.8,1.9));for(let r of[-1,1]){i.add(Y(.075,q(16777215,.2),r*.2,1.07,.66)),i.add(Y(.04,q(0,.1),r*.22,1.07,.71));let a=Y(.3,e,r*.34,.62,-.05,.38,.85,1.5);a.rotation.z=-r*.25,i.add(a)}let s=Se(.2,.75,e,0,.5,-.75,4);s.rotation.x=-1.7,s.scale.set(1,1,.3),i.add(s),An(i,q(3816008),[-.1,.1],[.05],.3,.03)},lemon(i){let t=q(16771146,.4);i.add(Y(.4,t,0,.4,0,1.25,.95,.95)),i.add(Y(.1,t,.5,.4,0,1,.8,.8)),i.add(Y(.1,t,-.5,.4,0,1,.8,.8));let e=Y(.2,q(3844170),.1,.82,0,1.6,.25,.8);e.rotation.z=.4,i.add(e)},crescent(i){let t=new Yt({color:16767050,roughness:.3,emissive:16758810,emissiveIntensity:.35}),e=new X(new Ie(.5,.17,12,28,Math.PI*1.5),t);e.position.y=.65,e.rotation.z=Math.PI*.75,e.castShadow=!0,i.add(e),i.add(Y(.12,t,.55,.95,0))},dove(i){let t=q(16775924,.5);i.add(Y(.38,t,0,.5,0,.9,.9,1.25)),i.add(Y(.22,t,0,.92,.3)),i.add(Se(.06,.2,q(16753178),0,.9,.55)).rotation.x=Math.PI/2,$e(i,.97,.45,.1,.035);for(let e of[-1,1]){let n=Y(.28,t,e*.36,.78,-.05,.4,1.4,1.1);n.rotation.z=-e*.5,i.add(n)}i.add(Se(.16,.5,t,0,.5,-.5)).rotation.x=-1.4},bed(i){i.add(new X(new le(1.5,.25,.95),q(13141578)).translateY(.2)),i.add(new X(new le(1.4,.2,.88),q(16774376)).translateY(.42)),i.add(new X(new le(1,.16,.9),q(4892927)).translateX(.18).translateY(.55)),i.add(Y(.28,q(16777215),-.5,.62,0,1.2,.5,1.4)),i.add(new X(new le(.08,.7,.95),q(11037242)).translateX(-.75).translateY(.5))},soap(i){i.add(new X(new le(.7,.28,.45),q(16751304,.3)).translateY(.2));for(let[t,e,n,s]of[[.2,.6,.1,.18],[-.15,.78,0,.13],[.35,.85,-.1,.1],[-.35,.55,.15,.1],[.05,1,.05,.09]])i.add(Y(s,new Yt({color:13627135,transparent:!0,opacity:.6,roughness:.05}),t,e,n))},bowl(i){let t=new X(new be(.5,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new Yt({color:4892927,roughness:.3,side:ve}));t.position.y=.55,i.add(t),i.add(xe(.5,.5,.03,q(16777215),0,.55,0)),i.add(xe(.46,.46,.03,q(16774360),0,.52,0));for(let n=0;n<7;n++)i.add(Y(.09,q(15249482),Math.cos(n*2.1)*.25,.6,Math.sin(n*2.1)*.25,1,.7,1));let e=xe(.025,.025,.6,q(13158608),.35,.75,.1);e.rotation.z=-.6,i.add(e)},backpack(i){i.add(Y(.45,q(16734794,.5),0,.5,0,1,1.1,.7)),i.add(Y(.3,q(16758826,.5),0,.35,.28,1,.8,.5));for(let e of[-1,1])i.add(new X(new Ie(.3,.04,8,14,Math.PI),q(3816010))).position.set(e*.35,.55,.25);let t=new X(new Ie(.12,.03,8,14,Math.PI),q(3816010));t.position.set(0,1,0),i.add(t)},pot(i){i.add(xe(.45,.4,.55,q(13158612,.25),0,.35,0)),i.add(xe(.47,.47,.06,q(15263984,.25),0,.66,0)),i.add(Y(.08,q(16734794),0,.74,0));for(let t of[-1,1])i.add(new X(new Ie(.1,.03,6,10),q(3816010))).position.set(t*.5,.45,0);for(let[t,e]of[[.1,0],[-.12,.08],[.02,-.1]])i.add(Y(.13,new Yt({color:16777215,transparent:!0,opacity:.55}),t,1+t,e))},plate(i){i.add(xe(.55,.45,.07,q(16777215,.25),0,.2,0)),i.add(new X(new Ie(.5,.03,8,24),q(4892927)).rotateX(Math.PI/2).translateZ(-.25)),i.add(Y(.2,q(14195274),.12,.35,.05,1.1,.8,1)),i.add(Y(.14,q(4892746),-.2,.32,-.08)),i.add(Y(.1,q(15216682),-.15,.3,.22));let t=xe(.015,.015,.6,q(13158608),.7,.28,0);t.rotation.x=Math.PI/2,i.add(t)},tub(i){let t=q(16777215,.25);i.add(new X(new le(1.5,.12,.8),t).translateY(.15));for(let[e,n,s,r]of[[1.5,.1,0,.4],[1.5,.1,0,-.4],[.1,.8,.75,0],[.1,.8,-.75,0]])i.add(new X(new le(e,.55,n),t)).position.set(s,.4,r);i.add(new X(new le(1.35,.04,.7),q(9099519,.1)).translateY(.5));for(let[e,n,s,r]of[[-.3,.62,.1,.16],[.1,.7,-.1,.2],[.4,.62,.15,.13],[-.1,.8,.05,.12]])i.add(Y(r,new Yt({color:16777215,transparent:!0,opacity:.85}),e,n,s));for(let e of[-.6,.6])i.add(xe(.06,.06,.12,q(13158608),e,.05,.3))},toothbrush(i){let t=new X(new le(.13,1,.08),q(4892927));t.position.set(0,.55,0),t.rotation.z=.25,i.add(t);let e=new X(new le(.2,.34,.1),q(4892927));e.position.set(-.22,1.06,0),e.rotation.z=.25,i.add(e);let n=new X(new le(.17,.3,.1),q(16777215));n.position.set(-.24,1.07,.08),n.rotation.z=.25,i.add(n),i.add(Y(.09,q(16777215),-.2,1.14,.12,1.5,.8,.8))}};function Pa(i){let t=Od(i);if(t)return t;if(!xc[i])return Sd(i);let e=new Rt,n=new Rt;return n.add=function(...r){return Rt.prototype.add.apply(this,r),r[0]},xc[i](n),px.has(i)&&(n.rotation.y=-.85),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(n),e.userData.id=i,e.userData.inner=n,e}var px=new Set(["crow","fox","camel","monkey","bear","mouse","dog","giraffe","sheep","hen","duck","cow","dove"]),TA=Object.keys(xc);var Ze=(i,t=.8,e={})=>new Yt({color:i,roughness:t,...e}),Pn=(i,t,e,n,s,r,a)=>{let o=new X(new le(i,t,e),n);return o.position.set(s,r,a),o.castShadow=!0,o.receiveShadow=!0,o},Ks=(i,t,e,n,s,r,a,o=16)=>{let l=new X(new ce(i,t,e,o),n);return l.position.set(s,r,a),l.castShadow=!0,l},Bd=(i,t,e,n,s,r,a=16)=>{let o=new X(new nn(i,t,a),e);return o.position.set(n,s,r),o.castShadow=!0,o},Ac=(i,t,e,n,s)=>{let r=new X(new be(i,18,14),t);return r.position.set(e,n,s),r.castShadow=!0,r};function zd(i,t,e,n=[1,1]){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new mn(s);return r.colorSpace=oe,r.wrapS=r.wrapT=wn,r.repeat.set(n[0],n[1]),r.anisotropy=4,r}var gx=i=>zd(256,256,(t,e,n)=>{t.fillStyle="#e6d8bb",t.fillRect(0,0,e,n);for(let s=0;s<8;s++)for(let r=0;r<5;r++)t.fillStyle=["#e0cfab","#eee0c4","#d8c59e","#e8d9b8"][(r*3+s*5)%4],t.fillRect(r*64-s%2*32+2,s*32+2,60,28);t.strokeStyle="#a8946a",t.lineWidth=3;for(let s=0;s<=8;s++)t.beginPath(),t.moveTo(0,s*32),t.lineTo(e,s*32),t.stroke()},i);var mx=i=>zd(256,256,(t,e,n)=>{t.fillStyle="#b02a24",t.fillRect(0,0,e,n);for(let s=0;s<8;s++)for(let r=0;r<9;r++)t.fillStyle=["#d8382c","#e04a38","#cc3026"][(r+s)%3],t.beginPath(),t.arc(r*32-s%2*16+16,s*32+8,17,0,Math.PI),t.fill(),t.strokeStyle="#8a1e1a",t.lineWidth=2,t.beginPath(),t.arc(r*32-s%2*16+16,s*32+8,17,0,Math.PI),t.stroke()},i);function Qs(i,t,e,n=-.2,s=null){let r=new X(new ge(80,44),s?new Yt({map:s,roughness:1}):Ze(t,1));r.rotation.x=-Math.PI/2,r.position.y=n,r.receiveShadow=!0,i.add(r);let a=Pn(70,.4,3.4,s&&s.userData&&s.userData.strip?new Yt({map:s.userData.strip,roughness:1}):Ze(e,1),0,-.05,3.2);i.add(a)}var Da={float:{ring:[16747066,16734858,4901119,16763194,8050794],disc:16774360},wood:{ring:[12088890,13141578,11037242,14194250,12088890],disc:15255696},cloud:{ring:[16777215,15791359,16777215,16773368,15794168],disc:15267071},rock:{ring:[9079456,8026768,10132144,9079456,8026768],disc:13158616},ice:{ring:[9099519,11069695,8046832,12120319,9099519],disc:15399679},stone:{ring:[10132122,11184810,9079434,11579568,10132122],disc:14737632}};function _x(i=3){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,256);n.addColorStop(0,"#5ac8ff"),n.addColorStop(.5,"#2a9ae0"),n.addColorStop(1,"#4ab8f0"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,.4)",e.lineWidth=3;for(let r=0;r<18;r++)e.beginPath(),e.ellipse(r*83%256,r*57%256,26+r%3*8,6,0,0,Math.PI*2),e.stroke();let s=new mn(t);return s.colorSpace=oe,s.wrapS=s.wrapT=wn,s.repeat.set(i,i),s}function fi(i,t){return(n,s,r,a,o={})=>{var d;let l=new Rt,c=Rn(n,s);o.flip&&(c.scale.x=-1),o.center&&(c.position.y=-s/2),l.add(c);let h=((d=o.y)!=null?d:-.2)+(o.center?s/2:0);return l.position.set(r,h,a),l.userData.base={x:r,y:h},l.userData.ph=Math.random()*6.28,o.anim&&(l.userData.anim=o.anim,t.push(l)),o.sway&&(l.userData.sway={amp:o.sway,ph:Math.random()*6.28,sp:.7+Math.random()*.6}),i.add(l),l}}function pi(i,t,e){for(let n of i){let s=n.userData.anim,r=n.userData.base,a=n.userData.ph;s.drive?(n.position.x+=e*s.drive,s.drive>0&&n.position.x>17&&(n.position.x=-17),s.drive<0&&n.position.x<-17&&(n.position.x=17)):s.r&&(n.position.x=r.x+Math.sin(t*(s.wsp||.3)+a)*s.r),s.bob&&(n.position.y=r.y+(s.smooth?Math.sin(t*(s.sp||2)+a):Math.abs(Math.sin(t*(s.sp||2)+a)))*s.bob),s.tilt&&(n.rotation.z=Math.sin(t*(s.tsp||s.sp||2)+a)*s.tilt),s.spin&&(n.rotation.z+=e*s.spin)}}function xx(i,t=40){let e=[],n=new be(.12,10,8),s=new Gt({color:14677759,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1});for(let r=0;r<t;r++){let a=new X(n,s);a.position.set(-13+Math.random()*26,Math.random()*9,-9+Math.random()*14),a.userData.v=.4+Math.random()*.6,a.userData.ph=Math.random()*6,a.scale.setScalar(.5+Math.random()*1.2),i.add(a),e.push(a)}return(r,a)=>{for(let o of e)o.position.y+=r*o.userData.v,o.position.x+=Math.sin(a*1.5+o.userData.ph)*r*.3,o.position.y>9.5&&(o.position.y=-.1,o.position.x=-13+Math.random()*26)}}function Ax(i,t=28){let e=[],n=new ge(.34,.2),s=new Gt({color:7002186,side:ve,toneMapped:!1});for(let r=0;r<t;r++){let a=new X(n,s);a.position.set(-14+Math.random()*28,Math.random()*9,-8+Math.random()*14),a.userData.v=.25+Math.random()*.3,a.userData.ph=Math.random()*6,i.add(a),e.push(a)}return(r,a)=>{for(let o of e)o.position.y-=r*o.userData.v,o.position.x+=Math.sin(a*.9+o.userData.ph)*r*.5,o.rotation.z+=r*1.2,o.rotation.y+=r*.8,o.position.y<-.1&&(o.position.y=9.5,o.position.x=-14+Math.random()*28)}}function yx(i,t=110){let e=[],n=new be(.06,6,5),s=new Gt({color:16777215,toneMapped:!1});for(let r=0;r<t;r++){let a=new X(n,s);a.position.set(-15+Math.random()*30,Math.random()*11,-10+Math.random()*18),a.userData.v=.5+Math.random()*.7,a.userData.ph=Math.random()*6,a.scale.setScalar(.7+Math.random()*1.1),i.add(a),e.push(a)}return(r,a)=>{for(let o of e)o.position.y-=r*o.userData.v,o.position.x+=Math.sin(a+o.userData.ph)*r*.25,o.position.y<-.1&&(o.position.y=11,o.position.x=-15+Math.random()*30)}}function gi(i,t,e){let n=new X(new ge(52,26),new Gt({map:Fe(t),toneMapped:!1,depthWrite:!1}));n.position.set(0,e,-14.5),n.renderOrder=-1,i.add(n)}function mi(i,t,e,n,s,r){let a=Fe(t,e,n);a.userData.strip=Fe(t,e-1,.5),Qs(i,s,r,-.2,a)}var vx={meadow(i){Ye(i,{top:"#3a9cf2",horizon:"#c4ecff"});let t=Ni(i,8,{y:9.5,z:-18});for(let[x,g,p,v,A]of[[-14,-17,9,7129184,-5.5],[2,-20,12,8048746,-8],[16,-16,9,6471770,-5.2],[-4,-24,14,10147994,-9.5]]){let _=Ac(p,Ze(v,1),x,A,g);_.scale.y=.55,_.castShadow=!1,i.add(_)}for(let[x,g,p,v]of[[-18,-30,9,10139880],[-2,-32,11,11060462],[14,-30,8,10139880]])i.add(Bd(p*.85,p,Ze(v,1),x,p/2-1.5,g,5));Ia(i,[{t:"bush",x:-8,z:3.8,s:.9},{t:"bush",x:8.6,z:3.5,s:.8},{t:"bush",x:-10.5,z:.5,s:.9},{t:"bush",x:11,z:1,s:.85},{t:"rock",x:-7.4,z:4.8,s:.55},{t:"rock",x:7.2,z:5.2,s:.5},...Array.from({length:30},(x,g)=>({t:"flower",x:-12.5+g*.86+Math.sin(g)*.4,z:6+g%4*.6+Math.cos(g*2)*.5})),...Array.from({length:8},(x,g)=>({t:"flower",x:-12+g*.9,z:1.5+Math.sin(g*1.7)*.8})),...Array.from({length:8},(x,g)=>({t:"flower",x:8.2+g*.7,z:2+Math.cos(g*1.3)*.8}))],-.2);let e=Fe("ground_grass",12,7);e.userData.strip=Fe("ground_grass",11,.55),Qs(i,8836202,7784540,-.2,e);let n=new Yt({map:Fe("ground_path",1,4.2),roughness:1,transparent:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new X(new ge(3.7,15.5),n);s.rotation.x=-Math.PI/2,s.rotation.z=.1,s.position.set(7.6,-.18,-.4),s.receiveShadow=!0,i.add(s);let r=(x,g,p,v,A=.012,_=!1)=>{let P=new Rt,b=Rn(x,g);return _&&(b.scale.x=-1),P.add(b),P.position.set(p,-.2,v),A&&(P.userData.sway={amp:A,ph:Math.random()*6.28,sp:.7+Math.random()*.6}),i.add(P),P};for(let[x,g,p,v,A]of[["tree_oak",7,-11.6,-3.4,!1],["tree_apple",5.6,11.8,-3,!1],["tree_apple",5,-4.4,-11.5,!0],["tree_oak",5.4,4.2,-12,!0],["tree_oak",6.2,-14.6,-9,!0],["tree_apple",5.6,15.2,-9.5,!0],["tree_oak",5,.6,-14,!1]])r(x,g,p,v,.01,A);for(let x=0;x<46;x++){let g=x%3,p=g===0?-13+Math.random()*26:g===1?(Math.random()<.5?-1:1)*(7.8+Math.random()*5.5):-12+Math.random()*24,v=g===0?4.4+Math.random()*4:g===1?-3+Math.random()*6:-5.9+Math.random()*1;r(`tuft_${1+x%3}`,.9+Math.random()*.7,p,v,.05,Math.random()<.5)}for(let[x,g,p]of[[-12,4.8,1.4],[-9.2,6.8,1.2],[-5.8,7.4,1.3],[-1.5,7.6,1.2],[3.2,7.4,1.4],[7.4,6.9,1.3],[11.5,5.2,1.4],[12.5,.8,1.2],[-12.8,.4,1.2]])r("flowers_p",p,x,g,.04,x>0);r("hay_p",1.7,12.4,-3.8,0,!1);let a=new Rt,o=Ze(10117682,.9),l=new X(new ce(1,1.7,5,28),new Yt({map:gx([4,3]),roughness:.95}));l.position.y=2.5,l.castShadow=!0,a.add(l);let c=new X(new nn(1.35,1.7,28),new Yt({map:mx([5,2]),roughness:.7}));c.position.y=5.8,c.castShadow=!0,a.add(c),a.add(Ks(1.05,1.05,.14,Ze(11545124,.7),0,4.98,0,28));let h=Ks(.36,.36,.12,o,0,1.2,1.6,20);h.rotation.x=Math.PI/2,a.add(h,Pn(.72,1.2,.12,o,0,.6,1.6)),a.add(Pn(.62,.7,.1,Ze(9095408,.25),0,3.1,1.28),Pn(.78,.1,.12,o,0,2.72,1.3),Pn(.78,.1,.12,o,0,3.48,1.3));for(let x=0;x<4;x++)a.add(Pn(1.5-x*.1,.16,.7,Ze(12036492,.95),0,.08+x*.16,2-x*.06));let d=new Rt;for(let x=0;x<4;x++){let g=new Rt;g.add(Pn(.18,4.8,.08,o,0,2.5,0)),g.add(Pn(1,3.6,.04,Ze(15918796,.9,{transparent:!0,opacity:.55}),.6,2.7,0));for(let p=0;p<8;p++)g.add(Pn(1.05,.07,.07,o,.55,.9+p*.52,0));for(let p=0;p<4;p++)g.add(Pn(.07,3.6,.07,o,.3+p*.28,2.7,0));g.rotation.z=x*Math.PI/2+.3,d.add(g)}d.position.set(0,4.5,1.55),a.add(d,Ac(.3,o,0,4.5,1.6)),a.position.set(-7,0,-9.5),a.scale.setScalar(.9),i.add(a),r("house_p",4.6,8.6,-9,0,!1);for(let x=0;x<6;x++)r("fence_p",1.5,-11.2+x*4.4,-4.9,0,!1);let u=new X(new ce(6.5,6.7,.3,48),Ze(12098148,1));u.scale.z=.62,u.position.y=-.12,i.add(u);let f=new X(new ce(6.1,6.1,.3,48),new Yt({map:_x(),roughness:.2,metalness:.1}));f.scale.z=.58,f.position.y=-.08,i.add(f);for(let x=0;x<26;x++){let g=x/26*Math.PI*2,p=ic(.3+x*7%5*.05);p.position.set(Math.cos(g)*6.45,.02,Math.sin(g)*3.95),p.rotation.y=g,i.add(p)}let m=[];for(let[x,g,p]of[[-5.1,-1.7,.5],[4.9,-1.9,.6],[-4.6,1.2,.45],[5.2,1,.5],[-1.6,-2.6,.5],[2.4,-2.5,.42],[-3.2,2.5,.4],[3.4,2.6,.45]])if(i.add(Ks(p,p,.04,Ze(3844170),x,.1,g,20)),p>=.45){let v=Rn("lotus_p",.9),A=new Rt;A.add(v),A.position.set(x,.1,g),i.add(A),m.push(A)}for(let x=0;x<14;x++){let g=x/14*Math.PI*1.1+Math.PI*1.05;i.add(Ks(.03,.05,1.5,Ze(4889146),Math.cos(g)*6.5,.5,Math.sin(g)*3.9,6))}for(let[x,g,p]of[[-9,5.6,.5],[-7.7,5.1,.45],[-6.4,4.8,.5],[-5.2,4.9,.42],[-9.8,6.4,.4]]){let v=Ks(p,p*1.05,.1,Ze(13156528,.95),x,-.15,g,14);v.scale.z=.8,i.add(v)}return{pad:"float",water:f.material,update:(x,g)=>{t.userData.drift(x),d.rotation.z-=x*.7,m.forEach((p,v)=>{p.rotation.z=Math.sin(g*1.1+v)*.05,p.position.y=.1+Math.sin(g*1.3+v*1.7)*.02})}}},farm(i){Ye(i,{top:"#4aa8f0",horizon:"#bfe6ff"});let t=Fe("ground_grass",12,7);t.userData.strip=Fe("ground_grass",11,.55),Qs(i,8836202,7784540,-.2,t);let e=new X(new ge(52,26),new Gt({map:Fe("farm_pano"),toneMapped:!1,depthWrite:!1}));e.position.set(0,-8.6,-14.5),e.renderOrder=-1,i.add(e);for(let a of[-12.5,13]){let o=new X(new ge(9,5),new Yt({map:Fe("ground_farm",2.2,1.2),roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.rotation.x=-Math.PI/2,o.position.set(a,-.17,-10.5),o.receiveShadow=!0,i.add(o)}let n=(a,o,l,c,h=0,d=!1)=>{let u=new Rt,f=Rn(a,o);return d&&(f.scale.x=-1),u.add(f),u.position.set(l,-.2,c),h&&(u.userData.sway={amp:h,ph:Math.random()*6.28,sp:.7+Math.random()*.6}),i.add(u),u};n("barn_f",5.2,-3.2,-11.5),n("silo_f",6.4,-7.4,-12);let s=n("pump_f",6.2,4.6,-11);n("tree_oak",6.4,-13.8,-9.5,.01,!0),n("tree_apple",5.6,14.2,-9.8,.01);for(let a of[-11.6,-6.8,-2,2.8,7.6,12.4])n("gate_f",1.9,a,-6.2);n("haystack_f",2,-9.6,-5,0),n("hayroll_f",1.5,-11.8,-3.4,0),n("tractor_f",2.8,12.6,-2.2,0,!0),n("trough_f",1.5,-13,-1),n("scarecrow_f",3.6,9.2,-4.6,.03),n("crate_apple",1.1,-10.8,5.4),n("crate_carrot",1.1,10.6,5.6,0,!0),n("crate_corn",1.1,12.2,4.4);for(let[a,o,l,c]of[["sunflower_1",2.6,-12.4,3.4],["sunflower_2",2.4,-8.4,6.2],["sunflower_1",2.2,8.2,6.4],["sunflower_2",2.8,13.6,1.6],["sunflower_2",2.4,-13.8,6]])n(a,o,l,c,.04);for(let a=0;a<30;a++)n(`tuft_${1+a%3}`,.8+Math.random()*.6,-13+Math.random()*26,4.6+Math.random()*3.8,.05,Math.random()<.5);n("f_coop",2.4,-6.2,-7.6),n("f_milk",1.1,-6.8,.6),n("f_barrow",1.3,7.4,4.6,0,!0);let r=[{w:n("f_cow",3.4,-8,-2.6),x:-8,r:.5,sp:.18,b:.03},{w:n("f_sheep",2,-6.2,-4.3,0,!0),x:-6.2,r:.4,sp:.22,b:.03},{w:n("f_pig",2.1,7.4,-1.6,0,!0),x:7.4,r:.4,sp:.25,b:.03},{w:n("f_horse",3.5,9.4,-3.4,0,!0),x:9.4,r:.3,sp:.12,b:.02},{w:n("f_hen",1.5,6.4,3),x:6.4,r:.7,sp:.4,b:.05},{w:n("f_rooster",1.9,-7.4,2.4),x:-7.4,r:.4,sp:.3,b:.04},{w:n("f_goat",2.2,-4.8,-4.8),x:-4.8,r:.4,sp:.2,b:.03},{w:n("f_donkey",2.4,5.4,-5,0,!0),x:5.4,r:.4,sp:.16,b:.03}];return{pad:"wood",padPics:["f_pad_stump","f_pad_hay","f_pad_nest","f_pad_plank"],update:(a,o)=>{s.rotation.z=Math.sin(o*.6)*.01,r.forEach((l,c)=>{l.w.position.x=l.x+Math.sin(o*l.sp+c)*l.r,l.w.position.y=-.2+Math.abs(Math.sin(o*2+c*1.7))*l.b,l.w.rotation.z=Math.sin(o*1.5+c)*.02})}}},beach(i){Ye(i,{top:"#2a9cf2",horizon:"#c8f0ff"});let t=Ni(i,7,{y:9.5,z:-18}),e=Fe("ground_water",5,.38);e.offset.y=.6;let n=new X(new ge(80,26),new Gt({map:e,toneMapped:!1}));n.rotation.x=-Math.PI/2,n.position.set(0,-.14,-18),i.add(n);let s=Fe("ground_sand",11,6);s.userData.strip=Fe("ground_sand",10,.5),Qs(i,15909194,15250496,-.2,s);let r=Fe("ground_water",5,1),a=new X(new ge(80,7),new Gt({map:r,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.rotation.x=-Math.PI/2,a.position.set(0,-.11,-8.6),i.add(a);let o=[],l=(A,_,P,b,S={})=>{var y;let E=new Rt,w=Rn(A,_);return S.flip&&(w.scale.x=-1),E.add(w),E.position.set(P,(y=S.y)!=null?y:-.2,b),S.sway&&(E.userData.sway={amp:S.sway,ph:Math.random()*6.28,sp:.7+Math.random()*.6}),i.add(E),E},c=l("b_lighthouse",7.5,13.4,-12.5,{y:-.4}),h=new X(new Yn(1.1,24),new Gt({color:16773792,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));h.position.set(13.4,6.6,-12.3),i.add(h),l("b_palm1",6.4,-12.6,-7.5,{sway:.018}),l("b_palm2",5.4,11.4,-7.2,{sway:.02,flip:!0}),l("b_palm2",4.6,-7.8,-11.5,{sway:.02}),l("b_palm1",5,8.2,-12,{sway:.016,flip:!0});let d=l("b_boat",2.2,2.4,-12.8,{y:-.4});l("b_dock",1.8,-3.6,-8.4,{y:-.15}),l("b_umbrella",3.6,-11.2,-2.6,{sway:.01}),l("b_chair",1.9,-12.6,-.4),l("b_castle",2.4,11.6,-2.8),l("b_rocks",1.7,12.8,-5),l("b_surf",2.8,9.6,-4.6,{sway:.01}),l("b_weed",1.3,-8.8,-6.2,{sway:.05}),l("b_bucket",1,10.6,4.8),l("b_shell",.8,-11,5.6),l("b_starfish",.8,11.8,6.2),l("b_spiral",.7,-9.4,7),l("b_shell",.7,8.6,7.4,{flip:!0}),l("b_palm2",4.4,-14,4.2,{sway:.02});let u=l("b_crab_walk",.95,-9,3.6),f=l("b_turtle",1,6.2,-6.9,{y:-.12}),m=l("b_dolphin",2.2,-6,-10,{y:-.4}),x=[l("b_clown",.8,5,-9.4,{y:-.1}),l("b_tang",.8,-9.4,-9.6,{y:-.1}),l("b_yellowfish",.7,0,-10.8,{y:-.1})],g=l("b_jelly",1.1,8.8,-9.8,{y:-.1}),p=[0,1,2].map(A=>{let _=new Rt;return _.add(Rn(A%2?"b_gull_fly2":"b_gull_fly",1+A*.12)),_.position.set(-14+A*11,6.2+A*.9,-9-A),i.add(_),_}),v=l("b_gull",1.1,-3.6,-8.1,{y:-.12});return{pad:"float",update:(A,_)=>{t.userData.drift(A),e.offset.x=_*.012%1,e.offset.y=.6+Math.sin(_*.5)*.02,r.offset.x=-_*.01%1,a.position.z=-8.6+Math.sin(_*.7)*.35,d.position.y=-.4+Math.sin(_*1.1)*.12,d.rotation.z=Math.sin(_*.9)*.05,d.position.x=2.4+Math.sin(_*.12)*1.4,c.rotation.z=Math.sin(_*.4)*.002,h.material.opacity=Math.max(0,Math.sin(_*1.6))*.85,u.position.x=-9+Math.sin(_*.5)*2,u.rotation.z=Math.sin(_*8)*.06;let P=_%7/1.6;m.visible=P<1,P<1&&(m.position.x=-8+P*5,m.position.y=-.4+Math.sin(P*Math.PI)*2.4,m.rotation.z=(.5-P)*1.2),x.forEach((b,S)=>{b.position.y=-.1+Math.sin(_*1.3+S*2)*.12,b.position.x+=Math.sin(_*.6+S)*A*.6}),g.position.y=-.1+Math.abs(Math.sin(_*1.2))*.35,f.position.x=6.2+Math.sin(_*.25)*1.2,f.position.y=-.12+Math.sin(_*1.4)*.05,p.forEach((b,S)=>{b.position.x+=A*(.9+S*.25),b.position.x>16&&(b.position.x=-16),b.children[0].scale.y=1+Math.sin(_*6+S)*.14,b.position.y=6.2+S*.9+Math.sin(_*.8+S)*.25}),v.position.y=-.12+Math.max(0,Math.sin(_*2.2))*.04}}},space(i){Ye(i,{top:"#0b0a3a",horizon:"#2b1a6a"});let t=Fe("ground_moon",11,6);t.userData.strip=Fe("ground_moon",10,.5),Qs(i,10129608,9076920,-.2,t);let e=new X(new ge(52,26),new Gt({map:Fe("space_pano"),toneMapped:!1,depthWrite:!1}));e.position.set(0,-4.4,-15),e.renderOrder=-1,i.add(e);let n=new Rt;for(let A=0;A<70;A++){let _=Ac(.05+A%3*.03,new Gt({color:16777184,toneMapped:!1}),(Math.random()-.5)*44,4+Math.random()*12,-14.6);_.userData.ph=Math.random()*6,n.add(_)}i.add(n);let s=(A,_,P,b,S=-.2,E=!1,w=0)=>{let y=new Rt,D=Rn(A,_);return E&&(D.scale.x=-1),y.add(D),y.position.set(P,S,b),w&&(y.userData.sway={amp:w,ph:Math.random()*6.28,sp:.7+Math.random()*.6}),i.add(y),y};s("s_launch",5.2,-8.2,-9.5),s("s_rock",2.4,9.8,-8),s("s_crystal",2.2,-12.2,-4.4),s("s_crystal",1.6,12.4,-3.6,-.2,!0),s("s_rock",1.5,-5.4,-9.2,-.2,!0);let r=s("s_dish",3,7.4,-9.8),a=s("s_rover",2,11.4,-1,-.2,!0),o=s("s_ufo",2.4,-8,3.2,3.6),l=s("s_station",3,3.2,-11,5.2),c=s("s_robot",2,8.6,.8,.6),h=s("s_alien",2.6,-9.6,-2),d=s("s_cat",2,-12,1.4,1),u=s("s_dog",2,12.6,3,1.2,!0),f=s("s_ringplanet",2.6,-11.8,8.2,3),m=s("s_blueplanet",1.9,6.4,-12.5,6.8),x=s("s_pinkplanet",1.6,9.6,6.6,5.6),g=s("s_rocket",2.4,-1,-12.4,2.2),p=s("s_shoot",1.4,0,-14,8.6),v=s("s_comet",1.8,0,-14,9.4);return s("s_moon",1.3,-3.6,-13,8.4,!1,.03),s("s_star",.9,4.2,-13.6,9.6,!1,.06),s("s_helmet",1.2,10.6,-4.8),{pad:"rock",padPics:["s_pad_moon","s_pad_energy","s_pad_metal","s_pad_crystal"],update:(A,_)=>{for(let S of n.children)S.scale.setScalar(.7+Math.sin(_*2+S.userData.ph)*.45);o.position.y=3.6+Math.sin(_*1.1)*.35,o.position.x=-8+Math.sin(_*.3)*2.4,o.rotation.z=Math.sin(_*.9)*.08,l.rotation.z=Math.sin(_*.35)*.12,l.position.y=5.2+Math.sin(_*.5)*.2,r.rotation.z=Math.sin(_*.8)*.06,a.position.x=11.4+Math.sin(_*.4)*.6,a.position.y=-.2+Math.abs(Math.sin(_*6))*.03,c.position.y=.6+Math.sin(_*1.6)*.25,h.rotation.z=Math.sin(_*2.4)*.05,d.position.y=1+Math.sin(_*1.2+1)*.3,d.rotation.z=Math.sin(_*.9)*.1,u.position.y=1.2+Math.sin(_*1.3+2)*.3,u.rotation.z=Math.sin(_*1+1)*-.1,f.rotation.z=Math.sin(_*.3)*.08,f.position.y=3+Math.sin(_*.5)*.25,m.position.y=6.8+Math.sin(_*.4+1)*.2,x.position.y=5.6+Math.sin(_*.6+2)*.22,g.position.y=2.2+Math.sin(_*1.5)*.18,g.rotation.z=Math.sin(_*.7)*.04;let P=_%9/3.2;p.visible=P<1,P<1&&(p.position.x=12-P*26,p.position.y=9.4-P*3.5);let b=(_+4.5)%14/4.5;v.visible=b<1,b<1&&(v.position.x=-13+b*26,v.position.y=10-b*3)}}},rainbow(i){Ye(i,{top:"#8ad0ff",horizon:"#ffe0f0"});let t=Ni(i,5,{y:9,z:-18});mi(i,"ground_rainbow",11,6,10149978,9097290),gi(i,"rainbow_pano",-6.4);let e=[],n=fi(i,e);return n("r_lolli",5,-11.4,-6.4,{sway:.012}),n("r_lolli",4.4,10.8,-7.4,{sway:.012,flip:!0}),n("r_cotton",4.4,-7.6,-9.6,{sway:.012}),n("r_carousel",3.6,9.2,-9.4,{sway:.006}),n("r_gingerhouse",2.8,4.4,-11.4),n("r_slide",2.4,-9.6,-3.2),n("r_swing",2.8,8.8,-4.2),n("r_seesaw",1.3,-6.2,-5.6,{anim:{tilt:.05,sp:1.2}}),n("r_balloons",3.2,-5.2,-7.2,{y:.4,anim:{bob:.5,sp:.9,tilt:.06,smooth:!0}}),n("r_balloons",3,6.6,-6.6,{y:.6,anim:{bob:.45,sp:.8,tilt:.06,smooth:!0}}),n("r_balloons",2.6,-11.8,-1.4,{y:.8,anim:{bob:.4,sp:1,tilt:.07,smooth:!0}}),n("r_icecream",1.6,11.6,.8),n("r_candy",.8,-8.4,6),n("r_cupcake",1.4,-12.2,1.4),n("r_unicorn",2.6,-8.4,-1.2,{anim:{bob:.12,sp:3,r:.8,wsp:.25,tilt:.03}}),n("r_butterfly",1,-3,6,{y:2.4,anim:{bob:.9,sp:1.3,r:5,wsp:.35,smooth:!0,tilt:.1}}),n("r_butterfly",.9,4,5,{y:3,anim:{bob:.8,sp:1.5,r:4,wsp:.4,smooth:!0,tilt:.12}}),n("r_ladybug",.7,7.8,5.6,{anim:{r:1.6,wsp:.4,bob:.03,sp:6}}),n("r_kite",2.4,-10.6,3,{y:3.6,anim:{bob:.7,sp:.9,r:.8,wsp:.5,smooth:!0,tilt:.12}}),n("r_pinwheel",1.6,10.2,-1.6,{center:!0,y:.1,anim:{spin:3}}),n("r_sun",2.4,10.4,7.6,{center:!0,y:3.2,anim:{spin:.4}}),n("r_cloud",1.8,-14,-8,{y:6.8,anim:{drive:.5}}),n("r_cloud",1.4,3,-9,{y:7.8,anim:{drive:.35}}),{pad:"cloud",padPics:["r_pad_candy","r_pad_cloud","r_pad_rainbow","r_pad_cookie"],update:(s,r)=>{t.userData.drift(s),pi(e,r,s)}}},city(i){Ye(i,{top:"#4aa8f0",horizon:"#d8f0ff"}),mi(i,"ground_city",11,6,10132136,9079448),gi(i,"city_pano",-7.6);let t=[],e=fi(i,t);return e("c_skyscraper",6.4,-11.2,-9.6),e("c_skyscraper",6,10.6,-10.4,{flip:!0}),e("c_school",4.2,-6.2,-11.4),e("c_hospital",4.6,5.8,-11.8),e("c_firestation",3.6,-1.4,-12.6),e("c_house",3.2,12.6,-4.8),e("c_fountain",2,.6,-8.2),e("c_lamp",3.4,-7.8,-5.8),e("c_lamp",3.4,7.6,-5.8),e("c_light",3.2,11.2,-2.2),e("c_busstop",2.6,-10.2,-3.4),e("c_bench",1.2,-12.4,-.2),e("c_mailbox",1.5,9.8,1.6),e("c_tree",2.8,-12.8,-6.4,{sway:.01}),e("c_tree",2.6,13.2,-7.2,{sway:.01}),e("c_tree",2.2,8.6,-6.2,{sway:.01}),e("c_citybus",1.7,-16,-7.6,{anim:{drive:1.5,bob:.03,sp:7}}),e("c_taxi",1.3,6,-8.6,{flip:!0,anim:{drive:-1.9,bob:.03,sp:8}}),e("c_police",1.3,-4,-9,{anim:{drive:2.2,bob:.03,sp:9}}),e("c_firetruck",1.7,12,-7.4,{flip:!0,anim:{drive:-1.2,bob:.03,sp:6}}),e("c_schoolbus",1.8,2,-7,{anim:{drive:1,bob:.03,sp:5}}),e("c_ambulance",1.5,-10,-8.4,{flip:!0,anim:{drive:-1.6,bob:.03,sp:7}}),e("c_tram",1.6,14,-9.6,{flip:!0,anim:{drive:-.8}}),e("c_bike",1.4,-15,6.4,{anim:{drive:1.3,bob:.05,sp:6}}),e("c_heli",1.8,-14,-8,{y:7.2,anim:{drive:1.6,bob:.25,sp:2,smooth:!0}}),e("c_plane",1.5,10,-9,{y:9.2,flip:!0,anim:{drive:-2.4}}),{pad:"stone",padPics:["c_pad_manhole","c_pad_tire","c_pad_round","c_pad_cone"],update:(n,s)=>{pi(t,s,n)}}},snow(i){Ye(i,{top:"#4a9cf0",horizon:"#f0e0ff"}),mi(i,"ground_snow",11,6,15660287,14740735),gi(i,"snow_pano",-8.4);let t=[],e=fi(i,t);e("w_pine1",5.6,-11.6,-6.6,{sway:.008}),e("w_pine1",5.2,11,-7.4,{sway:.008,flip:!0}),e("w_pine2",4.2,-7.8,-9.8,{sway:.008}),e("w_pine2",4,8.4,-10.2,{sway:.008,flip:!0}),e("w_cabin",4.4,5.2,-11.8),e("w_igloo",2.8,-4.4,-11.6),e("w_snowman",3.2,-8.8,-2.6,{anim:{tilt:.03,sp:1.2}}),e("w_sled",1.3,10.2,-1.4),e("w_snowballs",1,-6.2,-5.2),e("w_iceblock",1.5,12.6,.8),e("w_crystal",2.1,-12.6,-1.2),e("w_pond",1.4,8.4,-5.8,{y:-.17}),e("w_sign",2.2,-10.6,2.4),e("w_skis",2.2,11.6,3.2),e("w_penguin",1.9,-7.2,.6,{anim:{r:.9,wsp:.35,tilt:.1,sp:5,bob:.03}}),e("w_bear",2.5,7.8,-2.4,{anim:{bob:.04,sp:1.6,r:.4,wsp:.2}}),e("w_fox",1.7,-11,3.6,{anim:{r:.8,wsp:.4,bob:.04,sp:3}}),e("w_rabbit",1.3,9.8,4.6,{anim:{bob:.55,sp:3.4,r:1.2,wsp:.5}}),e("w_owl",1.7,-5.6,-6.4,{anim:{tilt:.05,sp:.8}}),e("w_reindeer",3.1,4.6,-6.6,{anim:{bob:.04,sp:1.2,r:.5,wsp:.15,tilt:.02}}),e("w_seal",1.5,6.4,3.8,{anim:{bob:.1,sp:1.4,tilt:.05,smooth:!0}}),e("w_chick",1.1,-9,5.2,{anim:{r:1,wsp:.6,bob:.1,sp:6}});let n=yx(i);return{pad:"ice",padPics:["w_pad_ice","w_pad_snow","w_pad_log","w_pad_crystal"],update:(s,r)=>{pi(t,r,s),n(s,r)}}},castle(i){Ye(i,{top:"#3a9cf2",horizon:"#c8ecff"});let t=Ni(i,4,{y:10,z:-18});mi(i,"ground_castle",10,5.5,12102280,11049592),gi(i,"castle_pano",-7.8);let e=[],n=fi(i,e);return n("k_tower",5.8,-11.8,-8.2),n("k_tower",5.4,11.4,-8.6,{flip:!0}),n("k_gate",4.6,-1.2,-12.4),n("k_wall",2.8,-6.2,-9.8),n("k_wall",2.8,6.4,-10.2),n("k_stall",3,10.4,-4.2),n("k_well",2.3,-9.8,-3.6),n("k_chest",1.3,11.8,1.8),n("k_catapult",2.5,-12.8,-.8),n("k_cannon",1.8,12.8,-1.8),n("k_shield",1.9,-8.2,3.6),n("k_cottage",3.2,-14,-5.8),n("k_banner",3.6,-5.2,-6.6,{sway:.05}),n("k_banner",3.6,5.6,-6.8,{sway:.05}),n("k_torch",2.4,-7.2,-7,{anim:{tilt:.03,sp:6}}),n("k_torch",2.4,8.2,-7,{anim:{tilt:.03,sp:7}}),n("k_knight",3.1,-8.8,-1,{anim:{bob:.05,sp:2,tilt:.03}}),n("k_princess",3,8.6,-1.6,{anim:{bob:.05,sp:1.6,tilt:.03}}),n("k_king",3.3,-6.6,-4.4,{anim:{tilt:.03,sp:1.2}}),n("k_queen",3,6.8,-4.8,{anim:{tilt:.03,sp:1.1}}),n("k_dragon",3,11.6,3.4,{flip:!0,anim:{bob:.08,sp:2,tilt:.04}}),n("k_horse",3,-12,2.2,{anim:{bob:.04,sp:1.8,r:.5,wsp:.2}}),n("k_jester",2.6,9.8,5,{anim:{bob:.35,sp:3.2}}),n("k_wizard",3,-9.8,4.6,{anim:{tilt:.04,sp:1.4}}),{pad:"stone",padPics:["k_pad_stone","k_pad_velvet","k_pad_shield","k_pad_gold"],update:(s,r)=>{t.userData.drift(s),pi(e,r,s)}}},underwater(i){Ye(i,{top:"#1a8ae0",horizon:"#7fd8ff"}),mi(i,"ground_sand",11,6,15909194,15250496),gi(i,"under_pano",-7.4);let t=[],e=fi(i,t);e("u_arch",4.8,-11.2,-8.2),e("u_wreck",3.8,10.4,-9.4),e("u_rocks",3.2,-6,-10.6),e("u_pinktube",2.7,-12.6,-3.4,{sway:.01}),e("u_orangecoral",2.9,11.8,-4,{sway:.01}),e("u_brain",1.9,-9.2,-5.4),e("u_weed",3.6,-7.6,-6.4,{sway:.06}),e("u_weed",3.2,7.2,-7.2,{sway:.06,flip:!0}),e("u_weed",2.6,12.6,.6,{sway:.07}),e("u_anchor",2.3,-10.6,-1.4),e("u_chest",1.7,9.6,-1.6),e("u_clam",1.6,-11.8,2.8),e("u_anemone",1.5,10.8,3.2,{sway:.05}),e("u_barrel",1.6,-5.2,-5.6),e("u_wreck",2.2,2,-12.4,{flip:!0}),e("u_clown",1.1,-15,0,{y:1.8,anim:{drive:1,bob:.25,sp:1.6,smooth:!0,tilt:.04}}),e("u_clown",.9,16,0,{y:2.8,flip:!0,anim:{drive:-.7,bob:.3,sp:1.9,smooth:!0}}),e("u_tang",1.2,8,0,{y:3.1,flip:!0,anim:{drive:-1.3,bob:.3,sp:1.4,smooth:!0}}),e("u_yellowfish",1.1,-6,0,{y:4.2,anim:{drive:.8,bob:.3,sp:1.2,smooth:!0}}),e("u_dolphin",2.2,-14,-3,{y:5.4,anim:{drive:1.9,bob:.7,sp:1.2,smooth:!0,tilt:.12}}),e("u_whale",3.4,14,-6,{y:7.2,flip:!0,anim:{drive:-.5,bob:.3,sp:.6,smooth:!0}}),e("u_turtle",1.7,-4,1,{y:2.2,anim:{drive:.6,bob:.3,sp:1,smooth:!0,tilt:.05}}),e("u_puffer",1.2,4,0,{y:3.6,anim:{drive:-.9,bob:.25,sp:1.5,smooth:!0}}),e("u_jelly",1.4,6.4,-2.4,{y:1.8,anim:{bob:.7,sp:1.1,r:.6,wsp:.3}}),e("u_jelly",1.1,-3.6,-4.6,{y:2.6,anim:{bob:.6,sp:1.3}}),e("u_octopus",1.7,-8.4,-1,{anim:{tilt:.05,sp:1.2,bob:.06}}),e("u_seahorse",1.5,7.8,.6,{y:1,anim:{bob:.5,sp:1.3,smooth:!0,tilt:.08}}),e("u_crab",1,6.2,4.6,{anim:{r:1.6,wsp:.5,bob:.03,sp:7}}),e("u_star",.9,-8.4,6);let n=xx(i);return{pad:"float",padPics:["u_pad_sand","u_pad_shell","u_pad_coral","u_pad_pearl"],update:(s,r)=>{pi(t,r,s),n(s,r)}}},jungle(i){Ye(i,{top:"#5ac8a0",horizon:"#e6ffd0"}),mi(i,"ground_jungle",11,6,6998088,5945400),gi(i,"jungle_pano",-7.4);let t=[],e=fi(i,t);e("j_tree",6.2,-11.6,-7.2,{sway:.008}),e("j_tree",5.8,11.4,-8.2,{sway:.008,flip:!0}),e("j_palm",5.4,-7.4,-10.4,{sway:.02}),e("j_palm",5,7.6,-11.2,{sway:.02,flip:!0}),e("j_hut",3.4,4.6,-11.6),e("j_banana",4.2,-3.6,-11.8,{sway:.02}),e("j_mango",4,13,-3.8,{sway:.012}),e("j_bridge",2.2,.6,-8.6),e("j_rocks",2.2,-10.2,-3.2),e("j_totem",3.4,10.2,-3),e("j_leaf",2,-13,-.6,{sway:.05}),e("j_leaf",1.8,12.8,1.8,{sway:.05,flip:!0}),e("j_leaf",1.5,-9.6,4.4,{sway:.06}),e("j_leaf",1.4,9.4,5.6,{sway:.06,flip:!0}),e("j_flower",1.2,-12,3,{sway:.04}),e("j_flower",1,11.2,4.2,{sway:.04}),e("j_mushroom",1.3,-6.4,5.6),e("j_mushroom",1.1,7.2,6.2,{flip:!0}),e("j_vine",2.4,-6.2,-6.2,{y:3.4,anim:{tilt:.05,sp:.9}}),e("j_vine",2.4,6.8,-6.8,{y:3.4,anim:{tilt:.05,sp:.8}}),e("j_monkey",2.3,-8.8,-1.2,{anim:{bob:.08,sp:2,tilt:.04}}),e("j_lion",2.4,8.8,-2.2,{flip:!0,anim:{bob:.04,sp:1.4,r:.4,wsp:.2}}),e("j_elephant",3.2,11.8,-.2,{flip:!0,anim:{bob:.03,sp:1,tilt:.02}}),e("j_giraffe",4.2,-12.8,-4.6,{anim:{tilt:.02,sp:.8}}),e("j_zebra",2.1,7.2,-4.6,{anim:{bob:.04,sp:1.6,r:.5,wsp:.2}}),e("j_parrot",1.5,-5.8,-3.8,{y:2.2,anim:{bob:.15,sp:2,tilt:.1}}),e("j_frog",1.1,-7,3.8,{anim:{bob:.5,sp:2.4,r:.8,wsp:.5}}),e("j_tiger",2.2,8.6,3.2,{flip:!0,anim:{bob:.04,sp:1.6,tilt:.03}}),e("j_toucan",1.7,5.6,-5.2,{y:1.4,anim:{tilt:.06,sp:1.2}}),e("j_gorilla",2.6,-9.6,2.4,{anim:{bob:.05,sp:1.2,tilt:.03}}),e("j_chameleon",1.2,10,5.6,{flip:!0,anim:{r:.8,wsp:.4,bob:.03,sp:2}}),e("j_snake",1.5,-11.2,4.8,{anim:{tilt:.06,sp:1.6}});let n=Ax(i);return{pad:"wood",padPics:["j_pad_stump","j_pad_lily","j_pad_stone","j_pad_bamboo"],update:(s,r)=>{pi(t,r,s),n(s,r)}}},desert(i){Ye(i,{top:"#3a9cf2",horizon:"#c8ecff"}),mi(i,"ground_desert",11,6,15909194,15250496),gi(i,"desert_pano",-6.9);let t=[],e=fi(i,t);return e("d_pyramid",5.2,-4.8,-11.6),e("d_pyramid2",4,4.4,-12.4),e("d_palm",5.6,-12.4,-6.4,{sway:.02}),e("d_palm",5.2,11.6,-7.4,{sway:.02,flip:!0}),e("d_dune",2.4,8.2,-10.6),e("d_dune",2,-9.6,-10.2,{flip:!0}),e("d_oasis",2.4,6.8,-6.2,{y:-.17}),e("d_boat",2,6.6,-5.8,{y:-.1,anim:{bob:.08,sp:1.1,tilt:.05,smooth:!0}}),e("d_tent",3,-8.6,-7.6),e("d_well",2.3,-6,-5.8),e("d_lantern",3.2,-2.2,-8,{anim:{tilt:.02,sp:1.4}}),e("d_cactus",2.4,12.2,-2.4),e("d_cactus",2,-12.4,.8),e("d_jar",1.6,-10.6,-1.8),e("d_cart",2.2,10.6,-3.4),e("d_flower",1.4,9.8,2.6,{sway:.04}),e("d_flower",1.2,-9.2,4.6,{sway:.04}),e("d_camel",3.1,14,-7.6,{anim:{drive:-.5,bob:.06,sp:2,tilt:.02}}),e("d_babycamel",1.9,16.4,-7,{anim:{drive:-.5,bob:.05,sp:2.4}}),e("d_fox",1.6,-7.6,-.6,{anim:{r:.8,wsp:.4,bob:.04,sp:3}}),e("d_scorpion",1,6.8,5.2,{anim:{r:1.2,wsp:.5,bob:.02,sp:6}}),e("d_lizard",.9,-6.2,5.6,{anim:{r:1,wsp:.6,bob:.02,sp:5}}),e("d_snake",1.3,11.4,4.2,{anim:{tilt:.06,sp:1.6}}),e("d_hawk",1.4,-14,-6,{y:7.4,anim:{drive:1.6,bob:.4,sp:1.6,smooth:!0,tilt:.06}}),e("d_horse",2.7,8.8,-.4,{anim:{bob:.04,sp:1.6,tilt:.02}}),e("d_donkeycart",2,-15,-8.8,{flip:!0,anim:{drive:.7,bob:.03,sp:5}}),e("d_jeep",1.8,15,-9.4,{anim:{drive:-1.4,bob:.03,sp:8}}),e("d_balloon",3,-10,-9,{y:5.8,anim:{drive:.35,bob:.5,sp:.7,smooth:!0,tilt:.04}}),{pad:"stone",padPics:["d_pad_stone","d_pad_carpet","d_pad_clay","d_pad_wood"],update:(n,s)=>{pi(t,s,n)}}},home(i){Ye(i,{top:"#3a9cf2",horizon:"#c8ecff"}),mi(i,"ground_home",11,6,8050746,6998058),gi(i,"home_pano",-8.5);let t=[],e=fi(i,t);e("h_tree",5.2,-11.2,-6.4,{sway:.01}),e("h_swing",3.2,10,-4.4);for(let n=0;n<7;n++)e("h_fence",1.6,-12+n*4,-6.8);return e("h_tulips",1.3,-6.4,-5.4,{sway:.03}),e("h_doghouse",1.9,11.8,-1),e("h_mailbox",2.1,-12.6,-1),e("h_birdbath",2,6.6,-6,{anim:{tilt:.02,sp:1.4}}),e("h_gnome",1.5,-9.4,2.8,{anim:{tilt:.03,sp:1.2}}),e("h_wateringcan",1.1,9.6,3.4),e("h_bike",1.9,-10.4,-2.8),e("h_ball",.9,6.2,4.4,{anim:{bob:1.1,sp:4}}),e("h_plant",1.5,11.4,3.8,{sway:.03}),e("h_bed",2,-11.6,-4),e("h_wardrobe",3,-13.6,-8.4),e("h_clock",1.7,4.4,-8.8,{anim:{tilt:.06,sp:2}}),e("h_toybox",1.3,-6.4,4.8),e("h_backpack",1.4,8.4,5),e("h_shoes",.8,6.4,6.2),e("h_table",1.7,12.8,-3.6),e("h_broom",2.3,-13.4,2.6,{anim:{tilt:.05,sp:1.6}}),e("h_bin",1.5,13.2,.4),e("h_sink",1.4,-4.2,-8.2),e("h_towel",1.9,1.8,-9,{sway:.05}),e("h_toothbrush",1.2,9.2,-1),{pad:"wood",padPics:["h_pad_rug","h_pad_wood","h_pad_stone","h_pad_bath"],update:(n,s)=>{pi(t,s,n)}}}};function Cx(i,t,e,n){let s=new Rt,r=new Gt({color:2763322,side:ve,toneMapped:!1});for(let a=0;a<i;a++){let o=new Rt;for(let l of[-1,1]){let c=new X(new ge(.7,.18),r);c.geometry.translate(l*.35,0,0),c.userData.sgn=l,o.add(c)}o.position.set(-n+a/i*n*2,t+Math.sin(a*2.1)*1.4,e-a%3),o.userData={v:1.1+a%3*.35,ph:a*1.3,y0:o.position.y},s.add(o)}return s.userData.update=(a,o)=>{for(let l of s.children){l.position.x+=l.userData.v*a,l.position.x>n+2&&(l.position.x=-n-2),l.position.y=l.userData.y0+Math.sin(o*1.3+l.userData.ph)*.35;for(let c of l.children)c.rotation.z=c.userData.sgn*Math.sin(o*9+l.userData.ph)*.7}},s}function Ix(i,t,e,n){let s=new Rt,r=[16739e3,16762938,8050943,12090111];for(let a=0;a<i;a++){let o=new Rt,l=new Gt({color:r[a%4],side:ve,toneMapped:!1});for(let c of[-1,1]){let h=new X(new Yn(.16,10),l);h.position.x=c*.12,h.userData.sgn=c,o.add(h)}o.userData={cx:t+(e-t)*(a/Math.max(1,i-1)),ph:a*1.9,r:1+a%3*.5},o.position.z=n,s.add(o)}return s.userData.update=(a,o)=>{for(let l of s.children){let c=l.userData;l.position.x=c.cx+Math.sin(o*.5+c.ph)*c.r,l.position.y=1.4+Math.sin(o*.9+c.ph*2)*.5+Math.sin(o*2.3+c.ph)*.1;for(let h of l.children)h.rotation.y=h.userData.sgn*(.2+Math.abs(Math.sin(o*14+c.ph))*1.1)}},s}function wx(){let i=new Rt,t=new X(new be(.22,12,10),Ze(16747066,.4));t.scale.set(1.6,.8,.8);let e=Bd(.14,.3,Ze(16747066,.4),-.34,0,0,3);e.rotation.z=Math.PI/2,t.add(e);let n=new X(new Ie(.3,.02,6,24),new Gt({color:16777215,transparent:!0,opacity:0,toneMapped:!1}));return n.rotation.x=Math.PI/2,i.add(t,n),i.userData={t:6*Math.random(),x:0},i.userData.update=s=>{let r=i.userData;r.t+=s;let a=7,o=r.t%a;if(o<1.2){o<s&&(r.x=(Math.random()-.5)*6);let l=o/1.2;t.visible=!0,t.position.set(r.x+l*1.6,Math.sin(l*Math.PI)*1.5-.1,-.6),t.rotation.z=Math.cos(l*Math.PI)*.9,n.position.set(r.x,.02,-.6),n.scale.setScalar(.5+l*2.2),n.material.opacity=Math.max(0,.7-l*.7)}else t.visible=!1,n.material.opacity=0},i}function bx(i,t,e){let n=[],s=[];t.traverse(a=>{a.userData&&a.userData.sway&&s.push(a)});let r=a=>{t.add(a),n.push(a.userData.update)};return["meadow","farm","rainbow","castle","city","snow","jungle","home"].includes(i)&&r(Cx(i==="snow"?3:5,6.5,-14,18)),["meadow","rainbow","farm","castle","jungle","home"].includes(i)&&r(Ix(4,-7,7,5.2)),i==="meadow"&&r(wx()),(a,o)=>{for(let l of s){let c=l.userData.sway;l.rotation.z=Math.sin(o*c.sp+c.ph)*c.amp}for(let l of n)l(a,o);e&&(e.map.offset.x=o*.02%1,e.map.offset.y=o*.012%1)}}var tr=["meadow","farm","beach","space","rainbow","city","snow","castle","underwater","jungle","desert","home"],Hd={meadow:"\u0627\u0644\u0628\u0631\u0643\u0629",farm:"\u0627\u0644\u0645\u0632\u0631\u0639\u0629",beach:"\u0627\u0644\u0634\u0627\u0637\u0626",space:"\u0627\u0644\u0641\u0636\u0627\u0621",rainbow:"\u0645\u0644\u0639\u0628 \u0642\u0648\u0633 \u0642\u0632\u062D",city:"\u0627\u0644\u0645\u062F\u064A\u0646\u0629",snow:"\u062C\u0628\u0627\u0644 \u0627\u0644\u062B\u0644\u062C",castle:"\u0627\u0644\u0642\u0644\u0639\u0629",underwater:"\u062A\u062D\u062A \u0627\u0644\u0645\u0627\u0621",jungle:"\u0627\u0644\u063A\u0627\u0628\u0629",desert:"\u0627\u0644\u0635\u062D\u0631\u0627\u0621",home:"\u0628\u064A\u062A\u064A \u0648\u0627\u0644\u062D\u062F\u064A\u0642\u0629"};function yc(i){let t=new Rt,e=vx[i](t);t.visible=!1;let n=bx(i,t,e.water),s=new fn(new R(-1,0,0),1e5);t.children.slice(1).forEach(a=>a.traverse(o=>{for(let l of[].concat(o.material||[]))l.clippingPlanes=[s]}));let r=(a,o=0)=>{a==="old"?(s.normal.set(-1,0,0),s.constant=o):a==="new"?(s.normal.set(1,0,0),s.constant=-o):(s.normal.set(-1,0,0),s.constant=1e5)};return{id:i,group:t,pad:e.pad,padPics:e.padPics,seam:r,update:(a,o)=>{e.update(a,o),n(a,o)}}}function Dn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var La=[{id:"circle",ar:"\u062F\u0627\u064A\u0631\u0629",the:"\u0627\u0644\u062F\u0627\u064A\u0631\u0629",fem:!0},{id:"square",ar:"\u0645\u0631\u0628\u0639",the:"\u0627\u0644\u0645\u0631\u0628\u0639",fem:!1},{id:"triangle",ar:"\u0645\u062B\u0644\u062B",the:"\u0627\u0644\u0645\u062B\u0644\u062B",fem:!1},{id:"star",ar:"\u0646\u062C\u0645\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",fem:!0},{id:"heart",ar:"\u0642\u0644\u0628",the:"\u0627\u0644\u0642\u0644\u0628",fem:!1}],Ua=[{id:"red",hex:15216682,m:"\u0623\u062D\u0645\u0631",f:"\u062D\u0645\u0631\u0627"},{id:"blue",hex:2788072,m:"\u0623\u0632\u0631\u0642",f:"\u0632\u0631\u0642\u0627"},{id:"yellow",hex:16762906,m:"\u0623\u0635\u0641\u0631",f:"\u0635\u0641\u0631\u0627"},{id:"green",hex:2795594,m:"\u0623\u062E\u0636\u0631",f:"\u062E\u0636\u0631\u0627"},{id:"orange",hex:16747034,m:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A",f:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A"}],Mx=8,Ex=i=>i<=4?3:i===5?4:5,Vd=i=>i>=5,Gd=i=>La.find(t=>t.id===i),ka=i=>Ua.find(t=>t.id===i),Wd=(i,t)=>i.fem?t.f:t.m,Sx=(i,t)=>{let e=Wd(i,t);return e==="\u0628\u0631\u062A\u0642\u0627\u0644\u064A"?"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A":`\u0627\u0644${e}`};function Xd(i,t){return t?`\u0641\u064A\u0646 ${i.the} ${Sx(i,t)}\u061F`:`\u0641\u064A\u0646 ${i.the}\u061F`}function qd(i,t){return t?`\u062F\u064A ${i.ar} ${Wd(i,t)}`:`\u062F\u064A ${i.ar}`}function Yd(i,t){let e=Dn(t),n=[];for(let s=0;s<Mx;s++){let r,a,o=0;do r=La[Math.floor(e()*(i<=4?3:5))].id,a=Ua[Math.floor(e()*5)].id,o++;while(o<30&&n.length&&n[n.length-1].shape===r);n.push({shape:r,color:a})}return n}function $d(i,t,e){let n=Dn(e),s=Ex(i),r=u=>u.sort(()=>n()-.5),a=u=>`${u.shape}-${u.color}`,o=[{shape:t.shape,color:t.color}],l=new Set([a(o[0])]),c=(u,f)=>l.has(a({shape:u,color:f}))?!1:(l.add(a({shape:u,color:f})),o.push({shape:u,color:f}),!0),h=r(La.map(u=>u.id).filter(u=>u!==t.shape)),d=r(Ua.map(u=>u.id).filter(u=>u!==t.color));if(i<=5)for(let u=0;u<s-1;u++)c(h[u],d[u]);else{c(h[0],t.color),c(t.shape,d[0]);for(let u=1;o.length<s&&u<30;u++)c(h[u%h.length],d[(u+1)%d.length]);for(let u=0;o.length<s&&u<80;u++){let f=La[Math.floor(n()*5)].id,m=Ua[Math.floor(n()*5)].id;f===t.shape||m===t.color||c(f,m)}}return r(o).map((u,f)=>({id:`t${f}`,...u}))}var Zd=[["\u0648\u0627\u062D\u062F","one"],["\u0627\u062A\u0646\u064A\u0646","two"],["\u062A\u0644\u0627\u062A\u0629","three"],["\u0623\u0631\u0628\u0639\u0629","four"],["\u062E\u0645\u0633\u0629","five"],["\u0633\u062A\u0629","six"],["\u0633\u0628\u0639\u0629","seven"],["\u062A\u0645\u0627\u0646\u064A\u0629","eight"],["\u062A\u0633\u0639\u0629","nine"],["\u0639\u0634\u0631\u0629","ten"],["\u062D\u062F\u0627\u0634\u0631","eleven"],["\u0627\u062A\u0646\u0627\u0634\u0631","twelve"],["\u062A\u0644\u0627\u062A\u0627\u0634\u0631","thirteen"],["\u0623\u0631\u0628\u0639\u062A\u0627\u0634\u0631","fourteen"],["\u062E\u0645\u0633\u062A\u0627\u0634\u0631","fifteen"],["\u0633\u062A\u0627\u0634\u0631","sixteen"],["\u0633\u0628\u0639\u062A\u0627\u0634\u0631","seventeen"],["\u062A\u0645\u0646\u062A\u0627\u0634\u0631","eighteen"],["\u062A\u0633\u0639\u062A\u0627\u0634\u0631","nineteen"],["\u0639\u0634\u0631\u064A\u0646","twenty"],["\u0648\u0627\u062D\u062F \u0648\u0639\u0634\u0631\u064A\u0646","twenty-one"],["\u0627\u062A\u0646\u064A\u0646 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-two"],["\u062A\u0644\u0627\u062A\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-three"],["\u0623\u0631\u0628\u0639\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-four"],["\u062E\u0645\u0633\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-five"],["\u0633\u062A\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-six"],["\u0633\u0628\u0639\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-seven"],["\u062A\u0645\u0627\u0646\u064A\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-eight"],["\u062A\u0633\u0639\u0629 \u0648\u0639\u0634\u0631\u064A\u0646","twenty-nine"],["\u062A\u0644\u0627\u062A\u064A\u0646","thirty"]];var er=[{id:"alef",thing:"bunny",ch:"\u0623",the:"\u0627\u0644\u0623\u0644\u0641",word:"\u0623\u0631\u0646\u0628",pic:"\u{1F430}"},{id:"baa",thing:"duck",ch:"\u0628",the:"\u0627\u0644\u0628\u0627\u0621",word:"\u0628\u0637\u0629",pic:"\u{1F986}"},{id:"meem",thing:"banana",ch:"\u0645",the:"\u0627\u0644\u0645\u064A\u0645",word:"\u0645\u0648\u0632\u0629",pic:"\u{1F34C}"},{id:"kaaf",thing:"ball",ch:"\u0643",the:"\u0627\u0644\u0643\u0627\u0641",word:"\u0643\u0648\u0631\u0629",pic:"\u26BD"},{id:"taa",thing:"apple",ch:"\u062A",the:"\u0627\u0644\u062A\u0627\u0621",word:"\u062A\u0641\u0627\u062D\u0629",pic:"\u{1F34E}"},{id:"seen",thing:"fish",ch:"\u0633",the:"\u0627\u0644\u0633\u064A\u0646",word:"\u0633\u0645\u0643\u0629",pic:"\u{1F41F}"},{id:"faa",thing:"butterfly",ch:"\u0641",the:"\u0627\u0644\u0641\u0627\u0621",word:"\u0641\u0631\u0627\u0634\u0629",pic:"\u{1F98B}"},{id:"qaaf",thing:"cat",ch:"\u0642",the:"\u0627\u0644\u0642\u0627\u0641",word:"\u0642\u0637\u0629",pic:"\u{1F431}"},{id:"thaa",thing:"fox",ch:"\u062B",the:"\u0627\u0644\u062B\u0627\u0621",word:"\u062B\u0639\u0644\u0628",pic:"\u{1F98A}"},{id:"jeem",thing:"camel",ch:"\u062C",the:"\u0627\u0644\u062C\u064A\u0645",word:"\u062C\u0645\u0644",pic:"\u{1F42A}"},{id:"haa",thing:"horse",ch:"\u062D",the:"\u0627\u0644\u062D\u0627\u0621",word:"\u062D\u0635\u0627\u0646",pic:"\u{1F434}"},{id:"khaa",thing:"sheep",ch:"\u062E",the:"\u0627\u0644\u062E\u0627\u0621",word:"\u062E\u0631\u0648\u0641",pic:"\u{1F411}"},{id:"dal",thing:"hen",ch:"\u062F",the:"\u0627\u0644\u062F\u0627\u0644",word:"\u062F\u062C\u0627\u062C\u0629",pic:"\u{1F414}"},{id:"sheen",thing:"sun",ch:"\u0634",the:"\u0627\u0644\u0634\u064A\u0646",word:"\u0634\u0645\u0633",pic:"\u2600\uFE0F"},{id:"noon",thing:"bee",ch:"\u0646",the:"\u0627\u0644\u0646\u0648\u0646",word:"\u0646\u062D\u0644\u0629",pic:"\u{1F41D}"},{id:"waaw",thing:"rose",ch:"\u0648",the:"\u0627\u0644\u0648\u0627\u0648",word:"\u0648\u0631\u062F\u0629",pic:"\u{1F339}"},{id:"raa",thing:"pomegranate",ch:"\u0631",the:"\u0627\u0644\u0631\u0627\u0621",word:"\u0631\u0645\u0627\u0646\u0629",pic:"\u{1F34E}"},{id:"zayn",thing:"giraffe",ch:"\u0632",the:"\u0627\u0644\u0632\u0627\u064A",word:"\u0632\u0631\u0627\u0641\u0629",pic:"\u{1F992}"},{id:"dhal",thing:"corn",ch:"\u0630",the:"\u0627\u0644\u0630\u0627\u0644",word:"\u0630\u0631\u0629",pic:"\u{1F33D}"},{id:"sad",thing:"rocket",ch:"\u0635",the:"\u0627\u0644\u0635\u0627\u062F",word:"\u0635\u0627\u0631\u0648\u062E",pic:"\u{1F680}"},{id:"dad",thing:"frog",ch:"\u0636",the:"\u0627\u0644\u0636\u0627\u062F",word:"\u0636\u0641\u062F\u0639",pic:"\u{1F438}"},{id:"tah",thing:"plane",ch:"\u0637",the:"\u0627\u0644\u0637\u0627\u0621",word:"\u0637\u064A\u0627\u0631\u0629",pic:"\u2708\uFE0F"},{id:"zah",thing:"envelope",ch:"\u0638",the:"\u0627\u0644\u0638\u0627\u0621",word:"\u0638\u0631\u0641",pic:"\u2709\uFE0F"},{id:"ayn",thing:"grapes",ch:"\u0639",the:"\u0627\u0644\u0639\u064A\u0646",word:"\u0639\u0646\u0628",pic:"\u{1F347}"},{id:"ghayn",thing:"crow",ch:"\u063A",the:"\u0627\u0644\u063A\u064A\u0646",word:"\u063A\u0631\u0627\u0628",pic:"\u{1F426}"},{id:"laam",thing:"lemon",ch:"\u0644",the:"\u0627\u0644\u0644\u0627\u0645",word:"\u0644\u064A\u0645\u0648\u0646\u0629",pic:"\u{1F34B}"},{id:"haa2",thing:"crescent",ch:"\u0647",the:"\u0627\u0644\u0647\u0627\u0621",word:"\u0647\u0644\u0627\u0644",pic:"\u{1F319}"},{id:"yaa",thing:"dove",ch:"\u064A",the:"\u0627\u0644\u064A\u0627\u0621",word:"\u064A\u0645\u0627\u0645\u0629",pic:"\u{1F54A}\uFE0F"}],yn=8,Jd=i=>er.slice(0,i<=4?8:i===5?16:er.length),jd=i=>i<=4?3:4,vn=i=>er.find(t=>t.id===i),Kd=i=>`\u0641\u064A\u0646 \u062D\u0631\u0641 ${i.the}\u061F`;var nr=[{id:"rabbit",thing:"bunny",the:"\u0627\u0644\u0623\u0631\u0646\u0628",fem:!1,food:"carrot"},{id:"cat",thing:"cat",the:"\u0627\u0644\u0642\u0637\u0629",fem:!0,food:"fish"},{id:"dog",thing:"dog",the:"\u0627\u0644\u0643\u0644\u0628",fem:!1,food:"bone"},{id:"monkey",thing:"monkey",the:"\u0627\u0644\u0642\u0631\u062F",fem:!1,food:"banana"},{id:"cow",thing:"cow",the:"\u0627\u0644\u0628\u0642\u0631\u0629",fem:!0,food:"grass"},{id:"bear",thing:"bear",the:"\u0627\u0644\u062F\u0628",fem:!1,food:"honey"},{id:"mouse",thing:"mouse",the:"\u0627\u0644\u0641\u0627\u0631",fem:!1,food:"cheese"},{id:"chick",thing:"chick",the:"\u0627\u0644\u0643\u062A\u0643\u0648\u062A",fem:!1,food:"seeds"},{id:"horse",thing:"horse",the:"\u0627\u0644\u062D\u0635\u0627\u0646",fem:!1,food:"f_haypile"},{id:"hen",thing:"hen",the:"\u0627\u0644\u0641\u0631\u062E\u0629",fem:!0,food:"corn"},{id:"donkey",thing:"f_donkey",the:"\u0627\u0644\u062D\u0645\u0627\u0631",fem:!1,food:"carrot"},{id:"goat",thing:"f_goat",the:"\u0627\u0644\u0645\u0627\u0639\u0632",fem:!1,food:"grass"},{id:"parrot",thing:"j_parrot",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",fem:!1,food:"seeds"}],Qd={carrot:{the:"\u0627\u0644\u062C\u0632\u0631"},fish:{the:"\u0627\u0644\u0633\u0645\u0643"},bone:{the:"\u0627\u0644\u0639\u0636\u0645\u0629"},banana:{the:"\u0627\u0644\u0645\u0648\u0632"},grass:{the:"\u0627\u0644\u062D\u0634\u064A\u0634"},honey:{the:"\u0627\u0644\u0639\u0633\u0644"},cheese:{the:"\u0627\u0644\u062C\u0628\u0646\u0629"},seeds:{the:"\u0627\u0644\u062D\u064E\u0628"},f_haypile:{the:"\u0627\u0644\u062A\u0628\u0646"},corn:{the:"\u0627\u0644\u062F\u0631\u0629"}};var vc=i=>nr.slice(0,i<=4?3:i===5?6:nr.length),Tx=i=>i<=5?3:4,Cc=i=>nr.find(t=>t.id===i),tu=i=>`${i.the} ${i.fem?"\u062C\u0639\u0627\u0646\u0629":"\u062C\u0639\u0627\u0646"}! ${i.fem?"\u0647\u062A\u0627\u0643\u0644":"\u0647\u064A\u0627\u0643\u0644"} \u0625\u064A\u0647\u061F`,eu=i=>`${i.the} ${i.fem?"\u0628\u062A\u062D\u0628":"\u0628\u064A\u062D\u0628"} ${Qd[i.food].the}`;function nu(i,t,e){let n=Dn(e),s=Cc(t).food,r=vc(i).map(o=>o.food).filter(o=>o!==s);for(let o of nr)!r.includes(o.food)&&o.food!==s&&r.push(o.food);let a=[...new Set(r)].sort(()=>n()-.5).slice(0,Tx(i)-1);return[s,...a].sort(()=>n()-.5)}var Ic=i=>i<=4?3:i===5?6:20;var iu="\u0643\u0627\u0645 \u062A\u0641\u0627\u062D\u0629\u061F";function su(i,t,e){let n=Dn(e),s=Ic(i),r=[];for(let a=-2;a<=2;a++)a&&t+a>=1&&t+a<=Math.max(s,t+1)&&r.push(t+a);return r.sort(()=>n()-.5),[t,r[0],r[1]].sort((a,o)=>a-o)}var xs=[{id:"letters",mode:"letter",ar:"\u0627\u0635\u0637\u0627\u062F \u0627\u0644\u062D\u0631\u0641",emoji:"\u{1F524}",skill:"letters_ar"},{id:"words",mode:"word",ar:"\u0641\u064A\u0646 \u0627\u0644\u0635\u0648\u0631\u0629\u061F",emoji:"\u{1F5BC}\uFE0F",skill:"vocab"},{id:"first",mode:"first",ar:"\u0623\u0648\u0644 \u062D\u0631\u0641",emoji:"\u{1F170}\uFE0F",skill:"letters_ar"},{id:"numbers",mode:"number",ar:"\u0627\u0644\u0623\u0631\u0642\u0627\u0645",emoji:"\u{1F522}",skill:"counting"},{id:"counting",mode:"count",ar:"\u0639\u062F\u0651 \u0645\u0639\u0627\u064A\u0627",emoji:"\u{1F34E}",skill:"counting"},{id:"order",mode:"next",ar:"\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u062D\u0631\u0648\u0641",emoji:"\u{1F520}",skill:"letters_ar"},{id:"shapes",mode:"shape",ar:"\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646",emoji:"\u{1F537}",skill:"shapes"},{id:"animals",mode:"animal",ar:"\u0623\u0637\u0639\u0645 \u0627\u0644\u062D\u064A\u0648\u0627\u0646",emoji:"\u{1F430}",skill:"nature"},{id:"colors",mode:"pick",table:"colors",ar:"\u0627\u0644\u0623\u0644\u0648\u0627\u0646",emoji:"\u{1F3A8}",skill:"colors"},{id:"fruits",mode:"pick",table:"fruits",ar:"\u0641\u0648\u0627\u0643\u0647 \u0648\u062E\u0636\u0627\u0631",emoji:"\u{1F353}",skill:"vocab"},{id:"vehicles",mode:"pick",table:"vehicles",ar:"\u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A",emoji:"\u{1F68C}",skill:"vocab"},{id:"habits",mode:"habit",ar:"\u0639\u0627\u062F\u0627\u062A\u064A \u0627\u0644\u064A\u0648\u0645\u064A\u0629",emoji:"\u{1F9FC}",skill:"listening"}],Rx={colors:{prompt:i=>`\u0641\u064A\u0646 \u0627\u0644\u0644\u0648\u0646 ${i.the}\u061F`,items:[{id:"red",the:"\u0627\u0644\u0623\u062D\u0645\u0631",hex:15216682},{id:"blue",the:"\u0627\u0644\u0623\u0632\u0631\u0642",hex:2788072},{id:"yellow",the:"\u0627\u0644\u0623\u0635\u0641\u0631",hex:16765466},{id:"green",the:"\u0627\u0644\u0623\u062E\u0636\u0631",hex:2795594},{id:"orange",the:"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A",hex:16747034},{id:"purple",the:"\u0627\u0644\u0628\u0646\u0641\u0633\u062C\u064A",hex:10111704},{id:"pink",the:"\u0627\u0644\u0648\u0631\u062F\u064A",hex:16743096},{id:"black",the:"\u0627\u0644\u0623\u0633\u0648\u062F",hex:2368556},{id:"white",the:"\u0627\u0644\u0623\u0628\u064A\u0636",hex:16448250},{id:"brown",the:"\u0627\u0644\u0628\u0646\u064A",hex:9067058},{id:"gray",the:"\u0627\u0644\u0631\u0645\u0627\u062F\u064A",hex:10132136}]},fruits:{prompt:i=>`\u0641\u064A\u0646 ${i.the}\u061F`,items:[{id:"apple",the:"\u0627\u0644\u062A\u0641\u0627\u062D\u0629",thing:"apple"},{id:"banana",the:"\u0627\u0644\u0645\u0648\u0632\u0629",thing:"banana"},{id:"orange",the:"\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u0629",thing:"orange"},{id:"strawberry",the:"\u0627\u0644\u0641\u0631\u0627\u0648\u0644\u0629",thing:"strawberry"},{id:"pear",the:"\u0627\u0644\u0643\u0645\u062B\u0631\u0649",thing:"pear"},{id:"grapes",the:"\u0627\u0644\u0639\u0646\u0628",thing:"grapes"},{id:"watermelon",the:"\u0627\u0644\u0628\u0637\u064A\u062E",thing:"watermelon"},{id:"carrot",the:"\u0627\u0644\u062C\u0632\u0631\u0629",thing:"carrot"},{id:"corn",the:"\u0627\u0644\u0630\u0631\u0629",thing:"corn"},{id:"pineapple",the:"\u0627\u0644\u0623\u0646\u0627\u0646\u0627\u0633",thing:"pineapple"},{id:"mango",the:"\u0627\u0644\u0645\u0627\u0646\u062C\u0627",thing:"mango"},{id:"lemon",the:"\u0627\u0644\u0644\u064A\u0645\u0648\u0646\u0629",thing:"lemon"},{id:"pomegranate",the:"\u0627\u0644\u0631\u0645\u0627\u0646\u0629",thing:"pomegranate"}]},vehicles:{prompt:i=>`\u0641\u064A\u0646 ${i.the}\u061F`,items:[{id:"car",the:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",thing:"car"},{id:"bus",the:"\u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633",thing:"bus"},{id:"boat",the:"\u0627\u0644\u0645\u0631\u0643\u0628",thing:"boat"},{id:"plane",the:"\u0627\u0644\u0637\u064A\u0627\u0631\u0629",thing:"plane"},{id:"train",the:"\u0627\u0644\u0642\u0637\u0631",thing:"train"},{id:"rocket",the:"\u0627\u0644\u0635\u0627\u0631\u0648\u062E",thing:"rocket"},{id:"firetruck",the:"\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u0637\u0627\u0641\u064A",thing:"firetruck"},{id:"ambulance",the:"\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0625\u0633\u0639\u0627\u0641",thing:"ambulance"},{id:"police",the:"\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0634\u0631\u0637\u0629",thing:"police"},{id:"helicopter",the:"\u0627\u0644\u0647\u0644\u064A\u0643\u0648\u0628\u062A\u0631",thing:"helicopter"},{id:"schoolbus",the:"\u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0627\u0644\u0645\u062F\u0631\u0633\u064A",thing:"c_schoolbus"},{id:"citybus",the:"\u0623\u062A\u0648\u0628\u064A\u0633 \u0627\u0644\u0645\u062F\u064A\u0646\u0629",thing:"c_citybus"},{id:"taxi",the:"\u0627\u0644\u062A\u0627\u0643\u0633\u064A",thing:"c_taxi"},{id:"tram",the:"\u0627\u0644\u062A\u0631\u0627\u0645",thing:"c_tram"},{id:"bulldozer",the:"\u0627\u0644\u062C\u0631\u0627\u0641\u0629",thing:"c_bulldozer"},{id:"bike",the:"\u0627\u0644\u0639\u062C\u0644\u0629",thing:"h_bike"},{id:"jeep",the:"\u0627\u0644\u062C\u064A\u0628",thing:"d_jeep"},{id:"hotballoon",the:"\u0627\u0644\u0645\u0646\u0637\u0627\u062F",thing:"d_balloon"},{id:"felucca",the:"\u0627\u0644\u0641\u0644\u0648\u0643\u0629",thing:"d_boat"},{id:"donkeycart",the:"\u0639\u0631\u0628\u0629 \u0627\u0644\u062D\u0645\u0627\u0631",thing:"d_donkeycart"}]}},Px=i=>xs.find(t=>t.id===i),ir=i=>i<=4?xs.filter(t=>t.id!=="first"&&t.id!=="order"):xs,Dx=["alef","baa","taa","thaa","jeem","haa","khaa","dal","dhal","raa","zayn","seen","sheen","sad","dad","tah","zah","ayn","ghayn","faa","qaaf","kaaf","laam","meem","noon","haa2","waaw","yaa"],Lx=[...er.map((i,t)=>({id:i.id,letter:i.id,thing:i.thing,word:i.word,the:null,age:t<8?3:t<16?5:6})),...Sa.map(i=>({id:`w_${i.id}`,letter:i.letter,thing:i.thing,word:i.word,the:i.the,age:i.age}))],Ux=i=>Lx.filter(t=>t.age<=i),kx=i=>i.the||ou[i.id],Nx=i=>`\u0641\u064A\u0646 ${kx(i)}\u061F`,Fx=i=>`\u0625\u064A\u0647 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0643\u0644\u0645\u0629 ${i.word}\u061F`,ru=i=>`${vn(i.letter).the} \u0632\u064A ${i.word}`,ou={alef:"\u0627\u0644\u0623\u0631\u0646\u0628",baa:"\u0627\u0644\u0628\u0637\u0629",meem:"\u0627\u0644\u0645\u0648\u0632\u0629",kaaf:"\u0627\u0644\u0643\u0648\u0631\u0629",taa:"\u0627\u0644\u062A\u0641\u0627\u062D\u0629",seen:"\u0627\u0644\u0633\u0645\u0643\u0629",faa:"\u0627\u0644\u0641\u0631\u0627\u0634\u0629",qaaf:"\u0627\u0644\u0642\u0637\u0629",thaa:"\u0627\u0644\u062B\u0639\u0644\u0628",jeem:"\u0627\u0644\u062C\u0645\u0644",haa:"\u0627\u0644\u062D\u0635\u0627\u0646",khaa:"\u0627\u0644\u062E\u0631\u0648\u0641",dal:"\u0627\u0644\u062F\u062C\u0627\u062C\u0629",sheen:"\u0627\u0644\u0634\u0645\u0633",noon:"\u0627\u0644\u0646\u062D\u0644\u0629",waaw:"\u0627\u0644\u0648\u0631\u062F\u0629",raa:"\u0627\u0644\u0631\u0645\u0627\u0646\u0629",zayn:"\u0627\u0644\u0632\u0631\u0627\u0641\u0629",dhal:"\u0627\u0644\u0630\u0631\u0629",sad:"\u0627\u0644\u0635\u0627\u0631\u0648\u062E",dad:"\u0627\u0644\u0636\u0641\u062F\u0639",tah:"\u0627\u0644\u0637\u064A\u0627\u0631\u0629",zah:"\u0627\u0644\u0638\u0631\u0641",ayn:"\u0627\u0644\u0639\u0646\u0628",ghayn:"\u0627\u0644\u063A\u0631\u0627\u0628",laam:"\u0627\u0644\u0644\u064A\u0645\u0648\u0646\u0629",haa2:"\u0627\u0644\u0647\u0644\u0627\u0644",yaa:"\u0627\u0644\u064A\u0645\u0627\u0645\u0629"},Ox=i=>`\u0641\u064A\u0646 ${ou[i.id]}\u061F`,Bx=i=>`\u0625\u064A\u0647 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0643\u0644\u0645\u0629 ${i.word}\u061F`,zx=["","\u0648\u0627\u062D\u062F","\u0627\u062A\u0646\u064A\u0646","\u062A\u0644\u0627\u062A\u0629","\u0623\u0631\u0628\u0639\u0629","\u062E\u0645\u0633\u0629","\u0633\u062A\u0629","\u0633\u0628\u0639\u0629","\u062A\u0645\u0627\u0646\u064A\u0629","\u062A\u0633\u0639\u0629","\u0639\u0634\u0631\u0629","\u062D\u062F\u0627\u0634\u0631","\u0627\u062A\u0646\u0627\u0634\u0631","\u062A\u0644\u0627\u062A\u0627\u0634\u0631","\u0623\u0631\u0628\u0639\u062A\u0627\u0634\u0631","\u062E\u0645\u0633\u062A\u0627\u0634\u0631","\u0633\u062A\u0627\u0634\u0631","\u0633\u0628\u0639\u062A\u0627\u0634\u0631","\u062A\u0645\u0646\u062A\u0627\u0634\u0631","\u062A\u0633\u0639\u062A\u0627\u0634\u0631","\u0639\u0634\u0631\u064A\u0646"],Hx=i=>`\u0641\u064A\u0646 \u0631\u0642\u0645 ${zx[i]}\u061F`,Vx=i=>`\u0625\u064A\u0647 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u0644\u064A \u0628\u0639\u062F ${i.the}\u061F`,Gx=i=>i<=4?5:i===5?10:20,Wx=i=>Dx.slice(0,i<=5?8:28),lu=[{text:"\u064A\u0644\u0627 \u0646\u063A\u0633\u0644 \u0625\u064A\u062F\u064A\u0646\u0627",answer:"soap"},{text:"\u064A\u0644\u0627 \u0646\u0641\u0637\u0631",answer:"bowl"},{text:"\u064A\u0644\u0627 \u0646\u063A\u0633\u0644 \u0633\u0646\u0627\u0646\u0646\u0627",answer:"toothbrush"},{text:"\u0648\u0642\u062A \u0627\u0644\u063A\u062F\u0627",answer:"pot"},{text:"\u064A\u0644\u0627 \u0646\u0631\u0648\u062D \u0627\u0644\u062D\u0636\u0627\u0646\u0629",answer:"backpack"},{text:"\u0648\u0642\u062A \u0627\u0644\u0646\u0648\u0645 \u064A\u0627 \u0628\u0637\u0644",answer:"bed"},{text:"\u064A\u0644\u0627 \u0646\u0633\u062A\u062D\u0645\u0651\u0649",answer:"tub"},{text:"\u064A\u0644\u0627 \u0646\u062A\u0639\u0634\u0649",answer:"plate"},{text:"\u0635\u0627\u062D\u0628\u0643 \u0639\u0627\u064A\u0632 \u064A\u0644\u0639\u0628\u060C \u0646\u0634\u0627\u0631\u0643\u0647 \u0625\u064A\u0647\u061F",answer:"teddy"},{text:"\u0646\u0642\u0648\u0644 \u0644\u0635\u0627\u062D\u0628\u0646\u0627 \u0643\u0644\u0645\u0629 \u062D\u0644\u0648\u0629 \u0648\u0646\u062D\u0628\u0647",answer:"heart"},{text:"\u064A\u0644\u0627 \u0646\u0646\u0634\u0641 \u0625\u064A\u062F\u064A\u0646\u0627",answer:"h_towel"},{text:"\u064A\u0644\u0627 \u0646\u0644\u0628\u0633 \u0627\u0644\u062C\u0632\u0645\u0629",answer:"h_shoes"},{text:"\u064A\u0644\u0627 \u0646\u0631\u062A\u0628 \u0644\u0639\u0628\u0646\u0627",answer:"h_toybox"},{text:"\u064A\u0644\u0627 \u0646\u0643\u0646\u0633 \u0627\u0644\u0623\u0648\u0636\u0629",answer:"h_broom"},{text:"\u064A\u0644\u0627 \u0646\u0631\u0645\u064A \u0627\u0644\u0632\u0628\u0627\u0644\u0629 \u0641\u064A \u0627\u0644\u0635\u0646\u062F\u0648\u0642",answer:"h_bin"},{text:"\u064A\u0644\u0627 \u0646\u0644\u0628\u0633 \u0647\u062F\u0648\u0645\u0646\u0627",answer:"h_wardrobe"},{text:"\u064A\u0644\u0627 \u0646\u0634\u0648\u0641 \u0627\u0644\u0633\u0627\u0639\u0629 \u0643\u0627\u0645",answer:"h_clock"},{text:"\u064A\u0644\u0627 \u0646\u0633\u0642\u064A \u0627\u0644\u0632\u0631\u0639",answer:"h_wateringcan"},{text:"\u064A\u0644\u0627 \u0646\u0644\u0639\u0628 \u0628\u0627\u0644\u0643\u0648\u0631\u0629",answer:"h_ball"},{text:"\u064A\u0644\u0627 \u0646\u0642\u0639\u062F \u0648\u0646\u0631\u0633\u0645 \u0639\u0644\u0649 \u0627\u0644\u062A\u0631\u0627\u0628\u064A\u0632\u0629",answer:"h_table"}],Xx=[...new Set(lu.map(i=>i.answer))],au=["\u0623\u062D\u0633\u0646\u062A!","\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","\u0645\u0645\u062A\u0627\u0632!","\u062C\u0645\u064A\u0644 \u0623\u0648\u064A!","\u0639\u0638\u064A\u0645!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643!","\u0623\u0646\u062A \u0628\u0637\u0644!","\u0643\u0645\u0651\u0644 \u0643\u062F\u0647!","\u0625\u062C\u0627\u0628\u0629 \u0635\u062D\u064A\u062D\u0629!"],qx=["\u0623\u062D\u0633\u0646\u062A\u064A!","\u062D\u0644\u0648\u0629 \u0623\u0648\u064A!","\u0645\u0645\u062A\u0627\u0632\u0629!","\u062C\u0645\u064A\u0644\u0629 \u0623\u0648\u064A!","\u0639\u0638\u064A\u0645\u0629!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u064A!","\u0625\u0646\u062A\u064A \u0628\u0637\u0644\u0629!","\u0643\u0645\u0651\u0644\u064A \u0643\u062F\u0647!","\u0625\u062C\u0627\u0628\u0629 \u0635\u062D\u064A\u062D\u0629!"],cu=(i,t)=>(i?qx:au)[t%au.length],_i=(i,t,e)=>[...t].sort(()=>i()-.5).slice(0,e),Yx={carrot:"carrot",fish:"fish",bone:"bone",banana:"banana",grass:"grass",honey:"honey",cheese:"cheese",seeds:"seeds",f_haypile:"f_haypile",corn:"corn"},Na=class{constructor(t,e,n=Date.now()){this.level=Px(t),this.age=e,this.seed=n,this.round=0,this.misses=0,this.rounds=this._make()}_make(){let t=Dn(this.seed),e=[],n=this.level.mode,s=Jd(this.age).map(l=>l.id),r=jd(this.age),a=l=>{let c=[];return()=>(c.length||(c=[...l].sort(()=>t()-.5)),c.shift())},o=l=>`${l.the} \u0632\u064A ${l.word}`;if(n==="number"||n==="count"){let l=n==="count"?Ic(this.age):Gx(this.age),c=Array.from({length:l},(d,u)=>u+1),h=a(c);for(let d=0;d<yn;d++){let u=h();d&&e[d-1].n===u&&(u=h());let f=n==="count"?su(this.age,u,this.seed+d*31):[u,..._i(t,c.filter(m=>m!==u),r-1)].sort(()=>t()-.5);e.push({prompt:n==="count"?iu:Hx(u),answer:`n${u}`,n:u,show:n==="count"||this.age<=4?{type:"apples",n:u}:null,countAloud:u,options:f.map(m=>({id:`n${m}`,kind:"number",n:m}))})}}else if(n==="next"){let l=Wx(this.age),c=a(Array.from({length:l.length-1},(h,d)=>d));for(let h=0;h<yn;h++){let d=c(),u=vn(l[d]),f=l[d+1],m=_i(t,l.filter(x=>x!==f&&x!==l[d]),r-1);e.push({prompt:Vx(u),answer:f,from:l[d],show:{type:"letter",ch:u.ch},reward:o(vn(f)),options:[f,...m].sort(()=>t()-.5).map(x=>({id:x,kind:"letter",ch:vn(x).ch}))})}}else if(n==="shape")Yd(this.age,this.seed).forEach((c,h)=>{let d=$d(this.age,c,this.seed+h*53),u=Vd(this.age),f=d.find(g=>g.shape===c.shape&&(!u||g.color===c.color)),m=Gd(c.shape),x=u?ka(c.color):null;e.push({prompt:Xd(m,x),answer:f.id,reward:qd(m,x),options:d.map(g=>({id:g.id,kind:"shape",shape:g.shape,color:g.color}))})});else if(n==="animal"){let l=a(vc(this.age).map(c=>c.id));for(let c=0;c<yn;c++){let h=l();c&&e[c-1].animal===h&&(h=l());let d=Cc(h),u=nu(this.age,h,this.seed+c*41);e.push({prompt:tu(d),answer:d.food,animal:h,show:{type:"thing",thing:d.thing},reward:eu(d),options:u.map(f=>({id:f,kind:"thing",thing:Yx[f]}))})}}else if(n==="pick"){let l=Rx[this.level.table],c=a(l.items.map(h=>h.id));for(let h=0;h<yn;h++){let d=c();h&&e[h-1].answer===d&&(d=c());let u=l.items.find(m=>m.id===d),f=_i(t,l.items.filter(m=>m.id!==d),r-1);e.push({prompt:l.prompt(u),answer:d,options:[u,...f].sort(()=>t()-.5).map(m=>m.hex!=null?{id:m.id,kind:"color",hex:m.hex}:{id:m.id,kind:"thing",thing:m.thing})})}}else if(n==="habit"){let l=_i(t,lu,yn);for(let c of l){let h=_i(t,Xx.filter(d=>d!==c.answer),r-1);e.push({prompt:c.text,answer:c.answer,show:null,options:[c.answer,...h].sort(()=>t()-.5).map(d=>({id:d,kind:"thing",thing:d}))})}}else if(n==="word"||n==="first"){let l=Ux(this.age),c=a(l.map(d=>d.id)),h=null;for(let d=0;d<yn;d++){let u=c();u===h&&(u=c()),h=u;let f=l.find(m=>m.id===u);if(n==="word"){let m=_i(t,l.filter(x=>x.id!==u&&x.thing!==f.thing),r-1);e.push({prompt:Nx(f),answer:u,reward:ru(f),options:[f,...m].sort(()=>t()-.5).map(x=>({id:x.id,kind:"thing",thing:x.thing}))})}else{let m=[...new Set(l.map(g=>g.letter))].filter(g=>g!==f.letter),x=_i(t,m,r-1);e.push({prompt:Fx(f),answer:f.letter,reward:ru(f),show:{type:"thing",thing:f.thing},options:[f.letter,...x].sort(()=>t()-.5).map(g=>({id:g,kind:"letter",ch:vn(g).ch}))})}}}else{let l=a(s);for(let c=0;c<yn;c++){let h=l();c&&e[c-1].answer===h&&(h=l());let d=vn(h),u=_i(t,s.filter(m=>m!==h),r-1),f=[h,...u].sort(()=>t()-.5);n==="letter"?e.push({prompt:Kd(d),answer:h,reward:o(d),options:f.map(m=>({id:m,kind:"thing",thing:vn(m).thing,plaque:vn(m).ch}))}):n==="word"?e.push({prompt:Ox(d),answer:h,reward:o(d),options:f.map(m=>({id:m,kind:"thing",thing:vn(m).thing}))}):e.push({prompt:Bx(d),answer:h,reward:o(d),show:{type:"thing",thing:d.thing},options:f.map(m=>({id:m,kind:"letter",ch:vn(m).ch}))})}}return e}get finished(){return this.round>=this.rounds.length}get cur(){return this.finished?null:this.rounds[this.round]}get hint(){return this.misses>=2?this.cur.answer:null}tap(t){if(this.finished)return null;if(t!==this.cur.answer)return this.misses++,{ok:!1,firstMiss:this.misses===1};let e={ok:!0,first:this.misses===0,round:this.cur};return this.round++,this.misses=0,e.finished=this.finished,e}};var wc=14.5,$x={title:["\u0639\u0627\u0644\u0645 \u0631\u062D\u0644\u062A\u064A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A","Rehlaty Learning World"],pick:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0648\u0649","Choose a level"],no:["\u0645\u0634 \u0647\u0646\u0627... \u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Not here... listen again"],again:["\u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Hear again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],chooseHero:["\u0627\u062E\u062A\u0627\u0631 \u0634\u062E\u0635\u064A\u062A\u0643!","Choose your hero!"],letsGo:["\u064A\u0644\u0627 \u0646\u0628\u062F\u0623 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629!","Let's start the adventure!"]},Zx={...nc,tempo:84,lead:"bell",shaker:!1,chords:[[48,[64,67,72]],[45,[64,69,72]],[41,[65,69,72]],[43,[62,67,71]],[48,[64,67,72]],[45,[64,69,72]],[43,[62,67,71]],[48,[64,67,76]]],melody:[[0,0,79],[0,4,84],[1,0,81],[1,4,76],[2,0,77],[2,4,81],[3,0,79],[3,4,74],[4,0,84],[4,4,79],[5,0,81],[5,4,88],[6,0,86],[6,4,83],[7,0,84]]},Fa=[72,74,76,79,81,84,86,88];function hu(i,t,e){let s=new bn().setFromObject(i).getSize(new R),r=Math.min(t/Math.max(s.y,.01),e/Math.max(s.x,s.z,.01));i.scale.multiplyScalar(r);let a=new bn().setFromObject(i);return{h:a.max.y-a.min.y,minY:a.min.y}}var du=new R(-5,2.8,2),uu={portrait:!1,span:9.2,off:.9,zs:[-1.3,-.2],hero:[-4.4,4.6,1.3],owl:[-6.7,4,.85],stand:[-.2,3.3],cam:{box:[9,5.1],target:[0,2.5,.3],minAspect:0}},Jx={portrait:!0,span:8,off:0,zs:[-4.4,-2.5],hero:[-2.2,5.8,1.25],owl:[.2,5.4,.85],stand:[2.2,2.6],cam:{box:[6.6,4.4],target:[0,2.6,1.8],minAspect:0}},sr=new R(-1.5,0,5.4),rr=new R(5.2,0,3),bc=.6,Mc=class{constructor(t,e,n){this.sh=new va(t,e,n,{text:$x,theme:Zx});let s=this.sh;kd(`${s.base}../art/`),this.girl=s.T.girl,this.st=new wa(s,{bg:13627135,ground:10145952,fov:40,box:[7.2,3.9],dir:[0,.5,1],target:[0,1,.8],wide:{box:[9,5.1],target:[0,2.5,.3],minAspect:0}}),this.layout=uu,this._portrait=!1;let r=s.onResize;s.onResize=(a,o)=>{this._applyLayout(a/o),r(a,o)},this.opts=new Map,this.rackItems=[],this.cheerN=Math.floor(Math.random()*9),this.worlds={},this.worldId=null,this.padStyle=Da.float,this._goWorld(0,!0),/[?&]debug/.test(location.search)&&(window.__game=this),this.fade=Et("div",{class:"lw-fade"}),s.root.append(this.fade),this.owl=js("owl"),this.owl.position.set(this.layout.owl[0],.16,this.layout.owl[1]),this.owl.scale.setScalar(this.layout.owl[2]),this.owl.rotation.y=.25,this.st.add(this.owl),this.stand=this._makeStand(),this._laidOut=void 0,this._applyLayout(s.w/s.h),this.st.resize(s.w,s.h),this._makeRack(),this.save=s.save,this.save.lw||(this.save.lw={unlocked:1,done:{}}),this.st.onFrame((a,o)=>this._frame(a,o)),s.fonts().then(()=>this._start())}_pond(){let t=this.st.scene;Ye(t),this.clouds=Ni(t,7,{y:9,z:-18}),this.st.onFrame(r=>this.clouds.userData.drift(r)),Ia(t,[{t:"tree",x:-9.5,z:-5,s:5.2},{t:"tree",x:9.8,z:-4.5,s:4.6},{t:"tree",x:-13,z:-2,s:4.2},{t:"tree",x:13.5,z:-2.5,s:5},{t:"bush",x:-8,z:3.8,s:.9},{t:"bush",x:8.6,z:3.5,s:.8},{t:"rock",x:-7.4,z:4.8,s:.55},{t:"rock",x:7.2,z:5.2,s:.45},...Array.from({length:22},(r,a)=>({t:"flower",x:-12+a*1.12+Math.sin(a)*.4,z:6+a%4*.6+Math.cos(a*2)*.5}))],-.2);let e=new X(new ge(60,40),Pe(9097328,{roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.2,e.receiveShadow=!0,t.add(e);let n=new X(new ce(6.4,6.6,.3,48),Pe(13148272,{roughness:1}));n.scale.z=.62,n.position.y=-.12,t.add(n);let s=new X(new le(15,.4,3.2),Pe(8046688,{roughness:1}));s.position.set(0,-.05,3.1),s.receiveShadow=!0,t.add(s),this.water=new X(new ce(6.1,6.1,.3,48),new Yt({map:sc(256,256,r=>{let a=r.createLinearGradient(0,0,256,256);a.addColorStop(0,"#6ad0ff"),a.addColorStop(1,"#2a9ae0"),r.fillStyle=a,r.fillRect(0,0,256,256),r.strokeStyle="rgba(255,255,255,.35)",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.ellipse(o*83%256,o*57%256,28,8,0,0,Math.PI*2),r.stroke()}),roughness:.2,metalness:.1})),this.water.scale.z=.58,this.water.position.y=-.08,t.add(this.water);for(let[r,a,o]of[[-5.1,-1.7,.5],[4.9,-1.9,.6],[-4.6,1.2,.45],[5.2,1,.5],[-1.6,-2.6,.5],[2.4,-2.5,.42]]){let l=new X(new ce(o,o,.04,20,1,!1,.4,5.5),Pe(3844170));l.position.set(r,.1,a),t.add(l)}for(let r=0;r<14;r++){let a=r/14*Math.PI*1.1+Math.PI*1.05,o=new X(new ce(.03,.05,1.3+r%3*.3,6),Pe(4889146));o.position.set(Math.cos(a)*6.5,.5,Math.sin(a)*3.9),t.add(o);let l=new X(new na(.07,.25,4,8),Pe(9067050));l.position.set(o.position.x,1.15+r%3*.3,o.position.z),t.add(l)}}_goWorld(t,e){let n=tr[t%tr.length];if(this.worldId===n)return;let s=()=>{this.worlds[n]||(this.worlds[n]=yc(n),this.st.add(this.worlds[n].group));for(let r of Object.values(this.worlds))r.group.visible=r===this.worlds[n];this.world=this.worlds[n],this.worldId=n,this.padStyle=Da[this.world.pad]};if(e){s();return}this.fade.classList.add("on"),this.hero&&this.hero.act("run"),setTimeout(()=>{s(),this.fade.classList.remove("on"),this.sh.say(Hd[n],!1,2.2)},520)}_applyLayout(t){let e=t<1;if(this._laidOut===e)return;this._laidOut=e,this._portrait=e;let n=this.layout=e?Jx:uu;this.st.o.wide=n.cam,sr.set(n.stand[0],0,n.stand[1]),this.stand&&this.stand.position.copy(sr),this.standItem&&this.standItem.position.copy(sr),this.hero&&(this.hero.position.set(n.hero[0],.16,n.hero[1]),this.hero.scale.setScalar(n.hero[2])),this.owl&&(this.owl.position.set(n.owl[0],.16,n.owl[1]),this.owl.scale.setScalar(n.owl[2]));for(let s of this.opts.values())if(s.home){let r=[...this.opts.values()].indexOf(s),a=this.opts.size;s.home.set(((r+.5)/a-.5)*n.span+n.off,.1,r%2?n.zs[1]:n.zs[0])}}_makeStand(){let t=new Rt,e=new X(new ce(.9,1.05,.7,28),Pe(14194250));e.position.y=.35,e.castShadow=!0;let n=new X(new ce(1.05,1.05,.08,28),Pe(16771512));return n.position.y=.72,t.add(e,n),t.position.copy(sr),t.visible=!1,this.st.add(t),this.standItem=null,t}_makeRack(){let t=new Rt,e=new X(new le(4.6,.25,.8),Pe(14194250));e.position.y=.75,e.castShadow=!0;let n=new X(new le(4.6,1.3,.12),Pe(12088890));n.position.set(0,1.35,-.45),t.add(e,n);for(let s of[-2.1,2.1]){let r=new X(new le(.25,.75,.8),Pe(11037242));r.position.set(s,.37,0),t.add(r)}this.slots=Array.from({length:yn},(s,r)=>{let a=new X(new ce(.25,.25,.05,20),Pe(16774360));return a.position.set(-1.96+r*.56,.9,.1),t.add(a),new R(rr.x+(-1.96+r*.56)*bc,.9*bc+.35,rr.z+.1)}),t.position.copy(rr),t.scale.setScalar(bc),this.st.add(t),this.rack=t}_plaque(t,e=!1){let n=new Rt,s=new X(new ce(.62,.62,.12,32),Pe(16777215,{roughness:.35}));s.rotation.x=Math.PI/2,s.castShadow=!0;let r=new X(new Ie(.62,.05,10,32),Pe(16762938,{roughness:.3})),a=new X(new ge(1.1,1.1),new Gt({map:Ed(t,{size:e?200:180}),transparent:!0,toneMapped:!1}));a.position.z=.075;let o=new Gt({color:16767050,transparent:!0,opacity:.8,blending:Ls,depthWrite:!1}),l=new Gt({color:16771216,transparent:!0,opacity:.35,blending:Ls,depthWrite:!1}),c=new X(new Ie(.76,.03,8,48),o),h=new X(new Ie(.86,.022,8,48),l);return n.add(s,r,a,c,h),n}_option(t,e,n){let s=new Rt,r=this.padStyle.ring[e%5],a=new X(new Ie(.95,.24,12,28),Pe(r,{roughness:.4}));a.rotation.x=Math.PI/2,a.position.y=.05;let o=new X(new ce(.95,.95,.08,28),Pe(this.padStyle.disc));o.position.y=.04;let l=this.world&&this.world.padPics,c=0;if(l){let g=Rn(l[e%l.length],1.75);g.position.z=-.04,s.add(g),a.visible=!1,c=.62}else s.add(a,o);let h=null,d=null,u=.06;if(t.kind==="thing"){h=Pa(t.thing);let g=hu(h,2.15,1.8);if(u=.12+c-g.minY,h.position.set(-.1,u,0),s.add(h),t.plaque){let p=Math.max(2,u+g.h+.55),v=new X(new ce(.035,.035,p,8),Pe(12093512));v.position.set(-.1,p/2,-.25),d=this._plaque(t.plaque),d.scale.setScalar(1.3),d.position.set(-.1,p+.25,.1),s.add(v,d)}}else if(t.kind==="color")h=new X(new be(.62,28,20),new Yt({color:t.hex,roughness:.18,metalness:.05})),h.position.set(0,.95+c,0),h.castShadow=!0,s.add(h);else if(t.kind==="shape")h=new X(Ma(t.shape),new Yt({color:ka(t.color).hex,roughness:.25,metalness:.05})),h.position.set(0,1.05+c,0),h.scale.setScalar(.95),h.castShadow=!0,s.add(h);else{let g=t.kind==="number"?this.sh.T.num(t.n):t.ch,p=new X(new ce(.05,.05,.7,8),Pe(12093512));p.position.set(0,.45+c,0),d=this._plaque(g,!0),d.position.set(0,1.5+c,0),d.scale.setScalar(this.layout.portrait?1.2:1.6),s.add(p,d),h=d}let f=new X(new ce(1.25,1.25,.06,28),new Gt({color:16773754,transparent:!0,opacity:0,depthWrite:!1}));f.position.y=.02;let m=new X(new be(1.5,10,8),new Gt({visible:!1}));m.userData.id=t.id,m.position.set(.2,.9,0),s.add(f,m);let x=new R(((e+.5)/n-.5)*this.layout.span+this.layout.off,.1,e%2?this.layout.zs[1]:this.layout.zs[0]);return s.position.copy(du),s.scale.setScalar(.01),this.st.add(s),{g:s,o:t,home:x,item:h,plaque:d,baseY:u,ring:a,glow:f,hit:m,ph:e*1.7,wig:0,gone:!1,arrive:-.35-e*.28,from:du.clone()}}_showStand(t){if(this.standItem&&(this.st.scene.remove(this.standItem),this.standItem=null),this.stand.visible=!1,!t)return;this.stand.visible=!0;let e=new Rt;if(t.type==="thing"){let n=Pa(t.thing),s=hu(n,2.5,2.3);n.position.y=.76-s.minY,e.add(n),n.userData.art||(e.userData.spin=n)}else if(t.type==="apples"){let n=t.n,s=n>10?5:n>6?4:3,r=Math.ceil(n/s),a=[];for(let o=0;o<n;o++){let l=Pa("apple");l.scale.setScalar(n>10?.5:.62);let c=Math.floor(o/s),h=o%s;l.position.set((h-(s-1)/2)*.42+c%2*.1,.76,(c-(r-1)/2)*.4),e.add(l),a.push(l)}e.userData.apples=a}else if(t.type==="letter"){let n=this._plaque(t.ch,!0);n.position.set(0,1.7,0),n.scale.setScalar(1.5),e.add(n)}e.position.copy(sr),this.st.add(e),this.standItem=e}_start(){let t=this.sh.cfg&&(this.sh.cfg.gender==="girl"||this.sh.cfg.gender==="boy")?this.sh.cfg.gender:null;!this.save.lw.hero&&t&&(this.save.lw.hero=t,this.save.lw.look={},this.sh.saveNow()),this.save.lw.hero?(this._makeHero(this.save.lw.hero,this.save.lw.look),this._startPage()):this._chooseHero()}_makeHero(t,e){this.hero&&this.st.scene.remove(this.hero);let n=js(t);n.position.set(this.layout.hero[0],.16,this.layout.hero[1]),n.scale.setScalar(this.layout.hero[2]),n.rotation.y=.2,this.st.add(n),this.hero=n,/[?&]debug/.test(location.search)&&(window.__hero=n),this.kind=t,this.girl=t==="girl",this.sh.setGender(t)}_chooseHero(){let t=this.sh;this._clearRound(),t.clear(),this.st.mode="hero",t.sound.setMode("menu"),t.layer.append(Et("div",{class:"lk-top"},t.backBtn(),Et("span"),t.soundBtn())),this.hero&&(this.st.scene.remove(this.hero),this.hero=null);let e={boy:js("boy"),girl:js("girl")};e.boy.position.set(-2.1,0,2.2),e.girl.position.set(2.1,0,2.2);for(let o of Object.values(e))o.scale.setScalar(1.25),this.st.add(o),o.act("wave");this.previews=e;let n={},s=null,r=Et("div",{class:"lw-hero"}),a=o=>{s=o,t.sound.play("right"),e[o].act("celebrate"),this.girl=o==="girl",t.setGender(o),this.girl=o==="girl",t.setGender(o);let l=o==="boy"?"girl":"boy";this.st.scene.remove(e[l]),e[o].position.set(0,0,2.2),r.replaceChildren(Et("button",{class:"lk-btn",onclick:()=>{t.sound.play("win"),this.save.lw.hero=s,this.save.lw.look={hair:n.hair,cloth:n.cloth},t.saveNow(),this.st.scene.remove(e[o]),this.previews=null,this._makeHero(s,n),this.hero.act("celebrate"),t.speak(t.t("letsGo")),setTimeout(()=>this._startPage(),1600)}},"\u25B6 "+t.t("play")))};r.append(Et("div",{class:"lw-who"},Et("button",{class:"lw-boy",onclick:()=>a("boy")},"\u{1F466}  \u0648\u0644\u062F"),Et("button",{class:"lw-girl",onclick:()=>a("girl")},"\u{1F467}  \u0628\u0646\u062A"))),t.layer.append(Et("div",{class:"lw-herobar"},Et("div",{class:"lw-title",style:"font-size:calc(var(--u)*6.5)"},t.t("chooseHero")),r)),t.speak(t.t("chooseHero"))}_startPage(){let t=this.sh.cfg&&this.sh.cfg.level;this.sh.cfg&&(this.sh.cfg.level=null),t&&ir(this.sh.age).some(e=>e.id===t)?this._begin(t):this._levels()}_levels(){let t=this.sh;this._clearRound(),t.clear(),this.st.mode="menu",t.sound.setSuspense(!1),t.sound.setMode("menu"),t.sound.energy=0,t.layer.append(Et("div",{class:"lk-top"},t.backBtn(),Et("span"),t.soundBtn()));let e=1/0,n=ir(t.age),s=n.map((l,c)=>{let h=c+1>e,d=!!this.save.lw.done[l.id];return Et("button",{class:`lw-tile${h?" lock":""}${d?" done":""}`,"aria-label":l.ar,disabled:h||null,onclick:()=>{t.sound.play("tap"),this._begin(l.id)}},Et("i",{},h?"\u{1F512}":l.emoji),Et("b",{},t.T.num(c+1)),Et("span",{},l.ar),d?Et("u",{},"\u2B50"):null)}),r=Et("div",{class:"lk-dim",style:"background:rgba(40,30,90,.18)"},Et("div",{class:"lw-card"},Et("div",{class:"lw-title"},t.t("pick")),Et("div",{class:"lw-grid"},s))),a=t.layer.querySelector(".lk-top"),o=new Image;o.className="lw-pic-img",o.alt="",o.onload=()=>{this.st.mode==="menu"&&(a&&a.remove(),t.layer.append(this._levelsPicture(o,n)))},o.onerror=()=>{this.st.mode==="menu"&&t.layer.append(r)},o.src=`${t.base}../art/levels_page.webp`,this.owl.act("cheer"),this.owl.look(0)}_pictureFrame(t,e){let n=this.sh,s=Et("div",{class:"lw-pic"}),r=t.cloneNode();r.className="lw-pic-blur";let a=Et("div",{class:"lw-pic-box"},t),o=()=>{let c=n.root.clientWidth||800,h=n.root.clientHeight||450,d=Math.min(c,h*e);a.style.width=`${d}px`,a.style.height=`${d/e}px`};o(),new ResizeObserver(o).observe(n.root);let l=(c,h,d,u,f)=>(c.style.left=`${(h-u/2)*100}%`,c.style.top=`${(d-f/2)*100}%`,c.style.width=`${u*100}%`,c.style.height=`${f*100}%`,a.append(c),c);return s.append(r,a),{wrap:s,place:l}}_levelsPicture(t,e){let n=this.sh,{wrap:s,place:r}=this._pictureFrame(t,1226/1283),a=[.723,.532,.343],o=[.327,.489,.647,.807],l=new Set(e.map(u=>u.id));xs.forEach((u,f)=>{let m=a[f%3],x=o[Math.floor(f/3)],g=l.has(u.id),p=Et("button",{class:"lw-hit","aria-label":u.ar,disabled:!g||null,onclick:()=>{n.sound.play("tap"),this._begin(u.id)}});r(p,m,x,.17,.148),g||p.classList.add("off"),this.save.lw.done[u.id]&&r(Et("i",{class:"lw-star"},"\u2B50"),m+.066,x-.07,.05,.045)});let c=e.find(u=>!this.save.lw.done[u.id])||e[0];r(Et("button",{class:"lw-hit","aria-label":"next",onclick:()=>{n.sound.play("tap"),this._begin(c.id)}}),.114,.46,.22,.12);let h=n.backBtn();h.classList.add("lw-hit"),r(h,.069,.058,.1,.095);let d=n.soundBtn();return d.classList.add("lw-hit"),r(d,.94,.058,.1,.095),s}_clearRound(){for(let t of this.opts.values())this.st.scene.remove(t.g);this.opts.clear(),this.leap=null;for(let t of this.rackItems)this.st.scene.remove(t);this.rackItems=[],this._showStand(null),this.st.setPicks([],null)}_begin(t){let e=this.sh;this._clearRound(),this.levelId=t,this.level=xs.find(n=>n.id===t),this._goWorld(Math.max(0,ir(e.age).findIndex(n=>n.id===t))),this.play=new Na(t,e.age,Math.floor(Math.random()*1e9)),e.clear(),this.lightDots=e.topBar(yn,"\u2B50"),this.lightDots(0),this.sign=Et("div",{class:"lw-sign"}),this.signText=Et("span"),this.signIcon=Et("i",{},this._barIcon()),this.sign.append(this.signIcon,this.signText,Et("button",{class:"lw-again","aria-label":e.t("again"),onclick:n=>{n.stopPropagation(),this._say()}},"\u{1F50A}")),e.layer.append(this.sign),e.sound.setMode("play"),e.sound.energy=0,this.st.mode="busy",setTimeout(()=>this._ask(),this.worldChanged?1300:700)}_barIcon(){let t=this.level&&this.level.mode;return["pick","shape","animal","habit","word"].includes(t)?"\u{1F440}":this.level.emoji}_ask(){let t=this.play.cur;for(let n of this.opts.values())this.st.scene.remove(n.g);this.opts.clear(),this._showStand(t.show);let e=t.options.length;this.owl.act("toss"),t.options.forEach((n,s)=>this.opts.set(n.id,this._option(n,s,e))),this.st.setPicks([...this.opts.values()],n=>this._tap(n)),this.st.focus=null,this.signText.textContent=t.prompt,this.sign.classList.remove("pop"),this.sign.offsetWidth,this.sign.classList.add("pop"),this.st.mode="wait",this.sh.sound.setSuspense(!0),this.owl.look(0),this._say()}_say(){let t=this.play.cur;t&&(this.sh.sound.play("sparkle"),this.owl.act("point"),this.hero&&(this.hero.look(0),this.hero.act("point")),this.sh.speak(t.prompt))}_tap(t){if(this.st.mode!=="wait")return;let e=this.play.cur,n=this.play.tap(t),s=this.opts.get(t);if(!n.ok){s.wig=.6,this.sh.sound.play("bump"),this.owl.act("think"),this.hero&&this.hero.act("think"),this.sh.say(this.sh.t("no"),!1,1.6),n.firstMiss&&this.sh.round(this.level.skill,!1,e.answer),setTimeout(()=>this.st.mode==="wait"&&this._say(),900);return}n.first&&this.sh.round(this.level.skill,!0,e.answer),this.st.mode="found",this.sh.sound.setSuspense(!1),this.st.setPicks([],null);let r=this.play.round;this.lightDots(r),this.sh.sound.energy=r/5,this.sh.sound.play("splash"),this.sh.sound.play("note",Fa[r*2%Fa.length]),this.sh.sound.play("right"),this.sh.sound.play("fanfare"),this.sh.sound.play("applause"),setTimeout(()=>this.sh.sound.play("crowd"),160),this.owl.act(r%2?"cheer":"clap"),this.hero&&this.hero.act(r%3===0?"celebrate":r%3===1?"giggle":"clap"),this.owl.look(s.g.position.x);for(let[c,h]of this.opts)c!==t&&(h.gone=!0);this.leap={o:s,t:0,from:s.g.position.clone(),slot:this.slots[r-1]};let a=cu(this.girl,this.cheerN++),o=[a];e.reward&&o.push(e.reward),this.signText.textContent=e.reward||a,this.signIcon.textContent="\u2B50",this.sh.say(a,!1,1.6),this._advDone=!1;let l=()=>{clearTimeout(this._advT),!this._advDone&&(this._advDone=!0,this._advance(n))};setTimeout(()=>{if(e.countAloud&&this.standItem&&this.standItem.userData.apples){let c=Zd.slice(0,e.countAloud).map(h=>h[0]);this.sh.speak([a,...c],h=>{let d=this.standItem&&this.standItem.userData.apples[h-1];d&&(d.userData.jump=.4),h&&this.sh.sound.play("note",Fa[h%Fa.length])},l)}else this.sh.speak(o,null,l)},600),this._advT=setTimeout(l,9e3+(e.countAloud||0)*1700)}_advance(t){setTimeout(()=>{this.signIcon.textContent=this._barIcon(),t.finished?this._levelDone():this._ask()},700)}_levelDone(){let t=this.sh;this.st.mode="end",t.sound.setSuspense(!1),this.sign.remove();let e=ir(t.age),n=e.findIndex(o=>o.id===this.levelId);if(this.save.lw.done[this.levelId]=!0,this.save.lw.unlocked=Math.max(this.save.lw.unlocked||1,n+2),t.saveNow(),this.owl.act("cheer"),this.hero&&this.hero.act("celebrate"),this.st.sparkle(new R(rr.x,2.2,rr.z),40),!(n+1<e.length)){t.sound.setMode("calm"),t.finishCard(this.level.ar,this.level.emoji,()=>this._begin(this.levelId),null,()=>this._levels());return}let r=!t.done;t.done=!0,t.complete(),t.sound.play("win"),t.sound.play("applause"),setTimeout(()=>t.sound.play("crowd"),200),setTimeout(()=>{t.sound.play("yay"),t.sound.play("star")},900),t.speak(r?`${t.t("greatSay")} ${t.t("newStarSay")}`:t.t("greatSay"));let a=e[n+1].id;setTimeout(()=>this._walkOn(a,n+1),3e3)}_walkOn(t,e){let n=this.sh;this._clearRound();let s=this.hero,r=tr[e%tr.length];if(this.worldId===r||!s){this._goWorld(e,!0),this._begin(t);return}this.worlds[r]||(this.worlds[r]=yc(r),this.st.add(this.worlds[r].group));let a=this.world,o=this.worlds[r],l=34;o.group.visible=!0,o.group.position.x=l,a.seam("old",wc),o.seam("new",wc);let c=o.group.children[0];c&&c.material&&(c.material.transparent=!0,c.material.opacity=0);let h=0,d=null,u=Ld(this.kind)*1e3,f=()=>{n.sound.play("step",h++%2),d=setTimeout(f,u)};d=setTimeout(f,80),s.act("walk"),this.owl.act("wave"),n.sound.setMode("calm"),n.sound.play("whoosh"),this.scroll={from:a,to:o,sky:c,t:0,dur:4.2,SHIFT:l,then:()=>{clearTimeout(d),a.seam("off"),o.seam("off"),a.group.visible=!1,a.group.position.x=0,o.group.position.x=0,c&&c.material&&(c.material.opacity=1,c.material.transparent=!1),this.world=o,this.worldId=r,this.padStyle=Da[o.pad],s.act("wave"),setTimeout(()=>this._begin(t),1400)}}}_frame(t,e){if(this.owl.update(t,e),this.hero&&this.hero.update(t,e),this.scroll){let r=this.scroll;r.t+=t/r.dur;let a=Math.min(1,r.t),o=a*a*(3-2*a);r.from.group.position.x=-r.SHIFT*o,r.to.group.position.x=r.SHIFT*(1-o);let l=wc-r.SHIFT*o;if(r.from.seam("old",l),r.to.seam("new",l),r.sky&&r.sky.material&&(r.sky.material.opacity=o),r.to.update(t,e),this.hero&&(this.hero.userData.state.act="walk"),a>=1){let c=r.then;this.scroll=null,c()}}if(this.walk){let r=this.walk;r.t+=t/r.dur;let a=Math.min(1,r.t);if(r.hero.position.x=r.from+(r.to-r.from)*(a*a*(3-2*a)),a>=1){let o=r.then;this.walk=null,o()}}if(this.previews)for(let r of Object.values(this.previews))r.parent&&(r.update(t,e),Math.random()<.004&&r.act("wave"));this.world&&this.world.update(t,e);let n=this.play&&this.st.mode==="wait"&&this.play.cur?this.play.hint:null,s=this.st.mode==="wait"?this.st.focusedId():null;for(let[r,a]of this.opts){if(a.gone){a.g.position.x+=(a.g.position.x<0?-1:1)*t*6,a.g.scale.multiplyScalar(Math.max(0,1-t*1.5));continue}if(this.leap&&this.leap.o===a)continue;if(a.arrive<1){a.arrive+=t*2.4;let c=Math.max(0,Math.min(1,a.arrive));a.arrive>0&&(a.g.position.lerpVectors(a.from,a.home,c),a.g.position.y+=Math.sin(c*Math.PI)*2,a.g.scale.setScalar(Math.max(.01,c)),c>=1&&!a.landed&&(a.landed=!0,this.sh.sound.play("splash")));continue}let o=e*.55+a.ph;a.g.position.set(a.home.x+Math.cos(o)*.55,.1+Math.sin(e*2+a.ph)*.04,a.home.z+Math.sin(o*1.3)*.4),a.g.rotation.y=Math.sin(e*.8+a.ph)*.35,a.ring.rotation.z=Math.sin(e*2+a.ph)*.06,a.o.kind==="thing"&&a.item&&(a.item.position.y=a.baseY+Math.abs(Math.sin(e*2.4+a.ph))*.06),a.o.kind==="shape"&&(a.item.rotation.y=Math.sin(e*1.4+a.ph)*.5),a.o.kind==="color"&&(a.item.position.y=.95+Math.abs(Math.sin(e*2.2+a.ph))*.12);let l=a.item&&a.item.userData&&a.item.userData.inner&&a.item.userData.inner.userData.wings;l&&(l.scale.x=.55+Math.abs(Math.sin(e*14+a.ph))*.45),a.glow.material.opacity=r===n?.55+Math.sin(e*6)*.2:r===s?.4:0,a.glow.material.color.setHex(r===s?8048895:16773754),r===n&&this.owl.look(a.g.position.x),a.wig>0?(a.wig-=t,a.g.rotation.z=Math.sin(a.wig*40)*.35*a.wig):a.g.rotation.z=0}if(this.leap){let r=this.leap;r.t+=t/1.1;let a=Math.min(1,r.t),o=a*a*(3-2*a);if(r.o.g.position.lerpVectors(r.from,new R(r.slot.x,r.slot.y-.2,r.slot.z),o),r.o.g.position.y+=Math.sin(a*Math.PI)*2.4,r.o.g.scale.setScalar(Math.max(.01,1-.58*o)),r.o.g.rotation.y=o*Math.PI*2,a>=1){let l=r.o.item,c=new R,h=new R;l.getWorldPosition(c),l.getWorldScale(h),r.o.g.remove(l),l.position.copy(c),l.scale.copy(h).multiplyScalar(.8*.62),l.rotation.set(0,0,0),this.st.add(l),this.rackItems.push(l),this.st.scene.remove(r.o.g),this.opts.delete(r.o.o.id),this.st.sparkle(new R(r.slot.x,r.slot.y+.3,r.slot.z),14),this.sh.sound.play("pop"),this.leap=null}}if(this.standItem&&this.standItem.userData.apples)for(let r of this.standItem.userData.apples)r.userData.jump>0?(r.userData.jump-=t,r.position.y=.76+Math.sin(Math.max(0,r.userData.jump)*Math.PI/.4)*.25):r.position.y=.76;this.standItem&&this.standItem.userData.spin&&(this.standItem.userData.spin.rotation.y=e*.8)}pause(){this.sh.pause()}dispose(){clearTimeout(this._advT),this.st.dispose(),this.sh.dispose()}},jx=`
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
.lw-pic{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#6cc0f0}
.lw-pic-blur{position:absolute;inset:-5%;width:110%;height:110%;object-fit:cover;filter:blur(18px) brightness(.9);transform:scale(1.05)}
.lw-pic-box{position:relative}
.lw-pic-img{display:block;width:100%;height:100%;user-select:none;-webkit-user-drag:none}
.lw-hit{position:absolute;border:none;background:transparent;padding:0;margin:0;cursor:pointer;opacity:0;border-radius:18%}
.lw-hit:focus-visible{opacity:1;outline:calc(var(--u)*.8) solid #fff200;background:rgba(255,242,0,.18)}
.lw-hit.off{pointer-events:none}
.lw-star{position:absolute;font-style:normal;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);pointer-events:none;filter:drop-shadow(0 2px 2px rgba(0,0,0,.35))}
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
`,Ec={start(i,t,e){document.getElementById("lw-style")||document.head.append(Et("style",{id:"lw-style"},jx));let n=new Mc(i,t||{},e);return Ec.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.LearnLetters=Ec;var fy=Ec;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
