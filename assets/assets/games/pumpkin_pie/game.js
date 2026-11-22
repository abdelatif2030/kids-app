(()=>{var lc="170";var pu=0,Xc=1,gu=2;var sh=1,mu=2,In=3,Wn=0,Ue=1,en=2,Hn=0,Ni=1,Yc=2,Zc=3,Kc=4,Au=5,si=100,xu=101,vu=102,Cu=103,_u=104,yu=200,Iu=201,Mu=202,bu=203,Fo=204,zo=205,Su=206,Eu=207,wu=208,Tu=209,Vu=210,Ru=211,Pu=212,Uu=213,Lu=214,Bo=0,Oo=1,ko=2,Bi=3,Ho=4,Go=5,Wo=6,Xo=7,hc=0,Du=1,Nu=2,Gn=0,qu=1,Fu=2,zu=3,uc=4,Bu=5,Ou=6,ku=7;var rh=300,Oi=301,ki=302,Yo=303,Zo=304,Gr=306,Ko=1e3,ai=1001,jo=1002,Oe=1003,Hu=1004;var Ls=1005;var ln=1006,io=1007;var ci=1008;var En=1009,oh=1010,ah=1011,As=1012,dc=1013,li=1014,hn=1015,Es=1016,fc=1017,pc=1018,Hi=1020,ch=35902,lh=1021,hh=1022,nn=1023,uh=1024,dh=1025,qi=1026,Gi=1027,gc=1028,mc=1029,fh=1030,Ac=1031;var xc=1033,cr=33776,lr=33777,hr=33778,ur=33779,Jo=35840,Qo=35841,$o=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,ca=37812,la=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ga=37819,ma=37820,Aa=37821,dr=36492,xa=36494,va=36495,ph=36283,Ca=36284,_a=36285,ya=36286;var fr=2300,Ia=2301,so=2302,jc=2400,Jc=2401,Qc=2402;var Gu=3200,Wu=3201;var gh=0,Xu=1,kn="",Pe="srgb",Ki="srgb-linear",Wr="linear",$t="srgb";var vi=7680;var $c=519,Yu=512,Zu=513,Ku=514,mh=515,ju=516,Ju=517,Qu=518,$u=519,tl=35044;var el="300 es",bn=2e3,pr=2001,Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ro=Math.PI/180,Ma=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function td(i,t){return(i%t+t)%t}function oo(i,t,e){return(1-e)*i+e*t}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],b=s[1],I=s[4],C=s[7],D=s[2],S=s[5],E=s[8];return r[0]=o*A+a*b+c*D,r[3]=o*g+a*I+c*S,r[6]=o*p+a*C+c*E,r[1]=l*A+h*b+u*D,r[4]=l*g+h*I+u*S,r[7]=l*p+h*C+u*E,r[2]=d*A+f*b+m*D,r[5]=d*g+f*I+m*S,r[8]=d*p+f*C+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*l-h*n)*A,t[2]=(a*n-s*o)*A,t[3]=d*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-a*e)*A,t[6]=f*A,t[7]=(n*c-l*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ao=new Lt;function Ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){let i=gr("canvas");return i.style.display="block",i}var nl={};function us(i){i in nl||(nl[i]=!0,console.warn(i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function id(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var il=[.64,.33,.3,.6,.15,.06],sl=[.2126,.7152,.0722],rl=[.3127,.329],ol=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Ki]:{primaries:il,whitePoint:rl,transfer:Wr,toXYZ:ol,fromXYZ:al,luminanceCoefficients:sl,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:il,whitePoint:rl,transfer:$t,toXYZ:ol,fromXYZ:al,luminanceCoefficients:sl,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var Ci,ba=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=gr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rd=0,mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(co(s[o].image)):r.push(co(s[o]))}else r=co(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function co(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var od=0,Le=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ai,s=ai,r=ln,o=ci,a=nn,c=En,l=i.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ji(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=rh;Le.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],A=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(l+1)/2,C=(f+1)/2,D=(p+1)/2,S=(h+d)/4,E=(u+A)/4,L=(m+g)/4;return I>C&&I>D?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=S/n,r=E/n):C>D?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=S/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=E/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-A)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends Xn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new mr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],A=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(u!==A||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*A,b=p>=0?1:-1,I=1-p*p;if(I>Number.EPSILON){let D=Math.sqrt(I),S=Math.atan2(D,p*b);g=Math.sin(g*S)/D,a=Math.sin(a*S)/D}let C=a*b;if(c=c*g+d*C,l=l*g+f*C,h=h*g+m*C,u=u*g+A*C,g===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo=new T,cl=new Xe,Tn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ns.subVectors(this.max,rs),_i.subVectors(t.a,rs),yi.subVectors(t.b,rs),Ii.subVectors(t.c,rs),Nn.subVectors(yi,_i),qn.subVectors(Ii,yi),Jn.subVectors(_i,Ii);let e=[0,-Nn.z,Nn.y,0,-qn.z,qn.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,qn.z,0,-qn.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-qn.y,qn.x,0,-Jn.y,Jn.x,0];return!ho(e,_i,yi,Ii,Ns)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,_i,yi,Ii,Ns))?!1:(qs.crossVectors(Nn,qn),e=[qs.x,qs.y,qs.z],ho(e,_i,yi,Ii,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xn=[new T,new T,new T,new T,new T,new T,new T,new T],Qe=new T,Ds=new Tn,_i=new T,yi=new T,Ii=new T,Nn=new T,qn=new T,Jn=new T,rs=new T,Ns=new T,qs=new T,Qn=new T;function ho(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);let a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=t.dot(Qn),l=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ad=new Tn,os=new T,uo=new T,Yn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(uo)),this.expandByPoint(os.copy(t.center).sub(uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new T,fo=new T,Fs=new T,Fn=new T,po=new T,zs=new T,go=new T,xr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fo.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(fo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fs),a=Fn.dot(this.direction),c=-Fn.dot(Fs),l=Fn.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fo).addScaledVector(Fs,d),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){po.subVectors(e,t),zs.subVectors(n,t),go.crossVectors(po,zs);let o=this.direction.dot(go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);let c=a*this.direction.dot(zs.crossVectors(Fn,zs));if(c<0)return null;let l=a*this.direction.dot(po.cross(Fn));if(l<0||c+l>o)return null;let h=-a*Fn.dot(go);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,A,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,A=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-A*l,e[9]=-a*c,e[2]=A-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,A=l*u;e[0]=d+A*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=A+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,A=l*u;e[0]=d-A*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=A-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,A=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+A,e[1]=c*u,e[5]=A*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,A=a*l;e[0]=c*h,e[4]=A-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,A=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+A,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,ld)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),zn.crossVectors(n,ze),zn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),zn.crossVectors(n,ze)),zn.normalize(),Bs.crossVectors(ze,zn),s[0]=zn.x,s[4]=Bs.x,s[8]=ze.x,s[1]=zn.y,s[5]=Bs.y,s[9]=ze.y,s[2]=zn.z,s[6]=Bs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],b=n[3],I=n[7],C=n[11],D=n[15],S=s[0],E=s[4],L=s[8],y=s[12],_=s[1],w=s[5],B=s[9],z=s[13],H=s[2],K=s[6],G=s[10],$=s[14],k=s[3],st=s[7],ht=s[11],yt=s[15];return r[0]=o*S+a*_+c*H+l*k,r[4]=o*E+a*w+c*K+l*st,r[8]=o*L+a*B+c*G+l*ht,r[12]=o*y+a*z+c*$+l*yt,r[1]=h*S+u*_+d*H+f*k,r[5]=h*E+u*w+d*K+f*st,r[9]=h*L+u*B+d*G+f*ht,r[13]=h*y+u*z+d*$+f*yt,r[2]=m*S+A*_+g*H+p*k,r[6]=m*E+A*w+g*K+p*st,r[10]=m*L+A*B+g*G+p*ht,r[14]=m*y+A*z+g*$+p*yt,r[3]=b*S+I*_+C*H+D*k,r[7]=b*E+I*w+C*K+D*st,r[11]=b*L+I*B+C*G+D*ht,r[15]=b*y+I*z+C*$+D*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+A*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],b=u*g*l-A*d*l+A*c*f-a*g*f-u*c*p+a*d*p,I=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,C=h*A*l-m*u*l+m*a*f-o*A*f-h*a*p+o*u*p,D=m*u*c-h*A*c-m*a*d+o*A*d+h*a*g-o*u*g,S=e*b+n*I+s*C+r*D;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(A*d*r-u*g*r-A*s*f+n*g*f+u*s*p-n*d*p)*E,t[2]=(a*g*r-A*c*r+A*s*l-n*g*l-a*s*p+n*c*p)*E,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=I*E,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*E,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=C*E,t[9]=(m*u*r-h*A*r-m*n*f+e*A*f+h*n*p-e*u*p)*E,t[10]=(o*A*r-m*a*r+m*n*l-e*A*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=D*E,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*E,t[14]=(m*a*s-o*A*s-m*n*c+e*A*c+o*n*g-e*a*g)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,A=o*h,g=o*u,p=a*u,b=c*l,I=c*h,C=c*u,D=n.x,S=n.y,E=n.z;return s[0]=(1-(A+p))*D,s[1]=(f+C)*D,s[2]=(m-I)*D,s[3]=0,s[4]=(f-C)*S,s[5]=(1-(d+p))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(m+I)*E,s[9]=(g-b)*E,s[10]=(1-(d+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);let l=1/r,h=1/o,u=1/a;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=bn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===bn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===pr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,A;if(a===bn)m=(o+r)*u,A=-2*u;else if(a===pr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new T,$e=new jt,cd=new T(0,0,0),ld=new T(1,1,1),zn=new T,Bs=new T,ze=new T,ll=new jt,hl=new Xe,De=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};De.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hd=0,ul=new T,bi=new Xe,Cn=new jt,Os=new T,as=new T,ud=new T,dd=new Xe,dl=new T(1,0,0),fl=new T(0,1,0),pl=new T(0,0,1),gl={type:"added"},fd={type:"removed"},Si={type:"childadded",child:null},mo={type:"childremoved",child:null},Se=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new De,n=new Xe,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Lt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(as,Os,this.up):Cn.lookAt(Os,as,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(Cn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),mo.child=t,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new T(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new T,_n=new T,Ao=new T,yn=new T,Ei=new T,wi=new T,ml=new T,xo=new T,vo=new T,Co=new T,_o=new de,yo=new de,Io=new de,ri=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),_n.subVectors(n,e),Ao.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(_n),c=tn.dot(Ao),l=_n.dot(_n),h=_n.dot(Ao),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return _o.setScalar(0),yo.setScalar(0),Io.setScalar(0),_o.fromBufferAttribute(t,e),yo.fromBufferAttribute(t,n),Io.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_o,r.x),o.addScaledVector(yo,r.y),o.addScaledVector(Io,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ei.subVectors(s,n),wi.subVectors(r,n),xo.subVectors(t,n);let c=Ei.dot(xo),l=wi.dot(xo);if(c<=0&&l<=0)return e.copy(n);vo.subVectors(t,s);let h=Ei.dot(vo),u=wi.dot(vo);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ei,o);Co.subVectors(t,r);let f=Ei.dot(Co),m=wi.dot(Co);if(m>=0&&f<=m)return e.copy(r);let A=f*l-c*m;if(A<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(wi,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ml.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(ml,a);let p=1/(g+A+d);return o=A*p,a=d*p,e.copy(n).addScaledVector(Ei,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=td(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mo(o,r,t+1/3),this.g=Mo(o,r,t),this.b=Mo(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Xt.fromWorkingColorSpace(Me.copy(this),t),Math.round(be(Me.r*255,0,255))*65536+Math.round(be(Me.g*255,0,255))*256+Math.round(be(Me.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,s=Me.g,r=Me.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Pe){Xt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,s=Me.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(ks);let n=oo(Bn.h,ks.h,e),s=oo(Bn.s,ks.s,e),r=oo(Bn.l,ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new Vt;Vt.NAMES=xh;var pd=0,Zn=class extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ji(),this.name="",this.blending=Ni,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=zo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ye=class extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new T,Hs=new pt,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}};var Cr=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _r=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}},gd=0,We=new jt,bo=new Se,Ti=new T,Be=new Tn,cs=new Tn,ve=new T,Ce=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?_r:Cr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Be.min,cs.min),Be.expandByPoint(ve),ve.addVectors(Be.max,cs.max),Be.expandByPoint(ve)):(Be.expandByPoint(cs.min),Be.expandByPoint(cs.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(Ti.fromBufferAttribute(t,l),ve.add(Ti)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new T,c[L]=new T;let l=new T,h=new T,u=new T,d=new pt,f=new pt,m=new pt,A=new T,g=new T;function p(L,y,_){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),a[L].add(A),a[y].add(A),a[_].add(A),c[L].add(g),c[y].add(g),c[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,y=b.length;L<y;++L){let _=b[L],w=_.start,B=_.count;for(let z=w,H=w+B;z<H;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let I=new T,C=new T,D=new T,S=new T;function E(L){D.fromBufferAttribute(s,L),S.copy(D);let y=a[L];I.copy(y),I.sub(D.multiplyScalar(D.dot(y))).normalize(),C.crossVectors(S,y);let w=C.dot(c[L])<0?-1:1;o.setXYZW(L,I.x,I.y,I.z,w)}for(let L=0,y=b.length;L<y;++L){let _=b[L],w=_.start,B=_.count;for(let z=w,H=w+B;z<H;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let A=0,g=c.length;A<g;A++){a.isInterleavedBufferAttribute?f=c[A]*a.data.stride+a.offset:f=c[A]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Al=new jt,$n=new xr,Gs=new Yn,xl=new T,Ws=new T,Xs=new T,Ys=new T,So=new T,Zs=new T,vl=new T,Ks=new T,zt=class extends Se{constructor(t=new Ce,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(So.fromBufferAttribute(u,t),o?Zs.addScaledVector(So,h):Zs.addScaledVector(So.sub(e),h))}e.add(Zs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Gs.containsPoint($n.origin)===!1&&($n.intersectSphere(Gs,xl)===null||$n.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(Al.copy(r).invert(),$n.copy(t.ray).applyMatrix4(Al),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),I=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let C=b,D=I;C<D;C+=3){let S=a.getX(C),E=a.getX(C+1),L=a.getX(C+2);s=js(this,p,t,n,l,h,u,S,E,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let b=a.getX(g),I=a.getX(g+1),C=a.getX(g+2);s=js(this,o,t,n,l,h,u,b,I,C),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),I=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let C=b,D=I;C<D;C+=3){let S=C,E=C+1,L=C+2;s=js(this,p,t,n,l,h,u,S,E,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let b=g,I=g+1,C=g+2;s=js(this,o,t,n,l,h,u,b,I,C),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function md(i,t,e,n,s,r,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Wn,a),c===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ks);return l<e.near||l>e.far?null:{distance:l,point:Ks.clone(),object:i}}function js(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ws),i.getVertexPosition(c,Xs),i.getVertexPosition(l,Ys);let h=md(i,t,e,n,Ws,Xs,Ys,vl);if(h){let u=new T;ri.getBarycoord(vl,Ws,Xs,Ys,u),s&&(h.uv=ri.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new T,materialIndex:0};ri.getNormal(Ws,Xs,Ys,d.normal),h.face=d,h.barycoord=u}return h}var Vn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(A,g,p,b,I,C,D,S,E,L,y){let _=C/E,w=D/L,B=C/2,z=D/2,H=S/2,K=E+1,G=L+1,$=0,k=0,st=new T;for(let ht=0;ht<G;ht++){let yt=ht*w-z;for(let qt=0;qt<K;qt++){let ee=qt*_-B;st[A]=ee*b,st[g]=yt*I,st[p]=H,l.push(st.x,st.y,st.z),st[A]=0,st[g]=0,st[p]=S>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/E),u.push(1-ht/L),$+=1}}for(let ht=0;ht<L;ht++)for(let yt=0;yt<E;yt++){let qt=d+yt+K*ht,ee=d+yt+K*(ht+1),X=d+(yt+1)+K*(ht+1),tt=d+(yt+1)+K*ht;c.push(qt,ee,tt),c.push(ee,X,tt),k+=6}a.addGroup(f,k,y),f+=k,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ad(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var xd={clone:Wi,merge:Ee},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},On=new T,Cl=new pt,_l=new pt,we=class extends yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,_l),e.subVectors(_l,Cl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ro*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vi=-90,Ri=1,wa=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Vi,Ri,t,e);s.layers=this.layers,this.add(s);let r=new we(Vi,Ri,t,e);r.layers=this.layers,this.add(r);let o=new we(Vi,Ri,t,e);o.layers=this.layers,this.add(o);let a=new we(Vi,Ri,t,e);a.layers=this.layers,this.add(a);let c=new we(Vi,Ri,t,e);c.layers=this.layers,this.add(c);let l=new we(Vi,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ir=class extends Le{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ta=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Hn});r.uniforms.tEquirect.value=e;let o=new zt(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=ln),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Eo=new T,_d=new T,yd=new Lt,Mn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Eo.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yd.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new Yn,Js=new T,xs=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],b=s[13],I=s[14],C=s[15];if(n[0].setComponents(c-r,d-l,g-f,C-p).normalize(),n[1].setComponents(c+r,d+l,g+f,C+p).normalize(),n[2].setComponents(c+o,d+h,g+m,C+b).normalize(),n[3].setComponents(c-o,d-h,g-m,C-b).normalize(),n[4].setComponents(c-a,d-u,g-A,C-I).normalize(),e===bn)n[5].setComponents(c+a,d+u,g+A,C+I).normalize();else if(e===pr)n[5].setComponents(a,u,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ch(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Id(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],A=u[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let A=u[f];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rn=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let b=p*d-o;for(let I=0;I<l;I++){let C=I*u-r;m.push(C,-b,0),A.push(0,0,1),g.push(I/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let I=b+l*p,C=b+l*(p+1),D=b+1+l*(p+1),S=b+1+l*p;f.push(I,C,S),f.push(C,D,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,If=`struct PhysicalMaterial {
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
}`,Mf=`
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lf=`#if defined( USE_POINTS_UV )
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
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Pp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Hp=`#define MATCAP
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
}`,Gp=`#define NORMAL
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Md,alphahash_pars_fragment:bd,alphamap_fragment:Sd,alphamap_pars_fragment:Ed,alphatest_fragment:wd,alphatest_pars_fragment:Td,aomap_fragment:Vd,aomap_pars_fragment:Rd,batching_pars_vertex:Pd,batching_vertex:Ud,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Nd,iridescence_fragment:qd,bumpmap_pars_fragment:Fd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:kd,color_fragment:Hd,color_pars_fragment:Gd,color_pars_vertex:Wd,color_vertex:Xd,common:Yd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:jd,displacementmap_vertex:Jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:$d,colorspace_fragment:tf,colorspace_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:Af,envmap_vertex:af,fog_vertex:cf,fog_pars_vertex:lf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:gf,lights_pars_begin:mf,lights_toon_fragment:xf,lights_toon_pars_fragment:vf,lights_phong_fragment:Cf,lights_phong_pars_fragment:_f,lights_physical_fragment:yf,lights_physical_pars_fragment:If,lights_fragment_begin:Mf,lights_fragment_maps:bf,lights_fragment_end:Sf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Vf,map_fragment:Rf,map_pars_fragment:Pf,map_particle_fragment:Uf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Nf,morphinstance_vertex:qf,morphcolor_vertex:Ff,morphnormal_vertex:zf,morphtarget_pars_vertex:Bf,morphtarget_vertex:Of,normal_fragment_begin:kf,normal_fragment_maps:Hf,normal_pars_fragment:Gf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:$f,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:ap,shadowmap_vertex:cp,shadowmask_pars_fragment:lp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:gp,tonemapping_fragment:mp,tonemapping_pars_fragment:Ap,transmission_fragment:xp,transmission_pars_fragment:vp,uv_pars_fragment:Cp,uv_pars_vertex:_p,uv_vertex:yp,worldpos_vertex:Ip,background_vert:Mp,background_frag:bp,backgroundCube_vert:Sp,backgroundCube_frag:Ep,cube_vert:wp,cube_frag:Tp,depth_vert:Vp,depth_frag:Rp,distanceRGBA_vert:Pp,distanceRGBA_frag:Up,equirect_vert:Lp,equirect_frag:Dp,linedashed_vert:Np,linedashed_frag:qp,meshbasic_vert:Fp,meshbasic_frag:zp,meshlambert_vert:Bp,meshlambert_frag:Op,meshmatcap_vert:kp,meshmatcap_frag:Hp,meshnormal_vert:Gp,meshnormal_frag:Wp,meshphong_vert:Xp,meshphong_frag:Yp,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:jp,meshtoon_frag:Jp,points_vert:Qp,points_frag:$p,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},et={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},cn={basic:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ee([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ee([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ee([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ee([et.points,et.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ee([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ee([et.common,et.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ee([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ee([et.sprite,et.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ee([et.common,et.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ee([et.lights,et.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};cn.physical={uniforms:Ee([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Qs={r:0,b:0,g:0},ei=new De,sg=new jt;function rg(i,t,e,n,s,r,o){let a=new Vt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(b){let I=b.isScene===!0?b.background:null;return I&&I.isTexture&&(I=(b.backgroundBlurriness>0?e:t).get(I)),I}function A(b){let I=!1,C=m(b);C===null?p(a,c):C&&C.isColor&&(p(C,1),I=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,I){let C=m(I);C&&(C.isCubeTexture||C.mapping===Gr)?(h===void 0&&(h=new zt(new Vn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Wi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(I.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(ei)),h.material.toneMapped=Xt.getTransfer(C.colorSpace)!==$t,(u!==C||d!==C.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new zt(new Rn(2,2),new un({name:"BackgroundMaterial",uniforms:Wi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(C.colorSpace)!==$t,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=C,d=C.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,I){b.getRGB(Qs,vh(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,I,o)}return{getClearColor:function(){return a},setClearColor:function(b,I=1){a.set(b),c=I,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:A,addToRenderList:g}}function og(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,w,B,z,H){let K=!1,G=u(z,B,w);r!==G&&(r=G,l(r.object)),K=f(_,z,B,H),K&&m(_,z,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,C(_,w,B,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,B){let z=B.wireframe===!0,H=n[_.id];H===void 0&&(H={},n[_.id]=H);let K=H[w.id];K===void 0&&(K={},H[w.id]=K);let G=K[z];return G===void 0&&(G=d(c()),K[z]=G),G}function d(_){let w=[],B=[],z=[];for(let H=0;H<e;H++)w[H]=0,B[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,w,B,z){let H=r.attributes,K=w.attributes,G=0,$=B.getAttributes();for(let k in $)if($[k].location>=0){let ht=H[k],yt=K[k];if(yt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(_,w,B,z){let H={},K=w.attributes,G=0,$=B.getAttributes();for(let k in $)if($[k].location>=0){let ht=K[k];ht===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor));let yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),H[k]=yt,G++}r.attributes=H,r.attributesNum=G,r.index=z}function A(){let _=r.newAttributes;for(let w=0,B=_.length;w<B;w++)_[w]=0}function g(_){p(_,0)}function p(_,w){let B=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;B[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),H[_]!==w&&(i.vertexAttribDivisor(_,w),H[_]=w)}function b(){let _=r.newAttributes,w=r.enabledAttributes;for(let B=0,z=w.length;B<z;B++)w[B]!==_[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function I(_,w,B,z,H,K,G){G===!0?i.vertexAttribIPointer(_,w,B,H,K):i.vertexAttribPointer(_,w,B,z,H,K)}function C(_,w,B,z){A();let H=z.attributes,K=B.getAttributes(),G=w.defaultAttributeValues;for(let $ in K){let k=K[$];if(k.location>=0){let st=H[$];if(st===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){let ht=st.normalized,yt=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let ee=qt.buffer,X=qt.type,tt=qt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===dc;if(st.isInterleavedBufferAttribute){let rt=st.data,St=rt.stride,Tt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft,rt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)g(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ft=0;Ft<k.locationSize;Ft++)I(k.location+Ft,yt/k.locationSize,X,ht,St*tt,(Tt+yt/k.locationSize*Ft)*tt,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,st.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let rt=0;rt<k.locationSize;rt++)I(k.location+rt,yt/k.locationSize,X,ht,yt*tt,yt/k.locationSize*rt*tt,xt)}}else if(G!==void 0){let ht=G[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(k.location,ht);break;case 3:i.vertexAttrib3fv(k.location,ht);break;case 4:i.vertexAttrib4fv(k.location,ht);break;default:i.vertexAttrib1fv(k.location,ht)}}}}b()}function D(){L();for(let _ in n){let w=n[_];for(let B in w){let z=w[B];for(let H in z)h(z[H].object),delete z[H];delete w[B]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let B in w){let z=w[B];for(let H in z)h(z[H].object),delete z[H];delete w[B]}delete n[_.id]}function E(_){for(let w in n){let B=n[w];if(B[_.id]===void 0)continue;let z=B[_.id];for(let H in z)h(z[H].object),delete z[H];delete B[_.id]}}function L(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:b}}function ag(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let L=E===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hn&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:C,vertexTextures:D,maxSamples:S}}function lg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Mn,a=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,I=b*4,C=p.clippingState||null;c.value=C,C=h(m,d,I,f);for(let D=0;D!==I;++D)C[D]=e[D];p.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let p=f+A*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let I=0,C=f;I!==A;++I,C+=4)o.copy(u[I]).applyMatrix4(b,a),o.normal.toArray(g,C),g[C+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function hg(i){let t=new WeakMap;function e(o,a){return a===Yo?o.mapping=Oi:a===Zo&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yo||a===Zo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ta(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mr=class extends yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Li=4,yl=[.125,.215,.35,.446,.526,.582],oi=20,wo=new Mr,Il=new Vt,To=null,Vo=0,Ro=0,Po=!1,ii=(1+Math.sqrt(5))/2,Pi=1/ii,Ml=[new T(-ii,Pi,0),new T(ii,Pi,0),new T(-Pi,0,ii),new T(Pi,0,ii),new T(0,ii,-Pi),new T(0,ii,Pi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){To=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Vo,Ro),this._renderer.xr.enabled=Po,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Es,format:nn,colorSpace:Ki,depthBuffer:!1},s=bl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return s}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,s){let a=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Il),h.toneMapping=Gn,h.autoClear=!1;let f=new Ye({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new zt(new Vn,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(Il),A=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let I=this._cubeSize;$s(s,b*I,p>2?I:0,I,I),h.setRenderTarget(s),A&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Oi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;$s(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ml[(s-r-1)%Ml.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*oi-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):oi;g>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${oi}`);let p=[],b=0;for(let E=0;E<oi;++E){let L=E/A,y=Math.exp(-L*L/2);p.push(y),E===0?b+=y:E<g&&(b+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:I}=this;d.dTheta.value=m,d.mipInt.value=I-n;let C=this._sizeLods[s],D=3*C*(s>I-Li?s-I+Li:0),S=4*(this._cubeSize-C);$s(e,D,S,3*C,2*C),c.setRenderTarget(e),c.render(u,wo)}};function ug(i){let t=[],e=[],n=[],s=i,r=i-Li+1+yl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Li?c=yl[o-i+Li-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,A=3,g=2,p=1,b=new Float32Array(A*m*f),I=new Float32Array(g*m*f),C=new Float32Array(p*m*f);for(let S=0;S<f;S++){let E=S%3*2/3-1,L=S>2?0:-1,y=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(y,A*m*S),I.set(d,g*m*S);let _=[S,S,S,S,S,S];C.set(_,p*m*S)}let D=new Ce;D.setAttribute("position",new me(b,A)),D.setAttribute("uv",new me(I,g)),D.setAttribute("faceIndex",new me(C,p)),t.push(D),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bl(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){let n=new Float32Array(oi),s=new T(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Sl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function El(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function fg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Yo||c===Zo,h=c===Oi||c===ki;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new br(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new br(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,A=0;if(f!==null){let b=f.array;A=f.version;for(let I=0,C=b.length;I<C;I+=3){let D=b[I+0],S=b[I+1],E=b[I+2];d.push(D,S,S,E,E,D)}}else if(m!==void 0){let b=m.array;A=m.version;for(let I=0,C=b.length/3-1;I<C;I+=3){let D=I+0,S=I+1,E=I+2;d.push(D,S,S,E,E,D)}}else return;let g=new(Ah(d)?_r:Cr)(d,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,A,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*A[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ag(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xg(i,t,e){let n=new WeakMap,s=new de;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],I=0;f===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let C=a.attributes.position.count*I,D=1;C>t.maxTextureSize&&(D=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let S=new Float32Array(C*D*4*u),E=new Ar(S,C,D,u);E.type=hn,E.needsUpdate=!0;let L=I*4;for(let _=0;_<u;_++){let w=g[_],B=p[_],z=b[_],H=C*D*4*_;for(let K=0;K<w.count;K++){let G=K*L;f===!0&&(s.fromBufferAttribute(w,K),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(B,K),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(z,K),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new pt(C,D)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let A=0;A<l.length;A++)f+=l[A];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Sr=class extends Le{constructor(t,e,n,s,r,o,a,c,l,h=qi){if(h!==qi&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=li),n===void 0&&h===Gi&&(n=Hi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_h=new Le,wl=new Sr(1,1),yh=new Ar,Ih=new Ea,Mh=new Ir,Tl=[],Vl=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Ul=new Float32Array(4);function Ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tl[s];if(r===void 0&&(r=new Float32Array(s),Tl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Vl[t];e===void 0&&(e=new Int32Array(t),Vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(Ae(e,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),xe(e,n)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(Ae(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),xe(e,n)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(Ae(e,n))return;Rl.set(n),i.uniformMatrix4fv(this.addr,!1,Rl),xe(e,n)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=mh,r=wl):r=_h,e.setTexture2D(t||r,s)}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mh,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yh,s)}function zg(i){switch(i){case 5126:return Cg;case 35664:return _g;case 35665:return yg;case 35666:return Ig;case 35674:return Mg;case 35675:return bg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Vg;case 5125:return Rg;case 36294:return Pg;case 36295:return Ug;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(i,t){i.uniform1fv(this.addr,t)}function Og(i,t){let e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){let e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Hg(i,t){let e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Gg(i,t){let e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wg(i,t){let e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xg(i,t){let e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Kg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function Jg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function $g(i,t){i.uniform3uiv(this.addr,t)}function tm(i,t){i.uniform4uiv(this.addr,t)}function em(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_h,r[o])}function nm(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ih,r[o])}function im(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mh,r[o])}function sm(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yh,r[o])}function rm(i){switch(i){case 5126:return Bg;case 35664:return Og;case 35665:return kg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Jg;case 36294:return Qg;case 36295:return $g;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}var Va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Ra=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rm(e.type)}},Pa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Uo=/(\w+)(\])?(\[|\.)?/g;function Ll(i,t){i.seq.push(t),i.map[t.id]=t}function om(i,t,e){let n=i.name,s=n.length;for(Uo.lastIndex=0;;){let r=Uo.exec(n),o=Uo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ll(e,l===void 0?new Va(a,i,t):new Ra(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Pa(a),Ll(e,u)),e=u}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);om(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Dl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var am=37297,cm=0;function lm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nl=new Lt;function hm(i){Xt._getMatrix(Nl,Xt.workingColorSpace,i);let t=`mat3( ${Nl.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ql(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lm(i.getShaderSource(t),o)}else return s}function um(i,t){let e=hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dm(i,t){let e;switch(t){case qu:e="Linear";break;case Fu:e="Reinhard";break;case zu:e="Cineon";break;case uc:e="ACESFilmic";break;case Ou:e="AgX";break;case ku:e="Neutral";break;case Bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tr=new T;function fm(){Xt.getLuminanceCoefficients(tr);let i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function gm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ds(i){return i!==""}function Fl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Am,vm)}var xm=new Map;function vm(i,t){let e=Nt[t];if(e===void 0){let n=xm.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}var Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(Cm,_m)}function _m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ol(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ym(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Im(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case ki:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function bm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Du:t="ENVMAP_BLENDING_MIX";break;case Nu:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Em(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ym(e),l=Im(e),h=Mm(e),u=bm(e),d=Sm(e),f=pm(e),m=gm(r),A=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ds).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(g=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,um("linearToOutputTexel",e.outputColorSpace),fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=Ua(o),o=Fl(o,e),o=zl(o,e),a=Ua(a),a=Fl(a,e),a=zl(a,e),o=Bl(o),a=Bl(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=b+g+o,C=b+p+a,D=Dl(s,s.VERTEX_SHADER,I),S=Dl(s,s.FRAGMENT_SHADER,C);s.attachShader(A,D),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(S).trim(),K=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,D,S);else{let $=ql(s,D,"vertex"),k=ql(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+$+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:K,programLog:B,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(D),s.deleteShader(S),L=new zi(s,A),y=mm(s,A)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,am)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=S,this}var wm=0,La=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Da(t),e.set(t,n)),n}},Da=class{constructor(t){this.id=wm++,this.code=t,this.usedTimes=0}};function Tm(i,t,e,n,s,r,o){let a=new vr,c=new La,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,_,w,B,z){let H=B.fog,K=z.geometry,G=y.isMeshStandardMaterial?B.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),k=$&&$.mapping===Gr?$.image.height:null,st=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=ht!==void 0?ht.length:0,qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let ee,X,tt,xt;if(st){let Qt=cn[st];ee=Qt.vertexShader,X=Qt.fragmentShader}else ee=y.vertexShader,X=y.fragmentShader,c.update(y),tt=c.getVertexShaderID(y),xt=c.getFragmentShaderID(y);let rt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,ce=!!y.map,Gt=!!y.matcap,fe=!!$,U=!!y.aoMap,He=!!y.lightMap,Ot=!!y.bumpMap,kt=!!y.normalMap,Mt=!!y.displacementMap,se=!!y.emissiveMap,It=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,N=y.clearcoat>0,Y=y.dispersion>0,j=y.iridescence>0,W=y.sheen>0,vt=y.transmission>0,ot=x&&!!y.anisotropyMap,ut=N&&!!y.clearcoatMap,Wt=N&&!!y.clearcoatNormalMap,J=N&&!!y.clearcoatRoughnessMap,dt=j&&!!y.iridescenceMap,bt=j&&!!y.iridescenceThicknessMap,Et=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,Dt=!!y.specularColorMap,ne=!!y.specularIntensityMap,V=vt&&!!y.transmissionMap,it=vt&&!!y.thicknessMap,O=!!y.gradientMap,Z=!!y.alphaMap,lt=y.alphaTest>0,at=!!y.alphaHash,Pt=!!y.extensions,ue=Gn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);let ye={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:X,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ki,alphaToCoverage:!!y.alphaToCoverage,map:ce,matcap:Gt,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:He,bumpMap:Ot,normalMap:kt,displacementMap:d&&Mt,emissiveMap:se,normalMapObjectSpace:kt&&y.normalMapType===Xu,normalMapTangentSpace:kt&&y.normalMapType===gh,metalnessMap:It,roughnessMap:M,anisotropy:x,anisotropyMap:ot,clearcoat:N,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:bt,sheen:W,sheenColorMap:Et,sheenRoughnessMap:ft,specularMap:Ht,specularColorMap:Dt,specularIntensityMap:ne,transmission:vt,transmissionMap:V,thicknessMap:it,gradientMap:O,opaque:y.transparent===!1&&y.blending===Ni&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:at,combine:y.combine,mapUv:ce&&A(y.map.channel),aoMapUv:U&&A(y.aoMap.channel),lightMapUv:He&&A(y.lightMap.channel),bumpMapUv:Ot&&A(y.bumpMap.channel),normalMapUv:kt&&A(y.normalMap.channel),displacementMapUv:Mt&&A(y.displacementMap.channel),emissiveMapUv:se&&A(y.emissiveMap.channel),metalnessMapUv:It&&A(y.metalnessMap.channel),roughnessMapUv:M&&A(y.roughnessMap.channel),anisotropyMapUv:ot&&A(y.anisotropyMap.channel),clearcoatMapUv:ut&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&A(y.sheenRoughnessMap.channel),specularMapUv:Ht&&A(y.specularMap.channel),specularColorMapUv:Dt&&A(y.specularColorMap.channel),specularIntensityMapUv:ne&&A(y.specularIntensityMap.channel),transmissionMapUv:V&&A(y.transmissionMap.channel),thicknessMapUv:it&&A(y.thicknessMap.channel),alphaMapUv:Z&&A(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(kt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ce||Z),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:qt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===$t,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Ue,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)_.push(w),_.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(b(_,y),I(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function b(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function I(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function C(y){let _=m[y.type],w;if(_){let B=cn[_];w=xd.clone(B.uniforms)}else w=y.uniforms;return w}function D(y,_){let w;for(let B=0,z=h.length;B<z;B++){let H=h[B];if(H.cacheKey===_){w=H,++w.usedTimes;break}}return w===void 0&&(w=new Em(i,_,y,r),h.push(w)),w}function S(y){if(--y.usedTimes===0){let _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function E(y){c.remove(y)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:C,acquireProgram:D,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function Vm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function a(u,d,f,m,A,g){let p=o(u,d,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,A,g){let p=o(u,d,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Rm),n.length>1&&n.sort(d||kl),s.length>1&&s.sort(d||kl)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Pm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Hl,i.set(n,[o])):s>=r.length?(o=new Hl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Um(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Vt};break;case"SpotLight":e={position:new T,direction:new T,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Lm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Dm=0;function Nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qm(i){let t=new Um,e=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new jt,o=new jt;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,b=0,I=0,C=0,D=0,S=0,E=0;l.sort(Nm);for(let y=0,_=l.length;y<_;y++){let w=l[y],B=w.color,z=w.intensity,H=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*z,u+=B.g*z,d+=B.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],z);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=w.shadow.matrix,b++}n.directional[f]=G,f++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(B).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[A]=G;let $=w.shadow;if(w.map&&(n.spotLightMap[D]=w.map,D++,$.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[A]=$.matrix,w.castShadow){let k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=K,C++}A++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(B).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let $=w.shadow,k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=w.shadow.matrix,I++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==A||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==I||L.numSpotShadows!==C||L.numSpotMaps!==D||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=C+D-S,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=f,L.pointLength=m,L.spotLength=A,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=I,L.numSpotShadows=C,L.numSpotMaps=D,L.numLightProbes=E,n.version=Dm++)}function c(l,h){let u=0,d=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let I=l[p];if(I.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(I.isSpotLight){let C=n.spot[f];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),f++}else if(I.isRectAreaLight){let C=n.rectArea[m];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(I.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),m++}else if(I.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(g),d++}else if(I.isHemisphereLight){let C=n.hemi[A];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(g),A++}}}return{setup:a,setupView:c,state:n}}function Gl(i){let t=new qm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Gl(i),t.set(s,[a])):r>=o.length?(a=new Gl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Na=class extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function Om(i,t,e){let n=new xs,s=new pt,r=new pt,o=new de,a=new Na({depthPacking:Wu}),c=new qa,l={},h=e.maxTextureSize,u={[Wn]:Ue,[Ue]:Wn,[en]:en},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:zm,fragmentShader:Bm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ce;m.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new zt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let p=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Hn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==In&&this.type===In,H=p===In&&this.type!==In;for(let K=0,G=S.length;K<G;K++){let $=S[K],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||z===!0||H===!0){let yt=this.type!==In?{minFilter:Oe,magFilter:Oe}:{};k.map!==null&&k.map.dispose(),k.map=new wn(s.x,s.y,yt),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ht=k.getViewportCount();for(let yt=0;yt<ht;yt++){let qt=k.getViewport(yt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),B.viewport(o),k.updateMatrices($,yt),n=k.getFrustum(),C(E,L,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===In&&b(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,_,w)};function b(S,E){let L=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,d,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,f,A,null)}function I(S,E,L,y){let _=null,w=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)_=w;else if(_=L.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let B=_.uuid,z=E.uuid,H=l[B];H===void 0&&(H={},l[B]=H);let K=H[z];K===void 0&&(K=_.clone(),H[z]=K,E.addEventListener("dispose",D)),_=K}if(_.visible=E.visible,_.wireframe=E.wireframe,y===In?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=i.properties.get(_);B.light=L}return _}function C(S,E,L,y,_){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===In)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let z=t.update(S),H=S.material;if(Array.isArray(H)){let K=z.groups;for(let G=0,$=K.length;G<$;G++){let k=K[G],st=H[k.materialIndex];if(st&&st.visible){let ht=I(S,st,y,_);S.onBeforeShadow(i,S,E,L,z,ht,k),i.renderBufferDirect(L,null,z,ht,S,k),S.onAfterShadow(i,S,E,L,z,ht,k)}}}else if(H.visible){let K=I(S,H,y,_);S.onBeforeShadow(i,S,E,L,z,K,null),i.renderBufferDirect(L,null,z,K,S,null),S.onAfterShadow(i,S,E,L,z,K,null)}}let B=S.children;for(let z=0,H=B.length;z<H;z++)C(B[z],E,L,y,_)}function D(S){S.target.removeEventListener("dispose",D);for(let L in l){let y=l[L],_=S.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var km={[Bo]:Oo,[ko]:Wo,[Ho]:Xo,[Bi]:Go,[Oo]:Bo,[Wo]:ko,[Xo]:Ho,[Go]:Bi};function Hm(i,t){function e(){let V=!1,it=new de,O=null,Z=new de(0,0,0,0);return{setMask:function(lt){O!==lt&&!V&&(i.colorMask(lt,lt,lt,lt),O=lt)},setLocked:function(lt){V=lt},setClear:function(lt,at,Pt,ue,ye){ye===!0&&(lt*=ue,at*=ue,Pt*=ue),it.set(lt,at,Pt,ue),Z.equals(it)===!1&&(i.clearColor(lt,at,Pt,ue),Z.copy(it))},reset:function(){V=!1,O=null,Z.set(-1,0,0,0)}}}function n(){let V=!1,it=!1,O=null,Z=null,lt=null;return{setReversed:function(at){if(it!==at){let Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let ue=lt;lt=null,this.setClear(ue)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(at){O!==at&&!V&&(i.depthMask(at),O=at)},setFunc:function(at){if(it&&(at=km[at]),Z!==at){switch(at){case Bo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=at}},setLocked:function(at){V=at},setClear:function(at){lt!==at&&(it&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){V=!1,O=null,Z=null,lt=null,it=!1}}}function s(){let V=!1,it=null,O=null,Z=null,lt=null,at=null,Pt=null,ue=null,ye=null;return{setTest:function(Qt){V||(Qt?rt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!V&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,je,mn){(O!==Qt||Z!==je||lt!==mn)&&(i.stencilFunc(Qt,je,mn),O=Qt,Z=je,lt=mn)},setOp:function(Qt,je,mn){(at!==Qt||Pt!==je||ue!==mn)&&(i.stencilOp(Qt,je,mn),at=Qt,Pt=je,ue=mn)},setLocked:function(Qt){V=Qt},setClear:function(Qt){ye!==Qt&&(i.clearStencil(Qt),ye=Qt)},reset:function(){V=!1,it=null,O=null,Z=null,lt=null,at=null,Pt=null,ue=null,ye=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,b=null,I=null,C=null,D=null,S=null,E=new Vt(0,0,0),L=0,y=!1,_=null,w=null,B=null,z=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=$>=2);let st=null,ht={},yt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ee=new de().fromArray(yt),X=new de().fromArray(qt);function tt(V,it,O,Z){let lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(V,at),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<O;Pt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}let xt={};xt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Bi),Ot(!1),kt(Xc),rt(i.CULL_FACE),U(Hn);function rt(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function St(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Tt(V,it){return u[V]!==it?(i.bindFramebuffer(V,it),u[V]=it,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(V,it){let O=f,Z=!1;if(V){O=d.get(it),O===void 0&&(O=[],d.set(it,O));let lt=V.textures;if(O.length!==lt.length||O[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Pt=lt.length;at<Pt;at++)O[at]=i.COLOR_ATTACHMENT0+at;O.length=lt.length,Z=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Z=!0);Z&&i.drawBuffers(O)}function ce(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let Gt={[si]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};Gt[Cu]=i.MIN,Gt[_u]=i.MAX;let fe={[yu]:i.ZERO,[Iu]:i.ONE,[Mu]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[wu]:i.DST_COLOR,[Su]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[Eu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(V,it,O,Z,lt,at,Pt,ue,ye,Qt){if(V===Hn){A===!0&&(St(i.BLEND),A=!1);return}if(A===!1&&(rt(i.BLEND),A=!0),V!==Au){if(V!==g||Qt!==y){if((p!==si||C!==si)&&(i.blendEquation(i.FUNC_ADD),p=si,C=si),Qt)switch(V){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,I=null,D=null,S=null,E.set(0,0,0),L=0,g=V,y=Qt}return}lt=lt||it,at=at||O,Pt=Pt||Z,(it!==p||lt!==C)&&(i.blendEquationSeparate(Gt[it],Gt[lt]),p=it,C=lt),(O!==b||Z!==I||at!==D||Pt!==S)&&(i.blendFuncSeparate(fe[O],fe[Z],fe[at],fe[Pt]),b=O,I=Z,D=at,S=Pt),(ue.equals(E)===!1||ye!==L)&&(i.blendColor(ue.r,ue.g,ue.b,ye),E.copy(ue),L=ye),g=V,y=!1}function He(V,it){V.side===en?St(i.CULL_FACE):rt(i.CULL_FACE);let O=V.side===Ue;it&&(O=!O),Ot(O),V.blending===Ni&&V.transparent===!1?U(Hn):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Z=V.stencilWrite;a.setTest(Z),Z&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(V){_!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),_=V)}function kt(V){V!==pu?(rt(i.CULL_FACE),V!==w&&(V===Xc?i.cullFace(i.BACK):V===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),w=V}function Mt(V){V!==B&&(G&&i.lineWidth(V),B=V)}function se(V,it,O){V?(rt(i.POLYGON_OFFSET_FILL),(z!==it||H!==O)&&(i.polygonOffset(it,O),z=it,H=O)):St(i.POLYGON_OFFSET_FILL)}function It(V){V?rt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function M(V){V===void 0&&(V=i.TEXTURE0+K-1),st!==V&&(i.activeTexture(V),st=V)}function x(V,it,O){O===void 0&&(st===null?O=i.TEXTURE0+K-1:O=st);let Z=ht[O];Z===void 0&&(Z={type:void 0,texture:void 0},ht[O]=Z),(Z.type!==V||Z.texture!==it)&&(st!==O&&(i.activeTexture(O),st=O),i.bindTexture(V,it||xt[V]),Z.type=V,Z.texture=it)}function N(){let V=ht[st];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(V){ee.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function ft(V){X.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function Ht(V,it){let O=l.get(it);O===void 0&&(O=new WeakMap,l.set(it,O));let Z=O.get(V);Z===void 0&&(Z=i.getUniformBlockIndex(it,V.name),O.set(V,Z))}function Dt(V,it){let Z=l.get(it).get(V);c.get(it)!==Z&&(i.uniformBlockBinding(it,Z,V.__bindingPointIndex),c.set(it,Z))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,b=null,I=null,C=null,D=null,S=null,E=new Vt(0,0,0),L=0,y=!1,_=null,w=null,B=null,z=null,H=null,ee.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:St,bindFramebuffer:Tt,drawBuffers:Ft,useProgram:ce,setBlending:U,setMaterial:He,setFlipSided:Ot,setCullFace:kt,setLineWidth:Mt,setPolygonOffset:se,setScissorTest:It,activeTexture:M,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:dt,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:Wt,texStorage3D:J,texSubImage2D:W,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Et,viewport:ft,reset:ne}}function Wl(i,t,e,n){let s=Gm(n);switch(e){case lh:return i*t;case uh:return i*t;case dh:return i*t*2;case gc:return i*t/s.components*s.byteLength;case mc:return i*t/s.components*s.byteLength;case fh:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case hh:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case xc:return i*t*4/s.components*s.byteLength;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ta:return Math.max(i,16)*Math.max(t,8)/4;case Jo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dr:case xa:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ph:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _a:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case En:case oh:return{byteLength:1,components:1};case As:case ah:case Es:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case li:case dc:case hn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return f?new OffscreenCanvas(M,x):gr("canvas")}function A(M,x,N){let Y=1,j=It(M);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*j.width),vt=Math.floor(Y*j.height);u===void 0&&(u=m(W,vt));let ot=x?m(W,vt):u;return ot.width=W,ot.height=vt,ot.getContext("2d").drawImage(M,0,0,W,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+vt+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(M,x,N,Y,j=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=x;if(x===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),x===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let vt=j?Wr:Xt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=vt===$t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(M,x){let N;return M?x===null||x===li||x===Hi?N=i.DEPTH24_STENCIL8:x===hn?N=i.DEPTH32F_STENCIL8:x===As&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===li||x===Hi?N=i.DEPTH_COMPONENT24:x===hn?N=i.DEPTH_COMPONENT32F:x===As&&(N=i.DEPTH_COMPONENT16),N}function D(M,x){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Oe&&M.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function S(M){let x=M.target;x.removeEventListener("dispose",S),L(x),x.isVideoTexture&&h.delete(x)}function E(M){let x=M.target;x.removeEventListener("dispose",E),_(x)}function L(M){let x=n.get(M);if(x.__webglInit===void 0)return;let N=M.source,Y=d.get(N);if(Y){let j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(M),Object.keys(Y).length===0&&d.delete(N)}n.remove(M)}function y(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let N=M.source,Y=d.get(N);delete Y[x.__cacheKey],o.memory.textures--}function _(M){let x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=M.textures;for(let Y=0,j=N.length;Y<j;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(M)}let w=0;function B(){w=0}function z(){let M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function H(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function K(M,x){let N=n.get(M);if(M.isVideoTexture&&Mt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,M,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function G(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function $(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function k(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){tt(N,M,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let st={[Ko]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},ht={[Oe]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},yt={[Yu]:i.NEVER,[$u]:i.ALWAYS,[Zu]:i.LESS,[mh]:i.LEQUAL,[Ku]:i.EQUAL,[Qu]:i.GEQUAL,[ju]:i.GREATER,[Ju]:i.NOTEQUAL};function qt(M,x){if(x.type===hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===io||x.magFilter===Ls||x.magFilter===ci||x.minFilter===ln||x.minFilter===io||x.minFilter===Ls||x.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,st[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oe||x.minFilter!==Ls&&x.minFilter!==ci||x.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let W=H(x);if(W!==M.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[W].usedTimes++;let vt=j[M.__cacheKey];vt!==void 0&&(j[M.__cacheKey].usedTimes--,vt.usedTimes===0&&y(x)),M.__cacheKey=W,M.__webglTexture=j[W].texture}return N}function X(M,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let j=ee(M,x),W=x.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+N);let vt=n.get(W);if(W.version!==vt.__version||j===!0){e.activeTexture(i.TEXTURE0+N);let ot=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===kn?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===kn||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=A(x.image,!1,s.maxTextureSize);J=se(x,J);let dt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),Et=I(x.internalFormat,dt,bt,x.colorSpace,x.isVideoTexture);qt(Y,x);let ft,Ht=x.mipmaps,Dt=x.isVideoTexture!==!0,ne=vt.__version===void 0||j===!0,V=W.dataReady,it=D(x,J);if(x.isDepthTexture)Et=C(x.format===Gi,x.type),ne&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,dt,bt,null));else if(x.isDataTexture)if(Ht.length>0){Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,Et,Ht[0].width,Ht[0].height);for(let O=0,Z=Ht.length;O<Z;O++)ft=Ht[O],Dt?V&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,bt,ft.data):e.texImage2D(i.TEXTURE_2D,O,Et,ft.width,ft.height,0,dt,bt,ft.data);x.generateMipmaps=!1}else Dt?(ne&&e.texStorage2D(i.TEXTURE_2D,it,Et,J.width,J.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,bt,J.data)):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,dt,bt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,Ht[0].width,Ht[0].height,J.depth);for(let O=0,Z=Ht.length;O<Z;O++)if(ft=Ht[O],x.format!==nn)if(dt!==null)if(Dt){if(V)if(x.layerUpdates.size>0){let lt=Wl(ft.width,ft.height,x.format,x.type);for(let at of x.layerUpdates){let Pt=ft.data.subarray(at*lt/ft.data.BYTES_PER_ELEMENT,(at+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,at,ft.width,ft.height,1,dt,Pt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Et,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,J.depth,dt,bt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,Et,ft.width,ft.height,J.depth,0,dt,bt,ft.data)}else{Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,Et,Ht[0].width,Ht[0].height);for(let O=0,Z=Ht.length;O<Z;O++)ft=Ht[O],x.format!==nn?dt!==null?Dt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,O,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?V&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,bt,ft.data):e.texImage2D(i.TEXTURE_2D,O,Et,ft.width,ft.height,0,dt,bt,ft.data)}else if(x.isDataArrayTexture)if(Dt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,J.width,J.height,J.depth),V)if(x.layerUpdates.size>0){let O=Wl(J.width,J.height,x.format,x.type);for(let Z of x.layerUpdates){let lt=J.data.subarray(Z*O/J.data.BYTES_PER_ELEMENT,(Z+1)*O/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,dt,bt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,bt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,dt,bt,J.data);else if(x.isData3DTexture)Dt?(ne&&e.texStorage3D(i.TEXTURE_3D,it,Et,J.width,J.height,J.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,bt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,dt,bt,J.data);else if(x.isFramebufferTexture){if(ne)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,Et,J.width,J.height);else{let O=J.width,Z=J.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,Et,O,Z,0,dt,bt,null),O>>=1,Z>>=1}}else if(Ht.length>0){if(Dt&&ne){let O=It(Ht[0]);e.texStorage2D(i.TEXTURE_2D,it,Et,O.width,O.height)}for(let O=0,Z=Ht.length;O<Z;O++)ft=Ht[O],Dt?V&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,dt,bt,ft):e.texImage2D(i.TEXTURE_2D,O,Et,dt,bt,ft);x.generateMipmaps=!1}else if(Dt){if(ne){let O=It(J);e.texStorage2D(i.TEXTURE_2D,it,Et,O.width,O.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,bt,J)}else e.texImage2D(i.TEXTURE_2D,0,Et,dt,bt,J);g(x)&&p(Y),vt.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function tt(M,x,N){if(x.image.length!==6)return;let Y=ee(M,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let vt=Xt.getPrimaries(Xt.workingColorSpace),ot=x.colorSpace===kn?null:Xt.getPrimaries(x.colorSpace),ut=x.colorSpace===kn||vt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Wt&&!J?dt[Z]=A(x.image[Z],!0,s.maxCubemapSize):dt[Z]=J?x.image[Z].image:x.image[Z],dt[Z]=se(x,dt[Z]);let bt=dt[0],Et=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),Ht=I(x.internalFormat,Et,ft,x.colorSpace),Dt=x.isVideoTexture!==!0,ne=W.__version===void 0||Y===!0,V=j.dataReady,it=D(x,bt);qt(i.TEXTURE_CUBE_MAP,x);let O;if(Wt){Dt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,bt.width,bt.height);for(let Z=0;Z<6;Z++){O=dt[Z].mipmaps;for(let lt=0;lt<O.length;lt++){let at=O[lt];x.format!==nn?Et!==null?Dt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,at.width,at.height,Et,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,at.width,at.height,Et,ft,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ht,at.width,at.height,0,Et,ft,at.data)}}}else{if(O=x.mipmaps,Dt&&ne){O.length>0&&it++;let Z=It(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Dt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Et,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,dt[Z].width,dt[Z].height,0,Et,ft,dt[Z].data);for(let lt=0;lt<O.length;lt++){let Pt=O[lt].image[Z].image;Dt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Pt.width,Pt.height,Et,ft,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ht,Pt.width,Pt.height,0,Et,ft,Pt.data)}}else{Dt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Et,ft,dt[Z]);for(let lt=0;lt<O.length;lt++){let at=O[lt];Dt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Et,ft,at.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ht,Et,ft,at.image[Z])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),W.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xt(M,x,N,Y,j,W){let vt=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),ut=I(N.internalFormat,vt,ot,N.colorSpace),Wt=n.get(x),J=n.get(N);if(J.__renderTarget=x,!Wt.__hasExternalTextures){let dt=Math.max(1,x.width>>W),bt=Math.max(1,x.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ut,dt,bt,x.depth,0,vt,ot,null):e.texImage2D(j,W,ut,dt,bt,0,vt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,J.__webglTexture,0,Ot(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(M,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){let Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=C(x.stencilBuffer,j),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ot(x);kt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,M)}else{let Y=x.textures;for(let j=0;j<Y.length;j++){let W=Y[j],vt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),ut=I(W.internalFormat,vt,ot,W.colorSpace),Wt=Ot(x);N&&kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,x.width,x.height):kt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let j=Y.__webglTexture,W=Ot(x);if(x.depthTexture.format===qi)kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===Gi)kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Tt(M){let x=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");St(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[Y],M,!1);else{let j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(M,x,N){let Y=n.get(M);x!==void 0&&xt(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Tt(M)}function ce(M){let x=M.texture,N=n.get(M),Y=n.get(x);M.addEventListener("dispose",E);let j=M.textures,W=M.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),W){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ot=0,ut=j.length;ot<ut;ot++){let Wt=n.get(j[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&kt(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let ut=j[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Wt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),dt=I(ut.internalFormat,Wt,J,ut.colorSpace,M.isXRRenderTarget===!0),bt=Ot(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)xt(N.__webglFramebuffer[ot][ut],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else xt(N.__webglFramebuffer[ot],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,ut=j.length;ot<ut;ot++){let Wt=j[ot],J=n.get(Wt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),qt(i.TEXTURE_2D,Wt),xt(N.__webglFramebuffer,M,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),qt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)xt(N.__webglFramebuffer[ut],M,x,i.COLOR_ATTACHMENT0,ot,ut);else xt(N.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,ot,0);g(x)&&p(ot),e.unbindTexture()}M.depthBuffer&&Tt(M)}function Gt(M){let x=M.textures;for(let N=0,Y=x.length;N<Y;N++){let j=x[N];if(g(j)){let W=b(M),vt=n.get(j).__webglTexture;e.bindTexture(W,vt),p(W),e.unbindTexture()}}}let fe=[],U=[];function He(M){if(M.samples>0){if(kt(M)===!1){let x=M.textures,N=M.width,Y=M.height,j=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(M),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Wt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,i.NEAREST),c===!0&&(fe.length=0,U.length=0,fe.push(i.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.resolveDepthBuffer===!1&&(fe.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Wt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ot(M){return Math.min(s.maxSamples,M.samples)}function kt(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(M){let x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function se(M,x){let N=M.colorSpace,Y=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Ki&&N!==kn&&(Xt.getTransfer(N)===$t?(Y!==nn||j!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function It(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=kt}function Xm(i,t){function e(n,s=kn){let r,o=Xt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.BYTE;if(n===ah)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===dc)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===hh)return i.RGB;if(n===nn)return i.RGBA;if(n===uh)return i.LUMINANCE;if(n===dh)return i.LUMINANCE_ALPHA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===fh)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===xc)return i.RGBA_INTEGER;if(n===cr||n===lr||n===hr||n===ur)if(o===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===$o||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return o===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ga||n===ma||n===Aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===xa||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return o===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Ca||n===_a||n===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Fa=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Rt=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ym={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(l,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
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

}`,za=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:Zm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ba=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,A=new za,g=e.getContextAttributes(),p=null,b=null,I=[],C=[],D=new pt,S=null,E=new we;E.viewport=new de;let L=new we;L.viewport=new de;let y=[E,L],_=new Fa,w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=I[X];return tt===void 0&&(tt=new fs,I[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=I[X];return tt===void 0&&(tt=new fs,I[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=I[X];return tt===void 0&&(tt=new fs,I[X]=tt),tt.getHandSpace()};function z(X){let tt=C.indexOf(X.inputSource);if(tt===-1)return;let xt=I[tt];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||o),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let X=0;X<I.length;X++){let tt=C[X];tt!==null&&(C[X]=null,I[X].disconnect(tt))}w=null,B=null,A.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new wn(f.framebufferWidth,f.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,xt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Gi:qi,xt=g.stencil?Hi:li);let St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new wn(d.textureWidth,d.textureHeight,{format:nn,type:En,depthTexture:new Sr(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K(X){for(let tt=0;tt<X.removed.length;tt++){let xt=X.removed[tt],rt=C.indexOf(xt);rt>=0&&(C[rt]=null,I[rt].disconnect(xt))}for(let tt=0;tt<X.added.length;tt++){let xt=X.added[tt],rt=C.indexOf(xt);if(rt===-1){for(let Tt=0;Tt<I.length;Tt++)if(Tt>=C.length){C.push(xt),rt=Tt;break}else if(C[Tt]===null){C[Tt]=xt,rt=Tt;break}if(rt===-1)break}let St=I[rt];St&&St.connect(xt)}}let G=new T,$=new T;function k(X,tt,xt){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);let rt=G.distanceTo($),St=tt.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Ft=St[14]/(St[10]-1),ce=St[14]/(St[10]+1),Gt=(St[9]+1)/St[5],fe=(St[9]-1)/St[5],U=(St[8]-1)/St[0],He=(Tt[8]+1)/Tt[0],Ot=Ft*U,kt=Ft*He,Mt=rt/(-U+He),se=Mt*-U;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(se),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let It=Ft+Mt,M=ce+Mt,x=Ot-se,N=kt+(rt-se),Y=Gt*ce/M*It,j=fe*ce/M*It;X.projectionMatrix.makePerspective(x,N,Y,j,It,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),_.near=L.near=E.near=tt,_.far=L.far=E.far=xt,(w!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,B=_.far),E.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,_.layers.mask=E.layers.mask|L.layers.mask;let rt=X.parent,St=_.cameras;st(_,rt);for(let Tt=0;Tt<St.length;Tt++)st(St[Tt],rt);St.length===2?k(_,E,L):_.projectionMatrix.copy(E.projectionMatrix),ht(X,_,rt)};function ht(X,tt,xt){xt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ma*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let yt=null;function qt(X,tt){if(h=tt.getViewerPose(l||o),m=tt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let rt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Tt=0;Tt<xt.length;Tt++){let Ft=xt[Tt],ce=null;if(f!==null)ce=f.getViewport(Ft);else{let fe=u.getViewSubImage(d,Ft);ce=fe.viewport,Tt===0&&(t.setRenderTargetTextures(b,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(b))}let Gt=y[Tt];Gt===void 0&&(Gt=new we,Gt.layers.enable(Tt),Gt.viewport=new de,y[Tt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ce.x,ce.y,ce.width,ce.height),Tt===0&&(_.matrix.copy(Gt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Gt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let Tt=u.getDepthInformation(xt[0]);Tt&&Tt.isValid&&Tt.texture&&A.init(t,Tt,s.renderState)}}for(let xt=0;xt<I.length;xt++){let rt=C[xt],St=I[xt];rt!==null&&St!==void 0&&St.update(rt,tt,l||o)}yt&&yt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let ee=new Ch;ee.setAnimationLoop(qt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}},ni=new De,jm=new jt;function Jm(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,I,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,C)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,b,I):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),I=b.envMap,C=b.envMapRotation;I&&(g.envMap.value=I,ni.copy(C),ni.x*=-1,ni.y*=-1,ni.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),g.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(ni)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,I){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=I*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qm(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,I){let C=I.program;n.uniformBlockBinding(b,C)}function l(b,I){let C=s[b.id];C===void 0&&(m(b),C=h(b),s[b.id]=C,b.addEventListener("dispose",g));let D=I.program;n.updateUBOMapping(b,D);let S=t.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let I=u();b.__bindingPointIndex=I;let C=i.createBuffer(),D=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,D,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,C),C}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let I=s[b.id],C=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,E=C.length;S<E;S++){let L=Array.isArray(C[S])?C[S]:[C[S]];for(let y=0,_=L.length;y<_;y++){let w=L[y];if(f(w,S,y,D)===!0){let B=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],H=0;for(let K=0;K<z.length;K++){let G=z[K],$=A(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,I,C,D){let S=b.value,E=I+"_"+C;if(D[E]===void 0)return typeof S=="number"||typeof S=="boolean"?D[E]=S:D[E]=S.clone(),!0;{let L=D[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return D[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(b){let I=b.uniforms,C=0,D=16;for(let E=0,L=I.length;E<L;E++){let y=Array.isArray(I[E])?I[E]:[I[E]];for(let _=0,w=y.length;_<w;_++){let B=y[_],z=Array.isArray(B.value)?B.value:[B.value];for(let H=0,K=z.length;H<K;H++){let G=z[H],$=A(G),k=C%D,st=k%$.boundary,ht=k+st;C+=st,ht!==0&&D-ht<$.storage&&(C+=D-ht),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,C+=$.storage}}}let S=C%D;return S>0&&(C+=D-S),b.__size=C,b.__cache={},this}function A(b){let I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),I}function g(b){let I=b.target;I.removeEventListener("dispose",g);let C=o.indexOf(I.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Er=class{constructor(t={}){let{canvas:e=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,b=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Gn,this.toneMappingExposure=1;let C=this,D=!1,S=0,E=0,L=null,y=-1,_=null,w=new de,B=new de,z=null,H=new Vt(0),K=0,G=e.width,$=e.height,k=1,st=null,ht=null,yt=new de(0,0,G,$),qt=new de(0,0,G,$),ee=!1,X=new xs,tt=!1,xt=!1,rt=new jt,St=new jt,Tt=new T,Ft=new de,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function fe(){return L===null?k:1}let U=n;function He(v,R){return e.getContext(v,R)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){let R="webgl2";if(U=He(R,v),U===null)throw He(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ot,kt,Mt,se,It,M,x,N,Y,j,W,vt,ot,ut,Wt,J,dt,bt,Et,ft,Ht,Dt,ne,V;function it(){Ot=new pg(U),Ot.init(),Dt=new Xm(U,Ot),kt=new cg(U,Ot,t,Dt),Mt=new Hm(U,Ot),kt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),se=new Ag(U),It=new Vm,M=new Wm(U,Ot,Mt,It,kt,Dt,se),x=new hg(C),N=new fg(C),Y=new Id(U),ne=new og(U,Y),j=new gg(U,Y,se,ne),W=new vg(U,j,Y,se),Et=new xg(U,kt,M),J=new lg(It),vt=new Tm(C,x,N,Ot,kt,ne,J),ot=new Jm(C,It),ut=new Pm,Wt=new Fm(Ot),bt=new rg(C,x,N,Mt,W,f,c),dt=new Om(C,W,kt),V=new Qm(U,se,kt,Mt),ft=new ag(U,Ot,se),Ht=new mg(U,Ot,se),se.programs=vt.programs,C.capabilities=kt,C.extensions=Ot,C.properties=It,C.renderLists=ut,C.shadowMap=dt,C.state=Mt,C.info=se}it();let O=new Ba(C,U);this.xr=O,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Ot.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ot.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,$,!1))},this.getSize=function(v){return v.set(G,$)},this.setSize=function(v,R,q=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,$=R,e.width=Math.floor(v*k),e.height=Math.floor(R*k),q===!0&&(e.style.width=v+"px",e.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(G*k,$*k).floor()},this.setDrawingBufferSize=function(v,R,q){G=v,$=R,k=q,e.width=Math.floor(v*q),e.height=Math.floor(R*q),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(yt)},this.setViewport=function(v,R,q,F){v.isVector4?yt.set(v.x,v.y,v.z,v.w):yt.set(v,R,q,F),Mt.viewport(w.copy(yt).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(qt)},this.setScissor=function(v,R,q,F){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,R,q,F),Mt.scissor(B.copy(qt).multiplyScalar(k).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(v){Mt.setScissorTest(ee=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(v=!0,R=!0,q=!0){let F=0;if(v){let P=!1;if(L!==null){let Q=L.texture.format;P=Q===xc||Q===Ac||Q===mc}if(P){let Q=L.texture.type,ct=Q===En||Q===li||Q===As||Q===Hi||Q===fc||Q===pc,gt=bt.getClearColor(),mt=bt.getClearAlpha(),wt=gt.r,Ut=gt.g,At=gt.b;ct?(m[0]=wt,m[1]=Ut,m[2]=At,m[3]=mt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=wt,A[1]=Ut,A[2]=At,A[3]=mt,U.clearBufferiv(U.COLOR,0,A))}else F|=U.COLOR_BUFFER_BIT}R&&(F|=U.DEPTH_BUFFER_BIT),q&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Wt.dispose(),It.dispose(),x.dispose(),N.dispose(),W.dispose(),ne.dispose(),V.dispose(),vt.dispose(),O.dispose(),O.removeEventListener("sessionstart",Fc),O.removeEventListener("sessionend",zc),jn.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let v=se.autoReset,R=dt.enabled,q=dt.autoUpdate,F=dt.needsUpdate,P=dt.type;it(),se.autoReset=v,dt.enabled=R,dt.autoUpdate=q,dt.needsUpdate=F,dt.type=P}function at(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pt(v){let R=v.target;R.removeEventListener("dispose",Pt),ue(R)}function ue(v){ye(v),It.remove(v)}function ye(v){let R=It.get(v).programs;R!==void 0&&(R.forEach(function(q){vt.releaseProgram(q)}),v.isShaderMaterial&&vt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,q,F,P,Q){R===null&&(R=ce);let ct=P.isMesh&&P.matrixWorld.determinant()<0,gt=uu(v,R,q,F,P);Mt.setMaterial(F,ct);let mt=q.index,wt=1;if(F.wireframe===!0){if(mt=j.getWireframeAttribute(q),mt===void 0)return;wt=2}let Ut=q.drawRange,At=q.attributes.position,Yt=Ut.start*wt,ie=(Ut.start+Ut.count)*wt;Q!==null&&(Yt=Math.max(Yt,Q.start*wt),ie=Math.min(ie,(Q.start+Q.count)*wt)),mt!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,mt.count)):At!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,At.count));let re=ie-Yt;if(re<0||re===1/0)return;ne.setup(P,F,gt,q,mt);let Ve,Zt=ft;if(mt!==null&&(Ve=Y.get(mt),Zt=Ht,Zt.setIndex(Ve)),P.isMesh)F.wireframe===!0?(Mt.setLineWidth(F.wireframeLinewidth*fe()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(P.isLine){let Ct=F.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*fe()),P.isLineSegments?Zt.setMode(U.LINES):P.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else P.isPoints?Zt.setMode(U.POINTS):P.isSprite&&Zt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Zt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Zt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ct=P._multiDrawStarts,An=P._multiDrawCounts,Kt=P._multiDrawCount,Je=mt?Y.get(mt).bytesPerElement:1,xi=It.get(F).currentProgram.getUniforms();for(let Fe=0;Fe<Kt;Fe++)xi.setValue(U,"_gl_DrawID",Fe),Zt.render(Ct[Fe]/Je,An[Fe])}else if(P.isInstancedMesh)Zt.renderInstances(Yt,re,P.count);else if(q.isInstancedBufferGeometry){let Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,An=Math.min(q.instanceCount,Ct);Zt.renderInstances(Yt,re,An)}else Zt.render(Yt,re)};function Qt(v,R,q){v.transparent===!0&&v.side===en&&v.forceSinglePass===!1?(v.side=Ue,v.needsUpdate=!0,Us(v,R,q),v.side=Wn,v.needsUpdate=!0,Us(v,R,q),v.side=en):Us(v,R,q)}this.compile=function(v,R,q=null){q===null&&(q=v),p=Wt.get(q),p.init(R),I.push(p),q.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),v!==q&&v.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let F=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let Q=P.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){let gt=Q[ct];Qt(gt,q,P),F.add(gt)}else Qt(Q,q,P),F.add(Q)}),I.pop(),p=null,F},this.compileAsync=function(v,R,q=null){let F=this.compile(v,R,q);return new Promise(P=>{function Q(){if(F.forEach(function(ct){It.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){P(v);return}setTimeout(Q,10)}Ot.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function mn(v){je&&je(v)}function Fc(){jn.stop()}function zc(){jn.start()}let jn=new Ch;jn.setAnimationLoop(mn),typeof self!="undefined"&&jn.setContext(self),this.setAnimationLoop=function(v){je=v,O.setAnimationLoop(v),v===null?jn.stop():jn.start()},O.addEventListener("sessionstart",Fc),O.addEventListener("sessionend",zc),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(R),R=O.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,R,L),p=Wt.get(v,I.length),p.init(R),I.push(p),St.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),X.setFromProjectionMatrix(St),xt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,xt),g=ut.get(v,b.length),g.init(),b.push(g),O.enabled===!0&&O.isPresenting===!0){let Q=C.xr.getDepthSensingMesh();Q!==null&&no(Q,R,-1/0,C.sortObjects)}no(v,R,0,C.sortObjects),g.finish(),C.sortObjects===!0&&g.sort(st,ht),Gt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Gt&&bt.addToRenderList(g,v),this.info.render.frame++,tt===!0&&J.beginShadows();let q=p.state.shadowsArray;dt.render(q,v,R),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,P=g.transmissive;if(p.setupLights(),R.isArrayCamera){let Q=R.cameras;if(P.length>0)for(let ct=0,gt=Q.length;ct<gt;ct++){let mt=Q[ct];Oc(F,P,v,mt)}Gt&&bt.render(v);for(let ct=0,gt=Q.length;ct<gt;ct++){let mt=Q[ct];Bc(g,v,mt,mt.viewport)}}else P.length>0&&Oc(F,P,v,R),Gt&&bt.render(v),Bc(g,v,R);L!==null&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(C,v,R),ne.resetDefaultState(),y=-1,_=null,I.pop(),I.length>0?(p=I[I.length-1],tt===!0&&J.setGlobalState(C.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function no(v,R,q,F){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){F&&Ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(St);let ct=W.update(v),gt=v.material;gt.visible&&g.push(v,ct,gt,q,Ft.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let ct=W.update(v),gt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ft.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(v.matrixWorld).applyMatrix4(St)),Array.isArray(gt)){let mt=ct.groups;for(let wt=0,Ut=mt.length;wt<Ut;wt++){let At=mt[wt],Yt=gt[At.materialIndex];Yt&&Yt.visible&&g.push(v,ct,Yt,q,Ft.z,At)}}else gt.visible&&g.push(v,ct,gt,q,Ft.z,null)}}let Q=v.children;for(let ct=0,gt=Q.length;ct<gt;ct++)no(Q[ct],R,q,F)}function Bc(v,R,q,F){let P=v.opaque,Q=v.transmissive,ct=v.transparent;p.setupLightsView(q),tt===!0&&J.setGlobalState(C.clippingPlanes,q),F&&Mt.viewport(w.copy(F)),P.length>0&&Ps(P,R,q),Q.length>0&&Ps(Q,R,q),ct.length>0&&Ps(ct,R,q),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Oc(v,R,q,F){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new wn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Es:En,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let Q=p.state.transmissionRenderTarget[F.id],ct=F.viewport||w;Q.setSize(ct.z,ct.w);let gt=C.getRenderTarget();C.setRenderTarget(Q),C.getClearColor(H),K=C.getClearAlpha(),K<1&&C.setClearColor(16777215,.5),C.clear(),Gt&&bt.render(q);let mt=C.toneMapping;C.toneMapping=Gn;let wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),tt===!0&&J.setGlobalState(C.clippingPlanes,F),Ps(v,q,F),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let At=0,Yt=R.length;At<Yt;At++){let ie=R[At],re=ie.object,Ve=ie.geometry,Zt=ie.material,Ct=ie.group;if(Zt.side===en&&re.layers.test(F.layers)){let An=Zt.side;Zt.side=Ue,Zt.needsUpdate=!0,kc(re,q,F,Ve,Zt,Ct),Zt.side=An,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}C.setRenderTarget(gt),C.setClearColor(H,K),wt!==void 0&&(F.viewport=wt),C.toneMapping=mt}function Ps(v,R,q){let F=R.isScene===!0?R.overrideMaterial:null;for(let P=0,Q=v.length;P<Q;P++){let ct=v[P],gt=ct.object,mt=ct.geometry,wt=F===null?ct.material:F,Ut=ct.group;gt.layers.test(q.layers)&&kc(gt,R,q,mt,wt,Ut)}}function kc(v,R,q,F,P,Q){v.onBeforeRender(C,R,q,F,P,Q),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(C,R,q,F,v,Q),P.transparent===!0&&P.side===en&&P.forceSinglePass===!1?(P.side=Ue,P.needsUpdate=!0,C.renderBufferDirect(q,R,F,P,v,Q),P.side=Wn,P.needsUpdate=!0,C.renderBufferDirect(q,R,F,P,v,Q),P.side=en):C.renderBufferDirect(q,R,F,P,v,Q),v.onAfterRender(C,R,q,F,P,Q)}function Us(v,R,q){R.isScene!==!0&&(R=ce);let F=It.get(v),P=p.state.lights,Q=p.state.shadowsArray,ct=P.state.version,gt=vt.getParameters(v,P.state,Q,R,q),mt=vt.getProgramCacheKey(gt),wt=F.programs;F.environment=v.isMeshStandardMaterial?R.environment:null,F.fog=R.fog,F.envMap=(v.isMeshStandardMaterial?N:x).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Pt),wt=new Map,F.programs=wt);let Ut=wt.get(mt);if(Ut!==void 0){if(F.currentProgram===Ut&&F.lightsStateVersion===ct)return Gc(v,gt),Ut}else gt.uniforms=vt.getUniforms(v),v.onBeforeCompile(gt,C),Ut=vt.acquireProgram(gt,mt),wt.set(mt,Ut),F.uniforms=gt.uniforms;let At=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=J.uniform),Gc(v,gt),F.needsLights=fu(v),F.lightsStateVersion=ct,F.needsLights&&(At.ambientLightColor.value=P.state.ambient,At.lightProbe.value=P.state.probe,At.directionalLights.value=P.state.directional,At.directionalLightShadows.value=P.state.directionalShadow,At.spotLights.value=P.state.spot,At.spotLightShadows.value=P.state.spotShadow,At.rectAreaLights.value=P.state.rectArea,At.ltc_1.value=P.state.rectAreaLTC1,At.ltc_2.value=P.state.rectAreaLTC2,At.pointLights.value=P.state.point,At.pointLightShadows.value=P.state.pointShadow,At.hemisphereLights.value=P.state.hemi,At.directionalShadowMap.value=P.state.directionalShadowMap,At.directionalShadowMatrix.value=P.state.directionalShadowMatrix,At.spotShadowMap.value=P.state.spotShadowMap,At.spotLightMatrix.value=P.state.spotLightMatrix,At.spotLightMap.value=P.state.spotLightMap,At.pointShadowMap.value=P.state.pointShadowMap,At.pointShadowMatrix.value=P.state.pointShadowMatrix),F.currentProgram=Ut,F.uniformsList=null,Ut}function Hc(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=zi.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function Gc(v,R){let q=It.get(v);q.outputColorSpace=R.outputColorSpace,q.batching=R.batching,q.batchingColor=R.batchingColor,q.instancing=R.instancing,q.instancingColor=R.instancingColor,q.instancingMorph=R.instancingMorph,q.skinning=R.skinning,q.morphTargets=R.morphTargets,q.morphNormals=R.morphNormals,q.morphColors=R.morphColors,q.morphTargetsCount=R.morphTargetsCount,q.numClippingPlanes=R.numClippingPlanes,q.numIntersection=R.numClipIntersection,q.vertexAlphas=R.vertexAlphas,q.vertexTangents=R.vertexTangents,q.toneMapping=R.toneMapping}function uu(v,R,q,F,P){R.isScene!==!0&&(R=ce),M.resetTextureUnits();let Q=R.fog,ct=F.isMeshStandardMaterial?R.environment:null,gt=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ki,mt=(F.isMeshStandardMaterial?N:x).get(F.envMap||ct),wt=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ut=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),At=!!q.morphAttributes.position,Yt=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color,re=Gn;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(re=C.toneMapping);let Ve=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=Ve!==void 0?Ve.length:0,Ct=It.get(F),An=p.state.lights;if(tt===!0&&(xt===!0||v!==_)){let Ge=v===_&&F.id===y;J.setState(F,v,Ge)}let Kt=!1;F.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==An.state.version||Ct.outputColorSpace!==gt||P.isBatchedMesh&&Ct.batching===!1||!P.isBatchedMesh&&Ct.batching===!0||P.isBatchedMesh&&Ct.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ct.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ct.instancing===!1||!P.isInstancedMesh&&Ct.instancing===!0||P.isSkinnedMesh&&Ct.skinning===!1||!P.isSkinnedMesh&&Ct.skinning===!0||P.isInstancedMesh&&Ct.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ct.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ct.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ct.instancingMorph===!1&&P.morphTexture!==null||Ct.envMap!==mt||F.fog===!0&&Ct.fog!==Q||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==J.numPlanes||Ct.numIntersection!==J.numIntersection)||Ct.vertexAlphas!==wt||Ct.vertexTangents!==Ut||Ct.morphTargets!==At||Ct.morphNormals!==Yt||Ct.morphColors!==ie||Ct.toneMapping!==re||Ct.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,Ct.__version=F.version);let Je=Ct.currentProgram;Kt===!0&&(Je=Us(F,R,P));let xi=!1,Fe=!1,ns=!1,oe=Je.getUniforms(),an=Ct.uniforms;if(Mt.useProgram(Je.program)&&(xi=!0,Fe=!0,ns=!0),F.id!==y&&(y=F.id,Fe=!0),xi||_!==v){Mt.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),id(rt),sd(rt),oe.setValue(U,"projectionMatrix",rt)):oe.setValue(U,"projectionMatrix",v.projectionMatrix),oe.setValue(U,"viewMatrix",v.matrixWorldInverse);let Ln=oe.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,Tt.setFromMatrixPosition(v.matrixWorld)),kt.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&oe.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Fe=!0,ns=!0)}if(P.isSkinnedMesh){oe.setOptional(U,P,"bindMatrix"),oe.setOptional(U,P,"bindMatrixInverse");let Ge=P.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),oe.setValue(U,"boneTexture",Ge.boneTexture,M))}P.isBatchedMesh&&(oe.setOptional(U,P,"batchingTexture"),oe.setValue(U,"batchingTexture",P._matricesTexture,M),oe.setOptional(U,P,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",P._indirectTexture,M),oe.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",P._colorsTexture,M));let is=q.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Et.update(P,q,Je),(Fe||Ct.receiveShadow!==P.receiveShadow)&&(Ct.receiveShadow=P.receiveShadow,oe.setValue(U,"receiveShadow",P.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(an.envMap.value=mt,an.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&R.environment!==null&&(an.envMapIntensity.value=R.environmentIntensity),Fe&&(oe.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&du(an,ns),Q&&F.fog===!0&&ot.refreshFogUniforms(an,Q),ot.refreshMaterialUniforms(an,F,k,$,p.state.transmissionRenderTarget[v.id]),zi.upload(U,Hc(Ct),an,M)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(zi.upload(U,Hc(Ct),an,M),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&oe.setValue(U,"center",P.center),oe.setValue(U,"modelViewMatrix",P.modelViewMatrix),oe.setValue(U,"normalMatrix",P.normalMatrix),oe.setValue(U,"modelMatrix",P.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ge=F.uniformsGroups;for(let Ln=0,Dn=Ge.length;Ln<Dn;Ln++){let Wc=Ge[Ln];V.update(Wc,Je),V.bind(Wc,Je)}}return Je}function du(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function fu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,R,q){It.get(v.texture).__webglTexture=R,It.get(v.depthTexture).__webglTexture=q;let F=It.get(v);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,R){let q=It.get(v);q.__webglFramebuffer=R,q.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,q=0){L=v,S=R,E=q;let F=!0,P=null,Q=!1,ct=!1;if(v){let mt=It.get(v);if(mt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),F=!1;else if(mt.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(mt.__hasExternalTextures)M.rebindTextures(v,It.get(v.texture).__webglTexture,It.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let At=v.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&It.has(At)&&(v.width!==At.image.width||v.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);let Ut=It.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[R])?P=Ut[R][q]:P=Ut[R],Q=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?P=It.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?P=Ut[q]:P=Ut,w.copy(v.viewport),B.copy(v.scissor),z=v.scissorTest}else w.copy(yt).multiplyScalar(k).floor(),B.copy(qt).multiplyScalar(k).floor(),z=ee;if(Mt.bindFramebuffer(U.FRAMEBUFFER,P)&&F&&Mt.drawBuffers(v,P),Mt.viewport(w),Mt.scissor(B),Mt.setScissorTest(z),Q){let mt=It.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,mt.__webglTexture,q)}else if(ct){let mt=It.get(v.texture),wt=R||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,q||0,wt)}y=-1},this.readRenderTargetPixels=function(v,R,q,F,P,Q,ct){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){Mt.bindFramebuffer(U.FRAMEBUFFER,gt);try{let mt=v.texture,wt=mt.format,Ut=mt.type;if(!kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-F&&q>=0&&q<=v.height-P&&U.readPixels(R,q,F,P,Dt.convert(wt),Dt.convert(Ut),Q)}finally{let mt=L!==null?It.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,R,q,F,P,Q,ct){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){let mt=v.texture,wt=mt.format,Ut=mt.type;if(!kt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=v.width-F&&q>=0&&q<=v.height-P){Mt.bindFramebuffer(U.FRAMEBUFFER,gt);let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(R,q,F,P,Dt.convert(wt),Dt.convert(Ut),0);let Yt=L!==null?It.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,Yt);let ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nd(U,ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(At),U.deleteSync(ie),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,R=null,q=0){v.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,v=arguments[1]);let F=Math.pow(2,-q),P=Math.floor(v.image.width*F),Q=Math.floor(v.image.height*F),ct=R!==null?R.x:0,gt=R!==null?R.y:0;M.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ct,gt,P,Q),Mt.unbindTexture()},this.copyTextureToTexture=function(v,R,q=null,F=null,P=0){v.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,v=arguments[1],R=arguments[2],P=arguments[3]||0,q=null);let Q,ct,gt,mt,wt,Ut,At,Yt,ie,re=v.isCompressedTexture?v.mipmaps[P]:v.image;q!==null?(Q=q.max.x-q.min.x,ct=q.max.y-q.min.y,gt=q.isBox3?q.max.z-q.min.z:1,mt=q.min.x,wt=q.min.y,Ut=q.isBox3?q.min.z:0):(Q=re.width,ct=re.height,gt=re.depth||1,mt=0,wt=0,Ut=0),F!==null?(At=F.x,Yt=F.y,ie=F.z):(At=0,Yt=0,ie=0);let Ve=Dt.convert(R.format),Zt=Dt.convert(R.type),Ct;R.isData3DTexture?(M.setTexture3D(R,0),Ct=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),Ct=U.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let An=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),xi=U.getParameter(U.UNPACK_SKIP_ROWS),Fe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);let ns=v.isDataArrayTexture||v.isData3DTexture,oe=R.isDataArrayTexture||R.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let an=It.get(v),is=It.get(R),Ge=It.get(an.__renderTarget),Ln=It.get(is.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Dn=0;Dn<gt;Dn++)ns&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(v).__webglTexture,P,Ut+Dn),v.isDepthTexture?(oe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(R).__webglTexture,P,ie+Dn),U.blitFramebuffer(mt,wt,Q,ct,At,Yt,Q,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):oe?U.copyTexSubImage3D(Ct,P,At,Yt,ie+Dn,mt,wt,Q,ct):U.copyTexSubImage2D(Ct,P,At,Yt,ie+Dn,mt,wt,Q,ct);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(Ct,P,At,Yt,ie,Q,ct,gt,Ve,Zt,re.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,P,At,Yt,ie,Q,ct,gt,Ve,re.data):U.texSubImage3D(Ct,P,At,Yt,ie,Q,ct,gt,Ve,Zt,re):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,At,Yt,Q,ct,Ve,Zt,re.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,At,Yt,re.width,re.height,Ve,re.data):U.texSubImage2D(U.TEXTURE_2D,P,At,Yt,Q,ct,Ve,Zt,re);U.pixelStorei(U.UNPACK_ROW_LENGTH,An),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,xi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe),P===0&&R.generateMipmaps&&U.generateMipmap(Ct),Mt.unbindTexture()},this.copyTextureToTexture3D=function(v,R,q=null,F=null,P=0){return v.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,F=arguments[1]||null,v=arguments[2],R=arguments[3],P=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,q,F,P)},this.initRenderTarget=function(v){It.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),Mt.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,Mt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var wr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Oa=class extends Le{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Oe,h=Oe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ui=new jt,Xl=new jt,er=[],Yl=new Tn,$m=new jt,ls=new zt,hs=new Yn,Vr=class extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$m)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Yl.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Yl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),hs.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),Xl.multiplyMatrices(n,Ui),ls.matrixWorld=Xl,ls.raycast(t,er);for(let o=0,a=er.length;o<a;o++){let c=er[o];c.instanceId=r,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oa(new Float32Array(s*this.count),s,this.count,gc,hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cs=class extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zl=new jt,ka=new xr,nr=new Yn,ir=new T,Rr=class extends Se{constructor(t=new Ce,e=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Zl.copy(s).invert(),ka.copy(t.ray).applyMatrix4(Zl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,A=f;m<A;m++){let g=l.getX(m);ir.fromBufferAttribute(u,g),Kl(ir,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,A=f;m<A;m++)ir.fromBufferAttribute(u,m),Kl(ir,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kl(i,t,e,n,s,r,o){let a=ka.distanceSqToPoint(i);if(a<e){let c=new T;ka.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pr=class extends Le{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],o=[],a=new T,c=new jt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_s=class extends Ze{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ha=class extends _s{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var sr=new T,Lo=new Cc,Do=new Cc,No=new Cc,Ga=class extends Ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),l=sr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),A=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),Lo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,A,g),Do.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,A,g),No.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Do.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),No.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lo.calc(c),Do.calc(c),No.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function tA(i,t){let e=1-i;return e*e*t}function eA(i,t){return 2*(1-i)*i*t}function nA(i,t){return i*i*t}function ps(i,t,e,n){return tA(i,t)+eA(i,e)+nA(i,n)}function iA(i,t){let e=1-i;return e*e*e*t}function sA(i,t){let e=1-i;return 3*e*e*i*t}function rA(i,t){return 3*(1-i)*i*i*t}function oA(i,t){return i*i*i*t}function gs(i,t,e,n,s){return iA(i,t)+sA(i,e)+rA(i,n)+oA(i,s)}var Ur=class extends Ze{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(t,s.x,r.x,o.x,a.x),gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wa=class extends Ze{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(t,s.x,r.x,o.x,a.x),gs(t,s.y,r.y,o.y,a.y),gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lr=class extends Ze{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends Ze{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends Ze{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(t,s.x,r.x,o.x),ps(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends Ze{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(t,s.x,r.x,o.x),ps(t,s.y,r.y,o.y),ps(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(jl(a,c.x,l.x,h.x,u.x),jl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Jl=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:Ga,CubicBezierCurve:Ur,CubicBezierCurve3:Wa,EllipseCurve:_s,LineCurve:Lr,LineCurve3:Xa,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:Ya,SplineCurve:Nr}),Za=class extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jl[s.type]().fromJSON(s))}return this}},qr=class extends Za{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Dr(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ur(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Nr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new _s(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Xi=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new T,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},dn=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,A=[],g=n/2,p=0;b(),o===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function b(){let C=new T,D=new T,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let y=[],_=L/r,w=_*(e-t)+t;for(let B=0;B<=s;B++){let z=B/s,H=z*c+a,K=Math.sin(H),G=Math.cos(H);D.x=w*K,D.y=-_*n+g,D.z=w*G,u.push(D.x,D.y,D.z),C.set(K,E,G).normalize(),d.push(C.x,C.y,C.z),f.push(z,1-_),y.push(m++)}A.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){let _=A[y][L],w=A[y+1][L],B=A[y+1][L+1],z=A[y][L+1];(t>0||y!==0)&&(h.push(_,w,z),S+=3),(e>0||y!==r-1)&&(h.push(w,B,z),S+=3)}l.addGroup(p,S,0),p+=S}function I(C){let D=m,S=new pt,E=new T,L=0,y=C===!0?t:e,_=C===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;let w=m;for(let B=0;B<=s;B++){let H=B/s*c+a,K=Math.cos(H),G=Math.sin(H);E.x=y*G,E.y=g*_,E.z=y*K,u.push(E.x,E.y,E.z),d.push(0,_,0),S.x=K*.5+.5,S.y=G*.5*_+.5,f.push(S.x,S.y),m++}for(let B=0;B<s;B++){let z=D+B,H=w+B;C===!0?h.push(H,H+1,z):h.push(H+1,H,z),L+=3}l.addGroup(p,L,C===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class i extends dn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ys=class extends qr{constructor(t){super(t),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qr().fromJSON(s))}return this}},aA={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=dA(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Is(r,o,e,a,c,f,0),o}};function bh(i,t,e,n,s){let r,o;if(s===IA(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ql(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ql(r,i[r],i[r+1],o);return o&&Yr(o,o.next)&&(bs(o),o=o.next),o}function hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||le(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,s,r,o){if(!i)return;!o&&r&&AA(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?lA(i,n,s,r):cA(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),bs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=hA(hi(i),t,e),Is(i,t,e,n,s,r,2)):o===2&&uA(i,t,e,n,s,r):Is(hi(i),t,e,n,s,r,1);break}}}function cA(i){let t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Di(s,a,r,c,o,l,m.x,m.y)&&le(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lA(i,t,e,n){let s=i.prev,r=i,o=i.next;if(le(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,A=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Ka(f,m,t,e,n),b=Ka(A,g,t,e,n),I=i.prevZ,C=i.nextZ;for(;I&&I.z>=p&&C&&C.z<=b;){if(I.x>=f&&I.x<=A&&I.y>=m&&I.y<=g&&I!==s&&I!==o&&Di(a,h,c,u,l,d,I.x,I.y)&&le(I.prev,I,I.next)>=0||(I=I.prevZ,C.x>=f&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==o&&Di(a,h,c,u,l,d,C.x,C.y)&&le(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;I&&I.z>=p;){if(I.x>=f&&I.x<=A&&I.y>=m&&I.y<=g&&I!==s&&I!==o&&Di(a,h,c,u,l,d,I.x,I.y)&&le(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;C&&C.z<=b;){if(C.x>=f&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==o&&Di(a,h,c,u,l,d,C.x,C.y)&&le(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function hA(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Yr(s,r)&&Sh(s,n,n.next,r)&&Ms(s,r)&&Ms(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),bs(n),bs(n.next),n=i=r),n=n.next}while(n!==i);return hi(n)}function uA(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&CA(o,a)){let c=Eh(o,a);o=hi(o,o.next),c=hi(c,c.next),Is(o,t,e,n,s,r,0),Is(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dA(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=bh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(vA(l));for(s.sort(fA),r=0;r<s.length;r++)e=pA(s[r],e);return e}function fA(i,t){return i.x-t.x}function pA(i,t){let e=gA(i,t);if(!e)return t;let n=Eh(e,i);return hi(n,n.next),hi(e,e.next)}function gA(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Di(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ms(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&mA(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function mA(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function AA(i,t,e,n){let s=i;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xA(s)}function xA(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Di(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function CA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_A(i,t)&&(Ms(i,t)&&Ms(t,i)&&yA(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||Yr(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function Sh(i,t,e,n){let s=or(le(i,t,e)),r=or(le(i,t,n)),o=or(le(e,n,i)),a=or(le(e,n,t));return!!(s!==r&&o!==a||s===0&&rr(i,e,t)||r===0&&rr(i,n,t)||o===0&&rr(e,i,n)||a===0&&rr(e,t,n))}function rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function or(i){return i>0?1:i<0?-1:0}function _A(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ms(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function yA(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Eh(i,t){let e=new ja(i.i,i.x,i.y),n=new ja(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ql(i,t,e,n){let s=new ja(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ja(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function IA(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ms=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$l(t),th(n,t);let o=t.length;e.forEach($l);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,th(n,e[c]);let a=aA.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $l(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function th(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var fn=class i extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new T,m=new pt;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let A=0;A<s;A++){let g=A*(n+1);for(let p=0;p<n;p++){let b=p+g,I=b,C=b+n+1,D=b+n+2,S=b+1;a.push(I,C,S),a.push(C,D,S)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Fr=class i extends Ce{constructor(t=new ys([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;ms.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let b=m[g];ms.isClockWise(b)===!0&&(m[g]=b.reverse())}let A=ms.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let b=m[g];f=f.concat(b)}for(let g=0,p=f.length;g<p;g++){let b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,p=A.length;g<p;g++){let b=A[g],I=b[0]+u,C=b[1]+u,D=b[2]+u;n.push(I,C,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return MA(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function MA(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ui=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,d=new T,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let b=[],I=p/n,C=0;p===0&&o===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let D=0;D<=e;D++){let S=D/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+I*a),u.y=t*Math.cos(o+I*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+I*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(S+C,1-I),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let I=h[p][b+1],C=h[p][b],D=h[p+1][b],S=h[p+1][b+1];(p!==0||o>0)&&f.push(I,C,S),(p!==n-1||c<Math.PI)&&f.push(C,D,S)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ss=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let A=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let A=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,b=(s+1)*f+m;o.push(A,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Kn=class extends Zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ar(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ja=class extends Zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,a=2*e-n;break;case Qc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,c=2*n-e;break;case Qc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-d*g+2*d*A-d*m,b=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,I=(-1-f)*g+(1.5+f)*A+.5*m,C=f*g-f*A;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+b*o[l+D]+I*o[c+D]+C*o[u+D];return r}},Qa=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},$a=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ja(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&bA(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===so,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ia;var di=class extends sn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=fr;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends sn{};tc.prototype.ValueTypeName="color";var ec=class extends sn{};ec.prototype.ValueTypeName="number";var nc=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Xe.slerpFlat(r,0,o,l-a,o,l,c);return r}},zr=class extends sn{InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends sn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=fr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends sn{};ic.prototype.ValueTypeName="vector";var sc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},SA=new sc,rc=class{constructor(t){this.manager=t!==void 0?t:SA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Or=class extends Br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qo=new jt,eh=new T,nh=new T,oc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ac=class extends oc{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ac}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Hr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ih();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ih(){return performance.now()}var _c="\\[\\]\\.:\\/",EA=new RegExp("["+_c+"]","g"),yc="[^"+_c+"]",wA="[^"+_c.replace("\\.","")+"]",TA=/((?:WC+[\/:])*)/.source.replace("WC",yc),VA=/(WCOD+)?/.source.replace("WCOD",wA),RA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),PA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),UA=new RegExp("^"+TA+VA+RA+PA+"$"),LA=["material","materials","bones","map"],cc=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(EA,"")}static parseTrackName(t){let e=UA.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);LA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=cc;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KA=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);var pn={x0:-12,x1:12,z0:-6.4,z1:12},Ne={x:0,z:-6,w:5,d:1.2},Pn=[{id:"oven1",x:-6,z:-3.4,input:{x:-6,z:-1.3},shelf:{x:-3.7,z:-3.4}},{id:"oven2",x:6,z:-3.4,input:{x:6,z:-1.3},shelf:{x:3.7,z:-3.4},needs:"oven2"}],gn={x:-.9,z:-4.5,r:1.3},qe={x:1.9,z:-4.5,r:1},rn={x:-3.2,z:2.4,r:1.1},ws=1.25,Qi=[{id:"field1",x:0,z:6.4,cols:4,rows:3},{id:"field2",x:-7.2,z:6.8,cols:3,rows:4,needs:"field2"},{id:"field3",x:7.2,z:6.8,cols:3,rows:4,needs:"field3"}],pi=1.45,Zr=6,wh=2.4,Mc=10,Th=10,Vh=16,ke=[{id:"basket",cost:15,x:2.8,z:2,icon:"\u{1F9FA}",ar:"\u0633\u0644\u0629 \u0623\u0643\u0628\u0631",en:"Bigger basket"},{id:"field2",cost:30,x:-7.2,z:2.6,icon:"\u{1F383}",ar:"\u062D\u0642\u0644 \u0642\u0631\u0639 \u062C\u062F\u064A\u062F",en:"New pumpkin patch"},{id:"chute",cost:40,x:-3.2,z:2.4,icon:"\u{1F6DD}",ar:"\u0632\u062D\u0644\u064A\u0642\u0629 \u0627\u0644\u0642\u0631\u0639",en:"Pumpkin chute"},{id:"oven2",cost:60,x:6,z:-.2,icon:"\u{1F525}",ar:"\u0641\u0631\u0646 \u062A\u0627\u0646\u064A",en:"Second oven"},{id:"waiter",cost:80,x:4.2,z:.8,icon:"\u{1F43B}",ar:"\u062F\u0628\u062F\u0648\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F",en:"Teddy the helper"},{id:"tables",cost:90,x:-9.4,z:-2.6,icon:"\u{1FA91}",ar:"\u062A\u0631\u0627\u0628\u064A\u0632\u0627\u062A \u0644\u0644\u0636\u064A\u0648\u0641",en:"Tables for guests"},{id:"farmer",cost:110,x:-1.8,z:10.4,icon:"\u{1F430}",ar:"\u0623\u0631\u0646\u0648\u0628 \u0627\u0644\u0641\u0644\u0627\u062D",en:"Bunny the farmer"},{id:"field3",cost:130,x:7.2,z:2.6,icon:"\u{1F383}",ar:"\u062D\u0642\u0644 \u0643\u0628\u064A\u0631",en:"Big pumpkin patch"},{id:"basket2",cost:120,x:1.6,z:10.4,icon:"\u{1F9FA}",ar:"\u0633\u0644\u0629 \u0639\u0645\u0644\u0627\u0642\u0629",en:"Giant basket"},{id:"lights",cost:160,x:9.4,z:-2.6,icon:"\u{1F3EE}",ar:"\u0632\u064A\u0646\u0629 \u0627\u0644\u062E\u0631\u064A\u0641",en:"Autumn lights"}],bc=["bear","fox","bunny","cat","raccoon","owl"],Rh=i=>5+(i.includes("basket")?4:0)+(i.includes("basket2")?6:0);function Ph(i){let t=i&&typeof i=="object"?i:{},e=new Set(ke.map(o=>o.id)),n=Array.isArray(t.unlocked)?[...new Set(t.unlocked.filter(o=>e.has(o)))]:[],s={};if(t.paid&&typeof t.paid=="object")for(let o of ke){let a=Math.floor(Number(t.paid[o.id]));a>0&&a<o.cost&&!n.includes(o.id)&&(s[o.id]=a)}let r=o=>Number.isFinite(Number(o))&&Number(o)>0?Math.floor(Number(o)):0;return{coins:Math.min(r(t.coins),999999),unlocked:n,paid:s,served:r(t.served),pies:r(t.pies),complete:t.complete===!0&&n.length===ke.length,muted:t.muted===!0,chef:t.chef==="boy"||t.chef==="girl"?t.chef:null}}var Uh=.13,qA=4.8,Te=.35,Ke=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Lh=[[0,-7.5],[-1.4,-8.3],[-2.8,-8.9],[-4.2,-9.4],[-5.6,-9.8]],Dh={x:-13,z:-10.5},FA={x:13,z:-10.5};function zA(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Kr=class{constructor(t,e=7){this.save=t,this.rand=zA(e),this.p={x:0,z:1.5,heading:Math.PI,moving:0,kind:null,stack:0,tick:0},this.plots=[];for(let n of Qi)for(let s=0;s<n.rows;s++)for(let r=0;r<n.cols;r++)this.plots.push({field:n.id,x:n.x+(r-(n.cols-1)/2)*pi,z:n.z+(s-(n.rows-1)/2)*pi,ripe:!0,t:0});this.ovens=Pn.map(n=>({...n,in:0,out:0,t:0})),this.counter=0,this.cash=0,this.chute=[],this.customers=[],this.spawnT=1,this.nextId=1,this.events=[],this.waiter={x:4.2,z:.8,kind:null,stack:0,tick:0,heading:0,moving:0,target:null},this.farmer={x:-1.8,z:10.4,kind:null,stack:0,tick:0,heading:0,moving:0,target:null},this.time=0}has(t){return this.save.unlocked.includes(t)}get capacity(){return Rh(this.save.unlocked)}fieldOpen(t){let e=Qi.find(n=>n.id===t);return!e.needs||this.has(e.needs)}ovenOpen(t){return!t.needs||this.has(t.needs)}get pads(){return ke.filter(t=>!this.has(t.id)).slice(0,2)}get complete(){return this.save.unlocked.length===ke.length}step(t,e){return this.events=[],this.time+=t,this._move(this.p,e,t),this._chef(t),this._grow(t),this._bake(t),this._chuteStep(t),this._customers(t),this.has("waiter")&&this._waiter(t),this.has("farmer")&&this._farmer(t),this.events}_solids(){let t=[[Ne.x-Ne.w/2,Ne.z-Ne.d/2,Ne.x+Ne.w/2,Ne.z+Ne.d/2]];for(let e of this.ovens)this.ovenOpen(e)&&t.push([e.x-1.4,e.z-1.1,e.x+1.4,e.z+1.1]);return t}_move(t,e,n,s=qA){let{x:r,z:o}=e,a=Math.hypot(r,o);if(a>1&&(r/=a,o/=a),t.moving=Math.min(1,a),a<.08){t.moving=0;return}t.heading=Math.atan2(r,o),t.x+=r*s*n,t.z+=o*s*n,t.x=Math.max(pn.x0+Te,Math.min(pn.x1-Te,t.x)),t.z=Math.max(-5,Math.min(pn.z1-Te,t.z));for(let[c,l,h,u]of this._solids())if(t.x>c-Te&&t.x<h+Te&&t.z>l-Te&&t.z<u+Te){let d=[[t.x-(c-Te),"x",c-Te],[h+Te-t.x,"x",h+Te],[t.z-(l-Te),"z",l-Te],[u+Te-t.z,"z",u+Te]];d.sort((f,m)=>f[0]-m[0]),t[d[0][1]]=d[0][2]}}_walkTo(t,e,n,s){let r=e.x-t.x,o=e.z-t.z,a=Math.hypot(r,o);return a<.25?(t.moving=0,!0):(this._move(t,{x:r/a,z:o/a},n,s),!1)}_chef(t){let e=this.p;e.tick-=t,!(e.tick>0)&&this._act(e,this.capacity,"chef")&&(e.tick=Uh)}_act(t,e,n){var s;if((t.kind===null||t.kind==="pumpkin")&&t.stack<e&&n!=="waiter"){let r=this.plots.find(o=>o.ripe&&this.fieldOpen(o.field)&&Ke(o,t)<.95);if(r)return r.ripe=!1,r.t=Zr,t.kind="pumpkin",t.stack++,this.events.push({type:"pick",who:n,plot:this.plots.indexOf(r),n:t.stack}),t.stack===e&&n==="chef"&&this.events.push({type:"full"}),!0}if(t.kind==="pumpkin"&&t.stack>0){if(this.has("chute")&&Ke(t,rn)<ws&&this.chute.length<24)return t.stack--,this.chute.push({t:1.1}),this.events.push({type:"chute",who:n}),t.stack||(t.kind=null),!0;for(let r of this.ovens)if(this.ovenOpen(r)&&r.in<Mc&&Ke(t,r.input)<ws)return t.stack--,r.in++,this.events.push({type:"drop",who:n,oven:r.id}),t.stack||(t.kind=null),!0}if((t.kind===null||t.kind==="pie")&&t.stack<e&&n!=="farmer"){for(let r of this.ovens)if(this.ovenOpen(r)&&r.out>0&&Ke(t,r.shelf)<ws)return r.out--,t.kind="pie",t.stack++,this.events.push({type:"takePie",who:n,oven:r.id,n:t.stack}),!0}if(t.kind==="pie"&&t.stack>0&&this.counter<Vh&&Ke(t,gn)<gn.r)return t.stack--,this.counter++,this.events.push({type:"serve",who:n}),t.stack||(t.kind=null),!0;if(n!=="chef")return!1;if(this.cash>0&&Ke(t,qe)<qe.r+.2){let r=Math.min(this.cash,Math.max(1,Math.ceil(this.cash/6)));return this.cash-=r,this.save.coins+=r,this.events.push({type:"collect",n:r,left:this.cash}),!0}for(let r of this.pads)if(Ke(t,r)<1&&this.save.coins>0){let o=(s=this.save.paid[r.id])!=null?s:0,a=Math.min(this.save.coins,r.cost-o,Math.max(1,Math.ceil(r.cost/18)));return this.save.coins-=a,this.save.paid[r.id]=o+a,this.events.push({type:"pay",pad:r.id,n:a,paid:o+a,cost:r.cost}),o+a>=r.cost&&(delete this.save.paid[r.id],this.save.unlocked.push(r.id),this.events.push({type:"unlock",pad:r.id}),this.complete&&!this.save.complete&&(this.save.complete=!0,this.events.push({type:"complete"}))),!0}return!1}_grow(t){for(let e of this.plots)e.ripe||(e.t-=t,e.t<=0&&(e.ripe=!0,this.events.push({type:"ripe",plot:this.plots.indexOf(e)})))}_bake(t){for(let e of this.ovens)this.ovenOpen(e)&&(e.in>0&&e.out<Th?(e.t+=t,e.t>=wh&&(e.t=0,e.in--,e.out++,this.save.pies++,this.events.push({type:"baked",oven:e.id}))):e.in||(e.t=0))}_chuteStep(t){for(let e of this.chute)e.t-=t;for(;this.chute.length&&this.chute[0].t<=0;){let e=this.ovens.filter(n=>this.ovenOpen(n)&&n.in<Mc).sort((n,s)=>n.in-s.in)[0];if(!e){this.chute[0].t=.3;break}this.chute.shift(),e.in++,this.events.push({type:"chuteIn",oven:e.id})}}_customers(t){this.spawnT-=t;let e=this.has("tables")?2.4:this.has("oven2")?2.9:4;if(this.spawnT<=0&&this.customers.filter(s=>s.state!=="leave").length<Lh.length){this.spawnT=e*(.8+this.rand()*.4);let s=1+Math.floor(this.rand()*(this.has("oven2")?3:2));this.customers.push({id:this.nextId++,kind:bc[Math.floor(this.rand()*bc.length)],x:Dh.x,z:Dh.z,heading:0,moving:0,state:"come",want:s,got:0,tick:0,happy:0}),this.events.push({type:"arrive"})}this.customers.filter(s=>s.state!=="leave").forEach((s,r)=>{let[o,a]=Lh[r],c=this._walkCustomer(s,{x:o,z:a},t);if(r===0&&c){if(s.state="front",s.tick-=t,s.tick<=0&&this.counter>0&&s.got<s.want&&(this.counter--,s.got++,s.tick=.35,this.events.push({type:"buy",id:s.id})),s.got>=s.want){let l=s.want*3+(this.has("tables")?1:0);this.cash+=l,this.save.served++,s.state="leave",s.happy=1.5,this.events.push({type:"sold",id:s.id,coins:l,kind:s.kind})}}else s.state==="come"&&c&&(s.state="wait")});for(let s of this.customers)s.state==="leave"&&(s.happy=Math.max(0,s.happy-t),this._walkCustomer(s,FA,t)&&(s.gone=!0));this.customers=this.customers.filter(s=>!s.gone)}_walkCustomer(t,e,n){let s=e.x-t.x,r=e.z-t.z,o=Math.hypot(s,r);if(o<.08)return t.moving=0,!0;let a=Math.min(o,3.2*n);return t.x+=s/o*a,t.z+=r/o*a,t.heading=Math.atan2(s,r),t.moving=1,!1}_helperAct(t,e,n,s){t.tick-=s,!(t.tick>0)&&this._act(t,e,n)&&(t.tick=Uh*1.4)}_waiter(t){let e=this.waiter;if(e.stack)(e.stack>=4||!this.ovens.some(n=>this.ovenOpen(n)&&n.out>0&&Ke(e,n.shelf)<ws))&&(e.target={x:gn.x+.6,z:gn.z});else{let n=this.ovens.filter(s=>this.ovenOpen(s)&&s.out>0).sort((s,r)=>r.out-s.out)[0];e.target=n?n.shelf:{x:4.2,z:.8}}(this._walkTo(e,e.target,t,3.4)||Ke(e,e.target)<.9)&&this._helperAct(e,4,"waiter",t)}_farmer(t){let e=this.farmer,n=this.has("chute")?rn:this.ovens[0].input;if(e.stack>=4||e.stack>0&&!this.plots.some(s=>s.ripe&&this.fieldOpen(s.field)))e.target=n;else{let s=null,r=1e9;for(let o of this.plots){if(!o.ripe||!this.fieldOpen(o.field))continue;let a=Ke(o,e)-Math.min(4,Ke(o,this.p))*.5;a<r&&(r=a,s=o)}e.target=s?{x:s.x,z:s.z}:{x:-1.8,z:10.4}}(this._walkTo(e,e.target,t,3.2)||Ke(e,e.target)<.8)&&this._helperAct(e,4,"farmer",t)}};function Sc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ce,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Nh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let A=0;A<o[h].length;++A)f.push(o[h][A][d]);let m=Nh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Nh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new me(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let A=h.getComponent(d,m);a.setComponent(d+u,m,A)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ec=new Map;function nt(i,t=0,e=1){let n=`${i}|${t}|${e}`;return Ec.has(n)||Ec.set(n,new Kn({color:i,emissive:t,emissiveIntensity:e})),Ec.get(n)}function Jt(i,t,e,n,s=0,r=0,o=0){let a=new zt(new Vn(i,t,e),n);return a.position.set(s,r,o),a}function pe(i,t,e,n,s=0,r=0,o=0,a=16){let c=new zt(new dn(i,t,e,a),n);return c.position.set(s,r,o),c}function Bt(i,t,e=0,n=0,s=0,r=1,o=1,a=1,c=14){let l=new zt(new ui(i,c,Math.max(8,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,o,a),l}function $i(i,t,e,n=0,s=0,r=0,o=10){let a=new zt(new Yi(i,t,o),e);return a.position.set(n,s,r),a}var wc;function BA(){if(wc)return wc;let i=new ui(1,24,14),t=i.attributes.position,e=new T;for(let n=0;n<t.count;n++){e.fromBufferAttribute(t,n);let s=Math.atan2(e.z,e.x),r=1-.09*Math.pow(Math.abs(Math.cos(s*4)),.6);e.x*=r,e.z*=r,e.y*=.72,e.y>.6&&(e.y-=(e.y-.6)*.6),t.setXYZ(n,e.x,e.y,e.z)}return i.computeVertexNormals(),wc=i,i}var Fh=new Kn({vertexColors:!0});function gi(i,t,e){let n=(i.index,i).clone();e&&n.applyMatrix4(e);let s=new Vt(t),r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new me(o,3)),n}var mi=(i=0,t=0,e=0,n=1,s=1,r=1,o=0,a=0)=>new jt().compose(new T(i,t,e),new Xe().setFromEuler(new De(o,0,a)),new T(n,s,r)),jr;function OA(){return jr||(jr=Sc([gi(BA(),16747039,mi(0,.72,0)),gi(new dn(.12,.16,.45,7),7031326,mi(0,1.55,0)),gi(new ui(.28,8,6),5025616,mi(.25,1.42,0,1,.25,.6,0,-.5))]),jr)}function Ai(i=.3){let t=new zt(OA(),Fh);return t.scale.setScalar(i),t}var Jr;function kA(){return Jr||(Jr=Sc([gi(new dn(.3,.25,.12,18),15317098,mi(0,.06,0)),gi(new dn(.26,.26,.03,18),15761450,mi(0,.125,0)),gi(new Ss(.28,.035,6,20),14262354,mi(0,.125,0,1,1,1,Math.PI/2)),gi(new ui(.07,8,6),16775920,mi(0,.15,0,1,.5,1))]),Jr)}function ts(i=1){let t=new zt(kA(),Fh);return t.scale.setScalar(i),t}function zh(){let i=new Rt,t=nt(6078282);for(let e=0;e<3;e++){let n=Bt(.12,t,Math.cos(e*2.1)*.1,.12,Math.sin(e*2.1)*.1,1,.3,.6,8);n.rotation.y=e*2.1,i.add(n)}return i}function Bh(){return pe(.16,.16,.05,nt(16763196,9067008,.35),0,.025,0,14)}function Oh(i="girl"){let t=new Rt,e=new Rt;t.add(e);let n=nt(16173472),s=nt(16777215),r=nt(i==="girl"?16748465:5214184),o=nt(i==="girl"?8011293:3810324),a=[];for(let d of[-.13,.13]){let f=new Rt;f.position.set(d,.45,0),f.add(pe(.08,.08,.4,nt(5916214),0,-.2,0,8)),f.add(Bt(.11,nt(8014378),0,-.42,.04,1,.6,1.4,8)),e.add(f),a.push(f)}e.add(pe(.25,.32,.55,r,0,.72,0)),e.add(pe(.24,.3,.45,s,0,.69,.05));let c=[];for(let d of[-1,1]){let f=new Rt;f.position.set(d*.3,.92,0),f.add(pe(.065,.065,.36,r,0,-.17,0,8)),f.add(Bt(.08,n,0,-.37,0,1,1,1,8)),e.add(f),c.push(f)}let l=new Rt;l.position.y=1.32,l.add(Bt(.32,n)),l.add(Bt(.335,o,0,.06,-.06,1,.92,.95));for(let d of[-1,1])l.add(Bt(.045,nt(2759184),d*.11,.02,.29,1,1.3,.6,8)),l.add(Bt(.045,nt(16751258),d*.19,-.08,.25,1,.6,.4,8));let h=new zt(new Ss(.06,.015,5,10,Math.PI),nt(9058858));h.position.set(0,-.1,.3),h.rotation.z=Math.PI,l.add(h),i==="girl"?(l.add(Bt(.16,o,0,-.08,-.32,1,1.4,1)),l.add(Bt(.06,nt(16735370),0,.12,-.3,1,1,1,8))):l.add(Bt(.2,o,0,.18,.12,1.4,.45,1)),l.add(pe(.24,.24,.18,s,0,.32,0));for(let d=0;d<5;d++)l.add(Bt(.15,s,Math.cos(d*1.256)*.12,.5,Math.sin(d*1.256)*.12,1,.9,1,10));l.add(Bt(.17,s,0,.56,0,1,.9,1,10)),e.add(l);let u=new Rt;return u.position.set(0,.9,-.42),e.add(u),{root:t,body:e,legs:a,arms:c,head:l,back:u}}var qh={bear:{fur:11565642,belly:15255968},fox:{fur:15759914,belly:16773600},bunny:{fur:15920872,belly:16766690},cat:{fur:10132136,belly:16053492},raccoon:{fur:9080726,belly:14606046},owl:{fur:10514495,belly:15916216}};function Qr(i="bear",t=null){var h;let e=(h=qh[i])!=null?h:qh.bear,n=new Rt,s=new Rt;n.add(s);let r=nt(e.fur),o=nt(e.belly),a=[];for(let u of[-.13,.13]){let d=new Rt;d.position.set(u,.3,0),d.add(Bt(.12,r,0,-.17,.03,1,1,1.3,8)),s.add(d),a.push(d)}s.add(Bt(.34,r,0,.52,0,1,1.05,.95)),s.add(Bt(.24,o,0,.48,.16,1,1.1,.6)),t&&s.add(pe(.3,.36,.3,nt(t),0,.5,.02));let c=new Rt;c.position.y=1,c.add(Bt(.3,r)),c.add(Bt(.14,o,0,-.07,.24,1.2,.8,.7,10)),c.add(Bt(.05,nt(2759184),0,-.02,.36,1,.8,.8,8));for(let u of[-1,1])c.add(Bt(.045,nt(1710618),u*.11,.07,.26,1,1.25,.6,8));if(i==="bear")for(let u of[-1,1])c.add(Bt(.1,r,u*.21,.24,0,1,1,.6,8));if(i==="fox"||i==="cat")for(let u of[-1,1]){let d=$i(.1,.24,r,u*.17,.3,0,4);d.rotation.z=-u*.3,c.add(d)}if(i==="bunny")for(let u of[-1,1]){let d=Bt(.07,r,u*.1,.42,-.02,1,3.2,.6,8);d.rotation.z=-u*.15,c.add(d)}if(i==="raccoon"){c.add(Bt(.2,nt(3816e3),0,.07,.17,1.35,.45,.6,10));for(let u of[-1,1])c.add(Bt(.045,nt(16777215),u*.11,.08,.28,1,1,.5,8));for(let u of[-1,1])c.add(Bt(.08,r,u*.2,.25,0,1,1,.6,8))}if(i==="owl"){for(let u of[-1,1]){c.add(Bt(.1,nt(16777215),u*.11,.06,.22,1,1,.5,10)),c.add(Bt(.05,nt(1710618),u*.11,.06,.28,1,1,.5,8));let d=$i(.06,.18,r,u*.18,.3,0,4);d.rotation.z=-u*.4,c.add(d),s.add(Bt(.12,r,u*.33,.55,0,.5,1.2,1,8))}c.add($i(.05,.1,nt(16756768),0,-.04,.33,4).rotateX(Math.PI/2))}if(i==="fox"||i==="cat"||i==="raccoon"){let u=Bt(.12,i==="raccoon"?nt(5921376):r,0,.4,-.38,1,1,2.4,8);u.rotation.x=-.6,s.add(u)}s.add(c);let l=new Rt;return l.position.set(0,.7,-.38),s.add(l),{root:n,body:s,legs:a,arms:[],head:c,back:l}}function kh(){let i=new Rt,t=nt(12866863),e=nt(9320992);i.add(Jt(2.6,1.2,2,t,0,.6,0));for(let o=0;o<6;o++)i.add(Jt(2.62,.05,2.02,e,0,.18+o*.2,0));let n=Bt(1.15,t,0,1.2,0,1.05,.85,.85,18);i.add(n),i.add(pe(.22,.26,1.1,e,.55,2.3,-.35,10));let s=new Rt;s.position.set(0,.95,1),s.add(Jt(1.1,.55,.12,nt(2757128),0,0,0)),s.add(pe(.55,.55,.12,nt(2757128),0,.27,0,18).rotateX(Math.PI/2));let r=new Rt;return r.add(Bt(.32,nt(16742938,16734720,1),-.15,-.1,.04,1,.8,.3,10)),r.add(Bt(.26,nt(16761402,16752640,1),.18,-.12,.06,1,.9,.3,10)),s.add(r),s.add(Jt(1.4,.12,.3,nt(14734016),0,-.32,.12)),i.add(s),{root:i,fire:r}}function Hh(){let i=new Rt,t=nt(11565634);i.add(Jt(1.4,.12,1,t,0,.06,0));for(let[e,n,s,r]of[[0,-.5,1.4,.08],[0,.5,1.4,.08],[-.7,0,.08,1],[.7,0,.08,1]])i.add(Jt(s,.32,r,t,e,.2,n));return i}function Gh(){let i=new Rt,t=nt(13671002);i.add(Jt(1.3,.1,1.1,t,0,.62,0));for(let e of[-.55,.55])for(let n of[-.45,.45])i.add(Jt(.1,.62,.1,nt(10119738),e,.31,n));return i.add(Jt(1.36,.04,1.16,nt(16774102),0,.68,0)),i}function Wh(i=5){let t=new Rt,e=10;for(let n=0;n<e;n++)t.add(Jt(i/e,1,1.1,nt(n%2?16777215:15222586),-i/2+(n+.5)*(i/e),.5,0));t.add(Jt(i+.2,.12,1.3,nt(13208138),0,1.06,0));for(let n=0;n<9;n++){let s=$i(.13,.26,nt([16747039,16765498,15222586][n%3]),-i/2+.3+n*((i-.6)/8),.75,.57,3);s.rotation.x=Math.PI,t.add(s)}return t.add(Jt(.6,.4,.5,nt(5222506),i/2-.55,1.32,0)),t.add(Jt(.5,.2,.12,nt(15921906),i/2-.55,1.6,-.12)),t}function Xh(){let i=new Rt,t=nt(12749386);i.add(Jt(1.4,.12,1.4,nt(9067050),0,.9,0));for(let[n,s]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.add(Jt(.12,.9,.12,t,n,.45,s));let e=pe(.8,.45,.5,nt(15245914),0,1.2,0,12);return i.add(e),i}function Yh(i=16747039){let t=new Rt,e=nt(13208138);t.add(pe(.6,.6,.08,e,0,.75,0,18)),t.add(pe(.06,.08,.75,nt(9067050),0,.37,0,8));for(let n of[-1,1]){t.add(Jt(.45,.06,.45,e,n*.95,.42,0)),t.add(Jt(.06,.5,.45,e,n*1.15,.67,0));for(let s of[-.18,.18])t.add(Jt(.05,.42,.05,nt(9067050),n*.95,.21,s))}return t.add(pe(.025,.025,1.6,nt(15658734),0,1.5,0,6)),t.add($i(1,.45,nt(i),0,2.35,0,8)),t.add(ts(.8).translateY(.79)),t}function Zh(i=1,t=15895592){let e=new Rt;e.add(pe(.16*i,.24*i,1.4*i,nt(8014376),0,.7*i,0,8));let n=nt(t);return e.add(Bt(.9*i,n,0,1.9*i,0,1,.9,1,10)),e.add(Bt(.6*i,n,.55*i,1.6*i,.2*i,1,.9,1,9)),e.add(Bt(.55*i,n,-.5*i,1.7*i,-.2*i,1,.9,1,9)),e}function Kh(i){let t=new Rt,e=nt(15254666),n=Math.max(2,Math.round(i/1.2));for(let s=0;s<=n;s++)t.add(Jt(.12,.7,.12,e,-i/2+s*i/n,.35,0));return t.add(Jt(i,.08,.06,e,0,.5,0)),t.add(Jt(i,.08,.06,e,0,.25,0)),t}function jh(){let i=new Rt,t=pe(.45,.45,.9,nt(15384922),0,.45,0,14);return t.rotation.z=Math.PI/2,t.position.y=.45,i.add(t),i}function Jh(){let i=new Rt;return i.add(pe(.05,.05,1.8,nt(9067050),0,.9,0,6)),i.add(Jt(1.3,.06,.06,nt(9067050),0,1.3,0)),i.add(pe(.25,.32,.6,nt(6987992),0,1.2,0,8)),i.add(Ai(.28).translateY(1.5)),i.add($i(.35,.3,nt(14200906),0,2.05,0,10)),i}function Qh(i){let t=new Rt,e=[],n=[16765498,16742970,16732010,8052586];for(let[s,r]of i)t.add(pe(.06,.06,2.6,nt(7031338),s,1.3,r,6));for(let s=0;s<i.length-1;s++){let[r,o]=i[s],[a,c]=i[s+1];for(let l=1;l<8;l++){let h=l/8,u=Math.sin(h*Math.PI)*.5,d=new Kn({color:n[(s*8+l)%4],emissive:n[(s*8+l)%4],emissiveIntensity:.8}),f=Bt(.09,d,r+(a-r)*h,2.5-u,o+(c-o)*h,1,1.2,1,8);t.add(f),e.push(f)}}return{root:t,bulbs:e}}function $h(){let i=new Rt,t=new zt(new fn(.82,.98,32),new Ye({color:16777215,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.y=.04,i.add(t);let e=new zt(new Xi(.82,32),new Ye({color:5222506,transparent:!0,opacity:.55}));e.rotation.x=-Math.PI/2,e.position.y=.03,i.add(e);let n=new zt(new fn(.82,.98,32,1,0,.001),new Ye({color:16765498}));return n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n),{root:i,ring:t,setProgress(s){n.geometry.dispose(),n.geometry=new fn(.8,1,32,1,Math.PI/2,Math.max(.001,s*Math.PI*2))}}}function tu(){let i=new ys;return i.moveTo(0,-.12),i.quadraticCurveTo(.1,0,0,.12),i.quadraticCurveTo(-.1,0,0,-.12),new Fr(i,4)}var eu=i=>1+(1.7+1)*Math.pow(i-1,3)+1.7*Math.pow(i-1,2),$r;function HA(){if($r)return $r;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),$r=new Pr(i),$r}var Tc=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new Ce,this.g.setAttribute("position",new me(this.pos,3)),this.g.setAttribute("color",new me(this.col,3)),this.pts=new Rr(this.g,new Cs({size:.28,map:HA(),vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.15})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let n=0;n<e;n++)this.pos[n*3+1]=-99}emit(t,e,n,s,r,o,a,c=1){let l=this.i++%this.n;this.pos.set([t,e,n],l*3),this.vel.set([s,r,o],l*3);let h=new Vt(a);this.col.set([h.r,h.g,h.b],l*3),this.life[l]=c}burst(t,e,n,s=30,r=[16765498,16742970,16732010,8052586,5943551]){for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,c=2+Math.random()*3;this.emit(t,e,n,Math.cos(a)*c,3+Math.random()*4,Math.sin(a)*c,r[o%r.length],1.2)}}update(t){for(let e=0;e<this.n;e++)if(!(this.life[e]<=0)){this.life[e]-=t,this.vel[e*3+1]-=9*t;for(let n=0;n<3;n++)this.pos[e*3+n]+=this.vel[e*3+n]*t;(this.life[e]<=0||this.pos[e*3+1]<0)&&(this.life[e]=0,this.pos[e*3+1]=-99)}this.g.attributes.position.needsUpdate=!0,this.g.attributes.color.needsUpdate=!0}},Un=class{constructor(t,e,n,s){this.items=[];for(let r=0;r<n;r++){let o=e(r);s(o,r),o.visible=!1,t.add(o),this.items.push(o)}this.shown=0}show(t){t=Math.min(t,this.items.length);for(let e=0;e<this.items.length;e++){let n=e<t;n&&!this.items[e].visible&&(this.items[e].userData.pop=0),this.items[e].visible=n}this.shown=t}animate(t){var e;for(let n of this.items){if(!n.visible||n.userData.pop===void 0)continue;n.userData.pop=Math.min(1,n.userData.pop+t*6);let s=((e=n.userData.base)!=null?e:1)*eu(n.userData.pop);n.scale.setScalar(s),n.userData.pop>=1&&delete n.userData.pop}}},to=class{constructor(t,e,n,s){this.scene=t,this.b=e,this.quality=n,this.pops=[],t.background=new Vt(16767400),t.fog=new wr(16767400,34,70),t.add(new Or(16773596,8022586,1.9));let r=new kr(16769720,1.5);r.position.set(-10,22,12),t.add(r),this._ground(),this._shop(),this._fields(),this._decor(),this._extras(),this._people(s),this._pads(),this.sparkles=new Tc(t,260),this._leaves(),this.syncUnlocked(!0)}_ground(){let t=this.scene,e=new zt(new Rn(80,70),nt(11061594));e.rotation.x=-Math.PI/2,e.position.z=2,t.add(e);let n=new zt(new Rn(pn.x1-pn.x0,6.4),nt(15257512));n.rotation.x=-Math.PI/2,n.position.set(0,.01,-3.6),t.add(n);for(let o=0;o<60;o++){let a=new zt(new Xi(.22+o%3*.06,7),nt(14203018));a.rotation.x=-Math.PI/2,a.position.set(pn.x0+.6+o*7.3%(pn.x1-pn.x0-1.2),.02,-6.4+o*3.7%6),t.add(a)}let s=new zt(new Rn(40,3.4),nt(14268812));s.rotation.x=-Math.PI/2,s.position.set(0,.012,-9.6),t.add(s);let r=new zt(new Rn(2.2,6),nt(13805944));r.rotation.x=-Math.PI/2,r.position.set(0,.015,1.4),t.add(r)}_shop(){let t=this.scene,e=Wh(Ne.w);e.position.set(Ne.x,0,Ne.z),t.add(e),this.ovenModels={};for(let c of Pn){let l=new Rt,h=kh();l.add(h.root),l.position.set(c.x,0,c.z);let u=Hh();u.position.set(c.input.x-c.x,0,c.input.z-c.z+.1),l.add(u);let d=Gh();d.position.set(c.shelf.x-c.x+(c.x<0?.1:-.1),0,0),l.add(d),t.add(l);let f=new Un(t,()=>Ai(.24),10,(A,g)=>{A.position.set(c.input.x-.45+g%4*.3,.12+Math.floor(g/4)*.22,c.input.z+.1+(g%2-.5)*.3),A.userData.base=.24}),m=new Un(t,()=>ts(.8),10,(A,g)=>{A.position.set(c.shelf.x+(c.x<0?.1:-.1)+(g%2-.5)*.55,.7+Math.floor(g/2)*.12,(g%4<2?-.2:.2)+c.shelf.z),A.userData.base=.8});this.ovenModels[c.id]={group:l,fire:h.fire,crateItems:f,shelfItems:m}}this.counterPies=new Un(t,()=>ts(.8),16,(c,l)=>{c.position.set(-2+l%8*.5,1.12+Math.floor(l/8)*.12,Ne.z+(Math.floor(l/8)?-.25:.2)),c.userData.base=.8}),this.cashCoins=new Un(t,()=>Bh(),30,(c,l)=>{let h=l%5;c.position.set(qe.x-.3+h%3*.32,.03+Math.floor(l/5)*.055,qe.z+(h<3?-.15:.2)),c.userData.base=1});let n=new zt(new fn(.85,1,28),new Ye({color:16765498,transparent:!0,opacity:.8}));n.rotation.x=-Math.PI/2,n.position.set(qe.x,.03,qe.z),t.add(n);let s=new zt(new fn(1.1,1.25,28),new Ye({color:16777215,transparent:!0,opacity:.7}));s.rotation.x=-Math.PI/2,s.position.set(gn.x,.03,gn.z),t.add(s);for(let c of Pn)for(let l of[c.input,c.shelf]){let h=new zt(new fn(1,1.15,28),new Ye({color:16777215,transparent:!0,opacity:.55}));h.rotation.x=-Math.PI/2,h.position.set(l.x,.03,l.z),this.ovenModels[c.id].group.attach(h)}let r=new Rt;r.add(Jt(9,3.4,3,nt(15983300),0,1.7,0));let o=new zt(new dn(.01,3.4,2.2,4,1),nt(11814703));o.rotation.y=Math.PI/4,o.scale.set(1.9,1,.65),o.position.y=4.5,r.add(o);for(let c of[-2.8,2.8])r.add(Jt(1.2,1.1,.1,nt(9425151),c,2.1,1.52));r.add(Jt(1.3,2.1,.1,nt(10115626),0,1.05,1.52)),r.position.set(-3,0,-14.5),this.scene.add(r);let a=Jt(3.2,.7,.12,nt(15245914),0,3.15,1.6);r.add(a)}_fields(){let t=this.scene;this.fieldModels={};for(let e of Qi){let n=new Rt,s=e.cols*pi+.6,r=e.rows*pi+.6,o=new zt(new Vn(s,.14,r),nt(9067058));o.position.set(e.x,.05,e.z),n.add(o);for(let c=0;c<e.rows;c++)n.add(Jt(s-.2,.08,.5,nt(8014376),e.x,.14,e.z+(c-(e.rows-1)/2)*pi));let a=Kh(s+.6);a.position.set(e.x,0,e.z+r/2+.3),n.add(a),t.add(n),this.fieldModels[e.id]=n}this.plotModels=this.b.plots.map(e=>{let n=new Rt;n.position.set(e.x,.12,e.z);let s=Ai(.34);s.rotation.y=Math.random()*Math.PI*2,n.add(s);let r=zh();return n.add(r),t.add(n),{g:n,pumpkin:s,sprout:r,field:e.field}})}_decor(){let t=this.scene,e=[15895592,15226154,15909166,14251562,11814703];[[-14,-3],[-14,3],[-14,9],[14,-3],[14,3],[14,9],[-10,18],[-3,19],[4,18.5],[10,18],[-16,-12],[-9,-13.5],[6,-14],[13,-12.5],[16,-8],[-17,6],[17,12]].forEach(([r,o],a)=>{let c=Zh(.9+a%3*.25,e[a%e.length]);c.position.set(r,0,o),t.add(c)});for(let[r,o]of[[-11,11.5],[11,-.2],[-11,.2],[10.6,11.6]]){let a=jh();a.position.set(r,0,o),a.rotation.y=r,t.add(a)}let s=Jh();s.position.set(3.2,0,9.6),t.add(s);for(let[r,o]of[[-11.5,-5.8],[11.5,-5.8],[-3.6,-6.4],[3.6,-6.4]]){let a=Ai(.4);a.position.set(r,0,o),t.add(a)}}_extras(){let t=this.scene,e=new Rt,n=Xh();n.position.set(rn.x,0,rn.z),e.add(n);let s=Pn[0],r=new T(rn.x,1,rn.z),o=new T(s.input.x+.6,.35,s.input.z+.6),a=r.distanceTo(o),c=Jt(.6,.08,a,nt(12749386));c.position.copy(r).lerp(o,.5),c.lookAt(o),e.add(c);for(let u of[-.32,.32]){let d=Jt(.06,.18,a,nt(9067050));d.position.copy(c.position),d.quaternion.copy(c.quaternion),d.translateX(u),d.translateY(.1),e.add(d)}t.add(e),this.chuteModel=e,this.chuteFrom=r,this.chuteTo=o,this.chuteItems=new Un(t,()=>Ai(.24),24,u=>{u.userData.base=.24});let l=new Rt;for(let[u,d,f]of[[-10,-4.6,16747039],[-10.2,-1,5943551]]){let m=Yh(f);m.position.set(u,0,d),l.add(m)}t.add(l),this.tables=l;let h=Qh([[-11.6,-6.6],[-6,-7.2],[0,-7.4],[6,-7.2],[11.6,-6.6]]);t.add(h.root),this.lights=h}_people(t){this.setChef(t),this.chefStack=this._stackPools(this.chef.back,15);let e=Qr("bear",16777215);this.scene.add(e.root),this.waiter=e,this.waiterStack=this._stackPools(e.back,4);let n=Qr("bunny",6987992),s=pe(.42,.42,.04,nt(15254618),0,.28,0,14);s.add(pe(.2,.24,.2,nt(15254618),0,.1,0,12)),n.head.add(s),this.scene.add(n.root),this.farmer=n,this.farmerStack=this._stackPools(n.back,4),this.customerModels=new Map}setChef(t){if(this.chef&&this.chefKind===t)return;let e=null;this.chef&&(this.scene.remove(this.chef.root),e=this.chefStack),this.chefKind=t,this.chef=Oh(t),this.scene.add(this.chef.root),e&&this.chef.back.add(e.pumpkins.group,e.pies.group)}_stackPools(t,e){let n=new Rt,s=new Rt;t.add(n,s);let r=new Un(n,()=>Ai(.26),e,(a,c)=>{a.position.set(0,-.25+c*.36,-.05),a.rotation.y=c*1.3,a.userData.base=.26}),o=new Un(s,()=>ts(.95),e,(a,c)=>{a.position.set(0,-.2+c*.15,-.05),a.userData.base=.95});return r.group=n,o.group=s,{pumpkins:r,pies:o}}_pads(){this.padModels=new Map;for(let t of ke){let e=$h();e.root.position.set(t.x,0,t.z),e.root.visible=!1,this.scene.add(e.root),this.padModels.set(t.id,e)}}_leaves(){let t=this.quality.low?40:90,e=new Kn({color:16777215,side:en,vertexColors:!1}),n=new Vr(tu(),e,t),s=[15895592,15226154,15909166,13190442];this.leafData=[];for(let r=0;r<t;r++)n.setColorAt(r,new Vt(s[r%4])),this.leafData.push({x:(Math.random()-.5)*34,y:Math.random()*12,z:(Math.random()-.5)*30,s:.6+Math.random()*.8,r:Math.random()*6,w:.5+Math.random()});n.frustumCulled=!1,this.scene.add(n),this.leafMesh=n,this._m=new jt,this._q=new Xe,this._e=new De,this._v=new T,this._sv=new T}syncUnlocked(t=!1){let e=s=>this.b.has(s),n=(s,r)=>{s.visible===r&&s.userData.inited||(s.userData.inited=!0,s.visible=r,r&&!t&&this.pop(s))};n(this.ovenModels.oven2.group,e("oven2"));for(let s of Qi)n(this.fieldModels[s.id],!s.needs||e(s.needs));n(this.chuteModel,e("chute")),n(this.tables,e("tables")),n(this.lights.root,e("lights")),n(this.waiter.root,e("waiter")),n(this.farmer.root,e("farmer"))}pop(t){t.scale.setScalar(.01),this.pops.push({obj:t,t:0})}update(t,e){var o;let n=this.b;n.plots.forEach((a,c)=>{let l=this.plotModels[c],h=this.fieldModels[a.field].visible;if(l.g.visible=h,!!h)if(a.ripe)l.pumpkin.userData.grow!==1&&(l.pumpkin.userData.grow=1,l.pumpkin.scale.setScalar(.34)),l.pumpkin.visible=!0,l.sprout.visible=!1,l.pumpkin.position.y=Math.abs(Math.sin(e*2+c))*.02;else{let u=1-Math.max(0,a.t)/Zr;l.sprout.visible=!0,l.pumpkin.visible=u>.35,l.pumpkin.userData.grow=u,l.pumpkin.scale.setScalar(.34*Math.max(.05,(u-.35)/.65))}});for(let a of n.ovens){let c=this.ovenModels[a.id];c.crateItems.show(a.in),c.shelfItems.show(a.out),c.crateItems.animate(t),c.shelfItems.animate(t);let l=a.in>0;c.fire.scale.setScalar(l?1+Math.sin(e*14+a.x)*.12:.55)}this.counterPies.show(n.counter),this.counterPies.animate(t),this.cashCoins.show(Math.min(30,Math.ceil(n.cash/2))),this.cashCoins.animate(t),this.chuteItems.show(n.chute.length),n.chute.forEach((a,c)=>{let l=this.chuteItems.items[c],h=1-Math.max(0,a.t)/1.1;l.position.copy(this.chuteFrom).lerp(this.chuteTo,h),l.position.y+=.15,l.rotation.x=h*8}),this._walker(this.chef,n.p,t,e),this._stack(this.chefStack,n.p,t,e),this.waiter.root.visible&&(this._walker(this.waiter,n.waiter,t,e),this._stack(this.waiterStack,n.waiter,t,e)),this.farmer.root.visible&&(this._walker(this.farmer,n.farmer,t,e),this._stack(this.farmerStack,n.farmer,t,e));let s=new Set;for(let a of n.customers){s.add(a.id);let c=this.customerModels.get(a.id);c||(c=Qr(a.kind,[16748465,6987992,16765498,8052586][a.id%4]),c.pie=ts(.9),c.pie.position.set(0,.62,.36),c.pie.visible=!1,c.body.add(c.pie),this.scene.add(c.root),this.customerModels.set(a.id,c)),this._walker(c,a,t,e),c.pie.visible=a.got>0,a.happy>0&&(c.body.position.y=Math.abs(Math.sin(e*10))*.25*Math.min(1,a.happy))}for(let[a,c]of this.customerModels)s.has(a)||(this.scene.remove(c.root),this.customerModels.delete(a));let r=new Set(n.pads.map(a=>a.id));for(let[a,c]of this.padModels){let l=r.has(a);if(l&&!c.root.visible&&this.pop(c.root),c.root.visible=l,l){let h=ke.find(d=>d.id===a),u=((o=n.save.paid[a])!=null?o:0)/h.cost;c.f!==u&&(c.f=u,c.setProgress(u)),c.ring.scale.setScalar(1+Math.sin(e*4)*.04)}}this.lights.root.visible&&this.lights.bulbs.forEach((a,c)=>{a.material.emissiveIntensity=.5+.5*Math.abs(Math.sin(e*2+c))});for(let a of this.pops)a.t=Math.min(1,a.t+t*2.2),a.obj.scale.setScalar(Math.max(.01,eu(a.t)));this.pops=this.pops.filter(a=>a.t<1),this._leafStep(t,e),this.sparkles.update(t)}_walker(t,e,n,s){var h;t.root.position.set(e.x,0,e.z);let r=e.heading,o=t.root.rotation.y,a=r-o;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;t.root.rotation.y=o+a*Math.min(1,n*12);let c=(h=e.moving)!=null?h:0,l=Math.sin(s*13)*.6*c;t.legs[0]&&(t.legs[0].rotation.x=l,t.legs[1].rotation.x=-l),t.arms[0]&&(t.arms[0].rotation.x=-l*.8,t.arms[1].rotation.x=l*.8),e.happy||(t.body.position.y=Math.abs(Math.sin(s*13))*.06*c)}_stack(t,e,n,s){var c,l;let r=e.kind==="pumpkin"?e.stack:0,o=e.kind==="pie"?e.stack:0;t.pumpkins.show(r),t.pies.show(o),t.pumpkins.animate(n),t.pies.animate(n);let a=-Math.sin(s*6.5)*.05*((c=e.moving)!=null?c:0)-.06*((l=e.moving)!=null?l:0);t.pumpkins.group.rotation.x=a,t.pies.group.rotation.x=a}_leafStep(t,e){let n=this._m;for(let s=0;s<this.leafData.length;s++){let r=this.leafData[s];r.y-=t*.7*r.w,r.x+=Math.sin(e*r.w+r.r)*t*.6,r.y<.05&&(r.y=9+Math.random()*4,r.x=(Math.random()-.5)*34+this.b.p.x,r.z=(Math.random()-.5)*26+this.b.p.z),this._e.set(Math.sin(e*2+r.r)*1.2,r.r+e*.5,Math.cos(e*1.7+r.r)),this._q.setFromEuler(this._e),this._v.set(r.x,r.y,r.z),this._sv.setScalar(r.s),n.compose(this._v,this._q,this._sv),this.leafMesh.setMatrixAt(s,n)}this.leafMesh.instanceMatrix.needsUpdate=!0}dispose(){this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function nu(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(o){if(!(o._smp||!o.ctx)){o._smp={};for(let[a,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d);let u=o.ctx.decodeAudioData(h.buffer,d=>{o._smp[a]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...o){let a=s.apply(this,o);return r(this),a}),i.prototype.play=function(o,a){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[o];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[o]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,o,a)}}function iu(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(o){if(o._song||!o.ctx)return;o._song="loading";let a;try{a=new URL(e,document.baseURI).href}catch{return}let c=o.ctx;fetch(a).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(o.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(o.master||c.destination),h.start(),o._song=h,o.music&&o.music.gain&&(o.music.gain.value=0),s&&s.call(o,null)}).catch(()=>{o._song=null})}i.prototype.unlock=function(...o){let a=n?n.apply(this,o):void 0;return r(this),a},s&&(i.prototype.setTune=function(o){if(!this._song)return s.call(this,o)})}var su={baked:"data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7gMM9S8YJ5hvyXwho4jEjThVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEz4PMSJkKR40syAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",serve:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABQAABG4ABgYGBgkJCQkJDAwMDAwPDw8PDxJSUlJSVVVVVVVYWFhYWFtbW1tbXl5eXl5hoaGhoaSkpKSkp6enp6eqqqqqqq2tra2tsPDw8PDz8/Pz8/b29vb2+fn5+fn8/Pz8/P//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkArgAAAAAAAARuBuGm7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJ+KlXtDMAAZ2kbncSsAAOJgAAAAAAwfonuaRAAAABCbREREd4iIiI54IEEEI93cREREQQJk78REQnd3/3uIiIjPZBCP5cHwfB8HwQBDLg+D5+CAIBj/8Tv//0g+D4f3lsbKSshBjqRcjkwAAqNkVqRFUUSNpodmKokMG4/OhiqRCVlDTVpLLzLkfVthffoSFBepF3aEZcaAIA0hfTkU0amuD1l3/tYz7hzanq66p7tnHu+7ja11c1c9fwpN9f7vcpRuQ9qgqqlcTaSJRBTmFplRn/+zjEBYAL7S9pvJOAEXCl6zSTFegnKkJAp5k0j5OKQYODA2HxTPEsgOIew8YaNSYjBKOIj5prtNQ44554glxqb/+lDndsW//+ebb7UdHO2OJGljh1Deph7L9/o8k5UNwnkO3Q5qg1PL1StxkEkIEubD1SMUokLckUDN0dG3MmuCbJoYtPdsCJbpaBx27kfu6tKS7dpw44KuHlun0OQzlDxhoYb/2R6lo5kf1LczuVyjoiPdyPQyl+j/LlDo1j1FH1LGbM6Ro0kgAAAggygfO1wm9OGpnXedn/+zjECQEM8TNNp6TvgXYlqajEFpAVooCYPQWUOqrSDUh2K0ThZxk4Co1GVVGW3cK1ePylCi1qNxyLVX5bDLrdpfqWIhUaP/+a0lOo/6aJuo4cYeUpQ5TDvY5vMd4qLERgiDCSyyZDuWlI9wAEAmYCdZOCTjTpejhRtnNSAD5+wmdVQVsoPkZxGhWVFh8cEfSLrXVyUTPG9ic4gfWjI9J/HQZhrhEMEf+trkR2RzX5F2QjnZkMQzITtO+9jad4fgiBwk8UO7+yJRgAgAqgfFoxzph5g7lp6k7/+zjECAAMIUtE56C2SYqrKyqMgAMCIQo6yamWcR+OD1kxVeqmZt2SaOhy5FE9l+J9XSBONHbMOIAl38ei/oMCBilEShB2/9pUEtEUPO+ydH9kmpr1bT/TFRYroWtbklQfqH9SCLsmoFASUnIP2Nw1GTyVIM+iaoeHyUIZY14qY5TQUbv4/9JrT/O+fn///mPQcW7Lf/H/E///RYu1GMbdV+kIhn8Seouw4tjCKFJIM0r/f/os946FwUCMNEAkYKDsiyyAQfbQAAWu2O2NuMSCJyIINGMgDx//+zjEB4AMWS1/uJaAEZYn8CcSsAACwJzUiwxNVlZC8Osg5uG4ddNSy4b3Lho51ygmxuaG75gaXqJiLYyBhys3JAuMnp2tczHYXHqUgbCeGJKN/+n0EK/3Q+23/f/p6CEwMS8D/2J0eGKpqaQUEZUQFAO+0rZjCKLVTohg0knB44SjrUrJ0Jt7SJKTWpdUzuYEc2QptBWWdXYfTW/tlFBcTW/VvIBK/2ydI8f3+cJtO/lsSh/u61f/7lrK///c9OW//+2nf/wrQSt8LH/0BBWEJXQhNBIABCj/+zjEBIALLUt3/JUAAYKpLjxmltghdidWC7DRGQoOsa6WkxYsMR8cYQnNecULkB7NZ/pmASBKLFt09/q+iIVYcEkPUu3/3nN1uTmULVWjJdf/REdDB9//+5qHHFygwJhoB/+dRRKEyGRoIgEAAwERHotHQM0lRHuMUmZmJJCXmL7624eXu6276naMwVoT0ZJjSc4ttvrapFFAkikcHAUkk1pXu/r+rGPMVEBSWf//qxRFnHh0EFqJ//6uKiRgiA4yd9dAouuUJkMiUwAhALY2FprY3kaV+jH/+zjECQAMvUtt5kCzQXoo7PzDNPA6/sC8OWquF56+wvRRlcnWKiXWv9A3DjhHRBjYnZWI0iNSSX0l7E2mcNDw0B6L6VX///ILB840d/88rZxMUD5WERYABZdH/36yHD5QFFwkHWf1MA0w0kJiRgRAAAwypJpNDUDBWDSat7kmMI9LEsI2Vd15lNY/JF1F+rzynHaEKNZBExG48bE02c3dv6OdXNSQE6L48lN/r6d+9FSSCJRMqT/v39Eup+ySm///UrOkk7/yqq12skgAgCTR9RTOquu3LiT/+zjECAAMcUtdpLT0gYWpKrSVnlgViFIU6tFEzjUMlm41FckMCopv3bqamPgSIKsX0FqSTZFrdHOTOHHCpBRUFRKlv+/ujsa1io4PiWYzGmm/NMv8kTNRDlCokpZ/+qfPliI2kv9ZiVNTIihAAAIVHtGKC6iqKavaZiRIqk4mKkYAbWwU8tWeEB6RJjv2tqLp0twQbp4YQm2J//7F1CU4SRqEo8PHv+qfY9VzHU0aDA2Pe96e9fKI6ssfHbf/m/UeGx0SHfitbJ4rHtatIAAaTfHkiwlCEbT/+zjEBwAKsUlXpByzQU4pKrRlFlgw2xppJlobcWjao+yjgklCI633/KgKRHFww36qYtqnnCtJYkA4wenPf+n+WwiSApnbTtJLazFRJZEDjq//1+dnQaw1n+5T1rWetspBJJj2HaSzck0pGsRoo8YUjfLRt+O0i4uOjg+ZP9nZhqOORg6Quv+j6UmHmFw6VqP/27tScSepgp3TbX+uh13qRnr/XdbmSLPGiwcDX2ep6BbG2UAAACqB2hAmSSTg2QENkwFisdB0rY2lLVKh1LBtRet9W2kcMEj/+zjEFAAKdUVLozSywUqpKfSVFlrpdDYLS8pf6p+WHSiweM6o/6PL2Kb1VnEWN/1+3foUaz//VVN7IYJh49a7QHJEkyAUS3APc9FIZK65VshxJRBOtVPUQ3JV3uNiIc/9Og3cwiA8Jg3Iei8/5kQSjyZv3/o7bOdTIJEcztZFMxa2QmZV3kH5v+pfmRxELKPJZzuVUkkksqlVBtU6XvvScMmpqfKpSkqly4BK2uC2+RpRSdlA0eif+ozUIjv/Aj/GxJguPxMrTGVNb+rXOykMBRUqPo77vQz/+zjEIgAKhUdVhii0MVUV5vRnqhHlohqkdHRW+/9+YzlYSN6UABFpRIAAqABzDiqzqekgCAgIkH4s8uQUguLoiHF3mylkNEHit7k+cqxmbUYhemOaEYp9OkLbfIj2cqGrHIcckonNL/8WHIfklWv8V8BrsWXv/z4n60oAWsxGsA2LjUM7k7RjKlVr61v6iE+j2BUpvFEHJUCFg8u5yy2Uya100UDFGLaOI09+iMBNXm9jZDi3OZgrCI6xHMrcLcseEbXLNTxkpvdYWWB0RMOASHfj9fHYlV7/+zjELoBKDN0zJkR0wT4aZdRpDmEXUlyC96XdI2Mx0gh0FhPOkipTXdaG5LOgURAYhSRS/RLA2nX6LS2kBCvIKu9M35z+jyoFp4zur+28pcdnR6X3z9X3BhOj3WGaFnjowijprb7fUNJV516cqjVBAnAaKn0jh5bordzFJlKPJKJQaof0nXd3ZbLkUXa3RSl007oLLoONPHHgiSBwKLYsNqJNex71C5NujZmLAgRAAAhIAYBqmEqatFS3Mz9rVTV39femmYiKFLGVVs8MMNtTVsaxzMwLgKn/+zjEQAIKiK8oJ5qDwVKa5NiMrkgNzu5qHDy6JitXcnUcfDdNZx/uealkp8nE4s8pCCQBDQsbfsc7+j//1gQE4LYb56Rmt6eL3cDeItc+Xea++8Xn3fDk3HaAYnGwTrlw9pqNVnFUkjZ0zJETwNN7IOukDH7KrqjvdlcikDpXqm942rsMOiItIlTrirPu/+6kKAFOLIcKfVsZmZIsWTPjf5zv03jWZ7RdWiqZXhbr5z+cvvc3b2naiaajD5UDIdz4v599LdRypjyo8JmSpoYZBmonK9AstN//+zjETQIKWNMiJ9C0gTeS5BT8LoAS6f27+n9FAACIRIEEgHLAE3LWZnrdyXlXOMvJQvUexeWmszQtvZota3h63jxnxhCxcNGc8LCNdgCjBVrkl1JQnRSt1Hp+v5vu9nqcBDgcJfzKhwnq1B037o7vizHjcuJMYi/xYztsJEB9BrS+HjNhsCUGMjAi1Igzq8QrbAZYseDoJtGwsVAAoQFF60U0Z6+VnZdndZGK0f7FeIHWTkt73MZndw37yHSn9I+9bzfyVrT+JDI0OALJlke+Tq4LCjNTcEX/+zjEXgIIiHMtQwXnYTkQ48T3jPglFwk9bsjCUnhUcUGiIqG0B0Ze4Up2pdHXOsFa/2pV//oDbZbgXBISilZRimBX8vR98RHZEHoLsdFfSZlpSGRQmoHgdLBtLQoIAmkeRLGjwVa51n777+f5TL3Y/fv/1oW9EUWEkUEh0uDO9e7jSPaSWnXWipaXpICwAmwkTxudW7mxGpw98ecMuXyZF0JZ8k2H58cLiZKbdWqkXRmaLW5tLtP/v6MmVRSGZBDk8jzHz5G2zKb0era0QQAAph6mejBHy2X/+zjEdgMJSIsgJ7xnwP4K5QzBLHhWeNQWRCZURikKxdq14GaFWE2V/773RdmS76tVtH9HShpGwKcHa1HE6lu0v8NdqlmPef183/G4hAAkHXNouw+Ya2ZVoYvXVog0EqrRLcmrL0lsnCW93oT5xe1KvahjMaMq7+s8cLItoKQIaMDyXLHRUKclry7I30oBBbaXER9OtxViixQIiCtKLxztNk/dp/09lf6kOEehCnOtpSycXQCFIDCmFeV7IFLQBgRbHstad/0HM7parKtDMlHDDrg6fZfciR7/+zjEkoMInKEgR7RrQPMOZEjFDPhyPKrZzn20DMXw1++ihVz6d+gXmkFtYACwDIS6NFLU2IpHEDBQy/HFgt7yWwetnvzJ6Rx17gr7l6UwoyrVI9VTpZWSJcNX4flR7iWjvexBGycRWHR5Y1saZ1jV799C2lw6TbDW6GrWh5p/gEPFRs5NVSf6uPxWnQfqjoyNTah8hez8VCZUa80dXsqjs8gN61MpG56wLlRkgOA7xYxPzWG4aoatFE4VIhYVINcA0GWg04oVdFEQF0EEBJBmVEA/1g7VEhb/+zjEswMItL0eR6BLwOAJZIzBJLiJZURJFBnZRZWeQoBmuLCU/gCKIBmiD6GrpnOm8QOwSeKWA0moE4g/f6nMYzgR+pEdNtT4R4cDOT3P/oACwdpGCVkYARgVaOUkWElhJyRaLVrGpMdKfGqhjCmFIM6xqwVBRKFAKAiTKyxI8e5EJHjoUH/8CprGPyJJn+kqtXyxUqWqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE1YIHbG0ix4xDIUoaYkjzFPiqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE8AMSpPcWR7B6SRiOowhjDSCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",coin:"data:audio/mpeg;base64,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",unlock:"data:audio/mpeg;base64,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cIWDBeuUEqlBMGMUODYGuRk3b+dfj1UXKGcQyKkdpicz5VRiu3S4fnmSVRP/+zjE04MJ+SsiIwRpQSkG5EhgiVETG9Nv+LZolLOsUx3MNohvynJI4OJNEO7Eq37DCbIjtOriC4yieSQgp9yHh0Q4lhKxo5gINwboB6pKtWwGmkPgVEKhaQWPAtVzW8DYVlrZheOBaw92Kvm4zDnpPjOAzTKZrrlVgq4jbbpmD/+kxmtXl8n8kd0ABYOiI8GVewH2zq6ODBM00dSqErlEOQwTA1VCQfsPzfUXDcxMXKQyELg18+quSTITbnKJTKfNlLVDsLsb1P/vOFel9KdBlZ/c9H6RKRD/+zjE6AMLESUeRJhkgZ0xYsTDDlhr2+9J41zLsPGxOMG+qUGjwEGw0iOgfe+EnWrKuN9RMl8zLIQCEpWPgopizpl1em7wiLM//GU1btdyVzF8i5T8f8iI/Uuz8W+3Lff/3jEdKz12nxbHBnOMSx2780gd3QW35Yrpk3qvtyBAAAAHhgcrIHLfaX8jhbB1aStam4ahvLasUkcd1eyQII9afRua1nQuHtIJKxO7Ys2uGY6ozOHGKAVwAelCYkGKxQt6VE1lXAp8l9MJHCPXFvNMWb/+zbBi43D/+zjE6YPL0S8UB5hjyY4eogD0DaEiQIlJocdGFwMtPmuSxFmjHVymhTsMGI+ter+BNEre9NYx+hymSLi3tU6meuD+OtV1bHrnVsbg1/1fG8RKY1nev+8mVLNHay/HCXlL1V52Qf/qFbdc1YoV4NdPgBgYcDBSTkUUQr///yOx/EF87wo4FbBXQjgp+v//+3hRwK8FBchgUN6C4guQV4U/H+gvwnwjv/wX8joQ3wXoL+R0Ib4L4KKyGBR2JvQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVX/+zjE6gMLyTcSR6RjyV6aYoqYMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8IAWyZkcWYeAATYB2heMMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",buy:"data:audio/mpeg;base64,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",complete:"data:audio/mpeg;base64,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YwClciHGz3U1ViSOd45Eef/qemWpKfW2r6OQWLnVP6MPUmX6wLg4a/fZo0eqABSbcjBgCgGfiv+Gdm2fMc3d/t+lmnfyq6f/lG/iMFAPT/67elO1Ns6ZZJ6Pg7u8X+1qfbFUUTBjFOY7qHGo60YQKqsZhaf/+zjE54BMyY01grEWAX+wpmSmF8FG67NRHRjUvc5xr9Jhr6rQWQRKOb/L2rbC4vDEQVNiZHCveeqCUw03UXEEQGVAmzjCoyc+vTXSVkX8ZeJDgmUWF3mYVndG4OcIwpLI3eHDM/mXxj9hwcBiVuTfZeN8aRaSj5a+1Fpo9s7M9P6t/7vp+uejkiBcwRAjJuNheXrqAKJYduLoJYDSiDsMDUq1ya9WPUtdVj5Sj1PGxDUgOI5AtVpw8RWznWGsdIO1DTnr//+apjqzHsStQ6rPY+cjn2Nt+7z/+zjE5YAMpY8xBTz+AWwxZvAirrnmdm+27K3yBtE/suzfOqw8wEgdCgVio9THEBM8sAAEAClWkAAAAwRUojwbLxirLRDEIzXUogZqekCiu+tZ8CVhQ2Fq9IfvqA5p8egSdYZdWlzljjMt7pk3mBWqwsdPq+/76zP6ebLOoVJEyxqdNf6vWXNKZ3efe8599yTQ3kLOYM7JC+NUvvHxuv1vGs5+631jxIclsUi2jxpH8KuKb9IvonjKUsaX/698fe9e0R7WF/72fRa1tj+BFfzVTEFNRTMuMTD/+zjE5oANZY83oxWcwWixpzRRnxkwVVVVAADI6UgjNqUAgJWAmOqqnqXszex6qq6r4E1CmoUBAToNHREHRKGxKCqgag0eEp0SnVA0oO/6w0Ig4Ij3/gr/WCvf/ljyVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5QAMFZE3tFOAAnczJace8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEwQPIqGUhPDGAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var GA="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",_e=null,eo=!1;function ru(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Vc(){ru(),eo=!0;try{if(_e||(_e=document.createElement("audio"),_e.src=GA,_e.loop=!0,_e.preload="auto",_e.setAttribute("playsinline",""),_e.setAttribute("webkit-playsinline",""),_e.setAttribute("x-webkit-airplay","deny"),_e.volume=.01,_e.addEventListener("pause",()=>{eo&&!document.hidden&&setTimeout(()=>eo&&_e.paused&&_e.play().catch(()=>{}),300)})),_e.paused){let i=_e.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function ou(){eo=!1;try{_e&&!_e.paused&&_e.pause()}catch{}}function au(i,t){ru();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Ts=i=>440*Math.pow(2,(i-69)/12),WA=[[41,[57,60,65]],[38,[57,62,65]],[46,[58,62,65]],[48,[58,60,64]],[41,[57,60,65]],[45,[57,60,64]],[46,[58,62,65]],[48,[55,60,64]]],XA=[[0,0,77],[0,4,76],[1,0,74],[1,2,72],[1,4,74],[2,0,70],[2,4,74],[3,0,72],[4,0,77],[4,2,79],[4,4,81],[5,0,76],[5,4,72],[6,0,74],[6,2,77],[6,4,74],[7,0,72],[7,4,76]],es=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(Vc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;au(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let o=e.createGain();o.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(o).connect(this.master);let a=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=a.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=a,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){ou(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Vc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="play"?132:112,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_pluckBuffer(t){if(this.plucks.has(t))return this.plucks.get(t);let e=this.ctx,n=e.sampleRate,s=Math.floor(n*2),r=e.createBuffer(1,s,n),o=r.getChannelData(0),a=Math.max(2,Math.round(n/Ts(t))),c=new Float32Array(a);for(let u=0;u<a;u++)c[u]=(Math.random()*2-1)*.6;let l=0,h=.995-Math.max(0,t-60)*4e-4;for(let u=0;u<s;u++){let d=(l+1)%a,f=(c[l]+c[d])*.5*h;o[u]=c[l],c[l]=f,l=d}return this.plucks.set(t,r),r}pluck(t,e,n=.25,s=this.music){let r=this.ctx.createBufferSource();r.buffer=this._pluckBuffer(t);let o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=2800;let a=this.ctx.createGain();a.gain.value=n,r.connect(o).connect(a).connect(s),r.start(e),r.stop(e+2)}bell(t,e,n=.1,s=this.music,r=1.2){this._tone("sine",Ts(t),e,r,n,s,.003),this._tone("sine",Ts(t)*2.76,e,r*.4,n*.25,s,.003)}_tone(t,e,n,s,r,o=this.sfx,a=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+a),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(o),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,o=1,a=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=o;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(a),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,o,a=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(o,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(a),l.start(s),l.stop(s+r+.05)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="play";for(;this.nextTime<e;){let r=this.nextTime,o=this.step%48,a=Math.floor(o/6),c=o%6,[l,h]=WA[a];if(c===0&&this.pluck(l,r,.36),c===2||c===4)for(let u of h)this.pluck(u,r+Math.random()*.01,.07);for(let[u,d,f]of XA)u===a&&d===c&&this.bell(f+0,r,s?.075:.06);s&&c%2===1&&this._noise(r,.04,.018,"highpass",7e3,.7,this.music),this.step++,this.nextTime+=n}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"pick":{let r=e!=null?e:1;this._slide("sine",300+r*25,700+r*40,n,.1,.12),this._noise(n,.03,.04,"bandpass",1800,2);break}case"drop":this._tone("sine",160,n,.12,.14),this._noise(n,.06,.06,"lowpass",900);break;case"chute":this._slide("sine",1200,380,n,.35,.05),this._tone("sine",170,n,.1,.1);break;case"baked":this.bell(91,n,.12,s,1.4),this.bell(96,n+.12,.08,s,1.2);break;case"takePie":this._noise(n,.08,.05,"bandpass",3200,1.2,s,1800),this._tone("sine",660+(e!=null?e:0)*30,n,.08,.05);break;case"serve":this._tone("sine",2100,n,.12,.04),this._tone("sine",2650,n+.01,.1,.03),this._tone("sine",190,n,.07,.06);break;case"buy":this._tone("sine",1400,n,.06,.03);break;case"sold":this._noise(n,.05,.08,"highpass",3e3,.7),this._tone("square",1318,n+.06,.08,.035),this.bell(100,n+.1,.1,s,.9),this.bell(105,n+.16,.08,s,.9);break;case"coin":{let r=84+Math.min(14,e!=null?e:0);this._tone("sine",Ts(r),n,.16,.07),this._tone("sine",Ts(r+7),n+.04,.14,.05);break}case"pay":{let r=e!=null?e:0;this._tone("triangle",500+r*700,n,.07,.06);break}case"unlock":[72,76,79,84].forEach((r,o)=>this.pluck(r,n+o*.07,.35,s)),this.bell(96,n+.3,.1,s,1.2),this._noise(n+.25,.8,.05,"highpass",6e3,.6);break;case"complete":[[65,0],[69,.15],[72,.3],[77,.45],[81,.7],[84,.9],[89,1.1]].forEach(([r,o])=>this.pluck(r,n+o,.4,s)),[96,100,103,108].forEach((r,o)=>this.bell(r,n+1.2+o*.1,.08,s,1.5));break;case"arrive":this.bell(98,n,.05,s,.6),this.bell(94,n+.12,.04,s,.6);break;case"full":this._tone("sine",520,n,.1,.07),this._tone("sine",390,n+.11,.14,.07);break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.04),this._tone("square",196,n+.13,.14,.04);break;default:}}};nu(es,su);iu(es);var Rc={title:["\u0645\u062E\u0628\u0632 \u0627\u0644\u064A\u0642\u0637\u064A\u0646","Pumpkin Pie Maker"],play:["\u064A\u0644\u0627 \u0646\u062E\u0628\u0632!","Let's bake!"],who:["\u0645\u064A\u0646 \u0627\u0644\u0634\u064A\u0641\u061F","Who is the chef?"],girl:["\u0646\u0648\u0631","Nour"],boy:["\u0622\u062F\u0645","Adam"],exit:["\u062E\u0631\u0648\u062C","Exit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],drag:["\u062D\u0637 \u0635\u0628\u0627\u0639\u0643 \u0648\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u0645\u0634\u064A","Touch and drag to walk"],hPick:["\u0644\u0645\u0651 \u0627\u0644\u0642\u0631\u0639 \u0645\u0646 \u0627\u0644\u062D\u0642\u0644 \u{1F383}","Pick pumpkins in the patch \u{1F383}"],hOven:["\u0648\u062F\u0651\u064A \u0627\u0644\u0642\u0631\u0639 \u0644\u0644\u0641\u0631\u0646 \u{1F525}","Take the pumpkins to the oven \u{1F525}"],hShelf:["\u0627\u0644\u0641\u0637\u0627\u064A\u0631 \u0627\u0633\u062A\u0648\u062A! \u062E\u062F\u0647\u0627 \u{1F967}","Pies are ready! Pick them up \u{1F967}"],hCounter:["\u062D\u0637 \u0627\u0644\u0641\u0637\u0627\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0646\u0643 \u{1F3EA}","Put the pies on the counter \u{1F3EA}"],hCash:["\u0644\u0645\u0651 \u0627\u0644\u0641\u0644\u0648\u0633 \u{1FA99}","Collect the coins \u{1FA99}"],hPad:["\u0642\u0641 \u0639\u0644\u0649 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u0639\u0634\u0627\u0646 \u062A\u0641\u062A\u062D \u062D\u0627\u062C\u0629 \u062C\u062F\u064A\u062F\u0629 \u2728","Stand on the circle to build something new \u2728"],full:["\u0627\u0644\u0633\u0644\u0629 \u0627\u062A\u0645\u0644\u062A!","Basket full!"],opened:["\u0627\u062A\u0641\u062A\u062D","New"],done_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631 \u064A\u0627 \u0634\u064A\u0641! \u0627\u0644\u0645\u062E\u0628\u0632 \u0643\u0645\u0644 \u{1F389}","Well done, chef! The bakery is complete \u{1F389}"],done_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629 \u064A\u0627 \u0634\u064A\u0641\u0629! \u0627\u0644\u0645\u062E\u0628\u0632 \u0643\u0645\u0644 \u{1F389}","Well done, chef! The bakery is complete \u{1F389}"],served:["\u0632\u0628\u0627\u064A\u0646 \u0627\u062A\u0628\u0633\u0637\u0648\u0627","happy customers"],pies:["\u0641\u0637\u064A\u0631\u0629 \u0627\u062A\u062E\u0628\u0632\u062A","pies baked"],keep:["\u0643\u0645\u0651\u0644 \u0627\u0644\u062E\u0628\u064A\u0632","Keep baking"],loading:["\u0628\u0646\u0633\u062E\u0651\u0646 \u0627\u0644\u0641\u0631\u0646...","Warming up the oven..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},Vs="ar",Pc=!0,cu=i=>{Vs=i==="en"?"en":"ar"},Uc=i=>{Pc=i!=="boy"},Lc=()=>Vs,he=i=>{let t=Rc[`${i}_${Pc?"f":"m"}`]?`${i}_${Pc?"f":"m"}`:i;return Rc[t]?Rc[t][Vs==="en"?1:0]:i},on=i=>Vs==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),Dc=i=>Vs==="en"?i.en:i.ar;var lu=`
.pp-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.pp-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.pp-layer{position:absolute;inset:0;pointer-events:none}
.pp-layer button,.pp-layer .pp-card{pointer-events:auto}
.pp-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.pp-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.pp-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.pp-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.pp-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.pp-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.pp-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.pp-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.pp-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.pp-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.pp-label.full{background:#ffd75e;animation:ppPulse .5s infinite alternate}
@keyframes ppPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.pp-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.pp-toast.show{opacity:1}
.pp-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.pp-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.pp-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:ppUp 1s ease-out forwards}
@keyframes ppUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.pp-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.pp-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.pp-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.pp-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.pp-btn.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.pp-btn[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.pp-btn:active{transform:translateY(calc(var(--u)*.5))}
.pp-btn:focus-visible,.pp-node:focus-visible,.pp-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.pp-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.pp-land .pp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.pp-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.pp-card .ic{font-size:calc(var(--u)*8)}
.pp-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.pp-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.pp-card .pips{display:flex;gap:calc(var(--u)*.6)}
.pp-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.pp-card .pip.on{background:#f2a51e}
.pp-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.pp-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.pp-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.pp-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.pp-node.next{animation:ppPulse2 .8s infinite alternate}
@keyframes ppPulse2{to{transform:scale(1.08)}}
.pp-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.pp-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.pp-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.pp-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.pp-stars .off{filter:grayscale(1);opacity:.4}
.pp-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.pp-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.pp-made b{display:block;font-size:calc(var(--u)*5.4)}
.pp-made span{font-size:calc(var(--u)*2.8)}
.pp-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function _t(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var hu=`
.pp-root{background:#ffd9a8;color:#5a3a1a}
.pp-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.pp-padlbl .ic{font-size:calc(var(--u)*6)}
.pp-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.pp-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.pp-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.pp-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.pp-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.pp-chefs{display:flex;gap:calc(var(--u)*3)}
.pp-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.pp-chef .f{font-size:calc(var(--u)*9)}
.pp-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.pp-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.pp-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;var YA=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},ZA=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},Rs=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Nc=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),cu(e.lang),this.age=Number(e.age)||5,this.save=Ph(e.save),this.save.chef||(this.save.chef=e.gender==="boy"?"boy":"girl"),Uc(this.save.chef),this.base=e.base||"./",this.sound=new es,this.sound.muted=!!this.save.muted,this.quality={low:YA()},document.getElementById("pp-style")||document.head.append(_t("style",{id:"pp-style",text:lu+hu})),this.root=_t("div",{class:"pp-root",dir:Lc()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!ZA()){this.root.append(_t("div",{class:"pp-loading"},_t("div",{},he("noWebgl")," ",_t("button",{class:"pp-btn",onclick:()=>this.post({type:"exit"})},he("exit")))));return}this.loading=_t("div",{class:"pp-loading"},he("loading")),this.root.append(this.loading),this.renderer=new Er({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=Pe,this.renderer.toneMapping=uc,this.renderer.toneMappingExposure=1.05,this.root.prepend(this.renderer.domElement),this.layer=_t("div",{class:"pp-layer"}),this.root.append(this.layer),this.camera=new we(45,1,.5,200),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new Hr,this.bakery=new Kr(this.save,(Date.now()&65535)+1),this.scene=new Tr,this.world=new to(this.scene,this.bakery,this.quality,this.save.chef),this.arrow=new zt(new Yi(.35,.8,4),nt(16765498,16751104,.6)),this.arrow.rotation.x=Math.PI,this.arrow.visible=!1,this.scene.add(this.arrow),this._fonts().then(()=>{this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.root.style.setProperty("--u",`${Math.min(this.cw,this.ch)/100}px`),this.root.classList.toggle("pp-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?56:42,this.camera.updateProjectionMatrix())}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=_t("div",{class:"pp-joy"},_t("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let r=Math.min(this.cw,this.ch)/100*12,o=n.clientX-this.input.ox,a=n.clientY-this.input.oy,c=Math.hypot(o,a);c>r&&(o=o/c*r,a=a/c*r),this.input.x=o/r,this.input.z=a/r,this.joy.firstChild.style.transform=`translate(${o}px,${a}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this.joy.style.display="none")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this._saveNow(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=_t("button",{class:"pp-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},he("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren(),this.padLbls=null}_saveNow(){this._dirty=!1,this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_coins(){return this.coinEl=_t("span",{},on(this.save.coins)),_t("div",{class:"pp-pill"},_t("span",{class:"pp-coin"}),this.coinEl)}_mute(t){let e=_t("button",{class:"pp-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=_t("div",{class:"pp-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_topLeft(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)"}_bottomEnd(){return"bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"}showMenu(){this.mode="menu",this.paused=!1,this.sound.setMode("menu"),this._clear();let t=(e,n)=>_t("button",{class:`pp-chef${this.save.chef===e?" on":""}`,onclick:()=>{this.save.chef=e,Uc(e),this.world.setChef(e),this._saveNow(),this.showMenu()}},_t("span",{class:"f"},n),he(e));this.layer.append(_t("button",{class:"pp-round",style:this._topLeft(),"aria-label":he("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},Lc()==="en"?"\u2190":"\u2192"),_t("div",{class:"pp-top"},this._coins()),_t("div",{class:"pp-dim",style:"background:none"},_t("div",{class:"pp-panel",style:"background:rgba(255,247,230,.92)"},_t("div",{class:"pp-logo"},"\u{1F967} ",he("title")," \u{1F383}"),_t("div",{style:"font-weight:900;font-size:calc(var(--u)*4)"},he("who")),_t("div",{class:"pp-chefs"},t("girl","\u{1F469}\u200D\u{1F373}"),t("boy","\u{1F468}\u200D\u{1F373}")),this.save.served?_t("div",{class:"pp-stat"},_t("span",{},"\u{1F60A} ",on(this.save.served)," ",he("served")),_t("span",{},"\u{1F967} ",on(this.save.pies)," ",he("pies"))):null,_t("button",{class:"pp-btn pp-big",onclick:()=>this.play()},"\u25B6 ",he("play")))),this._mute(this._bottomEnd()),this._toastEl())}play(){this.mode="play",this.paused=!1,this.sound.setMode("play"),this._clear(),this.hud={hint:_t("div",{class:"pp-hint",style:"opacity:0"}),bubble:_t("div",{class:"pp-bubble",style:"display:none"}),max:_t("div",{class:"pp-bubble",style:"display:none"},"MAX")},this.padLbls=new Map;for(let t of ke){let e=_t("div",{class:"pp-padlbl",style:"display:none"},_t("span",{class:"ic"},t.icon),_t("span",{class:"c"},_t("span",{class:"pp-coin"}),_t("b",{},"")),_t("span",{class:"n"},Dc(t)));this.padLbls.set(t.id,e),this.layer.append(e)}this.layer.append(_t("button",{class:"pp-round",style:this._topLeft(),"aria-label":he("paused"),onclick:t=>{t.stopPropagation(),this.pause()}},"\u23F8"),_t("div",{class:"pp-top"},this._coins()),this.hud.bubble,this.hud.max,this.hud.hint,this._mute(this._bottomEnd()),this._toastEl()),this._hc={},this.playT=0,this.save.served||setTimeout(()=>this.mode==="play"&&this.toast(he("drag"),3),500)}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this._saveNow(),this.sound.suspend();let t=_t("div",{class:"pp-dim"},_t("div",{class:"pp-panel"},_t("div",{class:"pp-title"},he("paused")),_t("button",{class:"pp-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",he("resume")),_t("button",{class:"pp-btn wood",onclick:()=>{this.sound.resume(),this.showMenu()}},he("menu"))));this.layer.append(t)}_complete(){this.sound.play("complete"),this.world.sparkles.burst(this.bakery.p.x,2,this.bakery.p.z,80);let t=_t("div",{class:"pp-dim"},_t("div",{class:"pp-panel"},_t("div",{class:"pp-title"},he("done")),_t("div",{class:"pp-stars"},"\u2B50\u2B50\u2B50"),_t("div",{class:"pp-stat"},_t("span",{},"\u{1F60A} ",on(this.save.served)," ",he("served")),_t("span",{},"\u{1F967} ",on(this.save.pies)," ",he("pies"))),_t("button",{class:"pp-btn",onclick:()=>{t.remove(),this.paused=!1}},"\u25B6 ",he("keep"))));this.paused=!0,this.layer.append(t)}_playFrame(t,e){var h;let n=this.bakery,s=n.step(t,this._readInput());this.playT+=t;let r=0;for(let u of s){let d=u.who==="chef"||u.who===void 0;switch(u.type){case"pick":d&&this.sound.play("pick",u.n);break;case"drop":d&&this.sound.play("drop");break;case"chute":d&&this.sound.play("chute");break;case"baked":(!this._bakedT||e-this._bakedT>.6)&&(this.sound.play("baked"),this._bakedT=e);break;case"takePie":d&&this.sound.play("takePie",u.n);break;case"serve":d&&this.sound.play("serve");break;case"buy":this.sound.play("buy");break;case"sold":{this.sound.play("sold"),this._float(`+${on(u.coins)}`,qe.x,1.4,qe.z),this.world.sparkles.burst(qe.x,1,qe.z,8,[16765498,16770442]);break}case"collect":this.sound.play("coin",this._coinRun=((h=this._coinRun)!=null?h:0)+1),r++,this._dirty=!0;break;case"pay":this.sound.play("pay",u.paid/u.cost),this._dirty=!0;break;case"unlock":{let f=ke.find(m=>m.id===u.pad);this.sound.play("unlock"),this.world.syncUnlocked(),this.world.sparkles.burst(f.x,1,f.z,40),this.toast(`\u2728 ${he("opened")}: ${Dc(f)} ${f.icon}`,2.4),this._saveNow();break}case"complete":setTimeout(()=>this._complete(),1200);break;case"arrive":Math.random()<.5&&this.sound.play("arrive");break;case"full":this.sound.play("full");break;default:}}!r&&!s.some(u=>u.type==="collect")&&(this._coinRun=0),this._dirty&&(!this._lastSave||e-this._lastSave>8)&&(this._lastSave=e,this._saveNow()),this.world.update(t,e);let o=this.cw<this.ch,a=Math.max(-7,Math.min(7,n.p.x)),c=Math.max(-3.2,Math.min(8.5,n.p.z)),l=new T(a,o?15:10.5,c+(o?10.5:8.2));this.cam||(this.cam=l.clone()),this.cam.lerp(l,Math.min(1,t*3)),this.camera.position.copy(this.cam),this.camera.lookAt(this.cam.x,0,this.cam.z-(o?10.5:8.2)-1.4),this._guide(e),this._labels()}_guide(t){let e=this.bakery,n=e.p,s=this.age<=4||e.save.unlocked.length<2,r=null,o=null,a=e.pads.find(d=>{var f;return this.save.coins>=Math.min(8,d.cost-((f=this.save.paid[d.id])!=null?f:0))}),c=e.ovens.filter(d=>e.ovenOpen(d)&&d.out>0).sort((d,f)=>f.out-d.out)[0];if(n.kind==="pie")r=gn,o="hCounter";else if(n.kind==="pumpkin"&&(n.stack>=e.capacity||!e.plots.some(d=>d.ripe&&e.fieldOpen(d.field))||this._unloading))this._unloading=!0,r=e.has("chute")&&Rs(n,rn)<Rs(n,Pn[0].input)?rn:Pn[0].input,o="hOven";else if(a&&n.kind===null)r=a,o="hPad";else if(e.cash>=3&&n.kind===null)r=qe,o="hCash";else if(c&&n.kind===null&&!e.has("waiter"))r=c.shelf,o="hShelf";else{let d=null;for(let f of e.plots)f.ripe&&e.fieldOpen(f.field)&&(!d||Rs(f,n)<Rs(d,n))&&(d=f);r=d,o="hPick"}n.kind!=="pumpkin"&&(this._unloading=!1);let l=s&&r&&Rs(r,n)>1.2;this.arrow.visible=!!l,l&&(this.arrow.position.set(r.x,2.2+Math.abs(Math.sin(t*4))*.5,r.z),this.arrow.rotation.y=t*2);let h=this._hc,u=s&&this.playT<240&&o?he(o):"";h.hint!==u&&(h.hint=u,this.hud.hint.style.opacity=u?"1":"0",u&&(this.hud.hint.textContent=u))}_screen(t,e,n){let s=new T(t,e,n).project(this.camera);return[(s.x*.5+.5)*this.cw,(-s.y*.5+.5)*this.ch,s.z<1]}_labels(){var o;let t=this.bakery,e=this._hc;this.coinEl&&e.coins!==this.save.coins&&(e.coins=this.save.coins,this.coinEl.textContent=on(this.save.coins));let n=new Set(t.pads.map(a=>a.id));for(let[a,c]of this.padLbls){if(!n.has(a)){c.style.display="none";continue}let l=ke.find(m=>m.id===a),[h,u,d]=this._screen(l.x,.2,l.z);c.style.display=d?"flex":"none",c.style.left=`${h}px`,c.style.top=`${u}px`;let f=l.cost-((o=this.save.paid[a])!=null?o:0);c.dataset.left!==String(f)&&(c.dataset.left=String(f),c.querySelector("b").textContent=on(f))}let s=t.customers.find(a=>a.state==="front");if(s){let[a,c]=this._screen(s.x,2.2,s.z);this.hud.bubble.style.display="block",this.hud.bubble.style.left=`${a}px`,this.hud.bubble.style.top=`${c}px`;let l=`\u{1F967} ${on(s.got)}/${on(s.want)}`;e.bub!==l&&(e.bub=l,this.hud.bubble.textContent=l)}else this.hud.bubble.style.display="none";let r=t.p.stack>=t.capacity;if(this.hud.max.style.display=r?"block":"none",r){let[a,c]=this._screen(t.p.x,1.2+t.capacity*(t.p.kind==="pie"?.15:.36)+.6,t.p.z);this.hud.max.style.left=`${a}px`,this.hud.max.style.top=`${c}px`}}_float(t,e,n,s){let[r,o]=this._screen(e,n,s),a=_t("div",{class:"pp-float",style:`left:${r-20}px;top:${o}px`},t);this.layer.append(a),setTimeout(()=>a.remove(),1e3)}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&!this.paused)this._playFrame(t,e);else if(this.world.update(t,e),this.mode==="menu"){this.arrow.visible=!1;let n=this.cw<this.ch,s=e*.06,r=n?26:20;this.camera.position.set(Math.sin(s)*r*.5,n?20:14,6+Math.cos(s)*r*.6),this.camera.lookAt(0,0,-1),this.cam=null}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.save&&this._saveNow(),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.world.dispose(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},qc={start(i,t,e){let n=new Nc(i,t||{},e);return qc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.PumpkinPie=qc;var E0=qc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
