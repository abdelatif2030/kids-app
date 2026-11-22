(()=>{var wo="170";var Zl=0,ic=1,Jl=2;var cl=1,Ql=2,Cn=3,qn=0,De=1,We=2,Fn=0,Bn=1,si=2,sc=3,rc=4,jl=5,ti=100,Kl=101,$l=102,th=103,eh=104,nh=200,ih=201,sh=202,rh=203,ca=204,la=205,ah=206,oh=207,ch=208,lh=209,hh=210,uh=211,dh=212,fh=213,ph=214,ha=0,ua=1,da=2,Ui=3,fa=4,pa=5,ga=6,ma=7,To=0,gh=1,mh=2,zn=0,Ah=1,xh=2,Ch=3,vh=4,yh=5,Ih=6,_h=7;var ll=300,Ni=301,Fi=302,Aa=303,xa=304,_r=306,Ca=1e3,ni=1001,va=1002,qe=1003,Mh=1004;var xs=1005;var an=1006,Tr=1007;var ii=1008;var _n=1009,hl=1010,ul=1011,ls=1012,Vo=1013,ri=1014,on=1015,fs=1016,Ro=1017,Po=1018,Bi=1020,dl=35902,fl=1021,pl=1022,$e=1023,gl=1024,ml=1025,Pi=1026,zi=1027,Lo=1028,Do=1029,Al=1030,Uo=1031;var No=1033,Gs=33776,Ws=33777,Xs=33778,Ys=33779,ya=35840,Ia=35841,_a=35842,Ma=35843,ba=36196,Sa=37492,Ea=37496,wa=37808,Ta=37809,Va=37810,Ra=37811,Pa=37812,La=37813,Da=37814,Ua=37815,Na=37816,Fa=37817,Ba=37818,za=37819,Oa=37820,qa=37821,Zs=36492,ka=36494,Ha=36495,xl=36283,Ga=36284,Wa=36285,Xa=36286;var Js=2300,Ya=2301,Vr=2302,ac=2400,oc=2401,cc=2402;var bh=3200,Sh=3201;var Cl=0,Eh=1,Un="",Pe="srgb",Hi="srgb-linear",Mr="linear",Kt="srgb";var di=7680;var lc=519,wh=512,Th=513,Vh=514,vl=515,Rh=516,Ph=517,Lh=518,Dh=519,Za=35044;var hc="300 es",yn=2e3,Qs=2001,kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rr=Math.PI/180,Ja=180/Math.PI;function On(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Uh(i,t){return(i%t+t)%t}function Pr(i,t,e){return(1-e)*i+e*t}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],M=s[1],I=s[4],y=s[7],U=s[2],S=s[5],w=s[8];return r[0]=a*x+o*M+c*U,r[3]=a*g+o*I+c*S,r[6]=a*f+o*y+c*w,r[1]=l*x+h*M+u*U,r[4]=l*g+h*I+u*S,r[7]=l*f+h*y+u*w,r[2]=d*x+p*M+m*U,r[5]=d*g+p*I+m*S,r[8]=d*f+p*y+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lr=new Ut;function yl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){let i=js("canvas");return i.style.display="block",i}var uc={};function as(i){i in uc||(uc[i]=!0,console.warn(i))}function Fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?Mr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],pc=[.3127,.329],gc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Hi]:{primaries:dc,whitePoint:pc,transfer:Mr,toXYZ:gc,fromXYZ:mc,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:dc,whitePoint:pc,transfer:Kt,toXYZ:gc,fromXYZ:mc,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var fi,Qa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=js("canvas")),fi.width=t.width,fi.height=t.height;let n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Oh=0,Ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dr(s[a].image)):r.push(Dr(s[a]))}else r=Dr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qh=0,Ne=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ni,s=ni,r=an,a=ii,o=$e,c=_n,l=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=On(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ca:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ca:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=ll;Ne.DEFAULT_ANISOTROPY=1;var te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(l+1)/2,y=(p+1)/2,U=(f+1)/2,S=(h+d)/4,w=(u+x)/4,D=(m+g)/4;return I>y&&I>U?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=S/n,r=w/n):y>U?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=D/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=w/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==m){let g=1-o,f=c*d+l*p+h*m+u*x,M=f>=0?1:-1,I=1-f*f;if(I>Number.EPSILON){let U=Math.sqrt(I),S=Math.atan2(U,f*M);g=Math.sin(g*S)/U,o=Math.sin(o*S)/U}let y=o*M;if(c=c*g+d*y,l=l*g+p*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-o*p,t[e+2]=l*m+h*p+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ur=new P,Ac=new Hn,bn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),vs.subVectors(this.max,Qi),pi.subVectors(t.a,Qi),gi.subVectors(t.b,Qi),mi.subVectors(t.c,Qi),Tn.subVectors(gi,pi),Vn.subVectors(mi,gi),Yn.subVectors(pi,mi);let e=[0,-Tn.z,Tn.y,0,-Vn.z,Vn.y,0,-Yn.z,Yn.y,Tn.z,0,-Tn.x,Vn.z,0,-Vn.x,Yn.z,0,-Yn.x,-Tn.y,Tn.x,0,-Vn.y,Vn.x,0,-Yn.y,Yn.x,0];return!Nr(e,pi,gi,mi,vs)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,pi,gi,mi,vs))?!1:(ys.crossVectors(Tn,Vn),e=[ys.x,ys.y,ys.z],Nr(e,pi,gi,mi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new P,new P,new P,new P,new P,new P,new P,new P],Qe=new P,Cs=new bn,pi=new P,gi=new P,mi=new P,Tn=new P,Vn=new P,Yn=new P,Qi=new P,vs=new P,ys=new P,Zn=new P;function Nr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var kh=new bn,ji=new P,Fr=new P,ai=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Fr)),this.expandByPoint(ji.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gn=new P,Br=new P,Is=new P,Rn=new P,zr=new P,_s=new P,Or=new P,$a=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Br);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=Rn.dot(this.direction),c=-Rn.dot(Is),l=Rn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Br).addScaledVector(Is,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);let n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){zr.subVectors(e,t),_s.subVectors(n,t),Or.crossVectors(zr,_s);let a=this.direction.dot(Or),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);let c=o*this.direction.dot(_s.crossVectors(Rn,_s));if(c<0)return null;let l=o*this.direction.dot(zr.cross(Rn));if(l<0||c+l>a)return null;let h=-o*Rn.dot(Or);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hh,t,Gh)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Pn.crossVectors(n,ze),Pn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Pn.crossVectors(n,ze)),Pn.normalize(),Ms.crossVectors(ze,Pn),s[0]=Pn.x,s[4]=Ms.x,s[8]=ze.x,s[1]=Pn.y,s[5]=Ms.y,s[9]=ze.y,s[2]=Pn.z,s[6]=Ms.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],M=n[3],I=n[7],y=n[11],U=n[15],S=s[0],w=s[4],D=s[8],_=s[12],v=s[1],E=s[5],q=s[9],z=s[13],G=s[2],Q=s[6],W=s[10],et=s[14],H=s[3],rt=s[7],ut=s[11],yt=s[15];return r[0]=a*S+o*v+c*G+l*H,r[4]=a*w+o*E+c*Q+l*rt,r[8]=a*D+o*q+c*W+l*ut,r[12]=a*_+o*z+c*et+l*yt,r[1]=h*S+u*v+d*G+p*H,r[5]=h*w+u*E+d*Q+p*rt,r[9]=h*D+u*q+d*W+p*ut,r[13]=h*_+u*z+d*et+p*yt,r[2]=m*S+x*v+g*G+f*H,r[6]=m*w+x*E+g*Q+f*rt,r[10]=m*D+x*q+g*W+f*ut,r[14]=m*_+x*z+g*et+f*yt,r[3]=M*S+I*v+y*G+U*H,r[7]=M*w+I*E+y*Q+U*rt,r[11]=M*D+I*q+y*W+U*ut,r[15]=M*_+I*z+y*et+U*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],M=u*g*l-x*d*l+x*c*p-o*g*p-u*c*f+o*d*f,I=m*d*l-h*g*l-m*c*p+a*g*p+h*c*f-a*d*f,y=h*x*l-m*u*l+m*o*p-a*x*p-h*o*f+a*u*f,U=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,S=e*M+n*I+s*y+r*U;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=M*w,t[1]=(x*d*r-u*g*r-x*s*p+n*g*p+u*s*f-n*d*f)*w,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*f+n*c*f)*w,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*w,t[4]=I*w,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*w,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*w,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*w,t[8]=y*w,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*f-e*u*f)*w,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*w,t[12]=U*w,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*w,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,m=r*u,x=a*h,g=a*u,f=o*u,M=c*l,I=c*h,y=c*u,U=n.x,S=n.y,w=n.z;return s[0]=(1-(x+f))*U,s[1]=(p+y)*U,s[2]=(m-I)*U,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(d+f))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+I)*w,s[9]=(g-M)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let l=1/r,h=1/a,u=1/o;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===yn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,m,x;if(o===yn)m=(a+r)*u,x=-2*u;else if(o===Qs)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ai=new P,je=new re,Hh=new P(0,0,0),Gh=new P(1,1,1),Pn=new P,Ms=new P,ze=new P,xc=new re,Cc=new Hn,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wh=0,vc=new P,xi=new Hn,mn=new re,bs=new P,Ki=new P,Xh=new P,Yh=new Hn,yc=new P(1,0,0),Ic=new P(0,1,0),_c=new P(0,0,1),Mc={type:"added"},Zh={type:"removed"},Ci={type:"childadded",child:null},qr={type:"childremoved",child:null},Ie=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new cn,n=new Hn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ut}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ki,bs,this.up):mn.lookAt(bs,Ki,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(mn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new P,An=new P,kr=new P,xn=new P,vi=new P,yi=new P,bc=new P,Hr=new P,Gr=new P,Wr=new P,Xr=new te,Yr=new te,Zr=new te,Nn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),An.subVectors(n,e),kr.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(An),c=Ke.dot(kr),l=An.dot(An),h=An.dot(kr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Xr.setScalar(0),Yr.setScalar(0),Zr.setScalar(0),Xr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(Yr,r.y),a.addScaledVector(Zr,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),An.subVectors(t,e),Ke.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Ke.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;vi.subVectors(s,n),yi.subVectors(r,n),Hr.subVectors(t,n);let c=vi.dot(Hr),l=yi.dot(Hr);if(c<=0&&l<=0)return e.copy(n);Gr.subVectors(t,s);let h=vi.dot(Gr),u=yi.dot(Gr);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(vi,a);Wr.subVectors(t,r);let p=vi.dot(Wr),m=yi.dot(Wr);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(yi,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return bc.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(bc,o);let f=1/(g+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(vi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Uh(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jr(a,r,t+1/3),this.g=Jr(a,r,t),this.b=Jr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Yt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Le(Se.r*255,0,255))*65536+Math.round(Le(Se.g*255,0,255))*256+Math.round(Le(Se.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Pe){Yt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Ss);let n=Pr(Ln.h,Ss.h,e),s=Pr(Ln.s,Ss.s,e),r=Pr(Ln.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new zt;zt.NAMES=Il;var Jh=0,Gn=class extends kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=On(),this.name="",this.blending=Bn,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=la,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends Gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new P,Es=new Nt,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}};var er=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nr=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qh=0,Ge=new re,Qr=new Ie,Ii=new P,Oe=new bn,$i=new bn,ye=new P,Xe=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yl(t)?nr:er)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Oe.min,$i.min),Oe.expandByPoint(ye),ye.addVectors(Oe.max,$i.max),Oe.expandByPoint(ye)):(Oe.expandByPoint($i.min),Oe.expandByPoint($i.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(t,l),ye.add(Ii)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new P,c[D]=new P;let l=new P,h=new P,u=new P,d=new Nt,p=new Nt,m=new Nt,x=new P,g=new P;function f(D,_,v){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let E=1/(p.x*m.y-m.x*p.y);isFinite(E)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(E),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(E),o[D].add(x),o[_].add(x),o[v].add(x),c[D].add(g),c[_].add(g),c[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,_=M.length;D<_;++D){let v=M[D],E=v.start,q=v.count;for(let z=E,G=E+q;z<G;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let I=new P,y=new P,U=new P,S=new P;function w(D){U.fromBufferAttribute(s,D),S.copy(U);let _=o[D];I.copy(_),I.sub(U.multiplyScalar(U.dot(_))).normalize(),y.crossVectors(S,_);let E=y.dot(c[D])<0?-1:1;a.setXYZW(D,I.x,I.y,I.z,E)}for(let D=0,_=M.length;D<_;++D){let v=M[D],E=v.start,q=v.count;for(let z=E,G=E+q;z<G;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new Ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new re,Jn=new $a,ws=new ai,Ec=new P,Ts=new P,Vs=new P,Rs=new P,jr=new P,Ps=new P,wc=new P,Ls=new P,me=class extends Ie{constructor(t=new Xe,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(jr.fromBufferAttribute(u,t),a?Ps.addScaledVector(jr,h):Ps.addScaledVector(jr.sub(e),h))}e.add(Ps)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(ws.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ws,Ec)===null||Jn.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(Sc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),I=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,U=I;y<U;y+=3){let S=o.getX(y),w=o.getX(y+1),D=o.getX(y+2);s=Ds(this,f,t,n,l,h,u,S,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let M=o.getX(g),I=o.getX(g+1),y=o.getX(g+2);s=Ds(this,a,t,n,l,h,u,M,I,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),I=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,U=I;y<U;y+=3){let S=y,w=y+1,D=y+2;s=Ds(this,f,t,n,l,h,u,S,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let M=g,I=g+1,y=g+2;s=Ds(this,a,t,n,l,h,u,M,I,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function jh(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===qn,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:i}}function Ds(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ts),i.getVertexPosition(c,Vs),i.getVertexPosition(l,Rs);let h=jh(i,t,e,n,Ts,Vs,Rs,wc);if(h){let u=new P;Nn.getBarycoord(wc,Ts,Vs,Rs,u),s&&(h.uv=Nn.getInterpolatedAttribute(s,o,c,l,u,new Nt)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,o,c,l,u,new Nt)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Nn.getNormal(Ts,Vs,Rs,d.normal),h.face=d,h.barycoord=u}return h}var oi=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function m(x,g,f,M,I,y,U,S,w,D,_){let v=y/w,E=U/D,q=y/2,z=U/2,G=S/2,Q=w+1,W=D+1,et=0,H=0,rt=new P;for(let ut=0;ut<W;ut++){let yt=ut*E-z;for(let Ot=0;Ot<Q;Ot++){let ee=Ot*v-q;rt[x]=ee*M,rt[g]=yt*I,rt[f]=G,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[g]=0,rt[f]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ot/w),u.push(1-ut/D),et+=1}}for(let ut=0;ut<D;ut++)for(let yt=0;yt<w;yt++){let Ot=d+yt+Q*ut,ee=d+yt+Q*(ut+1),Y=d+(yt+1)+Q*(ut+1),nt=d+(yt+1)+Q*ut;c.push(Ot,ee,nt),c.push(ee,Y,nt),H+=6}o.addGroup(p,H,_),p+=H,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function Kh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _l(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var $h={clone:Oi,merge:Ve},tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ir=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new P,Tc=new Nt,Vc=new Nt,Ee=class extends ir{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Tc,Vc),e.subVectors(Vc,Tc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_i=-90,Mi=1,to=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(_i,Mi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(_i,Mi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(_i,Mi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(_i,Mi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(_i,Mi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(_i,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},sr=class extends Ne{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},eo=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Fn});r.uniforms.tEquirect.value=e;let a=new me(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=an),new to(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Kr=new P,nu=new P,iu=new Ut,vn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kr.subVectors(n,e).cross(nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||iu.getNormalMatrix(t),s=this.coplanarPoint(Kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qn=new ai,Us=new P,hs=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],x=s[10],g=s[11],f=s[12],M=s[13],I=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,g-p,y-f).normalize(),n[1].setComponents(c+r,d+l,g+p,y+f).normalize(),n[2].setComponents(c+a,d+h,g+m,y+M).normalize(),n[3].setComponents(c-a,d-h,g-m,y-M).normalize(),n[4].setComponents(c-o,d-u,g-x,y-I).normalize(),e===yn)n[5].setComponents(c+o,d+u,g+x,y+I).normalize();else if(e===Qs)n[5].setComponents(o,u,x,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Us.x=s.normal.x>0?t.max.x:t.min.x,Us.y=s.normal.y>0?t.max.y:t.min.y,Us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ml(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function su(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Sn=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let M=f*d-a;for(let I=0;I<l;I++){let y=I*u-r;m.push(y,-M,0),x.push(0,0,1),g.push(I/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let I=M+l*f,y=M+l*(f+1),U=M+1+l*(f+1),S=M+1+l*f;p.push(I,y,S),p.push(y,U,S)}this.setIndex(p),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
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
#endif`,ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
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
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
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
#endif`,pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Cu=`#ifdef USE_BUMPMAP
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wu=`#define PI 3.141592653589793
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
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
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
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
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
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
#endif`,id=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hd=`float getShadowMask() {
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
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#ifdef USE_TRANSMISSION
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,ff=`#define DISTANCE
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
}`,pf=`#define DISTANCE
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`uniform float scale;
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
}`,xf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,vf=`uniform vec3 diffuse;
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
}`,yf=`#define LAMBERT
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
}`,If=`#define LAMBERT
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
}`,_f=`#define MATCAP
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
}`,Mf=`#define MATCAP
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
}`,bf=`#define NORMAL
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
}`,Sf=`#define NORMAL
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
}`,Ef=`#define PHONG
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
}`,wf=`#define PHONG
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
}`,Tf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,Rf=`#define TOON
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
}`,Pf=`#define TOON
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
}`,Lf=`uniform float size;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:ru,alphahash_pars_fragment:au,alphamap_fragment:ou,alphamap_pars_fragment:cu,alphatest_fragment:lu,alphatest_pars_fragment:hu,aomap_fragment:uu,aomap_pars_fragment:du,batching_pars_vertex:fu,batching_vertex:pu,begin_vertex:gu,beginnormal_vertex:mu,bsdfs:Au,iridescence_fragment:xu,bumpmap_pars_fragment:Cu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:yu,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:_u,color_fragment:Mu,color_pars_fragment:bu,color_pars_vertex:Su,color_vertex:Eu,common:wu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Ru,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Du,colorspace_fragment:Uu,colorspace_pars_fragment:Nu,envmap_fragment:Fu,envmap_common_pars_fragment:Bu,envmap_pars_fragment:zu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:ju,envmap_vertex:qu,fog_vertex:ku,fog_pars_vertex:Hu,fog_fragment:Gu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:Qu,lights_toon_fragment:Ku,lights_toon_pars_fragment:$u,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:ad,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:gd,metalnessmap_pars_fragment:md,morphinstance_vertex:Ad,morphcolor_vertex:xd,morphnormal_vertex:Cd,morphtarget_pars_vertex:vd,morphtarget_vertex:yd,normal_fragment_begin:Id,normal_fragment_maps:_d,normal_pars_fragment:Md,normal_pars_vertex:bd,normal_vertex:Sd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:Rd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Dd,project_vertex:Ud,dithering_fragment:Nd,dithering_pars_fragment:Fd,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:qd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Gd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:jd,transmission_fragment:Kd,transmission_pars_fragment:$d,uv_pars_fragment:tf,uv_pars_vertex:ef,uv_vertex:nf,worldpos_vertex:sf,background_vert:rf,background_frag:af,backgroundCube_vert:of,backgroundCube_frag:cf,cube_vert:lf,cube_frag:hf,depth_vert:uf,depth_frag:df,distanceRGBA_vert:ff,distanceRGBA_frag:pf,equirect_vert:gf,equirect_frag:mf,linedashed_vert:Af,linedashed_frag:xf,meshbasic_vert:Cf,meshbasic_frag:vf,meshlambert_vert:yf,meshlambert_frag:If,meshmatcap_vert:_f,meshmatcap_frag:Mf,meshnormal_vert:bf,meshnormal_frag:Sf,meshphong_vert:Ef,meshphong_frag:wf,meshphysical_vert:Tf,meshphysical_frag:Vf,meshtoon_vert:Rf,meshtoon_frag:Pf,points_vert:Lf,points_frag:Df,shadow_vert:Uf,shadow_frag:Nf,sprite_vert:Ff,sprite_frag:Bf},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},sn={basic:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ve([it.points,it.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ve([it.common,it.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ve([it.sprite,it.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ve([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ve([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};sn.physical={uniforms:Ve([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Ns={r:0,b:0,g:0},jn=new cn,zf=new re;function Of(i,t,e,n,s,r,a){let o=new zt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(M){let I=M.isScene===!0?M.background:null;return I&&I.isTexture&&(I=(M.backgroundBlurriness>0?e:t).get(I)),I}function x(M){let I=!1,y=m(M);y===null?f(o,c):y&&y.isColor&&(f(y,1),I=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,I){let y=m(I);y&&(y.isCubeTexture||y.mapping===_r)?(h===void 0&&(h=new me(new oi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Oi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(I.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(jn)),h.material.toneMapped=Yt.getTransfer(y.colorSpace)!==Kt,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new me(new Sn(2,2),new ln({name:"BackgroundMaterial",uniforms:Oi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==Kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,I){M.getRGB(Ns,_l(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(M,I=1){o.set(M),c=I,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:x,addToRenderList:g}}function qf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,E,q,z,G){let Q=!1,W=u(z,q,E);r!==W&&(r=W,l(r.object)),Q=p(v,z,q,G),Q&&m(v,z,q,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(v,E,q,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,E,q){let z=q.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Q=G[E.id];Q===void 0&&(Q={},G[E.id]=Q);let W=Q[z];return W===void 0&&(W=d(c()),Q[z]=W),W}function d(v){let E=[],q=[],z=[];for(let G=0;G<e;G++)E[G]=0,q[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:q,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,E,q,z){let G=r.attributes,Q=E.attributes,W=0,et=q.getAttributes();for(let H in et)if(et[H].location>=0){let ut=G[H],yt=Q[H];if(yt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function m(v,E,q,z){let G={},Q=E.attributes,W=0,et=q.getAttributes();for(let H in et)if(et[H].location>=0){let ut=Q[H];ut===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));let yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),G[H]=yt,W++}r.attributes=G,r.attributesNum=W,r.index=z}function x(){let v=r.newAttributes;for(let E=0,q=v.length;E<q;E++)v[E]=0}function g(v){f(v,0)}function f(v,E){let q=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;q[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),G[v]!==E&&(i.vertexAttribDivisor(v,E),G[v]=E)}function M(){let v=r.newAttributes,E=r.enabledAttributes;for(let q=0,z=E.length;q<z;q++)E[q]!==v[q]&&(i.disableVertexAttribArray(q),E[q]=0)}function I(v,E,q,z,G,Q,W){W===!0?i.vertexAttribIPointer(v,E,q,G,Q):i.vertexAttribPointer(v,E,q,z,G,Q)}function y(v,E,q,z){x();let G=z.attributes,Q=q.getAttributes(),W=E.defaultAttributeValues;for(let et in Q){let H=Q[et];if(H.location>=0){let rt=G[et];if(rt===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){let ut=rt.normalized,yt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;let ee=Ot.buffer,Y=Ot.type,nt=Ot.bytesPerElement,xt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===Vo;if(rt.isInterleavedBufferAttribute){let at=rt.data,Et=at.stride,Pt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let qt=0;qt<H.locationSize;qt++)f(H.location+qt,at.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let qt=0;qt<H.locationSize;qt++)g(H.location+qt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let qt=0;qt<H.locationSize;qt++)I(H.location+qt,yt/H.locationSize,Y,ut,Et*nt,(Pt+yt/H.locationSize*qt)*nt,xt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)f(H.location+at,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<H.locationSize;at++)g(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let at=0;at<H.locationSize;at++)I(H.location+at,yt/H.locationSize,Y,ut,yt*nt,yt/H.locationSize*at*nt,xt)}}else if(W!==void 0){let ut=W[et];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}M()}function U(){D();for(let v in n){let E=n[v];for(let q in E){let z=E[q];for(let G in z)h(z[G].object),delete z[G];delete E[q]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;let E=n[v.id];for(let q in E){let z=E[q];for(let G in z)h(z[G].object),delete z[G];delete E[q]}delete n[v.id]}function w(v){for(let E in n){let q=n[E];if(q[v.id]===void 0)continue;let z=q[v.id];for(let G in z)h(z[G].object),delete z[G];delete q[v.id]}}function D(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:_,dispose:U,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function kf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Hf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==$e&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let D=w===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==_n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==on&&!D)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:I,maxFragmentUniforms:y,vertexTextures:U,maxSamples:S}}function Gf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,I=M*4,y=f.clippingState||null;c.value=y,y=h(m,d,I,p);for(let U=0;U!==I;++U)y[U]=e[U];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let f=p+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let I=0,y=p;I!==x;++I,y+=4)a.copy(u[I]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Wf(i){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=Ni:o===xa&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Aa||o===xa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new eo(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var rr=class extends ir{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ri=4,Rc=[.125,.215,.35,.446,.526,.582],ei=20,$r=new rr,Pc=new zt,ta=null,ea=0,na=0,ia=!1,$n=(1+Math.sqrt(5))/2,bi=1/$n,Lc=[new P(-$n,bi,0),new P($n,bi,0),new P(-bi,0,$n),new P(bi,0,$n),new P(0,$n,-bi),new P(0,$n,bi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:fs,format:$e,colorSpace:Hi,depthBuffer:!1},s=Dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xf(r)),this._blurMaterial=Yf(r,t,e)}return s}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,s){let o=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pc),h.toneMapping=zn,h.autoClear=!1;let p=new we({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new me(new oi,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(Pc),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let I=this._cubeSize;Fs(s,M*I,f>2?I:0,I,I),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,$r)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lc[(s-r-1)%Lc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new me(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ei-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ei;g>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ei}`);let f=[],M=0;for(let w=0;w<ei;++w){let D=w/x,_=Math.exp(-D*D/2);f.push(_),w===0?M+=_:w<g&&(M+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:I}=this;d.dTheta.value=m,d.mipInt.value=I-n;let y=this._sizeLods[s],U=3*y*(s>I-Ri?s-I+Ri:0),S=4*(this._cubeSize-y);Fs(e,U,S,3*y,2*y),c.setRenderTarget(e),c.render(u,$r)}};function Xf(i){let t=[],e=[],n=[],s=i,r=i-Ri+1+Rc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ri?c=Rc[a-i+Ri-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,f=1,M=new Float32Array(x*m*p),I=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,D=S>2?0:-1,_=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];M.set(_,x*m*S),I.set(d,g*m*S);let v=[S,S,S,S,S,S];y.set(v,f*m*S)}let U=new Xe;U.setAttribute("position",new Ue(M,x)),U.setAttribute("uv",new Ue(I,g)),U.setAttribute("faceIndex",new Ue(y,f)),t.push(U),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dc(i,t,e){let n=new Mn(i,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yf(i,t,e){let n=new Float32Array(ei),s=new P(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Uc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Nc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function Zf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Aa||c===xa,h=c===Ni||c===Fi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ar(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ar(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Jf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qf(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let x=p[m];for(let g=0,f=x.length;g<f;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let I=0,y=M.length;I<y;I+=3){let U=M[I+0],S=M[I+1],w=M[I+2];d.push(U,S,S,w,w,U)}}else if(m!==void 0){let M=m.array;x=m.version;for(let I=0,y=M.length/3-1;I<y;I+=3){let U=I+0,S=I+1,w=I+2;d.push(U,S,S,w,w,U)}}else return;let g=new(yl(d)?nr:er)(d,1);g.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function jf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*x[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $f(i,t,e){let n=new WeakMap,s=new te;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let _=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],I=0;p===!0&&(I=1),m===!0&&(I=2),x===!0&&(I=3);let y=o.attributes.position.count*I,U=1;y>t.maxTextureSize&&(U=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*U*4*u),w=new $s(S,y,U,u);w.type=on,w.needsUpdate=!0;let D=I*4;for(let v=0;v<u;v++){let E=g[v],q=f[v],z=M[v],G=y*U*4*v;for(let Q=0;Q<E.count;Q++){let W=Q*D;p===!0&&(s.fromBufferAttribute(E,Q),S[G+W+0]=s.x,S[G+W+1]=s.y,S[G+W+2]=s.z,S[G+W+3]=0),m===!0&&(s.fromBufferAttribute(q,Q),S[G+W+4]=s.x,S[G+W+5]=s.y,S[G+W+6]=s.z,S[G+W+7]=0),x===!0&&(s.fromBufferAttribute(z,Q),S[G+W+8]=s.x,S[G+W+9]=s.y,S[G+W+10]=s.z,S[G+W+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Nt(y,U)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var or=class extends Ne{constructor(t,e,n,s,r,a,o,c,l,h=Pi){if(h!==Pi&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=ri),n===void 0&&h===zi&&(n=Bi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bl=new Ne,Fc=new or(1,1),Sl=new $s,El=new Ka,wl=new sr,Bc=[],zc=[],Oc=new Float32Array(16),qc=new Float32Array(9),kc=new Float32Array(4);function Gi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function br(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),Ce(e,n)}}function ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),Ce(e,n)}}function op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),Ce(e,n)}}function cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fc.compareFunction=vl,r=Fc):r=bl,e.setTexture2D(t||r,s)}function Ap(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||El,s)}function xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wl,s)}function Cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sl,s)}function vp(i){switch(i){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Cp}}function yp(i,t){i.uniform1fv(this.addr,t)}function Ip(i,t){let e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function _p(i,t){let e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Mp(i,t){let e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function bp(i,t){let e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sp(i,t){let e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ep(i,t){let e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wp(i,t){i.uniform1iv(this.addr,t)}function Tp(i,t){i.uniform2iv(this.addr,t)}function Vp(i,t){i.uniform3iv(this.addr,t)}function Rp(i,t){i.uniform4iv(this.addr,t)}function Pp(i,t){i.uniform1uiv(this.addr,t)}function Lp(i,t){i.uniform2uiv(this.addr,t)}function Dp(i,t){i.uniform3uiv(this.addr,t)}function Up(i,t){i.uniform4uiv(this.addr,t)}function Np(i,t,e){let n=this.cache,s=t.length,r=br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bl,r[a])}function Fp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||El,r[a])}function Bp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wl,r[a])}function zp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sl,r[a])}function Op(i){switch(i){case 5126:return yp;case 35664:return Ip;case 35665:return _p;case 35666:return Mp;case 35674:return bp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return Tp;case 35668:case 35672:return Vp;case 35669:case 35673:return Rp;case 5125:return Pp;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}var no=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vp(e.type)}},io=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Op(e.type)}},so=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},sa=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function qp(i,t,e){let n=i.name,s=n.length;for(sa.lastIndex=0;;){let r=sa.exec(n),a=sa.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hc(e,l===void 0?new no(o,i,t):new io(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new so(o),Hc(e,u)),e=u}}}var Di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Gc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kp=37297,Hp=0;function Gp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wc=new Ut;function Wp(i){Yt._getMatrix(Wc,Yt.workingColorSpace,i);let t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gp(i.getShaderSource(t),a)}else return s}function Xp(i,t){let e=Wp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yp(i,t){let e;switch(t){case Ah:e="Linear";break;case xh:e="Reinhard";break;case Ch:e="Cineon";break;case vh:e="ACESFilmic";break;case Ih:e="AgX";break;case _h:e="Neutral";break;case yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bs=new P;function Zp(){Yt.getLuminanceCoefficients(Bs);let i=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Qp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function os(i){return i!==""}function Yc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(Kp,tg)}var $p=new Map;function tg(i,t){let e=Bt[t];if(e===void 0){let n=$p.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}var eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(eg,ng)}function ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ig(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case To:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function og(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ig(e),l=sg(e),h=rg(e),u=ag(e),d=og(e),p=Jp(e),m=Qp(r),x=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(os).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(os).join(`
`),f.length>0&&(f+=`
`)):(g=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),f=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Xp("linearToOutputTexel",e.outputColorSpace),Zp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),a=ro(a),a=Yc(a,e),a=Zc(a,e),o=ro(o),o=Yc(o,e),o=Zc(o,e),a=Jc(a),o=Jc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=M+g+a,y=M+f+o,U=Gc(s,s.VERTEX_SHADER,I),S=Gc(s,s.FRAGMENT_SHADER,y);s.attachShader(x,U),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(E){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(U).trim(),G=s.getShaderInfoLog(S).trim(),Q=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,S);else{let et=Xc(s,U,"vertex"),H=Xc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+q+`
`+et+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||G==="")&&(W=!1);W&&(E.diagnostics={runnable:Q,programLog:q,vertexShader:{log:z,prefix:g},fragmentShader:{log:G,prefix:f}})}s.deleteShader(U),s.deleteShader(S),D=new Di(s,x),_=jp(s,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,kp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=S,this}var lg=0,ao=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oo(t),e.set(t,n)),n}},oo=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function hg(i,t,e,n,s,r,a){let o=new tr,c=new ao,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,v,E,q,z){let G=q.fog,Q=z.geometry,W=_.isMeshStandardMaterial?q.environment:null,et=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),H=et&&et.mapping===_r?et.image.height:null,rt=m[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=ut!==void 0?ut.length:0,Ot=0;Q.morphAttributes.position!==void 0&&(Ot=1),Q.morphAttributes.normal!==void 0&&(Ot=2),Q.morphAttributes.color!==void 0&&(Ot=3);let ee,Y,nt,xt;if(rt){let jt=sn[rt];ee=jt.vertexShader,Y=jt.fragmentShader}else ee=_.vertexShader,Y=_.fragmentShader,c.update(_),nt=c.getVertexShaderID(_),xt=c.getFragmentShaderID(_);let at=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,qt=z.isBatchedMesh===!0,he=!!_.map,Wt=!!_.matcap,fe=!!et,L=!!_.aoMap,ke=!!_.lightMap,kt=!!_.bumpMap,Ht=!!_.normalMap,_t=!!_.displacementMap,ae=!!_.emissiveMap,It=!!_.metalnessMap,b=!!_.roughnessMap,A=_.anisotropy>0,N=_.clearcoat>0,Z=_.dispersion>0,j=_.iridescence>0,X=_.sheen>0,Ct=_.transmission>0,ot=A&&!!_.anisotropyMap,dt=N&&!!_.clearcoatMap,Xt=N&&!!_.clearcoatNormalMap,$=N&&!!_.clearcoatRoughnessMap,ft=j&&!!_.iridescenceMap,bt=j&&!!_.iridescenceThicknessMap,Tt=X&&!!_.sheenColorMap,pt=X&&!!_.sheenRoughnessMap,Gt=!!_.specularMap,Ft=!!_.specularColorMap,ie=!!_.specularIntensityMap,T=Ct&&!!_.transmissionMap,st=Ct&&!!_.thicknessMap,k=!!_.gradientMap,J=!!_.alphaMap,ht=_.alphaTest>0,ct=!!_.alphaHash,Lt=!!_.extensions,ue=zn;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Me={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:Y,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:qt,batchingColor:qt&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Hi,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:Wt,envMap:fe,envMapMode:fe&&et.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:ke,bumpMap:kt,normalMap:Ht,displacementMap:d&&_t,emissiveMap:ae,normalMapObjectSpace:Ht&&_.normalMapType===Eh,normalMapTangentSpace:Ht&&_.normalMapType===Cl,metalnessMap:It,roughnessMap:b,anisotropy:A,anisotropyMap:ot,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:$,dispersion:Z,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:X,sheenColorMap:Tt,sheenRoughnessMap:pt,specularMap:Gt,specularColorMap:Ft,specularIntensityMap:ie,transmission:Ct,transmissionMap:T,thicknessMap:st,gradientMap:k,opaque:_.transparent===!1&&_.blending===Bn&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:ct,combine:_.combine,mapUv:he&&x(_.map.channel),aoMapUv:L&&x(_.aoMap.channel),lightMapUv:ke&&x(_.lightMap.channel),bumpMapUv:kt&&x(_.bumpMap.channel),normalMapUv:Ht&&x(_.normalMap.channel),displacementMapUv:_t&&x(_.displacementMap.channel),emissiveMapUv:ae&&x(_.emissiveMap.channel),metalnessMapUv:It&&x(_.metalnessMap.channel),roughnessMapUv:b&&x(_.roughnessMap.channel),anisotropyMapUv:ot&&x(_.anisotropyMap.channel),clearcoatMapUv:dt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(_.sheenRoughnessMap.channel),specularMapUv:Gt&&x(_.specularMap.channel),specularColorMapUv:Ft&&x(_.specularColorMap.channel),specularIntensityMapUv:ie&&x(_.specularIntensityMap.channel),transmissionMapUv:T&&x(_.transmissionMap.channel),thicknessMapUv:st&&x(_.thicknessMap.channel),alphaMapUv:J&&x(_.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ht||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(he||J),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===Kt,decodeVideoTextureEmissive:ae&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===Kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===We,flipSided:_.side===De,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&_.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function f(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)v.push(E),v.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(M(v,_),I(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function M(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function I(_,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){let v=m[_.type],E;if(v){let q=sn[v];E=$h.clone(q.uniforms)}else E=_.uniforms;return E}function U(_,v){let E;for(let q=0,z=h.length;q<z;q++){let G=h[q];if(G.cacheKey===v){E=G,++E.usedTimes;break}}return E===void 0&&(E=new cg(i,v,_,r),h.push(E)),E}function S(_){if(--_.usedTimes===0){let v=h.indexOf(_);h[v]=h[h.length-1],h.pop(),_.destroy()}}function w(_){c.remove(_)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:U,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:D}}function ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,x,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function o(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||dg),n.length>1&&n.sort(d||jc),s.length>1&&s.sort(d||jc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function fg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function gg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mg=0;function Ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i){let t=new pg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new re,a=new re;function o(l){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,M=0,I=0,y=0,U=0,S=0,w=0;l.sort(Ag);for(let _=0,v=l.length;_<v;_++){let E=l[_],q=E.color,z=E.intensity,G=E.distance,Q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=q.r*z,u+=q.g*z,d+=q.b*z;else if(E.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(E.sh.coefficients[W],z);w++}else if(E.isDirectionalLight){let W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let et=E.shadow,H=e.get(E);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=E.shadow.matrix,M++}n.directional[p]=W,p++}else if(E.isSpotLight){let W=t.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(q).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,n.spot[x]=W;let et=E.shadow;if(E.map&&(n.spotLightMap[U]=E.map,U++,et.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[x]=et.matrix,E.castShadow){let H=e.get(E);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=Q,y++}x++}else if(E.isRectAreaLight){let W=t.get(E);W.color.copy(q).multiplyScalar(z),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=W,g++}else if(E.isPointLight){let W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){let et=E.shadow,H=e.get(E);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,H.shadowCameraNear=et.camera.near,H.shadowCameraFar=et.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=E.shadow.matrix,I++}n.point[m]=W,m++}else if(E.isHemisphereLight){let W=t.get(E);W.skyColor.copy(E.color).multiplyScalar(z),W.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[f]=W,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==M||D.numPointShadows!==I||D.numSpotShadows!==y||D.numSpotMaps!==U||D.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=y+U-S,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,D.directionalLength=p,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=M,D.numPointShadows=I,D.numSpotShadows=y,D.numSpotMaps=U,D.numLightProbes=w,n.version=mg++)}function c(l,h){let u=0,d=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){let I=l[f];if(I.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(I.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(I.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(I.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(I.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(I.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(I.width*.5,0,0),y.halfHeight.set(0,I.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(I.matrixWorld),y.position.applyMatrix4(g),d++}else if(I.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(I.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function $c(i){let t=new xg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Cg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new $c(i),t.set(s,[o])):r>=a.length?(o=new $c(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var co=class extends Gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lo=class extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function Ig(i,t,e){let n=new hs,s=new Nt,r=new Nt,a=new te,o=new co({depthPacking:Sh}),c=new lo,l={},h=e.maxTextureSize,u={[qn]:De,[De]:qn,[We]:We},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:vg,fragmentShader:yg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Xe;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let f=this.type;this.render=function(S,w,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=f!==Cn&&this.type===Cn,G=f===Cn&&this.type!==Cn;for(let Q=0,W=S.length;Q<W;Q++){let et=S[Q],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||z===!0||G===!0){let yt=this.type!==Cn?{minFilter:qe,magFilter:qe}:{};H.map!==null&&H.map.dispose(),H.map=new Mn(s.x,s.y,yt),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ut=H.getViewportCount();for(let yt=0;yt<ut;yt++){let Ot=H.getViewport(yt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),q.viewport(a),H.updateMatrices(et,yt),n=H.getFrustum(),y(w,D,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===Cn&&M(H,D),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(_,v,E)};function M(S,w){let D=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,D,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,D,p,x,null)}function I(S,w,D,_){let v=null,E=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)v=E;else if(v=D.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=v.uuid,z=w.uuid,G=l[q];G===void 0&&(G={},l[q]=G);let Q=G[z];Q===void 0&&(Q=v.clone(),G[z]=Q,w.addEventListener("dispose",U)),v=Q}if(v.visible=w.visible,v.wireframe=w.wireframe,_===Cn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let q=i.properties.get(v);q.light=D}return v}function y(S,w,D,_,v){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Cn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let z=t.update(S),G=S.material;if(Array.isArray(G)){let Q=z.groups;for(let W=0,et=Q.length;W<et;W++){let H=Q[W],rt=G[H.materialIndex];if(rt&&rt.visible){let ut=I(S,rt,_,v);S.onBeforeShadow(i,S,w,D,z,ut,H),i.renderBufferDirect(D,null,z,ut,S,H),S.onAfterShadow(i,S,w,D,z,ut,H)}}}else if(G.visible){let Q=I(S,G,_,v);S.onBeforeShadow(i,S,w,D,z,Q,null),i.renderBufferDirect(D,null,z,Q,S,null),S.onAfterShadow(i,S,w,D,z,Q,null)}}let q=S.children;for(let z=0,G=q.length;z<G;z++)y(q[z],w,D,_,v)}function U(S){S.target.removeEventListener("dispose",U);for(let D in l){let _=l[D],v=S.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}var _g={[ha]:ua,[da]:ga,[fa]:ma,[Ui]:pa,[ua]:ha,[ga]:da,[ma]:fa,[pa]:Ui};function Mg(i,t){function e(){let T=!1,st=new te,k=null,J=new te(0,0,0,0);return{setMask:function(ht){k!==ht&&!T&&(i.colorMask(ht,ht,ht,ht),k=ht)},setLocked:function(ht){T=ht},setClear:function(ht,ct,Lt,ue,Me){Me===!0&&(ht*=ue,ct*=ue,Lt*=ue),st.set(ht,ct,Lt,ue),J.equals(st)===!1&&(i.clearColor(ht,ct,Lt,ue),J.copy(st))},reset:function(){T=!1,k=null,J.set(-1,0,0,0)}}}function n(){let T=!1,st=!1,k=null,J=null,ht=null;return{setReversed:function(ct){if(st!==ct){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let ue=ht;ht=null,this.setClear(ue)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?at(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ct){k!==ct&&!T&&(i.depthMask(ct),k=ct)},setFunc:function(ct){if(st&&(ct=_g[ct]),J!==ct){switch(ct){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ct}},setLocked:function(ct){T=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){T=!1,k=null,J=null,ht=null,st=!1}}}function s(){let T=!1,st=null,k=null,J=null,ht=null,ct=null,Lt=null,ue=null,Me=null;return{setTest:function(jt){T||(jt?at(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(jt){st!==jt&&!T&&(i.stencilMask(jt),st=jt)},setFunc:function(jt,Ze,dn){(k!==jt||J!==Ze||ht!==dn)&&(i.stencilFunc(jt,Ze,dn),k=jt,J=Ze,ht=dn)},setOp:function(jt,Ze,dn){(ct!==jt||Lt!==Ze||ue!==dn)&&(i.stencilOp(jt,Ze,dn),ct=jt,Lt=Ze,ue=dn)},setLocked:function(jt){T=jt},setClear:function(jt){Me!==jt&&(i.clearStencil(jt),Me=jt)},reset:function(){T=!1,st=null,k=null,J=null,ht=null,ct=null,Lt=null,ue=null,Me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,M=null,I=null,y=null,U=null,S=null,w=new zt(0,0,0),D=0,_=!1,v=null,E=null,q=null,z=null,G=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,et=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=et>=2);let rt=null,ut={},yt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),ee=new te().fromArray(yt),Y=new te().fromArray(Ot);function nt(T,st,k,J){let ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(T,ct),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<k;Lt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}let xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Ui),kt(!1),Ht(ic),at(i.CULL_FACE),L(Fn);function at(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function Et(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function Pt(T,st){return u[T]!==st?(i.bindFramebuffer(T,st),u[T]=st,T===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),T===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function qt(T,st){let k=p,J=!1;if(T){k=d.get(st),k===void 0&&(k=[],d.set(st,k));let ht=T.textures;if(k.length!==ht.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Lt=ht.length;ct<Lt;ct++)k[ct]=i.COLOR_ATTACHMENT0+ct;k.length=ht.length,J=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,J=!0);J&&i.drawBuffers(k)}function he(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let Wt={[ti]:i.FUNC_ADD,[Kl]:i.FUNC_SUBTRACT,[$l]:i.FUNC_REVERSE_SUBTRACT};Wt[th]=i.MIN,Wt[eh]=i.MAX;let fe={[nh]:i.ZERO,[ih]:i.ONE,[sh]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[hh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[rh]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[uh]:i.CONSTANT_COLOR,[dh]:i.ONE_MINUS_CONSTANT_COLOR,[fh]:i.CONSTANT_ALPHA,[ph]:i.ONE_MINUS_CONSTANT_ALPHA};function L(T,st,k,J,ht,ct,Lt,ue,Me,jt){if(T===Fn){x===!0&&(Et(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),T!==jl){if(T!==g||jt!==_){if((f!==ti||y!==ti)&&(i.blendEquation(i.FUNC_ADD),f=ti,y=ti),jt)switch(T){case Bn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}M=null,I=null,U=null,S=null,w.set(0,0,0),D=0,g=T,_=jt}return}ht=ht||st,ct=ct||k,Lt=Lt||J,(st!==f||ht!==y)&&(i.blendEquationSeparate(Wt[st],Wt[ht]),f=st,y=ht),(k!==M||J!==I||ct!==U||Lt!==S)&&(i.blendFuncSeparate(fe[k],fe[J],fe[ct],fe[Lt]),M=k,I=J,U=ct,S=Lt),(ue.equals(w)===!1||Me!==D)&&(i.blendColor(ue.r,ue.g,ue.b,Me),w.copy(ue),D=Me),g=T,_=!1}function ke(T,st){T.side===We?Et(i.CULL_FACE):at(i.CULL_FACE);let k=T.side===De;st&&(k=!k),kt(k),T.blending===Bn&&T.transparent===!1?L(Fn):L(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let J=T.stencilWrite;o.setTest(J),J&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ae(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(T){v!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),v=T)}function Ht(T){T!==Zl?(at(i.CULL_FACE),T!==E&&(T===ic?i.cullFace(i.BACK):T===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),E=T}function _t(T){T!==q&&(W&&i.lineWidth(T),q=T)}function ae(T,st,k){T?(at(i.POLYGON_OFFSET_FILL),(z!==st||G!==k)&&(i.polygonOffset(st,k),z=st,G=k)):Et(i.POLYGON_OFFSET_FILL)}function It(T){T?at(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function b(T){T===void 0&&(T=i.TEXTURE0+Q-1),rt!==T&&(i.activeTexture(T),rt=T)}function A(T,st,k){k===void 0&&(rt===null?k=i.TEXTURE0+Q-1:k=rt);let J=ut[k];J===void 0&&(J={type:void 0,texture:void 0},ut[k]=J),(J.type!==T||J.texture!==st)&&(rt!==k&&(i.activeTexture(k),rt=k),i.bindTexture(T,st||xt[T]),J.type=T,J.texture=st)}function N(){let T=ut[rt];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Tt(T){ee.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),ee.copy(T))}function pt(T){Y.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Y.copy(T))}function Gt(T,st){let k=l.get(st);k===void 0&&(k=new WeakMap,l.set(st,k));let J=k.get(T);J===void 0&&(J=i.getUniformBlockIndex(st,T.name),k.set(T,J))}function Ft(T,st){let J=l.get(st).get(T);c.get(st)!==J&&(i.uniformBlockBinding(st,J,T.__bindingPointIndex),c.set(st,J))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ut={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,M=null,I=null,y=null,U=null,S=null,w=new zt(0,0,0),D=0,_=!1,v=null,E=null,q=null,z=null,G=null,ee.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Et,bindFramebuffer:Pt,drawBuffers:qt,useProgram:he,setBlending:L,setMaterial:ke,setFlipSided:kt,setCullFace:Ht,setLineWidth:_t,setPolygonOffset:ae,setScissorTest:It,activeTexture:b,bindTexture:A,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:ft,texImage3D:bt,updateUBOMapping:Gt,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:$,texSubImage2D:X,texSubImage3D:Ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Tt,viewport:pt,reset:ie}}function tl(i,t,e,n){let s=bg(n);switch(e){case fl:return i*t;case gl:return i*t;case ml:return i*t*2;case Lo:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Al:return i*t*2/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case pl:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case ya:case _a:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zs:case ka:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(i){switch(i){case _n:case hl:return{byteLength:1,components:1};case ls:case ul:case fs:return{byteLength:2,components:1};case Ro:case Po:return{byteLength:2,components:4};case ri:case Vo:case on:return{byteLength:4,components:1};case dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,A){return p?new OffscreenCanvas(b,A):js("canvas")}function x(b,A,N){let Z=1,j=It(b);if((j.width>N||j.height>N)&&(Z=N/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let X=Math.floor(Z*j.width),Ct=Math.floor(Z*j.height);u===void 0&&(u=m(X,Ct));let ot=A?m(X,Ct):u;return ot.width=X,ot.height=Ct,ot.getContext("2d").drawImage(b,0,0,X,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Ct+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function g(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(b,A,N,Z,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=A;if(A===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),A===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),A===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),A===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),A===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),A===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),A===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),A===i.RGBA){let Ct=j?Mr:Yt.getTransfer(Z);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=Ct===Kt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(b,A){let N;return b?A===null||A===ri||A===Bi?N=i.DEPTH24_STENCIL8:A===on?N=i.DEPTH32F_STENCIL8:A===ls&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ri||A===Bi?N=i.DEPTH_COMPONENT24:A===on?N=i.DEPTH_COMPONENT32F:A===ls&&(N=i.DEPTH_COMPONENT16),N}function U(b,A){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function S(b){let A=b.target;A.removeEventListener("dispose",S),D(A),A.isVideoTexture&&h.delete(A)}function w(b){let A=b.target;A.removeEventListener("dispose",w),v(A)}function D(b){let A=n.get(b);if(A.__webglInit===void 0)return;let N=b.source,Z=d.get(N);if(Z){let j=Z[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&_(b),Object.keys(Z).length===0&&d.delete(N)}n.remove(b)}function _(b){let A=n.get(b);i.deleteTexture(A.__webglTexture);let N=b.source,Z=d.get(N);delete Z[A.__cacheKey],a.memory.textures--}function v(b){let A=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(A.__webglFramebuffer[Z]))for(let j=0;j<A.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(A.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(A.__webglFramebuffer[Z]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Z])}else{if(Array.isArray(A.__webglFramebuffer))for(let Z=0;Z<A.__webglFramebuffer.length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[Z]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Z=0;Z<A.__webglColorRenderbuffer.length;Z++)A.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Z]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let N=b.textures;for(let Z=0,j=N.length;Z<j;Z++){let X=n.get(N[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(b)}let E=0;function q(){E=0}function z(){let b=E;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),E+=1,b}function G(b){let A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function Q(b,A){let N=n.get(b);if(b.isVideoTexture&&_t(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,b,A);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+A)}function W(b,A){let N=n.get(b);if(b.version>0&&N.__version!==b.version){Y(N,b,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+A)}function et(b,A){let N=n.get(b);if(b.version>0&&N.__version!==b.version){Y(N,b,A);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+A)}function H(b,A){let N=n.get(b);if(b.version>0&&N.__version!==b.version){nt(N,b,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+A)}let rt={[Ca]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},ut={[qe]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},yt={[wh]:i.NEVER,[Dh]:i.ALWAYS,[Th]:i.LESS,[vl]:i.LEQUAL,[Vh]:i.EQUAL,[Lh]:i.GEQUAL,[Rh]:i.GREATER,[Ph]:i.NOTEQUAL};function Ot(b,A){if(A.type===on&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===an||A.magFilter===Tr||A.magFilter===xs||A.magFilter===ii||A.minFilter===an||A.minFilter===Tr||A.minFilter===xs||A.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,rt[A.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,rt[A.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,rt[A.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[A.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[A.minFilter]),A.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,yt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qe||A.minFilter!==xs&&A.minFilter!==ii||A.type===on&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ee(b,A){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",S));let Z=A.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let X=G(A);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[X].usedTimes++;let Ct=j[b.__cacheKey];Ct!==void 0&&(j[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&_(A)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return N}function Y(b,A,N){let Z=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=i.TEXTURE_3D);let j=ee(b,A),X=A.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+N);let Ct=n.get(X);if(X.version!==Ct.__version||j===!0){e.activeTexture(i.TEXTURE0+N);let ot=Yt.getPrimaries(Yt.workingColorSpace),dt=A.colorSpace===Un?null:Yt.getPrimaries(A.colorSpace),Xt=A.colorSpace===Un||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let $=x(A.image,!1,s.maxTextureSize);$=ae(A,$);let ft=r.convert(A.format,A.colorSpace),bt=r.convert(A.type),Tt=I(A.internalFormat,ft,bt,A.colorSpace,A.isVideoTexture);Ot(Z,A);let pt,Gt=A.mipmaps,Ft=A.isVideoTexture!==!0,ie=Ct.__version===void 0||j===!0,T=X.dataReady,st=U(A,$);if(A.isDepthTexture)Tt=y(A.format===zi,A.type),ie&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Tt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Tt,$.width,$.height,0,ft,bt,null));else if(A.isDataTexture)if(Gt.length>0){Ft&&ie&&e.texStorage2D(i.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let k=0,J=Gt.length;k<J;k++)pt=Gt[k],Ft?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(i.TEXTURE_2D,k,Tt,pt.width,pt.height,0,ft,bt,pt.data);A.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(i.TEXTURE_2D,st,Tt,$.width,$.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,ft,bt,$.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,$.width,$.height,0,ft,bt,$.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Tt,Gt[0].width,Gt[0].height,$.depth);for(let k=0,J=Gt.length;k<J;k++)if(pt=Gt[k],A.format!==$e)if(ft!==null)if(Ft){if(T)if(A.layerUpdates.size>0){let ht=tl(pt.width,pt.height,A.format,A.type);for(let ct of A.layerUpdates){let Lt=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ct,pt.width,pt.height,1,ft,Lt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,$.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Tt,pt.width,pt.height,$.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,$.depth,ft,bt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Tt,pt.width,pt.height,$.depth,0,ft,bt,pt.data)}else{Ft&&ie&&e.texStorage2D(i.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let k=0,J=Gt.length;k<J;k++)pt=Gt[k],A.format!==$e?ft!==null?Ft?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(i.TEXTURE_2D,k,Tt,pt.width,pt.height,0,ft,bt,pt.data)}else if(A.isDataArrayTexture)if(Ft){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Tt,$.width,$.height,$.depth),T)if(A.layerUpdates.size>0){let k=tl($.width,$.height,A.format,A.type);for(let J of A.layerUpdates){let ht=$.data.subarray(J*k/$.data.BYTES_PER_ELEMENT,(J+1)*k/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,ft,bt,ht)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,bt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,$.width,$.height,$.depth,0,ft,bt,$.data);else if(A.isData3DTexture)Ft?(ie&&e.texStorage3D(i.TEXTURE_3D,st,Tt,$.width,$.height,$.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,bt,$.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,$.width,$.height,$.depth,0,ft,bt,$.data);else if(A.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(i.TEXTURE_2D,st,Tt,$.width,$.height);else{let k=$.width,J=$.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Tt,k,J,0,ft,bt,null),k>>=1,J>>=1}}else if(Gt.length>0){if(Ft&&ie){let k=It(Gt[0]);e.texStorage2D(i.TEXTURE_2D,st,Tt,k.width,k.height)}for(let k=0,J=Gt.length;k<J;k++)pt=Gt[k],Ft?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft,bt,pt):e.texImage2D(i.TEXTURE_2D,k,Tt,ft,bt,pt);A.generateMipmaps=!1}else if(Ft){if(ie){let k=It($);e.texStorage2D(i.TEXTURE_2D,st,Tt,k.width,k.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,bt,$)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ft,bt,$);g(A)&&f(Z),Ct.__version=X.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function nt(b,A,N){if(A.image.length!==6)return;let Z=ee(b,A),j=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let X=n.get(j);if(j.version!==X.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);let Ct=Yt.getPrimaries(Yt.workingColorSpace),ot=A.colorSpace===Un?null:Yt.getPrimaries(A.colorSpace),dt=A.colorSpace===Un||Ct===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,$=A.image[0]&&A.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Xt&&!$?ft[J]=x(A.image[J],!0,s.maxCubemapSize):ft[J]=$?A.image[J].image:A.image[J],ft[J]=ae(A,ft[J]);let bt=ft[0],Tt=r.convert(A.format,A.colorSpace),pt=r.convert(A.type),Gt=I(A.internalFormat,Tt,pt,A.colorSpace),Ft=A.isVideoTexture!==!0,ie=X.__version===void 0||Z===!0,T=j.dataReady,st=U(A,bt);Ot(i.TEXTURE_CUBE_MAP,A);let k;if(Xt){Ft&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,bt.width,bt.height);for(let J=0;J<6;J++){k=ft[J].mipmaps;for(let ht=0;ht<k.length;ht++){let ct=k[ht];A.format!==$e?Tt!==null?Ft?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,ct.width,ct.height,Tt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,ct.width,ct.height,Tt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Gt,ct.width,ct.height,0,Tt,pt,ct.data)}}}else{if(k=A.mipmaps,Ft&&ie){k.length>0&&st++;let J=It(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,J.width,J.height)}for(let J=0;J<6;J++)if($){Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,Tt,pt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,ft[J].width,ft[J].height,0,Tt,pt,ft[J].data);for(let ht=0;ht<k.length;ht++){let Lt=k[ht].image[J].image;Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Lt.width,Lt.height,Tt,pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Gt,Lt.width,Lt.height,0,Tt,pt,Lt.data)}}else{Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Tt,pt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Tt,pt,ft[J]);for(let ht=0;ht<k.length;ht++){let ct=k[ht];Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Tt,pt,ct.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Gt,Tt,pt,ct.image[J])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),X.__version=j.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function xt(b,A,N,Z,j,X){let Ct=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),dt=I(N.internalFormat,Ct,ot,N.colorSpace),Xt=n.get(A),$=n.get(N);if($.__renderTarget=A,!Xt.__hasExternalTextures){let ft=Math.max(1,A.width>>X),bt=Math.max(1,A.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,X,dt,ft,bt,A.depth,0,Ct,ot,null):e.texImage2D(j,X,dt,ft,bt,0,Ct,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ht(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,$.__webglTexture,0,kt(A)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,$.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(b,A,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),A.depthBuffer){let Z=A.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,X=y(A.stencilBuffer,j),Ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=kt(A);Ht(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,X,A.width,A.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,X,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,X,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,b)}else{let Z=A.textures;for(let j=0;j<Z.length;j++){let X=Z[j],Ct=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),dt=I(X.internalFormat,Ct,ot,X.colorSpace),Xt=kt(A);N&&Ht(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,dt,A.width,A.height):Ht(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,dt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,dt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(A.depthTexture);Z.__renderTarget=A,(!Z.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);let j=Z.__webglTexture,X=kt(A);if(A.depthTexture.format===Pi)Ht(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(A.depthTexture.format===zi)Ht(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(b){let A=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Z){let j=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),A.__depthDisposeCallback=j}A.__boundDepthTexture=Z}if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Et(A.__webglFramebuffer,b)}else if(N){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]===void 0)A.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(A.__webglDepthbuffer[Z],b,!1);else{let j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),at(A.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(b,A,N){let Z=n.get(b);A!==void 0&&xt(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(b)}function he(b){let A=b.texture,N=n.get(b),Z=n.get(A);b.addEventListener("dispose",w);let j=b.textures,X=b.isWebGLCubeRenderTarget===!0,Ct=j.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=A.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let dt=0;dt<A.mipmaps.length;dt++)N.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<A.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ot=0,dt=j.length;ot<dt;ot++){let Xt=n.get(j[ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let dt=j[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Xt=r.convert(dt.format,dt.colorSpace),$=r.convert(dt.type),ft=I(dt.internalFormat,Xt,$,dt.colorSpace,b.isXRRenderTarget===!0),bt=kt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),at(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,A);for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)xt(N.__webglFramebuffer[ot][dt],b,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else xt(N.__webglFramebuffer[ot],b,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ot=0,dt=j.length;ot<dt;ot++){let Xt=j[ot],$=n.get(Xt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),Ot(i.TEXTURE_2D,Xt),xt(N.__webglFramebuffer,b,Xt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Xt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ot(ot,A),A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)xt(N.__webglFramebuffer[dt],b,A,i.COLOR_ATTACHMENT0,ot,dt);else xt(N.__webglFramebuffer,b,A,i.COLOR_ATTACHMENT0,ot,0);g(A)&&f(ot),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Wt(b){let A=b.textures;for(let N=0,Z=A.length;N<Z;N++){let j=A[N];if(g(j)){let X=M(b),Ct=n.get(j).__webglTexture;e.bindTexture(X,Ct),f(X),e.unbindTexture()}}}let fe=[],L=[];function ke(b){if(b.samples>0){if(Ht(b)===!1){let A=b.textures,N=b.width,Z=b.height,j=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(b),ot=A.length>1;if(ot)for(let dt=0;dt<A.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let dt=0;dt<A.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Xt=n.get(A[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,j,i.NEAREST),c===!0&&(fe.length=0,L.length=0,fe.push(i.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(X),L.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<A.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Xt=n.get(A[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let A=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function kt(b){return Math.min(s.maxSamples,b.samples)}function Ht(b){let A=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function _t(b){let A=a.render.frame;h.get(b)!==A&&(h.set(b,A),b.update())}function ae(b,A){let N=b.colorSpace,Z=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Hi&&N!==Un&&(Yt.getTransfer(N)===Kt?(Z!==$e||j!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),A}function It(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=H,this.rebindTextures=qt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ht}function Eg(i,t){function e(n,s=Un){let r,a=Yt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return i.BYTE;if(n===ul)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===fs)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===pl)return i.RGB;if(n===$e)return i.RGBA;if(n===gl)return i.LUMINANCE;if(n===ml)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Al)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===Ys)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ia||n===_a||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Sa)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ta||n===Va||n===Ra||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Ba||n===za||n===Oa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===ka||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zs)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===Ga||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ho=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ae=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`,uo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:Tg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fo=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,x=new uo,g=e.getContextAttributes(),f=null,M=null,I=[],y=[],U=new Nt,S=null,w=new Ee;w.viewport=new te;let D=new Ee;D.viewport=new te;let _=[w,D],v=new ho,E=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=I[Y];return nt===void 0&&(nt=new cs,I[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=I[Y];return nt===void 0&&(nt=new cs,I[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=I[Y];return nt===void 0&&(nt=new cs,I[Y]=nt),nt.getHandSpace()};function z(Y){let nt=y.indexOf(Y.inputSource);if(nt===-1)return;let xt=I[nt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,l||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<I.length;Y++){let nt=y[Y];nt!==null&&(y[Y]=null,I[Y].disconnect(nt))}E=null,q=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Mn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,xt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?zi:Pi,xt=g.stencil?Bi:ri);let Et={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Mn(d.textureWidth,d.textureHeight,{format:$e,type:_n,depthTexture:new or(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(Y){for(let nt=0;nt<Y.removed.length;nt++){let xt=Y.removed[nt],at=y.indexOf(xt);at>=0&&(y[at]=null,I[at].disconnect(xt))}for(let nt=0;nt<Y.added.length;nt++){let xt=Y.added[nt],at=y.indexOf(xt);if(at===-1){for(let Pt=0;Pt<I.length;Pt++)if(Pt>=y.length){y.push(xt),at=Pt;break}else if(y[Pt]===null){y[Pt]=xt,at=Pt;break}if(at===-1)break}let Et=I[at];Et&&Et.connect(xt)}}let W=new P,et=new P;function H(Y,nt,xt){W.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(xt.matrixWorld);let at=W.distanceTo(et),Et=nt.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,qt=Et[14]/(Et[10]-1),he=Et[14]/(Et[10]+1),Wt=(Et[9]+1)/Et[5],fe=(Et[9]-1)/Et[5],L=(Et[8]-1)/Et[0],ke=(Pt[8]+1)/Pt[0],kt=qt*L,Ht=qt*ke,_t=at/(-L+ke),ae=_t*-L;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(_t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let It=qt+_t,b=he+_t,A=kt-ae,N=Ht+(at-ae),Z=Wt*he/b*It,j=fe*he/b*It;Y.projectionMatrix.makePerspective(A,N,Z,j,It,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,xt=Y.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),v.near=D.near=w.near=nt,v.far=D.far=w.far=xt,(E!==v.near||q!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,q=v.far),w.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,v.layers.mask=w.layers.mask|D.layers.mask;let at=Y.parent,Et=v.cameras;rt(v,at);for(let Pt=0;Pt<Et.length;Pt++)rt(Et[Pt],at);Et.length===2?H(v,w,D):v.projectionMatrix.copy(w.projectionMatrix),ut(Y,v,at)};function ut(Y,nt,xt){xt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ja*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let yt=null;function Ot(Y,nt){if(h=nt.getViewerPose(l||a),m=nt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let at=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Pt=0;Pt<xt.length;Pt++){let qt=xt[Pt],he=null;if(p!==null)he=p.getViewport(qt);else{let fe=u.getViewSubImage(d,qt);he=fe.viewport,Pt===0&&(t.setRenderTargetTextures(M,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(M))}let Wt=_[Pt];Wt===void 0&&(Wt=new Ee,Wt.layers.enable(Pt),Wt.viewport=new te,_[Pt]=Wt),Wt.matrix.fromArray(qt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(qt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Wt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Pt=u.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,s.renderState)}}for(let xt=0;xt<I.length;xt++){let at=y[xt],Et=I[xt];at!==null&&Et!==void 0&&Et.update(at,nt,l||a)}yt&&yt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ee=new Ml;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}},Kn=new cn,Rg=new re;function Pg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,_l(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,I,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,M,I):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===De&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===De&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),I=M.envMap,y=M.envMapRotation;I&&(g.envMap.value=I,Kn.copy(y),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),g.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Kn)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,M,I){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=I*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,I){let y=I.program;n.uniformBlockBinding(M,y)}function l(M,I){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",g));let U=I.program;n.updateUBOMapping(M,U);let S=t.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){let I=u();M.__bindingPointIndex=I;let y=i.createBuffer(),U=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let I=s[M.id],y=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,w=y.length;S<w;S++){let D=Array.isArray(y[S])?y[S]:[y[S]];for(let _=0,v=D.length;_<v;_++){let E=D[_];if(p(E,S,_,U)===!0){let q=E.__offset,z=Array.isArray(E.value)?E.value:[E.value],G=0;for(let Q=0;Q<z.length;Q++){let W=z[Q],et=x(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,q+G,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,G),G+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,I,y,U){let S=M.value,w=I+"_"+y;if(U[w]===void 0)return typeof S=="number"||typeof S=="boolean"?U[w]=S:U[w]=S.clone(),!0;{let D=U[w];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return U[w]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function m(M){let I=M.uniforms,y=0,U=16;for(let w=0,D=I.length;w<D;w++){let _=Array.isArray(I[w])?I[w]:[I[w]];for(let v=0,E=_.length;v<E;v++){let q=_[v],z=Array.isArray(q.value)?q.value:[q.value];for(let G=0,Q=z.length;G<Q;G++){let W=z[G],et=x(W),H=y%U,rt=H%et.boundary,ut=H+rt;y+=rt,ut!==0&&U-ut<et.storage&&(y+=U-ut),q.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=et.storage}}}let S=y%U;return S>0&&(y+=U-S),M.__size=y,M.__cache={},this}function x(M){let I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),I}function g(M){let I=M.target;I.removeEventListener("dispose",g);let y=a.indexOf(I.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var cr=class{constructor(t={}){let{canvas:e=Nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,M=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=zn,this.toneMappingExposure=1;let y=this,U=!1,S=0,w=0,D=null,_=-1,v=null,E=new te,q=new te,z=null,G=new zt(0),Q=0,W=e.width,et=e.height,H=1,rt=null,ut=null,yt=new te(0,0,W,et),Ot=new te(0,0,W,et),ee=!1,Y=new hs,nt=!1,xt=!1,at=new re,Et=new re,Pt=new P,qt=new te,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function fe(){return D===null?H:1}let L=n;function ke(C,V){return e.getContext(C,V)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),L===null){let V="webgl2";if(L=ke(V,C),L===null)throw ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let kt,Ht,_t,ae,It,b,A,N,Z,j,X,Ct,ot,dt,Xt,$,ft,bt,Tt,pt,Gt,Ft,ie,T;function st(){kt=new Jf(L),kt.init(),Ft=new Eg(L,kt),Ht=new Hf(L,kt,t,Ft),_t=new Mg(L,kt),Ht.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),ae=new Kf(L),It=new ug,b=new Sg(L,kt,_t,It,Ht,Ft,ae),A=new Wf(y),N=new Zf(y),Z=new su(L),ie=new qf(L,Z),j=new Qf(L,Z,ae,ie),X=new tp(L,j,Z,ae),Tt=new $f(L,Ht,b),$=new Gf(It),Ct=new hg(y,A,N,kt,Ht,ie,$),ot=new Pg(y,It),dt=new fg,Xt=new Cg(kt),bt=new Of(y,A,N,_t,X,p,c),ft=new Ig(y,X,Ht),T=new Lg(L,ae,Ht,_t),pt=new kf(L,kt,ae),Gt=new jf(L,kt,ae),ae.programs=Ct.programs,y.capabilities=Ht,y.extensions=kt,y.properties=It,y.renderLists=dt,y.shadowMap=ft,y.state=_t,y.info=ae}st();let k=new fo(y,L);this.xr=k,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=kt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=kt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(W,et,!1))},this.getSize=function(C){return C.set(W,et)},this.setSize=function(C,V,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,et=V,e.width=Math.floor(C*H),e.height=Math.floor(V*H),F===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(W*H,et*H).floor()},this.setDrawingBufferSize=function(C,V,F){W=C,et=V,H=F,e.width=Math.floor(C*F),e.height=Math.floor(V*F),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,V,F,B){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,V,F,B),_t.viewport(E.copy(yt).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Ot)},this.setScissor=function(C,V,F,B){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,V,F,B),_t.scissor(q.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){_t.setScissorTest(ee=C)},this.setOpaqueSort=function(C){rt=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(C=!0,V=!0,F=!0){let B=0;if(C){let R=!1;if(D!==null){let tt=D.texture.format;R=tt===No||tt===Uo||tt===Do}if(R){let tt=D.texture.type,lt=tt===_n||tt===ri||tt===ls||tt===Bi||tt===Ro||tt===Po,gt=bt.getClearColor(),mt=bt.getClearAlpha(),Vt=gt.r,Dt=gt.g,At=gt.b;lt?(m[0]=Vt,m[1]=Dt,m[2]=At,m[3]=mt,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Vt,x[1]=Dt,x[2]=At,x[3]=mt,L.clearBufferiv(L.COLOR,0,x))}else B|=L.COLOR_BUFFER_BIT}V&&(B|=L.DEPTH_BUFFER_BIT),F&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Xt.dispose(),It.dispose(),A.dispose(),N.dispose(),X.dispose(),ie.dispose(),T.dispose(),Ct.dispose(),k.dispose(),k.removeEventListener("sessionstart",Jo),k.removeEventListener("sessionend",Qo),Xn.stop()};function J(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let C=ae.autoReset,V=ft.enabled,F=ft.autoUpdate,B=ft.needsUpdate,R=ft.type;st(),ae.autoReset=C,ft.enabled=V,ft.autoUpdate=F,ft.needsUpdate=B,ft.type=R}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){let V=C.target;V.removeEventListener("dispose",Lt),ue(V)}function ue(C){Me(C),It.remove(C)}function Me(C){let V=It.get(C).programs;V!==void 0&&(V.forEach(function(F){Ct.releaseProgram(F)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,F,B,R,tt){V===null&&(V=he);let lt=R.isMesh&&R.matrixWorld.determinant()<0,gt=Wl(C,V,F,B,R);_t.setMaterial(B,lt);let mt=F.index,Vt=1;if(B.wireframe===!0){if(mt=j.getWireframeAttribute(F),mt===void 0)return;Vt=2}let Dt=F.drawRange,At=F.attributes.position,Zt=Dt.start*Vt,se=(Dt.start+Dt.count)*Vt;tt!==null&&(Zt=Math.max(Zt,tt.start*Vt),se=Math.min(se,(tt.start+tt.count)*Vt)),mt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,mt.count)):At!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,At.count));let oe=se-Zt;if(oe<0||oe===1/0)return;ie.setup(R,B,gt,F,mt);let Re,Jt=pt;if(mt!==null&&(Re=Z.get(mt),Jt=Gt,Jt.setIndex(Re)),R.isMesh)B.wireframe===!0?(_t.setLineWidth(B.wireframeLinewidth*fe()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(R.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),_t.setLineWidth(vt*fe()),R.isLineSegments?Jt.setMode(L.LINES):R.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else R.isPoints?Jt.setMode(L.POINTS):R.isSprite&&Jt.setMode(L.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Jt.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let vt=R._multiDrawStarts,fn=R._multiDrawCounts,Qt=R._multiDrawCount,Je=mt?Z.get(mt).bytesPerElement:1,ui=It.get(B).currentProgram.getUniforms();for(let Be=0;Be<Qt;Be++)ui.setValue(L,"_gl_DrawID",Be),Jt.render(vt[Be]/Je,fn[Be])}else if(R.isInstancedMesh)Jt.renderInstances(Zt,oe,R.count);else if(F.isInstancedBufferGeometry){let vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,fn=Math.min(F.instanceCount,vt);Jt.renderInstances(Zt,oe,fn)}else Jt.render(Zt,oe)};function jt(C,V,F){C.transparent===!0&&C.side===We&&C.forceSinglePass===!1?(C.side=De,C.needsUpdate=!0,As(C,V,F),C.side=qn,C.needsUpdate=!0,As(C,V,F),C.side=We):As(C,V,F)}this.compile=function(C,V,F=null){F===null&&(F=C),f=Xt.get(F),f.init(V),I.push(f),F.traverseVisible(function(R){R.isLight&&R.layers.test(V.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),C!==F&&C.traverseVisible(function(R){R.isLight&&R.layers.test(V.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights();let B=new Set;return C.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let tt=R.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let gt=tt[lt];jt(gt,F,R),B.add(gt)}else jt(tt,F,R),B.add(tt)}),I.pop(),f=null,B},this.compileAsync=function(C,V,F=null){let B=this.compile(C,V,F);return new Promise(R=>{function tt(){if(B.forEach(function(lt){It.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){R(C);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ze=null;function dn(C){Ze&&Ze(C)}function Jo(){Xn.stop()}function Qo(){Xn.start()}let Xn=new Ml;Xn.setAnimationLoop(dn),typeof self!="undefined"&&Xn.setContext(self),this.setAnimationLoop=function(C){Ze=C,k.setAnimationLoop(C),C===null?Xn.stop():Xn.start()},k.addEventListener("sessionstart",Jo),k.addEventListener("sessionend",Qo),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(V),V=k.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,D),f=Xt.get(C,I.length),f.init(V),I.push(f),Et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(Et),xt=this.localClippingEnabled,nt=$.init(this.clippingPlanes,xt),g=dt.get(C,M.length),g.init(),M.push(g),k.enabled===!0&&k.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&wr(tt,V,-1/0,y.sortObjects)}wr(C,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(rt,ut),Wt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Wt&&bt.addToRenderList(g,C),this.info.render.frame++,nt===!0&&$.beginShadows();let F=f.state.shadowsArray;ft.render(F,C,V),nt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,R=g.transmissive;if(f.setupLights(),V.isArrayCamera){let tt=V.cameras;if(R.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){let mt=tt[lt];Ko(B,R,C,mt)}Wt&&bt.render(C);for(let lt=0,gt=tt.length;lt<gt;lt++){let mt=tt[lt];jo(g,C,mt,mt.viewport)}}else R.length>0&&Ko(B,R,C,V),Wt&&bt.render(C),jo(g,C,V);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(y,C,V),ie.resetDefaultState(),_=-1,v=null,I.pop(),I.length>0?(f=I[I.length-1],nt===!0&&$.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function wr(C,V,F,B){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)F=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){B&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Et);let lt=X.update(C),gt=C.material;gt.visible&&g.push(C,lt,gt,F,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){let lt=X.update(C),gt=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),qt.copy(lt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Et)),Array.isArray(gt)){let mt=lt.groups;for(let Vt=0,Dt=mt.length;Vt<Dt;Vt++){let At=mt[Vt],Zt=gt[At.materialIndex];Zt&&Zt.visible&&g.push(C,lt,Zt,F,qt.z,At)}}else gt.visible&&g.push(C,lt,gt,F,qt.z,null)}}let tt=C.children;for(let lt=0,gt=tt.length;lt<gt;lt++)wr(tt[lt],V,F,B)}function jo(C,V,F,B){let R=C.opaque,tt=C.transmissive,lt=C.transparent;f.setupLightsView(F),nt===!0&&$.setGlobalState(y.clippingPlanes,F),B&&_t.viewport(E.copy(B)),R.length>0&&ms(R,V,F),tt.length>0&&ms(tt,V,F),lt.length>0&&ms(lt,V,F),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ko(C,V,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Mn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?fs:_n,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let tt=f.state.transmissionRenderTarget[B.id],lt=B.viewport||E;tt.setSize(lt.z,lt.w);let gt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(G),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&bt.render(F);let mt=y.toneMapping;y.toneMapping=zn;let Vt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),nt===!0&&$.setGlobalState(y.clippingPlanes,B),ms(C,F,B),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let At=0,Zt=V.length;At<Zt;At++){let se=V[At],oe=se.object,Re=se.geometry,Jt=se.material,vt=se.group;if(Jt.side===We&&oe.layers.test(B.layers)){let fn=Jt.side;Jt.side=De,Jt.needsUpdate=!0,$o(oe,F,B,Re,Jt,vt),Jt.side=fn,Jt.needsUpdate=!0,Dt=!0}}Dt===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}y.setRenderTarget(gt),y.setClearColor(G,Q),Vt!==void 0&&(B.viewport=Vt),y.toneMapping=mt}function ms(C,V,F){let B=V.isScene===!0?V.overrideMaterial:null;for(let R=0,tt=C.length;R<tt;R++){let lt=C[R],gt=lt.object,mt=lt.geometry,Vt=B===null?lt.material:B,Dt=lt.group;gt.layers.test(F.layers)&&$o(gt,V,F,mt,Vt,Dt)}}function $o(C,V,F,B,R,tt){C.onBeforeRender(y,V,F,B,R,tt),C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),R.onBeforeRender(y,V,F,B,C,tt),R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=De,R.needsUpdate=!0,y.renderBufferDirect(F,V,B,R,C,tt),R.side=qn,R.needsUpdate=!0,y.renderBufferDirect(F,V,B,R,C,tt),R.side=We):y.renderBufferDirect(F,V,B,R,C,tt),C.onAfterRender(y,V,F,B,R,tt)}function As(C,V,F){V.isScene!==!0&&(V=he);let B=It.get(C),R=f.state.lights,tt=f.state.shadowsArray,lt=R.state.version,gt=Ct.getParameters(C,R.state,tt,V,F),mt=Ct.getProgramCacheKey(gt),Vt=B.programs;B.environment=C.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(C.isMeshStandardMaterial?N:A).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Vt===void 0&&(C.addEventListener("dispose",Lt),Vt=new Map,B.programs=Vt);let Dt=Vt.get(mt);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===lt)return ec(C,gt),Dt}else gt.uniforms=Ct.getUniforms(C),C.onBeforeCompile(gt,y),Dt=Ct.acquireProgram(gt,mt),Vt.set(mt,Dt),B.uniforms=gt.uniforms;let At=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(At.clippingPlanes=$.uniform),ec(C,gt),B.needsLights=Yl(C),B.lightsStateVersion=lt,B.needsLights&&(At.ambientLightColor.value=R.state.ambient,At.lightProbe.value=R.state.probe,At.directionalLights.value=R.state.directional,At.directionalLightShadows.value=R.state.directionalShadow,At.spotLights.value=R.state.spot,At.spotLightShadows.value=R.state.spotShadow,At.rectAreaLights.value=R.state.rectArea,At.ltc_1.value=R.state.rectAreaLTC1,At.ltc_2.value=R.state.rectAreaLTC2,At.pointLights.value=R.state.point,At.pointLightShadows.value=R.state.pointShadow,At.hemisphereLights.value=R.state.hemi,At.directionalShadowMap.value=R.state.directionalShadowMap,At.directionalShadowMatrix.value=R.state.directionalShadowMatrix,At.spotShadowMap.value=R.state.spotShadowMap,At.spotLightMatrix.value=R.state.spotLightMatrix,At.spotLightMap.value=R.state.spotLightMap,At.pointShadowMap.value=R.state.pointShadowMap,At.pointShadowMatrix.value=R.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function tc(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Di.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function ec(C,V){let F=It.get(C);F.outputColorSpace=V.outputColorSpace,F.batching=V.batching,F.batchingColor=V.batchingColor,F.instancing=V.instancing,F.instancingColor=V.instancingColor,F.instancingMorph=V.instancingMorph,F.skinning=V.skinning,F.morphTargets=V.morphTargets,F.morphNormals=V.morphNormals,F.morphColors=V.morphColors,F.morphTargetsCount=V.morphTargetsCount,F.numClippingPlanes=V.numClippingPlanes,F.numIntersection=V.numClipIntersection,F.vertexAlphas=V.vertexAlphas,F.vertexTangents=V.vertexTangents,F.toneMapping=V.toneMapping}function Wl(C,V,F,B,R){V.isScene!==!0&&(V=he),b.resetTextureUnits();let tt=V.fog,lt=B.isMeshStandardMaterial?V.environment:null,gt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Hi,mt=(B.isMeshStandardMaterial?N:A).get(B.envMap||lt),Vt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Dt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!F.morphAttributes.position,Zt=!!F.morphAttributes.normal,se=!!F.morphAttributes.color,oe=zn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(oe=y.toneMapping);let Re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Jt=Re!==void 0?Re.length:0,vt=It.get(B),fn=f.state.lights;if(nt===!0&&(xt===!0||C!==v)){let He=C===v&&B.id===_;$.setState(B,C,He)}let Qt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==fn.state.version||vt.outputColorSpace!==gt||R.isBatchedMesh&&vt.batching===!1||!R.isBatchedMesh&&vt.batching===!0||R.isBatchedMesh&&vt.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&vt.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&vt.instancing===!1||!R.isInstancedMesh&&vt.instancing===!0||R.isSkinnedMesh&&vt.skinning===!1||!R.isSkinnedMesh&&vt.skinning===!0||R.isInstancedMesh&&vt.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&vt.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&vt.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&vt.instancingMorph===!1&&R.morphTexture!==null||vt.envMap!==mt||B.fog===!0&&vt.fog!==tt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==$.numPlanes||vt.numIntersection!==$.numIntersection)||vt.vertexAlphas!==Vt||vt.vertexTangents!==Dt||vt.morphTargets!==At||vt.morphNormals!==Zt||vt.morphColors!==se||vt.toneMapping!==oe||vt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,vt.__version=B.version);let Je=vt.currentProgram;Qt===!0&&(Je=As(B,V,R));let ui=!1,Be=!1,Zi=!1,ce=Je.getUniforms(),nn=vt.uniforms;if(_t.useProgram(Je.program)&&(ui=!0,Be=!0,Zi=!0),B.id!==_&&(_=B.id,Be=!0),ui||v!==C){_t.buffers.depth.getReversed()?(at.copy(C.projectionMatrix),Bh(at),zh(at),ce.setValue(L,"projectionMatrix",at)):ce.setValue(L,"projectionMatrix",C.projectionMatrix),ce.setValue(L,"viewMatrix",C.matrixWorldInverse);let En=ce.map.cameraPosition;En!==void 0&&En.setValue(L,Pt.setFromMatrixPosition(C.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ce.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Be=!0,Zi=!0)}if(R.isSkinnedMesh){ce.setOptional(L,R,"bindMatrix"),ce.setOptional(L,R,"bindMatrixInverse");let He=R.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ce.setValue(L,"boneTexture",He.boneTexture,b))}R.isBatchedMesh&&(ce.setOptional(L,R,"batchingTexture"),ce.setValue(L,"batchingTexture",R._matricesTexture,b),ce.setOptional(L,R,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",R._indirectTexture,b),ce.setOptional(L,R,"batchingColorTexture"),R._colorsTexture!==null&&ce.setValue(L,"batchingColorTexture",R._colorsTexture,b));let Ji=F.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Tt.update(R,F,Je),(Be||vt.receiveShadow!==R.receiveShadow)&&(vt.receiveShadow=R.receiveShadow,ce.setValue(L,"receiveShadow",R.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(nn.envMap.value=mt,nn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),Be&&(ce.setValue(L,"toneMappingExposure",y.toneMappingExposure),vt.needsLights&&Xl(nn,Zi),tt&&B.fog===!0&&ot.refreshFogUniforms(nn,tt),ot.refreshMaterialUniforms(nn,B,H,et,f.state.transmissionRenderTarget[C.id]),Di.upload(L,tc(vt),nn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Di.upload(L,tc(vt),nn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ce.setValue(L,"center",R.center),ce.setValue(L,"modelViewMatrix",R.modelViewMatrix),ce.setValue(L,"normalMatrix",R.normalMatrix),ce.setValue(L,"modelMatrix",R.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let He=B.uniformsGroups;for(let En=0,wn=He.length;En<wn;En++){let nc=He[En];T.update(nc,Je),T.bind(nc,Je)}}return Je}function Xl(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Yl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,V,F){It.get(C.texture).__webglTexture=V,It.get(C.depthTexture).__webglTexture=F;let B=It.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let F=It.get(C);F.__webglFramebuffer=V,F.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,F=0){D=C,S=V,w=F;let B=!0,R=null,tt=!1,lt=!1;if(C){let mt=It.get(C);if(mt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(mt.__hasExternalTextures)b.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let At=C.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&It.has(At)&&(C.width!==At.image.width||C.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}let Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(lt=!0);let Dt=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Dt[V])?R=Dt[V][F]:R=Dt[V],tt=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?R=It.get(C).__webglMultisampledFramebuffer:Array.isArray(Dt)?R=Dt[F]:R=Dt,E.copy(C.viewport),q.copy(C.scissor),z=C.scissorTest}else E.copy(yt).multiplyScalar(H).floor(),q.copy(Ot).multiplyScalar(H).floor(),z=ee;if(_t.bindFramebuffer(L.FRAMEBUFFER,R)&&B&&_t.drawBuffers(C,R),_t.viewport(E),_t.scissor(q),_t.setScissorTest(z),tt){let mt=It.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,mt.__webglTexture,F)}else if(lt){let mt=It.get(C.texture),Vt=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,Vt)}_=-1},this.readRenderTargetPixels=function(C,V,F,B,R,tt,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){_t.bindFramebuffer(L.FRAMEBUFFER,gt);try{let mt=C.texture,Vt=mt.format,Dt=mt.type;if(!Ht.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-B&&F>=0&&F<=C.height-R&&L.readPixels(V,F,B,R,Ft.convert(Vt),Ft.convert(Dt),tt)}finally{let mt=D!==null?It.get(D).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(C,V,F,B,R,tt,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let mt=C.texture,Vt=mt.format,Dt=mt.type;if(!Ht.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-B&&F>=0&&F<=C.height-R){_t.bindFramebuffer(L.FRAMEBUFFER,gt);let At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,tt.byteLength,L.STREAM_READ),L.readPixels(V,F,B,R,Ft.convert(Vt),Ft.convert(Dt),0);let Zt=D!==null?It.get(D).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,Zt);let se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fh(L,se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,tt),L.deleteBuffer(At),L.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,F=0){C.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-F),R=Math.floor(C.image.width*B),tt=Math.floor(C.image.height*B),lt=V!==null?V.x:0,gt=V!==null?V.y:0;b.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,lt,gt,R,tt),_t.unbindTexture()},this.copyTextureToTexture=function(C,V,F=null,B=null,R=0){C.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],V=arguments[2],R=arguments[3]||0,F=null);let tt,lt,gt,mt,Vt,Dt,At,Zt,se,oe=C.isCompressedTexture?C.mipmaps[R]:C.image;F!==null?(tt=F.max.x-F.min.x,lt=F.max.y-F.min.y,gt=F.isBox3?F.max.z-F.min.z:1,mt=F.min.x,Vt=F.min.y,Dt=F.isBox3?F.min.z:0):(tt=oe.width,lt=oe.height,gt=oe.depth||1,mt=0,Vt=0,Dt=0),B!==null?(At=B.x,Zt=B.y,se=B.z):(At=0,Zt=0,se=0);let Re=Ft.convert(V.format),Jt=Ft.convert(V.type),vt;V.isData3DTexture?(b.setTexture3D(V,0),vt=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),vt=L.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let fn=L.getParameter(L.UNPACK_ROW_LENGTH),Qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=L.getParameter(L.UNPACK_SKIP_PIXELS),ui=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt);let Zi=C.isDataArrayTexture||C.isData3DTexture,ce=V.isDataArrayTexture||V.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let nn=It.get(C),Ji=It.get(V),He=It.get(nn.__renderTarget),En=It.get(Ji.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,He.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let wn=0;wn<gt;wn++)Zi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.get(C).__webglTexture,R,Dt+wn),C.isDepthTexture?(ce&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.get(V).__webglTexture,R,se+wn),L.blitFramebuffer(mt,Vt,tt,lt,At,Zt,tt,lt,L.DEPTH_BUFFER_BIT,L.NEAREST)):ce?L.copyTexSubImage3D(vt,R,At,Zt,se+wn,mt,Vt,tt,lt):L.copyTexSubImage2D(vt,R,At,Zt,se+wn,mt,Vt,tt,lt);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ce?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(vt,R,At,Zt,se,tt,lt,gt,Re,Jt,oe.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,R,At,Zt,se,tt,lt,gt,Re,oe.data):L.texSubImage3D(vt,R,At,Zt,se,tt,lt,gt,Re,Jt,oe):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,R,At,Zt,tt,lt,Re,Jt,oe.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,R,At,Zt,oe.width,oe.height,Re,oe.data):L.texSubImage2D(L.TEXTURE_2D,R,At,Zt,tt,lt,Re,Jt,oe);L.pixelStorei(L.UNPACK_ROW_LENGTH,fn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),L.pixelStorei(L.UNPACK_SKIP_ROWS,ui),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),R===0&&V.generateMipmaps&&L.generateMipmap(vt),_t.unbindTexture()},this.copyTextureToTexture3D=function(C,V,F=null,B=null,R=0){return C.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,C=arguments[2],V=arguments[3],R=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,V,F,B,R)},this.initRenderTarget=function(C){It.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),_t.unbindTexture()},this.resetState=function(){S=0,w=0,D=null,_t.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},po=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Te=new P,ur=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wn=class extends Gn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Si,ts=new P,Ei=new P,wi=new P,Ti=new Nt,es=new Nt,Tl=new re,zs=new P,ns=new P,Os=new P,el=new Nt,ra=new Nt,nl=new Nt,ci=class extends Ie{constructor(t=new Wn){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new Xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new po(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new ur(n,3,0,!1)),Si.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=Si,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Tl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;qs(zs.set(-.5,-.5,0),wi,a,Ei,s,r),qs(ns.set(.5,-.5,0),wi,a,Ei,s,r),qs(Os.set(.5,.5,0),wi,a,Ei,s,r),el.set(0,0),ra.set(1,0),nl.set(1,1);let o=t.ray.intersectTriangle(zs,ns,Os,!1,ts);if(o===null&&(qs(ns.set(-.5,.5,0),wi,a,Ei,s,r),ra.set(0,1),o=t.ray.intersectTriangle(zs,Os,ns,!1,ts),o===null))return;let c=t.ray.origin.distanceTo(ts);c<t.near||c>t.far||e.push({distance:c,point:ts.clone(),uv:Nn.getInterpolation(ts,zs,ns,Os,el,ra,nl,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function qs(i,t,e,n,s,r){Ti.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(es.x=r*Ti.x-s*Ti.y,es.y=s*Ti.x+r*Ti.y):es.copy(Ti),i.copy(t),i.x+=es.x,i.y+=es.y,i.applyMatrix4(Tl)}var go=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=qe,h=qe,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new re,il=new re,ks=[],sl=new bn,Dg=new re,is=new me,ss=new ai,fr=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),sl.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(sl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),ss.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),t.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),il.multiplyMatrices(n,Vi),is.matrixWorld=il,is.raycast(t,ks);for(let a=0,o=ks.length;a<o;a++){let c=ks[a];c.instanceId=r,c.object=this,e.push(c)}ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(s*this.count),s,this.count,Lo,on));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qi=class extends Ne{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pr=class i extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new P,h=new Nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gr=class i extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,x=[],g=n/2,f=0;M(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function M(){let y=new P,U=new P,S=0,w=(e-t)/n;for(let D=0;D<=r;D++){let _=[],v=D/r,E=v*(e-t)+t;for(let q=0;q<=s;q++){let z=q/s,G=z*c+o,Q=Math.sin(G),W=Math.cos(G);U.x=E*Q,U.y=-v*n+g,U.z=E*W,u.push(U.x,U.y,U.z),y.set(Q,w,W).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-v),_.push(m++)}x.push(_)}for(let D=0;D<s;D++)for(let _=0;_<r;_++){let v=x[_][D],E=x[_+1][D],q=x[_+1][D+1],z=x[_][D+1];(t>0||_!==0)&&(h.push(v,E,z),S+=3),(e>0||_!==r-1)&&(h.push(E,q,z),S+=3)}l.addGroup(f,S,0),f+=S}function I(y){let U=m,S=new Nt,w=new P,D=0,_=y===!0?t:e,v=y===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,g*v,0),d.push(0,v,0),p.push(.5,.5),m++;let E=m;for(let q=0;q<=s;q++){let G=q/s*c+o,Q=Math.cos(G),W=Math.sin(G);w.x=_*W,w.y=g*v,w.z=_*Q,u.push(w.x,w.y,w.z),d.push(0,v,0),S.x=Q*.5+.5,S.y=W*.5*v+.5,p.push(S.x,S.y),m++}for(let q=0;q<s;q++){let z=U+q,G=E+q;y===!0?h.push(G,G+1,z):h.push(G+1,G,z),D+=3}l.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var mr=class i extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new P,m=new Nt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let f=r+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let f=0;f<n;f++){let M=f+g,I=M,y=M+n+1,U=M+n+2,S=M+1;o.push(I,y,S),o.push(y,U,S)}}this.setIndex(o),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ar=class i extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let M=[],I=f/n,y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let U=0;U<=e;U++){let S=U/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+I*o),u.y=t*Math.cos(a+I*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+I*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+y,1-I),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let I=h[f][M+1],y=h[f][M],U=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&p.push(I,y,S),(f!==n-1||c<Math.PI)&&p.push(y,U,S)}this.setIndex(p),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var us=class extends Gn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Hs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ug(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mo=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:r=t,o=2*e-n;break;case cc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oc:a=t,c=2*n-e;break;case cc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,f=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,I=(-1-p)*g+(1.5+p)*x+.5*m,y=p*g-p*x;for(let U=0;U!==o;++U)r[U]=f*a[h+U]+M*a[l+U]+I*a[c+U]+y*a[u+U];return r}},Ao=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},xo=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Vr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Ug(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Ya;var li=class extends tn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Js;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends tn{};Co.prototype.ValueTypeName="color";var vo=class extends tn{};vo.prototype.ValueTypeName="number";var yo=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},xr=class extends tn{InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends tn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Js;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends tn{};Io.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Ng=new _o,Mo=class{constructor(t){this.manager=t!==void 0?t:Ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Cr=class extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},aa=new re,rl=new P,al=new P,vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ol=new re,rs=new P,oa=new P,bo=class extends vr{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(rs),oa.copy(n.position),oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oa),n.updateMatrixWorld(),s.makeTranslation(-rs.x,-rs.y,-rs.z),ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol)}},yr=class extends ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},So=class extends vr{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new So}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Bo="\\[\\]\\.:\\/",Fg=new RegExp("["+Bo+"]","g"),zo="[^"+Bo+"]",Bg="[^"+Bo.replace("\\.","")+"]",zg=/((?:WC+[\/:])*)/.source.replace("WC",zo),Og=/(WCOD+)?/.source.replace("WCOD",Bg),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zo),kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zo),Hg=new RegExp("^"+zg+Og+qg+kg+"$"),Gg=["material","materials","bones","map"],Eo=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(t){let e=Hg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Eo;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);var Rt={W:34,L:78,BOX_Z:58,SHOOT_Z:63,GOAL_W:14,GOAL_H:3.6,GOAL_D:3.2},Xg=3,Vl=9.5,Yg=.75,Zg=1.35,Ye=16.2,Rl=.3,ps=1.15,Jg=.5,Oo=100,qo=9,ko=21,Pl=.5,gs=ko*Pl,Ho=3.2,Qg=8.5,jg={nutmeg:{heat:34,score:200},onetwo:{heat:28,score:150},dodge:{heat:16,score:60},burn:{heat:0,score:100}},hn=[{id:1,ar:"\u062A\u0633\u062E\u064A\u0646",en:"Warm Up",defenders:2,mates:0,chase:3.6,windup:1.1,cooldown:3.4,aggro:13,reach:2.3,sway:2,tspeed:1.3,trickGoal:2,par:22},{id:2,ar:"\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629",en:"One-Two",defenders:3,mates:1,chase:4.2,windup:.95,cooldown:3,aggro:15,reach:2.6,sway:2.4,tspeed:1.6,trickGoal:3,par:26},{id:3,ar:"\u0644\u064A\u0644\u0629 \u0627\u0644\u0643\u0623\u0633",en:"Cup Night",defenders:4,mates:2,chase:4.8,windup:.85,cooldown:2.6,aggro:17,reach:2.9,sway:2.8,tspeed:1.9,trickGoal:4,par:30},{id:4,ar:"\u0627\u0644\u0645\u062F\u0631\u062C \u0627\u0644\u0643\u0628\u064A\u0631",en:"Big Stand",defenders:5,mates:2,chase:5.3,windup:.75,cooldown:2.2,aggro:18,reach:3.2,sway:3.2,tspeed:2.3,trickGoal:5,par:34},{id:5,ar:"\u0646\u0647\u0627\u0626\u064A \u0627\u0644\u0623\u0628\u0637\u0627\u0644",en:"Champions Final",defenders:6,mates:3,chase:5.8,windup:.68,cooldown:1.9,aggro:20,reach:3.5,sway:3.6,tspeed:2.8,trickGoal:6,par:38},{id:6,ar:"\u0643\u0623\u0633 \u0627\u0644\u0623\u0633\u0627\u0637\u064A\u0631",en:"Legends Cup",defenders:7,mates:3,chase:6.1,windup:.64,cooldown:1.7,aggro:21,reach:3.7,sway:3.9,tspeed:3.1,trickGoal:7,par:42},{id:7,ar:"\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0639\u0627\u0644\u0645",en:"World Final",defenders:8,mates:4,chase:6.4,windup:.6,cooldown:1.55,aggro:22,reach:3.9,sway:4.2,tspeed:3.4,trickGoal:8,par:46}],Wi=[{id:"classic",price:0,ar:"\u0643\u0644\u0627\u0633\u064A\u0643",en:"Classic",base:16777215,patch:1974832,emissive:0,trail:16777215},{id:"flame",price:120,ar:"\u062C\u0645\u0631",en:"Ember",base:16742938,patch:16765498,emissive:8399360,trail:16742938},{id:"ice",price:200,ar:"\u062C\u0644\u064A\u062F",en:"Frost",base:14219007,patch:3836648,emissive:1063514,trail:10150143},{id:"gold",price:320,ar:"\u0630\u0647\u0628",en:"Gold",base:16765498,patch:12089856,emissive:8018432,trail:16771210}],ve=(i,t,e)=>i<t?t:i>e?e:i;function Kg(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Ll(i){let t=i&&typeof i=="object"?i:{},e=(a,o=0)=>Number.isFinite(Number(a))?Number(a):o,n=Array.isArray(t.owned)?t.owned.filter(a=>Wi.some(o=>o.id===a)):[];n.includes("classic")||n.unshift("classic");let s=Array.isArray(t.stars)?t.stars.slice(0,hn.length).map(a=>ve(Math.round(e(a)),0,3)):[];for(;s.length<hn.length;)s.push(0);let r=Array.isArray(t.best)?t.best.slice(0,5).map(a=>Math.max(0,Math.round(e(a)))):[];for(;r.length<5;)r.push(0);return{unlocked:ve(Math.max(Math.round(e(t.unlocked,1)),...s.map((a,o)=>a>0?o+2:1)),1,hn.length),stars:s,best:r,coins:Math.max(0,Math.round(e(t.coins))),owned:n,skin:n.includes(t.skin)?t.skin:"classic",muted:!!t.muted,goals:Math.max(0,Math.round(e(t.goals))),tricks:Math.max(0,Math.round(e(t.tricks)))}}function Dl(i,t){let e=Wi.find(n=>n.id===t);return!e||i.owned.includes(t)||i.coins<e.price?!1:(i.coins-=e.price,i.owned.push(t),i.skin=t,!0)}function Ul(i,t){return i.owned.includes(t)?(i.skin=t,!0):!1}var Sr=class{constructor({level:t=0,seed:e=1,easy:n=!1}={}){this.level=ve(Math.floor(t)||0,0,hn.length-1);let s=hn[this.level],r=n?{chase:.8,windup:1.35,cooldown:1.4,reach:.85,tspeed:.75}:{chase:1,windup:1,cooldown:1,reach:1,tspeed:1};this.def={...s,chase:s.chase*r.chase,windup:s.windup*r.windup,cooldown:s.cooldown*r.cooldown,reach:s.reach*r.reach,tspeed:s.tspeed*r.tspeed},this.easy=n,this.rand=Kg(this.level*977+31+e%7*13),this.mode="play",this.modeT=0,this.time=0,this.clock=0,this.input={jx:0,jy:0},this.ball={x:0,z:4,vx:0,vz:0,inv:1},this.lives=Xg,this.coins=0,this.reason=null,this.hintMate=!1,this.dummies=[],this.coinList=[],this.blockT=0,this.pass=null,this.shot=null,this.heat=0,this.cometT=0,this.lastTrick=-9,this.score=0,this.goals=0,this.stats={nutmegs:0,onetwos:0,dodges:0,burns:0,stolen:0,saves:0,tackles:0,blocked:0,coins:0},this.keeper={x:0,dir:0,diveTo:null},this.target={x:0,p:0},this.defenders=[],this.mates=[],this._build(),this.ev=null,this.log=[]}get tricks(){let t=this.stats;return t.nutmegs+t.onetwos+t.dodges+t.burns}get comet(){return this.cometT>0}get progress(){return this.mode==="shoot"||this.mode==="shot"||this.mode==="goal"||this.mode==="done"?1:ve(this.ball.z/Rt.BOX_Z,0,1)}reachNow(){return this.def.reach*(this.comet?.55:1)}_build(){let t=this.def,e=this.rand,n=t.defenders,s=16,r=Rt.BOX_Z-7;for(let c=0;c<n;c++){let l=s+(c+.5)*((r-s)/n),h=(c%2?1:-1)*(1.5+e()*7);this.defenders.push({id:c+1,x:h,z:l,x0:h,hx:0,hz:-1,state:"idle",t:0,cd:.8,lx:0,lz:-1,near:99,hit:!1,nutmegged:!1,pa:0,pb:0,wt:0,warned:!1,from:"idle"})}for(let c=0;c<t.mates;c++){let l=24+(c+.5)*((Rt.BOX_Z-30)/t.mates),h=0,u=-1;for(let d of[-10,-6,6,10,0]){let p=Math.min(...this.defenders.map(m=>Math.hypot(m.x-d,m.z-l)));p>u&&(u=p,h=d)}this.mates.push({id:c+1,x:h,z:l,state:"wait",t:0})}let a=2+this.level;for(let c=0;c<a;c++)for(let l=0;l<30;l++){let h=11+(c+e())*((Rt.BOX_Z-18)/a),u=(e()*2-1)*12.5;if(!(this.defenders.some(d=>Math.hypot(d.x-u,d.z-h)<4.5)||this.mates.some(d=>Math.hypot(d.x-u,d.z-h)<4.5))){this.dummies.push({x:u,z:h});break}}let o=3+Math.min(2,this.level);for(let c=0;c<o;c++){let l=c===0?8:14+c*((Rt.BOX_Z-24)/o)+e()*4,h=c===0?0:(e()*2-1)*9,u=(e()-.5)*.5;for(let d=0;d<6;d++){let p={x:ve(h+u*d*d*.3,-14,14),z:l+d*1.7,got:!1};this.dummies.some(m=>Math.hypot(m.x-p.x,m.z-p.z)<1.6)||this.coinList.push(p)}}}setInput(t,e){this.input.jx=ve(t||0,-1,1),this.input.jy=ve(e||0,-1,1)}emit(t,e={}){let n={type:t,...e};this.ev&&this.ev.push(n),this.log.push(n),this.log.length>200&&this.log.shift()}step(t){let e=[];this.ev=e;let n=Math.min(Math.max(t,0),.1);for(;n>1e-6;){let s=Math.min(n,.016666666666666666);this._sub(s),n-=s}return this.ev=null,e}_sub(t){switch(this.clock+=t,this.modeT+=t,this.mode){case"play":this.time+=t,this._ball(t),this._dummies(t),this._coins(),this._defenders(t),this._mates(t),this._heatTick(t),this._boxCheck();break;case"shoot":this.time+=t,this._ball(t),this._shootTick(t),this._heatPause();break;case"shot":this._shotTick(t);break;case"goal":this.modeT>=2.6&&(this.mode="done",this.modeT=0,this.emit("end",{result:this.result()}));break;case"lost":this.modeT>=(this.reason==="saved"?2.2:1.6)&&(this.mode="done",this.modeT=0,this.emit("end",{result:this.result()}));break;default:break}}_ball(t){let e=this.ball;if(e.inv>0&&(e.inv=Math.max(0,e.inv-t)),this.pass){let x=this.pass;x.t+=t;let g=ve(x.t/x.dur,0,1);e.x=x.x0+(x.x1-x.x0)*g,e.z=x.z0+(x.z1-x.z0)*g,e.vx=0,e.vz=0,g>=1&&(this.pass=null,e.vz=8,e.vx=0,e.inv=.35);return}let n=this.comet?1.3:1,s=this.mode==="shoot",r=this.input.jx,a=this.input.jy,o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let c=r*Vl*n,l=a*Vl*n*(a<0?.6:1);s&&(c=0,l=e.z<Rt.SHOOT_Z?6:0);let h=c-e.vx,u=l-e.vz,d=Math.hypot(h,u),p=Math.abs(c)+Math.abs(l)<.01,m=(p?34:30)*t;d>m?(e.vx+=h/d*m,e.vz+=u/d*m):(e.vx=c,e.vz=l),e.x+=e.vx*t,e.z+=e.vz*t,e.x>Ye&&(e.x=Ye,e.vx>0&&(e.vx=0)),e.x<-Ye&&(e.x=-Ye,e.vx<0&&(e.vx=0)),e.z<1.5&&(e.z=1.5,e.vz<0&&(e.vz=0)),s&&e.z>Rt.SHOOT_Z&&(e.z=Rt.SHOOT_Z,e.vz=0)}_dummies(t){let e=this.ball;if(this.blockT=Math.max(0,this.blockT-t),!this.pass)for(let n of this.dummies){let s=e.x-n.x,r=e.z-n.z,a=Math.hypot(s,r),o=Yg+Rl;if(a>=o||a<1e-6)continue;let c=s/a,l=r/a;e.x=n.x+c*o,e.z=n.z+l*o;let h=e.vx*c+e.vz*l;h<0&&(e.vx-=1.6*h*c,e.vz-=1.6*h*l),this.blockT<=0&&(this.blockT=.9,this.stats.blocked++,this.emit("blocked",{x:n.x,z:n.z}))}}_coins(){let t=this.ball;for(let e of this.coinList)e.got||Math.hypot(t.x-e.x,t.z-e.z)<Zg&&(e.got=!0,this.coins++,this.stats.coins++,this.score+=5,this.emit("coin",{x:e.x,z:e.z,n:this.coins}))}_boxCheck(){if(this.ball.z>=Rt.BOX_Z&&!this.pass){this.mode="shoot",this.modeT=0,this.target.p=0,this.keeper.dir=0,this.keeper.diveTo=null;for(let e of this.defenders)e.from=e.state,e.state="watch",e.t=0;this.emit("shootStart")}}_local(t){let e=this.ball,n=e.x-t.x,s=e.z-t.z,r=t.hz,a=-t.hx;return{a:n*r+s*a,b:n*t.hx+s*t.hz}}_defenders(t){let e=this.ball,n=this.def;for(let s of this.defenders){let r=e.x-s.x,a=e.z-s.z,o=Math.hypot(r,a)||1e-6;s.t+=t;let c=(l,h,u)=>{let d=Math.atan2(s.hx,s.hz),m=Math.atan2(l,h)-d;for(;m>Math.PI;)m-=2*Math.PI;for(;m<-Math.PI;)m+=2*Math.PI;let x=d+ve(m,-u*t,u*t);s.hx=Math.sin(x),s.hz=Math.cos(x)};switch(s.state){case"idle":{let l=s.x0+Math.sin(this.clock*.9+s.id)*2.5,h=ve(l-s.x,-1.2*t,1.2*t);s.x+=h,c(r,a,3),o<n.aggro&&(s.state="chase",s.t=0);break}case"chase":{s.cd-=t,c(r,a,3.2),s.x+=s.hx*n.chase*t,s.z+=s.hz*n.chase*t,s.x=ve(s.x,-Ye,Ye),s.z=ve(s.z,2,Rt.BOX_Z+6),o>n.aggro*1.6?(s.state="idle",s.x0=s.x,s.t=0):s.cd<=0&&o<Qg&&e.inv<=0&&!this.pass&&(s.state="windup",s.t=0,s.near=o,s.hit=!1,s.warned=!0,s.wt=0,s.lx=r/o,s.lz=a/o,s.hx=s.lx,s.hz=s.lz,this.emit("tackleWarn",{id:s.id}));break}case"windup":s.wt+=t,s.near=Math.min(s.near,o),s.wt>=n.windup&&(s.state="slide",s.t=0,s.sx=s.x,s.sz=s.z,this.emit("slide",{id:s.id,warned:s.wt}));break;case"slide":s.x=ve(s.x+s.lx*ko*t,-Ye,Ye),s.z+=s.lz*ko*t,s.near=Math.min(s.near,o),!s.hit&&e.inv<=0&&!this.pass&&o<1.6&&(s.hit=!0,this.stats.tackles++,this.comet?this._burn(s):this._steal(s)),s.t>=Pl&&(!s.hit&&o<10&&(this.emit("dodge",{id:s.id}),this.stats.dodges++,this._trick("dodge")),s.state="recover",s.t=0,s.warned=!1);break;case"recover":s.t>=1.1&&(s.state="chase",s.t=0,s.cd=n.cooldown);break;case"stun":s.t>=1.9&&(s.state="chase",s.t=0,s.cd=n.cooldown*.6,s.nutmegged=!1);break;case"cheer":s.t>=1.5&&(s.state="chase",s.t=0,s.cd=n.cooldown);break;default:break}if(this.mode==="play"&&["idle","chase","windup"].includes(s.state)&&e.inv<=0&&!this.pass){let l=s.hz,h=-s.hx,u=!1;for(let p of[1,-1])Math.hypot(e.x-(s.x+l*ps*p),e.z-(s.z+h*ps*p))<Jg+Rl&&(u=!0);if(u){this.comet?this._burn(s):this._steal(s);continue}let d=this._local(s);!s.nutmegged&&s.pb>0&&d.b<=0&&Math.abs(d.a)<ps-.1&&Math.abs(s.pb)<3&&(s.nutmegged=!0,s.state="stun",s.t=0,this.stats.nutmegs++,this.emit("nutmeg",{id:s.id}),this._trick("nutmeg")),s.pa=d.a,s.pb=d.b}else{let l=this._local(s);s.pa=l.a,s.pb=l.b}}}_burn(t){t.state="stun",t.t=0,t.nutmegged=!0,this.stats.burns++,this.emit("burn",{id:t.id}),this._trick("burn")}_steal(t){let e=this.ball;this.stats.stolen++,this.heat=0,this.cometT=0,t.state="cheer",t.t=0;let n={x:0,z:Math.max(3,e.z-7)},s=-1;for(let r of[0,-6,6,-11,11])for(let a of[7,11,4]){let o={x:ve(e.x+r,-Ye+1,Ye-1),z:Math.max(3,e.z-a)},c=Math.min(...this.defenders.map(l=>l===t?99:Math.hypot(l.x-o.x,l.z-o.z)),Math.hypot(t.x-o.x,t.z-o.z)*.9);c>s&&(s=c,n=o)}e.x=n.x,e.z=n.z,e.vx=0,e.vz=0,e.inv=1.8,this.lives=Math.max(0,this.lives-1),this.emit("stolen",{id:t.id,lives:this.lives}),this.lives<=0&&(this.reason="lives",this.mode="lost",this.modeT=0,this.emit("lost",{reason:"lives"}))}_mates(t){let e=this.ball;for(let n of this.mates)if(n.t+=t,n.state==="pass"&&n.t>.6&&(n.state="done",n.t=0),n.state==="wait"&&!this.hintMate&&Math.hypot(e.x-n.x,e.z-n.z)<15&&e.z<n.z&&(this.hintMate=!0,this.emit("mateHint",{id:n.id})),!(n.state!=="wait"||e.inv>0||this.pass)&&Math.hypot(e.x-n.x,e.z-n.z)<1.8){let s=ve(n.x,-10,10),r=-1;for(let a of[n.x-7,n.x+7,n.x*.3,0]){let o=ve(a,-Ye+1.5,Ye-1.5),c=Math.min(...this.defenders.map(l=>Math.hypot(l.x-o,l.z-(n.z+13))),99);c>r&&(r=c,s=o)}this.pass={x0:e.x,z0:e.z,x1:s,z1:Math.min(n.z+13,Rt.BOX_Z-2),t:0,dur:.6,mate:n.id},n.state="pass",n.t=0,e.inv=.01,this.stats.onetwos++,this.emit("onetwo",{id:n.id}),this._trick("onetwo")}}_trick(t){let e=jg[t];if(this.score+=e.score*(this.comet?2:1),this.lastTrick=this.time,this.comet){this.cometT=Math.min(qo,this.cometT+1.5);return}this.heat=Math.min(Oo,this.heat+e.heat),this.heat>=Oo&&(this.cometT=qo,this.emit("cometOn"))}_heatTick(t){this.cometT>0?(this.cometT-=t,this.heat=Oo*Math.max(0,this.cometT)/qo,this.cometT<=0&&(this.cometT=0,this.heat=0,this.emit("cometOff"))):this.time-this.lastTrick>2.5&&(this.heat=Math.max(0,this.heat-3*t))}_heatPause(){}_shootTick(t){let e=this.def,n=this.keeper,s=this.target;s.p+=e.tspeed*t,s.x=Math.sin(s.p)*6.2;let r=ve(this.ball.x*.35+Math.sin(this.clock*1.7)*e.sway,-4.6,4.6),a=ve(r-n.x,-3.6*t,3.6*t);n.x+=a}targetSafe(t=0){return Math.abs(this.target.x-this.keeper.x)>this.reachNow()+t}tap(){if(this.mode!=="shoot"||this.modeT<.3)return!1;let t=this.keeper,e=this.target.x,n=Math.abs(e-t.x)<=this.reachNow();return t.dir=e>=t.x?1:-1,t.diveTo=n?e:t.x+t.dir*this.reachNow(),this.shot={t:0,dur:.5,x0:this.ball.x,z0:this.ball.z,tx:e,saved:n,comet:this.comet},this.mode="shot",this.modeT=0,this.emit("shoot",{comet:this.comet}),!0}_shotTick(t){let e=this.shot,n=this.keeper;if(e.t+=t,n.diveTo!=null&&(n.x+=ve(n.diveTo-n.x,-16*t,16*t)),e.t<e.dur)return;let s=this.ball;e.saved?(this.stats.saves++,this.emit("save"),this.shot=null,n.diveTo=null,n.dir=0,this.reason="saved",this.mode="lost",this.modeT=0,this.emit("lost",{reason:"saved"})):(this.goals++,this.score+=500+(e.comet?250:0),s.x=e.tx,s.z=Rt.L+1,this.mode="goal",this.modeT=0,this.emit("goal",{x:e.tx,comet:e.comet}))}result(){let t=this.tricks,e=this.coins;if(this.goals===0)return{goal:!1,reason:this.reason||"time",stars:0,coins:e,tricks:t,time:this.time,score:Math.round(this.score),stats:{...this.stats}};let n=1+(t>=this.def.trickGoal?1:0)+(this.time<=this.def.par?1:0),s=e+10+t*4+n*8;return{goal:!0,reason:null,stars:n,coins:s,tricks:t,time:this.time,score:Math.round(this.score),stats:{...this.stats}}}};function Nl(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function Fl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Bl={kick:"data:audio/mpeg;base64,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",shot:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABIAABAIABoaGhoaKCgoKCgoNTU1NTVDQ0NDQ0NQUFBQUF5eXl5eXmtra2treXl5eXl5hoaGhoaUlJSUlJShoaGhoaGvr6+vr7y8vLy8vMrKysrK19fX19fX5eXl5eXy8vLy8vL//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA8AAAAAAAAAQCN7BmeYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAISANPVCGAIdGiq3cegAAAAWiklY4AAMCcHwfBAEAwCAJh8uD4PggCAIAgAwfeD4PggCAIAgCYPg++78uHwQBAEPv/D//wQBD/6fcCAY1g+fuYH4tP62G49P7+Y8GYABDqkMBjLGmzJbinEwR6UfRmSkGMoNTAjGihJAs5gNM0XaVqhGBozFUkNfcB+fY6XcW77qprhdhtwtihgx01VuYZuv/xSo88YZbVH/K////+WelWDQx7wu8TKIwl/ph8BiI4IHVr1UoOCqcHOSGBOqLhYkj/+zjEBgMMFNtSHaWAAYoTrAWUmSiwrxW9St/WXv3G4edyKYARpAiIDQm4Qx+MkEySkfRu5fwmVn1nPfqGUMk/Kcqurccf1e++Pe5nFf1zOw0PvuGf/x8/JxTnkJcLAgXY/u76arwwj29s/ALxuYV+PCQDHhU81S0B9p2R8aBBi2jBOheQIGG6K0u5dNve6zEAsosmlh/u+XZTdCSoKiyoKhelDD7/aNP1DyCEB8HAGw4XSfeGA2JhrFyhkhF168Pp2PoTJCcp7VuW+rRVCAgAMCcVWkUhHGH/+zjEBYEMJIVizSRnwXAcLOWTDSgpQl9UvICaBwQngYTEgLksS1iE0uIiVYcD5RCUYc2zhaLFqbMGBA4aZGrML7KJbgZDQEAQ4ITq3Leski8On22FgPOuBGKu0Ie2f7nBtoxEub/suslRdYBR1VYGuIYnOoLMsuL+rCuQ3ObGwuA5qkRYbqHDwYgMHJCvGiVsoukgDFjAizfF9dgQbcLJubEm09/K5W7NCP9Uhzkb5wTKEoceKneuxQz2ERMFJrsqvdchlLnUqgwAgDAUJmIEnComqAiwpIr/+zjECAEMjPVazTBngYiS6iWWDLhINlotphyeHSO5JRVQvqck02qgKVpJEk1wCMKGbHcapTIoKjKReUZYLNGdapd85zWfrSh/kuXkvPPMl/uU6WGDty9wVcs7lj2JTIxSxEOps0ErCLVgRAQKhG2w4wHjECGm2VBMLjhw7W0JV0hxGYmIhFgpwrmVRkdNXMrKqLYPg1wFtmy+e1KowgZQQdwRwyDMFLFIBZ0e8HPJPBqJhyFg0Ejp5ixYTBNYwHd9jEopQ5VClMQlvroAIAFGmgjBCA8BAZj/+zjEBgEMFOtPLSRngYaS6OWmGLhCSWbetC4A6J4jZLWHiBdCSgTSb79bllEMgQ6zMMYY8npNuvcgeawcoNPQj1g/S2OoZ8Nto+cI2//1IZijI4IgAhpgCqoSSzPS3UyIizfdSYEu0NCgAYACwD0RlQJ4FYVKNWYaDUYhKKwQM0aiBEdtK78eqS1S1/eQikcUQDPB0FubuwqabEX7knwZmtOetyH7b5KEIVlzKy7w0dW/sJ2PUkGhh+RLwqk7MB12+uWYe2vmZ0qLZeoAAQAgAkktwFsBjZj/+zjEBgAMQK1JrCRlwXeQqCWnmFEEydvJeZBhUqTok/qr9EUkZpbdk9Z8xvyaXJuIwpX+BjMiIDGZigZmxkyXKOctK9NzDowmNUe8CuKkQGGgOMDBiCR4TAgGiyjr8vYkNDmsI8TOYjKslQCQAEBkBdYIm44ZXyQyhIVhNLRoBB3SAOkRpEmgKnZRSa0DKc3JovMb90rRUqZeMOIly5vr6VPKKTqa7qsn8xXeIrf/x9HxQqqMOk577/+ByJxTW7/b7GUL/v/+L9UBCEsBSAR0DpYBOdkWIwj/+zjEB4AKeHFDbKTCIVceZ6WUjHgjJAmictOdCuiiRhc+dTtj+To1f+Gtyp7zebWbJYhCjDodGDCQKgKBknUy02eRyMNkgK86ackF3Jep1JNkltEFSlbn67wExQJpsAPoYS5vir8HprT0n1jVleylbKFl+u2bQVFNbc6pDG4zhfVjhBTOTUlUVVgVGb+mRkampZLc+NOqX/z88s+9OiXZOyfQsp1nnDRUNIPMUb2BpQFAKEB6BgI6BUz2EvaAIgFALT0QQO2SYZK9YCuSM+1FzUEItNeesjv/+zjEFAAKPIU0zWDAAVuTJpmkmHB/sRWmmtUYxdjR4LFihINUHIyhgSdKQmDauRWNLRSqnbnRdyD2GTrul9ZuiauA8QAyAotG/JZUBiyZLPCWRpxpV7AVZuXMnbJTg38vcfyrCZacPDXt5y5pNu11W7vj/S9TJzagUPGEkqhaYzyw04kKuBuCDpSRh6l+nWtT3pYxGAkEJFK/+APOgFYLMYGpa+qWzKBxMo63k8jqFG4pb5LZeApdpFMwhOURLYVexSvQPM5jRxcdR+ZEXXf3uN7o1YbHQi//+zjEIQAK3PE1LRkJwVYPpUW0mGh32vUVXz19x49AnodCD85YX+1fpi4EHBGoUFQ4saEhcBIjiAoZV1jRtVOgcuMHO8GDDzyEublDTQY9OiKGVf94zz0sxIugeKqVETEpfSk4B2CyTZS0oVwE0SKHsG3GyAfWu5dKEM3VfqUlCkIPM/WO2O9hSRpudFKBwEeWXoOmUEBZBaFFtMyojklle3+BCaIicmeyQieioveh87Fm0/3KqXHn4YKCcF1C6nXQ288I5gegsKzTFZ31aelXo/qNA6TkxVH/+zjELAMKSLcoLRhpwTmN5MWkmGABMWPhwuKSJcNxUY4yNa24pRq05yMTcIUmbhZxm2lVHS1V8tkaBULgAXWI3lgK9JFzWkHDmGnjEnw5MuGAJLiqJi17PdV5bbyFAQjMqHVKfcIMAlYJokKpIwnV0yErI7LLRq2gpPnkTaIeUkRGzOUnft/t5GdexX7/dh4+7xKISQ4i1ImfLQkRpTSWAy1EXNJRUy5mrWpP//1DBhADaBE3A4GVS5oCjGKBgUsYUb6K1EY4gQtliiOc3kF1TcO5bOQd3TL/+zjEPQIKDJcozKTDQTsSJJmUjLj3VIY9zOwCCnXIxQqCIWiyrkg62XUqRI5kFTcN5lyxVX1U9P/2KgABaSjbQgXofRi043u+S6EXHZiWSOY9+vSrDphgGbrOQY60clClnD1Hd4EDz9UPzS7Q2kzHrDw0yHSTx0Vlb6TkC02/////+tlQUZoOkASpYOZx5E5KfYEmWEoqNMZltZcyYDUmhC3S2kkLPgeCgNsEgCAoSFhYQiwSYFxKCzQmdFVCwNqT38q9IxP6zvYu1ncN/+9NBQBmqzHGt0v/+zjEToIJCKMtTBhlwTGLpAmMGADuOycBdZYyWXYD8arNakZjWISriGjzE8kpi7vywUqjQ23JjKggtu2/lAkqjL/CEkUP5/L0/E6nyMyRujCqN1erdvjPv3f1mIQALgDgq16e22NG2XuicKYms6UDrVJODCljo573WZDs5GGOqM7Iyoj7X99BXXj9Hz9qpx9njqaGMuFvtuXRJKgo1WbZIRfRagEKw5BYUhErUXPWGh2TLV8u54TQfmxEzvltb2s8FV00O8Jx2RWy6H/Jo+3bTpp1/dvaTDj/+zjEZYOJxNUWDCRnwSIaYsT2FDLWEil6un7k02aqZqGSBJIOYATOFCyshHQGSKdm83+N7/L+uCNVeKX5O2G4/4PBPgpHtV9ttyO3VTT2LcuTt1ULCKGCzC8AicT8X2KEloQC3LIdpXGTerZTVfqXsT56o9Qg2Dugi6OL6HVELCCNTUz1HPE+OSFniaZEqHsYPwjqG43UDLGS9FddyaWttU0Q7/cqUt50RSZg0oWWDA96KsxApLoUNdzaypc7bYHUCIlUC2wMVCmgiqsZZOeSoZ+JrIdqMY7/+zjEe4IIEQUYR6RBgOGXo9yAiPimUnuWRBEx0YanEnHC9BRj5mOtMDsc1Z5z5TtVzc3X+dp0erPTvzM/Q2hr69rlVcsV1CDJ1QKKLQmOiEMCzb1r2t7fSFY2Zn8Yjax1E9wwDXi67Akd4W1e9Q83aLSKwxU4vWge/j6xVYk3w/pxIItfNIF/Eh8Yv8hr9uwX+MrgpZx8wUisOp7US6kqTlo7mnajb9mRWMxTUPT/bJR2LujEwrnYJauiwLcM+Tg1YwnlKE0Zjbd2Ynqw/tkfri2oa7toKvv/+zjEoIOKnNkOLDCjwXWuYYmHnCllwo+KaC7oSyD9R1Rx4wX14JjBa4LjBXGHdQE05dUzsSTikgjUQDrMJUMPkdFMl71XnbHMoguLWMWey2SeiirzPZZhrgAGQxqnwFUunI2BQxJWJA3fITud/bdo01G1HXzWfyOdFD9zIqG6VModcUMrEmqSdB43LPlqhE9w3jr2FdR4vQHxaUF5lDFKClpTiixrZX2szqXDLWEvMoSOlP2FyrlUyUaK6YVvoBM/Iakrl1qElpMumz4GCHkua5btOHbkq57/+zjEqIONlY8ILCBRwZUx4Yj0lWCSHKVt7VJhhndzDwwQyKFAGF2QCgtix6O4ouH1GDfIUXKAZLlDlctJTWEPLD+BtwEvlkUhG4uHyDSh/YZkvFlRatwi5hEo+vXmLJddUZ/6n0/apMlX6/xnls5NiEzp7dUqBTKboN4TYyl80XF9GblbNGle0FGrexqXWpMak1OkxrDuu2sAjmwqiY6ujlORUDBVJJUs6s6VCR0O2HSp0kRYd4iEuwl4SPHUFvCT7MqQIkgqdaAgKAg5VCoApBU1JxooSND/+zjEoQOOAX8IR5x1Qb0qoUGECjnR0ojYmjoX5MsBg5ZWCggYMEDgOB7AoMiosHjRoUEhoGRUWDxoGRQSGuisUJGliosSf//+KijTQ8VFjQFCooJDVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEkoMLHJUaZ4zNgSYJmMhkjNBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",goal:"data:audio/mpeg;base64,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",whistle:"data:audio/mpeg;base64,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",save:"data:audio/mpeg;base64,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5vmDVQtEar4upZXQ+7GNue6fFGvcPzfCpV1E9b9eREi2Fz++QrknujHY53/vu/cJAuYLwlQV4cBsmmJIXdNEHIwaJanIlGY6FLrqkC6skHZ6doQ+i8QBPMlkDCGZFAG4oJJHJZU28Z4vXHBojueHZSOT5EaFokkoGpGIh3Y7QnB/IBVCkLY85SZhtN8emfSi5S8EyFxZdIr/+zjEnoMIiKEeTSRggQYWI8mkjCBmGpkD5uO9IEzNQPZXkUMfoMp/6pn9GDlUduIIyOQM5ezSCMjtmgAA6b7vAgIkFQERARJ6J1aWAIkPxgeCpLAoUArAELa0nQESHpq//USCqewan///GEQkhnqTTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEvQNJxMsWDSUDAjogowj2GblVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEsAPGnAMpIIxAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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sSpMZtMaOY8ZyP2uG+7jRfu3eBuFCK2kEnnehmyifOmOmifPoaYT9x8FW0rfzycVyiBVdBO2Z8QahdB4g6epvRZIgcZrqqostwn62+n5Dqtte7zHLQjX1LxYyjRXmEv05E+5aaaZtzlNK5mKy+r/NgAA1b0FFawl4eJ3K0L6VlyiznmZvObKvL9f45kzr+oOezpc7KgtqNo+PNlY9rUBb79HeNcpdu8ZW0Q7bhsXAkXo1oom0icsyB8RELT/+zjE64MMUNUURgzSyTmZo4hijejDYmyWdpIhjZlT/09SCzEp8gH0BcDOYmrv2NObSLsiU9iqJmjDjqs9SK6zDNvX0bXnFmZqq1y5xywdS2YJDe9M6LjyzdJZcizqTNnnLXWVtBaZvScrlv7PrSd7qN83HE/3ubnsbBH7qSPaKp3+/b2h9x+uTKx+Zh/fije6r2T2LF8xYvaDIA9UFTSoBoYICWIYllbRXMp0C1Ratx3zK0hMAdQiDYo+jVY3OAMDZSdsabuTODvNFoPxjvMyeZnSaSjhMaP/+zjE9IMM8UEWRhhtycmiYgT0mmF4HGUxrbXc+XmhczWhVAfwT0ywzHQd3NvlaP3L1RXex67LuG3aFEuDq1LvprLhr7axlMmptkH2cv5e96mzutdjTl3Taf/Gxbt0tpvaf8vRteeZPgACSAAEg1KJmK/6PhehkTpf5eNt4PZT/gMkFpA5JOYfuIIizyLGRnyICThbAMDkVLpgbeGXXJsXOGIAy+pZdMUEvyAjkjnCxDgQFhGbUsumKBeMk/8uEkQRMlhzyGHy4iiigZJJorpf+RQgZwlyKGb/+zjE6QIInM0lIwxL4jiwYUawwAFLEHKBWJg6WknMUUEkk0V0kv/5NnCsThuaF9y2TCJaJ+3pblMZgpLVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE4QAR3YcaWPWAAl0qY9cxIAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEngPAAAGkHAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var $g="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Fe=null,Go=!1;function zl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Ol(){zl(),Go=!0;try{if(Fe||(Fe=document.createElement("audio"),Fe.src=$g,Fe.loop=!0,Fe.preload="auto",Fe.setAttribute("playsinline",""),Fe.setAttribute("webkit-playsinline",""),Fe.setAttribute("x-webkit-airplay","deny"),Fe.volume=.01,Fe.addEventListener("pause",()=>{Go&&!document.hidden&&setTimeout(()=>Go&&Fe.paused&&Fe.play().catch(()=>{}),300)})),Fe.paused){let i=Fe.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function ql(i,t){zl();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var un=i=>440*Math.pow(2,(i-69)/12),Er=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Ol(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;ql(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.value=e;let h=c.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,c){let l=this.ctx;if(!l)return;let h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let c=this.bed;c.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{c.s.stop(),c.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,c,l]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",un(c),a,l*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var Xi=class extends Er{crowd(t){let e=this.ctx;if(this.crowdWanted=t,!e)return;if(this.cr){let c=this.cr;c.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{c.s.stop(),c.l.stop()}catch{}},900),this.cr=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=700,s.Q.value=.5;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=.23;let o=e.createGain();o.gain.value=.015,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(.075,e.currentTime,.6),this.cr={s:n,g:r,l:a,f:s}}unlock(){super.unlock(),this.crowdWanted&&!this.cr&&this.crowd(!0)}excite(t){this.cr&&this.ctx&&(this.cr.g.gain.setTargetAtTime(.06+.1*t,this.ctx.currentTime,.4),this.cr.f.frequency.setTargetAtTime(600+700*t,this.ctx.currentTime,.4))}dispose(){this.crowd(!1),super.dispose()}play(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"kick":this.slide("sine",220,70,n,.14,.35),this.noise(n,.05,.12,"highpass",2e3);break;case"whistle":for(let s=0;s<2;s++){let r=e.createOscillator();r.type="sine",r.frequency.value=2900;let a=e.createOscillator();a.frequency.value=38;let o=e.createGain();o.gain.value=90,a.connect(o).connect(r.frequency);let c=e.createGain(),l=n+s*.28;c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(.1,l+.02),c.gain.exponentialRampToValueAtTime(1e-4,l+.22),r.connect(c).connect(this.sfx),r.start(l),a.start(l),r.stop(l+.25),a.stop(l+.25)}break;case"warn":this.tone("square",880,n,.07,.05),this.tone("square",880,n+.1,.07,.05);break;case"slide":this.noise(n,.4,.14,"bandpass",900,1,this.sfx,300);break;case"nutmeg":this.slide("triangle",330,520,n,.18,.14),this.slide("triangle",520,392,n+.2,.3,.14),this.noise(n,.5,.08,"bandpass",1200,.8);break;case"onetwo":this.tone("triangle",un(76),n,.1,.12),this.tone("triangle",un(83),n+.12,.2,.12);break;case"dodge":this.noise(n,.25,.1,"highpass",1500,1,this.sfx,5e3);break;case"stolen":this.slide("sawtooth",400,90,n,.45,.12);break;case"comet":this.noise(n,.9,.18,"highpass",500,1,this.sfx,5e3),[0,7,12,19].forEach((s,r)=>this.tone("triangle",un(67+s),n+r*.06,.4,.1));break;case"burn":this.noise(n,.35,.16,"lowpass",3e3,1,this.sfx,400),this.tone("square",un(60),n,.2,.08);break;case"shot":this.slide("sine",260,60,n,.2,.45),this.noise(n,.08,.18,"highpass",1500);break;case"save":this.noise(n,.12,.2,"lowpass",600),this.slide("sine",160,70,n,.2,.3);break;case"goal":this.noise(n,2.6,.32,"bandpass",900,.4,this.sfx,2200),[0,4,7,12,16,19,24].forEach((s,r)=>this.tone("sawtooth",un(60+s),n+r*.09,.6,.06)),this.excite(1),setTimeout(()=>this.excite(.3),2800);break;case"win":[0,4,7,12,16].forEach((s,r)=>this.tone("triangle",un(72+s),n+r*.1,.5,.13));break;case"coin":this.tone("square",un(88),n,.05,.05),this.tone("square",un(95),n+.05,.1,.05);break;case"tap":this.tone("sine",700,n,.06,.08);break;default:break}}};Nl(Xi,Bl);Fl(Xi);function K(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function kl(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function Hl(i,t,e,n="#ffd23a"){return`
.${i}-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:${e}}
.${i}-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.${i}-layer{position:absolute;inset:0;pointer-events:none}
.${i}-layer button,.${i}-layer .${i}-card{pointer-events:auto}
.${i}-top{position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);direction:ltr;align-items:center;justify-content:space-between}
.${i}-pill{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1) calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.4);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4);white-space:nowrap}
.${i}-bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:rgba(0,0,0,.4);border:calc(var(--u)*.35) solid #fff;overflow:hidden;position:relative}
.${i}-bar b{display:block;height:100%;background:linear-gradient(180deg,#7af0d0,#2ab898);border-radius:99px}
.${i}-round{width:calc(var(--u)*10.5);height:calc(var(--u)*10.5);border-radius:50%;font-size:calc(var(--u)*5);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${i}-round:active{transform:scale(.94)}
.${i}-hint{position:absolute;left:50%;top:calc(var(--u)*17);transform:translateX(-50%);background:rgba(10,40,60,.78);border:calc(var(--u)*.4) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .35s;pointer-events:none;max-width:94%;overflow:hidden;text-overflow:ellipsis}
.${i}-hint.show{opacity:1}
.${i}-dim{position:absolute;inset:0;background:rgba(5,25,40,.55);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.${i}-card{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.7) solid ${n};border-radius:calc(var(--u)*5);padding:calc(var(--u)*3.4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,10,30,.5)}
.${i}-logo{font-size:calc(var(--u)*10);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.8) rgba(0,30,50,.9);paint-order:stroke fill;text-align:center;line-height:1.1}
.${i}-title{font-size:calc(var(--u)*8);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.5) rgba(0,30,50,.8);paint-order:stroke fill;text-align:center;line-height:1.1}
.${i}-small{font-size:calc(var(--u)*3.8);font-weight:700;text-align:center;opacity:.95}
.${i}-stars{font-size:calc(var(--u)*11)}.${i}-stars .off{filter:grayscale(1);opacity:.3}
.${i}-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*11.5);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.${i}-btn.alt{background:linear-gradient(180deg,#ff8a6a,#e0502a);box-shadow:0 calc(var(--u)*.9) 0 #902a0a}
.${i}-btn.dark{background:linear-gradient(180deg,#4a9ab8,#2a6a88);box-shadow:0 calc(var(--u)*.9) 0 #0a3a50;font-size:calc(var(--u)*4.2)}
.${i}-btn:active{transform:translateY(calc(var(--u)*.5))}
.${i}-btn:focus-visible,.${i}-round:focus-visible,.${i}-lv:focus-visible,.${i}-bld:focus-visible{outline:calc(var(--u)*.7) solid ${n};outline-offset:calc(var(--u)*.5)}
.${i}-lvs{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.8);width:100%}
.${i}-lv{border:none;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*2.8);background:linear-gradient(180deg,#4ab8d8,#2a78a8);box-shadow:0 calc(var(--u)*.6) 0 #0a3a60;min-height:calc(var(--u)*18)}
.${i}-lv i{font-style:normal;font-size:calc(var(--u)*6.5)}
.${i}-lv.lock{background:linear-gradient(180deg,#b8c4cc,#8a98a4);box-shadow:0 calc(var(--u)*.6) 0 #5a6a78}
.${i}-bot{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);justify-content:center;direction:ltr;align-items:flex-end}
.${i}-bld{font-family:inherit;font-weight:900;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);color:#fff;background:linear-gradient(180deg,${t},${e});padding:calc(var(--u)*1) calc(var(--u)*2);min-width:calc(var(--u)*17);font-size:calc(var(--u)*3);display:flex;flex-direction:column;align-items:center;cursor:pointer;gap:calc(var(--u)*.2);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${i}-bld i{font-style:normal;font-size:calc(var(--u)*6)}
.${i}-bld.can{background:linear-gradient(180deg,#6ae08a,#2fa85a);animation:${i}pulse 1s infinite}
.${i}-bld.done{opacity:.55;filter:grayscale(.5)}
.${i}-bld small{font-size:calc(var(--u)*2.5);opacity:.95;font-weight:700}
@keyframes ${i}pulse{50%{transform:scale(1.07)}}
@media (orientation:landscape){.${i}-card{width:calc(var(--u)*115);max-width:94vw}.${i}-logo{font-size:calc(var(--u)*8)}.${i}-lvs{grid-template-columns:repeat(8,1fr)}.${i}-lv{min-height:calc(var(--u)*24);font-size:calc(var(--u)*3.2)}}
.${i}-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`}var tm={title:["\u0633\u0643\u0629 \u0627\u0644\u0643\u0648\u0631\u0629","NUTMEG RUSH"],play:["\u0627\u0644\u0639\u0628","PLAY"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","LEVELS"],balls:["\u0627\u0644\u0643\u0648\u0631","BALLS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RETRY"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],next:["\u0627\u0644\u062A\u0627\u0644\u064A","NEXT"],select:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0631\u062D\u0644\u0629","SELECT LEVEL"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the level before"],start:["\u064A\u0644\u0627!","LET'S GO!"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","LEVEL"],tip1:["\u0627\u0628\u0639\u062F \u0639\u0646 \u0627\u0644\u0645\u0645\u0631\u0627\u062A \u0627\u0644\u062D\u0645\u0631\u0627 \u0627\u0644\u0648\u0627\u0645\u0636\u0629","Dodge the flashing RED lanes"],tip2:["\u0645\u0631\u0651\u0631 \u0627\u0644\u0643\u0648\u0631\u0629 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0646 \u0627\u0644\u0645\u062F\u0627\u0641\u0639!","Roll the ball between a defender's legs!"],tip3:["\u0627\u062E\u0628\u0637 \u0641\u064A \u0635\u0627\u062D\u0628\u0643 \u0627\u0644\u0623\u0632\u0631\u0642 \u0644\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629","Run into your BLUE friend for a one-two"],tip4:["\u0643\u0644 \u062D\u0631\u0643\u0629 \u062A\u0633\u062E\u0651\u0646 \u0627\u0644\u0643\u0648\u0631\u0629... \u0648\u062A\u062A\u062D\u0648\u0644 \u0644\u0643\u0631\u0629 \u0646\u0627\u0631!","Tricks heat the ball... until it is a FLAMING COMET!"],tip5:["\u0641\u064A \u0627\u0644\u0634\u0628\u0627\u0643 \u062F\u0648\u0633 \u0644\u0645\u0627 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u062A\u0628\u0642\u0649 \u062E\u0636\u0631\u0627","At the goal, TAP when the ring is GREEN"],how:["\u0627\u0633\u062D\u0628 \u0635\u0628\u0627\u0639\u0643 \u0639\u0634\u0627\u0646 \u062A\u062D\u0631\u0651\u0643 \u0627\u0644\u0643\u0648\u0631\u0629","Drag your finger to roll the ball"],nutmeg:["\u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646!","NUTMEG!"],onetwo:["\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629!","ONE-TWO!"],stolen:["\u0627\u062A\u0633\u0631\u0642\u062A!","STOLEN!"],dodge:["\u0641\u0644\u062A\u0651 \u0645\u0646\u0647!","DODGE!"],comet:["\u{1F525} \u0643\u0631\u0629 \u0646\u0627\u0631!! \u{1F525}","\u{1F525} FLAMING COMET! \u{1F525}"],burn:["\u062D\u0631\u0642\u062A\u0648!","BURNED THROUGH!"],goal:["\u062C\u0648\u0648\u0648\u0648\u0648\u0644!","GOOOAL!"],save:["\u0627\u0644\u062D\u0627\u0631\u0633 \u0635\u062F\u0651\u0647\u0627! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","SAVED! Try again"],shootHint:["\u062F\u0648\u0633 \u0644\u0645\u0627 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u062A\u0628\u0642\u0649 \u062E\u0636\u0631\u0627!","TAP when the ring is GREEN!"],shootGo:["\u0627\u0636\u0631\u0628!","SHOOT!"],shootWait:["\u0627\u0633\u062A\u0646\u0649...","WAIT..."],tricks:["\u062D\u0631\u0643\u0627\u062A","Tricks"],time:["\u0627\u0644\u0648\u0642\u062A","Time"],coins:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A","Coins"],score:["\u0627\u0644\u0646\u0642\u0627\u0637","Score"],won:["\u062C\u0648\u0648\u0648\u0648\u0648\u0644! \u{1F3C6}","GOAL! \u{1F3C6}"],nut:["\u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646","Nutmegs"],one:["\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629","One-twos"],dod:["\u0641\u0644\u062A\u0651","Dodges"],buy:["\u0627\u0634\u062A\u0631\u0650","Buy"],owned:["\u0639\u0646\u062F\u0643","Owned"],on:["\u0645\u062E\u062A\u0627\u0631\u0629 \u2713","Selected \u2713"],poor:["\u0645\u062D\u062A\u0627\u062C \u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631","Need more coins"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],s:["\u062B","s"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],lv:["\u0645","LV"],youAre:["\u0625\u0646\u062A \u0627\u0644\u0643\u0648\u0631\u0629","YOU ARE THE BALL"],blocked:["\u0635\u062F\u0651!","BLOCKED!"],tapShoot:["\u062F\u0648\u0633 \u0648\u0627\u0636\u0631\u0628!","TAP TO SHOOT!"],mate:["\u0645\u0631\u0651\u0631 \u0644\u0635\u0627\u062D\u0628\u0643!","PASS TO YOUR MATE!"],fullTime:["\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u062A","FULL TIME"],fullTimeSub:["\u062E\u062F\u0648\u0627 \u0643\u0644 \u0627\u0644\u0643\u0648\u0631. \u0646\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A\u061F","They took every ball. Again?"],savedT:["\u0635\u062F\u0651\u0647\u0627!","SAVED!"],savedSub:["\u0627\u0644\u062D\u0627\u0631\u0633 \u0635\u062F\u0651 \u0627\u0644\u0643\u0648\u0631\u0629. \u0627\u0644\u0639\u0628 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u062A\u0627\u0646\u064A!","The keeper stopped it. Play the level again!"],tryAgain:["\u062D\u0627\u0648\u0644 \u062A\u0627\u0646\u064A","TRY AGAIN"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","MENU"],dragMove:["\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u062D\u0631\u0651\u0643 \u0627\u0644\u0643\u0648\u0631\u0629","DRAG TO MOVE"],through:["\u0645\u0631\u0651\u0631\u0647\u0627 \u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646!","THROUGH THE LEGS!"],levelN:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","LEVEL"],nutmegT:["\u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646!","NUTMEG!"]},de=kl(tm),St=i=>de.t(i),O=i=>`calc(var(--u)*${i})`,Mt={sphere:new Ar(.5,14,10),cyl:new gr(.5,.5,1,12),box:new oi(1,1,1),plane:new Sn(1,1),circle:new pr(.5,16),ring:new mr(.62,.9,28)},Wo=new Map,ne=(i,t=0)=>{let e=`${i}|${t}`;return Wo.has(e)||Wo.set(e,new us({color:i,emissive:t})),Wo.get(e)},en=(i,t=1,e=!1)=>new we({color:i,transparent:t<1||e,opacity:t,depthWrite:!1,blending:e?si:Bn,side:We});function wt(i,t,e,n,s,r=1,a=1,o=1){let c=new me(i,t);return c.position.set(e,n,s),c.scale.set(r,a,o),c}var Yi=(i,t,e)=>i<t?t:i>e?e:i,_e=i=>-i;function Gl(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);return s.addColorStop(0,i),s.addColorStop(.4,"rgba(255,255,255,0.55)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,64,64),new qi(e)}function em(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d");t.strokeStyle="#fff",t.lineWidth=9,t.lineCap="round",t.lineJoin="round";for(let e=0;e<3;e++){let n=20+e*38;t.beginPath(),t.moveTo(14,n+22),t.lineTo(32,n),t.lineTo(50,n+22),t.stroke()}return new qi(i)}function nm(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");return t.fillStyle="#e8242a",t.beginPath(),t.moveTo(32,4),t.lineTo(62,58),t.lineTo(2,58),t.closePath(),t.fill(),t.lineWidth=5,t.strokeStyle="#fff",t.stroke(),t.fillStyle="#fff",t.font="bold 40px sans-serif",t.textAlign="center",t.fillText("!",32,52),new qi(i)}function Xo(i,t,e,n,s=!1){let r=new Ae,a=new Ae;r.add(a);let o=r.userData;o.body=a;let c=ne(16777215,4473924);for(let h of[-1,1]){let u=new Ae;u.position.set(h*ps,1.75,0),u.add(wt(Mt.sphere,ne(t),0,.05,0,1.25,1.05,1.25),wt(Mt.cyl,ne(c.color.getHex()),0,-.6,0,.8,1.1,.8),wt(Mt.sphere,ne(1842212),0,-1.2,.25,.95,.6,1.4)),a.add(u),h<0?o.legR=u:o.legL=u;let d=new Ae;d.position.set(h*1.55,3.25,0),d.add(wt(Mt.cyl,ne(i),0,-.5,0,.62,1.1,.62),wt(Mt.sphere,s?ne(8060794,1728538):ne(e),0,-1.15,0,s?.95:.62,s?.95:.62,s?.95:.62)),a.add(d),h<0?o.armR=d:o.armL=d}a.add(wt(Mt.sphere,ne(i),0,2.75,0,2.7,2.3,1.75),wt(Mt.box,c,0,2.75,.86,1.1,.28,.06));let l=new Ae;l.position.set(0,4.35,.05),a.add(l),o.head=l,l.add(wt(Mt.sphere,ne(e),0,0,0,1.55,1.5,1.5),wt(Mt.sphere,ne(n),0,.42,-.12,1.6,.95,1.55));for(let h of[-1,1])l.add(wt(Mt.sphere,c,h*.36,.05,.66,.4,.46,.2),wt(Mt.sphere,ne(1052696),h*.36,.03,.78,.2,.24,.1),wt(Mt.sphere,ne(e),h*.78,0,0,.3,.4,.2));l.add(wt(Mt.box,ne(6957610),0,-.38,.72,.5,.1,.06)),o.stars=new Ae;for(let h=0;h<3;h++)o.stars.add(wt(Mt.sphere,new we({color:16769098}),Math.cos(h*2.1)*1,0,Math.sin(h*2.1)*1,.4,.4,.4));return o.stars.position.y=5.7,o.stars.visible=!1,r.add(o.stars),o.shadow=wt(Mt.circle,new we({color:0,transparent:!0,opacity:.35}),0,.04,0,4,4,4),o.shadow.rotation.x=-Math.PI/2,r.add(o.shadow),r}var Yo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),de.setLang(e.lang),de.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.base=e.base||"./",this.save=Ll(e.save),this.sound=new Xi,this.sound.muted=!!this.save.muted,document.getElementById("nm-style")||document.head.append(K("style",{id:"nm-style"},Hl("nm","#1f6ae0","#0a2470","#ffe04a")+`
.nm-menu{display:flex;flex-direction:column;gap:${O(1.6)};width:100%}.nm-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:${O(3.6)}}
.nm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:${O(1.6)};width:100%}.nm-lvl{border:${O(.5)} solid #fff;border-radius:${O(3)};font-family:inherit;color:#fff;font-weight:900;padding:${O(1.2)};display:flex;flex-direction:column;align-items:center;gap:${O(.4)};font-size:${O(3)};min-height:${O(22)};cursor:pointer;justify-content:center;background:linear-gradient(180deg,#2fa84a,#12662a)}.nm-lvl.lock{filter:grayscale(1) brightness(.6)}
.nm-ball{border:${O(.5)} solid #fff;border-radius:${O(3)};font-family:inherit;color:#fff;font-weight:900;padding:${O(1.4)};display:flex;flex-direction:column;align-items:center;gap:${O(.6)};font-size:${O(2.8)};cursor:pointer;background:linear-gradient(180deg,#1f6ae0,#0a2470)}.nm-ball.sel{border-color:#ffe04a;box-shadow:0 0 ${O(3)} #ffe04a}.nm-ball i{width:${O(13)};height:${O(13)};border-radius:50%;display:block;border:${O(.4)} solid #fff}
.nm-banner{position:absolute;left:0;right:0;top:${O(26)};text-align:center;font-weight:900;font-size:${O(9)};color:#ffe04a;-webkit-text-stroke:${O(.8)} #0a1a40;paint-order:stroke fill;pointer-events:none;opacity:0;transform:scale(.4)}
.nm-banner.show{animation:nmpop 1.5s ease-out forwards}@keyframes nmpop{0%{opacity:0;transform:scale(.3)}15%{opacity:1;transform:scale(1.15)}30%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(1) translateY(${O(-4)})}}
.nm-heat{position:absolute;left:${O(3)};right:${O(3)};top:${O(15.5)};height:${O(3.2)};border-radius:99px;background:rgba(0,0,0,.5);border:${O(.4)} solid #fff;overflow:hidden;direction:ltr}.nm-heat b{display:block;height:100%;width:0;background:linear-gradient(90deg,#ffd23a,#ff5a1a);border-radius:99px}.nm-heat.comet b{background:linear-gradient(90deg,#ff5a1a,#ff2a8a,#ffd23a);animation:nmflick .25s infinite alternate}@keyframes nmflick{to{filter:brightness(1.5)}}
.nm-shoot{position:absolute;left:50%;transform:translateX(-50%);bottom:max(${O(6)},env(safe-area-inset-bottom));font-family:inherit;font-weight:900;font-size:${O(8)};color:#fff;border:${O(.8)} solid #fff;border-radius:999px;padding:${O(2.4)} ${O(10)};pointer-events:auto;cursor:pointer;box-shadow:0 ${O(1)} 0 rgba(0,0,0,.4)}
.nm-shoot.go{background:linear-gradient(180deg,#5ae88a,#17a847)}.nm-shoot.wait{background:linear-gradient(180deg,#ff6a5a,#c8281a)}
.nm-joy{position:absolute;width:${O(24)};height:${O(24)};margin:${O(-12)} 0 0 ${O(-12)};border-radius:50%;border:${O(.7)} solid rgba(255,255,255,.7);background:rgba(255,255,255,.12);pointer-events:none;display:none}.nm-joy b{position:absolute;left:50%;top:50%;width:${O(10)};height:${O(10)};margin:${O(-5)} 0 0 ${O(-5)};border-radius:50%;background:rgba(255,255,255,.85)}
.nm-big{font-size:${O(5.5)};font-weight:900;text-align:center}
.nm-lives{gap:${O(.8)};padding:${O(1)} ${O(2.4)}}.nm-lives i{font-style:normal;width:${O(5)};height:${O(5)};border-radius:50%;background:radial-gradient(circle at 50% 50%,#1e2230 0 22%,transparent 24%),#fff;display:block;box-shadow:inset 0 0 0 ${O(.3)} #1e2230}.nm-lives i.off{opacity:.25}
.nm-prog{position:absolute;left:${O(5)};right:${O(5)};top:${O(17)};height:${O(1.6)};border-radius:99px;background:rgba(0,0,0,.45);direction:ltr;pointer-events:none}.nm-prog b{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:99px;background:linear-gradient(90deg,#ff2a3a,#ff9a2a)}.nm-prog i{position:absolute;top:50%;width:${O(3.6)};height:${O(3.6)};margin:${O(-1.8)} 0 0 ${O(-1.8)};left:0;border-radius:50%;background:#fff;border:${O(.6)} solid #e8242a;box-shadow:0 0 ${O(1)} rgba(0,0,0,.5)}.nm-prog span{position:absolute;right:${O(-1.5)};top:50%;transform:translate(100%,-50%);font-size:${O(4.2)};line-height:1}
.nm-heat{top:${O(21.5)};height:${O(1.8)};border-width:${O(.3)};opacity:.0;transition:opacity .3s}.nm-heat.on{opacity:1}
.nm-banner.red{color:#ff3a4a;-webkit-text-stroke:${O(.8)} #fff}.nm-banner.cyan{color:#5ad8ff;-webkit-text-stroke:${O(.8)} #0a2a50}.nm-banner.white{color:#fff;-webkit-text-stroke:${O(.8)} #0a1a40}.nm-banner{font-size:${O(8.4)};transform:rotate(-4deg)}
.nm-tip{position:absolute;left:0;right:0;bottom:${O(30)};text-align:center;font-weight:900;font-size:${O(5.4)};color:#fff;-webkit-text-stroke:${O(.7)} #0a1a40;paint-order:stroke fill;pointer-events:none;opacity:0;transition:opacity .35s}.nm-tip.show{opacity:1}.nm-tip em{display:block;font-style:normal;font-size:${O(11)};animation:nmhand .7s infinite alternate}@keyframes nmhand{to{transform:translateY(${O(-2)})}}
.nm-menu2{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${O(2.2)};padding:${O(4)};box-sizing:border-box;pointer-events:none;background:linear-gradient(180deg,rgba(5,8,25,.55),rgba(5,8,25,.2) 40%,rgba(5,8,25,.65))}
.nm-title2{font-weight:900;text-align:center;line-height:.95;font-size:${O(15)};color:#fff;-webkit-text-stroke:${O(1.4)} #0a1230;paint-order:stroke fill;text-shadow:0 ${O(1.2)} 0 #0a1230;letter-spacing:.02em}.nm-title2 b{display:block;color:#ffb21a;font-size:${O(19)}}
.nm-ribbon{background:linear-gradient(180deg,#ff3a5a,#c8102e);color:#fff;font-weight:900;font-size:${O(3.6)};padding:${O(.8)} ${O(4)};border-radius:${O(2)};transform:rotate(-3deg);box-shadow:0 ${O(.6)} 0 #6a0a1a;border:${O(.4)} solid #fff;margin-top:${O(-1)}}
.nm-lvname{font-weight:900;font-size:${O(4)};text-align:center;line-height:1.2;text-shadow:0 ${O(.4)} 0 #000}.nm-lvname small{display:block;font-size:${O(2.8)};color:#7ad8ff}
.nm-play{pointer-events:auto;font-family:inherit;font-weight:900;font-size:${O(8)};color:#fff;border:none;border-radius:${O(2.6)};padding:${O(2.2)} ${O(10)};min-width:${O(62)};background:linear-gradient(180deg,#ff3a52,#d0102c);box-shadow:0 ${O(1.2)} 0 #7a0a1a,inset 0 ${O(.6)} 0 rgba(255,255,255,.3);cursor:pointer}.nm-play:active{transform:translateY(${O(.6)})}
.nm-tiles{display:flex;gap:${O(2)};pointer-events:auto;width:100%;max-width:${O(94)};justify-content:center;margin-top:${O(1)}}.nm-tile{flex:1;font-family:inherit;font-weight:900;color:#fff;border:${O(.4)} solid rgba(255,255,255,.25);border-radius:${O(2.4)};padding:${O(2)} ${O(1)};background:linear-gradient(180deg,#1e2a5a,#0e1638);display:flex;flex-direction:column;align-items:center;gap:${O(.6)};font-size:${O(3)};cursor:pointer;box-shadow:0 ${O(.8)} 0 #060a1e}.nm-tile i{font-style:normal;font-size:${O(7)}}
.nm-coinpill{position:absolute;top:max(${O(2.5)},env(safe-area-inset-top));right:${O(3)};background:rgba(8,12,34,.8);border-radius:999px;padding:${O(1)} ${O(3)};font-weight:900;font-size:${O(4)};display:flex;gap:${O(1.2)};align-items:center;border:${O(.3)} solid rgba(255,255,255,.25);pointer-events:none;direction:ltr}
.nm-white{background:#fff;color:#1a2040;border-radius:${O(2.4)};padding:${O(4)} ${O(5)};width:${O(78)};max-width:100%;display:flex;flex-direction:column;gap:${O(2.2)};align-items:stretch;text-align:center;box-shadow:0 ${O(2)} ${O(6)} rgba(0,0,0,.5);pointer-events:auto}.nm-white h2{margin:0;font-size:${O(10)};color:#e8102e;-webkit-text-stroke:${O(.5)} #7a0a1a;text-shadow:0 ${O(.5)} 0 #7a0a1a;line-height:1}.nm-white p{margin:0;font-weight:900;font-size:${O(3.8)};color:#3a4060;line-height:1.35}
.nm-red{font-family:inherit;font-weight:900;font-size:${O(5)};color:#fff;border:none;border-radius:${O(1.8)};padding:${O(2.2)};background:linear-gradient(180deg,#ff3a52,#d0102c);box-shadow:0 ${O(.9)} 0 #7a0a1a;cursor:pointer}.nm-navy{font-family:inherit;font-weight:900;font-size:${O(4.6)};color:#fff;border:none;border-radius:${O(1.8)};padding:${O(2.2)};background:linear-gradient(180deg,#1e2a5a,#0e1638);box-shadow:0 ${O(.9)} 0 #060a1e;cursor:pointer}
.nm-white .nm-row{color:#1a2040;justify-content:space-between}`)),this.root=K("div",{class:"nm-root",dir:de.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=K("div",{class:"nm-layer"}),this.mode="menu",this.clock=0,this.fx=[],this.keys={},this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.dead||(this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame()))})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){let t=Rt.L,e=Rt.W/2;this.renderer=new cr({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Pe,this.root.prepend(this.renderer.domElement);let n=this.scene=new hr;n.background=new zt(462118),n.fog=new lr(462118,70,240),this.camera=new Ee(70,1,.3,500),n.add(new Cr(10138879,1915426,1.45));let s=new Ir(16773852,1.15);s.position.set(25,60,-15),n.add(s),this.ballLight=new yr(16777215,0,28,1.6),n.add(this.ballLight),n.add(wt(Mt.box,ne(1324060),0,-.3,t/2,220,.2,260));for(let l=0;l<Math.ceil((t+8)/6.4);l++)n.add(wt(Mt.box,ne(l%2?2918972:3514440),0,-.05,-3+l*6.4+3.2,Rt.W+4,.1,6.4));let r=(l,h,u,d)=>n.add(wt(Mt.box,en(16777215,.9),l,.03,h,u,.02,d));r(-e,t/2,.3,t),r(e,t/2,.3,t),r(0,0,Rt.W,.3),r(0,t,Rt.W,.3),r(0,t/2,Rt.W,.3),r(-12,(t+Rt.BOX_Z)/2,.3,t-Rt.BOX_Z),r(12,(t+Rt.BOX_Z)/2,.3,t-Rt.BOX_Z),r(0,Rt.BOX_Z,24.3,.3);let a=wt(Mt.ring,en(16777215,.9),0,.03,t/2,6,6,6);a.rotation.x=-Math.PI/2,n.add(a),this._goal(),this._stands(),this._lights(),this.ball=new Ae,this.ballMesh=new Ae,this.ball.add(this.ballMesh),n.add(this.ball),this.ballBase=wt(Mt.sphere,ne(16777215),0,0,0,1.1,1.1,1.1),this.ballMesh.add(this.ballBase),this.patchMat=ne(1974832),this.patches=[];let o=[],c=(1+Math.sqrt(5))/2;for(let[l,h]of[[-1,1],[1,1],[-1,-1],[1,-1]])o.push([0,l,h*c],[l,h*c,0],[h*c,0,l]);for(let l of o){let h=new P(...l).normalize(),u=new me(Mt.circle,this.patchMat);u.scale.set(.5,.5,1),u.position.copy(h).multiplyScalar(.553),u.quaternion.setFromUnitVectors(new P(0,0,1),h),this.ballMesh.add(u),this.patches.push(u)}this.glowTex=Gl(),this.glow=new ci(new Wn({map:this.glowTex,color:16752688,transparent:!0,opacity:0,blending:si,depthWrite:!1})),this.ball.add(this.glow),this.ballShadow=wt(Mt.circle,new we({color:0,transparent:!0,opacity:.4}),0,.05,0,1.4,1.4,1.4),this.ballShadow.rotation.x=-Math.PI/2,n.add(this.ballShadow),this.parts=[];for(let l=0;l<160;l++){let h=new ci(new Wn({map:this.glowTex,transparent:!0,opacity:0,blending:si,depthWrite:!1}));h.visible=!1,n.add(h),this.parts.push({s:h,life:0,t:0,v:new P,a:1,z0:1,z1:1})}this.partI=0,this.keeperG=Xo(16765498,1710634,15775888,3811866,!0),this.keeperG.position.set(0,0,t-.9),this.keeperG.rotation.y=Math.PI,n.add(this.keeperG),this.keeperG.scale.setScalar(.8),this.defMeshes=[],this.mateMeshes=[],this.dummyMeshes=[],this.coinMeshes=[],this.markTex=nm(),this.chevTex=em(),this.reachWall=wt(Mt.plane,en(16722474,.32),0,1.8,t-.35,1,Rt.GOAL_H,1),this.reachWall.visible=!1,n.add(this.reachWall),this.safeWall=wt(Mt.plane,en(3203184,.2),0,1.8,t-.3,Rt.GOAL_W,Rt.GOAL_H,1),this.safeWall.visible=!1,n.add(this.safeWall),this.reachFloor=wt(Mt.box,en(16722474,.55),0,.06,t-1,1,.04,2),this.reachFloor.visible=!1,n.add(this.reachFloor),this.targetRing=new Ae,this.targetRing.add(wt(Mt.ring,en(16777215,1),0,0,0,1.6,1.6,1.6),wt(Mt.circle,en(16777215,.9),0,0,.01,.6,.6,1)),this.targetRing.position.set(0,1.8,t-.4),this.targetRing.visible=!1,n.add(this.targetRing),this.confetti=[],this.skinApply()}_goal(){let t=this.scene,e=Rt.L,n=Rt.GOAL_W/2,s=Rt.GOAL_H,r=Rt.GOAL_D,a=ne(16777215,8947848);for(let l of[-1,1]){t.add(wt(Mt.cyl,a,l*n,s/2,e,.4,s,.4));let h=wt(Mt.cyl,a,l*n,s/2,e+r,.2,s,.2);t.add(h)}t.add(wt(Mt.cyl,a,0,s,e,.4,Rt.GOAL_W+.4,.4).rotateZ(Math.PI/2));let o=en(16777215,.35);this.netBack=new me(new Sn(Rt.GOAL_W,s,14,8),new we({color:16777215,wireframe:!0,transparent:!0,opacity:.55})),this.netBack.position.set(0,s/2,e+r),t.add(this.netBack),this.netBase=Float32Array.from(this.netBack.geometry.attributes.position.array);let c=new me(new Sn(Rt.GOAL_W,r,14,4),new we({color:16777215,wireframe:!0,transparent:!0,opacity:.4}));c.rotation.x=Math.PI/2,c.position.set(0,s,e+r/2),t.add(c);for(let l of[-1,1]){let h=new me(new Sn(r,s,4,8),new we({color:16777215,wireframe:!0,transparent:!0,opacity:.4}));h.rotation.y=Math.PI/2,h.position.set(l*n,s/2,e+r/2),t.add(h)}t.add(wt(Mt.plane,o,0,s/2,e+r+.05,Rt.GOAL_W,s,1)),this.netT=99}_stands(){let t=this.scene,e=Rt.L,n=Rt.W/2,s=[],r=(l,h,u,d,p,m)=>{for(let x=0;x<m;x++){let g=4+x*2.2,f=1+x*1.8,M=d?l+d*g:0,I=p?h+p*g:0;d?t.add(wt(Mt.box,ne(2765648),M,f/2,h+u/2,2.2,f,u)):t.add(wt(Mt.box,ne(2765648),l+u/2,f/2,I,u,f,2.2));for(let y=0;y<u/1.4;y++){let U=.7+y*1.4;d?s.push([M,f+.5,h+U]):s.push([l+U,f+.5,I])}}};r(n+3,-10,e+20,1,0,5),r(-n-3,-10,e+20,-1,0,5),r(-n-3,e+9,Rt.W+6,0,1,4),r(-n-3,-9,Rt.W+6,0,-1,3);let a=[16734810,5941503,16765498,16777215,7006880,16747208,16751162];this.crowd=new fr(Mt.sphere,new us({color:16777215}),s.length);let o=new zt;this.people=s.map((l,h)=>({x:l[0],y:l[1],z:l[2],ph:h*7.31%6.28})),s.forEach((l,h)=>{o.setHex(a[(h*5+(h>>3))%a.length]),this.crowd.setColorAt(h,o)}),this.crowd.instanceColor.needsUpdate=!0,t.add(this.crowd),this._crowdMat(0);let c=[15219290,3836648,16765498,3860648];for(let l=0;l<Math.ceil((e+6)/5.5);l++)for(let h of[-1,1])t.add(wt(Mt.box,ne(c[l%4],c[l%4]&5592405),h*(n+1.4),.6,l*5.5-3,.4,1.2,5.2));for(let l=0;l<7;l++)t.add(wt(Mt.box,ne(c[l%4],c[l%4]&5592405),-n+2.5+l*5,.6,e+7.5,5.2,1.2,.4))}_crowdMat(t,e=0){let n=this._dummy||(this._dummy=new Ie);this.people.forEach((s,r)=>{let a=e?Math.abs(Math.sin(t*7+s.ph))*e:0;n.position.set(_e(s.x),s.y+a,s.z),n.scale.set(.9,1.2,.9),n.updateMatrix(),this.crowd.setMatrixAt(r,n.matrix)}),this.crowd.instanceMatrix.needsUpdate=!0}_lights(){let t=this.scene,e=Rt.L,n=Gl("rgba(255,255,240,1)");for(let[s,r]of[[-27,8],[27,8],[-27,e-8],[27,e-8],[-27,e/2],[27,e/2]]){t.add(wt(Mt.cyl,ne(5593706),s,15,r,.9,30,.9));let a=new Ae;a.position.set(s,31,r);for(let c=0;c<3;c++)for(let l=0;l<2;l++)a.add(wt(Mt.box,new we({color:16777200}),(c-1)*2.2,l*2.2,0,2,2,.4));a.add(wt(Mt.box,ne(3817290),0,1,-.3,7,5,.3)),a.lookAt(0,0,r),t.add(a);let o=new ci(new Wn({map:n,color:16775900,transparent:!0,opacity:.8,blending:si,depthWrite:!1}));o.scale.set(26,26,1),o.position.set(s+(s<0?1:-1)*2,32,r),t.add(o)}}skinApply(){let t=Wi.find(e=>e.id===this.save.skin)||Wi[0];this.skinDef=t,this.ballBase.material=ne(t.base,t.emissive),this.patchMat.color.setHex(t.patch),this.patchMat.emissive.setHex(t.id==="galaxy"||t.id==="flame"?t.patch&5592405:0)}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.portrait=this.cw<this.ch,this.camera.fov=this.portrait?62:50,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.joy=K("div",{class:"nm-joy"},K("b")),this.root.append(this.joy),this.root.addEventListener("pointerdown",n=>{if(n.target.closest("button")||!this.m)return;if(this.mode==="play"&&!this.paused&&this.m.mode==="shoot"){this._tap();return}if(this.mode!=="play"||this.paused)return;let s=this.root.getBoundingClientRect();this.dr={id:n.pointerId,x:n.clientX,y:n.clientY},this.joy.style.display="block",this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`;try{this.root.setPointerCapture(n.pointerId)}catch{}}),this.root.addEventListener("pointermove",n=>{if(!this.dr||n.pointerId!==this.dr.id||!this.m)return;let s=this.u*14,r=n.clientX-this.dr.x,a=n.clientY-this.dr.y,o=Math.hypot(r,a);o>s&&(r*=s/o,a*=s/o),this.pointerIn=[-r/s*(this.portrait,1),-a/s],this.joy.firstChild.style.transform=`translate(${r*.8}px,${a*.8}px)`});let e=n=>{this.dr&&n.pointerId===this.dr.id&&(this.dr=null,this.pointerIn=null,this.joy.style.display="none",this.joy.firstChild.style.transform="")};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let s=n.key.toLowerCase();this.keys[s]=n.type==="keydown",n.type==="keydown"&&((s==="p"||s==="escape")&&this.togglePause(),(s===" "||s==="enter")&&this.m&&this.m.mode==="shoot"&&this.mode==="play"&&(n.preventDefault(),this._tap()),(s.startsWith("arrow")||s===" ")&&n.preventDefault())},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){if(!this.m)return;let t=0,e=0;this.pointerIn&&(t=this.pointerIn[0],e=this.pointerIn[1]);let n=this.keys;(n.arrowleft||n.a)&&(t+=1),(n.arrowright||n.d)&&(t-=1),(n.arrowup||n.w)&&(e+=1),(n.arrowdown||n.s)&&(e-=1),this.m.setInput(t,e)}_tap(){this.m&&this.m.tap()&&(this.sound.play("shot"),this.hideTip(),this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null))}_clear(){this.layer.replaceChildren(),this.hintEl=null}_soundPill(){let t=K("button",{class:"nm-soundpill",onclick:()=>this.sound.unlock()},St("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_card(...t){this.layer.append(K("div",{class:"nm-dim"},K("div",{class:"nm-card"},...t)))}_coinsPill(){return K("div",{class:"nm-row"},K("span",{},"\u{1FA99} ",St("coins")),K("span",{},de.num(this.save.coins)))}showMenu(){this.mode="menu",this.m=null,this._clear(),this.sound.crowd(!0),this.sound.excite(.2),this.menuT=0;let t=de.getLang()!=="en",e=Math.min(this.save.unlocked-1,4),n=hn[e],s=K("div",{class:"nm-lvname"},`${St("levelN")} ${de.num(e+1)} - ${t?n.ar:n.en}`.toUpperCase());this.layer.append(K("div",{class:"nm-coinpill"},"\u{1FA99}",K("span",{},de.num(this.save.coins)))),this.layer.append(K("div",{class:"nm-menu2"},K("div",{class:"nm-title2"},t?K("b",{},St("title")):[document.createTextNode("NUTMEG"),K("b",{},"RUSH")]),K("div",{class:"nm-ribbon"},St("youAre")),s,K("button",{class:"nm-play",onclick:()=>{this.sound.play("whistle"),this.showBrief(e)}},"\u25B6 ",St("play")),K("div",{class:"nm-tiles"},K("button",{class:"nm-tile",onclick:()=>{this.sound.play("tap"),this.showLevels()}},K("i",{},"\u25A6"),St("levels")),K("button",{class:"nm-tile",onclick:()=>{this.sound.play("tap"),this.showShop()}},K("i",{},"\u26BD"),St("balls")),K("button",{class:"nm-tile",onclick:()=>{this.sound.play("tap"),this.showSettings()}},K("i",{},"\u2699"),St("settings"))))),this._soundPill()}showLevels(){this._clear();let t=de.getLang()!=="en",e=hn.map((n,s)=>{let r=s+1>this.save.unlocked,a=this.save.stars[s]||0;return K("button",{class:`nm-lvl${r?" lock":""}`,onclick:()=>{if(r){this.hint(St("locked"));return}this.sound.play("tap"),this.showBrief(s)}},K("span",{style:`font-size:${O(7)}`},de.num(s+1)),K("span",{},t?n.ar:n.en),K("span",{},r?"\u{1F512}":"\u2B50".repeat(a)||"\u2606"))});this._card(K("div",{class:"nm-title"},St("select")),K("div",{class:"nm-grid"},e),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},St("back"))),this.hintEl=K("div",{class:"nm-hint"}),this.layer.append(this.hintEl),this._soundPill()}showShop(){this._clear();let t=de.getLang()!=="en",e=()=>{this._clear();let n=Wi.map(s=>{let r=this.save.owned.includes(s.id),a=this.save.skin===s.id,o=c=>`#${c.toString(16).padStart(6,"0")}`;return K("button",{class:`nm-ball${a?" sel":""}`,onclick:()=>{if(r)Ul(this.save,s.id),this.sound.play("tap");else if(Dl(this.save,s.id))this.sound.play("coin");else{this.hint(St("poor"));return}this.skinApply(),this.post({type:"save",save:this.save}),e()}},K("i",{style:`background:radial-gradient(circle at 35% 30%,#fff3 0,transparent 30%),radial-gradient(circle at 70% 70%,${o(s.patch)} 0 16%,transparent 17%),radial-gradient(circle at 25% 65%,${o(s.patch)} 0 14%,transparent 15%),${o(s.base)}`}),K("span",{},t?s.ar:s.en),K("span",{},a?St("on"):r?St("owned"):`\u{1FA99} ${de.num(s.price)}`))});this._card(K("div",{class:"nm-title"},"\u26BD ",St("balls")),this._coinsPill(),K("div",{class:"nm-grid"},n),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},St("back"))),this.hintEl=K("div",{class:"nm-hint"}),this.layer.append(this.hintEl),this._soundPill()};e()}showSettings(){this._clear();let t=K("button",{class:"nm-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.post({type:"save",save:this.save}),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${St("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${St("sound")}`);this._card(K("div",{class:"nm-title"},"\u2699\uFE0F ",St("settings")),t,K("div",{class:"nm-small"},St("how")),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},St("back"))),this._soundPill()}showBrief(t){this.levelIdx=t,this._newMatch(t),this.startLevel()}_newMatch(t){this.m=new Sr({level:t,seed:(Date.now()&255)+1,easy:this.age<=4}),this._clearActors(),this._buildActors(),this.fx=[],this.shake=0,this.camInit=!1,this.celebrate=0}startLevel(){this._clear(),this.mode="play",this.paused=!1,this.sound.crowd(!0),this.sound.excite(.3),this.hudCoins=K("span",{},"0"),this.hudLevel=K("span"),this.livesEl=K("div",{class:"nm-pill nm-lives"},...[0,1,2].map(()=>K("i"))),this.lastLives=-1,this.lastCoins=-1;let t=K("button",{class:"nm-round","aria-label":St("paused"),onclick:()=>this.togglePause()},"\u23F8");this.layer.append(K("div",{class:"nm-top"},t,K("div",{class:"nm-pill",style:`font-size:${O(3.3)}`},this.hudLevel),this.livesEl,K("div",{class:"nm-pill",style:`font-size:${O(3.6)};padding:${O(1)} ${O(2.2)}`},"\u{1FA99}",this.hudCoins))),this.progEl=K("div",{class:"nm-prog"},K("b"),K("i"),K("span",{},"\u{1F945}")),this.layer.append(this.progEl),this.heatEl=K("div",{class:"nm-heat"},K("b")),this.layer.append(this.heatEl),this.tipEl=K("div",{class:"nm-tip"}),this.layer.append(this.tipEl),this.shownTips={},this.banner=K("div",{class:"nm-banner"}),this.layer.append(this.banner),this.hintEl=K("div",{class:"nm-hint",style:`top:${O(25)}`}),this.layer.append(this.hintEl),this.shootBtn=null,this._soundPill(),this.say("levelN","yellow",`${St("levelN")} ${de.num(this.levelIdx+1)}`),this.tip("dragMove",4200,"\u{1F446}")}say(t,e="yellow",n=null){this.banner&&(this.banner.textContent=n||St(t),this.banner.className=`nm-banner ${e}`,this.banner.offsetWidth,this.banner.classList.add("show"))}tip(t,e=3e3,n=""){this.tipEl&&(this.tipEl.replaceChildren(...n?[K("em",{},n)]:[],document.createTextNode(St(t))),this.tipEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.tipEl&&this.tipEl.classList.remove("show"),e))}hideTip(){this.tipEl&&this.tipEl.classList.remove("show"),clearTimeout(this._tt)}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.pauseEl=K("div",{class:"nm-dim"},K("div",{class:"nm-card"},K("div",{class:"nm-title"},St("paused")),K("button",{class:"nm-btn",onclick:()=>this.togglePause()},"\u25B6 ",St("resume")),K("button",{class:"nm-btn dark",onclick:()=>{this.showBrief(this.levelIdx)}},"\u{1F504} ",St("restart")),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},"\u{1F3E0} ",St("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_finish(t){let e=this.levelIdx,n=this.save;n.stars[e]=Math.max(n.stars[e],t.stars),n.unlocked=Math.max(n.unlocked,Math.min(5,e+2)),n.coins+=t.coins,n.goals+=1,n.tricks+=t.tricks,n.best[e]=Math.max(n.best[e],t.score),this.post({type:"save",save:n}),this.sound.play("win"),this.mode="result",this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null);let s=(a,o)=>K("div",{class:"nm-row"},K("span",{},a),K("span",{},o)),r=K("div",{class:"nm-stars"},...[1,2,3].map(a=>K("span",{class:a<=t.stars?"":"off"},"\u2B50")));this.layer.append(K("div",{class:"nm-dim",style:"background:rgba(5,8,25,.45)"},K("div",{class:"nm-white"},K("h2",{},St("goal")),r,K("p",{},St("win")),s(St("score"),de.num(t.score)),s(`\u{1F9B5} ${St("nut")}`,de.num(t.stats.nutmegs)),s(`\u{1F535} ${St("one")}`,de.num(t.stats.onetwos)),s(`\u{1F4A8} ${St("dod")}`,de.num(t.stats.dodges)),s(`\u{1FA99} ${St("coins")}`,`+${de.num(t.coins)}`),e<4?K("button",{class:"nm-red",onclick:()=>this.showBrief(e+1)},"\u25B6 ",St("next")):K("button",{class:"nm-red",onclick:()=>this.showBrief(e)},"\u21BB ",St("tryAgain")),K("button",{class:"nm-navy",onclick:()=>this.showMenu()},"\u2302 ",St("menu")))))}_fail(t){let e=this.levelIdx,n=this.save;n.coins+=t.coins,this.post({type:"save",save:n}),this.mode="result",this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null),this.hideTip();let s=t.reason==="saved";this.layer.append(K("div",{class:"nm-dim",style:"background:rgba(5,8,25,.45)"},K("div",{class:"nm-white"},K("h2",{},St(s?"savedT":"fullTime")),K("p",{},St(s?"savedSub":"fullTimeSub")),t.coins?K("div",{class:"nm-row"},K("span",{},"\u{1FA99}"),K("span",{},`+${de.num(t.coins)}`)):null,K("button",{class:"nm-red",onclick:()=>{this.sound.play("tap"),this.showBrief(e)}},"\u21BB ",St("tryAgain")),K("button",{class:"nm-navy",onclick:()=>this.showMenu()},"\u2302 ",St("menu")))))}_clearActors(){for(let t of[...this.defMeshes,...this.mateMeshes])this.scene.remove(t.g),t.lane&&this.scene.remove(t.lane),t.lane2&&this.scene.remove(t.lane2);for(let t of this.dummyMeshes||[])this.scene.remove(t);for(let t of this.coinMeshes||[])this.scene.remove(t.g);this.defMeshes=[],this.mateMeshes=[],this.dummyMeshes=[],this.coinMeshes=[]}_buildActors(){let t=[[14689322,7997968,15775888,2759184],[13638202,5900832,13142624,1118481],[15222810,6953482,15247488,6961690],[13113946,4852266,9067066,1710618]];for(let s of this.m.defenders){let r=t[s.id%t.length],a=Xo(r[0],r[1],r[2],r[3]);a.scale.setScalar(.85),this.scene.add(a);let o=wt(Mt.plane,en(16718362,.4),0,.09,0,Ho,gs,1);o.rotation.x=-Math.PI/2,o.visible=!1,this.scene.add(o);let c=wt(Mt.plane,new we({map:this.chevTex,transparent:!0,opacity:.8,depthWrite:!1,side:We}),0,.1,0,Ho*.8,gs,1);c.rotation.x=-Math.PI/2,c.visible=!1,this.scene.add(c);let l=new ci(new Wn({map:this.markTex,transparent:!0,depthTest:!1}));l.scale.set(2.2,2.2,1),l.position.y=8,l.visible=!1,a.add(l);let h=wt(Mt.circle,en(16765466,.85),0,.06,.6,1.5,1.5,1.5);h.rotation.x=-Math.PI/2,a.add(h),this.defMeshes.push({g:a,lane:o,lane2:c,mark:l,gap:h,d:s,ph:s.id*1.7})}for(let s of this.m.mates){let r=Xo(5949695,1727130,15775888,2767450);r.scale.setScalar(.85),this.scene.add(r);let a=wt(Mt.ring,en(5949695,.7),0,.1,0,3.2,3.2,3.2);a.rotation.x=-Math.PI/2,r.add(a),this.mateMeshes.push({g:r,mt:s,ring:a})}for(let s of this.m.dummies){let r=new Ae,a=ne(16762394,4863488);r.add(wt(Mt.cyl,ne(3817290),0,.15,0,1.5,.3,1.5),wt(Mt.cyl,a,0,1.9,0,.55,3.2,.55),wt(Mt.sphere,a,0,1.95,0,1.45,1.9,.75),wt(Mt.sphere,a,0,3.55,0,.8,.8,.8)),r.position.set(_e(s.x),0,s.z),this.scene.add(r),this.dummyMeshes.push(r)}let e=new we({color:16761370}),n=new we({color:16771200});for(let s of this.m.coinList){let r=new Ae,a=wt(Mt.cyl,e,0,0,0,.9,.16,.9);a.rotation.x=Math.PI/2;let o=wt(Mt.cyl,n,0,0,.09,.5,.05,.5);o.rotation.x=Math.PI/2,r.add(a,o),r.position.set(_e(s.x),.95,s.z),this.scene.add(r),this.coinMeshes.push({g:r,c:s})}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e,this.mode==="play"&&!this.paused&&this.m&&(this._input(),this._update(e)),this._render(e)}_update(t){let e=this.m;for(let n of e.step(t))switch(n.type){case"tackleWarn":this.sound.play("warn");break;case"slide":this.sound.play("slide");break;case"nutmeg":this.sound.play("nutmeg"),this.say("nutmeg","yellow"),this._burst(this.ball.position,16769098,14),this.sound.excite(.6);break;case"onetwo":this.sound.play("onetwo"),this.sound.play("kick"),this.say("onetwo","cyan"),this._burst(this.ball.position,5949695,14),this.hideTip();break;case"dodge":this.sound.play("dodge"),this.say("dodge","cyan");break;case"stolen":this.sound.play("stolen"),this.say("stolen","red"),this.shake=.7,this.sound.excite(.15);break;case"burn":this.sound.play("burn"),this.say("burn","yellow"),this._burst(this.ball.position,16738842,24);break;case"cometOn":this.sound.play("comet"),this.say("comet"),this.sound.excite(.9);break;case"cometOff":this.sound.excite(.3);break;case"shootStart":this._shootUI(),this.sound.play("whistle");break;case"coin":this.sound.play("coin"),this._burst(this.ball.position,16765498,5);break;case"blocked":this.sound.play("tap"),this.say("blocked","red"),this.shake=.3;break;case"mateHint":this.tip("mate",3600);break;case"lost":this.sound.play("stolen");break;case"shoot":this.sound.play("shot"),this.hideTip(),this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null);break;case"save":this.sound.play("save"),this.say("savedT","cyan"),this.shake=.6;break;case"goal":this.sound.play("goal"),this.say("goal"),this.celebrate=3,this.netT=0,this.netX=n.x,this._confettiBurst();break;case"end":n.result.goal?this._finish(n.result):this._fail(n.result);break;default:break}if(this.mode==="play"){let n=de.getLang()!=="en";this.hudLevel.textContent=`${St("lv")} ${de.num(this.levelIdx+1)}  ${n?hn[this.levelIdx].ar:hn[this.levelIdx].en}`.toUpperCase(),this.lastLives!==e.lives&&(this.lastLives=e.lives,[...this.livesEl.children].forEach((r,a)=>r.classList.toggle("off",a>=e.lives))),this.lastCoins!==e.coins+this.save.coins&&(this.lastCoins=e.coins+this.save.coins,this.hudCoins.textContent=de.num(this.save.coins+e.coins));let s=e.progress*100;if(this.progEl.firstChild.style.width=`${s}%`,this.progEl.children[1].style.left=`${s}%`,this.heatEl.firstChild.style.width=`${e.heat}%`,this.heatEl.classList.toggle("comet",e.comet),this.heatEl.classList.toggle("on",e.heat>1),!this.shownTips.through&&this.levelIdx===0&&e.defenders.some(r=>r.state==="chase"&&Math.hypot(r.x-e.ball.x,r.z-e.ball.z)<10)&&(this.shownTips.through=!0,this.tip("through",3200)),this.shootBtn){let r=e.targetSafe();r!==this._ok&&(this._ok=r,this.shootBtn.className=`nm-shoot ${r?"go":"wait"}`,this.shootBtn.textContent=St(r?"shootGo":"shootWait"))}}}_shootUI(){this.shootBtn=K("button",{class:"nm-shoot wait",onclick:()=>this._tap()},St("shootWait")),this._ok=null,this.layer.append(this.shootBtn),this.tip("tapShoot",6e4,"\u{1F446}")}_spawn(t,e,n,s,r,a,o,c,l=1){let h=this.parts[this.partI++%this.parts.length];h.s.visible=!0,h.s.position.copy(t),h.v.set(e,n,s),h.life=r,h.t=0,h.z0=a,h.z1=o,h.a=l,h.s.material.color.setHex(c)}_burst(t,e,n){for(let s=0;s<n;s++){let r=Math.random()*6.28;this._spawn(t,Math.cos(r)*6,2+Math.random()*5,Math.sin(r)*6,.7,1.2,.2,e)}}_confettiBurst(){let t=[16730698,16769098,4915082,4897023,16747263],e=new P(_e(this.netX||0),3,Rt.L);for(let n=0;n<70;n++){let s=Math.random()*6.28;this._spawn(e,Math.cos(s)*7,4+Math.random()*8,-Math.abs(Math.sin(s))*7-2,2.2,.9,.5,t[n%5])}}_anim(t,e,n,s,r){let a=t.userData,o=n*12+r,c=0,l=0,h=0,u=0,d=0,p=0,m=0,x=t.userData.sy||0;switch(t.userData.stars.visible=!1,a.body.position.y=0,a.body.position.z=0,e){case"chase":case"idle":c=s?Math.sin(o)*.9:0,l=-c,h=-c,u=c,d=s?Math.abs(Math.sin(o))*.15:0,p=s?.15:0;break;case"windup":d=-.5,p=-.25,h=-2.6,u=1.2,c=-.9+Math.sin(n*25)*.15,l=.4;break;case"slide":p=-1.15,d=-.6,c=-1.6,l=-1.3,h=-2.4,u=1.5;break;case"recover":p=-.5,d=-1.2,c=-1.4,l=-1.4,h=1,u=1,a.stars.visible=!0;break;case"stun":d=Math.abs(Math.sin(n*6))*.2,m=n*10,h=2.8*.2,a.stars.visible=!0;break;case"cheer":d=Math.abs(Math.sin(n*9))*.9,h=-3,u=-3;break;case"watch":h=-.3,u=.3;break;case"wait":h=-2.9+Math.sin(n*8)*.4,u=.2,d=Math.abs(Math.sin(n*3))*.1;break;case"pass":c=-1.2,h=.4,u=-.4,p=.1;break;default:break}a.legL.rotation.x=c,a.legR.rotation.x=l,a.armL.rotation.x=h,a.armR.rotation.x=u,a.body.rotation.x=p,a.body.rotation.y=m,a.body.position.y=d,a.stars.rotation.y=n*6}_render(t){let e=this.m,n=this.scene,s=Rt.L,r=this.clock;if(e){let a=e.ball,o=_e(a.x),c=.55,l=o,h=a.z;if(e.pass&&(c+=Math.sin(Yi(e.pass.t/e.pass.dur,0,1)*Math.PI)*2.6),e.mode==="shot"&&e.shot){let M=Yi(e.shot.t/e.shot.dur,0,1);l=_e(e.shot.x0+(e.shot.tx-e.shot.x0)*M),h=e.shot.z0+(s+(e.shot.saved?-.6:1.8)-e.shot.z0)*M,c+=Math.sin(M*Math.PI)*1.1+M*(e.shot.saved?.6:.9)}e.mode==="goal"&&(l=_e(e.ball.x),h=s+1.8,c=.55),this.ball.position.set(l,c,h),this.ballShadow.position.set(l,.05,h),this.ballShadow.scale.setScalar(1.4-(c-.55)*.2);let u=Math.hypot(a.vx,a.vz)+(e.mode==="shot"?22:0),d=Math.hypot(a.vx,a.vz)>.2||e.mode==="shot"?new P(a.vz||1,0,a.vx).normalize():null;d&&this.ballMesh.rotateOnWorldAxis(d,u*t/.55),!e.mode.startsWith("done")&&this.mode==="play"&&(this.ball.visible=!0);let p=e.heat/100,m=p>.05;this.glow.material.opacity=m?.25+p*.65:0,this.glow.scale.setScalar(2.2+p*3.4+(e.comet?1.4+Math.sin(r*30)*.3:0)),this.glow.material.color.setHex(e.comet?16734746:16760896),this.ballLight.position.set(l,2.5,h),this.ballLight.intensity=.4+p*3+(e.comet?2:0),this.ballLight.color.setHex(e.comet?16742960:m?16760928:this.skinDef.trail);let x=this.ball.position;if(this.mode==="play"&&!this.paused)if(e.comet)for(let M=0;M<3;M++)this._spawn(x,(Math.random()-.5)*2,1.5+Math.random()*2,-a.vz*.15-Math.random()*2,.55,1.8,.2,M%2?16734746:16765498,.9);else u>3&&!(this.partI&1)?this._spawn(x,0,.2,0,.45,.9+p,.1,this.skinDef.trail,.6):this.partI++;for(let M of this.defMeshes){let I=M.d,y=M.g;y.position.set(_e(I.x),0,I.z),y.rotation.y=Math.atan2(-I.hx,I.hz);let U=I.state==="windup"||I.state==="slide";if(M.lane.visible=M.lane2.visible=U,U){let w=I.state==="slide"?I.sx:I.x,D=I.state==="slide"?I.sz:I.z,_=w+I.lx*gs/2,v=D+I.lz*gs/2;for(let q of[M.lane,M.lane2])q.position.x=_e(_),q.position.z=v,q.rotation.z=Math.atan2(I.lx,I.lz);let E=I.state==="windup"?Yi(I.wt/e.def.windup,0,1):.4;M.lane.material.opacity=(.2+.4*Math.abs(Math.sin(r*(10+E*22))))*(I.state==="slide"?.6:1),M.lane2.material.opacity=.25+.5*E*Math.abs(Math.sin(r*20))}M.gap.visible=I.state!=="slide"&&I.state!=="stun"&&!I.nutmegged,M.gap.material.opacity=.55+.3*Math.sin(r*5+M.ph),M.mark.visible=I.state==="windup",M.mark.position.y=8+Math.abs(Math.sin(r*14))*.6,I.state==="slide"&&(y.rotation.y=Math.atan2(-I.lx,I.lz),y.position.y=.3);let S=I.state==="chase";this._anim(y,I.state,r,S,M.ph),y.userData.shadow.visible=I.state!=="slide"}for(let M of this.coinMeshes)M.g.visible=!M.c.got,M.g.rotation.y=r*3+M.c.z,M.g.position.y=.95+Math.sin(r*4+M.c.z)*.12;for(let M of this.mateMeshes){let I=M.mt;M.g.position.set(_e(I.x),0,I.z),M.g.rotation.y=Math.atan2(_e(a.x)-_e(I.x),a.z-I.z),this._anim(M.g,I.state,r,!1,0),M.ring.visible=I.state==="wait",M.ring.scale.setScalar(3.2+Math.sin(r*5)*.3)}let g=e.mode==="shoot"||e.mode==="shot";this.keeperG.position.x=_e(e.keeper.x),this.keeperG.rotation.z=e.mode==="shot"?-im(e.keeper.dir)*1.15*Yi(e.shot?e.shot.t/.25:0,0,1):0,this.keeperG.position.y=e.mode==="shot"?Math.sin(Yi((e.shot?e.shot.t:0)/.5,0,1)*Math.PI)*1.2:0,this._anim(this.keeperG,e.mode==="goal"?"wait":"watch",r,!1,0),this.keeperG.userData.armL.rotation.x=this.keeperG.userData.armR.rotation.x=-1.2+Math.sin(r*6)*.2,this.keeperG.userData.armL.rotation.z=-.8,this.keeperG.userData.armR.rotation.z=.8;let f=e.mode==="shoot";if(this.reachWall.visible=this.reachFloor.visible=this.targetRing.visible=this.safeWall.visible=f,f){let M=e.reachNow();this.reachWall.scale.x=M*2,this.reachWall.position.x=_e(e.keeper.x),this.reachFloor.scale.x=M*2,this.reachFloor.position.x=_e(e.keeper.x),this.reachWall.material.opacity=.22+.12*Math.sin(r*8);let I=e.targetSafe();this.targetRing.position.x=_e(e.target.x),this.targetRing.position.y=1.8+Math.sin(r*3)*.1;for(let y of this.targetRing.children)y.material.color.setHex(I?4259696:16742970);this.targetRing.scale.setScalar(1+(I?.15*Math.sin(r*12):0))}this._camera(t,e),this._net(t)}else{this.menuT=(this.menuT||0)+t;let a=this.menuT*.25;this.ball.position.set(0,.55,6),this.ballShadow.position.set(0,.05,6),this.ballMesh.rotation.y+=t,this.glow.material.opacity=0,this.camera.position.set(Math.sin(a)*22,12+Math.sin(a*.7)*2,6-Math.cos(a)*26),this.camera.lookAt(0,3,14),this.ballLight.intensity=0,this._crowdWas&&(this._crowdMat(r,0),this._crowdWas=!1)}for(let a of this.parts){if(!a.s.visible)continue;if(a.t+=t,a.t>=a.life){a.s.visible=!1;continue}let o=a.t/a.life;a.s.position.addScaledVector(a.v,t),a.v.y-=(a.a===1?6:0)*t,a.s.scale.setScalar(a.z0+(a.z1-a.z0)*o),a.s.material.opacity=(1-o)*Math.min(1,a.a)}this.celebrate>0?(this.celebrate-=t,this._crowdMat(r,.9),this._crowdWas=!0):this._crowdWas&&this.m&&(this._crowdMat(r,0),this._crowdWas=!1),this.renderer.render(n,this.camera)}_camera(t,e){let n=this.ball.position,s=this.camera,r=Rt.L,a=this.portrait,o,c,l,h,u,d;if(e.mode==="goal"){let x=Yi(this.celebrate,0,3);o=n.x*.3+Math.sin(this.clock*.9)*8,c=6+(3-x)*.8,l=r-15,h=n.x*.4,u=2,d=r}else e.mode==="shoot"||e.mode==="shot"?(o=n.x*.3,c=a?10:7,l=r-(a?23:17),h=0,u=1.2,d=r):(o=n.x*.75,c=a?17:14,l=n.z-(a?10.5:10),h=n.x*.8,u=0,d=n.z+(a?9:8));this.camInit||(this.cp=new P(o,c,l),this.cl=new P(h,u,d),this.camInit=!0);let p=1-Math.exp(-t*(e.mode==="play"?7:3.5));this.cp.x+=(o-this.cp.x)*p,this.cp.y+=(c-this.cp.y)*p,this.cp.z+=(l-this.cp.z)*p,this.cl.x+=(h-this.cl.x)*p,this.cl.y+=(u-this.cl.y)*p,this.cl.z+=(d-this.cl.z)*p,this.shake=Math.max(0,(this.shake||0)-t*2);let m=this.shake*.6;s.position.set(this.cp.x+(Math.random()-.5)*m,this.cp.y+(Math.random()-.5)*m,this.cp.z),s.lookAt(this.cl)}_net(t){if(this.netT>2)return;this.netT+=t;let e=this.netBack.geometry.attributes.position,n=this.netBase,s=_e(this.netX||0),r=Rt.GOAL_H/2;for(let a=0;a<e.count;a++){let o=n[a*3],c=n[a*3+1],l=Math.hypot(o-s,c);e.setZ(a,Math.sin(l*2.2-this.netT*14)*Math.exp(-this.netT*2.4)*1.1*Math.exp(-l*.15))}e.needsUpdate=!0}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.dead=!0,this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},im=i=>-i,Zo={start(i,t,e){let n=new Yo(i,t||{},e);return Zo.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.NutmegRush=Zo;var ym=Zo;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
