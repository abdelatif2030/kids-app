(()=>{var yo="170";var Vl=0,Zo=1,Hl=2;var sl=1,Gl=2,an=3,Sn=0,Se=1,Ve=2,In=0,mi=1,$o=2,Jo=3,Ko=4,Wl=5,zn=100,Xl=101,ql=102,Yl=103,Zl=104,$l=200,Jl=201,Kl=202,Ql=203,Qr=204,jr=205,jl=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,ta=0,ea=1,na=2,Ci=3,ia=4,sa=5,ra=6,aa=7,rl=0,ch=1,lh=2,Mn=0,hh=1,uh=2,dh=3,fh=4,ph=5,gh=6,mh=7;var al=300,vi=301,yi=302,oa=303,ca=304,lr=306,Xi=1e3,Hn=1001,la=1002,Ge=1003,Ah=1004;var rs=1005;var Ze=1006,Cr=1007;var Gn=1008;var un=1009,ol=1010,cl=1011,qi=1012,Io=1013,Wn=1014,on=1015,ns=1016,Mo=1017,So=1018,Ii=1020,ll=35902,hl=1021,ul=1022,He=1023,dl=1024,fl=1025,Ai=1026,Mi=1027,pl=1028,bo=1029,gl=1030,wo=1031;var Eo=1033,Rs=33776,Ps=33777,Ls=33778,Ds=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ga=37492,ma=37496,Aa=37808,_a=37809,xa=37810,Ca=37811,va=37812,ya=37813,Ia=37814,Ma=37815,Sa=37816,ba=37817,wa=37818,Ea=37819,Ta=37820,Ra=37821,Us=36492,Pa=36494,La=36495,ml=36283,Da=36284,Ua=36285,Na=36286;var Ns=2300,Fa=2301,vr=2302,Qo=2400,jo=2401,tc=2402;var _h=3200,xh=3201;var Al=0,Ch=1,yn="",ve="srgb",Ti="srgb-linear",hr="linear",Qt="srgb";var jn=7680;var ec=519,vh=512,yh=513,Ih=514,_l=515,Mh=516,Sh=517,bh=518,wh=519,nc=35044;var ic="300 es",cn=2e3,Fs=2001,bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=1234567,zi=Math.PI/180,Yi=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function Eh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Th(i,t,e){return i!==t?(e-i)/(t-i):0}function ki(i,t,e){return(1-e)*i+e*t}function Rh(i,t,e,n){return ki(i,t,1-Math.exp(-e*n))}function Ph(i,t=1){return t-Math.abs(To(i,t*2)-t)}function Lh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nh(i,t){return i+Math.random()*(t-i)}function Fh(i){return i*(.5-Math.random())}function Oh(i){i!==void 0&&(sc=i);let t=sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bh(i){return i*zi}function zh(i){return i*Yi}function kh(i){return(i&i-1)===0&&i!==0}function Vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xl={DEG2RAD:zi,RAD2DEG:Yi,generateUUID:Kn,clamp:pe,euclideanModulo:To,mapLinear:Eh,inverseLerp:Th,lerp:ki,damp:Rh,pingpong:Ph,smoothstep:Lh,smootherstep:Dh,randInt:Uh,randFloat:Nh,randFloatSpread:Fh,seededRandom:Oh,degToRad:Bh,radToDeg:zh,isPowerOfTwo:kh,ceilPowerOfTwo:Vh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Gh,normalize:xe,denormalize:fi},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],C=s[0],g=s[3],f=s[6],b=s[1],M=s[4],v=s[7],F=s[2],E=s[5],T=s[8];return r[0]=a*C+o*b+c*F,r[3]=a*g+o*M+c*E,r[6]=a*f+o*v+c*T,r[1]=l*C+h*b+u*F,r[4]=l*g+h*M+u*E,r[7]=l*f+h*v+u*T,r[2]=d*C+p*b+m*F,r[5]=d*g+p*M+m*E,r[8]=d*f+p*v+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/m;return t[0]=u*C,t[1]=(s*l-h*n)*C,t[2]=(o*n-s*a)*C,t[3]=d*C,t[4]=(h*e-s*c)*C,t[5]=(s*r-o*e)*C,t[6]=p*C,t[7]=(n*c-l*e)*C,t[8]=(a*e-n*r)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yr=new Bt;function Cl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=Os("canvas");return i.style.display="block",i}var rc={};function Oi(i){i in rc||(rc[i]=!0,console.warn(i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=hn(i.r),i.g=hn(i.g),i.b=hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?hr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ac=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],cc=[.3127,.329],lc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ti]:{primaries:ac,whitePoint:cc,transfer:hr,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:ac,whitePoint:cc,transfer:Qt,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var ti,Oa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Os("canvas")),ti.width=t.width,ti.height=t.height;let n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hn(e[n]/255)*255):e[n]=hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zh=0,Bs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ir(s[a].image)):r.push(Ir(s[a]))}else r=Ir(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ir(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $h=0,Re=class i extends bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Ze,a=Gn,o=He,c=un,l=i.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Kn(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=al;Re.DEFAULT_ANISOTROPY=1;var oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],C=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-C)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+C)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(p+1)/2,F=(f+1)/2,E=(h+d)/4,T=(u+C)/4,L=(m+g)/4;return M>v&&M>F?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=T/n):v>F?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=L/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=T/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-C)*(u-C)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-C)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Bs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zs=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],C=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=C;return}if(u!==C||c!==d||l!==p||h!==m){let g=1-o,f=c*d+l*p+h*m+u*C,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let F=Math.sqrt(M),E=Math.atan2(F,f*b);g=Math.sin(g*E)/F,o=Math.sin(o*E)/F}let v=o*b;if(c=c*g+d*v,l=l*g+p*v,h=h*g+m*v,u=u*g+C*v,g===1-o){let F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-o*p,t[e+2]=l*m+h*p+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mr=new U,uc=new wn,Xn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Oe):Oe.fromBufferAttribute(r,a),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),os.subVectors(this.max,Di),ei.subVectors(t.a,Di),ni.subVectors(t.b,Di),ii.subVectors(t.c,Di),mn.subVectors(ni,ei),An.subVectors(ii,ni),Ln.subVectors(ei,ii);let e=[0,-mn.z,mn.y,0,-An.z,An.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,An.z,0,-An.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-An.y,An.x,0,-Ln.y,Ln.x,0];return!Sr(e,ei,ni,ii,os)||(e=[1,0,0,0,1,0,0,0,1],!Sr(e,ei,ni,ii,os))?!1:(cs.crossVectors(mn,An),e=[cs.x,cs.y,cs.z],Sr(e,ei,ni,ii,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},tn=[new U,new U,new U,new U,new U,new U,new U,new U],Oe=new U,as=new Xn,ei=new U,ni=new U,ii=new U,mn=new U,An=new U,Ln=new U,Di=new U,os=new U,cs=new U,Dn=new U;function Sr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);let o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Jh=new Xn,Ui=new U,br=new U,Zi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);let e=Ui.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(br)),this.expandByPoint(Ui.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},en=new U,wr=new U,ls=new U,_n=new U,Er=new U,hs=new U,Tr=new U,ks=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wr.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(wr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ls),o=_n.dot(this.direction),c=-_n.dot(ls),l=_n.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let C=1/h;u*=C,d*=C,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wr).addScaledVector(ls,d),p}intersectSphere(t,e){en.subVectors(t.center,this.origin);let n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){Er.subVectors(e,t),hs.subVectors(n,t),Tr.crossVectors(Er,hs);let a=this.direction.dot(Tr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);let c=o*this.direction.dot(hs.crossVectors(_n,hs));if(c<0)return null;let l=o*this.direction.dot(Er.cross(_n));if(l<0||c+l>a)return null;let h=-o*_n.dot(Tr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,m,C,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,C,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,C,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=C,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,C=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-C*l,e[9]=-o*c,e[2]=C-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,C=l*u;e[0]=d+C*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=C+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,C=l*u;e[0]=d-C*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=C-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,C=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+C,e[1]=c*u,e[5]=C*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,m=o*c,C=o*l;e[0]=c*h,e[4]=C-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-C*u}else if(t.order==="XZY"){let d=a*c,p=a*l,m=o*c,C=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+C,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=C*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Qh)}lookAt(t,e,n){let s=this.elements;return Ee.subVectors(t,e),Ee.lengthSq()===0&&(Ee.z=1),Ee.normalize(),xn.crossVectors(n,Ee),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ee.x+=1e-4:Ee.z+=1e-4,Ee.normalize(),xn.crossVectors(n,Ee)),xn.normalize(),us.crossVectors(Ee,xn),s[0]=xn.x,s[4]=us.x,s[8]=Ee.x,s[1]=xn.y,s[5]=us.y,s[9]=Ee.y,s[2]=xn.z,s[6]=us.z,s[10]=Ee.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],C=n[6],g=n[10],f=n[14],b=n[3],M=n[7],v=n[11],F=n[15],E=s[0],T=s[4],L=s[8],y=s[12],_=s[1],w=s[5],H=s[9],O=s[13],k=s[2],Z=s[6],V=s[10],tt=s[14],G=s[3],at=s[7],pt=s[11],Ct=s[15];return r[0]=a*E+o*_+c*k+l*G,r[4]=a*T+o*w+c*Z+l*at,r[8]=a*L+o*H+c*V+l*pt,r[12]=a*y+o*O+c*tt+l*Ct,r[1]=h*E+u*_+d*k+p*G,r[5]=h*T+u*w+d*Z+p*at,r[9]=h*L+u*H+d*V+p*pt,r[13]=h*y+u*O+d*tt+p*Ct,r[2]=m*E+C*_+g*k+f*G,r[6]=m*T+C*w+g*Z+f*at,r[10]=m*L+C*H+g*V+f*pt,r[14]=m*y+C*O+g*tt+f*Ct,r[3]=b*E+M*_+v*k+F*G,r[7]=b*T+M*w+v*Z+F*at,r[11]=b*L+M*H+v*V+F*pt,r[15]=b*y+M*O+v*tt+F*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],C=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+C*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],C=t[13],g=t[14],f=t[15],b=u*g*l-C*d*l+C*c*p-o*g*p-u*c*f+o*d*f,M=m*d*l-h*g*l-m*c*p+a*g*p+h*c*f-a*d*f,v=h*C*l-m*u*l+m*o*p-a*C*p-h*o*f+a*u*f,F=m*u*c-h*C*c-m*o*d+a*C*d+h*o*g-a*u*g,E=e*b+n*M+s*v+r*F;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=b*T,t[1]=(C*d*r-u*g*r-C*s*p+n*g*p+u*s*f-n*d*f)*T,t[2]=(o*g*r-C*c*r+C*s*l-n*g*l-o*s*f+n*c*f)*T,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*T,t[4]=M*T,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*T,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*T,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*T,t[8]=v*T,t[9]=(m*u*r-h*C*r-m*n*p+e*C*p+h*n*f-e*u*f)*T,t[10]=(a*C*r-m*o*r+m*n*l-e*C*l-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*T,t[12]=F*T,t[13]=(h*C*s-m*u*s+m*n*d-e*C*d-h*n*g+e*u*g)*T,t[14]=(m*o*s-a*C*s-m*n*c+e*C*c+a*n*g-e*o*g)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,m=r*u,C=a*h,g=a*u,f=o*u,b=c*l,M=c*h,v=c*u,F=n.x,E=n.y,T=n.z;return s[0]=(1-(C+f))*F,s[1]=(p+v)*F,s[2]=(m-M)*F,s[3]=0,s[4]=(p-v)*E,s[5]=(1-(d+f))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(m+M)*T,s[9]=(g-b)*T,s[10]=(1-(d+C))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=si.set(s[0],s[1],s[2]).length(),a=si.set(s[4],s[5],s[6]).length(),o=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);let l=1/r,h=1/a,u=1/o;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=u,Be.elements[9]*=u,Be.elements[10]*=u,e.setFromRotationMatrix(Be),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=cn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===cn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Fs)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,m,C;if(o===cn)m=(a+r)*u,C=-2*u;else if(o===Fs)m=r*u,C=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=C,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},si=new U,Be=new re,Kh=new U(0,0,0),Qh=new U(1,1,1),xn=new U,us=new U,Ee=new U,dc=new re,fc=new wn,$e=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var $i=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jh=0,pc=new U,ri=new wn,nn=new re,ds=new U,Ni=new U,tu=new U,eu=new wn,gc=new U(1,0,0),mc=new U(0,1,0),Ac=new U(0,0,1),_c={type:"added"},nu={type:"removed"},ai={type:"childadded",child:null},Rr={type:"childremoved",child:null},Ie=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new $e,n=new wn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Bt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $i,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ni,ds,this.up):nn.lookAt(ds,Ni,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(nn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_c),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_c),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new U(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ze=new U,sn=new U,Pr=new U,rn=new U,oi=new U,ci=new U,xc=new U,Lr=new U,Dr=new U,Ur=new U,Nr=new oe,Fr=new oe,Or=new oe,kn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ze.subVectors(t,e),s.cross(ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ze.subVectors(s,e),sn.subVectors(n,e),Pr.subVectors(t,e);let a=ze.dot(ze),o=ze.dot(sn),c=ze.dot(Pr),l=sn.dot(sn),h=sn.dot(Pr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Nr.setScalar(0),Fr.setScalar(0),Or.setScalar(0),Nr.fromBufferAttribute(t,e),Fr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Nr,r.x),a.addScaledVector(Fr,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(t,e,n,s){return ze.subVectors(n,e),sn.subVectors(t,e),ze.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),ze.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;oi.subVectors(s,n),ci.subVectors(r,n),Lr.subVectors(t,n);let c=oi.dot(Lr),l=ci.dot(Lr);if(c<=0&&l<=0)return e.copy(n);Dr.subVectors(t,s);let h=oi.dot(Dr),u=ci.dot(Dr);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(oi,a);Ur.subVectors(t,r);let p=oi.dot(Ur),m=ci.dot(Ur);if(m>=0&&p<=m)return e.copy(r);let C=p*l-c*m;if(C<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(ci,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return xc.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(xc,o);let f=1/(g+C+d);return a=C*f,o=d*f,e.copy(n).addScaledVector(oi,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Br(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=To(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Br(a,r,t+1/3),this.g=Br(a,r,t),this.b=Br(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=vl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return qt.fromWorkingColorSpace(_e.copy(this),t),Math.round(pe(_e.r*255,0,255))*65536+Math.round(pe(_e.g*255,0,255))*256+Math.round(pe(_e.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(_e.copy(this),e);let n=_e.r,s=_e.g,r=_e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=ve){qt.fromWorkingColorSpace(_e.copy(this),t);let e=_e.r,n=_e.g,s=_e.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(fs);let n=ki(Cn.h,fs.h,e),s=ki(Cn.s,fs.s,e),r=ki(Cn.l,fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_e=new Ht;Ht.NAMES=vl;var iu=0,qn=class extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Kn(),this.name="",this.blending=mi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=jr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Si=class extends qn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ce=new U,ps=new ct,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}};var Vs=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hs=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},su=0,Le=new re,zr=new Ie,li=new U,Te=new Xn,Fi=new Xn,de=new U,fn=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cl(t)?Hs:Vs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Te.min,Fi.min),Te.expandByPoint(de),de.addVectors(Te.max,Fi.max),Te.expandByPoint(de)):(Te.expandByPoint(Fi.min),Te.expandByPoint(Fi.max))}Te.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)de.fromBufferAttribute(o,l),c&&(li.fromBufferAttribute(t,l),de.add(li)),s=Math.max(s,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new U,c[L]=new U;let l=new U,h=new U,u=new U,d=new ct,p=new ct,m=new ct,C=new U,g=new U;function f(L,y,_){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(C.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(w),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(w),o[L].add(C),o[y].add(C),o[_].add(C),c[L].add(g),c[y].add(g),c[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,y=b.length;L<y;++L){let _=b[L],w=_.start,H=_.count;for(let O=w,k=w+H;O<k;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new U,v=new U,F=new U,E=new U;function T(L){F.fromBufferAttribute(s,L),E.copy(F);let y=o[L];M.copy(y),M.sub(F.multiplyScalar(F.dot(y))).normalize(),v.crossVectors(E,y);let w=v.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,w)}for(let L=0,y=b.length;L<y;++L){let _=b[L],w=_.start,H=_.count;for(let O=w,k=w+H;O<k;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),C=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,C),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,C),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(C,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let C=0,g=c.length;C<g;C++){o.isInterleavedBufferAttribute?p=c[C]*o.data.stride+o.offset:p=c[C]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=new re,Un=new ks,gs=new Zi,vc=new U,ms=new U,As=new U,_s=new U,kr=new U,xs=new U,yc=new U,Cs=new U,fe=class extends Ie{constructor(t=new fn,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(kr.fromBufferAttribute(u,t),a?xs.addScaledVector(kr,h):xs.addScaledVector(kr.sub(e),h))}e.add(xs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(gs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(gs,vc)===null||Un.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,C=d.length;m<C;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=b,F=M;v<F;v+=3){let E=o.getX(v),T=o.getX(v+1),L=o.getX(v+2);s=vs(this,f,t,n,l,h,u,E,T,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),C=Math.min(o.count,p.start+p.count);for(let g=m,f=C;g<f;g+=3){let b=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);s=vs(this,a,t,n,l,h,u,b,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,C=d.length;m<C;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=b,F=M;v<F;v+=3){let E=v,T=v+1,L=v+2;s=vs(this,f,t,n,l,h,u,E,T,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),C=Math.min(c.count,p.start+p.count);for(let g=m,f=C;g<f;g+=3){let b=g,M=g+1,v=g+2;s=vs(this,a,t,n,l,h,u,b,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ru(i,t,e,n,s,r,a,o){let c;if(t.side===Se?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Sn,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cs);return l<e.near||l>e.far?null:{distance:l,point:Cs.clone(),object:i}}function vs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ms),i.getVertexPosition(c,As),i.getVertexPosition(l,_s);let h=ru(i,t,e,n,ms,As,_s,yc);if(h){let u=new U;kn.getBarycoord(yc,ms,As,_s,u),s&&(h.uv=kn.getInterpolatedAttribute(s,o,c,l,u,new ct)),r&&(h.uv1=kn.getInterpolatedAttribute(r,o,c,l,u,new ct)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new U,materialIndex:0};kn.getNormal(ms,As,_s,d.normal),h.face=d,h.barycoord=u}return h}var En=class i extends fn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2));function m(C,g,f,b,M,v,F,E,T,L,y){let _=v/T,w=F/L,H=v/2,O=F/2,k=E/2,Z=T+1,V=L+1,tt=0,G=0,at=new U;for(let pt=0;pt<V;pt++){let Ct=pt*w-O;for(let Nt=0;Nt<Z;Nt++){let Zt=Nt*_-H;at[C]=Zt*b,at[g]=Ct*M,at[f]=k,l.push(at.x,at.y,at.z),at[C]=0,at[g]=0,at[f]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(Nt/T),u.push(1-pt/L),tt+=1}}for(let pt=0;pt<L;pt++)for(let Ct=0;Ct<T;Ct++){let Nt=d+Ct+Z*pt,Zt=d+Ct+Z*(pt+1),Y=d+(Ct+1)+Z*(pt+1),nt=d+(Ct+1)+Z*pt;c.push(Nt,Zt,nt),c.push(Zt,Y,nt),G+=6}o.addGroup(p,G,y),p+=G,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){let t={};for(let e=0;e<i.length;e++){let n=bi(i[e]);for(let s in n)t[s]=n[s]}return t}function au(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var ou={clone:bi,merge:Ce},cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends qn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Gs=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vn=new U,Ic=new ct,Mc=new ct,ye=class extends Gs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Mc),e.subVectors(Mc,Ic)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hi=-90,ui=1,ka=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(hi,ui,t,e);s.layers=this.layers,this.add(s);let r=new ye(hi,ui,t,e);r.layers=this.layers,this.add(r);let a=new ye(hi,ui,t,e);a.layers=this.layers,this.add(a);let o=new ye(hi,ui,t,e);o.layers=this.layers,this.add(o);let c=new ye(hi,ui,t,e);c.layers=this.layers,this.add(c);let l=new ye(hi,ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=C,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ws=class extends Re{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Va=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:In});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Ze),new ka(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Vr=new U,hu=new U,uu=new Bt,ke=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vr.subVectors(n,e).cross(hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uu.getNormalMatrix(t),s=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new Zi,ys=new U,Ji=class{constructor(t=new ke,e=new ke,n=new ke,s=new ke,r=new ke,a=new ke){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],C=s[10],g=s[11],f=s[12],b=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-p,v-f).normalize(),n[1].setComponents(c+r,d+l,g+p,v+f).normalize(),n[2].setComponents(c+a,d+h,g+m,v+b).normalize(),n[3].setComponents(c-a,d-h,g-m,v-b).normalize(),n[4].setComponents(c-o,d-u,g-C,v-M).normalize(),e===cn)n[5].setComponents(c+o,d+u,g+C,v+M).normalize();else if(e===Fs)n[5].setComponents(o,u,C,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ys.x=s.normal.x>0?t.max.x:t.min.x,ys.y=s.normal.y>0?t.max.y:t.min.y,ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Il(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function du(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],C=u[p];C.start<=m.start+m.count+1?m.count=Math.max(m.count,C.start+C.count-m.start):(++d,u[d]=C)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let C=u[p];i.bufferSubData(l,C.start*h.BYTES_PER_ELEMENT,h,C.start,C.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Yn=class i extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],m=[],C=[],g=[];for(let f=0;f<h;f++){let b=f*d-a;for(let M=0;M<l;M++){let v=M*u-r;m.push(v,-b,0),C.push(0,0,1),g.push(M/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let M=b+l*f,v=b+l*(f+1),F=b+1+l*(f+1),E=b+1+l*f;p.push(M,v,E),p.push(v,F,E)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(C,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
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
#endif`,gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
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
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
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
#endif`,yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bu=`#ifdef USE_IRIDESCENCE
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
#endif`,wu=`#ifdef USE_BUMPMAP
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fu=`#define PI 3.141592653589793
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
} // validated`,Ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bu=`vec3 transformedNormal = objectNormal;
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
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
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
#endif`,td=`#ifdef USE_GRADIENTMAP
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
}`,ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
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
#endif`,ud=`struct PhysicalMaterial {
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
}`,dd=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yd=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,Cf=`#if DEPTH_PACKING == 3200
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
}`,vf=`#define DISTANCE
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
}`,yf=`#define DISTANCE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
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
}`,bf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Ef=`uniform vec3 diffuse;
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
}`,Tf=`#define LAMBERT
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
}`,Rf=`#define LAMBERT
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,Df=`#define NORMAL
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
}`,Uf=`#define NORMAL
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define STANDARD
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
}`,zf=`#define TOON
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
}`,kf=`#define TOON
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
}`,Vf=`uniform float size;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,Xf=`uniform float rotation;
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
}`,qf=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:fu,alphahash_pars_fragment:pu,alphamap_fragment:gu,alphamap_pars_fragment:mu,alphatest_fragment:Au,alphatest_pars_fragment:_u,aomap_fragment:xu,aomap_pars_fragment:Cu,batching_pars_vertex:vu,batching_vertex:yu,begin_vertex:Iu,beginnormal_vertex:Mu,bsdfs:Su,iridescence_fragment:bu,bumpmap_pars_fragment:wu,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Pu,color_fragment:Lu,color_pars_fragment:Du,color_pars_vertex:Uu,color_vertex:Nu,common:Fu,cube_uv_reflection_fragment:Ou,defaultnormal_vertex:Bu,displacementmap_pars_vertex:zu,displacementmap_vertex:ku,emissivemap_fragment:Vu,emissivemap_pars_fragment:Hu,colorspace_fragment:Gu,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:qu,envmap_pars_fragment:Yu,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:rd,envmap_vertex:$u,fog_vertex:Ju,fog_pars_vertex:Ku,fog_fragment:Qu,fog_pars_fragment:ju,gradientmap_pars_fragment:td,lightmap_pars_fragment:ed,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:cd,lights_phong_pars_fragment:ld,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:dd,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:Cd,map_particle_fragment:vd,map_particle_pars_fragment:yd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Md,morphinstance_vertex:Sd,morphcolor_vertex:bd,morphnormal_vertex:wd,morphtarget_pars_vertex:Ed,morphtarget_vertex:Td,normal_fragment_begin:Rd,normal_fragment_maps:Pd,normal_pars_fragment:Ld,normal_pars_vertex:Dd,normal_vertex:Ud,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:zd,opaque_fragment:kd,packing:Vd,premultiplied_alpha_fragment:Hd,project_vertex:Gd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:$d,shadowmap_vertex:Jd,shadowmask_pars_fragment:Kd,skinbase_vertex:Qd,skinning_pars_vertex:jd,skinning_vertex:tf,skinnormal_vertex:ef,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:cf,uv_pars_fragment:lf,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:df,background_vert:ff,background_frag:pf,backgroundCube_vert:gf,backgroundCube_frag:mf,cube_vert:Af,cube_frag:_f,depth_vert:xf,depth_frag:Cf,distanceRGBA_vert:vf,distanceRGBA_frag:yf,equirect_vert:If,equirect_frag:Mf,linedashed_vert:Sf,linedashed_frag:bf,meshbasic_vert:wf,meshbasic_frag:Ef,meshlambert_vert:Tf,meshlambert_frag:Rf,meshmatcap_vert:Pf,meshmatcap_frag:Lf,meshnormal_vert:Df,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:zf,meshtoon_frag:kf,points_vert:Vf,points_frag:Hf,shadow_vert:Gf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:qf},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ye={basic:{uniforms:Ce([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ce([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ce([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ce([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ce([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ce([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ce([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ce([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ce([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ce([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ce([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ce([ot.common,ot.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ce([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ye.physical={uniforms:Ce([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Is={r:0,b:0,g:0},Fn=new $e,Yf=new re;function Zf(i,t,e,n,s,r,a){let o=new Ht(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function C(b){let M=!1,v=m(b);v===null?f(o,c):v&&v.isColor&&(f(v,1),M=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){let v=m(M);v&&(v.isCubeTexture||v.mapping===lr)?(h===void 0&&(h=new fe(new En(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:bi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(M.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Fn)),h.material.toneMapped=qt.getTransfer(v.colorSpace)!==Qt,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new fe(new Yn(2,2),new Je({name:"BackgroundMaterial",uniforms:bi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(Is,yl(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:C,addToRenderList:g}}function $f(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,w,H,O,k){let Z=!1,V=u(O,H,w);r!==V&&(r=V,l(r.object)),Z=p(_,O,H,k),Z&&m(_,O,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(_,w,H,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,H){let O=H.wireframe===!0,k=n[_.id];k===void 0&&(k={},n[_.id]=k);let Z=k[w.id];Z===void 0&&(Z={},k[w.id]=Z);let V=Z[O];return V===void 0&&(V=d(c()),Z[O]=V),V}function d(_){let w=[],H=[],O=[];for(let k=0;k<e;k++)w[k]=0,H[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,w,H,O){let k=r.attributes,Z=w.attributes,V=0,tt=H.getAttributes();for(let G in tt)if(tt[G].location>=0){let pt=k[G],Ct=Z[G];if(Ct===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Ct=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Ct=_.instanceColor)),pt===void 0||pt.attribute!==Ct||Ct&&pt.data!==Ct.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function m(_,w,H,O){let k={},Z=w.attributes,V=0,tt=H.getAttributes();for(let G in tt)if(tt[G].location>=0){let pt=Z[G];pt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));let Ct={};Ct.attribute=pt,pt&&pt.data&&(Ct.data=pt.data),k[G]=Ct,V++}r.attributes=k,r.attributesNum=V,r.index=O}function C(){let _=r.newAttributes;for(let w=0,H=_.length;w<H;w++)_[w]=0}function g(_){f(_,0)}function f(_,w){let H=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;H[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),k[_]!==w&&(i.vertexAttribDivisor(_,w),k[_]=w)}function b(){let _=r.newAttributes,w=r.enabledAttributes;for(let H=0,O=w.length;H<O;H++)w[H]!==_[H]&&(i.disableVertexAttribArray(H),w[H]=0)}function M(_,w,H,O,k,Z,V){V===!0?i.vertexAttribIPointer(_,w,H,k,Z):i.vertexAttribPointer(_,w,H,O,k,Z)}function v(_,w,H,O){C();let k=O.attributes,Z=H.getAttributes(),V=w.defaultAttributeValues;for(let tt in Z){let G=Z[tt];if(G.location>=0){let at=k[tt];if(at===void 0&&(tt==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),tt==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){let pt=at.normalized,Ct=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;let Zt=Nt.buffer,Y=Nt.type,nt=Nt.bytesPerElement,vt=Y===i.INT||Y===i.UNSIGNED_INT||at.gpuType===Io;if(at.isInterleavedBufferAttribute){let st=at.data,Et=st.stride,Dt=at.offset;if(st.isInstancedInterleavedBuffer){for(let Pt=0;Pt<G.locationSize;Pt++)f(G.location+Pt,st.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Pt=0;Pt<G.locationSize;Pt++)g(G.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Pt=0;Pt<G.locationSize;Pt++)M(G.location+Pt,Ct/G.locationSize,Y,pt,Et*nt,(Dt+Ct/G.locationSize*Pt)*nt,vt)}else{if(at.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)f(G.location+st,at.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let st=0;st<G.locationSize;st++)g(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let st=0;st<G.locationSize;st++)M(G.location+st,Ct/G.locationSize,Y,pt,Ct*nt,Ct/G.locationSize*st*nt,vt)}}else if(V!==void 0){let pt=V[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}b()}function F(){L();for(let _ in n){let w=n[_];for(let H in w){let O=w[H];for(let k in O)h(O[k].object),delete O[k];delete w[H]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let H in w){let O=w[H];for(let k in O)h(O[k].object),delete O[k];delete w[H]}delete n[_.id]}function T(_){for(let w in n){let H=n[w];if(H[_.id]===void 0)continue;let O=H[_.id];for(let k in O)h(O[k].object),delete O[k];delete H[_.id]}}function L(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:C,enableAttribute:g,disableUnusedAttributes:b}}function Jf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let C=0;C<u;C++)m+=h[C]*d[C];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Kf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==He&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let L=T===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==on&&!L)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:C,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:F,maxSamples:E}}function Qf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ke,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,C=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,M=b*4,v=f.clippingState||null;c.value=v,v=h(m,d,M,p);for(let F=0;F!==M;++F)v[F]=e[F];f.clippingState=v,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let C=u!==null?u.length:0,g=null;if(C!==0){if(g=c.value,m!==!0||g===null){let f=p+C*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,v=p;M!==C;++M,v+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,g}}function jf(i){let t=new WeakMap;function e(a,o){return o===oa?a.mapping=vi:o===ca&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===oa||o===ca)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Va(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xs=class extends Gs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pi=4,Sc=[.125,.215,.35,.446,.526,.582],Vn=20,Hr=new Xs,bc=new Ht,Gr=null,Wr=0,Xr=0,qr=!1,Bn=(1+Math.sqrt(5))/2,di=1/Bn,wc=[new U(-Bn,di,0),new U(Bn,di,0),new U(-di,0,Bn),new U(di,0,Bn),new U(0,Bn,-di),new U(0,Bn,di),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gr,Wr,Xr),this._renderer.xr.enabled=qr,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:ns,format:He,colorSpace:Ti,depthBuffer:!1},s=Ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(r)),this._blurMaterial=ep(r,t,e)}return s}_compileMaterial(t){let e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,s){let o=new ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bc),h.toneMapping=Mn,h.autoClear=!1;let p=new Si({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),m=new fe(new En,p),C=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,C=!0):(p.color.copy(bc),C=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):b===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let M=this._cubeSize;Ms(s,b*M,f>2?M:0,M,M),h.setRenderTarget(s),C&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Hr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wc[(s-r-1)%wc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fe(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),C=r/m,g=isFinite(r)?1+Math.floor(h*C):Vn;g>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vn}`);let f=[],b=0;for(let T=0;T<Vn;++T){let L=T/C,y=Math.exp(-L*L/2);f.push(y),T===0?b+=y:T<g&&(b+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let v=this._sizeLods[s],F=3*v*(s>M-pi?s-M+pi:0),E=4*(this._cubeSize-v);Ms(e,F,E,3*v,2*v),c.setRenderTarget(e),c.render(u,Hr)}};function tp(i){let t=[],e=[],n=[],s=i,r=i-pi+1+Sc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-pi?c=Sc[a-i+pi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,C=3,g=2,f=1,b=new Float32Array(C*m*p),M=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,L=E>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];b.set(y,C*m*E),M.set(d,g*m*E);let _=[E,E,E,E,E,E];v.set(_,f*m*E)}let F=new fn;F.setAttribute("position",new De(b,C)),F.setAttribute("uv",new De(M,g)),F.setAttribute("faceIndex",new De(v,f)),t.push(F),s>pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ec(i,t,e){let n=new dn(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ep(i,t,e){let n=new Float32Array(Vn),s=new U(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Tc(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Rc(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function np(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===oa||c===ca,h=c===vi||c===yi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new qs(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new qs(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ip(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let C=d.morphAttributes[m];for(let g=0,f=C.length;g<f;g++)t.remove(C[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let C=p[m];for(let g=0,f=C.length;g<f;g++)t.update(C[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,C=0;if(p!==null){let b=p.array;C=p.version;for(let M=0,v=b.length;M<v;M+=3){let F=b[M+0],E=b[M+1],T=b[M+2];d.push(F,E,E,T,T,F)}}else if(m!==void 0){let b=m.array;C=m.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let F=M+0,E=M+1,T=M+2;d.push(F,E,E,T,T,F)}}else return;let g=new(Cl(d)?Hs:Vs)(d,1);g.version=C;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function rp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,C){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],C[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,C,0,m);let f=0;for(let b=0;b<m;b++)f+=p[b]*C[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ap(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function op(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),C===!0&&(M=3);let v=o.attributes.position.count*M,F=1;v>t.maxTextureSize&&(F=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*F*4*u),T=new zs(E,v,F,u);T.type=on,T.needsUpdate=!0;let L=M*4;for(let _=0;_<u;_++){let w=g[_],H=f[_],O=b[_],k=v*F*4*_;for(let Z=0;Z<w.count;Z++){let V=Z*L;p===!0&&(s.fromBufferAttribute(w,Z),E[k+V+0]=s.x,E[k+V+1]=s.y,E[k+V+2]=s.z,E[k+V+3]=0),m===!0&&(s.fromBufferAttribute(H,Z),E[k+V+4]=s.x,E[k+V+5]=s.y,E[k+V+6]=s.z,E[k+V+7]=0),C===!0&&(s.fromBufferAttribute(O,Z),E[k+V+8]=s.x,E[k+V+9]=s.y,E[k+V+10]=s.z,E[k+V+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ct(v,F)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let C=0;C<l.length;C++)p+=l[C];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Ys=class extends Re{constructor(t,e,n,s,r,a,o,c,l,h=Ai){if(h!==Ai&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=Wn),n===void 0&&h===Mi&&(n=Ii),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=c!==void 0?c:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ml=new Re,Pc=new Ys(1,1),Sl=new zs,bl=new za,wl=new Ws,Lc=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function Ri(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),ue(e,n)}}function pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),ue(e,n)}}function gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),ue(e,n)}}function mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function Mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pc.compareFunction=_l,r=Pc):r=Ml,e.setTexture2D(t||r,s)}function Sp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bl,s)}function bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wl,s)}function wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sl,s)}function Ep(i){switch(i){case 5126:return lp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return gp;case 5124:case 35670:return mp;case 35667:case 35671:return Ap;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return Cp;case 36294:return vp;case 36295:return yp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return wp}}function Tp(i,t){i.uniform1fv(this.addr,t)}function Rp(i,t){let e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function Pp(i,t){let e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function Lp(i,t){let e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function Dp(i,t){let e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Up(i,t){let e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Np(i,t){let e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fp(i,t){i.uniform1iv(this.addr,t)}function Op(i,t){i.uniform2iv(this.addr,t)}function Bp(i,t){i.uniform3iv(this.addr,t)}function zp(i,t){i.uniform4iv(this.addr,t)}function kp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Wp(i,t,e){let n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ml,r[a])}function Xp(i,t,e){let n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bl,r[a])}function qp(i,t,e){let n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wl,r[a])}function Yp(i,t,e){let n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sl,r[a])}function Zp(i){switch(i){case 5126:return Tp;case 35664:return Rp;case 35665:return Pp;case 35666:return Lp;case 35674:return Dp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Vp;case 36295:return Hp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}var Ha=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ep(e.type)}},Ga=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}},Wa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yr=/(\w+)(\])?(\[|\.)?/g;function Oc(i,t){i.seq.push(t),i.map[t.id]=t}function $p(i,t,e){let n=i.name,s=n.length;for(Yr.lastIndex=0;;){let r=Yr.exec(n),a=Yr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Oc(e,l===void 0?new Ha(o,i,t):new Ga(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Wa(o),Oc(e,u)),e=u}}}var xi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);$p(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jp=37297,Kp=0;function Qp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zc=new Bt;function jp(i){qt._getMatrix(zc,qt.workingColorSpace,i);let t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case hr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(t),a)}else return s}function tg(i,t){let e=jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eg(i,t){let e;switch(t){case hh:e="Linear";break;case uh:e="Reinhard";break;case dh:e="Cineon";break;case fh:e="ACESFilmic";break;case gh:e="AgX";break;case mh:e="Neutral";break;case ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ss=new U;function ng(){qt.getLuminanceCoefficients(Ss);let i=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function sg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bi(i){return i!==""}function Vc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(ag,cg)}var og=new Map;function cg(i,t){let e=kt[t];if(e===void 0){let n=og.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xa(e)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(lg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function dg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rl:t="ENVMAP_BLENDING_MULTIPLY";break;case ch:t="ENVMAP_BLENDING_MIX";break;case lh:t="ENVMAP_BLENDING_ADD";break}return t}function gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ug(e),l=dg(e),h=fg(e),u=pg(e),d=gg(e),p=ig(e),m=sg(r),C=s.createProgram(),g,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bi).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bi).join(`
`),f.length>0&&(f+=`
`)):(g=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),f=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),a=Xa(a),a=Vc(a,e),a=Hc(a,e),o=Xa(o),o=Vc(o,e),o=Hc(o,e),a=Gc(a),o=Gc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=b+g+a,v=b+f+o,F=Bc(s,s.VERTEX_SHADER,M),E=Bc(s,s.FRAGMENT_SHADER,v);s.attachShader(C,F),s.attachShader(C,E),e.index0AttributeName!==void 0?s.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function T(w){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(C).trim(),O=s.getShaderInfoLog(F).trim(),k=s.getShaderInfoLog(E).trim(),Z=!0,V=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,F,E);else{let tt=kc(s,F,"vertex"),G=kc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+tt+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||k==="")&&(V=!1);V&&(w.diagnostics={runnable:Z,programLog:H,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:f}})}s.deleteShader(F),s.deleteShader(E),L=new xi(s,C),y=rg(s,C)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(C,Jp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kp++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=E,this}var Ag=0,qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ya(t),e.set(t,n)),n}},Ya=class{constructor(t){this.id=Ag++,this.code=t,this.usedTimes=0}};function _g(i,t,e,n,s,r,a){let o=new $i,c=new qa,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,_,w,H,O){let k=H.fog,Z=O.geometry,V=y.isMeshStandardMaterial?H.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),G=tt&&tt.mapping===lr?tt.image.height:null,at=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ct=pt!==void 0?pt.length:0,Nt=0;Z.morphAttributes.position!==void 0&&(Nt=1),Z.morphAttributes.normal!==void 0&&(Nt=2),Z.morphAttributes.color!==void 0&&(Nt=3);let Zt,Y,nt,vt;if(at){let Kt=Ye[at];Zt=Kt.vertexShader,Y=Kt.fragmentShader}else Zt=y.vertexShader,Y=y.fragmentShader,c.update(y),nt=c.getVertexShaderID(y),vt=c.getFragmentShaderID(y);let st=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,Pt=O.isBatchedMesh===!0,Xt=!!y.map,J=!!y.matcap,et=!!tt,S=!!y.aoMap,bt=!!y.lightMap,Q=!!y.bumpMap,At=!!y.normalMap,rt=!!y.displacementMap,Tt=!!y.emissiveMap,gt=!!y.metalnessMap,I=!!y.roughnessMap,A=y.anisotropy>0,N=y.clearcoat>0,X=y.dispersion>0,K=y.iridescence>0,q=y.sheen>0,yt=y.transmission>0,lt=A&&!!y.anisotropyMap,mt=N&&!!y.clearcoatMap,Vt=N&&!!y.clearcoatNormalMap,j=N&&!!y.clearcoatRoughnessMap,_t=K&&!!y.iridescenceMap,Rt=K&&!!y.iridescenceThicknessMap,Lt=q&&!!y.sheenColorMap,xt=q&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,zt=!!y.specularColorMap,jt=!!y.specularIntensityMap,R=yt&&!!y.transmissionMap,ht=yt&&!!y.thicknessMap,W=!!y.gradientMap,$=!!y.alphaMap,ft=y.alphaTest>0,ut=!!y.alphaHash,Ft=!!y.extensions,ae=Mn;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ae=i.toneMapping);let me={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:Y,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ti,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:J,envMap:et,envMapMode:et&&tt.mapping,envMapCubeUVHeight:G,aoMap:S,lightMap:bt,bumpMap:Q,normalMap:At,displacementMap:d&&rt,emissiveMap:Tt,normalMapObjectSpace:At&&y.normalMapType===Ch,normalMapTangentSpace:At&&y.normalMapType===Al,metalnessMap:gt,roughnessMap:I,anisotropy:A,anisotropyMap:lt,clearcoat:N,clearcoatMap:mt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:j,dispersion:X,iridescence:K,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:Wt,specularColorMap:zt,specularIntensityMap:jt,transmission:yt,transmissionMap:R,thicknessMap:ht,gradientMap:W,opaque:y.transparent===!1&&y.blending===mi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:ut,combine:y.combine,mapUv:Xt&&C(y.map.channel),aoMapUv:S&&C(y.aoMap.channel),lightMapUv:bt&&C(y.lightMap.channel),bumpMapUv:Q&&C(y.bumpMap.channel),normalMapUv:At&&C(y.normalMap.channel),displacementMapUv:rt&&C(y.displacementMap.channel),emissiveMapUv:Tt&&C(y.emissiveMap.channel),metalnessMapUv:gt&&C(y.metalnessMap.channel),roughnessMapUv:I&&C(y.roughnessMap.channel),anisotropyMapUv:lt&&C(y.anisotropyMap.channel),clearcoatMapUv:mt&&C(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&C(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&C(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&C(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&C(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&C(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&C(y.sheenRoughnessMap.channel),specularMapUv:Wt&&C(y.specularMap.channel),specularColorMapUv:zt&&C(y.specularColorMap.channel),specularIntensityMapUv:jt&&C(y.specularIntensityMap.channel),transmissionMapUv:R&&C(y.transmissionMap.channel),thicknessMapUv:ht&&C(y.thicknessMap.channel),alphaMapUv:$&&C(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(At||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Xt||$),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Nt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:Tt&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ve,flipSided:y.side===Se,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&y.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function f(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)_.push(w),_.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(b(_,y),M(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function b(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function M(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){let _=m[y.type],w;if(_){let H=Ye[_];w=ou.clone(H.uniforms)}else w=y.uniforms;return w}function F(y,_){let w;for(let H=0,O=h.length;H<O;H++){let k=h[H];if(k.cacheKey===_){w=k,++w.usedTimes;break}}return w===void 0&&(w=new mg(i,_,y,r),h.push(w)),w}function E(y){if(--y.usedTimes===0){let _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:F,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:L}}function xg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,C,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:C,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=C,f.group=g),t++,f}function o(u,d,p,m,C,g){let f=a(u,d,p,m,C,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,C,g){let f=a(u,d,p,m,C,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Cg),n.length>1&&n.sort(d||Xc),s.length>1&&s.sort(d||Xc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function vg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qc,i.set(n,[a])):s>=r.length?(a=new qc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){let t=new yg,e=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new re,a=new re;function o(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,m=0,C=0,g=0,f=0,b=0,M=0,v=0,F=0,E=0,T=0;l.sort(Sg);for(let y=0,_=l.length;y<_;y++){let w=l[y],H=w.color,O=w.intensity,k=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=H.r*O,u+=H.g*O,d+=H.b*O;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],O);T++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let tt=w.shadow,G=e.get(w);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=w.shadow.matrix,b++}n.directional[p]=V,p++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(H).multiplyScalar(O),V.distance=k,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[C]=V;let tt=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,tt.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[C]=tt.matrix,w.castShadow){let G=e.get(w);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[C]=G,n.spotShadowMap[C]=Z,v++}C++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(H).multiplyScalar(O),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=V,g++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let tt=w.shadow,G=e.get(w);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=w.shadow.matrix,M++}n.point[m]=V,m++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(O),V.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[f]=V,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==C||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==F||L.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=C,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+F-E,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,L.directionalLength=p,L.pointLength=m,L.spotLength=C,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=F,L.numLightProbes=T,n.version=Mg++)}function c(l,h){let u=0,d=0,p=0,m=0,C=0,g=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let M=l[f];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let v=n.hemi[C];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),C++}}}return{setup:o,setupView:c,state:n}}function Yc(i){let t=new bg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function wg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yc(i),t.set(s,[o])):r>=a.length?(o=new Yc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Za=class extends qn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$a=class extends qn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Rg(i,t,e){let n=new Ji,s=new ct,r=new ct,a=new oe,o=new Za({depthPacking:xh}),c=new $a,l={},h=e.maxTextureSize,u={[Sn]:Se,[Se]:Sn,[Ve]:Ve},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new fn;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let f=this.type;this.render=function(E,T,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),H=i.state;H.setBlending(In),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let O=f!==an&&this.type===an,k=f===an&&this.type!==an;for(let Z=0,V=E.length;Z<V;Z++){let tt=E[Z],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let at=G.getFrameExtents();if(s.multiply(at),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||O===!0||k===!0){let Ct=this.type!==an?{minFilter:Ge,magFilter:Ge}:{};G.map!==null&&G.map.dispose(),G.map=new dn(s.x,s.y,Ct),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let pt=G.getViewportCount();for(let Ct=0;Ct<pt;Ct++){let Nt=G.getViewport(Ct);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),H.viewport(a),G.updateMatrices(tt,Ct),n=G.getFrustum(),v(T,L,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===an&&b(G,L),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(y,_,w)};function b(E,T){let L=t.update(C);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,L,d,C,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,L,p,C,null)}function M(E,T,L,y){let _=null,w=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)_=w;else if(_=L.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=_.uuid,O=T.uuid,k=l[H];k===void 0&&(k={},l[H]=k);let Z=k[O];Z===void 0&&(Z=_.clone(),k[O]=Z,T.addEventListener("dispose",F)),_=Z}if(_.visible=T.visible,_.wireframe=T.wireframe,y===an?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let H=i.properties.get(_);H.light=L}return _}function v(E,T,L,y,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===an)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let O=t.update(E),k=E.material;if(Array.isArray(k)){let Z=O.groups;for(let V=0,tt=Z.length;V<tt;V++){let G=Z[V],at=k[G.materialIndex];if(at&&at.visible){let pt=M(E,at,y,_);E.onBeforeShadow(i,E,T,L,O,pt,G),i.renderBufferDirect(L,null,O,pt,E,G),E.onAfterShadow(i,E,T,L,O,pt,G)}}}else if(k.visible){let Z=M(E,k,y,_);E.onBeforeShadow(i,E,T,L,O,Z,null),i.renderBufferDirect(L,null,O,Z,E,null),E.onAfterShadow(i,E,T,L,O,Z,null)}}let H=E.children;for(let O=0,k=H.length;O<k;O++)v(H[O],T,L,y,_)}function F(E){E.target.removeEventListener("dispose",F);for(let L in l){let y=l[L],_=E.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var Pg={[ta]:ea,[na]:ra,[ia]:aa,[Ci]:sa,[ea]:ta,[ra]:na,[aa]:ia,[sa]:Ci};function Lg(i,t){function e(){let R=!1,ht=new oe,W=null,$=new oe(0,0,0,0);return{setMask:function(ft){W!==ft&&!R&&(i.colorMask(ft,ft,ft,ft),W=ft)},setLocked:function(ft){R=ft},setClear:function(ft,ut,Ft,ae,me){me===!0&&(ft*=ae,ut*=ae,Ft*=ae),ht.set(ft,ut,Ft,ae),$.equals(ht)===!1&&(i.clearColor(ft,ut,Ft,ae),$.copy(ht))},reset:function(){R=!1,W=null,$.set(-1,0,0,0)}}}function n(){let R=!1,ht=!1,W=null,$=null,ft=null;return{setReversed:function(ut){if(ht!==ut){let Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let ae=ft;ft=null,this.setClear(ae)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?st(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!R&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(ht&&(ut=Pg[ut]),$!==ut){switch(ut){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ut}},setLocked:function(ut){R=ut},setClear:function(ut){ft!==ut&&(ht&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){R=!1,W=null,$=null,ft=null,ht=!1}}}function s(){let R=!1,ht=null,W=null,$=null,ft=null,ut=null,Ft=null,ae=null,me=null;return{setTest:function(Kt){R||(Kt?st(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Kt){ht!==Kt&&!R&&(i.stencilMask(Kt),ht=Kt)},setFunc:function(Kt,Ne,Qe){(W!==Kt||$!==Ne||ft!==Qe)&&(i.stencilFunc(Kt,Ne,Qe),W=Kt,$=Ne,ft=Qe)},setOp:function(Kt,Ne,Qe){(ut!==Kt||Ft!==Ne||ae!==Qe)&&(i.stencilOp(Kt,Ne,Qe),ut=Kt,Ft=Ne,ae=Qe)},setLocked:function(Kt){R=Kt},setClear:function(Kt){me!==Kt&&(i.clearStencil(Kt),me=Kt)},reset:function(){R=!1,ht=null,W=null,$=null,ft=null,ut=null,Ft=null,ae=null,me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,C=!1,g=null,f=null,b=null,M=null,v=null,F=null,E=null,T=new Ht(0,0,0),L=0,y=!1,_=null,w=null,H=null,O=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=tt>=2);let at=null,pt={},Ct=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Zt=new oe().fromArray(Ct),Y=new oe().fromArray(Nt);function nt(R,ht,W,$){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(R,ut),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<W;Ft++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ht+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let vt={};vt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Ci),Q(!1),At(Zo),st(i.CULL_FACE),S(In);function st(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Et(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Dt(R,ht){return u[R]!==ht?(i.bindFramebuffer(R,ht),u[R]=ht,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Pt(R,ht){let W=p,$=!1;if(R){W=d.get(ht),W===void 0&&(W=[],d.set(ht,W));let ft=R.textures;if(W.length!==ft.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ft=ft.length;ut<Ft;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=ft.length,$=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,$=!0);$&&i.drawBuffers(W)}function Xt(R){return m!==R?(i.useProgram(R),m=R,!0):!1}let J={[zn]:i.FUNC_ADD,[Xl]:i.FUNC_SUBTRACT,[ql]:i.FUNC_REVERSE_SUBTRACT};J[Yl]=i.MIN,J[Zl]=i.MAX;let et={[$l]:i.ZERO,[Jl]:i.ONE,[Kl]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[jl]:i.DST_ALPHA,[Ql]:i.ONE_MINUS_SRC_COLOR,[jr]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function S(R,ht,W,$,ft,ut,Ft,ae,me,Kt){if(R===In){C===!0&&(Et(i.BLEND),C=!1);return}if(C===!1&&(st(i.BLEND),C=!0),R!==Wl){if(R!==g||Kt!==y){if((f!==zn||v!==zn)&&(i.blendEquation(i.FUNC_ADD),f=zn,v=zn),Kt)switch(R){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,M=null,F=null,E=null,T.set(0,0,0),L=0,g=R,y=Kt}return}ft=ft||ht,ut=ut||W,Ft=Ft||$,(ht!==f||ft!==v)&&(i.blendEquationSeparate(J[ht],J[ft]),f=ht,v=ft),(W!==b||$!==M||ut!==F||Ft!==E)&&(i.blendFuncSeparate(et[W],et[$],et[ut],et[Ft]),b=W,M=$,F=ut,E=Ft),(ae.equals(T)===!1||me!==L)&&(i.blendColor(ae.r,ae.g,ae.b,me),T.copy(ae),L=me),g=R,y=!1}function bt(R,ht){R.side===Ve?Et(i.CULL_FACE):st(i.CULL_FACE);let W=R.side===Se;ht&&(W=!W),Q(W),R.blending===mi&&R.transparent===!1?S(In):S(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let $=R.stencilWrite;o.setTest($),$&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(R){_!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),_=R)}function At(R){R!==Vl?(st(i.CULL_FACE),R!==w&&(R===Zo?i.cullFace(i.BACK):R===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),w=R}function rt(R){R!==H&&(V&&i.lineWidth(R),H=R)}function Tt(R,ht,W){R?(st(i.POLYGON_OFFSET_FILL),(O!==ht||k!==W)&&(i.polygonOffset(ht,W),O=ht,k=W)):Et(i.POLYGON_OFFSET_FILL)}function gt(R){R?st(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function I(R){R===void 0&&(R=i.TEXTURE0+Z-1),at!==R&&(i.activeTexture(R),at=R)}function A(R,ht,W){W===void 0&&(at===null?W=i.TEXTURE0+Z-1:W=at);let $=pt[W];$===void 0&&($={type:void 0,texture:void 0},pt[W]=$),($.type!==R||$.texture!==ht)&&(at!==W&&(i.activeTexture(W),at=W),i.bindTexture(R,ht||vt[R]),$.type=R,$.texture=ht)}function N(){let R=pt[at];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Lt(R){Zt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Zt.copy(R))}function xt(R){Y.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Y.copy(R))}function Wt(R,ht){let W=l.get(ht);W===void 0&&(W=new WeakMap,l.set(ht,W));let $=W.get(R);$===void 0&&($=i.getUniformBlockIndex(ht,R.name),W.set(R,$))}function zt(R,ht){let $=l.get(ht).get(R);c.get(ht)!==$&&(i.uniformBlockBinding(ht,$,R.__bindingPointIndex),c.set(ht,$))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,pt={},u={},d=new WeakMap,p=[],m=null,C=!1,g=null,f=null,b=null,M=null,v=null,F=null,E=null,T=new Ht(0,0,0),L=0,y=!1,_=null,w=null,H=null,O=null,k=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Et,bindFramebuffer:Dt,drawBuffers:Pt,useProgram:Xt,setBlending:S,setMaterial:bt,setFlipSided:Q,setCullFace:At,setLineWidth:rt,setPolygonOffset:Tt,setScissorTest:gt,activeTexture:I,bindTexture:A,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:_t,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:j,texSubImage2D:q,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Lt,viewport:xt,reset:jt}}function Zc(i,t,e,n){let s=Dg(n);switch(e){case hl:return i*t;case dl:return i*t;case fl:return i*t*2;case pl:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case ul:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case Rs:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Us:case Pa:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ml:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ua:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case un:case ol:return{byteLength:1,components:1};case qi:case cl:case ns:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case Wn:case Io:case on:return{byteLength:4,components:1};case ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ug(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return p?new OffscreenCanvas(I,A):Os("canvas")}function C(I,A,N){let X=1,K=gt(I);if((K.width>N||K.height>N)&&(X=N/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let q=Math.floor(X*K.width),yt=Math.floor(X*K.height);u===void 0&&(u=m(q,yt));let lt=A?m(q,yt):u;return lt.width=q,lt.height=yt,lt.getContext("2d").drawImage(I,0,0,q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+yt+")."),lt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,A,N,X,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q=A;if(A===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),A===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),A===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),A===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),A===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),A===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),A===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),A===i.RGBA){let yt=K?hr:qt.getTransfer(X);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=yt===Qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(I,A){let N;return I?A===null||A===Wn||A===Ii?N=i.DEPTH24_STENCIL8:A===on?N=i.DEPTH32F_STENCIL8:A===qi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wn||A===Ii?N=i.DEPTH_COMPONENT24:A===on?N=i.DEPTH_COMPONENT32F:A===qi&&(N=i.DEPTH_COMPONENT16),N}function F(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ge&&I.minFilter!==Ze?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){let A=I.target;A.removeEventListener("dispose",E),L(A),A.isVideoTexture&&h.delete(A)}function T(I){let A=I.target;A.removeEventListener("dispose",T),_(A)}function L(I){let A=n.get(I);if(A.__webglInit===void 0)return;let N=I.source,X=d.get(N);if(X){let K=X[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(I),Object.keys(X).length===0&&d.delete(N)}n.remove(I)}function y(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let N=I.source,X=d.get(N);delete X[A.__cacheKey],a.memory.textures--}function _(I){let A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(A.__webglFramebuffer[X]))for(let K=0;K<A.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(A.__webglFramebuffer[X][K]);else i.deleteFramebuffer(A.__webglFramebuffer[X]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[X])}else{if(Array.isArray(A.__webglFramebuffer))for(let X=0;X<A.__webglFramebuffer.length;X++)i.deleteFramebuffer(A.__webglFramebuffer[X]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let X=0;X<A.__webglColorRenderbuffer.length;X++)A.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[X]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let N=I.textures;for(let X=0,K=N.length;X<K;X++){let q=n.get(N[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[X])}n.remove(I)}let w=0;function H(){w=0}function O(){let I=w;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),w+=1,I}function k(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function Z(I,A){let N=n.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){let X=I.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,I,A);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+A)}function V(I,A){let N=n.get(I);if(I.version>0&&N.__version!==I.version){Y(N,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+A)}function tt(I,A){let N=n.get(I);if(I.version>0&&N.__version!==I.version){Y(N,I,A);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+A)}function G(I,A){let N=n.get(I);if(I.version>0&&N.__version!==I.version){nt(N,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+A)}let at={[Xi]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},pt={[Ge]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Ct={[vh]:i.NEVER,[wh]:i.ALWAYS,[yh]:i.LESS,[_l]:i.LEQUAL,[Ih]:i.EQUAL,[bh]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function Nt(I,A){if(A.type===on&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ze||A.magFilter===Cr||A.magFilter===rs||A.magFilter===Gn||A.minFilter===Ze||A.minFilter===Cr||A.minFilter===rs||A.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,at[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,at[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,at[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,pt[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,pt[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ct[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ge||A.minFilter!==rs&&A.minFilter!==Gn||A.type===on&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Zt(I,A){let N=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",E));let X=A.source,K=d.get(X);K===void 0&&(K={},d.set(X,K));let q=k(A);if(q!==I.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[q].usedTimes++;let yt=K[I.__cacheKey];yt!==void 0&&(K[I.__cacheKey].usedTimes--,yt.usedTimes===0&&y(A)),I.__cacheKey=q,I.__webglTexture=K[q].texture}return N}function Y(I,A,N){let X=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(X=i.TEXTURE_3D);let K=Zt(I,A),q=A.source;e.bindTexture(X,I.__webglTexture,i.TEXTURE0+N);let yt=n.get(q);if(q.version!==yt.__version||K===!0){e.activeTexture(i.TEXTURE0+N);let lt=qt.getPrimaries(qt.workingColorSpace),mt=A.colorSpace===yn?null:qt.getPrimaries(A.colorSpace),Vt=A.colorSpace===yn||lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let j=C(A.image,!1,s.maxTextureSize);j=Tt(A,j);let _t=r.convert(A.format,A.colorSpace),Rt=r.convert(A.type),Lt=M(A.internalFormat,_t,Rt,A.colorSpace,A.isVideoTexture);Nt(X,A);let xt,Wt=A.mipmaps,zt=A.isVideoTexture!==!0,jt=yt.__version===void 0||K===!0,R=q.dataReady,ht=F(A,j);if(A.isDepthTexture)Lt=v(A.format===Mi,A.type),jt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Lt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Lt,j.width,j.height,0,_t,Rt,null));else if(A.isDataTexture)if(Wt.length>0){zt&&jt&&e.texStorage2D(i.TEXTURE_2D,ht,Lt,Wt[0].width,Wt[0].height);for(let W=0,$=Wt.length;W<$;W++)xt=Wt[W],zt?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,_t,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Lt,xt.width,xt.height,0,_t,Rt,xt.data);A.generateMipmaps=!1}else zt?(jt&&e.texStorage2D(i.TEXTURE_2D,ht,Lt,j.width,j.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,_t,Rt,j.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,j.width,j.height,0,_t,Rt,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){zt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Lt,Wt[0].width,Wt[0].height,j.depth);for(let W=0,$=Wt.length;W<$;W++)if(xt=Wt[W],A.format!==He)if(_t!==null)if(zt){if(R)if(A.layerUpdates.size>0){let ft=Zc(xt.width,xt.height,A.format,A.type);for(let ut of A.layerUpdates){let Ft=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ut,xt.width,xt.height,1,_t,Ft)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,j.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Lt,xt.width,xt.height,j.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,j.depth,_t,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Lt,xt.width,xt.height,j.depth,0,_t,Rt,xt.data)}else{zt&&jt&&e.texStorage2D(i.TEXTURE_2D,ht,Lt,Wt[0].width,Wt[0].height);for(let W=0,$=Wt.length;W<$;W++)xt=Wt[W],A.format!==He?_t!==null?zt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,_t,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Lt,xt.width,xt.height,0,_t,Rt,xt.data)}else if(A.isDataArrayTexture)if(zt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Lt,j.width,j.height,j.depth),R)if(A.layerUpdates.size>0){let W=Zc(j.width,j.height,A.format,A.type);for(let $ of A.layerUpdates){let ft=j.data.subarray($*W/j.data.BYTES_PER_ELEMENT,($+1)*W/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,j.width,j.height,1,_t,Rt,ft)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_t,Rt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,j.width,j.height,j.depth,0,_t,Rt,j.data);else if(A.isData3DTexture)zt?(jt&&e.texStorage3D(i.TEXTURE_3D,ht,Lt,j.width,j.height,j.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_t,Rt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,j.width,j.height,j.depth,0,_t,Rt,j.data);else if(A.isFramebufferTexture){if(jt)if(zt)e.texStorage2D(i.TEXTURE_2D,ht,Lt,j.width,j.height);else{let W=j.width,$=j.height;for(let ft=0;ft<ht;ft++)e.texImage2D(i.TEXTURE_2D,ft,Lt,W,$,0,_t,Rt,null),W>>=1,$>>=1}}else if(Wt.length>0){if(zt&&jt){let W=gt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Lt,W.width,W.height)}for(let W=0,$=Wt.length;W<$;W++)xt=Wt[W],zt?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t,Rt,xt):e.texImage2D(i.TEXTURE_2D,W,Lt,_t,Rt,xt);A.generateMipmaps=!1}else if(zt){if(jt){let W=gt(j);e.texStorage2D(i.TEXTURE_2D,ht,Lt,W.width,W.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Rt,j)}else e.texImage2D(i.TEXTURE_2D,0,Lt,_t,Rt,j);g(A)&&f(X),yt.__version=q.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function nt(I,A,N){if(A.image.length!==6)return;let X=Zt(I,A),K=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+N);let q=n.get(K);if(K.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+N);let yt=qt.getPrimaries(qt.workingColorSpace),lt=A.colorSpace===yn?null:qt.getPrimaries(A.colorSpace),mt=A.colorSpace===yn||yt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Vt=A.isCompressedTexture||A.image[0].isCompressedTexture,j=A.image[0]&&A.image[0].isDataTexture,_t=[];for(let $=0;$<6;$++)!Vt&&!j?_t[$]=C(A.image[$],!0,s.maxCubemapSize):_t[$]=j?A.image[$].image:A.image[$],_t[$]=Tt(A,_t[$]);let Rt=_t[0],Lt=r.convert(A.format,A.colorSpace),xt=r.convert(A.type),Wt=M(A.internalFormat,Lt,xt,A.colorSpace),zt=A.isVideoTexture!==!0,jt=q.__version===void 0||X===!0,R=K.dataReady,ht=F(A,Rt);Nt(i.TEXTURE_CUBE_MAP,A);let W;if(Vt){zt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,Rt.width,Rt.height);for(let $=0;$<6;$++){W=_t[$].mipmaps;for(let ft=0;ft<W.length;ft++){let ut=W[ft];A.format!==He?Lt!==null?zt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ut.width,ut.height,Lt,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Wt,ut.width,ut.height,0,Lt,xt,ut.data)}}}else{if(W=A.mipmaps,zt&&jt){W.length>0&&ht++;let $=gt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(j){zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_t[$].width,_t[$].height,Lt,xt,_t[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,_t[$].width,_t[$].height,0,Lt,xt,_t[$].data);for(let ft=0;ft<W.length;ft++){let Ft=W[ft].image[$].image;zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Ft.width,Ft.height,Lt,xt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Wt,Ft.width,Ft.height,0,Lt,xt,Ft.data)}}else{zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Lt,xt,_t[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,Lt,xt,_t[$]);for(let ft=0;ft<W.length;ft++){let ut=W[ft];zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Lt,xt,ut.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Wt,Lt,xt,ut.image[$])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),q.__version=K.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function vt(I,A,N,X,K,q){let yt=r.convert(N.format,N.colorSpace),lt=r.convert(N.type),mt=M(N.internalFormat,yt,lt,N.colorSpace),Vt=n.get(A),j=n.get(N);if(j.__renderTarget=A,!Vt.__hasExternalTextures){let _t=Math.max(1,A.width>>q),Rt=Math.max(1,A.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,q,mt,_t,Rt,A.depth,0,yt,lt,null):e.texImage2D(K,q,mt,_t,Rt,0,yt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),At(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,j.__webglTexture,0,Q(A)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,j.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,A,N){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){let X=A.depthTexture,K=X&&X.isDepthTexture?X.type:null,q=v(A.stencilBuffer,K),yt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Q(A);At(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,q,A.width,A.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,I)}else{let X=A.textures;for(let K=0;K<X.length;K++){let q=X[K],yt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),mt=M(q.internalFormat,yt,lt,q.colorSpace),Vt=Q(A);N&&At(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,mt,A.width,A.height):At(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,mt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,mt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(A.depthTexture);X.__renderTarget=A,(!X.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z(A.depthTexture,0);let K=X.__webglTexture,q=Q(A);if(A.depthTexture.format===Ai)At(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(A.depthTexture.format===Mi)At(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Dt(I){let A=n.get(I),N=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),X){let K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=X}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Et(A.__webglFramebuffer,I)}else if(N){A.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[X]),A.__webglDepthbuffer[X]===void 0)A.__webglDepthbuffer[X]=i.createRenderbuffer(),st(A.__webglDepthbuffer[X],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),st(A.__webglDepthbuffer,I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(I,A,N){let X=n.get(I);A!==void 0&&vt(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Dt(I)}function Xt(I){let A=I.texture,N=n.get(I),X=n.get(A);I.addEventListener("dispose",T);let K=I.textures,q=I.isWebGLCubeRenderTarget===!0,yt=K.length>1;if(yt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=A.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){N.__webglFramebuffer[lt]=[];for(let mt=0;mt<A.mipmaps.length;mt++)N.__webglFramebuffer[lt][mt]=i.createFramebuffer()}else N.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){N.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)N.__webglFramebuffer[lt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(yt)for(let lt=0,mt=K.length;lt<mt;lt++){let Vt=n.get(K[lt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&At(I)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let lt=0;lt<K.length;lt++){let mt=K[lt];N.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[lt]);let Vt=r.convert(mt.format,mt.colorSpace),j=r.convert(mt.type),_t=M(mt.internalFormat,Vt,j,mt.colorSpace,I.isXRRenderTarget===!0),Rt=Q(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,_t,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,N.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let mt=0;mt<A.mipmaps.length;mt++)vt(N.__webglFramebuffer[lt][mt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else vt(N.__webglFramebuffer[lt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,mt=K.length;lt<mt;lt++){let Vt=K[lt],j=n.get(Vt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Nt(i.TEXTURE_2D,Vt),vt(N.__webglFramebuffer,I,Vt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g(Vt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),Nt(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let mt=0;mt<A.mipmaps.length;mt++)vt(N.__webglFramebuffer[mt],I,A,i.COLOR_ATTACHMENT0,lt,mt);else vt(N.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,lt,0);g(A)&&f(lt),e.unbindTexture()}I.depthBuffer&&Dt(I)}function J(I){let A=I.textures;for(let N=0,X=A.length;N<X;N++){let K=A[N];if(g(K)){let q=b(I),yt=n.get(K).__webglTexture;e.bindTexture(q,yt),f(q),e.unbindTexture()}}}let et=[],S=[];function bt(I){if(I.samples>0){if(At(I)===!1){let A=I.textures,N=I.width,X=I.height,K=i.COLOR_BUFFER_BIT,q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(I),lt=A.length>1;if(lt)for(let mt=0;mt<A.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<A.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);let Vt=n.get(A[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,K,i.NEAREST),c===!0&&(et.length=0,S.length=0,et.push(i.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(et.push(q),S.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<A.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);let Vt=n.get(A[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Q(I){return Math.min(s.maxSamples,I.samples)}function At(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Tt(I,A){let N=I.colorSpace,X=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||N!==Ti&&N!==yn&&(qt.getTransfer(N)===Qt?(X!==He||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),A}function gt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Pt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=At}function Ng(i,t){function e(n,s=yn){let r,a=qt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.BYTE;if(n===cl)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===ns)return i.HALF_FLOAT;if(n===hl)return i.ALPHA;if(n===ul)return i.RGB;if(n===He)return i.RGBA;if(n===dl)return i.LUMINANCE;if(n===fl)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===gl)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===Rs||n===Ps||n===Ls||n===Ds)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ga||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ga)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===_a||n===xa||n===Ca||n===va||n===ya||n===Ia||n===Ma||n===Sa||n===ba||n===wa||n===Ea||n===Ta||n===Ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===Da||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ja=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ln=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let C of t.hand.values()){let g=e.getJointPose(C,n),f=this._getHandJoint(l,C);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,Ka=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qa=class extends bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,C=new Ka,g=e.getContextAttributes(),f=null,b=null,M=[],v=[],F=new ct,E=null,T=new ye;T.viewport=new oe;let L=new ye;L.viewport=new oe;let y=[T,L],_=new Ja,w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=M[Y];return nt===void 0&&(nt=new Vi,M[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=M[Y];return nt===void 0&&(nt=new Vi,M[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=M[Y];return nt===void 0&&(nt=new Vi,M[Y]=nt),nt.getHandSpace()};function O(Y){let nt=v.indexOf(Y.inputSource);if(nt===-1)return;let vt=M[nt];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,l||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<M.length;Y++){let nt=v[Y];nt!==null&&(v[Y]=null,M[Y].disconnect(nt))}w=null,H=null,C.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new dn(p.framebufferWidth,p.framebufferHeight,{format:He,type:un,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,vt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Mi:Ai,vt=g.stencil?Ii:Wn);let Et={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new dn(d.textureWidth,d.textureHeight,{format:He,type:un,depthTexture:new Ys(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function Z(Y){for(let nt=0;nt<Y.removed.length;nt++){let vt=Y.removed[nt],st=v.indexOf(vt);st>=0&&(v[st]=null,M[st].disconnect(vt))}for(let nt=0;nt<Y.added.length;nt++){let vt=Y.added[nt],st=v.indexOf(vt);if(st===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=v.length){v.push(vt),st=Dt;break}else if(v[Dt]===null){v[Dt]=vt,st=Dt;break}if(st===-1)break}let Et=M[st];Et&&Et.connect(vt)}}let V=new U,tt=new U;function G(Y,nt,vt){V.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);let st=V.distanceTo(tt),Et=nt.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Pt=Et[14]/(Et[10]-1),Xt=Et[14]/(Et[10]+1),J=(Et[9]+1)/Et[5],et=(Et[9]-1)/Et[5],S=(Et[8]-1)/Et[0],bt=(Dt[8]+1)/Dt[0],Q=Pt*S,At=Pt*bt,rt=st/(-S+bt),Tt=rt*-S;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Tt),Y.translateZ(rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let gt=Pt+rt,I=Xt+rt,A=Q-Tt,N=At+(st-Tt),X=J*Xt/I*gt,K=et*Xt/I*gt;Y.projectionMatrix.makePerspective(A,N,X,K,gt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,vt=Y.far;C.texture!==null&&(C.depthNear>0&&(nt=C.depthNear),C.depthFar>0&&(vt=C.depthFar)),_.near=L.near=T.near=nt,_.far=L.far=T.far=vt,(w!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,H=_.far),T.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,_.layers.mask=T.layers.mask|L.layers.mask;let st=Y.parent,Et=_.cameras;at(_,st);for(let Dt=0;Dt<Et.length;Dt++)at(Et[Dt],st);Et.length===2?G(_,T,L):_.projectionMatrix.copy(T.projectionMatrix),pt(Y,_,st)};function pt(Y,nt,vt){vt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(_)};let Ct=null;function Nt(Y,nt){if(h=nt.getViewerPose(l||a),m=nt,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let st=!1;vt.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let Dt=0;Dt<vt.length;Dt++){let Pt=vt[Dt],Xt=null;if(p!==null)Xt=p.getViewport(Pt);else{let et=u.getViewSubImage(d,Pt);Xt=et.viewport,Dt===0&&(t.setRenderTargetTextures(b,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(b))}let J=y[Dt];J===void 0&&(J=new ye,J.layers.enable(Dt),J.viewport=new oe,y[Dt]=J),J.matrix.fromArray(Pt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Pt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Dt===0&&(_.matrix.copy(J.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(J)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Dt=u.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&C.init(t,Dt,s.renderState)}}for(let vt=0;vt<M.length;vt++){let st=v[vt],Et=M[vt];st!==null&&Et!==void 0&&Et.update(st,nt,l||a)}Ct&&Ct(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let Zt=new Il;Zt.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){Ct=Y},this.dispose=function(){}}},On=new $e,zg=new re;function kg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,yl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,b,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),C(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,b,M):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Se&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Se&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=t.get(f),M=b.envMap,v=b.envMapRotation;M&&(g.envMap.value=M,On.copy(v),On.x*=-1,On.y*=-1,On.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),g.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(On)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,b,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Se&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function C(g,f){let b=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let v=M.program;n.uniformBlockBinding(b,v)}function l(b,M){let v=s[b.id];v===void 0&&(m(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));let F=M.program;n.updateUBOMapping(b,F);let E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){let M=u();b.__bindingPointIndex=M;let v=i.createBuffer(),F=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,F,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=s[b.id],v=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let L=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,_=L.length;y<_;y++){let w=L[y];if(p(w,E,y,F)===!0){let H=w.__offset,O=Array.isArray(w.value)?w.value:[w.value],k=0;for(let Z=0;Z<O.length;Z++){let V=O[Z],tt=C(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+k,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,k),k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,v,F){let E=b.value,T=M+"_"+v;if(F[T]===void 0)return typeof E=="number"||typeof E=="boolean"?F[T]=E:F[T]=E.clone(),!0;{let L=F[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return F[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(b){let M=b.uniforms,v=0,F=16;for(let T=0,L=M.length;T<L;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,w=y.length;_<w;_++){let H=y[_],O=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Z=O.length;k<Z;k++){let V=O[k],tt=C(V),G=v%F,at=G%tt.boundary,pt=G+at;v+=at,pt!==0&&F-pt<tt.storage&&(v+=F-pt),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=tt.storage}}}let E=v%F;return E>0&&(v+=F-E),b.__size=v,b.__cache={},this}function C(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){let M=b.target;M.removeEventListener("dispose",g);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Zs=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),C=new Int32Array(4),g=null,f=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Mn,this.toneMappingExposure=1;let v=this,F=!1,E=0,T=0,L=null,y=-1,_=null,w=new oe,H=new oe,O=null,k=new Ht(0),Z=0,V=e.width,tt=e.height,G=1,at=null,pt=null,Ct=new oe(0,0,V,tt),Nt=new oe(0,0,V,tt),Zt=!1,Y=new Ji,nt=!1,vt=!1,st=new re,Et=new re,Dt=new U,Pt=new oe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function et(){return L===null?G:1}let S=n;function bt(x,P){return e.getContext(x,P)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),S===null){let P="webgl2";if(S=bt(P,x),S===null)throw bt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Q,At,rt,Tt,gt,I,A,N,X,K,q,yt,lt,mt,Vt,j,_t,Rt,Lt,xt,Wt,zt,jt,R;function ht(){Q=new ip(S),Q.init(),zt=new Ng(S,Q),At=new Kf(S,Q,t,zt),rt=new Lg(S,Q),At.reverseDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),Tt=new ap(S),gt=new xg,I=new Ug(S,Q,rt,gt,At,zt,Tt),A=new jf(v),N=new np(v),X=new du(S),jt=new $f(S,X),K=new sp(S,X,Tt,jt),q=new cp(S,K,X,Tt),Lt=new op(S,At,I),j=new Qf(gt),yt=new _g(v,A,N,Q,At,jt,j),lt=new kg(v,gt),mt=new vg,Vt=new wg(Q),Rt=new Zf(v,A,N,rt,q,p,c),_t=new Rg(v,q,At),R=new Vg(S,Tt,At,rt),xt=new Jf(S,Q,Tt),Wt=new rp(S,Q,Tt),Tt.programs=yt.programs,v.capabilities=At,v.extensions=Q,v.properties=gt,v.renderLists=mt,v.shadowMap=_t,v.state=rt,v.info=Tt}ht();let W=new Qa(v,S);this.xr=W,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let x=Q.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Q.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(V,tt,!1))},this.getSize=function(x){return x.set(V,tt)},this.setSize=function(x,P,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,tt=P,e.width=Math.floor(x*G),e.height=Math.floor(P*G),B===!0&&(e.style.width=x+"px",e.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(V*G,tt*G).floor()},this.setDrawingBufferSize=function(x,P,B){V=x,tt=P,G=B,e.width=Math.floor(x*B),e.height=Math.floor(P*B),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(Ct)},this.setViewport=function(x,P,B,z){x.isVector4?Ct.set(x.x,x.y,x.z,x.w):Ct.set(x,P,B,z),rt.viewport(w.copy(Ct).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Nt)},this.setScissor=function(x,P,B,z){x.isVector4?Nt.set(x.x,x.y,x.z,x.w):Nt.set(x,P,B,z),rt.scissor(H.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(x){rt.setScissorTest(Zt=x)},this.setOpaqueSort=function(x){at=x},this.setTransparentSort=function(x){pt=x},this.getClearColor=function(x){return x.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(x=!0,P=!0,B=!0){let z=0;if(x){let D=!1;if(L!==null){let it=L.texture.format;D=it===Eo||it===wo||it===bo}if(D){let it=L.texture.type,dt=it===un||it===Wn||it===qi||it===Ii||it===Mo||it===So,It=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Ut=It.r,Ot=It.g,St=It.b;dt?(m[0]=Ut,m[1]=Ot,m[2]=St,m[3]=Mt,S.clearBufferuiv(S.COLOR,0,m)):(C[0]=Ut,C[1]=Ot,C[2]=St,C[3]=Mt,S.clearBufferiv(S.COLOR,0,C))}else z|=S.COLOR_BUFFER_BIT}P&&(z|=S.DEPTH_BUFFER_BIT),B&&(z|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),Vt.dispose(),gt.dispose(),A.dispose(),N.dispose(),q.dispose(),jt.dispose(),R.dispose(),yt.dispose(),W.dispose(),W.removeEventListener("sessionstart",ko),W.removeEventListener("sessionend",Vo),Pn.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let x=Tt.autoReset,P=_t.enabled,B=_t.autoUpdate,z=_t.needsUpdate,D=_t.type;ht(),Tt.autoReset=x,_t.enabled=P,_t.autoUpdate=B,_t.needsUpdate=z,_t.type=D}function ut(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ft(x){let P=x.target;P.removeEventListener("dispose",Ft),ae(P)}function ae(x){me(x),gt.remove(x)}function me(x){let P=gt.get(x).programs;P!==void 0&&(P.forEach(function(B){yt.releaseProgram(B)}),x.isShaderMaterial&&yt.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,B,z,D,it){P===null&&(P=Xt);let dt=D.isMesh&&D.matrixWorld.determinant()<0,It=Bl(x,P,B,z,D);rt.setMaterial(z,dt);let Mt=B.index,Ut=1;if(z.wireframe===!0){if(Mt=K.getWireframeAttribute(B),Mt===void 0)return;Ut=2}let Ot=B.drawRange,St=B.attributes.position,Yt=Ot.start*Ut,te=(Ot.start+Ot.count)*Ut;it!==null&&(Yt=Math.max(Yt,it.start*Ut),te=Math.min(te,(it.start+it.count)*Ut)),Mt!==null?(Yt=Math.max(Yt,0),te=Math.min(te,Mt.count)):St!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,St.count));let ee=te-Yt;if(ee<0||ee===1/0)return;jt.setup(D,z,It,B,Mt);let Me,$t=xt;if(Mt!==null&&(Me=X.get(Mt),$t=Wt,$t.setIndex(Me)),D.isMesh)z.wireframe===!0?(rt.setLineWidth(z.wireframeLinewidth*et()),$t.setMode(S.LINES)):$t.setMode(S.TRIANGLES);else if(D.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),rt.setLineWidth(wt*et()),D.isLineSegments?$t.setMode(S.LINES):D.isLineLoop?$t.setMode(S.LINE_LOOP):$t.setMode(S.LINE_STRIP)}else D.isPoints?$t.setMode(S.POINTS):D.isSprite&&$t.setMode(S.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let wt=D._multiDrawStarts,je=D._multiDrawCounts,Jt=D._multiDrawCount,Fe=Mt?X.get(Mt).bytesPerElement:1,Qn=gt.get(z).currentProgram.getUniforms();for(let we=0;we<Jt;we++)Qn.setValue(S,"_gl_DrawID",we),$t.render(wt[we]/Fe,je[we])}else if(D.isInstancedMesh)$t.renderInstances(Yt,ee,D.count);else if(B.isInstancedBufferGeometry){let wt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,je=Math.min(B.instanceCount,wt);$t.renderInstances(Yt,ee,je)}else $t.render(Yt,ee)};function Kt(x,P,B){x.transparent===!0&&x.side===Ve&&x.forceSinglePass===!1?(x.side=Se,x.needsUpdate=!0,ss(x,P,B),x.side=Sn,x.needsUpdate=!0,ss(x,P,B),x.side=Ve):ss(x,P,B)}this.compile=function(x,P,B=null){B===null&&(B=x),f=Vt.get(B),f.init(P),M.push(f),B.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==B&&x.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let z=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let it=D.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){let It=it[dt];Kt(It,B,D),z.add(It)}else Kt(it,B,D),z.add(it)}),M.pop(),f=null,z},this.compileAsync=function(x,P,B=null){let z=this.compile(x,P,B);return new Promise(D=>{function it(){if(z.forEach(function(dt){gt.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){D(x);return}setTimeout(it,10)}Q.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ne=null;function Qe(x){Ne&&Ne(x)}function ko(){Pn.stop()}function Vo(){Pn.start()}let Pn=new Il;Pn.setAnimationLoop(Qe),typeof self!="undefined"&&Pn.setContext(self),this.setAnimationLoop=function(x){Ne=x,W.setAnimationLoop(x),x===null?Pn.stop():Pn.start()},W.addEventListener("sessionstart",ko),W.addEventListener("sessionend",Vo),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(P),P=W.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,P,L),f=Vt.get(x,M.length),f.init(P),M.push(f),Et.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Y.setFromProjectionMatrix(Et),vt=this.localClippingEnabled,nt=j.init(this.clippingPlanes,vt),g=mt.get(x,b.length),g.init(),b.push(g),W.enabled===!0&&W.isPresenting===!0){let it=v.xr.getDepthSensingMesh();it!==null&&xr(it,P,-1/0,v.sortObjects)}xr(x,P,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(at,pt),J=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,J&&Rt.addToRenderList(g,x),this.info.render.frame++,nt===!0&&j.beginShadows();let B=f.state.shadowsArray;_t.render(B,x,P),nt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,D=g.transmissive;if(f.setupLights(),P.isArrayCamera){let it=P.cameras;if(D.length>0)for(let dt=0,It=it.length;dt<It;dt++){let Mt=it[dt];Go(z,D,x,Mt)}J&&Rt.render(x);for(let dt=0,It=it.length;dt<It;dt++){let Mt=it[dt];Ho(g,x,Mt,Mt.viewport)}}else D.length>0&&Go(z,D,x,P),J&&Rt.render(x),Ho(g,x,P);L!==null&&(I.updateMultisampleRenderTarget(L),I.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(v,x,P),jt.resetDefaultState(),y=-1,_=null,M.pop(),M.length>0?(f=M[M.length-1],nt===!0&&j.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function xr(x,P,B,z){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){z&&Pt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Et);let dt=q.update(x),It=x.material;It.visible&&g.push(x,dt,It,B,Pt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){let dt=q.update(x),It=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pt.copy(x.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Pt.copy(dt.boundingSphere.center)),Pt.applyMatrix4(x.matrixWorld).applyMatrix4(Et)),Array.isArray(It)){let Mt=dt.groups;for(let Ut=0,Ot=Mt.length;Ut<Ot;Ut++){let St=Mt[Ut],Yt=It[St.materialIndex];Yt&&Yt.visible&&g.push(x,dt,Yt,B,Pt.z,St)}}else It.visible&&g.push(x,dt,It,B,Pt.z,null)}}let it=x.children;for(let dt=0,It=it.length;dt<It;dt++)xr(it[dt],P,B,z)}function Ho(x,P,B,z){let D=x.opaque,it=x.transmissive,dt=x.transparent;f.setupLightsView(B),nt===!0&&j.setGlobalState(v.clippingPlanes,B),z&&rt.viewport(w.copy(z)),D.length>0&&is(D,P,B),it.length>0&&is(it,P,B),dt.length>0&&is(dt,P,B),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Go(x,P,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new dn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ns:un,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let it=f.state.transmissionRenderTarget[z.id],dt=z.viewport||w;it.setSize(dt.z,dt.w);let It=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(k),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),J&&Rt.render(B);let Mt=v.toneMapping;v.toneMapping=Mn;let Ut=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),nt===!0&&j.setGlobalState(v.clippingPlanes,z),is(x,B,z),I.updateMultisampleRenderTarget(it),I.updateRenderTargetMipmap(it),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let St=0,Yt=P.length;St<Yt;St++){let te=P[St],ee=te.object,Me=te.geometry,$t=te.material,wt=te.group;if($t.side===Ve&&ee.layers.test(z.layers)){let je=$t.side;$t.side=Se,$t.needsUpdate=!0,Wo(ee,B,z,Me,$t,wt),$t.side=je,$t.needsUpdate=!0,Ot=!0}}Ot===!0&&(I.updateMultisampleRenderTarget(it),I.updateRenderTargetMipmap(it))}v.setRenderTarget(It),v.setClearColor(k,Z),Ut!==void 0&&(z.viewport=Ut),v.toneMapping=Mt}function is(x,P,B){let z=P.isScene===!0?P.overrideMaterial:null;for(let D=0,it=x.length;D<it;D++){let dt=x[D],It=dt.object,Mt=dt.geometry,Ut=z===null?dt.material:z,Ot=dt.group;It.layers.test(B.layers)&&Wo(It,P,B,Mt,Ut,Ot)}}function Wo(x,P,B,z,D,it){x.onBeforeRender(v,P,B,z,D,it),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(v,P,B,z,x,it),D.transparent===!0&&D.side===Ve&&D.forceSinglePass===!1?(D.side=Se,D.needsUpdate=!0,v.renderBufferDirect(B,P,z,D,x,it),D.side=Sn,D.needsUpdate=!0,v.renderBufferDirect(B,P,z,D,x,it),D.side=Ve):v.renderBufferDirect(B,P,z,D,x,it),x.onAfterRender(v,P,B,z,D,it)}function ss(x,P,B){P.isScene!==!0&&(P=Xt);let z=gt.get(x),D=f.state.lights,it=f.state.shadowsArray,dt=D.state.version,It=yt.getParameters(x,D.state,it,P,B),Mt=yt.getProgramCacheKey(It),Ut=z.programs;z.environment=x.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(x.isMeshStandardMaterial?N:A).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Ut===void 0&&(x.addEventListener("dispose",Ft),Ut=new Map,z.programs=Ut);let Ot=Ut.get(Mt);if(Ot!==void 0){if(z.currentProgram===Ot&&z.lightsStateVersion===dt)return qo(x,It),Ot}else It.uniforms=yt.getUniforms(x),x.onBeforeCompile(It,v),Ot=yt.acquireProgram(It,Mt),Ut.set(Mt,Ot),z.uniforms=It.uniforms;let St=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(St.clippingPlanes=j.uniform),qo(x,It),z.needsLights=kl(x),z.lightsStateVersion=dt,z.needsLights&&(St.ambientLightColor.value=D.state.ambient,St.lightProbe.value=D.state.probe,St.directionalLights.value=D.state.directional,St.directionalLightShadows.value=D.state.directionalShadow,St.spotLights.value=D.state.spot,St.spotLightShadows.value=D.state.spotShadow,St.rectAreaLights.value=D.state.rectArea,St.ltc_1.value=D.state.rectAreaLTC1,St.ltc_2.value=D.state.rectAreaLTC2,St.pointLights.value=D.state.point,St.pointLightShadows.value=D.state.pointShadow,St.hemisphereLights.value=D.state.hemi,St.directionalShadowMap.value=D.state.directionalShadowMap,St.directionalShadowMatrix.value=D.state.directionalShadowMatrix,St.spotShadowMap.value=D.state.spotShadowMap,St.spotLightMatrix.value=D.state.spotLightMatrix,St.spotLightMap.value=D.state.spotLightMap,St.pointShadowMap.value=D.state.pointShadowMap,St.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Ot,z.uniformsList=null,Ot}function Xo(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=xi.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function qo(x,P){let B=gt.get(x);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function Bl(x,P,B,z,D){P.isScene!==!0&&(P=Xt),I.resetTextureUnits();let it=P.fog,dt=z.isMeshStandardMaterial?P.environment:null,It=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ti,Mt=(z.isMeshStandardMaterial?N:A).get(z.envMap||dt),Ut=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ot=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,te=!!B.morphAttributes.color,ee=Mn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ee=v.toneMapping);let Me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Me!==void 0?Me.length:0,wt=gt.get(z),je=f.state.lights;if(nt===!0&&(vt===!0||x!==_)){let Pe=x===_&&z.id===y;j.setState(z,x,Pe)}let Jt=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==je.state.version||wt.outputColorSpace!==It||D.isBatchedMesh&&wt.batching===!1||!D.isBatchedMesh&&wt.batching===!0||D.isBatchedMesh&&wt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&wt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&wt.instancing===!1||!D.isInstancedMesh&&wt.instancing===!0||D.isSkinnedMesh&&wt.skinning===!1||!D.isSkinnedMesh&&wt.skinning===!0||D.isInstancedMesh&&wt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&wt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&wt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&wt.instancingMorph===!1&&D.morphTexture!==null||wt.envMap!==Mt||z.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==j.numPlanes||wt.numIntersection!==j.numIntersection)||wt.vertexAlphas!==Ut||wt.vertexTangents!==Ot||wt.morphTargets!==St||wt.morphNormals!==Yt||wt.morphColors!==te||wt.toneMapping!==ee||wt.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,wt.__version=z.version);let Fe=wt.currentProgram;Jt===!0&&(Fe=ss(z,P,D));let Qn=!1,we=!1,Pi=!1,ne=Fe.getUniforms(),qe=wt.uniforms;if(rt.useProgram(Fe.program)&&(Qn=!0,we=!0,Pi=!0),z.id!==y&&(y=z.id,we=!0),Qn||_!==x){rt.buffers.depth.getReversed()?(st.copy(x.projectionMatrix),qh(st),Yh(st),ne.setValue(S,"projectionMatrix",st)):ne.setValue(S,"projectionMatrix",x.projectionMatrix),ne.setValue(S,"viewMatrix",x.matrixWorldInverse);let pn=ne.map.cameraPosition;pn!==void 0&&pn.setValue(S,Dt.setFromMatrixPosition(x.matrixWorld)),At.logarithmicDepthBuffer&&ne.setValue(S,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ne.setValue(S,"isOrthographic",x.isOrthographicCamera===!0),_!==x&&(_=x,we=!0,Pi=!0)}if(D.isSkinnedMesh){ne.setOptional(S,D,"bindMatrix"),ne.setOptional(S,D,"bindMatrixInverse");let Pe=D.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ne.setValue(S,"boneTexture",Pe.boneTexture,I))}D.isBatchedMesh&&(ne.setOptional(S,D,"batchingTexture"),ne.setValue(S,"batchingTexture",D._matricesTexture,I),ne.setOptional(S,D,"batchingIdTexture"),ne.setValue(S,"batchingIdTexture",D._indirectTexture,I),ne.setOptional(S,D,"batchingColorTexture"),D._colorsTexture!==null&&ne.setValue(S,"batchingColorTexture",D._colorsTexture,I));let Li=B.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Lt.update(D,B,Fe),(we||wt.receiveShadow!==D.receiveShadow)&&(wt.receiveShadow=D.receiveShadow,ne.setValue(S,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(qe.envMap.value=Mt,qe.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(qe.envMapIntensity.value=P.environmentIntensity),we&&(ne.setValue(S,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&zl(qe,Pi),it&&z.fog===!0&&lt.refreshFogUniforms(qe,it),lt.refreshMaterialUniforms(qe,z,G,tt,f.state.transmissionRenderTarget[x.id]),xi.upload(S,Xo(wt),qe,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xi.upload(S,Xo(wt),qe,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ne.setValue(S,"center",D.center),ne.setValue(S,"modelViewMatrix",D.modelViewMatrix),ne.setValue(S,"normalMatrix",D.normalMatrix),ne.setValue(S,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Pe=z.uniformsGroups;for(let pn=0,gn=Pe.length;pn<gn;pn++){let Yo=Pe[pn];R.update(Yo,Fe),R.bind(Yo,Fe)}}return Fe}function zl(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function kl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,P,B){gt.get(x.texture).__webglTexture=P,gt.get(x.depthTexture).__webglTexture=B;let z=gt.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){let B=gt.get(x);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,B=0){L=x,E=P,T=B;let z=!0,D=null,it=!1,dt=!1;if(x){let Mt=gt.get(x);if(Mt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(S.FRAMEBUFFER,null),z=!1;else if(Mt.__webglFramebuffer===void 0)I.setupRenderTarget(x);else if(Mt.__hasExternalTextures)I.rebindTextures(x,gt.get(x.texture).__webglTexture,gt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let St=x.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&gt.has(St)&&(x.width!==St.image.width||x.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(x)}}let Ut=x.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);let Ot=gt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ot[P])?D=Ot[P][B]:D=Ot[P],it=!0):x.samples>0&&I.useMultisampledRTT(x)===!1?D=gt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ot)?D=Ot[B]:D=Ot,w.copy(x.viewport),H.copy(x.scissor),O=x.scissorTest}else w.copy(Ct).multiplyScalar(G).floor(),H.copy(Nt).multiplyScalar(G).floor(),O=Zt;if(rt.bindFramebuffer(S.FRAMEBUFFER,D)&&z&&rt.drawBuffers(x,D),rt.viewport(w),rt.scissor(H),rt.setScissorTest(O),it){let Mt=gt.get(x.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+P,Mt.__webglTexture,B)}else if(dt){let Mt=gt.get(x.texture),Ut=P||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Mt.__webglTexture,B||0,Ut)}y=-1},this.readRenderTargetPixels=function(x,P,B,z,D,it,dt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(It=It[dt]),It){rt.bindFramebuffer(S.FRAMEBUFFER,It);try{let Mt=x.texture,Ut=Mt.format,Ot=Mt.type;if(!At.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-z&&B>=0&&B<=x.height-D&&S.readPixels(P,B,z,D,zt.convert(Ut),zt.convert(Ot),it)}finally{let Mt=L!==null?gt.get(L).__webglFramebuffer:null;rt.bindFramebuffer(S.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(x,P,B,z,D,it,dt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=gt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(It=It[dt]),It){let Mt=x.texture,Ut=Mt.format,Ot=Mt.type;if(!At.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=x.width-z&&B>=0&&B<=x.height-D){rt.bindFramebuffer(S.FRAMEBUFFER,It);let St=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,St),S.bufferData(S.PIXEL_PACK_BUFFER,it.byteLength,S.STREAM_READ),S.readPixels(P,B,z,D,zt.convert(Ut),zt.convert(Ot),0);let Yt=L!==null?gt.get(L).__webglFramebuffer:null;rt.bindFramebuffer(S.FRAMEBUFFER,Yt);let te=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Xh(S,te,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,St),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,it),S.deleteBuffer(St),S.deleteSync(te),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,P=null,B=0){x.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,x=arguments[1]);let z=Math.pow(2,-B),D=Math.floor(x.image.width*z),it=Math.floor(x.image.height*z),dt=P!==null?P.x:0,It=P!==null?P.y:0;I.setTexture2D(x,0),S.copyTexSubImage2D(S.TEXTURE_2D,B,0,0,dt,It,D,it),rt.unbindTexture()},this.copyTextureToTexture=function(x,P,B=null,z=null,D=0){x.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],P=arguments[2],D=arguments[3]||0,B=null);let it,dt,It,Mt,Ut,Ot,St,Yt,te,ee=x.isCompressedTexture?x.mipmaps[D]:x.image;B!==null?(it=B.max.x-B.min.x,dt=B.max.y-B.min.y,It=B.isBox3?B.max.z-B.min.z:1,Mt=B.min.x,Ut=B.min.y,Ot=B.isBox3?B.min.z:0):(it=ee.width,dt=ee.height,It=ee.depth||1,Mt=0,Ut=0,Ot=0),z!==null?(St=z.x,Yt=z.y,te=z.z):(St=0,Yt=0,te=0);let Me=zt.convert(P.format),$t=zt.convert(P.type),wt;P.isData3DTexture?(I.setTexture3D(P,0),wt=S.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(I.setTexture2DArray(P,0),wt=S.TEXTURE_2D_ARRAY):(I.setTexture2D(P,0),wt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,P.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,P.unpackAlignment);let je=S.getParameter(S.UNPACK_ROW_LENGTH),Jt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Fe=S.getParameter(S.UNPACK_SKIP_PIXELS),Qn=S.getParameter(S.UNPACK_SKIP_ROWS),we=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ee.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ee.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Mt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ut),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ot);let Pi=x.isDataArrayTexture||x.isData3DTexture,ne=P.isDataArrayTexture||P.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let qe=gt.get(x),Li=gt.get(P),Pe=gt.get(qe.__renderTarget),pn=gt.get(Li.__renderTarget);rt.bindFramebuffer(S.READ_FRAMEBUFFER,Pe.__webglFramebuffer),rt.bindFramebuffer(S.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let gn=0;gn<It;gn++)Pi&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,gt.get(x).__webglTexture,D,Ot+gn),x.isDepthTexture?(ne&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,gt.get(P).__webglTexture,D,te+gn),S.blitFramebuffer(Mt,Ut,it,dt,St,Yt,it,dt,S.DEPTH_BUFFER_BIT,S.NEAREST)):ne?S.copyTexSubImage3D(wt,D,St,Yt,te+gn,Mt,Ut,it,dt):S.copyTexSubImage2D(wt,D,St,Yt,te+gn,Mt,Ut,it,dt);rt.bindFramebuffer(S.READ_FRAMEBUFFER,null),rt.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ne?x.isDataTexture||x.isData3DTexture?S.texSubImage3D(wt,D,St,Yt,te,it,dt,It,Me,$t,ee.data):P.isCompressedArrayTexture?S.compressedTexSubImage3D(wt,D,St,Yt,te,it,dt,It,Me,ee.data):S.texSubImage3D(wt,D,St,Yt,te,it,dt,It,Me,$t,ee):x.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,D,St,Yt,it,dt,Me,$t,ee.data):x.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,D,St,Yt,ee.width,ee.height,Me,ee.data):S.texSubImage2D(S.TEXTURE_2D,D,St,Yt,it,dt,Me,$t,ee);S.pixelStorei(S.UNPACK_ROW_LENGTH,je),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Jt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Fe),S.pixelStorei(S.UNPACK_SKIP_ROWS,Qn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,we),D===0&&P.generateMipmaps&&S.generateMipmap(wt),rt.unbindTexture()},this.copyTextureToTexture3D=function(x,P,B=null,z=null,D=0){return x.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,x=arguments[2],P=arguments[3],D=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,P,B,z,D)},this.initRenderTarget=function(x){gt.get(x).__webglFramebuffer===void 0&&I.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?I.setTextureCube(x,0):x.isData3DTexture?I.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?I.setTexture2DArray(x,0):I.setTexture2D(x,0),rt.unbindTexture()},this.resetState=function(){E=0,T=0,L=null,rt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var $s=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Js=class extends Re{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ue=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ct:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],a=[],o=new U,c=new re;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ki=class extends Ue{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ja=class extends Ki{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Po(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var bs=new U,Zr=new Po,$r=new Po,Jr=new Po,to=class extends Ue{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(bs.subVectors(s[0],s[1]).add(s[0]),l=bs);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),C=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);C<1e-4&&(C=1),m<1e-4&&(m=C),g<1e-4&&(g=C),Zr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,C,g),$r.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,C,g),Jr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,C,g)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),$r.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Jr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Zr.calc(c),$r.calc(c),Jr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $c(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Hg(i,t){let e=1-i;return e*e*t}function Gg(i,t){return 2*(1-i)*i*t}function Wg(i,t){return i*i*t}function Hi(i,t,e,n){return Hg(i,t)+Gg(i,e)+Wg(i,n)}function Xg(i,t){let e=1-i;return e*e*e*t}function qg(i,t){let e=1-i;return 3*e*e*i*t}function Yg(i,t){return 3*(1-i)*i*i*t}function Zg(i,t){return i*i*i*t}function Gi(i,t,e,n,s){return Xg(i,t)+qg(i,e)+Yg(i,n)+Zg(i,s)}var Ks=class extends Ue{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,s.x,r.x,a.x,o.x),Gi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends Ue{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,s.x,r.x,a.x,o.x),Gi(t,s.y,r.y,a.y,o.y),Gi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qs=class extends Ue{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends Ue{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},js=class extends Ue{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Hi(t,s.x,r.x,a.x),Hi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends Ue{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Hi(t,s.x,r.x,a.x),Hi(t,s.y,r.y,a.y),Hi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tr=class extends Ue{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set($c(o,c.x,l.x,h.x,u.x),$c(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},so=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:to,CubicBezierCurve:Ks,CubicBezierCurve3:eo,EllipseCurve:Ki,LineCurve:Qs,LineCurve3:no,QuadraticBezierCurve:js,QuadraticBezierCurve3:io,SplineCurve:tr}),ro=class extends Ue{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new so[s.type]().fromJSON(s))}return this}},wi=class extends ro{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qs(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new js(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ks(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new tr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Ki(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var er=class i extends fn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,C=[],g=n/2,f=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2));function b(){let v=new U,F=new U,E=0,T=(e-t)/n;for(let L=0;L<=r;L++){let y=[],_=L/r,w=_*(e-t)+t;for(let H=0;H<=s;H++){let O=H/s,k=O*c+o,Z=Math.sin(k),V=Math.cos(k);F.x=w*Z,F.y=-_*n+g,F.z=w*V,u.push(F.x,F.y,F.z),v.set(Z,T,V).normalize(),d.push(v.x,v.y,v.z),p.push(O,1-_),y.push(m++)}C.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){let _=C[y][L],w=C[y+1][L],H=C[y+1][L+1],O=C[y][L+1];(t>0||y!==0)&&(h.push(_,w,O),E+=3),(e>0||y!==r-1)&&(h.push(w,H,O),E+=3)}l.addGroup(f,E,0),f+=E}function M(v){let F=m,E=new ct,T=new U,L=0,y=v===!0?t:e,_=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*_,0),d.push(0,_,0),p.push(.5,.5),m++;let w=m;for(let H=0;H<=s;H++){let k=H/s*c+o,Z=Math.cos(k),V=Math.sin(k);T.x=y*V,T.y=g*_,T.z=y*Z,u.push(T.x,T.y,T.z),d.push(0,_,0),E.x=Z*.5+.5,E.y=V*.5*_+.5,p.push(E.x,E.y),m++}for(let H=0;H<s;H++){let O=F+H,k=w+H;v===!0?h.push(k,k+1,O):h.push(k+1,k,O),L+=3}l.addGroup(f,L,v===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qi=class extends wi{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wi().fromJSON(s))}return this}},$g={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=El(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=tm(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return ji(r,a,e,o,c,p,0),a}};function El(i,t,e,n,s){let r,a;if(s===um(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Jc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Jc(r,i[r],i[r+1],a);return a&&dr(a,a.next)&&(es(a),a=a.next),a}function Zn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(dr(e,e.next)||se(e.prev,e,e.next)===0)){if(es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ji(i,t,e,n,s,r,a){if(!i)return;!a&&r&&rm(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Kg(i,n,s,r):Jg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),es(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Qg(Zn(i),t,e),ji(i,t,e,n,s,r,2)):a===2&&jg(i,t,e,n,s,r):ji(Zn(i),t,e,n,s,r,1);break}}}function Jg(i){let t=i.prev,e=i,n=i.next;if(se(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&gi(s,o,r,c,a,l,m.x,m.y)&&se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(se(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,C=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,f=ao(p,m,t,e,n),b=ao(C,g,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=f&&v&&v.z<=b;){if(M.x>=p&&M.x<=C&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&gi(o,h,c,u,l,d,M.x,M.y)&&se(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=C&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&gi(o,h,c,u,l,d,v.x,v.y)&&se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=C&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&gi(o,h,c,u,l,d,M.x,M.y)&&se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=C&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&gi(o,h,c,u,l,d,v.x,v.y)&&se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!dr(s,r)&&Tl(s,n,n.next,r)&&ts(s,r)&&ts(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),es(n),es(n.next),n=i=r),n=n.next}while(n!==i);return Zn(n)}function jg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cm(a,o)){let c=Rl(a,o);a=Zn(a,a.next),c=Zn(c,c.next),ji(a,t,e,n,s,r,0),ji(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tm(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=El(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(om(l));for(s.sort(em),r=0;r<s.length;r++)e=nm(s[r],e);return e}function em(i,t){return i.x-t.x}function nm(i,t){let e=im(i,t);if(!e)return t;let n=Rl(e,i);return Zn(n,n.next),Zn(e,e.next)}function im(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&gi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ts(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&sm(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function sm(i,t){return se(i.prev,i,t.prev)<0&&se(t.next,i,i.next)<0}function rm(i,t,e,n){let s=i;do s.z===0&&(s.z=ao(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,am(s)}function am(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function ao(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function om(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!lm(i,t)&&(ts(i,t)&&ts(t,i)&&hm(i,t)&&(se(i.prev,i,t.prev)||se(i,t.prev,t))||dr(i,t)&&se(i.prev,i,i.next)>0&&se(t.prev,t,t.next)>0)}function se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function dr(i,t){return i.x===t.x&&i.y===t.y}function Tl(i,t,e,n){let s=Es(se(i,t,e)),r=Es(se(i,t,n)),a=Es(se(e,n,i)),o=Es(se(e,n,t));return!!(s!==r&&a!==o||s===0&&ws(i,e,t)||r===0&&ws(i,n,t)||a===0&&ws(e,i,n)||o===0&&ws(e,t,n))}function ws(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Es(i){return i>0?1:i<0?-1:0}function lm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ts(i,t){return se(i.prev,i,i.next)<0?se(i,t,i.next)>=0&&se(i,i.prev,t)>=0:se(i,t,i.prev)<0||se(i,i.next,t)<0}function hm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Rl(i,t){let e=new oo(i.i,i.x,i.y),n=new oo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jc(i,t,e,n){let s=new oo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function um(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Kc(t),Qc(n,t);let a=t.length;e.forEach(Kc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Qc(n,e[c]);let o=$g.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Kc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var nr=class i extends fn{constructor(t=new Qi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,C=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:dm,M,v=!1,F,E,T,L;f&&(M=f.getSpacedPoints(h),v=!0,d=!1,F=f.computeFrenetFrames(h,!1),E=new U,T=new U,L=new U),d||(g=0,p=0,m=0,C=0);let y=o.extractPoints(l),_=y.shape,w=y.holes;if(!Wi.isClockWise(_)){_=_.reverse();for(let J=0,et=w.length;J<et;J++){let S=w[J];Wi.isClockWise(S)&&(w[J]=S.reverse())}}let O=Wi.triangulateShape(_,w),k=_;for(let J=0,et=w.length;J<et;J++){let S=w[J];_=_.concat(S)}function Z(J,et,S){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,S)}let V=_.length,tt=O.length;function G(J,et,S){let bt,Q,At,rt=J.x-et.x,Tt=J.y-et.y,gt=S.x-J.x,I=S.y-J.y,A=rt*rt+Tt*Tt,N=rt*I-Tt*gt;if(Math.abs(N)>Number.EPSILON){let X=Math.sqrt(A),K=Math.sqrt(gt*gt+I*I),q=et.x-Tt/X,yt=et.y+rt/X,lt=S.x-I/K,mt=S.y+gt/K,Vt=((lt-q)*I-(mt-yt)*gt)/(rt*I-Tt*gt);bt=q+rt*Vt-J.x,Q=yt+Tt*Vt-J.y;let j=bt*bt+Q*Q;if(j<=2)return new ct(bt,Q);At=Math.sqrt(j/2)}else{let X=!1;rt>Number.EPSILON?gt>Number.EPSILON&&(X=!0):rt<-Number.EPSILON?gt<-Number.EPSILON&&(X=!0):Math.sign(Tt)===Math.sign(I)&&(X=!0),X?(bt=-Tt,Q=rt,At=Math.sqrt(A)):(bt=rt,Q=Tt,At=Math.sqrt(A/2))}return new ct(bt/At,Q/At)}let at=[];for(let J=0,et=k.length,S=et-1,bt=J+1;J<et;J++,S++,bt++)S===et&&(S=0),bt===et&&(bt=0),at[J]=G(k[J],k[S],k[bt]);let pt=[],Ct,Nt=at.concat();for(let J=0,et=w.length;J<et;J++){let S=w[J];Ct=[];for(let bt=0,Q=S.length,At=Q-1,rt=bt+1;bt<Q;bt++,At++,rt++)At===Q&&(At=0),rt===Q&&(rt=0),Ct[bt]=G(S[bt],S[At],S[rt]);pt.push(Ct),Nt=Nt.concat(Ct)}for(let J=0;J<g;J++){let et=J/g,S=p*Math.cos(et*Math.PI/2),bt=m*Math.sin(et*Math.PI/2)+C;for(let Q=0,At=k.length;Q<At;Q++){let rt=Z(k[Q],at[Q],bt);st(rt.x,rt.y,-S)}for(let Q=0,At=w.length;Q<At;Q++){let rt=w[Q];Ct=pt[Q];for(let Tt=0,gt=rt.length;Tt<gt;Tt++){let I=Z(rt[Tt],Ct[Tt],bt);st(I.x,I.y,-S)}}}let Zt=m+C;for(let J=0;J<V;J++){let et=d?Z(_[J],Nt[J],Zt):_[J];v?(T.copy(F.normals[0]).multiplyScalar(et.x),E.copy(F.binormals[0]).multiplyScalar(et.y),L.copy(M[0]).add(T).add(E),st(L.x,L.y,L.z)):st(et.x,et.y,0)}for(let J=1;J<=h;J++)for(let et=0;et<V;et++){let S=d?Z(_[et],Nt[et],Zt):_[et];v?(T.copy(F.normals[J]).multiplyScalar(S.x),E.copy(F.binormals[J]).multiplyScalar(S.y),L.copy(M[J]).add(T).add(E),st(L.x,L.y,L.z)):st(S.x,S.y,u/h*J)}for(let J=g-1;J>=0;J--){let et=J/g,S=p*Math.cos(et*Math.PI/2),bt=m*Math.sin(et*Math.PI/2)+C;for(let Q=0,At=k.length;Q<At;Q++){let rt=Z(k[Q],at[Q],bt);st(rt.x,rt.y,u+S)}for(let Q=0,At=w.length;Q<At;Q++){let rt=w[Q];Ct=pt[Q];for(let Tt=0,gt=rt.length;Tt<gt;Tt++){let I=Z(rt[Tt],Ct[Tt],bt);v?st(I.x,I.y+M[h-1].y,M[h-1].x+S):st(I.x,I.y,u+S)}}}Y(),nt();function Y(){let J=s.length/3;if(d){let et=0,S=V*et;for(let bt=0;bt<tt;bt++){let Q=O[bt];Et(Q[2]+S,Q[1]+S,Q[0]+S)}et=h+g*2,S=V*et;for(let bt=0;bt<tt;bt++){let Q=O[bt];Et(Q[0]+S,Q[1]+S,Q[2]+S)}}else{for(let et=0;et<tt;et++){let S=O[et];Et(S[2],S[1],S[0])}for(let et=0;et<tt;et++){let S=O[et];Et(S[0]+V*h,S[1]+V*h,S[2]+V*h)}}n.addGroup(J,s.length/3-J,0)}function nt(){let J=s.length/3,et=0;vt(k,et),et+=k.length;for(let S=0,bt=w.length;S<bt;S++){let Q=w[S];vt(Q,et),et+=Q.length}n.addGroup(J,s.length/3-J,1)}function vt(J,et){let S=J.length;for(;--S>=0;){let bt=S,Q=S-1;Q<0&&(Q=J.length-1);for(let At=0,rt=h+g*2;At<rt;At++){let Tt=V*At,gt=V*(At+1),I=et+bt+Tt,A=et+Q+Tt,N=et+Q+gt,X=et+bt+gt;Dt(I,A,N,X)}}}function st(J,et,S){c.push(J),c.push(et),c.push(S)}function Et(J,et,S){Pt(J),Pt(et),Pt(S);let bt=s.length/3,Q=b.generateTopUV(n,s,bt-3,bt-2,bt-1);Xt(Q[0]),Xt(Q[1]),Xt(Q[2])}function Dt(J,et,S,bt){Pt(J),Pt(et),Pt(bt),Pt(et),Pt(S),Pt(bt);let Q=s.length/3,At=b.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Xt(At[0]),Xt(At[1]),Xt(At[3]),Xt(At[1]),Xt(At[2]),Xt(At[3])}function Pt(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function Xt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new so[s.type]().fromJSON(s)),new i(n,t.options)}},dm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],C=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ct(a,1-c),new ct(l,1-u),new ct(d,1-m),new ct(C,1-f)]:[new ct(o,1-c),new ct(h,1-u),new ct(p,1-m),new ct(g,1-f)]}};function fm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Tn=class extends qn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ts(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},co=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qo,endingEnd:Qo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jo:r=t,o=2*e-n;break;case tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case jo:a=t,c=2*n-e;break;case tc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),C=m*m,g=C*m,f=-d*g+2*d*C-d*m,b=(1+d)*g+(-1.5-2*d)*C+(-.5+d)*m+1,M=(-1-p)*g+(1.5+p)*C+.5*m,v=p*g-p*C;for(let F=0;F!==o;++F)r[F]=f*a[h+F]+b*a[l+F]+M*a[c+F]+v*a[u+F];return r}},lo=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ho=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new co(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case vr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return vr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&pm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let C=e[u+m];if(C!==e[d+m]||C!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Fa;var $n=class extends We{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ns;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends We{};uo.prototype.ValueTypeName="color";var fo=class extends We{};fo.prototype.ValueTypeName="number";var po=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)wn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ir=class extends We{InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends We{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ns;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends We{};go.prototype.ValueTypeName="vector";var mo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},gm=new mo,Ao=class{constructor(t){this.manager=t!==void 0?t:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},rr=class extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Kr=new re,jc=new U,tl=new U,_o=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tl),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xo=class extends _o{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new xo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var or=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=el(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=el();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function el(){return performance.now()}var Lo="\\[\\]\\.:\\/",mm=new RegExp("["+Lo+"]","g"),Do="[^"+Lo+"]",Am="[^"+Lo.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",Do),xm=/(WCOD+)?/.source.replace("WCOD",Am),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do),ym=new RegExp("^"+_m+xm+Cm+vm+"$"),Im=["material","materials","bones","map"],Co=class{constructor(t,e,n){let s=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(t){let e=ym.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ie.Composite=Co;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Um=new Float32Array(1);var nl=new re,cr=class{constructor(t,e,n=0,s=1/0){this.ray=new ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $i,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nl),this}intersectObject(t,e=!0,n=[]){return vo(t,this,n,e),n.sort(il),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)vo(t[s],this,n,e);return n.sort(il),n}};function il(i,t){return i.distance-t.distance}function vo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)vo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);var Sm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",ge=null,fr=!1;function Pl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Uo(){Pl(),fr=!0;try{if(ge||(ge=document.createElement("audio"),ge.src=Sm,ge.loop=!0,ge.preload="auto",ge.setAttribute("playsinline",""),ge.setAttribute("webkit-playsinline",""),ge.setAttribute("x-webkit-airplay","deny"),ge.volume=.01,ge.addEventListener("pause",()=>{fr&&!document.hidden&&setTimeout(()=>fr&&ge.paused&&ge.play().catch(()=>{}),300)})),ge.paused){let i=ge.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function No(){fr=!1;try{ge&&!ge.paused&&ge.pause()}catch{}}function Ll(i,t){Pl();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var le=i=>440*Math.pow(2,(i-69)/12),Fo={tempo:112,chords:[[41,[65,69,72]],[46,[65,70,74]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,70]],[41,[65,69,72]]],melody:[[0,0,77],[0,2,81],[0,4,84],[0,6,81],[1,0,82],[1,3,79],[1,4,77],[2,0,79],[2,2,76],[2,4,72],[2,6,76],[3,0,77],[3,4,72],[4,0,74],[4,2,77],[4,4,81],[4,6,79],[5,0,77],[5,2,74],[5,4,70],[6,0,72],[6,2,76],[6,4,79],[6,6,82],[7,0,81],[7,4,77]],lead:"marimba",shaker:!0},pr=class{constructor(t=Fo){this.ctx=null,this.muted=!1,this.mode="off",this.theme=t}unlock(){if(Uo(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Ll(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.34,this.musicBus.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.3;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.14,this.musicBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){No(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Uo(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){if(this.mode===t&&!e||(this.mode=t,!this.ctx))return;this.step=0,this.nextTime=this.ctx.currentTime+.12;let n=this.musicOnly?1.6:1,s=(t==="calm"?.18:t==="menu"?.28:.34)*n;this.musicBus.gain.setTargetAtTime(s,this.ctx.currentTime,.3)}duck(t=2){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.mode==="calm"?.18:.34;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(.035,e,.06),this.musicBus.gain.setTargetAtTime(n,e+t,.4),this.sfx.gain.cancelScheduledValues(e),this.sfx.gain.setTargetAtTime(.45,e+.15,.08),this.sfx.gain.setTargetAtTime(.85,e+t,.3)}dispose(){clearInterval(this._timer),No(),this.ctx&&this.ctx.close(),this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}lead(t,e,n,s=this.musicBus){let r=le(t);switch(this.theme.lead){case"bell":this.tone("sine",r,e,.9,n,s,.002),this.tone("sine",r*2.76,e,.25,n*.25,s,.002);break;case"pluck":this.tone("triangle",r,e,.28,n,s,.002),this.tone("sine",r*2,e,.12,n*.3,s,.002);break;case"flute":this.tone("sine",r,e,.45,n,s,.05),this.tone("triangle",r*2,e,.3,n*.08,s,.06);break;default:this.tone("sine",r,e,.35,n,s,.003),this.tone("sine",r*4,e,.05,n*.3,s,.002)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=this.theme,n=t.currentTime+.2,s=60/(this.mode==="menu"?e.tempo*.9:e.tempo)/2,r=e.chords.length,a=this.mode==="play";for(;this.nextTime<n;){let o=this.nextTime,c=this.step%(r*8),l=Math.floor(c/8),h=c%8,[u,d]=e.chords[l];(h===0||h===4)&&this.tone("triangle",le(u-(h===4?5:0)),o,s*1.6,.14,this.musicBus,.01),(h===2||h===6)&&d.forEach(p=>this.tone("sine",le(p-12),o,s*1.2,.022,this.musicBus,.004));for(let[p,m,C]of e.melody)p===l&&m===h&&this.lead(C,o,a?.075:.06);e.shaker&&a&&h%2===1&&this.noise(o,.04,.012,"highpass",8e3,1,this.musicBus),this.step++,this.nextTime+=s}}play(t,e){if(!this.on||this.musicOnly)return;let n=this.ctx.currentTime+.005;switch(t){case"tap":this.tone("sine",880,n,.06,.05);break;case"step":this.tone("sine",e?1250:1100,n,.04,.035),this.noise(n,.03,.02,"highpass",5e3,1);break;case"bump":this.slide("sine",260,150,n,.18,.13),this.slide("sine",320,200,n+.06,.14,.05);break;case"right":[[84,0],[88,.09],[91,.18]].forEach(([s,r])=>{this.tone("sine",le(s),n+r,.45,.08),this.tone("sine",le(s)*3,n+r,.08,.012)});break;case"wrong":this.tone("triangle",le(67),n,.18,.06),this.tone("triangle",le(64),n+.14,.26,.05);break;case"pop":this.slide("sine",900,300,n,.08,.12),this.noise(n,.05,.06,"bandpass",2500,2);break;case"sparkle":for(let s=0;s<6;s++)this.tone("sine",le(90+s*5%12),n+s*.045,.25,.03);break;case"star":[88,91,96,100].forEach((s,r)=>this.tone("sine",le(s),n+r*.07,.5,.05));break;case"whoosh":this.noise(n,.5,.09,"bandpass",500,.8,this.sfx,2600);break;case"page":this.noise(n,.25,.06,"bandpass",1800,.6,this.sfx,900);break;case"drop":this.tone("sine",520,n,.08,.1),this.tone("sine",780,n+.05,.12,.06),this.noise(n,.05,.04,"lowpass",900,1);break;case"splash":this.noise(n,.6,.12,"lowpass",3e3,.7,this.sfx,500);for(let s=0;s<4;s++)this.tone("sine",900+Math.random()*900,n+.05+s*.06,.08,.025);break;case"nibble":for(let s=0;s<5;s++)this.noise(n+s*.09,.05,.08,"bandpass",1200+s%2*500,2);break;case"squeak":this.slide("sine",1800,2600,n,.08,.05),this.slide("sine",2600,2e3,n+.08,.07,.04);break;case"cheer":[76,79,84,88].forEach((s,r)=>{this.tone("sine",le(s),n+r*.07,.35,.05),this.tone("sine",le(s)*2,n+r*.07,.12,.012)});break;case"hmm":this.tone("sine",le(67),n,.25,.05),this.tone("sine",le(64),n+.15,.3,.045);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.9]].forEach(([s,r])=>{this.tone("triangle",le(s),n+r,.5,.08),this.tone("sine",le(s)*2,n+r,.2,.02)});for(let s=0;s<10;s++)this.noise(n+.3+s*.05,.05,.025,"highpass",7500,1);break;case"roundWin":[[79,0],[84,.1],[88,.2],[91,.32]].forEach(([s,r])=>this.tone("sine",le(s),n+r,.4,.07));break;default:}}voice(t,e,n){t.forEach((s,r)=>{let a=e+r*.11;this.slide("sine",le(s)*.94,le(s),a,.12,n),this.slide("square",le(s)*.94,le(s),a,.1,n*.12)})}};function Ul(i){return String(i).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu,"").replace(/\s+/g," ").trim()}function Dl(i,t){let e=`${t==="en"?"en":"ar"}|${Ul(i)}`,n=2166136261;for(let s of new TextEncoder().encode(e))n^=s,n=Math.imul(n,16777619)>>>0;return n.toString(16).padStart(8,"0")}var gr=class{constructor(t,e,n,s){if(this.dir=`${t}../learn_voice/`,this.lang=e==="en"?"en":"ar",this.fallback=n,this.onTalk=s||(()=>{}),this.queue=[],this.audio=null,this.muted=!1,typeof document!="undefined"&&!window.__learnVoice&&!document.getElementById("learn-voice-manifest")){let r=document.createElement("script");r.id="learn-voice-manifest",r.src=`${this.dir}manifest.js`,r.onerror=()=>{window.__learnVoice=window.__learnVoice||{ar:[],en:[]}},document.head.append(r)}}has(t){let e=typeof window!="undefined"&&window.__learnVoice;return!!(e&&e[this.lang]&&e[this.lang].includes(Dl(t,this.lang)))}say(t){this.stop(),this.queue=(Array.isArray(t)?t:[t]).map(Ul).filter(Boolean),this._next()}_next(t=0){if(!this.queue.length||this.muted)return;if(typeof window!="undefined"&&!window.__learnVoice&&t<8){let r=this.queue;setTimeout(()=>{this.queue===r&&this._next(t+1)},130);return}let e=this.queue.shift();if(!this.has(e)){let r=[e,...this.queue].join(this.lang==="en"?", ":"\u060C ");this.queue=[],this.onTalk(Math.min(6,1.2+r.length*.09)),this.fallback(r,this.lang);return}let n=new Audio(`${this.dir}${this.lang}/${Dl(e,this.lang)}.mp3`);this.audio=n,n.addEventListener("loadedmetadata",()=>this.onTalk((n.duration||2)+.3)),n.addEventListener("ended",()=>{this.audio===n&&(this.audio=null,this._next())}),n.addEventListener("error",()=>{this.audio===n&&(this.audio=null,this.onTalk(Math.min(6,1.2+e.length*.09)),this.fallback(e,this.lang),this._next())}),this.onTalk(2.5);let s=n.play();s&&s.catch&&s.catch(()=>{})}stop(){if(this.queue=[],this.audio){try{this.audio.pause()}catch{}this.audio=null}}};function Gt(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var bm={back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Let's play"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],newStar_m:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643! \u2B50","A new star for you! \u2B50"],newStar_f:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643\u064A! \u2B50","A new star for you! \u2B50"],doneAgain_m:["\u062E\u0644\u0635\u062A\u0647\u0627 \u062A\u0627\u0646\u064A! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643","You finished it again! Well done"],doneAgain_f:["\u062E\u0644\u0635\u062A\u0647\u0627 \u062A\u0627\u0646\u064A! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643\u064A","You finished it again! Well done"],great_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],great_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],greatSay_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],greatSay_f:["\u0634\u0627\u0637\u0631\u0629 \u0623\u0648\u064A!","Well done!"],newStarSay_m:["\u062E\u062F\u062A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"],newStarSay_f:["\u062E\u062F\u062A\u064A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"]};function wm(i,t){let e=t.lang==="en"?"en":"ar",n=t.gender==="girl",s={...bm,...i};return{t:o=>{let c=`${o}_${n?"f":"m"}`,l=s[c]?c:o;return s[l]?s[l][e==="en"?1:0]:o},num:o=>e==="en"?String(o):String(o).replace(/[0-9]/g,c=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[c]),lang:e,girl:n}}var Em=`
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
`,mr=class{constructor(t,e,n,s){this.el=t,this.cfg=e||{},this.post=n||(()=>{}),this.opts=s,this.T=wm(s.text||{},this.cfg),this.age=Number(this.cfg.age)||5,this.base=this.cfg.base||"./",this.done=!!this.cfg.done,this.save=this.cfg.save&&typeof this.cfg.save=="object"?{...this.cfg.save}:{},this.sound=new pr(s.theme),s.musicOnly&&(this.sound.musicOnly=!0,this.opts.voice=!1),this.voice=new gr(this.base,this.T.lang,(r,a)=>this.post({type:"speak",text:r,lang:a}),r=>this.sound.duck(r)),this.sound.muted=!!this.save.muted,document.getElementById("lk-style")||document.head.append(Gt("style",{id:"lk-style"},Em)),this.root=Gt("div",{class:"lk-root",dir:this.T.lang==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=Gt("div",{class:"lk-layer"}),this.root.append(this.layer);for(let r of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(r,()=>this.sound.unlock(),{capture:!0,passive:!0});this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=Gt("button",{class:"lk-soundpill",onclick:r=>{r.stopPropagation(),this.sound.unlock()}},this.T.t("sound")),this.root.append(this.soundPill),this._tapped=!1,this.root.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t)}t(t){return this.T.t(t)}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.onResize&&this.onResize(this.w,this.h)}async fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,2500))])}catch{}}speak(t){!t||this.opts.voice===!1||(this.voice.muted=this.sound.muted,this.voice.say(t))}round(t,e,n){t&&this.post({type:"round",skill:t,correct:!!e,detail:n==null?null:String(n)})}complete(){this.post({type:"complete"})}saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}exit(){this.saveNow(),this.post({type:"exit"})}clear(){this.layer.replaceChildren(),this.bubble=null}backBtn(){return Gt("button",{class:"lk-rbtn","aria-label":this.t("back"),onclick:t=>{t.stopPropagation(),this.exit()}},this.T.lang==="en"?"\u2190":"\u2192")}soundBtn(){let t=Gt("button",{class:"lk-rbtn y","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}topBar(t,e){let n=Gt("div",{class:"lk-dots","aria-hidden":"true"},Array.from({length:t},()=>Gt("span",{},e)));return this.layer.append(Gt("div",{class:"lk-top"},this.backBtn(),n,this.soundBtn())),this.bubble=Gt("div",{class:"lk-bubble",role:"status"}),this.layer.append(this.bubble),s=>[...n.children].forEach((r,a)=>r.classList.toggle("on",a<s))}say(t,e,n=3.2){this.bubble&&(this.bubble.textContent=t,this.bubble.classList.add("show"),clearTimeout(this._bt),n>0&&(this._bt=setTimeout(()=>this.bubble&&this.bubble.classList.remove("show"),n*1e3)),e&&this.speak(e===!0?t:e))}titleCard(t,e,n){this.clear(),this.sound.setMode("menu"),this.layer.append(Gt("div",{class:"lk-top"},this.backBtn(),Gt("span"),this.soundBtn()));let s=Gt("button",{class:"lk-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),n()}},"\u25B6 ",this.t("play"));this.layer.append(Gt("div",{class:"lk-dim",style:"background:none"},Gt("div",{class:"lk-card"},Gt("div",{class:"lk-title"},t),Gt("div",{class:"lk-big"},e),s))),setTimeout(()=>s.focus({preventScroll:!0}),50)}finishCard(t,e,n){this.complete();let s=!this.done;this.done=!0,this.sound.play("win"),setTimeout(()=>this.sound.play("star"),900),this.speak(s?`${this.t("greatSay")} ${this.t("newStarSay")}`:this.t("doneAgain"));let r=Gt("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),n()}},"\u21BB ",this.t("again"));this.layer.append(Gt("div",{class:"lk-dim"},Gt("div",{class:"lk-card"},Gt("div",{class:"lk-title",style:"font-size:calc(var(--u)*8)"},t),Gt("div",{class:"lk-starburst"},s?"\u2B50":e),Gt("div",{class:"lk-msg"},this.t("great")),Gt("div",{class:"lk-small",style:"font-size:calc(var(--u)*4.6);color:#6a3ad0"},s?this.t("newStar"):this.t("doneAgain")),r,Gt("button",{class:"lk-btn p",onclick:()=>this.exit()},this.t("back"))))),setTimeout(()=>r.focus({preventScroll:!0}),50)}pause(){this.sound.suspend(),this.voice&&this.voice.stop()}dispose(){this.voice&&this.voice.stop(),clearInterval(this._pill),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}};var Ar=class{constructor(t=7,e=6){this.cols=t,this.rows=e,this.cells=Array.from({length:t},()=>[]),this.turn=0,this.winner=-1,this.line=null,this.draw=!1}get over(){return this.winner>=0||this.draw}canDrop(t){return!this.over&&t>=0&&t<this.cols&&this.cells[t].length<this.rows}at(t,e){let n=this.cells[t];return n&&e<n.length?n[e]:-1}drop(t){if(!this.canDrop(t))return null;let e=this.turn;this.cells[t].push(e);let n=this.cells[t].length-1,s=this._line(t,n,e);return s?(this.winner=e,this.line=s):this.cells.every(r=>r.length>=this.rows)?this.draw=!0:this.turn=1-e,{who:e,col:t,row:n,won:!!s,line:s,draw:this.draw}}_line(t,e,n){for(let[s,r]of[[1,0],[0,1],[1,1],[1,-1]]){let a=[[t,e]];for(let o of[1,-1]){let c=t+s*o,l=e+r*o;for(;this.at(c,l)===n;)a.push([c,l]),c+=s*o,l+=r*o}if(a.length>=4)return a.sort((o,c)=>o[0]-c[0]||o[1]-c[1]).slice(0,4)}return null}};var Tm={title:["\u0623\u0631\u0628\u0639\u0629 \u0648\u0631\u0627 \u0628\u0639\u0636","Four in a Row"],red:["\u0627\u0644\u0623\u062D\u0645\u0631","Red"],yellow:["\u0627\u0644\u0623\u0635\u0641\u0631","Yellow"],turn:["\u062F\u0648\u0631","Turn:"],how:["\u062F\u0648\u0633 \u0639\u0644\u0649 \u0639\u0645\u0648\u062F \u0639\u0634\u0627\u0646 \u062A\u0646\u0632\u0651\u0644 \u0627\u0644\u0642\u0631\u0635","Tap a column to drop a disc"],redWins:["\u0627\u0644\u0623\u062D\u0645\u0631 \u0648\u0635\u0651\u0644 \u0623\u0631\u0628\u0639\u0629! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643\u0645","Red made four! Well played both"],yellowWins:["\u0627\u0644\u0623\u0635\u0641\u0631 \u0648\u0635\u0651\u0644 \u0623\u0631\u0628\u0639\u0629! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643\u0645","Yellow made four! Well played both"],draw:["\u062A\u0639\u0627\u062F\u0644! \u0644\u0639\u0628\u062A\u0648\u0627 \u062D\u0644\u0648 \u0623\u0648\u064A","A draw! You both played so well"]},Rm={...Fo,tempo:104,lead:"pluck",chords:[[45,[64,69,72]],[41,[65,69,72]],[48,[64,67,72]],[43,[62,67,71]],[45,[64,69,72]],[41,[65,69,72]],[43,[62,67,71]],[45,[64,69,76]]],melody:[[0,0,76],[0,3,79],[0,6,81],[1,0,77],[1,4,72],[2,0,76],[2,3,79],[2,6,84],[3,0,83],[3,4,79],[4,0,81],[4,4,76],[5,0,77],[5,4,81],[6,0,79],[6,4,74],[7,0,76]]},Xe=1,Oo=15740986,Nl=16762906,Bo=class{constructor(t,e,n){this.sh=new mr(t,e,n,{text:Tm,theme:Rm});let s=this.sh;this.renderer=new Zs({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=ve,this.renderer.shadowMap.enabled=!0,s.root.prepend(this.renderer.domElement),this.scene=new $s,this.scene.background=new Ht(14215423),this.camera=new ye(38,1,.1,100),this.scene.add(new rr(16777215,12101848,1.5));let r=new ar(16777215,2.2);r.position.set(-4,7,8),r.castShadow=!0,this.scene.add(r),this._room(),this.frame=Pm(),this.scene.add(this.frame),this.discs=new ln,this.scene.add(this.discs),this.ghost=Fl(Oo),this.ghost.material=this.ghost.material.map(a=>{let o=a.clone();return o.transparent=!0,o.opacity=.55,o}),this.scene.add(this.ghost),this.fx=[],this.drops=[],s.onResize=(a,o)=>this._resize(a,o),this._resize(s.w,s.h),this._bind(),this.clock=new or,this.mode="title",s.fonts().then(()=>s.titleCard(s.t("title"),"\u{1F534}\u{1F7E1}\u{1F534}\u{1F7E1}",()=>this._start())),this._loop()}_room(){let t=new fe(new Yn(60,30),new Tn({map:Ol(256,256,n=>{n.fillStyle="#e8f0ff",n.fillRect(0,0,256,256);for(let s=0;s<8;s++)n.fillStyle=s%2?"#dce8ff":"#e8f0ff",n.fillRect(s*32,0,32,256);for(let s=0;s<16;s++)n.fillStyle=["#ffb8c8","#ffe08a","#a8e0b8"][s%3],n.beginPath(),n.arc(s*61%256,s*97%256,6,0,Math.PI*2),n.fill()},[6,3]),roughness:1}));t.position.set(0,4,-3),this.scene.add(t);let e=new fe(new En(14,.4,5),new Tn({color:15247464,roughness:.6}));e.position.set(0,-6/2*Xe-.75,.6),e.receiveShadow=!0,this.scene.add(e)}_resize(t,e){this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.updateProjectionMatrix();let n=Math.tan(xl.degToRad(this.camera.fov/2)),s=this.camera.aspect,r=Math.max((6/2+1.7)/n,(7/2+(s>1.2?3.2:.8))/(n*s));this.camera.position.set(0,.6,r),this.camera.lookAt(0,.1,0),this.side=s>1.2,this.panel&&this.panel.classList.toggle("side",this.side)}_colX(t){return(t-6/2)*Xe}_rowY(t){return(t-5/2)*Xe}_colAt(t){let e=this.sh.root.getBoundingClientRect(),n=new ct((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),s=new cr;s.setFromCamera(n,this.camera);let r=new U;if(!s.ray.intersectPlane(new ke(new U(0,0,1),0),r)||Math.abs(r.y)>6/2*Xe+1.4)return-1;let a=Math.round(r.x/Xe+6/2);return a>=0&&a<7?a:-1}_bind(){let t=this.sh.root;t.addEventListener("pointermove",e=>{this.mode==="play"&&(this.hover=this._colAt(e))}),t.addEventListener("pointerup",e=>{if(this.mode!=="play"||e.target.closest("button")||e.target.closest(".lk-dim"))return;let n=this._colAt(e);n>=0&&this._drop(n)}),this._onKey=e=>{this.mode==="play"&&(e.key==="ArrowLeft"||e.key==="ArrowRight"?(e.preventDefault(),this.hover=Math.max(0,Math.min(6,(this.hover<0||this.hover==null?3:this.hover)+(e.key==="ArrowRight"?1:-1))),this.sh.sound.play("tap")):(e.key==="Enter"||e.key===" ")&&this.hover>=0?(e.preventDefault(),this._drop(this.hover)):/^[1-7]$/.test(e.key)&&this._drop(Number(e.key)-1))},window.addEventListener("keydown",this._onKey)}_start(){this.game=new Ar;for(let t of[...this.discs.children])this.discs.remove(t);this.drops=[],this.hover=3,this.sh.clear(),this.panel=Gt("div",{class:`lfr-panel${this.side?" side":""}`},this.p0=Gt("div",{class:"lfr-p red"},Gt("i"),this.sh.t("red")),this.p1=Gt("div",{class:"lfr-p yel"},Gt("i"),this.sh.t("yellow"))),this.sh.layer.append(Gt("div",{class:"lk-top"},this.sh.backBtn(),Gt("span"),this.sh.soundBtn()),this.panel),this.sh.bubble=Gt("div",{class:"lk-bubble",role:"status"}),this.sh.layer.append(this.sh.bubble),this.sh.sound.setMode("play"),this.mode="play",this._turnUi(),this.sh.say(this.sh.t("how"),!0,3)}_turnUi(){let t=this.game.turn;this.p0.classList.toggle("on",t===0),this.p1.classList.toggle("on",t===1),this.ghost.material.forEach(e=>e.color.setHex(t===0?Oo:Nl))}_drop(t){if(this.mode!=="play"||!this.game.canDrop(t)){this.mode==="play"&&this.sh.sound.play("bump");return}let e=this.game.drop(t),n=Fl(e.who===0?Oo:Nl);n.position.set(this._colX(t),6/2*Xe+.9,0),this.discs.add(n),this.drops.push({d:n,y:n.position.y,v:0,to:this._rowY(e.row),bounced:0}),n.userData.cell=[t,e.row],this.sh.sound.play("whoosh"),e.won||e.draw?(this.mode="end",setTimeout(()=>this._over(e),700)):this._turnUi()}_over(t){if(t.won){let e=new Set(t.line.map(([n,s])=>`${n},${s}`));this.winners=this.discs.children.filter(n=>e.has(n.userData.cell.join(","))),this.sh.sound.play("win"),this._confetti(),this.sh.say(this.sh.t(t.who===0?"redWins":"yellowWins"),!0,3)}else this.sh.sound.play("roundWin"),this.sh.say(this.sh.t("draw"),!0,3);setTimeout(()=>{this.sh.sound.setMode("calm"),this.sh.finishCard(this.sh.t("title"),t.won?t.who===0?"\u{1F534}":"\u{1F7E1}":"\u{1F91D}",()=>this._start())},2600)}_confetti(){let t=[16734810,16763194,4892927,7002218,16743096];for(let e=0;e<60;e++){let n=new fe(new Yn(.12,.2),new Si({color:t[e%5],side:Ve}));n.position.set((Math.random()-.5)*6,6/2+1,.6),n.userData={v:new U((Math.random()-.5)*3,2+Math.random()*3,Math.random()),life:2.6},this.scene.add(n),this.fx.push(n)}}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;for(let s of this.drops)s.done||(s.v-=30*t,s.y+=s.v*t,s.y<=s.to&&(s.y=s.to,s.bounced<2&&Math.abs(s.v)>2.5?(s.v=-s.v*.28,s.bounced++,this.sh.sound.play(s.bounced===1?"drop":"tap")):(s.v=0,s.done=!0)),s.d.position.y=s.y);let n=this.mode==="play"&&this.hover>=0&&this.game&&this.game.canDrop(this.hover);if(this.ghost.visible=!!n,n&&this.ghost.position.set(this._colX(this.hover),6/2*Xe+.9+Math.sin(e*4)*.08,0),this.winners)for(let s of this.winners){let r=.5+.5*Math.sin(e*8);s.material.forEach(a=>{a.emissive.setHex(16777215),a.emissiveIntensity=r*.5}),s.scale.setScalar(1+r*.08)}for(let s=this.fx.length-1;s>=0;s--){let r=this.fx[s],a=r.userData;a.life-=t,a.v.y-=5*t,r.position.addScaledVector(a.v,t),r.rotation.x+=t*6,r.rotation.y+=t*4,a.life<=0&&(this.scene.remove(r),r.geometry.dispose(),this.fx.splice(s,1))}this.mode==="title"?this.frame.rotation.y=Math.sin(e*.6)*.15:this.frame.rotation.y*=.9,this.discs.rotation.y=this.frame.rotation.y,this.renderer.render(this.scene,this.camera)}pause(){this.sh.pause()}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._onKey),this.renderer.dispose(),this.sh.dispose()}};function Pm(){let i=new ln,t=7*Xe+.5,e=6*Xe+.5,n=new Qi,s=.35;n.moveTo(-t/2+s,-e/2),n.lineTo(t/2-s,-e/2),n.quadraticCurveTo(t/2,-e/2,t/2,-e/2+s),n.lineTo(t/2,e/2-s),n.quadraticCurveTo(t/2,e/2,t/2-s,e/2),n.lineTo(-t/2+s,e/2),n.quadraticCurveTo(-t/2,e/2,-t/2,e/2-s),n.lineTo(-t/2,-e/2+s),n.quadraticCurveTo(-t/2,-e/2,-t/2+s,-e/2);for(let a=0;a<7;a++)for(let o=0;o<6;o++){let c=new wi;c.absarc((a-6/2)*Xe,(o-5/2)*Xe,.38,0,Math.PI*2,!0),n.holes.push(c)}let r=new Tn({color:2779880,roughness:.25,metalness:.05});for(let a of[.2,-.2]){let o=new fe(new nr(n,{depth:.12,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2,curveSegments:20}),r);o.position.z=a-.06,o.castShadow=!0,i.add(o)}for(let a of[-1,1]){let o=new fe(new En(.4,.3,1.6),r);o.position.set(a*(t/2-.2),-e/2-.15,0),i.add(o)}return i}function Fl(i){let t=new Tn({color:i,roughness:.3}),e=new Tn({color:i,roughness:.25,map:Lm()}),n=new fe(new er(.4,.4,.22,28),[t,e,e]);return n.rotation.x=Math.PI/2,n.castShadow=!0,n}var _r=null;function Lm(){return _r||(_r=Ol(128,128,i=>{i.fillStyle="#ffffff",i.fillRect(0,0,128,128),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=8,i.beginPath(),i.arc(64,64,40,0,Math.PI*2),i.stroke(),i.fillStyle="rgba(255,255,255,.6)",i.beginPath(),i.ellipse(48,42,16,9,-.6,0,Math.PI*2),i.fill()}),_r)}function Ol(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"));let r=new Js(s);return r.colorSpace=ve,n&&(r.wrapS=r.wrapT=Xi,r.repeat.set(...n)),r}var Dm=`
.lfr-panel{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:calc(var(--u)*3);pointer-events:none}
.lfr-panel.side{left:auto;transform:none;bottom:auto;top:50%;inset-inline-end:calc(var(--u)*3);flex-direction:column;translate:0 -50%}
.lfr-p{display:flex;align-items:center;gap:calc(var(--u)*1.6);background:#fff;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*3.4) calc(var(--u)*1.2) calc(var(--u)*1.4);font-weight:900;font-size:max(18px,calc(var(--u)*4.6));color:#3a2a5a;opacity:.5;transform:scale(.9);transition:all .3s;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(30,20,70,.25);border:calc(var(--u)*.6) solid transparent}
.lfr-p i{width:calc(var(--u)*7);height:calc(var(--u)*7);border-radius:50%;box-shadow:inset 0 0 0 calc(var(--u)*1) rgba(0,0,0,.15)}
.lfr-p.red i{background:#f0303a}
.lfr-p.yel i{background:#ffc81a}
.lfr-p.on{opacity:1;transform:scale(1.08)}
.lfr-p.red.on{border-color:#f0303a}
.lfr-p.yel.on{border-color:#ffc81a}
.lfr-p.on::after{content:'\u25C0';color:inherit;font-size:.9em;animation:lfr-point .7s ease-in-out infinite alternate}
[dir=rtl] .lfr-p.on::after{content:'\u25B6'}
@keyframes lfr-point{to{transform:translateX(calc(var(--u)*-1))}}
`,zo={start(i,t,e){document.getElementById("lfr-style")||document.head.append(Gt("style",{id:"lfr-style"},Dm));let n=new Bo(i,t||{},e);return zo.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.LearnFour=zo;var qm=zo;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
