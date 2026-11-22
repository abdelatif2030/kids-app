(()=>{var Eo="170";var rh=0,nc=1,ah=2;var hl=1,oh=2,un=3,Pn=0,Te=1,Be=2,Vn=0,xi=1,ic=2,sc=3,rc=4,ch=5,Wn=100,lh=101,hh=102,uh=103,dh=104,fh=200,ph=201,gh=202,mh=203,ia=204,sa=205,Ah=206,xh=207,vh=208,Ch=209,yh=210,_h=211,Ih=212,Mh=213,bh=214,ra=0,aa=1,oa=2,_i=3,ca=4,la=5,ha=6,ua=7,wo=0,Sh=1,Eh=2,Rn=0,wh=1,Th=2,Vh=3,To=4,Rh=5,Ph=6,Lh=7;var ul=300,Ii=301,Mi=302,da=303,fa=304,pr=306,Kn=1e3,jn=1001,pa=1002,Ue=1003,Uh=1004;var cs=1005;var Ke=1006,Ir=1007;var Zn=1008;var gn=1009,dl=1010,fl=1011,Yi=1012,Vo=1013,Jn=1014,Je=1015,$i=1016,Ro=1017,Po=1018,bi=1020,pl=35902,gl=1021,ml=1022,We=1023,Al=1024,xl=1025,vi=1026,Si=1027,Lo=1028,Uo=1029,vl=1030,Do=1031;var No=1033,Us=33776,Ds=33777,Ns=33778,Fs=33779,ga=35840,ma=35841,Aa=35842,xa=35843,va=36196,Ca=37492,ya=37496,_a=37808,Ia=37809,Ma=37810,ba=37811,Sa=37812,Ea=37813,wa=37814,Ta=37815,Va=37816,Ra=37817,Pa=37818,La=37819,Ua=37820,Da=37821,Bs=36492,Na=36494,Fa=36495,Cl=36283,Ba=36284,za=36285,Oa=36286;var zs=2300,qa=2301,Mr=2302,ac=2400,oc=2401,cc=2402;var Dh=3200,Nh=3201;var yl=0,Fh=1,Tn="",Ce="srgb",Vi="srgb-linear",gr="linear",Zt="srgb";var ni=7680;var lc=519,Bh=512,zh=513,Oh=514,_l=515,qh=516,kh=517,Hh=518,Gh=519,hc=35044;var uc="300 es",fn=2e3,Os=2001,Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var br=Math.PI/180,ka=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Wh(i,t){return(i%t+t)%t}function Sr(i,t,e){return(1-e)*i+e*t}function Di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],b=s[1],M=s[4],y=s[7],D=s[2],S=s[5],E=s[8];return r[0]=a*x+o*b+c*D,r[3]=a*g+o*M+c*S,r[6]=a*f+o*y+c*E,r[1]=l*x+h*b+u*D,r[4]=l*g+h*M+u*S,r[7]=l*f+h*y+u*E,r[2]=d*x+p*b+m*D,r[5]=d*g+p*M+m*S,r[8]=d*f+p*y+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Er=new Rt;function Il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){let i=qs("canvas");return i.style.display="block",i}var dc={};function ki(i){i in dc||(dc[i]=!0,console.warn(i))}function Yh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],gc=[.3127,.329],mc=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Vi]:{primaries:fc,whitePoint:gc,transfer:gr,toXYZ:mc,fromXYZ:Ac,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:fc,whitePoint:gc,transfer:Zt,toXYZ:mc,fromXYZ:Ac,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var ii,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=qs("canvas")),ii.width=t.width,ii.height=t.height;let n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kh=0,ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jh=0,Ve=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=Ke,a=Zn,o=We,c=gn,l=i.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ts(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kn:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kn:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ul;Ve.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,y=(p+1)/2,D=(f+1)/2,S=(h+d)/4,E=(u+x)/4,L=(m+g)/4;return M>y&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=E/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=E/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends Ln{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hs=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==m){let g=1-o,f=c*d+l*p+h*m+u*x,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let D=Math.sqrt(M),S=Math.atan2(D,f*b);g=Math.sin(g*S)/D,o=Math.sin(o*S)/D}let y=o*b;if(c=c*g+d*y,l=l*g+p*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-o*p,t[e+2]=l*m+h*p+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tr=new T,xc=new Qe,An=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),hs.subVectors(this.max,Ni),si.subVectors(t.a,Ni),ri.subVectors(t.b,Ni),ai.subVectors(t.c,Ni),In.subVectors(ri,si),Mn.subVectors(ai,ri),Bn.subVectors(si,ai);let e=[0,-In.z,In.y,0,-Mn.z,Mn.y,0,-Bn.z,Bn.y,In.z,0,-In.x,Mn.z,0,-Mn.x,Bn.z,0,-Bn.x,-In.y,In.x,0,-Mn.y,Mn.x,0,-Bn.y,Bn.x,0];return!Vr(e,si,ri,ai,hs)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,si,ri,ai,hs))?!1:(us.crossVectors(In,Mn),e=[us.x,us.y,us.z],Vr(e,si,ri,ai,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},an=[new T,new T,new T,new T,new T,new T,new T,new T],ke=new T,ls=new An,si=new T,ri=new T,ai=new T,In=new T,Mn=new T,Bn=new T,Ni=new T,hs=new T,us=new T,zn=new T;function Vr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);let o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),c=t.dot(zn),l=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Qh=new An,Fi=new T,Rr=new T,Un=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);let e=Fi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(Rr)),this.expandByPoint(Fi.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},on=new T,Pr=new T,ds=new T,bn=new T,Lr=new T,fs=new T,Ur=new T,Gs=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(Pr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ds),o=bn.dot(this.direction),c=-bn.dot(ds),l=bn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(ds,d),p}intersectSphere(t,e){on.subVectors(t.center,this.origin);let n=on.dot(this.direction),s=on.dot(on)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,r){Lr.subVectors(e,t),fs.subVectors(n,t),Ur.crossVectors(Lr,fs);let a=this.direction.dot(Ur),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,t);let c=o*this.direction.dot(fs.crossVectors(bn,fs));if(c<0)return null;let l=o*this.direction.dot(Lr.cross(bn));if(l<0||c+l>a)return null;let h=-o*bn.dot(Ur);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,tu)}lookAt(t,e,n){let s=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),Sn.crossVectors(n,Pe),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),Sn.crossVectors(n,Pe)),Sn.normalize(),ps.crossVectors(Pe,Sn),s[0]=Sn.x,s[4]=ps.x,s[8]=Pe.x,s[1]=Sn.y,s[5]=ps.y,s[9]=Pe.y,s[2]=Sn.z,s[6]=ps.z,s[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],b=n[3],M=n[7],y=n[11],D=n[15],S=s[0],E=s[4],L=s[8],_=s[12],C=s[1],w=s[5],O=s[9],z=s[13],H=s[2],Z=s[6],G=s[10],$=s[14],k=s[3],it=s[7],lt=s[11],Ct=s[15];return r[0]=a*S+o*C+c*H+l*k,r[4]=a*E+o*w+c*Z+l*it,r[8]=a*L+o*O+c*G+l*lt,r[12]=a*_+o*z+c*$+l*Ct,r[1]=h*S+u*C+d*H+p*k,r[5]=h*E+u*w+d*Z+p*it,r[9]=h*L+u*O+d*G+p*lt,r[13]=h*_+u*z+d*$+p*Ct,r[2]=m*S+x*C+g*H+f*k,r[6]=m*E+x*w+g*Z+f*it,r[10]=m*L+x*O+g*G+f*lt,r[14]=m*_+x*z+g*$+f*Ct,r[3]=b*S+M*C+y*H+D*k,r[7]=b*E+M*w+y*Z+D*it,r[11]=b*L+M*O+y*G+D*lt,r[15]=b*_+M*z+y*$+D*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],b=u*g*l-x*d*l+x*c*p-o*g*p-u*c*f+o*d*f,M=m*d*l-h*g*l-m*c*p+a*g*p+h*c*f-a*d*f,y=h*x*l-m*u*l+m*o*p-a*x*p-h*o*f+a*u*f,D=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,S=e*b+n*M+s*y+r*D;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(x*d*r-u*g*r-x*s*p+n*g*p+u*s*f-n*d*f)*E,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*f+n*c*f)*E,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*E,t[4]=M*E,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*E,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*E,t[8]=y*E,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*f-e*u*f)*E,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*E,t[12]=D*E,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*E,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,m=r*u,x=a*h,g=a*u,f=o*u,b=c*l,M=c*h,y=c*u,D=n.x,S=n.y,E=n.z;return s[0]=(1-(x+f))*D,s[1]=(p+y)*D,s[2]=(m-M)*D,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(d+f))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(m+M)*E,s[9]=(g-b)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=oi.set(s[0],s[1],s[2]).length(),a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);let l=1/r,h=1/a,u=1/o;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===fn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Os)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,m,x;if(o===fn)m=(a+r)*u,x=-2*u;else if(o===Os)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},oi=new T,He=new Jt,$h=new T(0,0,0),tu=new T(1,1,1),Sn=new T,ps=new T,Pe=new T,vc=new Jt,Cc=new Qe,$e=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eu=0,yc=new T,ci=new Qe,cn=new Jt,gs=new T,Bi=new T,nu=new T,iu=new Qe,_c=new T(1,0,0),Ic=new T(0,1,0),Mc=new T(0,0,1),bc={type:"added"},su={type:"removed"},li={type:"childadded",child:null},Dr={type:"childremoved",child:null},_e=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new $e,n=new Qe,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Rt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Bi,gs,this.up):cn.lookAt(gs,Bi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(cn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(su),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_e.DEFAULT_UP=new T(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=new T,ln=new T,Nr=new T,hn=new T,hi=new T,ui=new T,Sc=new T,Fr=new T,Br=new T,zr=new T,Or=new ce,qr=new ce,kr=new ce,Xn=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),ln.subVectors(n,e),Nr.subVectors(t,e);let a=Ge.dot(Ge),o=Ge.dot(ln),c=Ge.dot(Nr),l=ln.dot(ln),h=ln.dot(Nr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Or.setScalar(0),qr.setScalar(0),kr.setScalar(0),Or.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),kr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),ln.subVectors(t,e),Ge.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ge.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;hi.subVectors(s,n),ui.subVectors(r,n),Fr.subVectors(t,n);let c=hi.dot(Fr),l=ui.dot(Fr);if(c<=0&&l<=0)return e.copy(n);Br.subVectors(t,s);let h=hi.dot(Br),u=ui.dot(Br);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(hi,a);zr.subVectors(t,r);let p=hi.dot(zr),m=ui.dot(zr);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(ui,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Sc.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(Sc,o);let f=1/(g+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Hr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Wh(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hr(a,r,t+1/3),this.g=Hr(a,r,t),this.b=Hr(a,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Gt.fromWorkingColorSpace(ve.copy(this),t),Math.round(ye(ve.r*255,0,255))*65536+Math.round(ye(ve.g*255,0,255))*256+Math.round(ye(ve.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(ve.copy(this),e);let n=ve.r,s=ve.g,r=ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Ce){Gt.fromWorkingColorSpace(ve.copy(this),t);let e=ve.r,n=ve.g,s=ve.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ms);let n=Sr(En.h,ms.h,e),s=Sr(En.s,ms.s,e),r=Sr(En.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ve=new Ut;Ut.NAMES=Ml;var ru=0,Dn=class extends Ln{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ts(),this.name="",this.blending=xi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xn=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new T,As=new _t,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=Je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}};var Xs=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ys=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},au=0,Fe=new Jt,Gr=new _e,di=new T,Le=new An,zi=new An,ge=new T,Se=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?Ys:Xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Rt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Gr.lookAt(t),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Le.min,zi.min),Le.expandByPoint(ge),ge.addVectors(Le.max,zi.max),Le.expandByPoint(ge)):(Le.expandByPoint(zi.min),Le.expandByPoint(zi.max))}Le.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ge.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(t,l),ge.add(di)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new T,c[L]=new T;let l=new T,h=new T,u=new T,d=new _t,p=new _t,m=new _t,x=new T,g=new T;function f(L,_,C){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,C),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(w),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(w),o[L].add(x),o[_].add(x),o[C].add(x),c[L].add(g),c[_].add(g),c[C].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,_=b.length;L<_;++L){let C=b[L],w=C.start,O=C.count;for(let z=w,H=w+O;z<H;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let M=new T,y=new T,D=new T,S=new T;function E(L){D.fromBufferAttribute(s,L),S.copy(D);let _=o[L];M.copy(_),M.sub(D.multiplyScalar(D.dot(_))).normalize(),y.crossVectors(S,_);let w=y.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,w)}for(let L=0,_=b.length;L<_;++L){let C=b[L],w=C.start,O=C.count;for(let z=w,H=w+O;z<H;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ec=new Jt,On=new Gs,xs=new Un,wc=new T,vs=new T,Cs=new T,ys=new T,Wr=new T,_s=new T,Tc=new T,Is=new T,Kt=class extends _e{constructor(t=new Se,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Wr.fromBufferAttribute(u,t),a?_s.addScaledVector(Wr,h):_s.addScaledVector(Wr.sub(e),h))}e.add(_s)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(xs.containsPoint(On.origin)===!1&&(On.intersectSphere(xs,wc)===null||On.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(Ec.copy(r).invert(),On.copy(t.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,D=M;y<D;y+=3){let S=o.getX(y),E=o.getX(y+1),L=o.getX(y+2);s=Ms(this,f,t,n,l,h,u,S,E,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let b=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);s=Ms(this,a,t,n,l,h,u,b,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,D=M;y<D;y+=3){let S=y,E=y+1,L=y+2;s=Ms(this,f,t,n,l,h,u,S,E,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let b=g,M=g+1,y=g+2;s=Ms(this,a,t,n,l,h,u,b,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ou(i,t,e,n,s,r,a,o){let c;if(t.side===Te?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pn,o),c===null)return null;Is.copy(o),Is.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Is);return l<e.near||l>e.far?null:{distance:l,point:Is.clone(),object:i}}function Ms(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,vs),i.getVertexPosition(c,Cs),i.getVertexPosition(l,ys);let h=ou(i,t,e,n,vs,Cs,ys,Tc);if(h){let u=new T;Xn.getBarycoord(Tc,vs,Cs,ys,u),s&&(h.uv=Xn.getInterpolatedAttribute(s,o,c,l,u,new _t)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,o,c,l,u,new _t)),a&&(h.normal=Xn.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};Xn.getNormal(vs,Cs,ys,d.normal),h.face=d,h.barycoord=u}return h}var Qn=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function m(x,g,f,b,M,y,D,S,E,L,_){let C=y/E,w=D/L,O=y/2,z=D/2,H=S/2,Z=E+1,G=L+1,$=0,k=0,it=new T;for(let lt=0;lt<G;lt++){let Ct=lt*w-z;for(let Dt=0;Dt<Z;Dt++){let Qt=Dt*C-O;it[x]=Qt*b,it[g]=Ct*M,it[f]=H,l.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[f]=S>0?1:-1,h.push(it.x,it.y,it.z),u.push(Dt/E),u.push(1-lt/L),$+=1}}for(let lt=0;lt<L;lt++)for(let Ct=0;Ct<E;Ct++){let Dt=d+Ct+Z*lt,Qt=d+Ct+Z*(lt+1),X=d+(Ct+1)+Z*(lt+1),tt=d+(Ct+1)+Z*lt;c.push(Dt,Qt,tt),c.push(Qt,X,tt),k+=6}o.addGroup(p,k,_),p+=k,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function cu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var lu={clone:Ei,merge:Ie},hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},js=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=new T,Vc=new _t,Rc=new _t,Me=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,Rc),e.subVectors(Rc,Vc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fi=-90,pi=1,Xa=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(fi,pi,t,e);s.layers=this.layers,this.add(s);let r=new Me(fi,pi,t,e);r.layers=this.layers,this.add(r);let a=new Me(fi,pi,t,e);a.layers=this.layers,this.add(a);let o=new Me(fi,pi,t,e);o.layers=this.layers,this.add(o);let c=new Me(fi,pi,t,e);c.layers=this.layers,this.add(c);let l=new Me(fi,pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Zs=class extends Ve{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ya=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Vn});r.uniforms.tEquirect.value=e;let a=new Kt(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Ke),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Xr=new T,du=new T,fu=new Rt,dn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xr.subVectors(n,e).cross(du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fu.getNormalMatrix(t),s=this.coplanarPoint(Xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Un,bs=new T,ji=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],x=s[10],g=s[11],f=s[12],b=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,g-p,y-f).normalize(),n[1].setComponents(c+r,d+l,g+p,y+f).normalize(),n[2].setComponents(c+a,d+h,g+m,y+b).normalize(),n[3].setComponents(c-a,d-h,g-m,y-b).normalize(),n[4].setComponents(c-o,d-u,g-x,y-M).normalize(),e===fn)n[5].setComponents(c+o,d+u,g+x,y+M).normalize();else if(e===Os)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bs.x=s.normal.x>0?t.max.x:t.min.x,bs.y=s.normal.y>0?t.max.y:t.min.y,bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var en=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let b=f*d-a;for(let M=0;M<l;M++){let y=M*u-r;m.push(y,-b,0),x.push(0,0,1),g.push(M/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let M=b+l*f,y=b+l*(f+1),D=b+1+l*(f+1),S=b+1+l*f;p.push(M,y,S),p.push(y,D,S)}this.setIndex(p),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mu=`#ifdef USE_ALPHAHASH
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
#endif`,Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
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
#endif`,_u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
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
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Tu=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bu=`#define PI 3.141592653589793
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
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
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,fd=`struct PhysicalMaterial {
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
}`,pd=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ud=`#ifndef FLAT_SHADED
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
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`float getShadowMask() {
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
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,_f=`#if DEPTH_PACKING == 3200
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
}`,If=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Rf=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:gu,alphahash_pars_fragment:mu,alphamap_fragment:Au,alphamap_pars_fragment:xu,alphatest_fragment:vu,alphatest_pars_fragment:Cu,aomap_fragment:yu,aomap_pars_fragment:_u,batching_pars_vertex:Iu,batching_vertex:Mu,begin_vertex:bu,beginnormal_vertex:Su,bsdfs:Eu,iridescence_fragment:wu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Lu,color_fragment:Uu,color_pars_fragment:Du,color_pars_vertex:Nu,color_vertex:Fu,common:Bu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:qu,displacementmap_vertex:ku,emissivemap_fragment:Hu,emissivemap_pars_fragment:Gu,colorspace_fragment:Wu,colorspace_pars_fragment:Xu,envmap_fragment:Yu,envmap_common_pars_fragment:ju,envmap_pars_fragment:Zu,envmap_pars_vertex:Ku,envmap_physical_pars_fragment:od,envmap_vertex:Ju,fog_vertex:Qu,fog_pars_vertex:$u,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:sd,lights_lambert_pars_fragment:rd,lights_pars_begin:ad,lights_toon_fragment:cd,lights_toon_pars_fragment:ld,lights_phong_fragment:hd,lights_phong_pars_fragment:ud,lights_physical_fragment:dd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:gd,lights_fragment_end:md,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:Cd,map_fragment:yd,map_pars_fragment:_d,map_particle_fragment:Id,map_particle_pars_fragment:Md,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Sd,morphinstance_vertex:Ed,morphcolor_vertex:wd,morphnormal_vertex:Td,morphtarget_pars_vertex:Vd,morphtarget_vertex:Rd,normal_fragment_begin:Pd,normal_fragment_maps:Ld,normal_pars_fragment:Ud,normal_pars_vertex:Dd,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:qd,opaque_fragment:kd,packing:Hd,premultiplied_alpha_fragment:Gd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:Yd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:$d,skinbase_vertex:tf,skinning_pars_vertex:ef,skinning_vertex:nf,skinnormal_vertex:sf,specularmap_fragment:rf,specularmap_pars_fragment:af,tonemapping_fragment:of,tonemapping_pars_fragment:cf,transmission_fragment:lf,transmission_pars_fragment:hf,uv_pars_fragment:uf,uv_pars_vertex:df,uv_vertex:ff,worldpos_vertex:pf,background_vert:gf,background_frag:mf,backgroundCube_vert:Af,backgroundCube_frag:xf,cube_vert:vf,cube_frag:Cf,depth_vert:yf,depth_frag:_f,distanceRGBA_vert:If,distanceRGBA_frag:Mf,equirect_vert:bf,equirect_frag:Sf,linedashed_vert:Ef,linedashed_frag:wf,meshbasic_vert:Tf,meshbasic_frag:Vf,meshlambert_vert:Rf,meshlambert_frag:Pf,meshmatcap_vert:Lf,meshmatcap_frag:Uf,meshnormal_vert:Df,meshnormal_frag:Nf,meshphong_vert:Ff,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Of,meshtoon_vert:qf,meshtoon_frag:kf,points_vert:Hf,points_frag:Gf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:Yf,sprite_frag:jf},et={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Ze={basic:{uniforms:Ie([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Ie([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Ie([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Ie([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Ie([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Ie([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Ie([et.points,et.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Ie([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Ie([et.common,et.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Ie([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Ie([et.sprite,et.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Ie([et.common,et.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Ie([et.lights,et.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Ze.physical={uniforms:Ie([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var Ss={r:0,b:0,g:0},kn=new $e,Zf=new Jt;function Kf(i,t,e,n,s,r,a){let o=new Ut(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1,y=m(b);y===null?f(o,c):y&&y.isColor&&(f(y,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){let y=m(M);y&&(y.isCubeTexture||y.mapping===pr)?(h===void 0&&(h=new Kt(new Qn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ei(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),kn.copy(M.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(kn)),h.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Zt,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Kt(new en(2,2),new tn({name:"BackgroundMaterial",uniforms:Ei(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(Ss,bl(i)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:x,addToRenderList:g}}function Jf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,w,O,z,H){let Z=!1,G=u(z,O,w);r!==G&&(r=G,l(r.object)),Z=p(C,z,O,H),Z&&m(C,z,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(C,w,O,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,w,O){let z=O.wireframe===!0,H=n[C.id];H===void 0&&(H={},n[C.id]=H);let Z=H[w.id];Z===void 0&&(Z={},H[w.id]=Z);let G=Z[z];return G===void 0&&(G=d(c()),Z[z]=G),G}function d(C){let w=[],O=[],z=[];for(let H=0;H<e;H++)w[H]=0,O[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:z,object:C,attributes:{},index:null}}function p(C,w,O,z){let H=r.attributes,Z=w.attributes,G=0,$=O.getAttributes();for(let k in $)if($[k].location>=0){let lt=H[k],Ct=Z[k];if(Ct===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(Ct=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(Ct=C.instanceColor)),lt===void 0||lt.attribute!==Ct||Ct&&lt.data!==Ct.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(C,w,O,z){let H={},Z=w.attributes,G=0,$=O.getAttributes();for(let k in $)if($[k].location>=0){let lt=Z[k];lt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor));let Ct={};Ct.attribute=lt,lt&&lt.data&&(Ct.data=lt.data),H[k]=Ct,G++}r.attributes=H,r.attributesNum=G,r.index=z}function x(){let C=r.newAttributes;for(let w=0,O=C.length;w<O;w++)C[w]=0}function g(C){f(C,0)}function f(C,w){let O=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;O[C]=1,z[C]===0&&(i.enableVertexAttribArray(C),z[C]=1),H[C]!==w&&(i.vertexAttribDivisor(C,w),H[C]=w)}function b(){let C=r.newAttributes,w=r.enabledAttributes;for(let O=0,z=w.length;O<z;O++)w[O]!==C[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function M(C,w,O,z,H,Z,G){G===!0?i.vertexAttribIPointer(C,w,O,H,Z):i.vertexAttribPointer(C,w,O,z,H,Z)}function y(C,w,O,z){x();let H=z.attributes,Z=O.getAttributes(),G=w.defaultAttributeValues;for(let $ in Z){let k=Z[$];if(k.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(it=C.instanceColor)),it!==void 0){let lt=it.normalized,Ct=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;let Qt=Dt.buffer,X=Dt.type,tt=Dt.bytesPerElement,mt=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===Vo;if(it.isInterleavedBufferAttribute){let st=it.data,bt=st.stride,wt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<k.locationSize;Nt++)f(k.location+Nt,st.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<k.locationSize;Nt++)g(k.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Nt=0;Nt<k.locationSize;Nt++)M(k.location+Nt,Ct/k.locationSize,X,lt,bt*tt,(wt+Ct/k.locationSize*Nt)*tt,mt)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)f(k.location+st,it.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<k.locationSize;st++)g(k.location+st);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let st=0;st<k.locationSize;st++)M(k.location+st,Ct/k.locationSize,X,lt,Ct*tt,Ct/k.locationSize*st*tt,mt)}}else if(G!==void 0){let lt=G[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(k.location,lt);break;case 3:i.vertexAttrib3fv(k.location,lt);break;case 4:i.vertexAttrib4fv(k.location,lt);break;default:i.vertexAttrib1fv(k.location,lt)}}}}b()}function D(){L();for(let C in n){let w=n[C];for(let O in w){let z=w[O];for(let H in z)h(z[H].object),delete z[H];delete w[O]}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let w=n[C.id];for(let O in w){let z=w[O];for(let H in z)h(z[H].object),delete z[H];delete w[O]}delete n[C.id]}function E(C){for(let w in n){let O=n[w];if(O[C.id]===void 0)continue;let z=O[C.id];for(let H in z)h(z[H].object),delete z[H];delete O[C.id]}}function L(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Qf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $f(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==We&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==gn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Je&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:D,maxSamples:S}}function tp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new dn,o=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,M=b*4,y=f.clippingState||null;c.value=y,y=h(m,d,M,p);for(let D=0;D!==M;++D)y[D]=e[D];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let f=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,y=p;M!==x;++M,y+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function ep(i){let t=new WeakMap;function e(a,o){return o===da?a.mapping=Ii:o===fa&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===da||o===fa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ya(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ks=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ai=4,Pc=[.125,.215,.35,.446,.526,.582],Yn=20,Yr=new Ks,Lc=new Ut,jr=null,Zr=0,Kr=0,Jr=!1,Gn=(1+Math.sqrt(5))/2,gi=1/Gn,Uc=[new T(-Gn,gi,0),new T(Gn,gi,0),new T(-gi,0,Gn),new T(gi,0,Gn),new T(0,Gn,-gi),new T(0,Gn,gi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){jr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Zr,Kr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:$i,format:We,colorSpace:Vi,depthBuffer:!1},s=Dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,t,e)}return s}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,n,s){let o=new Me(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lc),h.toneMapping=Rn,h.autoClear=!1;let p=new xn({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),m=new Kt(new Qn,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(Lc),x=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):b===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let M=this._cubeSize;Es(s,b*M,f>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ii||t.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Yr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Yn;g>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);let f=[],b=0;for(let E=0;E<Yn;++E){let L=E/x,_=Math.exp(-L*L/2);f.push(_),E===0?b+=_:E<g&&(b+=2*_)}for(let E=0;E<f.length;E++)f[E]=f[E]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let y=this._sizeLods[s],D=3*y*(s>M-Ai?s-M+Ai:0),S=4*(this._cubeSize-y);Es(e,D,S,3*y,2*y),c.setRenderTarget(e),c.render(u,Yr)}};function np(i){let t=[],e=[],n=[],s=i,r=i-Ai+1+Pc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ai?c=Pc[a-i+Ai-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,f=1,b=new Float32Array(x*m*p),M=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,L=S>2?0:-1,_=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(_,x*m*S),M.set(d,g*m*S);let C=[S,S,S,S,S,S];y.set(C,f*m*S)}let D=new Se;D.setAttribute("position",new be(b,x)),D.setAttribute("uv",new be(M,g)),D.setAttribute("faceIndex",new be(y,f)),t.push(D),s>Ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dc(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ip(i,t,e){let n=new Float32Array(Yn),s=new T(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Nc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Fc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function sp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===da||c===fa,h=c===Ii||c===Mi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Js(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Js(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let x=p[m];for(let g=0,f=x.length;g<f;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let M=0,y=b.length;M<y;M+=3){let D=b[M+0],S=b[M+1],E=b[M+2];d.push(D,S,S,E,E,D)}}else if(m!==void 0){let b=m.array;x=m.version;for(let M=0,y=b.length/3-1;M<y;M+=3){let D=M+0,S=M+1,E=M+2;d.push(D,S,S,E,E,D)}}else return;let g=new(Il(d)?Ys:Xs)(d,1);g.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function op(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let b=0;b<m;b++)f+=p[b]*x[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=o.attributes.position.count*M,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*D*4*u),E=new Hs(S,y,D,u);E.type=Je,E.needsUpdate=!0;let L=M*4;for(let C=0;C<u;C++){let w=g[C],O=f[C],z=b[C],H=y*D*4*C;for(let Z=0;Z<w.count;Z++){let G=Z*L;p===!0&&(s.fromBufferAttribute(w,Z),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(O,Z),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),x===!0&&(s.fromBufferAttribute(z,Z),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new _t(y,D)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Qs=class extends Ve{constructor(t,e,n,s,r,a,o,c,l,h=vi){if(h!==vi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=Jn),n===void 0&&h===Si&&(n=bi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},El=new Ve,Bc=new Qs(1,1),wl=new Hs,Tl=new Wa,Vl=new Zs,zc=[],Oc=[],qc=new Float32Array(16),kc=new Float32Array(9),Hc=new Float32Array(4);function Ri(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),pe(e,n)}}function mp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;kc.set(n),i.uniformMatrix3fv(this.addr,!1,kc),pe(e,n)}}function Ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;qc.set(n),i.uniformMatrix4fv(this.addr,!1,qc),pe(e,n)}}function xp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function _p(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function Sp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=_l,r=Bc):r=El,e.setTexture2D(t||r,s)}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tl,s)}function wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vl,s)}function Tp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wl,s)}function Vp(i){switch(i){case 5126:return up;case 35664:return dp;case 35665:return fp;case 35666:return pp;case 35674:return gp;case 35675:return mp;case 35676:return Ap;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return Cp;case 35669:case 35673:return yp;case 5125:return _p;case 36294:return Ip;case 36295:return Mp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Pp(i,t){let e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function Lp(i,t){let e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function Up(i,t){let e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function Dp(i,t){let e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Np(i,t){let e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fp(i,t){let e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function zp(i,t){i.uniform2iv(this.addr,t)}function Op(i,t){i.uniform3iv(this.addr,t)}function qp(i,t){i.uniform4iv(this.addr,t)}function kp(i,t){i.uniform1uiv(this.addr,t)}function Hp(i,t){i.uniform2uiv(this.addr,t)}function Gp(i,t){i.uniform3uiv(this.addr,t)}function Wp(i,t){i.uniform4uiv(this.addr,t)}function Xp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||El,r[a])}function Yp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tl,r[a])}function jp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vl,r[a])}function Zp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wl,r[a])}function Kp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Lp;case 35666:return Up;case 35674:return Dp;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Op;case 35669:case 35673:return qp;case 5125:return kp;case 36294:return Hp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Zp}}var ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}},Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kp(e.type)}},Ka=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Qr=/(\w+)(\])?(\[|\.)?/g;function Gc(i,t){i.seq.push(t),i.map[t.id]=t}function Jp(i,t,e){let n=i.name,s=n.length;for(Qr.lastIndex=0;;){let r=Qr.exec(n),a=Qr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Gc(e,l===void 0?new ja(o,i,t):new Za(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ka(o),Gc(e,u)),e=u}}}var yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Wc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qp=37297,$p=0;function tg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Xc=new Rt;function eg(i){Gt._getMatrix(Xc,Gt.workingColorSpace,i);let t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tg(i.getShaderSource(t),a)}else return s}function ng(i,t){let e=eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(i,t){let e;switch(t){case wh:e="Linear";break;case Th:e="Reinhard";break;case Vh:e="Cineon";break;case To:e="ACESFilmic";break;case Ph:e="AgX";break;case Lh:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ws=new T;function sg(){Gt.getLuminanceCoefficients(ws);let i=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function ag(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hi(i){return i!==""}function jc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(cg,hg)}var lg=new Map;function hg(i,t){let e=Lt[t];if(e===void 0){let n=lg.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(ug,dg)}function dg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Mi:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case Sh:t="ENVMAP_BLENDING_MIX";break;case Eh:t="ENVMAP_BLENDING_ADD";break}return t}function Ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=fg(e),l=pg(e),h=gg(e),u=mg(e),d=Ag(e),p=rg(e),m=ag(r),x=s.createProgram(),g,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hi).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hi).join(`
`),f.length>0&&(f+=`
`)):(g=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),f=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Ja(a),a=jc(a,e),a=Zc(a,e),o=Ja(o),o=jc(o,e),o=Zc(o,e),a=Kc(a),o=Kc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=b+g+a,y=b+f+o,D=Wc(s,s.VERTEX_SHADER,M),S=Wc(s,s.FRAGMENT_SHADER,y);s.attachShader(x,D),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(S).trim(),Z=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,S);else{let $=Yc(s,D,"vertex"),k=Yc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:Z,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(D),s.deleteShader(S),L=new yi(s,x),_=og(s,x)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Qp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$p++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=S,this}var vg=0,Qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}};function Cg(i,t,e,n,s,r,a){let o=new Ws,c=new Qa,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,C,w,O,z){let H=O.fog,Z=z.geometry,G=_.isMeshStandardMaterial?O.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),k=$&&$.mapping===pr?$.image.height:null,it=m[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ct=lt!==void 0?lt.length:0,Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let Qt,X,tt,mt;if(it){let jt=Ze[it];Qt=jt.vertexShader,X=jt.fragmentShader}else Qt=_.vertexShader,X=_.fragmentShader,c.update(_),tt=c.getVertexShaderID(_),mt=c.getFragmentShaderID(_);let st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),wt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,ae=!!_.map,kt=!!_.matcap,he=!!$,U=!!_.aoMap,De=!!_.lightMap,Ft=!!_.bumpMap,Bt=!!_.normalMap,It=!!_.displacementMap,ee=!!_.emissiveMap,yt=!!_.metalnessMap,I=!!_.roughnessMap,A=_.anisotropy>0,N=_.clearcoat>0,Y=_.dispersion>0,K=_.iridescence>0,W=_.sheen>0,At=_.transmission>0,rt=A&&!!_.anisotropyMap,ht=N&&!!_.clearcoatMap,Ht=N&&!!_.clearcoatNormalMap,J=N&&!!_.clearcoatRoughnessMap,ut=K&&!!_.iridescenceMap,Mt=K&&!!_.iridescenceThicknessMap,St=W&&!!_.sheenColorMap,dt=W&&!!_.sheenRoughnessMap,zt=!!_.specularMap,Pt=!!_.specularColorMap,$t=!!_.specularIntensityMap,V=At&&!!_.transmissionMap,nt=At&&!!_.thicknessMap,q=!!_.gradientMap,j=!!_.alphaMap,ct=_.alphaTest>0,at=!!_.alphaHash,Tt=!!_.extensions,oe=Rn;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Ae={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:Qt,fragmentShader:X,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:wt,instancingColor:wt&&z.instanceColor!==null,instancingMorph:wt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Vi,alphaToCoverage:!!_.alphaToCoverage,map:ae,matcap:kt,envMap:he,envMapMode:he&&$.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:De,bumpMap:Ft,normalMap:Bt,displacementMap:d&&It,emissiveMap:ee,normalMapObjectSpace:Bt&&_.normalMapType===Fh,normalMapTangentSpace:Bt&&_.normalMapType===yl,metalnessMap:yt,roughnessMap:I,anisotropy:A,anisotropyMap:rt,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:Ht,clearcoatRoughnessMap:J,dispersion:Y,iridescence:K,iridescenceMap:ut,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:St,sheenRoughnessMap:dt,specularMap:zt,specularColorMap:Pt,specularIntensityMap:$t,transmission:At,transmissionMap:V,thicknessMap:nt,gradientMap:q,opaque:_.transparent===!1&&_.blending===xi&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:at,combine:_.combine,mapUv:ae&&x(_.map.channel),aoMapUv:U&&x(_.aoMap.channel),lightMapUv:De&&x(_.lightMap.channel),bumpMapUv:Ft&&x(_.bumpMap.channel),normalMapUv:Bt&&x(_.normalMap.channel),displacementMapUv:It&&x(_.displacementMap.channel),emissiveMapUv:ee&&x(_.emissiveMap.channel),metalnessMapUv:yt&&x(_.metalnessMap.channel),roughnessMapUv:I&&x(_.roughnessMap.channel),anisotropyMapUv:rt&&x(_.anisotropyMap.channel),clearcoatMapUv:ht&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(_.sheenRoughnessMap.channel),specularMapUv:zt&&x(_.specularMap.channel),specularColorMapUv:Pt&&x(_.specularColorMap.channel),specularIntensityMapUv:$t&&x(_.specularIntensityMap.channel),transmissionMapUv:V&&x(_.transmissionMap.channel),thicknessMapUv:nt&&x(_.thicknessMap.channel),alphaMapUv:j&&x(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Bt||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ae||j),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Dt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ae&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===Zt,decodeVideoTextureEmissive:ee&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===Zt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===Te,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function f(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)C.push(w),C.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(b(C,_),M(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function b(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function M(_,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){let C=m[_.type],w;if(C){let O=Ze[C];w=lu.clone(O.uniforms)}else w=_.uniforms;return w}function D(_,C){let w;for(let O=0,z=h.length;O<z;O++){let H=h[O];if(H.cacheKey===C){w=H,++w.usedTimes;break}}return w===void 0&&(w=new xg(i,C,_,r),h.push(w)),w}function S(_){if(--_.usedTimes===0){let C=h.indexOf(_);h[C]=h[h.length-1],h.pop(),_.destroy()}}function E(_){c.remove(_)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $c(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,x,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function o(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||Qc),s.length>1&&s.sort(d||Qc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Ig(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new $c,i.set(n,[a])):s>=r.length?(a=new $c,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ut};break;case"SpotLight":e={position:new T,direction:new T,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sg=0;function Eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i){let t=new Mg,e=bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Jt,a=new Jt;function o(l){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,b=0,M=0,y=0,D=0,S=0,E=0;l.sort(Eg);for(let _=0,C=l.length;_<C;_++){let w=l[_],O=w.color,z=w.intensity,H=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],z);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=w.shadow.matrix,b++}n.directional[p]=G,p++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(O).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[x]=G;let $=w.shadow;if(w.map&&(n.spotLightMap[D]=w.map,D++,$.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[x]=$.matrix,w.castShadow){let k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=Z,y++}x++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let $=w.shadow,k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=w.shadow.matrix,M++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==D||L.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+D-S,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=p,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=D,L.numLightProbes=E,n.version=Sg++)}function c(l,h){let u=0,d=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let M=l[f];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function tl(i){let t=new wg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Tg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tl(i),t.set(s,[o])):r>=a.length?(o=new tl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var to=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new ji,s=new _t,r=new _t,a=new ce,o=new to({depthPacking:Nh}),c=new eo,l={},h=e.maxTextureSize,u={[Pn]:Te,[Te]:Pn,[Be]:Be},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Vg,fragmentShader:Rg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Se;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let f=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),C=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=f!==un&&this.type===un,H=f===un&&this.type!==un;for(let Z=0,G=S.length;Z<G;Z++){let $=S[Z],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let it=k.getFrameExtents();if(s.multiply(it),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,k.mapSize.y=r.y)),k.map===null||z===!0||H===!0){let Ct=this.type!==un?{minFilter:Ue,magFilter:Ue}:{};k.map!==null&&k.map.dispose(),k.map=new mn(s.x,s.y,Ct),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let lt=k.getViewportCount();for(let Ct=0;Ct<lt;Ct++){let Dt=k.getViewport(Ct);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),O.viewport(a),k.updateMatrices($,Ct),n=k.getFrustum(),y(E,L,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===un&&b(k,L),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(_,C,w)};function b(S,E){let L=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,p,x,null)}function M(S,E,L,_){let C=null,w=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)C=w;else if(C=L.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=C.uuid,z=E.uuid,H=l[O];H===void 0&&(H={},l[O]=H);let Z=H[z];Z===void 0&&(Z=C.clone(),H[z]=Z,E.addEventListener("dispose",D)),C=Z}if(C.visible=E.visible,C.wireframe=E.wireframe,_===un?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=L}return C}function y(S,E,L,_,C){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===un)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let z=t.update(S),H=S.material;if(Array.isArray(H)){let Z=z.groups;for(let G=0,$=Z.length;G<$;G++){let k=Z[G],it=H[k.materialIndex];if(it&&it.visible){let lt=M(S,it,_,C);S.onBeforeShadow(i,S,E,L,z,lt,k),i.renderBufferDirect(L,null,z,lt,S,k),S.onAfterShadow(i,S,E,L,z,lt,k)}}}else if(H.visible){let Z=M(S,H,_,C);S.onBeforeShadow(i,S,E,L,z,Z,null),i.renderBufferDirect(L,null,z,Z,S,null),S.onAfterShadow(i,S,E,L,z,Z,null)}}let O=S.children;for(let z=0,H=O.length;z<H;z++)y(O[z],E,L,_,C)}function D(S){S.target.removeEventListener("dispose",D);for(let L in l){let _=l[L],C=S.target.uuid;C in _&&(_[C].dispose(),delete _[C])}}}var Lg={[ra]:aa,[oa]:ha,[ca]:ua,[_i]:la,[aa]:ra,[ha]:oa,[ua]:ca,[la]:_i};function Ug(i,t){function e(){let V=!1,nt=new ce,q=null,j=new ce(0,0,0,0);return{setMask:function(ct){q!==ct&&!V&&(i.colorMask(ct,ct,ct,ct),q=ct)},setLocked:function(ct){V=ct},setClear:function(ct,at,Tt,oe,Ae){Ae===!0&&(ct*=oe,at*=oe,Tt*=oe),nt.set(ct,at,Tt,oe),j.equals(nt)===!1&&(i.clearColor(ct,at,Tt,oe),j.copy(nt))},reset:function(){V=!1,q=null,j.set(-1,0,0,0)}}}function n(){let V=!1,nt=!1,q=null,j=null,ct=null;return{setReversed:function(at){if(nt!==at){let Tt=t.get("EXT_clip_control");nt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT);let oe=ct;ct=null,this.setClear(oe)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){q!==at&&!V&&(i.depthMask(at),q=at)},setFunc:function(at){if(nt&&(at=Lg[at]),j!==at){switch(at){case ra:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=at}},setLocked:function(at){V=at},setClear:function(at){ct!==at&&(nt&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){V=!1,q=null,j=null,ct=null,nt=!1}}}function s(){let V=!1,nt=null,q=null,j=null,ct=null,at=null,Tt=null,oe=null,Ae=null;return{setTest:function(jt){V||(jt?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(jt){nt!==jt&&!V&&(i.stencilMask(jt),nt=jt)},setFunc:function(jt,Oe,sn){(q!==jt||j!==Oe||ct!==sn)&&(i.stencilFunc(jt,Oe,sn),q=jt,j=Oe,ct=sn)},setOp:function(jt,Oe,sn){(at!==jt||Tt!==Oe||oe!==sn)&&(i.stencilOp(jt,Oe,sn),at=jt,Tt=Oe,oe=sn)},setLocked:function(jt){V=jt},setClear:function(jt){Ae!==jt&&(i.clearStencil(jt),Ae=jt)},reset:function(){V=!1,nt=null,q=null,j=null,ct=null,at=null,Tt=null,oe=null,Ae=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,b=null,M=null,y=null,D=null,S=null,E=new Ut(0,0,0),L=0,_=!1,C=null,w=null,O=null,z=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=$>=2);let it=null,lt={},Ct=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Qt=new ce().fromArray(Ct),X=new ce().fromArray(Dt);function tt(V,nt,q,j){let ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(V,at),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<q;Tt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(nt+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}let mt={};mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(_i),Ft(!1),Bt(nc),st(i.CULL_FACE),U(Vn);function st(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function bt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function wt(V,nt){return u[V]!==nt?(i.bindFramebuffer(V,nt),u[V]=nt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Nt(V,nt){let q=p,j=!1;if(V){q=d.get(nt),q===void 0&&(q=[],d.set(nt,q));let ct=V.textures;if(q.length!==ct.length||q[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Tt=ct.length;at<Tt;at++)q[at]=i.COLOR_ATTACHMENT0+at;q.length=ct.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function ae(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let kt={[Wn]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};kt[uh]=i.MIN,kt[dh]=i.MAX;let he={[fh]:i.ZERO,[ph]:i.ONE,[gh]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[Ch]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[_h]:i.CONSTANT_COLOR,[Ih]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(V,nt,q,j,ct,at,Tt,oe,Ae,jt){if(V===Vn){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),V!==ch){if(V!==g||jt!==_){if((f!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),f=Wn,y=Wn),jt)switch(V){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,M=null,D=null,S=null,E.set(0,0,0),L=0,g=V,_=jt}return}ct=ct||nt,at=at||q,Tt=Tt||j,(nt!==f||ct!==y)&&(i.blendEquationSeparate(kt[nt],kt[ct]),f=nt,y=ct),(q!==b||j!==M||at!==D||Tt!==S)&&(i.blendFuncSeparate(he[q],he[j],he[at],he[Tt]),b=q,M=j,D=at,S=Tt),(oe.equals(E)===!1||Ae!==L)&&(i.blendColor(oe.r,oe.g,oe.b,Ae),E.copy(oe),L=Ae),g=V,_=!1}function De(V,nt){V.side===Be?bt(i.CULL_FACE):st(i.CULL_FACE);let q=V.side===Te;nt&&(q=!q),Ft(q),V.blending===xi&&V.transparent===!1?U(Vn):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let j=V.stencilWrite;o.setTest(j),j&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ee(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(V){C!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),C=V)}function Bt(V){V!==rh?(st(i.CULL_FACE),V!==w&&(V===nc?i.cullFace(i.BACK):V===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),w=V}function It(V){V!==O&&(G&&i.lineWidth(V),O=V)}function ee(V,nt,q){V?(st(i.POLYGON_OFFSET_FILL),(z!==nt||H!==q)&&(i.polygonOffset(nt,q),z=nt,H=q)):bt(i.POLYGON_OFFSET_FILL)}function yt(V){V?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function I(V){V===void 0&&(V=i.TEXTURE0+Z-1),it!==V&&(i.activeTexture(V),it=V)}function A(V,nt,q){q===void 0&&(it===null?q=i.TEXTURE0+Z-1:q=it);let j=lt[q];j===void 0&&(j={type:void 0,texture:void 0},lt[q]=j),(j.type!==V||j.texture!==nt)&&(it!==q&&(i.activeTexture(q),it=q),i.bindTexture(V,nt||mt[V]),j.type=V,j.texture=nt)}function N(){let V=lt[it];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(V){Qt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Qt.copy(V))}function dt(V){X.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function zt(V,nt){let q=l.get(nt);q===void 0&&(q=new WeakMap,l.set(nt,q));let j=q.get(V);j===void 0&&(j=i.getUniformBlockIndex(nt,V.name),q.set(V,j))}function Pt(V,nt){let j=l.get(nt).get(V);c.get(nt)!==j&&(i.uniformBlockBinding(nt,j,V.__bindingPointIndex),c.set(nt,j))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,lt={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,b=null,M=null,y=null,D=null,S=null,E=new Ut(0,0,0),L=0,_=!1,C=null,w=null,O=null,z=null,H=null,Qt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:bt,bindFramebuffer:wt,drawBuffers:Nt,useProgram:ae,setBlending:U,setMaterial:De,setFlipSided:Ft,setCullFace:Bt,setLineWidth:It,setPolygonOffset:ee,setScissorTest:yt,activeTexture:I,bindTexture:A,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ut,texImage3D:Mt,updateUBOMapping:zt,uniformBlockBinding:Pt,texStorage2D:Ht,texStorage3D:J,texSubImage2D:W,texSubImage3D:At,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:St,viewport:dt,reset:$t}}function el(i,t,e,n){let s=Dg(n);switch(e){case gl:return i*t;case Al:return i*t;case xl:return i*t*2;case Lo:return i*t/s.components*s.byteLength;case Uo:return i*t/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case ml:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Us:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ga:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case va:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bs:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cl:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case gn:case dl:return{byteLength:1,components:1};case Yi:case fl:case $i:return{byteLength:2,components:1};case Ro:case Po:return{byteLength:2,components:4};case Jn:case Vo:case Je:return{byteLength:4,components:1};case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ng(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return p?new OffscreenCanvas(I,A):qs("canvas")}function x(I,A,N){let Y=1,K=yt(I);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let W=Math.floor(Y*K.width),At=Math.floor(Y*K.height);u===void 0&&(u=m(W,At));let rt=A?m(W,At):u;return rt.width=W,rt.height=At,rt.getContext("2d").drawImage(I,0,0,W,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+At+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,A,N,Y,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=A;if(A===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),A===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),A===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),A===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),A===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),A===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),A===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),A===i.RGBA){let At=K?gr:Gt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=At===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(I,A){let N;return I?A===null||A===Jn||A===bi?N=i.DEPTH24_STENCIL8:A===Je?N=i.DEPTH32F_STENCIL8:A===Yi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jn||A===bi?N=i.DEPTH_COMPONENT24:A===Je?N=i.DEPTH_COMPONENT32F:A===Yi&&(N=i.DEPTH_COMPONENT16),N}function D(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ue&&I.minFilter!==Ke?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){let A=I.target;A.removeEventListener("dispose",S),L(A),A.isVideoTexture&&h.delete(A)}function E(I){let A=I.target;A.removeEventListener("dispose",E),C(A)}function L(I){let A=n.get(I);if(A.__webglInit===void 0)return;let N=I.source,Y=d.get(N);if(Y){let K=Y[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(I),Object.keys(Y).length===0&&d.delete(N)}n.remove(I)}function _(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let N=I.source,Y=d.get(N);delete Y[A.__cacheKey],a.memory.textures--}function C(I){let A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let K=0;K<A.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(A.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let N=I.textures;for(let Y=0,K=N.length;Y<K;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(I)}let w=0;function O(){w=0}function z(){let I=w;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),w+=1,I}function H(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function Z(I,A){let N=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,I,A);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+A)}function G(I,A){let N=n.get(I);if(I.version>0&&N.__version!==I.version){X(N,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+A)}function $(I,A){let N=n.get(I);if(I.version>0&&N.__version!==I.version){X(N,I,A);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+A)}function k(I,A){let N=n.get(I);if(I.version>0&&N.__version!==I.version){tt(N,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+A)}let it={[Kn]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},lt={[Ue]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Ct={[Bh]:i.NEVER,[Gh]:i.ALWAYS,[zh]:i.LESS,[_l]:i.LEQUAL,[Oh]:i.EQUAL,[Hh]:i.GEQUAL,[qh]:i.GREATER,[kh]:i.NOTEQUAL};function Dt(I,A){if(A.type===Je&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ke||A.magFilter===Ir||A.magFilter===cs||A.magFilter===Zn||A.minFilter===Ke||A.minFilter===Ir||A.minFilter===cs||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,it[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,it[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,it[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,lt[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,lt[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ct[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ue||A.minFilter!==cs&&A.minFilter!==Zn||A.type===Je&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(I,A){let N=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));let Y=A.source,K=d.get(Y);K===void 0&&(K={},d.set(Y,K));let W=H(A);if(W!==I.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[W].usedTimes++;let At=K[I.__cacheKey];At!==void 0&&(K[I.__cacheKey].usedTimes--,At.usedTimes===0&&_(A)),I.__cacheKey=W,I.__webglTexture=K[W].texture}return N}function X(I,A,N){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let K=Qt(I,A),W=A.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+N);let At=n.get(W);if(W.version!==At.__version||K===!0){e.activeTexture(i.TEXTURE0+N);let rt=Gt.getPrimaries(Gt.workingColorSpace),ht=A.colorSpace===Tn?null:Gt.getPrimaries(A.colorSpace),Ht=A.colorSpace===Tn||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let J=x(A.image,!1,s.maxTextureSize);J=ee(A,J);let ut=r.convert(A.format,A.colorSpace),Mt=r.convert(A.type),St=M(A.internalFormat,ut,Mt,A.colorSpace,A.isVideoTexture);Dt(Y,A);let dt,zt=A.mipmaps,Pt=A.isVideoTexture!==!0,$t=At.__version===void 0||K===!0,V=W.dataReady,nt=D(A,J);if(A.isDepthTexture)St=y(A.format===Si,A.type),$t&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,St,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,St,J.width,J.height,0,ut,Mt,null));else if(A.isDataTexture)if(zt.length>0){Pt&&$t&&e.texStorage2D(i.TEXTURE_2D,nt,St,zt[0].width,zt[0].height);for(let q=0,j=zt.length;q<j;q++)dt=zt[q],Pt?V&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,dt.width,dt.height,ut,Mt,dt.data):e.texImage2D(i.TEXTURE_2D,q,St,dt.width,dt.height,0,ut,Mt,dt.data);A.generateMipmaps=!1}else Pt?($t&&e.texStorage2D(i.TEXTURE_2D,nt,St,J.width,J.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,Mt,J.data)):e.texImage2D(i.TEXTURE_2D,0,St,J.width,J.height,0,ut,Mt,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,St,zt[0].width,zt[0].height,J.depth);for(let q=0,j=zt.length;q<j;q++)if(dt=zt[q],A.format!==We)if(ut!==null)if(Pt){if(V)if(A.layerUpdates.size>0){let ct=el(dt.width,dt.height,A.format,A.type);for(let at of A.layerUpdates){let Tt=dt.data.subarray(at*ct/dt.data.BYTES_PER_ELEMENT,(at+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,at,dt.width,dt.height,1,ut,Tt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,J.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,St,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,J.depth,ut,Mt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,St,dt.width,dt.height,J.depth,0,ut,Mt,dt.data)}else{Pt&&$t&&e.texStorage2D(i.TEXTURE_2D,nt,St,zt[0].width,zt[0].height);for(let q=0,j=zt.length;q<j;q++)dt=zt[q],A.format!==We?ut!==null?Pt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,St,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?V&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,dt.width,dt.height,ut,Mt,dt.data):e.texImage2D(i.TEXTURE_2D,q,St,dt.width,dt.height,0,ut,Mt,dt.data)}else if(A.isDataArrayTexture)if(Pt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,St,J.width,J.height,J.depth),V)if(A.layerUpdates.size>0){let q=el(J.width,J.height,A.format,A.type);for(let j of A.layerUpdates){let ct=J.data.subarray(j*q/J.data.BYTES_PER_ELEMENT,(j+1)*q/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,ut,Mt,ct)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Mt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,J.width,J.height,J.depth,0,ut,Mt,J.data);else if(A.isData3DTexture)Pt?($t&&e.texStorage3D(i.TEXTURE_3D,nt,St,J.width,J.height,J.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Mt,J.data)):e.texImage3D(i.TEXTURE_3D,0,St,J.width,J.height,J.depth,0,ut,Mt,J.data);else if(A.isFramebufferTexture){if($t)if(Pt)e.texStorage2D(i.TEXTURE_2D,nt,St,J.width,J.height);else{let q=J.width,j=J.height;for(let ct=0;ct<nt;ct++)e.texImage2D(i.TEXTURE_2D,ct,St,q,j,0,ut,Mt,null),q>>=1,j>>=1}}else if(zt.length>0){if(Pt&&$t){let q=yt(zt[0]);e.texStorage2D(i.TEXTURE_2D,nt,St,q.width,q.height)}for(let q=0,j=zt.length;q<j;q++)dt=zt[q],Pt?V&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ut,Mt,dt):e.texImage2D(i.TEXTURE_2D,q,St,ut,Mt,dt);A.generateMipmaps=!1}else if(Pt){if($t){let q=yt(J);e.texStorage2D(i.TEXTURE_2D,nt,St,q.width,q.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Mt,J)}else e.texImage2D(i.TEXTURE_2D,0,St,ut,Mt,J);g(A)&&f(Y),At.__version=W.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function tt(I,A,N){if(A.image.length!==6)return;let Y=Qt(I,A),K=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+N);let W=n.get(K);if(K.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let At=Gt.getPrimaries(Gt.workingColorSpace),rt=A.colorSpace===Tn?null:Gt.getPrimaries(A.colorSpace),ht=A.colorSpace===Tn||At===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ht=A.isCompressedTexture||A.image[0].isCompressedTexture,J=A.image[0]&&A.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Ht&&!J?ut[j]=x(A.image[j],!0,s.maxCubemapSize):ut[j]=J?A.image[j].image:A.image[j],ut[j]=ee(A,ut[j]);let Mt=ut[0],St=r.convert(A.format,A.colorSpace),dt=r.convert(A.type),zt=M(A.internalFormat,St,dt,A.colorSpace),Pt=A.isVideoTexture!==!0,$t=W.__version===void 0||Y===!0,V=K.dataReady,nt=D(A,Mt);Dt(i.TEXTURE_CUBE_MAP,A);let q;if(Ht){Pt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,zt,Mt.width,Mt.height);for(let j=0;j<6;j++){q=ut[j].mipmaps;for(let ct=0;ct<q.length;ct++){let at=q[ct];A.format!==We?St!==null?Pt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,at.width,at.height,St,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,at.width,at.height,St,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,zt,at.width,at.height,0,St,dt,at.data)}}}else{if(q=A.mipmaps,Pt&&$t){q.length>0&&nt++;let j=yt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,zt,j.width,j.height)}for(let j=0;j<6;j++)if(J){Pt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,St,dt,ut[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,ut[j].width,ut[j].height,0,St,dt,ut[j].data);for(let ct=0;ct<q.length;ct++){let Tt=q[ct].image[j].image;Pt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Tt.width,Tt.height,St,dt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,zt,Tt.width,Tt.height,0,St,dt,Tt.data)}}else{Pt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,dt,ut[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,St,dt,ut[j]);for(let ct=0;ct<q.length;ct++){let at=q[ct];Pt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,St,dt,at.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,zt,St,dt,at.image[j])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),W.__version=K.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function mt(I,A,N,Y,K,W){let At=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ht=M(N.internalFormat,At,rt,N.colorSpace),Ht=n.get(A),J=n.get(N);if(J.__renderTarget=A,!Ht.__hasExternalTextures){let ut=Math.max(1,A.width>>W),Mt=Math.max(1,A.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,W,ht,ut,Mt,A.depth,0,At,rt,null):e.texImage2D(K,W,ht,ut,Mt,0,At,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Bt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,J.__webglTexture,0,Ft(A)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,A,N){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){let Y=A.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=y(A.stencilBuffer,K),At=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Ft(A);Bt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,A.width,A.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,W,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,I)}else{let Y=A.textures;for(let K=0;K<Y.length;K++){let W=Y[K],At=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ht=M(W.internalFormat,At,rt,W.colorSpace),Ht=Ft(A);N&&Bt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ht,A.width,A.height):Bt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ht,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ht,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z(A.depthTexture,0);let K=Y.__webglTexture,W=Ft(A);if(A.depthTexture.format===vi)Bt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(A.depthTexture.format===Si)Bt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(I){let A=n.get(I),N=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=Y}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(A.__webglFramebuffer,I)}else if(N){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(A.__webglDepthbuffer[Y],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),st(A.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(I,A,N){let Y=n.get(I);A!==void 0&&mt(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&wt(I)}function ae(I){let A=I.texture,N=n.get(I),Y=n.get(A);I.addEventListener("dispose",E);let K=I.textures,W=I.isWebGLCubeRenderTarget===!0,At=K.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps&&A.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ht=0;ht<A.mipmaps.length;ht++)N.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(At)for(let rt=0,ht=K.length;rt<ht;rt++){let Ht=n.get(K[rt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Bt(I)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let ht=K[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Ht=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),ut=M(ht.internalFormat,Ht,J,ht.colorSpace,I.isXRRenderTarget===!0),Mt=Ft(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ut,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ht=0;ht<A.mipmaps.length;ht++)mt(N.__webglFramebuffer[rt][ht],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else mt(N.__webglFramebuffer[rt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,ht=K.length;rt<ht;rt++){let Ht=K[rt],J=n.get(Ht);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Dt(i.TEXTURE_2D,Ht),mt(N.__webglFramebuffer,I,Ht,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(Ht)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Dt(rt,A),A.mipmaps&&A.mipmaps.length>0)for(let ht=0;ht<A.mipmaps.length;ht++)mt(N.__webglFramebuffer[ht],I,A,i.COLOR_ATTACHMENT0,rt,ht);else mt(N.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,rt,0);g(A)&&f(rt),e.unbindTexture()}I.depthBuffer&&wt(I)}function kt(I){let A=I.textures;for(let N=0,Y=A.length;N<Y;N++){let K=A[N];if(g(K)){let W=b(I),At=n.get(K).__webglTexture;e.bindTexture(W,At),f(W),e.unbindTexture()}}}let he=[],U=[];function De(I){if(I.samples>0){if(Bt(I)===!1){let A=I.textures,N=I.width,Y=I.height,K=i.COLOR_BUFFER_BIT,W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(I),rt=A.length>1;if(rt)for(let ht=0;ht<A.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ht=0;ht<A.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[ht]);let Ht=n.get(A[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),c===!0&&(he.length=0,U.length=0,he.push(i.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<A.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,At.__webglColorRenderbuffer[ht]);let Ht=n.get(A[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ft(I){return Math.min(s.maxSamples,I.samples)}function Bt(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ee(I,A){let N=I.colorSpace,Y=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||N!==Vi&&N!==Tn&&(Gt.getTransfer(N)===Zt?(Y!==We||K!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),A}function yt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=Nt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Bt}function Fg(i,t){function e(n,s=Tn){let r,a=Gt.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.BYTE;if(n===fl)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Je)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===ml)return i.RGB;if(n===We)return i.RGBA;if(n===Al)return i.LUMINANCE;if(n===xl)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===vl)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Us||n===Ds||n===Ns||n===Fs)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===ma||n===Aa||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===Ca||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===Ca)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===Ia||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Va||n===Ra||n===Pa||n===La||n===Ua||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===Na||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bs)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Ba||n===za||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var no=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},Gi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`,io=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:zg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},so=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,x=new io,g=e.getContextAttributes(),f=null,b=null,M=[],y=[],D=new _t,S=null,E=new Me;E.viewport=new ce;let L=new Me;L.viewport=new ce;let _=[E,L],C=new no,w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=M[X];return tt===void 0&&(tt=new Gi,M[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=M[X];return tt===void 0&&(tt=new Gi,M[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=M[X];return tt===void 0&&(tt=new Gi,M[X]=tt),tt.getHandSpace()};function z(X){let tt=y.indexOf(X.inputSource);if(tt===-1)return;let mt=M[tt];mt!==void 0&&(mt.update(X.inputSource,X.frame,l||a),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<M.length;X++){let tt=y[X];tt!==null&&(y[X]=null,M[X].disconnect(tt))}w=null,O=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new mn(p.framebufferWidth,p.framebufferHeight,{format:We,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,mt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Si:vi,mt=g.stencil?bi:Jn);let bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new mn(d.textureWidth,d.textureHeight,{format:We,type:gn,depthTexture:new Qs(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let tt=0;tt<X.removed.length;tt++){let mt=X.removed[tt],st=y.indexOf(mt);st>=0&&(y[st]=null,M[st].disconnect(mt))}for(let tt=0;tt<X.added.length;tt++){let mt=X.added[tt],st=y.indexOf(mt);if(st===-1){for(let wt=0;wt<M.length;wt++)if(wt>=y.length){y.push(mt),st=wt;break}else if(y[wt]===null){y[wt]=mt,st=wt;break}if(st===-1)break}let bt=M[st];bt&&bt.connect(mt)}}let G=new T,$=new T;function k(X,tt,mt){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);let st=G.distanceTo($),bt=tt.projectionMatrix.elements,wt=mt.projectionMatrix.elements,Nt=bt[14]/(bt[10]-1),ae=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],he=(bt[9]-1)/bt[5],U=(bt[8]-1)/bt[0],De=(wt[8]+1)/wt[0],Ft=Nt*U,Bt=Nt*De,It=st/(-U+De),ee=It*-U;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ee),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let yt=Nt+It,I=ae+It,A=Ft-ee,N=Bt+(st-ee),Y=kt*ae/I*yt,K=he*ae/I*yt;X.projectionMatrix.makePerspective(A,N,Y,K,yt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,mt=X.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),C.near=L.near=E.near=tt,C.far=L.far=E.far=mt,(w!==C.near||O!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),w=C.near,O=C.far),E.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,C.layers.mask=E.layers.mask|L.layers.mask;let st=X.parent,bt=C.cameras;it(C,st);for(let wt=0;wt<bt.length;wt++)it(bt[wt],st);bt.length===2?k(C,E,L):C.projectionMatrix.copy(E.projectionMatrix),lt(X,C,st)};function lt(X,tt,mt){mt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ka*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)};let Ct=null;function Dt(X,tt){if(h=tt.getViewerPose(l||a),m=tt,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let st=!1;mt.length!==C.cameras.length&&(C.cameras.length=0,st=!0);for(let wt=0;wt<mt.length;wt++){let Nt=mt[wt],ae=null;if(p!==null)ae=p.getViewport(Nt);else{let he=u.getViewSubImage(d,Nt);ae=he.viewport,wt===0&&(t.setRenderTargetTextures(b,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(b))}let kt=_[wt];kt===void 0&&(kt=new Me,kt.layers.enable(wt),kt.viewport=new ce,_[wt]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ae.x,ae.y,ae.width,ae.height),wt===0&&(C.matrix.copy(kt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),st===!0&&C.cameras.push(kt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let wt=u.getDepthInformation(mt[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,s.renderState)}}for(let mt=0;mt<M.length;mt++){let st=y[mt],bt=M[mt];st!==null&&bt!==void 0&&bt.update(st,tt,l||a)}Ct&&Ct(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Qt=new Sl;Qt.setAnimationLoop(Dt),this.setAnimationLoop=function(X){Ct=X},this.dispose=function(){}}},Hn=new $e,qg=new Jt;function kg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,bl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,b,M,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,b,M):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Te&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Te&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=t.get(f),M=b.envMap,y=b.envMapRotation;M&&(g.envMap.value=M,Hn.copy(y),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),g.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(Hn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,b,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let b=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let y=M.program;n.uniformBlockBinding(b,y)}function l(b,M){let y=s[b.id];y===void 0&&(m(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",g));let D=M.program;n.updateUBOMapping(b,D);let S=t.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let M=u();b.__bindingPointIndex=M;let y=i.createBuffer(),D=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=s[b.id],y=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,E=y.length;S<E;S++){let L=Array.isArray(y[S])?y[S]:[y[S]];for(let _=0,C=L.length;_<C;_++){let w=L[_];if(p(w,S,_,D)===!0){let O=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],H=0;for(let Z=0;Z<z.length;Z++){let G=z[Z],$=x(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,y,D){let S=b.value,E=M+"_"+y;if(D[E]===void 0)return typeof S=="number"||typeof S=="boolean"?D[E]=S:D[E]=S.clone(),!0;{let L=D[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return D[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(b){let M=b.uniforms,y=0,D=16;for(let E=0,L=M.length;E<L;E++){let _=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,w=_.length;C<w;C++){let O=_[C],z=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=z.length;H<Z;H++){let G=z[H],$=x(G),k=y%D,it=k%$.boundary,lt=k+it;y+=it,lt!==0&&D-lt<$.storage&&(y+=D-lt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}let S=y%D;return S>0&&(y+=D-S),b.__size=y,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){let M=b.target;M.removeEventListener("dispose",g);let y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var $s=class{constructor(t={}){let{canvas:e=Xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Rn,this.toneMappingExposure=1;let y=this,D=!1,S=0,E=0,L=null,_=-1,C=null,w=new ce,O=new ce,z=null,H=new Ut(0),Z=0,G=e.width,$=e.height,k=1,it=null,lt=null,Ct=new ce(0,0,G,$),Dt=new ce(0,0,G,$),Qt=!1,X=new ji,tt=!1,mt=!1,st=new Jt,bt=new Jt,wt=new T,Nt=new ce,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function he(){return L===null?k:1}let U=n;function De(v,R){return e.getContext(v,R)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){let R="webgl2";if(U=De(R,v),U===null)throw De(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ft,Bt,It,ee,yt,I,A,N,Y,K,W,At,rt,ht,Ht,J,ut,Mt,St,dt,zt,Pt,$t,V;function nt(){Ft=new rp(U),Ft.init(),Pt=new Fg(U,Ft),Bt=new $f(U,Ft,t,Pt),It=new Ug(U,Ft),Bt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),ee=new cp(U),yt=new yg,I=new Ng(U,Ft,It,yt,Bt,Pt,ee),A=new ep(y),N=new sp(y),Y=new pu(U),$t=new Jf(U,Y),K=new ap(U,Y,ee,$t),W=new hp(U,K,Y,ee),St=new lp(U,Bt,I),J=new tp(yt),At=new Cg(y,A,N,Ft,Bt,$t,J),rt=new kg(y,yt),ht=new Ig,Ht=new Tg(Ft),Mt=new Kf(y,A,N,It,W,p,c),ut=new Pg(y,W,Bt),V=new Hg(U,ee,Bt,It),dt=new Qf(U,Ft,ee),zt=new op(U,Ft,ee),ee.programs=At.programs,y.capabilities=Bt,y.extensions=Ft,y.properties=yt,y.renderLists=ht,y.shadowMap=ut,y.state=It,y.info=ee}nt();let q=new so(y,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,$,!1))},this.getSize=function(v){return v.set(G,$)},this.setSize=function(v,R,F=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,$=R,e.width=Math.floor(v*k),e.height=Math.floor(R*k),F===!0&&(e.style.width=v+"px",e.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(G*k,$*k).floor()},this.setDrawingBufferSize=function(v,R,F){G=v,$=R,k=F,e.width=Math.floor(v*F),e.height=Math.floor(R*F),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(Ct)},this.setViewport=function(v,R,F,B){v.isVector4?Ct.set(v.x,v.y,v.z,v.w):Ct.set(v,R,F,B),It.viewport(w.copy(Ct).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Dt)},this.setScissor=function(v,R,F,B){v.isVector4?Dt.set(v.x,v.y,v.z,v.w):Dt.set(v,R,F,B),It.scissor(O.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(v){It.setScissorTest(Qt=v)},this.setOpaqueSort=function(v){it=v},this.setTransparentSort=function(v){lt=v},this.getClearColor=function(v){return v.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(v=!0,R=!0,F=!0){let B=0;if(v){let P=!1;if(L!==null){let Q=L.texture.format;P=Q===No||Q===Do||Q===Uo}if(P){let Q=L.texture.type,ot=Q===gn||Q===Jn||Q===Yi||Q===bi||Q===Ro||Q===Po,ft=Mt.getClearColor(),pt=Mt.getClearAlpha(),Et=ft.r,Vt=ft.g,gt=ft.b;ot?(m[0]=Et,m[1]=Vt,m[2]=gt,m[3]=pt,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Et,x[1]=Vt,x[2]=gt,x[3]=pt,U.clearBufferiv(U.COLOR,0,x))}else B|=U.COLOR_BUFFER_BIT}R&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Ht.dispose(),yt.dispose(),A.dispose(),N.dispose(),W.dispose(),$t.dispose(),V.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",jo),q.removeEventListener("sessionend",Zo),Fn.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let v=ee.autoReset,R=ut.enabled,F=ut.autoUpdate,B=ut.needsUpdate,P=ut.type;nt(),ee.autoReset=v,ut.enabled=R,ut.autoUpdate=F,ut.needsUpdate=B,ut.type=P}function at(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Tt(v){let R=v.target;R.removeEventListener("dispose",Tt),oe(R)}function oe(v){Ae(v),yt.remove(v)}function Ae(v){let R=yt.get(v).programs;R!==void 0&&(R.forEach(function(F){At.releaseProgram(F)}),v.isShaderMaterial&&At.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,F,B,P,Q){R===null&&(R=ae);let ot=P.isMesh&&P.matrixWorld.determinant()<0,ft=nh(v,R,F,B,P);It.setMaterial(B,ot);let pt=F.index,Et=1;if(B.wireframe===!0){if(pt=K.getWireframeAttribute(F),pt===void 0)return;Et=2}let Vt=F.drawRange,gt=F.attributes.position,Wt=Vt.start*Et,te=(Vt.start+Vt.count)*Et;Q!==null&&(Wt=Math.max(Wt,Q.start*Et),te=Math.min(te,(Q.start+Q.count)*Et)),pt!==null?(Wt=Math.max(Wt,0),te=Math.min(te,pt.count)):gt!=null&&(Wt=Math.max(Wt,0),te=Math.min(te,gt.count));let ne=te-Wt;if(ne<0||ne===1/0)return;$t.setup(P,B,ft,F,pt);let Ee,Xt=dt;if(pt!==null&&(Ee=Y.get(pt),Xt=zt,Xt.setIndex(Ee)),P.isMesh)B.wireframe===!0?(It.setLineWidth(B.wireframeLinewidth*he()),Xt.setMode(U.LINES)):Xt.setMode(U.TRIANGLES);else if(P.isLine){let xt=B.linewidth;xt===void 0&&(xt=1),It.setLineWidth(xt*he()),P.isLineSegments?Xt.setMode(U.LINES):P.isLineLoop?Xt.setMode(U.LINE_LOOP):Xt.setMode(U.LINE_STRIP)}else P.isPoints?Xt.setMode(U.POINTS):P.isSprite&&Xt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Xt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Xt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let xt=P._multiDrawStarts,rn=P._multiDrawCounts,Yt=P._multiDrawCount,qe=pt?Y.get(pt).bytesPerElement:1,ei=yt.get(B).currentProgram.getUniforms();for(let Re=0;Re<Yt;Re++)ei.setValue(U,"_gl_DrawID",Re),Xt.render(xt[Re]/qe,rn[Re])}else if(P.isInstancedMesh)Xt.renderInstances(Wt,ne,P.count);else if(F.isInstancedBufferGeometry){let xt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,rn=Math.min(F.instanceCount,xt);Xt.renderInstances(Wt,ne,rn)}else Xt.render(Wt,ne)};function jt(v,R,F){v.transparent===!0&&v.side===Be&&v.forceSinglePass===!1?(v.side=Te,v.needsUpdate=!0,os(v,R,F),v.side=Pn,v.needsUpdate=!0,os(v,R,F),v.side=Be):os(v,R,F)}this.compile=function(v,R,F=null){F===null&&(F=v),f=Ht.get(F),f.init(R),M.push(f),F.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),v!==F&&v.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),f.setupLights();let B=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let Q=P.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){let ft=Q[ot];jt(ft,F,P),B.add(ft)}else jt(Q,F,P),B.add(Q)}),M.pop(),f=null,B},this.compileAsync=function(v,R,F=null){let B=this.compile(v,R,F);return new Promise(P=>{function Q(){if(B.forEach(function(ot){yt.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){P(v);return}setTimeout(Q,10)}Ft.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Oe=null;function sn(v){Oe&&Oe(v)}function jo(){Fn.stop()}function Zo(){Fn.start()}let Fn=new Sl;Fn.setAnimationLoop(sn),typeof self!="undefined"&&Fn.setContext(self),this.setAnimationLoop=function(v){Oe=v,q.setAnimationLoop(v),v===null?Fn.stop():Fn.start()},q.addEventListener("sessionstart",jo),q.addEventListener("sessionend",Zo),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(R),R=q.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,R,L),f=Ht.get(v,M.length),f.init(R),M.push(f),bt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),X.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,mt),g=ht.get(v,b.length),g.init(),b.push(g),q.enabled===!0&&q.isPresenting===!0){let Q=y.xr.getDepthSensingMesh();Q!==null&&_r(Q,R,-1/0,y.sortObjects)}_r(v,R,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(it,lt),kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,kt&&Mt.addToRenderList(g,v),this.info.render.frame++,tt===!0&&J.beginShadows();let F=f.state.shadowsArray;ut.render(F,v,R),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,P=g.transmissive;if(f.setupLights(),R.isArrayCamera){let Q=R.cameras;if(P.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){let pt=Q[ot];Jo(B,P,v,pt)}kt&&Mt.render(v);for(let ot=0,ft=Q.length;ot<ft;ot++){let pt=Q[ot];Ko(g,v,pt,pt.viewport)}}else P.length>0&&Jo(B,P,v,R),kt&&Mt.render(v),Ko(g,v,R);L!==null&&(I.updateMultisampleRenderTarget(L),I.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(y,v,R),$t.resetDefaultState(),_=-1,C=null,M.pop(),M.length>0?(f=M[M.length-1],tt===!0&&J.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function _r(v,R,F,B){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){B&&Nt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bt);let ot=W.update(v),ft=v.material;ft.visible&&g.push(v,ot,ft,F,Nt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let ot=W.update(v),ft=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Nt.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Nt.copy(ot.boundingSphere.center)),Nt.applyMatrix4(v.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){let pt=ot.groups;for(let Et=0,Vt=pt.length;Et<Vt;Et++){let gt=pt[Et],Wt=ft[gt.materialIndex];Wt&&Wt.visible&&g.push(v,ot,Wt,F,Nt.z,gt)}}else ft.visible&&g.push(v,ot,ft,F,Nt.z,null)}}let Q=v.children;for(let ot=0,ft=Q.length;ot<ft;ot++)_r(Q[ot],R,F,B)}function Ko(v,R,F,B){let P=v.opaque,Q=v.transmissive,ot=v.transparent;f.setupLightsView(F),tt===!0&&J.setGlobalState(y.clippingPlanes,F),B&&It.viewport(w.copy(B)),P.length>0&&as(P,R,F),Q.length>0&&as(Q,R,F),ot.length>0&&as(ot,R,F),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Jo(v,R,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?$i:gn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let Q=f.state.transmissionRenderTarget[B.id],ot=B.viewport||w;Q.setSize(ot.z,ot.w);let ft=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(H),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),kt&&Mt.render(F);let pt=y.toneMapping;y.toneMapping=Rn;let Et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),tt===!0&&J.setGlobalState(y.clippingPlanes,B),as(v,F,B),I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let gt=0,Wt=R.length;gt<Wt;gt++){let te=R[gt],ne=te.object,Ee=te.geometry,Xt=te.material,xt=te.group;if(Xt.side===Be&&ne.layers.test(B.layers)){let rn=Xt.side;Xt.side=Te,Xt.needsUpdate=!0,Qo(ne,F,B,Ee,Xt,xt),Xt.side=rn,Xt.needsUpdate=!0,Vt=!0}}Vt===!0&&(I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q))}y.setRenderTarget(ft),y.setClearColor(H,Z),Et!==void 0&&(B.viewport=Et),y.toneMapping=pt}function as(v,R,F){let B=R.isScene===!0?R.overrideMaterial:null;for(let P=0,Q=v.length;P<Q;P++){let ot=v[P],ft=ot.object,pt=ot.geometry,Et=B===null?ot.material:B,Vt=ot.group;ft.layers.test(F.layers)&&Qo(ft,R,F,pt,Et,Vt)}}function Qo(v,R,F,B,P,Q){v.onBeforeRender(y,R,F,B,P,Q),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(y,R,F,B,v,Q),P.transparent===!0&&P.side===Be&&P.forceSinglePass===!1?(P.side=Te,P.needsUpdate=!0,y.renderBufferDirect(F,R,B,P,v,Q),P.side=Pn,P.needsUpdate=!0,y.renderBufferDirect(F,R,B,P,v,Q),P.side=Be):y.renderBufferDirect(F,R,B,P,v,Q),v.onAfterRender(y,R,F,B,P,Q)}function os(v,R,F){R.isScene!==!0&&(R=ae);let B=yt.get(v),P=f.state.lights,Q=f.state.shadowsArray,ot=P.state.version,ft=At.getParameters(v,P.state,Q,R,F),pt=At.getProgramCacheKey(ft),Et=B.programs;B.environment=v.isMeshStandardMaterial?R.environment:null,B.fog=R.fog,B.envMap=(v.isMeshStandardMaterial?N:A).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",Tt),Et=new Map,B.programs=Et);let Vt=Et.get(pt);if(Vt!==void 0){if(B.currentProgram===Vt&&B.lightsStateVersion===ot)return tc(v,ft),Vt}else ft.uniforms=At.getUniforms(v),v.onBeforeCompile(ft,y),Vt=At.acquireProgram(ft,pt),Et.set(pt,Vt),B.uniforms=ft.uniforms;let gt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(gt.clippingPlanes=J.uniform),tc(v,ft),B.needsLights=sh(v),B.lightsStateVersion=ot,B.needsLights&&(gt.ambientLightColor.value=P.state.ambient,gt.lightProbe.value=P.state.probe,gt.directionalLights.value=P.state.directional,gt.directionalLightShadows.value=P.state.directionalShadow,gt.spotLights.value=P.state.spot,gt.spotLightShadows.value=P.state.spotShadow,gt.rectAreaLights.value=P.state.rectArea,gt.ltc_1.value=P.state.rectAreaLTC1,gt.ltc_2.value=P.state.rectAreaLTC2,gt.pointLights.value=P.state.point,gt.pointLightShadows.value=P.state.pointShadow,gt.hemisphereLights.value=P.state.hemi,gt.directionalShadowMap.value=P.state.directionalShadowMap,gt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,gt.spotShadowMap.value=P.state.spotShadowMap,gt.spotLightMatrix.value=P.state.spotLightMatrix,gt.spotLightMap.value=P.state.spotLightMap,gt.pointShadowMap.value=P.state.pointShadowMap,gt.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Vt,B.uniformsList=null,Vt}function $o(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=yi.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function tc(v,R){let F=yt.get(v);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.batchingColor=R.batchingColor,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function nh(v,R,F,B,P){R.isScene!==!0&&(R=ae),I.resetTextureUnits();let Q=R.fog,ot=B.isMeshStandardMaterial?R.environment:null,ft=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vi,pt=(B.isMeshStandardMaterial?N:A).get(B.envMap||ot),Et=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Vt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),gt=!!F.morphAttributes.position,Wt=!!F.morphAttributes.normal,te=!!F.morphAttributes.color,ne=Rn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ne=y.toneMapping);let Ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=Ee!==void 0?Ee.length:0,xt=yt.get(B),rn=f.state.lights;if(tt===!0&&(mt===!0||v!==C)){let Ne=v===C&&B.id===_;J.setState(B,v,Ne)}let Yt=!1;B.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==rn.state.version||xt.outputColorSpace!==ft||P.isBatchedMesh&&xt.batching===!1||!P.isBatchedMesh&&xt.batching===!0||P.isBatchedMesh&&xt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xt.instancing===!1||!P.isInstancedMesh&&xt.instancing===!0||P.isSkinnedMesh&&xt.skinning===!1||!P.isSkinnedMesh&&xt.skinning===!0||P.isInstancedMesh&&xt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xt.instancingMorph===!1&&P.morphTexture!==null||xt.envMap!==pt||B.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Et||xt.vertexTangents!==Vt||xt.morphTargets!==gt||xt.morphNormals!==Wt||xt.morphColors!==te||xt.toneMapping!==ne||xt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,xt.__version=B.version);let qe=xt.currentProgram;Yt===!0&&(qe=os(B,R,P));let ei=!1,Re=!1,Li=!1,ie=qe.getUniforms(),je=xt.uniforms;if(It.useProgram(qe.program)&&(ei=!0,Re=!0,Li=!0),B.id!==_&&(_=B.id,Re=!0),ei||C!==v){It.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),jh(st),Zh(st),ie.setValue(U,"projectionMatrix",st)):ie.setValue(U,"projectionMatrix",v.projectionMatrix),ie.setValue(U,"viewMatrix",v.matrixWorldInverse);let yn=ie.map.cameraPosition;yn!==void 0&&yn.setValue(U,wt.setFromMatrixPosition(v.matrixWorld)),Bt.logarithmicDepthBuffer&&ie.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ie.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),C!==v&&(C=v,Re=!0,Li=!0)}if(P.isSkinnedMesh){ie.setOptional(U,P,"bindMatrix"),ie.setOptional(U,P,"bindMatrixInverse");let Ne=P.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),ie.setValue(U,"boneTexture",Ne.boneTexture,I))}P.isBatchedMesh&&(ie.setOptional(U,P,"batchingTexture"),ie.setValue(U,"batchingTexture",P._matricesTexture,I),ie.setOptional(U,P,"batchingIdTexture"),ie.setValue(U,"batchingIdTexture",P._indirectTexture,I),ie.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&ie.setValue(U,"batchingColorTexture",P._colorsTexture,I));let Ui=F.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&St.update(P,F,qe),(Re||xt.receiveShadow!==P.receiveShadow)&&(xt.receiveShadow=P.receiveShadow,ie.setValue(U,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(je.envMap.value=pt,je.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&R.environment!==null&&(je.envMapIntensity.value=R.environmentIntensity),Re&&(ie.setValue(U,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&ih(je,Li),Q&&B.fog===!0&&rt.refreshFogUniforms(je,Q),rt.refreshMaterialUniforms(je,B,k,$,f.state.transmissionRenderTarget[v.id]),yi.upload(U,$o(xt),je,I)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(yi.upload(U,$o(xt),je,I),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ie.setValue(U,"center",P.center),ie.setValue(U,"modelViewMatrix",P.modelViewMatrix),ie.setValue(U,"normalMatrix",P.normalMatrix),ie.setValue(U,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ne=B.uniformsGroups;for(let yn=0,_n=Ne.length;yn<_n;yn++){let ec=Ne[yn];V.update(ec,qe),V.bind(ec,qe)}}return qe}function ih(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function sh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,R,F){yt.get(v.texture).__webglTexture=R,yt.get(v.depthTexture).__webglTexture=F;let B=yt.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,R){let F=yt.get(v);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,F=0){L=v,S=R,E=F;let B=!0,P=null,Q=!1,ot=!1;if(v){let pt=yt.get(v);if(pt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(pt.__webglFramebuffer===void 0)I.setupRenderTarget(v);else if(pt.__hasExternalTextures)I.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let gt=v.depthTexture;if(pt.__boundDepthTexture!==gt){if(gt!==null&&yt.has(gt)&&(v.width!==gt.image.width||v.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(v)}}let Et=v.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ot=!0);let Vt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Vt[R])?P=Vt[R][F]:P=Vt[R],Q=!0):v.samples>0&&I.useMultisampledRTT(v)===!1?P=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Vt)?P=Vt[F]:P=Vt,w.copy(v.viewport),O.copy(v.scissor),z=v.scissorTest}else w.copy(Ct).multiplyScalar(k).floor(),O.copy(Dt).multiplyScalar(k).floor(),z=Qt;if(It.bindFramebuffer(U.FRAMEBUFFER,P)&&B&&It.drawBuffers(v,P),It.viewport(w),It.scissor(O),It.setScissorTest(z),Q){let pt=yt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,pt.__webglTexture,F)}else if(ot){let pt=yt.get(v.texture),Et=R||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pt.__webglTexture,F||0,Et)}_=-1},this.readRenderTargetPixels=function(v,R,F,B,P,Q,ot){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){It.bindFramebuffer(U.FRAMEBUFFER,ft);try{let pt=v.texture,Et=pt.format,Vt=pt.type;if(!Bt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-B&&F>=0&&F<=v.height-P&&U.readPixels(R,F,B,P,Pt.convert(Et),Pt.convert(Vt),Q)}finally{let pt=L!==null?yt.get(L).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(v,R,F,B,P,Q,ot){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){let pt=v.texture,Et=pt.format,Vt=pt.type;if(!Bt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=v.width-B&&F>=0&&F<=v.height-P){It.bindFramebuffer(U.FRAMEBUFFER,ft);let gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(R,F,B,P,Pt.convert(Et),Pt.convert(Vt),0);let Wt=L!==null?yt.get(L).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,Wt);let te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yh(U,te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(gt),U.deleteSync(te),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,R=null,F=0){v.isTexture!==!0&&(ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,v=arguments[1]);let B=Math.pow(2,-F),P=Math.floor(v.image.width*B),Q=Math.floor(v.image.height*B),ot=R!==null?R.x:0,ft=R!==null?R.y:0;I.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ot,ft,P,Q),It.unbindTexture()},this.copyTextureToTexture=function(v,R,F=null,B=null,P=0){v.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],R=arguments[2],P=arguments[3]||0,F=null);let Q,ot,ft,pt,Et,Vt,gt,Wt,te,ne=v.isCompressedTexture?v.mipmaps[P]:v.image;F!==null?(Q=F.max.x-F.min.x,ot=F.max.y-F.min.y,ft=F.isBox3?F.max.z-F.min.z:1,pt=F.min.x,Et=F.min.y,Vt=F.isBox3?F.min.z:0):(Q=ne.width,ot=ne.height,ft=ne.depth||1,pt=0,Et=0,Vt=0),B!==null?(gt=B.x,Wt=B.y,te=B.z):(gt=0,Wt=0,te=0);let Ee=Pt.convert(R.format),Xt=Pt.convert(R.type),xt;R.isData3DTexture?(I.setTexture3D(R,0),xt=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(I.setTexture2DArray(R,0),xt=U.TEXTURE_2D_ARRAY):(I.setTexture2D(R,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let rn=U.getParameter(U.UNPACK_ROW_LENGTH),Yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qe=U.getParameter(U.UNPACK_SKIP_PIXELS),ei=U.getParameter(U.UNPACK_SKIP_ROWS),Re=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);let Li=v.isDataArrayTexture||v.isData3DTexture,ie=R.isDataArrayTexture||R.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let je=yt.get(v),Ui=yt.get(R),Ne=yt.get(je.__renderTarget),yn=yt.get(Ui.__renderTarget);It.bindFramebuffer(U.READ_FRAMEBUFFER,Ne.__webglFramebuffer),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let _n=0;_n<ft;_n++)Li&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,P,Vt+_n),v.isDepthTexture?(ie&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(R).__webglTexture,P,te+_n),U.blitFramebuffer(pt,Et,Q,ot,gt,Wt,Q,ot,U.DEPTH_BUFFER_BIT,U.NEAREST)):ie?U.copyTexSubImage3D(xt,P,gt,Wt,te+_n,pt,Et,Q,ot):U.copyTexSubImage2D(xt,P,gt,Wt,te+_n,pt,Et,Q,ot);It.bindFramebuffer(U.READ_FRAMEBUFFER,null),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ie?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(xt,P,gt,Wt,te,Q,ot,ft,Ee,Xt,ne.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,P,gt,Wt,te,Q,ot,ft,Ee,ne.data):U.texSubImage3D(xt,P,gt,Wt,te,Q,ot,ft,Ee,Xt,ne):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,gt,Wt,Q,ot,Ee,Xt,ne.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,gt,Wt,ne.width,ne.height,Ee,ne.data):U.texSubImage2D(U.TEXTURE_2D,P,gt,Wt,Q,ot,Ee,Xt,ne);U.pixelStorei(U.UNPACK_ROW_LENGTH,rn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,ei),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re),P===0&&R.generateMipmaps&&U.generateMipmap(xt),It.unbindTexture()},this.copyTextureToTexture3D=function(v,R,F=null,B=null,P=0){return v.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,v=arguments[2],R=arguments[3],P=arguments[4]||0),ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,F,B,P)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&I.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?I.setTextureCube(v,0):v.isData3DTexture?I.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?I.setTexture2DArray(v,0):I.setTexture2D(v,0),It.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,It.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var tr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ro=class extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ue,h=Ue,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mi=new Jt,nl=new Jt,Ts=[],il=new An,Gg=new Jt,Oi=new Kt,qi=new Un,ir=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),il.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(il)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),qi.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mi),nl.multiplyMatrices(n,mi),Oi.matrixWorld=nl,Oi.raycast(t,Ts);for(let a=0,o=Ts.length;a<o;a++){let c=Ts[a];c.instanceId=r,c.object=this,e.push(c)}Ts.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,Lo,Je));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zi=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sl=new Jt,ao=new Gs,Vs=new Un,Rs=new T,sr=class extends _e{constructor(t=new Se,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;sl.copy(s).invert(),ao.copy(t.ray).applyMatrix4(sl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=d,x=p;m<x;m++){let g=l.getX(m);Rs.fromBufferAttribute(u,g),rl(Rs,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,x=p;m<x;m++)Rs.fromBufferAttribute(u,m),rl(Rs,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rl(i,t,e,n,s,r,a){let o=ao.distanceSqToPoint(i);if(o<e){let c=new T;ao.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Nn=class extends Ve{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new _t:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],a=[],o=new T,c=new Jt;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ye(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ye(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends Xe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oo=class extends rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ps=new T,$r=new Bo,ta=new Bo,ea=new Bo,Ki=class extends Xe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ps.subVectors(s[0],s[1]).add(s[0]),l=Ps);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),$r.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),ta.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),ea.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&($r.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ta.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ea.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set($r.calc(c),ta.calc(c),ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function al(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Wg(i,t){let e=1-i;return e*e*t}function Xg(i,t){return 2*(1-i)*i*t}function Yg(i,t){return i*i*t}function Wi(i,t,e,n){return Wg(i,t)+Xg(i,e)+Yg(i,n)}function jg(i,t){let e=1-i;return e*e*e*t}function Zg(i,t){let e=1-i;return 3*e*e*i*t}function Kg(i,t){return 3*(1-i)*i*i*t}function Jg(i,t){return i*i*i*t}function Xi(i,t,e,n,s){return jg(i,t)+Zg(i,e)+Kg(i,n)+Jg(i,s)}var co=class extends Xe{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xi(t,s.x,r.x,a.x,o.x),Xi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends Xe{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xi(t,s.x,r.x,a.x,o.x),Xi(t,s.y,r.y,a.y,o.y),Xi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends Xe{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Xe{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Xe{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Wi(t,s.x,r.x,a.x),Wi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends Xe{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Wi(t,s.x,r.x,a.x),Wi(t,s.y,r.y,a.y),Wi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Xe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(al(o,c.x,l.x,h.x,u.x),al(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Qg=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:Ki,CubicBezierCurve:co,CubicBezierCurve3:lo,EllipseCurve:rr,LineCurve:ho,LineCurve3:uo,QuadraticBezierCurve:fo,QuadraticBezierCurve3:ar,SplineCurve:po});var or=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,x=[],g=n/2,f=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function b(){let y=new T,D=new T,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let _=[],C=L/r,w=C*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,H=z*c+o,Z=Math.sin(H),G=Math.cos(H);D.x=w*Z,D.y=-C*n+g,D.z=w*G,u.push(D.x,D.y,D.z),y.set(Z,E,G).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-C),_.push(m++)}x.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){let C=x[_][L],w=x[_+1][L],O=x[_+1][L+1],z=x[_][L+1];(t>0||_!==0)&&(h.push(C,w,z),S+=3),(e>0||_!==r-1)&&(h.push(w,O,z),S+=3)}l.addGroup(f,S,0),f+=S}function M(y){let D=m,S=new _t,E=new T,L=0,_=y===!0?t:e,C=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*C,0),d.push(0,C,0),p.push(.5,.5),m++;let w=m;for(let O=0;O<=s;O++){let H=O/s*c+o,Z=Math.cos(H),G=Math.sin(H);E.x=_*G,E.y=g*C,E.z=_*Z,u.push(E.x,E.y,E.z),d.push(0,C,0),S.x=Z*.5+.5,S.y=G*.5*C+.5,p.push(S.x,S.y),m++}for(let O=0;O<s;O++){let z=D+O,H=w+O;y===!0?h.push(H,H+1,z):h.push(H+1,H,z),L+=3}l.addGroup(f,L,y===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cr=class i extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new T,m=new _t;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let f=r+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let f=0;f<n;f++){let b=f+g,M=b,y=b+n+1,D=b+n+2,S=b+1;o.push(M,y,S),o.push(y,D,S)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ji=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let b=[],M=f/n,y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){let S=D/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+y,1-M),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let M=h[f][b+1],y=h[f][b],D=h[f+1][b],S=h[f+1][b+1];(f!==0||a>0)&&p.push(M,y,S),(f!==n-1||c<Math.PI)&&p.push(y,D,S)}this.setIndex(p),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wi=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let x=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let x=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,b=(s+1)*p+m;a.push(x,g,b),a.push(g,f,b)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qi=class i extends Se{constructor(t=new ar(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new _t,h=new T,u=[],d=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function x(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),b(),f()}function g(M){h=t.getPointAt(M/e,h);let y=a.normals[M],D=a.binormals[M];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,L=Math.sin(E),_=-Math.cos(E);c.x=_*y.x+L*D.x,c.y=_*y.y+L*D.y,c.z=_*y.z+L*D.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=e;M++)for(let y=1;y<=s;y++){let D=(s+1)*(M-1)+(y-1),S=(s+1)*M+(y-1),E=(s+1)*M+y,L=(s+1)*(M-1)+y;m.push(D,S,L),m.push(S,E,L)}}function b(){for(let M=0;M<=e;M++)for(let y=0;y<=s;y++)l.x=M/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Qg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var vn=class extends Dn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ls(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},go=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:r=t,o=2*e-n;break;case cc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oc:a=t,c=2*n-e;break;case cc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,f=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-p)*g+(1.5+p)*x+.5*m,y=p*g-p*x;for(let D=0;D!==o;++D)r[D]=f*a[h+D]+b*a[l+D]+M*a[c+D]+y*a[u+D];return r}},mo=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ao=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ye=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ls(e,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ls(t.times,Array),values:Ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zs:e=this.InterpolantFactoryMethodDiscrete;break;case qa:e=this.InterpolantFactoryMethodLinear;break;case Mr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Mr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&$g(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=qa;var $n=class extends Ye{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=zs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends Ye{};xo.prototype.ValueTypeName="color";var vo=class extends Ye{};vo.prototype.ValueTypeName="number";var Co=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Qe.slerpFlat(r,0,a,l-o,a,l,c);return r}},lr=class extends Ye{InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Ye{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=zs;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Ye{};yo.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},tm=new _o,Io=class{constructor(t){this.manager=t!==void 0?t:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ur=class extends hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},na=new Jt,ol=new T,cl=new T,Mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bo=class extends Mo{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new bo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ll();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ll(){return performance.now()}var zo="\\[\\]\\.:\\/",em=new RegExp("["+zo+"]","g"),Oo="[^"+zo+"]",nm="[^"+zo.replace("\\.","")+"]",im=/((?:WC+[\/:])*)/.source.replace("WC",Oo),sm=/(WCOD+)?/.source.replace("WCOD",nm),rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),om=new RegExp("^"+im+sm+rm+am+"$"),cm=["material","materials","bones","map"],So=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(em,"")}static parseTrackName(t){let e=om.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=So;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ym=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);var nn=[{id:1,ar:"\u0627\u0644\u0639\u0648\u0651\u0627\u0645\u0627\u062A",en:"Floatstacles",swimmers:12,qualify:8,len:250,bpm:100,bumpers:10,noodles:1,walls:1,waves:1,slides:1},{id:2,ar:"\u0627\u0644\u0645\u0643\u0631\u0648\u0646\u0629 \u0627\u0644\u062F\u0648\u0651\u0627\u0631\u0629",en:"Noodle Spin",swimmers:10,qualify:6,len:280,bpm:104,bumpers:10,noodles:3,walls:2,waves:1,slides:1},{id:3,ar:"\u062C\u062F\u0627\u0631 \u0627\u0644\u0645\u0648\u062C",en:"Wave Wall",swimmers:8,qualify:4,len:300,bpm:108,bumpers:12,noodles:3,walls:3,waves:2,slides:2},{id:4,ar:"\u0627\u0644\u0642\u0646\u0637\u0631\u0629 \u0627\u0644\u0639\u0627\u0626\u0645\u0629",en:"Floating Bridge",swimmers:8,qualify:4,len:310,bpm:110,bumpers:12,noodles:3,walls:3,waves:2,slides:2},{id:5,ar:"\u062F\u0648\u0627\u0645\u0629 \u0627\u0644\u062D\u0644\u0632\u0648\u0646",en:"Spiral Whirl",swimmers:7,qualify:3,len:320,bpm:112,bumpers:14,noodles:4,walls:3,waves:2,slides:2},{id:6,ar:"\u0627\u0644\u0646\u0647\u0627\u0626\u064A",en:"The Final",swimmers:6,qualify:1,len:340,bpm:114,bumpers:14,noodles:4,walls:3,waves:3,slides:2}],lm=[{kind:"otter",ar:"\u0623\u0646\u062A",en:"You",cap:2799816},{kind:"penguin",ar:"\u0628\u0637\u0631\u064A\u0642",en:"Pingo",cap:15217706},{kind:"beaver",ar:"\u0642\u0646\u062F\u0633",en:"Benny",cap:16765498},{kind:"seal",ar:"\u0641\u0642\u0645\u0629",en:"Sealy",cap:16743096},{kind:"duck",ar:"\u0628\u0637\u0651\u0648\u0637\u0629",en:"Ducky",cap:9059048},{kind:"otter",ar:"\u0642\u0636\u0627\u0639\u0629",en:"Ollie",cap:3852394},{kind:"penguin",ar:"\u0628\u0646\u062C\u0648",en:"Peppy",cap:16747050},{kind:"beaver",ar:"\u0628\u0648\u0628\u0648",en:"Bobo",cap:2779880},{kind:"seal",ar:"\u0633\u064A\u0644\u0648",en:"Silo",cap:16777215},{kind:"duck",ar:"\u062F\u0648\u062F\u0648",en:"Dodo",cap:15217706},{kind:"otter",ar:"\u062A\u064A\u062A\u0648",en:"Tito",cap:16765498},{kind:"penguin",ar:"\u0628\u064A\u0628\u0648",en:"Bibo",cap:2799816}];function hm(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var es=(i,t,e)=>i<t?t:i>e?e:i;function um(i,t){let e=i.len,n={bumpers:[],noodles:[],walls:[],waves:[],slides:[]},s=[],r=(o,c=9)=>s.every(l=>Math.abs(l-o)>c),a=(o,c,l=18,h=e-15)=>{for(let u=0,d=0;u<c&&d<300;d++){let p=l+t()*(h-l);r(p)&&(s.push(p),o(p),u++)}};a(o=>n.walls.push({s:o,x0:t()<.5?-7:-3,x1:t()<.5?7:3}),i.walls,30),a(o=>n.noodles.push({s:o,x:(t()*2-1)*3,len:4.2,w:(t()<.5?1:-1)*(1.2+t()*.5),a:t()*6}),i.noodles,25),a(o=>n.waves.push({s:o,len:14}),i.waves,20),a(o=>n.slides.push({s:o,side:t()<.5?-1:1,len:26}),i.slides,25,e-45);for(let o=0;o<i.bumpers;o++){let c=14+t()*(e-30);n.bumpers.push({s:c,x:(t()*2-1)*(7-1.5),r:.9})}return n}var Ar=class{constructor(t={}){var n,s;this.round=nn[(n=t.round)!=null?n:0],this.easy=!!t.easy,this.rand=hm((s=t.seed)!=null?s:6),this.course=um(this.round,this.rand),this.beat=60/this.round.bpm,this.time=0,this.state="start",this.countT=3,this.events=[],this.finished=0;let e=this.round.swimmers;this.swimmers=lm.slice(0,e).map((r,a)=>({id:a,...r,x:(a-(e-1)/2)*((7*2-2)/e),s:0,y:0,v:0,air:0,dive:!1,breath:1,stun:0,slide:null,done:!1,place:0,isPlayer:a===0,skill:.45+this.rand()*.38+this.round.id*.015,next:0,lane:0,lastStroke:-9})),this.player=this.swimmers[0],this.perfects=0,this.bonks=0}beatOffset(t=this.time){let e=t/this.beat;return(e-Math.round(e))*this.beat}stroke(t=this.player){if(this.state!=="race"||t.done||t.stun>0||t.slide||t.air>0||this.time-t.lastStroke<this.beat*.45)return null;t.lastStroke=this.time;let e=Math.abs(this.beatOffset()),n=e<=.1?"perfect":e<=.2?"good":"off";if(t.v=Math.min(10,t.v+(n==="perfect"?2.3:n==="good"?1.5:.45)*(t.dive?.7:1)),t.isPlayer&&n==="perfect"&&this.perfects++,n!=="off"&&!t.dive)for(let s of this.course.walls){let r=s.s-t.s;if(r>0&&r<4.5&&t.x>s.x0-.5&&t.x<s.x1+.5){t.air=.9,t.v=Math.max(t.v,5.5),this.events.push({type:"leap",id:t.id});break}}return this.events.push({type:"stroke",id:t.id,grade:n}),n}setDive(t,e=this.player){let n=!!t&&e.breath>.05&&e.air<=0&&!e.slide&&this.state==="race";t&&e.dive&&!n&&e.breath<=.05&&e.isPlayer&&this.events.push({type:"breath"}),e.dive=n}step(t,e={}){var s;if(this.events=[],this.state==="done")return this.events;if(this.state==="start"){let r=Math.ceil(this.countT);if(this.countT-=t,Math.ceil(this.countT)!==r&&this.countT>0&&this.events.push({type:"count",n:Math.ceil(this.countT)}),this.countT<=0){this.state="race",this.events.push({type:"go"});for(let a of this.swimmers)a.v=2.3}return this.events}let n=Math.floor(this.time/this.beat+.5);this.time+=t,Math.floor(this.time/this.beat+.5)!==n&&this.events.push({type:"beat"});for(let r of this.course.noodles)r.a+=r.w*t;for(let r of this.swimmers){if(r.done){r.s+=r.v*t,r.v=Math.max(1,r.v-t*2);continue}r.isPlayer?(this.setDive(!!e.dive,r),this._swim(r,es((s=e.x)!=null?s:0,-1,1),t)):this._swim(r,this._ai(r,t),t)}return this._contacts(),this._places(),this.events}_swim(t,e,n){if(t.stun=Math.max(0,t.stun-n),t.dive?(t.breath=Math.max(0,t.breath-n*.28),t.breath<=0&&(t.dive=!1,t.isPlayer&&this.events.push({type:"breath"}))):t.breath=Math.min(1,t.breath+n*.32),t.slide){let a=t.slide;a.t+=n;let o=Math.min(1,a.t/1.3);t.s=a.s0+(a.s1-a.s0)*o,t.x=a.side*(7+1.5-Math.sin(o*Math.PI)*.5),t.y=1.5*(1-o),o>=1&&(t.slide=null,t.x=a.side*6,t.y=0,t.v=7,this.events.push({type:"splash",id:t.id,x:t.x,s:t.s}));return}t.air=Math.max(0,t.air-n),t.y=t.air>0?Math.sin((1-t.air/.9)*Math.PI)*1.4:t.dive?-.8:0;let s=!t.dive&&this.course.waves.some(a=>t.s>a.s&&t.s<a.s+a.len),r=2.3*(this.easy&&t.isPlayer?1.25:1)+(s?3:0);t.v+=(r-t.v)*Math.min(1,n*(t.v>r?.5:1.2)),t.stun>0&&(t.v=Math.min(t.v,1.2)),t.s+=t.v*n,t.x=es(t.x+e*3.4*n*(t.stun>0?.3:1),-7+.5,7-.5),this._obstacles(t),t.s>=this.round.len&&this._finish(t)}_bonk(t,e,n){t.stun>0||(t.stun=.7,t.v=.6,t.x=es(t.x+n*.8,-7+.5,7-.5),t.isPlayer&&this.bonks++,this.events.push({type:"bonk",id:t.id,why:e,x:t.x,s:t.s}))}_obstacles(t){let e=this.course;for(let n of e.bumpers)Math.hypot(t.x-n.x,t.s-n.s)<n.r+.45&&t.air<=0&&this._bonk(t,"bumper",Math.sign(t.x-n.x)||1);for(let n of e.noodles){if(Math.abs(t.s-n.s)>n.len+1||t.dive||t.air>0)continue;let s=n.x+Math.cos(n.a)*n.len,r=n.s+Math.sin(n.a)*n.len;dm(n.x,n.s,s,r,t.x,t.s)<.55&&this._bonk(t,"noodle",Math.sign(t.x-n.x)||1)}for(let n of e.walls)t.air>0||t.s<n.s-.6||t.s>n.s+.2||t.x<n.x0-.3||t.x>n.x1+.3||(t.s=n.s-.7,this._bonk(t,"wall",0));for(let n of e.slides)Math.abs(t.s-n.s)<2.2&&t.x*n.side>7-1.3&&!t.slide&&t.air<=0&&!t.dive&&(t.slide={s0:t.s,s1:t.s+n.len,side:n.side,t:0},this.events.push({type:"slide",id:t.id}))}_contacts(){let t=this.swimmers;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let s=t[e],r=t[n];if(s.slide||r.slide||Math.abs(s.y-r.y)>.6)continue;let a=r.x-s.x,o=r.s-s.s,c=Math.hypot(a,o);if(c>.85||c<1e-4)continue;let l=(.85-c)/2;s.x-=a/c*l,s.s-=o/c*l,r.x+=a/c*l,r.s+=o/c*l}}_finish(t){t.done=!0,this.finished++,t.place=this.finished,t.finishT=this.time;let e=t.place<=this.round.qualify;this.events.push({type:"finish",id:t.id,place:t.place,qualified:e}),t.isPlayer?(this.state="done",this.events.push({type:"over",place:t.place,qualified:e})):this.finished>=this.round.qualify&&!this.player.done&&(this.state="done",this.player.place=this.swimmers.filter(n=>!n.done).sort((n,s)=>s.s-n.s).indexOf(this.player)+this.finished+1,this.events.push({type:"over",place:this.player.place,qualified:!1}))}_places(){let t=[...this.swimmers].sort((e,n)=>e.done&&n.done?e.place-n.place:e.done?-1:n.done?1:n.s-e.s);t.forEach((e,n)=>{e.done?e.rank=e.place:e.rank=n+1}),this.order=t}get qualifiedCount(){return this.swimmers.filter(t=>t.done&&t.place<=this.round.qualify).length}_ai(t,e){if(t.next-=e,t.next<=0){let c=(this.rand()-.5)*2*(1-t.skill)*.35,l=this.beatOffset(this.time+c);(Math.abs(l)<.03||this.rand()<.05)&&(this.stroke(t),t.next=this.beat*(.9+this.rand()*.6*(1.2-t.skill)))}let n=this.course,s=n.noodles.find(c=>c.s-t.s>-1&&c.s-t.s<c.len+2.5&&Math.abs(c.x-t.x)<c.len+1);this.setDive(s&&this.rand()<.04+t.skill*.9?!0:t.dive&&!!s,t);let r=t.lane,a=n.slides.find(c=>c.s-t.s>2&&c.s-t.s<18);a&&t.skill>.7&&(r=a.side*7);for(let c of n.bumpers){let l=c.s-t.s;l>0&&l<7&&Math.abs(c.x-t.x)<1.6&&(r=c.x+(t.x>c.x?2.4:-2.4))}let o=n.walls.find(c=>c.s-t.s>0&&c.s-t.s<10);return o&&t.skill<.75&&(o.x0>-6?r=-6:o.x1<6&&(r=6)),this.rand()<e*.3&&(t.lane=(this.rand()*2-1)*5),es((r-t.x)*.8,-1,1)}get result(){let t=this.player,e=t.done&&t.place<=this.round.qualify,n=t.done&&t.place===1;return{place:t.place||t.rank,qualified:e,stars:e?n?3:t.place<=Math.max(3,Math.ceil(this.round.qualify/2))?2:1:0}}};function dm(i,t,e,n,s,r){let a=e-i,o=n-t,c=a*a+o*o,l=c?Math.max(0,Math.min(1,((s-i)*a+(r-t)*o)/c)):0;return Math.hypot(i+a*l-s,t+o*l-r)}function Pl(i){let t=i&&typeof i=="object"?i:{},e={};if(t.stars&&typeof t.stars=="object")for(let s of nn){let r=Math.floor(Number(t.stars[s.id]));r>=1&&r<=3&&(e[s.id]=r)}let n=Math.floor(Number(t.unlocked));return{unlocked:es(Math.max(Number.isFinite(n)?n:1,...Object.keys(e).map(s=>Number(s)+1)),1,nn.length),stars:e,muted:t.muted===!0}}var qo=new Map;function Ot(i,t=0,e=1){let n=`${i}|${t}|${e}`;return qo.has(n)||qo.set(n,new vn({color:i,emissive:t,emissiveIntensity:e})),qo.get(n)}function ns(i,t,e,n,s=0,r=0,a=0){let o=new Kt(new Qn(i,t,e),n);return o.position.set(s,r,a),o}function Cn(i,t,e,n,s=0,r=0,a=0,o=14){let c=new Kt(new or(i,t,e,o),n);return c.position.set(s,r,a),c}function ue(i,t,e=0,n=0,s=0,r=1,a=1,o=1,c=14){let l=new Kt(new Ji(i,c,Math.max(8,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}var Ll={otter:{fur:9067062,light:14200968},penguin:{fur:2237486,light:16316664},beaver:{fur:8014374,light:13146730},seal:{fur:9082536,light:14212840},duck:{fur:16769098,light:16774328}};function ko(i="otter",t=2799816,e=!0){var u;let n=(u=Ll[i])!=null?u:Ll.otter,s=new le,r=new le;s.add(r);let a=Ot(n.fur),o=Ot(n.light);r.add(ue(.42,a,0,0,.15,.85,.6,1.25,14)),r.add(ue(.3,o,0,-.12,.05,.75,.4,1.1,12)),r.add(Cn(.37,.37,.22,Ot(i==="otter"?2779880:t),0,0,.32,14).rotateX(Math.PI/2));let c=new le;if(c.position.set(0,.15,-.5),c.add(ue(.32,a,0,0,0,1.05,.95,1,16)),c.add(ue(.16,o,0,-.08,-.25,1.2,.8,.8,12)),c.add(ue(.06,Ot(i==="duck"?16747034:2759184),0,-.02,-.38,i==="duck"?2.4:1.2,i==="duck"?.6:.9,i==="duck"?1.6:.8,8)),c.add(ue(.335,Ot(t),0,.08,.04,1.06,.8,1.04,16)),e){for(let d of[-1,1]){let p=new Kt(new wi(.09,.03,6,14),Ot(1727192));p.position.set(d*.13,.05,-.27),c.add(p),c.add(ue(.08,Ot(9099519,3836632,.35),d*.13,.05,-.29,1,1,.5,10))}c.add(ns(.5,.04,.05,Ot(1727192),0,.05,-.24))}else for(let d of[-1,1])c.add(ue(.05,Ot(1708048),d*.12,.05,-.28,1,1.1,.6,8));if(c.add(new Kt(new wi(.07,.015,5,10,Math.PI),Ot(5909034)).translateY(-.15).translateZ(-.31).rotateZ(Math.PI)),i==="otter"||i==="beaver")for(let d of[-1,1])c.add(ue(.07,a,d*.24,.18,.02,1,1,.6,8));r.add(c);let l=[];for(let d of[-1,1]){let p=new le;p.position.set(d*.36,.05,-.15),p.add(ue(.09,a,0,0,-.25,i==="penguin"?.4:.8,.6,3.2,8)),r.add(p),l.push(p)}let h=[];for(let d of[-1,1]){let p=ue(.1,i==="duck"||i==="penguin"?Ot(16747034):a,d*.15,-.02,.7,.9,.4,1.8,8);r.add(p),h.push(p)}if(i==="otter"||i==="beaver"){let d=ue(.12,i==="beaver"?Ot(4861984):a,0,.02,.95,i==="beaver"?1.8:.8,.35,2.2,8);r.add(d)}return{root:s,body:r,head:c,arms:l,legs:h}}function Ul(){let i=new le,t=Ot(9067062);i.add(ue(.45,t,0,.75,0,.9,1.15,.85,14)),i.add(ue(.32,Ot(14200968),0,.68,.18,.85,1.1,.5,12)),i.add(Cn(.4,.4,.3,Ot(15217706),0,.45,0,14));for(let s of[-1,1])i.add(ue(.13,t,s*.2,.12,.06,1,.7,1.4,8));let e=ko("otter",15217706).head;e.position.set(0,1.45,0),e.rotation.y=Math.PI,i.add(e);let n=new le;return n.position.set(.42,1,0),n.add(ue(.1,t,0,.25,0,.8,2.6,.8,8)),i.add(n),i.userData.wave=n,i}function Dl(i){let t=new le;return t.add(Cn(.85,.95,2.2,Ot(i),0,.6,0,18)),t.add(ue(.85,Ot(i),0,1.7,0,1,.5,1,18)),t.add(new Kt(new wi(.95,.18,8,22),Ot(16777215)).rotateX(Math.PI/2).translateZ(.2)),t}function Nl(i){let t=new le;t.add(Cn(.7,.8,.5,Ot(16765498),0,.15,0,16)),t.add(ue(.35,Ot(15217706),0,.5,0,1,1,1,12));let e=new le,n=[16730762,2799816,9099322,16752672];for(let s=0;s<6;s++){let r=Cn(.22,.22,i/6,Ot(n[s%4]),i/6*(s+.5),.35,0,12);r.rotation.z=Math.PI/2,e.add(r)}return t.add(e),t.userData.arm=e,t}function Fl(i,t){let e=new le,n=t-i,s=[15217706,2779880,16765498];for(let r=0;r<3;r++){let a=Cn(.3,.3,n,Ot(s[r]),(i+t)/2,.25+r*.32,0,14);a.rotation.z=Math.PI/2,a.position.z=(r-1)*.08,e.add(a)}for(let r of[i,t])e.add(ue(.42,Ot(16777215),r,.55,0,1,1.4,1,12));return e}function Bl(i){let t=i.length,e=new ir(new Ji(.28,8,6),new vn({color:16777215}),t),n=[15217706,16751146,16765498,16777215,2799816,2779880],s=new Jt;return i.forEach(([r,a],o)=>{s.compose(new T(r,.15,a),new Qe,new T(1,.8,1.3)),e.setMatrixAt(o,s),e.setColorAt(o,new Ut(n[Math.floor(o/2)%n.length]))}),e}function zl(i,t){let e=new le,n=ns(2.4,6,2.4,Ot(2799816),0,3,0);e.add(n),e.add(ns(2.8,.3,2.8,Ot(16765498),0,6.1,0));let s=[];for(let a=0;a<=20;a++){let o=a/20;s.push(new T(-t*Math.sin(o*Math.PI)*2.2,6*(1-o)+.2,-o*i))}let r=new Ki(s);return e.add(new Kt(new Qi(r,40,.75,10,!1),new vn({color:16742954,side:Be}))),e.add(new Kt(new Qi(r,40,.5,8,!1),new vn({color:9099519,transparent:!0,opacity:.6}))),e}function Ol(i){let t=new le,e=[15217706,16765498,2799816,9099322];for(let a=0;a<18;a++){let o=a/17*Math.PI;t.add(ue(.7,Ot(e[a%4]),Math.cos(o)*(i/2),Math.sin(o)*5.5,0,1,1,1,10))}let n=document.createElement("canvas");n.width=256,n.height=32;let s=n.getContext("2d");for(let a=0;a<16;a++)for(let o=0;o<2;o++)s.fillStyle=(a+o)%2?"#111":"#fff",s.fillRect(a*16,o*16,16,16);let r=new Kt(new en(i*.7,1.1),new xn({map:new Nn(n),side:Be}));return r.position.y=4.4,t.add(r),t}function ql(i){let t=new le;return t.add(ns(1,.6,1.4,Ot(i),0,.2,0)),t.add(ns(1.04,.1,1.44,Ot(16777215),0,.52,0)),t}function kl(i){let t=new le;t.add(Cn(i,i*1.15,1.2,Ot(15784096),0,.1,0,20)),t.add(Cn(i*.7,i*.8,1.4,Ot(7128150),0,.3,0,18));for(let e=0;e<3;e++){let n=e*2.1,s=new le;s.add(Cn(.18,.25,4,Ot(10119738),0,2,0,7));for(let r=0;r<6;r++){let a=ue(1,Ot(r%2?3844170:5423190),Math.cos(r)*1.1,4,Math.sin(r)*1.1,.3,.08,1.5,8);a.rotation.y=-r+Math.PI/2,s.add(a)}s.position.set(Math.cos(n)*i*.4,.8,Math.sin(n)*i*.4),t.add(s)}return t}function Hl(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#38c8e8",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,0.55)",t.lineWidth=3;for(let n=0;n<30;n++){let s=n*97%256,r=n*61%256;t.beginPath();for(let a=0;a<=6;a++){let o=a/6*Math.PI*2,c=18+n*a%7*3;a===0?t.moveTo(s+Math.cos(o)*c,r+Math.sin(o)*c):t.quadraticCurveTo(s+Math.cos(o-.5)*c*1.2,r+Math.sin(o-.5)*c*1.2,s+Math.cos(o)*c,r+Math.sin(o)*c)}t.stroke()}let e=new Nn(i);return e.wrapS=e.wrapT=Kn,e.colorSpace=Ce,e}function Gl(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function Wl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Xl={stroke:"data:audio/mpeg;base64,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",splash:"data:audio/mpeg;base64,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",leap:"data:audio/mpeg;base64,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",go:"data:audio/mpeg;base64,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",finish:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,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ABxHCs4GHpj3n4TTF6o2cFSM93tkSrBGUA3Vwey0opKSRyVBJokXLiBo2lOHDzBlZwMclNl4nHIrfRrD4W5BiYnud36UHXqOGT6u3G8Pclf/+zjE64BL+YUywzxsCZ8xpejzDTgPnSpP0NXkCUqEE0m0GPtOAG1CltGUtaN9NaGaSfjam0d9fvzimjFoRB5X/smPeIi8WVJnCZlEoLwRFmIrAjuy/GtMrMUo5Xb+KJH2KUopE0e3FGZGpIbJmFBlVyeME75kI92YzYyyK1ebCodJgabUhLMhoAiDWyD1GL1RQtOUppVorLrKPAwgu5Lm0KKRU2ohTjkqnaoxHEMFn2mxB0N+cYzin0Tqjqv5ETkzx9S7VVuVSDHl55OZc8oSqb/QvCUpXLn/+zjE6QBL6X8vJhhlyXAw5VizDDnWXHd19pfez8rgV3eHDTrgs04jpXRfBc0g3tAQZkChNhGYZKg++aKGwI2+x9Q4F9OKukBUecmSZNeV1pJlcDXGjpwpGXrFVD5Tdxzma3ZOtjXYCW0aXtZ8L0WNtGFxgPPOlBrhUi0LQsDgTOy3DEaARInruWh+GiK1Hilx3aREaOueAkwGsoaNzU3Z41Gs8cLchezLLUFtWJJcYBALz5ik8dvktBAQJIE1wIGIJkkdyEWXrOL305uIh6E50OkJ+tP0kNn/+zjE7IBMXXcmxRhhyaKwZFjzDTkUN2l8Cyrb3JKiQXS2kNLn8CxjXnF/0ghWQ3zEJaTy4jYcvf1m2acXrEIC0yCcQx48EUTQc+iEk7MTEKvfCBPLvwo/UN5kk4zHz3qvy9J0Y97EOge0ZnOIRGwyoTJilQEigaTCWJaaiblapZBoKpe1CmAoBOAoBO1WfNTUgziYePVDzp08JREIhKIhKzaWThUJhJ+oeMHucwkRLFSyxoz6l/9p08SERFVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6AOLfQ8aBhhqiZqaokT0mLhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6AOUJX8UDDDRyUCPY0STDVBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var fm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",me=null,xr=!1;function Yl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Ho(){Yl(),xr=!0;try{if(me||(me=document.createElement("audio"),me.src=fm,me.loop=!0,me.preload="auto",me.setAttribute("playsinline",""),me.setAttribute("webkit-playsinline",""),me.setAttribute("x-webkit-airplay","deny"),me.volume=.01,me.addEventListener("pause",()=>{xr&&!document.hidden&&setTimeout(()=>xr&&me.paused&&me.play().catch(()=>{}),300)})),me.paused){let i=me.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function jl(){xr=!1;try{me&&!me.paused&&me.pause()}catch{}}function Zl(i,t){Yl();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var is=i=>440*Math.pow(2,(i-69)/12),pm=[[48,[60,64,67,72]],[53,[60,65,69,72]],[55,[62,67,71,74]],[48,[60,64,67,72]]],gm=[[0,0,79],[0,2,81],[0,3,79],[0,5,76],[1,0,77],[1,2,81],[1,4,84],[2,0,83],[2,3,79],[2,5,74],[3,0,76],[3,2,79],[3,4,84]],Pi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(Ho(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Zl(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){jl(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Ho(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=this.tempo||100,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.015),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}_pan(t,e,n=.08,s=this.music){this._tone("sine",is(t),e,.7,n,s,.004),this._tone("sine",is(t)*2,e,.35,n*.4,s,.004),this._tone("sine",is(t)*3.01,e,.15,n*.2,s,.003)}_strum(t,e,n=.05){t.forEach((s,r)=>this._tone("triangle",is(s),e+r*.012,.25,n,this.music,.003))}setTempo(t){this.tempo=t,this.ctx&&(this.step=0,this.nextTime=this.ctx.currentTime+.05)}setUnder(t){if(this.ctx){if(!this.under){let e=this.ctx;this.under=e.createBiquadFilter(),this.under.type="lowpass",this.under.frequency.value=2e4,this.music.disconnect(),this.music.connect(this.under).connect(this.master)}this.under.frequency.setTargetAtTime(t?420:2e4,this.ctx.currentTime,.08)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=this.mode==="race",s=60/this.tempo/2;for(;this.nextTime<e;){let r=this.nextTime,a=this.step%32,o=Math.floor(a/8),c=a%8,[l,h]=pm[o];(c===0||c===4)&&this._slide("sine",130,50,r,.16,n?.26:.2,this.music),(c===2||c===6)&&(this._noise(r,.08,.06,"bandpass",1500,1,this.music),this._noise(r+.01,.05,.04,"highpass",3e3,1,this.music)),this._noise(r,.04,.022,"highpass",7e3,.8,this.music),(c===0||c===3||c===6)&&this._tone("sine",is(l-12),r,s*1.6,.14,this.music,.01),c%2===1&&this._strum(h,r,.035);for(let[u,d,p]of gm)u===o&&d===c&&this._pan(p,r,n?.06:.08);n&&c%2===0&&(this._tone("sine",2900,r,.07,.035,this.sfx,.004),this._tone("sine",3400,r+.035,.05,.025,this.sfx,.004)),this.step++,this.nextTime+=s}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"count":this._tone("square",660,n,.12,.05);break;case"go":this._tone("sine",2600,n,.5,.08),this._tone("sine",3100,n,.5,.05),this._noise(n+.2,.5,.12,"bandpass",1400,.7,s,500);break;case"stroke":{let r=e;this._noise(n,.16,r==="perfect"?.14:.1,"bandpass",r==="off"?700:1600,.9,s,r==="off"?400:3200),r==="perfect"?(this._pan(91,n+.02,.07,s),this._pan(96,n+.08,.05,s)):r==="good"?this._pan(86,n+.02,.05,s):this._slide("sine",300,180,n,.14,.06);break}case"dive":this._noise(n,.3,.1,"lowpass",900,.8,s,250);break;case"surface":this._noise(n,.2,.08,"bandpass",1200,1,s,2600);break;case"breath":this._slide("sine",900,500,n,.2,.06),this._slide("sine",900,500,n+.25,.2,.06);break;case"bonk":this._slide("sine",180,420,n,.25,.18),this._noise(n,.1,.07,"lowpass",900);break;case"leap":this._slide("sine",300,900,n,.3,.1),this._noise(n+.75,.4,.14,"bandpass",1300,.7,s,500);break;case"slide":this._slide("sine",1300,500,n,1.1,.07),this._noise(n,1.2,.08,"bandpass",1500,.8,s,700);break;case"splash":this._noise(n,.5,.15,"bandpass",1300,.7,s,400);break;case"wave":this._noise(n,1,.08,"lowpass",600,.8,s,1500);break;case"finish":this._noise(n,2,.07,"bandpass",1200,.5,s),[79,84,88].forEach((r,a)=>this._pan(r,n+a*.1,.09,s));break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[88,.55],[91,.7],[96,.9]].forEach(([r,a])=>this._pan(r,n+a,.11,s));break;case"lose":[79,76,72,67].forEach((r,a)=>this._pan(r,n+a*.18,.08,s));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.04);break;default:}}};Gl(Pi,Xl);Wl(Pi);var Go={title:["\u0633\u0628\u0627\u0642 \u0627\u0644\u0633\u0628\u0627\u062D\u0629 \u0627\u0644\u0639\u062C\u064A\u0628","Splash Race"],round:["\u0627\u0644\u062C\u0648\u0644\u0629","Round"],locked:["\u0627\u062A\u0623\u0647\u0644 \u0645\u0646 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Qualify in the round before"],swim:["\u064A\u0644\u0627 \u0646\u0639\u0648\u0645!","Swim!"],exit:["\u062E\u0631\u0648\u062C","Exit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],stroke:["\u062C\u062F\u0651\u0641","STROKE"],dive:["\u063A\u0637\u0633","DIVE"],hint:["\u0627\u0636\u063A\u0637 \xAB\u062C\u062F\u0651\u0641\xBB \u0645\u0639 \u0627\u0644\u0635\u0641\u0651\u0627\u0631\u0629","Tap STROKE on the whistle"],hintDive:["\u0627\u0636\u063A\u0637 \xAB\u063A\u0637\u0633\xBB \u0639\u0634\u0627\u0646 \u062A\u0639\u062F\u0651\u064A \u062A\u062D\u062A \u0627\u0644\u0645\u0643\u0631\u0648\u0646\u0629","Hold DIVE to go under the noodle"],hintLeap:["\u062C\u062F\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0625\u064A\u0642\u0627\u0639 \u0642\u062F\u0651\u0627\u0645 \u0627\u0644\u062D\u0627\u062C\u0632 \u0639\u0634\u0627\u0646 \u062A\u0646\u0637","Stroke on the beat before the wall to leap"],perfect:["\u0645\u0645\u062A\u0627\u0632!","PERFECT!"],good:["\u062D\u0644\u0648","GOOD"],off:["\u0645\u0634 \u0639\u0644\u0649 \u0627\u0644\u0625\u064A\u0642\u0627\u0639","OFF BEAT"],breath:["\u062E\u062F \u0646\u0641\u064E\u0633!","Need air!"],slide:["\u0632\u062D\u0644\u064A\u0642\u0629! \u{1F6DD}","Slide! \u{1F6DD}"],wave:["\u0645\u0648\u062C\u0629! \u{1F30A}","Wave! \u{1F30A}"],qualified:["\u0627\u062A\u0623\u0647\u0644\u062A!","Qualified!"],final:["\u0627\u0644\u0646\u0647\u0627\u0626\u064A","Final"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u{1F3C6}","Well done! You won the final \u{1F3C6}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0627\u0644\u0623\u0648\u0644\u0649 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u{1F3C6}","Well done! You won the final \u{1F3C6}"],qual_m:["\u0628\u0631\u0627\u0641\u0648! \u0627\u062A\u0623\u0647\u0644\u062A \u0644\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u{1F389}","Great! You qualified \u{1F389}"],qual_f:["\u0628\u0631\u0627\u0641\u0648! \u0627\u062A\u0623\u0647\u0644\u062A\u064A \u0644\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u{1F389}","Great! You qualified \u{1F389}"],out_m:["\u0642\u0631\u0651\u0628\u062A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],out_f:["\u0642\u0631\u0651\u0628\u062A\u064A! \u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],place:["\u0627\u0644\u0645\u0631\u0643\u0632","Place"],next:["\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next round"],again:["\u062A\u0627\u0646\u064A","Again"],loading:["\u0628\u0646\u0645\u0644\u0627 \u0627\u0644\u062D\u0645\u0651\u0627\u0645...","Filling the pool..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},ss="ar",Kl=!1,Jl=i=>{ss=i==="en"?"en":"ar"},Ql=i=>{Kl=!!i},rs=()=>ss,qt=i=>{let t=`${i}_${Kl?"f":"m"}`,e=Go[t]?t:i;return Go[e]?Go[e][ss==="en"?1:0]:i},ze=i=>ss==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),Wo=i=>ss==="en"?i.en:i.ar;var $l=`
.sp-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.sp-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sp-layer{position:absolute;inset:0;pointer-events:none}
.sp-layer button,.sp-layer .sp-card{pointer-events:auto}
.sp-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sp-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.sp-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.sp-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.sp-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.sp-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sp-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.sp-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.sp-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.sp-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.sp-label.full{background:#ffd75e;animation:spPulse2 .5s infinite alternate}
@keyframes spPulse2{to{transform:translate(-50%,-100%) scale(1.12)}}
.sp-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.sp-toast.show{opacity:1}
.sp-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.sp-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.sp-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:spUp 1s ease-out forwards}
@keyframes spUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.sp-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.sp-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.sp-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.sp-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.sp-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.sp-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.sp-btn2:active{transform:translateY(calc(var(--u)*.5))}
.sp-btn2:focus-visible,.sp-node:focus-visible,.sp-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.sp-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.sp-land .sp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.sp-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.sp-card .ic{font-size:calc(var(--u)*8)}
.sp-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.sp-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.sp-card .pips{display:flex;gap:calc(var(--u)*.6)}
.sp-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.sp-card .pip.on{background:#f2a51e}
.sp-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.sp-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.sp-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.sp-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.sp-node.next{animation:spPulse22 .8s infinite alternate}
@keyframes spPulse22{to{transform:scale(1.08)}}
.sp-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.sp-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.sp-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.sp-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.sp-stars .off{filter:grayscale(1);opacity:.4}
.sp-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.sp-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.sp-made b{display:block;font-size:calc(var(--u)*5.4)}
.sp-made span{font-size:calc(var(--u)*2.8)}
.sp-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function vt(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var th=`
.sp-root{background:#38c8e8;color:#0a3a5a}
.sp-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.sp-padlbl .ic{font-size:calc(var(--u)*6)}
.sp-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.sp-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.sp-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.sp-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.sp-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.sp-chefs{display:flex;gap:calc(var(--u)*3)}
.sp-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.sp-chef .f{font-size:calc(var(--u)*9)}
.sp-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.sp-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.sp-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`,eh=`
.sp-root .sp-panel{background:rgba(236,252,255,.96);border-color:#1aa8c8;box-shadow:0 calc(var(--u)*1.2) 0 #0a6a8a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);color:#0a3a5a}
.sp-root .sp-title{color:#0a7aa8}
.sp-root .sp-logo{color:#ffd23a;-webkit-text-stroke-color:#0a5a8a;text-shadow:0 calc(var(--u)*.8) 0 #0a5a8a}
.sp-root .sp-btn2{background:linear-gradient(180deg,#ffd84a,#f0a81a);color:#5a3a00;box-shadow:0 calc(var(--u)*.8) 0 #a86a00}
.sp-root .sp-btn2.wood{background:linear-gradient(180deg,#5ad0e8,#1aa0c8);color:#fff;box-shadow:0 calc(var(--u)*.8) 0 #0a6a8a}
.sp-map{position:relative;width:calc(var(--u)*64);height:calc(var(--u)*58);margin-top:calc(var(--u)*4)}
.sp-isle{position:absolute;width:calc(var(--u)*16);height:calc(var(--u)*16);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#8ae86a,#3aa84a);box-shadow:0 0 0 calc(var(--u)*1.6) #f0d8a0,0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.3);font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.4);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #1a6a2a;transform:translate(-50%,-50%)}
.sp-isle.lock{filter:grayscale(1);opacity:.6}
.sp-isle .stars{position:absolute;bottom:calc(var(--u)*-5.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*2.6);white-space:nowrap}
.sp-isle small{position:absolute;top:calc(var(--u)*-5);left:50%;transform:translateX(-50%);white-space:nowrap;font-size:calc(var(--u)*2.6);background:#fff;color:#0a5a8a;border-radius:999px;padding:0 calc(var(--u)*1.4);text-shadow:none}
.sp-dots{position:absolute;inset:0;pointer-events:none}
.sp-hudtop{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.6);pointer-events:none}
.sp-place{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:radial-gradient(circle at 40% 35%,#5ad8f0,#1a8ab8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);box-shadow:0 calc(var(--u)*.6) 0 #0a5a8a;flex:none}
.sp-roundbar{flex:1;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6)}
.sp-roundbar b{background:linear-gradient(180deg,#5ad8f0,#1a8ab8);color:#fff;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*1.6);padding:0 calc(var(--u)*3);font-size:calc(var(--u)*3.4)}
.sp-prog{position:relative;width:100%;height:calc(var(--u)*4.4);background:rgba(10,58,90,.55);border:calc(var(--u)*.4) solid #fff;border-radius:999px}
.sp-prog i{position:absolute;top:50%;transform:translate(-50%,-50%);font-style:normal;font-size:calc(var(--u)*3.4);transition:left .2s}
.sp-prog i.me{font-size:calc(var(--u)*4.6);z-index:2}
.sp-prog:after{content:'\u{1F3C1}';position:absolute;inset-inline-end:calc(var(--u)*-1);top:50%;transform:translateY(-60%);font-size:calc(var(--u)*4.6)}
.sp-qual{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:radial-gradient(circle at 40% 35%,#5ad8f0,#1a8ab8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*3.8);box-shadow:0 calc(var(--u)*.6) 0 #0a5a8a;flex:none}
.sp-breath{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*16);left:50%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*.8);pointer-events:none}
.sp-breath i{width:calc(var(--u)*3.6);height:calc(var(--u)*3.6);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fe8ff 45%,#3ab8e8);display:block;transition:opacity .2s}
.sp-breath i.off{opacity:.18}
.sp-cbtn{position:absolute;border-radius:50%;border:calc(var(--u)*.7) solid #fff;color:#fff;font-family:inherit;font-weight:900;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;pointer-events:auto;font-size:calc(var(--u)*3.6);box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.3);touch-action:none;user-select:none;-webkit-user-select:none}
.sp-stroke{width:calc(var(--u)*19);height:calc(var(--u)*19);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*21);background:radial-gradient(circle at 40% 35%,#ff7a5a,#d82a2a)}
.sp-dive{width:calc(var(--u)*17);height:calc(var(--u)*17);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3);background:radial-gradient(circle at 40% 35%,#5a9aff,#1a4ad8)}
.sp-cbtn:active,.sp-cbtn.on{transform:scale(.92)}
.sp-pulse{position:absolute;inset:calc(var(--u)*-2);border-radius:50%;border:calc(var(--u)*.7) solid #ffd23a;pointer-events:none;opacity:0}
.sp-pulse.go{animation:spPulse var(--b,.6s) linear}
@keyframes spPulse{from{transform:scale(1.6);opacity:.2}to{transform:scale(1);opacity:1}}
.sp-grade{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*6.4);-webkit-text-stroke:calc(var(--u)*.45) #0a3a5a;paint-order:stroke fill;pointer-events:none;opacity:0;white-space:nowrap}
.sp-grade.show{animation:spGrade .7s ease-out}
@keyframes spGrade{0%{opacity:1;transform:translate(-50%,-50%) scale(1.4)}100%{opacity:0;transform:translate(-50%,-90%) scale(1)}}
.sp-hint{position:absolute;left:50%;bottom:calc(max(calc(var(--u)*4),env(safe-area-inset-bottom)) + var(--u)*24);transform:translateX(-50%);background:rgba(255,255,255,.95);border:calc(var(--u)*.4) solid #1aa8c8;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.4);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s;color:#0a3a5a}
.sp-hint.show{opacity:1}
.sp-count{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*18);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #1a8ab8;paint-order:stroke fill;pointer-events:none}
`;var mm=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},Am=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},xm={otter:"\u{1F9A6}",penguin:"\u{1F427}",beaver:"\u{1F9AB}",seal:"\u{1F9AD}",duck:"\u{1F986}"},vm=[2799816,15217706,16765498],Cr;function Cm(){if(Cr)return Cr;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Cr=new Nn(i),Cr}var yr=class{constructor(t,e,n,s){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new Se,this.g.setAttribute("position",new be(this.pos,3)),this.pts=new sr(this.g,new Zi({color:s,size:n,map:Cm(),transparent:!0,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let r=0;r<e;r++)this.pos[r*3+1]=-50}emit(t,e,n,s,r,a,o=.6){let c=this.i++%this.n;this.pos.set([t,e,n],c*3),this.vel.set([s,r,a],c*3),this.life[c]=o}splash(t,e,n=14,s=3){for(let r=0;r<n;r++){let a=Math.random()*Math.PI*2;this.emit(t,.2,e,Math.cos(a)*s*Math.random(),2+Math.random()*s,Math.sin(a)*s*Math.random(),.7)}}update(t,e=9){for(let n=0;n<this.n;n++)if(!(this.life[n]<=0)){this.life[n]-=t,this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;this.life[n]<=0&&(this.pos[n*3+1]=-50)}this.g.attributes.position.needsUpdate=!0}},Xo=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Jl(e.lang),Ql(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Pl(e.save),this.base=e.base||"./",this.sound=new Pi,this.sound.muted=!!this.save.muted,this.quality={low:mm()},document.getElementById("sp-style")||document.head.append(vt("style",{id:"sp-style",text:$l+th+eh})),this.root=vt("div",{class:"sp-root",dir:rs()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!Am()){this.root.append(vt("div",{class:"sp-loading"},vt("div",{},qt("noWebgl")," ",vt("button",{class:"sp-btn2",onclick:()=>this.post({type:"exit"})},qt("exit")))));return}this.loading=vt("div",{class:"sp-loading"},qt("loading")),this.root.append(this.loading),this.renderer=new $s({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=To,this.root.prepend(this.renderer.domElement),this.layer=vt("div",{class:"sp-layer"}),this.root.append(this.layer),this.camera=new Me(58,1,.3,400),this.input={x:0,pointer:null,ox:0,oy:0,dive:!1,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new fr,this._fonts().then(()=>{this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?66:54,this.camera.updateProjectionMatrix())}_buildWorld(t){this.scene&&this.scene.traverse(h=>{h.geometry&&h.geometry.dispose()}),this.sw=new Ar({round:t,easy:this.age<=4,seed:(Date.now()&65535)+1});let e=this.sw.round.len,n=this.scene=new er;n.background=new Ut(9428223),n.fog=new tr(12577535,70,240),n.add(new ur(16055551,3840696,1.9));let s=new dr(16775392,1.4);s.position.set(-20,40,20),n.add(s),this.water=Hl(),this.water.repeat.set(48,150);let r=new Kt(new en(160,e+200),new vn({map:this.water,transparent:!0,opacity:.88}));r.rotation.x=-Math.PI/2,r.position.set(0,0,-e/2),n.add(r);let a=new Kt(new en(160,e+200),Ot(8052976));a.rotation.x=-Math.PI/2,a.position.set(0,-1.6,-e/2),n.add(a);for(let h of[-1,1]){let u=[];for(let d=12;d>-e-20;d-=.6)u.push([h*7,d]);n.add(Bl(u))}for(let h=0;h<14;h++){let u=h%2?1:-1,d=kl(5+h%3*2.5);d.position.set(u*(26+h%4*9),-.6,10-h*((e+40)/14)),n.add(d)}let o=[15217706,2779880,16765498,2799816];this.sw.swimmers.forEach((h,u)=>{let d=ql(o[u%4]);d.position.set(h.x,0,1.4),n.add(d)});let c=Ol(7*2+2);c.position.set(0,0,-e),n.add(c);let l=this.sw.course;l.bumpers.forEach((h,u)=>{let d=Dl(vm[u%3]);d.position.set(h.x,-.4,-h.s),n.add(d)}),this.noodles=l.noodles.map(h=>{let u=Nl(h.len);return u.position.set(h.x,0,-h.s),n.add(u),u}),l.walls.forEach(h=>{let u=Fl(h.x0,h.x1);u.position.z=-h.s,n.add(u)}),this.waves=l.waves.map(h=>{let u=new Kt(new en(7*2,h.len),new xn({map:this._waveTex(),transparent:!0,opacity:.8,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.set(0,.06,-(h.s+h.len/2)),n.add(u),u}),l.slides.forEach(h=>{let u=zl(h.len,h.side);u.position.set(h.side*(7+3.2),0,-h.s+1.5),n.add(u)}),this.models=this.sw.swimmers.map(h=>{let u=ko(h.kind,h.cap,h.kind!=="duck");return u.root.scale.setScalar(1.55),n.add(u.root),u}),this.ring=new Kt(new cr(.6,.75,28),new xn({color:16765498,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,n.add(this.ring),this.drops=new yr(n,260,.35,16777215),this.bubbles=new yr(n,80,.22,14743807),this.cam=null}_waveTex(){let t=document.createElement("canvas");t.width=64,t.height=128;let e=t.getContext("2d");for(let s=0;s<4;s++){e.fillStyle="rgba(255,255,255,0.75)",e.beginPath();for(let r=0;r<=64;r+=4)e.lineTo(r,s*32+8+Math.sin(r/6)*4);e.lineTo(64,s*32+16);for(let r=64;r>=0;r-=4)e.lineTo(r,s*32+16+Math.sin(r/6)*4);e.fill()}let n=new Nn(t);return n.wrapS=n.wrapT=Kn,n.repeat.set(3,3),n}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=vt("div",{class:"sp-joy"},vt("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="race"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let s=this.u*12,r=n.clientX-this.input.ox,a=n.clientY-this.input.oy;r=Math.max(-s,Math.min(s,r)),this.input.x=r/s,this.joy.firstChild.style.transform=`translate(${r}px,${Math.max(-s,Math.min(s,a))*.3}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this._joyHome())};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&!n.target.closest(".sp-cbtn")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="race"&&(s==="escape"||s==="p")&&this.pause(),this.mode==="race"&&(s===" "||s==="w"||s==="arrowup")&&!n.repeat&&(this._stroke(),n.preventDefault())):this.input.keys.delete(s),this.mode==="race"&&(s.startsWith("arrow")||s===" ")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="race"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=vt("button",{class:"sp-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},qt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_joyHome(){this.joy&&(this.joy.style.display=this.mode==="race"?"block":"none",this.joy.style.left=`${rs()==="en"?this.u*18:this.cw-this.u*18}px`,this.joy.style.top=`${this.ch-this.u*18}px`,this.joy.firstChild.style.transform="translate(0,0)")}_readInput(){let t=this.input.keys,e=this.input.x;(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1);let n=this.input.dive||t.has("arrowdown")||t.has("s")||t.has("shift");return{x:e,dive:n}}_stroke(){if(!this.sw||this.mode!=="race"||this.paused)return;let t=this.sw.stroke();t&&(this.hud.grade.textContent=qt(t),this.hud.grade.style.color=t==="perfect"?"#ffd23a":t==="good"?"#8ae86a":"#ffffff",this.hud.grade.classList.remove("show"),this.hud.grade.offsetWidth,this.hud.grade.classList.add("show"))}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=vt("button",{class:"sp-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=vt("div",{class:"sp-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_topLeft(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)"}showMenu(){this.mode="menu",this.paused=!1,this.joy&&(this.joy.style.display="none"),this.sound.setUnder(!1),this.sound.setTempo(96),this.sound.setMode("menu"),this._buildWorld(0),this.otter=Ul(),this.otter.position.set(0,.6,-6),this.otter.rotation.y=0,this.scene.add(this.otter),this._clear();let t=[[50,86],[24,70],[72,58],[28,44],[70,30],[46,12]],e=nn.map((r,a)=>{var l;let o=a+1>this.save.unlocked,c=(l=this.save.stars[r.id])!=null?l:0;return vt("button",{class:`sp-isle${o?" lock":""}`,style:`left:${t[a][0]}%;top:${t[a][1]}%`,"aria-label":`${qt("round")} ${r.id} ${Wo(r)}`,onclick:()=>{if(o){this.sound.play("no"),this.toast(qt("locked"));return}this.startRound(a)}},o?"\u{1F512}":a===nn.length-1?"\u{1F3C6}":ze(r.id),vt("small",{},Wo(r)),vt("span",{class:"stars"},o?"":"\u2B50".repeat(c)+"\u2606".repeat(3-c)))}),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("class","sp-dots"),n.setAttribute("viewBox","0 0 100 100"),n.setAttribute("preserveAspectRatio","none");let s=document.createElementNS("http://www.w3.org/2000/svg","polyline");s.setAttribute("points",t.map(r=>r.join(",")).join(" ")),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","1.2"),s.setAttribute("stroke-dasharray","2 2"),n.append(s),this.layer.append(vt("button",{class:"sp-round",style:this._topLeft(),"aria-label":qt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},rs()==="en"?"\u2190":"\u2192"),vt("div",{class:"sp-dim",style:"background:rgba(20,120,160,.25)"},vt("div",{class:"sp-panel"},vt("div",{class:"sp-logo",style:"font-size:calc(var(--u)*7)"},"\u{1F9A6} ",qt("title")),vt("div",{class:"sp-map"},n,e),vt("button",{class:"sp-btn2 sp-big",onclick:()=>this.startRound(this.save.unlocked-1)},"\u25B6 ",qt("swim")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}startRound(t){this.roundIndex=t,this._buildWorld(t),this.otter=null,this.mode="race",this.paused=!1,this.sound.setTempo(this.sw.round.bpm),this.sound.setMode("race"),this._hud(),this._joyHome(),this.hinted={}}_hud(){this._clear();let t=this.sw;this.hud={place:vt("div",{class:"sp-place"},ze(t.swimmers.length)),prog:vt("div",{class:"sp-prog"},t.swimmers.map(s=>vt("i",{class:s.isPlayer?"me":""},xm[s.kind]))),qual:vt("div",{class:"sp-qual"},`${ze(0)}/${ze(t.round.qualify)}`),breath:vt("div",{class:"sp-breath"},[0,1,2,3,4].map(()=>vt("i"))),grade:vt("div",{class:"sp-grade"}),hint:vt("div",{class:"sp-hint"}),count:vt("div",{class:"sp-count"},""),stroke:vt("button",{class:"sp-cbtn sp-stroke","aria-label":qt("stroke")},vt("span",{class:"sp-pulse"}),qt("stroke")),dive:vt("button",{class:"sp-cbtn sp-dive","aria-label":qt("dive")},qt("dive"))},this.hud.stroke.style.setProperty("--b",`${t.beat}s`),this.hud.stroke.addEventListener("pointerdown",s=>{s.stopPropagation(),s.preventDefault(),this._stroke()});let e=this.hud.dive;e.addEventListener("pointerdown",s=>{s.stopPropagation(),s.preventDefault(),this.input.dive=!0,e.classList.add("on");try{e.setPointerCapture(s.pointerId)}catch{}});let n=()=>{this.input.dive=!1,e.classList.remove("on")};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),this.layer.append(vt("div",{class:"sp-hudtop"},this.hud.place,vt("div",{class:"sp-roundbar"},vt("b",{},t.round.id===4?qt("final"):`${qt("round")} ${ze(t.round.id)}`),this.hud.prog),this.hud.qual),vt("button",{class:"sp-round",style:"top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*16);inset-inline-start:calc(var(--u)*3)","aria-label":qt("paused"),onclick:s=>{s.stopPropagation(),this.pause()}},"\u23F8"),this.hud.breath,this.hud.grade,this.hud.hint,this.hud.count,this.hud.stroke,this.hud.dive,this._mute("top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*16);inset-inline-end:calc(var(--u)*3)"),this._toastEl()),this._hc={}}_hint(t,e=2.6){this.hinted[t]||(this.hinted[t]=!0,this.hud.hint.textContent=qt(t),this.hud.hint.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hud&&this.hud.hint.classList.remove("show"),e*1e3))}pause(){if(this.mode!=="race"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.dive=!1,this.joy.style.display="none",this.sound.suspend();let t=vt("div",{class:"sp-dim"},vt("div",{class:"sp-panel"},vt("div",{class:"sp-title"},qt("paused")),vt("button",{class:"sp-btn2",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume(),this._joyHome()}},"\u25B6 ",qt("resume")),vt("button",{class:"sp-btn2 wood",onclick:()=>{this.sound.resume(),this.startRound(this.roundIndex)}},"\u21BB ",qt("restart")),vt("button",{class:"sp-btn2 wood",onclick:()=>{this.sound.resume(),this.showMenu()}},qt("menu"))));this.layer.append(t)}_results(){var o;let t=this.sw,e=t.result,n=this.roundIndex;this.mode="results",this.joy.style.display="none",this.sound.setUnder(!1),this.sound.setMode("menu");let s=n===nn.length-1&&e.place===1;if(e.qualified){let c=nn[n].id;this.save.stars[c]=Math.max((o=this.save.stars[c])!=null?o:0,e.stars),n+2>this.save.unlocked&&n+1<nn.length&&(this.save.unlocked=n+2),this._saveNow(),this.sound.play("win")}else this.sound.play("lose");let r=e.qualified&&n+1<nn.length,a=vt("div",{class:"sp-dim"},vt("div",{class:"sp-panel"},vt("div",{class:"sp-title"},s?qt("win"):e.qualified?qt("qual"):qt("out")),e.qualified?vt("div",{class:"sp-stars"},[1,2,3].map(c=>vt("span",{class:c<=e.stars?"":"off"},"\u2B50"))):null,vt("div",{class:"sp-stat"},vt("span",{},"\u{1F3C1} ",qt("place")," ",ze(e.place)),vt("span",{},"\u2B50 ",qt("perfect")," ",ze(t.perfects))),vt("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},r?vt("button",{class:"sp-btn2",onclick:()=>this.startRound(n+1)},qt("next")," \u25B6"):null,vt("button",{class:r?"sp-btn2 wood":"sp-btn2",onclick:()=>this.startRound(n)},"\u21BB ",qt("again")),vt("button",{class:"sp-btn2 wood",onclick:()=>this.showMenu()},qt("menu")))));this.hud.stroke.remove(),this.hud.dive.remove(),this.layer.append(a)}_raceFrame(t,e){let n=this.sw,s=this._readInput(),r=n.player.dive,a=n.step(t,s),o=n.player;o.dive!==r&&(this.sound.play(o.dive?"dive":"surface"),this.sound.setUnder(o.dive));for(let h of a)switch(h.type){case"count":this.sound.play("count"),this.hud.count.textContent=ze(h.n);break;case"go":this.sound.play("go"),this.hud.count.textContent="",this.sound.setTempo(n.round.bpm),this._hint("hint",3.2);for(let u of n.swimmers)this.drops.splash(u.x,.5,10,3);break;case"beat":{let u=this.hud.stroke.firstChild;u.classList.remove("go"),u.offsetWidth,u.classList.add("go");break}case"stroke":{let u=n.swimmers[h.id];h.id===0&&this.sound.play("stroke",h.grade),this.drops.splash(u.x,-u.s,h.id===0?10:5,h.grade==="perfect"?3.5:2.2),this.models[h.id].paddle=.45;break}case"leap":h.id===0&&this.sound.play("leap");break;case"bonk":h.id===0&&(this.sound.play("bonk"),this.shake=.35);break;case"breath":this.sound.play("breath"),this.toast(qt("breath"),1.2),this.sound.setUnder(!1);break;case"slide":h.id===0&&(this.sound.play("slide"),this.toast(qt("slide"),1.2));break;case"splash":this.drops.splash(h.x,-h.s,h.id===0?24:10,4),h.id===0&&this.sound.play("splash");break;case"finish":h.id===0&&this.sound.play("finish");break;case"over":setTimeout(()=>this.mode==="race"&&this._results(),1500);break;default:}let c=n.course;c.noodles.some(h=>h.s-o.s>0&&h.s-o.s<14)&&this._hint("hintDive"),c.walls.some(h=>h.s-o.s>0&&h.s-o.s<14&&o.x>h.x0-.5&&o.x<h.x1+.5)&&this._hint("hintLeap");let l=c.waves.some(h=>o.s>h.s&&o.s<h.s+2);l&&!this._waved&&(this._waved=!0,this.sound.play("wave"),this.toast(qt("wave"),1)),l||(this._waved=!1),this._sync(t,e)}_sync(t,e){var d,p;let n=this.sw;this.water.offset.y=(this.water.offset.y+t*.05)%1;for(let m of this.waves)m.material.map.offset.y=(m.material.map.offset.y-t*.6)%1;n.course.noodles.forEach((m,x)=>{this.noodles[x].userData.arm.rotation.y=m.a}),n.swimmers.forEach((m,x)=>{var b;let g=this.models[x];g.root.position.set(m.x,m.y-.12+Math.sin(e*4+x)*.04,-m.s),g.root.rotation.x=m.air>0?-.6*Math.cos((1-m.air/.9)*Math.PI):m.slide?.4:0,g.root.rotation.z=m.stun>0?Math.sin(e*25)*.4:0,g.paddle=Math.max(0,((b=g.paddle)!=null?b:0)-t);let f=e*6+x;g.arms[0].rotation.x=g.paddle>0?-2.6*Math.sin(g.paddle/.45*Math.PI):Math.sin(f)*.5,g.arms[1].rotation.x=g.paddle>0?2.6*Math.sin(g.paddle/.45*Math.PI)-1:-Math.sin(f)*.5,g.legs.forEach((M,y)=>{M.rotation.x=Math.sin(e*14+y*Math.PI)*.5}),g.head.rotation.z=Math.sin(e*3+x)*.25,m.dive&&Math.random()<.3&&this.bubbles.emit(m.x+(Math.random()-.5)*.4,m.y+.2,-m.s,0,1.2,0,.8),!m.dive&&m.air<=0&&!m.slide&&m.v>3&&Math.random()<.25&&this.drops.emit(m.x+(Math.random()-.5)*.6,.1,-m.s+.6,Math.random()-.5,1.4,1,.4)}),this.drops.update(t),this.bubbles.update(t,-3);let s=n.player;this.ring.position.set(s.x,.05,-s.s),this.ring.visible=!s.slide&&this.mode!=="menu";let r=this.cw<this.ch,a=new T(s.x*.55,r?6.2:4.6,-s.s+(r?8.8:7.2));if(this.cam||(this.cam=a.clone()),this.cam.lerp(a,Math.min(1,t*4)),this.shake=Math.max(0,((d=this.shake)!=null?d:0)-t*2),this.camera.position.set(this.cam.x+(Math.random()-.5)*this.shake*.3,this.cam.y,this.cam.z),this.camera.lookAt(this.cam.x,0,this.cam.z-(r?8.8:7.2)-7),this.mode!=="race")return;let o=this._hc;o.rank!==s.rank&&(o.rank=s.rank,this.hud.place.textContent=ze((p=s.rank)!=null?p:n.swimmers.length));let c=n.qualifiedCount;o.q!==c&&(o.q=c,this.hud.qual.textContent=`${ze(c)}/${ze(n.round.qualify)}`);let l=n.round.len,h=rs()!=="en";n.swimmers.forEach((m,x)=>{let g=Math.min(1,m.s/l)*92+4;this.hud.prog.children[x].style.left=`${h?100-g:g}%`});let u=Math.ceil(s.breath*5);o.b!==u&&(o.b=u,[...this.hud.breath.children].forEach((m,x)=>m.classList.toggle("off",x>=u)))}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),!!this.scene){if(this.mode==="race"&&!this.paused)this._raceFrame(t,e);else if(this.mode==="results")this.sw.step(t,{}),this._sync(t,e);else if(this.mode==="menu"){this._sync(t,e),this.otter&&(this.otter.userData.wave.rotation.z=-.6+Math.sin(e*6)*.5,this.otter.rotation.y=Math.sin(e*.6)*.3);let n=e*.15;this.camera.position.set(Math.sin(n)*6,2.6,-6+Math.cos(n)*6+2),this.camera.lookAt(0,1.2,-6)}this.renderer.render(this.scene,this.camera)}}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene&&this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},Yo={start(i,t,e){let n=new Xo(i,t||{},e);return Yo.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.SplashRace=Yo;var zm=Yo;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
