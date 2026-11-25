(()=>{var Mc="170";var Iu=0,il=1,Mu=2;var xh=1,bu=2,vn=3,ln=0,Ue=1,In=2,kn=0,Li=1,sl=2,rl=3,al=4,Su=5,ii=100,Eu=101,wu=102,Tu=103,Vu=104,Ru=200,Pu=201,Lu=202,Uu=203,Ka=204,ja=205,Du=206,Nu=207,Fu=208,zu=209,Bu=210,Ou=211,ku=212,qu=213,Hu=214,Ja=0,Qa=1,$a=2,Fi=3,to=4,eo=5,no=6,io=7,Kr=0,Gu=1,Wu=2,qn=0,Xu=1,Yu=2,Zu=3,bc=4,Ku=5,ju=6,Ju=7;var Ch=300,zi=301,Bi=302,so=303,ro=304,jr=306,Hn=1e3,ai=1001,ao=1002,Be=1003,Qu=1004;var Os=1005;var on=1006,pa=1007;var oi=1008;var Sn=1009,yh=1010,vh=1011,xs=1012,Sc=1013,ci=1014,cn=1015,Ps=1016,Ec=1017,wc=1018,Oi=1020,_h=35902,Ih=1021,Mh=1022,Qe=1023,bh=1024,Sh=1025,Ui=1026,ki=1027,Tc=1028,Vc=1029,Eh=1030,Rc=1031;var Pc=1033,mr=33776,Ar=33777,xr=33778,Cr=33779,oo=35840,co=35841,lo=35842,ho=35843,uo=36196,fo=37492,po=37496,go=37808,mo=37809,Ao=37810,xo=37811,Co=37812,yo=37813,vo=37814,_o=37815,Io=37816,Mo=37817,bo=37818,So=37819,Eo=37820,wo=37821,yr=36492,To=36494,Vo=36495,wh=36283,Ro=36284,Po=36285,Lo=36286;var vr=2300,Uo=2301,ga=2302,ol=2400,cl=2401,ll=2402;var $u=3200,td=3201;var Lc=0,ed=1,On="",ce="srgb",ji="srgb-linear",Jr="linear",re="srgb";var mi=7680;var hl=519,nd=512,id=513,sd=514,Th=515,rd=516,ad=517,od=518,cd=519,ul=35044;var dl="300 es",Mn=2e3,_r=2001,Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ma=Math.PI/180,Do=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function ld(i,t){return(i%t+t)%t}function Aa(i,t,e){return(1-e)*i+e*t}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],I=s[1],C=s[4],x=s[7],L=s[2],S=s[5],w=s[8];return r[0]=a*A+o*I+c*L,r[3]=a*g+o*C+c*S,r[6]=a*p+o*x+c*w,r[1]=l*A+h*I+u*L,r[4]=l*g+h*C+u*S,r[7]=l*p+h*x+u*w,r[2]=d*A+f*I+m*L,r[5]=d*g+f*C+m*S,r[8]=d*p+f*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=f*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xa=new qt;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){let i=Cs("canvas");return i.style.display="block",i}var fl={};function ds(i){i in fl||(fl[i]=!0,console.warn(i))}function ud(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function dd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?Jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pl=[.64,.33,.3,.6,.15,.06],gl=[.2126,.7152,.0722],ml=[.3127,.329],Al=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[ji]:{primaries:pl,whitePoint:ml,transfer:Jr,toXYZ:Al,fromXYZ:xl,luminanceCoefficients:gl,workingColorSpaceConfig:{unpackColorSpace:ce},outputColorSpaceConfig:{drawingBufferColorSpace:ce}},[ce]:{primaries:pl,whitePoint:ml,transfer:re,toXYZ:Al,fromXYZ:xl,luminanceCoefficients:gl,outputColorSpaceConfig:{drawingBufferColorSpace:ce}}});var Ai,No=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Cs("canvas")),Ai.width=t.width,Ai.height=t.height;let n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pd=0,Ir=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ca(s[a].image)):r.push(Ca(s[a]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ca(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gd=0,Re=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ai,s=ai,r=on,a=oi,o=Qe,c=Sn,l=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ji(),this.name="",this.source=new Ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hn:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hn:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Ch;Re.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],A=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,x=(f+1)/2,L=(p+1)/2,S=(h+d)/4,w=(u+A)/4,P=(m+g)/4;return C>x&&C>L?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=w/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=P/r),this.set(n,s,r,e),this}let I=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(I)<.001&&(I=1),this.x=(g-m)/I,this.y=(u-A)/I,this.z=(d-h)/I,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends Gn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ir(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Fo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mr=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var De=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(u!==A||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*A,I=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){let L=Math.sqrt(C),S=Math.atan2(L,p*I);g=Math.sin(g*S)/L,o=Math.sin(o*S)/L}let x=o*I;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new R,Cl=new De,$e=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),qs.subVectors(this.max,rs),xi.subVectors(t.a,rs),Ci.subVectors(t.b,rs),yi.subVectors(t.c,rs),Un.subVectors(Ci,xi),Dn.subVectors(yi,Ci),jn.subVectors(xi,yi);let e=[0,-Un.z,Un.y,0,-Dn.z,Dn.y,0,-jn.z,jn.y,Un.z,0,-Un.x,Dn.z,0,-Dn.x,jn.z,0,-jn.x,-Un.y,Un.x,0,-Dn.y,Dn.x,0,-jn.y,jn.x,0];return!va(e,xi,Ci,yi,qs)||(e=[1,0,0,0,1,0,0,0,1],!va(e,xi,Ci,yi,qs))?!1:(Hs.crossVectors(Un,Dn),e=[Hs.x,Hs.y,Hs.z],va(e,xi,Ci,yi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gn=[new R,new R,new R,new R,new R,new R,new R,new R],Ke=new R,ks=new $e,xi=new R,Ci=new R,yi=new R,Un=new R,Dn=new R,jn=new R,rs=new R,qs=new R,Hs=new R,Jn=new R;function va(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=t.dot(Jn),l=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var md=new $e,as=new R,_a=new R,wn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);let e=as.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(_a)),this.expandByPoint(as.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new R,Ia=new R,Gs=new R,Nn=new R,Ma=new R,Ws=new R,ba=new R,ys=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ia.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Ia);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=Nn.dot(this.direction),c=-Nn.dot(Gs),l=Nn.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ia).addScaledVector(Gs,d),f}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Ma.subVectors(e,t),Ws.subVectors(n,t),ba.crossVectors(Ma,Ws);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);let c=o*this.direction.dot(Ws.crossVectors(Nn,Ws));if(c<0)return null;let l=o*this.direction.dot(Ma.cross(Nn));if(l<0||c+l>a)return null;let h=-o*Nn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,A,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-A*l,e[9]=-o*c,e[2]=A-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,A=l*u;e[0]=d+A*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=A+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,A=l*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+A,e[1]=c*u,e[5]=A*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+A,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,xd)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Fn.crossVectors(n,Fe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Fn.crossVectors(n,Fe)),Fn.normalize(),Xs.crossVectors(Fe,Fn),s[0]=Fn.x,s[4]=Xs.x,s[8]=Fe.x,s[1]=Fn.y,s[5]=Xs.y,s[9]=Fe.y,s[2]=Fn.z,s[6]=Xs.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],I=n[3],C=n[7],x=n[11],L=n[15],S=s[0],w=s[4],P=s[8],M=s[12],v=s[1],T=s[5],G=s[9],B=s[13],V=s[2],H=s[6],F=s[10],K=s[14],O=s[3],$=s[7],st=s[11],ft=s[15];return r[0]=a*S+o*v+c*V+l*O,r[4]=a*w+o*T+c*H+l*$,r[8]=a*P+o*G+c*F+l*st,r[12]=a*M+o*B+c*K+l*ft,r[1]=h*S+u*v+d*V+f*O,r[5]=h*w+u*T+d*H+f*$,r[9]=h*P+u*G+d*F+f*st,r[13]=h*M+u*B+d*K+f*ft,r[2]=m*S+A*v+g*V+p*O,r[6]=m*w+A*T+g*H+p*$,r[10]=m*P+A*G+g*F+p*st,r[14]=m*M+A*B+g*K+p*ft,r[3]=I*S+C*v+x*V+L*O,r[7]=I*w+C*T+x*H+L*$,r[11]=I*P+C*G+x*F+L*st,r[15]=I*M+C*B+x*K+L*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+A*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],I=u*g*l-A*d*l+A*c*f-o*g*f-u*c*p+o*d*p,C=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,x=h*A*l-m*u*l+m*o*f-a*A*f-h*o*p+a*u*p,L=m*u*c-h*A*c-m*o*d+a*A*d+h*o*g-a*u*g,S=e*I+n*C+s*x+r*L;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=I*w,t[1]=(A*d*r-u*g*r-A*s*f+n*g*f+u*s*p-n*d*p)*w,t[2]=(o*g*r-A*c*r+A*s*l-n*g*l-o*s*p+n*c*p)*w,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*w,t[4]=C*w,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*w,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*w,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*w,t[8]=x*w,t[9]=(m*u*r-h*A*r-m*n*f+e*A*f+h*n*p-e*u*p)*w,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*w,t[12]=L*w,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*w,t[14]=(m*o*s-a*A*s-m*n*c+e*A*c+a*n*g-e*o*g)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,A=a*h,g=a*u,p=o*u,I=c*l,C=c*h,x=c*u,L=n.x,S=n.y,w=n.z;return s[0]=(1-(A+p))*L,s[1]=(f+x)*L,s[2]=(m-C)*L,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(g+I)*S,s[7]=0,s[8]=(m+C)*w,s[9]=(g-I)*w,s[10]=(1-(d+A))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=vi.set(s[0],s[1],s[2]).length(),a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let l=1/r,h=1/a,u=1/o;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===Mn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===_r)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,m,A;if(o===Mn)m=(a+r)*u,A=-2*u;else if(o===_r)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vi=new R,je=new Yt,Ad=new R(0,0,0),xd=new R(1,1,1),Fn=new R,Xs=new R,Fe=new R,yl=new Yt,vl=new De,tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vl.setFromEuler(this),this.setFromQuaternion(vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cd=0,_l=new R,_i=new De,An=new Yt,Ys=new R,os=new R,yd=new R,vd=new De,Il=new R(1,0,0),Ml=new R(0,1,0),bl=new R(0,0,1),Sl={type:"added"},_d={type:"removed"},Ii={type:"childadded",child:null},Sa={type:"childremoved",child:null},Ie=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new tn,n=new De,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new qt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(os,Ys,this.up):An.lookAt(Ys,os,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(An),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new R(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new R,xn=new R,Ea=new R,Cn=new R,Mi=new R,bi=new R,El=new R,wa=new R,Ta=new R,Va=new R,Ra=new ge,Pa=new ge,La=new ge,si=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),xn.subVectors(n,e),Ea.subVectors(t,e);let a=Je.dot(Je),o=Je.dot(xn),c=Je.dot(Ea),l=xn.dot(xn),h=xn.dot(Ea),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ra.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ra.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ra,r.x),a.addScaledVector(Pa,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),xn.subVectors(t,e),Je.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Je.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),bi.subVectors(r,n),wa.subVectors(t,n);let c=Mi.dot(wa),l=bi.dot(wa);if(c<=0&&l<=0)return e.copy(n);Ta.subVectors(t,s);let h=Mi.dot(Ta),u=bi.dot(Ta);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Mi,a);Va.subVectors(t,r);let f=Mi.dot(Va),m=bi.dot(Va);if(m>=0&&f<=m)return e.copy(r);let A=f*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(bi,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return El.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(El,o);let p=1/(g+A+d);return a=A*p,o=d*p,e.copy(n).addScaledVector(Mi,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ld(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ua(a,r,t+1/3),this.g=Ua(a,r,t),this.b=Ua(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){let n=Rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return Kt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(we(Ee.r*255,0,255))*65536+Math.round(we(Ee.g*255,0,255))*256+Math.round(we(Ee.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ee.copy(this),e);let n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ce){Kt.fromWorkingColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,s=Ee.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Zs);let n=Aa(zn.h,Zs.h,e),s=Aa(zn.s,Zs.s,e),r=Aa(zn.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new Rt;Rt.NAMES=Rh;var Id=0,Oe=class extends Gn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ji(),this.name="",this.blending=Li,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sr=class extends Oe{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new R,Ks=new et,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ul,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ul&&(t.usage=this.usage),t}};var Er=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Md=0,Ge=new Yt,Da=new Ie,Si=new R,ze=new $e,cs=new $e,_e=new R,me=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?wr:Er)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(ze.min,cs.min),ze.expandByPoint(_e),_e.addVectors(ze.max,cs.max),ze.expandByPoint(_e)):(ze.expandByPoint(cs.min),ze.expandByPoint(cs.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_e.fromBufferAttribute(o,l),c&&(Si.fromBufferAttribute(t,l),_e.add(Si)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;let l=new R,h=new R,u=new R,d=new et,f=new et,m=new et,A=new R,g=new R;function p(P,M,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),o[P].add(A),o[M].add(A),o[v].add(A),c[P].add(g),c[M].add(g),c[v].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let P=0,M=I.length;P<M;++P){let v=I[P],T=v.start,G=v.count;for(let B=T,V=T+G;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let C=new R,x=new R,L=new R,S=new R;function w(P){L.fromBufferAttribute(s,P),S.copy(L);let M=o[P];C.copy(M),C.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(S,M);let T=x.dot(c[P])<0?-1:1;a.setXYZW(P,C.x,C.y,C.z,T)}for(let P=0,M=I.length;P<M;++P){let v=I[P],T=v.start,G=v.count;for(let B=T,V=T+G;B<V;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?f=c[A]*o.data.stride+o.offset:f=c[A]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wl=new Yt,Qn=new ys,js=new wn,Tl=new R,Js=new R,Qs=new R,$s=new R,Na=new R,tr=new R,Vl=new R,er=new R,Wt=class extends Ie{constructor(t=new me,e=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Na.fromBufferAttribute(u,t),a?tr.addScaledVector(Na,h):tr.addScaledVector(Na.sub(e),h))}e.add(tr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(js.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(js,Tl)===null||Qn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(wl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(wl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],I=Math.max(g.start,f.start),C=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=I,L=C;x<L;x+=3){let S=o.getX(x),w=o.getX(x+1),P=o.getX(x+2);s=nr(this,p,t,n,l,h,u,S,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let I=o.getX(g),C=o.getX(g+1),x=o.getX(g+2);s=nr(this,a,t,n,l,h,u,I,C,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],I=Math.max(g.start,f.start),C=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=I,L=C;x<L;x+=3){let S=x,w=x+1,P=x+2;s=nr(this,p,t,n,l,h,u,S,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let I=g,C=g+1,x=g+2;s=nr(this,a,t,n,l,h,u,I,C,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function bd(i,t,e,n,s,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ln,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(er);return l<e.near||l>e.far?null:{distance:l,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Js),i.getVertexPosition(c,Qs),i.getVertexPosition(l,$s);let h=bd(i,t,e,n,Js,Qs,$s,Vl);if(h){let u=new R;si.getBarycoord(Vl,Js,Qs,$s,u),s&&(h.uv=si.getInterpolatedAttribute(s,o,c,l,u,new et)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,c,l,u,new et)),a&&(h.normal=si.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};si.getNormal(Js,Qs,$s,d.normal),h.face=d,h.barycoord=u}return h}var ke=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(A,g,p,I,C,x,L,S,w,P,M){let v=x/w,T=L/P,G=x/2,B=L/2,V=S/2,H=w+1,F=P+1,K=0,O=0,$=new R;for(let st=0;st<F;st++){let ft=st*T-B;for(let Pt=0;Pt<H;Pt++){let Xt=Pt*v-G;$[A]=Xt*I,$[g]=ft*C,$[p]=V,l.push($.x,$.y,$.z),$[A]=0,$[g]=0,$[p]=S>0?1:-1,h.push($.x,$.y,$.z),u.push(Pt/w),u.push(1-st/P),K+=1}}for(let st=0;st<P;st++)for(let ft=0;ft<w;ft++){let Pt=d+ft+H*st,Xt=d+ft+H*(st+1),X=d+(ft+1)+H*(st+1),nt=d+(ft+1)+H*st;c.push(Pt,Xt,nt),c.push(Xt,X,nt),O+=6}o.addGroup(f,O,M),f+=O,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function Sd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Ed={clone:qi,merge:Te},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Oe{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Tr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bn=new R,Rl=new et,Pl=new et,Ve=class extends Tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Pl),e.subVectors(Pl,Rl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ei=-90,wi=1,Bo=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Ei,wi,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Ei,wi,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Ei,wi,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Ei,wi,t,e);o.layers=this.layers,this.add(o);let c=new Ve(Ei,wi,t,e);c.layers=this.layers,this.add(c);let l=new Ve(Ei,wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vr=class extends Re{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oo=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:kn});r.uniforms.tEquirect.value=e;let a=new Wt(s,r),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=on),new Bo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Fa=new R,Vd=new R,Rd=new qt,_n=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fa.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new wn,ir=new R,vs=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],I=s[13],C=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+a,d+h,g+m,x+I).normalize(),n[3].setComponents(c-a,d-h,g-m,x-I).normalize(),n[4].setComponents(c-o,d-u,g-A,x-C).normalize(),e===Mn)n[5].setComponents(c+o,d+u,g+A,x+C).normalize();else if(e===_r)n[5].setComponents(o,u,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],A=u[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let A=u[f];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var en=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let I=p*d-a;for(let C=0;C<l;C++){let x=C*u-r;m.push(x,-I,0),A.push(0,0,1),g.push(C/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let I=0;I<o;I++){let C=I+l*p,x=I+l*(p+1),L=I+1+l*(p+1),S=I+1+l*p;f.push(C,x,S),f.push(x,L,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
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
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
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
}`,Bp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,$p=`#define NORMAL
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
}`,tg=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,ag=`#define TOON
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
}`,og=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Ld,alphahash_pars_fragment:Ud,alphamap_fragment:Dd,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:zd,aomap_fragment:Bd,aomap_pars_fragment:Od,batching_pars_vertex:kd,batching_vertex:qd,begin_vertex:Hd,beginnormal_vertex:Gd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:$d,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Sf,envmap_vertex:mf,fog_vertex:Af,fog_pars_vertex:xf,fog_fragment:Cf,fog_pars_fragment:yf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:_f,lights_lambert_fragment:If,lights_lambert_pars_fragment:Mf,lights_pars_begin:bf,lights_toon_fragment:Ef,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:Uf,lights_fragment_end:Df,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Bf,map_fragment:Of,map_pars_fragment:kf,map_particle_fragment:qf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:Yf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Kf,morphtarget_vertex:jf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:$f,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:ap,opaque_fragment:op,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:mp,shadowmap_vertex:Ap,shadowmask_pars_fragment:xp,skinbase_vertex:Cp,skinning_pars_vertex:yp,skinning_vertex:vp,skinnormal_vertex:_p,specularmap_fragment:Ip,specularmap_pars_fragment:Mp,tonemapping_fragment:bp,tonemapping_pars_fragment:Sp,transmission_fragment:Ep,transmission_pars_fragment:wp,uv_pars_fragment:Tp,uv_pars_vertex:Vp,uv_vertex:Rp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Up,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:zp,depth_vert:Bp,depth_frag:Op,distanceRGBA_vert:kp,distanceRGBA_frag:qp,equirect_vert:Hp,equirect_frag:Gp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:Yp,meshbasic_frag:Zp,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:$p,meshnormal_frag:tg,meshphong_vert:eg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:ag,points_vert:og,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},ut={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},an={basic:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Te([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Te([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Te([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Te([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Te([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Te([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Te([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Te([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Te([ut.common,ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Te([ut.lights,ut.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};an.physical={uniforms:Te([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var sr={r:0,b:0,g:0},ti=new tn,fg=new Yt;function pg(i,t,e,n,s,r,a){let o=new Rt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(I){let C=I.isScene===!0?I.background:null;return C&&C.isTexture&&(C=(I.backgroundBlurriness>0?e:t).get(C)),C}function A(I){let C=!1,x=m(I);x===null?p(o,c):x&&x.isColor&&(p(x,1),C=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(I,C){let x=m(C);x&&(x.isCubeTexture||x.mapping===jr)?(h===void 0&&(h=new Wt(new ke(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:qi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(C.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(ti)),h.material.toneMapped=Kt.getTransfer(x.colorSpace)!==re,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Wt(new en(2,2),new hn({name:"BackgroundMaterial",uniforms:qi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null))}function p(I,C){I.getRGB(sr,Ph(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,C,a)}return{getClearColor:function(){return o},setClearColor:function(I,C=1){o.set(I),c=C,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,p(o,c)},render:A,addToRenderList:g}}function gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,T,G,B,V){let H=!1,F=u(B,G,T);r!==F&&(r=F,l(r.object)),H=f(v,B,G,V),H&&m(v,B,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(v,T,G,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,G){let B=G.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let H=V[T.id];H===void 0&&(H={},V[T.id]=H);let F=H[B];return F===void 0&&(F=d(c()),H[B]=F),F}function d(v){let T=[],G=[],B=[];for(let V=0;V<e;V++)T[V]=0,G[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:G,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,T,G,B){let V=r.attributes,H=T.attributes,F=0,K=G.getAttributes();for(let O in K)if(K[O].location>=0){let st=V[O],ft=H[O];if(ft===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;F++}return r.attributesNum!==F||r.index!==B}function m(v,T,G,B){let V={},H=T.attributes,F=0,K=G.getAttributes();for(let O in K)if(K[O].location>=0){let st=H[O];st===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(st=v.instanceColor));let ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),V[O]=ft,F++}r.attributes=V,r.attributesNum=F,r.index=B}function A(){let v=r.newAttributes;for(let T=0,G=v.length;T<G;T++)v[T]=0}function g(v){p(v,0)}function p(v,T){let G=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;G[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),V[v]!==T&&(i.vertexAttribDivisor(v,T),V[v]=T)}function I(){let v=r.newAttributes,T=r.enabledAttributes;for(let G=0,B=T.length;G<B;G++)T[G]!==v[G]&&(i.disableVertexAttribArray(G),T[G]=0)}function C(v,T,G,B,V,H,F){F===!0?i.vertexAttribIPointer(v,T,G,V,H):i.vertexAttribPointer(v,T,G,B,V,H)}function x(v,T,G,B){A();let V=B.attributes,H=G.getAttributes(),F=T.defaultAttributeValues;for(let K in H){let O=H[K];if(O.location>=0){let $=V[K];if($===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){let st=$.normalized,ft=$.itemSize,Pt=t.get($);if(Pt===void 0)continue;let Xt=Pt.buffer,X=Pt.type,nt=Pt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||$.gpuType===Sc;if($.isInterleavedBufferAttribute){let rt=$.data,Vt=rt.stride,Ft=$.offset;if(rt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<O.locationSize;Dt++)p(O.location+Dt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Dt=0;Dt<O.locationSize;Dt++)g(O.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Dt=0;Dt<O.locationSize;Dt++)C(O.location+Dt,ft/O.locationSize,X,st,Vt*nt,(Ft+ft/O.locationSize*Dt)*nt,xt)}else{if($.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,$.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let rt=0;rt<O.locationSize;rt++)g(O.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let rt=0;rt<O.locationSize;rt++)C(O.location+rt,ft/O.locationSize,X,st,ft*nt,ft/O.locationSize*rt*nt,xt)}}else if(F!==void 0){let st=F[K];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(O.location,st);break;case 3:i.vertexAttrib3fv(O.location,st);break;case 4:i.vertexAttrib4fv(O.location,st);break;default:i.vertexAttrib1fv(O.location,st)}}}}I()}function L(){P();for(let v in n){let T=n[v];for(let G in T){let B=T[G];for(let V in B)h(B[V].object),delete B[V];delete T[G]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;let T=n[v.id];for(let G in T){let B=T[G];for(let V in B)h(B[V].object),delete B[V];delete T[G]}delete n[v.id]}function w(v){for(let T in n){let G=n[T];if(G[v.id]===void 0)continue;let B=G[v.id];for(let V in B)h(B[V].object),delete B[V];delete G[v.id]}}function P(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:g,disableUnusedAttributes:I}}function mg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ag(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Qe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let P=w===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:I,maxVaryings:C,maxFragmentUniforms:x,vertexTextures:L,maxSamples:S}}function xg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let I=r?0:n,C=I*4,x=p.clippingState||null;c.value=x,x=h(m,d,C,f);for(let L=0;L!==C;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let p=f+A*4,I=d.matrixWorldInverse;o.getNormalMatrix(I),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,x=f;C!==A;++C,x+=4)a.copy(u[C]).applyMatrix4(I,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Cg(i){let t=new WeakMap;function e(a,o){return o===so?a.mapping=zi:o===ro&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===so||o===ro)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Oo(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rr=class extends Tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ri=4,Ll=[.125,.215,.35,.446,.526,.582],ri=20,za=new Rr,Ul=new Rt,Ba=null,Oa=0,ka=0,qa=!1,ni=(1+Math.sqrt(5))/2,Ti=1/ni,Dl=[new R(-ni,Ti,0),new R(ni,Ti,0),new R(-Ti,0,ni),new R(Ti,0,ni),new R(0,ni,-Ti),new R(0,ni,Ti),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,Oa,ka),this._renderer.xr.enabled=qa,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ps,format:Qe,colorSpace:ji,depthBuffer:!1},s=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=vg(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ul),h.toneMapping=qn,h.autoClear=!1;let f=new Sr({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new Wt(new ke,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(Ul),A=!0);for(let p=0;p<6;p++){let I=p%3;I===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):I===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let C=this._cubeSize;rr(s,I*C,p>2?C:0,C,C),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dl[(s-r-1)%Dl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Wt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ri;g>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ri}`);let p=[],I=0;for(let w=0;w<ri;++w){let P=w/A,M=Math.exp(-P*P/2);p.push(M),w===0?I+=M:w<g&&(I+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/I;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:C}=this;d.dTheta.value=m,d.mipInt.value=C-n;let x=this._sizeLods[s],L=3*x*(s>C-Ri?s-C+Ri:0),S=4*(this._cubeSize-x);rr(e,L,S,3*x,2*x),c.setRenderTarget(e),c.render(u,za)}};function yg(i){let t=[],e=[],n=[],s=i,r=i-Ri+1+Ll.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ri?c=Ll[a-i+Ri-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,A=3,g=2,p=1,I=new Float32Array(A*m*f),C=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,P=S>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];I.set(M,A*m*S),C.set(d,g*m*S);let v=[S,S,S,S,S,S];x.set(v,p*m*S)}let L=new me;L.setAttribute("position",new Ce(I,A)),L.setAttribute("uv",new Ce(C,g)),L.setAttribute("faceIndex",new Ce(x,p)),t.push(L),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nl(i,t,e){let n=new En(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vg(i,t,e){let n=new Float32Array(ri),s=new R(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Fl(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function zl(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function _g(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===so||c===ro,h=c===zi||c===Bi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ig(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,A=0;if(f!==null){let I=f.array;A=f.version;for(let C=0,x=I.length;C<x;C+=3){let L=I[C+0],S=I[C+1],w=I[C+2];d.push(L,S,S,w,w,L)}}else if(m!==void 0){let I=m.array;A=m.version;for(let C=0,x=I.length/3-1;C<x;C+=3){let L=C+0,S=C+1,w=C+2;d.push(L,S,S,w,w,L)}}else return;let g=new(Vh(d)?wr:Er)(d,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function bg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,A,0,m);let p=0;for(let I=0;I<m;I++)p+=f[I]*A[I];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Eg(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],C=0;f===!0&&(C=1),m===!0&&(C=2),A===!0&&(C=3);let x=o.attributes.position.count*C,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*L*4*u),w=new Mr(S,x,L,u);w.type=cn,w.needsUpdate=!0;let P=C*4;for(let v=0;v<u;v++){let T=g[v],G=p[v],B=I[v],V=x*L*4*v;for(let H=0;H<T.count;H++){let F=H*P;f===!0&&(s.fromBufferAttribute(T,H),S[V+F+0]=s.x,S[V+F+1]=s.y,S[V+F+2]=s.z,S[V+F+3]=0),m===!0&&(s.fromBufferAttribute(G,H),S[V+F+4]=s.x,S[V+F+5]=s.y,S[V+F+6]=s.z,S[V+F+7]=0),A===!0&&(s.fromBufferAttribute(B,H),S[V+F+8]=s.x,S[V+F+9]=s.y,S[V+F+10]=s.z,S[V+F+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new et(x,L)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let A=0;A<l.length;A++)f+=l[A];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Lr=class extends Re{constructor(t,e,n,s,r,a,o,c,l,h=Ui){if(h!==Ui&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ci),n===void 0&&h===ki&&(n=Oi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uh=new Re,Bl=new Lr(1,1),Dh=new Mr,Nh=new zo,Fh=new Vr,Ol=[],kl=[],ql=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),ve(e,n)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),ve(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),ve(e,n)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=Th,r=Bl):r=Uh,e.setTexture2D(t||r,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nh,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fh,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function Zg(i){switch(i){case 5126:return Tg;case 35664:return Vg;case 35665:return Rg;case 35666:return Pg;case 35674:return Lg;case 35675:return Ug;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return zg;case 35669:case 35673:return Bg;case 5125:return Og;case 36294:return kg;case 36295:return qg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Kg(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Jg(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Qg(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function am(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function cm(i,t){i.uniform3uiv(this.addr,t)}function lm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uh,r[a])}function um(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nh,r[a])}function dm(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fh,r[a])}function fm(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dh,r[a])}function pm(i){switch(i){case 5126:return Kg;case 35664:return jg;case 35665:return Jg;case 35666:return Qg;case 35674:return $g;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return cm;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var ko=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}},qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}},Ho=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function gm(i,t,e){let n=i.name,s=n.length;for(Ha.lastIndex=0;;){let r=Ha.exec(n),a=Ha.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Wl(e,l===void 0?new ko(o,i,t):new qo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ho(o),Wl(e,u)),e=u}}}var Ni=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);gm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mm=37297,Am=0;function xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Yl=new qt;function Cm(i){Kt._getMatrix(Yl,Kt.workingColorSpace,i);let t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Jr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xm(i.getShaderSource(t),a)}else return s}function ym(i,t){let e=Cm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,t){let e;switch(t){case Xu:e="Linear";break;case Yu:e="Reinhard";break;case Zu:e="Cineon";break;case bc:e="ACESFilmic";break;case ju:e="AgX";break;case Ju:e="Neutral";break;case Ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ar=new R;function _m(){Kt.getLuminanceCoefficients(ar);let i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Mm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fs(i){return i!==""}function Kl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace(Sm,wm)}var Em=new Map;function wm(i,t){let e=Gt[t];if(e===void 0){let n=Em.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}var Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(Tm,Vm)}function Vm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Um(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kr:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Wu:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Rm(e),l=Pm(e),h=Lm(e),u=Um(e),d=Dm(e),f=Im(e),m=Mm(r),A=s.createProgram(),g,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(g=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==qn?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ym("linearToOutputTexel",e.outputColorSpace),_m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=Go(a),a=Kl(a,e),a=jl(a,e),o=Go(o),o=Kl(o,e),o=jl(o,e),a=Jl(a),o=Jl(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=I+g+a,x=I+p+o,L=Xl(s,s.VERTEX_SHADER,C),S=Xl(s,s.FRAGMENT_SHADER,x);s.attachShader(A,L),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function w(T){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(S).trim(),H=!0,F=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,L,S);else{let K=Zl(s,L,"vertex"),O=Zl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+K+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||V==="")&&(F=!1);F&&(T.diagnostics={runnable:H,programLog:G,vertexShader:{log:B,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(L),s.deleteShader(S),P=new Ni(s,A),M=bm(s,A)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(A,mm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=S,this}var Fm=0,Wo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xo(t),e.set(t,n)),n}},Xo=class{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}};function zm(i,t,e,n,s,r,a){let o=new br,c=new Wo,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,v,T,G,B){let V=G.fog,H=B.geometry,F=M.isMeshStandardMaterial?G.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),O=K&&K.mapping===jr?K.image.height:null,$=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=st!==void 0?st.length:0,Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let Xt,X,nt,xt;if($){let se=an[$];Xt=se.vertexShader,X=se.fragmentShader}else Xt=M.vertexShader,X=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),xt=c.getFragmentShaderID(M);let rt=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),Ft=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,$t=!!M.map,J=!!M.matcap,at=!!K,E=!!M.aoMap,wt=!!M.lightMap,tt=!!M.bumpMap,vt=!!M.normalMap,ct=!!M.displacementMap,Lt=!!M.emissiveMap,Ct=!!M.metalnessMap,b=!!M.roughnessMap,y=M.anisotropy>0,z=M.clearcoat>0,Y=M.dispersion>0,Q=M.iridescence>0,Z=M.sheen>0,Mt=M.transmission>0,dt=y&&!!M.anisotropyMap,yt=z&&!!M.clearcoatMap,Jt=z&&!!M.clearcoatNormalMap,it=z&&!!M.clearcoatRoughnessMap,_t=Q&&!!M.iridescenceMap,Ut=Q&&!!M.iridescenceThicknessMap,Nt=Z&&!!M.sheenColorMap,It=Z&&!!M.sheenRoughnessMap,Qt=!!M.specularMap,Ht=!!M.specularColorMap,ae=!!M.specularIntensityMap,U=Mt&&!!M.transmissionMap,pt=Mt&&!!M.thicknessMap,W=!!M.gradientMap,j=!!M.alphaMap,At=M.alphaTest>0,gt=!!M.alphaHash,Ot=!!M.extensions,pe=qn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=i.toneMapping);let be={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:X,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ji,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:J,envMap:at,envMapMode:at&&K.mapping,envMapCubeUVHeight:O,aoMap:E,lightMap:wt,bumpMap:tt,normalMap:vt,displacementMap:d&&ct,emissiveMap:Lt,normalMapObjectSpace:vt&&M.normalMapType===ed,normalMapTangentSpace:vt&&M.normalMapType===Lc,metalnessMap:Ct,roughnessMap:b,anisotropy:y,anisotropyMap:dt,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:It,specularMap:Qt,specularColorMap:Ht,specularIntensityMap:ae,transmission:Mt,transmissionMap:U,thicknessMap:pt,gradientMap:W,opaque:M.transparent===!1&&M.blending===Li&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:At,alphaHash:gt,combine:M.combine,mapUv:$t&&A(M.map.channel),aoMapUv:E&&A(M.aoMap.channel),lightMapUv:wt&&A(M.lightMap.channel),bumpMapUv:tt&&A(M.bumpMap.channel),normalMapUv:vt&&A(M.normalMap.channel),displacementMapUv:ct&&A(M.displacementMap.channel),emissiveMapUv:Lt&&A(M.emissiveMap.channel),metalnessMapUv:Ct&&A(M.metalnessMap.channel),roughnessMapUv:b&&A(M.roughnessMap.channel),anisotropyMapUv:dt&&A(M.anisotropyMap.channel),clearcoatMapUv:yt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&A(M.sheenRoughnessMap.channel),specularMapUv:Qt&&A(M.specularMap.channel),specularColorMapUv:Ht&&A(M.specularColorMap.channel),specularIntensityMapUv:ae&&A(M.specularIntensityMap.channel),transmissionMapUv:U&&A(M.transmissionMap.channel),thicknessMapUv:pt&&A(M.thicknessMap.channel),alphaMapUv:j&&A(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(vt||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&($t||j),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Vt,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:Lt&&M.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&M.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)v.push(T),v.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(I(v,M),C(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function I(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function C(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let v=m[M.type],T;if(v){let G=an[v];T=Ed.clone(G.uniforms)}else T=M.uniforms;return T}function L(M,v){let T;for(let G=0,B=h.length;G<B;G++){let V=h[G];if(V.cacheKey===v){T=V,++T.usedTimes;break}}return T===void 0&&(T=new Nm(i,v,M,r),h.push(T)),T}function S(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:P}}function Bm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function th(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function o(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Om),n.length>1&&n.sort(d||$l),s.length>1&&s.sort(d||$l)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function km(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new th,i.set(n,[a])):s>=r.length?(a=new th,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Rt};break;case"SpotLight":e={position:new R,direction:new R,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Hm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i){let t=new qm,e=Hm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new Yt,a=new Yt;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,I=0,C=0,x=0,L=0,S=0,w=0;l.sort(Wm);for(let M=0,v=l.length;M<v;M++){let T=l[M],G=T.color,B=T.intensity,V=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(T.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(T.sh.coefficients[F],B);w++}else if(T.isDirectionalLight){let F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,O=e.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=T.shadow.matrix,I++}n.directional[f]=F,f++}else if(T.isSpotLight){let F=t.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(G).multiplyScalar(B),F.distance=V,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,n.spot[A]=F;let K=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,K.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[A]=K.matrix,T.castShadow){let O=e.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.spotShadow[A]=O,n.spotShadowMap[A]=H,x++}A++}else if(T.isRectAreaLight){let F=t.get(T);F.color.copy(G).multiplyScalar(B),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=F,g++}else if(T.isPointLight){let F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){let K=T.shadow,O=e.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=T.shadow.matrix,C++}n.point[m]=F,m++}else if(T.isHemisphereLight){let F=t.get(T);F.skyColor.copy(T.color).multiplyScalar(B),F.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==A||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==I||P.numPointShadows!==C||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=x+L-S,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,P.directionalLength=f,P.pointLength=m,P.spotLength=A,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=I,P.numPointShadows=C,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=w,n.version=Gm++)}function c(l,h){let u=0,d=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,I=l.length;p<I;p++){let C=l[p];if(C.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(C.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(C.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(C.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),d++}else if(C.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function eh(i){let t=new Xm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ym(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new eh(i),t.set(s,[o])):r>=a.length?(o=new eh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yo=class extends Oe{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zo=class extends Oe{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function jm(i,t,e){let n=new vs,s=new et,r=new et,a=new ge,o=new Yo({depthPacking:td}),c=new Zo,l={},h=e.maxTextureSize,u={[ln]:Ue,[Ue]:ln,[In]:In},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Zm,fragmentShader:Km}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new me;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Wt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(S,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),G=i.state;G.setBlending(kn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==vn&&this.type===vn,V=p===vn&&this.type!==vn;for(let H=0,F=S.length;H<F;H++){let K=S[H],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let $=O.getFrameExtents();if(s.multiply($),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,O.mapSize.y=r.y)),O.map===null||B===!0||V===!0){let ft=this.type!==vn?{minFilter:Be,magFilter:Be}:{};O.map!==null&&O.map.dispose(),O.map=new En(s.x,s.y,ft),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let st=O.getViewportCount();for(let ft=0;ft<st;ft++){let Pt=O.getViewport(ft);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),G.viewport(a),O.updateMatrices(K,ft),n=O.getFrustum(),x(w,P,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===vn&&I(O,P),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,v,T)};function I(S,w){let P=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new En(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,P,f,A,null)}function C(S,w,P,M){let v=null,T=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let G=v.uuid,B=w.uuid,V=l[G];V===void 0&&(V={},l[G]=V);let H=V[B];H===void 0&&(H=v.clone(),V[B]=H,w.addEventListener("dispose",L)),v=H}if(v.visible=w.visible,v.wireframe=w.wireframe,M===vn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let G=i.properties.get(v);G.light=P}return v}function x(S,w,P,M,v){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===vn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let B=t.update(S),V=S.material;if(Array.isArray(V)){let H=B.groups;for(let F=0,K=H.length;F<K;F++){let O=H[F],$=V[O.materialIndex];if($&&$.visible){let st=C(S,$,M,v);S.onBeforeShadow(i,S,w,P,B,st,O),i.renderBufferDirect(P,null,B,st,S,O),S.onAfterShadow(i,S,w,P,B,st,O)}}}else if(V.visible){let H=C(S,V,M,v);S.onBeforeShadow(i,S,w,P,B,H,null),i.renderBufferDirect(P,null,B,H,S,null),S.onAfterShadow(i,S,w,P,B,H,null)}}let G=S.children;for(let B=0,V=G.length;B<V;B++)x(G[B],w,P,M,v)}function L(S){S.target.removeEventListener("dispose",L);for(let P in l){let M=l[P],v=S.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Jm={[Ja]:Qa,[$a]:no,[to]:io,[Fi]:eo,[Qa]:Ja,[no]:$a,[io]:to,[eo]:Fi};function Qm(i,t){function e(){let U=!1,pt=new ge,W=null,j=new ge(0,0,0,0);return{setMask:function(At){W!==At&&!U&&(i.colorMask(At,At,At,At),W=At)},setLocked:function(At){U=At},setClear:function(At,gt,Ot,pe,be){be===!0&&(At*=pe,gt*=pe,Ot*=pe),pt.set(At,gt,Ot,pe),j.equals(pt)===!1&&(i.clearColor(At,gt,Ot,pe),j.copy(pt))},reset:function(){U=!1,W=null,j.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,W=null,j=null,At=null;return{setReversed:function(gt){if(pt!==gt){let Ot=t.get("EXT_clip_control");pt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let pe=At;At=null,this.setClear(pe)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?rt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(gt){W!==gt&&!U&&(i.depthMask(gt),W=gt)},setFunc:function(gt){if(pt&&(gt=Jm[gt]),j!==gt){switch(gt){case Ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){U=gt},setClear:function(gt){At!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),At=gt)},reset:function(){U=!1,W=null,j=null,At=null,pt=!1}}}function s(){let U=!1,pt=null,W=null,j=null,At=null,gt=null,Ot=null,pe=null,be=null;return{setTest:function(se){U||(se?rt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(se){pt!==se&&!U&&(i.stencilMask(se),pt=se)},setFunc:function(se,Ye,fn){(W!==se||j!==Ye||At!==fn)&&(i.stencilFunc(se,Ye,fn),W=se,j=Ye,At=fn)},setOp:function(se,Ye,fn){(gt!==se||Ot!==Ye||pe!==fn)&&(i.stencilOp(se,Ye,fn),gt=se,Ot=Ye,pe=fn)},setLocked:function(se){U=se},setClear:function(se){be!==se&&(i.clearStencil(se),be=se)},reset:function(){U=!1,pt=null,W=null,j=null,At=null,gt=null,Ot=null,pe=null,be=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,I=null,C=null,x=null,L=null,S=null,w=new Rt(0,0,0),P=0,M=!1,v=null,T=null,G=null,B=null,V=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=K>=1):O.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=K>=2);let $=null,st={},ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Xt=new ge().fromArray(ft),X=new ge().fromArray(Pt);function nt(U,pt,W,j){let At=new Uint8Array(4),gt=i.createTexture();i.bindTexture(U,gt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<W;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(pt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return gt}let xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Fi),tt(!1),vt(il),rt(i.CULL_FACE),E(kn);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Vt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ft(U,pt){return u[U]!==pt?(i.bindFramebuffer(U,pt),u[U]=pt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Dt(U,pt){let W=f,j=!1;if(U){W=d.get(pt),W===void 0&&(W=[],d.set(pt,W));let At=U.textures;if(W.length!==At.length||W[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ot=At.length;gt<Ot;gt++)W[gt]=i.COLOR_ATTACHMENT0+gt;W.length=At.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function $t(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let J={[ii]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};J[Tu]=i.MIN,J[Vu]=i.MAX;let at={[Ru]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function E(U,pt,W,j,At,gt,Ot,pe,be,se){if(U===kn){A===!0&&(Vt(i.BLEND),A=!1);return}if(A===!1&&(rt(i.BLEND),A=!0),U!==Su){if(U!==g||se!==M){if((p!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),p=ii,x=ii),se)switch(U){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}I=null,C=null,L=null,S=null,w.set(0,0,0),P=0,g=U,M=se}return}At=At||pt,gt=gt||W,Ot=Ot||j,(pt!==p||At!==x)&&(i.blendEquationSeparate(J[pt],J[At]),p=pt,x=At),(W!==I||j!==C||gt!==L||Ot!==S)&&(i.blendFuncSeparate(at[W],at[j],at[gt],at[Ot]),I=W,C=j,L=gt,S=Ot),(pe.equals(w)===!1||be!==P)&&(i.blendColor(pe.r,pe.g,pe.b,be),w.copy(pe),P=be),g=U,M=!1}function wt(U,pt){U.side===In?Vt(i.CULL_FACE):rt(i.CULL_FACE);let W=U.side===Ue;pt&&(W=!W),tt(W),U.blending===Li&&U.transparent===!1?E(kn):E(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function vt(U){U!==Iu?(rt(i.CULL_FACE),U!==T&&(U===il?i.cullFace(i.BACK):U===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),T=U}function ct(U){U!==G&&(F&&i.lineWidth(U),G=U)}function Lt(U,pt,W){U?(rt(i.POLYGON_OFFSET_FILL),(B!==pt||V!==W)&&(i.polygonOffset(pt,W),B=pt,V=W)):Vt(i.POLYGON_OFFSET_FILL)}function Ct(U){U?rt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+H-1),$!==U&&(i.activeTexture(U),$=U)}function y(U,pt,W){W===void 0&&($===null?W=i.TEXTURE0+H-1:W=$);let j=st[W];j===void 0&&(j={type:void 0,texture:void 0},st[W]=j),(j.type!==U||j.texture!==pt)&&($!==W&&(i.activeTexture(W),$=W),i.bindTexture(U,pt||xt[U]),j.type=U,j.texture=pt)}function z(){let U=st[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){Xt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Xt.copy(U))}function It(U){X.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Qt(U,pt){let W=l.get(pt);W===void 0&&(W=new WeakMap,l.set(pt,W));let j=W.get(U);j===void 0&&(j=i.getUniformBlockIndex(pt,U.name),W.set(U,j))}function Ht(U,pt){let j=l.get(pt).get(U);c.get(pt)!==j&&(i.uniformBlockBinding(pt,j,U.__bindingPointIndex),c.set(pt,j))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,st={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,I=null,C=null,x=null,L=null,S=null,w=new Rt(0,0,0),P=0,M=!1,v=null,T=null,G=null,B=null,V=null,Xt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Vt,bindFramebuffer:Ft,drawBuffers:Dt,useProgram:$t,setBlending:E,setMaterial:wt,setFlipSided:tt,setCullFace:vt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:Ct,activeTexture:b,bindTexture:y,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Ut,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:Nt,viewport:It,reset:ae}}function nh(i,t,e,n){let s=$m(n);switch(e){case Ih:return i*t;case bh:return i*t;case Sh:return i*t*2;case Tc:return i*t/s.components*s.byteLength;case Vc:return i*t/s.components*s.byteLength;case Eh:return i*t*2/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case Mh:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Pc:return i*t*4/s.components*s.byteLength;case mr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:case ho:return Math.max(i,16)*Math.max(t,8)/4;case oo:case lo:return Math.max(i,8)*Math.max(t,8)/2;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case To:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wh:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case Sn:case yh:return{byteLength:1,components:1};case xs:case vh:case Ps:return{byteLength:2,components:1};case Ec:case wc:return{byteLength:2,components:4};case ci:case Sc:case cn:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tA(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,y){return f?new OffscreenCanvas(b,y):Cs("canvas")}function A(b,y,z){let Y=1,Q=Ct(b);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let Z=Math.floor(Y*Q.width),Mt=Math.floor(Y*Q.height);u===void 0&&(u=m(Z,Mt));let dt=y?m(Z,Mt):u;return dt.width=Z,dt.height=Mt,dt.getContext("2d").drawImage(b,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Mt+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(b,y,z,Y,Q=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=y;if(y===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){let Mt=Q?Jr:Kt.getTransfer(Y);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Mt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(b,y){let z;return b?y===null||y===ci||y===Oi?z=i.DEPTH24_STENCIL8:y===cn?z=i.DEPTH32F_STENCIL8:y===xs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ci||y===Oi?z=i.DEPTH_COMPONENT24:y===cn?z=i.DEPTH_COMPONENT32F:y===xs&&(z=i.DEPTH_COMPONENT16),z}function L(b,y){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Be&&b.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function S(b){let y=b.target;y.removeEventListener("dispose",S),P(y),y.isVideoTexture&&h.delete(y)}function w(b){let y=b.target;y.removeEventListener("dispose",w),v(y)}function P(b){let y=n.get(b);if(y.__webglInit===void 0)return;let z=b.source,Y=d.get(z);if(Y){let Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(b),Object.keys(Y).length===0&&d.delete(z)}n.remove(b)}function M(b){let y=n.get(b);i.deleteTexture(y.__webglTexture);let z=b.source,Y=d.get(z);delete Y[y.__cacheKey],a.memory.textures--}function v(b){let y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=b.textures;for(let Y=0,Q=z.length;Y<Q;Y++){let Z=n.get(z[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(b)}let T=0;function G(){T=0}function B(){let b=T;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),T+=1,b}function V(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function H(b,y){let z=n.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,b,y);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function F(b,y){let z=n.get(b);if(b.version>0&&z.__version!==b.version){X(z,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function K(b,y){let z=n.get(b);if(b.version>0&&z.__version!==b.version){X(z,b,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function O(b,y){let z=n.get(b);if(b.version>0&&z.__version!==b.version){nt(z,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let $={[Hn]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},st={[Be]:i.NEAREST,[Qu]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ft={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[Th]:i.LEQUAL,[sd]:i.EQUAL,[od]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function Pt(b,y){if(y.type===cn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===pa||y.magFilter===Os||y.magFilter===oi||y.minFilter===on||y.minFilter===pa||y.minFilter===Os||y.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,$[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,$[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,$[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,st[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==Os&&y.minFilter!==oi||y.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xt(b,y){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",S));let Y=y.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let Z=V(y);if(Z!==b.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[Z].usedTimes++;let Mt=Q[b.__cacheKey];Mt!==void 0&&(Q[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&M(y)),b.__cacheKey=Z,b.__webglTexture=Q[Z].texture}return z}function X(b,y,z){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Xt(b,y),Z=y.source;e.bindTexture(Y,b.__webglTexture,i.TEXTURE0+z);let Mt=n.get(Z);if(Z.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let dt=Kt.getPrimaries(Kt.workingColorSpace),yt=y.colorSpace===On?null:Kt.getPrimaries(y.colorSpace),Jt=y.colorSpace===On||dt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let it=A(y.image,!1,s.maxTextureSize);it=Lt(y,it);let _t=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),Nt=C(y.internalFormat,_t,Ut,y.colorSpace,y.isVideoTexture);Pt(Y,y);let It,Qt=y.mipmaps,Ht=y.isVideoTexture!==!0,ae=Mt.__version===void 0||Q===!0,U=Z.dataReady,pt=L(y,it);if(y.isDepthTexture)Nt=x(y.format===ki,y.type),ae&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,_t,Ut,null));else if(y.isDataTexture)if(Qt.length>0){Ht&&ae&&e.texStorage2D(i.TEXTURE_2D,pt,Nt,Qt[0].width,Qt[0].height);for(let W=0,j=Qt.length;W<j;W++)It=Qt[W],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,_t,Ut,It.data):e.texImage2D(i.TEXTURE_2D,W,Nt,It.width,It.height,0,_t,Ut,It.data);y.generateMipmaps=!1}else Ht?(ae&&e.texStorage2D(i.TEXTURE_2D,pt,Nt,it.width,it.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,_t,Ut,it.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,_t,Ut,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Nt,Qt[0].width,Qt[0].height,it.depth);for(let W=0,j=Qt.length;W<j;W++)if(It=Qt[W],y.format!==Qe)if(_t!==null)if(Ht){if(U)if(y.layerUpdates.size>0){let At=nh(It.width,It.height,y.format,y.type);for(let gt of y.layerUpdates){let Ot=It.data.subarray(gt*At/It.data.BYTES_PER_ELEMENT,(gt+1)*At/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,gt,It.width,It.height,1,_t,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,it.depth,_t,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Nt,It.width,It.height,it.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,it.depth,_t,Ut,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Nt,It.width,It.height,it.depth,0,_t,Ut,It.data)}else{Ht&&ae&&e.texStorage2D(i.TEXTURE_2D,pt,Nt,Qt[0].width,Qt[0].height);for(let W=0,j=Qt.length;W<j;W++)It=Qt[W],y.format!==Qe?_t!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,_t,It.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Nt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,_t,Ut,It.data):e.texImage2D(i.TEXTURE_2D,W,Nt,It.width,It.height,0,_t,Ut,It.data)}else if(y.isDataArrayTexture)if(Ht){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Nt,it.width,it.height,it.depth),U)if(y.layerUpdates.size>0){let W=nh(it.width,it.height,y.format,y.type);for(let j of y.layerUpdates){let At=it.data.subarray(j*W/it.data.BYTES_PER_ELEMENT,(j+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,_t,Ut,At)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Ut,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,_t,Ut,it.data);else if(y.isData3DTexture)Ht?(ae&&e.texStorage3D(i.TEXTURE_3D,pt,Nt,it.width,it.height,it.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Ut,it.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,_t,Ut,it.data);else if(y.isFramebufferTexture){if(ae)if(Ht)e.texStorage2D(i.TEXTURE_2D,pt,Nt,it.width,it.height);else{let W=it.width,j=it.height;for(let At=0;At<pt;At++)e.texImage2D(i.TEXTURE_2D,At,Nt,W,j,0,_t,Ut,null),W>>=1,j>>=1}}else if(Qt.length>0){if(Ht&&ae){let W=Ct(Qt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Nt,W.width,W.height)}for(let W=0,j=Qt.length;W<j;W++)It=Qt[W],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t,Ut,It):e.texImage2D(i.TEXTURE_2D,W,Nt,_t,Ut,It);y.generateMipmaps=!1}else if(Ht){if(ae){let W=Ct(it);e.texStorage2D(i.TEXTURE_2D,pt,Nt,W.width,W.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ut,it)}else e.texImage2D(i.TEXTURE_2D,0,Nt,_t,Ut,it);g(y)&&p(Y),Mt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function nt(b,y,z){if(y.image.length!==6)return;let Y=Xt(b,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);let Z=n.get(Q);if(Q.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);let Mt=Kt.getPrimaries(Kt.workingColorSpace),dt=y.colorSpace===On?null:Kt.getPrimaries(y.colorSpace),yt=y.colorSpace===On||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!Jt&&!it?_t[j]=A(y.image[j],!0,s.maxCubemapSize):_t[j]=it?y.image[j].image:y.image[j],_t[j]=Lt(y,_t[j]);let Ut=_t[0],Nt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),Qt=C(y.internalFormat,Nt,It,y.colorSpace),Ht=y.isVideoTexture!==!0,ae=Z.__version===void 0||Y===!0,U=Q.dataReady,pt=L(y,Ut);Pt(i.TEXTURE_CUBE_MAP,y);let W;if(Jt){Ht&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Qt,Ut.width,Ut.height);for(let j=0;j<6;j++){W=_t[j].mipmaps;for(let At=0;At<W.length;At++){let gt=W[At];y.format!==Qe?Nt!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,Qt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,gt.width,gt.height,Nt,It,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,Qt,gt.width,gt.height,0,Nt,It,gt.data)}}}else{if(W=y.mipmaps,Ht&&ae){W.length>0&&pt++;let j=Ct(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Qt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,Nt,It,_t[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qt,_t[j].width,_t[j].height,0,Nt,It,_t[j].data);for(let At=0;At<W.length;At++){let Ot=W[At].image[j].image;Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Ot.width,Ot.height,Nt,It,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,Qt,Ot.width,Ot.height,0,Nt,It,Ot.data)}}else{Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,It,_t[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qt,Nt,It,_t[j]);for(let At=0;At<W.length;At++){let gt=W[At];Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Nt,It,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,Qt,Nt,It,gt.image[j])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function xt(b,y,z,Y,Q,Z){let Mt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),yt=C(z.internalFormat,Mt,dt,z.colorSpace),Jt=n.get(y),it=n.get(z);if(it.__renderTarget=y,!Jt.__hasExternalTextures){let _t=Math.max(1,y.width>>Z),Ut=Math.max(1,y.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,yt,_t,Ut,y.depth,0,Mt,dt,null):e.texImage2D(Q,Z,yt,_t,Ut,0,Mt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,it.__webglTexture,0,tt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){let Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=x(y.stencilBuffer,Q),Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=tt(y);vt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Z,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,b)}else{let Y=y.textures;for(let Q=0;Q<Y.length;Q++){let Z=Y[Q],Mt=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),yt=C(Z.internalFormat,Mt,dt,Z.colorSpace),Jt=tt(y);z&&vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,yt,y.width,y.height):vt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,yt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,yt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let Q=Y.__webglTexture,Z=tt(y);if(y.depthTexture.format===Ui)vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===ki)vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(b){let y=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Vt(y.__webglFramebuffer,b)}else if(z){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(y.__webglDepthbuffer[Y],b,!1);else{let Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),rt(y.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,y,z){let Y=n.get(b);y!==void 0&&xt(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ft(b)}function $t(b){let y=b.texture,z=n.get(b),Y=n.get(y);b.addEventListener("dispose",w);let Q=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)z.__webglFramebuffer[dt][yt]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let dt=0,yt=Q.length;dt<yt;dt++){let Jt=n.get(Q[dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&vt(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let yt=Q[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Jt=r.convert(yt.format,yt.colorSpace),it=r.convert(yt.type),_t=C(yt.internalFormat,Jt,it,yt.colorSpace,b.isXRRenderTarget===!0),Ut=tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,_t,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(z.__webglFramebuffer[dt][yt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else xt(z.__webglFramebuffer[dt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let dt=0,yt=Q.length;dt<yt;dt++){let Jt=Q[dt],it=n.get(Jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Pt(i.TEXTURE_2D,Jt),xt(z.__webglFramebuffer,b,Jt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(dt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Pt(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(z.__webglFramebuffer[yt],b,y,i.COLOR_ATTACHMENT0,dt,yt);else xt(z.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,dt,0);g(y)&&p(dt),e.unbindTexture()}b.depthBuffer&&Ft(b)}function J(b){let y=b.textures;for(let z=0,Y=y.length;z<Y;z++){let Q=y[z];if(g(Q)){let Z=I(b),Mt=n.get(Q).__webglTexture;e.bindTexture(Z,Mt),p(Z),e.unbindTexture()}}}let at=[],E=[];function wt(b){if(b.samples>0){if(vt(b)===!1){let y=b.textures,z=b.width,Y=b.height,Q=i.COLOR_BUFFER_BIT,Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(b),dt=y.length>1;if(dt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);let Jt=n.get(y[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,i.NEAREST),c===!0&&(at.length=0,E.length=0,at.push(i.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(at.push(Z),E.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);let Jt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function tt(b){return Math.min(s.maxSamples,b.samples)}function vt(b){let y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(b){let y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Lt(b,y){let z=b.colorSpace,Y=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==ji&&z!==On&&(Kt.getTransfer(z)===re?(Y!==Qe||Q!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ct(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=Dt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=vt}function eA(i,t){function e(n,s=On){let r,a=Kt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.BYTE;if(n===vh)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Mh)return i.RGB;if(n===Qe)return i.RGBA;if(n===bh)return i.LUMINANCE;if(n===Sh)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Tc)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===Eh)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Pc)return i.RGBA_INTEGER;if(n===mr||n===Ar||n===xr||n===Cr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===co||n===lo||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===mo||n===Ao||n===xo||n===Co||n===yo||n===vo||n===_o||n===Io||n===Mo||n===bo||n===So||n===Eo||n===wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===To||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===Ro||n===Po||n===Lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ko=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},nA={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(l,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nA)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`,jo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:iA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jo=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,A=new jo,g=e.getContextAttributes(),p=null,I=null,C=[],x=[],L=new et,S=null,w=new Ve;w.viewport=new ge;let P=new Ve;P.viewport=new ge;let M=[w,P],v=new Ko,T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=C[X];return nt===void 0&&(nt=new ps,C[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=C[X];return nt===void 0&&(nt=new ps,C[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=C[X];return nt===void 0&&(nt=new ps,C[X]=nt),nt.getHandSpace()};function B(X){let nt=x.indexOf(X.inputSource);if(nt===-1)return;let xt=C[nt];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",H);for(let X=0;X<C.length;X++){let nt=x[X];nt!==null&&(x[X]=null,C[X].disconnect(nt))}T=null,G=null,A.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,I=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),I=new En(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,xt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?ki:Ui,xt=g.stencil?Oi:ci);let Vt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),I=new En(d.textureWidth,d.textureHeight,{format:Qe,type:Sn,depthTexture:new Lr(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function H(X){for(let nt=0;nt<X.removed.length;nt++){let xt=X.removed[nt],rt=x.indexOf(xt);rt>=0&&(x[rt]=null,C[rt].disconnect(xt))}for(let nt=0;nt<X.added.length;nt++){let xt=X.added[nt],rt=x.indexOf(xt);if(rt===-1){for(let Ft=0;Ft<C.length;Ft++)if(Ft>=x.length){x.push(xt),rt=Ft;break}else if(x[Ft]===null){x[Ft]=xt,rt=Ft;break}if(rt===-1)break}let Vt=C[rt];Vt&&Vt.connect(xt)}}let F=new R,K=new R;function O(X,nt,xt){F.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);let rt=F.distanceTo(K),Vt=nt.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,Dt=Vt[14]/(Vt[10]-1),$t=Vt[14]/(Vt[10]+1),J=(Vt[9]+1)/Vt[5],at=(Vt[9]-1)/Vt[5],E=(Vt[8]-1)/Vt[0],wt=(Ft[8]+1)/Ft[0],tt=Dt*E,vt=Dt*wt,ct=rt/(-E+wt),Lt=ct*-E;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Lt),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Vt[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Ct=Dt+ct,b=$t+ct,y=tt-Lt,z=vt+(rt-Lt),Y=J*$t/b*Ct,Q=at*$t/b*Ct;X.projectionMatrix.makePerspective(y,z,Y,Q,Ct,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let nt=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),v.near=P.near=w.near=nt,v.far=P.far=w.far=xt,(T!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,G=v.far),w.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,v.layers.mask=w.layers.mask|P.layers.mask;let rt=X.parent,Vt=v.cameras;$(v,rt);for(let Ft=0;Ft<Vt.length;Ft++)$(Vt[Ft],rt);Vt.length===2?O(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),st(X,v,rt)};function st(X,nt,xt){xt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Do*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(v)};let ft=null;function Pt(X,nt){if(h=nt.getViewerPose(l||a),m=nt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(I,f.framebuffer),t.setRenderTarget(I));let rt=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Ft=0;Ft<xt.length;Ft++){let Dt=xt[Ft],$t=null;if(f!==null)$t=f.getViewport(Dt);else{let at=u.getViewSubImage(d,Dt);$t=at.viewport,Ft===0&&(t.setRenderTargetTextures(I,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(I))}let J=M[Ft];J===void 0&&(J=new Ve,J.layers.enable(Ft),J.viewport=new ge,M[Ft]=J),J.matrix.fromArray(Dt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Dt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($t.x,$t.y,$t.width,$t.height),Ft===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(J)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let Ft=u.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&A.init(t,Ft,s.renderState)}}for(let xt=0;xt<C.length;xt++){let rt=x[xt],Vt=C[xt];rt!==null&&Vt!==void 0&&Vt.update(rt,nt,l||a)}ft&&ft(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let Xt=new Lh;Xt.setAnimationLoop(Pt),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}},ei=new tn,rA=new Yt;function aA(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,I,C,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,I,C):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let I=t.get(p),C=I.envMap,x=I.envMapRotation;C&&(g.envMap.value=C,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),g.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(ei)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,I,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*I,g.scale.value=C*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,I){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let I=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oA(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,C){let x=C.program;n.uniformBlockBinding(I,x)}function l(I,C){let x=s[I.id];x===void 0&&(m(I),x=h(I),s[I.id]=x,I.addEventListener("dispose",g));let L=C.program;n.updateUBOMapping(I,L);let S=t.render.frame;r[I.id]!==S&&(d(I),r[I.id]=S)}function h(I){let C=u();I.__bindingPointIndex=C;let x=i.createBuffer(),L=I.__size,S=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,x),x}function u(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){let C=s[I.id],x=I.uniforms,L=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let S=0,w=x.length;S<w;S++){let P=Array.isArray(x[S])?x[S]:[x[S]];for(let M=0,v=P.length;M<v;M++){let T=P[M];if(f(T,S,M,L)===!0){let G=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],V=0;for(let H=0;H<B.length;H++){let F=B[H],K=A(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,G+V,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(I,C,x,L){let S=I.value,w=C+"_"+x;if(L[w]===void 0)return typeof S=="number"||typeof S=="boolean"?L[w]=S:L[w]=S.clone(),!0;{let P=L[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return L[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(I){let C=I.uniforms,x=0,L=16;for(let w=0,P=C.length;w<P;w++){let M=Array.isArray(C[w])?C[w]:[C[w]];for(let v=0,T=M.length;v<T;v++){let G=M[v],B=Array.isArray(G.value)?G.value:[G.value];for(let V=0,H=B.length;V<H;V++){let F=B[V],K=A(F),O=x%L,$=O%K.boundary,st=O+$;x+=$,st!==0&&L-st<K.storage&&(x+=L-st),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=K.storage}}}let S=x%L;return S>0&&(x+=L-S),I.__size=x,I.__cache={},this}function A(I){let C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function g(I){let C=I.target;C.removeEventListener("dispose",g);let x=a.indexOf(C.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function p(){for(let I in s)i.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ur=class{constructor(t={}){let{canvas:e=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,I=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this.toneMapping=qn,this.toneMappingExposure=1;let x=this,L=!1,S=0,w=0,P=null,M=-1,v=null,T=new ge,G=new ge,B=null,V=new Rt(0),H=0,F=e.width,K=e.height,O=1,$=null,st=null,ft=new ge(0,0,F,K),Pt=new ge(0,0,F,K),Xt=!1,X=new vs,nt=!1,xt=!1,rt=new Yt,Vt=new Yt,Ft=new R,Dt=new ge,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function at(){return P===null?O:1}let E=n;function wt(_,D){return e.getContext(_,D)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",gt,!1),E===null){let D="webgl2";if(E=wt(D,_),E===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let tt,vt,ct,Lt,Ct,b,y,z,Y,Q,Z,Mt,dt,yt,Jt,it,_t,Ut,Nt,It,Qt,Ht,ae,U;function pt(){tt=new Ig(E),tt.init(),Ht=new eA(E,tt),vt=new Ag(E,tt,t,Ht),ct=new Qm(E,tt),vt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Lt=new Sg(E),Ct=new Bm,b=new tA(E,tt,ct,Ct,vt,Ht,Lt),y=new Cg(x),z=new _g(x),Y=new Pd(E),ae=new gg(E,Y),Q=new Mg(E,Y,Lt,ae),Z=new wg(E,Q,Y,Lt),Nt=new Eg(E,vt,b),it=new xg(Ct),Mt=new zm(x,y,z,tt,vt,ae,it),dt=new aA(x,Ct),yt=new km,Jt=new Ym(tt),Ut=new pg(x,y,z,ct,Z,f,c),_t=new jm(x,Z,vt),U=new oA(E,Lt,vt,ct),It=new mg(E,tt,Lt),Qt=new bg(E,tt,Lt),Lt.programs=Mt.programs,x.capabilities=vt,x.extensions=tt,x.properties=Ct,x.renderLists=yt,x.shadowMap=_t,x.state=ct,x.info=Lt}pt();let W=new Jo(x,E);this.xr=W,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let _=tt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=tt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(_){_!==void 0&&(O=_,this.setSize(F,K,!1))},this.getSize=function(_){return _.set(F,K)},this.setSize=function(_,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=_,K=D,e.width=Math.floor(_*O),e.height=Math.floor(D*O),k===!0&&(e.style.width=_+"px",e.style.height=D+"px"),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(F*O,K*O).floor()},this.setDrawingBufferSize=function(_,D,k){F=_,K=D,O=k,e.width=Math.floor(_*k),e.height=Math.floor(D*k),this.setViewport(0,0,_,D)},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(ft)},this.setViewport=function(_,D,k,q){_.isVector4?ft.set(_.x,_.y,_.z,_.w):ft.set(_,D,k,q),ct.viewport(T.copy(ft).multiplyScalar(O).round())},this.getScissor=function(_){return _.copy(Pt)},this.setScissor=function(_,D,k,q){_.isVector4?Pt.set(_.x,_.y,_.z,_.w):Pt.set(_,D,k,q),ct.scissor(G.copy(Pt).multiplyScalar(O).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(_){ct.setScissorTest(Xt=_)},this.setOpaqueSort=function(_){$=_},this.setTransparentSort=function(_){st=_},this.getClearColor=function(_){return _.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(_=!0,D=!0,k=!0){let q=0;if(_){let N=!1;if(P!==null){let ot=P.texture.format;N=ot===Pc||ot===Rc||ot===Vc}if(N){let ot=P.texture.type,mt=ot===Sn||ot===ci||ot===xs||ot===Oi||ot===Ec||ot===wc,bt=Ut.getClearColor(),St=Ut.getClearAlpha(),zt=bt.r,kt=bt.g,Et=bt.b;mt?(m[0]=zt,m[1]=kt,m[2]=Et,m[3]=St,E.clearBufferuiv(E.COLOR,0,m)):(A[0]=zt,A[1]=kt,A[2]=Et,A[3]=St,E.clearBufferiv(E.COLOR,0,A))}else q|=E.COLOR_BUFFER_BIT}D&&(q|=E.DEPTH_BUFFER_BIT),k&&(q|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Jt.dispose(),Ct.dispose(),y.dispose(),z.dispose(),Z.dispose(),ae.dispose(),U.dispose(),Mt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Kc),W.removeEventListener("sessionend",jc),Kn.stop()};function j(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let _=Lt.autoReset,D=_t.enabled,k=_t.autoUpdate,q=_t.needsUpdate,N=_t.type;pt(),Lt.autoReset=_,_t.enabled=D,_t.autoUpdate=k,_t.needsUpdate=q,_t.type=N}function gt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ot(_){let D=_.target;D.removeEventListener("dispose",Ot),pe(D)}function pe(_){be(_),Ct.remove(_)}function be(_){let D=Ct.get(_).programs;D!==void 0&&(D.forEach(function(k){Mt.releaseProgram(k)}),_.isShaderMaterial&&Mt.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,k,q,N,ot){D===null&&(D=$t);let mt=N.isMesh&&N.matrixWorld.determinant()<0,bt=yu(_,D,k,q,N);ct.setMaterial(q,mt);let St=k.index,zt=1;if(q.wireframe===!0){if(St=Q.getWireframeAttribute(k),St===void 0)return;zt=2}let kt=k.drawRange,Et=k.attributes.position,ee=kt.start*zt,oe=(kt.start+kt.count)*zt;ot!==null&&(ee=Math.max(ee,ot.start*zt),oe=Math.min(oe,(ot.start+ot.count)*zt)),St!==null?(ee=Math.max(ee,0),oe=Math.min(oe,St.count)):Et!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,Et.count));let le=oe-ee;if(le<0||le===1/0)return;ae.setup(N,q,bt,k,St);let Pe,ne=It;if(St!==null&&(Pe=Y.get(St),ne=Qt,ne.setIndex(Pe)),N.isMesh)q.wireframe===!0?(ct.setLineWidth(q.wireframeLinewidth*at()),ne.setMode(E.LINES)):ne.setMode(E.TRIANGLES);else if(N.isLine){let Tt=q.linewidth;Tt===void 0&&(Tt=1),ct.setLineWidth(Tt*at()),N.isLineSegments?ne.setMode(E.LINES):N.isLineLoop?ne.setMode(E.LINE_LOOP):ne.setMode(E.LINE_STRIP)}else N.isPoints?ne.setMode(E.POINTS):N.isSprite&&ne.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Tt=N._multiDrawStarts,pn=N._multiDrawCounts,ie=N._multiDrawCount,Ze=St?Y.get(St).bytesPerElement:1,gi=Ct.get(q).currentProgram.getUniforms();for(let Ne=0;Ne<ie;Ne++)gi.setValue(E,"_gl_DrawID",Ne),ne.render(Tt[Ne]/Ze,pn[Ne])}else if(N.isInstancedMesh)ne.renderInstances(ee,le,N.count);else if(k.isInstancedBufferGeometry){let Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pn=Math.min(k.instanceCount,Tt);ne.renderInstances(ee,le,pn)}else ne.render(ee,le)};function se(_,D,k){_.transparent===!0&&_.side===In&&_.forceSinglePass===!1?(_.side=Ue,_.needsUpdate=!0,Bs(_,D,k),_.side=ln,_.needsUpdate=!0,Bs(_,D,k),_.side=In):Bs(_,D,k)}this.compile=function(_,D,k=null){k===null&&(k=_),p=Jt.get(k),p.init(D),C.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),_!==k&&_.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let q=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let bt=ot[mt];se(bt,k,N),q.add(bt)}else se(ot,k,N),q.add(ot)}),C.pop(),p=null,q},this.compileAsync=function(_,D,k=null){let q=this.compile(_,D,k);return new Promise(N=>{function ot(){if(q.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){N(_);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ye=null;function fn(_){Ye&&Ye(_)}function Kc(){Kn.stop()}function jc(){Kn.start()}let Kn=new Lh;Kn.setAnimationLoop(fn),typeof self!="undefined"&&Kn.setContext(self),this.setAnimationLoop=function(_){Ye=_,W.setAnimationLoop(_),_===null?Kn.stop():Kn.start()},W.addEventListener("sessionstart",Kc),W.addEventListener("sessionend",jc),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,D,P),p=Jt.get(_,C.length),p.init(D),C.push(p),Vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Vt),xt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,xt),g=yt.get(_,I.length),g.init(),I.push(g),W.enabled===!0&&W.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&fa(ot,D,-1/0,x.sortObjects)}fa(_,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort($,st),J=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,J&&Ut.addToRenderList(g,_),this.info.render.frame++,nt===!0&&it.beginShadows();let k=p.state.shadowsArray;_t.render(k,_,D),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,N=g.transmissive;if(p.setupLights(),D.isArrayCamera){let ot=D.cameras;if(N.length>0)for(let mt=0,bt=ot.length;mt<bt;mt++){let St=ot[mt];Qc(q,N,_,St)}J&&Ut.render(_);for(let mt=0,bt=ot.length;mt<bt;mt++){let St=ot[mt];Jc(g,_,St,St.viewport)}}else N.length>0&&Qc(q,N,_,D),J&&Ut.render(_),Jc(g,_,D);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),_.isScene===!0&&_.onAfterRender(x,_,D),ae.resetDefaultState(),M=-1,v=null,C.pop(),C.length>0?(p=C[C.length-1],nt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,I.pop(),I.length>0?g=I[I.length-1]:g=null};function fa(_,D,k,q){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||X.intersectsSprite(_)){q&&Dt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Vt);let mt=Z.update(_),bt=_.material;bt.visible&&g.push(_,mt,bt,k,Dt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||X.intersectsObject(_))){let mt=Z.update(_),bt=_.material;if(q&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Dt.copy(_.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Dt.copy(mt.boundingSphere.center)),Dt.applyMatrix4(_.matrixWorld).applyMatrix4(Vt)),Array.isArray(bt)){let St=mt.groups;for(let zt=0,kt=St.length;zt<kt;zt++){let Et=St[zt],ee=bt[Et.materialIndex];ee&&ee.visible&&g.push(_,mt,ee,k,Dt.z,Et)}}else bt.visible&&g.push(_,mt,bt,k,Dt.z,null)}}let ot=_.children;for(let mt=0,bt=ot.length;mt<bt;mt++)fa(ot[mt],D,k,q)}function Jc(_,D,k,q){let N=_.opaque,ot=_.transmissive,mt=_.transparent;p.setupLightsView(k),nt===!0&&it.setGlobalState(x.clippingPlanes,k),q&&ct.viewport(T.copy(q)),N.length>0&&zs(N,D,k),ot.length>0&&zs(ot,D,k),mt.length>0&&zs(mt,D,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Qc(_,D,k,q){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new En(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Ps:Sn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[q.id],mt=q.viewport||T;ot.setSize(mt.z,mt.w);let bt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(V),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),J&&Ut.render(k);let St=x.toneMapping;x.toneMapping=qn;let zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),nt===!0&&it.setGlobalState(x.clippingPlanes,q),zs(_,k,q),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Et=0,ee=D.length;Et<ee;Et++){let oe=D[Et],le=oe.object,Pe=oe.geometry,ne=oe.material,Tt=oe.group;if(ne.side===In&&le.layers.test(q.layers)){let pn=ne.side;ne.side=Ue,ne.needsUpdate=!0,$c(le,k,q,Pe,ne,Tt),ne.side=pn,ne.needsUpdate=!0,kt=!0}}kt===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}x.setRenderTarget(bt),x.setClearColor(V,H),zt!==void 0&&(q.viewport=zt),x.toneMapping=St}function zs(_,D,k){let q=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ot=_.length;N<ot;N++){let mt=_[N],bt=mt.object,St=mt.geometry,zt=q===null?mt.material:q,kt=mt.group;bt.layers.test(k.layers)&&$c(bt,D,k,St,zt,kt)}}function $c(_,D,k,q,N,ot){_.onBeforeRender(x,D,k,q,N,ot),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(x,D,k,q,_,ot),N.transparent===!0&&N.side===In&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,x.renderBufferDirect(k,D,q,N,_,ot),N.side=ln,N.needsUpdate=!0,x.renderBufferDirect(k,D,q,N,_,ot),N.side=In):x.renderBufferDirect(k,D,q,N,_,ot),_.onAfterRender(x,D,k,q,N,ot)}function Bs(_,D,k){D.isScene!==!0&&(D=$t);let q=Ct.get(_),N=p.state.lights,ot=p.state.shadowsArray,mt=N.state.version,bt=Mt.getParameters(_,N.state,ot,D,k),St=Mt.getProgramCacheKey(bt),zt=q.programs;q.environment=_.isMeshStandardMaterial?D.environment:null,q.fog=D.fog,q.envMap=(_.isMeshStandardMaterial?z:y).get(_.envMap||q.environment),q.envMapRotation=q.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,zt===void 0&&(_.addEventListener("dispose",Ot),zt=new Map,q.programs=zt);let kt=zt.get(St);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===mt)return el(_,bt),kt}else bt.uniforms=Mt.getUniforms(_),_.onBeforeCompile(bt,x),kt=Mt.acquireProgram(bt,St),zt.set(St,kt),q.uniforms=bt.uniforms;let Et=q.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Et.clippingPlanes=it.uniform),el(_,bt),q.needsLights=_u(_),q.lightsStateVersion=mt,q.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function tl(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=Ni.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function el(_,D){let k=Ct.get(_);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function yu(_,D,k,q,N){D.isScene!==!0&&(D=$t),b.resetTextureUnits();let ot=D.fog,mt=q.isMeshStandardMaterial?D.environment:null,bt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ji,St=(q.isMeshStandardMaterial?z:y).get(q.envMap||mt),zt=q.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,kt=!!k.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Et=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color,le=qn;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=x.toneMapping);let Pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=Pe!==void 0?Pe.length:0,Tt=Ct.get(q),pn=p.state.lights;if(nt===!0&&(xt===!0||_!==v)){let He=_===v&&q.id===M;it.setState(q,_,He)}let ie=!1;q.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==pn.state.version||Tt.outputColorSpace!==bt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==St||q.fog===!0&&Tt.fog!==ot||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==it.numPlanes||Tt.numIntersection!==it.numIntersection)||Tt.vertexAlphas!==zt||Tt.vertexTangents!==kt||Tt.morphTargets!==Et||Tt.morphNormals!==ee||Tt.morphColors!==oe||Tt.toneMapping!==le||Tt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Tt.__version=q.version);let Ze=Tt.currentProgram;ie===!0&&(Ze=Bs(q,D,N));let gi=!1,Ne=!1,ns=!1,he=Ze.getUniforms(),rn=Tt.uniforms;if(ct.useProgram(Ze.program)&&(gi=!0,Ne=!0,ns=!0),q.id!==M&&(M=q.id,Ne=!0),gi||v!==_){ct.buffers.depth.getReversed()?(rt.copy(_.projectionMatrix),dd(rt),fd(rt),he.setValue(E,"projectionMatrix",rt)):he.setValue(E,"projectionMatrix",_.projectionMatrix),he.setValue(E,"viewMatrix",_.matrixWorldInverse);let Pn=he.map.cameraPosition;Pn!==void 0&&Pn.setValue(E,Ft.setFromMatrixPosition(_.matrixWorld)),vt.logarithmicDepthBuffer&&he.setValue(E,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&he.setValue(E,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,Ne=!0,ns=!0)}if(N.isSkinnedMesh){he.setOptional(E,N,"bindMatrix"),he.setOptional(E,N,"bindMatrixInverse");let He=N.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),he.setValue(E,"boneTexture",He.boneTexture,b))}N.isBatchedMesh&&(he.setOptional(E,N,"batchingTexture"),he.setValue(E,"batchingTexture",N._matricesTexture,b),he.setOptional(E,N,"batchingIdTexture"),he.setValue(E,"batchingIdTexture",N._indirectTexture,b),he.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(E,"batchingColorTexture",N._colorsTexture,b));let is=k.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Nt.update(N,k,Ze),(Ne||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,he.setValue(E,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(rn.envMap.value=St,rn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&D.environment!==null&&(rn.envMapIntensity.value=D.environmentIntensity),Ne&&(he.setValue(E,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&vu(rn,ns),ot&&q.fog===!0&&dt.refreshFogUniforms(rn,ot),dt.refreshMaterialUniforms(rn,q,O,K,p.state.transmissionRenderTarget[_.id]),Ni.upload(E,tl(Tt),rn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ni.upload(E,tl(Tt),rn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&he.setValue(E,"center",N.center),he.setValue(E,"modelViewMatrix",N.modelViewMatrix),he.setValue(E,"normalMatrix",N.normalMatrix),he.setValue(E,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let He=q.uniformsGroups;for(let Pn=0,Ln=He.length;Pn<Ln;Pn++){let nl=He[Pn];U.update(nl,Ze),U.bind(nl,Ze)}}return Ze}function vu(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function _u(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(_,D,k){Ct.get(_.texture).__webglTexture=D,Ct.get(_.depthTexture).__webglTexture=k;let q=Ct.get(_);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=k===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,D){let k=Ct.get(_);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(_,D=0,k=0){P=_,S=D,w=k;let q=!0,N=null,ot=!1,mt=!1;if(_){let St=Ct.get(_);if(St.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(E.FRAMEBUFFER,null),q=!1;else if(St.__webglFramebuffer===void 0)b.setupRenderTarget(_);else if(St.__hasExternalTextures)b.rebindTextures(_,Ct.get(_.texture).__webglTexture,Ct.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Et=_.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(_.width!==Et.image.width||_.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(_)}}let zt=_.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(mt=!0);let kt=Ct.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(kt[D])?N=kt[D][k]:N=kt[D],ot=!0):_.samples>0&&b.useMultisampledRTT(_)===!1?N=Ct.get(_).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[k]:N=kt,T.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else T.copy(ft).multiplyScalar(O).floor(),G.copy(Pt).multiplyScalar(O).floor(),B=Xt;if(ct.bindFramebuffer(E.FRAMEBUFFER,N)&&q&&ct.drawBuffers(_,N),ct.viewport(T),ct.scissor(G),ct.setScissorTest(B),ot){let St=Ct.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,k)}else if(mt){let St=Ct.get(_.texture),zt=D||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,St.__webglTexture,k||0,zt)}M=-1},this.readRenderTargetPixels=function(_,D,k,q,N,ot,mt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ct.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){ct.bindFramebuffer(E.FRAMEBUFFER,bt);try{let St=_.texture,zt=St.format,kt=St.type;if(!vt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-q&&k>=0&&k<=_.height-N&&E.readPixels(D,k,q,N,Ht.convert(zt),Ht.convert(kt),ot)}finally{let St=P!==null?Ct.get(P).__webglFramebuffer:null;ct.bindFramebuffer(E.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(_,D,k,q,N,ot,mt){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ct.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){let St=_.texture,zt=St.format,kt=St.type;if(!vt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=_.width-q&&k>=0&&k<=_.height-N){ct.bindFramebuffer(E.FRAMEBUFFER,bt);let Et=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Et),E.bufferData(E.PIXEL_PACK_BUFFER,ot.byteLength,E.STREAM_READ),E.readPixels(D,k,q,N,Ht.convert(zt),Ht.convert(kt),0);let ee=P!==null?Ct.get(P).__webglFramebuffer:null;ct.bindFramebuffer(E.FRAMEBUFFER,ee);let oe=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await ud(E,oe,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Et),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ot),E.deleteBuffer(Et),E.deleteSync(oe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,D=null,k=0){_.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,_=arguments[1]);let q=Math.pow(2,-k),N=Math.floor(_.image.width*q),ot=Math.floor(_.image.height*q),mt=D!==null?D.x:0,bt=D!==null?D.y:0;b.setTexture2D(_,0),E.copyTexSubImage2D(E.TEXTURE_2D,k,0,0,mt,bt,N,ot),ct.unbindTexture()},this.copyTextureToTexture=function(_,D,k=null,q=null,N=0){_.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,_=arguments[1],D=arguments[2],N=arguments[3]||0,k=null);let ot,mt,bt,St,zt,kt,Et,ee,oe,le=_.isCompressedTexture?_.mipmaps[N]:_.image;k!==null?(ot=k.max.x-k.min.x,mt=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,St=k.min.x,zt=k.min.y,kt=k.isBox3?k.min.z:0):(ot=le.width,mt=le.height,bt=le.depth||1,St=0,zt=0,kt=0),q!==null?(Et=q.x,ee=q.y,oe=q.z):(Et=0,ee=0,oe=0);let Pe=Ht.convert(D.format),ne=Ht.convert(D.type),Tt;D.isData3DTexture?(b.setTexture3D(D,0),Tt=E.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),Tt=E.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),Tt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let pn=E.getParameter(E.UNPACK_ROW_LENGTH),ie=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ze=E.getParameter(E.UNPACK_SKIP_PIXELS),gi=E.getParameter(E.UNPACK_SKIP_ROWS),Ne=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,le.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,le.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,St),E.pixelStorei(E.UNPACK_SKIP_ROWS,zt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,kt);let ns=_.isDataArrayTexture||_.isData3DTexture,he=D.isDataArrayTexture||D.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let rn=Ct.get(_),is=Ct.get(D),He=Ct.get(rn.__renderTarget),Pn=Ct.get(is.__renderTarget);ct.bindFramebuffer(E.READ_FRAMEBUFFER,He.__webglFramebuffer),ct.bindFramebuffer(E.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Ln=0;Ln<bt;Ln++)ns&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ct.get(_).__webglTexture,N,kt+Ln),_.isDepthTexture?(he&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,N,oe+Ln),E.blitFramebuffer(St,zt,ot,mt,Et,ee,ot,mt,E.DEPTH_BUFFER_BIT,E.NEAREST)):he?E.copyTexSubImage3D(Tt,N,Et,ee,oe+Ln,St,zt,ot,mt):E.copyTexSubImage2D(Tt,N,Et,ee,oe+Ln,St,zt,ot,mt);ct.bindFramebuffer(E.READ_FRAMEBUFFER,null),ct.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else he?_.isDataTexture||_.isData3DTexture?E.texSubImage3D(Tt,N,Et,ee,oe,ot,mt,bt,Pe,ne,le.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(Tt,N,Et,ee,oe,ot,mt,bt,Pe,le.data):E.texSubImage3D(Tt,N,Et,ee,oe,ot,mt,bt,Pe,ne,le):_.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,N,Et,ee,ot,mt,Pe,ne,le.data):_.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,N,Et,ee,le.width,le.height,Pe,le.data):E.texSubImage2D(E.TEXTURE_2D,N,Et,ee,ot,mt,Pe,ne,le);E.pixelStorei(E.UNPACK_ROW_LENGTH,pn),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ie),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ze),E.pixelStorei(E.UNPACK_SKIP_ROWS,gi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ne),N===0&&D.generateMipmaps&&E.generateMipmap(Tt),ct.unbindTexture()},this.copyTextureToTexture3D=function(_,D,k=null,q=null,N=0){return _.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,q=arguments[1]||null,_=arguments[2],D=arguments[3],N=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,D,k,q,N)},this.initRenderTarget=function(_){Ct.get(_).__webglFramebuffer===void 0&&b.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?b.setTextureCube(_,0):_.isData3DTexture?b.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?b.setTexture2DArray(_,0):b.setTexture2D(_,0),ct.unbindTexture()},this.resetState=function(){S=0,w=0,P=null,ct.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Hi=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_s=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Qo=class extends Re{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Be,h=Be,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new Yt,ih=new Yt,or=[],sh=new $e,cA=new Yt,ls=new Wt,hs=new wn,li=class extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cA)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),sh.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),hs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),ih.multiplyMatrices(n,Vi),ls.matrixWorld=ih,ls.raycast(t,or);for(let a=0,o=or.length;a<o;a++){let c=or[a];c.instanceId=r,c.object=this,e.push(c)}or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(s*this.count),s,this.count,Tc,cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hi=class extends Oe{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new R,Nr=new R,rh=new Yt,us=new ys,cr=new wn,Ga=new R,ah=new R,$o=class extends Ie{constructor(t=new me,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Nr);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,t.ray.intersectsSphere(cr)===!1)return;rh.copy(s).invert(),us.copy(t.ray).applyMatrix4(rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let A=f,g=m-1;A<g;A+=l){let p=h.getX(A),I=h.getX(A+1),C=lr(this,t,us,c,p,I);C&&e.push(C)}if(this.isLineLoop){let A=h.getX(m-1),g=h.getX(f),p=lr(this,t,us,c,A,g);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let A=f,g=m-1;A<g;A+=l){let p=lr(this,t,us,c,A,A+1);p&&e.push(p)}if(this.isLineLoop){let A=lr(this,t,us,c,m-1,f);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Dr.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,r),e.distanceSqToSegment(Dr,Nr,Ga,ah)>n)return;Ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ga);if(!(c<t.near||c>t.far))return{distance:c,point:ah.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var oh=new R,ch=new R,Ms=class extends $o{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)oh.fromBufferAttribute(e,s),ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oh.distanceTo(ch);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var un=class extends Oe{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lh=new Yt,tc=new ys,hr=new wn,ur=new R,Wn=class extends Ie{constructor(t=new me,e=new un){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;lh.copy(s).invert(),tc.copy(t.ray).applyMatrix4(lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,A=f;m<A;m++){let g=l.getX(m);ur.fromBufferAttribute(u,g),hh(ur,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,A=f;m<A;m++)ur.fromBufferAttribute(u,m),hh(ur,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hh(i,t,e,n,s,r,a){let o=tc.distanceSqToPoint(i);if(o<e){let c=new R;tc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tn=class extends Re{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},We=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new et:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,c=new Yt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bs=class extends We{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends bs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var dr=new R,Wa=new Dc,Xa=new Dc,Ya=new Dc,nc=class extends We{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(dr.subVectors(s[0],s[1]).add(s[0]),l=dr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),A=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),Wa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,A,g),Xa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,A,g),Ya.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ya.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Wa.calc(c),Xa.calc(c),Ya.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function lA(i,t){let e=1-i;return e*e*t}function hA(i,t){return 2*(1-i)*i*t}function uA(i,t){return i*i*t}function gs(i,t,e,n){return lA(i,t)+hA(i,e)+uA(i,n)}function dA(i,t){let e=1-i;return e*e*e*t}function fA(i,t){let e=1-i;return 3*e*e*i*t}function pA(i,t){return 3*(1-i)*i*i*t}function gA(i,t){return i*i*i*t}function ms(i,t,e,n,s){return dA(i,t)+fA(i,e)+pA(i,n)+gA(i,s)}var Fr=class extends We{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,s.x,r.x,a.x,o.x),ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends We{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,s.x,r.x,a.x,o.x),ms(t,s.y,r.y,a.y,o.y),ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zr=class extends We{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends We{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends We{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,s.x,r.x,a.x),gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends We{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,s.x,r.x,a.x),gs(t,s.y,r.y,a.y),gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uh(o,c.x,l.x,h.x,u.x),uh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:nc,CubicBezierCurve:Fr,CubicBezierCurve3:ic,EllipseCurve:bs,LineCurve:zr,LineCurve3:sc,QuadraticBezierCurve:Br,QuadraticBezierCurve3:rc,SplineCurve:Or}),oc=class extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},kr=class extends oc{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zr(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Br(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Fr(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Or(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new bs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Xn=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new R,h=new et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ss=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,A=[],g=n/2,p=0;I(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function I(){let x=new R,L=new R,S=0,w=(e-t)/n;for(let P=0;P<=r;P++){let M=[],v=P/r,T=v*(e-t)+t;for(let G=0;G<=s;G++){let B=G/s,V=B*c+o,H=Math.sin(V),F=Math.cos(V);L.x=T*H,L.y=-v*n+g,L.z=T*F,u.push(L.x,L.y,L.z),x.set(H,w,F).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-v),M.push(m++)}A.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let v=A[M][P],T=A[M+1][P],G=A[M+1][P+1],B=A[M][P+1];(t>0||M!==0)&&(h.push(v,T,B),S+=3),(e>0||M!==r-1)&&(h.push(T,G,B),S+=3)}l.addGroup(p,S,0),p+=S}function C(x){let L=m,S=new et,w=new R,P=0,M=x===!0?t:e,v=x===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;let T=m;for(let G=0;G<=s;G++){let V=G/s*c+o,H=Math.cos(V),F=Math.sin(V);w.x=M*F,w.y=g*v,w.z=M*H,u.push(w.x,w.y,w.z),d.push(0,v,0),S.x=H*.5+.5,S.y=F*.5*v+.5,f.push(S.x,S.y),m++}for(let G=0;G<s;G++){let B=L+G,V=T+G;x===!0?h.push(V,V+1,B):h.push(V+1,V,B),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Es=class i extends Ss{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cc=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(I){let C=new R,x=new R,L=new R;for(let S=0;S<e.length;S+=3)f(e[S+0],C),f(e[S+1],x),f(e[S+2],L),c(C,x,L,I)}function c(I,C,x,L){let S=L+1,w=[];for(let P=0;P<=S;P++){w[P]=[];let M=I.clone().lerp(x,P/S),v=C.clone().lerp(x,P/S),T=S-P;for(let G=0;G<=T;G++)G===0&&P===S?w[P][G]=M:w[P][G]=M.clone().lerp(v,G/T)}for(let P=0;P<S;P++)for(let M=0;M<2*(S-P)-1;M++){let v=Math.floor(M/2);M%2===0?(d(w[P][v+1]),d(w[P+1][v]),d(w[P][v])):(d(w[P][v+1]),d(w[P+1][v+1]),d(w[P+1][v]))}}function l(I){let C=new R;for(let x=0;x<r.length;x+=3)C.x=r[x+0],C.y=r[x+1],C.z=r[x+2],C.normalize().multiplyScalar(I),r[x+0]=C.x,r[x+1]=C.y,r[x+2]=C.z}function h(){let I=new R;for(let C=0;C<r.length;C+=3){I.x=r[C+0],I.y=r[C+1],I.z=r[C+2];let x=g(I)/2/Math.PI+.5,L=p(I)/Math.PI+.5;a.push(x,1-L)}m(),u()}function u(){for(let I=0;I<a.length;I+=6){let C=a[I+0],x=a[I+2],L=a[I+4],S=Math.max(C,x,L),w=Math.min(C,x,L);S>.9&&w<.1&&(C<.2&&(a[I+0]+=1),x<.2&&(a[I+2]+=1),L<.2&&(a[I+4]+=1))}}function d(I){r.push(I.x,I.y,I.z)}function f(I,C){let x=I*3;C.x=t[x+0],C.y=t[x+1],C.z=t[x+2]}function m(){let I=new R,C=new R,x=new R,L=new R,S=new et,w=new et,P=new et;for(let M=0,v=0;M<r.length;M+=9,v+=6){I.set(r[M+0],r[M+1],r[M+2]),C.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),S.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),L.copy(I).add(C).add(x).divideScalar(3);let T=g(L);A(S,v+0,I,T),A(w,v+2,C,T),A(P,v+4,x,T)}}function A(I,C,x,L){L<0&&I.x===1&&(a[C]=I.x-1),x.x===0&&x.z===0&&(a[C]=L/2/Math.PI+.5)}function g(I){return Math.atan2(I.z,-I.x)}function p(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},qr=class i extends cc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ui=class extends kr{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new kr().fromJSON(s))}return this}},mA={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=zh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=vA(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return ws(r,a,e,o,c,f,0),a}};function zh(i,t,e,n,s){let r,a;if(s===PA(i,t,e,n)>0)for(r=t;r<e;r+=n)a=dh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=dh(r,i[r],i[r+1],a);return a&&$r(a,a.next)&&(Vs(a),a=a.next),a}function di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||de(e.prev,e,e.next)===0)){if(Vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,s,r,a){if(!i)return;!a&&r&&SA(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?xA(i,n,s,r):AA(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Vs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=CA(di(i),t,e),ws(i,t,e,n,s,r,2)):a===2&&yA(i,t,e,n,s,r):ws(di(i),t,e,n,s,r,1);break}}}function AA(i){let t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Pi(s,o,r,c,a,l,m.x,m.y)&&de(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xA(i,t,e,n){let s=i.prev,r=i,a=i.next;if(de(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,A=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=lc(f,m,t,e,n),I=lc(A,g,t,e,n),C=i.prevZ,x=i.nextZ;for(;C&&C.z>=p&&x&&x.z<=I;){if(C.x>=f&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&Pi(o,h,c,u,l,d,C.x,C.y)&&de(C.prev,C,C.next)>=0||(C=C.prevZ,x.x>=f&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Pi(o,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;C&&C.z>=p;){if(C.x>=f&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&Pi(o,h,c,u,l,d,C.x,C.y)&&de(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;x&&x.z<=I;){if(x.x>=f&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Pi(o,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function CA(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!$r(s,r)&&Bh(s,n,n.next,r)&&Ts(s,r)&&Ts(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vs(n),Vs(n.next),n=i=r),n=n.next}while(n!==i);return di(n)}function yA(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&TA(a,o)){let c=Oh(a,o);a=di(a,a.next),c=di(c,c.next),ws(a,t,e,n,s,r,0),ws(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vA(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=zh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(wA(l));for(s.sort(_A),r=0;r<s.length;r++)e=IA(s[r],e);return e}function _A(i,t){return i.x-t.x}function IA(i,t){let e=MA(i,t);if(!e)return t;let n=Oh(e,i);return di(n,n.next),di(e,e.next)}function MA(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Pi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ts(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&bA(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function bA(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function SA(i,t,e,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,EA(s)}function EA(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function TA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!VA(i,t)&&(Ts(i,t)&&Ts(t,i)&&RA(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||$r(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function Bh(i,t,e,n){let s=pr(de(i,t,e)),r=pr(de(i,t,n)),a=pr(de(e,n,i)),o=pr(de(e,n,t));return!!(s!==r&&a!==o||s===0&&fr(i,e,t)||r===0&&fr(i,n,t)||a===0&&fr(e,i,n)||o===0&&fr(e,t,n))}function fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pr(i){return i>0?1:i<0?-1:0}function VA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ts(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function RA(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oh(i,t){let e=new hc(i.i,i.x,i.y),n=new hc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dh(i,t,e,n){let s=new hc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function PA(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var As=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fh(t),ph(n,t);let a=t.length;e.forEach(fh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ph(n,e[c]);let o=mA.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function fh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gi=class i extends me{constructor(t=new ui([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,I=e.UVGenerator!==void 0?e.UVGenerator:LA,C,x=!1,L,S,w,P;p&&(C=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),S=new R,w=new R,P=new R),d||(g=0,f=0,m=0,A=0);let M=o.extractPoints(l),v=M.shape,T=M.holes;if(!As.isClockWise(v)){v=v.reverse();for(let J=0,at=T.length;J<at;J++){let E=T[J];As.isClockWise(E)&&(T[J]=E.reverse())}}let B=As.triangulateShape(v,T),V=v;for(let J=0,at=T.length;J<at;J++){let E=T[J];v=v.concat(E)}function H(J,at,E){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(at,E)}let F=v.length,K=B.length;function O(J,at,E){let wt,tt,vt,ct=J.x-at.x,Lt=J.y-at.y,Ct=E.x-J.x,b=E.y-J.y,y=ct*ct+Lt*Lt,z=ct*b-Lt*Ct;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(y),Q=Math.sqrt(Ct*Ct+b*b),Z=at.x-Lt/Y,Mt=at.y+ct/Y,dt=E.x-b/Q,yt=E.y+Ct/Q,Jt=((dt-Z)*b-(yt-Mt)*Ct)/(ct*b-Lt*Ct);wt=Z+ct*Jt-J.x,tt=Mt+Lt*Jt-J.y;let it=wt*wt+tt*tt;if(it<=2)return new et(wt,tt);vt=Math.sqrt(it/2)}else{let Y=!1;ct>Number.EPSILON?Ct>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?Ct<-Number.EPSILON&&(Y=!0):Math.sign(Lt)===Math.sign(b)&&(Y=!0),Y?(wt=-Lt,tt=ct,vt=Math.sqrt(y)):(wt=ct,tt=Lt,vt=Math.sqrt(y/2))}return new et(wt/vt,tt/vt)}let $=[];for(let J=0,at=V.length,E=at-1,wt=J+1;J<at;J++,E++,wt++)E===at&&(E=0),wt===at&&(wt=0),$[J]=O(V[J],V[E],V[wt]);let st=[],ft,Pt=$.concat();for(let J=0,at=T.length;J<at;J++){let E=T[J];ft=[];for(let wt=0,tt=E.length,vt=tt-1,ct=wt+1;wt<tt;wt++,vt++,ct++)vt===tt&&(vt=0),ct===tt&&(ct=0),ft[wt]=O(E[wt],E[vt],E[ct]);st.push(ft),Pt=Pt.concat(ft)}for(let J=0;J<g;J++){let at=J/g,E=f*Math.cos(at*Math.PI/2),wt=m*Math.sin(at*Math.PI/2)+A;for(let tt=0,vt=V.length;tt<vt;tt++){let ct=H(V[tt],$[tt],wt);rt(ct.x,ct.y,-E)}for(let tt=0,vt=T.length;tt<vt;tt++){let ct=T[tt];ft=st[tt];for(let Lt=0,Ct=ct.length;Lt<Ct;Lt++){let b=H(ct[Lt],ft[Lt],wt);rt(b.x,b.y,-E)}}}let Xt=m+A;for(let J=0;J<F;J++){let at=d?H(v[J],Pt[J],Xt):v[J];x?(w.copy(L.normals[0]).multiplyScalar(at.x),S.copy(L.binormals[0]).multiplyScalar(at.y),P.copy(C[0]).add(w).add(S),rt(P.x,P.y,P.z)):rt(at.x,at.y,0)}for(let J=1;J<=h;J++)for(let at=0;at<F;at++){let E=d?H(v[at],Pt[at],Xt):v[at];x?(w.copy(L.normals[J]).multiplyScalar(E.x),S.copy(L.binormals[J]).multiplyScalar(E.y),P.copy(C[J]).add(w).add(S),rt(P.x,P.y,P.z)):rt(E.x,E.y,u/h*J)}for(let J=g-1;J>=0;J--){let at=J/g,E=f*Math.cos(at*Math.PI/2),wt=m*Math.sin(at*Math.PI/2)+A;for(let tt=0,vt=V.length;tt<vt;tt++){let ct=H(V[tt],$[tt],wt);rt(ct.x,ct.y,u+E)}for(let tt=0,vt=T.length;tt<vt;tt++){let ct=T[tt];ft=st[tt];for(let Lt=0,Ct=ct.length;Lt<Ct;Lt++){let b=H(ct[Lt],ft[Lt],wt);x?rt(b.x,b.y+C[h-1].y,C[h-1].x+E):rt(b.x,b.y,u+E)}}}X(),nt();function X(){let J=s.length/3;if(d){let at=0,E=F*at;for(let wt=0;wt<K;wt++){let tt=B[wt];Vt(tt[2]+E,tt[1]+E,tt[0]+E)}at=h+g*2,E=F*at;for(let wt=0;wt<K;wt++){let tt=B[wt];Vt(tt[0]+E,tt[1]+E,tt[2]+E)}}else{for(let at=0;at<K;at++){let E=B[at];Vt(E[2],E[1],E[0])}for(let at=0;at<K;at++){let E=B[at];Vt(E[0]+F*h,E[1]+F*h,E[2]+F*h)}}n.addGroup(J,s.length/3-J,0)}function nt(){let J=s.length/3,at=0;xt(V,at),at+=V.length;for(let E=0,wt=T.length;E<wt;E++){let tt=T[E];xt(tt,at),at+=tt.length}n.addGroup(J,s.length/3-J,1)}function xt(J,at){let E=J.length;for(;--E>=0;){let wt=E,tt=E-1;tt<0&&(tt=J.length-1);for(let vt=0,ct=h+g*2;vt<ct;vt++){let Lt=F*vt,Ct=F*(vt+1),b=at+wt+Lt,y=at+tt+Lt,z=at+tt+Ct,Y=at+wt+Ct;Ft(b,y,z,Y)}}}function rt(J,at,E){c.push(J),c.push(at),c.push(E)}function Vt(J,at,E){Dt(J),Dt(at),Dt(E);let wt=s.length/3,tt=I.generateTopUV(n,s,wt-3,wt-2,wt-1);$t(tt[0]),$t(tt[1]),$t(tt[2])}function Ft(J,at,E,wt){Dt(J),Dt(at),Dt(wt),Dt(at),Dt(E),Dt(wt);let tt=s.length/3,vt=I.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);$t(vt[0]),$t(vt[1]),$t(vt[3]),$t(vt[1]),$t(vt[2]),$t(vt[3])}function Dt(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function $t(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return UA(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ac[s.type]().fromJSON(s)),new i(n,t.options)}},LA={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new et(r,a),new et(o,c),new et(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],A=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new et(a,1-c),new et(l,1-u),new et(d,1-m),new et(A,1-p)]:[new et(o,1-c),new et(h,1-u),new et(f,1-m),new et(g,1-p)]}};function UA(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Rs=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let I=[],C=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){let S=L/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+C*o),u.y=t*Math.cos(a+C*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+C*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(S+x,1-C),I.push(l++)}h.push(I)}for(let p=0;p<n;p++)for(let I=0;I<e;I++){let C=h[p][I+1],x=h[p][I],L=h[p+1][I],S=h[p+1][I+1];(p!==0||a>0)&&f.push(C,x,S),(p!==n-1||c<Math.PI)&&f.push(x,L,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wi=class extends Oe{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var nn=class extends Oe{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function gr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function DA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:r=t,o=2*e-n;break;case ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cl:a=t,c=2*n-e;break;case ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-d*g+2*d*A-d*m,I=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,C=(-1-f)*g+(1.5+f)*A+.5*m,x=f*g-f*A;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+I*a[l+L]+C*a[c+L]+x*a[u+L];return r}},dc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},fc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&DA(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Uo;var fi=class extends sn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=vr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends sn{};pc.prototype.ValueTypeName="color";var gc=class extends sn{};gc.prototype.ValueTypeName="number";var mc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)De.slerpFlat(r,0,a,l-o,a,l,c);return r}},Hr=class extends sn{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends sn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=vr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends sn{};Ac.prototype.ValueTypeName="vector";var Gr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},xc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Nc=new xc,dn=class{constructor(t){this.manager=t!==void 0?t:Nc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var yn={},Cc=class extends Error{constructor(t,e){super(t),this.response=e}},Yi=class extends dn{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Gr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(yn[t]!==void 0){yn[t].push({onLoad:e,onProgress:n,onError:s});return}yn[t]=[],yn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=yn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,A=0,g=new ReadableStream({start(p){I();function I(){u.read().then(({done:C,value:x})=>{if(C)p.close();else{A+=x.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:A,total:f});for(let S=0,w=h.length;S<w;S++){let P=h[S];P.onProgress&&P.onProgress(L)}p.enqueue(x),I()}},C=>{p.error(C)})}}});return new Response(g)}else throw new Cc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Gr.add(t,l);let h=yn[t];delete yn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=yn[t];if(h===void 0)throw this.manager.itemError(t),l;delete yn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var yc=class extends dn{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Gr.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Cs("img");function c(){h(),Gr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Wr=class extends dn{constructor(t){super(t)}load(t,e,n,s){let r=new Re,a=new yc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Xr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Zi=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Za=new Yt,gh=new R,mh=new R,vc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(gh),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var _c=class extends vc{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yr=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Zr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ah(){return performance.now()}var Fc="\\[\\]\\.:\\/",NA=new RegExp("["+Fc+"]","g"),zc="[^"+Fc+"]",FA="[^"+Fc.replace("\\.","")+"]",zA=/((?:WC+[\/:])*)/.source.replace("WC",zc),BA=/(WCOD+)?/.source.replace("WCOD",FA),OA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),kA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),qA=new RegExp("^"+zA+BA+OA+kA+"$"),HA=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(NA,"")}static parseTrackName(t){let e=qA.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);HA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Ic;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);var Ls={wheat:{ar:"\u0642\u0645\u062D",en:"Wheat",yield:1,price:.16,color:15909198,product:"flour"},corn:{ar:"\u0630\u0631\u0629",en:"Corn",yield:1.4,price:.15,color:16241482,product:"corn"},sunflower:{ar:"\u0639\u0628\u0627\u062F \u0627\u0644\u0634\u0645\u0633",en:"Sunflowers",yield:1.2,price:.18,color:16763176,product:"seeds"}},kh={sheep:{ar:"\u062E\u0631\u0641\u0627\u0646",en:"Sheep",r:.55},cow:{ar:"\u0628\u0642\u0631",en:"Cows",r:.8},chicken:{ar:"\u0641\u0631\u0627\u062E",en:"Chickens",r:.35}},Yn=[{id:1,ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0630\u0647\u0628\u064A",en:"Golden Valley",w:30,d:34,fields:[[-8,-12,16,12,"wheat"]],rocks:[],animals:[],pen:null},{id:2,ar:"\u062A\u0644\u0629 \u0627\u0644\u0628\u0631\u0633\u064A\u0645",en:"Clover Hill",w:34,d:36,fields:[[-10,-14,20,14,"wheat"]],rocks:[[-4,-9],[5,-5]],animals:[],pen:null},{id:3,ar:"\u0628\u0633\u062A\u0627\u0646 \u0627\u0644\u0630\u0631\u0629",en:"Corn Corner",w:38,d:38,fields:[[-14,-15,14,14,"corn"],[2,-13,10,10,"wheat"]],rocks:[[-8,-9],[6,-8],[-2,-3]],animals:[["sheep",10,2],["sheep",12,4]],pen:[8,6,7,5]},{id:4,ar:"\u062D\u0642\u0648\u0644 \u0627\u0644\u0634\u0645\u0633",en:"Sunny Fields",w:40,d:40,fields:[[-12,-16,22,16,"sunflower"]],rocks:[[-6,-11],[4,-9],[-2,-5],[7,-3]],animals:[["sheep",-10,4],["sheep",-12,2],["sheep",-8,6]],pen:[-16,8,7,5]},{id:5,ar:"\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0637\u0627\u062D\u0648\u0646\u0629",en:"Windmill Farm",w:44,d:44,fields:[[-18,-18,12,14,"wheat"],[-4,-18,12,12,"corn"],[10,-16,10,12,"sunflower"]],rocks:[[-13,-12],[0,-10],[14,-8],[-8,-2],[5,-1]],animals:[["cow",12,4],["cow",15,6],["cow",10,8]],pen:[13,10,8,6]},{id:6,ar:"\u0627\u0644\u0633\u0647\u0644 \u0627\u0644\u0643\u0628\u064A\u0631",en:"Big Plains",w:48,d:46,fields:[[-16,-20,30,20,"wheat"]],rocks:[[-10,-15],[-2,-12],[6,-16],[9,-6],[-6,-5],[2,-3]],animals:[["sheep",-18,6],["sheep",-14,8],["chicken",-16,4],["chicken",-12,6]],pen:[-20,10,8,6]},{id:7,ar:"\u0648\u0627\u062F\u064A \u0627\u0644\u0646\u0647\u0631",en:"River Valley",w:50,d:48,fields:[[-20,-21,18,16,"corn"],[2,-21,18,16,"sunflower"]],rocks:[[-14,-15],[-6,-9],[-17,-7],[8,-16],[14,-10],[5,-7],[18,-14],[-1,-2]],animals:[["cow",14,6],["sheep",18,4],["sheep",16,8],["chicken",12,4]],pen:[16,11,9,6]},{id:8,ar:"\u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629",en:"Grand Farm",w:54,d:52,fields:[[-22,-23,14,14,"wheat"],[-6,-23,12,18,"corn"],[8,-23,14,14,"sunflower"],[8,-7,14,8,"wheat"]],rocks:[[-17,-18],[-11,-12],[-2,-17],[2,-9],[12,-18],[18,-13],[-15,-6],[13,-3],[-4,-3],[19,-4]],animals:[["cow",-18,6],["cow",-14,8],["sheep",-20,4],["sheep",-16,2],["chicken",-12,4]],pen:[-22,11,10,6]}];function qh(i){let t=i.d/2-6;return{barn:{x:-6,z:t+1,w:7,d:5},pad:{x:2.5,z:t,w:4,d:4}}}var ta=[{id:"cutter",ar:"\u0627\u0644\u0633\u0643\u064A\u0646\u0629",en:"Cutter",sub:["\u0623\u0639\u0631\u0636","Wider"],icon:"art:wheat",base:1.8,step:.45,unit:"m"},{id:"engine",ar:"\u0627\u0644\u0645\u0648\u062A\u0648\u0631",en:"Engine",sub:["\u0623\u0633\u0631\u0639","Faster"],icon:"art:combine",base:3.2,step:.4,unit:"m/s"},{id:"trailer",ar:"\u0627\u0644\u0645\u0642\u0637\u0648\u0631\u0629",en:"Trailer",sub:["\u0623\u0643\u0628\u0631","Bigger"],icon:"art:trailer",base:400,step:200,unit:""},{id:"barn",ar:"\u0627\u0644\u0645\u062E\u0632\u0646",en:"Barn",sub:["\u0623\u0633\u0639\u0627\u0631 \u0623\u062D\u0633\u0646","Better prices"],icon:"art:barn",base:0,step:10,unit:"%"}],Us=6,Oc=(i,t)=>({cutter:120,engine:150,trailer:100,barn:200})[i]+t*{cutter:100,engine:90,trailer:90,barn:120}[i],Vn=(i,t)=>{let e=ta.find(n=>n.id===i);return e.base+e.step*t};function GA(){return{v:1,coins:0,unlocked:1,stars:{},up:{cutter:0,engine:0,trailer:0,barn:0},store:{flour:0,hay:0,corn:0,seeds:0}}}function Hh(i){let t=GA();if(!i||typeof i!="object")return t;let e=(n,s,r,a)=>Number.isFinite(n)?Math.max(s,Math.min(r,Math.floor(n))):a;if(t.coins=e(i.coins,0,9999999,0),t.unlocked=e(i.unlocked,1,Yn.length,1),i.stars&&typeof i.stars=="object")for(let n of Yn)i.stars[n.id]!==void 0&&(t.stars[n.id]=e(i.stars[n.id],0,3,0));if(i.up&&typeof i.up=="object")for(let n of ta)t.up[n.id]=e(i.up[n.id],0,Us,0);if(i.store&&typeof i.store=="object")for(let n of Object.keys(t.store))t.store[n]=e(i.store[n],0,9999999,0);return i.muted===!0&&(t.muted=!0),t}function Gh(i,t){let e=i.up[t];if(e>=Us)return"max";let n=Oc(t,e);return i.coins<n?"poor":(i.coins-=n,i.up[t]=e+1,"bought")}function Wh(i,t,e){var r;let n=Yn[t].id;i.stars[n]=Math.max((r=i.stars[n])!=null?r:0,e);let s=!1;return t+1<Yn.length&&i.unlocked<t+2&&(i.unlocked=t+2,s=!0),{opened:s}}var Xh=1.9,WA=.95,Zn=(i,t,e)=>i<t?t:i>e?e:i,XA=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),na=class{constructor(t,e={}){var s,r,a,o;this.level=t,this.events=[],this.time=0,this.W=t.w,this.D=t.d,this.cutter=Vn("cutter",(s=e.cutter)!=null?s:0),this.maxSpeed=Vn("engine",(r=e.engine)!=null?r:0),this.capacity=Vn("trailer",(a=e.trailer)!=null?a:0),this.priceBonus=1+Vn("barn",(o=e.barn)!=null?o:0)/100;let n=qh(t);this.barn=n.barn,this.pad=n.pad,this.rocks=t.rocks.map(([c,l])=>({x:c,z:l,r:.75})),this.pen=t.pen?{x:t.pen[0],z:t.pen[1],w:t.pen[2],d:t.pen[3]}:null,this.animals=t.animals.map(([c,l,h],u)=>({kind:c,x:l,z:h,r:kh[c].r,vx:0,vz:0,wander:u*1.7,penned:!1,heading:0})),this.cells=[];for(let[c,l,h,u,d]of t.fields)for(let f=0;f<h/.5;f++)for(let m=0;m<u/.5;m++){let A=c+(f+.5)*.5,g=l+(m+.5)*.5;this.rocks.some(I=>(I.x-A)**2+(I.z-g)**2<Xh*Xh)||this.cells.push({x:A,z:g,crop:d,cut:!1})}this.total=this.cells.length,this.cutCount=0,this.grid=new Map,this.cells.forEach((c,l)=>{let h=`${Math.floor(c.x/2)},${Math.floor(c.z/2)}`;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(l)}),this.load=0,this.loadMix={wheat:0,corn:0,sunflower:0},this.coins=0,this.sold={flour:0,hay:0,corn:0,seeds:0},this.bumps=0,this.full=!1,this.done=!1,this.unloading=!1,this.t={x:this.pad.x,z:this.pad.z-2.5,heading:-Math.PI/2,speed:0,bump:0}}emit(t,e={}){this.events.push({type:t,...e})}get progress(){return this.total?this.cutCount/this.total:1}get penned(){return this.animals.filter(t=>t.penned).length}step(t,e){this.events.length=0,t=Math.min(t,.1);let n=Math.max(1,Math.ceil(t/(1/60)-1e-6));for(let s=0;s<n;s++)this._step(t/n,e)}_step(t,e){if(this.done)return;this.time+=t;let n=this.t,s=Zn(Math.hypot(e.x,e.z),0,1);if(n.bump>0&&(n.bump-=t),s>.15&&n.bump<=0){let u=Math.atan2(e.z,e.x),d=XA(n.heading,u);n.heading+=Zn(d,-2.6*t,2.6*t);let f=this.maxSpeed*s*(Math.abs(d)>1.6?.35:1);n.speed+=(f-n.speed)*Math.min(1,t*3)}else n.speed+=(0-n.speed)*Math.min(1,t*4);let r=Math.cos(n.heading),a=Math.sin(n.heading),o=n.x+r*n.speed*t,c=n.z+a*n.speed*t,l=1.4;o=Zn(o,-this.W/2+l,this.W/2-l),c=Zn(c,-this.D/2+l,this.D/2-l);let h=this.barn;Math.abs(o-h.x)<h.w/2+1.2&&Math.abs(c-h.z)<h.d/2+1.2&&(o=n.x,c=n.z,n.speed*=.5);for(let u of this.rocks)Math.hypot(o+r*1-u.x,c+a*1-u.z)<u.r+.75&&n.bump<=0&&(n.bump=.45,n.speed=-1.5,this.bumps++,this.emit("rock",{x:u.x,z:u.z}),o=n.x,c=n.z);n.x=o,n.z=c,this._cut(t),this._animals(t),this._unload(t)}cutterBox(){let t=this.t;return{cx:t.x+Math.cos(t.heading)*1.8,cz:t.z+Math.sin(t.heading)*1.8,half:this.cutter/2,depth:.45,heading:t.heading}}_cut(){if(this.load>=this.capacity-1e-6)return;let t=this.t;if(Math.abs(t.speed)<.2)return;let e=this.cutterBox(),n=Math.cos(e.heading),s=Math.sin(e.heading),r=e.half+1,a=[];for(let o=Math.floor((e.cx-r)/2);o<=Math.floor((e.cx+r)/2);o++)for(let c=Math.floor((e.cz-r)/2);c<=Math.floor((e.cz+r)/2);c++){let l=this.grid.get(`${o},${c}`);if(l)for(let h of l){let u=this.cells[h];if(u.cut)continue;let d=u.x-e.cx,f=u.z-e.cz,m=d*n+f*s,A=-d*s+f*n;if(Math.abs(m)<=e.depth&&Math.abs(A)<=e.half){if(this.load>=this.capacity)break;u.cut=!0,this.cutCount++;let g=Ls[u.crop].yield;this.load=Math.min(this.capacity,this.load+g),this.loadMix[u.crop]+=g,a.push(h)}}}a.length&&this.emit("cut",{cells:a}),this.load>=this.capacity-1e-6&&!this.full&&(this.full=!0,this.emit("full"))}_animals(t){let e=this.t;for(let n of this.animals){if(n.penned){n.wander+=t;let h=this.pen;n.x=Zn(n.x+Math.cos(n.wander*.6)*t*.3,h.x+.8,h.x+h.w-.8),n.z=Zn(n.z+Math.sin(n.wander*.5)*t*.3,h.z+.8,h.z+h.d-.8);continue}let s=n.x-e.x,r=n.z-e.z,a=Math.hypot(s,r)||1,o=0,c=0;if(a<4.5){let h=(4.5-a)/4.5;o=s/a*3.2*h,c=r/a*3.2*h}else n.wander+=t,o=Math.cos(n.wander*.4)*.25,c=Math.sin(n.wander*.33)*.25;n.vx+=(o-n.vx)*Math.min(1,t*4),n.vz+=(c-n.vz)*Math.min(1,t*4),n.x=Zn(n.x+n.vx*t,-this.W/2+1,this.W/2-1),n.z=Zn(n.z+n.vz*t,-this.D/2+1,this.D/2-1),Math.hypot(n.vx,n.vz)>.05&&(n.heading=Math.atan2(n.vz,n.vx));let l=this.pen;l&&n.x>l.x&&n.x<l.x+l.w&&n.z>l.z&&n.z<l.z+l.d&&(n.penned=!0,this.emit("penned",{kind:n.kind,n:this.penned,of:this.animals.length}))}}_unload(t){var c;let e=this.t,n=this.pad,s=e.x-Math.cos(e.heading)*3,r=e.z-Math.sin(e.heading)*3,a=(l,h)=>Math.abs(l-n.x)<n.w/2+.6&&Math.abs(h-n.z)<n.d/2+.6;if((a(e.x,e.z)||a(s,r))&&this.load>0){this.unloading||(this.unloading=!0,this.emit("unloadStart"));let l=Math.min(this.load,160*t),h=this.load,u=0;for(let f of Object.keys(this.loadMix)){let m=this.loadMix[f]/h*l;this.loadMix[f]-=m,u+=m*Ls[f].price*this.priceBonus;let A=Ls[f].product;A==="flour"?(this.sold.flour+=m*.5,this.sold.hay+=m*.5):this.sold[A]+=m}this.load-=l,this._earned=((c=this._earned)!=null?c:0)+u;let d=Math.floor(this._earned);if(d>0&&(this._earned-=d,this.coins+=d,this.emit("coins",{n:d,total:this.coins})),this.load<=1e-6){this.load=0;for(let f of Object.keys(this.loadMix))this.loadMix[f]=0;this.full=!1,this.unloading=!1,this.emit("unloaded")}}else this.unloading&&(this.unloading=!1);if(!this.done&&this.progress>=WA&&this.load===0){this.done=!0;let h=1+(this.animals.length===0||this.penned===this.animals.length?1:0)+(this.bumps<=2?1:0);this.result={stars:h,coins:this.coins,bumps:this.bumps,penned:this.penned,animals:this.animals.length,time:this.time},this.emit("done",this.result)}}};function Ds(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new me,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Yh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let A=0;A<a[h].length;++A)f.push(a[h][A][d]);let m=Yh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Yh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ce(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let A=h.getComponent(d,m);o.setComponent(d+u,m,A)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var YA=/^[og]\s*(.+)?/,ZA=/^mtllib /,KA=/^usemtl /,jA=/^usemap /,Zh=/\s+/,Kh=new R,kc=new R,jh=new R,Jh=new R,Xe=new R,ia=new Rt;function JA(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){let s=this.vertices,r=this.object.geometry.normals;Kh.fromArray(s,t),kc.fromArray(s,e),jh.fromArray(s,n),Xe.subVectors(jh,kc),Jh.subVectors(Kh,kc),Xe.cross(Jh),Xe.normalize(),r.push(Xe.x,Xe.y,Xe.z),r.push(Xe.x,Xe.y,Xe.z),r.push(Xe.x,Xe.y,Xe.z)},addColor:function(t,e,n){let s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,a,o,c,l){let h=this.vertices.length,u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let m=this.normals.length;u=this.parseNormalIndex(o,m),d=this.parseNormalIndex(c,m),f=this.parseNormalIndex(l,m),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(s!==void 0&&s!==""){let m=this.uvs.length;u=this.parseUVIndex(s,m),d=this.parseUVIndex(r,m),f=this.parseUVIndex(a,m),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){let r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}var sa=class extends dn{constructor(t){super(t),this.materials=null}load(t,e,n,s){let r=this,a=new Yi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){let e=new JA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let n=t.split(`
`),s=[];for(let o=0,c=n.length;o<c;o++){let l=n[o].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!=="#")if(h==="v"){let u=l.split(Zh);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ia.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),ce),e.colors.push(ia.r,ia.g,ia.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=l.slice(1).trim().split(Zh),f=[];for(let A=0,g=d.length;A<g;A++){let p=d[A];if(p.length>0){let I=p.split("/");f.push(I)}}let m=f[0];for(let A=1,g=f.length-1;A<g;A++){let p=f[A],I=f[A+1];e.addFace(m[0],p[0],I[0],m[1],p[1],I[1],m[2],p[2],I[2])}}else if(h==="l"){let u=l.substring(1).trim().split(" "),d=[],f=[];if(l.indexOf("/")===-1)d=u;else for(let m=0,A=u.length;m<A;m++){let g=u[m].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}e.addLineGeometry(d,f)}else if(h==="p"){let d=l.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((s=YA.exec(l))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);e.startObject(u)}else if(KA.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(ZA.test(l))e.materialLibraries.push(l.substring(7).trim());else if(jA.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){let d=s[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;let u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();let r=new jt;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=e.objects.length;o<c;o++){let l=e.objects[o],h=l.geometry,u=l.materials,d=h.type==="Line",f=h.type==="Points",m=!1;if(h.vertices.length===0)continue;let A=new me;A.setAttribute("position",new te(h.vertices,3)),h.normals.length>0&&A.setAttribute("normal",new te(h.normals,3)),h.colors.length>0&&(m=!0,A.setAttribute("color",new te(h.colors,3))),h.hasUVIndices===!0&&A.setAttribute("uv",new te(h.uvs,2));let g=[];for(let I=0,C=u.length;I<C;I++){let x=u[I],L=x.name+"_"+x.smooth+"_"+m,S=e.materials[L];if(this.materials!==null){if(S=this.materials.create(x.name),d&&S&&!(S instanceof hi)){let w=new hi;Oe.prototype.copy.call(w,S),w.color.copy(S.color),S=w}else if(f&&S&&!(S instanceof un)){let w=new un({size:10,sizeAttenuation:!1});Oe.prototype.copy.call(w,S),w.color.copy(S.color),w.map=S.map,S=w}}S===void 0&&(d?S=new hi:f?S=new un({size:1,sizeAttenuation:!1}):S=new Wi,S.name=x.name,S.flatShading=!x.smooth,S.vertexColors=m,e.materials[L]=S),g.push(S)}let p;if(g.length>1){for(let I=0,C=u.length;I<C;I++){let x=u[I];A.addGroup(x.groupStart,x.groupCount,I)}d?p=new Ms(A,g):f?p=new Wn(A,g):p=new Wt(A,g)}else d?p=new Ms(A,g[0]):f?p=new Wn(A,g[0]):p=new Wt(A,g[0]);p.name=l.name,r.add(p)}else if(e.vertices.length>0){let o=new un({size:1,sizeAttenuation:!1}),c=new me;c.setAttribute("position",new te(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new te(e.colors,3)),o.vertexColors=!0);let l=new Wn(c,o);r.add(l)}return r}};var ra=class extends dn{constructor(t){super(t)}load(t,e,n,s){let r=this,a=this.path===""?Yr.extractUrlBase(t):this.path,o=new Yi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{e(r.parse(c,a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){let n=t.split(`
`),s={},r=/\s+/,a={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)==="#")continue;let h=l.indexOf(" "),u=h>=0?l.substring(0,h):l;u=u.toLowerCase();let d=h>=0?l.substring(h+1):"";if(d=d.trim(),u==="newmtl")s={name:d},a[d]=s;else if(u==="ka"||u==="kd"||u==="ks"||u==="ke"){let f=d.split(r,3);s[u]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else s[u]=d}let o=new qc(this.resourcePath||e,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}},qc=class{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:ln,this.wrap=this.options.wrap!==void 0?this.options.wrap:Hn}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;let e={};for(let n in t){let s=t[n],r={};e[n]=r;for(let a in s){let o=!0,c=s[a],l=a.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(o=!1);break;default:break}o&&(r[l]=c)}}return e}preload(){for(let t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(let e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){let e=this,n=this.materialsInfo[t],s={name:t,side:this.side};function r(o,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:o+c}function a(o,c){if(s[o])return;let l=e.getTextureParams(c,s),h=e.loadTexture(r(e.baseUrl,l.url));h.repeat.copy(l.scale),h.offset.copy(l.offset),h.wrapS=e.wrap,h.wrapT=e.wrap,(o==="map"||o==="emissiveMap")&&(h.colorSpace=ce),s[o]=h}for(let o in n){let c=n[o],l;if(c!=="")switch(o.toLowerCase()){case"kd":s.color=Kt.toWorkingColorSpace(new Rt().fromArray(c),ce);break;case"ks":s.specular=Kt.toWorkingColorSpace(new Rt().fromArray(c),ce);break;case"ke":s.emissive=Kt.toWorkingColorSpace(new Rt().fromArray(c),ce);break;case"map_kd":a("map",c);break;case"map_ks":a("specularMap",c);break;case"map_ke":a("emissiveMap",c);break;case"norm":a("normalMap",c);break;case"map_bump":case"bump":a("bumpMap",c);break;case"map_d":a("alphaMap",c),s.transparent=!0;break;case"ns":s.shininess=parseFloat(c);break;case"d":l=parseFloat(c),l<1&&(s.opacity=l,s.transparent=!0);break;case"tr":l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(s.opacity=1-l,s.transparent=!0);break;default:break}}return this.materials[t]=new Wi(s),this.materials[t]}getTextureParams(t,e){let n={scale:new et(1,1),offset:new et(0,0)},s=t.split(/\s+/),r;return r=s.indexOf("-bm"),r>=0&&(e.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),n.url=s.join(" ").trim(),n}loadTexture(t,e,n,s,r){let a=this.manager!==void 0?this.manager:Nc,o=a.getHandler(t);o===null&&(o=new Wr(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let c=o.load(t,n,s,r);return e!==void 0&&(c.mapping=e),c}};var Hc=new Map;function lt(i,t=0,e=1){let n=`${i}|${t}|${e}`;return Hc.has(n)||Hc.set(n,new nn({color:i,emissive:t,emissiveIntensity:e})),Hc.get(n)}function Bt(i,t,e,n,s=0,r=0,a=0){let o=new Wt(new ke(i,t,e),n);return o.position.set(s,r,a),o}function fe(i,t,e,n,s=0,r=0,a=0,o=14){let c=new Wt(new Ss(i,t,e,o),n);return c.position.set(s,r,a),c}function qe(i,t,e=0,n=0,s=0,r=1,a=1,o=1,c=12){let l=new Wt(new Rs(i,c,Math.max(6,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}function Rn(i,t=[]){i.updateMatrixWorld(!0);let e=new Yt().copy(i.matrixWorld).invert(),n=new Map,s=[];i.traverse(a=>{if(t.includes(a.name)){s.push(a);return}if(!a.isMesh||s.some(c=>QA(a,c)))return;let o=a.geometry.clone().applyMatrix4(new Yt().multiplyMatrices(e,a.matrixWorld));for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);o.index||o.setIndex([...Array(o.attributes.position.count).keys()]),n.has(a.material)||n.set(a.material,[]),n.get(a.material).push(o)});let r=new jt;for(let[a,o]of n)r.add(new Wt(Ds(o,!1),a));for(let a of s){let o=new R,c=new De,l=new R;a.updateMatrixWorld(!0),new Yt().multiplyMatrices(e,a.matrixWorld).decompose(o,c,l),a.removeFromParent(),a.position.copy(o),a.quaternion.copy(c),a.scale.copy(l),r.add(a)}return r}function QA(i,t){for(let e=i.parent;e;e=e.parent)if(e===t)return!0;return!1}function Gc(i){let t=new jt,e=lt(4033533,1060970,.25),n=lt(2778052),s=lt(16763955,6965760,.2),r=lt(2829107),a=lt(12577023,4892376,.35),o=lt(14672874);t.add(Bt(2.6,1.1,1.7,e,-.2,1.15,0)),t.add(Bt(2.2,.35,1.75,n,-.3,.6,0)),t.add(Bt(1.4,.5,1.5,e,-.6,1.95,0)),t.add(Bt(1.3,.12,1.4,s,-.6,2.25,0)),t.add(Bt(.95,.9,1.1,a,.75,2.05,0)),t.add(Bt(1.1,.1,1.25,e,.75,2.55,0)),t.add(qe(.2,lt(16239529),.8,2.05,0)),t.add(fe(.34,.34,.05,lt(15254122),.8,2.24,0,16)),t.add(fe(.18,.2,.18,lt(15254122),.8,2.33,0)),t.add(Bt(.3,.3,.42,lt(15222847),.78,1.78,0));for(let p of[-1,1]){let I=fe(.62,.62,.42,r,.45,.62,p*.95,18);I.rotation.x=Math.PI/2,t.add(I);let C=fe(.26,.26,.44,s,.45,.62,p*.96,12);C.rotation.x=Math.PI/2,t.add(C);let x=fe(.4,.4,.34,r,-1.2,.42,p*.88,14);x.rotation.x=Math.PI/2,t.add(x)}t.add(fe(.07,.07,.8,o,-.9,2.5,-.55,8));let c=new jt;c.name="spout";let l=fe(.12,.12,1.8,s,0,0,0,10);l.rotation.z=Math.PI/2,l.position.x=-.9,c.add(l),c.position.set(-.8,2.3,.5),c.rotation.y=-.35,t.add(c);let h=Rn(t,["spout"]),u=new jt;u.name="header",u.position.set(1.55,.45,0);let d=Bt(.7,.35,1,s,0,0,0);u.add(d);let f=Bt(.12,.06,1,lt(13620442),.38,-.13,0);u.add(f);for(let p of[-.5,.5])u.add(Bt(.75,.5,.06,s,0,.12,p));let m=new jt;m.position.set(.25,.45,0);let A=fe(.05,.05,1,lt(15222847),0,0,0,8);A.rotation.x=Math.PI/2,m.add(A);for(let p=0;p<5;p++){let I=p/5*Math.PI*2,C=Bt(.05,.05,1,lt(15222847),Math.cos(I)*.32,Math.sin(I)*.32,0);m.add(C)}u.add(m),h.add(u);let g=p=>{d.scale.z=p,f.scale.z=p,u.children[2].position.z=-p/2,u.children[3].position.z=p/2,m.scale.z=p*.95};return g(i),{root:h,reel:m,header:u,spout:h.children.find(p=>p.name==="spout"),setWidth:g}}function Wc(){let i=new jt,t=lt(16747050,5908992,.2),e=lt(11883546),n=lt(2829107);i.add(Bt(2.2,.15,1.5,e,0,.7,0));for(let c of[-.72,.72])i.add(Bt(2.2,.7,.08,t,0,1.1,c));for(let c of[-1.08,1.08])i.add(Bt(.08,.7,1.5,t,c,1.1,0));i.add(Bt(1.2,.08,.1,lt(6711923),1.7,.6,0));for(let c of[-.85,.85]){let l=fe(.42,.42,.28,n,-.2,.42,c,14);l.rotation.x=Math.PI/2,i.add(l)}let s=Rn(i),r=new Wt(new ke(2.05,1,1.35),lt(15909198,6965760,.25));r.position.y=.78,r.scale.y=.001,s.add(r);let a=new Wt(new Rs(1,14,8,0,Math.PI*2,0,Math.PI/2),lt(16174944,6965760,.25));return a.scale.set(1,.001,.66),s.add(a),{root:s,setFill:c=>{let l=.05+c*.62;r.scale.y=Math.max(.001,l),r.position.y=.78+l/2,a.position.y=.78+l,a.scale.y=c>.02?.12+c*.25:.001}}}function aa(){let i=new jt,t=lt(14235198,4196362,.25),e=lt(16777215),n=lt(5917250);i.add(Bt(7,4,5,t,0,2,0));let s=new ui([new et(-3.8,0),new et(3.8,0),new et(0,2.4)]),r=new Gi(s,{depth:5.4,bevelEnabled:!1});r.translate(0,4,-2.7),i.add(new Wt(r,n));let a=new Gi(new ui([new et(-3.5,0),new et(3.5,0),new et(0,2.1)]),{depth:.05,bevelEnabled:!1});a.translate(0,4,2.5),i.add(new Wt(a,t)),i.add(Bt(2.6,2.8,.1,lt(11872817),0,1.4,2.53));let o=Bt(.18,3.6,.06,e,0,1.4,2.6);o.rotation.z=.75;let c=Bt(.18,3.6,.06,e,0,1.4,2.6);return c.rotation.z=-.75,i.add(o,c),i.add(Bt(2.9,.18,.1,e,0,2.85,2.6),Bt(.18,2.9,.1,e,-1.36,1.4,2.6),Bt(.18,2.9,.1,e,1.36,1.4,2.6)),i.add(Bt(.9,.9,.1,e,0,4.9,2.58),Bt(.7,.7,.1,lt(2829107),0,4.9,2.62)),Rn(i)}function $h(i,t){let e=new jt,n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d");s.fillStyle="#2f3540",s.fillRect(0,0,128,128),s.fillStyle="#4a5260";for(let o=8;o<128;o+=14)s.fillRect(o,10,6,108);for(let o=0;o<128;o+=16)s.fillStyle=o/16%2?"#ffcc33":"#222",s.fillRect(o,0,16,8),s.fillRect(o,120,16,8),s.fillRect(0,o,8,16),s.fillRect(120,o,8,16);let r=new Tn(n);r.colorSpace=ce;let a=new Wt(new en(i,t),new nn({map:r}));return a.rotation.x=-Math.PI/2,a.position.y=.04,e.add(a),e}function tu(){let i=new jt,t=lt(16763955,16755200,.6);i.add(Bt(.5,1,.5,t,0,1.2,0));let e=new Wt(new Es(.75,.9,4),t);return e.rotation.x=Math.PI,e.rotation.y=Math.PI/4,e.position.y=.3,i.add(e),i}function eu(){let i=fe(.55,.55,.9,lt(15254106,4863232,.15),0,.55,0,14);i.rotation.x=Math.PI/2;let t=new jt;t.add(i);for(let e of[-.2,.2]){let n=fe(.56,.56,.06,lt(11883546),0,.55,e,14);n.rotation.x=Math.PI/2,t.add(n)}return Rn(t)}function nu(i=16447210){let t=new jt;return t.add(qe(.38,lt(i),0,.35,0,1,1.1,.8)),t.add(fe(.12,.18,.18,lt(i),0,.78,0)),t.add(Bt(.3,.04,.02,lt(14235198),0,.4,.31)),Rn(t)}function iu(i){i.updateMatrixWorld(!0);let t=new Map;return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);for(let o of Object.keys(n.attributes))["position","normal"].includes(o)||n.deleteAttribute(o);n.index||n.setIndex([...Array(n.attributes.position.count).keys()]);let s=new Rt(e.material.color),r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a.set([s.r,s.g,s.b],o*3);n.setAttribute("color",new Ce(a,3)),t.set(t.size,n)}),Ds([...t.values()],!1)}function su(i){let t=new jt;if(i==="wheat"){let e=lt(14263866),n=lt(16107596);for(let[s,r,a]of[[-.1,-.08,.95],[.1,.05,1.05],[0,.12,.85],[.12,-.12,.9],[-.12,.12,1]])t.add(fe(.018,.022,a,e,s,a/2,r,4)),t.add(qe(.05,n,s,a+.1,r,1,2.6,1,5))}else if(i==="corn"){let e=lt(5940794),n=lt(7126853);t.add(fe(.04,.06,1.6,e,0,.8,0,5));for(let s=0;s<4;s++){let r=Bt(.55,.02,.12,n,.22,.45+s*.3,0);r.rotation.y=s*1.6,r.rotation.z=-.5,t.add(r)}t.add(qe(.08,lt(16241482),.08,1,0,1,2.4,1,6)),t.add(fe(.02,.04,.3,lt(14729322),0,1.75,0,4))}else{let e=lt(5216821);t.add(fe(.035,.05,1.4,e,0,.7,0,5)),t.add(Bt(.35,.02,.16,lt(6534468),.12,.6,0));let n=new jt;n.position.set(.05,1.42,0),n.rotation.z=-.5;let s=fe(.26,.26,.05,lt(16763176),0,0,0,12);n.add(s),n.add(fe(.14,.14,.07,lt(7028509),0,.02,0,10)),t.add(n)}return iu(t)}function ru(){let i=new jt,t=lt(13214026);for(let[e,n]of[[-.12,-.1],[.1,.08],[0,.14],[.13,-.12],[-.1,.12],[.02,-.02]])i.add(fe(.02,.025,.14,t,e,.07,n,4));return iu(i)}function au(){let i=new jt,t=new Wt(new qr(.75,0),lt(9278622,1711394,.2));return t.scale.set(1,.65,.9),t.position.y=.35,t.rotation.y=.6,i.add(t),i.add(qe(.32,lt(10134189),.6,.2,.3,1,.7,1,6)),i.add(qe(.35,lt(7319103),-.1,.72,0,1.2,.25,1,6)),Rn(i)}var Qh=0;function oa(i=1){let t=Qh++%3===2?"bush":"tree";if($i[t]){let s=new $e().setFromObject($i[t]),r=(t==="tree"?3.4:1.3)*i,a=$i[t].clone(!0),o=r/Math.max(1e-6,s.max.y-s.min.y);a.scale.setScalar(o),a.position.y=-s.min.y*o,a.rotation.y=Qh*1.7;let c=new jt;return c.add(a),c}let e=new jt;e.add(fe(.18*i,.25*i,1.6*i,lt(9065776),0,.8*i,0,7));let n=lt(5025616,670224,.2);return e.add(qe(1.1*i,n,0,2.2*i,0,1,.9,1,9)),e.add(qe(.8*i,lt(6734426),.5*i,2.7*i,.2*i,1,.9,1,8)),e}var $i={};async function ou(i){let t=(i||"./").replace(/\/?$/,"/")+"models/",e={tree:{darkgreen_tree:4168252,green_tree:6471498,darkred:14698554,wood:9065776},bush:{berry:14169162,green_bush:5814344},chicken:{"material.001":16765498,"material.002":16747034}};await Promise.all([["cow","Cow"],["sheep","Sheep"],["chicken","Chick"],["tree","Apple_4"],["bush","BushBerries_4"]].map(async([n,s])=>{try{let r=await new Promise((o,c)=>new ra().setPath(t).load(`${s}.mtl`,o,void 0,c));r.preload();let a=await new Promise((o,c)=>new sa().setMaterials(r).setPath(t).load(`${s}.obj`,o,void 0,c));a.traverse(o=>{o.isMesh&&(o.material=Array.isArray(o.material)?o.material.map(c=>{let l=c.clone();l.flatShading=!1,l.shininess=8,l.specular.setScalar(.05);let h=(l.name||"").toLowerCase();return e[n]&&e[n][h]!==void 0?(l.color.set(e[n][h]),l):(l.color.set(h==="white"?16775922:h==="black"?3816006:h==="pink"?16752564:l.color.getHex()),l)}):o.material)}),$i[n]=a}catch{}}))}function cu(i){if($i[i]){let e=$i[i].clone(!0);e.scale.setScalar(i==="chicken"?.11:.18),e.rotation.y=Math.PI/2;let n=new jt;return n.add(e),n}let t=new jt;if(i==="sheep"){let e=lt(16447730);for(let[n,s,r]of[[0,.62,0],[.25,.65,.12],[-.25,.62,-.1],[.05,.75,-.15],[-.15,.72,.15]])t.add(qe(.32,e,n,s,r,1,1,1,8));t.add(qe(.2,lt(2829107),.5,.75,0,1.2,1,.9,8));for(let n of[-1,1])t.add(qe(.08,lt(2829107),.48,.88,n*.18,1,.5,1.4,6));for(let[n,s]of[[.25,.15],[.25,-.15],[-.25,.15],[-.25,-.15]])t.add(fe(.05,.05,.4,lt(2829107),n,.2,s,6))}else if(i==="cow"){let e=lt(16777215),n=lt(2829107);t.add(Bt(1.4,.75,.8,e,0,.95,0)),t.add(Bt(.5,.45,.82,n,-.25,1.05,0)),t.add(Bt(.3,.35,.82,n,.4,.9,0)),t.add(Bt(.5,.5,.5,e,.85,1.25,0)),t.add(Bt(.2,.28,.46,lt(16752564),1.15,1.13,0));for(let s of[-1,1])t.add(Bt(.1,.12,.18,lt(16115400),.85,1.58,s*.22));for(let[s,r]of[[.5,.28],[.5,-.28],[-.5,.28],[-.5,-.28]])t.add(Bt(.16,.6,.16,e,s,.3,r))}else{t.add(qe(.26,lt(16777215),0,.35,0,1.2,1,1,8)),t.add(qe(.15,lt(16777215),.25,.6,0,1,1,1,8)),t.add(Bt(.1,.12,.04,lt(15222847),.25,.78,0)),t.add(Bt(.1,.05,.06,lt(16755251),.42,.6,0));for(let e of[-1,1])t.add(fe(.02,.02,.2,lt(16755251),0,.1,e*.1,4))}return Rn(t)}function lu(){let i=new jt;i.add(Bt(4.2,2.6,3.4,lt(16774112),0,1.3,0));let t=new ui([new et(-2.5,0),new et(2.5,0),new et(0,1.8)]),e=new Gi(t,{depth:3.8,bevelEnabled:!1});e.translate(0,2.6,-1.9),i.add(new Wt(e,lt(4156356))),i.add(Bt(.9,1.5,.08,lt(10510381),0,.75,1.72));for(let n of[-1.3,1.3])i.add(Bt(.8,.7,.08,lt(12577023,4892376,.3),n,1.6,1.72));return i.add(Bt(.5,1.1,.5,lt(11881018),1.2,4,-.5)),Rn(i)}function hu(){let i=new jt;i.add(fe(.9,1.4,6,lt(16774112),0,3,0,10)),i.add(new Wt(new Es(1.2,1.4,10),lt(14235198)).translateY(6.7));let t=Rn(i),e=new jt;e.position.set(0,5.8,1.15);for(let n=0;n<4;n++){let s=Bt(.5,3.2,.06,lt(16447210),0,1.6,0),r=new jt;r.rotation.z=n*Math.PI/2,r.add(s),e.add(r)}return t.add(e),t.userData.blades=e,t}function $A(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#6cc04a",t.fillRect(0,0,256,256);for(let n=0;n<1400;n++){let s=Math.random();t.fillStyle=s<.5?"rgba(80,160,50,0.6)":s<.85?"rgba(140,215,90,0.6)":"rgba(255,255,255,0.5)",t.fillRect(Math.random()*256,Math.random()*256,2,s<.97?3:2)}let e=new Tn(i);return e.wrapS=e.wrapT=Hn,e.colorSpace=ce,e}function t0(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#b8864f",t.fillRect(0,0,128,128);for(let n=0;n<128;n+=8)t.fillStyle="rgba(120,80,40,0.35)",t.fillRect(0,n,128,3);for(let n=0;n<300;n++)t.fillStyle=Math.random()<.5?"rgba(90,60,30,0.4)":"rgba(220,180,120,0.4)",t.fillRect(Math.random()*128,Math.random()*128,2,2);let e=new Tn(i);return e.wrapS=e.wrapT=Hn,e.colorSpace=ce,e}function e0(i){let t=new nn({vertexColors:!0});return t.onBeforeCompile=e=>{e.uniforms.uTime=i.uTime,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       #ifdef USE_INSTANCING
         float ph = instanceMatrix[3].x * 0.45 + instanceMatrix[3].z * 0.3;
         float bend = position.y * position.y * 0.06;
         transformed.x += sin(uTime * 1.6 + ph) * bend;
         transformed.z += cos(uTime * 1.3 + ph) * bend * 0.6;
       #endif`)},t}var ca=class{constructor(t,e,n){var B;this.scene=t,this.farm=e,this.root=new jt,t.add(this.root);let s=e.level;t.background=new Rt(10476799),t.fog=new Hi(12577023,40,110),this.root.add(new Zi(16774358,6262586,1.7));let r=new Ki(16773328,1.5);r.position.set(-10,25,12),this.root.add(r);let a=$A();a.repeat.set(s.w/4+10,s.d/4+10);let o=new Wt(new en(s.w+40,s.d+40),new nn({map:a}));o.rotation.x=-Math.PI/2,this.root.add(o);let c=t0();for(let[V,H,F,K]of s.fields){let O=c.clone();O.needsUpdate=!0,O.repeat.set(F/3,K/3);let $=new Wt(new en(F+.6,K+.6),new nn({map:O}));$.rotation.x=-Math.PI/2,$.position.set(V+F/2,.02,H+K/2),this.root.add($)}let l=new Wt(new Xn(7.5,28),lt(11569754));l.rotation.x=-Math.PI/2,l.position.set(e.pad.x-2,.015,e.pad.z),this.root.add(l),this.uniforms={uTime:{value:0}},this.crops={};let h={};for(let V of e.cells)h[V.crop]=((B=h[V.crop])!=null?B:0)+1;let u=new Yt,d=new De,f=new R(0,1,0);this.cellIndex=new Int32Array(e.cells.length),this.baseMatrix=[];for(let V of Object.keys(h)){let H=new li(su(V),e0(this.uniforms),h[V]);H.frustumCulled=!1,this.crops[V]={mesh:H,n:0},this.root.add(H)}let m=new li(ru(),new nn({vertexColors:!0}),e.cells.length);m.frustumCulled=!1,this.stubble=m;let A=new Yt().makeScale(0,0,0);e.cells.forEach((V,H)=>{let F=this.crops[V.crop],K=Math.sin(H*12.9898)*43758.5453%1;d.setFromAxisAngle(f,K*Math.PI*2);let O=.85+Math.abs(K)*.3;u.compose(new R(V.x+(K-.5)*.12,0,V.z+(K*7%1-.5)*.12),d,new R(O,O,O)),F.mesh.setMatrixAt(F.n,u),this.cellIndex[H]=F.n,this.baseMatrix.push(u.clone()),F.n++,m.setMatrixAt(H,A)}),this.root.add(m),this.falling=[];for(let V of e.rocks){let H=au();H.position.set(V.x,0,V.z),H.rotation.y=V.x*1.3,this.root.add(H)}let g=[],p=[],I=s.w/2,C=s.d/2,x=(V,H,F,K)=>{let O=Math.hypot(F-V,K-H),$=Math.ceil(O/2.5);for(let st=0;st<=$;st++)g.push([V+(F-V)*st/$,H+(K-H)*st/$]);for(let st=0;st<$;st++){let ft=V+(F-V)*st/$,Pt=H+(K-H)*st/$,Xt=V+(F-V)*(st+1)/$,X=H+(K-H)*(st+1)/$;p.push([(ft+Xt)/2,(Pt+X)/2,Math.hypot(Xt-ft,X-Pt),Math.atan2(X-Pt,Xt-ft)])}};x(-I,-C,I,-C),x(-I,C,I,C),x(-I,-C,-I,C),x(I,-C,I,C);let L=new ke(.18,1.1,.18);L.translate(0,.55,0);let S=new li(L,lt(16777215),g.length);g.forEach(([V,H],F)=>S.setMatrixAt(F,new Yt().makeTranslation(V,0,H))),this.root.add(S);let w=new ke(1,.1,.08),P=new li(w,lt(16777215),p.length*2);p.forEach(([V,H,F,K],O)=>{for(let[$,st]of[[0,.5],[1,.9]])P.setMatrixAt(O*2+$,new Yt().compose(new R(V,st,H),new De().setFromAxisAngle(f,-K),new R(F,1,1)))}),this.root.add(P);let M=n.low?14:26;for(let V=0;V<M;V++){let H=V/M*Math.PI*2,F=(I+4+V%3*3)*Math.cos(H),K=(C+4+V%4*2.5)*Math.sin(H),O=oa(.9+V%3*.25);O.position.set(F,0,K),this.root.add(O)}let v=new Wt(new Xn(3,28),new nn({color:5223400,emissive:1727114,emissiveIntensity:.3}));v.rotation.x=-Math.PI/2,v.position.set(I-5,.03,-C+5),v.scale.set(1.4,1,1),this.root.add(v);let T=lu();T.position.set(-I-5,0,C-8),T.rotation.y=Math.PI/2,this.root.add(T),this.windmill=hu(),this.windmill.position.set(I+6,0,C-10),this.windmill.rotation.y=-Math.PI/2,this.root.add(this.windmill);let G=aa();if(G.position.set(e.barn.x,0,e.barn.z),this.root.add(G),this.root.add(Object.assign($h(e.pad.w,e.pad.d),{}).translateX(e.pad.x).translateZ(e.pad.z)),this.arrow=tu(),this.arrow.position.set(e.pad.x,1.5,e.pad.z),this.arrow.visible=!1,this.root.add(this.arrow),this.stacks=new jt,this.stacks.position.set(e.barn.x+4.6,0,e.barn.z+3.6),this.root.add(this.stacks),e.pen){let V=e.pen,H=lt(10510381),F=[],K=(st,ft,Pt,Xt)=>{let X=Math.hypot(Pt-st,Xt-ft);for(let xt of[.4,.8]){let rt=new ke(X,.12,.1);rt.rotateY(-Math.atan2(Xt-ft,Pt-st)),rt.translate((st+Pt)/2,xt,(ft+Xt)/2),F.push(rt)}let nt=Math.ceil(X/1.5);for(let xt=0;xt<=nt;xt++){let rt=new ke(.14,1,.14);rt.translate(st+(Pt-st)*xt/nt,.5,ft+(Xt-ft)*xt/nt),F.push(rt)}},O=Math.min(3,V.w/2);K(V.x,V.z,V.x+(V.w-O)/2,V.z),K(V.x+(V.w+O)/2,V.z,V.x+V.w,V.z),K(V.x,V.z+V.d,V.x+V.w,V.z+V.d),K(V.x,V.z,V.x,V.z+V.d),K(V.x+V.w,V.z,V.x+V.w,V.z+V.d),this.root.add(new Wt(Ds(F),H));let $=new Wt(new Xn(Math.min(V.w,V.d)*.4,20),lt(15254106));$.rotation.x=-Math.PI/2,$.position.set(V.x+V.w/2,.03,V.z+V.d/2),this.root.add($),this.penSign={x:V.x+V.w/2,z:V.z-.5}}this.animals=e.animals.map(V=>{let H=cu(V.kind);return this.root.add(H),H})}cut(t){for(let e of t)this.falling.push({i:e,t:0})}update(t,e){if(this.uniforms.uTime.value=e,this.windmill&&(this.windmill.userData.blades.rotation.z=e*.6),this.falling.length){let n=new Yt,s=new Yt,r=new Set;this.falling=this.falling.filter(a=>{a.t+=t;let o=this.farm.cells[a.i],c=this.crops[o.crop],l=Math.min(1,a.t/.22);if(l>=1){c.mesh.setMatrixAt(this.cellIndex[a.i],n.makeScale(0,0,0));let h=.9+a.i*7%5*.05;this.stubble.setMatrixAt(a.i,n.compose(new R(o.x,0,o.z),new De().setFromAxisAngle(new R(0,1,0),a.i),new R(h,h,h))),this.stubble.instanceMatrix.needsUpdate=!0}else s.makeRotationZ(l*1.2).premultiply(new Yt().makeScale(1+l*.3,1-l*.85,1+l*.3)),n.multiplyMatrices(this.baseMatrix[a.i],s),c.mesh.setMatrixAt(this.cellIndex[a.i],n);return r.add(c.mesh),l<1});for(let a of r)a.instanceMatrix.needsUpdate=!0}this.farm.animals.forEach((n,s)=>{let r=this.animals[s];r.position.set(n.x,Math.abs(Math.sin(e*6+s))*(Math.hypot(n.vx,n.vz)>.3?.08:0),n.z),r.rotation.y=-n.heading}),this.arrow.visible=this.farm.full,this.arrow.position.y=1.5+Math.abs(Math.sin(e*4))*.7}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function uu(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function du(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var fu={coin:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAA8AAA2AACAgICAgIDAwMDAwMDBAQEBAQEBQUFBQUFBQYGBgYGBgYHBwcHBwcICAgICAgICQkJCQkJCQoKCgoKCgsLCwsLCwsMDAwMDAwMDQ0NDQ0NDg4ODg4ODg8PDw8PDw8P///////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBUAAAAAAAAANgEQa4V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJ8T9j9BEACZ6Yb3cekAJBADmnREajQAAlAAAKrgzoRurkIQhCIRjn/kb//kOd///87//Oc5znP/znIQhCEI35znOQnoQgs535w4AAAAAAEEf4/4AeHj+hjo4f/9Dw+W23/3a3b/buRAAIAgBgUeFbmpQocyT72IEPpfVsZdiMAo23bhSNE3jfYkInBklRiFkj7mVRCLPPI2014Qlcm5KEzFIvKN3lSq8jkv4/76rMr6tFCh/8vcEhwF+7wweSVOkXlZ3r//Yqt1s2121t22skjaT/+zjEBYAMBYl1uPKAEXsWr7cSYAKAQAjPWSw/37j2ufGdefN4RjHE3E1IMsg4gm5T0CSOKDHQeRYxw6UPC7CY9jUDqVaiJ7USRnIRzI+Vuvpb5Ge+vdjmT/O6rXedI4lEe//9P///oyqJyy17XW2yyaRtNgkAAAapbnsCcyWuUvB69p3CZacaLTUghtNCcN305mZ8WyFmZfmja+1/v73cO/htbt2/bf+g4OHKRQNL/idxfKNDZwjnmfBAH35cMYKiUjFjDpaRctOSSSSSSSSSSSNtlEAAAUL/+zjEB4AM2VNzuIGAEX2iLncYUAIBA8YHg4l/ZFtJRychakF7HMGFmRdrzpnUVpLYaA7GYG8ZwWYbY3VzSOnb3L9m509GYW9TPqbqVubDmDG/4CwjCVZb3nDgI17/qFJGUvyDD70tbIn+SJ5HW3/b2+by62uRyJIAgAUkgtKTqODlDhuT3mZ5LcSFiIKiDIgkNQDjw/Y7DOIDRiiJhEpBR0eQY5yHZFUZeuUx8jkp6Wcz0bumVNSq1aPWimPYq6r6jX9Bd2v00cr/UnUqSZipiaiHaJeY39v/+zjEBYAMEPmL+MQQEYuv7DeSUAOlqYCQA64jCUQ38D8vLnamvH5wtJIsSPVuiJsO5JGXBhDhgaWDIxTriRd7n6QuJiNqVz2lx//3ErNfft83CJcJU93rxX/NR/+lWZ50k3//WH9nCR3+pye3XWyxpAgLsHxQTPJACppsGmxMv1D4BOA4sLCSHUowXMKqhjFKHRjKNOImdYk7o4zHFdmLi2llQxxh/RUYx2vshraFZHRidmk+u6eYhzsjbWfX/26mOzuQ1WUpC/+uzxJCtXZXd4Z2W6tokgb/+zjEBQALGH9r5hhsUZuxrbSRmrnldMICg8OAnN3Q0Lg+iGZZKA85CGLCKIr6JdHgh4YUEMjxCsIEHKQpi8UVn7BAgMLySixzres0LAnnHuxzRrZsMP+y8uhIg2wshrKDIJgT/f///75sgABkmJCeGq0+flHwTqDdZm5NRPU9r95qxccnI1ZT+yPLAoti8svy/uZHaxS/7LA8MSd/8j4UcpcyWXRyNJ6OIgNEXdHgNP//+XZWUdo8oK4Iy/yZam5uEyB7oE0R+oHsqttJd9bLGkQAGeJ4Fcj/+zjEBoBL0Ntpp6Rl0YQwLDTzCXs0NklqHTMFRSMAWFSV4pQk2xQs0l7/LNsXtBZCHIqxikvKfxwGYPvKZ5uxAyyuUz7vnKW1OIUDGuJIs1HiyMVCQnGDgH/pVIrEa3Jd48e163D7JJbZZZGiKYJFMxNkCB3jbtAvaMCE/cZnMXBhiGTdqz2bTKd2y7u213tqY+1KqVlotEgw4H8/1lVhF7PGJu7o9lehHrd+dyFeCCMgAIKO85//93IRyEQid3f/+UosdJBUGlaYqKqZn/6xECNybHRUGWn/+zjECAAMsU1n5IxRQVYirvyRijbL7W4lOTybI0t6VAsLHNjTmcdWndmOwigkKQZZo6qREgIMSKCfl26nAQQpWR6GTZvRWNRzazPSGHKQxnCgQoBE5WN/m9WMKOGFCTBINMFOSZWDJFzhdnZ4qYiH1taAAkibFqUslDUgtSxUlMybe00gQdnUKpMZJRSspP8pt/OPGzhwfsPOTiaktikWmU5t7IIS/3nO2c7oQh6aW2q/ILQM534o0Lx5VZ8yvgDa6/3a2RtEAFQJJYxmKTMbEgOGxOS1ipv/+zjEDAAKIRNppIRU0Vuvqr6SIAGU6ZnDbpmquLCkRxyyZprRhAlYi5PD5mVSv8xq8yif8pZZWMBGM5jG+V1KVHUwowp+NK/+Wf/vBqh1OKmciJ/0uCAJ7jCtmiQlw+YIoks2iZztOY8SXRhmMOVRNVSFDPrBs6MqO3YrPKkqPzEHGKyKRDdHpK6nZKCHUyt/8v6p3pUS3/9H66kOi1kb//U0o2Oyy5ayX6f/7y6XAoFAAmj26DIA54mPViYnifksNb/dMH9Gh6H9GmzwaUPC6saHo9R48Bb/+zjEGYAROYlFuMQACYoybHcGMAMTlg1AiYhZppB8uWUc6CGNFpGn3s8FiqlQksPLHGMLSVdk8ZtSsx8WKS7pW2OnkswOirnoa3XQi4vrEXpogw8wfSeflzx/jXFb/9oVe/UOXr/tCtRltJ45HJBJJJJJJHG2ikSACQUQla7GvDq+iHlwiKXz7cqh+cRT22puJ5LcFxBaIrRDpUlrZLpSf0QgAReiH1aoK8/9YxZUyRXG0bpZClI/L/miz/0w8SF/i0L/sOf9CBr////4JVWS267W6xtlAHz/+zjEBIAKrRVVvJGAEU6hqPyRilDFlHMFkaVjBUtlahTEEoQRqJQKitSgYSFrUQ+laMKU/PltQj//z8/uUVxaHNPLiglP/rLPBEpW9F/o///Hf8A5QxpPk+eWg6BIO/9N5s7MzxVR/40CBHFyckaYfUay6nN7BO2wJ1FkTTSpWWtS1JOGkdlIEjSWixYlL2/5VhkQhzjopVu1YY3/3Kvd+Z+3R0ZYYKg8z68SkmCbnv7izAAYBbdlmmtZAAGfmzz4+2NnEYYtfIUkFEXsxAnElyzNb0tjDHX/+zjEEYBKOUk7owxNwVAhpSQwjOG4Li5AzJSql35qFQy5QHyo+Uv/y5c36Ouq5nIGHaAlGt/7esBJoGHB3yPZDgsKuAAAq6BFIF0KJPTZP+lR2UlX4edk9YZEpI3qtJTM6vkazZi1KhHsjLD/kO/lPXVfnfv/D+BxPjBQFUEgVClAbyn/W6h+X2bHPCwXgyxn8wa6asNGbQAGmcksZQE5mqzypAJDP8WfpkLLbZtF4/+3CbkS/l78jGKvT1pMGW0Ch+U2uFaRrOOe1xGsEpFjv/t+7+sCK/r/+zjEIAIHoNMtQQRpwOOOpKQSjADxNQubFwc2tO3nn1P+ccs7b+Z97a8zlGApm9gSQQF1Bu4maGEy7g/zwt/Rdl2+/f62Ko/DdVoBBkGrQcGNS6nD19RgSUKbRvQbmvApzP0+n++38nyGyWU7xsiLnKIOsQ5ShAdFp25W8xcJQ00ZNll7U7QxUjONoTfAzWWWgQ71gTsySVbmFNbkbqsHdy3gZZmhbwkFpi/bIoeibhHhHVReQzfTpcYjBCa+Po7qLPUZt0ccmyeQtrmGlKoKnWmjTHTSO/b/+zjERoMIxKEYQbBggS0aYoTBibjR7JxddQA3/IGgk9enf0g8INznv+qOXadUsTn1HIwuruzUy1wLVFzxG1HbbhS7dnCqNSc9cjFAnAhuDrqfUYhOdZdX/v3wnTDYeWaNBcnUtq/g+HwRAk5/+so9xOGSSSRyq5SmRCMMgCPhbEbhPtdMgSD6s1gHBCYjWTiw+MPTLx90XEAxmBCRFFlJMgG+A2Nihhs1sZITY3TcD4g9Eb4AbgbiIPzGtFkdSsrEAGQE5jKhc2FlA5GjSS0FezWJAZcc8nz/+zjEXwAKuNko1CSAAnMvKjcfIAJwEUIgJTJ8g6OrRt//jIEwRA3IubkUIIeJ80UpSSXpJLZX//6C1poFY0TL6aaBgXPWAYVBVVEfCqqqUDARMGBpYKrBVxY8Ig7BVYKnSx4sDUFYa8GoKrBU6WPCIOwVgrLHiwdgqsFfDvKnVHhE//xLEsseUDQ8FR+o8oOwVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjERwPI+BkKXDGAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",pour:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAB0AABlQABERERkZGSIiIiIqKiozMzMzOzs7RERERExMTFVVVVVdXV1mZmZubm5ud3d3gICAgIiIiJGRkZGZmZmioqKiqqqqs7Ozu7u7u8TExMzMzMzV1dXd3d3d5ubm7u7u7vf39////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA0AAAAAAAAAZUIJElnYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJyTVflBEACZuP838ewAIRttomOAAgKMYxjGAAAAAAAM5zn/oTnP/kIQn+c7/qc///9DnOd/9TnO5CEIQhCEOc5/OQjKc5zn/+pzgYGBixAAAADIAZ/+Hh4ef//HWeHmYiZiLiId3+9tljkbYAUvBf3B57VMKFFgajTq9hgSw9vGATI4NT9MRyqfti+ciZn9ay6z4ntzvtRX94V6MkeY4qcSxaQmDrCLiiBCJTYUDLFsqrduFkDGbWWA9NA+23u2iyv0OMqiqLi6qIexogAAmzkcz/+zjEBoAMaJ9z/PMACXoT77T2DLr5xpRwmo+tejViNLrQV0unMDpRKmf3xG3+n7ekG8PeQ+zP5Nnsp7by76v9VPvvQrZ0HD9Dm/uZ+BxvtZWx07ozk/4fo0JtCnY9Ns+s8GpfXkGW2W9uWSfff/bRtEkACBWcz9Z1aucp5mvMyoLEBgv6shaUF51EzzLTNeRVAcWUr5mOVBqsJ2ahCOGEKmUSHia5gt5wo4+1QgDHWOQoo5Ae3jAw8QJTNgeaqANWA4+hKovrXOCCe8/s2omPo2kQBDo6KA//+zjEBwAMQTWB5IxPwXySL/z0jHkdAMqONE/PgoR6yqC0BEFdYmtRZmDtd8nNYQNqnWOb4dCut86h1oXkWhghK4Yn2lJb3dtqdcxqIxGdWYEiNnZ2o1VTT54rCLiofSRGg8tIjdVUZcqurcyZmH9bRIADYcFQiyhEXVEcGmE9U1CqtBabMc1U0F8otQTMGOLsZqAxpCXSBPjPqra5h1HYOpqnVkEMk7q37+bv5+52+WkRhL7Fpj7/r+fbds5n6Ytr/vt9t4rd/VVpVmd1RD5kAA5jNJMxCdj/+zjEB4BMCKt/zCRq0XaTb72DDTnL/wdMNmYA0lxoQri7O9AypdcjDgHNHRFiakY8YF3Bf5EK8noRQjI5NIGBsEFa98EWSIz6h6dtqLZ1M21jFkQGLpKH/YqAUaA4SWyLti8sMSay4mpmHdLWiPVfmXSXc/bwgmiUaL2JIGt3OeCnx8162c5b/x8p7exVfrvug7kSyS8auQ0MKOGcm+yuTCHX29+GfPvr+9q/HnzT/H07X6jmfGDPvIf5hA3/4YRKAJEcz6ytt5d7q0SAEijUJFlRVcEAYX3/+zjECgALQIGD7CRjgXMTb/zzDSgwAcALTYh1OcITLQqDsEVxd+HacHWghYcWDEIhL++RkKMPl1rYKvADDc05zDEhGIK2pYpRBl4udRVg+/T+igsLXH10soJoa5tqiFdbEkAADPGKRJwohFqxgkelDSMGvZHdqNS20/lQhkSGiU+G3Vd1r26IZoUsKHOwi8c8cTApEJ0iLDazY+G4PAiK2pKstAryQxDEXrQZtkix2UFRmE8TIERGWXqLiYlvXUiAAfHee0pyM5Amsh0gEZKp4IyowFVQJZb/+zjEEAALSJWF5JhyQXATL/hjDLFMu/a2WKTDPNek2szp+b3TOinCBUMsEMYfB+FXRZxhTiR1hhC0FIcLiVdpdyJwixKG0e5cb1Vk1xZK0dXdXRoX+QAIpHaYCwFgm7hhxLXcw7EK2jCqj5HLTzEpsCbYXzoA88Q9FwpCY7bBpAff22HyRK7ZDDv8Xn2uuUl+cgo/CLGVM+2/+db1HP91H59hfV/q+Hgz039qWViLl4h7G0iCCQuTyto9axgTraOmsywYxfOT/NPKqfDvVv93KSLLwsw5yEb/+zjEFgAKoN2F5JhtQUmMMDzzDDBSxklJT+HskpJ3t1//PBH9ZWKxTNuoJ50Aa3qjjxRxEHTP9fb349ZJLqhaZlhWaIkAAACgeiRGSGgiVXkViJNUBFugdEscbBHYhvXvw6PEzWFHnSd1gSYUvF8nAcDnmWQykExxCBFGHlylB+tYAY6guivku4CS0qCpY1H1jmdphoZs2iQACwUA+SQssxRB6WopJbnWCoVsbOm3k9GZB0M07M+WmGc9w0UEAiZ98YpZQkVoYxdiizxqipfQ4NpmY4YZ4xz/+zjEI4AKZHWD5hhnwVgX8TzzDHDipVXj9NHeyiKpKMTGxlXUzMe2yMgI9kKc0NBgMckR5x9BBMrLPi6xCytRxFJgFSIdLC7sxUm1Z4ejmZ8UywX7G0L86YfUkpAo8TBkSIKnbhWHMyMaXVHPJgMQ6ei2j0OqzapWZlhnVUkbbRIGLROVHJi6+1xguoSqFAeUTMxauTpoEvrMUNKwhyEM7pzq+mZUqmnufc19ifKaEyG7z8+doNiRXkL/BB3EMMfurAjCitWr+lWnJ021nURHRUu8jaKIFSD/+zjEMAAKpPGP5hhq0VsOcHyTDGnKKkrXUkrd4Ay2AGiZo4cjoJgUlKxHOX2TGfPKAjkApyJE9J3Mu9lWkA3fivf377+7pFVecJnh5sMOYwxJ6f4ju/f3zf+He0hmX9M1mrp8hphrEyAAAOrFx6ZD4wzOG4+lotc6SLBieKUdIXcTJD7VUS95i4VO2Lc8QioXC6IVGB0+YJPjxqGI3dZaqMfCaII5HH3Oar6N7s6kgBBSQeIu7qYlrY0SgLDA7JWaTKT1eKezFM6O6NxJq5hljXBSKSjwuNP/+zjEO4AKOGGD5hhqwVQLMHxjDHhlTw8REQ6KEhLFigCeBzyl4ftMMAxwZ7lFbSpYcRVnFJG3nj6ESugGZxR55IwwjFWLjMyamp0sSRAIS5POECFuQZDkS9MPGzrl1MHkxbZMnlSWBlgXGhXLIHDWlnF+MfY3Mk/l9SJ/Qy/I57De5LRhRBdQuoVKikFeNSsyFNlwqOG1XJFtNi2qrnJqXjaNogAzIKQswmjkEgmqNokf8dbZ3hQJBSMlniQTlEFs0aK/fYq5D5ZPeefDNO/6iFgwfDwVNLP/+zjESYAK2MmF5JhpQVyVsHyTDLgCI3YF0ihIE0n81QtFURCy0+uqBuTDTUuTahCemNqpiH1jSIAJqs4YE9JEP0DUWs09ms3qPqngFOpA4NCol12JgTJDK5/SmM/LC/P5A0VHBaYYkeIqYSSbSGTgxyMsiXWs49CibM5s7hkjqMKW+0otKzM09PLvbGQQACJCxKgOQeSM7Uad8iiWUP6wFFdRYJypG8OGDbH5auC6cgPBmAENiYgkQUFmMW1mL82hTBjyThUXJ3LpBXLgtKrQ3VO0rSLhBTL/+zjEVAAKrJWB7BhjgV2Pb7zUjDhAlNnUsnZLrrZG0SAAExsaOa9JGIGiWe5QE61Eoq4L0uaNN+sarIvsZ60vaZaUbaEPLYi58oAwwpIq1ULuhB0m26Bx4ImECwe/xvZ3WPdJqd7WMNCOxiRr3v/+1sbaJIK3sayHFH6CInnGhSAGDAtGilmk54dnH1JFYBHMQZQwmyqY8POckI+ZxKy+tmGbGI0QX7RyEXURrA/DA8jb58pt9nqU5G+4f7AHQqqNiP3LqI1rSIAIwS0ZmtK7EgjqiZNplAb/+zjEXwAKVIF/p6TAEUqXcTTzDHrWkdNZlWxzTB0TAksqJ5FZ8PpQ4kAktDCSoCCq2ltJwACyZMOqax51MJoum6DAtf08lfCkjUMahg2wSPY01V5ZkVE+lQAtpGS23zUOlfXaiTCM50zCJOgjMVSDuxun1E7h0VcV1lxKRGGIGCRyVqMsJk4jESnKdiV1Ys6CjIhS+8ECgltNJ3tcfNdJOFHIHHg09FVcrM3Lq4+jaIAKW5kOL58unILQsEnQybFtTgpgYmmaRAttrAc886dUnjb8ttmH+nP/+zjEbYAKmDt/7DDAwVWNL7jxgTpn3KIaED5lllqyu9yPMlskNyupoAgkgwukwEBpSk4GQu7i1KzjdUs9zWsMSqZuIy4uofRpAgAWE+zoc/DizzK1trbFqz7NGiwkbAbiyIyUqydtdSfpKXw8iKVMnr/mxqpQ+jFIfXmp8/ZCk+yIZXtOmW3R9ym2YLOqvMmboREZs+v4dUK2ZxLrxGqcyr2+qJ9rZAAJ+0FSpTrPYPGlaYpgUqZOH2us1E3ePekyVSwXUYgbPruVCEWauN1bNiwIssVBQsP/+zjEeYALmOV755hnQXKubvzxifiUMFyN3F0gVxZbj+6HNynrblzbB6LWF1G0G3tcUUll4q0uzO8OqRtILjcsBQHmzWD3Vh9EvKxXFAnhqSz1QlPUBADMOF4bi1wurg0raqJX16YsIt1nmbl2Gx8zwodo6Pk/g2G7tKVpHIO+83zCTL9SfM2oQgg/NPJpZXWtrbqqqG0iQAAD1sGZy+oKDYCp2kckaixhMucoMTRYxhEoo00Gf+WouFQ1z3BEbUWaHJmS8fbZyT4cR1N+5d/L7fLL+a/5l5//+zjEfgBLLJl55IxUgWgX732GDDr09S9s5Z30p5v0Scv+0MzvzlOQ0FLGV9hD3q129uvsiRJAADdP3Br6w1THEIOJzkDbsSaEDbOZbHkqrdsN7bxEBkMPRosIToEHknAUkLLBZ4joPElDl1HgZNpLjiQDc9IRddr1zsmRqUe3Jem8te9pwoHrDqlr79ybqp+kaIAGf35yJxOpZMKV5LK4KuHBIy5GgmALqABdiVBzaPDpGpCizyOrxMoyUiP/HWoMTzzReSV+ss9QCLdUJBSwFp5tBOh+91D/+zjEhYAMXWtz7BhjiWeJbrWDJKJa4k9KDjXQae6qqabl9UmQAAVy7L+dbE+rCc6GBTJDCgYIx+GARWOMmdWhtAldUQix3fV8zsZbo5ei6IxyugwrEbdja+2rshG9BdDT7u1b5Zrl/IjEathFUdJln6sdRfNxQG8sq1ORtUsJIhXf/f/bWRpEACECLEHUZ2HQ2fExCIjg0J0ZImQyUuTk0rZxl8VhGjZ2b6BqNmC9Lm3AzdvZw5KabTfHj96sxIJ0HkGTytViErSF3DQWCowesVTyFMJpHi//+zjEiIAKuJlz54hqAY4xrXzxlThX/W11li5JGh2d3d2sbZYFaiDiQQ8TIhUmA4MrKiQ9YJtC57SFAfVGVmFDUG1aXg1OFwbSA1BT6qvFPT4VyjnoZUWhrP+4NNF/dC4TdpPCBGAGAIslTytsELr//zkNsG2qZXFVu90sskaRIAAaVaKzlVix4ywQRNNcZKvZaaBXsWnQqqpkQe6BG0bXs7/zY+A9o0b+SmSA8RJmlGxibBK40rKuJw6xV2ngIKuQ5q7WGHC4DhUwPeTER02IDbIaHlD5N3P/+zjEjQBLuJ11p6TF0XMcrrz0jLo3P+aLTCtbPeNFgdujA4LNKxxiLr4awMOVnUtOsVV1UvTmZrLzvOEofDSFRZjm0nwhOvVcdXijkIUir7XDaCULm0RyGvBm1yDwVPiwVcJbjComeId3ZmsjaIIFGaCSNZqEpeOjErct56JHGOQ1kBqLDQWFNV6jISbJSQoYbeEQSKY5GvnT/m/k80V7i3iw9gor9sm+ei8TBHDwu4dK26bTy///vSlzwECSFd//vrW2kQAQ3Z0wCowJADiAHQrBBjbTCKT/+zjEkQBLXJ9trRhlUVEQLXzxmWjIfe9qMnGqduhkCIMdq0vKP7GRTtaGcl4jtZXDJtn7NV8/j/tz1LyzeD0aAE6xFp1KmnwqKJv9abtvNSbFu65JXLzcqp/0iAABkk77mTmFhxdEYmvT2khhzAXXi5peFaudJjQlL4Z80eSh/Lz0TR9AV7vTPaEsFmEXv1k2hZgfNl/WfV90NogMPHX5NggcQTKLJDVKWt/fb/+2RJEEFDcp1nAiPtmXITKY4KRhCiJXi1vcwgHEIOhcQd6Jq8ZgWYFDGWL/+zjEmoALCPNx5rBhkWIdbXT0jHpbhAQcEot96goVYAZUQypnFUCVE4s2x78JtdxIFH/1/b4IgkwJuUHANX//9/7ZGkSAPNrKTdYogwTNlGkK1TLmGW0ajK6goD8xRmDSdTFub/HJhd+H7g0CwxCj3nQ+XeFTBkL11Q8Q3ETDRdiYh9X0gcshSFVQwuMAm86Mtm+3+12jbaIATsZcM0RQxYAUaLCRJdHEI9Id8a8IJIo2827OWSDMgIcpFz88rma5AtD2OyVjTNFBc88GeGWkUn3jFIa4dwz/+zjEo4AKyL1l5qRhgVmOrTWEjHqvgg65a4qiLCIBlxQwg/ttWp29maWW3bfa2RJEACkRmufUbcSeVluxZEaTIWadT5JUI6ybQ+OXcbue83n7m6nk7heJDtO+yr0dWW17tot3fxgA46PHKOgVrKXSyuxKyx04j9n//Q7rttrZGkSABEakxGFCTGx1pTE6XNafxEjdjQBQIx4GU3zg7qwKAShLuf3IiiiBzWFnJ9JzDYcgE0GxCIAqt7GiwdY4MFnIcMia9ISPyIRBmE6Hx0r2BKIjyLrXmDT/+zjEroAKeIFprCRj0WsdbTTzDPp2Ta22SNIgAC6Ja41M0+0YUQjG5bqJms7PjfMMKFcOUBkoQLbtgQD6eD89QWWxgS8bN5JDQ5r8mZA04aKDvr/5qeZZ4UsDQQI020bTb1qX78tahsVFmYqwVUE1d4iIiIf62xpgpJpKbGxWJiAwmQnRxrghBiiOiYgouzij03X2YMg6MKK6s398tfgjXnLCwiFmrqyyZZUWlJh2g4s695gRPNEG0V1ZBbG///YpK1pS8NUEM0Vkhl0aIAAB5WCQnZxCpNn/+zjEuIAKDMdlp5hL0XYUK7T0jDq3O89zgpKOjmU2brX1FD+xtJbzlQ848FSY+zSQ3aqnva4x2zuud7nWFY//97l//yoK9NaZneZoVPMjUgzlJ4IuAC2/6ZsrjjbrtvtrY2kgDH0ATufgH3NNSUucssGNRMvDkorUXdQJg62GS5GywyiMQxsLEqtiqnhDMjrVgavPYUhpZ2EdJSJwmLoZFb3L9u17nziLe99IXaaCdw0ohU3BJJLY0iQQPFaev9WXTOCFRUPrb5Fm4scZzQwwDuDQj2wpQjj/+zjEwwALUOVZrCRj0ViYbX2TDLpGdmarMSVOUif+Sw25ZE8zCq8CbFwafnq7DxdRyuKBQegNDFW4xP924MriiQBGpJftGAAAFG084LXx1fHPFy2qUNV4RfJeoL0TPlJRXN6+lt8py6q9tU4mP4bQeuYLXJlV9TI4tcs8U8JJGtFmLqZTZgJJCMJXCyeTTU20YVA4/sgEWO5IwQAAjGesyaNS5qXh+Ztf6TSog9Ke4llVlQ4ZkJjGzWHqscvjdUvKMUO7H7SMpeU1jH+fJb8T2aMx/8P4UO//+zjEzAALIIFJ6ZhhyVoT63TDDSrSi+mu5Kxf9ILfDGpdjUKTdPpNQwovgAEi1vfWXSrGfr3KK/l3mGMfeGKiDHdiq+JZ8bx1GNnxo1k3QILEke8SATEdXPRzVNqRMaUcRnIe3NVymNz0zZ/k/d/b9mZq3/9tfOyhV0r5ARCW4OjAaBlwk3B2MPPZUtT1ubUAAKQQAAABhL2BBjwrtsx0FVJZSKkmyj3BV862mK6r4EqkN+FbcF823PxNjFRNa42mm1pQhcKAbq8xHM8L/8/4zv0YNeaOdqT/+zjE1YAKIMFLp4BmEVOvZ7SAj5mOElrScJBWTNYVvj/ed3j/x6aco7JO4IM0Egxs+c+1syWtBpS83pSn1n0RxwsbGfif0r0Io9W4dfmut+uMWznGtfxL3f7/zf/rphm8rDFXl0uXJzcWLxmoRBNGRRMKSAViKheFHdNiiuBWQ3wXoLwK6N8F//yOi/ibw4K8FhO//8F8K/J4KwM4N+LiKhNmxft8J4KwE+FHRWwV3Dv///oLw7gU8F6KTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5AAK4YszRYRjwZWf44qwYABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5wAUQXko2PeAATAAW5+AMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",done:"data:audio/mpeg;base64,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FW9Z04wnSxtTtw7y1611CteufbH/+tf////9X4frhtZXPM9HjyGz/0sxTGYosCEm5AVBVwiPA0HVgqVBWDURP1nVHoNf/rO9P+IvO//lv9XWGuW/56VVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8AIMgL0WR+hwQV6X5FqS8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE84AXNXkvOYeACKKAHk+GMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rock:"data:audio/mpeg;base64,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",penned:"data:audio/mpeg;base64,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625ppZjoYmnENkdUz8jJlZbFOe+bRrnewu7HSVc01nlbnSPI/2kMUHUlSV7/+zjE24AKTGVTR5jAIVUgqWWEjDw8Wl5kRnW9mlHgYhRRWAEIC+ABRNtQFcftaXhKJ+RCSKgViqPCQVWnVOSckjDomxpH5VzXNnHyt1rNRkackFEqAibmy+65HwU0O2GK4wUSqopN5qVPZj2Ofl+1+lDtVxMkp7lpFKlHo9JKgsSOQKWllQApyNNQFRKsip7JcOtlKgPkfb8s0NeZbkqGWAqU2UKJWCNiZmYsv01UYTWHVPKHm9309wwrtchlSqGM/+OBUb+tp7/VAQl/ou6TjXp9rrbwSx7/+zjE6QMLAKM+LDDBgayl5oWWDTiavPKgWIOBaSmpEAIM3geTJUvBpmNw7zQvJ60HnoZUtMGaB0iEhGDi5ZBqjR0zpM689Dd5PiECbcPhPLuFC5FUnoUitsZLKJ9n3RMuiXb3u2d+qspKh6pO+lfn5t1bFXcNmOuznytH//Uff7jnx99x5wAAkgADoV4K8Ig/WiGhY9gXB/KaCxgSZxLRfT5oAyg5hDS4VyomLnFkkaTxkmfdA0FvDjwsIDkyAkyaF4uNNFMHqi4y4MMMiCUzJMumKBt00FP/+zjE6IALFPM7J5hpwYqiZeDzDXgw7RkyGDJDMEPGRGTSWiipJJadDWmm8ghePLLRNlgrFx2qSSdFdK237sVCLmBWJxZVJ84VjRi0k6K6SnRXSUu90//mZeKxokaG5mVy4iWi+d6WYolmKLADVFUBErszbBmbVVhQEpYGoiDqwVKgqoGoNPKuKhriL/Br/ET9Ya4ifrDXEX+rzv+GuWVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AIIGKEm5IhlwgktoUKwsAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AAVFXUmuPiACMuFnAuGIABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",buy:"data:audio/mpeg;base64,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"};var n0="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Me=null,la=!1;function pu(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Xc(){pu(),la=!0;try{if(Me||(Me=document.createElement("audio"),Me.src=n0,Me.loop=!0,Me.preload="auto",Me.setAttribute("playsinline",""),Me.setAttribute("webkit-playsinline",""),Me.setAttribute("x-webkit-airplay","deny"),Me.volume=.01,Me.addEventListener("pause",()=>{la&&!document.hidden&&setTimeout(()=>la&&Me.paused&&Me.play().catch(()=>{}),300)})),Me.paused){let i=Me.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function gu(){la=!1;try{Me&&!Me.paused&&Me.pause()}catch{}}function mu(i,t){pu();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var ha=i=>440*Math.pow(2,(i-69)/12),i0=[[43,[55,59,62,67]],[48,[55,60,64,67]],[50,[57,62,66,69]],[52,[55,59,64,67]],[43,[55,59,62,67]],[48,[55,60,64,67]],[50,[57,62,66,69]],[43,[55,59,62,67]]],s0=[[0,0,74],[0,4,71],[0,6,74],[1,0,76],[1,4,72],[2,0,74],[2,3,78],[2,6,76],[3,0,71],[3,4,67],[4,0,74],[4,2,76],[4,4,79],[5,0,76],[5,4,72],[6,0,74],[6,4,78],[7,0,79],[7,4,74]],r0=[0,2,1,3,0,2,1,3],ts=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map,this.cutRate=0}unlock(){if(Xc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;mu(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.42,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.6);s.delayTime.value=.31;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.16,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){gu(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Xc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="farm"?92:80,this.step=0,this.nextTime=this.ctx.currentTime+.12,t!=="farm"&&this.engine(!1)))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_pluckBuffer(t){if(this.plucks.has(t))return this.plucks.get(t);let e=this.ctx,n=e.sampleRate,s=Math.floor(n*2.2),r=e.createBuffer(1,s,n),a=r.getChannelData(0),o=Math.max(2,Math.round(n/ha(t))),c=new Float32Array(o);for(let u=0;u<o;u++)c[u]=(Math.random()*2-1)*.6;let l=0,h=.996-Math.max(0,t-60)*4e-4;for(let u=0;u<s;u++){let d=(l+1)%o,f=(c[l]+c[d])*.5*h;a[u]=c[l],c[l]=f,l=d}return this.plucks.set(t,r),r}pluck(t,e,n=.25,s=this.music){let r=this.ctx.createBufferSource();r.buffer=this._pluckBuffer(t);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=3200;let o=this.ctx.createGain();o.gain.value=n,r.connect(a).connect(o).connect(s),r.start(e),r.stop(e+2.2)}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="farm";for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/8),c=a%8,[l,h]=i0[o];c===0&&this.pluck(l,r,.35),c===4&&this.pluck(l+7,r,.22),this.pluck(h[r0[c]],r,c%2?.11:.15);for(let[u,d,f]of s0)u===o&&d===c&&this.pluck(f,r+.01,s?.24:.18);if(s&&c%2===1&&this._noise(r,.05,.025,"highpass",6e3,.7,this.music),c===3&&Math.random()<.12){let u=2200+Math.random()*1200;this._slide("sine",u,u*1.4,r,.12,.03,this.music),this._slide("sine",u*1.2,u*.9,r+.15,.1,.025,this.music)}this.step++,this.nextTime+=n}}engine(t){if(!this.ctx)return;let e=this.ctx;if(t&&!this._eng){let n=e.createOscillator();n.type="square";let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=9;let o=e.createGain();o.gain.value=.02,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),this._eng={o:n,lp:s,g:r,lfo:a}}else if(!t&&this._eng){let n=this._eng;n.g.gain.setTargetAtTime(1e-4,e.currentTime,.1),n.o.stop(e.currentTime+.5),n.lfo.stop(e.currentTime+.5),this._eng=null}}engineUpdate(t,e){if(!this._eng||!this.ctx)return;let n=this.ctx.currentTime;this._eng.o.frequency.setTargetAtTime(48+t*9,n,.1),this._eng.lfo.frequency.setTargetAtTime(7+t*2.5,n,.1),this._eng.lp.frequency.setTargetAtTime(220+t*60+(e?120:0),n,.1),this._eng.g.gain.setTargetAtTime(.03+t*.008,n,.15)}cutting(t){if(!this.on||t<=0)return;let e=this.ctx.currentTime;this._lastCut&&e-this._lastCut<.045||(this._lastCut=e,this._noise(e,.07,Math.min(.12,.04+t*.012),"bandpass",2400+Math.random()*900,1.4),this._noise(e,.04,.05,"highpass",5e3,.7))}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"full":this._tone("square",392,n,.18,.06),this._tone("square",392,n+.25,.25,.06),this._tone("square",330,n+.25,.25,.05);break;case"pour":this._noise(n,1,.12,"bandpass",1500,.6,s,600);break;case"coin":{let r=84+(e!=null?e:0)%8*2;this._tone("sine",ha(r),n,.22,.09),this._tone("sine",ha(r+7),n+.05,.2,.06);break}case"rock":this._tone("sine",140,n,.2,.25),this._noise(n,.12,.15,"lowpass",700);break;case"sheep":{let r=this._tone("sawtooth",380,n,.55,.05),a=this.ctx.createOscillator();a.frequency.value=7;let o=this.ctx.createGain();o.gain.value=25,a.connect(o).connect(r.frequency),a.start(n),a.stop(n+.6);break}case"cow":this._slide("sawtooth",150,105,n,.9,.06),this._slide("sine",300,210,n,.9,.04);break;case"chicken":for(let r=0;r<3;r++)this._slide("square",900,650,n+r*.09,.07,.03);break;case"penned":[79,83,86,91].forEach((r,a)=>this.pluck(r,n+a*.07,.3,s));break;case"done":[[67,0],[71,.15],[74,.3],[79,.45],[83,.7],[86,.9]].forEach(([r,a])=>this.pluck(r,n+a,.4,s)),this._noise(n+.9,1.4,.05,"bandpass",1600,.5);break;case"buy":[84,88,91,96].forEach((r,a)=>this._tone("sine",ha(r),n+a*.06,.3,.08));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.05),this._tone("square",196,n+.13,.14,.05);break;default:}}};uu(ts,fu);du(ts);var Au={title:["\u0645\u0632\u0631\u0639\u062A\u064A \u0627\u0644\u0633\u0639\u064A\u062F\u0629","Happy Farm"],farm:["\u0645\u0632\u0631\u0639\u0629","Farm"],pick:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0632\u0631\u0639\u0629","Choose a farm"],shed:["\u0645\u062E\u0632\u0646 \u0627\u0644\u0639\u062F\u0629","Tool shed"],exit:["\u062E\u0631\u0648\u062C","Exit"],back:["\u0631\u062C\u0648\u0639","Back"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the farm before"],drag:["\u062D\u0637 \u0635\u0628\u0627\u0639\u0643 \u0648\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u0633\u0648\u0642","Touch and drag to drive"],full:["\u0627\u0644\u0645\u0642\u0637\u0648\u0631\u0629 \u0627\u062A\u0645\u0644\u062A! \u0641\u0636\u0651\u064A\u0647\u0627 \u0639\u0646\u062F \u0627\u0644\u0645\u062E\u0632\u0646","Trailer full! Empty it at the barn"],emptied:["\u0641\u0636\u0651\u064A\u062A\u0647\u0627! \u064A\u0644\u0627 \u0646\u0643\u0645\u0651\u0644","Emptied! Back to work"],rock:["\u062D\u062C\u0631! \u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0647","A rock! Go around it"],herd:["\u0648\u062F\u0651\u064A \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0638\u064A\u0631\u0629","Guide the animals to their pen"],penned:["\u0631\u062C\u0639 \u0627\u0644\u0628\u064A\u062A!","Home safe!"],allPenned:["\u0643\u0644 \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0641\u064A \u0627\u0644\u062D\u0638\u064A\u0631\u0629!","Every animal is home!"],done:["\u062E\u0644\u0651\u0635\u062A \u0627\u0644\u0645\u0632\u0631\u0639\u0629!","Farm finished!"],coinsEarned:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A","Coins"],made:["\u0627\u0644\u0644\u064A \u0627\u062A\u0639\u0645\u0644","You made"],flour:["\u062F\u0642\u064A\u0642","Flour"],hay:["\u0628\u0627\u0644\u0627\u062A \u0642\u0634","Hay bales"],corn:["\u0630\u0631\u0629","Corn"],seeds:["\u0628\u0630\u0648\u0631","Seeds"],animals:["\u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A","Animals"],next:["\u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next farm"],again:["\u062A\u0627\u0646\u064A","Again"],map:["\u0627\u0644\u062E\u0631\u064A\u0637\u0629","Map"],newFarm:["\u0645\u0632\u0631\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u0627\u062A\u0641\u062A\u062D\u062A!","New farm unlocked!"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],max:["\u0627\u0644\u0623\u0642\u0635\u0649","Max"],needMore:["\u0645\u062D\u062A\u0627\u062C \u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631 \u2014 \u0627\u062D\u0635\u062F \u0648\u0628\u064A\u0639!","Need more coins \u2014 harvest and sell!"],bought:["\u0627\u062A\u0631\u0643\u0651\u0628\u062A!","Installed!"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0645\u0632\u0631\u0639\u0629...","Getting the farm ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},Ns="ar",xu=i=>{Ns=i==="en"?"en":"ar"},es=()=>Ns,Zt=i=>Au[i]?Au[i][Ns==="en"?1:0]:i,xe=i=>Ns==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),ua=i=>Ns==="en"?i.en:i.ar;var Cu=`
.hf-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.hf-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.hf-layer{position:absolute;inset:0;pointer-events:none}
.hf-layer button,.hf-layer .hf-card{pointer-events:auto}
.hf-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.hf-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.hf-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.hf-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.hf-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.hf-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.hf-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.hf-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.hf-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.hf-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.hf-label.full{background:#ffd75e;animation:hfPulse .5s infinite alternate}
@keyframes hfPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.hf-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.hf-toast.show{opacity:1}
.hf-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.hf-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.hf-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:hfUp 1s ease-out forwards}
@keyframes hfUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.hf-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.hf-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.hf-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.hf-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.hf-btn.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.hf-btn[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.hf-btn:active{transform:translateY(calc(var(--u)*.5))}
.hf-btn:focus-visible,.hf-node:focus-visible,.hf-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.hf-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.hf-land .hf-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.hf-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.hf-card .ic{font-size:calc(var(--u)*8)}
.hf-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.hf-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.hf-card .pips{display:flex;gap:calc(var(--u)*.6)}
.hf-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.hf-card .pip.on{background:#f2a51e}
.hf-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.hf-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.hf-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.hf-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.hf-node.next{animation:hfPulse2 .8s infinite alternate}
@keyframes hfPulse2{to{transform:scale(1.08)}}
.hf-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.hf-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.hf-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.hf-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.hf-stars .off{filter:grayscale(1);opacity:.4}
.hf-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.hf-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.hf-made b{display:block;font-size:calc(var(--u)*5.4)}
.hf-made span{font-size:calc(var(--u)*2.8)}
.hf-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function ht(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var a0=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},o0=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},da;function c0(){if(da)return da;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.arc(16,16,16,0,Math.PI*2),t.fill(),da=new Tn(i),da}var Fs=class{constructor(t,e,n,s){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new me,this.g.setAttribute("position",new Ce(this.pos,3)),this.pts=new Wn(this.g,new un({color:s,size:n,map:c0(),alphaTest:.2,sizeAttenuation:!0,transparent:!0,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let r=0;r<e;r++)this.pos[r*3+1]=-99}emit(t,e,n,s,r,a,o=.8){let c=this.i++%this.n;this.pos.set([t,e,n],c*3),this.vel.set([s,r,a],c*3),this.life[c]=o}update(t,e=9){for(let n=0;n<this.n;n++)if(!(this.life[n]<=0)){this.life[n]-=t,this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;(this.life[n]<=0||this.pos[n*3+1]<0)&&(this.life[n]=0,this.pos[n*3+1]=-99)}this.g.attributes.position.needsUpdate=!0}},Yc=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),xu(e.lang),this.save=Hh(e.save),this.base=e.base||"./",this.sound=new ts,this.sound.muted=!!this.save.muted,this.quality={low:a0()},document.getElementById("hf-style")||document.head.append(ht("style",{id:"hf-style",text:Cu})),this.root=ht("div",{class:"hf-root",dir:es()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!o0()){this.root.append(ht("div",{class:"hf-loading"},ht("div",{},Zt("noWebgl")," ",ht("button",{class:"hf-btn",onclick:()=>this.post({type:"exit"})},Zt("exit")))));return}this.loading=ht("div",{class:"hf-loading"},Zt("loading")),this.root.append(this.loading),this.renderer=new Ur({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=ce,this.renderer.toneMapping=bc,this.renderer.toneMappingExposure=1.05,this.root.prepend(this.renderer.domElement),this.layer=ht("div",{class:"hf-layer"}),this.root.append(this.layer),this.camera=new Ve(45,1,.5,300),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new Zr,Promise.all([this._fonts(),ou(this.base)]).then(()=>{this.loading.remove(),this._buildShowcase(),this.showMap(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.root.style.setProperty("--u",`${Math.min(this.cw,this.ch)/100}px`),this.root.classList.toggle("hf-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?58:42,this.camera.updateProjectionMatrix())}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=ht("div",{class:"hf-joy"},ht("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let r=Math.min(this.cw,this.ch)/100*12,a=n.clientX-this.input.ox,o=n.clientY-this.input.oy,c=Math.hypot(a,o);c>r&&(a=a/c*r,o=o/c*r),this.input.x=a/r,this.input.z=o/r,this.joy.firstChild.style.transform=`translate(${a}px,${o}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this.joy.style.display="none")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ht("button",{class:"hf-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},Zt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_coins(){return this.coinEl=ht("span",{},xe(this.save.coins)),ht("div",{class:"hf-pill"},ht("span",{class:"hf-coin"}),this.coinEl)}_mute(t){let e=ht("button",{class:"hf-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=ht("div",{class:"hf-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_buildShowcase(){let t=new _s;t.background=new Rt(10476799),t.fog=new Hi(12577023,30,90),t.add(new Zi(16774358,6262586,1.8));let e=new Ki(16773328,1.4);e.position.set(-8,20,10),t.add(e);let n=new Wt(new Xn(80,40),lt(7127114));n.rotation.x=-Math.PI/2,t.add(n);let s=new Wt(new en(14,10),lt(15909198,6965760,.25));s.rotation.x=-Math.PI/2,s.position.set(-6,.3,-9),t.add(s);let r=aa();r.position.set(9,0,-8),r.rotation.y=-.5,t.add(r);for(let c=0;c<16;c++){let l=c/16*Math.PI*2,h=oa(.9+c%3*.3);h.position.set(Math.cos(l)*(20+c%3*4),0,Math.sin(l)*(16+c%4*3)-6),t.add(h)}let a=Gc(2.2);this.showCombine=new jt,this.showCombine.add(a.root);let o=Wc();o.root.position.x=-3.4,o.setFill(.7),this.showCombine.add(o.root),this.showReel=a.reel,t.add(this.showCombine),this.showcase=t}showMap(){this._endFarm(),this.mode="menu",this.sound.setMode("menu"),this._clear();let t=Yn.map((e,n)=>{var a;let s=n+1>this.save.unlocked,r=(a=this.save.stars[e.id])!=null?a:0;return ht("button",{class:`hf-node${s?" lock":""}${n+1===this.save.unlocked?" next":""}`,"aria-label":`${Zt("farm")} ${e.id} ${ua(e)}`,title:ua(e),onclick:()=>{if(s){this.sound.play("no"),this.toast(Zt("locked"));return}this.startFarm(n)}},s?"\u{1F512}":xe(e.id),ht("span",{class:"stars"},s?"":"\u2B50".repeat(r)+"\u2606".repeat(3-r)))});this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Zt("exit"),onclick:()=>this.post({type:"exit"})},es()==="en"?"\u2190":"\u2192"),ht("div",{class:"hf-top"},this._coins()),ht("div",{class:"hf-dim",style:"background:none"},ht("div",{class:"hf-panel",style:"background:rgba(255,247,230,.9)"},ht("div",{class:"hf-logo"},"\u{1F69C} ",Zt("title")),ht("div",{style:"font-weight:900;font-size:calc(var(--u)*4)"},Zt("pick")),ht("div",{class:"hf-map"},t),ht("button",{class:"hf-btn wood",style:"margin-top:calc(var(--u)*3)",onclick:()=>this.showShed()},"\u{1F3DA}\uFE0F ",Zt("shed")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}showShed(){this.mode="shed",this.sound.setMode("menu"),this._clear();let t=(n,s)=>n.id==="barn"?`+${xe(s)}%`:n.id==="trailer"?xe(s):`${xe(Math.round(s*100)/100)} ${es()==="en"?n.unit:n.unit==="m"?"\u0645":"\u0645/\u062B"}`,e=ta.map(n=>{let s=this.save.up[n.id],r=s>=Us,a=Oc(n.id,s);return ht("div",{class:"hf-card"},ht("div",{class:"ic"},n.icon.startsWith("art:")?ht("img",{src:`${this.base}art/${n.icon.slice(4)}.webp`,alt:""}):n.icon),ht("div",{class:"nm"},ua(n)),ht("div",{class:"sb"},n.sub[es()==="en"?1:0]),ht("div",{class:"pips"},Array.from({length:Us},(o,c)=>ht("span",{class:`pip${c<s?" on":""}`}))),ht("div",{class:"st"},r?t(n,Vn(n.id,s)):`${t(n,Vn(n.id,s))} \u2190 ${t(n,Vn(n.id,s+1))}`),ht("button",{class:"hf-btn",disabled:r||this.save.coins<a,onclick:()=>{Gh(this.save,n.id)==="bought"?(this.sound.play("buy"),this._saveNow(),this.showShed(),this.toast(Zt("bought"),1)):(this.sound.play("no"),this.toast(Zt("needMore"),2))}},r?Zt("max"):ht("span",{style:"display:inline-flex;align-items:center;gap:calc(var(--u)*1)"},ht("span",{class:"hf-coin"}),xe(a))))});this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Zt("back"),onclick:()=>this.showMap()},es()==="en"?"\u2190":"\u2192"),ht("div",{class:"hf-dim",style:"background:none"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},"\u{1F3DA}\uFE0F ",Zt("shed")),this._coins(),ht("div",{class:"hf-grid"},e))),this._toastEl())}startFarm(t){this._endFarm(),this.levelIndex=t;let e=Yn[t],n=new na(e,this.save.up),s=new _s,r=new ca(s,n,this.quality),a=Gc(n.cutter);s.add(a.root);let o=Wc();s.add(o.root);let c=new Fs(s,260,.22,16175978),l=new Fs(s,200,.2,16763176),h=new Fs(s,60,.6,15132390);this.f={farm:n,scene:s,world:r,comb:a,trailer:o,chaff:c,grain:l,smoke:h,tr:{x:n.t.x-3,z:n.t.z,heading:n.t.heading},cam:null,endT:-1,coinsAtStart:this.save.coins,cutFlash:0},this.mode="play",this.paused=!1,this.sound.setMode("farm"),this._hud(),t===0?setTimeout(()=>this.mode==="play"&&this.toast(Zt("drag"),3),600):n.animals.length&&setTimeout(()=>this.mode==="play"&&this.toast(Zt("herd"),3),600)}_endFarm(){this.f&&(this.f.world.dispose(),this.f.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.f=null,this.sound.engine(!1))}_hud(){this._clear();let t=this.f;this.hud={fill:ht("i",{style:"width:0%"}),pct:ht("b",{},xe(0)+"%"),animals:ht("span",{}),label:ht("div",{class:"hf-label"},"")},this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Zt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u23F8"),ht("div",{class:"hf-top"},this._coins(),ht("div",{class:"hf-sign"},`${Zt("farm")} ${xe(t.farm.level.id)}`),ht("div",{class:"hf-bar"},this.hud.fill,ht("s",{},"\u{1F33E}"),this.hud.pct),t.farm.animals.length?ht("div",{class:"hf-pill",style:"font-size:calc(var(--u)*3.6)"},this.hud.animals):null),this.hud.label,this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl()),this._hc={}}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this.sound.suspend();let t=ht("div",{class:"hf-dim"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},Zt("paused")),ht("button",{class:"hf-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",Zt("resume")),ht("button",{class:"hf-btn wood",onclick:()=>{this.sound.resume(),this.startFarm(this.levelIndex)}},"\u21BB ",Zt("restart")),ht("button",{class:"hf-btn wood",onclick:()=>{this.sound.resume(),this.showMap()}},Zt("map"))));this.layer.append(t)}_floatCoin(t){let e=ht("div",{class:"hf-float",style:`left:${this.cw/2-20}px;top:${this.ch*.42}px`},`+${xe(t)}`);this.layer.append(e),setTimeout(()=>e.remove(),1e3)}_farmFrame(t,e){let n=this.f,s=n.farm,r=this._readInput();s.step(t,r);let a=0;for(let C of s.events)switch(C.type){case"cut":{a+=C.cells.length,n.world.cut(C.cells);let x=s.cutterBox();for(let L=0;L<Math.min(6,C.cells.length*2);L++){let S=(Math.random()-.5)*s.cutter;n.chaff.emit(x.cx-Math.sin(x.heading)*S,.6+Math.random()*.4,x.cz+Math.cos(x.heading)*S,(Math.random()-.5)*3,2+Math.random()*3,(Math.random()-.5)*3,.9)}n.cutFlash=.3;break}case"full":this.sound.play("full"),this.toast(Zt("full"),2.4);break;case"unloadStart":this.sound.play("pour");break;case"coins":this.save.coins+=C.n,this.sound.play("coin",C.total),Math.random()<.35&&this._floatCoin(C.n);break;case"unloaded":this.toast(Zt("emptied"),1.4),this._saveNow(),this._stack();break;case"rock":this.sound.play("rock"),this.toast(Zt("rock"),1.2);break;case"penned":this.sound.play(C.kind==="cow"?"cow":C.kind==="chicken"?"chicken":"sheep"),setTimeout(()=>this.sound.play("penned"),300),this.toast(C.n===C.of?Zt("allPenned"):Zt("penned"),1.6);break;case"done":this.sound.play("done"),this.toast(Zt("done"),2),n.endT=1.6;break;default:}this.sound.cutting(a),this.sound.engine(!0),this.sound.engineUpdate(Math.abs(s.t.speed),n.cutFlash>0);for(let C of s.animals)!C.penned&&Math.hypot(C.x-s.t.x,C.z-s.t.z)<5&&Math.random()<t*.25&&this.sound.play(C.kind==="cow"?"cow":C.kind==="chicken"?"chicken":"sheep");let o=s.t;n.comb.root.position.set(o.x,Math.sin(e*18)*.02*Math.min(1,Math.abs(o.speed)),o.z),n.comb.root.rotation.y=-o.heading,n.comb.reel.rotation.z-=t*(2+Math.abs(o.speed)*2);let c=o.x-Math.cos(o.heading)*1.6,l=o.z-Math.sin(o.heading)*1.6,h=Math.atan2(l-n.tr.z,c-n.tr.x);if(n.tr.heading=h,n.tr.x=c-Math.cos(h)*2.4,n.tr.z=l-Math.sin(h)*2.4,n.trailer.root.position.set(n.tr.x,0,n.tr.z),n.trailer.root.rotation.y=-n.tr.heading,n.trailer.setFill(s.load/s.capacity),n.cutFlash=Math.max(0,n.cutFlash-t),n.cutFlash>0)for(let C=0;C<3;C++){let x=o.x-Math.cos(o.heading)*.9-Math.sin(o.heading)*.6,L=o.z-Math.sin(o.heading)*.9+Math.cos(o.heading)*.6,S=n.tr.x-x,w=n.tr.z-L;n.grain.emit(x,2.4,L,S*1.6+(Math.random()-.5)*.4,1.5,w*1.6+(Math.random()-.5)*.4,.55)}if(s.unloading)for(let C=0;C<4;C++)n.grain.emit(n.tr.x+(Math.random()-.5),1.4,n.tr.z+(Math.random()-.5),(s.pad.x-n.tr.x)*1.2,1,(s.pad.z-n.tr.z)*1.2,.6);Math.random()<t*6&&n.smoke.emit(o.x-Math.cos(o.heading)*.9+Math.sin(o.heading)*.55,2.9,o.z-Math.sin(o.heading)*.9-Math.cos(o.heading)*.55,0,1.2,0,1.2),n.chaff.update(t,7),n.grain.update(t,9),n.smoke.update(t,-.6),n.world.update(t,e);let u=this.cw<this.ch,d=o.x,f=o.z+(u?13:11),m=u?22:17;n.cam||(n.cam=new R(d,m,f)),n.cam.lerp(new R(d,m,f),Math.min(1,t*3)),this.camera.position.copy(n.cam),this.camera.up.set(0,1,0),this.camera.lookAt(n.cam.x,0,n.cam.z-(u?13:11)-1);let A=this._hc,g=Math.min(100,Math.round(s.progress*100/.95));A.pct!==g&&(A.pct=g,this.hud.fill.style.width=`${g}%`,this.hud.pct.textContent=xe(g)+"%"),this.coinEl&&A.coins!==this.save.coins&&(A.coins=this.save.coins,this.coinEl.textContent=xe(this.save.coins)),s.animals.length&&A.pen!==s.penned&&(A.pen=s.penned,this.hud.animals.textContent=`\u{1F411} ${xe(s.penned)}/${xe(s.animals.length)}`);let p=new R(n.tr.x,2.6,n.tr.z).project(this.camera);this.hud.label.style.left=`${(p.x*.5+.5)*this.cw}px`,this.hud.label.style.top=`${(-p.y*.5+.5)*this.ch}px`;let I=`${xe(Math.floor(s.load))}/${xe(s.capacity)}`;A.lbl!==I&&(A.lbl=I,this.hud.label.textContent=I),this.hud.label.classList.toggle("full",s.full),n.endT>=0&&(n.endT-=t,n.endT<0&&this.showResults())}_stack(){let t=this.f,e=t.world.stacks.children.length;if(e>=18)return;let n=e%2?nu(e%4===1?16447210:16241482):eu();n.position.set(e%3*1.3,Math.floor(e/6)*1,Math.floor(e%6/3)*1.3),t.world.stacks.add(n)}showResults(){let t=this.f,e=t.farm.result,n=this.levelIndex,s=t.farm.sold;for(let h of Object.keys(this.save.store))this.save.store[h]+=Math.round(s[h]);let r=Wh(this.save,n,e.stars);this._saveNow(),this.mode="results",this.sound.engine(!1),this.sound.setMode("menu");let a=this.save.coins-t.coinsAtStart,o=n+1<Yn.length,c=[["flour","\u{1F956}"],["hay","\u{1F33E}"],["corn","\u{1F33D}"],["seeds","\u{1F33B}"]].filter(([h])=>s[h]>=1),l=ht("div",{class:"hf-dim hf-win"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},"\u{1F389} ",Zt("done")),ht("div",{class:"hf-stars"},[1,2,3].map(h=>ht("span",{class:h<=e.stars?"":"off"},"\u2B50"))),ht("div",{class:"hf-pill",style:"font-size:calc(var(--u)*5.4)"},ht("span",{class:"hf-coin"}),"+",xe(a)),c.length?ht("div",{style:"font-weight:900"},Zt("made")):null,c.length?ht("div",{class:"hf-made"},c.map(([h,u])=>ht("div",{},ht("b",{},u," ",xe(Math.round(s[h]/10))),ht("span",{},Zt(h))))):null,e.animals?ht("div",{style:"font-weight:900"},`\u{1F411} ${Zt("animals")}: ${xe(e.penned)}/${xe(e.animals)}`):null,r.opened?ht("div",{style:"font-weight:900;color:#33a333"},"\u{1F389} ",Zt("newFarm")):null,ht("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},o?ht("button",{class:"hf-btn",onclick:()=>this.startFarm(n+1)},Zt("next")," \u25B6"):null,ht("button",{class:"hf-btn wood",onclick:()=>this.showShed()},"\u{1F3DA}\uFE0F ",Zt("shed")),ht("button",{class:"hf-btn wood",onclick:()=>this.showMap()},Zt("map")))));this.layer.querySelectorAll(".hf-label").forEach(h=>h.remove()),this.layer.append(l)}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),(this.mode==="play"||this.mode==="results")&&this.f)this.mode==="play"&&!this.paused?this._farmFrame(t,e):this.f.world.update(t,e),this.f&&this.renderer.render(this.f.scene,this.camera);else if(this.showcase){this.showCombine.rotation.y=e*.25,this.showReel.rotation.z-=t*3;let n=this.cw<this.ch;this.camera.position.set(Math.sin(e*.05)*3,n?13:9,n?20:14),this.camera.lookAt(0,1.5,0),this.renderer.render(this.showcase,this.camera)}}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this._endFarm(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},Zc={start(i,t,e){let n=new Yc(i,t||{},e);return Zc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.HappyFarm=Zc;var K0=Zc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
