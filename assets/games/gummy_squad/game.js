(()=>{var To="170";var ih=0,sc=1,sh=2;var hl=1,rh=2,pn=3,Dn=0,Pe=1,Fe=2,Ln=0,wi=1,Nn=2,rc=3,ac=4,ah=5,Qn=100,oh=101,ch=102,lh=103,hh=104,uh=200,dh=201,fh=202,ph=203,ua=204,da=205,gh=206,mh=207,Ah=208,xh=209,yh=210,vh=211,Ch=212,_h=213,Ih=214,fa=0,pa=1,ga=2,Pi=3,ma=4,Aa=5,xa=6,ya=7,ul=0,Mh=1,bh=2,Un=0,Sh=1,Eh=2,wh=3,Vo=4,Th=5,Vh=6,Rh=7;var dl=300,Li=301,Ui=302,va=303,Ca=304,Cr=306,xn=1e3,ei=1001,_a=1002,Oe=1003,Ph=1004;var ys=1005;var en=1006,Lr=1007;var ni=1008;var yn=1009,fl=1010,pl=1011,is=1012,Ro=1013,ii=1014,nn=1015,us=1016,Po=1017,Lo=1018,Di=1020,gl=35902,ml=1021,Al=1022,Je=1023,xl=1024,yl=1025,Ti=1026,Ni=1027,Uo=1028,Do=1029,vl=1030,No=1031;var Bo=1033,Gs=33776,Ws=33777,Xs=33778,Ys=33779,Ia=35840,Ma=35841,ba=35842,Sa=35843,Ea=36196,wa=37492,Ta=37496,Va=37808,Ra=37809,Pa=37810,La=37811,Ua=37812,Da=37813,Na=37814,Ba=37815,Fa=37816,Oa=37817,za=37818,ka=37819,qa=37820,Ha=37821,Zs=36492,Ga=36494,Wa=36495,Cl=36283,Xa=36284,Ya=36285,Za=36286;var Js=2300,Ja=2301,Ur=2302,oc=2400,cc=2401,lc=2402;var Lh=3200,Uh=3201;var _l=0,Dh=1,Pn="",xe="srgb",zi="srgb-linear",_r="linear",te="srgb";var di=7680;var hc=519,Nh=512,Bh=513,Fh=514,Il=515,Oh=516,zh=517,kh=518,qh=519,uc=35044,Ml=35048;var dc="300 es",mn=2e3,js=2001,Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dr=Math.PI/180,ja=180/Math.PI;function ds(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Hh(s,t){return(s%t+t)%t}function Nr(s,t,e){return(1-e)*s+e*t}function Xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var zt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class s{constructor(t,e,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],A=i[0],g=i[3],d=i[6],_=i[1],M=i[4],v=i[7],V=i[2],S=i[5],E=i[8];return r[0]=a*A+o*_+c*V,r[3]=a*g+o*M+c*S,r[6]=a*d+o*v+c*E,r[1]=l*A+h*_+u*V,r[4]=l*g+h*M+u*S,r[7]=l*d+h*v+u*E,r[2]=f*A+p*_+m*V,r[5]=f*g+p*M+m*S,r[8]=f*d+p*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(i*l-h*n)*A,t[2]=(o*n-i*a)*A,t[3]=f*A,t[4]=(h*e-i*c)*A,t[5]=(i*r-o*e)*A,t[6]=p*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Br=new Dt;function bl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gh(){let s=Ks("canvas");return s.style.display="block",s}var fc={};function ts(s){s in fc||(fc[s]=!0,console.warn(s))}function Wh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xh(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yh(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?_r:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var pc=[.64,.33,.3,.6,.15,.06],gc=[.2126,.7152,.0722],mc=[.3127,.329],Ac=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[zi]:{primaries:pc,whitePoint:mc,transfer:_r,toXYZ:Ac,fromXYZ:xc,luminanceCoefficients:gc,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:pc,whitePoint:mc,transfer:te,toXYZ:Ac,fromXYZ:xc,luminanceCoefficients:gc,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});var fi,Ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=Ks("canvas")),fi.width=t.width,fi.height=t.height;let n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zh=0,Qs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fr(i[a].image)):r.push(Fr(i[a]))}else r=Fr(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jh=0,Le=class s extends Bn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ei,i=ei,r=en,a=ni,o=Je,c=yn,l=s.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ds(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=dl;Le.DEFAULT_ANISOTROPY=1;var ee=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],m=c[9],A=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(p+1)/2,V=(d+1)/2,S=(h+f)/4,E=(u+A)/4,w=(m+g)/4;return M>v&&M>V?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=E/n):v>V?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=w/i):V<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(V),n=E/r,i=w/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-A)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||c!==f||l!==p||h!==m){let g=1-o,d=c*f+l*p+h*m+u*A,_=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let V=Math.sqrt(M),S=Math.atan2(V,d*_);g=Math.sin(g*S)/V,o=Math.sin(o*S)/V}let v=o*_;if(c=c*g+f*v,l=l*g+p*v,h=h*g+m*v,u=u*g+A*v,g===1-o){let V=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=V,l*=V,h*=V,u*=V}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*f,t[e+1]=c*m+h*f+l*u-o*p,t[e+2]=l*m+h*p+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),p=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"YZX":this._x=f*h*u+l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u-f*p*m;break;case"XZY":this._x=f*h*u-l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Or=new P,yc=new Fn,Cn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Cs.subVectors(this.max,Yi),pi.subVectors(t.a,Yi),gi.subVectors(t.b,Yi),mi.subVectors(t.c,Yi),Sn.subVectors(gi,pi),En.subVectors(mi,gi),Wn.subVectors(pi,mi);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Wn.z,Wn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Wn.z,0,-Wn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Wn.y,Wn.x,0];return!zr(e,pi,gi,mi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,pi,gi,mi,Cs))?!1:(_s.crossVectors(Sn,En),e=[_s.x,_s.y,_s.z],zr(e,pi,gi,mi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ln=[new P,new P,new P,new P,new P,new P,new P,new P],Xe=new P,vs=new Cn,pi=new P,gi=new P,mi=new P,Sn=new P,En=new P,Wn=new P,Yi=new P,Cs=new P,_s=new P,Xn=new P;function zr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);let o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var jh=new Cn,Zi=new P,kr=new P,On=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);let e=Zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(kr)),this.expandByPoint(Zi.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new P,qr=new P,Is=new P,wn=new P,Hr=new P,Ms=new P,Gr=new P,tr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(qr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=wn.dot(this.direction),c=-wn.dot(Is),l=wn.lengthSq(),h=Math.abs(1-a*a),u,f,p,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qr).addScaledVector(Is,f),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,i,r){Hr.subVectors(e,t),Ms.subVectors(n,t),Gr.crossVectors(Hr,Ms);let a=this.direction.dot(Gr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let c=o*this.direction.dot(Ms.crossVectors(wn,Ms));if(c<0)return null;let l=o*this.direction.dot(Hr.cross(wn));if(l<0||c+l>a)return null;let h=-o*wn.dot(Gr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class s{constructor(t,e,n,i,r,a,o,c,l,h,u,f,p,m,A,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,p,m,A,g)}set(t,e,n,i,r,a,o,c,l,h,u,f,p,m,A,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=A,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=f-A*l,e[9]=-o*c,e[2]=A-f*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,m=l*h,A=l*u;e[0]=f+A*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,m=l*h,A=l*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+A,e[1]=c*u,e[5]=A*l+f,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-f*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+A,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Qh)}lookAt(t,e,n){let i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Tn.crossVectors(n,Ne),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Tn.crossVectors(n,Ne)),Tn.normalize(),bs.crossVectors(Ne,Tn),i[0]=Tn.x,i[4]=bs.x,i[8]=Ne.x,i[1]=Tn.y,i[5]=bs.y,i[9]=Ne.y,i[2]=Tn.z,i[6]=bs.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],A=n[6],g=n[10],d=n[14],_=n[3],M=n[7],v=n[11],V=n[15],S=i[0],E=i[4],w=i[8],I=i[12],y=i[1],T=i[5],z=i[9],O=i[13],H=i[2],J=i[6],G=i[10],tt=i[14],q=i[3],rt=i[7],dt=i[11],Mt=i[15];return r[0]=a*S+o*y+c*H+l*q,r[4]=a*E+o*T+c*J+l*rt,r[8]=a*w+o*z+c*G+l*dt,r[12]=a*I+o*O+c*tt+l*Mt,r[1]=h*S+u*y+f*H+p*q,r[5]=h*E+u*T+f*J+p*rt,r[9]=h*w+u*z+f*G+p*dt,r[13]=h*I+u*O+f*tt+p*Mt,r[2]=m*S+A*y+g*H+d*q,r[6]=m*E+A*T+g*J+d*rt,r[10]=m*w+A*z+g*G+d*dt,r[14]=m*I+A*O+g*tt+d*Mt,r[3]=_*S+M*y+v*H+V*q,r[7]=_*E+M*T+v*J+V*rt,r[11]=_*w+M*z+v*G+V*dt,r[15]=_*I+M*O+v*tt+V*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],A=t[7],g=t[11],d=t[15];return m*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*p-n*c*p)+A*(+e*c*p-e*l*f+r*a*f-i*a*p+i*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],A=t[13],g=t[14],d=t[15],_=u*g*l-A*f*l+A*c*p-o*g*p-u*c*d+o*f*d,M=m*f*l-h*g*l-m*c*p+a*g*p+h*c*d-a*f*d,v=h*A*l-m*u*l+m*o*p-a*A*p-h*o*d+a*u*d,V=m*u*c-h*A*c-m*o*f+a*A*f+h*o*g-a*u*g,S=e*_+n*M+i*v+r*V;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=_*E,t[1]=(A*f*r-u*g*r-A*i*p+n*g*p+u*i*d-n*f*d)*E,t[2]=(o*g*r-A*c*r+A*i*l-n*g*l-o*i*d+n*c*d)*E,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*p-n*c*p)*E,t[4]=M*E,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*E,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*d-e*c*d)*E,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*p+e*c*p)*E,t[8]=v*E,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*d-e*u*d)*E,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*E,t[12]=V*E,t[13]=(h*A*i-m*u*i+m*n*f-e*A*f-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*A*i-m*n*c+e*A*c+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,m=r*u,A=a*h,g=a*u,d=o*u,_=c*l,M=c*h,v=c*u,V=n.x,S=n.y,E=n.z;return i[0]=(1-(A+d))*V,i[1]=(p+v)*V,i[2]=(m-M)*V,i[3]=0,i[4]=(p-v)*S,i[5]=(1-(f+d))*S,i[6]=(g+_)*S,i[7]=0,i[8]=(m+M)*E,i[9]=(g-_)*E,i[10]=(1-(f+A))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ai.set(i[0],i[1],i[2]).length(),a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);let l=1/r,h=1/a,u=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=mn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(o===mn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===js)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=mn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,p=(n+i)*h,m,A;if(o===mn)m=(a+r)*u,A=-2*u;else if(o===js)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ai=new P,Ye=new ae,Kh=new P(0,0,0),Qh=new P(1,1,1),Tn=new P,bs=new P,Ne=new P,vc=new ae,Cc=new Fn,sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$h=0,_c=new P,xi=new Fn,un=new ae,Ss=new P,Ji=new P,tu=new P,eu=new Fn,Ic=new P(1,0,0),Mc=new P(0,1,0),bc=new P(0,0,1),Sc={type:"added"},nu={type:"removed"},yi={type:"childadded",child:null},Wr={type:"childremoved",child:null},ye=class s extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new sn,n=new Fn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Dt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ji,Ss,this.up):un.lookAt(Ss,Ji,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(un),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ye.DEFAULT_UP=new P(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new P,dn=new P,Xr=new P,fn=new P,vi=new P,Ci=new P,Ec=new P,Yr=new P,Zr=new P,Jr=new P,jr=new ee,Kr=new ee,Qr=new ee,$n=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),dn.subVectors(n,e),Xr.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(dn),c=Ze.dot(Xr),l=dn.dot(dn),h=dn.dot(Xr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return jr.setScalar(0),Kr.setScalar(0),Qr.setScalar(0),jr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(jr,r.x),a.addScaledVector(Kr,r.y),a.addScaledVector(Qr,r.z),a}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),dn.subVectors(t,e),Ze.cross(dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ze.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;vi.subVectors(i,n),Ci.subVectors(r,n),Yr.subVectors(t,n);let c=vi.dot(Yr),l=Ci.dot(Yr);if(c<=0&&l<=0)return e.copy(n);Zr.subVectors(t,i);let h=vi.dot(Zr),u=Ci.dot(Zr);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(vi,a);Jr.subVectors(t,r);let p=vi.dot(Jr),m=Ci.dot(Jr);if(m>=0&&p<=m)return e.copy(r);let A=p*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Ci,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Ec.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(Ec,o);let d=1/(g+A+f);return a=A*d,o=f*d,e.copy(n).addScaledVector(vi,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function $r(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Hh(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$r(a,r,t+1/3),this.g=$r(a,r,t),this.b=$r(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=Sl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Zt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Re(Se.r*255,0,255))*65536+Math.round(Re(Se.g*255,0,255))*256+Math.round(Re(Se.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Se.copy(this),e);let n=Se.r,i=Se.g,r=Se.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=xe){Zt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,i=Se.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Es);let n=Nr(Vn.h,Es.h,e),i=Nr(Vn.s,Es.s,e),r=Nr(Vn.l,Es.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Rt;Rt.NAMES=Sl;var iu=0,zn=class extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=ds(),this.name="",this.blending=wi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new P,ws=new zt,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}};var nr=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},su=0,qe=new ae,ta=new ye,_i=new P,Be=new Cn,ji=new Cn,Ae=new P,Ie=class s extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Be.min,ji.min),Be.expandByPoint(Ae),Ae.addVectors(Be.max,ji.max),Be.expandByPoint(Ae)):(Be.expandByPoint(ji.min),Be.expandByPoint(ji.max))}Be.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(t,l),Ae.add(_i)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new P,c[w]=new P;let l=new P,h=new P,u=new P,f=new zt,p=new zt,m=new zt,A=new P,g=new P;function d(w,I,y){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),m.sub(f);let T=1/(p.x*m.y-m.x*p.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(T),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(T),o[w].add(A),o[I].add(A),o[y].add(A),c[w].add(g),c[I].add(g),c[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let w=0,I=_.length;w<I;++w){let y=_[w],T=y.start,z=y.count;for(let O=T,H=T+z;O<H;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new P,v=new P,V=new P,S=new P;function E(w){V.fromBufferAttribute(i,w),S.copy(V);let I=o[w];M.copy(I),M.sub(V.multiplyScalar(V.dot(I))).normalize(),v.crossVectors(S,I);let T=v.dot(c[w])<0?-1:1;a.setXYZW(w,M.x,M.y,M.z,T)}for(let w=0,I=_.length;w<I;++w){let y=_[w],T=y.start,z=y.count;for(let O=T,H=T+z;O<H;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?p=c[A]*o.data.stride+o.offset:p=c[A]*h;for(let d=0;d<h;d++)f[m++]=l[p++]}return new _e(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new ae,Yn=new tr,Ts=new On,Tc=new P,Vs=new P,Rs=new P,Ps=new P,ea=new P,Ls=new P,Vc=new P,Us=new P,jt=class extends ye{constructor(t=new Ie,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ls.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ea.fromBufferAttribute(u,t),a?Ls.addScaledVector(ea,h):Ls.addScaledVector(ea.sub(e),h))}e.add(Ls)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Ts.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ts,Tc)===null||Yn.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,V=M;v<V;v+=3){let S=o.getX(v),E=o.getX(v+1),w=o.getX(v+2);i=Ds(this,d,t,n,l,h,u,S,E,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let _=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);i=Ds(this,a,t,n,l,h,u,_,M,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,V=M;v<V;v+=3){let S=v,E=v+1,w=v+2;i=Ds(this,d,t,n,l,h,u,S,E,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(c.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let _=g,M=g+1,v=g+2;i=Ds(this,a,t,n,l,h,u,_,M,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function ru(s,t,e,n,i,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Dn,o),c===null)return null;Us.copy(o),Us.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:s}}function Ds(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Vs),s.getVertexPosition(c,Rs),s.getVertexPosition(l,Ps);let h=ru(s,t,e,n,Vs,Rs,Ps,Vc);if(h){let u=new P;$n.getBarycoord(Vc,Vs,Rs,Ps,u),i&&(h.uv=$n.getInterpolatedAttribute(i,o,c,l,u,new zt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,c,l,u,new zt)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new P,materialIndex:0};$n.getNormal(Vs,Rs,Ps,f.normal),h.face=f,h.barycoord=u}return h}var si=class s extends Ie{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function m(A,g,d,_,M,v,V,S,E,w,I){let y=v/E,T=V/w,z=v/2,O=V/2,H=S/2,J=E+1,G=w+1,tt=0,q=0,rt=new P;for(let dt=0;dt<G;dt++){let Mt=dt*T-O;for(let Ft=0;Ft<J;Ft++){let ne=Ft*y-z;rt[A]=ne*_,rt[g]=Mt*M,rt[d]=H,l.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[d]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ft/E),u.push(1-dt/w),tt+=1}}for(let dt=0;dt<w;dt++)for(let Mt=0;Mt<E;Mt++){let Ft=f+Mt+J*dt,ne=f+Mt+J*(dt+1),X=f+(Mt+1)+J*(dt+1),et=f+(Mt+1)+J*dt;c.push(Ft,ne,et),c.push(ne,X,et),q+=6}o.addGroup(p,q,I),p+=q,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){let t={};for(let e=0;e<s.length;e++){let n=Bi(s[e]);for(let i in n)t[i]=n[i]}return t}function au(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function El(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var ou={clone:Bi,merge:we},cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sr=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new P,Rc=new zt,Pc=new zt,Ee=class extends sr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Pc),e.subVectors(Pc,Rc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ii=-90,Mi=1,to=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ee(Ii,Mi,t,e);i.layers=this.layers,this.add(i);let r=new Ee(Ii,Mi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(Ii,Mi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(Ii,Mi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(Ii,Mi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(Ii,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},rr=class extends Le{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},eo=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new si(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Ln});r.uniforms.tEquirect.value=e;let a=new jt(i,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=en),new to(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},na=new P,hu=new P,uu=new Dt,gn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=na.subVectors(n,e).cross(hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uu.getNormalMatrix(t),i=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new On,Ns=new P,ss=class{constructor(t=new gn,e=new gn,n=new gn,i=new gn,r=new gn,a=new gn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],m=i[9],A=i[10],g=i[11],d=i[12],_=i[13],M=i[14],v=i[15];if(n[0].setComponents(c-r,f-l,g-p,v-d).normalize(),n[1].setComponents(c+r,f+l,g+p,v+d).normalize(),n[2].setComponents(c+a,f+h,g+m,v+_).normalize(),n[3].setComponents(c-a,f-h,g-m,v-_).normalize(),n[4].setComponents(c-o,f-u,g-A,v-M).normalize(),e===mn)n[5].setComponents(c+o,f+u,g+A,v+M).normalize();else if(e===js)n[5].setComponents(o,u,A,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ns.x=i.normal.x>0?t.max.x:t.min.x,Ns.y=i.normal.y>0?t.max.y:t.min.y,Ns.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function du(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];s.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var ri=class s extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,p=[],m=[],A=[],g=[];for(let d=0;d<h;d++){let _=d*f-a;for(let M=0;M<l;M++){let v=M*u-r;m.push(v,-_,0),A.push(0,0,1),g.push(M/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let M=_+l*d,v=_+l*(d+1),V=_+1+l*(d+1),S=_+1+l*d;p.push(M,v,S),p.push(v,V,S)}this.setIndex(p),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(A,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},fu=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHATEST
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
#endif`,vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
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
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Su=`#ifdef USE_IRIDESCENCE
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
#endif`,Eu=`#ifdef USE_BUMPMAP
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,ju=`#ifdef USE_FOG
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
#endif`,$u=`#ifdef USE_FOG
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
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_d=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
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
#endif`,Dd=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
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
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`#ifdef USE_SKINNING
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
}`,xf=`uniform samplerCube tCube;
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,_f=`#define DISTANCE
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
}`,bf=`uniform float scale;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,wf=`uniform vec3 diffuse;
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
}`,Vf=`#define LAMBERT
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
}`,Rf=`#define MATCAP
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Df=`#define PHONG
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
}`,Nf=`#define PHONG
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
}`,Bf=`#define STANDARD
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,zf=`#define TOON
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
}`,kf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:fu,alphahash_pars_fragment:pu,alphamap_fragment:gu,alphamap_pars_fragment:mu,alphatest_fragment:Au,alphatest_pars_fragment:xu,aomap_fragment:yu,aomap_pars_fragment:vu,batching_pars_vertex:Cu,batching_vertex:_u,begin_vertex:Iu,beginnormal_vertex:Mu,bsdfs:bu,iridescence_fragment:Su,bumpmap_pars_fragment:Eu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Ru,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Uu,color_vertex:Du,common:Nu,cube_uv_reflection_fragment:Bu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Ou,displacementmap_vertex:zu,emissivemap_fragment:ku,emissivemap_pars_fragment:qu,colorspace_fragment:Hu,colorspace_pars_fragment:Gu,envmap_fragment:Wu,envmap_common_pars_fragment:Xu,envmap_pars_fragment:Yu,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:rd,envmap_vertex:Ju,fog_vertex:ju,fog_pars_vertex:Ku,fog_fragment:Qu,fog_pars_fragment:$u,gradientmap_pars_fragment:td,lightmap_pars_fragment:ed,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:cd,lights_phong_pars_fragment:ld,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:dd,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:xd,map_fragment:yd,map_pars_fragment:vd,map_particle_fragment:Cd,map_particle_pars_fragment:_d,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Md,morphinstance_vertex:bd,morphcolor_vertex:Sd,morphnormal_vertex:Ed,morphtarget_pars_vertex:wd,morphtarget_vertex:Td,normal_fragment_begin:Vd,normal_fragment_maps:Rd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Ud,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Od,opaque_fragment:zd,packing:kd,premultiplied_alpha_fragment:qd,project_vertex:Hd,dithering_fragment:Gd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:jd,shadowmask_pars_fragment:Kd,skinbase_vertex:Qd,skinning_pars_vertex:$d,skinning_vertex:tf,skinnormal_vertex:ef,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:cf,uv_pars_fragment:lf,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:df,background_vert:ff,background_frag:pf,backgroundCube_vert:gf,backgroundCube_frag:mf,cube_vert:Af,cube_frag:xf,depth_vert:yf,depth_frag:vf,distanceRGBA_vert:Cf,distanceRGBA_frag:_f,equirect_vert:If,equirect_frag:Mf,linedashed_vert:bf,linedashed_frag:Sf,meshbasic_vert:Ef,meshbasic_frag:wf,meshlambert_vert:Tf,meshlambert_frag:Vf,meshmatcap_vert:Rf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Uf,meshphong_vert:Df,meshphong_frag:Nf,meshphysical_vert:Bf,meshphysical_frag:Ff,meshtoon_vert:Of,meshtoon_frag:zf,points_vert:kf,points_frag:qf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Wf,sprite_frag:Xf},it={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},tn={basic:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:we([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:we([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:we([it.points,it.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:we([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:we([it.common,it.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:we([it.sprite,it.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:we([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:we([it.lights,it.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};tn.physical={uniforms:we([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Bs={r:0,b:0,g:0},Jn=new sn,Yf=new ae;function Zf(s,t,e,n,i,r,a){let o=new Rt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function m(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function A(_){let M=!1,v=m(_);v===null?d(o,c):v&&v.isColor&&(d(v,1),M=!0);let V=s.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,M){let v=m(M);v&&(v.isCubeTexture||v.mapping===Cr)?(h===void 0&&(h=new jt(new si(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Bi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Jn.copy(M.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Jn)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==te,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new jt(new ri(2,2),new an({name:"BackgroundMaterial",uniforms:Bi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,M){_.getRGB(Bs,El(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),c=M,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(o,c)},render:A,addToRenderList:g}}function Jf(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,T,z,O,H){let J=!1,G=u(O,z,T);r!==G&&(r=G,l(r.object)),J=p(y,O,z,H),J&&m(y,O,z,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(y,T,z,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,T,z){let O=z.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let J=H[T.id];J===void 0&&(J={},H[T.id]=J);let G=J[O];return G===void 0&&(G=f(c()),J[O]=G),G}function f(y){let T=[],z=[],O=[];for(let H=0;H<e;H++)T[H]=0,z[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,T,z,O){let H=r.attributes,J=T.attributes,G=0,tt=z.getAttributes();for(let q in tt)if(tt[q].location>=0){let dt=H[q],Mt=J[q];if(Mt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function m(y,T,z,O){let H={},J=T.attributes,G=0,tt=z.getAttributes();for(let q in tt)if(tt[q].location>=0){let dt=J[q];dt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),H[q]=Mt,G++}r.attributes=H,r.attributesNum=G,r.index=O}function A(){let y=r.newAttributes;for(let T=0,z=y.length;T<z;T++)y[T]=0}function g(y){d(y,0)}function d(y,T){let z=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;z[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),H[y]!==T&&(s.vertexAttribDivisor(y,T),H[y]=T)}function _(){let y=r.newAttributes,T=r.enabledAttributes;for(let z=0,O=T.length;z<O;z++)T[z]!==y[z]&&(s.disableVertexAttribArray(z),T[z]=0)}function M(y,T,z,O,H,J,G){G===!0?s.vertexAttribIPointer(y,T,z,H,J):s.vertexAttribPointer(y,T,z,O,H,J)}function v(y,T,z,O){A();let H=O.attributes,J=z.getAttributes(),G=T.defaultAttributeValues;for(let tt in J){let q=J[tt];if(q.location>=0){let rt=H[tt];if(rt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){let dt=rt.normalized,Mt=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;let ne=Ft.buffer,X=Ft.type,et=Ft.bytesPerElement,vt=X===s.INT||X===s.UNSIGNED_INT||rt.gpuType===Ro;if(rt.isInterleavedBufferAttribute){let at=rt.data,wt=at.stride,Pt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<q.locationSize;Ot++)d(q.location+Ot,at.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)g(q.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Ot=0;Ot<q.locationSize;Ot++)M(q.location+Ot,Mt/q.locationSize,X,dt,wt*et,(Pt+Mt/q.locationSize*Ot)*et,vt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)d(q.location+at,rt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<q.locationSize;at++)g(q.location+at);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let at=0;at<q.locationSize;at++)M(q.location+at,Mt/q.locationSize,X,dt,Mt*et,Mt/q.locationSize*at*et,vt)}}else if(G!==void 0){let dt=G[tt];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(q.location,dt);break;case 3:s.vertexAttrib3fv(q.location,dt);break;case 4:s.vertexAttrib4fv(q.location,dt);break;default:s.vertexAttrib1fv(q.location,dt)}}}}_()}function V(){w();for(let y in n){let T=n[y];for(let z in T){let O=T[z];for(let H in O)h(O[H].object),delete O[H];delete T[z]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let z in T){let O=T[z];for(let H in O)h(O[H].object),delete O[H];delete T[z]}delete n[y.id]}function E(y){for(let T in n){let z=n[T];if(z[y.id]===void 0)continue;let O=z[y.id];for(let H in O)h(O[H].object),delete O[H];delete z[y.id]}}function w(){I(),a=!0,r!==i&&(r=i,l(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:V,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:_}}function jf(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Kf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Je&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let w=E===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==nn&&!w)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:V,maxSamples:S}}function Qf(s){let t=this,e=null,n=0,i=!1,r=!1,a=new gn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,M=_*4,v=d.clippingState||null;c.value=v,v=h(m,f,M,p);for(let V=0;V!==M;++V)v[V]=e[V];d.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let d=p+A*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,v=p;M!==A;++M,v+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function $f(s){let t=new WeakMap;function e(a,o){return o===va?a.mapping=Li:o===Ca&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===va||o===Ca)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new eo(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends sr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ei=4,Lc=[.125,.215,.35,.446,.526,.582],ti=20,ia=new ar,Uc=new Rt,sa=null,ra=0,aa=0,oa=!1,Kn=(1+Math.sqrt(5))/2,bi=1/Kn,Dc=[new P(-Kn,bi,0),new P(Kn,bi,0),new P(-bi,0,Kn),new P(bi,0,Kn),new P(0,Kn,-bi),new P(0,Kn,bi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,aa),this._renderer.xr.enabled=oa,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:us,format:Je,colorSpace:zi,depthBuffer:!1},i=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(r)),this._blurMaterial=ep(r,t,e)}return i}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,i){let o=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Uc),h.toneMapping=Un,h.autoClear=!1;let p=new rn({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new jt(new si,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(Uc),A=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let M=this._cubeSize;Fs(i,_*M,d>2?M:0,M,M),h.setRenderTarget(i),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Li||t.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dc[(i-r-1)%Dc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new jt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ti;g>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ti}`);let d=[],_=0;for(let E=0;E<ti;++E){let w=E/A,I=Math.exp(-w*w/2);d.push(I),E===0?_+=I:E<g&&(_+=2*I)}for(let E=0;E<d.length;E++)d[E]=d[E]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let v=this._sizeLods[i],V=3*v*(i>M-Ei?i-M+Ei:0),S=4*(this._cubeSize-v);Fs(e,V,S,3*v,2*v),c.setRenderTarget(e),c.render(u,ia)}};function tp(s){let t=[],e=[],n=[],i=s,r=s-Ei+1+Lc.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ei?c=Lc[a-s+Ei-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,d=1,_=new Float32Array(A*m*p),M=new Float32Array(g*m*p),v=new Float32Array(d*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,w=S>2?0:-1,I=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];_.set(I,A*m*S),M.set(f,g*m*S);let y=[S,S,S,S,S,S];v.set(y,d*m*S)}let V=new Ie;V.setAttribute("position",new _e(_,A)),V.setAttribute("uv",new _e(M,g)),V.setAttribute("faceIndex",new _e(v,d)),t.push(V),i>Ei&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(s,t,e){let n=new vn(s,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ep(s,t,e){let n=new Float32Array(ti),i=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Bc(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Fc(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function np(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===va||c===Ca,h=c===Li||c===Ui;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new or(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new or(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ip(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sp(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,d=A.length;g<d;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,d=A.length;g<d;g++)t.update(A[g],s.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let _=p.array;A=p.version;for(let M=0,v=_.length;M<v;M+=3){let V=_[M+0],S=_[M+1],E=_[M+2];f.push(V,S,S,E,E,V)}}else if(m!==void 0){let _=m.array;A=m.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let V=M+0,S=M+1,E=M+2;f.push(V,S,S,E,E,V)}}else return;let g=new(bl(f)?ir:nr)(f,1);g.version=A;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function rp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],A[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,A,0,m);let d=0;for(let _=0;_<m;_++)d+=p[_]*A[_];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ap(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function op(s,t,e){let n=new WeakMap,i=new ee;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let I=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),A===!0&&(M=3);let v=o.attributes.position.count*M,V=1;v>t.maxTextureSize&&(V=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*V*4*u),E=new $s(S,v,V,u);E.type=nn,E.needsUpdate=!0;let w=M*4;for(let y=0;y<u;y++){let T=g[y],z=d[y],O=_[y],H=v*V*4*y;for(let J=0;J<T.count;J++){let G=J*w;p===!0&&(i.fromBufferAttribute(T,J),S[H+G+0]=i.x,S[H+G+1]=i.y,S[H+G+2]=i.z,S[H+G+3]=0),m===!0&&(i.fromBufferAttribute(z,J),S[H+G+4]=i.x,S[H+G+5]=i.y,S[H+G+6]=i.z,S[H+G+7]=0),A===!0&&(i.fromBufferAttribute(O,J),S[H+G+8]=i.x,S[H+G+9]=i.y,S[H+G+10]=i.z,S[H+G+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new zt(v,V)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<l.length;A++)p+=l[A];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function cp(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var cr=class extends Le{constructor(t,e,n,i,r,a,o,c,l,h=Ti){if(h!==Ti&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=ii),n===void 0&&h===Ni&&(n=Di),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Tl=new Le,Oc=new cr(1,1),Vl=new $s,Rl=new $a,Pl=new rr,zc=[],kc=[],qc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function ki(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=zc[i];if(r===void 0&&(r=new Float32Array(i),zc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ir(s,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function hp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function up(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function dp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function fp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Gc.set(n),s.uniformMatrix2fv(this.addr,!1,Gc),me(e,n)}}function pp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Hc.set(n),s.uniformMatrix3fv(this.addr,!1,Hc),me(e,n)}}function gp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;qc.set(n),s.uniformMatrix4fv(this.addr,!1,qc),me(e,n)}}function mp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ap(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function xp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function vp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function _p(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Ip(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Mp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Oc.compareFunction=Il,r=Oc):r=Tl,e.setTexture2D(t||r,i)}function bp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rl,i)}function Sp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pl,i)}function Ep(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vl,i)}function wp(s){switch(s){case 5126:return lp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return gp;case 5124:case 35670:return mp;case 35667:case 35671:return Ap;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return vp;case 36294:return Cp;case 36295:return _p;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Tp(s,t){s.uniform1fv(this.addr,t)}function Vp(s,t){let e=ki(t,this.size,2);s.uniform2fv(this.addr,e)}function Rp(s,t){let e=ki(t,this.size,3);s.uniform3fv(this.addr,e)}function Pp(s,t){let e=ki(t,this.size,4);s.uniform4fv(this.addr,e)}function Lp(s,t){let e=ki(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Up(s,t){let e=ki(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dp(s,t){let e=ki(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Np(s,t){s.uniform1iv(this.addr,t)}function Bp(s,t){s.uniform2iv(this.addr,t)}function Fp(s,t){s.uniform3iv(this.addr,t)}function Op(s,t){s.uniform4iv(this.addr,t)}function zp(s,t){s.uniform1uiv(this.addr,t)}function kp(s,t){s.uniform2uiv(this.addr,t)}function qp(s,t){s.uniform3uiv(this.addr,t)}function Hp(s,t){s.uniform4uiv(this.addr,t)}function Gp(s,t,e){let n=this.cache,i=t.length,r=Ir(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Tl,r[a])}function Wp(s,t,e){let n=this.cache,i=t.length,r=Ir(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Rl,r[a])}function Xp(s,t,e){let n=this.cache,i=t.length,r=Ir(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Pl,r[a])}function Yp(s,t,e){let n=this.cache,i=t.length,r=Ir(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Vl,r[a])}function Zp(s){switch(s){case 5126:return Tp;case 35664:return Vp;case 35665:return Rp;case 35666:return Pp;case 35674:return Lp;case 35675:return Up;case 35676:return Dp;case 5124:case 35670:return Np;case 35667:case 35671:return Bp;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return zp;case 36294:return kp;case 36295:return qp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return Yp}}var no=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}},io=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}},so=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},ca=/(\w+)(\])?(\[|\.)?/g;function Wc(s,t){s.seq.push(t),s.map[t.id]=t}function Jp(s,t,e){let n=s.name,i=n.length;for(ca.lastIndex=0;;){let r=ca.exec(n),a=ca.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wc(e,l===void 0?new no(o,s,t):new io(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new so(o),Wc(e,u)),e=u}}}var Ri=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Jp(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Xc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var jp=37297,Kp=0;function Qp(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Yc=new Dt;function $p(s){Zt._getMatrix(Yc,Zt.workingColorSpace,s);let t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case _r:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Qp(s.getShaderSource(t),a)}else return i}function tg(s,t){let e=$p(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eg(s,t){let e;switch(t){case Sh:e="Linear";break;case Eh:e="Reinhard";break;case wh:e="Cineon";break;case Vo:e="ACESFilmic";break;case Vh:e="AgX";break;case Rh:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Os=new P;function ng(){Zt.getLuminanceCoefficients(Os);let s=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function sg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function es(s){return s!==""}function Jc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(s){return s.replace(ag,cg)}var og=new Map;function cg(s,t){let e=Bt[t];if(e===void 0){let n=og.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(s){return s.replace(lg,hg)}function hg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ug(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function dg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Ui:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function gg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ug(e),l=dg(e),h=fg(e),u=pg(e),f=gg(e),p=ig(e),m=sg(r),A=i.createProgram(),g,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),d.length>0&&(d+=`
`)):(g=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),d=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Un?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=ro(a),a=Jc(a,e),a=jc(a,e),o=ro(o),o=Jc(o,e),o=jc(o,e),a=Kc(a),o=Kc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=_+g+a,v=_+d+o,V=Xc(i,i.VERTEX_SHADER,M),S=Xc(i,i.FRAGMENT_SHADER,v);i.attachShader(A,V),i.attachShader(A,S),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function E(T){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(A).trim(),O=i.getShaderInfoLog(V).trim(),H=i.getShaderInfoLog(S).trim(),J=!0,G=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,V,S);else{let tt=Zc(i,V,"vertex"),q=Zc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+tt+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:J,programLog:z,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:d}})}i.deleteShader(V),i.deleteShader(S),w=new Ri(i,A),I=rg(i,A)}let w;this.getUniforms=function(){return w===void 0&&E(this),w};let I;this.getAttributes=function(){return I===void 0&&E(this),I};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(A,jp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=S,this}var Ag=0,ao=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oo(t),e.set(t,n)),n}},oo=class{constructor(t){this.id=Ag++,this.code=t,this.usedTimes=0}};function xg(s,t,e,n,i,r,a){let o=new er,c=new ao,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(I){return l.add(I),I===0?"uv":`uv${I}`}function g(I,y,T,z,O){let H=z.fog,J=O.geometry,G=I.isMeshStandardMaterial?z.environment:null,tt=(I.isMeshStandardMaterial?e:t).get(I.envMap||G),q=tt&&tt.mapping===Cr?tt.image.height:null,rt=m[I.type];I.precision!==null&&(p=i.getMaxPrecision(I.precision),p!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",p,"instead."));let dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=dt!==void 0?dt.length:0,Ft=0;J.morphAttributes.position!==void 0&&(Ft=1),J.morphAttributes.normal!==void 0&&(Ft=2),J.morphAttributes.color!==void 0&&(Ft=3);let ne,X,et,vt;if(rt){let $t=tn[rt];ne=$t.vertexShader,X=$t.fragmentShader}else ne=I.vertexShader,X=I.fragmentShader,c.update(I),et=c.getVertexShaderID(I),vt=c.getFragmentShaderID(I);let at=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,ue=!!I.map,Xt=!!I.matcap,fe=!!tt,D=!!I.aoMap,ze=!!I.lightMap,qt=!!I.bumpMap,Ht=!!I.normalMap,St=!!I.displacementMap,oe=!!I.emissiveMap,bt=!!I.metalnessMap,b=!!I.roughnessMap,x=I.anisotropy>0,N=I.clearcoat>0,Y=I.dispersion>0,j=I.iridescence>0,W=I.sheen>0,Ct=I.transmission>0,ot=x&&!!I.anisotropyMap,ft=N&&!!I.clearcoatMap,Yt=N&&!!I.clearcoatNormalMap,Q=N&&!!I.clearcoatRoughnessMap,pt=j&&!!I.iridescenceMap,Et=j&&!!I.iridescenceThicknessMap,Tt=W&&!!I.sheenColorMap,gt=W&&!!I.sheenRoughnessMap,Gt=!!I.specularMap,Nt=!!I.specularColorMap,se=!!I.specularIntensityMap,R=Ct&&!!I.transmissionMap,st=Ct&&!!I.thicknessMap,k=!!I.gradientMap,Z=!!I.alphaMap,ht=I.alphaTest>0,ct=!!I.alphaHash,Lt=!!I.extensions,de=Un;I.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=s.toneMapping);let Me={shaderID:rt,shaderType:I.type,shaderName:I.name,vertexShader:ne,fragmentShader:X,defines:I.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:zi,alphaToCoverage:!!I.alphaToCoverage,map:ue,matcap:Xt,envMap:fe,envMapMode:fe&&tt.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:ze,bumpMap:qt,normalMap:Ht,displacementMap:f&&St,emissiveMap:oe,normalMapObjectSpace:Ht&&I.normalMapType===Dh,normalMapTangentSpace:Ht&&I.normalMapType===_l,metalnessMap:bt,roughnessMap:b,anisotropy:x,anisotropyMap:ot,clearcoat:N,clearcoatMap:ft,clearcoatNormalMap:Yt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Tt,sheenRoughnessMap:gt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:se,transmission:Ct,transmissionMap:R,thicknessMap:st,gradientMap:k,opaque:I.transparent===!1&&I.blending===wi&&I.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ct,combine:I.combine,mapUv:ue&&A(I.map.channel),aoMapUv:D&&A(I.aoMap.channel),lightMapUv:ze&&A(I.lightMap.channel),bumpMapUv:qt&&A(I.bumpMap.channel),normalMapUv:Ht&&A(I.normalMap.channel),displacementMapUv:St&&A(I.displacementMap.channel),emissiveMapUv:oe&&A(I.emissiveMap.channel),metalnessMapUv:bt&&A(I.metalnessMap.channel),roughnessMapUv:b&&A(I.roughnessMap.channel),anisotropyMapUv:ot&&A(I.anisotropyMap.channel),clearcoatMapUv:ft&&A(I.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&A(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(I.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&A(I.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(I.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(I.sheenColorMap.channel),sheenRoughnessMapUv:gt&&A(I.sheenRoughnessMap.channel),specularMapUv:Gt&&A(I.specularMap.channel),specularColorMapUv:Nt&&A(I.specularColorMap.channel),specularIntensityMapUv:se&&A(I.specularIntensityMap.channel),transmissionMapUv:R&&A(I.transmissionMap.channel),thicknessMapUv:st&&A(I.thicknessMap.channel),alphaMapUv:Z&&A(I.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ht||x),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(ue||Z),fog:!!H,useFog:I.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&I.map.isVideoTexture===!0&&Zt.getTransfer(I.map.colorSpace)===te,decodeVideoTextureEmissive:oe&&I.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(I.emissiveMap.colorSpace)===te,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Fe,flipSided:I.side===Pe,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Lt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&I.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function d(I){let y=[];if(I.shaderID?y.push(I.shaderID):(y.push(I.customVertexShaderID),y.push(I.customFragmentShaderID)),I.defines!==void 0)for(let T in I.defines)y.push(T),y.push(I.defines[T]);return I.isRawShaderMaterial===!1&&(_(y,I),M(y,I),y.push(s.outputColorSpace)),y.push(I.customProgramCacheKey),y.join()}function _(I,y){I.push(y.precision),I.push(y.outputColorSpace),I.push(y.envMapMode),I.push(y.envMapCubeUVHeight),I.push(y.mapUv),I.push(y.alphaMapUv),I.push(y.lightMapUv),I.push(y.aoMapUv),I.push(y.bumpMapUv),I.push(y.normalMapUv),I.push(y.displacementMapUv),I.push(y.emissiveMapUv),I.push(y.metalnessMapUv),I.push(y.roughnessMapUv),I.push(y.anisotropyMapUv),I.push(y.clearcoatMapUv),I.push(y.clearcoatNormalMapUv),I.push(y.clearcoatRoughnessMapUv),I.push(y.iridescenceMapUv),I.push(y.iridescenceThicknessMapUv),I.push(y.sheenColorMapUv),I.push(y.sheenRoughnessMapUv),I.push(y.specularMapUv),I.push(y.specularColorMapUv),I.push(y.specularIntensityMapUv),I.push(y.transmissionMapUv),I.push(y.thicknessMapUv),I.push(y.combine),I.push(y.fogExp2),I.push(y.sizeAttenuation),I.push(y.morphTargetsCount),I.push(y.morphAttributeCount),I.push(y.numDirLights),I.push(y.numPointLights),I.push(y.numSpotLights),I.push(y.numSpotLightMaps),I.push(y.numHemiLights),I.push(y.numRectAreaLights),I.push(y.numDirLightShadows),I.push(y.numPointLightShadows),I.push(y.numSpotLightShadows),I.push(y.numSpotLightShadowsWithMaps),I.push(y.numLightProbes),I.push(y.shadowMapType),I.push(y.toneMapping),I.push(y.numClippingPlanes),I.push(y.numClipIntersection),I.push(y.depthPacking)}function M(I,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),I.push(o.mask)}function v(I){let y=m[I.type],T;if(y){let z=tn[y];T=ou.clone(z.uniforms)}else T=I.uniforms;return T}function V(I,y){let T;for(let z=0,O=h.length;z<O;z++){let H=h[z];if(H.cacheKey===y){T=H,++T.usedTimes;break}}return T===void 0&&(T=new mg(s,y,I,r),h.push(T)),T}function S(I){if(--I.usedTimes===0){let y=h.indexOf(I);h[y]=h[h.length-1],h.pop(),I.destroy()}}function E(I){c.remove(I)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:V,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:w}}function yg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $c(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tl(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,m,A,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=A,d.group=g),t++,d}function o(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||vg),n.length>1&&n.sort(f||$c),i.length>1&&i.sort(f||$c)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Cg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new tl,s.set(n,[a])):i>=r.length?(a=new tl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function _g(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Rt};break;case"SpotLight":e={position:new P,direction:new P,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Ig(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Mg=0;function bg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sg(s){let t=new _g,e=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,r=new ae,a=new ae;function o(l){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,A=0,g=0,d=0,_=0,M=0,v=0,V=0,S=0,E=0;l.sort(bg);for(let I=0,y=l.length;I<y;I++){let T=l[I],z=T.color,O=T.intensity,H=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*O,u+=z.g*O,f+=z.b*O;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],O);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,q=e.get(T);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=T.shadow.matrix,_++}n.directional[p]=G,p++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(z).multiplyScalar(O),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[A]=G;let tt=T.shadow;if(T.map&&(n.spotLightMap[V]=T.map,V++,tt.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[A]=tt.matrix,T.castShadow){let q=e.get(T);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=J,v++}A++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(z).multiplyScalar(O),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=G,g++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let tt=T.shadow,q=e.get(T);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=T.shadow.matrix,M++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(O),G.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[d]=G,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==p||w.pointLength!==m||w.spotLength!==A||w.rectAreaLength!==g||w.hemiLength!==d||w.numDirectionalShadows!==_||w.numPointShadows!==M||w.numSpotShadows!==v||w.numSpotMaps!==V||w.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+V-S,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,w.directionalLength=p,w.pointLength=m,w.spotLength=A,w.rectAreaLength=g,w.hemiLength=d,w.numDirectionalShadows=_,w.numPointShadows=M,w.numSpotShadows=v,w.numSpotMaps=V,w.numLightProbes=E,n.version=Mg++)}function c(l,h){let u=0,f=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){let M=l[d];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(M.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function el(s){let t=new Sg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Eg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new el(s),t.set(i,[o])):r>=a.length?(o=new el(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var co=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lo=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wg=`void main() {
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
}`;function Vg(s,t,e){let n=new ss,i=new zt,r=new zt,a=new ee,o=new co({depthPacking:Uh}),c=new lo,l={},h=e.maxTextureSize,u={[Dn]:Pe,[Pe]:Dn,[Fe]:Fe},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ie;m.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new jt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let d=this.type;this.render=function(S,E,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let I=s.getRenderTarget(),y=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Ln),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=d!==pn&&this.type===pn,H=d===pn&&this.type!==pn;for(let J=0,G=S.length;J<G;J++){let tt=S[J],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let rt=q.getFrameExtents();if(i.multiply(rt),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,q.mapSize.y=r.y)),q.map===null||O===!0||H===!0){let Mt=this.type!==pn?{minFilter:Oe,magFilter:Oe}:{};q.map!==null&&q.map.dispose(),q.map=new vn(i.x,i.y,Mt),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let dt=q.getViewportCount();for(let Mt=0;Mt<dt;Mt++){let Ft=q.getViewport(Mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),z.viewport(a),q.updateMatrices(tt,Mt),n=q.getFrustum(),v(E,w,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===pn&&_(q,w),q.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(I,y,T)};function _(S,E){let w=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new vn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,w,f,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,w,p,A,null)}function M(S,E,w,I){let y=null,T=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)y=T;else if(y=w.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=y.uuid,O=E.uuid,H=l[z];H===void 0&&(H={},l[z]=H);let J=H[O];J===void 0&&(J=y.clone(),H[O]=J,E.addEventListener("dispose",V)),y=J}if(y.visible=E.visible,y.wireframe=E.wireframe,I===pn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=s.properties.get(y);z.light=w}return y}function v(S,E,w,I,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===pn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let O=t.update(S),H=S.material;if(Array.isArray(H)){let J=O.groups;for(let G=0,tt=J.length;G<tt;G++){let q=J[G],rt=H[q.materialIndex];if(rt&&rt.visible){let dt=M(S,rt,I,y);S.onBeforeShadow(s,S,E,w,O,dt,q),s.renderBufferDirect(w,null,O,dt,S,q),S.onAfterShadow(s,S,E,w,O,dt,q)}}}else if(H.visible){let J=M(S,H,I,y);S.onBeforeShadow(s,S,E,w,O,J,null),s.renderBufferDirect(w,null,O,J,S,null),S.onAfterShadow(s,S,E,w,O,J,null)}}let z=S.children;for(let O=0,H=z.length;O<H;O++)v(z[O],E,w,I,y)}function V(S){S.target.removeEventListener("dispose",V);for(let w in l){let I=l[w],y=S.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}var Rg={[fa]:pa,[ga]:xa,[ma]:ya,[Pi]:Aa,[pa]:fa,[xa]:ga,[ya]:ma,[Aa]:Pi};function Pg(s,t){function e(){let R=!1,st=new ee,k=null,Z=new ee(0,0,0,0);return{setMask:function(ht){k!==ht&&!R&&(s.colorMask(ht,ht,ht,ht),k=ht)},setLocked:function(ht){R=ht},setClear:function(ht,ct,Lt,de,Me){Me===!0&&(ht*=de,ct*=de,Lt*=de),st.set(ht,ct,Lt,de),Z.equals(st)===!1&&(s.clearColor(ht,ct,Lt,de),Z.copy(st))},reset:function(){R=!1,k=null,Z.set(-1,0,0,0)}}}function n(){let R=!1,st=!1,k=null,Z=null,ht=null;return{setReversed:function(ct){if(st!==ct){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let de=ht;ht=null,this.setClear(de)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?at(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(ct){k!==ct&&!R&&(s.depthMask(ct),k=ct)},setFunc:function(ct){if(st&&(ct=Rg[ct]),Z!==ct){switch(ct){case fa:s.depthFunc(s.NEVER);break;case pa:s.depthFunc(s.ALWAYS);break;case ga:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case ma:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case xa:s.depthFunc(s.GREATER);break;case ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){R=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){R=!1,k=null,Z=null,ht=null,st=!1}}}function i(){let R=!1,st=null,k=null,Z=null,ht=null,ct=null,Lt=null,de=null,Me=null;return{setTest:function($t){R||($t?at(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function($t){st!==$t&&!R&&(s.stencilMask($t),st=$t)},setFunc:function($t,Ge,on){(k!==$t||Z!==Ge||ht!==on)&&(s.stencilFunc($t,Ge,on),k=$t,Z=Ge,ht=on)},setOp:function($t,Ge,on){(ct!==$t||Lt!==Ge||de!==on)&&(s.stencilOp($t,Ge,on),ct=$t,Lt=Ge,de=on)},setLocked:function($t){R=$t},setClear:function($t){Me!==$t&&(s.clearStencil($t),Me=$t)},reset:function(){R=!1,st=null,k=null,Z=null,ht=null,ct=null,Lt=null,de=null,Me=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,_=null,M=null,v=null,V=null,S=null,E=new Rt(0,0,0),w=0,I=!1,y=null,T=null,z=null,O=null,H=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=tt>=2);let rt=null,dt={},Mt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ne=new ee().fromArray(Mt),X=new ee().fromArray(Ft);function et(R,st,k,Z){let ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(R,ct),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<k;Lt++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(st+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}let vt={};vt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(Pi),qt(!1),Ht(sc),at(s.CULL_FACE),D(Ln);function at(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function wt(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function Pt(R,st){return u[R]!==st?(s.bindFramebuffer(R,st),u[R]=st,R===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),R===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(R,st){let k=p,Z=!1;if(R){k=f.get(st),k===void 0&&(k=[],f.set(st,k));let ht=R.textures;if(k.length!==ht.length||k[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Lt=ht.length;ct<Lt;ct++)k[ct]=s.COLOR_ATTACHMENT0+ct;k.length=ht.length,Z=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,Z=!0);Z&&s.drawBuffers(k)}function ue(R){return m!==R?(s.useProgram(R),m=R,!0):!1}let Xt={[Qn]:s.FUNC_ADD,[oh]:s.FUNC_SUBTRACT,[ch]:s.FUNC_REVERSE_SUBTRACT};Xt[lh]=s.MIN,Xt[hh]=s.MAX;let fe={[uh]:s.ZERO,[dh]:s.ONE,[fh]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[Ah]:s.DST_COLOR,[gh]:s.DST_ALPHA,[ph]:s.ONE_MINUS_SRC_COLOR,[da]:s.ONE_MINUS_SRC_ALPHA,[xh]:s.ONE_MINUS_DST_COLOR,[mh]:s.ONE_MINUS_DST_ALPHA,[vh]:s.CONSTANT_COLOR,[Ch]:s.ONE_MINUS_CONSTANT_COLOR,[_h]:s.CONSTANT_ALPHA,[Ih]:s.ONE_MINUS_CONSTANT_ALPHA};function D(R,st,k,Z,ht,ct,Lt,de,Me,$t){if(R===Ln){A===!0&&(wt(s.BLEND),A=!1);return}if(A===!1&&(at(s.BLEND),A=!0),R!==ah){if(R!==g||$t!==I){if((d!==Qn||v!==Qn)&&(s.blendEquation(s.FUNC_ADD),d=Qn,v=Qn),$t)switch(R){case wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,M=null,V=null,S=null,E.set(0,0,0),w=0,g=R,I=$t}return}ht=ht||st,ct=ct||k,Lt=Lt||Z,(st!==d||ht!==v)&&(s.blendEquationSeparate(Xt[st],Xt[ht]),d=st,v=ht),(k!==_||Z!==M||ct!==V||Lt!==S)&&(s.blendFuncSeparate(fe[k],fe[Z],fe[ct],fe[Lt]),_=k,M=Z,V=ct,S=Lt),(de.equals(E)===!1||Me!==w)&&(s.blendColor(de.r,de.g,de.b,Me),E.copy(de),w=Me),g=R,I=!1}function ze(R,st){R.side===Fe?wt(s.CULL_FACE):at(s.CULL_FACE);let k=R.side===Pe;st&&(k=!k),qt(k),R.blending===wi&&R.transparent===!1?D(Ln):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let Z=R.stencilWrite;o.setTest(Z),Z&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),oe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(R){y!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),y=R)}function Ht(R){R!==ih?(at(s.CULL_FACE),R!==T&&(R===sc?s.cullFace(s.BACK):R===sh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),T=R}function St(R){R!==z&&(G&&s.lineWidth(R),z=R)}function oe(R,st,k){R?(at(s.POLYGON_OFFSET_FILL),(O!==st||H!==k)&&(s.polygonOffset(st,k),O=st,H=k)):wt(s.POLYGON_OFFSET_FILL)}function bt(R){R?at(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function b(R){R===void 0&&(R=s.TEXTURE0+J-1),rt!==R&&(s.activeTexture(R),rt=R)}function x(R,st,k){k===void 0&&(rt===null?k=s.TEXTURE0+J-1:k=rt);let Z=dt[k];Z===void 0&&(Z={type:void 0,texture:void 0},dt[k]=Z),(Z.type!==R||Z.texture!==st)&&(rt!==k&&(s.activeTexture(k),rt=k),s.bindTexture(R,st||vt[R]),Z.type=R,Z.texture=st)}function N(){let R=dt[rt];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(R){ne.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),ne.copy(R))}function gt(R){X.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function Gt(R,st){let k=l.get(st);k===void 0&&(k=new WeakMap,l.set(st,k));let Z=k.get(R);Z===void 0&&(Z=s.getUniformBlockIndex(st,R.name),k.set(R,Z))}function Nt(R,st){let Z=l.get(st).get(R);c.get(st)!==Z&&(s.uniformBlockBinding(st,Z,R.__bindingPointIndex),c.set(st,Z))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,dt={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,_=null,M=null,v=null,V=null,S=null,E=new Rt(0,0,0),w=0,I=!1,y=null,T=null,z=null,O=null,H=null,ne.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:wt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:ue,setBlending:D,setMaterial:ze,setFlipSided:qt,setCullFace:Ht,setLineWidth:St,setPolygonOffset:oe,setScissorTest:bt,activeTexture:b,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:pt,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Yt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Tt,viewport:gt,reset:se}}function nl(s,t,e,n){let i=Lg(n);switch(e){case ml:return s*t;case xl:return s*t;case yl:return s*t*2;case Uo:return s*t/i.components*i.byteLength;case Do:return s*t/i.components*i.byteLength;case vl:return s*t*2/i.components*i.byteLength;case No:return s*t*2/i.components*i.byteLength;case Al:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case Bo:return s*t*4/i.components*i.byteLength;case Gs:case Ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ma:case Sa:return Math.max(s,16)*Math.max(t,8)/4;case Ia:case ba:return Math.max(s,8)*Math.max(t,8)/2;case Ea:case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zs:case Ga:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Cl:case Xa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ya:case Za:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(s){switch(s){case yn:case fl:return{byteLength:1,components:1};case is:case pl:case us:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case ii:case Ro:case nn:return{byteLength:4,components:1};case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ug(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return p?new OffscreenCanvas(b,x):Ks("canvas")}function A(b,x,N){let Y=1,j=bt(b);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let W=Math.floor(Y*j.width),Ct=Math.floor(Y*j.height);u===void 0&&(u=m(W,Ct));let ot=x?m(W,Ct):u;return ot.width=W,ot.height=Ct,ot.getContext("2d").drawImage(b,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Ct+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function g(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(b,x,N,Y,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=x;if(x===s.RED&&(N===s.FLOAT&&(W=s.R32F),N===s.HALF_FLOAT&&(W=s.R16F),N===s.UNSIGNED_BYTE&&(W=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.R8UI),N===s.UNSIGNED_SHORT&&(W=s.R16UI),N===s.UNSIGNED_INT&&(W=s.R32UI),N===s.BYTE&&(W=s.R8I),N===s.SHORT&&(W=s.R16I),N===s.INT&&(W=s.R32I)),x===s.RG&&(N===s.FLOAT&&(W=s.RG32F),N===s.HALF_FLOAT&&(W=s.RG16F),N===s.UNSIGNED_BYTE&&(W=s.RG8)),x===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.RG8UI),N===s.UNSIGNED_SHORT&&(W=s.RG16UI),N===s.UNSIGNED_INT&&(W=s.RG32UI),N===s.BYTE&&(W=s.RG8I),N===s.SHORT&&(W=s.RG16I),N===s.INT&&(W=s.RG32I)),x===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.RGB8UI),N===s.UNSIGNED_SHORT&&(W=s.RGB16UI),N===s.UNSIGNED_INT&&(W=s.RGB32UI),N===s.BYTE&&(W=s.RGB8I),N===s.SHORT&&(W=s.RGB16I),N===s.INT&&(W=s.RGB32I)),x===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),N===s.UNSIGNED_INT&&(W=s.RGBA32UI),N===s.BYTE&&(W=s.RGBA8I),N===s.SHORT&&(W=s.RGBA16I),N===s.INT&&(W=s.RGBA32I)),x===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),x===s.RGBA){let Ct=j?_r:Zt.getTransfer(Y);N===s.FLOAT&&(W=s.RGBA32F),N===s.HALF_FLOAT&&(W=s.RGBA16F),N===s.UNSIGNED_BYTE&&(W=Ct===te?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(b,x){let N;return b?x===null||x===ii||x===Di?N=s.DEPTH24_STENCIL8:x===nn?N=s.DEPTH32F_STENCIL8:x===is&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===Di?N=s.DEPTH_COMPONENT24:x===nn?N=s.DEPTH_COMPONENT32F:x===is&&(N=s.DEPTH_COMPONENT16),N}function V(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Oe&&b.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function S(b){let x=b.target;x.removeEventListener("dispose",S),w(x),x.isVideoTexture&&h.delete(x)}function E(b){let x=b.target;x.removeEventListener("dispose",E),y(x)}function w(b){let x=n.get(b);if(x.__webglInit===void 0)return;let N=b.source,Y=f.get(N);if(Y){let j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(b),Object.keys(Y).length===0&&f.delete(N)}n.remove(b)}function I(b){let x=n.get(b);s.deleteTexture(x.__webglTexture);let N=b.source,Y=f.get(N);delete Y[x.__cacheKey],a.memory.textures--}function y(b){let x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=b.textures;for(let Y=0,j=N.length;Y<j;Y++){let W=n.get(N[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(b)}let T=0;function z(){T=0}function O(){let b=T;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),T+=1,b}function H(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function J(b,x){let N=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,b,x);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function G(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){X(N,b,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function tt(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){X(N,b,x);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function q(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){et(N,b,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}let rt={[xn]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},dt={[Oe]:s.NEAREST,[Ph]:s.NEAREST_MIPMAP_NEAREST,[ys]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Lr]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},Mt={[Nh]:s.NEVER,[qh]:s.ALWAYS,[Bh]:s.LESS,[Il]:s.LEQUAL,[Fh]:s.EQUAL,[kh]:s.GEQUAL,[Oh]:s.GREATER,[zh]:s.NOTEQUAL};function Ft(b,x){if(x.type===nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Lr||x.magFilter===ys||x.magFilter===ni||x.minFilter===en||x.minFilter===Lr||x.minFilter===ys||x.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,rt[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,rt[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,rt[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,dt[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oe||x.minFilter!==ys&&x.minFilter!==ni||x.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,j=f.get(Y);j===void 0&&(j={},f.set(Y,j));let W=H(x);if(W!==b.__cacheKey){j[W]===void 0&&(j[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[W].usedTimes++;let Ct=j[b.__cacheKey];Ct!==void 0&&(j[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&I(x)),b.__cacheKey=W,b.__webglTexture=j[W].texture}return N}function X(b,x,N){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);let j=ne(b,x),W=x.source;e.bindTexture(Y,b.__webglTexture,s.TEXTURE0+N);let Ct=n.get(W);if(W.version!==Ct.__version||j===!0){e.activeTexture(s.TEXTURE0+N);let ot=Zt.getPrimaries(Zt.workingColorSpace),ft=x.colorSpace===Pn?null:Zt.getPrimaries(x.colorSpace),Yt=x.colorSpace===Pn||ot===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Q=A(x.image,!1,i.maxTextureSize);Q=oe(x,Q);let pt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),Tt=M(x.internalFormat,pt,Et,x.colorSpace,x.isVideoTexture);Ft(Y,x);let gt,Gt=x.mipmaps,Nt=x.isVideoTexture!==!0,se=Ct.__version===void 0||j===!0,R=W.dataReady,st=V(x,Q);if(x.isDepthTexture)Tt=v(x.format===Ni,x.type),se&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,pt,Et,null));else if(x.isDataTexture)if(Gt.length>0){Nt&&se&&e.texStorage2D(s.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let k=0,Z=Gt.length;k<Z;k++)gt=Gt[k],Nt?R&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,gt.width,gt.height,pt,Et,gt.data):e.texImage2D(s.TEXTURE_2D,k,Tt,gt.width,gt.height,0,pt,Et,gt.data);x.generateMipmaps=!1}else Nt?(se&&e.texStorage2D(s.TEXTURE_2D,st,Tt,Q.width,Q.height),R&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Et,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,pt,Et,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Tt,Gt[0].width,Gt[0].height,Q.depth);for(let k=0,Z=Gt.length;k<Z;k++)if(gt=Gt[k],x.format!==Je)if(pt!==null)if(Nt){if(R)if(x.layerUpdates.size>0){let ht=nl(gt.width,gt.height,x.format,x.type);for(let ct of x.layerUpdates){let Lt=gt.data.subarray(ct*ht/gt.data.BYTES_PER_ELEMENT,(ct+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,ct,gt.width,gt.height,1,pt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,gt.width,gt.height,Q.depth,pt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,Tt,gt.width,gt.height,Q.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?R&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,gt.width,gt.height,Q.depth,pt,Et,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,k,Tt,gt.width,gt.height,Q.depth,0,pt,Et,gt.data)}else{Nt&&se&&e.texStorage2D(s.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let k=0,Z=Gt.length;k<Z;k++)gt=Gt[k],x.format!==Je?pt!==null?Nt?R&&e.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,k,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?R&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,gt.width,gt.height,pt,Et,gt.data):e.texImage2D(s.TEXTURE_2D,k,Tt,gt.width,gt.height,0,pt,Et,gt.data)}else if(x.isDataArrayTexture)if(Nt){if(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Tt,Q.width,Q.height,Q.depth),R)if(x.layerUpdates.size>0){let k=nl(Q.width,Q.height,x.format,x.type);for(let Z of x.layerUpdates){let ht=Q.data.subarray(Z*k/Q.data.BYTES_PER_ELEMENT,(Z+1)*k/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,Et,ht)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Et,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,pt,Et,Q.data);else if(x.isData3DTexture)Nt?(se&&e.texStorage3D(s.TEXTURE_3D,st,Tt,Q.width,Q.height,Q.depth),R&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Et,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,pt,Et,Q.data);else if(x.isFramebufferTexture){if(se)if(Nt)e.texStorage2D(s.TEXTURE_2D,st,Tt,Q.width,Q.height);else{let k=Q.width,Z=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(s.TEXTURE_2D,ht,Tt,k,Z,0,pt,Et,null),k>>=1,Z>>=1}}else if(Gt.length>0){if(Nt&&se){let k=bt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,st,Tt,k.width,k.height)}for(let k=0,Z=Gt.length;k<Z;k++)gt=Gt[k],Nt?R&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,pt,Et,gt):e.texImage2D(s.TEXTURE_2D,k,Tt,pt,Et,gt);x.generateMipmaps=!1}else if(Nt){if(se){let k=bt(Q);e.texStorage2D(s.TEXTURE_2D,st,Tt,k.width,k.height)}R&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Et,Q)}else e.texImage2D(s.TEXTURE_2D,0,Tt,pt,Et,Q);g(x)&&d(Y),Ct.__version=W.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,N){if(x.image.length!==6)return;let Y=ne(b,x),j=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+N);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(s.TEXTURE0+N);let Ct=Zt.getPrimaries(Zt.workingColorSpace),ot=x.colorSpace===Pn?null:Zt.getPrimaries(x.colorSpace),ft=x.colorSpace===Pn||Ct===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Yt&&!Q?pt[Z]=A(x.image[Z],!0,i.maxCubemapSize):pt[Z]=Q?x.image[Z].image:x.image[Z],pt[Z]=oe(x,pt[Z]);let Et=pt[0],Tt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Gt=M(x.internalFormat,Tt,gt,x.colorSpace),Nt=x.isVideoTexture!==!0,se=W.__version===void 0||Y===!0,R=j.dataReady,st=V(x,Et);Ft(s.TEXTURE_CUBE_MAP,x);let k;if(Yt){Nt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Gt,Et.width,Et.height);for(let Z=0;Z<6;Z++){k=pt[Z].mipmaps;for(let ht=0;ht<k.length;ht++){let ct=k[ht];x.format!==Je?Tt!==null?Nt?R&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ct.width,ct.height,Tt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ct.width,ct.height,Tt,gt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Gt,ct.width,ct.height,0,Tt,gt,ct.data)}}}else{if(k=x.mipmaps,Nt&&se){k.length>0&&st++;let Z=bt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Nt?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Tt,gt,pt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,pt[Z].width,pt[Z].height,0,Tt,gt,pt[Z].data);for(let ht=0;ht<k.length;ht++){let Lt=k[ht].image[Z].image;Nt?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Lt.width,Lt.height,Tt,gt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Gt,Lt.width,Lt.height,0,Tt,gt,Lt.data)}}else{Nt?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,gt,pt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,Tt,gt,pt[Z]);for(let ht=0;ht<k.length;ht++){let ct=k[ht];Nt?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Tt,gt,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Gt,Tt,gt,ct.image[Z])}}}g(x)&&d(s.TEXTURE_CUBE_MAP),W.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function vt(b,x,N,Y,j,W){let Ct=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),ft=M(N.internalFormat,Ct,ot,N.colorSpace),Yt=n.get(x),Q=n.get(N);if(Q.__renderTarget=x,!Yt.__hasExternalTextures){let pt=Math.max(1,x.width>>W),Et=Math.max(1,x.height>>W);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ft,pt,Et,x.depth,0,Ct,ot,null):e.texImage2D(j,W,ft,pt,Et,0,Ct,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Ht(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,Q.__webglTexture,0,qt(x)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(b,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer){let Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=v(x.stencilBuffer,j),Ct=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=qt(x);Ht(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,W,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,W,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,W,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,b)}else{let Y=x.textures;for(let j=0;j<Y.length;j++){let W=Y[j],Ct=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),ft=M(W.internalFormat,Ct,ot,W.colorSpace),Yt=qt(x);N&&Ht(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,ft,x.width,x.height):Ht(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,ft,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ft,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);let j=Y.__webglTexture,W=qt(x);if(x.depthTexture.format===Ti)Ht(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ni)Ht(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(b){let x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),at(x.__webglDepthbuffer[Y],b,!1);else{let j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),at(x.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(b,x,N){let Y=n.get(b);x!==void 0&&vt(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Pt(b)}function ue(b){let x=b.texture,N=n.get(b),Y=n.get(x);b.addEventListener("dispose",E);let j=b.textures,W=b.isWebGLCubeRenderTarget===!0,Ct=j.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let ft=0;ft<x.mipmaps.length;ft++)N.__webglFramebuffer[ot][ft]=s.createFramebuffer()}else N.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)N.__webglFramebuffer[ot]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let ot=0,ft=j.length;ot<ft;ot++){let Yt=n.get(j[ot]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let ft=j[ot];N.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Yt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),pt=M(ft.internalFormat,Yt,Q,ft.colorSpace,b.isXRRenderTarget===!0),Et=qt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),at(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)vt(N.__webglFramebuffer[ot][ft],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else vt(N.__webglFramebuffer[ot],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(x)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ot=0,ft=j.length;ot<ft;ot++){let Yt=j[ot],Q=n.get(Yt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ft(s.TEXTURE_2D,Yt),vt(N.__webglFramebuffer,b,Yt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),g(Yt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Ft(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)vt(N.__webglFramebuffer[ft],b,x,s.COLOR_ATTACHMENT0,ot,ft);else vt(N.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,ot,0);g(x)&&d(ot),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Xt(b){let x=b.textures;for(let N=0,Y=x.length;N<Y;N++){let j=x[N];if(g(j)){let W=_(b),Ct=n.get(j).__webglTexture;e.bindTexture(W,Ct),d(W),e.unbindTexture()}}}let fe=[],D=[];function ze(b){if(b.samples>0){if(Ht(b)===!1){let x=b.textures,N=b.width,Y=b.height,j=s.COLOR_BUFFER_BIT,W=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(b),ot=x.length>1;if(ot)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[ft]);let Yt=n.get(x[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,s.NEAREST),c===!0&&(fe.length=0,D.length=0,fe.push(s.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(W),D.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[ft]);let Yt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let x=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function qt(b){return Math.min(i.maxSamples,b.samples)}function Ht(b){let x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function oe(b,x){let N=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==zi&&N!==Pn&&(Zt.getTransfer(N)===te?(Y!==Je||j!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function bt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ht}function Dg(s,t){function e(n,i=Pn){let r,a=Zt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Po)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return s.BYTE;if(n===pl)return s.SHORT;if(n===is)return s.UNSIGNED_SHORT;if(n===Ro)return s.INT;if(n===ii)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===us)return s.HALF_FLOAT;if(n===ml)return s.ALPHA;if(n===Al)return s.RGB;if(n===Je)return s.RGBA;if(n===xl)return s.LUMINANCE;if(n===yl)return s.LUMINANCE_ALPHA;if(n===Ti)return s.DEPTH_COMPONENT;if(n===Ni)return s.DEPTH_STENCIL;if(n===Uo)return s.RED;if(n===Do)return s.RED_INTEGER;if(n===vl)return s.RG;if(n===No)return s.RG_INTEGER;if(n===Bo)return s.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===Ys)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Ma||n===ba||n===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===wa)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ra||n===Pa||n===La||n===Ua||n===Da||n===Na||n===Ba||n===Fa||n===Oa||n===za||n===ka||n===qa||n===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Ga||n===Wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zs)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Xa||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ho=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),d=this._getHandJoint(l,A);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
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

}`,uo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:Bg,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fo=class extends Bn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,m=null,A=new uo,g=e.getContextAttributes(),d=null,_=null,M=[],v=[],V=new zt,S=null,E=new Ee;E.viewport=new ee;let w=new Ee;w.viewport=new ee;let I=[E,w],y=new ho,T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=M[X];return et===void 0&&(et=new ns,M[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=M[X];return et===void 0&&(et=new ns,M[X]=et),et.getGripSpace()},this.getHand=function(X){let et=M[X];return et===void 0&&(et=new ns,M[X]=et),et.getHandSpace()};function O(X){let et=v.indexOf(X.inputSource);if(et===-1)return;let vt=M[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,l||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let X=0;X<M.length;X++){let et=v[X];et!==null&&(v[X]=null,M[X].disconnect(et))}T=null,z=null,A.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,_=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(V),i.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new vn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,vt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Ni:Ti,vt=g.stencil?Di:ii);let wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new vn(f.textureWidth,f.textureHeight,{format:Je,type:yn,depthTexture:new cr(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let et=0;et<X.removed.length;et++){let vt=X.removed[et],at=v.indexOf(vt);at>=0&&(v[at]=null,M[at].disconnect(vt))}for(let et=0;et<X.added.length;et++){let vt=X.added[et],at=v.indexOf(vt);if(at===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=v.length){v.push(vt),at=Pt;break}else if(v[Pt]===null){v[Pt]=vt,at=Pt;break}if(at===-1)break}let wt=M[at];wt&&wt.connect(vt)}}let G=new P,tt=new P;function q(X,et,vt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);let at=G.distanceTo(tt),wt=et.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),ue=wt[14]/(wt[10]+1),Xt=(wt[9]+1)/wt[5],fe=(wt[9]-1)/wt[5],D=(wt[8]-1)/wt[0],ze=(Pt[8]+1)/Pt[0],qt=Ot*D,Ht=Ot*ze,St=at/(-D+ze),oe=St*-D;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let bt=Ot+St,b=ue+St,x=qt-oe,N=Ht+(at-oe),Y=Xt*ue/b*bt,j=fe*ue/b*bt;X.projectionMatrix.makePerspective(x,N,Y,j,bt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,vt=X.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(vt=A.depthFar)),y.near=w.near=E.near=et,y.far=w.far=E.far=vt,(T!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,z=y.far),E.layers.mask=X.layers.mask|2,w.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|w.layers.mask;let at=X.parent,wt=y.cameras;rt(y,at);for(let Pt=0;Pt<wt.length;Pt++)rt(wt[Pt],at);wt.length===2?q(y,E,w):y.projectionMatrix.copy(E.projectionMatrix),dt(X,y,at)};function dt(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ja*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let Mt=null;function Ft(X,et){if(h=et.getViewerPose(l||a),m=et,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let at=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Pt=0;Pt<vt.length;Pt++){let Ot=vt[Pt],ue=null;if(p!==null)ue=p.getViewport(Ot);else{let fe=u.getViewSubImage(f,Ot);ue=fe.viewport,Pt===0&&(t.setRenderTargetTextures(_,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(_))}let Xt=I[Pt];Xt===void 0&&(Xt=new Ee,Xt.layers.enable(Pt),Xt.viewport=new ee,I[Pt]=Xt),Xt.matrix.fromArray(Ot.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ot.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ue.x,ue.y,ue.width,ue.height),Pt===0&&(y.matrix.copy(Xt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(Xt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(t,Pt,i.renderState)}}for(let vt=0;vt<M.length;vt++){let at=v[vt],wt=M[vt];at!==null&&wt!==void 0&&wt.update(at,et,l||a)}Mt&&Mt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let ne=new wl;ne.setAnimationLoop(Ft),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}},jn=new sn,Og=new ae;function zg(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,El(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,_,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),A(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,_,M):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Pe&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Pe&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let _=t.get(d),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,jn.copy(v),jn.x*=-1,jn.y*=-1,jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),g.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(jn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,_,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=M*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function A(g,d){let _=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let v=M.program;n.uniformBlockBinding(_,v)}function l(_,M){let v=i[_.id];v===void 0&&(m(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",g));let V=M.program;n.updateUBOMapping(_,V);let S=t.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function h(_){let M=u();_.__bindingPointIndex=M;let v=s.createBuffer(),V=_.__size,S=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,V,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=i[_.id],v=_.uniforms,V=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let S=0,E=v.length;S<E;S++){let w=Array.isArray(v[S])?v[S]:[v[S]];for(let I=0,y=w.length;I<y;I++){let T=w[I];if(p(T,S,I,V)===!0){let z=T.__offset,O=Array.isArray(T.value)?T.value:[T.value],H=0;for(let J=0;J<O.length;J++){let G=O[J],tt=A(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,M,v,V){let S=_.value,E=M+"_"+v;if(V[E]===void 0)return typeof S=="number"||typeof S=="boolean"?V[E]=S:V[E]=S.clone(),!0;{let w=V[E];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return V[E]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function m(_){let M=_.uniforms,v=0,V=16;for(let E=0,w=M.length;E<w;E++){let I=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,T=I.length;y<T;y++){let z=I[y],O=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=O.length;H<J;H++){let G=O[H],tt=A(G),q=v%V,rt=q%tt.boundary,dt=q+rt;v+=rt,dt!==0&&V-dt<tt.storage&&(v+=V-dt),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=tt.storage}}}let S=v%V;return S>0&&(v+=V-S),_.__size=v,_.__cache={},this}function A(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}var lr=class{constructor(t={}){let{canvas:e=Gh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,d=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Un,this.toneMappingExposure=1;let v=this,V=!1,S=0,E=0,w=null,I=-1,y=null,T=new ee,z=new ee,O=null,H=new Rt(0),J=0,G=e.width,tt=e.height,q=1,rt=null,dt=null,Mt=new ee(0,0,G,tt),Ft=new ee(0,0,G,tt),ne=!1,X=new ss,et=!1,vt=!1,at=new ae,wt=new ae,Pt=new P,Ot=new ee,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function fe(){return w===null?q:1}let D=n;function ze(C,L){return e.getContext(C,L)}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){let L="webgl2";if(D=ze(L,C),D===null)throw ze(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let qt,Ht,St,oe,bt,b,x,N,Y,j,W,Ct,ot,ft,Yt,Q,pt,Et,Tt,gt,Gt,Nt,se,R;function st(){qt=new ip(D),qt.init(),Nt=new Dg(D,qt),Ht=new Kf(D,qt,t,Nt),St=new Pg(D,qt),Ht.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),oe=new ap(D),bt=new yg,b=new Ug(D,qt,St,bt,Ht,Nt,oe),x=new $f(v),N=new np(v),Y=new du(D),se=new Jf(D,Y),j=new sp(D,Y,oe,se),W=new cp(D,j,Y,oe),Tt=new op(D,Ht,b),Q=new Qf(bt),Ct=new xg(v,x,N,qt,Ht,se,Q),ot=new zg(v,bt),ft=new Cg,Yt=new Eg(qt),Et=new Zf(v,x,N,St,W,p,c),pt=new Vg(v,W,Ht),R=new kg(D,oe,Ht,St),gt=new jf(D,qt,oe),Gt=new rp(D,qt,oe),oe.programs=Ct.programs,v.capabilities=Ht,v.extensions=qt,v.properties=bt,v.renderLists=ft,v.shadowMap=pt,v.state=St,v.info=oe}st();let k=new fo(v,D);this.xr=k,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let C=qt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=qt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(G,tt,!1))},this.getSize=function(C){return C.set(G,tt)},this.setSize=function(C,L,B=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,tt=L,e.width=Math.floor(C*q),e.height=Math.floor(L*q),B===!0&&(e.style.width=C+"px",e.style.height=L+"px"),this.setViewport(0,0,C,L)},this.getDrawingBufferSize=function(C){return C.set(G*q,tt*q).floor()},this.setDrawingBufferSize=function(C,L,B){G=C,tt=L,q=B,e.width=Math.floor(C*B),e.height=Math.floor(L*B),this.setViewport(0,0,C,L)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Mt)},this.setViewport=function(C,L,B,F){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,L,B,F),St.viewport(T.copy(Mt).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Ft)},this.setScissor=function(C,L,B,F){C.isVector4?Ft.set(C.x,C.y,C.z,C.w):Ft.set(C,L,B,F),St.scissor(z.copy(Ft).multiplyScalar(q).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){St.setScissorTest(ne=C)},this.setOpaqueSort=function(C){rt=C},this.setTransparentSort=function(C){dt=C},this.getClearColor=function(C){return C.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(C=!0,L=!0,B=!0){let F=0;if(C){let U=!1;if(w!==null){let $=w.texture.format;U=$===Bo||$===No||$===Do}if(U){let $=w.texture.type,lt=$===yn||$===ii||$===is||$===Di||$===Po||$===Lo,At=Et.getClearColor(),xt=Et.getClearAlpha(),Vt=At.r,Ut=At.g,yt=At.b;lt?(m[0]=Vt,m[1]=Ut,m[2]=yt,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=Vt,A[1]=Ut,A[2]=yt,A[3]=xt,D.clearBufferiv(D.COLOR,0,A))}else F|=D.COLOR_BUFFER_BIT}L&&(F|=D.DEPTH_BUFFER_BIT),B&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Yt.dispose(),bt.dispose(),x.dispose(),N.dispose(),W.dispose(),se.dispose(),R.dispose(),Ct.dispose(),k.dispose(),k.removeEventListener("sessionstart",jo),k.removeEventListener("sessionend",Ko),Gn.stop()};function Z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let C=oe.autoReset,L=pt.enabled,B=pt.autoUpdate,F=pt.needsUpdate,U=pt.type;st(),oe.autoReset=C,pt.enabled=L,pt.autoUpdate=B,pt.needsUpdate=F,pt.type=U}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){let L=C.target;L.removeEventListener("dispose",Lt),de(L)}function de(C){Me(C),bt.remove(C)}function Me(C){let L=bt.get(C).programs;L!==void 0&&(L.forEach(function(B){Ct.releaseProgram(B)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,L,B,F,U,$){L===null&&(L=ue);let lt=U.isMesh&&U.matrixWorld.determinant()<0,At=th(C,L,B,F,U);St.setMaterial(F,lt);let xt=B.index,Vt=1;if(F.wireframe===!0){if(xt=j.getWireframeAttribute(B),xt===void 0)return;Vt=2}let Ut=B.drawRange,yt=B.attributes.position,Jt=Ut.start*Vt,re=(Ut.start+Ut.count)*Vt;$!==null&&(Jt=Math.max(Jt,$.start*Vt),re=Math.min(re,($.start+$.count)*Vt)),xt!==null?(Jt=Math.max(Jt,0),re=Math.min(re,xt.count)):yt!=null&&(Jt=Math.max(Jt,0),re=Math.min(re,yt.count));let ce=re-Jt;if(ce<0||ce===1/0)return;se.setup(U,F,At,B,xt);let Te,Kt=gt;if(xt!==null&&(Te=Y.get(xt),Kt=Gt,Kt.setIndex(Te)),U.isMesh)F.wireframe===!0?(St.setLineWidth(F.wireframeLinewidth*fe()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(U.isLine){let _t=F.linewidth;_t===void 0&&(_t=1),St.setLineWidth(_t*fe()),U.isLineSegments?Kt.setMode(D.LINES):U.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else U.isPoints?Kt.setMode(D.POINTS):U.isSprite&&Kt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let _t=U._multiDrawStarts,cn=U._multiDrawCounts,Qt=U._multiDrawCount,We=xt?Y.get(xt).bytesPerElement:1,ui=bt.get(F).currentProgram.getUniforms();for(let De=0;De<Qt;De++)ui.setValue(D,"_gl_DrawID",De),Kt.render(_t[De]/We,cn[De])}else if(U.isInstancedMesh)Kt.renderInstances(Jt,ce,U.count);else if(B.isInstancedBufferGeometry){let _t=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,cn=Math.min(B.instanceCount,_t);Kt.renderInstances(Jt,ce,cn)}else Kt.render(Jt,ce)};function $t(C,L,B){C.transparent===!0&&C.side===Fe&&C.forceSinglePass===!1?(C.side=Pe,C.needsUpdate=!0,xs(C,L,B),C.side=Dn,C.needsUpdate=!0,xs(C,L,B),C.side=Fe):xs(C,L,B)}this.compile=function(C,L,B=null){B===null&&(B=C),d=Yt.get(B),d.init(L),M.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),C!==B&&C.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let F=new Set;return C.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let $=U.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let At=$[lt];$t(At,B,U),F.add(At)}else $t($,B,U),F.add($)}),M.pop(),d=null,F},this.compileAsync=function(C,L,B=null){let F=this.compile(C,L,B);return new Promise(U=>{function $(){if(F.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&F.delete(lt)}),F.size===0){U(C);return}setTimeout($,10)}qt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ge=null;function on(C){Ge&&Ge(C)}function jo(){Gn.stop()}function Ko(){Gn.start()}let Gn=new wl;Gn.setAnimationLoop(on),typeof self!="undefined"&&Gn.setContext(self),this.setAnimationLoop=function(C){Ge=C,k.setAnimationLoop(C),C===null?Gn.stop():Gn.start()},k.addEventListener("sessionstart",jo),k.addEventListener("sessionend",Ko),this.render=function(C,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(L),L=k.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,L,w),d=Yt.get(C,M.length),d.init(L),M.push(d),wt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(wt),vt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,vt),g=ft.get(C,_.length),g.init(),_.push(g),k.enabled===!0&&k.isPresenting===!0){let $=v.xr.getDepthSensingMesh();$!==null&&Pr($,L,-1/0,v.sortObjects)}Pr(C,L,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(rt,dt),Xt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Xt&&Et.addToRenderList(g,C),this.info.render.frame++,et===!0&&Q.beginShadows();let B=d.state.shadowsArray;pt.render(B,C,L),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,U=g.transmissive;if(d.setupLights(),L.isArrayCamera){let $=L.cameras;if(U.length>0)for(let lt=0,At=$.length;lt<At;lt++){let xt=$[lt];$o(F,U,C,xt)}Xt&&Et.render(C);for(let lt=0,At=$.length;lt<At;lt++){let xt=$[lt];Qo(g,C,xt,xt.viewport)}}else U.length>0&&$o(F,U,C,L),Xt&&Et.render(C),Qo(g,C,L);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(v,C,L),se.resetDefaultState(),I=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],et===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Pr(C,L,B,F){if(C.visible===!1)return;if(C.layers.test(L.layers)){if(C.isGroup)B=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(L);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){F&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);let lt=W.update(C),At=C.material;At.visible&&g.push(C,lt,At,B,Ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let lt=W.update(C),At=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(At)){let xt=lt.groups;for(let Vt=0,Ut=xt.length;Vt<Ut;Vt++){let yt=xt[Vt],Jt=At[yt.materialIndex];Jt&&Jt.visible&&g.push(C,lt,Jt,B,Ot.z,yt)}}else At.visible&&g.push(C,lt,At,B,Ot.z,null)}}let $=C.children;for(let lt=0,At=$.length;lt<At;lt++)Pr($[lt],L,B,F)}function Qo(C,L,B,F){let U=C.opaque,$=C.transmissive,lt=C.transparent;d.setupLightsView(B),et===!0&&Q.setGlobalState(v.clippingPlanes,B),F&&St.viewport(T.copy(F)),U.length>0&&As(U,L,B),$.length>0&&As($,L,B),lt.length>0&&As(lt,L,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function $o(C,L,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new vn(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?us:yn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let $=d.state.transmissionRenderTarget[F.id],lt=F.viewport||T;$.setSize(lt.z,lt.w);let At=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(H),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&Et.render(B);let xt=v.toneMapping;v.toneMapping=Un;let Vt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),et===!0&&Q.setGlobalState(v.clippingPlanes,F),As(C,B,F),b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let yt=0,Jt=L.length;yt<Jt;yt++){let re=L[yt],ce=re.object,Te=re.geometry,Kt=re.material,_t=re.group;if(Kt.side===Fe&&ce.layers.test(F.layers)){let cn=Kt.side;Kt.side=Pe,Kt.needsUpdate=!0,tc(ce,B,F,Te,Kt,_t),Kt.side=cn,Kt.needsUpdate=!0,Ut=!0}}Ut===!0&&(b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($))}v.setRenderTarget(At),v.setClearColor(H,J),Vt!==void 0&&(F.viewport=Vt),v.toneMapping=xt}function As(C,L,B){let F=L.isScene===!0?L.overrideMaterial:null;for(let U=0,$=C.length;U<$;U++){let lt=C[U],At=lt.object,xt=lt.geometry,Vt=F===null?lt.material:F,Ut=lt.group;At.layers.test(B.layers)&&tc(At,L,B,xt,Vt,Ut)}}function tc(C,L,B,F,U,$){C.onBeforeRender(v,L,B,F,U,$),C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),U.onBeforeRender(v,L,B,F,C,$),U.transparent===!0&&U.side===Fe&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,v.renderBufferDirect(B,L,F,U,C,$),U.side=Dn,U.needsUpdate=!0,v.renderBufferDirect(B,L,F,U,C,$),U.side=Fe):v.renderBufferDirect(B,L,F,U,C,$),C.onAfterRender(v,L,B,F,U,$)}function xs(C,L,B){L.isScene!==!0&&(L=ue);let F=bt.get(C),U=d.state.lights,$=d.state.shadowsArray,lt=U.state.version,At=Ct.getParameters(C,U.state,$,L,B),xt=Ct.getProgramCacheKey(At),Vt=F.programs;F.environment=C.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(C.isMeshStandardMaterial?N:x).get(C.envMap||F.environment),F.envMapRotation=F.environment!==null&&C.envMap===null?L.environmentRotation:C.envMapRotation,Vt===void 0&&(C.addEventListener("dispose",Lt),Vt=new Map,F.programs=Vt);let Ut=Vt.get(xt);if(Ut!==void 0){if(F.currentProgram===Ut&&F.lightsStateVersion===lt)return nc(C,At),Ut}else At.uniforms=Ct.getUniforms(C),C.onBeforeCompile(At,v),Ut=Ct.acquireProgram(At,xt),Vt.set(xt,Ut),F.uniforms=At.uniforms;let yt=F.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(yt.clippingPlanes=Q.uniform),nc(C,At),F.needsLights=nh(C),F.lightsStateVersion=lt,F.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Ut,F.uniformsList=null,Ut}function ec(C){if(C.uniformsList===null){let L=C.currentProgram.getUniforms();C.uniformsList=Ri.seqWithValue(L.seq,C.uniforms)}return C.uniformsList}function nc(C,L){let B=bt.get(C);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function th(C,L,B,F,U){L.isScene!==!0&&(L=ue),b.resetTextureUnits();let $=L.fog,lt=F.isMeshStandardMaterial?L.environment:null,At=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zi,xt=(F.isMeshStandardMaterial?N:x).get(F.envMap||lt),Vt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),yt=!!B.morphAttributes.position,Jt=!!B.morphAttributes.normal,re=!!B.morphAttributes.color,ce=Un;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ce=v.toneMapping);let Te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=Te!==void 0?Te.length:0,_t=bt.get(F),cn=d.state.lights;if(et===!0&&(vt===!0||C!==y)){let ke=C===y&&F.id===I;Q.setState(F,C,ke)}let Qt=!1;F.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==cn.state.version||_t.outputColorSpace!==At||U.isBatchedMesh&&_t.batching===!1||!U.isBatchedMesh&&_t.batching===!0||U.isBatchedMesh&&_t.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_t.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_t.instancing===!1||!U.isInstancedMesh&&_t.instancing===!0||U.isSkinnedMesh&&_t.skinning===!1||!U.isSkinnedMesh&&_t.skinning===!0||U.isInstancedMesh&&_t.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_t.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_t.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_t.instancingMorph===!1&&U.morphTexture!==null||_t.envMap!==xt||F.fog===!0&&_t.fog!==$||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Q.numPlanes||_t.numIntersection!==Q.numIntersection)||_t.vertexAlphas!==Vt||_t.vertexTangents!==Ut||_t.morphTargets!==yt||_t.morphNormals!==Jt||_t.morphColors!==re||_t.toneMapping!==ce||_t.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,_t.__version=F.version);let We=_t.currentProgram;Qt===!0&&(We=xs(F,L,U));let ui=!1,De=!1,Gi=!1,le=We.getUniforms(),$e=_t.uniforms;if(St.useProgram(We.program)&&(ui=!0,De=!0,Gi=!0),F.id!==I&&(I=F.id,De=!0),ui||y!==C){St.buffers.depth.getReversed()?(at.copy(C.projectionMatrix),Xh(at),Yh(at),le.setValue(D,"projectionMatrix",at)):le.setValue(D,"projectionMatrix",C.projectionMatrix),le.setValue(D,"viewMatrix",C.matrixWorldInverse);let Mn=le.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Pt.setFromMatrixPosition(C.matrixWorld)),Ht.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&le.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,De=!0,Gi=!0)}if(U.isSkinnedMesh){le.setOptional(D,U,"bindMatrix"),le.setOptional(D,U,"bindMatrixInverse");let ke=U.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),le.setValue(D,"boneTexture",ke.boneTexture,b))}U.isBatchedMesh&&(le.setOptional(D,U,"batchingTexture"),le.setValue(D,"batchingTexture",U._matricesTexture,b),le.setOptional(D,U,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",U._indirectTexture,b),le.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",U._colorsTexture,b));let Wi=B.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Tt.update(U,B,We),(De||_t.receiveShadow!==U.receiveShadow)&&(_t.receiveShadow=U.receiveShadow,le.setValue(D,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&($e.envMap.value=xt,$e.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&($e.envMapIntensity.value=L.environmentIntensity),De&&(le.setValue(D,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&eh($e,Gi),$&&F.fog===!0&&ot.refreshFogUniforms($e,$),ot.refreshMaterialUniforms($e,F,q,tt,d.state.transmissionRenderTarget[C.id]),Ri.upload(D,ec(_t),$e,b)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ri.upload(D,ec(_t),$e,b),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&le.setValue(D,"center",U.center),le.setValue(D,"modelViewMatrix",U.modelViewMatrix),le.setValue(D,"normalMatrix",U.normalMatrix),le.setValue(D,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let ke=F.uniformsGroups;for(let Mn=0,bn=ke.length;Mn<bn;Mn++){let ic=ke[Mn];R.update(ic,We),R.bind(ic,We)}}return We}function eh(C,L){C.ambientLightColor.needsUpdate=L,C.lightProbe.needsUpdate=L,C.directionalLights.needsUpdate=L,C.directionalLightShadows.needsUpdate=L,C.pointLights.needsUpdate=L,C.pointLightShadows.needsUpdate=L,C.spotLights.needsUpdate=L,C.spotLightShadows.needsUpdate=L,C.rectAreaLights.needsUpdate=L,C.hemisphereLights.needsUpdate=L}function nh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,L,B){bt.get(C.texture).__webglTexture=L,bt.get(C.depthTexture).__webglTexture=B;let F=bt.get(C);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,L){let B=bt.get(C);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(C,L=0,B=0){w=C,S=L,E=B;let F=!0,U=null,$=!1,lt=!1;if(C){let xt=bt.get(C);if(xt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(xt.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(xt.__hasExternalTextures)b.rebindTextures(C,bt.get(C.texture).__webglTexture,bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let yt=C.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&bt.has(yt)&&(C.width!==yt.image.width||C.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}let Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(lt=!0);let Ut=bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?U=Ut[L][B]:U=Ut[L],$=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?U=bt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ut)?U=Ut[B]:U=Ut,T.copy(C.viewport),z.copy(C.scissor),O=C.scissorTest}else T.copy(Mt).multiplyScalar(q).floor(),z.copy(Ft).multiplyScalar(q).floor(),O=ne;if(St.bindFramebuffer(D.FRAMEBUFFER,U)&&F&&St.drawBuffers(C,U),St.viewport(T),St.scissor(z),St.setScissorTest(O),$){let xt=bt.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,B)}else if(lt){let xt=bt.get(C.texture),Vt=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Vt)}I=-1},this.readRenderTargetPixels=function(C,L,B,F,U,$,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(At=At[lt]),At){St.bindFramebuffer(D.FRAMEBUFFER,At);try{let xt=C.texture,Vt=xt.format,Ut=xt.type;if(!Ht.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=C.width-F&&B>=0&&B<=C.height-U&&D.readPixels(L,B,F,U,Nt.convert(Vt),Nt.convert(Ut),$)}finally{let xt=w!==null?bt.get(w).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(C,L,B,F,U,$,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(At=At[lt]),At){let xt=C.texture,Vt=xt.format,Ut=xt.type;if(!Ht.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=C.width-F&&B>=0&&B<=C.height-U){St.bindFramebuffer(D.FRAMEBUFFER,At);let yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,$.byteLength,D.STREAM_READ),D.readPixels(L,B,F,U,Nt.convert(Vt),Nt.convert(Ut),0);let Jt=w!==null?bt.get(w).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Jt);let re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wh(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,$),D.deleteBuffer(yt),D.deleteSync(re),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,L=null,B=0){C.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,C=arguments[1]);let F=Math.pow(2,-B),U=Math.floor(C.image.width*F),$=Math.floor(C.image.height*F),lt=L!==null?L.x:0,At=L!==null?L.y:0;b.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,lt,At,U,$),St.unbindTexture()},this.copyTextureToTexture=function(C,L,B=null,F=null,U=0){C.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1],L=arguments[2],U=arguments[3]||0,B=null);let $,lt,At,xt,Vt,Ut,yt,Jt,re,ce=C.isCompressedTexture?C.mipmaps[U]:C.image;B!==null?($=B.max.x-B.min.x,lt=B.max.y-B.min.y,At=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Vt=B.min.y,Ut=B.isBox3?B.min.z:0):($=ce.width,lt=ce.height,At=ce.depth||1,xt=0,Vt=0,Ut=0),F!==null?(yt=F.x,Jt=F.y,re=F.z):(yt=0,Jt=0,re=0);let Te=Nt.convert(L.format),Kt=Nt.convert(L.type),_t;L.isData3DTexture?(b.setTexture3D(L,0),_t=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),_t=D.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let cn=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),ui=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);let Gi=C.isDataArrayTexture||C.isData3DTexture,le=L.isDataArrayTexture||L.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let $e=bt.get(C),Wi=bt.get(L),ke=bt.get($e.__renderTarget),Mn=bt.get(Wi.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,ke.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<At;bn++)Gi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(C).__webglTexture,U,Ut+bn),C.isDepthTexture?(le&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(L).__webglTexture,U,re+bn),D.blitFramebuffer(xt,Vt,$,lt,yt,Jt,$,lt,D.DEPTH_BUFFER_BIT,D.NEAREST)):le?D.copyTexSubImage3D(_t,U,yt,Jt,re+bn,xt,Vt,$,lt):D.copyTexSubImage2D(_t,U,yt,Jt,re+bn,xt,Vt,$,lt);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else le?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(_t,U,yt,Jt,re,$,lt,At,Te,Kt,ce.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,U,yt,Jt,re,$,lt,At,Te,ce.data):D.texSubImage3D(_t,U,yt,Jt,re,$,lt,At,Te,Kt,ce):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,yt,Jt,$,lt,Te,Kt,ce.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,yt,Jt,ce.width,ce.height,Te,ce.data):D.texSubImage2D(D.TEXTURE_2D,U,yt,Jt,$,lt,Te,Kt,ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,cn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,ui),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),U===0&&L.generateMipmaps&&D.generateMipmap(_t),St.unbindTexture()},this.copyTextureToTexture3D=function(C,L,B=null,F=null,U=0){return C.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,F=arguments[1]||null,C=arguments[2],L=arguments[3],U=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,L,B,F,U)},this.initRenderTarget=function(C){bt.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),St.unbindTexture()},this.resetState=function(){S=0,E=0,w=null,St.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var hr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var po=class extends Le{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Oe,h=Oe,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Si=new ae,il=new ae,zs=[],sl=new Cn,qg=new ae,Ki=new jt,Qi=new On,fr=class extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),sl.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(sl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),Qi.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),t.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Si),il.multiplyMatrices(n,Si),Ki.matrixWorld=il,Ki.raycast(t,zs);for(let a=0,o=zs.length;a<o;a++){let c=zs[a];c.instanceId=r,c.object=this,e.push(c)}zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new po(new Float32Array(i*this.count),i,this.count,Uo,nn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fi=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rl=new ae,go=new tr,ks=new On,qs=new P,rs=class extends ye{constructor(t=new Ie,e=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;rl.copy(i).invert(),go.copy(t.ray).applyMatrix4(rl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=f,A=p;m<A;m++){let g=l.getX(m);qs.fromBufferAttribute(u,g),al(qs,g,c,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,A=p;m<A;m++)qs.fromBufferAttribute(u,m),al(qs,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function al(s,t,e,n,i,r,a){let o=go.distanceSqToPoint(s);if(o<e){let c=new P;go.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var kn=class extends Le{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pr=class s extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new P,h=new zt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},as=class s extends Ie{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,A=[],g=n/2,d=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(p,2));function _(){let v=new P,V=new P,S=0,E=(e-t)/n;for(let w=0;w<=r;w++){let I=[],y=w/r,T=y*(e-t)+t;for(let z=0;z<=i;z++){let O=z/i,H=O*c+o,J=Math.sin(H),G=Math.cos(H);V.x=T*J,V.y=-y*n+g,V.z=T*G,u.push(V.x,V.y,V.z),v.set(J,E,G).normalize(),f.push(v.x,v.y,v.z),p.push(O,1-y),I.push(m++)}A.push(I)}for(let w=0;w<i;w++)for(let I=0;I<r;I++){let y=A[I][w],T=A[I+1][w],z=A[I+1][w+1],O=A[I][w+1];(t>0||I!==0)&&(h.push(y,T,O),S+=3),(e>0||I!==r-1)&&(h.push(T,z,O),S+=3)}l.addGroup(d,S,0),d+=S}function M(v){let V=m,S=new zt,E=new P,w=0,I=v===!0?t:e,y=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),m++;let T=m;for(let z=0;z<=i;z++){let H=z/i*c+o,J=Math.cos(H),G=Math.sin(H);E.x=I*G,E.y=g*y,E.z=I*J,u.push(E.x,E.y,E.z),f.push(0,y,0),S.x=J*.5+.5,S.y=G*.5*y+.5,p.push(S.x,S.y),m++}for(let z=0;z<i;z++){let O=V+z,H=T+z;v===!0?h.push(H,H+1,O):h.push(H+1,H,O),w+=3}l.addGroup(d,w,v===!0?1:2),d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gr=class s extends as{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mo=class s extends Ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new P,v=new P,V=new P;for(let S=0;S<e.length;S+=3)p(e[S+0],M),p(e[S+1],v),p(e[S+2],V),c(M,v,V,_)}function c(_,M,v,V){let S=V+1,E=[];for(let w=0;w<=S;w++){E[w]=[];let I=_.clone().lerp(v,w/S),y=M.clone().lerp(v,w/S),T=S-w;for(let z=0;z<=T;z++)z===0&&w===S?E[w][z]=I:E[w][z]=I.clone().lerp(y,z/T)}for(let w=0;w<S;w++)for(let I=0;I<2*(S-w)-1;I++){let y=Math.floor(I/2);I%2===0?(f(E[w][y+1]),f(E[w+1][y]),f(E[w][y])):(f(E[w][y+1]),f(E[w+1][y+1]),f(E[w+1][y]))}}function l(_){let M=new P;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new P;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=g(_)/2/Math.PI+.5,V=d(_)/Math.PI+.5;a.push(v,1-V)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let M=a[_+0],v=a[_+2],V=a[_+4],S=Math.max(M,v,V),E=Math.min(M,v,V);S>.9&&E<.1&&(M<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),V<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,M){let v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){let _=new P,M=new P,v=new P,V=new P,S=new zt,E=new zt,w=new zt;for(let I=0,y=0;I<r.length;I+=9,y+=6){_.set(r[I+0],r[I+1],r[I+2]),M.set(r[I+3],r[I+4],r[I+5]),v.set(r[I+6],r[I+7],r[I+8]),S.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),w.set(a[y+4],a[y+5]),V.copy(_).add(M).add(v).divideScalar(3);let T=g(V);A(S,y+0,_,T),A(E,y+2,M,T),A(w,y+4,v,T)}}function A(_,M,v,V){V<0&&_.x===1&&(a[M]=_.x-1),v.x===0&&v.z===0&&(a[M]=V/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var mr=class s extends mo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ar=class s extends Ie{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/i,p=new P,m=new zt;for(let A=0;A<=i;A++){for(let g=0;g<=n;g++){let d=r+g/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let A=0;A<i;A++){let g=A*(n+1);for(let d=0;d<n;d++){let _=d+g,M=_,v=_+n+1,V=_+n+2,S=_+1;o.push(M,v,S),o.push(v,V,S)}}this.setIndex(o),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var os=class s extends Ie{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,f=new P,p=[],m=[],A=[],g=[];for(let d=0;d<=n;d++){let _=[],M=d/n,v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let V=0;V<=e;V++){let S=V/e;u.x=-t*Math.cos(i+S*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(i+S*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(S+v,1-M),_.push(l++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let M=h[d][_+1],v=h[d][_],V=h[d+1][_],S=h[d+1][_+1];(d!==0||a>0)&&p.push(M,v,S),(d!==n-1||c<Math.PI)&&p.push(v,V,S)}this.setIndex(p),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(A,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ai=class s extends Ie{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new P,u=new P,f=new P;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let A=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let A=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,_=(i+1)*p+m;a.push(A,g,_),a.push(g,d,_)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _n=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Hs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Hg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Oi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends Oi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cc:r=t,o=2*e-n;break;case lc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cc:a=t,c=2*n-e;break;case lc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),A=m*m,g=A*m,d=-f*g+2*f*A-f*m,_=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,M=(-1-p)*g+(1.5+p)*A+.5*m,v=p*g-p*A;for(let V=0;V!==o;++V)r[V]=d*a[h+V]+_*a[l+V]+M*a[c+V]+v*a[u+V];return r}},xo=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},yo=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case Ur:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return Ur}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Hg(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ur,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=Ja;var oi=class extends je{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Js;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends je{};vo.prototype.ValueTypeName="color";var Co=class extends je{};Co.prototype.ValueTypeName="number";var _o=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},xr=class extends je{InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends je{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Js;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends je{};Io.prototype.ValueTypeName="vector";var Mo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Gg=new Mo,bo=class{constructor(t){this.manager=t!==void 0?t:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},yr=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},la=new ae,ol=new P,cl=new P,vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ll=new ae,$i=new P,ha=new P,So=class extends vr{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$i.setFromMatrixPosition(t.matrixWorld),n.position.copy($i),ha.copy(n.position),ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ha),n.updateMatrixWorld(),i.makeTranslation(-$i.x,-$i.y,-$i.z),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}},ls=class extends cs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new So}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Eo=class extends vr{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Eo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Oo="\\[\\]\\.:\\/",Wg=new RegExp("["+Oo+"]","g"),zo="[^"+Oo+"]",Xg="[^"+Oo.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",zo),Zg=/(WCOD+)?/.source.replace("WCOD",Xg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zo),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zo),Kg=new RegExp("^"+Yg+Zg+Jg+jg+"$"),Qg=["material","materials","bones","map"],wo=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=wo;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);var It={hx:12,hy:12},fs=.62,qi=Math.PI*2,ve=(s,t,e)=>s<t?t:s>e?e:s,Ul=(s,t)=>{let e=(t-s)%qi;return e>Math.PI&&(e-=qi),e<-Math.PI&&(e+=qi),e};function $g(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var gs=[{id:"strawberry",role:"melee",hp:120,range:3.1,arc:1.25,cd:.62,dmg:15,color:16730722},{id:"lime",role:"magic",hp:85,range:9.5,cd:1,dmg:12,splash:1.7,speed:11,color:8054842},{id:"blueberry",role:"ranged",hp:85,range:10.5,cd:.4,dmg:6,speed:17,color:4885247}],Dl=[[1.7,0],[-.9,1.5],[-.9,-1.5]],Ke={gummy:{hp:32,speed:2.3,r:.7,touch:7,reward:1,color:16742986},sour:{hp:20,speed:3.9,r:.55,touch:5,reward:1,color:10157882},spitter:{hp:26,speed:1.9,r:.65,touch:4,reward:2,color:11563263,shoot:!0,keep:6.5,shotCd:2.5,projDmg:8,projSpeed:6.5},tank:{hp:110,speed:1.4,r:1.1,touch:12,reward:4,color:16765498},bomber:{hp:22,speed:3,r:.6,touch:0,reward:2,color:16751146,bomb:!0}},Nl=[[[.5,"gummy",3],[3,"sour",3],[7,"gummy",3],[10,"sour",2]],[[.5,"gummy",3],[2.5,"spitter",2],[5,"sour",3],[8,"tank",1],[10,"bomber",2],[13,"spitter",2],[15,"gummy",3]]],Sr=6,tm=[[.5,"gummy",4],[2.5,"sour",4],[5,"spitter",2],[7.5,"bomber",2],[10,"sour",3]],em=s=>({hp:1+.25*s,boss:1+.35*s,spd:1+.04*s}),ps={hp:1100,r:1.9,speed:2,touch:10},ko={warn:[1.5,1.3,1.1],r:[1.9,2,2.2],dmg:14},Mr={warn:[1.35,1.2,1.05],speed:[14,16,18],dmg:22,stun:[1.9,1.7,1.4]},nm=[["rain","charge","summon"],["charge","rain","summon","charge"],["rain","charge","rain","summon","charge"]];var In={damage:{max:5,costs:[30,60,100,160,240],per:.12},health:{max:5,costs:[30,60,100,160,240],per:.15},charge:{max:5,costs:[25,50,90,140,210],per:.25}};function ms(s){let t=s&&typeof s=="object"?s:{},e=(i,r,a,o=0)=>Number.isFinite(Number(i))?ve(Math.floor(Number(i)),r,a):o,n=t.upgrades&&typeof t.upgrades=="object"?t.upgrades:{};return{candies:e(t.candies,0,999999),upgrades:{damage:e(n.damage,0,In.damage.max),health:e(n.health,0,In.health.max),charge:e(n.charge,0,In.charge.max)},bestStars:e(t.bestStars,0,3),stage:e(t.stage,0,5),runs:e(t.runs,0,999999),wins:e(t.wins,0,999999),muted:!!t.muted,lang:t.lang==="en"?"en":t.lang==="ar"?"ar":""}}function qo(s,t){let e=In[t],n=s.upgrades[t];return n>=e.max?null:e.costs[n]}function Bl(s,t){let e=qo(s,t);if(e===null||s.candies<e)return null;let n=ms(s);return n.candies-=e,n.upgrades[t]+=1,n}function Fl(s,t){let e=ms(s);return e.candies=Math.min(999999,e.candies+t.candies+(t.bonus||0)),e.runs+=1,t.win&&(e.wins+=1,e.bestStars=Math.max(e.bestStars,t.stars),t.stage===e.stage&&e.stage<Sr-1&&(e.stage+=1)),e}var br=class{constructor(t={}){this.rng=$g(t.seed||1);let e=ms({upgrades:t.upgrades}).upgrades;this.up=e,this.dmgMul=1+In.damage.per*e.damage,this.hpMul=1+In.health.per*e.health,this.chargeMul=1+In.charge.per*e.charge,this.easy=!!t.easy,this.stage=Math.max(0,Math.min(Sr-1,t.stage|0)),this.mul=em(this.stage),this.waves=this.stage>=2?[tm,...Nl]:Nl,this.t=0,this.state="wave",this.wave=0,this.waveT=0,this.spawnIdx=0,this.gapT=0,this.squad={x:0,y:7,face:-Math.PI/2,moving:!1},this.bears=gs.map((n,i)=>({id:n.id,idx:i,def:n,x:Dl[i][1]*0+this.squad.x,y:this.squad.y+1,hp:Math.round(n.hp*this.hpMul),maxHp:Math.round(n.hp*this.hpMul),alive:!0,inv:0,cd:.3+i*.1,aim:-Math.PI/2,flash:0,swing:0,hasTarget:!1})),this.enemies=[],this.projectiles=[],this.hazards=[],this.pickups=[],this.jaws=[],this.boss=null,this.charge=0,this.candies=0,this.mintT=0,this.events=[],this.over=!1,this.result=null,this.nextId=1,this.hazardHits=[],this.kills=0,this.ev({type:"wave",n:1})}ev(t){this.events.push(t)}drain(){let t=this.events;return this.events=[],t}get aliveBears(){return this.bears.filter(t=>t.alive)}get fallenBears(){return this.bears.filter(t=>!t.alive)}get stars(){return this.bears.filter(t=>t.alive).length}get bossFight(){return!!this.boss&&this.boss.state!=="dead"}targets(){let t=this.enemies.filter(e=>e.hp>0);return this.boss&&this.boss.hp>0&&this.boss.state!=="intro"&&t.push(this.boss),t}nearest(t,e,n){let i=null,r=1e9;for(let a of n){let o=Math.hypot(a.x-t,a.y-e)-(a.r||0);o<r&&(r=o,i=a)}return i?{e:i,d:r}:null}step(t,e={}){if(this.over){this.t+=t;return}t=Math.min(t,.05),this.t+=t,this._squad(t,e),this._waves(t),this._enemies(t),this._boss(t),this._bears(t),this._projectiles(t),this._hazards(t),this._jaws(t),e.super&&this.useSuper(),this._pickups(t),this._mintTimer(t),this._ending()}_squad(t,e){let n=this.squad,i=Number(e.x)||0,r=Number(e.y)||0,a=Math.hypot(i,r);if(n.moving=a>.05,n.moving){let f=Math.min(1,a)/a;n.x=ve(n.x+i*f*6.2*t,-It.hx+1.9,It.hx-1.9),n.y=ve(n.y+r*f*6.2*t,-It.hy+1.9,It.hy-1.9)}let o=this.nearest(n.x,n.y,this.targets()),c=n.face;o?c=Math.atan2(o.e.y-n.y,o.e.x-n.x):n.moving&&(c=Math.atan2(r,i));let l=Ul(n.face,c);n.face+=ve(l,-8*t,8*t);let h=Math.cos(n.face),u=Math.sin(n.face);for(let f of this.bears){if(!f.alive)continue;let[p,m]=Dl[f.idx],A=n.x+p*h-m*u,g=n.y+p*u+m*h,d=Math.min(1,t*9);f.x=ve(f.x+(A-f.x)*d,-It.hx+.7,It.hx-.7),f.y=ve(f.y+(g-f.y)*d,-It.hy+.7,It.hy-.7)}}_waves(t){if(this.state==="wave"){this.waveT+=t;let e=this.waves[this.wave];for(;this.spawnIdx<e.length&&e[this.spawnIdx][0]<=this.waveT;){let[,n,i]=e[this.spawnIdx++];for(let r=0;r<i;r++)this.spawn(n)}this.spawnIdx>=e.length&&this.enemies.every(n=>n.hp<=0)&&(this.state="gap",this.gapT=2.4,this.ev({type:"waveClear",n:this.wave+1}))}else this.state==="gap"&&(this.gapT-=t,this.gapT<=0&&(this.wave+1<this.waves.length?(this.wave++,this.state="wave",this.waveT=0,this.spawnIdx=0,this.ev({type:"wave",n:this.wave+1})):(this.state="boss",this._spawnBoss())))}spawn(t,e){let n=Ke[t],i=0,r=0;if(e)i=e.x,r=e.y;else for(let o=0;o<8;o++){let c=Math.floor(this.rng()*4),l=(this.rng()*2-1)*(It.hx-1);if(i=c===0?-It.hx+.8:c===1?It.hx-.8:l,r=c===2?-It.hy+.8:c===3?It.hy-.8:l,Math.hypot(i-this.squad.x,r-this.squad.y)>7)break}let a={id:this.nextId++,kind:t,x:i,y:r,r:n.r,hp:n.hp*this.mul.hp,maxHp:n.hp*this.mul.hp,speed:n.speed*this.mul.spd*(this.easy?.85:1),flash:0,touchCd:.6,shotCd:1+this.rng()*1.5,wind:0,fuse:0,age:0,aim:0};return this.enemies.push(a),this.ev({type:"spawn",kind:t,x:i,y:r}),a}_spawnBoss(){this.boss={x:0,y:-5,r:ps.r,hp:ps.hp*this.mul.boss*(this.easy?.8:1),maxHp:ps.hp*this.mul.boss*(this.easy?.8:1),state:"intro",t:0,phase:1,atk:0,dir:Math.PI/2,hazard:null,hit:new Set,flash:0,touchCd:0,volley:0,face:Math.PI/2,kind:"boss"},this.ev({type:"bossIntro"})}_enemies(t){let e=this.enemies.filter(i=>i.hp>0),n=this.aliveBears;for(let i of e){i.age+=t,i.flash=Math.max(0,i.flash-t),i.touchCd-=t;let r=Ke[i.kind],a=this.nearest(i.x,i.y,n.map(l=>({x:l.x,y:l.y,r:0,b:l}))),o=0,c=0;if(a){let l=a.e.x-i.x,h=a.e.y-i.y,u=Math.hypot(l,h)||1;i.aim=Math.atan2(h,l),r.bomb?i.fuse>0||(u<3.1?(i.fuse=1,this.hazards.push({kind:"blast",from:"blast",x:i.x,y:i.y,r:2.4,warn:1,t:0,dmg:18,owner:i,done:!1}),this.ev({type:"fuse",x:i.x,y:i.y})):(o=l/u,c=h/u)):r.shoot?i.wind>0?(i.wind-=t,i.wind<=0&&this._enemyShot(i,a.e,r)):(u>r.keep+1?(o=l/u,c=h/u):u<r.keep-1.2&&(o=-l/u,c=-h/u),i.shotCd-=t,i.shotCd<=0&&u<12&&(i.wind=.55,i.shotCd=r.shotCd,this.ev({type:"wind",x:i.x,y:i.y,id:i.id}))):(o=l/u,c=h/u),r.touch&&u<i.r+fs+.15&&i.touchCd<=0&&(i.touchCd=1.1,this.hurtBear(a.e.b,r.touch,{kind:"touch"}))}i.x+=o*i.speed*t,i.y+=c*i.speed*t;for(let l of e){if(l===i)continue;let h=i.x-l.x,u=i.y-l.y,f=Math.hypot(h,u),p=i.r+l.r;if(f<p&&f>1e-4){let m=(p-f)*.5*Math.min(1,t*10);i.x+=h/f*m,i.y+=u/f*m}}i.x=ve(i.x,-It.hx+.5,It.hx-.5),i.y=ve(i.y,-It.hy+.5,It.hy-.5)}this.enemies=this.enemies.filter(i=>i.hp>0||i.dying)}_enemyShot(t,e,n){let i=Math.atan2(e.y-t.y,e.x-t.x);this.projectiles.push({from:"enemy",kind:"spit",x:t.x+Math.cos(i)*.8,y:t.y+Math.sin(i)*.8,vx:Math.cos(i)*n.projSpeed,vy:Math.sin(i)*n.projSpeed,dmg:n.projDmg,splash:0,life:3,r:.28}),this.ev({type:"spit",x:t.x,y:t.y})}_boss(t){let e=this.boss;if(!e||e.state==="dead")return;e.t+=t,e.flash=Math.max(0,e.flash-t),e.touchCd-=t;let n=this.aliveBears,i=this.nearest(e.x,e.y,n);e.phase=e.hp/e.maxHp>.6?1:e.hp/e.maxHp>.3?2:3,e.phase!==(e.lastPhase||1)&&(e.lastPhase=e.phase,this.ev({type:"phase",n:e.phase}));let r=e.phase-1,a=c=>{if(!i)return;let l=i.e.x-e.x,h=i.e.y-e.y,u=Math.hypot(l,h)||1;u>e.r+1.4&&(e.x+=l/u*c*t,e.y+=h/u*c*t),e.face=Math.atan2(h,l)},o=()=>{if(!(e.touchCd>0)){for(let c of n)if(Math.hypot(c.x-e.x,c.y-e.y)<e.r+fs+.1){e.touchCd=1.2,this.hurtBear(c,ps.touch,{kind:"touch"});break}}};switch(e.state){case"intro":e.t>=2.6&&(e.state="idle",e.t=0,e.idleDur=1.6,this.ev({type:"bossLand",x:e.x,y:e.y}));break;case"idle":if(a(ps.speed*(1+r*.2)),o(),e.t>=e.idleDur){let c=nm[r],l=c[e.atk++%c.length];this._startAttack(e,l,i)}break;case"rain":{let c=[.55,1.35];e.volley<c.length&&e.t>=c[e.volley]&&(this._rainVolley(e,e.volley),e.volley++),e.t>=1.9&&this._toIdle(e);break}case"summon":!e.summoned&&e.t>=.6&&(e.summoned=!0,this._summon(e)),e.t>=1.4&&this._toIdle(e);break;case"windCharge":e.t>=e.hazard.warn&&(e.state="charge",e.t=0,e.hit=new Set,this.ev({type:"chargeGo",x:e.x,y:e.y}));break;case"charge":{let c=Mr.speed[r];e.x+=Math.cos(e.dir)*c*t,e.y+=Math.sin(e.dir)*c*t;for(let l of n)e.hit.has(l.id)||Math.hypot(l.x-e.x,l.y-e.y)<e.r+fs&&(e.hit.add(l.id),this.hurtBear(l,Mr.dmg*(1+r*.1),{kind:"charge",age:e.hazard.t,warn:e.hazard.warn}));(Math.abs(e.x)>It.hx-e.r-.2||Math.abs(e.y)>It.hy-e.r-.2)&&(e.x=ve(e.x,-It.hx+e.r+.2,It.hx-e.r-.2),e.y=ve(e.y,-It.hy+e.r+.2,It.hy-e.r-.2),e.state="stun",e.t=0,this._dropHazard(e.hazard),e.hazard=null,this.ev({type:"bossSlam",x:e.x,y:e.y}));break}case"stun":e.t>=Mr.stun[r]&&this._toIdle(e);break;default:break}e.x=ve(e.x,-It.hx+e.r,It.hx-e.r),e.y=ve(e.y,-It.hy+e.r,It.hy-e.r)}_toIdle(t){t.state="idle",t.t=0,t.idleDur=[2.2,1.6,1.1][t.phase-1],t.summoned=!1,t.volley=0}_startAttack(t,e,n){if(t.t=0,t.state=e==="charge"?"windCharge":e,t.volley=0,t.summoned=!1,e==="charge"){let i=t.phase-1,r=n?n.e.x:0,a=n?n.e.y:0;t.dir=Math.atan2(a-t.y,r-t.x),t.face=t.dir;let o=Math.cos(t.dir),c=Math.sin(t.dir),l=0;for(;l<60;){let h=t.x+o*l,u=t.y+c*l;if(Math.abs(h)>It.hx-t.r-.2||Math.abs(u)>It.hy-t.r-.2)break;l+=.25}t.hazard={kind:"path",from:"charge",x:t.x,y:t.y,dx:o,dy:c,len:l,width:t.r*2,warn:Mr.warn[i],t:0,owner:t},this.hazards.push(t.hazard),this.ev({type:"chargeWarn",x:t.x,y:t.y,dir:t.dir})}else this.ev({type:e==="rain"?"rainWarn":"summonWarn",x:t.x,y:t.y})}_dropHazard(t){let e=this.hazards.indexOf(t);e>=0&&this.hazards.splice(e,1)}_rainVolley(t,e){let n=t.phase-1,i=this.aliveBears,r=2+t.phase,a=[];if(e===0)for(let o of i)a.push({x:o.x,y:o.y});for(let o=0;o<r;o++)a.push({x:(this.rng()*2-1)*(It.hx-2),y:(this.rng()*2-1)*(It.hy-2)});for(let o of a)this.hazards.push({kind:"circle",from:"rain",x:o.x,y:o.y,r:ko.r[n],warn:ko.warn[n],t:0,dmg:ko.dmg*(1+n*.1),done:!1});this.ev({type:"rain",n:a.length})}_summon(t){let e=[3,4,5][t.phase-1],n=this.enemies.filter(i=>i.hp>0).length;for(let i=0;i<e&&n+i<9;i++){let r=i/e*qi+this.rng(),a=this.spawn(i%2?"sour":"gummy",{x:ve(t.x+Math.cos(r)*3,-It.hx+1,It.hx-1),y:ve(t.y+Math.sin(r)*3,-It.hy+1,It.hy-1)});a.touchCd=1}this.ev({type:"summon",x:t.x,y:t.y})}_bears(t){let e=this.targets();for(let n of this.bears){if(n.flash=Math.max(0,n.flash-t),n.inv=Math.max(0,n.inv-t),n.swing=Math.max(0,n.swing-t),n.cd-=t,!n.alive)continue;let i=n.def,r=this.nearest(n.x,n.y,e);if(n.hasTarget=!!(r&&r.d<=i.range),!r){n.aim=this.squad.face;continue}if(n.aim=Math.atan2(r.e.y-n.y,r.e.x-n.x),!(!n.hasTarget||n.cd>0))if(n.cd=i.cd,i.role==="melee"){n.swing=.28;for(let a of e){let o=Math.hypot(a.x-n.x,a.y-n.y);o-(a.r||0)>i.range||Math.abs(Ul(n.aim,Math.atan2(a.y-n.y,a.x-n.x)))>i.arc&&o>(a.r||0)+.8||this.hurtEnemy(a,i.dmg,{bear:n})}this.ev({type:"swing",x:n.x,y:n.y,a:n.aim,idx:n.idx})}else{let a=n.aim+(this.rng()-.5)*(i.role==="ranged"?.07:.02);this.projectiles.push({from:"bear",kind:i.role==="magic"?"magic":"gum",x:n.x+Math.cos(a)*.7,y:n.y+Math.sin(a)*.7,vx:Math.cos(a)*i.speed,vy:Math.sin(a)*i.speed,dmg:i.dmg,splash:i.splash||0,life:i.range/i.speed+.35,r:i.role==="magic"?.4:.25,idx:n.idx}),this.ev({type:"shoot",x:n.x,y:n.y,a,idx:n.idx})}}}hurtEnemy(t,e,n={}){if(t.hp<=0||t.kind==="boss"&&t.state==="intro")return 0;let i=e*this.dmgMul*(t.kind==="boss"&&t.state==="stun"?1.5:1);return i=Math.min(i,t.hp),t.hp-=i,t.flash=.12,n.noCharge||(this.charge=Math.min(100,this.charge+i*.16*this.chargeMul)),this.ev({type:"hit",x:t.x,y:t.y,boss:t.kind==="boss",dmg:i}),t.hp<=1e-6&&(t.hp=0,this._die(t)),i}_die(t){if(t.kind==="boss"){t.state="dead",this.hazards=this.hazards.filter(i=>i.kind==="splat"),this.ev({type:"bossDown",x:t.x,y:t.y});for(let i of this.enemies)i.hp>0&&(i.hp=0,this.kills++,this.ev({type:"crumble",kind:i.kind,x:i.x,y:i.y}));this._drop(t.x,t.y,12,3);return}this.kills++;let e=Ke[t.kind];this.ev({type:"crumble",kind:t.kind,x:t.x,y:t.y}),this._drop(t.x,t.y,e.reward,1);let n=this.fallenBears.length>0;!this.pickups.some(i=>i.type==="mint")&&this.rng()<(n?.35:.04)&&this._mint(t.x,t.y)}_drop(t,e,n,i){for(let r=0;r<n;r++){let a=this.rng()*qi,o=1.5+this.rng()*2.5;this.pickups.push({type:"candy",x:t,y:e,v:i,vx:Math.cos(a)*o,vy:Math.sin(a)*o,t:0,hue:Math.floor(this.rng()*6)})}}_mint(t,e){this.pickups.push({type:"mint",x:t,y:e,v:0,vx:0,vy:0,t:0,life:28}),this.mintT=this.t,this.ev({type:"mintDrop",x:t,y:e})}hurtBear(t,e,n={}){var r,a;if(!t.alive||t.inv>0)return!1;let i=e*(this.easy?.6:1);return t.hp-=i,t.flash=.25,t.inv=.5,(n.kind==="charge"||n.kind==="rain"||n.kind==="blast")&&this.hazardHits.push({kind:n.kind,warn:(r=n.warn)!=null?r:0,age:(a=n.age)!=null?a:0}),this.ev({type:"bearHit",x:t.x,y:t.y,idx:t.idx,dmg:i}),t.hp<=0&&(t.hp=0,t.alive=!1,t.fallT=this.t,this.ev({type:"bearDown",x:t.x,y:t.y,idx:t.idx})),!0}_projectiles(t){let e=this.targets(),n=[];for(let i of this.projectiles){i.x+=i.vx*t,i.y+=i.vy*t,i.life-=t;let r=i.life<=0||Math.abs(i.x)>It.hx+3||Math.abs(i.y)>It.hy+3;if(!r&&i.from==="bear"){for(let a of e)if(!(a.hp<=0)&&Math.hypot(a.x-i.x,a.y-i.y)<(a.r||.6)+i.r){if(i.splash>0)for(let o of e)o.hp>0&&Math.hypot(o.x-i.x,o.y-i.y)-(o.r||0)<=i.splash&&this.hurtEnemy(o,i.dmg,{bear:i.idx});else this.hurtEnemy(a,i.dmg,{bear:i.idx});this.ev({type:"impact",x:i.x,y:i.y,kind:i.kind}),r=!0;break}}else if(!r&&i.from==="enemy"){for(let a of this.bears)if(a.alive&&Math.hypot(a.x-i.x,a.y-i.y)<fs+i.r&&(this.hurtBear(a,i.dmg,{kind:"spit"})||a.inv>0)){this.ev({type:"impact",x:i.x,y:i.y,kind:"spit"}),r=!0;break}}r||n.push(i)}this.projectiles=n}_hazards(t){let e=[];for(let n of this.hazards)if(n.t+=t,!(n.kind==="blast"&&n.owner.hp<=0&&!n.done)){if((n.kind==="circle"||n.kind==="blast")&&!n.done&&n.t>=n.warn){n.done=!0;for(let i of this.bears)i.alive&&Math.hypot(i.x-n.x,i.y-n.y)<=n.r+fs*.4&&this.hurtBear(i,n.dmg,{kind:n.from,age:n.t,warn:n.warn});this.ev({type:n.kind==="blast"?"blast":"splat",x:n.x,y:n.y,r:n.r}),n.kind==="blast"&&n.owner.hp>0&&(n.owner.hp=0,n.owner.dying=!1,this.kills++,this.ev({type:"crumble",kind:n.owner.kind,x:n.owner.x,y:n.owner.y}),this._drop(n.owner.x,n.owner.y,Ke.bomber.reward,1))}n.done&&n.t>=n.warn+.5||e.push(n)}this.hazards=e}useSuper(){if(this.over||this.charge<100||!(this.state==="wave"||this.state==="boss"))return!1;let t=this.targets();if(!t.length)return!1;let e=null,n=-1;for(let i of t){let r=i.kind==="boss"?4:1;for(let a of t)a!==i&&Math.hypot(a.x-i.x,a.y-i.y)<3.6&&(r+=a.kind==="boss"?4:1);r>n&&(n=r,e=i)}return this.charge=0,this.jaws.push({x:e.x,y:e.y,t:0,delay:.95,r:4.4,dmg:120,bossDmg:170}),this.ev({type:"super",x:e.x,y:e.y}),!0}_jaws(t){let e=[];for(let n of this.jaws){if(n.t+=t,n.t<n.delay){e.push(n);continue}for(let i of this.targets())Math.hypot(i.x-n.x,i.y-n.y)-(i.r||0)<=n.r&&this.hurtEnemy(i,i.kind==="boss"?n.bossDmg:n.dmg,{noCharge:!0});this.projectiles=this.projectiles.filter(i=>i.from!=="enemy"||Math.hypot(i.x-n.x,i.y-n.y)>n.r),this.ev({type:"jawLand",x:n.x,y:n.y,r:n.r})}this.jaws=e}_pickups(t){let e=this.aliveBears,n=[];for(let i of this.pickups){if(i.t+=t,i.type==="candy"){i.x=ve(i.x+i.vx*t,-It.hx+.4,It.hx-.4),i.y=ve(i.y+i.vy*t,-It.hy+.4,It.hy-.4);let r=Math.max(0,1-t*5);if(i.vx*=r,i.vy*=r,i.t>.35){let a=this.nearest(i.x,i.y,e);if(a&&a.d<4.2){let o=a.e.x-i.x,c=a.e.y-i.y,l=Math.hypot(o,c)||1;i.x+=o/l*9*t,i.y+=c/l*9*t}if(a&&a.d<.95){this.candies+=i.v,this.ev({type:"candy",x:i.x,y:i.y,v:i.v});continue}}}else{if(i.life-=t,i.life<=0)continue;let r=this.nearest(i.x,i.y,e);if(r&&r.d<1.1){this._useMint(i);continue}}n.push(i)}this.pickups=n}_useMint(t){let e=this.fallenBears.sort((n,i)=>n.fallT-i.fallT)[0];if(e)e.alive=!0,e.hp=Math.ceil(e.maxHp*.5),e.inv=1.5,e.flash=.4,this.ev({type:"revive",x:e.x,y:e.y,idx:e.idx});else{for(let n of this.aliveBears)n.hp=Math.min(n.maxHp,n.hp+n.maxHp*.25);this.ev({type:"heal",x:t.x,y:t.y})}}_mintTimer(){if(this.fallenBears.length&&this.aliveBears.length&&!this.pickups.some(t=>t.type==="mint")&&this.t-this.mintT>14&&(this.state==="wave"||this.state==="boss")){let t=this.rng()*qi,e=4+this.rng()*4;this._mint(ve(this.squad.x+Math.cos(t)*e,-It.hx+1.2,It.hx-1.2),ve(this.squad.y+Math.sin(t)*e,-It.hy+1.2,It.hy-1.2))}}_ending(){if(!this.over)if(this.boss&&this.boss.state==="dead"){this.over=!0,this.state="won";let t=this.stars;this.result={win:!0,stars:t,candies:this.candies,bonus:20+10*t+6*this.stage,stage:this.stage},this.ev({type:"won",stars:t})}else this.aliveBears.length||(this.over=!0,this.state="lost",this.result={win:!1,stars:0,candies:this.candies,bonus:0,stage:this.stage},this.ev({type:"lost"}))}};function Ol(s,t,e={}){let n=s.prototype.play,i=s.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let f=0;f<l.length;f++)h[f]=l.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}i&&(s.prototype.unlock=function(...a){let o=i.apply(this,a);return r(this),o}),s.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function zl(s,{gain:t=.5,file:e="music.mp3"}={}){let n=s.prototype.unlock,i=s.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),i&&i.call(a,null)}).catch(()=>{a._song=null})}s.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},i&&(s.prototype.setTune=function(a){if(!this._song)return i.call(this,a)})}var kl={blast:"data:audio/mpeg;base64,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TbRa0AARH/EILPbPP7pSgemDgbKHyppoOC5iLNFAI5LdLlcsA33d3/7//6EA91IABrCLg/Qvg/A6QhcSbuGRUlWs4TAMEgRIA0VPNK3AVLkqT8RLHxSUEwhJA0MnwqgJlYTQqIavOrBEmiVZRPFDfyxxJoj/+zjEagMISMEgTaRCwSYQpIm2GAg32IWpQWDC/Fj4v+8qa3sAkAJZwAqNA6C1JTRxcDsDIhCQefxVPiwvxbqF//qFmaxT+Kini3/4o3+pTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEhYIK4Ikmx7EiyKsDnSiTCCBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",hit:"data:audio/mpeg;base64,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",splat:"data:audio/mpeg;base64,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BItmcSf7/TyMBGHYf6cEMOVIv8PWAJKkWcA84BxwtwISotxbQtNAJKIBGRDiJJeFhAfoGAAbAxUh90kjEipFfwxSJ2E2B0AXBiFxSoeuTReJoyPkyZL/yCEkUz5sXESPNlI0UfRb/1MX0VkHJZBiuUSDndb/+zjEsYAJVMcYFZEAAlqxpAMw8AGReS0azH//OMUzdMghoooEUNDYuL9dbGRNEWRQMkQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEogAT+XMzuYmACAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",roar:"data:audio/mpeg;base64,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hBRVu9y4AH//+zjE4YMLDT0SJ4xTQSKUI0hgiUB8UGOy4KCfALQsTehrjh8xMMWRPGkdSufMSdNE0UNBEEQzly1VCzlSl5SVCoIhkUoUSKXVQgpHHnGqmqvXmZmZre/7HEpFZdFeFBSb8Tf+/jeBIKaCgoUcFBVgUVkFf7v8b/wjfxBTe8CgqKCu/wobTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8oMOFYkQR5htyU6mIsjBielVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8YIMLLslR4TCga4UooT0mhlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",super:"data:audio/mpeg;base64,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/EL5/x/X/WerHkqtZkIoc62aComf4hPsvXsKNbD583/D4RDwnAd0qEgahIcqMBqrXnGr1TzLEgEwYCFOpStUpSshjMhjGqUspS7y///9S6Go/ob////0erTGZDGM6hQF1KUrIYVMBB2riUNlXKBpQNRKd4NQalTtTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE74AWhXEMNPeAAmwm5zce8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEqQPJVSbyPGEAEAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",wave:"data:audio/mpeg;base64,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V4tKsJ+BercPEgirsWHRhb3rl+RiaNGwnXLTgusZ253U+4h1y0Rp/HB6yL3/+zjE8wONBYEOLiSn2ZiwIcnUFbgttxJzWeOnj0v/7ryZ5P8mea+O+r/8peTCEAgUHRAQvKSp4WbMATqgnXLDfiC1sZcOZGS+WQVBgbca1D/Udm7NnwsuJpMxVGjkmq2ok9uuftw9o3ar+ym1HN98vPs2rVLRNBTKzIj6XWsll4t8YmY4dOoAghAUkFGBOBh2dh6K7oZ4fhOvKculbRSDkcs93XGG0bHqghqOdC+TJUT3MyM1BQmCaah14kPaIPGp+O0/8mpdWxudO+2i2dkKOahFQeQhRU7/+zjE7QFMGXMSziBHyXAwIoXDCbmi77bXVVdPt4m/SosDYHuoMAEuGGyuLvvWzlEh/POZp6ebHlD4BhriAsPGsiDhaok5znJDyXFrIINcgqUTKsVOOR2IAoiLEKc4fIQQFabXqhNdRzSH30fP+lUM21k5UjDyXF7XHVzkoeBNR1TDk5EWVaVk6gBAQBJpBQAAACfj/mEpsE0mEbd9XYcRrUSqyMilQRtyYB0ABRbYMBRnI6J4CpGC+hR1AdamMhbFrAkAxy+n6yIdhsWCEHBwrQyh+VRryFL/+zjE8AAOSX8MDuEBAWSuYlnEFLnT4th48j78TRkqI3zrJYk0a5W29gxH1t/N9++/+q0uhlECebA5KyPBg6fQr1ri28f/3v9/9kQtWPtQFlzs5sF3ls6/tbdc6tb++///n33/+r2yM2SumfEdknpHf6W5TG5TQClYaCgEjlEiSTEiSQlBVYKnQaPKBp4lOgqdBoOiIOiU7/lTolOz0GpU6Cp1RFQd/zazteRUHa3CV0OqDsrErrFB3iV2oGpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqr/+zjE64ALhYEZTaCniaCiYsq2UACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6oAWDXUtOYeACRmDXIuMMACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="};var im="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ue=null,Ho=!1;function ql(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Hl(){ql(),Ho=!0;try{if(Ue||(Ue=document.createElement("audio"),Ue.src=im,Ue.loop=!0,Ue.preload="auto",Ue.setAttribute("playsinline",""),Ue.setAttribute("webkit-playsinline",""),Ue.setAttribute("x-webkit-airplay","deny"),Ue.volume=.01,Ue.addEventListener("pause",()=>{Ho&&!document.hidden&&setTimeout(()=>Ho&&Ue.paused&&Ue.play().catch(()=>{}),300)})),Ue.paused){let s=Ue.play();s&&s.catch&&s.catch(()=>{})}}catch{}}function Gl(s,t){ql();try{s.addEventListener("statechange",()=>{s.state==="interrupted"&&!t()&&!document.hidden&&s.resume().catch(()=>{})})}catch{}}var He=s=>440*Math.pow(2,(s-69)/12),Er=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Hl(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Gl(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=i.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=i,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,i,r,a=this.sfx,o=.005){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.value=e;let h=c.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+i),l.connect(h).connect(a),l.start(n),l.stop(n+i+.05)}noise(t,e,n,i="lowpass",r=1e3,a=1,o=this.sfx,c){let l=this.ctx;if(!l)return;let h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,i,r,a,o=this.sfx){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,i),l.frequency.exponentialRampToValueAtTime(n,i+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(a,i+.02),h.gain.exponentialRampToValueAtTime(1e-4,i+r),l.connect(h).connect(o),l.start(i),l.stop(i+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let c=this.bed;c.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{c.s.stop(),c.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let i=e.createBiquadFilter();i.type=t==="wind"?"bandpass":"lowpass",i.frequency.value=t==="wind"?420:520,i.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(i).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:i}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let i=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<i;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,c,l]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",He(c),a,l*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var sm={tempo:76,beats:16,wave:"sine",vol:.11,notes:[[0,72,1],[1,76,1],[2,79,1.5],[4,77,1],[5,74,1],[6,72,1.5],[8,69,1],[9,72,1],[10,76,1.5],[12,74,1],[13,71,1],[14,67,2],[0,48,3],[4,53,3],[8,45,3],[12,43,3]]},rm={tempo:128,beats:16,wave:"triangle",vol:.1,notes:[[0,69,.5],[.5,72,.5],[1,76,1],[2,74,.5],[2.5,72,.5],[3,69,1],[4,67,.5],[4.5,71,.5],[5,74,1],[6,72,.5],[6.5,71,.5],[7,67,1],[8,69,.5],[8.5,72,.5],[9,76,1],[10,79,1],[11,76,1],[12,74,.5],[12.5,72,.5],[13,71,1],[14,72,2],[0,45,1],[2,45,1],[4,43,1],[6,43,1],[8,45,1],[10,45,1],[12,43,1],[14,40,1],[1,52,.5],[3,52,.5],[5,50,.5],[7,50,.5],[9,52,.5],[11,52,.5],[13,50,.5],[15,47,.5]]},Hi=class extends Er{play(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"straw":this.noise(n,.16,.12,"bandpass",1800,1.2,this.sfx,500),this.tone("triangle",He(76),n,.1,.07);break;case"lime":this.slide("sine",500,1100,n,.2,.09),this.tone("triangle",He(88),n+.12,.2,.06);break;case"blue":this.slide("square",700,260,n,.07,.04);break;case"hit":this.tone("sine",220,n,.06,.08);break;case"impact":this.noise(n,.08,.07,"bandpass",1200,1);break;case"limeBoom":this.noise(n,.2,.1,"lowpass",1400,1,this.sfx,300),this.tone("triangle",He(60),n,.2,.08);break;case"crumble":this.noise(n,.22,.14,"highpass",1800,.8,this.sfx,5e3),this.tone("triangle",He(84),n+.03,.1,.05);break;case"candy":this.tone("triangle",He(88+Math.floor(Math.random()*3)*2),n,.12,.07);break;case"mint":[0,4,7,12,16].forEach((i,r)=>this.tone("sine",He(79+i),n+r*.07,.3,.1));break;case"revive":[0,7,12,19].forEach((i,r)=>this.tone("triangle",He(67+i),n+r*.09,.4,.11));break;case"bearHit":this.slide("triangle",420,200,n,.2,.12);break;case"bearDown":this.slide("triangle",400,90,n,.7,.12),this.noise(n,.4,.06,"lowpass",500);break;case"warn":this.tone("sine",520,n,.1,.05);break;case"splat":this.noise(n,.3,.14,"lowpass",900,1,this.sfx,200),this.tone("sine",120,n,.2,.1);break;case"blast":this.noise(n,.4,.18,"lowpass",1e3,1,this.sfx,120),this.slide("sawtooth",200,40,n,.4,.1);break;case"spit":this.slide("sine",300,600,n,.12,.06);break;case"super":this.slide("sine",100,800,n,.9,.1);break;case"superBoom":this.noise(n,.9,.3,"lowpass",800,1,this.sfx,60),this.slide("sawtooth",160,28,n,.8,.22),this.tone("sine",55,n,.9,.25);break;case"roar":this.slide("sawtooth",160,60,n,.9,.16),this.noise(n,.9,.1,"bandpass",300,1.5,this.sfx,120);break;case"slam":this.noise(n,.4,.22,"lowpass",500,1,this.sfx,80),this.tone("sine",70,n,.4,.22);break;case"charge":this.slide("sawtooth",90,240,n,.5,.1);break;case"wave":[0,4,7].forEach((i,r)=>this.tone("triangle",He(72+i),n+r*.1,.3,.1));break;case"win":[0,4,7,12,16,19,24].forEach((i,r)=>this.tone("triangle",He(72+i),n+r*.11,.6,.13));break;case"lose":[0,-3,-7,-12].forEach((i,r)=>this.tone("sine",He(64+i),n+r*.25,.7,.12));break;case"tap":this.tone("sine",700,n,.06,.08);break;default:break}}mode(t){this.setTune(t==="battle"?rm:t==="calm"?sm:null)}};Ol(Hi,kl);zl(Hi);var qn=Math.PI*2,nt={sph:new os(1,22,16),half:new os(1,22,10,0,qn,0,Math.PI/2),cyl:new as(1,1,1,16),cone:new gr(1,1,12),box:new si(1,1,1),disc:new pr(1,40),ring:new Ar(.86,1,48)};function wr(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new kn(i);return r.colorSpace=xe,n&&(r.wrapS=r.wrapT=xn,r.repeat.set(n[0],n[1])),r.anisotropy=4,r}var li;function am(){if(li)return li;let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,128,128);let e=7,n=()=>(e=e*16807%2147483647,e/2147483647);for(let i=0;i<260;i++){let r=n()*128,a=n()*128,o=2+n()*7,c=t.createRadialGradient(r,a,0,r,a,o),l=n()>.5?255:0;c.addColorStop(0,`rgba(${l},${l},${l},.22)`),c.addColorStop(1,`rgba(${l},${l},${l},0)`),t.fillStyle=c,t.fillRect(r-o,a-o,o*2,o*2)}t.strokeStyle="rgba(255,255,255,.16)",t.lineWidth=1.3;for(let i=0;i<4;i++){let r=20+n()*90,a=20+n()*90;for(let o=1;o<7;o++)t.beginPath(),t.ellipse(r,a,o*2.4,o*1.9,n()*.4,.3,Math.PI*1.7),t.stroke()}return li=new kn(s),li.wrapS=li.wrapT=xn,li.repeat.set(2,2),li}var Tr=(s,t)=>wr(128,128,(e,n,i)=>{e.fillStyle=s,e.fillRect(0,0,n,i),e.strokeStyle=t,e.lineWidth=14,e.lineCap="round",e.beginPath();for(let r=0;r<22;r+=.15){let a=r*2.7,o=n/2+Math.cos(r)*a,c=i/2+Math.sin(r)*a;r===0?e.moveTo(o,c):e.lineTo(o,c)}e.stroke()}),Wl=(s,t,e=8)=>wr(128,128,(n,i,r)=>{n.fillStyle=s,n.fillRect(0,0,i,r),n.fillStyle=t;for(let a=0;a<e;a+=2)n.beginPath(),n.moveTo(a*i/e-r,r),n.lineTo((a+1)*i/e-r,r),n.lineTo((a+1)*i/e,0),n.lineTo(a*i/e,0),n.fill()}),Vr=()=>wr(64,64,(s,t,e)=>{let n=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)}),Go=new Map;function kt(s,t={}){var i,r,a,o,c,l;let e=`${s}|${(i=t.rough)!=null?i:""}|${(r=t.em)!=null?r:""}|${t.map?1:0}`;if(!t.fresh&&Go.has(e))return Go.get(e);let n=new _n({color:s,roughness:(a=t.rough)!=null?a:.62,metalness:0,bumpMap:am(),bumpScale:(o=t.bump)!=null?o:.5,emissive:s,emissiveIntensity:(c=t.em)!=null?c:.12,map:t.map||null,transparent:!!t.transparent,opacity:(l=t.opacity)!=null?l:1});return t.fresh||Go.set(e,n),n}var Ce=(s,t=1,e={})=>new rn({color:s,transparent:t<1,opacity:t,depthWrite:t>=1,...e});function ut(s,t,e=0,n=0,i=0,r=1,a=r,o=r){let c=new jt(s,t);return c.position.set(e,n,i),c.scale.set(r,a,o),c}var Qe=()=>kt(1840176,{rough:.3,em:0}),Wo=()=>kt(16777215,{rough:.3,em:.3});function Xo(s=.8){let t=new jt(nt.disc,new rn({color:656928,transparent:!0,opacity:.38,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.04,t.scale.setScalar(s),t.renderOrder=1,t}function Xl(s){let t=s.color,e=kt(t,{rough:.34,em:.2,fresh:!0}),n=kt(new Rt(t).lerp(new Rt(16777215),.5).getHex(),{rough:.5,em:.2,fresh:!0}),i=new Wt,r=new Wt;i.add(r),r.add(ut(nt.sph,e,0,.78,0,.5,.56,.45)),r.add(ut(nt.sph,n,0,.72,.28,.27,.3,.17));let a=new Wt;a.position.set(0,1.5,.04),r.add(a),a.add(ut(nt.sph,e,0,0,0,.44,.4,.42));for(let p of[-1,1])a.add(ut(nt.sph,e,p*.31,.34,-.02,.17,.17,.12)),a.add(ut(nt.sph,n,p*.31,.34,.06,.09,.09,.05)),a.add(ut(nt.sph,Qe(),p*.16,.07,.38,.065,.085,.05)),a.add(ut(nt.sph,Wo(),p*.14,.1,.42,.022,.022,.02)),a.add(ut(nt.sph,kt(16747176,{em:.2}),p*.27,-.06,.34,.07,.045,.03));a.add(ut(nt.sph,n,0,-.1,.34,.19,.14,.12)),a.add(ut(nt.sph,Qe(),0,-.06,.45,.05,.035,.03));let o=[];for(let p of[-1,1]){let m=new Wt;m.position.set(p*.52,1.08,0),m.add(ut(nt.sph,e,0,-.18,0,.15,.3,.15)),r.add(m),o.push(m),r.add(ut(nt.sph,e,p*.22,.24,.02,.19,.26,.21))}let c=new Wt;c.position.set(0,-.4,.05),o[1].add(c);let l;if(s.role==="melee"){l=new Wt;let p=kt(15213626,{em:.25}),m=kt(16777215,{em:.3});for(let g=0;g<6;g++)l.add(ut(nt.cyl,g%2?p:m,0,.15+g*.2,0,.065,.2,.065));let A=new jt(new ai(.2,.065,8,14,Math.PI),p);A.position.set(.2,1.35,0),l.add(A),l.add(ut(nt.sph,m,0,0,0,.1)),l.rotation.x=Math.PI/2-.15,l.position.set(0,0,.05)}else if(s.role==="magic"){l=new Wt,l.add(ut(nt.cyl,kt(15794136,{em:.3}),0,.7,0,.05,1.4,.05));let p=ut(nt.cyl,kt(16777215,{em:.45,map:Tr("#ff8ad0","#fff4a8")}),0,1.5,0,.34,.09,.34);p.rotation.x=Math.PI/2,l.add(p);let m=ut(nt.sph,Ce(14221194,.8),0,1.5,.08,.2);l.add(m),l.userData.orb=m,l.rotation.x=.35,l.position.set(0,-.1,.05)}else{l=new Wt,l.add(ut(nt.sph,kt(2775768,{rough:.3,em:.25}),0,0,.1,.22,.2,.3));let p=ut(nt.cyl,kt(14214399,{em:.3}),0,0,.5,.085,.5,.085);p.rotation.x=Math.PI/2,l.add(p),l.add(ut(nt.sph,new _n({color:12574975,transparent:!0,opacity:.6,roughness:.1,emissive:5933823,emissiveIntensity:.3}),0,.28,.05,.17));for(let m=0;m<3;m++)l.add(ut(nt.sph,kt([16734842,16769098,8060810][m],{em:.4}),-.05+m*.05,.26+m%2*.04,.05,.05));l.position.set(0,0,.1)}c.add(l);let h=[];for(let p of[-1,1]){let m=new Wt;m.position.set(p*.2,.36,.02),m.add(ut(nt.sph,e,0,-.1,.04,.2,.24,.24)),r.add(m),h.push(m)}let u=Xo(.75);i.add(u);let f=new jt(nt.ring,Ce(16777215,.8));return f.rotation.x=-Math.PI/2,f.position.y=.06,f.scale.setScalar(1),f.visible=!1,i.add(f),i.userData={body:r,head:a,arms:o,legs:h,weapon:l,mat:e,pale:n,ring:f,shadow:u,kick:0,def:s},i}function Yl(s){let t=Ke[s],e=t.r,n=kt(t.color,{rough:.72,em:.14,bump:.9}),i=new Wt,r=new Wt;i.add(r),r.add(ut(nt.half,n,0,.18*e,0,e,e*1.05,e)),r.add(ut(nt.cyl,n,0,.1*e,0,e*.98,e*.4,e*.98));let a=kt(16777215,{em:.5,rough:.9}),o=(()=>{let u=s.length*13+5;return()=>(u=u*16807%2147483647,u/2147483647)})();for(let u=0;u<12;u++){let f=o()*qn,p=.2+o()*1.1;r.add(ut(nt.sph,a,Math.cos(f)*Math.sin(p)*e*.97,.18*e+Math.cos(p)*e*1,Math.sin(f)*Math.sin(p)*e*.97,.05*e+.015,.05*e+.015,.05*e+.015))}let c=e*.95,l=e*.62;for(let u of[-1,1]){r.add(ut(nt.sph,Wo(),u*e*.34,l,c*.8,e*.2,e*.24,e*.12)),r.add(ut(nt.sph,Qe(),u*e*.32,l-e*.02,c*.8+e*.1,e*.1,e*.13,e*.06));let f=ut(nt.box,Qe(),u*e*.36,l+e*.28,c*.8,e*.34,e*.07,e*.07);f.rotation.z=u*-.45,r.add(f)}if(s==="spitter")r.add(ut(nt.sph,kt(2755130,{em:0,rough:.4}),0,e*.2,c*.82,e*.28,e*.22,e*.14)),r.add(ut(nt.sph,kt(16743080,{em:.3}),0,e*.1,c*.9,e*.16,e*.08,e*.08));else if(s==="tank"){for(let u=0;u<2;u++){let f=new jt(new ai(e*(.95-u*.28),e*.07,8,28),kt(16747050,{em:.25}));f.rotation.x=Math.PI/2,f.position.y=e*(.35+u*.5),r.add(f)}r.add(ut(nt.box,Qe(),0,e*.16,c*.9,e*.45,e*.07,e*.07))}else if(s==="bomber"){r.add(ut(nt.cyl,kt(6965802),0,e*1.35,0,.05,e*.5,.05));let u=ut(nt.sph,Ce(16769098),0,e*1.65,0,.14);r.add(u),i.userData.spark=u,r.add(ut(nt.box,Qe(),0,e*.2,c*.9,e*.4,e*.06,e*.06))}else if(s==="sour"){for(let u=0;u<5;u++){let f=u/5*qn;r.add(ut(nt.cone,a,Math.cos(f)*e*.55,e*1,Math.sin(f)*e*.55-e*.1,.07,.2,.07))}r.add(ut(nt.box,Qe(),0,e*.18,c*.9,e*.36,e*.07,e*.07))}else r.add(ut(nt.box,Qe(),0,e*.18,c*.9,e*.36,e*.07,e*.07));let h=Xo(e*1.1);return i.add(h),i.userData={body:r,mat:n,r:e,kind:s},i}function Zl(){let s=new Wt,t=new Wt,e=new Wt;s.add(t),t.add(e);let n=1.25,i=.75,r=kt(14195290,{rough:.8,em:.1,bump:1}),a=kt(16739e3,{rough:.38,em:.22}),o=new jt(new ai(n,i,20,40),r);e.add(o);let c=new jt(new ai(n,i+.04,20,40,Math.PI*1.3),a);c.rotation.z=Math.PI*.35-Math.PI*.15,e.add(c);for(let g=0;g<9;g++){let d=g/9*Math.PI*1.3+Math.PI*.2;e.add(ut(nt.sph,a,Math.cos(d)*(n+.4),Math.sin(d)*(n+.4),.3*(g%3-1),.2,.3,.18))}let l=[16769098,7006975,16777215,8060810,11569919],h=11,u=()=>(h=h*16807%2147483647,h/2147483647);for(let g=0;g<22;g++){let d=.2+u()*2.6,_=n+(u()-.5)*.8,M=Math.sqrt(Math.max(.05,i*i-(_-n)*(_-n)))+.02,v=ut(nt.cyl,kt(l[g%5],{em:.4}),Math.cos(d)*_,Math.sin(d)*_,M,.045,.2,.045);v.rotation.set(Math.PI/2+(u()-.5),0,u()*qn),e.add(v)}for(let g of[-1,1]){e.add(ut(nt.sph,Wo(),g*.62,.55,.62,.2,.26,.1)),e.add(ut(nt.sph,Qe(),g*.6,.52,.72,.1,.13,.06));let d=ut(nt.box,Qe(),g*.62,.92,.66,.36,.08,.08);d.rotation.z=g*-.5,e.add(d)}e.add(ut(nt.box,Qe(),0,-.8,.62,.7,.1,.1));let f=kt(16765498,{rough:.3,em:.4}),p=new Wt;p.position.set(0,n+i*.75,.35),p.add(ut(nt.cyl,f,0,0,0,.55,.22,.55));for(let g=0;g<5;g++){let d=g/5*qn;p.add(ut(nt.cone,f,Math.cos(d)*.5,.33,Math.sin(d)*.5,.15,.4,.15)),p.add(ut(nt.sph,kt([16730730,4915082,4885247][g%3],{em:.6}),Math.cos(d)*.5,.58,Math.sin(d)*.5,.07))}p.rotation.x=.35,e.add(p);let m=new Wt;for(let g=0;g<4;g++)m.add(ut(nt.sph,Ce(16769098),Math.cos(g/4*qn)*1.3,0,Math.sin(g/4*qn)*1.3,.16));m.position.y=3.3,m.visible=!1,s.add(m);let A=Xo(2.3);return s.add(A),s.userData={lean:t,ring:e,stars:m,dough:r,glaze:a,shadow:A},s}function Jl(s){let t=[16730746,4892927,16765498,7012234,11561727,16751162][s%6],e=new Wt;e.add(ut(nt.sph,kt(t,{rough:.4,em:.5}),0,0,0,.17,.14,.14));for(let n of[-1,1]){let i=ut(nt.cone,kt(16777215,{em:.6}),n*.2,0,0,.1,.12,.1);i.rotation.z=n*-Math.PI/2,e.add(i)}return e}function jl(){let s=new Wt,t=ut(nt.cyl,kt(16777215,{rough:.3,em:.6,map:Tr("#ffffff","#e8244a")}),0,0,0,.5,.2,.5);t.rotation.x=Math.PI/2,s.add(t);let e=ut(nt.cyl,Ce(9109464,.22,{blending:Nn}),0,2,0,.45,4,.45);s.add(e);let n=new jt(nt.ring,Ce(9109464,.7));return n.rotation.x=-Math.PI/2,n.position.y=-.55,n.scale.setScalar(.9),s.add(n),s.userData={disc:t,ground:n},s}function Kl(){let s=new Wt,t=wr(256,256,(n,i,r)=>{let a=["#ff5a8a","#ffe04a","#6aeaff","#b08aff","#ffffff"];for(let o=6;o>=0;o--)n.fillStyle=a[o%5],n.beginPath(),n.arc(i/2,r/2,(o+1)*18,0,qn),n.fill()}),e=ut(nt.sph,new _n({map:t,roughness:.25,emissive:16777215,emissiveMap:t,emissiveIntensity:.25}),0,0,0,2.2);return s.add(e),s.userData={ball:e},s}function K(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=r:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),r):i==="style"?n.style.cssText=r:n.setAttribute(i,r===!0?"":r));for(let i of e.flat())i!=null&&i!==!1&&n.append(i.nodeType?i:document.createTextNode(String(i)));return n}function Ql(s){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let i=`${n}_${e?"f":"m"}`,r=s[i]?i:n;return s[r]?s[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,i=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[i])}}function $l(s,t,e,n="#ffd23a"){return`
.${s}-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:${e}}
.${s}-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.${s}-layer{position:absolute;inset:0;pointer-events:none}
.${s}-layer button,.${s}-layer .${s}-card{pointer-events:auto}
.${s}-top{position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);direction:ltr;align-items:center;justify-content:space-between}
.${s}-pill{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1) calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.4);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4);white-space:nowrap}
.${s}-bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:rgba(0,0,0,.4);border:calc(var(--u)*.35) solid #fff;overflow:hidden;position:relative}
.${s}-bar b{display:block;height:100%;background:linear-gradient(180deg,#7af0d0,#2ab898);border-radius:99px}
.${s}-round{width:calc(var(--u)*10.5);height:calc(var(--u)*10.5);border-radius:50%;font-size:calc(var(--u)*5);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${s}-round:active{transform:scale(.94)}
.${s}-hint{position:absolute;left:50%;top:calc(var(--u)*17);transform:translateX(-50%);background:rgba(10,40,60,.78);border:calc(var(--u)*.4) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .35s;pointer-events:none;max-width:94%;overflow:hidden;text-overflow:ellipsis}
.${s}-hint.show{opacity:1}
.${s}-dim{position:absolute;inset:0;background:rgba(5,25,40,.55);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.${s}-card{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.7) solid ${n};border-radius:calc(var(--u)*5);padding:calc(var(--u)*3.4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,10,30,.5)}
.${s}-logo{font-size:calc(var(--u)*10);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.8) rgba(0,30,50,.9);paint-order:stroke fill;text-align:center;line-height:1.1}
.${s}-title{font-size:calc(var(--u)*8);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.5) rgba(0,30,50,.8);paint-order:stroke fill;text-align:center;line-height:1.1}
.${s}-small{font-size:calc(var(--u)*3.8);font-weight:700;text-align:center;opacity:.95}
.${s}-stars{font-size:calc(var(--u)*11)}.${s}-stars .off{filter:grayscale(1);opacity:.3}
.${s}-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*11.5);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.${s}-btn.alt{background:linear-gradient(180deg,#ff8a6a,#e0502a);box-shadow:0 calc(var(--u)*.9) 0 #902a0a}
.${s}-btn.dark{background:linear-gradient(180deg,#4a9ab8,#2a6a88);box-shadow:0 calc(var(--u)*.9) 0 #0a3a50;font-size:calc(var(--u)*4.2)}
.${s}-btn:active{transform:translateY(calc(var(--u)*.5))}
.${s}-btn:focus-visible,.${s}-round:focus-visible,.${s}-lv:focus-visible,.${s}-bld:focus-visible{outline:calc(var(--u)*.7) solid ${n};outline-offset:calc(var(--u)*.5)}
.${s}-lvs{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.8);width:100%}
.${s}-lv{border:none;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*2.8);background:linear-gradient(180deg,#4ab8d8,#2a78a8);box-shadow:0 calc(var(--u)*.6) 0 #0a3a60;min-height:calc(var(--u)*18)}
.${s}-lv i{font-style:normal;font-size:calc(var(--u)*6.5)}
.${s}-lv.lock{background:linear-gradient(180deg,#b8c4cc,#8a98a4);box-shadow:0 calc(var(--u)*.6) 0 #5a6a78}
.${s}-bot{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);justify-content:center;direction:ltr;align-items:flex-end}
.${s}-bld{font-family:inherit;font-weight:900;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);color:#fff;background:linear-gradient(180deg,${t},${e});padding:calc(var(--u)*1) calc(var(--u)*2);min-width:calc(var(--u)*17);font-size:calc(var(--u)*3);display:flex;flex-direction:column;align-items:center;cursor:pointer;gap:calc(var(--u)*.2);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${s}-bld i{font-style:normal;font-size:calc(var(--u)*6)}
.${s}-bld.can{background:linear-gradient(180deg,#6ae08a,#2fa85a);animation:${s}pulse 1s infinite}
.${s}-bld.done{opacity:.55;filter:grayscale(.5)}
.${s}-bld small{font-size:calc(var(--u)*2.5);opacity:.95;font-weight:700}
@keyframes ${s}pulse{50%{transform:scale(1.07)}}
@media (orientation:landscape){.${s}-card{width:calc(var(--u)*115);max-width:94vw}.${s}-logo{font-size:calc(var(--u)*8)}.${s}-lvs{grid-template-columns:repeat(8,1fr)}.${s}-lv{min-height:calc(var(--u)*24);font-size:calc(var(--u)*3.2)}}
.${s}-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`}var Yo={ar:{go:["\u064A\u0627\u0644\u0627 \u0627\u0646\u0637\u0644\u0642!","\u0627\u0646\u0637\u0644\u0642 \u064A\u0627 \u0628\u0637\u0644!"],nitro:["\u0646\u064A\u062A\u0631\u0648\u0648\u0648! \u0637\u064A\u0631 \u064A\u0627 \u0648\u062D\u0634!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629!","\u0646\u064A\u062A\u0631\u0648! \u0627\u0645\u0633\u0643 \u0627\u0644\u0637\u0631\u064A\u0642!"],overtake:["\u0639\u062F\u0651\u064A\u062A\u0647! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643!","\u062A\u062C\u0627\u0648\u0632 \u0631\u0627\u0626\u0639 \u064A\u0627 \u0628\u0637\u0644!","\u0627\u064A\u0648\u0647 \u0643\u062F\u0647! \u0633\u0628\u0642\u062A\u0647!"],overtaken:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643\u060C \u0647\u062A\u0639\u062F\u064A\u0647!","\u062E\u0644\u064A\u0643 \u0648\u0631\u0627\u0647\u060C \u0641\u0631\u0635\u062A\u0643 \u062C\u0627\u064A\u0629!"],near:["\u064A\u0627\u0627\u0627\u0647! \u0643\u0627\u0646\u062A \u0642\u0631\u064A\u0628\u0629!","\u0639\u062F\u0651\u062A \u0639\u0644\u0649 \u062E\u064A\u0631! \u0642\u0644\u0628\u0643 \u062C\u0627\u0645\u062F!","\u0627\u0648\u0648\u0647! \u0642\u0631\u064A\u0628\u0629 \u0642\u0648\u064A!"],bump:["\u0627\u0648\u0628\u0633! \u062E\u0628\u0637\u0629 \u0635\u063A\u064A\u0631\u0629\u060C \u0643\u0645\u0651\u0644!","\u0648\u0644\u0627 \u064A\u0647\u0645\u0643 \u064A\u0627 \u0628\u0637\u0644\u060C \u0643\u0645\u0651\u0644!"],charge:["\u0646\u064A\u062A\u0631\u0648 \u062C\u062F\u064A\u062F \u062C\u0627\u0647\u0632!","\u0639\u0646\u062F\u0643 \u0646\u064A\u062A\u0631\u0648!"],pickup:["\u0623\u064A\u0648\u0647! \u0639\u0645\u0644\u0629!","\u062C\u0645\u0639\u062A \u0639\u0645\u0644\u0629! \u0628\u0631\u0627\u0641\u0648!"],trick:["\u062D\u0631\u0643\u0629 \u0628\u0647\u0644\u0648\u0627\u0646\u064A\u0629! \u0648\u0627\u0648!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0643\u0629!"],draft:["\u0631\u0627\u0643\u0628 \u0648\u0631\u0627\u0647! \u0627\u0644\u0647\u0648\u0627 \u0628\u064A\u0632\u0642\u0651\u0643!","\u0633\u0644\u064A\u0628 \u0633\u062A\u0631\u064A\u0645! \u0633\u0631\u0639\u0629 \u0632\u064A\u0627\u062F\u0629!"],lap:["\u0644\u0641\u0651\u0629 \u062C\u062F\u064A\u062F\u0629! \u0643\u0645\u0651\u0644 \u064A\u0627 \u0628\u0637\u0644!","\u0622\u062E\u0631 \u0644\u0641\u0651\u0629! \u0627\u062F\u064A\u0647\u0627 \u0643\u0644 \u0627\u0644\u0644\u064A \u0639\u0646\u062F\u0643!"],win:["\u0643\u0633\u0628\u062A \u064A\u0627 \u0628\u0637\u0644! \u0627\u0646\u062A \u0627\u0644\u0623\u0648\u0644!","\u0645\u0628\u0631\u0648\u0648\u0648\u0643! \u0628\u0637\u0644 \u0627\u0644\u0633\u0628\u0627\u0642!"],lose:["\u0644\u0639\u0628\u062A \u062D\u0644\u0648 \u0642\u0648\u064A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u0648\u0647\u062A\u0643\u0633\u0628!","\u0643\u0646\u062A \u0642\u0631\u064A\u0628! \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u0643!"],count:["\u0627\u0633\u062A\u0639\u062F!"]},en:{go:["Let's go!","Go, champion, go!"],nitro:["Nitrooo! Fly, superstar!","Wow, so fast!","Nitro boost! Hold on tight!"],overtake:["You passed him! Bravo!","Great overtake, champion!","Yes! You are ahead!"],overtaken:["Don't worry, you'll pass him!","Stay close, your chance is coming!"],near:["Whoa! That was close!","Phew! Great driving!","Ooh! So close!"],bump:["Oops! Small bump, keep going!","No worries, champion, keep going!"],charge:["New nitro ready!","You have a nitro!"],pickup:["Yes! A coin!","You got a coin! Bravo!"],trick:["Amazing trick! Wow!","What a move!"],draft:["Right behind him! The wind pushes you!","Slipstream! Extra speed!"],lap:["New lap! Keep going, champion!","Last lap! Give it everything!"],win:["You won, champion! First place!","Hooray! Racing star!"],lose:["Great racing! Try again and win!","So close! Next one is yours!"],count:["Get ready!"]}},om=[[/يا بطل/g,"\u064A\u0627 \u0628\u0637\u0644\u0629"]],Rr=class{constructor(t={}){var e,n;this.base=t.base||"./",this.lang=t.lang==="en"?"en":"ar",this.girl=!!t.girl,this.clips=t.clips||{},this.cooldown=(e=t.cooldown)!=null?e:3,this.gap=(n=t.gap)!=null?n:1.4,this.muted=!1,this.unlocked=!1,this.lastSay=-1/0,this.lastEvent={},this.pick={},this.audio=null,this.failed=new Set}setMuted(t){let e=!!t;e!==this.muted&&(this.muted=e,this.muted&&this._stop())}unlock(){this.unlocked=!0;try{let t=window.speechSynthesis;t&&t.getVoices().length===0&&t.getVoices()}catch{}}_stop(){if(this.audio){try{this.audio.pause()}catch{}this.audio=null}try{window.speechSynthesis&&window.speechSynthesis.cancel()}catch{}}_phrase(t){let e=Yo[this.lang]&&Yo[this.lang][t]||Yo.ar[t]||[];if(!e.length)return null;let n=((this.pick[t]=(this.pick[t]||0)+1)-1)%e.length,i=e[n];if(this.girl&&this.lang==="ar")for(let[r,a]of om)i=i.replace(r,a);return{text:i,n:n+1}}say(t,e=performance.now()/1e3){var a;if(this.muted||!this.unlocked||e-this.lastSay<this.gap||e-((a=this.lastEvent[t])!=null?a:-1/0)<this.cooldown)return!1;let n=this._phrase(t);if(!n)return!1;this.lastSay=e,this.lastEvent[t]=e;let i=this.clips[t]||0,r=`${t}_${n.n}`;if(i>=n.n&&!this.failed.has(r)){let o=new Audio(`${this.base}voice/${this.lang}/${r}.mp3`);o.volume=.95,o.onerror=()=>{this.failed.add(r),this._speak(n.text)};let c=o.play();return c&&c.catch&&c.catch(()=>{this.failed.add(r),this._speak(n.text)}),this.audio=o,!0}return this._speak(n.text)}_speak(t){try{let e=window.speechSynthesis;if(!e)return!1;let n=new SpeechSynthesisUtterance(t);n.lang=this.lang==="ar"?"ar-EG":"en-US",n.rate=1.05,n.pitch=1.15;let r=e.getVoices().find(a=>a.lang&&a.lang.toLowerCase().startsWith(this.lang));return r&&(n.voice=r),e.cancel(),e.speak(n),!0}catch{return!1}}dispose(){this._stop()}};var cm={trick:3,pickup:2,bump:3,lap:2,near:2,charge:2,win:2,lose:2,count:1},lm={title:["\u0641\u0631\u0642\u0629 \u0627\u0644\u062F\u0628\u0628\u0629 \u0627\u0644\u062C\u064A\u0644\u064A","GUMMY SQUAD"],play:["\u0627\u0644\u0639\u0628","PLAY"],stage:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Stage"],nextStage:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next stage"],upgrades:["\u0627\u0644\u062A\u0637\u0648\u064A\u0631\u0627\u062A","UPGRADES"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],on:["\u0634\u063A\u0651\u0627\u0644","On"],off:["\u0645\u0642\u0641\u0648\u0644","Off"],language:["\u0627\u0644\u0644\u063A\u0629","Language"],quit:["\u062E\u0631\u0648\u062C","Quit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],wave:["\u0627\u0644\u0645\u0648\u062C\u0629","WAVE"],boss:["\u0627\u0644\u0645\u0644\u0643 \u062F\u0648\u0646\u0627\u062A","KING DONUT"],bossIntro:["\u0627\u0644\u0645\u0644\u0643 \u062F\u0648\u0646\u0627\u062A \u0648\u0635\u0644!","King Donut is here!"],super:["\u0633\u0648\u0628\u0631","SUPER"],won:["\u0643\u0633\u0628\u062A\u0648\u0627! \u0627\u0644\u0645\u0644\u0643 \u0628\u0642\u0649 \u0641\u062A\u0627\u0641\u064A\u062A \u{1F369}","You win! King Donut is crumbs \u{1F369}"],lost:["\u0627\u0644\u062F\u0628\u0628\u0629 \u062F\u0627\u0628\u062A \u{1F4A7}","The bears melted \u{1F4A7}"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],earned:["\u062D\u0644\u0648\u064A\u0627\u062A \u062C\u0645\u0639\u062A\u0647\u0627","Candies collected"],bonus:["\u0645\u0643\u0627\u0641\u0623\u0629 \u0627\u0644\u0641\u0648\u0632","Win bonus"],total:["\u0645\u0639\u0627\u0643","You have"],dmg:["\u0642\u0648\u0629 \u0627\u0644\u0636\u0631\u0628","Sweet Power"],dmgD:["\u0627\u0644\u062F\u0628\u0628\u0629 \u0628\u062A\u0636\u0631\u0628 \u0623\u0642\u0648\u0649","Bears hit harder"],hp:["\u0635\u062D\u0629 \u0627\u0644\u062F\u0628\u0628\u0629","Bear Health"],hpD:["\u0627\u0644\u062F\u0628\u0628\u0629 \u062A\u062A\u062D\u0645\u0644 \u0623\u0643\u062A\u0631","Bears take more"],chg:["\u0634\u062D\u0646 \u0627\u0644\u0633\u0648\u0628\u0631","Super Charge"],chgD:["\u0627\u0644\u0633\u0648\u0628\u0631 \u064A\u062A\u0634\u062D\u0646 \u0623\u0633\u0631\u0639","Super charges faster"],buy:["\u0627\u0634\u062A\u0631\u064A","Buy"],max:["\u0623\u0642\u0635\u0649 \u0645\u0633\u062A\u0648\u0649","MAX"],how:["\u0627\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0644\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0641\u0631\u0642\u0629. \u0627\u0644\u062F\u0628\u0628\u0629 \u0628\u062A\u0636\u0631\u0628 \u0644\u0648\u062D\u062F\u0647\u0627!","Drag anywhere to move the squad. The bears fight by themselves!"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],mintHint:["\u062E\u062F \u0627\u0644\u0646\u0639\u0646\u0627\u0639 \u0644\u062A\u0635\u062D\u0651\u064A \u062F\u0628\u062F\u0648\u0628!","Grab the mint to wake a bear!"],dodge:["\u0627\u0647\u0631\u0628 \u0645\u0646 \u0627\u0644\u062F\u0648\u0627\u0626\u0631 \u0627\u0644\u062D\u0645\u0631\u0627!","Dodge the red circles!"],b0:["\u0641\u0631\u0627\u0648\u0644\u0629","Strawberry"],b1:["\u0644\u064A\u0645\u0648\u0646","Lime"],b2:["\u062A\u0648\u062A\u0629","Blueberry"],stars:["\u0646\u062C\u0648\u0645","stars"],best:["\u0623\u0641\u0636\u0644 \u0646\u062A\u064A\u062C\u0629","Best"]},mt=Ql(lm),hi=Math.PI*2,Hn=(s,t,e)=>s<t?t:s>e?e:s,hm=["#ff4a62","#7ae83a","#4a8aff"],um=$l("gs","#6a4ad0","#2a1a78","#ffd0f0")+`
.gs-root{background:#1d1645}
.gs-menu{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:calc(var(--u)*5) calc(var(--u)*4) calc(var(--u)*6);box-sizing:border-box;pointer-events:none}
.gs-menu>*{pointer-events:auto}
.gs-menu .gs-logo{font-size:calc(var(--u)*11);margin-top:calc(var(--u)*3);filter:drop-shadow(0 calc(var(--u)*.8) 0 rgba(60,10,90,.8))}
.gs-stagebar{white-space:nowrap;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*3);color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);text-shadow:0 2px 0 rgba(0,0,0,.35)}
.gs-btns{display:flex;flex-direction:column;gap:calc(var(--u)*2);width:min(calc(var(--u)*70),90%)}
@media (orientation:landscape){.gs-btns{flex-direction:row;width:min(calc(var(--u)*150),94%)}.gs-menu .gs-logo{font-size:calc(var(--u)*8);margin-top:0}}
.gs-btn{background:linear-gradient(180deg,#ff9ad8,#e8509a);box-shadow:0 calc(var(--u)*.9) 0 #902a62,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.4)}
.gs-btn.dark{background:linear-gradient(180deg,#8a7aff,#5a44d0);box-shadow:0 calc(var(--u)*.9) 0 #2a1a80}
.gs-btn.go{background:linear-gradient(180deg,#8aff9a,#2fc86a);box-shadow:0 calc(var(--u)*.9) 0 #1a7a3a}
.gs-btn[disabled]{opacity:.5;filter:grayscale(.6)}
.gs-hud{position:absolute;inset:0;pointer-events:none}
.gs-portraits{position:absolute;left:calc(var(--u)*2.5);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);direction:ltr}
.gs-por{width:calc(var(--u)*14);background:rgba(30,16,80,.72);border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.7)}
.gs-por.down{filter:grayscale(1);opacity:.6}
.gs-face{position:relative;width:calc(var(--u)*7.4);height:calc(var(--u)*7);border-radius:50%;border:calc(var(--u)*.3) solid rgba(255,255,255,.9)}
.gs-face i{position:absolute;top:calc(var(--u)*-1.1);width:calc(var(--u)*3);height:calc(var(--u)*3);border-radius:50%;background:inherit;border:calc(var(--u)*.3) solid rgba(255,255,255,.9)}
.gs-face i:first-child{left:calc(var(--u)*-.5)}.gs-face i:nth-child(2){right:calc(var(--u)*-.5)}
.gs-face b{position:absolute;top:calc(var(--u)*2.6);width:calc(var(--u)*.9);height:calc(var(--u)*1.2);border-radius:50%;background:#1c1430}
.gs-face b:nth-child(3){left:calc(var(--u)*2)}.gs-face b:nth-child(4){right:calc(var(--u)*2)}
.gs-face u{position:absolute;left:50%;top:calc(var(--u)*4);width:calc(var(--u)*2.4);height:calc(var(--u)*1.8);transform:translateX(-50%);border-radius:50%;background:rgba(255,255,255,.7)}
.gs-hp{width:100%;height:calc(var(--u)*1.7);border-radius:99px;background:rgba(0,0,0,.5);overflow:hidden}
.gs-hp b{display:block;height:100%;background:linear-gradient(180deg,#8aff9a,#2fc86a);transition:width .12s}
.gs-hp.low b{background:linear-gradient(180deg,#ff9a8a,#e83a3a)}
.gs-super{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:none;padding:0;font-family:inherit;font-weight:900;cursor:pointer;pointer-events:auto;color:#fff;font-size:calc(var(--u)*4);display:flex;align-items:center;justify-content:center;background:conic-gradient(#ffd23a var(--p,0%),rgba(30,16,80,.8) 0);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5)}
.gs-super span{width:84%;height:84%;border-radius:50%;background:linear-gradient(180deg,#6a4ad0,#3a2490);display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;gap:calc(var(--u)*.4);border:calc(var(--u)*.4) solid rgba(255,255,255,.8);box-sizing:border-box}
.gs-super span i{font-style:normal;font-size:calc(var(--u)*7)}
.gs-super.ready{animation:gspulse .7s infinite}.gs-super.ready span{background:linear-gradient(180deg,#ff9ad8,#e8309a)}
@keyframes gspulse{50%{transform:scale(1.1)}}
.gs-bossbar{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(var(--u)*3.5);width:min(calc(var(--u)*60),44%);display:none;flex-direction:column;align-items:center;gap:calc(var(--u)*.5);font-weight:900;font-size:calc(var(--u)*3.4);text-shadow:0 0 calc(var(--u)*1) #000}
.gs-bossbar .gs-hp{height:calc(var(--u)*2.8);border:calc(var(--u)*.4) solid #fff}.gs-bossbar .gs-hp b{background:linear-gradient(180deg,#ff9ad8,#e8309a)}
.gs-banner{position:absolute;left:0;right:0;top:34%;text-align:center;font-weight:900;font-size:calc(var(--u)*10);color:#ffe0f8;-webkit-text-stroke:calc(var(--u)*.7) rgba(60,10,90,.9);paint-order:stroke fill;opacity:0;transform:scale(.7);transition:opacity .3s,transform .3s;pointer-events:none}
.gs-banner.show{opacity:1;transform:scale(1)}
.gs-stick{position:absolute;width:calc(var(--u)*18);height:calc(var(--u)*18);margin:calc(var(--u)*-9) 0 0 calc(var(--u)*-9);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.55);background:rgba(255,255,255,.1);display:none;pointer-events:none}
.gs-stick i{position:absolute;left:50%;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;background:rgba(255,255,255,.55)}
.gs-up{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.gs-urow{display:flex;align-items:center;gap:calc(var(--u)*2);background:rgba(20,10,60,.55);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6)}
.gs-urow>div:nth-child(2){flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.6);font-weight:900;font-size:calc(var(--u)*3.6)}
.gs-urow small{font-size:calc(var(--u)*2.8);opacity:.85;font-weight:700}
.gs-uico{font-size:calc(var(--u)*8)}
.gs-pips{display:flex;gap:calc(var(--u)*.6)}.gs-pips i{width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);border-radius:50%;background:rgba(255,255,255,.25)}.gs-pips i.on{background:#ffd23a}
.gs-buy{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.8);border:none;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*3);min-width:calc(var(--u)*16);cursor:pointer;color:#fff;background:linear-gradient(180deg,#8aff9a,#2fc86a);box-shadow:0 calc(var(--u)*.6) 0 #1a7a3a}
.gs-buy[disabled]{background:#7a7a9a;box-shadow:none;opacity:.7;cursor:default}
.gs-row{display:flex;justify-content:space-between;align-items:center;width:100%;font-weight:900;font-size:calc(var(--u)*4)}
.gs-stars{font-size:calc(var(--u)*11);letter-spacing:calc(var(--u)*1)}.gs-stars .off{filter:grayscale(1);opacity:.3}
.gs-soundpill{background:#ffd166}
`,Zo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),this.save=ms(e.save),mt.setLang(this.save.lang||e.lang),this.age=Number(e.age)||5,this.base=e.base||"./",this.sound=new Hi,this.sound.muted=!!this.save.muted,this.voice=new Rr({base:this.base,lang:mt.getLang(),girl:e.gender==="girl",clips:cm}),this.voice.setMuted(this.sound.muted),this._voiceArm=()=>this.voice.unlock(),document.addEventListener("pointerdown",this._voiceArm,!0),document.getElementById("gs-style")||document.head.append(K("style",{id:"gs-style"},um)),this.root=K("div",{class:"gs-root"}),t.append(this.root),this.layer=K("div",{class:"gs-layer"}),this.mode="menu",this.clock=0,this.keys={},this.stick=null,this.paused=!1,this.run=null,this.shake=0,this.maps={enemies:new Map,hazards:new Map,projs:new Map,picks:new Map,jaws:new Map},this.decals=[],this.camPos=new P,this.camTarget=new P,this.camInit=!1,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}get dir(){return mt.getLang()==="en"?"ltr":"rtl"}_three(){let t=this.renderer=new lr({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.outputColorSpace=xe,t.toneMapping=Vo,t.toneMappingExposure=1.25,this.root.prepend(t.domElement);let e=this.scene=new ur,n=document.createElement("canvas");n.width=8,n.height=256;let i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#171040"),r.addColorStop(.6,"#3a2a80"),r.addColorStop(1,"#6a4aa8"),i.fillStyle=r,i.fillRect(0,0,8,256);let a=new kn(n);a.colorSpace=xe,e.background=a,e.fog=new hr(3811968,55,140),this.camera=new Ee(48,1,.5,300),e.add(new yr(12103935,5913208,1.5));let o=new hs(14214399,2.2);o.position.set(-10,24,12),e.add(o);let c=new hs(16751320,.8);c.position.set(12,10,-14),e.add(c),this.glow=new ls(16761072,55,22,1.6),this.glow.position.set(0,5,0),e.add(this.glow),this._buildWorld(),this.bearVis=gs.map(l=>{let h=Xl(l);return e.add(h),h}),this.bossVis=Zl(),this.bossVis.visible=!1,e.add(this.bossVis),this.bossBar=null,this._particles3d()}_buildWorld(){let t=this.scene,e=(()=>{let d=document.createElement("canvas");d.width=d.height=512;let _=d.getContext("2d"),M=8,v=512/M;for(let I=0;I<M;I++)for(let y=0;y<M;y++)_.fillStyle=(I+y)%2?"#7a62c8":"#6c54ba",_.fillRect(I*v,y*v,v,v);let V=3,S=()=>(V=V*16807%2147483647,V/2147483647),E=["#ff9ad0","#ffe08a","#8affd8","#9ad0ff","#ffffff"];for(let I=0;I<90;I++){_.strokeStyle=E[I%5],_.lineWidth=5,_.lineCap="round";let y=S()*512,T=S()*512,z=S()*hi;_.beginPath(),_.moveTo(y,T),_.lineTo(y+Math.cos(z)*12,T+Math.sin(z)*12),_.stroke()}let w=new kn(d);return w.colorSpace=xe,w.wrapS=w.wrapT=xn,w.repeat.set(2,2),w.anisotropy=4,w})(),n=ut(nt.box,new _n({map:e,roughness:.75,bumpMap:kt(0).bumpMap,bumpScale:.4,emissive:5913248,emissiveIntensity:.18}),0,-.4,0,It.hx*2+1,.8,It.hy*2+1);t.add(n);let i=ut(nt.box,new _n({color:3811968,roughness:.9,emissive:2759264,emissiveIntensity:.3}),0,-.9,0,220,.8,220);t.add(i);let r=[16743096,16769098,8060872,9091327,12618495],a=It.hx+.75,o=It.hy+.75,c=0;for(let d=-a;d<=a;d+=1.5)for(let[_,M]of[[d,-o],[d,o]])t.add(ut(nt.half,kt(r[c++%5],{em:.25}),_,0,M,.8,.75,.8));for(let d=-o+1.5;d<o;d+=1.5)for(let[_,M]of[[-a,d],[a,d]])t.add(ut(nt.half,kt(r[c++%5],{em:.25}),_,0,M,.8,.75,.8));let l=21,h=()=>(l=l*16807%2147483647,l/2147483647),f=[["#ff7ab8","#fff0a8"],["#7affc8","#ffffff"],["#8ab8ff","#ffd0f0"],["#ffd23a","#ff8ad0"]].map(([d,_])=>Tr(d,_));for(let d=0;d<34;d++){let _=d/34*hi+h()*.2,M=20+h()*26,v=Math.cos(_)*M*1.15,V=Math.sin(_)*M;if(Math.abs(v)<14.5&&Math.abs(V)<14.5)continue;let S=4+h()*5,E=new Wt;E.position.set(v,0,V),E.add(ut(nt.cyl,kt(16773368,{em:.35}),0,S/2,0,.18,S,.18));let w=ut(nt.cyl,kt(16777215,{em:.22,map:f[d%4],fresh:!0}),0,S+1.1,0,1.5+h(),.35,1.5+h());w.scale.z=w.scale.x,w.rotation.x=Math.PI/2-.35,w.rotation.y=h()*hi,E.add(w),t.add(E)}for(let d=0;d<22;d++){let _=h()*hi,M=18+h()*30,v=Math.cos(_)*M,V=Math.sin(_)*M;Math.abs(v)<14.5&&Math.abs(V)<14.5||t.add(ut(nt.half,kt(r[d%5],{em:.2}),v,-.2,V,2+h()*3,1.5+h()*2.5,2+h()*3))}for(let[d,_]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let M=new Wt;M.position.set(d*(It.hx+1.8),0,_*(It.hy+1.8));let v=kt(15213626,{em:.3}),V=kt(16777215,{em:.35});for(let E=0;E<8;E++)M.add(ut(nt.cyl,E%2?v:V,0,.4+E*.6,0,.22,.6,.22));M.add(ut(nt.sph,Ce(16773288),0,5.2,0,.42));let S=new ls(16769184,14,12,1.5);S.position.y=5.2,M.add(S),t.add(M)}let p=260,m=new Float32Array(p*3);for(let d=0;d<p;d++){let _=h()*hi,M=.15+h()*1.1,v=140;m[d*3]=Math.cos(_)*Math.cos(M)*v,m[d*3+1]=Math.sin(M)*v*.7+10,m[d*3+2]=Math.sin(_)*Math.cos(M)*v}let A=new Ie;A.setAttribute("position",new _e(m,3)),this.starPts=new rs(A,new Fi({color:16774352,size:2.2,map:Vr(),transparent:!0,depthWrite:!1,fog:!1,blending:Nn})),t.add(this.starPts);let g=new jt(nt.sph,new rn({color:16774872,fog:!1}));g.position.set(-60,55,-110),g.scale.setScalar(9),t.add(g)}_particles3d(){let t=this.scene;this.bitMax=320,this.bits=new fr(new mr(.13,0),kt(16777215,{em:.35,fresh:!0}),this.bitMax),this.bits.instanceMatrix.setUsage(Ml),this.bits.frustumCulled=!1,this.bits.setColorAt(0,new Rt(1,1,1)),t.add(this.bits),this.bitList=[],this._dummy=new ye;for(let n=0;n<this.bitMax;n++)this._dummy.scale.setScalar(0),this._dummy.updateMatrix(),this.bits.setMatrixAt(n,this._dummy.matrix);this.sparkMax=240,this.sparks=[];let e=new Ie;this.sparkPos=new Float32Array(this.sparkMax*3).fill(-999),this.sparkCol=new Float32Array(this.sparkMax*3),e.setAttribute("position",new _e(this.sparkPos,3)),e.setAttribute("color",new _e(this.sparkCol,3)),this.sparkPts=new rs(e,new Fi({size:.7,vertexColors:!0,map:Vr(),transparent:!0,depthWrite:!1,blending:Nn,fog:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.barGeo=new ri(1,1),this.dotTex=Vr()}addBits(t,e,n,i,r,a=4,o=4){let c=new Rt(i);for(let l=0;l<r;l++){this.bitList.length>=this.bitMax&&this.bitList.shift();let h=Math.random()*hi,u=a*(.4+Math.random()*.8),f=c.clone().offsetHSL((Math.random()-.5)*.08,0,(Math.random()-.5)*.15);this.bitList.push({x:t,y:e,z:n,vx:Math.cos(h)*u,vy:o*(.5+Math.random()),vz:Math.sin(h)*u,life:.9+Math.random()*.5,age:0,s:.6+Math.random()*.9,rx:Math.random()*6,rv:(Math.random()-.5)*12,c:f})}}addSparks(t,e,n,i,r,a=3){let o=new Rt(i);for(let c=0;c<r;c++){this.sparks.length>=this.sparkMax&&this.sparks.shift();let l=Math.random()*hi,h=a*Math.random();this.sparks.push({x:t,y:e,z:n,vx:Math.cos(l)*h,vy:1+Math.random()*a,vz:Math.sin(l)*h,life:.5+Math.random()*.5,age:0,c:o})}}_tickParticles(t){let e=this._dummy,n=0;this.bitList=this.bitList.filter(r=>(r.age+=t,r.age<r.life));for(let r of this.bitList)r.vy-=14*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.1&&(r.y=.1,r.vy*=-.3,r.vx*=.7,r.vz*=.7),r.rx+=r.rv*t,e.position.set(r.x,r.y,r.z),e.rotation.set(r.rx,r.rx*.7,0),e.scale.setScalar(r.s*Math.min(1,(r.life-r.age)*3)),e.updateMatrix(),this.bits.setMatrixAt(n,e.matrix),this.bits.setColorAt(n,r.c),n++;for(;n<this.bitMax;n++)e.scale.setScalar(0),e.updateMatrix(),this.bits.setMatrixAt(n,e.matrix);this.bits.instanceMatrix.needsUpdate=!0,this.bits.instanceColor&&(this.bits.instanceColor.needsUpdate=!0),this.sparks=this.sparks.filter(r=>(r.age+=t,r.age<r.life));let i=0;for(let r of this.sparks){r.vy-=4*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t;let a=1-r.age/r.life;this.sparkPos[i*3]=r.x,this.sparkPos[i*3+1]=r.y,this.sparkPos[i*3+2]=r.z,this.sparkCol[i*3]=r.c.r*a,this.sparkCol[i*3+1]=r.c.g*a,this.sparkCol[i*3+2]=r.c.b*a,i++}for(;i<this.sparkMax;i++)this.sparkPos[i*3+1]=-999;this.sparkPts.geometry.attributes.position.needsUpdate=!0,this.sparkPts.geometry.attributes.color.needsUpdate=!0}decal(t,e,n,i,r=1.2,a=.6,o=!1){let c=new jt(o?nt.ring:nt.disc,Ce(i,a,{side:Fe}));c.rotation.x=-Math.PI/2,c.position.set(t,.05,e),c.scale.setScalar(n),c.renderOrder=2,this.scene.add(c),this.decals.push({m:c,life:r,age:0,r:n,o:a,grow:o})}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.updateProjectionMatrix()}_camFit(){let t=this.camera.aspect,e=t<1,n=this.camera.fov*Math.PI/360,i=(e?66:58)*Math.PI/180,r=e?8.4:11.5*Math.min(t,1.9),a=e?14:11.5,o=r/(Math.tan(n)*t)+12*Math.cos(i)*.6,c=2*a*Math.sin(i)*1.08/(2*Math.tan(n));return{d:e?o:c,e:i,H:r,Vd:a,portrait:e}}_bind(){let t=this.root,e=()=>{this.sound.unlock()};t.addEventListener("pointerdown",i=>{if(i.target.closest("button")||this.mode!=="play"||this.paused)return;let r=t.getBoundingClientRect();this.stick={id:i.pointerId,ox:i.clientX-r.left,oy:i.clientY-r.top,x:0,y:0},this.stickEl.style.display="block",this.stickEl.style.left=`${this.stick.ox}px`,this.stickEl.style.top=`${this.stick.oy}px`;try{t.setPointerCapture(i.pointerId)}catch{}}),t.addEventListener("pointermove",i=>{let r=this.stick;if(!r||r.id!==i.pointerId)return;let a=t.getBoundingClientRect();r.x=i.clientX-a.left-r.ox,r.y=i.clientY-a.top-r.oy;let o=Math.hypot(r.x,r.y),c=this.u*9,l=o>c?c/o:1;this.knob.style.transform=`translate(${r.x*l}px,${r.y*l}px)`});let n=i=>{e(),this.stick&&this.stick.id===i.pointerId&&(this.stick=null,this.stickEl.style.display="none",this.knob.style.transform="")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("click",e),this._onKey=i=>{let r=i.key.toLowerCase(),a=i.type==="keydown";this.keys[r]=a,a&&(this.sound.unlock(),(r===" "||r==="enter")&&this.mode==="play"&&!this.paused&&(this.superQ=!0),(r==="escape"||r==="p")&&this.mode==="play"&&this.togglePause()),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&this.mode==="play"&&i.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){let t=0,e=0,n=this.stick;if(n){let c=Math.hypot(n.x,n.y),l=this.u*9;if(c>this.u*1.2){let h=Math.min(1,c/l)/c;t=n.x*h,e=n.y*h}}let i=this.keys,r=(i.arrowright||i.d?1:0)-(i.arrowleft||i.a?1:0),a=(i.arrowdown||i.s?1:0)-(i.arrowup||i.w?1:0);if(r||a){let c=Math.hypot(r,a);t=r/c,e=a/c}let o=this.superQ;return this.superQ=!1,{x:t,y:e,super:o}}_clear(){this.layer.replaceChildren(),this.hud=null}_persist(){this.post({type:"save",save:this.save})}_soundPill(){let t=K("button",{class:"gs-soundpill",onclick:()=>this.sound.unlock()},mt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}_tap(t){return()=>{this.sound.unlock(),this.sound.play("tap"),t()}}showMenu(){var e;this.selStage=Math.min((e=this.selStage)!=null?e:this.save.stage,this.save.stage),this.mode="menu",this._clear(),this._endRunVisuals(),this.root.setAttribute("dir",this.dir),this.sound.mode("calm");let t=this.save.bestStars;this.layer.append(K("div",{class:"gs-menu"},K("div",{style:"display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1)"},K("div",{class:"gs-logo"},mt.t("title")),K("div",{class:"gs-pill"},"\u{1F36C} ",mt.num(this.save.candies),t?` \xB7 ${"\u2B50".repeat(t)}`:"")),K("div",{class:"gs-btns"},K("div",{class:"gs-stagebar"},K("button",{class:"gs-round","aria-label":"-",onclick:this._tap(()=>{this.selStage=Math.max(0,this.selStage-1),this.showMenu()})},"\u25C0"),K("b",{},mt.t("stage")," ",mt.num(this.selStage+1)," / ",mt.num(Sr)),K("button",{class:"gs-round","aria-label":"+",onclick:this._tap(()=>{this.selStage=Math.min(this.save.stage,this.selStage+1),this.showMenu()})},"\u25B6")),K("button",{class:"gs-btn go",onclick:this._tap(()=>this.startRun())},"\u25B6 ",mt.t("play")),K("button",{class:"gs-btn",onclick:this._tap(()=>this.showUpgrades())},"\u{1F36D} ",mt.t("upgrades")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>this.showSettings())},"\u2699 ",mt.t("settings"))),K("button",{class:"gs-round",style:"position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);direction:ltr","aria-label":mt.t("quit"),onclick:this._tap(()=>this.post({type:"exit"}))},"\u2715"))),this._soundPill()}showUpgrades(){this.mode="menu",this._clear();let t=[["damage","\u2694\uFE0F","dmg","dmgD"],["health","\u{1F496}","hp","hpD"],["charge","\u26A1","chg","chgD"]].map(([e,n,i,r])=>{let a=this.save.upgrades[e],o=qo(this.save,e),c=o!==null&&this.save.candies>=o,l=K("div",{class:"gs-pips"},...Array.from({length:In[e].max},(h,u)=>K("i",{class:u<a?"on":""})));return K("div",{class:"gs-urow"},K("div",{class:"gs-uico"},n),K("div",{},K("div",{},mt.t(i)),K("small",{},mt.t(r)),l),K("button",{class:"gs-buy",disabled:!c,onclick:this._tap(()=>{let h=Bl(this.save,e);h&&(this.save=h,this._persist(),this.sound.play("mint"),this.showUpgrades())})},o===null?mt.t("max"):`\u{1F36C} ${mt.num(o)}`))});this.layer.append(K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title"},mt.t("upgrades")),K("div",{class:"gs-row"},K("span",{},mt.t("total")),K("span",{},"\u{1F36C} ",mt.num(this.save.candies))),K("div",{class:"gs-up"},...t),K("button",{class:"gs-btn dark",onclick:this._tap(()=>this.showMenu())},mt.t("back")))))}showSettings(){this.mode="menu",this._clear();let t=K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.voice.setMuted(this.save.muted),this._persist(),this.showSettings()})},`\u{1F50A} ${mt.t("sound")}: ${this.save.muted?mt.t("off"):mt.t("on")}`),e=K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.save.lang=mt.getLang()==="ar"?"en":"ar",mt.setLang(this.save.lang),this._persist(),this.root.setAttribute("dir",this.dir),this.showSettings()})},`\u{1F310} ${mt.t("language")}: ${mt.getLang()==="ar"?"\u0627\u0644\u0639\u0631\u0628\u064A\u0629":"English"}`);this.layer.append(K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title"},mt.t("settings")),t,e,K("div",{class:"gs-small"},mt.t("how")),K("button",{class:"gs-btn",onclick:this._tap(()=>this.showMenu())},mt.t("back")))))}startRun(){var t;this.voice.say("count"),this._endRunVisuals(),this.run=new br({seed:Date.now()&16777215|1,upgrades:this.save.upgrades,easy:this.age<=3,stage:(t=this.selStage)!=null?t:0}),this.mode="play",this.paused=!1,this.shake=0,this.endT=0,this.bossDeadAt=null,this.camInit=!1,this.hintShown=0,this.sound.mode("calm"),this._clear(),this._buildHud(),this.banner(`${mt.t("wave")} ${mt.num(1)}`),this.hint(mt.t("how"),4200)}_endRunVisuals(){for(let t of Object.values(this.maps)){for(let e of t.values())this.scene.remove(e.g||e);t.clear()}this.bossVis.visible=!1,this.run=null;for(let t of this.decals)this.scene.remove(t.m);this.decals=[],this.bitList=[],this.sparks=[],this.bearVis.forEach(t=>{t.userData.ring.visible=!1})}_buildHud(){let t=gs.map((n,i)=>{let r=K("b"),a=K("div",{class:"gs-hp"},r);return{el:K("div",{class:"gs-por"},K("div",{class:"gs-face",style:`background:${hm[i]}`},K("i"),K("i"),K("b"),K("b"),K("u")),a),hp:r,bar:a}});this.hud={por:t,last:[]},this.candyEl=K("span",{},"0"),this.waveEl=K("span",{});let e=K("button",{class:"gs-round","aria-label":mt.t("paused"),onclick:this._tap(()=>this.togglePause())},"\u23F8");this.superBtn=K("button",{class:"gs-super",onclick:n=>{n.stopPropagation(),this.superQ=!0}},K("span",{},K("i",{},"\u{1F36C}"),mt.t("super"))),this.bossHp=K("b"),this.bossBarEl=K("div",{class:"gs-bossbar"},K("div",{},"\u{1F369} ",mt.t("boss")),K("div",{class:"gs-hp",style:"width:100%"},this.bossHp)),this.bannerEl=K("div",{class:"gs-banner"}),this.hintEl=K("div",{class:"gs-hint",style:"top:calc(var(--u)*24)"}),this.knob=K("i"),this.stickEl=K("div",{class:"gs-stick"},this.knob),this.layer.append(this.stickEl,K("div",{class:"gs-hud"},K("div",{class:"gs-top"},e,K("div",{class:"gs-pill"},"\u{1F36C} ",this.candyEl),K("div",{class:"gs-pill"},this.waveEl)),this.bossBarEl,K("div",{class:"gs-portraits"},...t.map(n=>n.el)),this.superBtn,this.bannerEl,this.hintEl)),this._soundPill()}banner(t,e=1800){this.bannerEl&&(this.bannerEl.textContent=t,this.bannerEl.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.bannerEl&&this.bannerEl.classList.remove("show"),e))}hint(t,e=3e3){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}togglePause(){this.mode!=="play"||this.run&&this.run.over||(this.paused=!this.paused,this.paused?(this.stick=null,this.stickEl&&(this.stickEl.style.display="none"),this.pauseEl=K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title"},mt.t("paused")),K("button",{class:"gs-btn go",onclick:this._tap(()=>this.togglePause())},"\u25B6 ",mt.t("resume")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.paused=!1,this.startRun()})},"\u{1F504} ",mt.t("restart")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.paused=!1,this.showMenu()})},"\u{1F3E0} ",mt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_end(){let e=this.run.result;this.endShown=!0,this.save=Fl(this.save,e),this._persist(),this.sound.mode("calm"),this.sound.play(e.win?"win":"lose"),this.voice.say(e.win?"win":"lose");let n=K("div",{class:"gs-stars"},...[0,1,2].map(i=>K("span",{class:i<e.stars?"":"off"},"\u2B50")));this.layer.append(K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title",style:"font-size:calc(var(--u)*6.5)"},mt.t(e.win?"won":"lost")),e.win?n:null,K("div",{class:"gs-row"},K("span",{},mt.t("earned")),K("span",{},"\u{1F36C} ",mt.num(e.candies))),e.win?K("div",{class:"gs-row"},K("span",{},mt.t("bonus")),K("span",{},"\u{1F36C} ",mt.num(e.bonus))):null,K("div",{class:"gs-row"},K("span",{},mt.t("total")),K("span",{},"\u{1F36C} ",mt.num(this.save.candies))),e.win&&this.selStage<this.save.stage?K("button",{class:"gs-btn go",onclick:this._tap(()=>{this.endShown=!1,this.selStage+=1,this.startRun()})},"\u25B6 ",mt.t("nextStage")):null,K("button",{class:"gs-btn go",onclick:this._tap(()=>{this.endShown=!1,this.startRun()})},"\u25B6 ",mt.t("again")),K("button",{class:"gs-btn",onclick:this._tap(()=>{this.endShown=!1,this.showUpgrades()})},"\u{1F36D} ",mt.t("upgrades")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.endShown=!1,this.showMenu()})},"\u{1F3E0} ",mt.t("home"))))),this.mode="result"}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.run;n&&this.mode==="play"&&!this.paused&&(n.step(e,n.over?{}:this._input()),this._events(n.drain()),this._hudUpdate(),n.over&&!this.endShown&&(this.endT+=e,this.endT>(n.state==="won"?2.6:1.6)&&this._end())),this._sync(e),this._tickParticles(this.paused?0:e),this._camera(e),this.starPts.material.opacity=.75+Math.sin(this.clock*1.7)*.2,this.renderer.render(this.scene,this.camera)}_hudUpdate(){let t=this.run;if(!this.hud)return;this.candyEl.textContent=mt.num(t.candies),this.waveEl.textContent=t.bossFight||t.boss?mt.t("boss"):`${mt.t("wave")} ${mt.num(t.wave+1)}/${mt.num(2)}`,t.bears.forEach((n,i)=>{let r=this.hud.por[i],a=n.hp/n.maxHp,o=`${Math.round(a*100)}%`;this.hud.last[i]!==o&&(r.hp.style.width=o,this.hud.last[i]=o,r.bar.classList.toggle("low",a<.34)),r.el.classList.toggle("down",!n.alive)});let e=Math.round(t.charge);this._pct!==e&&(this._pct=e,this.superBtn.style.setProperty("--p",`${e}%`),this.superBtn.classList.toggle("ready",e>=100)),t.boss&&(this.bossBarEl.style.display="flex",this.bossHp.style.width=`${Math.max(0,t.boss.hp/t.boss.maxHp*100)}%`)}_throttle(t,e){let n=performance.now();return this._th=this._th||{},n-(this._th[t]||0)<e?!1:(this._th[t]=n,!0)}_events(t){let e=this.sound;for(let n of t)switch(n.type){case"swing":e.play("straw"),this.bearVis[0].userData.kick=1;{let i=n.a;this.addSparks(n.x+Math.cos(i)*2,1,n.y+Math.sin(i)*2,16751288,6,2)}break;case"shoot":e.play(n.idx===1?"lime":"blue"),this.bearVis[n.idx].userData.kick=1;break;case"hit":this._throttle("hit",70)&&e.play("hit"),this.addSparks(n.x,1.2,n.y,16777215,2,2);break;case"impact":n.kind==="magic"?(e.play("limeBoom"),this.addSparks(n.x,1,n.y,11599722,12,4),this.decal(n.x,n.y,1.7,11599722,.35,.4)):n.kind==="gum"?(this._throttle("imp",60)&&e.play("impact"),this.addSparks(n.x,1,n.y,9091327,3,2)):this.addSparks(n.x,1,n.y,12618495,5,2);break;case"crumble":{e.play("crumble"),this.voice.say("trick");let i=n.kind==="boss"?16739e3:Ke[n.kind].color;this.addBits(n.x,.8,n.y,i,n.kind==="tank"?22:12,5,5),this.addBits(n.x,.8,n.y,16777215,4,4,4),this.addSparks(n.x,1,n.y,i,14,4);break}case"candy":this._throttle("candy",50)&&(e.play("candy"),this.voice.say("pickup"));break;case"mintDrop":this.hint(mt.t("mintHint"),3500),e.play("warn");break;case"revive":e.play("revive"),this.addSparks(n.x,1,n.y,9109464,30,5),this.decal(n.x,n.y,2.4,9109464,.7,.6,!0);break;case"heal":e.play("mint"),this.addSparks(this.squad().x,1,this.squad().y,9109464,20,4);break;case"bearHit":e.play("bearHit"),this.voice.say("bump"),this.shake=Math.max(this.shake,.25),this.addSparks(n.x,1.2,n.y,16734826,6,3);break;case"bearDown":e.play("bearDown"),this.voice.say("bump"),this.addBits(n.x,.8,n.y,gs[n.idx].color,14,3,4),this.shake=.5;break;case"wave":n.n>1&&(this.banner(`${mt.t("wave")} ${mt.num(n.n)}`),e.play("wave"),this.voice.say("lap"));break;case"waveClear":e.play("wave");break;case"spit":e.play("spit");break;case"fuse":e.play("warn");break;case"rainWarn":case"chargeWarn":case"summonWarn":e.play("warn"),n.type==="chargeWarn"&&(e.play("roar"),this.hint(mt.t("dodge"),2200));break;case"rain":e.play("warn");break;case"chargeGo":e.play("charge");break;case"splat":e.play("splat"),this.addBits(n.x,.5,n.y,16739e3,14,4,4),this.decal(n.x,n.y,n.r,16739e3,5,.38),this.shake=Math.max(this.shake,.15);break;case"blast":e.play("blast"),this.addBits(n.x,.5,n.y,16753210,18,6,5),this.addSparks(n.x,1,n.y,16769098,24,6),this.decal(n.x,n.y,n.r,3811888,6,.35),this.shake=Math.max(this.shake,.4);break;case"bossSlam":e.play("slam"),this.shake=.9,this.addBits(n.x,.8,n.y,14195290,16,6,6);break;case"bossIntro":e.mode("battle"),e.play("roar"),this.voice.say("near"),this.banner(mt.t("bossIntro"),2400);break;case"bossLand":e.play("slam"),this.shake=1,this.addBits(n.x,.8,n.y,16739e3,24,7,6);break;case"phase":e.play("roar"),this.shake=.7;break;case"summon":e.play("roar"),this.addSparks(n.x,2,n.y,16739e3,24,5);break;case"super":e.play("super"),this.voice.say("charge"),this.banner(mt.t("super"),900);break;case"jawLand":e.play("superBoom"),this.shake=1.4,this.addBits(n.x,1,n.y,16747216,40,9,8),this.addBits(n.x,1,n.y,7006975,24,8,8),this.addSparks(n.x,1,n.y,16777215,40,9),this.decal(n.x,n.y,n.r,16777215,.6,.7,!0),this.decal(n.x,n.y,n.r*.9,16747216,6,.3);break;case"bossDown":this.bossDeadAt=this.clock,e.play("roar"),this.voice.say("win"),this.shake=1.2,this.addBits(n.x,1.5,n.y,16739e3,60,8,8),this.addBits(n.x,1.5,n.y,14195290,40,8,8),this.addSparks(n.x,2,n.y,16769098,60,8),this.bossBarEl.style.display="none";break;case"won":this.banner("\u{1F389}",2400);break;default:break}}squad(){return this.run?this.run.squad:{x:0,y:0}}_bar(t,e,n){let i=new Wt,r=ut(this.barGeo,Ce(1706560,.7),0,0,0,e,.18),a=ut(this.barGeo,Ce(16738954),0,0,.01,e,.18);return i.add(r,a),i.position.y=n,i.visible=!1,t.add(i),{g:i,fg:a,w:e}}_setBar(t,e){t.g.visible=e<.999&&e>0,t.fg.scale.x=Math.max(.001,e*t.w),t.fg.position.x=-(t.w-e*t.w)/2,t.g.quaternion.copy(this.camera.quaternion)}_sync(t){let e=this.run,n=this.clock;if(!e){this._showcase(n);return}let i=e.squad;e.bears.forEach((h,u)=>{let f=this.bearVis[u],p=f.userData;f.visible=!0,f.position.x=h.x,f.position.z=h.y,f.rotation.y=Math.PI/2-(h.hasTarget||!i.moving?h.aim:i.face);let m=i.moving&&h.alive,A=m?Math.abs(Math.sin(n*11+u))*.16:Math.sin(n*2.5+u)*.025;if(p.kick=Math.max(0,p.kick-t*5),h.alive){p.body.scale.set(1,1,1),p.body.position.y=A,p.body.rotation.z=m?Math.sin(n*11+u)*.08:0,p.legs[0].rotation.x=m?Math.sin(n*11+u)*.7:0,p.legs[1].rotation.x=m?-Math.sin(n*11+u)*.7:0,p.arms[0].rotation.x=m?-Math.sin(n*11+u)*.5:0;let g=h.def.role;g==="melee"?p.arms[1].rotation.x=-1.2+(h.swing>0?(1-h.swing/.28)*2.3:0):p.arms[1].rotation.x=-1.35+p.kick*.3,p.weapon.position.z=(g==="melee"?.05:.1)-p.kick*.15,p.weapon.userData.orb&&p.weapon.userData.orb.scale.setScalar(.2+Math.sin(n*6)*.03+p.kick*.1),p.mat.emissiveIntensity=.2+(h.flash>0?.9:0)+(h.inv>0&&h.inv<1.4&&Math.floor(n*14)%2?.4:0),p.pale.emissiveIntensity=p.mat.emissiveIntensity,p.ring.visible=!1,p.weapon.visible=!0,f.scale.setScalar(1.15)}else p.body.scale.set(1.25,.22,1.25),p.body.position.y=0,p.body.rotation.z=0,p.weapon.visible=!1,p.arms.forEach(g=>g.rotation.x=0),p.mat.emissiveIntensity=.05,p.ring.visible=!0,p.ring.scale.setScalar(1.1+Math.sin(n*4)*.25),f.scale.setScalar(1.15)}),this.glow.position.set(i.x,5,i.y);let r=new Set;for(let h of e.enemies){if(h.hp<=0)continue;r.add(h.id);let u=this.maps.enemies.get(h.id);if(!u){let _=Yl(h.kind);_.userData.bar=this._bar(_,Ke[h.kind].r*1.8,Ke[h.kind].r*2.1+.4),this.scene.add(_),u={g:_},this.maps.enemies.set(h.id,u),this.addSparks(h.x,.6,h.y,Ke[h.kind].color,8,2)}let f=u.g,p=f.userData,m=Math.min(1,h.age/.4),A=m<1?1-Math.pow(1-m,3)*Math.cos(m*9)*.35-(1-m)*.65:1;f.position.set(h.x,0,h.y),f.rotation.y=Math.PI/2-h.aim;let g=Math.abs(Math.sin(h.age*(h.kind==="sour"?14:8)))*.18;p.body.position.y=g,p.body.rotation.z=Math.sin(h.age*8)*.1;let d=Math.max(.05,A)*(h.flash>0?1.12:1);h.fuse>0&&(d*=1+Math.sin(h.age*40)*.08),h.wind>0&&(d*=1+(.55-h.wind)*.3),f.scale.setScalar(d),p.mat.emissiveIntensity=h.flash>0?1:h.fuse>0?.4+Math.sin(h.age*40)*.4:h.wind>0?.6:.14,this._setBar(p.bar,h.hp/h.maxHp)}for(let[h,u]of this.maps.enemies)r.has(h)||(this.scene.remove(u.g),this.maps.enemies.delete(h));this._syncBoss(e,t);let a=new Set;for(let h of e.projectiles){a.add(h);let u=this.maps.projs.get(h);if(!u){let f=h.kind==="gum"?9091327:h.kind==="magic"?11599722:12611839,p=new Wt;p.add(ut(nt.sph,Ce(f),0,0,0,h.kind==="magic"?.34:.24)),p.add(ut(nt.sph,Ce(f,.3,{blending:Nn}),0,0,0,h.kind==="magic"?.7:.45)),this.scene.add(p),u={g:p},this.maps.projs.set(h,u)}u.g.position.set(h.x,1,h.y),h.kind==="magic"&&Math.random()<.5&&this.addSparks(h.x,1,h.y,13696906,1,.5)}for(let[h,u]of this.maps.projs)a.has(h)||(this.scene.remove(u.g),this.maps.projs.delete(h));let o=new Set;for(let h of e.hazards){if(h.done)continue;o.add(h);let u=this.maps.hazards.get(h);u||(u=this._makeHazard(h),this.maps.hazards.set(h,u)),this._updHazard(h,u,n)}for(let[h,u]of this.maps.hazards)o.has(h)||(this.scene.remove(u.g),this.maps.hazards.delete(h));let c=new Set;for(let h of e.jaws){c.add(h);let u=this.maps.jaws.get(h);if(!u){let p=new Wt,m=Kl();p.add(m);let A=new jt(nt.ring,Ce(16777215,.7,{side:Fe}));A.rotation.x=-Math.PI/2,A.position.y=.07,A.scale.setScalar(h.r),p.add(A);let g=new jt(nt.disc,Ce(16747216,.3));g.rotation.x=-Math.PI/2,g.position.y=.06,p.add(g),p.userData={ball:m,fill:g},this.scene.add(p),u={g:p},this.maps.jaws.set(h,u)}let f=Hn(h.t/h.delay,0,1);u.g.position.set(h.x,0,h.y),u.g.userData.ball.position.y=2.2+(1-f*f)*24,u.g.userData.ball.rotation.x=n*3,u.g.userData.fill.scale.setScalar(h.r*f)}for(let[h,u]of this.maps.jaws)c.has(h)||(this.scene.remove(u.g),this.maps.jaws.delete(h));let l=new Set;for(let h of e.pickups){l.add(h);let u=this.maps.picks.get(h);if(!u){let p=h.type==="mint"?jl():Jl(h.hue);this.scene.add(p),u={g:p},this.maps.picks.set(h,u)}let f=Math.sin(n*5+h.x)*.12;u.g.position.set(h.x,(h.type==="mint"?.9:.4)+f+Math.max(0,.6-h.t*2)*1.2,h.y),h.type==="mint"?(u.g.userData.disc.rotation.z=n*2,u.g.userData.ground.scale.setScalar(.9+Math.sin(n*5)*.15),u.g.userData.ground.position.y=-.8-f,u.g.scale.setScalar(h.life<5&&Math.floor(n*8)%2?.5:1)):u.g.rotation.y=n*4+h.x}for(let[h,u]of this.maps.picks)l.has(h)||(this.scene.remove(u.g),this.maps.picks.delete(h));this.decals=this.decals.filter(h=>{h.age+=t;let u=h.age/h.life;return u>=1?(this.scene.remove(h.m),!1):(h.m.material.opacity=h.o*(1-u*u),h.grow&&h.m.scale.setScalar(h.r*(.6+u*.6)),!0)})}_makeHazard(t){let e=new Wt;if(t.kind==="path"){let n=Wl("#ff2a5a","#ffd0d8",8);n.repeat.set(1,Math.max(2,Math.round(t.len/3))),n.wrapS=n.wrapT=xn;let i=new jt(new ri(t.width,t.len),new rn({map:n,transparent:!0,opacity:.45,depthWrite:!1}));i.rotation.x=-Math.PI/2;let r=new Wt;r.position.set(t.x+t.dx*t.len/2,.07,t.y+t.dy*t.len/2),r.rotation.y=Math.atan2(-t.dx,-t.dy),r.add(i),e.add(r),e.userData={path:i,tex:n}}else{let n=t.kind==="blast"?16747050:16726650,i=new jt(nt.disc,Ce(n,.28));i.rotation.x=-Math.PI/2,i.position.y=.06,i.scale.setScalar(t.r);let r=new jt(nt.disc,Ce(n,.5));r.rotation.x=-Math.PI/2,r.position.y=.07,r.scale.setScalar(.01);let a=new jt(nt.ring,Ce(16777215,.9,{side:Fe}));a.rotation.x=-Math.PI/2,a.position.y=.08,a.scale.setScalar(t.r),e.add(i,r,a);let o=null;t.kind==="circle"&&(o=ut(nt.sph,kt(16739e3,{rough:.3,em:.5}),0,20,0,.7,.95,.7),e.add(o)),e.userData={fill:r,edge:a,drop:o}}return e.position.set(t.kind==="path"?0:t.x,0,t.kind==="path"?0:t.y),this.scene.add(e),{g:e}}_updHazard(t,e,n){let i=Hn(t.t/t.warn,0,1),r=e.g.userData;if(t.kind==="path"){r.path.material.opacity=.3+i*.35+(Math.sin(n*18)>0?.08:0),r.tex.offset.y=-n*1.5;return}r.fill.scale.setScalar(Math.max(.01,t.r*i)),r.edge.material.opacity=.5+(Math.sin(n*(10+i*14))>0?.4:0),r.drop&&(r.drop.position.y=.6+(1-i*i*i)*20,r.drop.scale.set(.7,.95+(1-i)*.3,.7))}_syncBoss(t,e){var p;let n=t.boss,i=this.bossVis,r=this.clock;if(!n){i.visible=!1;return}let a=i.userData;if(n.state==="dead"){let m=Hn((r-((p=this.bossDeadAt)!=null?p:r))/.9,0,1);i.visible=m<1,i.scale.setScalar(Math.max(.01,1-m)),i.rotation.y+=e*10,i.position.y=0;return}i.visible=!0,i.scale.setScalar(1),this.bossBar||(this.bossBar=this._bar(i,4,4.4));let o=0,c=-1,l=0,h=0,u=n.phase;if(n.state==="intro"){let m=Hn(n.t/2.6,0,1);o=(1-m*m)*26,a.shadow.scale.setScalar(.4+m*2.2)}else a.shadow.scale.setScalar(2.4);n.state==="windCharge"&&(c=-1*(1-Hn(n.t/.5,0,1)),l=Math.PI/2-n.dir+Math.PI/2,i.position.x=n.x+Math.sin(r*60)*.08),n.state==="charge"&&(c=0,l=Math.PI/2-n.dir+Math.PI/2,h=1,Math.random()<.6&&this.addBits(n.x,.2,n.y,14195290,1,2,1.5)),n.state==="rain"&&(o=Math.abs(Math.sin(Hn(n.t/.55,0,1)*Math.PI))*1.8),n.state==="summon"&&(c=-1+Math.sin(n.t*20)*.1),n.state==="idle"&&(o=Math.abs(Math.sin(r*5))*.35,l=Math.sin(r*2)*.25),a.lean.rotation.x+=(c-a.lean.rotation.x)*Math.min(1,e*8),i.rotation.y=l,h?a.ring.rotation.z-=e*14:a.ring.rotation.z*=.85,i.position.set(n.state==="windCharge"?n.x+Math.sin(r*60)*.08:n.x,o+(a.lean.rotation.x>-.5,0),n.y),a.lean.position.y=1+(1-Math.abs(a.lean.rotation.x))*.9;let f=n.flash>0?.9:u===3?.28+Math.sin(r*12)*.12:.1;a.dough.emissiveIntensity=f,a.glaze.emissiveIntensity=f+.12,a.stars.visible=n.state==="stun",a.stars.visible&&(a.stars.rotation.y=r*4),this._setBar(this.bossBar,n.hp/n.maxHp),this.bossBar.g.visible=!1}_showcase(t){this.bossVis.visible=!1;let e=[-2.9,0,2.9],n=[.6,-.4,.6];this.bearVis.forEach((i,r)=>{i.visible=!0,i.position.set(e[r],0,n[r]),i.scale.setScalar(1.55),i.rotation.y=Math.sin(t*.8+r)*.25;let a=i.userData;a.body.scale.set(1,1,1),a.weapon.visible=!0,a.ring.visible=!1,a.body.position.y=Math.abs(Math.sin(t*2.4+r*1.3))*.18,a.arms[1].rotation.x=-1.2+Math.sin(t*3+r)*.35,a.arms[0].rotation.x=Math.sin(t*3+r+1)*.3,a.mat.emissiveIntensity=.2,a.pale.emissiveIntensity=.2}),this.glow.position.set(0,5,3)}_camera(t){let e=this.camera,n=this.run;if(!n){let m=Math.sin(this.clock*.25)*.35,A=e.aspect<1,g=A?18:11.5;e.position.set(Math.sin(m)*g,A?7.5:4.2,Math.cos(m)*g+1),e.lookAt(0,A?.2:1.1,.4),e.fov=50,e.updateProjectionMatrix();return}let i=this._camFit(),r=n.squad;e.fov!==48&&(e.fov=48,e.updateProjectionMatrix());let a=(m,A)=>Hn(m,-Math.max(0,It.hx+1.4-A),Math.max(0,It.hx+1.4-A)),o=n.boss&&n.boss.state!=="dead"?n.boss:null,c=o?r.x+(o.x-r.x)*.4:r.x,l=o?r.y+(o.y-r.y)*.4:r.y,h=a(c,i.H),u=i.portrait?Hn(l*.5,-5,5):a(l,i.Vd);this.camInit||(this.camTarget.set(h,0,u),this.camInit=!0),this.camTarget.x+=(h-this.camTarget.x)*Math.min(1,t*5),this.camTarget.z+=(u-this.camTarget.z)*Math.min(1,t*5),this.shake=Math.max(0,this.shake-t*2.2);let f=this.shake*.45,p=i.d;e.position.set(this.camTarget.x+(Math.random()-.5)*f,Math.sin(i.e)*p,this.camTarget.z+Math.cos(i.e)*p+(Math.random()-.5)*f),e.lookAt(this.camTarget.x,0,this.camTarget.z)}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.voice.dispose(),document.removeEventListener("pointerdown",this._voiceArm,!0),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},Jo={start(s,t,e){let n=new Zo(s,t||{},e);return Jo.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.GummySquad=Jo;var Lm=Jo;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
