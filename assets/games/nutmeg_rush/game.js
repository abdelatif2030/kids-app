(()=>{var Xo="170";var Eh=0,wl=1,wh=2;var Nc=1,Th=2,Mn=3,Wn=0,Be=1,Qe=2,fn=0,kn=1,sn=2,Tl=3,Vl=4,Vh=5,oi=100,Rh=101,Ph=102,Lh=103,Uh=104,Dh=200,Nh=201,Fh=202,Bh=203,Sa=204,Ea=205,zh=206,Oh=207,qh=208,kh=209,Hh=210,Gh=211,Wh=212,Xh=213,Yh=214,wa=0,Ta=1,Va=2,Oi=3,Ra=4,Pa=5,La=6,Ua=7,Yo=0,Zh=1,Qh=2,Hn=0,Zo=1,Qo=2,jo=3,Jo=4,jh=5,Ko=6,$o=7;var Fc=300,qi=301,ki=302,Da=303,Na=304,Nr=306,Fa=1e3,ci=1001,Ba=1002,Ge=1003,Jh=1004;var Ss=1005;var un=1006,Yr=1007;var hi=1008;var wn=1009,Bc=1010,zc=1011,ms=1012,tl=1013,ui=1014,dn=1015,an=1016,el=1017,nl=1018,Hi=1020,Oc=35902,qc=1021,kc=1022,nn=1023,Hc=1024,Gc=1025,Fi=1026,Gi=1027,il=1028,sl=1029,Wc=1030,rl=1031;var al=1033,tr=33776,er=33777,nr=33778,ir=33779,za=35840,Oa=35841,qa=35842,ka=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37808,Ya=37809,Za=37810,Qa=37811,ja=37812,Ja=37813,Ka=37814,$a=37815,to=37816,eo=37817,no=37818,io=37819,so=37820,ro=37821,sr=36492,ao=36494,oo=36495,Xc=36283,lo=36284,co=36285,ho=36286;var rr=2300,uo=2301,Zr=2302,Rl=2400,Pl=2401,Ll=2402;var Kh=3200,$h=3201;var Yc=0,tu=1,On="",Ve="srgb",Zi="srgb-linear",Fr="linear",Jt="srgb";var Ai=7680;var Ul=519,eu=512,nu=513,iu=514,Zc=515,su=516,ru=517,au=518,ou=519,fo=35044;var Dl="300 es",Sn=2e3,ar=2001,Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qr=Math.PI/180,po=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],A=s[0],g=s[3],f=s[6],M=s[1],_=s[4],y=s[7],P=s[2],S=s[5],E=s[8];return r[0]=a*A+o*M+l*P,r[3]=a*g+o*_+l*S,r[6]=a*f+o*y+l*E,r[1]=c*A+h*M+u*P,r[4]=c*g+h*_+u*S,r[7]=c*f+h*y+u*E,r[2]=d*A+p*M+m*P,r[5]=d*g+p*_+m*S,r[8]=d*f+p*y+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=p*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jr=new Ft;function Qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){let i=or("canvas");return i.style.display="block",i}var Nl={};function fs(i){i in Nl||(Nl[i]=!0,console.warn(i))}function hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function uu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function du(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var kt={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?Fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],zl=[.3127,.329],Ol=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[Zi]:{primaries:Fl,whitePoint:zl,transfer:Fr,toXYZ:Ol,fromXYZ:ql,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Fl,whitePoint:zl,transfer:Jt,toXYZ:Ol,fromXYZ:ql,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var xi,go=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=or("canvas")),xi.width=t.width,xi.height=t.height;let n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fu=0,lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kr(s[a].image)):r.push(Kr(s[a]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pu=0,ze=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ci,s=ci,r=un,a=hi,o=nn,l=wn,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Gn(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Fc;ze.DEFAULT_ANISOTROPY=1;var te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],A=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(p+1)/2,P=(f+1)/2,S=(h+d)/4,E=(u+A)/4,D=(m+g)/4;return _>y&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=E/n):y>P?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=E/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-A)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends Xn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},De=class extends mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*A,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let P=Math.sqrt(_),S=Math.atan2(P,f*M);g=Math.sin(g*S)/P,o=Math.sin(o*S)/P}let y=o*M;if(l=l*g+d*y,c=c*g+p*y,h=h*g+m*y,u=u*g+A*y,g===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-o*p,t[e+2]=c*m+h*p+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$r=new T,kl=new Yn,Tn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),ws.subVectors(this.max,is),Ci.subVectors(t.a,is),vi.subVectors(t.b,is),yi.subVectors(t.c,is),Un.subVectors(vi,Ci),Dn.subVectors(yi,vi),ti.subVectors(Ci,yi);let e=[0,-Un.z,Un.y,0,-Dn.z,Dn.y,0,-ti.z,ti.y,Un.z,0,-Un.x,Dn.z,0,-Dn.x,ti.z,0,-ti.x,-Un.y,Un.x,0,-Dn.y,Dn.x,0,-ti.y,ti.x,0];return!ta(e,Ci,vi,yi,ws)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Ci,vi,yi,ws))?!1:(Ts.crossVectors(Un,Dn),e=[Ts.x,Ts.y,Ts.z],ta(e,Ci,vi,yi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new T,new T,new T,new T,new T,new T,new T,new T],$e=new T,Es=new Tn,Ci=new T,vi=new T,yi=new T,Un=new T,Dn=new T,ti=new T,is=new T,ws=new T,Ts=new T,ei=new T;function ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);let o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gu=new Tn,ss=new T,ea=new T,Zn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);let e=ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(ea)),this.expandByPoint(ss.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new T,na=new T,Vs=new T,Nn=new T,ia=new T,Rs=new T,sa=new T,hr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){na.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(na);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vs),o=Nn.dot(this.direction),l=-Nn.dot(Vs),c=Nn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(Vs,d),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){ia.subVectors(e,t),Rs.subVectors(n,t),sa.crossVectors(ia,Rs);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);let l=o*this.direction.dot(Rs.crossVectors(Nn,Rs));if(l<0)return null;let c=o*this.direction.dot(ia.cross(Nn));if(c<0||l+c>a)return null;let h=-o*Nn.dot(sa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,A,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,A,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=A,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,Au)}lookAt(t,e,n){let s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Fn.crossVectors(n,ke),Fn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Fn.crossVectors(n,ke)),Fn.normalize(),Ps.crossVectors(ke,Fn),s[0]=Fn.x,s[4]=Ps.x,s[8]=ke.x,s[1]=Fn.y,s[5]=Ps.y,s[9]=ke.y,s[2]=Fn.z,s[6]=Ps.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],A=n[6],g=n[10],f=n[14],M=n[3],_=n[7],y=n[11],P=n[15],S=s[0],E=s[4],D=s[8],I=s[12],v=s[1],w=s[5],q=s[9],z=s[13],G=s[2],j=s[6],W=s[10],et=s[14],H=s[3],rt=s[7],ut=s[11],_t=s[15];return r[0]=a*S+o*v+l*G+c*H,r[4]=a*E+o*w+l*j+c*rt,r[8]=a*D+o*q+l*W+c*ut,r[12]=a*I+o*z+l*et+c*_t,r[1]=h*S+u*v+d*G+p*H,r[5]=h*E+u*w+d*j+p*rt,r[9]=h*D+u*q+d*W+p*ut,r[13]=h*I+u*z+d*et+p*_t,r[2]=m*S+A*v+g*G+f*H,r[6]=m*E+A*w+g*j+f*rt,r[10]=m*D+A*q+g*W+f*ut,r[14]=m*I+A*z+g*et+f*_t,r[3]=M*S+_*v+y*G+P*H,r[7]=M*E+_*w+y*j+P*rt,r[11]=M*D+_*q+y*W+P*ut,r[15]=M*I+_*z+y*et+P*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],A=t[7],g=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+A*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],A=t[13],g=t[14],f=t[15],M=u*g*c-A*d*c+A*l*p-o*g*p-u*l*f+o*d*f,_=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,y=h*A*c-m*u*c+m*o*p-a*A*p-h*o*f+a*u*f,P=m*u*l-h*A*l-m*o*d+a*A*d+h*o*g-a*u*g,S=e*M+n*_+s*y+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=M*E,t[1]=(A*d*r-u*g*r-A*s*p+n*g*p+u*s*f-n*d*f)*E,t[2]=(o*g*r-A*l*r+A*s*c-n*g*c-o*s*f+n*l*f)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*E,t[4]=_*E,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*E,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*f-e*l*f)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*E,t[8]=y*E,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*f-e*u*f)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=P*E,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,A=a*h,g=a*u,f=o*u,M=l*c,_=l*h,y=l*u,P=n.x,S=n.y,E=n.z;return s[0]=(1-(A+f))*P,s[1]=(p+y)*P,s[2]=(m-_)*P,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(d+f))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+_)*E,s[9]=(g-M)*E,s[10]=(1-(d+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_i.set(s[0],s[1],s[2]).length(),a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Sn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===Sn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ar)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,m,A;if(o===Sn)m=(a+r)*u,A=-2*u;else if(o===ar)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_i=new T,tn=new ne,mu=new T(0,0,0),Au=new T(1,1,1),Fn=new T,Ps=new T,ke=new T,Hl=new ne,Gl=new Yn,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xu=0,Wl=new T,Ii=new Yn,yn=new ne,Ls=new T,rs=new T,Cu=new T,vu=new Yn,Xl=new T(1,0,0),Yl=new T(0,1,0),Zl=new T(0,0,1),Ql={type:"added"},yu={type:"removed"},Mi={type:"childadded",child:null},ra={type:"childremoved",child:null},xe=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new pn,n=new Yn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ft}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(rs,Ls,this.up):yn.lookAt(Ls,rs,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(yn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DEFAULT_UP=new T(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new T,_n=new T,aa=new T,In=new T,bi=new T,Si=new T,jl=new T,oa=new T,la=new T,ca=new T,ha=new te,ua=new te,da=new te,qn=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),_n.subVectors(n,e),aa.subVectors(t,e);let a=en.dot(en),o=en.dot(_n),l=en.dot(aa),c=_n.dot(_n),h=_n.dot(aa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),da.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ha,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),_n.subVectors(t,e),en.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bi.subVectors(s,n),Si.subVectors(r,n),oa.subVectors(t,n);let l=bi.dot(oa),c=Si.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,s);let h=bi.dot(la),u=Si.dot(la);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);ca.subVectors(t,r);let p=bi.dot(ca),m=Si.dot(ca);if(m>=0&&p<=m)return e.copy(r);let A=p*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Si,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return jl.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(jl,o);let f=1/(g+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(bi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=lu(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fa(a,r,t+1/3),this.g=fa(a,r,t),this.b=fa(a,r,t-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return kt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Fe(Te.r*255,0,255))*65536+Math.round(Fe(Te.g*255,0,255))*256+Math.round(Fe(Te.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ve){kt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Us);let n=jr(Bn.h,Us.h,e),s=jr(Bn.s,Us.s,e),r=jr(Bn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Tt;Tt.NAMES=jc;var _u=0,Vn=class extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Gn(),this.name="",this.blending=kn,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ea,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Me=class extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new T,Ds=new Ct,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fo&&(t.usage=this.usage),t}};var dr=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Iu=0,Ze=new ne,pa=new xe,Ei=new T,He=new Tn,as=new Tn,Ie=new T,be=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(He.min,as.min),He.expandByPoint(Ie),Ie.addVectors(He.max,as.max),He.expandByPoint(Ie)):(He.expandByPoint(as.min),He.expandByPoint(as.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Ie.add(Ei)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new T,l[D]=new T;let c=new T,h=new T,u=new T,d=new Ct,p=new Ct,m=new Ct,A=new T,g=new T;function f(D,I,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(w),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(w),o[D].add(A),o[I].add(A),o[v].add(A),l[D].add(g),l[I].add(g),l[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,I=M.length;D<I;++D){let v=M[D],w=v.start,q=v.count;for(let z=w,G=w+q;z<G;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let _=new T,y=new T,P=new T,S=new T;function E(D){P.fromBufferAttribute(s,D),S.copy(P);let I=o[D];_.copy(I),_.sub(P.multiplyScalar(P.dot(I))).normalize(),y.crossVectors(S,I);let w=y.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,w)}for(let D=0,I=M.length;D<I;++D){let v=M[D],w=v.start,q=v.count;for(let z=w,G=w+q;z<G;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?p=l[A]*o.data.stride+o.offset:p=l[A]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jl=new ne,ni=new hr,Ns=new Zn,Kl=new T,Fs=new T,Bs=new T,zs=new T,ga=new T,Os=new T,$l=new T,qs=new T,ge=class extends xe{constructor(t=new be,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,t),a?Os.addScaledVector(ga,h):Os.addScaledVector(ga.sub(e),h))}e.add(Os)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Ns.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ns,Kl)===null||ni.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,P=_;y<P;y+=3){let S=o.getX(y),E=o.getX(y+1),D=o.getX(y+2);s=ks(this,f,t,n,c,h,u,S,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,f=A;g<f;g+=3){let M=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);s=ks(this,a,t,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,P=_;y<P;y+=3){let S=y,E=y+1,D=y+2;s=ks(this,f,t,n,c,h,u,S,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=m,f=A;g<f;g+=3){let M=g,_=g+1,y=g+2;s=ks(this,a,t,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Mu(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Wn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Bs),i.getVertexPosition(c,zs);let h=Mu(i,t,e,n,Fs,Bs,zs,$l);if(h){let u=new T;qn.getBarycoord($l,Fs,Bs,zs,u),s&&(h.uv=qn.getInterpolatedAttribute(s,o,l,c,u,new Ct)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};qn.getNormal(Fs,Bs,zs,d.normal),h.face=d,h.barycoord=u}return h}var di=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function m(A,g,f,M,_,y,P,S,E,D,I){let v=y/E,w=P/D,q=y/2,z=P/2,G=S/2,j=E+1,W=D+1,et=0,H=0,rt=new T;for(let ut=0;ut<W;ut++){let _t=ut*w-z;for(let Ot=0;Ot<j;Ot++){let ee=Ot*v-q;rt[A]=ee*M,rt[g]=_t*_,rt[f]=G,c.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[f]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ot/E),u.push(1-ut/D),et+=1}}for(let ut=0;ut<D;ut++)for(let _t=0;_t<E;_t++){let Ot=d+_t+j*ut,ee=d+_t+j*(ut+1),Y=d+(_t+1)+j*(ut+1),nt=d+(_t+1)+j*ut;l.push(Ot,ee,nt),l.push(ee,Y,nt),H+=6}o.addGroup(p,H,I),p+=H,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function bu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var Jn={clone:Wi,merge:Ue},Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},pr=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new T,tc=new Ct,ec=new Ct,Re=class extends pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,tc,ec),e.subVectors(ec,tc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},wi=-90,Ti=1,xo=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(wi,Ti,t,e);s.layers=this.layers,this.add(s);let r=new Re(wi,Ti,t,e);r.layers=this.layers,this.add(r);let a=new Re(wi,Ti,t,e);a.layers=this.layers,this.add(a);let o=new Re(wi,Ti,t,e);o.layers=this.layers,this.add(o);let l=new Re(wi,Ti,t,e);l.layers=this.layers,this.add(l);let c=new Re(wi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},gr=class extends ze{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Co=class extends De{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new di(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:fn});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=un),new xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ma=new T,wu=new T,Tu=new Ft,bn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ma.subVectors(n,e).cross(wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tu.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Zn,Hs=new T,As=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],A=s[10],g=s[11],f=s[12],M=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-p,y-f).normalize(),n[1].setComponents(l+r,d+c,g+p,y+f).normalize(),n[2].setComponents(l+a,d+h,g+m,y+M).normalize(),n[3].setComponents(l-a,d-h,g-m,y-M).normalize(),n[4].setComponents(l-o,d-u,g-A,y-_).normalize(),e===Sn)n[5].setComponents(l+o,d+u,g+A,y+_).normalize();else if(e===ar)n[5].setComponents(o,u,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hs.x=s.normal.x>0?t.max.x:t.min.x,Hs.y=s.normal.y>0?t.max.y:t.min.y,Hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rn=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],m=[],A=[],g=[];for(let f=0;f<h;f++){let M=f*d-a;for(let _=0;_<c;_++){let y=_*u-r;m.push(y,-M,0),A.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let _=M+c*f,y=M+c*(f+1),P=M+1+c*(f+1),S=M+1+c*f;p.push(_,y,S),p.push(y,P,S)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(A,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nd=`vec3 transformedNormal = objectNormal;
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
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
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
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Td=`struct PhysicalMaterial {
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
}`,Vd=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
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
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,$f=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,ep=`#define STANDARD
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
}`,np=`#define STANDARD
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
}`,ip=`#define TOON
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
}`,sp=`#define TOON
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
}`,rp=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,cp=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ru,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Uu,alphatest_fragment:Du,alphatest_pars_fragment:Nu,aomap_fragment:Fu,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:Ou,begin_vertex:qu,beginnormal_vertex:ku,bsdfs:Hu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Qu,color_fragment:ju,color_pars_fragment:Ju,color_pars_vertex:Ku,color_vertex:$u,common:td,cube_uv_reflection_fragment:ed,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Id,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:gd,fog_fragment:md,fog_pars_fragment:Ad,gradientmap_pars_fragment:xd,lightmap_pars_fragment:Cd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:yd,lights_pars_begin:_d,lights_toon_fragment:Md,lights_toon_pars_fragment:bd,lights_phong_fragment:Sd,lights_phong_pars_fragment:Ed,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Vd,lights_fragment_maps:Rd,lights_fragment_end:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Bd,map_particle_fragment:zd,map_particle_pars_fragment:Od,metalnessmap_fragment:qd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Hd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:Yd,normal_fragment_begin:Zd,normal_fragment_maps:Qd,normal_pars_fragment:jd,normal_pars_vertex:Jd,normal_vertex:Kd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:nf,iridescence_pars_fragment:sf,opaque_fragment:rf,packing:af,premultiplied_alpha_fragment:of,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:hf,roughnessmap_fragment:uf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:ff,shadowmap_pars_vertex:pf,shadowmap_vertex:gf,shadowmask_pars_fragment:mf,skinbase_vertex:Af,skinning_pars_vertex:xf,skinning_vertex:Cf,skinnormal_vertex:vf,specularmap_fragment:yf,specularmap_pars_fragment:_f,tonemapping_fragment:If,tonemapping_pars_fragment:Mf,transmission_fragment:bf,transmission_pars_fragment:Sf,uv_pars_fragment:Ef,uv_pars_vertex:wf,uv_vertex:Tf,worldpos_vertex:Vf,background_vert:Rf,background_frag:Pf,backgroundCube_vert:Lf,backgroundCube_frag:Uf,cube_vert:Df,cube_frag:Nf,depth_vert:Ff,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:Of,equirect_vert:qf,equirect_frag:kf,linedashed_vert:Hf,linedashed_frag:Gf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:Yf,meshlambert_frag:Zf,meshmatcap_vert:Qf,meshmatcap_frag:jf,meshnormal_vert:Jf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:tp,meshphysical_vert:ep,meshphysical_frag:np,meshtoon_vert:ip,meshtoon_frag:sp,points_vert:rp,points_frag:ap,shadow_vert:op,shadow_frag:lp,sprite_vert:cp,sprite_frag:hp},it={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},cn={basic:{uniforms:Ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Tt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ue([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ue([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ue([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Tt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ue([it.points,it.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ue([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ue([it.common,it.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ue([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ue([it.sprite,it.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ue([it.common,it.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ue([it.lights,it.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};cn.physical={uniforms:Ue([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Gs={r:0,b:0,g:0},si=new pn,up=new ne;function dp(i,t,e,n,s,r,a){let o=new Tt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function A(M){let _=!1,y=m(M);y===null?f(o,l):y&&y.isColor&&(f(y,1),_=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===Nr)?(h===void 0&&(h=new ge(new di(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Wi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),si.copy(_.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(up.makeRotationFromEuler(si)),h.material.toneMapped=kt.getTransfer(y.colorSpace)!==Jt,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new Rn(2,2),new Ce({name:"BackgroundMaterial",uniforms:Wi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=kt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,_){M.getRGB(Gs,Jc(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:A,addToRenderList:g}}function fp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,w,q,z,G){let j=!1,W=u(z,q,w);r!==W&&(r=W,c(r.object)),j=p(v,z,q,G),j&&m(v,z,q,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(v,w,q,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,q){let z=q.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let j=G[w.id];j===void 0&&(j={},G[w.id]=j);let W=j[z];return W===void 0&&(W=d(l()),j[z]=W),W}function d(v){let w=[],q=[],z=[];for(let G=0;G<e;G++)w[G]=0,q[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:q,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,w,q,z){let G=r.attributes,j=w.attributes,W=0,et=q.getAttributes();for(let H in et)if(et[H].location>=0){let ut=G[H],_t=j[H];if(_t===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),ut===void 0||ut.attribute!==_t||_t&&ut.data!==_t.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function m(v,w,q,z){let G={},j=w.attributes,W=0,et=q.getAttributes();for(let H in et)if(et[H].location>=0){let ut=j[H];ut===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));let _t={};_t.attribute=ut,ut&&ut.data&&(_t.data=ut.data),G[H]=_t,W++}r.attributes=G,r.attributesNum=W,r.index=z}function A(){let v=r.newAttributes;for(let w=0,q=v.length;w<q;w++)v[w]=0}function g(v){f(v,0)}function f(v,w){let q=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;q[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),G[v]!==w&&(i.vertexAttribDivisor(v,w),G[v]=w)}function M(){let v=r.newAttributes,w=r.enabledAttributes;for(let q=0,z=w.length;q<z;q++)w[q]!==v[q]&&(i.disableVertexAttribArray(q),w[q]=0)}function _(v,w,q,z,G,j,W){W===!0?i.vertexAttribIPointer(v,w,q,G,j):i.vertexAttribPointer(v,w,q,z,G,j)}function y(v,w,q,z){A();let G=z.attributes,j=q.getAttributes(),W=w.defaultAttributeValues;for(let et in j){let H=j[et];if(H.location>=0){let rt=G[et];if(rt===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){let ut=rt.normalized,_t=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;let ee=Ot.buffer,Y=Ot.type,nt=Ot.bytesPerElement,xt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===tl;if(rt.isInterleavedBufferAttribute){let at=rt.data,wt=at.stride,Ut=rt.offset;if(at.isInstancedInterleavedBuffer){for(let qt=0;qt<H.locationSize;qt++)f(H.location+qt,at.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let qt=0;qt<H.locationSize;qt++)g(H.location+qt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let qt=0;qt<H.locationSize;qt++)_(H.location+qt,_t/H.locationSize,Y,ut,wt*nt,(Ut+_t/H.locationSize*qt)*nt,xt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)f(H.location+at,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<H.locationSize;at++)g(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let at=0;at<H.locationSize;at++)_(H.location+at,_t/H.locationSize,Y,ut,_t*nt,_t/H.locationSize*at*nt,xt)}}else if(W!==void 0){let ut=W[et];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}M()}function P(){D();for(let v in n){let w=n[v];for(let q in w){let z=w[q];for(let G in z)h(z[G].object),delete z[G];delete w[q]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let q in w){let z=w[q];for(let G in z)h(z[G].object),delete z[G];delete w[q]}delete n[v.id]}function E(v){for(let w in n){let q=n[w];if(q[v.id]===void 0)continue;let z=q[v.id];for(let G in z)h(z[G].object),delete z[G];delete q[v.id]}}function D(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:M}}function pp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let D=E===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==dn&&!D)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:S}}function mp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new bn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,y=f.clippingState||null;l.value=y,y=h(m,d,_,p);for(let P=0;P!==_;++P)y[P]=e[P];f.clippingState=y,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let f=p+A*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,y=p;_!==A;++_,y+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Ap(i){let t=new WeakMap;function e(a,o){return o===Da?a.mapping=qi:o===Na&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Da||o===Na)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Co(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xi=class extends pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ni=4,nc=[.125,.215,.35,.446,.526,.582],li=20,Aa=new Xi,ic=new Tt,xa=null,Ca=0,va=0,ya=!1,ai=(1+Math.sqrt(5))/2,Vi=1/ai,sc=[new T(-ai,Vi,0),new T(ai,Vi,0),new T(-Vi,0,ai),new T(Vi,0,ai),new T(0,ai,-Vi),new T(0,ai,Vi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],mr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,Ca,va),this._renderer.xr.enabled=ya,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:an,format:nn,colorSpace:Zi,depthBuffer:!1},s=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xp(r)),this._blurMaterial=Cp(r,t,e)}return s}_compileMaterial(t){let e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,s){let o=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ic),h.toneMapping=Hn,h.autoClear=!1;let p=new Me({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new ge(new di,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(ic),A=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let _=this._cubeSize;Ws(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sc[(s-r-1)%sc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):li;g>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${li}`);let f=[],M=0;for(let E=0;E<li;++E){let D=E/A,I=Math.exp(-D*D/2);f.push(I),E===0?M+=I:E<g&&(M+=2*I)}for(let E=0;E<f.length;E++)f[E]=f[E]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let y=this._sizeLods[s],P=3*y*(s>_-Ni?s-_+Ni:0),S=4*(this._cubeSize-y);Ws(e,P,S,3*y,2*y),l.setRenderTarget(e),l.render(u,Aa)}};function xp(i){let t=[],e=[],n=[],s=i,r=i-Ni+1+nc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=nc[a-i+Ni-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,f=1,M=new Float32Array(A*m*p),_=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,D=S>2?0:-1,I=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];M.set(I,A*m*S),_.set(d,g*m*S);let v=[S,S,S,S,S,S];y.set(v,f*m*S)}let P=new be;P.setAttribute("position",new Pe(M,A)),P.setAttribute("uv",new Pe(_,g)),P.setAttribute("faceIndex",new Pe(y,f)),t.push(P),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(i,t,e){let n=new De(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cp(i,t,e){let n=new Float32Array(li),s=new T(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ac(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function oc(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function vp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Da||l===Na,h=l===qi||l===ki;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new mr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new mr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,f=A.length;g<f;g++)t.remove(A[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,f=A.length;g<f;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let M=p.array;A=p.version;for(let _=0,y=M.length;_<y;_+=3){let P=M[_+0],S=M[_+1],E=M[_+2];d.push(P,S,S,E,E,P)}}else if(m!==void 0){let M=m.array;A=m.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let P=_+0,S=_+1,E=_+2;d.push(P,S,S,E,E,P)}}else return;let g=new(Qc(d)?fr:dr)(d,1);g.version=A;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ip(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],A[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,A,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*A[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bp(i,t,e){let n=new WeakMap,s=new te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),A===!0&&(_=3);let y=o.attributes.position.count*_,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*P*4*u),E=new cr(S,y,P,u);E.type=dn,E.needsUpdate=!0;let D=_*4;for(let v=0;v<u;v++){let w=g[v],q=f[v],z=M[v],G=y*P*4*v;for(let j=0;j<w.count;j++){let W=j*D;p===!0&&(s.fromBufferAttribute(w,j),S[G+W+0]=s.x,S[G+W+1]=s.y,S[G+W+2]=s.z,S[G+W+3]=0),m===!0&&(s.fromBufferAttribute(q,j),S[G+W+4]=s.x,S[G+W+5]=s.y,S[G+W+6]=s.z,S[G+W+7]=0),A===!0&&(s.fromBufferAttribute(z,j),S[G+W+8]=s.x,S[G+W+9]=s.y,S[G+W+10]=s.z,S[G+W+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Ct(y,P)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ar=class extends ze{constructor(t,e,n,s,r,a,o,l,c,h=Fi){if(h!==Fi&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=ui),n===void 0&&h===Gi&&(n=Hi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$c=new ze,lc=new Ar(1,1),th=new cr,eh=new Ao,nh=new gr,cc=[],hc=[],uc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=hc[t];e===void 0&&(e=new Int32Array(t),hc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),ye(e,n)}}function Pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),ye(e,n)}}function Lp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),ye(e,n)}}function Up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=Zc,r=lc):r=$c,e.setTexture2D(t||r,s)}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function Gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nh,s)}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function Xp(i){switch(i){case 5126:return Ep;case 35664:return wp;case 35665:return Tp;case 35666:return Vp;case 35674:return Rp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Up;case 35667:case 35671:return Dp;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Bp;case 36294:return zp;case 36295:return Op;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}function Yp(i,t){i.uniform1fv(this.addr,t)}function Zp(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Qp(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Jp(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kp(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $p(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tg(i,t){i.uniform1iv(this.addr,t)}function eg(i,t){i.uniform2iv(this.addr,t)}function ng(i,t){i.uniform3iv(this.addr,t)}function ig(i,t){i.uniform4iv(this.addr,t)}function sg(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function ag(i,t){i.uniform3uiv(this.addr,t)}function og(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$c,r[a])}function cg(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function hg(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nh,r[a])}function ug(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function dg(i){switch(i){case 5126:return Yp;case 35664:return Zp;case 35665:return Qp;case 35666:return jp;case 35674:return Jp;case 35675:return Kp;case 35676:return $p;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}var vo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xp(e.type)}},yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}},_o=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function pc(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){let n=i.name,s=n.length;for(_a.lastIndex=0;;){let r=_a.exec(n),a=_a.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pc(e,c===void 0?new vo(o,i,t):new yo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new _o(o),pc(e,u)),e=u}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);fg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var pg=37297,gg=0;function mg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mc=new Ft;function Ag(i){kt._getMatrix(mc,kt.workingColorSpace,i);let t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ac(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mg(i.getShaderSource(t),a)}else return s}function xg(i,t){let e=Ag(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cg(i,t){let e;switch(t){case Zo:e="Linear";break;case Qo:e="Reinhard";break;case jo:e="Cineon";break;case Jo:e="ACESFilmic";break;case Ko:e="AgX";break;case $o:e="Neutral";break;case jh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xs=new T;function vg(){kt.getLuminanceCoefficients(Xs);let i=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function _g(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ig(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function xc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(Mg,Sg)}var bg=new Map;function Sg(i,t){let e=zt[t];if(e===void 0){let n=bg.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Io(e)}var Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(Eg,wg)}function wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case ki:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function Pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case Qh:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Tg(e),c=Vg(e),h=Rg(e),u=Pg(e),d=Lg(e),p=yg(e),m=_g(r),A=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ps).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(g=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?Cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,xg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=Io(a),a=xc(a,e),a=Cc(a,e),o=Io(o),o=xc(o,e),o=Cc(o,e),a=vc(a),o=vc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=M+g+a,y=M+f+o,P=gc(s,s.VERTEX_SHADER,_),S=gc(s,s.FRAGMENT_SHADER,y);s.attachShader(A,P),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(S).trim(),j=!0,W=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,P,S);else{let et=Ac(s,P,"vertex"),H=Ac(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+q+`
`+et+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||G==="")&&(W=!1);W&&(w.diagnostics={runnable:j,programLog:q,vertexShader:{log:z,prefix:g},fragmentShader:{log:G,prefix:f}})}s.deleteShader(P),s.deleteShader(S),D=new zi(s,A),I=Ig(s,A)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let I;this.getAttributes=function(){return I===void 0&&E(this),I};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(A,pg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=S,this}var Dg=0,Mo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bo(t),e.set(t,n)),n}},bo=class{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}};function Ng(i,t,e,n,s,r,a){let o=new ur,l=new Mo,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(I){return c.add(I),I===0?"uv":`uv${I}`}function g(I,v,w,q,z){let G=q.fog,j=z.geometry,W=I.isMeshStandardMaterial?q.environment:null,et=(I.isMeshStandardMaterial?e:t).get(I.envMap||W),H=et&&et.mapping===Nr?et.image.height:null,rt=m[I.type];I.precision!==null&&(p=s.getMaxPrecision(I.precision),p!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",p,"instead."));let ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=ut!==void 0?ut.length:0,Ot=0;j.morphAttributes.position!==void 0&&(Ot=1),j.morphAttributes.normal!==void 0&&(Ot=2),j.morphAttributes.color!==void 0&&(Ot=3);let ee,Y,nt,xt;if(rt){let Kt=cn[rt];ee=Kt.vertexShader,Y=Kt.fragmentShader}else ee=I.vertexShader,Y=I.fragmentShader,l.update(I),nt=l.getVertexShaderID(I),xt=l.getFragmentShaderID(I);let at=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ut=z.isInstancedMesh===!0,qt=z.isBatchedMesh===!0,ue=!!I.map,Xt=!!I.matcap,pe=!!et,U=!!I.aoMap,Xe=!!I.lightMap,Ht=!!I.bumpMap,Gt=!!I.normalMap,Mt=!!I.displacementMap,ae=!!I.emissiveMap,It=!!I.metalnessMap,b=!!I.roughnessMap,x=I.anisotropy>0,N=I.clearcoat>0,Z=I.dispersion>0,J=I.iridescence>0,X=I.sheen>0,vt=I.transmission>0,ot=x&&!!I.anisotropyMap,dt=N&&!!I.clearcoatMap,Yt=N&&!!I.clearcoatNormalMap,$=N&&!!I.clearcoatRoughnessMap,ft=J&&!!I.iridescenceMap,St=J&&!!I.iridescenceThicknessMap,Rt=X&&!!I.sheenColorMap,pt=X&&!!I.sheenRoughnessMap,Wt=!!I.specularMap,Bt=!!I.specularColorMap,se=!!I.specularIntensityMap,V=vt&&!!I.transmissionMap,st=vt&&!!I.thicknessMap,k=!!I.gradientMap,Q=!!I.alphaMap,ht=I.alphaTest>0,lt=!!I.alphaHash,Dt=!!I.extensions,de=Hn;I.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=i.toneMapping);let Ee={shaderID:rt,shaderType:I.type,shaderName:I.name,vertexShader:ee,fragmentShader:Y,defines:I.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:p,batching:qt,batchingColor:qt&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Zi,alphaToCoverage:!!I.alphaToCoverage,map:ue,matcap:Xt,envMap:pe,envMapMode:pe&&et.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Xe,bumpMap:Ht,normalMap:Gt,displacementMap:d&&Mt,emissiveMap:ae,normalMapObjectSpace:Gt&&I.normalMapType===tu,normalMapTangentSpace:Gt&&I.normalMapType===Yc,metalnessMap:It,roughnessMap:b,anisotropy:x,anisotropyMap:ot,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:$,dispersion:Z,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:St,sheen:X,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Wt,specularColorMap:Bt,specularIntensityMap:se,transmission:vt,transmissionMap:V,thicknessMap:st,gradientMap:k,opaque:I.transparent===!1&&I.blending===kn&&I.alphaToCoverage===!1,alphaMap:Q,alphaTest:ht,alphaHash:lt,combine:I.combine,mapUv:ue&&A(I.map.channel),aoMapUv:U&&A(I.aoMap.channel),lightMapUv:Xe&&A(I.lightMap.channel),bumpMapUv:Ht&&A(I.bumpMap.channel),normalMapUv:Gt&&A(I.normalMap.channel),displacementMapUv:Mt&&A(I.displacementMap.channel),emissiveMapUv:ae&&A(I.emissiveMap.channel),metalnessMapUv:It&&A(I.metalnessMap.channel),roughnessMapUv:b&&A(I.roughnessMap.channel),anisotropyMapUv:ot&&A(I.anisotropyMap.channel),clearcoatMapUv:dt&&A(I.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&A(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&A(I.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&A(I.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(I.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&A(I.sheenColorMap.channel),sheenRoughnessMapUv:pt&&A(I.sheenRoughnessMap.channel),specularMapUv:Wt&&A(I.specularMap.channel),specularColorMapUv:Bt&&A(I.specularColorMap.channel),specularIntensityMapUv:se&&A(I.specularIntensityMap.channel),transmissionMapUv:V&&A(I.transmissionMap.channel),thicknessMapUv:st&&A(I.thicknessMap.channel),alphaMapUv:Q&&A(I.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Gt||x),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ue||Q),fog:!!G,useFog:I.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&I.map.isVideoTexture===!0&&kt.getTransfer(I.map.colorSpace)===Jt,decodeVideoTextureEmissive:ae&&I.emissiveMap.isVideoTexture===!0&&kt.getTransfer(I.emissiveMap.colorSpace)===Jt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Qe,flipSided:I.side===Be,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Dt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&I.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(I){let v=[];if(I.shaderID?v.push(I.shaderID):(v.push(I.customVertexShaderID),v.push(I.customFragmentShaderID)),I.defines!==void 0)for(let w in I.defines)v.push(w),v.push(I.defines[w]);return I.isRawShaderMaterial===!1&&(M(v,I),_(v,I),v.push(i.outputColorSpace)),v.push(I.customProgramCacheKey),v.join()}function M(I,v){I.push(v.precision),I.push(v.outputColorSpace),I.push(v.envMapMode),I.push(v.envMapCubeUVHeight),I.push(v.mapUv),I.push(v.alphaMapUv),I.push(v.lightMapUv),I.push(v.aoMapUv),I.push(v.bumpMapUv),I.push(v.normalMapUv),I.push(v.displacementMapUv),I.push(v.emissiveMapUv),I.push(v.metalnessMapUv),I.push(v.roughnessMapUv),I.push(v.anisotropyMapUv),I.push(v.clearcoatMapUv),I.push(v.clearcoatNormalMapUv),I.push(v.clearcoatRoughnessMapUv),I.push(v.iridescenceMapUv),I.push(v.iridescenceThicknessMapUv),I.push(v.sheenColorMapUv),I.push(v.sheenRoughnessMapUv),I.push(v.specularMapUv),I.push(v.specularColorMapUv),I.push(v.specularIntensityMapUv),I.push(v.transmissionMapUv),I.push(v.thicknessMapUv),I.push(v.combine),I.push(v.fogExp2),I.push(v.sizeAttenuation),I.push(v.morphTargetsCount),I.push(v.morphAttributeCount),I.push(v.numDirLights),I.push(v.numPointLights),I.push(v.numSpotLights),I.push(v.numSpotLightMaps),I.push(v.numHemiLights),I.push(v.numRectAreaLights),I.push(v.numDirLightShadows),I.push(v.numPointLightShadows),I.push(v.numSpotLightShadows),I.push(v.numSpotLightShadowsWithMaps),I.push(v.numLightProbes),I.push(v.shadowMapType),I.push(v.toneMapping),I.push(v.numClippingPlanes),I.push(v.numClipIntersection),I.push(v.depthPacking)}function _(I,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),I.push(o.mask)}function y(I){let v=m[I.type],w;if(v){let q=cn[v];w=Jn.clone(q.uniforms)}else w=I.uniforms;return w}function P(I,v){let w;for(let q=0,z=h.length;q<z;q++){let G=h[q];if(G.cacheKey===v){w=G,++w.usedTimes;break}}return w===void 0&&(w=new Ug(i,v,I,r),h.push(w)),w}function S(I){if(--I.usedTimes===0){let v=h.indexOf(I);h[v]=h[h.length-1],h.pop(),I.destroy()}}function E(I){l.remove(I)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:D}}function Fg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ic(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,A,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=A,f.group=g),t++,f}function o(u,d,p,m,A,g){let f=a(u,d,p,m,A,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,m,A,g){let f=a(u,d,p,m,A,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(d||_c),s.length>1&&s.sort(d||_c)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ic,i.set(n,[a])):s>=r.length?(a=new Ic,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Tt};break;case"SpotLight":e={position:new T,direction:new T,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){let t=new Og,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,A=0,g=0,f=0,M=0,_=0,y=0,P=0,S=0,E=0;c.sort(Hg);for(let I=0,v=c.length;I<v;I++){let w=c[I],q=w.color,z=w.intensity,G=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=q.r*z,u+=q.g*z,d+=q.b*z;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],z);E++}else if(w.isDirectionalLight){let W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let et=w.shadow,H=e.get(w);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=w.shadow.matrix,M++}n.directional[p]=W,p++}else if(w.isSpotLight){let W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(q).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[A]=W;let et=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,et.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[A]=et.matrix,w.castShadow){let H=e.get(w);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.spotShadow[A]=H,n.spotShadowMap[A]=j,y++}A++}else if(w.isRectAreaLight){let W=t.get(w);W.color.copy(q).multiplyScalar(z),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=W,g++}else if(w.isPointLight){let W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){let et=w.shadow,H=e.get(w);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,H.shadowCameraNear=et.camera.near,H.shadowCameraFar=et.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=w.shadow.matrix,_++}n.point[m]=W,m++}else if(w.isHemisphereLight){let W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(z),W.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[f]=W,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==A||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==M||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==P||D.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,D.directionalLength=p,D.pointLength=m,D.spotLength=A,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=M,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=P,D.numLightProbes=E,n.version=kg++)}function l(c,h){let u=0,d=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let _=c[f];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(_.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let y=n.hemi[A];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function Mc(i){let t=new Gg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Mc(i),t.set(s,[o])):r>=a.length?(o=new Mc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var So=class extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function Zg(i,t,e){let n=new As,s=new Ct,r=new Ct,a=new te,o=new So({depthPacking:$h}),l=new Eo,c={},h=e.maxTextureSize,u={[Wn]:Be,[Be]:Wn,[Qe]:Qe},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new be;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let f=this.type;this.render=function(S,E,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let I=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),q=i.state;q.setBlending(fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=f!==Mn&&this.type===Mn,G=f===Mn&&this.type!==Mn;for(let j=0,W=S.length;j<W;j++){let et=S[j],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||z===!0||G===!0){let _t=this.type!==Mn?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new De(s.x,s.y,_t),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ut=H.getViewportCount();for(let _t=0;_t<ut;_t++){let Ot=H.getViewport(_t);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),q.viewport(a),H.updateMatrices(et,_t),n=H.getFrustum(),y(E,D,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===Mn&&M(H,D),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(I,v,w)};function M(S,E){let D=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new De(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,D,p,A,null)}function _(S,E,D,I){let v=null,w=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)v=w;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let q=v.uuid,z=E.uuid,G=c[q];G===void 0&&(G={},c[q]=G);let j=G[z];j===void 0&&(j=v.clone(),G[z]=j,E.addEventListener("dispose",P)),v=j}if(v.visible=E.visible,v.wireframe=E.wireframe,I===Mn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let q=i.properties.get(v);q.light=D}return v}function y(S,E,D,I,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Mn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let z=t.update(S),G=S.material;if(Array.isArray(G)){let j=z.groups;for(let W=0,et=j.length;W<et;W++){let H=j[W],rt=G[H.materialIndex];if(rt&&rt.visible){let ut=_(S,rt,I,v);S.onBeforeShadow(i,S,E,D,z,ut,H),i.renderBufferDirect(D,null,z,ut,S,H),S.onAfterShadow(i,S,E,D,z,ut,H)}}}else if(G.visible){let j=_(S,G,I,v);S.onBeforeShadow(i,S,E,D,z,j,null),i.renderBufferDirect(D,null,z,j,S,null),S.onAfterShadow(i,S,E,D,z,j,null)}}let q=S.children;for(let z=0,G=q.length;z<G;z++)y(q[z],E,D,I,v)}function P(S){S.target.removeEventListener("dispose",P);for(let D in c){let I=c[D],v=S.target.uuid;v in I&&(I[v].dispose(),delete I[v])}}}var Qg={[wa]:Ta,[Va]:La,[Ra]:Ua,[Oi]:Pa,[Ta]:wa,[La]:Va,[Ua]:Ra,[Pa]:Oi};function jg(i,t){function e(){let V=!1,st=new te,k=null,Q=new te(0,0,0,0);return{setMask:function(ht){k!==ht&&!V&&(i.colorMask(ht,ht,ht,ht),k=ht)},setLocked:function(ht){V=ht},setClear:function(ht,lt,Dt,de,Ee){Ee===!0&&(ht*=de,lt*=de,Dt*=de),st.set(ht,lt,Dt,de),Q.equals(st)===!1&&(i.clearColor(ht,lt,Dt,de),Q.copy(st))},reset:function(){V=!1,k=null,Q.set(-1,0,0,0)}}}function n(){let V=!1,st=!1,k=null,Q=null,ht=null;return{setReversed:function(lt){if(st!==lt){let Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let de=ht;ht=null,this.setClear(de)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(lt){k!==lt&&!V&&(i.depthMask(lt),k=lt)},setFunc:function(lt){if(st&&(lt=Qg[lt]),Q!==lt){switch(lt){case wa:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=lt}},setLocked:function(lt){V=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){V=!1,k=null,Q=null,ht=null,st=!1}}}function s(){let V=!1,st=null,k=null,Q=null,ht=null,lt=null,Dt=null,de=null,Ee=null;return{setTest:function(Kt){V||(Kt?at(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!V&&(i.stencilMask(Kt),st=Kt)},setFunc:function(Kt,Je,An){(k!==Kt||Q!==Je||ht!==An)&&(i.stencilFunc(Kt,Je,An),k=Kt,Q=Je,ht=An)},setOp:function(Kt,Je,An){(lt!==Kt||Dt!==Je||de!==An)&&(i.stencilOp(Kt,Je,An),lt=Kt,Dt=Je,de=An)},setLocked:function(Kt){V=Kt},setClear:function(Kt){Ee!==Kt&&(i.clearStencil(Kt),Ee=Kt)},reset:function(){V=!1,st=null,k=null,Q=null,ht=null,lt=null,Dt=null,de=null,Ee=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,A=!1,g=null,f=null,M=null,_=null,y=null,P=null,S=null,E=new Tt(0,0,0),D=0,I=!1,v=null,w=null,q=null,z=null,G=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,et=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=et>=2);let rt=null,ut={},_t=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),ee=new te().fromArray(_t),Y=new te().fromArray(Ot);function nt(V,st,k,Q){let ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(V,lt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<k;Dt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}let xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Oi),Ht(!1),Gt(wl),at(i.CULL_FACE),U(fn);function at(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function wt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Ut(V,st){return u[V]!==st?(i.bindFramebuffer(V,st),u[V]=st,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function qt(V,st){let k=p,Q=!1;if(V){k=d.get(st),k===void 0&&(k=[],d.set(st,k));let ht=V.textures;if(k.length!==ht.length||k[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=ht.length;lt<Dt;lt++)k[lt]=i.COLOR_ATTACHMENT0+lt;k.length=ht.length,Q=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,Q=!0);Q&&i.drawBuffers(k)}function ue(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let Xt={[oi]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};Xt[Lh]=i.MIN,Xt[Uh]=i.MAX;let pe={[Dh]:i.ZERO,[Nh]:i.ONE,[Fh]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(V,st,k,Q,ht,lt,Dt,de,Ee,Kt){if(V===fn){A===!0&&(wt(i.BLEND),A=!1);return}if(A===!1&&(at(i.BLEND),A=!0),V!==Vh){if(V!==g||Kt!==I){if((f!==oi||y!==oi)&&(i.blendEquation(i.FUNC_ADD),f=oi,y=oi),Kt)switch(V){case kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,_=null,P=null,S=null,E.set(0,0,0),D=0,g=V,I=Kt}return}ht=ht||st,lt=lt||k,Dt=Dt||Q,(st!==f||ht!==y)&&(i.blendEquationSeparate(Xt[st],Xt[ht]),f=st,y=ht),(k!==M||Q!==_||lt!==P||Dt!==S)&&(i.blendFuncSeparate(pe[k],pe[Q],pe[lt],pe[Dt]),M=k,_=Q,P=lt,S=Dt),(de.equals(E)===!1||Ee!==D)&&(i.blendColor(de.r,de.g,de.b,Ee),E.copy(de),D=Ee),g=V,I=!1}function Xe(V,st){V.side===Qe?wt(i.CULL_FACE):at(i.CULL_FACE);let k=V.side===Be;st&&(k=!k),Ht(k),V.blending===kn&&V.transparent===!1?U(fn):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Q=V.stencilWrite;o.setTest(Q),Q&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ae(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(V){v!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),v=V)}function Gt(V){V!==Eh?(at(i.CULL_FACE),V!==w&&(V===wl?i.cullFace(i.BACK):V===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),w=V}function Mt(V){V!==q&&(W&&i.lineWidth(V),q=V)}function ae(V,st,k){V?(at(i.POLYGON_OFFSET_FILL),(z!==st||G!==k)&&(i.polygonOffset(st,k),z=st,G=k)):wt(i.POLYGON_OFFSET_FILL)}function It(V){V?at(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function b(V){V===void 0&&(V=i.TEXTURE0+j-1),rt!==V&&(i.activeTexture(V),rt=V)}function x(V,st,k){k===void 0&&(rt===null?k=i.TEXTURE0+j-1:k=rt);let Q=ut[k];Q===void 0&&(Q={type:void 0,texture:void 0},ut[k]=Q),(Q.type!==V||Q.texture!==st)&&(rt!==k&&(i.activeTexture(k),rt=k),i.bindTexture(V,st||xt[V]),Q.type=V,Q.texture=st)}function N(){let V=ut[rt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(V){ee.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function pt(V){Y.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function Wt(V,st){let k=c.get(st);k===void 0&&(k=new WeakMap,c.set(st,k));let Q=k.get(V);Q===void 0&&(Q=i.getUniformBlockIndex(st,V.name),k.set(V,Q))}function Bt(V,st){let Q=c.get(st).get(V);l.get(st)!==Q&&(i.uniformBlockBinding(st,Q,V.__bindingPointIndex),l.set(st,Q))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ut={},u={},d=new WeakMap,p=[],m=null,A=!1,g=null,f=null,M=null,_=null,y=null,P=null,S=null,E=new Tt(0,0,0),D=0,I=!1,v=null,w=null,q=null,z=null,G=null,ee.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:wt,bindFramebuffer:Ut,drawBuffers:qt,useProgram:ue,setBlending:U,setMaterial:Xe,setFlipSided:Ht,setCullFace:Gt,setLineWidth:Mt,setPolygonOffset:ae,setScissorTest:It,activeTexture:b,bindTexture:x,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ft,texImage3D:St,updateUBOMapping:Wt,uniformBlockBinding:Bt,texStorage2D:Yt,texStorage3D:$,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:se}}function bc(i,t,e,n){let s=Jg(n);switch(e){case qc:return i*t;case Hc:return i*t;case Gc:return i*t*2;case il:return i*t/s.components*s.byteLength;case sl:return i*t/s.components*s.byteLength;case Wc:return i*t*2/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case al:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case ka:return Math.max(i,16)*Math.max(t,8)/4;case za:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sr:case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xc:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jg(i){switch(i){case wn:case Bc:return{byteLength:1,components:1};case ms:case zc:case an:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case ui:case tl:case dn:return{byteLength:4,components:1};case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return p?new OffscreenCanvas(b,x):or("canvas")}function A(b,x,N){let Z=1,J=It(b);if((J.width>N||J.height>N)&&(Z=N/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let X=Math.floor(Z*J.width),vt=Math.floor(Z*J.height);u===void 0&&(u=m(X,vt));let ot=x?m(X,vt):u;return ot.width=X,ot.height=vt,ot.getContext("2d").drawImage(b,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+vt+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function g(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(b,x,N,Z,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),x===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){let vt=J?Fr:kt.getTransfer(Z);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(b,x){let N;return b?x===null||x===ui||x===Hi?N=i.DEPTH24_STENCIL8:x===dn?N=i.DEPTH32F_STENCIL8:x===ms&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ui||x===Hi?N=i.DEPTH_COMPONENT24:x===dn?N=i.DEPTH_COMPONENT32F:x===ms&&(N=i.DEPTH_COMPONENT16),N}function P(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ge&&b.minFilter!==un?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function S(b){let x=b.target;x.removeEventListener("dispose",S),D(x),x.isVideoTexture&&h.delete(x)}function E(b){let x=b.target;x.removeEventListener("dispose",E),v(x)}function D(b){let x=n.get(b);if(x.__webglInit===void 0)return;let N=b.source,Z=d.get(N);if(Z){let J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(b),Object.keys(Z).length===0&&d.delete(N)}n.remove(b)}function I(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let N=b.source,Z=d.get(N);delete Z[x.__cacheKey],a.memory.textures--}function v(b){let x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let J=0;J<x.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=b.textures;for(let Z=0,J=N.length;Z<J;Z++){let X=n.get(N[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(b)}let w=0;function q(){w=0}function z(){let b=w;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),w+=1,b}function G(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function j(b,x){let N=n.get(b);if(b.isVideoTexture&&Mt(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,b,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function W(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){Y(N,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function et(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){Y(N,b,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function H(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){nt(N,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let rt={[Fa]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},ut={[Ge]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},_t={[eu]:i.NEVER,[ou]:i.ALWAYS,[nu]:i.LESS,[Zc]:i.LEQUAL,[iu]:i.EQUAL,[au]:i.GEQUAL,[su]:i.GREATER,[ru]:i.NOTEQUAL};function Ot(b,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===un||x.magFilter===Yr||x.magFilter===Ss||x.magFilter===hi||x.minFilter===un||x.minFilter===Yr||x.minFilter===Ss||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,rt[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ge||x.minFilter!==Ss&&x.minFilter!==hi||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",S));let Z=x.source,J=d.get(Z);J===void 0&&(J={},d.set(Z,J));let X=G(x);if(X!==b.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[X].usedTimes++;let vt=J[b.__cacheKey];vt!==void 0&&(J[b.__cacheKey].usedTimes--,vt.usedTimes===0&&I(x)),b.__cacheKey=X,b.__webglTexture=J[X].texture}return N}function Y(b,x,N){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let J=ee(b,x),X=x.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+N);let vt=n.get(X);if(X.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+N);let ot=kt.getPrimaries(kt.workingColorSpace),dt=x.colorSpace===On?null:kt.getPrimaries(x.colorSpace),Yt=x.colorSpace===On||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let $=A(x.image,!1,s.maxTextureSize);$=ae(x,$);let ft=r.convert(x.format,x.colorSpace),St=r.convert(x.type),Rt=_(x.internalFormat,ft,St,x.colorSpace,x.isVideoTexture);Ot(Z,x);let pt,Wt=x.mipmaps,Bt=x.isVideoTexture!==!0,se=vt.__version===void 0||J===!0,V=X.dataReady,st=P(x,$);if(x.isDepthTexture)Rt=y(x.format===Gi,x.type),se&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Rt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Rt,$.width,$.height,0,ft,St,null));else if(x.isDataTexture)if(Wt.length>0){Bt&&se&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Wt[0].width,Wt[0].height);for(let k=0,Q=Wt.length;k<Q;k++)pt=Wt[k],Bt?V&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,St,pt.data):e.texImage2D(i.TEXTURE_2D,k,Rt,pt.width,pt.height,0,ft,St,pt.data);x.generateMipmaps=!1}else Bt?(se&&e.texStorage2D(i.TEXTURE_2D,st,Rt,$.width,$.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,ft,St,$.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,$.width,$.height,0,ft,St,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Wt[0].width,Wt[0].height,$.depth);for(let k=0,Q=Wt.length;k<Q;k++)if(pt=Wt[k],x.format!==nn)if(ft!==null)if(Bt){if(V)if(x.layerUpdates.size>0){let ht=bc(pt.width,pt.height,x.format,x.type);for(let lt of x.layerUpdates){let Dt=pt.data.subarray(lt*ht/pt.data.BYTES_PER_ELEMENT,(lt+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,lt,pt.width,pt.height,1,ft,Dt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,$.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Rt,pt.width,pt.height,$.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,$.depth,ft,St,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Rt,pt.width,pt.height,$.depth,0,ft,St,pt.data)}else{Bt&&se&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Wt[0].width,Wt[0].height);for(let k=0,Q=Wt.length;k<Q;k++)pt=Wt[k],x.format!==nn?ft!==null?Bt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?V&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,St,pt.data):e.texImage2D(i.TEXTURE_2D,k,Rt,pt.width,pt.height,0,ft,St,pt.data)}else if(x.isDataArrayTexture)if(Bt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,$.width,$.height,$.depth),V)if(x.layerUpdates.size>0){let k=bc($.width,$.height,x.format,x.type);for(let Q of x.layerUpdates){let ht=$.data.subarray(Q*k/$.data.BYTES_PER_ELEMENT,(Q+1)*k/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,$.width,$.height,1,ft,St,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,St,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,$.width,$.height,$.depth,0,ft,St,$.data);else if(x.isData3DTexture)Bt?(se&&e.texStorage3D(i.TEXTURE_3D,st,Rt,$.width,$.height,$.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,St,$.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,$.width,$.height,$.depth,0,ft,St,$.data);else if(x.isFramebufferTexture){if(se)if(Bt)e.texStorage2D(i.TEXTURE_2D,st,Rt,$.width,$.height);else{let k=$.width,Q=$.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,k,Q,0,ft,St,null),k>>=1,Q>>=1}}else if(Wt.length>0){if(Bt&&se){let k=It(Wt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,k.width,k.height)}for(let k=0,Q=Wt.length;k<Q;k++)pt=Wt[k],Bt?V&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft,St,pt):e.texImage2D(i.TEXTURE_2D,k,Rt,ft,St,pt);x.generateMipmaps=!1}else if(Bt){if(se){let k=It($);e.texStorage2D(i.TEXTURE_2D,st,Rt,k.width,k.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,St,$)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,St,$);g(x)&&f(Z),vt.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function nt(b,x,N){if(x.image.length!==6)return;let Z=ee(b,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let X=n.get(J);if(J.version!==X.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);let vt=kt.getPrimaries(kt.workingColorSpace),ot=x.colorSpace===On?null:kt.getPrimaries(x.colorSpace),dt=x.colorSpace===On||vt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!Yt&&!$?ft[Q]=A(x.image[Q],!0,s.maxCubemapSize):ft[Q]=$?x.image[Q].image:x.image[Q],ft[Q]=ae(x,ft[Q]);let St=ft[0],Rt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Wt=_(x.internalFormat,Rt,pt,x.colorSpace),Bt=x.isVideoTexture!==!0,se=X.__version===void 0||Z===!0,V=J.dataReady,st=P(x,St);Ot(i.TEXTURE_CUBE_MAP,x);let k;if(Yt){Bt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Wt,St.width,St.height);for(let Q=0;Q<6;Q++){k=ft[Q].mipmaps;for(let ht=0;ht<k.length;ht++){let lt=k[ht];x.format!==nn?Rt!==null?Bt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Wt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,lt.width,lt.height,Rt,pt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Wt,lt.width,lt.height,0,Rt,pt,lt.data)}}}else{if(k=x.mipmaps,Bt&&se){k.length>0&&st++;let Q=It(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if($){Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,Rt,pt,ft[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,ft[Q].width,ft[Q].height,0,Rt,pt,ft[Q].data);for(let ht=0;ht<k.length;ht++){let Dt=k[ht].image[Q].image;Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Dt.width,Dt.height,Rt,pt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Wt,Dt.width,Dt.height,0,Rt,pt,Dt.data)}}else{Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Rt,pt,ft[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,Rt,pt,ft[Q]);for(let ht=0;ht<k.length;ht++){let lt=k[ht];Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Rt,pt,lt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Wt,Rt,pt,lt.image[Q])}}}g(x)&&f(i.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function xt(b,x,N,Z,J,X){let vt=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),dt=_(N.internalFormat,vt,ot,N.colorSpace),Yt=n.get(x),$=n.get(N);if($.__renderTarget=x,!Yt.__hasExternalTextures){let ft=Math.max(1,x.width>>X),St=Math.max(1,x.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,dt,ft,St,x.depth,0,vt,ot,null):e.texImage2D(J,X,dt,ft,St,0,vt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,$.__webglTexture,0,Ht(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,$.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let Z=x.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,X=y(x.stencilBuffer,J),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ht(x);Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,X,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,b)}else{let Z=x.textures;for(let J=0;J<Z.length;J++){let X=Z[J],vt=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),dt=_(X.internalFormat,vt,ot,X.colorSpace),Yt=Ht(x);N&&Gt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,dt,x.width,x.height):Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let J=Z.__webglTexture,X=Ht(x);if(x.depthTexture.format===Fi)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Gi)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ut(b){let x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Z}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(x.__webglDepthbuffer[Z],b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(b,x,N){let Z=n.get(b);x!==void 0&&xt(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ut(b)}function ue(b){let x=b.texture,N=n.get(b),Z=n.get(x);b.addEventListener("dispose",E);let J=b.textures,X=b.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let dt=0;dt<x.mipmaps.length;dt++)N.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ot=0,dt=J.length;ot<dt;ot++){let Yt=n.get(J[ot]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Gt(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){let dt=J[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Yt=r.convert(dt.format,dt.colorSpace),$=r.convert(dt.type),ft=_(dt.internalFormat,Yt,$,dt.colorSpace,b.isXRRenderTarget===!0),St=Ht(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),at(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)xt(N.__webglFramebuffer[ot][dt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else xt(N.__webglFramebuffer[ot],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,dt=J.length;ot<dt;ot++){let Yt=J[ot],$=n.get(Yt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),Ot(i.TEXTURE_2D,Yt),xt(N.__webglFramebuffer,b,Yt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ot(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)xt(N.__webglFramebuffer[dt],b,x,i.COLOR_ATTACHMENT0,ot,dt);else xt(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ot,0);g(x)&&f(ot),e.unbindTexture()}b.depthBuffer&&Ut(b)}function Xt(b){let x=b.textures;for(let N=0,Z=x.length;N<Z;N++){let J=x[N];if(g(J)){let X=M(b),vt=n.get(J).__webglTexture;e.bindTexture(X,vt),f(X),e.unbindTexture()}}}let pe=[],U=[];function Xe(b){if(b.samples>0){if(Gt(b)===!1){let x=b.textures,N=b.width,Z=b.height,J=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(b),ot=x.length>1;if(ot)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let Yt=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,J,i.NEAREST),l===!0&&(pe.length=0,U.length=0,pe.push(i.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(pe.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let Yt=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ht(b){return Math.min(s.maxSamples,b.samples)}function Gt(b){let x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ae(b,x){let N=b.colorSpace,Z=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Zi&&N!==On&&(kt.getTransfer(N)===Jt?(Z!==nn||J!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function It(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=H,this.rebindTextures=qt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Gt}function $g(i,t){function e(n,s=On){let r,a=kt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.BYTE;if(n===zc)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===kc)return i.RGB;if(n===nn)return i.RGBA;if(n===Hc)return i.LUMINANCE;if(n===Gc)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Wc)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Oa||n===qa||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===Ya||n===Za||n===Qa||n===ja||n===Ja||n===Ka||n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===ao||n===oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===lo||n===co||n===ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wo=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ae=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),f=this._getHandJoint(c,A);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
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

}`,To=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:em,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vo=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,A=new To,g=e.getContextAttributes(),f=null,M=null,_=[],y=[],P=new Ct,S=null,E=new Re;E.viewport=new te;let D=new Re;D.viewport=new te;let I=[E,D],v=new wo,w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=_[Y];return nt===void 0&&(nt=new gs,_[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=_[Y];return nt===void 0&&(nt=new gs,_[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=_[Y];return nt===void 0&&(nt=new gs,_[Y]=nt),nt.getHandSpace()};function z(Y){let nt=y.indexOf(Y.inputSource);if(nt===-1)return;let xt=_[nt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<_.length;Y++){let nt=y[Y];nt!==null&&(y[Y]=null,_[Y].disconnect(nt))}w=null,q=null,A.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new De(p.framebufferWidth,p.framebufferHeight,{format:nn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,xt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Gi:Fi,xt=g.stencil?Hi:ui);let wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new De(d.textureWidth,d.textureHeight,{format:nn,type:wn,depthTexture:new Ar(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function j(Y){for(let nt=0;nt<Y.removed.length;nt++){let xt=Y.removed[nt],at=y.indexOf(xt);at>=0&&(y[at]=null,_[at].disconnect(xt))}for(let nt=0;nt<Y.added.length;nt++){let xt=Y.added[nt],at=y.indexOf(xt);if(at===-1){for(let Ut=0;Ut<_.length;Ut++)if(Ut>=y.length){y.push(xt),at=Ut;break}else if(y[Ut]===null){y[Ut]=xt,at=Ut;break}if(at===-1)break}let wt=_[at];wt&&wt.connect(xt)}}let W=new T,et=new T;function H(Y,nt,xt){W.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(xt.matrixWorld);let at=W.distanceTo(et),wt=nt.projectionMatrix.elements,Ut=xt.projectionMatrix.elements,qt=wt[14]/(wt[10]-1),ue=wt[14]/(wt[10]+1),Xt=(wt[9]+1)/wt[5],pe=(wt[9]-1)/wt[5],U=(wt[8]-1)/wt[0],Xe=(Ut[8]+1)/Ut[0],Ht=qt*U,Gt=qt*Xe,Mt=at/(-U+Xe),ae=Mt*-U;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let It=qt+Mt,b=ue+Mt,x=Ht-ae,N=Gt+(at-ae),Z=Xt*ue/b*It,J=pe*ue/b*It;Y.projectionMatrix.makePerspective(x,N,Z,J,It,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,xt=Y.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),v.near=D.near=E.near=nt,v.far=D.far=E.far=xt,(w!==v.near||q!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,q=v.far),E.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,v.layers.mask=E.layers.mask|D.layers.mask;let at=Y.parent,wt=v.cameras;rt(v,at);for(let Ut=0;Ut<wt.length;Ut++)rt(wt[Ut],at);wt.length===2?H(v,E,D):v.projectionMatrix.copy(E.projectionMatrix),ut(Y,v,at)};function ut(Y,nt,xt){xt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=po*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(v)};let _t=null;function Ot(Y,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let at=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Ut=0;Ut<xt.length;Ut++){let qt=xt[Ut],ue=null;if(p!==null)ue=p.getViewport(qt);else{let pe=u.getViewSubImage(d,qt);ue=pe.viewport,Ut===0&&(t.setRenderTargetTextures(M,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(M))}let Xt=I[Ut];Xt===void 0&&(Xt=new Re,Xt.layers.enable(Ut),Xt.viewport=new te,I[Ut]=Xt),Xt.matrix.fromArray(qt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(qt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ue.x,ue.y,ue.width,ue.height),Ut===0&&(v.matrix.copy(Xt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Xt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let Ut=u.getDepthInformation(xt[0]);Ut&&Ut.isValid&&Ut.texture&&A.init(t,Ut,s.renderState)}}for(let xt=0;xt<_.length;xt++){let at=y[xt],wt=_[xt];at!==null&&wt!==void 0&&wt.update(at,nt,c||a)}_t&&_t(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ee=new Kc;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}},ri=new pn,im=new ne;function sm(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Jc(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),A(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,M,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Be&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Be&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),_=M.envMap,y=M.envMapRotation;_&&(g.envMap.value=_,ri.copy(y),ri.x*=-1,ri.y*=-1,ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(ri)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,M,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=_*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function A(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let y=_.program;n.uniformBlockBinding(M,y)}function c(M,_){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",g));let P=_.program;n.updateUBOMapping(M,P);let S=t.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){let _=u();M.__bindingPointIndex=_;let y=i.createBuffer(),P=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],y=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,E=y.length;S<E;S++){let D=Array.isArray(y[S])?y[S]:[y[S]];for(let I=0,v=D.length;I<v;I++){let w=D[I];if(p(w,S,I,P)===!0){let q=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],G=0;for(let j=0;j<z.length;j++){let W=z[j],et=A(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,q+G,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,G),G+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,y,P){let S=M.value,E=_+"_"+y;if(P[E]===void 0)return typeof S=="number"||typeof S=="boolean"?P[E]=S:P[E]=S.clone(),!0;{let D=P[E];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return P[E]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function m(M){let _=M.uniforms,y=0,P=16;for(let E=0,D=_.length;E<D;E++){let I=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,w=I.length;v<w;v++){let q=I[v],z=Array.isArray(q.value)?q.value:[q.value];for(let G=0,j=z.length;G<j;G++){let W=z[G],et=A(W),H=y%P,rt=H%et.boundary,ut=H+rt;y+=rt,ut!==0&&P-ut<et.storage&&(y+=P-ut),q.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=et.storage}}}let S=y%P;return S>0&&(y+=P-S),M.__size=y,M.__cache={},this}function A(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var xr=class{constructor(t={}){let{canvas:e=cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,f=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Hn,this.toneMappingExposure=1;let y=this,P=!1,S=0,E=0,D=null,I=-1,v=null,w=new te,q=new te,z=null,G=new Tt(0),j=0,W=e.width,et=e.height,H=1,rt=null,ut=null,_t=new te(0,0,W,et),Ot=new te(0,0,W,et),ee=!1,Y=new As,nt=!1,xt=!1,at=new ne,wt=new ne,Ut=new T,qt=new te,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function pe(){return D===null?H:1}let U=n;function Xe(C,R){return e.getContext(C,R)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let R="webgl2";if(U=Xe(R,C),U===null)throw Xe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ht,Gt,Mt,ae,It,b,x,N,Z,J,X,vt,ot,dt,Yt,$,ft,St,Rt,pt,Wt,Bt,se,V;function st(){Ht=new yp(U),Ht.init(),Bt=new $g(U,Ht),Gt=new gp(U,Ht,t,Bt),Mt=new jg(U,Ht),Gt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),ae=new Mp(U),It=new Fg,b=new Kg(U,Ht,Mt,It,Gt,Bt,ae),x=new Ap(y),N=new vp(y),Z=new Vu(U),se=new fp(U,Z),J=new _p(U,Z,ae,se),X=new Sp(U,J,Z,ae),Rt=new bp(U,Gt,b),$=new mp(It),vt=new Ng(y,x,N,Ht,Gt,se,$),ot=new sm(y,It),dt=new zg,Yt=new Wg(Ht),St=new dp(y,x,N,Mt,X,p,l),ft=new Zg(y,X,Gt),V=new rm(U,ae,Gt,Mt),pt=new pp(U,Ht,ae),Wt=new Ip(U,Ht,ae),ae.programs=vt.programs,y.capabilities=Gt,y.extensions=Ht,y.properties=It,y.renderLists=dt,y.shadowMap=ft,y.state=Mt,y.info=ae}st();let k=new Vo(y,U);this.xr=k,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=Ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(W,et,!1))},this.getSize=function(C){return C.set(W,et)},this.setSize=function(C,R,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,et=R,e.width=Math.floor(C*H),e.height=Math.floor(R*H),F===!0&&(e.style.width=C+"px",e.style.height=R+"px"),this.setViewport(0,0,C,R)},this.getDrawingBufferSize=function(C){return C.set(W*H,et*H).floor()},this.setDrawingBufferSize=function(C,R,F){W=C,et=R,H=F,e.width=Math.floor(C*F),e.height=Math.floor(R*F),this.setViewport(0,0,C,R)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(_t)},this.setViewport=function(C,R,F,B){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,R,F,B),Mt.viewport(w.copy(_t).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Ot)},this.setScissor=function(C,R,F,B){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,R,F,B),Mt.scissor(q.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Mt.setScissorTest(ee=C)},this.setOpaqueSort=function(C){rt=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(C=!0,R=!0,F=!0){let B=0;if(C){let L=!1;if(D!==null){let tt=D.texture.format;L=tt===al||tt===rl||tt===sl}if(L){let tt=D.texture.type,ct=tt===wn||tt===ui||tt===ms||tt===Hi||tt===el||tt===nl,gt=St.getClearColor(),mt=St.getClearAlpha(),Pt=gt.r,Nt=gt.g,At=gt.b;ct?(m[0]=Pt,m[1]=Nt,m[2]=At,m[3]=mt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=Pt,A[1]=Nt,A[2]=At,A[3]=mt,U.clearBufferiv(U.COLOR,0,A))}else B|=U.COLOR_BUFFER_BIT}R&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),dt.dispose(),Yt.dispose(),It.dispose(),x.dispose(),N.dispose(),X.dispose(),se.dispose(),V.dispose(),vt.dispose(),k.dispose(),k.removeEventListener("sessionstart",vl),k.removeEventListener("sessionend",yl),$n.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let C=ae.autoReset,R=ft.enabled,F=ft.autoUpdate,B=ft.needsUpdate,L=ft.type;st(),ae.autoReset=C,ft.enabled=R,ft.autoUpdate=F,ft.needsUpdate=B,ft.type=L}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Dt(C){let R=C.target;R.removeEventListener("dispose",Dt),de(R)}function de(C){Ee(C),It.remove(C)}function Ee(C){let R=It.get(C).programs;R!==void 0&&(R.forEach(function(F){vt.releaseProgram(F)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,R,F,B,L,tt){R===null&&(R=ue);let ct=L.isMesh&&L.matrixWorld.determinant()<0,gt=Mh(C,R,F,B,L);Mt.setMaterial(B,ct);let mt=F.index,Pt=1;if(B.wireframe===!0){if(mt=J.getWireframeAttribute(F),mt===void 0)return;Pt=2}let Nt=F.drawRange,At=F.attributes.position,Zt=Nt.start*Pt,re=(Nt.start+Nt.count)*Pt;tt!==null&&(Zt=Math.max(Zt,tt.start*Pt),re=Math.min(re,(tt.start+tt.count)*Pt)),mt!==null?(Zt=Math.max(Zt,0),re=Math.min(re,mt.count)):At!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,At.count));let oe=re-Zt;if(oe<0||oe===1/0)return;se.setup(L,B,gt,F,mt);let Ne,Qt=pt;if(mt!==null&&(Ne=Z.get(mt),Qt=Wt,Qt.setIndex(Ne)),L.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*pe()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(L.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),Mt.setLineWidth(yt*pe()),L.isLineSegments?Qt.setMode(U.LINES):L.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else L.isPoints?Qt.setMode(U.POINTS):L.isSprite&&Qt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Qt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Qt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let yt=L._multiDrawStarts,xn=L._multiDrawCounts,jt=L._multiDrawCount,Ke=mt?Z.get(mt).bytesPerElement:1,mi=It.get(B).currentProgram.getUniforms();for(let qe=0;qe<jt;qe++)mi.setValue(U,"_gl_DrawID",qe),Qt.render(yt[qe]/Ke,xn[qe])}else if(L.isInstancedMesh)Qt.renderInstances(Zt,oe,L.count);else if(F.isInstancedBufferGeometry){let yt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,xn=Math.min(F.instanceCount,yt);Qt.renderInstances(Zt,oe,xn)}else Qt.render(Zt,oe)};function Kt(C,R,F){C.transparent===!0&&C.side===Qe&&C.forceSinglePass===!1?(C.side=Be,C.needsUpdate=!0,bs(C,R,F),C.side=Wn,C.needsUpdate=!0,bs(C,R,F),C.side=Qe):bs(C,R,F)}this.compile=function(C,R,F=null){F===null&&(F=C),f=Yt.get(F),f.init(R),_.push(f),F.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),C!==F&&C.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();let B=new Set;return C.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let tt=L.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){let gt=tt[ct];Kt(gt,F,L),B.add(gt)}else Kt(tt,F,L),B.add(tt)}),_.pop(),f=null,B},this.compileAsync=function(C,R,F=null){let B=this.compile(C,R,F);return new Promise(L=>{function tt(){if(B.forEach(function(ct){It.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){L(C);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Je=null;function An(C){Je&&Je(C)}function vl(){$n.stop()}function yl(){$n.start()}let $n=new Kc;$n.setAnimationLoop(An),typeof self!="undefined"&&$n.setContext(self),this.setAnimationLoop=function(C){Je=C,k.setAnimationLoop(C),C===null?$n.stop():$n.start()},k.addEventListener("sessionstart",vl),k.addEventListener("sessionend",yl),this.render=function(C,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(R),R=k.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,R,D),f=Yt.get(C,_.length),f.init(R),_.push(f),wt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Y.setFromProjectionMatrix(wt),xt=this.localClippingEnabled,nt=$.init(this.clippingPlanes,xt),g=dt.get(C,M.length),g.init(),M.push(g),k.enabled===!0&&k.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&Xr(tt,R,-1/0,y.sortObjects)}Xr(C,R,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(rt,ut),Xt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Xt&&St.addToRenderList(g,C),this.info.render.frame++,nt===!0&&$.beginShadows();let F=f.state.shadowsArray;ft.render(F,C,R),nt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,L=g.transmissive;if(f.setupLights(),R.isArrayCamera){let tt=R.cameras;if(L.length>0)for(let ct=0,gt=tt.length;ct<gt;ct++){let mt=tt[ct];Il(B,L,C,mt)}Xt&&St.render(C);for(let ct=0,gt=tt.length;ct<gt;ct++){let mt=tt[ct];_l(g,C,mt,mt.viewport)}}else L.length>0&&Il(B,L,C,R),Xt&&St.render(C),_l(g,C,R);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(y,C,R),se.resetDefaultState(),I=-1,v=null,_.pop(),_.length>0?(f=_[_.length-1],nt===!0&&$.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Xr(C,R,F,B){if(C.visible===!1)return;if(C.layers.test(R.layers)){if(C.isGroup)F=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(R);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){B&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);let ct=X.update(C),gt=C.material;gt.visible&&g.push(C,ct,gt,F,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){let ct=X.update(C),gt=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),qt.copy(ct.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(gt)){let mt=ct.groups;for(let Pt=0,Nt=mt.length;Pt<Nt;Pt++){let At=mt[Pt],Zt=gt[At.materialIndex];Zt&&Zt.visible&&g.push(C,ct,Zt,F,qt.z,At)}}else gt.visible&&g.push(C,ct,gt,F,qt.z,null)}}let tt=C.children;for(let ct=0,gt=tt.length;ct<gt;ct++)Xr(tt[ct],R,F,B)}function _l(C,R,F,B){let L=C.opaque,tt=C.transmissive,ct=C.transparent;f.setupLightsView(F),nt===!0&&$.setGlobalState(y.clippingPlanes,F),B&&Mt.viewport(w.copy(B)),L.length>0&&Ms(L,R,F),tt.length>0&&Ms(tt,R,F),ct.length>0&&Ms(ct,R,F),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Il(C,R,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new De(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?an:wn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));let tt=f.state.transmissionRenderTarget[B.id],ct=B.viewport||w;tt.setSize(ct.z,ct.w);let gt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(G),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&St.render(F);let mt=y.toneMapping;y.toneMapping=Hn;let Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),nt===!0&&$.setGlobalState(y.clippingPlanes,B),Ms(C,F,B),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let At=0,Zt=R.length;At<Zt;At++){let re=R[At],oe=re.object,Ne=re.geometry,Qt=re.material,yt=re.group;if(Qt.side===Qe&&oe.layers.test(B.layers)){let xn=Qt.side;Qt.side=Be,Qt.needsUpdate=!0,Ml(oe,F,B,Ne,Qt,yt),Qt.side=xn,Qt.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}y.setRenderTarget(gt),y.setClearColor(G,j),Pt!==void 0&&(B.viewport=Pt),y.toneMapping=mt}function Ms(C,R,F){let B=R.isScene===!0?R.overrideMaterial:null;for(let L=0,tt=C.length;L<tt;L++){let ct=C[L],gt=ct.object,mt=ct.geometry,Pt=B===null?ct.material:B,Nt=ct.group;gt.layers.test(F.layers)&&Ml(gt,R,F,mt,Pt,Nt)}}function Ml(C,R,F,B,L,tt){C.onBeforeRender(y,R,F,B,L,tt),C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),L.onBeforeRender(y,R,F,B,C,tt),L.transparent===!0&&L.side===Qe&&L.forceSinglePass===!1?(L.side=Be,L.needsUpdate=!0,y.renderBufferDirect(F,R,B,L,C,tt),L.side=Wn,L.needsUpdate=!0,y.renderBufferDirect(F,R,B,L,C,tt),L.side=Qe):y.renderBufferDirect(F,R,B,L,C,tt),C.onAfterRender(y,R,F,B,L,tt)}function bs(C,R,F){R.isScene!==!0&&(R=ue);let B=It.get(C),L=f.state.lights,tt=f.state.shadowsArray,ct=L.state.version,gt=vt.getParameters(C,L.state,tt,R,F),mt=vt.getProgramCacheKey(gt),Pt=B.programs;B.environment=C.isMeshStandardMaterial?R.environment:null,B.fog=R.fog,B.envMap=(C.isMeshStandardMaterial?N:x).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?R.environmentRotation:C.envMapRotation,Pt===void 0&&(C.addEventListener("dispose",Dt),Pt=new Map,B.programs=Pt);let Nt=Pt.get(mt);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===ct)return Sl(C,gt),Nt}else gt.uniforms=vt.getUniforms(C),C.onBeforeCompile(gt,y),Nt=vt.acquireProgram(gt,mt),Pt.set(mt,Nt),B.uniforms=gt.uniforms;let At=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(At.clippingPlanes=$.uniform),Sl(C,gt),B.needsLights=Sh(C),B.lightsStateVersion=ct,B.needsLights&&(At.ambientLightColor.value=L.state.ambient,At.lightProbe.value=L.state.probe,At.directionalLights.value=L.state.directional,At.directionalLightShadows.value=L.state.directionalShadow,At.spotLights.value=L.state.spot,At.spotLightShadows.value=L.state.spotShadow,At.rectAreaLights.value=L.state.rectArea,At.ltc_1.value=L.state.rectAreaLTC1,At.ltc_2.value=L.state.rectAreaLTC2,At.pointLights.value=L.state.point,At.pointLightShadows.value=L.state.pointShadow,At.hemisphereLights.value=L.state.hemi,At.directionalShadowMap.value=L.state.directionalShadowMap,At.directionalShadowMatrix.value=L.state.directionalShadowMatrix,At.spotShadowMap.value=L.state.spotShadowMap,At.spotLightMatrix.value=L.state.spotLightMatrix,At.spotLightMap.value=L.state.spotLightMap,At.pointShadowMap.value=L.state.pointShadowMap,At.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function bl(C){if(C.uniformsList===null){let R=C.currentProgram.getUniforms();C.uniformsList=zi.seqWithValue(R.seq,C.uniforms)}return C.uniformsList}function Sl(C,R){let F=It.get(C);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.batchingColor=R.batchingColor,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function Mh(C,R,F,B,L){R.isScene!==!0&&(R=ue),b.resetTextureUnits();let tt=R.fog,ct=B.isMeshStandardMaterial?R.environment:null,gt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Zi,mt=(B.isMeshStandardMaterial?N:x).get(B.envMap||ct),Pt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Nt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!F.morphAttributes.position,Zt=!!F.morphAttributes.normal,re=!!F.morphAttributes.color,oe=Hn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(oe=y.toneMapping);let Ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qt=Ne!==void 0?Ne.length:0,yt=It.get(B),xn=f.state.lights;if(nt===!0&&(xt===!0||C!==v)){let Ye=C===v&&B.id===I;$.setState(B,C,Ye)}let jt=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==xn.state.version||yt.outputColorSpace!==gt||L.isBatchedMesh&&yt.batching===!1||!L.isBatchedMesh&&yt.batching===!0||L.isBatchedMesh&&yt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&yt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&yt.instancing===!1||!L.isInstancedMesh&&yt.instancing===!0||L.isSkinnedMesh&&yt.skinning===!1||!L.isSkinnedMesh&&yt.skinning===!0||L.isInstancedMesh&&yt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&yt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&yt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&yt.instancingMorph===!1&&L.morphTexture!==null||yt.envMap!==mt||B.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==$.numPlanes||yt.numIntersection!==$.numIntersection)||yt.vertexAlphas!==Pt||yt.vertexTangents!==Nt||yt.morphTargets!==At||yt.morphNormals!==Zt||yt.morphColors!==re||yt.toneMapping!==oe||yt.morphTargetsCount!==Qt)&&(jt=!0):(jt=!0,yt.__version=B.version);let Ke=yt.currentProgram;jt===!0&&(Ke=bs(B,R,L));let mi=!1,qe=!1,es=!1,le=Ke.getUniforms(),ln=yt.uniforms;if(Mt.useProgram(Ke.program)&&(mi=!0,qe=!0,es=!0),B.id!==I&&(I=B.id,qe=!0),mi||v!==C){Mt.buffers.depth.getReversed()?(at.copy(C.projectionMatrix),uu(at),du(at),le.setValue(U,"projectionMatrix",at)):le.setValue(U,"projectionMatrix",C.projectionMatrix),le.setValue(U,"viewMatrix",C.matrixWorldInverse);let Pn=le.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,Ut.setFromMatrixPosition(C.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&le.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,qe=!0,es=!0)}if(L.isSkinnedMesh){le.setOptional(U,L,"bindMatrix"),le.setOptional(U,L,"bindMatrixInverse");let Ye=L.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),le.setValue(U,"boneTexture",Ye.boneTexture,b))}L.isBatchedMesh&&(le.setOptional(U,L,"batchingTexture"),le.setValue(U,"batchingTexture",L._matricesTexture,b),le.setOptional(U,L,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",L._indirectTexture,b),le.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",L._colorsTexture,b));let ns=F.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Rt.update(L,F,Ke),(qe||yt.receiveShadow!==L.receiveShadow)&&(yt.receiveShadow=L.receiveShadow,le.setValue(U,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=mt,ln.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&R.environment!==null&&(ln.envMapIntensity.value=R.environmentIntensity),qe&&(le.setValue(U,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&bh(ln,es),tt&&B.fog===!0&&ot.refreshFogUniforms(ln,tt),ot.refreshMaterialUniforms(ln,B,H,et,f.state.transmissionRenderTarget[C.id]),zi.upload(U,bl(yt),ln,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zi.upload(U,bl(yt),ln,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&le.setValue(U,"center",L.center),le.setValue(U,"modelViewMatrix",L.modelViewMatrix),le.setValue(U,"normalMatrix",L.normalMatrix),le.setValue(U,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ye=B.uniformsGroups;for(let Pn=0,Ln=Ye.length;Pn<Ln;Pn++){let El=Ye[Pn];V.update(El,Ke),V.bind(El,Ke)}}return Ke}function bh(C,R){C.ambientLightColor.needsUpdate=R,C.lightProbe.needsUpdate=R,C.directionalLights.needsUpdate=R,C.directionalLightShadows.needsUpdate=R,C.pointLights.needsUpdate=R,C.pointLightShadows.needsUpdate=R,C.spotLights.needsUpdate=R,C.spotLightShadows.needsUpdate=R,C.rectAreaLights.needsUpdate=R,C.hemisphereLights.needsUpdate=R}function Sh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,R,F){It.get(C.texture).__webglTexture=R,It.get(C.depthTexture).__webglTexture=F;let B=It.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,R){let F=It.get(C);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(C,R=0,F=0){D=C,S=R,E=F;let B=!0,L=null,tt=!1,ct=!1;if(C){let mt=It.get(C);if(mt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(mt.__hasExternalTextures)b.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let At=C.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&It.has(At)&&(C.width!==At.image.width||C.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}let Pt=C.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);let Nt=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Nt[R])?L=Nt[R][F]:L=Nt[R],tt=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?L=It.get(C).__webglMultisampledFramebuffer:Array.isArray(Nt)?L=Nt[F]:L=Nt,w.copy(C.viewport),q.copy(C.scissor),z=C.scissorTest}else w.copy(_t).multiplyScalar(H).floor(),q.copy(Ot).multiplyScalar(H).floor(),z=ee;if(Mt.bindFramebuffer(U.FRAMEBUFFER,L)&&B&&Mt.drawBuffers(C,L),Mt.viewport(w),Mt.scissor(q),Mt.setScissorTest(z),tt){let mt=It.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,mt.__webglTexture,F)}else if(ct){let mt=It.get(C.texture),Pt=R||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,Pt)}I=-1},this.readRenderTargetPixels=function(C,R,F,B,L,tt,ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){Mt.bindFramebuffer(U.FRAMEBUFFER,gt);try{let mt=C.texture,Pt=mt.format,Nt=mt.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=C.width-B&&F>=0&&F<=C.height-L&&U.readPixels(R,F,B,L,Bt.convert(Pt),Bt.convert(Nt),tt)}finally{let mt=D!==null?It.get(D).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(C,R,F,B,L,tt,ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){let mt=C.texture,Pt=mt.format,Nt=mt.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=C.width-B&&F>=0&&F<=C.height-L){Mt.bindFramebuffer(U.FRAMEBUFFER,gt);let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(R,F,B,L,Bt.convert(Pt),Bt.convert(Nt),0);let Zt=D!==null?It.get(D).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,Zt);let re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hu(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(At),U.deleteSync(re),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,R=null,F=0){C.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-F),L=Math.floor(C.image.width*B),tt=Math.floor(C.image.height*B),ct=R!==null?R.x:0,gt=R!==null?R.y:0;b.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ct,gt,L,tt),Mt.unbindTexture()},this.copyTextureToTexture=function(C,R,F=null,B=null,L=0){C.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],R=arguments[2],L=arguments[3]||0,F=null);let tt,ct,gt,mt,Pt,Nt,At,Zt,re,oe=C.isCompressedTexture?C.mipmaps[L]:C.image;F!==null?(tt=F.max.x-F.min.x,ct=F.max.y-F.min.y,gt=F.isBox3?F.max.z-F.min.z:1,mt=F.min.x,Pt=F.min.y,Nt=F.isBox3?F.min.z:0):(tt=oe.width,ct=oe.height,gt=oe.depth||1,mt=0,Pt=0,Nt=0),B!==null?(At=B.x,Zt=B.y,re=B.z):(At=0,Zt=0,re=0);let Ne=Bt.convert(R.format),Qt=Bt.convert(R.type),yt;R.isData3DTexture?(b.setTexture3D(R,0),yt=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(b.setTexture2DArray(R,0),yt=U.TEXTURE_2D_ARRAY):(b.setTexture2D(R,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let xn=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=U.getParameter(U.UNPACK_SKIP_PIXELS),mi=U.getParameter(U.UNPACK_SKIP_ROWS),qe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt);let es=C.isDataArrayTexture||C.isData3DTexture,le=R.isDataArrayTexture||R.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let ln=It.get(C),ns=It.get(R),Ye=It.get(ln.__renderTarget),Pn=It.get(ns.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Ln=0;Ln<gt;Ln++)es&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(C).__webglTexture,L,Nt+Ln),C.isDepthTexture?(le&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(R).__webglTexture,L,re+Ln),U.blitFramebuffer(mt,Pt,tt,ct,At,Zt,tt,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):le?U.copyTexSubImage3D(yt,L,At,Zt,re+Ln,mt,Pt,tt,ct):U.copyTexSubImage2D(yt,L,At,Zt,re+Ln,mt,Pt,tt,ct);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(yt,L,At,Zt,re,tt,ct,gt,Ne,Qt,oe.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,L,At,Zt,re,tt,ct,gt,Ne,oe.data):U.texSubImage3D(yt,L,At,Zt,re,tt,ct,gt,Ne,Qt,oe):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,At,Zt,tt,ct,Ne,Qt,oe.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,At,Zt,oe.width,oe.height,Ne,oe.data):U.texSubImage2D(U.TEXTURE_2D,L,At,Zt,tt,ct,Ne,Qt,oe);U.pixelStorei(U.UNPACK_ROW_LENGTH,xn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe),L===0&&R.generateMipmaps&&U.generateMipmap(yt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(C,R,F=null,B=null,L=0){return C.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,C=arguments[2],R=arguments[3],L=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,R,F,B,L)},this.initRenderTarget=function(C){It.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Mt.unbindTexture()},this.resetState=function(){S=0,E=0,D=null,Mt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}};var Cr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ro=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fo,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Le=new T,yr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qn=class extends Vn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ri,os=new T,Pi=new T,Li=new T,Ui=new Ct,ls=new Ct,ih=new ne,Ys=new T,cs=new T,Zs=new T,Sc=new Ct,Ia=new Ct,Ec=new Ct,fi=class extends xe{constructor(t=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ro(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new yr(n,3,0,!1)),Ri.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),ih.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Qs(Ys.set(-.5,-.5,0),Li,a,Pi,s,r),Qs(cs.set(.5,-.5,0),Li,a,Pi,s,r),Qs(Zs.set(.5,.5,0),Li,a,Pi,s,r),Sc.set(0,0),Ia.set(1,0),Ec.set(1,1);let o=t.ray.intersectTriangle(Ys,cs,Zs,!1,os);if(o===null&&(Qs(cs.set(-.5,.5,0),Li,a,Pi,s,r),Ia.set(0,1),o=t.ray.intersectTriangle(Ys,Zs,cs,!1,os),o===null))return;let l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:qn.getInterpolation(os,Ys,cs,Zs,Sc,Ia,Ec,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Qs(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ls.x=r*Ui.x-s*Ui.y,ls.y=s*Ui.x+r*Ui.y):ls.copy(Ui),i.copy(t),i.x+=ls.x,i.y+=ls.y,i.applyMatrix4(ih)}var Po=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,h=Ge,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Di=new ne,wc=new ne,js=[],Tc=new Tn,am=new ne,hs=new ge,us=new Zn,Ir=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Tc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Tc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),us.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),wc.multiplyMatrices(n,Di),hs.matrixWorld=wc,hs.raycast(t,js);for(let a=0,o=js.length;a<o;a++){let l=js[a];l.instanceId=r,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Po(new Float32Array(s*this.count),s,this.count,il,dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xs=class extends Vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vc=new ne,Lo=new hr,Js=new Zn,Ks=new T,Mr=class extends xe{constructor(t=new be,e=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Vc.copy(s).invert(),Lo.copy(t.ray).applyMatrix4(Vc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,A=p;m<A;m++){let g=c.getX(m);Ks.fromBufferAttribute(u,g),Rc(Ks,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,A=p;m<A;m++)Ks.fromBufferAttribute(u,m),Rc(Ks,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rc(i,t,e,n,s,r,a){let o=Lo.distanceSqToPoint(i);if(o<e){let l=new T;Lo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var jn=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var br=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new T,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Sr=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,A=[],g=n/2,f=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function M(){let y=new T,P=new T,S=0,E=(e-t)/n;for(let D=0;D<=r;D++){let I=[],v=D/r,w=v*(e-t)+t;for(let q=0;q<=s;q++){let z=q/s,G=z*l+o,j=Math.sin(G),W=Math.cos(G);P.x=w*j,P.y=-v*n+g,P.z=w*W,u.push(P.x,P.y,P.z),y.set(j,E,W).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-v),I.push(m++)}A.push(I)}for(let D=0;D<s;D++)for(let I=0;I<r;I++){let v=A[I][D],w=A[I+1][D],q=A[I+1][D+1],z=A[I][D+1];(t>0||I!==0)&&(h.push(v,w,z),S+=3),(e>0||I!==r-1)&&(h.push(w,q,z),S+=3)}c.addGroup(f,S,0),f+=S}function _(y){let P=m,S=new Ct,E=new T,D=0,I=y===!0?t:e,v=y===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,g*v,0),d.push(0,v,0),p.push(.5,.5),m++;let w=m;for(let q=0;q<=s;q++){let G=q/s*l+o,j=Math.cos(G),W=Math.sin(G);E.x=I*W,E.y=g*v,E.z=I*j,u.push(E.x,E.y,E.z),d.push(0,v,0),S.x=j*.5+.5,S.y=W*.5*v+.5,p.push(S.x,S.y),m++}for(let q=0;q<s;q++){let z=P+q,G=w+q;y===!0?h.push(G,G+1,z):h.push(G+1,G,z),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Er=class i extends be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new T,m=new Ct;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let f=r+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let A=0;A<s;A++){let g=A*(n+1);for(let f=0;f<n;f++){let M=f+g,_=M,y=M+n+1,P=M+n+2,S=M+1;o.push(_,y,S),o.push(y,P,S)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var wr=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],m=[],A=[],g=[];for(let f=0;f<=n;f++){let M=[],_=f/n,y=0;f===0&&a===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){let S=P/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(S+y,1-_),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let _=h[f][M+1],y=h[f][M],P=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&p.push(_,y,S),(f!==n-1||l<Math.PI)&&p.push(y,P,S)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(A,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tr=class extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Cs=class extends Vn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function $s(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function om(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,o=2*e-n;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:a=t,l=2*n-e;break;case Ll:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,f=-d*g+2*d*A-d*m,M=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,_=(-1-p)*g+(1.5+p)*A+.5*m,y=p*g-p*A;for(let P=0;P!==o;++P)r[P]=f*a[h+P]+M*a[c+P]+_*a[l+P]+y*a[u+P];return r}},Do=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},No=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case Zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return Zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&om(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=uo;var pi=class extends rn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=rr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends rn{};Fo.prototype.ValueTypeName="color";var Bo=class extends rn{};Bo.prototype.ValueTypeName="number";var zo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vr=class extends rn{InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends rn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=rr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends rn{};Oo.prototype.ValueTypeName="vector";var qo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},lm=new qo,ko=class{constructor(t){this.manager=t!==void 0?t:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rr=class extends vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ma=new ne,Pc=new T,Lc=new T,Pr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uc=new ne,ds=new T,ba=new T,Ho=class extends Pr{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(ds),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),s.makeTranslation(-ds.x,-ds.y,-ds.z),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}},Lr=class extends vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ho}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Go=class extends Pr{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Go}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Dr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Dc(){return performance.now()}var ll="\\[\\]\\.:\\/",cm=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",hm="[^"+ll.replace("\\.","")+"]",um=/((?:WC+[\/:])*)/.source.replace("WC",cl),dm=/(WCOD+)?/.source.replace("WCOD",hm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),gm=new RegExp("^"+um+dm+fm+pm+"$"),mm=["material","materials","bones","map"],Wo=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(t){let e=gm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Wo;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);var Lt={W:34,L:78,BOX_Z:58,SHOOT_Z:63,GOAL_W:14,GOAL_H:3.6,GOAL_D:3.2},Am=3,rh=9.5,xm=.75,Cm=1.35,je=16.2,ah=.3,ys=1.15,vm=.5,hl=100,ul=9,dl=21,oh=.5,_s=dl*oh,fl=3.2,ym=8.5,_m={nutmeg:{heat:34,score:200},onetwo:{heat:28,score:150},dodge:{heat:16,score:60},burn:{heat:0,score:100}},gn=[{id:1,ar:"\u062A\u0633\u062E\u064A\u0646",en:"Warm Up",defenders:2,mates:0,chase:3.6,windup:1.1,cooldown:3.4,aggro:13,reach:2.3,sway:2,tspeed:1.3,trickGoal:2,par:22},{id:2,ar:"\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629",en:"One-Two",defenders:3,mates:1,chase:4.2,windup:.95,cooldown:3,aggro:15,reach:2.6,sway:2.4,tspeed:1.6,trickGoal:3,par:26},{id:3,ar:"\u0644\u064A\u0644\u0629 \u0627\u0644\u0643\u0623\u0633",en:"Cup Night",defenders:4,mates:2,chase:4.8,windup:.85,cooldown:2.6,aggro:17,reach:2.9,sway:2.8,tspeed:1.9,trickGoal:4,par:30},{id:4,ar:"\u0627\u0644\u0645\u062F\u0631\u062C \u0627\u0644\u0643\u0628\u064A\u0631",en:"Big Stand",defenders:5,mates:2,chase:5.3,windup:.75,cooldown:2.2,aggro:18,reach:3.2,sway:3.2,tspeed:2.3,trickGoal:5,par:34},{id:5,ar:"\u0646\u0647\u0627\u0626\u064A \u0627\u0644\u0623\u0628\u0637\u0627\u0644",en:"Champions Final",defenders:6,mates:3,chase:5.8,windup:.68,cooldown:1.9,aggro:20,reach:3.5,sway:3.6,tspeed:2.8,trickGoal:6,par:38},{id:6,ar:"\u0643\u0623\u0633 \u0627\u0644\u0623\u0633\u0627\u0637\u064A\u0631",en:"Legends Cup",defenders:7,mates:3,chase:6.1,windup:.64,cooldown:1.7,aggro:21,reach:3.7,sway:3.9,tspeed:3.1,trickGoal:7,par:42},{id:7,ar:"\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0639\u0627\u0644\u0645",en:"World Final",defenders:8,mates:4,chase:6.4,windup:.6,cooldown:1.55,aggro:22,reach:3.9,sway:4.2,tspeed:3.4,trickGoal:8,par:46}],ji=[{id:"classic",price:0,ar:"\u0643\u0644\u0627\u0633\u064A\u0643",en:"Classic",base:16777215,patch:1974832,emissive:0,trail:16777215},{id:"flame",price:120,ar:"\u062C\u0645\u0631",en:"Ember",base:16742938,patch:16765498,emissive:8399360,trail:16742938},{id:"ice",price:200,ar:"\u062C\u0644\u064A\u062F",en:"Frost",base:14219007,patch:3836648,emissive:1063514,trail:10150143},{id:"gold",price:320,ar:"\u0630\u0647\u0628",en:"Gold",base:16765498,patch:12089856,emissive:8018432,trail:16771210}],_e=(i,t,e)=>i<t?t:i>e?e:i;function Im(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function lh(i){let t=i&&typeof i=="object"?i:{},e=(a,o=0)=>Number.isFinite(Number(a))?Number(a):o,n=Array.isArray(t.owned)?t.owned.filter(a=>ji.some(o=>o.id===a)):[];n.includes("classic")||n.unshift("classic");let s=Array.isArray(t.stars)?t.stars.slice(0,gn.length).map(a=>_e(Math.round(e(a)),0,3)):[];for(;s.length<gn.length;)s.push(0);let r=Array.isArray(t.best)?t.best.slice(0,5).map(a=>Math.max(0,Math.round(e(a)))):[];for(;r.length<5;)r.push(0);return{unlocked:_e(Math.max(Math.round(e(t.unlocked,1)),...s.map((a,o)=>a>0?o+2:1)),1,gn.length),stars:s,best:r,coins:Math.max(0,Math.round(e(t.coins))),owned:n,skin:n.includes(t.skin)?t.skin:"classic",muted:!!t.muted,goals:Math.max(0,Math.round(e(t.goals))),tricks:Math.max(0,Math.round(e(t.tricks)))}}function ch(i,t){let e=ji.find(n=>n.id===t);return!e||i.owned.includes(t)||i.coins<e.price?!1:(i.coins-=e.price,i.owned.push(t),i.skin=t,!0)}function hh(i,t){return i.owned.includes(t)?(i.skin=t,!0):!1}var zr=class{constructor({level:t=0,seed:e=1,easy:n=!1}={}){this.level=_e(Math.floor(t)||0,0,gn.length-1);let s=gn[this.level],r=n?{chase:.8,windup:1.35,cooldown:1.4,reach:.85,tspeed:.75}:{chase:1,windup:1,cooldown:1,reach:1,tspeed:1};this.def={...s,chase:s.chase*r.chase,windup:s.windup*r.windup,cooldown:s.cooldown*r.cooldown,reach:s.reach*r.reach,tspeed:s.tspeed*r.tspeed},this.easy=n,this.rand=Im(this.level*977+31+e%7*13),this.mode="play",this.modeT=0,this.time=0,this.clock=0,this.input={jx:0,jy:0},this.ball={x:0,z:4,vx:0,vz:0,inv:1},this.lives=Am,this.coins=0,this.reason=null,this.hintMate=!1,this.dummies=[],this.coinList=[],this.blockT=0,this.pass=null,this.shot=null,this.heat=0,this.cometT=0,this.lastTrick=-9,this.score=0,this.goals=0,this.stats={nutmegs:0,onetwos:0,dodges:0,burns:0,stolen:0,saves:0,tackles:0,blocked:0,coins:0},this.keeper={x:0,dir:0,diveTo:null},this.target={x:0,p:0},this.defenders=[],this.mates=[],this._build(),this.ev=null,this.log=[]}get tricks(){let t=this.stats;return t.nutmegs+t.onetwos+t.dodges+t.burns}get comet(){return this.cometT>0}get progress(){return this.mode==="shoot"||this.mode==="shot"||this.mode==="goal"||this.mode==="done"?1:_e(this.ball.z/Lt.BOX_Z,0,1)}reachNow(){return this.def.reach*(this.comet?.55:1)}_build(){let t=this.def,e=this.rand,n=t.defenders,s=16,r=Lt.BOX_Z-7;for(let l=0;l<n;l++){let c=s+(l+.5)*((r-s)/n),h=(l%2?1:-1)*(1.5+e()*7);this.defenders.push({id:l+1,x:h,z:c,x0:h,hx:0,hz:-1,state:"idle",t:0,cd:.8,lx:0,lz:-1,near:99,hit:!1,nutmegged:!1,pa:0,pb:0,wt:0,warned:!1,from:"idle"})}for(let l=0;l<t.mates;l++){let c=24+(l+.5)*((Lt.BOX_Z-30)/t.mates),h=0,u=-1;for(let d of[-10,-6,6,10,0]){let p=Math.min(...this.defenders.map(m=>Math.hypot(m.x-d,m.z-c)));p>u&&(u=p,h=d)}this.mates.push({id:l+1,x:h,z:c,state:"wait",t:0})}let a=2+this.level;for(let l=0;l<a;l++)for(let c=0;c<30;c++){let h=11+(l+e())*((Lt.BOX_Z-18)/a),u=(e()*2-1)*12.5;if(!(this.defenders.some(d=>Math.hypot(d.x-u,d.z-h)<4.5)||this.mates.some(d=>Math.hypot(d.x-u,d.z-h)<4.5))){this.dummies.push({x:u,z:h});break}}let o=3+Math.min(2,this.level);for(let l=0;l<o;l++){let c=l===0?8:14+l*((Lt.BOX_Z-24)/o)+e()*4,h=l===0?0:(e()*2-1)*9,u=(e()-.5)*.5;for(let d=0;d<6;d++){let p={x:_e(h+u*d*d*.3,-14,14),z:c+d*1.7,got:!1};this.dummies.some(m=>Math.hypot(m.x-p.x,m.z-p.z)<1.6)||this.coinList.push(p)}}}setInput(t,e){this.input.jx=_e(t||0,-1,1),this.input.jy=_e(e||0,-1,1)}emit(t,e={}){let n={type:t,...e};this.ev&&this.ev.push(n),this.log.push(n),this.log.length>200&&this.log.shift()}step(t){let e=[];this.ev=e;let n=Math.min(Math.max(t,0),.1);for(;n>1e-6;){let s=Math.min(n,.016666666666666666);this._sub(s),n-=s}return this.ev=null,e}_sub(t){switch(this.clock+=t,this.modeT+=t,this.mode){case"play":this.time+=t,this._ball(t),this._dummies(t),this._coins(),this._defenders(t),this._mates(t),this._heatTick(t),this._boxCheck();break;case"shoot":this.time+=t,this._ball(t),this._shootTick(t),this._heatPause();break;case"shot":this._shotTick(t);break;case"goal":this.modeT>=2.6&&(this.mode="done",this.modeT=0,this.emit("end",{result:this.result()}));break;case"lost":this.modeT>=(this.reason==="saved"?2.2:1.6)&&(this.mode="done",this.modeT=0,this.emit("end",{result:this.result()}));break;default:break}}_ball(t){let e=this.ball;if(e.inv>0&&(e.inv=Math.max(0,e.inv-t)),this.pass){let A=this.pass;A.t+=t;let g=_e(A.t/A.dur,0,1);e.x=A.x0+(A.x1-A.x0)*g,e.z=A.z0+(A.z1-A.z0)*g,e.vx=0,e.vz=0,g>=1&&(this.pass=null,e.vz=8,e.vx=0,e.inv=.35);return}let n=this.comet?1.3:1,s=this.mode==="shoot",r=this.input.jx,a=this.input.jy,o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let l=r*rh*n,c=a*rh*n*(a<0?.6:1);s&&(l=0,c=e.z<Lt.SHOOT_Z?6:0);let h=l-e.vx,u=c-e.vz,d=Math.hypot(h,u),p=Math.abs(l)+Math.abs(c)<.01,m=(p?34:30)*t;d>m?(e.vx+=h/d*m,e.vz+=u/d*m):(e.vx=l,e.vz=c),e.x+=e.vx*t,e.z+=e.vz*t,e.x>je&&(e.x=je,e.vx>0&&(e.vx=0)),e.x<-je&&(e.x=-je,e.vx<0&&(e.vx=0)),e.z<1.5&&(e.z=1.5,e.vz<0&&(e.vz=0)),s&&e.z>Lt.SHOOT_Z&&(e.z=Lt.SHOOT_Z,e.vz=0)}_dummies(t){let e=this.ball;if(this.blockT=Math.max(0,this.blockT-t),!this.pass)for(let n of this.dummies){let s=e.x-n.x,r=e.z-n.z,a=Math.hypot(s,r),o=xm+ah;if(a>=o||a<1e-6)continue;let l=s/a,c=r/a;e.x=n.x+l*o,e.z=n.z+c*o;let h=e.vx*l+e.vz*c;h<0&&(e.vx-=1.6*h*l,e.vz-=1.6*h*c),this.blockT<=0&&(this.blockT=.9,this.stats.blocked++,this.emit("blocked",{x:n.x,z:n.z}))}}_coins(){let t=this.ball;for(let e of this.coinList)e.got||Math.hypot(t.x-e.x,t.z-e.z)<Cm&&(e.got=!0,this.coins++,this.stats.coins++,this.score+=5,this.emit("coin",{x:e.x,z:e.z,n:this.coins}))}_boxCheck(){if(this.ball.z>=Lt.BOX_Z&&!this.pass){this.mode="shoot",this.modeT=0,this.target.p=0,this.keeper.dir=0,this.keeper.diveTo=null;for(let e of this.defenders)e.from=e.state,e.state="watch",e.t=0;this.emit("shootStart")}}_local(t){let e=this.ball,n=e.x-t.x,s=e.z-t.z,r=t.hz,a=-t.hx;return{a:n*r+s*a,b:n*t.hx+s*t.hz}}_defenders(t){let e=this.ball,n=this.def;for(let s of this.defenders){let r=e.x-s.x,a=e.z-s.z,o=Math.hypot(r,a)||1e-6;s.t+=t;let l=(c,h,u)=>{let d=Math.atan2(s.hx,s.hz),m=Math.atan2(c,h)-d;for(;m>Math.PI;)m-=2*Math.PI;for(;m<-Math.PI;)m+=2*Math.PI;let A=d+_e(m,-u*t,u*t);s.hx=Math.sin(A),s.hz=Math.cos(A)};switch(s.state){case"idle":{let c=s.x0+Math.sin(this.clock*.9+s.id)*2.5,h=_e(c-s.x,-1.2*t,1.2*t);s.x+=h,l(r,a,3),o<n.aggro&&(s.state="chase",s.t=0);break}case"chase":{s.cd-=t,l(r,a,3.2),s.x+=s.hx*n.chase*t,s.z+=s.hz*n.chase*t,s.x=_e(s.x,-je,je),s.z=_e(s.z,2,Lt.BOX_Z+6),o>n.aggro*1.6?(s.state="idle",s.x0=s.x,s.t=0):s.cd<=0&&o<ym&&e.inv<=0&&!this.pass&&(s.state="windup",s.t=0,s.near=o,s.hit=!1,s.warned=!0,s.wt=0,s.lx=r/o,s.lz=a/o,s.hx=s.lx,s.hz=s.lz,this.emit("tackleWarn",{id:s.id}));break}case"windup":s.wt+=t,s.near=Math.min(s.near,o),s.wt>=n.windup&&(s.state="slide",s.t=0,s.sx=s.x,s.sz=s.z,this.emit("slide",{id:s.id,warned:s.wt}));break;case"slide":s.x=_e(s.x+s.lx*dl*t,-je,je),s.z+=s.lz*dl*t,s.near=Math.min(s.near,o),!s.hit&&e.inv<=0&&!this.pass&&o<1.6&&(s.hit=!0,this.stats.tackles++,this.comet?this._burn(s):this._steal(s)),s.t>=oh&&(!s.hit&&o<10&&(this.emit("dodge",{id:s.id}),this.stats.dodges++,this._trick("dodge")),s.state="recover",s.t=0,s.warned=!1);break;case"recover":s.t>=1.1&&(s.state="chase",s.t=0,s.cd=n.cooldown);break;case"stun":s.t>=1.9&&(s.state="chase",s.t=0,s.cd=n.cooldown*.6,s.nutmegged=!1);break;case"cheer":s.t>=1.5&&(s.state="chase",s.t=0,s.cd=n.cooldown);break;default:break}if(this.mode==="play"&&["idle","chase","windup"].includes(s.state)&&e.inv<=0&&!this.pass){let c=s.hz,h=-s.hx,u=!1;for(let p of[1,-1])Math.hypot(e.x-(s.x+c*ys*p),e.z-(s.z+h*ys*p))<vm+ah&&(u=!0);if(u){this.comet?this._burn(s):this._steal(s);continue}let d=this._local(s);!s.nutmegged&&s.pb>0&&d.b<=0&&Math.abs(d.a)<ys-.1&&Math.abs(s.pb)<3&&(s.nutmegged=!0,s.state="stun",s.t=0,this.stats.nutmegs++,this.emit("nutmeg",{id:s.id}),this._trick("nutmeg")),s.pa=d.a,s.pb=d.b}else{let c=this._local(s);s.pa=c.a,s.pb=c.b}}}_burn(t){t.state="stun",t.t=0,t.nutmegged=!0,this.stats.burns++,this.emit("burn",{id:t.id}),this._trick("burn")}_steal(t){let e=this.ball;this.stats.stolen++,this.heat=0,this.cometT=0,t.state="cheer",t.t=0;let n={x:0,z:Math.max(3,e.z-7)},s=-1;for(let r of[0,-6,6,-11,11])for(let a of[7,11,4]){let o={x:_e(e.x+r,-je+1,je-1),z:Math.max(3,e.z-a)},l=Math.min(...this.defenders.map(c=>c===t?99:Math.hypot(c.x-o.x,c.z-o.z)),Math.hypot(t.x-o.x,t.z-o.z)*.9);l>s&&(s=l,n=o)}e.x=n.x,e.z=n.z,e.vx=0,e.vz=0,e.inv=1.8,this.lives=Math.max(0,this.lives-1),this.emit("stolen",{id:t.id,lives:this.lives}),this.lives<=0&&(this.reason="lives",this.mode="lost",this.modeT=0,this.emit("lost",{reason:"lives"}))}_mates(t){let e=this.ball;for(let n of this.mates)if(n.t+=t,n.state==="pass"&&n.t>.6&&(n.state="done",n.t=0),n.state==="wait"&&!this.hintMate&&Math.hypot(e.x-n.x,e.z-n.z)<15&&e.z<n.z&&(this.hintMate=!0,this.emit("mateHint",{id:n.id})),!(n.state!=="wait"||e.inv>0||this.pass)&&Math.hypot(e.x-n.x,e.z-n.z)<1.8){let s=_e(n.x,-10,10),r=-1;for(let a of[n.x-7,n.x+7,n.x*.3,0]){let o=_e(a,-je+1.5,je-1.5),l=Math.min(...this.defenders.map(c=>Math.hypot(c.x-o,c.z-(n.z+13))),99);l>r&&(r=l,s=o)}this.pass={x0:e.x,z0:e.z,x1:s,z1:Math.min(n.z+13,Lt.BOX_Z-2),t:0,dur:.6,mate:n.id},n.state="pass",n.t=0,e.inv=.01,this.stats.onetwos++,this.emit("onetwo",{id:n.id}),this._trick("onetwo")}}_trick(t){let e=_m[t];if(this.score+=e.score*(this.comet?2:1),this.lastTrick=this.time,this.comet){this.cometT=Math.min(ul,this.cometT+1.5);return}this.heat=Math.min(hl,this.heat+e.heat),this.heat>=hl&&(this.cometT=ul,this.emit("cometOn"))}_heatTick(t){this.cometT>0?(this.cometT-=t,this.heat=hl*Math.max(0,this.cometT)/ul,this.cometT<=0&&(this.cometT=0,this.heat=0,this.emit("cometOff"))):this.time-this.lastTrick>2.5&&(this.heat=Math.max(0,this.heat-3*t))}_heatPause(){}_shootTick(t){let e=this.def,n=this.keeper,s=this.target;s.p+=e.tspeed*t,s.x=Math.sin(s.p)*6.2;let r=_e(this.ball.x*.35+Math.sin(this.clock*1.7)*e.sway,-4.6,4.6),a=_e(r-n.x,-3.6*t,3.6*t);n.x+=a}targetSafe(t=0){return Math.abs(this.target.x-this.keeper.x)>this.reachNow()+t}tap(){if(this.mode!=="shoot"||this.modeT<.3)return!1;let t=this.keeper,e=this.target.x,n=Math.abs(e-t.x)<=this.reachNow();return t.dir=e>=t.x?1:-1,t.diveTo=n?e:t.x+t.dir*this.reachNow(),this.shot={t:0,dur:.5,x0:this.ball.x,z0:this.ball.z,tx:e,saved:n,comet:this.comet},this.mode="shot",this.modeT=0,this.emit("shoot",{comet:this.comet}),!0}_shotTick(t){let e=this.shot,n=this.keeper;if(e.t+=t,n.diveTo!=null&&(n.x+=_e(n.diveTo-n.x,-16*t,16*t)),e.t<e.dur)return;let s=this.ball;e.saved?(this.stats.saves++,this.emit("save"),this.shot=null,n.diveTo=null,n.dir=0,this.reason="saved",this.mode="lost",this.modeT=0,this.emit("lost",{reason:"saved"})):(this.goals++,this.score+=500+(e.comet?250:0),s.x=e.tx,s.z=Lt.L+1,this.mode="goal",this.modeT=0,this.emit("goal",{x:e.tx,comet:e.comet}))}result(){let t=this.tricks,e=this.coins;if(this.goals===0)return{goal:!1,reason:this.reason||"time",stars:0,coins:e,tricks:t,time:this.time,score:Math.round(this.score),stats:{...this.stats}};let n=1+(t>=this.def.trickGoal?1:0)+(this.time<=this.def.par?1:0),s=e+10+t*4+n*8;return{goal:!0,reason:null,stars:n,coins:s,tricks:t,time:this.time,score:Math.round(this.score),stats:{...this.stats}}}};function uh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function dh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var fh={kick:"data:audio/mpeg;base64,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",shot:"data:audio/mpeg;base64,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n0/apMlX6/xnls5NiEzp7dUqBTKboN4TYyl80XF9GblbNGle0FGrexqXWpMak1OkxrDuu2sAjmwqiY6ujlORUDBVJJUs6s6VCR0O2HSp0kRYd4iEuwl4SPHUFvCT7MqQIkgqdaAgKAg5VCoApBU1JxooSND/+zjEoQOOAX8IR5x1Qb0qoUGECjnR0ojYmjoX5MsBg5ZWCggYMEDgOB7AoMiosHjRoUEhoGRUWDxoGRQSGuisUJGliosSf//+KijTQ8VFjQFCooJDVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEkoMLHJUaZ4zNgSYJmMhkjNBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",goal:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAADkAADDwAAgNDRERFhYaHh4jIycnLDAwNDQ5OT1CQkZGS0tPU1NYWFxcYWVlaWlubnJ3d3t7gICEiIiNjZGRlpqanp6jo6esrLCwtLS5vb3CwsbGy8/P09PY2Nzh4eXl6enu8vL39/v7/wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBEAAAAAAAAAw8P+Ojn0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAKOD1pVJSAAXwWrYMw8ADoAAAAAU4PVQz2ujFAoCgIAgGCSJGCAIAgKCRBlzQIGAQDEEDggBAEwfP1ggCAIAgCYPg+H/lz/1AAyJw/SCAIAgcwfB8PjAQd/gh///SJwfB+1S2f1cfVbVtsljqQhTBDNdJecRnMsc5JhDSTAZhADgToVb2ICaOu6d0tOUiOcEMywQcIeqknFhQFA4qtCp8kgYGVWz3kzaNNGxqLGlzF9/41573/vadq4u07QYLvG6XbaMghkJJpwPGOzpWpM3hA3B7/+zjECQAM9M+FvPQAMYMfMDDEjTZTbe6YEpuCcfBI9GLkOhABUaL09koSOGtG8wkxVCCo4ieWmyKpFrmxk5t1zaa63zKxrFVxZdKLDgfAKiIZQXIoAhyywo9OcrnEIuJBQMOSK8vwtEzgtdlGAAkZqw5FZEJi1mrRmfiy/ZEQRXV96gkOf8t25WTUoWYl+zwqRQGhhyImFGyiiUIDBK8frMsOEkYn/odDYv9TCxCQu1LmUpr6TDmUFiJ8dQwAIxAQtYhb3ysLI2urwip2zMAAoK1DFxCcVFb/+zjEBgAMCS99hhhw8YCt8PTzCTYjBuSwFchrPHBlIz9GS4UmFHGeki88MK75Dsz9EYRengw5ocux6H4XnsaxaJFDV1J6aoxcNp/JcuZdX8/84zef1LhKosjyhNvFmKiqDRbatoVq/Kov/zABZJSTcDAyNr/RLg6QzmNPdWwED4l8PKAhMGQsURTSMd3PmWK4hGQgAgGURdXS/qxjAw8slXI4kpELSQpisi3ed21uy6f5w7ao9UomrurtvTs85O99Vv3ZOyaQo7LV3trAAStV44SB0Lj60/H/+zjEBwAMBKmFhhhrOZalsLzBixdDCmAywQKBnenJQEw/aUh9+Orsk1MQwiwGbgDI56BFbsEE0cZoaO5cKQQ0A3TC3sXdCwOP1//71/s2plaF/a/PHGhN4aU0zzfeTyKO+TSyd38FPDIokBASJSSkB4WywsXSyHI6LponoXVxnyhDSXPbTuPXgntadPI261X2r0PWLkv4sOHsIir51ibLruScHa0vp5d+Lns06NU7+3pV2fv9Pd092hih34vT55BVjWiKEETV1OpalM9tkaZAABAKblEWHPD/+zjEBYEL7Nt3p5hwkYSbb7STDdNngQH8BPa2iWVnVI+FOoF9xggAHg3QNNUMQRMRQ3UplYIZCT1C5nm7plyFZF+GXDG9hv9tjh1PDsRGCcssXbipAMmvcmmhMff+k1k2Pcp6wsGzhAL2RNoFNy8adTqTWtokZAWcqHxKCsFE9IDQqcT1I+W2NBYTBpmnQj0nChHZSgk2coTCzUSQaXO5FeoXTP8naolL5CPUN42/4+kZeWMo7v9Tv/Pt5S4c48343y/uS/KA5D1uRfm6iAAQU3dwGaTp4ef/+zjEBoAMNW9/p5hO2YMv8DTzCe6d5OAnbjRh91QqGuph6kkRjTDUuOzmeYnmGs7AuQQl90HaoZXEmRz5mXZEQrIxv3c0dEy30bT/qNOplo+Nq6s91rV2MYxUbNMZg+jfPQubCDUboHRVtUSIBAJSTgq3RnkSI2RzqU22NkP0tTtYH8yARZMjm7MHDV0aW+U/bsj514NvlQv3AOvE7UooGchl3hHoZ2BFO4YLVuU6jMyuR/PON3WyM/roejt/V//XVW+n9fon1I5gqtc4ySCQSm5AJCjUyo3/+zjEBoAMYTeFoyRlOUEQr/RmDVpELSiUiKwQFB4kEYpw7OVEZLOV8s5S1IKN0nESEpgpp+o63//u6qM//6qa+mbvwEap0ARyFuEv7/c/+IEnpBjlOWFN68cO/Ia88ffsFtfPapjN6P8KmJI2QAAQUnLh0tJCFAo9ZKbYJFxhv1u+sLT0X8BqhFkZVevPPNbhjAOlUDeauOhB5M+t4aY/8yElyN5zxjIyBSEXtfOzzWQMentqq7kGLz2IqnGkQAAACU5QYaYCC7Qk4qpVlcDhsOp9EiOR3Rj/+zjEDgAK2Id5ozBlUU2RcbRgjs6sM6AAkOqE2Z524wMEFYAHaA3ci2+0lRQonHKIkQnFHFvtABggbPihvjVPyxoUJn/lAvIIoX/xClC4C+8kBLTJSbkCgcLlBIpEFeTfgELWSfCL6FhIGctOd6AVSg7foKpk50zEZYF9Y6PMmjangiOavxCB1vkL7jaSqIs8VWDj9a4CCqGhrIF3uHvOkMpOVbtLSikkmm5AtxCVxSnD0nD+KhcVo0O5Ny8W0u6tfaVO7FqCeh4dEMLJ3RcrPjgEsGhhmdf/+zjEGgAKcIuPpIxSsU2cMjSRii4wIvxVAtBommEFvraC4EHk7mVeFVXkNx60uOFFKyfWj73RNppJuOQaYgiFEiwdRHtVUKIwAEo2JGlVIAIp0QUHKtdMoXoOzqqAgptS7lNMQTl1zyNN0xrpsdL0Z2yuUzXjpFbg6VDRiXk/7n4wV0vbu6fSsjbAJMNVgSleqla0rMdRbRUMtUpX9yeggJ1u7Rzz7yMLIIZtVXC5eyG8KoobZ1+OqwqjCAzGe2ecs2M/PjcHyqupXc/RCm2okmSGsBk0nnX/+zjEKAAKDN2FhJhu8USW8PSTDdYbVyAIskpNOCRAjO6K1DiR6a1ddocdaQ0GmD0Uxh6ybT1N5ycCGhq1V38jz6dzjf1+xcZyqSnfw4qwlPkQgYCyw6pqw0iys+j+aoqJve//FfFa22kLJaSbbkEpCIXUCgV10xrwIUYG1FhvTdpQEBEOb0xJxLM1BPclglqZwcVPtToLK62EowJQpkPA4YCgoOeCyTmZU/QddDP76JMHwcM3uE2nft1U3ZtAEIElJOCJQel3abJljoKYyTkSJQhE8FrbPbT/+zjEOIAKhKWPoyRjcVYaMLSTDg7Is3MQlmmxIEYkIIJRFcbyelmdvf/tLMQluytNqd4Q78sH2P+1zUk6kzlzFxgdUP4a/xznNFQwgPXXNEAgkElJwAwSMtBUVSayVwwkQMKzQCG0jCLjwcfbYYOEctumrz6sw70kjEci2s3RKBVNe5D5IDgsrru7lkUUU8ziFQXDAo50Y29CqguJAaUIz4lv2tjCJKq1YeIxLJZlseQkqwngwJxWJh2oD7AiZZhYDFdIbkax2YBybg46GGABUETxEaxyCqX/+zjERQAKoIOFpIxRMUsNcLCUjH6peJDb954808NCCSobapOmxWiSHzhpKT39P3lp3Fl3lkMTATSTbcgansFSFPDVCu8Ng7SiDAxLt4J7Pxj5X2r95+a6U3A7f00chn5WrVUdzM9VI9IPFI6tv5oTbKKcQey69d8QRR29tTNYraelbanLp/ShMPBmQAAAACpfwRDK6ykkKGKtZcoeO56cXfKw8jRUtkpuUkzLay9pA7HfDxiaDkNcvNnv3vdVEJBtYkCaDZytemPYNQaMv6eyluzwyIT0el3/+zjEUoAKrMWP55hp8VUQLvyXmRgSy/TsJVLfTQIppJJtwRX0vgwbNJWqvsPk4HvUnrkqt8oMekd6h+apstzHDYe6oiT0cEsjwTo7u1ayZx2cpnN+x0sjPdkbf9P3HVYIme6EZZqm3CnomW5fQQo+78ATcvf5JZtBF9FooLyI7Ptq7sCIPDxtQ2k9MRMn5WOrLC5nkO7p5n9SzLoWmRwKFRYWnGGXJi1zDsQUrINWpZEY1pdIbiu0elQcuLNUg0v3CrmBmrs2ggSCs0KGRIJ0J14vJKJH1Rv/+zjEXoAKiPeNp5hLsVURsbDEjS4fDKlLhjBDEqA71+pw9vIyZyJfJczcBZWNHup//lNPMUalbwMEwgXGCkKlkbDWi3FvnnCbd+v0ts6bvIAACQA3QBLVxwonpyqNXNsNYW1YBXKx67tKLWuyKZYXoOCCzlrijvuzb65VJmmJp/LA+Jwla+tHrH/kaSY/0NbiCRGSE4DicnUWvy1Oyx7LEZ6oAAAACruBHF2FWlj4Erli5+EEN86XFkeVMgm4RIgc3IQmm7UWbjL5tEKhXyThAESZtb1qoSj/+zjEawAJkKmFhLxsMUmVLnTzDiB1DK4vu6eln1SI/r+PgZcZmXeZg+NrStFebPsHVvhnWrX6q/6oQQkjVWaCS46gIIrC5C5roE0ydipQZZMGBdYIBKjFzyKaEdZn79D2m1MEdcLaFUOoArFmAdcARO5wwBqWE1RynIYhPEDlsiuvtqpr/lMahdoftigAAJAKjgCgak5abgfbgJXujysEk+WPIaMxYjq4mxcaetfYd/I9lr/nHJ/b5RoqUqqZCgY+Dt8hEnRHZHShzGL69EiIYoQLPMGt0+7/+zjEfQALQM91pL0KgUwRcLCTDS7tYcAhl67EpFn5vauEEBA1VAYE6x3VZrkDTlCrADCxMnaRulPtzmDMy6Eu9SbY7zuWPRGsXGSKRUO87RV4dAJ88JwQA0TggbLvSpJHWkTBhMkwi0VWUcxZyo2vcQ1Zi3rVWEMhAAAUFmQPGx4NwKBUkRRKoVZRQ1A0MzzVxhDKS+lIzNfqz4Y6DmX39YfKcO0QSOJUwucKnSZQVHQcHjhAIyawMu4yJSxrezs6gNDCjrLcRPpf30XVNgklGaoKE6MoqHv/+zjEiAAK8Nt7pgR4kVcT8LCTCdamUmiEwkHIagEwJAneDtYdqs/ttnXsP8Kiei0p4JeRxCxLr5Csm4PMFmB+w6bB+QokX6hpVVwuGqQTelbR79Nt79oeQ5QjJY+YdTUAAQITu/4gwmYaCuPBMgI3QZFwtVgW4tLVLPvhEC9Kvlc1i3plWNMo1IZIbh2AznMULQZA6zAjFkm2DFqoWtVo2x8QwhEaiaUqe2y1zTOnM72pV944CW6u+hCLUi4bZVdYHCfcKkqX6OSg8piFk+gKItUrlkDXofj/+zjEkoAKtIuBxJhn8VGTcLCTDWY5qFxdfbjsrhmdily1QivHpXUl08vXokHhYgGXz9LBpsMJS0TOWtQZLnK/32+pvbQq3jhABSMygPYmitPrb6xsS9eQyoxFL0EHYmlPhS9TQz1NdCc4SKQQ2FhKFDLFGmqcDJRtZZm605PQnpIxHfelHU6xUe4IkBxpSwEiGjCHsXey35P7plzQBUTPb+4HkCBuCEs83G989ULbCUqIIeI9YOCMGJrwxAPUVD+SPZTeGV9OlphsMFgMmWFAoOAgsDgUCYX/+zjEnwAKtIN74zBqwVYY8bCTDkaCpZIqwWAb1k6SX1/wiYHpIoU3xEXsqnhiMgAAABFO6hTwGJZTciSlooDeIk+rrDMeM2wVk7lOeY5TXNy820PzUMcg9CUksseKsARwAcNaSjExcwgivUhwXavfdKClhA6hpd7G0CZgwmDhyO3dbcauGULp6YgABMSCzI4DgrQOQGg0BWuYf9ktOIkjatE5AMBGdZpFnM8loAyankeruIuDdjJiqUhltoIDDb4eE8w8UYVOb3PQtKQEgMC5dRuOfci17f//+zjEqoAKiNuBhhhs8VIQ8fjHjRb6XWPiqpKXdUQiI0bUcYYTozrqLNHj4SYYGpISMLqUZQJBeb8C5obWXhSXW9yC00DhPbzmfS1DBxhwgkkQRKmZEq5GUIMascCRsAJcyomRWoyPY+tSlKxv//1N9E/kYAAATUbgqEFn7FyoCJ8oLpmfilQJ1zBp5OSb//iqOT2BCqvPrOtNYoWhlCuLGcqrO4aAwKkQ4HDAhZCxdi4qWHPwoETTyeHGLPUd/a93zL+3csKwpqrqkAAAAAqW0FB9mzUJsS//+zjEt4ALaHl15D0HAVsSL3zBDlwVZGpUMPM6U0unanPxkwjyvTM++79xBVJu8kTQ2bcOQC6ihNQRWGl7E2tfirXuTGLFkzRsk/pZHUFcuCarTLmsRJuTXfardDuJAAABAP9Ag0wn0+CHEIMLZQDgl6sjgXl8aeSqEAKCOoxi8bfHyrmMQ5BJEkIAyImvD6DySaDQgEpIDjz54e0SnQfBqEN6X4aMKtYWsHqfRT+32832VbLAAACPwKoGGmyUgB/N7NH6RcIzFky6kOIlv5hOvrm2GI2m/SH/+zjEwAAKxLWT55hn8V2RL3QmDHwMRBEcyLtJnrY3HLJVfbJLsCUz8GOZ4kxCJEFZW+88+HQePDDUPuFUMYIrDaLkt+nruXVQhgAAAEFKSMIlmz6Qw2lrMRkkYAMKV2yRl+aSLU/okr+PP56TqLJE1Nty801dFxBqASBSKi6zAREI06ETqhxIYo5a+ynONVG7iO96UKWWdN+re70qqVQgAAACS3W4GbRsQaTNlllkEZgOMBUhof88kG3KPV0Yw+WmciWl9TORW7EthzazZt0D9p3TKHgggwz/+zjEyoAKtGF1ozzIwVoMrzhmIVQgPToTE4bAzhUeBRZD27DJO6YYiZtfv2/XZbXMwgAAC5tgSg6q00FCMcOHqFbMDoMGCIeVRprirFvFV6+7lylu5LvzYyOt2uxGUbq8uGUBCLEdIPZPTQLj6iIFhKedMjf8JKSK5keQM1ljxKSaehu6LGFuy7mV4yXK1f4QAAAAEpZAp4sZlg2hK9siQUgaL0kBymgo0a0YbDXXJwwdj6Xs5SkWp+12UjPQ2ANWHOXjXNxqA1F5UOpUOytUt9ZFPyDpBFH/+zjE1YAK7L99ZLBl8VQQb3yQjsQ+RVN+8wqQqcQwHiJgBmSyGvk7ft7FQq5y6spzIAAQNIpySA+LxwOPvrzhWrWFNEsAyPTJi8sFTznFgoNVHWXSApCIzcMcjFk5RctYD6hHsikYXL8ryV65ZXLpUk35e2lnO+RxuP+RhmIqAoSHnFqjjyulN3vpYX3aVZkQAAAAAAf8SI8kRTtsKVhhRyDNNAHRKKoxi2tp/KwxFhniKFMaTsE3WUYSX0aYzA9aRgsaniYMiXMiyP+6GkKlGzvzbv+0Bgz/+zjE4IEKxKV75JhtYXgh7ryQj1DetrAxaFU2NMGoXa0XNtQQphNUn76dqFtrqEAxAJTkoOCQx1H6coWBjLq/ah+sKEMiHwYiaXT3LC8VGIV7dOFtVYjfKZDeKlUQciUcd8yFhcSuJBMoGQqPSRY0VYysBNYXD6VKIEzaqlMZceFDKN21yT77X01RaaECpYWVx0AQAAAAClJGCcBI7L3a6w26LCRSRKIUk+o5YrPVJEGumSoizm3DqiPG9UPQkq4mfjMrE/GxzKA8av3zcbUtCNREtL3Qw4X/+zjE54AMYPdxp5iywX0fb3zDDaxNgVZpoSMrIkA28ORnS8/OuEQ5SlvUP+St+loYAAAFORCI3xHNrfP30RhYZWhiFjinihC01M6WN9pZmOiSCx26/qMNi9emcchGxwIxlE2yJbSDzdGPBlCseE0KNWrQnqTnv9ycfuRkZDOn5Exf/RQHokSGl6jEXXfZWuyxlzAAAAAAASm4D/SyKhSnaio/alG1sAK1iU5kPj72j2POU8/MMREEzjibGYuT6puabVK0sknVZzS/RNsxIxmePvUH7dyqgWL/+zjE54EMQNttx5hygYkP7jxnmPCKArZ+qr9fNdPn9kTZn+tiBO9/j+We8YlsEf9/99DH+Pkxl3IwAAEZZ7gWZBI041OgaDgy4CQUOkUJWka9pjOe5SjHIgaC7QbRxiIC4kERwAgmFQqo25RfHuNjopebvkAoYk3MWsmr9VjXl2kWdZB9w5H3qagQAAAADWCdDqOWIUcAGkyz8DlFmVRNCbqgfqGl1OslC+v6JmA4UTZI4DmMZAu5u5MBD/wP3WKmcNp7As6op5r8yGtYvvPIz7hm4M8Md4z/+zjE5oEMKMVx55hRQYYibfzzDlC7uNWzgbynPqn+LrtHqfVm/T6+5f9tf9/XbdNKmQAAUnJRBY41Wqr9X5dqdQsDiP2KWJQ3OomsUpLLCBQsolj827yKmnno2fqWbep0HdOP2ryTMPQzzedj68hJsc8dUXDlYoNeOUNIRwjVUgk1yLaJgsIKRGeZQtFgeybRUYgWUodkUQAAJJt2RgcusgUS0dQlyxYLG02yURKLU0C0hVj0JOiPMSOTYaG1zuhGYgm86RzY8irAnYyE2lnJ3KL5+rOOnr7/+zjE5oANIJlt5jzHSUcM7zhjDHyRZ1VprqtCu5G391f7a63f5+/zuir+bMndqVQjAAAAADTkgcUU9jG7DVcJsg1WDrKlDDlYWpcsTHM1LtlnoATwTTGm+i0ZDYY/iXPCZBpNnqOwgGKxamQGWO0BFW7oXk6s+z5G5mFNUTT3JQWSilQqh4nNRZK3qiWVgJ6WVZ66pzF1o1MwAAARl6wDC4ckUG5MJsHVFQWgxed6MEwQ31Se6jCFxwnK+8zMmNzLO+xCDvUGQsEA6oyhJ4vsnGEkGQuKiov/+zjE6oENRJtpgzzJCZIWrjzzCihgMYeXqPAKgfef212WPa5jvfqcGONgQEAAAAAAZg4LlYF56YgZdS2SYbpxlKVA+iBOAUzXHQ1wXcJFEKZH8OTAcjyKnLgDEaHkIIHWMZFVnyRKhClp43Re558ETry7GgEMiU4GHDwC9pEup7VAZaVUrFJgcGVSc6m+y6tFx95taa2HhiqWcQIBAQALSSgKSGyQxS3aqs06QQ6KiEpTLF528e3OmvDvC+iDXjUqWNhWlUi5L/UAdKkTcgixKlm0z0RYDBz/+zjE5IALkNV74KRhqZ+Z7fzzDlBxtQGZF32+oJC5Zg1qBum+cZYo6q6zTBgqAllUsTpGiCClVkQkOoRKu2Y1tpUhZCK5sclJRPHxVmjXbelTacFWEn9GOIrhJ4MPYT0W/YSt3XP7nfaftYU5NKXluuZu+r+DFCAXBZQegBZxiFAAFnAz+rpf1WLS+supNbsQAAAC3+QoTudymN9WZkyoBYg1nirOR/MTYgp+PT/gJ6GmHuLRrA4ogXbNKa1XSAG00N8FQPzZxK9I1sRWQ3QiysBi5+JRZSD/+zjE44AKyHV1wzDKYbeSbLjHmSjRZ4ueQpRVpsctZtrXIihe8+6pSSZNJ1VSF9SZjaOEkpLVNC5GQjtI5jjEZJiBpTHSrF7QFlseYXb/XqwsbIimGRDZAiuEUNUhscyzhsaH/MhRI4CImNOEEzlLTw8aEBKXZwD2oy5qaJAyQYQHEssqpL+4CH2pMSAAAAABbdgMMYilN27HB7pkbkNSZP0gJkJQSFgGCoHLkFoxOpKePbmuw9Pzaijl800zSiGzQi8yzZTiuZmaJkEWx8ziMwjEhEceFgH/+zjE4oALjLl15LBj4XAcL3CUjTa9oNIDO8CLY7udPubPMhZYiJEDhBSnQIUcYlnV0RbqQAAgIJUltD8+RSx6E6QQjKLttlmRQWEwSRn0iqPVC30jNPm3rqzfsUqQGOITVM75daKZVeax0+E3mej7b5HneH2Q//n+XM/pFv/XvwoDRUjFmizsXM5B2ZpVU6qqYgAAAINtwPa5kXCLXdpH7OhhcyZDyLmxxi1YlM/Viwi4MpphGT1qPSdIpyMOdRy2QKmSA5krLp304XSSfVrX6wM8Xk5mwJz/+zjE54AMsK1ph5h0QWEU8DCUDdagXtKHwyK9nCznfafsfP/7ebrvnV/7kUPB3ZFnvrRr44VlUdiAhEopbZGGU1sgYLrDoMFGi6MoPsk6SzetN1uIEvCk224avN18QB/0cEwZTVsAl2AFYK4CrOJYuPmrtr3PcG9jmmZLpnCmLGuWZZc8oCxJQ9G9CB7KFR+pmhrX6tnCAAAACpJBZuiwhaVIipKgpSG+PFYRLjGhqWDD1NdXO77pJUKWAx4aDI8XiH76FxSzZyM+wn2ucLk82872y6x5yhT/+zjE6gANXL1r56RtQXii7jz0jLi4f6vyqYxxkqpLVt469czp63HlY9/wFkiAAX+dv1GZ3rBRhVUc8yeD7LirnNhYMs8I1E9FjK4kQCQdTcskJyi5TPCL0MB0uBlBq5RbXUV6DfwpyLQVEDFClhH/lDrFWpVlOERH+nwLsfn9lUOogDCUEEPeXc/udNWrsXWqlYQzAAAAABa8YfYSZJgGBEMHUhIGguBshGQTJgDkIXEhMWxJHoMYxGOGYAgS0YBgEdANz2NyzQKJCwGBonYDhIFHErXIE5//+zjE5wANKUFpp5hywXscbzzEjTQeUAZ45Qt1OyZvU74UoeAGJiJxG065r2x+m2ICAAABQqrFEoaRXlcs0CFGelCuVthZFTYoSADgNM4xEmmjIuYIUcOO7/DD8uLLvZSkseih0SC1I6fUmrVz0rSgeMgoeSyQDQ2/CSgenQuux5GaVQhp7i7722CorN2lCyx64IAAAAA15k/MMECVfZFcu0iYRvoeoR6DwLifytbCuCpEFyAdiISMwKXoNU21Um0C7faVaPh9BfUhcJPknsIEVJUax5dg6Of/+zjE5IELNPFrpLxrAZeh7LDzDlC7aohys1t/aztMfkWtjNvls6qhUTvbpu418Ju3kRarLmxA9FqpkAAIAg5NvwCKTEIsm8J4UCxAjHpE1RRSMgdwjJ2EysGSv5Roe6CilcNP2dnAwCbUJiyou6ZQUeXAQwVeCBoNqHOfe+cvSHBHD6UlEFXtQpzkvRQFODJnbprtMwAAEJOWgE+9FaRIXQAoBSAoBjVBJ+JrQIQcgXZCKd6TPLp/VhY3bh2m1JJDT4TICLfZLGs3PMvkvaD7rbvtfrF/+GP/+zjE5gAL8IVlwyRjwYiXLbjzDeS16W1vslcd/u718z/7Ubhv9Xl0UAG7M3aXjXOyMBqIS9UIhgcRDBliuk+OjQ5S8F4SVQuDwtAyQ00Xpqpis88f3vwcuXO9rjAnFBFHHJxOa7xnmTAybxMR4SqSkZ5FM2POJxbDcj2aF1QxqFTzCzQAfAQnLHsc3S9+11q85WdbPhyxtkAkq1LHQQc6ws44JeWYcI1TbiUzuKNecPu1u14ZzASz8lPNx85EsQ/Eh/1Ukyz964NE0/g8tTudcYXHknjShcv/+zjE5oANRTNhh6RRAWmQrjxkjRBLVzpCRUmacKNeaqDB6K1c25AjCBL3dkgAAAAFtyiKdVH7YyQXBc2YJxMTpXACxwI7yMexKqyOguaT+YpUqUaqQMGI2TRQKNCpO4UasLOEL/RE9/44dKCVyVPMBec8sBcmf7ijzU4UcE12Dx8bi3QtRa+L65q4KiR6KyCztc3AAAACU7JRYhXZL2qTWN2On0do+WRQaWW5WsgQSOJOhx6Ho4eODEDwRXoAqSZkwLBqZ/na2JWNadJ7l+dNN8siuHIGyF//+zjE5YEK6G1poKTBCbsea6T2DhjLU1FDPhIMAJ7iObIKc2MKtcu7d+lJRjZVocwAgJuSDOVcW4KgvlGOAhNowtyw9AkgsSjIeLMawI0GImPJowjZ7FfJNYKnILbqVp5dYnSnuyAzFMkCsnN8ngcy2YYeEzgXYgWSxxM0HQXfTU5o1KYs4wvICNDVW9dHixCbEAAAAEtRwZZUSRxKhw5AU2DIdA6PxpE8dCc16ZM6pQoCcvYLdLYJ291bCXSW8BXvwUZBFpBX0IOeZ++HYvYjMXUHggcEDJv/+zjE5AALBM11gxhp8ZkbbDT2DZgrCLqXHLluDTQoQllSQqwSxilNtR9G96Rr2K0epIABAAf8ks3voUieT7Yyq5ElUwk3PJrmcZXM7IyuzOozIKe6I3XwWvkZdxMDUqAg41Fs0Vh7BVshlCZeHzreZbJplc8Fw24b+zkDRPEpGhVyVHC0lGKo3osQn2JtjoZQAAAAAAhJuBOZGIPEE9QmEpVKxICsDKCQI2jR1ome8jbDCrgG5xYYs56gst6TKJdF05bVEKFYol/nyH7yoDrPkqlEe1qAisL/+zjE5gEL2OVlpLxqgYkVrHz0jaj65X3vfo6L+k3k9f/1dF2+zxXv81T/9/Pqo2zefXAgIEAIuS0UK0mezoEbJ2mHM5D4KTOKFMVTFEBoGVQ9lGtzbCMCd4RSowd83AAFVZKDKH5kR83NflOHMtc5ZQokTFYsNe1bLGrJruso5CJJRphHT0MvZap9gAAAAAltwSzEfMLfMVby8ewMMlZMIxEQ0AnFZJxk/Dz63NN3IrMJizeWc7dOuCuqjMOGUGGrJaleZNoevety57vFCBRJkWqdETisDMP/+zjE5wAMbK9hphh0QXqcLDDzDlDUpR0oKPQsqTMqpDa7mD1iM4OaLRrNax4qXfWjWIAAFNwCWVjjG60udgGgxOCWPIlqQkgSsEIH0aVI83jWKNNaUu+Imx/M5BXXIGcsRCKyAcAjJO97nFzVo85UDK76kHBe9lltU4mllE4gO9VSs6AAAAA1ZvsGRALjbWxNP5SxqKJnL6Q2WDYg6A4GIRqjw+DUvYvJJqYlNw2XQFh9uzqeLmB5VEmTXTSr1ZZqyM0LB8eLCh9RAPCcIBQqZPhY6dAMnJT/+zjE54AMsG9f5iTMiWIY7LQ2DDhqVMOztHG1p95rErja+/XUZQ6SAADWZ8tYMN9DhuSCCDMo1B7Bqxivx9K826MaTQw/2cPlyUYOImBkN0RB83qezSEpOfkqjhViR2Y3bMFgwb2G0IsGZxwjmUOOAANlHg6Yp1Ej48kBSEqt1SwiO1oNo5tER72paVFDb3A5GSYAAJCMltEyXT61LMLD5aIg4iQUBehtKHDUuRB5KCoL1cBHTEs3D++UOCUNoHaGZFe9K97O2BzUeAyieuvnzOwvpOfsX37/+zjE6gENOP9fphhygUOPbDTDCeBvtnNi+Ef27iQkcWlsJjVi7DaQp37yb+qNxgAAAAJyQZxdzj6OguLBAQB8m2PZlVJIn22FQrZwUTIkIGqeW26KIWOYLk3S2JFblE7YEOp0HeKWXPY5xwdKLNfLsOe9M+wfylKSN8zf4eW8mYyiBhYvk1mmqwijtfhdXbLKuwAAAb4nF6058uD8Tlo8AiE4AIeDqH4+3qJLp+lHo9exWXlqLyGmBAcaixaKQE6c7CMlWU07BhxdRGl3BBAaaxKAwiTKKUf/+zjE7gEM7H9ZjDDOwaoUKrD0jlCFQ+ZhJTUX1AU41DTk40btoairUyh1L7EOuAAApNwe7GuGWG/dsMjeTAxADBsMjFXowHTz2pdqaMrX/6AgbwBEDbCMAWykGhs65kwvuteNX6prk4hWs+1oMKMAhG4VPMCMBxVIVUhIeUux5+M3qXOk7KqkKuDaKojgAAABLWRGvJtBItofFcXAxMzgrebxE4wP3BBZl8okayQgdY5y9QldjS9x7PfdvT38kL6C9h88fK/8plaqSUf+tPacos/9l7UcPgf/+zjE5oAL4R1hphhugY2hqzTzDhjLd6/uW+8n//DNCDvevrP2o6/LfI7khYAH9RneXFijML6MzFCuRhSqVCHNXUP2V+iSOCpPSgPbaNmrLRcuOKcaO5CoepgGL4hsThAwnoyNiGpea1eOh5jjINqwSKzoufMSVuOXclagi7vZLPj5I8tXe5B5dTCAAAAD3q5SN7+MeqJlEgYCGNSqBFoSjDiaA5UEhMKnMJmJPDXB9bRi6K5Eo7EhRMMLESIq5SS0dgaEK1pGpRE4AWOchAPVEfe+59KujYb/+zjE5oEL7I9XJhh0gXeW6zT2DWDU9XPlfVGHZtRPbFZ8T4iw/mS5tFu/7+0e73DuX/3u5fHUAAVemhW4Hi+XmhrXnR8ZLYB6aJCyrT5yEMfCNmt6Z2PROTny7oItDx8p94Oi5+pRN3W7rzmN9tkhMC7RcXFUsROm3g01UkeYkljPiiiL8ukLKjRRThi9/qMKGRAAAAA1x+9QDO3WVrBsgASsSU00KeI5Vq0sKiH6sVB0AowWYOEZYjxE+QMJLTt0ptyw4QsNlWbhk65tPatHyypwrDqWrp//+zjE6QEMNINXgTDByXcX6vDzDhDcS+aC667HUXzbOmkjbx3Ptu2radvksfyoSjw/KsCV/n7O0LnQkSk3JJIJnnlbvNcwukeRFG4WCjp0m+RA/qLKJXuHm8xGfBq6dyQNBzOv1UIs4DU4FMu+R2fqOZnyi2IJrCdq11ybTjyAismrG2jdmcsAIo91n2P3LRwAAAK/PmEraZxYSjZzi2kGCSo49juKQgNmBS1EThgNTLlwxNFMsJ6tGRchPpSyKqxMhUm6KsN7qNNsDwbKiNZQMDzTR74TvNL/+zjE6oAN1O9NZ6RUiXGVK3AWGCxJriR5l1nIPB4cQUTY8U7HHVNqv4587p0paKyAAE5NhQfnOLx1RaHi4AAOISz7i5QTogZNM43UIG7JaLWN8ZiPm6eK1/u7nZ/9KnVI1narT0BT+3o/cjwtmhgVluz2/7b+/db7/9vm8PW9U01gZ+M1tW/nJpO8NwUJUAAAAFdkzWVuHoS4jAqhB8XBCI6UQFAAhNVzWCizlmkypSMyV6Ns2MzYNSzvepJUKDIkjgwuKYW9rXpZzu6aoXM+cG4cA73mUpr/+zjE5oANNLdNh6RxCVyXK/TDDawCgBYfFTg4fS9T0Ilr41fnrdXImaFipIAAAKUGvF3EtBQ5MHELcEiQ4VCmTIZKu0Sg81cRpqVL6ISC5HaNLBkQgkCJcPFT2GFpI1ROXIjcKpKFNQ3Nj2HtTJzhnybHnbUoaNpCNwwvDYCQ+J3kiW8k+dAwVFyRWpFPqAblBooNArrw3D5gAANJZ5HhNp+KZQGYpFMEUtnuZbtrlM58jwqEBU6FLkoZTxpwNNzQquUak0sTIkX1+T+ps5aUI61CSDBW6pH/+zjE54EMVH9LJL0ogXeQKjQGGDkApNqAiDIoGrQSRtQbgZwuLjIi0BpQdZoSUVA8URVb0vQE7KTXWVo2MKUFiNAXBKmIIDCeG4dMAa+AqsTtiFEGoaiFnxJiz/tr+Y0XFu1OKdSrG2Pa0lmlP9bEofY50qLLHJa8ApvckU9x14iF1L3+jZf39FCyvZrqASL7PLxH5dFMbAS4RoE+lk4KUSoyWsfKEn6FDo6smaCEaJ5UpSoak68mBWVbSX2EVRyOYk86o112PnFXs6AgaCZNKQCT5ts4Ulb/+zjE6IEMLL9HhiRQwbYXaCj0jlgEyXYi9Z3pevkK5lqnkrysOsPZPl3pJNBns2p0AT+C2CvgqJhVxyEuQgekWcyB8wz+UrG2N7Oy9RPpmKyq2kmk+HmPExKPBRuMXhUx9+Zu5bQRjs5dkhyKBYgSBI6AwmeOHRgdUw6LpRdABJIkNWkvVPSMJ39iFQA5ia3UMfU7FCVpzwgcwGJLDzVqWVZ/LSNUqEvCuLi1oTI2nSrHeX0d05xokeC1P42Z8S19Zg6ONFT40UOgAqMcYPxKDV4dFkizDx//+zjE4oEL8IdAwD0hwV8SJ5SXpRhhJ7zwGHMfMuJA4OIoQxC/sX/q+sAAEAAZQAAAwD2/qxBmzGORuAGypcGwimE9AEZQPAdCCDNEYQAKiAAEM4aFkWQQ5xIwzI4DI2WcJ0io9k+HgDPQz4MAEaVSyfSL5q5UUQ8vnhZcLhxnBBBc0Tap0UD1adAW4h4zYYDFuFADaJ1JaKN1d0m1OnY3HetZaGXLZWIoaJ7IL+ldCg/+QQ6V0jA8VMtkUPN9dX/Wgz3UvZP5mbmBcNDM3m5gyJfdEAgAAgD/+zjE6AMMxOMyJ7BxAWsSpog3mLgAAOXgxT4jO/42iZzsqrf4UCCHrUz/gA4DmRRwNJLgWJKpcCpgY4DdcAMTFFkvEKghQD0gy8I7BubSXZX4rULVBdwBqBpQatDZRDaRitlf+FowXSD4wbGQuiJwEHBdIP3BsSvVr1f+LNIILiGWIuQgyo3BbhCYg48jK69WvV//kMIUWcRciAs0gA54jod5FBZo6B612LsWTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6QAMCG0qVPeAAqYzJKcxMACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjExYATfVci2ZkAAAAANIOAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",whistle:"data:audio/mpeg;base64,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",save:"data:audio/mpeg;base64,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5vmDVQtEar4upZXQ+7GNue6fFGvcPzfCpV1E9b9eREi2Fz++QrknujHY53/vu/cJAuYLwlQV4cBsmmJIXdNEHIwaJanIlGY6FLrqkC6skHZ6doQ+i8QBPMlkDCGZFAG4oJJHJZU28Z4vXHBojueHZSOT5EaFokkoGpGIh3Y7QnB/IBVCkLY85SZhtN8emfSi5S8EyFxZdIr/+zjEnoMIiKEeTSRggQYWI8mkjCBmGpkD5uO9IEzNQPZXkUMfoMp/6pn9GDlUduIIyOQM5ezSCMjtmgAA6b7vAgIkFQERARJ6J1aWAIkPxgeCpLAoUArAELa0nQESHpq//USCqewan///GEQkhnqTTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEvQNJxMsWDSUDAjogowj2GblVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEsAPGnAMpIIxAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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sSpMZtMaOY8ZyP2uG+7jRfu3eBuFCK2kEnnehmyifOmOmifPoaYT9x8FW0rfzycVyiBVdBO2Z8QahdB4g6epvRZIgcZrqqostwn62+n5Dqtte7zHLQjX1LxYyjRXmEv05E+5aaaZtzlNK5mKy+r/NgAA1b0FFawl4eJ3K0L6VlyiznmZvObKvL9f45kzr+oOezpc7KgtqNo+PNlY9rUBb79HeNcpdu8ZW0Q7bhsXAkXo1oom0icsyB8RELT/+zjE64MMUNUURgzSyTmZo4hijejDYmyWdpIhjZlT/09SCzEp8gH0BcDOYmrv2NObSLsiU9iqJmjDjqs9SK6zDNvX0bXnFmZqq1y5xywdS2YJDe9M6LjyzdJZcizqTNnnLXWVtBaZvScrlv7PrSd7qN83HE/3ubnsbBH7qSPaKp3+/b2h9x+uTKx+Zh/fije6r2T2LF8xYvaDIA9UFTSoBoYICWIYllbRXMp0C1Ratx3zK0hMAdQiDYo+jVY3OAMDZSdsabuTODvNFoPxjvMyeZnSaSjhMaP/+zjE9IMM8UEWRhhtycmiYgT0mmF4HGUxrbXc+XmhczWhVAfwT0ywzHQd3NvlaP3L1RXex67LuG3aFEuDq1LvprLhr7axlMmptkH2cv5e96mzutdjTl3Taf/Gxbt0tpvaf8vRteeZPgACSAAEg1KJmK/6PhehkTpf5eNt4PZT/gMkFpA5JOYfuIIizyLGRnyICThbAMDkVLpgbeGXXJsXOGIAy+pZdMUEvyAjkjnCxDgQFhGbUsumKBeMk/8uEkQRMlhzyGHy4iiigZJJorpf+RQgZwlyKGb/+zjE6QIInM0lIwxL4jiwYUawwAFLEHKBWJg6WknMUUEkk0V0kv/5NnCsThuaF9y2TCJaJ+3pblMZgpLVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE4QAR3YcaWPWAAl0qY9cxIAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEngPAAAGkHAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var Mm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Oe=null,pl=!1;function ph(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function gh(){ph(),pl=!0;try{if(Oe||(Oe=document.createElement("audio"),Oe.src=Mm,Oe.loop=!0,Oe.preload="auto",Oe.setAttribute("playsinline",""),Oe.setAttribute("webkit-playsinline",""),Oe.setAttribute("x-webkit-airplay","deny"),Oe.volume=.01,Oe.addEventListener("pause",()=>{pl&&!document.hidden&&setTimeout(()=>pl&&Oe.paused&&Oe.play().catch(()=>{}),300)})),Oe.paused){let i=Oe.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function mh(i,t){ph();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var mn=i=>440*Math.pow(2,(i-69)/12),Or=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(gh(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;mh(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.value=e;let h=l.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",mn(l),a,c*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var Ji=class extends Or{crowd(t){let e=this.ctx;if(this.crowdWanted=t,!e)return;if(this.cr){let l=this.cr;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.l.stop()}catch{}},900),this.cr=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=700,s.Q.value=.5;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=.23;let o=e.createGain();o.gain.value=.015,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(.075,e.currentTime,.6),this.cr={s:n,g:r,l:a,f:s}}unlock(){super.unlock(),this.crowdWanted&&!this.cr&&this.crowd(!0)}excite(t){this.cr&&this.ctx&&(this.cr.g.gain.setTargetAtTime(.06+.1*t,this.ctx.currentTime,.4),this.cr.f.frequency.setTargetAtTime(600+700*t,this.ctx.currentTime,.4))}dispose(){this.crowd(!1),super.dispose()}play(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"kick":this.slide("sine",220,70,n,.14,.35),this.noise(n,.05,.12,"highpass",2e3);break;case"whistle":for(let s=0;s<2;s++){let r=e.createOscillator();r.type="sine",r.frequency.value=2900;let a=e.createOscillator();a.frequency.value=38;let o=e.createGain();o.gain.value=90,a.connect(o).connect(r.frequency);let l=e.createGain(),c=n+s*.28;l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(.1,c+.02),l.gain.exponentialRampToValueAtTime(1e-4,c+.22),r.connect(l).connect(this.sfx),r.start(c),a.start(c),r.stop(c+.25),a.stop(c+.25)}break;case"warn":this.tone("square",880,n,.07,.05),this.tone("square",880,n+.1,.07,.05);break;case"slide":this.noise(n,.4,.14,"bandpass",900,1,this.sfx,300);break;case"nutmeg":this.slide("triangle",330,520,n,.18,.14),this.slide("triangle",520,392,n+.2,.3,.14),this.noise(n,.5,.08,"bandpass",1200,.8);break;case"onetwo":this.tone("triangle",mn(76),n,.1,.12),this.tone("triangle",mn(83),n+.12,.2,.12);break;case"dodge":this.noise(n,.25,.1,"highpass",1500,1,this.sfx,5e3);break;case"stolen":this.slide("sawtooth",400,90,n,.45,.12);break;case"comet":this.noise(n,.9,.18,"highpass",500,1,this.sfx,5e3),[0,7,12,19].forEach((s,r)=>this.tone("triangle",mn(67+s),n+r*.06,.4,.1));break;case"burn":this.noise(n,.35,.16,"lowpass",3e3,1,this.sfx,400),this.tone("square",mn(60),n,.2,.08);break;case"shot":this.slide("sine",260,60,n,.2,.45),this.noise(n,.08,.18,"highpass",1500);break;case"save":this.noise(n,.12,.2,"lowpass",600),this.slide("sine",160,70,n,.2,.3);break;case"goal":this.noise(n,2.6,.32,"bandpass",900,.4,this.sfx,2200),[0,4,7,12,16,19,24].forEach((s,r)=>this.tone("sawtooth",mn(60+s),n+r*.09,.6,.06)),this.excite(1),setTimeout(()=>this.excite(.3),2800);break;case"win":[0,4,7,12,16].forEach((s,r)=>this.tone("triangle",mn(72+s),n+r*.1,.5,.13));break;case"coin":this.tone("square",mn(88),n,.05,.05),this.tone("square",mn(95),n+.05,.1,.05);break;case"tap":this.tone("sine",700,n,.06,.08);break;default:break}}};uh(Ji,fh);dh(Ji);function K(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function Ah(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function xh(i,t,e,n="#ffd23a"){return`
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
`}var qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var We=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bm=new Xi(-1,1,1,-1,0,1),gl=class extends be{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}},Sm=new gl,Kn=class{constructor(t){this._mesh=new ge(Sm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,bm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ki=class extends We{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jn.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Kn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Is=class extends We{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kr=class extends We{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Hr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new De(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ki(qr),this.copyPass.material.blending=fn,this.clock=new Dr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Is!==void 0&&(a instanceof Is?n=!0:a instanceof kr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gr=class extends We{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Ch={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var $i=class i extends We{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new De(r,a,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new De(r,a,{type:an});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new De(r,a,{type:an});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Ch;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=qr;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new Me,this.fsQuad=new Kn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};$i.BlurDirectionX=new Ct(1,0);$i.BlurDirectionY=new Ct(0,1);var vh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wr=class extends We{constructor(){super();let t=vh;this.uniforms=Jn.clone(t.uniforms),this.material=new Tr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},kt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$o&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Em={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float contrast, sat, tint, vig, time; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);
      c = (c - 0.5) * contrast + 0.5;
      // split tone: warm highlights, cool-teal shadows
      c += vec3(tint, tint * 0.35, -tint) * smoothstep(0.35, 1.0, l);
      c += vec3(-tint * 0.4, 0.0, tint * 0.5) * (1.0 - smoothstep(0.0, 0.4, l)) * 0.6;
      vec2 d = vUv - 0.5; float v = 1.0 - vig * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c *= v;
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`},wm={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function Tm(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new be;l.setAttribute("position",new Pe(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new jn(c);d.colorSpace=Ve;let p=new xs({map:d,color:wm[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:sn,fog:!1,sizeAttenuation:!0}),m=new Mr(l,p);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function Vm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var Rm={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2},Pm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Lm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function Um(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let f=new Audio(`${e}${g}_${t}.mp3`);f.preload="auto",f.volume=.95,n[g]=f}return n[g]},u=(g,f)=>{let M=performance.now();if(!f&&M-r<6e3||c)return;let _=g+(1+Math.floor(Math.random()*Rm[g])),y=h(_);c=!0,r=M,y.currentTime=0;let P=()=>{c=!1};y.onended=P,y.onerror=P;let S=y.play();S&&S.catch&&S.catch(P),setTimeout(P,4e3)},d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),f=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(f),f.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},p=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",p,{passive:!0}),window.addEventListener("keydown",p,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,Pm.test(g)?u("win",!1):Lm.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function _h(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=yh[e.get("look")||t.preset||"warm"]||yh.warm,s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,p=0,m=0,A=0,g=!1,f=performance.now();function M(_,y){let P=i.getSize(new Ct);p=P.x,m=P.y,A=i.getPixelRatio(),c=new Hr(i),c.setPixelRatio(A),c.setSize(p,m),h=new Gr(_,y),c.addPass(h),s||(u=new $i(new Ct(Math.max(2,p>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Wr),d=new Ki(Em),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(_,y){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!_||!y||!_.isScene)return a(_,y);try{c||M(_,y);let P=i.getSize(new Ct),S=i.getPixelRatio();(P.x!==p||P.y!==m||S!==A)&&(p=P.x,m=P.y,A=S,c.setPixelRatio(S),c.setSize(p,m),u&&u.resolution.set(Math.max(2,p>>1),Math.max(2,m>>1))),h.scene=_,h.camera=y,d.uniforms.time.value=(performance.now()-f)/1e3;let E=performance.now(),D=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let I=o.get(_);I||(I=Tm(_,y,e.get("look")||t.preset||"warm",r),o.set(_,I)),Vm(I,y,D)}g=!0,c.render(),g=!1}catch(P){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",P&&P.message),i.render=a,a(_,y)}},!e.has("nocheer")&&!r&&setTimeout(()=>Um(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Dm={title:["\u0633\u0643\u0629 \u0627\u0644\u0643\u0648\u0631\u0629","NUTMEG RUSH"],play:["\u0627\u0644\u0639\u0628","PLAY"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","LEVELS"],balls:["\u0627\u0644\u0643\u0648\u0631","BALLS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RETRY"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],next:["\u0627\u0644\u062A\u0627\u0644\u064A","NEXT"],select:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0631\u062D\u0644\u0629","SELECT LEVEL"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the level before"],start:["\u064A\u0644\u0627!","LET'S GO!"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","LEVEL"],tip1:["\u0627\u0628\u0639\u062F \u0639\u0646 \u0627\u0644\u0645\u0645\u0631\u0627\u062A \u0627\u0644\u062D\u0645\u0631\u0627 \u0627\u0644\u0648\u0627\u0645\u0636\u0629","Dodge the flashing RED lanes"],tip2:["\u0645\u0631\u0651\u0631 \u0627\u0644\u0643\u0648\u0631\u0629 \u0628\u064A\u0646 \u0631\u062C\u0644\u064A\u0646 \u0627\u0644\u0645\u062F\u0627\u0641\u0639!","Roll the ball between a defender's legs!"],tip3:["\u0627\u062E\u0628\u0637 \u0641\u064A \u0635\u0627\u062D\u0628\u0643 \u0627\u0644\u0623\u0632\u0631\u0642 \u0644\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629","Run into your BLUE friend for a one-two"],tip4:["\u0643\u0644 \u062D\u0631\u0643\u0629 \u062A\u0633\u062E\u0651\u0646 \u0627\u0644\u0643\u0648\u0631\u0629... \u0648\u062A\u062A\u062D\u0648\u0644 \u0644\u0643\u0631\u0629 \u0646\u0627\u0631!","Tricks heat the ball... until it is a FLAMING COMET!"],tip5:["\u0641\u064A \u0627\u0644\u0634\u0628\u0627\u0643 \u062F\u0648\u0633 \u0644\u0645\u0627 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u062A\u0628\u0642\u0649 \u062E\u0636\u0631\u0627","At the goal, TAP when the ring is GREEN"],how:["\u0627\u0633\u062D\u0628 \u0635\u0628\u0627\u0639\u0643 \u0639\u0634\u0627\u0646 \u062A\u062D\u0631\u0651\u0643 \u0627\u0644\u0643\u0648\u0631\u0629","Drag your finger to roll the ball"],nutmeg:["\u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646!","NUTMEG!"],onetwo:["\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629!","ONE-TWO!"],stolen:["\u0627\u062A\u0633\u0631\u0642\u062A!","STOLEN!"],dodge:["\u0641\u0644\u062A\u0651 \u0645\u0646\u0647!","DODGE!"],comet:["\u{1F525} \u0643\u0631\u0629 \u0646\u0627\u0631!! \u{1F525}","\u{1F525} FLAMING COMET! \u{1F525}"],burn:["\u062D\u0631\u0642\u062A\u0648!","BURNED THROUGH!"],goal:["\u062C\u0648\u0648\u0648\u0648\u0648\u0644!","GOOOAL!"],save:["\u0627\u0644\u062D\u0627\u0631\u0633 \u0635\u062F\u0651\u0647\u0627! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","SAVED! Try again"],shootHint:["\u062F\u0648\u0633 \u0644\u0645\u0627 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u062A\u0628\u0642\u0649 \u062E\u0636\u0631\u0627!","TAP when the ring is GREEN!"],shootGo:["\u0627\u0636\u0631\u0628!","SHOOT!"],shootWait:["\u0627\u0633\u062A\u0646\u0649...","WAIT..."],tricks:["\u062D\u0631\u0643\u0627\u062A","Tricks"],time:["\u0627\u0644\u0648\u0642\u062A","Time"],coins:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A","Coins"],score:["\u0627\u0644\u0646\u0642\u0627\u0637","Score"],won:["\u062C\u0648\u0648\u0648\u0648\u0648\u0644! \u{1F3C6}","GOAL! \u{1F3C6}"],nut:["\u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646","Nutmegs"],one:["\u062A\u0645\u0631\u064A\u0631\u0629 \u0648\u0631\u0627\u062C\u0639\u0629","One-twos"],dod:["\u0641\u0644\u062A\u0651","Dodges"],buy:["\u0627\u0634\u062A\u0631\u0650","Buy"],owned:["\u0639\u0646\u062F\u0643","Owned"],on:["\u0645\u062E\u062A\u0627\u0631\u0629 \u2713","Selected \u2713"],poor:["\u0645\u062D\u062A\u0627\u062C \u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631","Need more coins"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],s:["\u062B","s"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],lv:["\u0645","LV"],youAre:["\u0625\u0646\u062A \u0627\u0644\u0643\u0648\u0631\u0629","YOU ARE THE BALL"],blocked:["\u0635\u062F\u0651!","BLOCKED!"],tapShoot:["\u062F\u0648\u0633 \u0648\u0627\u0636\u0631\u0628!","TAP TO SHOOT!"],mate:["\u0645\u0631\u0651\u0631 \u0644\u0635\u0627\u062D\u0628\u0643!","PASS TO YOUR MATE!"],fullTime:["\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u062A","FULL TIME"],fullTimeSub:["\u062E\u062F\u0648\u0627 \u0643\u0644 \u0627\u0644\u0643\u0648\u0631. \u0646\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A\u061F","They took every ball. Again?"],savedT:["\u0635\u062F\u0651\u0647\u0627!","SAVED!"],savedSub:["\u0627\u0644\u062D\u0627\u0631\u0633 \u0635\u062F\u0651 \u0627\u0644\u0643\u0648\u0631\u0629. \u0627\u0644\u0639\u0628 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u062A\u0627\u0646\u064A!","The keeper stopped it. Play the level again!"],tryAgain:["\u062D\u0627\u0648\u0644 \u062A\u0627\u0646\u064A","TRY AGAIN"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","MENU"],dragMove:["\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u062D\u0631\u0651\u0643 \u0627\u0644\u0643\u0648\u0631\u0629","DRAG TO MOVE"],through:["\u0645\u0631\u0651\u0631\u0647\u0627 \u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646!","THROUGH THE LEGS!"],levelN:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","LEVEL"],nutmegT:["\u0628\u064A\u0646 \u0627\u0644\u0631\u062C\u0644\u064A\u0646!","NUTMEG!"]},fe=Ah(Dm),Et=i=>fe.t(i),O=i=>`calc(var(--u)*${i})`,bt={sphere:new wr(.5,14,10),cyl:new Sr(.5,.5,1,12),box:new di(1,1,1),plane:new Rn(1,1),circle:new br(.5,16),ring:new Er(.62,.9,28)},ml=new Map,ie=(i,t=0)=>{let e=`${i}|${t}`;return ml.has(e)||ml.set(e,new Cs({color:i,emissive:t})),ml.get(e)},on=(i,t=1,e=!1)=>new Me({color:i,transparent:t<1||e,opacity:t,depthWrite:!1,blending:e?sn:kn,side:Qe});function Vt(i,t,e,n,s,r=1,a=1,o=1){let l=new ge(i,t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}var ts=(i,t,e)=>i<t?t:i>e?e:i,Se=i=>-i;function Ih(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);return s.addColorStop(0,i),s.addColorStop(.4,"rgba(255,255,255,0.55)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,64,64),new jn(e)}function Nm(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d");t.strokeStyle="#fff",t.lineWidth=9,t.lineCap="round",t.lineJoin="round";for(let e=0;e<3;e++){let n=20+e*38;t.beginPath(),t.moveTo(14,n+22),t.lineTo(32,n),t.lineTo(50,n+22),t.stroke()}return new jn(i)}function Fm(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");return t.fillStyle="#e8242a",t.beginPath(),t.moveTo(32,4),t.lineTo(62,58),t.lineTo(2,58),t.closePath(),t.fill(),t.lineWidth=5,t.strokeStyle="#fff",t.stroke(),t.fillStyle="#fff",t.font="bold 40px sans-serif",t.textAlign="center",t.fillText("!",32,52),new jn(i)}function Al(i,t,e,n,s=!1){let r=new Ae,a=new Ae;r.add(a);let o=r.userData;o.body=a;let l=ie(16777215,4473924);for(let h of[-1,1]){let u=new Ae;u.position.set(h*ys,1.75,0),u.add(Vt(bt.sphere,ie(t),0,.05,0,1.25,1.05,1.25),Vt(bt.cyl,ie(l.color.getHex()),0,-.6,0,.8,1.1,.8),Vt(bt.sphere,ie(1842212),0,-1.2,.25,.95,.6,1.4)),a.add(u),h<0?o.legR=u:o.legL=u;let d=new Ae;d.position.set(h*1.55,3.25,0),d.add(Vt(bt.cyl,ie(i),0,-.5,0,.62,1.1,.62),Vt(bt.sphere,s?ie(8060794,1728538):ie(e),0,-1.15,0,s?.95:.62,s?.95:.62,s?.95:.62)),a.add(d),h<0?o.armR=d:o.armL=d}a.add(Vt(bt.sphere,ie(i),0,2.75,0,2.7,2.3,1.75),Vt(bt.box,l,0,2.75,.86,1.1,.28,.06));let c=new Ae;c.position.set(0,4.35,.05),a.add(c),o.head=c,c.add(Vt(bt.sphere,ie(e),0,0,0,1.55,1.5,1.5),Vt(bt.sphere,ie(n),0,.42,-.12,1.6,.95,1.55));for(let h of[-1,1])c.add(Vt(bt.sphere,l,h*.36,.05,.66,.4,.46,.2),Vt(bt.sphere,ie(1052696),h*.36,.03,.78,.2,.24,.1),Vt(bt.sphere,ie(e),h*.78,0,0,.3,.4,.2));c.add(Vt(bt.box,ie(6957610),0,-.38,.72,.5,.1,.06)),o.stars=new Ae;for(let h=0;h<3;h++)o.stars.add(Vt(bt.sphere,new Me({color:16769098}),Math.cos(h*2.1)*1,0,Math.sin(h*2.1)*1,.4,.4,.4));return o.stars.position.y=5.7,o.stars.visible=!1,r.add(o.stars),o.shadow=Vt(bt.circle,new Me({color:0,transparent:!0,opacity:.35}),0,.04,0,4,4,4),o.shadow.rotation.x=-Math.PI/2,r.add(o.shadow),r}var xl=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),fe.setLang(e.lang),fe.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.base=e.base||"./",this.save=lh(e.save),this.sound=new Ji,this.sound.muted=!!this.save.muted,document.getElementById("nm-style")||document.head.append(K("style",{id:"nm-style"},xh("nm","#1f6ae0","#0a2470","#ffe04a")+`
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
.nm-white .nm-row{color:#1a2040;justify-content:space-between}`)),this.root=K("div",{class:"nm-root",dir:fe.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=K("div",{class:"nm-layer"}),this.mode="menu",this.clock=0,this.fx=[],this.keys={},this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.dead||(this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame()))})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){let t=Lt.L,e=Lt.W/2;this.renderer=_h(new xr({antialias:!0}),{preset:"warm"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ve,this.root.prepend(this.renderer.domElement);let n=this.scene=new vr;n.background=new Tt(462118),n.fog=new Cr(462118,70,240),this.camera=new Re(70,1,.3,500),n.add(new Rr(10138879,1915426,1.45));let s=new Ur(16773852,1.15);s.position.set(25,60,-15),n.add(s),this.ballLight=new Lr(16777215,0,28,1.6),n.add(this.ballLight),n.add(Vt(bt.box,ie(1324060),0,-.3,t/2,220,.2,260));for(let c=0;c<Math.ceil((t+8)/6.4);c++)n.add(Vt(bt.box,ie(c%2?2918972:3514440),0,-.05,-3+c*6.4+3.2,Lt.W+4,.1,6.4));let r=(c,h,u,d)=>n.add(Vt(bt.box,on(16777215,.9),c,.03,h,u,.02,d));r(-e,t/2,.3,t),r(e,t/2,.3,t),r(0,0,Lt.W,.3),r(0,t,Lt.W,.3),r(0,t/2,Lt.W,.3),r(-12,(t+Lt.BOX_Z)/2,.3,t-Lt.BOX_Z),r(12,(t+Lt.BOX_Z)/2,.3,t-Lt.BOX_Z),r(0,Lt.BOX_Z,24.3,.3);let a=Vt(bt.ring,on(16777215,.9),0,.03,t/2,6,6,6);a.rotation.x=-Math.PI/2,n.add(a),this._goal(),this._stands(),this._lights(),this.ball=new Ae,this.ballMesh=new Ae,this.ball.add(this.ballMesh),n.add(this.ball),this.ballBase=Vt(bt.sphere,ie(16777215),0,0,0,1.1,1.1,1.1),this.ballMesh.add(this.ballBase),this.patchMat=ie(1974832),this.patches=[];let o=[],l=(1+Math.sqrt(5))/2;for(let[c,h]of[[-1,1],[1,1],[-1,-1],[1,-1]])o.push([0,c,h*l],[c,h*l,0],[h*l,0,c]);for(let c of o){let h=new T(...c).normalize(),u=new ge(bt.circle,this.patchMat);u.scale.set(.5,.5,1),u.position.copy(h).multiplyScalar(.553),u.quaternion.setFromUnitVectors(new T(0,0,1),h),this.ballMesh.add(u),this.patches.push(u)}this.glowTex=Ih(),this.glow=new fi(new Qn({map:this.glowTex,color:16752688,transparent:!0,opacity:0,blending:sn,depthWrite:!1})),this.ball.add(this.glow),this.ballShadow=Vt(bt.circle,new Me({color:0,transparent:!0,opacity:.4}),0,.05,0,1.4,1.4,1.4),this.ballShadow.rotation.x=-Math.PI/2,n.add(this.ballShadow),this.parts=[];for(let c=0;c<160;c++){let h=new fi(new Qn({map:this.glowTex,transparent:!0,opacity:0,blending:sn,depthWrite:!1}));h.visible=!1,n.add(h),this.parts.push({s:h,life:0,t:0,v:new T,a:1,z0:1,z1:1})}this.partI=0,this.keeperG=Al(16765498,1710634,15775888,3811866,!0),this.keeperG.position.set(0,0,t-.9),this.keeperG.rotation.y=Math.PI,n.add(this.keeperG),this.keeperG.scale.setScalar(.8),this.defMeshes=[],this.mateMeshes=[],this.dummyMeshes=[],this.coinMeshes=[],this.markTex=Fm(),this.chevTex=Nm(),this.reachWall=Vt(bt.plane,on(16722474,.32),0,1.8,t-.35,1,Lt.GOAL_H,1),this.reachWall.visible=!1,n.add(this.reachWall),this.safeWall=Vt(bt.plane,on(3203184,.2),0,1.8,t-.3,Lt.GOAL_W,Lt.GOAL_H,1),this.safeWall.visible=!1,n.add(this.safeWall),this.reachFloor=Vt(bt.box,on(16722474,.55),0,.06,t-1,1,.04,2),this.reachFloor.visible=!1,n.add(this.reachFloor),this.targetRing=new Ae,this.targetRing.add(Vt(bt.ring,on(16777215,1),0,0,0,1.6,1.6,1.6),Vt(bt.circle,on(16777215,.9),0,0,.01,.6,.6,1)),this.targetRing.position.set(0,1.8,t-.4),this.targetRing.visible=!1,n.add(this.targetRing),this.confetti=[],this.skinApply()}_goal(){let t=this.scene,e=Lt.L,n=Lt.GOAL_W/2,s=Lt.GOAL_H,r=Lt.GOAL_D,a=ie(16777215,8947848);for(let c of[-1,1]){t.add(Vt(bt.cyl,a,c*n,s/2,e,.4,s,.4));let h=Vt(bt.cyl,a,c*n,s/2,e+r,.2,s,.2);t.add(h)}t.add(Vt(bt.cyl,a,0,s,e,.4,Lt.GOAL_W+.4,.4).rotateZ(Math.PI/2));let o=on(16777215,.35);this.netBack=new ge(new Rn(Lt.GOAL_W,s,14,8),new Me({color:16777215,wireframe:!0,transparent:!0,opacity:.55})),this.netBack.position.set(0,s/2,e+r),t.add(this.netBack),this.netBase=Float32Array.from(this.netBack.geometry.attributes.position.array);let l=new ge(new Rn(Lt.GOAL_W,r,14,4),new Me({color:16777215,wireframe:!0,transparent:!0,opacity:.4}));l.rotation.x=Math.PI/2,l.position.set(0,s,e+r/2),t.add(l);for(let c of[-1,1]){let h=new ge(new Rn(r,s,4,8),new Me({color:16777215,wireframe:!0,transparent:!0,opacity:.4}));h.rotation.y=Math.PI/2,h.position.set(c*n,s/2,e+r/2),t.add(h)}t.add(Vt(bt.plane,o,0,s/2,e+r+.05,Lt.GOAL_W,s,1)),this.netT=99}_stands(){let t=this.scene,e=Lt.L,n=Lt.W/2,s=[],r=(c,h,u,d,p,m)=>{for(let A=0;A<m;A++){let g=4+A*2.2,f=1+A*1.8,M=d?c+d*g:0,_=p?h+p*g:0;d?t.add(Vt(bt.box,ie(2765648),M,f/2,h+u/2,2.2,f,u)):t.add(Vt(bt.box,ie(2765648),c+u/2,f/2,_,u,f,2.2));for(let y=0;y<u/1.4;y++){let P=.7+y*1.4;d?s.push([M,f+.5,h+P]):s.push([c+P,f+.5,_])}}};r(n+3,-10,e+20,1,0,5),r(-n-3,-10,e+20,-1,0,5),r(-n-3,e+9,Lt.W+6,0,1,4),r(-n-3,-9,Lt.W+6,0,-1,3);let a=[16734810,5941503,16765498,16777215,7006880,16747208,16751162];this.crowd=new Ir(bt.sphere,new Cs({color:16777215}),s.length);let o=new Tt;this.people=s.map((c,h)=>({x:c[0],y:c[1],z:c[2],ph:h*7.31%6.28})),s.forEach((c,h)=>{o.setHex(a[(h*5+(h>>3))%a.length]),this.crowd.setColorAt(h,o)}),this.crowd.instanceColor.needsUpdate=!0,t.add(this.crowd),this._crowdMat(0);let l=[15219290,3836648,16765498,3860648];for(let c=0;c<Math.ceil((e+6)/5.5);c++)for(let h of[-1,1])t.add(Vt(bt.box,ie(l[c%4],l[c%4]&5592405),h*(n+1.4),.6,c*5.5-3,.4,1.2,5.2));for(let c=0;c<7;c++)t.add(Vt(bt.box,ie(l[c%4],l[c%4]&5592405),-n+2.5+c*5,.6,e+7.5,5.2,1.2,.4))}_crowdMat(t,e=0){let n=this._dummy||(this._dummy=new xe);this.people.forEach((s,r)=>{let a=e?Math.abs(Math.sin(t*7+s.ph))*e:0;n.position.set(Se(s.x),s.y+a,s.z),n.scale.set(.9,1.2,.9),n.updateMatrix(),this.crowd.setMatrixAt(r,n.matrix)}),this.crowd.instanceMatrix.needsUpdate=!0}_lights(){let t=this.scene,e=Lt.L,n=Ih("rgba(255,255,240,1)");for(let[s,r]of[[-27,8],[27,8],[-27,e-8],[27,e-8],[-27,e/2],[27,e/2]]){t.add(Vt(bt.cyl,ie(5593706),s,15,r,.9,30,.9));let a=new Ae;a.position.set(s,31,r);for(let l=0;l<3;l++)for(let c=0;c<2;c++)a.add(Vt(bt.box,new Me({color:16777200}),(l-1)*2.2,c*2.2,0,2,2,.4));a.add(Vt(bt.box,ie(3817290),0,1,-.3,7,5,.3)),a.lookAt(0,0,r),t.add(a);let o=new fi(new Qn({map:n,color:16775900,transparent:!0,opacity:.8,blending:sn,depthWrite:!1}));o.scale.set(26,26,1),o.position.set(s+(s<0?1:-1)*2,32,r),t.add(o)}}skinApply(){let t=ji.find(e=>e.id===this.save.skin)||ji[0];this.skinDef=t,this.ballBase.material=ie(t.base,t.emissive),this.patchMat.color.setHex(t.patch),this.patchMat.emissive.setHex(t.id==="galaxy"||t.id==="flame"?t.patch&5592405:0)}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.portrait=this.cw<this.ch,this.camera.fov=this.portrait?62:50,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.joy=K("div",{class:"nm-joy"},K("b")),this.root.append(this.joy),this.root.addEventListener("pointerdown",n=>{if(n.target.closest("button")||!this.m)return;if(this.mode==="play"&&!this.paused&&this.m.mode==="shoot"){this._tap();return}if(this.mode!=="play"||this.paused)return;let s=this.root.getBoundingClientRect();this.dr={id:n.pointerId,x:n.clientX,y:n.clientY},this.joy.style.display="block",this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`;try{this.root.setPointerCapture(n.pointerId)}catch{}}),this.root.addEventListener("pointermove",n=>{if(!this.dr||n.pointerId!==this.dr.id||!this.m)return;let s=this.u*14,r=n.clientX-this.dr.x,a=n.clientY-this.dr.y,o=Math.hypot(r,a);o>s&&(r*=s/o,a*=s/o),this.pointerIn=[-r/s*(this.portrait,1),-a/s],this.joy.firstChild.style.transform=`translate(${r*.8}px,${a*.8}px)`});let e=n=>{this.dr&&n.pointerId===this.dr.id&&(this.dr=null,this.pointerIn=null,this.joy.style.display="none",this.joy.firstChild.style.transform="")};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let s=n.key.toLowerCase();this.keys[s]=n.type==="keydown",n.type==="keydown"&&((s==="p"||s==="escape")&&this.togglePause(),(s===" "||s==="enter")&&this.m&&this.m.mode==="shoot"&&this.mode==="play"&&(n.preventDefault(),this._tap()),(s.startsWith("arrow")||s===" ")&&n.preventDefault())},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){if(!this.m)return;let t=0,e=0;this.pointerIn&&(t=this.pointerIn[0],e=this.pointerIn[1]);let n=this.keys;(n.arrowleft||n.a)&&(t+=1),(n.arrowright||n.d)&&(t-=1),(n.arrowup||n.w)&&(e+=1),(n.arrowdown||n.s)&&(e-=1),this.m.setInput(t,e)}_tap(){this.m&&this.m.tap()&&(this.sound.play("shot"),this.hideTip(),this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null))}_clear(){this.layer.replaceChildren(),this.hintEl=null}_soundPill(){let t=K("button",{class:"nm-soundpill",onclick:()=>this.sound.unlock()},Et("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_card(...t){this.layer.append(K("div",{class:"nm-dim"},K("div",{class:"nm-card"},...t)))}_coinsPill(){return K("div",{class:"nm-row"},K("span",{},"\u{1FA99} ",Et("coins")),K("span",{},fe.num(this.save.coins)))}showMenu(){this.mode="menu",this.m=null,this._clear(),this.sound.crowd(!0),this.sound.excite(.2),this.menuT=0;let t=fe.getLang()!=="en",e=Math.min(this.save.unlocked-1,4),n=gn[e],s=K("div",{class:"nm-lvname"},`${Et("levelN")} ${fe.num(e+1)} - ${t?n.ar:n.en}`.toUpperCase());this.layer.append(K("div",{class:"nm-coinpill"},"\u{1FA99}",K("span",{},fe.num(this.save.coins)))),this.layer.append(K("div",{class:"nm-menu2"},K("div",{class:"nm-title2"},t?K("b",{},Et("title")):[document.createTextNode("NUTMEG"),K("b",{},"RUSH")]),K("div",{class:"nm-ribbon"},Et("youAre")),s,K("button",{class:"nm-play",onclick:()=>{this.sound.play("whistle"),this.showBrief(e)}},"\u25B6 ",Et("play")),K("div",{class:"nm-tiles"},K("button",{class:"nm-tile",onclick:()=>{this.sound.play("tap"),this.showLevels()}},K("i",{},"\u25A6"),Et("levels")),K("button",{class:"nm-tile",onclick:()=>{this.sound.play("tap"),this.showShop()}},K("i",{},"\u26BD"),Et("balls")),K("button",{class:"nm-tile",onclick:()=>{this.sound.play("tap"),this.showSettings()}},K("i",{},"\u2699"),Et("settings"))))),this._soundPill()}showLevels(){this._clear();let t=fe.getLang()!=="en",e=gn.map((n,s)=>{let r=s+1>this.save.unlocked,a=this.save.stars[s]||0;return K("button",{class:`nm-lvl${r?" lock":""}`,onclick:()=>{if(r){this.hint(Et("locked"));return}this.sound.play("tap"),this.showBrief(s)}},K("span",{style:`font-size:${O(7)}`},fe.num(s+1)),K("span",{},t?n.ar:n.en),K("span",{},r?"\u{1F512}":"\u2B50".repeat(a)||"\u2606"))});this._card(K("div",{class:"nm-title"},Et("select")),K("div",{class:"nm-grid"},e),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},Et("back"))),this.hintEl=K("div",{class:"nm-hint"}),this.layer.append(this.hintEl),this._soundPill()}showShop(){this._clear();let t=fe.getLang()!=="en",e=()=>{this._clear();let n=ji.map(s=>{let r=this.save.owned.includes(s.id),a=this.save.skin===s.id,o=l=>`#${l.toString(16).padStart(6,"0")}`;return K("button",{class:`nm-ball${a?" sel":""}`,onclick:()=>{if(r)hh(this.save,s.id),this.sound.play("tap");else if(ch(this.save,s.id))this.sound.play("coin");else{this.hint(Et("poor"));return}this.skinApply(),this.post({type:"save",save:this.save}),e()}},K("i",{style:`background:radial-gradient(circle at 35% 30%,#fff3 0,transparent 30%),radial-gradient(circle at 70% 70%,${o(s.patch)} 0 16%,transparent 17%),radial-gradient(circle at 25% 65%,${o(s.patch)} 0 14%,transparent 15%),${o(s.base)}`}),K("span",{},t?s.ar:s.en),K("span",{},a?Et("on"):r?Et("owned"):`\u{1FA99} ${fe.num(s.price)}`))});this._card(K("div",{class:"nm-title"},"\u26BD ",Et("balls")),this._coinsPill(),K("div",{class:"nm-grid"},n),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},Et("back"))),this.hintEl=K("div",{class:"nm-hint"}),this.layer.append(this.hintEl),this._soundPill()};e()}showSettings(){this._clear();let t=K("button",{class:"nm-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.post({type:"save",save:this.save}),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${Et("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${Et("sound")}`);this._card(K("div",{class:"nm-title"},"\u2699\uFE0F ",Et("settings")),t,K("div",{class:"nm-small"},Et("how")),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},Et("back"))),this._soundPill()}showBrief(t){this.levelIdx=t,this._newMatch(t),this.startLevel()}_newMatch(t){this.m=new zr({level:t,seed:(Date.now()&255)+1,easy:this.age<=4}),this._clearActors(),this._buildActors(),this.fx=[],this.shake=0,this.camInit=!1,this.celebrate=0}startLevel(){this._clear(),this.mode="play",this.paused=!1,this.sound.crowd(!0),this.sound.excite(.3),this.hudCoins=K("span",{},"0"),this.hudLevel=K("span"),this.livesEl=K("div",{class:"nm-pill nm-lives"},...[0,1,2].map(()=>K("i"))),this.lastLives=-1,this.lastCoins=-1;let t=K("button",{class:"nm-round","aria-label":Et("paused"),onclick:()=>this.togglePause()},"\u23F8");this.layer.append(K("div",{class:"nm-top"},t,K("div",{class:"nm-pill",style:`font-size:${O(3.3)}`},this.hudLevel),this.livesEl,K("div",{class:"nm-pill",style:`font-size:${O(3.6)};padding:${O(1)} ${O(2.2)}`},"\u{1FA99}",this.hudCoins))),this.progEl=K("div",{class:"nm-prog"},K("b"),K("i"),K("span",{},"\u{1F945}")),this.layer.append(this.progEl),this.heatEl=K("div",{class:"nm-heat"},K("b")),this.layer.append(this.heatEl),this.tipEl=K("div",{class:"nm-tip"}),this.layer.append(this.tipEl),this.shownTips={},this.banner=K("div",{class:"nm-banner"}),this.layer.append(this.banner),this.hintEl=K("div",{class:"nm-hint",style:`top:${O(25)}`}),this.layer.append(this.hintEl),this.shootBtn=null,this._soundPill(),this.say("levelN","yellow",`${Et("levelN")} ${fe.num(this.levelIdx+1)}`),this.tip("dragMove",4200,"\u{1F446}")}say(t,e="yellow",n=null){this.banner&&(this.banner.textContent=n||Et(t),this.banner.className=`nm-banner ${e}`,this.banner.offsetWidth,this.banner.classList.add("show"))}tip(t,e=3e3,n=""){this.tipEl&&(this.tipEl.replaceChildren(...n?[K("em",{},n)]:[],document.createTextNode(Et(t))),this.tipEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.tipEl&&this.tipEl.classList.remove("show"),e))}hideTip(){this.tipEl&&this.tipEl.classList.remove("show"),clearTimeout(this._tt)}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.pauseEl=K("div",{class:"nm-dim"},K("div",{class:"nm-card"},K("div",{class:"nm-title"},Et("paused")),K("button",{class:"nm-btn",onclick:()=>this.togglePause()},"\u25B6 ",Et("resume")),K("button",{class:"nm-btn dark",onclick:()=>{this.showBrief(this.levelIdx)}},"\u{1F504} ",Et("restart")),K("button",{class:"nm-btn dark",onclick:()=>this.showMenu()},"\u{1F3E0} ",Et("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_finish(t){let e=this.levelIdx,n=this.save;n.stars[e]=Math.max(n.stars[e],t.stars),n.unlocked=Math.max(n.unlocked,Math.min(5,e+2)),n.coins+=t.coins,n.goals+=1,n.tricks+=t.tricks,n.best[e]=Math.max(n.best[e],t.score),this.post({type:"save",save:n}),this.sound.play("win"),this.mode="result",this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null);let s=(a,o)=>K("div",{class:"nm-row"},K("span",{},a),K("span",{},o)),r=K("div",{class:"nm-stars"},...[1,2,3].map(a=>K("span",{class:a<=t.stars?"":"off"},"\u2B50")));this.layer.append(K("div",{class:"nm-dim",style:"background:rgba(5,8,25,.45)"},K("div",{class:"nm-white"},K("h2",{},Et("goal")),r,K("p",{},Et("win")),s(Et("score"),fe.num(t.score)),s(`\u{1F9B5} ${Et("nut")}`,fe.num(t.stats.nutmegs)),s(`\u{1F535} ${Et("one")}`,fe.num(t.stats.onetwos)),s(`\u{1F4A8} ${Et("dod")}`,fe.num(t.stats.dodges)),s(`\u{1FA99} ${Et("coins")}`,`+${fe.num(t.coins)}`),e<4?K("button",{class:"nm-red",onclick:()=>this.showBrief(e+1)},"\u25B6 ",Et("next")):K("button",{class:"nm-red",onclick:()=>this.showBrief(e)},"\u21BB ",Et("tryAgain")),K("button",{class:"nm-navy",onclick:()=>this.showMenu()},"\u2302 ",Et("menu")))))}_fail(t){let e=this.levelIdx,n=this.save;n.coins+=t.coins,this.post({type:"save",save:n}),this.mode="result",this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null),this.hideTip();let s=t.reason==="saved";this.layer.append(K("div",{class:"nm-dim",style:"background:rgba(5,8,25,.45)"},K("div",{class:"nm-white"},K("h2",{},Et(s?"savedT":"fullTime")),K("p",{},Et(s?"savedSub":"fullTimeSub")),t.coins?K("div",{class:"nm-row"},K("span",{},"\u{1FA99}"),K("span",{},`+${fe.num(t.coins)}`)):null,K("button",{class:"nm-red",onclick:()=>{this.sound.play("tap"),this.showBrief(e)}},"\u21BB ",Et("tryAgain")),K("button",{class:"nm-navy",onclick:()=>this.showMenu()},"\u2302 ",Et("menu")))))}_clearActors(){for(let t of[...this.defMeshes,...this.mateMeshes])this.scene.remove(t.g),t.lane&&this.scene.remove(t.lane),t.lane2&&this.scene.remove(t.lane2);for(let t of this.dummyMeshes||[])this.scene.remove(t);for(let t of this.coinMeshes||[])this.scene.remove(t.g);this.defMeshes=[],this.mateMeshes=[],this.dummyMeshes=[],this.coinMeshes=[]}_buildActors(){let t=[[14689322,7997968,15775888,2759184],[13638202,5900832,13142624,1118481],[15222810,6953482,15247488,6961690],[13113946,4852266,9067066,1710618]];for(let s of this.m.defenders){let r=t[s.id%t.length],a=Al(r[0],r[1],r[2],r[3]);a.scale.setScalar(.85),this.scene.add(a);let o=Vt(bt.plane,on(16718362,.4),0,.09,0,fl,_s,1);o.rotation.x=-Math.PI/2,o.visible=!1,this.scene.add(o);let l=Vt(bt.plane,new Me({map:this.chevTex,transparent:!0,opacity:.8,depthWrite:!1,side:Qe}),0,.1,0,fl*.8,_s,1);l.rotation.x=-Math.PI/2,l.visible=!1,this.scene.add(l);let c=new fi(new Qn({map:this.markTex,transparent:!0,depthTest:!1}));c.scale.set(2.2,2.2,1),c.position.y=8,c.visible=!1,a.add(c);let h=Vt(bt.circle,on(16765466,.85),0,.06,.6,1.5,1.5,1.5);h.rotation.x=-Math.PI/2,a.add(h),this.defMeshes.push({g:a,lane:o,lane2:l,mark:c,gap:h,d:s,ph:s.id*1.7})}for(let s of this.m.mates){let r=Al(5949695,1727130,15775888,2767450);r.scale.setScalar(.85),this.scene.add(r);let a=Vt(bt.ring,on(5949695,.7),0,.1,0,3.2,3.2,3.2);a.rotation.x=-Math.PI/2,r.add(a),this.mateMeshes.push({g:r,mt:s,ring:a})}for(let s of this.m.dummies){let r=new Ae,a=ie(16762394,4863488);r.add(Vt(bt.cyl,ie(3817290),0,.15,0,1.5,.3,1.5),Vt(bt.cyl,a,0,1.9,0,.55,3.2,.55),Vt(bt.sphere,a,0,1.95,0,1.45,1.9,.75),Vt(bt.sphere,a,0,3.55,0,.8,.8,.8)),r.position.set(Se(s.x),0,s.z),this.scene.add(r),this.dummyMeshes.push(r)}let e=new Me({color:16761370}),n=new Me({color:16771200});for(let s of this.m.coinList){let r=new Ae,a=Vt(bt.cyl,e,0,0,0,.9,.16,.9);a.rotation.x=Math.PI/2;let o=Vt(bt.cyl,n,0,0,.09,.5,.05,.5);o.rotation.x=Math.PI/2,r.add(a,o),r.position.set(Se(s.x),.95,s.z),this.scene.add(r),this.coinMeshes.push({g:r,c:s})}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e,this.mode==="play"&&!this.paused&&this.m&&(this._input(),this._update(e)),this._render(e)}_update(t){let e=this.m;for(let n of e.step(t))switch(n.type){case"tackleWarn":this.sound.play("warn");break;case"slide":this.sound.play("slide");break;case"nutmeg":this.sound.play("nutmeg"),this.say("nutmeg","yellow"),this._burst(this.ball.position,16769098,14),this.sound.excite(.6);break;case"onetwo":this.sound.play("onetwo"),this.sound.play("kick"),this.say("onetwo","cyan"),this._burst(this.ball.position,5949695,14),this.hideTip();break;case"dodge":this.sound.play("dodge"),this.say("dodge","cyan");break;case"stolen":this.sound.play("stolen"),this.say("stolen","red"),this.shake=.7,this.sound.excite(.15);break;case"burn":this.sound.play("burn"),this.say("burn","yellow"),this._burst(this.ball.position,16738842,24);break;case"cometOn":this.sound.play("comet"),this.say("comet"),this.sound.excite(.9);break;case"cometOff":this.sound.excite(.3);break;case"shootStart":this._shootUI(),this.sound.play("whistle");break;case"coin":this.sound.play("coin"),this._burst(this.ball.position,16765498,5);break;case"blocked":this.sound.play("tap"),this.say("blocked","red"),this.shake=.3;break;case"mateHint":this.tip("mate",3600);break;case"lost":this.sound.play("stolen");break;case"shoot":this.sound.play("shot"),this.hideTip(),this.shootBtn&&(this.shootBtn.remove(),this.shootBtn=null);break;case"save":this.sound.play("save"),this.say("savedT","cyan"),this.shake=.6;break;case"goal":this.sound.play("goal"),this.say("goal"),this.celebrate=3,this.netT=0,this.netX=n.x,this._confettiBurst();break;case"end":n.result.goal?this._finish(n.result):this._fail(n.result);break;default:break}if(this.mode==="play"){let n=fe.getLang()!=="en";this.hudLevel.textContent=`${Et("lv")} ${fe.num(this.levelIdx+1)}  ${n?gn[this.levelIdx].ar:gn[this.levelIdx].en}`.toUpperCase(),this.lastLives!==e.lives&&(this.lastLives=e.lives,[...this.livesEl.children].forEach((r,a)=>r.classList.toggle("off",a>=e.lives))),this.lastCoins!==e.coins+this.save.coins&&(this.lastCoins=e.coins+this.save.coins,this.hudCoins.textContent=fe.num(this.save.coins+e.coins));let s=e.progress*100;if(this.progEl.firstChild.style.width=`${s}%`,this.progEl.children[1].style.left=`${s}%`,this.heatEl.firstChild.style.width=`${e.heat}%`,this.heatEl.classList.toggle("comet",e.comet),this.heatEl.classList.toggle("on",e.heat>1),!this.shownTips.through&&this.levelIdx===0&&e.defenders.some(r=>r.state==="chase"&&Math.hypot(r.x-e.ball.x,r.z-e.ball.z)<10)&&(this.shownTips.through=!0,this.tip("through",3200)),this.shootBtn){let r=e.targetSafe();r!==this._ok&&(this._ok=r,this.shootBtn.className=`nm-shoot ${r?"go":"wait"}`,this.shootBtn.textContent=Et(r?"shootGo":"shootWait"))}}}_shootUI(){this.shootBtn=K("button",{class:"nm-shoot wait",onclick:()=>this._tap()},Et("shootWait")),this._ok=null,this.layer.append(this.shootBtn),this.tip("tapShoot",6e4,"\u{1F446}")}_spawn(t,e,n,s,r,a,o,l,c=1){let h=this.parts[this.partI++%this.parts.length];h.s.visible=!0,h.s.position.copy(t),h.v.set(e,n,s),h.life=r,h.t=0,h.z0=a,h.z1=o,h.a=c,h.s.material.color.setHex(l)}_burst(t,e,n){for(let s=0;s<n;s++){let r=Math.random()*6.28;this._spawn(t,Math.cos(r)*6,2+Math.random()*5,Math.sin(r)*6,.7,1.2,.2,e)}}_confettiBurst(){let t=[16730698,16769098,4915082,4897023,16747263],e=new T(Se(this.netX||0),3,Lt.L);for(let n=0;n<70;n++){let s=Math.random()*6.28;this._spawn(e,Math.cos(s)*7,4+Math.random()*8,-Math.abs(Math.sin(s))*7-2,2.2,.9,.5,t[n%5])}}_anim(t,e,n,s,r){let a=t.userData,o=n*12+r,l=0,c=0,h=0,u=0,d=0,p=0,m=0,A=t.userData.sy||0;switch(t.userData.stars.visible=!1,a.body.position.y=0,a.body.position.z=0,e){case"chase":case"idle":l=s?Math.sin(o)*.9:0,c=-l,h=-l,u=l,d=s?Math.abs(Math.sin(o))*.15:0,p=s?.15:0;break;case"windup":d=-.5,p=-.25,h=-2.6,u=1.2,l=-.9+Math.sin(n*25)*.15,c=.4;break;case"slide":p=-1.15,d=-.6,l=-1.6,c=-1.3,h=-2.4,u=1.5;break;case"recover":p=-.5,d=-1.2,l=-1.4,c=-1.4,h=1,u=1,a.stars.visible=!0;break;case"stun":d=Math.abs(Math.sin(n*6))*.2,m=n*10,h=2.8*.2,a.stars.visible=!0;break;case"cheer":d=Math.abs(Math.sin(n*9))*.9,h=-3,u=-3;break;case"watch":h=-.3,u=.3;break;case"wait":h=-2.9+Math.sin(n*8)*.4,u=.2,d=Math.abs(Math.sin(n*3))*.1;break;case"pass":l=-1.2,h=.4,u=-.4,p=.1;break;default:break}a.legL.rotation.x=l,a.legR.rotation.x=c,a.armL.rotation.x=h,a.armR.rotation.x=u,a.body.rotation.x=p,a.body.rotation.y=m,a.body.position.y=d,a.stars.rotation.y=n*6}_render(t){let e=this.m,n=this.scene,s=Lt.L,r=this.clock;if(e){let a=e.ball,o=Se(a.x),l=.55,c=o,h=a.z;if(e.pass&&(l+=Math.sin(ts(e.pass.t/e.pass.dur,0,1)*Math.PI)*2.6),e.mode==="shot"&&e.shot){let M=ts(e.shot.t/e.shot.dur,0,1);c=Se(e.shot.x0+(e.shot.tx-e.shot.x0)*M),h=e.shot.z0+(s+(e.shot.saved?-.6:1.8)-e.shot.z0)*M,l+=Math.sin(M*Math.PI)*1.1+M*(e.shot.saved?.6:.9)}e.mode==="goal"&&(c=Se(e.ball.x),h=s+1.8,l=.55),this.ball.position.set(c,l,h),this.ballShadow.position.set(c,.05,h),this.ballShadow.scale.setScalar(1.4-(l-.55)*.2);let u=Math.hypot(a.vx,a.vz)+(e.mode==="shot"?22:0),d=Math.hypot(a.vx,a.vz)>.2||e.mode==="shot"?new T(a.vz||1,0,a.vx).normalize():null;d&&this.ballMesh.rotateOnWorldAxis(d,u*t/.55),!e.mode.startsWith("done")&&this.mode==="play"&&(this.ball.visible=!0);let p=e.heat/100,m=p>.05;this.glow.material.opacity=m?.25+p*.65:0,this.glow.scale.setScalar(2.2+p*3.4+(e.comet?1.4+Math.sin(r*30)*.3:0)),this.glow.material.color.setHex(e.comet?16734746:16760896),this.ballLight.position.set(c,2.5,h),this.ballLight.intensity=.4+p*3+(e.comet?2:0),this.ballLight.color.setHex(e.comet?16742960:m?16760928:this.skinDef.trail);let A=this.ball.position;if(this.mode==="play"&&!this.paused)if(e.comet)for(let M=0;M<3;M++)this._spawn(A,(Math.random()-.5)*2,1.5+Math.random()*2,-a.vz*.15-Math.random()*2,.55,1.8,.2,M%2?16734746:16765498,.9);else u>3&&!(this.partI&1)?this._spawn(A,0,.2,0,.45,.9+p,.1,this.skinDef.trail,.6):this.partI++;for(let M of this.defMeshes){let _=M.d,y=M.g;y.position.set(Se(_.x),0,_.z),y.rotation.y=Math.atan2(-_.hx,_.hz);let P=_.state==="windup"||_.state==="slide";if(M.lane.visible=M.lane2.visible=P,P){let E=_.state==="slide"?_.sx:_.x,D=_.state==="slide"?_.sz:_.z,I=E+_.lx*_s/2,v=D+_.lz*_s/2;for(let q of[M.lane,M.lane2])q.position.x=Se(I),q.position.z=v,q.rotation.z=Math.atan2(_.lx,_.lz);let w=_.state==="windup"?ts(_.wt/e.def.windup,0,1):.4;M.lane.material.opacity=(.2+.4*Math.abs(Math.sin(r*(10+w*22))))*(_.state==="slide"?.6:1),M.lane2.material.opacity=.25+.5*w*Math.abs(Math.sin(r*20))}M.gap.visible=_.state!=="slide"&&_.state!=="stun"&&!_.nutmegged,M.gap.material.opacity=.55+.3*Math.sin(r*5+M.ph),M.mark.visible=_.state==="windup",M.mark.position.y=8+Math.abs(Math.sin(r*14))*.6,_.state==="slide"&&(y.rotation.y=Math.atan2(-_.lx,_.lz),y.position.y=.3);let S=_.state==="chase";this._anim(y,_.state,r,S,M.ph),y.userData.shadow.visible=_.state!=="slide"}for(let M of this.coinMeshes)M.g.visible=!M.c.got,M.g.rotation.y=r*3+M.c.z,M.g.position.y=.95+Math.sin(r*4+M.c.z)*.12;for(let M of this.mateMeshes){let _=M.mt;M.g.position.set(Se(_.x),0,_.z),M.g.rotation.y=Math.atan2(Se(a.x)-Se(_.x),a.z-_.z),this._anim(M.g,_.state,r,!1,0),M.ring.visible=_.state==="wait",M.ring.scale.setScalar(3.2+Math.sin(r*5)*.3)}let g=e.mode==="shoot"||e.mode==="shot";this.keeperG.position.x=Se(e.keeper.x),this.keeperG.rotation.z=e.mode==="shot"?-Bm(e.keeper.dir)*1.15*ts(e.shot?e.shot.t/.25:0,0,1):0,this.keeperG.position.y=e.mode==="shot"?Math.sin(ts((e.shot?e.shot.t:0)/.5,0,1)*Math.PI)*1.2:0,this._anim(this.keeperG,e.mode==="goal"?"wait":"watch",r,!1,0),this.keeperG.userData.armL.rotation.x=this.keeperG.userData.armR.rotation.x=-1.2+Math.sin(r*6)*.2,this.keeperG.userData.armL.rotation.z=-.8,this.keeperG.userData.armR.rotation.z=.8;let f=e.mode==="shoot";if(this.reachWall.visible=this.reachFloor.visible=this.targetRing.visible=this.safeWall.visible=f,f){let M=e.reachNow();this.reachWall.scale.x=M*2,this.reachWall.position.x=Se(e.keeper.x),this.reachFloor.scale.x=M*2,this.reachFloor.position.x=Se(e.keeper.x),this.reachWall.material.opacity=.22+.12*Math.sin(r*8);let _=e.targetSafe();this.targetRing.position.x=Se(e.target.x),this.targetRing.position.y=1.8+Math.sin(r*3)*.1;for(let y of this.targetRing.children)y.material.color.setHex(_?4259696:16742970);this.targetRing.scale.setScalar(1+(_?.15*Math.sin(r*12):0))}this._camera(t,e),this._net(t)}else{this.menuT=(this.menuT||0)+t;let a=this.menuT*.25;this.ball.position.set(0,.55,6),this.ballShadow.position.set(0,.05,6),this.ballMesh.rotation.y+=t,this.glow.material.opacity=0,this.camera.position.set(Math.sin(a)*22,12+Math.sin(a*.7)*2,6-Math.cos(a)*26),this.camera.lookAt(0,3,14),this.ballLight.intensity=0,this._crowdWas&&(this._crowdMat(r,0),this._crowdWas=!1)}for(let a of this.parts){if(!a.s.visible)continue;if(a.t+=t,a.t>=a.life){a.s.visible=!1;continue}let o=a.t/a.life;a.s.position.addScaledVector(a.v,t),a.v.y-=(a.a===1?6:0)*t,a.s.scale.setScalar(a.z0+(a.z1-a.z0)*o),a.s.material.opacity=(1-o)*Math.min(1,a.a)}this.celebrate>0?(this.celebrate-=t,this._crowdMat(r,.9),this._crowdWas=!0):this._crowdWas&&this.m&&(this._crowdMat(r,0),this._crowdWas=!1),this.renderer.render(n,this.camera)}_camera(t,e){let n=this.ball.position,s=this.camera,r=Lt.L,a=this.portrait,o,l,c,h,u,d;if(e.mode==="goal"){let A=ts(this.celebrate,0,3);o=n.x*.3+Math.sin(this.clock*.9)*8,l=6+(3-A)*.8,c=r-15,h=n.x*.4,u=2,d=r}else e.mode==="shoot"||e.mode==="shot"?(o=n.x*.3,l=a?10:7,c=r-(a?23:17),h=0,u=1.2,d=r):(o=n.x*.75,l=a?17:14,c=n.z-(a?10.5:10),h=n.x*.8,u=0,d=n.z+(a?9:8));this.camInit||(this.cp=new T(o,l,c),this.cl=new T(h,u,d),this.camInit=!0);let p=1-Math.exp(-t*(e.mode==="play"?7:3.5));this.cp.x+=(o-this.cp.x)*p,this.cp.y+=(l-this.cp.y)*p,this.cp.z+=(c-this.cp.z)*p,this.cl.x+=(h-this.cl.x)*p,this.cl.y+=(u-this.cl.y)*p,this.cl.z+=(d-this.cl.z)*p,this.shake=Math.max(0,(this.shake||0)-t*2);let m=this.shake*.6;s.position.set(this.cp.x+(Math.random()-.5)*m,this.cp.y+(Math.random()-.5)*m,this.cp.z),s.lookAt(this.cl)}_net(t){if(this.netT>2)return;this.netT+=t;let e=this.netBack.geometry.attributes.position,n=this.netBase,s=Se(this.netX||0),r=Lt.GOAL_H/2;for(let a=0;a<e.count;a++){let o=n[a*3],l=n[a*3+1],c=Math.hypot(o-s,l);e.setZ(a,Math.sin(c*2.2-this.netT*14)*Math.exp(-this.netT*2.4)*1.1*Math.exp(-c*.15))}e.needsUpdate=!0}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.dead=!0,this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},Bm=i=>-i,Cl={start(i,t,e){let n=new xl(i,t||{},e);return Cl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.NutmegRush=Cl;var BA=Cl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
