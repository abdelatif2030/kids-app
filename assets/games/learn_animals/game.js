(()=>{var yl="170";var dd=0,nc=1,ud=2;var gh=1,vl=2,Rn=3,Kn=0,Re=1,Ge=2,Zn=0,Vi=1,ic=2,sc=3,rc=4,fd=5,ui=100,pd=101,gd=102,md=103,_d=104,Ad=200,xd=201,yd=202,vd=203,Ka=204,ja=205,Cd=206,Id=207,Md=208,wd=209,bd=210,Sd=211,Ed=212,Td=213,Rd=214,Qa=0,to=1,eo=2,qi=3,no=4,io=5,so=6,ro=7,mh=0,Pd=1,Ld=2,$n=0,Dd=1,Ud=2,Nd=3,Fd=4,kd=5,Od=6,Cl=7;var _h=300,Yi=301,Zi=302,ao=303,oo=304,na=306,$i=1e3,pi=1001,lo=1002,hn=1003,Bd=1004;var Xs=1005;var mn=1006,_a=1007;var Ln=1008;var Fn=1009,Ah=1010,xh=1011,ws=1012,Il=1013,gi=1014,Dn=1015,zs=1016,Ml=1017,wl=1018,Ji=1020,yh=35902,vh=1021,Ch=1022,cn=1023,Ih=1024,Mh=1025,Gi=1026,Ki=1027,wh=1028,bl=1029,bh=1030,Sl=1031;var El=1033,xr=33776,yr=33777,vr=33778,Cr=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,go=37492,mo=37496,_o=37808,Ao=37809,xo=37810,yo=37811,vo=37812,Co=37813,Io=37814,Mo=37815,wo=37816,bo=37817,So=37818,Eo=37819,To=37820,Ro=37821,Ir=36492,Po=36494,Lo=36495,Sh=36283,Do=36284,Uo=36285,No=36286;var Mr=2300,Fo=2301,Aa=2302,ac=2400,oc=2401,lc=2402;var zd=3200,Hd=3201;var Eh=0,Vd=1,qn="",ye="srgb",ss="srgb-linear",ia="linear",ae="srgb";var Ci=7680;var cc=519,Gd=512,Wd=513,Xd=514,Th=515,qd=516,Yd=517,Zd=518,$d=519,ko=35044;var hc="300 es",Un=2e3,wr=2001,jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=1234567,ys=Math.PI/180,bs=180/Math.PI;function _n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Tl(i,t){return(i%t+t)%t}function Jd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kd(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function Qd(i,t=1){return t-Math.abs(Tl(i,t*2)-t)}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function iu(i,t){return i+Math.random()*(t-i)}function su(i){return i*(.5-Math.random())}function ru(i){i!==void 0&&(dc=i);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function au(i){return i*ys}function ou(i){return i*bs}function lu(i){return(i&i-1)===0&&i!==0}function cu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function du(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rh={DEG2RAD:ys,RAD2DEG:bs,generateUUID:_n,clamp:De,euclideanModulo:Tl,mapLinear:Jd,inverseLerp:Kd,lerp:vs,damp:jd,pingpong:Qd,smoothstep:tu,smootherstep:eu,randInt:nu,randFloat:iu,randFloatSpread:su,seededRandom:ru,degToRad:au,radToDeg:ou,isPowerOfTwo:lu,ceilPowerOfTwo:cu,floorPowerOfTwo:hu,setQuaternionFromProperEuler:du,normalize:re,denormalize:ln},nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],y=s[0],g=s[3],f=s[6],M=s[1],v=s[4],_=s[7],L=s[2],S=s[5],T=s[8];return r[0]=a*y+o*M+l*L,r[3]=a*g+o*v+l*S,r[6]=a*f+o*_+l*T,r[1]=c*y+h*M+d*L,r[4]=c*g+h*v+d*S,r[7]=c*f+h*_+d*T,r[2]=u*y+p*M+m*L,r[5]=u*g+p*v+m*S,r[8]=u*f+p*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,m=e*d+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xa=new Gt;function Ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){let i=Ss("canvas");return i.style.display="block",i}var uc={};function As(i){i in uc||(uc[i]=!0,console.warn(i))}function fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],gc=[.3127,.329],mc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[ss]:{primaries:fc,whitePoint:gc,transfer:ia,toXYZ:mc,fromXYZ:_c,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:fc,whitePoint:gc,transfer:ae,toXYZ:mc,fromXYZ:_c,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var Ii,Oo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Ss("canvas")),Ii.width=t.width,Ii.height=t.height;let n=Ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mu=0,br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ya(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _u=0,Ye=class i extends jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=mn,a=Ln,o=cn,l=Fn,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=_n(),this.name="",this.source=new br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=_h;Ye.DEFAULT_ANISOTROPY=1;var oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,L=(f+1)/2,S=(h+u)/4,T=(d+y)/4,P=(m+g)/4;return v>_&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],m=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=y;return}if(d!==y||l!==u||c!==p||h!==m){let g=1-o,f=l*u+c*p+h*m+d*y,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let L=Math.sqrt(v),S=Math.atan2(L,f*M);g=Math.sin(g*S)/L,o=Math.sin(o*S)/L}let _=o*M;if(l=l*g+u*_,c=c*g+p*_,h=h*g+m*_,d=d*g+y*_,g===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*p-c*u,t[e+1]=l*m+h*u+c*d-o*p,t[e+2]=c*m+h*p+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new E,Ac=new Qn,mi=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Ys.subVectors(this.max,hs),Mi.subVectors(t.a,hs),wi.subVectors(t.b,hs),bi.subVectors(t.c,hs),zn.subVectors(wi,Mi),Hn.subVectors(bi,wi),ri.subVectors(Mi,bi);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!Ca(e,Mi,wi,bi,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Mi,wi,bi,Ys))?!1:(Zs.crossVectors(zn,Hn),e=[Zs.x,Zs.y,Zs.z],Ca(e,Mi,wi,bi,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new E,new E,new E,new E,new E,new E,new E,new E],rn=new E,qs=new mi,Mi=new E,wi=new E,bi=new E,zn=new E,Hn=new E,ri=new E,hs=new E,Ys=new E,Zs=new E,ai=new E;function Ca(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);let o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Au=new mi,ds=new E,Ia=new E,Es=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Ia)),this.expandByPoint(ds.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new E,Ma=new E,$s=new E,Vn=new E,wa=new E,Js=new E,ba=new E,Er=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ma.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Ma);let r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=Vn.dot(this.direction),l=-Vn.dot($s),c=Vn.lengthSq(),h=Math.abs(1-a*a),d,u,p,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ma).addScaledVector($s,u),p}intersectSphere(t,e){bn.subVectors(t.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),Js.subVectors(n,t),ba.crossVectors(wa,Js);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let l=o*this.direction.dot(Js.crossVectors(Vn,Js));if(l<0)return null;let c=o*this.direction.dot(wa.cross(Vn));if(c<0||l+c>a)return null;let h=-o*Vn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,m,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,m,y,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,m,y,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+m*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,m=c*h,y=c*d;e[0]=u+y*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,m=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,m=o*h,y=o*d;e[0]=l*h,e[4]=m*c-p,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=m*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,p=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,yu)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Gn.crossVectors(n,$e),Gn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Gn.crossVectors(n,$e)),Gn.normalize(),Ks.crossVectors($e,Gn),s[0]=Gn.x,s[4]=Ks.x,s[8]=$e.x,s[1]=Gn.y,s[5]=Ks.y,s[9]=$e.y,s[2]=Gn.z,s[6]=Ks.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],y=n[6],g=n[10],f=n[14],M=n[3],v=n[7],_=n[11],L=n[15],S=s[0],T=s[4],P=s[8],I=s[12],x=s[1],R=s[5],z=s[9],k=s[13],H=s[2],J=s[6],V=s[10],st=s[14],G=s[3],dt=s[7],At=s[11],Mt=s[15];return r[0]=a*S+o*x+l*H+c*G,r[4]=a*T+o*R+l*J+c*dt,r[8]=a*P+o*z+l*V+c*At,r[12]=a*I+o*k+l*st+c*Mt,r[1]=h*S+d*x+u*H+p*G,r[5]=h*T+d*R+u*J+p*dt,r[9]=h*P+d*z+u*V+p*At,r[13]=h*I+d*k+u*st+p*Mt,r[2]=m*S+y*x+g*H+f*G,r[6]=m*T+y*R+g*J+f*dt,r[10]=m*P+y*z+g*V+f*At,r[14]=m*I+y*k+g*st+f*Mt,r[3]=M*S+v*x+_*H+L*G,r[7]=M*T+v*R+_*J+L*dt,r[11]=M*P+v*z+_*V+L*At,r[15]=M*I+v*k+_*st+L*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],m=t[3],y=t[7],g=t[11],f=t[15];return m*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*p-n*l*p)+y*(+e*l*p-e*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+g*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],m=t[12],y=t[13],g=t[14],f=t[15],M=d*g*c-y*u*c+y*l*p-o*g*p-d*l*f+o*u*f,v=m*u*c-h*g*c-m*l*p+a*g*p+h*l*f-a*u*f,_=h*y*c-m*d*c+m*o*p-a*y*p-h*o*f+a*d*f,L=m*d*l-h*y*l-m*o*u+a*y*u+h*o*g-a*d*g,S=e*M+n*v+s*_+r*L;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=M*T,t[1]=(y*u*r-d*g*r-y*s*p+n*g*p+d*s*f-n*u*f)*T,t[2]=(o*g*r-y*l*r+y*s*c-n*g*c-o*s*f+n*l*f)*T,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*p-n*l*p)*T,t[4]=v*T,t[5]=(h*g*r-m*u*r+m*s*p-e*g*p-h*s*f+e*u*f)*T,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*f-e*l*f)*T,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*p+e*l*p)*T,t[8]=_*T,t[9]=(m*d*r-h*y*r-m*n*p+e*y*p+h*n*f-e*d*f)*T,t[10]=(a*y*r-m*o*r+m*n*c-e*y*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*T,t[12]=L*T,t[13]=(h*y*s-m*d*s+m*n*u-e*y*u-h*n*g+e*d*g)*T,t[14]=(m*o*s-a*y*s-m*n*l+e*y*l+a*n*g-e*o*g)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,m=r*d,y=a*h,g=a*d,f=o*d,M=l*c,v=l*h,_=l*d,L=n.x,S=n.y,T=n.z;return s[0]=(1-(y+f))*L,s[1]=(p+_)*L,s[2]=(m-v)*L,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(u+f))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+v)*T,s[9]=(g-M)*T,s[10]=(1-(u+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Si.set(s[0],s[1],s[2]).length(),a=Si.set(s[4],s[5],s[6]).length(),o=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);let c=1/r,h=1/a,d=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Un){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,m;if(o===Un)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===wr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,p=(n+s)*h,m,y;if(o===Un)m=(a+r)*d,y=-2*d;else if(o===wr)m=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Si=new E,an=new ge,xu=new E(0,0,0),yu=new E(1,1,1),Gn=new E,Ks=new E,$e=new E,xc=new ge,yc=new Qn,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vu=0,vc=new E,Ei=new Qn,Sn=new ge,js=new E,us=new E,Cu=new E,Iu=new Qn,Cc=new E(1,0,0),Ic=new E(0,1,0),Mc=new E(0,0,1),wc={type:"added"},Mu={type:"removed"},Ti={type:"childadded",child:null},Sa={type:"childremoved",child:null},Be=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new E,e=new An,n=new Qn,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Gt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(us,js,this.up):Sn.lookAt(js,us,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Be.DEFAULT_UP=new E(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new E,En=new E,Ea=new E,Tn=new E,Ri=new E,Pi=new E,bc=new E,Ta=new E,Ra=new E,Pa=new E,La=new oe,Da=new oe,Ua=new oe,Yn=class i{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),En.subVectors(n,e),Ea.subVectors(t,e);let a=on.dot(on),o=on.dot(En),l=on.dot(Ea),c=En.dot(En),h=En.dot(Ea),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return La.setScalar(0),Da.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),En.subVectors(t,e),on.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Pi.subVectors(r,n),Ta.subVectors(t,n);let l=Ri.dot(Ta),c=Pi.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);let h=Ri.dot(Ra),d=Pi.dot(Ra);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ri,a);Pa.subVectors(t,r);let p=Ri.dot(Pa),m=Pi.dot(Pa);if(m>=0&&p<=m)return e.copy(r);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Pi,o);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return bc.subVectors(r,s),o=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(bc,o);let f=1/(g+y+u);return a=y*f,o=u*f,e.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Tl(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Kt.fromWorkingColorSpace(ke.copy(this),t),Math.round(De(ke.r*255,0,255))*65536+Math.round(De(ke.g*255,0,255))*256+Math.round(De(ke.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ye){Kt.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Qs);let n=vs(Wn.h,Qs.h,e),s=vs(Wn.s,Qs.s,e),r=vs(Wn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new qt;qt.NAMES=Lh;var wu=0,ti=class extends jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=_n(),this.name="",this.blending=Vi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ve=class extends ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new E,tr=new nt,Ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}};var Tr=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},bu=0,Qe=new ge,Fa=new Be,Li=new E,Je=new mi,fs=new mi,Te=new E,ze=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ph(t)?Rr:Tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Je.min,fs.min),Je.expandByPoint(Te),Te.addVectors(Je.max,fs.max),Je.expandByPoint(Te)):(Je.expandByPoint(fs.min),Je.expandByPoint(fs.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),Te.add(Li)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new E,l[P]=new E;let c=new E,h=new E,d=new E,u=new nt,p=new nt,m=new nt,y=new E,g=new E;function f(P,I,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,x),h.sub(c),d.sub(c),p.sub(u),m.sub(u);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[P].add(y),o[I].add(y),o[x].add(y),l[P].add(g),l[I].add(g),l[x].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,I=M.length;P<I;++P){let x=M[P],R=x.start,z=x.count;for(let k=R,H=R+z;k<H;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new E,_=new E,L=new E,S=new E;function T(P){L.fromBufferAttribute(s,P),S.copy(L);let I=o[P];v.copy(I),v.sub(L.multiplyScalar(L.dot(I))).normalize(),_.crossVectors(S,I);let R=_.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,I=M.length;P<I;++P){let x=M[P],R=x.start,z=x.count;for(let k=R,H=R+z;k<H;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let u=0,p=t.count;u<p;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)u[m++]=c[p++]}return new Ke(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new ge,oi=new Er,er=new Es,Ec=new E,nr=new E,ir=new E,sr=new E,ka=new E,rr=new E,Tc=new E,ar=new E,lt=class extends Be{constructor(t=new ze,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ka.fromBufferAttribute(d,t),a?rr.addScaledVector(ka,h):rr.addScaledVector(ka.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(er.containsPoint(oi.origin)===!1&&(oi.intersectSphere(er,Ec)===null||oi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(Sc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,L=v;_<L;_+=3){let S=o.getX(_),T=o.getX(_+1),P=o.getX(_+2);s=or(this,f,t,n,c,h,d,S,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let M=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);s=or(this,a,t,n,c,h,d,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,L=v;_<L;_+=3){let S=_,T=_+1,P=_+2;s=or(this,f,t,n,c,h,d,S,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let M=g,v=g+1,_=g+2;s=or(this,a,t,n,c,h,d,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Su(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Kn,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);let h=Su(i,t,e,n,nr,ir,sr,Tc);if(h){let d=new E;Yn.getBarycoord(Tc,nr,ir,sr,d),s&&(h.uv=Yn.getInterpolatedAttribute(s,o,l,c,d,new nt)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,l,c,d,new nt)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new E,materialIndex:0};Yn.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=d}return h}var ce=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function m(y,g,f,M,v,_,L,S,T,P,I){let x=_/T,R=L/P,z=_/2,k=L/2,H=S/2,J=T+1,V=P+1,st=0,G=0,dt=new E;for(let At=0;At<V;At++){let Mt=At*R-k;for(let zt=0;zt<J;zt++){let ee=zt*x-z;dt[y]=ee*M,dt[g]=Mt*v,dt[f]=H,c.push(dt.x,dt.y,dt.z),dt[y]=0,dt[g]=0,dt[f]=S>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(zt/T),d.push(1-At/P),st+=1}}for(let At=0;At<P;At++)for(let Mt=0;Mt<T;Mt++){let zt=u+Mt+J*At,ee=u+Mt+J*(At+1),$=u+(Mt+1)+J*(At+1),at=u+(Mt+1)+J*At;l.push(zt,ee,at),l.push(ee,$,at),G+=6}o.addGroup(p,G,I),p+=G,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Tu={clone:ji,merge:Ve},Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new E,Rc=new nt,Pc=new nt,Oe=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Pc),e.subVectors(Pc,Rc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Di=-90,Ui=1,Ho=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Di,Ui,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Di,Ui,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Di,Ui,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Di,Ui,t,e);o.layers=this.layers,this.add(o);let l=new Oe(Di,Ui,t,e);l.layers=this.layers,this.add(l);let c=new Oe(Di,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Lr=class extends Ye{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vo=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Zn});r.uniforms.tEquirect.value=e;let a=new lt(s,r),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=mn),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Oa=new E,Lu=new E,Du=new Gt,Pn=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oa.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Du.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new Es,lr=new E,Rs=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],m=s[9],y=s[10],g=s[11],f=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,g-p,_-f).normalize(),n[1].setComponents(l+r,u+c,g+p,_+f).normalize(),n[2].setComponents(l+a,u+h,g+m,_+M).normalize(),n[3].setComponents(l-a,u-h,g-m,_-M).normalize(),n[4].setComponents(l-o,u-d,g-y,_-v).normalize(),e===Un)n[5].setComponents(l+o,u+d,g+y,_+v).normalize();else if(e===wr)n[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){let m=d[u],y=d[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var yn=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],m=[],y=[],g=[];for(let f=0;f<h;f++){let M=f*u-a;for(let v=0;v<c;v++){let _=v*d-r;m.push(_,-M,0),y.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,_=M+c*(f+1),L=M+1+c*(f+1),S=M+1+c*f;p.push(v,_,S),p.push(_,L,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
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
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zu=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Uf=`struct PhysicalMaterial {
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
}`,Nf=`
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Qp=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,eg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,og=`#define TOON
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
}`,lg=`#define TOON
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
}`,cg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:ku,alphamap_pars_fragment:Ou,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:Hu,aomap_pars_fragment:Vu,batching_pars_vertex:Gu,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:Yu,iridescence_fragment:Zu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Qu,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:af,defaultnormal_vertex:of,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:hf,emissivemap_pars_fragment:df,colorspace_fragment:uf,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:gf,envmap_pars_fragment:mf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Ef,envmap_vertex:Af,fog_vertex:xf,fog_pars_vertex:yf,fog_fragment:vf,fog_pars_fragment:Cf,gradientmap_pars_fragment:If,lightmap_pars_fragment:Mf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:bf,lights_pars_begin:Sf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:Uf,lights_fragment_begin:Nf,lights_fragment_maps:Ff,lights_fragment_end:kf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Hf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Zf,morphcolor_vertex:$f,morphnormal_vertex:Jf,morphtarget_pars_vertex:Kf,morphtarget_vertex:jf,normal_fragment_begin:Qf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:dp,project_vertex:up,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:Ap,shadowmap_vertex:xp,shadowmask_pars_fragment:yp,skinbase_vertex:vp,skinning_pars_vertex:Cp,skinning_vertex:Ip,skinnormal_vertex:Mp,specularmap_fragment:wp,specularmap_pars_fragment:bp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:Rp,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Dp,worldpos_vertex:Up,background_vert:Np,background_frag:Fp,backgroundCube_vert:kp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:Gp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Zp,meshbasic_vert:$p,meshbasic_frag:Jp,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Qp,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:dg,shadow_frag:ug,sprite_vert:fg,sprite_frag:pg},ut={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},gn={basic:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ve([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ve([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ve([ut.points,ut.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ve([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ve([ut.common,ut.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ve([ut.sprite,ut.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ve([ut.common,ut.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ve([ut.lights,ut.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};gn.physical={uniforms:Ve([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var cr={r:0,b:0,g:0},ci=new An,gg=new ge;function mg(i,t,e,n,s,r,a){let o=new qt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function y(M){let v=!1,_=m(M);_===null?f(o,l):_&&_.isColor&&(f(_,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===na)?(h===void 0&&(h=new lt(new ce(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(ci)),h.material.toneMapped=Kt.getTransfer(_.colorSpace)!==ae,(d!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new lt(new yn(2,2),new xn({name:"BackgroundMaterial",uniforms:ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,v){M.getRGB(cr,Dh(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:y,addToRenderList:g}}function _g(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(x,R,z,k,H){let J=!1,V=d(k,z,R);r!==V&&(r=V,c(r.object)),J=p(x,k,z,H),J&&m(x,k,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(x,R,z,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,R,z){let k=z.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let J=H[R.id];J===void 0&&(J={},H[R.id]=J);let V=J[k];return V===void 0&&(V=u(l()),J[k]=V),V}function u(x){let R=[],z=[],k=[];for(let H=0;H<e;H++)R[H]=0,z[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,R,z,k){let H=r.attributes,J=R.attributes,V=0,st=z.getAttributes();for(let G in st)if(st[G].location>=0){let At=H[G],Mt=J[G];if(Mt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),At===void 0||At.attribute!==Mt||Mt&&At.data!==Mt.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function m(x,R,z,k){let H={},J=R.attributes,V=0,st=z.getAttributes();for(let G in st)if(st[G].location>=0){let At=J[G];At===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(At=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(At=x.instanceColor));let Mt={};Mt.attribute=At,At&&At.data&&(Mt.data=At.data),H[G]=Mt,V++}r.attributes=H,r.attributesNum=V,r.index=k}function y(){let x=r.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function g(x){f(x,0)}function f(x,R){let z=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;z[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),H[x]!==R&&(i.vertexAttribDivisor(x,R),H[x]=R)}function M(){let x=r.newAttributes,R=r.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==x[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function v(x,R,z,k,H,J,V){V===!0?i.vertexAttribIPointer(x,R,z,H,J):i.vertexAttribPointer(x,R,z,k,H,J)}function _(x,R,z,k){y();let H=k.attributes,J=z.getAttributes(),V=R.defaultAttributeValues;for(let st in J){let G=J[st];if(G.location>=0){let dt=H[st];if(dt===void 0&&(st==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),st==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),dt!==void 0){let At=dt.normalized,Mt=dt.itemSize,zt=t.get(dt);if(zt===void 0)continue;let ee=zt.buffer,$=zt.type,at=zt.bytesPerElement,wt=$===i.INT||$===i.UNSIGNED_INT||dt.gpuType===Il;if(dt.isInterleavedBufferAttribute){let ct=dt.data,Dt=ct.stride,Ot=dt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)f(G.location+Ft,ct.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)g(G.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ft=0;Ft<G.locationSize;Ft++)v(G.location+Ft,Mt/G.locationSize,$,At,Dt*at,(Ot+Mt/G.locationSize*Ft)*at,wt)}else{if(dt.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)f(G.location+ct,dt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ct=0;ct<G.locationSize;ct++)g(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ct=0;ct<G.locationSize;ct++)v(G.location+ct,Mt/G.locationSize,$,At,Mt*at,Mt/G.locationSize*ct*at,wt)}}else if(V!==void 0){let At=V[st];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(G.location,At);break;case 3:i.vertexAttrib3fv(G.location,At);break;case 4:i.vertexAttrib4fv(G.location,At);break;default:i.vertexAttrib1fv(G.location,At)}}}}M()}function L(){P();for(let x in n){let R=n[x];for(let z in R){let k=R[z];for(let H in k)h(k[H].object),delete k[H];delete R[z]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let z in R){let k=R[z];for(let H in k)h(k[H].object),delete k[H];delete R[z]}delete n[x.id]}function T(x){for(let R in n){let z=n[R];if(z[x.id]===void 0)continue;let k=z[x.id];for(let H in k)h(k[H].object),delete k[H];delete z[x.id]}}function P(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:I,dispose:L,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function Ag(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y]*u[y];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let P=T===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:L,maxSamples:S}}function yg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Pn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,v=M*4,_=f.clippingState||null;l.value=_,_=h(m,u,v,p);for(let L=0;L!==v;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let f=p+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,_=p;v!==y;++v,_+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function vg(i){let t=new WeakMap;function e(a,o){return o===ao?a.mapping=Yi:o===oo&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ao||o===oo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Vo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Dr=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zi=4,Lc=[.125,.215,.35,.446,.526,.582],fi=20,Ba=new Dr,Dc=new qt,za=null,Ha=0,Va=0,Ga=!1,di=(1+Math.sqrt(5))/2,Ni=1/di,Uc=[new E(-di,Ni,0),new E(di,Ni,0),new E(-Ni,0,di),new E(Ni,0,di),new E(0,di,-Ni),new E(0,di,Ni),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Qi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ha,Va),this._renderer.xr.enabled=Ga,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:zs,format:cn,colorSpace:ss,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Ig(r,t,e)}return s}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){let o=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=$n,h.autoClear=!1;let p=new ve({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),m=new lt(new ce,p),y=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,y=!0):(p.color.copy(Dc),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;hr(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new lt(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):fi;g>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fi}`);let f=[],M=0;for(let T=0;T<fi;++T){let P=T/y,I=Math.exp(-P*P/2);f.push(I),T===0?M+=I:T<g&&(M+=2*I)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;let _=this._sizeLods[s],L=3*_*(s>v-zi?s-v+zi:0),S=4*(this._cubeSize-_);hr(e,L,S,3*_,2*_),l.setRenderTarget(e),l.render(d,Ba)}};function Cg(i){let t=[],e=[],n=[],s=i,r=i-zi+1+Lc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-zi?l=Lc[a-i+zi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,y=3,g=2,f=1,M=new Float32Array(y*m*p),v=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,P=S>2?0:-1,I=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(I,y*m*S),v.set(u,g*m*S);let x=[S,S,S,S,S,S];_.set(x,f*m*S)}let L=new ze;L.setAttribute("position",new Ke(M,y)),L.setAttribute("uv",new Ke(v,g)),L.setAttribute("faceIndex",new Ke(_,f)),t.push(L),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){let n=new kn(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ig(i,t,e){let n=new Float32Array(fi),s=new E(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fc(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function kc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function Mg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ao||l===oo,h=l===Yi||l===Zi;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Qi(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Qi(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let y=u.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)t.remove(y[g])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let y=p[m];for(let g=0,f=y.length;g<f;g++)t.update(y[g],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,m=d.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let v=0,_=M.length;v<_;v+=3){let L=M[v+0],S=M[v+1],T=M[v+2];u.push(L,S,S,T,T,L)}}else if(m!==void 0){let M=m.array;y=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let L=v+0,S=v+1,T=v+2;u.push(L,S,S,T,T,L)}}else return;let g=new(Ph(u)?Rr:Tr)(u,1);g.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,g)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Sg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,u*a,m),e.update(p,n,m))}function h(u,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function d(u,p,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,y,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*y[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Eg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let I=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;p===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*L*4*d),T=new Sr(S,_,L,d);T.type=Dn,T.needsUpdate=!0;let P=v*4;for(let x=0;x<d;x++){let R=g[x],z=f[x],k=M[x],H=_*L*4*x;for(let J=0;J<R.count;J++){let V=J*P;p===!0&&(s.fromBufferAttribute(R,J),S[H+V+0]=s.x,S[H+V+1]=s.y,S[H+V+2]=s.z,S[H+V+3]=0),m===!0&&(s.fromBufferAttribute(z,J),S[H+V+4]=s.x,S[H+V+5]=s.y,S[H+V+6]=s.z,S[H+V+7]=0),y===!0&&(s.fromBufferAttribute(k,J),S[H+V+8]=s.x,S[H+V+9]=s.y,S[H+V+10]=s.z,S[H+V+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new nt(_,L)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Rg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ur=class extends Ye{constructor(t,e,n,s,r,a,o,l,c,h=Gi){if(h!==Gi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=gi),n===void 0&&h===Ki&&(n=Ji),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nh=new Ye,Oc=new Ur(1,1),Fh=new Sr,kh=new zo,Oh=new Lr,Bc=[],zc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),be(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),be(e,n)}}function kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),be(e,n)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oc.compareFunction=Th,r=Oc):r=Nh,e.setTexture2D(t||r,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oh,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fh,s)}function Jg(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return kg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return $g}}function Kg(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Qg(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function t0(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function e0(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n0(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i0(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s0(i,t){i.uniform1iv(this.addr,t)}function r0(i,t){i.uniform2iv(this.addr,t)}function a0(i,t){i.uniform3iv(this.addr,t)}function o0(i,t){i.uniform4iv(this.addr,t)}function l0(i,t){i.uniform1uiv(this.addr,t)}function c0(i,t){i.uniform2uiv(this.addr,t)}function h0(i,t){i.uniform3uiv(this.addr,t)}function d0(i,t){i.uniform4uiv(this.addr,t)}function u0(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Nh,r[a])}function f0(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kh,r[a])}function p0(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Oh,r[a])}function g0(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fh,r[a])}function m0(i){switch(i){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return g0}}var Go=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}},Wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}},Xo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wa=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function _0(i,t,e){let n=i.name,s=n.length;for(Wa.lastIndex=0;;){let r=Wa.exec(n),a=Wa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wc(e,c===void 0?new Go(o,i,t):new Wo(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Xo(o),Wc(e,d)),e=d}}}var Xi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);_0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var A0=37297,x0=0;function y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qc=new Gt;function v0(i){Kt._getMatrix(qc,Kt.workingColorSpace,i);let t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case ia:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y0(i.getShaderSource(t),a)}else return s}function C0(i,t){let e=v0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I0(i,t){let e;switch(t){case Dd:e="Linear";break;case Ud:e="Reinhard";break;case Nd:e="Cineon";break;case Fd:e="ACESFilmic";break;case Od:e="AgX";break;case Cl:e="Neutral";break;case kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dr=new E;function M0(){Kt.getLuminanceCoefficients(dr);let i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function b0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xs(i){return i!==""}function Zc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(E0,R0)}var T0=new Map;function R0(i,t){let e=Xt[t];if(e===void 0){let n=T0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}var P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(P0,L0)}function L0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function D0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function U0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function F0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function k0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function O0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=D0(e),c=U0(e),h=N0(e),d=F0(e),u=k0(e),p=w0(e),m=b0(r),y=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(xs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(xs).join(`
`),f.length>0&&(f+=`
`)):(g=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),f=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Xt.tonemapping_pars_fragment:"",e.toneMapping!==$n?I0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,C0("linearToOutputTexel",e.outputColorSpace),M0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),a=qo(a),a=Zc(a,e),a=$c(a,e),o=qo(o),o=Zc(o,e),o=$c(o,e),a=Jc(a),o=Jc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=M+g+a,_=M+f+o,L=Xc(s,s.VERTEX_SHADER,v),S=Xc(s,s.FRAGMENT_SHADER,_);s.attachShader(y,L),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(R){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(S).trim(),J=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,S);else{let st=Yc(s,L,"vertex"),G=Yc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+st+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||H==="")&&(V=!1);V&&(R.diagnostics={runnable:J,programLog:z,vertexShader:{log:k,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(L),s.deleteShader(S),P=new Xi(s,y),I=S0(s,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,A0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=S,this}var B0=0,Yo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zo(t),e.set(t,n)),n}},Zo=class{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}};function z0(i,t,e,n,s,r,a){let o=new Ts,l=new Yo,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(I){return c.add(I),I===0?"uv":`uv${I}`}function g(I,x,R,z,k){let H=z.fog,J=k.geometry,V=I.isMeshStandardMaterial?z.environment:null,st=(I.isMeshStandardMaterial?e:t).get(I.envMap||V),G=st&&st.mapping===na?st.image.height:null,dt=m[I.type];I.precision!==null&&(p=s.getMaxPrecision(I.precision),p!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",p,"instead."));let At=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=At!==void 0?At.length:0,zt=0;J.morphAttributes.position!==void 0&&(zt=1),J.morphAttributes.normal!==void 0&&(zt=2),J.morphAttributes.color!==void 0&&(zt=3);let ee,$,at,wt;if(dt){let se=gn[dt];ee=se.vertexShader,$=se.fragmentShader}else ee=I.vertexShader,$=I.fragmentShader,l.update(I),at=l.getVertexShaderID(I),wt=l.getFragmentShaderID(I);let ct=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ot=k.isInstancedMesh===!0,Ft=k.isBatchedMesh===!0,Jt=!!I.map,j=!!I.matcap,rt=!!st,b=!!I.aoMap,Pt=!!I.lightMap,tt=!!I.bumpMap,vt=!!I.normalMap,ht=!!I.displacementMap,Ut=!!I.emissiveMap,xt=!!I.metalnessMap,w=!!I.roughnessMap,A=I.anisotropy>0,F=I.clearcoat>0,Y=I.dispersion>0,Q=I.iridescence>0,Z=I.sheen>0,bt=I.transmission>0,ft=A&&!!I.anisotropyMap,yt=F&&!!I.clearcoatMap,Yt=F&&!!I.clearcoatNormalMap,it=F&&!!I.clearcoatRoughnessMap,Ct=Q&&!!I.iridescenceMap,Nt=Q&&!!I.iridescenceThicknessMap,kt=Z&&!!I.sheenColorMap,It=Z&&!!I.sheenRoughnessMap,Zt=!!I.specularMap,Wt=!!I.specularColorMap,de=!!I.specularIntensityMap,D=bt&&!!I.transmissionMap,pt=bt&&!!I.thicknessMap,W=!!I.gradientMap,K=!!I.alphaMap,_t=I.alphaTest>0,gt=!!I.alphaHash,Ht=!!I.extensions,xe=$n;I.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(xe=i.toneMapping);let Ne={shaderID:dt,shaderType:I.type,shaderName:I.name,vertexShader:ee,fragmentShader:$,defines:I.defines,customVertexShaderID:at,customFragmentShaderID:wt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&k._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&k.instanceColor!==null,instancingMorph:Ot&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ss,alphaToCoverage:!!I.alphaToCoverage,map:Jt,matcap:j,envMap:rt,envMapMode:rt&&st.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:Pt,bumpMap:tt,normalMap:vt,displacementMap:u&&ht,emissiveMap:Ut,normalMapObjectSpace:vt&&I.normalMapType===Vd,normalMapTangentSpace:vt&&I.normalMapType===Eh,metalnessMap:xt,roughnessMap:w,anisotropy:A,anisotropyMap:ft,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:Q,iridescenceMap:Ct,iridescenceThicknessMap:Nt,sheen:Z,sheenColorMap:kt,sheenRoughnessMap:It,specularMap:Zt,specularColorMap:Wt,specularIntensityMap:de,transmission:bt,transmissionMap:D,thicknessMap:pt,gradientMap:W,opaque:I.transparent===!1&&I.blending===Vi&&I.alphaToCoverage===!1,alphaMap:K,alphaTest:_t,alphaHash:gt,combine:I.combine,mapUv:Jt&&y(I.map.channel),aoMapUv:b&&y(I.aoMap.channel),lightMapUv:Pt&&y(I.lightMap.channel),bumpMapUv:tt&&y(I.bumpMap.channel),normalMapUv:vt&&y(I.normalMap.channel),displacementMapUv:ht&&y(I.displacementMap.channel),emissiveMapUv:Ut&&y(I.emissiveMap.channel),metalnessMapUv:xt&&y(I.metalnessMap.channel),roughnessMapUv:w&&y(I.roughnessMap.channel),anisotropyMapUv:ft&&y(I.anisotropyMap.channel),clearcoatMapUv:yt&&y(I.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&y(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&y(I.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&y(I.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&y(I.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(I.sheenRoughnessMap.channel),specularMapUv:Zt&&y(I.specularMap.channel),specularColorMapUv:Wt&&y(I.specularColorMap.channel),specularIntensityMapUv:de&&y(I.specularIntensityMap.channel),transmissionMapUv:D&&y(I.transmissionMap.channel),thicknessMapUv:pt&&y(I.thicknessMap.channel),alphaMapUv:K&&y(I.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(vt||A),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(Jt||K),fog:!!H,useFog:I.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:zt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Jt&&I.map.isVideoTexture===!0&&Kt.getTransfer(I.map.colorSpace)===ae,decodeVideoTextureEmissive:Ut&&I.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(I.emissiveMap.colorSpace)===ae,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Ge,flipSided:I.side===Re,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ht&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&I.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function f(I){let x=[];if(I.shaderID?x.push(I.shaderID):(x.push(I.customVertexShaderID),x.push(I.customFragmentShaderID)),I.defines!==void 0)for(let R in I.defines)x.push(R),x.push(I.defines[R]);return I.isRawShaderMaterial===!1&&(M(x,I),v(x,I),x.push(i.outputColorSpace)),x.push(I.customProgramCacheKey),x.join()}function M(I,x){I.push(x.precision),I.push(x.outputColorSpace),I.push(x.envMapMode),I.push(x.envMapCubeUVHeight),I.push(x.mapUv),I.push(x.alphaMapUv),I.push(x.lightMapUv),I.push(x.aoMapUv),I.push(x.bumpMapUv),I.push(x.normalMapUv),I.push(x.displacementMapUv),I.push(x.emissiveMapUv),I.push(x.metalnessMapUv),I.push(x.roughnessMapUv),I.push(x.anisotropyMapUv),I.push(x.clearcoatMapUv),I.push(x.clearcoatNormalMapUv),I.push(x.clearcoatRoughnessMapUv),I.push(x.iridescenceMapUv),I.push(x.iridescenceThicknessMapUv),I.push(x.sheenColorMapUv),I.push(x.sheenRoughnessMapUv),I.push(x.specularMapUv),I.push(x.specularColorMapUv),I.push(x.specularIntensityMapUv),I.push(x.transmissionMapUv),I.push(x.thicknessMapUv),I.push(x.combine),I.push(x.fogExp2),I.push(x.sizeAttenuation),I.push(x.morphTargetsCount),I.push(x.morphAttributeCount),I.push(x.numDirLights),I.push(x.numPointLights),I.push(x.numSpotLights),I.push(x.numSpotLightMaps),I.push(x.numHemiLights),I.push(x.numRectAreaLights),I.push(x.numDirLightShadows),I.push(x.numPointLightShadows),I.push(x.numSpotLightShadows),I.push(x.numSpotLightShadowsWithMaps),I.push(x.numLightProbes),I.push(x.shadowMapType),I.push(x.toneMapping),I.push(x.numClippingPlanes),I.push(x.numClipIntersection),I.push(x.depthPacking)}function v(I,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),I.push(o.mask)}function _(I){let x=m[I.type],R;if(x){let z=gn[x];R=Tu.clone(z.uniforms)}else R=I.uniforms;return R}function L(I,x){let R;for(let z=0,k=h.length;z<k;z++){let H=h[z];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new O0(i,x,I,r),h.push(R)),R}function S(I){if(--I.usedTimes===0){let x=h.indexOf(I);h[x]=h[h.length-1],h.pop(),I.destroy()}}function T(I){l.remove(I)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:P}}function H0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,p,m,y,g){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=y,f.group=g),t++,f}function o(d,u,p,m,y,g){let f=a(d,u,p,m,y,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,m,y,g){let f=a(d,u,p,m,y,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||V0),n.length>1&&n.sort(u||jc),s.length>1&&s.sort(u||jc)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function G0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Qc,i.set(n,[a])):s>=r.length?(a=new Qc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new qt};break;case"SpotLight":e={position:new E,direction:new E,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function X0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var q0=0;function Y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z0(i){let t=new W0,e=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new ge,a=new ge;function o(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,y=0,g=0,f=0,M=0,v=0,_=0,L=0,S=0,T=0;c.sort(Y0);for(let I=0,x=c.length;I<x;I++){let R=c[I],z=R.color,k=R.intensity,H=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);T++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let st=R.shadow,G=e.get(R);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[y]=V;let st=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,st.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[y]=st.matrix,R.castShadow){let G=e.get(R);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=J,_++}y++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=V,g++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let st=R.shadow,G=e.get(R);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,G.shadowCameraNear=st.camera.near,G.shadowCameraFar=st.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,v++}n.point[m]=V,m++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=V,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+L-S,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=T,n.version=q0++)}function l(c,h){let d=0,u=0,p=0,m=0,y=0,g=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let v=c[f];if(v.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function th(i){let t=new Z0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $o=class extends ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`;function j0(i,t,e){let n=new Rs,s=new nt,r=new nt,a=new oe,o=new $o({depthPacking:Hd}),l=new Jo,c={},h=e.maxTextureSize,d={[Kn]:Re,[Re]:Kn,[Ge]:Ge},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:J0,fragmentShader:K0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new lt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let f=this.type;this.render=function(S,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let I=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Zn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==Rn&&this.type===Rn,H=f===Rn&&this.type!==Rn;for(let J=0,V=S.length;J<V;J++){let st=S[J],G=st.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let dt=G.getFrameExtents();if(s.multiply(dt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,G.mapSize.y=r.y)),G.map===null||k===!0||H===!0){let Mt=this.type!==Rn?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new kn(s.x,s.y,Mt),G.map.texture.name=st.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let At=G.getViewportCount();for(let Mt=0;Mt<At;Mt++){let zt=G.getViewport(Mt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),z.viewport(a),G.updateMatrices(st,Mt),n=G.getFrustum(),_(T,P,G.camera,st,this.type)}G.isPointLightShadow!==!0&&this.type===Rn&&M(G,P),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(I,x,R)};function M(S,T){let P=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new kn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,P,u,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,P,p,y,null)}function v(S,T,P,I){let x=null,R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=x.uuid,k=T.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let J=H[k];J===void 0&&(J=x.clone(),H[k]=J,T.addEventListener("dispose",L)),x=J}if(x.visible=T.visible,x.wireframe=T.wireframe,I===Rn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=i.properties.get(x);z.light=P}return x}function _(S,T,P,I,x){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Rn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let k=t.update(S),H=S.material;if(Array.isArray(H)){let J=k.groups;for(let V=0,st=J.length;V<st;V++){let G=J[V],dt=H[G.materialIndex];if(dt&&dt.visible){let At=v(S,dt,I,x);S.onBeforeShadow(i,S,T,P,k,At,G),i.renderBufferDirect(P,null,k,At,S,G),S.onAfterShadow(i,S,T,P,k,At,G)}}}else if(H.visible){let J=v(S,H,I,x);S.onBeforeShadow(i,S,T,P,k,J,null),i.renderBufferDirect(P,null,k,J,S,null),S.onAfterShadow(i,S,T,P,k,J,null)}}let z=S.children;for(let k=0,H=z.length;k<H;k++)_(z[k],T,P,I,x)}function L(S){S.target.removeEventListener("dispose",L);for(let P in c){let I=c[P],x=S.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}var Q0={[Qa]:to,[eo]:so,[no]:ro,[qi]:io,[to]:Qa,[so]:eo,[ro]:no,[io]:qi};function tm(i,t){function e(){let D=!1,pt=new oe,W=null,K=new oe(0,0,0,0);return{setMask:function(_t){W!==_t&&!D&&(i.colorMask(_t,_t,_t,_t),W=_t)},setLocked:function(_t){D=_t},setClear:function(_t,gt,Ht,xe,Ne){Ne===!0&&(_t*=xe,gt*=xe,Ht*=xe),pt.set(_t,gt,Ht,xe),K.equals(pt)===!1&&(i.clearColor(_t,gt,Ht,xe),K.copy(pt))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function n(){let D=!1,pt=!1,W=null,K=null,_t=null;return{setReversed:function(gt){if(pt!==gt){let Ht=t.get("EXT_clip_control");pt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let xe=_t;_t=null,this.setClear(xe)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?ct(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(gt){W!==gt&&!D&&(i.depthMask(gt),W=gt)},setFunc:function(gt){if(pt&&(gt=Q0[gt]),K!==gt){switch(gt){case Qa:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=gt}},setLocked:function(gt){D=gt},setClear:function(gt){_t!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),_t=gt)},reset:function(){D=!1,W=null,K=null,_t=null,pt=!1}}}function s(){let D=!1,pt=null,W=null,K=null,_t=null,gt=null,Ht=null,xe=null,Ne=null;return{setTest:function(se){D||(se?ct(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(se){pt!==se&&!D&&(i.stencilMask(se),pt=se)},setFunc:function(se,nn,In){(W!==se||K!==nn||_t!==In)&&(i.stencilFunc(se,nn,In),W=se,K=nn,_t=In)},setOp:function(se,nn,In){(gt!==se||Ht!==nn||xe!==In)&&(i.stencilOp(se,nn,In),gt=se,Ht=nn,xe=In)},setLocked:function(se){D=se},setClear:function(se){Ne!==se&&(i.clearStencil(se),Ne=se)},reset:function(){D=!1,pt=null,W=null,K=null,_t=null,gt=null,Ht=null,xe=null,Ne=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],m=null,y=!1,g=null,f=null,M=null,v=null,_=null,L=null,S=null,T=new qt(0,0,0),P=0,I=!1,x=null,R=null,z=null,k=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,st=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=st>=1):G.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=st>=2);let dt=null,At={},Mt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),ee=new oe().fromArray(Mt),$=new oe().fromArray(zt);function at(D,pt,W,K){let _t=new Uint8Array(4),gt=i.createTexture();i.bindTexture(D,gt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<W;Ht++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return gt}let wt={};wt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(qi),tt(!1),vt(nc),ct(i.CULL_FACE),b(Zn);function ct(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Dt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ot(D,pt){return d[D]!==pt?(i.bindFramebuffer(D,pt),d[D]=pt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ft(D,pt){let W=p,K=!1;if(D){W=u.get(pt),W===void 0&&(W=[],u.set(pt,W));let _t=D.textures;if(W.length!==_t.length||W[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ht=_t.length;gt<Ht;gt++)W[gt]=i.COLOR_ATTACHMENT0+gt;W.length=_t.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function Jt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let j={[ui]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};j[md]=i.MIN,j[_d]=i.MAX;let rt={[Ad]:i.ZERO,[xd]:i.ONE,[yd]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function b(D,pt,W,K,_t,gt,Ht,xe,Ne,se){if(D===Zn){y===!0&&(Dt(i.BLEND),y=!1);return}if(y===!1&&(ct(i.BLEND),y=!0),D!==fd){if(D!==g||se!==I){if((f!==ui||_!==ui)&&(i.blendEquation(i.FUNC_ADD),f=ui,_=ui),se)switch(D){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,v=null,L=null,S=null,T.set(0,0,0),P=0,g=D,I=se}return}_t=_t||pt,gt=gt||W,Ht=Ht||K,(pt!==f||_t!==_)&&(i.blendEquationSeparate(j[pt],j[_t]),f=pt,_=_t),(W!==M||K!==v||gt!==L||Ht!==S)&&(i.blendFuncSeparate(rt[W],rt[K],rt[gt],rt[Ht]),M=W,v=K,L=gt,S=Ht),(xe.equals(T)===!1||Ne!==P)&&(i.blendColor(xe.r,xe.g,xe.b,Ne),T.copy(xe),P=Ne),g=D,I=!1}function Pt(D,pt){D.side===Ge?Dt(i.CULL_FACE):ct(i.CULL_FACE);let W=D.side===Re;pt&&(W=!W),tt(W),D.blending===Vi&&D.transparent===!1?b(Zn):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function vt(D){D!==dd?(ct(i.CULL_FACE),D!==R&&(D===nc?i.cullFace(i.BACK):D===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),R=D}function ht(D){D!==z&&(V&&i.lineWidth(D),z=D)}function Ut(D,pt,W){D?(ct(i.POLYGON_OFFSET_FILL),(k!==pt||H!==W)&&(i.polygonOffset(pt,W),k=pt,H=W)):Dt(i.POLYGON_OFFSET_FILL)}function xt(D){D?ct(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+J-1),dt!==D&&(i.activeTexture(D),dt=D)}function A(D,pt,W){W===void 0&&(dt===null?W=i.TEXTURE0+J-1:W=dt);let K=At[W];K===void 0&&(K={type:void 0,texture:void 0},At[W]=K),(K.type!==D||K.texture!==pt)&&(dt!==W&&(i.activeTexture(W),dt=W),i.bindTexture(D,pt||wt[D]),K.type=D,K.texture=pt)}function F(){let D=At[dt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(D){ee.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function It(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Zt(D,pt){let W=c.get(pt);W===void 0&&(W=new WeakMap,c.set(pt,W));let K=W.get(D);K===void 0&&(K=i.getUniformBlockIndex(pt,D.name),W.set(D,K))}function Wt(D,pt){let K=c.get(pt).get(D);l.get(pt)!==K&&(i.uniformBlockBinding(pt,K,D.__bindingPointIndex),l.set(pt,K))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,At={},d={},u=new WeakMap,p=[],m=null,y=!1,g=null,f=null,M=null,v=null,_=null,L=null,S=null,T=new qt(0,0,0),P=0,I=!1,x=null,R=null,z=null,k=null,H=null,ee.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Dt,bindFramebuffer:Ot,drawBuffers:Ft,useProgram:Jt,setBlending:b,setMaterial:Pt,setFlipSided:tt,setCullFace:vt,setLineWidth:ht,setPolygonOffset:Ut,setScissorTest:xt,activeTexture:w,bindTexture:A,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ct,texImage3D:Nt,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:Yt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:kt,viewport:It,reset:de}}function eh(i,t,e,n){let s=em(n);switch(e){case vh:return i*t;case Ih:return i*t;case Mh:return i*t*2;case wh:return i*t/s.components*s.byteLength;case bl:return i*t/s.components*s.byteLength;case bh:return i*t*2/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case El:return i*t*4/s.components*s.byteLength;case xr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case co:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ir:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sh:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(i){switch(i){case Fn:case Ah:return{byteLength:1,components:1};case ws:case xh:case zs:return{byteLength:2,components:1};case Ml:case wl:return{byteLength:2,components:4};case gi:case Il:case Dn:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,A){return p?new OffscreenCanvas(w,A):Ss("canvas")}function y(w,A,F){let Y=1,Q=xt(w);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let Z=Math.floor(Y*Q.width),bt=Math.floor(Y*Q.height);d===void 0&&(d=m(Z,bt));let ft=A?m(Z,bt):d;return ft.width=Z,ft.height=bt,ft.getContext("2d").drawImage(w,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+bt+")."),ft}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function g(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,A,F,Y,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=A;if(A===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),A===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),A===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),A===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),A===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),A===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),A===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),A===i.RGBA){let bt=Q?ia:Kt.getTransfer(Y);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=bt===ae?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(w,A){let F;return w?A===null||A===gi||A===Ji?F=i.DEPTH24_STENCIL8:A===Dn?F=i.DEPTH32F_STENCIL8:A===ws&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gi||A===Ji?F=i.DEPTH_COMPONENT24:A===Dn?F=i.DEPTH_COMPONENT32F:A===ws&&(F=i.DEPTH_COMPONENT16),F}function L(w,A){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==hn&&w.minFilter!==mn?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function S(w){let A=w.target;A.removeEventListener("dispose",S),P(A),A.isVideoTexture&&h.delete(A)}function T(w){let A=w.target;A.removeEventListener("dispose",T),x(A)}function P(w){let A=n.get(w);if(A.__webglInit===void 0)return;let F=w.source,Y=u.get(F);if(Y){let Q=Y[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(w),Object.keys(Y).length===0&&u.delete(F)}n.remove(w)}function I(w){let A=n.get(w);i.deleteTexture(A.__webglTexture);let F=w.source,Y=u.get(F);delete Y[A.__cacheKey],a.memory.textures--}function x(w){let A=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let Q=0;Q<A.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let F=w.textures;for(let Y=0,Q=F.length;Y<Q;Y++){let Z=n.get(F[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(w)}let R=0;function z(){R=0}function k(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function H(w){let A=[];return A.push(w.wrapS),A.push(w.wrapT),A.push(w.wrapR||0),A.push(w.magFilter),A.push(w.minFilter),A.push(w.anisotropy),A.push(w.internalFormat),A.push(w.format),A.push(w.type),A.push(w.generateMipmaps),A.push(w.premultiplyAlpha),A.push(w.flipY),A.push(w.unpackAlignment),A.push(w.colorSpace),A.join()}function J(w,A){let F=n.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,w,A);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+A)}function V(w,A){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+A)}function st(w,A){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,A);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+A)}function G(w,A){let F=n.get(w);if(w.version>0&&F.__version!==w.version){at(F,w,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+A)}let dt={[$i]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},At={[hn]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},Mt={[Gd]:i.NEVER,[$d]:i.ALWAYS,[Wd]:i.LESS,[Th]:i.LEQUAL,[Xd]:i.EQUAL,[Zd]:i.GEQUAL,[qd]:i.GREATER,[Yd]:i.NOTEQUAL};function zt(w,A){if(A.type===Dn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===mn||A.magFilter===_a||A.magFilter===Xs||A.magFilter===Ln||A.minFilter===mn||A.minFilter===_a||A.minFilter===Xs||A.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,dt[A.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,dt[A.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,dt[A.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,At[A.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,At[A.minFilter]),A.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hn||A.minFilter!==Xs&&A.minFilter!==Ln||A.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ee(w,A){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",S));let Y=A.source,Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));let Z=H(A);if(Z!==w.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[Z].usedTimes++;let bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&I(A)),w.__cacheKey=Z,w.__webglTexture=Q[Z].texture}return F}function $(w,A,F){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=ee(w,A),Z=A.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+F);let bt=n.get(Z);if(Z.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);let ft=Kt.getPrimaries(Kt.workingColorSpace),yt=A.colorSpace===qn?null:Kt.getPrimaries(A.colorSpace),Yt=A.colorSpace===qn||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=y(A.image,!1,s.maxTextureSize);it=Ut(A,it);let Ct=r.convert(A.format,A.colorSpace),Nt=r.convert(A.type),kt=v(A.internalFormat,Ct,Nt,A.colorSpace,A.isVideoTexture);zt(Y,A);let It,Zt=A.mipmaps,Wt=A.isVideoTexture!==!0,de=bt.__version===void 0||Q===!0,D=Z.dataReady,pt=L(A,it);if(A.isDepthTexture)kt=_(A.format===Ki,A.type),de&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,kt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,kt,it.width,it.height,0,Ct,Nt,null));else if(A.isDataTexture)if(Zt.length>0){Wt&&de&&e.texStorage2D(i.TEXTURE_2D,pt,kt,Zt[0].width,Zt[0].height);for(let W=0,K=Zt.length;W<K;W++)It=Zt[W],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,Ct,Nt,It.data):e.texImage2D(i.TEXTURE_2D,W,kt,It.width,It.height,0,Ct,Nt,It.data);A.generateMipmaps=!1}else Wt?(de&&e.texStorage2D(i.TEXTURE_2D,pt,kt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,Ct,Nt,it.data)):e.texImage2D(i.TEXTURE_2D,0,kt,it.width,it.height,0,Ct,Nt,it.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Wt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,kt,Zt[0].width,Zt[0].height,it.depth);for(let W=0,K=Zt.length;W<K;W++)if(It=Zt[W],A.format!==cn)if(Ct!==null)if(Wt){if(D)if(A.layerUpdates.size>0){let _t=eh(It.width,It.height,A.format,A.type);for(let gt of A.layerUpdates){let Ht=It.data.subarray(gt*_t/It.data.BYTES_PER_ELEMENT,(gt+1)*_t/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,gt,It.width,It.height,1,Ct,Ht)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,it.depth,Ct,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,kt,It.width,It.height,it.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,it.depth,Ct,Nt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,kt,It.width,It.height,it.depth,0,Ct,Nt,It.data)}else{Wt&&de&&e.texStorage2D(i.TEXTURE_2D,pt,kt,Zt[0].width,Zt[0].height);for(let W=0,K=Zt.length;W<K;W++)It=Zt[W],A.format!==cn?Ct!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,Ct,It.data):e.compressedTexImage2D(i.TEXTURE_2D,W,kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,Ct,Nt,It.data):e.texImage2D(i.TEXTURE_2D,W,kt,It.width,It.height,0,Ct,Nt,It.data)}else if(A.isDataArrayTexture)if(Wt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,kt,it.width,it.height,it.depth),D)if(A.layerUpdates.size>0){let W=eh(it.width,it.height,A.format,A.type);for(let K of A.layerUpdates){let _t=it.data.subarray(K*W/it.data.BYTES_PER_ELEMENT,(K+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,Ct,Nt,_t)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Ct,Nt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,it.width,it.height,it.depth,0,Ct,Nt,it.data);else if(A.isData3DTexture)Wt?(de&&e.texStorage3D(i.TEXTURE_3D,pt,kt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Ct,Nt,it.data)):e.texImage3D(i.TEXTURE_3D,0,kt,it.width,it.height,it.depth,0,Ct,Nt,it.data);else if(A.isFramebufferTexture){if(de)if(Wt)e.texStorage2D(i.TEXTURE_2D,pt,kt,it.width,it.height);else{let W=it.width,K=it.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,kt,W,K,0,Ct,Nt,null),W>>=1,K>>=1}}else if(Zt.length>0){if(Wt&&de){let W=xt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,pt,kt,W.width,W.height)}for(let W=0,K=Zt.length;W<K;W++)It=Zt[W],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ct,Nt,It):e.texImage2D(i.TEXTURE_2D,W,kt,Ct,Nt,It);A.generateMipmaps=!1}else if(Wt){if(de){let W=xt(it);e.texStorage2D(i.TEXTURE_2D,pt,kt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Nt,it)}else e.texImage2D(i.TEXTURE_2D,0,kt,Ct,Nt,it);g(A)&&f(Y),bt.__version=Z.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function at(w,A,F){if(A.image.length!==6)return;let Y=ee(w,A),Q=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let Z=n.get(Q);if(Q.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);let bt=Kt.getPrimaries(Kt.workingColorSpace),ft=A.colorSpace===qn?null:Kt.getPrimaries(A.colorSpace),yt=A.colorSpace===qn||bt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Yt=A.isCompressedTexture||A.image[0].isCompressedTexture,it=A.image[0]&&A.image[0].isDataTexture,Ct=[];for(let K=0;K<6;K++)!Yt&&!it?Ct[K]=y(A.image[K],!0,s.maxCubemapSize):Ct[K]=it?A.image[K].image:A.image[K],Ct[K]=Ut(A,Ct[K]);let Nt=Ct[0],kt=r.convert(A.format,A.colorSpace),It=r.convert(A.type),Zt=v(A.internalFormat,kt,It,A.colorSpace),Wt=A.isVideoTexture!==!0,de=Z.__version===void 0||Y===!0,D=Q.dataReady,pt=L(A,Nt);zt(i.TEXTURE_CUBE_MAP,A);let W;if(Yt){Wt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Zt,Nt.width,Nt.height);for(let K=0;K<6;K++){W=Ct[K].mipmaps;for(let _t=0;_t<W.length;_t++){let gt=W[_t];A.format!==cn?kt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Zt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,gt.width,gt.height,kt,It,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Zt,gt.width,gt.height,0,kt,It,gt.data)}}}else{if(W=A.mipmaps,Wt&&de){W.length>0&&pt++;let K=xt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Zt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct[K].width,Ct[K].height,kt,It,Ct[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,Ct[K].width,Ct[K].height,0,kt,It,Ct[K].data);for(let _t=0;_t<W.length;_t++){let Ht=W[_t].image[K].image;Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Ht.width,Ht.height,kt,It,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Zt,Ht.width,Ht.height,0,kt,It,Ht.data)}}else{Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,kt,It,Ct[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,kt,It,Ct[K]);for(let _t=0;_t<W.length;_t++){let gt=W[_t];Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,kt,It,gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Zt,kt,It,gt.image[K])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function wt(w,A,F,Y,Q,Z){let bt=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),yt=v(F.internalFormat,bt,ft,F.colorSpace),Yt=n.get(A),it=n.get(F);if(it.__renderTarget=A,!Yt.__hasExternalTextures){let Ct=Math.max(1,A.width>>Z),Nt=Math.max(1,A.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,yt,Ct,Nt,A.depth,0,bt,ft,null):e.texImage2D(Q,Z,yt,Ct,Nt,0,bt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,it.__webglTexture,0,tt(A)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(w,A,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),A.depthBuffer){let Y=A.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=_(A.stencilBuffer,Q),bt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=tt(A);vt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,A.width,A.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Z,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{let Y=A.textures;for(let Q=0;Q<Y.length;Q++){let Z=Y[Q],bt=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),yt=v(Z.internalFormat,bt,ft,Z.colorSpace),Yt=tt(A);F&&vt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,yt,A.width,A.height):vt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,yt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,yt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(w,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);let Q=Y.__webglTexture,Z=tt(A);if(A.depthTexture.format===Gi)vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(A.depthTexture.format===Ki)vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ot(w){let A=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let Q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),A.__depthDisposeCallback=Q}A.__boundDepthTexture=Y}if(w.depthTexture&&!A.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,w)}else if(F){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),ct(A.__webglDepthbuffer[Y],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ct(A.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(w,A,F){let Y=n.get(w);A!==void 0&&wt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ot(w)}function Jt(w){let A=w.texture,F=n.get(w),Y=n.get(A);w.addEventListener("dispose",T);let Q=w.textures,Z=w.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let yt=0;yt<A.mipmaps.length;yt++)F.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else F.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)F.__webglFramebuffer[ft]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ft=0,yt=Q.length;ft<yt;ft++){let Yt=n.get(Q[ft]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){let yt=Q[ft];F.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);let Yt=r.convert(yt.format,yt.colorSpace),it=r.convert(yt.type),Ct=v(yt.internalFormat,Yt,it,yt.colorSpace,w.isXRRenderTarget===!0),Nt=tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(i.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)wt(F.__webglFramebuffer[ft][yt],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else wt(F.__webglFramebuffer[ft],w,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ft=0,yt=Q.length;ft<yt;ft++){let Yt=Q[ft],it=n.get(Yt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),zt(i.TEXTURE_2D,Yt),wt(F.__webglFramebuffer,w,Yt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),zt(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)wt(F.__webglFramebuffer[yt],w,A,i.COLOR_ATTACHMENT0,ft,yt);else wt(F.__webglFramebuffer,w,A,i.COLOR_ATTACHMENT0,ft,0);g(A)&&f(ft),e.unbindTexture()}w.depthBuffer&&Ot(w)}function j(w){let A=w.textures;for(let F=0,Y=A.length;F<Y;F++){let Q=A[F];if(g(Q)){let Z=M(w),bt=n.get(Q).__webglTexture;e.bindTexture(Z,bt),f(Z),e.unbindTexture()}}}let rt=[],b=[];function Pt(w){if(w.samples>0){if(vt(w)===!1){let A=w.textures,F=w.width,Y=w.height,Q=i.COLOR_BUFFER_BIT,Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),ft=A.length>1;if(ft)for(let yt=0;yt<A.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<A.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let Yt=n.get(A[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(rt.length=0,b.length=0,rt.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(Z),b.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<A.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let Yt=n.get(A[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let A=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function tt(w){return Math.min(s.maxSamples,w.samples)}function vt(w){let A=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(w){let A=a.render.frame;h.get(w)!==A&&(h.set(w,A),w.update())}function Ut(w,A){let F=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ss&&F!==qn&&(Kt.getTransfer(F)===ae?(Y!==cn||Q!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),A}function xt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=st,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=vt}function im(i,t){function e(n,s=qn){let r,a=Kt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.BYTE;if(n===xh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===zs)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===cn)return i.RGBA;if(n===Ih)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===wh)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===bh)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===xr||n===yr||n===vr||n===Cr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===go||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===go)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===Ao||n===xo||n===yo||n===vo||n===Co||n===Io||n===Mo||n===wo||n===bo||n===So||n===Eo||n===To||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===Po||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ir)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===Do||n===Uo||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ko=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,am=`
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

}`,jo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:rm,fragmentShader:am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qo=class extends jn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null,y=new jo,g=e.getContextAttributes(),f=null,M=null,v=[],_=[],L=new nt,S=null,T=new Oe;T.viewport=new oe;let P=new Oe;P.viewport=new oe;let I=[T,P],x=new Ko,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=v[$];return at===void 0&&(at=new Cs,v[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=v[$];return at===void 0&&(at=new Cs,v[$]=at),at.getGripSpace()},this.getHand=function($){let at=v[$];return at===void 0&&(at=new Cs,v[$]=at),at.getHandSpace()};function k($){let at=_.indexOf($.inputSource);if(at===-1)return;let wt=v[at];wt!==void 0&&(wt.update($.inputSource,$.frame,c||a),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){let at=_[$];at!==null&&(_[$]=null,v[$].disconnect(at))}R=null,z=null,y.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new kn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,wt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?Ki:Gi,wt=g.stencil?Ji:gi);let Dt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new kn(u.textureWidth,u.textureHeight,{format:cn,type:Fn,depthTexture:new Ur(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J($){for(let at=0;at<$.removed.length;at++){let wt=$.removed[at],ct=_.indexOf(wt);ct>=0&&(_[ct]=null,v[ct].disconnect(wt))}for(let at=0;at<$.added.length;at++){let wt=$.added[at],ct=_.indexOf(wt);if(ct===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=_.length){_.push(wt),ct=Ot;break}else if(_[Ot]===null){_[Ot]=wt,ct=Ot;break}if(ct===-1)break}let Dt=v[ct];Dt&&Dt.connect(wt)}}let V=new E,st=new E;function G($,at,wt){V.setFromMatrixPosition(at.matrixWorld),st.setFromMatrixPosition(wt.matrixWorld);let ct=V.distanceTo(st),Dt=at.projectionMatrix.elements,Ot=wt.projectionMatrix.elements,Ft=Dt[14]/(Dt[10]-1),Jt=Dt[14]/(Dt[10]+1),j=(Dt[9]+1)/Dt[5],rt=(Dt[9]-1)/Dt[5],b=(Dt[8]-1)/Dt[0],Pt=(Ot[8]+1)/Ot[0],tt=Ft*b,vt=Ft*Pt,ht=ct/(-b+Pt),Ut=ht*-b;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ut),$.translateZ(ht),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let xt=Ft+ht,w=Jt+ht,A=tt-Ut,F=vt+(ct-Ut),Y=j*Jt/w*xt,Q=rt*Jt/w*xt;$.projectionMatrix.makePerspective(A,F,Y,Q,xt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function dt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,wt=$.far;y.texture!==null&&(y.depthNear>0&&(at=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),x.near=P.near=T.near=at,x.far=P.far=T.far=wt,(R!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far),T.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;let ct=$.parent,Dt=x.cameras;dt(x,ct);for(let Ot=0;Ot<Dt.length;Ot++)dt(Dt[Ot],ct);Dt.length===2?G(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),At($,x,ct)};function At($,at,wt){wt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Mt=null;function zt($,at){if(h=at.getViewerPose(c||a),m=at,h!==null){let wt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ct=!1;wt.length!==x.cameras.length&&(x.cameras.length=0,ct=!0);for(let Ot=0;Ot<wt.length;Ot++){let Ft=wt[Ot],Jt=null;if(p!==null)Jt=p.getViewport(Ft);else{let rt=d.getViewSubImage(u,Ft);Jt=rt.viewport,Ot===0&&(t.setRenderTargetTextures(M,rt.colorTexture,u.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(M))}let j=I[Ot];j===void 0&&(j=new Oe,j.layers.enable(Ot),j.viewport=new oe,I[Ot]=j),j.matrix.fromArray(Ft.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ft.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ot===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ct===!0&&x.cameras.push(j)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Ot=d.getDepthInformation(wt[0]);Ot&&Ot.isValid&&Ot.texture&&y.init(t,Ot,s.renderState)}}for(let wt=0;wt<v.length;wt++){let ct=_[wt],Dt=v[wt];ct!==null&&Dt!==void 0&&Dt.update(ct,at,c||a)}Mt&&Mt($,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let ee=new Uh;ee.setAnimationLoop(zt),this.setAnimationLoop=function($){Mt=$},this.dispose=function(){}}},hi=new An,om=new ge;function lm(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Dh(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,M,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Re&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Re&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,hi.copy(_),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),g.envMapRotation.value.setFromMatrix4(om.makeRotationFromEuler(hi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,M,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=v*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(m(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));let L=v.program;n.updateUBOMapping(M,L);let S=t.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function h(M){let v=d();M.__bindingPointIndex=v;let _=i.createBuffer(),L=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let v=s[M.id],_=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=_.length;S<T;S++){let P=Array.isArray(_[S])?_[S]:[_[S]];for(let I=0,x=P.length;I<x;I++){let R=P[I];if(p(R,S,I,L)===!0){let z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],H=0;for(let J=0;J<k.length;J++){let V=k[J],st=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+H,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,H),H+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,_,L){let S=M.value,T=v+"_"+_;if(L[T]===void 0)return typeof S=="number"||typeof S=="boolean"?L[T]=S:L[T]=S.clone(),!0;{let P=L[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return L[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(M){let v=M.uniforms,_=0,L=16;for(let T=0,P=v.length;T<P;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,R=I.length;x<R;x++){let z=I[x],k=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=k.length;H<J;H++){let V=k[H],st=y(V),G=_%L,dt=G%st.boundary,At=G+dt;_+=dt,At!==0&&L-At<st.storage&&(_+=L-At),z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=st.storage}}}let S=_%L;return S>0&&(_+=L-S),M.__size=_,M.__cache={},this}function y(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Nr=class{constructor(t={}){let{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),y=new Int32Array(4),g=null,f=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=$n,this.toneMappingExposure=1;let _=this,L=!1,S=0,T=0,P=null,I=-1,x=null,R=new oe,z=new oe,k=null,H=new qt(0),J=0,V=e.width,st=e.height,G=1,dt=null,At=null,Mt=new oe(0,0,V,st),zt=new oe(0,0,V,st),ee=!1,$=new Rs,at=!1,wt=!1,ct=new ge,Dt=new ge,Ot=new E,Ft=new oe,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function rt(){return P===null?G:1}let b=n;function Pt(C,U){return e.getContext(C,U)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),b===null){let U="webgl2";if(b=Pt(U,C),b===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,vt,ht,Ut,xt,w,A,F,Y,Q,Z,bt,ft,yt,Yt,it,Ct,Nt,kt,It,Zt,Wt,de,D;function pt(){tt=new wg(b),tt.init(),Wt=new im(b,tt),vt=new xg(b,tt,t,Wt),ht=new tm(b,tt),vt.reverseDepthBuffer&&u&&ht.buffers.depth.setReversed(!0),Ut=new Eg(b),xt=new H0,w=new nm(b,tt,ht,xt,vt,Wt,Ut),A=new vg(_),F=new Mg(_),Y=new Uu(b),de=new _g(b,Y),Q=new bg(b,Y,Ut,de),Z=new Rg(b,Q,Y,Ut),kt=new Tg(b,vt,w),it=new yg(xt),bt=new z0(_,A,F,tt,vt,de,it),ft=new lm(_,xt),yt=new G0,Yt=new $0(tt),Nt=new mg(_,A,F,ht,Z,p,l),Ct=new j0(_,Z,vt),D=new cm(b,Ut,vt,ht),It=new Ag(b,tt,Ut),Zt=new Sg(b,tt,Ut),Ut.programs=bt.programs,_.capabilities=vt,_.extensions=tt,_.properties=xt,_.renderLists=yt,_.shadowMap=Ct,_.state=ht,_.info=Ut}pt();let W=new Qo(_,b);this.xr=W,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(V,st,!1))},this.getSize=function(C){return C.set(V,st)},this.setSize=function(C,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,st=U,e.width=Math.floor(C*G),e.height=Math.floor(U*G),O===!0&&(e.style.width=C+"px",e.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(V*G,st*G).floor()},this.setDrawingBufferSize=function(C,U,O){V=C,st=U,G=O,e.width=Math.floor(C*O),e.height=Math.floor(U*O),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Mt)},this.setViewport=function(C,U,O,B){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,U,O,B),ht.viewport(R.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(zt)},this.setScissor=function(C,U,O,B){C.isVector4?zt.set(C.x,C.y,C.z,C.w):zt.set(C,U,O,B),ht.scissor(z.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){ht.setScissorTest(ee=C)},this.setOpaqueSort=function(C){dt=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(C=!0,U=!0,O=!0){let B=0;if(C){let N=!1;if(P!==null){let ot=P.texture.format;N=ot===El||ot===Sl||ot===bl}if(N){let ot=P.texture.type,mt=ot===Fn||ot===gi||ot===ws||ot===Ji||ot===Ml||ot===wl,Et=Nt.getClearColor(),Tt=Nt.getClearAlpha(),Bt=Et.r,Vt=Et.g,Rt=Et.b;mt?(m[0]=Bt,m[1]=Vt,m[2]=Rt,m[3]=Tt,b.clearBufferuiv(b.COLOR,0,m)):(y[0]=Bt,y[1]=Vt,y[2]=Rt,y[3]=Tt,b.clearBufferiv(b.COLOR,0,y))}else B|=b.COLOR_BUFFER_BIT}U&&(B|=b.DEPTH_BUFFER_BIT),O&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Yt.dispose(),xt.dispose(),A.dispose(),F.dispose(),Z.dispose(),de.dispose(),D.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Zl),W.removeEventListener("sessionend",$l),si.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let C=Ut.autoReset,U=Ct.enabled,O=Ct.autoUpdate,B=Ct.needsUpdate,N=Ct.type;pt(),Ut.autoReset=C,Ct.enabled=U,Ct.autoUpdate=O,Ct.needsUpdate=B,Ct.type=N}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ht(C){let U=C.target;U.removeEventListener("dispose",Ht),xe(U)}function xe(C){Ne(C),xt.remove(C)}function Ne(C){let U=xt.get(C).programs;U!==void 0&&(U.forEach(function(O){bt.releaseProgram(O)}),C.isShaderMaterial&&bt.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,O,B,N,ot){U===null&&(U=Jt);let mt=N.isMesh&&N.matrixWorld.determinant()<0,Et=ld(C,U,O,B,N);ht.setMaterial(B,mt);let Tt=O.index,Bt=1;if(B.wireframe===!0){if(Tt=Q.getWireframeAttribute(O),Tt===void 0)return;Bt=2}let Vt=O.drawRange,Rt=O.attributes.position,jt=Vt.start*Bt,ue=(Vt.start+Vt.count)*Bt;ot!==null&&(jt=Math.max(jt,ot.start*Bt),ue=Math.min(ue,(ot.start+ot.count)*Bt)),Tt!==null?(jt=Math.max(jt,0),ue=Math.min(ue,Tt.count)):Rt!=null&&(jt=Math.max(jt,0),ue=Math.min(ue,Rt.count));let fe=ue-jt;if(fe<0||fe===1/0)return;de.setup(N,B,Et,O,Tt);let qe,ne=It;if(Tt!==null&&(qe=Y.get(Tt),ne=Zt,ne.setIndex(qe)),N.isMesh)B.wireframe===!0?(ht.setLineWidth(B.wireframeLinewidth*rt()),ne.setMode(b.LINES)):ne.setMode(b.TRIANGLES);else if(N.isLine){let Lt=B.linewidth;Lt===void 0&&(Lt=1),ht.setLineWidth(Lt*rt()),N.isLineSegments?ne.setMode(b.LINES):N.isLineLoop?ne.setMode(b.LINE_LOOP):ne.setMode(b.LINE_STRIP)}else N.isPoints?ne.setMode(b.POINTS):N.isSprite&&ne.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Lt=N._multiDrawStarts,Mn=N._multiDrawCounts,ie=N._multiDrawCount,sn=Tt?Y.get(Tt).bytesPerElement:1,vi=xt.get(B).currentProgram.getUniforms();for(let Ze=0;Ze<ie;Ze++)vi.setValue(b,"_gl_DrawID",Ze),ne.render(Lt[Ze]/sn,Mn[Ze])}else if(N.isInstancedMesh)ne.renderInstances(jt,fe,N.count);else if(O.isInstancedBufferGeometry){let Lt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Mn=Math.min(O.instanceCount,Lt);ne.renderInstances(jt,fe,Mn)}else ne.render(jt,fe)};function se(C,U,O){C.transparent===!0&&C.side===Ge&&C.forceSinglePass===!1?(C.side=Re,C.needsUpdate=!0,Ws(C,U,O),C.side=Kn,C.needsUpdate=!0,Ws(C,U,O),C.side=Ge):Ws(C,U,O)}this.compile=function(C,U,O=null){O===null&&(O=C),f=Yt.get(O),f.init(U),v.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),C!==O&&C.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let B=new Set;return C.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let Et=ot[mt];se(Et,O,N),B.add(Et)}else se(ot,O,N),B.add(ot)}),v.pop(),f=null,B},this.compileAsync=function(C,U,O=null){let B=this.compile(C,U,O);return new Promise(N=>{function ot(){if(B.forEach(function(mt){xt.get(mt).currentProgram.isReady()&&B.delete(mt)}),B.size===0){N(C);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let nn=null;function In(C){nn&&nn(C)}function Zl(){si.stop()}function $l(){si.start()}let si=new Uh;si.setAnimationLoop(In),typeof self!="undefined"&&si.setContext(self),this.setAnimationLoop=function(C){nn=C,W.setAnimationLoop(C),C===null?si.stop():si.start()},W.addEventListener("sessionstart",Zl),W.addEventListener("sessionend",$l),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,U,P),f=Yt.get(C,v.length),f.init(U),v.push(f),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Dt),wt=this.localClippingEnabled,at=it.init(this.clippingPlanes,wt),g=yt.get(C,M.length),g.init(),M.push(g),W.enabled===!0&&W.isPresenting===!0){let ot=_.xr.getDepthSensingMesh();ot!==null&&ma(ot,U,-1/0,_.sortObjects)}ma(C,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(dt,At),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Nt.addToRenderList(g,C),this.info.render.frame++,at===!0&&it.beginShadows();let O=f.state.shadowsArray;Ct.render(O,C,U),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,N=g.transmissive;if(f.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let mt=0,Et=ot.length;mt<Et;mt++){let Tt=ot[mt];Kl(B,N,C,Tt)}j&&Nt.render(C);for(let mt=0,Et=ot.length;mt<Et;mt++){let Tt=ot[mt];Jl(g,C,Tt,Tt.viewport)}}else N.length>0&&Kl(B,N,C,U),j&&Nt.render(C),Jl(g,C,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(_,C,U),de.resetDefaultState(),I=-1,x=null,v.pop(),v.length>0?(f=v[v.length-1],at===!0&&it.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ma(C,U,O,B){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)O=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){B&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Dt);let mt=Z.update(C),Et=C.material;Et.visible&&g.push(C,mt,Et,O,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let mt=Z.update(C),Et=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ft.copy(mt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(Dt)),Array.isArray(Et)){let Tt=mt.groups;for(let Bt=0,Vt=Tt.length;Bt<Vt;Bt++){let Rt=Tt[Bt],jt=Et[Rt.materialIndex];jt&&jt.visible&&g.push(C,mt,jt,O,Ft.z,Rt)}}else Et.visible&&g.push(C,mt,Et,O,Ft.z,null)}}let ot=C.children;for(let mt=0,Et=ot.length;mt<Et;mt++)ma(ot[mt],U,O,B)}function Jl(C,U,O,B){let N=C.opaque,ot=C.transmissive,mt=C.transparent;f.setupLightsView(O),at===!0&&it.setGlobalState(_.clippingPlanes,O),B&&ht.viewport(R.copy(B)),N.length>0&&Gs(N,U,O),ot.length>0&&Gs(ot,U,O),mt.length>0&&Gs(mt,U,O),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Kl(C,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new kn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?zs:Fn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ot=f.state.transmissionRenderTarget[B.id],mt=B.viewport||R;ot.setSize(mt.z,mt.w);let Et=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(H),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),j&&Nt.render(O);let Tt=_.toneMapping;_.toneMapping=$n;let Bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),at===!0&&it.setGlobalState(_.clippingPlanes,B),Gs(C,O,B),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Rt=0,jt=U.length;Rt<jt;Rt++){let ue=U[Rt],fe=ue.object,qe=ue.geometry,ne=ue.material,Lt=ue.group;if(ne.side===Ge&&fe.layers.test(B.layers)){let Mn=ne.side;ne.side=Re,ne.needsUpdate=!0,jl(fe,O,B,qe,ne,Lt),ne.side=Mn,ne.needsUpdate=!0,Vt=!0}}Vt===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot))}_.setRenderTarget(Et),_.setClearColor(H,J),Bt!==void 0&&(B.viewport=Bt),_.toneMapping=Tt}function Gs(C,U,O){let B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=C.length;N<ot;N++){let mt=C[N],Et=mt.object,Tt=mt.geometry,Bt=B===null?mt.material:B,Vt=mt.group;Et.layers.test(O.layers)&&jl(Et,U,O,Tt,Bt,Vt)}}function jl(C,U,O,B,N,ot){C.onBeforeRender(_,U,O,B,N,ot),C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),N.onBeforeRender(_,U,O,B,C,ot),N.transparent===!0&&N.side===Ge&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,_.renderBufferDirect(O,U,B,N,C,ot),N.side=Kn,N.needsUpdate=!0,_.renderBufferDirect(O,U,B,N,C,ot),N.side=Ge):_.renderBufferDirect(O,U,B,N,C,ot),C.onAfterRender(_,U,O,B,N,ot)}function Ws(C,U,O){U.isScene!==!0&&(U=Jt);let B=xt.get(C),N=f.state.lights,ot=f.state.shadowsArray,mt=N.state.version,Et=bt.getParameters(C,N.state,ot,U,O),Tt=bt.getProgramCacheKey(Et),Bt=B.programs;B.environment=C.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(C.isMeshStandardMaterial?F:A).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,Bt===void 0&&(C.addEventListener("dispose",Ht),Bt=new Map,B.programs=Bt);let Vt=Bt.get(Tt);if(Vt!==void 0){if(B.currentProgram===Vt&&B.lightsStateVersion===mt)return tc(C,Et),Vt}else Et.uniforms=bt.getUniforms(C),C.onBeforeCompile(Et,_),Vt=bt.acquireProgram(Et,Tt),Bt.set(Tt,Vt),B.uniforms=Et.uniforms;let Rt=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Rt.clippingPlanes=it.uniform),tc(C,Et),B.needsLights=hd(C),B.lightsStateVersion=mt,B.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Vt,B.uniformsList=null,Vt}function Ql(C){if(C.uniformsList===null){let U=C.currentProgram.getUniforms();C.uniformsList=Xi.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function tc(C,U){let O=xt.get(C);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function ld(C,U,O,B,N){U.isScene!==!0&&(U=Jt),w.resetTextureUnits();let ot=U.fog,mt=B.isMeshStandardMaterial?U.environment:null,Et=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ss,Tt=(B.isMeshStandardMaterial?F:A).get(B.envMap||mt),Bt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Vt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!O.morphAttributes.position,jt=!!O.morphAttributes.normal,ue=!!O.morphAttributes.color,fe=$n;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=_.toneMapping);let qe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=qe!==void 0?qe.length:0,Lt=xt.get(B),Mn=f.state.lights;if(at===!0&&(wt===!0||C!==x)){let je=C===x&&B.id===I;it.setState(B,C,je)}let ie=!1;B.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Mn.state.version||Lt.outputColorSpace!==Et||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==Tt||B.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Rt||Lt.morphNormals!==jt||Lt.morphColors!==ue||Lt.toneMapping!==fe||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=B.version);let sn=Lt.currentProgram;ie===!0&&(sn=Ws(B,U,N));let vi=!1,Ze=!1,ls=!1,pe=sn.getUniforms(),pn=Lt.uniforms;if(ht.useProgram(sn.program)&&(vi=!0,Ze=!0,ls=!0),B.id!==I&&(I=B.id,Ze=!0),vi||x!==C){ht.buffers.depth.getReversed()?(ct.copy(C.projectionMatrix),pu(ct),gu(ct),pe.setValue(b,"projectionMatrix",ct)):pe.setValue(b,"projectionMatrix",C.projectionMatrix),pe.setValue(b,"viewMatrix",C.matrixWorldInverse);let On=pe.map.cameraPosition;On!==void 0&&On.setValue(b,Ot.setFromMatrixPosition(C.matrixWorld)),vt.logarithmicDepthBuffer&&pe.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,Ze=!0,ls=!0)}if(N.isSkinnedMesh){pe.setOptional(b,N,"bindMatrix"),pe.setOptional(b,N,"bindMatrixInverse");let je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),pe.setValue(b,"boneTexture",je.boneTexture,w))}N.isBatchedMesh&&(pe.setOptional(b,N,"batchingTexture"),pe.setValue(b,"batchingTexture",N._matricesTexture,w),pe.setOptional(b,N,"batchingIdTexture"),pe.setValue(b,"batchingIdTexture",N._indirectTexture,w),pe.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&pe.setValue(b,"batchingColorTexture",N._colorsTexture,w));let cs=O.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&kt.update(N,O,sn),(Ze||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,pe.setValue(b,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pn.envMap.value=Tt,pn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),Ze&&(pe.setValue(b,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&cd(pn,ls),ot&&B.fog===!0&&ft.refreshFogUniforms(pn,ot),ft.refreshMaterialUniforms(pn,B,G,st,f.state.transmissionRenderTarget[C.id]),Xi.upload(b,Ql(Lt),pn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xi.upload(b,Ql(Lt),pn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(b,"center",N.center),pe.setValue(b,"modelViewMatrix",N.modelViewMatrix),pe.setValue(b,"normalMatrix",N.normalMatrix),pe.setValue(b,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let je=B.uniformsGroups;for(let On=0,Bn=je.length;On<Bn;On++){let ec=je[On];D.update(ec,sn),D.bind(ec,sn)}}return sn}function cd(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function hd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,U,O){xt.get(C.texture).__webglTexture=U,xt.get(C.depthTexture).__webglTexture=O;let B=xt.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){let O=xt.get(C);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,O=0){P=C,S=U,T=O;let B=!0,N=null,ot=!1,mt=!1;if(C){let Tt=xt.get(C);if(Tt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Tt.__hasExternalTextures)w.rebindTextures(C,xt.get(C.texture).__webglTexture,xt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Rt=C.depthTexture;if(Tt.__boundDepthTexture!==Rt){if(Rt!==null&&xt.has(Rt)&&(C.width!==Rt.image.width||C.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}let Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let Vt=xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][O]:N=Vt[U],ot=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?N=xt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[O]:N=Vt,R.copy(C.viewport),z.copy(C.scissor),k=C.scissorTest}else R.copy(Mt).multiplyScalar(G).floor(),z.copy(zt).multiplyScalar(G).floor(),k=ee;if(ht.bindFramebuffer(b.FRAMEBUFFER,N)&&B&&ht.drawBuffers(C,N),ht.viewport(R),ht.scissor(z),ht.setScissorTest(k),ot){let Tt=xt.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,O)}else if(mt){let Tt=xt.get(C.texture),Bt=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Tt.__webglTexture,O||0,Bt)}I=-1},this.readRenderTargetPixels=function(C,U,O,B,N,ot,mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){ht.bindFramebuffer(b.FRAMEBUFFER,Et);try{let Tt=C.texture,Bt=Tt.format,Vt=Tt.type;if(!vt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-B&&O>=0&&O<=C.height-N&&b.readPixels(U,O,B,N,Wt.convert(Bt),Wt.convert(Vt),ot)}finally{let Tt=P!==null?xt.get(P).__webglFramebuffer:null;ht.bindFramebuffer(b.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(C,U,O,B,N,ot,mt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){let Tt=C.texture,Bt=Tt.format,Vt=Tt.type;if(!vt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-B&&O>=0&&O<=C.height-N){ht.bindFramebuffer(b.FRAMEBUFFER,Et);let Rt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Rt),b.bufferData(b.PIXEL_PACK_BUFFER,ot.byteLength,b.STREAM_READ),b.readPixels(U,O,B,N,Wt.convert(Bt),Wt.convert(Vt),0);let jt=P!==null?xt.get(P).__webglFramebuffer:null;ht.bindFramebuffer(b.FRAMEBUFFER,jt);let ue=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await fu(b,ue,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Rt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ot),b.deleteBuffer(Rt),b.deleteSync(ue),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,O=0){C.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-O),N=Math.floor(C.image.width*B),ot=Math.floor(C.image.height*B),mt=U!==null?U.x:0,Et=U!==null?U.y:0;w.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,mt,Et,N,ot),ht.unbindTexture()},this.copyTextureToTexture=function(C,U,O=null,B=null,N=0){C.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let ot,mt,Et,Tt,Bt,Vt,Rt,jt,ue,fe=C.isCompressedTexture?C.mipmaps[N]:C.image;O!==null?(ot=O.max.x-O.min.x,mt=O.max.y-O.min.y,Et=O.isBox3?O.max.z-O.min.z:1,Tt=O.min.x,Bt=O.min.y,Vt=O.isBox3?O.min.z:0):(ot=fe.width,mt=fe.height,Et=fe.depth||1,Tt=0,Bt=0,Vt=0),B!==null?(Rt=B.x,jt=B.y,ue=B.z):(Rt=0,jt=0,ue=0);let qe=Wt.convert(U.format),ne=Wt.convert(U.type),Lt;U.isData3DTexture?(w.setTexture3D(U,0),Lt=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Lt=b.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Lt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);let Mn=b.getParameter(b.UNPACK_ROW_LENGTH),ie=b.getParameter(b.UNPACK_IMAGE_HEIGHT),sn=b.getParameter(b.UNPACK_SKIP_PIXELS),vi=b.getParameter(b.UNPACK_SKIP_ROWS),Ze=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,fe.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,fe.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Tt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Bt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Vt);let ls=C.isDataArrayTexture||C.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let pn=xt.get(C),cs=xt.get(U),je=xt.get(pn.__renderTarget),On=xt.get(cs.__renderTarget);ht.bindFramebuffer(b.READ_FRAMEBUFFER,je.__webglFramebuffer),ht.bindFramebuffer(b.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Bn=0;Bn<Et;Bn++)ls&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.get(C).__webglTexture,N,Vt+Bn),C.isDepthTexture?(pe&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,N,ue+Bn),b.blitFramebuffer(Tt,Bt,ot,mt,Rt,jt,ot,mt,b.DEPTH_BUFFER_BIT,b.NEAREST)):pe?b.copyTexSubImage3D(Lt,N,Rt,jt,ue+Bn,Tt,Bt,ot,mt):b.copyTexSubImage2D(Lt,N,Rt,jt,ue+Bn,Tt,Bt,ot,mt);ht.bindFramebuffer(b.READ_FRAMEBUFFER,null),ht.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else pe?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Lt,N,Rt,jt,ue,ot,mt,Et,qe,ne,fe.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Lt,N,Rt,jt,ue,ot,mt,Et,qe,fe.data):b.texSubImage3D(Lt,N,Rt,jt,ue,ot,mt,Et,qe,ne,fe):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,Rt,jt,ot,mt,qe,ne,fe.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,Rt,jt,fe.width,fe.height,qe,fe.data):b.texSubImage2D(b.TEXTURE_2D,N,Rt,jt,ot,mt,qe,ne,fe);b.pixelStorei(b.UNPACK_ROW_LENGTH,Mn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ie),b.pixelStorei(b.UNPACK_SKIP_PIXELS,sn),b.pixelStorei(b.UNPACK_SKIP_ROWS,vi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ze),N===0&&U.generateMipmaps&&b.generateMipmap(Lt),ht.unbindTexture()},this.copyTextureToTexture3D=function(C,U,O=null,B=null,N=0){return C.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,C=arguments[2],U=arguments[3],N=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,O,B,N)},this.initRenderTarget=function(C){xt.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ht.unbindTexture()},this.resetState=function(){S=0,T=0,P=null,ht.reset(),de.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var ts=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},tl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},He=new E,Fr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},es=class extends ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fi,ps=new E,ki=new E,Oi=new E,Bi=new nt,gs=new nt,Bh=new ge,ur=new E,ms=new E,fr=new E,nh=new nt,Xa=new nt,ih=new nt,Ps=class extends Be{constructor(t=new es){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tl(e,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Fr(n,3,0,!1)),Fi.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=Fi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Oi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;pr(ur.set(-.5,-.5,0),Oi,a,ki,s,r),pr(ms.set(.5,-.5,0),Oi,a,ki,s,r),pr(fr.set(.5,.5,0),Oi,a,ki,s,r),nh.set(0,0),Xa.set(1,0),ih.set(1,1);let o=t.ray.intersectTriangle(ur,ms,fr,!1,ps);if(o===null&&(pr(ms.set(-.5,.5,0),Oi,a,ki,s,r),Xa.set(0,1),o=t.ray.intersectTriangle(ur,fr,ms,!1,ps),o===null))return;let l=t.ray.origin.distanceTo(ps);l<t.near||l>t.far||e.push({distance:l,point:ps.clone(),uv:Yn.getInterpolation(ps,ur,ms,fr,nh,Xa,ih,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pr(i,t,e,n,s,r){Bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gs.x=r*Bi.x-s*Bi.y,gs.y=s*Bi.x+r*Bi.y):gs.copy(Bi),i.copy(t),i.x+=gs.x,i.y+=gs.y,i.applyMatrix4(Bh)}var ei=class extends Ye{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new nt:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new E,s=[],r=[],a=[],o=new E,l=new ge;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(De(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(De(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ls=class extends tn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends Ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var gr=new E,qa=new Pl,Ya=new Pl,Za=new Pl,ns=class extends tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gr.subVectors(s[0],s[1]).add(s[0]),c=gr);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),qa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),Ya.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Za.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ya.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Za.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(qa.calc(l),Ya.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function hm(i,t){let e=1-i;return e*e*t}function dm(i,t){return 2*(1-i)*i*t}function um(i,t){return i*i*t}function Is(i,t,e,n){return hm(i,t)+dm(i,e)+um(i,n)}function fm(i,t){let e=1-i;return e*e*e*t}function pm(i,t){let e=1-i;return 3*e*e*i*t}function gm(i,t){return 3*(1-i)*i*i*t}function mm(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return fm(i,t)+pm(i,e)+gm(i,n)+mm(i,s)}var kr=class extends tn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nl=class extends tn{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y),Ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Or=class extends tn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends tn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends tn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends tn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y),Is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(sh(o,l.x,c.x,h.x,d.x),sh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Vr=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:ns,CubicBezierCurve:kr,CubicBezierCurve3:nl,EllipseCurve:Ls,LineCurve:Or,LineCurve3:il,QuadraticBezierCurve:Br,QuadraticBezierCurve3:zr,SplineCurve:Hr}),sl=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vr[s.type]().fromJSON(s))}return this}},Gr=class extends sl{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Or(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Br(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new kr(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ds=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new E,h=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},We=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],m=0,y=[],g=n/2,f=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(p,2));function M(){let _=new E,L=new E,S=0,T=(e-t)/n;for(let P=0;P<=r;P++){let I=[],x=P/r,R=x*(e-t)+t;for(let z=0;z<=s;z++){let k=z/s,H=k*l+o,J=Math.sin(H),V=Math.cos(H);L.x=R*J,L.y=-x*n+g,L.z=R*V,d.push(L.x,L.y,L.z),_.set(J,T,V).normalize(),u.push(_.x,_.y,_.z),p.push(k,1-x),I.push(m++)}y.push(I)}for(let P=0;P<s;P++)for(let I=0;I<r;I++){let x=y[I][P],R=y[I+1][P],z=y[I+1][P+1],k=y[I][P+1];(t>0||I!==0)&&(h.push(x,R,k),S+=3),(e>0||I!==r-1)&&(h.push(R,z,k),S+=3)}c.addGroup(f,S,0),f+=S}function v(_){let L=m,S=new nt,T=new E,P=0,I=_===!0?t:e,x=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*x,0),u.push(0,x,0),p.push(.5,.5),m++;let R=m;for(let z=0;z<=s;z++){let H=z/s*l+o,J=Math.cos(H),V=Math.sin(H);T.x=I*V,T.y=g*x,T.z=I*J,d.push(T.x,T.y,T.z),u.push(0,x,0),S.x=J*.5+.5,S.y=V*.5*x+.5,p.push(S.x,S.y),m++}for(let z=0;z<s;z++){let k=L+z,H=R+z;_===!0?h.push(H,H+1,k):h.push(H+1,H,k),P+=3}c.addGroup(f,P,_===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},en=class i extends We{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wr=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new E,_=new E,L=new E;for(let S=0;S<e.length;S+=3)p(e[S+0],v),p(e[S+1],_),p(e[S+2],L),l(v,_,L,M)}function l(M,v,_,L){let S=L+1,T=[];for(let P=0;P<=S;P++){T[P]=[];let I=M.clone().lerp(_,P/S),x=v.clone().lerp(_,P/S),R=S-P;for(let z=0;z<=R;z++)z===0&&P===S?T[P][z]=I:T[P][z]=I.clone().lerp(x,z/R)}for(let P=0;P<S;P++)for(let I=0;I<2*(S-P)-1;I++){let x=Math.floor(I/2);I%2===0?(u(T[P][x+1]),u(T[P+1][x]),u(T[P][x])):(u(T[P][x+1]),u(T[P+1][x+1]),u(T[P+1][x]))}}function c(M){let v=new E;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let M=new E;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let _=g(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;a.push(_,1-L)}m(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],_=a[M+2],L=a[M+4],S=Math.max(v,_,L),T=Math.min(v,_,L);S>.9&&T<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,v){let _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){let M=new E,v=new E,_=new E,L=new E,S=new nt,T=new nt,P=new nt;for(let I=0,x=0;I<r.length;I+=9,x+=6){M.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),S.set(a[x+0],a[x+1]),T.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),L.copy(M).add(v).add(_).divideScalar(3);let R=g(L);y(S,x+0,M,R),y(T,x+2,v,R),y(P,x+4,_,R)}}function y(M,v,_,L){L<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Xr=class i extends Wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var dn=class extends Gr{constructor(t){super(t),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Gr().fromJSON(s))}return this}},_m={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=zh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,p;if(n&&(r=Cm(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)d=i[m],u=i[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Us(r,a,e,o,l,p,0),a}};function zh(i,t,e,n,s){let r,a;if(s===Dm(i,t,e,n)>0)for(r=t;r<e;r+=n)a=rh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=rh(r,i[r],i[r+1],a);return a&&ra(a,a.next)&&(Fs(a),a=a.next),a}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ra(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Sm(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?xm(i,n,s,r):Am(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ym(_i(i),t,e),Us(i,t,e,n,s,r,2)):a===2&&vm(i,t,e,n,s,r):Us(_i(i),t,e,n,s,r,1);break}}}function Am(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&Hi(s,o,r,l,a,c,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ae(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,f=rl(p,m,t,e,n),M=rl(y,g,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=f&&_&&_.z<=M;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Hi(o,h,l,d,c,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Hi(o,h,l,d,c,u,_.x,_.y)&&Ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Hi(o,h,l,d,c,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Hi(o,h,l,d,c,u,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ym(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ra(s,r)&&Hh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function vm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rm(a,o)){let l=Vh(a,o);a=_i(a,a.next),l=_i(l,l.next),Us(a,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Cm(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=zh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Tm(c));for(s.sort(Im),r=0;r<s.length;r++)e=Mm(s[r],e);return e}function Im(i,t){return i.x-t.x}function Mm(i,t){let e=wm(i,t);if(!e)return t;let n=Vh(e,i);return _i(n,n.next),_i(e,e.next)}function wm(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Hi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Ns(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&bm(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function bm(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function Sm(i,t,e,n){let s=i;do s.z===0&&(s.z=rl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Em(s)}function Em(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function rl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pm(i,t)&&(Ns(i,t)&&Ns(t,i)&&Lm(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||ra(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ra(i,t){return i.x===t.x&&i.y===t.y}function Hh(i,t,e,n){let s=_r(Ae(i,t,e)),r=_r(Ae(i,t,n)),a=_r(Ae(e,n,i)),o=_r(Ae(e,n,t));return!!(s!==r&&a!==o||s===0&&mr(i,e,t)||r===0&&mr(i,n,t)||a===0&&mr(e,i,n)||o===0&&mr(e,t,n))}function mr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function Pm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Lm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vh(i,t){let e=new al(i.i,i.x,i.y),n=new al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rh(i,t,e,n){let s=new al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ah(t),oh(n,t);let a=t.length;e.forEach(ah);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,oh(n,e[l]);let o=_m.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ah(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function oh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ni=class i extends ze{constructor(t=new dn([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Um,v,_=!1,L,S,T,P;f&&(v=f.getSpacedPoints(h),_=!0,u=!1,L=f.computeFrenetFrames(h,!1),S=new E,T=new E,P=new E),u||(g=0,p=0,m=0,y=0);let I=o.extractPoints(c),x=I.shape,R=I.holes;if(!Jn.isClockWise(x)){x=x.reverse();for(let j=0,rt=R.length;j<rt;j++){let b=R[j];Jn.isClockWise(b)&&(R[j]=b.reverse())}}let k=Jn.triangulateShape(x,R),H=x;for(let j=0,rt=R.length;j<rt;j++){let b=R[j];x=x.concat(b)}function J(j,rt,b){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,b)}let V=x.length,st=k.length;function G(j,rt,b){let Pt,tt,vt,ht=j.x-rt.x,Ut=j.y-rt.y,xt=b.x-j.x,w=b.y-j.y,A=ht*ht+Ut*Ut,F=ht*w-Ut*xt;if(Math.abs(F)>Number.EPSILON){let Y=Math.sqrt(A),Q=Math.sqrt(xt*xt+w*w),Z=rt.x-Ut/Y,bt=rt.y+ht/Y,ft=b.x-w/Q,yt=b.y+xt/Q,Yt=((ft-Z)*w-(yt-bt)*xt)/(ht*w-Ut*xt);Pt=Z+ht*Yt-j.x,tt=bt+Ut*Yt-j.y;let it=Pt*Pt+tt*tt;if(it<=2)return new nt(Pt,tt);vt=Math.sqrt(it/2)}else{let Y=!1;ht>Number.EPSILON?xt>Number.EPSILON&&(Y=!0):ht<-Number.EPSILON?xt<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(w)&&(Y=!0),Y?(Pt=-Ut,tt=ht,vt=Math.sqrt(A)):(Pt=ht,tt=Ut,vt=Math.sqrt(A/2))}return new nt(Pt/vt,tt/vt)}let dt=[];for(let j=0,rt=H.length,b=rt-1,Pt=j+1;j<rt;j++,b++,Pt++)b===rt&&(b=0),Pt===rt&&(Pt=0),dt[j]=G(H[j],H[b],H[Pt]);let At=[],Mt,zt=dt.concat();for(let j=0,rt=R.length;j<rt;j++){let b=R[j];Mt=[];for(let Pt=0,tt=b.length,vt=tt-1,ht=Pt+1;Pt<tt;Pt++,vt++,ht++)vt===tt&&(vt=0),ht===tt&&(ht=0),Mt[Pt]=G(b[Pt],b[vt],b[ht]);At.push(Mt),zt=zt.concat(Mt)}for(let j=0;j<g;j++){let rt=j/g,b=p*Math.cos(rt*Math.PI/2),Pt=m*Math.sin(rt*Math.PI/2)+y;for(let tt=0,vt=H.length;tt<vt;tt++){let ht=J(H[tt],dt[tt],Pt);ct(ht.x,ht.y,-b)}for(let tt=0,vt=R.length;tt<vt;tt++){let ht=R[tt];Mt=At[tt];for(let Ut=0,xt=ht.length;Ut<xt;Ut++){let w=J(ht[Ut],Mt[Ut],Pt);ct(w.x,w.y,-b)}}}let ee=m+y;for(let j=0;j<V;j++){let rt=u?J(x[j],zt[j],ee):x[j];_?(T.copy(L.normals[0]).multiplyScalar(rt.x),S.copy(L.binormals[0]).multiplyScalar(rt.y),P.copy(v[0]).add(T).add(S),ct(P.x,P.y,P.z)):ct(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<V;rt++){let b=u?J(x[rt],zt[rt],ee):x[rt];_?(T.copy(L.normals[j]).multiplyScalar(b.x),S.copy(L.binormals[j]).multiplyScalar(b.y),P.copy(v[j]).add(T).add(S),ct(P.x,P.y,P.z)):ct(b.x,b.y,d/h*j)}for(let j=g-1;j>=0;j--){let rt=j/g,b=p*Math.cos(rt*Math.PI/2),Pt=m*Math.sin(rt*Math.PI/2)+y;for(let tt=0,vt=H.length;tt<vt;tt++){let ht=J(H[tt],dt[tt],Pt);ct(ht.x,ht.y,d+b)}for(let tt=0,vt=R.length;tt<vt;tt++){let ht=R[tt];Mt=At[tt];for(let Ut=0,xt=ht.length;Ut<xt;Ut++){let w=J(ht[Ut],Mt[Ut],Pt);_?ct(w.x,w.y+v[h-1].y,v[h-1].x+b):ct(w.x,w.y,d+b)}}}$(),at();function $(){let j=s.length/3;if(u){let rt=0,b=V*rt;for(let Pt=0;Pt<st;Pt++){let tt=k[Pt];Dt(tt[2]+b,tt[1]+b,tt[0]+b)}rt=h+g*2,b=V*rt;for(let Pt=0;Pt<st;Pt++){let tt=k[Pt];Dt(tt[0]+b,tt[1]+b,tt[2]+b)}}else{for(let rt=0;rt<st;rt++){let b=k[rt];Dt(b[2],b[1],b[0])}for(let rt=0;rt<st;rt++){let b=k[rt];Dt(b[0]+V*h,b[1]+V*h,b[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function at(){let j=s.length/3,rt=0;wt(H,rt),rt+=H.length;for(let b=0,Pt=R.length;b<Pt;b++){let tt=R[b];wt(tt,rt),rt+=tt.length}n.addGroup(j,s.length/3-j,1)}function wt(j,rt){let b=j.length;for(;--b>=0;){let Pt=b,tt=b-1;tt<0&&(tt=j.length-1);for(let vt=0,ht=h+g*2;vt<ht;vt++){let Ut=V*vt,xt=V*(vt+1),w=rt+Pt+Ut,A=rt+tt+Ut,F=rt+tt+xt,Y=rt+Pt+xt;Ot(w,A,F,Y)}}}function ct(j,rt,b){l.push(j),l.push(rt),l.push(b)}function Dt(j,rt,b){Ft(j),Ft(rt),Ft(b);let Pt=s.length/3,tt=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);Jt(tt[0]),Jt(tt[1]),Jt(tt[2])}function Ot(j,rt,b,Pt){Ft(j),Ft(rt),Ft(Pt),Ft(rt),Ft(b),Ft(Pt);let tt=s.length/3,vt=M.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Jt(vt[0]),Jt(vt[1]),Jt(vt[3]),Jt(vt[1]),Jt(vt[2]),Jt(vt[3])}function Ft(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Jt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vr[s.type]().fromJSON(s)),new i(n,t.options)}},Um={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-d),new nt(u,1-m),new nt(y,1-f)]:[new nt(o,1-l),new nt(h,1-d),new nt(p,1-m),new nt(g,1-f)]}};function Nm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qr=class i extends Wr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Yr=class i extends ze{constructor(t=new dn([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),p=u.shape,m=u.holes;Jn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let M=m[g];Jn.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=Jn.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let M=m[g];p=p.concat(M)}for(let g=0,f=p.length;g<f;g++){let M=p[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,f=y.length;g<f;g++){let M=y[g],v=M[0]+d,_=M[1]+d,L=M[2]+d;n.push(v,_,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Fm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Fm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Se=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new E,u=new E,p=[],m=[],y=[],g=[];for(let f=0;f<=n;f++){let M=[],v=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let S=L/e;d.x=-t*Math.cos(s+S*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(s+S*r)*Math.sin(a+v*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(S+_,1-v),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let v=h[f][M+1],_=h[f][M],L=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&p.push(v,_,S),(f!==n-1||l<Math.PI)&&p.push(_,L,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pe=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let y=m/s*r,g=p/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let y=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,M=(s+1)*p+m;a.push(y,g,M),a.push(g,f,M)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ks=class i extends ze{constructor(t=new zr(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new nt,h=new E,d=[],u=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(p,2));function y(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),M(),f()}function g(v){h=t.getPointAt(v/e,h);let _=a.normals[v],L=a.binormals[v];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,P=Math.sin(T),I=-Math.cos(T);l.x=I*_.x+P*L.x,l.y=I*_.y+P*L.y,l.z=I*_.z+P*L.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let L=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),T=(s+1)*v+_,P=(s+1)*(v-1)+_;m.push(L,S,P),m.push(S,T,P)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Vr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var te=class extends ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ar(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:r=t,o=2*e-n;break;case lc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oc:a=t,l=2*n-e;break;case lc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,f=-u*g+2*u*y-u*m,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,v=(-1-p)*g+(1.5+p)*y+.5*m,_=p*g-p*y;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+M*a[c+L]+v*a[l+L]+_*a[d+L];return r}},ll=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},cl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Fo:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&km(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let m=0;m!==n;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Fo;var Ai=class extends un{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Mr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends un{};hl.prototype.ValueTypeName="color";var dl=class extends un{};dl.prototype.ValueTypeName="number";var ul=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zr=class extends un{InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends un{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Mr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends un{};fl.prototype.ValueTypeName="vector";var lh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},pl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Om=new pl,Os=class{constructor(t){this.manager=t!==void 0?t:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Os.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=class extends Os{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=lh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ss("img");function l(){h(),lh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var $r=class extends Os{constructor(t){super(t)}load(t,e,n,s){let r=new Ye,a=new gl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Bs=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Jr=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},$a=new ge,ch=new E,hh=new E,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var dh=new ge,_s=new E,Ja=new E,ml=class extends Kr{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),Ja.copy(n.position),Ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ja),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}},jr=class extends Bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_l=class extends Kr{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ta=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function uh(){return performance.now()}var Ll="\\[\\]\\.:\\/",Bm=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",zm="[^"+Ll.replace("\\.","")+"]",Hm=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Vm=/(WCOD+)?/.source.replace("WCOD",zm),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Xm=new RegExp("^"+Hm+Vm+Gm+Wm+"$"),qm=["material","materials","bones","map"],Al=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(t){let e=Xm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Al;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);var fh=new ge,ea=class{constructor(t,e,n=0,s=1/0){this.ray=new Er(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fh),this}intersectObject(t,e=!0,n=[]){return xl(t,this,n,e),n.sort(ph),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xl(t[s],this,n,e);return n.sort(ph),n}};function ph(i,t){return i.distance-t.distance}function xl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);var Ym="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ue=null,aa=!1;function Gh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Ul(){Gh(),aa=!0;try{if(Ue||(Ue=document.createElement("audio"),Ue.src=Ym,Ue.loop=!0,Ue.preload="auto",Ue.setAttribute("playsinline",""),Ue.setAttribute("webkit-playsinline",""),Ue.setAttribute("x-webkit-airplay","deny"),Ue.volume=.01,Ue.addEventListener("pause",()=>{aa&&!document.hidden&&setTimeout(()=>aa&&Ue.paused&&Ue.play().catch(()=>{}),300)})),Ue.paused){let i=Ue.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Nl(){aa=!1;try{Ue&&!Ue.paused&&Ue.pause()}catch{}}function Wh(i,t){Gh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var he=i=>440*Math.pow(2,(i-69)/12),Fl={tempo:112,chords:[[41,[65,69,72]],[46,[65,70,74]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,70]],[41,[65,69,72]]],melody:[[0,0,77],[0,2,81],[0,4,84],[0,6,81],[1,0,82],[1,3,79],[1,4,77],[2,0,79],[2,2,76],[2,4,72],[2,6,76],[3,0,77],[3,4,72],[4,0,74],[4,2,77],[4,4,81],[4,6,79],[5,0,77],[5,2,74],[5,4,70],[6,0,72],[6,2,76],[6,4,79],[6,6,82],[7,0,81],[7,4,77]],lead:"marimba",shaker:!0},oa=class{constructor(t=Fl){this.ctx=null,this.muted=!1,this.mode="off",this.theme=t}unlock(){if(Ul(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Wh(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.34,this.musicBus.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.3;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.14,this.musicBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Nl(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Ul(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){if(this.mode===t&&!e||(this.mode=t,!this.ctx))return;this.step=0,this.nextTime=this.ctx.currentTime+.12;let n=this.musicOnly?1.6:1,s=(t==="calm"?.18:t==="menu"?.28:.34)*n;this.musicBus.gain.setTargetAtTime(s,this.ctx.currentTime,.3)}duck(t=2){if(!this.ctx)return;let e=this.ctx.currentTime,n=this.mode==="calm"?.18:.34;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(.035,e,.06),this.musicBus.gain.setTargetAtTime(n,e+t,.4),this.sfx.gain.cancelScheduledValues(e),this.sfx.gain.setTargetAtTime(.45,e+.15,.08),this.sfx.gain.setTargetAtTime(.85,e+t,.3)}dispose(){clearInterval(this._timer),Nl(),this.ctx&&this.ctx.close(),this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let d=c.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),l&&d.frequency.exponentialRampToValueAtTime(l,t+e),d.Q.value=a;let u=c.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),u.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(u).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}lead(t,e,n,s=this.musicBus){let r=he(t);switch(this.theme.lead){case"bell":this.tone("sine",r,e,.9,n,s,.002),this.tone("sine",r*2.76,e,.25,n*.25,s,.002);break;case"pluck":this.tone("triangle",r,e,.28,n,s,.002),this.tone("sine",r*2,e,.12,n*.3,s,.002);break;case"flute":this.tone("sine",r,e,.45,n,s,.05),this.tone("triangle",r*2,e,.3,n*.08,s,.06);break;default:this.tone("sine",r,e,.35,n,s,.003),this.tone("sine",r*4,e,.05,n*.3,s,.002)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=this.theme,n=t.currentTime+.2,s=60/(this.mode==="menu"?e.tempo*.9:e.tempo)/2,r=e.chords.length,a=this.mode==="play";for(;this.nextTime<n;){let o=this.nextTime,l=this.step%(r*8),c=Math.floor(l/8),h=l%8,[d,u]=e.chords[c];(h===0||h===4)&&this.tone("triangle",he(d-(h===4?5:0)),o,s*1.6,.14,this.musicBus,.01),(h===2||h===6)&&u.forEach(m=>this.tone("sine",he(m-12),o,s*1.2,.022,this.musicBus,.004));let p=this.energy||0;if(this.suspense){let m=[0,4,7,4,9,7,4,2];h%2===0?this.tone("triangle",he(d+24+m[(this.step>>1)%8]),o,s*.55,.055,this.musicBus,.004):this.noise(o,.02,.03,"highpass",6500,1,this.musicBus),h===6&&this.tone("sine",he(d+31+c%4*2),o,s*1.6,.03,this.musicBus,.01)}else for(let[m,y,g]of e.melody)m===c&&y===h&&this.lead(g,o,(a?.075:.06)*(.65+.7*p));p>=.4&&h%2===0&&this.lead(u[h/2%u.length]+12,o+s*.5,.03*p),p>=.8&&(h===3||h===7)&&this.lead(u[2]+24,o,.025),e.shaker&&a&&h%2===1&&this.noise(o,.04,.012,"highpass",8e3,1,this.musicBus),this.step++,this.nextTime+=s}}setSuspense(t){this.suspense=!!t}play(t,e){if(!this.on||this.musicOnly)return;let n=this.ctx.currentTime+.005;switch(t){case"note":this.lead(e||79,n,.09,this.sfx);break;case"applause":{for(let r=0;r<150;r++){let a=n+Math.pow(Math.random(),1.5)*2.5;this.noise(a,.02+Math.random()*.025,.2+Math.random()*.14,"bandpass",1300+Math.random()*3e3,1.3,this.sfx),r%3===0&&this.noise(a,.05,.12,"lowpass",900,.8,this.sfx)}break}case"crowd":{let s=this.ctx;for(let r=0;r<6;r++){let a=n+r*.045+Math.random()*.08,o=s.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(250+r*28,a),o.frequency.exponentialRampToValueAtTime(430+r*36,a+.5);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=850,l.Q.value=4;let c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=1300,c.Q.value=5;let h=s.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(.07,a+.07),h.gain.exponentialRampToValueAtTime(1e-4,a+.75),o.connect(l),o.connect(c),l.connect(h),c.connect(h),h.connect(this.sfx),o.start(a),o.stop(a+.8)}break}case"fanfare":[72,76,79,84,88].forEach((s,r)=>{this.tone("triangle",he(s),n+r*.075,.38,.085),this.tone("square",he(s),n+r*.075,.18,.018),this.tone("sine",he(s)*2,n+r*.075,.3,.03)});break;case"yay":[72,76,79,84,88,91].forEach((s,r)=>{this.tone("triangle",he(s),n+r*.06,.4,.05),this.tone("sine",he(s)*2,n+r*.06,.2,.02)});break;case"tap":this.tone("sine",880,n,.06,.05);break;case"step":this.slide("sine",e?210:180,95,n,.11,.2),this.noise(n,.05,.12,"lowpass",1800,1),this.tone("triangle",e?900:780,n+.005,.045,.07);break;case"bump":this.slide("sine",260,150,n,.18,.13),this.slide("sine",320,200,n+.06,.14,.05);break;case"right":[[84,0],[88,.09],[91,.18]].forEach(([s,r])=>{this.tone("sine",he(s),n+r,.45,.08),this.tone("sine",he(s)*3,n+r,.08,.012)});break;case"wrong":this.tone("triangle",he(67),n,.18,.06),this.tone("triangle",he(64),n+.14,.26,.05);break;case"pop":this.slide("sine",900,300,n,.08,.12),this.noise(n,.05,.06,"bandpass",2500,2);break;case"sparkle":for(let s=0;s<6;s++)this.tone("sine",he(90+s*5%12),n+s*.045,.25,.03);break;case"star":[88,91,96,100].forEach((s,r)=>this.tone("sine",he(s),n+r*.07,.5,.05));break;case"whoosh":this.noise(n,.5,.09,"bandpass",500,.8,this.sfx,2600);break;case"page":this.noise(n,.25,.06,"bandpass",1800,.6,this.sfx,900);break;case"drop":this.tone("sine",520,n,.08,.1),this.tone("sine",780,n+.05,.12,.06),this.noise(n,.05,.04,"lowpass",900,1);break;case"splash":this.noise(n,.6,.12,"lowpass",3e3,.7,this.sfx,500);for(let s=0;s<4;s++)this.tone("sine",900+Math.random()*900,n+.05+s*.06,.08,.025);break;case"nibble":for(let s=0;s<5;s++)this.noise(n+s*.09,.05,.08,"bandpass",1200+s%2*500,2);break;case"squeak":this.slide("sine",1800,2600,n,.08,.05),this.slide("sine",2600,2e3,n+.08,.07,.04);break;case"cheer":[76,79,84,88].forEach((s,r)=>{this.tone("sine",he(s),n+r*.07,.35,.05),this.tone("sine",he(s)*2,n+r*.07,.12,.012)});break;case"hmm":this.tone("sine",he(67),n,.25,.05),this.tone("sine",he(64),n+.15,.3,.045);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.9]].forEach(([s,r])=>{this.tone("triangle",he(s),n+r,.5,.08),this.tone("sine",he(s)*2,n+r,.2,.02)});for(let s=0;s<10;s++)this.noise(n+.3+s*.05,.05,.025,"highpass",7500,1);break;case"roundWin":[[79,0],[84,.1],[88,.2],[91,.32]].forEach(([s,r])=>this.tone("sine",he(s),n+r,.4,.07));break;default:}}voice(t,e,n){t.forEach((s,r)=>{let a=e+r*.11;this.slide("sine",he(s)*.94,he(s),a,.12,n),this.slide("square",he(s)*.94,he(s),a,.1,n*.12)})}};function qh(i){return String(i).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu,"").replace(/\s+/g," ").trim()}function Xh(i,t){let e=`${t==="en"?"en":"ar"}|${qh(i)}`,n=2166136261;for(let s of new TextEncoder().encode(e))n^=s,n=Math.imul(n,16777619)>>>0;return n.toString(16).padStart(8,"0")}var Zm="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",la=class{constructor(t,e,n,s){if(this.dir=`${t}../learn_voice/`,this.lang=e==="en"?"en":"ar",this.fallback=n,this.onTalk=s||(()=>{}),this.queue=[],this.audio=null,this.muted=!1,this.el=null,this.tok=0,this.pending=null,this.unlocked=!1,typeof document!="undefined"&&document.addEventListener){let r=()=>this._gesture();for(let a of["pointerdown","touchend","click","keydown"])document.addEventListener(a,r,{capture:!0,passive:!0})}if(typeof document!="undefined"&&!window.__learnVoice&&!document.getElementById("learn-voice-manifest")){let r=document.createElement("script");r.id="learn-voice-manifest",r.src=`${this.dir}manifest.js`,r.onerror=()=>{window.__learnVoice=window.__learnVoice||{ar:[],en:[]}},document.head.append(r)}}_element(){return this.el||(this.el=new Audio,this.el.preload="auto"),this.el}_gesture(){let t=this._element();if(!this.unlocked&&!this.audio){this.unlocked=!0;try{t.src=Zm;let n=t.play();n&&n.catch&&n.catch(()=>{this.unlocked=!1})}catch{this.unlocked=!1}}let e=this.pending;e&&e.run===this.run&&!this.audio&&(this.pending=null,this._play(e.text))}has(t){let e=typeof window!="undefined"&&window.__learnVoice;return!!(e&&e[this.lang]&&e[this.lang].includes(Xh(t,this.lang)))}say(t,e,n){this.stop(),this.queue=(Array.isArray(t)?t:[t]).map(qh).filter(Boolean),this.i=0,this.onEach=e||null,this.onDone=n||null,this.run=(this.run||0)+1,!this.queue.length&&this.onDone?this.onDone():this._next()}_finish(){let t=this.onDone;this.onDone=null,t&&t()}_start(t){this.onEach&&this.onEach(t)}_next(t=0){if(this.muted){this._finish();return}if(!this.queue.length){this._finish();return}if(typeof window!="undefined"&&!window.__learnVoice&&t<8){let n=this.queue;setTimeout(()=>{this.queue===n&&this._next(t+1)},130);return}let e=this.queue.shift();if(!this.has(e)){let n=[e,...this.queue],s=n.join(this.lang==="en"?", ":"\u060C ");this.queue=[],this.onTalk(Math.min(8,1.2+s.length*.09)),this.fallback(s,this.lang);let r=Math.max(600,Math.min(1100,s.length*90/n.length)),a=this.run;n.forEach((o,l)=>setTimeout(()=>{a===this.run&&this._start(this.i+l)},l*r)),setTimeout(()=>{a===this.run&&this._finish()},n.length*r+300);return}this._start(this.i++),this._play(e)}_play(t){let e=this._element(),n=++this.tok;this.pending=null,this.audio=e,e.onloadedmetadata=()=>{this.tok===n&&this.onTalk((e.duration||2)+.3)},e.onended=()=>{this.tok===n&&this.audio===e&&(this.audio=null,this._next())},e.onerror=()=>{this.tok===n&&this.audio===e&&(this.audio=null,this.onTalk(Math.min(6,1.2+t.length*.09)),this.fallback(t,this.lang),this._next())},this.onTalk(2.5);try{e.src=`${this.dir}${this.lang}/${Xh(t,this.lang)}.mp3`}catch{}let s=this.run,r=e.play();r&&r.catch&&r.catch(a=>{this.tok!==n||a&&a.name==="AbortError"||(this.audio=null,this.pending={text:t,run:s})})}stop(){if(this.run=(this.run||0)+1,this.queue=[],this.onDone=null,this.tok++,this.pending=null,this.audio){try{this.audio.pause()}catch{}this.audio=null}}};function $t(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var $m={back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Let's play"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],newStar_m:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643! \u2B50","A new star for you! \u2B50"],newStar_f:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643\u064A! \u2B50","A new star for you! \u2B50"],doneAgain_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],doneAgain_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],great_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],great_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],greatSay_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],greatSay_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],newStarSay_m:["\u062E\u062F\u062A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"],newStarSay_f:["\u062E\u062F\u062A\u064A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"]};function Yh(i,t){let e=t.lang==="en"?"en":"ar",n=t.gender==="girl",s={...$m,...i};return{t:o=>{let l=`${o}_${n?"f":"m"}`,c=s[l]?l:o;return s[c]?s[c][e==="en"?1:0]:o},num:o=>e==="en"?String(o):String(o).replace(/[0-9]/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]),lang:e,girl:n}}var Jm=`
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
`,ca=class{constructor(t,e,n,s){this.el=t,this.cfg=e||{},this.post=n||(()=>{}),this.opts=s,this.T=Yh(s.text||{},this.cfg),this.age=Math.min(6,Math.max(2,Number(this.cfg.age)||5)),this.base=this.cfg.base||"./",this.done=!!this.cfg.done,this.save=this.cfg.save&&typeof this.cfg.save=="object"?{...this.cfg.save}:{},this.sound=new oa(s.theme),s.musicOnly&&(this.sound.musicOnly=!0,this.opts.voice=!1),this.voice=new la(this.base,this.T.lang,(r,a)=>this.post({type:"speak",text:r,lang:a}),r=>this.sound.duck(r)),this.sound.muted=!!this.save.muted,document.getElementById("lk-style")||document.head.append($t("style",{id:"lk-style"},Jm)),this.root=$t("div",{class:"lk-root",dir:this.T.lang==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=$t("div",{class:"lk-layer"}),this.root.append(this.layer);for(let r of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(r,()=>this.sound.unlock(),{capture:!0,passive:!0});this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=$t("button",{class:"lk-soundpill",onclick:r=>{r.stopPropagation(),this.sound.unlock()}},this.T.t("sound")),this.root.append(this.soundPill),this._tapped=!1,this.root.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t)}t(t){return this.T.t(t)}setGender(t){this.cfg.gender=t==="girl"?"girl":"boy",this.T=Yh(this.opts.text||{},this.cfg)}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.onResize&&this.onResize(this.w,this.h)}async fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,2500))])}catch{}}speak(t,e,n){if(!t||this.opts.voice===!1){n&&n();return}this.voice.muted=this.sound.muted,this.voice.say(t,e,n)}round(t,e,n){t&&this.post({type:"round",skill:t,correct:!!e,detail:n==null?null:String(n)})}complete(){this.post({type:"complete"})}saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}exit(){this.saveNow(),this.post({type:"exit"})}clear(){this.layer.replaceChildren(),this.bubble=null}backBtn(){return $t("button",{class:"lk-rbtn","aria-label":this.t("back"),onclick:t=>{t.stopPropagation(),this.exit()}},this.T.lang==="en"?"\u2190":"\u2192")}soundBtn(){let t=$t("button",{class:"lk-rbtn y","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}topBar(t,e){let n=$t("div",{class:"lk-dots","aria-hidden":"true"},Array.from({length:t},()=>$t("span",{},e)));return this.layer.append($t("div",{class:"lk-top"},this.backBtn(),n,this.soundBtn())),this.bubble=$t("div",{class:"lk-bubble",role:"status"}),this.layer.append(this.bubble),s=>[...n.children].forEach((r,a)=>r.classList.toggle("on",a<s))}say(t,e,n=3.2){this.bubble&&(this.bubble.textContent=t,this.bubble.classList.add("show"),clearTimeout(this._bt),n>0&&(this._bt=setTimeout(()=>this.bubble&&this.bubble.classList.remove("show"),n*1e3)),e&&this.speak(e===!0?t:e))}titleCard(t,e,n,s=!1){this.clear(),this.sound.setMode("menu"),this.layer.append($t("div",{class:"lk-top"},this.backBtn(),$t("span"),this.soundBtn()));let r=$t("button",{class:"lk-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),n()}},"\u25B6 ",this.t("play"));s?this.layer.append($t("div",{class:"lk-dim",style:"background:none"},r)):this.layer.append($t("div",{class:"lk-dim",style:"background:none"},$t("div",{class:"lk-card"},$t("div",{class:"lk-title"},t),$t("div",{class:"lk-big"},e),r))),setTimeout(()=>r.focus({preventScroll:!0}),50)}finishCard(t,e,n,s,r){this.complete();let a=!this.done;this.done=!0,this.sound.play("win"),setTimeout(()=>this.sound.play("star"),900),this.speak(a?`${this.t("greatSay")} ${this.t("newStarSay")}`:this.t("doneAgain"));let o=$t("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),n()}},"\u21BB ",this.t("again"));this.layer.append($t("div",{class:"lk-dim"},$t("div",{class:"lk-card"},$t("div",{class:"lk-title",style:"font-size:calc(var(--u)*8)"},t),$t("div",{class:"lk-starburst"},a?"\u2B50":e),$t("div",{class:"lk-msg"},this.t("great")),$t("div",{class:"lk-small",style:"font-size:calc(var(--u)*4.6);color:#6a3ad0"},a?this.t("newStar"):this.t("doneAgain")),s?$t("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),s()}},this.t("nextLevel")):null,o,r?$t("button",{class:"lk-btn p",onclick:()=>{this.sound.play("tap"),r()}},this.t("levelsBtn")):null,$t("button",{class:"lk-btn p",onclick:()=>this.exit()},this.t("back"))))),setTimeout(()=>o.focus({preventScroll:!0}),50)}pause(){this.sound.suspend(),this.voice&&this.voice.stop()}dispose(){this.voice&&this.voice.stop(),clearInterval(this._pill),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}};var ha=class extends ts{constructor(){super();let t=new ce;t.deleteAttribute("uv");let e=new te({side:Re}),n=new te,s=new jr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new lt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new lt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new lt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new lt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new lt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new lt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new lt(t,as(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let p=new lt(t,as(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let m=new lt(t,as(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new lt(t,as(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new lt(t,as(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let f=new lt(t,as(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function as(i){let t=new ve;return t.color.setScalar(i),t}function Zh(i,t,{env:e=.35,exposure:n=.95}={}){i.toneMapping=Cl,i.toneMappingExposure=n;try{let s=new Qi(i);t.environment=s.fromScene(new ha,.04).texture,t.environmentIntensity=e,s.dispose()}catch{}}function $h(i,{top:t="#5ab4ff",horizon:e="#d8f0ff"}={}){let n=document.createElement("canvas");n.width=8,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,t),r.addColorStop(.6,e),r.addColorStop(1,"#fff6e0"),s.fillStyle=r,s.fillRect(0,0,8,256);let a=new ei(n);a.colorSpace=ye;let o=new lt(new Se(90,24,16),new ve({map:a,side:Re,fog:!1,depthWrite:!1}));return o.renderOrder=-10,i.add(o),i.background=null,o}function Jh(i,t=7,{y:e=11,spread:n=36,z:s=-22}={}){let r=new le,a=new te({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.35});for(let o=0;o<t;o++){let l=new le,c=4+o%3;for(let h=0;h<c;h++){let d=new lt(new Se(1.2+h%3*.45,14,10),a);d.position.set((h-c/2)*1.5,Math.sin(h*1.7)*.4,h%2*.5),d.scale.y=.7,l.add(d)}l.position.set((o/t-.5)*n+Math.sin(o*3)*3,e+o%3*1.6,s-o%2*6),l.userData.v=.08+o%4*.03,r.add(l)}return i.add(r),r.userData.drift=o=>{for(let l of r.children)l.position.x+=l.userData.v*o,l.position.x>n/2+6&&(l.position.x=-n/2-6)},r}function Km(i=3,t=3844170){let e=new le,n=new lt(new We(.16*i/3,.26*i/3,i*.55,10),new te({color:8014370,roughness:1}));n.position.y=i*.27,n.castShadow=!0,e.add(n);let s=new te({color:t,roughness:.85});for(let[r,a,o,l]of[[0,i*.8,0,.62],[-.45,i*.66,.1,.45],[.45,i*.68,-.1,.46],[.05,i*1.02,.05,.42],[-.1,i*.7,.4,.4]]){let c=new lt(new Se(l*i/3*1.5,14,11),s);c.position.set(r*i/3*1.5,a,o*i/3*1.5),c.castShadow=!0,e.add(c)}return e.userData.sway={amp:.018+Math.random()*.012,ph:Math.random()*6.28,sp:.8+Math.random()*.5},e}function jm(i=.7,t=3840584){let e=new le,n=new te({color:t,roughness:.9});for(let[s,r,a,o]of[[0,.5,0,1],[-.7,.35,.1,.7],[.7,.38,-.05,.75]]){let l=new lt(new Se(i*o,12,9),n);l.position.set(s*i,r*i,a*i),l.castShadow=!0,e.add(l)}return e.userData.sway={amp:.03,ph:Math.random()*6.28,sp:1.1},e}function Qm(i=16738970,t=.55){let e=new le,n=new lt(new We(.02,.025,t,6),new te({color:3840570}));n.position.y=t/2,e.add(n);let s=new te({color:i,roughness:.6});for(let a=0;a<6;a++){let o=a/6*Math.PI*2,l=new lt(new Se(.08,8,6),s);l.position.set(Math.cos(o)*.11,t,Math.sin(o)*.11),l.scale.set(1,.5,1),e.add(l)}let r=new lt(new Se(.07,8,6),new te({color:16769114}));return r.position.y=t+.02,e.add(r),e.userData.sway={amp:.14,ph:Math.random()*6.28,sp:1.6+Math.random()*.8},e}function t_(i=.5){let t=new lt(new Xr(i,1),new te({color:10132132,roughness:.95,flatShading:!0}));return t.scale.set(1.2,.7,1),t.castShadow=!0,t}function Kh(i,t,e=0){let n=[16738970,16765498,16777215,12086015,16747066];t.forEach((s,r)=>{let a;s.t==="tree"?a=Km(s.s||3.4,s.c||[3844170,4896858,3119685][r%3]):s.t==="bush"?a=jm(s.s||.7):s.t==="rock"?a=t_(s.s||.5):a=Qm(n[r%n.length],s.s||.55),a.position.set(s.x,e,s.z),a.rotation.y=r*1.3,i.add(a)})}function Hs(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"));let r=new ei(s);return r.colorSpace=ye,n&&(r.wrapS=r.wrapT=$i,r.repeat.set(...n)),r}var vn=(i,t={})=>new te({color:i,roughness:.55,...t});var da=class{constructor(t,e={}){this.sh=t,this.o={bg:14676991,ground:14207144,fov:40,box:[5,3],dir:[0,.45,.9],target:[0,.8,0],...e},this.renderer=new Nr({antialias:!0,powerPreference:"high-performance"}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=ye,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vl,t.root.prepend(this.renderer.domElement),this.scene=new ts,Zh(this.renderer,this.scene),this.scene.background=new qt(this.o.bg),this.camera=new Oe(this.o.fov,1,.1,120),this.scene.add(new Jr(16777215,this.o.ground,1.6));let n=new Qr(16774368,2);n.position.set(-3,9,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:34}),this.scene.add(n),this.fx=[],this.picks=[],this.focus=null,this.mode="title",this.clock=new ta,this.frames=[],t.onResize=(s,r)=>this.resize(s,r),this.resize(t.w,t.h),this._bind(),this._loop()}add(...t){return this.scene.add(...t),t[0]}resize(t,e){var d;let n=this.renderer;n.setSize(t,e,!1),n.domElement.style.width="100%",n.domElement.style.height="100%";let s=this.camera;s.aspect=t/e,s.updateProjectionMatrix();let r=Math.tan(Rh.degToRad(s.fov/2)),a=this.o.wide&&s.aspect>=((d=this.o.wide.minAspect)!=null?d:1.45)?this.o.wide:null,o=a?a.box:this.o.box,l=Math.max(o[1]/r,o[0]/(r*s.aspect)),c=new E(...this.o.dir).normalize(),h=new E(...a?a.target:this.o.target);s.position.copy(h).addScaledVector(c,l),s.lookAt(h)}setPicks(t,e){this.picks=t,this.onPick=e,this.focus!=null&&this.focus>=t.length&&(this.focus=null)}_bind(){let t=this.sh.root;this._up=e=>{if(this.mode!=="wait"||!this.picks.length||e.target.closest("button")||e.target.closest(".lk-dim"))return;let n=t.getBoundingClientRect(),s=new nt((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new ea;r.setFromCamera(s,this.camera);let a=r.intersectObjects(this.picks.map(o=>o.hit),!1)[0];a&&this.onPick(a.object.userData.id)},t.addEventListener("pointerup",this._up),this._key=e=>{var s;if(this.mode!=="wait"||!this.picks.length)return;let n=this.picks.length;e.key==="ArrowLeft"||e.key==="ArrowRight"?(e.preventDefault(),this.focus=(((s=this.focus)!=null?s:e.key==="ArrowRight"?-1:0)+(e.key==="ArrowRight"?1:-1)+n)%n,this.sh.sound.play("tap")):(e.key==="Enter"||e.key===" ")&&this.focus!=null&&(e.preventDefault(),this.onPick(this.picks[this.focus].hit.userData.id))},window.addEventListener("keydown",this._key)}focusedId(){return this.focus!=null&&this.picks[this.focus]?this.picks[this.focus].hit.userData.id:null}sparkle(t,e=22){let n=[16734810,16763194,4892927,7002218,16777215];for(let s=0;s<e;s++){let r=new lt(new qr(.06),new ve({color:n[s%5]}));r.position.copy(t);let a=Math.random()*Math.PI*2;r.userData={v:new E(Math.cos(a)*1.5,2+Math.random()*2,Math.sin(a)*1.2),life:1},this.scene.add(r),this.fx.push(r)}}onFrame(t){this.frames.push(t)}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;for(let n of this.frames)n(t,e);for(let n=this.fx.length-1;n>=0;n--){let s=this.fx[n],r=s.userData;r.life-=t,r.v.y-=6*t,s.position.addScaledVector(r.v,t),r.life<=0&&(this.scene.remove(s),s.geometry.dispose(),this.fx.splice(n,1))}this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._key),this.sh.root.removeEventListener("pointerup",this._up),this.renderer.dispose()}};var kl=new Map;function et(i,t=.45){let e=`${i}|${t}`;return kl.has(e)||kl.set(e,new te({color:i,roughness:t,metalness:.02})),kl.get(e)}function Le(i,t,e=0,n=0,s=0){let r=new lt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var St=(i,t,e,n,s,r=1,a=1,o=1,l=18)=>{let c=Le(new Se(i,l,Math.max(10,l-4)),t,e,n,s);return c.scale.set(r,a,o),c},Ce=(i,t,e,n,s,r,a,o=18)=>Le(new We(i,t,e,o),n,s,r,a),Ee=(i,t,e,n,s,r,a)=>Le(new ce(i,t,e),n,s,r,a),ii=1710628,Cn=16777215;function Ol(i,t,e,n,s=1,r=.08){for(let a of[-1,1])i.add(St(.045*s,et(Cn,.3),t+a*r*s,e,n)),i.add(St(.026*s,et(ii,.2),t+a*r*s,e,n+.03*s)),i.add(St(.009*s,et(Cn,.2),t+a*r*s+.01*s,e+.012*s,n+.05*s))}function ua(i,t,e,n,s=.6){let r=St(.09,et(3848266,.5),t,e,n,1,.35,.6);r.rotation.z=s,i.add(r)}var Bl={apple(i){i.add(St(.34,et(15216682,.35),0,.34,0,1,.92,1)),i.add(Ce(.02,.025,.14,et(6961690),0,.7,0)),ua(i,.08,.72,0),i.add(St(.06,et(16777215,.2),-.13,.48,.24,1,1.4,.5))},banana(i){let t=new ns([new E(-.38,.42,0),new E(-.2,.18,0),new E(.1,.12,0),new E(.36,.34,0)]),e=Le(new ks(t,24,.11,12),et(16765498,.4));i.add(e),i.add(St(.05,et(6965786),-.4,.45,0)),i.add(St(.04,et(4864538),.38,.37,0))},orange(i){i.add(St(.33,et(16747034,.5),0,.33,0)),i.add(Ce(.015,.02,.06,et(4880938),0,.66,0)),ua(i,.06,.66,0,.3)},strawberry(i){let t=Le(new en(.3,.5,18),et(15738938,.4),0,.3,0);t.rotation.x=Math.PI,i.add(t),i.add(St(.3,et(15738938,.4),0,.5,0,1,.45,1));for(let e=0;e<14;e++){let n=e*2.4,s=.25+e%4*.07,r=.22-(.55-s)*.2;i.add(St(.018,et(16769658,.3),Math.cos(n)*r,s,Math.sin(n)*r))}for(let e=0;e<5;e++){let n=St(.1,et(3848266),Math.cos(e*1.26)*.12,.62,Math.sin(e*1.26)*.12,1,.25,.5);n.rotation.y=-e*1.26,i.add(n)}},pear(i){i.add(St(.3,et(11065402,.45),0,.3,0)),i.add(St(.2,et(11065402,.45),0,.58,0)),i.add(Ce(.02,.025,.12,et(6961690),.02,.8,0)),ua(i,.1,.8,0)},grapes(i){let t=et(9059032,.3),e=0;for(let[n,s,r]of[[4,.62,.16],[4,.46,.14],[3,.31,.1],[1,.17,0]]){for(let a=0;a<n;a++){let o=a/n*Math.PI*2+e;i.add(St(.1,t,Math.cos(o)*r,s,Math.sin(o)*r))}e+=.5}i.add(Ce(.02,.02,.14,et(6965786),0,.78,0)),ua(i,.1,.8,0)},watermelon(i){let t=new dn;t.absarc(0,0,.42,0,Math.PI,!1);let e=new ni(t,{depth:.18,bevelEnabled:!1,curveSegments:24});e.translate(0,0,-.09);let n=Le(e,et(2791994));n.rotation.x=Math.PI,n.position.y=.44,i.add(n);let s=new dn;s.absarc(0,0,.36,0,Math.PI,!1);let r=Le(new ni(s,{depth:.2,bevelEnabled:!1,curveSegments:24}),et(16730714));r.geometry.translate(0,0,-.1),r.rotation.x=Math.PI,r.position.y=.44,i.add(r);for(let[a,o]of[[-.18,.3],[0,.22],[.18,.3],[-.08,.36],[.1,.36]])i.add(St(.025,et(ii),a,o,.105,1,1.5,.5))},ball(i){i.add(St(.34,et(16777215,.3),0,.34,0));let t=Le(new Pe(.34,.06,10,36),et(16726602,.3),0,.34,0);i.add(t);let e=Le(new Pe(.34,.06,10,36),et(3836671,.3),0,.34,0);e.rotation.y=Math.PI/2,i.add(e);let n=Le(new Pe(.34,.06,10,36),et(16765498,.3),0,.34,0);n.rotation.x=Math.PI/2,i.add(n)},teddy(i){let t=et(13141066,.8),e=et(15779984,.8);i.add(St(.22,t,0,.26,0,1,1.05,.9)),i.add(St(.14,e,0,.25,.14,1,1.1,.6)),i.add(St(.19,t,0,.6,0)),i.add(St(.08,e,0,.56,.16,1,.8,.8)),i.add(St(.03,et(ii),0,.58,.23));for(let s of[-1,1])i.add(St(.07,t,s*.15,.76,0)),i.add(St(.04,e,s*.15,.76,.04)),i.add(St(.025,et(ii,.2),s*.07,.65,.17)),i.add(St(.08,t,s*.22,.32,.06)),i.add(St(.09,t,s*.13,.07,.08,1,.8,1.2));let n=St(.05,et(16726634),0,.44,.17,2,.8,.6);i.add(n)},blocks(i){let t=[16730698,4892927,16762938];[[-.18,.13,0],[.18,.13,.02],[0,.39,0]].forEach(([e,n,s],r)=>{let a=Ee(.26,.26,.26,et(t[r],.4),e,n,s);a.rotation.y=(r-1)*.2,i.add(a);let o=Ee(.14,.14,.01,et(Cn,.4),e,n,s+.135);o.rotation.y=a.rotation.y,i.add(o)})},drum(i){i.add(Ce(.3,.3,.34,et(15220778,.4),0,.2,0,24)),i.add(Ce(.31,.31,.04,et(16765498,.3),0,.38,0,24)),i.add(Ce(.31,.31,.04,et(16765498,.3),0,.03,0,24)),i.add(Ce(.29,.29,.02,et(16315626,.6),0,.4,0,24));for(let t=0;t<6;t++){let e=t/6*Math.PI*2,n=Ce(.012,.012,.36,et(Cn),Math.cos(e)*.3,.2,Math.sin(e)*.3,6);n.rotation.z=t%2?.5:-.5,i.add(n)}for(let t of[-1,1]){let e=Ce(.02,.02,.42,et(14198890),t*.14,.55,.05,8);e.rotation.z=t*.8,i.add(e),i.add(St(.04,et(14198890),t*.3,.7,.05))}},yoyo(i){for(let e of[-1,1]){let n=Ce(.3,.3,.1,et(e<0?3852456:16739e3,.35),0,.32,e*.08,24);n.rotation.x=Math.PI/2,i.add(n)}let t=Ce(.08,.08,.08,et(Cn),0,.32,0);t.rotation.x=Math.PI/2,i.add(t),i.add(Ce(.008,.008,.4,et(Cn),0,.68,0,6)),i.add(St(.04,et(16765498),0,.88,0))},cat(i){let t=et(16754762,.7);i.add(St(.22,t,0,.24,-.05,1,.95,1.1)),i.add(St(.18,t,0,.52,.12));for(let n of[-1,1]){let s=Le(new en(.07,.13,12),t,n*.1,.68,.1);s.rotation.z=-n*.25,i.add(s),i.add(St(.06,t,n*.12,.05,.12,1,.7,1.3))}Ol(i,0,.55,.26,1,.065),i.add(St(.025,et(16743066),0,.49,.29));let e=Le(new ks(new ns([new E(0,.2,-.3),new E(.1,.35,-.42),new E(.05,.55,-.38)]),12,.04,8),t);i.add(e);for(let n=0;n<3;n++)i.add(Ee(.12,.02,.01,et(14186538),0,.62+n*.03-.03,.29-n*.02))},fish(i){let t=et(16747050,.35);i.add(St(.26,t,0,.36,0,.6,.85,1.3));let e=Le(new en(.18,.24,4),t,0,.36,-.42);e.rotation.x=-Math.PI/2,e.scale.set(.3,1,1.2),i.add(e);for(let s of[-.08,.1])i.add(St(.2,et(Cn,.4),0,.36,s,.62,.84,.12));for(let s of[-1,1])i.add(St(.05,et(Cn,.3),s*.14,.42,.2)),i.add(St(.028,et(ii),s*.17,.42,.22));let n=Le(new en(.1,.18,4),t,0,.6,-.05);n.scale.set(.2,1,1),i.add(n)},chick(i){let t=et(16767034,.6);i.add(St(.22,t,0,.24,0)),i.add(St(.16,t,0,.5,.04)),Ol(i,0,.53,.17,.9,.06);let e=Le(new en(.04,.09,8),et(16747034),0,.48,.21);e.rotation.x=Math.PI/2,i.add(e);for(let n of[-1,1]){let s=St(.1,t,n*.2,.26,0,.4,.8,1);s.rotation.z=n*.4,i.add(s),i.add(Ee(.06,.02,.1,et(16747034),n*.07,.01,.06))}i.add(St(.04,t,0,.68,.02,.6,1.2,.6))},bunny(i){let t=et(16052468,.8);i.add(St(.22,t,0,.24,-.02,1,.95,1.05)),i.add(St(.16,t,0,.5,.1));for(let e of[-1,1]){let n=St(.06,t,e*.07,.78,.06,.8,2.6,.6);n.rotation.z=-e*.12,i.add(n),i.add(St(.035,et(16754880),e*.07,.78,.1,.8,2.2,.4)),i.add(St(.06,t,e*.1,.04,.14,1,.6,1.4))}Ol(i,0,.53,.23,.85,.06),i.add(St(.025,et(16747176),0,.47,.26)),i.add(St(.07,t,0,.22,-.26))},frog(i){let t=et(5949498,.45);i.add(St(.26,t,0,.2,0,1.1,.75,1));for(let n of[-1,1])i.add(St(.1,t,n*.12,.38,.1)),i.add(St(.065,et(Cn,.3),n*.12,.42,.16)),i.add(St(.035,et(ii),n*.12,.43,.21)),i.add(St(.09,t,n*.24,.05,.12,1,.4,1.4));let e=Le(new Pe(.1,.012,6,16,Math.PI),et(2779674),0,.24,.24);e.rotation.z=Math.PI,i.add(e),i.add(St(.18,et(13168778,.5),0,.13,.08,1,.5,1))},car(i){i.add(Ee(.74,.22,.4,et(15216682,.3),0,.22,0)),i.add(Ee(.4,.2,.36,et(15216682,.3),-.05,.42,0));for(let t of[-1,1])i.add(Ee(.17,.14,.37,et(10148095,.1),-.05+t*.1,.43,0));for(let t of[-.24,.24])for(let e of[-.21,.21]){let n=Ce(.1,.1,.07,et(ii,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n),i.add(Ce(.045,.045,.075,et(14211296,.3),t,.1,e).rotateX(Math.PI/2))}for(let t of[-.12,.12])i.add(St(.035,et(16773800,.2),.37,.25,t));i.rotation.y=-Math.PI/2},bus(i){i.add(Ee(.86,.42,.4,et(16761402,.35),0,.33,0));for(let t=0;t<4;t++)for(let e of[-1,1])i.add(Ee(.15,.12,.01,et(10148095,.1),-.3+t*.19,.42,e*.205));i.add(Ee(.01,.16,.3,et(10148095,.1),.435,.42,0)),i.add(Ee(.88,.04,.41,et(3816010),0,.22,0));for(let t of[-.28,.28])for(let e of[-.21,.21]){let n=Ce(.09,.09,.07,et(ii,.6),t,.1,e);n.rotation.x=Math.PI/2,i.add(n)}i.rotation.y=-Math.PI/2},boat(i){let t=new dn;t.moveTo(-.42,.2),t.lineTo(.42,.2),t.lineTo(.3,0),t.lineTo(-.3,0),t.closePath();let e=Le(new ni(t,{depth:.3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),et(3832552,.35),0,.02,-.15);i.add(e),i.add(Ee(.86,.04,.32,et(Cn,.4),0,.22,0)),i.add(Ce(.015,.015,.62,et(9067050),0,.53,0,8));let n=new dn;n.moveTo(0,0),n.lineTo(.3,0),n.lineTo(0,.5),n.closePath();let s=Le(new Yr(n),new te({color:16734810,side:Ge,roughness:.6}),.02,.28,0);i.add(s),i.rotation.y=-Math.PI/2},plane(i){let t=et(16053498,.3),e=Ce(.1,.07,.8,t,0,.32,0);e.rotation.z=Math.PI/2,i.add(e),i.add(St(.1,t,.4,.32,0,1,1,1)),i.add(Ee(.22,.03,.86,et(3836671,.35),.02,.3,0)),i.add(Ee(.12,.02,.32,et(3836671,.35),-.36,.34,0)),i.add(Ee(.12,.18,.02,et(16730698,.35),-.36,.44,0));for(let s=0;s<3;s++)for(let r of[-1,1])i.add(St(.025,et(6998271,.1),.1-s*.12,.37,r*.09));let n=Ee(.02,.26,.04,et(3816010),.5,.32,0);i.add(n),i.userData.prop=n,i.rotation.y=-Math.PI/2},train(i){i.add(Ee(.5,.3,.36,et(3852394,.35),-.12,.25,0)),i.add(Ee(.26,.24,.36,et(15220778,.35),-.24,.52,0)),i.add(Ee(.18,.1,.38,et(10148095,.1),-.24,.56,0));let t=Ce(.14,.14,.36,et(3832552,.35),.24,.27,0);t.rotation.z=Math.PI/2,i.add(t),i.add(Ce(.05,.07,.18,et(3816010),.3,.48,0)),i.add(St(.06,et(16765498),.42,.27,0));for(let e of[-.26,0,.26])for(let n of[-.19,.19]){let s=Ce(.09,.09,.05,et(16761402,.4),e,.1,n);s.rotation.x=Math.PI/2,i.add(s)}i.rotation.y=-Math.PI/2}},F_=Object.keys(Bl);function jh(i){let t=new le,e=new le;return(Bl[i]||Bl.ball)(e),t.add(e),t.userData.id=i,t.userData.inner=e,t}function Qh(i,t=.34,e=.07){if(i==="pyramid"){let r=new en(.95,1.35,4);return r.rotateY(Math.PI/4),r}let n=new dn;if(i==="circle")n.absarc(0,0,.72,0,Math.PI*2);else if(i==="square")n.moveTo(-.62+.14,-.62),n.lineTo(.62-.14,-.62),n.quadraticCurveTo(.62,-.62,.62,-.62+.14),n.lineTo(.62,.62-.14),n.quadraticCurveTo(.62,.62,.62-.14,.62),n.lineTo(-.62+.14,.62),n.quadraticCurveTo(-.62,.62,-.62,.62-.14),n.lineTo(-.62,-.62+.14),n.quadraticCurveTo(-.62,-.62,-.62+.14,-.62);else if(i==="octagon"){for(let r=0;r<8;r++){let a=Math.PI/8+r*Math.PI/4,o=Math.cos(a)*.8,l=Math.sin(a)*.8;r?n.lineTo(o,l):n.moveTo(o,l)}n.closePath()}else if(i==="plus")n.moveTo(-.26,-.78),n.lineTo(.26,-.78),n.lineTo(.26,-.26),n.lineTo(.78,-.26),n.lineTo(.78,.26),n.lineTo(.26,.26),n.lineTo(.26,.78),n.lineTo(-.26,.78),n.lineTo(-.26,.26),n.lineTo(-.78,.26),n.lineTo(-.78,-.26),n.lineTo(-.26,-.26),n.closePath();else if(i==="crescent")n.absarc(0,0,.82,Math.PI*.32,Math.PI*1.68,!1),n.absarc(.34,0,.66,Math.PI*1.62,Math.PI*.38,!0),n.closePath();else if(i==="semicircle")n.absarc(0,-.3,.85,0,Math.PI,!1),n.closePath();else if(i==="trapezoid")n.moveTo(-.9,-.5),n.lineTo(.9,-.5),n.lineTo(.5,.5),n.lineTo(-.5,.5),n.closePath();else if(i==="parallelogram")n.moveTo(-.9,-.5),n.lineTo(.5,-.5),n.lineTo(.9,.5),n.lineTo(-.5,.5),n.closePath();else if(i==="hexagram"){for(let r=0;r<12;r++){let a=Math.PI/2+r*Math.PI/6,o=r%2?.5:.95,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else if(i==="drop")n.moveTo(0,.95),n.bezierCurveTo(.2,.5,.75,.1,.75,-.3),n.bezierCurveTo(.75,-.75,.4,-.95,0,-.95),n.bezierCurveTo(-.4,-.95,-.75,-.75,-.75,-.3),n.bezierCurveTo(-.75,.1,-.2,.5,0,.95);else if(i==="triangle")n.moveTo(-.82,-.6),n.lineTo(.82,-.6),n.lineTo(0,.82),n.closePath();else if(i==="star"){for(let r=0;r<10;r++){let a=Math.PI/2+r*Math.PI/5,o=r%2?.42:.92,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else n.moveTo(0,-.78),n.bezierCurveTo(-.2,-.55,-.9,-.2,-.9,.28),n.bezierCurveTo(-.9,.7,-.35,.85,0,.4),n.bezierCurveTo(.35,.85,.9,.7,.9,.28),n.bezierCurveTo(.9,-.2,.2,-.55,0,-.78);let s=new ni(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:4,curveSegments:20});return s.center(),s}var fa={ambulance:[220,130],ant:[340,280],apple:[180,190],banana:[210,180],bee:[320,240],boat:[230,170],boy_idle:[410,810],boy_point:[310,490],boy_read:[260,430],boy_wave:[352,490],brachio:[400,298],bus:[200,130],butterfly:[270,230],car:[220,110],carrot:[190,190],cat:[310,410],cat2:[410,450],caterpillar:[380,240],cheetah:[490,440],chick:[340,340],clownfish:[320,250],cow:[492,472],cow2:[470,470],crab:[400,310],croc:[340,490],croc2:[440,260],dog:[280,420],dog2:[400,440],dolphin:[420,340],dragonfly:[1010,640],elephant:[380,460],elephant2:[520,470],firetruck:[230,140],frog:[156,256],giraffe:[300,500],giraffe2:[310,520],girl_cheer:[300,470],girl_idle:[430,840],girl_stand_read:[280,490],girl_wave:[332,490],goose:[270,410],grapes:[150,200],grasshopper:[400,250],helicopter:[280,140],hen:[300,380],horse:[450,470],iguana:[440,240],ladybug:[300,190],lion:[280,480],lion2:[360,450],mallard:[320,340],mango:[190,200],mantis:[360,250],monkey:[420,450],octopus:[430,330],orange:[164,176],owl:[490,532],owlbrown:[260,330],panda:[380,430],parrot:[370,330],peacock:[430,340],penguin:[330,350],pig:[410,450],pigeon:[300,320],pineapple:[130,230],plane:[250,150],police:[240,140],rabbit:[360,450],seahorse:[210,340],shark:[460,290],sheep:[222,350],sheep2:[430,430],snake:[360,270],starfish:[320,320],stego:[480,268],strawberry:[144,190],tiger:[430,450],tortoise:[390,230],train:[280,150],trex:[450,288],triceratops:[390,290],turtle:[450,310],watermelon:[210,164],zebra:[440,490],fox:[1040,1020],camel:[1040,1020],sun:[992,1020],rose:[1040,1028],pomegranate:[1040,1028],rocket:[992,1028],ball:[1040,1020],crow:[1040,1020],envelope:[992,1020],lemon:[1040,1028],crescent:[1040,1028],corn:[992,1048],rabbit_n:[1040,1020],duck_n:[1040,1020],banana_n:[992,1020],apple_n:[1040,1028],clownfish_n:[1040,1028],butterfly_n:[992,1028],cat_n:[1040,1020],horse_n:[1040,1020],sheep_n:[992,1020],hen_n:[1040,1028],bee_n:[1040,1028],giraffe_n:[992,1048],windmill_p:[800,900],house_p:[1120,760],tree_oak:[890,900],tree_apple:[664,800],tuft_1:[430,350],tuft_2:[450,350],tuft_3:[450,350],lotus_p:[740,400],fence_p:[1120,370],hay_p:[1020,580],stones_p:[1100,250],flowers_p:[1040,510],frog_n:[1536,1024],plane_n:[1536,1024],grapes_n:[1536,1044],dove_n:[1536,1024],butterfly_1:[480,380],butterfly_2:[460,440],butterfly_3:[430,360],bird_blue:[820,670],bird_yellow:[900,710],ladybug_leaf:[1e3,630],barn_f:[1080,810],silo_f:[470,790],pump_f:[490,780],gate_f:[970,400],hayroll_f:[530,490],haystack_f:[520,470],trough_f:[620,390],scarecrow_f:[550,680],tractor_f:[860,660],crate_apple:[550,490],crate_carrot:[530,510],crate_corn:[540,490],sunflower_1:[390,610],sunflower_2:[440,530],b_clown:[1084,1084],b_tang:[1084,1084],b_yellowfish:[1084,1084],b_octopus:[1084,1084],b_crab_walk:[1084,1084],b_gull_fly:[1084,1084],b_shell:[828,742],b_spiral:[828,742],b_starfish:[828,742],b_crab:[828,742],b_jelly:[828,742],b_turtle:[828,742],b_dolphin:[828,742],b_gull:[828,742],b_gull_fly2:[828,742],b_coral:[828,742],b_ball:[828,742],b_ring:[828,742],b_palm1:[828,742],b_palm2:[828,742],b_umbrella:[828,742],b_castle:[828,742],b_lighthouse:[828,742],b_boat:[828,742],b_dock:[828,742],b_chair:[828,742],b_rocks:[828,742],b_weed:[828,742],b_surf:[828,742],b_bucket:[828,742],f_pad_stump:[1596,1084],f_pad_hay:[1596,1084],f_pad_nest:[1596,1084],f_pad_plank:[1596,1084],f_coop:[828,742],f_eggs:[828,742],f_milk:[828,742],f_barrow:[828,742],f_water_can:[828,742],f_sign:[828,742],f_bucket:[828,742],f_stool:[828,742],f_barrels:[828,742],f_post:[828,742],f_haypile:[828,742],f_birdhouse:[828,742],f_cow:[916,940],f_pig:[600,760],f_horse:[860,980],f_sheep:[692,840],f_goat:[680,1060],f_donkey:[720,1080],f_rooster:[680,1040],f_hen:[740,960],s_pad_moon:[1596,1084],s_pad_energy:[1566,1084],s_pad_metal:[1596,1054],s_pad_crystal:[1566,1054],s_alien:[828,1084],s_robot:[828,1084],s_cat:[828,1084],s_dog:[798,1084],s_shoot:[828,1054],s_rocket:[828,1054],s_helmet:[828,1054],s_comet:[798,1054],s_launch:[828,742],s_ufo:[828,742],s_station:[828,742],s_rock:[798,742],s_crystal:[828,742],s_dish:[828,742],s_rover:[828,742],s_ringplanet:[798,742],s_blueplanet:[828,714],s_pinkplanet:[828,714],s_star:[828,714],s_moon:[798,714],k_tower:[828,742],k_gate:[828,742],k_wall:[828,742],k_stall:[798,742],k_well:[828,742],k_chest:[828,742],k_banner:[828,742],k_catapult:[798,742],k_cannon:[828,714],k_shield:[828,714],k_cottage:[828,714],k_torch:[798,714],k_knight:[828,1084],k_princess:[828,1084],k_king:[828,1084],k_queen:[798,1084],k_dragon:[828,1054],k_horse:[828,1054],k_jester:[828,1054],k_wizard:[798,1054],k_pad_stone:[1596,1084],k_pad_velvet:[1566,1084],k_pad_shield:[1596,1054],k_pad_gold:[1566,1054],w_pine1:[828,742],w_pine2:[828,742],w_snowman:[828,742],w_igloo:[798,742],w_cabin:[828,742],w_sled:[828,742],w_snowballs:[828,742],w_iceblock:[798,742],w_crystal:[828,714],w_pond:[940,748],w_sign:[880,748],w_skis:[880,748],w_penguin:[828,1084],w_bear:[828,1084],w_fox:[820,960],w_rabbit:[798,1084],w_owl:[828,1054],w_reindeer:[828,1054],w_seal:[980,900],w_chick:[798,1054],w_pad_ice:[1596,1084],w_pad_snow:[1566,1084],w_pad_log:[1596,1054],w_pad_crystal:[1566,1054],c_pad_manhole:[1596,1084],c_pad_tire:[1566,1084],c_pad_round:[1596,1054],c_pad_cone:[1560,1088],c_schoolbus:[828,742],c_firetruck:[828,742],c_ambulance:[828,742],c_police:[798,742],c_citybus:[828,742],c_taxi:[828,742],c_train:[828,742],c_tram:[798,742],c_bulldozer:[828,714],c_bike:[828,714],c_heli:[828,714],c_plane:[798,714],c_skyscraper:[828,742],c_house:[828,742],c_school:[828,742],c_hospital:[798,742],c_firestation:[828,742],c_light:[828,742],c_busstop:[828,742],c_lamp:[798,742],c_bench:[828,714],c_tree:[828,714],c_mailbox:[828,714],c_fountain:[798,714],r_pad_candy:[1596,1084],r_pad_cloud:[1566,1084],r_pad_rainbow:[1596,1054],r_pad_cookie:[1566,1054],r_unicorn:[828,1084],r_butterfly:[840,700],r_ladybug:[900,660],r_kite:[798,1084],r_pinwheel:[828,1054],r_star:[828,1054],r_sun:[828,1054],r_cloud:[798,1054],r_rainbow:[880,680],r_lolli:[828,742],r_cotton:[828,742],r_carousel:[798,742],r_slide:[828,742],r_swing:[828,742],r_seesaw:[828,742],r_balloons:[798,742],r_icecream:[600,800],r_candy:[828,714],r_cupcake:[828,714],r_gingerhouse:[798,714],u_pinktube:[828,742],u_orangecoral:[828,742],u_brain:[828,742],u_weed:[798,742],u_rocks:[828,742],u_chest:[828,742],u_wreck:[828,742],u_anchor:[798,742],u_arch:[828,714],u_clam:[828,714],u_anemone:[828,714],u_barrel:[798,714],u_clown:[828,742],u_tang:[828,742],u_yellowfish:[828,742],u_octopus:[798,742],u_turtle:[828,742],u_dolphin:[828,742],u_seahorse:[828,742],u_crab:[798,742],u_star:[828,714],u_jelly:[828,714],u_whale:[800,718],u_puffer:[798,714],u_pad_sand:[1596,1084],u_pad_shell:[1566,1084],u_pad_coral:[1596,1054],u_pad_pearl:[1566,1054],j_tree:[828,742],j_palm:[828,742],j_leaf:[828,742],j_banana:[798,742],j_mango:[828,742],j_hut:[828,742],j_bridge:[828,742],j_rocks:[798,742],j_vine:[828,714],j_flower:[828,714],j_mushroom:[828,714],j_totem:[798,714],j_pad_stump:[1596,1084],j_pad_lily:[1566,1084],j_pad_stone:[1596,1054],j_pad_bamboo:[1566,1054],j_monkey:[828,742],j_lion:[828,742],j_elephant:[828,742],j_giraffe:[798,742],j_zebra:[828,742],j_parrot:[828,742],j_frog:[828,742],j_tiger:[798,742],j_toucan:[828,714],j_gorilla:[828,714],j_chameleon:[828,714],j_snake:[798,714],d_pyramid:[850,580],d_pyramid2:[828,742],d_palm:[828,742],d_cactus:[798,742],d_dune:[828,742],d_oasis:[828,742],d_tent:[880,580],d_jar:[798,742],d_cart:[828,714],d_well:[828,714],d_flower:[828,714],d_lantern:[798,714],d_camel:[828,742],d_babycamel:[828,742],d_fox:[828,742],d_scorpion:[798,742],d_lizard:[828,742],d_snake:[828,742],d_hawk:[828,742],d_horse:[798,742],d_donkeycart:[828,714],d_jeep:[828,714],d_balloon:[828,714],d_boat:[798,714],d_pad_stone:[1596,1084],d_pad_carpet:[1566,1084],d_pad_clay:[1596,1054],d_pad_wood:[1566,1054],h_bed:[828,742],h_toothbrush:[828,742],h_sink:[828,742],h_towel:[798,742],h_backpack:[828,742],h_shoes:[828,742],h_wardrobe:[828,742],h_table:[798,742],h_broom:[828,714],h_bin:[828,714],h_clock:[828,714],h_toybox:[798,714],h_fence:[828,742],h_tulips:[828,742],h_wateringcan:[828,742],h_swing:[798,742],h_tree:[720,760],h_birdbath:[828,742],h_gnome:[500,720],h_mailbox:[798,742],h_doghouse:[828,714],h_bike:[790,640],h_ball:[828,714],h_plant:[798,714],v_tomato:[828,742],v_cucumber:[828,742],v_potato:[828,742],v_onion:[798,742],v_eggplant:[828,742],v_pepper:[828,742],v_lettuce:[828,742],v_broccoli:[798,742],v_peas:[828,714],v_pumpkin:[828,714],v_garlic:[828,714],v_mushroom:[798,714],q_kiwi:[828,742],q_melon:[828,742],q_dates:[828,742],q_fig:[798,742],q_apricot:[828,742],q_berries:[828,742],q_plum:[828,742],q_avocado:[798,742],q_peach:[828,714],q_cherry:[828,714],q_olives:[828,714],q_coconut:[798,714],e_pencil:[828,742],e_book:[828,742],e_notebook:[828,742],e_scissors:[798,742],e_ruler:[828,742],e_eraser:[828,742],e_crayons:[828,742],e_board:[798,742],e_map:[828,714],e_glue:[828,714],e_desk:[828,714],e_paper:[798,714],l_shirt:[828,742],l_trousers:[828,742],l_dress:[828,742],l_hat:[798,742],l_socks:[828,742],l_jacket:[828,742],l_scarf:[828,742],l_gloves:[798,742],l_glasses:[828,714],l_cap:[828,714],l_pajamas:[828,714],l_raincoat:[798,714],y_eye:[828,742],y_ear:[828,742],y_nose:[828,742],y_mouth:[798,742],y_hand:[828,742],y_foot:[828,742],y_hair:[828,742],y_tooth:[798,742],y_head:[828,714],y_finger:[828,714],y_knee:[828,714],y_belly:[798,714],g_rectangle:[828,742],g_oval:[828,742],g_diamond:[828,742],g_hexagon:[798,742],g_pentagon:[828,742],g_arrow:[828,742],g_cube:[828,742],g_sphere:[798,742],g_cone:[828,714],g_cylinder:[828,714],g_ring:[828,714],g_heart:[798,714],a_mama:[828,742],a_baba:[828,742],a_grandma:[828,742],a_grandpa:[798,742],a_baby:[828,742],a_brother:[828,742],a_sister:[828,742],a_boy:[798,742],a_girl:[828,714],a_friends:[828,714],a_family:[828,714],a_uncle:[798,714],h_pad_rug:[1596,1084],h_pad_wood:[1566,1084],h_pad_stone:[1596,1054],h_pad_bath:[1566,1054],t_rain:[828,742],t_snow:[828,742],t_wind:[828,742],t_thunder:[798,742],t_lightning:[828,742],t_umbrella:[828,742],t_flake:[828,742],t_flower:[798,742],t_leaves:[828,714],t_hot:[828,714],t_cold:[828,714],t_mountain:[798,714],z_doctor:[828,742],z_teacher:[828,742],z_police:[828,742],z_firefighter:[798,742],z_farmer:[828,742],z_cook:[828,742],z_driver:[828,742],z_pilot:[798,742],z_nurse:[828,714],z_builder:[828,714],z_singer:[828,714],z_painter:[798,714],i_ant:[828,742],i_fly:[828,742],i_spider:[828,742],i_worm:[798,742],i_eagle:[798,800],i_peacock:[828,800],i_flamingo:[828,800],i_swan:[798,742],i_ostrich:[798,752],i_sparrow:[828,714],i_bat:[914,714],i_snail:[798,714],o_bread:[828,742],o_cheese:[828,742],o_egg:[828,742],o_milk:[798,742],o_rice:[828,742],o_chicken:[828,742],o_juice:[828,742],o_water:[798,742],o_cookie:[828,714],o_honey:[828,772],o_soup:[828,714],o_pizza:[798,714],m_drum:[828,742],m_guitar:[828,742],m_piano:[828,742],m_violin:[798,742],m_flute:[828,742],m_trumpet:[828,742],m_tambourine:[828,742],m_oud:[798,742],m_mic:[828,714],m_headphones:[828,714],m_note:[828,714],m_bell:[798,714]};var n_={boy:{height:3.6,total:440,parts:{head:"boy_head",body:"boy_body",legL:"boy_leg_l",legR:"boy_leg_r",armDown:"boy_arm_down",armWave:"boy_arm_wave",armBend:"boy_arm_bend",armUp:"boy_arm_up",armPoint:"boy_arm_point2",eyeOpen:"boy_eye_open",eyeShut:"boy_eye_closed",mSmile:"boy_mouth_smile",mOpen:"boy_mouth_open",mLaugh:"boy_mouth_laugh",mO:"boy_mouth_o",mOh:"boy_mouth_oh",mFlat:"boy_mouth_flat"},hipL:[-20,172],hipR:[24,172],legLAnchor:[32,6],legRAnchor:[28,6],body:{at:[0,166],anchor:[59,128]},head:{at:[0,290],anchor:[68,146],eyeL:[-17,64],eyeR:[23,64],mouth:[4,26],eyeK:.62,mouthK:.65},shoulderL:[-46,264],shoulderR:[46,264],arm:{down:[12,10],wave:[14,26],bend:[12,10],up:[12,62],point:[10,16]}}};n_.girl={height:3.5,total:420,parts:{head:"girl_head",body:"girl_body",legL:"girl_leg_l",legR:"girl_leg_r",armDown:"girl_arm_down",armWave:"girl_arm_wave",armBend:"girl_arm_bend",armUp:"girl_arm_wave",armPoint:"girl_arm_point",eyeOpen:"girl_eye_open",eyeShut:"girl_eye_closed",mSmile:"girl_mouth_smile",mOpen:"girl_mouth_open",mLaugh:"girl_mouth_laugh",mO:"girl_mouth_o",mOh:"girl_mouth_o",mFlat:"girl_mouth_flat"},hipL:[-16,150],hipR:[20,150],legLAnchor:[30,6],legRAnchor:[28,6],body:{at:[0,95],anchor:[65,175]},head:{at:[0,267],anchor:[74,155],eyeL:[24,98],eyeR:[72,98],mouth:[47,36],eyeK:.55,mouthK:.6,eyeAnchor:[30,26],mouthAnchor:[33,15]},shoulderL:[-51,234],shoulderR:[51,234],arm:{down:[12,12],wave:[14,28],bend:[12,12],up:[14,28],point:[10,18]}};var td=[{id:"monkey",thing:"j_monkey",letter:"qaaf",word:"\u0642\u0631\u062F",wd:"\u0642\u0650\u0631\u0652\u062F",the:"\u0627\u0644\u0642\u0631\u062F",thed:"\u0627\u0644\u0642\u0650\u0631\u0652\u062F",age:3},{id:"lion",thing:"j_lion",letter:"alef",word:"\u0623\u0633\u062F",wd:"\u0623\u064E\u0633\u064E\u062F",the:"\u0627\u0644\u0623\u0633\u062F",thed:"\u0627\u0644\u0623\u064E\u0633\u064E\u062F",age:3},{id:"elephant",thing:"j_elephant",letter:"faa",word:"\u0641\u064A\u0644",wd:"\u0641\u0650\u064A\u0644",the:"\u0627\u0644\u0641\u064A\u0644",thed:"\u0627\u0644\u0641\u0650\u064A\u0644",age:3},{id:"zebra",thing:"j_zebra",letter:"haa",word:"\u062D\u0645\u0627\u0631 \u0648\u062D\u0634\u064A",wd:"\u062D\u0650\u0645\u064E\u0627\u0631 \u0648\u064E\u062D\u0652\u0634\u0650\u064A",the:"\u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631 \u0627\u0644\u0648\u064E\u062D\u0652\u0634\u0650\u064A",age:5},{id:"parrot",thing:"j_parrot",letter:"baa",word:"\u0628\u0628\u063A\u0627\u0621",wd:"\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",age:4},{id:"tiger",thing:"j_tiger",letter:"noon",word:"\u0646\u0645\u0631",wd:"\u0646\u0650\u0645\u0650\u0631",the:"\u0627\u0644\u0646\u0645\u0631",thed:"\u0627\u0644\u0646\u0650\u0651\u0645\u0650\u0631",age:4},{id:"toucan",thing:"j_toucan",letter:"tah",word:"\u0637\u0648\u0642\u0627\u0646",wd:"\u0637\u064F\u0648\u0642\u064E\u0627\u0646",the:"\u0627\u0644\u0637\u0648\u0642\u0627\u0646",thed:"\u0627\u0644\u0637\u064F\u0651\u0648\u0642\u064E\u0627\u0646",age:6},{id:"gorilla",thing:"j_gorilla",letter:"ghayn",word:"\u063A\u0648\u0631\u064A\u0644\u0627",wd:"\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",the:"\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627",thed:"\u0627\u0644\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",age:5},{id:"chameleon",thing:"j_chameleon",letter:"haa",word:"\u062D\u0631\u0628\u0627\u0621",wd:"\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",the:"\u0627\u0644\u062D\u0631\u0628\u0627\u0621",thed:"\u0627\u0644\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",age:6},{id:"snake",thing:"j_snake",letter:"thaa",word:"\u062B\u0639\u0628\u0627\u0646",wd:"\u062B\u064F\u0639\u0652\u0628\u064E\u0627\u0646",the:"\u0627\u0644\u062B\u0639\u0628\u0627\u0646",thed:"\u0627\u0644\u062B\u064F\u0651\u0639\u0652\u0628\u064E\u0627\u0646",age:5},{id:"cow",thing:"f_cow",letter:"baa",word:"\u0628\u0642\u0631\u0629",wd:"\u0628\u064E\u0642\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0628\u0642\u0631\u0629",thed:"\u0627\u0644\u0628\u064E\u0642\u064E\u0631\u064E\u0629",age:3},{id:"pig",thing:"f_pig",letter:"khaa",word:"\u062E\u0646\u0632\u064A\u0631",wd:"\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",the:"\u0627\u0644\u062E\u0646\u0632\u064A\u0631",thed:"\u0627\u0644\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",age:4},{id:"goat",thing:"f_goat",letter:"meem",word:"\u0645\u0627\u0639\u0632",wd:"\u0645\u064E\u0627\u0639\u0650\u0632",the:"\u0627\u0644\u0645\u0627\u0639\u0632",thed:"\u0627\u0644\u0645\u064E\u0627\u0639\u0650\u0632",age:5},{id:"donkey",thing:"f_donkey",letter:"haa",word:"\u062D\u0645\u0627\u0631",wd:"\u062D\u0650\u0645\u064E\u0627\u0631",the:"\u0627\u0644\u062D\u0645\u0627\u0631",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631",age:4},{id:"rooster",thing:"f_rooster",letter:"dal",word:"\u062F\u064A\u0643",wd:"\u062F\u0650\u064A\u0643",the:"\u0627\u0644\u062F\u064A\u0643",thed:"\u0627\u0644\u062F\u0650\u0651\u064A\u0643",age:3},{id:"octopus",thing:"u_octopus",letter:"alef",word:"\u0623\u062E\u0637\u0628\u0648\u0637",wd:"\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",the:"\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",age:5},{id:"turtle",thing:"u_turtle",letter:"seen",word:"\u0633\u0644\u062D\u0641\u0627\u0629",wd:"\u0633\u064F\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",the:"\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629",thed:"\u0627\u0644\u0633\u064F\u0651\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",age:4},{id:"dolphin",thing:"u_dolphin",letter:"dal",word:"\u062F\u0648\u0644\u0641\u064A\u0646",wd:"\u062F\u064F\u0648\u0644\u0652\u0641\u0650\u064A\u0646",the:"\u0627\u0644\u062F\u0648\u0644\u0641\u064A\u0646",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u0652\u0641\u0650\u064A\u0646",age:5},{id:"whale",thing:"u_whale",letter:"haa",word:"\u062D\u0648\u062A",wd:"\u062D\u064F\u0648\u062A",the:"\u0627\u0644\u062D\u0648\u062A",thed:"\u0627\u0644\u062D\u064F\u0648\u062A",age:4},{id:"crab",thing:"u_crab",letter:"seen",word:"\u0633\u0631\u0637\u0627\u0646",wd:"\u0633\u064E\u0631\u064E\u0637\u064E\u0627\u0646",the:"\u0627\u0644\u0633\u0631\u0637\u0627\u0646",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u064E\u0637\u064E\u0627\u0646",age:5},{id:"starfish",thing:"u_star",letter:"noon",word:"\u0646\u062C\u0645\u0629 \u0628\u062D\u0631",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629 \u0628\u064E\u062D\u0652\u0631",the:"\u0646\u062C\u0645\u0629 \u0627\u0644\u0628\u062D\u0631",thed:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629\u0652 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:5},{id:"jellyfish",thing:"u_jelly",letter:"qaaf",word:"\u0642\u0646\u062F\u064A\u0644 \u0628\u062D\u0631",wd:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0628\u064E\u062D\u0652\u0631",the:"\u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631",thed:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"seahorse",thing:"u_seahorse",letter:"haa",word:"\u062D\u0635\u0627\u0646 \u0628\u062D\u0631",wd:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0628\u064E\u062D\u0652\u0631",the:"\u062D\u0635\u0627\u0646 \u0627\u0644\u0628\u062D\u0631",thed:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"penguin",thing:"w_penguin",letter:"baa",word:"\u0628\u0637\u0631\u064A\u0642",wd:"\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",the:"\u0627\u0644\u0628\u0637\u0631\u064A\u0642",thed:"\u0627\u0644\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",age:4},{id:"bear",thing:"w_bear",letter:"dal",word:"\u062F\u0628",wd:"\u062F\u064F\u0628\u0651",the:"\u0627\u0644\u062F\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0628\u0651",age:3},{id:"owl",thing:"w_owl",letter:"baa",word:"\u0628\u0648\u0645\u0629",wd:"\u0628\u064F\u0648\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u0648\u0645\u0629",thed:"\u0627\u0644\u0628\u064F\u0648\u0645\u064E\u0629",age:4},{id:"reindeer",thing:"w_reindeer",letter:"raa",word:"\u0631\u0646\u0629",wd:"\u0631\u064E\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0631\u0646\u0629",thed:"\u0627\u0644\u0631\u064E\u0651\u0646\u064E\u0651\u0629",age:6},{id:"seal",thing:"w_seal",letter:"faa",word:"\u0641\u0642\u0645\u0629",wd:"\u0641\u064F\u0642\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0641\u0642\u0645\u0629",thed:"\u0627\u0644\u0641\u064F\u0642\u0652\u0645\u064E\u0629",age:5},{id:"snowman",thing:"w_snowman",letter:"raa",word:"\u0631\u062C\u0644 \u062B\u0644\u062C",wd:"\u0631\u064E\u062C\u064F\u0644 \u062B\u064E\u0644\u0652\u062C",the:"\u0631\u062C\u0644 \u0627\u0644\u062B\u0644\u062C",thed:"\u0631\u064E\u062C\u064F\u0644 \u0627\u0644\u062B\u064E\u0651\u0644\u0652\u062C",age:5},{id:"pyramid",thing:"d_pyramid",letter:"haa2",word:"\u0647\u0631\u0645",wd:"\u0647\u064E\u0631\u064E\u0645",the:"\u0627\u0644\u0647\u0631\u0645",thed:"\u0627\u0644\u0647\u064E\u0631\u064E\u0645",age:4},{id:"tent",thing:"d_tent",letter:"khaa",word:"\u062E\u064A\u0645\u0629",wd:"\u062E\u064E\u064A\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062E\u064A\u0645\u0629",thed:"\u0627\u0644\u062E\u064E\u064A\u0652\u0645\u064E\u0629",age:4},{id:"palm",thing:"d_palm",letter:"noon",word:"\u0646\u062E\u0644\u0629",wd:"\u0646\u064E\u062E\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u062E\u0644\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062E\u0652\u0644\u064E\u0629",age:4},{id:"cactus",thing:"d_cactus",letter:"sad",word:"\u0635\u0628\u0627\u0631",wd:"\u0635\u064E\u0628\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0635\u0628\u0627\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0628\u064E\u0651\u0627\u0631",age:6},{id:"scorpion",thing:"d_scorpion",letter:"ayn",word:"\u0639\u0642\u0631\u0628",wd:"\u0639\u064E\u0642\u0652\u0631\u064E\u0628",the:"\u0627\u0644\u0639\u0642\u0631\u0628",thed:"\u0627\u0644\u0639\u064E\u0642\u0652\u0631\u064E\u0628",age:5},{id:"lizard",thing:"d_lizard",letter:"seen",word:"\u0633\u062D\u0644\u064A\u0629",wd:"\u0633\u0650\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u062D\u0644\u064A\u0629",thed:"\u0627\u0644\u0633\u0650\u0651\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",age:6},{id:"hawk",thing:"d_hawk",letter:"sad",word:"\u0635\u0642\u0631",wd:"\u0635\u064E\u0642\u0652\u0631",the:"\u0627\u0644\u0635\u0642\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0642\u0652\u0631",age:5},{id:"hotballoon",thing:"d_balloon",letter:"meem",word:"\u0645\u0646\u0637\u0627\u062F",wd:"\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",the:"\u0627\u0644\u0645\u0646\u0637\u0627\u062F",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",age:5},{id:"jeep",thing:"d_jeep",letter:"jeem",word:"\u062C\u064A\u0628",wd:"\u062C\u0650\u064A\u0628",the:"\u0627\u0644\u062C\u064A\u0628",thed:"\u0627\u0644\u062C\u0650\u064A\u0628",age:4},{id:"umbrella",thing:"b_umbrella",letter:"meem",word:"\u0645\u0638\u0644\u0629",wd:"\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u0638\u0644\u0629",thed:"\u0627\u0644\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",age:4},{id:"sandcastle",thing:"b_castle",letter:"qaaf",word:"\u0642\u0644\u0639\u0629",wd:"\u0642\u064E\u0644\u0652\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0644\u0639\u0629",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0639\u064E\u0629",age:4},{id:"shell",thing:"b_shell",letter:"sad",word:"\u0635\u062F\u0641\u0629",wd:"\u0635\u064E\u062F\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0635\u062F\u0641\u0629",thed:"\u0627\u0644\u0635\u064E\u0651\u062F\u064E\u0641\u064E\u0629",age:4},{id:"lighthouse",thing:"b_lighthouse",letter:"faa",word:"\u0641\u0646\u0627\u0631",wd:"\u0641\u064E\u0646\u064E\u0627\u0631",the:"\u0627\u0644\u0641\u0646\u0627\u0631",thed:"\u0627\u0644\u0641\u064E\u0646\u064E\u0627\u0631",age:6},{id:"bed",thing:"h_bed",letter:"seen",word:"\u0633\u0631\u064A\u0631",wd:"\u0633\u064E\u0631\u0650\u064A\u0631",the:"\u0627\u0644\u0633\u0631\u064A\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u0650\u064A\u0631",age:3},{id:"toothbrush",thing:"h_toothbrush",letter:"faa",word:"\u0641\u0631\u0634\u0627\u0629",wd:"\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",the:"\u0627\u0644\u0641\u0631\u0634\u0627\u0629",thed:"\u0627\u0644\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",age:5},{id:"sink",thing:"h_sink",letter:"haa",word:"\u062D\u0648\u0636",wd:"\u062D\u064E\u0648\u0652\u0636",the:"\u0627\u0644\u062D\u0648\u0636",thed:"\u0627\u0644\u062D\u064E\u0648\u0652\u0636",age:5},{id:"towel",thing:"h_towel",letter:"meem",word:"\u0645\u0646\u0634\u0641\u0629",wd:"\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0645\u0646\u0634\u0641\u0629",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",age:5},{id:"backpack",thing:"h_backpack",letter:"sheen",word:"\u0634\u0646\u0637\u0629",wd:"\u0634\u064E\u0646\u0652\u0637\u064E\u0629",the:"\u0627\u0644\u0634\u0646\u0637\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u0646\u0652\u0637\u064E\u0629",age:3},{id:"shoes",thing:"h_shoes",letter:"jeem",word:"\u062C\u0632\u0645\u0629",wd:"\u062C\u064E\u0632\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062C\u0632\u0645\u0629",thed:"\u0627\u0644\u062C\u064E\u0632\u0652\u0645\u064E\u0629",age:3},{id:"wardrobe",thing:"h_wardrobe",letter:"dal",word:"\u062F\u0648\u0644\u0627\u0628",wd:"\u062F\u064F\u0648\u0644\u064E\u0627\u0628",the:"\u0627\u0644\u062F\u0648\u0644\u0627\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u064E\u0627\u0628",age:5},{id:"table",thing:"h_table",letter:"taa",word:"\u062A\u0631\u0627\u0628\u064A\u0632\u0629",wd:"\u062A\u064E\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",the:"\u0627\u0644\u062A\u0631\u0627\u0628\u064A\u0632\u0629",thed:"\u0627\u0644\u062A\u064E\u0651\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",age:5},{id:"broom",thing:"h_broom",letter:"meem",word:"\u0645\u0643\u0646\u0633\u0629",wd:"\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u0643\u0646\u0633\u0629",thed:"\u0627\u0644\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",age:5},{id:"clock",thing:"h_clock",letter:"seen",word:"\u0633\u0627\u0639\u0629",wd:"\u0633\u064E\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u0639\u064E\u0629",age:4},{id:"swing",thing:"h_swing",letter:"alef",word:"\u0623\u0631\u062C\u0648\u062D\u0629",wd:"\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",the:"\u0627\u0644\u0623\u0631\u062C\u0648\u062D\u0629",thed:"\u0627\u0644\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",age:4},{id:"bike",thing:"h_bike",letter:"ayn",word:"\u0639\u062C\u0644\u0629",wd:"\u0639\u064E\u062C\u064E\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u062C\u0644\u0629",thed:"\u0627\u0644\u0639\u064E\u062C\u064E\u0644\u064E\u0629",age:4},{id:"tree",thing:"h_tree",letter:"sheen",word:"\u0634\u062C\u0631\u0629",wd:"\u0634\u064E\u062C\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0634\u062C\u0631\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u062C\u064E\u0631\u064E\u0629",age:3},{id:"school",thing:"c_school",letter:"meem",word:"\u0645\u062F\u0631\u0633\u0629",wd:"\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u062F\u0631\u0633\u0629",thed:"\u0627\u0644\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",age:4},{id:"hospital",thing:"c_hospital",letter:"meem",word:"\u0645\u0633\u062A\u0634\u0641\u0649",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",the:"\u0627\u0644\u0645\u0633\u062A\u0634\u0641\u0649",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",age:5},{id:"trafficlight",thing:"c_light",letter:"alef",word:"\u0625\u0634\u0627\u0631\u0629",wd:"\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0625\u0634\u0627\u0631\u0629",thed:"\u0627\u0644\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",age:5},{id:"fountain",thing:"c_fountain",letter:"noon",word:"\u0646\u0627\u0641\u0648\u0631\u0629",wd:"\u0646\u064E\u0627\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u0627\u0641\u064F\u0648\u0631\u064E\u0629",age:5},{id:"building",thing:"c_skyscraper",letter:"ayn",word:"\u0639\u0645\u0627\u0631\u0629",wd:"\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0645\u0627\u0631\u0629",thed:"\u0627\u0644\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",age:4},{id:"king",thing:"k_king",letter:"meem",word:"\u0645\u0644\u0643",wd:"\u0645\u064E\u0644\u0650\u0643",the:"\u0627\u0644\u0645\u0644\u0643",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643",age:4},{id:"queen",thing:"k_queen",letter:"meem",word:"\u0645\u0644\u0643\u0629",wd:"\u0645\u064E\u0644\u0650\u0643\u064E\u0629",the:"\u0627\u0644\u0645\u0644\u0643\u0629",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643\u064E\u0629",age:5},{id:"dragon",thing:"k_dragon",letter:"taa",word:"\u062A\u0646\u064A\u0646",wd:"\u062A\u0650\u0646\u0650\u0651\u064A\u0646",the:"\u0627\u0644\u062A\u0646\u064A\u0646",thed:"\u0627\u0644\u062A\u0650\u0651\u0646\u0650\u0651\u064A\u0646",age:4},{id:"knight",thing:"k_knight",letter:"faa",word:"\u0641\u0627\u0631\u0633",wd:"\u0641\u064E\u0627\u0631\u0650\u0633",the:"\u0627\u0644\u0641\u0627\u0631\u0633",thed:"\u0627\u0644\u0641\u064E\u0627\u0631\u0650\u0633",age:4},{id:"wizard",thing:"k_wizard",letter:"seen",word:"\u0633\u0627\u062D\u0631",wd:"\u0633\u064E\u0627\u062D\u0650\u0631",the:"\u0627\u0644\u0633\u0627\u062D\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u062D\u0650\u0631",age:5},{id:"treasure",thing:"k_chest",letter:"kaaf",word:"\u0643\u0646\u0632",wd:"\u0643\u064E\u0646\u0652\u0632",the:"\u0627\u0644\u0643\u0646\u0632",thed:"\u0627\u0644\u0643\u064E\u0646\u0652\u0632",age:4},{id:"alien",thing:"s_alien",letter:"faa",word:"\u0641\u0636\u0627\u0626\u064A",wd:"\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0641\u0636\u0627\u0626\u064A",thed:"\u0627\u0644\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",age:5},{id:"robot",thing:"s_robot",letter:"raa",word:"\u0631\u0648\u0628\u0648\u062A",wd:"\u0631\u064F\u0648\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0631\u0648\u0628\u0648\u062A",thed:"\u0627\u0644\u0631\u064F\u0651\u0648\u0628\u064F\u0648\u062A",age:4},{id:"moon",thing:"s_moon",letter:"qaaf",word:"\u0642\u0645\u0631",wd:"\u0642\u064E\u0645\u064E\u0631",the:"\u0627\u0644\u0642\u0645\u0631",thed:"\u0627\u0644\u0642\u064E\u0645\u064E\u0631",age:3},{id:"star",thing:"s_star",letter:"noon",word:"\u0646\u062C\u0645\u0629",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062C\u0652\u0645\u064E\u0629",age:3},{id:"planet",thing:"s_ringplanet",letter:"kaaf",word:"\u0643\u0648\u0643\u0628",wd:"\u0643\u064E\u0648\u0652\u0643\u064E\u0628",the:"\u0627\u0644\u0643\u0648\u0643\u0628",thed:"\u0627\u0644\u0643\u064E\u0648\u0652\u0643\u064E\u0628",age:5},{id:"balloon",thing:"r_balloons",letter:"baa",word:"\u0628\u0627\u0644\u0648\u0646",wd:"\u0628\u064E\u0627\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0627\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0644\u064F\u0648\u0646",age:3},{id:"cloud",thing:"r_cloud",letter:"seen",word:"\u0633\u062D\u0627\u0628\u0629",wd:"\u0633\u064E\u062D\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0633\u062D\u0627\u0628\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u062D\u064E\u0627\u0628\u064E\u0629",age:4},{id:"sweet",thing:"r_candy",letter:"haa",word:"\u062D\u0644\u0648\u0649",wd:"\u062D\u064E\u0644\u0652\u0648\u064E\u0649",the:"\u0627\u0644\u062D\u0644\u0648\u0649",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0648\u064E\u0649",age:4},{id:"cake",thing:"r_cupcake",letter:"kaaf",word:"\u0643\u0639\u0643\u0629",wd:"\u0643\u064E\u0639\u0652\u0643\u064E\u0629",the:"\u0627\u0644\u0643\u0639\u0643\u0629",thed:"\u0627\u0644\u0643\u064E\u0639\u0652\u0643\u064E\u0629",age:4},{id:"y_eye",thing:"y_eye",letter:"ayn",word:"\u0639\u064A\u0646",wd:"\u0639\u064E\u064A\u0652\u0646",the:"\u0627\u0644\u0639\u064A\u0646",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0646",age:3},{id:"y_ear",thing:"y_ear",letter:"waaw",word:"\u0648\u062F\u0646",wd:"\u0648\u0650\u062F\u0652\u0646",the:"\u0627\u0644\u0648\u062F\u0646",thed:"\u0627\u0644\u0648\u0650\u062F\u0652\u0646",age:3},{id:"y_nose",thing:"y_nose",letter:"alef",word:"\u0623\u0646\u0641",wd:"\u0623\u064E\u0646\u0652\u0641",the:"\u0627\u0644\u0623\u0646\u0641",thed:"\u0627\u0644\u0623\u064E\u0646\u0652\u0641",age:3},{id:"y_mouth",thing:"y_mouth",letter:"faa",word:"\u0641\u0645",wd:"\u0641\u064E\u0645",the:"\u0627\u0644\u0641\u0645",thed:"\u0627\u0644\u0641\u064E\u0645",age:3},{id:"y_hand",thing:"y_hand",letter:"alef",word:"\u0625\u064A\u062F",wd:"\u0625\u0650\u064A\u062F",the:"\u0627\u0644\u0625\u064A\u062F",thed:"\u0627\u0644\u0625\u0650\u064A\u062F",age:3},{id:"y_foot",thing:"y_foot",letter:"raa",word:"\u0631\u062C\u0644",wd:"\u0631\u0650\u062C\u0652\u0644",the:"\u0627\u0644\u0631\u062C\u0644",thed:"\u0627\u0644\u0631\u0651\u0650\u062C\u0652\u0644",age:3},{id:"y_hair",thing:"y_hair",letter:"sheen",word:"\u0634\u0639\u0631",wd:"\u0634\u064E\u0639\u0652\u0631",the:"\u0627\u0644\u0634\u0639\u0631",thed:"\u0627\u0644\u0634\u0651\u064E\u0639\u0652\u0631",age:4},{id:"y_tooth",thing:"y_tooth",letter:"seen",word:"\u0633\u0646\u0629",wd:"\u0633\u0650\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u0646\u0629",thed:"\u0627\u0644\u0633\u0651\u0650\u0646\u064E\u0651\u0629",age:4},{id:"y_head",thing:"y_head",letter:"raa",word:"\u0631\u0627\u0633",wd:"\u0631\u064E\u0627\u0633",the:"\u0627\u0644\u0631\u0627\u0633",thed:"\u0627\u0644\u0631\u0651\u064E\u0627\u0633",age:3},{id:"y_finger",thing:"y_finger",letter:"sad",word:"\u0635\u0628\u0627\u0639",wd:"\u0635\u064F\u0628\u064E\u0651\u0627\u0639",the:"\u0627\u0644\u0635\u0628\u0627\u0639",thed:"\u0627\u0644\u0635\u0651\u064F\u0628\u064E\u0651\u0627\u0639",age:4},{id:"y_knee",thing:"y_knee",letter:"raa",word:"\u0631\u0643\u0628\u0629",wd:"\u0631\u064F\u0643\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0631\u0643\u0628\u0629",thed:"\u0627\u0644\u0631\u0651\u064F\u0643\u0652\u0628\u064E\u0629",age:5},{id:"y_belly",thing:"y_belly",letter:"baa",word:"\u0628\u0637\u0646",wd:"\u0628\u064E\u0637\u0652\u0646",the:"\u0627\u0644\u0628\u0637\u0646",thed:"\u0627\u0644\u0628\u064E\u0637\u0652\u0646",age:5},{id:"l_shirt",thing:"l_shirt",letter:"qaaf",word:"\u0642\u0645\u064A\u0635",wd:"\u0642\u064E\u0645\u0650\u064A\u0635",the:"\u0627\u0644\u0642\u0645\u064A\u0635",thed:"\u0627\u0644\u0642\u064E\u0645\u0650\u064A\u0635",age:4},{id:"l_trousers",thing:"l_trousers",letter:"baa",word:"\u0628\u0646\u0637\u0644\u0648\u0646",wd:"\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",age:4},{id:"l_dress",thing:"l_dress",letter:"faa",word:"\u0641\u0633\u062A\u0627\u0646",wd:"\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",the:"\u0627\u0644\u0641\u0633\u062A\u0627\u0646",thed:"\u0627\u0644\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",age:4},{id:"l_hat",thing:"l_hat",letter:"qaaf",word:"\u0642\u0628\u0639\u0629",wd:"\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0628\u0639\u0629",thed:"\u0627\u0644\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",age:4},{id:"l_socks",thing:"l_socks",letter:"sheen",word:"\u0634\u0631\u0627\u0628",wd:"\u0634\u064F\u0631\u064E\u0651\u0627\u0628",the:"\u0627\u0644\u0634\u0631\u0627\u0628",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u064E\u0651\u0627\u0628",age:3},{id:"l_jacket",thing:"l_jacket",letter:"jeem",word:"\u062C\u0627\u0643\u062A",wd:"\u062C\u064E\u0627\u0643\u0650\u062A",the:"\u0627\u0644\u062C\u0627\u0643\u062A",thed:"\u0627\u0644\u062C\u064E\u0627\u0643\u0650\u062A",age:5},{id:"l_scarf",thing:"l_scarf",letter:"waaw",word:"\u0648\u0634\u0627\u062D",wd:"\u0648\u0650\u0634\u064E\u0627\u062D",the:"\u0627\u0644\u0648\u0634\u0627\u062D",thed:"\u0627\u0644\u0648\u0650\u0634\u064E\u0627\u062D",age:6},{id:"l_gloves",thing:"l_gloves",letter:"qaaf",word:"\u0642\u0641\u0627\u0632",wd:"\u0642\u064F\u0641\u064E\u0651\u0627\u0632",the:"\u0627\u0644\u0642\u0641\u0627\u0632",thed:"\u0627\u0644\u0642\u064F\u0641\u064E\u0651\u0627\u0632",age:6},{id:"l_glasses",thing:"l_glasses",letter:"noon",word:"\u0646\u0636\u0627\u0631\u0629",wd:"\u0646\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0636\u0627\u0631\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",age:5},{id:"l_cap",thing:"l_cap",letter:"kaaf",word:"\u0643\u0627\u0628",wd:"\u0643\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u0627\u0628",thed:"\u0627\u0644\u0643\u064E\u0627\u0628",age:4},{id:"l_pajamas",thing:"l_pajamas",letter:"baa",word:"\u0628\u064A\u062C\u0627\u0645\u0629",wd:"\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u062C\u0627\u0645\u0629",thed:"\u0627\u0644\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",age:4},{id:"l_raincoat",thing:"l_raincoat",letter:"meem",word:"\u0645\u0639\u0637\u0641",wd:"\u0645\u0650\u0639\u0652\u0637\u064E\u0641",the:"\u0627\u0644\u0645\u0639\u0637\u0641",thed:"\u0627\u0644\u0645\u0650\u0639\u0652\u0637\u064E\u0641",age:6},{id:"a_mama",thing:"a_mama",letter:"meem",word:"\u0645\u0627\u0645\u0627",wd:"\u0645\u064E\u0627\u0645\u064E\u0627",the:"\u0627\u0644\u0645\u0627\u0645\u0627",thed:"\u0627\u0644\u0645\u064E\u0627\u0645\u064E\u0627",age:3},{id:"a_baba",thing:"a_baba",letter:"baa",word:"\u0628\u0627\u0628\u0627",wd:"\u0628\u064E\u0627\u0628\u064E\u0627",the:"\u0627\u0644\u0628\u0627\u0628\u0627",thed:"\u0627\u0644\u0628\u064E\u0627\u0628\u064E\u0627",age:3},{id:"a_grandma",thing:"a_grandma",letter:"taa",word:"\u062A\u064A\u062A\u0629",wd:"\u062A\u0650\u064A\u062A\u064E\u0629",the:"\u0627\u0644\u062A\u064A\u062A\u0629",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u062A\u064E\u0629",age:3},{id:"a_grandpa",thing:"a_grandpa",letter:"jeem",word:"\u062C\u062F\u0648",wd:"\u062C\u064E\u062F\u064F\u0651\u0648",the:"\u0627\u0644\u062C\u062F\u0648",thed:"\u0627\u0644\u062C\u064E\u062F\u064F\u0651\u0648",age:3},{id:"a_baby",thing:"a_baby",letter:"tah",word:"\u0637\u0641\u0644",wd:"\u0637\u0650\u0641\u0652\u0644",the:"\u0627\u0644\u0637\u0641\u0644",thed:"\u0627\u0644\u0637\u0651\u0650\u0641\u0652\u0644",age:3},{id:"a_brother",thing:"a_brother",letter:"alef",word:"\u0623\u062E",wd:"\u0623\u064E\u062E",the:"\u0627\u0644\u0623\u062E",thed:"\u0627\u0644\u0623\u064E\u062E",age:4},{id:"a_sister",thing:"a_sister",letter:"alef",word:"\u0623\u062E\u062A",wd:"\u0623\u064F\u062E\u0652\u062A",the:"\u0627\u0644\u0623\u062E\u062A",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u062A",age:4},{id:"a_boy",thing:"a_boy",letter:"waaw",word:"\u0648\u0644\u062F",wd:"\u0648\u064E\u0644\u064E\u062F",the:"\u0627\u0644\u0648\u0644\u062F",thed:"\u0627\u0644\u0648\u064E\u0644\u064E\u062F",age:3},{id:"a_girl",thing:"a_girl",letter:"baa",word:"\u0628\u0646\u062A",wd:"\u0628\u0650\u0646\u0652\u062A",the:"\u0627\u0644\u0628\u0646\u062A",thed:"\u0627\u0644\u0628\u0650\u0646\u0652\u062A",age:3},{id:"a_friends",thing:"a_friends",letter:"sad",word:"\u0635\u062D\u0627\u0628",wd:"\u0635\u064F\u062D\u064E\u0627\u0628",the:"\u0627\u0644\u0635\u062D\u0627\u0628",thed:"\u0627\u0644\u0635\u0651\u064F\u062D\u064E\u0627\u0628",age:5},{id:"a_family",thing:"a_family",letter:"ayn",word:"\u0639\u064A\u0644\u0629",wd:"\u0639\u0650\u064A\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u064A\u0644\u0629",thed:"\u0627\u0644\u0639\u0650\u064A\u0644\u064E\u0629",age:5},{id:"a_uncle",thing:"a_uncle",letter:"ayn",word:"\u0639\u0645\u0648",wd:"\u0639\u064E\u0645\u064F\u0651\u0648",the:"\u0627\u0644\u0639\u0645\u0648",thed:"\u0627\u0644\u0639\u064E\u0645\u064F\u0651\u0648",age:5},{id:"o_bread",thing:"o_bread",letter:"ayn",word:"\u0639\u064A\u0634",wd:"\u0639\u064E\u064A\u0652\u0634",the:"\u0627\u0644\u0639\u064A\u0634",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0634",age:3},{id:"o_cheese",thing:"o_cheese",letter:"jeem",word:"\u062C\u0628\u0646\u0629",wd:"\u062C\u064F\u0628\u0652\u0646\u064E\u0629",the:"\u0627\u0644\u062C\u0628\u0646\u0629",thed:"\u0627\u0644\u062C\u064F\u0628\u0652\u0646\u064E\u0629",age:4},{id:"o_egg",thing:"o_egg",letter:"baa",word:"\u0628\u064A\u0636\u0629",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u0636\u0629",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0629",age:3},{id:"o_milk",thing:"o_milk",letter:"laam",word:"\u0644\u0628\u0646",wd:"\u0644\u064E\u0628\u064E\u0646",the:"\u0627\u0644\u0644\u0628\u0646",thed:"\u0627\u0644\u0644\u0651\u064E\u0628\u064E\u0646",age:3},{id:"o_rice",thing:"o_rice",letter:"raa",word:"\u0631\u0632",wd:"\u0631\u064F\u0632\u0651",the:"\u0627\u0644\u0631\u0632",thed:"\u0627\u0644\u0631\u0651\u064F\u0632\u0651",age:4},{id:"o_chicken",thing:"o_chicken",letter:"faa",word:"\u0641\u0631\u0627\u062E",wd:"\u0641\u0650\u0631\u064E\u0627\u062E",the:"\u0627\u0644\u0641\u0631\u0627\u062E",thed:"\u0627\u0644\u0641\u0650\u0631\u064E\u0627\u062E",age:5},{id:"o_juice",thing:"o_juice",letter:"ayn",word:"\u0639\u0635\u064A\u0631",wd:"\u0639\u064E\u0635\u0650\u064A\u0631",the:"\u0627\u0644\u0639\u0635\u064A\u0631",thed:"\u0627\u0644\u0639\u064E\u0635\u0650\u064A\u0631",age:4},{id:"o_water",thing:"o_water",letter:"meem",word:"\u0645\u064A\u0629",wd:"\u0645\u064E\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u064A\u0629",thed:"\u0627\u0644\u0645\u064E\u064A\u064E\u0651\u0629",age:3},{id:"o_cookie",thing:"o_cookie",letter:"baa",word:"\u0628\u0633\u0643\u0648\u062A",wd:"\u0628\u0650\u0633\u0652\u0643\u064F\u0648\u062A",the:"\u0627\u0644\u0628\u0633\u0643\u0648\u062A",thed:"\u0627\u0644\u0628\u0650\u0633\u0652\u0643\u064F\u0648\u062A",age:4},{id:"o_honey",thing:"o_honey",letter:"ayn",word:"\u0639\u0633\u0644",wd:"\u0639\u064E\u0633\u064E\u0644",the:"\u0627\u0644\u0639\u0633\u0644",thed:"\u0627\u0644\u0639\u064E\u0633\u064E\u0644",age:5},{id:"o_soup",thing:"o_soup",letter:"sheen",word:"\u0634\u0648\u0631\u0628\u0629",wd:"\u0634\u064F\u0648\u0631\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0634\u0648\u0631\u0628\u0629",thed:"\u0627\u0644\u0634\u0651\u064F\u0648\u0631\u0652\u0628\u064E\u0629",age:5},{id:"o_pizza",thing:"o_pizza",letter:"baa",word:"\u0628\u064A\u062A\u0632\u0627",wd:"\u0628\u0650\u064A\u062A\u0652\u0632\u064E\u0627",the:"\u0627\u0644\u0628\u064A\u062A\u0632\u0627",thed:"\u0627\u0644\u0628\u0650\u064A\u062A\u0652\u0632\u064E\u0627",age:4},{id:"q_kiwi",thing:"q_kiwi",letter:"kaaf",word:"\u0643\u064A\u0648\u064A",wd:"\u0643\u0650\u064A\u0648\u0650\u064A",the:"\u0627\u0644\u0643\u064A\u0648\u064A",thed:"\u0627\u0644\u0643\u0650\u064A\u0648\u0650\u064A",age:5},{id:"q_melon",thing:"q_melon",letter:"sheen",word:"\u0634\u0645\u0627\u0645",wd:"\u0634\u064E\u0645\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0634\u0645\u0627\u0645",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u064E\u0651\u0627\u0645",age:5},{id:"q_dates",thing:"q_dates",letter:"baa",word:"\u0628\u0644\u062D",wd:"\u0628\u064E\u0644\u064E\u062D",the:"\u0627\u0644\u0628\u0644\u062D",thed:"\u0627\u0644\u0628\u064E\u0644\u064E\u062D",age:5},{id:"q_fig",thing:"q_fig",letter:"taa",word:"\u062A\u064A\u0646",wd:"\u062A\u0650\u064A\u0646",the:"\u0627\u0644\u062A\u064A\u0646",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u0646",age:5},{id:"q_apricot",thing:"q_apricot",letter:"meem",word:"\u0645\u0634\u0645\u0634",wd:"\u0645\u0650\u0634\u0652\u0645\u0650\u0634",the:"\u0627\u0644\u0645\u0634\u0645\u0634",thed:"\u0627\u0644\u0645\u0650\u0634\u0652\u0645\u0650\u0634",age:5},{id:"q_berries",thing:"q_berries",letter:"taa",word:"\u062A\u0648\u062A",wd:"\u062A\u064F\u0648\u062A",the:"\u0627\u0644\u062A\u0648\u062A",thed:"\u0627\u0644\u062A\u0651\u064F\u0648\u062A",age:4},{id:"q_plum",thing:"q_plum",letter:"baa",word:"\u0628\u0631\u0642\u0648\u0642",wd:"\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0631\u0642\u0648\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",age:6},{id:"q_avocado",thing:"q_avocado",letter:"alef",word:"\u0623\u0641\u0648\u0643\u0627\u062F\u0648",wd:"\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",the:"\u0627\u0644\u0623\u0641\u0648\u0643\u0627\u062F\u0648",thed:"\u0627\u0644\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",age:6},{id:"q_peach",thing:"q_peach",letter:"khaa",word:"\u062E\u0648\u062E",wd:"\u062E\u064F\u0648\u062E",the:"\u0627\u0644\u062E\u0648\u062E",thed:"\u0627\u0644\u062E\u064F\u0648\u062E",age:5},{id:"q_cherry",thing:"q_cherry",letter:"kaaf",word:"\u0643\u0631\u0632",wd:"\u0643\u064E\u0631\u064E\u0632",the:"\u0627\u0644\u0643\u0631\u0632",thed:"\u0627\u0644\u0643\u064E\u0631\u064E\u0632",age:4},{id:"q_olives",thing:"q_olives",letter:"zayn",word:"\u0632\u064A\u062A\u0648\u0646",wd:"\u0632\u064E\u064A\u0652\u062A\u064F\u0648\u0646",the:"\u0627\u0644\u0632\u064A\u062A\u0648\u0646",thed:"\u0627\u0644\u0632\u0651\u064E\u064A\u0652\u062A\u064F\u0648\u0646",age:5},{id:"q_coconut",thing:"q_coconut",letter:"noon",word:"\u0646\u0627\u0631\u062C\u064A\u0644",wd:"\u0646\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",the:"\u0627\u0644\u0646\u0627\u0631\u062C\u064A\u0644",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",age:6},{id:"i_ant",thing:"i_ant",letter:"noon",word:"\u0646\u0645\u0644\u0629",wd:"\u0646\u064E\u0645\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u0645\u0644\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0645\u0652\u0644\u064E\u0629",age:4},{id:"i_fly",thing:"i_fly",letter:"dhal",word:"\u0630\u0628\u0627\u0628\u0629",wd:"\u0630\u064F\u0628\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0630\u0628\u0627\u0628\u0629",thed:"\u0627\u0644\u0630\u0651\u064F\u0628\u064E\u0627\u0628\u064E\u0629",age:6},{id:"i_spider",thing:"i_spider",letter:"ayn",word:"\u0639\u0646\u0643\u0628\u0648\u062A",wd:"\u0639\u064E\u0646\u0652\u0643\u064E\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A",thed:"\u0627\u0644\u0639\u064E\u0646\u0652\u0643\u064E\u0628\u064F\u0648\u062A",age:6},{id:"i_worm",thing:"i_worm",letter:"dal",word:"\u062F\u0648\u062F\u0629",wd:"\u062F\u064F\u0648\u062F\u064E\u0629",the:"\u0627\u0644\u062F\u0648\u062F\u0629",thed:"\u0627\u0644\u062F\u0651\u064F\u0648\u062F\u064E\u0629",age:4},{id:"i_eagle",thing:"i_eagle",letter:"noon",word:"\u0646\u0633\u0631",wd:"\u0646\u0650\u0633\u0652\u0631",the:"\u0627\u0644\u0646\u0633\u0631",thed:"\u0627\u0644\u0646\u0651\u0650\u0633\u0652\u0631",age:6},{id:"i_peacock",thing:"i_peacock",letter:"tah",word:"\u0637\u0627\u0648\u0648\u0633",wd:"\u0637\u064E\u0627\u0648\u064F\u0648\u0633",the:"\u0627\u0644\u0637\u0627\u0648\u0648\u0633",thed:"\u0627\u0644\u0637\u0651\u064E\u0627\u0648\u064F\u0648\u0633",age:6},{id:"i_flamingo",thing:"i_flamingo",letter:"faa",word:"\u0641\u0644\u0627\u0645\u0646\u062C\u0648",wd:"\u0641\u0650\u0644\u064E\u0627\u0645\u0650\u0646\u0652\u062C\u064F\u0648",the:"\u0627\u0644\u0641\u0644\u0627\u0645\u0646\u062C\u0648",thed:"\u0627\u0644\u0641\u0650\u0644\u064E\u0627\u0645\u0650\u0646\u0652\u062C\u064F\u0648",age:6},{id:"i_swan",thing:"i_swan",letter:"baa",word:"\u0628\u062C\u0639\u0629",wd:"\u0628\u064E\u062C\u064E\u0639\u064E\u0629",the:"\u0627\u0644\u0628\u062C\u0639\u0629",thed:"\u0627\u0644\u0628\u064E\u062C\u064E\u0639\u064E\u0629",age:6},{id:"i_ostrich",thing:"i_ostrich",letter:"noon",word:"\u0646\u0639\u0627\u0645\u0629",wd:"\u0646\u064E\u0639\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u0639\u0627\u0645\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0639\u064E\u0627\u0645\u064E\u0629",age:6},{id:"i_sparrow",thing:"i_sparrow",letter:"ayn",word:"\u0639\u0635\u0641\u0648\u0631\u0629",wd:"\u0639\u064F\u0635\u0652\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0635\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0639\u064F\u0635\u0652\u0641\u064F\u0648\u0631\u064E\u0629",age:4},{id:"i_bat",thing:"i_bat",letter:"khaa",word:"\u062E\u0641\u0627\u0634",wd:"\u062E\u064F\u0641\u064E\u0651\u0627\u0634",the:"\u0627\u0644\u062E\u0641\u0627\u0634",thed:"\u0627\u0644\u062E\u064F\u0641\u064E\u0651\u0627\u0634",age:6},{id:"i_snail",thing:"i_snail",letter:"haa",word:"\u062D\u0644\u0632\u0648\u0646\u0629",wd:"\u062D\u064E\u0644\u064E\u0632\u064F\u0648\u0646\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0632\u0648\u0646\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u064E\u0632\u064F\u0648\u0646\u064E\u0629",age:5},{id:"z_doctor",thing:"z_doctor",letter:"dal",word:"\u062F\u0643\u062A\u0648\u0631",wd:"\u062F\u064F\u0643\u0652\u062A\u064F\u0648\u0631",the:"\u0627\u0644\u062F\u0643\u062A\u0648\u0631",thed:"\u0627\u0644\u062F\u0651\u064F\u0643\u0652\u062A\u064F\u0648\u0631",age:3},{id:"z_teacher",thing:"z_teacher",letter:"meem",word:"\u0645\u062F\u0631\u0633",wd:"\u0645\u064F\u062F\u064E\u0631\u0650\u0651\u0633",the:"\u0627\u0644\u0645\u062F\u0631\u0633",thed:"\u0627\u0644\u0645\u064F\u062F\u064E\u0631\u0650\u0651\u0633",age:4},{id:"z_police",thing:"z_police",letter:"sheen",word:"\u0634\u0631\u0637\u064A",wd:"\u0634\u064F\u0631\u0652\u0637\u0650\u064A",the:"\u0627\u0644\u0634\u0631\u0637\u064A",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u0652\u0637\u0650\u064A",age:4},{id:"z_firefighter",thing:"z_firefighter",letter:"alef",word:"\u0625\u0637\u0641\u0627\u0626\u064A",wd:"\u0625\u0650\u0637\u0652\u0641\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0625\u0637\u0641\u0627\u0626\u064A",thed:"\u0627\u0644\u0625\u0650\u0637\u0652\u0641\u064E\u0627\u0626\u0650\u064A",age:5},{id:"z_farmer",thing:"z_farmer",letter:"faa",word:"\u0641\u0644\u0627\u062D",wd:"\u0641\u064E\u0644\u064E\u0651\u0627\u062D",the:"\u0627\u0644\u0641\u0644\u0627\u062D",thed:"\u0627\u0644\u0641\u064E\u0644\u064E\u0651\u0627\u062D",age:5},{id:"z_cook",thing:"z_cook",letter:"tah",word:"\u0637\u0628\u0627\u062E",wd:"\u0637\u064E\u0628\u064E\u0651\u0627\u062E",the:"\u0627\u0644\u0637\u0628\u0627\u062E",thed:"\u0627\u0644\u0637\u0651\u064E\u0628\u064E\u0651\u0627\u062E",age:5},{id:"z_driver",thing:"z_driver",letter:"seen",word:"\u0633\u0648\u0627\u0642",wd:"\u0633\u064E\u0648\u064E\u0651\u0627\u0642",the:"\u0627\u0644\u0633\u0648\u0627\u0642",thed:"\u0627\u0644\u0633\u0651\u064E\u0648\u064E\u0651\u0627\u0642",age:5},{id:"z_pilot",thing:"z_pilot",letter:"tah",word:"\u0637\u064A\u0627\u0631",wd:"\u0637\u064E\u064A\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0637\u064A\u0627\u0631",thed:"\u0627\u0644\u0637\u0651\u064E\u064A\u064E\u0651\u0627\u0631",age:5},{id:"z_nurse",thing:"z_nurse",letter:"meem",word:"\u0645\u0645\u0631\u0636\u0629",wd:"\u0645\u064F\u0645\u064E\u0631\u0650\u0651\u0636\u064E\u0629",the:"\u0627\u0644\u0645\u0645\u0631\u0636\u0629",thed:"\u0627\u0644\u0645\u064F\u0645\u064E\u0631\u0650\u0651\u0636\u064E\u0629",age:6},{id:"z_builder",thing:"z_builder",letter:"baa",word:"\u0628\u0646\u0627\u0621",wd:"\u0628\u064E\u0646\u064E\u0651\u0627\u0621",the:"\u0627\u0644\u0628\u0646\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0646\u064E\u0651\u0627\u0621",age:6},{id:"z_singer",thing:"z_singer",letter:"meem",word:"\u0645\u0637\u0631\u0628",wd:"\u0645\u064F\u0637\u0652\u0631\u0650\u0628",the:"\u0627\u0644\u0645\u0637\u0631\u0628",thed:"\u0627\u0644\u0645\u064F\u0637\u0652\u0631\u0650\u0628",age:6},{id:"z_painter",thing:"z_painter",letter:"raa",word:"\u0631\u0633\u0627\u0645",wd:"\u0631\u064E\u0633\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0631\u0633\u0627\u0645",thed:"\u0627\u0644\u0631\u0651\u064E\u0633\u064E\u0651\u0627\u0645",age:5},{id:"m_drum",thing:"m_drum",letter:"tah",word:"\u0637\u0628\u0644\u0629",wd:"\u0637\u064E\u0628\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0637\u0628\u0644\u0629",thed:"\u0627\u0644\u0637\u0651\u064E\u0628\u0652\u0644\u064E\u0629",age:4},{id:"m_guitar",thing:"m_guitar",letter:"jeem",word:"\u062C\u064A\u062A\u0627\u0631",wd:"\u062C\u0650\u064A\u062A\u064E\u0627\u0631",the:"\u0627\u0644\u062C\u064A\u062A\u0627\u0631",thed:"\u0627\u0644\u062C\u0650\u064A\u062A\u064E\u0627\u0631",age:5},{id:"m_piano",thing:"m_piano",letter:"baa",word:"\u0628\u064A\u0627\u0646\u0648",wd:"\u0628\u0650\u064A\u064E\u0627\u0646\u064F\u0648",the:"\u0627\u0644\u0628\u064A\u0627\u0646\u0648",thed:"\u0627\u0644\u0628\u0650\u064A\u064E\u0627\u0646\u064F\u0648",age:5},{id:"m_violin",thing:"m_violin",letter:"kaaf",word:"\u0643\u0645\u0627\u0646",wd:"\u0643\u064E\u0645\u064E\u0627\u0646",the:"\u0627\u0644\u0643\u0645\u0627\u0646",thed:"\u0627\u0644\u0643\u064E\u0645\u064E\u0627\u0646",age:5},{id:"m_flute",thing:"m_flute",letter:"noon",word:"\u0646\u0627\u064A",wd:"\u0646\u064E\u0627\u064A",the:"\u0627\u0644\u0646\u0627\u064A",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u064A",age:6},{id:"m_trumpet",thing:"m_trumpet",letter:"baa",word:"\u0628\u0648\u0642",wd:"\u0628\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0648\u0642",thed:"\u0627\u0644\u0628\u064F\u0648\u0642",age:5},{id:"m_tambourine",thing:"m_tambourine",letter:"dal",word:"\u062F\u0641",wd:"\u062F\u064F\u0641\u0651",the:"\u0627\u0644\u062F\u0641",thed:"\u0627\u0644\u062F\u0651\u064F\u0641\u0651",age:5},{id:"m_oud",thing:"m_oud",letter:"ayn",word:"\u0639\u0648\u062F",wd:"\u0639\u064F\u0648\u062F",the:"\u0627\u0644\u0639\u0648\u062F",thed:"\u0627\u0644\u0639\u064F\u0648\u062F",age:6},{id:"m_mic",thing:"m_mic",letter:"meem",word:"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",wd:"\u0645\u0650\u064A\u0643\u0652\u0631\u064F\u0648\u0641\u064F\u0648\u0646",the:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",thed:"\u0627\u0644\u0645\u0650\u064A\u0643\u0652\u0631\u064F\u0648\u0641\u064F\u0648\u0646",age:5},{id:"m_headphones",thing:"m_headphones",letter:"seen",word:"\u0633\u0645\u0627\u0639\u0629",wd:"\u0633\u064E\u0645\u064E\u0651\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0645\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0651\u0627\u0639\u064E\u0629",age:5},{id:"m_note",thing:"m_note",letter:"noon",word:"\u0646\u0648\u062A\u0629",wd:"\u0646\u064F\u0648\u062A\u064E\u0629",the:"\u0627\u0644\u0646\u0648\u062A\u0629",thed:"\u0627\u0644\u0646\u0651\u064F\u0648\u062A\u064E\u0629",age:6},{id:"m_bell",thing:"m_bell",letter:"jeem",word:"\u062C\u0631\u0633",wd:"\u062C\u064E\u0631\u064E\u0633",the:"\u0627\u0644\u062C\u0631\u0633",thed:"\u0627\u0644\u062C\u064E\u0631\u064E\u0633",age:4},{id:"e_pencil",thing:"e_pencil",letter:"qaaf",word:"\u0642\u0644\u0645",wd:"\u0642\u064E\u0644\u064E\u0645",the:"\u0627\u0644\u0642\u0644\u0645",thed:"\u0627\u0644\u0642\u064E\u0644\u064E\u0645",age:3},{id:"e_book",thing:"e_book",letter:"kaaf",word:"\u0643\u062A\u0627\u0628",wd:"\u0643\u0650\u062A\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u062A\u0627\u0628",thed:"\u0627\u0644\u0643\u0650\u062A\u064E\u0627\u0628",age:3},{id:"e_notebook",thing:"e_notebook",letter:"kaaf",word:"\u0643\u0631\u0627\u0633\u0629",wd:"\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0627\u0633\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",age:4},{id:"e_scissors",thing:"e_scissors",letter:"meem",word:"\u0645\u0642\u0635",wd:"\u0645\u064E\u0642\u064E\u0635",the:"\u0627\u0644\u0645\u0642\u0635",thed:"\u0627\u0644\u0645\u064E\u0642\u064E\u0635",age:5},{id:"e_ruler",thing:"e_ruler",letter:"meem",word:"\u0645\u0633\u0637\u0631\u0629",wd:"\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0645\u0633\u0637\u0631\u0629",thed:"\u0627\u0644\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",age:5},{id:"e_eraser",thing:"e_eraser",letter:"alef",word:"\u0623\u0633\u062A\u064A\u0643\u0629",wd:"\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u062A\u064A\u0643\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",age:5},{id:"e_crayons",thing:"e_crayons",letter:"alef",word:"\u0623\u0644\u0648\u0627\u0646",wd:"\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",the:"\u0627\u0644\u0623\u0644\u0648\u0627\u0646",thed:"\u0627\u0644\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",age:4},{id:"e_board",thing:"e_board",letter:"seen",word:"\u0633\u0628\u0648\u0631\u0629",wd:"\u0633\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0633\u0628\u0648\u0631\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",age:5},{id:"e_map",thing:"e_map",letter:"khaa",word:"\u062E\u0631\u064A\u0637\u0629",wd:"\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",the:"\u0627\u0644\u062E\u0631\u064A\u0637\u0629",thed:"\u0627\u0644\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",age:6},{id:"e_glue",thing:"e_glue",letter:"sad",word:"\u0635\u0645\u063A",wd:"\u0635\u064E\u0645\u0652\u063A",the:"\u0627\u0644\u0635\u0645\u063A",thed:"\u0627\u0644\u0635\u0651\u064E\u0645\u0652\u063A",age:6},{id:"e_desk",thing:"e_desk",letter:"meem",word:"\u0645\u0643\u062A\u0628",wd:"\u0645\u064E\u0643\u0652\u062A\u064E\u0628",the:"\u0627\u0644\u0645\u0643\u062A\u0628",thed:"\u0627\u0644\u0645\u064E\u0643\u0652\u062A\u064E\u0628",age:5},{id:"e_paper",thing:"e_paper",letter:"waaw",word:"\u0648\u0631\u0642\u0629",wd:"\u0648\u064E\u0631\u064E\u0642\u064E\u0629",the:"\u0627\u0644\u0648\u0631\u0642\u0629",thed:"\u0627\u0644\u0648\u064E\u0631\u064E\u0642\u064E\u0629",age:4},{id:"g_rectangle",thing:"g_rectangle",letter:"meem",word:"\u0645\u0633\u062A\u0637\u064A\u0644",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",the:"\u0627\u0644\u0645\u0633\u062A\u0637\u064A\u0644",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",age:4},{id:"g_oval",thing:"g_oval",letter:"baa",word:"\u0628\u064A\u0636\u0627\u0648\u064A",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",the:"\u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",age:5},{id:"g_diamond",thing:"g_diamond",letter:"meem",word:"\u0645\u0639\u064A\u0646",wd:"\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",the:"\u0627\u0644\u0645\u0639\u064A\u0646",thed:"\u0627\u0644\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",age:5},{id:"g_hexagon",thing:"g_hexagon",letter:"seen",word:"\u0633\u062F\u0627\u0633\u064A",wd:"\u0633\u064F\u062F\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u0633\u062F\u0627\u0633\u064A",thed:"\u0627\u0644\u0633\u0651\u064F\u062F\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_pentagon",thing:"g_pentagon",letter:"khaa",word:"\u062E\u0645\u0627\u0633\u064A",wd:"\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A",thed:"\u0627\u0644\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_arrow",thing:"g_arrow",letter:"seen",word:"\u0633\u0647\u0645",wd:"\u0633\u064E\u0647\u0652\u0645",the:"\u0627\u0644\u0633\u0647\u0645",thed:"\u0627\u0644\u0633\u0651\u064E\u0647\u0652\u0645",age:4},{id:"g_cube",thing:"g_cube",letter:"meem",word:"\u0645\u0643\u0639\u0628",wd:"\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",the:"\u0627\u0644\u0645\u0643\u0639\u0628",thed:"\u0627\u0644\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",age:5},{id:"g_sphere",thing:"g_sphere",letter:"kaaf",word:"\u0643\u0631\u0629",wd:"\u0643\u064F\u0631\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0629",age:4},{id:"g_cone",thing:"g_cone",letter:"meem",word:"\u0645\u062E\u0631\u0648\u0637",wd:"\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",the:"\u0627\u0644\u0645\u062E\u0631\u0648\u0637",thed:"\u0627\u0644\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",age:6},{id:"g_cylinder",thing:"g_cylinder",letter:"alef",word:"\u0623\u0633\u0637\u0648\u0627\u0646\u0629",wd:"\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u0637\u0648\u0627\u0646\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",age:6},{id:"g_ring",thing:"g_ring",letter:"haa",word:"\u062D\u0644\u0642\u0629",wd:"\u062D\u064E\u0644\u0652\u0642\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0642\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0642\u064E\u0629",age:5},{id:"g_heart",thing:"g_heart",letter:"qaaf",word:"\u0642\u0644\u0628",wd:"\u0642\u064E\u0644\u0652\u0628",the:"\u0627\u0644\u0642\u0644\u0628",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0628",age:3},{id:"v_tomato",thing:"v_tomato",letter:"tah",word:"\u0637\u0645\u0627\u0637\u0645",wd:"\u0637\u064E\u0645\u064E\u0627\u0637\u0650\u0645",the:"\u0627\u0644\u0637\u0645\u0627\u0637\u0645",thed:"\u0627\u0644\u0637\u0651\u064E\u0645\u064E\u0627\u0637\u0650\u0645",age:4},{id:"v_cucumber",thing:"v_cucumber",letter:"khaa",word:"\u062E\u064A\u0627\u0631",wd:"\u062E\u0650\u064A\u064E\u0627\u0631",the:"\u0627\u0644\u062E\u064A\u0627\u0631",thed:"\u0627\u0644\u062E\u0650\u064A\u064E\u0627\u0631",age:4},{id:"v_potato",thing:"v_potato",letter:"baa",word:"\u0628\u0637\u0627\u0637\u0633",wd:"\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",the:"\u0627\u0644\u0628\u0637\u0627\u0637\u0633",thed:"\u0627\u0644\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",age:4},{id:"v_onion",thing:"v_onion",letter:"baa",word:"\u0628\u0635\u0644",wd:"\u0628\u064E\u0635\u064E\u0644",the:"\u0627\u0644\u0628\u0635\u0644",thed:"\u0627\u0644\u0628\u064E\u0635\u064E\u0644",age:5},{id:"v_eggplant",thing:"v_eggplant",letter:"baa",word:"\u0628\u0627\u0630\u0646\u062C\u0627\u0646",wd:"\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",the:"\u0627\u0644\u0628\u0627\u0630\u0646\u062C\u0627\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",age:5},{id:"v_pepper",thing:"v_pepper",letter:"faa",word:"\u0641\u0644\u0641\u0644",wd:"\u0641\u0650\u0644\u0652\u0641\u0650\u0644",the:"\u0627\u0644\u0641\u0644\u0641\u0644",thed:"\u0627\u0644\u0641\u0650\u0644\u0652\u0641\u0650\u0644",age:5},{id:"v_lettuce",thing:"v_lettuce",letter:"khaa",word:"\u062E\u0633",wd:"\u062E\u064E\u0633",the:"\u0627\u0644\u062E\u0633",thed:"\u0627\u0644\u062E\u064E\u0633",age:5},{id:"v_broccoli",thing:"v_broccoli",letter:"baa",word:"\u0628\u0631\u0648\u0643\u0644\u064A",wd:"\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",the:"\u0627\u0644\u0628\u0631\u0648\u0643\u0644\u064A",thed:"\u0627\u0644\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",age:5},{id:"v_peas",thing:"v_peas",letter:"baa",word:"\u0628\u0633\u0644\u0629",wd:"\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0628\u0633\u0644\u0629",thed:"\u0627\u0644\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",age:6},{id:"v_pumpkin",thing:"v_pumpkin",letter:"qaaf",word:"\u0642\u0631\u0639",wd:"\u0642\u064E\u0631\u0652\u0639",the:"\u0627\u0644\u0642\u0631\u0639",thed:"\u0627\u0644\u0642\u064E\u0631\u0652\u0639",age:5},{id:"v_garlic",thing:"v_garlic",letter:"thaa",word:"\u062B\u0648\u0645",wd:"\u062B\u064F\u0648\u0645",the:"\u0627\u0644\u062B\u0648\u0645",thed:"\u0627\u0644\u062B\u0651\u064F\u0648\u0645",age:6},{id:"v_mushroom",thing:"v_mushroom",letter:"faa",word:"\u0641\u0637\u0631",wd:"\u0641\u064F\u0637\u0652\u0631",the:"\u0627\u0644\u0641\u0637\u0631",thed:"\u0627\u0644\u0641\u064F\u0637\u0652\u0631",age:6},{id:"t_rain",thing:"t_rain",letter:"meem",word:"\u0645\u0637\u0631",wd:"\u0645\u064E\u0637\u064E\u0631",the:"\u0627\u0644\u0645\u0637\u0631",thed:"\u0627\u0644\u0645\u064E\u0637\u064E\u0631",age:4},{id:"t_snow",thing:"t_snow",letter:"thaa",word:"\u062B\u0644\u062C",wd:"\u062B\u064E\u0644\u0652\u062C",the:"\u0627\u0644\u062B\u0644\u062C",thed:"\u0627\u0644\u062B\u0651\u064E\u0644\u0652\u062C",age:4},{id:"t_wind",thing:"t_wind",letter:"haa2",word:"\u0647\u0648\u0627",wd:"\u0647\u064E\u0648\u064E\u0627",the:"\u0627\u0644\u0647\u0648\u0627",thed:"\u0627\u0644\u0647\u064E\u0648\u064E\u0627",age:5},{id:"t_thunder",thing:"t_thunder",letter:"raa",word:"\u0631\u0639\u062F",wd:"\u0631\u064E\u0639\u0652\u062F",the:"\u0627\u0644\u0631\u0639\u062F",thed:"\u0627\u0644\u0631\u0651\u064E\u0639\u0652\u062F",age:6},{id:"t_lightning",thing:"t_lightning",letter:"baa",word:"\u0628\u0631\u0642",wd:"\u0628\u064E\u0631\u0652\u0642",the:"\u0627\u0644\u0628\u0631\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642",age:6},{id:"t_umbrella",thing:"t_umbrella",letter:"sheen",word:"\u0634\u0645\u0633\u064A\u0629",wd:"\u0634\u064E\u0645\u0652\u0633\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0634\u0645\u0633\u064A\u0629",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u0652\u0633\u0650\u064A\u064E\u0651\u0629",age:4},{id:"t_flake",thing:"t_flake",letter:"noon",word:"\u0646\u062F\u0641\u0629",wd:"\u0646\u064F\u062F\u0652\u0641\u064E\u0629",the:"\u0627\u0644\u0646\u062F\u0641\u0629",thed:"\u0627\u0644\u0646\u0651\u064F\u062F\u0652\u0641\u064E\u0629",age:6},{id:"t_flower",thing:"t_flower",letter:"zayn",word:"\u0632\u0647\u0631\u0629",wd:"\u0632\u064E\u0647\u0652\u0631\u064E\u0629",the:"\u0627\u0644\u0632\u0647\u0631\u0629",thed:"\u0627\u0644\u0632\u0651\u064E\u0647\u0652\u0631\u064E\u0629",age:3},{id:"t_leaves",thing:"t_leaves",letter:"alef",word:"\u0623\u0648\u0631\u0627\u0642",wd:"\u0623\u064E\u0648\u0652\u0631\u064E\u0627\u0642",the:"\u0627\u0644\u0623\u0648\u0631\u0627\u0642",thed:"\u0627\u0644\u0623\u064E\u0648\u0652\u0631\u064E\u0627\u0642",age:5},{id:"t_hot",thing:"t_hot",letter:"haa",word:"\u062D\u0631",wd:"\u062D\u064E\u0631\u0651",the:"\u0627\u0644\u062D\u0631",thed:"\u0627\u0644\u062D\u064E\u0631\u0651",age:5},{id:"t_cold",thing:"t_cold",letter:"baa",word:"\u0628\u0631\u062F",wd:"\u0628\u064E\u0631\u0652\u062F",the:"\u0627\u0644\u0628\u0631\u062F",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u062F",age:5},{id:"t_mountain",thing:"t_mountain",letter:"jeem",word:"\u062C\u0628\u0644",wd:"\u062C\u064E\u0628\u064E\u0644",the:"\u0627\u0644\u062C\u0628\u0644",thed:"\u0627\u0644\u062C\u064E\u0628\u064E\u0644",age:5}];var s_="../art/";var zl=new Map;function r_(i){if(zl.has(i))return zl.get(i);let t=new $r().load(`${s_}${i}.webp`);return t.colorSpace=ye,t.anisotropy=4,t.generateMipmaps=!0,t.minFilter=Ln,zl.set(i,t),t}function ed(i,t,e=1){if(e>1){let l=new le;for(let c=e-1;c>=0;c--){let h=ed(i,t,1);h.position.z=-c*.028;let d=c===0?1:Math.max(.35,.78-c*.07);h.material=h.material.clone(),h.material.color.setScalar(d),l.add(h)}return l}let[n,s]=fa[i],r=new yn(t*n/s,t);r.translate(0,t/2,0);let a=new ve({map:r_(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:Ge}),o=new lt(r,a);return o.userData.name=i,o}var os={apple:"apple_n",banana:"banana_n",ball:"ball",crow:"crow",envelope:"envelope",lemon:"lemon",crescent:"crescent",corn:"corn",orange:"orange",grapes:"grapes_n",strawberry:"strawberry",watermelon:"watermelon",pineapple:"pineapple",mango:"mango",carrot:"carrot",cow:"cow",sheep:"sheep_n",dog:"dog",cat:"cat_n",giraffe:"giraffe_n",lion:"lion",elephant:"elephant2",horse:"horse_n",pig:"pig",bunny:"rabbit_n",rabbit:"rabbit_n",duck:"duck_n",hen:"hen_n",chick:"chick",bee:"bee_n",butterfly:"butterfly_n",monkey:"monkey",fish:"clownfish_n",dove:"dove_n",frog:"frog_n",panda:"panda",tiger:"tiger",zebra:"zebra",penguin:"penguin",parrot:"parrot",fox:"fox",camel:"camel",sun:"sun",rose:"rose",pomegranate:"pomegranate",rocket:"rocket",car:"car",bus:"bus",train:"train",plane:"plane_n",boat:"boat",firetruck:"firetruck",ambulance:"ambulance",police:"police",helicopter:"helicopter"},nd=[...td.map(i=>i.thing),"c_schoolbus","c_citybus","c_taxi","c_tram","c_bulldozer","h_bike","d_jeep","d_balloon","d_boat","d_donkeycart","h_towel","h_shoes","h_toybox","h_broom","h_bin","h_wardrobe","h_clock","h_wateringcan","h_ball","h_table","h_sink","h_bed","h_backpack","h_toothbrush","f_haypile","f_eggs"];for(let i of nd)os[i]=i;for(let i of Object.keys(fa))os[i]||(os[i]=i);var id=new Set(["cow","sheep","dog","cat","giraffe","lion","elephant","elephant2","fox","camel","crow","sheep_n","cat_n","giraffe_n","horse_n","rabbit_n","duck_n","hen_n","bee_n","butterfly_n","clownfish_n","croc","horse","pig","rabbit","mallard","hen","chick","bee","butterfly","frog_n","dove_n","grapes_n","plane_n","monkey","clownfish","pigeon","frog","panda","tiger","zebra","penguin","parrot"]);for(let i of nd)id.add(i);var a_=i=>!!os[i]&&!!fa[os[i]];function sd(i){if(!a_(i))return null;let t=new le,e=os[i],n=id.has(e)?1.5:1;return t.add(ed(e,n)),t.userData.id=i,t.userData.art=!0,t.userData.inner=new le,t}var X=(i,t=.55)=>new te({color:i,roughness:t}),q=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let l=new lt(new Se(i,18,14),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l.castShadow=!0,l},me=(i,t,e,n,s=0,r=0,a=0)=>{let o=new lt(new We(i,t,e,14),n);return o.position.set(s,r,a),o.castShadow=!0,o},Me=(i,t,e,n=0,s=0,r=0)=>{let a=new lt(new en(i,t,14),e);return a.position.set(n,s,r),a.castShadow=!0,a},Xe=(i,t,e,n=.12,s=.05)=>{for(let r of[-1,1])i.add(q(s,X(1710628,.3),r*n,t,e)),i.add(q(s*.35,new ve({color:16777215}),r*n+s*.3,t+s*.4,e+s*.7))},fn=(i,t,e,n,s=.28,r=.07)=>{for(let a of e)for(let o of n)i.add(me(r,r*.9,s,t,a,s/2,o))},Hl={duck(i){let t=X(16767034,.4),e=X(16747050);i.add(q(.42,t,0,.45,0,1,.9,1.15)),i.add(q(.27,t,0,.9,.3));let n=q(.13,e,0,.84,.55,1.3,.5,1.1);i.add(n),Xe(i,.97,.5,.12),i.add(q(.2,X(16761370),.38,.5,-.02,.4,.8,1)),i.add(q(.2,X(16761370),-.38,.5,-.02,.4,.8,1)),i.add(Me(.14,.3,t,0,.62,-.5)).rotation.x=-1.1},butterfly(i){i.add(me(.05,.05,.6,X(4864602),0,.5,0)).rotation.x=Math.PI/2,i.children[0].rotation.x=0,i.add(q(.09,X(4864602),0,.85,0));let t=new le;for(let[e,n,s]of[[-1,1,16739e3],[1,1,16739e3],[-1,-1,12090111],[1,-1,12090111]]){let r=q(.38,X(s,.4),e*.36,.62+n*.18,0,1,1,.12);t.add(r,q(.1,X(16777215),e*.42,.62+n*.2,.06,1,1,.3))}i.add(t),i.userData.wings=t;for(let e of[-1,1]){let n=me(.012,.012,.3,X(4864602),e*.08,1.05,0);n.rotation.z=-e*.4,i.add(n)}},fox(i){let t=X(15764010),e=X(16774376),n=X(4860442);i.add(q(.4,t,0,.5,-.05,.9,.85,1.25)),i.add(q(.3,t,0,.88,.38,1.1,.95,1)),i.add(q(.2,e,0,.8,.55,1.2,.7,1)),i.add(q(.05,n,0,.84,.72));for(let s of[-1,1]){let r=Me(.11,.32,t,s*.2,1.2,.34);r.rotation.z=-s*.2,i.add(r),i.add(Me(.05,.2,n,s*.2,1.18,.37)).rotation.z=-s*.2}Xe(i,.95,.62,.12),i.add(q(.18,t,0,.55,-.62,.8,.8,1.7)).rotation.x=.5,i.add(q(.14,e,0,.78,-.95,.9,.9,1.2)),fn(i,n,[-.2,.2],[.25,-.35],.3)},camel(i){let t=X(14198888),e=X(12093512);i.add(q(.42,t,0,.78,0,.85,.8,1.35)),i.add(q(.22,t,0,1.2,-.2)),i.add(q(.2,t,0,1.18,.28));let n=me(.12,.17,.62,t,0,1.2,.58);n.rotation.x=.5,i.add(n),i.add(q(.17,t,0,1.55,.78,.9,.9,1.3)),i.add(q(.05,X(1710628),0,1.6,.93)),Xe(i,1.6,.76,.1,.035),fn(i,e,[-.22,.22],[.42,-.42],.55,.08),i.add(me(.025,.025,.35,e,0,.7,-.62)).rotation.x=.3},horse(i){let t=X(11037242),e=X(3810328),n=X(16774376);i.add(q(.38,t,0,.78,0,.8,.8,1.4));let s=me(.14,.2,.6,t,0,1.15,.5);s.rotation.x=.55,i.add(s),i.add(q(.2,t,0,1.5,.7,.85,.95,1.5)),i.add(q(.12,n,0,1.45,.88,.8,.7,1));for(let r of[-1,1])i.add(Me(.07,.2,t,r*.1,1.72,.58));Xe(i,1.55,.74,.14,.035),i.add(q(.1,e,0,1.55,.45,.5,1.6,.9)).rotation.x=.55,fn(i,t,[-.2,.2],[.42,-.45],.55,.075),i.add(Me(.1,.55,e,0,.85,-.75)).rotation.x=2.6},sheep(i){let t=X(16775920,.9),e=X(3816004);for(let[n,s,r,a]of[[0,.62,0,.42],[-.28,.6,.1,.3],[.28,.6,.1,.3],[0,.85,.05,.3],[-.2,.6,-.3,.3],[.2,.6,-.3,.3],[0,.52,.3,.3]])i.add(q(a,t,n,s,r));i.add(q(.22,e,0,.72,.5,.95,1.05,1.1));for(let n of[-1,1])i.add(q(.1,e,n*.24,.8,.45,1.4,.7,.5));Xe(i,.78,.68,.09,.03),fn(i,e,[-.18,.18],[.22,-.25],.3,.06)},hen(i){let t=X(16774376,.7),e=X(15216682),n=X(16752682);i.add(q(.42,t,0,.55,0,1,.95,1.1)),i.add(q(.24,t,0,1,.32)),i.add(q(.12,n,0,.95,.56,.9,.7,1.4));for(let s=0;s<3;s++)i.add(q(.07,e,0,1.28-Math.abs(s-1)*.04,.3+(s-1)*.1));i.add(q(.06,e,0,.82,.55,.7,1.4,.7)),Xe(i,1.03,.5,.11,.035),i.add(Me(.22,.5,t,0,.85,-.5)).rotation.x=-.6,i.add(q(.2,X(15786184),.4,.55,0,.35,.8,1)),i.add(q(.2,X(15786184),-.4,.55,0,.35,.8,1)),fn(i,n,[-.12,.12],[0],.2,.03)},sun(i){let t=X(16765466,.3);i.add(q(.45,t,0,.7,0));for(let n=0;n<10;n++){let s=n/10*Math.PI*2,r=Me(.09,.32,X(16754714),Math.cos(s)*.68,.7+Math.sin(s)*.68,0);r.rotation.z=s-Math.PI/2,i.add(r)}Xe(i,.78,.42,.15,.045);let e=new lt(new Pe(.15,.025,6,14,Math.PI),X(12073498));e.position.set(0,.6,.43),e.rotation.z=Math.PI,i.add(e);for(let n of[-1,1])i.add(q(.07,X(16751210),n*.28,.62,.38,1,.7,.5))},bee(i){let t=X(16765466),e=X(2763306);i.add(q(.4,t,0,.5,0,.9,.85,1.25));for(let n of[-.1,.2,-.38]){let s=q(.37-Math.abs(n)*.2,e,0,.5,n,.9,.85,.2);i.add(s)}i.add(q(.22,t,0,.62,.52)),Xe(i,.68,.68,.1,.05);for(let n of[-1,1]){i.add(q(.22,X(13627135,.2),n*.32,.95,0,.9,.35,1.1)).userData.wing=n;let s=me(.012,.012,.3,e,n*.08,.95,.62);s.rotation.z=-n*.4,s.rotation.x=.3,i.add(s)}i.add(Me(.06,.2,e,0,.45,-.62)).rotation.x=-Math.PI/2},heart(i){let t=new lt(Qh("heart",.4,.09),new te({color:16726634,roughness:.25}));t.scale.setScalar(.62),t.position.y=.55,t.castShadow=!0,i.add(t),i.add(q(.07,new ve({color:16765148}),-.2,.72,.28,1,1.4,.5))},rose(i){let t=X(15214666,.45),e=X(3844170);i.add(me(.04,.05,.75,e,0,.38,0));for(let[n,s]of[[-1,.35],[1,.5]]){let r=q(.16,e,n*.2,s,0,1.6,.3,.8);r.rotation.z=n*.4,i.add(r)}i.add(q(.3,t,0,.95,0,1,.9,1));for(let n=0;n<5;n++){let s=n/5*Math.PI*2;i.add(q(.18,X(16730730,.45),Math.cos(s)*.24,.98,Math.sin(s)*.24,1,1.1,.6)).rotation.y=-s}i.add(q(.14,X(13113914),0,1.05,0))},dog(i){let t=X(13144138),e=X(16774376),n=X(8014370);i.add(q(.4,t,0,.55,-.05,.85,.8,1.3)),i.add(q(.3,t,0,.95,.4)),i.add(q(.18,e,0,.88,.62,1,.8,1.1)),i.add(q(.06,X(1710628),0,.93,.78));for(let s of[-1,1])i.add(q(.13,n,s*.3,.95,.35,.6,1.5,.9));Xe(i,1.02,.62,.12,.045),fn(i,t,[-.2,.2],[.28,-.38],.32,.08),i.add(Me(.07,.4,t,0,.8,-.65)).rotation.x=-2.2,i.add(q(.1,X(16743066),0,.74,.7,.8,.4,1.2))},monkey(i){let t=X(10119738),e=X(15782048);i.add(q(.38,t,0,.55,0,.9,1,.9)),i.add(q(.3,t,0,1.05,.05)),i.add(q(.2,e,0,.98,.25,1.2,.9,.6)),i.add(q(.05,X(3811866),0,1,.36)),Xe(i,1.12,.27,.1,.04);for(let s of[-1,1])i.add(q(.14,t,s*.33,1.08,0)),i.add(q(.09,e,s*.33,1.08,.05)),i.add(q(.1,t,s*.5,.45,.12,.8,1.6,.8));i.add(q(.24,e,0,.5,.25,.9,1,.5)),fn(i,t,[-.18,.18],[.05],.3,.09);let n=new lt(new Pe(.3,.05,8,16,Math.PI*1.4),t);n.position.set(0,.5,-.4),n.rotation.y=Math.PI/2,i.add(n)},cow(i){let t=X(16775920),e=X(2763306),n=X(16756920);i.add(q(.45,t,0,.78,0,.9,.85,1.4)),i.add(q(.18,e,-.15,.95,.1,1,1,.9)),i.add(q(.15,e,.2,.7,-.2,1,1,.9)),i.add(q(.3,t,0,1,.62)),i.add(q(.2,n,0,.9,.85,1.1,.8,.8));for(let s of[-1,1])i.add(q(.04,X(1710628),s*.08,.92,1)),i.add(Me(.05,.2,X(16312512),s*.2,1.38,.62)).rotation.z=-s*.4,i.add(q(.11,e,s*.32,1.12,.6,1.4,.6,.8));Xe(i,1.12,.84,.15,.04),fn(i,t,[-.22,.22],[.4,-.45],.45,.09),i.add(me(.025,.025,.5,t,0,.7,-.7)).rotation.x=.3},bear(i){let t=X(9067066),e=X(15255704);i.add(q(.46,t,0,.55,0,1,1,.9)),i.add(q(.32,t,0,1.15,.05)),i.add(q(.18,e,0,1.08,.28,1.1,.8,.8)),i.add(q(.06,X(1710628),0,1.13,.42,1.2,.8,1));for(let n of[-1,1])i.add(q(.12,t,n*.26,1.42,0)),i.add(q(.07,e,n*.26,1.42,.07)),i.add(q(.14,t,n*.45,.3,.25,.8,1,1.2));Xe(i,1.22,.3,.11,.045),i.add(q(.3,e,0,.5,.35,.9,1,.5));for(let n of[-1,1])i.add(q(.12,t,n*.42,.55,.15,.8,1.6,.8))},mouse(i){let t=X(12105928),e=X(16756928);i.add(q(.32,t,0,.36,0,.9,.85,1.3)),i.add(q(.22,t,0,.45,.35,.9,.9,1.2)),i.add(q(.05,e,0,.44,.58));for(let s of[-1,1])i.add(q(.14,t,s*.2,.68,.22,1,1,.3)),i.add(q(.09,e,s*.2,.68,.25,1,1,.3));Xe(i,.52,.5,.09,.035);let n=new lt(new Pe(.3,.025,6,16,Math.PI*1.2),e);n.position.set(0,.15,-.55),n.rotation.set(0,Math.PI/2,0),i.add(n),fn(i,t,[-.15,.15],[.15,-.2],.12,.05)},carrot(i){let t=Me(.22,.95,X(16747034),0,.5,0);t.rotation.z=Math.PI,i.add(t);for(let e of[-.07,0,.07])i.add(Me(.06,.3,X(3844170),e,1.15,0)).rotation.z=e*3},bone(i){let t=X(16774368);i.add(me(.1,.1,.8,t,0,.3,0)).rotation.z=Math.PI/2;for(let e of[-.42,.42])for(let n of[-.1,.1])i.add(q(.14,t,e,.3,n))},grass(i){for(let t=0;t<9;t++){let e=t/9*Math.PI*2,n=Me(.07,.8+t%3*.15,X(t%2?4900954:3844170),Math.cos(e)*.18,.4,Math.sin(e)*.18);n.rotation.z=Math.cos(e)*.3,n.rotation.x=Math.sin(e)*.3,i.add(n)}},honey(i){i.add(me(.32,.36,.55,X(16758810,.2),0,.3,0)),i.add(me(.34,.34,.08,X(9067050),0,.6,0)),i.add(q(.13,X(16762938,.2),.2,.55,.1,1,.6,1));let t=new lt(new yn(.4,.28),X(16774360));t.position.set(0,.32,.37),i.add(t)},cheese(i){let t=X(16765498,.5),e=me(.5,.5,.4,t,0,.25,0);i.add(e),e.geometry=new We(.5,.5,.4,3),e.rotation.y=.5;for(let[n,s,r]of[[.1,.3,.3],[-.2,.2,.2],[.25,.45,0],[-.05,.46,-.1]])i.add(q(.07,X(15247386),n,s,r))},seeds(i){for(let t=0;t<18;t++)i.add(q(.06,X(t%3?13148240:15257720),Math.cos(t*2.4)*.28*(.4+t%5/6),.07+t%4*.05,Math.sin(t*2.4)*.28*(.4+t%5/6),1,.7,1.4))},pomegranate(i){let t=X(13113402,.35);i.add(q(.42,t,0,.45,0)),i.add(me(.12,.16,.12,X(9048616),0,.88,0));for(let e=0;e<5;e++){let n=e/5*Math.PI*2;i.add(Me(.05,.14,X(9048616),Math.cos(n)*.1,.98,Math.sin(n)*.1))}i.add(q(.08,new ve({color:16747168}),-.15,.62,.34,1,1.3,.5))},giraffe(i){let t=X(16764746),e=X(12089386);i.add(q(.38,t,0,.78,0,.8,.8,1.3));for(let[s,r,a]of[[.2,.85,.1],[-.2,.7,-.2],[.18,.7,-.3],[-.15,.9,.25]])i.add(q(.09,e,s,r,a,1,1,.5));let n=me(.12,.17,.95,t,0,1.35,.4);n.rotation.x=.18,i.add(n),i.add(q(.2,t,0,1.88,.5,.9,.95,1.3)),i.add(q(.11,X(15782040),0,1.82,.7,1,.8,1));for(let s of[-1,1])i.add(me(.02,.02,.2,e,s*.09,2.1,.45)),i.add(q(.04,e,s*.09,2.22,.45)),i.add(q(.07,t,s*.2,1.95,.4,1.3,.6,.5));Xe(i,1.92,.64,.12,.035);for(let s of[-1,1])i.add(q(.09,e,s*.06,1.5,.45,1,1,.4));fn(i,t,[-.2,.2],[.32,-.38],.55,.07)},corn(i){i.add(q(.26,X(16765466,.4),0,.55,0,1,1.9,1));for(let t=0;t<7;t++)for(let e=0;e<8;e++){let n=e/8*Math.PI*2+t*.4;i.add(q(.055,X(16760330,.4),Math.cos(n)*.25,.15+t*.14,Math.sin(n)*.25))}for(let t of[.3,2.4,4.4]){let e=Me(.18,.7,X(4892746),Math.cos(t)*.2,.35,Math.sin(t)*.2);e.rotation.z=Math.cos(t)*.35,e.rotation.x=Math.sin(t)*.35,e.scale.z=.35,i.add(e)}},rocket(i){let t=X(16053503,.3),e=X(15216682,.4);i.add(me(.26,.3,1,t,0,.7,0)),i.add(Me(.26,.45,e,0,1.43,0)),i.add(q(.12,X(4892927,.1),0,.85,.24,1,1,.5));for(let n=0;n<3;n++){let s=n/3*Math.PI*2,r=q(.2,e,Math.cos(s)*.3,.3,Math.sin(s)*.3,.4,1.4,1);r.rotation.y=-s,i.add(r)}i.add(Me(.15,.4,new ve({color:16754714}),0,.02,0)).rotation.x=Math.PI},envelope(i){let t=document.createElement("canvas");t.width=256,t.height=168;let e=t.getContext("2d");e.fillStyle="#fff6e0",e.fillRect(0,0,256,168),e.strokeStyle="#d8c8a0",e.lineWidth=4,e.beginPath(),e.moveTo(0,0),e.lineTo(128,96),e.lineTo(256,0),e.stroke(),e.beginPath(),e.moveTo(0,168),e.lineTo(96,80),e.moveTo(256,168),e.lineTo(160,80),e.stroke(),e.fillStyle="#e8304a",e.beginPath(),e.arc(128,96,22,0,Math.PI*2),e.fill(),e.fillStyle="#ffd0d8",e.font="900 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u2665",128,97);let n=new ei(t);n.colorSpace=ye;let s=new lt(new ce(1.05,.7,.07),[X(15787208),X(15787208),X(15787208),X(15787208),new te({map:n,roughness:.7}),X(15260864)]);s.position.y=.5,s.rotation.x=-.12,s.castShadow=!0,i.add(s)},crow(i){let t=X(1842734,.25),e=X(2764880,.3),n=X(4868696,.4);i.add(q(.42,t,0,.62,0,.85,.8,1.35)),i.add(q(.3,t,0,1,.5)),i.add(q(.13,n,0,.93,.86,.9,.8,1.9));for(let r of[-1,1]){i.add(q(.075,X(16777215,.2),r*.2,1.07,.66)),i.add(q(.04,X(0,.1),r*.22,1.07,.71));let a=q(.3,e,r*.34,.62,-.05,.38,.85,1.5);a.rotation.z=-r*.25,i.add(a)}let s=Me(.2,.75,e,0,.5,-.75,4);s.rotation.x=-1.7,s.scale.set(1,1,.3),i.add(s),fn(i,X(3816008),[-.1,.1],[.05],.3,.03)},lemon(i){let t=X(16771146,.4);i.add(q(.4,t,0,.4,0,1.25,.95,.95)),i.add(q(.1,t,.5,.4,0,1,.8,.8)),i.add(q(.1,t,-.5,.4,0,1,.8,.8));let e=q(.2,X(3844170),.1,.82,0,1.6,.25,.8);e.rotation.z=.4,i.add(e)},crescent(i){let t=new te({color:16767050,roughness:.3,emissive:16758810,emissiveIntensity:.35}),e=new lt(new Pe(.5,.17,12,28,Math.PI*1.5),t);e.position.y=.65,e.rotation.z=Math.PI*.75,e.castShadow=!0,i.add(e),i.add(q(.12,t,.55,.95,0))},dove(i){let t=X(16775924,.5);i.add(q(.38,t,0,.5,0,.9,.9,1.25)),i.add(q(.22,t,0,.92,.3)),i.add(Me(.06,.2,X(16753178),0,.9,.55)).rotation.x=Math.PI/2,Xe(i,.97,.45,.1,.035);for(let e of[-1,1]){let n=q(.28,t,e*.36,.78,-.05,.4,1.4,1.1);n.rotation.z=-e*.5,i.add(n)}i.add(Me(.16,.5,t,0,.5,-.5)).rotation.x=-1.4},bed(i){i.add(new lt(new ce(1.5,.25,.95),X(13141578)).translateY(.2)),i.add(new lt(new ce(1.4,.2,.88),X(16774376)).translateY(.42)),i.add(new lt(new ce(1,.16,.9),X(4892927)).translateX(.18).translateY(.55)),i.add(q(.28,X(16777215),-.5,.62,0,1.2,.5,1.4)),i.add(new lt(new ce(.08,.7,.95),X(11037242)).translateX(-.75).translateY(.5))},soap(i){i.add(new lt(new ce(.7,.28,.45),X(16751304,.3)).translateY(.2));for(let[t,e,n,s]of[[.2,.6,.1,.18],[-.15,.78,0,.13],[.35,.85,-.1,.1],[-.35,.55,.15,.1],[.05,1,.05,.09]])i.add(q(s,new te({color:13627135,transparent:!0,opacity:.6,roughness:.05}),t,e,n))},bowl(i){let t=new lt(new Se(.5,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new te({color:4892927,roughness:.3,side:Ge}));t.position.y=.55,i.add(t),i.add(me(.5,.5,.03,X(16777215),0,.55,0)),i.add(me(.46,.46,.03,X(16774360),0,.52,0));for(let n=0;n<7;n++)i.add(q(.09,X(15249482),Math.cos(n*2.1)*.25,.6,Math.sin(n*2.1)*.25,1,.7,1));let e=me(.025,.025,.6,X(13158608),.35,.75,.1);e.rotation.z=-.6,i.add(e)},backpack(i){i.add(q(.45,X(16734794,.5),0,.5,0,1,1.1,.7)),i.add(q(.3,X(16758826,.5),0,.35,.28,1,.8,.5));for(let e of[-1,1])i.add(new lt(new Pe(.3,.04,8,14,Math.PI),X(3816010))).position.set(e*.35,.55,.25);let t=new lt(new Pe(.12,.03,8,14,Math.PI),X(3816010));t.position.set(0,1,0),i.add(t)},pot(i){i.add(me(.45,.4,.55,X(13158612,.25),0,.35,0)),i.add(me(.47,.47,.06,X(15263984,.25),0,.66,0)),i.add(q(.08,X(16734794),0,.74,0));for(let t of[-1,1])i.add(new lt(new Pe(.1,.03,6,10),X(3816010))).position.set(t*.5,.45,0);for(let[t,e]of[[.1,0],[-.12,.08],[.02,-.1]])i.add(q(.13,new te({color:16777215,transparent:!0,opacity:.55}),t,1+t,e))},plate(i){i.add(me(.55,.45,.07,X(16777215,.25),0,.2,0)),i.add(new lt(new Pe(.5,.03,8,24),X(4892927)).rotateX(Math.PI/2).translateZ(-.25)),i.add(q(.2,X(14195274),.12,.35,.05,1.1,.8,1)),i.add(q(.14,X(4892746),-.2,.32,-.08)),i.add(q(.1,X(15216682),-.15,.3,.22));let t=me(.015,.015,.6,X(13158608),.7,.28,0);t.rotation.x=Math.PI/2,i.add(t)},tub(i){let t=X(16777215,.25);i.add(new lt(new ce(1.5,.12,.8),t).translateY(.15));for(let[e,n,s,r]of[[1.5,.1,0,.4],[1.5,.1,0,-.4],[.1,.8,.75,0],[.1,.8,-.75,0]])i.add(new lt(new ce(e,.55,n),t)).position.set(s,.4,r);i.add(new lt(new ce(1.35,.04,.7),X(9099519,.1)).translateY(.5));for(let[e,n,s,r]of[[-.3,.62,.1,.16],[.1,.7,-.1,.2],[.4,.62,.15,.13],[-.1,.8,.05,.12]])i.add(q(r,new te({color:16777215,transparent:!0,opacity:.85}),e,n,s));for(let e of[-.6,.6])i.add(me(.06,.06,.12,X(13158608),e,.05,.3))},toothbrush(i){let t=new lt(new ce(.13,1,.08),X(4892927));t.position.set(0,.55,0),t.rotation.z=.25,i.add(t);let e=new lt(new ce(.2,.34,.1),X(4892927));e.position.set(-.22,1.06,0),e.rotation.z=.25,i.add(e);let n=new lt(new ce(.17,.3,.1),X(16777215));n.position.set(-.24,1.07,.08),n.rotation.z=.25,i.add(n),i.add(q(.09,X(16777215),-.2,1.14,.12,1.5,.8,.8))}};function Vl(i){let t=sd(i);if(t)return t;if(!Hl[i])return jh(i);let e=new le,n=new le;return n.add=function(...r){return le.prototype.add.apply(this,r),r[0]},Hl[i](n),o_.has(i)&&(n.rotation.y=-.85),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(n),e.userData.id=i,e.userData.inner=n,e}var o_=new Set(["crow","fox","camel","monkey","bear","mouse","dog","giraffe","sheep","hen","duck","cow","dove"]),nA=Object.keys(Hl);function Gl(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Wl=[{id:"rabbit",thing:"bunny",the:"\u0627\u0644\u0623\u0631\u0646\u0628",fem:!1,food:"carrot",also:["lettuce","grass"],age:4,groups:["meadow"]},{id:"cat",thing:"cat",the:"\u0627\u0644\u0642\u0637\u0629",fem:!0,food:"fish",also:[],age:4,groups:["meadow"]},{id:"dog",thing:"dog",the:"\u0627\u0644\u0643\u0644\u0628",fem:!1,food:"bone",also:["meat"],age:4,groups:["meadow"]},{id:"monkey",thing:"monkey",the:"\u0627\u0644\u0642\u0631\u062F",fem:!1,food:"banana",also:["berries"],age:4,groups:["jungle"]},{id:"cow",thing:"cow",the:"\u0627\u0644\u0628\u0642\u0631\u0629",fem:!0,food:"grass",also:["f_haypile"],age:4,groups:["farm"]},{id:"bear",thing:"bear",the:"\u0627\u0644\u062F\u0628",fem:!1,food:"honey",also:["fish","berries"],age:4,groups:["snow"]},{id:"mouse",thing:"mouse",the:"\u0627\u0644\u0641\u0627\u0631",fem:!1,food:"cheese",also:["seeds","corn"],age:5,groups:["meadow"]},{id:"chick",thing:"chick",the:"\u0627\u0644\u0643\u062A\u0643\u0648\u062A",fem:!1,food:"seeds",also:["corn"],age:4,groups:["farm"]},{id:"horse",thing:"horse",the:"\u0627\u0644\u062D\u0635\u0627\u0646",fem:!1,food:"f_haypile",also:["grass","carrot"],age:4,groups:["farm","desert"]},{id:"hen",thing:"hen",the:"\u0627\u0644\u0641\u0631\u062E\u0629",fem:!0,food:"corn",also:["seeds"],age:4,groups:["farm"]},{id:"donkey",thing:"f_donkey",the:"\u0627\u0644\u062D\u0645\u0627\u0631",fem:!1,food:"carrot",also:["grass","f_haypile","lettuce"],age:5,groups:["farm","desert"]},{id:"goat",thing:"f_goat",the:"\u0627\u0644\u0645\u0627\u0639\u0632",fem:!1,food:"grass",also:["f_haypile","lettuce","leaves"],age:5,groups:["farm"]},{id:"parrot",thing:"j_parrot",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",fem:!1,food:"seeds",also:["berries","corn"],age:5,groups:["jungle"]},{id:"sheep",thing:"f_sheep",the:"\u0627\u0644\u062E\u0631\u0648\u0641",fem:!1,food:"grass",also:["f_haypile","lettuce"],age:5,groups:["farm"]},{id:"rooster",thing:"f_rooster",the:"\u0627\u0644\u062F\u064A\u0643",fem:!1,food:"seeds",also:["corn"],age:5,groups:["farm"]},{id:"lion",thing:"j_lion",the:"\u0627\u0644\u0623\u0633\u062F",fem:!1,food:"meat",also:[],age:4,groups:["jungle"]},{id:"tiger",thing:"j_tiger",the:"\u0627\u0644\u0646\u0645\u0631",fem:!1,food:"meat",also:[],age:5,groups:["jungle"]},{id:"elephant",thing:"j_elephant",the:"\u0627\u0644\u0641\u064A\u0644",fem:!1,food:"leaves",also:["grass","banana","carrot"],age:4,groups:["jungle"]},{id:"giraffe",thing:"j_giraffe",the:"\u0627\u0644\u0632\u0631\u0627\u0641\u0629",fem:!0,food:"leaves",also:["grass"],age:5,groups:["jungle"]},{id:"zebra",thing:"j_zebra",the:"\u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A",fem:!1,food:"grass",also:["f_haypile","leaves"],age:5,groups:["jungle"]},{id:"gorilla",thing:"j_gorilla",the:"\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627",fem:!0,food:"leaves",also:["banana","berries"],age:6,groups:["jungle"]},{id:"chameleon",thing:"j_chameleon",the:"\u0627\u0644\u062D\u0631\u0628\u0627\u064A\u0629",fem:!0,food:"insect",also:["worm"],age:6,groups:["jungle"]},{id:"frog",thing:"j_frog",the:"\u0627\u0644\u0636\u0641\u062F\u0639",fem:!1,food:"worm",also:["insect"],age:6,groups:["jungle","meadow"]},{id:"toucan",thing:"j_toucan",the:"\u0627\u0644\u062A\u0648\u0643\u0627\u0646",fem:!1,food:"berries",also:["banana"],age:6,groups:["jungle"]},{id:"penguin",thing:"w_penguin",the:"\u0627\u0644\u0628\u0637\u0631\u064A\u0642",fem:!1,food:"fish",also:[],age:5,groups:["snow","underwater"]},{id:"seal",thing:"w_seal",the:"\u0627\u0644\u0641\u0642\u0645\u0629",fem:!0,food:"fish",also:[],age:5,groups:["snow","underwater"]},{id:"reindeer",thing:"w_reindeer",the:"\u0627\u0644\u0631\u0646\u0629",fem:!0,food:"grass",also:["leaves","carrot"],age:6,groups:["snow"]},{id:"fox",thing:"w_fox",the:"\u0627\u0644\u062B\u0639\u0644\u0628",fem:!1,food:"meat",also:["berries"],age:5,groups:["snow","desert"]},{id:"camel",thing:"d_camel",the:"\u0627\u0644\u062C\u0645\u0644",fem:!1,food:"grass",also:["leaves","f_haypile"],age:5,groups:["desert"]},{id:"hawk",thing:"d_hawk",the:"\u0627\u0644\u0635\u0642\u0631",fem:!1,food:"meat",also:[],age:6,groups:["desert"]},{id:"dolphin",thing:"u_dolphin",the:"\u0627\u0644\u062F\u0644\u0641\u064A\u0646",fem:!1,food:"fish",also:[],age:5,groups:["underwater"]},{id:"turtle",thing:"u_turtle",the:"\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629",fem:!0,food:"lettuce",also:["leaves","berries"],age:5,groups:["underwater","meadow"]},{id:"bee",thing:"bee",the:"\u0627\u0644\u0646\u062D\u0644\u0629",fem:!0,food:"flower",also:["honey"],age:5,groups:["meadow"]},{id:"butterfly",thing:"butterfly",the:"\u0627\u0644\u0641\u0631\u0627\u0634\u0629",fem:!0,food:"flower",also:[],age:5,groups:["meadow"]},{id:"goose",thing:"goose",the:"\u0627\u0644\u0648\u0632\u0629",fem:!0,food:"grass",also:["seeds","corn","lettuce"],age:4,groups:["farm"]},{id:"duck",thing:"mallard",the:"\u0627\u0644\u0628\u0637\u0629",fem:!0,food:"seeds",also:["corn","worm","lettuce"],age:4,groups:["farm","meadow"]},{id:"pigeon",thing:"pigeon",the:"\u0627\u0644\u062D\u0645\u0627\u0645\u0629",fem:!0,food:"seeds",also:["corn"],age:4,groups:["meadow"]},{id:"peacock",thing:"peacock",the:"\u0627\u0644\u0637\u0627\u0648\u0648\u0633",fem:!1,food:"seeds",also:["corn","berries","worm"],age:5,groups:["farm","jungle"]},{id:"shark",thing:"shark",the:"\u0627\u0644\u0642\u0631\u0634",fem:!1,food:"fish",also:["meat"],age:5,groups:["underwater"]},{id:"cheetah",thing:"cheetah",the:"\u0627\u0644\u0641\u0647\u062F",fem:!1,food:"meat",also:[],age:5,groups:["jungle"]},{id:"croc",thing:"croc",the:"\u0627\u0644\u062A\u0645\u0633\u0627\u062D",fem:!1,food:"fish",also:["meat"],age:5,groups:["jungle"]},{id:"iguana",thing:"iguana",the:"\u0627\u0644\u0633\u062D\u0644\u064A\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629",fem:!0,food:"leaves",also:["insect","lettuce","berries"],age:6,groups:["jungle","desert"]},{id:"mantis",thing:"mantis",the:"\u0641\u0631\u0633 \u0627\u0644\u0646\u0628\u064A",fem:!1,food:"insect",also:["worm"],age:6,groups:["meadow"]},{id:"caterpillar",thing:"caterpillar",the:"\u0627\u0644\u064A\u0631\u0642\u0629",fem:!0,food:"leaves",also:["lettuce"],age:5,groups:["meadow"]},{id:"trex",thing:"trex",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0627\u0644\u0645\u0641\u062A\u0631\u0633",fem:!1,food:"meat",also:[],age:5,groups:["dino"]},{id:"triceratops",thing:"triceratops",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0623\u0628\u0648 \u0642\u0631\u0648\u0646",fem:!1,food:"leaves",also:["grass"],age:5,groups:["dino"]},{id:"stego",thing:"stego",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0623\u0628\u0648 \u0634\u0648\u0643",fem:!1,food:"leaves",also:["grass"],age:6,groups:["dino"]},{id:"brachio",thing:"brachio",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0627\u0644\u0637\u0648\u064A\u0644",fem:!1,food:"leaves",also:["grass"],age:6,groups:["dino"]},{id:"owl",thing:"owl",the:"\u0627\u0644\u0628\u0648\u0645\u0629",fem:!0,food:"mouse",also:["meat","insect"],age:5,groups:["jungle"]},{id:"panda",thing:"panda",the:"\u0627\u0644\u0628\u0627\u0646\u062F\u0627",fem:!1,food:"leaves",also:["grass"],age:4,groups:["jungle"]},{id:"octopus",thing:"u_octopus",the:"\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637",fem:!1,food:"fish",also:["meat"],age:5,groups:["underwater"]},{id:"crab",thing:"u_crab",the:"\u0627\u0644\u0633\u0631\u0637\u0627\u0646",fem:!1,food:"fish",also:["worm"],age:5,groups:["underwater"]},{id:"whale",thing:"u_whale",the:"\u0627\u0644\u062D\u0648\u062A",fem:!1,food:"fish",also:[],age:4,groups:["underwater"]},{id:"bat",thing:"i_bat",the:"\u0627\u0644\u062E\u0641\u0627\u0634",fem:!1,food:"banana",also:["berries","insect"],age:6,groups:["jungle"]},{id:"eagle",thing:"i_eagle",the:"\u0627\u0644\u0646\u0633\u0631",fem:!1,food:"meat",also:["fish","mouse"],age:5,groups:["desert"]},{id:"ostrich",thing:"i_ostrich",the:"\u0627\u0644\u0646\u0639\u0627\u0645\u0629",fem:!0,food:"seeds",also:["leaves","grass","corn"],age:5,groups:["desert"]},{id:"swan",thing:"i_swan",the:"\u0627\u0644\u0628\u062C\u0639\u0629",fem:!0,food:"grass",also:["lettuce","seeds","leaves"],age:5,groups:["meadow","underwater"]},{id:"sparrow",thing:"i_sparrow",the:"\u0627\u0644\u0639\u0635\u0641\u0648\u0631\u0629",fem:!0,food:"seeds",also:["corn","worm","berries"],age:4,groups:["meadow"]},{id:"snail",thing:"i_snail",the:"\u0627\u0644\u062D\u0644\u0632\u0648\u0646\u0629",fem:!0,food:"lettuce",also:["leaves"],age:5,groups:["meadow"]},{id:"spider",thing:"i_spider",the:"\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A",fem:!1,food:"insect",also:["worm"],age:6,groups:["meadow"]},{id:"crow",thing:"crow",the:"\u0627\u0644\u063A\u0631\u0627\u0628",fem:!1,food:"seeds",also:["corn","meat","worm"],age:5,groups:["meadow"]},{id:"ladybug",thing:"ladybug",the:"\u0627\u0644\u062F\u0639\u0633\u0648\u0642\u0629",fem:!0,food:"insect",also:[],age:5,groups:["meadow"]},{id:"dragonfly",thing:"dragonfly",the:"\u0627\u0644\u064A\u0639\u0633\u0648\u0628",fem:!1,food:"insect",also:[],age:6,groups:["meadow"]}],l_={carrot:{the:"\u0627\u0644\u062C\u0632\u0631",thing:"carrot"},fish:{the:"\u0627\u0644\u0633\u0645\u0643",thing:"fish"},bone:{the:"\u0627\u0644\u0639\u0636\u0645\u0629",thing:"bone"},banana:{the:"\u0627\u0644\u0645\u0648\u0632",thing:"banana"},grass:{the:"\u0627\u0644\u062D\u0634\u064A\u0634",thing:"grass"},honey:{the:"\u0627\u0644\u0639\u0633\u0644",thing:"honey"},cheese:{the:"\u0627\u0644\u062C\u0628\u0646\u0629",thing:"cheese"},seeds:{the:"\u0627\u0644\u062D\u064E\u0628",thing:"seeds"},f_haypile:{the:"\u0627\u0644\u062A\u0628\u0646",thing:"f_haypile"},corn:{the:"\u0627\u0644\u062F\u0631\u0629",thing:"corn"},meat:{the:"\u0627\u0644\u0644\u062D\u0645\u0629",thing:"o_chicken"},leaves:{the:"\u0648\u0631\u0642 \u0627\u0644\u0634\u062C\u0631",thing:"j_leaf"},lettuce:{the:"\u0627\u0644\u062E\u0633",thing:"v_lettuce"},berries:{the:"\u0627\u0644\u062A\u0648\u062A",thing:"q_berries"},worm:{the:"\u0627\u0644\u062F\u0648\u062F\u0629",thing:"i_worm"},insect:{the:"\u0627\u0644\u062C\u0646\u062F\u0628",thing:"grasshopper"},flower:{the:"\u0627\u0644\u0632\u0647\u0631\u0629",thing:"t_flower"},mouse:{the:"\u0627\u0644\u0641\u0627\u0631",thing:"mouse"}};var c_=8,h_=8;function rd(i,t=null){let e=Wl.filter(s=>s.age<=Math.max(4,i));if(!t)return e;let n=e.filter(s=>s.groups.includes(t));return n.length>=h_?n:e}var d_=i=>[i.food,...i.also||[]],u_=i=>i<=5?3:4,ad=i=>Wl.find(t=>t.id===i),Xl=i=>`${i.the} ${i.fem?"\u062C\u0639\u0627\u0646\u0629":"\u062C\u0639\u0627\u0646"}! ${i.fem?"\u0647\u062A\u0627\u0643\u0644":"\u0647\u064A\u0627\u0643\u0644"} \u0625\u064A\u0647\u061F`,od=i=>`${i.the} ${i.fem?"\u0628\u062A\u062D\u0628":"\u0628\u064A\u062D\u0628"} ${l_[i.food].the}`;function f_(i,t,e=null){let n=Gl(t),s=rd(i,e).map(o=>o.id),r=[],a=[];for(let o=0;o<c_;o++){a.length||(a=[...s].sort(()=>n()-.5));let l=a.findIndex(c=>c!==r[r.length-1]);l<0&&(l=0),r.push(a.splice(l,1)[0])}return r}function p_(i,t,e,n=null,s=null){let r=Gl(e),a=ad(t),o=a.food,l=new Set(d_(a)),c=rd(i,n).map(u=>u.food).filter(u=>!l.has(u));for(let u of Wl)!l.has(u.food)&&!c.includes(u.food)&&c.push(u.food);let h=[...new Set(c)].sort(()=>r()-.5);s&&(h=h.sort((u,p)=>(s.get(u)||0)-(s.get(p)||0)));let d=h.slice(0,u_(i)-1);if(s)for(let u of[o,...d])s.set(u,(s.get(u)||0)+1);return[o,...d].sort(()=>r()-.5)}var pa=class{constructor(t,e=Date.now()){this.age=t,this.seed=e,this.targets=f_(t,e),this.round=0,this.misses=0}get finished(){return this.round>=this.targets.length}get animal(){return this.finished?null:ad(this.targets[this.round])}get plates(){return this.finished?[]:p_(this.age,this.animal.id,this.seed+this.round*41)}get hint(){return this.misses>=2?this.animal.food:null}tap(t){if(this.finished)return null;if(t!==this.animal.food)return this.misses++,{ok:!1,firstMiss:this.misses===1};let e={ok:!0,first:this.misses===0,animal:this.animal.id};return this.round++,this.misses=0,e.finished=this.finished,e}};var g_={title:["\u0623\u0637\u0639\u0645 \u0627\u0644\u062D\u064A\u0648\u0627\u0646","Feed the Animal"],no:["\u0645\u0634 \u062F\u0647... \u062C\u0631\u0651\u0628 \u062D\u0627\u062C\u0629 \u062A\u0627\u0646\u064A\u0629","Not that... try something else"],yes_m:["\u0623\u062D\u0633\u0646\u062A!","Well done!"],yes_f:["\u0623\u062D\u0633\u0646\u062A\u064A!","Well done!"],again:["\u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Hear again"]},m_={...Fl,tempo:104,lead:"marimba",chords:[[43,[67,71,74]],[48,[67,72,76]],[50,[66,69,74]],[43,[67,71,74]],[45,[64,69,72]],[48,[67,72,76]],[50,[66,69,74]],[43,[67,71,79]]],melody:[[0,0,79],[0,4,83],[1,0,84],[1,4,79],[2,0,81],[2,4,78],[3,0,79],[3,4,74],[4,0,76],[4,4,81],[5,0,84],[5,4,88],[6,0,86],[6,4,81],[7,0,79]]},__={bunny:2.5,cat:2.2,dog:2.2,monkey:2.3,cow:1.9,bear:2.1,mouse:2.7,chick:2.6},A_={carrot:1.2,fish:1.3,bone:1.2,banana:1.2,grass:1.1,honey:1.2,cheese:1.2,seeds:1.3},Vs=new E(0,0,-1.2),x_=new E(0,1.9,-.2),ql=class{constructor(t,e,n){this.sh=new ca(t,e,n,{text:g_,theme:m_});let s=this.sh;this.st=new da(s,{bg:12577023,ground:9097328,fov:40,box:[6.6,4.1],dir:[0,.5,1],target:[0,1.5,.3]}),this._meadow(),this.plates=[],this.animal=null,this.hearts=[],s.fonts().then(()=>s.titleCard(s.t("title"),"\u{1F430}\u{1F955}\u{1F431}\u{1F41F}",()=>this._start())),this.st.onFrame((r,a)=>this._frame(r,a))}_meadow(){let t=this.st.scene;$h(t),this.clouds=Jh(t,7,{y:10,z:-20}),this.st.onFrame(o=>this.clouds.userData.drift(o)),Kh(t,[{t:"tree",x:7.6,z:-3.4,s:4.4},{t:"tree",x:-10.5,z:-6,s:5.4},{t:"tree",x:11,z:-7,s:5},{t:"bush",x:-4.2,z:-3.3,s:.8},{t:"bush",x:3.8,z:-3.2,s:.9},{t:"rock",x:5.6,z:-1.4,s:.5},{t:"rock",x:-4.9,z:-.9,s:.4},...Array.from({length:30},(o,l)=>({t:"flower",x:-12+l*.85+Math.sin(l*1.7)*.5,z:-2.8+l*7%5*.55+Math.cos(l)*.3}))],0);let e=new lt(new yn(80,40),new te({map:Hs(256,256,o=>{o.fillStyle="#8ad070",o.fillRect(0,0,256,256);for(let l=0;l<70;l++)o.fillStyle=l%2?"#7ac860":"#9ae080",o.beginPath(),o.ellipse(l*53%256,l*97%256,12,5,0,0,Math.PI*2),o.fill();for(let l=0;l<14;l++)o.fillStyle=["#ff7aa8","#ffe05a","#ffffff"][l%3],o.beginPath(),o.arc((l*41+9)%256,(l*73+20)%256,3,0,Math.PI*2),o.fill()},[8,4]),roughness:1}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);for(let[o,l,c,h]of[[-9,-12,7,6998112],[8,-14,8,8050800],[0,-16,9,5945424]]){let d=new lt(new Se(c,24,16,0,Math.PI*2,0,Math.PI/2),vn(h,{roughness:1}));d.position.set(o,-.2,l),t.add(d)}let n=new lt(new Se(1.2,20,16),new ve({color:16773226}));n.position.set(8,9,-14),t.add(n);for(let o=-8;o<=8;o++){let l=new lt(new ce(.22,1.3,.15),vn(16774368));l.position.set(o*1.1,.65,-4),l.castShadow=!0,t.add(l)}for(let o of[.5,1]){let l=new lt(new ce(19.5,.14,.1),vn(16774368));l.position.set(0,o,-4),t.add(l)}let s=new lt(new We(.35,.5,3,12),vn(9067050));s.position.set(-6.2,1.5,-2.6),s.castShadow=!0,t.add(s);for(let[o,l,c]of[[-6.2,3.8,1.7],[-7.2,3.2,1.2],[-5.2,3.3,1.3]]){let h=new lt(new Se(c,16,12),vn(3844170));h.position.set(o,l,-2.6),h.castShadow=!0,t.add(h)}let r=new lt(new Ds(2.1,28),vn(12118160,{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(Vs.x,.02,Vs.z),t.add(r);let a=new lt(new ce(11,.22,2.4),new te({map:Hs(128,128,o=>{for(let l=0;l<8;l++)for(let c=0;c<8;c++)o.fillStyle=(l+c)%2?"#ffffff":"#ff8a8a",o.fillRect(l*16,c*16,16,16)},[6,1.5]),roughness:.9}));a.position.set(0,1,2.6),a.castShadow=!0,a.receiveShadow=!0,t.add(a);for(let o of[-5,5]){let l=new lt(new ce(.3,1,2),vn(11037242));l.position.set(o,.5,2.6),t.add(l)}}_start(){this.play=new pa(this.sh.age,Math.floor(Math.random()*1e9));let t=this.sh;t.clear(),this.lightDots=t.topBar(5,"\u{1F955}"),this.lightDots(0),this.sign=$t("div",{class:"la-sign"}),this.signText=$t("span"),this.sign.append($t("i",{},"\u{1F37D}\uFE0F"),this.signText,$t("button",{class:"la-again","aria-label":t.t("again"),onclick:e=>{e.stopPropagation(),this._say()}},"\u{1F50A}")),t.layer.append(this.sign),t.sound.setMode("play"),this._ask()}_ask(){let t=this.play.animal;this.animal&&this.st.scene.remove(this.animal.g);for(let o of this.plates)this.st.scene.remove(o.g);this.plates=[];let e=new le,n=Vl(t.thing);n.scale.setScalar(__[t.thing]||2.2),e.add(n);let s=new Ps(new es({map:Hs(256,256,o=>{o.fillStyle="#ffffff",o.beginPath(),o.arc(128,118,92,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(70,215,18,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(92,188,10,0,Math.PI*2),o.fill(),o.fillStyle="#ff8a2a",o.font="900 130px Tajawal, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("\u061F",128,128)}),transparent:!0,depthWrite:!1}));s.scale.setScalar(1.7),s.position.set(1.7,3.6,0),e.add(s),e.position.copy(Vs),e.scale.setScalar(.001),this.st.add(e),this.animal={g:e,thing:n,bub:s,born:0,chew:0,shake:0,happy:0};let r=this.play.plates,a=r.length;r.forEach((o,l)=>{let c=new le,h=new lt(new We(1.05,.8,.12,28),vn(16777215,{roughness:.3}));h.position.y=.06;let d=new lt(new Pe(1,.07,8,28),vn(16765498));d.rotation.x=Math.PI/2,d.position.y=.12;let u=Vl(o);u.scale.setScalar(A_[o]||1.2),u.position.y=.1;let p=new lt(new We(1.25,1.25,.05,28),new ve({color:16773754,transparent:!0,opacity:0,depthWrite:!1}));p.position.y=.02;let m=new lt(new Se(1.2,10,8),new ve({visible:!1}));m.position.y=.6,m.userData.id=o,c.add(h,d,u,p,m),c.position.set(((l+.5)/a-.5)*(a<=3?7:8.8),1.12,2.6),c.scale.setScalar(.001),this.st.add(c),this.plates.push({g:c,food:u,hit:m,glow:p,f:o,born:-.3-l*.1,wig:0,base:c.position.clone()})}),this.st.setPicks(this.plates,o=>this._tap(o)),this.st.focus=null,this.signText.textContent=Xl(t),this.sign.classList.remove("pop"),this.sign.offsetWidth,this.sign.classList.add("pop"),this.st.mode="wait",this.sh.sound.play("pop"),this._say()}_say(){this.sh.sound.play("sparkle"),this.sh.speak(Xl(this.play.animal))}_tap(t){if(this.st.mode!=="wait")return;let e=this.play.animal,n=this.play.tap(t),s=this.plates.find(r=>r.f===t);if(!n.ok){s.wig=.6,this.animal.shake=1,this.sh.sound.play("hmm"),this.sh.say(this.sh.t("no"),!1,1.8),n.firstMiss&&this.sh.round("nature",!1,e.id),setTimeout(()=>this.st.mode==="wait"&&this._say(),1100);return}n.first&&this.sh.round("nature",!0,e.id),this.st.mode="found",this.st.setPicks([],null);for(let r of this.plates)r!==s&&(r.gone=!0);this.fly={plate:s,from:s.g.position.clone().add(new E(0,.3,0)),t:0},this.lightDots(this.play.round),this.sh.sound.play("whoosh"),setTimeout(()=>{this.animal.chew=1.6,this.sh.sound.play("nibble"),setTimeout(()=>this.sh.sound.play("nibble"),350),setTimeout(()=>this.sh.sound.play("nibble"),700),this._hearts(),this.sh.sound.play("right"),this.sh.say(this.sh.t("yes"),!1,1.4),this.sh.speak(od(e))},900),setTimeout(()=>{n.finished?(this.st.mode="end",this.sign.remove(),this.sh.sound.setMode("calm"),this.sh.finishCard(this.sh.t("title"),"\u{1F430}",()=>this._start())):this._ask()},4600)}_hearts(){for(let t=0;t<7;t++){let e=new Ps(new es({map:y_(),transparent:!0,depthWrite:!1}));e.scale.setScalar(.55+t%3*.1),e.position.set(Vs.x+(Math.random()-.5)*1.6,2.2+Math.random()*.6,Vs.z+.3),e.userData={v:.9+Math.random()*.8,life:2.2,dx:(Math.random()-.5)*.5},this.st.add(e),this.hearts.push(e)}}_frame(t,e){let n=this.play&&this.st.mode==="wait"?this.play.hint:null,s=this.st.mode==="wait"?this.st.focusedId():null,r=this.animal;if(r){if(r.born<1){r.born+=t*2.4;let a=Math.min(1,r.born);r.g.scale.setScalar(Math.max(.001,1-Math.pow(1-a,3)+Math.sin(a*Math.PI)*.15)),r.g.position.y=Math.abs(Math.sin(a*Math.PI*2))*.5}else r.g.position.y=r.chew>0?Math.abs(Math.sin(e*14))*.08:Math.sin(e*1.8)*.02;r.chew=Math.max(0,r.chew-t),r.shake=Math.max(0,r.shake-t),r.thing.rotation.y=r.shake>0?Math.sin(r.shake*22)*.5:Math.sin(e*.9)*.08,r.bub.position.y=3.6+Math.sin(e*3)*.08,r.bub.visible=this.st.mode==="wait"}for(let a of this.plates){if(a.born<1){a.born+=t*3;let l=Math.max(0,Math.min(1,a.born));a.g.scale.setScalar(Math.max(.001,l<1?1-Math.pow(1-l,3)+Math.sin(l*Math.PI)*.12:1))}if(a.gone){a.g.scale.multiplyScalar(Math.max(0,1-t*3));continue}if(this.fly&&this.fly.plate===a)continue;let o=a.f===n||a.f===s;a.glow.material.opacity=o?.6+Math.sin(e*6)*.2:0,a.glow.material.color.setHex(a.f===s?8048895:16773754),a.food.rotation.y=Math.sin(e*1.3+a.base.x)*.3,a.food.position.y=.1+(o?Math.abs(Math.sin(e*6))*.12:0),a.wig>0?(a.wig-=t,a.g.rotation.z=Math.sin(a.wig*40)*.2*a.wig):a.g.rotation.z=0}if(this.fly){let a=this.fly;a.t+=t/.8;let o=Math.min(1,a.t);a.plate.g.position.lerpVectors(a.from,x_,o*o*(3-2*o)),a.plate.g.position.y+=Math.sin(o*Math.PI)*1.6,a.plate.g.scale.setScalar(Math.max(.05,1-.6*o)),a.plate.g.rotation.y=o*6,o>=1&&(this.st.scene.remove(a.plate.g),a.plate.gone=!0,this.fly=null)}for(let a=this.hearts.length-1;a>=0;a--){let o=this.hearts[a];o.userData.life-=t,o.position.y+=o.userData.v*t,o.position.x+=o.userData.dx*t,o.material.opacity=Math.max(0,Math.min(1,o.userData.life)),o.userData.life<=0&&(this.st.scene.remove(o),this.hearts.splice(a,1))}}pause(){this.sh.pause()}dispose(){this.st.dispose(),this.sh.dispose()}},ga=null;function y_(){return ga||(ga=Hs(128,128,i=>{i.fillStyle="#ff4a7a",i.beginPath(),i.moveTo(64,112),i.bezierCurveTo(0,70,8,16,46,18),i.bezierCurveTo(60,20,64,34,64,34),i.bezierCurveTo(64,34,68,20,82,18),i.bezierCurveTo(120,16,128,70,64,112),i.fill()}),ga)}var v_=`
.la-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #3aa84a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.4));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(20,60,20,.3);pointer-events:auto;max-width:94%}
.la-sign i{font-style:normal;font-size:1.4em}
.la-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.la-sign.pop{animation:la-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes la-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.la-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`,Yl={start(i,t,e){document.getElementById("la-style")||document.head.append($t("style",{id:"la-style"},v_));let n=new ql(i,t||{},e);return Yl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.LearnAnimals=Yl;var fA=Yl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
