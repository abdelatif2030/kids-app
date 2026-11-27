(()=>{var wl="170";var vd=0,cc=1,Cd=2;var Ch=1,bl=2,Un=3,ti=0,Ut=1,qt=2,jn=0,qi=1,hc=2,dc=3,uc=4,Id=5,_i=100,Md=101,wd=102,bd=103,Sd=104,Ed=200,Td=201,Rd=202,Pd=203,no=204,io=205,Ld=206,Dd=207,Ud=208,Nd=209,Fd=210,kd=211,Od=212,Bd=213,zd=214,so=0,ro=1,ao=2,Ji=3,oo=4,lo=5,co=6,ho=7,Ih=0,Hd=1,Vd=2,Qn=0,Gd=1,Wd=2,Xd=3,qd=4,Yd=5,Zd=6,Sl=7;var Mh=300,Ki=301,ji=302,uo=303,fo=304,oa=306,Qi=1e3,Ai=1001,po=1002,fn=1003,$d=1004;var Js=1005;var An=1006,Ca=1007;var Fn=1008;var zn=1009,wh=1010,bh=1011,Ts=1012,El=1013,yi=1014,kn=1015,Ws=1016,Tl=1017,Rl=1018,es=1020,Sh=35902,Eh=1021,Th=1022,un=1023,Rh=1024,Ph=1025,Yi=1026,ts=1027,Lh=1028,Pl=1029,Dh=1030,Ll=1031;var Dl=1033,Mr=33776,wr=33777,br=33778,Sr=33779,go=35840,mo=35841,_o=35842,xo=35843,Ao=36196,yo=37492,vo=37496,Co=37808,Io=37809,Mo=37810,wo=37811,bo=37812,So=37813,Eo=37814,To=37815,Ro=37816,Po=37817,Lo=37818,Do=37819,Uo=37820,No=37821,Er=36492,Fo=36494,ko=36495,Uh=36283,Oo=36284,Bo=36285,zo=36286;var Tr=2300,Ho=2301,Ia=2302,fc=2400,pc=2401,gc=2402;var Jd=3200,Kd=3201;var Nh=0,jd=1,Jn="",Mt="srgb",ls="srgb-linear",la="linear",lt="srgb";var bi=7680;var mc=519,Qd=512,eu=513,tu=514,Fh=515,nu=516,iu=517,su=518,ru=519,Vo=35044;var _c="300 es",On=2e3,Rr=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=1234567,Ms=Math.PI/180,Rs=180/Math.PI;function yn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function au(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ou(i,e,t){return i!==e?(t-i)/(e-i):0}function ws(i,e,t){return(1-t)*i+t*e}function lu(i,e,t,n){return ws(i,e,1-Math.exp(-t*n))}function cu(i,e=1){return e-Math.abs(Ul(i,e*2)-e)}function hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fu(i,e){return i+Math.random()*(e-i)}function pu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(xc=i);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mu(i){return i*Ms}function _u(i){return i*Rs}function xu(i){return(i&i-1)===0&&i!==0}function Au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var kh={DEG2RAD:Ms,RAD2DEG:Rs,generateUUID:yn,clamp:Ft,euclideanModulo:Ul,mapLinear:au,inverseLerp:ou,lerp:ws,damp:lu,pingpong:cu,smoothstep:hu,smootherstep:du,randInt:uu,randFloat:fu,randFloatSpread:pu,seededRandom:gu,degToRad:mu,radToDeg:_u,isPowerOfTwo:xu,ceilPowerOfTwo:Au,floorPowerOfTwo:yu,setQuaternionFromProperEuler:vu,normalize:ot,denormalize:dn},ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],y=s[0],g=s[3],f=s[6],M=s[1],v=s[4],_=s[7],L=s[2],S=s[5],T=s[8];return r[0]=a*y+o*M+l*L,r[3]=a*g+o*v+l*S,r[6]=a*f+o*_+l*T,r[1]=c*y+h*M+d*L,r[4]=c*g+h*v+d*S,r[7]=c*f+h*_+d*T,r[2]=u*y+p*M+m*L,r[5]=u*g+p*v+m*S,r[8]=u*f+p*_+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,m=t*d+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new Ge;function Oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){let i=Ps("canvas");return i.style.display="block",i}var Ac={};function Cs(i){i in Ac||(Ac[i]=!0,console.warn(i))}function Iu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Mu(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wu(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yc=[.64,.33,.3,.6,.15,.06],vc=[.2126,.7152,.0722],Cc=[.3127,.329],Ic=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[ls]:{primaries:yc,whitePoint:Cc,transfer:la,toXYZ:Ic,fromXYZ:Mc,luminanceCoefficients:vc,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:yc,whitePoint:Cc,transfer:lt,toXYZ:Ic,fromXYZ:Mc,luminanceCoefficients:vc,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});var Si,Go=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Ps("canvas")),Si.width=e.width,Si.height=e.height;let n=Si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bu=0,Pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,Jt=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=An,a=Fn,o=un,l=zn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=yn(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Mh;Jt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(p+1)/2,L=(f+1)/2,S=(h+u)/4,T=(d+y)/4,P=(m+g)/4;return v>_&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Wo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],m=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=y;return}if(d!==y||l!==u||c!==p||h!==m){let g=1-o,f=l*u+c*p+h*m+d*y,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let L=Math.sqrt(v),S=Math.atan2(L,f*M);g=Math.sin(g*S)/L,o=Math.sin(o*S)/L}let _=o*M;if(l=l*g+u*_,c=c*g+p*_,h=h*g+m*_,d=d*g+y*_,g===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*p-c*u,e[t+1]=l*m+h*u+c*d-o*p,e[t+2]=c*m+h*p+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ba=new E,wc=new ii,vi=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),js.subVectors(this.max,ps),Ei.subVectors(e.a,ps),Ti.subVectors(e.b,ps),Ri.subVectors(e.c,ps),Wn.subVectors(Ti,Ei),Xn.subVectors(Ri,Ti),hi.subVectors(Ei,Ri);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!Sa(t,Ei,Ti,Ri,js)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,Ei,Ti,Ri,js))?!1:(Qs.crossVectors(Wn,Xn),t=[Qs.x,Qs.y,Qs.z],Sa(t,Ei,Ti,Ri,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Tn=[new E,new E,new E,new E,new E,new E,new E,new E],ln=new E,Ks=new vi,Ei=new E,Ti=new E,Ri=new E,Wn=new E,Xn=new E,hi=new E,ps=new E,js=new E,Qs=new E,di=new E;function Sa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);let o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Eu=new vi,gs=new E,Ea=new E,Ls=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);let t=gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Ea)),this.expandByPoint(gs.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new E,Ta=new E,er=new E,qn=new E,Ra=new E,tr=new E,Pa=new E,Dr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ta.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ta);let r=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=qn.dot(this.direction),l=-qn.dot(er),c=qn.lengthSq(),h=Math.abs(1-a*a),d,u,p,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ta).addScaledVector(er,u),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Ra.subVectors(t,e),tr.subVectors(n,e),Pa.crossVectors(Ra,tr);let a=this.direction.dot(Pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let l=o*this.direction.dot(tr.crossVectors(qn,tr));if(l<0)return null;let c=o*this.direction.dot(Ra.cross(qn));if(c<0||l+c>a)return null;let h=-o*qn.dot(Pa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,p,m,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,p,m,y,g)}set(e,t,n,s,r,a,o,l,c,h,d,u,p,m,y,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,m=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,m=c*h,y=c*d;t[0]=u+y*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,m=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,m=o*h,y=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,p=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tu,e,Ru)}lookAt(e,t,n){let s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Yn.crossVectors(n,Qt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Yn.crossVectors(n,Qt)),Yn.normalize(),nr.crossVectors(Qt,Yn),s[0]=Yn.x,s[4]=nr.x,s[8]=Qt.x,s[1]=Yn.y,s[5]=nr.y,s[9]=Qt.y,s[2]=Yn.z,s[6]=nr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],y=n[6],g=n[10],f=n[14],M=n[3],v=n[7],_=n[11],L=n[15],S=s[0],T=s[4],P=s[8],I=s[12],A=s[1],R=s[5],z=s[9],k=s[13],H=s[2],J=s[6],V=s[10],se=s[14],G=s[3],de=s[7],xe=s[11],Me=s[15];return r[0]=a*S+o*A+l*H+c*G,r[4]=a*T+o*R+l*J+c*de,r[8]=a*P+o*z+l*V+c*xe,r[12]=a*I+o*k+l*se+c*Me,r[1]=h*S+d*A+u*H+p*G,r[5]=h*T+d*R+u*J+p*de,r[9]=h*P+d*z+u*V+p*xe,r[13]=h*I+d*k+u*se+p*Me,r[2]=m*S+y*A+g*H+f*G,r[6]=m*T+y*R+g*J+f*de,r[10]=m*P+y*z+g*V+f*xe,r[14]=m*I+y*k+g*se+f*Me,r[3]=M*S+v*A+_*H+L*G,r[7]=M*T+v*R+_*J+L*de,r[11]=M*P+v*z+_*V+L*xe,r[15]=M*I+v*k+_*se+L*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],m=e[3],y=e[7],g=e[11],f=e[15];return m*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*p-n*l*p)+y*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+g*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],y=e[13],g=e[14],f=e[15],M=d*g*c-y*u*c+y*l*p-o*g*p-d*l*f+o*u*f,v=m*u*c-h*g*c-m*l*p+a*g*p+h*l*f-a*u*f,_=h*y*c-m*d*c+m*o*p-a*y*p-h*o*f+a*d*f,L=m*d*l-h*y*l-m*o*u+a*y*u+h*o*g-a*d*g,S=t*M+n*v+s*_+r*L;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=M*T,e[1]=(y*u*r-d*g*r-y*s*p+n*g*p+d*s*f-n*u*f)*T,e[2]=(o*g*r-y*l*r+y*s*c-n*g*c-o*s*f+n*l*f)*T,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*p-n*l*p)*T,e[4]=v*T,e[5]=(h*g*r-m*u*r+m*s*p-t*g*p-h*s*f+t*u*f)*T,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*f-t*l*f)*T,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*p+t*l*p)*T,e[8]=_*T,e[9]=(m*d*r-h*y*r-m*n*p+t*y*p+h*n*f-t*d*f)*T,e[10]=(a*y*r-m*o*r+m*n*c-t*y*c-a*n*f+t*o*f)*T,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*T,e[12]=L*T,e[13]=(h*y*s-m*d*s+m*n*u-t*y*u-h*n*g+t*d*g)*T,e[14]=(m*o*s-a*y*s-m*n*l+t*y*l+a*n*g-t*o*g)*T,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,m=r*d,y=a*h,g=a*d,f=o*d,M=l*c,v=l*h,_=l*d,L=n.x,S=n.y,T=n.z;return s[0]=(1-(y+f))*L,s[1]=(p+_)*L,s[2]=(m-v)*L,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(u+f))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+v)*T,s[9]=(g-M)*T,s[10]=(1-(u+y))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Pi.set(s[0],s[1],s[2]).length(),a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);let c=1/r,h=1/a,d=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),p,m;if(o===On)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Rr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,p=(n+s)*h,m,y;if(o===On)m=(a+r)*d,y=-2*d;else if(o===Rr)m=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pi=new E,cn=new mt,Tu=new E(0,0,0),Ru=new E(1,1,1),Yn=new E,nr=new E,Qt=new E,bc=new mt,Sc=new ii,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pu=0,Ec=new E,Li=new ii,Pn=new mt,ir=new E,ms=new E,Lu=new E,Du=new ii,Tc=new E(1,0,0),Rc=new E(0,1,0),Pc=new E(0,0,1),Lc={type:"added"},Uu={type:"removed"},Di={type:"childadded",child:null},La={type:"childremoved",child:null},Vt=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new vn,n=new ii,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ms,ir,this.up):Pn.lookAt(ir,ms,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uu),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new E(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new E,Ln=new E,Da=new E,Dn=new E,Ui=new E,Ni=new E,Dc=new E,Ua=new E,Na=new E,Fa=new E,ka=new ct,Oa=new ct,Ba=new ct,Kn=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Ln.subVectors(n,t),Da.subVectors(e,t);let a=hn.dot(hn),o=hn.dot(Ln),l=hn.dot(Da),c=Ln.dot(Ln),h=Ln.dot(Da),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ka.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),ka.fromBufferAttribute(e,t),Oa.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ka,r.x),a.addScaledVector(Oa,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Ln.subVectors(e,t),hn.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),Ua.subVectors(e,n);let l=Ui.dot(Ua),c=Ni.dot(Ua);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,s);let h=Ui.dot(Na),d=Ni.dot(Na);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ui,a);Fa.subVectors(e,r);let p=Ui.dot(Fa),m=Ni.dot(Fa);if(m>=0&&p<=m)return t.copy(r);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ni,o);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Dc.subVectors(r,s),o=(d-h)/(d-h+(p-m)),t.copy(s).addScaledVector(Dc,o);let f=1/(g+y+u);return a=y*f,o=u*f,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Ul(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=za(a,r,e+1/3),this.g=za(a,r,e),this.b=za(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ft(zt.r*255,0,255))*65536+Math.round(Ft(zt.g*255,0,255))*256+Math.round(Ft(zt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Mt){Qe.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(sr);let n=ws(Zn.h,sr.h,t),s=ws(Zn.s,sr.s,t),r=ws(Zn.l,sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ye;Ye.NAMES=Bh;var Nu=0,si=class extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=yn(),this.name="",this.blending=qi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wt=class extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new E,rr=new ne,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),e}};var Ur=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Nr=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fu=0,sn=new mt,Ha=new Vt,Fi=new E,en=new vi,_s=new vi,Dt=new E,Gt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Nr:Ur)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(en.min,_s.min),en.expandByPoint(Dt),Dt.addVectors(en.max,_s.max),en.expandByPoint(Dt)):(en.expandByPoint(_s.min),en.expandByPoint(_s.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Dt.add(Fi)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new E,l[P]=new E;let c=new E,h=new E,d=new E,u=new ne,p=new ne,m=new ne,y=new E,g=new E;function f(P,I,A){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),m.sub(u);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[P].add(y),o[I].add(y),o[A].add(y),l[P].add(g),l[I].add(g),l[A].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,I=M.length;P<I;++P){let A=M[P],R=A.start,z=A.count;for(let k=R,H=R+z;k<H;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new E,_=new E,L=new E,S=new E;function T(P){L.fromBufferAttribute(s,P),S.copy(L);let I=o[P];v.copy(I),v.sub(L.multiplyScalar(L.dot(I))).normalize(),_.crossVectors(S,I);let R=_.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,I=M.length;P<I;++P){let A=M[P],R=A.start,z=A.count;for(let k=R,H=R+z;k<H;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(e)for(let u=0,p=e.count;u<p;u+=3){let m=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)u[m++]=c[p++]}return new tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new mt,ui=new Dr,ar=new Ls,Nc=new E,or=new E,lr=new E,cr=new E,Va=new E,hr=new E,Fc=new E,dr=new E,le=class extends Vt{constructor(e=new Gt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Va.fromBufferAttribute(d,e),a?hr.addScaledVector(Va,h):hr.addScaledVector(Va.sub(t),h))}t.add(hr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(ar.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ar,Nc)===null||ui.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,L=v;_<L;_+=3){let S=o.getX(_),T=o.getX(_+1),P=o.getX(_+2);s=ur(this,f,e,n,c,h,d,S,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let M=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);s=ur(this,a,e,n,c,h,d,M,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,L=v;_<L;_+=3){let S=_,T=_+1,P=_+2;s=ur(this,f,e,n,c,h,d,S,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let M=g,v=g+1,_=g+2;s=ur(this,a,e,n,c,h,d,M,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ku(i,e,t,n,s,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;dr.copy(o),dr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:i}}function ur(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,or),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);let h=ku(i,e,t,n,or,lr,cr,Fc);if(h){let d=new E;Kn.getBarycoord(Fc,or,lr,cr,d),s&&(h.uv=Kn.getInterpolatedAttribute(s,o,l,c,d,new ne)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,l,c,d,new ne)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new E,materialIndex:0};Kn.getNormal(or,lr,cr,u.normal),h.face=u,h.barycoord=d}return h}var qe=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function m(y,g,f,M,v,_,L,S,T,P,I){let A=_/T,R=L/P,z=_/2,k=L/2,H=S/2,J=T+1,V=P+1,se=0,G=0,de=new E;for(let xe=0;xe<V;xe++){let Me=xe*R-k;for(let ze=0;ze<J;ze++){let nt=ze*A-z;de[y]=nt*M,de[g]=Me*v,de[f]=H,c.push(de.x,de.y,de.z),de[y]=0,de[g]=0,de[f]=S>0?1:-1,h.push(de.x,de.y,de.z),d.push(ze/T),d.push(1-xe/P),se+=1}}for(let xe=0;xe<P;xe++)for(let Me=0;Me<T;Me++){let ze=u+Me+J*xe,nt=u+Me+J*(xe+1),$=u+(Me+1)+J*(xe+1),ae=u+(Me+1)+J*xe;l.push(ze,nt,ae),l.push(nt,$,ae),G+=6}o.addGroup(p,G,I),p+=G,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Ou(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Bu={clone:ns,merge:Xt},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fr=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new E,kc=new ne,Oc=new ne,Ht=class extends Fr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Oc),t.subVectors(Oc,kc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ki=-90,Oi=1,qo=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(ki,Oi,e,t);s.layers=this.layers,this.add(s);let r=new Ht(ki,Oi,e,t);r.layers=this.layers,this.add(r);let a=new Ht(ki,Oi,e,t);a.layers=this.layers,this.add(a);let o=new Ht(ki,Oi,e,t);o.layers=this.layers,this.add(o);let l=new Ht(ki,Oi,e,t);l.layers=this.layers,this.add(l);let c=new Ht(ki,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},kr=class extends Jt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yo=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:jn});r.uniforms.tEquirect.value=t;let a=new le(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=An),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ga=new E,Vu=new E,Gu=new Ge,Nn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ga.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gu.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new Ls,fr=new E,Us=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],m=s[9],y=s[10],g=s[11],f=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,g-p,_-f).normalize(),n[1].setComponents(l+r,u+c,g+p,_+f).normalize(),n[2].setComponents(l+a,u+h,g+m,_+M).normalize(),n[3].setComponents(l-a,u-h,g-m,_-M).normalize(),n[4].setComponents(l-o,u-d,g-y,_-v).normalize(),t===On)n[5].setComponents(l+o,u+d,g+y,_+v).normalize();else if(t===Rr)n[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fr.x=s.normal.x>0?e.max.x:e.min.x,fr.y=s.normal.y>0?e.max.y:e.min.y,fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wu(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){let m=d[u],y=d[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var In=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],m=[],y=[],g=[];for(let f=0;f<h;f++){let M=f*u-a;for(let v=0;v<c;v++){let _=v*d-r;m.push(_,-M,0),y.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,_=M+c*(f+1),L=M+1+c*(f+1),S=M+1+c*f;p.push(v,_,S),p.push(_,L,S)}this.setIndex(p),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qu=`#ifdef USE_ALPHAHASH
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
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
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
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Wf=`struct PhysicalMaterial {
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
}`,Xf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,x0=`#define TOON
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
}`,A0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Xu,alphahash_pars_fragment:qu,alphamap_fragment:Yu,alphamap_pars_fragment:Zu,alphatest_fragment:$u,alphatest_pars_fragment:Ju,aomap_fragment:Ku,aomap_pars_fragment:ju,batching_pars_vertex:Qu,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:df,color_pars_fragment:uf,color_pars_vertex:ff,color_vertex:pf,common:gf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:Af,emissivemap_fragment:yf,emissivemap_pars_fragment:vf,colorspace_fragment:Cf,colorspace_pars_fragment:If,envmap_fragment:Mf,envmap_common_pars_fragment:wf,envmap_pars_fragment:bf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Of,envmap_vertex:Ef,fog_vertex:Tf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Ff,lights_pars_begin:kf,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Kf,map_fragment:jf,map_pars_fragment:Qf,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:dp,normal_pars_vertex:up,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:xp,opaque_fragment:Ap,packing:yp,premultiplied_alpha_fragment:vp,project_vertex:Cp,dithering_fragment:Ip,dithering_pars_fragment:Mp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Tp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:kp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:Zp,cube_vert:$p,cube_frag:Jp,depth_vert:Kp,depth_frag:jp,distanceRGBA_vert:Qp,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:d0,meshnormal_frag:u0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:g0,meshphysical_frag:m0,meshtoon_vert:_0,meshtoon_frag:x0,points_vert:A0,points_frag:y0,shadow_vert:v0,shadow_frag:C0,sprite_vert:I0,sprite_frag:M0},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xn={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xn.physical={uniforms:Xt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var pr={r:0,b:0,g:0},pi=new vn,w0=new mt;function b0(i,e,t,n,s,r,a){let o=new Ye(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function y(M){let v=!1,_=m(M);_===null?f(o,l):_&&_.isColor&&(f(_,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===oa)?(h===void 0&&(h=new le(new qe(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ns(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(v.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(pi)),h.material.toneMapped=Qe.getTransfer(_.colorSpace)!==lt,(d!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new le(new In(2,2),new Cn({name:"BackgroundMaterial",uniforms:ns(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,v){M.getRGB(pr,zh(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:y,addToRenderList:g}}function S0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(A,R,z,k,H){let J=!1,V=d(k,z,R);r!==V&&(r=V,c(r.object)),J=p(A,k,z,H),J&&m(A,k,z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(A,R,z,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function d(A,R,z){let k=z.wireframe===!0,H=n[A.id];H===void 0&&(H={},n[A.id]=H);let J=H[R.id];J===void 0&&(J={},H[R.id]=J);let V=J[k];return V===void 0&&(V=u(l()),J[k]=V),V}function u(A){let R=[],z=[],k=[];for(let H=0;H<t;H++)R[H]=0,z[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:A,attributes:{},index:null}}function p(A,R,z,k){let H=r.attributes,J=R.attributes,V=0,se=z.getAttributes();for(let G in se)if(se[G].location>=0){let xe=H[G],Me=J[G];if(Me===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function m(A,R,z,k){let H={},J=R.attributes,V=0,se=z.getAttributes();for(let G in se)if(se[G].location>=0){let xe=J[G];xe===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor));let Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),H[G]=Me,V++}r.attributes=H,r.attributesNum=V,r.index=k}function y(){let A=r.newAttributes;for(let R=0,z=A.length;R<z;R++)A[R]=0}function g(A){f(A,0)}function f(A,R){let z=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;z[A]=1,k[A]===0&&(i.enableVertexAttribArray(A),k[A]=1),H[A]!==R&&(i.vertexAttribDivisor(A,R),H[A]=R)}function M(){let A=r.newAttributes,R=r.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==A[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function v(A,R,z,k,H,J,V){V===!0?i.vertexAttribIPointer(A,R,z,H,J):i.vertexAttribPointer(A,R,z,k,H,J)}function _(A,R,z,k){y();let H=k.attributes,J=z.getAttributes(),V=R.defaultAttributeValues;for(let se in J){let G=J[se];if(G.location>=0){let de=H[se];if(de===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){let xe=de.normalized,Me=de.itemSize,ze=e.get(de);if(ze===void 0)continue;let nt=ze.buffer,$=ze.type,ae=ze.bytesPerElement,we=$===i.INT||$===i.UNSIGNED_INT||de.gpuType===El;if(de.isInterleavedBufferAttribute){let ce=de.data,De=ce.stride,Oe=de.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)f(G.location+Fe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)g(G.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Fe=0;Fe<G.locationSize;Fe++)v(G.location+Fe,Me/G.locationSize,$,xe,De*ae,(Oe+Me/G.locationSize*Fe)*ae,we)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)f(G.location+ce,de.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<G.locationSize;ce++)g(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ce=0;ce<G.locationSize;ce++)v(G.location+ce,Me/G.locationSize,$,xe,Me*ae,Me/G.locationSize*ce*ae,we)}}else if(V!==void 0){let xe=V[se];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(G.location,xe);break;case 3:i.vertexAttrib3fv(G.location,xe);break;case 4:i.vertexAttrib4fv(G.location,xe);break;default:i.vertexAttrib1fv(G.location,xe)}}}}M()}function L(){P();for(let A in n){let R=n[A];for(let z in R){let k=R[z];for(let H in k)h(k[H].object),delete k[H];delete R[z]}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let R=n[A.id];for(let z in R){let k=R[z];for(let H in k)h(k[H].object),delete k[H];delete R[z]}delete n[A.id]}function T(A){for(let R in n){let z=n[R];if(z[A.id]===void 0)continue;let k=z[A.id];for(let H in k)h(k[H].object),delete k[H];delete z[A.id]}}function P(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:I,dispose:L,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function E0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];t.update(p,n,1)}function l(c,h,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y]*u[y];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function T0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let P=T===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:L,maxSamples:S}}function R0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Nn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,v=M*4,_=f.clippingState||null;l.value=_,_=h(m,u,v,p);for(let L=0;L!==v;++L)_[L]=t[L];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let f=p+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,_=p;v!==y;++v,_+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function P0(i){let e=new WeakMap;function t(a,o){return o===uo?a.mapping=Ki:o===fo&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===uo||o===fo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yo(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Or=class extends Fr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wi=4,Bc=[.125,.215,.35,.446,.526,.582],xi=20,Wa=new Or,zc=new Ye,Xa=null,qa=0,Ya=0,Za=!1,mi=(1+Math.sqrt(5))/2,Bi=1/mi,Hc=[new E(-mi,Bi,0),new E(mi,Bi,0),new E(-Bi,0,mi),new E(Bi,0,mi),new E(0,mi,-Bi),new E(0,mi,Bi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],is=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=Za,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ws,format:un,colorSpace:ls,depthBuffer:!1},s=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(r)),this._blurMaterial=D0(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,s){let o=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(zc),h.toneMapping=Qn,h.autoClear=!1;let p=new wt({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),m=new le(new qe,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(zc),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;gr(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ki||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hc[(s-r-1)%Hc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new le(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):xi;g>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xi}`);let f=[],M=0;for(let T=0;T<xi;++T){let P=T/y,I=Math.exp(-P*P/2);f.push(I),T===0?M+=I:T<g&&(M+=2*I)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;let _=this._sizeLods[s],L=3*_*(s>v-Wi?s-v+Wi:0),S=4*(this._cubeSize-_);gr(t,L,S,3*_,2*_),l.setRenderTarget(t),l.render(d,Wa)}};function L0(i){let e=[],t=[],n=[],s=i,r=i-Wi+1+Bc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Wi?l=Bc[a-i+Wi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,y=3,g=2,f=1,M=new Float32Array(y*m*p),v=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,P=S>2?0:-1,I=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(I,y*m*S),v.set(u,g*m*S);let A=[S,S,S,S,S,S];_.set(A,f*m*S)}let L=new Gt;L.setAttribute("position",new tn(M,y)),L.setAttribute("uv",new tn(v,g)),L.setAttribute("faceIndex",new tn(_,f)),e.push(L),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(i,e,t){let n=new Hn(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function D0(i,e,t){let n=new Float32Array(xi),s=new E(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Gc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Wc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function U0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===uo||l===fo,h=l===Ki||l===ji;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new is(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new is(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function N0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);for(let m in u.morphAttributes){let y=u.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)e.remove(y[g])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let y=p[m];for(let g=0,f=y.length;g<f;g++)e.update(y[g],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,m=d.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let v=0,_=M.length;v<_;v+=3){let L=M[v+0],S=M[v+1],T=M[v+2];u.push(L,S,S,T,T,L)}}else if(m!==void 0){let M=m.array;y=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let L=v+0,S=v+1,T=v+2;u.push(L,S,S,T,T,L)}}else return;let g=new(Oh(u)?Nr:Ur)(u,1);g.version=y;let f=r.get(d);f&&e.remove(f),r.set(d,g)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function k0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),t.update(p,n,1)}function c(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,u*a,m),t.update(p,n,m))}function h(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,n,1)}function d(u,p,m,y){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,y,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*y[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function O0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,e,t){let n=new WeakMap,s=new ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let I=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;p===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*L*4*d),T=new Lr(S,_,L,d);T.type=kn,T.needsUpdate=!0;let P=v*4;for(let A=0;A<d;A++){let R=g[A],z=f[A],k=M[A],H=_*L*4*A;for(let J=0;J<R.count;J++){let V=J*P;p===!0&&(s.fromBufferAttribute(R,J),S[H+V+0]=s.x,S[H+V+1]=s.y,S[H+V+2]=s.z,S[H+V+3]=0),m===!0&&(s.fromBufferAttribute(z,J),S[H+V+4]=s.x,S[H+V+5]=s.y,S[H+V+6]=s.z,S[H+V+7]=0),y===!0&&(s.fromBufferAttribute(k,J),S[H+V+8]=s.x,S[H+V+9]=s.y,S[H+V+10]=s.z,S[H+V+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new ne(_,L)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function z0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Br=class extends Jt{constructor(e,t,n,s,r,a,o,l,c,h=Yi){if(h!==Yi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=yi),n===void 0&&h===ts&&(n=es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vh=new Jt,Xc=new Br(1,1),Gh=new Lr,Wh=new Xo,Xh=new kr,qc=[],Yc=[],Zc=new Float32Array(16),$c=new Float32Array(9),Jc=new Float32Array(4);function cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function X0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Pt(t,n)}}function q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;$c.set(n),i.uniformMatrix3fv(this.addr,!1,$c),Pt(t,n)}}function Y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),Pt(t,n)}}function Z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function j0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=Fh,r=Xc):r=Vh,t.setTexture2D(e||r,s)}function ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wh,s)}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xh,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gh,s)}function ag(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return $0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Q0;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){let t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function cg(i,e){let t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){let t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function dg(i,e){let t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){let t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fg(i,e){let t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function mg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function Ag(i,e){i.uniform2uiv(this.addr,e)}function yg(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function Cg(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vh,r[a])}function Ig(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wh,r[a])}function Mg(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xh,r[a])}function wg(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gh,r[a])}function bg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return dg;case 35675:return ug;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return gg;case 35668:case 35672:return mg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return Ag;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return wg}}var Zo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ag(t.type)}},$o=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}},Jo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$a=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function Sg(i,e,t){let n=i.name,s=n.length;for($a.lastIndex=0;;){let r=$a.exec(n),a=$a.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kc(t,c===void 0?new Zo(o,i,e):new $o(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Jo(o),Kc(t,d)),t=d}}}var $i=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function jc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Eg=37297,Tg=0;function Rg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Qc=new Ge;function Pg(i){Qe._getMatrix(Qc,Qe.workingColorSpace,i);let e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case la:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(e),a)}else return s}function Lg(i,e){let t=Pg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dg(i,e){let t;switch(e){case Gd:t="Linear";break;case Wd:t="Reinhard";break;case Xd:t="Cineon";break;case qd:t="ACESFilmic";break;case Zd:t="AgX";break;case Sl:t="Neutral";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mr=new E;function Ug(){Qe.getLuminanceCoefficients(mr);let i=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Fg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Is(i){return i!==""}function th(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(Og,zg)}var Bg=new Map;function zg(i,e){let t=Xe[e];if(t===void 0){let n=Bg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(Hg,Vg)}function Vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Wg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case ji:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function qg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Vd:e="ENVMAP_BLENDING_ADD";break}return e}function Yg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Gg(t),c=Wg(t),h=Xg(t),d=qg(t),u=Yg(t),p=Ng(t),m=Fg(r),y=s.createProgram(),g,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Is).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Is).join(`
`),f.length>0&&(f+=`
`)):(g=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),f=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Lg("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=Ko(a),a=th(a,t),a=nh(a,t),o=Ko(o),o=th(o,t),o=nh(o,t),a=ih(a),o=ih(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=M+g+a,_=M+f+o,L=jc(s,s.VERTEX_SHADER,v),S=jc(s,s.FRAGMENT_SHADER,_);s.attachShader(y,L),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(R){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(S).trim(),J=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,S);else{let se=eh(s,L,"vertex"),G=eh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+se+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||H==="")&&(V=!1);V&&(R.diagnostics={runnable:J,programLog:z,vertexShader:{log:k,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(L),s.deleteShader(S),P=new $i(s,y),I=kg(s,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,Eg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=S,this}var $g=0,jo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qo(e),t.set(e,n)),n}},Qo=class{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}};function Jg(i,e,t,n,s,r,a){let o=new Ds,l=new jo,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(I){return c.add(I),I===0?"uv":`uv${I}`}function g(I,A,R,z,k){let H=z.fog,J=k.geometry,V=I.isMeshStandardMaterial?z.environment:null,se=(I.isMeshStandardMaterial?t:e).get(I.envMap||V),G=se&&se.mapping===oa?se.image.height:null,de=m[I.type];I.precision!==null&&(p=s.getMaxPrecision(I.precision),p!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",p,"instead."));let xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=xe!==void 0?xe.length:0,ze=0;J.morphAttributes.position!==void 0&&(ze=1),J.morphAttributes.normal!==void 0&&(ze=2),J.morphAttributes.color!==void 0&&(ze=3);let nt,$,ae,we;if(de){let at=xn[de];nt=at.vertexShader,$=at.fragmentShader}else nt=I.vertexShader,$=I.fragmentShader,l.update(I),ae=l.getVertexShaderID(I),we=l.getFragmentShaderID(I);let ce=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,je=!!I.map,j=!!I.matcap,re=!!se,b=!!I.aoMap,Pe=!!I.lightMap,ee=!!I.bumpMap,ve=!!I.normalMap,he=!!I.displacementMap,Ue=!!I.emissiveMap,Ae=!!I.metalnessMap,w=!!I.roughnessMap,x=I.anisotropy>0,F=I.clearcoat>0,Y=I.dispersion>0,Q=I.iridescence>0,Z=I.sheen>0,be=I.transmission>0,fe=x&&!!I.anisotropyMap,ye=F&&!!I.clearcoatMap,Ze=F&&!!I.clearcoatNormalMap,ie=F&&!!I.clearcoatRoughnessMap,Ce=Q&&!!I.iridescenceMap,Ne=Q&&!!I.iridescenceThicknessMap,ke=Z&&!!I.sheenColorMap,Ie=Z&&!!I.sheenRoughnessMap,$e=!!I.specularMap,We=!!I.specularColorMap,ut=!!I.specularIntensityMap,D=be&&!!I.transmissionMap,pe=be&&!!I.thicknessMap,W=!!I.gradientMap,K=!!I.alphaMap,_e=I.alphaTest>0,ge=!!I.alphaHash,He=!!I.extensions,It=Qn;I.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(It=i.toneMapping);let Ot={shaderID:de,shaderType:I.type,shaderName:I.name,vertexShader:nt,fragmentShader:$,defines:I.defines,customVertexShaderID:ae,customFragmentShaderID:we,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ls,alphaToCoverage:!!I.alphaToCoverage,map:je,matcap:j,envMap:re,envMapMode:re&&se.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:Pe,bumpMap:ee,normalMap:ve,displacementMap:u&&he,emissiveMap:Ue,normalMapObjectSpace:ve&&I.normalMapType===jd,normalMapTangentSpace:ve&&I.normalMapType===Nh,metalnessMap:Ae,roughnessMap:w,anisotropy:x,anisotropyMap:fe,clearcoat:F,clearcoatMap:ye,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ie,dispersion:Y,iridescence:Q,iridescenceMap:Ce,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:Ie,specularMap:$e,specularColorMap:We,specularIntensityMap:ut,transmission:be,transmissionMap:D,thicknessMap:pe,gradientMap:W,opaque:I.transparent===!1&&I.blending===qi&&I.alphaToCoverage===!1,alphaMap:K,alphaTest:_e,alphaHash:ge,combine:I.combine,mapUv:je&&y(I.map.channel),aoMapUv:b&&y(I.aoMap.channel),lightMapUv:Pe&&y(I.lightMap.channel),bumpMapUv:ee&&y(I.bumpMap.channel),normalMapUv:ve&&y(I.normalMap.channel),displacementMapUv:he&&y(I.displacementMap.channel),emissiveMapUv:Ue&&y(I.emissiveMap.channel),metalnessMapUv:Ae&&y(I.metalnessMap.channel),roughnessMapUv:w&&y(I.roughnessMap.channel),anisotropyMapUv:fe&&y(I.anisotropyMap.channel),clearcoatMapUv:ye&&y(I.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&y(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(I.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(I.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(I.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(I.sheenRoughnessMap.channel),specularMapUv:$e&&y(I.specularMap.channel),specularColorMapUv:We&&y(I.specularColorMap.channel),specularIntensityMapUv:ut&&y(I.specularIntensityMap.channel),transmissionMapUv:D&&y(I.transmissionMap.channel),thicknessMapUv:pe&&y(I.thicknessMap.channel),alphaMapUv:K&&y(I.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ve||x),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(je||K),fog:!!H,useFog:I.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:je&&I.map.isVideoTexture===!0&&Qe.getTransfer(I.map.colorSpace)===lt,decodeVideoTextureEmissive:Ue&&I.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(I.emissiveMap.colorSpace)===lt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===qt,flipSided:I.side===Ut,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:He&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&I.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(I){let A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(let R in I.defines)A.push(R),A.push(I.defines[R]);return I.isRawShaderMaterial===!1&&(M(A,I),v(A,I),A.push(i.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function M(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function v(I,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),I.push(o.mask)}function _(I){let A=m[I.type],R;if(A){let z=xn[A];R=Bu.clone(z.uniforms)}else R=I.uniforms;return R}function L(I,A){let R;for(let z=0,k=h.length;z<k;z++){let H=h[z];if(H.cacheKey===A){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Zg(i,A,I,r),h.push(R)),R}function S(I){if(--I.usedTimes===0){let A=h.indexOf(I);h[A]=h[h.length-1],h.pop(),I.destroy()}}function T(I){l.remove(I)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:P}}function Kg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ah(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,p,m,y,g){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=y,f.group=g),e++,f}function o(d,u,p,m,y,g){let f=a(d,u,p,m,y,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,m,y,g){let f=a(d,u,p,m,y,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||jg),n.length>1&&n.sort(u||rh),s.length>1&&s.sort(u||rh)}function h(){for(let d=e,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Qg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ah,i.set(n,[a])):s>=r.length?(a=new ah,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function em(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ye};break;case"SpotLight":t={position:new E,direction:new E,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function tm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nm=0;function im(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sm(i){let e=new em,t=tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new mt,a=new mt;function o(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,y=0,g=0,f=0,M=0,v=0,_=0,L=0,S=0,T=0;c.sort(im);for(let I=0,A=c.length;I<A;I++){let R=c[I],z=R.color,k=R.intensity,H=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);T++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let se=R.shadow,G=t.get(R);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[y]=V;let se=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,se.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[y]=se.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=J,_++}y++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=V,g++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let se=R.shadow,G=t.get(R);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,G.shadowCameraNear=se.camera.near,G.shadowCameraFar=se.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,v++}n.point[m]=V,m++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=V,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+L-S,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=T,n.version=nm++)}function l(c,h){let d=0,u=0,p=0,m=0,y=0,g=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let v=c[f];if(v.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function oh(i){let e=new sm(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function rm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new oh(i),e.set(s,[o])):r>=a.length?(o=new oh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var el=class extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
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
}`;function lm(i,e,t){let n=new Us,s=new ne,r=new ne,a=new ct,o=new el({depthPacking:Kd}),l=new tl,c={},h=t.maxTextureSize,d={[ti]:Ut,[Ut]:ti,[qt]:qt},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:am,fragmentShader:om}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new Gt;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let f=this.type;this.render=function(S,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let I=i.getRenderTarget(),A=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==Un&&this.type===Un,H=f===Un&&this.type!==Un;for(let J=0,V=S.length;J<V;J++){let se=S[J],G=se.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let de=G.getFrameExtents();if(s.multiply(de),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,G.mapSize.y=r.y)),G.map===null||k===!0||H===!0){let Me=this.type!==Un?{minFilter:fn,magFilter:fn}:{};G.map!==null&&G.map.dispose(),G.map=new Hn(s.x,s.y,Me),G.map.texture.name=se.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let xe=G.getViewportCount();for(let Me=0;Me<xe;Me++){let ze=G.getViewport(Me);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),z.viewport(a),G.updateMatrices(se,Me),n=G.getFrustum(),_(T,P,G.camera,se,this.type)}G.isPointLightShadow!==!0&&this.type===Un&&M(G,P),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(I,A,R)};function M(S,T){let P=e.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Hn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,P,u,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,P,p,y,null)}function v(S,T,P,I){let A=null,R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)A=R;else if(A=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=A.uuid,k=T.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let J=H[k];J===void 0&&(J=A.clone(),H[k]=J,T.addEventListener("dispose",L)),A=J}if(A.visible=T.visible,A.wireframe=T.wireframe,I===Un?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=i.properties.get(A);z.light=P}return A}function _(S,T,P,I,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Un)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let k=e.update(S),H=S.material;if(Array.isArray(H)){let J=k.groups;for(let V=0,se=J.length;V<se;V++){let G=J[V],de=H[G.materialIndex];if(de&&de.visible){let xe=v(S,de,I,A);S.onBeforeShadow(i,S,T,P,k,xe,G),i.renderBufferDirect(P,null,k,xe,S,G),S.onAfterShadow(i,S,T,P,k,xe,G)}}}else if(H.visible){let J=v(S,H,I,A);S.onBeforeShadow(i,S,T,P,k,J,null),i.renderBufferDirect(P,null,k,J,S,null),S.onAfterShadow(i,S,T,P,k,J,null)}}let z=S.children;for(let k=0,H=z.length;k<H;k++)_(z[k],T,P,I,A)}function L(S){S.target.removeEventListener("dispose",L);for(let P in c){let I=c[P],A=S.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}var cm={[so]:ro,[ao]:co,[oo]:ho,[Ji]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Ji};function hm(i,e){function t(){let D=!1,pe=new ct,W=null,K=new ct(0,0,0,0);return{setMask:function(_e){W!==_e&&!D&&(i.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ge,He,It,Ot){Ot===!0&&(_e*=It,ge*=It,He*=It),pe.set(_e,ge,He,It),K.equals(pe)===!1&&(i.clearColor(_e,ge,He,It),K.copy(pe))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,W=null,K=null,_e=null;return{setReversed:function(ge){if(pe!==ge){let He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let It=_e;_e=null,this.setClear(It)}pe=ge},getReversed:function(){return pe},setTest:function(ge){ge?ce(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ge){W!==ge&&!D&&(i.depthMask(ge),W=ge)},setFunc:function(ge){if(pe&&(ge=cm[ge]),K!==ge){switch(ge){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ge}},setLocked:function(ge){D=ge},setClear:function(ge){_e!==ge&&(pe&&(ge=1-ge),i.clearDepth(ge),_e=ge)},reset:function(){D=!1,W=null,K=null,_e=null,pe=!1}}}function s(){let D=!1,pe=null,W=null,K=null,_e=null,ge=null,He=null,It=null,Ot=null;return{setTest:function(at){D||(at?ce(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(at){pe!==at&&!D&&(i.stencilMask(at),pe=at)},setFunc:function(at,an,Sn){(W!==at||K!==an||_e!==Sn)&&(i.stencilFunc(at,an,Sn),W=at,K=an,_e=Sn)},setOp:function(at,an,Sn){(ge!==at||He!==an||It!==Sn)&&(i.stencilOp(at,an,Sn),ge=at,He=an,It=Sn)},setLocked:function(at){D=at},setClear:function(at){Ot!==at&&(i.clearStencil(at),Ot=at)},reset:function(){D=!1,pe=null,W=null,K=null,_e=null,ge=null,He=null,It=null,Ot=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],m=null,y=!1,g=null,f=null,M=null,v=null,_=null,L=null,S=null,T=new Ye(0,0,0),P=0,I=!1,A=null,R=null,z=null,k=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=se>=1):G.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=se>=2);let de=null,xe={},Me=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),nt=new ct().fromArray(Me),$=new ct().fromArray(ze);function ae(D,pe,W,K){let _e=new Uint8Array(4),ge=i.createTexture();i.bindTexture(D,ge),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<W;He++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(pe+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ge}let we={};we[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Ji),ee(!1),ve(cc),ce(i.CULL_FACE),b(jn);function ce(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function De(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Oe(D,pe){return d[D]!==pe?(i.bindFramebuffer(D,pe),d[D]=pe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Fe(D,pe){let W=p,K=!1;if(D){W=u.get(pe),W===void 0&&(W=[],u.set(pe,W));let _e=D.textures;if(W.length!==_e.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,He=_e.length;ge<He;ge++)W[ge]=i.COLOR_ATTACHMENT0+ge;W.length=_e.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function je(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let j={[_i]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[wd]:i.FUNC_REVERSE_SUBTRACT};j[bd]=i.MIN,j[Sd]=i.MAX;let re={[Ed]:i.ZERO,[Td]:i.ONE,[Rd]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[Fd]:i.SRC_ALPHA_SATURATE,[Ud]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function b(D,pe,W,K,_e,ge,He,It,Ot,at){if(D===jn){y===!0&&(De(i.BLEND),y=!1);return}if(y===!1&&(ce(i.BLEND),y=!0),D!==Id){if(D!==g||at!==I){if((f!==_i||_!==_i)&&(i.blendEquation(i.FUNC_ADD),f=_i,_=_i),at)switch(D){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,v=null,L=null,S=null,T.set(0,0,0),P=0,g=D,I=at}return}_e=_e||pe,ge=ge||W,He=He||K,(pe!==f||_e!==_)&&(i.blendEquationSeparate(j[pe],j[_e]),f=pe,_=_e),(W!==M||K!==v||ge!==L||He!==S)&&(i.blendFuncSeparate(re[W],re[K],re[ge],re[He]),M=W,v=K,L=ge,S=He),(It.equals(T)===!1||Ot!==P)&&(i.blendColor(It.r,It.g,It.b,Ot),T.copy(It),P=Ot),g=D,I=!1}function Pe(D,pe){D.side===qt?De(i.CULL_FACE):ce(i.CULL_FACE);let W=D.side===Ut;pe&&(W=!W),ee(W),D.blending===qi&&D.transparent===!1?b(jn):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){A!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),A=D)}function ve(D){D!==vd?(ce(i.CULL_FACE),D!==R&&(D===cc?i.cullFace(i.BACK):D===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),R=D}function he(D){D!==z&&(V&&i.lineWidth(D),z=D)}function Ue(D,pe,W){D?(ce(i.POLYGON_OFFSET_FILL),(k!==pe||H!==W)&&(i.polygonOffset(pe,W),k=pe,H=W)):De(i.POLYGON_OFFSET_FILL)}function Ae(D){D?ce(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+J-1),de!==D&&(i.activeTexture(D),de=D)}function x(D,pe,W){W===void 0&&(de===null?W=i.TEXTURE0+J-1:W=de);let K=xe[W];K===void 0&&(K={type:void 0,texture:void 0},xe[W]=K),(K.type!==D||K.texture!==pe)&&(de!==W&&(i.activeTexture(W),de=W),i.bindTexture(D,pe||we[D]),K.type=D,K.texture=pe)}function F(){let D=xe[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){nt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function Ie(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function $e(D,pe){let W=c.get(pe);W===void 0&&(W=new WeakMap,c.set(pe,W));let K=W.get(D);K===void 0&&(K=i.getUniformBlockIndex(pe,D.name),W.set(D,K))}function We(D,pe){let K=c.get(pe).get(D);l.get(pe)!==K&&(i.uniformBlockBinding(pe,K,D.__bindingPointIndex),l.set(pe,K))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,xe={},d={},u=new WeakMap,p=[],m=null,y=!1,g=null,f=null,M=null,v=null,_=null,L=null,S=null,T=new Ye(0,0,0),P=0,I=!1,A=null,R=null,z=null,k=null,H=null,nt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:De,bindFramebuffer:Oe,drawBuffers:Fe,useProgram:je,setBlending:b,setMaterial:Pe,setFlipSided:ee,setCullFace:ve,setLineWidth:he,setPolygonOffset:Ue,setScissorTest:Ae,activeTexture:w,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ce,texImage3D:Ne,updateUBOMapping:$e,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:ke,viewport:Ie,reset:ut}}function lh(i,e,t,n){let s=dm(n);switch(t){case Eh:return i*e;case Rh:return i*e;case Ph:return i*e*2;case Lh:return i*e/s.components*s.byteLength;case Pl:return i*e/s.components*s.byteLength;case Dh:return i*e*2/s.components*s.byteLength;case Ll:return i*e*2/s.components*s.byteLength;case Th:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case Dl:return i*e*4/s.components*s.byteLength;case Mr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:case xo:return Math.max(i,16)*Math.max(e,8)/4;case go:case _o:return Math.max(i,8)*Math.max(e,8)/2;case Ao:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Er:case Fo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uh:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bo:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(i){switch(i){case zn:case wh:return{byteLength:1,components:1};case Ts:case bh:case Ws:return{byteLength:2,components:1};case Tl:case Rl:return{byteLength:2,components:4};case yi:case El:case kn:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function um(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return p?new OffscreenCanvas(w,x):Ps("canvas")}function y(w,x,F){let Y=1,Q=Ae(w);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let Z=Math.floor(Y*Q.width),be=Math.floor(Y*Q.height);d===void 0&&(d=m(Z,be));let fe=x?m(Z,be):d;return fe.width=Z,fe.height=be,fe.getContext("2d").drawImage(w,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+be+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function g(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,x,F,Y,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=x;if(x===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),x===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),x===i.RGBA){let be=Q?la:Qe.getTransfer(Y);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=be===lt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(w,x){let F;return w?x===null||x===yi||x===es?F=i.DEPTH24_STENCIL8:x===kn?F=i.DEPTH32F_STENCIL8:x===Ts&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===es?F=i.DEPTH_COMPONENT24:x===kn?F=i.DEPTH_COMPONENT32F:x===Ts&&(F=i.DEPTH_COMPONENT16),F}function L(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==An?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function S(w){let x=w.target;x.removeEventListener("dispose",S),P(x),x.isVideoTexture&&h.delete(x)}function T(w){let x=w.target;x.removeEventListener("dispose",T),A(x)}function P(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,Y=u.get(F);if(Y){let Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(w),Object.keys(Y).length===0&&u.delete(F)}n.remove(w)}function I(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let F=w.source,Y=u.get(F);delete Y[x.__cacheKey],a.memory.textures--}function A(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=w.textures;for(let Y=0,Q=F.length;Y<Q;Y++){let Z=n.get(F[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(w)}let R=0;function z(){R=0}function k(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function H(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function J(w,x){let F=n.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,w,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function V(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function se(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function G(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){ae(F,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let de={[Qi]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},xe={[fn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Me={[Qd]:i.NEVER,[ru]:i.ALWAYS,[eu]:i.LESS,[Fh]:i.LEQUAL,[tu]:i.EQUAL,[su]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function ze(w,x){if(x.type===kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===An||x.magFilter===Ca||x.magFilter===Js||x.magFilter===Fn||x.minFilter===An||x.minFilter===Ca||x.minFilter===Js||x.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,de[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,de[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,de[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==Js&&x.minFilter!==Fn||x.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function nt(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));let Z=H(x);if(Z!==w.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[Z].usedTimes++;let be=Q[w.__cacheKey];be!==void 0&&(Q[w.__cacheKey].usedTimes--,be.usedTimes===0&&I(x)),w.__cacheKey=Z,w.__webglTexture=Q[Z].texture}return F}function $(w,x,F){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=nt(w,x),Z=x.source;t.bindTexture(Y,w.__webglTexture,i.TEXTURE0+F);let be=n.get(Z);if(Z.version!==be.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);let fe=Qe.getPrimaries(Qe.workingColorSpace),ye=x.colorSpace===Jn?null:Qe.getPrimaries(x.colorSpace),Ze=x.colorSpace===Jn||fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ie=y(x.image,!1,s.maxTextureSize);ie=Ue(x,ie);let Ce=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),ke=v(x.internalFormat,Ce,Ne,x.colorSpace,x.isVideoTexture);ze(Y,x);let Ie,$e=x.mipmaps,We=x.isVideoTexture!==!0,ut=be.__version===void 0||Q===!0,D=Z.dataReady,pe=L(x,ie);if(x.isDepthTexture)ke=_(x.format===ts,x.type),ut&&(We?t.texStorage2D(i.TEXTURE_2D,1,ke,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ke,ie.width,ie.height,0,Ce,Ne,null));else if(x.isDataTexture)if($e.length>0){We&&ut&&t.texStorage2D(i.TEXTURE_2D,pe,ke,$e[0].width,$e[0].height);for(let W=0,K=$e.length;W<K;W++)Ie=$e[W],We?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ie.width,Ie.height,Ce,Ne,Ie.data):t.texImage2D(i.TEXTURE_2D,W,ke,Ie.width,Ie.height,0,Ce,Ne,Ie.data);x.generateMipmaps=!1}else We?(ut&&t.texStorage2D(i.TEXTURE_2D,pe,ke,ie.width,ie.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Ce,Ne,ie.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ie.width,ie.height,0,Ce,Ne,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ke,$e[0].width,$e[0].height,ie.depth);for(let W=0,K=$e.length;W<K;W++)if(Ie=$e[W],x.format!==un)if(Ce!==null)if(We){if(D)if(x.layerUpdates.size>0){let _e=lh(Ie.width,Ie.height,x.format,x.type);for(let ge of x.layerUpdates){let He=Ie.data.subarray(ge*_e/Ie.data.BYTES_PER_ELEMENT,(ge+1)*_e/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ge,Ie.width,Ie.height,1,Ce,He)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ie.width,Ie.height,ie.depth,Ce,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,ke,Ie.width,Ie.height,ie.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ie.width,Ie.height,ie.depth,Ce,Ne,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,ke,Ie.width,Ie.height,ie.depth,0,Ce,Ne,Ie.data)}else{We&&ut&&t.texStorage2D(i.TEXTURE_2D,pe,ke,$e[0].width,$e[0].height);for(let W=0,K=$e.length;W<K;W++)Ie=$e[W],x.format!==un?Ce!==null?We?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,W,ke,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ie.width,Ie.height,Ce,Ne,Ie.data):t.texImage2D(i.TEXTURE_2D,W,ke,Ie.width,Ie.height,0,Ce,Ne,Ie.data)}else if(x.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ke,ie.width,ie.height,ie.depth),D)if(x.layerUpdates.size>0){let W=lh(ie.width,ie.height,x.format,x.type);for(let K of x.layerUpdates){let _e=ie.data.subarray(K*W/ie.data.BYTES_PER_ELEMENT,(K+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,Ce,Ne,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ce,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ie.width,ie.height,ie.depth,0,Ce,Ne,ie.data);else if(x.isData3DTexture)We?(ut&&t.texStorage3D(i.TEXTURE_3D,pe,ke,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ce,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ie.width,ie.height,ie.depth,0,Ce,Ne,ie.data);else if(x.isFramebufferTexture){if(ut)if(We)t.texStorage2D(i.TEXTURE_2D,pe,ke,ie.width,ie.height);else{let W=ie.width,K=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(i.TEXTURE_2D,_e,ke,W,K,0,Ce,Ne,null),W>>=1,K>>=1}}else if($e.length>0){if(We&&ut){let W=Ae($e[0]);t.texStorage2D(i.TEXTURE_2D,pe,ke,W.width,W.height)}for(let W=0,K=$e.length;W<K;W++)Ie=$e[W],We?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ce,Ne,Ie):t.texImage2D(i.TEXTURE_2D,W,ke,Ce,Ne,Ie);x.generateMipmaps=!1}else if(We){if(ut){let W=Ae(ie);t.texStorage2D(i.TEXTURE_2D,pe,ke,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ce,Ne,ie);g(x)&&f(Y),be.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ae(w,x,F){if(x.image.length!==6)return;let Y=nt(w,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let Z=n.get(Q);if(Q.version!==Z.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);let be=Qe.getPrimaries(Qe.workingColorSpace),fe=x.colorSpace===Jn?null:Qe.getPrimaries(x.colorSpace),ye=x.colorSpace===Jn||be===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let K=0;K<6;K++)!Ze&&!ie?Ce[K]=y(x.image[K],!0,s.maxCubemapSize):Ce[K]=ie?x.image[K].image:x.image[K],Ce[K]=Ue(x,Ce[K]);let Ne=Ce[0],ke=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),$e=v(x.internalFormat,ke,Ie,x.colorSpace),We=x.isVideoTexture!==!0,ut=Z.__version===void 0||Y===!0,D=Q.dataReady,pe=L(x,Ne);ze(i.TEXTURE_CUBE_MAP,x);let W;if(Ze){We&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,$e,Ne.width,Ne.height);for(let K=0;K<6;K++){W=Ce[K].mipmaps;for(let _e=0;_e<W.length;_e++){let ge=W[_e];x.format!==un?ke!==null?We?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,ge.width,ge.height,ke,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,$e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,ge.width,ge.height,ke,Ie,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,$e,ge.width,ge.height,0,ke,Ie,ge.data)}}}else{if(W=x.mipmaps,We&&ut){W.length>0&&pe++;let K=Ae(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,$e,K.width,K.height)}for(let K=0;K<6;K++)if(ie){We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce[K].width,Ce[K].height,ke,Ie,Ce[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Ce[K].width,Ce[K].height,0,ke,Ie,Ce[K].data);for(let _e=0;_e<W.length;_e++){let He=W[_e].image[K].image;We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,He.width,He.height,ke,Ie,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,$e,He.width,He.height,0,ke,Ie,He.data)}}else{We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ke,Ie,Ce[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,ke,Ie,Ce[K]);for(let _e=0;_e<W.length;_e++){let ge=W[_e];We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ke,Ie,ge.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,$e,ke,Ie,ge.image[K])}}}g(x)&&f(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function we(w,x,F,Y,Q,Z){let be=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),ye=v(F.internalFormat,be,fe,F.colorSpace),Ze=n.get(x),ie=n.get(F);if(ie.__renderTarget=x,!Ze.__hasExternalTextures){let Ce=Math.max(1,x.width>>Z),Ne=Math.max(1,x.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,ye,Ce,Ne,x.depth,0,be,fe,null):t.texImage2D(Q,Z,ye,Ce,Ne,0,be,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,ie.__webglTexture,0,ee(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,ie.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=_(x.stencilBuffer,Q),be=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ee(x);ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Z,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{let Y=x.textures;for(let Q=0;Q<Y.length;Q++){let Z=Y[Q],be=r.convert(Z.format,Z.colorSpace),fe=r.convert(Z.type),ye=v(Z.internalFormat,be,fe,Z.colorSpace),Ze=ee(x);F&&ve(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,ye,x.width,x.height):ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,ye,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ye,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);let Q=Y.__webglTexture,Z=ee(x);if(x.depthTexture.format===Yi)ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ts)ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ce(x.__webglDepthbuffer[Y],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ce(x.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(w,x,F){let Y=n.get(w);x!==void 0&&we(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Oe(w)}function je(w){let x=w.texture,F=n.get(w),Y=n.get(x);w.addEventListener("dispose",T);let Q=w.textures,Z=w.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ye=0;ye<x.mipmaps.length;ye++)F.__webglFramebuffer[fe][ye]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(be)for(let fe=0,ye=Q.length;fe<ye;fe++){let Ze=n.get(Q[fe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ve(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){let ye=Q[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);let Ze=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),Ce=v(ye.internalFormat,Ze,ie,ye.colorSpace,w.isXRRenderTarget===!0),Ne=ee(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)we(F.__webglFramebuffer[fe][ye],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else we(F.__webglFramebuffer[fe],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,ye=Q.length;fe<ye;fe++){let Ze=Q[fe],ie=n.get(Ze);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),ze(i.TEXTURE_2D,Ze),we(F.__webglFramebuffer,w,Ze,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),g(Ze)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),ze(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)we(F.__webglFramebuffer[ye],w,x,i.COLOR_ATTACHMENT0,fe,ye);else we(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,fe,0);g(x)&&f(fe),t.unbindTexture()}w.depthBuffer&&Oe(w)}function j(w){let x=w.textures;for(let F=0,Y=x.length;F<Y;F++){let Q=x[F];if(g(Q)){let Z=M(w),be=n.get(Q).__webglTexture;t.bindTexture(Z,be),f(Z),t.unbindTexture()}}}let re=[],b=[];function Pe(w){if(w.samples>0){if(ve(w)===!1){let x=w.textures,F=w.width,Y=w.height,Q=i.COLOR_BUFFER_BIT,Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),fe=x.length>1;if(fe)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);let Ze=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(re.length=0,b.length=0,re.push(i.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(re.push(Z),b.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);let Ze=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ee(w){return Math.min(s.maxSamples,w.samples)}function ve(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function he(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ue(w,x){let F=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ls&&F!==Jn&&(Qe.getTransfer(F)===lt?(Y!==un||Q!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ae(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=se,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ve}function fm(i,e){function t(n,s=Jn){let r,a=Qe.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Ws)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===Th)return i.RGB;if(n===un)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Ph)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Lh)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Dh)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Mr||n===wr||n===br||n===Sr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===mo||n===_o||n===xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===yo||n===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ao||n===yo)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Io||n===Mo||n===wo||n===bo||n===So||n===Eo||n===To||n===Ro||n===Po||n===Lo||n===Do||n===Uo||n===No)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===Fo||n===ko)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===Oo||n===Bo||n===zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},pm={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mm=`
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

}`,il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:gm,fragmentShader:mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sl=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null,y=new il,g=t.getContextAttributes(),f=null,M=null,v=[],_=[],L=new ne,S=null,T=new Ht;T.viewport=new ct;let P=new Ht;P.viewport=new ct;let I=[T,P],A=new nl,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=v[$];return ae===void 0&&(ae=new bs,v[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=v[$];return ae===void 0&&(ae=new bs,v[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=v[$];return ae===void 0&&(ae=new bs,v[$]=ae),ae.getHandSpace()};function k($){let ae=_.indexOf($.inputSource);if(ae===-1)return;let we=v[ae];we!==void 0&&(we.update($.inputSource,$.frame,c||a),we.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){let ae=_[$];ae!==null&&(_[$]=null,v[$].disconnect(ae))}R=null,z=null,y.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,M=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Hn(p.framebufferWidth,p.framebufferHeight,{format:un,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,we=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?ts:Yi,we=g.stencil?es:yi);let De={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Hn(u.textureWidth,u.textureHeight,{format:un,type:zn,depthTexture:new Br(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J($){for(let ae=0;ae<$.removed.length;ae++){let we=$.removed[ae],ce=_.indexOf(we);ce>=0&&(_[ce]=null,v[ce].disconnect(we))}for(let ae=0;ae<$.added.length;ae++){let we=$.added[ae],ce=_.indexOf(we);if(ce===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=_.length){_.push(we),ce=Oe;break}else if(_[Oe]===null){_[Oe]=we,ce=Oe;break}if(ce===-1)break}let De=v[ce];De&&De.connect(we)}}let V=new E,se=new E;function G($,ae,we){V.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(we.matrixWorld);let ce=V.distanceTo(se),De=ae.projectionMatrix.elements,Oe=we.projectionMatrix.elements,Fe=De[14]/(De[10]-1),je=De[14]/(De[10]+1),j=(De[9]+1)/De[5],re=(De[9]-1)/De[5],b=(De[8]-1)/De[0],Pe=(Oe[8]+1)/Oe[0],ee=Fe*b,ve=Fe*Pe,he=ce/(-b+Pe),Ue=he*-b;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(he),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Ae=Fe+he,w=je+he,x=ee-Ue,F=ve+(ce-Ue),Y=j*je/w*Ae,Q=re*je/w*Ae;$.projectionMatrix.makePerspective(x,F,Y,Q,Ae,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ae=$.near,we=$.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(we=y.depthFar)),A.near=P.near=T.near=ae,A.far=P.far=T.far=we,(R!==A.near||z!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,z=A.far),T.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,A.layers.mask=T.layers.mask|P.layers.mask;let ce=$.parent,De=A.cameras;de(A,ce);for(let Oe=0;Oe<De.length;Oe++)de(De[Oe],ce);De.length===2?G(A,T,P):A.projectionMatrix.copy(T.projectionMatrix),xe($,A,ce)};function xe($,ae,we){we===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(A)};let Me=null;function ze($,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){let we=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ce=!1;we.length!==A.cameras.length&&(A.cameras.length=0,ce=!0);for(let Oe=0;Oe<we.length;Oe++){let Fe=we[Oe],je=null;if(p!==null)je=p.getViewport(Fe);else{let re=d.getViewSubImage(u,Fe);je=re.viewport,Oe===0&&(e.setRenderTargetTextures(M,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(M))}let j=I[Oe];j===void 0&&(j=new Ht,j.layers.enable(Oe),j.viewport=new ct,I[Oe]=j),j.matrix.fromArray(Fe.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Fe.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(je.x,je.y,je.width,je.height),Oe===0&&(A.matrix.copy(j.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ce===!0&&A.cameras.push(j)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){let Oe=d.getDepthInformation(we[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,s.renderState)}}for(let we=0;we<v.length;we++){let ce=_[we],De=v[we];ce!==null&&De!==void 0&&De.update(ce,ae,c||a)}Me&&Me($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}let nt=new Hh;nt.setAnimationLoop(ze),this.setAnimationLoop=function($){Me=$},this.dispose=function(){}}},gi=new vn,_m=new mt;function xm(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,zh(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,M,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ut&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ut&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=e.get(f),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(gi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,M,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=v*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){let M=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Am(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(m(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));let L=v.program;n.updateUBOMapping(M,L);let S=e.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function h(M){let v=d();M.__bindingPointIndex=v;let _=i.createBuffer(),L=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let v=s[M.id],_=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=_.length;S<T;S++){let P=Array.isArray(_[S])?_[S]:[_[S]];for(let I=0,A=P.length;I<A;I++){let R=P[I];if(p(R,S,I,L)===!0){let z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],H=0;for(let J=0;J<k.length;J++){let V=k[J],se=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+H,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,H),H+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,_,L){let S=M.value,T=v+"_"+_;if(L[T]===void 0)return typeof S=="number"||typeof S=="boolean"?L[T]=S:L[T]=S.clone(),!0;{let P=L[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return L[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(M){let v=M.uniforms,_=0,L=16;for(let T=0,P=v.length;T<P;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,R=I.length;A<R;A++){let z=I[A],k=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=k.length;H<J;H++){let V=k[H],se=y(V),G=_%L,de=G%se.boundary,xe=G+de;_+=de,xe!==0&&L-xe<se.storage&&(_+=L-xe),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=se.storage}}}let S=_%L;return S>0&&(_+=L-S),M.__size=_,M.__cache={},this}function y(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var zr=class{constructor(e={}){let{canvas:t=Cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),y=new Int32Array(4),g=null,f=null,M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=Qn,this.toneMappingExposure=1;let _=this,L=!1,S=0,T=0,P=null,I=-1,A=null,R=new ct,z=new ct,k=null,H=new Ye(0),J=0,V=t.width,se=t.height,G=1,de=null,xe=null,Me=new ct(0,0,V,se),ze=new ct(0,0,V,se),nt=!1,$=new Us,ae=!1,we=!1,ce=new mt,De=new mt,Oe=new E,Fe=new ct,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function re(){return P===null?G:1}let b=n;function Pe(C,U){return t.getContext(C,U)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ge,!1),b===null){let U="webgl2";if(b=Pe(U,C),b===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,ve,he,Ue,Ae,w,x,F,Y,Q,Z,be,fe,ye,Ze,ie,Ce,Ne,ke,Ie,$e,We,ut,D;function pe(){ee=new N0(b),ee.init(),We=new fm(b,ee),ve=new T0(b,ee,e,We),he=new hm(b,ee),ve.reverseDepthBuffer&&u&&he.buffers.depth.setReversed(!0),Ue=new O0(b),Ae=new Kg,w=new um(b,ee,he,Ae,ve,We,Ue),x=new P0(_),F=new U0(_),Y=new Wu(b),ut=new S0(b,Y),Q=new F0(b,Y,Ue,ut),Z=new z0(b,Q,Y,Ue),ke=new B0(b,ve,w),ie=new R0(Ae),be=new Jg(_,x,F,ee,ve,ut,ie),fe=new xm(_,Ae),ye=new Qg,Ze=new rm(ee),Ne=new b0(_,x,F,he,Z,p,l),Ce=new lm(_,Z,ve),D=new Am(b,Ue,ve,he),Ie=new E0(b,ee,Ue),$e=new k0(b,ee,Ue),Ue.programs=be.programs,_.capabilities=ve,_.extensions=ee,_.properties=Ae,_.renderLists=ye,_.shadowMap=Ce,_.state=he,_.info=Ue}pe();let W=new sl(_,b);this.xr=W,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(V,se,!1))},this.getSize=function(C){return C.set(V,se)},this.setSize=function(C,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,se=U,t.width=Math.floor(C*G),t.height=Math.floor(U*G),O===!0&&(t.style.width=C+"px",t.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(V*G,se*G).floor()},this.setDrawingBufferSize=function(C,U,O){V=C,se=U,G=O,t.width=Math.floor(C*O),t.height=Math.floor(U*O),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,U,O,B){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,U,O,B),he.viewport(R.copy(Me).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,U,O,B){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,U,O,B),he.scissor(z.copy(ze).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){he.setScissorTest(nt=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){xe=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(C=!0,U=!0,O=!0){let B=0;if(C){let N=!1;if(P!==null){let oe=P.texture.format;N=oe===Dl||oe===Ll||oe===Pl}if(N){let oe=P.texture.type,me=oe===zn||oe===yi||oe===Ts||oe===es||oe===Tl||oe===Rl,Ee=Ne.getClearColor(),Te=Ne.getClearAlpha(),Be=Ee.r,Ve=Ee.g,Re=Ee.b;me?(m[0]=Be,m[1]=Ve,m[2]=Re,m[3]=Te,b.clearBufferuiv(b.COLOR,0,m)):(y[0]=Be,y[1]=Ve,y[2]=Re,y[3]=Te,b.clearBufferiv(b.COLOR,0,y))}else B|=b.COLOR_BUFFER_BIT}U&&(B|=b.DEPTH_BUFFER_BIT),O&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),Ze.dispose(),Ae.dispose(),x.dispose(),F.dispose(),Z.dispose(),ut.dispose(),D.dispose(),be.dispose(),W.dispose(),W.removeEventListener("sessionstart",tc),W.removeEventListener("sessionend",nc),ci.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let C=Ue.autoReset,U=Ce.enabled,O=Ce.autoUpdate,B=Ce.needsUpdate,N=Ce.type;pe(),Ue.autoReset=C,Ce.enabled=U,Ce.autoUpdate=O,Ce.needsUpdate=B,Ce.type=N}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function He(C){let U=C.target;U.removeEventListener("dispose",He),It(U)}function It(C){Ot(C),Ae.remove(C)}function Ot(C){let U=Ae.get(C).programs;U!==void 0&&(U.forEach(function(O){be.releaseProgram(O)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,O,B,N,oe){U===null&&(U=je);let me=N.isMesh&&N.matrixWorld.determinant()<0,Ee=xd(C,U,O,B,N);he.setMaterial(B,me);let Te=O.index,Be=1;if(B.wireframe===!0){if(Te=Q.getWireframeAttribute(O),Te===void 0)return;Be=2}let Ve=O.drawRange,Re=O.attributes.position,et=Ve.start*Be,ft=(Ve.start+Ve.count)*Be;oe!==null&&(et=Math.max(et,oe.start*Be),ft=Math.min(ft,(oe.start+oe.count)*Be)),Te!==null?(et=Math.max(et,0),ft=Math.min(ft,Te.count)):Re!=null&&(et=Math.max(et,0),ft=Math.min(ft,Re.count));let pt=ft-et;if(pt<0||pt===1/0)return;ut.setup(N,B,Ee,O,Te);let $t,it=Ie;if(Te!==null&&($t=Y.get(Te),it=$e,it.setIndex($t)),N.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*re()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(N.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*re()),N.isLineSegments?it.setMode(b.LINES):N.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else N.isPoints?it.setMode(b.POINTS):N.isSprite&&it.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,En=N._multiDrawCounts,st=N._multiDrawCount,on=Te?Y.get(Te).bytesPerElement:1,wi=Ae.get(B).currentProgram.getUniforms();for(let jt=0;jt<st;jt++)wi.setValue(b,"_gl_DrawID",jt),it.render(Le[jt]/on,En[jt])}else if(N.isInstancedMesh)it.renderInstances(et,pt,N.count);else if(O.isInstancedBufferGeometry){let Le=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,En=Math.min(O.instanceCount,Le);it.renderInstances(et,pt,En)}else it.render(et,pt)};function at(C,U,O){C.transparent===!0&&C.side===qt&&C.forceSinglePass===!1?(C.side=Ut,C.needsUpdate=!0,$s(C,U,O),C.side=ti,C.needsUpdate=!0,$s(C,U,O),C.side=qt):$s(C,U,O)}this.compile=function(C,U,O=null){O===null&&(O=C),f=Ze.get(O),f.init(U),v.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),C!==O&&C.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let B=new Set;return C.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let oe=N.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let Ee=oe[me];at(Ee,O,N),B.add(Ee)}else at(oe,O,N),B.add(oe)}),v.pop(),f=null,B},this.compileAsync=function(C,U,O=null){let B=this.compile(C,U,O);return new Promise(N=>{function oe(){if(B.forEach(function(me){Ae.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){N(C);return}setTimeout(oe,10)}ee.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let an=null;function Sn(C){an&&an(C)}function tc(){ci.stop()}function nc(){ci.start()}let ci=new Hh;ci.setAnimationLoop(Sn),typeof self!="undefined"&&ci.setContext(self),this.setAnimationLoop=function(C){an=C,W.setAnimationLoop(C),C===null?ci.stop():ci.start()},W.addEventListener("sessionstart",tc),W.addEventListener("sessionend",nc),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,U,P),f=Ze.get(C,v.length),f.init(U),v.push(f),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(De),we=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,we),g=ye.get(C,M.length),g.init(),M.push(g),W.enabled===!0&&W.isPresenting===!0){let oe=_.xr.getDepthSensingMesh();oe!==null&&va(oe,U,-1/0,_.sortObjects)}va(C,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(de,xe),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Ne.addToRenderList(g,C),this.info.render.frame++,ae===!0&&ie.beginShadows();let O=f.state.shadowsArray;Ce.render(O,C,U),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,N=g.transmissive;if(f.setupLights(),U.isArrayCamera){let oe=U.cameras;if(N.length>0)for(let me=0,Ee=oe.length;me<Ee;me++){let Te=oe[me];sc(B,N,C,Te)}j&&Ne.render(C);for(let me=0,Ee=oe.length;me<Ee;me++){let Te=oe[me];ic(g,C,Te,Te.viewport)}}else N.length>0&&sc(B,N,C,U),j&&Ne.render(C),ic(g,C,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(_,C,U),ut.resetDefaultState(),I=-1,A=null,v.pop(),v.length>0?(f=v[v.length-1],ae===!0&&ie.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function va(C,U,O,B){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)O=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){B&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(De);let me=Z.update(C),Ee=C.material;Ee.visible&&g.push(C,me,Ee,O,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let me=Z.update(C),Ee=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Fe.copy(me.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(De)),Array.isArray(Ee)){let Te=me.groups;for(let Be=0,Ve=Te.length;Be<Ve;Be++){let Re=Te[Be],et=Ee[Re.materialIndex];et&&et.visible&&g.push(C,me,et,O,Fe.z,Re)}}else Ee.visible&&g.push(C,me,Ee,O,Fe.z,null)}}let oe=C.children;for(let me=0,Ee=oe.length;me<Ee;me++)va(oe[me],U,O,B)}function ic(C,U,O,B){let N=C.opaque,oe=C.transmissive,me=C.transparent;f.setupLightsView(O),ae===!0&&ie.setGlobalState(_.clippingPlanes,O),B&&he.viewport(R.copy(B)),N.length>0&&Zs(N,U,O),oe.length>0&&Zs(oe,U,O),me.length>0&&Zs(me,U,O),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function sc(C,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Hn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ws:zn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let oe=f.state.transmissionRenderTarget[B.id],me=B.viewport||R;oe.setSize(me.z,me.w);let Ee=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(H),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),j&&Ne.render(O);let Te=_.toneMapping;_.toneMapping=Qn;let Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ae===!0&&ie.setGlobalState(_.clippingPlanes,B),Zs(C,O,B),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Re=0,et=U.length;Re<et;Re++){let ft=U[Re],pt=ft.object,$t=ft.geometry,it=ft.material,Le=ft.group;if(it.side===qt&&pt.layers.test(B.layers)){let En=it.side;it.side=Ut,it.needsUpdate=!0,rc(pt,O,B,$t,it,Le),it.side=En,it.needsUpdate=!0,Ve=!0}}Ve===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe))}_.setRenderTarget(Ee),_.setClearColor(H,J),Be!==void 0&&(B.viewport=Be),_.toneMapping=Te}function Zs(C,U,O){let B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,oe=C.length;N<oe;N++){let me=C[N],Ee=me.object,Te=me.geometry,Be=B===null?me.material:B,Ve=me.group;Ee.layers.test(O.layers)&&rc(Ee,U,O,Te,Be,Ve)}}function rc(C,U,O,B,N,oe){C.onBeforeRender(_,U,O,B,N,oe),C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),N.onBeforeRender(_,U,O,B,C,oe),N.transparent===!0&&N.side===qt&&N.forceSinglePass===!1?(N.side=Ut,N.needsUpdate=!0,_.renderBufferDirect(O,U,B,N,C,oe),N.side=ti,N.needsUpdate=!0,_.renderBufferDirect(O,U,B,N,C,oe),N.side=qt):_.renderBufferDirect(O,U,B,N,C,oe),C.onAfterRender(_,U,O,B,N,oe)}function $s(C,U,O){U.isScene!==!0&&(U=je);let B=Ae.get(C),N=f.state.lights,oe=f.state.shadowsArray,me=N.state.version,Ee=be.getParameters(C,N.state,oe,U,O),Te=be.getProgramCacheKey(Ee),Be=B.programs;B.environment=C.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(C.isMeshStandardMaterial?F:x).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",He),Be=new Map,B.programs=Be);let Ve=Be.get(Te);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===me)return oc(C,Ee),Ve}else Ee.uniforms=be.getUniforms(C),C.onBeforeCompile(Ee,_),Ve=be.acquireProgram(Ee,Te),Be.set(Te,Ve),B.uniforms=Ee.uniforms;let Re=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=ie.uniform),oc(C,Ee),B.needsLights=yd(C),B.lightsStateVersion=me,B.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ve,B.uniformsList=null,Ve}function ac(C){if(C.uniformsList===null){let U=C.currentProgram.getUniforms();C.uniformsList=$i.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function oc(C,U){let O=Ae.get(C);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function xd(C,U,O,B,N){U.isScene!==!0&&(U=je),w.resetTextureUnits();let oe=U.fog,me=B.isMeshStandardMaterial?U.environment:null,Ee=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ls,Te=(B.isMeshStandardMaterial?F:x).get(B.envMap||me),Be=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ve=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!O.morphAttributes.position,et=!!O.morphAttributes.normal,ft=!!O.morphAttributes.color,pt=Qn;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=_.toneMapping);let $t=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=$t!==void 0?$t.length:0,Le=Ae.get(B),En=f.state.lights;if(ae===!0&&(we===!0||C!==A)){let nn=C===A&&B.id===I;ie.setState(B,C,nn)}let st=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==En.state.version||Le.outputColorSpace!==Ee||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Te||B.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ie.numPlanes||Le.numIntersection!==ie.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==Ve||Le.morphTargets!==Re||Le.morphNormals!==et||Le.morphColors!==ft||Le.toneMapping!==pt||Le.morphTargetsCount!==it)&&(st=!0):(st=!0,Le.__version=B.version);let on=Le.currentProgram;st===!0&&(on=$s(B,U,N));let wi=!1,jt=!1,us=!1,gt=on.getUniforms(),_n=Le.uniforms;if(he.useProgram(on.program)&&(wi=!0,jt=!0,us=!0),B.id!==I&&(I=B.id,jt=!0),wi||A!==C){he.buffers.depth.getReversed()?(ce.copy(C.projectionMatrix),Mu(ce),wu(ce),gt.setValue(b,"projectionMatrix",ce)):gt.setValue(b,"projectionMatrix",C.projectionMatrix),gt.setValue(b,"viewMatrix",C.matrixWorldInverse);let Vn=gt.map.cameraPosition;Vn!==void 0&&Vn.setValue(b,Oe.setFromMatrixPosition(C.matrixWorld)),ve.logarithmicDepthBuffer&&gt.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&gt.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,jt=!0,us=!0)}if(N.isSkinnedMesh){gt.setOptional(b,N,"bindMatrix"),gt.setOptional(b,N,"bindMatrixInverse");let nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),gt.setValue(b,"boneTexture",nn.boneTexture,w))}N.isBatchedMesh&&(gt.setOptional(b,N,"batchingTexture"),gt.setValue(b,"batchingTexture",N._matricesTexture,w),gt.setOptional(b,N,"batchingIdTexture"),gt.setValue(b,"batchingIdTexture",N._indirectTexture,w),gt.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(b,"batchingColorTexture",N._colorsTexture,w));let fs=O.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&ke.update(N,O,on),(jt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,gt.setValue(b,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(_n.envMap.value=Te,_n.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(_n.envMapIntensity.value=U.environmentIntensity),jt&&(gt.setValue(b,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Ad(_n,us),oe&&B.fog===!0&&fe.refreshFogUniforms(_n,oe),fe.refreshMaterialUniforms(_n,B,G,se,f.state.transmissionRenderTarget[C.id]),$i.upload(b,ac(Le),_n,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($i.upload(b,ac(Le),_n,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&gt.setValue(b,"center",N.center),gt.setValue(b,"modelViewMatrix",N.modelViewMatrix),gt.setValue(b,"normalMatrix",N.normalMatrix),gt.setValue(b,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let nn=B.uniformsGroups;for(let Vn=0,Gn=nn.length;Vn<Gn;Vn++){let lc=nn[Vn];D.update(lc,on),D.bind(lc,on)}}return on}function Ad(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function yd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,U,O){Ae.get(C.texture).__webglTexture=U,Ae.get(C.depthTexture).__webglTexture=O;let B=Ae.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){let O=Ae.get(C);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,O=0){P=C,S=U,T=O;let B=!0,N=null,oe=!1,me=!1;if(C){let Te=Ae.get(C);if(Te.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(Te.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Te.__hasExternalTextures)w.rebindTextures(C,Ae.get(C.texture).__webglTexture,Ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Re=C.depthTexture;if(Te.__boundDepthTexture!==Re){if(Re!==null&&Ae.has(Re)&&(C.width!==Re.image.width||C.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}let Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);let Ve=Ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?N=Ve[U][O]:N=Ve[U],oe=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?N=Ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[O]:N=Ve,R.copy(C.viewport),z.copy(C.scissor),k=C.scissorTest}else R.copy(Me).multiplyScalar(G).floor(),z.copy(ze).multiplyScalar(G).floor(),k=nt;if(he.bindFramebuffer(b.FRAMEBUFFER,N)&&B&&he.drawBuffers(C,N),he.viewport(R),he.scissor(z),he.setScissorTest(k),oe){let Te=Ae.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,O)}else if(me){let Te=Ae.get(C.texture),Be=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Be)}I=-1},this.readRenderTargetPixels=function(C,U,O,B,N,oe,me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){he.bindFramebuffer(b.FRAMEBUFFER,Ee);try{let Te=C.texture,Be=Te.format,Ve=Te.type;if(!ve.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-B&&O>=0&&O<=C.height-N&&b.readPixels(U,O,B,N,We.convert(Be),We.convert(Ve),oe)}finally{let Te=P!==null?Ae.get(P).__webglFramebuffer:null;he.bindFramebuffer(b.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(C,U,O,B,N,oe,me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){let Te=C.texture,Be=Te.format,Ve=Te.type;if(!ve.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-B&&O>=0&&O<=C.height-N){he.bindFramebuffer(b.FRAMEBUFFER,Ee);let Re=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Re),b.bufferData(b.PIXEL_PACK_BUFFER,oe.byteLength,b.STREAM_READ),b.readPixels(U,O,B,N,We.convert(Be),We.convert(Ve),0);let et=P!==null?Ae.get(P).__webglFramebuffer:null;he.bindFramebuffer(b.FRAMEBUFFER,et);let ft=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Iu(b,ft,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Re),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,oe),b.deleteBuffer(Re),b.deleteSync(ft),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,O=0){C.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-O),N=Math.floor(C.image.width*B),oe=Math.floor(C.image.height*B),me=U!==null?U.x:0,Ee=U!==null?U.y:0;w.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,me,Ee,N,oe),he.unbindTexture()},this.copyTextureToTexture=function(C,U,O=null,B=null,N=0){C.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let oe,me,Ee,Te,Be,Ve,Re,et,ft,pt=C.isCompressedTexture?C.mipmaps[N]:C.image;O!==null?(oe=O.max.x-O.min.x,me=O.max.y-O.min.y,Ee=O.isBox3?O.max.z-O.min.z:1,Te=O.min.x,Be=O.min.y,Ve=O.isBox3?O.min.z:0):(oe=pt.width,me=pt.height,Ee=pt.depth||1,Te=0,Be=0,Ve=0),B!==null?(Re=B.x,et=B.y,ft=B.z):(Re=0,et=0,ft=0);let $t=We.convert(U.format),it=We.convert(U.type),Le;U.isData3DTexture?(w.setTexture3D(U,0),Le=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Le=b.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Le=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);let En=b.getParameter(b.UNPACK_ROW_LENGTH),st=b.getParameter(b.UNPACK_IMAGE_HEIGHT),on=b.getParameter(b.UNPACK_SKIP_PIXELS),wi=b.getParameter(b.UNPACK_SKIP_ROWS),jt=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,pt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Te),b.pixelStorei(b.UNPACK_SKIP_ROWS,Be),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ve);let us=C.isDataArrayTexture||C.isData3DTexture,gt=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let _n=Ae.get(C),fs=Ae.get(U),nn=Ae.get(_n.__renderTarget),Vn=Ae.get(fs.__renderTarget);he.bindFramebuffer(b.READ_FRAMEBUFFER,nn.__webglFramebuffer),he.bindFramebuffer(b.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Gn=0;Gn<Ee;Gn++)us&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.get(C).__webglTexture,N,Ve+Gn),C.isDepthTexture?(gt&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,N,ft+Gn),b.blitFramebuffer(Te,Be,oe,me,Re,et,oe,me,b.DEPTH_BUFFER_BIT,b.NEAREST)):gt?b.copyTexSubImage3D(Le,N,Re,et,ft+Gn,Te,Be,oe,me):b.copyTexSubImage2D(Le,N,Re,et,ft+Gn,Te,Be,oe,me);he.bindFramebuffer(b.READ_FRAMEBUFFER,null),he.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else gt?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Le,N,Re,et,ft,oe,me,Ee,$t,it,pt.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Le,N,Re,et,ft,oe,me,Ee,$t,pt.data):b.texSubImage3D(Le,N,Re,et,ft,oe,me,Ee,$t,it,pt):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,Re,et,oe,me,$t,it,pt.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,Re,et,pt.width,pt.height,$t,pt.data):b.texSubImage2D(b.TEXTURE_2D,N,Re,et,oe,me,$t,it,pt);b.pixelStorei(b.UNPACK_ROW_LENGTH,En),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,st),b.pixelStorei(b.UNPACK_SKIP_PIXELS,on),b.pixelStorei(b.UNPACK_SKIP_ROWS,wi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,jt),N===0&&U.generateMipmaps&&b.generateMipmap(Le),he.unbindTexture()},this.copyTextureToTexture3D=function(C,U,O=null,B=null,N=0){return C.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,C=arguments[2],U=arguments[3],N=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,O,B,N)},this.initRenderTarget=function(C){Ae.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){S=0,T=0,P=null,he.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var ss=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},rl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vo,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Wt=new E,Hr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rs=class extends si{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zi,xs=new E,Hi=new E,Vi=new E,Gi=new ne,As=new ne,qh=new mt,_r=new E,ys=new E,xr=new E,ch=new ne,Ja=new ne,hh=new ne,Ns=class extends Vt{constructor(e=new rs){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rl(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Hr(n,3,0,!1)),zi.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=zi,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),qh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ar(_r.set(-.5,-.5,0),Vi,a,Hi,s,r),Ar(ys.set(.5,-.5,0),Vi,a,Hi,s,r),Ar(xr.set(.5,.5,0),Vi,a,Hi,s,r),ch.set(0,0),Ja.set(1,0),hh.set(1,1);let o=e.ray.intersectTriangle(_r,ys,xr,!1,xs);if(o===null&&(Ar(ys.set(-.5,.5,0),Vi,a,Hi,s,r),Ja.set(0,1),o=e.ray.intersectTriangle(_r,xr,ys,!1,xs),o===null))return;let l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Kn.getInterpolation(xs,_r,ys,xr,ch,Ja,hh,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ar(i,e,t,n,s,r){Gi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(As.x=r*Gi.x-s*Gi.y,As.y=s*Gi.x+r*Gi.y):As.copy(Gi),i.copy(e),i.x+=As.x,i.y+=As.y,i.applyMatrix4(qh)}var ri=class extends Jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ne:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,s=[],r=[],a=[],o=new E,l=new mt;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ft(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ft(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends rn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},al=class extends Fs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var yr=new E,Ka=new Fl,ja=new Fl,Qa=new Fl,as=class extends rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(yr.subVectors(s[0],s[1]).add(s[0]),c=yr);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ka.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),ja.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Qa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ja.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ka.calc(l),ja.calc(l),Qa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ym(i,e){let t=1-i;return t*t*e}function vm(i,e){return 2*(1-i)*i*e}function Cm(i,e){return i*i*e}function Ss(i,e,t,n){return ym(i,e)+vm(i,t)+Cm(i,n)}function Im(i,e){let t=1-i;return t*t*t*e}function Mm(i,e){let t=1-i;return 3*t*t*i*e}function wm(i,e){return 3*(1-i)*i*i*e}function bm(i,e){return i*i*i*e}function Es(i,e,t,n,s){return Im(i,e)+Mm(i,t)+wm(i,n)+bm(i,s)}var Vr=class extends rn{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,s.x,r.x,a.x,o.x),Es(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ol=class extends rn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,s.x,r.x,a.x,o.x),Es(e,s.y,r.y,a.y,o.y),Es(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends rn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends rn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends rn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(e,s.x,r.x,a.x),Ss(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends rn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(e,s.x,r.x,a.x),Ss(e,s.y,r.y,a.y),Ss(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(dh(o,l.x,c.x,h.x,d.x),dh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Yr=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:as,CubicBezierCurve:Vr,CubicBezierCurve3:ol,EllipseCurve:Fs,LineCurve:Gr,LineCurve3:ll,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:Xr,SplineCurve:qr}),cl=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yr[s.type]().fromJSON(s))}return this}},Zr=class extends cl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wr(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Vr(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Fs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ks=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new E,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],m=0,y=[],g=n/2,f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(p,2));function M(){let _=new E,L=new E,S=0,T=(t-e)/n;for(let P=0;P<=r;P++){let I=[],A=P/r,R=A*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,H=k*l+o,J=Math.sin(H),V=Math.cos(H);L.x=R*J,L.y=-A*n+g,L.z=R*V,d.push(L.x,L.y,L.z),_.set(J,T,V).normalize(),u.push(_.x,_.y,_.z),p.push(k,1-A),I.push(m++)}y.push(I)}for(let P=0;P<s;P++)for(let I=0;I<r;I++){let A=y[I][P],R=y[I+1][P],z=y[I+1][P+1],k=y[I][P+1];(e>0||I!==0)&&(h.push(A,R,k),S+=3),(t>0||I!==r-1)&&(h.push(R,z,k),S+=3)}c.addGroup(f,S,0),f+=S}function v(_){let L=m,S=new ne,T=new E,P=0,I=_===!0?e:t,A=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*A,0),u.push(0,A,0),p.push(.5,.5),m++;let R=m;for(let z=0;z<=s;z++){let H=z/s*l+o,J=Math.cos(H),V=Math.sin(H);T.x=I*V,T.y=g*A,T.z=I*J,d.push(T.x,T.y,T.z),u.push(0,A,0),S.x=J*.5+.5,S.y=V*.5*A+.5,p.push(S.x,S.y),m++}for(let z=0;z<s;z++){let k=L+z,H=R+z;_===!0?h.push(H,H+1,k):h.push(H+1,H,k),P+=3}c.addGroup(f,P,_===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kt=class i extends yt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class i extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new E,_=new E,L=new E;for(let S=0;S<t.length;S+=3)p(t[S+0],v),p(t[S+1],_),p(t[S+2],L),l(v,_,L,M)}function l(M,v,_,L){let S=L+1,T=[];for(let P=0;P<=S;P++){T[P]=[];let I=M.clone().lerp(_,P/S),A=v.clone().lerp(_,P/S),R=S-P;for(let z=0;z<=R;z++)z===0&&P===S?T[P][z]=I:T[P][z]=I.clone().lerp(A,z/R)}for(let P=0;P<S;P++)for(let I=0;I<2*(S-P)-1;I++){let A=Math.floor(I/2);I%2===0?(u(T[P][A+1]),u(T[P+1][A]),u(T[P][A])):(u(T[P][A+1]),u(T[P+1][A+1]),u(T[P+1][A]))}}function c(M){let v=new E;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let M=new E;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let _=g(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;a.push(_,1-L)}m(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],_=a[M+2],L=a[M+4],S=Math.max(v,_,L),T=Math.min(v,_,L);S>.9&&T<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,v){let _=M*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function m(){let M=new E,v=new E,_=new E,L=new E,S=new ne,T=new ne,P=new ne;for(let I=0,A=0;I<r.length;I+=9,A+=6){M.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),S.set(a[A+0],a[A+1]),T.set(a[A+2],a[A+3]),P.set(a[A+4],a[A+5]),L.copy(M).add(v).add(_).divideScalar(3);let R=g(L);y(S,A+0,M,R),y(T,A+2,v,R),y(P,A+4,_,R)}}function y(M,v,_,L){L<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Jr=class i extends $r{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var pn=class extends Zr{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Zr().fromJSON(s))}return this}},Sm={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,p;if(n&&(r=Lm(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)d=i[m],u=i[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Os(r,a,t,o,l,p,0),a}};function Yh(i,e,t,n,s){let r,a;if(s===Gm(i,e,t,n)>0)for(r=e;r<t;r+=n)a=uh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=uh(r,i[r],i[r+1],a);return a&&ha(a,a.next)&&(zs(a),a=a.next),a}function Ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ha(t,t.next)||vt(t.prev,t,t.next)===0)){if(zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Os(i,e,t,n,s,r,a){if(!i)return;!a&&r&&km(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Tm(i,n,s,r):Em(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),zs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rm(Ci(i),e,t),Os(i,e,t,n,s,r,2)):a===2&&Pm(i,e,t,n,s,r):Os(Ci(i),e,t,n,s,r,1);break}}}function Em(i){let e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&Xi(s,o,r,l,a,c,m.x,m.y)&&vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,f=hl(p,m,e,t,n),M=hl(y,g,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=f&&_&&_.z<=M;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Xi(o,h,l,d,c,u,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Xi(o,h,l,d,c,u,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Xi(o,h,l,d,c,u,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Xi(o,h,l,d,c,u,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Rm(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ha(s,r)&&Zh(s,n,n.next,r)&&Bs(s,r)&&Bs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),zs(n),zs(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Pm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zm(a,o)){let l=$h(a,o);a=Ci(a,a.next),l=Ci(l,l.next),Os(a,e,t,n,s,r,0),Os(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lm(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Yh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Bm(c));for(s.sort(Dm),r=0;r<s.length;r++)t=Um(s[r],t);return t}function Dm(i,e){return i.x-e.x}function Um(i,e){let t=Nm(i,e);if(!t)return e;let n=$h(t,i);return Ci(n,n.next),Ci(t,t.next)}function Nm(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Xi(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Bs(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&Fm(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function Fm(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function km(i,e,t,n){let s=i;do s.z===0&&(s.z=hl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Om(s)}function Om(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function hl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xi(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Hm(i,e)&&(Bs(i,e)&&Bs(e,i)&&Vm(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||ha(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ha(i,e){return i.x===e.x&&i.y===e.y}function Zh(i,e,t,n){let s=Cr(vt(i,e,t)),r=Cr(vt(i,e,n)),a=Cr(vt(t,n,i)),o=Cr(vt(t,n,e));return!!(s!==r&&a!==o||s===0&&vr(i,t,e)||r===0&&vr(i,n,e)||a===0&&vr(t,i,n)||o===0&&vr(t,e,n))}function vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cr(i){return i>0?1:i<0?-1:0}function Hm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bs(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function Vm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $h(i,e){let t=new dl(i.i,i.x,i.y),n=new dl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uh(i,e,t,n){let s=new dl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ei=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fh(e),ph(n,e);let a=e.length;t.forEach(fh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ph(n,t[l]);let o=Sm.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function fh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ph(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ai=class i extends Gt{constructor(e=new pn([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Wm,v,_=!1,L,S,T,P;f&&(v=f.getSpacedPoints(h),_=!0,u=!1,L=f.computeFrenetFrames(h,!1),S=new E,T=new E,P=new E),u||(g=0,p=0,m=0,y=0);let I=o.extractPoints(c),A=I.shape,R=I.holes;if(!ei.isClockWise(A)){A=A.reverse();for(let j=0,re=R.length;j<re;j++){let b=R[j];ei.isClockWise(b)&&(R[j]=b.reverse())}}let k=ei.triangulateShape(A,R),H=A;for(let j=0,re=R.length;j<re;j++){let b=R[j];A=A.concat(b)}function J(j,re,b){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(re,b)}let V=A.length,se=k.length;function G(j,re,b){let Pe,ee,ve,he=j.x-re.x,Ue=j.y-re.y,Ae=b.x-j.x,w=b.y-j.y,x=he*he+Ue*Ue,F=he*w-Ue*Ae;if(Math.abs(F)>Number.EPSILON){let Y=Math.sqrt(x),Q=Math.sqrt(Ae*Ae+w*w),Z=re.x-Ue/Y,be=re.y+he/Y,fe=b.x-w/Q,ye=b.y+Ae/Q,Ze=((fe-Z)*w-(ye-be)*Ae)/(he*w-Ue*Ae);Pe=Z+he*Ze-j.x,ee=be+Ue*Ze-j.y;let ie=Pe*Pe+ee*ee;if(ie<=2)return new ne(Pe,ee);ve=Math.sqrt(ie/2)}else{let Y=!1;he>Number.EPSILON?Ae>Number.EPSILON&&(Y=!0):he<-Number.EPSILON?Ae<-Number.EPSILON&&(Y=!0):Math.sign(Ue)===Math.sign(w)&&(Y=!0),Y?(Pe=-Ue,ee=he,ve=Math.sqrt(x)):(Pe=he,ee=Ue,ve=Math.sqrt(x/2))}return new ne(Pe/ve,ee/ve)}let de=[];for(let j=0,re=H.length,b=re-1,Pe=j+1;j<re;j++,b++,Pe++)b===re&&(b=0),Pe===re&&(Pe=0),de[j]=G(H[j],H[b],H[Pe]);let xe=[],Me,ze=de.concat();for(let j=0,re=R.length;j<re;j++){let b=R[j];Me=[];for(let Pe=0,ee=b.length,ve=ee-1,he=Pe+1;Pe<ee;Pe++,ve++,he++)ve===ee&&(ve=0),he===ee&&(he=0),Me[Pe]=G(b[Pe],b[ve],b[he]);xe.push(Me),ze=ze.concat(Me)}for(let j=0;j<g;j++){let re=j/g,b=p*Math.cos(re*Math.PI/2),Pe=m*Math.sin(re*Math.PI/2)+y;for(let ee=0,ve=H.length;ee<ve;ee++){let he=J(H[ee],de[ee],Pe);ce(he.x,he.y,-b)}for(let ee=0,ve=R.length;ee<ve;ee++){let he=R[ee];Me=xe[ee];for(let Ue=0,Ae=he.length;Ue<Ae;Ue++){let w=J(he[Ue],Me[Ue],Pe);ce(w.x,w.y,-b)}}}let nt=m+y;for(let j=0;j<V;j++){let re=u?J(A[j],ze[j],nt):A[j];_?(T.copy(L.normals[0]).multiplyScalar(re.x),S.copy(L.binormals[0]).multiplyScalar(re.y),P.copy(v[0]).add(T).add(S),ce(P.x,P.y,P.z)):ce(re.x,re.y,0)}for(let j=1;j<=h;j++)for(let re=0;re<V;re++){let b=u?J(A[re],ze[re],nt):A[re];_?(T.copy(L.normals[j]).multiplyScalar(b.x),S.copy(L.binormals[j]).multiplyScalar(b.y),P.copy(v[j]).add(T).add(S),ce(P.x,P.y,P.z)):ce(b.x,b.y,d/h*j)}for(let j=g-1;j>=0;j--){let re=j/g,b=p*Math.cos(re*Math.PI/2),Pe=m*Math.sin(re*Math.PI/2)+y;for(let ee=0,ve=H.length;ee<ve;ee++){let he=J(H[ee],de[ee],Pe);ce(he.x,he.y,d+b)}for(let ee=0,ve=R.length;ee<ve;ee++){let he=R[ee];Me=xe[ee];for(let Ue=0,Ae=he.length;Ue<Ae;Ue++){let w=J(he[Ue],Me[Ue],Pe);_?ce(w.x,w.y+v[h-1].y,v[h-1].x+b):ce(w.x,w.y,d+b)}}}$(),ae();function $(){let j=s.length/3;if(u){let re=0,b=V*re;for(let Pe=0;Pe<se;Pe++){let ee=k[Pe];De(ee[2]+b,ee[1]+b,ee[0]+b)}re=h+g*2,b=V*re;for(let Pe=0;Pe<se;Pe++){let ee=k[Pe];De(ee[0]+b,ee[1]+b,ee[2]+b)}}else{for(let re=0;re<se;re++){let b=k[re];De(b[2],b[1],b[0])}for(let re=0;re<se;re++){let b=k[re];De(b[0]+V*h,b[1]+V*h,b[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function ae(){let j=s.length/3,re=0;we(H,re),re+=H.length;for(let b=0,Pe=R.length;b<Pe;b++){let ee=R[b];we(ee,re),re+=ee.length}n.addGroup(j,s.length/3-j,1)}function we(j,re){let b=j.length;for(;--b>=0;){let Pe=b,ee=b-1;ee<0&&(ee=j.length-1);for(let ve=0,he=h+g*2;ve<he;ve++){let Ue=V*ve,Ae=V*(ve+1),w=re+Pe+Ue,x=re+ee+Ue,F=re+ee+Ae,Y=re+Pe+Ae;Oe(w,x,F,Y)}}}function ce(j,re,b){l.push(j),l.push(re),l.push(b)}function De(j,re,b){Fe(j),Fe(re),Fe(b);let Pe=s.length/3,ee=M.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);je(ee[0]),je(ee[1]),je(ee[2])}function Oe(j,re,b,Pe){Fe(j),Fe(re),Fe(Pe),Fe(re),Fe(b),Fe(Pe);let ee=s.length/3,ve=M.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);je(ve[0]),je(ve[1]),je(ve[3]),je(ve[1]),je(ve[2]),je(ve[3])}function Fe(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function je(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yr[s.type]().fromJSON(s)),new i(n,e.options)}},Wm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-d),new ne(u,1-m),new ne(y,1-f)]:[new ne(o,1-l),new ne(h,1-d),new ne(p,1-m),new ne(g,1-f)]}};function Xm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Kr=class i extends $r{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var jr=class i extends Gt{constructor(e=new pn([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,m=u.holes;ei.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let M=m[g];ei.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=ei.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let M=m[g];p=p.concat(M)}for(let g=0,f=p.length;g<f;g++){let M=p[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,f=y.length;g<f;g++){let M=y[g],v=M[0]+d,_=M[1]+d,L=M[2]+d;n.push(v,_,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function qm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var _t=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new E,u=new E,p=[],m=[],y=[],g=[];for(let f=0;f<=n;f++){let M=[],v=f/n,_=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){let S=L/t;d.x=-e*Math.cos(s+S*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+S*r)*Math.sin(a+v*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(S+_,1-v),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let v=h[f][M+1],_=h[f][M],L=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&p.push(v,_,S),(f!==n-1||l<Math.PI)&&p.push(_,L,S)}this.setIndex(p),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bt=class i extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let y=m/s*r,g=p/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let y=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,M=(s+1)*p+m;a.push(y,g,M),a.push(g,f,M)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Hs=class i extends Gt{constructor(e=new Xr(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new ne,h=new E,d=[],u=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(p,2));function y(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),M(),f()}function g(v){h=e.getPointAt(v/t,h);let _=a.normals[v],L=a.binormals[v];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,P=Math.sin(T),I=-Math.cos(T);l.x=I*_.x+P*L.x,l.y=I*_.y+P*L.y,l.z=I*_.z+P*L.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let L=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),T=(s+1)*v+_,P=(s+1)*(v-1)+_;m.push(L,S,P),m.push(S,T,P)}}function M(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Yr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Je=class extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ir(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var os=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends os{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pc:r=e,o=2*t-n;break;case gc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:a=e,l=2*n-t;break;case gc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,f=-u*g+2*u*y-u*m,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,v=(-1-p)*g+(1.5+p)*y+.5*m,_=p*g-p*y;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+M*a[c+L]+v*a[l+L]+_*a[d+L];return r}},fl=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},pl=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ir(t,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ir(e.times,Array),values:Ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ho:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ym(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let m=0;m!==n;++m){let y=t[d+m];if(y!==t[u+m]||y!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ho;var Ii=class extends gn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Tr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends gn{};gl.prototype.ValueTypeName="color";var ml=class extends gn{};ml.prototype.ValueTypeName="number";var _l=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ii.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qr=class extends gn{InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends gn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Tr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends gn{};xl.prototype.ValueTypeName="vector";var gh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Al=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Zm=new Al,Vs=class{constructor(e){this.manager=e!==void 0?e:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var yl=class extends Vs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gh.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ps("img");function l(){h(),gh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ea=class extends Vs{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,a=new yl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Gs=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ta=class extends Gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},eo=new mt,mh=new E,_h=new E,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(mh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xh=new mt,vs=new E,to=new E,vl=class extends na{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(vs),to.copy(n.position),to.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(to),n.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}},ia=class extends Gs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cl=class extends na{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Cl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ah(){return performance.now()}var kl="\\[\\]\\.:\\/",$m=new RegExp("["+kl+"]","g"),Ol="[^"+kl+"]",Jm="[^"+kl.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",Ol),jm=/(WCOD+)?/.source.replace("WCOD",Jm),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),t_=new RegExp("^"+Km+jm+Qm+e_+"$"),n_=["material","materials","bones","map"],Il=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($m,"")}static parseTrackName(e){let t=t_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);n_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Il;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);var yh=new mt,aa=class{constructor(e,t,n=0,s=1/0){this.ray=new Dr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(e,t=!0,n=[]){return Ml(e,this,n,t),n.sort(vh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ml(e[s],this,n,t);return n.sort(vh),n}};function vh(i,e){return i.distance-e.distance}function Ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ml(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);var i_="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",kt=null,da=!1;function Jh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Bl(){Jh(),da=!0;try{if(kt||(kt=document.createElement("audio"),kt.src=i_,kt.loop=!0,kt.preload="auto",kt.setAttribute("playsinline",""),kt.setAttribute("webkit-playsinline",""),kt.setAttribute("x-webkit-airplay","deny"),kt.volume=.01,kt.addEventListener("pause",()=>{da&&!document.hidden&&setTimeout(()=>da&&kt.paused&&kt.play().catch(()=>{}),300)})),kt.paused){let i=kt.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function zl(){da=!1;try{kt&&!kt.paused&&kt.pause()}catch{}}function Kh(i,e){Jh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!e()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var ht=i=>440*Math.pow(2,(i-69)/12),Hl={tempo:112,chords:[[41,[65,69,72]],[46,[65,70,74]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,70]],[41,[65,69,72]]],melody:[[0,0,77],[0,2,81],[0,4,84],[0,6,81],[1,0,82],[1,3,79],[1,4,77],[2,0,79],[2,2,76],[2,4,72],[2,6,76],[3,0,77],[3,4,72],[4,0,74],[4,2,77],[4,4,81],[4,6,79],[5,0,77],[5,2,74],[5,4,70],[6,0,72],[6,2,76],[6,4,79],[6,6,82],[7,0,81],[7,4,77]],lead:"marimba",shaker:!0},ua=class{constructor(e=Hl){this.ctx=null,this.muted=!1,this.mode="off",this.theme=e}unlock(){if(Bl(),!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;Kh(this.ctx,()=>!!this.held),this.master=t.createGain(),this.master.gain.value=this.muted?0:.9;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=.34,this.musicBus.connect(this.master),this.sfx=t.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=t.createDelay(.8);s.delayTime.value=.3;let r=t.createGain();r.gain.value=.2;let a=t.createGain();a.gain.value=.14,this.musicBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=t.createBuffer(1,t.sampleRate*1.5,t.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let e=this.ctx,t=e.createBufferSource();t.buffer=e.createBuffer(1,1,e.sampleRate),t.connect(e.destination),t.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let e=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");e.volume=.01;let t=e.play();t&&t.then&&t.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.9,this.ctx.currentTime,.05)}suspend(){zl(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Bl(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(e,t){if(this.mode===e&&!t||(this.mode=e,!this.ctx))return;this.step=0,this.nextTime=this.ctx.currentTime+.12;let n=this.musicOnly?1.6:1,s=(e==="calm"?.18:e==="menu"?.28:.34)*n;this.musicBus.gain.setTargetAtTime(s,this.ctx.currentTime,.3)}duck(e=2){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.mode==="calm"?.18:.34;this.musicBus.gain.cancelScheduledValues(t),this.musicBus.gain.setTargetAtTime(.035,t,.06),this.musicBus.gain.setTargetAtTime(n,t+e,.4),this.sfx.gain.cancelScheduledValues(t),this.sfx.gain.setTargetAtTime(.45,t+.15,.08),this.sfx.gain.setTargetAtTime(.85,t+e,.3)}dispose(){clearInterval(this._timer),zl(),this.ctx&&this.ctx.close(),this.ctx=null}tone(e,t,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=e,c.frequency.setValueAtTime(t,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}noise(e,t,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let d=c.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,e),l&&d.frequency.exponentialRampToValueAtTime(l,e+t),d.Q.value=a;let u=c.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(n,e+Math.min(.02,t/4)),u.gain.exponentialRampToValueAtTime(1e-4,e+t),h.connect(d).connect(u).connect(o),h.start(e,Math.random()*.5),h.stop(e+t+.05)}slide(e,t,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=e,c.frequency.setValueAtTime(t,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}lead(e,t,n,s=this.musicBus){let r=ht(e);switch(this.theme.lead){case"bell":this.tone("sine",r,t,.9,n,s,.002),this.tone("sine",r*2.76,t,.25,n*.25,s,.002);break;case"pluck":this.tone("triangle",r,t,.28,n,s,.002),this.tone("sine",r*2,t,.12,n*.3,s,.002);break;case"flute":this.tone("sine",r,t,.45,n,s,.05),this.tone("triangle",r*2,t,.3,n*.08,s,.06);break;default:this.tone("sine",r,t,.35,n,s,.003),this.tone("sine",r*4,t,.05,n*.3,s,.002)}}_schedule(){let e=this.ctx;if(!e||e.state!=="running"||this.mode==="off")return;let t=this.theme,n=e.currentTime+.2,s=60/(this.mode==="menu"?t.tempo*.9:t.tempo)/2,r=t.chords.length,a=this.mode==="play";for(;this.nextTime<n;){let o=this.nextTime,l=this.step%(r*8),c=Math.floor(l/8),h=l%8,[d,u]=t.chords[c];(h===0||h===4)&&this.tone("triangle",ht(d-(h===4?5:0)),o,s*1.6,.14,this.musicBus,.01),(h===2||h===6)&&u.forEach(m=>this.tone("sine",ht(m-12),o,s*1.2,.022,this.musicBus,.004));let p=this.energy||0;if(this.suspense){let m=[0,4,7,4,9,7,4,2];h%2===0?this.tone("triangle",ht(d+24+m[(this.step>>1)%8]),o,s*.55,.055,this.musicBus,.004):this.noise(o,.02,.03,"highpass",6500,1,this.musicBus),h===6&&this.tone("sine",ht(d+31+c%4*2),o,s*1.6,.03,this.musicBus,.01)}else for(let[m,y,g]of t.melody)m===c&&y===h&&this.lead(g,o,(a?.075:.06)*(.65+.7*p));p>=.4&&h%2===0&&this.lead(u[h/2%u.length]+12,o+s*.5,.03*p),p>=.8&&(h===3||h===7)&&this.lead(u[2]+24,o,.025),t.shaker&&a&&h%2===1&&this.noise(o,.04,.012,"highpass",8e3,1,this.musicBus),this.step++,this.nextTime+=s}}setSuspense(e){this.suspense=!!e}play(e,t){if(!this.on||this.musicOnly)return;let n=this.ctx.currentTime+.005;switch(e){case"note":this.lead(t||79,n,.09,this.sfx);break;case"applause":{for(let r=0;r<150;r++){let a=n+Math.pow(Math.random(),1.5)*2.5;this.noise(a,.02+Math.random()*.025,.2+Math.random()*.14,"bandpass",1300+Math.random()*3e3,1.3,this.sfx),r%3===0&&this.noise(a,.05,.12,"lowpass",900,.8,this.sfx)}break}case"crowd":{let s=this.ctx;for(let r=0;r<6;r++){let a=n+r*.045+Math.random()*.08,o=s.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(250+r*28,a),o.frequency.exponentialRampToValueAtTime(430+r*36,a+.5);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=850,l.Q.value=4;let c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=1300,c.Q.value=5;let h=s.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(.07,a+.07),h.gain.exponentialRampToValueAtTime(1e-4,a+.75),o.connect(l),o.connect(c),l.connect(h),c.connect(h),h.connect(this.sfx),o.start(a),o.stop(a+.8)}break}case"fanfare":[72,76,79,84,88].forEach((s,r)=>{this.tone("triangle",ht(s),n+r*.075,.38,.085),this.tone("square",ht(s),n+r*.075,.18,.018),this.tone("sine",ht(s)*2,n+r*.075,.3,.03)});break;case"yay":[72,76,79,84,88,91].forEach((s,r)=>{this.tone("triangle",ht(s),n+r*.06,.4,.05),this.tone("sine",ht(s)*2,n+r*.06,.2,.02)});break;case"tap":this.tone("sine",880,n,.06,.05);break;case"step":this.slide("sine",t?210:180,95,n,.11,.2),this.noise(n,.05,.12,"lowpass",1800,1),this.tone("triangle",t?900:780,n+.005,.045,.07);break;case"bump":this.slide("sine",260,150,n,.18,.13),this.slide("sine",320,200,n+.06,.14,.05);break;case"right":[[84,0],[88,.09],[91,.18]].forEach(([s,r])=>{this.tone("sine",ht(s),n+r,.45,.08),this.tone("sine",ht(s)*3,n+r,.08,.012)});break;case"wrong":this.tone("triangle",ht(67),n,.18,.06),this.tone("triangle",ht(64),n+.14,.26,.05);break;case"pop":this.slide("sine",900,300,n,.08,.12),this.noise(n,.05,.06,"bandpass",2500,2);break;case"sparkle":for(let s=0;s<6;s++)this.tone("sine",ht(90+s*5%12),n+s*.045,.25,.03);break;case"star":[88,91,96,100].forEach((s,r)=>this.tone("sine",ht(s),n+r*.07,.5,.05));break;case"whoosh":this.noise(n,.5,.09,"bandpass",500,.8,this.sfx,2600);break;case"page":this.noise(n,.25,.06,"bandpass",1800,.6,this.sfx,900);break;case"drop":this.tone("sine",520,n,.08,.1),this.tone("sine",780,n+.05,.12,.06),this.noise(n,.05,.04,"lowpass",900,1);break;case"splash":this.noise(n,.6,.12,"lowpass",3e3,.7,this.sfx,500);for(let s=0;s<4;s++)this.tone("sine",900+Math.random()*900,n+.05+s*.06,.08,.025);break;case"nibble":for(let s=0;s<5;s++)this.noise(n+s*.09,.05,.08,"bandpass",1200+s%2*500,2);break;case"squeak":this.slide("sine",1800,2600,n,.08,.05),this.slide("sine",2600,2e3,n+.08,.07,.04);break;case"cheer":[76,79,84,88].forEach((s,r)=>{this.tone("sine",ht(s),n+r*.07,.35,.05),this.tone("sine",ht(s)*2,n+r*.07,.12,.012)});break;case"hmm":this.tone("sine",ht(67),n,.25,.05),this.tone("sine",ht(64),n+.15,.3,.045);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.9]].forEach(([s,r])=>{this.tone("triangle",ht(s),n+r,.5,.08),this.tone("sine",ht(s)*2,n+r,.2,.02)});for(let s=0;s<10;s++)this.noise(n+.3+s*.05,.05,.025,"highpass",7500,1);break;case"roundWin":[[79,0],[84,.1],[88,.2],[91,.32]].forEach(([s,r])=>this.tone("sine",ht(s),n+r,.4,.07));break;default:}}voice(e,t,n){e.forEach((s,r)=>{let a=t+r*.11;this.slide("sine",ht(s)*.94,ht(s),a,.12,n),this.slide("square",ht(s)*.94,ht(s),a,.1,n*.12)})}};function Vl(i){return String(i).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu,"").replace(/\s+/g," ").trim()}var jh=i=>i==="en"||i==="de"||i==="fr"?i:"ar";function s_(i,e){let t=`${jh(e)}|${Vl(i)}`,n=2166136261;for(let s of new TextEncoder().encode(t))n^=s,n=Math.imul(n,16777619)>>>0;return n.toString(16).padStart(8,"0")}var r_="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",fa=class{constructor(e,t,n,s){if(this.dir=`${e}../learn_voice/`,this.lang=jh(t),this.fallback=n,this.onTalk=s||(()=>{}),this.queue=[],this.audio=null,this.muted=!1,this.el=null,this.tok=0,this.pending=null,this.unlocked=!1,typeof document!="undefined"&&document.addEventListener){let r=()=>this._gesture();for(let a of["pointerdown","touchend","click","keydown"])document.addEventListener(a,r,{capture:!0,passive:!0})}if(typeof document!="undefined"&&!window.__learnVoice&&!document.getElementById("learn-voice-manifest")){let r=document.createElement("script");r.id="learn-voice-manifest",r.src=`${this.dir}manifest.js`,r.onerror=()=>{window.__learnVoice=window.__learnVoice||{ar:[],en:[],de:[],fr:[]}},document.head.append(r)}}_element(){return this.el||(this.el=new Audio,this.el.preload="auto"),this.el}_gesture(){let e=this._element();if(!this.unlocked&&!this.audio){this.unlocked=!0;try{e.src=r_;let n=e.play();n&&n.catch&&n.catch(()=>{this.unlocked=!1})}catch{this.unlocked=!1}}let t=this.pending;t&&t.run===this.run&&!this.audio&&(this.pending=null,this._play(t.text))}_item(e){return typeof e=="string"?{t:Vl(e),lang:this.lang,slow:!1}:{t:Vl(e.t),lang:e.lang==="en"||e.lang==="de"||e.lang==="fr"||e.lang==="ar"?e.lang:this.lang,slow:!!e.slow,optional:!!e.optional}}_clipName(e){return s_(e.t,e.lang)+(e.slow?"_slow":"")}has(e){typeof e=="string"&&(e=this._item(e));let t=typeof window!="undefined"&&window.__learnVoice;return!!(t&&t[e.lang]&&t[e.lang].includes(this._clipName(e)))}say(e,t,n){this.stop(),this.queue=(Array.isArray(e)?e:[e]).filter(Boolean).map(s=>this._item(s)).filter(s=>s.t),this.i=0,this.onEach=typeof t=="function"?t:null,this.onDone=typeof n=="function"?n:null,this.run=(this.run||0)+1,!this.queue.length&&this.onDone?this.onDone():this._next()}_finish(){let e=this.onDone;this.onDone=null,e&&e()}_start(e){this.onEach&&this.onEach(e)}_next(e=0){if(this.muted){this._finish();return}if(!this.queue.length){this._finish();return}if(typeof window!="undefined"&&!window.__learnVoice&&e<8){let n=this.queue;setTimeout(()=>{this.queue===n&&this._next(e+1)},130);return}let t=this.queue.shift();if(t.optional&&!this.has(t)){this._next();return}if(!this.has(t)){this._start(this.i++);let n=this.run;setTimeout(()=>{n===this.run&&this._next()},700);return}this._start(this.i++),this._play(t)}_play(e){let t=this._element(),n=++this.tok;this.pending=null,this.audio=t,t.onloadedmetadata=()=>{this.tok===n&&this.onTalk((t.duration||2)+.3)},t.onended=()=>{this.tok===n&&this.audio===t&&(this.audio=null,this._next())},t.onerror=()=>{this.tok===n&&this.audio===t&&(this.audio=null,this._next())},this.onTalk(2.5);try{t.src=`${this.dir}${e.lang}/${this._clipName(e)}.mp3`}catch{}let s=this.run,r=t.play();r&&r.catch&&r.catch(a=>{this.tok!==n||a&&a.name==="AbortError"||(this.audio=null,this.pending={text:e,run:s})})}stop(){if(this.run=(this.run||0)+1,this.queue=[],this.onDone=null,this.tok++,this.pending=null,this.audio){try{this.audio.pause()}catch{}this.audio=null}}};function Ke(i,e={},...t){let n=document.createElement(i);for(let[s,r]of Object.entries(e))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of t.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var a_={back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Let's play"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],nextLevel:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0627\u0644\u064A \u25B6","Next level \u25B6"],levelsBtn:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],newStar_m:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643! \u2B50","A new star for you! \u2B50"],newStar_f:["\u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u064A\u0643\u064A! \u2B50","A new star for you! \u2B50"],doneAgain_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],doneAgain_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],great_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],great_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],greatSay_m:["\u0634\u0627\u0637\u0631 \u0623\u0648\u064A!","Well done!"],greatSay_f:["\u0645\u0645\u062A\u0627\u0632\u0629!","Well done!"],newStarSay_m:["\u062E\u062F\u062A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"],newStarSay_f:["\u062E\u062F\u062A\u064A \u0646\u062C\u0645\u0629 \u062C\u062F\u064A\u062F\u0629!","You got a new star!"]};function Qh(i,e){let t=e.lang==="en"?"en":"ar",n=e.gender==="girl",s={...a_,...i};return{t:o=>{let l=`${o}_${n?"f":"m"}`,c=s[l]?l:o;return s[c]?s[c][t==="en"?1:0]:o},num:o=>t==="en"?String(o):String(o).replace(/[0-9]/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]),lang:t,girl:n}}var o_=`
.lk-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#3a2a5a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}
.lk-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.lk-layer{position:absolute;inset:0;pointer-events:none}
.lk-layer button,.lk-layer .lk-card,.lk-layer .lk-pe{pointer-events:auto}
.lk-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*2.4);right:calc(var(--u)*2.4);display:flex;align-items:center;justify-content:space-between;gap:calc(var(--u)*2);z-index:6;pointer-events:none}.lk-top>*{pointer-events:auto}
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
`,pa=class{constructor(e,t,n,s){this.el=e,this.cfg=t||{},this.post=n||(()=>{}),this.opts=s,this.T=Qh(s.text||{},this.cfg),this.age=Math.min(6,Math.max(2,Number(this.cfg.age)||5)),this.base=this.cfg.base||"./",this.done=!!this.cfg.done,this.save=this.cfg.save&&typeof this.cfg.save=="object"?{...this.cfg.save}:{},this.sound=new ua(s.theme),s.musicOnly&&(this.sound.musicOnly=!0,this.opts.voice=!1),this.voice=new fa(this.base,this.T.lang,(a,o)=>this.post({type:"speak",text:a,lang:o}),a=>this.sound.duck(a)),this.sound.muted=!!this.save.muted,document.getElementById("lk-style")||document.head.append(Ke("style",{id:"lk-style"},o_)),this.root=Ke("div",{class:"lk-root",dir:this.T.lang==="en"?"ltr":"rtl"}),e.append(this.root),this.layer=Ke("div",{class:"lk-layer"});let r=this.layer.append.bind(this.layer);this.layer.append=(...a)=>r(...a.filter(o=>o!=null&&o!==!1)),this.root.append(this.layer);for(let a of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(a,()=>this.sound.unlock(),{capture:!0,passive:!0});this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=Ke("button",{class:"lk-soundpill",onclick:a=>{a.stopPropagation(),this.sound.unlock()}},this.T.t("sound")),this.root.append(this.soundPill),this._tapped=!1,this.root.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(e)}t(e){return this.T.t(e)}setGender(e){this.cfg.gender=e==="girl"?"girl":"boy",this.T=Qh(this.opts.text||{},this.cfg)}_resize(){let e=this.el.getBoundingClientRect();this.w=e.width||window.innerWidth,this.h=e.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.onResize&&this.onResize(this.w,this.h)}async fonts(){try{let e=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(e.map(t=>t.load().then(n=>document.fonts.add(n)))),new Promise(t=>setTimeout(t,900))])}catch{}}speak(e,t,n){if(!e||this.opts.voice===!1){n&&n();return}this.voice.muted=this.sound.muted,this.voice.say(e,t,n)}round(e,t,n){e&&this.post({type:"round",skill:e,correct:!!t,detail:n==null?null:String(n)})}complete(){this.post({type:"complete"})}saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}exit(){this.saveNow(),this.post({type:"exit"})}clear(){this.layer.replaceChildren(),this.bubble=null}backBtn(){return Ke("button",{class:"lk-rbtn","aria-label":this.t("back"),onclick:e=>{e.stopPropagation(),this.exit()}},this.T.lang==="en"?"\u2190":"\u2192")}soundBtn(){let e=Ke("button",{class:"lk-rbtn y","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",t=>{t.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}topBar(e,t){let n=Ke("div",{class:"lk-dots","aria-hidden":"true"},Array.from({length:e},()=>Ke("span",{},t)));return this.layer.append(Ke("div",{class:"lk-top"},this.backBtn(),n,this.soundBtn())),this.bubble=Ke("div",{class:"lk-bubble",role:"status"}),this.layer.append(this.bubble),s=>[...n.children].forEach((r,a)=>r.classList.toggle("on",a<s))}say(e,t,n=3.2){this.bubble&&(this.bubble.textContent=e,this.bubble.classList.add("show"),clearTimeout(this._bt),n>0&&(this._bt=setTimeout(()=>this.bubble&&this.bubble.classList.remove("show"),n*1e3)),t&&this.speak(t===!0?e:t))}titleCard(e,t,n,s=!1){this.clear(),this.sound.setMode("menu"),this.layer.append(Ke("div",{class:"lk-top"},this.backBtn(),Ke("span"),this.soundBtn()));let r=Ke("button",{class:"lk-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),n()}},"\u25B6 ",this.t("play"));s?this.layer.append(Ke("div",{class:"lk-dim",style:"background:none"},r)):this.layer.append(Ke("div",{class:"lk-dim",style:"background:none"},Ke("div",{class:"lk-card"},Ke("div",{class:"lk-title"},e),Ke("div",{class:"lk-big"},t),r))),setTimeout(()=>r.focus({preventScroll:!0}),50)}finishCard(e,t,n,s,r){this.complete();let a=!this.done;this.done=!0,this.sound.play("win"),setTimeout(()=>this.sound.play("star"),900),this.speak(a?`${this.t("greatSay")} ${this.t("newStarSay")}`:this.t("doneAgain"));let o=Ke("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),n()}},"\u21BB ",this.t("again"));this.layer.append(Ke("div",{class:"lk-dim"},Ke("div",{class:"lk-card"},Ke("div",{class:"lk-title",style:"font-size:calc(var(--u)*8)"},e),Ke("div",{class:"lk-starburst"},a?"\u2B50":t),Ke("div",{class:"lk-msg"},this.t("great")),Ke("div",{class:"lk-small",style:"font-size:calc(var(--u)*4.6);color:#6a3ad0"},a?this.t("newStar"):this.t("doneAgain")),s?Ke("button",{class:"lk-btn",onclick:()=>{this.sound.play("tap"),s()}},this.t("nextLevel")):null,o,r?Ke("button",{class:"lk-btn p",onclick:()=>{this.sound.play("tap"),r()}},this.t("levelsBtn")):null,Ke("button",{class:"lk-btn p",onclick:()=>this.exit()},this.t("back"))))),setTimeout(()=>o.focus({preventScroll:!0}),50)}pause(){this.sound.suspend(),this.voice&&this.voice.stop()}dispose(){this.voice&&this.voice.stop(),clearInterval(this._pill),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}};var ga=class extends ss{constructor(){super();let e=new qe;e.deleteAttribute("uv");let t=new Je({side:Ut}),n=new Je,s=new ia(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new le(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new le(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new le(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new le(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new le(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new le(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new le(e,hs(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let p=new le(e,hs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let m=new le(e,hs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new le(e,hs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new le(e,hs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let f=new le(e,hs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function hs(i){let e=new wt;return e.color.setScalar(i),e}function ed(i,e,{env:t=.35,exposure:n=.95}={}){i.toneMapping=Sl,i.toneMappingExposure=n;try{let s=new is(i);e.environment=s.fromScene(new ga,.04).texture,e.environmentIntensity=t,s.dispose()}catch{}}function td(i,{top:e="#5ab4ff",horizon:t="#d8f0ff"}={}){let n=document.createElement("canvas");n.width=8,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,e),r.addColorStop(.6,t),r.addColorStop(1,"#fff6e0"),s.fillStyle=r,s.fillRect(0,0,8,256);let a=new ri(n);a.colorSpace=Mt;let o=new le(new _t(90,24,16),new wt({map:a,side:Ut,fog:!1,depthWrite:!1}));return o.renderOrder=-10,i.add(o),i.background=null,o}function nd(i,e=7,{y:t=11,spread:n=36,z:s=-22}={}){let r=new rt,a=new Je({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.35});for(let o=0;o<e;o++){let l=new rt,c=4+o%3;for(let h=0;h<c;h++){let d=new le(new _t(1.2+h%3*.45,14,10),a);d.position.set((h-c/2)*1.5,Math.sin(h*1.7)*.4,h%2*.5),d.scale.y=.7,l.add(d)}l.position.set((o/e-.5)*n+Math.sin(o*3)*3,t+o%3*1.6,s-o%2*6),l.userData.v=.08+o%4*.03,r.add(l)}return i.add(r),r.userData.drift=o=>{for(let l of r.children)l.position.x+=l.userData.v*o,l.position.x>n/2+6&&(l.position.x=-n/2-6)},r}function l_(i=3,e=3844170){let t=new rt,n=new le(new yt(.16*i/3,.26*i/3,i*.55,10),new Je({color:8014370,roughness:1}));n.position.y=i*.27,n.castShadow=!0,t.add(n);let s=new Je({color:e,roughness:.85});for(let[r,a,o,l]of[[0,i*.8,0,.62],[-.45,i*.66,.1,.45],[.45,i*.68,-.1,.46],[.05,i*1.02,.05,.42],[-.1,i*.7,.4,.4]]){let c=new le(new _t(l*i/3*1.5,14,11),s);c.position.set(r*i/3*1.5,a,o*i/3*1.5),c.castShadow=!0,t.add(c)}return t.userData.sway={amp:.018+Math.random()*.012,ph:Math.random()*6.28,sp:.8+Math.random()*.5},t}function c_(i=.7,e=3840584){let t=new rt,n=new Je({color:e,roughness:.9});for(let[s,r,a,o]of[[0,.5,0,1],[-.7,.35,.1,.7],[.7,.38,-.05,.75]]){let l=new le(new _t(i*o,12,9),n);l.position.set(s*i,r*i,a*i),l.castShadow=!0,t.add(l)}return t.userData.sway={amp:.03,ph:Math.random()*6.28,sp:1.1},t}function h_(i=16738970,e=.55){let t=new rt,n=new le(new yt(.02,.025,e,6),new Je({color:3840570}));n.position.y=e/2,t.add(n);let s=new Je({color:i,roughness:.6});for(let a=0;a<6;a++){let o=a/6*Math.PI*2,l=new le(new _t(.08,8,6),s);l.position.set(Math.cos(o)*.11,e,Math.sin(o)*.11),l.scale.set(1,.5,1),t.add(l)}let r=new le(new _t(.07,8,6),new Je({color:16769114}));return r.position.y=e+.02,t.add(r),t.userData.sway={amp:.14,ph:Math.random()*6.28,sp:1.6+Math.random()*.8},t}function d_(i=.5){let e=new le(new Jr(i,1),new Je({color:10132132,roughness:.95,flatShading:!0}));return e.scale.set(1.2,.7,1),e.castShadow=!0,e}function id(i,e,t=0){let n=[16738970,16765498,16777215,12086015,16747066];e.forEach((s,r)=>{let a;s.t==="tree"?a=l_(s.s||3.4,s.c||[3844170,4896858,3119685][r%3]):s.t==="bush"?a=c_(s.s||.7):s.t==="rock"?a=d_(s.s||.5):a=h_(n[r%n.length],s.s||.55),a.position.set(s.x,t,s.z),a.rotation.y=r*1.3,i.add(a)})}function Xs(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"));let r=new ri(s);return r.colorSpace=Mt,n&&(r.wrapS=r.wrapT=Qi,r.repeat.set(...n)),r}var Mn=(i,e={})=>new Je({color:i,roughness:.55,...e});var ma=class{constructor(e,t={}){this.sh=e,this.o={bg:14676991,ground:14207144,fov:40,box:[5,3],dir:[0,.45,.9],target:[0,.8,0],...t},this.renderer=new zr({antialias:!0,powerPreference:"high-performance"}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Mt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bl,e.root.prepend(this.renderer.domElement),this.scene=new ss,ed(this.renderer,this.scene),this.scene.background=new Ye(this.o.bg),this.camera=new Ht(this.o.fov,1,.1,120),this.scene.add(new ta(16777215,this.o.ground,1.6));let n=new sa(16774368,2);n.position.set(-3,9,7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:34}),this.scene.add(n),this.fx=[],this.picks=[],this.focus=null,this.mode="title",this.clock=new ra,this.frames=[],e.onResize=(s,r)=>this.resize(s,r),this.resize(e.w,e.h),this._bind(),this._loop()}add(...e){return this.scene.add(...e),e[0]}resize(e,t){var d;let n=this.renderer;n.setSize(e,t,!1),n.domElement.style.width="100%",n.domElement.style.height="100%";let s=this.camera;s.aspect=e/t,s.updateProjectionMatrix();let r=Math.tan(kh.degToRad(s.fov/2)),a=this.o.wide&&s.aspect>=((d=this.o.wide.minAspect)!=null?d:1.45)?this.o.wide:null,o=a?a.box:this.o.box,l=Math.max(o[1]/r,o[0]/(r*s.aspect)),c=new E(...this.o.dir).normalize(),h=new E(...a?a.target:this.o.target);s.position.copy(h).addScaledVector(c,l),s.lookAt(h)}setPicks(e,t){this.picks=e,this.onPick=t,this.focus!=null&&this.focus>=e.length&&(this.focus=null)}_bind(){let e=this.sh.root;this._up=t=>{if(this.mode!=="wait"||!this.picks.length||t.target.closest("button")||t.target.closest(".lk-dim"))return;let n=e.getBoundingClientRect(),s=new ne((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),r=new aa;r.setFromCamera(s,this.camera);let a=r.intersectObjects(this.picks.map(o=>o.hit),!1)[0];a&&this.onPick(a.object.userData.id)},e.addEventListener("pointerup",this._up),this._key=t=>{var s;if(this.mode!=="wait"||!this.picks.length)return;let n=this.picks.length;t.key==="ArrowLeft"||t.key==="ArrowRight"?(t.preventDefault(),this.focus=(((s=this.focus)!=null?s:t.key==="ArrowRight"?-1:0)+(t.key==="ArrowRight"?1:-1)+n)%n,this.sh.sound.play("tap")):(t.key==="Enter"||t.key===" ")&&this.focus!=null&&(t.preventDefault(),this.onPick(this.picks[this.focus].hit.userData.id))},window.addEventListener("keydown",this._key)}focusedId(){return this.focus!=null&&this.picks[this.focus]?this.picks[this.focus].hit.userData.id:null}sparkle(e,t=22){let n=[16734810,16763194,4892927,7002218,16777215];for(let s=0;s<t;s++){let r=new le(new Kr(.06),new wt({color:n[s%5]}));r.position.copy(e);let a=Math.random()*Math.PI*2;r.userData={v:new E(Math.cos(a)*1.5,2+Math.random()*2,Math.sin(a)*1.2),life:1},this.scene.add(r),this.fx.push(r)}}onFrame(e){this.frames.push(e)}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let e=Math.min(.05,this.clock.getDelta()),t=this.clock.elapsedTime;for(let n of this.frames)n(e,t);for(let n=this.fx.length-1;n>=0;n--){let s=this.fx[n],r=s.userData;r.life-=e,r.v.y-=6*e,s.position.addScaledVector(r.v,e),r.life<=0&&(this.scene.remove(s),s.geometry.dispose(),this.fx.splice(n,1))}this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._key),this.sh.root.removeEventListener("pointerup",this._up),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}};var Gl=new Map;function te(i,e=.45){let t=`${i}|${e}`;return Gl.has(t)||Gl.set(t,new Je({color:i,roughness:e,metalness:.02})),Gl.get(t)}function Nt(i,e,t=0,n=0,s=0){let r=new le(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}var Se=(i,e,t,n,s,r=1,a=1,o=1,l=18)=>{let c=Nt(new _t(i,l,Math.max(10,l-4)),e,t,n,s);return c.scale.set(r,a,o),c},St=(i,e,t,n,s,r,a,o=18)=>Nt(new yt(i,e,t,o),n,s,r,a),Lt=(i,e,t,n,s,r,a)=>Nt(new qe(i,e,t),n,s,r,a),li=1710628,wn=16777215;function Wl(i,e,t,n,s=1,r=.08){for(let a of[-1,1])i.add(Se(.045*s,te(wn,.3),e+a*r*s,t,n)),i.add(Se(.026*s,te(li,.2),e+a*r*s,t,n+.03*s)),i.add(Se(.009*s,te(wn,.2),e+a*r*s+.01*s,t+.012*s,n+.05*s))}function _a(i,e,t,n,s=.6){let r=Se(.09,te(3848266,.5),e,t,n,1,.35,.6);r.rotation.z=s,i.add(r)}var Xl={apple(i){i.add(Se(.34,te(15216682,.35),0,.34,0,1,.92,1)),i.add(St(.02,.025,.14,te(6961690),0,.7,0)),_a(i,.08,.72,0),i.add(Se(.06,te(16777215,.2),-.13,.48,.24,1,1.4,.5))},banana(i){let e=new as([new E(-.38,.42,0),new E(-.2,.18,0),new E(.1,.12,0),new E(.36,.34,0)]),t=Nt(new Hs(e,24,.11,12),te(16765498,.4));i.add(t),i.add(Se(.05,te(6965786),-.4,.45,0)),i.add(Se(.04,te(4864538),.38,.37,0))},orange(i){i.add(Se(.33,te(16747034,.5),0,.33,0)),i.add(St(.015,.02,.06,te(4880938),0,.66,0)),_a(i,.06,.66,0,.3)},strawberry(i){let e=Nt(new Kt(.3,.5,18),te(15738938,.4),0,.3,0);e.rotation.x=Math.PI,i.add(e),i.add(Se(.3,te(15738938,.4),0,.5,0,1,.45,1));for(let t=0;t<14;t++){let n=t*2.4,s=.25+t%4*.07,r=.22-(.55-s)*.2;i.add(Se(.018,te(16769658,.3),Math.cos(n)*r,s,Math.sin(n)*r))}for(let t=0;t<5;t++){let n=Se(.1,te(3848266),Math.cos(t*1.26)*.12,.62,Math.sin(t*1.26)*.12,1,.25,.5);n.rotation.y=-t*1.26,i.add(n)}},pear(i){i.add(Se(.3,te(11065402,.45),0,.3,0)),i.add(Se(.2,te(11065402,.45),0,.58,0)),i.add(St(.02,.025,.12,te(6961690),.02,.8,0)),_a(i,.1,.8,0)},grapes(i){let e=te(9059032,.3),t=0;for(let[n,s,r]of[[4,.62,.16],[4,.46,.14],[3,.31,.1],[1,.17,0]]){for(let a=0;a<n;a++){let o=a/n*Math.PI*2+t;i.add(Se(.1,e,Math.cos(o)*r,s,Math.sin(o)*r))}t+=.5}i.add(St(.02,.02,.14,te(6965786),0,.78,0)),_a(i,.1,.8,0)},watermelon(i){let e=new pn;e.absarc(0,0,.42,0,Math.PI,!1);let t=new ai(e,{depth:.18,bevelEnabled:!1,curveSegments:24});t.translate(0,0,-.09);let n=Nt(t,te(2791994));n.rotation.x=Math.PI,n.position.y=.44,i.add(n);let s=new pn;s.absarc(0,0,.36,0,Math.PI,!1);let r=Nt(new ai(s,{depth:.2,bevelEnabled:!1,curveSegments:24}),te(16730714));r.geometry.translate(0,0,-.1),r.rotation.x=Math.PI,r.position.y=.44,i.add(r);for(let[a,o]of[[-.18,.3],[0,.22],[.18,.3],[-.08,.36],[.1,.36]])i.add(Se(.025,te(li),a,o,.105,1,1.5,.5))},ball(i){i.add(Se(.34,te(16777215,.3),0,.34,0));let e=Nt(new bt(.34,.06,10,36),te(16726602,.3),0,.34,0);i.add(e);let t=Nt(new bt(.34,.06,10,36),te(3836671,.3),0,.34,0);t.rotation.y=Math.PI/2,i.add(t);let n=Nt(new bt(.34,.06,10,36),te(16765498,.3),0,.34,0);n.rotation.x=Math.PI/2,i.add(n)},teddy(i){let e=te(13141066,.8),t=te(15779984,.8);i.add(Se(.22,e,0,.26,0,1,1.05,.9)),i.add(Se(.14,t,0,.25,.14,1,1.1,.6)),i.add(Se(.19,e,0,.6,0)),i.add(Se(.08,t,0,.56,.16,1,.8,.8)),i.add(Se(.03,te(li),0,.58,.23));for(let s of[-1,1])i.add(Se(.07,e,s*.15,.76,0)),i.add(Se(.04,t,s*.15,.76,.04)),i.add(Se(.025,te(li,.2),s*.07,.65,.17)),i.add(Se(.08,e,s*.22,.32,.06)),i.add(Se(.09,e,s*.13,.07,.08,1,.8,1.2));let n=Se(.05,te(16726634),0,.44,.17,2,.8,.6);i.add(n)},blocks(i){let e=[16730698,4892927,16762938];[[-.18,.13,0],[.18,.13,.02],[0,.39,0]].forEach(([t,n,s],r)=>{let a=Lt(.26,.26,.26,te(e[r],.4),t,n,s);a.rotation.y=(r-1)*.2,i.add(a);let o=Lt(.14,.14,.01,te(wn,.4),t,n,s+.135);o.rotation.y=a.rotation.y,i.add(o)})},drum(i){i.add(St(.3,.3,.34,te(15220778,.4),0,.2,0,24)),i.add(St(.31,.31,.04,te(16765498,.3),0,.38,0,24)),i.add(St(.31,.31,.04,te(16765498,.3),0,.03,0,24)),i.add(St(.29,.29,.02,te(16315626,.6),0,.4,0,24));for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=St(.012,.012,.36,te(wn),Math.cos(t)*.3,.2,Math.sin(t)*.3,6);n.rotation.z=e%2?.5:-.5,i.add(n)}for(let e of[-1,1]){let t=St(.02,.02,.42,te(14198890),e*.14,.55,.05,8);t.rotation.z=e*.8,i.add(t),i.add(Se(.04,te(14198890),e*.3,.7,.05))}},yoyo(i){for(let t of[-1,1]){let n=St(.3,.3,.1,te(t<0?3852456:16739e3,.35),0,.32,t*.08,24);n.rotation.x=Math.PI/2,i.add(n)}let e=St(.08,.08,.08,te(wn),0,.32,0);e.rotation.x=Math.PI/2,i.add(e),i.add(St(.008,.008,.4,te(wn),0,.68,0,6)),i.add(Se(.04,te(16765498),0,.88,0))},cat(i){let e=te(16754762,.7);i.add(Se(.22,e,0,.24,-.05,1,.95,1.1)),i.add(Se(.18,e,0,.52,.12));for(let n of[-1,1]){let s=Nt(new Kt(.07,.13,12),e,n*.1,.68,.1);s.rotation.z=-n*.25,i.add(s),i.add(Se(.06,e,n*.12,.05,.12,1,.7,1.3))}Wl(i,0,.55,.26,1,.065),i.add(Se(.025,te(16743066),0,.49,.29));let t=Nt(new Hs(new as([new E(0,.2,-.3),new E(.1,.35,-.42),new E(.05,.55,-.38)]),12,.04,8),e);i.add(t);for(let n=0;n<3;n++)i.add(Lt(.12,.02,.01,te(14186538),0,.62+n*.03-.03,.29-n*.02))},fish(i){let e=te(16747050,.35);i.add(Se(.26,e,0,.36,0,.6,.85,1.3));let t=Nt(new Kt(.18,.24,4),e,0,.36,-.42);t.rotation.x=-Math.PI/2,t.scale.set(.3,1,1.2),i.add(t);for(let s of[-.08,.1])i.add(Se(.2,te(wn,.4),0,.36,s,.62,.84,.12));for(let s of[-1,1])i.add(Se(.05,te(wn,.3),s*.14,.42,.2)),i.add(Se(.028,te(li),s*.17,.42,.22));let n=Nt(new Kt(.1,.18,4),e,0,.6,-.05);n.scale.set(.2,1,1),i.add(n)},chick(i){let e=te(16767034,.6);i.add(Se(.22,e,0,.24,0)),i.add(Se(.16,e,0,.5,.04)),Wl(i,0,.53,.17,.9,.06);let t=Nt(new Kt(.04,.09,8),te(16747034),0,.48,.21);t.rotation.x=Math.PI/2,i.add(t);for(let n of[-1,1]){let s=Se(.1,e,n*.2,.26,0,.4,.8,1);s.rotation.z=n*.4,i.add(s),i.add(Lt(.06,.02,.1,te(16747034),n*.07,.01,.06))}i.add(Se(.04,e,0,.68,.02,.6,1.2,.6))},bunny(i){let e=te(16052468,.8);i.add(Se(.22,e,0,.24,-.02,1,.95,1.05)),i.add(Se(.16,e,0,.5,.1));for(let t of[-1,1]){let n=Se(.06,e,t*.07,.78,.06,.8,2.6,.6);n.rotation.z=-t*.12,i.add(n),i.add(Se(.035,te(16754880),t*.07,.78,.1,.8,2.2,.4)),i.add(Se(.06,e,t*.1,.04,.14,1,.6,1.4))}Wl(i,0,.53,.23,.85,.06),i.add(Se(.025,te(16747176),0,.47,.26)),i.add(Se(.07,e,0,.22,-.26))},frog(i){let e=te(5949498,.45);i.add(Se(.26,e,0,.2,0,1.1,.75,1));for(let n of[-1,1])i.add(Se(.1,e,n*.12,.38,.1)),i.add(Se(.065,te(wn,.3),n*.12,.42,.16)),i.add(Se(.035,te(li),n*.12,.43,.21)),i.add(Se(.09,e,n*.24,.05,.12,1,.4,1.4));let t=Nt(new bt(.1,.012,6,16,Math.PI),te(2779674),0,.24,.24);t.rotation.z=Math.PI,i.add(t),i.add(Se(.18,te(13168778,.5),0,.13,.08,1,.5,1))},car(i){i.add(Lt(.74,.22,.4,te(15216682,.3),0,.22,0)),i.add(Lt(.4,.2,.36,te(15216682,.3),-.05,.42,0));for(let e of[-1,1])i.add(Lt(.17,.14,.37,te(10148095,.1),-.05+e*.1,.43,0));for(let e of[-.24,.24])for(let t of[-.21,.21]){let n=St(.1,.1,.07,te(li,.6),e,.1,t);n.rotation.x=Math.PI/2,i.add(n),i.add(St(.045,.045,.075,te(14211296,.3),e,.1,t).rotateX(Math.PI/2))}for(let e of[-.12,.12])i.add(Se(.035,te(16773800,.2),.37,.25,e));i.rotation.y=-Math.PI/2},bus(i){i.add(Lt(.86,.42,.4,te(16761402,.35),0,.33,0));for(let e=0;e<4;e++)for(let t of[-1,1])i.add(Lt(.15,.12,.01,te(10148095,.1),-.3+e*.19,.42,t*.205));i.add(Lt(.01,.16,.3,te(10148095,.1),.435,.42,0)),i.add(Lt(.88,.04,.41,te(3816010),0,.22,0));for(let e of[-.28,.28])for(let t of[-.21,.21]){let n=St(.09,.09,.07,te(li,.6),e,.1,t);n.rotation.x=Math.PI/2,i.add(n)}i.rotation.y=-Math.PI/2},boat(i){let e=new pn;e.moveTo(-.42,.2),e.lineTo(.42,.2),e.lineTo(.3,0),e.lineTo(-.3,0),e.closePath();let t=Nt(new ai(e,{depth:.3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),te(3832552,.35),0,.02,-.15);i.add(t),i.add(Lt(.86,.04,.32,te(wn,.4),0,.22,0)),i.add(St(.015,.015,.62,te(9067050),0,.53,0,8));let n=new pn;n.moveTo(0,0),n.lineTo(.3,0),n.lineTo(0,.5),n.closePath();let s=Nt(new jr(n),new Je({color:16734810,side:qt,roughness:.6}),.02,.28,0);i.add(s),i.rotation.y=-Math.PI/2},plane(i){let e=te(16053498,.3),t=St(.1,.07,.8,e,0,.32,0);t.rotation.z=Math.PI/2,i.add(t),i.add(Se(.1,e,.4,.32,0,1,1,1)),i.add(Lt(.22,.03,.86,te(3836671,.35),.02,.3,0)),i.add(Lt(.12,.02,.32,te(3836671,.35),-.36,.34,0)),i.add(Lt(.12,.18,.02,te(16730698,.35),-.36,.44,0));for(let s=0;s<3;s++)for(let r of[-1,1])i.add(Se(.025,te(6998271,.1),.1-s*.12,.37,r*.09));let n=Lt(.02,.26,.04,te(3816010),.5,.32,0);i.add(n),i.userData.prop=n,i.rotation.y=-Math.PI/2},train(i){i.add(Lt(.5,.3,.36,te(3852394,.35),-.12,.25,0)),i.add(Lt(.26,.24,.36,te(15220778,.35),-.24,.52,0)),i.add(Lt(.18,.1,.38,te(10148095,.1),-.24,.56,0));let e=St(.14,.14,.36,te(3832552,.35),.24,.27,0);e.rotation.z=Math.PI/2,i.add(e),i.add(St(.05,.07,.18,te(3816010),.3,.48,0)),i.add(Se(.06,te(16765498),.42,.27,0));for(let t of[-.26,0,.26])for(let n of[-.19,.19]){let s=St(.09,.09,.05,te(16761402,.4),t,.1,n);s.rotation.x=Math.PI/2,i.add(s)}i.rotation.y=-Math.PI/2}},j_=Object.keys(Xl);function sd(i){let e=new rt,t=new rt;return(Xl[i]||Xl.ball)(t),e.add(t),e.userData.id=i,e.userData.inner=t,e}function rd(i,e=.34,t=.07){if(i==="pyramid"){let r=new Kt(.95,1.35,4);return r.rotateY(Math.PI/4),r}let n=new pn;if(i==="circle")n.absarc(0,0,.72,0,Math.PI*2);else if(i==="square")n.moveTo(-.62+.14,-.62),n.lineTo(.62-.14,-.62),n.quadraticCurveTo(.62,-.62,.62,-.62+.14),n.lineTo(.62,.62-.14),n.quadraticCurveTo(.62,.62,.62-.14,.62),n.lineTo(-.62+.14,.62),n.quadraticCurveTo(-.62,.62,-.62,.62-.14),n.lineTo(-.62,-.62+.14),n.quadraticCurveTo(-.62,-.62,-.62+.14,-.62);else if(i==="octagon"){for(let r=0;r<8;r++){let a=Math.PI/8+r*Math.PI/4,o=Math.cos(a)*.8,l=Math.sin(a)*.8;r?n.lineTo(o,l):n.moveTo(o,l)}n.closePath()}else if(i==="plus")n.moveTo(-.26,-.78),n.lineTo(.26,-.78),n.lineTo(.26,-.26),n.lineTo(.78,-.26),n.lineTo(.78,.26),n.lineTo(.26,.26),n.lineTo(.26,.78),n.lineTo(-.26,.78),n.lineTo(-.26,.26),n.lineTo(-.78,.26),n.lineTo(-.78,-.26),n.lineTo(-.26,-.26),n.closePath();else if(i==="crescent")n.absarc(0,0,.82,Math.PI*.32,Math.PI*1.68,!1),n.absarc(.34,0,.66,Math.PI*1.62,Math.PI*.38,!0),n.closePath();else if(i==="semicircle")n.absarc(0,-.3,.85,0,Math.PI,!1),n.closePath();else if(i==="trapezoid")n.moveTo(-.9,-.5),n.lineTo(.9,-.5),n.lineTo(.5,.5),n.lineTo(-.5,.5),n.closePath();else if(i==="parallelogram")n.moveTo(-.9,-.5),n.lineTo(.5,-.5),n.lineTo(.9,.5),n.lineTo(-.5,.5),n.closePath();else if(i==="hexagram"){for(let r=0;r<12;r++){let a=Math.PI/2+r*Math.PI/6,o=r%2?.5:.95,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else if(i==="drop")n.moveTo(0,.95),n.bezierCurveTo(.2,.5,.75,.1,.75,-.3),n.bezierCurveTo(.75,-.75,.4,-.95,0,-.95),n.bezierCurveTo(-.4,-.95,-.75,-.75,-.75,-.3),n.bezierCurveTo(-.75,.1,-.2,.5,0,.95);else if(i==="triangle")n.moveTo(-.82,-.6),n.lineTo(.82,-.6),n.lineTo(0,.82),n.closePath();else if(i==="star"){for(let r=0;r<10;r++){let a=Math.PI/2+r*Math.PI/5,o=r%2?.42:.92,l=Math.cos(a)*o,c=Math.sin(a)*o;r?n.lineTo(l,c):n.moveTo(l,c)}n.closePath()}else n.moveTo(0,-.78),n.bezierCurveTo(-.2,-.55,-.9,-.2,-.9,.28),n.bezierCurveTo(-.9,.7,-.35,.85,0,.4),n.bezierCurveTo(.35,.85,.9,.7,.9,.28),n.bezierCurveTo(.9,-.2,.2,-.55,0,-.78);let s=new ai(n,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:4,curveSegments:20});return s.center(),s}var xa={ambulance:[220,130],ant:[340,280],apple:[180,190],banana:[210,180],bee:[320,240],boat:[230,170],boy_idle:[410,810],boy_point:[310,490],boy_read:[260,430],boy_wave:[352,490],brachio:[400,298],bus:[200,130],butterfly:[270,230],car:[220,110],carrot:[190,190],cat:[310,410],cat2:[410,450],caterpillar:[380,240],cheetah:[490,440],chick:[340,340],clownfish:[320,250],cow:[492,472],cow2:[470,470],crab:[400,310],croc:[340,490],croc2:[440,260],dog:[280,420],dog2:[400,440],dolphin:[420,340],dragonfly:[1010,640],elephant:[380,460],elephant2:[520,470],firetruck:[230,140],frog:[156,256],giraffe:[300,500],giraffe2:[310,520],girl_cheer:[300,470],girl_idle:[430,840],girl_stand_read:[280,490],girl_wave:[332,490],goose:[270,410],grapes:[150,200],grasshopper:[400,250],helicopter:[280,140],hen:[300,380],horse:[450,470],iguana:[440,240],ladybug:[300,190],lion:[280,480],lion2:[360,450],mallard:[320,340],mango:[190,200],mantis:[360,250],monkey:[420,450],octopus:[430,330],orange:[164,176],owl:[490,532],owlbrown:[260,330],panda:[380,430],parrot:[370,330],peacock:[430,340],penguin:[330,350],pig:[410,450],pigeon:[300,320],pineapple:[130,230],plane:[250,150],police:[240,140],rabbit:[360,450],seahorse:[210,340],shark:[460,290],sheep:[222,350],sheep2:[430,430],snake:[360,270],starfish:[320,320],stego:[480,268],strawberry:[144,190],tiger:[430,450],tortoise:[390,230],train:[280,150],trex:[450,288],triceratops:[390,290],turtle:[450,310],watermelon:[210,164],zebra:[440,490],fox:[1040,1020],camel:[1040,1020],sun:[992,1020],rose:[1040,1028],pomegranate:[1040,1028],rocket:[992,1028],ball:[1040,1020],crow:[1040,1020],envelope:[992,1020],lemon:[1040,1028],crescent:[1040,1028],corn:[992,1048],rabbit_n:[1040,1020],duck_n:[1040,1020],banana_n:[992,1020],apple_n:[1040,1028],clownfish_n:[1040,1028],butterfly_n:[992,1028],cat_n:[1040,1020],horse_n:[1040,1020],sheep_n:[992,1020],hen_n:[1040,1028],bee_n:[1040,1028],giraffe_n:[992,1048],windmill_p:[800,900],house_p:[1120,760],tree_oak:[890,900],tree_apple:[664,800],tuft_1:[430,350],tuft_2:[450,350],tuft_3:[450,350],lotus_p:[740,400],fence_p:[1120,370],hay_p:[1020,580],stones_p:[1100,250],flowers_p:[1040,510],frog_n:[1536,1024],plane_n:[1536,1024],grapes_n:[1536,1044],dove_n:[1536,1024],butterfly_1:[480,380],butterfly_2:[460,440],butterfly_3:[430,360],bird_blue:[820,670],bird_yellow:[900,710],ladybug_leaf:[1e3,630],barn_f:[1080,810],silo_f:[470,790],pump_f:[490,780],gate_f:[970,400],hayroll_f:[530,490],haystack_f:[520,470],trough_f:[620,390],scarecrow_f:[550,680],tractor_f:[860,660],crate_apple:[550,490],crate_carrot:[530,510],crate_corn:[540,490],sunflower_1:[390,610],sunflower_2:[440,530],b_clown:[1084,1084],b_tang:[1084,1084],b_yellowfish:[1084,1084],b_octopus:[1084,1084],b_crab_walk:[1084,1084],b_gull_fly:[1084,1084],b_shell:[828,742],b_spiral:[828,742],b_starfish:[828,742],b_crab:[828,742],b_jelly:[828,742],b_turtle:[828,742],b_dolphin:[828,742],b_gull:[828,742],b_gull_fly2:[828,742],b_coral:[828,742],b_ball:[828,742],b_ring:[828,742],b_palm1:[828,742],b_palm2:[828,742],b_umbrella:[828,742],b_castle:[828,742],b_lighthouse:[828,742],b_boat:[828,742],b_dock:[828,742],b_chair:[828,742],b_rocks:[828,742],b_weed:[828,742],b_surf:[828,742],b_bucket:[828,742],f_pad_stump:[1596,1084],f_pad_hay:[1596,1084],f_pad_nest:[1596,1084],f_pad_plank:[1596,1084],f_coop:[828,742],f_eggs:[828,742],f_milk:[828,742],f_barrow:[828,742],f_water_can:[828,742],f_sign:[828,742],f_bucket:[828,742],f_stool:[828,742],f_barrels:[828,742],f_post:[828,742],f_haypile:[828,742],f_birdhouse:[828,742],f_cow:[916,940],f_pig:[600,760],f_horse:[860,980],f_sheep:[692,840],f_goat:[680,1060],f_donkey:[720,1080],f_rooster:[680,1040],f_hen:[740,960],s_pad_moon:[1596,1084],s_pad_energy:[1566,1084],s_pad_metal:[1596,1054],s_pad_crystal:[1566,1054],s_alien:[828,1084],s_robot:[828,1084],s_cat:[828,1084],s_dog:[798,1084],s_shoot:[828,1054],s_rocket:[828,1054],s_helmet:[828,1054],s_comet:[798,1054],s_launch:[828,742],s_ufo:[828,742],s_station:[828,742],s_rock:[798,742],s_crystal:[828,742],s_dish:[828,742],s_rover:[828,742],s_ringplanet:[798,742],s_blueplanet:[828,714],s_pinkplanet:[828,714],s_star:[828,714],s_moon:[798,714],k_tower:[828,742],k_gate:[828,742],k_wall:[828,742],k_stall:[798,742],k_well:[828,742],k_chest:[828,742],k_banner:[828,742],k_catapult:[798,742],k_cannon:[828,714],k_shield:[828,714],k_cottage:[828,714],k_torch:[798,714],k_knight:[828,1084],k_princess:[828,1084],k_king:[828,1084],k_queen:[798,1084],k_dragon:[828,1054],k_horse:[828,1054],k_jester:[828,1054],k_wizard:[798,1054],k_pad_stone:[1596,1084],k_pad_velvet:[1566,1084],k_pad_shield:[1596,1054],k_pad_gold:[1566,1054],w_pine1:[828,742],w_pine2:[828,742],w_snowman:[828,742],w_igloo:[798,742],w_cabin:[828,742],w_sled:[828,742],w_snowballs:[828,742],w_iceblock:[798,742],w_crystal:[828,714],w_pond:[940,748],w_sign:[880,748],w_skis:[880,748],w_penguin:[828,1084],w_bear:[828,1084],w_fox:[820,960],w_rabbit:[798,1084],w_owl:[828,1054],w_reindeer:[828,1054],w_seal:[980,900],w_chick:[798,1054],w_pad_ice:[1596,1084],w_pad_snow:[1566,1084],w_pad_log:[1596,1054],w_pad_crystal:[1566,1054],c_pad_manhole:[1596,1084],c_pad_tire:[1566,1084],c_pad_round:[1596,1054],c_pad_cone:[1560,1088],c_schoolbus:[828,742],c_firetruck:[828,742],c_ambulance:[828,742],c_police:[798,742],c_citybus:[828,742],c_taxi:[828,742],c_train:[828,742],c_tram:[798,742],c_bulldozer:[828,714],c_bike:[828,714],c_heli:[828,714],c_plane:[798,714],c_skyscraper:[828,742],c_house:[828,742],c_school:[828,742],c_hospital:[798,742],c_firestation:[828,742],c_light:[828,742],c_busstop:[828,742],c_lamp:[798,742],c_bench:[828,714],c_tree:[828,714],c_mailbox:[828,714],c_fountain:[798,714],r_pad_candy:[1596,1084],r_pad_cloud:[1566,1084],r_pad_rainbow:[1596,1054],r_pad_cookie:[1566,1054],r_unicorn:[828,1084],r_butterfly:[840,700],r_ladybug:[900,660],r_kite:[798,1084],r_pinwheel:[828,1054],r_star:[828,1054],r_sun:[828,1054],r_cloud:[798,1054],r_rainbow:[880,680],r_lolli:[828,742],r_cotton:[828,742],r_carousel:[798,742],r_slide:[828,742],r_swing:[828,742],r_seesaw:[828,742],r_balloons:[798,742],r_icecream:[600,800],r_candy:[828,714],r_cupcake:[828,714],r_gingerhouse:[798,714],u_pinktube:[828,742],u_orangecoral:[828,742],u_brain:[828,742],u_weed:[798,742],u_rocks:[828,742],u_chest:[828,742],u_wreck:[828,742],u_anchor:[798,742],u_arch:[828,714],u_clam:[828,714],u_anemone:[828,714],u_barrel:[798,714],u_clown:[828,742],u_tang:[828,742],u_yellowfish:[828,742],u_octopus:[798,742],u_turtle:[828,742],u_dolphin:[828,742],u_seahorse:[828,742],u_crab:[798,742],u_star:[828,714],u_jelly:[828,714],u_whale:[800,718],u_puffer:[798,714],u_pad_sand:[1596,1084],u_pad_shell:[1566,1084],u_pad_coral:[1596,1054],u_pad_pearl:[1566,1054],j_tree:[828,742],j_palm:[828,742],j_leaf:[828,742],j_banana:[798,742],j_mango:[828,742],j_hut:[828,742],j_bridge:[828,742],j_rocks:[798,742],j_vine:[828,714],j_flower:[828,714],j_mushroom:[828,714],j_totem:[798,714],j_pad_stump:[1596,1084],j_pad_lily:[1566,1084],j_pad_stone:[1596,1054],j_pad_bamboo:[1566,1054],j_monkey:[828,742],j_lion:[828,742],j_elephant:[828,742],j_giraffe:[798,742],j_zebra:[828,742],j_parrot:[828,742],j_frog:[828,742],j_tiger:[798,742],j_toucan:[828,714],j_gorilla:[828,714],j_chameleon:[828,714],j_snake:[798,714],d_pyramid:[850,580],d_pyramid2:[828,742],d_palm:[828,742],d_cactus:[798,742],d_dune:[828,742],d_oasis:[828,742],d_tent:[880,580],d_jar:[798,742],d_cart:[828,714],d_well:[828,714],d_flower:[828,714],d_lantern:[798,714],d_camel:[828,742],d_babycamel:[828,742],d_fox:[828,742],d_scorpion:[798,742],d_lizard:[828,742],d_snake:[828,742],d_hawk:[828,742],d_horse:[798,742],d_donkeycart:[828,714],d_jeep:[828,714],d_balloon:[828,714],d_boat:[798,714],d_pad_stone:[1596,1084],d_pad_carpet:[1566,1084],d_pad_clay:[1596,1054],d_pad_wood:[1566,1054],h_bed:[828,742],h_toothbrush:[828,742],h_sink:[828,742],h_towel:[798,742],h_backpack:[828,742],h_shoes:[828,742],h_wardrobe:[828,742],h_table:[798,742],h_broom:[828,714],h_bin:[828,714],h_clock:[828,714],h_toybox:[798,714],h_fence:[828,742],h_tulips:[828,742],h_wateringcan:[828,742],h_swing:[798,742],h_tree:[720,760],h_birdbath:[828,742],h_gnome:[500,720],h_mailbox:[798,742],h_doghouse:[828,714],h_bike:[790,640],h_ball:[828,714],h_plant:[798,714],v_tomato:[828,742],v_cucumber:[828,742],v_potato:[828,742],v_onion:[798,742],v_eggplant:[828,742],v_pepper:[828,742],v_lettuce:[828,742],v_broccoli:[798,742],v_peas:[828,714],v_pumpkin:[828,714],v_garlic:[828,714],v_mushroom:[798,714],q_kiwi:[828,742],q_melon:[828,742],q_dates:[828,742],q_fig:[798,742],q_apricot:[828,742],q_berries:[828,742],q_plum:[828,742],q_avocado:[798,742],q_peach:[828,714],q_cherry:[828,714],q_olives:[828,714],q_coconut:[798,714],e_pencil:[828,742],e_book:[828,742],e_notebook:[828,742],e_scissors:[798,742],e_ruler:[828,742],e_eraser:[828,742],e_crayons:[828,742],e_board:[798,742],e_map:[828,714],e_glue:[828,714],e_desk:[828,714],e_paper:[798,714],l_shirt:[828,742],l_trousers:[828,742],l_dress:[828,742],l_hat:[798,742],l_socks:[828,742],l_jacket:[828,742],l_scarf:[828,742],l_gloves:[798,742],l_glasses:[828,714],l_cap:[828,714],l_pajamas:[828,714],l_raincoat:[798,714],y_eye:[828,742],y_ear:[828,742],y_nose:[828,742],y_mouth:[798,742],y_hand:[828,742],y_foot:[828,742],y_hair:[828,742],y_tooth:[798,742],y_head:[828,714],y_finger:[828,714],y_knee:[828,714],y_belly:[798,714],g_rectangle:[828,742],g_oval:[828,742],g_diamond:[828,742],g_hexagon:[798,742],g_pentagon:[828,742],g_arrow:[828,742],g_cube:[828,742],g_sphere:[798,742],g_cone:[828,714],g_cylinder:[828,714],g_ring:[828,714],g_heart:[798,714],a_mama:[828,742],a_baba:[828,742],a_grandma:[828,742],a_grandpa:[798,742],a_baby:[828,742],a_brother:[828,742],a_sister:[828,742],a_boy:[798,742],a_girl:[828,714],a_friends:[828,714],a_family:[828,714],a_uncle:[798,714],h_pad_rug:[1596,1084],h_pad_wood:[1566,1084],h_pad_stone:[1596,1054],h_pad_bath:[1566,1054],t_rain:[828,742],t_snow:[828,742],t_wind:[828,742],t_thunder:[798,742],t_lightning:[828,742],t_umbrella:[828,742],t_flake:[828,742],t_flower:[798,742],t_leaves:[828,714],t_hot:[828,714],t_cold:[828,714],t_mountain:[798,714],z_doctor:[828,742],z_teacher:[828,742],z_police:[828,742],z_firefighter:[798,742],z_farmer:[828,742],z_cook:[828,742],z_driver:[828,742],z_pilot:[798,742],z_nurse:[828,714],z_builder:[828,714],z_singer:[828,714],z_painter:[798,714],i_ant:[828,742],i_fly:[828,742],i_spider:[828,742],i_worm:[798,742],i_eagle:[798,800],i_peacock:[828,800],i_flamingo:[828,800],i_swan:[798,742],i_ostrich:[798,752],i_sparrow:[828,714],i_bat:[914,714],i_snail:[798,714],o_bread:[828,742],o_cheese:[828,742],o_egg:[828,742],o_milk:[798,742],o_rice:[828,742],o_chicken:[828,742],o_juice:[828,742],o_water:[798,742],o_cookie:[828,714],o_honey:[828,772],o_soup:[828,714],o_pizza:[798,714],m_drum:[828,742],m_guitar:[828,742],m_piano:[828,742],m_violin:[798,742],m_flute:[828,742],m_trumpet:[828,742],m_tambourine:[828,742],m_oud:[798,742],m_mic:[828,714],m_headphones:[828,714],m_note:[828,714],m_bell:[798,714],x_airport:[320,292],x_angry:[261,320],x_arm:[305,320],x_arrow:[288,230],x_astronaut:[301,320],x_aunt:[268,320],x_back:[219,320],x_baker:[320,319],x_bakery:[320,303],x_balcony:[320,307],x_ball:[276,279],x_bank:[320,296],x_basbousa:[320,277],x_bathroom:[320,300],x_bathtub:[320,283],x_beach:[320,302],x_bead_blue_cube:[316,320],x_bead_green_heart:[320,278],x_bead_orange_drop:[250,320],x_bead_purple_ring:[320,320],x_bead_red_ball:[320,320],x_bead_yellow_star:[320,303],x_beaver:[317,320],x_bedroom:[320,241],x_beetle:[299,320],x_belt:[315,187],x_bin:[277,313],x_blanket:[320,270],x_boots:[296,239],x_bottle:[149,320],x_bowl:[320,220],x_burger:[315,304],x_butter:[320,221],x_cabbage:[320,287],x_cake:[320,289],x_calf:[293,320],x_captain:[234,320],x_carpet:[320,290],x_caterpillar:[320,276],x_cauliflower:[320,289],x_cave:[320,268],x_cereal:[320,267],x_chair:[243,320],x_cheek:[267,320],x_chimpanzee:[269,320],x_chin:[272,320],x_chocolate:[320,260],x_church:[312,320],x_cinema:[320,281],x_coat:[320,308],x_comb:[298,320],x_computer:[320,297],x_cone:[272,279],x_cousin:[278,320],x_cube:[280,287],x_cup:[317,245],x_cupboard:[279,317],x_curtain:[320,313],x_cylinder:[238,285],x_deer:[205,320],x_dentist:[296,320],x_desert:[320,237],x_diamond:[267,282],x_door:[234,320],x_drawer:[288,283],x_elbow:[320,314],x_excited:[320,320],x_eyebrow:[291,320],x_falafel:[320,290],x_farm:[320,313],x_fava_beans:[320,276],x_feteer:[320,256],x_fisherman:[302,320],x_forest:[320,303],x_fork:[256,320],x_french_fries:[272,310],x_fridge:[269,320],x_garage:[320,284],x_garden:[320,309],x_gardener:[317,320],x_grapefruit:[320,287],x_grasshopper:[317,284],x_green_beans:[320,241],x_guava:[320,299],x_hall:[300,309],x_hamster:[256,320],x_hanger:[320,216],x_happy:[267,320],x_hat:[312,215],x_hedgehog:[287,278],x_hexagon:[291,260],x_hill:[320,224],x_hippo:[299,312],x_hummingbird:[320,278],x_hummus:[320,265],x_hungry:[320,319],x_iron:[320,222],x_island:[320,297],x_jam:[314,316],x_kangaroo:[238,320],x_key:[298,287],x_kitchen:[320,278],x_kitten:[261,320],x_knife:[266,311],x_koala:[305,320],x_koshari:[320,277],x_kunafa:[320,302],x_lake:[320,274],x_lamb:[271,320],x_lamp:[254,320],x_leg:[251,320],x_lemonade:[317,318],x_lentil_soup:[320,259],x_leopard:[284,320],x_library:[320,306],x_lift:[292,318],x_lime:[320,307],x_llama:[234,320],x_lobster:[320,299],x_mango_juice:[320,319],x_market:[320,282],x_mechanic:[276,320],x_meerkat:[210,320],x_mirror:[243,320],x_molokhia:[320,274],x_mosque:[320,311],x_mosquito:[320,288],x_museum:[310,310],x_neck:[247,320],x_neighbour:[320,296],x_nest:[303,241],x_nuts:[320,294],x_okra:[320,280],x_om_ali:[320,269],x_otter:[320,306],x_oval:[298,215],x_oven:[279,295],x_pancake:[320,236],x_park:[320,293],x_peanuts:[319,303],x_pelican:[285,320],x_pentagon:[287,274],x_pharmacy:[283,305],x_phone:[194,320],x_pillow:[320,260],x_plate:[320,207],x_playground:[320,275],x_polar_bear:[262,320],x_police_station:[290,320],x_popcorn:[267,320],x_post_office:[312,310],x_pot:[320,249],x_proud:[299,320],x_puppy:[281,320],x_pyramid:[302,285],x_raccoon:[305,320],x_radish:[311,320],x_rectangle:[290,187],x_restaurant:[312,312],x_rhino:[318,305],x_rice_pudding:[320,264],x_ring:[280,283],x_river:[320,293],x_roof:[320,234],x_routine_bath:[352,356],x_routine_breakfast:[320,351],x_routine_dinner:[316,354],x_routine_lunch:[328,346],x_routine_play:[350,355],x_routine_school:[357,353],x_routine_sleep:[355,355],x_routine_teeth:[340,354],x_routine_wake_up:[342,354],x_routine_wash_face:[343,334],x_sad:[271,320],x_salad:[320,283],x_salt:[231,320],x_sand:[305,249],x_sandals:[320,250],x_sandwich:[320,241],x_sausage:[320,245],x_scared:[270,320],x_school_gate:[320,297],x_scientist:[294,320],x_sea:[320,286],x_shelf:[313,310],x_shop:[320,277],x_shopkeeper:[320,314],x_shorts:[318,252],x_shoulder:[282,320],x_shower:[298,320],x_shrimp:[305,320],x_shy:[241,320],x_skirt:[320,220],x_sky:[320,296],x_sleepy:[320,300],x_sloth:[314,320],x_soap:[296,252],x_sofa:[320,221],x_spaghetti:[320,267],x_spinach:[320,302],x_spoon:[292,307],x_squid:[281,320],x_squirrel:[285,320],x_stadium:[312,276],x_stairs:[304,300],x_star:[305,289],x_stork:[264,320],x_street:[320,290],x_stuffed_vine_leaves:[320,292],x_sugar:[320,308],x_supermarket:[312,305],x_surprised:[310,320],x_sweater:[320,240],x_swimming_pool:[320,290],x_tahini:[294,320],x_tailor:[320,319],x_tangerine:[320,290],x_tea:[320,262],x_television:[295,320],x_thirsty:[320,319],x_tired:[278,320],x_toilet:[302,320],x_tongue:[282,320],x_toy_blocks:[320,315],x_traffic_light:[201,320],x_train_station:[320,307],x_tuna:[290,318],x_twins:[320,278],x_t_shirt:[320,285],x_vacuum_cleaner:[320,297],x_van:[312,269],x_vet:[320,319],x_volcano:[320,293],x_waiter:[315,320],x_walrus:[320,309],x_washing_machine:[269,305],x_wasp:[319,293],x_waterfall:[320,291],x_where_inside:[400,400],x_where_next_to_box:[395,400],x_where_next_to_table:[400,395],x_where_on:[400,400],x_where_under:[400,395],x_window:[320,292],x_wolf:[279,320],x_woodpecker:[284,320],x_xylophone:[312,265],x_yogurt:[304,261],x_yo_yo:[315,320],x_zoo:[320,296],x_zucchini:[320,295]};var f_={boy:{height:3.6,total:440,parts:{head:"boy_head",body:"boy_body",legL:"boy_leg_l",legR:"boy_leg_r",armDown:"boy_arm_down",armWave:"boy_arm_wave",armBend:"boy_arm_bend",armUp:"boy_arm_up",armPoint:"boy_arm_point2",eyeOpen:"boy_eye_open",eyeShut:"boy_eye_closed",mSmile:"boy_mouth_smile",mOpen:"boy_mouth_open",mLaugh:"boy_mouth_laugh",mO:"boy_mouth_o",mOh:"boy_mouth_oh",mFlat:"boy_mouth_flat"},hipL:[-20,172],hipR:[24,172],legLAnchor:[32,6],legRAnchor:[28,6],body:{at:[0,166],anchor:[59,128]},head:{at:[0,290],anchor:[68,146],eyeL:[-17,64],eyeR:[23,64],mouth:[4,26],eyeK:.62,mouthK:.65},shoulderL:[-46,264],shoulderR:[46,264],arm:{down:[12,10],wave:[14,26],bend:[12,10],up:[12,62],point:[10,16]}}};f_.girl={height:3.5,total:420,parts:{head:"girl_head",body:"girl_body",legL:"girl_leg_l",legR:"girl_leg_r",armDown:"girl_arm_down",armWave:"girl_arm_wave",armBend:"girl_arm_bend",armUp:"girl_arm_wave",armPoint:"girl_arm_point",eyeOpen:"girl_eye_open",eyeShut:"girl_eye_closed",mSmile:"girl_mouth_smile",mOpen:"girl_mouth_open",mLaugh:"girl_mouth_laugh",mO:"girl_mouth_o",mOh:"girl_mouth_o",mFlat:"girl_mouth_flat"},hipL:[-16,150],hipR:[20,150],legLAnchor:[30,6],legRAnchor:[28,6],body:{at:[0,95],anchor:[65,175]},head:{at:[0,267],anchor:[74,155],eyeL:[24,98],eyeR:[72,98],mouth:[47,36],eyeK:.55,mouthK:.6,eyeAnchor:[30,26],mouthAnchor:[33,15]},shoulderL:[-51,234],shoulderR:[51,234],arm:{down:[12,12],wave:[14,28],bend:[12,12],up:[14,28],point:[10,18]}};var ad=[{id:"monkey",thing:"j_monkey",letter:"qaaf",word:"\u0642\u0631\u062F",wd:"\u0642\u0650\u0631\u0652\u062F",the:"\u0627\u0644\u0642\u0631\u062F",thed:"\u0627\u0644\u0642\u0650\u0631\u0652\u062F",age:3},{id:"lion",thing:"j_lion",letter:"alef",word:"\u0623\u0633\u062F",wd:"\u0623\u064E\u0633\u064E\u062F",the:"\u0627\u0644\u0623\u0633\u062F",thed:"\u0627\u0644\u0623\u064E\u0633\u064E\u062F",age:3},{id:"elephant",thing:"j_elephant",letter:"faa",word:"\u0641\u064A\u0644",wd:"\u0641\u0650\u064A\u0644",the:"\u0627\u0644\u0641\u064A\u0644",thed:"\u0627\u0644\u0641\u0650\u064A\u0644",age:3},{id:"zebra",thing:"j_zebra",letter:"haa",word:"\u062D\u0645\u0627\u0631 \u0648\u062D\u0634\u064A",wd:"\u062D\u0650\u0645\u064E\u0627\u0631 \u0648\u064E\u062D\u0652\u0634\u0650\u064A",the:"\u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631 \u0627\u0644\u0648\u064E\u062D\u0652\u0634\u0650\u064A",age:5},{id:"parrot",thing:"j_parrot",letter:"baa",word:"\u0628\u0628\u063A\u0627\u0621",wd:"\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0628\u064E\u0651\u063A\u064E\u0627\u0621",age:4},{id:"tiger",thing:"j_tiger",letter:"noon",word:"\u0646\u0645\u0631",wd:"\u0646\u0650\u0645\u0650\u0631",the:"\u0627\u0644\u0646\u0645\u0631",thed:"\u0627\u0644\u0646\u0650\u0651\u0645\u0650\u0631",age:4},{id:"toucan",thing:"j_toucan",letter:"tah",word:"\u0637\u0648\u0642\u0627\u0646",wd:"\u0637\u064F\u0648\u0642\u064E\u0627\u0646",the:"\u0627\u0644\u0637\u0648\u0642\u0627\u0646",thed:"\u0627\u0644\u0637\u064F\u0651\u0648\u0642\u064E\u0627\u0646",age:6},{id:"gorilla",thing:"j_gorilla",letter:"ghayn",word:"\u063A\u0648\u0631\u064A\u0644\u0627",wd:"\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",the:"\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627",thed:"\u0627\u0644\u063A\u064F\u0648\u0631\u0650\u064A\u0644\u064E\u0651\u0627",age:5},{id:"chameleon",thing:"j_chameleon",letter:"haa",word:"\u062D\u0631\u0628\u0627\u0621",wd:"\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",the:"\u0627\u0644\u062D\u0631\u0628\u0627\u0621",thed:"\u0627\u0644\u062D\u0650\u0631\u0652\u0628\u064E\u0627\u0621",age:6},{id:"snake",thing:"j_snake",letter:"thaa",word:"\u062B\u0639\u0628\u0627\u0646",wd:"\u062B\u064F\u0639\u0652\u0628\u064E\u0627\u0646",the:"\u0627\u0644\u062B\u0639\u0628\u0627\u0646",thed:"\u0627\u0644\u062B\u064F\u0651\u0639\u0652\u0628\u064E\u0627\u0646",age:5},{id:"cow",thing:"f_cow",letter:"baa",word:"\u0628\u0642\u0631\u0629",wd:"\u0628\u064E\u0642\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0628\u0642\u0631\u0629",thed:"\u0627\u0644\u0628\u064E\u0642\u064E\u0631\u064E\u0629",age:3},{id:"pig",thing:"f_pig",letter:"khaa",word:"\u062E\u0646\u0632\u064A\u0631",wd:"\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",the:"\u0627\u0644\u062E\u0646\u0632\u064A\u0631",thed:"\u0627\u0644\u062E\u0650\u0646\u0652\u0632\u0650\u064A\u0631",age:4},{id:"goat",thing:"f_goat",letter:"meem",word:"\u0645\u0627\u0639\u0632",wd:"\u0645\u064E\u0627\u0639\u0650\u0632",the:"\u0627\u0644\u0645\u0627\u0639\u0632",thed:"\u0627\u0644\u0645\u064E\u0627\u0639\u0650\u0632",age:5},{id:"donkey",thing:"f_donkey",letter:"haa",word:"\u062D\u0645\u0627\u0631",wd:"\u062D\u0650\u0645\u064E\u0627\u0631",the:"\u0627\u0644\u062D\u0645\u0627\u0631",thed:"\u0627\u0644\u062D\u0650\u0645\u064E\u0627\u0631",age:4},{id:"rooster",thing:"f_rooster",letter:"dal",word:"\u062F\u064A\u0643",wd:"\u062F\u0650\u064A\u0643",the:"\u0627\u0644\u062F\u064A\u0643",thed:"\u0627\u0644\u062F\u0650\u0651\u064A\u0643",age:3},{id:"octopus",thing:"u_octopus",letter:"alef",word:"\u0623\u062E\u0637\u0628\u0648\u0637",wd:"\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",the:"\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u0637\u064F\u0628\u064F\u0648\u0637",age:5},{id:"turtle",thing:"u_turtle",letter:"seen",word:"\u0633\u0644\u062D\u0641\u0627\u0629",wd:"\u0633\u064F\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",the:"\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629",thed:"\u0627\u0644\u0633\u064F\u0651\u0644\u064E\u062D\u0652\u0641\u064E\u0627\u0629",age:4},{id:"dolphin",thing:"u_dolphin",letter:"dal",word:"\u062F\u0648\u0644\u0641\u064A\u0646",wd:"\u062F\u064F\u0648\u0644\u0652\u0641\u0650\u064A\u0646",the:"\u0627\u0644\u062F\u0648\u0644\u0641\u064A\u0646",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u0652\u0641\u0650\u064A\u0646",age:5},{id:"whale",thing:"u_whale",letter:"haa",word:"\u062D\u0648\u062A",wd:"\u062D\u064F\u0648\u062A",the:"\u0627\u0644\u062D\u0648\u062A",thed:"\u0627\u0644\u062D\u064F\u0648\u062A",age:4},{id:"crab",thing:"u_crab",letter:"seen",word:"\u0633\u0631\u0637\u0627\u0646",wd:"\u0633\u064E\u0631\u064E\u0637\u064E\u0627\u0646",the:"\u0627\u0644\u0633\u0631\u0637\u0627\u0646",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u064E\u0637\u064E\u0627\u0646",age:5},{id:"starfish",thing:"u_star",letter:"noon",word:"\u0646\u062C\u0645\u0629 \u0628\u062D\u0631",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629 \u0628\u064E\u062D\u0652\u0631",the:"\u0646\u062C\u0645\u0629 \u0627\u0644\u0628\u062D\u0631",thed:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629\u0652 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:5},{id:"jellyfish",thing:"u_jelly",letter:"qaaf",word:"\u0642\u0646\u062F\u064A\u0644 \u0628\u062D\u0631",wd:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0628\u064E\u062D\u0652\u0631",the:"\u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631",thed:"\u0642\u0650\u0646\u0652\u062F\u0650\u064A\u0644 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"seahorse",thing:"u_seahorse",letter:"haa",word:"\u062D\u0635\u0627\u0646 \u0628\u062D\u0631",wd:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0628\u064E\u062D\u0652\u0631",the:"\u062D\u0635\u0627\u0646 \u0627\u0644\u0628\u062D\u0631",thed:"\u062D\u0650\u0635\u064E\u0627\u0646 \u0627\u0644\u0628\u064E\u062D\u0652\u0631",age:6},{id:"penguin",thing:"w_penguin",letter:"baa",word:"\u0628\u0637\u0631\u064A\u0642",wd:"\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",the:"\u0627\u0644\u0628\u0637\u0631\u064A\u0642",thed:"\u0627\u0644\u0628\u0650\u0637\u0652\u0631\u0650\u064A\u0642",age:4},{id:"bear",thing:"w_bear",letter:"dal",word:"\u062F\u0628",wd:"\u062F\u064F\u0628\u0651",the:"\u0627\u0644\u062F\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0628\u0651",age:3},{id:"owl",thing:"w_owl",letter:"baa",word:"\u0628\u0648\u0645\u0629",wd:"\u0628\u064F\u0648\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u0648\u0645\u0629",thed:"\u0627\u0644\u0628\u064F\u0648\u0645\u064E\u0629",age:4},{id:"reindeer",thing:"w_reindeer",letter:"raa",word:"\u0631\u0646\u0629",wd:"\u0631\u064E\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0631\u0646\u0629",thed:"\u0627\u0644\u0631\u064E\u0651\u0646\u064E\u0651\u0629",age:6},{id:"seal",thing:"w_seal",letter:"faa",word:"\u0641\u0642\u0645\u0629",wd:"\u0641\u064F\u0642\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0641\u0642\u0645\u0629",thed:"\u0627\u0644\u0641\u064F\u0642\u0652\u0645\u064E\u0629",age:5},{id:"snowman",thing:"w_snowman",letter:"raa",word:"\u0631\u062C\u0644 \u062B\u0644\u062C",wd:"\u0631\u064E\u062C\u064F\u0644 \u062B\u064E\u0644\u0652\u062C",the:"\u0631\u062C\u0644 \u0627\u0644\u062B\u0644\u062C",thed:"\u0631\u064E\u062C\u064F\u0644 \u0627\u0644\u062B\u064E\u0651\u0644\u0652\u062C",age:5},{id:"pyramid",thing:"d_pyramid",letter:"haa2",word:"\u0647\u0631\u0645",wd:"\u0647\u064E\u0631\u064E\u0645",the:"\u0627\u0644\u0647\u0631\u0645",thed:"\u0627\u0644\u0647\u064E\u0631\u064E\u0645",age:4},{id:"tent",thing:"d_tent",letter:"khaa",word:"\u062E\u064A\u0645\u0629",wd:"\u062E\u064E\u064A\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062E\u064A\u0645\u0629",thed:"\u0627\u0644\u062E\u064E\u064A\u0652\u0645\u064E\u0629",age:4},{id:"palm",thing:"d_palm",letter:"noon",word:"\u0646\u062E\u0644\u0629",wd:"\u0646\u064E\u062E\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u062E\u0644\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062E\u0652\u0644\u064E\u0629",age:4},{id:"cactus",thing:"d_cactus",letter:"sad",word:"\u0635\u0628\u0627\u0631",wd:"\u0635\u064E\u0628\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0635\u0628\u0627\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0628\u064E\u0651\u0627\u0631",age:6},{id:"scorpion",thing:"d_scorpion",letter:"ayn",word:"\u0639\u0642\u0631\u0628",wd:"\u0639\u064E\u0642\u0652\u0631\u064E\u0628",the:"\u0627\u0644\u0639\u0642\u0631\u0628",thed:"\u0627\u0644\u0639\u064E\u0642\u0652\u0631\u064E\u0628",age:5},{id:"lizard",thing:"d_lizard",letter:"seen",word:"\u0633\u062D\u0644\u064A\u0629",wd:"\u0633\u0650\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u062D\u0644\u064A\u0629",thed:"\u0627\u0644\u0633\u0650\u0651\u062D\u0652\u0644\u0650\u064A\u064E\u0651\u0629",age:6},{id:"hawk",thing:"d_hawk",letter:"sad",word:"\u0635\u0642\u0631",wd:"\u0635\u064E\u0642\u0652\u0631",the:"\u0627\u0644\u0635\u0642\u0631",thed:"\u0627\u0644\u0635\u064E\u0651\u0642\u0652\u0631",age:5},{id:"hotballoon",thing:"d_balloon",letter:"meem",word:"\u0645\u0646\u0637\u0627\u062F",wd:"\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",the:"\u0627\u0644\u0645\u0646\u0637\u0627\u062F",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0637\u064E\u0627\u062F",age:5},{id:"jeep",thing:"d_jeep",letter:"jeem",word:"\u062C\u064A\u0628",wd:"\u062C\u0650\u064A\u0628",the:"\u0627\u0644\u062C\u064A\u0628",thed:"\u0627\u0644\u062C\u0650\u064A\u0628",age:4},{id:"umbrella",thing:"b_umbrella",letter:"meem",word:"\u0645\u0638\u0644\u0629",wd:"\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u0638\u0644\u0629",thed:"\u0627\u0644\u0645\u0650\u0638\u064E\u0644\u064E\u0651\u0629",age:4},{id:"sandcastle",thing:"b_castle",letter:"qaaf",word:"\u0642\u0644\u0639\u0629",wd:"\u0642\u064E\u0644\u0652\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0644\u0639\u0629",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0639\u064E\u0629",age:4},{id:"shell",thing:"b_shell",letter:"sad",word:"\u0635\u062F\u0641\u0629",wd:"\u0635\u064E\u062F\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0635\u062F\u0641\u0629",thed:"\u0627\u0644\u0635\u064E\u0651\u062F\u064E\u0641\u064E\u0629",age:4},{id:"lighthouse",thing:"b_lighthouse",letter:"faa",word:"\u0641\u0646\u0627\u0631",wd:"\u0641\u064E\u0646\u064E\u0627\u0631",the:"\u0627\u0644\u0641\u0646\u0627\u0631",thed:"\u0627\u0644\u0641\u064E\u0646\u064E\u0627\u0631",age:6},{id:"bed",thing:"h_bed",letter:"seen",word:"\u0633\u0631\u064A\u0631",wd:"\u0633\u064E\u0631\u0650\u064A\u0631",the:"\u0627\u0644\u0633\u0631\u064A\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0631\u0650\u064A\u0631",age:3},{id:"toothbrush",thing:"h_toothbrush",letter:"faa",word:"\u0641\u0631\u0634\u0627\u0629",wd:"\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",the:"\u0627\u0644\u0641\u0631\u0634\u0627\u0629",thed:"\u0627\u0644\u0641\u064F\u0631\u0652\u0634\u064E\u0627\u0629",age:5},{id:"sink",thing:"h_sink",letter:"haa",word:"\u062D\u0648\u0636",wd:"\u062D\u064E\u0648\u0652\u0636",the:"\u0627\u0644\u062D\u0648\u0636",thed:"\u0627\u0644\u062D\u064E\u0648\u0652\u0636",age:5},{id:"towel",thing:"h_towel",letter:"meem",word:"\u0645\u0646\u0634\u0641\u0629",wd:"\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",the:"\u0627\u0644\u0645\u0646\u0634\u0641\u0629",thed:"\u0627\u0644\u0645\u0650\u0646\u0652\u0634\u064E\u0641\u064E\u0629",age:5},{id:"backpack",thing:"h_backpack",letter:"sheen",word:"\u0634\u0646\u0637\u0629",wd:"\u0634\u064E\u0646\u0652\u0637\u064E\u0629",the:"\u0627\u0644\u0634\u0646\u0637\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u0646\u0652\u0637\u064E\u0629",age:3},{id:"shoes",thing:"h_shoes",letter:"jeem",word:"\u062C\u0632\u0645\u0629",wd:"\u062C\u064E\u0632\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u062C\u0632\u0645\u0629",thed:"\u0627\u0644\u062C\u064E\u0632\u0652\u0645\u064E\u0629",age:3},{id:"wardrobe",thing:"h_wardrobe",letter:"dal",word:"\u062F\u0648\u0644\u0627\u0628",wd:"\u062F\u064F\u0648\u0644\u064E\u0627\u0628",the:"\u0627\u0644\u062F\u0648\u0644\u0627\u0628",thed:"\u0627\u0644\u062F\u064F\u0651\u0648\u0644\u064E\u0627\u0628",age:5},{id:"table",thing:"h_table",letter:"taa",word:"\u062A\u0631\u0627\u0628\u064A\u0632\u0629",wd:"\u062A\u064E\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",the:"\u0627\u0644\u062A\u0631\u0627\u0628\u064A\u0632\u0629",thed:"\u0627\u0644\u062A\u064E\u0651\u0631\u064E\u0627\u0628\u0650\u064A\u0632\u064E\u0629",age:5},{id:"broom",thing:"h_broom",letter:"meem",word:"\u0645\u0643\u0646\u0633\u0629",wd:"\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u0643\u0646\u0633\u0629",thed:"\u0627\u0644\u0645\u0650\u0643\u0652\u0646\u0650\u0633\u064E\u0629",age:5},{id:"clock",thing:"h_clock",letter:"seen",word:"\u0633\u0627\u0639\u0629",wd:"\u0633\u064E\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u0639\u064E\u0629",age:4},{id:"swing",thing:"h_swing",letter:"alef",word:"\u0623\u0631\u062C\u0648\u062D\u0629",wd:"\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",the:"\u0627\u0644\u0623\u0631\u062C\u0648\u062D\u0629",thed:"\u0627\u0644\u0623\u064F\u0631\u0652\u062C\u064F\u0648\u062D\u064E\u0629",age:4},{id:"bike",thing:"h_bike",letter:"ayn",word:"\u0639\u062C\u0644\u0629",wd:"\u0639\u064E\u062C\u064E\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u062C\u0644\u0629",thed:"\u0627\u0644\u0639\u064E\u062C\u064E\u0644\u064E\u0629",age:4},{id:"tree",thing:"h_tree",letter:"sheen",word:"\u0634\u062C\u0631\u0629",wd:"\u0634\u064E\u062C\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0634\u062C\u0631\u0629",thed:"\u0627\u0644\u0634\u064E\u0651\u062C\u064E\u0631\u064E\u0629",age:3},{id:"school",thing:"c_school",letter:"meem",word:"\u0645\u062F\u0631\u0633\u0629",wd:"\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",the:"\u0627\u0644\u0645\u062F\u0631\u0633\u0629",thed:"\u0627\u0644\u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629",age:4},{id:"hospital",thing:"c_hospital",letter:"meem",word:"\u0645\u0633\u062A\u0634\u0641\u0649",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",the:"\u0627\u0644\u0645\u0633\u062A\u0634\u0641\u0649",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0634\u0652\u0641\u064E\u0649",age:5},{id:"trafficlight",thing:"c_light",letter:"alef",word:"\u0625\u0634\u0627\u0631\u0629",wd:"\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0625\u0634\u0627\u0631\u0629",thed:"\u0627\u0644\u0625\u0650\u0634\u064E\u0627\u0631\u064E\u0629",age:5},{id:"fountain",thing:"c_fountain",letter:"noon",word:"\u0646\u0627\u0641\u0648\u0631\u0629",wd:"\u0646\u064E\u0627\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u0627\u0641\u064F\u0648\u0631\u064E\u0629",age:5},{id:"building",thing:"c_skyscraper",letter:"ayn",word:"\u0639\u0645\u0627\u0631\u0629",wd:"\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0645\u0627\u0631\u0629",thed:"\u0627\u0644\u0639\u0650\u0645\u064E\u0627\u0631\u064E\u0629",age:4},{id:"king",thing:"k_king",letter:"meem",word:"\u0645\u0644\u0643",wd:"\u0645\u064E\u0644\u0650\u0643",the:"\u0627\u0644\u0645\u0644\u0643",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643",age:4},{id:"queen",thing:"k_queen",letter:"meem",word:"\u0645\u0644\u0643\u0629",wd:"\u0645\u064E\u0644\u0650\u0643\u064E\u0629",the:"\u0627\u0644\u0645\u0644\u0643\u0629",thed:"\u0627\u0644\u0645\u064E\u0644\u0650\u0643\u064E\u0629",age:5},{id:"dragon",thing:"k_dragon",letter:"taa",word:"\u062A\u0646\u064A\u0646",wd:"\u062A\u0650\u0646\u0650\u0651\u064A\u0646",the:"\u0627\u0644\u062A\u0646\u064A\u0646",thed:"\u0627\u0644\u062A\u0650\u0651\u0646\u0650\u0651\u064A\u0646",age:4},{id:"knight",thing:"k_knight",letter:"faa",word:"\u0641\u0627\u0631\u0633",wd:"\u0641\u064E\u0627\u0631\u0650\u0633",the:"\u0627\u0644\u0641\u0627\u0631\u0633",thed:"\u0627\u0644\u0641\u064E\u0627\u0631\u0650\u0633",age:4},{id:"wizard",thing:"k_wizard",letter:"seen",word:"\u0633\u0627\u062D\u0631",wd:"\u0633\u064E\u0627\u062D\u0650\u0631",the:"\u0627\u0644\u0633\u0627\u062D\u0631",thed:"\u0627\u0644\u0633\u064E\u0651\u0627\u062D\u0650\u0631",age:5},{id:"treasure",thing:"k_chest",letter:"kaaf",word:"\u0643\u0646\u0632",wd:"\u0643\u064E\u0646\u0652\u0632",the:"\u0627\u0644\u0643\u0646\u0632",thed:"\u0627\u0644\u0643\u064E\u0646\u0652\u0632",age:4},{id:"alien",thing:"s_alien",letter:"faa",word:"\u0641\u0636\u0627\u0626\u064A",wd:"\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0641\u0636\u0627\u0626\u064A",thed:"\u0627\u0644\u0641\u064E\u0636\u064E\u0627\u0626\u0650\u064A",age:5},{id:"robot",thing:"s_robot",letter:"raa",word:"\u0631\u0648\u0628\u0648\u062A",wd:"\u0631\u064F\u0648\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0631\u0648\u0628\u0648\u062A",thed:"\u0627\u0644\u0631\u064F\u0651\u0648\u0628\u064F\u0648\u062A",age:4},{id:"moon",thing:"s_moon",letter:"qaaf",word:"\u0642\u0645\u0631",wd:"\u0642\u064E\u0645\u064E\u0631",the:"\u0627\u0644\u0642\u0645\u0631",thed:"\u0627\u0644\u0642\u064E\u0645\u064E\u0631",age:3},{id:"star",thing:"s_star",letter:"noon",word:"\u0646\u062C\u0645\u0629",wd:"\u0646\u064E\u062C\u0652\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u062C\u0645\u0629",thed:"\u0627\u0644\u0646\u064E\u0651\u062C\u0652\u0645\u064E\u0629",age:3},{id:"planet",thing:"s_ringplanet",letter:"kaaf",word:"\u0643\u0648\u0643\u0628",wd:"\u0643\u064E\u0648\u0652\u0643\u064E\u0628",the:"\u0627\u0644\u0643\u0648\u0643\u0628",thed:"\u0627\u0644\u0643\u064E\u0648\u0652\u0643\u064E\u0628",age:5},{id:"balloon",thing:"r_balloons",letter:"baa",word:"\u0628\u0627\u0644\u0648\u0646",wd:"\u0628\u064E\u0627\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0627\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0644\u064F\u0648\u0646",age:3},{id:"cloud",thing:"r_cloud",letter:"seen",word:"\u0633\u062D\u0627\u0628\u0629",wd:"\u0633\u064E\u062D\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0633\u062D\u0627\u0628\u0629",thed:"\u0627\u0644\u0633\u064E\u0651\u062D\u064E\u0627\u0628\u064E\u0629",age:4},{id:"sweet",thing:"r_candy",letter:"haa",word:"\u062D\u0644\u0648\u0649",wd:"\u062D\u064E\u0644\u0652\u0648\u064E\u0649",the:"\u0627\u0644\u062D\u0644\u0648\u0649",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0648\u064E\u0649",age:4},{id:"cake",thing:"r_cupcake",letter:"kaaf",word:"\u0643\u0639\u0643\u0629",wd:"\u0643\u064E\u0639\u0652\u0643\u064E\u0629",the:"\u0627\u0644\u0643\u0639\u0643\u0629",thed:"\u0627\u0644\u0643\u064E\u0639\u0652\u0643\u064E\u0629",age:4},{id:"y_eye",thing:"y_eye",letter:"ayn",word:"\u0639\u064A\u0646",wd:"\u0639\u064E\u064A\u0652\u0646",the:"\u0627\u0644\u0639\u064A\u0646",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0646",age:3},{id:"y_ear",thing:"y_ear",letter:"waaw",word:"\u0648\u062F\u0646",wd:"\u0648\u0650\u062F\u0652\u0646",the:"\u0627\u0644\u0648\u062F\u0646",thed:"\u0627\u0644\u0648\u0650\u062F\u0652\u0646",age:3},{id:"y_nose",thing:"y_nose",letter:"alef",word:"\u0623\u0646\u0641",wd:"\u0623\u064E\u0646\u0652\u0641",the:"\u0627\u0644\u0623\u0646\u0641",thed:"\u0627\u0644\u0623\u064E\u0646\u0652\u0641",age:3},{id:"y_mouth",thing:"y_mouth",letter:"faa",word:"\u0641\u0645",wd:"\u0641\u064E\u0645",the:"\u0627\u0644\u0641\u0645",thed:"\u0627\u0644\u0641\u064E\u0645",age:3},{id:"y_hand",thing:"y_hand",letter:"alef",word:"\u0625\u064A\u062F",wd:"\u0625\u0650\u064A\u062F",the:"\u0627\u0644\u0625\u064A\u062F",thed:"\u0627\u0644\u0625\u0650\u064A\u062F",age:3},{id:"y_foot",thing:"y_foot",letter:"raa",word:"\u0631\u062C\u0644",wd:"\u0631\u0650\u062C\u0652\u0644",the:"\u0627\u0644\u0631\u062C\u0644",thed:"\u0627\u0644\u0631\u0651\u0650\u062C\u0652\u0644",age:3},{id:"y_hair",thing:"y_hair",letter:"sheen",word:"\u0634\u0639\u0631",wd:"\u0634\u064E\u0639\u0652\u0631",the:"\u0627\u0644\u0634\u0639\u0631",thed:"\u0627\u0644\u0634\u0651\u064E\u0639\u0652\u0631",age:4},{id:"y_tooth",thing:"y_tooth",letter:"seen",word:"\u0633\u0646\u0629",wd:"\u0633\u0650\u0646\u064E\u0651\u0629",the:"\u0627\u0644\u0633\u0646\u0629",thed:"\u0627\u0644\u0633\u0651\u0650\u0646\u064E\u0651\u0629",age:4},{id:"y_head",thing:"y_head",letter:"raa",word:"\u0631\u0627\u0633",wd:"\u0631\u064E\u0627\u0633",the:"\u0627\u0644\u0631\u0627\u0633",thed:"\u0627\u0644\u0631\u0651\u064E\u0627\u0633",age:3},{id:"y_finger",thing:"y_finger",letter:"sad",word:"\u0635\u0628\u0627\u0639",wd:"\u0635\u064F\u0628\u064E\u0651\u0627\u0639",the:"\u0627\u0644\u0635\u0628\u0627\u0639",thed:"\u0627\u0644\u0635\u0651\u064F\u0628\u064E\u0651\u0627\u0639",age:4},{id:"y_knee",thing:"y_knee",letter:"raa",word:"\u0631\u0643\u0628\u0629",wd:"\u0631\u064F\u0643\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0631\u0643\u0628\u0629",thed:"\u0627\u0644\u0631\u0651\u064F\u0643\u0652\u0628\u064E\u0629",age:5},{id:"y_belly",thing:"y_belly",letter:"baa",word:"\u0628\u0637\u0646",wd:"\u0628\u064E\u0637\u0652\u0646",the:"\u0627\u0644\u0628\u0637\u0646",thed:"\u0627\u0644\u0628\u064E\u0637\u0652\u0646",age:5},{id:"l_shirt",thing:"l_shirt",letter:"qaaf",word:"\u0642\u0645\u064A\u0635",wd:"\u0642\u064E\u0645\u0650\u064A\u0635",the:"\u0627\u0644\u0642\u0645\u064A\u0635",thed:"\u0627\u0644\u0642\u064E\u0645\u0650\u064A\u0635",age:4},{id:"l_trousers",thing:"l_trousers",letter:"baa",word:"\u0628\u0646\u0637\u0644\u0648\u0646",wd:"\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",the:"\u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646",thed:"\u0627\u0644\u0628\u064E\u0646\u0652\u0637\u064E\u0644\u064F\u0648\u0646",age:4},{id:"l_dress",thing:"l_dress",letter:"faa",word:"\u0641\u0633\u062A\u0627\u0646",wd:"\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",the:"\u0627\u0644\u0641\u0633\u062A\u0627\u0646",thed:"\u0627\u0644\u0641\u064F\u0633\u0652\u062A\u064E\u0627\u0646",age:4},{id:"l_hat",thing:"l_hat",letter:"qaaf",word:"\u0642\u0628\u0639\u0629",wd:"\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",the:"\u0627\u0644\u0642\u0628\u0639\u0629",thed:"\u0627\u0644\u0642\u064F\u0628\u064E\u0651\u0639\u064E\u0629",age:4},{id:"l_socks",thing:"l_socks",letter:"sheen",word:"\u0634\u0631\u0627\u0628",wd:"\u0634\u064F\u0631\u064E\u0651\u0627\u0628",the:"\u0627\u0644\u0634\u0631\u0627\u0628",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u064E\u0651\u0627\u0628",age:3},{id:"l_jacket",thing:"l_jacket",letter:"jeem",word:"\u062C\u0627\u0643\u062A",wd:"\u062C\u064E\u0627\u0643\u0650\u062A",the:"\u0627\u0644\u062C\u0627\u0643\u062A",thed:"\u0627\u0644\u062C\u064E\u0627\u0643\u0650\u062A",age:5},{id:"l_scarf",thing:"l_scarf",letter:"waaw",word:"\u0648\u0634\u0627\u062D",wd:"\u0648\u0650\u0634\u064E\u0627\u062D",the:"\u0627\u0644\u0648\u0634\u0627\u062D",thed:"\u0627\u0644\u0648\u0650\u0634\u064E\u0627\u062D",age:6},{id:"l_gloves",thing:"l_gloves",letter:"qaaf",word:"\u0642\u0641\u0627\u0632",wd:"\u0642\u064F\u0641\u064E\u0651\u0627\u0632",the:"\u0627\u0644\u0642\u0641\u0627\u0632",thed:"\u0627\u0644\u0642\u064F\u0641\u064E\u0651\u0627\u0632",age:6},{id:"l_glasses",thing:"l_glasses",letter:"noon",word:"\u0646\u0636\u0627\u0631\u0629",wd:"\u0646\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",the:"\u0627\u0644\u0646\u0636\u0627\u0631\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0636\u064E\u0651\u0627\u0631\u064E\u0629",age:5},{id:"l_cap",thing:"l_cap",letter:"kaaf",word:"\u0643\u0627\u0628",wd:"\u0643\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u0627\u0628",thed:"\u0627\u0644\u0643\u064E\u0627\u0628",age:4},{id:"l_pajamas",thing:"l_pajamas",letter:"baa",word:"\u0628\u064A\u062C\u0627\u0645\u0629",wd:"\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u062C\u0627\u0645\u0629",thed:"\u0627\u0644\u0628\u0650\u064A\u062C\u064E\u0627\u0645\u064E\u0629",age:4},{id:"l_raincoat",thing:"l_raincoat",letter:"meem",word:"\u0645\u0639\u0637\u0641",wd:"\u0645\u0650\u0639\u0652\u0637\u064E\u0641",the:"\u0627\u0644\u0645\u0639\u0637\u0641",thed:"\u0627\u0644\u0645\u0650\u0639\u0652\u0637\u064E\u0641",age:6},{id:"a_mama",thing:"a_mama",letter:"meem",word:"\u0645\u0627\u0645\u0627",wd:"\u0645\u064E\u0627\u0645\u064E\u0627",the:"\u0627\u0644\u0645\u0627\u0645\u0627",thed:"\u0627\u0644\u0645\u064E\u0627\u0645\u064E\u0627",age:3},{id:"a_baba",thing:"a_baba",letter:"baa",word:"\u0628\u0627\u0628\u0627",wd:"\u0628\u064E\u0627\u0628\u064E\u0627",the:"\u0627\u0644\u0628\u0627\u0628\u0627",thed:"\u0627\u0644\u0628\u064E\u0627\u0628\u064E\u0627",age:3},{id:"a_grandma",thing:"a_grandma",letter:"taa",word:"\u062A\u064A\u062A\u0629",wd:"\u062A\u0650\u064A\u062A\u064E\u0629",the:"\u0627\u0644\u062A\u064A\u062A\u0629",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u062A\u064E\u0629",age:3},{id:"a_grandpa",thing:"a_grandpa",letter:"jeem",word:"\u062C\u062F\u0648",wd:"\u062C\u064E\u062F\u064F\u0651\u0648",the:"\u0627\u0644\u062C\u062F\u0648",thed:"\u0627\u0644\u062C\u064E\u062F\u064F\u0651\u0648",age:3},{id:"a_baby",thing:"a_baby",letter:"tah",word:"\u0637\u0641\u0644",wd:"\u0637\u0650\u0641\u0652\u0644",the:"\u0627\u0644\u0637\u0641\u0644",thed:"\u0627\u0644\u0637\u0651\u0650\u0641\u0652\u0644",age:3},{id:"a_brother",thing:"a_brother",letter:"alef",word:"\u0623\u062E",wd:"\u0623\u064E\u062E",the:"\u0627\u0644\u0623\u062E",thed:"\u0627\u0644\u0623\u064E\u062E",age:4},{id:"a_sister",thing:"a_sister",letter:"alef",word:"\u0623\u062E\u062A",wd:"\u0623\u064F\u062E\u0652\u062A",the:"\u0627\u0644\u0623\u062E\u062A",thed:"\u0627\u0644\u0623\u064F\u062E\u0652\u062A",age:4},{id:"a_boy",thing:"a_boy",letter:"waaw",word:"\u0648\u0644\u062F",wd:"\u0648\u064E\u0644\u064E\u062F",the:"\u0627\u0644\u0648\u0644\u062F",thed:"\u0627\u0644\u0648\u064E\u0644\u064E\u062F",age:3},{id:"a_girl",thing:"a_girl",letter:"baa",word:"\u0628\u0646\u062A",wd:"\u0628\u0650\u0646\u0652\u062A",the:"\u0627\u0644\u0628\u0646\u062A",thed:"\u0627\u0644\u0628\u0650\u0646\u0652\u062A",age:3},{id:"a_friends",thing:"a_friends",letter:"sad",word:"\u0635\u062D\u0627\u0628",wd:"\u0635\u064F\u062D\u064E\u0627\u0628",the:"\u0627\u0644\u0635\u062D\u0627\u0628",thed:"\u0627\u0644\u0635\u0651\u064F\u062D\u064E\u0627\u0628",age:5},{id:"a_family",thing:"a_family",letter:"ayn",word:"\u0639\u064A\u0644\u0629",wd:"\u0639\u0650\u064A\u0644\u064E\u0629",the:"\u0627\u0644\u0639\u064A\u0644\u0629",thed:"\u0627\u0644\u0639\u0650\u064A\u0644\u064E\u0629",age:5},{id:"a_uncle",thing:"a_uncle",letter:"ayn",word:"\u0639\u0645\u0648",wd:"\u0639\u064E\u0645\u064F\u0651\u0648",the:"\u0627\u0644\u0639\u0645\u0648",thed:"\u0627\u0644\u0639\u064E\u0645\u064F\u0651\u0648",age:5},{id:"o_bread",thing:"o_bread",letter:"ayn",word:"\u0639\u064A\u0634",wd:"\u0639\u064E\u064A\u0652\u0634",the:"\u0627\u0644\u0639\u064A\u0634",thed:"\u0627\u0644\u0639\u064E\u064A\u0652\u0634",age:3},{id:"o_cheese",thing:"o_cheese",letter:"jeem",word:"\u062C\u0628\u0646\u0629",wd:"\u062C\u064F\u0628\u0652\u0646\u064E\u0629",the:"\u0627\u0644\u062C\u0628\u0646\u0629",thed:"\u0627\u0644\u062C\u064F\u0628\u0652\u0646\u064E\u0629",age:4},{id:"o_egg",thing:"o_egg",letter:"baa",word:"\u0628\u064A\u0636\u0629",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0629",the:"\u0627\u0644\u0628\u064A\u0636\u0629",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0629",age:3},{id:"o_milk",thing:"o_milk",letter:"laam",word:"\u0644\u0628\u0646",wd:"\u0644\u064E\u0628\u064E\u0646",the:"\u0627\u0644\u0644\u0628\u0646",thed:"\u0627\u0644\u0644\u0651\u064E\u0628\u064E\u0646",age:3},{id:"o_rice",thing:"o_rice",letter:"raa",word:"\u0631\u0632",wd:"\u0631\u064F\u0632\u0651",the:"\u0627\u0644\u0631\u0632",thed:"\u0627\u0644\u0631\u0651\u064F\u0632\u0651",age:4},{id:"o_chicken",thing:"o_chicken",letter:"faa",word:"\u0641\u0631\u0627\u062E",wd:"\u0641\u0650\u0631\u064E\u0627\u062E",the:"\u0627\u0644\u0641\u0631\u0627\u062E",thed:"\u0627\u0644\u0641\u0650\u0631\u064E\u0627\u062E",age:5},{id:"o_juice",thing:"o_juice",letter:"ayn",word:"\u0639\u0635\u064A\u0631",wd:"\u0639\u064E\u0635\u0650\u064A\u0631",the:"\u0627\u0644\u0639\u0635\u064A\u0631",thed:"\u0627\u0644\u0639\u064E\u0635\u0650\u064A\u0631",age:4},{id:"o_water",thing:"o_water",letter:"meem",word:"\u0645\u064A\u0629",wd:"\u0645\u064E\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0645\u064A\u0629",thed:"\u0627\u0644\u0645\u064E\u064A\u064E\u0651\u0629",age:3},{id:"o_cookie",thing:"o_cookie",letter:"baa",word:"\u0628\u0633\u0643\u0648\u062A",wd:"\u0628\u0650\u0633\u0652\u0643\u064F\u0648\u062A",the:"\u0627\u0644\u0628\u0633\u0643\u0648\u062A",thed:"\u0627\u0644\u0628\u0650\u0633\u0652\u0643\u064F\u0648\u062A",age:4},{id:"o_honey",thing:"o_honey",letter:"ayn",word:"\u0639\u0633\u0644",wd:"\u0639\u064E\u0633\u064E\u0644",the:"\u0627\u0644\u0639\u0633\u0644",thed:"\u0627\u0644\u0639\u064E\u0633\u064E\u0644",age:5},{id:"o_soup",thing:"o_soup",letter:"sheen",word:"\u0634\u0648\u0631\u0628\u0629",wd:"\u0634\u064F\u0648\u0631\u0652\u0628\u064E\u0629",the:"\u0627\u0644\u0634\u0648\u0631\u0628\u0629",thed:"\u0627\u0644\u0634\u0651\u064F\u0648\u0631\u0652\u0628\u064E\u0629",age:5},{id:"o_pizza",thing:"o_pizza",letter:"baa",word:"\u0628\u064A\u062A\u0632\u0627",wd:"\u0628\u0650\u064A\u062A\u0652\u0632\u064E\u0627",the:"\u0627\u0644\u0628\u064A\u062A\u0632\u0627",thed:"\u0627\u0644\u0628\u0650\u064A\u062A\u0652\u0632\u064E\u0627",age:4},{id:"q_kiwi",thing:"q_kiwi",letter:"kaaf",word:"\u0643\u064A\u0648\u064A",wd:"\u0643\u0650\u064A\u0648\u0650\u064A",the:"\u0627\u0644\u0643\u064A\u0648\u064A",thed:"\u0627\u0644\u0643\u0650\u064A\u0648\u0650\u064A",age:5},{id:"q_melon",thing:"q_melon",letter:"sheen",word:"\u0634\u0645\u0627\u0645",wd:"\u0634\u064E\u0645\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0634\u0645\u0627\u0645",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u064E\u0651\u0627\u0645",age:5},{id:"q_dates",thing:"q_dates",letter:"baa",word:"\u0628\u0644\u062D",wd:"\u0628\u064E\u0644\u064E\u062D",the:"\u0627\u0644\u0628\u0644\u062D",thed:"\u0627\u0644\u0628\u064E\u0644\u064E\u062D",age:5},{id:"q_fig",thing:"q_fig",letter:"taa",word:"\u062A\u064A\u0646",wd:"\u062A\u0650\u064A\u0646",the:"\u0627\u0644\u062A\u064A\u0646",thed:"\u0627\u0644\u062A\u0651\u0650\u064A\u0646",age:5},{id:"q_apricot",thing:"q_apricot",letter:"meem",word:"\u0645\u0634\u0645\u0634",wd:"\u0645\u0650\u0634\u0652\u0645\u0650\u0634",the:"\u0627\u0644\u0645\u0634\u0645\u0634",thed:"\u0627\u0644\u0645\u0650\u0634\u0652\u0645\u0650\u0634",age:5},{id:"q_berries",thing:"q_berries",letter:"taa",word:"\u062A\u0648\u062A",wd:"\u062A\u064F\u0648\u062A",the:"\u0627\u0644\u062A\u0648\u062A",thed:"\u0627\u0644\u062A\u0651\u064F\u0648\u062A",age:4},{id:"q_plum",thing:"q_plum",letter:"baa",word:"\u0628\u0631\u0642\u0648\u0642",wd:"\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0631\u0642\u0648\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642\u064F\u0648\u0642",age:6},{id:"q_avocado",thing:"q_avocado",letter:"alef",word:"\u0623\u0641\u0648\u0643\u0627\u062F\u0648",wd:"\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",the:"\u0627\u0644\u0623\u0641\u0648\u0643\u0627\u062F\u0648",thed:"\u0627\u0644\u0623\u064E\u0641\u064F\u0648\u0643\u064E\u0627\u062F\u064F\u0648",age:6},{id:"q_peach",thing:"q_peach",letter:"khaa",word:"\u062E\u0648\u062E",wd:"\u062E\u064F\u0648\u062E",the:"\u0627\u0644\u062E\u0648\u062E",thed:"\u0627\u0644\u062E\u064F\u0648\u062E",age:5},{id:"q_cherry",thing:"q_cherry",letter:"kaaf",word:"\u0643\u0631\u0632",wd:"\u0643\u064E\u0631\u064E\u0632",the:"\u0627\u0644\u0643\u0631\u0632",thed:"\u0627\u0644\u0643\u064E\u0631\u064E\u0632",age:4},{id:"q_olives",thing:"q_olives",letter:"zayn",word:"\u0632\u064A\u062A\u0648\u0646",wd:"\u0632\u064E\u064A\u0652\u062A\u064F\u0648\u0646",the:"\u0627\u0644\u0632\u064A\u062A\u0648\u0646",thed:"\u0627\u0644\u0632\u0651\u064E\u064A\u0652\u062A\u064F\u0648\u0646",age:5},{id:"q_coconut",thing:"q_coconut",letter:"noon",word:"\u0646\u0627\u0631\u062C\u064A\u0644",wd:"\u0646\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",the:"\u0627\u0644\u0646\u0627\u0631\u062C\u064A\u0644",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u0631\u0652\u062C\u0650\u064A\u0644",age:6},{id:"i_ant",thing:"i_ant",letter:"noon",word:"\u0646\u0645\u0644\u0629",wd:"\u0646\u064E\u0645\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0646\u0645\u0644\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0645\u0652\u0644\u064E\u0629",age:4},{id:"i_fly",thing:"i_fly",letter:"dhal",word:"\u0630\u0628\u0627\u0628\u0629",wd:"\u0630\u064F\u0628\u064E\u0627\u0628\u064E\u0629",the:"\u0627\u0644\u0630\u0628\u0627\u0628\u0629",thed:"\u0627\u0644\u0630\u0651\u064F\u0628\u064E\u0627\u0628\u064E\u0629",age:6},{id:"i_spider",thing:"i_spider",letter:"ayn",word:"\u0639\u0646\u0643\u0628\u0648\u062A",wd:"\u0639\u064E\u0646\u0652\u0643\u064E\u0628\u064F\u0648\u062A",the:"\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A",thed:"\u0627\u0644\u0639\u064E\u0646\u0652\u0643\u064E\u0628\u064F\u0648\u062A",age:6},{id:"i_worm",thing:"i_worm",letter:"dal",word:"\u062F\u0648\u062F\u0629",wd:"\u062F\u064F\u0648\u062F\u064E\u0629",the:"\u0627\u0644\u062F\u0648\u062F\u0629",thed:"\u0627\u0644\u062F\u0651\u064F\u0648\u062F\u064E\u0629",age:4},{id:"i_eagle",thing:"i_eagle",letter:"noon",word:"\u0646\u0633\u0631",wd:"\u0646\u0650\u0633\u0652\u0631",the:"\u0627\u0644\u0646\u0633\u0631",thed:"\u0627\u0644\u0646\u0651\u0650\u0633\u0652\u0631",age:6},{id:"i_peacock",thing:"i_peacock",letter:"tah",word:"\u0637\u0627\u0648\u0648\u0633",wd:"\u0637\u064E\u0627\u0648\u064F\u0648\u0633",the:"\u0627\u0644\u0637\u0627\u0648\u0648\u0633",thed:"\u0627\u0644\u0637\u0651\u064E\u0627\u0648\u064F\u0648\u0633",age:6},{id:"i_flamingo",thing:"i_flamingo",letter:"faa",word:"\u0641\u0644\u0627\u0645\u0646\u062C\u0648",wd:"\u0641\u0650\u0644\u064E\u0627\u0645\u0650\u0646\u0652\u062C\u064F\u0648",the:"\u0627\u0644\u0641\u0644\u0627\u0645\u0646\u062C\u0648",thed:"\u0627\u0644\u0641\u0650\u0644\u064E\u0627\u0645\u0650\u0646\u0652\u062C\u064F\u0648",age:6},{id:"i_swan",thing:"i_swan",letter:"baa",word:"\u0628\u062C\u0639\u0629",wd:"\u0628\u064E\u062C\u064E\u0639\u064E\u0629",the:"\u0627\u0644\u0628\u062C\u0639\u0629",thed:"\u0627\u0644\u0628\u064E\u062C\u064E\u0639\u064E\u0629",age:6},{id:"i_ostrich",thing:"i_ostrich",letter:"noon",word:"\u0646\u0639\u0627\u0645\u0629",wd:"\u0646\u064E\u0639\u064E\u0627\u0645\u064E\u0629",the:"\u0627\u0644\u0646\u0639\u0627\u0645\u0629",thed:"\u0627\u0644\u0646\u0651\u064E\u0639\u064E\u0627\u0645\u064E\u0629",age:6},{id:"i_sparrow",thing:"i_sparrow",letter:"ayn",word:"\u0639\u0635\u0641\u0648\u0631\u0629",wd:"\u0639\u064F\u0635\u0652\u0641\u064F\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0639\u0635\u0641\u0648\u0631\u0629",thed:"\u0627\u0644\u0639\u064F\u0635\u0652\u0641\u064F\u0648\u0631\u064E\u0629",age:4},{id:"i_bat",thing:"i_bat",letter:"khaa",word:"\u062E\u0641\u0627\u0634",wd:"\u062E\u064F\u0641\u064E\u0651\u0627\u0634",the:"\u0627\u0644\u062E\u0641\u0627\u0634",thed:"\u0627\u0644\u062E\u064F\u0641\u064E\u0651\u0627\u0634",age:6},{id:"i_snail",thing:"i_snail",letter:"haa",word:"\u062D\u0644\u0632\u0648\u0646\u0629",wd:"\u062D\u064E\u0644\u064E\u0632\u064F\u0648\u0646\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0632\u0648\u0646\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u064E\u0632\u064F\u0648\u0646\u064E\u0629",age:5},{id:"z_doctor",thing:"z_doctor",letter:"dal",word:"\u062F\u0643\u062A\u0648\u0631",wd:"\u062F\u064F\u0643\u0652\u062A\u064F\u0648\u0631",the:"\u0627\u0644\u062F\u0643\u062A\u0648\u0631",thed:"\u0627\u0644\u062F\u0651\u064F\u0643\u0652\u062A\u064F\u0648\u0631",age:3},{id:"z_teacher",thing:"z_teacher",letter:"meem",word:"\u0645\u062F\u0631\u0633",wd:"\u0645\u064F\u062F\u064E\u0631\u0650\u0651\u0633",the:"\u0627\u0644\u0645\u062F\u0631\u0633",thed:"\u0627\u0644\u0645\u064F\u062F\u064E\u0631\u0650\u0651\u0633",age:4},{id:"z_police",thing:"z_police",letter:"sheen",word:"\u0634\u0631\u0637\u064A",wd:"\u0634\u064F\u0631\u0652\u0637\u0650\u064A",the:"\u0627\u0644\u0634\u0631\u0637\u064A",thed:"\u0627\u0644\u0634\u0651\u064F\u0631\u0652\u0637\u0650\u064A",age:4},{id:"z_firefighter",thing:"z_firefighter",letter:"alef",word:"\u0625\u0637\u0641\u0627\u0626\u064A",wd:"\u0625\u0650\u0637\u0652\u0641\u064E\u0627\u0626\u0650\u064A",the:"\u0627\u0644\u0625\u0637\u0641\u0627\u0626\u064A",thed:"\u0627\u0644\u0625\u0650\u0637\u0652\u0641\u064E\u0627\u0626\u0650\u064A",age:5},{id:"z_farmer",thing:"z_farmer",letter:"faa",word:"\u0641\u0644\u0627\u062D",wd:"\u0641\u064E\u0644\u064E\u0651\u0627\u062D",the:"\u0627\u0644\u0641\u0644\u0627\u062D",thed:"\u0627\u0644\u0641\u064E\u0644\u064E\u0651\u0627\u062D",age:5},{id:"z_cook",thing:"z_cook",letter:"tah",word:"\u0637\u0628\u0627\u062E",wd:"\u0637\u064E\u0628\u064E\u0651\u0627\u062E",the:"\u0627\u0644\u0637\u0628\u0627\u062E",thed:"\u0627\u0644\u0637\u0651\u064E\u0628\u064E\u0651\u0627\u062E",age:5},{id:"z_driver",thing:"z_driver",letter:"seen",word:"\u0633\u0648\u0627\u0642",wd:"\u0633\u064E\u0648\u064E\u0651\u0627\u0642",the:"\u0627\u0644\u0633\u0648\u0627\u0642",thed:"\u0627\u0644\u0633\u0651\u064E\u0648\u064E\u0651\u0627\u0642",age:5},{id:"z_pilot",thing:"z_pilot",letter:"tah",word:"\u0637\u064A\u0627\u0631",wd:"\u0637\u064E\u064A\u064E\u0651\u0627\u0631",the:"\u0627\u0644\u0637\u064A\u0627\u0631",thed:"\u0627\u0644\u0637\u0651\u064E\u064A\u064E\u0651\u0627\u0631",age:5},{id:"z_nurse",thing:"z_nurse",letter:"meem",word:"\u0645\u0645\u0631\u0636\u0629",wd:"\u0645\u064F\u0645\u064E\u0631\u0650\u0651\u0636\u064E\u0629",the:"\u0627\u0644\u0645\u0645\u0631\u0636\u0629",thed:"\u0627\u0644\u0645\u064F\u0645\u064E\u0631\u0650\u0651\u0636\u064E\u0629",age:6},{id:"z_builder",thing:"z_builder",letter:"baa",word:"\u0628\u0646\u0627\u0621",wd:"\u0628\u064E\u0646\u064E\u0651\u0627\u0621",the:"\u0627\u0644\u0628\u0646\u0627\u0621",thed:"\u0627\u0644\u0628\u064E\u0646\u064E\u0651\u0627\u0621",age:6},{id:"z_singer",thing:"z_singer",letter:"meem",word:"\u0645\u0637\u0631\u0628",wd:"\u0645\u064F\u0637\u0652\u0631\u0650\u0628",the:"\u0627\u0644\u0645\u0637\u0631\u0628",thed:"\u0627\u0644\u0645\u064F\u0637\u0652\u0631\u0650\u0628",age:6},{id:"z_painter",thing:"z_painter",letter:"raa",word:"\u0631\u0633\u0627\u0645",wd:"\u0631\u064E\u0633\u064E\u0651\u0627\u0645",the:"\u0627\u0644\u0631\u0633\u0627\u0645",thed:"\u0627\u0644\u0631\u0651\u064E\u0633\u064E\u0651\u0627\u0645",age:5},{id:"m_drum",thing:"m_drum",letter:"tah",word:"\u0637\u0628\u0644\u0629",wd:"\u0637\u064E\u0628\u0652\u0644\u064E\u0629",the:"\u0627\u0644\u0637\u0628\u0644\u0629",thed:"\u0627\u0644\u0637\u0651\u064E\u0628\u0652\u0644\u064E\u0629",age:4},{id:"m_guitar",thing:"m_guitar",letter:"jeem",word:"\u062C\u064A\u062A\u0627\u0631",wd:"\u062C\u0650\u064A\u062A\u064E\u0627\u0631",the:"\u0627\u0644\u062C\u064A\u062A\u0627\u0631",thed:"\u0627\u0644\u062C\u0650\u064A\u062A\u064E\u0627\u0631",age:5},{id:"m_piano",thing:"m_piano",letter:"baa",word:"\u0628\u064A\u0627\u0646\u0648",wd:"\u0628\u0650\u064A\u064E\u0627\u0646\u064F\u0648",the:"\u0627\u0644\u0628\u064A\u0627\u0646\u0648",thed:"\u0627\u0644\u0628\u0650\u064A\u064E\u0627\u0646\u064F\u0648",age:5},{id:"m_violin",thing:"m_violin",letter:"kaaf",word:"\u0643\u0645\u0627\u0646",wd:"\u0643\u064E\u0645\u064E\u0627\u0646",the:"\u0627\u0644\u0643\u0645\u0627\u0646",thed:"\u0627\u0644\u0643\u064E\u0645\u064E\u0627\u0646",age:5},{id:"m_flute",thing:"m_flute",letter:"noon",word:"\u0646\u0627\u064A",wd:"\u0646\u064E\u0627\u064A",the:"\u0627\u0644\u0646\u0627\u064A",thed:"\u0627\u0644\u0646\u0651\u064E\u0627\u064A",age:6},{id:"m_trumpet",thing:"m_trumpet",letter:"baa",word:"\u0628\u0648\u0642",wd:"\u0628\u064F\u0648\u0642",the:"\u0627\u0644\u0628\u0648\u0642",thed:"\u0627\u0644\u0628\u064F\u0648\u0642",age:5},{id:"m_tambourine",thing:"m_tambourine",letter:"dal",word:"\u062F\u0641",wd:"\u062F\u064F\u0641\u0651",the:"\u0627\u0644\u062F\u0641",thed:"\u0627\u0644\u062F\u0651\u064F\u0641\u0651",age:5},{id:"m_oud",thing:"m_oud",letter:"ayn",word:"\u0639\u0648\u062F",wd:"\u0639\u064F\u0648\u062F",the:"\u0627\u0644\u0639\u0648\u062F",thed:"\u0627\u0644\u0639\u064F\u0648\u062F",age:6},{id:"m_mic",thing:"m_mic",letter:"meem",word:"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",wd:"\u0645\u0650\u064A\u0643\u0652\u0631\u064F\u0648\u0641\u064F\u0648\u0646",the:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",thed:"\u0627\u0644\u0645\u0650\u064A\u0643\u0652\u0631\u064F\u0648\u0641\u064F\u0648\u0646",age:5},{id:"m_headphones",thing:"m_headphones",letter:"seen",word:"\u0633\u0645\u0627\u0639\u0629",wd:"\u0633\u064E\u0645\u064E\u0651\u0627\u0639\u064E\u0629",the:"\u0627\u0644\u0633\u0645\u0627\u0639\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0651\u0627\u0639\u064E\u0629",age:5},{id:"m_note",thing:"m_note",letter:"noon",word:"\u0646\u0648\u062A\u0629",wd:"\u0646\u064F\u0648\u062A\u064E\u0629",the:"\u0627\u0644\u0646\u0648\u062A\u0629",thed:"\u0627\u0644\u0646\u0651\u064F\u0648\u062A\u064E\u0629",age:6},{id:"m_bell",thing:"m_bell",letter:"jeem",word:"\u062C\u0631\u0633",wd:"\u062C\u064E\u0631\u064E\u0633",the:"\u0627\u0644\u062C\u0631\u0633",thed:"\u0627\u0644\u062C\u064E\u0631\u064E\u0633",age:4},{id:"e_pencil",thing:"e_pencil",letter:"qaaf",word:"\u0642\u0644\u0645",wd:"\u0642\u064E\u0644\u064E\u0645",the:"\u0627\u0644\u0642\u0644\u0645",thed:"\u0627\u0644\u0642\u064E\u0644\u064E\u0645",age:3},{id:"e_book",thing:"e_book",letter:"kaaf",word:"\u0643\u062A\u0627\u0628",wd:"\u0643\u0650\u062A\u064E\u0627\u0628",the:"\u0627\u0644\u0643\u062A\u0627\u0628",thed:"\u0627\u0644\u0643\u0650\u062A\u064E\u0627\u0628",age:3},{id:"e_notebook",thing:"e_notebook",letter:"kaaf",word:"\u0643\u0631\u0627\u0633\u0629",wd:"\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0627\u0633\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0651\u0627\u0633\u064E\u0629",age:4},{id:"e_scissors",thing:"e_scissors",letter:"meem",word:"\u0645\u0642\u0635",wd:"\u0645\u064E\u0642\u064E\u0635",the:"\u0627\u0644\u0645\u0642\u0635",thed:"\u0627\u0644\u0645\u064E\u0642\u064E\u0635",age:5},{id:"e_ruler",thing:"e_ruler",letter:"meem",word:"\u0645\u0633\u0637\u0631\u0629",wd:"\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",the:"\u0627\u0644\u0645\u0633\u0637\u0631\u0629",thed:"\u0627\u0644\u0645\u0650\u0633\u0652\u0637\u064E\u0631\u064E\u0629",age:5},{id:"e_eraser",thing:"e_eraser",letter:"alef",word:"\u0623\u0633\u062A\u064A\u0643\u0629",wd:"\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u062A\u064A\u0643\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u062A\u0650\u064A\u0643\u064E\u0629",age:5},{id:"e_crayons",thing:"e_crayons",letter:"alef",word:"\u0623\u0644\u0648\u0627\u0646",wd:"\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",the:"\u0627\u0644\u0623\u0644\u0648\u0627\u0646",thed:"\u0627\u0644\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u0646",age:4},{id:"e_board",thing:"e_board",letter:"seen",word:"\u0633\u0628\u0648\u0631\u0629",wd:"\u0633\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",the:"\u0627\u0644\u0633\u0628\u0648\u0631\u0629",thed:"\u0627\u0644\u0633\u0651\u064E\u0628\u064F\u0651\u0648\u0631\u064E\u0629",age:5},{id:"e_map",thing:"e_map",letter:"khaa",word:"\u062E\u0631\u064A\u0637\u0629",wd:"\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",the:"\u0627\u0644\u062E\u0631\u064A\u0637\u0629",thed:"\u0627\u0644\u062E\u064E\u0631\u0650\u064A\u0637\u064E\u0629",age:6},{id:"e_glue",thing:"e_glue",letter:"sad",word:"\u0635\u0645\u063A",wd:"\u0635\u064E\u0645\u0652\u063A",the:"\u0627\u0644\u0635\u0645\u063A",thed:"\u0627\u0644\u0635\u0651\u064E\u0645\u0652\u063A",age:6},{id:"e_desk",thing:"e_desk",letter:"meem",word:"\u0645\u0643\u062A\u0628",wd:"\u0645\u064E\u0643\u0652\u062A\u064E\u0628",the:"\u0627\u0644\u0645\u0643\u062A\u0628",thed:"\u0627\u0644\u0645\u064E\u0643\u0652\u062A\u064E\u0628",age:5},{id:"e_paper",thing:"e_paper",letter:"waaw",word:"\u0648\u0631\u0642\u0629",wd:"\u0648\u064E\u0631\u064E\u0642\u064E\u0629",the:"\u0627\u0644\u0648\u0631\u0642\u0629",thed:"\u0627\u0644\u0648\u064E\u0631\u064E\u0642\u064E\u0629",age:4},{id:"g_rectangle",thing:"g_rectangle",letter:"meem",word:"\u0645\u0633\u062A\u0637\u064A\u0644",wd:"\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",the:"\u0627\u0644\u0645\u0633\u062A\u0637\u064A\u0644",thed:"\u0627\u0644\u0645\u064F\u0633\u0652\u062A\u064E\u0637\u0650\u064A\u0644",age:4},{id:"g_oval",thing:"g_oval",letter:"baa",word:"\u0628\u064A\u0636\u0627\u0648\u064A",wd:"\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",the:"\u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A",thed:"\u0627\u0644\u0628\u064E\u064A\u0652\u0636\u064E\u0627\u0648\u0650\u064A",age:5},{id:"g_diamond",thing:"g_diamond",letter:"meem",word:"\u0645\u0639\u064A\u0646",wd:"\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",the:"\u0627\u0644\u0645\u0639\u064A\u0646",thed:"\u0627\u0644\u0645\u064F\u0639\u064E\u064A\u064E\u0651\u0646",age:5},{id:"g_hexagon",thing:"g_hexagon",letter:"seen",word:"\u0633\u062F\u0627\u0633\u064A",wd:"\u0633\u064F\u062F\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u0633\u062F\u0627\u0633\u064A",thed:"\u0627\u0644\u0633\u0651\u064F\u062F\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_pentagon",thing:"g_pentagon",letter:"khaa",word:"\u062E\u0645\u0627\u0633\u064A",wd:"\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",the:"\u0627\u0644\u062E\u0645\u0627\u0633\u064A",thed:"\u0627\u0644\u062E\u064F\u0645\u064E\u0627\u0633\u0650\u064A",age:6},{id:"g_arrow",thing:"g_arrow",letter:"seen",word:"\u0633\u0647\u0645",wd:"\u0633\u064E\u0647\u0652\u0645",the:"\u0627\u0644\u0633\u0647\u0645",thed:"\u0627\u0644\u0633\u0651\u064E\u0647\u0652\u0645",age:4},{id:"g_cube",thing:"g_cube",letter:"meem",word:"\u0645\u0643\u0639\u0628",wd:"\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",the:"\u0627\u0644\u0645\u0643\u0639\u0628",thed:"\u0627\u0644\u0645\u064F\u0643\u064E\u0639\u064E\u0651\u0628",age:5},{id:"g_sphere",thing:"g_sphere",letter:"kaaf",word:"\u0643\u0631\u0629",wd:"\u0643\u064F\u0631\u064E\u0629",the:"\u0627\u0644\u0643\u0631\u0629",thed:"\u0627\u0644\u0643\u064F\u0631\u064E\u0629",age:4},{id:"g_cone",thing:"g_cone",letter:"meem",word:"\u0645\u062E\u0631\u0648\u0637",wd:"\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",the:"\u0627\u0644\u0645\u062E\u0631\u0648\u0637",thed:"\u0627\u0644\u0645\u064E\u062E\u0652\u0631\u064F\u0648\u0637",age:6},{id:"g_cylinder",thing:"g_cylinder",letter:"alef",word:"\u0623\u0633\u0637\u0648\u0627\u0646\u0629",wd:"\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",the:"\u0627\u0644\u0623\u0633\u0637\u0648\u0627\u0646\u0629",thed:"\u0627\u0644\u0623\u064F\u0633\u0652\u0637\u064F\u0648\u064E\u0627\u0646\u064E\u0629",age:6},{id:"g_ring",thing:"g_ring",letter:"haa",word:"\u062D\u0644\u0642\u0629",wd:"\u062D\u064E\u0644\u0652\u0642\u064E\u0629",the:"\u0627\u0644\u062D\u0644\u0642\u0629",thed:"\u0627\u0644\u062D\u064E\u0644\u0652\u0642\u064E\u0629",age:5},{id:"g_heart",thing:"g_heart",letter:"qaaf",word:"\u0642\u0644\u0628",wd:"\u0642\u064E\u0644\u0652\u0628",the:"\u0627\u0644\u0642\u0644\u0628",thed:"\u0627\u0644\u0642\u064E\u0644\u0652\u0628",age:3},{id:"v_tomato",thing:"v_tomato",letter:"tah",word:"\u0637\u0645\u0627\u0637\u0645",wd:"\u0637\u064E\u0645\u064E\u0627\u0637\u0650\u0645",the:"\u0627\u0644\u0637\u0645\u0627\u0637\u0645",thed:"\u0627\u0644\u0637\u0651\u064E\u0645\u064E\u0627\u0637\u0650\u0645",age:4},{id:"v_cucumber",thing:"v_cucumber",letter:"khaa",word:"\u062E\u064A\u0627\u0631",wd:"\u062E\u0650\u064A\u064E\u0627\u0631",the:"\u0627\u0644\u062E\u064A\u0627\u0631",thed:"\u0627\u0644\u062E\u0650\u064A\u064E\u0627\u0631",age:4},{id:"v_potato",thing:"v_potato",letter:"baa",word:"\u0628\u0637\u0627\u0637\u0633",wd:"\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",the:"\u0627\u0644\u0628\u0637\u0627\u0637\u0633",thed:"\u0627\u0644\u0628\u064E\u0637\u064E\u0627\u0637\u0650\u0633",age:4},{id:"v_onion",thing:"v_onion",letter:"baa",word:"\u0628\u0635\u0644",wd:"\u0628\u064E\u0635\u064E\u0644",the:"\u0627\u0644\u0628\u0635\u0644",thed:"\u0627\u0644\u0628\u064E\u0635\u064E\u0644",age:5},{id:"v_eggplant",thing:"v_eggplant",letter:"baa",word:"\u0628\u0627\u0630\u0646\u062C\u0627\u0646",wd:"\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",the:"\u0627\u0644\u0628\u0627\u0630\u0646\u062C\u0627\u0646",thed:"\u0627\u0644\u0628\u064E\u0627\u0630\u0650\u0646\u0652\u062C\u064E\u0627\u0646",age:5},{id:"v_pepper",thing:"v_pepper",letter:"faa",word:"\u0641\u0644\u0641\u0644",wd:"\u0641\u0650\u0644\u0652\u0641\u0650\u0644",the:"\u0627\u0644\u0641\u0644\u0641\u0644",thed:"\u0627\u0644\u0641\u0650\u0644\u0652\u0641\u0650\u0644",age:5},{id:"v_lettuce",thing:"v_lettuce",letter:"khaa",word:"\u062E\u0633",wd:"\u062E\u064E\u0633",the:"\u0627\u0644\u062E\u0633",thed:"\u0627\u0644\u062E\u064E\u0633",age:5},{id:"v_broccoli",thing:"v_broccoli",letter:"baa",word:"\u0628\u0631\u0648\u0643\u0644\u064A",wd:"\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",the:"\u0627\u0644\u0628\u0631\u0648\u0643\u0644\u064A",thed:"\u0627\u0644\u0628\u064F\u0631\u064F\u0648\u0643\u0652\u0644\u0650\u064A",age:5},{id:"v_peas",thing:"v_peas",letter:"baa",word:"\u0628\u0633\u0644\u0629",wd:"\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",the:"\u0627\u0644\u0628\u0633\u0644\u0629",thed:"\u0627\u0644\u0628\u0650\u0633\u0650\u0644\u064E\u0651\u0629",age:6},{id:"v_pumpkin",thing:"v_pumpkin",letter:"qaaf",word:"\u0642\u0631\u0639",wd:"\u0642\u064E\u0631\u0652\u0639",the:"\u0627\u0644\u0642\u0631\u0639",thed:"\u0627\u0644\u0642\u064E\u0631\u0652\u0639",age:5},{id:"v_garlic",thing:"v_garlic",letter:"thaa",word:"\u062B\u0648\u0645",wd:"\u062B\u064F\u0648\u0645",the:"\u0627\u0644\u062B\u0648\u0645",thed:"\u0627\u0644\u062B\u0651\u064F\u0648\u0645",age:6},{id:"v_mushroom",thing:"v_mushroom",letter:"faa",word:"\u0641\u0637\u0631",wd:"\u0641\u064F\u0637\u0652\u0631",the:"\u0627\u0644\u0641\u0637\u0631",thed:"\u0627\u0644\u0641\u064F\u0637\u0652\u0631",age:6},{id:"t_rain",thing:"t_rain",letter:"meem",word:"\u0645\u0637\u0631",wd:"\u0645\u064E\u0637\u064E\u0631",the:"\u0627\u0644\u0645\u0637\u0631",thed:"\u0627\u0644\u0645\u064E\u0637\u064E\u0631",age:4},{id:"t_snow",thing:"t_snow",letter:"thaa",word:"\u062B\u0644\u062C",wd:"\u062B\u064E\u0644\u0652\u062C",the:"\u0627\u0644\u062B\u0644\u062C",thed:"\u0627\u0644\u062B\u0651\u064E\u0644\u0652\u062C",age:4},{id:"t_wind",thing:"t_wind",letter:"haa2",word:"\u0647\u0648\u0627",wd:"\u0647\u064E\u0648\u064E\u0627",the:"\u0627\u0644\u0647\u0648\u0627",thed:"\u0627\u0644\u0647\u064E\u0648\u064E\u0627",age:5},{id:"t_thunder",thing:"t_thunder",letter:"raa",word:"\u0631\u0639\u062F",wd:"\u0631\u064E\u0639\u0652\u062F",the:"\u0627\u0644\u0631\u0639\u062F",thed:"\u0627\u0644\u0631\u0651\u064E\u0639\u0652\u062F",age:6},{id:"t_lightning",thing:"t_lightning",letter:"baa",word:"\u0628\u0631\u0642",wd:"\u0628\u064E\u0631\u0652\u0642",the:"\u0627\u0644\u0628\u0631\u0642",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u0642",age:6},{id:"t_umbrella",thing:"t_umbrella",letter:"sheen",word:"\u0634\u0645\u0633\u064A\u0629",wd:"\u0634\u064E\u0645\u0652\u0633\u0650\u064A\u064E\u0651\u0629",the:"\u0627\u0644\u0634\u0645\u0633\u064A\u0629",thed:"\u0627\u0644\u0634\u0651\u064E\u0645\u0652\u0633\u0650\u064A\u064E\u0651\u0629",age:4},{id:"t_flake",thing:"t_flake",letter:"noon",word:"\u0646\u062F\u0641\u0629",wd:"\u0646\u064F\u062F\u0652\u0641\u064E\u0629",the:"\u0627\u0644\u0646\u062F\u0641\u0629",thed:"\u0627\u0644\u0646\u0651\u064F\u062F\u0652\u0641\u064E\u0629",age:6},{id:"t_flower",thing:"t_flower",letter:"zayn",word:"\u0632\u0647\u0631\u0629",wd:"\u0632\u064E\u0647\u0652\u0631\u064E\u0629",the:"\u0627\u0644\u0632\u0647\u0631\u0629",thed:"\u0627\u0644\u0632\u0651\u064E\u0647\u0652\u0631\u064E\u0629",age:3},{id:"t_leaves",thing:"t_leaves",letter:"alef",word:"\u0623\u0648\u0631\u0627\u0642",wd:"\u0623\u064E\u0648\u0652\u0631\u064E\u0627\u0642",the:"\u0627\u0644\u0623\u0648\u0631\u0627\u0642",thed:"\u0627\u0644\u0623\u064E\u0648\u0652\u0631\u064E\u0627\u0642",age:5},{id:"t_hot",thing:"t_hot",letter:"haa",word:"\u062D\u0631",wd:"\u062D\u064E\u0631\u0651",the:"\u0627\u0644\u062D\u0631",thed:"\u0627\u0644\u062D\u064E\u0631\u0651",age:5},{id:"t_cold",thing:"t_cold",letter:"baa",word:"\u0628\u0631\u062F",wd:"\u0628\u064E\u0631\u0652\u062F",the:"\u0627\u0644\u0628\u0631\u062F",thed:"\u0627\u0644\u0628\u064E\u0631\u0652\u062F",age:5},{id:"t_mountain",thing:"t_mountain",letter:"jeem",word:"\u062C\u0628\u0644",wd:"\u062C\u064E\u0628\u064E\u0644",the:"\u0627\u0644\u062C\u0628\u0644",thed:"\u0627\u0644\u062C\u064E\u0628\u064E\u0644",age:5}];var g_="../art/";var ql=new Map;function m_(i){if(ql.has(i))return ql.get(i);let e=new ea().load(`${g_}${i}.webp`);return e.colorSpace=Mt,e.anisotropy=4,e.generateMipmaps=!0,e.minFilter=Fn,ql.set(i,e),e}function od(i,e,t=1){if(t>1){let l=new rt;for(let c=t-1;c>=0;c--){let h=od(i,e,1);h.position.z=-c*.028;let d=c===0?1:Math.max(.35,.78-c*.07);h.material=h.material.clone(),h.material.color.setScalar(d),l.add(h)}return l}let[n,s]=xa[i],r=new In(e*n/s,e);r.translate(0,e/2,0);let a=new wt({map:m_(i),transparent:!0,alphaTest:.08,toneMapped:!1,side:qt}),o=new le(r,a);return o.userData.name=i,o}var ds={apple:"apple_n",banana:"banana_n",ball:"ball",crow:"crow",envelope:"envelope",lemon:"lemon",crescent:"crescent",corn:"corn",orange:"orange",grapes:"grapes_n",strawberry:"strawberry",watermelon:"watermelon",pineapple:"pineapple",mango:"mango",carrot:"carrot",cow:"cow",sheep:"sheep_n",dog:"dog",cat:"cat_n",giraffe:"giraffe_n",lion:"lion",elephant:"elephant2",horse:"horse_n",pig:"pig",bunny:"rabbit_n",rabbit:"rabbit_n",duck:"duck_n",hen:"hen_n",chick:"chick",bee:"bee_n",butterfly:"butterfly_n",monkey:"monkey",fish:"clownfish_n",dove:"dove_n",frog:"frog_n",panda:"panda",tiger:"tiger",zebra:"zebra",penguin:"penguin",parrot:"parrot",fox:"fox",camel:"camel",sun:"sun",rose:"rose",pomegranate:"pomegranate",rocket:"rocket",car:"car",bus:"bus",train:"train",plane:"plane_n",boat:"boat",firetruck:"firetruck",ambulance:"ambulance",police:"police",helicopter:"helicopter"},ld=[...ad.map(i=>i.thing),"c_schoolbus","c_citybus","c_taxi","c_tram","c_bulldozer","h_bike","d_jeep","d_balloon","d_boat","d_donkeycart","h_towel","h_shoes","h_toybox","h_broom","h_bin","h_wardrobe","h_clock","h_wateringcan","h_ball","h_table","h_sink","h_bed","h_backpack","h_toothbrush","f_haypile","f_eggs"];for(let i of ld)ds[i]=i;for(let i of Object.keys(xa))ds[i]||(ds[i]=i);var cd=new Set(["cow","sheep","dog","cat","giraffe","lion","elephant","elephant2","fox","camel","crow","sheep_n","cat_n","giraffe_n","horse_n","rabbit_n","duck_n","hen_n","bee_n","butterfly_n","clownfish_n","croc","horse","pig","rabbit","mallard","hen","chick","bee","butterfly","frog_n","dove_n","grapes_n","plane_n","monkey","clownfish","pigeon","frog","panda","tiger","zebra","penguin","parrot"]);for(let i of ld)cd.add(i);var __=i=>!!ds[i]&&!!xa[ds[i]];function hd(i){if(!__(i))return null;let e=new rt,t=ds[i],n=cd.has(t)?1.5:1;return e.add(od(t,n)),e.userData.id=i,e.userData.art=!0,e.userData.inner=new rt,e}var x_={red:15216682,blue:2788072,yellow:16765466,green:2795594,orange:16747034,purple:10111704},Ct=(i,e=.45)=>new Je({color:i,roughness:e}),A_=()=>new Je({color:14677247,roughness:.1,transparent:!0,opacity:.38,depthWrite:!1}),dt=(i,e,t,n=0,s=0,r=0)=>{let a=new le(e,t);return a.position.set(n,s,r),a.castShadow=!0,i.add(a),a},fd=12618314,bn=.17;function qs(i,e,t,n,s){dt(i,new _t(bn,22,16),Ct(e,.3),t,n,s),dt(i,new _t(bn*.28,10,8),Ct(16777215,.2),t-bn*.35,n+bn*.4,s+bn*.7)}function Yl(i){dt(i,new qe(1.1,.1,.7),Ct(fd),0,.62,0);for(let e of[-1,1])for(let t of[-1,1])dt(i,new yt(.05,.045,.6,10),Ct(10119730),e*.46,.3,t*.26)}function dd(i){let e=Ct(fd);dt(i,new qe(.8,.05,.8),Ct(10119730),0,.025,0),dt(i,new qe(.8,.34,.05),e,0,.17,.375),dt(i,new qe(.8,.34,.05),e,0,.17,-.375),dt(i,new qe(.05,.34,.7),e,.375,.17,0),dt(i,new qe(.05,.34,.7),e,-.375,.17,0)}function Zl(i,e,t){if(dt(i,new yt(.34,.27,.85,24,1,!0),A_(),0,.45,0),dt(i,new yt(.27,.27,.04,24),Ct(12576511,.2),0,.03,0),dt(i,new bt(.34,.025,8,28),Ct(16777215,.2),0,.875,0).rotation.x=Math.PI/2,t>0){let n=.78*t,s=.27+(.34-.27)*(n/.85);dt(i,new yt(s,.265,n,24),Ct(e,.15),0,.05+n/2,0)}}function ud(i,e,t){if(dt(i,new qe(.95,1.4,.1),Ct(9067058),0,.7,0),t){dt(i,new qe(.75,1.25,.06),Ct(2760758,.9),0,.68,.04);let n=new rt;n.position.set(-.37,0,.08),n.rotation.y=-1,dt(n,new qe(.72,1.22,.06),Ct(e,.4),.36,.68,0),dt(n,new _t(.05,10,8),Ct(16765498,.25),.62,.65,.05),i.add(n)}else dt(i,new qe(.75,1.25,.08),Ct(e,.4),0,.68,.07),dt(i,new qe(.5,.45,.02),Ct(16777215,.5),0,.98,.115).material.opacity=1,dt(i,new _t(.055,10,8),Ct(16765498,.25),.26,.62,.13)}function y_(i,e,t){dt(i,new yt(.52,.52,.08,32),Ct(16777215,.35),0,.55,0).rotation.x=Math.PI/2;let n=new rt;dt(n,new yt(.1,.1,.46,14),Ct(e,.3),0,-.1,0),dt(n,new Kt(.24,.32,18),Ct(e,.3),0,.26,0),n.position.set(0,.55,.08),n.rotation.z={up:0,left:Math.PI/2,down:Math.PI,right:-Math.PI/2}[t],i.add(n)}var v_=[[0,0],[-.2,-.12],[.2,.12],[-.2,.14],[.2,-.14],[0,-.26],[0,.26],[-.34,0],[.34,0]];function C_(i,e){dt(i,new yt(.55,.42,.07,32),Ct(16777215,.3),0,.035,0),dt(i,new bt(.55,.03,8,32),Ct(16765498,.3),0,.075,0).rotation.x=Math.PI/2;let t=e<=5?[[0,0],[-.22,0],[.22,0],[0,-.22],[0,.22]].slice(0,e):v_.slice(0,e),n=e===1?[[0,0]]:e===2?[[-.2,0],[.2,0]]:e===3?[[-.25,.1],[.25,.1],[0,-.2]]:e===4?[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]]:t;for(let[s,r]of n)dt(i,new _t(.13,16,12),Ct(15216682,.35),s,.2,r),dt(i,new yt(.01,.012,.07,6),Ct(6961690),s,.34,r)}var Yt={};for(let[i,e]of Object.entries(x_)){Yt[`rel_on_${i}`]=t=>{Yl(t),qs(t,e,0,.67+bn,0)},Yt[`rel_under_${i}`]=t=>{Yl(t),qs(t,e,0,bn,.05)},Yt[`rel_beside_${i}`]=t=>{Yl(t),qs(t,e,.86,bn,.05)},Yt[`box_in_${i}`]=t=>{dd(t),qs(t,e,0,.05+bn,0)},Yt[`box_out_${i}`]=t=>{dd(t),qs(t,e,.72,bn,.1)},Yt[`cup_full_${i}`]=t=>Zl(t,e,1),Yt[`cup_half_${i}`]=t=>Zl(t,e,.5),Yt[`cup_empty_${i}`]=t=>Zl(t,e,0),Yt[`door_open_${i}`]=t=>ud(t,e,!0),Yt[`door_closed_${i}`]=t=>ud(t,e,!1);for(let t of["up","down","right","left"])Yt[`arrow_${t}_${i}`]=n=>y_(n,e,t)}for(let i=1;i<=9;i++)Yt[`plate_${i}`]=e=>C_(e,i);var gx=Object.keys(Yt);var X=(i,e=.55)=>new Je({color:i,roughness:e}),q=(i,e,t=0,n=0,s=0,r=1,a=1,o=1)=>{let l=new le(new _t(i,18,14),e);return l.position.set(t,n,s),l.scale.set(r,a,o),l.castShadow=!0,l},xt=(i,e,t,n,s=0,r=0,a=0)=>{let o=new le(new yt(i,e,t,14),n);return o.position.set(s,r,a),o.castShadow=!0,o},Tt=(i,e,t,n=0,s=0,r=0)=>{let a=new le(new Kt(i,e,14),t);return a.position.set(n,s,r),a.castShadow=!0,a},Zt=(i,e,t,n=.12,s=.05)=>{for(let r of[-1,1])i.add(q(s,X(1710628,.3),r*n,e,t)),i.add(q(s*.35,new wt({color:16777215}),r*n+s*.3,e+s*.4,t+s*.7))},mn=(i,e,t,n,s=.28,r=.07)=>{for(let a of t)for(let o of n)i.add(xt(r,r*.9,s,e,a,s/2,o))},pd={duck(i){let e=X(16767034,.4),t=X(16747050);i.add(q(.42,e,0,.45,0,1,.9,1.15)),i.add(q(.27,e,0,.9,.3));let n=q(.13,t,0,.84,.55,1.3,.5,1.1);i.add(n),Zt(i,.97,.5,.12),i.add(q(.2,X(16761370),.38,.5,-.02,.4,.8,1)),i.add(q(.2,X(16761370),-.38,.5,-.02,.4,.8,1)),i.add(Tt(.14,.3,e,0,.62,-.5)).rotation.x=-1.1},butterfly(i){i.add(xt(.05,.05,.6,X(4864602),0,.5,0)).rotation.x=Math.PI/2,i.children[0].rotation.x=0,i.add(q(.09,X(4864602),0,.85,0));let e=new rt;for(let[t,n,s]of[[-1,1,16739e3],[1,1,16739e3],[-1,-1,12090111],[1,-1,12090111]]){let r=q(.38,X(s,.4),t*.36,.62+n*.18,0,1,1,.12);e.add(r,q(.1,X(16777215),t*.42,.62+n*.2,.06,1,1,.3))}i.add(e),i.userData.wings=e;for(let t of[-1,1]){let n=xt(.012,.012,.3,X(4864602),t*.08,1.05,0);n.rotation.z=-t*.4,i.add(n)}},fox(i){let e=X(15764010),t=X(16774376),n=X(4860442);i.add(q(.4,e,0,.5,-.05,.9,.85,1.25)),i.add(q(.3,e,0,.88,.38,1.1,.95,1)),i.add(q(.2,t,0,.8,.55,1.2,.7,1)),i.add(q(.05,n,0,.84,.72));for(let s of[-1,1]){let r=Tt(.11,.32,e,s*.2,1.2,.34);r.rotation.z=-s*.2,i.add(r),i.add(Tt(.05,.2,n,s*.2,1.18,.37)).rotation.z=-s*.2}Zt(i,.95,.62,.12),i.add(q(.18,e,0,.55,-.62,.8,.8,1.7)).rotation.x=.5,i.add(q(.14,t,0,.78,-.95,.9,.9,1.2)),mn(i,n,[-.2,.2],[.25,-.35],.3)},camel(i){let e=X(14198888),t=X(12093512);i.add(q(.42,e,0,.78,0,.85,.8,1.35)),i.add(q(.22,e,0,1.2,-.2)),i.add(q(.2,e,0,1.18,.28));let n=xt(.12,.17,.62,e,0,1.2,.58);n.rotation.x=.5,i.add(n),i.add(q(.17,e,0,1.55,.78,.9,.9,1.3)),i.add(q(.05,X(1710628),0,1.6,.93)),Zt(i,1.6,.76,.1,.035),mn(i,t,[-.22,.22],[.42,-.42],.55,.08),i.add(xt(.025,.025,.35,t,0,.7,-.62)).rotation.x=.3},horse(i){let e=X(11037242),t=X(3810328),n=X(16774376);i.add(q(.38,e,0,.78,0,.8,.8,1.4));let s=xt(.14,.2,.6,e,0,1.15,.5);s.rotation.x=.55,i.add(s),i.add(q(.2,e,0,1.5,.7,.85,.95,1.5)),i.add(q(.12,n,0,1.45,.88,.8,.7,1));for(let r of[-1,1])i.add(Tt(.07,.2,e,r*.1,1.72,.58));Zt(i,1.55,.74,.14,.035),i.add(q(.1,t,0,1.55,.45,.5,1.6,.9)).rotation.x=.55,mn(i,e,[-.2,.2],[.42,-.45],.55,.075),i.add(Tt(.1,.55,t,0,.85,-.75)).rotation.x=2.6},sheep(i){let e=X(16775920,.9),t=X(3816004);for(let[n,s,r,a]of[[0,.62,0,.42],[-.28,.6,.1,.3],[.28,.6,.1,.3],[0,.85,.05,.3],[-.2,.6,-.3,.3],[.2,.6,-.3,.3],[0,.52,.3,.3]])i.add(q(a,e,n,s,r));i.add(q(.22,t,0,.72,.5,.95,1.05,1.1));for(let n of[-1,1])i.add(q(.1,t,n*.24,.8,.45,1.4,.7,.5));Zt(i,.78,.68,.09,.03),mn(i,t,[-.18,.18],[.22,-.25],.3,.06)},hen(i){let e=X(16774376,.7),t=X(15216682),n=X(16752682);i.add(q(.42,e,0,.55,0,1,.95,1.1)),i.add(q(.24,e,0,1,.32)),i.add(q(.12,n,0,.95,.56,.9,.7,1.4));for(let s=0;s<3;s++)i.add(q(.07,t,0,1.28-Math.abs(s-1)*.04,.3+(s-1)*.1));i.add(q(.06,t,0,.82,.55,.7,1.4,.7)),Zt(i,1.03,.5,.11,.035),i.add(Tt(.22,.5,e,0,.85,-.5)).rotation.x=-.6,i.add(q(.2,X(15786184),.4,.55,0,.35,.8,1)),i.add(q(.2,X(15786184),-.4,.55,0,.35,.8,1)),mn(i,n,[-.12,.12],[0],.2,.03)},sun(i){let e=X(16765466,.3);i.add(q(.45,e,0,.7,0));for(let n=0;n<10;n++){let s=n/10*Math.PI*2,r=Tt(.09,.32,X(16754714),Math.cos(s)*.68,.7+Math.sin(s)*.68,0);r.rotation.z=s-Math.PI/2,i.add(r)}Zt(i,.78,.42,.15,.045);let t=new le(new bt(.15,.025,6,14,Math.PI),X(12073498));t.position.set(0,.6,.43),t.rotation.z=Math.PI,i.add(t);for(let n of[-1,1])i.add(q(.07,X(16751210),n*.28,.62,.38,1,.7,.5))},bee(i){let e=X(16765466),t=X(2763306);i.add(q(.4,e,0,.5,0,.9,.85,1.25));for(let n of[-.1,.2,-.38]){let s=q(.37-Math.abs(n)*.2,t,0,.5,n,.9,.85,.2);i.add(s)}i.add(q(.22,e,0,.62,.52)),Zt(i,.68,.68,.1,.05);for(let n of[-1,1]){i.add(q(.22,X(13627135,.2),n*.32,.95,0,.9,.35,1.1)).userData.wing=n;let s=xt(.012,.012,.3,t,n*.08,.95,.62);s.rotation.z=-n*.4,s.rotation.x=.3,i.add(s)}i.add(Tt(.06,.2,t,0,.45,-.62)).rotation.x=-Math.PI/2},heart(i){let e=new le(rd("heart",.4,.09),new Je({color:16726634,roughness:.25}));e.scale.setScalar(.62),e.position.y=.55,e.castShadow=!0,i.add(e),i.add(q(.07,new wt({color:16765148}),-.2,.72,.28,1,1.4,.5))},rose(i){let e=X(15214666,.45),t=X(3844170);i.add(xt(.04,.05,.75,t,0,.38,0));for(let[n,s]of[[-1,.35],[1,.5]]){let r=q(.16,t,n*.2,s,0,1.6,.3,.8);r.rotation.z=n*.4,i.add(r)}i.add(q(.3,e,0,.95,0,1,.9,1));for(let n=0;n<5;n++){let s=n/5*Math.PI*2;i.add(q(.18,X(16730730,.45),Math.cos(s)*.24,.98,Math.sin(s)*.24,1,1.1,.6)).rotation.y=-s}i.add(q(.14,X(13113914),0,1.05,0))},dog(i){let e=X(13144138),t=X(16774376),n=X(8014370);i.add(q(.4,e,0,.55,-.05,.85,.8,1.3)),i.add(q(.3,e,0,.95,.4)),i.add(q(.18,t,0,.88,.62,1,.8,1.1)),i.add(q(.06,X(1710628),0,.93,.78));for(let s of[-1,1])i.add(q(.13,n,s*.3,.95,.35,.6,1.5,.9));Zt(i,1.02,.62,.12,.045),mn(i,e,[-.2,.2],[.28,-.38],.32,.08),i.add(Tt(.07,.4,e,0,.8,-.65)).rotation.x=-2.2,i.add(q(.1,X(16743066),0,.74,.7,.8,.4,1.2))},monkey(i){let e=X(10119738),t=X(15782048);i.add(q(.38,e,0,.55,0,.9,1,.9)),i.add(q(.3,e,0,1.05,.05)),i.add(q(.2,t,0,.98,.25,1.2,.9,.6)),i.add(q(.05,X(3811866),0,1,.36)),Zt(i,1.12,.27,.1,.04);for(let s of[-1,1])i.add(q(.14,e,s*.33,1.08,0)),i.add(q(.09,t,s*.33,1.08,.05)),i.add(q(.1,e,s*.5,.45,.12,.8,1.6,.8));i.add(q(.24,t,0,.5,.25,.9,1,.5)),mn(i,e,[-.18,.18],[.05],.3,.09);let n=new le(new bt(.3,.05,8,16,Math.PI*1.4),e);n.position.set(0,.5,-.4),n.rotation.y=Math.PI/2,i.add(n)},cow(i){let e=X(16775920),t=X(2763306),n=X(16756920);i.add(q(.45,e,0,.78,0,.9,.85,1.4)),i.add(q(.18,t,-.15,.95,.1,1,1,.9)),i.add(q(.15,t,.2,.7,-.2,1,1,.9)),i.add(q(.3,e,0,1,.62)),i.add(q(.2,n,0,.9,.85,1.1,.8,.8));for(let s of[-1,1])i.add(q(.04,X(1710628),s*.08,.92,1)),i.add(Tt(.05,.2,X(16312512),s*.2,1.38,.62)).rotation.z=-s*.4,i.add(q(.11,t,s*.32,1.12,.6,1.4,.6,.8));Zt(i,1.12,.84,.15,.04),mn(i,e,[-.22,.22],[.4,-.45],.45,.09),i.add(xt(.025,.025,.5,e,0,.7,-.7)).rotation.x=.3},bear(i){let e=X(9067066),t=X(15255704);i.add(q(.46,e,0,.55,0,1,1,.9)),i.add(q(.32,e,0,1.15,.05)),i.add(q(.18,t,0,1.08,.28,1.1,.8,.8)),i.add(q(.06,X(1710628),0,1.13,.42,1.2,.8,1));for(let n of[-1,1])i.add(q(.12,e,n*.26,1.42,0)),i.add(q(.07,t,n*.26,1.42,.07)),i.add(q(.14,e,n*.45,.3,.25,.8,1,1.2));Zt(i,1.22,.3,.11,.045),i.add(q(.3,t,0,.5,.35,.9,1,.5));for(let n of[-1,1])i.add(q(.12,e,n*.42,.55,.15,.8,1.6,.8))},mouse(i){let e=X(12105928),t=X(16756928);i.add(q(.32,e,0,.36,0,.9,.85,1.3)),i.add(q(.22,e,0,.45,.35,.9,.9,1.2)),i.add(q(.05,t,0,.44,.58));for(let s of[-1,1])i.add(q(.14,e,s*.2,.68,.22,1,1,.3)),i.add(q(.09,t,s*.2,.68,.25,1,1,.3));Zt(i,.52,.5,.09,.035);let n=new le(new bt(.3,.025,6,16,Math.PI*1.2),t);n.position.set(0,.15,-.55),n.rotation.set(0,Math.PI/2,0),i.add(n),mn(i,e,[-.15,.15],[.15,-.2],.12,.05)},carrot(i){let e=Tt(.22,.95,X(16747034),0,.5,0);e.rotation.z=Math.PI,i.add(e);for(let t of[-.07,0,.07])i.add(Tt(.06,.3,X(3844170),t,1.15,0)).rotation.z=t*3},bone(i){let e=X(16774368);i.add(xt(.1,.1,.8,e,0,.3,0)).rotation.z=Math.PI/2;for(let t of[-.42,.42])for(let n of[-.1,.1])i.add(q(.14,e,t,.3,n))},grass(i){for(let e=0;e<9;e++){let t=e/9*Math.PI*2,n=Tt(.07,.8+e%3*.15,X(e%2?4900954:3844170),Math.cos(t)*.18,.4,Math.sin(t)*.18);n.rotation.z=Math.cos(t)*.3,n.rotation.x=Math.sin(t)*.3,i.add(n)}},honey(i){i.add(xt(.32,.36,.55,X(16758810,.2),0,.3,0)),i.add(xt(.34,.34,.08,X(9067050),0,.6,0)),i.add(q(.13,X(16762938,.2),.2,.55,.1,1,.6,1));let e=new le(new In(.4,.28),X(16774360));e.position.set(0,.32,.37),i.add(e)},cheese(i){let e=X(16765498,.5),t=xt(.5,.5,.4,e,0,.25,0);i.add(t),t.geometry=new yt(.5,.5,.4,3),t.rotation.y=.5;for(let[n,s,r]of[[.1,.3,.3],[-.2,.2,.2],[.25,.45,0],[-.05,.46,-.1]])i.add(q(.07,X(15247386),n,s,r))},seeds(i){for(let e=0;e<18;e++)i.add(q(.06,X(e%3?13148240:15257720),Math.cos(e*2.4)*.28*(.4+e%5/6),.07+e%4*.05,Math.sin(e*2.4)*.28*(.4+e%5/6),1,.7,1.4))},pomegranate(i){let e=X(13113402,.35);i.add(q(.42,e,0,.45,0)),i.add(xt(.12,.16,.12,X(9048616),0,.88,0));for(let t=0;t<5;t++){let n=t/5*Math.PI*2;i.add(Tt(.05,.14,X(9048616),Math.cos(n)*.1,.98,Math.sin(n)*.1))}i.add(q(.08,new wt({color:16747168}),-.15,.62,.34,1,1.3,.5))},giraffe(i){let e=X(16764746),t=X(12089386);i.add(q(.38,e,0,.78,0,.8,.8,1.3));for(let[s,r,a]of[[.2,.85,.1],[-.2,.7,-.2],[.18,.7,-.3],[-.15,.9,.25]])i.add(q(.09,t,s,r,a,1,1,.5));let n=xt(.12,.17,.95,e,0,1.35,.4);n.rotation.x=.18,i.add(n),i.add(q(.2,e,0,1.88,.5,.9,.95,1.3)),i.add(q(.11,X(15782040),0,1.82,.7,1,.8,1));for(let s of[-1,1])i.add(xt(.02,.02,.2,t,s*.09,2.1,.45)),i.add(q(.04,t,s*.09,2.22,.45)),i.add(q(.07,e,s*.2,1.95,.4,1.3,.6,.5));Zt(i,1.92,.64,.12,.035);for(let s of[-1,1])i.add(q(.09,t,s*.06,1.5,.45,1,1,.4));mn(i,e,[-.2,.2],[.32,-.38],.55,.07)},corn(i){i.add(q(.26,X(16765466,.4),0,.55,0,1,1.9,1));for(let e=0;e<7;e++)for(let t=0;t<8;t++){let n=t/8*Math.PI*2+e*.4;i.add(q(.055,X(16760330,.4),Math.cos(n)*.25,.15+e*.14,Math.sin(n)*.25))}for(let e of[.3,2.4,4.4]){let t=Tt(.18,.7,X(4892746),Math.cos(e)*.2,.35,Math.sin(e)*.2);t.rotation.z=Math.cos(e)*.35,t.rotation.x=Math.sin(e)*.35,t.scale.z=.35,i.add(t)}},rocket(i){let e=X(16053503,.3),t=X(15216682,.4);i.add(xt(.26,.3,1,e,0,.7,0)),i.add(Tt(.26,.45,t,0,1.43,0)),i.add(q(.12,X(4892927,.1),0,.85,.24,1,1,.5));for(let n=0;n<3;n++){let s=n/3*Math.PI*2,r=q(.2,t,Math.cos(s)*.3,.3,Math.sin(s)*.3,.4,1.4,1);r.rotation.y=-s,i.add(r)}i.add(Tt(.15,.4,new wt({color:16754714}),0,.02,0)).rotation.x=Math.PI},envelope(i){let e=document.createElement("canvas");e.width=256,e.height=168;let t=e.getContext("2d");t.fillStyle="#fff6e0",t.fillRect(0,0,256,168),t.strokeStyle="#d8c8a0",t.lineWidth=4,t.beginPath(),t.moveTo(0,0),t.lineTo(128,96),t.lineTo(256,0),t.stroke(),t.beginPath(),t.moveTo(0,168),t.lineTo(96,80),t.moveTo(256,168),t.lineTo(160,80),t.stroke(),t.fillStyle="#e8304a",t.beginPath(),t.arc(128,96,22,0,Math.PI*2),t.fill(),t.fillStyle="#ffd0d8",t.font="900 28px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u2665",128,97);let n=new ri(e);n.colorSpace=Mt;let s=new le(new qe(1.05,.7,.07),[X(15787208),X(15787208),X(15787208),X(15787208),new Je({map:n,roughness:.7}),X(15260864)]);s.position.y=.5,s.rotation.x=-.12,s.castShadow=!0,i.add(s)},crow(i){let e=X(1842734,.25),t=X(2764880,.3),n=X(4868696,.4);i.add(q(.42,e,0,.62,0,.85,.8,1.35)),i.add(q(.3,e,0,1,.5)),i.add(q(.13,n,0,.93,.86,.9,.8,1.9));for(let r of[-1,1]){i.add(q(.075,X(16777215,.2),r*.2,1.07,.66)),i.add(q(.04,X(0,.1),r*.22,1.07,.71));let a=q(.3,t,r*.34,.62,-.05,.38,.85,1.5);a.rotation.z=-r*.25,i.add(a)}let s=Tt(.2,.75,t,0,.5,-.75,4);s.rotation.x=-1.7,s.scale.set(1,1,.3),i.add(s),mn(i,X(3816008),[-.1,.1],[.05],.3,.03)},lemon(i){let e=X(16771146,.4);i.add(q(.4,e,0,.4,0,1.25,.95,.95)),i.add(q(.1,e,.5,.4,0,1,.8,.8)),i.add(q(.1,e,-.5,.4,0,1,.8,.8));let t=q(.2,X(3844170),.1,.82,0,1.6,.25,.8);t.rotation.z=.4,i.add(t)},crescent(i){let e=new Je({color:16767050,roughness:.3,emissive:16758810,emissiveIntensity:.35}),t=new le(new bt(.5,.17,12,28,Math.PI*1.5),e);t.position.y=.65,t.rotation.z=Math.PI*.75,t.castShadow=!0,i.add(t),i.add(q(.12,e,.55,.95,0))},dove(i){let e=X(16775924,.5);i.add(q(.38,e,0,.5,0,.9,.9,1.25)),i.add(q(.22,e,0,.92,.3)),i.add(Tt(.06,.2,X(16753178),0,.9,.55)).rotation.x=Math.PI/2,Zt(i,.97,.45,.1,.035);for(let t of[-1,1]){let n=q(.28,e,t*.36,.78,-.05,.4,1.4,1.1);n.rotation.z=-t*.5,i.add(n)}i.add(Tt(.16,.5,e,0,.5,-.5)).rotation.x=-1.4},bed(i){i.add(new le(new qe(1.5,.25,.95),X(13141578)).translateY(.2)),i.add(new le(new qe(1.4,.2,.88),X(16774376)).translateY(.42)),i.add(new le(new qe(1,.16,.9),X(4892927)).translateX(.18).translateY(.55)),i.add(q(.28,X(16777215),-.5,.62,0,1.2,.5,1.4)),i.add(new le(new qe(.08,.7,.95),X(11037242)).translateX(-.75).translateY(.5))},soap(i){i.add(new le(new qe(.7,.28,.45),X(16751304,.3)).translateY(.2));for(let[e,t,n,s]of[[.2,.6,.1,.18],[-.15,.78,0,.13],[.35,.85,-.1,.1],[-.35,.55,.15,.1],[.05,1,.05,.09]])i.add(q(s,new Je({color:13627135,transparent:!0,opacity:.6,roughness:.05}),e,t,n))},bowl(i){let e=new le(new _t(.5,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new Je({color:4892927,roughness:.3,side:qt}));e.position.y=.55,i.add(e),i.add(xt(.5,.5,.03,X(16777215),0,.55,0)),i.add(xt(.46,.46,.03,X(16774360),0,.52,0));for(let n=0;n<7;n++)i.add(q(.09,X(15249482),Math.cos(n*2.1)*.25,.6,Math.sin(n*2.1)*.25,1,.7,1));let t=xt(.025,.025,.6,X(13158608),.35,.75,.1);t.rotation.z=-.6,i.add(t)},backpack(i){i.add(q(.45,X(16734794,.5),0,.5,0,1,1.1,.7)),i.add(q(.3,X(16758826,.5),0,.35,.28,1,.8,.5));for(let t of[-1,1])i.add(new le(new bt(.3,.04,8,14,Math.PI),X(3816010))).position.set(t*.35,.55,.25);let e=new le(new bt(.12,.03,8,14,Math.PI),X(3816010));e.position.set(0,1,0),i.add(e)},pot(i){i.add(xt(.45,.4,.55,X(13158612,.25),0,.35,0)),i.add(xt(.47,.47,.06,X(15263984,.25),0,.66,0)),i.add(q(.08,X(16734794),0,.74,0));for(let e of[-1,1])i.add(new le(new bt(.1,.03,6,10),X(3816010))).position.set(e*.5,.45,0);for(let[e,t]of[[.1,0],[-.12,.08],[.02,-.1]])i.add(q(.13,new Je({color:16777215,transparent:!0,opacity:.55}),e,1+e,t))},plate(i){i.add(xt(.55,.45,.07,X(16777215,.25),0,.2,0)),i.add(new le(new bt(.5,.03,8,24),X(4892927)).rotateX(Math.PI/2).translateZ(-.25)),i.add(q(.2,X(14195274),.12,.35,.05,1.1,.8,1)),i.add(q(.14,X(4892746),-.2,.32,-.08)),i.add(q(.1,X(15216682),-.15,.3,.22));let e=xt(.015,.015,.6,X(13158608),.7,.28,0);e.rotation.x=Math.PI/2,i.add(e)},tub(i){let e=X(16777215,.25);i.add(new le(new qe(1.5,.12,.8),e).translateY(.15));for(let[t,n,s,r]of[[1.5,.1,0,.4],[1.5,.1,0,-.4],[.1,.8,.75,0],[.1,.8,-.75,0]])i.add(new le(new qe(t,.55,n),e)).position.set(s,.4,r);i.add(new le(new qe(1.35,.04,.7),X(9099519,.1)).translateY(.5));for(let[t,n,s,r]of[[-.3,.62,.1,.16],[.1,.7,-.1,.2],[.4,.62,.15,.13],[-.1,.8,.05,.12]])i.add(q(r,new Je({color:16777215,transparent:!0,opacity:.85}),t,n,s));for(let t of[-.6,.6])i.add(xt(.06,.06,.12,X(13158608),t,.05,.3))},toothbrush(i){let e=new le(new qe(.13,1,.08),X(4892927));e.position.set(0,.55,0),e.rotation.z=.25,i.add(e);let t=new le(new qe(.2,.34,.1),X(4892927));t.position.set(-.22,1.06,0),t.rotation.z=.25,i.add(t);let n=new le(new qe(.17,.3,.1),X(16777215));n.position.set(-.24,1.07,.08),n.rotation.z=.25,i.add(n),i.add(q(.09,X(16777215),-.2,1.14,.12,1.5,.8,.8))}};function $l(i){let e=hd(i);if(e)return e;let t=pd[i]||Yt[i];if(!t)return sd(i);let n=new rt,s=new rt;return s.add=function(...a){return rt.prototype.add.apply(this,a),a[0]},t(s),I_.has(i)&&(s.rotation.y=-.85),s.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n.add(s),n.userData.id=i,n.userData.inner=s,n}var I_=new Set(["crow","fox","camel","monkey","bear","mouse","dog","giraffe","sheep","hen","duck","cow","dove"]),vx=Object.keys(pd);function Jl(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Kl=[{id:"rabbit",thing:"bunny",the:"\u0627\u0644\u0623\u0631\u0646\u0628",fem:!1,food:"carrot",also:["lettuce","grass"],age:4,groups:["meadow"]},{id:"cat",thing:"cat",the:"\u0627\u0644\u0642\u0637\u0629",fem:!0,food:"fish",also:[],age:4,groups:["meadow"]},{id:"dog",thing:"dog",the:"\u0627\u0644\u0643\u0644\u0628",fem:!1,food:"bone",also:["meat"],age:4,groups:["meadow"]},{id:"monkey",thing:"monkey",the:"\u0627\u0644\u0642\u0631\u062F",fem:!1,food:"banana",also:["berries"],age:4,groups:["jungle"]},{id:"cow",thing:"cow",the:"\u0627\u0644\u0628\u0642\u0631\u0629",fem:!0,food:"grass",also:["f_haypile"],age:4,groups:["farm"]},{id:"bear",thing:"bear",the:"\u0627\u0644\u062F\u0628",fem:!1,food:"honey",also:["fish","berries"],age:4,groups:["snow"]},{id:"mouse",thing:"mouse",the:"\u0627\u0644\u0641\u0627\u0631",fem:!1,food:"cheese",also:["seeds","corn"],age:5,groups:["meadow"]},{id:"chick",thing:"chick",the:"\u0627\u0644\u0643\u062A\u0643\u0648\u062A",fem:!1,food:"seeds",also:["corn"],age:4,groups:["farm"]},{id:"horse",thing:"horse",the:"\u0627\u0644\u062D\u0635\u0627\u0646",fem:!1,food:"f_haypile",also:["grass","carrot"],age:4,groups:["farm","desert"]},{id:"hen",thing:"hen",the:"\u0627\u0644\u0641\u0631\u062E\u0629",fem:!0,food:"corn",also:["seeds"],age:4,groups:["farm"]},{id:"donkey",thing:"f_donkey",the:"\u0627\u0644\u062D\u0645\u0627\u0631",fem:!1,food:"carrot",also:["grass","f_haypile","lettuce"],age:5,groups:["farm","desert"]},{id:"goat",thing:"f_goat",the:"\u0627\u0644\u0645\u0627\u0639\u0632",fem:!1,food:"grass",also:["f_haypile","lettuce","leaves"],age:5,groups:["farm"]},{id:"parrot",thing:"j_parrot",the:"\u0627\u0644\u0628\u0628\u063A\u0627\u0621",fem:!1,food:"seeds",also:["berries","corn"],age:5,groups:["jungle"]},{id:"sheep",thing:"f_sheep",the:"\u0627\u0644\u062E\u0631\u0648\u0641",fem:!1,food:"grass",also:["f_haypile","lettuce"],age:5,groups:["farm"]},{id:"rooster",thing:"f_rooster",the:"\u0627\u0644\u062F\u064A\u0643",fem:!1,food:"seeds",also:["corn"],age:5,groups:["farm"]},{id:"lion",thing:"j_lion",the:"\u0627\u0644\u0623\u0633\u062F",fem:!1,food:"meat",also:[],age:4,groups:["jungle"]},{id:"tiger",thing:"j_tiger",the:"\u0627\u0644\u0646\u0645\u0631",fem:!1,food:"meat",also:[],age:5,groups:["jungle"]},{id:"elephant",thing:"j_elephant",the:"\u0627\u0644\u0641\u064A\u0644",fem:!1,food:"leaves",also:["grass","banana","carrot"],age:4,groups:["jungle"]},{id:"giraffe",thing:"j_giraffe",the:"\u0627\u0644\u0632\u0631\u0627\u0641\u0629",fem:!0,food:"leaves",also:["grass"],age:5,groups:["jungle"]},{id:"zebra",thing:"j_zebra",the:"\u0627\u0644\u062D\u0645\u0627\u0631 \u0627\u0644\u0648\u062D\u0634\u064A",fem:!1,food:"grass",also:["f_haypile","leaves"],age:5,groups:["jungle"]},{id:"gorilla",thing:"j_gorilla",the:"\u0627\u0644\u063A\u0648\u0631\u064A\u0644\u0627",fem:!0,food:"leaves",also:["banana","berries"],age:6,groups:["jungle"]},{id:"chameleon",thing:"j_chameleon",the:"\u0627\u0644\u062D\u0631\u0628\u0627\u064A\u0629",fem:!0,food:"insect",also:["worm"],age:6,groups:["jungle"]},{id:"frog",thing:"j_frog",the:"\u0627\u0644\u0636\u0641\u062F\u0639",fem:!1,food:"worm",also:["insect"],age:6,groups:["jungle","meadow"]},{id:"toucan",thing:"j_toucan",the:"\u0627\u0644\u062A\u0648\u0643\u0627\u0646",fem:!1,food:"berries",also:["banana"],age:6,groups:["jungle"]},{id:"penguin",thing:"w_penguin",the:"\u0627\u0644\u0628\u0637\u0631\u064A\u0642",fem:!1,food:"fish",also:[],age:5,groups:["snow","underwater"]},{id:"seal",thing:"w_seal",the:"\u0627\u0644\u0641\u0642\u0645\u0629",fem:!0,food:"fish",also:[],age:5,groups:["snow","underwater"]},{id:"reindeer",thing:"w_reindeer",the:"\u0627\u0644\u0631\u0646\u0629",fem:!0,food:"grass",also:["leaves","carrot"],age:6,groups:["snow"]},{id:"fox",thing:"w_fox",the:"\u0627\u0644\u062B\u0639\u0644\u0628",fem:!1,food:"meat",also:["berries"],age:5,groups:["snow","desert"]},{id:"camel",thing:"d_camel",the:"\u0627\u0644\u062C\u0645\u0644",fem:!1,food:"grass",also:["leaves","f_haypile"],age:5,groups:["desert"]},{id:"hawk",thing:"d_hawk",the:"\u0627\u0644\u0635\u0642\u0631",fem:!1,food:"meat",also:[],age:6,groups:["desert"]},{id:"dolphin",thing:"u_dolphin",the:"\u0627\u0644\u062F\u0644\u0641\u064A\u0646",fem:!1,food:"fish",also:[],age:5,groups:["underwater"]},{id:"turtle",thing:"u_turtle",the:"\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629",fem:!0,food:"lettuce",also:["leaves","berries"],age:5,groups:["underwater","meadow"]},{id:"bee",thing:"bee",the:"\u0627\u0644\u0646\u062D\u0644\u0629",fem:!0,food:"flower",also:["honey"],age:5,groups:["meadow"]},{id:"butterfly",thing:"butterfly",the:"\u0627\u0644\u0641\u0631\u0627\u0634\u0629",fem:!0,food:"flower",also:[],age:5,groups:["meadow"]},{id:"goose",thing:"goose",the:"\u0627\u0644\u0648\u0632\u0629",fem:!0,food:"grass",also:["seeds","corn","lettuce"],age:4,groups:["farm"]},{id:"duck",thing:"mallard",the:"\u0627\u0644\u0628\u0637\u0629",fem:!0,food:"seeds",also:["corn","worm","lettuce"],age:4,groups:["farm","meadow"]},{id:"pigeon",thing:"pigeon",the:"\u0627\u0644\u062D\u0645\u0627\u0645\u0629",fem:!0,food:"seeds",also:["corn"],age:4,groups:["meadow"]},{id:"peacock",thing:"peacock",the:"\u0627\u0644\u0637\u0627\u0648\u0648\u0633",fem:!1,food:"seeds",also:["corn","berries","worm"],age:5,groups:["farm","jungle"]},{id:"shark",thing:"shark",the:"\u0627\u0644\u0642\u0631\u0634",fem:!1,food:"fish",also:["meat"],age:5,groups:["underwater"]},{id:"cheetah",thing:"cheetah",the:"\u0627\u0644\u0641\u0647\u062F",fem:!1,food:"meat",also:[],age:5,groups:["jungle"]},{id:"croc",thing:"croc",the:"\u0627\u0644\u062A\u0645\u0633\u0627\u062D",fem:!1,food:"fish",also:["meat"],age:5,groups:["jungle"]},{id:"iguana",thing:"iguana",the:"\u0627\u0644\u0633\u062D\u0644\u064A\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629",fem:!0,food:"leaves",also:["insect","lettuce","berries"],age:6,groups:["jungle","desert"]},{id:"mantis",thing:"mantis",the:"\u0641\u0631\u0633 \u0627\u0644\u0646\u0628\u064A",fem:!1,food:"insect",also:["worm"],age:6,groups:["meadow"]},{id:"caterpillar",thing:"caterpillar",the:"\u0627\u0644\u064A\u0631\u0642\u0629",fem:!0,food:"leaves",also:["lettuce"],age:5,groups:["meadow"]},{id:"trex",thing:"trex",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0627\u0644\u0645\u0641\u062A\u0631\u0633",fem:!1,food:"meat",also:[],age:5,groups:["dino"]},{id:"triceratops",thing:"triceratops",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0623\u0628\u0648 \u0642\u0631\u0648\u0646",fem:!1,food:"leaves",also:["grass"],age:5,groups:["dino"]},{id:"stego",thing:"stego",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0623\u0628\u0648 \u0634\u0648\u0643",fem:!1,food:"leaves",also:["grass"],age:6,groups:["dino"]},{id:"brachio",thing:"brachio",the:"\u0627\u0644\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0627\u0644\u0637\u0648\u064A\u0644",fem:!1,food:"leaves",also:["grass"],age:6,groups:["dino"]},{id:"owl",thing:"owl",the:"\u0627\u0644\u0628\u0648\u0645\u0629",fem:!0,food:"mouse",also:["meat","insect"],age:5,groups:["jungle"]},{id:"panda",thing:"panda",the:"\u0627\u0644\u0628\u0627\u0646\u062F\u0627",fem:!1,food:"leaves",also:["grass"],age:4,groups:["jungle"]},{id:"octopus",thing:"u_octopus",the:"\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637",fem:!1,food:"fish",also:["meat"],age:5,groups:["underwater"]},{id:"crab",thing:"u_crab",the:"\u0627\u0644\u0633\u0631\u0637\u0627\u0646",fem:!1,food:"fish",also:["worm"],age:5,groups:["underwater"]},{id:"whale",thing:"u_whale",the:"\u0627\u0644\u062D\u0648\u062A",fem:!1,food:"fish",also:[],age:4,groups:["underwater"]},{id:"bat",thing:"i_bat",the:"\u0627\u0644\u062E\u0641\u0627\u0634",fem:!1,food:"banana",also:["berries","insect"],age:6,groups:["jungle"]},{id:"eagle",thing:"i_eagle",the:"\u0627\u0644\u0646\u0633\u0631",fem:!1,food:"meat",also:["fish","mouse"],age:5,groups:["desert"]},{id:"ostrich",thing:"i_ostrich",the:"\u0627\u0644\u0646\u0639\u0627\u0645\u0629",fem:!0,food:"seeds",also:["leaves","grass","corn"],age:5,groups:["desert"]},{id:"swan",thing:"i_swan",the:"\u0627\u0644\u0628\u062C\u0639\u0629",fem:!0,food:"grass",also:["lettuce","seeds","leaves"],age:5,groups:["meadow","underwater"]},{id:"sparrow",thing:"i_sparrow",the:"\u0627\u0644\u0639\u0635\u0641\u0648\u0631\u0629",fem:!0,food:"seeds",also:["corn","worm","berries"],age:4,groups:["meadow"]},{id:"snail",thing:"i_snail",the:"\u0627\u0644\u062D\u0644\u0632\u0648\u0646\u0629",fem:!0,food:"lettuce",also:["leaves"],age:5,groups:["meadow"]},{id:"spider",thing:"i_spider",the:"\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A",fem:!1,food:"insect",also:["worm"],age:6,groups:["meadow"]},{id:"crow",thing:"crow",the:"\u0627\u0644\u063A\u0631\u0627\u0628",fem:!1,food:"seeds",also:["corn","meat","worm"],age:5,groups:["meadow"]},{id:"ladybug",thing:"ladybug",the:"\u0627\u0644\u062F\u0639\u0633\u0648\u0642\u0629",fem:!0,food:"insect",also:[],age:5,groups:["meadow"]},{id:"dragonfly",thing:"dragonfly",the:"\u0627\u0644\u064A\u0639\u0633\u0648\u0628",fem:!1,food:"insect",also:[],age:6,groups:["meadow"]}],M_={carrot:{the:"\u0627\u0644\u062C\u0632\u0631",thing:"carrot"},fish:{the:"\u0627\u0644\u0633\u0645\u0643",thing:"fish"},bone:{the:"\u0627\u0644\u0639\u0636\u0645\u0629",thing:"bone"},banana:{the:"\u0627\u0644\u0645\u0648\u0632",thing:"banana"},grass:{the:"\u0627\u0644\u062D\u0634\u064A\u0634",thing:"grass"},honey:{the:"\u0627\u0644\u0639\u0633\u0644",thing:"honey"},cheese:{the:"\u0627\u0644\u062C\u0628\u0646\u0629",thing:"cheese"},seeds:{the:"\u0627\u0644\u062D\u064E\u0628",thing:"seeds"},f_haypile:{the:"\u0627\u0644\u062A\u0628\u0646",thing:"f_haypile"},corn:{the:"\u0627\u0644\u062F\u0631\u0629",thing:"corn"},meat:{the:"\u0627\u0644\u0644\u062D\u0645\u0629",thing:"o_chicken"},leaves:{the:"\u0648\u0631\u0642 \u0627\u0644\u0634\u062C\u0631",thing:"j_leaf"},lettuce:{the:"\u0627\u0644\u062E\u0633",thing:"v_lettuce"},berries:{the:"\u0627\u0644\u062A\u0648\u062A",thing:"q_berries"},worm:{the:"\u0627\u0644\u062F\u0648\u062F\u0629",thing:"i_worm"},insect:{the:"\u0627\u0644\u062C\u0646\u062F\u0628",thing:"grasshopper"},flower:{the:"\u0627\u0644\u0632\u0647\u0631\u0629",thing:"t_flower"},mouse:{the:"\u0627\u0644\u0641\u0627\u0631",thing:"mouse"}};var w_=8,b_=8;function gd(i,e=null){let t=Kl.filter(s=>s.age<=Math.max(4,i));if(!e)return t;let n=t.filter(s=>s.groups.includes(e));return n.length>=b_?n:t}var S_=i=>[i.food,...i.also||[]],E_=i=>i<=5?3:4,md=i=>Kl.find(e=>e.id===i),jl=i=>`${i.the} ${i.fem?"\u062C\u0639\u0627\u0646\u0629":"\u062C\u0639\u0627\u0646"}! ${i.fem?"\u0647\u062A\u0627\u0643\u0644":"\u0647\u064A\u0627\u0643\u0644"} \u0625\u064A\u0647\u061F`,_d=i=>`${i.the} ${i.fem?"\u0628\u062A\u062D\u0628":"\u0628\u064A\u062D\u0628"} ${M_[i.food].the}`;function T_(i,e,t=null){let n=Jl(e),s=gd(i,t).map(o=>o.id),r=[],a=[];for(let o=0;o<w_;o++){a.length||(a=[...s].sort(()=>n()-.5));let l=a.findIndex(c=>c!==r[r.length-1]);l<0&&(l=0),r.push(a.splice(l,1)[0])}return r}function R_(i,e,t,n=null,s=null){let r=Jl(t),a=md(e),o=a.food,l=new Set(S_(a)),c=gd(i,n).map(u=>u.food).filter(u=>!l.has(u));for(let u of Kl)!l.has(u.food)&&!c.includes(u.food)&&c.push(u.food);let h=[...new Set(c)].sort(()=>r()-.5);s&&(h=h.sort((u,p)=>(s.get(u)||0)-(s.get(p)||0)));let d=h.slice(0,E_(i)-1);if(s)for(let u of[o,...d])s.set(u,(s.get(u)||0)+1);return[o,...d].sort(()=>r()-.5)}var Aa=class{constructor(e,t=Date.now()){this.age=e,this.seed=t,this.targets=T_(e,t),this.round=0,this.misses=0}get finished(){return this.round>=this.targets.length}get animal(){return this.finished?null:md(this.targets[this.round])}get plates(){return this.finished?[]:R_(this.age,this.animal.id,this.seed+this.round*41)}get hint(){return this.misses>=2?this.animal.food:null}tap(e){if(this.finished)return null;if(e!==this.animal.food)return this.misses++,{ok:!1,firstMiss:this.misses===1};let t={ok:!0,first:this.misses===0,animal:this.animal.id};return this.round++,this.misses=0,t.finished=this.finished,t}};var P_={title:["\u0623\u0637\u0639\u0645 \u0627\u0644\u062D\u064A\u0648\u0627\u0646","Feed the Animal"],no:["\u0645\u0634 \u062F\u0647... \u062C\u0631\u0651\u0628 \u062D\u0627\u062C\u0629 \u062A\u0627\u0646\u064A\u0629","Not that... try something else"],yes_m:["\u0623\u062D\u0633\u0646\u062A!","Well done!"],yes_f:["\u0623\u062D\u0633\u0646\u062A\u064A!","Well done!"],again:["\u0627\u0633\u0645\u0639 \u062A\u0627\u0646\u064A","Hear again"]},L_={...Hl,tempo:104,lead:"marimba",chords:[[43,[67,71,74]],[48,[67,72,76]],[50,[66,69,74]],[43,[67,71,74]],[45,[64,69,72]],[48,[67,72,76]],[50,[66,69,74]],[43,[67,71,79]]],melody:[[0,0,79],[0,4,83],[1,0,84],[1,4,79],[2,0,81],[2,4,78],[3,0,79],[3,4,74],[4,0,76],[4,4,81],[5,0,84],[5,4,88],[6,0,86],[6,4,81],[7,0,79]]},D_={bunny:2.5,cat:2.2,dog:2.2,monkey:2.3,cow:1.9,bear:2.1,mouse:2.7,chick:2.6},U_={carrot:1.2,fish:1.3,bone:1.2,banana:1.2,grass:1.1,honey:1.2,cheese:1.2,seeds:1.3},Ys=new E(0,0,-1.2),N_=new E(0,1.9,-.2),Ql=class{constructor(e,t,n){this.sh=new pa(e,t,n,{text:P_,theme:L_});let s=this.sh;this.st=new ma(s,{bg:12577023,ground:9097328,fov:40,box:[6.6,4.1],dir:[0,.5,1],target:[0,1.5,.3]}),this._meadow(),this.plates=[],this.animal=null,this.hearts=[],s.fonts().then(()=>s.titleCard(s.t("title"),"\u{1F430}\u{1F955}\u{1F431}\u{1F41F}",()=>this._start())),this.st.onFrame((r,a)=>this._frame(r,a))}_meadow(){let e=this.st.scene;td(e),this.clouds=nd(e,7,{y:10,z:-20}),this.st.onFrame(o=>this.clouds.userData.drift(o)),id(e,[{t:"tree",x:7.6,z:-3.4,s:4.4},{t:"tree",x:-10.5,z:-6,s:5.4},{t:"tree",x:11,z:-7,s:5},{t:"bush",x:-4.2,z:-3.3,s:.8},{t:"bush",x:3.8,z:-3.2,s:.9},{t:"rock",x:5.6,z:-1.4,s:.5},{t:"rock",x:-4.9,z:-.9,s:.4},...Array.from({length:30},(o,l)=>({t:"flower",x:-12+l*.85+Math.sin(l*1.7)*.5,z:-2.8+l*7%5*.55+Math.cos(l)*.3}))],0);let t=new le(new In(80,40),new Je({map:Xs(256,256,o=>{o.fillStyle="#8ad070",o.fillRect(0,0,256,256);for(let l=0;l<70;l++)o.fillStyle=l%2?"#7ac860":"#9ae080",o.beginPath(),o.ellipse(l*53%256,l*97%256,12,5,0,0,Math.PI*2),o.fill();for(let l=0;l<14;l++)o.fillStyle=["#ff7aa8","#ffe05a","#ffffff"][l%3],o.beginPath(),o.arc((l*41+9)%256,(l*73+20)%256,3,0,Math.PI*2),o.fill()},[8,4]),roughness:1}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t);for(let[o,l,c,h]of[[-9,-12,7,6998112],[8,-14,8,8050800],[0,-16,9,5945424]]){let d=new le(new _t(c,24,16,0,Math.PI*2,0,Math.PI/2),Mn(h,{roughness:1}));d.position.set(o,-.2,l),e.add(d)}let n=new le(new _t(1.2,20,16),new wt({color:16773226}));n.position.set(8,9,-14),e.add(n);for(let o=-8;o<=8;o++){let l=new le(new qe(.22,1.3,.15),Mn(16774368));l.position.set(o*1.1,.65,-4),l.castShadow=!0,e.add(l)}for(let o of[.5,1]){let l=new le(new qe(19.5,.14,.1),Mn(16774368));l.position.set(0,o,-4),e.add(l)}let s=new le(new yt(.35,.5,3,12),Mn(9067050));s.position.set(-6.2,1.5,-2.6),s.castShadow=!0,e.add(s);for(let[o,l,c]of[[-6.2,3.8,1.7],[-7.2,3.2,1.2],[-5.2,3.3,1.3]]){let h=new le(new _t(c,16,12),Mn(3844170));h.position.set(o,l,-2.6),h.castShadow=!0,e.add(h)}let r=new le(new ks(2.1,28),Mn(12118160,{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(Ys.x,.02,Ys.z),e.add(r);let a=new le(new qe(11,.22,2.4),new Je({map:Xs(128,128,o=>{for(let l=0;l<8;l++)for(let c=0;c<8;c++)o.fillStyle=(l+c)%2?"#ffffff":"#ff8a8a",o.fillRect(l*16,c*16,16,16)},[6,1.5]),roughness:.9}));a.position.set(0,1,2.6),a.castShadow=!0,a.receiveShadow=!0,e.add(a);for(let o of[-5,5]){let l=new le(new qe(.3,1,2),Mn(11037242));l.position.set(o,.5,2.6),e.add(l)}}_start(){this.play=new Aa(this.sh.age,Math.floor(Math.random()*1e9));let e=this.sh;e.clear(),this.lightDots=e.topBar(5,"\u{1F955}"),this.lightDots(0),this.sign=Ke("div",{class:"la-sign"}),this.signText=Ke("span"),this.sign.append(Ke("i",{},"\u{1F37D}\uFE0F"),this.signText,Ke("button",{class:"la-again","aria-label":e.t("again"),onclick:t=>{t.stopPropagation(),this._say()}},"\u{1F50A}")),e.layer.append(this.sign),e.sound.setMode("play"),this._ask()}_ask(){let e=this.play.animal;this.animal&&this.st.scene.remove(this.animal.g);for(let o of this.plates)this.st.scene.remove(o.g);this.plates=[];let t=new rt,n=$l(e.thing);n.scale.setScalar(D_[e.thing]||2.2),t.add(n);let s=new Ns(new rs({map:Xs(256,256,o=>{o.fillStyle="#ffffff",o.beginPath(),o.arc(128,118,92,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(70,215,18,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(92,188,10,0,Math.PI*2),o.fill(),o.fillStyle="#ff8a2a",o.font="900 130px Tajawal, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("\u061F",128,128)}),transparent:!0,depthWrite:!1}));s.scale.setScalar(1.7),s.position.set(1.7,3.6,0),t.add(s),t.position.copy(Ys),t.scale.setScalar(.001),this.st.add(t),this.animal={g:t,thing:n,bub:s,born:0,chew:0,shake:0,happy:0};let r=this.play.plates,a=r.length;r.forEach((o,l)=>{let c=new rt,h=new le(new yt(1.05,.8,.12,28),Mn(16777215,{roughness:.3}));h.position.y=.06;let d=new le(new bt(1,.07,8,28),Mn(16765498));d.rotation.x=Math.PI/2,d.position.y=.12;let u=$l(o);u.scale.setScalar(U_[o]||1.2),u.position.y=.1;let p=new le(new yt(1.25,1.25,.05,28),new wt({color:16773754,transparent:!0,opacity:0,depthWrite:!1}));p.position.y=.02;let m=new le(new _t(1.2,10,8),new wt({visible:!1}));m.position.y=.6,m.userData.id=o,c.add(h,d,u,p,m),c.position.set(((l+.5)/a-.5)*(a<=3?7:8.8),1.12,2.6),c.scale.setScalar(.001),this.st.add(c),this.plates.push({g:c,food:u,hit:m,glow:p,f:o,born:-.3-l*.1,wig:0,base:c.position.clone()})}),this.st.setPicks(this.plates,o=>this._tap(o)),this.st.focus=null,this.signText.textContent=jl(e),this.sign.classList.remove("pop"),this.sign.offsetWidth,this.sign.classList.add("pop"),this.st.mode="wait",this.sh.sound.play("pop"),this._say()}_say(){this.sh.sound.play("sparkle"),this.sh.speak(jl(this.play.animal))}_tap(e){if(this.st.mode!=="wait")return;let t=this.play.animal,n=this.play.tap(e),s=this.plates.find(r=>r.f===e);if(!n.ok){s.wig=.6,this.animal.shake=1,this.sh.sound.play("hmm"),this.sh.say(this.sh.t("no"),!1,1.8),n.firstMiss&&this.sh.round("nature",!1,t.id),setTimeout(()=>this.st.mode==="wait"&&this._say(),1100);return}n.first&&this.sh.round("nature",!0,t.id),this.st.mode="found",this.st.setPicks([],null);for(let r of this.plates)r!==s&&(r.gone=!0);this.fly={plate:s,from:s.g.position.clone().add(new E(0,.3,0)),t:0},this.lightDots(this.play.round),this.sh.sound.play("whoosh"),setTimeout(()=>{this.animal.chew=1.6,this.sh.sound.play("nibble"),setTimeout(()=>this.sh.sound.play("nibble"),350),setTimeout(()=>this.sh.sound.play("nibble"),700),this._hearts(),this.sh.sound.play("right"),this.sh.say(this.sh.t("yes"),!1,1.4),this.sh.speak(_d(t))},900),setTimeout(()=>{n.finished?(this.st.mode="end",this.sign.remove(),this.sh.sound.setMode("calm"),this.sh.finishCard(this.sh.t("title"),"\u{1F430}",()=>this._start())):this._ask()},4600)}_hearts(){for(let e=0;e<7;e++){let t=new Ns(new rs({map:F_(),transparent:!0,depthWrite:!1}));t.scale.setScalar(.55+e%3*.1),t.position.set(Ys.x+(Math.random()-.5)*1.6,2.2+Math.random()*.6,Ys.z+.3),t.userData={v:.9+Math.random()*.8,life:2.2,dx:(Math.random()-.5)*.5},this.st.add(t),this.hearts.push(t)}}_frame(e,t){let n=this.play&&this.st.mode==="wait"?this.play.hint:null,s=this.st.mode==="wait"?this.st.focusedId():null,r=this.animal;if(r){if(r.born<1){r.born+=e*2.4;let a=Math.min(1,r.born);r.g.scale.setScalar(Math.max(.001,1-Math.pow(1-a,3)+Math.sin(a*Math.PI)*.15)),r.g.position.y=Math.abs(Math.sin(a*Math.PI*2))*.5}else r.g.position.y=r.chew>0?Math.abs(Math.sin(t*14))*.08:Math.sin(t*1.8)*.02;r.chew=Math.max(0,r.chew-e),r.shake=Math.max(0,r.shake-e),r.thing.rotation.y=r.shake>0?Math.sin(r.shake*22)*.5:Math.sin(t*.9)*.08,r.bub.position.y=3.6+Math.sin(t*3)*.08,r.bub.visible=this.st.mode==="wait"}for(let a of this.plates){if(a.born<1){a.born+=e*3;let l=Math.max(0,Math.min(1,a.born));a.g.scale.setScalar(Math.max(.001,l<1?1-Math.pow(1-l,3)+Math.sin(l*Math.PI)*.12:1))}if(a.gone){a.g.scale.multiplyScalar(Math.max(0,1-e*3));continue}if(this.fly&&this.fly.plate===a)continue;let o=a.f===n||a.f===s;a.glow.material.opacity=o?.6+Math.sin(t*6)*.2:0,a.glow.material.color.setHex(a.f===s?8048895:16773754),a.food.rotation.y=Math.sin(t*1.3+a.base.x)*.3,a.food.position.y=.1+(o?Math.abs(Math.sin(t*6))*.12:0),a.wig>0?(a.wig-=e,a.g.rotation.z=Math.sin(a.wig*40)*.2*a.wig):a.g.rotation.z=0}if(this.fly){let a=this.fly;a.t+=e/.8;let o=Math.min(1,a.t);a.plate.g.position.lerpVectors(a.from,N_,o*o*(3-2*o)),a.plate.g.position.y+=Math.sin(o*Math.PI)*1.6,a.plate.g.scale.setScalar(Math.max(.05,1-.6*o)),a.plate.g.rotation.y=o*6,o>=1&&(this.st.scene.remove(a.plate.g),a.plate.gone=!0,this.fly=null)}for(let a=this.hearts.length-1;a>=0;a--){let o=this.hearts[a];o.userData.life-=e,o.position.y+=o.userData.v*e,o.position.x+=o.userData.dx*e,o.material.opacity=Math.max(0,Math.min(1,o.userData.life)),o.userData.life<=0&&(this.st.scene.remove(o),this.hearts.splice(a,1))}}pause(){this.sh.pause()}dispose(){this.st.dispose(),this.sh.dispose()}},ya=null;function F_(){return ya||(ya=Xs(128,128,i=>{i.fillStyle="#ff4a7a",i.beginPath(),i.moveTo(64,112),i.bezierCurveTo(0,70,8,16,46,18),i.bezierCurveTo(60,20,64,34,64,34),i.bezierCurveTo(64,34,68,20,82,18),i.bezierCurveTo(120,16,128,70,64,112),i.fill()}),ya)}var k_=`
.la-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #3aa84a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.4));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(20,60,20,.3);pointer-events:auto;max-width:94%}
.la-sign i{font-style:normal;font-size:1.4em}
.la-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.la-sign.pop{animation:la-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes la-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.la-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`,ec={start(i,e,t){document.getElementById("la-style")||document.head.append(Ke("style",{id:"la-style"},k_));let n=new Ql(i,e||{},t);return ec.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.LearnAnimals=ec;var Lx=ec;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
